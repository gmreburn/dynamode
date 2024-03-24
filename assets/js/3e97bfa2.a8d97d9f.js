"use strict";(self.webpackChunkdynamode_docs=self.webpackChunkdynamode_docs||[]).push([[659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,y=c["".concat(m,".").concat(u)]||c[u]||p[u]||i;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={title:"Stream | Dynamode",description:"DynamoDB streams processing with Dynamode",sidebar_label:"Stream",hide_title:!0},o="Stream",s={unversionedId:"guide/stream",id:"guide/stream",title:"Stream | Dynamode",description:"DynamoDB streams processing with Dynamode",source:"@site/docs/guide/stream.mdx",sourceDirName:"guide",slug:"/guide/stream",permalink:"/dynamode/docs/guide/stream",draft:!1,editUrl:"https://www.github.com/blazejkustra/dynamode/tree/main/docs/docs/guide/stream.mdx",tags:[],version:"current",frontMatter:{title:"Stream | Dynamode",description:"DynamoDB streams processing with Dynamode",sidebar_label:"Stream",hide_title:!0},sidebar:"sidebar",previous:{title:"Transactions",permalink:"/dynamode/docs/guide/transactions"},next:{title:"Dynamode",permalink:"/dynamode/docs/guide/dynamode"}},m={},l=[{value:"Stream constructor - new Stream(Entity)",id:"stream-constructor---new-streamentity",level:2},{value:"Stream properties",id:"stream-properties",level:2},{value:"stream.isEntity(entity)",id:"streamisentityentity",level:2},{value:"Description",id:"description",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Support for <code>aws-lambda</code>",id:"support-for-aws-lambda",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stream"},"Stream"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," class is designed to process ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html#Streams.Enabling"},"DynamoDB streams")," and convert them into corresponding Dynamode entity instances. "),(0,r.kt)("p",null,"This simplifies the process of handling DynamoDB streams and allows you to work with Dynamode entities directly."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"DynamoDB streams of type ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYS_ONLY")," are not supported in Dynamode.")),(0,r.kt)("h2",{id:"stream-constructor---new-streamentity"},"Stream constructor - new Stream(Entity)"),(0,r.kt)("p",null,"Every stream has to be initialized with data from a DynamoDB stream record. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," class constructor takes a DynamoDB ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_Record.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Record"))," and initializes a ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import Stream from 'dynamode/stream';\n\nconst stream = new Stream(dynamoDBRecord);\n")),(0,r.kt)("h2",{id:"stream-properties"},"Stream properties"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," class has the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"streamType"),": The type of the stream. It can be one of the following: ",(0,r.kt)("inlineCode",{parentName:"li"},"newImage"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"oldImage"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"both"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"operation"),": The operation that was performed on the entity. It can be one of the following: ",(0,r.kt)("inlineCode",{parentName:"li"},"insert"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"modify"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"remove"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"newImage"),": The new entity image after the operation. Instance of the ",(0,r.kt)("a",{parentName:"li",href:"/docs/guide/entity/modeling"},"entity")," class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"oldImage"),": The old entity image before the operation. Instance of the ",(0,r.kt)("a",{parentName:"li",href:"/docs/guide/entity/modeling"},"entity")," class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entity"),": The entity class that the stream corresponds to.")),(0,r.kt)("h2",{id:"streamisentityentity"},"stream.isEntity(entity)"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"A method to check if the stream entity corresponds to the provided entity class. It also narrows down the type of the stream entity to the provided entity class."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"entity: Entity"),": The entity class you want to check the stream entity against."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if it's the same entity type, otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Let's say you have a stream that you want to check if it corresponds to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/entity/modeling#user"},(0,r.kt)("inlineCode",{parentName:"a"},"User"))," entity. This way you can easily check if the stream entity is a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," entity and work with it accordingly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const stream = new Stream(dynamoDBRecord);\n\n// Check that the stream refers to the User entity\nif (stream.isEntity(User)) { \n  // images are narrowed down here (Stream<Entity> -> Stream<User>)\n  const newUser = stream.newImage;\n  const oldUser = stream.oldImage;\n  \n  // Do logic based on custom logic\n  if(oldUser.username !== newUser.username && newUser.age > 18) {\n    // Do something\n  }\n}\n")),(0,r.kt)("h2",{id:"support-for-aws-lambda"},"Support for ",(0,r.kt)("inlineCode",{parentName:"h2"},"aws-lambda")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," class is designed to work with AWS Lambda functions that process DynamoDB streams. Here is an example of how you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," class in a Lambda function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Context, DynamoDBStreamEvent } from 'aws-lambda';\nimport Stream from 'dynamode/stream';\n\nasync function itemStream(event: DynamoDBStreamEvent, context: Context): void {\n  const stream = new Stream(event.Records[0]);\n\n  // Update list progress when an item is created\n  if (stream.isEntity(List)) {\n    if (stream.operation === 'insert' && stream.newImage) {\n      await ListManager.update(List.getPrimaryKey(stream.newImage.listId), {\n        increment: {\n          'progress.checked': 1,\n        },\n      });\n    }\n  }\n}\n")))}p.isMDXComponent=!0}}]);