(()=>{"use strict";var e={119:(e,t,o)=>{o(5363),o(71);var r=o(8880),n=o(7651),a=o(3673);function i(e,t,o,r,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});s.render=i;const l=s;var c=o(3346),u=o(7083),p=o(9582);const d=[{path:"/",component:()=>Promise.all([o.e(736),o.e(198)]).then(o.bind(o,8198)),children:[{path:"",name:"home",component:()=>Promise.all([o.e(736),o.e(133)]).then(o.bind(o,3133))}]},{path:"/pokemon",component:()=>Promise.all([o.e(736),o.e(179)]).then(o.bind(o,2179)),children:[{path:":id",name:"pokemon-details",component:()=>Promise.all([o.e(736),o.e(858)]).then(o.bind(o,7858))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(434)]).then(o.bind(o,6434))}],f=d,m=(0,u.BC)((()=>{const e=p.r5,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t}));async function h(e,t){const r="function"===typeof c["default"]?await(0,c["default"])({}):c["default"],{storeKey:a}=await Promise.resolve().then(o.bind(o,3346)),i="function"===typeof m?await m({store:r}):m;r.$router=i;const s=e(l);return s.use(n.Z,t),{app:s,store:r,storeKey:a,router:i}}const v={config:{}},b="";async function g({app:e,router:t,store:o,storeKey:r},n){let a=!1;const i=e=>{a=!0;const o=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=o},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<n.length;c++)try{await n[c]({app:e,router:t,store:o,ssrContext:null,redirect:i,urlPath:s,publicPath:b})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&(e.use(t),e.use(o,r),e.mount("#q-app"))}h(r.ri,v).then((e=>Promise.all([Promise.resolve().then(o.bind(o,4112)),Promise.resolve().then(o.bind(o,5474))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));g(e,o)}))))},5474:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s,api:()=>i});var r=o(7083),n=o(52),a=o.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},4112:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l,i18n:()=>s});var r=o(7083),n=o(5948);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},s=(0,n.o)({locale:"en-US",messages:i}),l=(0,r.xr)((({app:e})=>{e.use(s)}))},3346:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var r={};o.r(r),o.d(r,{getPokemonDetails:()=>p,getPokemonList:()=>c,getSearchText:()=>u});var n={};o.r(n),o.d(n,{setPokemonDetails:()=>m,setPokemonList:()=>d,setSearchText:()=>f});var a={};o.r(a),o.d(a,{fetchPokemonDetails:()=>v,fetchPokemonList:()=>h});var i=o(7083),s=o(3617);const l=()=>({searchText:"",pokemonList:[],pokemonDetails:!1});function c(e){return e.pokemonList}function u(e){return e.searchText}function p(e){return e.pokemonDetails}function d(e,t){e.pokemonList=t}function f(e,t){e.searchText=t}function m(e,t){e.pokemonDetails=t}o(71);async function h(e,{nextUrl:t,search:o}){let r=null;r=o?"https://pokeapi.co/api/v2/pokemon?limit=1118":t||"https://pokeapi.co/api/v2/pokemon?limit=48";const n=await fetch(r),a=await n.json();o&&(a.results=a.results.filter((e=>e.name.includes(o.toLowerCase()))));const i=a.results.map((({url:e})=>fetch(e).then((e=>e.json())))),s=await Promise.all(i),l=s.map((e=>{const{id:t,name:o,sprites:r,types:n}=e,a=r.front_default;return{id:t,name:o,types:n,imageUrl:a}}));return o?e.commit("setPokemonList",l):t?e.commit("setPokemonList",[...e.getters.getPokemonList,...l]):e.commit("setPokemonList",l),a.next}async function v(e,{id:t}){const o=e=>`https://pokeapi.co/api/v2/pokemon/${e}`;await fetch(o(t)).then((e=>e.json())).then((t=>{e.commit("setPokemonDetails",t)}))}const b={namespaced:!0,getters:r,mutations:n,actions:a,state:l},g=(0,i.h)((()=>{const e=(0,s.MT)({modules:{app:b},strict:!1});return e}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,r,n,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,n,a]=e[u],s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{133:"ffc515fe",179:"35bb0e7b",198:"9a94d164",434:"53852bfd",858:"0cceaa52"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{133:"12efc1b8",143:"7e72d41f",198:"e3ba24df",736:"b3361e1c",858:"4bcd85c7"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="vuepoke:";o.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+a){s=p;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[n];var d=(t,o)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,n.parentNode.removeChild(n),r(l)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=r=>new Promise(((n,a)=>{var i=o.miniCssF(r),s=o.p+i;if(t(i,s))return n();e(r,s,n,a)})),n={143:0};o.f.miniCss=(e,t)=>{var o={133:1,198:1,858:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((o,r)=>n=e[t]=[o,r]));r.push(n[2]=a);var i=o.p+o.u(t),s=new Error,l=r=>{if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};o.l(i,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,s,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var u=l(o)}for(t&&t(r);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return o.O(u)},r=self["webpackChunkvuepoke"]=self["webpackChunkvuepoke"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(119)));r=o.O(r)})();