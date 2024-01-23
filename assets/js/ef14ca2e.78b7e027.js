"use strict";(self.webpackChunkdynamode_docs=self.webpackChunkdynamode_docs||[]).push([[98],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,y=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Configure | Dynamode",description:"Configure",sidebar_label:"Configure",hide_title:!0},i="Configure",l={unversionedId:"getting_started/configure",id:"getting_started/configure",title:"Configure | Dynamode",description:"Configure",source:"@site/docs/getting_started/configure.mdx",sourceDirName:"getting_started",slug:"/getting_started/configure",permalink:"/docs/getting_started/configure",draft:!1,editUrl:"https://www.github.com/blazejkustra/dynamode/tree/master/docs/docs/getting_started/configure.mdx",tags:[],version:"current",frontMatter:{title:"Configure | Dynamode",description:"Configure",sidebar_label:"Configure",hide_title:!0},sidebar:"sidebar",previous:{title:"Import",permalink:"/docs/getting_started/import"},next:{title:"Modeling",permalink:"/docs/guide/entity/modeling"}},c={},s=[{value:"AWS SDK",id:"aws-sdk",level:2},{value:"Authenticate with environment variables",id:"authenticate-with-environment-variables",level:2},{value:"Authenticate programmatically",id:"authenticate-programmatically",level:2},{value:"Authenticate locally",id:"authenticate-locally",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure"},"Configure"),(0,r.kt)("h2",{id:"aws-sdk"},"AWS SDK"),(0,r.kt)("p",null,"Dynamode uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@aws-sdk/client-dynamodb"},(0,r.kt)("inlineCode",{parentName:"a"},"@aws-sdk/client-dynamodb"))," package under the hood. Therefore, it is required to authenticate with AWS so Dynamode can make requests to DynamoDB."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Authenticate as early in the application life cycle as possible to prevent errors. Dynamode needs valid AWS credentials to make requests to DynamoDB.")),(0,r.kt)("h2",{id:"authenticate-with-environment-variables"},"Authenticate with environment variables"),(0,r.kt)("p",null,"You can use environment variables to authenticate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'AWS_ACCESS_KEY_ID = "key-id"\nAWS_SECRET_ACCESS_KEY = "secret"\nAWS_REGION = "region"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import Dynamode from 'dynamode/dynamode';\n// Access DynamoDB instance\nconst ddb = Dynamode.ddb.get();\n")),(0,r.kt)("h2",{id:"authenticate-programmatically"},"Authenticate programmatically"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is recommended way of authenticating with AWS.")),(0,r.kt)("p",null,"You can also instantiate DynamoDB programmatically, pass the instance to Dynamode in order to use it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { DynamoDB } from '@aws-sdk/client-dynamodb';\nimport Dynamode from 'dynamode/dynamode';\n\n// Instantiate DynamoDB\nconst ddb = new DynamoDB({\n  credentials: {\n    accessKeyId: 'key-id',\n    secretAccessKey: 'secret',\n  },\n  region: 'region',\n});\n\n// Pass DynamoDB instance to Dynamode\nDynamode.ddb.set(ddb);\n")),(0,r.kt)("h2",{id:"authenticate-locally"},"Authenticate locally"),(0,r.kt)("p",null,"To setup ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html"},"DynamoDB")," locally. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/blazejkustra/dynamode/blob/master/examples/docker-compose.yml"},(0,r.kt)("inlineCode",{parentName:"a"},"docker-compose.yml"))," file and ",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/blazejkustra/dynamode/blob/master/examples/"},(0,r.kt)("inlineCode",{parentName:"a"},"examples/"))," catalog. Once DynamoDB local server is running on ",(0,r.kt)("inlineCode",{parentName:"p"},"'http://localhost:8000'")," you can use the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import Dynamode from 'dynamode/dynamode';\n\n// Local DynamoDB instance\nconst ddb = Dynamode.ddb.local();\n")),(0,r.kt)("p",null,"In case your local DynamoDB server is running at a different url you can pass that in as an argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const ddb = Dynamode.ddb.local('http://localhost:2137');\n")),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("inlineCode",{parentName:"p"},"Dynamode")," class ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/dynamode"},"here"),"."))}m.isMDXComponent=!0}}]);