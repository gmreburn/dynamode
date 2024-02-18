"use strict";(self.webpackChunkdynamode_docs=self.webpackChunkdynamode_docs||[]).push([[809],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},m=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=i(t),u=o,y=p["".concat(s,".").concat(u)]||p[u]||c[u]||r;return t?a.createElement(y,d(d({ref:n},m),{},{components:t})):a.createElement(y,d({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,d=new Array(r);d[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,d[1]=l;for(var i=2;i<r;i++)d[i]=t[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var a=t(7462),o=(t(7294),t(3905));const r={title:"Dynamode | Dynamode",description:"Dynamode",sidebar_label:"Dynamode",hide_title:!0},d="Dynamode",l={unversionedId:"guide/dynamode",id:"guide/dynamode",title:"Dynamode | Dynamode",description:"Dynamode",source:"@site/docs/guide/dynamode.mdx",sourceDirName:"guide",slug:"/guide/dynamode",permalink:"/dynamode/docs/guide/dynamode",draft:!1,editUrl:"https://www.github.com/blazejkustra/dynamode/tree/main/docs/docs/guide/dynamode.mdx",tags:[],version:"current",frontMatter:{title:"Dynamode | Dynamode",description:"Dynamode",sidebar_label:"Dynamode",hide_title:!0},sidebar:"sidebar",previous:{title:"Transactions",permalink:"/dynamode/docs/guide/transactions"},next:{title:"Version requirements",permalink:"/dynamode/docs/other/version_requirements"}},s={},i=[{value:"Dynamode.separator",id:"dynamodeseparator",level:2},{value:"Dynamode.separator.get()",id:"dynamodeseparatorget",level:3},{value:"Dynamode.separator.set(separator)",id:"dynamodeseparatorsetseparator",level:3},{value:"Dynamode.ddb",id:"dynamodeddb",level:2},{value:"Dynamode.ddb.get()",id:"dynamodeddbget",level:3},{value:"Dynamode.ddb.set(ddb)",id:"dynamodeddbsetddb",level:3},{value:"Dynamode.ddb.local(endpoint?)",id:"dynamodeddblocalendpoint",level:3},{value:"Dynamode.converter",id:"dynamodeconverter",level:2},{value:"Dynamode.converter.get()",id:"dynamodeconverterget",level:3},{value:"Dynamode.converter.set(converter)",id:"dynamodeconvertersetconverter",level:3}],m={toc:i};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dynamode"},"Dynamode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Dynamode")," is a ",(0,o.kt)("strong",{parentName:"p"},"global")," singleton class that allows you to configure Dynamode to suit your needs. "),(0,o.kt)("h2",{id:"dynamodeseparator"},"Dynamode.separator"),(0,o.kt)("p",null,"A common practice when modeling entities in one table is to add prefixes/suffixes before actual partition and sort keys. Separator is a string that splits prefix, suffix and the actual value. By default ",(0,o.kt)("inlineCode",{parentName:"p"},"separator")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"'#'"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const PREFIX = 'prefix';\n\nexport class AllPossibleProperties extends Entity {\n  // Primary key\n  @attribute.prefix(PREFIX)\n  @attribute.partitionKey.string()\n  partitionKey: string;\n  ...\n}\n\nnew AllPossibleProperties(\n  { \n    partitionKey: 'value', \n    ... \n  }\n); // partitionKey will be saved as 'prefix#value' in DynamoDB\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guide/entity/modeling#all-possible-properties"},"AllPossibleProperties")," is an example class that extends ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/managers/entityManager"},"Entity"),"."),(0,o.kt)("h3",{id:"dynamodeseparatorget"},"Dynamode.separator.get()"),(0,o.kt)("p",null,"This function allows to get current ",(0,o.kt)("inlineCode",{parentName:"p"},"separator")," value. "),(0,o.kt)("h3",{id:"dynamodeseparatorsetseparator"},"Dynamode.separator.set(separator)"),(0,o.kt)("p",null,"This function allows to change ",(0,o.kt)("inlineCode",{parentName:"p"},"separator")," to whatever string that is passed as an argument."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"In case you want to change separator, do it as early in the application life cycle as possible to prevent errors.")),(0,o.kt)("h2",{id:"dynamodeddb"},"Dynamode.ddb"),(0,o.kt)("p",null,"Dynamode uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@aws-sdk/client-dynamodb"},(0,o.kt)("inlineCode",{parentName:"a"},"@aws-sdk/client-dynamodb"))," package under the hood. Therefore, it is required to authenticate with AWS so Dynamode can make requests to DynamoDB. ",(0,o.kt)("inlineCode",{parentName:"p"},"Dynamode.ddb")," has a couple of custom settings for managing the Dynamode's DynamoDB instance."),(0,o.kt)("h3",{id:"dynamodeddbget"},"Dynamode.ddb.get()"),(0,o.kt)("p",null,"This function will return the current ",(0,o.kt)("inlineCode",{parentName:"p"},"@aws-sdk/client-dynamodb")," DynamoDB instance that Dynamode is using to interact with DynamoDB. "),(0,o.kt)("p",null,"By default it returns a new ",(0,o.kt)("inlineCode",{parentName:"p"},"@aws-sdk/client-dynamodb")," DynamoDB instance. If you set a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"@aws-sdk/client-dynamodb")," DynamoDB instance it will be returned instead."),(0,o.kt)("p",null,"It is useful if you use environment variables to authenticate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'AWS_ACCESS_KEY_ID = "key-id"\nAWS_SECRET_ACCESS_KEY = "secret"\nAWS_REGION = "region"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import Dynamode from 'dynamode/dynamode';\n\n// Access DynamoDB instance\nconst ddb = Dynamode.ddb.get();\n")),(0,o.kt)("h3",{id:"dynamodeddbsetddb"},"Dynamode.ddb.set(ddb)"),(0,o.kt)("p",null,"This function is used to set a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"@aws-sdk/client-dynamodb")," DynamoDB instance. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import Dynamode from 'dynamode/dynamode';\nimport { DynamoDB } from '@aws-sdk/client-dynamodb';\n\nconst ddb = new DynamoDB({\n  credentials: {\n    accessKeyId: 'key-id',\n    secretAccessKey: 'secret',\n  },\n  region: 'region',\n});\n\n// Pass DynamoDB instance to Dynamode\nDynamode.ddb.set(ddb);\n")),(0,o.kt)("h3",{id:"dynamodeddblocalendpoint"},"Dynamode.ddb.local(endpoint?)"),(0,o.kt)("p",null,"This function is used to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"@aws-sdk/client-dynamodb")," DynamoDB instance to use local endpoint as opposed to the production instance of DynamoDB. By default ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"'http://localhost:8000'"),". You can pass in a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint")," argument to change the endpoint that will be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import Dynamode from 'dynamode/dynamode';\n\nconst ddb = Dynamode.ddb.local();\nconst ddb = Dynamode.ddb.local('http://localhost:2137');\n")),(0,o.kt)("p",null,"To setup ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html"},"DynamoDB")," locally. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://www.github.com/blazejkustra/dynamode/blob/main/examples/docker-compose.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"docker-compose.yml"))," file and ",(0,o.kt)("a",{parentName:"p",href:"https://www.github.com/blazejkustra/dynamode/blob/main/examples/"},(0,o.kt)("inlineCode",{parentName:"a"},"examples/"))," catalog. Once DynamoDB local server is running on ",(0,o.kt)("inlineCode",{parentName:"p"},"'http://localhost:8000'")," you can use the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import Dynamode from 'dynamode/dynamode';\n\nconst ddb = Dynamode.ddb.local();\n")),(0,o.kt)("h2",{id:"dynamodeconverter"},"Dynamode.converter"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Dynamode.converter")," has a couple of custom settings for managing the ",(0,o.kt)("inlineCode",{parentName:"p"},"@aws-sdk/util-dynamodb")," converter methods that Dynamode uses."),(0,o.kt)("p",null,"By default Dynamode uses the following converter methods from ",(0,o.kt)("inlineCode",{parentName:"p"},"@aws-sdk/util-dynamodb")," package:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"marshall")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unmarshall")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"convertToAttr")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"convertToNative"))),(0,o.kt)("h3",{id:"dynamodeconverterget"},"Dynamode.converter.get()"),(0,o.kt)("p",null,"This function returns the current object of converter methods that Dynamode uses to parse objects in and out of DynamoDB."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import Dynamode from 'dynamode/dynamode';\n\nconst converters = Dynamode.converter.get();\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  marshall: [Function: marshall],\n  unmarshall: [Function: unmarshall],\n  convertToAttr: [Function: convertToAttr],\n  convertToNative: [Function: convertToNative]\n}\n")),(0,o.kt)("h3",{id:"dynamodeconvertersetconverter"},"Dynamode.converter.set(converter)"),(0,o.kt)("p",null,"This function is used to set a custom object of methods for Dynamode to use when converting (parsing objects in and out of DynamoDB)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import Dynamode from 'dynamode/dynamode';\n\nDynamode.converter.set({\n  marshall: () => { /* custom */ },\n  unmarshall: () => { /* custom */ },\n  convertToAttr: () => { /* custom */ },\n  convertToNative: () => { /* custom */ },\n});\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const converters = Dynamode.converter.get();\n{\n  marshall: () => { /* custom */ },\n  unmarshall: () => { /* custom */ },\n  convertToAttr: () => { /* custom */ },\n  convertToNative: () => { /* custom */ },\n}\n")),(0,o.kt)("p",null,"It is also possible to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," as argument, this reverts the converter object back to the default methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import Dynamode from 'dynamode/dynamode';\n\nDynamode.converter.set(undefined);\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const converters = Dynamode.converter.get();\n{\n  marshall: [Function: marshall],\n  unmarshall: [Function: unmarshall],\n  convertToAttr: [Function: convertToAttr],\n  convertToNative: [Function: convertToNative]\n}\n")))}c.isMDXComponent=!0}}]);