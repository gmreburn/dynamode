import { insertBetween } from '@lib/utils';
export const RESERVED_WORDS = new Set([
  'ABORT',
  'ABSOLUTE',
  'ACTION',
  'ADD',
  'AFTER',
  'AGENT',
  'AGGREGATE',
  'ALL',
  'ALLOCATE',
  'ALTER',
  'ANALYZE',
  'AND',
  'ANY',
  'ARCHIVE',
  'ARE',
  'ARRAY',
  'AS',
  'ASC',
  'ASCII',
  'ASENSITIVE',
  'ASSERTION',
  'ASYMMETRIC',
  'AT',
  'ATOMIC',
  'ATTACH',
  'ATTRIBUTE',
  'AUTH',
  'AUTHORIZATION',
  'AUTHORIZE',
  'AUTO',
  'AVG',
  'BACK',
  'BACKUP',
  'BASE',
  'BATCH',
  'BEFORE',
  'BEGIN',
  'BETWEEN',
  'BIGINT',
  'BINARY',
  'BIT',
  'BLOB',
  'BLOCK',
  'BOOLEAN',
  'BOTH',
  'BREADTH',
  'BUCKET',
  'BULK',
  'BY',
  'BYTE',
  'CALL',
  'CALLED',
  'CALLING',
  'CAPACITY',
  'CASCADE',
  'CASCADED',
  'CASE',
  'CAST',
  'CATALOG',
  'CHAR',
  'CHARACTER',
  'CHECK',
  'CLASS',
  'CLOB',
  'CLOSE',
  'CLUSTER',
  'CLUSTERED',
  'CLUSTERING',
  'CLUSTERS',
  'COALESCE',
  'COLLATE',
  'COLLATION',
  'COLLECTION',
  'COLUMN',
  'COLUMNS',
  'COMBINE',
  'COMMENT',
  'COMMIT',
  'COMPACT',
  'COMPILE',
  'COMPRESS',
  'CONDITION',
  'CONFLICT',
  'CONNECT',
  'CONNECTION',
  'CONSISTENCY',
  'CONSISTENT',
  'CONSTRAINT',
  'CONSTRAINTS',
  'CONSTRUCTOR',
  'CONSUMED',
  'CONTINUE',
  'CONVERT',
  'COPY',
  'CORRESPONDING',
  'COUNT',
  'COUNTER',
  'CREATE',
  'CROSS',
  'CUBE',
  'CURRENT',
  'CURSOR',
  'CYCLE',
  'DATA',
  'DATABASE',
  'DATE',
  'DATETIME',
  'DAY',
  'DEALLOCATE',
  'DEC',
  'DECIMAL',
  'DECLARE',
  'DEFAULT',
  'DEFERRABLE',
  'DEFERRED',
  'DEFINE',
  'DEFINED',
  'DEFINITION',
  'DELETE',
  'DELIMITED',
  'DEPTH',
  'DEREF',
  'DESC',
  'DESCRIBE',
  'DESCRIPTOR',
  'DETACH',
  'DETERMINISTIC',
  'DIAGNOSTICS',
  'DIRECTORIES',
  'DISABLE',
  'DISCONNECT',
  'DISTINCT',
  'DISTRIBUTE',
  'DO',
  'DOMAIN',
  'DOUBLE',
  'DROP',
  'DUMP',
  'DURATION',
  'DYNAMIC',
  'EACH',
  'ELEMENT',
  'ELSE',
  'ELSEIF',
  'EMPTY',
  'ENABLE',
  'END',
  'EQUAL',
  'EQUALS',
  'ERROR',
  'ESCAPE',
  'ESCAPED',
  'EVAL',
  'EVALUATE',
  'EXCEEDED',
  'EXCEPT',
  'EXCEPTION',
  'EXCEPTIONS',
  'EXCLUSIVE',
  'EXEC',
  'EXECUTE',
  'EXISTS',
  'EXIT',
  'EXPLAIN',
  'EXPLODE',
  'EXPORT',
  'EXPRESSION',
  'EXTENDED',
  'EXTERNAL',
  'EXTRACT',
  'FAIL',
  'FALSE',
  'FAMILY',
  'FETCH',
  'FIELDS',
  'FILE',
  'FILTER',
  'FILTERING',
  'FINAL',
  'FINISH',
  'FIRST',
  'FIXED',
  'FLATTERN',
  'FLOAT',
  'FOR',
  'FORCE',
  'FOREIGN',
  'FORMAT',
  'FORWARD',
  'FOUND',
  'FREE',
  'FROM',
  'FULL',
  'FUNCTION',
  'FUNCTIONS',
  'GENERAL',
  'GENERATE',
  'GET',
  'GLOB',
  'GLOBAL',
  'GO',
  'GOTO',
  'GRANT',
  'GREATER',
  'GROUP',
  'GROUPING',
  'HANDLER',
  'HASH',
  'HAVE',
  'HAVING',
  'HEAP',
  'HIDDEN',
  'HOLD',
  'HOUR',
  'IDENTIFIED',
  'IDENTITY',
  'IF',
  'IGNORE',
  'IMMEDIATE',
  'IMPORT',
  'IN',
  'INCLUDING',
  'INCLUSIVE',
  'INCREMENT',
  'INCREMENTAL',
  'INDEX',
  'INDEXED',
  'INDEXES',
  'INDICATOR',
  'INFINITE',
  'INITIALLY',
  'INLINE',
  'INNER',
  'INNTER',
  'INOUT',
  'INPUT',
  'INSENSITIVE',
  'INSERT',
  'INSTEAD',
  'INT',
  'INTEGER',
  'INTERSECT',
  'INTERVAL',
  'INTO',
  'INVALIDATE',
  'IS',
  'ISOLATION',
  'ITEM',
  'ITEMS',
  'ITERATE',
  'JOIN',
  'KEY',
  'KEYS',
  'LAG',
  'LANGUAGE',
  'LARGE',
  'LAST',
  'LATERAL',
  'LEAD',
  'LEADING',
  'LEAVE',
  'LEFT',
  'LENGTH',
  'LESS',
  'LEVEL',
  'LIKE',
  'LIMIT',
  'LIMITED',
  'LINES',
  'LIST',
  'LOAD',
  'LOCAL',
  'LOCALTIME',
  'LOCALTIMESTAMP',
  'LOCATION',
  'LOCATOR',
  'LOCK',
  'LOCKS',
  'LOG',
  'LOGED',
  'LONG',
  'LOOP',
  'LOWER',
  'MAP',
  'MATCH',
  'MATERIALIZED',
  'MAX',
  'MAXLEN',
  'MEMBER',
  'MERGE',
  'METHOD',
  'METRICS',
  'MIN',
  'MINUS',
  'MINUTE',
  'MISSING',
  'MOD',
  'MODE',
  'MODIFIES',
  'MODIFY',
  'MODULE',
  'MONTH',
  'MULTI',
  'MULTISET',
  'NAME',
  'NAMES',
  'NATIONAL',
  'NATURAL',
  'NCHAR',
  'NCLOB',
  'NEW',
  'NEXT',
  'NO',
  'NONE',
  'NOT',
  'NULL',
  'NULLIF',
  'NUMBER',
  'NUMERIC',
  'OBJECT',
  'OF',
  'OFFLINE',
  'OFFSET',
  'OLD',
  'ON',
  'ONLINE',
  'ONLY',
  'OPAQUE',
  'OPEN',
  'OPERATOR',
  'OPTION',
  'OR',
  'ORDER',
  'ORDINALITY',
  'OTHER',
  'OTHERS',
  'OUT',
  'OUTER',
  'OUTPUT',
  'OVER',
  'OVERLAPS',
  'OVERRIDE',
  'OWNER',
  'PAD',
  'PARALLEL',
  'PARAMETER',
  'PARAMETERS',
  'PARTIAL',
  'PARTITION',
  'PARTITIONED',
  'PARTITIONS',
  'PATH',
  'PERCENT',
  'PERCENTILE',
  'PERMISSION',
  'PERMISSIONS',
  'PIPE',
  'PIPELINED',
  'PLAN',
  'POOL',
  'POSITION',
  'PRECISION',
  'PREPARE',
  'PRESERVE',
  'PRIMARY',
  'PRIOR',
  'PRIVATE',
  'PRIVILEGES',
  'PROCEDURE',
  'PROCESSED',
  'PROJECT',
  'PROJECTION',
  'PROPERTY',
  'PROVISIONING',
  'PUBLIC',
  'PUT',
  'QUERY',
  'QUIT',
  'QUORUM',
  'RAISE',
  'RANDOM',
  'RANGE',
  'RANK',
  'RAW',
  'READ',
  'READS',
  'REAL',
  'REBUILD',
  'RECORD',
  'RECURSIVE',
  'REDUCE',
  'REF',
  'REFERENCE',
  'REFERENCES',
  'REFERENCING',
  'REGEXP',
  'REGION',
  'REINDEX',
  'RELATIVE',
  'RELEASE',
  'REMAINDER',
  'RENAME',
  'REPEAT',
  'REPLACE',
  'REQUEST',
  'RESET',
  'RESIGNAL',
  'RESOURCE',
  'RESPONSE',
  'RESTORE',
  'RESTRICT',
  'RESULT',
  'RETURN',
  'RETURNING',
  'RETURNS',
  'REVERSE',
  'REVOKE',
  'RIGHT',
  'ROLE',
  'ROLES',
  'ROLLBACK',
  'ROLLUP',
  'ROUTINE',
  'ROW',
  'ROWS',
  'RULE',
  'RULES',
  'SAMPLE',
  'SATISFIES',
  'SAVE',
  'SAVEPOINT',
  'SCAN',
  'SCHEMA',
  'SCOPE',
  'SCROLL',
  'SEARCH',
  'SECOND',
  'SECTION',
  'SEGMENT',
  'SEGMENTS',
  'SELECT',
  'SELF',
  'SEMI',
  'SENSITIVE',
  'SEPARATE',
  'SEQUENCE',
  'SERIALIZABLE',
  'SESSION',
  'SET',
  'SETS',
  'SHARD',
  'SHARE',
  'SHARED',
  'SHORT',
  'SHOW',
  'SIGNAL',
  'SIMILAR',
  'SIZE',
  'SKEWED',
  'SMALLINT',
  'SNAPSHOT',
  'SOME',
  'SOURCE',
  'SPACE',
  'SPACES',
  'SPARSE',
  'SPECIFIC',
  'SPECIFICTYPE',
  'SPLIT',
  'SQL',
  'SQLCODE',
  'SQLERROR',
  'SQLEXCEPTION',
  'SQLSTATE',
  'SQLWARNING',
  'START',
  'STATE',
  'STATIC',
  'STATUS',
  'STORAGE',
  'STORE',
  'STORED',
  'STREAM',
  'STRING',
  'STRUCT',
  'STYLE',
  'SUB',
  'SUBMULTISET',
  'SUBPARTITION',
  'SUBSTRING',
  'SUBTYPE',
  'SUM',
  'SUPER',
  'SYMMETRIC',
  'SYNONYM',
  'SYSTEM',
  'TABLE',
  'TABLESAMPLE',
  'TEMP',
  'TEMPORARY',
  'TERMINATED',
  'TEXT',
  'THAN',
  'THEN',
  'THROUGHPUT',
  'TIME',
  'TIMESTAMP',
  'TIMEZONE',
  'TINYINT',
  'TO',
  'TOKEN',
  'TOTAL',
  'TOUCH',
  'TRAILING',
  'TRANSACTION',
  'TRANSFORM',
  'TRANSLATE',
  'TRANSLATION',
  'TREAT',
  'TRIGGER',
  'TRIM',
  'TRUE',
  'TRUNCATE',
  'TTL',
  'TUPLE',
  'TYPE',
  'UNDER',
  'UNDO',
  'UNION',
  'UNIQUE',
  'UNIT',
  'UNKNOWN',
  'UNLOGGED',
  'UNNEST',
  'UNPROCESSED',
  'UNSIGNED',
  'UNTIL',
  'UPDATE',
  'UPPER',
  'URL',
  'USAGE',
  'USE',
  'USER',
  'USERS',
  'USING',
  'UUID',
  'VACUUM',
  'VALUE',
  'VALUED',
  'VALUES',
  'VARCHAR',
  'VARIABLE',
  'VARIANCE',
  'VARINT',
  'VARYING',
  'VIEW',
  'VIEWS',
  'VIRTUAL',
  'VOID',
  'WAIT',
  'WHEN',
  'WHENEVER',
  'WHERE',
  'WHILE',
  'WINDOW',
  'WITH',
  'WITHIN',
  'WITHOUT',
  'WORK',
  'WRAPPED',
  'WRITE',
  'YEAR',
  'ZONE',
]);

