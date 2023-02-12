import { QueryInput } from '@aws-sdk/client-dynamodb';
import { Entity } from '@lib/entity';
import type { ReturnOption } from '@lib/entity/types';
import { AttributeNames, AttributeValues, GenericObject } from '@lib/utils';

export interface QueryRunOptions {
  extraInput?: Partial<QueryInput>;
  return?: ReturnOption;
  all?: boolean;
  delay?: number;
  max?: number;
}

export interface QueryRunOutput<E extends typeof Entity> {
  items: Array<InstanceType<E>>;
  count: number;
  scannedCount: number;
  lastKey?: GenericObject;
}

export interface BuildQueryConditionExpression {
  attributeNames: AttributeNames;
  attributeValues: AttributeValues;
  conditionExpression: string;
  keyConditionExpression: string;
}
