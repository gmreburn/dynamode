import { DeleteItemCommandInput, DeleteItemCommandOutput, DynamoDB, GetItemCommandInput, GetItemCommandOutput } from '@aws-sdk/client-dynamodb';
import { Condition } from '@lib/Condition';
import { Query } from '@lib/Query';
import { Table } from '@lib/Table';
import { AttributeMap, classToObject, fromDynamo, GenericObject, isEmpty, NotFoundError, objectToDynamo, SEPARATOR } from '@lib/utils';
import { substituteModelDeleteConditions } from '@lib/utils/substituteConditions';
import { gsi1PartitionKey, gsi1SortKey, gsi2PartitionKey, gsi2SortKey, lsi1SortKey, lsi2SortKey, partitionKey, sortKey } from '@lib/utils/symbols';
import { ModelDeleteOptions, ModelProps, PrimaryKey } from '@Model/types';

import { ModelGetOptions } from './types';

export class Model {
  private static _ddb: DynamoDB;

  public static prefixPk: string;
  public static prefixSk: string;
  public static suffixPk: string;
  public static suffixSk: string;
  public static table: typeof Table;

  [partitionKey]: string | number;
  [sortKey]: string | number;

  [gsi1PartitionKey]?: string | number;
  [gsi2PartitionKey]?: string | number;

  [gsi1SortKey]?: string | number;
  [gsi2SortKey]?: string | number;

  [lsi1SortKey]?: string | number;
  [lsi2SortKey]?: string | number;

  constructor(props: ModelProps<Table>) {
    this[partitionKey] = props[partitionKey];
    this[sortKey] = props[sortKey];

    this[gsi1PartitionKey] = props[gsi1PartitionKey];
    this[gsi1SortKey] = props[gsi1SortKey];

    this[gsi2PartitionKey] = props[gsi2PartitionKey];
    this[gsi2SortKey] = props[gsi2SortKey];

    this[lsi1SortKey] = props[lsi1SortKey];
    this[lsi2SortKey] = props[lsi2SortKey];
  }

  public static query<M extends typeof Model>(this: M, key: typeof partitionKey | typeof gsi1PartitionKey, value: string | number): InstanceType<typeof Query<M>> {
    return new Query(this, key, value);
  }

  public static condition<M extends typeof Model>(this: M, key: string): InstanceType<typeof Condition<M>> {
    return new Condition(this, key);
  }

  public static get<M extends typeof Model>(this: M, primaryKey: PrimaryKey): Promise<InstanceType<M>>;
  public static get<M extends typeof Model>(this: M, primaryKey: PrimaryKey, options: Omit<ModelGetOptions, 'return'>): Promise<InstanceType<M>>;
  public static get<M extends typeof Model>(this: M, primaryKey: PrimaryKey, options: ModelGetOptions & { return: 'default' }): Promise<InstanceType<M>>;
  public static get<M extends typeof Model>(this: M, primaryKey: PrimaryKey, options: ModelGetOptions & { return: 'output' }): Promise<GetItemCommandOutput>;
  public static get<M extends typeof Model>(this: M, primaryKey: PrimaryKey, options: ModelGetOptions & { return: 'input' }): GetItemCommandInput;
  public static get<M extends typeof Model>(this: M, primaryKey: PrimaryKey, options?: ModelGetOptions): Promise<InstanceType<M> | GetItemCommandOutput> | GetItemCommandInput {
    const commandInput: GetItemCommandInput = {
      TableName: this.table.tableName,
      Key: objectToDynamo(this.appendPrefixSuffix(this, primaryKey)),
      ConsistentRead: options?.consistent || false,
      ...options?.extraInput,
    };

    if (options?.return === 'input') {
      return commandInput;
    }

    return (async () => {
      const result = await this._ddb.getItem(commandInput);

      if (!result || !result.Item) {
        throw new NotFoundError();
      }

      if (options?.return === 'output') {
        return result;
      }

      return this.parseFromDynamo(this, result.Item || {});
    })();
  }

  public static async update<M extends typeof Model>(
    this: M,
    primaryKey: PrimaryKey,
    props: Omit<Partial<ConstructorParameters<M>[0]>, typeof partitionKey | typeof sortKey>,
  ): Promise<InstanceType<M>> {
    const result = await this._ddb.updateItem({
      TableName: this.table.tableName,
      Key: objectToDynamo(this.appendPrefixSuffix(this, primaryKey)),
      ReturnValues: 'ALL_NEW',
      //TODO: implement better querying!!!
      UpdateExpression: `set ${Object.entries(props)
        .map(([key]) => `${key} = :${key}`)
        .join(', ')}`,
      ExpressionAttributeValues: objectToDynamo({
        ...Object.fromEntries(Object.entries(props).map(([key, value]) => [`:${key}`, value])),
      }),
    });

    return this.parseFromDynamo(this, result.Attributes || {});
  }

  public static async put<M extends typeof Model>(this: M, item: InstanceType<M>): Promise<InstanceType<M>> {
    await this._ddb.putItem({
      TableName: this.table.tableName,
      Item: this.modelToDynamo(this, item),
    });

    return item;
  }

