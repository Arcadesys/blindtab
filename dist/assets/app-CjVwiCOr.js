import{r as O,a as hg,R as dg,_ as Wa,d as R,b as id,l as Je,m as sd,f as fg}from"./vendor-B6z8DUxt.js";var od={exports:{}},$s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg=O,mg=Symbol.for("react.element"),gg=Symbol.for("react.fragment"),_g=Object.prototype.hasOwnProperty,yg=pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vg={key:!0,ref:!0,__self:!0,__source:!0};function ad(r,e,t){var n,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)_g.call(e,n)&&!vg.hasOwnProperty(n)&&(i[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:mg,type:r,key:s,ref:o,props:i,_owner:yg.current}}$s.Fragment=gg;$s.jsx=ad;$s.jsxs=ad;od.exports=$s;var g=od.exports,fa={},Yc=hg;fa.createRoot=Yc.createRoot,fa.hydrateRoot=Yc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},vs.apply(this,arguments)}var Ct;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Ct||(Ct={}));const Xc="popstate";function wg(r){r===void 0&&(r={});function e(n,i){let{pathname:s,search:o,hash:l}=n.location;return pa("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(n,i){return typeof i=="string"?i:cd(i)}return Eg(e,t,null,r)}function ze(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ld(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ig(){return Math.random().toString(36).substr(2,8)}function Zc(r,e){return{usr:r.state,key:r.key,idx:e}}function pa(r,e,t,n){return t===void 0&&(t=null),vs({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?qs(e):e,{state:t,key:e&&e.key||n||Ig()})}function cd(r){let{pathname:e="/",search:t="",hash:n=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function qs(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let n=r.indexOf("?");n>=0&&(e.search=r.substr(n),r=r.substr(0,n)),r&&(e.pathname=r)}return e}function Eg(r,e,t,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:s=!1}=n,o=i.history,l=Ct.Pop,c=null,h=f();h==null&&(h=0,o.replaceState(vs({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Ct.Pop;let P=f(),M=P==null?null:P-h;h=P,c&&c({action:l,location:C.location,delta:M})}function _(P,M){l=Ct.Push;let B=pa(C.location,P,M);h=f()+1;let N=Zc(B,h),U=C.createHref(B);try{o.pushState(N,"",U)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(U)}s&&c&&c({action:l,location:C.location,delta:1})}function b(P,M){l=Ct.Replace;let B=pa(C.location,P,M);h=f();let N=Zc(B,h),U=C.createHref(B);o.replaceState(N,"",U),s&&c&&c({action:l,location:C.location,delta:0})}function k(P){let M=i.location.origin!=="null"?i.location.origin:i.location.href,B=typeof P=="string"?P:cd(P);return B=B.replace(/ $/,"%20"),ze(M,"No window.location.(origin|href) available to create URL for href: "+B),new URL(B,M)}let C={get action(){return l},get location(){return r(i,o)},listen(P){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Xc,p),c=P,()=>{i.removeEventListener(Xc,p),c=null}},createHref(P){return e(i,P)},createURL:k,encodeLocation(P){let M=k(P);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:_,replace:b,go(P){return o.go(P)}};return C}var eu;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(eu||(eu={}));function bg(r,e,t){return t===void 0&&(t="/"),Tg(r,e,t)}function Tg(r,e,t,n){let i=typeof e=="string"?qs(e):e,s=dd(i.pathname||"/",t);if(s==null)return null;let o=ud(r);xg(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let h=Lg(s);l=Ng(o[c],h)}return l}function ud(r,e,t,n){e===void 0&&(e=[]),t===void 0&&(t=[]),n===void 0&&(n="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(ze(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let h=Un([n,c.relativePath]),f=t.concat(c);s.children&&s.children.length>0&&(ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),ud(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:Vg(h,s.index),routesMeta:f})};return r.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of hd(s.path))i(s,o,c)}),e}function hd(r){let e=r.split("/");if(e.length===0)return[];let[t,...n]=e,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let o=hd(n.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>r.startsWith("/")&&c===""?"/":c)}function xg(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Dg(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}const Ag=/^:[\w-]+$/,Sg=3,Rg=2,Pg=1,Cg=10,kg=-2,tu=r=>r==="*";function Vg(r,e){let t=r.split("/"),n=t.length;return t.some(tu)&&(n+=kg),e&&(n+=Rg),t.filter(i=>!tu(i)).reduce((i,s)=>i+(Ag.test(s)?Sg:s===""?Pg:Cg),n)}function Dg(r,e){return r.length===e.length&&r.slice(0,-1).every((n,i)=>n===e[i])?r[r.length-1]-e[e.length-1]:0}function Ng(r,e,t){let{routesMeta:n}=r,i={},s="/",o=[];for(let l=0;l<n.length;++l){let c=n[l],h=l===n.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=Og({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},f),_=c.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Un([s,p.pathname]),pathnameBase:Fg(Un([s,p.pathnameBase])),route:_}),p.pathnameBase!=="/"&&(s=Un([s,p.pathnameBase]))}return o}function Og(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,n]=Mg(r.path,r.caseSensitive,r.end),i=e.match(t);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((h,f,p)=>{let{paramName:_,isOptional:b}=f;if(_==="*"){let C=l[p]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const k=l[p];return b&&!k?h[_]=void 0:h[_]=(k||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:r}}function Mg(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),ld(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let n=[],i="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(n.push({paramName:"*"}),i+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":r!==""&&r!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),n]}function Lg(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ld(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function dd(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=r.charAt(t);return n&&n!=="/"?null:r.slice(t)||"/"}const Un=r=>r.join("/").replace(/\/\/+/g,"/"),Fg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/");function jg(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const fd=["post","put","patch","delete"];new Set(fd);const Ug=["get",...fd];new Set(Ug);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ws(){return ws=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},ws.apply(this,arguments)}const Bg=O.createContext(null),zg=O.createContext(null),pd=O.createContext(null),Gs=O.createContext(null),Ks=O.createContext({outlet:null,matches:[],isDataRoute:!1}),md=O.createContext(null);function Ha(){return O.useContext(Gs)!=null}function $g(){return Ha()||ze(!1),O.useContext(Gs).location}function qg(r,e){return Gg(r,e)}function Gg(r,e,t,n){Ha()||ze(!1);let{navigator:i,static:s}=O.useContext(pd),{matches:o}=O.useContext(Ks),l=o[o.length-1],c=l?l.params:{};l&&l.pathname;let h=l?l.pathnameBase:"/";l&&l.route;let f=$g(),p;if(e){var _;let M=typeof e=="string"?qs(e):e;h==="/"||(_=M.pathname)!=null&&_.startsWith(h)||ze(!1),p=M}else p=f;let b=p.pathname||"/",k=b;if(h!=="/"){let M=h.replace(/^\//,"").split("/");k="/"+b.replace(/^\//,"").split("/").slice(M.length).join("/")}let C=bg(r,{pathname:k}),P=Jg(C&&C.map(M=>Object.assign({},M,{params:Object.assign({},c,M.params),pathname:Un([h,i.encodeLocation?i.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?h:Un([h,i.encodeLocation?i.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),o,t,n);return e&&P?O.createElement(Gs.Provider,{value:{location:ws({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Ct.Pop}},P):P}function Kg(){let r=e_(),e=jg(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),t?O.createElement("pre",{style:i},t):null,null)}const Wg=O.createElement(Kg,null);class Hg extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?O.createElement(Ks.Provider,{value:this.props.routeContext},O.createElement(md.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qg(r){let{routeContext:e,match:t,children:n}=r,i=O.useContext(Bg);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),O.createElement(Ks.Provider,{value:e},n)}function Jg(r,e,t,n){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),n===void 0&&(n=null),r==null){var s;if(!t)return null;if(t.errors)r=t.matches;else if((s=n)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=(i=t)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||ze(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,h=-1;if(t&&n&&n.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:_,errors:b}=t,k=p.route.loader&&_[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||k){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,p,_)=>{let b,k=!1,C=null,P=null;t&&(b=l&&p.route.id?l[p.route.id]:void 0,C=p.route.errorElement||Wg,c&&(h<0&&_===0?(t_("route-fallback"),k=!0,P=null):h===_&&(k=!0,P=p.route.hydrateFallbackElement||null)));let M=e.concat(o.slice(0,_+1)),B=()=>{let N;return b?N=C:k?N=P:p.route.Component?N=O.createElement(p.route.Component,null):p.route.element?N=p.route.element:N=f,O.createElement(Qg,{match:p,routeContext:{outlet:f,matches:M,isDataRoute:t!=null},children:N})};return t&&(p.route.ErrorBoundary||p.route.errorElement||_===0)?O.createElement(Hg,{location:t.location,revalidation:t.revalidation,component:C,error:b,children:B(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):B()},null)}var gd=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(gd||{});function Yg(r){let e=O.useContext(zg);return e||ze(!1),e}function Xg(r){let e=O.useContext(Ks);return e||ze(!1),e}function Zg(r){let e=Xg(),t=e.matches[e.matches.length-1];return t.route.id||ze(!1),t.route.id}function e_(){var r;let e=O.useContext(md),t=Yg(gd.UseRouteError),n=Zg();return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}const nu={};function t_(r,e,t){nu[r]||(nu[r]=!0)}function n_(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function _d(r){ze(!1)}function r_(r){let{basename:e="/",children:t=null,location:n,navigationType:i=Ct.Pop,navigator:s,static:o=!1,future:l}=r;Ha()&&ze(!1);let c=e.replace(/^\/*/,"/"),h=O.useMemo(()=>({basename:c,navigator:s,static:o,future:ws({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof n=="string"&&(n=qs(n));let{pathname:f="/",search:p="",hash:_="",state:b=null,key:k="default"}=n,C=O.useMemo(()=>{let P=dd(f,c);return P==null?null:{location:{pathname:P,search:p,hash:_,state:b,key:k},navigationType:i}},[c,f,p,_,b,k,i]);return C==null?null:O.createElement(pd.Provider,{value:h},O.createElement(Gs.Provider,{children:t,value:C}))}function i_(r){let{children:e,location:t}=r;return qg(ma(e),t)}new Promise(()=>{});function ma(r,e){e===void 0&&(e=[]);let t=[];return O.Children.forEach(r,(n,i)=>{if(!O.isValidElement(n))return;let s=[...e,i];if(n.type===O.Fragment){t.push.apply(t,ma(n.props.children,s));return}n.type!==_d&&ze(!1),!n.props.index||!n.props.children||ze(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=ma(n.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const s_="6";try{window.__reactRouterVersion=s_}catch{}const o_="startTransition",ru=dg[o_];function a_(r){let{basename:e,children:t,future:n,window:i}=r,s=O.useRef();s.current==null&&(s.current=wg({window:i,v5Compat:!0}));let o=s.current,[l,c]=O.useState({action:o.action,location:o.location}),{v7_startTransition:h}=n||{},f=O.useCallback(p=>{h&&ru?ru(()=>c(p)):c(p)},[c,h]);return O.useLayoutEffect(()=>o.listen(f),[o,f]),O.useEffect(()=>n_(n),[n]),O.createElement(r_,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o,future:n})}var iu;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(iu||(iu={}));var su;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(su||(su={}));var ou={};/**
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
 */const yd=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},l_=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],l=r[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,l=o?r[i+1]:0,c=i+2<r.length,h=c?r[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let _=(l&15)<<2|h>>6,b=h&63;c||(b=64,o||(_=64)),n.push(t[f],t[p],t[_],t[b])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(yd(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):l_(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],l=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new c_;const _=s<<2|l>>4;if(n.push(_),h!==64){const b=l<<4&240|h>>2;if(n.push(b),p!==64){const k=h<<6&192|p;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class c_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u_=function(r){const e=yd(r);return vd.encodeByteArray(e,!0)},Is=function(r){return u_(r).replace(/\./g,"")},wd=function(r){try{return vd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function h_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const d_=()=>h_().__FIREBASE_DEFAULTS__,f_=()=>{if(typeof process>"u"||typeof ou>"u")return;const r=ou.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},p_=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&wd(r[1]);return e&&JSON.parse(e)},Ws=()=>{try{return d_()||f_()||p_()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Id=r=>{var e,t;return(t=(e=Ws())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},m_=r=>{const e=Id(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Ed=()=>{var r;return(r=Ws())===null||r===void 0?void 0:r.config},bd=r=>{var e;return(e=Ws())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class g_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function __(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Is(JSON.stringify(t)),Is(JSON.stringify(o)),""].join(".")}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function y_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function v_(){var r;const e=(r=Ws())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function w_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function I_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function E_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function b_(){const r=ve();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Td(){return!v_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xd(){try{return typeof indexedDB=="object"}catch{return!1}}function T_(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const x_="FirebaseError";class _t extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=x_,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?A_(s,n):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new _t(i,l,n)}}function A_(r,e){return r.replace(S_,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const S_=/\{\$([^}]+)}/g;function R_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ri(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(au(s)&&au(o)){if(!ri(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function au(r){return r!==null&&typeof r=="object"}/**
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
 */function gi(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function P_(r,e){const t=new C_(r,e);return t.subscribe.bind(t)}class C_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");k_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Qo),i.error===void 0&&(i.error=Qo),i.complete===void 0&&(i.complete=Qo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function k_(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Qo(){}/**
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
 */function xe(r){return r&&r._delegate?r._delegate:r}class un{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class V_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new g_;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(N_(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);n===l&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:D_(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D_(r){return r===Jt?void 0:r}function N_(r){return r.instantiationMode==="EAGER"}/**
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
 */class O_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new V_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(X||(X={}));const M_={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},L_=X.INFO,F_={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},j_=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=F_[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=L_,this._logHandler=j_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?M_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const U_=(r,e)=>e.some(t=>r instanceof t);let lu,cu;function B_(){return lu||(lu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z_(){return cu||(cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ad=new WeakMap,ga=new WeakMap,Sd=new WeakMap,Jo=new WeakMap,Ja=new WeakMap;function $_(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(Vt(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ad.set(t,r)}).catch(()=>{}),Ja.set(e,r),e}function q_(r){if(ga.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});ga.set(r,e)}let _a={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ga.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Sd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function G_(r){_a=r(_a)}function K_(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Yo(this),e,...t);return Sd.set(n,e.sort?e.sort():[e]),Vt(n)}:z_().includes(r)?function(...e){return r.apply(Yo(this),e),Vt(Ad.get(this))}:function(...e){return Vt(r.apply(Yo(this),e))}}function W_(r){return typeof r=="function"?K_(r):(r instanceof IDBTransaction&&q_(r),U_(r,B_())?new Proxy(r,_a):r)}function Vt(r){if(r instanceof IDBRequest)return $_(r);if(Jo.has(r))return Jo.get(r);const e=W_(r);return e!==r&&(Jo.set(r,e),Ja.set(e,r)),e}const Yo=r=>Ja.get(r);function H_(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),l=Vt(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Vt(o.result),c.oldVersion,c.newVersion,Vt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Q_=["get","getKey","getAll","getAllKeys","count"],J_=["put","add","delete","clear"],Xo=new Map;function uu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Xo.get(e))return Xo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=J_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Q_.includes(t)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return Xo.set(e,s),s}G_(r=>({...r,get:(e,t,n)=>uu(e,t)||r.get(e,t,n),has:(e,t)=>!!uu(e,t)||r.has(e,t)}));/**
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
 */class Y_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(X_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function X_(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ya="@firebase/app",hu="0.10.13";/**
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
 */const pt=new Qa("@firebase/app"),Z_="@firebase/app-compat",ey="@firebase/analytics-compat",ty="@firebase/analytics",ny="@firebase/app-check-compat",ry="@firebase/app-check",iy="@firebase/auth",sy="@firebase/auth-compat",oy="@firebase/database",ay="@firebase/data-connect",ly="@firebase/database-compat",cy="@firebase/functions",uy="@firebase/functions-compat",hy="@firebase/installations",dy="@firebase/installations-compat",fy="@firebase/messaging",py="@firebase/messaging-compat",my="@firebase/performance",gy="@firebase/performance-compat",_y="@firebase/remote-config",yy="@firebase/remote-config-compat",vy="@firebase/storage",wy="@firebase/storage-compat",Iy="@firebase/firestore",Ey="@firebase/vertexai-preview",by="@firebase/firestore-compat",Ty="firebase",xy="10.14.1";/**
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
 */const va="[DEFAULT]",Ay={[ya]:"fire-core",[Z_]:"fire-core-compat",[ty]:"fire-analytics",[ey]:"fire-analytics-compat",[ry]:"fire-app-check",[ny]:"fire-app-check-compat",[iy]:"fire-auth",[sy]:"fire-auth-compat",[oy]:"fire-rtdb",[ay]:"fire-data-connect",[ly]:"fire-rtdb-compat",[cy]:"fire-fn",[uy]:"fire-fn-compat",[hy]:"fire-iid",[dy]:"fire-iid-compat",[fy]:"fire-fcm",[py]:"fire-fcm-compat",[my]:"fire-perf",[gy]:"fire-perf-compat",[_y]:"fire-rc",[yy]:"fire-rc-compat",[vy]:"fire-gcs",[wy]:"fire-gcs-compat",[Iy]:"fire-fst",[by]:"fire-fst-compat",[Ey]:"fire-vertex","fire-js":"fire-js",[Ty]:"fire-js-all"};/**
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
 */const Es=new Map,Sy=new Map,wa=new Map;function du(r,e){try{r.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Wn(r){const e=r.name;if(wa.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;wa.set(e,r);for(const t of Es.values())du(t,r);for(const t of Sy.values())du(t,r);return!0}function Hs(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function ct(r){return r.settings!==void 0}/**
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
 */const Ry={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dt=new mi("app","Firebase",Ry);/**
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
 */class Py{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const dr=xy;function Rd(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:va,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(t||(t=Ed()),!t)throw Dt.create("no-options");const s=Es.get(i);if(s){if(ri(t,s.options)&&ri(n,s.config))return s;throw Dt.create("duplicate-app",{appName:i})}const o=new O_(i);for(const c of wa.values())o.addComponent(c);const l=new Py(t,n,o);return Es.set(i,l),l}function Ya(r=va){const e=Es.get(r);if(!e&&r===va&&Ed())return Rd();if(!e)throw Dt.create("no-app",{appName:r});return e}function Nt(r,e,t){var n;let i=(n=Ay[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(l.join(" "));return}Wn(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Cy="firebase-heartbeat-database",ky=1,ii="firebase-heartbeat-store";let Zo=null;function Pd(){return Zo||(Zo=H_(Cy,ky,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ii)}catch(t){console.warn(t)}}}}).catch(r=>{throw Dt.create("idb-open",{originalErrorMessage:r.message})})),Zo}async function Vy(r){try{const t=(await Pd()).transaction(ii),n=await t.objectStore(ii).get(Cd(r));return await t.done,n}catch(e){if(e instanceof _t)pt.warn(e.message);else{const t=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(t.message)}}}async function fu(r,e){try{const n=(await Pd()).transaction(ii,"readwrite");await n.objectStore(ii).put(e,Cd(r)),await n.done}catch(t){if(t instanceof _t)pt.warn(t.message);else{const n=Dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pt.warn(n.message)}}}function Cd(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Dy=1024,Ny=30*24*60*60*1e3;class Oy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ly(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Ny}),this._storage.overwrite(this._heartbeatsCache))}catch(n){pt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pu(),{heartbeatsToSend:n,unsentEntries:i}=My(this._heartbeatsCache.heartbeats),s=Is(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return pt.warn(t),""}}}function pu(){return new Date().toISOString().substring(0,10)}function My(r,e=Dy){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),mu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Ly{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xd()?T_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Vy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mu(r){return Is(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function Fy(r){Wn(new un("platform-logger",e=>new Y_(e),"PRIVATE")),Wn(new un("heartbeat",e=>new Oy(e),"PRIVATE")),Nt(ya,hu,r),Nt(ya,hu,"esm2017"),Nt("fire-js","")}Fy("");var gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var on,kd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function w(){}w.prototype=v.prototype,E.D=v.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(I,T,x){for(var y=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)y[ye-2]=arguments[ye];return v.prototype[T].apply(I,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,w){w||(w=0);var I=Array(16);if(typeof v=="string")for(var T=0;16>T;++T)I[T]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(T=0;16>T;++T)I[T]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=E.g[0],w=E.g[1],T=E.g[2];var x=E.g[3],y=v+(x^w&(T^x))+I[0]+3614090360&4294967295;v=w+(y<<7&4294967295|y>>>25),y=x+(T^v&(w^T))+I[1]+3905402710&4294967295,x=v+(y<<12&4294967295|y>>>20),y=T+(w^x&(v^w))+I[2]+606105819&4294967295,T=x+(y<<17&4294967295|y>>>15),y=w+(v^T&(x^v))+I[3]+3250441966&4294967295,w=T+(y<<22&4294967295|y>>>10),y=v+(x^w&(T^x))+I[4]+4118548399&4294967295,v=w+(y<<7&4294967295|y>>>25),y=x+(T^v&(w^T))+I[5]+1200080426&4294967295,x=v+(y<<12&4294967295|y>>>20),y=T+(w^x&(v^w))+I[6]+2821735955&4294967295,T=x+(y<<17&4294967295|y>>>15),y=w+(v^T&(x^v))+I[7]+4249261313&4294967295,w=T+(y<<22&4294967295|y>>>10),y=v+(x^w&(T^x))+I[8]+1770035416&4294967295,v=w+(y<<7&4294967295|y>>>25),y=x+(T^v&(w^T))+I[9]+2336552879&4294967295,x=v+(y<<12&4294967295|y>>>20),y=T+(w^x&(v^w))+I[10]+4294925233&4294967295,T=x+(y<<17&4294967295|y>>>15),y=w+(v^T&(x^v))+I[11]+2304563134&4294967295,w=T+(y<<22&4294967295|y>>>10),y=v+(x^w&(T^x))+I[12]+1804603682&4294967295,v=w+(y<<7&4294967295|y>>>25),y=x+(T^v&(w^T))+I[13]+4254626195&4294967295,x=v+(y<<12&4294967295|y>>>20),y=T+(w^x&(v^w))+I[14]+2792965006&4294967295,T=x+(y<<17&4294967295|y>>>15),y=w+(v^T&(x^v))+I[15]+1236535329&4294967295,w=T+(y<<22&4294967295|y>>>10),y=v+(T^x&(w^T))+I[1]+4129170786&4294967295,v=w+(y<<5&4294967295|y>>>27),y=x+(w^T&(v^w))+I[6]+3225465664&4294967295,x=v+(y<<9&4294967295|y>>>23),y=T+(v^w&(x^v))+I[11]+643717713&4294967295,T=x+(y<<14&4294967295|y>>>18),y=w+(x^v&(T^x))+I[0]+3921069994&4294967295,w=T+(y<<20&4294967295|y>>>12),y=v+(T^x&(w^T))+I[5]+3593408605&4294967295,v=w+(y<<5&4294967295|y>>>27),y=x+(w^T&(v^w))+I[10]+38016083&4294967295,x=v+(y<<9&4294967295|y>>>23),y=T+(v^w&(x^v))+I[15]+3634488961&4294967295,T=x+(y<<14&4294967295|y>>>18),y=w+(x^v&(T^x))+I[4]+3889429448&4294967295,w=T+(y<<20&4294967295|y>>>12),y=v+(T^x&(w^T))+I[9]+568446438&4294967295,v=w+(y<<5&4294967295|y>>>27),y=x+(w^T&(v^w))+I[14]+3275163606&4294967295,x=v+(y<<9&4294967295|y>>>23),y=T+(v^w&(x^v))+I[3]+4107603335&4294967295,T=x+(y<<14&4294967295|y>>>18),y=w+(x^v&(T^x))+I[8]+1163531501&4294967295,w=T+(y<<20&4294967295|y>>>12),y=v+(T^x&(w^T))+I[13]+2850285829&4294967295,v=w+(y<<5&4294967295|y>>>27),y=x+(w^T&(v^w))+I[2]+4243563512&4294967295,x=v+(y<<9&4294967295|y>>>23),y=T+(v^w&(x^v))+I[7]+1735328473&4294967295,T=x+(y<<14&4294967295|y>>>18),y=w+(x^v&(T^x))+I[12]+2368359562&4294967295,w=T+(y<<20&4294967295|y>>>12),y=v+(w^T^x)+I[5]+4294588738&4294967295,v=w+(y<<4&4294967295|y>>>28),y=x+(v^w^T)+I[8]+2272392833&4294967295,x=v+(y<<11&4294967295|y>>>21),y=T+(x^v^w)+I[11]+1839030562&4294967295,T=x+(y<<16&4294967295|y>>>16),y=w+(T^x^v)+I[14]+4259657740&4294967295,w=T+(y<<23&4294967295|y>>>9),y=v+(w^T^x)+I[1]+2763975236&4294967295,v=w+(y<<4&4294967295|y>>>28),y=x+(v^w^T)+I[4]+1272893353&4294967295,x=v+(y<<11&4294967295|y>>>21),y=T+(x^v^w)+I[7]+4139469664&4294967295,T=x+(y<<16&4294967295|y>>>16),y=w+(T^x^v)+I[10]+3200236656&4294967295,w=T+(y<<23&4294967295|y>>>9),y=v+(w^T^x)+I[13]+681279174&4294967295,v=w+(y<<4&4294967295|y>>>28),y=x+(v^w^T)+I[0]+3936430074&4294967295,x=v+(y<<11&4294967295|y>>>21),y=T+(x^v^w)+I[3]+3572445317&4294967295,T=x+(y<<16&4294967295|y>>>16),y=w+(T^x^v)+I[6]+76029189&4294967295,w=T+(y<<23&4294967295|y>>>9),y=v+(w^T^x)+I[9]+3654602809&4294967295,v=w+(y<<4&4294967295|y>>>28),y=x+(v^w^T)+I[12]+3873151461&4294967295,x=v+(y<<11&4294967295|y>>>21),y=T+(x^v^w)+I[15]+530742520&4294967295,T=x+(y<<16&4294967295|y>>>16),y=w+(T^x^v)+I[2]+3299628645&4294967295,w=T+(y<<23&4294967295|y>>>9),y=v+(T^(w|~x))+I[0]+4096336452&4294967295,v=w+(y<<6&4294967295|y>>>26),y=x+(w^(v|~T))+I[7]+1126891415&4294967295,x=v+(y<<10&4294967295|y>>>22),y=T+(v^(x|~w))+I[14]+2878612391&4294967295,T=x+(y<<15&4294967295|y>>>17),y=w+(x^(T|~v))+I[5]+4237533241&4294967295,w=T+(y<<21&4294967295|y>>>11),y=v+(T^(w|~x))+I[12]+1700485571&4294967295,v=w+(y<<6&4294967295|y>>>26),y=x+(w^(v|~T))+I[3]+2399980690&4294967295,x=v+(y<<10&4294967295|y>>>22),y=T+(v^(x|~w))+I[10]+4293915773&4294967295,T=x+(y<<15&4294967295|y>>>17),y=w+(x^(T|~v))+I[1]+2240044497&4294967295,w=T+(y<<21&4294967295|y>>>11),y=v+(T^(w|~x))+I[8]+1873313359&4294967295,v=w+(y<<6&4294967295|y>>>26),y=x+(w^(v|~T))+I[15]+4264355552&4294967295,x=v+(y<<10&4294967295|y>>>22),y=T+(v^(x|~w))+I[6]+2734768916&4294967295,T=x+(y<<15&4294967295|y>>>17),y=w+(x^(T|~v))+I[13]+1309151649&4294967295,w=T+(y<<21&4294967295|y>>>11),y=v+(T^(w|~x))+I[4]+4149444226&4294967295,v=w+(y<<6&4294967295|y>>>26),y=x+(w^(v|~T))+I[11]+3174756917&4294967295,x=v+(y<<10&4294967295|y>>>22),y=T+(v^(x|~w))+I[2]+718787259&4294967295,T=x+(y<<15&4294967295|y>>>17),y=w+(x^(T|~v))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+x&4294967295}n.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var w=v-this.blockSize,I=this.B,T=this.h,x=0;x<v;){if(T==0)for(;x<=w;)i(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<v;)if(I[T++]=E.charCodeAt(x++),T==this.blockSize){i(this,I),T=0;break}}else for(;x<v;)if(I[T++]=E[x++],T==this.blockSize){i(this,I),T=0;break}}this.h=T,this.o+=v},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var w=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=w&255,w/=256;for(this.u(E),E=Array(16),v=w=0;4>v;++v)for(var I=0;32>I;I+=8)E[w++]=this.g[v]>>>I&255;return E};function s(E,v){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=v(E)}function o(E,v){this.h=v;for(var w=[],I=!0,T=E.length-1;0<=T;T--){var x=E[T]|0;I&&x==v||(w[T]=x,I=!1)}this.g=w}var l={};function c(E){return-128<=E&&128>E?s(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return P(h(-E));for(var v=[],w=1,I=0;E>=w;I++)v[I]=E/w|0,w*=4294967296;return new o(v,0)}function f(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return P(f(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(v,8)),I=p,T=0;T<E.length;T+=8){var x=Math.min(8,E.length-T),y=parseInt(E.substring(T,T+x),v);8>x?(x=h(Math.pow(v,x)),I=I.j(x).add(h(y))):(I=I.j(w),I=I.add(h(y)))}return I}var p=c(0),_=c(1),b=c(16777216);r=o.prototype,r.m=function(){if(C(this))return-P(this).m();for(var E=0,v=1,w=0;w<this.g.length;w++){var I=this.i(w);E+=(0<=I?I:4294967296+I)*v,v*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(C(this))return"-"+P(this).toString(E);for(var v=h(Math.pow(E,6)),w=this,I="";;){var T=U(w,v).g;w=M(w,T.j(v));var x=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=T,k(w))return x+I;for(;6>x.length;)x="0"+x;I=x+I}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function C(E){return E.h==-1}r.l=function(E){return E=M(this,E),C(E)?-1:k(E)?0:1};function P(E){for(var v=E.g.length,w=[],I=0;I<v;I++)w[I]=~E.g[I];return new o(w,~E.h).add(_)}r.abs=function(){return C(this)?P(this):this},r.add=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],I=0,T=0;T<=v;T++){var x=I+(this.i(T)&65535)+(E.i(T)&65535),y=(x>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);I=y>>>16,x&=65535,y&=65535,w[T]=y<<16|x}return new o(w,w[w.length-1]&-2147483648?-1:0)};function M(E,v){return E.add(P(v))}r.j=function(E){if(k(this)||k(E))return p;if(C(this))return C(E)?P(this).j(P(E)):P(P(this).j(E));if(C(E))return P(this.j(P(E)));if(0>this.l(b)&&0>E.l(b))return h(this.m()*E.m());for(var v=this.g.length+E.g.length,w=[],I=0;I<2*v;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var T=0;T<E.g.length;T++){var x=this.i(I)>>>16,y=this.i(I)&65535,ye=E.i(T)>>>16,$e=E.i(T)&65535;w[2*I+2*T]+=y*$e,B(w,2*I+2*T),w[2*I+2*T+1]+=x*$e,B(w,2*I+2*T+1),w[2*I+2*T+1]+=y*ye,B(w,2*I+2*T+1),w[2*I+2*T+2]+=x*ye,B(w,2*I+2*T+2)}for(I=0;I<v;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=v;I<2*v;I++)w[I]=0;return new o(w,0)};function B(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function N(E,v){this.g=E,this.h=v}function U(E,v){if(k(v))throw Error("division by zero");if(k(E))return new N(p,p);if(C(E))return v=U(P(E),v),new N(P(v.g),P(v.h));if(C(v))return v=U(E,P(v)),new N(P(v.g),v.h);if(30<E.g.length){if(C(E)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var w=_,I=v;0>=I.l(E);)w=F(w),I=F(I);var T=j(w,1),x=j(I,1);for(I=j(I,2),w=j(w,2);!k(I);){var y=x.add(I);0>=y.l(E)&&(T=T.add(w),x=y),I=j(I,1),w=j(w,1)}return v=M(E,T.j(v)),new N(T,v)}for(T=p;0<=E.l(v);){for(w=Math.max(1,Math.floor(E.m()/v.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),x=h(w),y=x.j(v);C(y)||0<y.l(E);)w-=I,x=h(w),y=x.j(v);k(x)&&(x=_),T=T.add(x),E=M(E,y)}return new N(T,E)}r.A=function(E){return U(this,E).h},r.and=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)&E.i(I);return new o(w,this.h&E.h)},r.or=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)|E.i(I);return new o(w,this.h|E.h)},r.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)^E.i(I);return new o(w,this.h^E.h)};function F(E){for(var v=E.g.length+1,w=[],I=0;I<v;I++)w[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(w,E.h)}function j(E,v){var w=v>>5;v%=32;for(var I=E.g.length-w,T=[],x=0;x<I;x++)T[x]=0<v?E.i(x+w)>>>v|E.i(x+w+1)<<32-v:E.i(x+w);return new o(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,kd=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,on=o}).apply(typeof gu<"u"?gu:typeof self<"u"?self:typeof window<"u"?window:{});var Wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vd,Br,Dd,rs,Ia,Nd,Od,Md;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wi=="object"&&Wi];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,u){if(u)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var A=a[m];if(!(A in d))break e;d=d[A]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var d=0,m=!1,A={next:function(){if(!m&&d<a.length){var V=d++;return{value:u(V,a[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function _(a,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function b(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,A,V){for(var z=Array(arguments.length-2),se=2;se<arguments.length;se++)z[se-2]=arguments[se];return u.prototype[A].apply(m,z)}}function C(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function P(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const A=a.length||0,V=m.length||0;a.length=A+V;for(let z=0;z<V;z++)a[A+z]=m[z]}else a.push(m)}}class M{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function N(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var F=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function j(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function E(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,u){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)a[d]=m[d];for(let V=0;V<w.length;V++)d=w[V],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function T(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function x(a){l.setTimeout(()=>{throw a},0)}function y(){var a=xo;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ye{constructor(){this.h=this.g=null}add(u,d){const m=$e.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var $e=new M(()=>new Cm,a=>a.reset());class Cm{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let yr,vr=!1,xo=new ye,Yl=()=>{const a=l.Promise.resolve(void 0);yr=()=>{a.then(km)}};var km=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){x(d)}var u=$e;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}vr=!1};function vt(){this.s=this.s,this.C=this.C}vt.prototype.s=!1,vt.prototype.ma=function(){this.s||(this.s=!0,this.N())},vt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var Vm=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function wr(a,u){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(F){e:{try{U(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Dm[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wr.aa.h.call(this)}}k(wr,Ae);var Dm={2:"touch",3:"pen",4:"mouse"};wr.prototype.h=function(){wr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ri="closure_listenable_"+(1e6*Math.random()|0),Nm=0;function Om(a,u,d,m,A){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=A,this.key=++Nm,this.da=this.fa=!1}function Pi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ci(a){this.src=a,this.g={},this.h=0}Ci.prototype.add=function(a,u,d,m,A){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var z=So(a,u,m,A);return-1<z?(u=a[z],d||(u.fa=!1)):(u=new Om(u,this.src,V,!!m,A),u.fa=d,a.push(u)),u};function Ao(a,u){var d=u.type;if(d in a.g){var m=a.g[d],A=Array.prototype.indexOf.call(m,u,void 0),V;(V=0<=A)&&Array.prototype.splice.call(m,A,1),V&&(Pi(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function So(a,u,d,m){for(var A=0;A<a.length;++A){var V=a[A];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==m)return A}return-1}var Ro="closure_lm_"+(1e6*Math.random()|0),Po={};function Xl(a,u,d,m,A){if(Array.isArray(u)){for(var V=0;V<u.length;V++)Xl(a,u[V],d,m,A);return null}return d=tc(d),a&&a[Ri]?a.K(u,d,h(m)?!!m.capture:!1,A):Mm(a,u,d,!1,m,A)}function Mm(a,u,d,m,A,V){if(!u)throw Error("Invalid event type");var z=h(A)?!!A.capture:!!A,se=ko(a);if(se||(a[Ro]=se=new Ci(a)),d=se.add(u,d,m,z,V),d.proxy)return d;if(m=Lm(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Vm||(A=z),A===void 0&&(A=!1),a.addEventListener(u.toString(),m,A);else if(a.attachEvent)a.attachEvent(ec(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Lm(){function a(d){return u.call(a.src,a.listener,d)}const u=Fm;return a}function Zl(a,u,d,m,A){if(Array.isArray(u))for(var V=0;V<u.length;V++)Zl(a,u[V],d,m,A);else m=h(m)?!!m.capture:!!m,d=tc(d),a&&a[Ri]?(a=a.i,u=String(u).toString(),u in a.g&&(V=a.g[u],d=So(V,d,m,A),-1<d&&(Pi(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[u],a.h--)))):a&&(a=ko(a))&&(u=a.g[u.toString()],a=-1,u&&(a=So(u,d,m,A)),(d=-1<a?u[a]:null)&&Co(d))}function Co(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ri])Ao(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(ec(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=ko(u))?(Ao(d,a),d.h==0&&(d.src=null,u[Ro]=null)):Pi(a)}}}function ec(a){return a in Po?Po[a]:Po[a]="on"+a}function Fm(a,u){if(a.da)a=!0;else{u=new wr(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&Co(a),a=d.call(m,u)}return a}function ko(a){return a=a[Ro],a instanceof Ci?a:null}var Vo="__closure_events_fn_"+(1e9*Math.random()>>>0);function tc(a){return typeof a=="function"?a:(a[Vo]||(a[Vo]=function(u){return a.handleEvent(u)}),a[Vo])}function Se(){vt.call(this),this.i=new Ci(this),this.M=this,this.F=null}k(Se,vt),Se.prototype[Ri]=!0,Se.prototype.removeEventListener=function(a,u,d,m){Zl(this,a,u,d,m)};function De(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Ae(u,a);else if(u instanceof Ae)u.target=u.target||a;else{var A=u;u=new Ae(m,a),I(u,A)}if(A=!0,d)for(var V=d.length-1;0<=V;V--){var z=u.g=d[V];A=ki(z,m,!0,u)&&A}if(z=u.g=a,A=ki(z,m,!0,u)&&A,A=ki(z,m,!1,u)&&A,d)for(V=0;V<d.length;V++)z=u.g=d[V],A=ki(z,m,!1,u)&&A}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Pi(d[m]);delete a.g[u],a.h--}}this.F=null},Se.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},Se.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function ki(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,V=0;V<u.length;++V){var z=u[V];if(z&&!z.da&&z.capture==d){var se=z.listener,be=z.ha||z.src;z.fa&&Ao(a.i,z),A=se.call(be,m)!==!1&&A}}return A&&!m.defaultPrevented}function nc(a,u,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function rc(a){a.g=nc(()=>{a.g=null,a.i&&(a.i=!1,rc(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class jm extends vt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:rc(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ir(a){vt.call(this),this.h=a,this.g={}}k(Ir,vt);var ic=[];function sc(a){j(a.g,function(u,d){this.g.hasOwnProperty(d)&&Co(u)},a),a.g={}}Ir.prototype.N=function(){Ir.aa.N.call(this),sc(this)},Ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Do=l.JSON.stringify,Um=l.JSON.parse,Bm=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function No(){}No.prototype.h=null;function oc(a){return a.h||(a.h=a.i())}function ac(){}var Er={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oo(){Ae.call(this,"d")}k(Oo,Ae);function Mo(){Ae.call(this,"c")}k(Mo,Ae);var Gt={},lc=null;function Vi(){return lc=lc||new Se}Gt.La="serverreachability";function cc(a){Ae.call(this,Gt.La,a)}k(cc,Ae);function br(a){const u=Vi();De(u,new cc(u))}Gt.STAT_EVENT="statevent";function uc(a,u){Ae.call(this,Gt.STAT_EVENT,a),this.stat=u}k(uc,Ae);function Ne(a){const u=Vi();De(u,new uc(u,a))}Gt.Ma="timingevent";function hc(a,u){Ae.call(this,Gt.Ma,a),this.size=u}k(hc,Ae);function Tr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function xr(){this.g=!0}xr.prototype.xa=function(){this.g=!1};function zm(a,u,d,m,A,V){a.info(function(){if(a.g)if(V)for(var z="",se=V.split("&"),be=0;be<se.length;be++){var te=se[be].split("=");if(1<te.length){var Re=te[0];te=te[1];var Pe=Re.split("_");z=2<=Pe.length&&Pe[1]=="type"?z+(Re+"="+te+"&"):z+(Re+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+u+`
`+d+`
`+z})}function $m(a,u,d,m,A,V,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+u+`
`+d+`
`+V+" "+z})}function xn(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Gm(a,d)+(m?" "+m:"")})}function qm(a,u){a.info(function(){return"TIMEOUT: "+u})}xr.prototype.info=function(){};function Gm(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var V=A[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<A.length;z++)A[z]=""}}}}return Do(d)}catch{return u}}var Di={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lo;function Ni(){}k(Ni,No),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},Lo=new Ni;function wt(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new Ir(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fc}function fc(){this.i=null,this.g="",this.h=!1}var pc={},Fo={};function jo(a,u,d){a.L=1,a.v=Fi(ot(u)),a.m=d,a.P=!0,mc(a,null)}function mc(a,u){a.F=Date.now(),Oi(a),a.A=ot(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Pc(d.i,"t",m),a.C=0,d=a.j.J,a.h=new fc,a.g=Wc(a.j,d?u:null,!a.m),0<a.O&&(a.M=new jm(_(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(ic[0]=A.toString()),A=ic);for(var V=0;V<A.length;V++){var z=Xl(d,A[V],m||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),br(),zm(a.i,a.u,a.A,a.l,a.R,a.m)}wt.prototype.ca=function(a){a=a.target;const u=this.M;u&&at(a)==3?u.j():this.Y(a)},wt.prototype.Y=function(a){try{if(a==this.g)e:{const Pe=at(this.g);var u=this.g.Ba();const Rn=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||Mc(this.g)))){this.J||Pe!=4||u==7||(u==8||0>=Rn?br(3):br(2)),Uo(this);var d=this.g.Z();this.X=d;t:if(gc(this)){var m=Mc(this.g);a="";var A=m.length,V=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),Ar(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(V&&u==A-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,$m(this.i,this.u,this.A,this.l,this.R,Pe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var se,be=this.g;if((se=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(se)){var te=se;break t}}te=null}if(d=te)xn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bo(this,d);else{this.o=!1,this.s=3,Ne(12),Kt(this),Ar(this);break e}}if(this.P){d=!0;let He;for(;!this.J&&this.C<z.length;)if(He=Km(this,z),He==Fo){Pe==4&&(this.s=4,Ne(14),d=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(He==pc){this.s=4,Ne(15),xn(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else xn(this.i,this.l,He,null),Bo(this,He);if(gc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||z.length!=0||this.h.h||(this.s=1,Ne(16),d=!1),this.o=this.o&&d,!d)xn(this.i,this.l,z,"[Invalid Chunked Response]"),Kt(this),Ar(this);else if(0<z.length&&!this.W){this.W=!0;var Re=this.j;Re.g==this&&Re.ba&&!Re.M&&(Re.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Wo(Re),Re.M=!0,Ne(11))}}else xn(this.i,this.l,z,null),Bo(this,z);Pe==4&&Kt(this),this.o&&!this.J&&(Pe==4?$c(this.j,this):(this.o=!1,Oi(this)))}else cg(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),Kt(this),Ar(this)}}}catch{}finally{}};function gc(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Km(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Fo:(d=Number(u.substring(d,m)),isNaN(d)?pc:(m+=1,m+d>u.length?Fo:(u=u.slice(m,m+d),a.C=m+d,u)))}wt.prototype.cancel=function(){this.J=!0,Kt(this)};function Oi(a){a.S=Date.now()+a.I,_c(a,a.I)}function _c(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Tr(_(a.ba,a),u)}function Uo(a){a.B&&(l.clearTimeout(a.B),a.B=null)}wt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(qm(this.i,this.A),this.L!=2&&(br(),Ne(17)),Kt(this),this.s=2,Ar(this)):_c(this,this.S-a)};function Ar(a){a.j.G==0||a.J||$c(a.j,a)}function Kt(a){Uo(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,sc(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Bo(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||zo(d.h,a))){if(!a.K&&zo(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)qi(d),zi(d);else break e;Ko(d),Ne(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Tr(_(d.Za,d),6e3));if(1>=wc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ht(d,11)}else if((a.K||d.g==a)&&qi(d),!B(u))for(A=d.Da.g.parse(u),u=0;u<A.length;u++){let te=A[u];if(d.T=te[0],te=te[1],d.G==2)if(te[0]=="c"){d.K=te[1],d.ia=te[2];const Re=te[3];Re!=null&&(d.la=Re,d.j.info("VER="+d.la));const Pe=te[4];Pe!=null&&(d.Aa=Pe,d.j.info("SVER="+d.Aa));const Rn=te[5];Rn!=null&&typeof Rn=="number"&&0<Rn&&(m=1.5*Rn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const He=a.g;if(He){const Ki=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ki){var V=m.h;V.g||Ki.indexOf("spdy")==-1&&Ki.indexOf("quic")==-1&&Ki.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&($o(V,V.h),V.h=null))}if(m.D){const Ho=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;Ho&&(m.ya=Ho,ae(m.I,m.D,Ho))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var z=a;if(m.qa=Kc(m,m.J?m.ia:null,m.W),z.K){Ic(m.h,z);var se=z,be=m.L;be&&(se.I=be),se.B&&(Uo(se),Oi(se)),m.g=z}else Bc(m);0<d.i.length&&$i(d)}else te[0]!="stop"&&te[0]!="close"||Ht(d,7);else d.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?Ht(d,7):Go(d):te[0]!="noop"&&d.l&&d.l.ta(te),d.v=0)}}br(4)}catch{}}var Wm=class{constructor(a,u){this.g=a,this.map=u}};function yc(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function wc(a){return a.h?1:a.g?a.g.size:0}function zo(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function $o(a,u){a.g?a.g.add(u):a.h=u}function Ic(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}yc.prototype.cancel=function(){if(this.i=Ec(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ec(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return C(a.i)}function Hm(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function Qm(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function bc(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Qm(a),m=Hm(a),A=m.length,V=0;V<A;V++)u.call(void 0,m[V],d&&d[V],a)}var Tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jm(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),A=null;if(0<=m){var V=a[d].substring(0,m);A=a[d].substring(m+1)}else V=a[d];u(V,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Wt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Wt){this.h=a.h,Mi(this,a.j),this.o=a.o,this.g=a.g,Li(this,a.s),this.l=a.l;var u=a.i,d=new Pr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),xc(this,d),this.m=a.m}else a&&(u=String(a).match(Tc))?(this.h=!1,Mi(this,u[1]||"",!0),this.o=Sr(u[2]||""),this.g=Sr(u[3]||"",!0),Li(this,u[4]),this.l=Sr(u[5]||"",!0),xc(this,u[6]||"",!0),this.m=Sr(u[7]||"")):(this.h=!1,this.i=new Pr(null,this.h))}Wt.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Rr(u,Ac,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Rr(u,Ac,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Rr(d,d.charAt(0)=="/"?Zm:Xm,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Rr(d,tg)),a.join("")};function ot(a){return new Wt(a)}function Mi(a,u,d){a.j=d?Sr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Li(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function xc(a,u,d){u instanceof Pr?(a.i=u,ng(a.i,a.h)):(d||(u=Rr(u,eg)),a.i=new Pr(u,a.h))}function ae(a,u,d){a.i.set(u,d)}function Fi(a){return ae(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Sr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Rr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Ym),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ym(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ac=/[#\/\?@]/g,Xm=/[#\?:]/g,Zm=/[#\?]/g,eg=/[#\?@]/g,tg=/#/g;function Pr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function It(a){a.g||(a.g=new Map,a.h=0,a.i&&Jm(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Pr.prototype,r.add=function(a,u){It(this),this.i=null,a=An(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Sc(a,u){It(a),u=An(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Rc(a,u){return It(a),u=An(a,u),a.g.has(u)}r.forEach=function(a,u){It(this),this.g.forEach(function(d,m){d.forEach(function(A){a.call(u,A,m,this)},this)},this)},r.na=function(){It(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const A=a[m];for(let V=0;V<A.length;V++)d.push(u[m])}return d},r.V=function(a){It(this);let u=[];if(typeof a=="string")Rc(this,a)&&(u=u.concat(this.g.get(An(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return It(this),this.i=null,a=An(this,a),Rc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Pc(a,u,d){Sc(a,u),0<d.length&&(a.i=null,a.g.set(An(a,u),C(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const V=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var A=V;z[m]!==""&&(A+="="+encodeURIComponent(String(z[m]))),a.push(A)}}return this.i=a.join("&")};function An(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ng(a,u){u&&!a.j&&(It(a),a.i=null,a.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(Sc(this,m),Pc(this,A,d))},a)),a.j=u}function rg(a,u){const d=new xr;if(l.Image){const m=new Image;m.onload=b(Et,d,"TestLoadImage: loaded",!0,u,m),m.onerror=b(Et,d,"TestLoadImage: error",!1,u,m),m.onabort=b(Et,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=b(Et,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function ig(a,u){const d=new xr,m=new AbortController,A=setTimeout(()=>{m.abort(),Et(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(A),V.ok?Et(d,"TestPingServer: ok",!0,u):Et(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Et(d,"TestPingServer: error",!1,u)})}function Et(a,u,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function sg(){this.g=new Bm}function og(a,u,d){const m=d||"";try{bc(a,function(A,V){let z=A;h(A)&&(z=Do(A)),u.push(m+V+"="+encodeURIComponent(z))})}catch(A){throw u.push(m+"type="+encodeURIComponent("_badmap")),A}}function ji(a){this.l=a.Ub||null,this.j=a.eb||!1}k(ji,No),ji.prototype.g=function(){return new Ui(this.l,this.j)},ji.prototype.i=function(a){return function(){return a}}({});function Ui(a,u){Se.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ui,Se),r=Ui.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,kr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cc(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cc(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Cr(this):kr(this),this.readyState==3&&Cc(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Cr(this))},r.Qa=function(a){this.g&&(this.response=a,Cr(this))},r.ga=function(){this.g&&Cr(this)};function Cr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,kr(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function kr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function kc(a){let u="";return j(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function qo(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=kc(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ae(a,u,d))}function de(a){Se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(de,Se);var ag=/^https?$/i,lg=["POST","PUT"];r=de.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lo.g(),this.v=this.o?oc(this.o):oc(Lo),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(V){Vc(this,V);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())d.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),A=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(lg,u,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of d)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Oc(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Vc(this,V)}};function Vc(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Dc(a),Bi(a)}function Dc(a){a.A||(a.A=!0,De(a,"complete"),De(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,De(this,"complete"),De(this,"abort"),Bi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bi(this,!0)),de.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Nc(this):this.bb())},r.bb=function(){Nc(this)};function Nc(a){if(a.h&&typeof o<"u"&&(!a.v[1]||at(a)!=4||a.Z()!=2)){if(a.u&&at(a)==4)nc(a.Ea,0,a);else if(De(a,"readystatechange"),at(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=z===0){var A=String(a.D).match(Tc)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),m=!ag.test(A?A.toLowerCase():"")}d=m}if(d)De(a,"complete"),De(a,"success");else{a.m=6;try{var V=2<at(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Dc(a)}}finally{Bi(a)}}}}function Bi(a,u){if(a.g){Oc(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||De(a,"ready");try{d.onreadystatechange=m}catch{}}}function Oc(a){a.I&&(l.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function at(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Um(u)}};function Mc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cg(a){const u={};a=(a.g&&2<=at(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(B(a[m]))continue;var d=T(a[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[A]||[];u[A]=V,V.push(d)}E(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vr(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Lc(a){this.Aa=0,this.i=[],this.j=new xr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vr("baseRetryDelayMs",5e3,a),this.cb=Vr("retryDelaySeedMs",1e4,a),this.Wa=Vr("forwardChannelMaxRetries",2,a),this.wa=Vr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new yc(a&&a.concurrentRequestLimit),this.Da=new sg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Lc.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,m){Ne(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Kc(this,null,this.W),$i(this)};function Go(a){if(Fc(a),a.G==3){var u=a.U++,d=ot(a.I);if(ae(d,"SID",a.K),ae(d,"RID",u),ae(d,"TYPE","terminate"),Dr(a,d),u=new wt(a,a.j,u),u.L=2,u.v=Fi(ot(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Wc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Oi(u)}Gc(a)}function zi(a){a.g&&(Wo(a),a.g.cancel(),a.g=null)}function Fc(a){zi(a),a.u&&(l.clearTimeout(a.u),a.u=null),qi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function $i(a){if(!vc(a.h)&&!a.s){a.s=!0;var u=a.Ga;yr||Yl(),vr||(yr(),vr=!0),xo.add(u,a),a.B=0}}function ug(a,u){return wc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Tr(_(a.Ga,a,u),qc(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new wt(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(A.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Uc(this,A,u),d=ot(this.I),ae(d,"RID",a),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),Dr(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(kc(V)))+"&"+u:this.m&&qo(d,this.m,V)),$o(this.h,A),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",u),ae(d,"SID","null"),A.T=!0,jo(A,d,null)):jo(A,d,u),this.G=2}}else this.G==3&&(a?jc(this,a):this.i.length==0||vc(this.h)||jc(this))};function jc(a,u){var d;u?d=u.l:d=a.U++;const m=ot(a.I);ae(m,"SID",a.K),ae(m,"RID",d),ae(m,"AID",a.T),Dr(a,m),a.m&&a.o&&qo(m,a.m,a.o),d=new wt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Uc(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),$o(a.h,d),jo(d,m,u)}function Dr(a,u){a.H&&j(a.H,function(d,m){ae(u,m,d)}),a.l&&bc({},function(d,m){ae(u,m,d)})}function Uc(a,u,d){d=Math.min(a.i.length,d);var m=a.l?_(a.l.Na,a.l,a):null;e:{var A=a.i;let V=-1;for(;;){const z=["count="+d];V==-1?0<d?(V=A[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let se=!0;for(let be=0;be<d;be++){let te=A[be].g;const Re=A[be].map;if(te-=V,0>te)V=Math.max(0,A[be].g-100),se=!1;else try{og(Re,z,"req"+te+"_")}catch{m&&m(Re)}}if(se){m=z.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Bc(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;yr||Yl(),vr||(yr(),vr=!0),xo.add(u,a),a.v=0}}function Ko(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Tr(_(a.Fa,a),qc(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,zc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Tr(_(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),zi(this),zc(this))};function Wo(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function zc(a){a.g=new wt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ot(a.qa);ae(u,"RID","rpc"),ae(u,"SID",a.K),ae(u,"AID",a.T),ae(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ae(u,"TO",a.ja),ae(u,"TYPE","xmlhttp"),Dr(a,u),a.m&&a.o&&qo(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Fi(ot(u)),d.m=null,d.P=!0,mc(d,a)}r.Za=function(){this.C!=null&&(this.C=null,zi(this),Ko(this),Ne(19))};function qi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function $c(a,u){var d=null;if(a.g==u){qi(a),Wo(a),a.g=null;var m=2}else if(zo(a.h,u))d=u.D,Ic(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;m=Vi(),De(m,new hc(m,d)),$i(a)}else Bc(a);else if(A=u.s,A==3||A==0&&0<u.X||!(m==1&&ug(a,u)||m==2&&Ko(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),A){case 1:Ht(a,5);break;case 4:Ht(a,10);break;case 3:Ht(a,6);break;default:Ht(a,2)}}}function qc(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Ht(a,u){if(a.j.info("Error code "+u),u==2){var d=_(a.fb,a),m=a.Xa;const A=!m;m=new Wt(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Mi(m,"https"),Fi(m),A?rg(m.toString(),d):ig(m.toString(),d)}else Ne(2);a.G=0,a.l&&a.l.sa(u),Gc(a),Fc(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function Gc(a){if(a.G=0,a.ka=[],a.l){const u=Ec(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ka,u),P(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Kc(a,u,d){var m=d instanceof Wt?ot(d):new Wt(d);if(m.g!="")u&&(m.g=u+"."+m.g),Li(m,m.s);else{var A=l.location;m=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var V=new Wt(null);m&&Mi(V,m),u&&(V.g=u),A&&Li(V,A),d&&(V.l=d),m=V}return d=a.D,u=a.ya,d&&u&&ae(m,d,u),ae(m,"VER",a.la),Dr(a,m),m}function Wc(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new de(new ji({eb:d})):new de(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hc(){}r=Hc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Gi(){}Gi.prototype.g=function(a,u){return new qe(a,u)};function qe(a,u){Se.call(this),this.g=new Lc(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Sn(this)}k(qe,Se),qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){Go(this.g)},qe.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Do(a),a=d);u.i.push(new Wm(u.Ya++,a)),u.G==3&&$i(u)},qe.prototype.N=function(){this.g.l=null,delete this.j,Go(this.g),delete this.g,qe.aa.N.call(this)};function Qc(a){Oo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(Qc,Oo);function Jc(){Mo.call(this),this.status=1}k(Jc,Mo);function Sn(a){this.g=a}k(Sn,Hc),Sn.prototype.ua=function(){De(this.g,"a")},Sn.prototype.ta=function(a){De(this.g,new Qc(a))},Sn.prototype.sa=function(a){De(this.g,new Jc)},Sn.prototype.ra=function(){De(this.g,"b")},Gi.prototype.createWebChannel=Gi.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,Md=function(){return new Gi},Od=function(){return Vi()},Nd=Gt,Ia={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Di.NO_ERROR=0,Di.TIMEOUT=8,Di.HTTP_ERROR=6,rs=Di,dc.COMPLETE="complete",Dd=dc,ac.EventType=Er,Er.OPEN="a",Er.CLOSE="b",Er.ERROR="c",Er.MESSAGE="d",Se.prototype.listen=Se.prototype.K,Br=ac,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha,Vd=de}).apply(typeof Wi<"u"?Wi:typeof self<"u"?self:typeof window<"u"?window:{});const _u="@firebase/firestore";/**
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
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
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
 */let fr="10.14.0";/**
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
 */const hn=new Qa("@firebase/firestore");function On(){return hn.logLevel}function L(r,...e){if(hn.logLevel<=X.DEBUG){const t=e.map(Xa);hn.debug(`Firestore (${fr}): ${r}`,...t)}}function pe(r,...e){if(hn.logLevel<=X.ERROR){const t=e.map(Xa);hn.error(`Firestore (${fr}): ${r}`,...t)}}function Hn(r,...e){if(hn.logLevel<=X.WARN){const t=e.map(Xa);hn.warn(`Firestore (${fr}): ${r}`,...t)}}function Xa(r){if(typeof r=="string")return r;try{/**
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
 */function G(r="Unexpected state"){const e=`FIRESTORE (${fr}) INTERNAL ASSERTION FAILED: `+r;throw pe(e),new Error(e)}function W(r,e){r||G()}function K(r,e){return r}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ld{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class Uy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class By{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let s=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string"),new Ld(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new Ee(e)}}class zy{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $y{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new zy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){W(this.o===void 0);const n=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string"),this.R=t.token,new qy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ky(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Fd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Ky(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function J(r,e){return r<e?-1:r>e?1:0}function Qn(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function jd(r){return r+"\0"}/**
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
 */class he{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new $(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new he(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class si{constructor(e,t,n){t===void 0?t=0:t>e.length&&G(),n===void 0?n=e.length-t:n>e.length-t&&G(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return si.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof si?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ne extends si{construct(e,t,n){return new ne(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new $(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const Wy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ue extends si{construct(e,t,n){return new ue(e,t,n)}static isValidIdentifier(e){return Wy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ue(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new $(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(n+=l,i++):(s(),i++)}if(s(),o)throw new $(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ue(t)}static emptyPath(){return new ue([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ne.fromString(e))}static fromName(e){return new q(ne.fromString(e).popFirst(5))}static empty(){return new q(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ne(e.slice()))}}/**
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
 */class bs{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function Ea(r){return r.fields.find(e=>e.kind===2)}function Yt(r){return r.fields.filter(e=>e.kind!==2)}bs.UNKNOWN_ID=-1;class is{constructor(e,t){this.fieldPath=e,this.kind=t}}class oi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new oi(0,We.min())}}function Ud(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=H.fromTimestamp(n===1e9?new he(t+1,0):new he(t,n));return new We(i,q.empty(),e)}function Bd(r){return new We(r.readTime,r.key,-1)}class We{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new We(H.min(),q.empty(),-1)}static max(){return new We(H.max(),q.empty(),-1)}}function Za(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(r.documentKey,e.documentKey),t!==0?t:J(r.largestBatchId,e.largestBatchId))}/**
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
 */const zd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $d{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Bt(r){if(r.code!==D.FAILED_PRECONDITION||r.message!==zd)throw r;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,n)=>{t(e)})}static reject(e){return new S((t,n)=>{n(e)})}static waitFor(e){return new S((t,n)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},c=>n(c))}),o=!0,s===i&&t()})}static or(e){let t=S.resolve(!1);for(const n of e)t=t.next(i=>i?S.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new S((n,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(f=>{o[h]=f,++l,l===s&&n(o)},f=>i(f))}})}static doWhile(e,t){return new S((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
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
 */class Qs{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new nt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Hr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=el(n.target.error);this.V.reject(new Hr(e,i))}}static open(e,t,n,i){try{return new Qs(t,e.transaction(i,n))}catch(s){throw new Hr(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(L("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Qy(t)}}class Ot{constructor(e,t,n){this.name=e,this.version=t,this.p=n,Ot.S(ve())===12.2&&pe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return L("SimpleDb","Removing database:",e),Zt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!xd())return!1;if(Ot.v())return!0;const e=ve(),t=Ot.S(e),n=0<t&&t<10,i=qd(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(L("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{n(new Hr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new $(D.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new $(D.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Hr(e,o))},i.onupgradeneeded=s=>{L("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{L("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const l=Qs.open(this.db,e,s?"readonly":"readwrite",n),c=i(l).next(h=>(l.g(),h)).catch(h=>(l.abort(h),S.reject(h))).toPromise();return c.catch(()=>{}),await l.m,c}catch(l){const c=l,h=c.name!=="FirebaseError"&&o<3;if(L("SimpleDb","Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function qd(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Hy{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Zt(this.B.delete())}}class Hr extends ${constructor(e,t){super(D.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function zt(r){return r.name==="IndexedDbTransactionError"}class Qy{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(L("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(L("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Zt(n)}add(e){return L("SimpleDb","ADD",this.store.name,e,e),Zt(this.store.add(e))}get(e){return Zt(this.store.get(e)).next(t=>(t===void 0&&(t=null),L("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return L("SimpleDb","DELETE",this.store.name,e),Zt(this.store.delete(e))}count(){return L("SimpleDb","COUNT",this.store.name),Zt(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new S((o,l)=>{s.onerror=c=>{l(c.target.error)},s.onsuccess=c=>{o(c.target.result)}})}{const s=this.cursor(n),o=[];return this.W(s,(l,c)=>{o.push(c)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new S((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}})}j(e,t){L("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,(s,o,l)=>l.delete())}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new S((n,i)=>{t.onerror=s=>{const o=el(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():n()}):n()}})}W(e,t){const n=[];return new S((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void i();const c=new Hy(l),h=t(l.primaryKey,l.value,c);if(h instanceof S){const f=h.catch(p=>(c.done(),S.reject(p)));n.push(f)}c.isDone?i():c.K===null?l.continue():l.continue(c.K)}}).next(()=>S.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Zt(r){return new S((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=el(n.target.error);t(i)}})}let yu=!1;function el(r){const e=Ot.S(ve());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new $("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return yu||(yu=!0,setTimeout(()=>{throw n},0)),n}}return r}class Jy{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){L("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{L("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){zt(t)?L("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Bt(t)}await this.X(6e4)})}}class Yy{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let i=t,s=!0;return S.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return L("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(l=>{i-=l,n.add(o)});s=!1})).next(()=>t-i)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(l=>(L("IndexBackfiller",`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((i,s)=>{const o=Bd(s);Za(o,n)>0&&(n=o)}),new We(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ue{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ue.oe=-1;function Js(r){return r==null}function ai(r){return r===0&&1/r==-1/0}function Gd(r){return typeof r=="number"&&Number.isInteger(r)&&!ai(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Oe(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=vu(e)),e=Xy(r.get(t),e);return vu(e)}function Xy(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function vu(r){return r+""}function et(r){const e=r.length;if(W(e>=2),e===2)return W(r.charAt(0)===""&&r.charAt(1)===""),ne.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const o=r.indexOf("",s);switch((o<0||o>t)&&G(),r.charAt(o+1)){case"":const l=r.substring(s,o);let c;i.length===0?c=l:(i+=l,c=i,i=""),n.push(c);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:G()}s=o+2}return new ne(n)}/**
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
 */const wu=["userId","batchId"];/**
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
 */function ss(r,e){return[r,Oe(e)]}function Kd(r,e,t){return[r,Oe(e),t]}const Zy={},ev=["prefixPath","collectionGroup","readTime","documentId"],tv=["prefixPath","collectionGroup","documentId"],nv=["collectionGroup","readTime","prefixPath","documentId"],rv=["canonicalId","targetId"],iv=["targetId","path"],sv=["path","targetId"],ov=["collectionId","parent"],av=["indexId","uid"],lv=["uid","sequenceNumber"],cv=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],uv=["indexId","uid","orderedDocumentKey"],hv=["userId","collectionPath","documentId"],dv=["userId","collectionPath","largestBatchId"],fv=["userId","collectionGroup","largestBatchId"],Wd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],pv=[...Wd,"documentOverlays"],Hd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Qd=Hd,tl=[...Qd,"indexConfiguration","indexState","indexEntries"],mv=tl,gv=[...tl,"globals"];/**
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
 */class ba extends $d{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function we(r,e){const t=K(r);return Ot.F(t._e,e)}/**
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
 */function Iu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function vn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Jd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class oe{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hi(this.root,e,this.comparator,!0)}}class Hi{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??Te.RED,this.left=i??Te.EMPTY,this.right=s??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Te(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ie{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Eu(this.data.getIterator())}getIteratorFrom(e){return new Eu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ie(this.comparator);return t.data=e,t}}class Eu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Pn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Be{constructor(e){this.fields=e,e.sort(ue.comparator)}static empty(){return new Be([])}unionWith(e){let t=new ie(ue.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class Yd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Yd("Invalid base64 string: "+s):s}}(e);return new ge(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const _v=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(r){if(W(!!r),typeof r=="string"){let e=0;const t=_v.exec(r);if(W(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ce(r.seconds),nanos:ce(r.nanos)}}function ce(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ft(r){return typeof r=="string"?ge.fromBase64String(r):ge.fromUint8Array(r)}/**
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
 */function nl(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function rl(r){const e=r.mapValue.fields.__previous_value__;return nl(e)?rl(e):e}function li(r){const e=mt(r.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class yv{constructor(e,t,n,i,s,o,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class dn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new dn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof dn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const kt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},os={nullValue:"NULL_VALUE"};function fn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?nl(r)?4:Xd(r)?9007199254740991:Ys(r)?10:11:G()}function it(r,e){if(r===e)return!0;const t=fn(r);if(t!==fn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return li(r).isEqual(li(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mt(i.timestampValue),l=mt(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return Ft(i.bytesValue).isEqual(Ft(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return ce(i.geoPointValue.latitude)===ce(s.geoPointValue.latitude)&&ce(i.geoPointValue.longitude)===ce(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ce(i.integerValue)===ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ce(i.doubleValue),l=ce(s.doubleValue);return o===l?ai(o)===ai(l):isNaN(o)&&isNaN(l)}return!1}(r,e);case 9:return Qn(r.arrayValue.values||[],e.arrayValue.values||[],it);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Iu(o)!==Iu(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!it(o[c],l[c])))return!1;return!0}(r,e);default:return G()}}function ci(r,e){return(r.values||[]).find(t=>it(t,e))!==void 0}function jt(r,e){if(r===e)return 0;const t=fn(r),n=fn(e);if(t!==n)return J(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(r.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ce(s.integerValue||s.doubleValue),c=ce(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(r,e);case 3:return bu(r.timestampValue,e.timestampValue);case 4:return bu(li(r),li(e));case 5:return J(r.stringValue,e.stringValue);case 6:return function(s,o){const l=Ft(s),c=Ft(o);return l.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=J(l[h],c[h]);if(f!==0)return f}return J(l.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,o){const l=J(ce(s.latitude),ce(o.latitude));return l!==0?l:J(ce(s.longitude),ce(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Tu(r.arrayValue,e.arrayValue);case 10:return function(s,o){var l,c,h,f;const p=s.fields||{},_=o.fields||{},b=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=(c=_.value)===null||c===void 0?void 0:c.arrayValue,C=J(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:Tu(b,k)}(r.mapValue,e.mapValue);case 11:return function(s,o){if(s===kt.mapValue&&o===kt.mapValue)return 0;if(s===kt.mapValue)return 1;if(o===kt.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const _=J(c[p],f[p]);if(_!==0)return _;const b=jt(l[c[p]],h[f[p]]);if(b!==0)return b}return J(c.length,f.length)}(r.mapValue,e.mapValue);default:throw G()}}function bu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return J(r,e);const t=mt(r),n=mt(e),i=J(t.seconds,n.seconds);return i!==0?i:J(t.nanos,n.nanos)}function Tu(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=jt(t[i],n[i]);if(s)return s}return J(t.length,n.length)}function Jn(r){return Ta(r)}function Ta(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=mt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ft(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return q.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Ta(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${Ta(t.fields[o])}`;return i+"}"}(r.mapValue):G()}function ui(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function xa(r){return!!r&&"integerValue"in r}function hi(r){return!!r&&"arrayValue"in r}function xu(r){return!!r&&"nullValue"in r}function Au(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function as(r){return!!r&&"mapValue"in r}function Ys(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Qr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return vn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Qr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Xd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Zd={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function vv(r){return"nullValue"in r?os:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?ui(dn.empty(),q.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Ys(r)?Zd:{mapValue:{}}:G()}function wv(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?ui(dn.empty(),q.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Zd:"mapValue"in r?Ys(r)?{mapValue:{}}:kt:G()}function Su(r,e){const t=jt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Ru(r,e){const t=jt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!as(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qr(t)}setAll(e){let t=ue.emptyPath(),n={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,i),n={},i=[],t=l.popLast()}o?n[l.lastSegment()]=Qr(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());as(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];as(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){vn(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new ke(Qr(this.value))}}function ef(r){const e=[];return vn(r.fields,(t,n)=>{const i=new ue([t]);if(as(n)){const s=ef(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Be(e)}/**
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
 */class Yn{constructor(e,t){this.position=e,this.inclusive=t}}function Pu(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=q.comparator(q.fromName(o.referenceValue),t.key):n=jt(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Cu(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!it(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ts{constructor(e,t="asc"){this.field=e,this.dir=t}}function Iv(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class tf{}class Z extends tf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Ev(e,t,n):t==="array-contains"?new xv(e,n):t==="in"?new lf(e,n):t==="not-in"?new Av(e,n):t==="array-contains-any"?new Sv(e,n):new Z(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new bv(e,n):new Tv(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(jt(t,this.value)):t!==null&&fn(this.value)===fn(t)&&this.matchesComparison(jt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends tf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new re(e,t)}matches(e){return Xn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xn(r){return r.op==="and"}function Aa(r){return r.op==="or"}function il(r){return nf(r)&&Xn(r)}function nf(r){for(const e of r.filters)if(e instanceof re)return!1;return!0}function Sa(r){if(r instanceof Z)return r.field.canonicalString()+r.op.toString()+Jn(r.value);if(il(r))return r.filters.map(e=>Sa(e)).join(",");{const e=r.filters.map(t=>Sa(t)).join(",");return`${r.op}(${e})`}}function rf(r,e){return r instanceof Z?function(n,i){return i instanceof Z&&n.op===i.op&&n.field.isEqual(i.field)&&it(n.value,i.value)}(r,e):r instanceof re?function(n,i){return i instanceof re&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,l)=>s&&rf(o,i.filters[l]),!0):!1}(r,e):void G()}function sf(r,e){const t=r.filters.concat(e);return re.create(t,r.op)}function of(r){return r instanceof Z?function(t){return`${t.field.canonicalString()} ${t.op} ${Jn(t.value)}`}(r):r instanceof re?function(t){return t.op.toString()+" {"+t.getFilters().map(of).join(" ,")+"}"}(r):"Filter"}class Ev extends Z{constructor(e,t,n){super(e,t,n),this.key=q.fromName(n.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class bv extends Z{constructor(e,t){super(e,"in",t),this.keys=af("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Tv extends Z{constructor(e,t){super(e,"not-in",t),this.keys=af("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function af(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>q.fromName(n.referenceValue))}class xv extends Z{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hi(t)&&ci(t.arrayValue,this.value)}}class lf extends Z{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ci(this.value.arrayValue,t)}}class Av extends Z{constructor(e,t){super(e,"not-in",t)}matches(e){if(ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ci(this.value.arrayValue,t)}}class Sv extends Z{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ci(this.value.arrayValue,n))}}/**
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
 */class Rv{constructor(e,t=null,n=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Ra(r,e=null,t=[],n=[],i=null,s=null,o=null){return new Rv(r,e,t,n,i,s,o)}function pn(r){const e=K(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Sa(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Js(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Jn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Jn(n)).join(",")),e.ue=t}return e.ue}function _i(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Iv(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!rf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Cu(r.startAt,e.startAt)&&Cu(r.endAt,e.endAt)}function xs(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function As(r,e){return r.filters.filter(t=>t instanceof Z&&t.field.isEqual(e))}function ku(r,e,t){let n=os,i=!0;for(const s of As(r,e)){let o=os,l=!0;switch(s.op){case"<":case"<=":o=vv(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,l=!1;break;case"!=":case"not-in":o=os}Su({value:n,inclusive:i},{value:o,inclusive:l})<0&&(n=o,i=l)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];Su({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function Vu(r,e,t){let n=kt,i=!0;for(const s of As(r,e)){let o=kt,l=!0;switch(s.op){case">=":case">":o=wv(s.value),l=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,l=!1;break;case"!=":case"not-in":o=kt}Ru({value:n,inclusive:i},{value:o,inclusive:l})>0&&(n=o,i=l)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];Ru({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
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
 */class yi{constructor(e,t=null,n=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cf(r,e,t,n,i,s,o,l){return new yi(r,e,t,n,i,s,o,l)}function Xs(r){return new yi(r)}function Du(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function uf(r){return r.collectionGroup!==null}function Jr(r){const e=K(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ie(ue.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ts(s,n))}),t.has(ue.keyField().canonicalString())||e.ce.push(new Ts(ue.keyField(),n))}return e.ce}function Ke(r){const e=K(r);return e.le||(e.le=Pv(e,Jr(r))),e.le}function Pv(r,e){if(r.limitType==="F")return Ra(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ts(i.field,s)});const t=r.endAt?new Yn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Yn(r.startAt.position,r.startAt.inclusive):null;return Ra(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Pa(r,e){const t=r.filters.concat([e]);return new yi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Ss(r,e,t){return new yi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Zs(r,e){return _i(Ke(r),Ke(e))&&r.limitType===e.limitType}function hf(r){return`${pn(Ke(r))}|lt:${r.limitType}`}function Mn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>of(i)).join(", ")}]`),Js(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Jn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Jn(i)).join(",")),`Target(${n})`}(Ke(r))}; limitType=${r.limitType})`}function vi(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):q.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of Jr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(o,l,c){const h=Pu(o,l,c);return o.inclusive?h<=0:h<0}(n.startAt,Jr(n),i)||n.endAt&&!function(o,l,c){const h=Pu(o,l,c);return o.inclusive?h>=0:h>0}(n.endAt,Jr(n),i))}(r,e)}function df(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ff(r){return(e,t)=>{let n=!1;for(const i of Jr(r)){const s=Cv(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Cv(r,e,t){const n=r.field.isKeyField()?q.comparator(e.key,t.key):function(s,o,l){const c=o.data.field(s),h=l.data.field(s);return c!==null&&h!==null?jt(c,h):G()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return G()}}/**
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
 */class $t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vn(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return Jd(this.inner)}size(){return this.innerSize}}/**
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
 */const kv=new oe(q.comparator);function Ge(){return kv}const pf=new oe(q.comparator);function zr(...r){let e=pf;for(const t of r)e=e.insert(t.key,t);return e}function mf(r){let e=pf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function tt(){return Yr()}function gf(){return Yr()}function Yr(){return new $t(r=>r.toString(),(r,e)=>r.isEqual(e))}const Vv=new oe(q.comparator),Dv=new ie(q.comparator);function Y(...r){let e=Dv;for(const t of r)e=e.add(t);return e}const Nv=new ie(J);function sl(){return Nv}/**
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
 */function ol(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ai(e)?"-0":e}}function _f(r){return{integerValue:""+r}}function Ov(r,e){return Gd(e)?_f(e):ol(r,e)}/**
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
 */class eo{constructor(){this._=void 0}}function Mv(r,e,t){return r instanceof Zn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&nl(s)&&(s=rl(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):r instanceof er?vf(r,e):r instanceof tr?wf(r,e):function(i,s){const o=yf(i,s),l=Nu(o)+Nu(i.Pe);return xa(o)&&xa(i.Pe)?_f(l):ol(i.serializer,l)}(r,e)}function Lv(r,e,t){return r instanceof er?vf(r,e):r instanceof tr?wf(r,e):t}function yf(r,e){return r instanceof di?function(n){return xa(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class Zn extends eo{}class er extends eo{constructor(e){super(),this.elements=e}}function vf(r,e){const t=If(e);for(const n of r.elements)t.some(i=>it(i,n))||t.push(n);return{arrayValue:{values:t}}}class tr extends eo{constructor(e){super(),this.elements=e}}function wf(r,e){let t=If(e);for(const n of r.elements)t=t.filter(i=>!it(i,n));return{arrayValue:{values:t}}}class di extends eo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Nu(r){return ce(r.integerValue||r.doubleValue)}function If(r){return hi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Ef{constructor(e,t){this.field=e,this.transform=t}}function Fv(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof er&&i instanceof er||n instanceof tr&&i instanceof tr?Qn(n.elements,i.elements,it):n instanceof di&&i instanceof di?it(n.Pe,i.Pe):n instanceof Zn&&i instanceof Zn}(r.transform,e.transform)}class jv{constructor(e,t){this.version=e,this.transformResults=t}}class Ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ls(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class to{}function bf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new no(r.key,Ve.none()):new pr(r.key,r.data,Ve.none());{const t=r.data,n=ke.empty();let i=new ie(ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new yt(r.key,n,new Be(i.toArray()),Ve.none())}}function Uv(r,e,t){r instanceof pr?function(i,s,o){const l=i.value.clone(),c=Mu(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):r instanceof yt?function(i,s,o){if(!ls(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Mu(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Tf(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Xr(r,e,t,n){return r instanceof pr?function(s,o,l,c){if(!ls(s.precondition,o))return l;const h=s.value.clone(),f=Lu(s.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof yt?function(s,o,l,c){if(!ls(s.precondition,o))return l;const h=Lu(s.fieldTransforms,c,o),f=o.data;return f.setAll(Tf(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(s,o,l){return ls(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(r,e,t)}function Bv(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=yf(n.transform,i||null);s!=null&&(t===null&&(t=ke.empty()),t.set(n.field,s))}return t||null}function Ou(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Qn(n,i,(s,o)=>Fv(s,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class pr extends to{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yt extends to{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Tf(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Mu(r,e,t){const n=new Map;W(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,l=e.data.field(s.field);n.set(s.field,Lv(o,l,t[i]))}return n}function Lu(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,Mv(s,o,e))}return n}class no extends to{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xf extends to{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class al{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Uv(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Xr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Xr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=gf();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const c=bf(o,l);c!==null&&n.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Y())}isEqual(e){return this.batchId===e.batchId&&Qn(this.mutations,e.mutations,(t,n)=>Ou(t,n))&&Qn(this.baseMutations,e.baseMutations,(t,n)=>Ou(t,n))}}class ll{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){W(e.mutations.length===n.length);let i=function(){return Vv}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new ll(e,t,n,i)}}/**
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
 */let cl=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var _e,ee;function $v(r){switch(r){default:return G();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Af(r){if(r===void 0)return pe("GRPC error has no .code"),D.UNKNOWN;switch(r){case _e.OK:return D.OK;case _e.CANCELLED:return D.CANCELLED;case _e.UNKNOWN:return D.UNKNOWN;case _e.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case _e.INTERNAL:return D.INTERNAL;case _e.UNAVAILABLE:return D.UNAVAILABLE;case _e.UNAUTHENTICATED:return D.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case _e.NOT_FOUND:return D.NOT_FOUND;case _e.ALREADY_EXISTS:return D.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return D.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case _e.ABORTED:return D.ABORTED;case _e.OUT_OF_RANGE:return D.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return D.UNIMPLEMENTED;case _e.DATA_LOSS:return D.DATA_LOSS;default:return G()}}(ee=_e||(_e={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qv(){return new TextEncoder}/**
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
 */const Gv=new on([4294967295,4294967295],0);function Fu(r){const e=qv().encode(r),t=new kd;return t.update(e),new Uint8Array(t.digest())}function ju(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new on([t,n],0),new on([i,s],0)]}class ul{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new $r(`Invalid padding: ${t}`);if(n<0)throw new $r(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new $r(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new $r(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=on.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(on.fromNumber(n)));return i.compare(Gv)===1&&(i=new on([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Fu(e),[n,i]=ju(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);if(!this.de(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ul(s,i,t);return n.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=Fu(e),[n,i]=ju(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class $r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wi{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Ii.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new wi(H.min(),i,new oe(J),Ge(),Y())}}class Ii{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ii(n,t,Y(),Y(),Y())}}/**
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
 */class cs{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class Sf{constructor(e,t){this.targetId=e,this.me=t}}class Rf{constructor(e,t,n=ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Uu{constructor(){this.fe=0,this.ge=zu(),this.pe=ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Y(),t=Y(),n=Y();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:G()}}),new Ii(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=zu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Kv{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ge(),this.qe=Bu(),this.Qe=new oe(J)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if(xs(s))if(n===0){const o=new q(s.path);this.Ue(t,o,fe.newNoDocument(o,H.min()))}else W(n===1);else{const o=this.Ye(t);if(o!==n){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=Ft(n).toUint8Array()}catch(c){if(c instanceof Yd)return Hn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ul(o,i,s)}catch(c){return Hn(c instanceof $r?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&xs(l.target)){const c=new q(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,fe.newNoDocument(c,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let n=Y();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new wi(e,t,this.Qe,this.ke,n);return this.ke=Ge(),this.qe=Bu(),this.Qe=new oe(J),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Uu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ie(J),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Uu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Bu(){return new oe(q.comparator)}function zu(){return new oe(q.comparator)}const Wv={asc:"ASCENDING",desc:"DESCENDING"},Hv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qv={and:"AND",or:"OR"};class Jv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ca(r,e){return r.useProto3Json||Js(e)?e:{value:e}}function nr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Yv(r,e){return nr(r,e.toTimestamp())}function Me(r){return W(!!r),H.fromTimestamp(function(t){const n=mt(t);return new he(n.seconds,n.nanos)}(r))}function hl(r,e){return ka(r,e).canonicalString()}function ka(r,e){const t=function(i){return new ne(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Cf(r){const e=ne.fromString(r);return W(jf(e)),e}function Rs(r,e){return hl(r.databaseId,e.path)}function an(r,e){const t=Cf(e);if(t.get(1)!==r.databaseId.projectId)throw new $(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new $(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new q(Df(t))}function kf(r,e){return hl(r.databaseId,e)}function Vf(r){const e=Cf(r);return e.length===4?ne.emptyPath():Df(e)}function Va(r){return new ne(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Df(r){return W(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function $u(r,e,t){return{name:Rs(r,e),fields:t.value.mapValue.fields}}function Xv(r,e,t){const n=an(r,e.name),i=Me(e.updateTime),s=e.createTime?Me(e.createTime):H.min(),o=new ke({mapValue:{fields:e.fields}}),l=fe.newFoundDocument(n,i,s,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function Zv(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(W(f===void 0||typeof f=="string"),ge.fromBase64String(f||"")):(W(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ge.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?D.UNKNOWN:Af(h.code);return new $(f,h.message||"")}(o);t=new Rf(n,i,s,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=an(r,n.document.name),s=Me(n.document.updateTime),o=n.document.createTime?Me(n.document.createTime):H.min(),l=new ke({mapValue:{fields:n.document.fields}}),c=fe.newFoundDocument(i,s,o,l),h=n.targetIds||[],f=n.removedTargetIds||[];t=new cs(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=an(r,n.document),s=n.readTime?Me(n.readTime):H.min(),o=fe.newNoDocument(i,s),l=n.removedTargetIds||[];t=new cs([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=an(r,n.document),s=n.removedTargetIds||[];t=new cs([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new zv(i,s),l=n.targetId;t=new Sf(l,o)}}return t}function Ps(r,e){let t;if(e instanceof pr)t={update:$u(r,e.key,e.value)};else if(e instanceof no)t={delete:Rs(r,e.key)};else if(e instanceof yt)t={update:$u(r,e.key,e.data),updateMask:sw(e.fieldMask)};else{if(!(e instanceof xf))return G();t={verify:Rs(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,o){const l=o.transform;if(l instanceof Zn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof er)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof tr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof di)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Yv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(r,e.precondition)),t}function Da(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Ve.updateTime(Me(s.updateTime)):s.exists!==void 0?Ve.exists(s.exists):Ve.none()}(e.currentDocument):Ve.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(o,l){let c=null;if("setToServerValue"in l)W(l.setToServerValue==="REQUEST_TIME"),c=new Zn;else if("appendMissingElements"in l){const f=l.appendMissingElements.values||[];c=new er(f)}else if("removeAllFromArray"in l){const f=l.removeAllFromArray.values||[];c=new tr(f)}else"increment"in l?c=new di(o,l.increment):G();const h=ue.fromServerFormat(l.fieldPath);return new Ef(h,c)}(r,i)):[];if(e.update){e.update.name;const i=an(r,e.update.name),s=new ke({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const h=c.fieldPaths||[];return new Be(h.map(f=>ue.fromServerFormat(f)))}(e.updateMask);return new yt(i,s,o,t,n)}return new pr(i,s,t,n)}if(e.delete){const i=an(r,e.delete);return new no(i,t)}if(e.verify){const i=an(r,e.verify);return new xf(i,t)}return G()}function ew(r,e){return r&&r.length>0?(W(e!==void 0),r.map(t=>function(i,s){let o=i.updateTime?Me(i.updateTime):Me(s);return o.isEqual(H.min())&&(o=Me(s)),new jv(o,i.transformResults||[])}(t,e))):[]}function Nf(r,e){return{documents:[kf(r,e.path)]}}function Of(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=kf(r,i);const s=function(h){if(h.length!==0)return Ff(re.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Ln(_.field),direction:nw(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Ca(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Mf(r){let e=Vf(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){W(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(p){const _=Lf(p);return _ instanceof re&&il(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(_=>function(k){return new Ts(Fn(k.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(_))}(t.orderBy));let l=null;t.limit&&(l=function(p){let _;return _=typeof p=="object"?p.value:p,Js(_)?null:_}(t.limit));let c=null;t.startAt&&(c=function(p){const _=!!p.before,b=p.values||[];return new Yn(b,_)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const _=!p.before,b=p.values||[];return new Yn(b,_)}(t.endAt)),cf(e,i,o,s,l,"F",c,h)}function tw(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lf(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Fn(t.unaryFilter.field);return Z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Fn(t.unaryFilter.field);return Z.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fn(t.unaryFilter.field);return Z.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fn(t.unaryFilter.field);return Z.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(r):r.fieldFilter!==void 0?function(t){return Z.create(Fn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return re.create(t.compositeFilter.filters.map(n=>Lf(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(r):G()}function nw(r){return Wv[r]}function rw(r){return Hv[r]}function iw(r){return Qv[r]}function Ln(r){return{fieldPath:r.canonicalString()}}function Fn(r){return ue.fromServerFormat(r.fieldPath)}function Ff(r){return r instanceof Z?function(t){if(t.op==="=="){if(Au(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(xu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Au(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(xu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:rw(t.op),value:t.value}}}(r):r instanceof re?function(t){const n=t.getFilters().map(i=>Ff(i));return n.length===1?n[0]:{compositeFilter:{op:iw(t.op),filters:n}}}(r):G()}function sw(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Uf{constructor(e){this.ct=e}}function ow(r,e){let t;if(e.document)t=Xv(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=q.fromSegments(e.noDocument.path),i=gn(e.noDocument.readTime);t=fe.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return G();{const n=q.fromSegments(e.unknownDocument.path),i=gn(e.unknownDocument.version);t=fe.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new he(i[0],i[1]);return H.fromTimestamp(s)}(e.readTime)),t}function qu(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Cs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,o){return{name:Rs(s,o.key),fields:o.data.value.mapValue.fields,updateTime:nr(s,o.version.toTimestamp()),createTime:nr(s,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:mn(e.version)};else{if(!e.isUnknownDocument())return G();n.unknownDocument={path:t.path.toArray(),version:mn(e.version)}}return n}function Cs(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function mn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function gn(r){const e=new he(r.seconds,r.nanoseconds);return H.fromTimestamp(e)}function en(r,e){const t=(e.baseMutations||[]).map(s=>Da(r.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const l=e.mutations[s+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>Da(r.ct,s)),i=he.fromMillis(e.localWriteTimeMs);return new al(e.batchId,i,t,n)}function qr(r){const e=gn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?gn(r.lastLimboFreeSnapshotVersion):H.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return W(s.documents.length===1),Ke(Xs(Vf(s.documents[0])))}(r.query):function(s){return Ke(Mf(s))}(r.query),new ut(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,ge.fromBase64String(r.resumeToken))}function Bf(r,e){const t=mn(e.snapshotVersion),n=mn(e.lastLimboFreeSnapshotVersion);let i;i=xs(e.target)?Nf(r.ct,e.target):Of(r.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:pn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function zf(r){const e=Mf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ss(e,e.limit,"L"):e}function ea(r,e){return new cl(e.largestBatchId,Da(r.ct,e.overlayMutation))}function Gu(r,e){const t=e.path.lastSegment();return[r,Oe(e.path.popLast()),t]}function Ku(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:mn(n.readTime),documentKey:Oe(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class aw{getBundleMetadata(e,t){return Wu(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:gn(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return Wu(e).put(function(i){return{bundleId:i.id,createTime:mn(Me(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Hu(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:zf(s.bundledQuery),readTime:gn(s.readTime)}}(n)})}saveNamedQuery(e,t){return Hu(e).put(function(i){return{name:i.name,readTime:mn(Me(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Wu(r){return we(r,"bundles")}function Hu(r){return we(r,"namedQueries")}/**
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
 */class ro{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new ro(e,n)}getOverlay(e,t){return Nr(e).get(Gu(this.userId,t)).next(n=>n?ea(this.serializer,n):null)}getOverlays(e,t){const n=tt();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,o)=>{const l=new cl(t,o);i.push(this.ht(e,l))}),S.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(o=>i.add(Oe(o.getCollectionPath())));const s=[];return i.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(Nr(e).j("collectionPathOverlayIndex",l))}),S.waitFor(s)}getOverlaysForCollection(e,t,n){const i=tt(),s=Oe(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Nr(e).U("collectionPathOverlayIndex",o).next(l=>{for(const c of l){const h=ea(this.serializer,c);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=tt();let o;const l=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Nr(e).J({index:"collectionGroupOverlayIndex",range:l},(c,h,f)=>{const p=ea(this.serializer,h);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return Nr(e).put(function(i,s,o){const[l,c,h]=Gu(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ps(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Nr(r){return we(r,"documentOverlays")}/**
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
 */class lw{Pt(e){return we(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?ge.fromUint8Array(n):ge.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class tn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ce(e.integerValue));else if("doubleValue"in e){const n=ce(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),ai(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=mt(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Ft(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Xd(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Ys(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):G()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const i of Object.keys(n))this.Vt(i,t),this.Tt(n[i],t)}wt(e,t){var n,i;const s=e.fields||{};this.dt(t,53);const o="value",l=((i=(n=s[o].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(ce(l)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const i of n)this.Tt(i,t)}yt(e,t){this.dt(t,37),q.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}tn.vt=new tn;function cw(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Qu(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const o=cw(255&n[s]);if(i+=o,o!==8)break}return i}(r);return Math.ceil(e/8)}class uw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),n=Qu(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),n=Qu(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class hw{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class dw{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Or{constructor(){this.jt=new uw,this.Ht=new hw(this.jt),this.Jt=new dw(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class nn{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new nn(this.indexId,this.documentKey,this.arrayValue,n)}}function bt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Ju(r.arrayValue,e.arrayValue),t!==0?t:(t=Ju(r.directionalValue,e.directionalValue),t!==0?t:q.comparator(r.documentKey,e.documentKey)))}function Ju(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class Yu{constructor(e){this.Xt=new ie((t,n)=>ue.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(W(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Ea(e);if(t!==void 0&&!this.sn(t))return!1;const n=Yt(e);let i=new Set,s=0,o=0;for(;s<n.length&&this.sn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Xt.size>0){const l=this.Xt.getIterator().getNext();if(!i.has(l.field.canonicalString())){const c=n[s];if(!this.on(l,c)||!this._n(this.en[o++],c))return!1}++s}for(;s<n.length;++s){const l=n[s];if(o>=this.en.length||!this._n(this.en[o++],l))return!1}return!0}an(){if(this.nn)return null;let e=new ie(ue.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new is(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new is(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new is(n.field,n.dir==="asc"?0:1)));return new bs(bs.UNKNOWN_ID,this.collectionId,t,oi.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function $f(r){var e,t;if(W(r instanceof Z||r instanceof re),r instanceof Z){if(r instanceof lf){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Z.create(r.field,"==",s)))||[];return re.create(i,"or")}return r}const n=r.filters.map(i=>$f(i));return re.create(n,r.op)}function fw(r){if(r.getFilters().length===0)return[];const e=Ma($f(r));return W(qf(e)),Na(e)||Oa(e)?[e]:e.getFilters()}function Na(r){return r instanceof Z}function Oa(r){return r instanceof re&&il(r)}function qf(r){return Na(r)||Oa(r)||function(t){if(t instanceof re&&Aa(t)){for(const n of t.getFilters())if(!Na(n)&&!Oa(n))return!1;return!0}return!1}(r)}function Ma(r){if(W(r instanceof Z||r instanceof re),r instanceof Z)return r;if(r.filters.length===1)return Ma(r.filters[0]);const e=r.filters.map(n=>Ma(n));let t=re.create(e,r.op);return t=ks(t),qf(t)?t:(W(t instanceof re),W(Xn(t)),W(t.filters.length>1),t.filters.reduce((n,i)=>dl(n,i)))}function dl(r,e){let t;return W(r instanceof Z||r instanceof re),W(e instanceof Z||e instanceof re),t=r instanceof Z?e instanceof Z?function(i,s){return re.create([i,s],"and")}(r,e):Xu(r,e):e instanceof Z?Xu(e,r):function(i,s){if(W(i.filters.length>0&&s.filters.length>0),Xn(i)&&Xn(s))return sf(i,s.getFilters());const o=Aa(i)?i:s,l=Aa(i)?s:i,c=o.filters.map(h=>dl(h,l));return re.create(c,"or")}(r,e),ks(t)}function Xu(r,e){if(Xn(e))return sf(e,r.getFilters());{const t=e.filters.map(n=>dl(r,n));return re.create(t,"or")}}function ks(r){if(W(r instanceof Z||r instanceof re),r instanceof Z)return r;const e=r.getFilters();if(e.length===1)return ks(e[0]);if(nf(r))return r;const t=e.map(i=>ks(i)),n=[];return t.forEach(i=>{i instanceof Z?n.push(i):i instanceof re&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:re.create(n,r.op)}/**
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
 */class pw{constructor(){this.un=new fl}addToCollectionParentIndex(e,t){return this.un.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(We.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(We.min())}updateCollectionGroup(e,t,n){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class fl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ie(ne.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ie(ne.comparator)).toArray()}}/**
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
 */const Qi=new Uint8Array(0);class mw{constructor(e,t){this.databaseId=t,this.cn=new fl,this.ln=new $t(n=>pn(n),(n,i)=>_i(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:n,parent:Oe(i)};return Zu(e).put(s)}return S.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[jd(t),""],!1,!0);return Zu(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;n.push(et(o.parent))}return n})}addFieldIndex(e,t){const n=Mr(e),i=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const o=kn(e);return s.next(l=>{o.put(Ku(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=Mr(e),i=kn(e),s=Cn(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Mr(e),n=Cn(e),i=kn(e);return t.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(e,t){return S.forEach(this.hn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new Yu(n).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=Cn(e);let i=!0;const s=new Map;return S.forEach(this.hn(t),o=>this.Pn(e,o).next(l=>{i&&(i=!!l),s.set(o,l)})).next(()=>{if(i){let o=Y();const l=[];return S.forEach(s,(c,h)=>{L("IndexedDbIndexManager",`Using index ${function(N){return`id=${N.indexId}|cg=${N.collectionGroup}|f=${N.fields.map(U=>`${U.fieldPath}:${U.kind}`).join(",")}`}(c)} to execute ${pn(t)}`);const f=function(N,U){const F=Ea(U);if(F===void 0)return null;for(const j of As(N,F.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(h,c),p=function(N,U){const F=new Map;for(const j of Yt(U))for(const E of As(N,j.fieldPath))switch(E.op){case"==":case"in":F.set(j.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return F.set(j.fieldPath.canonicalString(),E.value),Array.from(F.values())}return null}(h,c),_=function(N,U){const F=[];let j=!0;for(const E of Yt(U)){const v=E.kind===0?ku(N,E.fieldPath,N.startAt):Vu(N,E.fieldPath,N.startAt);F.push(v.value),j&&(j=v.inclusive)}return new Yn(F,j)}(h,c),b=function(N,U){const F=[];let j=!0;for(const E of Yt(U)){const v=E.kind===0?Vu(N,E.fieldPath,N.endAt):ku(N,E.fieldPath,N.endAt);F.push(v.value),j&&(j=v.inclusive)}return new Yn(F,j)}(h,c),k=this.In(c,h,_),C=this.In(c,h,b),P=this.Tn(c,h,p),M=this.En(c.indexId,f,k,_.inclusive,C,b.inclusive,P);return S.forEach(M,B=>n.G(B,t.limit).next(N=>{N.forEach(U=>{const F=q.fromSegments(U.documentKey);o.has(F)||(o=o.add(F),l.push(F))})}))}).next(()=>l)}return S.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=fw(re.create(e.filters,"and")).map(n=>Ra(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,i,s,o,l){const c=(t!=null?t.length:1)*Math.max(n.length,s.length),h=c/(t!=null?t.length:1),f=[];for(let p=0;p<c;++p){const _=t?this.dn(t[p/h]):Qi,b=this.An(e,_,n[p%h],i),k=this.Rn(e,_,s[p%h],o),C=l.map(P=>this.An(e,_,P,!0));f.push(...this.createRange(b,k,C))}return f}An(e,t,n,i){const s=new nn(e,q.empty(),t,n);return i?s:s.Zt()}Rn(e,t,n,i){const s=new nn(e,q.empty(),t,n);return i?s.Zt():s}Pn(e,t){const n=new Yu(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const l of s)n.rn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,t){let n=2;const i=this.hn(t);return S.forEach(i,s=>this.Pn(e,s).next(o=>{o?n!==0&&o.fields.length<function(c){let h=new ie(ue.comparator),f=!1;for(const p of c.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const p of c.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&n===2?1:n)}Vn(e,t){const n=new Or;for(const i of Yt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=n.Yt(i.kind);tn.vt.It(s,o)}return n.zt()}dn(e){const t=new Or;return tn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Or;return tn.vt.It(ui(this.databaseId,t),n.Yt(function(s){const o=Yt(s);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let i=[];i.push(new Or);let s=0;for(const o of Yt(e)){const l=n[s++];for(const c of i)if(this.fn(t,o.fieldPath)&&hi(l))i=this.gn(i,o,l);else{const h=c.Yt(o.kind);tn.vt.It(l,h)}}return this.pn(i)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const i=[...e],s=[];for(const o of n.arrayValue.values||[])for(const l of i){const c=new Or;c.seed(l.zt()),tn.vt.It(o,c.Yt(t.kind)),s.push(c)}return s}fn(e,t){return!!e.filters.find(n=>n instanceof Z&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Mr(e),i=kn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(s=>{const o=[];return S.forEach(s,l=>i.get([l.indexId,this.uid]).next(c=>{o.push(function(f,p){const _=p?new oi(p.sequenceNumber,new We(gn(p.readTime),new q(et(p.documentKey)),p.largestBatchId)):oi.empty(),b=f.fields.map(([k,C])=>new is(ue.fromServerFormat(k),C));return new bs(f.indexId,f.collectionGroup,b,_)}(l,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:J(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=Mr(e),s=kn(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(l=>S.forEach(l,c=>s.put(Ku(c.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return S.forEach(t,(i,s)=>{const o=n.get(i.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(l=>(n.set(i.collectionGroup,l),S.forEach(l,c=>this.wn(e,i,c).next(h=>{const f=this.Sn(s,c);return h.isEqual(f)?S.resolve():this.bn(e,s,c,h,f)}))))})}Dn(e,t,n,i){return Cn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,i){return Cn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const i=Cn(e);let s=new ie(bt);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,l)=>{s=s.add(new nn(n.indexId,t,l.arrayValue,l.directionalValue))}).next(()=>s)}Sn(e,t){let n=new ie(bt);const i=this.Vn(t,e);if(i==null)return n;const s=Ea(t);if(s!=null){const o=e.data.field(s.fieldPath);if(hi(o))for(const l of o.arrayValue.values||[])n=n.add(new nn(t.indexId,e.key,this.dn(l),i))}else n=n.add(new nn(t.indexId,e.key,Qi,i));return n}bn(e,t,n,i,s){L("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,h,f,p,_){const b=c.getIterator(),k=h.getIterator();let C=Pn(b),P=Pn(k);for(;C||P;){let M=!1,B=!1;if(C&&P){const N=f(C,P);N<0?B=!0:N>0&&(M=!0)}else C!=null?B=!0:M=!0;M?(p(P),P=Pn(k)):B?(_(C),C=Pn(b)):(C=Pn(b),P=Pn(k))}}(i,s,bt,l=>{o.push(this.Dn(e,t,n,l))},l=>{o.push(this.vn(e,t,n,l))}),S.waitFor(o)}yn(e){let t=1;return kn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,l)=>bt(o,l)).filter((o,l,c)=>!l||bt(o,c[l-1])!==0);const i=[];i.push(e);for(const o of n){const l=bt(o,e),c=bt(o,t);if(l===0)i[0]=e.Zt();else if(l>0&&c<0)i.push(o),i.push(o.Zt());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const l=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Qi,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Qi,[]];s.push(IDBKeyRange.bound(l,c))}return s}Cn(e,t){return bt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(eh)}getMinOffset(e,t){return S.mapArray(this.hn(t),n=>this.Pn(e,n).next(i=>i||G())).next(eh)}}function Zu(r){return we(r,"collectionParents")}function Cn(r){return we(r,"indexEntries")}function Mr(r){return we(r,"indexConfiguration")}function kn(r){return we(r,"indexState")}function eh(r){W(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;Za(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new We(e.readTime,e.documentKey,t)}/**
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
 */const th={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Fe{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Fe(e,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Gf(r,e,t){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let l=0;const c=n.J({range:o},(f,p,_)=>(l++,_.delete()));s.push(c.next(()=>{W(l===1)}));const h=[];for(const f of t.mutations){const p=Kd(e,f.key.path,t.batchId);s.push(i.delete(p)),h.push(f.key)}return S.waitFor(s).next(()=>h)}function Vs(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw G();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Fe.DEFAULT_COLLECTION_PERCENTILE=10,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fe.DEFAULT=new Fe(41943040,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fe.DISABLED=new Fe(-1,0,0);class io{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Fn={}}static lt(e,t,n,i){W(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new io(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Tt(e).J({index:"userMutationsIndex",range:n},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=jn(e),o=Tt(e);return o.add({}).next(l=>{W(typeof l=="number");const c=new al(l,t,n,i),h=function(b,k,C){const P=C.baseMutations.map(B=>Ps(b.ct,B)),M=C.mutations.map(B=>Ps(b.ct,B));return{userId:k,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:P,mutations:M}}(this.serializer,this.userId,c),f=[];let p=new ie((_,b)=>J(_.canonicalString(),b.canonicalString()));for(const _ of i){const b=Kd(this.userId,_.key.path,l);p=p.add(_.key.path.popLast()),f.push(o.put(h)),f.push(s.put(b,Zy))}return p.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[l]=c.keys()}),S.waitFor(f).next(()=>c)})}lookupMutationBatch(e,t){return Tt(e).get(t).next(n=>n?(W(n.userId===this.userId),en(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?S.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Tt(e).J({index:"userMutationsIndex",range:i},(o,l,c)=>{l.userId===this.userId&&(W(l.batchId>=n),s=en(this.serializer,l)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Tt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{n=s.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Tt(e).U("userMutationsIndex",t).next(n=>n.map(i=>en(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ss(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return jn(e).J({range:i},(o,l,c)=>{const[h,f,p]=o,_=et(f);if(h===this.userId&&t.path.isEqual(_))return Tt(e).get(p).next(b=>{if(!b)throw G();W(b.userId===this.userId),s.push(en(this.serializer,b))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(J);const i=[];return t.forEach(s=>{const o=ss(this.userId,s.path),l=IDBKeyRange.lowerBound(o),c=jn(e).J({range:l},(h,f,p)=>{const[_,b,k]=h,C=et(b);_===this.userId&&s.path.isEqual(C)?n=n.add(k):p.done()});i.push(c)}),S.waitFor(i).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=ss(this.userId,n),o=IDBKeyRange.lowerBound(s);let l=new ie(J);return jn(e).J({range:o},(c,h,f)=>{const[p,_,b]=c,k=et(_);p===this.userId&&n.isPrefixOf(k)?k.length===i&&(l=l.add(b)):f.done()}).next(()=>this.xn(e,l))}xn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(Tt(e).get(s).next(o=>{if(o===null)throw G();W(o.userId===this.userId),n.push(en(this.serializer,o))}))}),S.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return Gf(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),S.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return jn(e).J({range:n},(s,o,l)=>{if(s[0]===this.userId){const c=et(s[1]);i.push(c)}else l.done()}).next(()=>{W(i.length===0)})})}containsKey(e,t){return Kf(e,this.userId,t)}Nn(e){return Wf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Kf(r,e,t){const n=ss(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return jn(r).J({range:s,H:!0},(l,c,h)=>{const[f,p,_]=l;f===e&&p===i&&(o=!0),h.done()}).next(()=>o)}function Tt(r){return we(r,"mutations")}function jn(r){return we(r,"documentMutations")}function Wf(r){return we(r,"mutationQueues")}/**
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
 */class _n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new _n(0)}static kn(){return new _n(-1)}}/**
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
 */class gw{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new _n(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>H.fromTimestamp(new he(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Vn(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(W(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return Vn(e).J((o,l)=>{const c=qr(l);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>S.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Vn(e).J((n,i)=>{const s=qr(i);t(s)})}qn(e){return nh(e).get("targetGlobalKey").next(t=>(W(t!==null),t))}Qn(e,t){return nh(e).put("targetGlobalKey",t)}Kn(e,t){return Vn(e).put(Bf(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=pn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Vn(e).J({range:i,index:"queryTargetsIndex"},(o,l,c)=>{const h=qr(l);_i(t,h.target)&&(s=h,c.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=At(e);return t.forEach(o=>{const l=Oe(o.path);i.push(s.put({targetId:n,path:l})),i.push(this.referenceDelegate.addReference(e,n,o))}),S.waitFor(i)}removeMatchingKeys(e,t,n){const i=At(e);return S.forEach(t,s=>{const o=Oe(s.path);return S.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=At(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=At(e);let s=Y();return i.J({range:n,H:!0},(o,l,c)=>{const h=et(o[1]),f=new q(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=Oe(t.path),i=IDBKeyRange.bound([n],[jd(n)],!1,!0);let s=0;return At(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,l],c,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}ot(e,t){return Vn(e).get(t).next(n=>n?qr(n):null)}}function Vn(r){return we(r,"targets")}function nh(r){return we(r,"targetGlobal")}function At(r){return we(r,"targetDocuments")}/**
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
 */function rh([r,e],[t,n]){const i=J(r,t);return i===0?J(e,n):i}class _w{constructor(e){this.Un=e,this.buffer=new ie(rh),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();rh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yw{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){L("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zt(t)?L("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Bt(t)}await this.Hn(3e5)})}}class vw{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Ue.oe);const n=new _w(t);return this.Jn.forEachTarget(e,i=>n.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>n.zn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(th)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),th):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,i,s,o,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(n=p,l=Date.now(),this.removeTargets(e,n,t))).next(p=>(s=p,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),On()<=X.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function ww(r,e){return new vw(r,e)}/**
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
 */class Iw{constructor(e,t){this.db=e,this.garbageCollector=ww(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,i)=>t(i))}addReference(e,t,n){return Ji(e,n)}removeReference(e,t,n){return Ji(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ji(e,t)}nr(e,t){return function(i,s){let o=!1;return Wf(i).Y(l=>Kf(i,l,s).next(c=>(c&&(o=!0),S.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,l)=>{if(l<=t){const c=this.nr(e,o).next(h=>{if(!h)return s++,n.getEntry(e,o).next(()=>(n.removeEntry(o,H.min()),At(e).delete(function(p){return[0,Oe(p.path)]}(o))))});i.push(c)}}).next(()=>S.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ji(e,t)}tr(e,t){const n=At(e);let i,s=Ue.oe;return n.J({index:"documentTargetsIndex"},([o,l],{path:c,sequenceNumber:h})=>{o===0?(s!==Ue.oe&&t(new q(et(i)),s),s=h,i=c):s=Ue.oe}).next(()=>{s!==Ue.oe&&t(new q(et(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ji(r,e){return At(r).put(function(n,i){return{targetId:0,path:Oe(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
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
 */class Hf{constructor(){this.changes=new $t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?S.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ew{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Qt(e).put(n)}removeEntry(e,t,n){return Qt(e).delete(function(s,o){const l=s.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],Cs(o),l[l.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=fe.newInvalidDocument(t);return Qt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Lr(t))},(i,s)=>{n=this.ir(t,s)}).next(()=>n)}sr(e,t){let n={size:0,document:fe.newInvalidDocument(t)};return Qt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Lr(t))},(i,s)=>{n={document:this.ir(t,s),size:Vs(s)}}).next(()=>n)}getEntries(e,t){let n=Ge();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);n=n.insert(i,o)}).next(()=>n)}ar(e,t){let n=Ge(),i=new oe(q.comparator);return this._r(e,t,(s,o)=>{const l=this.ir(s,o);n=n.insert(s,l),i=i.insert(s,Vs(o))}).next(()=>({documents:n,ur:i}))}_r(e,t,n){if(t.isEmpty())return S.resolve();let i=new ie(oh);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Lr(i.first()),Lr(i.last())),o=i.getIterator();let l=o.getNext();return Qt(e).J({index:"documentKeyIndex",range:s},(c,h,f)=>{const p=q.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;l&&oh(l,p)<0;)n(l,null),l=o.getNext();l&&l.isEqual(p)&&(n(l,h),l=o.hasNext()?o.getNext():null),l?f.$(Lr(l)):f.done()}).next(()=>{for(;l;)n(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),Cs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Qt(e).U(IDBKeyRange.bound(l,c,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=Ge();for(const p of h){const _=this.ir(q.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);_.isFoundDocument()&&(vi(t,_)||i.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=Ge();const o=sh(t,n),l=sh(t,We.max());return Qt(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,l,!0)},(c,h,f)=>{const p=this.ir(q.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new bw(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return ih(e).get("remoteDocumentGlobalKey").next(t=>(W(!!t),t))}rr(e,t){return ih(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=ow(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(H.min())))return n}return fe.newInvalidDocument(e)}}function Qf(r){return new Ew(r)}class bw extends Hf{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new $t(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new ie((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const l=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,l.readTime)),o.isValidDocument()){const c=qu(this.cr.serializer,o);i=i.add(s.path.popLast());const h=Vs(c);n+=h-l.size,t.push(this.cr.addEntry(e,s,c))}else if(n-=l.size,this.trackRemovals){const c=qu(this.cr.serializer,o.convertToNoDocument(H.min()));t.push(this.cr.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,n)),S.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:n.get(s).readTime})}),n))}}function ih(r){return we(r,"remoteDocumentGlobal")}function Qt(r){return we(r,"remoteDocumentsV14")}function Lr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function sh(r,e){const t=e.documentKey.path.toArray();return[r,Cs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function oh(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=J(t[s],n[s]),i)return i;return i=J(t.length,n.length),i||(i=J(t[t.length-2],n[n.length-2]),i||J(t[t.length-1],n[n.length-1]))}/**
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
 */class Tw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Jf{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Xr(n.mutation,i,Be.empty(),he.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Y()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Y()){const i=tt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let o=zr();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=tt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Y()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,n,i){let s=Ge();const o=Yr(),l=function(){return Yr()}();return t.forEach((c,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof yt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Xr(f.mutation,h,f.mutation.getFieldMask(),he.now())):o.set(h.key,Be.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new Tw(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const n=Yr();let i=new oe((o,l)=>o-l),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||Be.empty();f=l.applyToLocalView(h,f),n.set(c,f);const p=(i.get(l.batchId)||Y()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=gf();f.forEach(_=>{if(!s.has(_)){const b=bf(t.get(_),n.get(_));b!==null&&p.set(_,b),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return S.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):uf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):S.resolve(tt());let l=-1,c=s;return o.next(h=>S.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?S.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,Y())).next(f=>({batchId:l,changes:mf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(n=>{let i=zr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=zr();return this.indexManager.getCollectionParents(e,s).next(l=>S.forEach(l,c=>{const h=function(p,_){return new yi(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(o=>{s.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,fe.newInvalidDocument(f)))});let l=zr();return o.forEach((c,h)=>{const f=s.get(c);f!==void 0&&Xr(f.mutation,h,Be.empty(),he.now()),vi(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class xw{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return S.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Me(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:zf(i.bundledQuery),readTime:Me(i.readTime)}}(t)),S.resolve()}}/**
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
 */class Aw{constructor(){this.overlays=new oe(q.comparator),this.Ir=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const n=tt();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),S.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),S.resolve()}getOverlaysForCollection(e,t,n){const i=tt(),s=t.length+1,o=new q(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>n&&i.set(c.getKey(),c)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new oe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=tt(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=tt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return S.resolve(l)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new cl(t,n));let s=this.Ir.get(t);s===void 0&&(s=Y(),this.Ir.set(t,s)),this.Ir.set(t,s.add(n.key))}}/**
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
 */class Sw{constructor(){this.sessionToken=ge.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
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
 */class pl{constructor(){this.Tr=new ie(Ie.Er),this.dr=new ie(Ie.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Ie(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Ie(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new q(new ne([])),n=new Ie(t,e),i=new Ie(t,e+1),s=[];return this.dr.forEachInRange([n,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new q(new ne([])),n=new Ie(t,e),i=new Ie(t,e+1);let s=Y();return this.dr.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ie(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ie{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return q.comparator(e.key,t.key)||J(e.wr,t.wr)}static Ar(e,t){return J(e.wr,t.wr)||q.comparator(e.key,t.key)}}/**
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
 */class Rw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ie(Ie.Er)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new al(s,t,n,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ie(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.vr(n),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ie(t,0),i=new Ie(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,i],o=>{const l=this.Dr(o.wr);s.push(l)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(J);return t.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{n=n.add(l.wr)})}),S.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;q.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new q(s),0);let l=new ie(J);return this.br.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.wr)),!0)},o),S.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){W(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return S.forEach(t.mutations,i=>{const s=new Ie(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Ie(t,0),i=this.br.firstAfterOrEqual(n);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Pw{constructor(e){this.Mr=e,this.docs=function(){return new oe(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return S.resolve(n?n.document.mutableCopy():fe.newInvalidDocument(t))}getEntries(e,t){let n=Ge();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():fe.newInvalidDocument(i))}),S.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Ge();const o=t.path,l=new q(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Za(Bd(f),n)<=0||(i.has(f.key)||vi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,t,n,i){G()}Or(e,t){return S.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Cw(this)}getSize(e){return S.resolve(this.size)}}class Cw extends Hf{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),S.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class kw{constructor(e){this.persistence=e,this.Nr=new $t(t=>pn(t),_i),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pl,this.targetCount=0,this.kr=_n.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),S.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new _n(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Kn(t),S.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return S.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),S.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return S.resolve(n)}containsKey(e,t){return S.resolve(this.Br.containsKey(t))}}/**
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
 */class Yf{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ue(0),this.Kr=!1,this.Kr=!0,this.$r=new Sw,this.referenceDelegate=e(this),this.Ur=new kw(this),this.indexManager=new pw,this.remoteDocumentCache=function(i){return new Pw(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Uf(t),this.Gr=new xw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Aw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new Rw(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){L("MemoryPersistence","Starting transaction:",e);const i=new Vw(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return S.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class Vw extends $d{constructor(e){super(),this.currentSequenceNumber=e}}class so{constructor(e){this.persistence=e,this.Jr=new pl,this.Yr=null}static Zr(e){return new so(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),S.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,n=>{const i=q.fromPath(n);return this.ei(e,i).next(s=>{s||t.removeEntry(i,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return S.or([()=>S.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Dw{constructor(e){this.serializer=e}O(e,t,n,i){const s=new Qs("createOrUpgrade",t);n<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",wu,{unique:!0}),c.createObjectStore("documentMutations")}(e),ah(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=S.resolve();return n<3&&i>=3&&(n!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),ah(e)),o=o.next(()=>function(c){const h=c.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(s))),n<4&&i>=4&&(n!==0&&(o=o.next(()=>function(c,h){return h.store("mutations").U().next(f=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",wu,{unique:!0});const p=h.store("mutations"),_=f.map(b=>p.put(b));return S.waitFor(_)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&i>=5&&(o=o.next(()=>this.ni(s))),n<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),n<7&&i>=7&&(o=o.next(()=>this.ii(s))),n<8&&i>=8&&(o=o.next(()=>this.si(e,s))),n<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(o=o.next(()=>this.oi(s))),n<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(o=o.next(()=>{(function(c){const h=c.createObjectStore("documentOverlays",{keyPath:hv});h.createIndex("collectionPathOverlayIndex",dv,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",fv,{unique:!1})})(e)})),n<13&&i>=13&&(o=o.next(()=>function(c){const h=c.createObjectStore("remoteDocumentsV14",{keyPath:ev});h.createIndex("documentKeyIndex",tv),h.createIndex("collectionGroupIndex",nv)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),n<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:av}).createIndex("sequenceNumberIndex",lv,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:cv}).createIndex("documentKeyIndex",uv,{unique:!1})}(e))),n<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&i>=17&&(o=o.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,i)=>{t+=Vs(i)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(i=>S.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(l=>S.forEach(l,c=>{W(c.userId===s.userId);const h=en(this.serializer,c);return Gf(e,s.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((o,l)=>{const c=new ne(o),h=function(p){return[0,Oe(p)]}(c);s.push(t.get(h).next(f=>f?S.resolve():(p=>t.put({targetId:0,path:Oe(p),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>S.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:ov});const n=t.store("collectionParents"),i=new fl,s=o=>{if(i.add(o)){const l=o.lastSegment(),c=o.popLast();return n.put({collectionId:l,parent:Oe(c)})}};return t.store("remoteDocuments").J({H:!0},(o,l)=>{const c=new ne(o);return s(c.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,l,c],h)=>{const f=et(l);return s(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,i)=>{const s=qr(i),o=Bf(this.serializer,s);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),i=[];return n.J((s,o)=>{const l=t.store("remoteDocumentsV14"),c=function(p){return p.document?new q(ne.fromString(p.document.name).popFirst(5)):p.noDocument?q.fromSegments(p.noDocument.path):p.unknownDocument?q.fromSegments(p.unknownDocument.path):G()}(o).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(l.put(h))}).next(()=>S.waitFor(i))}ai(e,t){const n=t.store("mutations"),i=Qf(this.serializer),s=new Yf(so.Zr,this.serializer.ct);return n.U().next(o=>{const l=new Map;return o.forEach(c=>{var h;let f=(h=l.get(c.userId))!==null&&h!==void 0?h:Y();en(this.serializer,c).keys().forEach(p=>f=f.add(p)),l.set(c.userId,f)}),S.forEach(l,(c,h)=>{const f=new Ee(h),p=ro.lt(this.serializer,f),_=s.getIndexManager(f),b=io.lt(f,this.serializer,_,s.referenceDelegate);return new Jf(i,b,p,_).recalculateAndSaveOverlaysForDocumentKeys(new ba(t,Ue.oe),c).next()})})}}function ah(r){r.createObjectStore("targetDocuments",{keyPath:iv}).createIndex("documentTargetsIndex",sv,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",rv,{unique:!0}),r.createObjectStore("targetGlobal")}const ta="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ml{constructor(e,t,n,i,s,o,l,c,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=s,this.window=o,this.document=l,this.ci=h,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!ml.D())throw new $(D.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Iw(this,i),this.Ai=t+"main",this.serializer=new Uf(c),this.Ri=new Ot(this.Ai,this.hi,new Dw(this.serializer)),this.$r=new lw,this.Ur=new gw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Qf(this.serializer),this.Gr=new aw,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&pe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new $(D.FAILED_PRECONDITION,ta);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Ue(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Yi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(zt(e))return L("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return L("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Fr(e).get("owner").next(t=>S.resolve(this.vi(t)))}Ci(e){return Yi(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=we(t,"clientMetadata");return n.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(l=>s.indexOf(l)===-1);return S.forEach(o,l=>n.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?S.resolve(!0):Fr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new $(D.FAILED_PRECONDITION,ta);return!1}}return!(!this.networkEnabled||!this.inForeground)||Yi(e).U().next(n=>this.xi(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,l=this.networkEnabled===i.networkEnabled;if(s||o&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&L("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ba(e,Ue.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Yi(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return io.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new mw(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ro.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){L("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===17?gv:c===16?mv:c===15?tl:c===14?Qd:c===13?Hd:c===12?pv:c===11?Wd:void G()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,l=>(o=new ba(l,this.Qr?this.Qr.next():Ue.oe),t==="readwrite-primary"?this.wi(o).next(c=>!!c||this.Si(o)).next(c=>{if(!c)throw pe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new $(D.FAILED_PRECONDITION,zd);return n(o)}).next(c=>this.Di(o).next(()=>c)):this.Ki(o).next(()=>n(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Ki(e){return Fr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new $(D.FAILED_PRECONDITION,ta)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Fr(e).put("owner",t)}static D(){return Ot.D()}bi(e){const t=Fr(e);return t.get("owner").next(n=>this.vi(n)?(L("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):S.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(pe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Td()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return L("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return pe("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){pe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Fr(r){return we(r,"owner")}function Yi(r){return we(r,"clientMetadata")}function Xf(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class gl{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=i}static Wi(e,t){let n=Y(),i=Y();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gl(e,t.fromCache,n,i)}}/**
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
 */class Nw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Zf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Td()?8:qd(ve())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Nw;return this.Xi(e,t,o).next(l=>{if(s.result=l,this.zi)return this.es(e,t,o,l.size)})}).next(()=>s.result)}es(e,t,n,i){return n.documentReadCount<this.ji?(On()<=X.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(On()<=X.DEBUG&&L("QueryEngine","Query:",Mn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(On()<=X.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ke(t))):S.resolve())}Yi(e,t){if(Du(t))return S.resolve(null);let n=Ke(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ss(t,null,"F"),n=Ke(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const o=Y(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const h=this.ts(t,l);return this.ns(t,h,o,c.readTime)?this.Yi(e,Ss(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,n,i){return Du(t)||i.isEqual(H.min())?S.resolve(null):this.Ji.getDocuments(e,n).next(s=>{const o=this.ts(t,s);return this.ns(t,o,n,i)?S.resolve(null):(On()<=X.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mn(t)),this.rs(e,o,t,Ud(i,-1)).next(l=>l))})}ts(e,t){let n=new ie(ff(e));return t.forEach((i,s)=>{vi(e,s)&&(n=n.add(s))}),n}ns(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,n){return On()<=X.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Mn(t)),this.Ji.getDocumentsMatchingQuery(e,t,We.min(),n)}rs(e,t,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Ow{constructor(e,t,n,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new oe(J),this._s=new $t(s=>pn(s),_i),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function ep(r,e,t,n){return new Ow(r,e,t,n)}async function tp(r,e){const t=K(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],l=[];let c=Y();for(const h of i){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Mw(r,e){const t=K(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,_=p.keys();let b=S.resolve();return _.forEach(k=>{b=b.next(()=>f.getEntry(c,k)).next(C=>{const P=h.docVersions.get(k);W(P!==null),C.version.compareTo(P)<0&&(p.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),f.addEntry(C)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=Y();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function np(r){const e=K(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Lw(r,e){const t=K(r),n=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,p)=>{const _=i.get(p);if(!_)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,p)));let b=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(ge.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,n)),i=i.insert(p,b),function(C,P,M){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(_,b,f)&&l.push(t.Ur.updateTargetData(s,b))});let c=Ge(),h=Y();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Fw(s,o,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!n.isEqual(H.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(p=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));l.push(f)}return S.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.os=i,s))}function Fw(r,e,t){let n=Y(),i=Y();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let o=Ge();return t.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):L("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function jw(r,e){const t=K(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Ds(r,e){const t=K(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Ur.getTargetData(n,e).next(s=>s?(i=s,S.resolve(i)):t.Ur.allocateTargetId(n).next(o=>(i=new ut(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function rr(r,e,t){const n=K(r),i=n.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zt(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function La(r,e,t){const n=K(r);let i=H.min(),s=Y();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=K(c),_=p._s.get(f);return _!==void 0?S.resolve(p.os.get(_)):p.Ur.getTargetData(h,f)}(n,o,Ke(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?i:H.min(),t?s:Y())).next(l=>(sp(n,df(e),l),{documents:l,Ts:s})))}function rp(r,e){const t=K(r),n=K(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.ot(s,e).next(o=>o?o.target:null))}function ip(r,e){const t=K(r),n=t.us.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,Ud(n,-1),Number.MAX_SAFE_INTEGER)).then(i=>(sp(t,e,i),i))}function sp(r,e,t){let n=r.us.get(e)||H.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.us.set(e,n)}function lh(r,e){return`firestore_clients_${r}_${e}`}function ch(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function na(r,e){return`firestore_targets_${r}_${e}`}class Ns{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Rs(e,t,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new $(i.error.code,i.error.message))),o?new Ns(e,t,i.state,s):(pe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Zr{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new $(n.error.code,n.error.message))),s?new Zr(e,n.state,i):(pe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Os{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=sl();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=Gd(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new Os(e,s):(pe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class _l{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new _l(t.clientId,t.onlineState):(pe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Fa{constructor(){this.activeTargetIds=sl()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ra{constructor(e,t,n,i,s){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new oe(J),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=lh(this.persistenceKey,this.ps),this.vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Fa),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Os=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const i=this.getItem(lh(this.persistenceKey,n));if(i){const s=Os.Rs(n,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(na(this.persistenceKey,e));if(i){const s=Zr.Rs(e,i);s&&(n=s.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(na(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return L("SharedClientState","READ",e,t),t}setItem(e,t){L("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){L("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(L("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void pe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(s){let o=Ue.oe;if(s!=null)try{const l=JSON.parse(s);W(typeof l=="number"),o=l}catch(l){pe("SharedClientState","Failed to read sequence number from WebStorage",l)}return o}(t.newValue);n!==Ue.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const i=new Ns(this.currentUser,e,t,n),s=ch(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=ch(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const i=na(this.persistenceKey,e),s=new Zr(e,t,n);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return Os.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return Ns.Rs(new Ee(s),i,t)}Ys(e,t){const n=this.Ms.exec(e),i=Number(n[1]);return Zr.Rs(i,t)}Ls(e){return _l.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);L("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(n),o=[],l=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||l.push(c)}),this.syncEngine.io(o,l).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=sl();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class op{constructor(){this.so=new Fa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Fa,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Uw{_o(e){}shutdown(){}}/**
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
 */class uh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xi=null;function ia(){return Xi===null?Xi=function(){return 268435456+Math.round(2147483648*Math.random())}():Xi++,"0x"+Xi.toString(16)}/**
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
 */const Bw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class zw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ce="WebChannelConnection";class $w extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,n,i,s,o){const l=ia(),c=this.xo(t,n.toUriEncodedString());L("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(t,c,h,i).then(f=>(L("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Hn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}Lo(t,n,i,s,o,l){return this.Mo(t,n,i,s,o)}Oo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,n){const i=Bw[t];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,i){const s=ia();return new Promise((o,l)=>{const c=new Vd;c.setWithCredentials(!0),c.listenOnce(Dd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case rs.NO_ERROR:const f=c.getResponseJson();L(Ce,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case rs.TIMEOUT:L(Ce,`RPC '${e}' ${s} timed out`),l(new $(D.DEADLINE_EXCEEDED,"Request time out"));break;case rs.HTTP_ERROR:const p=c.getStatus();if(L(Ce,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const b=_==null?void 0:_.error;if(b&&b.status&&b.message){const k=function(P){const M=P.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(M)>=0?M:D.UNKNOWN}(b.status);l(new $(k,b.message))}else l(new $(D.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new $(D.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{L(Ce,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);L(Ce,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,n,15)})}Bo(e,t,n){const i=ia(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Md(),l=Od(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const f=s.join("");L(Ce,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=o.createWebChannel(f,c);let _=!1,b=!1;const k=new zw({Io:P=>{b?L(Ce,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(_||(L(Ce,`Opening RPC '${e}' stream ${i} transport.`),p.open(),_=!0),L(Ce,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},To:()=>p.close()}),C=(P,M,B)=>{P.listen(M,N=>{try{B(N)}catch(U){setTimeout(()=>{throw U},0)}})};return C(p,Br.EventType.OPEN,()=>{b||(L(Ce,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),C(p,Br.EventType.CLOSE,()=>{b||(b=!0,L(Ce,`RPC '${e}' stream ${i} transport closed`),k.So())}),C(p,Br.EventType.ERROR,P=>{b||(b=!0,Hn(Ce,`RPC '${e}' stream ${i} transport errored:`,P),k.So(new $(D.UNAVAILABLE,"The operation could not be completed")))}),C(p,Br.EventType.MESSAGE,P=>{var M;if(!b){const B=P.data[0];W(!!B);const N=B,U=N.error||((M=N[0])===null||M===void 0?void 0:M.error);if(U){L(Ce,`RPC '${e}' stream ${i} received error:`,U);const F=U.status;let j=function(w){const I=_e[w];if(I!==void 0)return Af(I)}(F),E=U.message;j===void 0&&(j=D.INTERNAL,E="Unknown error status: "+F+" with message "+U.message),b=!0,k.So(new $(j,E)),p.close()}else L(Ce,`RPC '${e}' stream ${i} received:`,B),k.bo(B)}}),C(l,Nd.STAT_EVENT,P=>{P.stat===Ia.PROXY?L(Ce,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Ia.NOPROXY&&L(Ce,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}/**
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
 */function ap(){return typeof window<"u"?window:null}function us(){return typeof document<"u"?document:null}/**
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
 */function oo(r){return new Jv(r,!0)}/**
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
 */class lp{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-n);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class cp{constructor(e,t,n,i,s,o,l,c){this.ui=e,this.Ho=n,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new lp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(pe(t.toString()),pe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===t&&this.P_(n,i)},n=>{e(()=>{const i=new $(D.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qw extends cp{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Zv(this.serializer,e),n=function(s){if(!("targetChange"in s))return H.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?Me(o.readTime):H.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Va(this.serializer),t.addTarget=function(s,o){let l;const c=o.target;if(l=xs(c)?{documents:Nf(s,c)}:{query:Of(s,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Pf(s,o.resumeToken);const h=Ca(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(H.min())>0){l.readTime=nr(s,o.snapshotVersion.toTimestamp());const h=Ca(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const n=tw(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Va(this.serializer),t.removeTarget=e,this.a_(t)}}class Gw extends cp{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return W(!!e.streamToken),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=ew(e.writeResults,e.commitTime),n=Me(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Va(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Ps(this.serializer,n))};this.a_(t)}}/**
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
 */class Kw extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,ka(t,n),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(D.UNKNOWN,s.toString())})}Lo(e,t,n,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,ka(t,n),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(D.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ww{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */class Hw{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{n.enqueueAndForget(async()=>{wn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=K(c);h.L_.add(4),await Ei(h),h.q_.set("Unknown"),h.L_.delete(4),await ao(h)}(this))})}),this.q_=new Ww(n,i)}}async function ao(r){if(wn(r))for(const e of r.B_)await e(!0)}async function Ei(r){for(const e of r.B_)await e(!1)}function lo(r,e){const t=K(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),wl(t)?vl(t):gr(t).r_()&&yl(t,e))}function ir(r,e){const t=K(r),n=gr(t);t.N_.delete(e),n.r_()&&up(t,e),t.N_.size===0&&(n.r_()?n.o_():wn(t)&&t.q_.set("Unknown"))}function yl(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gr(r).A_(e)}function up(r,e){r.Q_.xe(e),gr(r).R_(e)}function vl(r){r.Q_=new Kv({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),gr(r).start(),r.q_.v_()}function wl(r){return wn(r)&&!gr(r).n_()&&r.N_.size>0}function wn(r){return K(r).L_.size===0}function hp(r){r.Q_=void 0}async function Qw(r){r.q_.set("Online")}async function Jw(r){r.N_.forEach((e,t)=>{yl(r,e)})}async function Yw(r,e){hp(r),wl(r)?(r.q_.M_(e),vl(r)):r.q_.set("Unknown")}async function Xw(r,e,t){if(r.q_.set("Online"),e instanceof Rf&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(r,e)}catch(n){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ms(r,n)}else if(e instanceof cs?r.Q_.Ke(e):e instanceof Sf?r.Q_.He(e):r.Q_.We(e),!t.isEqual(H.min()))try{const n=await np(r.localStore);t.compareTo(n)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=s.N_.get(c);if(!f)return;s.N_.set(c,f.withResumeToken(ge.EMPTY_BYTE_STRING,f.snapshotVersion)),up(s,c);const p=new ut(f.target,c,h,f.sequenceNumber);yl(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){L("RemoteStore","Failed to raise snapshot:",n),await Ms(r,n)}}async function Ms(r,e,t){if(!zt(e))throw e;r.L_.add(1),await Ei(r),r.q_.set("Offline"),t||(t=()=>np(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await ao(r)})}function dp(r,e){return e().catch(t=>Ms(r,t,e))}async function mr(r){const e=K(r),t=Ut(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Zw(e);)try{const i=await jw(e.localStore,n);if(i===null){e.O_.length===0&&t.o_();break}n=i.batchId,eI(e,i)}catch(i){await Ms(e,i)}fp(e)&&pp(e)}function Zw(r){return wn(r)&&r.O_.length<10}function eI(r,e){r.O_.push(e);const t=Ut(r);t.r_()&&t.V_&&t.m_(e.mutations)}function fp(r){return wn(r)&&!Ut(r).n_()&&r.O_.length>0}function pp(r){Ut(r).start()}async function tI(r){Ut(r).p_()}async function nI(r){const e=Ut(r);for(const t of r.O_)e.m_(t.mutations)}async function rI(r,e,t){const n=r.O_.shift(),i=ll.from(n,e,t);await dp(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await mr(r)}async function iI(r,e){e&&Ut(r).V_&&await async function(n,i){if(function(o){return $v(o)&&o!==D.ABORTED}(i.code)){const s=n.O_.shift();Ut(n).s_(),await dp(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mr(n)}}(r,e),fp(r)&&pp(r)}async function hh(r,e){const t=K(r);t.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const n=wn(t);t.L_.add(3),await Ei(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ao(t)}async function ja(r,e){const t=K(r);e?(t.L_.delete(2),await ao(t)):e||(t.L_.add(2),await Ei(t),t.q_.set("Unknown"))}function gr(r){return r.K_||(r.K_=function(t,n,i){const s=K(t);return s.w_(),new qw(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:Qw.bind(null,r),Ro:Jw.bind(null,r),mo:Yw.bind(null,r),d_:Xw.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),wl(r)?vl(r):r.q_.set("Unknown")):(await r.K_.stop(),hp(r))})),r.K_}function Ut(r){return r.U_||(r.U_=function(t,n,i){const s=K(t);return s.w_(),new Gw(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:tI.bind(null,r),mo:iI.bind(null,r),f_:nI.bind(null,r),g_:rI.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await mr(r)):(await r.U_.stop(),r.O_.length>0&&(L("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class Il{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,l=new Il(e,t,o,i,s);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function El(r,e){if(pe("AsyncQueue",`${e}: ${r}`),zt(r))return new $(D.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Bn{constructor(e){this.comparator=e?(t,n)=>e(t,n)||q.comparator(t.key,n.key):(t,n)=>q.comparator(t.key,n.key),this.keyedMap=zr(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new Bn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Bn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class dh{constructor(){this.W_=new oe(q.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class sr{constructor(e,t,n,i,s,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new sr(e,t,Bn.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class sI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class oI{constructor(){this.queries=fh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const i=K(t),s=i.queries;i.queries=fh(),s.forEach((o,l)=>{for(const c of l.j_)c.onError(n)})})(this,new $(D.ABORTED,"Firestore shutting down"))}}function fh(){return new $t(r=>hf(r),Zs)}async function mp(r,e){const t=K(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(n=2):(s=new sI,n=e.J_()?0:1);try{switch(n){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=El(o,`Initialization of query '${Mn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&bl(t)}async function gp(r,e){const t=K(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function aI(r,e){const t=K(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(n=!0);o.z_=i}}n&&bl(t)}function lI(r,e,t){const n=K(r),i=n.queries.get(e);if(i)for(const s of i.j_)s.onError(t);n.queries.delete(e)}function bl(r){r.Y_.forEach(e=>{e.next()})}var Ua,ph;(ph=Ua||(Ua={})).ea="default",ph.Cache="cache";class _p{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new sr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=sr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ua.Cache}}/**
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
 */class yp{constructor(e){this.key=e}}class vp{constructor(e){this.key=e}}class cI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Y(),this.mutatedKeys=Y(),this.Aa=ff(e),this.Ra=new Bn(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new dh,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const _=i.get(f),b=vi(this.query,p)?p:null,k=!!_&&this.mutatedKeys.has(_.key),C=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;_&&b?_.data.isEqual(b.data)?k!==C&&(n.track({type:3,doc:b}),P=!0):this.ga(_,b)||(n.track({type:2,doc:b}),P=!0,(c&&this.Aa(b,c)>0||h&&this.Aa(b,h)<0)&&(l=!0)):!_&&b?(n.track({type:0,doc:b}),P=!0):_&&!b&&(n.track({type:1,doc:_}),P=!0,(c||h)&&(l=!0)),P&&(b?(o=o.add(b),s=C?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{Ra:o,fa:n,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(b,k){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return C(b)-C(k)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),i=i!=null&&i;const l=t&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new sr(this.query,e.Ra,s,o,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new dh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Y(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new vp(n))}),this.da.forEach(n=>{e.has(n)||t.push(new yp(n))}),t}ba(e){this.Ta=e.Ts,this.da=Y();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return sr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class hI{constructor(e){this.key=e,this.va=!1}}class dI{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new $t(l=>hf(l),Zs),this.Ma=new Map,this.xa=new Set,this.Oa=new oe(q.comparator),this.Na=new Map,this.La=new pl,this.Ba={},this.ka=new Map,this.qa=_n.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function fI(r,e,t=!0){const n=co(r);let i;const s=n.Fa.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await wp(n,e,t,!0),i}async function pI(r,e){const t=co(r);await wp(t,e,!0,!1)}async function wp(r,e,t,n){const i=await Ds(r.localStore,Ke(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let l;return n&&(l=await Tl(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&lo(r.remoteStore,i),l}async function Tl(r,e,t,n,i){r.Ka=(p,_,b)=>async function(C,P,M,B){let N=P.view.ma(M);N.ns&&(N=await La(C.localStore,P.query,!1).then(({documents:E})=>P.view.ma(E,N)));const U=B&&B.targetChanges.get(P.targetId),F=B&&B.targetMismatches.get(P.targetId)!=null,j=P.view.applyChanges(N,C.isPrimaryClient,U,F);return Ba(C,P.targetId,j.wa),j.snapshot}(r,p,_,b);const s=await La(r.localStore,e,!0),o=new cI(e,s.Ts),l=o.ma(s.documents),c=Ii.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(l,r.isPrimaryClient,c);Ba(r,t,h.wa);const f=new uI(e,t,o);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function mI(r,e,t){const n=K(r),i=n.Fa.get(e),s=n.Ma.get(i.targetId);if(s.length>1)return n.Ma.set(i.targetId,s.filter(o=>!Zs(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await rr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&ir(n.remoteStore,i.targetId),or(n,i.targetId)}).catch(Bt)):(or(n,i.targetId),await rr(n.localStore,i.targetId,!0))}async function gI(r,e){const t=K(r),n=t.Fa.get(e),i=t.Ma.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ir(t.remoteStore,n.targetId))}async function _I(r,e,t){const n=Rl(r);try{const i=await function(o,l){const c=K(o),h=he.now(),f=l.reduce((b,k)=>b.add(k.key),Y());let p,_;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=Ge(),C=Y();return c.cs.getEntries(b,f).next(P=>{k=P,k.forEach((M,B)=>{B.isValidDocument()||(C=C.add(M))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,k)).next(P=>{p=P;const M=[];for(const B of l){const N=Bv(B,p.get(B.key).overlayedDocument);N!=null&&M.push(new yt(B.key,N,ef(N.value.mapValue),Ve.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,M,l)}).next(P=>{_=P;const M=P.applyToLocalDocumentSet(p,C);return c.documentOverlayCache.saveOverlays(b,P.batchId,M)})}).then(()=>({batchId:_.batchId,changes:mf(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new oe(J)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(n,i.batchId,t),await qt(n,i.changes),await mr(n.remoteStore)}catch(i){const s=El(i,"Failed to persist write");t.reject(s)}}async function Ip(r,e){const t=K(r);try{const n=await Lw(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?W(o.va):i.removedDocuments.size>0&&(W(o.va),o.va=!1))}),await qt(t,n,e)}catch(n){await Bt(n)}}function mh(r,e,t){const n=K(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=K(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const _ of p.j_)_.Z_(l)&&(h=!0)}),h&&bl(c)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function yI(r,e,t){const n=K(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Na.get(e),s=i&&i.key;if(s){let o=new oe(q.comparator);o=o.insert(s,fe.newNoDocument(s,H.min()));const l=Y().add(s),c=new wi(H.min(),new Map,new oe(J),o,l);await Ip(n,c),n.Oa=n.Oa.remove(s),n.Na.delete(e),Sl(n)}else await rr(n.localStore,e,!1).then(()=>or(n,e,t)).catch(Bt)}async function vI(r,e){const t=K(r),n=e.batch.batchId;try{const i=await Mw(t.localStore,e);Al(t,n,null),xl(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await qt(t,i)}catch(i){await Bt(i)}}async function wI(r,e,t){const n=K(r);try{const i=await function(o,l){const c=K(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(W(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,e);Al(n,e,t),xl(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await qt(n,i)}catch(i){await Bt(i)}}function xl(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function Al(r,e,t){const n=K(r);let i=n.Ba[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function or(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Ep(r,n)})}function Ep(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(ir(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),Sl(r))}function Ba(r,e,t){for(const n of t)n instanceof yp?(r.La.addReference(n.key,e),II(r,n)):n instanceof vp?(L("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Ep(r,n.key)):G()}function II(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(L("SyncEngine","New document in limbo: "+t),r.xa.add(n),Sl(r))}function Sl(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new q(ne.fromString(e)),n=r.qa.next();r.Na.set(n,new hI(t)),r.Oa=r.Oa.insert(t,n),lo(r.remoteStore,new ut(Ke(Xs(t.path)),n,"TargetPurposeLimboResolution",Ue.oe))}}async function qt(r,e,t){const n=K(r),i=[],s=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((l,c)=>{o.push(n.Ka(c,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){i.push(h);const p=gl.Wi(c.targetId,h);s.push(p)}}))}),await Promise.all(o),n.Ca.d_(i),await async function(c,h){const f=K(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>S.forEach(h,_=>S.forEach(_.$i,b=>f.persistence.referenceDelegate.addReference(p,_.targetId,b)).next(()=>S.forEach(_.Ui,b=>f.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))}catch(p){if(!zt(p))throw p;L("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const b=f.os.get(_),k=b.snapshotVersion,C=b.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(_,C)}}}(n.localStore,s))}async function EI(r,e){const t=K(r);if(!t.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const n=await tp(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(c=>{c.reject(new $(D.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await qt(t,n.hs)}}function bI(r,e){const t=K(r),n=t.Na.get(e);if(n&&n.va)return Y().add(n.key);{let i=Y();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const l=t.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}async function TI(r,e){const t=K(r),n=await La(t.localStore,e.query,!0),i=e.view.ba(n);return t.isPrimaryClient&&Ba(t,e.targetId,i.wa),i}async function xI(r,e){const t=K(r);return ip(t.localStore,e).then(n=>qt(t,n))}async function AI(r,e,t,n){const i=K(r),s=await function(l,c){const h=K(l),f=K(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,c).next(_=>_?h.localDocuments.getDocuments(p,_):S.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await mr(i.remoteStore):t==="acknowledged"||t==="rejected"?(Al(i,e,n||null),xl(i,e),function(l,c){K(K(l).mutationQueue).On(c)}(i.localStore,e)):G(),await qt(i,s)):L("SyncEngine","Cannot apply mutation batch with id: "+e)}async function SI(r,e){const t=K(r);if(co(t),Rl(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await gh(t,n.toArray());t.Qa=!0,await ja(t.remoteStore,!0);for(const s of i)lo(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const n=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then(()=>(or(t,o),rr(t.localStore,o,!0))),ir(t.remoteStore,o)}),await i,await gh(t,n),function(o){const l=K(o);l.Na.forEach((c,h)=>{ir(l.remoteStore,h)}),l.La.pr(),l.Na=new Map,l.Oa=new oe(q.comparator)}(t),t.Qa=!1,await ja(t.remoteStore,!1)}}async function gh(r,e,t){const n=K(r),i=[],s=[];for(const o of e){let l;const c=n.Ma.get(o);if(c&&c.length!==0){l=await Ds(n.localStore,Ke(c[0]));for(const h of c){const f=n.Fa.get(h),p=await TI(n,f);p.snapshot&&s.push(p.snapshot)}}else{const h=await rp(n.localStore,o);l=await Ds(n.localStore,h),await Tl(n,bp(h),o,!1,l.resumeToken)}i.push(l)}return n.Ca.d_(s),i}function bp(r){return cf(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function RI(r){return function(t){return K(K(t).persistence).Qi()}(K(r).localStore)}async function PI(r,e,t,n){const i=K(r);if(i.Qa)return void L("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await ip(i.localStore,df(s[0])),l=wi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ge.EMPTY_BYTE_STRING);await qt(i,o,l);break}case"rejected":await rr(i.localStore,e,!0),or(i,e,n);break;default:G()}}async function CI(r,e,t){const n=co(r);if(n.Qa){for(const i of e){if(n.Ma.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){L("SyncEngine","Adding an already active target "+i);continue}const s=await rp(n.localStore,i),o=await Ds(n.localStore,s);await Tl(n,bp(s),o.targetId,!1,o.resumeToken),lo(n.remoteStore,o)}for(const i of t)n.Ma.has(i)&&await rr(n.localStore,i,!1).then(()=>{ir(n.remoteStore,i),or(n,i)}).catch(Bt)}}function co(r){const e=K(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ip.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yI.bind(null,e),e.Ca.d_=aI.bind(null,e.eventManager),e.Ca.$a=lI.bind(null,e.eventManager),e}function Rl(r){const e=K(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wI.bind(null,e),e}class ar{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return ep(this.persistence,new Zf,e.initialUser,this.serializer)}Ga(e){return new Yf(so.Zr,this.serializer)}Wa(e){return new op}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ar.provider={build:()=>new ar};class Tp extends ar{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Rl(this.Ja.syncEngine),await mr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return ep(this.persistence,new Zf,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new yw(n,e.asyncQueue,t)}Ha(e,t){const n=new Yy(t,this.persistence);return new Jy(e.asyncQueue,n)}Ga(e){const t=Xf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Fe.withCacheSize(this.cacheSizeBytes):Fe.DEFAULT;return new ml(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,ap(),us(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new op}}class kI extends Tp{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof ra&&(this.sharedClientState.syncEngine={no:AI.bind(null,t),ro:PI.bind(null,t),io:CI.bind(null,t),Qi:RI.bind(null,t),eo:xI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await SI(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=ap();if(!ra.D(t))throw new $(D.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Xf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ra(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class lr{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>mh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=EI.bind(null,this.syncEngine),await ja(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oI}()}createDatastore(e){const t=oo(e.databaseInfo.databaseId),n=function(s){return new $w(s)}(e.databaseInfo);return function(s,o,l,c){return new Kw(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,o,l){return new Hw(n,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>mh(this.syncEngine,t,0),function(){return uh.D()?new uh:new Uw}())}createSyncEngine(e,t){return function(i,s,o,l,c,h,f){const p=new dI(i,s,o,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=K(i);L("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ei(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}lr.provider={build:()=>new lr};/**
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
 */class xp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):pe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class VI{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ee.UNAUTHENTICATED,this.clientId=Fd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{L("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(L("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=El(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function sa(r,e){r.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await tp(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function _h(r,e){r.asyncQueue.verifyOperationInProgress();const t=await DI(r);L("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>hh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>hh(e.remoteStore,i)),r._onlineComponents=e}async function DI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await sa(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Hn("Error using user provided cache. Falling back to memory cache: "+t),await sa(r,new ar)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await sa(r,new ar);return r._offlineComponents}async function Ap(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await _h(r,r._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await _h(r,new lr))),r._onlineComponents}function NI(r){return Ap(r).then(e=>e.syncEngine)}async function Sp(r){const e=await Ap(r),t=e.eventManager;return t.onListen=fI.bind(null,e.syncEngine),t.onUnlisten=mI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gI.bind(null,e.syncEngine),t}function OI(r,e,t={}){const n=new nt;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,h){const f=new xp({next:_=>{f.Za(),o.enqueueAndForget(()=>gp(s,p));const b=_.docs.has(l);!b&&_.fromCache?h.reject(new $(D.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&_.fromCache&&c&&c.source==="server"?h.reject(new $(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new _p(Xs(l.path),f,{includeMetadataChanges:!0,_a:!0});return mp(s,p)}(await Sp(r),r.asyncQueue,e,t,n)),n.promise}function MI(r,e,t={}){const n=new nt;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,h){const f=new xp({next:_=>{f.Za(),o.enqueueAndForget(()=>gp(s,p)),_.fromCache&&c.source==="server"?h.reject(new $(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new _p(l,f,{includeMetadataChanges:!0,_a:!0});return mp(s,p)}(await Sp(r),r.asyncQueue,e,t,n)),n.promise}/**
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
 */function Rp(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const yh=new Map;/**
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
 */function Pp(r,e,t){if(!t)throw new $(D.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function LI(r,e,t,n){if(e===!0&&n===!0)throw new $(D.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function vh(r){if(!q.isDocumentKey(r))throw new $(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function wh(r){if(q.isDocumentKey(r))throw new $(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function uo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":G()}function Ze(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new $(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uo(r);throw new $(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class Ih{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rp((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ho{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ih({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ih(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new jy;switch(n.type){case"firstParty":return new $y(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=yh.get(t);n&&(L("ComponentProvider","Removing Datastore"),yh.delete(t),n.terminate())}(this),Promise.resolve()}}function FI(r,e,t,n={}){var i;const s=(r=Ze(r,ho))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let l,c;if(typeof n.mockUserToken=="string")l=n.mockUserToken,c=Ee.MOCK_USER;else{l=__(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const h=n.mockUserToken.sub||n.mockUserToken.user_id;if(!h)throw new $(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ee(h)}r._authCredentials=new Uy(new Ld(l,c))}}/**
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
 */class In{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new In(this.firestore,e,this._query)}}class Le{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}}class Mt extends In{constructor(e,t,n){super(e,t,Xs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new q(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function ln(r,e,...t){if(r=xe(r),Pp("collection","path",e),r instanceof ho){const n=ne.fromString(e,...t);return wh(n),new Mt(r,null,n)}{if(!(r instanceof Le||r instanceof Mt))throw new $(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return wh(n),new Mt(r.firestore,null,n)}}function Lt(r,e,...t){if(r=xe(r),arguments.length===1&&(e=Fd.newId()),Pp("doc","path",e),r instanceof ho){const n=ne.fromString(e,...t);return vh(n),new Le(r,null,new q(n))}{if(!(r instanceof Le||r instanceof Mt))throw new $(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return vh(n),new Le(r.firestore,r instanceof Mt?r.converter:null,new q(n))}}/**
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
 */class Eh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new lp(this,"async_queue_retry"),this.Vu=()=>{const n=us();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=us();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=us();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new nt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!zt(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(n);throw pe("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Il.createAndSchedule(this,e,t,n,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}/**
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
 */const za=-1;class En extends ho{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Eh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Eh(e),this._firestoreClient=void 0,await e}}}function zn(r,e,t){t||(t="(default)");const n=Hs(r,"firestore");if(n.isInitialized(t)){const i=n.getImmediate({identifier:t}),s=n.getOptions(t);if(ri(s,e))return i;throw new $(D.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new $(D.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function jI(r,e){const t=typeof r=="object"?r:Ya(),n=typeof r=="string"?r:"(default)",i=Hs(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=m_("firestore");s&&FI(i,...s)}return i}function Pl(r){if(r._terminated)throw new $(D.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||UI(r),r._firestoreClient}function UI(r){var e,t,n;const i=r._freezeSettings(),s=function(l,c,h,f){return new yv(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Rp(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new VI(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(r._componentsProvider))}/**
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
 */class cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cr(ge.fromBase64String(e))}catch(t){throw new $(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new cr(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class po{constructor(e){this._methodName=e}}/**
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
 */class Cl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */class kl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const BI=/^__.*__$/;class zI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new yt(e,this.data,this.fieldMask,t,this.fieldTransforms):new pr(e,this.data,t,this.fieldTransforms)}}class Cp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new yt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function kp(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Vl{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Vl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ls(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(kp(this.Cu)&&BI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class $I{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||oo(e)}Qu(e,t,n,i=!1){return new Vl({Cu:e,methodName:t,qu:n,path:ue.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mo(r){const e=r._freezeSettings(),t=oo(r._databaseId);return new $I(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Vp(r,e,t,n,i,s={}){const o=r.Qu(s.merge||s.mergeFields?2:0,e,t,i);Nl("Data must be an object, but it was:",o,n);const l=Dp(n,o);let c,h;if(s.merge)c=new Be(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const _=$a(e,p,t);if(!o.contains(_))throw new $(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Op(f,_)||f.push(_)}c=new Be(f),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new zI(new ke(l),c,h)}class bi extends po{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bi}}class Dl extends po{_toFieldTransform(e){return new Ef(e.path,new Zn)}isEqual(e){return e instanceof Dl}}function qI(r,e,t,n){const i=r.Qu(1,e,t);Nl("Data must be an object, but it was:",i,n);const s=[],o=ke.empty();vn(n,(c,h)=>{const f=Ol(e,c,t);h=xe(h);const p=i.Nu(f);if(h instanceof bi)s.push(f);else{const _=Ti(h,p);_!=null&&(s.push(f),o.set(f,_))}});const l=new Be(s);return new Cp(o,l,i.fieldTransforms)}function GI(r,e,t,n,i,s){const o=r.Qu(1,e,t),l=[$a(e,n,t)],c=[i];if(s.length%2!=0)throw new $(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)l.push($a(e,s[_])),c.push(s[_+1]);const h=[],f=ke.empty();for(let _=l.length-1;_>=0;--_)if(!Op(h,l[_])){const b=l[_];let k=c[_];k=xe(k);const C=o.Nu(b);if(k instanceof bi)h.push(b);else{const P=Ti(k,C);P!=null&&(h.push(b),f.set(b,P))}}const p=new Be(h);return new Cp(f,p,o.fieldTransforms)}function KI(r,e,t,n=!1){return Ti(t,r.Qu(n?4:3,e))}function Ti(r,e){if(Np(r=xe(r)))return Nl("Unsupported field value:",e,r),Dp(r,e);if(r instanceof po)return function(n,i){if(!kp(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const s=[];let o=0;for(const l of n){let c=Ti(l,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ov(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=he.fromDate(n);return{timestampValue:nr(i.serializer,s)}}if(n instanceof he){const s=new he(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:nr(i.serializer,s)}}if(n instanceof Cl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof cr)return{bytesValue:Pf(i.serializer,n._byteString)};if(n instanceof Le){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:hl(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof kl)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return ol(l.serializer,c)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${uo(n)}`)}(r,e)}function Dp(r,e){const t={};return Jd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vn(r,(n,i)=>{const s=Ti(i,e.Mu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function Np(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof he||r instanceof Cl||r instanceof cr||r instanceof Le||r instanceof po||r instanceof kl)}function Nl(r,e,t){if(!Np(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=uo(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function $a(r,e,t){if((e=xe(e))instanceof fo)return e._internalPath;if(typeof e=="string")return Ol(r,e);throw Ls("Field path arguments must be of type string or ",r,!1,void 0,t)}const WI=new RegExp("[~\\*/\\[\\]]");function Ol(r,e,t){if(e.search(WI)>=0)throw Ls(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new fo(...e.split("."))._internalPath}catch{throw Ls(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ls(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${n}`),o&&(c+=` in document ${i}`),c+=")"),new $(D.INVALID_ARGUMENT,l+r+c)}function Op(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class Mp{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Lp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class HI extends Mp{data(){return super.data()}}function Lp(r,e){return typeof e=="string"?Ol(r,e):e instanceof fo?e._internalPath:e._delegate._internalPath}/**
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
 */function QI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new $(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ml{}class Fp extends Ml{}function ei(r,e,...t){let n=[];e instanceof Ml&&n.push(e),n=n.concat(t),function(s){const o=s.filter(c=>c instanceof Fl).length,l=s.filter(c=>c instanceof Ll).length;if(o>1||o>0&&l>0)throw new $(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Ll extends Fp{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ll(e,t,n)}_apply(e){const t=this._parse(e);return jp(e._query,t),new In(e.firestore,e.converter,Pa(e._query,t))}_parse(e){const t=mo(e.firestore);return function(s,o,l,c,h,f,p){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Th(p,f);const b=[];for(const k of p)b.push(bh(c,s,k));_={arrayValue:{values:b}}}else _=bh(c,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Th(p,f),_=KI(l,o,p,f==="in"||f==="not-in");return Z.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Fl extends Ml{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Fl(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)jp(o,c),o=Pa(o,c)}(e._query,t),new In(e.firestore,e.converter,Pa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jl extends Fp{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new jl(e,t,n)}_apply(e){return new In(e.firestore,e.converter,Ss(e._query,this._limit,this._limitType))}}function ti(r){return jl._create("limit",r,"F")}function bh(r,e,t){if(typeof(t=xe(t))=="string"){if(t==="")throw new $(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uf(e)&&t.indexOf("/")!==-1)throw new $(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ne.fromString(t));if(!q.isDocumentKey(n))throw new $(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ui(r,new q(n))}if(t instanceof Le)return ui(r,t._key);throw new $(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uo(t)}.`)}function Th(r,e){if(!Array.isArray(r)||r.length===0)throw new $(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jp(r,e){const t=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new $(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class JI{convertValue(e,t="none"){switch(fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ft(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return vn(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(o=>ce(o.doubleValue));return new kl(s)}convertGeoPoint(e){return new Cl(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=rl(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(li(e));default:return null}}convertTimestamp(e){const t=mt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ne.fromString(e);W(jf(n));const i=new dn(n.get(1),n.get(3)),s=new q(n.popFirst(5));return i.isEqual(t)||pe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Up(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
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
 */class Gr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bp extends Mp{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Lp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class hs extends Bp{data(e={}){return super.data(e)}}class YI{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Gr(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new hs(this._firestore,this._userDataWriter,n.key,n,new Gr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new hs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Gr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new hs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Gr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:XI(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function XI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function go(r){r=Ze(r,Le);const e=Ze(r.firestore,En);return OI(Pl(e),r._key).then(t=>nE(e,r,t))}class zp extends JI{constructor(e){super(),this.firestore=e}convertBytes(e){return new cr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}}function $n(r){r=Ze(r,In);const e=Ze(r.firestore,En),t=Pl(e),n=new zp(e);return QI(r._query),MI(t,r._query).then(i=>new YI(e,n,r,i))}function ZI(r,e,t){r=Ze(r,Le);const n=Ze(r.firestore,En),i=Up(r.converter,e);return yo(n,[Vp(mo(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,Ve.none())])}function _o(r,e,t,...n){r=Ze(r,Le);const i=Ze(r.firestore,En),s=mo(i);let o;return o=typeof(e=xe(e))=="string"||e instanceof fo?GI(s,"updateDoc",r._key,e,t,n):qI(s,"updateDoc",r._key,e),yo(i,[o.toMutation(r._key,Ve.exists(!0))])}function eE(r){return yo(Ze(r.firestore,En),[new no(r._key,Ve.none())])}function tE(r,e){const t=Ze(r.firestore,En),n=Lt(r),i=Up(r.converter,e);return yo(t,[Vp(mo(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Ve.exists(!1))]).then(()=>n)}function yo(r,e){return function(n,i){const s=new nt;return n.asyncQueue.enqueueAndForget(async()=>_I(await NI(n),i,s)),s.promise}(Pl(r),e)}function nE(r,e,t){const n=t.docs.get(e._key),i=new zp(r);return new Bp(r,i,e._key,n,new Gr(t.hasPendingWrites,t.fromCache),e.converter)}class rE{constructor(e){this.kind="memory",this._onlineComponentProvider=lr.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=ar.provider}toJSON(){return{kind:this.kind}}}class iE{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=cE(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function sE(r){return new rE(r)}function oE(r){return new iE(r)}class aE{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=lr.provider,this._offlineComponentProvider={build:t=>new Tp(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class lE{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=lr.provider,this._offlineComponentProvider={build:t=>new kI(t,e==null?void 0:e.cacheSizeBytes)}}}function cE(r){return new aE(void 0)}function uE(){return new lE}/**
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
 */function hE(){return new bi("deleteField")}function Ye(){return new Dl("serverTimestamp")}(function(e,t=!0){(function(i){fr=i})(dr),Wn(new un("firestore",(n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),l=new En(new By(n.getProvider("auth-internal")),new Gy(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dn(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Nt(_u,"4.7.3",e),Nt(_u,"4.7.3","esm2017")})();var dE="firebase",fE="10.14.1";/**
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
 */Nt(dE,fE,"app");function $p(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pE=$p,qp=new mi("auth","Firebase",$p());/**
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
 */const Fs=new Qa("@firebase/auth");function mE(r,...e){Fs.logLevel<=X.WARN&&Fs.warn(`Auth (${dr}): ${r}`,...e)}function ds(r,...e){Fs.logLevel<=X.ERROR&&Fs.error(`Auth (${dr}): ${r}`,...e)}/**
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
 */function st(r,...e){throw Bl(r,...e)}function Xe(r,...e){return Bl(r,...e)}function Ul(r,e,t){const n=Object.assign(Object.assign({},pE()),{[e]:t});return new mi("auth","Firebase",n).create(e,{appName:r.name})}function cn(r){return Ul(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gE(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&st(r,"argument-error"),Ul(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bl(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return qp.create(r,...e)}function Q(r,e,...t){if(!r)throw Bl(e,...t)}function ht(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ds(e),new Error(e)}function gt(r,e){r||ht(e)}/**
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
 */function qa(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function _E(){return xh()==="http:"||xh()==="https:"}function xh(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function yE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_E()||I_()||"connection"in navigator)?navigator.onLine:!0}function vE(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class xi{constructor(e,t){this.shortDelay=e,this.longDelay=t,gt(t>e,"Short delay should be less than long delay!"),this.isMobile=y_()||E_()}get(){return yE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zl(r,e){gt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Gp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IE=new xi(3e4,6e4);function $l(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function _r(r,e,t,n,i={}){return Kp(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const l=gi(Object.assign({key:r.config.apiKey},o)).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:c},s);return w_()||(h.referrerPolicy="no-referrer"),Gp.fetch()(Wp(r,r.config.apiHost,t,l),h)})}async function Kp(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},wE),e);try{const i=new bE(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zi(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(r,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zi(r,"email-already-in-use",o);if(c==="USER_DISABLED")throw Zi(r,"user-disabled",o);const f=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ul(r,f,h);st(r,f)}}catch(i){if(i instanceof _t)throw i;st(r,"network-request-failed",{message:String(i)})}}async function EE(r,e,t,n,i={}){const s=await _r(r,e,t,n,i);return"mfaPendingCredential"in s&&st(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Wp(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?zl(r.config,i):`${r.config.apiScheme}://${i}`}class bE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Xe(this.auth,"network-request-failed")),IE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Xe(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */async function TE(r,e){return _r(r,"POST","/v1/accounts:delete",e)}async function Hp(r,e){return _r(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ni(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xE(r,e=!1){const t=xe(r),n=await t.getIdToken(e),i=ql(n);Q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:ni(oa(i.auth_time)),issuedAtTime:ni(oa(i.iat)),expirationTime:ni(oa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function oa(r){return Number(r)*1e3}function ql(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return ds("JWT malformed, contained fewer than 3 sections"),null;try{const i=wd(t);return i?JSON.parse(i):(ds("Failed to decode base64 JWT payload"),null)}catch(i){return ds("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ah(r){const e=ql(r);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fi(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof _t&&AE(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function AE({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class SE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ga{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function js(r){var e;const t=r.auth,n=await r.getIdToken(),i=await fi(r,Hp(t,{idToken:n}));Q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Qp(s.providerUserInfo):[],l=PE(r.providerData,o),c=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ga(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function RE(r){const e=xe(r);await js(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PE(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Qp(r){return r.map(e=>{var{providerId:t}=e,n=Wa(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function CE(r,e){const t=await Kp(r,{},async()=>{const n=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=Wp(r,i,"/v1/token",`key=${s}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Gp.fetch()(o,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kE(r,e){return _r(r,"POST","/v2/accounts:revokeToken",$l(r,e))}/**
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
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ah(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=Ah(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await CE(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new qn;return n&&(Q(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
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
 */function xt(r,e){Q(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class dt{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Wa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ga(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await fi(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xE(this,e)}reload(){return RE(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await js(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await fi(this,TE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,l,c,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,b=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,M=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:U,isAnonymous:F,providerData:j,stsTokenManager:E}=t;Q(N&&E,e,"internal-error");const v=qn.fromJSON(this.name,E);Q(typeof N=="string",e,"internal-error"),xt(p,e.name),xt(_,e.name),Q(typeof U=="boolean",e,"internal-error"),Q(typeof F=="boolean",e,"internal-error"),xt(b,e.name),xt(k,e.name),xt(C,e.name),xt(P,e.name),xt(M,e.name),xt(B,e.name);const w=new dt({uid:N,auth:e,email:_,emailVerified:U,displayName:p,isAnonymous:F,photoURL:k,phoneNumber:b,tenantId:C,stsTokenManager:v,createdAt:M,lastLoginAt:B});return j&&Array.isArray(j)&&(w.providerData=j.map(I=>Object.assign({},I))),P&&(w._redirectEventId=P),w}static async _fromIdTokenResponse(e,t,n=!1){const i=new qn;i.updateFromServerResponse(t);const s=new dt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await js(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Qp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new qn;l.updateFromIdToken(n);const c=new dt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ga(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
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
 */const Sh=new Map;function ft(r){gt(r instanceof Function,"Expected a class definition");let e=Sh.get(r);return e?(gt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Sh.set(r,e),e)}/**
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
 */class Jp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jp.type="NONE";const Rh=Jp;/**
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
 */function fs(r,e,t){return`firebase:${r}:${e}:${t}`}class Gn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=fs(this.userKey,i.apiKey,s),this.fullPersistenceKey=fs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Gn(ft(Rh),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||ft(Rh);const o=fs(n,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(o);if(f){const p=dt._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Gn(s,e,n):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Gn(s,e,n))}}/**
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
 */function Ph(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(em(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nm(e))return"Blackberry";if(rm(e))return"Webos";if(Xp(e))return"Safari";if((e.includes("chrome/")||Zp(e))&&!e.includes("edge/"))return"Chrome";if(tm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Yp(r=ve()){return/firefox\//i.test(r)}function Xp(r=ve()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zp(r=ve()){return/crios\//i.test(r)}function em(r=ve()){return/iemobile/i.test(r)}function tm(r=ve()){return/android/i.test(r)}function nm(r=ve()){return/blackberry/i.test(r)}function rm(r=ve()){return/webos/i.test(r)}function Gl(r=ve()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function VE(r=ve()){var e;return Gl(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DE(){return b_()&&document.documentMode===10}function im(r=ve()){return Gl(r)||tm(r)||rm(r)||nm(r)||/windows phone/i.test(r)||em(r)}/**
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
 */function sm(r,e=[]){let t;switch(r){case"Browser":t=Ph(ve());break;case"Worker":t=`${Ph(ve())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dr}/${n}`}/**
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
 */class NE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function OE(r,e={}){return _r(r,"GET","/v2/passwordPolicy",$l(r,e))}/**
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
 */const ME=6;class LE{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ME,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class FE{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ch(this),this.idTokenSubscription=new Ch(this),this.beforeStateQueue=new NE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ft(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Gn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Hp(this,{idToken:e}),n=await dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await js(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(cn(this));const t=e?xe(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OE(this),t=new LE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await kE(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ft(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await Gn.create(this,[ft(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&mE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function vo(r){return xe(r)}class Ch{constructor(e){this.auth=e,this.observer=null,this.addObserver=P_(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Kl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jE(r){Kl=r}function UE(r){return Kl.loadJS(r)}function BE(){return Kl.gapiScript}function zE(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function $E(r,e){const t=Hs(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(ri(s,e??{}))return i;st(i,"already-initialized")}return t.initialize({options:e})}function qE(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(ft);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function GE(r,e,t){const n=vo(r);Q(n._canInitEmulator,n,"emulator-config-failed"),Q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=om(e),{host:o,port:l}=KE(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${s}//${o}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),WE()}function om(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function KE(r){const e=om(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:kh(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:kh(o)}}}function kh(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function WE(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class am{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,t){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}/**
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
 */async function Kn(r,e){return EE(r,"POST","/v1/accounts:signInWithIdp",$l(r,e))}/**
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
 */const HE="http://localhost";class yn extends am{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):st("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Wa(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new yn(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Kn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Kn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kn(e,t)}buildRequest(){const e={requestUri:HE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=gi(t)}return e}}/**
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
 */class Wl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ai extends Wl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class St extends Ai{constructor(){super("facebook.com")}static credential(e){return yn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
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
 */class lt extends Ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yn._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return lt.credential(t,n)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
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
 */class Rt extends Ai{constructor(){super("github.com")}static credential(e){return yn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
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
 */class Pt extends Ai{constructor(){super("twitter.com")}static credential(e,t){return yn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Pt.credential(t,n)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */class ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await dt._fromIdTokenResponse(e,n,i),o=Vh(n);return new ur({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Vh(n);return new ur({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Vh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Us extends _t{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Us.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Us(e,t,n,i)}}function lm(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Us._fromErrorAndOperation(r,s,e,n):s})}async function QE(r,e,t=!1){const n=await fi(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ur._forOperation(r,"link",n)}/**
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
 */async function JE(r,e,t=!1){const{auth:n}=r;if(ct(n.app))return Promise.reject(cn(n));const i="reauthenticate";try{const s=await fi(r,lm(n,i,e,r),t);Q(s.idToken,n,"internal-error");const o=ql(s.idToken);Q(o,n,"internal-error");const{sub:l}=o;return Q(r.uid===l,n,"user-mismatch"),ur._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&st(n,"user-mismatch"),s}}/**
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
 */async function YE(r,e,t=!1){if(ct(r.app))return Promise.reject(cn(r));const n="signIn",i=await lm(r,n,e),s=await ur._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function XE(r,e,t,n){return xe(r).onIdTokenChanged(e,t,n)}function ZE(r,e,t){return xe(r).beforeAuthStateChanged(e,t)}function eb(r,e,t,n){return xe(r).onAuthStateChanged(e,t,n)}function tb(r){return xe(r).signOut()}const Bs="__sak";/**
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
 */class cm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const nb=1e3,rb=10;class um extends cm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=im(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);DE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rb):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}um.type="LOCAL";const ib=um;/**
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
 */class hm extends cm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hm.type="SESSION";const dm=hm;/**
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
 */function sb(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class wo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new wo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(o).map(async h=>h(t.origin,s)),c=await sb(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wo.receivers=[];/**
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
 */function Hl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class ob{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const h=Hl("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rt(){return window}function ab(r){rt().location.href=r}/**
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
 */function fm(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function lb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cb(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function ub(){return fm()?self:null}/**
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
 */const pm="firebaseLocalStorageDb",hb=1,zs="firebaseLocalStorage",mm="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Io(r,e){return r.transaction([zs],e?"readwrite":"readonly").objectStore(zs)}function db(){const r=indexedDB.deleteDatabase(pm);return new Si(r).toPromise()}function Ka(){const r=indexedDB.open(pm,hb);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(zs,{keyPath:mm})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(zs)?e(n):(n.close(),await db(),e(await Ka()))})})}async function Dh(r,e,t){const n=Io(r,!0).put({[mm]:e,value:t});return new Si(n).toPromise()}async function fb(r,e){const t=Io(r,!1).get(e),n=await new Si(t).toPromise();return n===void 0?null:n.value}function Nh(r,e){const t=Io(r,!0).delete(e);return new Si(t).toPromise()}const pb=800,mb=3;class gm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ka(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>mb)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wo._getInstance(ub()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await lb(),!this.activeServiceWorker)return;this.sender=new ob(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ka();return await Dh(e,Bs,"1"),await Nh(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>fb(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Nh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Io(i,!1).getAll();return new Si(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gm.type="LOCAL";const gb=gm;new xi(3e4,6e4);/**
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
 */function _m(r,e){return e?ft(e):(Q(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Ql extends am{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _b(r){return YE(r.auth,new Ql(r),r.bypassAuthState)}function yb(r){const{auth:e,user:t}=r;return Q(t,e,"internal-error"),JE(t,new Ql(r),r.bypassAuthState)}async function vb(r){const{auth:e,user:t}=r;return Q(t,e,"internal-error"),QE(t,new Ql(r),r.bypassAuthState)}/**
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
 */class ym{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _b;case"linkViaPopup":case"linkViaRedirect":return vb;case"reauthViaPopup":case"reauthViaRedirect":return yb;default:st(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wb=new xi(2e3,1e4);async function Ib(r,e,t){if(ct(r.app))return Promise.reject(Xe(r,"operation-not-supported-in-this-environment"));const n=vo(r);gE(r,e,Wl);const i=_m(n,t);return new rn(n,"signInViaPopup",e,i).executeNotNull()}class rn extends ym{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wb.get())};e()}}rn.currentPopupAction=null;/**
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
 */const Eb="pendingRedirect",ps=new Map;class bb extends ym{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ps.get(this.auth._key());if(!e){try{const n=await Tb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ps.set(this.auth._key(),e)}return this.bypassAuthState||ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tb(r,e){const t=Sb(e),n=Ab(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function xb(r,e){ps.set(r._key(),e)}function Ab(r){return ft(r._redirectPersistence)}function Sb(r){return fs(Eb,r.config.apiKey,r.name)}async function Rb(r,e,t=!1){if(ct(r.app))return Promise.reject(cn(r));const n=vo(r),i=_m(n,e),o=await new bb(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const Pb=10*60*1e3;class Cb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!vm(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oh(e))}saveEventToCache(e){this.cachedEventUids.add(Oh(e)),this.lastProcessedEventTime=Date.now()}}function Oh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function vm({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kb(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vm(r);default:return!1}}/**
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
 */async function Vb(r,e={}){return _r(r,"GET","/v1/projects",e)}/**
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
 */const Db=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nb=/^https?/;async function Ob(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Vb(r);for(const t of e)try{if(Mb(t))return}catch{}st(r,"unauthorized-domain")}function Mb(r){const e=qa(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Nb.test(t))return!1;if(Db.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const Lb=new xi(3e4,6e4);function Mh(){const r=rt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Fb(r){return new Promise((e,t)=>{var n,i,s;function o(){Mh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mh(),t(Xe(r,"network-request-failed"))},timeout:Lb.get()})}if(!((i=(n=rt().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rt().gapi)===null||s===void 0)&&s.load)o();else{const l=zE("iframefcb");return rt()[l]=()=>{gapi.load?o():t(Xe(r,"network-request-failed"))},UE(`${BE()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ms=null,e})}let ms=null;function jb(r){return ms=ms||Fb(r),ms}/**
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
 */const Ub=new xi(5e3,15e3),Bb="__/auth/iframe",zb="emulator/auth/iframe",$b={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gb(r){const e=r.config;Q(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?zl(e,zb):`https://${r.config.authDomain}/${Bb}`,n={apiKey:e.apiKey,appName:r.name,v:dr},i=qb.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${gi(n).slice(1)}`}async function Kb(r){const e=await jb(r),t=rt().gapi;return Q(t,r,"internal-error"),e.open({where:document.body,url:Gb(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$b,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=Xe(r,"network-request-failed"),l=rt().setTimeout(()=>{s(o)},Ub.get());function c(){rt().clearTimeout(l),i(n)}n.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Wb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hb=500,Qb=600,Jb="_blank",Yb="http://localhost";class Lh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xb(r,e,t,n=Hb,i=Qb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Wb),{width:n.toString(),height:i.toString(),top:s,left:o}),h=ve().toLowerCase();t&&(l=Zp(h)?Jb:t),Yp(h)&&(e=e||Yb,c.scrollbars="yes");const f=Object.entries(c).reduce((_,[b,k])=>`${_}${b}=${k},`,"");if(VE(h)&&l!=="_self")return Zb(e||"",l),new Lh(null);const p=window.open(e||"",l,f);Q(p,r,"popup-blocked");try{p.focus()}catch{}return new Lh(p)}function Zb(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const eT="__/auth/handler",tT="emulator/auth/handler",nT=encodeURIComponent("fac");async function Fh(r,e,t,n,i,s){Q(r.config.authDomain,r,"auth-domain-config-required"),Q(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:dr,eventId:i};if(e instanceof Wl){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",R_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ai){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await r._getAppCheckToken(),h=c?`#${nT}=${encodeURIComponent(c)}`:"";return`${rT(r)}?${gi(l).slice(1)}${h}`}function rT({config:r}){return r.emulator?zl(r,tT):`https://${r.authDomain}/${eT}`}/**
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
 */const aa="webStorageSupport";class iT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dm,this._completeRedirectFn=Rb,this._overrideRedirectResult=xb}async _openPopup(e,t,n,i){var s;gt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Fh(e,t,n,qa(),i);return Xb(e,o,Hl())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Fh(e,t,n,qa(),i);return ab(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(gt(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Kb(e),n=new Cb(e);return t.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(aa,{type:aa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[aa];o!==void 0&&t(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ob(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return im()||Xp()||Gl()}}const sT=iT;var jh="@firebase/auth",Uh="1.7.9";/**
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
 */class oT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lT(r){Wn(new un("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sm(r)},h=new FE(n,i,s,c);return qE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Wn(new un("auth-internal",e=>{const t=vo(e.getProvider("auth").getImmediate());return(n=>new oT(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(jh,Uh,aT(r)),Nt(jh,Uh,"esm2017")}/**
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
 */const cT=5*60,uT=bd("authIdTokenMaxAge")||cT;let Bh=null;const hT=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>uT)return;const i=t==null?void 0:t.token;Bh!==i&&(Bh=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dT(r=Ya()){const e=Hs(r,"auth");if(e.isInitialized())return e.getImmediate();const t=$E(r,{popupRedirectResolver:sT,persistence:[gb,ib,dm]}),n=bd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=hT(s.toString());ZE(t,o,()=>o(t.currentUser)),XE(t,l=>o(l))}}const i=Id("auth");return i&&GE(t,`http://${i}`),t}function fT(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}jE({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Xe("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",fT().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lT("Browser");const wm=()=>{const r="production";if(["development","staging","production"].includes(r))return r;const e=window.location.hostname;return e.includes("localhost")||e.includes("127.0.0.1")?"development":e.includes("staging")||e.includes("test")||e.includes("dev")?"staging":"production"},pT={development:{apiUrl:"http://localhost:3000/api",databaseType:"local",storagePrefix:"blindtab_dev_",enableAnalytics:!1,logLevel:"debug",features:{tourEnabled:!0,editorEnabled:!0,importExportEnabled:!0,debugTools:!0}},staging:{apiUrl:"https://staging-api.blindtab.app/api",databaseType:"remote",storagePrefix:"blindtab_staging_",enableAnalytics:!0,logLevel:"info",features:{tourEnabled:!0,editorEnabled:!0,importExportEnabled:!0,debugTools:!0}},production:{apiUrl:"https://api.blindtab.app/api",databaseType:"remote",storagePrefix:"blindtab_",enableAnalytics:!0,logLevel:"error",features:{tourEnabled:!0,editorEnabled:!0,importExportEnabled:!0,debugTools:!1}}},mT=()=>{const r=wm();return console.log(`Running in ${r} environment`),pT[r]},hr=wm(),gT=mT(),pi=hr==="development",_T=hr==="production";pi&&(console.log("Environment:",hr),console.log("Config:",gT));const yT={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_URL:"https://api.blindtab.app/api",VITE_APP_ENV:"production",VITE_ENABLE_ANALYTICS:"true",VITE_ENABLE_DEBUG_TOOLS:"false",VITE_FIREBASE_API_KEY:"AIzaSyAtDg3VWHMBGepQ3Cu-G6A_9_CXGKNlPxE",VITE_FIREBASE_APP_ID:"1:205665942654:web:a23c572fb20d4ed14eec2f",VITE_FIREBASE_AUTH_DOMAIN:"blindtab-db.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"205665942654",VITE_FIREBASE_PROJECT_ID:"blindtab-db",VITE_FIREBASE_STORAGE_BUCKET:"blindtab-db.appspot.com",VITE_LOG_LEVEL:"error"},je={SONGS:"songs",TAGS:"tags",CONFIG:"config",USER_SONGS:"user_songs"};let Xt=!1;const vT=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"],zh=vT.filter(r=>!yT[r]);if(zh.length>0)throw new Error(`Missing required Firebase configuration: ${zh.join(", ")}`);const gs={apiKey:"AIzaSyAtDg3VWHMBGepQ3Cu-G6A_9_CXGKNlPxE",authDomain:"blindtab-db.firebaseapp.com",projectId:"blindtab-db",storageBucket:"blindtab-db.appspot.com",messagingSenderId:"205665942654",appId:"1:205665942654:web:a23c572fb20d4ed14eec2f"},bn=window.location.hostname.includes("-projects.vercel.app")||window.location.hostname.includes("-staging.vercel.app")||window.location.hostname.includes("-preview.vercel.app"),Eo=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";console.log("[Firebase] Configuration:",{authDomain:gs.authDomain,projectId:gs.projectId,storageBucket:gs.storageBucket,environment:hr,currentDomain:window.location.hostname,currentOrigin:window.location.origin,currentPath:window.location.pathname,isPreviewDeployment:bn,isLocalDevelopment:Eo,isDev:pi,usingEmulator:pi&&!1});bn&&!Eo&&console.log("[Firebase] Preview deployment detected, using default authDomain");const sn=Rd(gs);let le;try{if(bn)console.log("[Firebase] Using memory cache for preview deployment"),le=zn(sn,{localCache:sE(),experimentalForceLongPolling:!0,experimentalAutoDetectLongPolling:!0,ssl:!0,ignoreUndefinedProperties:!0,cacheSizeBytes:za});else{console.log("[Firebase] Using persistent cache for production"),le=zn(sn,{localCache:oE({tabManager:uE(),cacheSizeBytes:za}),experimentalForceLongPolling:!0,experimentalAutoDetectLongPolling:!0,ssl:!0,ignoreUndefinedProperties:!0});try{le._settings={...le._settings,host:"firestore.googleapis.com",ssl:!0},console.log("[Firebase] Applied additional connection settings for production")}catch(r){console.error("[Firebase] Failed to apply additional settings:",r)}}}catch(r){console.error("[Firebase] Error initializing Firestore with persistent cache:",r),console.log("[Firebase] Falling back to basic Firestore initialization"),le=jI(sn);const e={experimentalForceLongPolling:!0,experimentalAutoDetectLongPolling:!0,ssl:!0,ignoreUndefinedProperties:!0};try{console.log("[Firebase] Applying settings to fallback Firestore instance"),zn(sn,e);try{le._settings={...le._settings,host:"firestore.googleapis.com",ssl:!0},console.log("[Firebase] Applied additional connection settings to fallback instance")}catch(t){console.error("[Firebase] Failed to apply settings to fallback instance:",t)}}catch(t){console.error("[Firebase] Failed to apply settings to fallback instance:",t)}}const _s=dT(sn),wT=new lt;Eo&&pi?(console.log("[Firebase] Initializing for local development"),console.log("[Firebase] Using production Firebase (not emulators)")):bn?(console.log("[Firebase] Initializing for preview deployment"),console.warn("[Firebase] Preview deployments may have limited functionality")):hr==="staging"?console.log("[Firebase] Initializing for staging environment"):hr==="production"&&console.log("[Firebase] Initializing for production environment");const IT=async()=>{var r,e,t,n;try{console.log("[Firebase] Testing connection to Firestore...");const i=ln(le,je.SONGS),s=ei(i,ti(1)),o=await $n(s);return console.log(`[Firebase] Connection test successful, found ${o.size} documents`),Xt=!1,!0}catch(i){if(console.error("[Firebase] Connection test failed:",i),i.code==="permission-denied")console.error("[Firebase] This might be due to unauthorized domain access. Please check Firebase Console -> Authentication -> Sign-in method -> Authorized domains"),console.error("[Firebase] Current domain:",window.location.hostname),bn&&(console.warn("[Firebase] Preview deployment detected. Switching to read-only mode."),Xt=!0);else if(i.code==="failed-precondition")console.error("[Firebase] This might be due to incorrect project configuration or missing indexes");else if((r=i.message)!=null&&r.includes("400")||(e=i.message)!=null&&e.includes("Bad Request")){console.error("[Firebase] Bad Request error detected. This is likely due to WebChannel connection issues.");try{console.log("[Firebase] Attempting to fix WebChannel connection issue..."),le._settings={...le._settings,host:"firestore.googleapis.com",ssl:!0};const s=zn(sn,{experimentalForceLongPolling:!0,ssl:!0,ignoreUndefinedProperties:!0}),o=ln(s,je.SONGS),l=ei(o,ti(1)),c=await $n(l);return console.log("[Firebase] Connection fixed! Using new Firestore instance."),le=s,Xt=!1,!0}catch(s){console.error("[Firebase] Failed to fix WebChannel connection issue:",s),Xt=!0}}else if(console.error("[Firebase] Error details:",{code:i.code,message:i.message,name:i.name,stack:i.stack}),i.name==="FirebaseError"||(t=i.message)!=null&&t.includes("network")||(n=i.message)!=null&&n.includes("jd")){console.warn("[Firebase] Network error detected. Attempting to reinitialize with enhanced long polling.");try{le=zn(sn,{experimentalForceLongPolling:!0,experimentalAutoDetectLongPolling:!0,ssl:!0,ignoreUndefinedProperties:!0,cacheSizeBytes:za}),console.log("[Firebase] Reinitialized Firestore with enhanced connection settings"),le._settings={...le._settings,host:"firestore.googleapis.com",ssl:!0};const o=ln(le,je.SONGS),l=ei(o,ti(1));return await $n(l),console.log("[Firebase] Connection fixed with enhanced settings!"),Xt=!1,!0}catch(s){console.error("[Firebase] Failed to reinitialize with enhanced settings:",s),Xt=!0}}return!1}};IT();console.log("[Firebase] Initialization successful");R.div`
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
`;const Im=O.createContext(null),bo=()=>{const r=O.useContext(Im);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r};function ET({children:r}){const[e,t]=O.useState(null),[n,i]=O.useState(!0),[s,o]=O.useState(null);O.useEffect(()=>{const p=eb(_s,_=>{t(_),i(!1)},_=>{console.error("[Auth] Auth state change error:",_),o(_),i(!1)});return()=>p()},[]);const l=async()=>{try{return(await Ib(_s,wT)).user}catch(p){throw console.error("[Auth] Google sign-in error:",p),p.code==="auth/unauthorized-domain"&&(console.warn("[Auth] This domain is not authorized in Firebase. Add it in the Firebase Console -> Authentication -> Sign-in method -> Authorized domains"),console.warn("[Auth] Current domain:",window.location.hostname),window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?console.info("[Auth] For local development, please use the Firebase emulator with VITE_USE_FIREBASE_EMULATOR=true"):(window.location.hostname.includes("-projects.vercel.app")||window.location.hostname.includes("-staging.vercel.app")||window.location.hostname.includes("-preview.vercel.app"))&&(console.info("[Auth] For preview deployments, please add this domain to Firebase authorized domains list"),console.info("[Auth] Or use the production domain that is already authorized"))),p}},f={user:e,loading:n,error:s,signIn:async()=>{try{return await l()}catch(p){throw o(p instanceof Error?p:new Error("Failed to sign in")),p}},logout:async()=>{try{await tb(_s)}catch(p){throw o(p instanceof Error?p:new Error("Failed to sign out")),p}}};return g.jsx(Im.Provider,{value:f,children:r})}async function bT(r,e){const t=Lt(le,je.USER_SONGS,r);(await go(t)).exists()?await _o(t,{[`songs.${e}`]:{songId:e,addedAt:Ye(),playCount:0},updatedAt:Ye()}):await ZI(t,{userId:r,songs:{[e]:{songId:e,addedAt:Ye(),playCount:0}},createdAt:Ye(),updatedAt:Ye()})}async function $h(r,e){const t=Lt(le,je.USER_SONGS,r);await _o(t,{[`songs.${e}`]:hE(),updatedAt:Ye()})}async function TT(r){const e=Lt(le,je.USER_SONGS,r),t=await go(e);return t.exists()?t.data():null}async function xT(r,e){const t=Lt(le,je.USER_SONGS,r),n=await go(t);if(!n.exists())return;const s=n.data().songs[e];s&&await _o(t,{[`songs.${e}.playCount`]:(s.playCount||0)+1,[`songs.${e}.lastPlayedAt`]:Ye(),updatedAt:Ye()})}const Em=O.createContext(null);function AT({children:r}){const[e,t]=O.useState([]),[n,i]=O.useState([]),[s,o]=O.useState(null),[l,c]=O.useState(!0),[h,f]=O.useState(null),[p]=O.useState(bn&&!0&&Xt),{user:_}=bo(),b=async()=>{try{c(!0),f(null);const F=(await $n(ln(le,je.SONGS))).docs.map(j=>({id:j.id,...j.data()}));if(t(F),_)try{const j=await TT(_.uid);if(j){const E=Object.keys(j.songs),v=F.filter(w=>E.includes(w.id));i(v)}else i([])}catch(j){console.error("Error fetching user songs:",j),i([])}else i([])}catch(U){console.error("Error fetching songs:",U),f(U instanceof Error?U:new Error("Failed to fetch songs"))}finally{c(!1)}};O.useEffect(()=>{b()},[_]);const k=async U=>{if(p)throw console.warn("[SongContext] Write operations are disabled in preview mode"),new Error("Write operations are disabled in preview mode");if(!_)throw new Error("Must be authenticated to add songs");await bT(_.uid,U),await b()},C=async U=>{if(p)throw console.warn("[SongContext] Write operations are disabled in preview mode"),new Error("Write operations are disabled in preview mode");if(!_)throw new Error("Must be authenticated to remove songs");await $h(_.uid,U),await b()},P=async U=>{try{const F=Lt(le,je.SONGS,U),j=await go(F);if(!j.exists())throw new Error("Song not found");const E={id:j.id,...j.data()};if(o(E),_&&!p)try{await xT(_.uid,U)}catch(v){console.error("Error updating play stats:",v)}return E}catch(F){throw console.error("Error playing song:",F),F instanceof Error?F:new Error("Failed to play song")}},M=async U=>{if(p)throw console.warn("[SongContext] Write operations are disabled in preview mode"),new Error("Write operations are disabled in preview mode");try{const F=ln(le,je.SONGS),j={...U,createdAt:Ye(),updatedAt:Ye()},E=await tE(F,j);return await b(),E.id}catch(F){throw console.error("Error creating song:",F),F instanceof Error?F:new Error("Failed to create song")}},B=async(U,F)=>{if(p)throw console.warn("[SongContext] Write operations are disabled in preview mode"),new Error("Write operations are disabled in preview mode");try{const j=Lt(le,je.SONGS,U),E={...F.title!==void 0?{title:F.title}:{},...F.artist!==void 0?{artist:F.artist}:{},...F.key?{key:F.key}:{},...F.tempo?{tempo:F.tempo}:{},...F.timeSignature?{timeSignature:F.timeSignature}:{},...F.lyrics?{lyrics:F.lyrics}:{},updatedAt:Ye()};await _o(j,E),await b()}catch(j){throw console.error("Error updating song:",j),j instanceof Error?j:new Error("Failed to update song")}},N=async U=>{if(p)throw console.warn("[SongContext] Write operations are disabled in preview mode"),new Error("Write operations are disabled in preview mode");try{s&&s.id===U&&o(null);const F=Lt(le,je.SONGS,U);if(await eE(F),_&&n.some(j=>j.id===U))try{await $h(_.uid,U)}catch(j){console.error("Error removing song from user collection:",j)}await b(),console.log(`[SongContext] Song ${U} deleted successfully`)}catch(F){throw console.error("Error deleting song:",F),F instanceof Error?F:new Error("Failed to delete song")}};return g.jsx(Em.Provider,{value:{songs:e,userSongs:n,currentSong:s,isLoading:l,error:h,isPreviewMode:p,addSongToCollection:k,removeSongFromCollection:C,playSong:P,refreshSongs:b,createNewSong:M,updateSong:B,deleteSong:N},children:r})}const Tn=()=>{const r=O.useContext(Em);if(!r)throw new Error("useSong must be used within a SongProvider");return r};R.div`
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
`;const ST=R.div`
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
`,RT=R.div`
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`,PT=R.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Dn=R.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Nn=R.label`
  font-weight: 600;
  color: var(--text-primary);
`,jr=R.input`
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-secondary);
  color: var(--text-primary);
`,CT=R.textarea`
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  min-height: 200px;
  font-family: monospace;
`,kT=R.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,qh=R.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${r=>r.$variant==="primary"?"var(--primary)":r.$variant==="danger"?"var(--error)":"var(--bg-secondary)"};
  color: ${r=>r.$variant?"white":"var(--text-primary)"};

  &:hover {
    opacity: 0.9;
  }
`;function bm({isOpen:r,onClose:e,songId:t,isNewSong:n=!1}){const{songs:i,createNewSong:s,updateSong:o}=Tn(),[l,c]=O.useState(""),[h,f]=O.useState(""),[p,_]=O.useState(""),[b,k]=O.useState(""),[C,P]=O.useState(""),[M,B]=O.useState(""),[N,U]=O.useState(!1),[F,j]=O.useState(null);O.useEffect(()=>{var w;if(r&&t&&!n){const I=i.find(T=>T.id===t);if(I){c(I.title),f(I.artist),_(I.key||""),k(((w=I.tempo)==null?void 0:w.toString())||""),P(I.timeSignature||"");const T=I.lyrics.sort((x,y)=>x.position-y.position).map(x=>x.chords?`[${x.chords}] ${x.line}`:x.line).join(`
`);B(T)}}else c(""),f(""),_(""),k(""),P(""),B("")},[r,t,n,i]);const E=w=>w.split(`
`).map((I,T)=>{const x=I.match(/^\[(.*?)\]/);return x?{line:I.replace(/^\[(.*?)\]\s*/,"").trim(),chords:x[1].trim(),position:T}:{line:I.trim(),chords:"",position:T}}),v=async w=>{w.preventDefault(),U(!0),j(null);try{const I={title:l,artist:h,key:p||null,tempo:b?parseInt(b,10):null,timeSignature:C||null,lyrics:E(M)};n?await s(I):t&&await o(t,I),e()}catch(I){console.error("Error saving song:",I),I instanceof Error&&I.message.includes("preview mode")?j("This feature is disabled in preview mode. Please use the full app to save songs."):j(I instanceof Error?I.message:"Failed to save song")}finally{U(!1)}};return r?g.jsx(ST,{onClick:e,children:g.jsx(RT,{onClick:w=>w.stopPropagation(),children:g.jsxs(PT,{onSubmit:v,children:[g.jsxs(Dn,{children:[g.jsx(Nn,{htmlFor:"title",children:"Title"}),g.jsx(jr,{id:"title",value:l,onChange:w=>c(w.target.value),placeholder:"Enter song title",required:!0})]}),g.jsxs(Dn,{children:[g.jsx(Nn,{htmlFor:"artist",children:"Artist"}),g.jsx(jr,{id:"artist",value:h,onChange:w=>f(w.target.value),placeholder:"Enter artist name",required:!0})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[g.jsxs(Dn,{children:[g.jsx(Nn,{htmlFor:"key",children:"Key"}),g.jsx(jr,{id:"key",value:p,onChange:w=>_(w.target.value),placeholder:"e.g., C"})]}),g.jsxs(Dn,{children:[g.jsx(Nn,{htmlFor:"tempo",children:"Tempo (BPM)"}),g.jsx(jr,{id:"tempo",type:"number",value:b,onChange:w=>k(w.target.value),placeholder:"e.g., 120"})]}),g.jsxs(Dn,{children:[g.jsx(Nn,{htmlFor:"timeSignature",children:"Time Signature"}),g.jsx(jr,{id:"timeSignature",value:C,onChange:w=>P(w.target.value),placeholder:"e.g., 4/4"})]})]}),g.jsxs(Dn,{children:[g.jsx(Nn,{htmlFor:"lyrics",children:"Lyrics & Chords"}),g.jsx(CT,{id:"lyrics",value:M,onChange:w=>B(w.target.value),placeholder:`Enter lyrics with chords in brackets before words, e.g:
[Am] Here comes the sun
[C] Little darling
[G] It's been a long cold lonely winter`,required:!0})]}),F&&g.jsx("div",{style:{color:"var(--error)",marginTop:"1rem"},children:F}),g.jsxs(kT,{children:[g.jsx(qh,{type:"button",onClick:e,children:"Cancel"}),g.jsx(qh,{type:"submit",$variant:"primary",disabled:N,children:N?"Saving...":n?"Create Song":"Update Song"})]})]})})}):null}R.div`
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
`;const VT=R.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${r=>r.variant==="danger"?"#ff4444":r.variant==="primary"?"#007AFF":"#f0f0f0"};
  color: ${r=>r.variant==="danger"||r.variant==="primary"?"white":"black"};
  
  &:hover {
    opacity: 0.9;
  }
`;R(VT)`
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
`;const Tm=O.createContext(void 0),DT=({children:r})=>{const[e,t]=O.useState(()=>{const i=localStorage.getItem("theme"),s=window.matchMedia("(prefers-color-scheme: dark)").matches;return i==="dark"||!i&&s});O.useEffect(()=>{e?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme")):(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme")),localStorage.setItem("theme",e?"dark":"light")},[e]);const n=()=>{t(i=>!i)};return g.jsx(Tm.Provider,{value:{isDarkTheme:e,toggleTheme:n},children:r})},xm=()=>{const r=O.useContext(Tm);if(r===void 0)throw new Error("useTheme must be used within a ThemeProvider");return r},Am=O.createContext(void 0),NT=({children:r})=>{const[e,t]=O.useState(()=>{const p=localStorage.getItem("fontSize");return p?parseInt(p,10):24}),[n,i]=O.useState(()=>{const p=localStorage.getItem("linesToDisplay");return p?parseInt(p,10):2}),[s,o]=O.useState(()=>{const p=localStorage.getItem("autoResize");return p?p==="true":!0}),[l,c]=O.useState(()=>{const p=localStorage.getItem("enableAnimations");return p?p==="true":!0});O.useEffect(()=>{localStorage.setItem("fontSize",e.toString())},[e]),O.useEffect(()=>{localStorage.setItem("linesToDisplay",n.toString())},[n]),O.useEffect(()=>{localStorage.setItem("autoResize",s.toString())},[s]),O.useEffect(()=>{localStorage.setItem("enableAnimations",l.toString())},[l]);const h=()=>{o(p=>!p)},f=()=>{c(p=>!p)};return g.jsx(Am.Provider,{value:{fontSize:e,linesToDisplay:n,autoResize:s,enableAnimations:l,setFontSize:t,setLinesToDisplay:i,toggleAutoResize:h,toggleAnimations:f},children:r})},To=()=>{const r=O.useContext(Am);if(r===void 0)throw new Error("useDisplay must be used within a DisplayProvider");return r},OT=(r,e={})=>{const{globalKeys:t=!1,preventDefaultKeys:n=[]}=e,i=O.useCallback(s=>{if(!t){const h=s.target,f=h.tagName.toLowerCase();if(f==="input"||f==="textarea"||h.isContentEditable)return}const o=s.key.toLowerCase();let l=o;s.ctrlKey&&(l=`ctrl+${l}`),s.altKey&&(l=`alt+${l}`),s.shiftKey&&(l=`shift+${l}`),s.metaKey&&(l=`meta+${l}`);const c=r[l]||r[o];c&&((n.includes(o)||n.includes(l))&&s.preventDefault(),c(s))},[r,t,n]);return O.useEffect(()=>(document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}),[i]),null},me=r=>{let e=document.getElementById("aria-live-announcer");e||(e=document.createElement("div"),e.id="aria-live-announcer",e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="sr-only",document.body.appendChild(e)),e.textContent=r,setTimeout(()=>{e.textContent=""},1e3)},MT=R.button`
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
`,LT=({isDarkTheme:r,toggleTheme:e,className:t})=>{const n=()=>{e(),me(`Switched to ${r?"light":"dark"} theme`)};return g.jsx(MT,{onClick:n,"aria-label":r?"Switch to light theme":"Switch to dark theme",title:`${r?"Light":"Dark"} mode (D)`,className:t,children:r?g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"})}):g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"})})})},FT=R.div`
  position: relative;
  margin-left: auto;
`,jT=R.button`
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
`,UT=R.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 200px;
  z-index: 1000;
`,Gh=R.button`
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
`,BT=R.div`
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
`,zT=R.div`
  padding: 8px 16px;
  color: #d32f2f;
  font-size: 12px;
  background-color: #ffebee;
  margin: 8px;
  border-radius: 4px;
`,$T=()=>{const{user:r,signIn:e,logout:t,error:n}=bo(),[i,s]=O.useState(!1),[o,l]=O.useState(null),c=async()=>{try{l(null),await e(),s(!1)}catch(f){console.error("Failed to sign in:",f),f instanceof Error&&f.message.includes("auth/unauthorized-domain")?l("This domain is not authorized. Please contact the administrator."):l("Failed to sign in. Please try again.")}},h=async()=>{try{await t(),s(!1)}catch(f){console.error("Failed to sign out:",f)}};return g.jsxs(FT,{children:[g.jsx(jT,{onClick:()=>s(!i),$isOpen:i,title:r?"Profile menu":"Sign in",children:r!=null&&r.photoURL?g.jsx("img",{src:r.photoURL,alt:"Profile"}):"👤"}),i&&g.jsx(UT,{children:r?g.jsxs(g.Fragment,{children:[g.jsxs(BT,{children:[g.jsx("div",{className:"name",children:r.displayName}),g.jsx("div",{className:"email",children:r.email})]}),g.jsx(Gh,{onClick:h,children:"🚪 Sign out"})]}):g.jsxs(g.Fragment,{children:[g.jsx(Gh,{onClick:c,children:"🔑 Sign in with Google"}),o&&g.jsx(zT,{children:o})]})})]})},qT=R.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
`,GT=R.div`
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
`,KT=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  flex: 1;
  overflow: hidden;
  text-align: center;
`,WT=R.div`
  font-weight: bold;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,HT=R.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,QT=R.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,la=R.button`
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
`,JT=({onOpenAccessibilityMenu:r,onOpenSongLibrary:e,onStartTour:t})=>{const{isDarkTheme:n,toggleTheme:i}=xm(),{songs:s}=Tn(),o=s.current,l=o?s.loaded[o]:null,c=(l==null?void 0:l.songInfo.title)||"",h=(l==null?void 0:l.songInfo.artist)||"",f=(l==null?void 0:l.songInfo.key)||"",p=(l==null?void 0:l.songInfo.tempo)||"",_=[];f&&_.push(`Key: ${f}`),p&&_.push(`Tempo: ${p}`);const b=_.join(" · "),k=()=>{r&&(r(),me("Accessibility menu opened"))},C=()=>{e&&(e(),me("Song library opened"))},P=()=>{t&&(t(),me("Starting app tour"))};return g.jsxs(qT,{children:[g.jsx(GT,{children:g.jsxs("a",{href:"/","aria-label":"BlindTab Home",children:[g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"})}),"BlindTab"]})}),g.jsx(KT,{children:c&&g.jsxs(g.Fragment,{children:[g.jsx(WT,{children:c}),g.jsx(HT,{children:h}),b&&g.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:b})]})}),g.jsxs(QT,{children:[g.jsx(la,{onClick:C,"aria-label":"Open song library",title:"Open song library",className:"song-library-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"})})}),g.jsx(la,{onClick:k,"aria-label":"Open accessibility menu",title:"Open accessibility menu",className:"accessibility-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"})})}),g.jsx(la,{onClick:P,"aria-label":"Start app tour",title:"Start app tour",className:"help-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),g.jsx(LT,{isDarkTheme:n,toggleTheme:i,className:"theme-toggle"}),g.jsx($T,{})]})]})},YT=(r,e={})=>{const{fontSize:t,setFontSize:n,linesToDisplay:i,autoResize:s}=To(),o=O.useRef(null),[l,c]=O.useState(t),{minFontSize:h=12,maxFontSize:f=72,step:p=.5,lineHeight:_=1.5}=e;return O.useEffect(()=>{if(!s||!o.current)return;const b=o.current,k=()=>{if(!b)return;const M=b.clientHeight,B=i||r.length,N=M*.95;let U=f,F=h;const j=document.createElement("div");for(j.style.position="absolute",j.style.visibility="hidden",j.style.whiteSpace="pre-wrap",j.style.width=`${b.clientWidth}px`,document.body.appendChild(j);U>=h;){if(j.style.fontSize=`${U}px`,j.style.lineHeight=`${_}`,j.textContent=r.slice(0,B).join(`
`),j.offsetHeight<=N){F=U;break}U-=p}return document.body.removeChild(j),Math.max(h,F)},C=()=>{const M=k();M&&M!==l&&(c(M),s&&n(M))};C();const P=new ResizeObserver(C);return P.observe(b),()=>{P.disconnect()}},[s,r,i,h,f,p,_,l,n]),{containerRef:o,calculatedFontSize:l}},Kh=R.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: hidden;
  position: relative;
`,Wh=R.div`
  width: 100%;
  max-width: 1200px;
  font-size: ${r=>r.$fontSize}px;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow: hidden;
  position: relative;
`,XT=R.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,ZT=R.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5%;
  transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateY(${r=>r.$animationOffset});
`,ca=R.div`
  position: relative;
  padding-top: ${r=>r.$hasChords?"1.5em":"0"};
  margin-bottom: 0.5em;
  text-align: left;
  font-family: 'Courier New', monospace;
  width: 100%;
`,Hh=R.div`
  position: relative;
  white-space: pre;
  display: inline-block;
  text-align: left;
`,e0=R.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.5em;
  pointer-events: none;
  text-align: left;
`,t0=R.span`
  position: absolute;
  top: 0;
  color: var(--primary-color);
  font-weight: bold;
  font-family: 'Courier New', monospace;
  white-space: pre;
`,n0=R.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 0.7em;
  color: var(--text-secondary);
  opacity: 0.7;
`,r0=({songData:r,currentLineIndex:e=0})=>{const{fontSize:t,linesToDisplay:n,autoResize:i,enableAnimations:s}=To(),[o,l]=O.useState([]),[c,h]=O.useState("0"),[f,p]=O.useState(e),_=O.useRef(null),b=O.useRef(0),k=O.useRef(null),C=(r==null?void 0:r.lyrics)||(r==null?void 0:r.songData)||[],P=C.map(N=>N.line||N.lyric||""),{calculatedFontSize:M}=YT(P,{minFontSize:16,maxFontSize:72});O.useEffect(()=>()=>{_.current&&clearTimeout(_.current)},[]),O.useEffect(()=>{const N=i?M:t;b.current=N*1.5},[t,M,i]),O.useEffect(()=>{if(!r||!C.length){l([]);return}if(!s||e===f){const U=Math.max(0,e),F=Math.min(C.length,U+n);l(C.slice(U,F)),h("0"),p(e);return}if(e>f){const U=Math.max(0,e-1),F=Math.min(C.length,e+n+1);l(C.slice(U,F)),h(`${b.current}px`);const j=requestAnimationFrame(()=>{const E=setTimeout(()=>{h("0")},30);return()=>clearTimeout(E)});return()=>cancelAnimationFrame(j)}else{const U=Math.max(0,e-1),F=Math.min(C.length,e+n);l(C.slice(U,F)),h(`-${b.current}px`);const j=requestAnimationFrame(()=>{const E=setTimeout(()=>{h("0")},30);return()=>clearTimeout(E)});return()=>cancelAnimationFrame(j)}},[r,e,n,s,C.length]);const B=(N,U)=>{let F=[];Array.isArray(N.chords)?F=N.chords:N.chords&&typeof N.chords=="string"?F=[{text:N.chords,position:0}]:N.chord&&(F=[{text:N.chord,position:0}]);const j=N.lyric||N.line||"";return F.length?g.jsxs(ca,{$hasChords:!0,children:[g.jsx(e0,{children:F.map((E,v)=>g.jsx(t0,{style:{left:`${E.position}ch`},children:E.text},v))}),g.jsx(Hh,{children:j})]},U):g.jsx(ca,{$hasChords:!1,children:g.jsx(Hh,{children:j})},U)};return r?g.jsx(Kh,{ref:k,children:g.jsxs(Wh,{$fontSize:i?M:t,children:[g.jsx(XT,{children:g.jsx(ZT,{$animationOffset:c,children:o.map((N,U)=>g.jsx(ca,{$hasChords:!!N.chord||!!N.chords,children:B(N,U)},U))})}),g.jsxs(n0,{children:[e+1,"/",C.length]})]})}):g.jsx(Kh,{ref:k,children:g.jsx(Wh,{$fontSize:i?M:t,children:g.jsxs("div",{style:{textAlign:"center"},children:[g.jsx("p",{children:"No song loaded. Please select a song to display."}),g.jsx("p",{children:"Click the song library button in the header or press 'O' to open the song library."})]})})})},i0=R.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`,s0=R.input`
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
`,o0=R.span`
  min-width: 3rem;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-secondary);
`,Sm=({min:r,max:e,value:t,onChange:n,disabled:i=!1,className:s,ariaLabel:o="Slider",showValue:l=!0,valueFormat:c=(h,f)=>`${h}/${f}`})=>{const[h,f]=O.useState(t),p=O.useRef(!1);O.useEffect(()=>{p.current||f(t)},[t]);const _=P=>{const M=parseInt(P.target.value,10);f(M)},b=()=>{p.current=!0},k=()=>{p.current=!1,h!==t&&(n(h),me(`${o} set to ${h}`))},C=P=>{(P.key==="ArrowLeft"||P.key==="ArrowRight"||P.key==="ArrowUp"||P.key==="ArrowDown")&&(n(h),me(`${o} set to ${h}`))};return g.jsxs(i0,{className:s,children:[g.jsx(s0,{type:"range",min:r,max:e,value:h,onChange:_,onMouseDown:b,onMouseUp:k,onTouchStart:b,onTouchEnd:k,onKeyUp:C,disabled:i,"aria-label":o,"aria-valuemin":r,"aria-valuemax":e,"aria-valuenow":h}),l&&g.jsx(o0,{children:c(h,e)})]})},a0=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
`,Qh=R.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Kr=R.button`
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
`,l0=R(Kr)`
  background-color: ${r=>r.$active?"var(--primary-color)":"transparent"};
  color: ${r=>r.$active?"white":"var(--text-primary)"};
  
  &:hover, &:focus {
    background-color: ${r=>r.$active?"var(--primary-hover-color)":"var(--bg-hover)"};
  }
  
  animation: ${r=>r.$active?"pulse 2s infinite":"none"};
`,c0=R.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 180px;
`,u0=R(Sm)`
  width: 100%;
`,h0=R.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,d0=R.span`
  min-width: 2rem;
  text-align: center;
`,f0=R(Sm)`
  width: 200px;
  margin: 0 0.5rem;
`,p0=({onPrevious:r,onNext:e,hasPrevious:t,hasNext:n,currentLineIndex:i,totalLines:s,onSliderChange:o})=>{const{fontSize:l,setFontSize:c,linesToDisplay:h,setLinesToDisplay:f,autoResize:p,toggleAutoResize:_}=To(),b=M=>{const B=Math.max(1,Math.min(10,h+M));f(B),me(`Lines to display changed to ${B}`)},k=()=>{_(),me(`Auto resize ${p?"disabled":"enabled"}`)},C=()=>{r&&t&&(r(),me("Previous section"))},P=()=>{e&&n&&(e(),me("Next section"))};return g.jsxs(a0,{className:"controls-panel",children:[g.jsxs(Qh,{children:[g.jsx(Kr,{onClick:C,disabled:!t,"aria-label":"Previous section",title:"Previous section",className:"previous-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),g.jsx(f0,{min:0,max:Math.max(0,s-1),value:i,onChange:o,disabled:s<=1,ariaLabel:"Song navigation",valueFormat:(M,B)=>`${M+1}/${B+1}`}),g.jsx(Kr,{onClick:P,disabled:!n,"aria-label":"Next section",title:"Next section",className:"next-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})})]}),g.jsxs(Qh,{children:[g.jsx(c0,{className:"font-size-controls",children:g.jsx(u0,{min:12,max:72,value:l,onChange:M=>{c(M),me(`Font size changed to ${M} pixels`)},disabled:p,ariaLabel:"Font size",valueFormat:M=>`${M}px`})}),g.jsxs(h0,{className:"lines-controls",children:[g.jsx(Kr,{onClick:()=>b(-1),"aria-label":"Decrease lines to display",title:"Decrease lines to display",disabled:h<=1,children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M19 13H5v-2h14v2z"})})}),g.jsx(d0,{children:h}),g.jsx(Kr,{onClick:()=>b(1),"aria-label":"Increase lines to display",title:"Increase lines to display",disabled:h>=10,children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})})})]}),g.jsx(l0,{onClick:k,$active:p,"aria-label":`${p?"Disable":"Enable"} auto resize`,title:`${p?"Disable":"Enable"} auto resize`,className:"auto-resize-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"})})})]})]})},m0=R.div`
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
`,g0=R.div`
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,_0=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
`,y0=R.h2`
  margin: 0;
  font-size: 1.25rem;
`,v0=R.button`
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
`,w0=R.div`
  padding: 1rem;
`,es=R.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ts=R.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
`,ns=R.p`
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
`,ua=R.label`
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
`,Jh=R.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Yh=R.input`
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
`,Xh=R.span`
  min-width: 40px;
  text-align: right;
`,I0=R.div`
  margin-top: 1rem;
`,E0=R.table`
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
`,Qe=R.kbd`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  font-family: monospace;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`,b0=({isOpen:r,onClose:e})=>{const{fontSize:t,setFontSize:n,linesToDisplay:i,setLinesToDisplay:s,autoResize:o,toggleAutoResize:l,enableAnimations:c,toggleAnimations:h}=To(),{isDarkTheme:f,toggleTheme:p}=xm();if(!r)return null;const _=M=>{const B=parseInt(M.target.value,10);n(B),me(`Font size set to ${B} pixels`)},b=M=>{const B=parseInt(M.target.value,10);s(B),me(`Lines to display set to ${B}`)},k=()=>{l(),me(`Auto resize ${o?"disabled":"enabled"}`)},C=()=>{p(),me(`${f?"Light":"Dark"} theme enabled`)},P=()=>{h(),me(`Animations ${c?"disabled":"enabled"}`)};return g.jsx(m0,{onClick:e,children:g.jsxs(g0,{onClick:M=>M.stopPropagation(),role:"dialog","aria-labelledby":"accessibility-title","aria-modal":"true",children:[g.jsxs(_0,{children:[g.jsx(y0,{id:"accessibility-title",children:"Accessibility Settings"}),g.jsx(v0,{onClick:e,"aria-label":"Close accessibility settings",children:"×"})]}),g.jsxs(w0,{children:[g.jsxs(es,{children:[g.jsx(ts,{children:"Display Settings"}),g.jsx(ns,{children:"Adjust how the leadsheet is displayed"}),g.jsxs(Jh,{children:[g.jsx("label",{htmlFor:"font-size",children:"Font Size:"}),g.jsx(Yh,{type:"range",id:"font-size",min:"12",max:"72",value:t,onChange:_,disabled:o}),g.jsxs(Xh,{children:[t,"px"]})]}),g.jsxs(Jh,{children:[g.jsx("label",{htmlFor:"lines-display",children:"Lines to Display:"}),g.jsx(Yh,{type:"range",id:"lines-display",min:"1",max:"10",value:i,onChange:b}),g.jsx(Xh,{children:i})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[g.jsxs(ua,{children:[g.jsx("input",{type:"checkbox",checked:o,onChange:k,id:"auto-resize"}),g.jsx("span",{})]}),g.jsx("label",{htmlFor:"auto-resize",children:"Auto-resize text to fit screen"})]})]}),g.jsxs(es,{children:[g.jsx(ts,{children:"Theme"}),g.jsx(ns,{children:"Choose between light and dark theme"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[g.jsxs(ua,{children:[g.jsx("input",{type:"checkbox",checked:f,onChange:C,id:"dark-theme"}),g.jsx("span",{})]}),g.jsx("label",{htmlFor:"dark-theme",children:"Dark Theme"})]})]}),g.jsxs(es,{children:[g.jsx(ts,{children:"Scroll Animations"}),g.jsx(ns,{children:"Enable smooth scrolling animations when navigating through songs. Disabling may improve performance and reduce motion for users sensitive to animations."}),g.jsxs(ua,{children:[g.jsx("input",{type:"checkbox",checked:c,onChange:P,"aria-label":"Toggle animations"}),g.jsx("span",{})]})]}),g.jsxs(es,{children:[g.jsx(ts,{children:"Keyboard Shortcuts"}),g.jsx(ns,{children:"Use these shortcuts for quick navigation"}),g.jsx(I0,{children:g.jsxs(E0,{children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Action"}),g.jsx("th",{children:"Shortcut"})]})}),g.jsxs("tbody",{children:[g.jsxs("tr",{children:[g.jsx("td",{children:"Next Section"}),g.jsxs("td",{children:[g.jsx(Qe,{children:"→"})," or ",g.jsx(Qe,{children:"Space"})]})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Previous Section"}),g.jsx("td",{children:g.jsx(Qe,{children:"←"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Increase Font Size"}),g.jsxs("td",{children:[g.jsx(Qe,{children:"+"})," or ",g.jsx(Qe,{children:"="})]})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Decrease Font Size"}),g.jsx("td",{children:g.jsx(Qe,{children:"-"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Toggle Auto-resize"}),g.jsx("td",{children:g.jsx(Qe,{children:"A"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Toggle Dark Mode"}),g.jsx("td",{children:g.jsx(Qe,{children:"D"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Open Song Library"}),g.jsx("td",{children:g.jsx(Qe,{children:"O"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Open Song Manager"}),g.jsx("td",{children:g.jsx(Qe,{children:"L"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Start App Tour"}),g.jsx("td",{children:g.jsx(Qe,{children:"H"})})]})]})]})})]})]})]})})},T0=R.div`
  padding: 1rem;
  max-height: 70vh;
  overflow-y: auto;
`,x0=R.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,A0=R.div`
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
`,S0=R.div`
  flex: 1;
`,R0=R.h4`
  margin: 0;
  font-size: 1rem;
`,P0=R.p`
  margin: 0.25rem 0 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
`,C0=R.span`
  padding: 0.25rem 0.5rem;
  background: var(--primary);
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
`;function k0({onClose:r}){const{songs:e,userSongs:t,playSong:n}=Tn(),{user:i}=bo(),s=new Set(t.map(l=>l.id)),o=async l=>{await n(l.id),r()};return g.jsx(T0,{children:g.jsx(x0,{children:e.filter(l=>(l==null?void 0:l.title)&&(l==null?void 0:l.artist)).map(l=>g.jsxs(A0,{onClick:()=>o(l),children:[g.jsxs(S0,{children:[g.jsx(R0,{children:l.title}),g.jsx(P0,{children:l.artist})]}),i&&s.has(l.id)&&g.jsx(C0,{children:"In Collection"})]},l.id))})})}const ha=R.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,V0=R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  overflow-y: auto;
`,D0=R.div`
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
`,N0=R.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,O0=R.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-primary);
`,M0=R.p`
  margin: 0;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-secondary);
`,L0=R.div`
  font-size: 0.8rem;
  color: var(--text-tertiary);
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,F0=R.span`
  background: var(--bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
`,j0=R.div`
  display: flex;
  gap: 8px;
  padding-left: 8px;
  border-left: 1px solid var(--border-color);
`,da=R.button`
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
`,Jl=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
`,U0=R(Jl)`
  color: var(--error-color);
`,B0=R(Jl)`
  color: var(--text-secondary);
`,z0=R.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${r=>r.$variant==="danger"?"#ff4444":r.$variant==="primary"?"#007AFF":"#f0f0f0"};
  color: ${r=>r.$variant==="danger"||r.$variant==="primary"?"white":"black"};
  
  &:hover {
    opacity: 0.9;
  }
`,$0=R.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1rem;
  align-items: center;
`,Zh=R.button`
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
`,q0=R.button`
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
`,G0=()=>g.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),g.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),K0=({onSongLoad:r,onClose:e,searchTerm:t=""})=>{const{songs:n,userSongs:i,addSongToCollection:s,removeSongFromCollection:o,playSong:l,refreshSongs:c,deleteSong:h,isLoading:f,error:p}=Tn(),{user:_}=bo(),[b,k]=O.useState(null),[C,P]=O.useState(!1),[M,B]=O.useState(!1),[N,U]=id.useState("all"),F=N==="all"?n:i;new Set(i.map(y=>y.id));const j=y=>{k(y.id),me(`Selected song: ${y.title} by ${y.artist}`)},E=async y=>{await r(y.id),e&&e()},v=(y,ye)=>{ye.stopPropagation(),k(y.id),B(!1),P(!0)},w=async(y,ye)=>{if(ye.stopPropagation(),window.confirm(`Are you sure you want to delete "${y.title}" by ${y.artist}?`))try{await h(y.id),me(`Song ${y.title} deleted successfully`)}catch($e){console.error("Error deleting song:",$e),$e instanceof Error&&$e.message.includes("preview mode")?console.warn("Song deletion disabled in preview mode"):me(`Error deleting song: ${$e instanceof Error?$e.message:"Unknown error"}`)}},I=async()=>{P(!1),B(!1),await c(),me("Song updated successfully")},T=()=>{k(null),B(!0),P(!0)},x=F.filter(y=>!(y!=null&&y.title)||!(y!=null&&y.artist)?!1:y.title.toLowerCase().includes(t.toLowerCase())||y.artist.toLowerCase().includes(t.toLowerCase()));return f&&!x.length?g.jsx(ha,{children:g.jsx(Jl,{children:g.jsx("div",{children:"Loading songs..."})})}):p&&x.length===0?g.jsx(ha,{children:g.jsxs(U0,{children:[g.jsx("div",{children:p}),g.jsx(z0,{onClick:c,$variant:"primary",children:"Retry"})]})}):g.jsxs(ha,{children:[g.jsxs($0,{children:[g.jsx(Zh,{$active:N==="all",onClick:()=>U("all"),"aria-selected":N==="all",role:"tab",children:"All Songs"}),g.jsx(Zh,{$active:N==="collection",onClick:()=>U("collection"),"aria-selected":N==="collection",role:"tab",disabled:!_,children:"My Collection"}),g.jsxs(q0,{onClick:T,children:[g.jsx(G0,{})," New Song"]})]}),x.length===0?g.jsxs(B0,{children:[g.jsx("div",{children:"No songs found"}),g.jsx("div",{children:t?"Try a different search term":"Add some songs to get started"})]}):g.jsxs(g.Fragment,{children:[g.jsx(V0,{children:x.map(y=>g.jsxs(D0,{$isSelected:b===y.id,onClick:()=>j(y),children:[g.jsxs(N0,{children:[g.jsx(O0,{children:y.title}),g.jsx(M0,{children:y.artist}),y.tags&&y.tags.length>0&&g.jsx(L0,{children:y.tags.map((ye,$e)=>g.jsx(F0,{children:ye},$e))})]}),g.jsxs(j0,{children:[g.jsx(da,{onClick:ye=>v(y,ye),title:"Edit song",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),g.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),g.jsx(da,{$variant:"danger",onClick:ye=>w(y,ye),title:"Delete song",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M3 6h18"}),g.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),g.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),g.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),g.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]})}),g.jsx(da,{$variant:"primary",onClick:()=>E(y),title:"Load song",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M5 12h14"}),g.jsx("path",{d:"m12 5 7 7-7 7"})]})})]})]},y.id))}),g.jsx(bm,{isOpen:C,onClose:I,songId:b,isNewSong:M})]})]})},W0=R.div`
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
`,H0=R.div`
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
`,Q0=R.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  padding: 0.25rem 0.5rem;
  gap: 0.25rem;
  background: var(--bg-secondary);
  align-items: center;
`,ed=R.button`
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
`,J0=R.input`
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
`,td=R.button`
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
`,Y0=R.button`
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
`,X0=R.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
`,Z0=({isOpen:r,onClose:e,onSongLoad:t})=>{const{isLoading:n,error:i,refreshSongs:s,checkDatabaseConnection:o}=Tn(),[l,c]=O.useState("all"),[h,f]=O.useState(""),[p,_]=O.useState(!1),b=()=>{_(!0)},k=async()=>{_(!1),await s(),me("Song created successfully")};return r?g.jsx(W0,{onClick:e,children:g.jsxs(H0,{onClick:C=>C.stopPropagation(),children:[g.jsxs(Q0,{children:[g.jsx(ed,{$active:l==="all",onClick:()=>c("all"),children:"All Songs"}),g.jsx(ed,{$active:l==="search",onClick:()=>c("search"),children:"Search"}),l==="search"&&g.jsx(J0,{type:"text",placeholder:"Search songs...",value:h,onChange:C=>f(C.target.value),autoFocus:!0}),g.jsx("div",{style:{flex:1}}),g.jsx(td,{onClick:b,children:"Add"}),g.jsx(td,{onClick:s,children:"Refresh"}),g.jsx(Y0,{onClick:e,"aria-label":"Close",children:"×"})]}),g.jsx(X0,{children:g.jsx(K0,{onSongLoad:t,onClose:e,searchTerm:l==="search"?h:""})}),g.jsx(bm,{isOpen:p,onClose:k,isNewSong:!0})]})}):null},ex=({tourId:r,autoStart:e=!0})=>{const[t,n]=O.useState(!1),[i,s]=O.useState(!1);return O.useEffect(()=>{const p=JSON.parse(localStorage.getItem("completedTours")||"{}")[r]===!0;s(p),e&&!p&&n(!0)},[r,e]),{isTourOpen:t,hasCompletedTour:i,startTour:()=>{n(!0)},closeTour:()=>{n(!1)},completeTour:()=>{n(!1),s(!0);const f=JSON.parse(localStorage.getItem("completedTours")||"{}");f[r]=!0,localStorage.setItem("completedTours",JSON.stringify(f))},resetTour:()=>{s(!1);const f=JSON.parse(localStorage.getItem("completedTours")||"{}");delete f[r],localStorage.setItem("completedTours",JSON.stringify(f))}}},tx=r=>{switch(r){case"primary":return Je`
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
      `;default:return""}},nx=r=>{switch(r){case"small":return Je`
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      `;case"medium":return Je`
        padding: 0.5rem 1rem;
        font-size: 1rem;
      `;case"large":return Je`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
      `;default:return""}},rx=R.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  
  ${r=>tx(r.variant||"primary")}
  ${r=>nx(r.size||"medium")}
  
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
`,ys=({children:r,variant:e="primary",size:t="medium",fullWidth:n=!1,isActive:i=!1,...s})=>g.jsx(rx,{variant:e,size:t,fullWidth:n,isActive:i,...s,children:r});R.div`
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
`;const ix=sd`
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
  animation: ${ix} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`;const Rm=sd`
  from { opacity: 0; }
  to { opacity: 1; }
`,sx=R.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  pointer-events: none;
  animation: ${Rm} 0.3s ease-out;
`,ox=R.div`
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
  animation: ${Rm} 0.3s ease-out;
`,ax=R.div`
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
`,lx=R.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: var(--text-primary);
`,cx=R.p`
  margin: 0 0 16px 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
`,ux=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,hx=R.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`,dx=R.div`
  display: flex;
  gap: 8px;
`,fx=R.div`
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
`,px=R(ys)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1002;
  pointer-events: auto;
`,mx=({steps:r,isOpen:e,onClose:t,onComplete:n})=>{const[i,s]=O.useState(0),[o,l]=O.useState({top:"50%",left:"50%",transform:"translate(-50%, -50%)"}),[c,h]=O.useState({top:0,left:0,width:0,height:0}),[f,p]=O.useState("bottom");if(O.useEffect(()=>{if(!e)return;const P=()=>{const M=r[i];if(!M)return;const B=document.querySelector(M.target);if(!B)return;const N=B.getBoundingClientRect(),U=M.position||"bottom";h({top:N.top,left:N.left,width:N.width,height:N.height});let F="0px",j="0px",E="none";const v=window.innerWidth,w=window.innerHeight,I=300,T=200;switch(U){case"top":F=`${Math.max(T/2+10,N.top-20)}px`,j=`${N.left+N.width/2}px`,E="translate(-50%, -100%)";break;case"right":F=`${N.top+N.height/2}px`,j=`${Math.min(v-I-20,N.right+20)}px`,E="translateY(-50%)";break;case"bottom":F=`${Math.min(w-T-20,N.bottom+20)}px`,j=`${N.left+N.width/2}px`,E="translateX(-50%)";break;case"left":F=`${N.top+N.height/2}px`,j=`${Math.max(I/2+10,N.left-20)}px`,E="translate(-100%, -50%)";break}const x=parseFloat(j);x-I/2<20?j=`${I/2+20}px`:x+I/2>v-20&&(j=`${v-I/2-20}px`);const y=parseFloat(F);y-T/2<20?F=`${T/2+20}px`:y+T/2>w-20&&(F=`${w-T/2-20}px`),l({top:F,left:j,transform:E}),p(U)};return P(),window.addEventListener("resize",P),()=>{window.removeEventListener("resize",P)}},[e,i,r]),!e||!r.length)return null;const _=()=>{i<r.length-1?s(i+1):n()},b=()=>{i>0&&s(i-1)},k=()=>{n()},C=r[i];return g.jsxs(g.Fragment,{children:[g.jsx(sx,{}),g.jsx(fx,{position:c}),g.jsxs(ox,{position:o,children:[g.jsx(ax,{position:f}),g.jsx(lx,{children:C.title}),g.jsx(cx,{children:C.content}),g.jsxs(ux,{children:[g.jsxs(hx,{children:[i+1," of ",r.length]}),g.jsxs(dx,{children:[i>0&&g.jsx(ys,{variant:"secondary",size:"small",onClick:b,children:"Previous"}),i<r.length-1?g.jsx(ys,{variant:"primary",size:"small",onClick:_,children:"Next"}):g.jsx(ys,{variant:"primary",size:"small",onClick:_,children:"Finish"})]})]})]}),g.jsx(px,{variant:"secondary",size:"small",onClick:k,children:"Skip Tour"})]})},gx=fg`
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
`;let Wr=!1;try{Wr=localStorage.getItem("devToolsEnabled")==="true"}catch{console.warn("Failed to access localStorage for dev tools state")}const _x=()=>{Wr=!Wr;try{localStorage.setItem("devToolsEnabled",Wr.toString()),console.log(`Dev tools ${Wr?"enabled":"disabled"}`)}catch{console.warn("Failed to save dev tools state to localStorage")}},nd=["d","e","v"];let Ur=[];const yx=r=>(Ur.push(r.toLowerCase()),Ur.length>nd.length&&Ur.shift(),Ur.join("")===nd.join("")?(_x(),Ur=[],!0):!1),vx=R.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`,wx=R.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Ix=[{target:"header",title:"Welcome to BlindTab!",content:"BlindTab helps you view and navigate song leadsheets with ease. This quick tour will show you the main features.",position:"bottom"},{target:".song-library-button",title:"Song Library",content:'Click here or press "O" to open the song library where you can browse, search, and load songs. Each song has a play button to load it.',position:"bottom"},{target:".accessibility-button",title:"Accessibility Options",content:"Access settings for font size, display preferences, and other accessibility features here.",position:"bottom"},{target:".theme-toggle",title:"Theme Toggle",content:'Switch between light and dark themes for comfortable viewing in any environment. You can also press "D" to toggle.',position:"left"},{target:"main",title:"Leadsheet Display",content:"Your song lyrics and chords will appear here. The display automatically adjusts to show the current section of the song.",position:"top"},{target:".controls-panel",title:"Navigation Controls",content:"Use these buttons to navigate through the song. You can also use arrow keys or space bar to move forward.",position:"top"},{target:".auto-resize-button",title:"Auto-Resize",content:'Toggle auto-resize to automatically adjust the font size to fit the screen. You can also press "A" to toggle.',position:"top"},{target:".help-button",title:"Help Button",content:"Click this button anytime to restart this tour and learn about BlindTab features.",position:"left"}],Ex=()=>{const[r,e]=O.useState(!1),[t,n]=O.useState(!1),[i,s]=O.useState(!1),[o,l]=O.useState(0),{songs:c,playSong:h,currentSong:f}=Tn(),{isTourOpen:p,startTour:_,closeTour:b,completeTour:k}=ex({tourId:"blindtab-main-tour",autoStart:!0}),C=(f==null?void 0:f.lyrics)||(f==null?void 0:f.songData)||[];O.useEffect(()=>{const N=U=>{yx(U.key)};return window.addEventListener("keydown",N),()=>{window.removeEventListener("keydown",N)}},[]),OT({arrowright:()=>M(),space:()=>M(),arrowleft:()=>P(),"+":()=>{},"=":()=>{},"-":()=>{},a:()=>{},d:()=>{},o:()=>s(!0),l:()=>n(!0),h:()=>_()},{preventDefaultKeys:["space","arrowleft","arrowright"]});const P=()=>{o>0&&l(o-1)},M=()=>{C.length&&o<C.length-1&&l(o+1)},B=async N=>{try{await h(N),l(0),f&&rd(`Loaded song: ${f.title} by ${f.artist}`)}catch(U){console.error(`Error loading song ${N}:`,U),rd(`Error loading song. ${U.message||"Unknown error"}`)}};return g.jsxs(g.Fragment,{children:[g.jsx(gx,{}),g.jsxs(vx,{children:[g.jsx(JT,{onOpenAccessibilityMenu:()=>e(!0),onOpenSongLibrary:()=>s(!0),onStartTour:_}),g.jsx(wx,{children:g.jsx(r0,{songData:f,currentLineIndex:o})}),g.jsx(p0,{onPrevious:P,onNext:M,hasPrevious:o>0,hasNext:C.length?o<C.length-1:!1,currentLineIndex:o,totalLines:C.length||0,onSliderChange:l}),g.jsx(b0,{isOpen:r,onClose:()=>e(!1)}),g.jsx(k0,{isOpen:t,onClose:()=>n(!1),onSongSelect:B}),g.jsx(Z0,{isOpen:i,onClose:()=>s(!1),onSongLoad:B}),g.jsx(mx,{steps:Ix,isOpen:p,onClose:b,onComplete:k})]})]})},rd=r=>{const e=document.createElement("div");e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),e.setAttribute("class","sr-only"),e.textContent=r,document.body.appendChild(e),setTimeout(()=>document.body.removeChild(e),1e3)},bx=R.div`
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
`,Tx=R.div`
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,xx=R.div`
  font-size: 14px;
  line-height: 1.4;
`,Ax=R.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  margin-left: 8px;
`,Sx=()=>{const{isPreviewMode:r}=Tn(),[e,t]=O.useState(!0);return r?g.jsxs(bx,{$visible:e,children:[g.jsxs(Tx,{children:["Preview Mode",g.jsx(Ax,{onClick:()=>t(!1),children:"×"})]}),g.jsx(xx,{children:"You're viewing a preview deployment. Some features like saving songs and user authentication may be limited."})]}):null},Pm=async()=>{var r,e,t,n;console.group("🔍 Firebase Debug Report"),console.log("Environment Information:"),console.log("- Current URL:",window.location.href),console.log("- Hostname:",window.location.hostname),console.log("- Protocol:",window.location.protocol),console.log("- User Agent:",navigator.userAgent),console.log("- Preview Deployment:",bn?"Yes":"No"),console.log("- Firebase Config:",{authDomain:"blindtab-db.firebaseapp.com",projectId:"blindtab-db"}),console.log("Auth State:"),console.log("- Current User:",_s.currentUser?"Signed In":"Not Signed In"),console.log("Testing Firestore Connection...");try{const i=ln(le,je.SONGS),s=ei(i,ti(1)),o=performance.now(),l=await $n(s),c=performance.now();if(console.log("✅ Firestore Connection Successful:"),console.log(`- Query Time: ${(c-o).toFixed(2)}ms`),console.log(`- Documents Found: ${l.size}`),l.size>0){const h=l.docs[0];console.log("- Sample Document:",{id:h.id,exists:h.exists(),data:h.data()})}}catch(i){if(console.error("❌ Firestore Connection Failed:",i),console.log("- Error Code:",i.code),console.log("- Error Message:",i.message),i.code==="permission-denied")console.log("🔧 Possible Fix: This domain may not be authorized in Firebase."),console.log("   Add it in Firebase Console -> Authentication -> Sign-in method -> Authorized domains");else if(i.code==="unavailable"||(r=i.message)!=null&&r.includes("network"))console.log("🔧 Possible Fix: Network connectivity issue or Firebase service disruption."),console.log("   Check Firebase Status: https://status.firebase.google.com/");else if(i.code==="resource-exhausted")console.log("🔧 Possible Fix: Firebase quota exceeded. Check your billing plan.");else if(i.code==="failed-precondition")console.log("🔧 Possible Fix: Firestore indexes may be missing."),console.log("   Check Firebase Console -> Firestore -> Indexes");else if((e=i.message)!=null&&e.includes("400")||(t=i.message)!=null&&t.includes("Bad Request")||(n=i.message)!=null&&n.includes("jd")){console.log("🔧 Possible Fix: WebChannel connection issue (Bad Request)."),console.log("   This is a known issue with Firebase WebChannel connections."),console.log("Attempting to fix WebChannel connection issue...");try{const s=Ya(),o=zn(s,{experimentalForceLongPolling:!0,ssl:!0,ignoreUndefinedProperties:!0});o._settings={...o._settings,host:"firestore.googleapis.com",ssl:!0};const l=ln(o,je.SONGS),c=ei(l,ti(1)),h=performance.now(),f=await $n(c),p=performance.now();console.log("✅ Connection Fixed with New Settings:"),console.log(`- Query Time: ${(p-h).toFixed(2)}ms`),console.log(`- Documents Found: ${f.size}`),console.log("To fix this issue permanently, update your Firebase configuration:"),console.log(`
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
        `)}catch(s){console.error("Failed to fix WebChannel connection issue:",s)}}}console.log("Network Diagnostics:"),console.log("- Online Status:",navigator.onLine?"Online":"Offline"),console.log("Testing CORS Configuration...");try{const i=await fetch("https://blindtab-db.firebaseio.com/.json?shallow=true");console.log("- CORS Test Status:",i.status),console.log("- CORS Test OK:",i.ok)}catch(i){console.error("- CORS Test Failed:",i)}return console.groupEnd(),"Firebase debug complete. Check console for detailed report."},Rx=()=>{window.runFirebaseDebug=Pm,console.log("Firebase debug utility added to window. Run window.runFirebaseDebug() in console.")};function Px(){return O.useEffect(()=>{_T&&(window.runFirebaseDebug=Pm,Rx(),console.log("🔧 Firebase debug utility added. Run window.runFirebaseDebug() in console to diagnose issues."))},[]),g.jsx(a_,{children:g.jsxs(i_,{children:[g.jsx(_d,{path:"/",element:g.jsx(DT,{children:g.jsx(NT,{children:g.jsx(ET,{children:g.jsxs(AT,{children:[g.jsx(Ex,{}),g.jsx(Sx,{})]})})})})}),!1]})})}fa.createRoot(document.getElementById("root")).render(g.jsx(id.StrictMode,{children:g.jsx(Px,{})}));
