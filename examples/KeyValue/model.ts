import { attribute, primaryPartitionKey } from '../../dist/decorators';
import { Entity, register } from '../../dist/entity';

type KeyValueKeys = {
  partitionKey: 'key';
};

type KeyValueProps = {
  key: string;
  value: Record<string, unknown>;
};

const TABLE_NAME = 'key-value';

export class KeyValue extends Entity {
  @primaryPartitionKey(String)
  key: string;

  @attribute(Object)
  value: Record<string, unknown>;

  constructor(props: KeyValueProps) {
    super();

    this.key = props.key;
    this.value = props.value;
  }
}

export const KeyValueRegistry = register<KeyValueKeys, typeof KeyValue>(KeyValue, TABLE_NAME);