  public static delete<M extends typeof Model>(this: M, primaryKey: PrimaryKey): Promise<void>;
  public static delete<M extends typeof Model>(this: M, primaryKey: PrimaryKey, options: Omit<ModelDeleteOptions<M>, 'return'>): Promise<void>;
  public static delete<M extends typeof Model>(this: M, primaryKey: PrimaryKey, options: ModelDeleteOptions<M> & { return: 'default' }): Promise<void>;
  public static delete<M extends typeof Model>(this: M, primaryKey: PrimaryKey, options: ModelDeleteOptions<M> & { return: 'output' }): Promise<DeleteItemCommandOutput>;
  public static delete<M extends typeof Model>(this: M, primaryKey: PrimaryKey, options: ModelDeleteOptions<M> & { return: 'input' }): DeleteItemCommandInput;
  public static delete<M extends typeof Model>(this: M, primaryKey: PrimaryKey, options?: ModelDeleteOptions<M>): Promise<void | DeleteItemCommandOutput> | DeleteItemCommandInput {
    const commandInput: DeleteItemCommandInput = {
      TableName: this.table.tableName,
      Key: objectToDynamo(this.appendPrefixSuffix(this, primaryKey)),
      ...options?.extraInput,
    };

    if (options?.condition) {
      const { conditionExpression, attributeNames, attributeValues } = substituteModelDeleteConditions(options.condition.conditions);
      if (conditionExpression) commandInput.ConditionExpression = conditionExpression;
      if (!isEmpty(attributeNames)) commandInput.ExpressionAttributeNames = attributeNames;
      if (!isEmpty(attributeValues)) commandInput.ExpressionAttributeValues = attributeValues;
    }

    if (options?.return === 'input') {
      return commandInput;
    }

    return (async () => {
      const result = await this._ddb.deleteItem(commandInput);

      if (options?.return === 'output') {
        return result;
      }

      return;
    })();
  }

  public static parseFromDynamo<M extends typeof Model>(model: M, dynamoItem: AttributeMap): InstanceType<M> {
    const item = this.modelFromDynamo(this, dynamoItem);
    return new model(item as any) as InstanceType<M>;
  }

  private static modelToDynamo<M extends typeof Model>(model: M, item: InstanceType<M>): AttributeMap {
    const primaryKey = { [partitionKey]: item[partitionKey], [sortKey]: item[sortKey] };
    const object = classToObject(item, this.appendPrefixSuffix(model, primaryKey));
    delete object[partitionKey];
    delete object[sortKey];

    object[this.table[gsi1PartitionKey]] = object[gsi1PartitionKey];
    delete object[gsi1PartitionKey];

    object[this.table[gsi1SortKey]] = object[gsi1SortKey];
    delete object[gsi1SortKey];

    object[this.table[lsi1SortKey]] = object[lsi1SortKey];
    delete object[lsi1SortKey];

    object[this.table[lsi2SortKey]] = object[lsi2SortKey];
    delete object[lsi2SortKey];

    return objectToDynamo(object);
  }

  private static modelFromDynamo<M extends typeof Model>(model: M, attributeMap: AttributeMap): GenericObject {
    const { table } = model;
    const item = fromDynamo(attributeMap);

    item[partitionKey] = this.truncatePrefixSuffixPk(model, item);
    delete item[table[partitionKey]];

    item[sortKey] = this.truncatePrefixSuffixSk(model, item);
    delete item[table[sortKey]];

    item[gsi1PartitionKey] = item[table[gsi1PartitionKey]];
    delete item[table[gsi1PartitionKey]];

    item[gsi1SortKey] = item[table[gsi1SortKey]];
    delete item[table[gsi1SortKey]];

    item[lsi2SortKey] = item[table[lsi2SortKey]];
    delete item[table[lsi2SortKey]];

    return item;
  }

  private static appendPrefixSuffix<M extends typeof Model>(model: M, primaryKey: PrimaryKey): GenericObject {
    const { table, prefixPk, prefixSk, suffixPk, suffixSk } = model;
    return {
      [table[partitionKey]]: [prefixPk, primaryKey[partitionKey], suffixPk].filter((p) => p).join(SEPARATOR),
      [table[sortKey]]: [prefixSk, primaryKey[sortKey], suffixSk].filter((s) => s).join(SEPARATOR),
    };
  }

  private static truncatePrefixSuffixPk<M extends typeof Model>(model: M, item: GenericObject): string {
    const { table, prefixPk, suffixPk } = model;

    return (item[table[partitionKey]] as string).replace(`${prefixPk}${SEPARATOR}`, '').replace(`${SEPARATOR}${suffixPk}`, '');
  }

  private static truncatePrefixSuffixSk<M extends typeof Model>(model: M, item: GenericObject): string {
    const { table, prefixSk, suffixSk } = model;

    return (item[table[sortKey]] as string).replace(`${prefixSk}${SEPARATOR}`, '').replace(`${SEPARATOR}${suffixSk}`, '');
  }

  static set ddb(value: DynamoDB) {
    this._ddb = value;
  }

  static get ddb() {
    return this._ddb;
  }
}
