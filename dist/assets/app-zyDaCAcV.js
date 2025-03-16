var Df=Object.defineProperty;var Vf=(n,e,t)=>e in n?Df(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Zr=(n,e,t)=>Vf(n,typeof e!="symbol"?e+"":e,t);import{r as D,a as Nf,R as Of,_ as Ro,d as x,b as du,l as $e,m as fu,f as Lf}from"./vendor-B6z8DUxt.js";var pu={exports:{}},Fi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff=D,Mf=Symbol.for("react.element"),Uf=Symbol.for("react.fragment"),jf=Object.prototype.hasOwnProperty,$f=Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bf={key:!0,ref:!0,__self:!0,__source:!0};function gu(n,e,t){var r,i={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)jf.call(e,r)&&!Bf.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Mf,type:n,key:s,ref:a,props:i,_owner:$f.current}}Fi.Fragment=Uf;Fi.jsx=gu;Fi.jsxs=gu;pu.exports=Fi;var g=pu.exports,to={},Sl=Nf;to.createRoot=Sl.createRoot,to.hydrateRoot=Sl.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_i.apply(this,arguments)}var wt;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(wt||(wt={}));const Al="popstate";function zf(n){n===void 0&&(n={});function e(r,i){let{pathname:s,search:a,hash:l}=r.location;return no("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:yu(i)}return Gf(e,t,null,n)}function Oe(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function mu(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qf(){return Math.random().toString(36).substr(2,8)}function xl(n,e){return{usr:n.state,key:n.key,idx:e}}function no(n,e,t,r){return t===void 0&&(t=null),_i({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Mi(e):e,{state:t,key:e&&e.key||r||qf()})}function yu(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Mi(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function Gf(n,e,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=wt.Pop,u=null,d=f();d==null&&(d=0,a.replaceState(_i({},a.state,{idx:d}),""));function f(){return(a.state||{idx:null}).idx}function m(){l=wt.Pop;let R=f(),N=R==null?null:R-d;d=R,u&&u({action:l,location:k.location,delta:N})}function b(R,N){l=wt.Push;let U=no(k.location,R,N);d=f()+1;let L=xl(U,d),B=k.createHref(U);try{a.pushState(L,"",B)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;i.location.assign(B)}s&&u&&u({action:l,location:k.location,delta:1})}function S(R,N){l=wt.Replace;let U=no(k.location,R,N);d=f();let L=xl(U,d),B=k.createHref(U);a.replaceState(L,"",B),s&&u&&u({action:l,location:k.location,delta:0})}function P(R){let N=i.location.origin!=="null"?i.location.origin:i.location.href,U=typeof R=="string"?R:yu(R);return U=U.replace(/ $/,"%20"),Oe(N,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,N)}let k={get action(){return l},get location(){return n(i,a)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Al,m),u=R,()=>{i.removeEventListener(Al,m),u=null}},createHref(R){return e(i,R)},createURL:P,encodeLocation(R){let N=P(R);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:b,replace:S,go(R){return a.go(R)}};return k}var Rl;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Rl||(Rl={}));function Hf(n,e,t){return t===void 0&&(t="/"),Kf(n,e,t)}function Kf(n,e,t,r){let i=typeof e=="string"?Mi(e):e,s=wu(i.pathname||"/",t);if(s==null)return null;let a=_u(n);Wf(a);let l=null;for(let u=0;l==null&&u<a.length;++u){let d=op(s);l=rp(a[u],d)}return l}function _u(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(s,a,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};u.relativePath.startsWith("/")&&(Oe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=un([r,u.relativePath]),f=t.concat(u);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),_u(s.children,e,f,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:tp(d,s.index),routesMeta:f})};return n.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let u of vu(s.path))i(s,a,u)}),e}function vu(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=vu(r.join("/")),l=[];return l.push(...a.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...a),l.map(u=>n.startsWith("/")&&u===""?"/":u)}function Wf(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:np(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Qf=/^:[\w-]+$/,Jf=3,Yf=2,Xf=1,Zf=10,ep=-2,Cl=n=>n==="*";function tp(n,e){let t=n.split("/"),r=t.length;return t.some(Cl)&&(r+=ep),e&&(r+=Yf),t.filter(i=>!Cl(i)).reduce((i,s)=>i+(Qf.test(s)?Jf:s===""?Xf:Zf),r)}function np(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function rp(n,e,t){let{routesMeta:r}=n,i={},s="/",a=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=ip({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),b=u.route;if(!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:un([s,m.pathname]),pathnameBase:ap(un([s,m.pathnameBase])),route:b}),m.pathnameBase!=="/"&&(s=un([s,m.pathnameBase]))}return a}function ip(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=sp(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:b,isOptional:S}=f;if(b==="*"){let k=l[m]||"";a=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const P=l[m];return S&&!P?d[b]=void 0:d[b]=(P||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:a,pattern:n}}function sp(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),mu(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function op(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mu(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function wu(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}const un=n=>n.join("/").replace(/\/\/+/g,"/"),ap=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/");function lp(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Eu=["post","put","patch","delete"];new Set(Eu);const cp=["get",...Eu];new Set(cp);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vi(){return vi=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},vi.apply(this,arguments)}const up=D.createContext(null),hp=D.createContext(null),bu=D.createContext(null),Ui=D.createContext(null),ji=D.createContext({outlet:null,matches:[],isDataRoute:!1}),Tu=D.createContext(null);function Co(){return D.useContext(Ui)!=null}function dp(){return Co()||Oe(!1),D.useContext(Ui).location}function fp(n,e){return pp(n,e)}function pp(n,e,t,r){Co()||Oe(!1);let{navigator:i,static:s}=D.useContext(bu),{matches:a}=D.useContext(ji),l=a[a.length-1],u=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let f=dp(),m;if(e){var b;let N=typeof e=="string"?Mi(e):e;d==="/"||(b=N.pathname)!=null&&b.startsWith(d)||Oe(!1),m=N}else m=f;let S=m.pathname||"/",P=S;if(d!=="/"){let N=d.replace(/^\//,"").split("/");P="/"+S.replace(/^\//,"").split("/").slice(N.length).join("/")}let k=Hf(n,{pathname:P}),R=vp(k&&k.map(N=>Object.assign({},N,{params:Object.assign({},u,N.params),pathname:un([d,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?d:un([d,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),a,t,r);return e&&R?D.createElement(Ui.Provider,{value:{location:vi({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:wt.Pop}},R):R}function gp(){let n=Tp(),e=lp(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),t?D.createElement("pre",{style:i},t):null,null)}const mp=D.createElement(gp,null);class yp extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?D.createElement(ji.Provider,{value:this.props.routeContext},D.createElement(Tu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _p(n){let{routeContext:e,match:t,children:r}=n,i=D.useContext(up);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),D.createElement(ji.Provider,{value:e},r)}function vp(n,e,t,r){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var s;if(!t)return null;if(t.errors)n=t.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=(i=t)==null?void 0:i.errors;if(l!=null){let f=a.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Oe(!1),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,d=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let m=a[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:b,errors:S}=t,P=m.route.loader&&b[m.route.id]===void 0&&(!S||S[m.route.id]===void 0);if(m.route.lazy||P){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((f,m,b)=>{let S,P=!1,k=null,R=null;t&&(S=l&&m.route.id?l[m.route.id]:void 0,k=m.route.errorElement||mp,u&&(d<0&&b===0?(Ip("route-fallback"),P=!0,R=null):d===b&&(P=!0,R=m.route.hydrateFallbackElement||null)));let N=e.concat(a.slice(0,b+1)),U=()=>{let L;return S?L=k:P?L=R:m.route.Component?L=D.createElement(m.route.Component,null):m.route.element?L=m.route.element:L=f,D.createElement(_p,{match:m,routeContext:{outlet:f,matches:N,isDataRoute:t!=null},children:L})};return t&&(m.route.ErrorBoundary||m.route.errorElement||b===0)?D.createElement(yp,{location:t.location,revalidation:t.revalidation,component:k,error:S,children:U(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):U()},null)}var Iu=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Iu||{});function wp(n){let e=D.useContext(hp);return e||Oe(!1),e}function Ep(n){let e=D.useContext(ji);return e||Oe(!1),e}function bp(n){let e=Ep(),t=e.matches[e.matches.length-1];return t.route.id||Oe(!1),t.route.id}function Tp(){var n;let e=D.useContext(Tu),t=wp(Iu.UseRouteError),r=bp();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}const Pl={};function Ip(n,e,t){Pl[n]||(Pl[n]=!0)}function Sp(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Su(n){Oe(!1)}function Ap(n){let{basename:e="/",children:t=null,location:r,navigationType:i=wt.Pop,navigator:s,static:a=!1,future:l}=n;Co()&&Oe(!1);let u=e.replace(/^\/*/,"/"),d=D.useMemo(()=>({basename:u,navigator:s,static:a,future:vi({v7_relativeSplatPath:!1},l)}),[u,l,s,a]);typeof r=="string"&&(r=Mi(r));let{pathname:f="/",search:m="",hash:b="",state:S=null,key:P="default"}=r,k=D.useMemo(()=>{let R=wu(f,u);return R==null?null:{location:{pathname:R,search:m,hash:b,state:S,key:P},navigationType:i}},[u,f,m,b,S,P,i]);return k==null?null:D.createElement(bu.Provider,{value:d},D.createElement(Ui.Provider,{children:t,value:k}))}function xp(n){let{children:e,location:t}=n;return fp(ro(e),t)}new Promise(()=>{});function ro(n,e){e===void 0&&(e=[]);let t=[];return D.Children.forEach(n,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){t.push.apply(t,ro(r.props.children,s));return}r.type!==Su&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ro(r.props.children,s)),t.push(a)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Rp="6";try{window.__reactRouterVersion=Rp}catch{}const Cp="startTransition",kl=Of[Cp];function Pp(n){let{basename:e,children:t,future:r,window:i}=n,s=D.useRef();s.current==null&&(s.current=zf({window:i,v5Compat:!0}));let a=s.current,[l,u]=D.useState({action:a.action,location:a.location}),{v7_startTransition:d}=r||{},f=D.useCallback(m=>{d&&kl?kl(()=>u(m)):u(m)},[u,d]);return D.useLayoutEffect(()=>a.listen(f),[a,f]),D.useEffect(()=>Sp(r),[r]),D.createElement(Ap,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:a,future:r})}var Dl;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Dl||(Dl={}));var Vl;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Vl||(Vl={}));var Nl={};/**
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
 */const Au=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},kp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},xu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let b=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(b=64)),r.push(t[f],t[m],t[b],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Au(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):kp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||d==null||m==null)throw new Dp;const b=s<<2|l>>4;if(r.push(b),d!==64){const S=l<<4&240|d>>2;if(r.push(S),m!==64){const P=d<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Dp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vp=function(n){const e=Au(n);return xu.encodeByteArray(e,!0)},Ru=function(n){return Vp(n).replace(/\./g,"")},Cu=function(n){try{return xu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Np(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Op=()=>Np().__FIREBASE_DEFAULTS__,Lp=()=>{if(typeof process>"u"||typeof Nl>"u")return;const n=Nl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Cu(n[1]);return e&&JSON.parse(e)},$i=()=>{try{return Op()||Lp()||Fp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mp=n=>{var e,t;return(t=(e=$i())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Pu=()=>{var n;return(n=$i())===null||n===void 0?void 0:n.config},ku=n=>{var e;return(e=$i())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Up{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function $p(){var n;const e=(n=$i())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gp(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hp(){return!$p()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kp(){try{return typeof indexedDB=="object"}catch{return!1}}function Wp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Qp="FirebaseError";class ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Qp,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Jp(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ht(i,l,r)}}function Jp(n,e){return n.replace(Yp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Yp=/\{\$([^}]+)}/g;function Xp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Ol(s)&&Ol(a)){if(!cr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ol(n){return n!==null&&typeof n=="object"}/**
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
 */function _r(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zp(n,e){const t=new eg(n,e);return t.subscribe.bind(t)}class eg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");tg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Us),i.error===void 0&&(i.error=Us),i.complete===void 0&&(i.complete=Us);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Us(){}/**
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
 */function Ee(n){return n&&n._delegate?n._delegate:n}class $t{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lt="[DEFAULT]";/**
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
 */class ng{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Up;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ig(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rg(n){return n===Lt?void 0:n}function ig(n){return n.instantiationMode==="EAGER"}/**
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
 */class sg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ng(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const og={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},ag=J.INFO,lg={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},cg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=lg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Po{constructor(e){this.name=e,this._logLevel=ag,this._logHandler=cg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?og[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const ug=(n,e)=>e.some(t=>n instanceof t);let Ll,Fl;function hg(){return Ll||(Ll=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dg(){return Fl||(Fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Du=new WeakMap,io=new WeakMap,Vu=new WeakMap,js=new WeakMap,ko=new WeakMap;function fg(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(bt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Du.set(t,n)}).catch(()=>{}),ko.set(e,n),e}function pg(n){if(io.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});io.set(n,e)}let so={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return io.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Vu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gg(n){so=n(so)}function mg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($s(this),e,...t);return Vu.set(r,e.sort?e.sort():[e]),bt(r)}:dg().includes(n)?function(...e){return n.apply($s(this),e),bt(Du.get(this))}:function(...e){return bt(n.apply($s(this),e))}}function yg(n){return typeof n=="function"?mg(n):(n instanceof IDBTransaction&&pg(n),ug(n,hg())?new Proxy(n,so):n)}function bt(n){if(n instanceof IDBRequest)return fg(n);if(js.has(n))return js.get(n);const e=yg(n);return e!==n&&(js.set(n,e),ko.set(e,n)),e}const $s=n=>ko.get(n);function _g(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=bt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(bt(a.result),u.oldVersion,u.newVersion,bt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const vg=["get","getKey","getAll","getAllKeys","count"],wg=["put","add","delete","clear"],Bs=new Map;function Ml(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bs.get(e))return Bs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=wg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vg.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&u.done]))[0]};return Bs.set(e,s),s}gg(n=>({...n,get:(e,t,r)=>Ml(e,t)||n.get(e,t,r),has:(e,t)=>!!Ml(e,t)||n.has(e,t)}));/**
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
 */class Eg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function bg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oo="@firebase/app",Ul="0.10.13";/**
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
 */const at=new Po("@firebase/app"),Tg="@firebase/app-compat",Ig="@firebase/analytics-compat",Sg="@firebase/analytics",Ag="@firebase/app-check-compat",xg="@firebase/app-check",Rg="@firebase/auth",Cg="@firebase/auth-compat",Pg="@firebase/database",kg="@firebase/data-connect",Dg="@firebase/database-compat",Vg="@firebase/functions",Ng="@firebase/functions-compat",Og="@firebase/installations",Lg="@firebase/installations-compat",Fg="@firebase/messaging",Mg="@firebase/messaging-compat",Ug="@firebase/performance",jg="@firebase/performance-compat",$g="@firebase/remote-config",Bg="@firebase/remote-config-compat",zg="@firebase/storage",qg="@firebase/storage-compat",Gg="@firebase/firestore",Hg="@firebase/vertexai-preview",Kg="@firebase/firestore-compat",Wg="firebase",Qg="10.14.1";/**
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
 */const ao="[DEFAULT]",Jg={[oo]:"fire-core",[Tg]:"fire-core-compat",[Sg]:"fire-analytics",[Ig]:"fire-analytics-compat",[xg]:"fire-app-check",[Ag]:"fire-app-check-compat",[Rg]:"fire-auth",[Cg]:"fire-auth-compat",[Pg]:"fire-rtdb",[kg]:"fire-data-connect",[Dg]:"fire-rtdb-compat",[Vg]:"fire-fn",[Ng]:"fire-fn-compat",[Og]:"fire-iid",[Lg]:"fire-iid-compat",[Fg]:"fire-fcm",[Mg]:"fire-fcm-compat",[Ug]:"fire-perf",[jg]:"fire-perf-compat",[$g]:"fire-rc",[Bg]:"fire-rc-compat",[zg]:"fire-gcs",[qg]:"fire-gcs-compat",[Gg]:"fire-fst",[Kg]:"fire-fst-compat",[Hg]:"fire-vertex","fire-js":"fire-js",[Wg]:"fire-js-all"};/**
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
 */const wi=new Map,Yg=new Map,lo=new Map;function jl(n,e){try{n.container.addComponent(e)}catch(t){at.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _n(n){const e=n.name;if(lo.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;lo.set(e,n);for(const t of wi.values())jl(t,n);for(const t of Yg.values())jl(t,n);return!0}function Do(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tt(n){return n.settings!==void 0}/**
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
 */const Xg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tt=new yr("app","Firebase",Xg);/**
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
 */class Zg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const xn=Qg;function Nu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ao,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tt.create("bad-app-name",{appName:String(i)});if(t||(t=Pu()),!t)throw Tt.create("no-options");const s=wi.get(i);if(s){if(cr(t,s.options)&&cr(r,s.config))return s;throw Tt.create("duplicate-app",{appName:i})}const a=new sg(i);for(const u of lo.values())a.addComponent(u);const l=new Zg(t,r,a);return wi.set(i,l),l}function Ou(n=ao){const e=wi.get(n);if(!e&&n===ao&&Pu())return Nu();if(!e)throw Tt.create("no-app",{appName:n});return e}function It(n,e,t){var r;let i=(r=Jg[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(l.join(" "));return}_n(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const em="firebase-heartbeat-database",tm=1,ur="firebase-heartbeat-store";let zs=null;function Lu(){return zs||(zs=_g(em,tm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ur)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tt.create("idb-open",{originalErrorMessage:n.message})})),zs}async function nm(n){try{const t=(await Lu()).transaction(ur),r=await t.objectStore(ur).get(Fu(n));return await t.done,r}catch(e){if(e instanceof ht)at.warn(e.message);else{const t=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(t.message)}}}async function $l(n,e){try{const r=(await Lu()).transaction(ur,"readwrite");await r.objectStore(ur).put(e,Fu(n)),await r.done}catch(t){if(t instanceof ht)at.warn(t.message);else{const r=Tt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});at.warn(r.message)}}}function Fu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const rm=1024,im=30*24*60*60*1e3;class sm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new am(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=im}),this._storage.overwrite(this._heartbeatsCache))}catch(r){at.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bl(),{heartbeatsToSend:r,unsentEntries:i}=om(this._heartbeatsCache.heartbeats),s=Ru(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return at.warn(t),""}}}function Bl(){return new Date().toISOString().substring(0,10)}function om(n,e=rm){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),zl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),zl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class am{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kp()?Wp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $l(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $l(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zl(n){return Ru(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function lm(n){_n(new $t("platform-logger",e=>new Eg(e),"PRIVATE")),_n(new $t("heartbeat",e=>new sm(e),"PRIVATE")),It(oo,Ul,n),It(oo,Ul,"esm2017"),It("fire-js","")}lm("");var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ut,Mu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.D=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(E,T,I){for(var _=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)_[fe-2]=arguments[fe];return y.prototype[T].apply(E,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,v){v||(v=0);var E=Array(16);if(typeof y=="string")for(var T=0;16>T;++T)E[T]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(T=0;16>T;++T)E[T]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],T=w.g[2];var I=w.g[3],_=y+(I^v&(T^I))+E[0]+3614090360&4294967295;y=v+(_<<7&4294967295|_>>>25),_=I+(T^y&(v^T))+E[1]+3905402710&4294967295,I=y+(_<<12&4294967295|_>>>20),_=T+(v^I&(y^v))+E[2]+606105819&4294967295,T=I+(_<<17&4294967295|_>>>15),_=v+(y^T&(I^y))+E[3]+3250441966&4294967295,v=T+(_<<22&4294967295|_>>>10),_=y+(I^v&(T^I))+E[4]+4118548399&4294967295,y=v+(_<<7&4294967295|_>>>25),_=I+(T^y&(v^T))+E[5]+1200080426&4294967295,I=y+(_<<12&4294967295|_>>>20),_=T+(v^I&(y^v))+E[6]+2821735955&4294967295,T=I+(_<<17&4294967295|_>>>15),_=v+(y^T&(I^y))+E[7]+4249261313&4294967295,v=T+(_<<22&4294967295|_>>>10),_=y+(I^v&(T^I))+E[8]+1770035416&4294967295,y=v+(_<<7&4294967295|_>>>25),_=I+(T^y&(v^T))+E[9]+2336552879&4294967295,I=y+(_<<12&4294967295|_>>>20),_=T+(v^I&(y^v))+E[10]+4294925233&4294967295,T=I+(_<<17&4294967295|_>>>15),_=v+(y^T&(I^y))+E[11]+2304563134&4294967295,v=T+(_<<22&4294967295|_>>>10),_=y+(I^v&(T^I))+E[12]+1804603682&4294967295,y=v+(_<<7&4294967295|_>>>25),_=I+(T^y&(v^T))+E[13]+4254626195&4294967295,I=y+(_<<12&4294967295|_>>>20),_=T+(v^I&(y^v))+E[14]+2792965006&4294967295,T=I+(_<<17&4294967295|_>>>15),_=v+(y^T&(I^y))+E[15]+1236535329&4294967295,v=T+(_<<22&4294967295|_>>>10),_=y+(T^I&(v^T))+E[1]+4129170786&4294967295,y=v+(_<<5&4294967295|_>>>27),_=I+(v^T&(y^v))+E[6]+3225465664&4294967295,I=y+(_<<9&4294967295|_>>>23),_=T+(y^v&(I^y))+E[11]+643717713&4294967295,T=I+(_<<14&4294967295|_>>>18),_=v+(I^y&(T^I))+E[0]+3921069994&4294967295,v=T+(_<<20&4294967295|_>>>12),_=y+(T^I&(v^T))+E[5]+3593408605&4294967295,y=v+(_<<5&4294967295|_>>>27),_=I+(v^T&(y^v))+E[10]+38016083&4294967295,I=y+(_<<9&4294967295|_>>>23),_=T+(y^v&(I^y))+E[15]+3634488961&4294967295,T=I+(_<<14&4294967295|_>>>18),_=v+(I^y&(T^I))+E[4]+3889429448&4294967295,v=T+(_<<20&4294967295|_>>>12),_=y+(T^I&(v^T))+E[9]+568446438&4294967295,y=v+(_<<5&4294967295|_>>>27),_=I+(v^T&(y^v))+E[14]+3275163606&4294967295,I=y+(_<<9&4294967295|_>>>23),_=T+(y^v&(I^y))+E[3]+4107603335&4294967295,T=I+(_<<14&4294967295|_>>>18),_=v+(I^y&(T^I))+E[8]+1163531501&4294967295,v=T+(_<<20&4294967295|_>>>12),_=y+(T^I&(v^T))+E[13]+2850285829&4294967295,y=v+(_<<5&4294967295|_>>>27),_=I+(v^T&(y^v))+E[2]+4243563512&4294967295,I=y+(_<<9&4294967295|_>>>23),_=T+(y^v&(I^y))+E[7]+1735328473&4294967295,T=I+(_<<14&4294967295|_>>>18),_=v+(I^y&(T^I))+E[12]+2368359562&4294967295,v=T+(_<<20&4294967295|_>>>12),_=y+(v^T^I)+E[5]+4294588738&4294967295,y=v+(_<<4&4294967295|_>>>28),_=I+(y^v^T)+E[8]+2272392833&4294967295,I=y+(_<<11&4294967295|_>>>21),_=T+(I^y^v)+E[11]+1839030562&4294967295,T=I+(_<<16&4294967295|_>>>16),_=v+(T^I^y)+E[14]+4259657740&4294967295,v=T+(_<<23&4294967295|_>>>9),_=y+(v^T^I)+E[1]+2763975236&4294967295,y=v+(_<<4&4294967295|_>>>28),_=I+(y^v^T)+E[4]+1272893353&4294967295,I=y+(_<<11&4294967295|_>>>21),_=T+(I^y^v)+E[7]+4139469664&4294967295,T=I+(_<<16&4294967295|_>>>16),_=v+(T^I^y)+E[10]+3200236656&4294967295,v=T+(_<<23&4294967295|_>>>9),_=y+(v^T^I)+E[13]+681279174&4294967295,y=v+(_<<4&4294967295|_>>>28),_=I+(y^v^T)+E[0]+3936430074&4294967295,I=y+(_<<11&4294967295|_>>>21),_=T+(I^y^v)+E[3]+3572445317&4294967295,T=I+(_<<16&4294967295|_>>>16),_=v+(T^I^y)+E[6]+76029189&4294967295,v=T+(_<<23&4294967295|_>>>9),_=y+(v^T^I)+E[9]+3654602809&4294967295,y=v+(_<<4&4294967295|_>>>28),_=I+(y^v^T)+E[12]+3873151461&4294967295,I=y+(_<<11&4294967295|_>>>21),_=T+(I^y^v)+E[15]+530742520&4294967295,T=I+(_<<16&4294967295|_>>>16),_=v+(T^I^y)+E[2]+3299628645&4294967295,v=T+(_<<23&4294967295|_>>>9),_=y+(T^(v|~I))+E[0]+4096336452&4294967295,y=v+(_<<6&4294967295|_>>>26),_=I+(v^(y|~T))+E[7]+1126891415&4294967295,I=y+(_<<10&4294967295|_>>>22),_=T+(y^(I|~v))+E[14]+2878612391&4294967295,T=I+(_<<15&4294967295|_>>>17),_=v+(I^(T|~y))+E[5]+4237533241&4294967295,v=T+(_<<21&4294967295|_>>>11),_=y+(T^(v|~I))+E[12]+1700485571&4294967295,y=v+(_<<6&4294967295|_>>>26),_=I+(v^(y|~T))+E[3]+2399980690&4294967295,I=y+(_<<10&4294967295|_>>>22),_=T+(y^(I|~v))+E[10]+4293915773&4294967295,T=I+(_<<15&4294967295|_>>>17),_=v+(I^(T|~y))+E[1]+2240044497&4294967295,v=T+(_<<21&4294967295|_>>>11),_=y+(T^(v|~I))+E[8]+1873313359&4294967295,y=v+(_<<6&4294967295|_>>>26),_=I+(v^(y|~T))+E[15]+4264355552&4294967295,I=y+(_<<10&4294967295|_>>>22),_=T+(y^(I|~v))+E[6]+2734768916&4294967295,T=I+(_<<15&4294967295|_>>>17),_=v+(I^(T|~y))+E[13]+1309151649&4294967295,v=T+(_<<21&4294967295|_>>>11),_=y+(T^(v|~I))+E[4]+4149444226&4294967295,y=v+(_<<6&4294967295|_>>>26),_=I+(v^(y|~T))+E[11]+3174756917&4294967295,I=y+(_<<10&4294967295|_>>>22),_=T+(y^(I|~v))+E[2]+718787259&4294967295,T=I+(_<<15&4294967295|_>>>17),_=v+(I^(T|~y))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+I&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var v=y-this.blockSize,E=this.B,T=this.h,I=0;I<y;){if(T==0)for(;I<=v;)i(this,w,I),I+=this.blockSize;if(typeof w=="string"){for(;I<y;)if(E[T++]=w.charCodeAt(I++),T==this.blockSize){i(this,E),T=0;break}}else for(;I<y;)if(E[T++]=w[I++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var v=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=v&255,v/=256;for(this.u(w),w=Array(16),y=v=0;4>y;++y)for(var E=0;32>E;E+=8)w[v++]=this.g[y]>>>E&255;return w};function s(w,y){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function a(w,y){this.h=y;for(var v=[],E=!0,T=w.length-1;0<=T;T--){var I=w[T]|0;E&&I==y||(v[T]=I,E=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new a([y|0],0>y?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return R(d(-w));for(var y=[],v=1,E=0;w>=v;E++)y[E]=w/v|0,v*=4294967296;return new a(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return R(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(y,8)),E=m,T=0;T<w.length;T+=8){var I=Math.min(8,w.length-T),_=parseInt(w.substring(T,T+I),y);8>I?(I=d(Math.pow(y,I)),E=E.j(I).add(d(_))):(E=E.j(v),E=E.add(d(_)))}return E}var m=u(0),b=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(k(this))return-R(this).m();for(var w=0,y=1,v=0;v<this.g.length;v++){var E=this.i(v);w+=(0<=E?E:4294967296+E)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(k(this))return"-"+R(this).toString(w);for(var y=d(Math.pow(w,6)),v=this,E="";;){var T=B(v,y).g;v=N(v,T.j(y));var I=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=T,P(v))return I+E;for(;6>I.length;)I="0"+I;E=I+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function k(w){return w.h==-1}n.l=function(w){return w=N(this,w),k(w)?-1:P(w)?0:1};function R(w){for(var y=w.g.length,v=[],E=0;E<y;E++)v[E]=~w.g[E];return new a(v,~w.h).add(b)}n.abs=function(){return k(this)?R(this):this},n.add=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],E=0,T=0;T<=y;T++){var I=E+(this.i(T)&65535)+(w.i(T)&65535),_=(I>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);E=_>>>16,I&=65535,_&=65535,v[T]=_<<16|I}return new a(v,v[v.length-1]&-2147483648?-1:0)};function N(w,y){return w.add(R(y))}n.j=function(w){if(P(this)||P(w))return m;if(k(this))return k(w)?R(this).j(R(w)):R(R(this).j(w));if(k(w))return R(this.j(R(w)));if(0>this.l(S)&&0>w.l(S))return d(this.m()*w.m());for(var y=this.g.length+w.g.length,v=[],E=0;E<2*y;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<w.g.length;T++){var I=this.i(E)>>>16,_=this.i(E)&65535,fe=w.i(T)>>>16,Le=w.i(T)&65535;v[2*E+2*T]+=_*Le,U(v,2*E+2*T),v[2*E+2*T+1]+=I*Le,U(v,2*E+2*T+1),v[2*E+2*T+1]+=_*fe,U(v,2*E+2*T+1),v[2*E+2*T+2]+=I*fe,U(v,2*E+2*T+2)}for(E=0;E<y;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=y;E<2*y;E++)v[E]=0;return new a(v,0)};function U(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function L(w,y){this.g=w,this.h=y}function B(w,y){if(P(y))throw Error("division by zero");if(P(w))return new L(m,m);if(k(w))return y=B(R(w),y),new L(R(y.g),R(y.h));if(k(y))return y=B(w,R(y)),new L(R(y.g),y.h);if(30<w.g.length){if(k(w)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=b,E=y;0>=E.l(w);)v=q(v),E=q(E);var T=F(v,1),I=F(E,1);for(E=F(E,2),v=F(v,2);!P(E);){var _=I.add(E);0>=_.l(w)&&(T=T.add(v),I=_),E=F(E,1),v=F(v,1)}return y=N(w,T.j(y)),new L(T,y)}for(T=m;0<=w.l(y);){for(v=Math.max(1,Math.floor(w.m()/y.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),I=d(v),_=I.j(y);k(_)||0<_.l(w);)v-=E,I=d(v),_=I.j(y);P(I)&&(I=b),T=T.add(I),w=N(w,_)}return new L(T,w)}n.A=function(w){return B(this,w).h},n.and=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)&w.i(E);return new a(v,this.h&w.h)},n.or=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)|w.i(E);return new a(v,this.h|w.h)},n.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)^w.i(E);return new a(v,this.h^w.h)};function q(w){for(var y=w.g.length+1,v=[],E=0;E<y;E++)v[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(v,w.h)}function F(w,y){var v=y>>5;y%=32;for(var E=w.g.length-v,T=[],I=0;I<E;I++)T[I]=0<y?w.i(I+v)>>>y|w.i(I+v+1)<<32-y:w.i(I+v);return new a(T,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Mu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Ut=a}).apply(typeof ql<"u"?ql:typeof self<"u"?self:typeof window<"u"?window:{});var ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Uu,Yn,ju,ci,co,$u,Bu,zu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ei=="object"&&ei];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in h))break e;h=h[A]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,p=!1,A={next:function(){if(!p&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function m(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),o.apply(c,A)}}return function(){return o.apply(c,arguments)}}function b(o,c,h){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,b.apply(null,arguments)}function S(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,A,C){for(var M=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)M[ne-2]=arguments[ne];return c.prototype[A].apply(p,M)}}function k(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function R(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const A=o.length||0,C=p.length||0;o.length=A+C;for(let M=0;M<C;M++)o[A+M]=p[M]}else o.push(p)}}class N{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function U(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function B(o){return B[" "](o),o}B[" "]=function(){};var q=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function F(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function w(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function y(o){const c={};for(const h in o)c[h]=o[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(h in p)o[h]=p[h];for(let C=0;C<v.length;C++)h=v[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function T(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function I(o){l.setTimeout(()=>{throw o},0)}function _(){var o=gs;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class fe{constructor(){this.h=this.g=null}add(c,h){const p=Le.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Le=new N(()=>new Jd,o=>o.reset());class Jd{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Dn,Vn=!1,gs=new fe,Sa=()=>{const o=l.Promise.resolve(void 0);Dn=()=>{o.then(Yd)}};var Yd=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){I(h)}var c=Le;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Vn=!1};function dt(){this.s=this.s,this.C=this.C}dt.prototype.s=!1,dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Xd=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Nn(o,c){if(be.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(q){e:{try{B(c.nodeName);var A=!0;break e}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Zd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Nn.aa.h.call(this)}}P(Nn,be);var Zd={2:"touch",3:"pen",4:"mouse"};Nn.prototype.h=function(){Nn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Nr="closure_listenable_"+(1e6*Math.random()|0),ef=0;function tf(o,c,h,p,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=A,this.key=++ef,this.da=this.fa=!1}function Or(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Lr(o){this.src=o,this.g={},this.h=0}Lr.prototype.add=function(o,c,h,p,A){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var M=ys(o,c,p,A);return-1<M?(c=o[M],h||(c.fa=!1)):(c=new tf(c,this.src,C,!!p,A),c.fa=h,o.push(c)),c};function ms(o,c){var h=c.type;if(h in o.g){var p=o.g[h],A=Array.prototype.indexOf.call(p,c,void 0),C;(C=0<=A)&&Array.prototype.splice.call(p,A,1),C&&(Or(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ys(o,c,h,p){for(var A=0;A<o.length;++A){var C=o[A];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==p)return A}return-1}var _s="closure_lm_"+(1e6*Math.random()|0),vs={};function Aa(o,c,h,p,A){if(Array.isArray(c)){for(var C=0;C<c.length;C++)Aa(o,c[C],h,p,A);return null}return h=Ca(h),o&&o[Nr]?o.K(c,h,d(p)?!!p.capture:!1,A):nf(o,c,h,!1,p,A)}function nf(o,c,h,p,A,C){if(!c)throw Error("Invalid event type");var M=d(A)?!!A.capture:!!A,ne=Es(o);if(ne||(o[_s]=ne=new Lr(o)),h=ne.add(c,h,p,M,C),h.proxy)return h;if(p=rf(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Xd||(A=M),A===void 0&&(A=!1),o.addEventListener(c.toString(),p,A);else if(o.attachEvent)o.attachEvent(Ra(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function rf(){function o(h){return c.call(o.src,o.listener,h)}const c=sf;return o}function xa(o,c,h,p,A){if(Array.isArray(c))for(var C=0;C<c.length;C++)xa(o,c[C],h,p,A);else p=d(p)?!!p.capture:!!p,h=Ca(h),o&&o[Nr]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=ys(C,h,p,A),-1<h&&(Or(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=Es(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ys(c,h,p,A)),(h=-1<o?c[o]:null)&&ws(h))}function ws(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Nr])ms(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(Ra(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=Es(c))?(ms(h,o),h.h==0&&(h.src=null,c[_s]=null)):Or(o)}}}function Ra(o){return o in vs?vs[o]:vs[o]="on"+o}function sf(o,c){if(o.da)o=!0;else{c=new Nn(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&ws(o),o=h.call(p,c)}return o}function Es(o){return o=o[_s],o instanceof Lr?o:null}var bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ca(o){return typeof o=="function"?o:(o[bs]||(o[bs]=function(c){return o.handleEvent(c)}),o[bs])}function Te(){dt.call(this),this.i=new Lr(this),this.M=this,this.F=null}P(Te,dt),Te.prototype[Nr]=!0,Te.prototype.removeEventListener=function(o,c,h,p){xa(this,o,c,h,p)};function Pe(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new be(c,o);else if(c instanceof be)c.target=c.target||o;else{var A=c;c=new be(p,o),E(c,A)}if(A=!0,h)for(var C=h.length-1;0<=C;C--){var M=c.g=h[C];A=Fr(M,p,!0,c)&&A}if(M=c.g=o,A=Fr(M,p,!0,c)&&A,A=Fr(M,p,!1,c)&&A,h)for(C=0;C<h.length;C++)M=c.g=h[C],A=Fr(M,p,!1,c)&&A}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)Or(h[p]);delete o.g[c],o.h--}}this.F=null},Te.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},Te.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function Fr(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,C=0;C<c.length;++C){var M=c[C];if(M&&!M.da&&M.capture==h){var ne=M.listener,_e=M.ha||M.src;M.fa&&ms(o.i,M),A=ne.call(_e,p)!==!1&&A}}return A&&!p.defaultPrevented}function Pa(o,c,h){if(typeof o=="function")h&&(o=b(o,h));else if(o&&typeof o.handleEvent=="function")o=b(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function ka(o){o.g=Pa(()=>{o.g=null,o.i&&(o.i=!1,ka(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class of extends dt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ka(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function On(o){dt.call(this),this.h=o,this.g={}}P(On,dt);var Da=[];function Va(o){F(o.g,function(c,h){this.g.hasOwnProperty(h)&&ws(c)},o),o.g={}}On.prototype.N=function(){On.aa.N.call(this),Va(this)},On.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ts=l.JSON.stringify,af=l.JSON.parse,lf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Is(){}Is.prototype.h=null;function Na(o){return o.h||(o.h=o.i())}function Oa(){}var Ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ss(){be.call(this,"d")}P(Ss,be);function As(){be.call(this,"c")}P(As,be);var Dt={},La=null;function Mr(){return La=La||new Te}Dt.La="serverreachability";function Fa(o){be.call(this,Dt.La,o)}P(Fa,be);function Fn(o){const c=Mr();Pe(c,new Fa(c))}Dt.STAT_EVENT="statevent";function Ma(o,c){be.call(this,Dt.STAT_EVENT,o),this.stat=c}P(Ma,be);function ke(o){const c=Mr();Pe(c,new Ma(c,o))}Dt.Ma="timingevent";function Ua(o,c){be.call(this,Dt.Ma,o),this.size=c}P(Ua,be);function Mn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Un(){this.g=!0}Un.prototype.xa=function(){this.g=!1};function cf(o,c,h,p,A,C){o.info(function(){if(o.g)if(C)for(var M="",ne=C.split("&"),_e=0;_e<ne.length;_e++){var X=ne[_e].split("=");if(1<X.length){var Ie=X[0];X=X[1];var Se=Ie.split("_");M=2<=Se.length&&Se[1]=="type"?M+(Ie+"="+X+"&"):M+(Ie+"=redacted&")}}else M=null;else M=C;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+c+`
`+h+`
`+M})}function uf(o,c,h,p,A,C,M){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+c+`
`+h+`
`+C+" "+M})}function Xt(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+df(o,h)+(p?" "+p:"")})}function hf(o,c){o.info(function(){return"TIMEOUT: "+c})}Un.prototype.info=function(){};function df(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var C=A[0];if(C!="noop"&&C!="stop"&&C!="close")for(var M=1;M<A.length;M++)A[M]=""}}}}return Ts(h)}catch{return c}}var Ur={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ja={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xs;function jr(){}P(jr,Is),jr.prototype.g=function(){return new XMLHttpRequest},jr.prototype.i=function(){return{}},xs=new jr;function ft(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new On(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $a}function $a(){this.i=null,this.g="",this.h=!1}var Ba={},Rs={};function Cs(o,c,h){o.L=1,o.v=qr(Xe(c)),o.m=h,o.P=!0,za(o,null)}function za(o,c){o.F=Date.now(),$r(o),o.A=Xe(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),rl(h.i,"t",p),o.C=0,h=o.j.J,o.h=new $a,o.g=El(o.j,h?c:null,!o.m),0<o.O&&(o.M=new of(b(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Da[0]=A.toString()),A=Da);for(var C=0;C<A.length;C++){var M=Aa(h,A[C],p||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Fn(),cf(o.i,o.u,o.A,o.l,o.R,o.m)}ft.prototype.ca=function(o){o=o.target;const c=this.M;c&&Ze(o)==3?c.j():this.Y(o)},ft.prototype.Y=function(o){try{if(o==this.g)e:{const Se=Ze(this.g);var c=this.g.Ba();const tn=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||ul(this.g)))){this.J||Se!=4||c==7||(c==8||0>=tn?Fn(3):Fn(2)),Ps(this);var h=this.g.Z();this.X=h;t:if(qa(this)){var p=ul(this.g);o="";var A=p.length,C=Ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vt(this),jn(this);var M="";break t}this.h.i=new l.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(C&&c==A-1)});p.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,uf(this.i,this.u,this.A,this.l,this.R,Se,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,_e=this.g;if((ne=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(ne)){var X=ne;break t}}X=null}if(h=X)Xt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ks(this,h);else{this.o=!1,this.s=3,ke(12),Vt(this),jn(this);break e}}if(this.P){h=!0;let Ue;for(;!this.J&&this.C<M.length;)if(Ue=ff(this,M),Ue==Rs){Se==4&&(this.s=4,ke(14),h=!1),Xt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==Ba){this.s=4,ke(15),Xt(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else Xt(this.i,this.l,Ue,null),ks(this,Ue);if(qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||M.length!=0||this.h.h||(this.s=1,ke(16),h=!1),this.o=this.o&&h,!h)Xt(this.i,this.l,M,"[Invalid Chunked Response]"),Vt(this),jn(this);else if(0<M.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Fs(Ie),Ie.M=!0,ke(11))}}else Xt(this.i,this.l,M,null),ks(this,M);Se==4&&Vt(this),this.o&&!this.J&&(Se==4?yl(this.j,this):(this.o=!1,$r(this)))}else Pf(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Vt(this),jn(this)}}}catch{}finally{}};function qa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ff(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Rs:(h=Number(c.substring(h,p)),isNaN(h)?Ba:(p+=1,p+h>c.length?Rs:(c=c.slice(p,p+h),o.C=p+h,c)))}ft.prototype.cancel=function(){this.J=!0,Vt(this)};function $r(o){o.S=Date.now()+o.I,Ga(o,o.I)}function Ga(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Mn(b(o.ba,o),c)}function Ps(o){o.B&&(l.clearTimeout(o.B),o.B=null)}ft.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(hf(this.i,this.A),this.L!=2&&(Fn(),ke(17)),Vt(this),this.s=2,jn(this)):Ga(this,this.S-o)};function jn(o){o.j.G==0||o.J||yl(o.j,o)}function Vt(o){Ps(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Va(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ks(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Ds(h.h,o))){if(!o.K&&Ds(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Jr(h),Wr(h);else break e;Ls(h),ke(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Mn(b(h.Za,h),6e3));if(1>=Wa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ot(h,11)}else if((o.K||h.g==o)&&Jr(h),!U(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let X=A[c];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const Ie=X[3];Ie!=null&&(h.la=Ie,h.j.info("VER="+h.la));const Se=X[4];Se!=null&&(h.Aa=Se,h.j.info("SVER="+h.Aa));const tn=X[5];tn!=null&&typeof tn=="number"&&0<tn&&(p=1.5*tn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Ue=o.g;if(Ue){const Xr=Ue.g?Ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xr){var C=p.h;C.g||Xr.indexOf("spdy")==-1&&Xr.indexOf("quic")==-1&&Xr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Vs(C,C.h),C.h=null))}if(p.D){const Ms=Ue.g?Ue.g.getResponseHeader("X-HTTP-Session-Id"):null;Ms&&(p.ya=Ms,re(p.I,p.D,Ms))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var M=o;if(p.qa=wl(p,p.J?p.ia:null,p.W),M.K){Qa(p.h,M);var ne=M,_e=p.L;_e&&(ne.I=_e),ne.B&&(Ps(ne),$r(ne)),p.g=M}else gl(p);0<h.i.length&&Qr(h)}else X[0]!="stop"&&X[0]!="close"||Ot(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Ot(h,7):Os(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}Fn(4)}catch{}}var pf=class{constructor(o,c){this.g=o,this.map=c}};function Ha(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ka(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Wa(o){return o.h?1:o.g?o.g.size:0}function Ds(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Vs(o,c){o.g?o.g.add(c):o.h=c}function Qa(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Ha.prototype.cancel=function(){if(this.i=Ja(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ja(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return k(o.i)}function gf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function mf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function Ya(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=mf(o),p=gf(o),A=p.length,C=0;C<A;C++)c.call(void 0,p[C],h&&h[C],o)}var Xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yf(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),A=null;if(0<=p){var C=o[h].substring(0,p);A=o[h].substring(p+1)}else C=o[h];c(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Nt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Nt){this.h=o.h,Br(this,o.j),this.o=o.o,this.g=o.g,zr(this,o.s),this.l=o.l;var c=o.i,h=new zn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Za(this,h),this.m=o.m}else o&&(c=String(o).match(Xa))?(this.h=!1,Br(this,c[1]||"",!0),this.o=$n(c[2]||""),this.g=$n(c[3]||"",!0),zr(this,c[4]),this.l=$n(c[5]||"",!0),Za(this,c[6]||"",!0),this.m=$n(c[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}Nt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Bn(c,el,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Bn(c,el,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Bn(h,h.charAt(0)=="/"?wf:vf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Bn(h,bf)),o.join("")};function Xe(o){return new Nt(o)}function Br(o,c,h){o.j=h?$n(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function zr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Za(o,c,h){c instanceof zn?(o.i=c,Tf(o.i,o.h)):(h||(c=Bn(c,Ef)),o.i=new zn(c,o.h))}function re(o,c,h){o.i.set(c,h)}function qr(o){return re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function $n(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Bn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,_f),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function _f(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var el=/[#\/\?@]/g,vf=/[#\?:]/g,wf=/[#\?]/g,Ef=/[#\?@]/g,bf=/#/g;function zn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function pt(o){o.g||(o.g=new Map,o.h=0,o.i&&yf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=zn.prototype,n.add=function(o,c){pt(this),this.i=null,o=Zt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function tl(o,c){pt(o),c=Zt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function nl(o,c){return pt(o),c=Zt(o,c),o.g.has(c)}n.forEach=function(o,c){pt(this),this.g.forEach(function(h,p){h.forEach(function(A){o.call(c,A,p,this)},this)},this)},n.na=function(){pt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const A=o[p];for(let C=0;C<A.length;C++)h.push(c[p])}return h},n.V=function(o){pt(this);let c=[];if(typeof o=="string")nl(this,o)&&(c=c.concat(this.g.get(Zt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return pt(this),this.i=null,o=Zt(this,o),nl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function rl(o,c,h){tl(o,c),0<h.length&&(o.i=null,o.g.set(Zt(o,c),k(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const C=encodeURIComponent(String(p)),M=this.V(p);for(p=0;p<M.length;p++){var A=C;M[p]!==""&&(A+="="+encodeURIComponent(String(M[p]))),o.push(A)}}return this.i=o.join("&")};function Zt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Tf(o,c){c&&!o.j&&(pt(o),o.i=null,o.g.forEach(function(h,p){var A=p.toLowerCase();p!=A&&(tl(this,p),rl(this,A,h))},o)),o.j=c}function If(o,c){const h=new Un;if(l.Image){const p=new Image;p.onload=S(gt,h,"TestLoadImage: loaded",!0,c,p),p.onerror=S(gt,h,"TestLoadImage: error",!1,c,p),p.onabort=S(gt,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=S(gt,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Sf(o,c){const h=new Un,p=new AbortController,A=setTimeout(()=>{p.abort(),gt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(A),C.ok?gt(h,"TestPingServer: ok",!0,c):gt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),gt(h,"TestPingServer: error",!1,c)})}function gt(o,c,h,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(h)}catch{}}function Af(){this.g=new lf}function xf(o,c,h){const p=h||"";try{Ya(o,function(A,C){let M=A;d(A)&&(M=Ts(A)),c.push(p+C+"="+encodeURIComponent(M))})}catch(A){throw c.push(p+"type="+encodeURIComponent("_badmap")),A}}function Gr(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Gr,Is),Gr.prototype.g=function(){return new Hr(this.l,this.j)},Gr.prototype.i=function(o){return function(){return o}}({});function Hr(o,c){Te.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Hr,Te),n=Hr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Gn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Gn(this)),this.g&&(this.readyState=3,Gn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;il(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function il(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?qn(this):Gn(this),this.readyState==3&&il(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,qn(this))},n.Qa=function(o){this.g&&(this.response=o,qn(this))},n.ga=function(){this.g&&qn(this)};function qn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Gn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Gn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function sl(o){let c="";return F(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Ns(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=sl(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):re(o,c,h))}function ae(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ae,Te);var Rf=/^https?$/i,Cf=["POST","PUT"];n=ae.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xs.g(),this.v=this.o?Na(this.o):Na(xs),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){ol(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)h.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),A=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Cf,c,void 0))||p||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,M]of h)this.g.setRequestHeader(C,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){ol(this,C)}};function ol(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,al(o),Kr(o)}function al(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pe(this,"complete"),Pe(this,"abort"),Kr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Kr(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ll(this):this.bb())},n.bb=function(){ll(this)};function ll(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ze(o)!=4||o.Z()!=2)){if(o.u&&Ze(o)==4)Pa(o.Ea,0,o);else if(Pe(o,"readystatechange"),Ze(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=M===0){var A=String(o.D).match(Xa)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),p=!Rf.test(A?A.toLowerCase():"")}h=p}if(h)Pe(o,"complete"),Pe(o,"success");else{o.m=6;try{var C=2<Ze(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",al(o)}}finally{Kr(o)}}}}function Kr(o,c){if(o.g){cl(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Pe(o,"ready");try{h.onreadystatechange=p}catch{}}}function cl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ze(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ze(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),af(c)}};function ul(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Pf(o){const c={};o=(o.g&&2<=Ze(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(U(o[p]))continue;var h=T(o[p]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[A]||[];c[A]=C,C.push(h)}w(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function hl(o){this.Aa=0,this.i=[],this.j=new Un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hn("baseRetryDelayMs",5e3,o),this.cb=Hn("retryDelaySeedMs",1e4,o),this.Wa=Hn("forwardChannelMaxRetries",2,o),this.wa=Hn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ha(o&&o.concurrentRequestLimit),this.Da=new Af,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hl.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){ke(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=wl(this,null,this.W),Qr(this)};function Os(o){if(dl(o),o.G==3){var c=o.U++,h=Xe(o.I);if(re(h,"SID",o.K),re(h,"RID",c),re(h,"TYPE","terminate"),Kn(o,h),c=new ft(o,o.j,c),c.L=2,c.v=qr(Xe(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=El(c.j,null),c.g.ea(c.v)),c.F=Date.now(),$r(c)}vl(o)}function Wr(o){o.g&&(Fs(o),o.g.cancel(),o.g=null)}function dl(o){Wr(o),o.u&&(l.clearTimeout(o.u),o.u=null),Jr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Qr(o){if(!Ka(o.h)&&!o.s){o.s=!0;var c=o.Ga;Dn||Sa(),Vn||(Dn(),Vn=!0),gs.add(c,o),o.B=0}}function kf(o,c){return Wa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Mn(b(o.Ga,o,c),_l(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new ft(this,this.j,o);let C=this.o;if(this.S&&(C?(C=y(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(A.H=C,C=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=pl(this,A,c),h=Xe(this.I),re(h,"RID",o),re(h,"CVER",22),this.D&&re(h,"X-HTTP-Session-Id",this.D),Kn(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(sl(C)))+"&"+c:this.m&&Ns(h,this.m,C)),Vs(this.h,A),this.Ua&&re(h,"TYPE","init"),this.P?(re(h,"$req",c),re(h,"SID","null"),A.T=!0,Cs(A,h,null)):Cs(A,h,c),this.G=2}}else this.G==3&&(o?fl(this,o):this.i.length==0||Ka(this.h)||fl(this))};function fl(o,c){var h;c?h=c.l:h=o.U++;const p=Xe(o.I);re(p,"SID",o.K),re(p,"RID",h),re(p,"AID",o.T),Kn(o,p),o.m&&o.o&&Ns(p,o.m,o.o),h=new ft(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=pl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Vs(o.h,h),Cs(h,p,c)}function Kn(o,c){o.H&&F(o.H,function(h,p){re(c,p,h)}),o.l&&Ya({},function(h,p){re(c,p,h)})}function pl(o,c,h){h=Math.min(o.i.length,h);var p=o.l?b(o.l.Na,o.l,o):null;e:{var A=o.i;let C=-1;for(;;){const M=["count="+h];C==-1?0<h?(C=A[0].g,M.push("ofs="+C)):C=0:M.push("ofs="+C);let ne=!0;for(let _e=0;_e<h;_e++){let X=A[_e].g;const Ie=A[_e].map;if(X-=C,0>X)C=Math.max(0,A[_e].g-100),ne=!1;else try{xf(Ie,M,"req"+X+"_")}catch{p&&p(Ie)}}if(ne){p=M.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function gl(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Dn||Sa(),Vn||(Dn(),Vn=!0),gs.add(c,o),o.v=0}}function Ls(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Mn(b(o.Fa,o),_l(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ml(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Mn(b(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Wr(this),ml(this))};function Fs(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function ml(o){o.g=new ft(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Xe(o.qa);re(c,"RID","rpc"),re(c,"SID",o.K),re(c,"AID",o.T),re(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&re(c,"TO",o.ja),re(c,"TYPE","xmlhttp"),Kn(o,c),o.m&&o.o&&Ns(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=qr(Xe(c)),h.m=null,h.P=!0,za(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Wr(this),Ls(this),ke(19))};function Jr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function yl(o,c){var h=null;if(o.g==c){Jr(o),Fs(o),o.g=null;var p=2}else if(Ds(o.h,c))h=c.D,Qa(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=o.B;p=Mr(),Pe(p,new Ua(p,h)),Qr(o)}else gl(o);else if(A=c.s,A==3||A==0&&0<c.X||!(p==1&&kf(o,c)||p==2&&Ls(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),A){case 1:Ot(o,5);break;case 4:Ot(o,10);break;case 3:Ot(o,6);break;default:Ot(o,2)}}}function _l(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Ot(o,c){if(o.j.info("Error code "+c),c==2){var h=b(o.fb,o),p=o.Xa;const A=!p;p=new Nt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Br(p,"https"),qr(p),A?If(p.toString(),h):Sf(p.toString(),h)}else ke(2);o.G=0,o.l&&o.l.sa(c),vl(o),dl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function vl(o){if(o.G=0,o.ka=[],o.l){const c=Ja(o.h);(c.length!=0||o.i.length!=0)&&(R(o.ka,c),R(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function wl(o,c,h){var p=h instanceof Nt?Xe(h):new Nt(h);if(p.g!="")c&&(p.g=c+"."+p.g),zr(p,p.s);else{var A=l.location;p=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var C=new Nt(null);p&&Br(C,p),c&&(C.g=c),A&&zr(C,A),h&&(C.l=h),p=C}return h=o.D,c=o.ya,h&&c&&re(p,h,c),re(p,"VER",o.la),Kn(o,p),p}function El(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ae(new Gr({eb:h})):new ae(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bl(){}n=bl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Yr(){}Yr.prototype.g=function(o,c){return new Fe(o,c)};function Fe(o,c){Te.call(this),this.g=new hl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!U(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!U(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new en(this)}P(Fe,Te),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){Os(this.g)},Fe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ts(o),o=h);c.i.push(new pf(c.Ya++,o)),c.G==3&&Qr(c)},Fe.prototype.N=function(){this.g.l=null,delete this.j,Os(this.g),delete this.g,Fe.aa.N.call(this)};function Tl(o){Ss.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(Tl,Ss);function Il(){As.call(this),this.status=1}P(Il,As);function en(o){this.g=o}P(en,bl),en.prototype.ua=function(){Pe(this.g,"a")},en.prototype.ta=function(o){Pe(this.g,new Tl(o))},en.prototype.sa=function(o){Pe(this.g,new Il)},en.prototype.ra=function(){Pe(this.g,"b")},Yr.prototype.createWebChannel=Yr.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,zu=function(){return new Yr},Bu=function(){return Mr()},$u=Dt,co={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ur.NO_ERROR=0,Ur.TIMEOUT=8,Ur.HTTP_ERROR=6,ci=Ur,ja.COMPLETE="complete",ju=ja,Oa.EventType=Ln,Ln.OPEN="a",Ln.CLOSE="b",Ln.ERROR="c",Ln.MESSAGE="d",Te.prototype.listen=Te.prototype.K,Yn=Oa,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,Uu=ae}).apply(typeof ei<"u"?ei:typeof self<"u"?self:typeof window<"u"?window:{});const Gl="@firebase/firestore";/**
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
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
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
 */let Rn="10.14.0";/**
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
 */const Bt=new Po("@firebase/firestore");function Wn(){return Bt.logLevel}function $(n,...e){if(Bt.logLevel<=J.DEBUG){const t=e.map(Vo);Bt.debug(`Firestore (${Rn}): ${n}`,...t)}}function lt(n,...e){if(Bt.logLevel<=J.ERROR){const t=e.map(Vo);Bt.error(`Firestore (${Rn}): ${n}`,...t)}}function vn(n,...e){if(Bt.logLevel<=J.WARN){const t=e.map(Vo);Bt.warn(`Firestore (${Rn}): ${n}`,...t)}}function Vo(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function H(n="Unexpected state"){const e=`FIRESTORE (${Rn}) INTERNAL ASSERTION FAILED: `+n;throw lt(e),new Error(e)}function te(n,e){n||H()}function W(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class st{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class cm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ve.UNAUTHENTICATED))}shutdown(){}}class um{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new st;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new st,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new st)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new cm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new Ve(e)}}class hm{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dm{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new hm(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pm{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){te(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.R=t.token,new fm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function gm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class No{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gm(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(n,e){return n<e?-1:n>e?1:0}function wn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class de{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new de(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new de(0,0))}static max(){return new K(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class hr{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(),r===void 0?r=e.length-t:r>e.length-t&&H(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return hr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ie extends hr{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const mm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends hr{construct(e,t,r){return new me(e,t,r)}static isValidIdentifier(e){return mm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new j(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new j(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(ie.fromString(e))}static fromName(e){return new z(ie.fromString(e).popFirst(5))}static empty(){return new z(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new ie(e.slice()))}}function ym(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new xt(i,z.empty(),e)}function _m(n){return new xt(n.readTime,n.key,-1)}class xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xt(K.min(),z.empty(),-1)}static max(){return new xt(K.max(),z.empty(),-1)}}function vm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
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
 */const wm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Em{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==wm)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(i=>i?O.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new O((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new O((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function bm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Oo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Oo.oe=-1;function Bi(n){return n==null}function Ei(n){return n===0&&1/n==-1/0}function Tm(n){return typeof n=="number"&&Number.isInteger(n)&&!Ei(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Hl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Wt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Gu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class oe{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ti(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ti(this.root,e,this.comparator,!1)}getReverseIterator(){return new ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ti(this.root,e,this.comparator,!0)}}class ti{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ve.RED,this.left=i??ve.EMPTY,this.right=s??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ve(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Kl(this.data.getIterator())}getIteratorFrom(e){return new Kl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new we(this.comparator);return t.data=e,t}}class Kl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Me{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new Me([])}unionWith(e){let t=new we(me.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Me(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Hu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Hu("Invalid base64 string: "+s):s}}(e);return new ye(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const Im=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(n){if(te(!!n),typeof n=="string"){let e=0;const t=Im.exec(n);if(te(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zt(n){return typeof n=="string"?ye.fromBase64String(n):ye.fromUint8Array(n)}/**
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
 */function Lo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Fo(n){const e=n.mapValue.fields.__previous_value__;return Lo(e)?Fo(e):e}function dr(n){const e=Rt(n.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */class Sm{constructor(e,t,r,i,s,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class En{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new En("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof En&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ni={mapValue:{}};function qt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lo(n)?4:xm(n)?9007199254740991:Am(n)?10:11:H()}function Qe(n,e){if(n===e)return!0;const t=qt(n);if(t!==qt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return dr(n).isEqual(dr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Rt(i.timestampValue),l=Rt(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return zt(i.bytesValue).isEqual(zt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return le(i.geoPointValue.latitude)===le(s.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return le(i.integerValue)===le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=le(i.doubleValue),l=le(s.doubleValue);return a===l?Ei(a)===Ei(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return wn(n.arrayValue.values||[],e.arrayValue.values||[],Qe);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Hl(a)!==Hl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Qe(a[u],l[u])))return!1;return!0}(n,e);default:return H()}}function fr(n,e){return(n.values||[]).find(t=>Qe(t,e))!==void 0}function bn(n,e){if(n===e)return 0;const t=qt(n),r=qt(e);if(t!==r)return ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=le(s.integerValue||s.doubleValue),u=le(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Wl(n.timestampValue,e.timestampValue);case 4:return Wl(dr(n),dr(e));case 5:return ee(n.stringValue,e.stringValue);case 6:return function(s,a){const l=zt(s),u=zt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=ee(l[d],u[d]);if(f!==0)return f}return ee(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ee(le(s.latitude),le(a.latitude));return l!==0?l:ee(le(s.longitude),le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ql(n.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,d,f;const m=s.fields||{},b=a.fields||{},S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=(u=b.value)===null||u===void 0?void 0:u.arrayValue,k=ee(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Ql(S,P)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===ni.mapValue&&a===ni.mapValue)return 0;if(s===ni.mapValue)return 1;if(a===ni.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const b=ee(u[m],f[m]);if(b!==0)return b;const S=bn(l[u[m]],d[f[m]]);if(S!==0)return S}return ee(u.length,f.length)}(n.mapValue,e.mapValue);default:throw H()}}function Wl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=Rt(n),r=Rt(e),i=ee(t.seconds,r.seconds);return i!==0?i:ee(t.nanos,r.nanos)}function Ql(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=bn(t[i],r[i]);if(s)return s}return ee(t.length,r.length)}function Tn(n){return uo(n)}function uo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Rt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return zt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=uo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${uo(t.fields[a])}`;return i+"}"}(n.mapValue):H()}function Jl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ho(n){return!!n&&"integerValue"in n}function Mo(n){return!!n&&"arrayValue"in n}function Yl(n){return!!n&&"nullValue"in n}function Xl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ui(n){return!!n&&"mapValue"in n}function Am(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function nr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Wt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=nr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=nr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function xm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ui(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nr(t)}setAll(e){let t=me.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=nr(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ui(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ui(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Wt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ne(nr(this.value))}}function Ku(n){const e=[];return Wt(n.fields,(t,r)=>{const i=new me([t]);if(ui(r)){const s=Ku(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Me(e)}/**
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
 */class xe{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new xe(e,0,K.min(),K.min(),K.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,i){return new xe(e,1,t,K.min(),r,i,0)}static newNoDocument(e,t){return new xe(e,2,t,K.min(),K.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,K.min(),K.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bi{constructor(e,t){this.position=e,this.inclusive=t}}function Zl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),t.key):r=bn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ec(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Qe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ti{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Wu{}class he extends Wu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Pm(e,t,r):t==="array-contains"?new Vm(e,r):t==="in"?new Nm(e,r):t==="not-in"?new Om(e,r):t==="array-contains-any"?new Lm(e,r):new he(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new km(e,r):new Dm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(bn(t,this.value)):t!==null&&qt(this.value)===qt(t)&&this.matchesComparison(bn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ge extends Wu{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ge(e,t)}matches(e){return Qu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Qu(n){return n.op==="and"}function Ju(n){return Cm(n)&&Qu(n)}function Cm(n){for(const e of n.filters)if(e instanceof Ge)return!1;return!0}function fo(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+Tn(n.value);if(Ju(n))return n.filters.map(e=>fo(e)).join(",");{const e=n.filters.map(t=>fo(t)).join(",");return`${n.op}(${e})`}}function Yu(n,e){return n instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.field.isEqual(i.field)&&Qe(r.value,i.value)}(n,e):n instanceof Ge?function(r,i){return i instanceof Ge&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Yu(a,i.filters[l]),!0):!1}(n,e):void H()}function Xu(n){return n instanceof he?function(t){return`${t.field.canonicalString()} ${t.op} ${Tn(t.value)}`}(n):n instanceof Ge?function(t){return t.op.toString()+" {"+t.getFilters().map(Xu).join(" ,")+"}"}(n):"Filter"}class Pm extends he{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class km extends he{constructor(e,t){super(e,"in",t),this.keys=Zu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Dm extends he{constructor(e,t){super(e,"not-in",t),this.keys=Zu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Zu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>z.fromName(r.referenceValue))}class Vm extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mo(t)&&fr(t.arrayValue,this.value)}}class Nm extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fr(this.value.arrayValue,t)}}class Om extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(fr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!fr(this.value.arrayValue,t)}}class Lm extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>fr(this.value.arrayValue,r))}}/**
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
 */class Fm{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function tc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Fm(n,e,t,r,i,s,a)}function Uo(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>fo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Tn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Tn(r)).join(",")),e.ue=t}return e.ue}function jo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Rm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Yu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ec(n.startAt,e.startAt)&&ec(n.endAt,e.endAt)}function po(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Er{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Mm(n,e,t,r,i,s,a,l){return new Er(n,e,t,r,i,s,a,l)}function $o(n){return new Er(n)}function nc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function eh(n){return n.collectionGroup!==null}function rr(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new we(me.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ti(s,r))}),t.has(me.keyField().canonicalString())||e.ce.push(new Ti(me.keyField(),r))}return e.ce}function He(n){const e=W(n);return e.le||(e.le=Um(e,rr(n))),e.le}function Um(n,e){if(n.limitType==="F")return tc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ti(i.field,s)});const t=n.endAt?new bi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new bi(n.startAt.position,n.startAt.inclusive):null;return tc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function go(n,e){const t=n.filters.concat([e]);return new Er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ii(n,e,t){return new Er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zi(n,e){return jo(He(n),He(e))&&n.limitType===e.limitType}function th(n){return`${Uo(He(n))}|lt:${n.limitType}`}function sn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Xu(i)).join(", ")}]`),Bi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Tn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Tn(i)).join(",")),`Target(${r})`}(He(n))}; limitType=${n.limitType})`}function qi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of rr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=Zl(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,rr(r),i)||r.endAt&&!function(a,l,u){const d=Zl(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,rr(r),i))}(n,e)}function jm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nh(n){return(e,t)=>{let r=!1;for(const i of rr(n)){const s=$m(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $m(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?bn(u,d):H()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class Cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Gu(this.inner)}size(){return this.innerSize}}/**
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
 */const Bm=new oe(z.comparator);function ct(){return Bm}const rh=new oe(z.comparator);function Xn(...n){let e=rh;for(const t of n)e=e.insert(t.key,t);return e}function ih(n){let e=rh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ft(){return ir()}function sh(){return ir()}function ir(){return new Cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const zm=new oe(z.comparator),qm=new we(z.comparator);function Q(...n){let e=qm;for(const t of n)e=e.add(t);return e}const Gm=new we(ee);function Hm(){return Gm}/**
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
 */function Bo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ei(e)?"-0":e}}function oh(n){return{integerValue:""+n}}function Km(n,e){return Tm(e)?oh(e):Bo(n,e)}/**
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
 */class Gi{constructor(){this._=void 0}}function Wm(n,e,t){return n instanceof Si?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Lo(s)&&(s=Fo(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof pr?lh(n,e):n instanceof gr?ch(n,e):function(i,s){const a=ah(i,s),l=rc(a)+rc(i.Pe);return ho(a)&&ho(i.Pe)?oh(l):Bo(i.serializer,l)}(n,e)}function Qm(n,e,t){return n instanceof pr?lh(n,e):n instanceof gr?ch(n,e):t}function ah(n,e){return n instanceof Ai?function(r){return ho(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Si extends Gi{}class pr extends Gi{constructor(e){super(),this.elements=e}}function lh(n,e){const t=uh(e);for(const r of n.elements)t.some(i=>Qe(i,r))||t.push(r);return{arrayValue:{values:t}}}class gr extends Gi{constructor(e){super(),this.elements=e}}function ch(n,e){let t=uh(e);for(const r of n.elements)t=t.filter(i=>!Qe(i,r));return{arrayValue:{values:t}}}class Ai extends Gi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function rc(n){return le(n.integerValue||n.doubleValue)}function uh(n){return Mo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Jm(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof pr&&i instanceof pr||r instanceof gr&&i instanceof gr?wn(r.elements,i.elements,Qe):r instanceof Ai&&i instanceof Ai?Qe(r.Pe,i.Pe):r instanceof Si&&i instanceof Si}(n.transform,e.transform)}class Ym{constructor(e,t){this.version=e,this.transformResults=t}}class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Hi{}function hh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zo(n.key,ze.none()):new br(n.key,n.data,ze.none());{const t=n.data,r=Ne.empty();let i=new we(me.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Pt(n.key,r,new Me(i.toArray()),ze.none())}}function Xm(n,e,t){n instanceof br?function(i,s,a){const l=i.value.clone(),u=sc(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Pt?function(i,s,a){if(!hi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=sc(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(dh(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function sr(n,e,t,r){return n instanceof br?function(s,a,l,u){if(!hi(s.precondition,a))return l;const d=s.value.clone(),f=oc(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Pt?function(s,a,l,u){if(!hi(s.precondition,a))return l;const d=oc(s.fieldTransforms,u,a),f=a.data;return f.setAll(dh(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,a,l){return hi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Zm(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=ah(r.transform,i||null);s!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,s))}return t||null}function ic(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&wn(r,i,(s,a)=>Jm(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class br extends Hi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pt extends Hi{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function sc(n,e,t){const r=new Map;te(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,Qm(a,l,t[i]))}return r}function oc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,Wm(s,a,e))}return r}class zo extends Hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ey extends Hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ty{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Xm(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=sr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=sr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=sh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=hh(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&wn(this.mutations,e.mutations,(t,r)=>ic(t,r))&&wn(this.baseMutations,e.baseMutations,(t,r)=>ic(t,r))}}class qo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){te(e.mutations.length===r.length);let i=function(){return zm}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new qo(e,t,r,i)}}/**
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
 */let ny=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ry{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ue,Y;function iy(n){switch(n){default:return H();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function fh(n){if(n===void 0)return lt("GRPC error has no .code"),V.UNKNOWN;switch(n){case ue.OK:return V.OK;case ue.CANCELLED:return V.CANCELLED;case ue.UNKNOWN:return V.UNKNOWN;case ue.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ue.INTERNAL:return V.INTERNAL;case ue.UNAVAILABLE:return V.UNAVAILABLE;case ue.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ue.NOT_FOUND:return V.NOT_FOUND;case ue.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ue.ABORTED:return V.ABORTED;case ue.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ue.DATA_LOSS:return V.DATA_LOSS;default:return H()}}(Y=ue||(ue={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sy(){return new TextEncoder}/**
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
 */const oy=new Ut([4294967295,4294967295],0);function ac(n){const e=sy().encode(n),t=new Mu;return t.update(e),new Uint8Array(t.digest())}function lc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ut([t,r],0),new Ut([i,s],0)]}class Go{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Zn(`Invalid padding: ${t}`);if(r<0)throw new Zn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Zn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ut.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Ut.fromNumber(r)));return i.compare(oy)===1&&(i=new Ut([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ac(e),[r,i]=lc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Go(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=ac(e),[r,i]=lc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Zn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ki{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Tr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ki(K.min(),i,new oe(ee),ct(),Q())}}class Tr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Tr(r,t,Q(),Q(),Q())}}/**
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
 */class di{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class ph{constructor(e,t){this.targetId=e,this.me=t}}class gh{constructor(e,t,r=ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class cc{constructor(){this.fe=0,this.ge=hc(),this.pe=ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Q(),t=Q(),r=Q();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:H()}}),new Tr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=hc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ay{constructor(e){this.Le=e,this.Be=new Map,this.ke=ct(),this.qe=uc(),this.Qe=new oe(ee)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(po(s))if(r===0){const a=new z(s.path);this.Ue(t,a,xe.newNoDocument(a,K.min()))}else te(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=zt(r).toUint8Array()}catch(u){if(u instanceof Hu)return vn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Go(a,i,s)}catch(u){return vn(u instanceof Zn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&po(l.target)){const u=new z(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,xe.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=Q();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Ki(e,t,this.Qe,this.ke,r);return this.ke=ct(),this.qe=uc(),this.Qe=new oe(ee),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new cc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new we(ee),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new cc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function uc(){return new oe(z.comparator)}function hc(){return new oe(z.comparator)}const ly={asc:"ASCENDING",desc:"DESCENDING"},cy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uy={and:"AND",or:"OR"};class hy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mo(n,e){return n.useProto3Json||Bi(e)?e:{value:e}}function xi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function dy(n,e){return xi(n,e.toTimestamp())}function Ke(n){return te(!!n),K.fromTimestamp(function(t){const r=Rt(t);return new de(r.seconds,r.nanos)}(n))}function Ho(n,e){return yo(n,e).canonicalString()}function yo(n,e){const t=function(i){return new ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function yh(n){const e=ie.fromString(n);return te(bh(e)),e}function _o(n,e){return Ho(n.databaseId,e.path)}function qs(n,e){const t=yh(e);if(t.get(1)!==n.databaseId.projectId)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(vh(t))}function _h(n,e){return Ho(n.databaseId,e)}function fy(n){const e=yh(n);return e.length===4?ie.emptyPath():vh(e)}function vo(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vh(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function dc(n,e,t){return{name:_o(n,e),fields:t.value.mapValue.fields}}function py(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(te(f===void 0||typeof f=="string"),ye.fromBase64String(f||"")):(te(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ye.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?V.UNKNOWN:fh(d.code);return new j(f,d.message||"")}(a);t=new gh(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qs(n,r.document.name),s=Ke(r.document.updateTime),a=r.document.createTime?Ke(r.document.createTime):K.min(),l=new Ne({mapValue:{fields:r.document.fields}}),u=xe.newFoundDocument(i,s,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new di(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qs(n,r.document),s=r.readTime?Ke(r.readTime):K.min(),a=xe.newNoDocument(i,s),l=r.removedTargetIds||[];t=new di([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qs(n,r.document),s=r.removedTargetIds||[];t=new di([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new ry(i,s),l=r.targetId;t=new ph(l,a)}}return t}function gy(n,e){let t;if(e instanceof br)t={update:dc(n,e.key,e.value)};else if(e instanceof zo)t={delete:_o(n,e.key)};else if(e instanceof Pt)t={update:dc(n,e.key,e.data),updateMask:Iy(e.fieldMask)};else{if(!(e instanceof ey))return H();t={verify:_o(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Si)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof pr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof gr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ai)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw H()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dy(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(n,e.precondition)),t}function my(n,e){return n&&n.length>0?(te(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Ke(i.updateTime):Ke(s);return a.isEqual(K.min())&&(a=Ke(s)),new Ym(a,i.transformResults||[])}(t,e))):[]}function yy(n,e){return{documents:[_h(n,e.path)]}}function _y(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=_h(n,i);const s=function(d){if(d.length!==0)return Eh(Ge.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(b){return{field:on(b.field),direction:Ey(b.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=mo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function vy(n){let e=fy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){te(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const b=wh(m);return b instanceof Ge&&Ju(b)?b.getFilters():[b]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(b=>function(P){return new Ti(an(P.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(b))}(t.orderBy));let l=null;t.limit&&(l=function(m){let b;return b=typeof m=="object"?m.value:m,Bi(b)?null:b}(t.limit));let u=null;t.startAt&&(u=function(m){const b=!!m.before,S=m.values||[];return new bi(S,b)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const b=!m.before,S=m.values||[];return new bi(S,b)}(t.endAt)),Mm(e,i,a,s,l,"F",u,d)}function wy(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=an(t.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=an(t.unaryFilter.field);return he.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=an(t.unaryFilter.field);return he.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=an(t.unaryFilter.field);return he.create(a,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(t){return he.create(an(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ge.create(t.compositeFilter.filters.map(r=>wh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(t.compositeFilter.op))}(n):H()}function Ey(n){return ly[n]}function by(n){return cy[n]}function Ty(n){return uy[n]}function on(n){return{fieldPath:n.canonicalString()}}function an(n){return me.fromServerFormat(n.fieldPath)}function Eh(n){return n instanceof he?function(t){if(t.op==="=="){if(Xl(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NAN"}};if(Yl(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xl(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NOT_NAN"}};if(Yl(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:on(t.field),op:by(t.op),value:t.value}}}(n):n instanceof Ge?function(t){const r=t.getFilters().map(i=>Eh(i));return r.length===1?r[0]:{compositeFilter:{op:Ty(t.op),filters:r}}}(n):H()}function Iy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Et{constructor(e,t,r,i,s=K.min(),a=K.min(),l=ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Sy{constructor(e){this.ct=e}}function Ay(n){const e=vy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ii(e,e.limit,"L"):e}/**
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
 */class xy{constructor(){this.un=new Ry}addToCollectionParentIndex(e,t){return this.un.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(xt.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(xt.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class Ry{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new we(ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new we(ie.comparator)).toArray()}}/**
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
 */class In{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new In(0)}static kn(){return new In(-1)}}/**
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
 */class Cy{constructor(){this.changes=new Cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Py{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ky{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&sr(r.mutation,i,Me.empty(),de.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const i=Ft();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Xn();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ft();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=ct();const a=ir(),l=function(){return ir()}();return t.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Pt)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),sr(f.mutation,d,f.mutation.getFieldMask(),de.now())):a.set(d.key,Me.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var m;return l.set(d,new Py(f,(m=a.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=ir();let i=new oe((a,l)=>a-l),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||Me.empty();f=l.applyToLocalView(d,f),r.set(u,f);const m=(i.get(l.batchId)||Q()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,m=sh();f.forEach(b=>{if(!s.has(b)){const S=hh(t.get(b),r.get(b));S!==null&&m.set(b,S),s=s.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):eh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):O.resolve(Ft());let l=-1,u=s;return a.next(d=>O.forEach(d,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(b=>{u=u.insert(f,b)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,Q())).next(f=>({batchId:l,changes:ih(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(r=>{let i=Xn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Xn();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const d=function(m,b){return new Er(b,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,b)=>{a=a.insert(m,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,xe.newInvalidDocument(f)))});let l=Xn();return a.forEach((u,d)=>{const f=s.get(u);f!==void 0&&sr(f.mutation,d,Me.empty(),de.now()),qi(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class Dy{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return O.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ke(i.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Ay(i.bundledQuery),readTime:Ke(i.readTime)}}(t)),O.resolve()}}/**
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
 */class Vy{constructor(){this.overlays=new oe(z.comparator),this.Ir=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ft();return O.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const i=Ft(),s=t.length+1,a=new z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new oe((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Ft(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Ft(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return O.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ny(t,r));let s=this.Ir.get(t);s===void 0&&(s=Q(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class Ny{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
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
 */class Ko{constructor(){this.Tr=new we(ge.Er),this.dr=new we(ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ge(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new z(new ie([])),r=new ge(t,e),i=new ge(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new z(new ie([])),r=new ge(t,e),i=new ge(t,e+1);let s=Q();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new ge(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return z.comparator(e.key,t.key)||ee(e.wr,t.wr)}static Ar(e,t){return ee(e.wr,t.wr)||z.comparator(e.key,t.key)}}/**
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
 */class Oy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new we(ge.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ty(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new ge(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),i=new ge(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new we(ee);return t.forEach(i=>{const s=new ge(i,0),a=new ge(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const a=new ge(new z(s),0);let l=new we(ee);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},a),O.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){te(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(t.mutations,i=>{const s=new ge(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ge(t,0),i=this.br.firstAfterOrEqual(r);return O.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Ly{constructor(e){this.Mr=e,this.docs=function(){return new oe(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let r=ct();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ct();const a=t.path,l=new z(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||vm(_m(f),r)<=0||(i.has(f.key)||qi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,t,r,i){H()}Or(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Fy(this)}getSize(e){return O.resolve(this.size)}}class Fy extends Cy{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class My{constructor(e){this.persistence=e,this.Nr=new Cn(t=>Uo(t),jo),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ko,this.targetCount=0,this.kr=In.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),O.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new In(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Kn(t),O.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this.Br.containsKey(t))}}/**
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
 */class Uy{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Oo(0),this.Kr=!1,this.Kr=!0,this.$r=new Ny,this.referenceDelegate=e(this),this.Ur=new My(this),this.indexManager=new xy,this.remoteDocumentCache=function(i){return new Ly(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Sy(t),this.Gr=new Dy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Oy(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const i=new jy(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class jy extends Em{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Jr=new Ko,this.Yr=null}static Zr(e){return new Wo(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),O.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=z.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,K.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return O.or([()=>O.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Qo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=Q(),i=Q();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qo(e,t.fromCache,r,i)}}/**
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
 */class $y{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class By{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Hp()?8:bm(Ce())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new $y;return this.Xi(e,t,a).next(l=>{if(s.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Wn()<=J.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",sn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(Wn()<=J.DEBUG&&$("QueryEngine","Query:",sn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Wn()<=J.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",sn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,He(t))):O.resolve())}Yi(e,t){if(nc(t))return O.resolve(null);let r=He(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ii(t,null,"F"),r=He(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Q(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(t,l);return this.ns(t,d,a,u.readTime)?this.Yi(e,Ii(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,r,i){return nc(t)||i.isEqual(K.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(t,s);return this.ns(t,a,r,i)?O.resolve(null):(Wn()<=J.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sn(t)),this.rs(e,a,t,ym(i,-1)).next(l=>l))})}ts(e,t){let r=new we(nh(e));return t.forEach((i,s)=>{qi(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Wn()<=J.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",sn(t)),this.Ji.getDocumentsMatchingQuery(e,t,xt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class zy{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new oe(ee),this._s=new Cn(s=>Uo(s),jo),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ky(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function qy(n,e,t,r){return new zy(n,e,t,r)}async function Th(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=Q();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function Gy(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const m=d.batch,b=m.keys();let S=O.resolve();return b.forEach(P=>{S=S.next(()=>f.getEntry(u,P)).next(k=>{const R=d.docVersions.get(P);te(R!==null),k.version.compareTo(R)<0&&(m.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),f.addEntry(k)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Q();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Ih(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Hy(n,e){const t=W(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,m)=>{const b=i.get(m);if(!b)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,m)));let S=b.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(ye.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(m,S),function(k,R,N){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(b,S,f)&&l.push(t.Ur.updateTargetData(s,S))});let u=ct(),d=Q();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Ky(s,a,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(K.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(m=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.os=i,s))}function Ky(n,e,t){let r=Q(),i=Q();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=ct();return t.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function Wy(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Qy(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Et(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function wo(n,e,t){const r=W(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!wr(a))throw a;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function fc(n,e,t){const r=W(n);let i=K.min(),s=Q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const m=W(u),b=m._s.get(f);return b!==void 0?O.resolve(m.os.get(b)):m.Ur.getTargetData(d,f)}(r,a,He(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:K.min(),t?s:Q())).next(l=>(Jy(r,jm(e),l),{documents:l,Ts:s})))}function Jy(n,e,t){let r=n.us.get(e)||K.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class pc{constructor(){this.activeTargetIds=Hm()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yy{constructor(){this.so=new pc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new pc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Xy{_o(e){}shutdown(){}}/**
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
 */class gc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ri=null;function Gs(){return ri===null?ri=function(){return 268435456+Math.round(2147483648*Math.random())}():ri++,"0x"+ri.toString(16)}/**
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
 */const Zy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class e_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ae="WebChannelConnection";class t_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){const l=Gs(),u=this.xo(t,r.toUriEncodedString());$("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(t,u,d,i).then(f=>($("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw vn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,a,l){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){const i=Zy[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=Gs();return new Promise((a,l)=>{const u=new Uu;u.setWithCredentials(!0),u.listenOnce(ju.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ci.NO_ERROR:const f=u.getResponseJson();$(Ae,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case ci.TIMEOUT:$(Ae,`RPC '${e}' ${s} timed out`),l(new j(V.DEADLINE_EXCEEDED,"Request time out"));break;case ci.HTTP_ERROR:const m=u.getStatus();if($(Ae,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let b=u.getResponseJson();Array.isArray(b)&&(b=b[0]);const S=b==null?void 0:b.error;if(S&&S.status&&S.message){const P=function(R){const N=R.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(N)>=0?N:V.UNKNOWN}(S.status);l(new j(P,S.message))}else l(new j(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new j(V.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{$(Ae,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);$(Ae,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=Gs(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=zu(),l=Bu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(Ae,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);let b=!1,S=!1;const P=new e_({Io:R=>{S?$(Ae,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(b||($(Ae,`Opening RPC '${e}' stream ${i} transport.`),m.open(),b=!0),$(Ae,`RPC '${e}' stream ${i} sending:`,R),m.send(R))},To:()=>m.close()}),k=(R,N,U)=>{R.listen(N,L=>{try{U(L)}catch(B){setTimeout(()=>{throw B},0)}})};return k(m,Yn.EventType.OPEN,()=>{S||($(Ae,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),k(m,Yn.EventType.CLOSE,()=>{S||(S=!0,$(Ae,`RPC '${e}' stream ${i} transport closed`),P.So())}),k(m,Yn.EventType.ERROR,R=>{S||(S=!0,vn(Ae,`RPC '${e}' stream ${i} transport errored:`,R),P.So(new j(V.UNAVAILABLE,"The operation could not be completed")))}),k(m,Yn.EventType.MESSAGE,R=>{var N;if(!S){const U=R.data[0];te(!!U);const L=U,B=L.error||((N=L[0])===null||N===void 0?void 0:N.error);if(B){$(Ae,`RPC '${e}' stream ${i} received error:`,B);const q=B.status;let F=function(v){const E=ue[v];if(E!==void 0)return fh(E)}(q),w=B.message;F===void 0&&(F=V.INTERNAL,w="Unknown error status: "+q+" with message "+B.message),S=!0,P.So(new j(F,w)),m.close()}else $(Ae,`RPC '${e}' stream ${i} received:`,U),P.bo(U)}}),k(l,$u.STAT_EVENT,R=>{R.stat===co.PROXY?$(Ae,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===co.NOPROXY&&$(Ae,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Hs(){return typeof document<"u"?document:null}/**
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
 */function Wi(n){return new hy(n,!0)}/**
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
 */class Sh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Ah{constructor(e,t,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Sh(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(lt(t.toString()),lt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new j(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n_ extends Ah{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=py(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?Ke(a.readTime):K.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=vo(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=po(u)?{documents:yy(s,u)}:{query:_y(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=mh(s,a.resumeToken);const d=mo(s,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=xi(s,a.snapshotVersion.toTimestamp());const d=mo(s,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=wy(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=vo(this.serializer),t.removeTarget=e,this.a_(t)}}class r_ extends Ah{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return te(!!e.streamToken),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=my(e.writeResults,e.commitTime),r=Ke(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=vo(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>gy(this.serializer,r))};this.a_(t)}}/**
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
 */class i_ extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,yo(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(V.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,yo(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(V.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class s_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(lt(t),this.D_=!1):$("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class o_{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{Qt(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=W(u);d.L_.add(4),await Ir(d),d.q_.set("Unknown"),d.L_.delete(4),await Qi(d)}(this))})}),this.q_=new s_(r,i)}}async function Qi(n){if(Qt(n))for(const e of n.B_)await e(!0)}async function Ir(n){for(const e of n.B_)await e(!1)}function xh(n,e){const t=W(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Zo(t)?Xo(t):Pn(t).r_()&&Yo(t,e))}function Jo(n,e){const t=W(n),r=Pn(t);t.N_.delete(e),r.r_()&&Rh(t,e),t.N_.size===0&&(r.r_()?r.o_():Qt(t)&&t.q_.set("Unknown"))}function Yo(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Pn(n).A_(e)}function Rh(n,e){n.Q_.xe(e),Pn(n).R_(e)}function Xo(n){n.Q_=new ay({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Pn(n).start(),n.q_.v_()}function Zo(n){return Qt(n)&&!Pn(n).n_()&&n.N_.size>0}function Qt(n){return W(n).L_.size===0}function Ch(n){n.Q_=void 0}async function a_(n){n.q_.set("Online")}async function l_(n){n.N_.forEach((e,t)=>{Yo(n,e)})}async function c_(n,e){Ch(n),Zo(n)?(n.q_.M_(e),Xo(n)):n.q_.set("Unknown")}async function u_(n,e,t){if(n.q_.set("Online"),e instanceof gh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ri(n,r)}else if(e instanceof di?n.Q_.Ke(e):e instanceof ph?n.Q_.He(e):n.Q_.We(e),!t.isEqual(K.min()))try{const r=await Ih(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(ye.EMPTY_BYTE_STRING,f.snapshotVersion)),Rh(s,u);const m=new Et(f.target,u,d,f.sequenceNumber);Yo(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Ri(n,r)}}async function Ri(n,e,t){if(!wr(e))throw e;n.L_.add(1),await Ir(n),n.q_.set("Offline"),t||(t=()=>Ih(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Qi(n)})}function Ph(n,e){return e().catch(t=>Ri(n,t,e))}async function Ji(n){const e=W(n),t=Ct(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;h_(e);)try{const i=await Wy(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,d_(e,i)}catch(i){await Ri(e,i)}kh(e)&&Dh(e)}function h_(n){return Qt(n)&&n.O_.length<10}function d_(n,e){n.O_.push(e);const t=Ct(n);t.r_()&&t.V_&&t.m_(e.mutations)}function kh(n){return Qt(n)&&!Ct(n).n_()&&n.O_.length>0}function Dh(n){Ct(n).start()}async function f_(n){Ct(n).p_()}async function p_(n){const e=Ct(n);for(const t of n.O_)e.m_(t.mutations)}async function g_(n,e,t){const r=n.O_.shift(),i=qo.from(r,e,t);await Ph(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ji(n)}async function m_(n,e){e&&Ct(n).V_&&await async function(r,i){if(function(a){return iy(a)&&a!==V.ABORTED}(i.code)){const s=r.O_.shift();Ct(r).s_(),await Ph(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ji(r)}}(n,e),kh(n)&&Dh(n)}async function mc(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Qt(t);t.L_.add(3),await Ir(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Qi(t)}async function y_(n,e){const t=W(n);e?(t.L_.delete(2),await Qi(t)):e||(t.L_.add(2),await Ir(t),t.q_.set("Unknown"))}function Pn(n){return n.K_||(n.K_=function(t,r,i){const s=W(t);return s.w_(),new n_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:a_.bind(null,n),Ro:l_.bind(null,n),mo:c_.bind(null,n),d_:u_.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Zo(n)?Xo(n):n.q_.set("Unknown")):(await n.K_.stop(),Ch(n))})),n.K_}function Ct(n){return n.U_||(n.U_=function(t,r,i){const s=W(t);return s.w_(),new r_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:f_.bind(null,n),mo:m_.bind(null,n),f_:p_.bind(null,n),g_:g_.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ji(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class ea{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new ea(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ta(n,e){if(lt("AsyncQueue",`${e}: ${n}`),wr(n))return new j(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class hn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=Xn(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new hn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new hn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class yc{constructor(){this.W_=new oe(z.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Sn{constructor(e,t,r,i,s,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Sn(e,t,hn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class __{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class v_{constructor(){this.queries=_c(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=W(t),s=i.queries;i.queries=_c(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new j(V.ABORTED,"Firestore shutting down"))}}function _c(){return new Cn(n=>th(n),zi)}async function Vh(n,e){const t=W(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new __,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=ta(a,`Initialization of query '${sn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&na(t)}async function Nh(n,e){const t=W(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function w_(n,e){const t=W(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&na(t)}function E_(n,e,t){const r=W(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function na(n){n.Y_.forEach(e=>{e.next()})}var Eo,vc;(vc=Eo||(Eo={})).ea="default",vc.Cache="cache";class Oh{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Sn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Sn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Eo.Cache}}/**
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
 */class Lh{constructor(e){this.key=e}}class Fh{constructor(e){this.key=e}}class b_{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Q(),this.mutatedKeys=Q(),this.Aa=nh(e),this.Ra=new hn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new yc,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const b=i.get(f),S=qi(this.query,m)?m:null,P=!!b&&this.mutatedKeys.has(b.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let R=!1;b&&S?b.data.isEqual(S.data)?P!==k&&(r.track({type:3,doc:S}),R=!0):this.ga(b,S)||(r.track({type:2,doc:S}),R=!0,(u&&this.Aa(S,u)>0||d&&this.Aa(S,d)<0)&&(l=!0)):!b&&S?(r.track({type:0,doc:S}),R=!0):b&&!S&&(r.track({type:1,doc:b}),R=!0,(u||d)&&(l=!0)),R&&(S?(a=a.add(S),s=k?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,m)=>function(S,P){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return k(S)-k(P)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new Sn(this.query,e.Ra,s,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new yc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Q(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Fh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Lh(r))}),t}ba(e){this.Ta=e.Ts,this.da=Q();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Sn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class T_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class I_{constructor(e){this.key=e,this.va=!1}}class S_{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Cn(l=>th(l),zi),this.Ma=new Map,this.xa=new Set,this.Oa=new oe(z.comparator),this.Na=new Map,this.La=new Ko,this.Ba={},this.ka=new Map,this.qa=In.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function A_(n,e,t=!0){const r=zh(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Mh(r,e,t,!0),i}async function x_(n,e){const t=zh(n);await Mh(t,e,!0,!1)}async function Mh(n,e,t,r){const i=await Qy(n.localStore,He(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await R_(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&xh(n.remoteStore,i),l}async function R_(n,e,t,r,i){n.Ka=(m,b,S)=>async function(k,R,N,U){let L=R.view.ma(N);L.ns&&(L=await fc(k.localStore,R.query,!1).then(({documents:w})=>R.view.ma(w,L)));const B=U&&U.targetChanges.get(R.targetId),q=U&&U.targetMismatches.get(R.targetId)!=null,F=R.view.applyChanges(L,k.isPrimaryClient,B,q);return Ec(k,R.targetId,F.wa),F.snapshot}(n,m,b,S);const s=await fc(n.localStore,e,!0),a=new b_(e,s.Ts),l=a.ma(s.documents),u=Tr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);Ec(n,t,d.wa);const f=new T_(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function C_(n,e,t){const r=W(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!zi(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Jo(r.remoteStore,i.targetId),bo(r,i.targetId)}).catch(vr)):(bo(r,i.targetId),await wo(r.localStore,i.targetId,!0))}async function P_(n,e){const t=W(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Jo(t.remoteStore,r.targetId))}async function k_(n,e,t){const r=M_(n);try{const i=await function(a,l){const u=W(a),d=de.now(),f=l.reduce((S,P)=>S.add(P.key),Q());let m,b;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=ct(),k=Q();return u.cs.getEntries(S,f).next(R=>{P=R,P.forEach((N,U)=>{U.isValidDocument()||(k=k.add(N))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,P)).next(R=>{m=R;const N=[];for(const U of l){const L=Zm(U,m.get(U.key).overlayedDocument);L!=null&&N.push(new Pt(U.key,L,Ku(L.value.mapValue),ze.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,N,l)}).next(R=>{b=R;const N=R.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(S,R.batchId,N)})}).then(()=>({batchId:b.batchId,changes:ih(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new oe(ee)),d=d.insert(l,u),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,t),await Sr(r,i.changes),await Ji(r.remoteStore)}catch(i){const s=ta(i,"Failed to persist write");t.reject(s)}}async function Uh(n,e){const t=W(n);try{const r=await Hy(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?te(a.va):i.removedDocuments.size>0&&(te(a.va),a.va=!1))}),await Sr(t,r,e)}catch(r){await vr(r)}}function wc(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=W(a);u.onlineState=l;let d=!1;u.queries.forEach((f,m)=>{for(const b of m.j_)b.Z_(l)&&(d=!0)}),d&&na(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function D_(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new oe(z.comparator);a=a.insert(s,xe.newNoDocument(s,K.min()));const l=Q().add(s),u=new Ki(K.min(),new Map,new oe(ee),a,l);await Uh(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),ra(r)}else await wo(r.localStore,e,!1).then(()=>bo(r,e,t)).catch(vr)}async function V_(n,e){const t=W(n),r=e.batch.batchId;try{const i=await Gy(t.localStore,e);$h(t,r,null),jh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Sr(t,i)}catch(i){await vr(i)}}async function N_(n,e,t){const r=W(n);try{const i=await function(a,l){const u=W(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(te(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);$h(r,e,t),jh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Sr(r,i)}catch(i){await vr(i)}}function jh(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function $h(n,e,t){const r=W(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function bo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Bh(n,r)})}function Bh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Jo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ra(n))}function Ec(n,e,t){for(const r of t)r instanceof Lh?(n.La.addReference(r.key,e),O_(n,r)):r instanceof Fh?($("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Bh(n,r.key)):H()}function O_(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||($("SyncEngine","New document in limbo: "+t),n.xa.add(r),ra(n))}function ra(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new z(ie.fromString(e)),r=n.qa.next();n.Na.set(r,new I_(t)),n.Oa=n.Oa.insert(t,r),xh(n.remoteStore,new Et(He($o(t.path)),r,"TargetPurposeLimboResolution",Oo.oe))}}async function Sr(n,e,t){const r=W(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Qo.Wi(u.targetId,d);s.push(m)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const f=W(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(d,b=>O.forEach(b.$i,S=>f.persistence.referenceDelegate.addReference(m,b.targetId,S)).next(()=>O.forEach(b.Ui,S=>f.persistence.referenceDelegate.removeReference(m,b.targetId,S)))))}catch(m){if(!wr(m))throw m;$("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const b=m.targetId;if(!m.fromCache){const S=f.os.get(b),P=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(b,k)}}}(r.localStore,s))}async function L_(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await Th(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new j(V.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sr(t,r.hs)}}function F_(n,e){const t=W(n),r=t.Na.get(e);if(r&&r.va)return Q().add(r.key);{let i=Q();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function zh(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=D_.bind(null,e),e.Ca.d_=w_.bind(null,e.eventManager),e.Ca.$a=E_.bind(null,e.eventManager),e}function M_(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=V_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=N_.bind(null,e),e}class Ci{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return qy(this.persistence,new By,e.initialUser,this.serializer)}Ga(e){return new Uy(Wo.Zr,this.serializer)}Wa(e){return new Yy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ci.provider={build:()=>new Ci};class To{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=L_.bind(null,this.syncEngine),await y_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new v_}()}createDatastore(e){const t=Wi(e.databaseInfo.databaseId),r=function(s){return new t_(s)}(e.databaseInfo);return function(s,a,l,u){return new i_(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new o_(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>wc(this.syncEngine,t,0),function(){return gc.D()?new gc:new Xy}())}createSyncEngine(e,t){return function(i,s,a,l,u,d,f){const m=new S_(i,s,a,l,u,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=W(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ir(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}To.provider={build:()=>new To};/**
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
 */class qh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):lt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class U_{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ve.UNAUTHENTICATED,this.clientId=No.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{$("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ta(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ks(n,e){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Th(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function bc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await j_(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>mc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>mc(e.remoteStore,i)),n._onlineComponents=e}async function j_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ks(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;vn("Error using user provided cache. Falling back to memory cache: "+t),await Ks(n,new Ci)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Ks(n,new Ci);return n._offlineComponents}async function Gh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await bc(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await bc(n,new To))),n._onlineComponents}function $_(n){return Gh(n).then(e=>e.syncEngine)}async function Hh(n){const e=await Gh(n),t=e.eventManager;return t.onListen=A_.bind(null,e.syncEngine),t.onUnlisten=C_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=x_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=P_.bind(null,e.syncEngine),t}function B_(n,e,t={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new qh({next:b=>{f.Za(),a.enqueueAndForget(()=>Nh(s,m));const S=b.docs.has(l);!S&&b.fromCache?d.reject(new j(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&b.fromCache&&u&&u.source==="server"?d.reject(new j(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(b)},error:b=>d.reject(b)}),m=new Oh($o(l.path),f,{includeMetadataChanges:!0,_a:!0});return Vh(s,m)}(await Hh(n),n.asyncQueue,e,t,r)),r.promise}function z_(n,e,t={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new qh({next:b=>{f.Za(),a.enqueueAndForget(()=>Nh(s,m)),b.fromCache&&u.source==="server"?d.reject(new j(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(b)},error:b=>d.reject(b)}),m=new Oh(l,f,{includeMetadataChanges:!0,_a:!0});return Vh(s,m)}(await Hh(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Kh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Tc=new Map;/**
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
 */function Wh(n,e,t){if(!t)throw new j(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Qh(n,e,t,r){if(e===!0&&r===!0)throw new j(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ic(n){if(!z.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sc(n){if(z.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H()}function Je(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yi(n);throw new j(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function q_(n,e){if(e<=0)throw new j(V.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Ac{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ia{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ac({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ac(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qu;switch(r.type){case"firstParty":return new dm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Tc.get(t);r&&($("ComponentProvider","Removing Datastore"),Tc.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class kt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kt(this.firestore,e,this._query)}}class Re{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}}class ot extends kt{constructor(e,t,r){super(e,t,$o(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new z(e))}withConverter(e){return new ot(this.firestore,e,this._path)}}function St(n,e,...t){if(n=Ee(n),Wh("collection","path",e),n instanceof ia){const r=ie.fromString(e,...t);return Sc(r),new ot(n,null,r)}{if(!(n instanceof Re||n instanceof ot))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return Sc(r),new ot(n.firestore,null,r)}}function Be(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=No.newId()),Wh("doc","path",e),n instanceof ia){const r=ie.fromString(e,...t);return Ic(r),new Re(n,null,new z(r))}{if(!(n instanceof Re||n instanceof ot))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return Ic(r),new Re(n.firestore,n instanceof ot?n.converter:null,new z(r))}}/**
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
 */class xc{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Sh(this,"async_queue_retry"),this.Vu=()=>{const r=Hs();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Hs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Hs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new st;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wr(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw lt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=ea.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Jt extends ia{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new xc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xc(e),this._firestoreClient=void 0,await e}}}function sa(n,e,t){t||(t="(default)");const r=Do(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(cr(s,e))return i;throw new j(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new j(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function Xi(n){if(n._terminated)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||G_(n),n._firestoreClient}function G_(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,d,f){return new Sm(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Kh(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new U_(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(ye.fromBase64String(e))}catch(t){throw new j(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Gt(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ar{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zi{constructor(e){this._methodName=e}}/**
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
 */class es{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */class ts{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const H_=/^__.*__$/;class K_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Pt(e,this.data,this.fieldMask,t,this.fieldTransforms):new br(e,this.data,t,this.fieldTransforms)}}class Jh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Pt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class oa{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new oa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Pi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Yh(this.Cu)&&H_.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class W_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Wi(e)}Qu(e,t,r,i=!1){return new oa({Cu:e,methodName:t,qu:r,path:me.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aa(n){const e=n._freezeSettings(),t=Wi(n._databaseId);return new W_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Q_(n,e,t,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);la("Data must be an object, but it was:",a,r);const l=Xh(r,a);let u,d;if(s.merge)u=new Me(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const b=Io(e,m,t);if(!a.contains(b))throw new j(V.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);ed(f,b)||f.push(b)}u=new Me(f),d=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=a.fieldTransforms;return new K_(new Ne(l),u,d)}class xr extends Zi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xr}}function J_(n,e,t,r){const i=n.Qu(1,e,t);la("Data must be an object, but it was:",i,r);const s=[],a=Ne.empty();Wt(r,(u,d)=>{const f=ca(e,u,t);d=Ee(d);const m=i.Nu(f);if(d instanceof xr)s.push(f);else{const b=Rr(d,m);b!=null&&(s.push(f),a.set(f,b))}});const l=new Me(s);return new Jh(a,l,i.fieldTransforms)}function Y_(n,e,t,r,i,s){const a=n.Qu(1,e,t),l=[Io(e,r,t)],u=[i];if(s.length%2!=0)throw new j(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<s.length;b+=2)l.push(Io(e,s[b])),u.push(s[b+1]);const d=[],f=Ne.empty();for(let b=l.length-1;b>=0;--b)if(!ed(d,l[b])){const S=l[b];let P=u[b];P=Ee(P);const k=a.Nu(S);if(P instanceof xr)d.push(S);else{const R=Rr(P,k);R!=null&&(d.push(S),f.set(S,R))}}const m=new Me(d);return new Jh(f,m,a.fieldTransforms)}function X_(n,e,t,r=!1){return Rr(t,n.Qu(r?4:3,e))}function Rr(n,e){if(Zh(n=Ee(n)))return la("Unsupported field value:",e,n),Xh(n,e);if(n instanceof Zi)return function(r,i){if(!Yh(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Rr(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Km(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=de.fromDate(r);return{timestampValue:xi(i.serializer,s)}}if(r instanceof de){const s=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xi(i.serializer,s)}}if(r instanceof es)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gt)return{bytesValue:mh(i.serializer,r._byteString)};if(r instanceof Re){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ho(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ts)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Bo(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Yi(r)}`)}(n,e)}function Xh(n,e){const t={};return Gu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wt(n,(r,i)=>{const s=Rr(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Zh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof es||n instanceof Gt||n instanceof Re||n instanceof Zi||n instanceof ts)}function la(n,e,t){if(!Zh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Yi(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Io(n,e,t){if((e=Ee(e))instanceof Ar)return e._internalPath;if(typeof e=="string")return ca(n,e);throw Pi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Z_=new RegExp("[~\\*/\\[\\]]");function ca(n,e,t){if(e.search(Z_)>=0)throw Pi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ar(...e.split("."))._internalPath}catch{throw Pi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Pi(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new j(V.INVALID_ARGUMENT,l+n+u)}function ed(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class td{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ev(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(nd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ev extends td{data(){return super.data()}}function nd(n,e){return typeof e=="string"?ca(n,e):e instanceof Ar?e._internalPath:e._delegate._internalPath}/**
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
 */function tv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ua{}class ha extends ua{}function dn(n,e,...t){let r=[];e instanceof ua&&r.push(e),r=r.concat(t),function(s){const a=s.filter(u=>u instanceof rs).length,l=s.filter(u=>u instanceof ns).length;if(a>1||a>0&&l>0)throw new j(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ns extends ha{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ns(e,t,r)}_apply(e){const t=this._parse(e);return rd(e._query,t),new kt(e.firestore,e.converter,go(e._query,t))}_parse(e){const t=aa(e.firestore);return function(s,a,l,u,d,f,m){let b;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new j(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Cc(m,f);const S=[];for(const P of m)S.push(Rc(u,s,P));b={arrayValue:{values:S}}}else b=Rc(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Cc(m,f),b=X_(l,a,m,f==="in"||f==="not-in");return he.create(d,f,b)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class rs extends ua{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new rs(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ge.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)rd(a,u),a=go(a,u)}(e._query,t),new kt(e.firestore,e.converter,go(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class is extends ha{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new is(e,t,r)}_apply(e){return new kt(e.firestore,e.converter,Ii(e._query,this._limit,this._limitType))}}function fn(n){return q_("limit",n),is._create("limit",n,"F")}function Rc(n,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new j(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eh(e)&&t.indexOf("/")!==-1)throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ie.fromString(t));if(!z.isDocumentKey(r))throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jl(n,new z(r))}if(t instanceof Re)return Jl(n,t._key);throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yi(t)}.`)}function Cc(n,e){if(!Array.isArray(n)||n.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rd(n,e){const t=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class id{convertValue(e,t="none"){switch(qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Wt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>le(a.doubleValue));return new ts(s)}convertGeoPoint(e){return new es(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(dr(e));default:return null}}convertTimestamp(e){const t=Rt(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);te(bh(r));const i=new En(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(t)||lt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function nv(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class ln{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class da extends td{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(nd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class or extends da{data(e={}){return super.data(e)}}class sd{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ln(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new or(this._firestore,this._userDataWriter,r.key,r,new ln(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new or(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ln(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new or(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ln(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:rv(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function rv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
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
 */function Ht(n){n=Je(n,Re);const e=Je(n.firestore,Jt);return B_(Xi(e),n._key).then(t=>iv(e,n,t))}class od extends id{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}function At(n){n=Je(n,kt);const e=Je(n.firestore,Jt),t=Xi(e),r=new od(e);return tv(n._query),z_(t,n._query).then(i=>new sd(e,r,n,i))}function ss(n,e,t){n=Je(n,Re);const r=Je(n.firestore,Jt),i=nv(n.converter,e);return os(r,[Q_(aa(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ze.none())])}function Cr(n,e,t,...r){n=Je(n,Re);const i=Je(n.firestore,Jt),s=aa(i);let a;return a=typeof(e=Ee(e))=="string"||e instanceof Ar?Y_(s,"updateDoc",n._key,e,t,r):J_(s,"updateDoc",n._key,e),os(i,[a.toMutation(n._key,ze.exists(!0))])}function ad(n){return os(Je(n.firestore,Jt),[new zo(n._key,ze.none())])}function os(n,e){return function(r,i){const s=new st;return r.asyncQueue.enqueueAndForget(async()=>k_(await $_(r),i,s)),s.promise}(Xi(n),e)}function iv(n,e,t){const r=t.docs.get(e._key),i=new od(n);return new da(n,i,e._key,r,new ln(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function ld(){return new xr("deleteField")}(function(e,t=!0){(function(i){Rn=i})(xn),_n(new $t("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Jt(new um(r.getProvider("auth-internal")),new pm(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new j(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new En(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),It(Gl,"4.7.3",e),It(Gl,"4.7.3","esm2017")})();const sv=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:id,Bytes:Gt,CollectionReference:ot,DocumentReference:Re,DocumentSnapshot:da,FieldPath:Ar,FieldValue:Zi,Firestore:Jt,FirestoreError:j,GeoPoint:es,Query:kt,QueryCompositeFilterConstraint:rs,QueryConstraint:ha,QueryDocumentSnapshot:or,QueryFieldFilterConstraint:ns,QueryLimitConstraint:is,QuerySnapshot:sd,SnapshotMetadata:ln,Timestamp:de,VectorValue:ts,_AutoId:No,_ByteString:ye,_DatabaseId:En,_DocumentKey:z,_EmptyAuthCredentialsProvider:qu,_FieldPath:me,_cast:Je,_logWarn:vn,_validateIsNotUsedTogether:Qh,collection:St,deleteDoc:ad,deleteField:ld,doc:Be,ensureFirestoreConfigured:Xi,executeWrite:os,getDoc:Ht,getDocs:At,initializeFirestore:sa,limit:fn,query:dn,setDoc:ss,updateDoc:Cr},Symbol.toStringTag,{value:"Module"}));var ov="firebase",av="10.14.1";/**
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
 */It(ov,av,"app");function cd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lv=cd,ud=new yr("auth","Firebase",cd());/**
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
 */const ki=new Po("@firebase/auth");function cv(n,...e){ki.logLevel<=J.WARN&&ki.warn(`Auth (${xn}): ${n}`,...e)}function fi(n,...e){ki.logLevel<=J.ERROR&&ki.error(`Auth (${xn}): ${n}`,...e)}/**
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
 */function Ye(n,...e){throw pa(n,...e)}function qe(n,...e){return pa(n,...e)}function fa(n,e,t){const r=Object.assign(Object.assign({},lv()),{[e]:t});return new yr("auth","Firebase",r).create(e,{appName:n.name})}function jt(n){return fa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uv(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ye(n,"argument-error"),fa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ud.create(n,...e)}function G(n,e,...t){if(!n)throw pa(e,...t)}function nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fi(e),new Error(e)}function ut(n,e){n||nt(e)}/**
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
 */function So(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function hv(){return Pc()==="http:"||Pc()==="https:"}function Pc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function dv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hv()||zp()||"connection"in navigator)?navigator.onLine:!0}function fv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Pr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ut(t>e,"Short delay should be less than long delay!"),this.isMobile=jp()||qp()}get(){return dv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ga(n,e){ut(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class hd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gv=new Pr(3e4,6e4);function ma(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function kn(n,e,t,r,i={}){return dd(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=_r(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},s);return Bp()||(d.referrerPolicy="no-referrer"),hd.fetch()(fd(n,n.config.apiHost,t,l),d)})}async function dd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},pv),e);try{const i=new yv(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ii(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ii(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ii(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ii(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw fa(n,f,d);Ye(n,f)}}catch(i){if(i instanceof ht)throw i;Ye(n,"network-request-failed",{message:String(i)})}}async function mv(n,e,t,r,i={}){const s=await kn(n,e,t,r,i);return"mfaPendingCredential"in s&&Ye(n,"multi-factor-auth-required",{_serverResponse:s}),s}function fd(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ga(n.config,i):`${n.config.apiScheme}://${i}`}class yv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),gv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ii(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=qe(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function _v(n,e){return kn(n,"POST","/v1/accounts:delete",e)}async function pd(n,e){return kn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ar(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vv(n,e=!1){const t=Ee(n),r=await t.getIdToken(e),i=ya(r);G(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ar(Ws(i.auth_time)),issuedAtTime:ar(Ws(i.iat)),expirationTime:ar(Ws(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ws(n){return Number(n)*1e3}function ya(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return fi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cu(t);return i?JSON.parse(i):(fi("Failed to decode base64 JWT payload"),null)}catch(i){return fi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kc(n){const e=ya(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ht&&wv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ev{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ao{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Di(n){var e;const t=n.auth,r=await n.getIdToken(),i=await mr(n,pd(t,{idToken:r}));G(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gd(s.providerUserInfo):[],l=Tv(n.providerData,a),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ao(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function bv(n){const e=Ee(n);await Di(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gd(n){return n.map(e=>{var{providerId:t}=e,r=Ro(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Iv(n,e){const t=await dd(n,{},async()=>{const r=_r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=fd(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",hd.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Sv(n,e){return kn(n,"POST","/v2/accounts:revokeToken",ma(n,e))}/**
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
 */class pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=kc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Iv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new pn;return r&&(G(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
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
 */function mt(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ro(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ev(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ao(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await mr(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vv(this,e)}reload(){return bv(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Di(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(jt(this.auth));const e=await this.getIdToken();return await mr(this,_v(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,u,d,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(i=t.email)!==null&&i!==void 0?i:void 0,S=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,R=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,N=(d=t.createdAt)!==null&&d!==void 0?d:void 0,U=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:B,isAnonymous:q,providerData:F,stsTokenManager:w}=t;G(L&&w,e,"internal-error");const y=pn.fromJSON(this.name,w);G(typeof L=="string",e,"internal-error"),mt(m,e.name),mt(b,e.name),G(typeof B=="boolean",e,"internal-error"),G(typeof q=="boolean",e,"internal-error"),mt(S,e.name),mt(P,e.name),mt(k,e.name),mt(R,e.name),mt(N,e.name),mt(U,e.name);const v=new rt({uid:L,auth:e,email:b,emailVerified:B,displayName:m,isAnonymous:q,photoURL:P,phoneNumber:S,tenantId:k,stsTokenManager:y,createdAt:N,lastLoginAt:U});return F&&Array.isArray(F)&&(v.providerData=F.map(E=>Object.assign({},E))),R&&(v._redirectEventId=R),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new pn;i.updateFromServerResponse(t);const s=new rt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Di(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?gd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new pn;l.updateFromIdToken(r);const u=new rt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ao(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
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
 */const Dc=new Map;function it(n){ut(n instanceof Function,"Expected a class definition");let e=Dc.get(n);return e?(ut(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dc.set(n,e),e)}/**
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
 */class md{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}md.type="NONE";const Vc=md;/**
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
 */function pi(n,e,t){return`firebase:${n}:${e}:${t}`}class gn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pi(this.userKey,i.apiKey,s),this.fullPersistenceKey=pi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new gn(it(Vc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||it(Vc);const a=pi(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(a);if(f){const m=rt._fromJSON(e,f);d!==s&&(l=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new gn(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new gn(s,e,r))}}/**
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
 */function Nc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bd(e))return"Blackberry";if(Td(e))return"Webos";if(_d(e))return"Safari";if((e.includes("chrome/")||vd(e))&&!e.includes("edge/"))return"Chrome";if(Ed(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yd(n=Ce()){return/firefox\//i.test(n)}function _d(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vd(n=Ce()){return/crios\//i.test(n)}function wd(n=Ce()){return/iemobile/i.test(n)}function Ed(n=Ce()){return/android/i.test(n)}function bd(n=Ce()){return/blackberry/i.test(n)}function Td(n=Ce()){return/webos/i.test(n)}function _a(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Av(n=Ce()){var e;return _a(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xv(){return Gp()&&document.documentMode===10}function Id(n=Ce()){return _a(n)||Ed(n)||Td(n)||bd(n)||/windows phone/i.test(n)||wd(n)}/**
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
 */function Sd(n,e=[]){let t;switch(n){case"Browser":t=Nc(Ce());break;case"Worker":t=`${Nc(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xn}/${r}`}/**
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
 */class Rv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Cv(n,e={}){return kn(n,"GET","/v2/passwordPolicy",ma(n,e))}/**
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
 */const Pv=6;class kv{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Pv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Dv{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oc(this),this.idTokenSubscription=new Oc(this),this.beforeStateQueue=new Rv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ud,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=it(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await pd(this,{idToken:e}),r=await rt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Di(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(jt(this));const t=e?Ee(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cv(this),t=new kv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Sv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&it(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await gn.create(this,[it(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&cv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function as(n){return Ee(n)}class Oc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zp(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let va={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vv(n){va=n}function Nv(n){return va.loadJS(n)}function Ov(){return va.gapiScript}function Lv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Fv(n,e){const t=Do(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(cr(s,e??{}))return i;Ye(i,"already-initialized")}return t.initialize({options:e})}function Mv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(it);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Uv(n,e,t){const r=as(n);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ad(e),{host:a,port:l}=jv(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),$v()}function Ad(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function jv(n){const e=Ad(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Lc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Lc(a)}}}function Lc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $v(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class xd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}/**
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
 */async function mn(n,e){return mv(n,"POST","/v1/accounts:signInWithIdp",ma(n,e))}/**
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
 */const Bv="http://localhost";class Kt extends xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ro(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Kt(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return mn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,mn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mn(e,t)}buildRequest(){const e={requestUri:Bv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_r(t)}return e}}/**
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
 */class wa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kr extends wa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yt extends kr{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
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
 */class et extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Kt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return et.credential(t,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
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
 */class _t extends kr{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
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
 */class vt extends kr{constructor(){super("twitter.com")}static credential(e,t){return Kt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vt.credential(t,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
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
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await rt._fromIdTokenResponse(e,r,i),a=Fc(r);return new An({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Fc(r);return new An({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Fc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Vi extends ht{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Vi(e,t,r,i)}}function Rd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vi._fromErrorAndOperation(n,s,e,r):s})}async function zv(n,e,t=!1){const r=await mr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return An._forOperation(n,"link",r)}/**
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
 */async function qv(n,e,t=!1){const{auth:r}=n;if(tt(r.app))return Promise.reject(jt(r));const i="reauthenticate";try{const s=await mr(n,Rd(r,i,e,n),t);G(s.idToken,r,"internal-error");const a=ya(s.idToken);G(a,r,"internal-error");const{sub:l}=a;return G(n.uid===l,r,"user-mismatch"),An._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),s}}/**
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
 */async function Gv(n,e,t=!1){if(tt(n.app))return Promise.reject(jt(n));const r="signIn",i=await Rd(n,r,e),s=await An._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function Hv(n,e,t,r){return Ee(n).onIdTokenChanged(e,t,r)}function Kv(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function Wv(n,e,t,r){return Ee(n).onAuthStateChanged(e,t,r)}function Qv(n){return Ee(n).signOut()}const Ni="__sak";/**
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
 */class Cd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ni,"1"),this.storage.removeItem(Ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Jv=1e3,Yv=10;class Pd extends Cd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Id(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);xv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Yv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pd.type="LOCAL";const Xv=Pd;/**
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
 */class kd extends Cd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kd.type="SESSION";const Dd=kd;/**
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
 */function Zv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ls{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ls(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,s)),u=await Zv(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ls.receivers=[];/**
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
 */function Ea(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ew{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const d=Ea("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const b=m;if(b.data.eventId===d)switch(b.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(b.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function We(){return window}function tw(n){We().location.href=n}/**
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
 */function Vd(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function nw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function iw(){return Vd()?self:null}/**
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
 */const Nd="firebaseLocalStorageDb",sw=1,Oi="firebaseLocalStorage",Od="fbase_key";class Dr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cs(n,e){return n.transaction([Oi],e?"readwrite":"readonly").objectStore(Oi)}function ow(){const n=indexedDB.deleteDatabase(Nd);return new Dr(n).toPromise()}function xo(){const n=indexedDB.open(Nd,sw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Oi,{keyPath:Od})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Oi)?e(r):(r.close(),await ow(),e(await xo()))})})}async function Mc(n,e,t){const r=cs(n,!0).put({[Od]:e,value:t});return new Dr(r).toPromise()}async function aw(n,e){const t=cs(n,!1).get(e),r=await new Dr(t).toPromise();return r===void 0?null:r.value}function Uc(n,e){const t=cs(n,!0).delete(e);return new Dr(t).toPromise()}const lw=800,cw=3;class Ld{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>cw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ls._getInstance(iw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nw(),!this.activeServiceWorker)return;this.sender=new ew(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xo();return await Mc(e,Ni,"1"),await Uc(e,Ni),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>aw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Uc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cs(i,!1).getAll();return new Dr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ld.type="LOCAL";const uw=Ld;new Pr(3e4,6e4);/**
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
 */function Fd(n,e){return e?it(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ba extends xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hw(n){return Gv(n.auth,new ba(n),n.bypassAuthState)}function dw(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),qv(t,new ba(n),n.bypassAuthState)}async function fw(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),zv(t,new ba(n),n.bypassAuthState)}/**
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
 */class Md{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hw;case"linkViaPopup":case"linkViaRedirect":return fw;case"reauthViaPopup":case"reauthViaRedirect":return dw;default:Ye(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pw=new Pr(2e3,1e4);async function gw(n,e,t){if(tt(n.app))return Promise.reject(qe(n,"operation-not-supported-in-this-environment"));const r=as(n);uv(n,e,wa);const i=Fd(r,t);return new Mt(r,"signInViaPopup",e,i).executeNotNull()}class Mt extends Md{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mt.currentPopupAction&&Mt.currentPopupAction.cancel(),Mt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Ea();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pw.get())};e()}}Mt.currentPopupAction=null;/**
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
 */const mw="pendingRedirect",gi=new Map;class yw extends Md{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=gi.get(this.auth._key());if(!e){try{const r=await _w(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}gi.set(this.auth._key(),e)}return this.bypassAuthState||gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _w(n,e){const t=Ew(e),r=ww(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function vw(n,e){gi.set(n._key(),e)}function ww(n){return it(n._redirectPersistence)}function Ew(n){return pi(mw,n.config.apiKey,n.name)}async function bw(n,e,t=!1){if(tt(n.app))return Promise.reject(jt(n));const r=as(n),i=Fd(r,e),a=await new yw(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Tw=10*60*1e3;class Iw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ud(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tw&&this.cachedEventUids.clear(),this.cachedEventUids.has(jc(e))}saveEventToCache(e){this.cachedEventUids.add(jc(e)),this.lastProcessedEventTime=Date.now()}}function jc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ud({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ud(n);default:return!1}}/**
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
 */async function Aw(n,e={}){return kn(n,"GET","/v1/projects",e)}/**
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
 */const xw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rw=/^https?/;async function Cw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Aw(n);for(const t of e)try{if(Pw(t))return}catch{}Ye(n,"unauthorized-domain")}function Pw(n){const e=So(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Rw.test(t))return!1;if(xw.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const kw=new Pr(3e4,6e4);function $c(){const n=We().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Dw(n){return new Promise((e,t)=>{var r,i,s;function a(){$c(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$c(),t(qe(n,"network-request-failed"))},timeout:kw.get()})}if(!((i=(r=We().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=We().gapi)===null||s===void 0)&&s.load)a();else{const l=Lv("iframefcb");return We()[l]=()=>{gapi.load?a():t(qe(n,"network-request-failed"))},Nv(`${Ov()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw mi=null,e})}let mi=null;function Vw(n){return mi=mi||Dw(n),mi}/**
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
 */const Nw=new Pr(5e3,15e3),Ow="__/auth/iframe",Lw="emulator/auth/iframe",Fw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uw(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ga(e,Lw):`https://${n.config.authDomain}/${Ow}`,r={apiKey:e.apiKey,appName:n.name,v:xn},i=Mw.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${_r(r).slice(1)}`}async function jw(n){const e=await Vw(n),t=We().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:Uw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=qe(n,"network-request-failed"),l=We().setTimeout(()=>{s(a)},Nw.get());function u(){We().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const $w={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bw=500,zw=600,qw="_blank",Gw="http://localhost";class Bc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hw(n,e,t,r=Bw,i=zw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},$w),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Ce().toLowerCase();t&&(l=vd(d)?qw:t),yd(d)&&(e=e||Gw,u.scrollbars="yes");const f=Object.entries(u).reduce((b,[S,P])=>`${b}${S}=${P},`,"");if(Av(d)&&l!=="_self")return Kw(e||"",l),new Bc(null);const m=window.open(e||"",l,f);G(m,n,"popup-blocked");try{m.focus()}catch{}return new Bc(m)}function Kw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Ww="__/auth/handler",Qw="emulator/auth/handler",Jw=encodeURIComponent("fac");async function zc(n,e,t,r,i,s){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:xn,eventId:i};if(e instanceof wa){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Xp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof kr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),d=u?`#${Jw}=${encodeURIComponent(u)}`:"";return`${Yw(n)}?${_r(l).slice(1)}${d}`}function Yw({config:n}){return n.emulator?ga(n,Qw):`https://${n.authDomain}/${Ww}`}/**
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
 */const Qs="webStorageSupport";class Xw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dd,this._completeRedirectFn=bw,this._overrideRedirectResult=vw}async _openPopup(e,t,r,i){var s;ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await zc(e,t,r,So(),i);return Hw(e,a,Ea())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await zc(e,t,r,So(),i);return tw(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await jw(e),r=new Iw(e);return t.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qs,{type:Qs},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qs];a!==void 0&&t(!!a),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Cw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Id()||_d()||_a()}}const Zw=Xw;var qc="@firebase/auth",Gc="1.7.9";/**
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
 */class eE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nE(n){_n(new $t("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sd(n)},d=new Dv(r,i,s,u);return Mv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),_n(new $t("auth-internal",e=>{const t=as(e.getProvider("auth").getImmediate());return(r=>new eE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(qc,Gc,tE(n)),It(qc,Gc,"esm2017")}/**
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
 */const rE=5*60,iE=ku("authIdTokenMaxAge")||rE;let Hc=null;const sE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>iE)return;const i=t==null?void 0:t.token;Hc!==i&&(Hc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oE(n=Ou()){const e=Do(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Fv(n,{popupRedirectResolver:Zw,persistence:[uw,Xv,Dd]}),r=ku("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=sE(s.toString());Kv(t,a,()=>a(t.currentUser)),Hv(t,l=>a(l))}}const i=Mp("auth");return i&&Uv(t,`http://${i}`),t}function aE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Vv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=qe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",aE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nE("Browser");const jd=()=>{const n="production";if(["development","staging","production"].includes(n))return n;const e=window.location.hostname;return e.includes("localhost")||e.includes("127.0.0.1")?"development":e.includes("staging")||e.includes("test")||e.includes("dev")?"staging":"production"},lE={development:{apiUrl:"http://localhost:3000/api",databaseType:"local",storagePrefix:"blindtab_dev_",enableAnalytics:!1,logLevel:"debug",features:{tourEnabled:!0,editorEnabled:!0,importExportEnabled:!0,debugTools:!0}},staging:{apiUrl:"https://staging-api.blindtab.app/api",databaseType:"remote",storagePrefix:"blindtab_staging_",enableAnalytics:!0,logLevel:"info",features:{tourEnabled:!0,editorEnabled:!0,importExportEnabled:!0,debugTools:!0}},production:{apiUrl:"https://api.blindtab.app/api",databaseType:"remote",storagePrefix:"blindtab_",enableAnalytics:!0,logLevel:"error",features:{tourEnabled:!0,editorEnabled:!0,importExportEnabled:!0,debugTools:!1}}},cE=()=>{const n=jd();return console.log(`Running in ${n} environment`),lE[n]},us=jd(),uE=cE(),De=us==="development",hE=us==="production";De&&(console.log("Environment:",us),console.log("Config:",uE));const dE="modulepreload",fE=function(n){return"/"+n},Kc={},Wc=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=fE(u),u in Kc)return;Kc[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":dE,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((b,S)=>{m.addEventListener("load",b),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};class pE{constructor(e,t){Zr(this,"baseUrl");Zr(this,"apiKey");Zr(this,"defaultHeaders");this.baseUrl=`https://firestore.googleapis.com/v1/projects/${e}/databases/(default)/documents`,this.apiKey=t,this.defaultHeaders={"Content-Type":"application/json",Accept:"application/json"}}getFirestoreUrl(e=""){const t=`${this.baseUrl}${e?"/"+e:""}?key=${this.apiKey}`;return window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"&&sessionStorage.getItem("firestore_cors_issue")==="true"?(console.log("Using CORS proxy for Firestore request"),`https://corsproxy.io/?${encodeURIComponent(t)}`):t}async testConnection(){try{const e=await fetch(this.getFirestoreUrl(),{method:"GET",headers:this.defaultHeaders});return e.status===404?(console.error("Firestore database not found. You need to create it in the Firebase Console."),!1):e.ok?!0:(console.error(`Firestore connection test failed with status: ${e.status}`),e.status===0||e.type==="opaque"?(console.log("CORS issue detected, will use proxy for future requests"),sessionStorage.setItem("firestore_cors_issue","true"),this.testConnectionWithProxy()):!1)}catch(e){return console.error("Firestore connection test failed:",e),console.log("Trying with CORS proxy..."),this.testConnectionWithProxy()}}async testConnectionWithProxy(){try{sessionStorage.setItem("firestore_cors_issue","true");const e=this.getFirestoreUrl();console.log("Testing connection with proxy URL:",e);const t=await fetch(e,{method:"GET",headers:this.defaultHeaders});return t.ok?(console.log("✅ Connection successful through CORS proxy"),!0):(console.error(`Proxy connection test failed with status: ${t.status}`),!1)}catch(e){return console.error("Proxy connection test failed:",e),console.log("Trying direct Firebase SDK as last resort..."),this.testWithFirebaseSDK()}}async testWithFirebaseSDK(){var e,t;try{const{collection:r,getDocs:i,query:s,limit:a}=await Wc(async()=>{const{collection:d,getDocs:f,query:m,limit:b}=await Promise.resolve().then(()=>sv);return{collection:d,getDocs:f,query:m,limit:b}},void 0),{db:l}=await Wc(async()=>{const{db:d}=await Promise.resolve().then(()=>_E);return{db:d}},void 0),u=s(r(l,"firebase_test"),a(1));return await i(u),console.log("Direct Firestore access successful. Using Firebase SDK instead of REST."),!0}catch(r){return r.code==="not-found"||(e=r.message)!=null&&e.includes("not found")||(t=r.message)!=null&&t.includes("404")?(console.error("Firestore database not found using direct access."),!1):(console.error("Direct Firestore access failed with error:",r),!1)}}async get(e,t){try{const r=await fetch(this.getFirestoreUrl(`${e}/${t}`),{headers:this.defaultHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const i=await r.json();return this._transformResponse(i)}catch(r){throw console.error("Error getting document:",r),r}}async list(e,t=100){try{const r=await fetch(this.getFirestoreUrl(`${e}?pageSize=${t}`),{headers:this.defaultHeaders});if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const i=await r.json();return i.documents?i.documents.map(s=>this._transformResponse(s)):[]}catch(r){throw console.error("Error listing documents:",r),r}}async set(e,t,r){try{const i=await fetch(this.getFirestoreUrl(`${e}/${t}`),{method:"PATCH",headers:this.defaultHeaders,body:JSON.stringify({fields:this._transformRequest(r)})});if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const s=await i.json();return this._transformResponse(s)}catch(i){throw console.error("Error setting document:",i),i}}async delete(e,t){try{const r=await fetch(this.getFirestoreUrl(`${e}/${t}`),{method:"DELETE",headers:this.defaultHeaders});if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return!0}catch(r){throw console.error("Error deleting document:",r),r}}_transformResponse(e){if(!e.fields)return null;const t={};for(const[r,i]of Object.entries(e.fields))t[r]=this._extractValue(i);if(e.name){const r=e.name.split("/");t.id=r[r.length-1]}return t}_extractValue(e){const t=Object.keys(e)[0],r=e[t];switch(t){case"stringValue":case"integerValue":case"doubleValue":case"booleanValue":return r;case"nullValue":return null;case"mapValue":return this._transformResponse(r);case"arrayValue":return r.values?r.values.map(i=>this._extractValue(i)):[];case"timestampValue":return new Date(r);default:return console.warn("Unknown field type:",t),r}}_transformRequest(e){const t={};for(const[r,i]of Object.entries(e))r!=="id"&&(t[r]=this._createFieldValue(i));return t}_createFieldValue(e){if(e==null)return{nullValue:null};switch(typeof e){case"string":return{stringValue:e};case"number":return Number.isInteger(e)?{integerValue:e.toString()}:{doubleValue:e};case"boolean":return{booleanValue:e};case"object":return Array.isArray(e)?{arrayValue:{values:e.map(t=>this._createFieldValue(t))}}:e instanceof Date?{timestampValue:e.toISOString()}:{mapValue:{fields:this._transformRequest(e)}};default:return console.warn("Unsupported type:",typeof e),{stringValue:String(e)}}}}const gE={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_URL:"https://api.blindtab.app/api",VITE_APP_ENV:"production",VITE_ENABLE_ANALYTICS:"true",VITE_ENABLE_DEBUG_TOOLS:"false",VITE_FIREBASE_API_KEY:"AIzaSyAtDg3VWHMBGepQ3Cu-G6A_9_CXGKNlPxE",VITE_FIREBASE_APP_ID:"1:205665942654:web:a23c572fb20d4ed14eec2f",VITE_FIREBASE_AUTH_DOMAIN:"blindtab-db.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"205665942654",VITE_FIREBASE_PROJECT_ID:"blindtab-db",VITE_FIREBASE_STORAGE_BUCKET:"blindtab-db.appspot.com",VITE_LOG_LEVEL:"error"},Z={SONGS:"songs",TAGS:"tags",CONFIG:"config",USER_SONGS:"user_songs"};let cn=!1;const mE=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"],Qc=mE.filter(n=>!gE[n]);if(Qc.length>0)throw new Error(`Missing required Firebase configuration: ${Qc.join(", ")}`);const yn={apiKey:"AIzaSyAtDg3VWHMBGepQ3Cu-G6A_9_CXGKNlPxE",authDomain:"blindtab-db.firebaseapp.com",projectId:"blindtab-db",storageBucket:"blindtab-db.appspot.com",messagingSenderId:"205665942654",appId:"1:205665942654:web:a23c572fb20d4ed14eec2f"},Vr=window.location.hostname.includes("-projects.vercel.app")||window.location.hostname.includes("-staging.vercel.app")||window.location.hostname.includes("-preview.vercel.app"),hs=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";console.log("[Firebase] Configuration:",{authDomain:yn.authDomain,projectId:yn.projectId,storageBucket:yn.storageBucket,environment:us,currentDomain:window.location.hostname,currentOrigin:window.location.origin,currentPath:window.location.pathname,isPreviewDeployment:Vr,isLocalDevelopment:hs,isDev:De,usingEmulator:De&&!1,usingRestClient:!0});Vr&&!hs&&console.log("[Firebase] Preview deployment detected, using default authDomain");const ds=Nu(yn),se=new pE(yn.projectId,yn.apiKey);hs||(console.log("[Firebase] Exposing Firebase app to window for debugging"),window._firebase_app=ds,window._firebase_rest=se);let pe=sa(ds,{experimentalForceLongPolling:!0,ignoreUndefinedProperties:!0});pe._settings={...pe._settings,host:"firestore.googleapis.com",ssl:!0};const lr=oE(ds),$d=new et,yE=async()=>{try{if(console.log("[Firebase] Testing REST client connection..."),!await se.testConnection())return console.error("[Firebase] Firestore database not found or not accessible"),!1;const e="firebase_test",t="rest_test_"+Date.now(),r={message:"Hello from REST API",timestamp:new Date,testValue:42};await se.set(e,t,r),console.log("[Firebase] REST client test document created successfully");const i=await se.get(e,t);return console.log("[Firebase] REST client test document retrieved successfully:",i),await se.delete(e,t),console.log("[Firebase] REST client test document deleted successfully"),console.log("[Firebase] REST client connection test passed"),!0}catch(n){return console.error("[Firebase] REST client connection test failed:",n),!1}};yE().then(n=>{n?console.log("[Firebase] REST client is ready to use"):(console.warn("[Firebase] REST client failed, falling back to standard Firestore"),cn=!0)});const _E=Object.freeze(Object.defineProperty({__proto__:null,COLLECTIONS:Z,app:ds,auth:lr,db:pe,firestoreRest:se,googleProvider:$d,get isFallbackMode(){return cn},isLocalDevelopment:hs,isPreviewDeployment:Vr},Symbol.toStringTag,{value:"Module"}));x.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  color: #e0e0e0;
  font-family: monospace;
`;x.h3`
  margin-top: 0;
  margin-bottom: 12px;
  color: #61dafb;
`;x.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;x.button`
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
`;x.div`
  margin-top: 12px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${n=>n.$type==="success"?"#10893e33":n.$type==="error"?"#d1314733":"#0078d433"};
  border-left: 4px solid ${n=>n.$type==="success"?"#10893e":n.$type==="error"?"#d13147":"#0078d4"};
`;x.div`
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: #2d2d2d;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;x.button`
  background-color: #d13147;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #a82636;
  }
`;const Bd=D.createContext(null),fs=()=>{const n=D.useContext(Bd);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n};function vE({children:n}){const[e,t]=D.useState(null),[r,i]=D.useState(!0),[s,a]=D.useState(null);D.useEffect(()=>{const m=Wv(lr,b=>{t(b),i(!1)},b=>{console.error("[Auth] Auth state change error:",b),a(b),i(!1)});return()=>m()},[]);const l=async()=>{try{return(await gw(lr,$d)).user}catch(m){throw console.error("[Auth] Google sign-in error:",m),m.code==="auth/unauthorized-domain"&&(console.warn("[Auth] This domain is not authorized in Firebase. Add it in the Firebase Console -> Authentication -> Sign-in method -> Authorized domains"),console.warn("[Auth] Current domain:",window.location.hostname),window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?console.info("[Auth] For local development, please use the Firebase emulator with VITE_USE_FIREBASE_EMULATOR=true"):(window.location.hostname.includes("-projects.vercel.app")||window.location.hostname.includes("-staging.vercel.app")||window.location.hostname.includes("-preview.vercel.app"))&&(console.info("[Auth] For preview deployments, please add this domain to Firebase authorized domains list"),console.info("[Auth] Or use the production domain that is already authorized"))),m}},f={user:e,loading:r,error:s,signIn:async()=>{try{return await l()}catch(m){throw a(m instanceof Error?m:new Error("Failed to sign in")),m}},logout:async()=>{try{await Qv(lr)}catch(m){throw a(m instanceof Error?m:new Error("Failed to sign out")),m}}};return g.jsx(Bd.Provider,{value:f,children:n})}async function wE(n,e){try{try{const t=Be(pe,Z.USER_SONGS,n);(await Ht(t)).exists()?await Cr(t,{[`songs.${e}`]:{songId:e,addedAt:new Date,playCount:0},updatedAt:new Date}):await ss(t,{userId:n,songs:{[e]:{songId:e,addedAt:new Date,playCount:0}},createdAt:new Date,updatedAt:new Date}),console.log(`[UserSongs] Added song ${e} to user ${n}'s collection using Firebase SDK`);return}catch(t){console.error("[UserSongs] Error adding song to user collection with Firebase SDK:",t);const r=await se.get(Z.USER_SONGS,n);if(!r)await se.set(Z.USER_SONGS,n,{userId:n,songs:{[e]:{songId:e,addedAt:new Date,playCount:0}},createdAt:new Date,updatedAt:new Date});else{const i={...r,songs:{...r.songs,[e]:{songId:e,addedAt:new Date,playCount:0}},updatedAt:new Date};await se.set(Z.USER_SONGS,n,i)}console.log(`[UserSongs] Added song ${e} to user ${n}'s collection using REST client`)}}catch(t){throw console.error("[UserSongs] Error adding song to user collection:",t),t}}async function EE(n,e){try{try{const t=Be(pe,Z.USER_SONGS,n),r=await Ht(t);if(!r.exists()){console.warn(`[UserSongs] User ${n} does not have a song collection`);return}const i=r.data();if(!i.songs||!i.songs[e]){console.warn(`[UserSongs] Song ${e} not found in user ${n}'s collection`);return}await Cr(t,{[`songs.${e}`]:ld(),updatedAt:new Date}),console.log(`[UserSongs] Removed song ${e} from user ${n}'s collection using Firebase SDK`);return}catch(t){console.error("[UserSongs] Error removing song from user collection with Firebase SDK:",t);const r=await se.get(Z.USER_SONGS,n);if(!r){console.warn(`[UserSongs] User ${n} does not have a song collection`);return}const{[e]:i,...s}=r.songs,a={...r,songs:s,updatedAt:new Date};await se.set(Z.USER_SONGS,n,a),console.log(`[UserSongs] Removed song ${e} from user ${n}'s collection using REST client`)}}catch(t){throw console.error("[UserSongs] Error removing song from user collection:",t),t}}async function bE(n){try{try{const e=Be(pe,Z.USER_SONGS,n),t=await Ht(e);return t.exists()?{id:t.id,...t.data()}:null}catch(e){return console.error("[UserSongs] Error getting user song collection with Firebase SDK:",e),await se.get(Z.USER_SONGS,n)}}catch(e){throw console.error("[UserSongs] Error getting user song collection:",e),e}}async function Jc(n,e){try{try{const t=Be(pe,Z.USER_SONGS,n),r=await Ht(t);if(!r.exists()){console.warn(`[UserSongs] User ${n} does not have a song collection`);return}const i=r.data();if(!i.songs||!i.songs[e]){console.warn(`[UserSongs] Song ${e} not found in user ${n}'s collection`);return}const s={...i.songs[e],playCount:(i.songs[e].playCount||0)+1,lastPlayedAt:new Date};await Cr(t,{[`songs.${e}`]:s,updatedAt:new Date}),console.log(`[UserSongs] Updated play stats for song ${e} in user ${n}'s collection using Firebase SDK`);return}catch(t){console.error("[UserSongs] Error updating song play stats with Firebase SDK:",t);const r=await se.get(Z.USER_SONGS,n);if(!r||!r.songs||!r.songs[e]){console.warn(`[UserSongs] Song ${e} not found in user ${n}'s collection`);return}const i={...r.songs[e],playCount:(r.songs[e].playCount||0)+1,lastPlayedAt:new Date},s={...r,songs:{...r.songs,[e]:i},updatedAt:new Date};await se.set(Z.USER_SONGS,n,s),console.log(`[UserSongs] Updated play stats for song ${e} in user ${n}'s collection using REST client`)}}catch(t){throw console.error("[UserSongs] Error updating song play stats:",t),t}}const Ta=[{id:"mock-song-1",title:"Twinkle Twinkle Little Star",artist:"Traditional",notes:"C C G G A A G F F E E D D C",difficulty:"beginner",tags:["children","classic","beginner"],lyrics:[{line:"Twinkle twinkle little star",chords:"C        G        C",position:0},{line:"How I wonder what you are",chords:"F        C        G",position:0},{line:"Up above the world so high",chords:"C        G        C",position:0},{line:"Like a diamond in the sky",chords:"F        C        G",position:0},{line:"Twinkle twinkle little star",chords:"C        G        C",position:0},{line:"How I wonder what you are",chords:"F        C        G",position:0}],createdAt:new Date,updatedAt:new Date,playCount:42,lastPlayed:new Date},{id:"mock-song-2",title:"Happy Birthday",artist:"Traditional",notes:"C C D C F E C C D C G F",difficulty:"beginner",tags:["celebration","classic","beginner"],lyrics:[{line:"Happy birthday to you",chords:"C C D C F E",position:0},{line:"Happy birthday to you",chords:"C C D C G F",position:0},{line:"Happy birthday dear friend",chords:"C C C A F E D",position:0},{line:"Happy birthday to you",chords:"B B A F G F",position:0}],createdAt:new Date,updatedAt:new Date,playCount:28,lastPlayed:new Date},{id:"mock-song-3",title:"Jingle Bells",artist:"James Lord Pierpont",notes:"E E E E E E E G C D E F F F F F E E E E D D E D G",difficulty:"intermediate",tags:["holiday","christmas","intermediate"],lyrics:[{line:"Dashing through the snow",chords:"E        A        E",position:0},{line:"In a one-horse open sleigh",chords:"B7       E        B7",position:0},{line:"O'er the fields we go",chords:"E        A        E",position:0},{line:"Laughing all the way",chords:"B7       E        B7",position:0},{line:"Bells on bobtails ring",chords:"E        A        E",position:0},{line:"Making spirits bright",chords:"B7       E        B7",position:0},{line:"What fun it is to ride and sing",chords:"E        A        E",position:0},{line:"A sleighing song tonight",chords:"B7       E        B7",position:0},{line:"Jingle bells, jingle bells",chords:"E        E        E E",position:0},{line:"Jingle all the way",chords:"E        A        B7",position:0},{line:"Oh what fun it is to ride",chords:"E        A        E",position:0},{line:"In a one-horse open sleigh, hey!",chords:"B7       E        B7 E",position:0}],createdAt:new Date,updatedAt:new Date,playCount:15,lastPlayed:new Date},{id:"mock-song-4",title:"Ode to Joy",artist:"Ludwig van Beethoven",notes:"E E F G G F E D C C D E E D D",difficulty:"intermediate",tags:["classical","beethoven","intermediate"],lyrics:[{line:"Joyful, joyful, we adore Thee",chords:"E E F G G F E D",position:0},{line:"God of glory, Lord of love",chords:"C C D E E D D",position:0},{line:"Hearts unfold like flowers before Thee",chords:"E E F G G F E D",position:0},{line:"Opening to the sun above",chords:"C C D E D C C",position:0}],createdAt:new Date,updatedAt:new Date,playCount:33,lastPlayed:new Date},{id:"mock-song-5",title:"Für Elise",artist:"Ludwig van Beethoven",notes:"E D# E D# E B D C A C E A B E G# B C",difficulty:"advanced",tags:["classical","beethoven","advanced"],lyrics:[{line:"First phrase",chords:"E D# E D# E B D C A",position:0},{line:"Second phrase",chords:"C E A B E G# B C",position:0},{line:"Third phrase",chords:"E D# E D# E B D C A",position:0},{line:"Fourth phrase",chords:"C E A B E C B A",position:0}],createdAt:new Date,updatedAt:new Date,playCount:19,lastPlayed:new Date}],TE={songs:{"mock-song-1":{addedAt:new Date},"mock-song-3":{addedAt:new Date},"mock-song-5":{addedAt:new Date}}},si=()=>Ta,Js=()=>{const n=Object.keys(TE.songs);return Ta.filter(e=>n.includes(e.id))},zd=D.createContext(null),IE=()=>{const n=D.useContext(zd);if(!n)throw new Error("useSongs must be used within a SongProvider");return n},Yt=IE,SE=({children:n})=>{const[e,t]=D.useState([]),[r,i]=D.useState([]),[s,a]=D.useState(null),[l,u]=D.useState(!0),[d,f]=D.useState(null),[m]=D.useState(Vr&&!0&&cn),{user:b}=fs(),S=async()=>{try{u(!0),f(null);let F=[];if(De&&cn){console.log("[SongContext] Using mock data (development mode)"),F=si(),t(F),i(b?Js():[]),u(!1);return}if(cn){console.log("[SongContext] Using standard Firestore SDK (fallback mode)");try{const w=St(pe,Z.SONGS);F=(await At(w)).docs.map(v=>({id:v.id,...v.data()}))}catch(w){console.error("[SongContext] Firestore SDK failed:",w),De&&(console.log("[SongContext] Falling back to mock data"),F=si())}}else{console.log("[SongContext] Using Firestore REST client");try{F=await se.list(Z.SONGS)}catch(w){console.error("[SongContext] REST client failed, falling back to standard Firestore:",w);try{const y=St(pe,Z.SONGS);F=(await At(y)).docs.map(E=>({id:E.id,...E.data()}))}catch(y){console.error("[SongContext] Firestore SDK also failed:",y),De&&(console.log("[SongContext] Falling back to mock data"),F=si())}}}if(t(F),b)try{const w=await bE(b.uid);if(w){const y=Object.keys(w.songs),v=F.filter(E=>y.includes(E.id));i(v)}else i([])}catch(w){console.error("Error fetching user songs:",w),i(De&&cn?Js():[])}else i([])}catch(F){console.error("Error fetching songs:",F),f(F instanceof Error?F:new Error("Failed to fetch songs")),De?(console.log("[SongContext] Using mock data after error"),t(si()),i(b?Js():[])):(t([]),i([]))}finally{u(!1)}},P=async F=>{try{const w=`song_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,y={...F,id:w,createdAt:new Date,updatedAt:new Date};try{const{id:v,...E}=y;await ss(Be(pe,Z.SONGS,v),E),console.log("Song added successfully using Firebase SDK")}catch(v){console.error("Error adding song with Firebase SDK:",v),await se.set(Z.SONGS,w,y)}return await S(),w}catch(w){throw console.error("Error adding song:",w),w}},k=async(F,w)=>{try{let y=null;try{const E=await Ht(Be(pe,Z.SONGS,F));E.exists()&&(y={id:E.id,...E.data()})}catch(E){console.error("Error getting song with Firebase SDK:",E),y=await se.get(Z.SONGS,F)}if(!y)throw new Error(`Song with ID ${F} not found`);const v={...y,...w,updatedAt:new Date};try{const{id:E,...T}=v;await Cr(Be(pe,Z.SONGS,E),T),console.log("Song updated successfully using Firebase SDK")}catch(E){console.error("Error updating song with Firebase SDK:",E),await se.set(Z.SONGS,F,v)}await S()}catch(y){throw console.error("Error updating song:",y),y}},R=async F=>{try{try{await ad(Be(pe,Z.SONGS,F)),console.log("Song deleted successfully using Firebase SDK")}catch(w){console.error("Error deleting song with Firebase SDK:",w),await se.delete(Z.SONGS,F)}await S()}catch(w){throw console.error("Error deleting song:",w),w}},N=async F=>{if(!b)throw new Error("User must be authenticated to select songs");await wE(b.uid,F),await S()},U=async F=>{if(!b)throw new Error("User must be authenticated to unselect songs");await EE(b.uid,F),await S()},L=F=>r.some(w=>w.id===F),B=async F=>{b&&await Jc(b.uid,F)},q=async F=>{try{let w=null;try{const y=await Ht(Be(pe,Z.SONGS,F));y.exists()&&(w={id:y.id,...y.data()},console.log("Song loaded successfully using Firebase SDK:",w))}catch(y){console.error("Error getting song with Firebase SDK:",y),w=await se.get(Z.SONGS,F)}if(!w)throw new Error(`Song with ID ${F} not found`);if(a(w),b)try{await Jc(b.uid,F)}catch(y){console.error("Error updating play stats:",y)}return w}catch(w){throw console.error("Error playing song:",w),w instanceof Error?w:new Error("Failed to play song")}};return D.useEffect(()=>{S()},[b]),g.jsx(zd.Provider,{value:{songs:e,userSongs:r,currentSong:s,isLoading:l,error:d,isPreviewMode:m,refreshSongs:S,addSong:P,updateSong:k,deleteSong:R,selectSong:N,unselectSong:U,setCurrentSong:a,isUserSong:L,updatePlayStats:B,addSongToCollection:N,removeSongFromCollection:U,playSong:q,createNewSong:P,refreshSongList:S,deleteSongById:R,checkDatabaseConnection:async()=>!0},children:n})};x.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  color: #e0e0e0;
  font-family: monospace;
`;x.h3`
  margin-top: 0;
  margin-bottom: 12px;
  color: #61dafb;
`;x.div`
  display: flex;
  margin-bottom: 8px;
`;x.div`
  width: 180px;
  color: #9cdcfe;
`;x.div`
  flex: 1;
  word-break: break-all;
`;const AE=x.div`
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
`,xE=x.div`
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`,RE=x.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,nn=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,rn=x.label`
  font-weight: 600;
  color: var(--text-primary);
`,Qn=x.input`
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-secondary);
  color: var(--text-primary);
`,CE=x.textarea`
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  min-height: 200px;
  font-family: monospace;
`,PE=x.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,Yc=x.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${n=>n.$variant==="primary"?"var(--primary)":n.$variant==="danger"?"var(--error)":"var(--bg-secondary)"};
  color: ${n=>n.$variant?"white":"var(--text-primary)"};

  &:hover {
    opacity: 0.9;
  }
`;function qd({isOpen:n,onClose:e,songId:t,isNewSong:r=!1}){const{songs:i,createNewSong:s,updateSong:a}=Yt(),[l,u]=D.useState(""),[d,f]=D.useState(""),[m,b]=D.useState(""),[S,P]=D.useState(""),[k,R]=D.useState(""),[N,U]=D.useState(""),[L,B]=D.useState(!1),[q,F]=D.useState(null);D.useEffect(()=>{var v;if(n&&t&&!r){const E=i.find(T=>T.id===t);if(E){u(E.title),f(E.artist),b(E.key||""),P(((v=E.tempo)==null?void 0:v.toString())||""),R(E.timeSignature||"");const T=E.lyrics.sort((I,_)=>I.position-_.position).map(I=>I.chords?`[${I.chords}] ${I.line}`:I.line).join(`
`);U(T)}}else u(""),f(""),b(""),P(""),R(""),U("")},[n,t,r,i]);const w=v=>v.split(`
`).map((E,T)=>{const I=E.match(/^\[(.*?)\]/);return I?{line:E.replace(/^\[(.*?)\]\s*/,"").trim(),chords:I[1].trim(),position:T}:{line:E.trim(),chords:"",position:T}}),y=async v=>{v.preventDefault(),B(!0),F(null);try{const E={title:l,artist:d,key:m||null,tempo:S?parseInt(S,10):null,timeSignature:k||null,lyrics:w(N)};r?await s(E):t&&await a(t,E),e()}catch(E){console.error("Error saving song:",E),E instanceof Error&&E.message.includes("preview mode")?F("This feature is disabled in preview mode. Please use the full app to save songs."):F(E instanceof Error?E.message:"Failed to save song")}finally{B(!1)}};return n?g.jsx(AE,{onClick:e,children:g.jsx(xE,{onClick:v=>v.stopPropagation(),children:g.jsxs(RE,{onSubmit:y,children:[g.jsxs(nn,{children:[g.jsx(rn,{htmlFor:"title",children:"Title"}),g.jsx(Qn,{id:"title",value:l,onChange:v=>u(v.target.value),placeholder:"Enter song title",required:!0})]}),g.jsxs(nn,{children:[g.jsx(rn,{htmlFor:"artist",children:"Artist"}),g.jsx(Qn,{id:"artist",value:d,onChange:v=>f(v.target.value),placeholder:"Enter artist name",required:!0})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[g.jsxs(nn,{children:[g.jsx(rn,{htmlFor:"key",children:"Key"}),g.jsx(Qn,{id:"key",value:m,onChange:v=>b(v.target.value),placeholder:"e.g., C"})]}),g.jsxs(nn,{children:[g.jsx(rn,{htmlFor:"tempo",children:"Tempo (BPM)"}),g.jsx(Qn,{id:"tempo",type:"number",value:S,onChange:v=>P(v.target.value),placeholder:"e.g., 120"})]}),g.jsxs(nn,{children:[g.jsx(rn,{htmlFor:"timeSignature",children:"Time Signature"}),g.jsx(Qn,{id:"timeSignature",value:k,onChange:v=>R(v.target.value),placeholder:"e.g., 4/4"})]})]}),g.jsxs(nn,{children:[g.jsx(rn,{htmlFor:"lyrics",children:"Lyrics & Chords"}),g.jsx(CE,{id:"lyrics",value:N,onChange:v=>U(v.target.value),placeholder:`Enter lyrics with chords in brackets before words, e.g:
[Am] Here comes the sun
[C] Little darling
[G] It's been a long cold lonely winter`,required:!0})]}),q&&g.jsx("div",{style:{color:"var(--error)",marginTop:"1rem"},children:q.toString()}),g.jsxs(PE,{children:[g.jsx(Yc,{type:"button",onClick:e,children:"Cancel"}),g.jsx(Yc,{type:"submit",$variant:"primary",disabled:L,children:L?"Saving...":r?"Create Song":"Update Song"})]})]})})}):null}x.div`
  padding: 20px;
`;x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;x.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;x.h3`
  margin: 0 0 8px 0;
  color: #333;
`;x.p`
  margin: 0 0 16px 0;
  color: #666;
`;x.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;const kE=x.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${n=>n.variant==="danger"?"#ff4444":n.variant==="primary"?"#007AFF":"#f0f0f0"};
  color: ${n=>n.variant==="danger"||n.variant==="primary"?"white":"black"};
  
  &:hover {
    opacity: 0.9;
  }
`;x(kE)`
  margin-bottom: 20px;
`;x.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  color: #e0e0e0;
  font-family: monospace;
`;x.h3`
  margin-top: 0;
  margin-bottom: 12px;
  color: #61dafb;
`;x.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`;x.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;x.label`
  font-size: 14px;
  color: #9cdcfe;
`;x.input`
  background-color: #2d2d2d;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 8px;
  color: white;
  font-family: monospace;
`;x.button`
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
`;x.div`
  padding: 8px;
  color: #d32f2f;
  background-color: #ffebee;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 14px;
`;x.div`
  padding: 8px;
  color: #2e7d32;
  background-color: #e8f5e9;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 14px;
`;x.div`
  background-color: #2d2d2d;
  border-radius: 4px;
  padding: 12px;
  margin-top: 16px;
`;const Gd=D.createContext(void 0),DE=({children:n})=>{const[e,t]=D.useState(()=>{const i=localStorage.getItem("theme"),s=window.matchMedia("(prefers-color-scheme: dark)").matches;return i==="dark"||!i&&s});D.useEffect(()=>{e?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme")):(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme")),localStorage.setItem("theme",e?"dark":"light")},[e]);const r=()=>{t(i=>!i)};return g.jsx(Gd.Provider,{value:{isDarkTheme:e,toggleTheme:r},children:n})},Hd=()=>{const n=D.useContext(Gd);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n},Kd=D.createContext(void 0),VE=({children:n})=>{const[e,t]=D.useState(()=>{const m=localStorage.getItem("fontSize");return m?parseInt(m,10):24}),[r,i]=D.useState(()=>{const m=localStorage.getItem("linesToDisplay");return m?parseInt(m,10):2}),[s,a]=D.useState(()=>{const m=localStorage.getItem("autoResize");return m?m==="true":!0}),[l,u]=D.useState(()=>{const m=localStorage.getItem("enableAnimations");return m?m==="true":!0});D.useEffect(()=>{localStorage.setItem("fontSize",e.toString())},[e]),D.useEffect(()=>{localStorage.setItem("linesToDisplay",r.toString())},[r]),D.useEffect(()=>{localStorage.setItem("autoResize",s.toString())},[s]),D.useEffect(()=>{localStorage.setItem("enableAnimations",l.toString())},[l]);const d=()=>{a(m=>!m)},f=()=>{u(m=>!m)};return g.jsx(Kd.Provider,{value:{fontSize:e,linesToDisplay:r,autoResize:s,enableAnimations:l,setFontSize:t,setLinesToDisplay:i,toggleAutoResize:d,toggleAnimations:f},children:n})},ps=()=>{const n=D.useContext(Kd);if(n===void 0)throw new Error("useDisplay must be used within a DisplayProvider");return n},NE=(n,e={})=>{const{globalKeys:t=!1,preventDefaultKeys:r=[]}=e,i=D.useCallback(s=>{if(!t){const d=s.target,f=d.tagName.toLowerCase();if(f==="input"||f==="textarea"||d.isContentEditable)return}const a=s.key.toLowerCase();let l=a;s.ctrlKey&&(l=`ctrl+${l}`),s.altKey&&(l=`alt+${l}`),s.shiftKey&&(l=`shift+${l}`),s.metaKey&&(l=`meta+${l}`);const u=n[l]||n[a];u&&((r.includes(a)||r.includes(l))&&s.preventDefault(),u(s))},[n,t,r]);return D.useEffect(()=>(document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}),[i]),null},ce=n=>{let e=document.getElementById("aria-live-announcer");e||(e=document.createElement("div"),e.id="aria-live-announcer",e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="sr-only",document.body.appendChild(e)),e.textContent=n,setTimeout(()=>{e.textContent=""},1e3)},OE=x.button`
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
`,LE=({isDarkTheme:n,toggleTheme:e,className:t})=>{const r=()=>{e(),ce(`Switched to ${n?"light":"dark"} theme`)};return g.jsx(OE,{onClick:r,"aria-label":n?"Switch to light theme":"Switch to dark theme",title:`${n?"Light":"Dark"} mode (D)`,className:t,children:n?g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"})}):g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"})})})},FE=x.div`
  position: relative;
  margin-left: auto;
`,ME=x.button`
  background: ${n=>n.$isOpen?"#e0e0e0":"transparent"};
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
`,UE=x.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 200px;
  z-index: 1000;
`,Xc=x.button`
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
`,jE=x.div`
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
`,$E=x.div`
  padding: 8px 16px;
  color: #d32f2f;
  font-size: 12px;
  background-color: #ffebee;
  margin: 8px;
  border-radius: 4px;
`,BE=()=>{const{user:n,signIn:e,logout:t,error:r}=fs(),[i,s]=D.useState(!1),[a,l]=D.useState(null),u=async()=>{try{l(null),await e(),s(!1)}catch(f){console.error("Failed to sign in:",f),f instanceof Error&&f.message.includes("auth/unauthorized-domain")?l("This domain is not authorized. Please contact the administrator."):l("Failed to sign in. Please try again.")}},d=async()=>{try{await t(),s(!1)}catch(f){console.error("Failed to sign out:",f)}};return g.jsxs(FE,{children:[g.jsx(ME,{onClick:()=>s(!i),$isOpen:i,title:n?"Profile menu":"Sign in",children:n!=null&&n.photoURL?g.jsx("img",{src:n.photoURL,alt:"Profile"}):"👤"}),i&&g.jsx(UE,{children:n?g.jsxs(g.Fragment,{children:[g.jsxs(jE,{children:[g.jsx("div",{className:"name",children:n.displayName}),g.jsx("div",{className:"email",children:n.email})]}),g.jsx(Xc,{onClick:d,children:"🚪 Sign out"})]}):g.jsxs(g.Fragment,{children:[g.jsx(Xc,{onClick:u,children:"🔑 Sign in with Google"}),a&&g.jsx($E,{children:a})]})})]})},zE=x.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
`,qE=x.div`
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
`,GE=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  flex: 1;
  overflow: hidden;
  text-align: center;
`,HE=x.div`
  font-weight: bold;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,KE=x.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,WE=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Ys=x.button`
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
`,QE=({onOpenAccessibilityMenu:n,onOpenSongLibrary:e,onStartTour:t})=>{const{isDarkTheme:r,toggleTheme:i}=Hd(),{songs:s}=Yt(),a=s.current,l=a?s.loaded[a]:null,u=(l==null?void 0:l.songInfo.title)||"",d=(l==null?void 0:l.songInfo.artist)||"",f=(l==null?void 0:l.songInfo.key)||"",m=(l==null?void 0:l.songInfo.tempo)||"",b=[];f&&b.push(`Key: ${f}`),m&&b.push(`Tempo: ${m}`);const S=b.join(" · "),P=()=>{n&&(n(),ce("Accessibility menu opened"))},k=()=>{e&&(e(),ce("Song library opened"))},R=()=>{t&&(t(),ce("Starting app tour"))};return g.jsxs(zE,{children:[g.jsx(qE,{children:g.jsxs("a",{href:"/","aria-label":"BlindTab Home",children:[g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"})}),"BlindTab"]})}),g.jsx(GE,{children:u&&g.jsxs(g.Fragment,{children:[g.jsx(HE,{children:u}),g.jsx(KE,{children:d}),S&&g.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:S})]})}),g.jsxs(WE,{children:[g.jsx(Ys,{onClick:k,"aria-label":"Open song library",title:"Open song library",className:"song-library-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"})})}),g.jsx(Ys,{onClick:P,"aria-label":"Open accessibility menu",title:"Open accessibility menu",className:"accessibility-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"})})}),g.jsx(Ys,{onClick:R,"aria-label":"Start app tour",title:"Start app tour",className:"help-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),g.jsx(LE,{isDarkTheme:r,toggleTheme:i,className:"theme-toggle"}),g.jsx(BE,{})]})]})},JE=(n,e={})=>{const{fontSize:t,setFontSize:r,linesToDisplay:i,autoResize:s}=ps(),a=D.useRef(null),[l,u]=D.useState(t),{minFontSize:d=12,maxFontSize:f=72,step:m=.5,lineHeight:b=1.5}=e;return D.useEffect(()=>{if(!s||!a.current)return;const S=a.current,P=()=>{if(!S)return;const N=S.clientHeight,U=i||n.length,L=N*.95;let B=f,q=d;const F=document.createElement("div");for(F.style.position="absolute",F.style.visibility="hidden",F.style.whiteSpace="pre-wrap",F.style.width=`${S.clientWidth}px`,document.body.appendChild(F);B>=d;){if(F.style.fontSize=`${B}px`,F.style.lineHeight=`${b}`,F.textContent=n.slice(0,U).join(`
`),F.offsetHeight<=L){q=B;break}B-=m}return document.body.removeChild(F),Math.max(d,q)},k=()=>{const N=P();N&&N!==l&&(u(N),s&&r(N))};k();const R=new ResizeObserver(k);return R.observe(S),()=>{R.disconnect()}},[s,n,i,d,f,m,b,l,r]),{containerRef:a,calculatedFontSize:l}},Zc=x.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: hidden;
  position: relative;
`,eu=x.div`
  width: 100%;
  max-width: 1200px;
  font-size: ${n=>n.$fontSize}px;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow: hidden;
  position: relative;
`,YE=x.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,XE=x.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5%;
  transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateY(${n=>n.$animationOffset});
`,tu=x.div`
  position: relative;
  padding-top: ${n=>n.$hasChords?"1.5em":"0"};
  margin-bottom: 0.5em;
  text-align: left;
  font-family: 'Courier New', monospace;
  width: 100%;
`,nu=x.div`
  position: relative;
  white-space: pre;
  display: inline-block;
  text-align: left;
`,ZE=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.5em;
  pointer-events: none;
  text-align: left;
`,e0=x.span`
  position: absolute;
  top: 0;
  color: var(--primary-color);
  font-weight: bold;
  font-family: 'Courier New', monospace;
  white-space: pre;
`,t0=x.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 0.7em;
  color: var(--text-secondary);
  opacity: 0.7;
`,n0=({songData:n,currentLineIndex:e=0})=>{const{fontSize:t,linesToDisplay:r,autoResize:i,enableAnimations:s}=ps(),[a,l]=D.useState([]),[u,d]=D.useState("0"),[f,m]=D.useState(e),b=D.useRef(null),S=D.useRef(0),P=D.useRef(null),k=(n==null?void 0:n.lyrics)||[],R=k.map(L=>L.line||""),{calculatedFontSize:N}=JE(R,{minFontSize:16,maxFontSize:72});D.useEffect(()=>()=>{b.current&&clearTimeout(b.current)},[]),D.useEffect(()=>{const L=i?N:t;S.current=L*1.5},[t,N,i]),D.useEffect(()=>{if(!n||!k.length){l([]);return}if(!s||e===f){const B=Math.max(0,e),q=Math.min(k.length,B+r);l(k.slice(B,q)),d("0"),m(e);return}if(e>f){const B=Math.max(0,e-1),q=Math.min(k.length,e+r+1);l(k.slice(B,q)),d(`${S.current}px`);const F=requestAnimationFrame(()=>{const w=setTimeout(()=>{d("0")},30);return()=>clearTimeout(w)});return()=>cancelAnimationFrame(F)}else{const B=Math.max(0,e-1),q=Math.min(k.length,e+r);l(k.slice(B,q)),d(`-${S.current}px`);const F=requestAnimationFrame(()=>{const w=setTimeout(()=>{d("0")},30);return()=>clearTimeout(w)});return()=>cancelAnimationFrame(F)}},[n,e,r,s,k.length]);const U=(L,B)=>{let q=[];L.chords&&(typeof L.chords=="string"?q=[{text:L.chords,position:L.position||0}]:Array.isArray(L.chords)&&(q=L.chords.map(w=>({text:w,position:L.position||0}))));const F=L.line||"";return q.length?g.jsxs(tu,{$hasChords:!0,children:[g.jsx(ZE,{children:q.map((w,y)=>g.jsx(e0,{style:{left:`${w.position}ch`},children:w.text},y))}),g.jsx(nu,{children:F})]},B):g.jsx(tu,{$hasChords:!1,children:g.jsx(nu,{children:F})},B)};return n?g.jsx(Zc,{ref:P,children:g.jsxs(eu,{$fontSize:i?N:t,children:[g.jsx(YE,{children:g.jsx(XE,{$animationOffset:u,children:a.map((L,B)=>U(L,B))})}),k.length>0&&g.jsxs(t0,{children:[e+1,"/",k.length]})]})}):g.jsx(Zc,{ref:P,children:g.jsx(eu,{$fontSize:i?N:t,children:g.jsxs("div",{style:{textAlign:"center"},children:[g.jsx("p",{children:"No song loaded. Please select a song to display."}),g.jsx("p",{children:"Click the song library button in the header or press 'O' to open the song library."})]})})})},r0=x.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`,i0=x.input`
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
`,s0=x.span`
  min-width: 3rem;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-secondary);
`,Wd=({min:n,max:e,value:t,onChange:r,disabled:i=!1,className:s,ariaLabel:a="Slider",showValue:l=!0,valueFormat:u=(d,f)=>`${d}/${f}`})=>{const[d,f]=D.useState(t),m=D.useRef(!1);D.useEffect(()=>{m.current||f(t)},[t]);const b=R=>{const N=parseInt(R.target.value,10);f(N)},S=()=>{m.current=!0},P=()=>{m.current=!1,d!==t&&(r(d),ce(`${a} set to ${d}`))},k=R=>{(R.key==="ArrowLeft"||R.key==="ArrowRight"||R.key==="ArrowUp"||R.key==="ArrowDown")&&(r(d),ce(`${a} set to ${d}`))};return g.jsxs(r0,{className:s,children:[g.jsx(i0,{type:"range",min:n,max:e,value:d,onChange:b,onMouseDown:S,onMouseUp:P,onTouchStart:S,onTouchEnd:P,onKeyUp:k,disabled:i,"aria-label":a,"aria-valuemin":n,"aria-valuemax":e,"aria-valuenow":d}),l&&g.jsx(s0,{children:u(d,e)})]})},o0=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  position: relative;
  z-index: 10;
`,ru=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,er=x.button`
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
`,a0=x(er)`
  background-color: ${n=>n.$active?"var(--primary-color)":"transparent"};
  color: ${n=>n.$active?"white":"var(--text-primary)"};
  
  &:hover, &:focus {
    background-color: ${n=>n.$active?"var(--primary-hover-color)":"var(--bg-hover)"};
  }
  
  animation: ${n=>n.$active?"pulse 2s infinite":"none"};
`,l0=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 180px;
`,c0=x(Wd)`
  width: 100%;
`,u0=x.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,h0=x.span`
  min-width: 2rem;
  text-align: center;
`,d0=x(Wd)`
  width: 200px;
  margin: 0 0.5rem;
`,f0=({onPrevious:n,onNext:e,hasPrevious:t,hasNext:r,currentLineIndex:i,totalLines:s,onSliderChange:a})=>{const{fontSize:l,setFontSize:u,linesToDisplay:d,setLinesToDisplay:f,autoResize:m,toggleAutoResize:b}=ps(),S=N=>{const U=Math.max(1,Math.min(10,d+N));f(U),ce(`Lines to display changed to ${U}`)},P=()=>{b(),ce(`Auto resize ${m?"disabled":"enabled"}`)},k=()=>{n&&t&&(n(),ce("Previous section"))},R=()=>{e&&r&&(e(),ce("Next section"))};return g.jsxs(o0,{className:"controls-panel",children:[g.jsxs(ru,{children:[g.jsx(er,{onClick:k,disabled:!t,"aria-label":"Previous section",title:"Previous section",className:"previous-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),g.jsx(d0,{min:0,max:Math.max(0,s-1),value:i,onChange:a,disabled:s<=1,ariaLabel:"Song navigation",valueFormat:(N,U)=>`${N+1}/${U+1}`}),g.jsx(er,{onClick:R,disabled:!r,"aria-label":"Next section",title:"Next section",className:"next-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})})]}),g.jsxs(ru,{children:[g.jsx(l0,{className:"font-size-controls",children:g.jsx(c0,{min:12,max:72,value:l,onChange:N=>{u(N),ce(`Font size changed to ${N} pixels`)},disabled:m,ariaLabel:"Font size",valueFormat:N=>`${N}px`})}),g.jsxs(u0,{className:"lines-controls",children:[g.jsx(er,{onClick:()=>S(-1),"aria-label":"Decrease lines to display",title:"Decrease lines to display",disabled:d<=1,children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M19 13H5v-2h14v2z"})})}),g.jsx(h0,{children:d}),g.jsx(er,{onClick:()=>S(1),"aria-label":"Increase lines to display",title:"Increase lines to display",disabled:d>=10,children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})})})]}),g.jsx(a0,{onClick:P,$active:m,"aria-label":`${m?"Disable":"Enable"} auto resize`,title:`${m?"Disable":"Enable"} auto resize`,className:"auto-resize-button",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"})})})]})]})},p0=x.div`
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
`,g0=x.div`
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,m0=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
`,y0=x.h2`
  margin: 0;
  font-size: 1.25rem;
`,_0=x.button`
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
`,v0=x.div`
  padding: 1rem;
`,oi=x.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ai=x.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
`,li=x.p`
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
`,Xs=x.label`
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
`,iu=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,su=x.input`
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
`,ou=x.span`
  min-width: 40px;
  text-align: right;
`,w0=x.div`
  margin-top: 1rem;
`,E0=x.table`
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
`,je=x.kbd`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  font-family: monospace;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`,b0=({isOpen:n,onClose:e})=>{const{fontSize:t,setFontSize:r,linesToDisplay:i,setLinesToDisplay:s,autoResize:a,toggleAutoResize:l,enableAnimations:u,toggleAnimations:d}=ps(),{isDarkTheme:f,toggleTheme:m}=Hd();if(!n)return null;const b=N=>{const U=parseInt(N.target.value,10);r(U),ce(`Font size set to ${U} pixels`)},S=N=>{const U=parseInt(N.target.value,10);s(U),ce(`Lines to display set to ${U}`)},P=()=>{l(),ce(`Auto resize ${a?"disabled":"enabled"}`)},k=()=>{m(),ce(`${f?"Light":"Dark"} theme enabled`)},R=()=>{d(),ce(`Animations ${u?"disabled":"enabled"}`)};return g.jsx(p0,{onClick:e,children:g.jsxs(g0,{onClick:N=>N.stopPropagation(),role:"dialog","aria-labelledby":"accessibility-title","aria-modal":"true",children:[g.jsxs(m0,{children:[g.jsx(y0,{id:"accessibility-title",children:"Accessibility Settings"}),g.jsx(_0,{onClick:e,"aria-label":"Close accessibility settings",children:"×"})]}),g.jsxs(v0,{children:[g.jsxs(oi,{children:[g.jsx(ai,{children:"Display Settings"}),g.jsx(li,{children:"Adjust how the leadsheet is displayed"}),g.jsxs(iu,{children:[g.jsx("label",{htmlFor:"font-size",children:"Font Size:"}),g.jsx(su,{type:"range",id:"font-size",min:"12",max:"72",value:t,onChange:b,disabled:a}),g.jsxs(ou,{children:[t,"px"]})]}),g.jsxs(iu,{children:[g.jsx("label",{htmlFor:"lines-display",children:"Lines to Display:"}),g.jsx(su,{type:"range",id:"lines-display",min:"1",max:"10",value:i,onChange:S}),g.jsx(ou,{children:i})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[g.jsxs(Xs,{children:[g.jsx("input",{type:"checkbox",checked:a,onChange:P,id:"auto-resize"}),g.jsx("span",{})]}),g.jsx("label",{htmlFor:"auto-resize",children:"Auto-resize text to fit screen"})]})]}),g.jsxs(oi,{children:[g.jsx(ai,{children:"Theme"}),g.jsx(li,{children:"Choose between light and dark theme"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[g.jsxs(Xs,{children:[g.jsx("input",{type:"checkbox",checked:f,onChange:k,id:"dark-theme"}),g.jsx("span",{})]}),g.jsx("label",{htmlFor:"dark-theme",children:"Dark Theme"})]})]}),g.jsxs(oi,{children:[g.jsx(ai,{children:"Scroll Animations"}),g.jsx(li,{children:"Enable smooth scrolling animations when navigating through songs. Disabling may improve performance and reduce motion for users sensitive to animations."}),g.jsxs(Xs,{children:[g.jsx("input",{type:"checkbox",checked:u,onChange:R,"aria-label":"Toggle animations"}),g.jsx("span",{})]})]}),g.jsxs(oi,{children:[g.jsx(ai,{children:"Keyboard Shortcuts"}),g.jsx(li,{children:"Use these shortcuts for quick navigation"}),g.jsx(w0,{children:g.jsxs(E0,{children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Action"}),g.jsx("th",{children:"Shortcut"})]})}),g.jsxs("tbody",{children:[g.jsxs("tr",{children:[g.jsx("td",{children:"Next Section"}),g.jsxs("td",{children:[g.jsx(je,{children:"→"})," or ",g.jsx(je,{children:"Space"})]})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Previous Section"}),g.jsx("td",{children:g.jsx(je,{children:"←"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Increase Font Size"}),g.jsxs("td",{children:[g.jsx(je,{children:"+"})," or ",g.jsx(je,{children:"="})]})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Decrease Font Size"}),g.jsx("td",{children:g.jsx(je,{children:"-"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Toggle Auto-resize"}),g.jsx("td",{children:g.jsx(je,{children:"A"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Toggle Dark Mode"}),g.jsx("td",{children:g.jsx(je,{children:"D"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Open Song Library"}),g.jsx("td",{children:g.jsx(je,{children:"O"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Open Song Manager"}),g.jsx("td",{children:g.jsx(je,{children:"L"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:"Start App Tour"}),g.jsx("td",{children:g.jsx(je,{children:"H"})})]})]})]})})]})]})]})})},T0=x.div`
  padding: 1rem;
  max-height: 70vh;
  overflow-y: auto;
`,I0=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,S0=x.div`
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
`,A0=x.div`
  flex: 1;
`,x0=x.h4`
  margin: 0;
  font-size: 1rem;
`,R0=x.p`
  margin: 0.25rem 0 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
`,C0=x.span`
  padding: 0.25rem 0.5rem;
  background: var(--primary);
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
`;function P0({onClose:n}){const{songs:e,userSongs:t,playSong:r}=Yt(),{user:i}=fs(),s=new Set(t.map(l=>l.id)),a=async l=>{await r(l.id),n()};return g.jsx(T0,{children:g.jsx(I0,{children:e.filter(l=>(l==null?void 0:l.title)&&(l==null?void 0:l.artist)).map(l=>g.jsxs(S0,{onClick:()=>a(l),children:[g.jsxs(A0,{children:[g.jsx(x0,{children:l.title}),g.jsx(R0,{children:l.artist})]}),i&&s.has(l.id)&&g.jsx(C0,{children:"In Collection"})]},l.id))})})}const Zs=x.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: auto;
`,k0=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  overflow-y: auto;
`,D0=x.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 12px;
  background: ${n=>n.$isSelected?"var(--bg-hover)":"var(--bg-secondary)"};
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

  ${n=>n.$isSelected&&`
    border-color: var(--primary-color);
    border-left: 4px solid var(--primary-color);
  `}
`,V0=x.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,N0=x.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-primary);
`,O0=x.p`
  margin: 0;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-secondary);
`,L0=x.div`
  font-size: 0.8rem;
  color: var(--text-tertiary);
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,F0=x.span`
  background: var(--bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
`,M0=x.div`
  display: flex;
  gap: 8px;
  padding-left: 8px;
  border-left: 1px solid var(--border-color);
`,eo=x.button`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${n=>n.$variant==="primary"?"var(--primary-color)":n.$variant==="danger"?"var(--error-color)":"transparent"};
  color: ${n=>n.$variant?"white":"var(--text-secondary)"};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${n=>n.$variant==="primary"?"var(--primary-color-dark)":n.$variant==="danger"?"var(--error-color-dark)":"var(--bg-hover)"};
    color: ${n=>n.$variant?"white":"var(--text-primary)"};
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,Ia=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
`,U0=x(Ia)`
  color: var(--error-color);
`,j0=x(Ia)`
  color: var(--text-secondary);
`,$0=x.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${n=>n.$variant==="danger"?"#ff4444":n.$variant==="primary"?"#007AFF":"#f0f0f0"};
  color: ${n=>n.$variant==="danger"||n.$variant==="primary"?"white":"black"};
  
  &:hover {
    opacity: 0.9;
  }
`,B0=x.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1rem;
  align-items: center;
`,au=x.button`
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${n=>n.$active?"var(--primary)":"transparent"};
  color: ${n=>n.$active?"var(--primary)":"var(--text-primary)"};
  font-weight: ${n=>n.$active?"600":"400"};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: var(--primary);
  }
  
  &:disabled {
    color: var(--text-disabled);
    cursor: not-allowed;
  }
`,z0=x.button`
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
`,q0=()=>g.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),g.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),G0=({onSongLoad:n,onClose:e,searchTerm:t=""})=>{const{songs:r,userSongs:i,addSongToCollection:s,removeSongFromCollection:a,playSong:l,refreshSongs:u,deleteSong:d,isLoading:f,error:m}=Yt(),{user:b}=fs(),[S,P]=D.useState(null),[k,R]=D.useState(!1),[N,U]=D.useState(!1),[L,B]=du.useState("all"),q=L==="all"?r:i;new Set(i.map(_=>_.id));const F=_=>{P(_.id),ce(`Selected song: ${_.title} by ${_.artist}`)},w=async _=>{await n(_.id),e&&e()},y=(_,fe)=>{fe.stopPropagation(),P(_.id),U(!1),R(!0)},v=async(_,fe)=>{if(fe.stopPropagation(),window.confirm(`Are you sure you want to delete "${_.title}" by ${_.artist}?`))try{await d(_.id),ce(`Song ${_.title} deleted successfully`)}catch(Le){console.error("Error deleting song:",Le),Le instanceof Error&&Le.message.includes("preview mode")?console.warn("Song deletion disabled in preview mode"):ce(`Error deleting song: ${Le instanceof Error?Le.message:"Unknown error"}`)}},E=async()=>{R(!1),U(!1),await u(),ce("Song updated successfully")},T=()=>{P(null),U(!0),R(!0)},I=q.filter(_=>!(_!=null&&_.title)||!(_!=null&&_.artist)?!1:_.title.toLowerCase().includes(t.toLowerCase())||_.artist.toLowerCase().includes(t.toLowerCase()));return f&&!I.length?g.jsx(Zs,{children:g.jsx(Ia,{children:g.jsx("div",{children:"Loading songs..."})})}):m&&I.length===0?g.jsx(Zs,{children:g.jsxs(U0,{children:[g.jsx("div",{children:m.toString()}),g.jsx($0,{onClick:u,$variant:"primary",children:"Retry"})]})}):g.jsxs(Zs,{children:[g.jsxs(B0,{children:[g.jsx(au,{$active:L==="all",onClick:()=>B("all"),"aria-selected":L==="all",role:"tab",children:"All Songs"}),g.jsx(au,{$active:L==="collection",onClick:()=>B("collection"),"aria-selected":L==="collection",role:"tab",disabled:!b,children:"My Collection"}),g.jsxs(z0,{onClick:T,children:[g.jsx(q0,{})," New Song"]})]}),I.length===0?g.jsxs(j0,{children:[g.jsx("div",{children:"No songs found"}),g.jsx("div",{children:t?"Try a different search term":"Add some songs to get started"})]}):g.jsxs(g.Fragment,{children:[g.jsx(k0,{children:I.map(_=>g.jsxs(D0,{$isSelected:S===_.id,onClick:()=>F(_),children:[g.jsxs(V0,{children:[g.jsx(N0,{children:_.title}),g.jsx(O0,{children:_.artist}),_.tags&&_.tags.length>0&&g.jsx(L0,{children:_.tags.map((fe,Le)=>g.jsx(F0,{children:fe},Le))})]}),g.jsxs(M0,{children:[g.jsx(eo,{onClick:fe=>y(_,fe),title:"Edit song",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),g.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),g.jsx(eo,{$variant:"danger",onClick:fe=>v(_,fe),title:"Delete song",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M3 6h18"}),g.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),g.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),g.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),g.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]})}),g.jsx(eo,{$variant:"primary",onClick:()=>w(_),title:"Load song",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M5 12h14"}),g.jsx("path",{d:"m12 5 7 7-7 7"})]})})]})]},_.id))}),g.jsx(qd,{isOpen:k,onClose:E,songId:S,isNewSong:N})]})]})},H0=x.div`
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
`,K0=x.div`
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
`,W0=x.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  padding: 0.25rem 0.5rem;
  gap: 0.25rem;
  background: var(--bg-secondary);
  align-items: center;
`,lu=x.button`
  padding: 0.4rem 0.75rem;
  border: none;
  background: ${n=>n.$active?"var(--bg-primary)":"none"};
  color: ${n=>n.$active?"var(--text-color)":"var(--text-secondary)"};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
  border: 1px solid ${n=>n.$active?"var(--border-color)":"transparent"};

  &:hover {
    background: var(--bg-primary);
    color: var(--text-color);
  }
`,Q0=x.input`
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
`,cu=x.button`
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
`,J0=x.button`
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
`,Y0=x.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
`,X0=({isOpen:n,onClose:e,onSongLoad:t})=>{const{isLoading:r,error:i,refreshSongs:s,checkDatabaseConnection:a}=Yt(),[l,u]=D.useState("all"),[d,f]=D.useState(""),[m,b]=D.useState(!1),S=()=>{b(!0)},P=async()=>{b(!1),await s(),ce("Song created successfully")};return n?g.jsx(H0,{onClick:e,children:g.jsxs(K0,{onClick:k=>k.stopPropagation(),children:[g.jsxs(W0,{children:[g.jsx(lu,{$active:l==="all",onClick:()=>u("all"),children:"All Songs"}),g.jsx(lu,{$active:l==="search",onClick:()=>u("search"),children:"Search"}),l==="search"&&g.jsx(Q0,{type:"text",placeholder:"Search songs...",value:d,onChange:k=>f(k.target.value),autoFocus:!0}),g.jsx("div",{style:{flex:1}}),g.jsx(cu,{onClick:S,children:"Add"}),g.jsx(cu,{onClick:s,children:"Refresh"}),g.jsx(J0,{onClick:e,"aria-label":"Close",children:"×"})]}),g.jsx(Y0,{children:g.jsx(G0,{onSongLoad:t,onClose:e,searchTerm:l==="search"?d:""})}),g.jsx(qd,{isOpen:m,onClose:P,isNewSong:!0})]})}):null},Z0=({tourId:n,autoStart:e=!0})=>{const[t,r]=D.useState(!1),[i,s]=D.useState(!1);return D.useEffect(()=>{const m=JSON.parse(localStorage.getItem("completedTours")||"{}")[n]===!0;s(m),e&&!m&&r(!0)},[n,e]),{isTourOpen:t,hasCompletedTour:i,startTour:()=>{r(!0)},closeTour:()=>{r(!1)},completeTour:()=>{r(!1),s(!0);const f=JSON.parse(localStorage.getItem("completedTours")||"{}");f[n]=!0,localStorage.setItem("completedTours",JSON.stringify(f))},resetTour:()=>{s(!1);const f=JSON.parse(localStorage.getItem("completedTours")||"{}");delete f[n],localStorage.setItem("completedTours",JSON.stringify(f))}}},eb=n=>{switch(n){case"primary":return $e`
        background-color: var(--primary-color);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--primary-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
        }
      `;case"secondary":return $e`
        background-color: var(--bg-secondary);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
        &:hover:not(:disabled) {
          background-color: var(--bg-hover);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(221, 221, 221, 0.3);
        }
      `;case"success":return $e`
        background-color: var(--success-color);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--success-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.3);
        }
      `;case"danger":return $e`
        background-color: var(--danger-color);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--danger-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.3);
        }
      `;case"warning":return $e`
        background-color: var(--warning-color);
        color: #212529;
        &:hover:not(:disabled) {
          background-color: var(--warning-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.3);
        }
      `;case"text":return $e`
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
      `;default:return""}},tb=n=>{switch(n){case"small":return $e`
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      `;case"medium":return $e`
        padding: 0.5rem 1rem;
        font-size: 1rem;
      `;case"large":return $e`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
      `;default:return""}},nb=x.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  
  ${n=>eb(n.variant||"primary")}
  ${n=>tb(n.size||"medium")}
  
  ${n=>n.fullWidth&&$e`
    width: 100%;
  `}
  
  ${n=>n.isActive&&$e`
    background-color: var(--primary-hover-color);
    border-color: var(--primary-hover-color);
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    margin-right: ${n=>n.children?"0.5rem":"0"};
  }
`,yi=({children:n,variant:e="primary",size:t="medium",fullWidth:r=!1,isActive:i=!1,...s})=>g.jsx(nb,{variant:e,size:t,fullWidth:r,isActive:i,...s,children:n});x.div`
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
`;x.div`
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
`;const rb=fu`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;x.div`
  display: inline-block;
  position: relative;
  width: ${n=>n.size}px;
  height: ${n=>n.size}px;
`;x.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${n=>n.size}px;
  height: ${n=>n.size}px;
  border: ${n=>Math.max(2,n.size/10)}px solid;
  border-radius: 50%;
  border-color: ${n=>n.color} transparent transparent transparent;
  animation: ${rb} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;x.div`
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
`;x.div`
  background-color: var(--bg-primary);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  width: ${n=>{switch(n.size){case"small":return"400px";case"medium":return"600px";case"large":return"800px";case"full":return"90vw";default:return"600px"}}};
  max-width: 90vw;
  animation: fadeIn 0.3s ease-out;
`;x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid var(--border-color);
`;x.h2`
  margin: 0;
  font-size: 1.25rem;
  color: var(--text-primary);
`;x.button`
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
`;x.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;
`;x.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid var(--border-color);
`;x.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: ${n=>n.fullWidth?"100%":"auto"};
`;x.label`
  font-size: 0.875rem;
  margin-bottom: 6px;
  color: var(--text-primary);
  font-weight: 500;
`;x.input`
  padding: 10px 12px;
  border: 1px solid ${n=>n.hasError?"var(--error-color)":"var(--border-color)"};
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color 0.2s, box-shadow 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${n=>n.hasError?"var(--error-color)":"var(--primary-color)"};
    box-shadow: 0 0 0 2px ${n=>n.hasError?"rgba(211, 47, 47, 0.2)":"rgba(74, 144, 226, 0.2)"};
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
`;x.span`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${n=>n.isError?"var(--error-color)":"var(--text-secondary)"};
`;x.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: ${n=>n.fullWidth?"100%":"auto"};
`;x.label`
  font-size: 0.875rem;
  margin-bottom: 6px;
  color: var(--text-primary);
  font-weight: 500;
`;x.textarea`
  padding: 10px 12px;
  border: 1px solid ${n=>n.hasError?"var(--error-color)":"var(--border-color)"};
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color 0.2s, box-shadow 0.2s;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${n=>n.hasError?"var(--error-color)":"var(--primary-color)"};
    box-shadow: 0 0 0 2px ${n=>n.hasError?"rgba(211, 47, 47, 0.2)":"rgba(74, 144, 226, 0.2)"};
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
`;x.span`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${n=>n.isError?"var(--error-color)":"var(--text-secondary)"};
`;const Qd=fu`
  from { opacity: 0; }
  to { opacity: 1; }
`,ib=x.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  pointer-events: none;
  animation: ${Qd} 0.3s ease-out;
`,sb=x.div`
  position: fixed;
  top: ${n=>n.position.top};
  left: ${n=>n.position.left};
  transform: ${n=>n.position.transform};
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
  animation: ${Qd} 0.3s ease-out;
`,ob=x.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: var(--bg-primary);
  transform: rotate(45deg);
  
  ${n=>{switch(n.position){case"top":return`
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
`,ab=x.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: var(--text-primary);
`,lb=x.p`
  margin: 0 0 16px 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
`,cb=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ub=x.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`,hb=x.div`
  display: flex;
  gap: 8px;
`,db=x.div`
  position: absolute;
  top: ${n=>n.position.top}px;
  left: ${n=>n.position.left}px;
  width: ${n=>n.position.width}px;
  height: ${n=>n.position.height}px;
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
  z-index: 999;
  pointer-events: none;
`,fb=x(yi)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1002;
  pointer-events: auto;
`,pb=({steps:n,isOpen:e,onClose:t,onComplete:r})=>{const[i,s]=D.useState(0),[a,l]=D.useState({top:"50%",left:"50%",transform:"translate(-50%, -50%)"}),[u,d]=D.useState({top:0,left:0,width:0,height:0}),[f,m]=D.useState("bottom");if(D.useEffect(()=>{if(!e)return;const R=()=>{const N=n[i];if(!N)return;const U=document.querySelector(N.target);if(!U)return;const L=U.getBoundingClientRect(),B=N.position||"bottom";d({top:L.top,left:L.left,width:L.width,height:L.height});let q="0px",F="0px",w="none";const y=window.innerWidth,v=window.innerHeight,E=300,T=200;switch(B){case"top":q=`${Math.max(T/2+10,L.top-20)}px`,F=`${L.left+L.width/2}px`,w="translate(-50%, -100%)";break;case"right":q=`${L.top+L.height/2}px`,F=`${Math.min(y-E-20,L.right+20)}px`,w="translateY(-50%)";break;case"bottom":q=`${Math.min(v-T-20,L.bottom+20)}px`,F=`${L.left+L.width/2}px`,w="translateX(-50%)";break;case"left":q=`${L.top+L.height/2}px`,F=`${Math.max(E/2+10,L.left-20)}px`,w="translate(-100%, -50%)";break}const I=parseFloat(F);I-E/2<20?F=`${E/2+20}px`:I+E/2>y-20&&(F=`${y-E/2-20}px`);const _=parseFloat(q);_-T/2<20?q=`${T/2+20}px`:_+T/2>v-20&&(q=`${v-T/2-20}px`),l({top:q,left:F,transform:w}),m(B)};return R(),window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R)}},[e,i,n]),!e||!n.length)return null;const b=()=>{i<n.length-1?s(i+1):r()},S=()=>{i>0&&s(i-1)},P=()=>{r()},k=n[i];return g.jsxs(g.Fragment,{children:[g.jsx(ib,{}),g.jsx(db,{position:u}),g.jsxs(sb,{position:a,children:[g.jsx(ob,{position:f}),g.jsx(ab,{children:k.title}),g.jsx(lb,{children:k.content}),g.jsxs(cb,{children:[g.jsxs(ub,{children:[i+1," of ",n.length]}),g.jsxs(hb,{children:[i>0&&g.jsx(yi,{variant:"secondary",size:"small",onClick:S,children:"Previous"}),i<n.length-1?g.jsx(yi,{variant:"primary",size:"small",onClick:b,children:"Next"}):g.jsx(yi,{variant:"primary",size:"small",onClick:b,children:"Finish"})]})]})]}),g.jsx(fb,{variant:"secondary",size:"small",onClick:P,children:"Skip Tour"})]})},gb=Lf`
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
`;let tr=!1;try{tr=localStorage.getItem("devToolsEnabled")==="true"}catch{console.warn("Failed to access localStorage for dev tools state")}const mb=()=>{tr=!tr;try{localStorage.setItem("devToolsEnabled",tr.toString()),console.log(`Dev tools ${tr?"enabled":"disabled"}`)}catch{console.warn("Failed to save dev tools state to localStorage")}},uu=["d","e","v"];let Jn=[];const yb=n=>(Jn.push(n.toLowerCase()),Jn.length>uu.length&&Jn.shift(),Jn.join("")===uu.join("")?(mb(),Jn=[],!0):!1),_b=x.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`,vb=x.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,wb=[{target:"header",title:"Welcome to BlindTab!",content:"BlindTab helps you view and navigate song leadsheets with ease. This quick tour will show you the main features.",position:"bottom"},{target:".song-library-button",title:"Song Library",content:'Click here or press "O" to open the song library where you can browse, search, and load songs. Each song has a play button to load it.',position:"bottom"},{target:".accessibility-button",title:"Accessibility Options",content:"Access settings for font size, display preferences, and other accessibility features here.",position:"bottom"},{target:".theme-toggle",title:"Theme Toggle",content:'Switch between light and dark themes for comfortable viewing in any environment. You can also press "D" to toggle.',position:"left"},{target:"main",title:"Leadsheet Display",content:"Your song lyrics and chords will appear here. The display automatically adjusts to show the current section of the song.",position:"top"},{target:".controls-panel",title:"Navigation Controls",content:"Use these buttons to navigate through the song. You can also use arrow keys or space bar to move forward.",position:"top"},{target:".auto-resize-button",title:"Auto-Resize",content:'Toggle auto-resize to automatically adjust the font size to fit the screen. You can also press "A" to toggle.',position:"top"},{target:".help-button",title:"Help Button",content:"Click this button anytime to restart this tour and learn about BlindTab features.",position:"left"}],Eb=()=>{const[n,e]=D.useState(!1),[t,r]=D.useState(!1),[i,s]=D.useState(!1),[a,l]=D.useState(0),{songs:u,playSong:d,currentSong:f}=Yt(),{isTourOpen:m,startTour:b,closeTour:S,completeTour:P}=Z0({tourId:"blindtab-main-tour",autoStart:!0}),k=(f==null?void 0:f.lyrics)||[];D.useEffect(()=>{const L=B=>{yb(B.key)};return window.addEventListener("keydown",L),()=>{window.removeEventListener("keydown",L)}},[]),NE({arrowright:()=>N(),space:()=>N(),arrowleft:()=>R(),"+":()=>{},"=":()=>{},"-":()=>{},a:()=>{},d:()=>{},o:()=>s(!0),l:()=>r(!0),h:()=>b()},{preventDefaultKeys:["space","arrowleft","arrowright"]});const R=()=>{a>0&&l(a-1)},N=()=>{k.length&&a<k.length-1&&l(a+1)},U=async L=>{try{await d(L),l(0),f&&hu(`Loaded song: ${f.title} by ${f.artist}`)}catch(B){console.error(`Error loading song ${L}:`,B),hu(`Error loading song. ${B.message||"Unknown error"}`)}};return g.jsxs(g.Fragment,{children:[g.jsx(gb,{}),g.jsxs(_b,{children:[g.jsx(QE,{onOpenAccessibilityMenu:()=>e(!0),onOpenSongLibrary:()=>s(!0),onStartTour:b}),g.jsx(vb,{children:g.jsx(n0,{songData:f,currentLineIndex:a})}),g.jsx(f0,{onPrevious:R,onNext:N,hasPrevious:a>0,hasNext:k.length?a<k.length-1:!1,currentLineIndex:a,totalLines:k.length||0,onSliderChange:l})]}),g.jsx(b0,{isOpen:n,onClose:()=>e(!1)}),g.jsx(P0,{isOpen:t,onClose:()=>r(!1),onSongSelect:U}),g.jsx(X0,{isOpen:i,onClose:()=>s(!1),onSongLoad:U}),g.jsx(pb,{steps:wb,isOpen:m,onClose:S,onComplete:P})]})},hu=n=>{const e=document.createElement("div");e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),e.setAttribute("class","sr-only"),e.textContent=n,document.body.appendChild(e),setTimeout(()=>document.body.removeChild(e),1e3)},bb=x.div`
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
  display: ${n=>n.$visible?"block":"none"};
  border-left: 4px solid #ff9800;
`,Tb=x.div`
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ib=x.div`
  font-size: 14px;
  line-height: 1.4;
`,Sb=x.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  margin-left: 8px;
`,Ab=()=>{const[n,e]=D.useState(!0);let t=!1;try{t=Yt().isPreviewMode}catch{return console.warn("PreviewModeNotice: SongContext not available"),null}return t?g.jsxs(bb,{$visible:n,children:[g.jsxs(Tb,{children:["Preview Mode",g.jsx(Sb,{onClick:()=>e(!1),children:"×"})]}),g.jsx(Ib,{children:"You're viewing a preview deployment. Some features like saving songs and user authentication may be limited."})]}):null},Li=async()=>{var e,t,r,i,s;console.group("🔍 Firebase Debug Report"),console.log("Environment Information:"),console.log("- Current URL:",window.location.href),console.log("- Hostname:",window.location.hostname),console.log("- Protocol:",window.location.protocol),console.log("- User Agent:",navigator.userAgent),console.log("- Preview Deployment:",Vr?"Yes":"No"),console.log("- Development Mode:",De?"Yes":"No"),console.log("- Firebase Config:",{authDomain:"blindtab-db.firebaseapp.com",projectId:"blindtab-db"}),console.log("Auth State:"),console.log("- Current User:",lr.currentUser?"Signed In":"Not Signed In"),console.log("Checking if Firestore database exists...");let n=!1;if(De)try{console.log("Using Firebase SDK directly (development mode)");const a=dn(St(pe,"firebase_test"),fn(1));await At(a),n=!0,console.log("✅ Firestore database exists and is accessible")}catch(a){a.code==="permission-denied"?(console.log("✅ Firestore database exists but permission denied for test collection"),n=!0):a.code==="not-found"||(e=a.message)!=null&&e.includes("not found")?(console.error("❌ Firestore database not found"),n=!1):(console.error("❌ Error checking database:",a),n=!1)}else n=await se.testConnection();n||(console.error("❌ Firestore database does not exist or is not accessible!"),console.log("🔧 You need to create a Firestore database in the Firebase Console:"),console.log("   1. Go to https://console.firebase.google.com/project/blindtab-db/firestore"),console.log('   2. Click "Create database"'),console.log("   3. Choose either production or test mode"),console.log("   4. Select a location close to your users"),console.log("   5. Wait for the database to be provisioned (this can take a few minutes)"),console.log('   6. Create a collection called "songs" to store your songs')),console.log("Testing Firestore Connection...");try{const a=St(pe,Z.SONGS),l=dn(a,fn(1)),u=performance.now(),d=await At(l),f=performance.now();if(console.log("✅ Firestore Connection Successful:"),console.log(`- Query Time: ${(f-u).toFixed(2)}ms`),console.log(`- Documents Found: ${d.size}`),d.size>0){const m=d.docs[0];console.log("- Sample Document:",{id:m.id,exists:m.exists(),data:m.data()})}}catch(a){if(console.error("❌ Firestore Connection Failed:",a),console.log("- Error Code:",a.code),console.log("- Error Message:",a.message),a.code==="permission-denied")console.log("🔧 Possible Fix: This domain may not be authorized in Firebase."),console.log("   Add it in Firebase Console -> Authentication -> Sign-in method -> Authorized domains");else if(a.code==="unavailable"||(t=a.message)!=null&&t.includes("network"))console.log("🔧 Possible Fix: Network connectivity issue or Firebase service disruption."),console.log("   Check Firebase Status: https://status.firebase.google.com/");else if(a.code==="resource-exhausted")console.log("🔧 Possible Fix: Firebase quota exceeded. Check your billing plan.");else if(a.code==="failed-precondition")console.log("🔧 Possible Fix: Firestore indexes may be missing."),console.log("   Check Firebase Console -> Firestore -> Indexes");else if((r=a.message)!=null&&r.includes("400")||(i=a.message)!=null&&i.includes("Bad Request")||(s=a.message)!=null&&s.includes("jd")){console.log("🔧 Possible Fix: WebChannel connection issue (Bad Request)."),console.log("   This is a known issue with Firebase WebChannel connections."),console.log("Attempting to fix WebChannel connection issue...");try{const l=Ou(),u=sa(l,{experimentalForceLongPolling:!0,ssl:!0,ignoreUndefinedProperties:!0});u._settings={...u._settings,host:"firestore.googleapis.com",ssl:!0};const d=St(u,Z.SONGS),f=dn(d,fn(1)),m=performance.now(),b=await At(f),S=performance.now();console.log("✅ Connection Fixed with New Settings:"),console.log(`- Query Time: ${(S-m).toFixed(2)}ms`),console.log(`- Documents Found: ${b.size}`),console.log("To fix this issue permanently, update your Firebase configuration:"),console.log(`
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
        `)}catch(l){console.error("Failed to fix WebChannel connection issue:",l)}}}if(console.log("Network Diagnostics:"),console.log("- Online Status:",navigator.onLine?"Online":"Offline"),De)console.log("Skipping CORS test in development mode");else{console.log("Testing CORS Configuration...");try{const a=await fetch("https://blindtab-db.firebaseio.com/.json?shallow=true");console.log("- CORS Test Status:",a.status),console.log("- CORS Test OK:",a.ok)}catch(a){console.error("- CORS Test Failed:",a)}}return console.groupEnd(),"Firebase debug complete. Check console for detailed report."},xb=()=>{window.runFirebaseDebug=Li,console.log("Firebase debug utility added to window. Run window.runFirebaseDebug() in console.")},Rb=async()=>{var n;try{console.group("🔧 Initializing Firestore Database"),console.log("Testing database connection...");let e=!1;if(De)try{console.log("Using Firebase SDK directly (development mode)");const r=dn(St(pe,"firebase_test"),fn(1));await At(r),e=!0,console.log("✅ Firestore database exists and is accessible")}catch(r){r.code==="permission-denied"?(console.log("✅ Firestore database exists but permission denied for test collection"),e=!0):r.code==="not-found"||(n=r.message)!=null&&n.includes("not found")?(console.error("❌ Firestore database not found"),e=!1):(console.error("❌ Error checking database:",r),e=!1)}else e=await se.testConnection();if(!e)return console.error("❌ Firestore database not found or not accessible"),console.log("Please create a Firestore database in the Firebase Console first."),console.groupEnd(),!1;console.log("Checking if songs collection already has data...");let t=!1;try{if(De){const r=dn(St(pe,Z.SONGS),fn(1));t=!(await At(r)).empty}else{const r=await se.list(Z.SONGS,1);t=r&&r.length>0}if(t)return console.log("✅ Songs collection already has data. Skipping initialization."),console.groupEnd(),!0}catch{console.log("Songs collection does not exist yet. Will create it.")}console.log("Adding sample songs to Firestore...");for(const r of Ta)if(console.log(`Adding song: ${r.title}`),(!r.lyrics||!Array.isArray(r.lyrics))&&(console.warn(`Song ${r.title} is missing the lyrics field. Adding empty lyrics.`),r.lyrics=[]),De){const{id:i,...s}=r;await ss(Be(pe,Z.SONGS,i),s)}else await se.set(Z.SONGS,r.id,r);return console.log("✅ Successfully added sample songs to Firestore"),console.groupEnd(),!0}catch(e){return console.error("❌ Error initializing Firestore:",e),console.groupEnd(),!1}},Cb=()=>{window.initializeFirestore=Rb,console.log("Firestore initializer added to window. Run window.initializeFirestore() in console to add sample data.")};function Pb(){return D.useEffect(()=>{hE&&(window.runFirebaseDebug=Li,xb(),console.log("🔧 Firebase debug utility added. Run window.runFirebaseDebug() in console to diagnose issues."))},[]),D.useEffect(()=>{De&&(console.log("Running Firebase debug in development mode..."),Li().then(n=>{console.log(n)}),Cb(),console.log("🔧 Firestore initializer added. Run window.initializeFirestore() in console to add sample data."))},[]),g.jsx(Pp,{children:g.jsxs(xp,{children:[g.jsx(Su,{path:"/",element:g.jsx(DE,{children:g.jsx(VE,{children:g.jsx(vE,{children:g.jsxs(SE,{children:[g.jsx(Eb,{}),g.jsx(Ab,{})]})})})})}),!1]})})}window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"&&(console.log("🔧 Adding Firebase debug utility to window object"),window.runFirebaseDebug=Li);to.createRoot(document.getElementById("root")).render(g.jsx(du.StrictMode,{children:g.jsx(Pb,{})}));
