"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80],{734:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(2435);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),g=o,d=m["".concat(l,".").concat(g)]||m[g]||s[g]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3506:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return s},default:function(){return g}});var r=n(7180),o=n(5317),a=(n(2435),n(734)),i=["components"],u={sidebar_position:6,title:"Contributing"},l="Contributing to ko",p={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"We use pnpm workspace to manage our packages. so make sure you use pnpm as package manager than npm or yarn.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/ko/docs/contributing",editUrl:"https://github.com/DTStack/ko/website/docs/contributing.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Contributing"},sidebar:"tutorialSidebar",previous:{title:"Migration",permalink:"/ko/docs/advanced/migration"}},c={},s=[{value:"Code Structure",id:"code-structure",level:2},{value:"Commands",id:"commands",level:2},{value:"Debug",id:"debug",level:3},{value:"Local Testing",id:"local-testing",level:3}],m={toc:s};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributing-to-ko"},"Contributing to ko"),(0,a.kt)("p",null,"We use ",(0,a.kt)("strong",{parentName:"p"},"pnpm workspace")," to manage our packages. so make sure you use ",(0,a.kt)("strong",{parentName:"p"},"pnpm")," as package manager than ",(0,a.kt)("strong",{parentName:"p"},"npm")," or ",(0,a.kt)("strong",{parentName:"p"},"yarn"),"."),(0,a.kt)("p",null,"To getting started with this repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install\n")),(0,a.kt)("h2",{id:"code-structure"},"Code Structure"),(0,a.kt)("p",null,"as a ",(0,a.kt)("strong",{parentName:"p"},"monorepo"),", ko now maintain 4 packages in packages directory:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ko"),": main package"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ko-lints"),": code format cli, include ",(0,a.kt)("strong",{parentName:"li"},"eslint"),", ",(0,a.kt)("strong",{parentName:"li"},"prettier")," and ",(0,a.kt)("strong",{parentName:"li"},"stylelint"),", can be integrated in ko or use individually"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ko-config"),": default config used by ",(0,a.kt)("strong",{parentName:"li"},"ko-lints")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"babel-preset-ko-app"),": babel preset used by ko")),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"debug"},"Debug"),(0,a.kt)("p",null,"use ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm debug")," to debug local packages"),(0,a.kt)("h3",{id:"local-testing"},"Local Testing"),(0,a.kt)("p",null,"use ",(0,a.kt)("strong",{parentName:"p"},"pnpm link")," to link ",(0,a.kt)("inlineCode",{parentName:"p"},"ko")," into local packages for testing"))}g.isMDXComponent=!0}}]);