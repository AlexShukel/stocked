(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[461],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),f=s(n),d=o,h=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(h,i(i({ref:e},l),{},{components:n})):r.createElement(h,i({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7061:function(t,e,n){"use strict";n.r(e),n.d(e,{contentTitle:function(){return j},default:function(){return S},frontMatter:function(){return N},metadata:function(){return O},toc:function(){return P}});var r=n(2122),o=n(9756),a=n(7294),i=n(3905),c=n(84),u=n.n(c),s=n(6010),l=function(t){var e=t.fullWord,n=t.part,r=t.className,o=e.indexOf(n||"");return n&&-1!==o?a.createElement(a.Fragment,null,e.substring(0,o),a.createElement("span",{className:r},n),e.substring(o+n.length)):a.createElement(a.Fragment,null,e)},p="tree_1P_3",f="tree__list_3oA7",d="tree__item_3GG9",h="tree__item--highlighted_1dlB",v="highlighted_2b3d",m=function t(e){var n,r=e.valueKey,o=e.selectedPath,i=e.value,c=e.isArrayItem,u="object"==typeof i&&null!==i,p=1===(null==o?void 0:o.length)&&(null==o?void 0:o[0])===r;return a.createElement("li",{className:(0,s.Z)(d,p&&h),"aria-expanded":"true",role:"treeitem"},a.createElement("span",null,!c&&a.createElement(a.Fragment,null,a.createElement(l,{className:v,fullWord:r,part:1===(null==o?void 0:o.length)?null==o?void 0:o[0]:void 0}),": "),u?(n=i,Array.isArray(n)?"[":"{"):JSON.stringify(i)+","),u&&a.createElement("ul",{className:(0,s.Z)(f),role:"group"},Object.entries(i).map((function(e){var n=e[0],c=e[1];return a.createElement(t,{selectedPath:(null==o?void 0:o[0])===r?null==o?void 0:o.slice(1):void 0,key:n,valueKey:n,value:c,isArrayItem:Array.isArray(i)})}))),u&&function(t){return Array.isArray(t)?"]":"}"}(i)+",")},y=function(t){var e=t.object,n=t.selectedPath;return a.createElement("ul",{className:p,role:"tree"},Object.entries(e).map((function(t){var e=t[0],r=t[1];return a.createElement(m,{selectedPath:n,key:e,valueKey:e,value:r})})))},g="input_2DEC",k=["className"],b=function(t){var e=t.className,n=(0,o.Z)(t,k);return a.createElement("input",(0,r.Z)({className:(0,s.Z)(g,e)},n))},_="input_onkQ",x=function(t){var e=t.object,n=t.initialPath,r=(0,a.useState)(n),o=r[0],i=r[1],c=(0,a.useCallback)((function(t){i(t.target.value)}),[]);return a.createElement("div",null,a.createElement(b,{className:_,value:o,onChange:c}),a.createElement(y,{selectedPath:u()(o).filter(Boolean),object:e}))},w=["components"],N={sidebar_position:2},j="Basics",O={unversionedId:"intro/basics",id:"intro/basics",isDocsHomePage:!1,title:"Basics",description:"If you are familiar with lodash's deep set / get functions or the formik library, most of the functionality will be clear to you.",source:"@site/docs/intro/basics.mdx",sourceDirName:"intro",slug:"/intro/basics",permalink:"/stocked/docs/intro/basics",editUrl:"https://github.com/ArtiomTr/stocked/edit/master/website/docs/intro/basics.mdx",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/stocked/docs/intro/getting-started"},next:{title:"Overview",permalink:"/stocked/docs/tutorial/overview"}},P=[{value:"Overview",id:"overview",children:[]},{value:"Data",id:"data",children:[{value:"Standard API",id:"standard-api",children:[]},{value:"Hooks API",id:"hooks-api",children:[]}]},{value:"Playgrounds",id:"playgrounds",children:[{value:"Deep get / set playground",id:"deep-get--set-playground",children:[]}]}],E={toc:P};function S(t){var e=t.components,n=(0,o.Z)(t,w);return(0,i.kt)("wrapper",(0,r.Z)({},E,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basics"},"Basics"),(0,i.kt)("p",null,"If you are familiar with lodash's ",(0,i.kt)("a",{parentName:"p",href:"https://lodash.com/docs/4.17.15#set"},"deep set / get functions")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://formik.org/"},"formik")," library, most of the functionality will be clear to you."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stocked")," keeps all data in context. After that, you can watch the value changes using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useStockValue")," (if you don't want to edit the value), ",(0,i.kt)("inlineCode",{parentName:"p"},"useStockState")," hooks or using ",(0,i.kt)("inlineCode",{parentName:"p"},"watch")," function."),(0,i.kt)("h2",{id:"data"},"Data"),(0,i.kt)("p",null,"Data is saved as one, ",(0,i.kt)("strong",{parentName:"p"},"non-circular")," object."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Be careful! ",(0,i.kt)("inlineCode",{parentName:"p"},"stocked")," does not support circular objects."))),(0,i.kt)("h3",{id:"standard-api"},"Standard API"),(0,i.kt)("p",null,"To change value, you need to call deep set or get functions. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"stock.setValue('path.to.value', 'testValue');\n")),(0,i.kt)("p",null,"To get deep value, you can use function ",(0,i.kt)("inlineCode",{parentName:"p"},"getValue"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"stock.getValue('path.to.value');\n")),(0,i.kt)("p",null,"To observe value changes, use ",(0,i.kt)("inlineCode",{parentName:"p"},"watch")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const cleanup = stock.watch('path.to.value', newValue => {\n    // your code...\n});\n\n// call cleanup when your component unmounts\ncleanup();\n")),(0,i.kt)("h3",{id:"hooks-api"},"Hooks API"),(0,i.kt)("p",null,"If you're fan of React hooks, you can use some helper hooks from ",(0,i.kt)("inlineCode",{parentName:"p"},"stocked")," for easier state manipulation. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const value = useStockValue('path.to.value');\n")),(0,i.kt)("p",null,"This hook will return actual value for you. No observers and cleanups - everything works out of the box!"),(0,i.kt)("p",null,"If you like React ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," hook, ",(0,i.kt)("inlineCode",{parentName:"p"},"stocked")," also has something for you:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const [value, setValue] = useStockState('path.to.value');\n")),(0,i.kt)("h2",{id:"playgrounds"},"Playgrounds"),(0,i.kt)("p",null,"You can play with ",(0,i.kt)("inlineCode",{parentName:"p"},"stocked")," in your web browser with these live online playgrounds:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/competent-smoke-l3cd1?file=/src/App.tsx"},"CodeSandbox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackblitz.com/edit/stocked-playground?file=App.tsx"},"Stackblitz"))),(0,i.kt)("h3",{id:"deep-get--set-playground"},"Deep get / set playground"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Try to specify path to the deep variable in the input below to see the instant result!")),(0,i.kt)(x,{object:{hello:{asdf:"hello",co:"asdf",c:{hello:0}},arr:["asdf",{h:{d:"asdf"}}]},initialPath:"hello",mdxType:"DeepPathPreview"}))}S.isMDXComponent=!0},6010:function(t,e,n){"use strict";function r(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function o(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}n.d(e,{Z:function(){return o}})},1989:function(t,e,n){var r=n(1789),o=n(401),a=n(7667),i=n(1327),c=n(1866);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},8407:function(t,e,n){var r=n(7040),o=n(4125),a=n(2117),i=n(7518),c=n(4705);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},7071:function(t,e,n){var r=n(852)(n(5639),"Map");t.exports=r},3369:function(t,e,n){var r=n(4785),o=n(1285),a=n(6e3),i=n(9916),c=n(5265);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},9932:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},8470:function(t,e,n){var r=n(7813);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},4239:function(t,e,n){var r=n(2705),o=n(9607),a=n(2333),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},8458:function(t,e,n){var r=n(3560),o=n(5346),a=n(3218),i=n(346),c=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,l=u.toString,p=s.hasOwnProperty,f=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?f:c).test(i(t))}},531:function(t,e,n){var r=n(2705),o=n(9932),a=n(1469),i=n(3448),c=r?r.prototype:void 0,u=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return u?u.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},278:function(t){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},4429:function(t,e,n){var r=n(5639)["__core-js_shared__"];t.exports=r},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},5050:function(t,e,n){var r=n(7019);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},852:function(t,e,n){var r=n(8458),o=n(7801);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},9607:function(t,e,n){var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(u){}var o=i.call(t);return r&&(e?t[c]=n:delete t[c]),o}},7801:function(t){t.exports=function(t,e){return null==t?void 0:t[e]}},1789:function(t,e,n){var r=n(4536);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:function(t){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},7667:function(t,e,n){var r=n(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},1327:function(t,e,n){var r=n(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},1866:function(t,e,n){var r=n(4536);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},7019:function(t){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},5346:function(t,e,n){var r,o=n(4429),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},7040:function(t){t.exports=function(){this.__data__=[],this.size=0}},4125:function(t,e,n){var r=n(8470),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},2117:function(t,e,n){var r=n(8470);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},7518:function(t,e,n){var r=n(8470);t.exports=function(t){return r(this.__data__,t)>-1}},4705:function(t,e,n){var r=n(8470);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},4785:function(t,e,n){var r=n(1989),o=n(8407),a=n(7071);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},1285:function(t,e,n){var r=n(5050);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},6e3:function(t,e,n){var r=n(5050);t.exports=function(t){return r(this,t).get(t)}},9916:function(t,e,n){var r=n(5050);t.exports=function(t){return r(this,t).has(t)}},5265:function(t,e,n){var r=n(5050);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},4523:function(t,e,n){var r=n(8306);t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},4536:function(t,e,n){var r=n(852)(Object,"create");t.exports=r},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},5514:function(t,e,n){var r=n(4523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(a,"$1"):n||t)})),e}));t.exports=i},327:function(t,e,n){var r=n(3448);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}},346:function(t){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},7813:function(t){t.exports=function(t,e){return t===e||t!=t&&e!=e}},1469:function(t){var e=Array.isArray;t.exports=e},3560:function(t,e,n){var r=n(4239),o=n(3218);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},3218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var r=n(4239),o=n(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},8306:function(t,e,n){var r=n(3369);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},84:function(t,e,n){var r=n(9932),o=n(278),a=n(1469),i=n(3448),c=n(5514),u=n(327),s=n(9833);t.exports=function(t){return a(t)?r(t,u):i(t)?[t]:o(c(s(t)))}},9833:function(t,e,n){var r=n(531);t.exports=function(t){return null==t?"":r(t)}}}]);