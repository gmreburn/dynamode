"use strict";(self.webpackChunkdynamode_docs=self.webpackChunkdynamode_docs||[]).push([[272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),y=p(n),u=a,c=y["".concat(l,".").concat(u)]||y[u]||m[u]||i;return n?r.createElement(c,o(o({ref:t},d),{},{components:n})):r.createElement(c,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Modeling | Dynamode",description:"Modeling",sidebar_label:"Modeling",hide_title:!0},o="Modeling",s={unversionedId:"guide/entity/modeling",id:"guide/entity/modeling",title:"Modeling | Dynamode",description:"Modeling",source:"@site/docs/guide/entity/modeling.mdx",sourceDirName:"guide/entity",slug:"/guide/entity/modeling",permalink:"/dynamode/docs/guide/entity/modeling",draft:!1,editUrl:"https://github.com/blazejkustra/dynamode/tree/master/docs/docs/guide/entity/modeling.mdx",tags:[],version:"current",frontMatter:{title:"Modeling | Dynamode",description:"Modeling",sidebar_label:"Modeling",hide_title:!0},sidebar:"sidebar",previous:{title:"Decorators",permalink:"/dynamode/docs/guide/entity/decorators"},next:{title:"Condition",permalink:"/dynamode/docs/guide/condition"}},l={},p=[{value:"Possible values",id:"possible-values",level:2},{value:"Modeling with Typescript",id:"modeling-with-typescript",level:2},{value:"Decorators",id:"decorators",level:3},{value:"Additional methods",id:"additional-methods",level:3},{value:"Generic example",id:"generic-example",level:3},{value:"Examples",id:"examples",level:2},{value:"Key value",id:"key-value",level:3},{value:"User",id:"user",level:3},{value:"All possible properties",id:"all-possible-properties",level:3},{value:"Inheritance",id:"inheritance",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modeling"},"Modeling"),(0,a.kt)("p",null,"To better understand how to model with Dynamode it is recommended that you first read about DynamoDB. In comparison to relational databases, DynamoDB requires a different modeling approach. Here are some helpful documents:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html"},"Core components of Amazon DynamoDB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.dynamodbguide.com/what-is-dynamo-db"},"DynamoDB Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.dynamodbbook.com/"},"The DynamoDB Book - Alex DeBrie")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dynobase.dev/dynamodb-tutorials/"},"DynamoDB Tutorials - Everything You Need To Master It"))),(0,a.kt)("h2",{id:"possible-values"},"Possible values"),(0,a.kt)("p",null,"DynamoDB limits possible data types that can be saved in the database. To learn more: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html"},"Supported data types and naming rules in Amazon DynamoDB"),"."),(0,a.kt)("p",null,"Supported DynamoDB data types and its Dynamode equivalents:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"DynamoDB type"),(0,a.kt)("th",{parentName:"tr",align:null},"Dynamode Typescript equivalent"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"No value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},"DynamoDB non existent values are mapped to ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Null")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:null},"Null represents an attribute with an unknown or ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")," state.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Partition and sort keys can't be empty strings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},"DynamoDB does not support ",(0,a.kt)("inlineCode",{parentName:"td"},"Infinite")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"NaN")," values.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Binary")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"N/A")),(0,a.kt)("td",{parentName:"tr",align:null},"Not yet supported by Dynamode.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"List")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Array<any>")),(0,a.kt)("td",{parentName:"tr",align:null},"There are no restrictions on the data types that can be stored in an ",(0,a.kt)("inlineCode",{parentName:"td"},"Array"),". Elements in an array do not have to be of the same type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Map")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Map<string, any>")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, any>")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"{ [key: string]: any }")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"{ [key]: any, ... }")),(0,a.kt)("td",{parentName:"tr",align:null},"There are no restrictions on the data types that can be stored in a ",(0,a.kt)("inlineCode",{parentName:"td"},"Map"),"/",(0,a.kt)("inlineCode",{parentName:"td"},"object"),". Elements in a map do not have to be of the same type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Set")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Set<string>")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"Set<number>")),(0,a.kt)("td",{parentName:"tr",align:null},"Set can only represent sets of ",(0,a.kt)("inlineCode",{parentName:"td"},"numbers")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"strings"),". All the elements within a set must be of the same type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Date")),(0,a.kt)("td",{parentName:"tr",align:null},"DynamoDB does not natively support a ",(0,a.kt)("inlineCode",{parentName:"td"},"Date")," data type. To store a ",(0,a.kt)("inlineCode",{parentName:"td"},"Date")," use Unix epoch (",(0,a.kt)("inlineCode",{parentName:"td"},"number"),") or Iso 8601 format (",(0,a.kt)("inlineCode",{parentName:"td"},"string"),").")))),(0,a.kt)("h2",{id:"modeling-with-typescript"},"Modeling with Typescript"),(0,a.kt)("p",null,"In order to start modeling you need to create a class that inherits ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Entity from 'dynamode/entity';\nimport { register } from 'dynamode/decorators';\n\n@register(ddb: DynamoDB)\nclass YourModel extends Entity<Keys>(tableName: string) { \n  ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," takes one argument ",(0,a.kt)("inlineCode",{parentName:"p"},"tableName: string")," which defines the table in which the model will be saved. It also takes a generic type which describes primary key and secondary index keys. Dynamode uses this type in all underlying methods so be cautious when setting it up. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Keys = {\n  partitionKey: 'keyPk';\n  sortKey?: 'keySk';\n  indexes?: {\n    [indexName: string]: {\n      partitionKey?: 'indexKeyPk';\n      sortKey?: 'indexKeySk';\n    };\n  }\n};\n")),(0,a.kt)("h3",{id:"decorators"},"Decorators"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Only decorated properties will be saved in the database.")," Thanks to this you can add undecorated properties to your entity that won't be saved but can be useful for your application logic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class YourModel extends Entity<Keys>(tableName: string) {\n  // Will be saved (property decorated)\n  @primaryPartitionKey(...)\n  key: any;\n\n  @primarySortKey(...)\n  key: any;\n\n  @gsiSortKey(...)\n  key: any;\n\n  @lsiSortKey(...)\n  key: any;\n\n  @createdAt(...)\n  key: any;\n\n  @createdAt(...)\n  key: any;\n\n  @attribute(...)\n  key: any;\n\n  // Won't be saved (not decorated)\n  key: any;\n\n  ...\n}\n")),(0,a.kt)("h3",{id:"additional-methods"},"Additional methods"),(0,a.kt)("p",null,"You can add non-static and static methods to your entities that you can call later."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Do not override existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," methods, unless you know what you are doing.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class YourModel extends Entity<Keys>(tableName: string) {\n  ...\n  \n  constructor(props: Props) {\n    super();\n    ... \n  }\n\n  public method() {\n    ...\n  }\n\n  public static staticMethod() {\n    ...\n  }\n}\n")),(0,a.kt)("h3",{id:"generic-example"},"Generic example"),(0,a.kt)("p",null,"There are no limits to the number of attributes that you can add, but keep in mind the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ServiceQuotas.html"},"DynamoDB size limits"),"."),(0,a.kt)("p",null,"Basic setup of a ",(0,a.kt)("inlineCode",{parentName:"p"},"YourModel")," class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Entity from 'dynamode/entity';\nimport { attribute, createdAt, gsiPartitionKey, gsiSortKey, lsiSortKey, prefix, primaryPartitionKey, primarySortKey, register, updatedAt } from 'dynamode/decorators';\n\ntype Keys = {\n  partitionKey: string;\n  sortKey?: string;\n  indexes?: {\n    [indexName: string]: {\n      partitionKey?: string;\n      sortKey?: string;\n    };\n  }\n};\n\ntype Props = {\n  [key]: string;\n  ...\n};\n\n@register(ddb: DynamoDB)\nclass YourModel extends Entity<Keys>(tableName: string) {\n  // required\n  @primaryPartitionKey(...)\n  [key]: string;\n\n  // optional\n  @prefix(...)\n  @suffix(...)\n  @attribute(...)\n  @primarySortKey(...)\n  @gsiPartitionKey(...)\n  @gsiSortKey(...)\n  @lsiSortKey(...)\n  @createdAt(...)\n  @createdAt(...)\n  name: any;\n\n  otherName: any;\n\n  constructor(props: Props) {\n    super();\n\n    this.key = props.key;\n    // other initiations\n    ... \n  }\n\n  public method() {\n    ...\n  }\n\n  public static staticMethod() {\n    ...\n  }\n}\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here are some example models that shows how flexible Dynamode modeling is. Note that the entities in every example operate on a different table, primary keys and indexes. So you can model your entities based on your needs."),(0,a.kt)("h3",{id:"key-value"},"Key value"),(0,a.kt)("p",null,"The simplest example with only key and value attributes. There is no sort key for the table, meaning it uses a ",(0,a.kt)("em",{parentName:"p"},"simple primary key"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type KeyValueKeys = {\n  partitionKey: 'key';\n};\n\ntype KeyValueProps = {\n  key: string;\n  value: Record<string, unknown>;\n};\n\nconst TABLE_NAME = 'key-value';\n\n@register(ddb)\nclass KeyValue extends Entity<KeyValueKeys>(TABLE_NAME) {\n  @primaryPartitionKey(String)\n  key: string;\n\n  @attribute(Object)\n  value: Record<string, unknown>;\n\n  constructor(props: KeyValueProps) {\n    super();\n\n    this.key = props.key;\n    this.value = props.value;\n  }\n}\n")),(0,a.kt)("h3",{id:"user"},"User"),(0,a.kt)("p",null,"Another model without indexes but this time with a ",(0,a.kt)("em",{parentName:"p"},"composite primary key")," (with partition and sort keys)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type UserKeys = {\n  partitionKey: 'partitionKey';\n  sortKey: 'sortKey';\n};\n\ntype UserProps = {\n  partitionKey: string;\n  sortKey: string;\n  username: string;\n  email: string;\n  age: number;\n  friends: string[];\n  config: {\n    isAdmin: boolean;\n  };\n};\n\nconst USERS_TABLE = 'users';\n\n@register(ddb)\nclass User extends Entity<UserKeys>(USERS_TABLE) {\n  @primaryPartitionKey(String)\n  partitionKey: string;\n\n  @primarySortKey(String)\n  sortKey: string;\n\n  @attribute(String)\n  username: string;\n\n  @attribute(String)\n  email: string;\n\n  @attribute(Number)\n  age: number;\n\n  @attribute(Array)\n  friends: string[];\n\n  @attribute(Object)\n  config: {\n    isAdmin: boolean;\n  };\n\n  constructor(props: UserProps) {\n    super();\n\n    // Primary key\n    this.partitionKey = props.partitionKey;\n    this.sortKey = props.sortKey;\n\n    // Other\n    this.username = props.username;\n    this.email = props.email;\n    this.age = props.age;\n    this.friends = props.friends;\n    this.config = props.config;\n  }\n}\n")),(0,a.kt)("h3",{id:"all-possible-properties"},"All possible properties"),(0,a.kt)("p",null,"A model with all possible properties that are supported in Dynamode. This model has a ",(0,a.kt)("em",{parentName:"p"},"composite primary key")," and two indexes that are defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"AllPossiblePropertiesKeys")," type, ",(0,a.kt)("inlineCode",{parentName:"p"},"AllPossiblePropertiesProps")," type and in ",(0,a.kt)("inlineCode",{parentName:"p"},"AllPossibleProperties")," class."),(0,a.kt)("p",null,"This model also has two properties decorated with ",(0,a.kt)("inlineCode",{parentName:"p"},"createdAt(type: String | Number)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedAt(type: String | Number)")," decorators. They represent the timestamps of when the model was created or last updated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type AllPossiblePropertiesKeys = {\n  partitionKey: 'partitionKey';\n  sortKey: 'sortKey';\n  indexes: {\n    GSI_1_NAME: {\n      partitionKey: 'GSI_1_PK';\n      sortKey: 'GSI_1_SK';\n    };\n    LSI_1_NAME: {\n      sortKey: 'LSI_1_SK';\n    };\n  };\n};\n\ntype AllPossiblePropertiesProps = {\n  partitionKey: string;\n  sortKey: string;\n  GSI_1_PK?: string;\n  GSI_1_SK?: number;\n  LSI_1_SK?: number;\n  createdAt?: Date;\n  updatedAt?: Date;\n\n  string: string;\n  object: {\n    optional?: string;\n    required: number;\n  };\n  array: string[];\n  map: Map<string, string>;\n  set: Set<string>;\n  number?: number;\n  boolean: boolean;\n};\n\nconst TABLE_NAME = 'all-possible-properties';\nconst PREFIX = 'prefix';\n\n@register(ddb)\nclass AllPossibleProperties extends Entity<AllPossiblePropertiesKeys>(TABLE_NAME) {\n  // Primary key\n  @prefix(PREFIX)\n  @primaryPartitionKey(String)\n  partitionKey: string;\n\n  @primarySortKey(String)\n  sortKey: string;\n\n  // Indexes\n  @gsiPartitionKey(String, 'GSI_1_NAME')\n  GSI_1_PK?: string;\n\n  @gsiSortKey(Number, 'GSI_1_NAME')\n  GSI_1_SK?: number;\n\n  @lsiSortKey(Number, 'LSI_1_NAME')\n  LSI_1_SK?: number;\n\n  // Timestamps\n  @createdAt(String)\n  createdAt: Date;\n\n  @updatedAt(Number)\n  updatedAt: Date;\n\n  @attribute(String)\n  string: string;\n\n  @attribute(Object)\n  object: {\n    optional?: string;\n    required: number;\n  };\n\n  @attribute(Array)\n  array?: string[];\n\n  @attribute(Map)\n  map: Map<string, string>;\n\n  @attribute(Set)\n  set: Set<string>;\n\n  @attribute(Number)\n  number?: number;\n\n  @attribute(Boolean)\n  boolean: boolean;\n\n  unsaved: string;\n\n  constructor(props: AllPossiblePropertiesProps) {\n    super();\n\n    // Primary key\n    this.partitionKey = props.partitionKey;\n    this.sortKey = props.sortKey;\n\n    // Indexes\n    this.GSI_1_PK = props.GSI_1_PK;\n    this.GSI_1_SK = props.GSI_1_SK;\n    this.LSI_1_SK = props.LSI_1_SK;\n\n    // Timestamps\n    this.createdAt = props.createdAt || new Date();\n    this.updatedAt = props.updatedAt || new Date();\n\n    this.string = props.string;\n    this.object = props.object;\n    this.array = props.array;\n    this.map = props.map;\n    this.set = props.set;\n    this.number = props.number;\n    this.boolean = props.boolean;\n    this.unsaved = 'unsaved';\n  }\n\n  public method() {\n    ...\n  }\n\n  public static staticMethod() {\n    ...\n  }\n}\n")),(0,a.kt)("h3",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,"An important feature of Dynamode is the possibility to inherit multiple times. That means that models can share attributes, primary keys and indexes between each other = less boilerplate."),(0,a.kt)("p",null,"Notice that Entity is only inherited once as all these models are bound to the same DynamoDB table. The idea is to have one base class that represent DynamoDB table (",(0,a.kt)("inlineCode",{parentName:"p"},"BaseTable"),"). The rest of the models (",(0,a.kt)("inlineCode",{parentName:"p"},"EntityOne"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityTwo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityThree"),") are representing individual entities."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type TableKeys = {\n  partitionKey: 'propPk';\n  sortKey: 'propSk';\n  indexes: {\n    LSI_NAME: {\n      sortKey: 'index';\n    };\n  };\n};\n\ntype TableProps = {\n  propPk: string;\n  propSk: number;\n  index: string;\n};\n\nconst TABLE_NAME = 'inheritance';\n\n@register(ddb)\nclass BaseTable extends Entity<TableKeys>(TABLE_NAME) {\n  @primaryPartitionKey(String)\n  propPk: string;\n\n  @primarySortKey(Number)\n  propSk: number;\n\n  @lsiSortKey(String, 'LSI_NAME')\n  index: string;\n\n  constructor(props: TableProps) {\n    super();\n\n    this.propPk = props.propPk;\n    this.propSk = props.propSk;\n    this.index = props.index;\n  }\n}\n\ntype EntityOneProps = TableProps & {\n  one: { [k: string]: number };\n};\n\n@register(ddb)\nclass EntityOne extends BaseTable {\n  @attribute(Object)\n  one: { [k: string]: number };\n\n  constructor(props: EntityOneProps) {\n    super(props);\n\n    this.one = props.one;\n  }\n}\n\ntype EntityTwoProps = EntityOneProps & {\n  two: { [k: string]: string };\n};\n\n@register(ddb)\nclass EntityTwo extends EntityOne {\n  @attribute(Object)\n  two: { [k: string]: string };\n\n  constructor(props: EntityTwoProps) {\n    super(props);\n\n    this.two = props.two;\n  }\n}\n\ntype EntityThreeProps = TableProps & {\n  otherProperty: any;\n};\n\n@register(ddb)\nclass EntityThree extends BaseTable {\n  @attribute(Object)\n  otherProperty: { [k: string]: number };\n\n  constructor(props: EntityThreeProps) {\n    super(props);\n\n    this.otherProperty = props.otherProperty;\n  }\n}\n")))}m.isMDXComponent=!0}}]);