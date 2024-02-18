"use strict";(self.webpackChunkdynamode_docs=self.webpackChunkdynamode_docs||[]).push([[221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,k=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={title:"Condition | Dynamode",description:"Condition",sidebar_label:"Condition",hide_title:!0},l="Condition",o={unversionedId:"guide/condition",id:"guide/condition",title:"Condition | Dynamode",description:"Condition",source:"@site/docs/guide/condition.mdx",sourceDirName:"guide",slug:"/guide/condition",permalink:"/dynamode/docs/guide/condition",draft:!1,editUrl:"https://www.github.com/blazejkustra/dynamode/tree/main/docs/docs/guide/condition.mdx",tags:[],version:"current",frontMatter:{title:"Condition | Dynamode",description:"Condition",sidebar_label:"Condition",hide_title:!0},sidebar:"sidebar",previous:{title:"Entity Manager",permalink:"/dynamode/docs/guide/managers/entityManager"},next:{title:"Query",permalink:"/dynamode/docs/guide/query"}},d={},s=[{value:"new Condition(Entity) or EntityManager.condition()",id:"new-conditionentity-or-entitymanagercondition",level:2},{value:"Condition.attribute(key)",id:"conditionattributekey",level:2},{value:".eq(value)",id:"eqvalue",level:3},{value:".ne(value)",id:"nevalue",level:3},{value:".lt(value)",id:"ltvalue",level:3},{value:".le(value)",id:"levalue",level:3},{value:".gt(value)",id:"gtvalue",level:3},{value:".ge(value)",id:"gevalue",level:3},{value:".beginsWith(value)",id:"beginswithvalue",level:3},{value:".between(value1, value2)",id:"betweenvalue1-value2",level:3},{value:".contains(values)",id:"containsvalues",level:3},{value:".in(values)",id:"invalues",level:3},{value:".type(value)",id:"typevalue",level:3},{value:".exists()",id:"exists",level:3},{value:".size()",id:"size",level:3},{value:".not()",id:"not",level:3},{value:"Condition.parenthesis(condition)",id:"conditionparenthesiscondition",level:2},{value:"Condition.group(condition)",id:"conditiongroupcondition",level:2},{value:"Condition.condition(condition)",id:"conditionconditioncondition",level:2},{value:"Condition.and",id:"conditionand",level:2},{value:"Condition.or",id:"conditionor",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"condition"},"Condition"),(0,i.kt)("p",null,"Condition class represents a conditional that you can pass to ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/managers/entityManager"},"Entity Manager methods")," and also to build more complex conditions in ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/query"},"Query")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/scan"},"Scan")," classes."),(0,i.kt)("p",null,"Condition is also a base class for ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/query"},"Query")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/scan"},"Scan"),", meaning that all methods listed here are also available in ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/query"},"Query")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/scan"},"Scan")," classes."),(0,i.kt)("h2",{id:"new-conditionentity-or-entitymanagercondition"},"new Condition(Entity) or EntityManager.condition()"),(0,i.kt)("p",null,"Every condition has to be initialized with ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/managers/entityManager"},"Entity")," to infer its underlying properties. You can achieve this in two ways:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Below definitions are equivalent\nnew Condition(User);\nUserManager.condition();\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/guide/entity/modeling#user"},"User")," is an example class that extends ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/managers/entityManager"},"Entity"),"."),(0,i.kt)("h2",{id:"conditionattributekey"},"Condition.attribute(key)"),(0,i.kt)("p",null,"This method prepares a new conditional expression. The ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," parameter is a string, narrowed down to flattened entity properties."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"These properties are allowed for the User entity"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('partitionKey');\nUserManager.condition().attribute('sortKey');\nUserManager.condition().attribute('username');\nUserManager.condition().attribute('age');\nUserManager.condition().attribute('friends');\nUserManager.condition().attribute('config');\nUserManager.condition().attribute('config.isAdmin');\nUserManager.condition().attribute('friends[1]');\nUserManager.condition().attribute('friends[10]');\n"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Typescript error: Argument of type '\"unknownProperty\"' is not assignable to parameter of type: ",(0,i.kt)("inlineCode",{parentName:"p"},'"username" | "partitionKey" | "sortKey" | "age" | "config" | "config.isAdmin" | friends | friends.${number}')),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('unknownProperty');\n"))),(0,i.kt)("p",null,"To complete the conditional you need to use one of undermentioned functions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username'); // This condition has no impact on the final conditional\nUserManager.condition().attribute('username').eq('blazej'); // Adding comparison function (eq) after `attribute` method will complete the conditional. Resulting in: `username = blazej`\n")),(0,i.kt)("h3",{id:"eqvalue"},".eq(value)"),(0,i.kt)("p",null,"This comparison function will check if the given key is equal to the value that is passed in as a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').eq('blazej'); // Resulting in: `username = blazej`\n")),(0,i.kt)("h3",{id:"nevalue"},".ne(value)"),(0,i.kt)("p",null,"This comparison function will check if the given key is not equal to the value that is passed in as a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').ne('blazej'); // Resulting in: `username <> blazej`\n")),(0,i.kt)("h3",{id:"ltvalue"},".lt(value)"),(0,i.kt)("p",null,"This comparison function will check if the given key is less than the value that is passed in as a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').lt('blazej'); // Resulting in: `username < blazej`\n")),(0,i.kt)("h3",{id:"levalue"},".le(value)"),(0,i.kt)("p",null,"This comparison function will check if the given key is less than or equal to the value that is passed in as a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').le('blazej'); // Resulting in: `username <= blazej`\n")),(0,i.kt)("h3",{id:"gtvalue"},".gt(value)"),(0,i.kt)("p",null,"This comparison function will check if the given key is greater than the value that is passed in as a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').gt('blazej'); // Resulting in: `username > blazej`\n")),(0,i.kt)("h3",{id:"gevalue"},".ge(value)"),(0,i.kt)("p",null,"This comparison function will check if the given key is greater than or equal to the value that is passed in as a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').ge('blazej'); // Resulting in: `username >= blazej`\n")),(0,i.kt)("h3",{id:"beginswithvalue"},".beginsWith(value)"),(0,i.kt)("p",null,"This comparison function will check if the given key is begins with the value that is passed in as a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').beginsWith('bla'); // Resulting in: `begins_with(username, bla)`\n")),(0,i.kt)("h3",{id:"betweenvalue1-value2"},".between(value1, value2)"),(0,i.kt)("p",null,"This comparison function will check if the given key is between the values that were passed in as parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('age').between(21, 37); // Resulting in: `age BETWEEN 21 AND 37`\n")),(0,i.kt)("h3",{id:"containsvalues"},".contains(values)"),(0,i.kt)("p",null,"This comparison function will check if the given key contains the value that is passed in as a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').contains('blazej'); // Resulting in: `contains(username, blazej)`\n")),(0,i.kt)("h3",{id:"invalues"},".in(values)"),(0,i.kt)("p",null,"This comparison function will check if the given key equals to any of the items that are passed in as parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').in(['blazej', 'david']); // Resulting in: `username IN blazej, david`\n")),(0,i.kt)("h3",{id:"typevalue"},".type(value)"),(0,i.kt)("p",null,"This comparison function will check if the given key is of a given type that is passed in as a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { AttributeType } from 'dynamode/condition';\n\nUserManager.condition().attribute('username').type(AttributeType.String); // Resulting in: `attribute_type(username, 'S')`\n")),(0,i.kt)("h3",{id:"exists"},".exists()"),(0,i.kt)("p",null,"This comparison function will check if the given key exists in the item."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').exists(); // Resulting in: `attribute_exists(username)`\n")),(0,i.kt)("h3",{id:"size"},".size()"),(0,i.kt)("p",null,"This function will compare the size of property under the given key. List of possible functions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Result"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".eq(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'size(key) = value'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".ne(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'size(key) <> value'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".lt(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'size(key) < value'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".le(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'size(key) <= value'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".gt(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'size(key) > value'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".ge(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'size(key) >= value'"))))),(0,i.kt)("h3",{id:"not"},".not()"),(0,i.kt)("p",null,"This function use the opposite comparison for a given condition. List of possible functions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"What is used"),(0,i.kt)("th",{parentName:"tr",align:null},"Result"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".eq(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".ne(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'key <> value'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".ne(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".eq(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'key = value'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".lt(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".ge(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'key >= value'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".le(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".gt(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'key > value'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".gt(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".le(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'key <= value'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".ge(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".lt(value)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'key < value'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".contains(value)")),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'NOT contains(key, value)'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".in(values)")),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'NOT (key IN value1, value2)'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".exists()")),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'attribute_not_exists(key)'"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').not().contains('blazej'); // Resulting in: `NOT contains(username, blazej)`\nUserManager.condition().attribute('username').not().eq('blazej'); // Resulting in: `username <> blazej`\n")),(0,i.kt)("h2",{id:"conditionparenthesiscondition"},"Condition.parenthesis(condition)"),(0,i.kt)("p",null,"This method takes initialized ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/condition"},(0,i.kt)("inlineCode",{parentName:"a"},"Condition"))," as a parameter and groups the inner condition with a parenthesis."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').eq('blazej').and.parenthesis(\n  UserManager.condition()\n    .attribute('age').eq(21)\n    .attribute('age').eq(37)\n); // username = blazej AND ( age = 21 OR age = 37 )\n")),(0,i.kt)("h2",{id:"conditiongroupcondition"},"Condition.group(condition)"),(0,i.kt)("p",null,"This method is identical to ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/condition#conditionparenthesiscondition"},(0,i.kt)("inlineCode",{parentName:"a"},"Condition.parenthesis(condition)"))," and is used as an alias."),(0,i.kt)("h2",{id:"conditionconditioncondition"},"Condition.condition(condition)"),(0,i.kt)("p",null,"This method takes initialized ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/condition"},(0,i.kt)("inlineCode",{parentName:"a"},"Condition"))," as a parameter and merges both conditions together without parenthesis."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').eq('blazej').and.condition(\n  UserManager.condition()\n    .attribute('age').eq(21).or\n    .attribute('age').eq(37)\n); // username = blazej AND age = 21 OR age = 37 \n\nUserManager.condition().attribute('username').eq('blazej').or.condition(\n  UserManager.condition()\n    .attribute('age').eq(21).or\n    .attribute('age').eq(37)\n); // username = blazej OR age = 21 OR age = 37 \n")),(0,i.kt)("h2",{id:"conditionand"},"Condition.and"),(0,i.kt)("p",null,"This method specifies an ",(0,i.kt)("inlineCode",{parentName:"p"},"AND")," operator between two conditions, condition will return true only when both conditions are met. This function can be omitted as ",(0,i.kt)("inlineCode",{parentName:"p"},"AND")," operator is set as default"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// conditions below are identical\nUserManager.condition().attribute('username').eq('blazej').and.attribute('age').eq(21); // username = blazej AND age = 21\nUserManager.condition().attribute('username').eq('blazej').attribute('age').eq(21); // username = blazej AND age = 21\n")),(0,i.kt)("h2",{id:"conditionor"},"Condition.or"),(0,i.kt)("p",null,"This method specifies an ",(0,i.kt)("inlineCode",{parentName:"p"},"OR")," operator between two conditions, condition will return true if either of two conditions are met."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UserManager.condition().attribute('username').eq('blazej').or.attribute('age').eq(21); // username = blazej OR age = 21\n")))}p.isMDXComponent=!0}}]);