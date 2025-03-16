import{r as N,a as am,R as lm,_ as La,d as R,b as nd,l as Ye,m as rd,f as cm}from"./vendor-B6z8DUxt.js";var id={exports:{}},js={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um=N,hm=Symbol.for("react.element"),dm=Symbol.for("react.fragment"),fm=Object.prototype.hasOwnProperty,pm=um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gm={key:!0,ref:!0,__self:!0,__source:!0};function sd(r,e,t){var n,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)fm.call(e,n)&&!gm.hasOwnProperty(n)&&(i[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:hm,type:r,key:s,ref:o,props:i,_owner:pm.current}}js.Fragment=dm;js.jsx=sd;js.jsxs=sd;id.exports=js;var m=id.exports,ia={},Qc=am;ia.createRoot=Qc.createRoot,ia.hydrateRoot=Qc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ps(){return ps=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},ps.apply(this,arguments)}var kt;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(kt||(kt={}));const Jc="popstate";function mm(r){r===void 0&&(r={});function e(n,i){let{pathname:s,search:o,hash:l}=n.location;return sa("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(n,i){return typeof i=="string"?i:ad(i)}return ym(e,t,null,r)}function Be(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function od(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _m(){return Math.random().toString(36).substr(2,8)}function Yc(r,e){return{usr:r.state,key:r.key,idx:e}}function sa(r,e,t,n){return t===void 0&&(t=null),ps({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Us(e):e,{state:t,key:e&&e.key||n||_m()})}function ad(r){let{pathname:e="/",search:t="",hash:n=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Us(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let n=r.indexOf("?");n>=0&&(e.search=r.substr(n),r=r.substr(0,n)),r&&(e.pathname=r)}return e}function ym(r,e,t,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:s=!1}=n,o=i.history,l=kt.Pop,c=null,h=f();h==null&&(h=0,o.replaceState(ps({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=kt.Pop;let C=f(),M=C==null?null:C-h;h=C,c&&c({action:l,location:P.location,delta:M})}function y(C,M){l=kt.Push;let F=sa(P.location,C,M);h=f()+1;let O=Yc(F,h),$=P.createHref(F);try{o.pushState(O,"",$)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;i.location.assign($)}s&&c&&c({action:l,location:P.location,delta:1})}function b(C,M){l=kt.Replace;let F=sa(P.location,C,M);h=f();let O=Yc(F,h),$=P.createHref(F);o.replaceState(O,"",$),s&&c&&c({action:l,location:P.location,delta:0})}function k(C){let M=i.location.origin!=="null"?i.location.origin:i.location.href,F=typeof C=="string"?C:ad(C);return F=F.replace(/ $/,"%20"),Be(M,"No window.location.(origin|href) available to create URL for href: "+F),new URL(F,M)}let P={get action(){return l},get location(){return r(i,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Jc,p),c=C,()=>{i.removeEventListener(Jc,p),c=null}},createHref(C){return e(i,C)},createURL:k,encodeLocation(C){let M=k(C);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:y,replace:b,go(C){return o.go(C)}};return P}var Xc;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Xc||(Xc={}));function vm(r,e,t){return t===void 0&&(t="/"),wm(r,e,t)}function wm(r,e,t,n){let i=typeof e=="string"?Us(e):e,s=ud(i.pathname||"/",t);if(s==null)return null;let o=ld(r);Im(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let h=Vm(s);l=Pm(o[c],h)}return l}function ld(r,e,t,n){e===void 0&&(e=[]),t===void 0&&(t=[]),n===void 0&&(n="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(Be(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let h=Fn([n,c.relativePath]),f=t.concat(c);s.children&&s.children.length>0&&(Be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),ld(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:Rm(h,s.index),routesMeta:f})};return r.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of cd(s.path))i(s,o,c)}),e}function cd(r){let e=r.split("/");if(e.length===0)return[];let[t,...n]=e,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let o=cd(n.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>r.startsWith("/")&&c===""?"/":c)}function Im(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Cm(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}const Em=/^:[\w-]+$/,bm=3,Tm=2,xm=1,Sm=10,Am=-2,Zc=r=>r==="*";function Rm(r,e){let t=r.split("/"),n=t.length;return t.some(Zc)&&(n+=Am),e&&(n+=Tm),t.filter(i=>!Zc(i)).reduce((i,s)=>i+(Em.test(s)?bm:s===""?xm:Sm),n)}function Cm(r,e){return r.length===e.length&&r.slice(0,-1).every((n,i)=>n===e[i])?r[r.length-1]-e[e.length-1]:0}function Pm(r,e,t){let{routesMeta:n}=r,i={},s="/",o=[];for(let l=0;l<n.length;++l){let c=n[l],h=l===n.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=km({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},f),y=c.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Fn([s,p.pathname]),pathnameBase:Nm(Fn([s,p.pathnameBase])),route:y}),p.pathnameBase!=="/"&&(s=Fn([s,p.pathnameBase]))}return o}function km(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,n]=Dm(r.path,r.caseSensitive,r.end),i=e.match(t);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((h,f,p)=>{let{paramName:y,isOptional:b}=f;if(y==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const k=l[p];return b&&!k?h[y]=void 0:h[y]=(k||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:r}}function Dm(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),od(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let n=[],i="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(n.push({paramName:"*"}),i+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":r!==""&&r!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),n]}function Vm(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return od(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function ud(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=r.charAt(t);return n&&n!=="/"?null:r.slice(t)||"/"}const Fn=r=>r.join("/").replace(/\/\/+/g,"/"),Nm=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/");function Om(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const hd=["post","put","patch","delete"];new Set(hd);const Mm=["get",...hd];new Set(Mm);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gs(){return gs=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},gs.apply(this,arguments)}const Lm=N.createContext(null),Fm=N.createContext(null),dd=N.createContext(null),Bs=N.createContext(null),$s=N.createContext({outlet:null,matches:[],isDataRoute:!1}),fd=N.createContext(null);function Fa(){return N.useContext(Bs)!=null}function jm(){return Fa()||Be(!1),N.useContext(Bs).location}function Um(r,e){return Bm(r,e)}function Bm(r,e,t,n){Fa()||Be(!1);let{navigator:i,static:s}=N.useContext(dd),{matches:o}=N.useContext($s),l=o[o.length-1],c=l?l.params:{};l&&l.pathname;let h=l?l.pathnameBase:"/";l&&l.route;let f=jm(),p;if(e){var y;let M=typeof e=="string"?Us(e):e;h==="/"||(y=M.pathname)!=null&&y.startsWith(h)||Be(!1),p=M}else p=f;let b=p.pathname||"/",k=b;if(h!=="/"){let M=h.replace(/^\//,"").split("/");k="/"+b.replace(/^\//,"").split("/").slice(M.length).join("/")}let P=vm(r,{pathname:k}),C=Km(P&&P.map(M=>Object.assign({},M,{params:Object.assign({},c,M.params),pathname:Fn([h,i.encodeLocation?i.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?h:Fn([h,i.encodeLocation?i.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),o,t,n);return e&&C?N.createElement(Bs.Provider,{value:{location:gs({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:kt.Pop}},C):C}function $m(){let r=Jm(),e=Om(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),t?N.createElement("pre",{style:i},t):null,null)}const zm=N.createElement($m,null);class qm extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?N.createElement($s.Provider,{value:this.props.routeContext},N.createElement(fd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gm(r){let{routeContext:e,match:t,children:n}=r,i=N.useContext(Lm);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement($s.Provider,{value:e},n)}function Km(r,e,t,n){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),n===void 0&&(n=null),r==null){var s;if(!t)return null;if(t.errors)r=t.matches;else if((s=n)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=(i=t)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Be(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,h=-1;if(t&&n&&n.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:y,errors:b}=t,k=p.route.loader&&y[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||k){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,p,y)=>{let b,k=!1,P=null,C=null;t&&(b=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||zm,c&&(h<0&&y===0?(Ym("route-fallback"),k=!0,C=null):h===y&&(k=!0,C=p.route.hydrateFallbackElement||null)));let M=e.concat(o.slice(0,y+1)),F=()=>{let O;return b?O=P:k?O=C:p.route.Component?O=N.createElement(p.route.Component,null):p.route.element?O=p.route.element:O=f,N.createElement(Gm,{match:p,routeContext:{outlet:f,matches:M,isDataRoute:t!=null},children:O})};return t&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?N.createElement(qm,{location:t.location,revalidation:t.revalidation,component:P,error:b,children:F(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):F()},null)}var pd=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(pd||{});function Wm(r){let e=N.useContext(Fm);return e||Be(!1),e}function Hm(r){let e=N.useContext($s);return e||Be(!1),e}function Qm(r){let e=Hm(),t=e.matches[e.matches.length-1];return t.route.id||Be(!1),t.route.id}function Jm(){var r;let e=N.useContext(fd),t=Wm(pd.UseRouteError),n=Qm();return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}const eu={};function Ym(r,e,t){eu[r]||(eu[r]=!0)}function Xm(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function gd(r){Be(!1)}function Zm(r){let{basename:e="/",children:t=null,location:n,navigationType:i=kt.Pop,navigator:s,static:o=!1,future:l}=r;Fa()&&Be(!1);let c=e.replace(/^\/*/,"/"),h=N.useMemo(()=>({basename:c,navigator:s,static:o,future:gs({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof n=="string"&&(n=Us(n));let{pathname:f="/",search:p="",hash:y="",state:b=null,key:k="default"}=n,P=N.useMemo(()=>{let C=ud(f,c);return C==null?null:{location:{pathname:C,search:p,hash:y,state:b,key:k},navigationType:i}},[c,f,p,y,b,k,i]);return P==null?null:N.createElement(dd.Provider,{value:h},N.createElement(Bs.Provider,{children:t,value:P}))}function e_(r){let{children:e,location:t}=r;return Um(oa(e),t)}new Promise(()=>{});function oa(r,e){e===void 0&&(e=[]);let t=[];return N.Children.forEach(r,(n,i)=>{if(!N.isValidElement(n))return;let s=[...e,i];if(n.type===N.Fragment){t.push.apply(t,oa(n.props.children,s));return}n.type!==gd&&Be(!1),!n.props.index||!n.props.children||Be(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=oa(n.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const t_="6";try{window.__reactRouterVersion=t_}catch{}const n_="startTransition",tu=lm[n_];function r_(r){let{basename:e,children:t,future:n,window:i}=r,s=N.useRef();s.current==null&&(s.current=mm({window:i,v5Compat:!0}));let o=s.current,[l,c]=N.useState({action:o.action,location:o.location}),{v7_startTransition:h}=n||{},f=N.useCallback(p=>{h&&tu?tu(()=>c(p)):c(p)},[c,h]);return N.useLayoutEffect(()=>o.listen(f),[o,f]),N.useEffect(()=>Xm(n),[n]),N.createElement(Zm,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o,future:n})}var nu;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(nu||(nu={}));var ru;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(ru||(ru={}));var iu={};/**
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
 */const md=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},i_=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],l=r[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,l=o?r[i+1]:0,c=i+2<r.length,h=c?r[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,b=h&63;c||(b=64,o||(y=64)),n.push(t[f],t[p],t[y],t[b])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(md(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):i_(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],l=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new s_;const y=s<<2|l>>4;if(n.push(y),h!==64){const b=l<<4&240|h>>2;if(n.push(b),p!==64){const k=h<<6&192|p;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class s_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o_=function(r){const e=md(r);return _d.encodeByteArray(e,!0)},yd=function(r){return o_(r).replace(/\./g,"")},vd=function(r){try{return _d.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function a_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const l_=()=>a_().__FIREBASE_DEFAULTS__,c_=()=>{if(typeof process>"u"||typeof iu>"u")return;const r=iu.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},u_=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&vd(r[1]);return e&&JSON.parse(e)},zs=()=>{try{return l_()||c_()||u_()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},h_=r=>{var e,t;return(t=(e=zs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},wd=()=>{var r;return(r=zs())===null||r===void 0?void 0:r.config},Id=r=>{var e;return(e=zs())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class d_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function f_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function p_(){var r;const e=(r=zs())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function g_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function m_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function __(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y_(){const r=ye();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Ed(){return!p_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bd(){try{return typeof indexedDB=="object"}catch{return!1}}function v_(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const w_="FirebaseError";class yt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=w_,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?I_(s,n):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new yt(i,l,n)}}function I_(r,e){return r.replace(E_,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const E_=/\{\$([^}]+)}/g;function b_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Yr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(su(s)&&su(o)){if(!Yr(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function su(r){return r!==null&&typeof r=="object"}/**
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
 */function hi(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function T_(r,e){const t=new x_(r,e);return t.subscribe.bind(t)}class x_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");S_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=jo),i.error===void 0&&(i.error=jo),i.complete===void 0&&(i.complete=jo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S_(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function jo(){}/**
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
 */function be(r){return r&&r._delegate?r._delegate:r}class cn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jt="[DEFAULT]";/**
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
 */class A_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new d_;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(C_(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);n===l&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:R_(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R_(r){return r===Jt?void 0:r}function C_(r){return r.instantiationMode==="EAGER"}/**
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
 */class P_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new A_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(X||(X={}));const k_={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},D_=X.INFO,V_={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},N_=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=V_[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ja{constructor(e){this.name=e,this._logLevel=D_,this._logHandler=N_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?k_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const O_=(r,e)=>e.some(t=>r instanceof t);let ou,au;function M_(){return ou||(ou=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function L_(){return au||(au=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Td=new WeakMap,aa=new WeakMap,xd=new WeakMap,Uo=new WeakMap,Ua=new WeakMap;function F_(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(Vt(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Td.set(t,r)}).catch(()=>{}),Ua.set(e,r),e}function j_(r){if(aa.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});aa.set(r,e)}let la={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return aa.get(r);if(e==="objectStoreNames")return r.objectStoreNames||xd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function U_(r){la=r(la)}function B_(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Bo(this),e,...t);return xd.set(n,e.sort?e.sort():[e]),Vt(n)}:L_().includes(r)?function(...e){return r.apply(Bo(this),e),Vt(Td.get(this))}:function(...e){return Vt(r.apply(Bo(this),e))}}function $_(r){return typeof r=="function"?B_(r):(r instanceof IDBTransaction&&j_(r),O_(r,M_())?new Proxy(r,la):r)}function Vt(r){if(r instanceof IDBRequest)return F_(r);if(Uo.has(r))return Uo.get(r);const e=$_(r);return e!==r&&(Uo.set(r,e),Ua.set(e,r)),e}const Bo=r=>Ua.get(r);function z_(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),l=Vt(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Vt(o.result),c.oldVersion,c.newVersion,Vt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const q_=["get","getKey","getAll","getAllKeys","count"],G_=["put","add","delete","clear"],$o=new Map;function lu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if($o.get(e))return $o.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=G_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||q_.includes(t)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return $o.set(e,s),s}U_(r=>({...r,get:(e,t,n)=>lu(e,t)||r.get(e,t,n),has:(e,t)=>!!lu(e,t)||r.has(e,t)}));/**
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
 */class K_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(W_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function W_(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ca="@firebase/app",cu="0.10.13";/**
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
 */const gt=new ja("@firebase/app"),H_="@firebase/app-compat",Q_="@firebase/analytics-compat",J_="@firebase/analytics",Y_="@firebase/app-check-compat",X_="@firebase/app-check",Z_="@firebase/auth",ey="@firebase/auth-compat",ty="@firebase/database",ny="@firebase/data-connect",ry="@firebase/database-compat",iy="@firebase/functions",sy="@firebase/functions-compat",oy="@firebase/installations",ay="@firebase/installations-compat",ly="@firebase/messaging",cy="@firebase/messaging-compat",uy="@firebase/performance",hy="@firebase/performance-compat",dy="@firebase/remote-config",fy="@firebase/remote-config-compat",py="@firebase/storage",gy="@firebase/storage-compat",my="@firebase/firestore",_y="@firebase/vertexai-preview",yy="@firebase/firestore-compat",vy="firebase",wy="10.14.1";/**
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
 */const ua="[DEFAULT]",Iy={[ca]:"fire-core",[H_]:"fire-core-compat",[J_]:"fire-analytics",[Q_]:"fire-analytics-compat",[X_]:"fire-app-check",[Y_]:"fire-app-check-compat",[Z_]:"fire-auth",[ey]:"fire-auth-compat",[ty]:"fire-rtdb",[ny]:"fire-data-connect",[ry]:"fire-rtdb-compat",[iy]:"fire-fn",[sy]:"fire-fn-compat",[oy]:"fire-iid",[ay]:"fire-iid-compat",[ly]:"fire-fcm",[cy]:"fire-fcm-compat",[uy]:"fire-perf",[hy]:"fire-perf-compat",[dy]:"fire-rc",[fy]:"fire-rc-compat",[py]:"fire-gcs",[gy]:"fire-gcs-compat",[my]:"fire-fst",[yy]:"fire-fst-compat",[_y]:"fire-vertex","fire-js":"fire-js",[vy]:"fire-js-all"};/**
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
 */const ms=new Map,Ey=new Map,ha=new Map;function uu(r,e){try{r.container.addComponent(e)}catch(t){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Gn(r){const e=r.name;if(ha.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;ha.set(e,r);for(const t of ms.values())uu(t,r);for(const t of Ey.values())uu(t,r);return!0}function Ba(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function ct(r){return r.settings!==void 0}/**
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
 */const by={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new ui("app","Firebase",by);/**
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
 */class Ty{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const ar=wy;function Sd(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:ua,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(t||(t=wd()),!t)throw Nt.create("no-options");const s=ms.get(i);if(s){if(Yr(t,s.options)&&Yr(n,s.config))return s;throw Nt.create("duplicate-app",{appName:i})}const o=new P_(i);for(const c of ha.values())o.addComponent(c);const l=new Ty(t,n,o);return ms.set(i,l),l}function Ad(r=ua){const e=ms.get(r);if(!e&&r===ua&&wd())return Sd();if(!e)throw Nt.create("no-app",{appName:r});return e}function Ot(r,e,t){var n;let i=(n=Iy[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(l.join(" "));return}Gn(new cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const xy="firebase-heartbeat-database",Sy=1,Xr="firebase-heartbeat-store";let zo=null;function Rd(){return zo||(zo=z_(xy,Sy,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Xr)}catch(t){console.warn(t)}}}}).catch(r=>{throw Nt.create("idb-open",{originalErrorMessage:r.message})})),zo}async function Ay(r){try{const t=(await Rd()).transaction(Xr),n=await t.objectStore(Xr).get(Cd(r));return await t.done,n}catch(e){if(e instanceof yt)gt.warn(e.message);else{const t=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(t.message)}}}async function hu(r,e){try{const n=(await Rd()).transaction(Xr,"readwrite");await n.objectStore(Xr).put(e,Cd(r)),await n.done}catch(t){if(t instanceof yt)gt.warn(t.message);else{const n=Nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gt.warn(n.message)}}}function Cd(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Ry=1024,Cy=30*24*60*60*1e3;class Py{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Dy(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=du();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Cy}),this._storage.overwrite(this._heartbeatsCache))}catch(n){gt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=du(),{heartbeatsToSend:n,unsentEntries:i}=ky(this._heartbeatsCache.heartbeats),s=yd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return gt.warn(t),""}}}function du(){return new Date().toISOString().substring(0,10)}function ky(r,e=Ry){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),fu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Dy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bd()?v_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ay(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return hu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return hu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fu(r){return yd(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function Vy(r){Gn(new cn("platform-logger",e=>new K_(e),"PRIVATE")),Gn(new cn("heartbeat",e=>new Py(e),"PRIVATE")),Ot(ca,cu,r),Ot(ca,cu,"esm2017"),Ot("fire-js","")}Vy("");var pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rn,Pd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function w(){}w.prototype=_.prototype,I.D=_.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(E,T,x){for(var v=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)v[_e-2]=arguments[_e];return _.prototype[T].apply(E,v)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,w){w||(w=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(T=0;16>T;++T)E[T]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=I.g[0],w=I.g[1],T=I.g[2];var x=I.g[3],v=_+(x^w&(T^x))+E[0]+3614090360&4294967295;_=w+(v<<7&4294967295|v>>>25),v=x+(T^_&(w^T))+E[1]+3905402710&4294967295,x=_+(v<<12&4294967295|v>>>20),v=T+(w^x&(_^w))+E[2]+606105819&4294967295,T=x+(v<<17&4294967295|v>>>15),v=w+(_^T&(x^_))+E[3]+3250441966&4294967295,w=T+(v<<22&4294967295|v>>>10),v=_+(x^w&(T^x))+E[4]+4118548399&4294967295,_=w+(v<<7&4294967295|v>>>25),v=x+(T^_&(w^T))+E[5]+1200080426&4294967295,x=_+(v<<12&4294967295|v>>>20),v=T+(w^x&(_^w))+E[6]+2821735955&4294967295,T=x+(v<<17&4294967295|v>>>15),v=w+(_^T&(x^_))+E[7]+4249261313&4294967295,w=T+(v<<22&4294967295|v>>>10),v=_+(x^w&(T^x))+E[8]+1770035416&4294967295,_=w+(v<<7&4294967295|v>>>25),v=x+(T^_&(w^T))+E[9]+2336552879&4294967295,x=_+(v<<12&4294967295|v>>>20),v=T+(w^x&(_^w))+E[10]+4294925233&4294967295,T=x+(v<<17&4294967295|v>>>15),v=w+(_^T&(x^_))+E[11]+2304563134&4294967295,w=T+(v<<22&4294967295|v>>>10),v=_+(x^w&(T^x))+E[12]+1804603682&4294967295,_=w+(v<<7&4294967295|v>>>25),v=x+(T^_&(w^T))+E[13]+4254626195&4294967295,x=_+(v<<12&4294967295|v>>>20),v=T+(w^x&(_^w))+E[14]+2792965006&4294967295,T=x+(v<<17&4294967295|v>>>15),v=w+(_^T&(x^_))+E[15]+1236535329&4294967295,w=T+(v<<22&4294967295|v>>>10),v=_+(T^x&(w^T))+E[1]+4129170786&4294967295,_=w+(v<<5&4294967295|v>>>27),v=x+(w^T&(_^w))+E[6]+3225465664&4294967295,x=_+(v<<9&4294967295|v>>>23),v=T+(_^w&(x^_))+E[11]+643717713&4294967295,T=x+(v<<14&4294967295|v>>>18),v=w+(x^_&(T^x))+E[0]+3921069994&4294967295,w=T+(v<<20&4294967295|v>>>12),v=_+(T^x&(w^T))+E[5]+3593408605&4294967295,_=w+(v<<5&4294967295|v>>>27),v=x+(w^T&(_^w))+E[10]+38016083&4294967295,x=_+(v<<9&4294967295|v>>>23),v=T+(_^w&(x^_))+E[15]+3634488961&4294967295,T=x+(v<<14&4294967295|v>>>18),v=w+(x^_&(T^x))+E[4]+3889429448&4294967295,w=T+(v<<20&4294967295|v>>>12),v=_+(T^x&(w^T))+E[9]+568446438&4294967295,_=w+(v<<5&4294967295|v>>>27),v=x+(w^T&(_^w))+E[14]+3275163606&4294967295,x=_+(v<<9&4294967295|v>>>23),v=T+(_^w&(x^_))+E[3]+4107603335&4294967295,T=x+(v<<14&4294967295|v>>>18),v=w+(x^_&(T^x))+E[8]+1163531501&4294967295,w=T+(v<<20&4294967295|v>>>12),v=_+(T^x&(w^T))+E[13]+2850285829&4294967295,_=w+(v<<5&4294967295|v>>>27),v=x+(w^T&(_^w))+E[2]+4243563512&4294967295,x=_+(v<<9&4294967295|v>>>23),v=T+(_^w&(x^_))+E[7]+1735328473&4294967295,T=x+(v<<14&4294967295|v>>>18),v=w+(x^_&(T^x))+E[12]+2368359562&4294967295,w=T+(v<<20&4294967295|v>>>12),v=_+(w^T^x)+E[5]+4294588738&4294967295,_=w+(v<<4&4294967295|v>>>28),v=x+(_^w^T)+E[8]+2272392833&4294967295,x=_+(v<<11&4294967295|v>>>21),v=T+(x^_^w)+E[11]+1839030562&4294967295,T=x+(v<<16&4294967295|v>>>16),v=w+(T^x^_)+E[14]+4259657740&4294967295,w=T+(v<<23&4294967295|v>>>9),v=_+(w^T^x)+E[1]+2763975236&4294967295,_=w+(v<<4&4294967295|v>>>28),v=x+(_^w^T)+E[4]+1272893353&4294967295,x=_+(v<<11&4294967295|v>>>21),v=T+(x^_^w)+E[7]+4139469664&4294967295,T=x+(v<<16&4294967295|v>>>16),v=w+(T^x^_)+E[10]+3200236656&4294967295,w=T+(v<<23&4294967295|v>>>9),v=_+(w^T^x)+E[13]+681279174&4294967295,_=w+(v<<4&4294967295|v>>>28),v=x+(_^w^T)+E[0]+3936430074&4294967295,x=_+(v<<11&4294967295|v>>>21),v=T+(x^_^w)+E[3]+3572445317&4294967295,T=x+(v<<16&4294967295|v>>>16),v=w+(T^x^_)+E[6]+76029189&4294967295,w=T+(v<<23&4294967295|v>>>9),v=_+(w^T^x)+E[9]+3654602809&4294967295,_=w+(v<<4&4294967295|v>>>28),v=x+(_^w^T)+E[12]+3873151461&4294967295,x=_+(v<<11&4294967295|v>>>21),v=T+(x^_^w)+E[15]+530742520&4294967295,T=x+(v<<16&4294967295|v>>>16),v=w+(T^x^_)+E[2]+3299628645&4294967295,w=T+(v<<23&4294967295|v>>>9),v=_+(T^(w|~x))+E[0]+4096336452&4294967295,_=w+(v<<6&4294967295|v>>>26),v=x+(w^(_|~T))+E[7]+1126891415&4294967295,x=_+(v<<10&4294967295|v>>>22),v=T+(_^(x|~w))+E[14]+2878612391&4294967295,T=x+(v<<15&4294967295|v>>>17),v=w+(x^(T|~_))+E[5]+4237533241&4294967295,w=T+(v<<21&4294967295|v>>>11),v=_+(T^(w|~x))+E[12]+1700485571&4294967295,_=w+(v<<6&4294967295|v>>>26),v=x+(w^(_|~T))+E[3]+2399980690&4294967295,x=_+(v<<10&4294967295|v>>>22),v=T+(_^(x|~w))+E[10]+4293915773&4294967295,T=x+(v<<15&4294967295|v>>>17),v=w+(x^(T|~_))+E[1]+2240044497&4294967295,w=T+(v<<21&4294967295|v>>>11),v=_+(T^(w|~x))+E[8]+1873313359&4294967295,_=w+(v<<6&4294967295|v>>>26),v=x+(w^(_|~T))+E[15]+4264355552&4294967295,x=_+(v<<10&4294967295|v>>>22),v=T+(_^(x|~w))+E[6]+2734768916&4294967295,T=x+(v<<15&4294967295|v>>>17),v=w+(x^(T|~_))+E[13]+1309151649&4294967295,w=T+(v<<21&4294967295|v>>>11),v=_+(T^(w|~x))+E[4]+4149444226&4294967295,_=w+(v<<6&4294967295|v>>>26),v=x+(w^(_|~T))+E[11]+3174756917&4294967295,x=_+(v<<10&4294967295|v>>>22),v=T+(_^(x|~w))+E[2]+718787259&4294967295,T=x+(v<<15&4294967295|v>>>17),v=w+(x^(T|~_))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(T+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+x&4294967295}n.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var w=_-this.blockSize,E=this.B,T=this.h,x=0;x<_;){if(T==0)for(;x<=w;)i(this,I,x),x+=this.blockSize;if(typeof I=="string"){for(;x<_;)if(E[T++]=I.charCodeAt(x++),T==this.blockSize){i(this,E),T=0;break}}else for(;x<_;)if(E[T++]=I[x++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=_},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var w=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=w&255,w/=256;for(this.u(I),I=Array(16),_=w=0;4>_;++_)for(var E=0;32>E;E+=8)I[w++]=this.g[_]>>>E&255;return I};function s(I,_){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=_(I)}function o(I,_){this.h=_;for(var w=[],E=!0,T=I.length-1;0<=T;T--){var x=I[T]|0;E&&x==_||(w[T]=x,E=!1)}this.g=w}var l={};function c(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return C(h(-I));for(var _=[],w=1,E=0;I>=w;E++)_[E]=I/w|0,w*=4294967296;return new o(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return C(f(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(_,8)),E=p,T=0;T<I.length;T+=8){var x=Math.min(8,I.length-T),v=parseInt(I.substring(T,T+x),_);8>x?(x=h(Math.pow(_,x)),E=E.j(x).add(h(v))):(E=E.j(w),E=E.add(h(v)))}return E}var p=c(0),y=c(1),b=c(16777216);r=o.prototype,r.m=function(){if(P(this))return-C(this).m();for(var I=0,_=1,w=0;w<this.g.length;w++){var E=this.i(w);I+=(0<=E?E:4294967296+E)*_,_*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(P(this))return"-"+C(this).toString(I);for(var _=h(Math.pow(I,6)),w=this,E="";;){var T=$(w,_).g;w=M(w,T.j(_));var x=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=T,k(w))return x+E;for(;6>x.length;)x="0"+x;E=x+E}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function P(I){return I.h==-1}r.l=function(I){return I=M(this,I),P(I)?-1:k(I)?0:1};function C(I){for(var _=I.g.length,w=[],E=0;E<_;E++)w[E]=~I.g[E];return new o(w,~I.h).add(y)}r.abs=function(){return P(this)?C(this):this},r.add=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],E=0,T=0;T<=_;T++){var x=E+(this.i(T)&65535)+(I.i(T)&65535),v=(x>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=v>>>16,x&=65535,v&=65535,w[T]=v<<16|x}return new o(w,w[w.length-1]&-2147483648?-1:0)};function M(I,_){return I.add(C(_))}r.j=function(I){if(k(this)||k(I))return p;if(P(this))return P(I)?C(this).j(C(I)):C(C(this).j(I));if(P(I))return C(this.j(C(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var _=this.g.length+I.g.length,w=[],E=0;E<2*_;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<I.g.length;T++){var x=this.i(E)>>>16,v=this.i(E)&65535,_e=I.i(T)>>>16,$e=I.i(T)&65535;w[2*E+2*T]+=v*$e,F(w,2*E+2*T),w[2*E+2*T+1]+=x*$e,F(w,2*E+2*T+1),w[2*E+2*T+1]+=v*_e,F(w,2*E+2*T+1),w[2*E+2*T+2]+=x*_e,F(w,2*E+2*T+2)}for(E=0;E<_;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=_;E<2*_;E++)w[E]=0;return new o(w,0)};function F(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function O(I,_){this.g=I,this.h=_}function $(I,_){if(k(_))throw Error("division by zero");if(k(I))return new O(p,p);if(P(I))return _=$(C(I),_),new O(C(_.g),C(_.h));if(P(_))return _=$(I,C(_)),new O(C(_.g),_.h);if(30<I.g.length){if(P(I)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var w=y,E=_;0>=E.l(I);)w=q(w),E=q(E);var T=z(w,1),x=z(E,1);for(E=z(E,2),w=z(w,2);!k(E);){var v=x.add(E);0>=v.l(I)&&(T=T.add(w),x=v),E=z(E,1),w=z(w,1)}return _=M(I,T.j(_)),new O(T,_)}for(T=p;0<=I.l(_);){for(w=Math.max(1,Math.floor(I.m()/_.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),x=h(w),v=x.j(_);P(v)||0<v.l(I);)w-=E,x=h(w),v=x.j(_);k(x)&&(x=y),T=T.add(x),I=M(I,v)}return new O(T,I)}r.A=function(I){return $(this,I).h},r.and=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)&I.i(E);return new o(w,this.h&I.h)},r.or=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)|I.i(E);return new o(w,this.h|I.h)},r.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)^I.i(E);return new o(w,this.h^I.h)};function q(I){for(var _=I.g.length+1,w=[],E=0;E<_;E++)w[E]=I.i(E)<<1|I.i(E-1)>>>31;return new o(w,I.h)}function z(I,_){var w=_>>5;_%=32;for(var E=I.g.length-w,T=[],x=0;x<E;x++)T[x]=0<_?I.i(x+w)>>>_|I.i(x+w+1)<<32-_:I.i(x+w);return new o(T,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Pd=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,rn=o}).apply(typeof pu<"u"?pu:typeof self<"u"?self:typeof window<"u"?window:{});var zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kd,Mr,Dd,Zi,da,Vd,Nd,Od;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof zi=="object"&&zi];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,u){if(u)e:{var d=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in d))break e;d=d[S]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var d=0,g=!1,S={next:function(){if(!g&&d<a.length){var D=d++;return{value:u(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function y(a,u,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,y.apply(null,arguments)}function b(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function k(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,S,D){for(var U=Array(arguments.length-2),se=2;se<arguments.length;se++)U[se-2]=arguments[se];return u.prototype[S].apply(g,U)}}function P(a){const u=a.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function C(a,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const S=a.length||0,D=g.length||0;a.length=S+D;for(let U=0;U<D;U++)a[S+U]=g[U]}else a.push(g)}}class M{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var q=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function z(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function I(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function _(a){const u={};for(const d in a)u[d]=a[d];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,u){let d,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(d in g)a[d]=g[d];for(let D=0;D<w.length;D++)d=w[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function T(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function x(a){l.setTimeout(()=>{throw a},0)}function v(){var a=go;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class _e{constructor(){this.h=this.g=null}add(u,d){const g=$e.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var $e=new M(()=>new Sg,a=>a.reset());class Sg{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let fr,pr=!1,go=new _e,Ql=()=>{const a=l.Promise.resolve(void 0);fr=()=>{a.then(Ag)}};var Ag=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){x(d)}var u=$e;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}pr=!1};function wt(){this.s=this.s,this.C=this.C}wt.prototype.s=!1,wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Rg=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function gr(a,u){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(q){e:{try{$(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Cg[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&gr.aa.h.call(this)}}k(gr,Te);var Cg={2:"touch",3:"pen",4:"mouse"};gr.prototype.h=function(){gr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ti="closure_listenable_"+(1e6*Math.random()|0),Pg=0;function kg(a,u,d,g,S){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=S,this.key=++Pg,this.da=this.fa=!1}function xi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Si(a){this.src=a,this.g={},this.h=0}Si.prototype.add=function(a,u,d,g,S){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var U=_o(a,u,g,S);return-1<U?(u=a[U],d||(u.fa=!1)):(u=new kg(u,this.src,D,!!g,S),u.fa=d,a.push(u)),u};function mo(a,u){var d=u.type;if(d in a.g){var g=a.g[d],S=Array.prototype.indexOf.call(g,u,void 0),D;(D=0<=S)&&Array.prototype.splice.call(g,S,1),D&&(xi(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function _o(a,u,d,g){for(var S=0;S<a.length;++S){var D=a[S];if(!D.da&&D.listener==u&&D.capture==!!d&&D.ha==g)return S}return-1}var yo="closure_lm_"+(1e6*Math.random()|0),vo={};function Jl(a,u,d,g,S){if(Array.isArray(u)){for(var D=0;D<u.length;D++)Jl(a,u[D],d,g,S);return null}return d=Zl(d),a&&a[Ti]?a.K(u,d,h(g)?!!g.capture:!1,S):Dg(a,u,d,!1,g,S)}function Dg(a,u,d,g,S,D){if(!u)throw Error("Invalid event type");var U=h(S)?!!S.capture:!!S,se=Io(a);if(se||(a[yo]=se=new Si(a)),d=se.add(u,d,g,U,D),d.proxy)return d;if(g=Vg(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Rg||(S=U),S===void 0&&(S=!1),a.addEventListener(u.toString(),g,S);else if(a.attachEvent)a.attachEvent(Xl(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Vg(){function a(d){return u.call(a.src,a.listener,d)}const u=Ng;return a}function Yl(a,u,d,g,S){if(Array.isArray(u))for(var D=0;D<u.length;D++)Yl(a,u[D],d,g,S);else g=h(g)?!!g.capture:!!g,d=Zl(d),a&&a[Ti]?(a=a.i,u=String(u).toString(),u in a.g&&(D=a.g[u],d=_o(D,d,g,S),-1<d&&(xi(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[u],a.h--)))):a&&(a=Io(a))&&(u=a.g[u.toString()],a=-1,u&&(a=_o(u,d,g,S)),(d=-1<a?u[a]:null)&&wo(d))}function wo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ti])mo(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(Xl(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Io(u))?(mo(d,a),d.h==0&&(d.src=null,u[yo]=null)):xi(a)}}}function Xl(a){return a in vo?vo[a]:vo[a]="on"+a}function Ng(a,u){if(a.da)a=!0;else{u=new gr(u,this);var d=a.listener,g=a.ha||a.src;a.fa&&wo(a),a=d.call(g,u)}return a}function Io(a){return a=a[yo],a instanceof Si?a:null}var Eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zl(a){return typeof a=="function"?a:(a[Eo]||(a[Eo]=function(u){return a.handleEvent(u)}),a[Eo])}function xe(){wt.call(this),this.i=new Si(this),this.M=this,this.F=null}k(xe,wt),xe.prototype[Ti]=!0,xe.prototype.removeEventListener=function(a,u,d,g){Yl(this,a,u,d,g)};function De(a,u){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Te(u,a);else if(u instanceof Te)u.target=u.target||a;else{var S=u;u=new Te(g,a),E(u,S)}if(S=!0,d)for(var D=d.length-1;0<=D;D--){var U=u.g=d[D];S=Ai(U,g,!0,u)&&S}if(U=u.g=a,S=Ai(U,g,!0,u)&&S,S=Ai(U,g,!1,u)&&S,d)for(D=0;D<d.length;D++)U=u.g=d[D],S=Ai(U,g,!1,u)&&S}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],g=0;g<d.length;g++)xi(d[g]);delete a.g[u],a.h--}}this.F=null},xe.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},xe.prototype.L=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function Ai(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,D=0;D<u.length;++D){var U=u[D];if(U&&!U.da&&U.capture==d){var se=U.listener,Ie=U.ha||U.src;U.fa&&mo(a.i,U),S=se.call(Ie,g)!==!1&&S}}return S&&!g.defaultPrevented}function ec(a,u,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function tc(a){a.g=ec(()=>{a.g=null,a.i&&(a.i=!1,tc(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Og extends wt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:tc(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(a){wt.call(this),this.h=a,this.g={}}k(mr,wt);var nc=[];function rc(a){z(a.g,function(u,d){this.g.hasOwnProperty(d)&&wo(u)},a),a.g={}}mr.prototype.N=function(){mr.aa.N.call(this),rc(this)},mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bo=l.JSON.stringify,Mg=l.JSON.parse,Lg=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function To(){}To.prototype.h=null;function ic(a){return a.h||(a.h=a.i())}function sc(){}var _r={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xo(){Te.call(this,"d")}k(xo,Te);function So(){Te.call(this,"c")}k(So,Te);var Gt={},oc=null;function Ri(){return oc=oc||new xe}Gt.La="serverreachability";function ac(a){Te.call(this,Gt.La,a)}k(ac,Te);function yr(a){const u=Ri();De(u,new ac(u))}Gt.STAT_EVENT="statevent";function lc(a,u){Te.call(this,Gt.STAT_EVENT,a),this.stat=u}k(lc,Te);function Ve(a){const u=Ri();De(u,new lc(u,a))}Gt.Ma="timingevent";function cc(a,u){Te.call(this,Gt.Ma,a),this.size=u}k(cc,Te);function vr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function wr(){this.g=!0}wr.prototype.xa=function(){this.g=!1};function Fg(a,u,d,g,S,D){a.info(function(){if(a.g)if(D)for(var U="",se=D.split("&"),Ie=0;Ie<se.length;Ie++){var te=se[Ie].split("=");if(1<te.length){var Se=te[0];te=te[1];var Ae=Se.split("_");U=2<=Ae.length&&Ae[1]=="type"?U+(Se+"="+te+"&"):U+(Se+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+d+`
`+U})}function jg(a,u,d,g,S,D,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+d+`
`+D+" "+U})}function bn(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Bg(a,d)+(g?" "+g:"")})}function Ug(a,u){a.info(function(){return"TIMEOUT: "+u})}wr.prototype.info=function(){};function Bg(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var D=S[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<S.length;U++)S[U]=""}}}}return bo(d)}catch{return u}}var Ci={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ao;function Pi(){}k(Pi,To),Pi.prototype.g=function(){return new XMLHttpRequest},Pi.prototype.i=function(){return{}},Ao=new Pi;function It(a,u,d,g){this.j=a,this.i=u,this.l=d,this.R=g||1,this.U=new mr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hc}function hc(){this.i=null,this.g="",this.h=!1}var dc={},Ro={};function Co(a,u,d){a.L=1,a.v=Ni(ot(u)),a.m=d,a.P=!0,fc(a,null)}function fc(a,u){a.F=Date.now(),ki(a),a.A=ot(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Ac(d.i,"t",g),a.C=0,d=a.j.J,a.h=new hc,a.g=Gc(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Og(y(a.Y,a,a.g),a.O)),u=a.U,d=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(nc[0]=S.toString()),S=nc);for(var D=0;D<S.length;D++){var U=Jl(d,S[D],g||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),yr(),Fg(a.i,a.u,a.A,a.l,a.R,a.m)}It.prototype.ca=function(a){a=a.target;const u=this.M;u&&at(a)==3?u.j():this.Y(a)},It.prototype.Y=function(a){try{if(a==this.g)e:{const Ae=at(this.g);var u=this.g.Ba();const Sn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||Nc(this.g)))){this.J||Ae!=4||u==7||(u==8||0>=Sn?yr(3):yr(2)),Po(this);var d=this.g.Z();this.X=d;t:if(pc(this)){var g=Nc(this.g);a="";var S=g.length,D=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),Ir(this);var U="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(D&&u==S-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,jg(this.i,this.u,this.A,this.l,this.R,Ae,d),this.o){if(this.T&&!this.K){t:{if(this.g){var se,Ie=this.g;if((se=Ie.g?Ie.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(se)){var te=se;break t}}te=null}if(d=te)bn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ko(this,d);else{this.o=!1,this.s=3,Ve(12),Kt(this),Ir(this);break e}}if(this.P){d=!0;let Qe;for(;!this.J&&this.C<U.length;)if(Qe=$g(this,U),Qe==Ro){Ae==4&&(this.s=4,Ve(14),d=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==dc){this.s=4,Ve(15),bn(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else bn(this.i,this.l,Qe,null),ko(this,Qe);if(pc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||U.length!=0||this.h.h||(this.s=1,Ve(16),d=!1),this.o=this.o&&d,!d)bn(this.i,this.l,U,"[Invalid Chunked Response]"),Kt(this),Ir(this);else if(0<U.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Lo(Se),Se.M=!0,Ve(11))}}else bn(this.i,this.l,U,null),ko(this,U);Ae==4&&Kt(this),this.o&&!this.J&&(Ae==4?Bc(this.j,this):(this.o=!1,ki(this)))}else sm(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),Kt(this),Ir(this)}}}catch{}finally{}};function pc(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function $g(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?Ro:(d=Number(u.substring(d,g)),isNaN(d)?dc:(g+=1,g+d>u.length?Ro:(u=u.slice(g,g+d),a.C=g+d,u)))}It.prototype.cancel=function(){this.J=!0,Kt(this)};function ki(a){a.S=Date.now()+a.I,gc(a,a.I)}function gc(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vr(y(a.ba,a),u)}function Po(a){a.B&&(l.clearTimeout(a.B),a.B=null)}It.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ug(this.i,this.A),this.L!=2&&(yr(),Ve(17)),Kt(this),this.s=2,Ir(this)):gc(this,this.S-a)};function Ir(a){a.j.G==0||a.J||Bc(a.j,a)}function Kt(a){Po(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,rc(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ko(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Do(d.h,a))){if(!a.K&&Do(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ui(d),Fi(d);else break e;Mo(d),Ve(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=vr(y(d.Za,d),6e3));if(1>=yc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ht(d,11)}else if((a.K||d.g==a)&&Ui(d),!F(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let te=S[u];if(d.T=te[0],te=te[1],d.G==2)if(te[0]=="c"){d.K=te[1],d.ia=te[2];const Se=te[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));const Ae=te[4];Ae!=null&&(d.Aa=Ae,d.j.info("SVER="+d.Aa));const Sn=te[5];Sn!=null&&typeof Sn=="number"&&0<Sn&&(g=1.5*Sn,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Qe=a.g;if(Qe){const $i=Qe.g?Qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var D=g.h;D.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Vo(D,D.h),D.h=null))}if(g.D){const Fo=Qe.g?Qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Fo&&(g.ya=Fo,ae(g.I,g.D,Fo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var U=a;if(g.qa=qc(g,g.J?g.ia:null,g.W),U.K){vc(g.h,U);var se=U,Ie=g.L;Ie&&(se.I=Ie),se.B&&(Po(se),ki(se)),g.g=U}else jc(g);0<d.i.length&&ji(d)}else te[0]!="stop"&&te[0]!="close"||Ht(d,7);else d.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?Ht(d,7):Oo(d):te[0]!="noop"&&d.l&&d.l.ta(te),d.v=0)}}yr(4)}catch{}}var zg=class{constructor(a,u){this.g=a,this.map=u}};function mc(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _c(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function yc(a){return a.h?1:a.g?a.g.size:0}function Do(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Vo(a,u){a.g?a.g.add(u):a.h=u}function vc(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}mc.prototype.cancel=function(){if(this.i=wc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wc(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return P(a.i)}function qg(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,g=0;g<d;g++)u.push(a[g]);return u}u=[],d=0;for(g in a)u[d++]=a[g];return u}function Gg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const g in a)u[d++]=g;return u}}}function Ic(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Gg(a),g=qg(a),S=g.length,D=0;D<S;D++)u.call(void 0,g[D],d&&d[D],a)}var Ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kg(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),S=null;if(0<=g){var D=a[d].substring(0,g);S=a[d].substring(g+1)}else D=a[d];u(D,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Wt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Wt){this.h=a.h,Di(this,a.j),this.o=a.o,this.g=a.g,Vi(this,a.s),this.l=a.l;var u=a.i,d=new Tr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),bc(this,d),this.m=a.m}else a&&(u=String(a).match(Ec))?(this.h=!1,Di(this,u[1]||"",!0),this.o=Er(u[2]||""),this.g=Er(u[3]||"",!0),Vi(this,u[4]),this.l=Er(u[5]||"",!0),bc(this,u[6]||"",!0),this.m=Er(u[7]||"")):(this.h=!1,this.i=new Tr(null,this.h))}Wt.prototype.toString=function(){var a=[],u=this.j;u&&a.push(br(u,Tc,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(br(u,Tc,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(br(d,d.charAt(0)=="/"?Qg:Hg,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",br(d,Yg)),a.join("")};function ot(a){return new Wt(a)}function Di(a,u,d){a.j=d?Er(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Vi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function bc(a,u,d){u instanceof Tr?(a.i=u,Xg(a.i,a.h)):(d||(u=br(u,Jg)),a.i=new Tr(u,a.h))}function ae(a,u,d){a.i.set(u,d)}function Ni(a){return ae(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Er(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function br(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Wg),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Wg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tc=/[#\/\?@]/g,Hg=/[#\?:]/g,Qg=/[#\?]/g,Jg=/[#\?@]/g,Yg=/#/g;function Tr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Et(a){a.g||(a.g=new Map,a.h=0,a.i&&Kg(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Tr.prototype,r.add=function(a,u){Et(this),this.i=null,a=Tn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function xc(a,u){Et(a),u=Tn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Sc(a,u){return Et(a),u=Tn(a,u),a.g.has(u)}r.forEach=function(a,u){Et(this),this.g.forEach(function(d,g){d.forEach(function(S){a.call(u,S,g,this)},this)},this)},r.na=function(){Et(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const S=a[g];for(let D=0;D<S.length;D++)d.push(u[g])}return d},r.V=function(a){Et(this);let u=[];if(typeof a=="string")Sc(this,a)&&(u=u.concat(this.g.get(Tn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return Et(this),this.i=null,a=Tn(this,a),Sc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Ac(a,u,d){xc(a,u),0<d.length&&(a.i=null,a.g.set(Tn(a,u),P(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const D=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var S=D;U[g]!==""&&(S+="="+encodeURIComponent(String(U[g]))),a.push(S)}}return this.i=a.join("&")};function Tn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Xg(a,u){u&&!a.j&&(Et(a),a.i=null,a.g.forEach(function(d,g){var S=g.toLowerCase();g!=S&&(xc(this,g),Ac(this,S,d))},a)),a.j=u}function Zg(a,u){const d=new wr;if(l.Image){const g=new Image;g.onload=b(bt,d,"TestLoadImage: loaded",!0,u,g),g.onerror=b(bt,d,"TestLoadImage: error",!1,u,g),g.onabort=b(bt,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(bt,d,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function em(a,u){const d=new wr,g=new AbortController,S=setTimeout(()=>{g.abort(),bt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(S),D.ok?bt(d,"TestPingServer: ok",!0,u):bt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),bt(d,"TestPingServer: error",!1,u)})}function bt(a,u,d,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(d)}catch{}}function tm(){this.g=new Lg}function nm(a,u,d){const g=d||"";try{Ic(a,function(S,D){let U=S;h(S)&&(U=bo(S)),u.push(g+D+"="+encodeURIComponent(U))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function Oi(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Oi,To),Oi.prototype.g=function(){return new Mi(this.l,this.j)},Oi.prototype.i=function(a){return function(){return a}}({});function Mi(a,u){xe.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Mi,xe),r=Mi.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Sr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Sr(this)),this.g&&(this.readyState=3,Sr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rc(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rc(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?xr(this):Sr(this),this.readyState==3&&Rc(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,xr(this))},r.Qa=function(a){this.g&&(this.response=a,xr(this))},r.ga=function(){this.g&&xr(this)};function xr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Sr(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Sr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cc(a){let u="";return z(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function No(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Cc(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ae(a,u,d))}function he(a){xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(he,xe);var rm=/^https?$/i,im=["POST","PUT"];r=he.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ao.g(),this.v=this.o?ic(this.o):ic(Ao),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(D){Pc(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)d.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(im,u,void 0))||g||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of d)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vc(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Pc(this,D)}};function Pc(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,kc(a),Li(a)}function kc(a){a.A||(a.A=!0,De(a,"complete"),De(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,De(this,"complete"),De(this,"abort"),Li(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),he.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Dc(this):this.bb())},r.bb=function(){Dc(this)};function Dc(a){if(a.h&&typeof o<"u"&&(!a.v[1]||at(a)!=4||a.Z()!=2)){if(a.u&&at(a)==4)ec(a.Ea,0,a);else if(De(a,"readystatechange"),at(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=U===0){var S=String(a.D).match(Ec)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),g=!rm.test(S?S.toLowerCase():"")}d=g}if(d)De(a,"complete"),De(a,"success");else{a.m=6;try{var D=2<at(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",kc(a)}}finally{Li(a)}}}}function Li(a,u){if(a.g){Vc(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||De(a,"ready");try{d.onreadystatechange=g}catch{}}}function Vc(a){a.I&&(l.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function at(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Mg(u)}};function Nc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sm(a){const u={};a=(a.g&&2<=at(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(F(a[g]))continue;var d=T(a[g]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=u[S]||[];u[S]=D,D.push(d)}I(u,function(g){return g.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Oc(a){this.Aa=0,this.i=[],this.j=new wr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ar("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ar("baseRetryDelayMs",5e3,a),this.cb=Ar("retryDelaySeedMs",1e4,a),this.Wa=Ar("forwardChannelMaxRetries",2,a),this.wa=Ar("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new mc(a&&a.concurrentRequestLimit),this.Da=new tm,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Oc.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,g){Ve(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=qc(this,null,this.W),ji(this)};function Oo(a){if(Mc(a),a.G==3){var u=a.U++,d=ot(a.I);if(ae(d,"SID",a.K),ae(d,"RID",u),ae(d,"TYPE","terminate"),Rr(a,d),u=new It(a,a.j,u),u.L=2,u.v=Ni(ot(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Gc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ki(u)}zc(a)}function Fi(a){a.g&&(Lo(a),a.g.cancel(),a.g=null)}function Mc(a){Fi(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ui(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ji(a){if(!_c(a.h)&&!a.s){a.s=!0;var u=a.Ga;fr||Ql(),pr||(fr(),pr=!0),go.add(u,a),a.B=0}}function om(a,u){return yc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vr(y(a.Ga,a,u),$c(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new It(this,this.j,a);let D=this.o;if(this.S&&(D?(D=_(D),E(D,this.S)):D=this.S),this.m!==null||this.O||(S.H=D,D=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Fc(this,S,u),d=ot(this.I),ae(d,"RID",a),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),Rr(this,d),D&&(this.O?u="headers="+encodeURIComponent(String(Cc(D)))+"&"+u:this.m&&No(d,this.m,D)),Vo(this.h,S),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",u),ae(d,"SID","null"),S.T=!0,Co(S,d,null)):Co(S,d,u),this.G=2}}else this.G==3&&(a?Lc(this,a):this.i.length==0||_c(this.h)||Lc(this))};function Lc(a,u){var d;u?d=u.l:d=a.U++;const g=ot(a.I);ae(g,"SID",a.K),ae(g,"RID",d),ae(g,"AID",a.T),Rr(a,g),a.m&&a.o&&No(g,a.m,a.o),d=new It(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Fc(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vo(a.h,d),Co(d,g,u)}function Rr(a,u){a.H&&z(a.H,function(d,g){ae(u,g,d)}),a.l&&Ic({},function(d,g){ae(u,g,d)})}function Fc(a,u,d){d=Math.min(a.i.length,d);var g=a.l?y(a.l.Na,a.l,a):null;e:{var S=a.i;let D=-1;for(;;){const U=["count="+d];D==-1?0<d?(D=S[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let se=!0;for(let Ie=0;Ie<d;Ie++){let te=S[Ie].g;const Se=S[Ie].map;if(te-=D,0>te)D=Math.max(0,S[Ie].g-100),se=!1;else try{nm(Se,U,"req"+te+"_")}catch{g&&g(Se)}}if(se){g=U.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,g}function jc(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;fr||Ql(),pr||(fr(),pr=!0),go.add(u,a),a.v=0}}function Mo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vr(y(a.Fa,a),$c(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Uc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vr(y(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),Fi(this),Uc(this))};function Lo(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Uc(a){a.g=new It(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ot(a.qa);ae(u,"RID","rpc"),ae(u,"SID",a.K),ae(u,"AID",a.T),ae(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ae(u,"TO",a.ja),ae(u,"TYPE","xmlhttp"),Rr(a,u),a.m&&a.o&&No(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ni(ot(u)),d.m=null,d.P=!0,fc(d,a)}r.Za=function(){this.C!=null&&(this.C=null,Fi(this),Mo(this),Ve(19))};function Ui(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Bc(a,u){var d=null;if(a.g==u){Ui(a),Lo(a),a.g=null;var g=2}else if(Do(a.h,u))d=u.D,vc(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;g=Ri(),De(g,new cc(g,d)),ji(a)}else jc(a);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&om(a,u)||g==2&&Mo(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),S){case 1:Ht(a,5);break;case 4:Ht(a,10);break;case 3:Ht(a,6);break;default:Ht(a,2)}}}function $c(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Ht(a,u){if(a.j.info("Error code "+u),u==2){var d=y(a.fb,a),g=a.Xa;const S=!g;g=new Wt(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Di(g,"https"),Ni(g),S?Zg(g.toString(),d):em(g.toString(),d)}else Ve(2);a.G=0,a.l&&a.l.sa(u),zc(a),Mc(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function zc(a){if(a.G=0,a.ka=[],a.l){const u=wc(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ka,u),C(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function qc(a,u,d){var g=d instanceof Wt?ot(d):new Wt(d);if(g.g!="")u&&(g.g=u+"."+g.g),Vi(g,g.s);else{var S=l.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var D=new Wt(null);g&&Di(D,g),u&&(D.g=u),S&&Vi(D,S),d&&(D.l=d),g=D}return d=a.D,u=a.ya,d&&u&&ae(g,d,u),ae(g,"VER",a.la),Rr(a,g),g}function Gc(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new he(new Oi({eb:d})):new he(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kc(){}r=Kc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Bi(){}Bi.prototype.g=function(a,u){return new ze(a,u)};function ze(a,u){xe.call(this),this.g=new Oc(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new xn(this)}k(ze,xe),ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){Oo(this.g)},ze.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=bo(a),a=d);u.i.push(new zg(u.Ya++,a)),u.G==3&&ji(u)},ze.prototype.N=function(){this.g.l=null,delete this.j,Oo(this.g),delete this.g,ze.aa.N.call(this)};function Wc(a){xo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(Wc,xo);function Hc(){So.call(this),this.status=1}k(Hc,So);function xn(a){this.g=a}k(xn,Kc),xn.prototype.ua=function(){De(this.g,"a")},xn.prototype.ta=function(a){De(this.g,new Wc(a))},xn.prototype.sa=function(a){De(this.g,new Hc)},xn.prototype.ra=function(){De(this.g,"b")},Bi.prototype.createWebChannel=Bi.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,Od=function(){return new Bi},Nd=function(){return Ri()},Vd=Gt,da={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ci.NO_ERROR=0,Ci.TIMEOUT=8,Ci.HTTP_ERROR=6,Zi=Ci,uc.COMPLETE="complete",Dd=uc,sc.EventType=_r,_r.OPEN="a",_r.CLOSE="b",_r.ERROR="c",_r.MESSAGE="d",xe.prototype.listen=xe.prototype.K,Mr=sc,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,kd=he}).apply(typeof zi<"u"?zi:typeof self<"u"?self:typeof window<"u"?window:{});const gu="@firebase/firestore";/**
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
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
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
 */let lr="10.14.0";/**
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
 */const un=new ja("@firebase/firestore");function Vn(){return un.logLevel}function L(r,...e){if(un.logLevel<=X.DEBUG){const t=e.map($a);un.debug(`Firestore (${lr}): ${r}`,...t)}}function fe(r,...e){if(un.logLevel<=X.ERROR){const t=e.map($a);un.error(`Firestore (${lr}): ${r}`,...t)}}function Kn(r,...e){if(un.logLevel<=X.WARN){const t=e.map($a);un.warn(`Firestore (${lr}): ${r}`,...t)}}function $a(r){if(typeof r=="string")return r;try{/**
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
 */function G(r="Unexpected state"){const e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+r;throw fe(e),new Error(e)}function W(r,e){r||G()}function K(r,e){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ny{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Oy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ce.UNAUTHENTICATED))}shutdown(){}}class My{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let s=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string"),new Ny(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new Ce(e)}}class Ly{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Fy{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Ly(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){W(this.o===void 0);const n=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string"),this.R=t.token,new jy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function By(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Md{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=By(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function J(r,e){return r<e?-1:r>e?1:0}function Wn(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function Ld(r){return r+"\0"}/**
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
 */class ue{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ue(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new ue(0,0))}static max(){return new H(new ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zr{constructor(e,t,n){t===void 0?t=0:t>e.length&&G(),n===void 0?n=e.length-t:n>e.length-t&&G(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Zr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zr?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ne extends Zr{construct(e,t,n){return new ne(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const $y=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends Zr{construct(e,t,n){return new ce(e,t,n)}static isValidIdentifier(e){return $y.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ce(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new j(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(n+=l,i++):(s(),i++)}if(s(),o)throw new j(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(t)}static emptyPath(){return new ce([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ne.fromString(e))}static fromName(e){return new B(ne.fromString(e).popFirst(5))}static empty(){return new B(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ne(e.slice()))}}/**
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
 */class _s{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function fa(r){return r.fields.find(e=>e.kind===2)}function Yt(r){return r.fields.filter(e=>e.kind!==2)}_s.UNKNOWN_ID=-1;class es{constructor(e,t){this.fieldPath=e,this.kind=t}}class ei{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ei(0,We.min())}}function Fd(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=H.fromTimestamp(n===1e9?new ue(t+1,0):new ue(t,n));return new We(i,B.empty(),e)}function jd(r){return new We(r.readTime,r.key,-1)}class We{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new We(H.min(),B.empty(),-1)}static max(){return new We(H.max(),B.empty(),-1)}}function za(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(r.documentKey,e.documentKey),t!==0?t:J(r.largestBatchId,e.largestBatchId))}/**
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
 */const Ud="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Bt(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Ud)throw r;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):A.reject(t)}static resolve(e){return new A((t,n)=>{t(e)})}static reject(e){return new A((t,n)=>{n(e)})}static waitFor(e){return new A((t,n)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},c=>n(c))}),o=!0,s===i&&t()})}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next(i=>i?A.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new A((n,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(f=>{o[h]=f,++l,l===s&&n(o)},f=>i(f))}})}static doWhile(e,t){return new A((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
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
 */class qs{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new zr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=qa(n.target.error);this.V.reject(new zr(e,i))}}static open(e,t,n,i){try{return new qs(t,e.transaction(i,n))}catch(s){throw new zr(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(L("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new qy(t)}}class Mt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,Mt.S(ye())===12.2&&fe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return L("SimpleDb","Removing database:",e),Xt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!bd())return!1;if(Mt.v())return!0;const e=ye(),t=Mt.S(e),n=0<t&&t<10,i=$d(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(L("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{n(new zr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new j(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new j(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new zr(e,o))},i.onupgradeneeded=s=>{L("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{L("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const l=qs.open(this.db,e,s?"readonly":"readwrite",n),c=i(l).next(h=>(l.g(),h)).catch(h=>(l.abort(h),A.reject(h))).toPromise();return c.catch(()=>{}),await l.m,c}catch(l){const c=l,h=c.name!=="FirebaseError"&&o<3;if(L("SimpleDb","Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function $d(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class zy{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Xt(this.B.delete())}}class zr extends j{constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function $t(r){return r.name==="IndexedDbTransactionError"}class qy{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(L("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(L("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Xt(n)}add(e){return L("SimpleDb","ADD",this.store.name,e,e),Xt(this.store.add(e))}get(e){return Xt(this.store.get(e)).next(t=>(t===void 0&&(t=null),L("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return L("SimpleDb","DELETE",this.store.name,e),Xt(this.store.delete(e))}count(){return L("SimpleDb","COUNT",this.store.name),Xt(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new A((o,l)=>{s.onerror=c=>{l(c.target.error)},s.onsuccess=c=>{o(c.target.result)}})}{const s=this.cursor(n),o=[];return this.W(s,(l,c)=>{o.push(c)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new A((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}})}j(e,t){L("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,(s,o,l)=>l.delete())}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new A((n,i)=>{t.onerror=s=>{const o=qa(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():n()}):n()}})}W(e,t){const n=[];return new A((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void i();const c=new zy(l),h=t(l.primaryKey,l.value,c);if(h instanceof A){const f=h.catch(p=>(c.done(),A.reject(p)));n.push(f)}c.isDone?i():c.K===null?l.continue():l.continue(c.K)}}).next(()=>A.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Xt(r){return new A((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=qa(n.target.error);t(i)}})}let mu=!1;function qa(r){const e=Mt.S(ye());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mu||(mu=!0,setTimeout(()=>{throw n},0)),n}}return r}class Gy{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){L("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{L("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){$t(t)?L("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Bt(t)}await this.X(6e4)})}}class Ky{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let i=t,s=!0;return A.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return L("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(l=>{i-=l,n.add(o)});s=!1})).next(()=>t-i)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(l=>(L("IndexBackfiller",`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((i,s)=>{const o=jd(s);za(o,n)>0&&(n=o)}),new We(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class je{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}je.oe=-1;function Gs(r){return r==null}function ti(r){return r===0&&1/r==-1/0}function zd(r){return typeof r=="number"&&Number.isInteger(r)&&!ti(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Oe(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=_u(e)),e=Wy(r.get(t),e);return _u(e)}function Wy(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function _u(r){return r+""}function Ze(r){const e=r.length;if(W(e>=2),e===2)return W(r.charAt(0)===""&&r.charAt(1)===""),ne.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const o=r.indexOf("",s);switch((o<0||o>t)&&G(),r.charAt(o+1)){case"":const l=r.substring(s,o);let c;i.length===0?c=l:(i+=l,c=i,i=""),n.push(c);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:G()}s=o+2}return new ne(n)}/**
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
 */const yu=["userId","batchId"];/**
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
 */function ts(r,e){return[r,Oe(e)]}function qd(r,e,t){return[r,Oe(e),t]}const Hy={},Qy=["prefixPath","collectionGroup","readTime","documentId"],Jy=["prefixPath","collectionGroup","documentId"],Yy=["collectionGroup","readTime","prefixPath","documentId"],Xy=["canonicalId","targetId"],Zy=["targetId","path"],ev=["path","targetId"],tv=["collectionId","parent"],nv=["indexId","uid"],rv=["uid","sequenceNumber"],iv=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],sv=["indexId","uid","orderedDocumentKey"],ov=["userId","collectionPath","documentId"],av=["userId","collectionPath","largestBatchId"],lv=["userId","collectionGroup","largestBatchId"],Gd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],cv=[...Gd,"documentOverlays"],Kd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Wd=Kd,Ga=[...Wd,"indexConfiguration","indexState","indexEntries"],uv=Ga,hv=[...Ga,"globals"];/**
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
 */class pa extends Bd{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function ve(r,e){const t=K(r);return Mt.F(t._e,e)}/**
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
 */function vu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function yn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Hd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class oe{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qi(this.root,e,this.comparator,!0)}}class qi{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??Ee.RED,this.left=i??Ee.EMPTY,this.right=s??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Ee(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ee.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ie{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wu(this.data.getIterator())}getIteratorFrom(e){return new wu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ie(this.comparator);return t.data=e,t}}class wu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function An(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new ie(ce.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class Qd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Qd("Invalid base64 string: "+s):s}}(e);return new ge(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const dv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(r){if(W(!!r),typeof r=="string"){let e=0;const t=dv.exec(r);if(W(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:le(r.seconds),nanos:le(r.nanos)}}function le(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ft(r){return typeof r=="string"?ge.fromBase64String(r):ge.fromUint8Array(r)}/**
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
 */function Ka(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Wa(r){const e=r.mapValue.fields.__previous_value__;return Ka(e)?Wa(e):e}function ni(r){const e=mt(r.mapValue.fields.__local_write_time__.timestampValue);return new ue(e.seconds,e.nanos)}/**
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
 */class fv{constructor(e,t,n,i,s,o,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class hn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Dt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ns={nullValue:"NULL_VALUE"};function dn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ka(r)?4:Jd(r)?9007199254740991:Ks(r)?10:11:G()}function rt(r,e){if(r===e)return!0;const t=dn(r);if(t!==dn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ni(r).isEqual(ni(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mt(i.timestampValue),l=mt(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return Ft(i.bytesValue).isEqual(Ft(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return le(i.geoPointValue.latitude)===le(s.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return le(i.integerValue)===le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=le(i.doubleValue),l=le(s.doubleValue);return o===l?ti(o)===ti(l):isNaN(o)&&isNaN(l)}return!1}(r,e);case 9:return Wn(r.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(vu(o)!==vu(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!rt(o[c],l[c])))return!1;return!0}(r,e);default:return G()}}function ri(r,e){return(r.values||[]).find(t=>rt(t,e))!==void 0}function jt(r,e){if(r===e)return 0;const t=dn(r),n=dn(e);if(t!==n)return J(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(r.booleanValue,e.booleanValue);case 2:return function(s,o){const l=le(s.integerValue||s.doubleValue),c=le(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(r,e);case 3:return Iu(r.timestampValue,e.timestampValue);case 4:return Iu(ni(r),ni(e));case 5:return J(r.stringValue,e.stringValue);case 6:return function(s,o){const l=Ft(s),c=Ft(o);return l.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=J(l[h],c[h]);if(f!==0)return f}return J(l.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,o){const l=J(le(s.latitude),le(o.latitude));return l!==0?l:J(le(s.longitude),le(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Eu(r.arrayValue,e.arrayValue);case 10:return function(s,o){var l,c,h,f;const p=s.fields||{},y=o.fields||{},b=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=(c=y.value)===null||c===void 0?void 0:c.arrayValue,P=J(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Eu(b,k)}(r.mapValue,e.mapValue);case 11:return function(s,o){if(s===Dt.mapValue&&o===Dt.mapValue)return 0;if(s===Dt.mapValue)return 1;if(o===Dt.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const y=J(c[p],f[p]);if(y!==0)return y;const b=jt(l[c[p]],h[f[p]]);if(b!==0)return b}return J(c.length,f.length)}(r.mapValue,e.mapValue);default:throw G()}}function Iu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return J(r,e);const t=mt(r),n=mt(e),i=J(t.seconds,n.seconds);return i!==0?i:J(t.nanos,n.nanos)}function Eu(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=jt(t[i],n[i]);if(s)return s}return J(t.length,n.length)}function Hn(r){return ga(r)}function ga(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=mt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ft(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return B.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=ga(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${ga(t.fields[o])}`;return i+"}"}(r.mapValue):G()}function ii(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ma(r){return!!r&&"integerValue"in r}function si(r){return!!r&&"arrayValue"in r}function bu(r){return!!r&&"nullValue"in r}function Tu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function rs(r){return!!r&&"mapValue"in r}function Ks(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function qr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return yn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=qr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Jd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Yd={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function pv(r){return"nullValue"in r?ns:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?ii(hn.empty(),B.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Ks(r)?Yd:{mapValue:{}}:G()}function gv(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?ii(hn.empty(),B.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Yd:"mapValue"in r?Ks(r)?{mapValue:{}}:Dt:G()}function xu(r,e){const t=jt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Su(r,e){const t=jt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!rs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qr(t)}setAll(e){let t=ce.emptyPath(),n={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,i),n={},i=[],t=l.popLast()}o?n[l.lastSegment()]=qr(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());rs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];rs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){yn(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new Pe(qr(this.value))}}function Xd(r){const e=[];return yn(r.fields,(t,n)=>{const i=new ce([t]);if(rs(n)){const s=Xd(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ue(e)}/**
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
 */class de{constructor(e,t,n,i,s,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new de(e,0,H.min(),H.min(),H.min(),Pe.empty(),0)}static newFoundDocument(e,t,n,i){return new de(e,1,t,H.min(),n,i,0)}static newNoDocument(e,t){return new de(e,2,t,H.min(),H.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new de(e,3,t,H.min(),H.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof de&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new de(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qn{constructor(e,t){this.position=e,this.inclusive=t}}function Au(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=B.comparator(B.fromName(o.referenceValue),t.key):n=jt(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ru(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!rt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ys{constructor(e,t="asc"){this.field=e,this.dir=t}}function mv(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Zd{}class Z extends Zd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new _v(e,t,n):t==="array-contains"?new wv(e,n):t==="in"?new of(e,n):t==="not-in"?new Iv(e,n):t==="array-contains-any"?new Ev(e,n):new Z(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new yv(e,n):new vv(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(jt(t,this.value)):t!==null&&dn(this.value)===dn(t)&&this.matchesComparison(jt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends Zd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new re(e,t)}matches(e){return Jn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Jn(r){return r.op==="and"}function _a(r){return r.op==="or"}function Ha(r){return ef(r)&&Jn(r)}function ef(r){for(const e of r.filters)if(e instanceof re)return!1;return!0}function ya(r){if(r instanceof Z)return r.field.canonicalString()+r.op.toString()+Hn(r.value);if(Ha(r))return r.filters.map(e=>ya(e)).join(",");{const e=r.filters.map(t=>ya(t)).join(",");return`${r.op}(${e})`}}function tf(r,e){return r instanceof Z?function(n,i){return i instanceof Z&&n.op===i.op&&n.field.isEqual(i.field)&&rt(n.value,i.value)}(r,e):r instanceof re?function(n,i){return i instanceof re&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,l)=>s&&tf(o,i.filters[l]),!0):!1}(r,e):void G()}function nf(r,e){const t=r.filters.concat(e);return re.create(t,r.op)}function rf(r){return r instanceof Z?function(t){return`${t.field.canonicalString()} ${t.op} ${Hn(t.value)}`}(r):r instanceof re?function(t){return t.op.toString()+" {"+t.getFilters().map(rf).join(" ,")+"}"}(r):"Filter"}class _v extends Z{constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class yv extends Z{constructor(e,t){super(e,"in",t),this.keys=sf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class vv extends Z{constructor(e,t){super(e,"not-in",t),this.keys=sf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sf(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>B.fromName(n.referenceValue))}class wv extends Z{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return si(t)&&ri(t.arrayValue,this.value)}}class of extends Z{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ri(this.value.arrayValue,t)}}class Iv extends Z{constructor(e,t){super(e,"not-in",t)}matches(e){if(ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ri(this.value.arrayValue,t)}}class Ev extends Z{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!si(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ri(this.value.arrayValue,n))}}/**
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
 */class bv{constructor(e,t=null,n=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function va(r,e=null,t=[],n=[],i=null,s=null,o=null){return new bv(r,e,t,n,i,s,o)}function fn(r){const e=K(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>ya(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Gs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Hn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Hn(n)).join(",")),e.ue=t}return e.ue}function di(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!mv(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!tf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ru(r.startAt,e.startAt)&&Ru(r.endAt,e.endAt)}function vs(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function ws(r,e){return r.filters.filter(t=>t instanceof Z&&t.field.isEqual(e))}function Cu(r,e,t){let n=ns,i=!0;for(const s of ws(r,e)){let o=ns,l=!0;switch(s.op){case"<":case"<=":o=pv(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,l=!1;break;case"!=":case"not-in":o=ns}xu({value:n,inclusive:i},{value:o,inclusive:l})<0&&(n=o,i=l)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];xu({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function Pu(r,e,t){let n=Dt,i=!0;for(const s of ws(r,e)){let o=Dt,l=!0;switch(s.op){case">=":case">":o=gv(s.value),l=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,l=!1;break;case"!=":case"not-in":o=Dt}Su({value:n,inclusive:i},{value:o,inclusive:l})>0&&(n=o,i=l)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];Su({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
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
 */class fi{constructor(e,t=null,n=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function af(r,e,t,n,i,s,o,l){return new fi(r,e,t,n,i,s,o,l)}function Ws(r){return new fi(r)}function ku(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function lf(r){return r.collectionGroup!==null}function Gr(r){const e=K(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ie(ce.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ys(s,n))}),t.has(ce.keyField().canonicalString())||e.ce.push(new ys(ce.keyField(),n))}return e.ce}function Ke(r){const e=K(r);return e.le||(e.le=Tv(e,Gr(r))),e.le}function Tv(r,e){if(r.limitType==="F")return va(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ys(i.field,s)});const t=r.endAt?new Qn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Qn(r.startAt.position,r.startAt.inclusive):null;return va(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function wa(r,e){const t=r.filters.concat([e]);return new fi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Is(r,e,t){return new fi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Hs(r,e){return di(Ke(r),Ke(e))&&r.limitType===e.limitType}function cf(r){return`${fn(Ke(r))}|lt:${r.limitType}`}function Nn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>rf(i)).join(", ")}]`),Gs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Hn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Hn(i)).join(",")),`Target(${n})`}(Ke(r))}; limitType=${r.limitType})`}function pi(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):B.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of Gr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(o,l,c){const h=Au(o,l,c);return o.inclusive?h<=0:h<0}(n.startAt,Gr(n),i)||n.endAt&&!function(o,l,c){const h=Au(o,l,c);return o.inclusive?h>=0:h>0}(n.endAt,Gr(n),i))}(r,e)}function uf(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function hf(r){return(e,t)=>{let n=!1;for(const i of Gr(r)){const s=xv(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function xv(r,e,t){const n=r.field.isKeyField()?B.comparator(e.key,t.key):function(s,o,l){const c=o.data.field(s),h=l.data.field(s);return c!==null&&h!==null?jt(c,h):G()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return G()}}/**
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
 */class zt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){yn(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return Hd(this.inner)}size(){return this.innerSize}}/**
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
 */const Sv=new oe(B.comparator);function Ge(){return Sv}const df=new oe(B.comparator);function Lr(...r){let e=df;for(const t of r)e=e.insert(t.key,t);return e}function ff(r){let e=df;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function et(){return Kr()}function pf(){return Kr()}function Kr(){return new zt(r=>r.toString(),(r,e)=>r.isEqual(e))}const Av=new oe(B.comparator),Rv=new ie(B.comparator);function Y(...r){let e=Rv;for(const t of r)e=e.add(t);return e}const Cv=new ie(J);function Qa(){return Cv}/**
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
 */function Ja(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ti(e)?"-0":e}}function gf(r){return{integerValue:""+r}}function Pv(r,e){return zd(e)?gf(e):Ja(r,e)}/**
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
 */class Qs{constructor(){this._=void 0}}function kv(r,e,t){return r instanceof oi?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ka(s)&&(s=Wa(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):r instanceof Yn?_f(r,e):r instanceof Xn?yf(r,e):function(i,s){const o=mf(i,s),l=Du(o)+Du(i.Pe);return ma(o)&&ma(i.Pe)?gf(l):Ja(i.serializer,l)}(r,e)}function Dv(r,e,t){return r instanceof Yn?_f(r,e):r instanceof Xn?yf(r,e):t}function mf(r,e){return r instanceof ai?function(n){return ma(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class oi extends Qs{}class Yn extends Qs{constructor(e){super(),this.elements=e}}function _f(r,e){const t=vf(e);for(const n of r.elements)t.some(i=>rt(i,n))||t.push(n);return{arrayValue:{values:t}}}class Xn extends Qs{constructor(e){super(),this.elements=e}}function yf(r,e){let t=vf(e);for(const n of r.elements)t=t.filter(i=>!rt(i,n));return{arrayValue:{values:t}}}class ai extends Qs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Du(r){return le(r.integerValue||r.doubleValue)}function vf(r){return si(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Vv{constructor(e,t){this.field=e,this.transform=t}}function Nv(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof Yn&&i instanceof Yn||n instanceof Xn&&i instanceof Xn?Wn(n.elements,i.elements,rt):n instanceof ai&&i instanceof ai?rt(n.Pe,i.Pe):n instanceof oi&&i instanceof oi}(r.transform,e.transform)}class Ov{constructor(e,t){this.version=e,this.transformResults=t}}class Ne{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function is(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Js{}function wf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ys(r.key,Ne.none()):new cr(r.key,r.data,Ne.none());{const t=r.data,n=Pe.empty();let i=new ie(ce.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new vt(r.key,n,new Ue(i.toArray()),Ne.none())}}function Mv(r,e,t){r instanceof cr?function(i,s,o){const l=i.value.clone(),c=Nu(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):r instanceof vt?function(i,s,o){if(!is(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Nu(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(If(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Wr(r,e,t,n){return r instanceof cr?function(s,o,l,c){if(!is(s.precondition,o))return l;const h=s.value.clone(),f=Ou(s.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof vt?function(s,o,l,c){if(!is(s.precondition,o))return l;const h=Ou(s.fieldTransforms,c,o),f=o.data;return f.setAll(If(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(s,o,l){return is(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(r,e,t)}function Lv(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=mf(n.transform,i||null);s!=null&&(t===null&&(t=Pe.empty()),t.set(n.field,s))}return t||null}function Vu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Wn(n,i,(s,o)=>Nv(s,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class cr extends Js{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vt extends Js{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function If(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Nu(r,e,t){const n=new Map;W(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,l=e.data.field(s.field);n.set(s.field,Dv(o,l,t[i]))}return n}function Ou(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,kv(s,o,e))}return n}class Ys extends Js{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ef extends Js{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ya{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Mv(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Wr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Wr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=pf();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const c=wf(o,l);c!==null&&n.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Y())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,(t,n)=>Vu(t,n))&&Wn(this.baseMutations,e.baseMutations,(t,n)=>Vu(t,n))}}class Xa{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){W(e.mutations.length===n.length);let i=function(){return Av}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new Xa(e,t,n,i)}}/**
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
 */let Za=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Fv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var me,ee;function jv(r){switch(r){default:return G();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function bf(r){if(r===void 0)return fe("GRPC error has no .code"),V.UNKNOWN;switch(r){case me.OK:return V.OK;case me.CANCELLED:return V.CANCELLED;case me.UNKNOWN:return V.UNKNOWN;case me.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case me.INTERNAL:return V.INTERNAL;case me.UNAVAILABLE:return V.UNAVAILABLE;case me.UNAUTHENTICATED:return V.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case me.NOT_FOUND:return V.NOT_FOUND;case me.ALREADY_EXISTS:return V.ALREADY_EXISTS;case me.PERMISSION_DENIED:return V.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case me.ABORTED:return V.ABORTED;case me.OUT_OF_RANGE:return V.OUT_OF_RANGE;case me.UNIMPLEMENTED:return V.UNIMPLEMENTED;case me.DATA_LOSS:return V.DATA_LOSS;default:return G()}}(ee=me||(me={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Uv(){return new TextEncoder}/**
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
 */const Bv=new rn([4294967295,4294967295],0);function Mu(r){const e=Uv().encode(r),t=new Pd;return t.update(e),new Uint8Array(t.digest())}function Lu(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new rn([t,n],0),new rn([i,s],0)]}class el{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Fr(`Invalid padding: ${t}`);if(n<0)throw new Fr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Fr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Fr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=rn.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(rn.fromNumber(n)));return i.compare(Bv)===1&&(i=new rn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Mu(e),[n,i]=Lu(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);if(!this.de(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new el(s,i,t);return n.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=Mu(e),[n,i]=Lu(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Fr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gi{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,mi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new gi(H.min(),i,new oe(J),Ge(),Y())}}class mi{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new mi(n,t,Y(),Y(),Y())}}/**
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
 */class ss{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class Tf{constructor(e,t){this.targetId=e,this.me=t}}class xf{constructor(e,t,n=ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Fu{constructor(){this.fe=0,this.ge=Uu(),this.pe=ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Y(),t=Y(),n=Y();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:G()}}),new mi(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Uu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $v{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ge(),this.qe=ju(),this.Qe=new oe(J)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if(vs(s))if(n===0){const o=new B(s.path);this.Ue(t,o,de.newNoDocument(o,H.min()))}else W(n===1);else{const o=this.Ye(t);if(o!==n){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=Ft(n).toUint8Array()}catch(c){if(c instanceof Qd)return Kn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new el(o,i,s)}catch(c){return Kn(c instanceof Fr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&vs(l.target)){const c=new B(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,de.newNoDocument(c,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let n=Y();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new gi(e,t,this.Qe,this.ke,n);return this.ke=Ge(),this.qe=ju(),this.Qe=new oe(J),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Fu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ie(J),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Fu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ju(){return new oe(B.comparator)}function Uu(){return new oe(B.comparator)}const zv={asc:"ASCENDING",desc:"DESCENDING"},qv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gv={and:"AND",or:"OR"};class Kv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ia(r,e){return r.useProto3Json||Gs(e)?e:{value:e}}function Zn(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Wv(r,e){return Zn(r,e.toTimestamp())}function Me(r){return W(!!r),H.fromTimestamp(function(t){const n=mt(t);return new ue(n.seconds,n.nanos)}(r))}function tl(r,e){return Ea(r,e).canonicalString()}function Ea(r,e){const t=function(i){return new ne(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Af(r){const e=ne.fromString(r);return W(Mf(e)),e}function Es(r,e){return tl(r.databaseId,e.path)}function sn(r,e){const t=Af(e);if(t.get(1)!==r.databaseId.projectId)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new B(Pf(t))}function Rf(r,e){return tl(r.databaseId,e)}function Cf(r){const e=Af(r);return e.length===4?ne.emptyPath():Pf(e)}function ba(r){return new ne(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Pf(r){return W(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Bu(r,e,t){return{name:Es(r,e),fields:t.value.mapValue.fields}}function Hv(r,e,t){const n=sn(r,e.name),i=Me(e.updateTime),s=e.createTime?Me(e.createTime):H.min(),o=new Pe({mapValue:{fields:e.fields}}),l=de.newFoundDocument(n,i,s,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function Qv(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(W(f===void 0||typeof f=="string"),ge.fromBase64String(f||"")):(W(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ge.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?V.UNKNOWN:bf(h.code);return new j(f,h.message||"")}(o);t=new xf(n,i,s,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=sn(r,n.document.name),s=Me(n.document.updateTime),o=n.document.createTime?Me(n.document.createTime):H.min(),l=new Pe({mapValue:{fields:n.document.fields}}),c=de.newFoundDocument(i,s,o,l),h=n.targetIds||[],f=n.removedTargetIds||[];t=new ss(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=sn(r,n.document),s=n.readTime?Me(n.readTime):H.min(),o=de.newNoDocument(i,s),l=n.removedTargetIds||[];t=new ss([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=sn(r,n.document),s=n.removedTargetIds||[];t=new ss([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new Fv(i,s),l=n.targetId;t=new Tf(l,o)}}return t}function bs(r,e){let t;if(e instanceof cr)t={update:Bu(r,e.key,e.value)};else if(e instanceof Ys)t={delete:Es(r,e.key)};else if(e instanceof vt)t={update:Bu(r,e.key,e.data),updateMask:tw(e.fieldMask)};else{if(!(e instanceof Ef))return G();t={verify:Es(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,o){const l=o.transform;if(l instanceof oi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ai)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Wv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(r,e.precondition)),t}function Ta(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Ne.updateTime(Me(s.updateTime)):s.exists!==void 0?Ne.exists(s.exists):Ne.none()}(e.currentDocument):Ne.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(o,l){let c=null;if("setToServerValue"in l)W(l.setToServerValue==="REQUEST_TIME"),c=new oi;else if("appendMissingElements"in l){const f=l.appendMissingElements.values||[];c=new Yn(f)}else if("removeAllFromArray"in l){const f=l.removeAllFromArray.values||[];c=new Xn(f)}else"increment"in l?c=new ai(o,l.increment):G();const h=ce.fromServerFormat(l.fieldPath);return new Vv(h,c)}(r,i)):[];if(e.update){e.update.name;const i=sn(r,e.update.name),s=new Pe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const h=c.fieldPaths||[];return new Ue(h.map(f=>ce.fromServerFormat(f)))}(e.updateMask);return new vt(i,s,o,t,n)}return new cr(i,s,t,n)}if(e.delete){const i=sn(r,e.delete);return new Ys(i,t)}if(e.verify){const i=sn(r,e.verify);return new Ef(i,t)}return G()}function Jv(r,e){return r&&r.length>0?(W(e!==void 0),r.map(t=>function(i,s){let o=i.updateTime?Me(i.updateTime):Me(s);return o.isEqual(H.min())&&(o=Me(s)),new Ov(o,i.transformResults||[])}(t,e))):[]}function kf(r,e){return{documents:[Rf(r,e.path)]}}function Df(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Rf(r,i);const s=function(h){if(h.length!==0)return Of(re.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:On(y.field),direction:Xv(y.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Ia(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Vf(r){let e=Cf(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){W(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(p){const y=Nf(p);return y instanceof re&&Ha(y)?y.getFilters():[y]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(y=>function(k){return new ys(Mn(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(t.orderBy));let l=null;t.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Gs(y)?null:y}(t.limit));let c=null;t.startAt&&(c=function(p){const y=!!p.before,b=p.values||[];return new Qn(b,y)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const y=!p.before,b=p.values||[];return new Qn(b,y)}(t.endAt)),af(e,i,o,s,l,"F",c,h)}function Yv(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nf(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Mn(t.unaryFilter.field);return Z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Mn(t.unaryFilter.field);return Z.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Mn(t.unaryFilter.field);return Z.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mn(t.unaryFilter.field);return Z.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(r):r.fieldFilter!==void 0?function(t){return Z.create(Mn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return re.create(t.compositeFilter.filters.map(n=>Nf(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(r):G()}function Xv(r){return zv[r]}function Zv(r){return qv[r]}function ew(r){return Gv[r]}function On(r){return{fieldPath:r.canonicalString()}}function Mn(r){return ce.fromServerFormat(r.fieldPath)}function Of(r){return r instanceof Z?function(t){if(t.op==="=="){if(Tu(t.value))return{unaryFilter:{field:On(t.field),op:"IS_NAN"}};if(bu(t.value))return{unaryFilter:{field:On(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tu(t.value))return{unaryFilter:{field:On(t.field),op:"IS_NOT_NAN"}};if(bu(t.value))return{unaryFilter:{field:On(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:On(t.field),op:Zv(t.op),value:t.value}}}(r):r instanceof re?function(t){const n=t.getFilters().map(i=>Of(i));return n.length===1?n[0]:{compositeFilter:{op:ew(t.op),filters:n}}}(r):G()}function tw(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Mf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ut{constructor(e,t,n,i,s=H.min(),o=H.min(),l=ge.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Lf{constructor(e){this.ct=e}}function nw(r,e){let t;if(e.document)t=Hv(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=B.fromSegments(e.noDocument.path),i=gn(e.noDocument.readTime);t=de.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return G();{const n=B.fromSegments(e.unknownDocument.path),i=gn(e.unknownDocument.version);t=de.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new ue(i[0],i[1]);return H.fromTimestamp(s)}(e.readTime)),t}function $u(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ts(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,o){return{name:Es(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Zn(s,o.version.toTimestamp()),createTime:Zn(s,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:pn(e.version)};else{if(!e.isUnknownDocument())return G();n.unknownDocument={path:t.path.toArray(),version:pn(e.version)}}return n}function Ts(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function pn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function gn(r){const e=new ue(r.seconds,r.nanoseconds);return H.fromTimestamp(e)}function Zt(r,e){const t=(e.baseMutations||[]).map(s=>Ta(r.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const l=e.mutations[s+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>Ta(r.ct,s)),i=ue.fromMillis(e.localWriteTimeMs);return new Ya(e.batchId,i,t,n)}function jr(r){const e=gn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?gn(r.lastLimboFreeSnapshotVersion):H.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return W(s.documents.length===1),Ke(Ws(Cf(s.documents[0])))}(r.query):function(s){return Ke(Vf(s))}(r.query),new ut(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,ge.fromBase64String(r.resumeToken))}function Ff(r,e){const t=pn(e.snapshotVersion),n=pn(e.lastLimboFreeSnapshotVersion);let i;i=vs(e.target)?kf(r.ct,e.target):Df(r.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:fn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function jf(r){const e=Vf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Is(e,e.limit,"L"):e}function qo(r,e){return new Za(e.largestBatchId,Ta(r.ct,e.overlayMutation))}function zu(r,e){const t=e.path.lastSegment();return[r,Oe(e.path.popLast()),t]}function qu(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:pn(n.readTime),documentKey:Oe(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class rw{getBundleMetadata(e,t){return Gu(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:gn(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return Gu(e).put(function(i){return{bundleId:i.id,createTime:pn(Me(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Ku(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:jf(s.bundledQuery),readTime:gn(s.readTime)}}(n)})}saveNamedQuery(e,t){return Ku(e).put(function(i){return{name:i.name,readTime:pn(Me(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Gu(r){return ve(r,"bundles")}function Ku(r){return ve(r,"namedQueries")}/**
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
 */class Xs{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new Xs(e,n)}getOverlay(e,t){return Cr(e).get(zu(this.userId,t)).next(n=>n?qo(this.serializer,n):null)}getOverlays(e,t){const n=et();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,o)=>{const l=new Za(t,o);i.push(this.ht(e,l))}),A.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(o=>i.add(Oe(o.getCollectionPath())));const s=[];return i.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(Cr(e).j("collectionPathOverlayIndex",l))}),A.waitFor(s)}getOverlaysForCollection(e,t,n){const i=et(),s=Oe(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Cr(e).U("collectionPathOverlayIndex",o).next(l=>{for(const c of l){const h=qo(this.serializer,c);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=et();let o;const l=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Cr(e).J({index:"collectionGroupOverlayIndex",range:l},(c,h,f)=>{const p=qo(this.serializer,h);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return Cr(e).put(function(i,s,o){const[l,c,h]=zu(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:bs(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Cr(r){return ve(r,"documentOverlays")}/**
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
 */class iw{Pt(e){return ve(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?ge.fromUint8Array(n):ge.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class en{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(le(e.integerValue));else if("doubleValue"in e){const n=le(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),ti(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=mt(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Ft(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Jd(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Ks(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):G()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const i of Object.keys(n))this.Vt(i,t),this.Tt(n[i],t)}wt(e,t){var n,i;const s=e.fields||{};this.dt(t,53);const o="value",l=((i=(n=s[o].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(le(l)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const i of n)this.Tt(i,t)}yt(e,t){this.dt(t,37),B.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}en.vt=new en;function sw(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Wu(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const o=sw(255&n[s]);if(i+=o,o!==8)break}return i}(r);return Math.ceil(e/8)}class ow{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),n=Wu(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),n=Wu(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class aw{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class lw{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Pr{constructor(){this.jt=new ow,this.Ht=new aw(this.jt),this.Jt=new lw(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class tn{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new tn(this.indexId,this.documentKey,this.arrayValue,n)}}function Tt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Hu(r.arrayValue,e.arrayValue),t!==0?t:(t=Hu(r.directionalValue,e.directionalValue),t!==0?t:B.comparator(r.documentKey,e.documentKey)))}function Hu(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class Qu{constructor(e){this.Xt=new ie((t,n)=>ce.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(W(e.collectionGroup===this.collectionId),this.nn)return!1;const t=fa(e);if(t!==void 0&&!this.sn(t))return!1;const n=Yt(e);let i=new Set,s=0,o=0;for(;s<n.length&&this.sn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Xt.size>0){const l=this.Xt.getIterator().getNext();if(!i.has(l.field.canonicalString())){const c=n[s];if(!this.on(l,c)||!this._n(this.en[o++],c))return!1}++s}for(;s<n.length;++s){const l=n[s];if(o>=this.en.length||!this._n(this.en[o++],l))return!1}return!0}an(){if(this.nn)return null;let e=new ie(ce.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new es(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new es(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new es(n.field,n.dir==="asc"?0:1)));return new _s(_s.UNKNOWN_ID,this.collectionId,t,ei.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Uf(r){var e,t;if(W(r instanceof Z||r instanceof re),r instanceof Z){if(r instanceof of){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Z.create(r.field,"==",s)))||[];return re.create(i,"or")}return r}const n=r.filters.map(i=>Uf(i));return re.create(n,r.op)}function cw(r){if(r.getFilters().length===0)return[];const e=Aa(Uf(r));return W(Bf(e)),xa(e)||Sa(e)?[e]:e.getFilters()}function xa(r){return r instanceof Z}function Sa(r){return r instanceof re&&Ha(r)}function Bf(r){return xa(r)||Sa(r)||function(t){if(t instanceof re&&_a(t)){for(const n of t.getFilters())if(!xa(n)&&!Sa(n))return!1;return!0}return!1}(r)}function Aa(r){if(W(r instanceof Z||r instanceof re),r instanceof Z)return r;if(r.filters.length===1)return Aa(r.filters[0]);const e=r.filters.map(n=>Aa(n));let t=re.create(e,r.op);return t=xs(t),Bf(t)?t:(W(t instanceof re),W(Jn(t)),W(t.filters.length>1),t.filters.reduce((n,i)=>nl(n,i)))}function nl(r,e){let t;return W(r instanceof Z||r instanceof re),W(e instanceof Z||e instanceof re),t=r instanceof Z?e instanceof Z?function(i,s){return re.create([i,s],"and")}(r,e):Ju(r,e):e instanceof Z?Ju(e,r):function(i,s){if(W(i.filters.length>0&&s.filters.length>0),Jn(i)&&Jn(s))return nf(i,s.getFilters());const o=_a(i)?i:s,l=_a(i)?s:i,c=o.filters.map(h=>nl(h,l));return re.create(c,"or")}(r,e),xs(t)}function Ju(r,e){if(Jn(e))return nf(e,r.getFilters());{const t=e.filters.map(n=>nl(r,n));return re.create(t,"or")}}function xs(r){if(W(r instanceof Z||r instanceof re),r instanceof Z)return r;const e=r.getFilters();if(e.length===1)return xs(e[0]);if(ef(r))return r;const t=e.map(i=>xs(i)),n=[];return t.forEach(i=>{i instanceof Z?n.push(i):i instanceof re&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:re.create(n,r.op)}/**
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
 */class uw{constructor(){this.un=new rl}addToCollectionParentIndex(e,t){return this.un.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(We.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(We.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class rl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ie(ne.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ie(ne.comparator)).toArray()}}/**
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
 */const Gi=new Uint8Array(0);class hw{constructor(e,t){this.databaseId=t,this.cn=new rl,this.ln=new zt(n=>fn(n),(n,i)=>di(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:n,parent:Oe(i)};return Yu(e).put(s)}return A.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Ld(t),""],!1,!0);return Yu(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;n.push(Ze(o.parent))}return n})}addFieldIndex(e,t){const n=kr(e),i=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const o=Cn(e);return s.next(l=>{o.put(qu(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=kr(e),i=Cn(e),s=Rn(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=kr(e),n=Rn(e),i=Cn(e);return t.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(e,t){return A.forEach(this.hn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new Qu(n).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=Rn(e);let i=!0;const s=new Map;return A.forEach(this.hn(t),o=>this.Pn(e,o).next(l=>{i&&(i=!!l),s.set(o,l)})).next(()=>{if(i){let o=Y();const l=[];return A.forEach(s,(c,h)=>{L("IndexedDbIndexManager",`Using index ${function(O){return`id=${O.indexId}|cg=${O.collectionGroup}|f=${O.fields.map($=>`${$.fieldPath}:${$.kind}`).join(",")}`}(c)} to execute ${fn(t)}`);const f=function(O,$){const q=fa($);if(q===void 0)return null;for(const z of ws(O,q.fieldPath))switch(z.op){case"array-contains-any":return z.value.arrayValue.values||[];case"array-contains":return[z.value]}return null}(h,c),p=function(O,$){const q=new Map;for(const z of Yt($))for(const I of ws(O,z.fieldPath))switch(I.op){case"==":case"in":q.set(z.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return q.set(z.fieldPath.canonicalString(),I.value),Array.from(q.values())}return null}(h,c),y=function(O,$){const q=[];let z=!0;for(const I of Yt($)){const _=I.kind===0?Cu(O,I.fieldPath,O.startAt):Pu(O,I.fieldPath,O.startAt);q.push(_.value),z&&(z=_.inclusive)}return new Qn(q,z)}(h,c),b=function(O,$){const q=[];let z=!0;for(const I of Yt($)){const _=I.kind===0?Pu(O,I.fieldPath,O.endAt):Cu(O,I.fieldPath,O.endAt);q.push(_.value),z&&(z=_.inclusive)}return new Qn(q,z)}(h,c),k=this.In(c,h,y),P=this.In(c,h,b),C=this.Tn(c,h,p),M=this.En(c.indexId,f,k,y.inclusive,P,b.inclusive,C);return A.forEach(M,F=>n.G(F,t.limit).next(O=>{O.forEach($=>{const q=B.fromSegments($.documentKey);o.has(q)||(o=o.add(q),l.push(q))})}))}).next(()=>l)}return A.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=cw(re.create(e.filters,"and")).map(n=>va(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,i,s,o,l){const c=(t!=null?t.length:1)*Math.max(n.length,s.length),h=c/(t!=null?t.length:1),f=[];for(let p=0;p<c;++p){const y=t?this.dn(t[p/h]):Gi,b=this.An(e,y,n[p%h],i),k=this.Rn(e,y,s[p%h],o),P=l.map(C=>this.An(e,y,C,!0));f.push(...this.createRange(b,k,P))}return f}An(e,t,n,i){const s=new tn(e,B.empty(),t,n);return i?s:s.Zt()}Rn(e,t,n,i){const s=new tn(e,B.empty(),t,n);return i?s.Zt():s}Pn(e,t){const n=new Qu(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const l of s)n.rn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,t){let n=2;const i=this.hn(t);return A.forEach(i,s=>this.Pn(e,s).next(o=>{o?n!==0&&o.fields.length<function(c){let h=new ie(ce.comparator),f=!1;for(const p of c.filters)for(const y of p.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?f=!0:h=h.add(y.field));for(const p of c.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&n===2?1:n)}Vn(e,t){const n=new Pr;for(const i of Yt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=n.Yt(i.kind);en.vt.It(s,o)}return n.zt()}dn(e){const t=new Pr;return en.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Pr;return en.vt.It(ii(this.databaseId,t),n.Yt(function(s){const o=Yt(s);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let i=[];i.push(new Pr);let s=0;for(const o of Yt(e)){const l=n[s++];for(const c of i)if(this.fn(t,o.fieldPath)&&si(l))i=this.gn(i,o,l);else{const h=c.Yt(o.kind);en.vt.It(l,h)}}return this.pn(i)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const i=[...e],s=[];for(const o of n.arrayValue.values||[])for(const l of i){const c=new Pr;c.seed(l.zt()),en.vt.It(o,c.Yt(t.kind)),s.push(c)}return s}fn(e,t){return!!e.filters.find(n=>n instanceof Z&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=kr(e),i=Cn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(s=>{const o=[];return A.forEach(s,l=>i.get([l.indexId,this.uid]).next(c=>{o.push(function(f,p){const y=p?new ei(p.sequenceNumber,new We(gn(p.readTime),new B(Ze(p.documentKey)),p.largestBatchId)):ei.empty(),b=f.fields.map(([k,P])=>new es(ce.fromServerFormat(k),P));return new _s(f.indexId,f.collectionGroup,b,y)}(l,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:J(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=kr(e),s=Cn(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(l=>A.forEach(l,c=>s.put(qu(c.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return A.forEach(t,(i,s)=>{const o=n.get(i.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(l=>(n.set(i.collectionGroup,l),A.forEach(l,c=>this.wn(e,i,c).next(h=>{const f=this.Sn(s,c);return h.isEqual(f)?A.resolve():this.bn(e,s,c,h,f)}))))})}Dn(e,t,n,i){return Rn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,i){return Rn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const i=Rn(e);let s=new ie(Tt);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,l)=>{s=s.add(new tn(n.indexId,t,l.arrayValue,l.directionalValue))}).next(()=>s)}Sn(e,t){let n=new ie(Tt);const i=this.Vn(t,e);if(i==null)return n;const s=fa(t);if(s!=null){const o=e.data.field(s.fieldPath);if(si(o))for(const l of o.arrayValue.values||[])n=n.add(new tn(t.indexId,e.key,this.dn(l),i))}else n=n.add(new tn(t.indexId,e.key,Gi,i));return n}bn(e,t,n,i,s){L("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,h,f,p,y){const b=c.getIterator(),k=h.getIterator();let P=An(b),C=An(k);for(;P||C;){let M=!1,F=!1;if(P&&C){const O=f(P,C);O<0?F=!0:O>0&&(M=!0)}else P!=null?F=!0:M=!0;M?(p(C),C=An(k)):F?(y(P),P=An(b)):(P=An(b),C=An(k))}}(i,s,Tt,l=>{o.push(this.Dn(e,t,n,l))},l=>{o.push(this.vn(e,t,n,l))}),A.waitFor(o)}yn(e){let t=1;return Cn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,l)=>Tt(o,l)).filter((o,l,c)=>!l||Tt(o,c[l-1])!==0);const i=[];i.push(e);for(const o of n){const l=Tt(o,e),c=Tt(o,t);if(l===0)i[0]=e.Zt();else if(l>0&&c<0)i.push(o),i.push(o.Zt());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const l=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Gi,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Gi,[]];s.push(IDBKeyRange.bound(l,c))}return s}Cn(e,t){return Tt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Xu)}getMinOffset(e,t){return A.mapArray(this.hn(t),n=>this.Pn(e,n).next(i=>i||G())).next(Xu)}}function Yu(r){return ve(r,"collectionParents")}function Rn(r){return ve(r,"indexEntries")}function kr(r){return ve(r,"indexConfiguration")}function Cn(r){return ve(r,"indexState")}function Xu(r){W(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;za(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new We(e.readTime,e.documentKey,t)}/**
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
 */const Zu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Fe{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Fe(e,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function $f(r,e,t){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let l=0;const c=n.J({range:o},(f,p,y)=>(l++,y.delete()));s.push(c.next(()=>{W(l===1)}));const h=[];for(const f of t.mutations){const p=qd(e,f.key.path,t.batchId);s.push(i.delete(p)),h.push(f.key)}return A.waitFor(s).next(()=>h)}function Ss(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw G();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Fe.DEFAULT_COLLECTION_PERCENTILE=10,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fe.DEFAULT=new Fe(41943040,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fe.DISABLED=new Fe(-1,0,0);class Zs{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Fn={}}static lt(e,t,n,i){W(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Zs(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xt(e).J({index:"userMutationsIndex",range:n},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=Ln(e),o=xt(e);return o.add({}).next(l=>{W(typeof l=="number");const c=new Ya(l,t,n,i),h=function(b,k,P){const C=P.baseMutations.map(F=>bs(b.ct,F)),M=P.mutations.map(F=>bs(b.ct,F));return{userId:k,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:C,mutations:M}}(this.serializer,this.userId,c),f=[];let p=new ie((y,b)=>J(y.canonicalString(),b.canonicalString()));for(const y of i){const b=qd(this.userId,y.key.path,l);p=p.add(y.key.path.popLast()),f.push(o.put(h)),f.push(s.put(b,Hy))}return p.forEach(y=>{f.push(this.indexManager.addToCollectionParentIndex(e,y))}),e.addOnCommittedListener(()=>{this.Fn[l]=c.keys()}),A.waitFor(f).next(()=>c)})}lookupMutationBatch(e,t){return xt(e).get(t).next(n=>n?(W(n.userId===this.userId),Zt(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?A.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return xt(e).J({index:"userMutationsIndex",range:i},(o,l,c)=>{l.userId===this.userId&&(W(l.batchId>=n),s=Zt(this.serializer,l)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return xt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{n=s.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return xt(e).U("userMutationsIndex",t).next(n=>n.map(i=>Zt(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ts(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return Ln(e).J({range:i},(o,l,c)=>{const[h,f,p]=o,y=Ze(f);if(h===this.userId&&t.path.isEqual(y))return xt(e).get(p).next(b=>{if(!b)throw G();W(b.userId===this.userId),s.push(Zt(this.serializer,b))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(J);const i=[];return t.forEach(s=>{const o=ts(this.userId,s.path),l=IDBKeyRange.lowerBound(o),c=Ln(e).J({range:l},(h,f,p)=>{const[y,b,k]=h,P=Ze(b);y===this.userId&&s.path.isEqual(P)?n=n.add(k):p.done()});i.push(c)}),A.waitFor(i).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=ts(this.userId,n),o=IDBKeyRange.lowerBound(s);let l=new ie(J);return Ln(e).J({range:o},(c,h,f)=>{const[p,y,b]=c,k=Ze(y);p===this.userId&&n.isPrefixOf(k)?k.length===i&&(l=l.add(b)):f.done()}).next(()=>this.xn(e,l))}xn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(xt(e).get(s).next(o=>{if(o===null)throw G();W(o.userId===this.userId),n.push(Zt(this.serializer,o))}))}),A.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return $f(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),A.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return A.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Ln(e).J({range:n},(s,o,l)=>{if(s[0]===this.userId){const c=Ze(s[1]);i.push(c)}else l.done()}).next(()=>{W(i.length===0)})})}containsKey(e,t){return zf(e,this.userId,t)}Nn(e){return qf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function zf(r,e,t){const n=ts(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return Ln(r).J({range:s,H:!0},(l,c,h)=>{const[f,p,y]=l;f===e&&p===i&&(o=!0),h.done()}).next(()=>o)}function xt(r){return ve(r,"mutations")}function Ln(r){return ve(r,"documentMutations")}function qf(r){return ve(r,"mutationQueues")}/**
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
 */class mn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new mn(0)}static kn(){return new mn(-1)}}/**
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
 */class dw{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new mn(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>H.fromTimestamp(new ue(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Pn(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(W(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return Pn(e).J((o,l)=>{const c=jr(l);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Pn(e).J((n,i)=>{const s=jr(i);t(s)})}qn(e){return eh(e).get("targetGlobalKey").next(t=>(W(t!==null),t))}Qn(e,t){return eh(e).put("targetGlobalKey",t)}Kn(e,t){return Pn(e).put(Ff(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=fn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Pn(e).J({range:i,index:"queryTargetsIndex"},(o,l,c)=>{const h=jr(l);di(t,h.target)&&(s=h,c.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=At(e);return t.forEach(o=>{const l=Oe(o.path);i.push(s.put({targetId:n,path:l})),i.push(this.referenceDelegate.addReference(e,n,o))}),A.waitFor(i)}removeMatchingKeys(e,t,n){const i=At(e);return A.forEach(t,s=>{const o=Oe(s.path);return A.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=At(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=At(e);let s=Y();return i.J({range:n,H:!0},(o,l,c)=>{const h=Ze(o[1]),f=new B(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=Oe(t.path),i=IDBKeyRange.bound([n],[Ld(n)],!1,!0);let s=0;return At(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,l],c,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}ot(e,t){return Pn(e).get(t).next(n=>n?jr(n):null)}}function Pn(r){return ve(r,"targets")}function eh(r){return ve(r,"targetGlobal")}function At(r){return ve(r,"targetDocuments")}/**
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
 */function th([r,e],[t,n]){const i=J(r,t);return i===0?J(e,n):i}class fw{constructor(e){this.Un=e,this.buffer=new ie(th),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();th(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class pw{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){L("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$t(t)?L("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Bt(t)}await this.Hn(3e5)})}}class gw{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return A.resolve(je.oe);const n=new fw(t);return this.Jn.forEachTarget(e,i=>n.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>n.zn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Zu)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zu):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,i,s,o,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(n=p,l=Date.now(),this.removeTargets(e,n,t))).next(p=>(s=p,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),Vn()<=X.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function mw(r,e){return new gw(r,e)}/**
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
 */class _w{constructor(e,t){this.db=e,this.garbageCollector=mw(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,i)=>t(i))}addReference(e,t,n){return Ki(e,n)}removeReference(e,t,n){return Ki(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ki(e,t)}nr(e,t){return function(i,s){let o=!1;return qf(i).Y(l=>zf(i,l,s).next(c=>(c&&(o=!0),A.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,l)=>{if(l<=t){const c=this.nr(e,o).next(h=>{if(!h)return s++,n.getEntry(e,o).next(()=>(n.removeEntry(o,H.min()),At(e).delete(function(p){return[0,Oe(p.path)]}(o))))});i.push(c)}}).next(()=>A.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ki(e,t)}tr(e,t){const n=At(e);let i,s=je.oe;return n.J({index:"documentTargetsIndex"},([o,l],{path:c,sequenceNumber:h})=>{o===0?(s!==je.oe&&t(new B(Ze(i)),s),s=h,i=c):s=je.oe}).next(()=>{s!==je.oe&&t(new B(Ze(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ki(r,e){return At(r).put(function(n,i){return{targetId:0,path:Oe(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
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
 */class Gf{constructor(){this.changes=new zt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,de.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yw{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Qt(e).put(n)}removeEntry(e,t,n){return Qt(e).delete(function(s,o){const l=s.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],Ts(o),l[l.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=de.newInvalidDocument(t);return Qt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Dr(t))},(i,s)=>{n=this.ir(t,s)}).next(()=>n)}sr(e,t){let n={size:0,document:de.newInvalidDocument(t)};return Qt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Dr(t))},(i,s)=>{n={document:this.ir(t,s),size:Ss(s)}}).next(()=>n)}getEntries(e,t){let n=Ge();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);n=n.insert(i,o)}).next(()=>n)}ar(e,t){let n=Ge(),i=new oe(B.comparator);return this._r(e,t,(s,o)=>{const l=this.ir(s,o);n=n.insert(s,l),i=i.insert(s,Ss(o))}).next(()=>({documents:n,ur:i}))}_r(e,t,n){if(t.isEmpty())return A.resolve();let i=new ie(ih);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Dr(i.first()),Dr(i.last())),o=i.getIterator();let l=o.getNext();return Qt(e).J({index:"documentKeyIndex",range:s},(c,h,f)=>{const p=B.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;l&&ih(l,p)<0;)n(l,null),l=o.getNext();l&&l.isEqual(p)&&(n(l,h),l=o.hasNext()?o.getNext():null),l?f.$(Dr(l)):f.done()}).next(()=>{for(;l;)n(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),Ts(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Qt(e).U(IDBKeyRange.bound(l,c,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=Ge();for(const p of h){const y=this.ir(B.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);y.isFoundDocument()&&(pi(t,y)||i.has(y.key))&&(f=f.insert(y.key,y))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=Ge();const o=rh(t,n),l=rh(t,We.max());return Qt(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,l,!0)},(c,h,f)=>{const p=this.ir(B.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new vw(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return nh(e).get("remoteDocumentGlobalKey").next(t=>(W(!!t),t))}rr(e,t){return nh(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=nw(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(H.min())))return n}return de.newInvalidDocument(e)}}function Kf(r){return new yw(r)}class vw extends Gf{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new zt(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new ie((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const l=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,l.readTime)),o.isValidDocument()){const c=$u(this.cr.serializer,o);i=i.add(s.path.popLast());const h=Ss(c);n+=h-l.size,t.push(this.cr.addEntry(e,s,c))}else if(n-=l.size,this.trackRemovals){const c=$u(this.cr.serializer,o.convertToNoDocument(H.min()));t.push(this.cr.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,n)),A.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:n.get(s).readTime})}),n))}}function nh(r){return ve(r,"remoteDocumentGlobal")}function Qt(r){return ve(r,"remoteDocumentsV14")}function Dr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function rh(r,e){const t=e.documentKey.path.toArray();return[r,Ts(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ih(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=J(t[s],n[s]),i)return i;return i=J(t.length,n.length),i||(i=J(t[t.length-2],n[n.length-2]),i||J(t[t.length-1],n[n.length-1]))}/**
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
 */class ww{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Wf{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Wr(n.mutation,i,Ue.empty(),ue.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Y()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Y()){const i=et();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let o=Lr();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=et();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Y()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,n,i){let s=Ge();const o=Kr(),l=function(){return Kr()}();return t.forEach((c,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof vt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Wr(f.mutation,h,f.mutation.getFieldMask(),ue.now())):o.set(h.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new ww(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const n=Kr();let i=new oe((o,l)=>o-l),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||Ue.empty();f=l.applyToLocalView(h,f),n.set(c,f);const p=(i.get(l.batchId)||Y()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=pf();f.forEach(y=>{if(!s.has(y)){const b=wf(t.get(y),n.get(y));b!==null&&p.set(y,b),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return A.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):lf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):A.resolve(et());let l=-1,c=s;return o.next(h=>A.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?A.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{c=c.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,Y())).next(f=>({batchId:l,changes:ff(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(n=>{let i=Lr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=Lr();return this.indexManager.getCollectionParents(e,s).next(l=>A.forEach(l,c=>{const h=function(p,y){return new fi(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(o=>{s.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,de.newInvalidDocument(f)))});let l=Lr();return o.forEach((c,h)=>{const f=s.get(c);f!==void 0&&Wr(f.mutation,h,Ue.empty(),ue.now()),pi(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class Iw{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return A.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Me(i.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:jf(i.bundledQuery),readTime:Me(i.readTime)}}(t)),A.resolve()}}/**
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
 */class Ew{constructor(){this.overlays=new oe(B.comparator),this.Ir=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=et();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),A.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const i=et(),s=t.length+1,o=new B(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>n&&i.set(c.getKey(),c)}return A.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new oe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=et(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=et(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return A.resolve(l)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Za(t,n));let s=this.Ir.get(t);s===void 0&&(s=Y(),this.Ir.set(t,s)),this.Ir.set(t,s.add(n.key))}}/**
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
 */class bw{constructor(){this.sessionToken=ge.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
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
 */class il{constructor(){this.Tr=new ie(we.Er),this.dr=new ie(we.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new we(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new we(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new B(new ne([])),n=new we(t,e),i=new we(t,e+1),s=[];return this.dr.forEachInRange([n,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new ne([])),n=new we(t,e),i=new we(t,e+1);let s=Y();return this.dr.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new we(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class we{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||J(e.wr,t.wr)}static Ar(e,t){return J(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
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
 */class Tw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ie(we.Er)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ya(s,t,n,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new we(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.vr(n),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new we(t,0),i=new we(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,i],o=>{const l=this.Dr(o.wr);s.push(l)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(J);return t.forEach(i=>{const s=new we(i,0),o=new we(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{n=n.add(l.wr)})}),A.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;B.isDocumentKey(s)||(s=s.child(""));const o=new we(new B(s),0);let l=new ie(J);return this.br.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.wr)),!0)},o),A.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){W(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return A.forEach(t.mutations,i=>{const s=new we(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new we(t,0),i=this.br.firstAfterOrEqual(n);return A.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class xw{constructor(e){this.Mr=e,this.docs=function(){return new oe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():de.newInvalidDocument(t))}getEntries(e,t){let n=Ge();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():de.newInvalidDocument(i))}),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Ge();const o=t.path,l=new B(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||za(jd(f),n)<=0||(i.has(f.key)||pi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,t,n,i){G()}Or(e,t){return A.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Sw(this)}getSize(e){return A.resolve(this.size)}}class Sw extends Gf{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),A.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Aw{constructor(e){this.persistence=e,this.Nr=new zt(t=>fn(t),di),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new il,this.targetCount=0,this.kr=mn.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,i)=>t(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),A.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new mn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.Kn(t),A.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),A.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this.Br.containsKey(t))}}/**
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
 */class Hf{constructor(e,t){this.qr={},this.overlays={},this.Qr=new je(0),this.Kr=!1,this.Kr=!0,this.$r=new bw,this.referenceDelegate=e(this),this.Ur=new Aw(this),this.indexManager=new uw,this.remoteDocumentCache=function(i){return new xw(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Lf(t),this.Gr=new Iw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ew,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new Tw(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){L("MemoryPersistence","Starting transaction:",e);const i=new Rw(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return A.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class Rw extends Bd{constructor(e){super(),this.currentSequenceNumber=e}}class eo{constructor(e){this.persistence=e,this.Jr=new il,this.Yr=null}static Zr(e){return new eo(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),A.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Xr,n=>{const i=B.fromPath(n);return this.ei(e,i).next(s=>{s||t.removeEntry(i,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return A.or([()=>A.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Cw{constructor(e){this.serializer=e}O(e,t,n,i){const s=new qs("createOrUpgrade",t);n<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",yu,{unique:!0}),c.createObjectStore("documentMutations")}(e),sh(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=A.resolve();return n<3&&i>=3&&(n!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),sh(e)),o=o.next(()=>function(c){const h=c.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(s))),n<4&&i>=4&&(n!==0&&(o=o.next(()=>function(c,h){return h.store("mutations").U().next(f=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",yu,{unique:!0});const p=h.store("mutations"),y=f.map(b=>p.put(b));return A.waitFor(y)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&i>=5&&(o=o.next(()=>this.ni(s))),n<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),n<7&&i>=7&&(o=o.next(()=>this.ii(s))),n<8&&i>=8&&(o=o.next(()=>this.si(e,s))),n<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(o=o.next(()=>this.oi(s))),n<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(o=o.next(()=>{(function(c){const h=c.createObjectStore("documentOverlays",{keyPath:ov});h.createIndex("collectionPathOverlayIndex",av,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",lv,{unique:!1})})(e)})),n<13&&i>=13&&(o=o.next(()=>function(c){const h=c.createObjectStore("remoteDocumentsV14",{keyPath:Qy});h.createIndex("documentKeyIndex",Jy),h.createIndex("collectionGroupIndex",Yy)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),n<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:nv}).createIndex("sequenceNumberIndex",rv,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:iv}).createIndex("documentKeyIndex",sv,{unique:!1})}(e))),n<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&i>=17&&(o=o.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,i)=>{t+=Ss(i)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(i=>A.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(l=>A.forEach(l,c=>{W(c.userId===s.userId);const h=Zt(this.serializer,c);return $f(e,s.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((o,l)=>{const c=new ne(o),h=function(p){return[0,Oe(p)]}(c);s.push(t.get(h).next(f=>f?A.resolve():(p=>t.put({targetId:0,path:Oe(p),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>A.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:tv});const n=t.store("collectionParents"),i=new rl,s=o=>{if(i.add(o)){const l=o.lastSegment(),c=o.popLast();return n.put({collectionId:l,parent:Oe(c)})}};return t.store("remoteDocuments").J({H:!0},(o,l)=>{const c=new ne(o);return s(c.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,l,c],h)=>{const f=Ze(l);return s(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,i)=>{const s=jr(i),o=Ff(this.serializer,s);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),i=[];return n.J((s,o)=>{const l=t.store("remoteDocumentsV14"),c=function(p){return p.document?new B(ne.fromString(p.document.name).popFirst(5)):p.noDocument?B.fromSegments(p.noDocument.path):p.unknownDocument?B.fromSegments(p.unknownDocument.path):G()}(o).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(l.put(h))}).next(()=>A.waitFor(i))}ai(e,t){const n=t.store("mutations"),i=Kf(this.serializer),s=new Hf(eo.Zr,this.serializer.ct);return n.U().next(o=>{const l=new Map;return o.forEach(c=>{var h;let f=(h=l.get(c.userId))!==null&&h!==void 0?h:Y();Zt(this.serializer,c).keys().forEach(p=>f=f.add(p)),l.set(c.userId,f)}),A.forEach(l,(c,h)=>{const f=new Ce(h),p=Xs.lt(this.serializer,f),y=s.getIndexManager(f),b=Zs.lt(f,this.serializer,y,s.referenceDelegate);return new Wf(i,b,p,y).recalculateAndSaveOverlaysForDocumentKeys(new pa(t,je.oe),c).next()})})}}function sh(r){r.createObjectStore("targetDocuments",{keyPath:Zy}).createIndex("documentTargetsIndex",ev,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Xy,{unique:!0}),r.createObjectStore("targetGlobal")}const Go="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class sl{constructor(e,t,n,i,s,o,l,c,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=s,this.window=o,this.document=l,this.ci=h,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=y=>Promise.resolve(),!sl.D())throw new j(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _w(this,i),this.Ai=t+"main",this.serializer=new Lf(c),this.Ri=new Mt(this.Ai,this.hi,new Cw(this.serializer)),this.$r=new iw,this.Ur=new dw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Kf(this.serializer),this.Gr=new rw,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&fe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(V.FAILED_PRECONDITION,Go);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new je(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Wi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if($t(e))return L("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return L("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Vr(e).get("owner").next(t=>A.resolve(this.vi(t)))}Ci(e){return Wi(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=ve(t,"clientMetadata");return n.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(l=>s.indexOf(l)===-1);return A.forEach(o,l=>n.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?A.resolve(!0):Vr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new j(V.FAILED_PRECONDITION,Go);return!1}}return!(!this.networkEnabled||!this.inForeground)||Wi(e).U().next(n=>this.xi(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,l=this.networkEnabled===i.networkEnabled;if(s||o&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&L("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new pa(e,je.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Wi(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Zs.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new hw(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Xs.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){L("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===17?hv:c===16?uv:c===15?Ga:c===14?Wd:c===13?Kd:c===12?cv:c===11?Gd:void G()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,l=>(o=new pa(l,this.Qr?this.Qr.next():je.oe),t==="readwrite-primary"?this.wi(o).next(c=>!!c||this.Si(o)).next(c=>{if(!c)throw fe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new j(V.FAILED_PRECONDITION,Ud);return n(o)}).next(c=>this.Di(o).next(()=>c)):this.Ki(o).next(()=>n(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Ki(e){return Vr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new j(V.FAILED_PRECONDITION,Go)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Vr(e).put("owner",t)}static D(){return Mt.D()}bi(e){const t=Vr(e);return t.get("owner").next(n=>this.vi(n)?(L("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):A.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(fe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Ed()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return L("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return fe("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){fe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Vr(r){return ve(r,"owner")}function Wi(r){return ve(r,"clientMetadata")}function Qf(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class ol{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=i}static Wi(e,t){let n=Y(),i=Y();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ol(e,t.fromCache,n,i)}}/**
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
 */class Pw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Jf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ed()?8:$d(ye())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Pw;return this.Xi(e,t,o).next(l=>{if(s.result=l,this.zi)return this.es(e,t,o,l.size)})}).next(()=>s.result)}es(e,t,n,i){return n.documentReadCount<this.ji?(Vn()<=X.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),A.resolve()):(Vn()<=X.DEBUG&&L("QueryEngine","Query:",Nn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(Vn()<=X.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ke(t))):A.resolve())}Yi(e,t){if(ku(t))return A.resolve(null);let n=Ke(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Is(t,null,"F"),n=Ke(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const o=Y(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const h=this.ts(t,l);return this.ns(t,h,o,c.readTime)?this.Yi(e,Is(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,n,i){return ku(t)||i.isEqual(H.min())?A.resolve(null):this.Ji.getDocuments(e,n).next(s=>{const o=this.ts(t,s);return this.ns(t,o,n,i)?A.resolve(null):(Vn()<=X.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nn(t)),this.rs(e,o,t,Fd(i,-1)).next(l=>l))})}ts(e,t){let n=new ie(hf(e));return t.forEach((i,s)=>{pi(e,s)&&(n=n.add(s))}),n}ns(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,n){return Vn()<=X.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Nn(t)),this.Ji.getDocumentsMatchingQuery(e,t,We.min(),n)}rs(e,t,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class kw{constructor(e,t,n,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new oe(J),this._s=new zt(s=>fn(s),di),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Yf(r,e,t,n){return new kw(r,e,t,n)}async function Xf(r,e){const t=K(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],l=[];let c=Y();for(const h of i){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Dw(r,e){const t=K(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,y=p.keys();let b=A.resolve();return y.forEach(k=>{b=b.next(()=>f.getEntry(c,k)).next(P=>{const C=h.docVersions.get(k);W(C!==null),P.version.compareTo(C)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=Y();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Zf(r){const e=K(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Vw(r,e){const t=K(r),n=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,p)=>{const y=i.get(p);if(!y)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,p)));let b=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(ge.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,n)),i=i.insert(p,b),function(P,C,M){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(y,b,f)&&l.push(t.Ur.updateTargetData(s,b))});let c=Ge(),h=Y();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Nw(s,o,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!n.isEqual(H.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(p=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));l.push(f)}return A.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.os=i,s))}function Nw(r,e,t){let n=Y(),i=Y();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let o=Ge();return t.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):L("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function Ow(r,e){const t=K(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function As(r,e){const t=K(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Ur.getTargetData(n,e).next(s=>s?(i=s,A.resolve(i)):t.Ur.allocateTargetId(n).next(o=>(i=new ut(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function er(r,e,t){const n=K(r),i=n.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$t(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function Ra(r,e,t){const n=K(r);let i=H.min(),s=Y();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=K(c),y=p._s.get(f);return y!==void 0?A.resolve(p.os.get(y)):p.Ur.getTargetData(h,f)}(n,o,Ke(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?i:H.min(),t?s:Y())).next(l=>(np(n,uf(e),l),{documents:l,Ts:s})))}function ep(r,e){const t=K(r),n=K(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.ot(s,e).next(o=>o?o.target:null))}function tp(r,e){const t=K(r),n=t.us.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,Fd(n,-1),Number.MAX_SAFE_INTEGER)).then(i=>(np(t,e,i),i))}function np(r,e,t){let n=r.us.get(e)||H.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.us.set(e,n)}function oh(r,e){return`firestore_clients_${r}_${e}`}function ah(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function Ko(r,e){return`firestore_targets_${r}_${e}`}class Rs{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Rs(e,t,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new j(i.error.code,i.error.message))),o?new Rs(e,t,i.state,s):(fe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Hr{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new j(n.error.code,n.error.message))),s?new Hr(e,n.state,i):(fe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Cs{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=Qa();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=zd(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new Cs(e,s):(fe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class al{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new al(t.clientId,t.onlineState):(fe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ca{constructor(){this.activeTargetIds=Qa()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wo{constructor(e,t,n,i,s){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new oe(J),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=oh(this.persistenceKey,this.ps),this.vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Ca),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Os=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const i=this.getItem(oh(this.persistenceKey,n));if(i){const s=Cs.Rs(n,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Ko(this.persistenceKey,e));if(i){const s=Hr.Rs(e,i);s&&(n=s.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ko(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return L("SharedClientState","READ",e,t),t}setItem(e,t){L("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){L("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(L("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void fe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(s){let o=je.oe;if(s!=null)try{const l=JSON.parse(s);W(typeof l=="number"),o=l}catch(l){fe("SharedClientState","Failed to read sequence number from WebStorage",l)}return o}(t.newValue);n!==je.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const i=new Rs(this.currentUser,e,t,n),s=ah(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=ah(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const i=Ko(this.persistenceKey,e),s=new Hr(e,t,n);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return Cs.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return Rs.Rs(new Ce(s),i,t)}Ys(e,t){const n=this.Ms.exec(e),i=Number(n[1]);return Hr.Rs(i,t)}Ls(e){return al.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);L("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(n),o=[],l=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||l.push(c)}),this.syncEngine.io(o,l).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Qa();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class rp{constructor(){this.so=new Ca,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ca,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Mw{_o(e){}shutdown(){}}/**
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
 */let Hi=null;function Ho(){return Hi===null?Hi=function(){return 268435456+Math.round(2147483648*Math.random())}():Hi++,"0x"+Hi.toString(16)}/**
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
 */const Lw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Fw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Re="WebChannelConnection";class jw extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,n,i,s,o){const l=Ho(),c=this.xo(t,n.toUriEncodedString());L("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(t,c,h,i).then(f=>(L("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Kn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}Lo(t,n,i,s,o,l){return this.Mo(t,n,i,s,o)}Oo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+lr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,n){const i=Lw[t];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,i){const s=Ho();return new Promise((o,l)=>{const c=new kd;c.setWithCredentials(!0),c.listenOnce(Dd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Zi.NO_ERROR:const f=c.getResponseJson();L(Re,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Zi.TIMEOUT:L(Re,`RPC '${e}' ${s} timed out`),l(new j(V.DEADLINE_EXCEEDED,"Request time out"));break;case Zi.HTTP_ERROR:const p=c.getStatus();if(L(Re,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const b=y==null?void 0:y.error;if(b&&b.status&&b.message){const k=function(C){const M=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(M)>=0?M:V.UNKNOWN}(b.status);l(new j(k,b.message))}else l(new j(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new j(V.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{L(Re,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);L(Re,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,n,15)})}Bo(e,t,n){const i=Ho(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Od(),l=Nd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const f=s.join("");L(Re,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=o.createWebChannel(f,c);let y=!1,b=!1;const k=new Fw({Io:C=>{b?L(Re,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(y||(L(Re,`Opening RPC '${e}' stream ${i} transport.`),p.open(),y=!0),L(Re,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},To:()=>p.close()}),P=(C,M,F)=>{C.listen(M,O=>{try{F(O)}catch($){setTimeout(()=>{throw $},0)}})};return P(p,Mr.EventType.OPEN,()=>{b||(L(Re,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),P(p,Mr.EventType.CLOSE,()=>{b||(b=!0,L(Re,`RPC '${e}' stream ${i} transport closed`),k.So())}),P(p,Mr.EventType.ERROR,C=>{b||(b=!0,Kn(Re,`RPC '${e}' stream ${i} transport errored:`,C),k.So(new j(V.UNAVAILABLE,"The operation could not be completed")))}),P(p,Mr.EventType.MESSAGE,C=>{var M;if(!b){const F=C.data[0];W(!!F);const O=F,$=O.error||((M=O[0])===null||M===void 0?void 0:M.error);if($){L(Re,`RPC '${e}' stream ${i} received error:`,$);const q=$.status;let z=function(w){const E=me[w];if(E!==void 0)return bf(E)}(q),I=$.message;z===void 0&&(z=V.INTERNAL,I="Unknown error status: "+q+" with message "+$.message),b=!0,k.So(new j(z,I)),p.close()}else L(Re,`RPC '${e}' stream ${i} received:`,F),k.bo(F)}}),P(l,Vd.STAT_EVENT,C=>{C.stat===da.PROXY?L(Re,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===da.NOPROXY&&L(Re,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}/**
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
 */function ip(){return typeof window<"u"?window:null}function os(){return typeof document<"u"?document:null}/**
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
 */function to(r){return new Kv(r,!0)}/**
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
 */class sp{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-n);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class op{constructor(e,t,n,i,s,o,l,c){this.ui=e,this.Ho=n,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new sp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(fe(t.toString()),fe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===t&&this.P_(n,i)},n=>{e(()=>{const i=new j(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Uw extends op{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Qv(this.serializer,e),n=function(s){if(!("targetChange"in s))return H.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?Me(o.readTime):H.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=ba(this.serializer),t.addTarget=function(s,o){let l;const c=o.target;if(l=vs(c)?{documents:kf(s,c)}:{query:Df(s,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Sf(s,o.resumeToken);const h=Ia(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(H.min())>0){l.readTime=Zn(s,o.snapshotVersion.toTimestamp());const h=Ia(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const n=Yv(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=ba(this.serializer),t.removeTarget=e,this.a_(t)}}class Bw extends op{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return W(!!e.streamToken),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Jv(e.writeResults,e.commitTime),n=Me(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=ba(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>bs(this.serializer,n))};this.a_(t)}}/**
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
 */class $w extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ea(t,n),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(V.UNKNOWN,s.toString())})}Lo(e,t,n,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ea(t,n),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class zw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(fe(t),this.D_=!1):L("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class qw{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{n.enqueueAndForget(async()=>{vn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=K(c);h.L_.add(4),await _i(h),h.q_.set("Unknown"),h.L_.delete(4),await no(h)}(this))})}),this.q_=new zw(n,i)}}async function no(r){if(vn(r))for(const e of r.B_)await e(!0)}async function _i(r){for(const e of r.B_)await e(!1)}function ro(r,e){const t=K(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ul(t)?cl(t):hr(t).r_()&&ll(t,e))}function tr(r,e){const t=K(r),n=hr(t);t.N_.delete(e),n.r_()&&ap(t,e),t.N_.size===0&&(n.r_()?n.o_():vn(t)&&t.q_.set("Unknown"))}function ll(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hr(r).A_(e)}function ap(r,e){r.Q_.xe(e),hr(r).R_(e)}function cl(r){r.Q_=new $v({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),hr(r).start(),r.q_.v_()}function ul(r){return vn(r)&&!hr(r).n_()&&r.N_.size>0}function vn(r){return K(r).L_.size===0}function lp(r){r.Q_=void 0}async function Gw(r){r.q_.set("Online")}async function Kw(r){r.N_.forEach((e,t)=>{ll(r,e)})}async function Ww(r,e){lp(r),ul(r)?(r.q_.M_(e),cl(r)):r.q_.set("Unknown")}async function Hw(r,e,t){if(r.q_.set("Online"),e instanceof xf&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(r,e)}catch(n){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ps(r,n)}else if(e instanceof ss?r.Q_.Ke(e):e instanceof Tf?r.Q_.He(e):r.Q_.We(e),!t.isEqual(H.min()))try{const n=await Zf(r.localStore);t.compareTo(n)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=s.N_.get(c);if(!f)return;s.N_.set(c,f.withResumeToken(ge.EMPTY_BYTE_STRING,f.snapshotVersion)),ap(s,c);const p=new ut(f.target,c,h,f.sequenceNumber);ll(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){L("RemoteStore","Failed to raise snapshot:",n),await Ps(r,n)}}async function Ps(r,e,t){if(!$t(e))throw e;r.L_.add(1),await _i(r),r.q_.set("Offline"),t||(t=()=>Zf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await no(r)})}function cp(r,e){return e().catch(t=>Ps(r,t,e))}async function ur(r){const e=K(r),t=Ut(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Qw(e);)try{const i=await Ow(e.localStore,n);if(i===null){e.O_.length===0&&t.o_();break}n=i.batchId,Jw(e,i)}catch(i){await Ps(e,i)}up(e)&&hp(e)}function Qw(r){return vn(r)&&r.O_.length<10}function Jw(r,e){r.O_.push(e);const t=Ut(r);t.r_()&&t.V_&&t.m_(e.mutations)}function up(r){return vn(r)&&!Ut(r).n_()&&r.O_.length>0}function hp(r){Ut(r).start()}async function Yw(r){Ut(r).p_()}async function Xw(r){const e=Ut(r);for(const t of r.O_)e.m_(t.mutations)}async function Zw(r,e,t){const n=r.O_.shift(),i=Xa.from(n,e,t);await cp(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await ur(r)}async function eI(r,e){e&&Ut(r).V_&&await async function(n,i){if(function(o){return jv(o)&&o!==V.ABORTED}(i.code)){const s=n.O_.shift();Ut(n).s_(),await cp(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ur(n)}}(r,e),up(r)&&hp(r)}async function ch(r,e){const t=K(r);t.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const n=vn(t);t.L_.add(3),await _i(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await no(t)}async function Pa(r,e){const t=K(r);e?(t.L_.delete(2),await no(t)):e||(t.L_.add(2),await _i(t),t.q_.set("Unknown"))}function hr(r){return r.K_||(r.K_=function(t,n,i){const s=K(t);return s.w_(),new Uw(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:Gw.bind(null,r),Ro:Kw.bind(null,r),mo:Ww.bind(null,r),d_:Hw.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),ul(r)?cl(r):r.q_.set("Unknown")):(await r.K_.stop(),lp(r))})),r.K_}function Ut(r){return r.U_||(r.U_=function(t,n,i){const s=K(t);return s.w_(),new Bw(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Yw.bind(null,r),mo:eI.bind(null,r),f_:Xw.bind(null,r),g_:Zw.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await ur(r)):(await r.U_.stop(),r.O_.length>0&&(L("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class hl{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,l=new hl(e,t,o,i,s);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dl(r,e){if(fe("AsyncQueue",`${e}: ${r}`),$t(r))return new j(V.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class jn{constructor(e){this.comparator=e?(t,n)=>e(t,n)||B.comparator(t.key,n.key):(t,n)=>B.comparator(t.key,n.key),this.keyedMap=Lr(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new jn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new jn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class uh{constructor(){this.W_=new oe(B.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class nr{constructor(e,t,n,i,s,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new nr(e,t,jn.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class tI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class nI{constructor(){this.queries=hh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const i=K(t),s=i.queries;i.queries=hh(),s.forEach((o,l)=>{for(const c of l.j_)c.onError(n)})})(this,new j(V.ABORTED,"Firestore shutting down"))}}function hh(){return new zt(r=>cf(r),Hs)}async function dp(r,e){const t=K(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(n=2):(s=new tI,n=e.J_()?0:1);try{switch(n){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=dl(o,`Initialization of query '${Nn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&fl(t)}async function fp(r,e){const t=K(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function rI(r,e){const t=K(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(n=!0);o.z_=i}}n&&fl(t)}function iI(r,e,t){const n=K(r),i=n.queries.get(e);if(i)for(const s of i.j_)s.onError(t);n.queries.delete(e)}function fl(r){r.Y_.forEach(e=>{e.next()})}var ka,dh;(dh=ka||(ka={})).ea="default",dh.Cache="cache";class pp{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new nr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ka.Cache}}/**
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
 */class gp{constructor(e){this.key=e}}class mp{constructor(e){this.key=e}}class sI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Y(),this.mutatedKeys=Y(),this.Aa=hf(e),this.Ra=new jn(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new uh,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const y=i.get(f),b=pi(this.query,p)?p:null,k=!!y&&this.mutatedKeys.has(y.key),P=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let C=!1;y&&b?y.data.isEqual(b.data)?k!==P&&(n.track({type:3,doc:b}),C=!0):this.ga(y,b)||(n.track({type:2,doc:b}),C=!0,(c&&this.Aa(b,c)>0||h&&this.Aa(b,h)<0)&&(l=!0)):!y&&b?(n.track({type:0,doc:b}),C=!0):y&&!b&&(n.track({type:1,doc:y}),C=!0,(c||h)&&(l=!0)),C&&(b?(o=o.add(b),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{Ra:o,fa:n,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(b,k){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return P(b)-P(k)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),i=i!=null&&i;const l=t&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new nr(this.query,e.Ra,s,o,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new uh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Y(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new mp(n))}),this.da.forEach(n=>{e.has(n)||t.push(new gp(n))}),t}ba(e){this.Ta=e.Ts,this.da=Y();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return nr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class oI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class aI{constructor(e){this.key=e,this.va=!1}}class lI{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new zt(l=>cf(l),Hs),this.Ma=new Map,this.xa=new Set,this.Oa=new oe(B.comparator),this.Na=new Map,this.La=new il,this.Ba={},this.ka=new Map,this.qa=mn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function cI(r,e,t=!0){const n=io(r);let i;const s=n.Fa.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await _p(n,e,t,!0),i}async function uI(r,e){const t=io(r);await _p(t,e,!0,!1)}async function _p(r,e,t,n){const i=await As(r.localStore,Ke(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let l;return n&&(l=await pl(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&ro(r.remoteStore,i),l}async function pl(r,e,t,n,i){r.Ka=(p,y,b)=>async function(P,C,M,F){let O=C.view.ma(M);O.ns&&(O=await Ra(P.localStore,C.query,!1).then(({documents:I})=>C.view.ma(I,O)));const $=F&&F.targetChanges.get(C.targetId),q=F&&F.targetMismatches.get(C.targetId)!=null,z=C.view.applyChanges(O,P.isPrimaryClient,$,q);return Da(P,C.targetId,z.wa),z.snapshot}(r,p,y,b);const s=await Ra(r.localStore,e,!0),o=new sI(e,s.Ts),l=o.ma(s.documents),c=mi.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(l,r.isPrimaryClient,c);Da(r,t,h.wa);const f=new oI(e,t,o);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function hI(r,e,t){const n=K(r),i=n.Fa.get(e),s=n.Ma.get(i.targetId);if(s.length>1)return n.Ma.set(i.targetId,s.filter(o=>!Hs(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await er(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&tr(n.remoteStore,i.targetId),rr(n,i.targetId)}).catch(Bt)):(rr(n,i.targetId),await er(n.localStore,i.targetId,!0))}async function dI(r,e){const t=K(r),n=t.Fa.get(e),i=t.Ma.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),tr(t.remoteStore,n.targetId))}async function fI(r,e,t){const n=yl(r);try{const i=await function(o,l){const c=K(o),h=ue.now(),f=l.reduce((b,k)=>b.add(k.key),Y());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=Ge(),P=Y();return c.cs.getEntries(b,f).next(C=>{k=C,k.forEach((M,F)=>{F.isValidDocument()||(P=P.add(M))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,k)).next(C=>{p=C;const M=[];for(const F of l){const O=Lv(F,p.get(F.key).overlayedDocument);O!=null&&M.push(new vt(F.key,O,Xd(O.value.mapValue),Ne.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,M,l)}).next(C=>{y=C;const M=C.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(b,C.batchId,M)})}).then(()=>({batchId:y.batchId,changes:ff(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new oe(J)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(n,i.batchId,t),await qt(n,i.changes),await ur(n.remoteStore)}catch(i){const s=dl(i,"Failed to persist write");t.reject(s)}}async function yp(r,e){const t=K(r);try{const n=await Vw(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?W(o.va):i.removedDocuments.size>0&&(W(o.va),o.va=!1))}),await qt(t,n,e)}catch(n){await Bt(n)}}function fh(r,e,t){const n=K(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=K(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const y of p.j_)y.Z_(l)&&(h=!0)}),h&&fl(c)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function pI(r,e,t){const n=K(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Na.get(e),s=i&&i.key;if(s){let o=new oe(B.comparator);o=o.insert(s,de.newNoDocument(s,H.min()));const l=Y().add(s),c=new gi(H.min(),new Map,new oe(J),o,l);await yp(n,c),n.Oa=n.Oa.remove(s),n.Na.delete(e),_l(n)}else await er(n.localStore,e,!1).then(()=>rr(n,e,t)).catch(Bt)}async function gI(r,e){const t=K(r),n=e.batch.batchId;try{const i=await Dw(t.localStore,e);ml(t,n,null),gl(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await qt(t,i)}catch(i){await Bt(i)}}async function mI(r,e,t){const n=K(r);try{const i=await function(o,l){const c=K(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(W(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,e);ml(n,e,t),gl(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await qt(n,i)}catch(i){await Bt(i)}}function gl(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function ml(r,e,t){const n=K(r);let i=n.Ba[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function rr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||vp(r,n)})}function vp(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(tr(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),_l(r))}function Da(r,e,t){for(const n of t)n instanceof gp?(r.La.addReference(n.key,e),_I(r,n)):n instanceof mp?(L("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||vp(r,n.key)):G()}function _I(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(L("SyncEngine","New document in limbo: "+t),r.xa.add(n),_l(r))}function _l(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new B(ne.fromString(e)),n=r.qa.next();r.Na.set(n,new aI(t)),r.Oa=r.Oa.insert(t,n),ro(r.remoteStore,new ut(Ke(Ws(t.path)),n,"TargetPurposeLimboResolution",je.oe))}}async function qt(r,e,t){const n=K(r),i=[],s=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((l,c)=>{o.push(n.Ka(c,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){i.push(h);const p=ol.Wi(c.targetId,h);s.push(p)}}))}),await Promise.all(o),n.Ca.d_(i),await async function(c,h){const f=K(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>A.forEach(h,y=>A.forEach(y.$i,b=>f.persistence.referenceDelegate.addReference(p,y.targetId,b)).next(()=>A.forEach(y.Ui,b=>f.persistence.referenceDelegate.removeReference(p,y.targetId,b)))))}catch(p){if(!$t(p))throw p;L("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const b=f.os.get(y),k=b.snapshotVersion,P=b.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(y,P)}}}(n.localStore,s))}async function yI(r,e){const t=K(r);if(!t.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const n=await Xf(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(c=>{c.reject(new j(V.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await qt(t,n.hs)}}function vI(r,e){const t=K(r),n=t.Na.get(e);if(n&&n.va)return Y().add(n.key);{let i=Y();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const l=t.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}async function wI(r,e){const t=K(r),n=await Ra(t.localStore,e.query,!0),i=e.view.ba(n);return t.isPrimaryClient&&Da(t,e.targetId,i.wa),i}async function II(r,e){const t=K(r);return tp(t.localStore,e).then(n=>qt(t,n))}async function EI(r,e,t,n){const i=K(r),s=await function(l,c){const h=K(l),f=K(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,c).next(y=>y?h.localDocuments.getDocuments(p,y):A.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await ur(i.remoteStore):t==="acknowledged"||t==="rejected"?(ml(i,e,n||null),gl(i,e),function(l,c){K(K(l).mutationQueue).On(c)}(i.localStore,e)):G(),await qt(i,s)):L("SyncEngine","Cannot apply mutation batch with id: "+e)}async function bI(r,e){const t=K(r);if(io(t),yl(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await ph(t,n.toArray());t.Qa=!0,await Pa(t.remoteStore,!0);for(const s of i)ro(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const n=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then(()=>(rr(t,o),er(t.localStore,o,!0))),tr(t.remoteStore,o)}),await i,await ph(t,n),function(o){const l=K(o);l.Na.forEach((c,h)=>{tr(l.remoteStore,h)}),l.La.pr(),l.Na=new Map,l.Oa=new oe(B.comparator)}(t),t.Qa=!1,await Pa(t.remoteStore,!1)}}async function ph(r,e,t){const n=K(r),i=[],s=[];for(const o of e){let l;const c=n.Ma.get(o);if(c&&c.length!==0){l=await As(n.localStore,Ke(c[0]));for(const h of c){const f=n.Fa.get(h),p=await wI(n,f);p.snapshot&&s.push(p.snapshot)}}else{const h=await ep(n.localStore,o);l=await As(n.localStore,h),await pl(n,wp(h),o,!1,l.resumeToken)}i.push(l)}return n.Ca.d_(s),i}function wp(r){return af(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function TI(r){return function(t){return K(K(t).persistence).Qi()}(K(r).localStore)}async function xI(r,e,t,n){const i=K(r);if(i.Qa)return void L("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await tp(i.localStore,uf(s[0])),l=gi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ge.EMPTY_BYTE_STRING);await qt(i,o,l);break}case"rejected":await er(i.localStore,e,!0),rr(i,e,n);break;default:G()}}async function SI(r,e,t){const n=io(r);if(n.Qa){for(const i of e){if(n.Ma.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){L("SyncEngine","Adding an already active target "+i);continue}const s=await ep(n.localStore,i),o=await As(n.localStore,s);await pl(n,wp(s),o.targetId,!1,o.resumeToken),ro(n.remoteStore,o)}for(const i of t)n.Ma.has(i)&&await er(n.localStore,i,!1).then(()=>{tr(n.remoteStore,i),rr(n,i)}).catch(Bt)}}function io(r){const e=K(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=yp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pI.bind(null,e),e.Ca.d_=rI.bind(null,e.eventManager),e.Ca.$a=iI.bind(null,e.eventManager),e}function yl(r){const e=K(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mI.bind(null,e),e}class li{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=to(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Yf(this.persistence,new Jf,e.initialUser,this.serializer)}Ga(e){return new Hf(eo.Zr,this.serializer)}Wa(e){return new rp}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}li.provider={build:()=>new li};class vl extends li{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await yl(this.Ja.syncEngine),await ur(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Yf(this.persistence,new Jf,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new pw(n,e.asyncQueue,t)}Ha(e,t){const n=new Ky(t,this.persistence);return new Gy(e.asyncQueue,n)}Ga(e){const t=Qf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Fe.withCacheSize(this.cacheSizeBytes):Fe.DEFAULT;return new sl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,ip(),os(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new rp}}class AI extends vl{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Wo&&(this.sharedClientState.syncEngine={no:EI.bind(null,t),ro:xI.bind(null,t),io:SI.bind(null,t),Qi:TI.bind(null,t),eo:II.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await bI(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=ip();if(!Wo.D(t))throw new j(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Qf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Wo(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ir{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>fh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=yI.bind(null,this.syncEngine),await Pa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nI}()}createDatastore(e){const t=to(e.databaseInfo.databaseId),n=function(s){return new jw(s)}(e.databaseInfo);return function(s,o,l,c){return new $w(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,o,l){return new qw(n,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>fh(this.syncEngine,t,0),function(){return lh.D()?new lh:new Mw}())}createSyncEngine(e,t){return function(i,s,o,l,c,h,f){const p=new lI(i,s,o,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=K(i);L("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await _i(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ir.provider={build:()=>new ir};/**
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
 */class Ip{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):fe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class RI{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ce.UNAUTHENTICATED,this.clientId=Md.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{L("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(L("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=dl(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Qo(r,e){r.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Xf(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function gh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await CI(r);L("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>ch(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>ch(e.remoteStore,i)),r._onlineComponents=e}async function CI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Kn("Error using user provided cache. Falling back to memory cache: "+t),await Qo(r,new li)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Qo(r,new li);return r._offlineComponents}async function Ep(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await gh(r,r._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await gh(r,new ir))),r._onlineComponents}function PI(r){return Ep(r).then(e=>e.syncEngine)}async function bp(r){const e=await Ep(r),t=e.eventManager;return t.onListen=cI.bind(null,e.syncEngine),t.onUnlisten=hI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dI.bind(null,e.syncEngine),t}function kI(r,e,t={}){const n=new tt;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,h){const f=new Ip({next:y=>{f.Za(),o.enqueueAndForget(()=>fp(s,p));const b=y.docs.has(l);!b&&y.fromCache?h.reject(new j(V.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&y.fromCache&&c&&c.source==="server"?h.reject(new j(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new pp(Ws(l.path),f,{includeMetadataChanges:!0,_a:!0});return dp(s,p)}(await bp(r),r.asyncQueue,e,t,n)),n.promise}function DI(r,e,t={}){const n=new tt;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,h){const f=new Ip({next:y=>{f.Za(),o.enqueueAndForget(()=>fp(s,p)),y.fromCache&&c.source==="server"?h.reject(new j(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new pp(l,f,{includeMetadataChanges:!0,_a:!0});return dp(s,p)}(await bp(r),r.asyncQueue,e,t,n)),n.promise}/**
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
 */function Tp(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */function xp(r,e,t){if(!t)throw new j(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function VI(r,e,t,n){if(e===!0&&n===!0)throw new j(V.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function _h(r){if(!B.isDocumentKey(r))throw new j(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function yh(r){if(B.isDocumentKey(r))throw new j(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function so(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":G()}function it(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new j(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=so(r);throw new j(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class vh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tp((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wl{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Oy;switch(n.type){case"firstParty":return new Fy(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=mh.get(t);n&&(L("ComponentProvider","Removing Datastore"),mh.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class wn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new wn(this.firestore,e,this._query)}}class Le{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}}class Lt extends wn{constructor(e,t,n){super(e,t,Ws(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new B(e))}withConverter(e){return new Lt(this.firestore,e,this._path)}}function on(r,e,...t){if(r=be(r),xp("collection","path",e),r instanceof wl){const n=ne.fromString(e,...t);return yh(n),new Lt(r,null,n)}{if(!(r instanceof Le||r instanceof Lt))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return yh(n),new Lt(r.firestore,null,n)}}function ht(r,e,...t){if(r=be(r),arguments.length===1&&(e=Md.newId()),xp("doc","path",e),r instanceof wl){const n=ne.fromString(e,...t);return _h(n),new Le(r,null,new B(n))}{if(!(r instanceof Le||r instanceof Lt))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return _h(n),new Le(r.firestore,r instanceof Lt?r.converter:null,new B(n))}}/**
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
 */class wh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new sp(this,"async_queue_retry"),this.Vu=()=>{const n=os();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=os();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=os();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new tt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!$t(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(n);throw fe("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=hl.createAndSchedule(this,e,t,n,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}/**
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
 */const NI=-1;class In extends wl{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new wh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wh(e),this._firestoreClient=void 0,await e}}}function Sp(r,e,t){t||(t="(default)");const n=Ba(r,"firestore");if(n.isInitialized(t)){const i=n.getImmediate({identifier:t}),s=n.getOptions(t);if(Yr(s,e))return i;throw new j(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new j(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function Il(r){if(r._terminated)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ap(r),r._firestoreClient}function Ap(r){var e,t,n;const i=r._freezeSettings(),s=function(l,c,h,f){return new fv(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Tp(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new RI(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(r._componentsProvider))}function OI(r,e){Kn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return MI(r,ir.provider,{build:n=>new vl(n,t.cacheSizeBytes,void 0)}),Promise.resolve()}function MI(r,e,t){if((r=it(r,In))._firestoreClient||r._terminated)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new j(V.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Ap(r)}/**
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
 */class sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sr(ge.fromBase64String(e))}catch(t){throw new j(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new sr(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class oo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class El{constructor(e){this._methodName=e}}/**
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
 */class bl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */class Tl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const LI=/^__.*__$/;class FI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new vt(e,this.data,this.fieldMask,t,this.fieldTransforms):new cr(e,this.data,t,this.fieldTransforms)}}class Rp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new vt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Cp(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class xl{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new xl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ks(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Cp(this.Cu)&&LI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class jI{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||to(e)}Qu(e,t,n,i=!1){return new xl({Cu:e,methodName:t,qu:n,path:ce.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sl(r){const e=r._freezeSettings(),t=to(r._databaseId);return new jI(r._databaseId,!!e.ignoreUndefinedProperties,t)}function UI(r,e,t,n,i,s={}){const o=r.Qu(s.merge||s.mergeFields?2:0,e,t,i);Al("Data must be an object, but it was:",o,n);const l=Pp(n,o);let c,h;if(s.merge)c=new Ue(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const y=Va(e,p,t);if(!o.contains(y))throw new j(V.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Dp(f,y)||f.push(y)}c=new Ue(f),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new FI(new Pe(l),c,h)}class yi extends El{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yi}}function BI(r,e,t,n){const i=r.Qu(1,e,t);Al("Data must be an object, but it was:",i,n);const s=[],o=Pe.empty();yn(n,(c,h)=>{const f=Rl(e,c,t);h=be(h);const p=i.Nu(f);if(h instanceof yi)s.push(f);else{const y=vi(h,p);y!=null&&(s.push(f),o.set(f,y))}});const l=new Ue(s);return new Rp(o,l,i.fieldTransforms)}function $I(r,e,t,n,i,s){const o=r.Qu(1,e,t),l=[Va(e,n,t)],c=[i];if(s.length%2!=0)throw new j(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Va(e,s[y])),c.push(s[y+1]);const h=[],f=Pe.empty();for(let y=l.length-1;y>=0;--y)if(!Dp(h,l[y])){const b=l[y];let k=c[y];k=be(k);const P=o.Nu(b);if(k instanceof yi)h.push(b);else{const C=vi(k,P);C!=null&&(h.push(b),f.set(b,C))}}const p=new Ue(h);return new Rp(f,p,o.fieldTransforms)}function zI(r,e,t,n=!1){return vi(t,r.Qu(n?4:3,e))}function vi(r,e){if(kp(r=be(r)))return Al("Unsupported field value:",e,r),Pp(r,e);if(r instanceof El)return function(n,i){if(!Cp(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const s=[];let o=0;for(const l of n){let c=vi(l,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Pv(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ue.fromDate(n);return{timestampValue:Zn(i.serializer,s)}}if(n instanceof ue){const s=new ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Zn(i.serializer,s)}}if(n instanceof bl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof sr)return{bytesValue:Sf(i.serializer,n._byteString)};if(n instanceof Le){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:tl(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Tl)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ja(l.serializer,c)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${so(n)}`)}(r,e)}function Pp(r,e){const t={};return Hd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yn(r,(n,i)=>{const s=vi(i,e.Mu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function kp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ue||r instanceof bl||r instanceof sr||r instanceof Le||r instanceof El||r instanceof Tl)}function Al(r,e,t){if(!kp(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=so(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function Va(r,e,t){if((e=be(e))instanceof oo)return e._internalPath;if(typeof e=="string")return Rl(r,e);throw ks("Field path arguments must be of type string or ",r,!1,void 0,t)}const qI=new RegExp("[~\\*/\\[\\]]");function Rl(r,e,t){if(e.search(qI)>=0)throw ks(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new oo(...e.split("."))._internalPath}catch{throw ks(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ks(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${n}`),o&&(c+=` in document ${i}`),c+=")"),new j(V.INVALID_ARGUMENT,l+r+c)}function Dp(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class Vp{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Np("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class GI extends Vp{data(){return super.data()}}function Np(r,e){return typeof e=="string"?Rl(r,e):e instanceof oo?e._internalPath:e._delegate._internalPath}/**
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
 */function KI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new j(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cl{}class Op extends Cl{}function Un(r,e,...t){let n=[];e instanceof Cl&&n.push(e),n=n.concat(t),function(s){const o=s.filter(c=>c instanceof kl).length,l=s.filter(c=>c instanceof Pl).length;if(o>1||o>0&&l>0)throw new j(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Pl extends Op{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Pl(e,t,n)}_apply(e){const t=this._parse(e);return Mp(e._query,t),new wn(e.firestore,e.converter,wa(e._query,t))}_parse(e){const t=Sl(e.firestore);return function(s,o,l,c,h,f,p){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new j(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Eh(p,f);const b=[];for(const k of p)b.push(Ih(c,s,k));y={arrayValue:{values:b}}}else y=Ih(c,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Eh(p,f),y=zI(l,o,p,f==="in"||f==="not-in");return Z.create(h,f,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class kl extends Cl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new kl(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)Mp(o,c),o=wa(o,c)}(e._query,t),new wn(e.firestore,e.converter,wa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dl extends Op{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Dl(e,t,n)}_apply(e){return new wn(e.firestore,e.converter,Is(e._query,this._limit,this._limitType))}}function Bn(r){return Dl._create("limit",r,"F")}function Ih(r,e,t){if(typeof(t=be(t))=="string"){if(t==="")throw new j(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lf(e)&&t.indexOf("/")!==-1)throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ne.fromString(t));if(!B.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ii(r,new B(n))}if(t instanceof Le)return ii(r,t._key);throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${so(t)}.`)}function Eh(r,e){if(!Array.isArray(r)||r.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Mp(r,e){const t=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class WI{convertValue(e,t="none"){switch(dn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ft(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return yn(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(o=>le(o.doubleValue));return new Tl(s)}convertGeoPoint(e){return new bl(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Wa(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ni(e));default:return null}}convertTimestamp(e){const t=mt(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ne.fromString(e);W(Mf(n));const i=new hn(n.get(1),n.get(3)),s=new B(n.popFirst(5));return i.isEqual(t)||fe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function HI(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
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
 */class Ur{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lp extends Vp{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new as(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Np("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class as extends Lp{data(e={}){return super.data(e)}}class QI{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ur(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new as(this._firestore,this._userDataWriter,n.key,n,new Ur(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new as(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ur(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new as(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ur(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:JI(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function JI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function wi(r){r=it(r,Le);const e=it(r.firestore,In);return kI(Il(e),r._key).then(t=>XI(e,r,t))}class Fp extends WI{constructor(e){super(),this.firestore=e}convertBytes(e){return new sr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}}function an(r){r=it(r,wn);const e=it(r.firestore,In),t=Il(e),n=new Fp(e);return KI(r._query),DI(t,r._query).then(i=>new QI(e,n,r,i))}function Vl(r,e,t){r=it(r,Le);const n=it(r.firestore,In),i=HI(r.converter,e);return Nl(n,[UI(Sl(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,Ne.none())])}function ao(r,e,t,...n){r=it(r,Le);const i=it(r.firestore,In),s=Sl(i);let o;return o=typeof(e=be(e))=="string"||e instanceof oo?$I(s,"updateDoc",r._key,e,t,n):BI(s,"updateDoc",r._key,e),Nl(i,[o.toMutation(r._key,Ne.exists(!0))])}function YI(r){return Nl(it(r.firestore,In),[new Ys(r._key,Ne.none())])}function Nl(r,e){return function(n,i){const s=new tt;return n.asyncQueue.enqueueAndForget(async()=>fI(await PI(n),i,s)),s.promise}(Il(r),e)}function XI(r,e,t){const n=t.docs.get(e._key),i=new Fp(r);return new Lp(r,i,e._key,n,new Ur(t.hasPendingWrites,t.fromCache),e.converter)}class ZI{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=rE(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function eE(r){return new ZI(r)}class tE{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ir.provider,this._offlineComponentProvider={build:t=>new vl(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class nE{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ir.provider,this._offlineComponentProvider={build:t=>new AI(t,e==null?void 0:e.cacheSizeBytes)}}}function rE(r){return new tE(void 0)}function iE(){return new nE}/**
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
 */function sE(){return new yi("deleteField")}(function(e,t=!0){(function(i){lr=i})(ar),Gn(new cn("firestore",(n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),l=new In(new My(n.getProvider("auth-internal")),new Uy(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new j(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hn(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ot(gu,"4.7.3",e),Ot(gu,"4.7.3","esm2017")})();var oE="firebase",aE="10.14.1";/**
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
 */Ot(oE,aE,"app");function jp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lE=jp,Up=new ui("auth","Firebase",jp());/**
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
 */const Ds=new ja("@firebase/auth");function cE(r,...e){Ds.logLevel<=X.WARN&&Ds.warn(`Auth (${ar}): ${r}`,...e)}function ls(r,...e){Ds.logLevel<=X.ERROR&&Ds.error(`Auth (${ar}): ${r}`,...e)}/**
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
 */function st(r,...e){throw Ml(r,...e)}function Xe(r,...e){return Ml(r,...e)}function Ol(r,e,t){const n=Object.assign(Object.assign({},lE()),{[e]:t});return new ui("auth","Firebase",n).create(e,{appName:r.name})}function ln(r){return Ol(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uE(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&st(r,"argument-error"),Ol(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ml(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Up.create(r,...e)}function Q(r,e,...t){if(!r)throw Ml(e,...t)}function dt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ls(e),new Error(e)}function _t(r,e){r||dt(e)}/**
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
 */function Na(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function hE(){return bh()==="http:"||bh()==="https:"}function bh(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function dE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hE()||m_()||"connection"in navigator)?navigator.onLine:!0}function fE(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ii{constructor(e,t){this.shortDelay=e,this.longDelay=t,_t(t>e,"Short delay should be less than long delay!"),this.isMobile=f_()||__()}get(){return dE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ll(r,e){_t(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Bp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gE=new Ii(3e4,6e4);function Fl(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function dr(r,e,t,n,i={}){return $p(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const l=hi(Object.assign({key:r.config.apiKey},o)).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:c},s);return g_()||(h.referrerPolicy="no-referrer"),Bp.fetch()(zp(r,r.config.apiHost,t,l),h)})}async function $p(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},pE),e);try{const i=new _E(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qi(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qi(r,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qi(r,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qi(r,"user-disabled",o);const f=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ol(r,f,h);st(r,f)}}catch(i){if(i instanceof yt)throw i;st(r,"network-request-failed",{message:String(i)})}}async function mE(r,e,t,n,i={}){const s=await dr(r,e,t,n,i);return"mfaPendingCredential"in s&&st(r,"multi-factor-auth-required",{_serverResponse:s}),s}function zp(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?Ll(r.config,i):`${r.config.apiScheme}://${i}`}class _E{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Xe(this.auth,"network-request-failed")),gE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Xe(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */async function yE(r,e){return dr(r,"POST","/v1/accounts:delete",e)}async function qp(r,e){return dr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vE(r,e=!1){const t=be(r),n=await t.getIdToken(e),i=jl(n);Q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:Qr(Jo(i.auth_time)),issuedAtTime:Qr(Jo(i.iat)),expirationTime:Qr(Jo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jo(r){return Number(r)*1e3}function jl(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return ls("JWT malformed, contained fewer than 3 sections"),null;try{const i=vd(t);return i?JSON.parse(i):(ls("Failed to decode base64 JWT payload"),null)}catch(i){return ls("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Th(r){const e=jl(r);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ci(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof yt&&wE(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function wE({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class IE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qr(this.lastLoginAt),this.creationTime=Qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vs(r){var e;const t=r.auth,n=await r.getIdToken(),i=await ci(r,qp(t,{idToken:n}));Q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Gp(s.providerUserInfo):[],l=bE(r.providerData,o),c=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Oa(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function EE(r){const e=be(r);await Vs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bE(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Gp(r){return r.map(e=>{var{providerId:t}=e,n=La(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function TE(r,e){const t=await $p(r,{},async()=>{const n=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=zp(r,i,"/v1/token",`key=${s}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Bp.fetch()(o,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xE(r,e){return dr(r,"POST","/v2/accounts:revokeToken",Fl(r,e))}/**
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
 */class $n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Th(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=Th(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await TE(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new $n;return n&&(Q(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $n,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function St(r,e){Q(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ft{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=La(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Oa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ci(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vE(this,e)}reload(){return EE(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Vs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(ln(this.auth));const e=await this.getIdToken();return await ci(this,yE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,l,c,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,y=(i=t.email)!==null&&i!==void 0?i:void 0,b=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(l=t.tenantId)!==null&&l!==void 0?l:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,M=(h=t.createdAt)!==null&&h!==void 0?h:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:$,isAnonymous:q,providerData:z,stsTokenManager:I}=t;Q(O&&I,e,"internal-error");const _=$n.fromJSON(this.name,I);Q(typeof O=="string",e,"internal-error"),St(p,e.name),St(y,e.name),Q(typeof $=="boolean",e,"internal-error"),Q(typeof q=="boolean",e,"internal-error"),St(b,e.name),St(k,e.name),St(P,e.name),St(C,e.name),St(M,e.name),St(F,e.name);const w=new ft({uid:O,auth:e,email:y,emailVerified:$,displayName:p,isAnonymous:q,photoURL:k,phoneNumber:b,tenantId:P,stsTokenManager:_,createdAt:M,lastLoginAt:F});return z&&Array.isArray(z)&&(w.providerData=z.map(E=>Object.assign({},E))),C&&(w._redirectEventId=C),w}static async _fromIdTokenResponse(e,t,n=!1){const i=new $n;i.updateFromServerResponse(t);const s=new ft({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Vs(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Gp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new $n;l.updateFromIdToken(n);const c=new ft({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Oa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
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
 */const xh=new Map;function pt(r){_t(r instanceof Function,"Expected a class definition");let e=xh.get(r);return e?(_t(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,xh.set(r,e),e)}/**
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
 */class Kp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kp.type="NONE";const Sh=Kp;/**
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
 */function cs(r,e,t){return`firebase:${r}:${e}:${t}`}class zn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=cs(this.userKey,i.apiKey,s),this.fullPersistenceKey=cs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new zn(pt(Sh),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||pt(Sh);const o=cs(n,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(o);if(f){const p=ft._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new zn(s,e,n):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new zn(s,e,n))}}/**
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
 */function Ah(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xp(e))return"Blackberry";if(Zp(e))return"Webos";if(Hp(e))return"Safari";if((e.includes("chrome/")||Qp(e))&&!e.includes("edge/"))return"Chrome";if(Yp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Wp(r=ye()){return/firefox\//i.test(r)}function Hp(r=ye()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qp(r=ye()){return/crios\//i.test(r)}function Jp(r=ye()){return/iemobile/i.test(r)}function Yp(r=ye()){return/android/i.test(r)}function Xp(r=ye()){return/blackberry/i.test(r)}function Zp(r=ye()){return/webos/i.test(r)}function Ul(r=ye()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function SE(r=ye()){var e;return Ul(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AE(){return y_()&&document.documentMode===10}function eg(r=ye()){return Ul(r)||Yp(r)||Zp(r)||Xp(r)||/windows phone/i.test(r)||Jp(r)}/**
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
 */function tg(r,e=[]){let t;switch(r){case"Browser":t=Ah(ye());break;case"Worker":t=`${Ah(ye())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ar}/${n}`}/**
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
 */class RE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function CE(r,e={}){return dr(r,"GET","/v2/passwordPolicy",Fl(r,e))}/**
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
 */const PE=6;class kE{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:PE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class DE{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rh(this),this.idTokenSubscription=new Rh(this),this.beforeStateQueue=new RE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qp(this,{idToken:e}),n=await ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(ln(this));const t=e?be(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CE(this),t=new kE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await xE(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pt(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&cE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function lo(r){return be(r)}class Rh{constructor(e){this.auth=e,this.observer=null,this.addObserver=T_(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VE(r){Bl=r}function NE(r){return Bl.loadJS(r)}function OE(){return Bl.gapiScript}function ME(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function LE(r,e){const t=Ba(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Yr(s,e??{}))return i;st(i,"already-initialized")}return t.initialize({options:e})}function FE(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(pt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function jE(r,e,t){const n=lo(r);Q(n._canInitEmulator,n,"emulator-config-failed"),Q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=ng(e),{host:o,port:l}=UE(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${s}//${o}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),BE()}function ng(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function UE(r){const e=ng(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Ch(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Ch(o)}}}function Ch(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function BE(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class rg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,t){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}/**
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
 */async function qn(r,e){return mE(r,"POST","/v1/accounts:signInWithIdp",Fl(r,e))}/**
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
 */const $E="http://localhost";class _n extends rg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):st("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=La(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new _n(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return qn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,qn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qn(e,t)}buildRequest(){const e={requestUri:$E,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hi(t)}return e}}/**
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
 */class $l{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ei extends $l{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rt extends Ei{constructor(){super("facebook.com")}static credential(e){return _n._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
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
 */class lt extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _n._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return lt.credential(t,n)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
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
 */class Ct extends Ei{constructor(){super("github.com")}static credential(e){return _n._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
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
 */class Pt extends Ei{constructor(){super("twitter.com")}static credential(e,t){return _n._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Pt.credential(t,n)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await ft._fromIdTokenResponse(e,n,i),o=Ph(n);return new or({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Ph(n);return new or({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Ph(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ns extends yt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ns(e,t,n,i)}}function ig(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ns._fromErrorAndOperation(r,s,e,n):s})}async function zE(r,e,t=!1){const n=await ci(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return or._forOperation(r,"link",n)}/**
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
 */async function qE(r,e,t=!1){const{auth:n}=r;if(ct(n.app))return Promise.reject(ln(n));const i="reauthenticate";try{const s=await ci(r,ig(n,i,e,r),t);Q(s.idToken,n,"internal-error");const o=jl(s.idToken);Q(o,n,"internal-error");const{sub:l}=o;return Q(r.uid===l,n,"user-mismatch"),or._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&st(n,"user-mismatch"),s}}/**
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
 */async function GE(r,e,t=!1){if(ct(r.app))return Promise.reject(ln(r));const n="signIn",i=await ig(r,n,e),s=await or._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function KE(r,e,t,n){return be(r).onIdTokenChanged(e,t,n)}function WE(r,e,t){return be(r).beforeAuthStateChanged(e,t)}function HE(r,e,t,n){return be(r).onAuthStateChanged(e,t,n)}function QE(r){return be(r).signOut()}const Os="__sak";/**
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
 */class sg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Os,"1"),this.storage.removeItem(Os),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const JE=1e3,YE=10;class og extends sg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);AE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,YE):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},JE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}og.type="LOCAL";const XE=og;/**
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
 */class ag extends sg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ag.type="SESSION";const lg=ag;/**
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
 */function ZE(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new co(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(o).map(async h=>h(t.origin,s)),c=await ZE(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}co.receivers=[];/**
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
 */function zl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class eb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const h=zl("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function tb(r){nt().location.href=r}/**
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
 */function cg(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function nb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rb(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function ib(){return cg()?self:null}/**
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
 */const ug="firebaseLocalStorageDb",sb=1,Ms="firebaseLocalStorage",hg="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uo(r,e){return r.transaction([Ms],e?"readwrite":"readonly").objectStore(Ms)}function ob(){const r=indexedDB.deleteDatabase(ug);return new bi(r).toPromise()}function Ma(){const r=indexedDB.open(ug,sb);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Ms,{keyPath:hg})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Ms)?e(n):(n.close(),await ob(),e(await Ma()))})})}async function kh(r,e,t){const n=uo(r,!0).put({[hg]:e,value:t});return new bi(n).toPromise()}async function ab(r,e){const t=uo(r,!1).get(e),n=await new bi(t).toPromise();return n===void 0?null:n.value}function Dh(r,e){const t=uo(r,!0).delete(e);return new bi(t).toPromise()}const lb=800,cb=3;class dg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ma(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>cb)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=co._getInstance(ib()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nb(),!this.activeServiceWorker)return;this.sender=new eb(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ma();return await kh(e,Os,"1"),await Dh(e,Os),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>kh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>ab(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uo(i,!1).getAll();return new bi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dg.type="LOCAL";const ub=dg;new Ii(3e4,6e4);/**
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
 */function fg(r,e){return e?pt(e):(Q(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class ql extends rg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hb(r){return GE(r.auth,new ql(r),r.bypassAuthState)}function db(r){const{auth:e,user:t}=r;return Q(t,e,"internal-error"),qE(t,new ql(r),r.bypassAuthState)}async function fb(r){const{auth:e,user:t}=r;return Q(t,e,"internal-error"),zE(t,new ql(r),r.bypassAuthState)}/**
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
 */class pg{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hb;case"linkViaPopup":case"linkViaRedirect":return fb;case"reauthViaPopup":case"reauthViaRedirect":return db;default:st(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pb=new Ii(2e3,1e4);async function gb(r,e,t){if(ct(r.app))return Promise.reject(Xe(r,"operation-not-supported-in-this-environment"));const n=lo(r);uE(r,e,$l);const i=fg(n,t);return new nn(n,"signInViaPopup",e,i).executeNotNull()}class nn extends pg{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=zl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pb.get())};e()}}nn.currentPopupAction=null;/**
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
 */const mb="pendingRedirect",us=new Map;class _b extends pg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=us.get(this.auth._key());if(!e){try{const n=await yb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}us.set(this.auth._key(),e)}return this.bypassAuthState||us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yb(r,e){const t=Ib(e),n=wb(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function vb(r,e){us.set(r._key(),e)}function wb(r){return pt(r._redirectPersistence)}function Ib(r){return cs(mb,r.config.apiKey,r.name)}async function Eb(r,e,t=!1){if(ct(r.app))return Promise.reject(ln(r));const n=lo(r),i=fg(n,e),o=await new _b(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const bb=10*60*1e3;class Tb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!gg(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vh(e))}saveEventToCache(e){this.cachedEventUids.add(Vh(e)),this.lastProcessedEventTime=Date.now()}}function Vh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function gg({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xb(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gg(r);default:return!1}}/**
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
 */async function Sb(r,e={}){return dr(r,"GET","/v1/projects",e)}/**
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
 */const Ab=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rb=/^https?/;async function Cb(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Sb(r);for(const t of e)try{if(Pb(t))return}catch{}st(r,"unauthorized-domain")}function Pb(r){const e=Na(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Rb.test(t))return!1;if(Ab.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const kb=new Ii(3e4,6e4);function Nh(){const r=nt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Db(r){return new Promise((e,t)=>{var n,i,s;function o(){Nh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nh(),t(Xe(r,"network-request-failed"))},timeout:kb.get()})}if(!((i=(n=nt().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nt().gapi)===null||s===void 0)&&s.load)o();else{const l=ME("iframefcb");return nt()[l]=()=>{gapi.load?o():t(Xe(r,"network-request-failed"))},NE(`${OE()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw hs=null,e})}let hs=null;function Vb(r){return hs=hs||Db(r),hs}/**
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
 */const Nb=new Ii(5e3,15e3),Ob="__/auth/iframe",Mb="emulator/auth/iframe",Lb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jb(r){const e=r.config;Q(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ll(e,Mb):`https://${r.config.authDomain}/${Ob}`,n={apiKey:e.apiKey,appName:r.name,v:ar},i=Fb.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${hi(n).slice(1)}`}async function Ub(r){const e=await Vb(r),t=nt().gapi;return Q(t,r,"internal-error"),e.open({where:document.body,url:jb(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lb,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=Xe(r,"network-request-failed"),l=nt().setTimeout(()=>{s(o)},Nb.get());function c(){nt().clearTimeout(l),i(n)}n.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Bb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$b=500,zb=600,qb="_blank",Gb="http://localhost";class Oh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kb(r,e,t,n=$b,i=zb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Bb),{width:n.toString(),height:i.toString(),top:s,left:o}),h=ye().toLowerCase();t&&(l=Qp(h)?qb:t),Wp(h)&&(e=e||Gb,c.scrollbars="yes");const f=Object.entries(c).reduce((y,[b,k])=>`${y}${b}=${k},`,"");if(SE(h)&&l!=="_self")return Wb(e||"",l),new Oh(null);const p=window.open(e||"",l,f);Q(p,r,"popup-blocked");try{p.focus()}catch{}return new Oh(p)}function Wb(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Hb="__/auth/handler",Qb="emulator/auth/handler",Jb=encodeURIComponent("fac");async function Mh(r,e,t,n,i,s){Q(r.config.authDomain,r,"auth-domain-config-required"),Q(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:ar,eventId:i};if(e instanceof $l){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",b_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ei){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await r._getAppCheckToken(),h=c?`#${Jb}=${encodeURIComponent(c)}`:"";return`${Yb(r)}?${hi(l).slice(1)}${h}`}function Yb({config:r}){return r.emulator?Ll(r,Qb):`https://${r.authDomain}/${Hb}`}/**
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
 */const Yo="webStorageSupport";class Xb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lg,this._completeRedirectFn=Eb,this._overrideRedirectResult=vb}async _openPopup(e,t,n,i){var s;_t((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Mh(e,t,n,Na(),i);return Kb(e,o,zl())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Mh(e,t,n,Na(),i);return tb(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(_t(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ub(e),n=new Tb(e);return t.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yo,{type:Yo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yo];o!==void 0&&t(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Cb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eg()||Hp()||Ul()}}const Zb=Xb;var Lh="@firebase/auth",Fh="1.7.9";/**
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
 */class eT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nT(r){Gn(new cn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tg(r)},h=new DE(n,i,s,c);return FE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Gn(new cn("auth-internal",e=>{const t=lo(e.getProvider("auth").getImmediate());return(n=>new eT(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Lh,Fh,tT(r)),Ot(Lh,Fh,"esm2017")}/**
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
 */const rT=5*60,iT=Id("authIdTokenMaxAge")||rT;let jh=null;const sT=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>iT)return;const i=t==null?void 0:t.token;jh!==i&&(jh=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oT(r=Ad()){const e=Ba(r,"auth");if(e.isInitialized())return e.getImmediate();const t=LE(r,{popupRedirectResolver:Zb,persistence:[ub,XE,lg]}),n=Id("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=sT(s.toString());WE(t,o,()=>o(t.currentUser)),KE(t,l=>o(l))}}const i=h_("auth");return i&&jE(t,`http://${i}`),t}function aT(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}VE({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Xe("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",aT().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nT("Browser");const mg=()=>{const r="production";if(["development","staging","production"].includes(r))return r;const e=window.location.hostname;return e.includes("localhost")||e.includes("127.0.0.1")?"development":e.includes("staging")||e.includes("test")||e.includes("dev")?"staging":"production"},lT={development:{apiUrl:"http://localhost:3000/api",databaseType:"local",storagePrefix:"blindtab_dev_",enableAnalytics:!1,logLevel:"debug",features:{tourEnabled:!0,editorEnabled:!0,importExportEnabled:!0,debugTools:!0}},staging:{apiUrl:"https://staging-api.blindtab.app/api",databaseType:"remote",storagePrefix:"blindtab_staging_",enableAnalytics:!0,logLevel:"info",features:{tourEnabled:!0,editorEnabled:!0,importExportEnabled:!0,debugTools:!0}},production:{apiUrl:"https://api.blindtab.app/api",databaseType:"remote",storagePrefix:"blindtab_",enableAnalytics:!0,logLevel:"error",features:{tourEnabled:!0,editorEnabled:!0,importExportEnabled:!0,debugTools:!1}}},cT=()=>{const r=mg();return console.log(`Running in ${r} environment`),lT[r]},ho=mg(),uT=cT(),He=ho==="development",hT=ho==="production";He&&(console.log("Environment:",ho),console.log("Config:",uT));const dT={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_URL:"https://api.blindtab.app/api",VITE_APP_ENV:"production",VITE_ENABLE_ANALYTICS:"true",VITE_ENABLE_DEBUG_TOOLS:"false",VITE_FIREBASE_API_KEY:"AIzaSyAtDg3VWHMBGepQ3Cu-G6A_9_CXGKNlPxE",VITE_FIREBASE_APP_ID:"1:205665942654:web:a23c572fb20d4ed14eec2f",VITE_FIREBASE_AUTH_DOMAIN:"blindtab-db.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"205665942654",VITE_FIREBASE_PROJECT_ID:"blindtab-db",VITE_FIREBASE_STORAGE_BUCKET:"blindtab-db.appspot.com",VITE_LOG_LEVEL:"error"},qe={SONGS:"songs",TAGS:"tags",CONFIG:"config",USER_SONGS:"user_songs"},fT=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"],Uh=fT.filter(r=>!dT[r]);if(Uh.length>0)throw new Error(`Missing required Firebase configuration: ${Uh.join(", ")}`);const ds={apiKey:"AIzaSyAtDg3VWHMBGepQ3Cu-G6A_9_CXGKNlPxE",authDomain:"blindtab-db.firebaseapp.com",projectId:"blindtab-db",storageBucket:"blindtab-db.appspot.com",messagingSenderId:"205665942654",appId:"1:205665942654:web:a23c572fb20d4ed14eec2f"},Gl=window.location.hostname.includes("-projects.vercel.app")||window.location.hostname.includes("-staging.vercel.app")||window.location.hostname.includes("-preview.vercel.app"),Kl=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",_g=["austen.crowder@gmail.com"];console.log("[Firebase] Configuration:",{authDomain:ds.authDomain,projectId:ds.projectId,storageBucket:ds.storageBucket,environment:ho,currentDomain:window.location.hostname,currentOrigin:window.location.origin,currentPath:window.location.pathname,isPreviewDeployment:Gl,isLocalDevelopment:Kl,isDev:He,usingEmulator:He&&!1,authorizedDevEmails:_g});const Wl=Sd(ds);Kl||(console.log("[Firebase] Exposing Firebase app to window for debugging"),window._firebase_app=Wl);const ke=Sp(Wl,{localCache:eE({tabManager:iE(),cacheSizeBytes:NI}),experimentalForceLongPolling:!0,ignoreUndefinedProperties:!0}),Jr=oT(Wl),pT=new lt,gT=async()=>{if(Kl||He)return!0;const r=Jr.currentUser;return r&&r.email?_g.includes(r.email):!1},mT=async()=>{try{console.log("[Firebase] Testing Firestore connection...");const r=Un(on(ke,"firebase_test"),Bn(1));return await an(r),console.log("[Firebase] Firestore connection test passed"),!0}catch(r){return console.error("[Firebase] Firestore connection test failed:",r),!1}};mT().then(r=>{r?(console.log("[Firebase] Firestore is ready to use"),OI(ke).then(()=>{console.log("[Firebase] Offline persistence enabled")}).catch(e=>{console.warn("[Firebase] Offline persistence could not be enabled:",e)})):console.warn("[Firebase] Firestore connection failed, check network and Firebase settings")});R.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  color: #e0e0e0;
  font-family: monospace;
`;R.h3`
  margin-top: 0;
  margin-bottom: 12px;
  color: #61dafb;
`;R.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;R.button`
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
`;R.div`
  margin-top: 12px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${r=>r.$type==="success"?"#10893e33":r.$type==="error"?"#d1314733":"#0078d433"};
  border-left: 4px solid ${r=>r.$type==="success"?"#10893e":r.$type==="error"?"#d13147":"#0078d4"};
`;R.div`
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: #2d2d2d;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;R.button`
  background-color: #d13147;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #a82636;
  }
`;const yg=N.createContext(null),fo=()=>{const r=N.useContext(yg);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r};function _T({children:r}){const[e,t]=N.useState(null),[n,i]=N.useState(!0),[s,o]=N.useState(null);N.useEffect(()=>{const p=HE(Jr,y=>{t(y),i(!1)},y=>{console.error("[Auth] Auth state change error:",y),o(y),i(!1)});return()=>p()},[]);const l=async()=>{try{return(await gb(Jr,pT)).user}catch(p){throw console.error("[Auth] Google sign-in error:",p),p.code==="auth/unauthorized-domain"&&(console.warn("[Auth] This domain is not authorized in Firebase. Add it in the Firebase Console -> Authentication -> Sign-in method -> Authorized domains"),console.warn("[Auth] Current domain:",window.location.hostname),window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?console.info("[Auth] For local development, please use the Firebase emulator with VITE_USE_FIREBASE_EMULATOR=true"):(window.location.hostname.includes("-projects.vercel.app")||window.location.hostname.includes("-staging.vercel.app")||window.location.hostname.includes("-preview.vercel.app"))&&(console.info("[Auth] For preview deployments, please add this domain to Firebase authorized domains list"),console.info("[Auth] Or use the production domain that is already authorized"))),p}},f={user:e,loading:n,error:s,signIn:async()=>{try{return await l()}catch(p){throw o(p instanceof Error?p:new Error("Failed to sign in")),p}},logout:async()=>{try{await QE(Jr)}catch(p){throw o(p instanceof Error?p:new Error("Failed to sign out")),p}}};return m.jsx(yg.Provider,{value:f,children:r})}async function yT(r,e){try{const t=ht(ke,qe.USER_SONGS,r);(await wi(t)).exists()?await ao(t,{[`songs.${e}`]:{songId:e,addedAt:new Date,playCount:0},updatedAt:new Date}):await Vl(t,{userId:r,songs:{[e]:{songId:e,addedAt:new Date,playCount:0}},createdAt:new Date,updatedAt:new Date}),console.log(`[UserSongs] Added song ${e} to user ${r}'s collection`)}catch(t){throw console.error("[UserSongs] Error adding song to user collection:",t),t}}async function vT(r,e){try{const t=ht(ke,qe.USER_SONGS,r),n=await wi(t);if(!n.exists()){console.warn(`[UserSongs] User ${r} does not have a song collection`);return}const i=n.data();if(!i.songs||!i.songs[e]){console.warn(`[UserSongs] Song ${e} not found in user ${r}'s collection`);return}await ao(t,{[`songs.${e}`]:sE(),updatedAt:new Date}),console.log(`[UserSongs] Removed song ${e} from user ${r}'s collection`)}catch(t){throw console.error("[UserSongs] Error removing song from user collection:",t),t}}async function wT(r){try{const e=ht(ke,qe.USER_SONGS,r),t=await wi(e);return t.exists()?{id:t.id,...t.data()}:null}catch(e){throw console.error("[UserSongs] Error getting user song collection:",e),e}}async function IT(r,e){try{const t=ht(ke,qe.USER_SONGS,r),n=await wi(t);if(!n.exists()){console.warn(`[UserSongs] User ${r} does not have a song collection`);return}const i=n.data();if(!i.songs||!i.songs[e]){console.warn(`[UserSongs] Song ${e} not found in user ${r}'s collection`);return}const s={...i.songs[e],playCount:(i.songs[e].playCount||0)+1,lastPlayedAt:new Date};await ao(t,{[`songs.${e}`]:s,updatedAt:new Date}),console.log(`[UserSongs] Updated play stats for song ${e} in user ${r}'s collection`)}catch(t){throw console.error("[UserSongs] Error updating song play stats:",t),t}}const Ls=[{id:"mock-song-1",title:"Twinkle Twinkle Little Star",artist:"Traditional",notes:"C C G G A A G F F E E D D C",difficulty:"beginner",tags:["children","classic","beginner"],lyrics:[{line:"Twinkle twinkle little star",chords:"C        G        C",position:0},{line:"How I wonder what you are",chords:"F        C        G",position:0},{line:"Up above the world so high",chords:"C        G        C",position:0},{line:"Like a diamond in the sky",chords:"F        C        G",position:0},{line:"Twinkle twinkle little star",chords:"C        G        C",position:0},{line:"How I wonder what you are",chords:"F        C        G",position:0}],createdAt:new Date,updatedAt:new Date,playCount:42,lastPlayed:new Date},{id:"mock-song-2",title:"Happy Birthday",artist:"Traditional",notes:"C C D C F E C C D C G F",difficulty:"beginner",tags:["celebration","classic","beginner"],lyrics:[{line:"Happy birthday to you",chords:"C C D C F E",position:0},{line:"Happy birthday to you",chords:"C C D C G F",position:0},{line:"Happy birthday dear friend",chords:"C C C A F E D",position:0},{line:"Happy birthday to you",chords:"B B A F G F",position:0}],createdAt:new Date,updatedAt:new Date,playCount:28,lastPlayed:new Date},{id:"mock-song-3",title:"Jingle Bells",artist:"James Lord Pierpont",notes:"E E E E E E E G C D E F F F F F E E E E D D E D G",difficulty:"intermediate",tags:["holiday","christmas","intermediate"],lyrics:[{line:"Dashing through the snow",chords:"E        A        E",position:0},{line:"In a one-horse open sleigh",chords:"B7       E        B7",position:0},{line:"O'er the fields we go",chords:"E        A        E",position:0},{line:"Laughing all the way",chords:"B7       E        B7",position:0},{line:"Bells on bobtails ring",chords:"E        A        E",position:0},{line:"Making spirits bright",chords:"B7       E        B7",position:0},{line:"What fun it is to ride and sing",chords:"E        A        E",position:0},{line:"A sleighing song tonight",chords:"B7       E        B7",position:0},{line:"Jingle bells, jingle bells",chords:"E        E        E E",position:0},{line:"Jingle all the way",chords:"E        A        B7",position:0},{line:"Oh what fun it is to ride",chords:"E        A        E",position:0},{line:"In a one-horse open sleigh, hey!",chords:"B7       E        B7 E",position:0}],createdAt:new Date,updatedAt:new Date,playCount:15,lastPlayed:new Date},{id:"mock-song-4",title:"Ode to Joy",artist:"Ludwig van Beethoven",notes:"E E F G G F E D C C D E E D D",difficulty:"intermediate",tags:["classical","beethoven","intermediate"],lyrics:[{line:"Joyful, joyful, we adore Thee",chords:"E E F G G F E D",position:0},{line:"God of glory, Lord of love",chords:"C C D E E D D",position:0},{line:"Hearts unfold like flowers before Thee",chords:"E E F G G F E D",position:0},{line:"Opening to the sun above",chords:"C C D E D C C",position:0}],createdAt:new Date,updatedAt:new Date,playCount:33,lastPlayed:new Date},{id:"mock-song-5",title:"Für Elise",artist:"Ludwig van Beethoven",notes:"E D# E D# E B D C A C E A B E G# B C",difficulty:"advanced",tags:["classical","beethoven","advanced"],lyrics:[{line:"First phrase",chords:"E D# E D# E B D C A",position:0},{line:"Second phrase",chords:"C E A B E G# B C",position:0},{line:"Third phrase",chords:"E D# E D# E B D C A",position:0},{line:"Fourth phrase",chords:"C E A B E C B A",position:0}],createdAt:new Date,updatedAt:new Date,playCount:19,lastPlayed:new Date}],ET={songs:{"mock-song-1":{addedAt:new Date},"mock-song-3":{addedAt:new Date},"mock-song-5":{addedAt:new Date}}},Xo=()=>Ls,Zo=()=>{const r=Object.keys(ET.songs);return Ls.filter(e=>r.includes(e.id))},vg=N.createContext(null),bT=()=>{const r=N.useContext(vg);if(!r)throw new Error("useSongs must be used within a SongProvider");return r},En=bT,TT=({children:r})=>{const[e,t]=N.useState([]),[n,i]=N.useState([]),[s,o]=N.useState(null),[l,c]=N.useState(!0),[h,f]=N.useState(null),[p]=N.useState(Gl&&!0),{user:y}=fo(),b=async()=>{try{c(!0),f(null);let I=[];if(He&&p){console.log("[SongContext] Using mock data (development mode)"),I=Xo(),t(I),i(y?Zo():[]),c(!1);return}console.log("[SongContext] Using standard Firestore SDK");try{const _=on(ke,qe.SONGS);I=(await an(_)).docs.map(E=>({id:E.id,...E.data()}))}catch(_){console.error("[SongContext] Firestore SDK failed:",_),He&&(console.log("[SongContext] Falling back to mock data"),I=Xo())}if(t(I),y)try{const _=await wT(y.uid);if(_){const w=Object.keys(_.songs),E=I.filter(T=>w.includes(T.id));i(E)}else i([])}catch(_){console.error("Error fetching user songs:",_),i(He&&p?Zo():[])}else i([])}catch(I){console.error("Error fetching songs:",I),f(I instanceof Error?I:new Error("Failed to fetch songs")),He?(console.log("[SongContext] Using mock data after error"),t(Xo()),i(y?Zo():[])):(t([]),i([]))}finally{c(!1)}},k=async I=>{try{const _=`song_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,w={...I,id:_,createdAt:new Date,updatedAt:new Date},{id:E,...T}=w;return await Vl(ht(ke,qe.SONGS,E),T),console.log("Song added successfully"),await b(),_}catch(_){throw console.error("Error adding song:",_),_}},P=async(I,_)=>{try{const w=await wi(ht(ke,qe.SONGS,I));if(!w.exists())throw new Error(`Song with ID ${I} not found`);const T={...{id:w.id,...w.data()},..._,updatedAt:new Date},{id:x,...v}=T;await ao(ht(ke,qe.SONGS,I),v),await b()}catch(w){throw console.error("Error updating song:",w),w}},C=async I=>{try{await YI(ht(ke,qe.SONGS,I)),await b()}catch(_){throw console.error("Error deleting song:",_),_}},M=async I=>{if(!y)throw new Error("User must be authenticated to select songs");await yT(y.uid,I),await b()},F=async I=>{if(!y)throw new Error("User must be authenticated to unselect songs");await vT(y.uid,I),await b()},O=I=>n.some(_=>_.id===I),$=async I=>{y&&await IT(y.uid,I)},q=async I=>{const _=e.find(w=>w.id===I);if(!_)throw new Error(`Song with ID ${I} not found`);if(o(_),y)try{await $(I)}catch(w){console.error("Error updating play stats:",w)}return _};N.useEffect(()=>{b()},[y]);const z={addSongToCollection:M,removeSongFromCollection:F,createNewSong:k,refreshSongList:b,deleteSongById:C,checkDatabaseConnection:async()=>!0};return m.jsx(vg.Provider,{value:{songs:e,userSongs:n,currentSong:s,isLoading:l,error:h,isPreviewMode:p,refreshSongs:b,addSong:k,updateSong:P,deleteSong:C,selectSong:M,unselectSong:F,setCurrentSong:o,isUserSong:O,updatePlayStats:$,playSong:q,...z},children:r})};R.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  color: #e0e0e0;
  font-family: monospace;
`;R.h3`
  margin-top: 0;
  margin-bottom: 12px;
  color: #61dafb;
`;R.div`
  display: flex;
  margin-bottom: 8px;
`;R.div`
  width: 180px;
  color: #9cdcfe;
`;R.div`
  flex: 1;
  word-break: break-all;
`;const xT=R.div`
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
`,ST=R.div`
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`,AT=R.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,kn=R.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Dn=R.label`
  font-weight: 600;
  color: var(--text-primary);
`,Nr=R.input`
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-secondary);
  color: var(--text-primary);
`,RT=R.textarea`
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  min-height: 200px;
  font-family: monospace;
`,CT=R.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,Bh=R.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${r=>r.$variant==="primary"?"var(--primary)":r.$variant==="danger"?"var(--error)":"var(--bg-secondary)"};
  color: ${r=>r.$variant?"white":"var(--text-primary)"};

  &:hover {
    opacity: 0.9;
  }
`;function wg({isOpen:r,onClose:e,songId:t,isNewSong:n=!1}){const{songs:i,createNewSong:s,updateSong:o}=En(),[l,c]=N.useState(""),[h,f]=N.useState(""),[p,y]=N.useState(""),[b,k]=N.useState(""),[P,C]=N.useState(""),[M,F]=N.useState(""),[O,$]=N.useState(!1),[q,z]=N.useState(null);N.useEffect(()=>{var w;if(r&&t&&!n){const E=i.find(T=>T.id===t);if(E){c(E.title),f(E.artist),y(E.key||""),k(((w=E.tempo)==null?void 0:w.toString())||""),C(E.timeSignature||"");const T=E.lyrics.sort((x,v)=>x.position-v.position).map(x=>x.chords?`[${x.chords}] ${x.line}`:x.line).join(`
`);F(T)}}else c(""),f(""),y(""),k(""),C(""),F("")},[r,t,n,i]);const I=w=>w.split(`
`).map((E,T)=>{const x=E.match(/^\[(.*?)\]/);return x?{line:E.replace(/^\[(.*?)\]\s*/,"").trim(),chords:x[1].trim(),position:T}:{line:E.trim(),chords:"",position:T}}),_=async w=>{w.preventDefault(),$(!0),z(null);try{const E={title:l,artist:h,key:p||null,tempo:b?parseInt(b,10):null,timeSignature:P||null,lyrics:I(M)};n?await s(E):t&&await o(t,E),e()}catch(E){console.error("Error saving song:",E),E instanceof Error&&E.message.includes("preview mode")?z("This feature is disabled in preview mode. Please use the full app to save songs."):z(E instanceof Error?E.message:"Failed to save song")}finally{$(!1)}};return r?m.jsx(xT,{onClick:e,children:m.jsx(ST,{onClick:w=>w.stopPropagation(),children:m.jsxs(AT,{onSubmit:_,children:[m.jsxs(kn,{children:[m.jsx(Dn,{htmlFor:"title",children:"Title"}),m.jsx(Nr,{id:"title",value:l,onChange:w=>c(w.target.value),placeholder:"Enter song title",required:!0})]}),m.jsxs(kn,{children:[m.jsx(Dn,{htmlFor:"artist",children:"Artist"}),m.jsx(Nr,{id:"artist",value:h,onChange:w=>f(w.target.value),placeholder:"Enter artist name",required:!0})]}),m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[m.jsxs(kn,{children:[m.jsx(Dn,{htmlFor:"key",children:"Key"}),m.jsx(Nr,{id:"key",value:p,onChange:w=>y(w.target.value),placeholder:"e.g., C"})]}),m.jsxs(kn,{children:[m.jsx(Dn,{htmlFor:"tempo",children:"Tempo (BPM)"}),m.jsx(Nr,{id:"tempo",type:"number",value:b,onChange:w=>k(w.target.value),placeholder:"e.g., 120"})]}),m.jsxs(kn,{children:[m.jsx(Dn,{htmlFor:"timeSignature",children:"Time Signature"}),m.jsx(Nr,{id:"timeSignature",value:P,onChange:w=>C(w.target.value),placeholder:"e.g., 4/4"})]})]}),m.jsxs(kn,{children:[m.jsx(Dn,{htmlFor:"lyrics",children:"Lyrics & Chords"}),m.jsx(RT,{id:"lyrics",value:M,onChange:w=>F(w.target.value),placeholder:`Enter lyrics with chords in brackets before words, e.g:
[Am] Here comes the sun
[C] Little darling
[G] It's been a long cold lonely winter`,required:!0})]}),q&&m.jsx("div",{style:{color:"var(--error)",marginTop:"1rem"},children:q.toString()}),m.jsxs(CT,{children:[m.jsx(Bh,{type:"button",onClick:e,children:"Cancel"}),m.jsx(Bh,{type:"submit",$variant:"primary",disabled:O,children:O?"Saving...":n?"Create Song":"Update Song"})]})]})})}):null}R.div`
  padding: 20px;
`;R.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;R.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;R.h3`
  margin: 0 0 8px 0;
  color: #333;
`;R.p`
  margin: 0 0 16px 0;
  color: #666;
`;R.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;const PT=R.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${r=>r.variant==="danger"?"#ff4444":r.variant==="primary"?"#007AFF":"#f0f0f0"};
  color: ${r=>r.variant==="danger"||r.variant==="primary"?"white":"black"};
  
  &:hover {
    opacity: 0.9;
  }
`;R(PT)`
  margin-bottom: 20px;
`;R.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  color: #e0e0e0;
  font-family: monospace;
`;R.h3`
  margin-top: 0;
  margin-bottom: 12px;
  color: #61dafb;
`;R.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`;R.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;R.label`
  font-size: 14px;
  color: #9cdcfe;
`;R.input`
  background-color: #2d2d2d;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 8px;
  color: white;
  font-family: monospace;
`;R.button`
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
`;R.div`
  padding: 8px;
  color: #d32f2f;
  background-color: #ffebee;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 14px;
`;R.div`
  padding: 8px;
  color: #2e7d32;
  background-color: #e8f5e9;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 14px;
`;R.div`
  background-color: #2d2d2d;
  border-radius: 4px;
  padding: 12px;
  margin-top: 16px;
`;const Ig=N.createContext(void 0),kT=({children:r})=>{const[e,t]=N.useState(()=>{const i=localStorage.getItem("theme"),s=window.matchMedia("(prefers-color-scheme: dark)").matches;return i==="dark"||!i&&s});N.useEffect(()=>{e?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme")):(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme")),localStorage.setItem("theme",e?"dark":"light")},[e]);const n=()=>{t(i=>!i)};return m.jsx(Ig.Provider,{value:{isDarkTheme:e,toggleTheme:n},children:r})},Eg=()=>{const r=N.useContext(Ig);if(r===void 0)throw new Error("useTheme must be used within a ThemeProvider");return r},bg=N.createContext(void 0),DT=({children:r})=>{const[e,t]=N.useState(()=>{const p=localStorage.getItem("fontSize");return p?parseInt(p,10):24}),[n,i]=N.useState(()=>{const p=localStorage.getItem("linesToDisplay");return p?parseInt(p,10):2}),[s,o]=N.useState(()=>{const p=localStorage.getItem("autoResize");return p?p==="true":!0}),[l,c]=N.useState(()=>{const p=localStorage.getItem("enableAnimations");return p?p==="true":!0});N.useEffect(()=>{localStorage.setItem("fontSize",e.toString())},[e]),N.useEffect(()=>{localStorage.setItem("linesToDisplay",n.toString())},[n]),N.useEffect(()=>{localStorage.setItem("autoResize",s.toString())},[s]),N.useEffect(()=>{localStorage.setItem("enableAnimations",l.toString())},[l]);const h=()=>{o(p=>!p)},f=()=>{c(p=>!p)};return m.jsx(bg.Provider,{value:{fontSize:e,linesToDisplay:n,autoResize:s,enableAnimations:l,setFontSize:t,setLinesToDisplay:i,toggleAutoResize:h,toggleAnimations:f},children:r})},po=()=>{const r=N.useContext(bg);if(r===void 0)throw new Error("useDisplay must be used within a DisplayProvider");return r},VT=(r,e={})=>{const{globalKeys:t=!1,preventDefaultKeys:n=[]}=e,i=N.useCallback(s=>{if(!t){const h=s.target,f=h.tagName.toLowerCase();if(f==="input"||f==="textarea"||h.isContentEditable)return}const o=s.key.toLowerCase();let l=o;s.ctrlKey&&(l=`ctrl+${l}`),s.altKey&&(l=`alt+${l}`),s.shiftKey&&(l=`shift+${l}`),s.metaKey&&(l=`meta+${l}`);const c=r[l]||r[o];c&&((n.includes(o)||n.includes(l))&&s.preventDefault(),c(s))},[r,t,n]);return N.useEffect(()=>(document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}),[i]),null},pe=r=>{let e=document.getElementById("aria-live-announcer");e||(e=document.createElement("div"),e.id="aria-live-announcer",e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="sr-only",document.body.appendChild(e)),e.textContent=r,setTimeout(()=>{e.textContent=""},1e3)},NT=R.button`
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
`,OT=({isDarkTheme:r,toggleTheme:e,className:t})=>{const n=()=>{e(),pe(`Switched to ${r?"light":"dark"} theme`)};return m.jsx(NT,{onClick:n,"aria-label":r?"Switch to light theme":"Switch to dark theme",title:`${r?"Light":"Dark"} mode (D)`,className:t,children:r?m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m.jsx("path",{fill:"currentColor",d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"})}):m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m.jsx("path",{fill:"currentColor",d:"M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"})})})},MT=R.div`
  position: relative;
  margin-left: auto;
`,LT=R.button`
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
`,FT=R.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 200px;
  z-index: 1000;
`,$h=R.button`
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
`,jT=R.div`
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
`,UT=R.div`
  padding: 8px 16px;
  color: #d32f2f;
  font-size: 12px;
  background-color: #ffebee;
  margin: 8px;
  border-radius: 4px;
`,BT=()=>{const{user:r,signIn:e,logout:t,error:n}=fo(),[i,s]=N.useState(!1),[o,l]=N.useState(null),c=async()=>{try{l(null),await e(),s(!1)}catch(f){console.error("Failed to sign in:",f),f instanceof Error&&f.message.includes("auth/unauthorized-domain")?l("This domain is not authorized. Please contact the administrator."):l("Failed to sign in. Please try again.")}},h=async()=>{try{await t(),s(!1)}catch(f){console.error("Failed to sign out:",f)}};return m.jsxs(MT,{children:[m.jsx(LT,{onClick:()=>s(!i),$isOpen:i,title:r?"Profile menu":"Sign in",children:r!=null&&r.photoURL?m.jsx("img",{src:r.photoURL,alt:"Profile"}):"👤"}),i&&m.jsx(FT,{children:r?m.jsxs(m.Fragment,{children:[m.jsxs(jT,{children:[m.jsx("div",{className:"name",children:r.displayName}),m.jsx("div",{className:"email",children:r.email})]}),m.jsx($h,{onClick:h,children:"🚪 Sign out"})]}):m.jsxs(m.Fragment,{children:[m.jsx($h,{onClick:c,children:"🔑 Sign in with Google"}),o&&m.jsx(UT,{children:o})]})})]})},$T=R.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
`,zT=R.div`
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
`,qT=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  flex: 1;
  overflow: hidden;
  text-align: center;
`,GT=R.div`
  font-weight: bold;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,KT=R.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,WT=R.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,ea=R.button`
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
`,HT=({onOpenAccessibilityMenu:r,onOpenSongLibrary:e,onStartTour:t})=>{const{isDarkTheme:n,toggleTheme:i}=Eg(),{songs:s}=En(),o=s.current,l=o?s.loaded[o]:null,c=(l==null?void 0:l.songInfo.title)||"",h=(l==null?void 0:l.songInfo.artist)||"",f=(l==null?void 0:l.songInfo.key)||"",p=(l==null?void 0:l.songInfo.tempo)||"",y=[];f&&y.push(`Key: ${f}`),p&&y.push(`Tempo: ${p}`);const b=y.join(" · "),k=()=>{r&&(r(),pe("Accessibility menu opened"))},P=()=>{e&&(e(),pe("Song library opened"))},C=()=>{t&&(t(),pe("Starting app tour"))};return m.jsxs($T,{children:[m.jsx(zT,{children:m.jsxs("a",{href:"/","aria-label":"BlindTab Home",children:[m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m.jsx("path",{fill:"currentColor",d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"})}),"BlindTab"]})}),m.jsx(qT,{children:c&&m.jsxs(m.Fragment,{children:[m.jsx(GT,{children:c}),m.jsx(KT,{children:h}),b&&m.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:b})]})}),m.jsxs(WT,{children:[m.jsx(ea,{onClick:P,"aria-label":"Open song library",title:"Open song library",className:"song-library-button",children:m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m.jsx("path",{fill:"currentColor",d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"})})}),m.jsx(ea,{onClick:k,"aria-label":"Open accessibility menu",title:"Open accessibility menu",className:"accessibility-button",children:m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m.jsx("path",{fill:"currentColor",d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"})})}),m.jsx(ea,{onClick:C,"aria-label":"Start app tour",title:"Start app tour",className:"help-button",children:m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m.jsx("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),m.jsx(OT,{isDarkTheme:n,toggleTheme:i,className:"theme-toggle"}),m.jsx(BT,{})]})]})},QT=(r,e={})=>{const{fontSize:t,setFontSize:n,linesToDisplay:i,autoResize:s}=po(),o=N.useRef(null),[l,c]=N.useState(t),{minFontSize:h=12,maxFontSize:f=72,step:p=.5,lineHeight:y=1.5}=e;return N.useEffect(()=>{if(!s||!o.current)return;const b=o.current,k=()=>{if(!b)return;const M=b.clientHeight,F=i||r.length,O=M*.95;let $=f,q=h;const z=document.createElement("div");for(z.style.position="absolute",z.style.visibility="hidden",z.style.whiteSpace="pre-wrap",z.style.width=`${b.clientWidth}px`,document.body.appendChild(z);$>=h;){if(z.style.fontSize=`${$}px`,z.style.lineHeight=`${y}`,z.textContent=r.slice(0,F).join(`
`),z.offsetHeight<=O){q=$;break}$-=p}return document.body.removeChild(z),Math.max(h,q)},P=()=>{const M=k();M&&M!==l&&(c(M),s&&n(M))};P();const C=new ResizeObserver(P);return C.observe(b),()=>{C.disconnect()}},[s,r,i,h,f,p,y,l,n]),{containerRef:o,calculatedFontSize:l}},zh=R.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: hidden;
  position: relative;
`,qh=R.div`
  width: 100%;
  max-width: 1200px;
  font-size: ${r=>r.$fontSize}px;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow: hidden;
  position: relative;
`,JT=R.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,YT=R.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5%;
  transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateY(${r=>r.$animationOffset});
`,Gh=R.div`
  position: relative;
  padding-top: ${r=>r.$hasChords?"1.5em":"0"};
  margin-bottom: 0.5em;
  text-align: left;
  font-family: 'Courier New', monospace;
  width: 100%;
`,Kh=R.div`
  position: relative;
  white-space: pre;
  display: inline-block;
  text-align: left;
`,XT=R.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.5em;
  pointer-events: none;
  text-align: left;
`,ZT=R.span`
  position: absolute;
  top: 0;
  color: var(--primary-color);
  font-weight: bold;
  font-family: 'Courier New', monospace;
  white-space: pre;
`,e0=R.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 0.7em;
  color: var(--text-secondary);
  opacity: 0.7;
`,t0=({songData:r,currentLineIndex:e=0})=>{const{fontSize:t,linesToDisplay:n,autoResize:i,enableAnimations:s}=po(),[o,l]=N.useState([]),[c,h]=N.useState("0"),[f,p]=N.useState(e),y=N.useRef(null),b=N.useRef(0),k=N.useRef(null),P=(r==null?void 0:r.lyrics)||[],C=P.map(O=>O.line||""),{calculatedFontSize:M}=QT(C,{minFontSize:16,maxFontSize:72});N.useEffect(()=>()=>{y.current&&clearTimeout(y.current)},[]),N.useEffect(()=>{const O=i?M:t;b.current=O*1.5},[t,M,i]),N.useEffect(()=>{if(!r||!P.length){l([]);return}if(!s||e===f){const $=Math.max(0,e),q=Math.min(P.length,$+n);l(P.slice($,q)),h("0"),p(e);return}if(e>f){const $=Math.max(0,e-1),q=Math.min(P.length,e+n+1);l(P.slice($,q)),h(`${b.current}px`);const z=requestAnimationFrame(()=>{const I=setTimeout(()=>{h("0")},30);return()=>clearTimeout(I)});return()=>cancelAnimationFrame(z)}else{const $=Math.max(0,e-1),q=Math.min(P.length,e+n);l(P.slice($,q)),h(`-${b.current}px`);const z=requestAnimationFrame(()=>{const I=setTimeout(()=>{h("0")},30);return()=>clearTimeout(I)});return()=>cancelAnimationFrame(z)}},[r,e,n,s,P.length]);const F=(O,$)=>{let q=[];O.chords&&(typeof O.chords=="string"?q=[{text:O.chords,position:O.position||0}]:Array.isArray(O.chords)&&(q=O.chords.map(I=>({text:I,position:O.position||0}))));const z=O.line||"";return q.length?m.jsxs(Gh,{$hasChords:!0,children:[m.jsx(XT,{children:q.map((I,_)=>m.jsx(ZT,{style:{left:`${I.position}ch`},children:I.text},_))}),m.jsx(Kh,{children:z})]},$):m.jsx(Gh,{$hasChords:!1,children:m.jsx(Kh,{children:z})},$)};return r?m.jsx(zh,{ref:k,children:m.jsxs(qh,{$fontSize:i?M:t,children:[m.jsx(JT,{children:m.jsx(YT,{$animationOffset:c,children:o.map((O,$)=>F(O,$))})}),P.length>0&&m.jsxs(e0,{children:[e+1,"/",P.length]})]})}):m.jsx(zh,{ref:k,children:m.jsx(qh,{$fontSize:i?M:t,children:m.jsxs("div",{style:{textAlign:"center"},children:[m.jsx("p",{children:"No song loaded. Please select a song to display."}),m.jsx("p",{children:"Click the song library button in the header or press 'O' to open the song library."})]})})})},n0=R.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`,r0=R.input`
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
`,i0=R.span`
  min-width: 3rem;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-secondary);
`,Tg=({min:r,max:e,value:t,onChange:n,disabled:i=!1,className:s,ariaLabel:o="Slider",showValue:l=!0,valueFormat:c=(h,f)=>`${h}/${f}`})=>{const[h,f]=N.useState(t),p=N.useRef(!1);N.useEffect(()=>{p.current||f(t)},[t]);const y=C=>{const M=parseInt(C.target.value,10);f(M)},b=()=>{p.current=!0},k=()=>{p.current=!1,h!==t&&(n(h),pe(`${o} set to ${h}`))},P=C=>{(C.key==="ArrowLeft"||C.key==="ArrowRight"||C.key==="ArrowUp"||C.key==="ArrowDown")&&(n(h),pe(`${o} set to ${h}`))};return m.jsxs(n0,{className:s,children:[m.jsx(r0,{type:"range",min:r,max:e,value:h,onChange:y,onMouseDown:b,onMouseUp:k,onTouchStart:b,onTouchEnd:k,onKeyUp:P,disabled:i,"aria-label":o,"aria-valuemin":r,"aria-valuemax":e,"aria-valuenow":h}),l&&m.jsx(i0,{children:c(h,e)})]})},s0=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  position: relative;
  z-index: 10;
`,Wh=R.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Br=R.button`
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
`,o0=R(Br)`
  background-color: ${r=>r.$active?"var(--primary-color)":"transparent"};
  color: ${r=>r.$active?"white":"var(--text-primary)"};
  
  &:hover, &:focus {
    background-color: ${r=>r.$active?"var(--primary-hover-color)":"var(--bg-hover)"};
  }
  
  animation: ${r=>r.$active?"pulse 2s infinite":"none"};
`,a0=R.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 180px;
`,l0=R(Tg)`
  width: 100%;
`,c0=R.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,u0=R.span`
  min-width: 2rem;
  text-align: center;
`,h0=R(Tg)`
  width: 200px;
  margin: 0 0.5rem;
`,d0=({onPrevious:r,onNext:e,hasPrevious:t,hasNext:n,currentLineIndex:i,totalLines:s,onSliderChange:o})=>{const{fontSize:l,setFontSize:c,linesToDisplay:h,setLinesToDisplay:f,autoResize:p,toggleAutoResize:y}=po(),b=M=>{const F=Math.max(1,Math.min(10,h+M));f(F),pe(`Lines to display changed to ${F}`)},k=()=>{y(),pe(`Auto resize ${p?"disabled":"enabled"}`)},P=()=>{r&&t&&(r(),pe("Previous section"))},C=()=>{e&&n&&(e(),pe("Next section"))};return m.jsxs(s0,{className:"controls-panel",children:[m.jsxs(Wh,{children:[m.jsx(Br,{onClick:P,disabled:!t,"aria-label":"Previous section",title:"Previous section",className:"previous-button",children:m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m.jsx("path",{fill:"currentColor",d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),m.jsx(h0,{min:0,max:Math.max(0,s-1),value:i,onChange:o,disabled:s<=1,ariaLabel:"Song navigation",valueFormat:(M,F)=>`${M+1}/${F+1}`}),m.jsx(Br,{onClick:C,disabled:!n,"aria-label":"Next section",title:"Next section",className:"next-button",children:m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m.jsx("path",{fill:"currentColor",d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})})]}),m.jsxs(Wh,{children:[m.jsx(a0,{className:"font-size-controls",children:m.jsx(l0,{min:12,max:72,value:l,onChange:M=>{c(M),pe(`Font size changed to ${M} pixels`)},disabled:p,ariaLabel:"Font size",valueFormat:M=>`${M}px`})}),m.jsxs(c0,{className:"lines-controls",children:[m.jsx(Br,{onClick:()=>b(-1),"aria-label":"Decrease lines to display",title:"Decrease lines to display",disabled:h<=1,children:m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m.jsx("path",{fill:"currentColor",d:"M19 13H5v-2h14v2z"})})}),m.jsx(u0,{children:h}),m.jsx(Br,{onClick:()=>b(1),"aria-label":"Increase lines to display",title:"Increase lines to display",disabled:h>=10,children:m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m.jsx("path",{fill:"currentColor",d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})})})]}),m.jsx(o0,{onClick:k,$active:p,"aria-label":`${p?"Disable":"Enable"} auto resize`,title:`${p?"Disable":"Enable"} auto resize`,className:"auto-resize-button",children:m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m.jsx("path",{fill:"currentColor",d:"M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"})})})]})]})},f0=R.div`
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
`,p0=R.div`
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,g0=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
`,m0=R.h2`
  margin: 0;
  font-size: 1.25rem;
`,_0=R.button`
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
`,y0=R.div`
  padding: 1rem;
`,Ji=R.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Yi=R.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
`,Xi=R.p`
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
`,ta=R.label`
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
`,Hh=R.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Qh=R.input`
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
`,Jh=R.span`
  min-width: 40px;
  text-align: right;
`,v0=R.div`
  margin-top: 1rem;
`,w0=R.table`
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
`,Je=R.kbd`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  font-family: monospace;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`,I0=({isOpen:r,onClose:e})=>{const{fontSize:t,setFontSize:n,linesToDisplay:i,setLinesToDisplay:s,autoResize:o,toggleAutoResize:l,enableAnimations:c,toggleAnimations:h}=po(),{isDarkTheme:f,toggleTheme:p}=Eg();if(!r)return null;const y=M=>{const F=parseInt(M.target.value,10);n(F),pe(`Font size set to ${F} pixels`)},b=M=>{const F=parseInt(M.target.value,10);s(F),pe(`Lines to display set to ${F}`)},k=()=>{l(),pe(`Auto resize ${o?"disabled":"enabled"}`)},P=()=>{p(),pe(`${f?"Light":"Dark"} theme enabled`)},C=()=>{h(),pe(`Animations ${c?"disabled":"enabled"}`)};return m.jsx(f0,{onClick:e,children:m.jsxs(p0,{onClick:M=>M.stopPropagation(),role:"dialog","aria-labelledby":"accessibility-title","aria-modal":"true",children:[m.jsxs(g0,{children:[m.jsx(m0,{id:"accessibility-title",children:"Accessibility Settings"}),m.jsx(_0,{onClick:e,"aria-label":"Close accessibility settings",children:"×"})]}),m.jsxs(y0,{children:[m.jsxs(Ji,{children:[m.jsx(Yi,{children:"Display Settings"}),m.jsx(Xi,{children:"Adjust how the leadsheet is displayed"}),m.jsxs(Hh,{children:[m.jsx("label",{htmlFor:"font-size",children:"Font Size:"}),m.jsx(Qh,{type:"range",id:"font-size",min:"12",max:"72",value:t,onChange:y,disabled:o}),m.jsxs(Jh,{children:[t,"px"]})]}),m.jsxs(Hh,{children:[m.jsx("label",{htmlFor:"lines-display",children:"Lines to Display:"}),m.jsx(Qh,{type:"range",id:"lines-display",min:"1",max:"10",value:i,onChange:b}),m.jsx(Jh,{children:i})]}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[m.jsxs(ta,{children:[m.jsx("input",{type:"checkbox",checked:o,onChange:k,id:"auto-resize"}),m.jsx("span",{})]}),m.jsx("label",{htmlFor:"auto-resize",children:"Auto-resize text to fit screen"})]})]}),m.jsxs(Ji,{children:[m.jsx(Yi,{children:"Theme"}),m.jsx(Xi,{children:"Choose between light and dark theme"}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[m.jsxs(ta,{children:[m.jsx("input",{type:"checkbox",checked:f,onChange:P,id:"dark-theme"}),m.jsx("span",{})]}),m.jsx("label",{htmlFor:"dark-theme",children:"Dark Theme"})]})]}),m.jsxs(Ji,{children:[m.jsx(Yi,{children:"Scroll Animations"}),m.jsx(Xi,{children:"Enable smooth scrolling animations when navigating through songs. Disabling may improve performance and reduce motion for users sensitive to animations."}),m.jsxs(ta,{children:[m.jsx("input",{type:"checkbox",checked:c,onChange:C,"aria-label":"Toggle animations"}),m.jsx("span",{})]})]}),m.jsxs(Ji,{children:[m.jsx(Yi,{children:"Keyboard Shortcuts"}),m.jsx(Xi,{children:"Use these shortcuts for quick navigation"}),m.jsx(v0,{children:m.jsxs(w0,{children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Action"}),m.jsx("th",{children:"Shortcut"})]})}),m.jsxs("tbody",{children:[m.jsxs("tr",{children:[m.jsx("td",{children:"Next Section"}),m.jsxs("td",{children:[m.jsx(Je,{children:"→"})," or ",m.jsx(Je,{children:"Space"})]})]}),m.jsxs("tr",{children:[m.jsx("td",{children:"Previous Section"}),m.jsx("td",{children:m.jsx(Je,{children:"←"})})]}),m.jsxs("tr",{children:[m.jsx("td",{children:"Increase Font Size"}),m.jsxs("td",{children:[m.jsx(Je,{children:"+"})," or ",m.jsx(Je,{children:"="})]})]}),m.jsxs("tr",{children:[m.jsx("td",{children:"Decrease Font Size"}),m.jsx("td",{children:m.jsx(Je,{children:"-"})})]}),m.jsxs("tr",{children:[m.jsx("td",{children:"Toggle Auto-resize"}),m.jsx("td",{children:m.jsx(Je,{children:"A"})})]}),m.jsxs("tr",{children:[m.jsx("td",{children:"Toggle Dark Mode"}),m.jsx("td",{children:m.jsx(Je,{children:"D"})})]}),m.jsxs("tr",{children:[m.jsx("td",{children:"Open Song Library"}),m.jsx("td",{children:m.jsx(Je,{children:"O"})})]}),m.jsxs("tr",{children:[m.jsx("td",{children:"Open Song Manager"}),m.jsx("td",{children:m.jsx(Je,{children:"L"})})]}),m.jsxs("tr",{children:[m.jsx("td",{children:"Start App Tour"}),m.jsx("td",{children:m.jsx(Je,{children:"H"})})]})]})]})})]})]})]})})},E0=R.div`
  padding: 1rem;
  max-height: 70vh;
  overflow-y: auto;
`,b0=R.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,T0=R.div`
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
`,x0=R.div`
  flex: 1;
`,S0=R.h4`
  margin: 0;
  font-size: 1rem;
`,A0=R.p`
  margin: 0.25rem 0 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
`,R0=R.span`
  padding: 0.25rem 0.5rem;
  background: var(--primary);
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
`;function C0({onClose:r}){const{songs:e,userSongs:t,playSong:n}=En(),{user:i}=fo(),s=new Set(t.map(l=>l.id)),o=async l=>{await n(l.id),r()};return m.jsx(E0,{children:m.jsx(b0,{children:e.filter(l=>(l==null?void 0:l.title)&&(l==null?void 0:l.artist)).map(l=>m.jsxs(T0,{onClick:()=>o(l),children:[m.jsxs(x0,{children:[m.jsx(S0,{children:l.title}),m.jsx(A0,{children:l.artist})]}),i&&s.has(l.id)&&m.jsx(R0,{children:"In Collection"})]},l.id))})})}const na=R.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: auto;
`,P0=R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  overflow-y: auto;
`,k0=R.div`
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
`,D0=R.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,V0=R.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-primary);
`,N0=R.p`
  margin: 0;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-secondary);
`,O0=R.div`
  font-size: 0.8rem;
  color: var(--text-tertiary);
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,M0=R.span`
  background: var(--bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
`,L0=R.div`
  display: flex;
  gap: 8px;
  padding-left: 8px;
  border-left: 1px solid var(--border-color);
`,ra=R.button`
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
`,Hl=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
`,F0=R(Hl)`
  color: var(--error-color);
`,j0=R(Hl)`
  color: var(--text-secondary);
`,U0=R.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${r=>r.$variant==="danger"?"#ff4444":r.$variant==="primary"?"#007AFF":"#f0f0f0"};
  color: ${r=>r.$variant==="danger"||r.$variant==="primary"?"white":"black"};
  
  &:hover {
    opacity: 0.9;
  }
`,B0=R.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1rem;
  align-items: center;
`,Yh=R.button`
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
`,$0=R.button`
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
`,z0=()=>m.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[m.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),m.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),q0=({onSongLoad:r,onClose:e,searchTerm:t=""})=>{const{songs:n,userSongs:i,addSongToCollection:s,removeSongFromCollection:o,playSong:l,refreshSongs:c,deleteSong:h,isLoading:f,error:p}=En(),{user:y}=fo(),[b,k]=N.useState(null),[P,C]=N.useState(!1),[M,F]=N.useState(!1),[O,$]=nd.useState("all"),q=O==="all"?n:i;new Set(i.map(v=>v.id));const z=v=>{k(v.id),pe(`Selected song: ${v.title} by ${v.artist}`)},I=async v=>{await r(v.id),e&&e()},_=(v,_e)=>{_e.stopPropagation(),k(v.id),F(!1),C(!0)},w=async(v,_e)=>{if(_e.stopPropagation(),window.confirm(`Are you sure you want to delete "${v.title}" by ${v.artist}?`))try{await h(v.id),pe(`Song ${v.title} deleted successfully`)}catch($e){console.error("Error deleting song:",$e),$e instanceof Error&&$e.message.includes("preview mode")?console.warn("Song deletion disabled in preview mode"):pe(`Error deleting song: ${$e instanceof Error?$e.message:"Unknown error"}`)}},E=async()=>{C(!1),F(!1),await c(),pe("Song updated successfully")},T=()=>{k(null),F(!0),C(!0)},x=q.filter(v=>!(v!=null&&v.title)||!(v!=null&&v.artist)?!1:v.title.toLowerCase().includes(t.toLowerCase())||v.artist.toLowerCase().includes(t.toLowerCase()));return f&&!x.length?m.jsx(na,{children:m.jsx(Hl,{children:m.jsx("div",{children:"Loading songs..."})})}):p&&x.length===0?m.jsx(na,{children:m.jsxs(F0,{children:[m.jsx("div",{children:p.toString()}),m.jsx(U0,{onClick:c,$variant:"primary",children:"Retry"})]})}):m.jsxs(na,{children:[m.jsxs(B0,{children:[m.jsx(Yh,{$active:O==="all",onClick:()=>$("all"),"aria-selected":O==="all",role:"tab",children:"All Songs"}),m.jsx(Yh,{$active:O==="collection",onClick:()=>$("collection"),"aria-selected":O==="collection",role:"tab",disabled:!y,children:"My Collection"}),m.jsxs($0,{onClick:T,children:[m.jsx(z0,{})," New Song"]})]}),x.length===0?m.jsxs(j0,{children:[m.jsx("div",{children:"No songs found"}),m.jsx("div",{children:t?"Try a different search term":"Add some songs to get started"})]}):m.jsxs(m.Fragment,{children:[m.jsx(P0,{children:x.map(v=>m.jsxs(k0,{$isSelected:b===v.id,onClick:()=>z(v),children:[m.jsxs(D0,{children:[m.jsx(V0,{children:v.title}),m.jsx(N0,{children:v.artist}),v.tags&&v.tags.length>0&&m.jsx(O0,{children:v.tags.map((_e,$e)=>m.jsx(M0,{children:_e},$e))})]}),m.jsxs(L0,{children:[m.jsx(ra,{onClick:_e=>_(v,_e),title:"Edit song",children:m.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[m.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),m.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),m.jsx(ra,{$variant:"danger",onClick:_e=>w(v,_e),title:"Delete song",children:m.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[m.jsx("path",{d:"M3 6h18"}),m.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),m.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),m.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),m.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]})}),m.jsx(ra,{$variant:"primary",onClick:()=>I(v),title:"Load song",children:m.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[m.jsx("path",{d:"M5 12h14"}),m.jsx("path",{d:"m12 5 7 7-7 7"})]})})]})]},v.id))}),m.jsx(wg,{isOpen:P,onClose:E,songId:b,isNewSong:M})]})]})},G0=R.div`
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
`,K0=R.div`
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
`,W0=R.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  padding: 0.25rem 0.5rem;
  gap: 0.25rem;
  background: var(--bg-secondary);
  align-items: center;
`,Xh=R.button`
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
`,H0=R.input`
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
`,Zh=R.button`
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
`,Q0=R.button`
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
`,J0=R.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
`,Y0=({isOpen:r,onClose:e,onSongLoad:t})=>{const{isLoading:n,error:i,refreshSongs:s,checkDatabaseConnection:o}=En(),[l,c]=N.useState("all"),[h,f]=N.useState(""),[p,y]=N.useState(!1),b=()=>{y(!0)},k=async()=>{y(!1),await s(),pe("Song created successfully")};return r?m.jsx(G0,{onClick:e,children:m.jsxs(K0,{onClick:P=>P.stopPropagation(),children:[m.jsxs(W0,{children:[m.jsx(Xh,{$active:l==="all",onClick:()=>c("all"),children:"All Songs"}),m.jsx(Xh,{$active:l==="search",onClick:()=>c("search"),children:"Search"}),l==="search"&&m.jsx(H0,{type:"text",placeholder:"Search songs...",value:h,onChange:P=>f(P.target.value),autoFocus:!0}),m.jsx("div",{style:{flex:1}}),m.jsx(Zh,{onClick:b,children:"Add"}),m.jsx(Zh,{onClick:s,children:"Refresh"}),m.jsx(Q0,{onClick:e,"aria-label":"Close",children:"×"})]}),m.jsx(J0,{children:m.jsx(q0,{onSongLoad:t,onClose:e,searchTerm:l==="search"?h:""})}),m.jsx(wg,{isOpen:p,onClose:k,isNewSong:!0})]})}):null},X0=({tourId:r,autoStart:e=!0})=>{const[t,n]=N.useState(!1),[i,s]=N.useState(!1);return N.useEffect(()=>{const p=JSON.parse(localStorage.getItem("completedTours")||"{}")[r]===!0;s(p),e&&!p&&n(!0)},[r,e]),{isTourOpen:t,hasCompletedTour:i,startTour:()=>{n(!0)},closeTour:()=>{n(!1)},completeTour:()=>{n(!1),s(!0);const f=JSON.parse(localStorage.getItem("completedTours")||"{}");f[r]=!0,localStorage.setItem("completedTours",JSON.stringify(f))},resetTour:()=>{s(!1);const f=JSON.parse(localStorage.getItem("completedTours")||"{}");delete f[r],localStorage.setItem("completedTours",JSON.stringify(f))}}},Z0=r=>{switch(r){case"primary":return Ye`
        background-color: var(--primary-color);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--primary-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
        }
      `;case"secondary":return Ye`
        background-color: var(--bg-secondary);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
        &:hover:not(:disabled) {
          background-color: var(--bg-hover);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(221, 221, 221, 0.3);
        }
      `;case"success":return Ye`
        background-color: var(--success-color);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--success-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.3);
        }
      `;case"danger":return Ye`
        background-color: var(--danger-color);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--danger-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.3);
        }
      `;case"warning":return Ye`
        background-color: var(--warning-color);
        color: #212529;
        &:hover:not(:disabled) {
          background-color: var(--warning-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.3);
        }
      `;case"text":return Ye`
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
      `;default:return""}},ex=r=>{switch(r){case"small":return Ye`
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      `;case"medium":return Ye`
        padding: 0.5rem 1rem;
        font-size: 1rem;
      `;case"large":return Ye`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
      `;default:return""}},tx=R.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  
  ${r=>Z0(r.variant||"primary")}
  ${r=>ex(r.size||"medium")}
  
  ${r=>r.fullWidth&&Ye`
    width: 100%;
  `}
  
  ${r=>r.isActive&&Ye`
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
`,fs=({children:r,variant:e="primary",size:t="medium",fullWidth:n=!1,isActive:i=!1,...s})=>m.jsx(tx,{variant:e,size:t,fullWidth:n,isActive:i,...s,children:r});R.div`
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
`;R.div`
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
`;const nx=rd`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;R.div`
  display: inline-block;
  position: relative;
  width: ${r=>r.size}px;
  height: ${r=>r.size}px;
`;R.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${r=>r.size}px;
  height: ${r=>r.size}px;
  border: ${r=>Math.max(2,r.size/10)}px solid;
  border-radius: 50%;
  border-color: ${r=>r.color} transparent transparent transparent;
  animation: ${nx} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;R.div`
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
`;R.div`
  background-color: var(--bg-primary);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  width: ${r=>{switch(r.size){case"small":return"400px";case"medium":return"600px";case"large":return"800px";case"full":return"90vw";default:return"600px"}}};
  max-width: 90vw;
  animation: fadeIn 0.3s ease-out;
`;R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid var(--border-color);
`;R.h2`
  margin: 0;
  font-size: 1.25rem;
  color: var(--text-primary);
`;R.button`
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
`;R.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;
`;R.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid var(--border-color);
`;R.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: ${r=>r.fullWidth?"100%":"auto"};
`;R.label`
  font-size: 0.875rem;
  margin-bottom: 6px;
  color: var(--text-primary);
  font-weight: 500;
`;R.input`
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
`;R.span`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${r=>r.isError?"var(--error-color)":"var(--text-secondary)"};
`;R.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: ${r=>r.fullWidth?"100%":"auto"};
`;R.label`
  font-size: 0.875rem;
  margin-bottom: 6px;
  color: var(--text-primary);
  font-weight: 500;
`;R.textarea`
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
`;R.span`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${r=>r.isError?"var(--error-color)":"var(--text-secondary)"};
`;const xg=rd`
  from { opacity: 0; }
  to { opacity: 1; }
`,rx=R.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  pointer-events: none;
  animation: ${xg} 0.3s ease-out;
`,ix=R.div`
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
  animation: ${xg} 0.3s ease-out;
`,sx=R.div`
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
`,ox=R.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: var(--text-primary);
`,ax=R.p`
  margin: 0 0 16px 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
`,lx=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,cx=R.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`,ux=R.div`
  display: flex;
  gap: 8px;
`,hx=R.div`
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
`,dx=R(fs)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1002;
  pointer-events: auto;
`,fx=({steps:r,isOpen:e,onClose:t,onComplete:n})=>{const[i,s]=N.useState(0),[o,l]=N.useState({top:"50%",left:"50%",transform:"translate(-50%, -50%)"}),[c,h]=N.useState({top:0,left:0,width:0,height:0}),[f,p]=N.useState("bottom");if(N.useEffect(()=>{if(!e)return;const C=()=>{const M=r[i];if(!M)return;const F=document.querySelector(M.target);if(!F)return;const O=F.getBoundingClientRect(),$=M.position||"bottom";h({top:O.top,left:O.left,width:O.width,height:O.height});let q="0px",z="0px",I="none";const _=window.innerWidth,w=window.innerHeight,E=300,T=200;switch($){case"top":q=`${Math.max(T/2+10,O.top-20)}px`,z=`${O.left+O.width/2}px`,I="translate(-50%, -100%)";break;case"right":q=`${O.top+O.height/2}px`,z=`${Math.min(_-E-20,O.right+20)}px`,I="translateY(-50%)";break;case"bottom":q=`${Math.min(w-T-20,O.bottom+20)}px`,z=`${O.left+O.width/2}px`,I="translateX(-50%)";break;case"left":q=`${O.top+O.height/2}px`,z=`${Math.max(E/2+10,O.left-20)}px`,I="translate(-100%, -50%)";break}const x=parseFloat(z);x-E/2<20?z=`${E/2+20}px`:x+E/2>_-20&&(z=`${_-E/2-20}px`);const v=parseFloat(q);v-T/2<20?q=`${T/2+20}px`:v+T/2>w-20&&(q=`${w-T/2-20}px`),l({top:q,left:z,transform:I}),p($)};return C(),window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C)}},[e,i,r]),!e||!r.length)return null;const y=()=>{i<r.length-1?s(i+1):n()},b=()=>{i>0&&s(i-1)},k=()=>{n()},P=r[i];return m.jsxs(m.Fragment,{children:[m.jsx(rx,{}),m.jsx(hx,{position:c}),m.jsxs(ix,{position:o,children:[m.jsx(sx,{position:f}),m.jsx(ox,{children:P.title}),m.jsx(ax,{children:P.content}),m.jsxs(lx,{children:[m.jsxs(cx,{children:[i+1," of ",r.length]}),m.jsxs(ux,{children:[i>0&&m.jsx(fs,{variant:"secondary",size:"small",onClick:b,children:"Previous"}),i<r.length-1?m.jsx(fs,{variant:"primary",size:"small",onClick:y,children:"Next"}):m.jsx(fs,{variant:"primary",size:"small",onClick:y,children:"Finish"})]})]})]}),m.jsx(dx,{variant:"secondary",size:"small",onClick:k,children:"Skip Tour"})]})},px=cm`
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
`;let $r=!1;try{$r=localStorage.getItem("devToolsEnabled")==="true"}catch{console.warn("Failed to access localStorage for dev tools state")}const gx=()=>{$r=!$r;try{localStorage.setItem("devToolsEnabled",$r.toString()),console.log(`Dev tools ${$r?"enabled":"disabled"}`)}catch{console.warn("Failed to save dev tools state to localStorage")}},ed=["d","e","v"];let Or=[];const mx=r=>(Or.push(r.toLowerCase()),Or.length>ed.length&&Or.shift(),Or.join("")===ed.join("")?(gx(),Or=[],!0):!1),_x=R.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`,yx=R.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,vx=[{target:"header",title:"Welcome to BlindTab!",content:"BlindTab helps you view and navigate song leadsheets with ease. This quick tour will show you the main features.",position:"bottom"},{target:".song-library-button",title:"Song Library",content:'Click here or press "O" to open the song library where you can browse, search, and load songs. Each song has a play button to load it.',position:"bottom"},{target:".accessibility-button",title:"Accessibility Options",content:"Access settings for font size, display preferences, and other accessibility features here.",position:"bottom"},{target:".theme-toggle",title:"Theme Toggle",content:'Switch between light and dark themes for comfortable viewing in any environment. You can also press "D" to toggle.',position:"left"},{target:"main",title:"Leadsheet Display",content:"Your song lyrics and chords will appear here. The display automatically adjusts to show the current section of the song.",position:"top"},{target:".controls-panel",title:"Navigation Controls",content:"Use these buttons to navigate through the song. You can also use arrow keys or space bar to move forward.",position:"top"},{target:".auto-resize-button",title:"Auto-Resize",content:'Toggle auto-resize to automatically adjust the font size to fit the screen. You can also press "A" to toggle.',position:"top"},{target:".help-button",title:"Help Button",content:"Click this button anytime to restart this tour and learn about BlindTab features.",position:"left"}],wx=()=>{const[r,e]=N.useState(!1),[t,n]=N.useState(!1),[i,s]=N.useState(!1),[o,l]=N.useState(0),{songs:c,playSong:h,currentSong:f}=En(),{isTourOpen:p,startTour:y,closeTour:b,completeTour:k}=X0({tourId:"blindtab-main-tour",autoStart:!0}),P=(f==null?void 0:f.lyrics)||[];N.useEffect(()=>{const O=$=>{mx($.key)};return window.addEventListener("keydown",O),()=>{window.removeEventListener("keydown",O)}},[]),VT({arrowright:()=>M(),space:()=>M(),arrowleft:()=>C(),"+":()=>{},"=":()=>{},"-":()=>{},a:()=>{},d:()=>{},o:()=>s(!0),l:()=>n(!0),h:()=>y()},{preventDefaultKeys:["space","arrowleft","arrowright"]});const C=()=>{o>0&&l(o-1)},M=()=>{P.length&&o<P.length-1&&l(o+1)},F=async O=>{try{await h(O),l(0),f&&td(`Loaded song: ${f.title} by ${f.artist}`)}catch($){console.error(`Error loading song ${O}:`,$),td(`Error loading song. ${$.message||"Unknown error"}`)}};return m.jsxs(m.Fragment,{children:[m.jsx(px,{}),m.jsxs(_x,{children:[m.jsx(HT,{onOpenAccessibilityMenu:()=>e(!0),onOpenSongLibrary:()=>s(!0),onStartTour:y}),m.jsx(yx,{children:m.jsx(t0,{songData:f,currentLineIndex:o})}),m.jsx(d0,{onPrevious:C,onNext:M,hasPrevious:o>0,hasNext:P.length?o<P.length-1:!1,currentLineIndex:o,totalLines:P.length||0,onSliderChange:l})]}),m.jsx(I0,{isOpen:r,onClose:()=>e(!1)}),m.jsx(C0,{isOpen:t,onClose:()=>n(!1),onSongSelect:F}),m.jsx(Y0,{isOpen:i,onClose:()=>s(!1),onSongLoad:F}),m.jsx(fx,{steps:vx,isOpen:p,onClose:b,onComplete:k})]})},td=r=>{const e=document.createElement("div");e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),e.setAttribute("class","sr-only"),e.textContent=r,document.body.appendChild(e),setTimeout(()=>document.body.removeChild(e),1e3)},Ix=R.div`
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
`,Ex=R.div`
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,bx=R.div`
  font-size: 14px;
  line-height: 1.4;
`,Tx=R.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  margin-left: 8px;
`,xx=()=>{const[r,e]=N.useState(!0);let t=!1;try{t=En().isPreviewMode}catch{return console.warn("PreviewModeNotice: SongContext not available"),null}return t?m.jsxs(Ix,{$visible:r,children:[m.jsxs(Ex,{children:["Preview Mode",m.jsx(Tx,{onClick:()=>e(!1),children:"×"})]}),m.jsx(bx,{children:"You're viewing a preview deployment. Some features like saving songs and user authentication may be limited."})]}):null},Fs=async()=>{var e,t,n,i,s;console.group("🔍 Firebase Debug Report"),console.log("Environment Information:"),console.log("- Current URL:",window.location.href),console.log("- Hostname:",window.location.hostname),console.log("- Protocol:",window.location.protocol),console.log("- User Agent:",navigator.userAgent),console.log("- Preview Deployment:",Gl?"Yes":"No"),console.log("- Development Mode:",He?"Yes":"No"),console.log("- Firebase Config:",{authDomain:"blindtab-db.firebaseapp.com",projectId:"blindtab-db"}),console.log("Auth State:"),console.log("- Current User:",Jr.currentUser?"Signed In":"Not Signed In"),console.log("Checking if Firestore database exists...");let r=!1;try{console.log("Using Firebase SDK directly");const o=Un(on(ke,"firebase_test"),Bn(1));await an(o),r=!0,console.log("✅ Firestore database exists and is accessible")}catch(o){o.code==="permission-denied"?(console.log("✅ Firestore database exists but permission denied for test collection"),r=!0):o.code==="not-found"||(e=o.message)!=null&&e.includes("not found")?(console.error("❌ Firestore database not found"),r=!1):(console.error("❌ Error checking database:",o),r=!1)}r||(console.error("❌ Firestore database does not exist or is not accessible!"),console.log("🔧 You need to create a Firestore database in the Firebase Console:"),console.log("   1. Go to https://console.firebase.google.com/project/blindtab-db/firestore"),console.log('   2. Click "Create database"'),console.log("   3. Choose either production or test mode"),console.log("   4. Select a location close to your users"),console.log("   5. Wait for the database to be provisioned (this can take a few minutes)"),console.log('   6. Create a collection called "songs" to store your songs')),console.log("Testing Firestore Connection...");try{const o=on(ke,qe.SONGS),l=Un(o,Bn(1)),c=performance.now(),h=await an(l),f=performance.now();if(console.log("✅ Firestore Connection Successful:"),console.log(`- Query Time: ${(f-c).toFixed(2)}ms`),console.log(`- Documents Found: ${h.size}`),h.size>0){const p=h.docs[0];console.log("- Sample Document:",{id:p.id,exists:p.exists(),data:p.data()})}}catch(o){if(console.error("❌ Firestore Connection Failed:",o),console.log("- Error Code:",o.code),console.log("- Error Message:",o.message),o.code==="permission-denied")console.log("🔧 Possible Fix: This domain may not be authorized in Firebase."),console.log("   Add it in Firebase Console -> Authentication -> Sign-in method -> Authorized domains");else if(o.code==="unavailable"||(t=o.message)!=null&&t.includes("network"))console.log("🔧 Possible Fix: Network connectivity issue or Firebase service disruption."),console.log("   Check Firebase Status: https://status.firebase.google.com/");else if(o.code==="resource-exhausted")console.log("🔧 Possible Fix: Firebase quota exceeded. Check your billing plan.");else if(o.code==="failed-precondition")console.log("🔧 Possible Fix: Firestore indexes may be missing."),console.log("   Check Firebase Console -> Firestore -> Indexes");else if((n=o.message)!=null&&n.includes("400")||(i=o.message)!=null&&i.includes("Bad Request")||(s=o.message)!=null&&s.includes("jd")){console.log("🔧 Possible Fix: WebChannel connection issue (Bad Request)."),console.log("   This is a known issue with Firebase WebChannel connections."),console.log("Attempting to fix WebChannel connection issue...");try{const l=Ad(),c=Sp(l,{experimentalForceLongPolling:!0,ssl:!0,ignoreUndefinedProperties:!0});c._settings={...c._settings,host:"firestore.googleapis.com",ssl:!0};const h=on(c,qe.SONGS),f=Un(h,Bn(1)),p=performance.now(),y=await an(f),b=performance.now();console.log("✅ Connection Fixed with New Settings:"),console.log(`- Query Time: ${(b-p).toFixed(2)}ms`),console.log(`- Documents Found: ${y.size}`),console.log("To fix this issue permanently, update your Firebase configuration:"),console.log(`
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
        `)}catch(l){console.error("Failed to fix WebChannel connection issue:",l)}}}if(console.log("Network Diagnostics:"),console.log("- Online Status:",navigator.onLine?"Online":"Offline"),He)console.log("Skipping CORS test in development mode");else{console.log("Testing CORS Configuration...");try{const o=await fetch("https://blindtab-db.firebaseio.com/.json?shallow=true");console.log("- CORS Test Status:",o.status),console.log("- CORS Test OK:",o.ok)}catch(o){console.error("- CORS Test Failed:",o)}}return console.groupEnd(),"Firebase debug complete. Check console for detailed report."},Sx=()=>{window.runFirebaseDebug=Fs,console.log("Firebase debug utility added to window. Run window.runFirebaseDebug() in console.")},Ax=async()=>{var r;try{console.group("🔧 Initializing Firestore Database"),console.log("Testing database connection...");let e=!1;try{console.log("Using Firebase SDK directly");const s=Un(on(ke,"firebase_test"),Bn(1));await an(s),e=!0,console.log("✅ Firestore database exists and is accessible")}catch(s){s.code==="permission-denied"?(console.log("✅ Firestore database exists but permission denied for test collection"),e=!0):s.code==="not-found"||(r=s.message)!=null&&r.includes("not found")?(console.error("❌ Firestore database not found"),e=!1):(console.error("❌ Error checking database:",s),e=!1)}if(!e)return console.error("❌ Firestore database not found. Please create it in the Firebase Console."),console.groupEnd(),!1;console.log("Checking for existing songs...");const t=Un(on(ke,qe.SONGS),Bn(1));if(!(await an(t)).empty)return console.log("✅ Songs already exist in the database. Skipping initialization."),console.groupEnd(),!0;const i=await gT();if(!He&&!i)return console.log("⚠️ User does not have dev access. Skipping initialization in production."),console.groupEnd(),!1;console.log("🔧 Initializing database with sample data..."),console.log(`Adding ${Ls.length} sample songs...`);for(const s of Ls){console.log(`Adding song: ${s.title}`),(!s.lyrics||!Array.isArray(s.lyrics))&&(console.warn(`Song ${s.title} is missing the lyrics field. Adding empty lyrics.`),s.lyrics=[]);const{id:o,...l}=s;await Vl(ht(ke,qe.SONGS,o),l)}return console.log("✅ Successfully added sample songs to Firestore"),console.groupEnd(),!0}catch(e){return console.error("❌ Error initializing Firestore:",e),console.groupEnd(),!1}},Rx=()=>{window.initializeFirestore=Ax,console.log("Firestore initializer added to window. Run window.initializeFirestore() in console to add sample data.")};function Cx(){return N.useEffect(()=>{hT&&(window.runFirebaseDebug=Fs,Sx(),console.log("🔧 Firebase debug utility added. Run window.runFirebaseDebug() in console to diagnose issues."))},[]),N.useEffect(()=>{He&&(console.log("Running Firebase debug in development mode..."),Fs().then(r=>{console.log(r)}),Rx(),console.log("🔧 Firestore initializer added. Run window.initializeFirestore() in console to add sample data."))},[]),m.jsx(r_,{children:m.jsxs(e_,{children:[m.jsx(gd,{path:"/",element:m.jsx(kT,{children:m.jsx(DT,{children:m.jsx(_T,{children:m.jsxs(TT,{children:[m.jsx(wx,{}),m.jsx(xx,{})]})})})})}),!1]})})}window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"&&(console.log("🔧 Adding Firebase debug utility to window object"),window.runFirebaseDebug=Fs);ia.createRoot(document.getElementById("root")).render(m.jsx(nd.StrictMode,{children:m.jsx(Cx,{})}));