export type OperatorExpression = { expression: string };
export type OperatorKey = { key: string };
export type OperatorValue = { value: unknown; key: string };
export type Operators = Array<OperatorExpression | OperatorKey | OperatorValue>;

export const BASE_OPERATOR = {
  /** space */
  space: { expression: ' ' },
  /** , */
  comma: { expression: ',' },

  /** ( */
  leftParenthesis: { expression: '(' },
  /** ) */
  rightParenthesis: { expression: ')' },

  /** + */
  plus: { expression: '+' },
  /** - */
  minus: { expression: '-' },

  /** NOT */
  not: { expression: 'NOT' },

  /** AND */
  and: { expression: 'AND' },
  /** OR */
  or: { expression: 'OR' },
  /** = */
  eq: { expression: '=' },
  /** <> */
  ne: { expression: '<>' },
  /** < */
  lt: { expression: '<' },
  /** <= */
  le: { expression: '<=' },
  /** > */
  gt: { expression: '>' },
  /** >= */
  ge: { expression: '>=' },

  /** attribute_exists */
  attributeExists: { expression: 'attribute_exists' },
  /** contains */
  contains: { expression: 'contains' },
  /** IN */
  in: { expression: 'IN' },
  /** BETWEEN */
  between: { expression: 'BETWEEN' },
  /** attribute_type */
  attributeType: { expression: 'attribute_type' },
  /** begins_with */
  beginsWith: { expression: 'begins_with' },
  /** attribute_not_exists */
  attributeNotExists: { expression: 'attribute_not_exists' },
  /** size */
  size: { expression: 'size' },
  /** if_not_exists */
  ifNotExists: { expression: 'if_not_exists' },
  /** list_append */
  listAppend: { expression: 'list_append' },

  /** SET */
  set: { expression: 'SET' },
  /** ADD */
  add: { expression: 'ADD' },
  /** REMOVE */
  remove: { expression: 'REMOVE' },
  /** DELETE */
  delete: { expression: 'DELETE' },
} as const;

