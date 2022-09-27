import { QueryInput } from '@aws-sdk/client-dynamodb';
import { EntityClass, ReturnOption } from '@lib/Entity/types';
import { AttributeMap, GenericObject } from '@lib/utils';

export interface QueryExecOptions {
  extraInput?: Partial<QueryInput>;
  return?: ReturnOption;
}

export interface QueryExecOutput<T extends EntityClass<T>> {
  items: Array<InstanceType<T>>;
  count: number;
  scannedCount: number;
  lastKey?: GenericObject;
}

export interface BuildQueryConditionExpression {
  attributeNames: Record<string, string>;
  attributeValues: AttributeMap;
  conditionExpression: string;
  keyConditionExpression: string;
}
