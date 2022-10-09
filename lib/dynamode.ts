import { Condition } from '@lib/condition';
import { column, createdAt, gsiPartitionKey, gsiSortKey, lsiSortKey, prefix, primaryPartitionKey, primarySortKey, suffix, updatedAt } from '@lib/decorators';
import { Entity } from '@lib/entity';
import { Query } from '@lib/query';
import { Scan } from '@lib/scan';
import { Settings } from '@lib/settings';
import { transactionGet, transactionWrite } from '@lib/transaction';

///// --- https://github.com/aws/aws-sdk-js-v3/issues/2125 ---
// some @aws-sdk clients references these DOM lib interfaces,
// so we need them to exist to compile without having DOM.
declare global {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  interface ReadableStream {}
  interface File {}
}

const settings = Settings.default;

export {
  //Condition
  Condition,

  //decorators
  column,
  prefix,
  suffix,
  primaryPartitionKey,
  primarySortKey,
  gsiPartitionKey,
  gsiSortKey,
  lsiSortKey,
  createdAt,
  updatedAt,

  //Entity
  Entity,

  //Query
  Query,

  //Scan
  Scan,

  //Settings
  settings,

  //transactions
  transactionGet,
  transactionWrite,
};