export const OPERATORS = {
  /** parenthesis */
  parenthesis: (operatorStructure: Operators): Operators => [BASE_OPERATOR.leftParenthesis, ...operatorStructure, BASE_OPERATOR.rightParenthesis],

  /** $K = $V */
  eq: (key: string, value: unknown): Operators => [{ key }, BASE_OPERATOR.space, BASE_OPERATOR.eq, BASE_OPERATOR.space, { value, key }],
  /** $K <> $V */
  ne: (key: string, value: unknown): Operators => [{ key }, BASE_OPERATOR.space, BASE_OPERATOR.ne, BASE_OPERATOR.space, { value, key }],
  /** $K < $V */
  lt: (key: string, value: unknown): Operators => [{ key }, BASE_OPERATOR.space, BASE_OPERATOR.lt, BASE_OPERATOR.space, { value, key }],
  /** $K <= $V */
  le: (key: string, value: unknown): Operators => [{ key }, BASE_OPERATOR.space, BASE_OPERATOR.le, BASE_OPERATOR.space, { value, key }],
  /** $K > $V */
  gt: (key: string, value: unknown): Operators => [{ key }, BASE_OPERATOR.space, BASE_OPERATOR.gt, BASE_OPERATOR.space, { value, key }],
  /** $K >= $V */
  ge: (key: string, value: unknown): Operators => [{ key }, BASE_OPERATOR.space, BASE_OPERATOR.ge, BASE_OPERATOR.space, { value, key }],

  /** attribute_exists($K) */
  attributeExists: (key: string): Operators => [BASE_OPERATOR.attributeExists, ...OPERATORS.parenthesis([{ key }])],
  /** contains($K, $V) */
  contains: (key: string, value: unknown): Operators => [BASE_OPERATOR.contains, ...OPERATORS.parenthesis([{ key }, BASE_OPERATOR.comma, BASE_OPERATOR.space, { value, key }])],
  /** $K IN $V, $V, $V */
  in: (key: string, values: unknown[]): Operators => [
    { key },
    BASE_OPERATOR.space,
    BASE_OPERATOR.in,
    BASE_OPERATOR.space,
    ...insertBetween<OperatorExpression | OperatorValue>(
      values.map((value) => ({ value, key })),
      [BASE_OPERATOR.comma, BASE_OPERATOR.space],
    ),
  ],
  /** $K BETWEEN $V AND $V */
  between: (key: string, value1: unknown, value2: unknown): Operators => [
    { key },
    BASE_OPERATOR.space,
    BASE_OPERATOR.between,
    BASE_OPERATOR.space,
    { value: value1, key },
    BASE_OPERATOR.space,
    BASE_OPERATOR.and,
    BASE_OPERATOR.space,
    { value: value2, key },
  ],
  /** attribute_type($K, $V) */
  attributeType: (key: string, value: unknown): Operators => [BASE_OPERATOR.attributeType, ...OPERATORS.parenthesis([{ key }, BASE_OPERATOR.comma, BASE_OPERATOR.space, { value, key }])],
  /** begins_with($K, $V) */
  beginsWith: (key: string, value: unknown): Operators => [BASE_OPERATOR.beginsWith, ...OPERATORS.parenthesis([{ key }, BASE_OPERATOR.comma, BASE_OPERATOR.space, { value, key }])],

  /** attribute_not_exists($K) */
  attributeNotExists: (key: string): Operators => [BASE_OPERATOR.attributeNotExists, ...OPERATORS.parenthesis([{ key }])],
  /** NOT contains($K, $V) */
  notContains: (key: string, value: unknown): Operators => [BASE_OPERATOR.not, BASE_OPERATOR.space, ...OPERATORS.contains(key, value)],
  /** NOT ($K IN $V, $V, $V) */
  notIn: (key: string, values: unknown[]): Operators => [BASE_OPERATOR.not, BASE_OPERATOR.space, ...OPERATORS.parenthesis(OPERATORS.in(key, values))],
  /** NOT $K = $V */
  notEq: (key: string, value: unknown): Operators => OPERATORS.ne(key, value),
  /** NOT $K <> $V */
  notNe: (key: string, value: unknown): Operators => OPERATORS.eq(key, value),
  /** NOT $K < $V */
  notLt: (key: string, value: unknown): Operators => OPERATORS.ge(key, value),
  /** NOT $K <= $V */
  notLe: (key: string, value: unknown): Operators => OPERATORS.gt(key, value),
  /** NOT $K > $V */
  notGt: (key: string, value: unknown): Operators => OPERATORS.le(key, value),
  /** NOT $K >= $V */
  notGe: (key: string, value: unknown): Operators => OPERATORS.lt(key, value),

  /** size($K) = $V */
  sizeEq: (key: string, value: unknown): Operators => [BASE_OPERATOR.size, ...OPERATORS.parenthesis([{ key }]), BASE_OPERATOR.space, BASE_OPERATOR.eq, BASE_OPERATOR.space, { value, key }],
  /** size($K) <> $V */
  sizeNe: (key: string, value: unknown): Operators => [BASE_OPERATOR.size, ...OPERATORS.parenthesis([{ key }]), BASE_OPERATOR.space, BASE_OPERATOR.ne, BASE_OPERATOR.space, { value, key }],
  /** size($K) < $V */
  sizeLt: (key: string, value: unknown): Operators => [BASE_OPERATOR.size, ...OPERATORS.parenthesis([{ key }]), BASE_OPERATOR.space, BASE_OPERATOR.lt, BASE_OPERATOR.space, { value, key }],
  /** size($K) <= $V */
  sizeLe: (key: string, value: unknown): Operators => [BASE_OPERATOR.size, ...OPERATORS.parenthesis([{ key }]), BASE_OPERATOR.space, BASE_OPERATOR.le, BASE_OPERATOR.space, { value, key }],
  /** size($K) > $V */
  sizeGt: (key: string, value: unknown): Operators => [BASE_OPERATOR.size, ...OPERATORS.parenthesis([{ key }]), BASE_OPERATOR.space, BASE_OPERATOR.gt, BASE_OPERATOR.space, { value, key }],
  /** size($K) >= $V */
  sizeGe: (key: string, value: unknown): Operators => [BASE_OPERATOR.size, ...OPERATORS.parenthesis([{ key }]), BASE_OPERATOR.space, BASE_OPERATOR.ge, BASE_OPERATOR.space, { value, key }],
};

