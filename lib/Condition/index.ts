import { AttributeType } from '@Condition/types';
import { EntityKeys } from '@lib/Entity/types';
import { ConditionExpression, UnknownClass } from '@lib/utils';

export class Condition<T extends UnknownClass> {
  public conditions: ConditionExpression[];
  private key: string;
  private orBetweenCondition: boolean;

  constructor(entity: T, key: EntityKeys<T>) {
    this.conditions = [];
    this.orBetweenCondition = false;
    this.key = String(key);
  }

  public attribute(key: EntityKeys<T>): Condition<T> {
    if (this.conditions.length > 0) {
      this.conditions.push({ expr: this.orBetweenCondition ? 'OR' : 'AND' });
    }
    this.orBetweenCondition = false;
    this.key = String(key);
    return this;
  }

  public get and(): Condition<T> {
    return this;
  }

  public get or(): Condition<T> {
    this.orBetweenCondition = true;
    return this;
  }

  public parenthesis(condition?: Condition<T>): Condition<T> {
    if (condition) {
      if (this.conditions.length > 0) {
        this.conditions.push({ expr: this.orBetweenCondition ? 'OR' : 'AND' });
      }
      this.orBetweenCondition = false; //TODO: change name and value
      this.conditions.push(...[{ expr: '(' }, ...condition.conditions, { expr: ')' }]);
    }
    return this;
  }

  public group(condition?: Condition<T>): Condition<T> {
    return this.parenthesis(condition);
  }

  public condition(condition?: Condition<T>): Condition<T> {
    if (condition) {
      if (this.conditions.length > 0) {
        this.conditions.push({ expr: this.orBetweenCondition ? 'OR' : 'AND' });
      }
      this.orBetweenCondition = false;
      this.conditions.push(...condition.conditions);
    }
    return this;
  }

  public contains(value: string | number): Condition<T> {
    this.conditions.push({ keys: [this.key], values: [value], expr: `contains($K, $V)` });
    return this;
  }

  public in(values: string[]): Condition<T> {
    this.conditions.push({ keys: [this.key], values, expr: `$K IN ${values.map(() => '$V').join(', ')}` });
    return this;
  }

  public type(value: AttributeType): Condition<T> {
    this.conditions.push({ keys: [this.key], values: [value], expr: 'attribute_type($K, $V)' });
    return this;
  }

  public size() {
    return {
      eq: (value: string | number): Condition<T> => {
        this.conditions.push({ keys: [this.key], values: [value], expr: 'size($K) = $V' });
        return this;
      },
      ne: (value: string | number): Condition<T> => {
        this.conditions.push({ keys: [this.key], values: [value], expr: 'size($K) <> $V' });
        return this;
      },
      lt: (value: string | number): Condition<T> => {
        this.conditions.push({ keys: [this.key], values: [value], expr: 'size($K) < $V' });
        return this;
      },
      le: (value: string | number): Condition<T> => {
        this.conditions.push({ keys: [this.key], values: [value], expr: 'size($K) <= $V' });
        return this;
      },
      gt: (value: string | number): Condition<T> => {
        this.conditions.push({ keys: [this.key], values: [value], expr: 'size($K) > $V' });
        return this;
      },
      ge: (value: string | number): Condition<T> => {
        this.conditions.push({ keys: [this.key], values: [value], expr: 'size($K) >= $V' });
        return this;
      },
    };
  }

  public not() {
    return {
      eq: (value: string | number): Condition<T> => this._ne(this.conditions, this.key, value),
      ne: (value: string | number): Condition<T> => this._eq(this.conditions, this.key, value),
      lt: (value: string | number): Condition<T> => this._ge(this.conditions, this.key, value),
      le: (value: string | number): Condition<T> => this._gt(this.conditions, this.key, value),
      gt: (value: string | number): Condition<T> => this._le(this.conditions, this.key, value),
      ge: (value: string | number): Condition<T> => this._lt(this.conditions, this.key, value),
      contains: (value: string | number): Condition<T> => {
        this.conditions.push({
          keys: [this.key],
          values: [value],
          expr: `NOT contains($K, $V)`,
        });
        return this;
      },
      in: (values: string[]): Condition<T> => {
        this.conditions.push({ keys: [this.key], values, expr: `NOT ($K IN ${values.map(() => '$V').join(', ')})` });
        return this;
      },
      exists: (): Condition<T> => {
        this.conditions.push({ keys: [this.key], expr: 'attribute_not_exists($K)' });
        return this;
      },
    };
  }

  public exists(): Condition<T> {
    this.conditions.push({ keys: [this.key], expr: 'attribute_exists($K)' });
    return this;
  }

  public eq(value: string | number): Condition<T> {
    return this._eq(this.conditions, this.key, value);
  }

  public ne(value: string | number): Condition<T> {
    return this._ne(this.conditions, this.key, value);
  }

  public lt(value: string | number): Condition<T> {
    return this._lt(this.conditions, this.key, value);
  }
  public le(value: string | number): Condition<T> {
    return this._le(this.conditions, this.key, value);
  }

  public gt(value: string | number): Condition<T> {
    return this._gt(this.conditions, this.key, value);
  }

  public ge(value: string | number): Condition<T> {
    return this._ge(this.conditions, this.key, value);
  }

  public beginsWith(value: string | number): Condition<T> {
    return this._beginsWith(this.conditions, this.key, value);
  }

  public between(value1: string | number, value2: string | number): Condition<T> {
    return this._between(this.conditions, this.key, value1, value2);
  }

  private _eq(conditions: ConditionExpression[], key: string, value: string | number): Condition<T> {
    conditions.push({ keys: [key], values: [value], expr: '$K = $V' });
    return this;
  }

  private _ne(conditions: ConditionExpression[], key: string, value: string | number): Condition<T> {
    conditions.push({ keys: [key], values: [value], expr: '$K = $V' });
    return this;
  }

  private _lt(conditions: ConditionExpression[], key: string, value: string | number): Condition<T> {
    conditions.push({ keys: [key], values: [value], expr: '$K < $V' });
    return this;
  }

  private _le(conditions: ConditionExpression[], key: string, value: string | number): Condition<T> {
    conditions.push({ keys: [key], values: [value], expr: '$K <= $V' });
    return this;
  }

  private _gt(conditions: ConditionExpression[], key: string, value: string | number): Condition<T> {
    conditions.push({ keys: [key], values: [value], expr: '$K > $V' });
    return this;
  }

  private _ge(conditions: ConditionExpression[], key: string, value: string | number): Condition<T> {
    conditions.push({ keys: [key], values: [value], expr: '$K >= $V' });
    return this;
  }

  private _beginsWith(conditions: ConditionExpression[], key: string, value: string | number): Condition<T> {
    conditions.push({ keys: [key], values: [value], expr: 'begins_with($K, $V)' });
    return this;
  }

  private _between(conditions: ConditionExpression[], key: string, v1: string | number, v2: string | number): Condition<T> {
    conditions.push({ keys: [key], values: [v1, v2], expr: '$K BETWEEN $V AND $V' });
    return this;
  }
}