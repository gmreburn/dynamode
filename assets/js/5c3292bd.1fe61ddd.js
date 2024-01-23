"use strict";(self.webpackChunkdynamode_docs=self.webpackChunkdynamode_docs||[]).push([[66],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),b=r,k=u["".concat(d,".").concat(b)]||u[b]||m[b]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),o=a(7392),d=a(7094),p=a(2466);const s="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:a,block:i,defaultValue:u,values:b,groupId:k,className:g}=e,c=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=b??c.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=c.find((e=>e.props.default)))?void 0:t.props.value)??c[0].props.value;if(null!==y&&!N.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:f}=(0,d.U)(),[v,D]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=k){const e=T[k];null!=e&&e!==v&&N.some((t=>t.value===e))&&D(e)}const M=e=>{const t=e.currentTarget,a=C.indexOf(t),n=N[a].value;n!==v&&(x(t),D(n),null!=k&&f(k,String(n)))},w=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;a=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=C[t]??C[C.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},g)},N.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:w,onFocus:M,onClick:M},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":v===t})}),a??t)}))),a?(0,r.cloneElement)(c.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},c.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function b(e){const t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},4205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),i=a(5162);const o={title:"Table Manager | Dynamode",description:"Table Manager",sidebar_label:"Table Manager",hide_title:!0},d="Table Manager",p={unversionedId:"guide/managers/tableManager",id:"guide/managers/tableManager",title:"Table Manager | Dynamode",description:"Table Manager",source:"@site/docs/guide/managers/tableManager.mdx",sourceDirName:"guide/managers",slug:"/guide/managers/tableManager",permalink:"/docs/guide/managers/tableManager",draft:!1,editUrl:"https://www.github.com/blazejkustra/dynamode/tree/master/docs/docs/guide/managers/tableManager.mdx",tags:[],version:"current",frontMatter:{title:"Table Manager | Dynamode",description:"Table Manager",sidebar_label:"Table Manager",hide_title:!0},sidebar:"sidebar",previous:{title:"Decorators",permalink:"/docs/guide/entity/decorators"},next:{title:"Entity Manager",permalink:"/docs/guide/managers/entityManager"}},s={},m=[{value:"new TableManager(tableEntity, tableMetadata)",id:"new-tablemanagertableentity-tablemetadata",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Examples",id:"examples",level:3},{value:"TableManager.entityManager(entity?)",id:"tablemanagerentitymanagerentity",level:2},{value:"Arguments",id:"arguments-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"TableManager.createTable(options?)",id:"tablemanagercreatetableoptions",level:2},{value:"Description",id:"description",level:3},{value:"Arguments",id:"arguments-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"TableManager.deleteTable(tableName, options?)",id:"tablemanagerdeletetabletablename-options",level:2},{value:"Description",id:"description-1",level:3},{value:"Arguments",id:"arguments-3",level:3},{value:"Examples",id:"examples-3",level:3},{value:"TableManager.createTableIndex(indexName, options?)",id:"tablemanagercreatetableindexindexname-options",level:2},{value:"Description",id:"description-2",level:3},{value:"Arguments",id:"arguments-4",level:3},{value:"Examples",id:"examples-4",level:3},{value:"TableManager.deleteTableIndex(indexName, options?)",id:"tablemanagerdeletetableindexindexname-options",level:2},{value:"Description",id:"description-3",level:3},{value:"Arguments",id:"arguments-5",level:3},{value:"Examples",id:"examples-5",level:3},{value:"TableManager.validateTable(options?)",id:"tablemanagervalidatetableoptions",level:2},{value:"Description",id:"description-4",level:3},{value:"Arguments",id:"arguments-6",level:3},{value:"Examples",id:"examples-6",level:3}],u={toc:m};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table-manager"},"Table Manager"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TableManager")," is used to perform operations on DynamoDB table. It also initializes ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/managers/entityManager"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity Managers"))," that act as repositories for your models. "),(0,r.kt)("h2",{id:"new-tablemanagertableentity-tablemetadata"},"new TableManager(tableEntity, tableMetadata)"),(0,r.kt)("p",null,"This constructor initializes TableManager class that acts as a repository that is used to perform operations on a DynamoDB table."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"tableEntity"))," - Table class that inherits from ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/entity/modeling"},"Entity")," class. It has to define all primary and secondary indexes defined on the DynamoDB table. To learn more check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/entity/modeling"},"Modeling")," page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"tableMetadata"))," - Metadata that describes table name, primary key, secondary index keys and createdAt/updatedAt timestamps. Dynamode uses metadata in all underlying methods so be cautious when setting it up. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tableName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the table in DynamoDB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"partitionKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the partition key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sortKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the sort key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"indexes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object that defines secondary indexes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{ [indexName: string], {partitionKey?: string; sortKey?:string } }")),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"createdAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the createdAt timestamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"updatedAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the updatedAt timestamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"undefined")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"AllPossibleProperties model is defined ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/entity/modeling#all-possible-properties"},"here"),". To initialize its table manager, use ",(0,r.kt)("inlineCode",{parentName:"p"},"TableManager")," constructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import TableManager from 'dynamode/table';\n\nconst AllPossiblePropertiesTableManager = new TableManager(AllPossibleProperties, {\n  tableName: TABLE_NAME,\n  partitionKey: 'partitionKey',\n  sortKey: 'sortKey',\n  indexes: {\n    GSI_1_NAME: {\n      partitionKey: 'GSI_1_PK',\n      sortKey: 'GSI_1_SK',\n    },\n    LSI_1_NAME: {\n      sortKey: 'LSI_1_SK',\n    },\n  },\n  createdAt: 'createdAt',\n  updatedAt: 'updatedAt',\n});\n")),(0,r.kt)("h2",{id:"tablemanagerentitymanagerentity"},"TableManager.entityManager(entity?)"),(0,r.kt)("p",null,"This method initializes ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/managers/entityManager"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityManager"))," class that acts as a repository that is used to perform operations on a given model. To learn more check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/managers/entityManager"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity Manager"))," page."),(0,r.kt)("h3",{id:"arguments-1"},"Arguments"),(0,r.kt)("p",null,"You can add optional ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," parameter which is a model that inherits from ",(0,r.kt)("inlineCode",{parentName:"p"},"tableEntity")," class."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"entity"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entity class that inherits from ",(0,r.kt)("inlineCode",{parentName:"td"},"tableEntity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tableEntity")," (argument passed in ",(0,r.kt)("inlineCode",{parentName:"td"},"TableManager")," constructor)")))),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/guide/entity/modeling#inheritance"},"BaseTable")," is an example class that extends ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/managers/entityManager"},"Entity"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import TableManager from 'dynamode/table';\n\nconst BaseTableManager = new TableManager(...);\n\n// BaseTable entity manager\nconst BaseTableEntityManager = BaseTableManager.entityManager();\n\n// EntityOne entity manager\nconst EntityOneManager = BaseTableManager.entityManager(EntityOne);\n\n// EntityTwo entity manager\nconst EntityTwoManager = BaseTableManager.entityManager(EntityTwo);\n\n// EntityThree entity manager\nconst EntityThreeManager = BaseTableManager.entityManager(EntityThree);\n")),(0,r.kt)("h2",{id:"tablemanagercreatetableoptions"},"TableManager.createTable(options?)"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This method is used to create a new DynamoDB table. It uses the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html"},"CreateTable DynamoDB operation"),"."),(0,r.kt)("h3",{id:"arguments-2"},"Arguments"),(0,r.kt)("p",null,"You can add optional ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"options"))," parameter that is an object. The table below represents options that you can pass in:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"return")),(0,r.kt)("td",{parentName:"tr",align:null},"What the method should return. For ",(0,r.kt)("inlineCode",{parentName:"td"},"'default'"),", method returns TableData. For ",(0,r.kt)("inlineCode",{parentName:"td"},"'input'"),", method returns CreateTableCommandInput and no request is made to DynamoDB. For ",(0,r.kt)("inlineCode",{parentName:"td"},"'output'"),", method returns the output from the CreateTable DynamoDB operation."),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'default'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'input'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'output'")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'default'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"extraInput")),(0,r.kt)("td",{parentName:"tr",align:null},"Extra input that is sent to CreateTable DynamoDB operation. Use only if you know what you are doing, as it may override other standard properties."),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/classes/createtablecommand.html"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateTableCommandInput"))),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"throughput")),(0,r.kt)("td",{parentName:"tr",align:null},"Provisioned throughput settings for the table. Defines the number of read and write capacity units."),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"{ read: number; write: number }")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tags")),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata to assign to the table."),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, string>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"deletionProtection")),(0,r.kt)("td",{parentName:"tr",align:null},"Protection from deletion. If this is enabled, the table cannot be deleted."),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"examples-2"},"Examples"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"default",label:"return: 'default'",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const table = await TableManager.createTable({\n  throughput: { read: 5, write: 5 }\n});\nconst table = await TableManager.createTable({\n  throughput: { read: 5, write: 5 },\n  return: 'default'\n});\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"TableData {\n  tableName: 'users',\n  tableStatus: 'ACTIVE',\n  creationDateTime: '2021-08-23T10:00:00Z',\n  provisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },\n  tableSizeBytes: 0,\n  itemCount: 0,\n  tableArn: 'arn:aws:dynamodb:us-west-2:1234567890:table/users',\n  tableId: 'abcde12345',\n  billingModeSummary: { BillingMode: 'PROVISIONED' }\n}\n"))),(0,r.kt)(i.Z,{value:"input",label:"return: 'input'",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const input = TableManager.createTable({\n  throughput: { read: 5, write: 5 },\n  return: 'input'\n});\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  TableName: 'users',\n  KeySchema: [...],\n  AttributeDefinitions: [...],\n  ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },\n  DeletionProtectionEnabled: false,\n  BillingMode: 'PROVISIONED'\n}\n"))),(0,r.kt)(i.Z,{value:"output",label:"return: 'output'",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const output = await TableManager.createTable({\n  throughput: { read: 5, write: 5 },\n  return: 'output'\n});\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  '$metadata': {\n    ...\n  },\n  TableDescription: {\n    ...\n  }\n}\n")))),(0,r.kt)("h2",{id:"tablemanagerdeletetabletablename-options"},"TableManager.deleteTable(tableName, options?)"),(0,r.kt)("h3",{id:"description-1"},"Description"),(0,r.kt)("p",null,"This method deletes a DynamoDB table. It uses the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html"},"DeleteTable DynamoDB operation"),"."),(0,r.kt)("h3",{id:"arguments-3"},"Arguments"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"tableName")),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," - The name of the table to delete."),(0,r.kt)("p",null,"You can add optional ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"options"))," parameter that is an object. The table below represents options that you can pass in:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"return")),(0,r.kt)("td",{parentName:"tr",align:null},"What the method should return. For ",(0,r.kt)("inlineCode",{parentName:"td"},"'default'"),", method returns TableData. For ",(0,r.kt)("inlineCode",{parentName:"td"},"'input'"),", method returns DeleteTableCommandInput and no request is made to DynamoDB (method no longer returns a promise). For ",(0,r.kt)("inlineCode",{parentName:"td"},"'output'"),", method returns the output from the DeleteTable DynamoDB operation."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'input'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'output'")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraInput")),(0,r.kt)("td",{parentName:"tr",align:null},"Extra input that is sent to CreateTable DynamoDB operation. Use only if you know what you are doing, as it may override other standard properties."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/classes/deletetablecommand.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DeleteTableCommandInput"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"examples-3"},"Examples"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"default",label:"return: 'default'",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const deletedTable = await TableManager.deleteTable('users');\nconst deletedTable = await TableManager.deleteTable('users', { return: \"default\" });\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"TableData {\n  tableName: 'users',\n  tableStatus: 'DELETING',\n  ...\n}\n"))),(0,r.kt)(i.Z,{value:"input",label:"return: 'input'",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const input = TableManager.deleteTable('users', { return: 'input' });\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  TableName: 'users'\n}\n"))),(0,r.kt)(i.Z,{value:"output",label:"return: 'output'",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const output = await TableManager.deleteTable('users', { return: 'output' });\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  '$metadata': {\n    ...\n  },\n  TableDescription: {\n    ...\n  }\n}\n")))),(0,r.kt)("h2",{id:"tablemanagercreatetableindexindexname-options"},"TableManager.createTableIndex(indexName, options?)"),(0,r.kt)("h3",{id:"description-2"},"Description"),(0,r.kt)("p",null,"This method creates a new secondary index in a DynamoDB table. It uses the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html"},"UpdateTable DynamoDB operation"),"."),(0,r.kt)("h3",{id:"arguments-4"},"Arguments"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"indexName")),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," - The name of the global secondary index to create."),(0,r.kt)("p",null,"You can add optional ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"options"))," parameter that is an object. The table below represents options that you can pass in:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"return")),(0,r.kt)("td",{parentName:"tr",align:null},"What the method should return. For ",(0,r.kt)("inlineCode",{parentName:"td"},"'default'"),", it returns TableData. For ",(0,r.kt)("inlineCode",{parentName:"td"},"'input'"),", it returns UpdateTableCommandInput and no request is made to DynamoDB (method no longer returns a promise). For ",(0,r.kt)("inlineCode",{parentName:"td"},"'output'"),", it returns the output from the UpdateTable DynamoDB operation."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'input'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'output'")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraInput")),(0,r.kt)("td",{parentName:"tr",align:null},"Extra input that is sent to UpdateTable DynamoDB operation. Use only in case that you know what you are doing as it may override other properties passed to DynamoDB operation."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/classes/updatetablecommand.html"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateTableCommandInput"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"throughput")),(0,r.kt)("td",{parentName:"tr",align:null},"Provisioned throughput settings for the table index. Defines the number of read and write capacity units."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ read: number; write: number }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"examples-4"},"Examples"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"default",label:"return: 'default'",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const table = await TableManager.createTableIndex('MyIndex', {\n  throughput: { read: 5, write: 5 }\n});\nconst table = await TableManager.createTableIndex('MyIndex', {\n  throughput: { read: 5, write: 5 }\n  return: 'default'\n});\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"TableData {\n  tableName: 'users',\n  tableStatus: 'UPDATING',\n  ...\n}\n"))),(0,r.kt)(i.Z,{value:"input",label:"return: 'input'",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const input = TableManager.createTableIndex('MyIndex', {\n  throughput: { read: 5, write: 5 },\n  return: 'input'\n});\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  TableName: 'users',\n  AttributeDefinitions: [...],\n  GlobalSecondaryIndexUpdates: [...],\n  ...\n}\n"))),(0,r.kt)(i.Z,{value:"output",label:"return: 'output'",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const output = await TableManager.createTableIndex('MyIndex', {\n  throughput: { read: 5, write: 5 },\n  return: 'output'\n});\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  '$metadata': {\n    ...\n  },\n  TableDescription: {\n    ...\n  }\n}\n")))),(0,r.kt)("h2",{id:"tablemanagerdeletetableindexindexname-options"},"TableManager.deleteTableIndex(indexName, options?)"),(0,r.kt)("h3",{id:"description-3"},"Description"),(0,r.kt)("p",null,"This method deletes an existing global secondary index in a DynamoDB table. It uses the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html"},"UpdateTable DynamoDB operation"),"."),(0,r.kt)("h3",{id:"arguments-5"},"Arguments"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"indexName")),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," - The name of the table global secondary index to delete."),(0,r.kt)("p",null,"You can add optional ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"options"))," parameter that is an object. The table below represents options that you can pass in:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"return")),(0,r.kt)("td",{parentName:"tr",align:null},"What the method should return. For ",(0,r.kt)("inlineCode",{parentName:"td"},"'default'"),", it returns TableData. For ",(0,r.kt)("inlineCode",{parentName:"td"},"'input'"),", it returns UpdateTableCommandInput and no request is made to DynamoDB (method no longer returns a promise). For ",(0,r.kt)("inlineCode",{parentName:"td"},"'output'"),", it returns the output from the UpdateTable DynamoDB operation."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'input'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'output'")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraInput")),(0,r.kt)("td",{parentName:"tr",align:null},"Extra input that is sent to UpdateTable DynamoDB operation. Use only in case that you know what you are doing as it may override other properties passed to DynamoDB operation."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/classes/updatetablecommand.html"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateTableCommandInput"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"examples-5"},"Examples"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"default",label:"return: 'default'",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const table = await TableManager.deleteTableIndex('MyIndex');\nconst table = await TableManager.deleteTableIndex('MyIndex', { return: 'default' });\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"TableData {\n  tableName: 'users',\n  tableStatus: 'UPDATING',\n  ...\n}\n"))),(0,r.kt)(i.Z,{value:"input",label:"return: 'input'",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const input = TableManager.deleteTableIndex('MyIndex', { return: 'input' });\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  TableName: 'users',\n  GlobalSecondaryIndexUpdates: [...],\n  ...\n}\n"))),(0,r.kt)(i.Z,{value:"output",label:"return: 'output'",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const output = await TableManager.deleteTableIndex('MyIndex', { return: 'output' });\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  '$metadata': {\n    ...\n  },\n  TableDescription: {\n    ...\n  }\n}\n")))),(0,r.kt)("h2",{id:"tablemanagervalidatetableoptions"},"TableManager.validateTable(options?)"),(0,r.kt)("h3",{id:"description-4"},"Description"),(0,r.kt)("p",null,"This method validates the structure of a DynamoDB table against a known table structure. It uses the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html"},"DescribeTable DynamoDB operation")," to retrieve the current table's structure and validates it with Dynamode table metadata."),(0,r.kt)("h3",{id:"arguments-6"},"Arguments"),(0,r.kt)("p",null,"You can add an optional ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"options"))," parameter that is an object. The table below represents options that you can pass in:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"return")),(0,r.kt)("td",{parentName:"tr",align:null},"What the method should return. For ",(0,r.kt)("inlineCode",{parentName:"td"},"'default'"),", it returns TableData. For ",(0,r.kt)("inlineCode",{parentName:"td"},"'input'"),", it returns DescribeTableCommandInput and no request is made to DynamoDB (method no longer returns a promise). For ",(0,r.kt)("inlineCode",{parentName:"td"},"'output'"),", it returns the output from the DescribeTable DynamoDB operation."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'input'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'output'")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraInput")),(0,r.kt)("td",{parentName:"tr",align:null},"Extra input that is sent to DescribeTable DynamoDB operation. Use only in case that you know what you are doing as it may override other properties passed to DynamoDB operation."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/classes/describetablecommand.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DescribeTableCommandInput"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"examples-6"},"Examples"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"default",label:"return: 'default'",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const tableData = await TableManager.validateTable();\nconst tableData = await TableManager.validateTable({ return: 'default' });\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"TableData {\n  tableName: 'users',\n  tableStatus: 'ACTIVE',\n  creationDateTime: '2021-08-23T10:00:00Z',\n  provisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },\n  tableSizeBytes: 0,\n  itemCount: 0,\n  tableArn: 'arn:aws:dynamodb:us-west-2:1234567890:table/users',\n  tableId: 'abcde12345',\n  billingModeSummary: { BillingMode: 'PROVISIONED' }\n}\n"))),(0,r.kt)(i.Z,{value:"input",label:"return: 'input'",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const input = TableManager.validateTable({ return: 'input' });\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  TableName: 'users',\n  ...\n}\n"))),(0,r.kt)(i.Z,{value:"output",label:"return: 'output'",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const output = await TableManager.validateTable({ return: 'output' });\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  '$metadata': {\n    ...\n  },\n  Table: {\n    ...\n  }\n}\n")))))}b.isMDXComponent=!0}}]);