export const UPDATE_OPERATORS = {
  /** $K = $V */
  set: (key: string, value: unknown): Operators => [{ key }, BASE_OPERATOR.space, BASE_OPERATOR.eq, BASE_OPERATOR.space, { value, key }],
  /** $K = if_not_exists($K, $V) */
  setIfNotExists: (key: string, value: unknown): Operators => [
    { key },
    BASE_OPERATOR.space,
    BASE_OPERATOR.eq,
    BASE_OPERATOR.space,
    BASE_OPERATOR.ifNotExists,
    ...OPERATORS.parenthesis([{ key }, BASE_OPERATOR.comma, BASE_OPERATOR.space, { value, key }]),
  ],
  /** $K = list_append($K, $V) */
  listAppend: (key: string, value: unknown): Operators => [
    { key },
    BASE_OPERATOR.space,
    BASE_OPERATOR.eq,
    BASE_OPERATOR.space,
    BASE_OPERATOR.listAppend,
    ...OPERATORS.parenthesis([{ key }, BASE_OPERATOR.comma, BASE_OPERATOR.space, { value, key }]),
  ],
  /** $K = $K + $V */
  increment: (key: string, value: unknown): Operators => [{ key }, BASE_OPERATOR.space, BASE_OPERATOR.eq, BASE_OPERATOR.space, { key }, BASE_OPERATOR.space, BASE_OPERATOR.plus, BASE_OPERATOR.space, { value, key }],
  /** $K = $K - $V */
  decrement: (key: string, value: unknown): Operators => [{ key }, BASE_OPERATOR.space, BASE_OPERATOR.eq, BASE_OPERATOR.space, { key }, BASE_OPERATOR.space, BASE_OPERATOR.minus, BASE_OPERATOR.space, { value, key }],
  /** $K $V */
  add: (key: string, value: unknown): Operators => [{ key }, BASE_OPERATOR.space, { value, key }],
  /** $K $V */
  delete: (key: string, value: unknown): Operators => [{ key }, BASE_OPERATOR.space, { value, key }],
  /** $K */
  remove: (key: string): Operators => [{ key }],
};
