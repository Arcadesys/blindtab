import{r as V,a as im,R as sm,_ as ja,d as S,b as td,l as Je,m as Ua,f as om}from"./vendor-B6z8DUxt.js";var nd={exports:{}},Us={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am=V,lm=Symbol.for("react.element"),cm=Symbol.for("react.fragment"),um=Object.prototype.hasOwnProperty,hm=am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dm={key:!0,ref:!0,__self:!0,__source:!0};function rd(r,e,t){var n,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)um.call(e,n)&&!dm.hasOwnProperty(n)&&(i[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:lm,type:r,key:s,ref:o,props:i,_owner:hm.current}}Us.Fragment=cm;Us.jsx=rd;Us.jsxs=rd;nd.exports=Us;var g=nd.exports,oa={},Qc=im;oa.createRoot=Qc.createRoot,oa.hydrateRoot=Qc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gs(){return gs=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},gs.apply(this,arguments)}var kt;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(kt||(kt={}));const Jc="popstate";function fm(r){r===void 0&&(r={});function e(n,i){let{pathname:s,search:o,hash:l}=n.location;return aa("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(n,i){return typeof i=="string"?i:sd(i)}return gm(e,t,null,r)}function ze(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function id(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pm(){return Math.random().toString(36).substr(2,8)}function Yc(r,e){return{usr:r.state,key:r.key,idx:e}}function aa(r,e,t,n){return t===void 0&&(t=null),gs({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Bs(e):e,{state:t,key:e&&e.key||n||pm()})}function sd(r){let{pathname:e="/",search:t="",hash:n=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Bs(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let n=r.indexOf("?");n>=0&&(e.search=r.substr(n),r=r.substr(0,n)),r&&(e.pathname=r)}return e}function gm(r,e,t,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:s=!1}=n,o=i.history,l=kt.Pop,c=null,h=f();h==null&&(h=0,o.replaceState(gs({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=kt.Pop;let C=f(),O=C==null?null:C-h;h=C,c&&c({action:l,location:k.location,delta:O})}function y(C,O){l=kt.Push;let F=aa(k.location,C,O);h=f()+1;let M=Yc(F,h),z=k.createHref(F);try{o.pushState(M,"",z)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;i.location.assign(z)}s&&c&&c({action:l,location:k.location,delta:1})}function x(C,O){l=kt.Replace;let F=aa(k.location,C,O);h=f();let M=Yc(F,h),z=k.createHref(F);o.replaceState(M,"",z),s&&c&&c({action:l,location:k.location,delta:0})}function P(C){let O=i.location.origin!=="null"?i.location.origin:i.location.href,F=typeof C=="string"?C:sd(C);return F=F.replace(/ $/,"%20"),ze(O,"No window.location.(origin|href) available to create URL for href: "+F),new URL(F,O)}let k={get action(){return l},get location(){return r(i,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Jc,p),c=C,()=>{i.removeEventListener(Jc,p),c=null}},createHref(C){return e(i,C)},createURL:P,encodeLocation(C){let O=P(C);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:y,replace:x,go(C){return o.go(C)}};return k}var Xc;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Xc||(Xc={}));function mm(r,e,t){return t===void 0&&(t="/"),ym(r,e,t)}function ym(r,e,t,n){let i=typeof e=="string"?Bs(e):e,s=ld(i.pathname||"/",t);if(s==null)return null;let o=od(r);_m(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let h=Pm(s);l=Am(o[c],h)}return l}function od(r,e,t,n){e===void 0&&(e=[]),t===void 0&&(t=[]),n===void 0&&(n="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(ze(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let h=Un([n,c.relativePath]),f=t.concat(c);s.children&&s.children.length>0&&(ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),od(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:xm(h,s.index),routesMeta:f})};return r.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of ad(s.path))i(s,o,c)}),e}function ad(r){let e=r.split("/");if(e.length===0)return[];let[t,...n]=e,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let o=ad(n.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>r.startsWith("/")&&c===""?"/":c)}function _m(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Sm(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}const vm=/^:[\w-]+$/,wm=3,Im=2,Em=1,bm=10,Tm=-2,Zc=r=>r==="*";function xm(r,e){let t=r.split("/"),n=t.length;return t.some(Zc)&&(n+=Tm),e&&(n+=Im),t.filter(i=>!Zc(i)).reduce((i,s)=>i+(vm.test(s)?wm:s===""?Em:bm),n)}function Sm(r,e){return r.length===e.length&&r.slice(0,-1).every((n,i)=>n===e[i])?r[r.length-1]-e[e.length-1]:0}function Am(r,e,t){let{routesMeta:n}=r,i={},s="/",o=[];for(let l=0;l<n.length;++l){let c=n[l],h=l===n.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=Rm({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},f),y=c.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Un([s,p.pathname]),pathnameBase:km(Un([s,p.pathnameBase])),route:y}),p.pathnameBase!=="/"&&(s=Un([s,p.pathnameBase]))}return o}function Rm(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,n]=Cm(r.path,r.caseSensitive,r.end),i=e.match(t);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((h,f,p)=>{let{paramName:y,isOptional:x}=f;if(y==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const P=l[p];return x&&!P?h[y]=void 0:h[y]=(P||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:r}}function Cm(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),id(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let n=[],i="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(n.push({paramName:"*"}),i+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":r!==""&&r!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),n]}function Pm(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return id(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function ld(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=r.charAt(t);return n&&n!=="/"?null:r.slice(t)||"/"}const Un=r=>r.join("/").replace(/\/\/+/g,"/"),km=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/");function Dm(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const cd=["post","put","patch","delete"];new Set(cd);const Vm=["get",...cd];new Set(Vm);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},ms.apply(this,arguments)}const Nm=V.createContext(null),Om=V.createContext(null),ud=V.createContext(null),$s=V.createContext(null),zs=V.createContext({outlet:null,matches:[],isDataRoute:!1}),hd=V.createContext(null);function Ba(){return V.useContext($s)!=null}function Mm(){return Ba()||ze(!1),V.useContext($s).location}function Lm(r,e){return Fm(r,e)}function Fm(r,e,t,n){Ba()||ze(!1);let{navigator:i,static:s}=V.useContext(ud),{matches:o}=V.useContext(zs),l=o[o.length-1],c=l?l.params:{};l&&l.pathname;let h=l?l.pathnameBase:"/";l&&l.route;let f=Mm(),p;if(e){var y;let O=typeof e=="string"?Bs(e):e;h==="/"||(y=O.pathname)!=null&&y.startsWith(h)||ze(!1),p=O}else p=f;let x=p.pathname||"/",P=x;if(h!=="/"){let O=h.replace(/^\//,"").split("/");P="/"+x.replace(/^\//,"").split("/").slice(O.length).join("/")}let k=mm(r,{pathname:P}),C=zm(k&&k.map(O=>Object.assign({},O,{params:Object.assign({},c,O.params),pathname:Un([h,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?h:Un([h,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),o,t,n);return e&&C?V.createElement($s.Provider,{value:{location:ms({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:kt.Pop}},C):C}function jm(){let r=Wm(),e=Dm(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),t?V.createElement("pre",{style:i},t):null,null)}const Um=V.createElement(jm,null);class Bm extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?V.createElement(zs.Provider,{value:this.props.routeContext},V.createElement(hd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $m(r){let{routeContext:e,match:t,children:n}=r,i=V.useContext(Nm);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),V.createElement(zs.Provider,{value:e},n)}function zm(r,e,t,n){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),n===void 0&&(n=null),r==null){var s;if(!t)return null;if(t.errors)r=t.matches;else if((s=n)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=(i=t)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||ze(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,h=-1;if(t&&n&&n.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:y,errors:x}=t,P=p.route.loader&&y[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||P){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,p,y)=>{let x,P=!1,k=null,C=null;t&&(x=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||Um,c&&(h<0&&y===0?(Hm("route-fallback"),P=!0,C=null):h===y&&(P=!0,C=p.route.hydrateFallbackElement||null)));let O=e.concat(o.slice(0,y+1)),F=()=>{let M;return x?M=k:P?M=C:p.route.Component?M=V.createElement(p.route.Component,null):p.route.element?M=p.route.element:M=f,V.createElement($m,{match:p,routeContext:{outlet:f,matches:O,isDataRoute:t!=null},children:M})};return t&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?V.createElement(Bm,{location:t.location,revalidation:t.revalidation,component:k,error:x,children:F(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):F()},null)}var dd=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(dd||{});function Gm(r){let e=V.useContext(Om);return e||ze(!1),e}function qm(r){let e=V.useContext(zs);return e||ze(!1),e}function Km(r){let e=qm(),t=e.matches[e.matches.length-1];return t.route.id||ze(!1),t.route.id}function Wm(){var r;let e=V.useContext(hd),t=Gm(dd.UseRouteError),n=Km();return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}const eu={};function Hm(r,e,t){eu[r]||(eu[r]=!0)}function Qm(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function fd(r){ze(!1)}function Jm(r){let{basename:e="/",children:t=null,location:n,navigationType:i=kt.Pop,navigator:s,static:o=!1,future:l}=r;Ba()&&ze(!1);let c=e.replace(/^\/*/,"/"),h=V.useMemo(()=>({basename:c,navigator:s,static:o,future:ms({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof n=="string"&&(n=Bs(n));let{pathname:f="/",search:p="",hash:y="",state:x=null,key:P="default"}=n,k=V.useMemo(()=>{let C=ld(f,c);return C==null?null:{location:{pathname:C,search:p,hash:y,state:x,key:P},navigationType:i}},[c,f,p,y,x,P,i]);return k==null?null:V.createElement(ud.Provider,{value:h},V.createElement($s.Provider,{children:t,value:k}))}function Ym(r){let{children:e,location:t}=r;return Lm(la(e),t)}new Promise(()=>{});function la(r,e){e===void 0&&(e=[]);let t=[];return V.Children.forEach(r,(n,i)=>{if(!V.isValidElement(n))return;let s=[...e,i];if(n.type===V.Fragment){t.push.apply(t,la(n.props.children,s));return}n.type!==fd&&ze(!1),!n.props.index||!n.props.children||ze(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=la(n.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Xm="6";try{window.__reactRouterVersion=Xm}catch{}const Zm="startTransition",tu=sm[Zm];function ey(r){let{basename:e,children:t,future:n,window:i}=r,s=V.useRef();s.current==null&&(s.current=fm({window:i,v5Compat:!0}));let o=s.current,[l,c]=V.useState({action:o.action,location:o.location}),{v7_startTransition:h}=n||{},f=V.useCallback(p=>{h&&tu?tu(()=>c(p)):c(p)},[c,h]);return V.useLayoutEffect(()=>o.listen(f),[o,f]),V.useEffect(()=>Qm(n),[n]),V.createElement(Jm,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o,future:n})}var nu;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(nu||(nu={}));var ru;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(ru||(ru={}));var iu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ty=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],l=r[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,l=o?r[i+1]:0,c=i+2<r.length,h=c?r[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,x=h&63;c||(x=64,o||(y=64)),n.push(t[f],t[p],t[y],t[x])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(pd(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ty(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],l=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new ny;const y=s<<2|l>>4;if(n.push(y),h!==64){const x=l<<4&240|h>>2;if(n.push(x),p!==64){const P=h<<6&192|p;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class ny extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ry=function(r){const e=pd(r);return gd.encodeByteArray(e,!0)},md=function(r){return ry(r).replace(/\./g,"")},yd=function(r){try{return gd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=()=>iy().__FIREBASE_DEFAULTS__,oy=()=>{if(typeof process>"u"||typeof iu>"u")return;const r=iu.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ay=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&yd(r[1]);return e&&JSON.parse(e)},Gs=()=>{try{return sy()||oy()||ay()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ly=r=>{var e,t;return(t=(e=Gs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},_d=()=>{var r;return(r=Gs())===null||r===void 0?void 0:r.config},vd=r=>{var e;return(e=Gs())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function hy(){var r;const e=(r=Gs())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fy(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function py(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gy(){const r=ve();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function wd(){return!hy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Id(){try{return typeof indexedDB=="object"}catch{return!1}}function my(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="FirebaseError";class _t extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=yy,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,di.prototype.create)}}class di{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_y(s,n):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new _t(i,l,n)}}function _y(r,e){return r.replace(vy,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const vy=/\{\$([^}]+)}/g;function wy(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Jr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(su(s)&&su(o)){if(!Jr(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function su(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Iy(r,e){const t=new Ey(r,e);return t.subscribe.bind(t)}class Ey{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");by(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Bo),i.error===void 0&&(i.error=Bo),i.complete===void 0&&(i.complete=Bo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function by(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Bo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(r){return r&&r._delegate?r._delegate:r}class dn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new cy;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sy(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);n===l&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:xy(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xy(r){return r===Xt?void 0:r}function Sy(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ty(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(X||(X={}));const Ry={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Cy=X.INFO,Py={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},ky=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Py[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $a{constructor(e){this.name=e,this._logLevel=Cy,this._logHandler=ky,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ry[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Dy=(r,e)=>e.some(t=>r instanceof t);let ou,au;function Vy(){return ou||(ou=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ny(){return au||(au=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ed=new WeakMap,ca=new WeakMap,bd=new WeakMap,$o=new WeakMap,za=new WeakMap;function Oy(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(Vt(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ed.set(t,r)}).catch(()=>{}),za.set(e,r),e}function My(r){if(ca.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});ca.set(r,e)}let ua={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ca.get(r);if(e==="objectStoreNames")return r.objectStoreNames||bd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ly(r){ua=r(ua)}function Fy(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(zo(this),e,...t);return bd.set(n,e.sort?e.sort():[e]),Vt(n)}:Ny().includes(r)?function(...e){return r.apply(zo(this),e),Vt(Ed.get(this))}:function(...e){return Vt(r.apply(zo(this),e))}}function jy(r){return typeof r=="function"?Fy(r):(r instanceof IDBTransaction&&My(r),Dy(r,Vy())?new Proxy(r,ua):r)}function Vt(r){if(r instanceof IDBRequest)return Oy(r);if($o.has(r))return $o.get(r);const e=jy(r);return e!==r&&($o.set(r,e),za.set(e,r)),e}const zo=r=>za.get(r);function Uy(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),l=Vt(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Vt(o.result),c.oldVersion,c.newVersion,Vt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const By=["get","getKey","getAll","getAllKeys","count"],$y=["put","add","delete","clear"],Go=new Map;function lu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Go.get(e))return Go.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=$y.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||By.includes(t)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return Go.set(e,s),s}Ly(r=>({...r,get:(e,t,n)=>lu(e,t)||r.get(e,t,n),has:(e,t)=>!!lu(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gy(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Gy(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ha="@firebase/app",cu="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new $a("@firebase/app"),qy="@firebase/app-compat",Ky="@firebase/analytics-compat",Wy="@firebase/analytics",Hy="@firebase/app-check-compat",Qy="@firebase/app-check",Jy="@firebase/auth",Yy="@firebase/auth-compat",Xy="@firebase/database",Zy="@firebase/data-connect",e_="@firebase/database-compat",t_="@firebase/functions",n_="@firebase/functions-compat",r_="@firebase/installations",i_="@firebase/installations-compat",s_="@firebase/messaging",o_="@firebase/messaging-compat",a_="@firebase/performance",l_="@firebase/performance-compat",c_="@firebase/remote-config",u_="@firebase/remote-config-compat",h_="@firebase/storage",d_="@firebase/storage-compat",f_="@firebase/firestore",p_="@firebase/vertexai-preview",g_="@firebase/firestore-compat",m_="firebase",y_="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="[DEFAULT]",__={[ha]:"fire-core",[qy]:"fire-core-compat",[Wy]:"fire-analytics",[Ky]:"fire-analytics-compat",[Qy]:"fire-app-check",[Hy]:"fire-app-check-compat",[Jy]:"fire-auth",[Yy]:"fire-auth-compat",[Xy]:"fire-rtdb",[Zy]:"fire-data-connect",[e_]:"fire-rtdb-compat",[t_]:"fire-fn",[n_]:"fire-fn-compat",[r_]:"fire-iid",[i_]:"fire-iid-compat",[s_]:"fire-fcm",[o_]:"fire-fcm-compat",[a_]:"fire-perf",[l_]:"fire-perf-compat",[c_]:"fire-rc",[u_]:"fire-rc-compat",[h_]:"fire-gcs",[d_]:"fire-gcs-compat",[f_]:"fire-fst",[g_]:"fire-fst-compat",[p_]:"fire-vertex","fire-js":"fire-js",[m_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Map,v_=new Map,fa=new Map;function uu(r,e){try{r.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function qn(r){const e=r.name;if(fa.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;fa.set(e,r);for(const t of ys.values())uu(t,r);for(const t of v_.values())uu(t,r);return!0}function Ga(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function lt(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new di("app","Firebase",w_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=y_;function Td(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:da,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(t||(t=_d()),!t)throw Nt.create("no-options");const s=ys.get(i);if(s){if(Jr(t,s.options)&&Jr(n,s.config))return s;throw Nt.create("duplicate-app",{appName:i})}const o=new Ay(i);for(const c of fa.values())o.addComponent(c);const l=new I_(t,n,o);return ys.set(i,l),l}function xd(r=da){const e=ys.get(r);if(!e&&r===da&&_d())return Td();if(!e)throw Nt.create("no-app",{appName:r});return e}function Ot(r,e,t){var n;let i=(n=__[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(l.join(" "));return}qn(new dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="firebase-heartbeat-database",b_=1,Yr="firebase-heartbeat-store";let qo=null;function Sd(){return qo||(qo=Uy(E_,b_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Yr)}catch(t){console.warn(t)}}}}).catch(r=>{throw Nt.create("idb-open",{originalErrorMessage:r.message})})),qo}async function T_(r){try{const t=(await Sd()).transaction(Yr),n=await t.objectStore(Yr).get(Ad(r));return await t.done,n}catch(e){if(e instanceof _t)pt.warn(e.message);else{const t=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(t.message)}}}async function hu(r,e){try{const n=(await Sd()).transaction(Yr,"readwrite");await n.objectStore(Yr).put(e,Ad(r)),await n.done}catch(t){if(t instanceof _t)pt.warn(t.message);else{const n=Nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pt.warn(n.message)}}}function Ad(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=1024,S_=30*24*60*60*1e3;class A_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new C_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=du();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=S_}),this._storage.overwrite(this._heartbeatsCache))}catch(n){pt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=du(),{heartbeatsToSend:n,unsentEntries:i}=R_(this._heartbeatsCache.heartbeats),s=md(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return pt.warn(t),""}}}function du(){return new Date().toISOString().substring(0,10)}function R_(r,e=x_){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),fu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class C_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Id()?my().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await T_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return hu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return hu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fu(r){return md(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(r){qn(new dn("platform-logger",e=>new zy(e),"PRIVATE")),qn(new dn("heartbeat",e=>new A_(e),"PRIVATE")),Ot(ha,cu,r),Ot(ha,cu,"esm2017"),Ot("fire-js","")}P_("");var pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var on,Rd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,w){function I(){}I.prototype=w.prototype,b.D=w.prototype,b.prototype=new I,b.prototype.constructor=b,b.C=function(v,E,T){for(var _=Array(arguments.length-2),se=2;se<arguments.length;se++)_[se-2]=arguments[se];return w.prototype[E].apply(v,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,w,I){I||(I=0);var v=Array(16);if(typeof w=="string")for(var E=0;16>E;++E)v[E]=w.charCodeAt(I++)|w.charCodeAt(I++)<<8|w.charCodeAt(I++)<<16|w.charCodeAt(I++)<<24;else for(E=0;16>E;++E)v[E]=w[I++]|w[I++]<<8|w[I++]<<16|w[I++]<<24;w=b.g[0],I=b.g[1],E=b.g[2];var T=b.g[3],_=w+(T^I&(E^T))+v[0]+3614090360&4294967295;w=I+(_<<7&4294967295|_>>>25),_=T+(E^w&(I^E))+v[1]+3905402710&4294967295,T=w+(_<<12&4294967295|_>>>20),_=E+(I^T&(w^I))+v[2]+606105819&4294967295,E=T+(_<<17&4294967295|_>>>15),_=I+(w^E&(T^w))+v[3]+3250441966&4294967295,I=E+(_<<22&4294967295|_>>>10),_=w+(T^I&(E^T))+v[4]+4118548399&4294967295,w=I+(_<<7&4294967295|_>>>25),_=T+(E^w&(I^E))+v[5]+1200080426&4294967295,T=w+(_<<12&4294967295|_>>>20),_=E+(I^T&(w^I))+v[6]+2821735955&4294967295,E=T+(_<<17&4294967295|_>>>15),_=I+(w^E&(T^w))+v[7]+4249261313&4294967295,I=E+(_<<22&4294967295|_>>>10),_=w+(T^I&(E^T))+v[8]+1770035416&4294967295,w=I+(_<<7&4294967295|_>>>25),_=T+(E^w&(I^E))+v[9]+2336552879&4294967295,T=w+(_<<12&4294967295|_>>>20),_=E+(I^T&(w^I))+v[10]+4294925233&4294967295,E=T+(_<<17&4294967295|_>>>15),_=I+(w^E&(T^w))+v[11]+2304563134&4294967295,I=E+(_<<22&4294967295|_>>>10),_=w+(T^I&(E^T))+v[12]+1804603682&4294967295,w=I+(_<<7&4294967295|_>>>25),_=T+(E^w&(I^E))+v[13]+4254626195&4294967295,T=w+(_<<12&4294967295|_>>>20),_=E+(I^T&(w^I))+v[14]+2792965006&4294967295,E=T+(_<<17&4294967295|_>>>15),_=I+(w^E&(T^w))+v[15]+1236535329&4294967295,I=E+(_<<22&4294967295|_>>>10),_=w+(E^T&(I^E))+v[1]+4129170786&4294967295,w=I+(_<<5&4294967295|_>>>27),_=T+(I^E&(w^I))+v[6]+3225465664&4294967295,T=w+(_<<9&4294967295|_>>>23),_=E+(w^I&(T^w))+v[11]+643717713&4294967295,E=T+(_<<14&4294967295|_>>>18),_=I+(T^w&(E^T))+v[0]+3921069994&4294967295,I=E+(_<<20&4294967295|_>>>12),_=w+(E^T&(I^E))+v[5]+3593408605&4294967295,w=I+(_<<5&4294967295|_>>>27),_=T+(I^E&(w^I))+v[10]+38016083&4294967295,T=w+(_<<9&4294967295|_>>>23),_=E+(w^I&(T^w))+v[15]+3634488961&4294967295,E=T+(_<<14&4294967295|_>>>18),_=I+(T^w&(E^T))+v[4]+3889429448&4294967295,I=E+(_<<20&4294967295|_>>>12),_=w+(E^T&(I^E))+v[9]+568446438&4294967295,w=I+(_<<5&4294967295|_>>>27),_=T+(I^E&(w^I))+v[14]+3275163606&4294967295,T=w+(_<<9&4294967295|_>>>23),_=E+(w^I&(T^w))+v[3]+4107603335&4294967295,E=T+(_<<14&4294967295|_>>>18),_=I+(T^w&(E^T))+v[8]+1163531501&4294967295,I=E+(_<<20&4294967295|_>>>12),_=w+(E^T&(I^E))+v[13]+2850285829&4294967295,w=I+(_<<5&4294967295|_>>>27),_=T+(I^E&(w^I))+v[2]+4243563512&4294967295,T=w+(_<<9&4294967295|_>>>23),_=E+(w^I&(T^w))+v[7]+1735328473&4294967295,E=T+(_<<14&4294967295|_>>>18),_=I+(T^w&(E^T))+v[12]+2368359562&4294967295,I=E+(_<<20&4294967295|_>>>12),_=w+(I^E^T)+v[5]+4294588738&4294967295,w=I+(_<<4&4294967295|_>>>28),_=T+(w^I^E)+v[8]+2272392833&4294967295,T=w+(_<<11&4294967295|_>>>21),_=E+(T^w^I)+v[11]+1839030562&4294967295,E=T+(_<<16&4294967295|_>>>16),_=I+(E^T^w)+v[14]+4259657740&4294967295,I=E+(_<<23&4294967295|_>>>9),_=w+(I^E^T)+v[1]+2763975236&4294967295,w=I+(_<<4&4294967295|_>>>28),_=T+(w^I^E)+v[4]+1272893353&4294967295,T=w+(_<<11&4294967295|_>>>21),_=E+(T^w^I)+v[7]+4139469664&4294967295,E=T+(_<<16&4294967295|_>>>16),_=I+(E^T^w)+v[10]+3200236656&4294967295,I=E+(_<<23&4294967295|_>>>9),_=w+(I^E^T)+v[13]+681279174&4294967295,w=I+(_<<4&4294967295|_>>>28),_=T+(w^I^E)+v[0]+3936430074&4294967295,T=w+(_<<11&4294967295|_>>>21),_=E+(T^w^I)+v[3]+3572445317&4294967295,E=T+(_<<16&4294967295|_>>>16),_=I+(E^T^w)+v[6]+76029189&4294967295,I=E+(_<<23&4294967295|_>>>9),_=w+(I^E^T)+v[9]+3654602809&4294967295,w=I+(_<<4&4294967295|_>>>28),_=T+(w^I^E)+v[12]+3873151461&4294967295,T=w+(_<<11&4294967295|_>>>21),_=E+(T^w^I)+v[15]+530742520&4294967295,E=T+(_<<16&4294967295|_>>>16),_=I+(E^T^w)+v[2]+3299628645&4294967295,I=E+(_<<23&4294967295|_>>>9),_=w+(E^(I|~T))+v[0]+4096336452&4294967295,w=I+(_<<6&4294967295|_>>>26),_=T+(I^(w|~E))+v[7]+1126891415&4294967295,T=w+(_<<10&4294967295|_>>>22),_=E+(w^(T|~I))+v[14]+2878612391&4294967295,E=T+(_<<15&4294967295|_>>>17),_=I+(T^(E|~w))+v[5]+4237533241&4294967295,I=E+(_<<21&4294967295|_>>>11),_=w+(E^(I|~T))+v[12]+1700485571&4294967295,w=I+(_<<6&4294967295|_>>>26),_=T+(I^(w|~E))+v[3]+2399980690&4294967295,T=w+(_<<10&4294967295|_>>>22),_=E+(w^(T|~I))+v[10]+4293915773&4294967295,E=T+(_<<15&4294967295|_>>>17),_=I+(T^(E|~w))+v[1]+2240044497&4294967295,I=E+(_<<21&4294967295|_>>>11),_=w+(E^(I|~T))+v[8]+1873313359&4294967295,w=I+(_<<6&4294967295|_>>>26),_=T+(I^(w|~E))+v[15]+4264355552&4294967295,T=w+(_<<10&4294967295|_>>>22),_=E+(w^(T|~I))+v[6]+2734768916&4294967295,E=T+(_<<15&4294967295|_>>>17),_=I+(T^(E|~w))+v[13]+1309151649&4294967295,I=E+(_<<21&4294967295|_>>>11),_=w+(E^(I|~T))+v[4]+4149444226&4294967295,w=I+(_<<6&4294967295|_>>>26),_=T+(I^(w|~E))+v[11]+3174756917&4294967295,T=w+(_<<10&4294967295|_>>>22),_=E+(w^(T|~I))+v[2]+718787259&4294967295,E=T+(_<<15&4294967295|_>>>17),_=I+(T^(E|~w))+v[9]+3951481745&4294967295,b.g[0]=b.g[0]+w&4294967295,b.g[1]=b.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+T&4294967295}n.prototype.u=function(b,w){w===void 0&&(w=b.length);for(var I=w-this.blockSize,v=this.B,E=this.h,T=0;T<w;){if(E==0)for(;T<=I;)i(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<w;)if(v[E++]=b.charCodeAt(T++),E==this.blockSize){i(this,v),E=0;break}}else for(;T<w;)if(v[E++]=b[T++],E==this.blockSize){i(this,v),E=0;break}}this.h=E,this.o+=w},n.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var w=1;w<b.length-8;++w)b[w]=0;var I=8*this.o;for(w=b.length-8;w<b.length;++w)b[w]=I&255,I/=256;for(this.u(b),b=Array(16),w=I=0;4>w;++w)for(var v=0;32>v;v+=8)b[I++]=this.g[w]>>>v&255;return b};function s(b,w){var I=l;return Object.prototype.hasOwnProperty.call(I,b)?I[b]:I[b]=w(b)}function o(b,w){this.h=w;for(var I=[],v=!0,E=b.length-1;0<=E;E--){var T=b[E]|0;v&&T==w||(I[E]=T,v=!1)}this.g=I}var l={};function c(b){return-128<=b&&128>b?s(b,function(w){return new o([w|0],0>w?-1:0)}):new o([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return C(h(-b));for(var w=[],I=1,v=0;b>=I;v++)w[v]=b/I|0,I*=4294967296;return new o(w,0)}function f(b,w){if(b.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(b.charAt(0)=="-")return C(f(b.substring(1),w));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(w,8)),v=p,E=0;E<b.length;E+=8){var T=Math.min(8,b.length-E),_=parseInt(b.substring(E,E+T),w);8>T?(T=h(Math.pow(w,T)),v=v.j(T).add(h(_))):(v=v.j(I),v=v.add(h(_)))}return v}var p=c(0),y=c(1),x=c(16777216);r=o.prototype,r.m=function(){if(k(this))return-C(this).m();for(var b=0,w=1,I=0;I<this.g.length;I++){var v=this.i(I);b+=(0<=v?v:4294967296+v)*w,w*=4294967296}return b},r.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P(this))return"0";if(k(this))return"-"+C(this).toString(b);for(var w=h(Math.pow(b,6)),I=this,v="";;){var E=z(I,w).g;I=O(I,E.j(w));var T=((0<I.g.length?I.g[0]:I.h)>>>0).toString(b);if(I=E,P(I))return T+v;for(;6>T.length;)T="0"+T;v=T+v}},r.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function P(b){if(b.h!=0)return!1;for(var w=0;w<b.g.length;w++)if(b.g[w]!=0)return!1;return!0}function k(b){return b.h==-1}r.l=function(b){return b=O(this,b),k(b)?-1:P(b)?0:1};function C(b){for(var w=b.g.length,I=[],v=0;v<w;v++)I[v]=~b.g[v];return new o(I,~b.h).add(y)}r.abs=function(){return k(this)?C(this):this},r.add=function(b){for(var w=Math.max(this.g.length,b.g.length),I=[],v=0,E=0;E<=w;E++){var T=v+(this.i(E)&65535)+(b.i(E)&65535),_=(T>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);v=_>>>16,T&=65535,_&=65535,I[E]=_<<16|T}return new o(I,I[I.length-1]&-2147483648?-1:0)};function O(b,w){return b.add(C(w))}r.j=function(b){if(P(this)||P(b))return p;if(k(this))return k(b)?C(this).j(C(b)):C(C(this).j(b));if(k(b))return C(this.j(C(b)));if(0>this.l(x)&&0>b.l(x))return h(this.m()*b.m());for(var w=this.g.length+b.g.length,I=[],v=0;v<2*w;v++)I[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<b.g.length;E++){var T=this.i(v)>>>16,_=this.i(v)&65535,se=b.i(E)>>>16,je=b.i(E)&65535;I[2*v+2*E]+=_*je,F(I,2*v+2*E),I[2*v+2*E+1]+=T*je,F(I,2*v+2*E+1),I[2*v+2*E+1]+=_*se,F(I,2*v+2*E+1),I[2*v+2*E+2]+=T*se,F(I,2*v+2*E+2)}for(v=0;v<w;v++)I[v]=I[2*v+1]<<16|I[2*v];for(v=w;v<2*w;v++)I[v]=0;return new o(I,0)};function F(b,w){for(;(b[w]&65535)!=b[w];)b[w+1]+=b[w]>>>16,b[w]&=65535,w++}function M(b,w){this.g=b,this.h=w}function z(b,w){if(P(w))throw Error("division by zero");if(P(b))return new M(p,p);if(k(b))return w=z(C(b),w),new M(C(w.g),C(w.h));if(k(w))return w=z(b,C(w)),new M(C(w.g),w.h);if(30<b.g.length){if(k(b)||k(w))throw Error("slowDivide_ only works with positive integers.");for(var I=y,v=w;0>=v.l(b);)I=G(I),v=G(v);var E=B(I,1),T=B(v,1);for(v=B(v,2),I=B(I,2);!P(v);){var _=T.add(v);0>=_.l(b)&&(E=E.add(I),T=_),v=B(v,1),I=B(I,1)}return w=O(b,E.j(w)),new M(E,w)}for(E=p;0<=b.l(w);){for(I=Math.max(1,Math.floor(b.m()/w.m())),v=Math.ceil(Math.log(I)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),T=h(I),_=T.j(w);k(_)||0<_.l(b);)I-=v,T=h(I),_=T.j(w);P(T)&&(T=y),E=E.add(T),b=O(b,_)}return new M(E,b)}r.A=function(b){return z(this,b).h},r.and=function(b){for(var w=Math.max(this.g.length,b.g.length),I=[],v=0;v<w;v++)I[v]=this.i(v)&b.i(v);return new o(I,this.h&b.h)},r.or=function(b){for(var w=Math.max(this.g.length,b.g.length),I=[],v=0;v<w;v++)I[v]=this.i(v)|b.i(v);return new o(I,this.h|b.h)},r.xor=function(b){for(var w=Math.max(this.g.length,b.g.length),I=[],v=0;v<w;v++)I[v]=this.i(v)^b.i(v);return new o(I,this.h^b.h)};function G(b){for(var w=b.g.length+1,I=[],v=0;v<w;v++)I[v]=b.i(v)<<1|b.i(v-1)>>>31;return new o(I,b.h)}function B(b,w){var I=w>>5;w%=32;for(var v=b.g.length-I,E=[],T=0;T<v;T++)E[T]=0<w?b.i(T+I)>>>w|b.i(T+I+1)<<32-w:b.i(T+I);return new o(E,b.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Rd=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,on=o}).apply(typeof pu<"u"?pu:typeof self<"u"?self:typeof window<"u"?window:{});var Gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cd,Mr,Pd,ts,pa,kd,Dd,Vd;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gi=="object"&&Gi];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,u){if(u)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var A=a[m];if(!(A in d))break e;d=d[A]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var d=0,m=!1,A={next:function(){if(!m&&d<a.length){var D=d++;return{value:u(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function y(a,u,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,y.apply(null,arguments)}function x(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,A,D){for(var j=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)j[oe-2]=arguments[oe];return u.prototype[A].apply(m,j)}}function k(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function C(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const A=a.length||0,D=m.length||0;a.length=A+D;for(let j=0;j<D;j++)a[A+j]=m[j]}else a.push(m)}}class O{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var G=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function B(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function b(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function w(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(a,u){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)a[d]=m[d];for(let D=0;D<I.length;D++)d=I[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function E(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function T(a){l.setTimeout(()=>{throw a},0)}function _(){var a=yo;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class se{constructor(){this.h=this.g=null}add(u,d){const m=je.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var je=new O(()=>new mo,a=>a.reset());class mo{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let fr,pr=!1,yo=new se,Ql=()=>{const a=l.Promise.resolve(void 0);fr=()=>{a.then(Tg)}};var Tg=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(d){T(d)}var u=je;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}pr=!1};function wt(){this.s=this.s,this.C=this.C}wt.prototype.s=!1,wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var xg=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function gr(a,u){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(G){e:{try{z(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Sg[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&gr.aa.h.call(this)}}P(gr,xe);var Sg={2:"touch",3:"pen",4:"mouse"};gr.prototype.h=function(){gr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xi="closure_listenable_"+(1e6*Math.random()|0),Ag=0;function Rg(a,u,d,m,A){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=A,this.key=++Ag,this.da=this.fa=!1}function Si(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ai(a){this.src=a,this.g={},this.h=0}Ai.prototype.add=function(a,u,d,m,A){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var j=vo(a,u,m,A);return-1<j?(u=a[j],d||(u.fa=!1)):(u=new Rg(u,this.src,D,!!m,A),u.fa=d,a.push(u)),u};function _o(a,u){var d=u.type;if(d in a.g){var m=a.g[d],A=Array.prototype.indexOf.call(m,u,void 0),D;(D=0<=A)&&Array.prototype.splice.call(m,A,1),D&&(Si(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function vo(a,u,d,m){for(var A=0;A<a.length;++A){var D=a[A];if(!D.da&&D.listener==u&&D.capture==!!d&&D.ha==m)return A}return-1}var wo="closure_lm_"+(1e6*Math.random()|0),Io={};function Jl(a,u,d,m,A){if(Array.isArray(u)){for(var D=0;D<u.length;D++)Jl(a,u[D],d,m,A);return null}return d=Zl(d),a&&a[xi]?a.K(u,d,h(m)?!!m.capture:!1,A):Cg(a,u,d,!1,m,A)}function Cg(a,u,d,m,A,D){if(!u)throw Error("Invalid event type");var j=h(A)?!!A.capture:!!A,oe=bo(a);if(oe||(a[wo]=oe=new Ai(a)),d=oe.add(u,d,m,j,D),d.proxy)return d;if(m=Pg(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)xg||(A=j),A===void 0&&(A=!1),a.addEventListener(u.toString(),m,A);else if(a.attachEvent)a.attachEvent(Xl(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Pg(){function a(d){return u.call(a.src,a.listener,d)}const u=kg;return a}function Yl(a,u,d,m,A){if(Array.isArray(u))for(var D=0;D<u.length;D++)Yl(a,u[D],d,m,A);else m=h(m)?!!m.capture:!!m,d=Zl(d),a&&a[xi]?(a=a.i,u=String(u).toString(),u in a.g&&(D=a.g[u],d=vo(D,d,m,A),-1<d&&(Si(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[u],a.h--)))):a&&(a=bo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=vo(u,d,m,A)),(d=-1<a?u[a]:null)&&Eo(d))}function Eo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[xi])_o(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(Xl(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=bo(u))?(_o(d,a),d.h==0&&(d.src=null,u[wo]=null)):Si(a)}}}function Xl(a){return a in Io?Io[a]:Io[a]="on"+a}function kg(a,u){if(a.da)a=!0;else{u=new gr(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&Eo(a),a=d.call(m,u)}return a}function bo(a){return a=a[wo],a instanceof Ai?a:null}var To="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zl(a){return typeof a=="function"?a:(a[To]||(a[To]=function(u){return a.handleEvent(u)}),a[To])}function Se(){wt.call(this),this.i=new Ai(this),this.M=this,this.F=null}P(Se,wt),Se.prototype[xi]=!0,Se.prototype.removeEventListener=function(a,u,d,m){Yl(this,a,u,d,m)};function De(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new xe(u,a);else if(u instanceof xe)u.target=u.target||a;else{var A=u;u=new xe(m,a),v(u,A)}if(A=!0,d)for(var D=d.length-1;0<=D;D--){var j=u.g=d[D];A=Ri(j,m,!0,u)&&A}if(j=u.g=a,A=Ri(j,m,!0,u)&&A,A=Ri(j,m,!1,u)&&A,d)for(D=0;D<d.length;D++)j=u.g=d[D],A=Ri(j,m,!1,u)&&A}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Si(d[m]);delete a.g[u],a.h--}}this.F=null},Se.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},Se.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Ri(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,D=0;D<u.length;++D){var j=u[D];if(j&&!j.da&&j.capture==d){var oe=j.listener,Ee=j.ha||j.src;j.fa&&_o(a.i,j),A=oe.call(Ee,m)!==!1&&A}}return A&&!m.defaultPrevented}function ec(a,u,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function tc(a){a.g=ec(()=>{a.g=null,a.i&&(a.i=!1,tc(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Dg extends wt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:tc(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(a){wt.call(this),this.h=a,this.g={}}P(mr,wt);var nc=[];function rc(a){B(a.g,function(u,d){this.g.hasOwnProperty(d)&&Eo(u)},a),a.g={}}mr.prototype.N=function(){mr.aa.N.call(this),rc(this)},mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xo=l.JSON.stringify,Vg=l.JSON.parse,Ng=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function So(){}So.prototype.h=null;function ic(a){return a.h||(a.h=a.i())}function sc(){}var yr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ao(){xe.call(this,"d")}P(Ao,xe);function Ro(){xe.call(this,"c")}P(Ro,xe);var Wt={},oc=null;function Ci(){return oc=oc||new Se}Wt.La="serverreachability";function ac(a){xe.call(this,Wt.La,a)}P(ac,xe);function _r(a){const u=Ci();De(u,new ac(u))}Wt.STAT_EVENT="statevent";function lc(a,u){xe.call(this,Wt.STAT_EVENT,a),this.stat=u}P(lc,xe);function Ve(a){const u=Ci();De(u,new lc(u,a))}Wt.Ma="timingevent";function cc(a,u){xe.call(this,Wt.Ma,a),this.size=u}P(cc,xe);function vr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function wr(){this.g=!0}wr.prototype.xa=function(){this.g=!1};function Og(a,u,d,m,A,D){a.info(function(){if(a.g)if(D)for(var j="",oe=D.split("&"),Ee=0;Ee<oe.length;Ee++){var te=oe[Ee].split("=");if(1<te.length){var Ae=te[0];te=te[1];var Re=Ae.split("_");j=2<=Re.length&&Re[1]=="type"?j+(Ae+"="+te+"&"):j+(Ae+"=redacted&")}}else j=null;else j=D;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+u+`
`+d+`
`+j})}function Mg(a,u,d,m,A,D,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+u+`
`+d+`
`+D+" "+j})}function xn(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Fg(a,d)+(m?" "+m:"")})}function Lg(a,u){a.info(function(){return"TIMEOUT: "+u})}wr.prototype.info=function(){};function Fg(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var D=A[0];if(D!="noop"&&D!="stop"&&D!="close")for(var j=1;j<A.length;j++)A[j]=""}}}}return xo(d)}catch{return u}}var Pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Co;function ki(){}P(ki,So),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},Co=new ki;function It(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new mr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hc}function hc(){this.i=null,this.g="",this.h=!1}var dc={},Po={};function ko(a,u,d){a.L=1,a.v=Oi(st(u)),a.m=d,a.P=!0,fc(a,null)}function fc(a,u){a.F=Date.now(),Di(a),a.A=st(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Ac(d.i,"t",m),a.C=0,d=a.j.J,a.h=new hc,a.g=qc(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Dg(y(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(nc[0]=A.toString()),A=nc);for(var D=0;D<A.length;D++){var j=Jl(d,A[D],m||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),_r(),Og(a.i,a.u,a.A,a.l,a.R,a.m)}It.prototype.ca=function(a){a=a.target;const u=this.M;u&&ot(a)==3?u.j():this.Y(a)},It.prototype.Y=function(a){try{if(a==this.g)e:{const Re=ot(this.g);var u=this.g.Ba();const Rn=this.g.Z();if(!(3>Re)&&(Re!=3||this.g&&(this.h.h||this.g.oa()||Nc(this.g)))){this.J||Re!=4||u==7||(u==8||0>=Rn?_r(3):_r(2)),Do(this);var d=this.g.Z();this.X=d;t:if(pc(this)){var m=Nc(this.g);a="";var A=m.length,D=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),Ir(this);var j="";break t}this.h.i=new l.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(D&&u==A-1)});m.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,Mg(this.i,this.u,this.A,this.l,this.R,Re,d),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Ee=this.g;if((oe=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(oe)){var te=oe;break t}}te=null}if(d=te)xn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vo(this,d);else{this.o=!1,this.s=3,Ve(12),Ht(this),Ir(this);break e}}if(this.P){d=!0;let He;for(;!this.J&&this.C<j.length;)if(He=jg(this,j),He==Po){Re==4&&(this.s=4,Ve(14),d=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(He==dc){this.s=4,Ve(15),xn(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else xn(this.i,this.l,He,null),Vo(this,He);if(pc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||j.length!=0||this.h.h||(this.s=1,Ve(16),d=!1),this.o=this.o&&d,!d)xn(this.i,this.l,j,"[Invalid Chunked Response]"),Ht(this),Ir(this);else if(0<j.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),jo(Ae),Ae.M=!0,Ve(11))}}else xn(this.i,this.l,j,null),Vo(this,j);Re==4&&Ht(this),this.o&&!this.J&&(Re==4?Bc(this.j,this):(this.o=!1,Di(this)))}else nm(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),Ht(this),Ir(this)}}}catch{}finally{}};function pc(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function jg(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Po:(d=Number(u.substring(d,m)),isNaN(d)?dc:(m+=1,m+d>u.length?Po:(u=u.slice(m,m+d),a.C=m+d,u)))}It.prototype.cancel=function(){this.J=!0,Ht(this)};function Di(a){a.S=Date.now()+a.I,gc(a,a.I)}function gc(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vr(y(a.ba,a),u)}function Do(a){a.B&&(l.clearTimeout(a.B),a.B=null)}It.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Lg(this.i,this.A),this.L!=2&&(_r(),Ve(17)),Ht(this),this.s=2,Ir(this)):gc(this,this.S-a)};function Ir(a){a.j.G==0||a.J||Bc(a.j,a)}function Ht(a){Do(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,rc(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Vo(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||No(d.h,a))){if(!a.K&&No(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Bi(d),ji(d);else break e;Fo(d),Ve(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=vr(y(d.Za,d),6e3));if(1>=_c(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Jt(d,11)}else if((a.K||d.g==a)&&Bi(d),!F(u))for(A=d.Da.g.parse(u),u=0;u<A.length;u++){let te=A[u];if(d.T=te[0],te=te[1],d.G==2)if(te[0]=="c"){d.K=te[1],d.ia=te[2];const Ae=te[3];Ae!=null&&(d.la=Ae,d.j.info("VER="+d.la));const Re=te[4];Re!=null&&(d.Aa=Re,d.j.info("SVER="+d.Aa));const Rn=te[5];Rn!=null&&typeof Rn=="number"&&0<Rn&&(m=1.5*Rn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const He=a.g;if(He){const zi=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var D=m.h;D.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Oo(D,D.h),D.h=null))}if(m.D){const Uo=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(m.ya=Uo,le(m.I,m.D,Uo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var j=a;if(m.qa=Gc(m,m.J?m.ia:null,m.W),j.K){vc(m.h,j);var oe=j,Ee=m.L;Ee&&(oe.I=Ee),oe.B&&(Do(oe),Di(oe)),m.g=j}else jc(m);0<d.i.length&&Ui(d)}else te[0]!="stop"&&te[0]!="close"||Jt(d,7);else d.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?Jt(d,7):Lo(d):te[0]!="noop"&&d.l&&d.l.ta(te),d.v=0)}}_r(4)}catch{}}var Ug=class{constructor(a,u){this.g=a,this.map=u}};function mc(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function _c(a){return a.h?1:a.g?a.g.size:0}function No(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Oo(a,u){a.g?a.g.add(u):a.h=u}function vc(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}mc.prototype.cancel=function(){if(this.i=wc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wc(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return k(a.i)}function Bg(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function $g(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Ic(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=$g(a),m=Bg(a),A=m.length,D=0;D<A;D++)u.call(void 0,m[D],d&&d[D],a)}var Ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zg(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),A=null;if(0<=m){var D=a[d].substring(0,m);A=a[d].substring(m+1)}else D=a[d];u(D,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Qt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Qt){this.h=a.h,Vi(this,a.j),this.o=a.o,this.g=a.g,Ni(this,a.s),this.l=a.l;var u=a.i,d=new Tr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),bc(this,d),this.m=a.m}else a&&(u=String(a).match(Ec))?(this.h=!1,Vi(this,u[1]||"",!0),this.o=Er(u[2]||""),this.g=Er(u[3]||"",!0),Ni(this,u[4]),this.l=Er(u[5]||"",!0),bc(this,u[6]||"",!0),this.m=Er(u[7]||"")):(this.h=!1,this.i=new Tr(null,this.h))}Qt.prototype.toString=function(){var a=[],u=this.j;u&&a.push(br(u,Tc,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(br(u,Tc,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(br(d,d.charAt(0)=="/"?Kg:qg,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",br(d,Hg)),a.join("")};function st(a){return new Qt(a)}function Vi(a,u,d){a.j=d?Er(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ni(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function bc(a,u,d){u instanceof Tr?(a.i=u,Qg(a.i,a.h)):(d||(u=br(u,Wg)),a.i=new Tr(u,a.h))}function le(a,u,d){a.i.set(u,d)}function Oi(a){return le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Er(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function br(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Gg),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Gg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tc=/[#\/\?@]/g,qg=/[#\?:]/g,Kg=/[#\?]/g,Wg=/[#\?@]/g,Hg=/#/g;function Tr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Et(a){a.g||(a.g=new Map,a.h=0,a.i&&zg(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Tr.prototype,r.add=function(a,u){Et(this),this.i=null,a=Sn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function xc(a,u){Et(a),u=Sn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Sc(a,u){return Et(a),u=Sn(a,u),a.g.has(u)}r.forEach=function(a,u){Et(this),this.g.forEach(function(d,m){d.forEach(function(A){a.call(u,A,m,this)},this)},this)},r.na=function(){Et(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const A=a[m];for(let D=0;D<A.length;D++)d.push(u[m])}return d},r.V=function(a){Et(this);let u=[];if(typeof a=="string")Sc(this,a)&&(u=u.concat(this.g.get(Sn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return Et(this),this.i=null,a=Sn(this,a),Sc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Ac(a,u,d){xc(a,u),0<d.length&&(a.i=null,a.g.set(Sn(a,u),k(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const D=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var A=D;j[m]!==""&&(A+="="+encodeURIComponent(String(j[m]))),a.push(A)}}return this.i=a.join("&")};function Sn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Qg(a,u){u&&!a.j&&(Et(a),a.i=null,a.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(xc(this,m),Ac(this,A,d))},a)),a.j=u}function Jg(a,u){const d=new wr;if(l.Image){const m=new Image;m.onload=x(bt,d,"TestLoadImage: loaded",!0,u,m),m.onerror=x(bt,d,"TestLoadImage: error",!1,u,m),m.onabort=x(bt,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=x(bt,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Yg(a,u){const d=new wr,m=new AbortController,A=setTimeout(()=>{m.abort(),bt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(A),D.ok?bt(d,"TestPingServer: ok",!0,u):bt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),bt(d,"TestPingServer: error",!1,u)})}function bt(a,u,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function Xg(){this.g=new Ng}function Zg(a,u,d){const m=d||"";try{Ic(a,function(A,D){let j=A;h(A)&&(j=xo(A)),u.push(m+D+"="+encodeURIComponent(j))})}catch(A){throw u.push(m+"type="+encodeURIComponent("_badmap")),A}}function Mi(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Mi,So),Mi.prototype.g=function(){return new Li(this.l,this.j)},Mi.prototype.i=function(a){return function(){return a}}({});function Li(a,u){Se.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Li,Se),r=Li.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Sr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Sr(this)),this.g&&(this.readyState=3,Sr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rc(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rc(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?xr(this):Sr(this),this.readyState==3&&Rc(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,xr(this))},r.Qa=function(a){this.g&&(this.response=a,xr(this))},r.ga=function(){this.g&&xr(this)};function xr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Sr(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Sr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cc(a){let u="";return B(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Mo(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Cc(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):le(a,u,d))}function de(a){Se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(de,Se);var em=/^https?$/i,tm=["POST","PUT"];r=de.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Co.g(),this.v=this.o?ic(this.o):ic(Co),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(D){Pc(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),A=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(tm,u,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,j]of d)this.g.setRequestHeader(D,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vc(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Pc(this,D)}};function Pc(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,kc(a),Fi(a)}function kc(a){a.A||(a.A=!0,De(a,"complete"),De(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,De(this,"complete"),De(this,"abort"),Fi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fi(this,!0)),de.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Dc(this):this.bb())},r.bb=function(){Dc(this)};function Dc(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ot(a)!=4||a.Z()!=2)){if(a.u&&ot(a)==4)ec(a.Ea,0,a);else if(De(a,"readystatechange"),ot(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=j===0){var A=String(a.D).match(Ec)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),m=!em.test(A?A.toLowerCase():"")}d=m}if(d)De(a,"complete"),De(a,"success");else{a.m=6;try{var D=2<ot(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",kc(a)}}finally{Fi(a)}}}}function Fi(a,u){if(a.g){Vc(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||De(a,"ready");try{d.onreadystatechange=m}catch{}}}function Vc(a){a.I&&(l.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function ot(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Vg(u)}};function Nc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function nm(a){const u={};a=(a.g&&2<=ot(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(F(a[m]))continue;var d=E(a[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=u[A]||[];u[A]=D,D.push(d)}b(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Oc(a){this.Aa=0,this.i=[],this.j=new wr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ar("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ar("baseRetryDelayMs",5e3,a),this.cb=Ar("retryDelaySeedMs",1e4,a),this.Wa=Ar("forwardChannelMaxRetries",2,a),this.wa=Ar("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new mc(a&&a.concurrentRequestLimit),this.Da=new Xg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Oc.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,m){Ve(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Gc(this,null,this.W),Ui(this)};function Lo(a){if(Mc(a),a.G==3){var u=a.U++,d=st(a.I);if(le(d,"SID",a.K),le(d,"RID",u),le(d,"TYPE","terminate"),Rr(a,d),u=new It(a,a.j,u),u.L=2,u.v=Oi(st(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=qc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Di(u)}zc(a)}function ji(a){a.g&&(jo(a),a.g.cancel(),a.g=null)}function Mc(a){ji(a),a.u&&(l.clearTimeout(a.u),a.u=null),Bi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ui(a){if(!yc(a.h)&&!a.s){a.s=!0;var u=a.Ga;fr||Ql(),pr||(fr(),pr=!0),yo.add(u,a),a.B=0}}function rm(a,u){return _c(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vr(y(a.Ga,a,u),$c(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new It(this,this.j,a);let D=this.o;if(this.S&&(D?(D=w(D),v(D,this.S)):D=this.S),this.m!==null||this.O||(A.H=D,D=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Fc(this,A,u),d=st(this.I),le(d,"RID",a),le(d,"CVER",22),this.D&&le(d,"X-HTTP-Session-Id",this.D),Rr(this,d),D&&(this.O?u="headers="+encodeURIComponent(String(Cc(D)))+"&"+u:this.m&&Mo(d,this.m,D)),Oo(this.h,A),this.Ua&&le(d,"TYPE","init"),this.P?(le(d,"$req",u),le(d,"SID","null"),A.T=!0,ko(A,d,null)):ko(A,d,u),this.G=2}}else this.G==3&&(a?Lc(this,a):this.i.length==0||yc(this.h)||Lc(this))};function Lc(a,u){var d;u?d=u.l:d=a.U++;const m=st(a.I);le(m,"SID",a.K),le(m,"RID",d),le(m,"AID",a.T),Rr(a,m),a.m&&a.o&&Mo(m,a.m,a.o),d=new It(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Fc(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Oo(a.h,d),ko(d,m,u)}function Rr(a,u){a.H&&B(a.H,function(d,m){le(u,m,d)}),a.l&&Ic({},function(d,m){le(u,m,d)})}function Fc(a,u,d){d=Math.min(a.i.length,d);var m=a.l?y(a.l.Na,a.l,a):null;e:{var A=a.i;let D=-1;for(;;){const j=["count="+d];D==-1?0<d?(D=A[0].g,j.push("ofs="+D)):D=0:j.push("ofs="+D);let oe=!0;for(let Ee=0;Ee<d;Ee++){let te=A[Ee].g;const Ae=A[Ee].map;if(te-=D,0>te)D=Math.max(0,A[Ee].g-100),oe=!1;else try{Zg(Ae,j,"req"+te+"_")}catch{m&&m(Ae)}}if(oe){m=j.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function jc(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;fr||Ql(),pr||(fr(),pr=!0),yo.add(u,a),a.v=0}}function Fo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vr(y(a.Fa,a),$c(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Uc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vr(y(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),ji(this),Uc(this))};function jo(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Uc(a){a.g=new It(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=st(a.qa);le(u,"RID","rpc"),le(u,"SID",a.K),le(u,"AID",a.T),le(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&le(u,"TO",a.ja),le(u,"TYPE","xmlhttp"),Rr(a,u),a.m&&a.o&&Mo(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Oi(st(u)),d.m=null,d.P=!0,fc(d,a)}r.Za=function(){this.C!=null&&(this.C=null,ji(this),Fo(this),Ve(19))};function Bi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Bc(a,u){var d=null;if(a.g==u){Bi(a),jo(a),a.g=null;var m=2}else if(No(a.h,u))d=u.D,vc(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;m=Ci(),De(m,new cc(m,d)),Ui(a)}else jc(a);else if(A=u.s,A==3||A==0&&0<u.X||!(m==1&&rm(a,u)||m==2&&Fo(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),A){case 1:Jt(a,5);break;case 4:Jt(a,10);break;case 3:Jt(a,6);break;default:Jt(a,2)}}}function $c(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Jt(a,u){if(a.j.info("Error code "+u),u==2){var d=y(a.fb,a),m=a.Xa;const A=!m;m=new Qt(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Vi(m,"https"),Oi(m),A?Jg(m.toString(),d):Yg(m.toString(),d)}else Ve(2);a.G=0,a.l&&a.l.sa(u),zc(a),Mc(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function zc(a){if(a.G=0,a.ka=[],a.l){const u=wc(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ka,u),C(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Gc(a,u,d){var m=d instanceof Qt?st(d):new Qt(d);if(m.g!="")u&&(m.g=u+"."+m.g),Ni(m,m.s);else{var A=l.location;m=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var D=new Qt(null);m&&Vi(D,m),u&&(D.g=u),A&&Ni(D,A),d&&(D.l=d),m=D}return d=a.D,u=a.ya,d&&u&&le(m,d,u),le(m,"VER",a.la),Rr(a,m),m}function qc(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new de(new Mi({eb:d})):new de(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kc(){}r=Kc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function $i(){}$i.prototype.g=function(a,u){return new Ge(a,u)};function Ge(a,u){Se.call(this),this.g=new Oc(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new An(this)}P(Ge,Se),Ge.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ge.prototype.close=function(){Lo(this.g)},Ge.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=xo(a),a=d);u.i.push(new Ug(u.Ya++,a)),u.G==3&&Ui(u)},Ge.prototype.N=function(){this.g.l=null,delete this.j,Lo(this.g),delete this.g,Ge.aa.N.call(this)};function Wc(a){Ao.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}P(Wc,Ao);function Hc(){Ro.call(this),this.status=1}P(Hc,Ro);function An(a){this.g=a}P(An,Kc),An.prototype.ua=function(){De(this.g,"a")},An.prototype.ta=function(a){De(this.g,new Wc(a))},An.prototype.sa=function(a){De(this.g,new Hc)},An.prototype.ra=function(){De(this.g,"b")},$i.prototype.createWebChannel=$i.prototype.g,Ge.prototype.send=Ge.prototype.o,Ge.prototype.open=Ge.prototype.m,Ge.prototype.close=Ge.prototype.close,Vd=function(){return new $i},Dd=function(){return Ci()},kd=Wt,pa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pi.NO_ERROR=0,Pi.TIMEOUT=8,Pi.HTTP_ERROR=6,ts=Pi,uc.COMPLETE="complete",Pd=uc,sc.EventType=yr,yr.OPEN="a",yr.CLOSE="b",yr.ERROR="c",yr.MESSAGE="d",Se.prototype.listen=Se.prototype.K,Mr=sc,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha,Cd=de}).apply(typeof Gi<"u"?Gi:typeof self<"u"?self:typeof window<"u"?window:{});const gu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ar="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new $a("@firebase/firestore");function On(){return fn.logLevel}function L(r,...e){if(fn.logLevel<=X.DEBUG){const t=e.map(qa);fn.debug(`Firestore (${ar}): ${r}`,...t)}}function pe(r,...e){if(fn.logLevel<=X.ERROR){const t=e.map(qa);fn.error(`Firestore (${ar}): ${r}`,...t)}}function Xr(r,...e){if(fn.logLevel<=X.WARN){const t=e.map(qa);fn.warn(`Firestore (${ar}): ${r}`,...t)}}function qa(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(r="Unexpected state"){const e=`FIRESTORE (${ar}) INTERNAL ASSERTION FAILED: `+r;throw pe(e),new Error(e)}function W(r,e){r||q()}function K(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pe.UNAUTHENTICATED))}shutdown(){}}class V_{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let s=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string"),new k_(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new Pe(e)}}class N_{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class O_{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new N_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class M_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){W(this.o===void 0);const n=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string"),this.R=t.token,new M_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=F_(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function J(r,e){return r<e?-1:r>e?1:0}function Kn(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function Od(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new U(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new he(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new he(0,0))}static max(){return new H(new he(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,n){t===void 0?t=0:t>e.length&&q(),n===void 0?n=e.length-t:n>e.length-t&&q(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Zr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zr?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ne extends Zr{construct(e,t,n){return new ne(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new U(N.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const j_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ue extends Zr{construct(e,t,n){return new ue(e,t,n)}static isValidIdentifier(e){return j_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ue(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new U(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new U(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(n+=l,i++):(s(),i++)}if(s(),o)throw new U(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ue(t)}static emptyPath(){return new ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ne.fromString(e))}static fromName(e){return new $(ne.fromString(e).popFirst(5))}static empty(){return new $(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ne(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function ga(r){return r.fields.find(e=>e.kind===2)}function Zt(r){return r.fields.filter(e=>e.kind!==2)}_s.UNKNOWN_ID=-1;class ns{constructor(e,t){this.fieldPath=e,this.kind=t}}class ei{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ei(0,We.min())}}function Md(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=H.fromTimestamp(n===1e9?new he(t+1,0):new he(t,n));return new We(i,$.empty(),e)}function Ld(r){return new We(r.readTime,r.key,-1)}class We{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new We(H.min(),$.empty(),-1)}static max(){return new We(H.max(),$.empty(),-1)}}function Ka(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(r.documentKey,e.documentKey),t!==0?t:J(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(r){if(r.code!==N.FAILED_PRECONDITION||r.message!==Fd)throw r;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,n)=>{t(e)})}static reject(e){return new R((t,n)=>{n(e)})}static waitFor(e){return new R((t,n)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},c=>n(c))}),o=!0,s===i&&t()})}static or(e){let t=R.resolve(!1);for(const n of e)t=t.next(i=>i?R.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new R((n,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(f=>{o[h]=f,++l,l===s&&n(o)},f=>i(f))}})}static doWhile(e,t){return new R((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new zr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=Wa(n.target.error);this.V.reject(new zr(e,i))}}static open(e,t,n,i){try{return new qs(t,e.transaction(i,n))}catch(s){throw new zr(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(L("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new B_(t)}}class Mt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,Mt.S(ve())===12.2&&pe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return L("SimpleDb","Removing database:",e),en(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Id())return!1;if(Mt.v())return!0;const e=ve(),t=Mt.S(e),n=0<t&&t<10,i=Ud(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(L("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{n(new zr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new U(N.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new U(N.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new zr(e,o))},i.onupgradeneeded=s=>{L("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{L("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const l=qs.open(this.db,e,s?"readonly":"readwrite",n),c=i(l).next(h=>(l.g(),h)).catch(h=>(l.abort(h),R.reject(h))).toPromise();return c.catch(()=>{}),await l.m,c}catch(l){const c=l,h=c.name!=="FirebaseError"&&o<3;if(L("SimpleDb","Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Ud(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class U_{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return en(this.B.delete())}}class zr extends U{constructor(e,t){super(N.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Gt(r){return r.name==="IndexedDbTransactionError"}class B_{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(L("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(L("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),en(n)}add(e){return L("SimpleDb","ADD",this.store.name,e,e),en(this.store.add(e))}get(e){return en(this.store.get(e)).next(t=>(t===void 0&&(t=null),L("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return L("SimpleDb","DELETE",this.store.name,e),en(this.store.delete(e))}count(){return L("SimpleDb","COUNT",this.store.name),en(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new R((o,l)=>{s.onerror=c=>{l(c.target.error)},s.onsuccess=c=>{o(c.target.result)}})}{const s=this.cursor(n),o=[];return this.W(s,(l,c)=>{o.push(c)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new R((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}})}j(e,t){L("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,(s,o,l)=>l.delete())}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new R((n,i)=>{t.onerror=s=>{const o=Wa(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():n()}):n()}})}W(e,t){const n=[];return new R((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void i();const c=new U_(l),h=t(l.primaryKey,l.value,c);if(h instanceof R){const f=h.catch(p=>(c.done(),R.reject(p)));n.push(f)}c.isDone?i():c.K===null?l.continue():l.continue(c.K)}}).next(()=>R.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function en(r){return new R((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=Wa(n.target.error);t(i)}})}let mu=!1;function Wa(r){const e=Mt.S(ve());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mu||(mu=!0,setTimeout(()=>{throw n},0)),n}}return r}class $_{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){L("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{L("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Gt(t)?L("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await zt(t)}await this.X(6e4)})}}class z_{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let i=t,s=!0;return R.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return L("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(l=>{i-=l,n.add(o)});s=!1})).next(()=>t-i)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(l=>(L("IndexBackfiller",`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((i,s)=>{const o=Ld(s);Ka(o,n)>0&&(n=o)}),new We(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Be.oe=-1;function Ks(r){return r==null}function ti(r){return r===0&&1/r==-1/0}function Bd(r){return typeof r=="number"&&Number.isInteger(r)&&!ti(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=yu(e)),e=G_(r.get(t),e);return yu(e)}function G_(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function yu(r){return r+""}function Ze(r){const e=r.length;if(W(e>=2),e===2)return W(r.charAt(0)===""&&r.charAt(1)===""),ne.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const o=r.indexOf("",s);switch((o<0||o>t)&&q(),r.charAt(o+1)){case"":const l=r.substring(s,o);let c;i.length===0?c=l:(i+=l,c=i,i=""),n.push(c);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:q()}s=o+2}return new ne(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(r,e){return[r,Me(e)]}function $d(r,e,t){return[r,Me(e),t]}const q_={},K_=["prefixPath","collectionGroup","readTime","documentId"],W_=["prefixPath","collectionGroup","documentId"],H_=["collectionGroup","readTime","prefixPath","documentId"],Q_=["canonicalId","targetId"],J_=["targetId","path"],Y_=["path","targetId"],X_=["collectionId","parent"],Z_=["indexId","uid"],ev=["uid","sequenceNumber"],tv=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],nv=["indexId","uid","orderedDocumentKey"],rv=["userId","collectionPath","documentId"],iv=["userId","collectionPath","largestBatchId"],sv=["userId","collectionGroup","largestBatchId"],zd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ov=[...zd,"documentOverlays"],Gd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qd=Gd,Ha=[...qd,"indexConfiguration","indexState","indexEntries"],av=Ha,lv=[...Ha,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends jd{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function we(r,e){const t=K(r);return Mt.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function In(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Kd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qi(this.root,e,this.comparator,!0)}}class qi{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??be.RED,this.left=i??be.EMPTY,this.right=s??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new be(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,n,i,s){return this}insert(e,t,n){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wu(this.data.getIterator())}getIteratorFrom(e){return new wu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ie(this.comparator);return t.data=e,t}}class wu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Cn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.fields=e,e.sort(ue.comparator)}static empty(){return new $e([])}unionWith(e){let t=new ie(ue.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new $e(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Wd("Invalid base64 string: "+s):s}}(e);return new me(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const cv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gt(r){if(W(!!r),typeof r=="string"){let e=0;const t=cv.exec(r);if(W(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ce(r.seconds),nanos:ce(r.nanos)}}function ce(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ut(r){return typeof r=="string"?me.fromBase64String(r):me.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ja(r){const e=r.mapValue.fields.__previous_value__;return Qa(e)?Ja(e):e}function ni(r){const e=gt(r.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,t,n,i,s,o,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class pn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new pn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},is={nullValue:"NULL_VALUE"};function gn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Qa(r)?4:Hd(r)?9007199254740991:Ws(r)?10:11:q()}function rt(r,e){if(r===e)return!0;const t=gn(r);if(t!==gn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ni(r).isEqual(ni(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=gt(i.timestampValue),l=gt(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return Ut(i.bytesValue).isEqual(Ut(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return ce(i.geoPointValue.latitude)===ce(s.geoPointValue.latitude)&&ce(i.geoPointValue.longitude)===ce(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ce(i.integerValue)===ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ce(i.doubleValue),l=ce(s.doubleValue);return o===l?ti(o)===ti(l):isNaN(o)&&isNaN(l)}return!1}(r,e);case 9:return Kn(r.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(vu(o)!==vu(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!rt(o[c],l[c])))return!1;return!0}(r,e);default:return q()}}function ri(r,e){return(r.values||[]).find(t=>rt(t,e))!==void 0}function Bt(r,e){if(r===e)return 0;const t=gn(r),n=gn(e);if(t!==n)return J(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(r.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ce(s.integerValue||s.doubleValue),c=ce(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(r,e);case 3:return Iu(r.timestampValue,e.timestampValue);case 4:return Iu(ni(r),ni(e));case 5:return J(r.stringValue,e.stringValue);case 6:return function(s,o){const l=Ut(s),c=Ut(o);return l.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=J(l[h],c[h]);if(f!==0)return f}return J(l.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,o){const l=J(ce(s.latitude),ce(o.latitude));return l!==0?l:J(ce(s.longitude),ce(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Eu(r.arrayValue,e.arrayValue);case 10:return function(s,o){var l,c,h,f;const p=s.fields||{},y=o.fields||{},x=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(c=y.value)===null||c===void 0?void 0:c.arrayValue,k=J(((h=x==null?void 0:x.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Eu(x,P)}(r.mapValue,e.mapValue);case 11:return function(s,o){if(s===Dt.mapValue&&o===Dt.mapValue)return 0;if(s===Dt.mapValue)return 1;if(o===Dt.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const y=J(c[p],f[p]);if(y!==0)return y;const x=Bt(l[c[p]],h[f[p]]);if(x!==0)return x}return J(c.length,f.length)}(r.mapValue,e.mapValue);default:throw q()}}function Iu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return J(r,e);const t=gt(r),n=gt(e),i=J(t.seconds,n.seconds);return i!==0?i:J(t.nanos,n.nanos)}function Eu(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=Bt(t[i],n[i]);if(s)return s}return J(t.length,n.length)}function Wn(r){return ya(r)}function ya(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=gt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ut(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return $.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=ya(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${ya(t.fields[o])}`;return i+"}"}(r.mapValue):q()}function ii(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function _a(r){return!!r&&"integerValue"in r}function si(r){return!!r&&"arrayValue"in r}function bu(r){return!!r&&"nullValue"in r}function Tu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ss(r){return!!r&&"mapValue"in r}function Ws(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Gr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return In(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Gr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Hd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Qd={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function hv(r){return"nullValue"in r?is:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?ii(pn.empty(),$.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Ws(r)?Qd:{mapValue:{}}:q()}function dv(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?ii(pn.empty(),$.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Qd:"mapValue"in r?Ws(r)?{mapValue:{}}:Dt:q()}function xu(r,e){const t=Bt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Su(r,e){const t=Bt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gr(t)}setAll(e){let t=ue.emptyPath(),n={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,i),n={},i=[],t=l.popLast()}o?n[l.lastSegment()]=Gr(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ss(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){In(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new ke(Gr(this.value))}}function Jd(r){const e=[];return In(r.fields,(t,n)=>{const i=new ue([t]);if(ss(n)){const s=Jd(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $e(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t,n,i,s,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new fe(e,0,H.min(),H.min(),H.min(),ke.empty(),0)}static newFoundDocument(e,t,n,i){return new fe(e,1,t,H.min(),n,i,0)}static newNoDocument(e,t){return new fe(e,2,t,H.min(),H.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new fe(e,3,t,H.min(),H.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.position=e,this.inclusive=t}}function Au(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=$.comparator($.fromName(o.referenceValue),t.key):n=Bt(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ru(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!rt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t="asc"){this.field=e,this.dir=t}}function fv(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{}class Z extends Yd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new pv(e,t,n):t==="array-contains"?new yv(e,n):t==="in"?new rf(e,n):t==="not-in"?new _v(e,n):t==="array-contains-any"?new vv(e,n):new Z(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new gv(e,n):new mv(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Bt(t,this.value)):t!==null&&gn(this.value)===gn(t)&&this.matchesComparison(Bt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends Yd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new re(e,t)}matches(e){return Qn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Qn(r){return r.op==="and"}function va(r){return r.op==="or"}function Ya(r){return Xd(r)&&Qn(r)}function Xd(r){for(const e of r.filters)if(e instanceof re)return!1;return!0}function wa(r){if(r instanceof Z)return r.field.canonicalString()+r.op.toString()+Wn(r.value);if(Ya(r))return r.filters.map(e=>wa(e)).join(",");{const e=r.filters.map(t=>wa(t)).join(",");return`${r.op}(${e})`}}function Zd(r,e){return r instanceof Z?function(n,i){return i instanceof Z&&n.op===i.op&&n.field.isEqual(i.field)&&rt(n.value,i.value)}(r,e):r instanceof re?function(n,i){return i instanceof re&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,l)=>s&&Zd(o,i.filters[l]),!0):!1}(r,e):void q()}function ef(r,e){const t=r.filters.concat(e);return re.create(t,r.op)}function tf(r){return r instanceof Z?function(t){return`${t.field.canonicalString()} ${t.op} ${Wn(t.value)}`}(r):r instanceof re?function(t){return t.op.toString()+" {"+t.getFilters().map(tf).join(" ,")+"}"}(r):"Filter"}class pv extends Z{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class gv extends Z{constructor(e,t){super(e,"in",t),this.keys=nf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class mv extends Z{constructor(e,t){super(e,"not-in",t),this.keys=nf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nf(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>$.fromName(n.referenceValue))}class yv extends Z{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return si(t)&&ri(t.arrayValue,this.value)}}class rf extends Z{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ri(this.value.arrayValue,t)}}class _v extends Z{constructor(e,t){super(e,"not-in",t)}matches(e){if(ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ri(this.value.arrayValue,t)}}class vv extends Z{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!si(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ri(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t=null,n=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Ia(r,e=null,t=[],n=[],i=null,s=null,o=null){return new wv(r,e,t,n,i,s,o)}function mn(r){const e=K(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>wa(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Ks(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Wn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Wn(n)).join(",")),e.ue=t}return e.ue}function pi(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!fv(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Zd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ru(r.startAt,e.startAt)&&Ru(r.endAt,e.endAt)}function ws(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Is(r,e){return r.filters.filter(t=>t instanceof Z&&t.field.isEqual(e))}function Cu(r,e,t){let n=is,i=!0;for(const s of Is(r,e)){let o=is,l=!0;switch(s.op){case"<":case"<=":o=hv(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,l=!1;break;case"!=":case"not-in":o=is}xu({value:n,inclusive:i},{value:o,inclusive:l})<0&&(n=o,i=l)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];xu({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function Pu(r,e,t){let n=Dt,i=!0;for(const s of Is(r,e)){let o=Dt,l=!0;switch(s.op){case">=":case">":o=dv(s.value),l=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,l=!1;break;case"!=":case"not-in":o=Dt}Su({value:n,inclusive:i},{value:o,inclusive:l})>0&&(n=o,i=l)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];Su({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t=null,n=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sf(r,e,t,n,i,s,o,l){return new gi(r,e,t,n,i,s,o,l)}function Hs(r){return new gi(r)}function ku(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function of(r){return r.collectionGroup!==null}function qr(r){const e=K(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ie(ue.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new vs(s,n))}),t.has(ue.keyField().canonicalString())||e.ce.push(new vs(ue.keyField(),n))}return e.ce}function Ke(r){const e=K(r);return e.le||(e.le=Iv(e,qr(r))),e.le}function Iv(r,e){if(r.limitType==="F")return Ia(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new vs(i.field,s)});const t=r.endAt?new Hn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Hn(r.startAt.position,r.startAt.inclusive):null;return Ia(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Ea(r,e){const t=r.filters.concat([e]);return new gi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Es(r,e,t){return new gi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Qs(r,e){return pi(Ke(r),Ke(e))&&r.limitType===e.limitType}function af(r){return`${mn(Ke(r))}|lt:${r.limitType}`}function Mn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>tf(i)).join(", ")}]`),Ks(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Wn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Wn(i)).join(",")),`Target(${n})`}(Ke(r))}; limitType=${r.limitType})`}function mi(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):$.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of qr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(o,l,c){const h=Au(o,l,c);return o.inclusive?h<=0:h<0}(n.startAt,qr(n),i)||n.endAt&&!function(o,l,c){const h=Au(o,l,c);return o.inclusive?h>=0:h>0}(n.endAt,qr(n),i))}(r,e)}function lf(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function cf(r){return(e,t)=>{let n=!1;for(const i of qr(r)){const s=Ev(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Ev(r,e,t){const n=r.field.isKeyField()?$.comparator(e.key,t.key):function(s,o,l){const c=o.data.field(s),h=l.data.field(s);return c!==null&&h!==null?Bt(c,h):q()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){In(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return Kd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=new ae($.comparator);function qe(){return bv}const uf=new ae($.comparator);function Lr(...r){let e=uf;for(const t of r)e=e.insert(t.key,t);return e}function hf(r){let e=uf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function et(){return Kr()}function df(){return Kr()}function Kr(){return new qt(r=>r.toString(),(r,e)=>r.isEqual(e))}const Tv=new ae($.comparator),xv=new ie($.comparator);function Y(...r){let e=xv;for(const t of r)e=e.add(t);return e}const Sv=new ie(J);function Xa(){return Sv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ti(e)?"-0":e}}function ff(r){return{integerValue:""+r}}function Av(r,e){return Bd(e)?ff(e):Za(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this._=void 0}}function Rv(r,e,t){return r instanceof oi?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qa(s)&&(s=Ja(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):r instanceof Jn?gf(r,e):r instanceof Yn?mf(r,e):function(i,s){const o=pf(i,s),l=Du(o)+Du(i.Pe);return _a(o)&&_a(i.Pe)?ff(l):Za(i.serializer,l)}(r,e)}function Cv(r,e,t){return r instanceof Jn?gf(r,e):r instanceof Yn?mf(r,e):t}function pf(r,e){return r instanceof ai?function(n){return _a(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class oi extends Js{}class Jn extends Js{constructor(e){super(),this.elements=e}}function gf(r,e){const t=yf(e);for(const n of r.elements)t.some(i=>rt(i,n))||t.push(n);return{arrayValue:{values:t}}}class Yn extends Js{constructor(e){super(),this.elements=e}}function mf(r,e){let t=yf(e);for(const n of r.elements)t=t.filter(i=>!rt(i,n));return{arrayValue:{values:t}}}class ai extends Js{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Du(r){return ce(r.integerValue||r.doubleValue)}function yf(r){return si(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t){this.field=e,this.transform=t}}function kv(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof Jn&&i instanceof Jn||n instanceof Yn&&i instanceof Yn?Kn(n.elements,i.elements,rt):n instanceof ai&&i instanceof ai?rt(n.Pe,i.Pe):n instanceof oi&&i instanceof oi}(r.transform,e.transform)}class Dv{constructor(e,t){this.version=e,this.transformResults=t}}class Oe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function os(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ys{}function _f(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Xs(r.key,Oe.none()):new lr(r.key,r.data,Oe.none());{const t=r.data,n=ke.empty();let i=new ie(ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new vt(r.key,n,new $e(i.toArray()),Oe.none())}}function Vv(r,e,t){r instanceof lr?function(i,s,o){const l=i.value.clone(),c=Nu(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):r instanceof vt?function(i,s,o){if(!os(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Nu(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(vf(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Wr(r,e,t,n){return r instanceof lr?function(s,o,l,c){if(!os(s.precondition,o))return l;const h=s.value.clone(),f=Ou(s.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof vt?function(s,o,l,c){if(!os(s.precondition,o))return l;const h=Ou(s.fieldTransforms,c,o),f=o.data;return f.setAll(vf(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(s,o,l){return os(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(r,e,t)}function Nv(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=pf(n.transform,i||null);s!=null&&(t===null&&(t=ke.empty()),t.set(n.field,s))}return t||null}function Vu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Kn(n,i,(s,o)=>kv(s,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class lr extends Ys{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vt extends Ys{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vf(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Nu(r,e,t){const n=new Map;W(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,l=e.data.field(s.field);n.set(s.field,Cv(o,l,t[i]))}return n}function Ou(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,Rv(s,o,e))}return n}class Xs extends Ys{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wf extends Ys{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Vv(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Wr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Wr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=df();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const c=_f(o,l);c!==null&&n.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Y())}isEqual(e){return this.batchId===e.batchId&&Kn(this.mutations,e.mutations,(t,n)=>Vu(t,n))&&Kn(this.baseMutations,e.baseMutations,(t,n)=>Vu(t,n))}}class tl{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){W(e.mutations.length===n.length);let i=function(){return Tv}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new tl(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,ee;function Mv(r){switch(r){default:return q();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function If(r){if(r===void 0)return pe("GRPC error has no .code"),N.UNKNOWN;switch(r){case ye.OK:return N.OK;case ye.CANCELLED:return N.CANCELLED;case ye.UNKNOWN:return N.UNKNOWN;case ye.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ye.INTERNAL:return N.INTERNAL;case ye.UNAVAILABLE:return N.UNAVAILABLE;case ye.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ye.NOT_FOUND:return N.NOT_FOUND;case ye.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ye.ABORTED:return N.ABORTED;case ye.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ye.DATA_LOSS:return N.DATA_LOSS;default:return q()}}(ee=ye||(ye={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=new on([4294967295,4294967295],0);function Mu(r){const e=Lv().encode(r),t=new Rd;return t.update(e),new Uint8Array(t.digest())}function Lu(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new on([t,n],0),new on([i,s],0)]}class rl{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Fr(`Invalid padding: ${t}`);if(n<0)throw new Fr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Fr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Fr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=on.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(on.fromNumber(n)));return i.compare(Fv)===1&&(i=new on([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Mu(e),[n,i]=Lu(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);if(!this.de(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new rl(s,i,t);return n.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=Mu(e),[n,i]=Lu(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Fr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,_i.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new yi(H.min(),i,new ae(J),qe(),Y())}}class _i{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new _i(n,t,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class Ef{constructor(e,t){this.targetId=e,this.me=t}}class bf{constructor(e,t,n=me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Fu{constructor(){this.fe=0,this.ge=Uu(),this.pe=me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Y(),t=Y(),n=Y();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:q()}}),new _i(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Uu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class jv{constructor(e){this.Le=e,this.Be=new Map,this.ke=qe(),this.qe=ju(),this.Qe=new ae(J)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if(ws(s))if(n===0){const o=new $(s.path);this.Ue(t,o,fe.newNoDocument(o,H.min()))}else W(n===1);else{const o=this.Ye(t);if(o!==n){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=Ut(n).toUint8Array()}catch(c){if(c instanceof Wd)return Xr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new rl(o,i,s)}catch(c){return Xr(c instanceof Fr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&ws(l.target)){const c=new $(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,fe.newNoDocument(c,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let n=Y();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new yi(e,t,this.Qe,this.ke,n);return this.ke=qe(),this.qe=ju(),this.Qe=new ae(J),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Fu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ie(J),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Fu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ju(){return new ae($.comparator)}function Uu(){return new ae($.comparator)}const Uv={asc:"ASCENDING",desc:"DESCENDING"},Bv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$v={and:"AND",or:"OR"};class zv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ba(r,e){return r.useProto3Json||Ks(e)?e:{value:e}}function Xn(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Gv(r,e){return Xn(r,e.toTimestamp())}function Le(r){return W(!!r),H.fromTimestamp(function(t){const n=gt(t);return new he(n.seconds,n.nanos)}(r))}function il(r,e){return Ta(r,e).canonicalString()}function Ta(r,e){const t=function(i){return new ne(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function xf(r){const e=ne.fromString(r);return W(Nf(e)),e}function bs(r,e){return il(r.databaseId,e.path)}function an(r,e){const t=xf(e);if(t.get(1)!==r.databaseId.projectId)throw new U(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new U(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new $(Rf(t))}function Sf(r,e){return il(r.databaseId,e)}function Af(r){const e=xf(r);return e.length===4?ne.emptyPath():Rf(e)}function xa(r){return new ne(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Rf(r){return W(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Bu(r,e,t){return{name:bs(r,e),fields:t.value.mapValue.fields}}function qv(r,e,t){const n=an(r,e.name),i=Le(e.updateTime),s=e.createTime?Le(e.createTime):H.min(),o=new ke({mapValue:{fields:e.fields}}),l=fe.newFoundDocument(n,i,s,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function Kv(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(W(f===void 0||typeof f=="string"),me.fromBase64String(f||"")):(W(f===void 0||f instanceof Buffer||f instanceof Uint8Array),me.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?N.UNKNOWN:If(h.code);return new U(f,h.message||"")}(o);t=new bf(n,i,s,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=an(r,n.document.name),s=Le(n.document.updateTime),o=n.document.createTime?Le(n.document.createTime):H.min(),l=new ke({mapValue:{fields:n.document.fields}}),c=fe.newFoundDocument(i,s,o,l),h=n.targetIds||[],f=n.removedTargetIds||[];t=new as(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=an(r,n.document),s=n.readTime?Le(n.readTime):H.min(),o=fe.newNoDocument(i,s),l=n.removedTargetIds||[];t=new as([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=an(r,n.document),s=n.removedTargetIds||[];t=new as([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new Ov(i,s),l=n.targetId;t=new Ef(l,o)}}return t}function Ts(r,e){let t;if(e instanceof lr)t={update:Bu(r,e.key,e.value)};else if(e instanceof Xs)t={delete:bs(r,e.key)};else if(e instanceof vt)t={update:Bu(r,e.key,e.data),updateMask:Xv(e.fieldMask)};else{if(!(e instanceof wf))return q();t={verify:bs(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,o){const l=o.transform;if(l instanceof oi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Jn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ai)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw q()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Gv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(r,e.precondition)),t}function Sa(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Oe.updateTime(Le(s.updateTime)):s.exists!==void 0?Oe.exists(s.exists):Oe.none()}(e.currentDocument):Oe.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(o,l){let c=null;if("setToServerValue"in l)W(l.setToServerValue==="REQUEST_TIME"),c=new oi;else if("appendMissingElements"in l){const f=l.appendMissingElements.values||[];c=new Jn(f)}else if("removeAllFromArray"in l){const f=l.removeAllFromArray.values||[];c=new Yn(f)}else"increment"in l?c=new ai(o,l.increment):q();const h=ue.fromServerFormat(l.fieldPath);return new Pv(h,c)}(r,i)):[];if(e.update){e.update.name;const i=an(r,e.update.name),s=new ke({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const h=c.fieldPaths||[];return new $e(h.map(f=>ue.fromServerFormat(f)))}(e.updateMask);return new vt(i,s,o,t,n)}return new lr(i,s,t,n)}if(e.delete){const i=an(r,e.delete);return new Xs(i,t)}if(e.verify){const i=an(r,e.verify);return new wf(i,t)}return q()}function Wv(r,e){return r&&r.length>0?(W(e!==void 0),r.map(t=>function(i,s){let o=i.updateTime?Le(i.updateTime):Le(s);return o.isEqual(H.min())&&(o=Le(s)),new Dv(o,i.transformResults||[])}(t,e))):[]}function Cf(r,e){return{documents:[Sf(r,e.path)]}}function Pf(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Sf(r,i);const s=function(h){if(h.length!==0)return Vf(re.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Ln(y.field),direction:Qv(y.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=ba(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function kf(r){let e=Af(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){W(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(p){const y=Df(p);return y instanceof re&&Ya(y)?y.getFilters():[y]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(y=>function(P){return new vs(Fn(P.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(t.orderBy));let l=null;t.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Ks(y)?null:y}(t.limit));let c=null;t.startAt&&(c=function(p){const y=!!p.before,x=p.values||[];return new Hn(x,y)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const y=!p.before,x=p.values||[];return new Hn(x,y)}(t.endAt)),sf(e,i,o,s,l,"F",c,h)}function Hv(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Df(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Fn(t.unaryFilter.field);return Z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Fn(t.unaryFilter.field);return Z.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fn(t.unaryFilter.field);return Z.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fn(t.unaryFilter.field);return Z.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(r):r.fieldFilter!==void 0?function(t){return Z.create(Fn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return re.create(t.compositeFilter.filters.map(n=>Df(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(r):q()}function Qv(r){return Uv[r]}function Jv(r){return Bv[r]}function Yv(r){return $v[r]}function Ln(r){return{fieldPath:r.canonicalString()}}function Fn(r){return ue.fromServerFormat(r.fieldPath)}function Vf(r){return r instanceof Z?function(t){if(t.op==="=="){if(Tu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(bu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(bu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:Jv(t.op),value:t.value}}}(r):r instanceof re?function(t){const n=t.getFilters().map(i=>Vf(i));return n.length===1?n[0]:{compositeFilter:{op:Yv(t.op),filters:n}}}(r):q()}function Xv(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Nf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t,n,i,s=H.min(),o=H.min(),l=me.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new ct(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ct(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.ct=e}}function Zv(r,e){let t;if(e.document)t=qv(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=$.fromSegments(e.noDocument.path),i=_n(e.noDocument.readTime);t=fe.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const n=$.fromSegments(e.unknownDocument.path),i=_n(e.unknownDocument.version);t=fe.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new he(i[0],i[1]);return H.fromTimestamp(s)}(e.readTime)),t}function $u(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:xs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,o){return{name:bs(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Xn(s,o.version.toTimestamp()),createTime:Xn(s,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:yn(e.version)};else{if(!e.isUnknownDocument())return q();n.unknownDocument={path:t.path.toArray(),version:yn(e.version)}}return n}function xs(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function yn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function _n(r){const e=new he(r.seconds,r.nanoseconds);return H.fromTimestamp(e)}function tn(r,e){const t=(e.baseMutations||[]).map(s=>Sa(r.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const l=e.mutations[s+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>Sa(r.ct,s)),i=he.fromMillis(e.localWriteTimeMs);return new el(e.batchId,i,t,n)}function jr(r){const e=_n(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?_n(r.lastLimboFreeSnapshotVersion):H.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return W(s.documents.length===1),Ke(Hs(Af(s.documents[0])))}(r.query):function(s){return Ke(kf(s))}(r.query),new ct(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,me.fromBase64String(r.resumeToken))}function Mf(r,e){const t=yn(e.snapshotVersion),n=yn(e.lastLimboFreeSnapshotVersion);let i;i=ws(e.target)?Cf(r.ct,e.target):Pf(r.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:mn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function Lf(r){const e=kf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Es(e,e.limit,"L"):e}function Ko(r,e){return new nl(e.largestBatchId,Sa(r.ct,e.overlayMutation))}function zu(r,e){const t=e.path.lastSegment();return[r,Me(e.path.popLast()),t]}function Gu(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:yn(n.readTime),documentKey:Me(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{getBundleMetadata(e,t){return qu(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:_n(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return qu(e).put(function(i){return{bundleId:i.id,createTime:yn(Le(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Ku(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:Lf(s.bundledQuery),readTime:_n(s.readTime)}}(n)})}saveNamedQuery(e,t){return Ku(e).put(function(i){return{name:i.name,readTime:yn(Le(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function qu(r){return we(r,"bundles")}function Ku(r){return we(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new Zs(e,n)}getOverlay(e,t){return Cr(e).get(zu(this.userId,t)).next(n=>n?Ko(this.serializer,n):null)}getOverlays(e,t){const n=et();return R.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,o)=>{const l=new nl(t,o);i.push(this.ht(e,l))}),R.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(o=>i.add(Me(o.getCollectionPath())));const s=[];return i.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(Cr(e).j("collectionPathOverlayIndex",l))}),R.waitFor(s)}getOverlaysForCollection(e,t,n){const i=et(),s=Me(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Cr(e).U("collectionPathOverlayIndex",o).next(l=>{for(const c of l){const h=Ko(this.serializer,c);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=et();let o;const l=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Cr(e).J({index:"collectionGroupOverlayIndex",range:l},(c,h,f)=>{const p=Ko(this.serializer,h);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return Cr(e).put(function(i,s,o){const[l,c,h]=zu(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ts(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Cr(r){return we(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{Pt(e){return we(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?me.fromUint8Array(n):me.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ce(e.integerValue));else if("doubleValue"in e){const n=ce(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),ti(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=gt(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Ut(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Hd(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Ws(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):q()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const i of Object.keys(n))this.Vt(i,t),this.Tt(n[i],t)}wt(e,t){var n,i;const s=e.fields||{};this.dt(t,53);const o="value",l=((i=(n=s[o].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(ce(l)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const i of n)this.Tt(i,t)}yt(e,t){this.dt(t,37),$.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}nn.vt=new nn;function nw(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Wu(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const o=nw(255&n[s]);if(i+=o,o!==8)break}return i}(r);return Math.ceil(e/8)}class rw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),n=Wu(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),n=Wu(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class iw{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class sw{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Pr{constructor(){this.jt=new rw,this.Ht=new iw(this.jt),this.Jt=new sw(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new rn(this.indexId,this.documentKey,this.arrayValue,n)}}function Tt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Hu(r.arrayValue,e.arrayValue),t!==0?t:(t=Hu(r.directionalValue,e.directionalValue),t!==0?t:$.comparator(r.documentKey,e.documentKey)))}function Hu(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this.Xt=new ie((t,n)=>ue.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(W(e.collectionGroup===this.collectionId),this.nn)return!1;const t=ga(e);if(t!==void 0&&!this.sn(t))return!1;const n=Zt(e);let i=new Set,s=0,o=0;for(;s<n.length&&this.sn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Xt.size>0){const l=this.Xt.getIterator().getNext();if(!i.has(l.field.canonicalString())){const c=n[s];if(!this.on(l,c)||!this._n(this.en[o++],c))return!1}++s}for(;s<n.length;++s){const l=n[s];if(o>=this.en.length||!this._n(this.en[o++],l))return!1}return!0}an(){if(this.nn)return null;let e=new ie(ue.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ns(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ns(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ns(n.field,n.dir==="asc"?0:1)));return new _s(_s.UNKNOWN_ID,this.collectionId,t,ei.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(r){var e,t;if(W(r instanceof Z||r instanceof re),r instanceof Z){if(r instanceof rf){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Z.create(r.field,"==",s)))||[];return re.create(i,"or")}return r}const n=r.filters.map(i=>Ff(i));return re.create(n,r.op)}function ow(r){if(r.getFilters().length===0)return[];const e=Ca(Ff(r));return W(jf(e)),Aa(e)||Ra(e)?[e]:e.getFilters()}function Aa(r){return r instanceof Z}function Ra(r){return r instanceof re&&Ya(r)}function jf(r){return Aa(r)||Ra(r)||function(t){if(t instanceof re&&va(t)){for(const n of t.getFilters())if(!Aa(n)&&!Ra(n))return!1;return!0}return!1}(r)}function Ca(r){if(W(r instanceof Z||r instanceof re),r instanceof Z)return r;if(r.filters.length===1)return Ca(r.filters[0]);const e=r.filters.map(n=>Ca(n));let t=re.create(e,r.op);return t=Ss(t),jf(t)?t:(W(t instanceof re),W(Qn(t)),W(t.filters.length>1),t.filters.reduce((n,i)=>sl(n,i)))}function sl(r,e){let t;return W(r instanceof Z||r instanceof re),W(e instanceof Z||e instanceof re),t=r instanceof Z?e instanceof Z?function(i,s){return re.create([i,s],"and")}(r,e):Ju(r,e):e instanceof Z?Ju(e,r):function(i,s){if(W(i.filters.length>0&&s.filters.length>0),Qn(i)&&Qn(s))return ef(i,s.getFilters());const o=va(i)?i:s,l=va(i)?s:i,c=o.filters.map(h=>sl(h,l));return re.create(c,"or")}(r,e),Ss(t)}function Ju(r,e){if(Qn(e))return ef(e,r.getFilters());{const t=e.filters.map(n=>sl(r,n));return re.create(t,"or")}}function Ss(r){if(W(r instanceof Z||r instanceof re),r instanceof Z)return r;const e=r.getFilters();if(e.length===1)return Ss(e[0]);if(Xd(r))return r;const t=e.map(i=>Ss(i)),n=[];return t.forEach(i=>{i instanceof Z?n.push(i):i instanceof re&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:re.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){this.un=new ol}addToCollectionParentIndex(e,t){return this.un.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(We.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(We.min())}updateCollectionGroup(e,t,n){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class ol{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ie(ne.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ie(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new Uint8Array(0);class lw{constructor(e,t){this.databaseId=t,this.cn=new ol,this.ln=new qt(n=>mn(n),(n,i)=>pi(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:n,parent:Me(i)};return Yu(e).put(s)}return R.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Od(t),""],!1,!0);return Yu(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;n.push(Ze(o.parent))}return n})}addFieldIndex(e,t){const n=kr(e),i=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const o=kn(e);return s.next(l=>{o.put(Gu(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=kr(e),i=kn(e),s=Pn(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=kr(e),n=Pn(e),i=kn(e);return t.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(e,t){return R.forEach(this.hn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new Qu(n).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=Pn(e);let i=!0;const s=new Map;return R.forEach(this.hn(t),o=>this.Pn(e,o).next(l=>{i&&(i=!!l),s.set(o,l)})).next(()=>{if(i){let o=Y();const l=[];return R.forEach(s,(c,h)=>{L("IndexedDbIndexManager",`Using index ${function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map(z=>`${z.fieldPath}:${z.kind}`).join(",")}`}(c)} to execute ${mn(t)}`);const f=function(M,z){const G=ga(z);if(G===void 0)return null;for(const B of Is(M,G.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(h,c),p=function(M,z){const G=new Map;for(const B of Zt(z))for(const b of Is(M,B.fieldPath))switch(b.op){case"==":case"in":G.set(B.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return G.set(B.fieldPath.canonicalString(),b.value),Array.from(G.values())}return null}(h,c),y=function(M,z){const G=[];let B=!0;for(const b of Zt(z)){const w=b.kind===0?Cu(M,b.fieldPath,M.startAt):Pu(M,b.fieldPath,M.startAt);G.push(w.value),B&&(B=w.inclusive)}return new Hn(G,B)}(h,c),x=function(M,z){const G=[];let B=!0;for(const b of Zt(z)){const w=b.kind===0?Pu(M,b.fieldPath,M.endAt):Cu(M,b.fieldPath,M.endAt);G.push(w.value),B&&(B=w.inclusive)}return new Hn(G,B)}(h,c),P=this.In(c,h,y),k=this.In(c,h,x),C=this.Tn(c,h,p),O=this.En(c.indexId,f,P,y.inclusive,k,x.inclusive,C);return R.forEach(O,F=>n.G(F,t.limit).next(M=>{M.forEach(z=>{const G=$.fromSegments(z.documentKey);o.has(G)||(o=o.add(G),l.push(G))})}))}).next(()=>l)}return R.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=ow(re.create(e.filters,"and")).map(n=>Ia(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,i,s,o,l){const c=(t!=null?t.length:1)*Math.max(n.length,s.length),h=c/(t!=null?t.length:1),f=[];for(let p=0;p<c;++p){const y=t?this.dn(t[p/h]):Ki,x=this.An(e,y,n[p%h],i),P=this.Rn(e,y,s[p%h],o),k=l.map(C=>this.An(e,y,C,!0));f.push(...this.createRange(x,P,k))}return f}An(e,t,n,i){const s=new rn(e,$.empty(),t,n);return i?s:s.Zt()}Rn(e,t,n,i){const s=new rn(e,$.empty(),t,n);return i?s.Zt():s}Pn(e,t){const n=new Qu(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const l of s)n.rn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,t){let n=2;const i=this.hn(t);return R.forEach(i,s=>this.Pn(e,s).next(o=>{o?n!==0&&o.fields.length<function(c){let h=new ie(ue.comparator),f=!1;for(const p of c.filters)for(const y of p.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?f=!0:h=h.add(y.field));for(const p of c.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&n===2?1:n)}Vn(e,t){const n=new Pr;for(const i of Zt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=n.Yt(i.kind);nn.vt.It(s,o)}return n.zt()}dn(e){const t=new Pr;return nn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Pr;return nn.vt.It(ii(this.databaseId,t),n.Yt(function(s){const o=Zt(s);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let i=[];i.push(new Pr);let s=0;for(const o of Zt(e)){const l=n[s++];for(const c of i)if(this.fn(t,o.fieldPath)&&si(l))i=this.gn(i,o,l);else{const h=c.Yt(o.kind);nn.vt.It(l,h)}}return this.pn(i)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const i=[...e],s=[];for(const o of n.arrayValue.values||[])for(const l of i){const c=new Pr;c.seed(l.zt()),nn.vt.It(o,c.Yt(t.kind)),s.push(c)}return s}fn(e,t){return!!e.filters.find(n=>n instanceof Z&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=kr(e),i=kn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(s=>{const o=[];return R.forEach(s,l=>i.get([l.indexId,this.uid]).next(c=>{o.push(function(f,p){const y=p?new ei(p.sequenceNumber,new We(_n(p.readTime),new $(Ze(p.documentKey)),p.largestBatchId)):ei.empty(),x=f.fields.map(([P,k])=>new ns(ue.fromServerFormat(P),k));return new _s(f.indexId,f.collectionGroup,x,y)}(l,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:J(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=kr(e),s=kn(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(l=>R.forEach(l,c=>s.put(Gu(c.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return R.forEach(t,(i,s)=>{const o=n.get(i.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(l=>(n.set(i.collectionGroup,l),R.forEach(l,c=>this.wn(e,i,c).next(h=>{const f=this.Sn(s,c);return h.isEqual(f)?R.resolve():this.bn(e,s,c,h,f)}))))})}Dn(e,t,n,i){return Pn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,i){return Pn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const i=Pn(e);let s=new ie(Tt);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,l)=>{s=s.add(new rn(n.indexId,t,l.arrayValue,l.directionalValue))}).next(()=>s)}Sn(e,t){let n=new ie(Tt);const i=this.Vn(t,e);if(i==null)return n;const s=ga(t);if(s!=null){const o=e.data.field(s.fieldPath);if(si(o))for(const l of o.arrayValue.values||[])n=n.add(new rn(t.indexId,e.key,this.dn(l),i))}else n=n.add(new rn(t.indexId,e.key,Ki,i));return n}bn(e,t,n,i,s){L("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,h,f,p,y){const x=c.getIterator(),P=h.getIterator();let k=Cn(x),C=Cn(P);for(;k||C;){let O=!1,F=!1;if(k&&C){const M=f(k,C);M<0?F=!0:M>0&&(O=!0)}else k!=null?F=!0:O=!0;O?(p(C),C=Cn(P)):F?(y(k),k=Cn(x)):(k=Cn(x),C=Cn(P))}}(i,s,Tt,l=>{o.push(this.Dn(e,t,n,l))},l=>{o.push(this.vn(e,t,n,l))}),R.waitFor(o)}yn(e){let t=1;return kn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,l)=>Tt(o,l)).filter((o,l,c)=>!l||Tt(o,c[l-1])!==0);const i=[];i.push(e);for(const o of n){const l=Tt(o,e),c=Tt(o,t);if(l===0)i[0]=e.Zt();else if(l>0&&c<0)i.push(o),i.push(o.Zt());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const l=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ki,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ki,[]];s.push(IDBKeyRange.bound(l,c))}return s}Cn(e,t){return Tt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Xu)}getMinOffset(e,t){return R.mapArray(this.hn(t),n=>this.Pn(e,n).next(i=>i||q())).next(Xu)}}function Yu(r){return we(r,"collectionParents")}function Pn(r){return we(r,"indexEntries")}function kr(r){return we(r,"indexConfiguration")}function kn(r){return we(r,"indexState")}function Xu(r){W(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;Ka(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new We(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ue{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ue(e,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(r,e,t){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let l=0;const c=n.J({range:o},(f,p,y)=>(l++,y.delete()));s.push(c.next(()=>{W(l===1)}));const h=[];for(const f of t.mutations){const p=$d(e,f.key.path,t.batchId);s.push(i.delete(p)),h.push(f.key)}return R.waitFor(s).next(()=>h)}function As(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw q();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue.DEFAULT_COLLECTION_PERCENTILE=10,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ue.DEFAULT=new Ue(41943040,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ue.DISABLED=new Ue(-1,0,0);class eo{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Fn={}}static lt(e,t,n,i){W(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new eo(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xt(e).J({index:"userMutationsIndex",range:n},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=jn(e),o=xt(e);return o.add({}).next(l=>{W(typeof l=="number");const c=new el(l,t,n,i),h=function(x,P,k){const C=k.baseMutations.map(F=>Ts(x.ct,F)),O=k.mutations.map(F=>Ts(x.ct,F));return{userId:P,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:C,mutations:O}}(this.serializer,this.userId,c),f=[];let p=new ie((y,x)=>J(y.canonicalString(),x.canonicalString()));for(const y of i){const x=$d(this.userId,y.key.path,l);p=p.add(y.key.path.popLast()),f.push(o.put(h)),f.push(s.put(x,q_))}return p.forEach(y=>{f.push(this.indexManager.addToCollectionParentIndex(e,y))}),e.addOnCommittedListener(()=>{this.Fn[l]=c.keys()}),R.waitFor(f).next(()=>c)})}lookupMutationBatch(e,t){return xt(e).get(t).next(n=>n?(W(n.userId===this.userId),tn(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?R.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return xt(e).J({index:"userMutationsIndex",range:i},(o,l,c)=>{l.userId===this.userId&&(W(l.batchId>=n),s=tn(this.serializer,l)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return xt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{n=s.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return xt(e).U("userMutationsIndex",t).next(n=>n.map(i=>tn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=rs(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return jn(e).J({range:i},(o,l,c)=>{const[h,f,p]=o,y=Ze(f);if(h===this.userId&&t.path.isEqual(y))return xt(e).get(p).next(x=>{if(!x)throw q();W(x.userId===this.userId),s.push(tn(this.serializer,x))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(J);const i=[];return t.forEach(s=>{const o=rs(this.userId,s.path),l=IDBKeyRange.lowerBound(o),c=jn(e).J({range:l},(h,f,p)=>{const[y,x,P]=h,k=Ze(x);y===this.userId&&s.path.isEqual(k)?n=n.add(P):p.done()});i.push(c)}),R.waitFor(i).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=rs(this.userId,n),o=IDBKeyRange.lowerBound(s);let l=new ie(J);return jn(e).J({range:o},(c,h,f)=>{const[p,y,x]=c,P=Ze(y);p===this.userId&&n.isPrefixOf(P)?P.length===i&&(l=l.add(x)):f.done()}).next(()=>this.xn(e,l))}xn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(xt(e).get(s).next(o=>{if(o===null)throw q();W(o.userId===this.userId),n.push(tn(this.serializer,o))}))}),R.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return Uf(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),R.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return R.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return jn(e).J({range:n},(s,o,l)=>{if(s[0]===this.userId){const c=Ze(s[1]);i.push(c)}else l.done()}).next(()=>{W(i.length===0)})})}containsKey(e,t){return Bf(e,this.userId,t)}Nn(e){return $f(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Bf(r,e,t){const n=rs(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return jn(r).J({range:s,H:!0},(l,c,h)=>{const[f,p,y]=l;f===e&&p===i&&(o=!0),h.done()}).next(()=>o)}function xt(r){return we(r,"mutations")}function jn(r){return we(r,"documentMutations")}function $f(r){return we(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vn(0)}static kn(){return new vn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new vn(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>H.fromTimestamp(new he(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Dn(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(W(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return Dn(e).J((o,l)=>{const c=jr(l);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>R.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Dn(e).J((n,i)=>{const s=jr(i);t(s)})}qn(e){return eh(e).get("targetGlobalKey").next(t=>(W(t!==null),t))}Qn(e,t){return eh(e).put("targetGlobalKey",t)}Kn(e,t){return Dn(e).put(Mf(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=mn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Dn(e).J({range:i,index:"queryTargetsIndex"},(o,l,c)=>{const h=jr(l);pi(t,h.target)&&(s=h,c.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=At(e);return t.forEach(o=>{const l=Me(o.path);i.push(s.put({targetId:n,path:l})),i.push(this.referenceDelegate.addReference(e,n,o))}),R.waitFor(i)}removeMatchingKeys(e,t,n){const i=At(e);return R.forEach(t,s=>{const o=Me(s.path);return R.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=At(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=At(e);let s=Y();return i.J({range:n,H:!0},(o,l,c)=>{const h=Ze(o[1]),f=new $(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=Me(t.path),i=IDBKeyRange.bound([n],[Od(n)],!1,!0);let s=0;return At(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,l],c,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}ot(e,t){return Dn(e).get(t).next(n=>n?jr(n):null)}}function Dn(r){return we(r,"targets")}function eh(r){return we(r,"targetGlobal")}function At(r){return we(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th([r,e],[t,n]){const i=J(r,t);return i===0?J(e,n):i}class uw{constructor(e){this.Un=e,this.buffer=new ie(th),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();th(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hw{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){L("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gt(t)?L("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await zt(t)}await this.Hn(3e5)})}}class dw{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Be.oe);const n=new uw(t);return this.Jn.forEachTarget(e,i=>n.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>n.zn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Zu)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zu):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,i,s,o,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(n=p,l=Date.now(),this.removeTargets(e,n,t))).next(p=>(s=p,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),On()<=X.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function fw(r,e){return new dw(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,t){this.db=e,this.garbageCollector=fw(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,i)=>t(i))}addReference(e,t,n){return Wi(e,n)}removeReference(e,t,n){return Wi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Wi(e,t)}nr(e,t){return function(i,s){let o=!1;return $f(i).Y(l=>Bf(i,l,s).next(c=>(c&&(o=!0),R.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,l)=>{if(l<=t){const c=this.nr(e,o).next(h=>{if(!h)return s++,n.getEntry(e,o).next(()=>(n.removeEntry(o,H.min()),At(e).delete(function(p){return[0,Me(p.path)]}(o))))});i.push(c)}}).next(()=>R.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Wi(e,t)}tr(e,t){const n=At(e);let i,s=Be.oe;return n.J({index:"documentTargetsIndex"},([o,l],{path:c,sequenceNumber:h})=>{o===0?(s!==Be.oe&&t(new $(Ze(i)),s),s=h,i=c):s=Be.oe}).next(()=>{s!==Be.oe&&t(new $(Ze(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Wi(r,e){return At(r).put(function(n,i){return{targetId:0,path:Me(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.changes=new qt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?R.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Yt(e).put(n)}removeEntry(e,t,n){return Yt(e).delete(function(s,o){const l=s.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],xs(o),l[l.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=fe.newInvalidDocument(t);return Yt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Dr(t))},(i,s)=>{n=this.ir(t,s)}).next(()=>n)}sr(e,t){let n={size:0,document:fe.newInvalidDocument(t)};return Yt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Dr(t))},(i,s)=>{n={document:this.ir(t,s),size:As(s)}}).next(()=>n)}getEntries(e,t){let n=qe();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);n=n.insert(i,o)}).next(()=>n)}ar(e,t){let n=qe(),i=new ae($.comparator);return this._r(e,t,(s,o)=>{const l=this.ir(s,o);n=n.insert(s,l),i=i.insert(s,As(o))}).next(()=>({documents:n,ur:i}))}_r(e,t,n){if(t.isEmpty())return R.resolve();let i=new ie(ih);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Dr(i.first()),Dr(i.last())),o=i.getIterator();let l=o.getNext();return Yt(e).J({index:"documentKeyIndex",range:s},(c,h,f)=>{const p=$.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;l&&ih(l,p)<0;)n(l,null),l=o.getNext();l&&l.isEqual(p)&&(n(l,h),l=o.hasNext()?o.getNext():null),l?f.$(Dr(l)):f.done()}).next(()=>{for(;l;)n(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),xs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Yt(e).U(IDBKeyRange.bound(l,c,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=qe();for(const p of h){const y=this.ir($.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);y.isFoundDocument()&&(mi(t,y)||i.has(y.key))&&(f=f.insert(y.key,y))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=qe();const o=rh(t,n),l=rh(t,We.max());return Yt(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,l,!0)},(c,h,f)=>{const p=this.ir($.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new mw(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return nh(e).get("remoteDocumentGlobalKey").next(t=>(W(!!t),t))}rr(e,t){return nh(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=Zv(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(H.min())))return n}return fe.newInvalidDocument(e)}}function Gf(r){return new gw(r)}class mw extends zf{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new qt(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new ie((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const l=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,l.readTime)),o.isValidDocument()){const c=$u(this.cr.serializer,o);i=i.add(s.path.popLast());const h=As(c);n+=h-l.size,t.push(this.cr.addEntry(e,s,c))}else if(n-=l.size,this.trackRemovals){const c=$u(this.cr.serializer,o.convertToNoDocument(H.min()));t.push(this.cr.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,n)),R.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:n.get(s).readTime})}),n))}}function nh(r){return we(r,"remoteDocumentGlobal")}function Yt(r){return we(r,"remoteDocumentsV14")}function Dr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function rh(r,e){const t=e.documentKey.path.toArray();return[r,xs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ih(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=J(t[s],n[s]),i)return i;return i=J(t.length,n.length),i||(i=J(t[t.length-2],n[n.length-2]),i||J(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Wr(n.mutation,i,$e.empty(),he.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Y()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Y()){const i=et();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let o=Lr();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=et();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Y()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,n,i){let s=qe();const o=Kr(),l=function(){return Kr()}();return t.forEach((c,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof vt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Wr(f.mutation,h,f.mutation.getFieldMask(),he.now())):o.set(h.key,$e.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new yw(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const n=Kr();let i=new ae((o,l)=>o-l),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||$e.empty();f=l.applyToLocalView(h,f),n.set(c,f);const p=(i.get(l.batchId)||Y()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=df();f.forEach(y=>{if(!s.has(y)){const x=_f(t.get(y),n.get(y));x!==null&&p.set(y,x),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return R.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):of(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):R.resolve(et());let l=-1,c=s;return o.next(h=>R.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{c=c.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,Y())).next(f=>({batchId:l,changes:hf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(n=>{let i=Lr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=Lr();return this.indexManager.getCollectionParents(e,s).next(l=>R.forEach(l,c=>{const h=function(p,y){return new gi(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(o=>{s.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,fe.newInvalidDocument(f)))});let l=Lr();return o.forEach((c,h)=>{const f=s.get(c);f!==void 0&&Wr(f.mutation,h,$e.empty(),he.now()),mi(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return R.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Le(i.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Lf(i.bundledQuery),readTime:Le(i.readTime)}}(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.overlays=new ae($.comparator),this.Ir=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const n=et();return R.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),R.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),R.resolve()}getOverlaysForCollection(e,t,n){const i=et(),s=t.length+1,o=new $(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>n&&i.set(c.getKey(),c)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new ae((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=et(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=et(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return R.resolve(l)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new nl(t,n));let s=this.Ir.get(t);s===void 0&&(s=Y(),this.Ir.set(t,s)),this.Ir.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.Tr=new ie(Ie.Er),this.dr=new ie(Ie.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Ie(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Ie(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new $(new ne([])),n=new Ie(t,e),i=new Ie(t,e+1),s=[];return this.dr.forEachInRange([n,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new ne([])),n=new Ie(t,e),i=new Ie(t,e+1);let s=Y();return this.dr.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ie(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ie{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||J(e.wr,t.wr)}static Ar(e,t){return J(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ie(Ie.Er)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new el(s,t,n,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ie(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.vr(n),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ie(t,0),i=new Ie(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,i],o=>{const l=this.Dr(o.wr);s.push(l)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(J);return t.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{n=n.add(l.wr)})}),R.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;$.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new $(s),0);let l=new ie(J);return this.br.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.wr)),!0)},o),R.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){W(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return R.forEach(t.mutations,i=>{const s=new Ie(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Ie(t,0),i=this.br.firstAfterOrEqual(n);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.Mr=e,this.docs=function(){return new ae($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return R.resolve(n?n.document.mutableCopy():fe.newInvalidDocument(t))}getEntries(e,t){let n=qe();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():fe.newInvalidDocument(i))}),R.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=qe();const o=t.path,l=new $(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Ka(Ld(f),n)<=0||(i.has(f.key)||mi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,t,n,i){q()}Or(e,t){return R.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new bw(this)}getSize(e){return R.resolve(this.size)}}class bw extends zf{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),R.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.persistence=e,this.Nr=new qt(t=>mn(t),pi),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new al,this.targetCount=0,this.kr=vn.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,i)=>t(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),R.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new vn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Kn(t),R.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return R.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),R.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return R.resolve(n)}containsKey(e,t){return R.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Be(0),this.Kr=!1,this.Kr=!0,this.$r=new ww,this.referenceDelegate=e(this),this.Ur=new Tw(this),this.indexManager=new aw,this.remoteDocumentCache=function(i){return new Ew(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Of(t),this.Gr=new _w(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new Iw(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){L("MemoryPersistence","Starting transaction:",e);const i=new xw(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return R.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class xw extends jd{constructor(e){super(),this.currentSequenceNumber=e}}class to{constructor(e){this.persistence=e,this.Jr=new al,this.Yr=null}static Zr(e){return new to(e)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),R.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),R.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,n=>{const i=$.fromPath(n);return this.ei(e,i).next(s=>{s||t.removeEntry(i,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return R.or([()=>R.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.serializer=e}O(e,t,n,i){const s=new qs("createOrUpgrade",t);n<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_u,{unique:!0}),c.createObjectStore("documentMutations")}(e),sh(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=R.resolve();return n<3&&i>=3&&(n!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),sh(e)),o=o.next(()=>function(c){const h=c.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(s))),n<4&&i>=4&&(n!==0&&(o=o.next(()=>function(c,h){return h.store("mutations").U().next(f=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_u,{unique:!0});const p=h.store("mutations"),y=f.map(x=>p.put(x));return R.waitFor(y)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&i>=5&&(o=o.next(()=>this.ni(s))),n<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),n<7&&i>=7&&(o=o.next(()=>this.ii(s))),n<8&&i>=8&&(o=o.next(()=>this.si(e,s))),n<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(o=o.next(()=>this.oi(s))),n<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(o=o.next(()=>{(function(c){const h=c.createObjectStore("documentOverlays",{keyPath:rv});h.createIndex("collectionPathOverlayIndex",iv,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",sv,{unique:!1})})(e)})),n<13&&i>=13&&(o=o.next(()=>function(c){const h=c.createObjectStore("remoteDocumentsV14",{keyPath:K_});h.createIndex("documentKeyIndex",W_),h.createIndex("collectionGroupIndex",H_)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),n<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:Z_}).createIndex("sequenceNumberIndex",ev,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:tv}).createIndex("documentKeyIndex",nv,{unique:!1})}(e))),n<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&i>=17&&(o=o.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,i)=>{t+=As(i)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(i=>R.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(l=>R.forEach(l,c=>{W(c.userId===s.userId);const h=tn(this.serializer,c);return Uf(e,s.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((o,l)=>{const c=new ne(o),h=function(p){return[0,Me(p)]}(c);s.push(t.get(h).next(f=>f?R.resolve():(p=>t.put({targetId:0,path:Me(p),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>R.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:X_});const n=t.store("collectionParents"),i=new ol,s=o=>{if(i.add(o)){const l=o.lastSegment(),c=o.popLast();return n.put({collectionId:l,parent:Me(c)})}};return t.store("remoteDocuments").J({H:!0},(o,l)=>{const c=new ne(o);return s(c.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,l,c],h)=>{const f=Ze(l);return s(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,i)=>{const s=jr(i),o=Mf(this.serializer,s);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),i=[];return n.J((s,o)=>{const l=t.store("remoteDocumentsV14"),c=function(p){return p.document?new $(ne.fromString(p.document.name).popFirst(5)):p.noDocument?$.fromSegments(p.noDocument.path):p.unknownDocument?$.fromSegments(p.unknownDocument.path):q()}(o).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(l.put(h))}).next(()=>R.waitFor(i))}ai(e,t){const n=t.store("mutations"),i=Gf(this.serializer),s=new Kf(to.Zr,this.serializer.ct);return n.U().next(o=>{const l=new Map;return o.forEach(c=>{var h;let f=(h=l.get(c.userId))!==null&&h!==void 0?h:Y();tn(this.serializer,c).keys().forEach(p=>f=f.add(p)),l.set(c.userId,f)}),R.forEach(l,(c,h)=>{const f=new Pe(h),p=Zs.lt(this.serializer,f),y=s.getIndexManager(f),x=eo.lt(f,this.serializer,y,s.referenceDelegate);return new qf(i,x,p,y).recalculateAndSaveOverlaysForDocumentKeys(new ma(t,Be.oe),c).next()})})}}function sh(r){r.createObjectStore("targetDocuments",{keyPath:J_}).createIndex("documentTargetsIndex",Y_,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Q_,{unique:!0}),r.createObjectStore("targetGlobal")}const Wo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ll{constructor(e,t,n,i,s,o,l,c,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=s,this.window=o,this.document=l,this.ci=h,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=y=>Promise.resolve(),!ll.D())throw new U(N.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new pw(this,i),this.Ai=t+"main",this.serializer=new Of(c),this.Ri=new Mt(this.Ai,this.hi,new Sw(this.serializer)),this.$r=new tw,this.Ur=new cw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Gf(this.serializer),this.Gr=new ew,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&pe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new U(N.FAILED_PRECONDITION,Wo);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Be(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Hi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Gt(e))return L("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return L("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Vr(e).get("owner").next(t=>R.resolve(this.vi(t)))}Ci(e){return Hi(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=we(t,"clientMetadata");return n.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(l=>s.indexOf(l)===-1);return R.forEach(o,l=>n.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?R.resolve(!0):Vr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new U(N.FAILED_PRECONDITION,Wo);return!1}}return!(!this.networkEnabled||!this.inForeground)||Hi(e).U().next(n=>this.xi(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,l=this.networkEnabled===i.networkEnabled;if(s||o&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&L("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ma(e,Be.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Hi(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return eo.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new lw(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Zs.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){L("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===17?lv:c===16?av:c===15?Ha:c===14?qd:c===13?Gd:c===12?ov:c===11?zd:void q()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,l=>(o=new ma(l,this.Qr?this.Qr.next():Be.oe),t==="readwrite-primary"?this.wi(o).next(c=>!!c||this.Si(o)).next(c=>{if(!c)throw pe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new U(N.FAILED_PRECONDITION,Fd);return n(o)}).next(c=>this.Di(o).next(()=>c)):this.Ki(o).next(()=>n(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Ki(e){return Vr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new U(N.FAILED_PRECONDITION,Wo)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Vr(e).put("owner",t)}static D(){return Mt.D()}bi(e){const t=Vr(e);return t.get("owner").next(n=>this.vi(n)?(L("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):R.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(pe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;wd()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return L("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return pe("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){pe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Vr(r){return we(r,"owner")}function Hi(r){return we(r,"clientMetadata")}function Wf(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=i}static Wi(e,t){let n=Y(),i=Y();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cl(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return wd()?8:Ud(ve())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Aw;return this.Xi(e,t,o).next(l=>{if(s.result=l,this.zi)return this.es(e,t,o,l.size)})}).next(()=>s.result)}es(e,t,n,i){return n.documentReadCount<this.ji?(On()<=X.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(On()<=X.DEBUG&&L("QueryEngine","Query:",Mn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(On()<=X.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ke(t))):R.resolve())}Yi(e,t){if(ku(t))return R.resolve(null);let n=Ke(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Es(t,null,"F"),n=Ke(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const o=Y(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const h=this.ts(t,l);return this.ns(t,h,o,c.readTime)?this.Yi(e,Es(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,n,i){return ku(t)||i.isEqual(H.min())?R.resolve(null):this.Ji.getDocuments(e,n).next(s=>{const o=this.ts(t,s);return this.ns(t,o,n,i)?R.resolve(null):(On()<=X.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mn(t)),this.rs(e,o,t,Md(i,-1)).next(l=>l))})}ts(e,t){let n=new ie(cf(e));return t.forEach((i,s)=>{mi(e,s)&&(n=n.add(s))}),n}ns(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,n){return On()<=X.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Mn(t)),this.Ji.getDocumentsMatchingQuery(e,t,We.min(),n)}rs(e,t,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t,n,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new ae(J),this._s=new qt(s=>mn(s),pi),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Qf(r,e,t,n){return new Rw(r,e,t,n)}async function Jf(r,e){const t=K(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],l=[];let c=Y();for(const h of i){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Cw(r,e){const t=K(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,y=p.keys();let x=R.resolve();return y.forEach(P=>{x=x.next(()=>f.getEntry(c,P)).next(k=>{const C=h.docVersions.get(P);W(C!==null),k.version.compareTo(C)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=Y();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Yf(r){const e=K(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Pw(r,e){const t=K(r),n=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,p)=>{const y=i.get(p);if(!y)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,p)));let x=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?x=x.withResumeToken(me.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,n)),i=i.insert(p,x),function(k,C,O){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(y,x,f)&&l.push(t.Ur.updateTargetData(s,x))});let c=qe(),h=Y();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(kw(s,o,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!n.isEqual(H.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(p=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));l.push(f)}return R.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.os=i,s))}function kw(r,e,t){let n=Y(),i=Y();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let o=qe();return t.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):L("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function Dw(r,e){const t=K(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Rs(r,e){const t=K(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Ur.getTargetData(n,e).next(s=>s?(i=s,R.resolve(i)):t.Ur.allocateTargetId(n).next(o=>(i=new ct(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function Zn(r,e,t){const n=K(r),i=n.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Gt(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function Pa(r,e,t){const n=K(r);let i=H.min(),s=Y();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=K(c),y=p._s.get(f);return y!==void 0?R.resolve(p.os.get(y)):p.Ur.getTargetData(h,f)}(n,o,Ke(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?i:H.min(),t?s:Y())).next(l=>(ep(n,lf(e),l),{documents:l,Ts:s})))}function Xf(r,e){const t=K(r),n=K(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.ot(s,e).next(o=>o?o.target:null))}function Zf(r,e){const t=K(r),n=t.us.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,Md(n,-1),Number.MAX_SAFE_INTEGER)).then(i=>(ep(t,e,i),i))}function ep(r,e,t){let n=r.us.get(e)||H.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.us.set(e,n)}function oh(r,e){return`firestore_clients_${r}_${e}`}function ah(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function Ho(r,e){return`firestore_targets_${r}_${e}`}class Cs{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Rs(e,t,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new U(i.error.code,i.error.message))),o?new Cs(e,t,i.state,s):(pe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Hr{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new U(n.error.code,n.error.message))),s?new Hr(e,n.state,i):(pe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ps{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=Xa();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=Bd(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new Ps(e,s):(pe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ul{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new ul(t.clientId,t.onlineState):(pe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ka{constructor(){this.activeTargetIds=Xa()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qo{constructor(e,t,n,i,s){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new ae(J),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=oh(this.persistenceKey,this.ps),this.vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new ka),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Os=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const i=this.getItem(oh(this.persistenceKey,n));if(i){const s=Ps.Rs(n,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Ho(this.persistenceKey,e));if(i){const s=Hr.Rs(e,i);s&&(n=s.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ho(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return L("SharedClientState","READ",e,t),t}setItem(e,t){L("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){L("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(L("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void pe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(s){let o=Be.oe;if(s!=null)try{const l=JSON.parse(s);W(typeof l=="number"),o=l}catch(l){pe("SharedClientState","Failed to read sequence number from WebStorage",l)}return o}(t.newValue);n!==Be.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const i=new Cs(this.currentUser,e,t,n),s=ah(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=ah(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const i=Ho(this.persistenceKey,e),s=new Hr(e,t,n);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return Ps.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return Cs.Rs(new Pe(s),i,t)}Ys(e,t){const n=this.Ms.exec(e),i=Number(n[1]);return Hr.Rs(i,t)}Ls(e){return ul.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);L("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(n),o=[],l=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||l.push(c)}),this.syncEngine.io(o,l).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Xa();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class tp{constructor(){this.so=new ka,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ka,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi=null;function Jo(){return Qi===null?Qi=function(){return 268435456+Math.round(2147483648*Math.random())}():Qi++,"0x"+Qi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="WebChannelConnection";class Mw extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,n,i,s,o){const l=Jo(),c=this.xo(t,n.toUriEncodedString());L("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(t,c,h,i).then(f=>(L("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Xr("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}Lo(t,n,i,s,o,l){return this.Mo(t,n,i,s,o)}Oo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ar}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,n){const i=Nw[t];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,i){const s=Jo();return new Promise((o,l)=>{const c=new Cd;c.setWithCredentials(!0),c.listenOnce(Pd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ts.NO_ERROR:const f=c.getResponseJson();L(Ce,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case ts.TIMEOUT:L(Ce,`RPC '${e}' ${s} timed out`),l(new U(N.DEADLINE_EXCEEDED,"Request time out"));break;case ts.HTTP_ERROR:const p=c.getStatus();if(L(Ce,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const x=y==null?void 0:y.error;if(x&&x.status&&x.message){const P=function(C){const O=C.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(O)>=0?O:N.UNKNOWN}(x.status);l(new U(P,x.message))}else l(new U(N.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new U(N.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{L(Ce,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);L(Ce,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,n,15)})}Bo(e,t,n){const i=Jo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Vd(),l=Dd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const f=s.join("");L(Ce,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=o.createWebChannel(f,c);let y=!1,x=!1;const P=new Ow({Io:C=>{x?L(Ce,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(y||(L(Ce,`Opening RPC '${e}' stream ${i} transport.`),p.open(),y=!0),L(Ce,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},To:()=>p.close()}),k=(C,O,F)=>{C.listen(O,M=>{try{F(M)}catch(z){setTimeout(()=>{throw z},0)}})};return k(p,Mr.EventType.OPEN,()=>{x||(L(Ce,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),k(p,Mr.EventType.CLOSE,()=>{x||(x=!0,L(Ce,`RPC '${e}' stream ${i} transport closed`),P.So())}),k(p,Mr.EventType.ERROR,C=>{x||(x=!0,Xr(Ce,`RPC '${e}' stream ${i} transport errored:`,C),P.So(new U(N.UNAVAILABLE,"The operation could not be completed")))}),k(p,Mr.EventType.MESSAGE,C=>{var O;if(!x){const F=C.data[0];W(!!F);const M=F,z=M.error||((O=M[0])===null||O===void 0?void 0:O.error);if(z){L(Ce,`RPC '${e}' stream ${i} received error:`,z);const G=z.status;let B=function(I){const v=ye[I];if(v!==void 0)return If(v)}(G),b=z.message;B===void 0&&(B=N.INTERNAL,b="Unknown error status: "+G+" with message "+z.message),x=!0,P.So(new U(B,b)),p.close()}else L(Ce,`RPC '${e}' stream ${i} received:`,F),P.bo(F)}}),k(l,kd.STAT_EVENT,C=>{C.stat===pa.PROXY?L(Ce,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===pa.NOPROXY&&L(Ce,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(){return typeof window<"u"?window:null}function ls(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(r){return new zv(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-n);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t,n,i,s,o,l,c){this.ui=e,this.Ho=n,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new rp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(pe(t.toString()),pe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===t&&this.P_(n,i)},n=>{e(()=>{const i=new U(N.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lw extends ip{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Kv(this.serializer,e),n=function(s){if(!("targetChange"in s))return H.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?Le(o.readTime):H.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=xa(this.serializer),t.addTarget=function(s,o){let l;const c=o.target;if(l=ws(c)?{documents:Cf(s,c)}:{query:Pf(s,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Tf(s,o.resumeToken);const h=ba(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(H.min())>0){l.readTime=Xn(s,o.snapshotVersion.toTimestamp());const h=ba(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const n=Hv(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=xa(this.serializer),t.removeTarget=e,this.a_(t)}}class Fw extends ip{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return W(!!e.streamToken),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Wv(e.writeResults,e.commitTime),n=Le(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=xa(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Ts(this.serializer,n))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new U(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ta(t,n),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(N.UNKNOWN,s.toString())})}Lo(e,t,n,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ta(t,n),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(N.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Uw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(pe(t),this.D_=!1):L("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{n.enqueueAndForget(async()=>{En(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=K(c);h.L_.add(4),await vi(h),h.q_.set("Unknown"),h.L_.delete(4),await ro(h)}(this))})}),this.q_=new Uw(n,i)}}async function ro(r){if(En(r))for(const e of r.B_)await e(!0)}async function vi(r){for(const e of r.B_)await e(!1)}function io(r,e){const t=K(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),fl(t)?dl(t):ur(t).r_()&&hl(t,e))}function er(r,e){const t=K(r),n=ur(t);t.N_.delete(e),n.r_()&&sp(t,e),t.N_.size===0&&(n.r_()?n.o_():En(t)&&t.q_.set("Unknown"))}function hl(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ur(r).A_(e)}function sp(r,e){r.Q_.xe(e),ur(r).R_(e)}function dl(r){r.Q_=new jv({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),ur(r).start(),r.q_.v_()}function fl(r){return En(r)&&!ur(r).n_()&&r.N_.size>0}function En(r){return K(r).L_.size===0}function op(r){r.Q_=void 0}async function $w(r){r.q_.set("Online")}async function zw(r){r.N_.forEach((e,t)=>{hl(r,e)})}async function Gw(r,e){op(r),fl(r)?(r.q_.M_(e),dl(r)):r.q_.set("Unknown")}async function qw(r,e,t){if(r.q_.set("Online"),e instanceof bf&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(r,e)}catch(n){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ks(r,n)}else if(e instanceof as?r.Q_.Ke(e):e instanceof Ef?r.Q_.He(e):r.Q_.We(e),!t.isEqual(H.min()))try{const n=await Yf(r.localStore);t.compareTo(n)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=s.N_.get(c);if(!f)return;s.N_.set(c,f.withResumeToken(me.EMPTY_BYTE_STRING,f.snapshotVersion)),sp(s,c);const p=new ct(f.target,c,h,f.sequenceNumber);hl(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){L("RemoteStore","Failed to raise snapshot:",n),await ks(r,n)}}async function ks(r,e,t){if(!Gt(e))throw e;r.L_.add(1),await vi(r),r.q_.set("Offline"),t||(t=()=>Yf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await ro(r)})}function ap(r,e){return e().catch(t=>ks(r,t,e))}async function cr(r){const e=K(r),t=$t(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Kw(e);)try{const i=await Dw(e.localStore,n);if(i===null){e.O_.length===0&&t.o_();break}n=i.batchId,Ww(e,i)}catch(i){await ks(e,i)}lp(e)&&cp(e)}function Kw(r){return En(r)&&r.O_.length<10}function Ww(r,e){r.O_.push(e);const t=$t(r);t.r_()&&t.V_&&t.m_(e.mutations)}function lp(r){return En(r)&&!$t(r).n_()&&r.O_.length>0}function cp(r){$t(r).start()}async function Hw(r){$t(r).p_()}async function Qw(r){const e=$t(r);for(const t of r.O_)e.m_(t.mutations)}async function Jw(r,e,t){const n=r.O_.shift(),i=tl.from(n,e,t);await ap(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await cr(r)}async function Yw(r,e){e&&$t(r).V_&&await async function(n,i){if(function(o){return Mv(o)&&o!==N.ABORTED}(i.code)){const s=n.O_.shift();$t(n).s_(),await ap(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await cr(n)}}(r,e),lp(r)&&cp(r)}async function ch(r,e){const t=K(r);t.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const n=En(t);t.L_.add(3),await vi(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ro(t)}async function Da(r,e){const t=K(r);e?(t.L_.delete(2),await ro(t)):e||(t.L_.add(2),await vi(t),t.q_.set("Unknown"))}function ur(r){return r.K_||(r.K_=function(t,n,i){const s=K(t);return s.w_(),new Lw(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:$w.bind(null,r),Ro:zw.bind(null,r),mo:Gw.bind(null,r),d_:qw.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),fl(r)?dl(r):r.q_.set("Unknown")):(await r.K_.stop(),op(r))})),r.K_}function $t(r){return r.U_||(r.U_=function(t,n,i){const s=K(t);return s.w_(),new Fw(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Hw.bind(null,r),mo:Yw.bind(null,r),f_:Qw.bind(null,r),g_:Jw.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await cr(r)):(await r.U_.stop(),r.O_.length>0&&(L("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,l=new pl(e,t,o,i,s);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gl(r,e){if(pe("AsyncQueue",`${e}: ${r}`),Gt(r))return new U(N.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(t,n)=>$.comparator(t.key,n.key),this.keyedMap=Lr(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new Bn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Bn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Bn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.W_=new ae($.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class tr{constructor(e,t,n,i,s,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new tr(e,t,Bn.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Zw{constructor(){this.queries=hh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const i=K(t),s=i.queries;i.queries=hh(),s.forEach((o,l)=>{for(const c of l.j_)c.onError(n)})})(this,new U(N.ABORTED,"Firestore shutting down"))}}function hh(){return new qt(r=>af(r),Qs)}async function up(r,e){const t=K(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(n=2):(s=new Xw,n=e.J_()?0:1);try{switch(n){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=gl(o,`Initialization of query '${Mn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&ml(t)}async function hp(r,e){const t=K(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function eI(r,e){const t=K(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(n=!0);o.z_=i}}n&&ml(t)}function tI(r,e,t){const n=K(r),i=n.queries.get(e);if(i)for(const s of i.j_)s.onError(t);n.queries.delete(e)}function ml(r){r.Y_.forEach(e=>{e.next()})}var Va,dh;(dh=Va||(Va={})).ea="default",dh.Cache="cache";class dp{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new tr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=tr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Va.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.key=e}}class pp{constructor(e){this.key=e}}class nI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Y(),this.mutatedKeys=Y(),this.Aa=cf(e),this.Ra=new Bn(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new uh,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const y=i.get(f),x=mi(this.query,p)?p:null,P=!!y&&this.mutatedKeys.has(y.key),k=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let C=!1;y&&x?y.data.isEqual(x.data)?P!==k&&(n.track({type:3,doc:x}),C=!0):this.ga(y,x)||(n.track({type:2,doc:x}),C=!0,(c&&this.Aa(x,c)>0||h&&this.Aa(x,h)<0)&&(l=!0)):!y&&x?(n.track({type:0,doc:x}),C=!0):y&&!x&&(n.track({type:1,doc:y}),C=!0,(c||h)&&(l=!0)),C&&(x?(o=o.add(x),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{Ra:o,fa:n,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(x,P){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return k(x)-k(P)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),i=i!=null&&i;const l=t&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new tr(this.query,e.Ra,s,o,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new uh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Y(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new pp(n))}),this.da.forEach(n=>{e.has(n)||t.push(new fp(n))}),t}ba(e){this.Ta=e.Ts,this.da=Y();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return tr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class rI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class iI{constructor(e){this.key=e,this.va=!1}}class sI{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new qt(l=>af(l),Qs),this.Ma=new Map,this.xa=new Set,this.Oa=new ae($.comparator),this.Na=new Map,this.La=new al,this.Ba={},this.ka=new Map,this.qa=vn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function oI(r,e,t=!0){const n=so(r);let i;const s=n.Fa.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await gp(n,e,t,!0),i}async function aI(r,e){const t=so(r);await gp(t,e,!0,!1)}async function gp(r,e,t,n){const i=await Rs(r.localStore,Ke(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let l;return n&&(l=await yl(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&io(r.remoteStore,i),l}async function yl(r,e,t,n,i){r.Ka=(p,y,x)=>async function(k,C,O,F){let M=C.view.ma(O);M.ns&&(M=await Pa(k.localStore,C.query,!1).then(({documents:b})=>C.view.ma(b,M)));const z=F&&F.targetChanges.get(C.targetId),G=F&&F.targetMismatches.get(C.targetId)!=null,B=C.view.applyChanges(M,k.isPrimaryClient,z,G);return Na(k,C.targetId,B.wa),B.snapshot}(r,p,y,x);const s=await Pa(r.localStore,e,!0),o=new nI(e,s.Ts),l=o.ma(s.documents),c=_i.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(l,r.isPrimaryClient,c);Na(r,t,h.wa);const f=new rI(e,t,o);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function lI(r,e,t){const n=K(r),i=n.Fa.get(e),s=n.Ma.get(i.targetId);if(s.length>1)return n.Ma.set(i.targetId,s.filter(o=>!Qs(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Zn(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&er(n.remoteStore,i.targetId),nr(n,i.targetId)}).catch(zt)):(nr(n,i.targetId),await Zn(n.localStore,i.targetId,!0))}async function cI(r,e){const t=K(r),n=t.Fa.get(e),i=t.Ma.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),er(t.remoteStore,n.targetId))}async function uI(r,e,t){const n=Il(r);try{const i=await function(o,l){const c=K(o),h=he.now(),f=l.reduce((x,P)=>x.add(P.key),Y());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",x=>{let P=qe(),k=Y();return c.cs.getEntries(x,f).next(C=>{P=C,P.forEach((O,F)=>{F.isValidDocument()||(k=k.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(x,P)).next(C=>{p=C;const O=[];for(const F of l){const M=Nv(F,p.get(F.key).overlayedDocument);M!=null&&O.push(new vt(F.key,M,Jd(M.value.mapValue),Oe.exists(!0)))}return c.mutationQueue.addMutationBatch(x,h,O,l)}).next(C=>{y=C;const O=C.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(x,C.batchId,O)})}).then(()=>({batchId:y.batchId,changes:hf(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new ae(J)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(n,i.batchId,t),await Kt(n,i.changes),await cr(n.remoteStore)}catch(i){const s=gl(i,"Failed to persist write");t.reject(s)}}async function mp(r,e){const t=K(r);try{const n=await Pw(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?W(o.va):i.removedDocuments.size>0&&(W(o.va),o.va=!1))}),await Kt(t,n,e)}catch(n){await zt(n)}}function fh(r,e,t){const n=K(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=K(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const y of p.j_)y.Z_(l)&&(h=!0)}),h&&ml(c)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function hI(r,e,t){const n=K(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Na.get(e),s=i&&i.key;if(s){let o=new ae($.comparator);o=o.insert(s,fe.newNoDocument(s,H.min()));const l=Y().add(s),c=new yi(H.min(),new Map,new ae(J),o,l);await mp(n,c),n.Oa=n.Oa.remove(s),n.Na.delete(e),wl(n)}else await Zn(n.localStore,e,!1).then(()=>nr(n,e,t)).catch(zt)}async function dI(r,e){const t=K(r),n=e.batch.batchId;try{const i=await Cw(t.localStore,e);vl(t,n,null),_l(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Kt(t,i)}catch(i){await zt(i)}}async function fI(r,e,t){const n=K(r);try{const i=await function(o,l){const c=K(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(W(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,e);vl(n,e,t),_l(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Kt(n,i)}catch(i){await zt(i)}}function _l(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function vl(r,e,t){const n=K(r);let i=n.Ba[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function nr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||yp(r,n)})}function yp(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(er(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),wl(r))}function Na(r,e,t){for(const n of t)n instanceof fp?(r.La.addReference(n.key,e),pI(r,n)):n instanceof pp?(L("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||yp(r,n.key)):q()}function pI(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(L("SyncEngine","New document in limbo: "+t),r.xa.add(n),wl(r))}function wl(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new $(ne.fromString(e)),n=r.qa.next();r.Na.set(n,new iI(t)),r.Oa=r.Oa.insert(t,n),io(r.remoteStore,new ct(Ke(Hs(t.path)),n,"TargetPurposeLimboResolution",Be.oe))}}async function Kt(r,e,t){const n=K(r),i=[],s=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((l,c)=>{o.push(n.Ka(c,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){i.push(h);const p=cl.Wi(c.targetId,h);s.push(p)}}))}),await Promise.all(o),n.Ca.d_(i),await async function(c,h){const f=K(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>R.forEach(h,y=>R.forEach(y.$i,x=>f.persistence.referenceDelegate.addReference(p,y.targetId,x)).next(()=>R.forEach(y.Ui,x=>f.persistence.referenceDelegate.removeReference(p,y.targetId,x)))))}catch(p){if(!Gt(p))throw p;L("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const x=f.os.get(y),P=x.snapshotVersion,k=x.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(y,k)}}}(n.localStore,s))}async function gI(r,e){const t=K(r);if(!t.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const n=await Jf(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(c=>{c.reject(new U(N.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Kt(t,n.hs)}}function mI(r,e){const t=K(r),n=t.Na.get(e);if(n&&n.va)return Y().add(n.key);{let i=Y();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const l=t.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}async function yI(r,e){const t=K(r),n=await Pa(t.localStore,e.query,!0),i=e.view.ba(n);return t.isPrimaryClient&&Na(t,e.targetId,i.wa),i}async function _I(r,e){const t=K(r);return Zf(t.localStore,e).then(n=>Kt(t,n))}async function vI(r,e,t,n){const i=K(r),s=await function(l,c){const h=K(l),f=K(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,c).next(y=>y?h.localDocuments.getDocuments(p,y):R.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await cr(i.remoteStore):t==="acknowledged"||t==="rejected"?(vl(i,e,n||null),_l(i,e),function(l,c){K(K(l).mutationQueue).On(c)}(i.localStore,e)):q(),await Kt(i,s)):L("SyncEngine","Cannot apply mutation batch with id: "+e)}async function wI(r,e){const t=K(r);if(so(t),Il(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await ph(t,n.toArray());t.Qa=!0,await Da(t.remoteStore,!0);for(const s of i)io(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const n=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then(()=>(nr(t,o),Zn(t.localStore,o,!0))),er(t.remoteStore,o)}),await i,await ph(t,n),function(o){const l=K(o);l.Na.forEach((c,h)=>{er(l.remoteStore,h)}),l.La.pr(),l.Na=new Map,l.Oa=new ae($.comparator)}(t),t.Qa=!1,await Da(t.remoteStore,!1)}}async function ph(r,e,t){const n=K(r),i=[],s=[];for(const o of e){let l;const c=n.Ma.get(o);if(c&&c.length!==0){l=await Rs(n.localStore,Ke(c[0]));for(const h of c){const f=n.Fa.get(h),p=await yI(n,f);p.snapshot&&s.push(p.snapshot)}}else{const h=await Xf(n.localStore,o);l=await Rs(n.localStore,h),await yl(n,_p(h),o,!1,l.resumeToken)}i.push(l)}return n.Ca.d_(s),i}function _p(r){return sf(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function II(r){return function(t){return K(K(t).persistence).Qi()}(K(r).localStore)}async function EI(r,e,t,n){const i=K(r);if(i.Qa)return void L("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await Zf(i.localStore,lf(s[0])),l=yi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",me.EMPTY_BYTE_STRING);await Kt(i,o,l);break}case"rejected":await Zn(i.localStore,e,!0),nr(i,e,n);break;default:q()}}async function bI(r,e,t){const n=so(r);if(n.Qa){for(const i of e){if(n.Ma.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){L("SyncEngine","Adding an already active target "+i);continue}const s=await Xf(n.localStore,i),o=await Rs(n.localStore,s);await yl(n,_p(s),o.targetId,!1,o.resumeToken),io(n.remoteStore,o)}for(const i of t)n.Ma.has(i)&&await Zn(n.localStore,i,!1).then(()=>{er(n.remoteStore,i),nr(n,i)}).catch(zt)}}function so(r){const e=K(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=mp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hI.bind(null,e),e.Ca.d_=eI.bind(null,e.eventManager),e.Ca.$a=tI.bind(null,e.eventManager),e}function Il(r){const e=K(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fI.bind(null,e),e}class li{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=no(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Qf(this.persistence,new Hf,e.initialUser,this.serializer)}Ga(e){return new Kf(to.Zr,this.serializer)}Wa(e){return new tp}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}li.provider={build:()=>new li};class vp extends li{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Il(this.Ja.syncEngine),await cr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Qf(this.persistence,new Hf,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new hw(n,e.asyncQueue,t)}Ha(e,t){const n=new z_(t,this.persistence);return new $_(e.asyncQueue,n)}Ga(e){const t=Wf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new ll(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,np(),ls(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new tp}}class TI extends vp{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Qo&&(this.sharedClientState.syncEngine={no:vI.bind(null,t),ro:EI.bind(null,t),io:bI.bind(null,t),Qi:II.bind(null,t),eo:_I.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await wI(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=np();if(!Qo.D(t))throw new U(N.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Wf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Qo(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ci{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>fh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=gI.bind(null,this.syncEngine),await Da(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Zw}()}createDatastore(e){const t=no(e.databaseInfo.databaseId),n=function(s){return new Mw(s)}(e.databaseInfo);return function(s,o,l,c){return new jw(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,o,l){return new Bw(n,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>fh(this.syncEngine,t,0),function(){return lh.D()?new lh:new Vw}())}createSyncEngine(e,t){return function(i,s,o,l,c,h,f){const p=new sI(i,s,o,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=K(i);L("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await vi(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ci.provider={build:()=>new ci};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):pe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=Nd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{L("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(L("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=gl(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Yo(r,e){r.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Jf(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function gh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await SI(r);L("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>ch(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>ch(e.remoteStore,i)),r._onlineComponents=e}async function SI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===N.FAILED_PRECONDITION||i.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Xr("Error using user provided cache. Falling back to memory cache: "+t),await Yo(r,new li)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Yo(r,new li);return r._offlineComponents}async function Ip(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await gh(r,r._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await gh(r,new ci))),r._onlineComponents}function AI(r){return Ip(r).then(e=>e.syncEngine)}async function Ep(r){const e=await Ip(r),t=e.eventManager;return t.onListen=oI.bind(null,e.syncEngine),t.onUnlisten=lI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cI.bind(null,e.syncEngine),t}function RI(r,e,t={}){const n=new tt;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,h){const f=new wp({next:y=>{f.Za(),o.enqueueAndForget(()=>hp(s,p));const x=y.docs.has(l);!x&&y.fromCache?h.reject(new U(N.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&y.fromCache&&c&&c.source==="server"?h.reject(new U(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new dp(Hs(l.path),f,{includeMetadataChanges:!0,_a:!0});return up(s,p)}(await Ep(r),r.asyncQueue,e,t,n)),n.promise}function CI(r,e,t={}){const n=new tt;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,h){const f=new wp({next:y=>{f.Za(),o.enqueueAndForget(()=>hp(s,p)),y.fromCache&&c.source==="server"?h.reject(new U(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new dp(l,f,{includeMetadataChanges:!0,_a:!0});return up(s,p)}(await Ep(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(r,e,t){if(!t)throw new U(N.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function PI(r,e,t,n){if(e===!0&&n===!0)throw new U(N.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function yh(r){if(!$.isDocumentKey(r))throw new U(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function _h(r){if($.isDocumentKey(r))throw new U(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function oo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":q()}function mt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new U(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oo(r);throw new U(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function kI(r,e){if(e<=0)throw new U(N.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bp((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class El{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new D_;switch(n.type){case"firstParty":return new O_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=mh.get(t);n&&(L("ComponentProvider","Removing Datastore"),mh.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new bn(this.firestore,e,this._query)}}class Fe{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class Lt extends bn{constructor(e,t,n){super(e,t,Hs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new $(e))}withConverter(e){return new Lt(this.firestore,e,this._path)}}function Ft(r,e,...t){if(r=Te(r),Tp("collection","path",e),r instanceof El){const n=ne.fromString(e,...t);return _h(n),new Lt(r,null,n)}{if(!(r instanceof Fe||r instanceof Lt))throw new U(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return _h(n),new Lt(r.firestore,null,n)}}function Xe(r,e,...t){if(r=Te(r),arguments.length===1&&(e=Nd.newId()),Tp("doc","path",e),r instanceof El){const n=ne.fromString(e,...t);return yh(n),new Fe(r,null,new $(n))}{if(!(r instanceof Fe||r instanceof Lt))throw new U(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return yh(n),new Fe(r.firestore,r instanceof Lt?r.converter:null,new $(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new rp(this,"async_queue_retry"),this.Vu=()=>{const n=ls();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=ls();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ls();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new tt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Gt(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(n);throw pe("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=pl.createAndSchedule(this,e,t,n,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class hr extends El{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new wh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wh(e),this._firestoreClient=void 0,await e}}}function xp(r,e,t){t||(t="(default)");const n=Ga(r,"firestore");if(n.isInitialized(t)){const i=n.getImmediate({identifier:t}),s=n.getOptions(t);if(Jr(s,e))return i;throw new U(N.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new U(N.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function bl(r){if(r._terminated)throw new U(N.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||DI(r),r._firestoreClient}function DI(r){var e,t,n;const i=r._freezeSettings(),s=function(l,c,h,f){return new uv(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,bp(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new xI(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rr(me.fromBase64String(e))}catch(t){throw new U(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new rr(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=/^__.*__$/;class NI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new vt(e,this.data,this.fieldMask,t,this.fieldTransforms):new lr(e,this.data,t,this.fieldTransforms)}}class Sp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new vt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ap(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Al{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Al(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ds(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Ap(this.Cu)&&VI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class OI{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||no(e)}Qu(e,t,n,i=!1){return new Al({Cu:e,methodName:t,qu:n,path:ue.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rl(r){const e=r._freezeSettings(),t=no(r._databaseId);return new OI(r._databaseId,!!e.ignoreUndefinedProperties,t)}function MI(r,e,t,n,i,s={}){const o=r.Qu(s.merge||s.mergeFields?2:0,e,t,i);Cl("Data must be an object, but it was:",o,n);const l=Rp(n,o);let c,h;if(s.merge)c=new $e(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const y=Oa(e,p,t);if(!o.contains(y))throw new U(N.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Pp(f,y)||f.push(y)}c=new $e(f),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new NI(new ke(l),c,h)}class wi extends Tl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wi}}function LI(r,e,t,n){const i=r.Qu(1,e,t);Cl("Data must be an object, but it was:",i,n);const s=[],o=ke.empty();In(n,(c,h)=>{const f=Pl(e,c,t);h=Te(h);const p=i.Nu(f);if(h instanceof wi)s.push(f);else{const y=Ii(h,p);y!=null&&(s.push(f),o.set(f,y))}});const l=new $e(s);return new Sp(o,l,i.fieldTransforms)}function FI(r,e,t,n,i,s){const o=r.Qu(1,e,t),l=[Oa(e,n,t)],c=[i];if(s.length%2!=0)throw new U(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Oa(e,s[y])),c.push(s[y+1]);const h=[],f=ke.empty();for(let y=l.length-1;y>=0;--y)if(!Pp(h,l[y])){const x=l[y];let P=c[y];P=Te(P);const k=o.Nu(x);if(P instanceof wi)h.push(x);else{const C=Ii(P,k);C!=null&&(h.push(x),f.set(x,C))}}const p=new $e(h);return new Sp(f,p,o.fieldTransforms)}function jI(r,e,t,n=!1){return Ii(t,r.Qu(n?4:3,e))}function Ii(r,e){if(Cp(r=Te(r)))return Cl("Unsupported field value:",e,r),Rp(r,e);if(r instanceof Tl)return function(n,i){if(!Ap(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const s=[];let o=0;for(const l of n){let c=Ii(l,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=Te(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Av(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=he.fromDate(n);return{timestampValue:Xn(i.serializer,s)}}if(n instanceof he){const s=new he(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xn(i.serializer,s)}}if(n instanceof xl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof rr)return{bytesValue:Tf(i.serializer,n._byteString)};if(n instanceof Fe){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:il(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Sl)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Za(l.serializer,c)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${oo(n)}`)}(r,e)}function Rp(r,e){const t={};return Kd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):In(r,(n,i)=>{const s=Ii(i,e.Mu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function Cp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof he||r instanceof xl||r instanceof rr||r instanceof Fe||r instanceof Tl||r instanceof Sl)}function Cl(r,e,t){if(!Cp(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=oo(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function Oa(r,e,t){if((e=Te(e))instanceof ao)return e._internalPath;if(typeof e=="string")return Pl(r,e);throw Ds("Field path arguments must be of type string or ",r,!1,void 0,t)}const UI=new RegExp("[~\\*/\\[\\]]");function Pl(r,e,t){if(e.search(UI)>=0)throw Ds(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new ao(...e.split("."))._internalPath}catch{throw Ds(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ds(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${n}`),o&&(c+=` in document ${i}`),c+=")"),new U(N.INVALID_ARGUMENT,l+r+c)}function Pp(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(kl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class BI extends kp{data(){return super.data()}}function kl(r,e){return typeof e=="string"?Pl(r,e):e instanceof ao?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new U(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dl{}class Dp extends Dl{}function ln(r,e,...t){let n=[];e instanceof Dl&&n.push(e),n=n.concat(t),function(s){const o=s.filter(c=>c instanceof Vl).length,l=s.filter(c=>c instanceof lo).length;if(o>1||o>0&&l>0)throw new U(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class lo extends Dp{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new lo(e,t,n)}_apply(e){const t=this._parse(e);return Vp(e._query,t),new bn(e.firestore,e.converter,Ea(e._query,t))}_parse(e){const t=Rl(e.firestore);return function(s,o,l,c,h,f,p){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new U(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Eh(p,f);const x=[];for(const P of p)x.push(Ih(c,s,P));y={arrayValue:{values:x}}}else y=Ih(c,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Eh(p,f),y=jI(l,o,p,f==="in"||f==="not-in");return Z.create(h,f,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function zI(r,e,t){const n=e,i=kl("where",r);return lo._create(i,n,t)}class Vl extends Dl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Vl(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)Vp(o,c),o=Ea(o,c)}(e._query,t),new bn(e.firestore,e.converter,Ea(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Nl extends Dp{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Nl(e,t,n)}_apply(e){return new bn(e.firestore,e.converter,Es(e._query,this._limit,this._limitType))}}function cn(r){return kI("limit",r),Nl._create("limit",r,"F")}function Ih(r,e,t){if(typeof(t=Te(t))=="string"){if(t==="")throw new U(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!of(e)&&t.indexOf("/")!==-1)throw new U(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ne.fromString(t));if(!$.isDocumentKey(n))throw new U(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ii(r,new $(n))}if(t instanceof Fe)return ii(r,t._key);throw new U(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oo(t)}.`)}function Eh(r,e){if(!Array.isArray(r)||r.length===0)throw new U(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Vp(r,e){const t=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new U(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class GI{convertValue(e,t="none"){switch(gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return In(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(o=>ce(o.doubleValue));return new Sl(s)}convertGeoPoint(e){return new xl(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ja(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ni(e));default:return null}}convertTimestamp(e){const t=gt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ne.fromString(e);W(Nf(n));const i=new pn(n.get(1),n.get(3)),s=new $(n.popFirst(5));return i.isEqual(t)||pe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Np extends kp{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(kl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class cs extends Np{data(e={}){return super.data(e)}}class KI{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ur(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new cs(this._firestore,this._userDataWriter,n.key,n,new Ur(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new cs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ur(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new cs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ur(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:WI(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function WI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(r){r=mt(r,Fe);const e=mt(r.firestore,hr);return RI(bl(e),r._key).then(t=>QI(e,r,t))}class Op extends GI{constructor(e){super(),this.firestore=e}convertBytes(e){return new rr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,t)}}function jt(r){r=mt(r,bn);const e=mt(r.firestore,hr),t=bl(e),n=new Op(e);return $I(r._query),CI(t,r._query).then(i=>new KI(e,n,r,i))}function Ol(r,e,t){r=mt(r,Fe);const n=mt(r.firestore,hr),i=qI(r.converter,e);return Ml(n,[MI(Rl(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,Oe.none())])}function co(r,e,t,...n){r=mt(r,Fe);const i=mt(r.firestore,hr),s=Rl(i);let o;return o=typeof(e=Te(e))=="string"||e instanceof ao?FI(s,"updateDoc",r._key,e,t,n):LI(s,"updateDoc",r._key,e),Ml(i,[o.toMutation(r._key,Oe.exists(!0))])}function HI(r){return Ml(mt(r.firestore,hr),[new Xs(r._key,Oe.none())])}function Ml(r,e){return function(n,i){const s=new tt;return n.asyncQueue.enqueueAndForget(async()=>uI(await AI(n),i,s)),s.promise}(bl(r),e)}function QI(r,e,t){const n=t.docs.get(e._key),i=new Op(r);return new Np(r,i,e._key,n,new Ur(t.hasPendingWrites,t.fromCache),e.converter)}class JI{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=eE(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function YI(r){return new JI(r)}class XI{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ci.provider,this._offlineComponentProvider={build:t=>new vp(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class ZI{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ci.provider,this._offlineComponentProvider={build:t=>new TI(t,e==null?void 0:e.cacheSizeBytes)}}}function eE(r){return new XI(void 0)}function tE(){return new ZI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(){return new wi("deleteField")}(function(e,t=!0){(function(i){ar=i})(or),qn(new dn("firestore",(n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),l=new hr(new V_(n.getProvider("auth-internal")),new L_(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new U(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pn(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ot(gu,"4.7.3",e),Ot(gu,"4.7.3","esm2017")})();var rE="firebase",iE="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(rE,iE,"app");function Mp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sE=Mp,Lp=new di("auth","Firebase",Mp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new $a("@firebase/auth");function oE(r,...e){Vs.logLevel<=X.WARN&&Vs.warn(`Auth (${or}): ${r}`,...e)}function us(r,...e){Vs.logLevel<=X.ERROR&&Vs.error(`Auth (${or}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(r,...e){throw Fl(r,...e)}function Ye(r,...e){return Fl(r,...e)}function Ll(r,e,t){const n=Object.assign(Object.assign({},sE()),{[e]:t});return new di("auth","Firebase",n).create(e,{appName:r.name})}function un(r){return Ll(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function aE(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&it(r,"argument-error"),Ll(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fl(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Lp.create(r,...e)}function Q(r,e,...t){if(!r)throw Fl(e,...t)}function ut(r){const e="INTERNAL ASSERTION FAILED: "+r;throw us(e),new Error(e)}function yt(r,e){r||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function lE(){return bh()==="http:"||bh()==="https:"}function bh(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lE()||fy()||"connection"in navigator)?navigator.onLine:!0}function uE(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.shortDelay=e,this.longDelay=t,yt(t>e,"Short delay should be less than long delay!"),this.isMobile=uy()||py()}get(){return cE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(r,e){yt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new Ei(3e4,6e4);function Ul(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function dr(r,e,t,n,i={}){return jp(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const l=fi(Object.assign({key:r.config.apiKey},o)).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:c},s);return dy()||(h.referrerPolicy="no-referrer"),Fp.fetch()(Up(r,r.config.apiHost,t,l),h)})}async function jp(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},hE),e);try{const i=new pE(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ji(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(r,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ji(r,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ji(r,"user-disabled",o);const f=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ll(r,f,h);it(r,f)}}catch(i){if(i instanceof _t)throw i;it(r,"network-request-failed",{message:String(i)})}}async function fE(r,e,t,n,i={}){const s=await dr(r,e,t,n,i);return"mfaPendingCredential"in s&&it(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Up(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?jl(r.config,i):`${r.config.apiScheme}://${i}`}class pE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ye(this.auth,"network-request-failed")),dE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ji(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Ye(r,e,n);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(r,e){return dr(r,"POST","/v1/accounts:delete",e)}async function Bp(r,e){return dr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mE(r,e=!1){const t=Te(r),n=await t.getIdToken(e),i=Bl(n);Q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:Qr(Xo(i.auth_time)),issuedAtTime:Qr(Xo(i.iat)),expirationTime:Qr(Xo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xo(r){return Number(r)*1e3}function Bl(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return us("JWT malformed, contained fewer than 3 sections"),null;try{const i=yd(t);return i?JSON.parse(i):(us("Failed to decode base64 JWT payload"),null)}catch(i){return us("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Th(r){const e=Bl(r);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof _t&&yE(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function yE({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qr(this.lastLoginAt),this.creationTime=Qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(r){var e;const t=r.auth,n=await r.getIdToken(),i=await ui(r,Bp(t,{idToken:n}));Q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$p(s.providerUserInfo):[],l=wE(r.providerData,o),c=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new La(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function vE(r){const e=Te(r);await Ns(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wE(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function $p(r){return r.map(e=>{var{providerId:t}=e,n=ja(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(r,e){const t=await jp(r,{},async()=>{const n=fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=Up(r,i,"/v1/token",`key=${s}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Fp.fetch()(o,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function EE(r,e){return dr(r,"POST","/v2/accounts:revokeToken",Ul(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Th(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=Th(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await IE(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new $n;return n&&(Q(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $n,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(r,e){Q(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ht{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=ja(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _E(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new La(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ui(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mE(this,e)}reload(){return vE(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ns(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await ui(this,gE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,l,c,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,y=(i=t.email)!==null&&i!==void 0?i:void 0,x=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,O=(h=t.createdAt)!==null&&h!==void 0?h:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:z,isAnonymous:G,providerData:B,stsTokenManager:b}=t;Q(M&&b,e,"internal-error");const w=$n.fromJSON(this.name,b);Q(typeof M=="string",e,"internal-error"),St(p,e.name),St(y,e.name),Q(typeof z=="boolean",e,"internal-error"),Q(typeof G=="boolean",e,"internal-error"),St(x,e.name),St(P,e.name),St(k,e.name),St(C,e.name),St(O,e.name),St(F,e.name);const I=new ht({uid:M,auth:e,email:y,emailVerified:z,displayName:p,isAnonymous:G,photoURL:P,phoneNumber:x,tenantId:k,stsTokenManager:w,createdAt:O,lastLoginAt:F});return B&&Array.isArray(B)&&(I.providerData=B.map(v=>Object.assign({},v))),C&&(I._redirectEventId=C),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new $n;i.updateFromServerResponse(t);const s=new ht({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Ns(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$p(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new $n;l.updateFromIdToken(n);const c=new ht({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new La(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=new Map;function dt(r){yt(r instanceof Function,"Expected a class definition");let e=xh.get(r);return e?(yt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,xh.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zp.type="NONE";const Sh=zp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(r,e,t){return`firebase:${r}:${e}:${t}`}class zn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=hs(this.userKey,i.apiKey,s),this.fullPersistenceKey=hs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new zn(dt(Sh),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||dt(Sh);const o=hs(n,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(o);if(f){const p=ht._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new zn(s,e,n):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new zn(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qp(e))return"Blackberry";if(Jp(e))return"Webos";if(qp(e))return"Safari";if((e.includes("chrome/")||Kp(e))&&!e.includes("edge/"))return"Chrome";if(Hp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Gp(r=ve()){return/firefox\//i.test(r)}function qp(r=ve()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kp(r=ve()){return/crios\//i.test(r)}function Wp(r=ve()){return/iemobile/i.test(r)}function Hp(r=ve()){return/android/i.test(r)}function Qp(r=ve()){return/blackberry/i.test(r)}function Jp(r=ve()){return/webos/i.test(r)}function $l(r=ve()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function bE(r=ve()){var e;return $l(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TE(){return gy()&&document.documentMode===10}function Yp(r=ve()){return $l(r)||Hp(r)||Jp(r)||Qp(r)||/windows phone/i.test(r)||Wp(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(r,e=[]){let t;switch(r){case"Browser":t=Ah(ve());break;case"Worker":t=`${Ah(ve())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${or}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(r,e={}){return dr(r,"GET","/v2/passwordPolicy",Ul(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=6;class RE{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:AE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rh(this),this.idTokenSubscription=new Rh(this),this.beforeStateQueue=new xE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dt(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bp(this,{idToken:e}),n=await ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ns(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(un(this));const t=e?Te(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SE(this),t=new RE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new di("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await EE(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dt(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&oE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function uo(r){return Te(r)}class Rh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iy(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PE(r){zl=r}function kE(r){return zl.loadJS(r)}function DE(){return zl.gapiScript}function VE(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(r,e){const t=Ga(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Jr(s,e??{}))return i;it(i,"already-initialized")}return t.initialize({options:e})}function OE(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(dt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function ME(r,e,t){const n=uo(r);Q(n._canInitEmulator,n,"emulator-config-failed"),Q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=Zp(e),{host:o,port:l}=LE(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${s}//${o}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),FE()}function Zp(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function LE(r){const e=Zp(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Ch(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Ch(o)}}}function Ch(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function FE(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(r,e){return fE(r,"POST","/v1/accounts:signInWithIdp",Ul(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="http://localhost";class wn extends eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=ja(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new wn(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Gn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Gn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gn(e,t)}buildRequest(){const e={requestUri:jE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Gl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends bi{constructor(){super("facebook.com")}static credential(e){return wn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wn._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return at.credential(t,n)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends bi{constructor(){super("github.com")}static credential(e){return wn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends bi{constructor(){super("twitter.com")}static credential(e,t){return wn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Pt.credential(t,n)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await ht._fromIdTokenResponse(e,n,i),o=Ph(n);return new sr({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Ph(n);return new sr({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Ph(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends _t{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Os(e,t,n,i)}}function tg(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(r,s,e,n):s})}async function UE(r,e,t=!1){const n=await ui(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return sr._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(r,e,t=!1){const{auth:n}=r;if(lt(n.app))return Promise.reject(un(n));const i="reauthenticate";try{const s=await ui(r,tg(n,i,e,r),t);Q(s.idToken,n,"internal-error");const o=Bl(s.idToken);Q(o,n,"internal-error");const{sub:l}=o;return Q(r.uid===l,n,"user-mismatch"),sr._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&it(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(r,e,t=!1){if(lt(r.app))return Promise.reject(un(r));const n="signIn",i=await tg(r,n,e),s=await sr._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function zE(r,e,t,n){return Te(r).onIdTokenChanged(e,t,n)}function GE(r,e,t){return Te(r).beforeAuthStateChanged(e,t)}function qE(r,e,t,n){return Te(r).onAuthStateChanged(e,t,n)}function KE(r){return Te(r).signOut()}const Ms="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ms,"1"),this.storage.removeItem(Ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=1e3,HE=10;class rg extends ng{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);TE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,HE):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},WE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rg.type="LOCAL";const QE=rg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig extends ng{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ig.type="SESSION";const sg=ig;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new ho(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(o).map(async h=>h(t.origin,s)),c=await JE(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ho.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const h=ql("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function XE(r){nt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function ZE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eb(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function tb(){return og()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="firebaseLocalStorageDb",nb=1,Ls="firebaseLocalStorage",lg="fbase_key";class Ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fo(r,e){return r.transaction([Ls],e?"readwrite":"readonly").objectStore(Ls)}function rb(){const r=indexedDB.deleteDatabase(ag);return new Ti(r).toPromise()}function Fa(){const r=indexedDB.open(ag,nb);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Ls,{keyPath:lg})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Ls)?e(n):(n.close(),await rb(),e(await Fa()))})})}async function kh(r,e,t){const n=fo(r,!0).put({[lg]:e,value:t});return new Ti(n).toPromise()}async function ib(r,e){const t=fo(r,!1).get(e),n=await new Ti(t).toPromise();return n===void 0?null:n.value}function Dh(r,e){const t=fo(r,!0).delete(e);return new Ti(t).toPromise()}const sb=800,ob=3;class cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>ob)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ho._getInstance(tb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ZE(),!this.activeServiceWorker)return;this.sender=new YE(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fa();return await kh(e,Ms,"1"),await Dh(e,Ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>kh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>ib(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fo(i,!1).getAll();return new Ti(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cg.type="LOCAL";const ab=cg;new Ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(r,e){return e?dt(e):(Q(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lb(r){return $E(r.auth,new Kl(r),r.bypassAuthState)}function cb(r){const{auth:e,user:t}=r;return Q(t,e,"internal-error"),BE(t,new Kl(r),r.bypassAuthState)}async function ub(r){const{auth:e,user:t}=r;return Q(t,e,"internal-error"),UE(t,new Kl(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lb;case"linkViaPopup":case"linkViaRedirect":return ub;case"reauthViaPopup":case"reauthViaRedirect":return cb;default:it(this.auth,"internal-error")}}resolve(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=new Ei(2e3,1e4);async function db(r,e,t){if(lt(r.app))return Promise.reject(Ye(r,"operation-not-supported-in-this-environment"));const n=uo(r);aE(r,e,Gl);const i=ug(n,t);return new sn(n,"signInViaPopup",e,i).executeNotNull()}class sn extends hg{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");const e=ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hb.get())};e()}}sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="pendingRedirect",ds=new Map;class pb extends hg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ds.get(this.auth._key());if(!e){try{const n=await gb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ds.set(this.auth._key(),e)}return this.bypassAuthState||ds.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gb(r,e){const t=_b(e),n=yb(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function mb(r,e){ds.set(r._key(),e)}function yb(r){return dt(r._redirectPersistence)}function _b(r){return hs(fb,r.config.apiKey,r.name)}async function vb(r,e,t=!1){if(lt(r.app))return Promise.reject(un(r));const n=uo(r),i=ug(n,e),o=await new pb(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=10*60*1e3;class Ib{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Eb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!dg(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vh(e))}saveEventToCache(e){this.cachedEventUids.add(Vh(e)),this.lastProcessedEventTime=Date.now()}}function Vh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function dg({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Eb(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dg(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(r,e={}){return dr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xb=/^https?/;async function Sb(r){if(r.config.emulator)return;const{authorizedDomains:e}=await bb(r);for(const t of e)try{if(Ab(t))return}catch{}it(r,"unauthorized-domain")}function Ab(r){const e=Ma(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!xb.test(t))return!1;if(Tb.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=new Ei(3e4,6e4);function Nh(){const r=nt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Cb(r){return new Promise((e,t)=>{var n,i,s;function o(){Nh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nh(),t(Ye(r,"network-request-failed"))},timeout:Rb.get()})}if(!((i=(n=nt().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nt().gapi)===null||s===void 0)&&s.load)o();else{const l=VE("iframefcb");return nt()[l]=()=>{gapi.load?o():t(Ye(r,"network-request-failed"))},kE(`${DE()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw fs=null,e})}let fs=null;function Pb(r){return fs=fs||Cb(r),fs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=new Ei(5e3,15e3),Db="__/auth/iframe",Vb="emulator/auth/iframe",Nb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ob=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mb(r){const e=r.config;Q(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?jl(e,Vb):`https://${r.config.authDomain}/${Db}`,n={apiKey:e.apiKey,appName:r.name,v:or},i=Ob.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${fi(n).slice(1)}`}async function Lb(r){const e=await Pb(r),t=nt().gapi;return Q(t,r,"internal-error"),e.open({where:document.body,url:Mb(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nb,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=Ye(r,"network-request-failed"),l=nt().setTimeout(()=>{s(o)},kb.get());function c(){nt().clearTimeout(l),i(n)}n.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jb=500,Ub=600,Bb="_blank",$b="http://localhost";class Oh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zb(r,e,t,n=jb,i=Ub){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Fb),{width:n.toString(),height:i.toString(),top:s,left:o}),h=ve().toLowerCase();t&&(l=Kp(h)?Bb:t),Gp(h)&&(e=e||$b,c.scrollbars="yes");const f=Object.entries(c).reduce((y,[x,P])=>`${y}${x}=${P},`,"");if(bE(h)&&l!=="_self")return Gb(e||"",l),new Oh(null);const p=window.open(e||"",l,f);Q(p,r,"popup-blocked");try{p.focus()}catch{}return new Oh(p)}function Gb(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="__/auth/handler",Kb="emulator/auth/handler",Wb=encodeURIComponent("fac");async function Mh(r,e,t,n,i,s){Q(r.config.authDomain,r,"auth-domain-config-required"),Q(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:or,eventId:i};if(e instanceof Gl){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",wy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof bi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await r._getAppCheckToken(),h=c?`#${Wb}=${encodeURIComponent(c)}`:"";return`${Hb(r)}?${fi(l).slice(1)}${h}`}function Hb({config:r}){return r.emulator?jl(r,Kb):`https://${r.authDomain}/${qb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="webStorageSupport";class Qb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sg,this._completeRedirectFn=vb,this._overrideRedirectResult=mb}async _openPopup(e,t,n,i){var s;yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Mh(e,t,n,Ma(),i);return zb(e,o,ql())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Mh(e,t,n,Ma(),i);return XE(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(yt(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Lb(e),n=new Ib(e);return t.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zo,{type:Zo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zo];o!==void 0&&t(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yp()||qp()||$l()}}const Jb=Qb;var Lh="@firebase/auth",Fh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zb(r){qn(new dn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xp(r)},h=new CE(n,i,s,c);return OE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),qn(new dn("auth-internal",e=>{const t=uo(e.getProvider("auth").getImmediate());return(n=>new Yb(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Lh,Fh,Xb(r)),Ot(Lh,Fh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=5*60,tT=vd("authIdTokenMaxAge")||eT;let jh=null;const nT=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>tT)return;const i=t==null?void 0:t.token;jh!==i&&(jh=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rT(r=xd()){const e=Ga(r,"auth");if(e.isInitialized())return e.getImmediate();const t=NE(r,{popupRedirectResolver:Jb,persistence:[ab,QE,sg]}),n=vd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=nT(s.toString());GE(t,o,()=>o(t.currentUser)),zE(t,l=>o(l))}}const i=ly("auth");return i&&ME(t,`http://${i}`),t}function iT(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}PE({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Ye("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",iT().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zb("Browser");const sT={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_URL:"https://api.blindtab.app/api",VITE_APP_ENV:"production",VITE_ENABLE_ANALYTICS:"true",VITE_ENABLE_DEBUG_TOOLS:"false",VITE_FIREBASE_API_KEY:"AIzaSyAtDg3VWHMBGepQ3Cu-G6A_9_CXGKNlPxE",VITE_FIREBASE_APP_ID:"1:205665942654:web:a23c572fb20d4ed14eec2f",VITE_FIREBASE_AUTH_DOMAIN:"blindtab-db.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"205665942654",VITE_FIREBASE_PROJECT_ID:"blindtab-db",VITE_FIREBASE_STORAGE_BUCKET:"blindtab-db.appspot.com",VITE_LOG_LEVEL:"error"},Ne={SONGS:"songs",TAGS:"tags",CONFIG:"config",USER_SONGS:"user_songs"},fg=window.location.hostname.includes("-projects.vercel.app")||window.location.hostname.includes("-staging.vercel.app")||window.location.hostname.includes("-preview.vercel.app"),oT={apiKey:"AIzaSyAtDg3VWHMBGepQ3Cu-G6A_9_CXGKNlPxE",authDomain:"blindtab-db.firebaseapp.com",projectId:"blindtab-db",storageBucket:"blindtab-db.appspot.com",messagingSenderId:"205665942654",appId:"1:205665942654:web:a23c572fb20d4ed14eec2f"},aT=new at,lT=()=>{const r=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID"];for(const e of r)if(!sT[e])return console.error(`Missing required environment variable: ${e}`),!1;return!0},cT=lT(),hi=cT?Td(oT):null,_e=hi?xp(hi,{localCache:YI({tabManager:tE()})}):null,hn=hi?rT(hi):null;hi&&_e&&(window._firebaseInitialized=!0,window._firestoreInstance=_e,window.addEventListener("error",r=>{r&&r.error&&(r.error.message&&r.error.message.includes("WebChannel transport errored")||r.message&&r.message.includes("WebChannel transport errored"))&&(console.log("Caught WebChannel transport error, attempting recovery"),typeof window.fixFirebaseConnection=="function"&&window.fixFirebaseConnection())}));const uT=()=>{var r;return sessionStorage.getItem("has_dev_access")==="true"||((r=hn==null?void 0:hn.currentUser)==null?void 0:r.email)==="austen.crowder@gmail.com"},hT=async()=>{try{console.log("[Firebase] Testing Firestore connection...");const r=ln(Ft(_e,"firebase_test"),cn(1));return await jt(r),console.log("[Firebase] Firestore connection test passed"),!0}catch(r){return console.error("[Firebase] Firestore connection test failed:",r),!1}};hT().then(r=>{r?console.log("[Firebase] Firestore is ready to use"):console.warn("[Firebase] Firestore connection failed, check network and Firebase settings")});S.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  color: #e0e0e0;
  font-family: monospace;
`;S.h3`
  margin-top: 0;
  margin-bottom: 12px;
  color: #61dafb;
`;S.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;S.button`
  background-color: #0078d4;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  
  &:hover {
    background-color: #106ebe;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;S.div`
  margin-top: 12px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${r=>r.$type==="success"?"#10893e33":r.$type==="error"?"#d1314733":"#0078d433"};
  border-left: 4px solid ${r=>r.$type==="success"?"#10893e":r.$type==="error"?"#d13147":"#0078d4"};
`;S.div`
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: #2d2d2d;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;S.button`
  background-color: #d13147;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #a82636;
  }
`;const pg=V.createContext(null),po=()=>{const r=V.useContext(pg);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r};function dT({children:r}){const[e,t]=V.useState(null),[n,i]=V.useState(!0),[s,o]=V.useState(null);V.useEffect(()=>{const p=qE(hn,y=>{t(y),i(!1)},y=>{console.error("[Auth] Auth state change error:",y),o(y),i(!1)});return()=>p()},[]);const l=async()=>{try{return(await db(hn,aT)).user}catch(p){throw console.error("[Auth] Google sign-in error:",p),p.code==="auth/unauthorized-domain"&&(console.warn("[Auth] This domain is not authorized in Firebase. Add it in the Firebase Console -> Authentication -> Sign-in method -> Authorized domains"),console.warn("[Auth] Current domain:",window.location.hostname),window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?console.info("[Auth] For local development, please use the Firebase emulator with VITE_USE_FIREBASE_EMULATOR=true"):(window.location.hostname.includes("-projects.vercel.app")||window.location.hostname.includes("-staging.vercel.app")||window.location.hostname.includes("-preview.vercel.app"))&&(console.info("[Auth] For preview deployments, please add this domain to Firebase authorized domains list"),console.info("[Auth] Or use the production domain that is already authorized"))),p}},f={user:e,loading:n,error:s,signIn:async()=>{try{return await l()}catch(p){throw o(p instanceof Error?p:new Error("Failed to sign in")),p}},logout:async()=>{try{await KE(hn)}catch(p){throw o(p instanceof Error?p:new Error("Failed to sign out")),p}}};return g.jsx(pg.Provider,{value:f,children:r})}async function fT(r,e){try{const t=Xe(_e,Ne.USER_SONGS,r);(await ir(t)).exists()?await co(t,{[`songs.${e}`]:{songId:e,addedAt:new Date,playCount:0},updatedAt:new Date}):await Ol(t,{userId:r,songs:{[e]:{songId:e,addedAt:new Date,playCount:0}},createdAt:new Date,updatedAt:new Date}),console.log(`[UserSongs] Added song ${e} to user ${r}'s collection`)}catch(t){throw console.error("[UserSongs] Error adding song to user collection:",t),t}}async function pT(r,e){try{const t=Xe(_e,Ne.USER_SONGS,r),n=await ir(t);if(!n.exists()){console.warn(`[UserSongs] User ${r} does not have a song collection`);return}const i=n.data();if(!i.songs||!i.songs[e]){console.warn(`[UserSongs] Song ${e} not found in user ${r}'s collection`);return}await co(t,{[`songs.${e}`]:nE(),updatedAt:new Date}),console.log(`[UserSongs] Removed song ${e} from user ${r}'s collection`)}catch(t){throw console.error("[UserSongs] Error removing song from user collection:",t),t}}async function gT(r){try{const e=Xe(_e,Ne.USER_SONGS,r),t=await ir(e);return t.exists()?{id:t.id,...t.data()}:null}catch(e){throw console.error("[UserSongs] Error getting user song collection:",e),e}}async function mT(r,e){try{const t=Xe(_e,Ne.USER_SONGS,r),n=await ir(t);if(!n.exists()){console.warn(`[UserSongs] User ${r} does not have a song collection`);return}const i=n.data();if(!i.songs||!i.songs[e]){console.warn(`[UserSongs] Song ${e} not found in user ${r}'s collection`);return}const s={...i.songs[e],playCount:(i.songs[e].playCount||0)+1,lastPlayedAt:new Date};await co(t,{[`songs.${e}`]:s,updatedAt:new Date}),console.log(`[UserSongs] Updated play stats for song ${e} in user ${r}'s collection`)}catch(t){throw console.error("[UserSongs] Error updating song play stats:",t),t}}const Fs=[{id:"mock-song-1",title:"Twinkle Twinkle Little Star",artist:"Traditional",notes:"C C G G A A G F F E E D D C",difficulty:"beginner",tags:["children","classic","beginner"],lyrics:[{line:"Twinkle twinkle little star",chords:"C        G        C",position:0},{line:"How I wonder what you are",chords:"F        C        G",position:0},{line:"Up above the world so high",chords:"C        G        C",position:0},{line:"Like a diamond in the sky",chords:"F        C        G",position:0},{line:"Twinkle twinkle little star",chords:"C        G        C",position:0},{line:"How I wonder what you are",chords:"F        C        G",position:0}],createdAt:new Date,updatedAt:new Date,playCount:42,lastPlayed:new Date},{id:"mock-song-2",title:"Happy Birthday",artist:"Traditional",notes:"C C D C F E C C D C G F",difficulty:"beginner",tags:["celebration","classic","beginner"],lyrics:[{line:"Happy birthday to you",chords:"C C D C F E",position:0},{line:"Happy birthday to you",chords:"C C D C G F",position:0},{line:"Happy birthday dear friend",chords:"C C C A F E D",position:0},{line:"Happy birthday to you",chords:"B B A F G F",position:0}],createdAt:new Date,updatedAt:new Date,playCount:28,lastPlayed:new Date},{id:"mock-song-3",title:"Jingle Bells",artist:"James Lord Pierpont",notes:"E E E E E E E G C D E F F F F F E E E E D D E D G",difficulty:"intermediate",tags:["holiday","christmas","intermediate"],lyrics:[{line:"Dashing through the snow",chords:"E        A        E",position:0},{line:"In a one-horse open sleigh",chords:"B7       E        B7",position:0},{line:"O'er the fields we go",chords:"E        A        E",position:0},{line:"Laughing all the way",chords:"B7       E        B7",position:0},{line:"Bells on bobtails ring",chords:"E        A        E",position:0},{line:"Making spirits bright",chords:"B7       E        B7",position:0},{line:"What fun it is to ride and sing",chords:"E        A        E",position:0},{line:"A sleighing song tonight",chords:"B7       E        B7",position:0},{line:"Jingle bells, jingle bells",chords:"E        E        E E",position:0},{line:"Jingle all the way",chords:"E        A        B7",position:0},{line:"Oh what fun it is to ride",chords:"E        A        E",position:0},{line:"In a one-horse open sleigh, hey!",chords:"B7       E        B7 E",position:0}],createdAt:new Date,updatedAt:new Date,playCount:15,lastPlayed:new Date},{id:"mock-song-4",title:"Ode to Joy",artist:"Ludwig van Beethoven",notes:"E E F G G F E D C C D E E D D",difficulty:"intermediate",tags:["classical","beethoven","intermediate"],lyrics:[{line:"Joyful, joyful, we adore Thee",chords:"E E F G G F E D",position:0},{line:"God of glory, Lord of love",chords:"C C D E E D D",position:0},{line:"Hearts unfold like flowers before Thee",chords:"E E F G G F E D",position:0},{line:"Opening to the sun above",chords:"C C D E D C C",position:0}],createdAt:new Date,updatedAt:new Date,playCount:33,lastPlayed:new Date},{id:"mock-song-5",title:"Für Elise",artist:"Ludwig van Beethoven",notes:"E D# E D# E B D C A C E A B E G# B C",difficulty:"advanced",tags:["classical","beethoven","advanced"],lyrics:[{line:"First phrase",chords:"E D# E D# E B D C A",position:0},{line:"Second phrase",chords:"C E A B E G# B C",position:0},{line:"Third phrase",chords:"E D# E D# E B D C A",position:0},{line:"Fourth phrase",chords:"C E A B E C B A",position:0}],createdAt:new Date,updatedAt:new Date,playCount:19,lastPlayed:new Date}],yT={songs:{"mock-song-1":{addedAt:new Date},"mock-song-3":{addedAt:new Date},"mock-song-5":{addedAt:new Date}}},ea=()=>Fs,ta=()=>{const r=Object.keys(yT.songs);return Fs.filter(e=>r.includes(e.id))},gg=()=>{const r="production";if(["development","staging","production"].includes(r))return r;const e=window.location.hostname;return e.includes("localhost")||e.includes("127.0.0.1")?"development":e.includes("staging")||e.includes("test")||e.includes("dev")?"staging":"production"},_T={development:{apiUrl:"http://localhost:3000/api",databaseType:"local",storagePrefix:"blindtab_dev_",enableAnalytics:!1,logLevel:"debug",features:{tourEnabled:!0,editorEnabled:!0,importExportEnabled:!0,debugTools:!0}},staging:{apiUrl:"https://staging-api.blindtab.app/api",databaseType:"remote",storagePrefix:"blindtab_staging_",enableAnalytics:!0,logLevel:"info",features:{tourEnabled:!0,editorEnabled:!0,importExportEnabled:!0,debugTools:!0}},production:{apiUrl:"https://api.blindtab.app/api",databaseType:"remote",storagePrefix:"blindtab_",enableAnalytics:!0,logLevel:"error",features:{tourEnabled:!0,editorEnabled:!0,importExportEnabled:!0,debugTools:!1}}},vT=()=>{const r=gg();return console.log(`Running in ${r} environment`),_T[r]},Wl=gg(),wT=vT(),ft=Wl==="development",IT=Wl==="production";ft&&(console.log("Environment:",Wl),console.log("Config:",wT));const Yi=[{id:"pd-amazing-grace",title:"Amazing Grace",artist:"Traditional",key:"G",tags:["folk","traditional","hymn"],chords:[{name:"G",positions:[{string:6,fret:3},{string:5,fret:2},{string:4,fret:0},{string:3,fret:0},{string:2,fret:0},{string:1,fret:3}]},{name:"C",positions:[{string:5,fret:3},{string:4,fret:2},{string:3,fret:0},{string:2,fret:1},{string:1,fret:0}]},{name:"D",positions:[{string:4,fret:0},{string:3,fret:2},{string:2,fret:3},{string:1,fret:2}]},{name:"Em",positions:[{string:6,fret:0},{string:5,fret:2},{string:4,fret:2},{string:3,fret:0},{string:2,fret:0},{string:1,fret:0}]}],structure:[{type:"verse",content:`G       G        C        G
Amazing grace, how sweet the sound
G       D        G
That saved a wretch like me
G       G        C        G
I once was lost, but now am found
G       D        G
Was blind, but now I see`}],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),isPublic:!0},{id:"pd-auld-lang-syne",title:"Auld Lang Syne",artist:"Traditional Scottish",key:"D",tags:["folk","traditional","holiday"],chords:[{name:"D",positions:[{string:4,fret:0},{string:3,fret:2},{string:2,fret:3},{string:1,fret:2}]},{name:"G",positions:[{string:6,fret:3},{string:5,fret:2},{string:4,fret:0},{string:3,fret:0},{string:2,fret:0},{string:1,fret:3}]},{name:"A",positions:[{string:5,fret:0},{string:4,fret:2},{string:3,fret:2},{string:2,fret:2},{string:1,fret:0}]},{name:"Bm",positions:[{string:5,fret:2},{string:4,fret:4},{string:3,fret:4},{string:2,fret:3},{string:1,fret:2}]}],structure:[{type:"verse",content:`D       G        D        A
Should auld acquaintance be forgot
D       G        A        D
And never brought to mind?
D       G        D        A
Should auld acquaintance be forgot
D       G        A        D
And days of auld lang syne?`},{type:"chorus",content:`D       G        D        A
For auld lang syne, my dear
D       G        A        D
For auld lang syne
D       G        D        A
We'll take a cup of kindness yet
D       G        A        D
For auld lang syne`}],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),isPublic:!0},{id:"pd-greensleeves",title:"Greensleeves",artist:"Traditional English",key:"Am",tags:["folk","traditional","renaissance"],chords:[{name:"Am",positions:[{string:5,fret:0},{string:4,fret:2},{string:3,fret:2},{string:2,fret:1},{string:1,fret:0}]},{name:"G",positions:[{string:6,fret:3},{string:5,fret:2},{string:4,fret:0},{string:3,fret:0},{string:2,fret:0},{string:1,fret:3}]},{name:"F",positions:[{string:6,fret:1},{string:5,fret:3},{string:4,fret:3},{string:3,fret:2},{string:2,fret:1},{string:1,fret:1}]},{name:"E",positions:[{string:6,fret:0},{string:5,fret:2},{string:4,fret:2},{string:3,fret:1},{string:2,fret:0},{string:1,fret:0}]}],structure:[{type:"verse",content:`Am      G        F        E
Alas, my love, you do me wrong
Am      G        E        Am
To cast me off discourteously
Am      G        F        E
For I have loved you well and long
Am      G        E        Am
Delighted in your company`},{type:"chorus",content:`G       F        E        Am
Greensleeves was all my joy
G       F        E        Am
Greensleeves was my delight
G       F        E        Am
Greensleeves was my heart of gold
G       F        E        Am
And who but my lady Greensleeves`}],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),isPublic:!0}],mg=V.createContext(null),ET=()=>{const r=V.useContext(mg);if(!r)throw new Error("useSongs must be used within a SongProvider");return r},Tn=ET,bT=({children:r})=>{const[e,t]=V.useState([]),[n,i]=V.useState([]),[s,o]=V.useState(null),[l,c]=V.useState(!0),[h,f]=V.useState(null),[p]=V.useState(fg&&!0),{user:y}=po(),x=async()=>{try{if(c(!0),f(null),!y){console.log("[SongContext] Anonymous user, loading public domain songs only"),t(Yi),i([]),c(!1);return}let v=[];if(ft&&p){console.log("[SongContext] Using mock data (development mode)"),v=ea(),t(v),i(y?ta():[]),c(!1);return}console.log("[SongContext] Using standard Firestore SDK");try{const E=Ft(_e,Ne.SONGS);v=(await jt(E)).docs.map(_=>({id:_.id,..._.data()}))}catch(E){console.error("[SongContext] Firestore SDK failed:",E),ft&&(console.log("[SongContext] Falling back to mock data"),v=ea())}if(t(v),y)try{const E=await gT(y.uid);if(E){const T=Object.keys(E.songs),_=v.filter(se=>T.includes(se.id));i(_)}else i([])}catch(E){console.error("Error fetching user songs:",E),i(ft&&p?ta():[])}else i([])}catch(v){console.error("Error fetching songs:",v),f(v instanceof Error?v:new Error("Failed to fetch songs")),ft?(console.log("[SongContext] Using mock data after error"),t(ea()),i(y?ta():[])):(t([]),i([]))}finally{c(!1)}},P=async v=>{if(!y)throw new Error("User must be authenticated to add songs");try{const E=`song_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,T={...v,id:E,createdAt:new Date,updatedAt:new Date},{id:_,...se}=T;return await Ol(Xe(_e,Ne.SONGS,_),se),console.log("Song added successfully"),await x(),E}catch(E){throw console.error("Error adding song:",E),E}},k=async(v,E)=>{if(!y)throw new Error("User must be authenticated to update songs");try{const T=await ir(Xe(_e,Ne.SONGS,v));if(!T.exists())throw new Error(`Song with ID ${v} not found`);const se={...{id:T.id,...T.data()},...E,updatedAt:new Date},{id:je,...mo}=se;await co(Xe(_e,Ne.SONGS,v),mo),await x()}catch(T){throw console.error("Error updating song:",T),T}},C=async v=>{if(!y)throw new Error("User must be authenticated to delete songs");try{await HI(Xe(_e,Ne.SONGS,v)),await x()}catch(E){throw console.error("Error deleting song:",E),E}},O=async v=>{if(!y)throw new Error("User must be authenticated to select songs");await fT(y.uid,v),await x()},F=async v=>{if(!y)throw new Error("User must be authenticated to unselect songs");await pT(y.uid,v),await x()},M=v=>n.some(E=>E.id===v),z=async v=>{y&&await mT(y.uid,v)},G=async v=>{if(!y){const T=Yi.find(_=>_.id===v);if(T)return o(T),T;throw new Error(`Song with ID ${v} not found`)}const E=e.find(T=>T.id===v);if(!E)throw new Error(`Song with ID ${v} not found`);if(o(E),y)try{await z(v)}catch(T){console.error("Error updating play stats:",T)}return E},B={addSongToCollection:O,removeSongFromCollection:F,createNewSong:P,refreshSongList:x,deleteSongById:C,checkDatabaseConnection:async()=>!0};V.useEffect(()=>{b()},[y]);const b=async()=>{try{if(c(!0),f(null),!y){console.log("Loading public domain songs for anonymous user"),t(Yi),c(!1);return}const v=ln(Ft(_e,Ne.SONGS),zI("isPublic","==",!0),cn(50)),E=await jt(v),T=[];E.forEach(_=>{const se=_.data();T.push({...se,id:_.id})}),t(T)}catch(v){console.error("Error loading songs:",v),f(v instanceof Error?v:new Error("Failed to load songs"))}finally{c(!1)}},I={songs:e,userSongs:n,currentSong:s,isLoading:l,error:h,isPreviewMode:p,refreshSongs:x,addSong:P,updateSong:k,deleteSong:C,selectSong:O,unselectSong:F,setCurrentSong:o,isUserSong:M,updatePlayStats:z,playSong:G,...B,loadSongs:b,loadSong:async v=>{try{if(c(!0),f(null),v.startsWith("pd-")){const T=Yi.find(_=>_.id===v);if(T){o(T),c(!1);return}}if(!y)throw new Error("User must be authenticated to load non-public domain songs");const E=await ir(Xe(_e,Ne.SONGS,v));if(E.exists()){const T=E.data();o({...T,id:E.id})}else throw new Error(`Song with ID ${v} not found`)}catch(E){console.error("Error loading song:",E),f(E instanceof Error?E:new Error("Failed to load song"))}finally{c(!1)}}};return g.jsx(mg.Provider,{value:I,children:r})};S.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  color: #e0e0e0;
  font-family: monospace;
`;S.h3`
  margin-top: 0;
  margin-bottom: 12px;
  color: #61dafb;
`;S.div`
  display: flex;
  margin-bottom: 8px;
`;S.div`
  width: 180px;
  color: #9cdcfe;
`;S.div`
  flex: 1;
  word-break: break-all;
`;const TT=S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,xT=S.div`
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`,ST=S.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Vn=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Nn=S.label`
  font-weight: 600;
  color: var(--text-primary);
`,Nr=S.input`
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-secondary);
  color: var(--text-primary);
`,AT=S.textarea`
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  min-height: 200px;
  font-family: monospace;
`,RT=S.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,Uh=S.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${r=>r.$variant==="primary"?"var(--primary)":r.$variant==="danger"?"var(--error)":"var(--bg-secondary)"};
  color: ${r=>r.$variant?"white":"var(--text-primary)"};

  &:hover {
    opacity: 0.9;
  }
`;function yg({isOpen:r,onClose:e,songId:t,isNewSong:n=!1}){const{songs:i,createNewSong:s,updateSong:o}=Tn(),[l,c]=V.useState(""),[h,f]=V.useState(""),[p,y]=V.useState(""),[x,P]=V.useState(""),[k,C]=V.useState(""),[O,F]=V.useState(""),[M,z]=V.useState(!1),[G,B]=V.useState(null);V.useEffect(()=>{var I;if(r&&t&&!n){const v=i.find(E=>E.id===t);if(v){c(v.title),f(v.artist),y(v.key||""),P(((I=v.tempo)==null?void 0:I.toString())||""),C(v.timeSignature||"");const E=v.lyrics.sort((T,_)=>T.position-_.position).map(T=>T.chords?`[${T.chords}] ${T.line}`:T.line).join(`
`);F(E)}}else c(""),f(""),y(""),P(""),C(""),F("")},[r,t,n,i]);const b=I=>I.split(`
`).map((v,E)=>{const T=v.match(/^\[(.*?)\]/);return T?{line:v.replace(/^\[(.*?)\]\s*/,"").trim(),chords:T[1].trim(),position:E}:{line:v.trim(),chords:"",position:E}}),w=async I=>{I.preventDefault(),z(!0),B(null);try{const v={title:l,artist:h,key:p||null,tempo:x?parseInt(x,10):null,timeSignature:k||null,lyrics:b(O)};n?await s(v):t&&await o(t,v),e()}catch(v){console.error("Error saving song:",v),v instanceof Error&&v.message.includes("preview mode")?B("This feature is disabled in preview mode. Please use the full app to save songs."):B(v instanceof Error?v.message:"Failed to save song")}finally{z(!1)}};return r?g.jsx(TT,{onClick:e,children:g.jsx(xT,{onClick:I=>I.stopPropagation(),children:g.jsxs(ST,{onSubmit:w,children:[g.jsxs(Vn,{children:[g.jsx(Nn,{htmlFor:"title",children:"Title"}),g.jsx(Nr,{id:"title",value:l,onChange:I=>c(I.target.value),placeholder:"Enter song title",required:!0})]}),g.jsxs(Vn,{children:[g.jsx(Nn,{htmlFor:"artist",children:"Artist"}),g.jsx(Nr,{id:"artist",value:h,onChange:I=>f(I.target.value),placeholder:"Enter artist name",required:!0})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[g.jsxs(Vn,{children:[g.jsx(Nn,{htmlFor:"key",children:"Key"}),g.jsx(Nr,{id:"key",value:p,onChange:I=>y(I.target.value),placeholder:"e.g., C"})]}),g.jsxs(Vn,{children:[g.jsx(Nn,{htmlFor:"tempo",children:"Tempo (BPM)"}),g.jsx(Nr,{id:"tempo",type:"number",value:x,onChange:I=>P(I.target.value),placeholder:"e.g., 120"})]}),g.jsxs(Vn,{children:[g.jsx(Nn,{htmlFor:"timeSignature",children:"Time Signature"}),g.jsx(Nr,{id:"timeSignature",value:k,onChange:I=>C(I.target.value),placeholder:"e.g., 4/4"})]})]}),g.jsxs(Vn,{children:[g.jsx(Nn,{htmlFor:"lyrics",children:"Lyrics & Chords"}),g.jsx(AT,{id:"lyrics",value:O,onChange:I=>F(I.target.value),placeholder:`Enter lyrics with chords in brackets before words, e.g:
[Am] Here comes the sun
[C] Little darling
[G] It's been a long cold lonely winter`,required:!0})]}),G&&g.jsx("div",{style:{color:"var(--error)",marginTop:"1rem"},children:G.toString()}),g.jsxs(RT,{children:[g.jsx(Uh,{type:"button",onClick:e,children:"Cancel"}),g.jsx(Uh,{type:"submit",$variant:"primary",disabled:M,children:M?"Saving...":n?"Create Song":"Update Song"})]})]})})}):null}S.div`
  padding: 20px;
`;S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;S.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;S.h3`
  margin: 0 0 8px 0;
  color: #333;
`;S.p`
  margin: 0 0 16px 0;
  color: #666;
`;S.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;const CT=S.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${r=>r.variant==="danger"?"#ff4444":r.variant==="primary"?"#007AFF":"#f0f0f0"};
  color: ${r=>r.variant==="danger"||r.variant==="primary"?"white":"black"};
  
  &:hover {
    opacity: 0.9;
  }
`;S(CT)`
  margin-bottom: 20px;
`;S.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  color: #e0e0e0;
  font-family: monospace;
`;S.h3`
  margin-top: 0;
  margin-bottom: 12px;
  color: #61dafb;
`;S.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;S.label`
  font-size: 14px;
  color: #9cdcfe;
`;S.input`
  background-color: #2d2d2d;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 8px;
  color: white;
  font-family: monospace;
`;S.button`
  background-color: #0078d4;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-family: monospace;
  
  &:hover {
    background-color: #106ebe;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;S.div`
  padding: 8px;
  color: #d32f2f;
  background-color: #ffebee;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 14px;
`;S.div`
  padding: 8px;
  color: #2e7d32;
  background-color: #e8f5e9;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 14px;
`;S.div`
  background-color: #2d2d2d;
  border-radius: 4px;
  padding: 12px;
  margin-top: 16px;
`;const _g=V.createContext(void 0),PT=({children:r})=>{const[e,t]=V.useState(()=>{const i=localStorage.getItem("theme"),s=window.matchMedia("(prefers-color-scheme: dark)").matches;return i==="dark"||!i&&s});V.useEffect(()=>{e?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme")):(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme")),localStorage.setItem("theme",e?"dark":"light")},[e]);const n=()=>{t(i=>!i)};return g.jsx(_g.Provider,{value:{isDarkTheme:e,toggleTheme:n},children:r})},vg=()=>{const r=V.useContext(_g);if(r===void 0)throw new Error("useTheme must be used within a ThemeProvider");return r},wg=V.createContext(void 0),kT=({children:r})=>{const[e,t]=V.useState(()=>{const p=localStorage.getItem("fontSize");return p?parseInt(p,10):24}),[n,i]=V.useState(()=>{const p=localStorage.getItem("linesToDisplay");return p?parseInt(p,10):2}),[s,o]=V.useState(()=>{const p=localStorage.getItem("autoResize");return p?p==="true":!0}),[l,c]=V.useState(()=>{const p=localStorage.getItem("enableAnimations");return p?p==="true":!0});V.useEffect(()=>{localStorage.setItem("fontSize",e.toString())},[e]),V.useEffect(()=>{localStorage.setItem("linesToDisplay",n.toString())},[n]),V.useEffect(()=>{localStorage.setItem("autoResize",s.toString())},[s]),V.useEffect(()=>{localStorage.setItem("enableAnimations",l.toString())},[l]);const h=()=>{o(p=>!p)},f=()=>{c(p=>!p)};return g.jsx(wg.Provider,{value:{fontSize:e,linesToDisplay:n,autoResize:s,enableAnimations:l,setFontSize:t,setLinesToDisplay:i,toggleAutoResize:h,toggleAnimations:f},children:r})},go=()=>{const r=V.useContext(wg);if(r===void 0)throw new Error("useDisplay must be used within a DisplayProvider");return r},DT=(r,e={})=>{const{globalKeys:t=!1,preventDefaultKeys:n=[]}=e,i=V.useCallback(s=>{if(!t){const h=s.target,f=h.tagName.toLowerCase();if(f==="input"||f==="textarea"||h.isContentEditable)return}const o=s.key.toLowerCase();let l=o;s.ctrlKey&&(l=`ctrl+${l}`),s.altKey&&(l=`alt+${l}`),s.shiftKey&&(l=`shift+${l}`),s.metaKey&&(l=`meta+${l}`);const c=r[l]||r[o];c&&((n.includes(o)||n.includes(l))&&s.preventDefault(),c(s))},[r,t,n]);return V.useEffect(()=>(document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}),[i]),null},ge=r=>{let e=document.getElementById("aria-live-announcer");e||(e=document.createElement("div"),e.id="aria-live-announcer",e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="sr-only",document.body.appendChild(e)),e.textContent=r,setTimeout(()=>{e.textContent=""},1e3)},VT=S.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover, &:focus {
    color: var(--text-primary);
    background-color: var(--bg-hover);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`,NT=({isDarkTheme:r,toggleTheme:e,className:t})=>{const n=()=>{e(),ge(`Switched to ${r?"light":"dark"} theme`)};return g.jsx(VT,{onClick:n,"aria-label":r?"Switch to light theme":"Switch to dark theme",title:`${r?"Light":"Dark"} mode (D)`,className:t,children:r?g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"})}):g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"})})})},OT=S.div`
  position: relative;
  margin-left: auto;
`,MT=S.button`
  background: ${r=>r.$isOpen?"#e0e0e0":"transparent"};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background: #e0e0e0;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`,LT=S.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 200px;
  z-index: 1000;
`,Bh=S.button`
  width: 100%;
  padding: 8px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  font-size: 14px;

  &:hover {
    background: #f5f5f5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,FT=S.div`
  padding: 8px 16px;
  border-bottom: 1px solid #eee;
  margin-bottom: 8px;

  .name {
    font-weight: 500;
    font-size: 14px;
  }

  .email {
    font-size: 12px;
    color: #666;
  }
`,jT=S.div`
  padding: 8px 16px;
  color: #d32f2f;
  font-size: 12px;
  background-color: #ffebee;
  margin: 8px;
  border-radius: 4px;
`,UT=()=>{const{user:r,signIn:e,logout:t,error:n}=po(),[i,s]=V.useState(!1),[o,l]=V.useState(null),c=async()=>{try{l(null),await e(),s(!1)}catch(f){console.error("Failed to sign in:",f),f instanceof Error&&f.message.includes("auth/unauthorized-domain")?l("This domain is not authorized. Please contact the administrator."):l("Failed to sign in. Please try again.")}},h=async()=>{try{await t(),s(!1)}catch(f){console.error("Failed to sign out:",f)}};return g.jsxs(OT,{children:[g.jsx(MT,{onClick:()=>s(!i),$isOpen:i,title:r?"Profile menu":"Sign in",children:r!=null&&r.photoURL?g.jsx("img",{src:r.photoURL,alt:"Profile"}):"👤"}),i&&g.jsx(LT,{children:r?g.jsxs(g.Fragment,{children:[g.jsxs(FT,{children:[g.jsx("div",{className:"name",children:r.displayName}),g.jsx("div",{className:"email",children:r.email})]}),g.jsx(Bh,{onClick:h,children:"🚪 Sign out"})]}):g.jsxs(g.Fragment,{children:[g.jsx(Bh,{onClick:c,children:"🔑 Sign in with Google"}),o&&g.jsx(jT,{children:o})]})})]})},BT=S.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
`,$T=S.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-primary);
  
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`,zT=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  flex: 1;
  overflow: hidden;
  text-align: center;
`,GT=S.div`
  font-weight: bold;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,qT=S.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,KT=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,na=S.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover, &:focus {
    color: var(--text-primary);
    background-color: var(--bg-hover);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`,WT=({onOpenAccessibilityMenu:r,onOpenSongLibrary:e,onStartTour:t})=>{const{isDarkTheme:n,toggleTheme:i}=vg(),{songs:s}=Tn(),o=s.current,l=o?s.loaded[o]:null,c=(l==null?void 0:l.songInfo.title)||"",h=(l==null?void 0:l.songInfo.artist)||"",f=(l==null?void 0:l.songInfo.key)||"",p=(l==null?void 0:l.songInfo.tempo)||"",y=[];f&&y.push(`Key: ${f}`),p&&y.push(`Tempo: ${p}`);const x=y.join(" · "),P=()=>{r&&(r(),ge("Accessibility menu opened"))},k=()=>{e&&(e(),ge("Song library opened"))},C=()=>{t&&(t(),ge("Starting app tour"))};return g.jsxs(BT,{children:[g.jsx($T,{children:g.jsxs("a",{href:"/","aria-label":"BlindTab Home",children:[g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"})}),"BlindTab"]})}),g.jsx(zT,{children:c&&g.jsxs(g.Fragment,{children:[g.jsx(GT,{children:c}),g.jsx(qT,{children:h}),x&&g.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:x})]})}),g.jsxs(KT,{children:[g.jsx(na,{onClick:k,"aria-label":"Open song library",title:"Open song library",className:"song-library-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"})})}),g.jsx(na,{onClick:P,"aria-label":"Open accessibility menu",title:"Open accessibility menu",className:"accessibility-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"})})}),g.jsx(na,{onClick:C,"aria-label":"Start app tour",title:"Start app tour",className:"help-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),g.jsx(NT,{isDarkTheme:n,toggleTheme:i,className:"theme-toggle"}),g.jsx(UT,{})]})]})},HT=(r,e={})=>{const{fontSize:t,setFontSize:n,linesToDisplay:i,autoResize:s}=go(),o=V.useRef(null),[l,c]=V.useState(t),{minFontSize:h=12,maxFontSize:f=72,step:p=.5,lineHeight:y=1.5}=e;return V.useEffect(()=>{if(!s||!o.current)return;const x=o.current,P=()=>{if(!x)return;const O=x.clientHeight,F=i||r.length,M=O*.95;let z=f,G=h;const B=document.createElement("div");for(B.style.position="absolute",B.style.visibility="hidden",B.style.whiteSpace="pre-wrap",B.style.width=`${x.clientWidth}px`,document.body.appendChild(B);z>=h;){if(B.style.fontSize=`${z}px`,B.style.lineHeight=`${y}`,B.textContent=r.slice(0,F).join(`
`),B.offsetHeight<=M){G=z;break}z-=p}return document.body.removeChild(B),Math.max(h,G)},k=()=>{const O=P();O&&O!==l&&(c(O),s&&n(O))};k();const C=new ResizeObserver(k);return C.observe(x),()=>{C.disconnect()}},[s,r,i,h,f,p,y,l,n]),{containerRef:o,calculatedFontSize:l}},$h=S.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: hidden;
  position: relative;
`,zh=S.div`
  width: 100%;
  max-width: 1200px;
  font-size: ${r=>r.$fontSize}px;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow: hidden;
  position: relative;
`,QT=S.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,JT=S.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5%;
  transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateY(${r=>r.$animationOffset});
`,Gh=S.div`
  position: relative;
  padding-top: ${r=>r.$hasChords?"1.5em":"0"};
  margin-bottom: 0.5em;
  text-align: left;
  font-family: 'Courier New', monospace;
  width: 100%;
`,qh=S.div`
  position: relative;
  white-space: pre;
  display: inline-block;
  text-align: left;
`,YT=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.5em;
  pointer-events: none;
  text-align: left;
`,XT=S.span`
  position: absolute;
  top: 0;
  color: var(--primary-color);
  font-weight: bold;
  font-family: 'Courier New', monospace;
  white-space: pre;
`,ZT=S.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 0.7em;
  color: var(--text-secondary);
  opacity: 0.7;
`,e0=({songData:r,currentLineIndex:e=0})=>{const{fontSize:t,linesToDisplay:n,autoResize:i,enableAnimations:s}=go(),[o,l]=V.useState([]),[c,h]=V.useState("0"),[f,p]=V.useState(e),y=V.useRef(null),x=V.useRef(0),P=V.useRef(null),k=(r==null?void 0:r.lyrics)||[],C=k.map(M=>M.line||""),{calculatedFontSize:O}=HT(C,{minFontSize:16,maxFontSize:72});V.useEffect(()=>()=>{y.current&&clearTimeout(y.current)},[]),V.useEffect(()=>{const M=i?O:t;x.current=M*1.5},[t,O,i]),V.useEffect(()=>{if(!r||!k.length){l([]);return}if(!s||e===f){const z=Math.max(0,e),G=Math.min(k.length,z+n);l(k.slice(z,G)),h("0"),p(e);return}if(e>f){const z=Math.max(0,e-1),G=Math.min(k.length,e+n+1);l(k.slice(z,G)),h(`${x.current}px`);const B=requestAnimationFrame(()=>{const b=setTimeout(()=>{h("0")},30);return()=>clearTimeout(b)});return()=>cancelAnimationFrame(B)}else{const z=Math.max(0,e-1),G=Math.min(k.length,e+n);l(k.slice(z,G)),h(`-${x.current}px`);const B=requestAnimationFrame(()=>{const b=setTimeout(()=>{h("0")},30);return()=>clearTimeout(b)});return()=>cancelAnimationFrame(B)}},[r,e,n,s,k.length]);const F=(M,z)=>{let G=[];M.chords&&(typeof M.chords=="string"?G=[{text:M.chords,position:M.position||0}]:Array.isArray(M.chords)&&(G=M.chords.map(b=>({text:b,position:M.position||0}))));const B=M.line||"";return G.length?g.jsxs(Gh,{$hasChords:!0,children:[g.jsx(YT,{children:G.map((b,w)=>g.jsx(XT,{style:{left:`${b.position}ch`},children:b.text},w))}),g.jsx(qh,{children:B})]},z):g.jsx(Gh,{$hasChords:!1,children:g.jsx(qh,{children:B})},z)};return r?g.jsx($h,{ref:P,children:g.jsxs(zh,{$fontSize:i?O:t,children:[g.jsx(QT,{children:g.jsx(JT,{$animationOffset:c,children:o.map((M,z)=>F(M,z))})}),k.length>0&&g.jsxs(ZT,{children:[e+1,"/",k.length]})]})}):g.jsx($h,{ref:P,children:g.jsx(zh,{$fontSize:i?O:t,children:g.jsxs("div",{style:{textAlign:"center"},children:[g.jsx("p",{children:"No song loaded. Please select a song to display."}),g.jsx("p",{children:"Click the song library button in the header or press 'O' to open the song library."})]})})})},t0=S.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`,n0=S.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: var(--bg-primary);
  border-radius: 3px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
      background: var(--primary-hover-color);
    }
  }
  
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    transition: background-color 0.2s;
    border: none;
    
    &:hover {
      background: var(--primary-hover-color);
    }
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,r0=S.span`
  min-width: 3rem;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-secondary);
`,Ig=({min:r,max:e,value:t,onChange:n,disabled:i=!1,className:s,ariaLabel:o="Slider",showValue:l=!0,valueFormat:c=(h,f)=>`${h}/${f}`})=>{const[h,f]=V.useState(t),p=V.useRef(!1);V.useEffect(()=>{p.current||f(t)},[t]);const y=C=>{const O=parseInt(C.target.value,10);f(O)},x=()=>{p.current=!0},P=()=>{p.current=!1,h!==t&&(n(h),ge(`${o} set to ${h}`))},k=C=>{(C.key==="ArrowLeft"||C.key==="ArrowRight"||C.key==="ArrowUp"||C.key==="ArrowDown")&&(n(h),ge(`${o} set to ${h}`))};return g.jsxs(t0,{className:s,children:[g.jsx(n0,{type:"range",min:r,max:e,value:h,onChange:y,onMouseDown:x,onMouseUp:P,onTouchStart:x,onTouchEnd:P,onKeyUp:k,disabled:i,"aria-label":o,"aria-valuemin":r,"aria-valuemax":e,"aria-valuenow":h}),l&&g.jsx(r0,{children:c(h,e)})]})},i0=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  position: relative;
  z-index: 10;
`,Kh=S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Br=S.button`
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover, &:focus {
    background-color: var(--bg-hover);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,s0=S(Br)`
  background-color: ${r=>r.$active?"var(--primary-color)":"transparent"};
  color: ${r=>r.$active?"white":"var(--text-primary)"};
  
  &:hover, &:focus {
    background-color: ${r=>r.$active?"var(--primary-hover-color)":"var(--bg-hover)"};
  }
  
  animation: ${r=>r.$active?"pulse 2s infinite":"none"};
`,o0=S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 180px;
`,a0=S(Ig)`
  width: 100%;
`,l0=S.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,c0=S.span`
  min-width: 2rem;
  text-align: center;
`,u0=S(Ig)`
  width: 200px;
  margin: 0 0.5rem;
`,h0=({onPrevious:r,onNext:e,hasPrevious:t,hasNext:n,currentLineIndex:i,totalLines:s,onSliderChange:o})=>{const{fontSize:l,setFontSize:c,linesToDisplay:h,setLinesToDisplay:f,autoResize:p,toggleAutoResize:y}=go(),x=O=>{const F=Math.max(1,Math.min(10,h+O));f(F),ge(`Lines to display changed to ${F}`)},P=()=>{y(),ge(`Auto resize ${p?"disabled":"enabled"}`)},k=()=>{r&&t&&(r(),ge("Previous section"))},C=()=>{e&&n&&(e(),ge("Next section"))};return g.jsxs(i0,{className:"controls-panel",children:[g.jsxs(Kh,{children:[g.jsx(Br,{onClick:k,disabled:!t,"aria-label":"Previous section",title:"Previous section",className:"previous-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),g.jsx(u0,{min:0,max:Math.max(0,s-1),value:i,onChange:o,disabled:s<=1,ariaLabel:"Song navigation",valueFormat:(O,F)=>`${O+1}/${F+1}`}),g.jsx(Br,{onClick:C,disabled:!n,"aria-label":"Next section",title:"Next section",className:"next-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})})]}),g.jsxs(Kh,{children:[g.jsx(o0,{className:"font-size-controls",children:g.jsx(a0,{min:12,max:72,value:l,onChange:O=>{c(O),ge(`Font size changed to ${O} pixels`)},disabled:p,ariaLabel:"Font size",valueFormat:O=>`${O}px`})}),g.jsxs(l0,{className:"lines-controls",children:[g.jsx(Br,{onClick:()=>x(-1),"aria-label":"Decrease lines to display",title:"Decrease lines to display",disabled:h<=1,children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M19 13H5v-2h14v2z"})})}),g.jsx(c0,{children:h}),g.jsx(Br,{onClick:()=>x(1),"aria-label":"Increase lines to display",title:"Increase lines to display",disabled:h>=10,children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})})})]}),g.jsx(s0,{onClick:P,$active:p,"aria-label":`${p?"Disable":"Enable"} auto resize`,title:`${p?"Disable":"Enable"} auto resize`,className:"auto-resize-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"})})})]})]})},d0=S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,f0=S.div`
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,p0=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
`,g0=S.h2`
  margin: 0;
  font-size: 1.25rem;
`,m0=S.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  
  &:hover, &:focus {
    color: var(--text-primary);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
`,y0=S.div`
  padding: 1rem;
`,Xi=S.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Zi=S.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
`,es=S.p`
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
`,ra=S.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--border-color);
    transition: .4s;
    border-radius: 34px;
  }
  
  span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + span {
    background-color: var(--primary-color);
  }
  
  input:focus + span {
    box-shadow: 0 0 1px var(--primary-color);
  }
  
  input:checked + span:before {
    transform: translateX(26px);
  }
`,Wh=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Hh=S.input`
  flex: 1;
  height: 8px;
  border-radius: 4px;
  background: var(--border-color);
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
  }
`,Qh=S.span`
  min-width: 40px;
  text-align: right;
`,_0=S.div`
  margin-top: 1rem;
`,v0=S.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
  }
  
  th {
    font-weight: bold;
    color: var(--text-secondary);
  }
`,Qe=S.kbd`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  font-family: monospace;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`,w0=({isOpen:r,onClose:e})=>{const{fontSize:t,setFontSize:n,linesToDisplay:i,setLinesToDisplay:s,autoResize:o,toggleAutoResize:l,enableAnimations:c,toggleAnimations:h}=go(),{isDarkTheme:f,toggleTheme:p}=vg();if(!r)return null;const y=O=>{const F=parseInt(O.target.value,10);n(F),ge(`Font size set to ${F} pixels`)},x=O=>{const F=parseInt(O.target.value,10);s(F),ge(`Lines to display set to ${F}`)},P=()=>{l(),ge(`Auto resize ${o?"disabled":"enabled"}`)},k=()=>{p(),ge(`${f?"Light":"Dark"} theme enabled`)},C=()=>{h(),ge(`Animations ${c?"disabled":"enabled"}`)};return g.jsx(d0,{onClick:e,children:g.jsxs(f0,{onClick:O=>O.stopPropagation(),role:"dialog","aria-labelledby":"accessibility-title","aria-modal":"true",children:[g.jsxs(p0,{children:[g.jsx(g0,{id:"accessibility-title",children:"Accessibility Settings"}),g.jsx(m0,{onClick:e,"aria-label":"Close accessibility settings",children:"×"})]}),g.jsxs(y0,{children:[g.jsxs(Xi,{children:[g.jsx(Zi,{children:"Display Settings"}),g.jsx(es,{children:"Adjust how the leadsheet is displayed"}),g.jsxs(Wh,{children:[g.jsx("label",{htmlFor:"font-size",children:"Font Size:"}),g.jsx(Hh,{type:"range",id:"font-size",min:"12",max:"72",value:t,onChange:y,disabled:o}),g.jsxs(Qh,{children:[t,"px"]})]}),g.jsxs(Wh,{children:[g.jsx("label",{htmlFor:"lines-display",children:"Lines to Display:"}),g.jsx(Hh,{type:"range",id:"lines-display",min:"1",max:"10",value:i,onChange:x}),g.jsx(Qh,{children:i})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[g.jsxs(ra,{children:[g.jsx("input",{type:"checkbox",checked:o,onChange:P,id:"auto-resize"}),g.jsx("span",{})]}),g.jsx("label",{htmlFor:"auto-resize",children:"Auto-resize text to fit screen"})]})]}),g.jsxs(Xi,{children:[g.jsx(Zi,{children:"Theme"}),g.jsx(es,{children:"Choose between light and dark theme"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[g.jsxs(ra,{children:[g.jsx("input",{type:"checkbox",checked:f,onChange:k,id:"dark-theme"}),g.jsx("span",{})]}),g.jsx("label",{htmlFor:"dark-theme",children:"Dark Theme"})]})]}),g.jsxs(Xi,{children:[g.jsx(Zi,{children:"Scroll Animations"}),g.jsx(es,{children:"Enable smooth scrolling animations when navigating through songs. Disabling may improve performance and reduce motion for users sensitive to animations."}),g.jsxs(ra,{children:[g.jsx("input",{type:"checkbox",checked:c,onChange:C,"aria-label":"Toggle animations"}),g.jsx("span",{})]})]}),g.jsxs(Xi,{children:[g.jsx(Zi,{children:"Keyboard Shortcuts"}),g.jsx(es,{children:"Use these shortcuts for quick navigation"}),g.jsx(_0,{children:g.jsxs(v0,{children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Action"}),g.jsx("th",{children:"Shortcut"})]})}),g.jsxs("tbody",{children:[g.jsxs("tr",{children:[g.jsx("td",{children:"Next Section"}),g.jsxs("td",{children:[g.jsx(Qe,{children:"→"})," or ",g.jsx(Qe,{children:"Space"})]})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Previous Section"}),g.jsx("td",{children:g.jsx(Qe,{children:"←"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Increase Font Size"}),g.jsxs("td",{children:[g.jsx(Qe,{children:"+"})," or ",g.jsx(Qe,{children:"="})]})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Decrease Font Size"}),g.jsx("td",{children:g.jsx(Qe,{children:"-"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Toggle Auto-resize"}),g.jsx("td",{children:g.jsx(Qe,{children:"A"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Toggle Dark Mode"}),g.jsx("td",{children:g.jsx(Qe,{children:"D"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Open Song Library"}),g.jsx("td",{children:g.jsx(Qe,{children:"O"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Open Song Manager"}),g.jsx("td",{children:g.jsx(Qe,{children:"L"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Start App Tour"}),g.jsx("td",{children:g.jsx(Qe,{children:"H"})})]})]})]})})]})]})]})})},I0=S.div`
  padding: 1rem;
  max-height: 70vh;
  overflow-y: auto;
`,E0=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,b0=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: var(--bg-secondary);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateX(4px);
    background: var(--bg-hover);
  }
`,T0=S.div`
  flex: 1;
`,x0=S.h4`
  margin: 0;
  font-size: 1rem;
`,S0=S.p`
  margin: 0.25rem 0 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
`,A0=S.span`
  padding: 0.25rem 0.5rem;
  background: var(--primary);
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
`;function R0({onClose:r}){const{songs:e,userSongs:t,playSong:n}=Tn(),{user:i}=po(),s=new Set(t.map(l=>l.id)),o=async l=>{await n(l.id),r()};return g.jsx(I0,{children:g.jsx(E0,{children:e.filter(l=>(l==null?void 0:l.title)&&(l==null?void 0:l.artist)).map(l=>g.jsxs(b0,{onClick:()=>o(l),children:[g.jsxs(T0,{children:[g.jsx(x0,{children:l.title}),g.jsx(S0,{children:l.artist})]}),i&&s.has(l.id)&&g.jsx(A0,{children:"In Collection"})]},l.id))})})}const ia=S.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: auto;
`,C0=S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  overflow-y: auto;
`,P0=S.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 12px;
  background: ${r=>r.$isSelected?"var(--bg-hover)":"var(--bg-secondary)"};
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--primary-color);
    background: var(--bg-hover);
    transform: translateX(4px);
  }

  ${r=>r.$isSelected&&`
    border-color: var(--primary-color);
    border-left: 4px solid var(--primary-color);
  `}
`,k0=S.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,D0=S.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-primary);
`,V0=S.p`
  margin: 0;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-secondary);
`,N0=S.div`
  font-size: 0.8rem;
  color: var(--text-tertiary);
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,O0=S.span`
  background: var(--bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
`,M0=S.div`
  display: flex;
  gap: 8px;
  padding-left: 8px;
  border-left: 1px solid var(--border-color);
`,sa=S.button`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${r=>r.$variant==="primary"?"var(--primary-color)":r.$variant==="danger"?"var(--error-color)":"transparent"};
  color: ${r=>r.$variant?"white":"var(--text-secondary)"};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${r=>r.$variant==="primary"?"var(--primary-color-dark)":r.$variant==="danger"?"var(--error-color-dark)":"var(--bg-hover)"};
    color: ${r=>r.$variant?"white":"var(--text-primary)"};
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,Hl=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
`,L0=S(Hl)`
  color: var(--error-color);
`,F0=S(Hl)`
  color: var(--text-secondary);
`,j0=S.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${r=>r.$variant==="danger"?"#ff4444":r.$variant==="primary"?"#007AFF":"#f0f0f0"};
  color: ${r=>r.$variant==="danger"||r.$variant==="primary"?"white":"black"};
  
  &:hover {
    opacity: 0.9;
  }
`,U0=S.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1rem;
  align-items: center;
`,Jh=S.button`
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${r=>r.$active?"var(--primary)":"transparent"};
  color: ${r=>r.$active?"var(--primary)":"var(--text-primary)"};
  font-weight: ${r=>r.$active?"600":"400"};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: var(--primary);
  }
  
  &:disabled {
    color: var(--text-disabled);
    cursor: not-allowed;
  }
`,B0=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
`,$0=()=>g.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),g.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),z0=({onSongLoad:r,onClose:e,searchTerm:t=""})=>{const{songs:n,userSongs:i,addSongToCollection:s,removeSongFromCollection:o,playSong:l,refreshSongs:c,deleteSong:h,isLoading:f,error:p}=Tn(),{user:y}=po(),[x,P]=V.useState(null),[k,C]=V.useState(!1),[O,F]=V.useState(!1),[M,z]=td.useState("all"),G=M==="all"?n:i;new Set(i.map(_=>_.id));const B=_=>{P(_.id),ge(`Selected song: ${_.title} by ${_.artist}`)},b=async _=>{await r(_.id),e&&e()},w=(_,se)=>{se.stopPropagation(),P(_.id),F(!1),C(!0)},I=async(_,se)=>{if(se.stopPropagation(),window.confirm(`Are you sure you want to delete "${_.title}" by ${_.artist}?`))try{await h(_.id),ge(`Song ${_.title} deleted successfully`)}catch(je){console.error("Error deleting song:",je),je instanceof Error&&je.message.includes("preview mode")?console.warn("Song deletion disabled in preview mode"):ge(`Error deleting song: ${je instanceof Error?je.message:"Unknown error"}`)}},v=async()=>{C(!1),F(!1),await c(),ge("Song updated successfully")},E=()=>{P(null),F(!0),C(!0)},T=G.filter(_=>!(_!=null&&_.title)||!(_!=null&&_.artist)?!1:_.title.toLowerCase().includes(t.toLowerCase())||_.artist.toLowerCase().includes(t.toLowerCase()));return f&&!T.length?g.jsx(ia,{children:g.jsx(Hl,{children:g.jsx("div",{children:"Loading songs..."})})}):p&&T.length===0?g.jsx(ia,{children:g.jsxs(L0,{children:[g.jsx("div",{children:p.toString()}),g.jsx(j0,{onClick:c,$variant:"primary",children:"Retry"})]})}):g.jsxs(ia,{children:[g.jsxs(U0,{children:[g.jsx(Jh,{$active:M==="all",onClick:()=>z("all"),"aria-selected":M==="all",role:"tab",children:"All Songs"}),g.jsx(Jh,{$active:M==="collection",onClick:()=>z("collection"),"aria-selected":M==="collection",role:"tab",disabled:!y,children:"My Collection"}),g.jsxs(B0,{onClick:E,children:[g.jsx($0,{})," New Song"]})]}),T.length===0?g.jsxs(F0,{children:[g.jsx("div",{children:"No songs found"}),g.jsx("div",{children:t?"Try a different search term":"Add some songs to get started"})]}):g.jsxs(g.Fragment,{children:[g.jsx(C0,{children:T.map(_=>g.jsxs(P0,{$isSelected:x===_.id,onClick:()=>B(_),children:[g.jsxs(k0,{children:[g.jsx(D0,{children:_.title}),g.jsx(V0,{children:_.artist}),_.tags&&_.tags.length>0&&g.jsx(N0,{children:_.tags.map((se,je)=>g.jsx(O0,{children:se},je))})]}),g.jsxs(M0,{children:[g.jsx(sa,{onClick:se=>w(_,se),title:"Edit song",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),g.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),g.jsx(sa,{$variant:"danger",onClick:se=>I(_,se),title:"Delete song",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M3 6h18"}),g.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),g.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),g.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),g.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]})}),g.jsx(sa,{$variant:"primary",onClick:()=>b(_),title:"Load song",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M5 12h14"}),g.jsx("path",{d:"m12 5 7 7-7 7"})]})})]})]},_.id))}),g.jsx(yg,{isOpen:k,onClose:v,songId:x,isNewSong:O})]})]})},G0=S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,q0=S.div`
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  width: 95%;
  max-width: 800px;
  height: 90vh;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  z-index: 1001;
`,K0=S.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  padding: 0.25rem 0.5rem;
  gap: 0.25rem;
  background: var(--bg-secondary);
  align-items: center;
`,Yh=S.button`
  padding: 0.4rem 0.75rem;
  border: none;
  background: ${r=>r.$active?"var(--bg-primary)":"none"};
  color: ${r=>r.$active?"var(--text-color)":"var(--text-secondary)"};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
  border: 1px solid ${r=>r.$active?"var(--border-color)":"transparent"};

  &:hover {
    background: var(--bg-primary);
    color: var(--text-color);
  }
`,W0=S.input`
  flex: 1;
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 0.9rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  max-width: 300px;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,Xh=S.button`
  padding: 0.4rem 0.6rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;
  
  &:hover, &:focus {
    background: var(--primary-color-dark, #0056b3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,H0=S.button`
  background: none;
  border: none;
  padding: 0.4rem;
  cursor: pointer;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  
  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }
`,Q0=S.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
`,J0=({isOpen:r,onClose:e,onSongLoad:t})=>{const{isLoading:n,error:i,refreshSongs:s,checkDatabaseConnection:o}=Tn(),[l,c]=V.useState("all"),[h,f]=V.useState(""),[p,y]=V.useState(!1),x=()=>{y(!0)},P=async()=>{y(!1),await s(),ge("Song created successfully")};return r?g.jsx(G0,{onClick:e,children:g.jsxs(q0,{onClick:k=>k.stopPropagation(),children:[g.jsxs(K0,{children:[g.jsx(Yh,{$active:l==="all",onClick:()=>c("all"),children:"All Songs"}),g.jsx(Yh,{$active:l==="search",onClick:()=>c("search"),children:"Search"}),l==="search"&&g.jsx(W0,{type:"text",placeholder:"Search songs...",value:h,onChange:k=>f(k.target.value),autoFocus:!0}),g.jsx("div",{style:{flex:1}}),g.jsx(Xh,{onClick:x,children:"Add"}),g.jsx(Xh,{onClick:s,children:"Refresh"}),g.jsx(H0,{onClick:e,"aria-label":"Close",children:"×"})]}),g.jsx(Q0,{children:g.jsx(z0,{onSongLoad:t,onClose:e,searchTerm:l==="search"?h:""})}),g.jsx(yg,{isOpen:p,onClose:P,isNewSong:!0})]})}):null},Y0=({tourId:r,autoStart:e=!0})=>{const[t,n]=V.useState(!1),[i,s]=V.useState(!1);return V.useEffect(()=>{const p=JSON.parse(localStorage.getItem("completedTours")||"{}")[r]===!0;s(p),e&&!p&&n(!0)},[r,e]),{isTourOpen:t,hasCompletedTour:i,startTour:()=>{n(!0)},closeTour:()=>{n(!1)},completeTour:()=>{n(!1),s(!0);const f=JSON.parse(localStorage.getItem("completedTours")||"{}");f[r]=!0,localStorage.setItem("completedTours",JSON.stringify(f))},resetTour:()=>{s(!1);const f=JSON.parse(localStorage.getItem("completedTours")||"{}");delete f[r],localStorage.setItem("completedTours",JSON.stringify(f))}}},X0=r=>{switch(r){case"primary":return Je`
        background-color: var(--primary-color);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--primary-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
        }
      `;case"secondary":return Je`
        background-color: var(--bg-secondary);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
        &:hover:not(:disabled) {
          background-color: var(--bg-hover);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(221, 221, 221, 0.3);
        }
      `;case"success":return Je`
        background-color: var(--success-color);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--success-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.3);
        }
      `;case"danger":return Je`
        background-color: var(--danger-color);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--danger-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.3);
        }
      `;case"warning":return Je`
        background-color: var(--warning-color);
        color: #212529;
        &:hover:not(:disabled) {
          background-color: var(--warning-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.3);
        }
      `;case"text":return Je`
        background-color: transparent;
        color: var(--primary-color);
        border: none;
        padding: 0;
        &:hover:not(:disabled) {
          text-decoration: underline;
          background-color: transparent;
        }
        &:focus {
          box-shadow: none;
          text-decoration: underline;
        }
      `;default:return""}},Z0=r=>{switch(r){case"small":return Je`
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      `;case"medium":return Je`
        padding: 0.5rem 1rem;
        font-size: 1rem;
      `;case"large":return Je`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
      `;default:return""}},ex=S.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  
  ${r=>X0(r.variant||"primary")}
  ${r=>Z0(r.size||"medium")}
  
  ${r=>r.fullWidth&&Je`
    width: 100%;
  `}
  
  ${r=>r.isActive&&Je`
    background-color: var(--primary-hover-color);
    border-color: var(--primary-hover-color);
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    margin-right: ${r=>r.children?"0.5rem":"0"};
  }
`,ps=({children:r,variant:e="primary",size:t="medium",fullWidth:n=!1,isActive:i=!1,...s})=>g.jsx(ex,{variant:e,size:t,fullWidth:n,isActive:i,...s,children:r});S.div`
  color: var(--error-color);
  background-color: rgba(211, 47, 47, 0.1);
  border: 1px solid var(--error-color);
  border-radius: 4px;
  padding: 10px 15px;
  margin: 10px 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    flex-shrink: 0;
  }
`;S.div`
  color: var(--success-color);
  background-color: rgba(40, 167, 69, 0.1);
  border: 1px solid var(--success-color);
  border-radius: 4px;
  padding: 10px 15px;
  margin: 10px 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    flex-shrink: 0;
  }
`;const tx=Ua`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;S.div`
  display: inline-block;
  position: relative;
  width: ${r=>r.size}px;
  height: ${r=>r.size}px;
`;S.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${r=>r.size}px;
  height: ${r=>r.size}px;
  border: ${r=>Math.max(2,r.size/10)}px solid;
  border-radius: 50%;
  border-color: ${r=>r.color} transparent transparent transparent;
  animation: ${tx} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
`;S.div`
  background-color: var(--bg-primary);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  width: ${r=>{switch(r.size){case"small":return"400px";case"medium":return"600px";case"large":return"800px";case"full":return"90vw";default:return"600px"}}};
  max-width: 90vw;
  animation: fadeIn 0.3s ease-out;
`;S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid var(--border-color);
`;S.h2`
  margin: 0;
  font-size: 1.25rem;
  color: var(--text-primary);
`;S.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  
  &:hover {
    background-color: var(--bg-hover);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--focus-color);
  }
`;S.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;
`;S.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid var(--border-color);
`;S.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: ${r=>r.fullWidth?"100%":"auto"};
`;S.label`
  font-size: 0.875rem;
  margin-bottom: 6px;
  color: var(--text-primary);
  font-weight: 500;
`;S.input`
  padding: 10px 12px;
  border: 1px solid ${r=>r.hasError?"var(--error-color)":"var(--border-color)"};
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color 0.2s, box-shadow 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${r=>r.hasError?"var(--error-color)":"var(--primary-color)"};
    box-shadow: 0 0 0 2px ${r=>r.hasError?"rgba(211, 47, 47, 0.2)":"rgba(74, 144, 226, 0.2)"};
  }
  
  &:disabled {
    background-color: var(--bg-secondary);
    cursor: not-allowed;
    opacity: 0.7;
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
  }
`;S.span`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${r=>r.isError?"var(--error-color)":"var(--text-secondary)"};
`;S.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: ${r=>r.fullWidth?"100%":"auto"};
`;S.label`
  font-size: 0.875rem;
  margin-bottom: 6px;
  color: var(--text-primary);
  font-weight: 500;
`;S.textarea`
  padding: 10px 12px;
  border: 1px solid ${r=>r.hasError?"var(--error-color)":"var(--border-color)"};
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color 0.2s, box-shadow 0.2s;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${r=>r.hasError?"var(--error-color)":"var(--primary-color)"};
    box-shadow: 0 0 0 2px ${r=>r.hasError?"rgba(211, 47, 47, 0.2)":"rgba(74, 144, 226, 0.2)"};
  }
  
  &:disabled {
    background-color: var(--bg-secondary);
    cursor: not-allowed;
    opacity: 0.7;
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
  }
`;S.span`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${r=>r.isError?"var(--error-color)":"var(--text-secondary)"};
`;const Eg=Ua`
  from { opacity: 0; }
  to { opacity: 1; }
`,nx=S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  pointer-events: none;
  animation: ${Eg} 0.3s ease-out;
`,rx=S.div`
  position: fixed;
  top: ${r=>r.position.top};
  left: ${r=>r.position.left};
  transform: ${r=>r.position.transform};
  background-color: var(--bg-primary);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  padding: 16px;
  width: 300px;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 1001;
  pointer-events: auto;
  animation: ${Eg} 0.3s ease-out;
`,ix=S.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: var(--bg-primary);
  transform: rotate(45deg);
  
  ${r=>{switch(r.position){case"top":return`
          bottom: -6px;
          left: 50%;
          margin-left: -6px;
        `;case"right":return`
          left: -6px;
          top: 50%;
          margin-top: -6px;
        `;case"bottom":return`
          top: -6px;
          left: 50%;
          margin-left: -6px;
        `;case"left":return`
          right: -6px;
          top: 50%;
          margin-top: -6px;
        `;default:return""}}}
`,sx=S.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: var(--text-primary);
`,ox=S.p`
  margin: 0 0 16px 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
`,ax=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,lx=S.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`,cx=S.div`
  display: flex;
  gap: 8px;
`,ux=S.div`
  position: absolute;
  top: ${r=>r.position.top}px;
  left: ${r=>r.position.left}px;
  width: ${r=>r.position.width}px;
  height: ${r=>r.position.height}px;
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
  z-index: 999;
  pointer-events: none;
`,hx=S(ps)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1002;
  pointer-events: auto;
`,dx=({steps:r,isOpen:e,onClose:t,onComplete:n})=>{const[i,s]=V.useState(0),[o,l]=V.useState({top:"50%",left:"50%",transform:"translate(-50%, -50%)"}),[c,h]=V.useState({top:0,left:0,width:0,height:0}),[f,p]=V.useState("bottom");if(V.useEffect(()=>{if(!e)return;const C=()=>{const O=r[i];if(!O)return;const F=document.querySelector(O.target);if(!F)return;const M=F.getBoundingClientRect(),z=O.position||"bottom";h({top:M.top,left:M.left,width:M.width,height:M.height});let G="0px",B="0px",b="none";const w=window.innerWidth,I=window.innerHeight,v=300,E=200;switch(z){case"top":G=`${Math.max(E/2+10,M.top-20)}px`,B=`${M.left+M.width/2}px`,b="translate(-50%, -100%)";break;case"right":G=`${M.top+M.height/2}px`,B=`${Math.min(w-v-20,M.right+20)}px`,b="translateY(-50%)";break;case"bottom":G=`${Math.min(I-E-20,M.bottom+20)}px`,B=`${M.left+M.width/2}px`,b="translateX(-50%)";break;case"left":G=`${M.top+M.height/2}px`,B=`${Math.max(v/2+10,M.left-20)}px`,b="translate(-100%, -50%)";break}const T=parseFloat(B);T-v/2<20?B=`${v/2+20}px`:T+v/2>w-20&&(B=`${w-v/2-20}px`);const _=parseFloat(G);_-E/2<20?G=`${E/2+20}px`:_+E/2>I-20&&(G=`${I-E/2-20}px`),l({top:G,left:B,transform:b}),p(z)};return C(),window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C)}},[e,i,r]),!e||!r.length)return null;const y=()=>{i<r.length-1?s(i+1):n()},x=()=>{i>0&&s(i-1)},P=()=>{n()},k=r[i];return g.jsxs(g.Fragment,{children:[g.jsx(nx,{}),g.jsx(ux,{position:c}),g.jsxs(rx,{position:o,children:[g.jsx(ix,{position:f}),g.jsx(sx,{children:k.title}),g.jsx(ox,{children:k.content}),g.jsxs(ax,{children:[g.jsxs(lx,{children:[i+1," of ",r.length]}),g.jsxs(cx,{children:[i>0&&g.jsx(ps,{variant:"secondary",size:"small",onClick:x,children:"Previous"}),i<r.length-1?g.jsx(ps,{variant:"primary",size:"small",onClick:y,children:"Next"}):g.jsx(ps,{variant:"primary",size:"small",onClick:y,children:"Finish"})]})]})]}),g.jsx(hx,{variant:"secondary",size:"small",onClick:P,children:"Skip Tour"})]})},fx=S.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: ${r=>r.isOnline?"rgba(0, 128, 0, 0.2)":"rgba(255, 0, 0, 0.2)"};
  color: ${r=>r.isOnline?"#00aa00":"#ff0000"};
  font-size: 12px;
  transition: all 0.3s ease;
  pointer-events: none;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`,px=S.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${r=>r.isOnline?"#00aa00":"#ff0000"};
  margin-right: 5px;
`,gx=S.span`
  font-weight: 500;
`,bg=Ua`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,mx=S.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: ${bg} 1s linear infinite;
  margin-left: 10px;
`,yx=S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  opacity: ${r=>r.visible?1:0};
  visibility: ${r=>r.visible?"visible":"hidden"};
  transition: opacity 0.3s, visibility 0.3s;
`,_x=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,vx=S.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: ${bg} 1s linear infinite;
  margin-bottom: 10px;
`,wx=S.div`
  color: #333;
  font-size: 16px;
  font-weight: 500;
`,Ix=({isLoading:r=!1})=>{const[e,t]=V.useState(navigator.onLine),[n,i]=V.useState(!1),[s,o]=V.useState(null);return V.useEffect(()=>{const l=()=>t(!0),c=()=>t(!1);return window.addEventListener("online",l),window.addEventListener("offline",c),()=>{window.removeEventListener("online",l),window.removeEventListener("offline",c)}},[]),V.useEffect(()=>{if(r){const l=window.setTimeout(()=>{i(!0)},1e3);o(l)}else s&&clearTimeout(s),i(!1);return()=>{s&&clearTimeout(s)}},[r]),g.jsxs(g.Fragment,{children:[g.jsxs(fx,{isOnline:e,children:[g.jsx(px,{isOnline:e}),g.jsx(gx,{children:e?"Online":"Offline"}),r&&g.jsx(mx,{})]}),g.jsx(yx,{visible:n&&r,children:g.jsxs(_x,{children:[g.jsx(vx,{}),g.jsx(wx,{children:"Loading songs..."})]})})]})},Ex=om`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Font sizing */
    --auto-resize-font-size: clamp(16px, calc(4vw + 4vh), 200px);
    
    /* Light theme variables */
    --background-color: #ffffff;
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f5;
    --bg-hover: #e9e9e9;
    --text-color: #333333;
    --text-primary: #333333;
    --text-secondary: #666666;
    --border-color: #dddddd;
    --hover-color: #f0f0f0;
    --primary-color: #4a90e2;
    --primary-hover-color: #357abd;
    --focus-color: #4a6da7;
    --success-color: #28a745;
    --success-hover-color: #218838;
    --warning-color: #ffc107;
    --warning-hover-color: #e0a800;
    --danger-color: #dc3545;
    --error-color: #d32f2f;
    --danger-hover-color: #c82333;
    --modal-background: #fefefe;
    --modal-shadow: rgba(0, 0, 0, 0.2);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: background-color 0.3s, color 0.3s;
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 0;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  body.dark-theme {
    /* Dark theme variables */
    --background-color: #222222;
    --bg-primary: #121212;
    --bg-secondary: #1e1e1e;
    --bg-hover: #2c2c2c;
    --text-color: #f0f0f0;
    --text-primary: #e0e0e0;
    --text-secondary: #a0a0a0;
    --border-color: #555555;
    --hover-color: #444444;
    --primary-color: #7ab5ff;
    --primary-hover-color: #5a95df;
    --focus-color: #5d82c1;
    --success-color: #28a745;
    --success-hover-color: #218838;
    --warning-color: #ffc107;
    --warning-hover-color: #e0a800;
    --danger-color: #dc3545;
    --error-color: #f44336;
    --danger-hover-color: #c82333;
    --modal-background: #333333;
    --modal-shadow: rgba(0, 0, 0, 0.4);
  }

  #root {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Animations */
  @keyframes pulse {
    0% { 
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(93, 130, 193, 0.4);
    }
    50% { transform: scale(1.1); }
    70% { box-shadow: 0 0 0 10px rgba(93, 130, 193, 0); }
    100% { 
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(93, 130, 193, 0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Screen reader only class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;let $r=!1;try{$r=localStorage.getItem("devToolsEnabled")==="true"}catch{console.warn("Failed to access localStorage for dev tools state")}const bx=()=>{$r=!$r;try{localStorage.setItem("devToolsEnabled",$r.toString()),console.log(`Dev tools ${$r?"enabled":"disabled"}`)}catch{console.warn("Failed to save dev tools state to localStorage")}},Zh=["d","e","v"];let Or=[];const Tx=r=>(Or.push(r.toLowerCase()),Or.length>Zh.length&&Or.shift(),Or.join("")===Zh.join("")?(bx(),Or=[],!0):!1),xx=S.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`,Sx=S.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Ax=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
  color: #666;
`,Rx=S.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;
`,Cx=S.p`
  margin-bottom: 20px;
  font-size: 1rem;
`,Px=S.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: #2980b9;
  }
`,kx=[{target:"header",title:"Welcome to BlindTab!",content:"BlindTab helps you view and navigate song leadsheets with ease. This quick tour will show you the main features.",position:"bottom"},{target:".song-library-button",title:"Song Library",content:'Click here or press "O" to open the song library where you can browse, search, and load songs. Each song has a play button to load it.',position:"bottom"},{target:".accessibility-button",title:"Accessibility Options",content:"Access settings for font size, display preferences, and other accessibility features here.",position:"bottom"},{target:".theme-toggle",title:"Theme Toggle",content:'Switch between light and dark themes for comfortable viewing in any environment. You can also press "D" to toggle.',position:"left"},{target:"main",title:"Leadsheet Display",content:"Your song lyrics and chords will appear here. The display automatically adjusts to show the current section of the song.",position:"top"},{target:".controls-panel",title:"Navigation Controls",content:"Use these buttons to navigate through the song. You can also use arrow keys or space bar to move forward.",position:"top"},{target:".auto-resize-button",title:"Auto-Resize",content:'Toggle auto-resize to automatically adjust the font size to fit the screen. You can also press "A" to toggle.',position:"top"},{target:".help-button",title:"Help Button",content:"Click this button anytime to restart this tour and learn about BlindTab features.",position:"left"}],Dx=()=>{const[r,e]=V.useState(!1),[t,n]=V.useState(!1),[i,s]=V.useState(!1),[o,l]=V.useState(0),{songs:c,playSong:h,currentSong:f,isLoading:p,error:y}=Tn(),{isTourOpen:x,startTour:P,closeTour:k,completeTour:C}=Y0({tourId:"blindtab-main-tour",autoStart:!0}),O=(f==null?void 0:f.lyrics)||[];V.useEffect(()=>{const B=b=>{Tx(b.key)};return window.addEventListener("keydown",B),()=>{window.removeEventListener("keydown",B)}},[]),DT({arrowright:()=>M(),space:()=>M(),arrowleft:()=>F(),"+":()=>{},"=":()=>{},"-":()=>{},a:()=>{},d:()=>{},o:()=>s(!0),l:()=>n(!0),h:()=>P()},{preventDefaultKeys:["space","arrowleft","arrowright"]});const F=()=>{o>0&&l(o-1)},M=()=>{O.length&&o<O.length-1&&l(o+1)},z=async B=>{try{await h(B),l(0),f&&ed(`Loaded song: ${f.title} by ${f.artist}`)}catch(b){console.error(`Error loading song ${B}:`,b),ed(`Error loading song. ${b.message||"Unknown error"}`)}},G=()=>!f&&!p?g.jsxs(Ax,{children:[g.jsx(Rx,{children:"No Song Loaded"}),g.jsxs(Cx,{children:["Select a song from the library to get started.",y&&g.jsxs("div",{style:{color:"red",marginTop:"10px"},children:["Error: ",y.message]})]}),g.jsx(Px,{onClick:()=>s(!0),children:"Open Song Library"})]}):g.jsx(e0,{songData:f,currentLineIndex:o});return g.jsxs(g.Fragment,{children:[g.jsx(Ex,{}),g.jsxs(xx,{children:[g.jsx(WT,{onOpenAccessibilityMenu:()=>e(!0),onOpenSongLibrary:()=>s(!0),onStartTour:P}),g.jsx(Sx,{children:G()}),g.jsx(h0,{onPrevious:F,onNext:M,hasPrevious:o>0,hasNext:O.length?o<O.length-1:!1,currentLineIndex:o,totalLines:O.length||0,onSliderChange:l})]}),g.jsx(Ix,{isLoading:p}),g.jsx(w0,{isOpen:r,onClose:()=>e(!1)}),g.jsx(R0,{isOpen:t,onClose:()=>n(!1),onSongSelect:z}),g.jsx(J0,{isOpen:i,onClose:()=>s(!1),onSongLoad:z}),g.jsx(dx,{steps:kx,isOpen:x,onClose:k,onComplete:C})]})},ed=r=>{const e=document.createElement("div");e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),e.setAttribute("class","sr-only"),e.textContent=r,document.body.appendChild(e),setTimeout(()=>document.body.removeChild(e),1e3)},Vx=S.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 300px;
  display: ${r=>r.$visible?"block":"none"};
  border-left: 4px solid #ff9800;
`,Nx=S.div`
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ox=S.div`
  font-size: 14px;
  line-height: 1.4;
`,Mx=S.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  margin-left: 8px;
`,Lx=()=>{const[r,e]=V.useState(!0);let t=!1;try{t=Tn().isPreviewMode}catch{return console.warn("PreviewModeNotice: SongContext not available"),null}return t?g.jsxs(Vx,{$visible:r,children:[g.jsxs(Nx,{children:["Preview Mode",g.jsx(Mx,{onClick:()=>e(!1),children:"×"})]}),g.jsx(Ox,{children:"You're viewing a preview deployment. Some features like saving songs and user authentication may be limited."})]}):null},js=async()=>{var e,t,n,i,s;console.group("🔍 Firebase Debug Report"),console.log("Environment Information:"),console.log("- Current URL:",window.location.href),console.log("- Hostname:",window.location.hostname),console.log("- Protocol:",window.location.protocol),console.log("- User Agent:",navigator.userAgent),console.log("- Preview Deployment:",fg?"Yes":"No"),console.log("- Development Mode:",ft?"Yes":"No"),console.log("- Firebase Config:",{authDomain:"blindtab-db.firebaseapp.com",projectId:"blindtab-db"}),console.log("Auth State:"),console.log("- Current User:",hn.currentUser?"Signed In":"Not Signed In"),console.log("Checking if Firestore database exists...");let r=!1;try{console.log("Using Firebase SDK directly");const o=ln(Ft(_e,"firebase_test"),cn(1));await jt(o),r=!0,console.log("✅ Firestore database exists and is accessible")}catch(o){o.code==="permission-denied"?(console.log("✅ Firestore database exists but permission denied for test collection"),r=!0):o.code==="not-found"||(e=o.message)!=null&&e.includes("not found")?(console.error("❌ Firestore database not found"),r=!1):(console.error("❌ Error checking database:",o),r=!1)}r||(console.error("❌ Firestore database does not exist or is not accessible!"),console.log("🔧 You need to create a Firestore database in the Firebase Console:"),console.log("   1. Go to https://console.firebase.google.com/project/blindtab-db/firestore"),console.log('   2. Click "Create database"'),console.log("   3. Choose either production or test mode"),console.log("   4. Select a location close to your users"),console.log("   5. Wait for the database to be provisioned (this can take a few minutes)"),console.log('   6. Create a collection called "songs" to store your songs')),console.log("Testing Firestore Connection...");try{const o=Ft(_e,Ne.SONGS),l=ln(o,cn(1)),c=performance.now(),h=await jt(l),f=performance.now();if(console.log("✅ Firestore Connection Successful:"),console.log(`- Query Time: ${(f-c).toFixed(2)}ms`),console.log(`- Documents Found: ${h.size}`),h.size>0){const p=h.docs[0];console.log("- Sample Document:",{id:p.id,exists:p.exists(),data:p.data()})}}catch(o){if(console.error("❌ Firestore Connection Failed:",o),console.log("- Error Code:",o.code),console.log("- Error Message:",o.message),o.code==="permission-denied")console.log("🔧 Possible Fix: This domain may not be authorized in Firebase."),console.log("   Add it in Firebase Console -> Authentication -> Sign-in method -> Authorized domains");else if(o.code==="unavailable"||(t=o.message)!=null&&t.includes("network"))console.log("🔧 Possible Fix: Network connectivity issue or Firebase service disruption."),console.log("   Check Firebase Status: https://status.firebase.google.com/");else if(o.code==="resource-exhausted")console.log("🔧 Possible Fix: Firebase quota exceeded. Check your billing plan.");else if(o.code==="failed-precondition")console.log("🔧 Possible Fix: Firestore indexes may be missing."),console.log("   Check Firebase Console -> Firestore -> Indexes");else if((n=o.message)!=null&&n.includes("400")||(i=o.message)!=null&&i.includes("Bad Request")||(s=o.message)!=null&&s.includes("jd")){console.log("🔧 Possible Fix: WebChannel connection issue (Bad Request)."),console.log("   This is a known issue with Firebase WebChannel connections."),console.log("Attempting to fix WebChannel connection issue...");try{const l=xd(),c=xp(l,{experimentalForceLongPolling:!0,ssl:!0,ignoreUndefinedProperties:!0});c._settings={...c._settings,host:"firestore.googleapis.com",ssl:!0};const h=Ft(c,Ne.SONGS),f=ln(h,cn(1)),p=performance.now(),y=await jt(f),x=performance.now();console.log("✅ Connection Fixed with New Settings:"),console.log(`- Query Time: ${(x-p).toFixed(2)}ms`),console.log(`- Documents Found: ${y.size}`),console.log("To fix this issue permanently, update your Firebase configuration:"),console.log(`
// In your firebase.ts file:
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  ssl: true,
  ignoreUndefinedProperties: true
});

// Then apply this workaround:
// @ts-ignore
db._settings = {
  // @ts-ignore
  ...db._settings,
  host: 'firestore.googleapis.com',
  ssl: true
};
        `)}catch(l){console.error("Failed to fix WebChannel connection issue:",l)}}}if(console.log("Network Diagnostics:"),console.log("- Online Status:",navigator.onLine?"Online":"Offline"),ft)console.log("Skipping CORS test in development mode");else{console.log("Testing CORS Configuration...");try{const o=await fetch("https://blindtab-db.firebaseio.com/.json?shallow=true");console.log("- CORS Test Status:",o.status),console.log("- CORS Test OK:",o.ok)}catch(o){console.error("- CORS Test Failed:",o)}}return console.groupEnd(),"Firebase debug complete. Check console for detailed report."},Fx=()=>{window.runFirebaseDebug=js,console.log("Firebase debug utility added to window. Run window.runFirebaseDebug() in console.")},jx=async()=>{var r;try{console.group("🔧 Initializing Firestore Database"),console.log("Testing database connection...");let e=!1;try{console.log("Using Firebase SDK directly");const s=ln(Ft(_e,"firebase_test"),cn(1));await jt(s),e=!0,console.log("✅ Firestore database exists and is accessible")}catch(s){s.code==="permission-denied"?(console.log("✅ Firestore database exists but permission denied for test collection"),e=!0):s.code==="not-found"||(r=s.message)!=null&&r.includes("not found")?(console.error("❌ Firestore database not found"),e=!1):(console.error("❌ Error checking database:",s),e=!1)}if(!e)return console.error("❌ Firestore database not found. Please create it in the Firebase Console."),console.groupEnd(),!1;console.log("Checking for existing songs...");const t=ln(Ft(_e,Ne.SONGS),cn(1));if(!(await jt(t)).empty)return console.log("✅ Songs already exist in the database. Skipping initialization."),console.groupEnd(),!0;const i=await uT();if(!ft&&!i)return console.log("⚠️ User does not have dev access. Skipping initialization in production."),console.groupEnd(),!1;console.log("🔧 Initializing database with sample data..."),console.log(`Adding ${Fs.length} sample songs...`);for(const s of Fs){console.log(`Adding song: ${s.title}`),(!s.lyrics||!Array.isArray(s.lyrics))&&(console.warn(`Song ${s.title} is missing the lyrics field. Adding empty lyrics.`),s.lyrics=[]);const{id:o,...l}=s;await Ol(Xe(_e,Ne.SONGS,o),l)}return console.log("✅ Successfully added sample songs to Firestore"),console.groupEnd(),!0}catch(e){return console.error("❌ Error initializing Firestore:",e),console.groupEnd(),!1}},Ux=()=>{window.initializeFirestore=jx,console.log("Firestore initializer added to window. Run window.initializeFirestore() in console to add sample data.")};function Bx(){return V.useEffect(()=>{IT&&(window.runFirebaseDebug=js,Fx(),console.log("🔧 Firebase debug utility added. Run window.runFirebaseDebug() in console to diagnose issues."))},[]),V.useEffect(()=>{ft&&(console.log("Running Firebase debug in development mode..."),js().then(r=>{console.log(r)}),Ux(),console.log("🔧 Firestore initializer added. Run window.initializeFirestore() in console to add sample data."))},[]),g.jsx(ey,{children:g.jsxs(Ym,{children:[g.jsx(fd,{path:"/",element:g.jsx(PT,{children:g.jsx(kT,{children:g.jsx(dT,{children:g.jsxs(bT,{children:[g.jsx(Dx,{}),g.jsx(Lx,{})]})})})})}),!1]})})}window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"&&(console.log("🔧 Adding Firebase debug utility to window object"),window.runFirebaseDebug=js);oa.createRoot(document.getElementById("root")).render(g.jsx(td.StrictMode,{children:g.jsx(Bx,{})}));
