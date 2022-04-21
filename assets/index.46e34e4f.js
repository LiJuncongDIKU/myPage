import{V as u,a as y,b as $,D as m,L as C,B as R,S as A}from"./vendor.1590f61e.js";function q(){import("data:text/javascript,")}const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};V();var O=function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},T=[];O._withStripped=!0;function D(o,t,a,i,e,r,s,_){var n=typeof o=="function"?o.options:o;t&&(n.render=t,n.staticRenderFns=a,n._compiled=!0),i&&(n.functional=!0),r&&(n._scopeId="data-v-"+r);var c;if(s?(c=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(l=__VUE_SSR_CONTEXT__),e&&e.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(s)},n._ssrRegister=c):e&&(c=_?function(){e.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:e),c)if(n.functional){n._injectStyles=c;var P=n.render;n.render=function(S,p){return c.call(p),P(S,p)}}else{var d=n.beforeCreate;n.beforeCreate=d?[].concat(d,c):[c]}return{exports:o,options:n}}const w={name:"App",mounted(){this.$store.commit("profile/setProfile")}},v={};var b=D(w,O,T,!1,N,null,null,null);function N(o){for(let t in v)this[t]=v[t]}b.options.__file="src/App.vue";var M=function(){return b.exports}();const j={namespaced:!0,state:{profile:{name:""}},getters:{},mutations:{setProfile(o,t){o.profile=t}},actions:{}};var I=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));u.use(y);const L=new y.Store({state:{},getters:{},mutations:{},actions:{}}),h={"./profile.store.js":I};Object.keys(h).forEach(o=>{const t=o.replace(/\.store\.js$/,"").replace(/^\.\//,"");L.registerModule(t,h[o].default)});const k="modulepreload",g={},U="/myPage/",f=function(t,a){return!a||a.length===0?t():Promise.all(a.map(i=>{if(i=`${U}${i}`,i in g)return;g[i]=!0;const e=i.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${r}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":k,e||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),e)return new Promise((_,n)=>{s.addEventListener("load",_),s.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};u.use($);const z=[{name:"Home",path:"/",component:()=>f(()=>import("./Home.de966449.js"),["assets/Home.de966449.js","assets/Home.cf51b83a.css","assets/vendor.1590f61e.js"]),children:[{name:"vue2vite",path:"/vue2vite",component:()=>f(()=>import("./Vue2Vite.de69620b.js"),["assets/Vue2Vite.de69620b.js","assets/Vue2Vite.3f33a94b.css","assets/vendor.1590f61e.js"]),meta:{label:"\u8D77\u6B65\u9879\u76EE"}},{name:"ljcAxios",path:"/ljcAxios",component:()=>f(()=>import("./ljcAxios.2b9e6f14.js"),["assets/ljcAxios.2b9e6f14.js","assets/ljcAxios.eade6bc3.css","assets/vendor.1590f61e.js"]),meta:{label:"\u63A5\u53E3\u4E8C\u5C01"}},{name:"scrollNum",path:"/scrollNum",component:()=>f(()=>import("./index.a634eed1.js"),["assets/index.a634eed1.js","assets/index.c421fdea.css","assets/vendor.1590f61e.js"]),meta:{label:"\u6EDA\u52A8\u6570\u5B57"}}]}],B=new $({mode:"history",base:"/myPage/",routes:z});var F=()=>{m.props.closeOnClickModal.default=!1,u.prototype.$ELEMENT={size:"small"},u.use(C.directive),u.use(R),u.use(A),u.use(m)};F();u.config.productionTip=!1;new u({router:B,store:L,render:o=>o(M)}).$mount("#app");const E={BASE_URL:"/myPage/",MODE:"dev",DEV:!0,PROD:!1};console.log(`
  ------------------------------------------------------------
  |
  |  \u6253\u5305\u6A21\u5F0F\uFF1A${E.MODE}
  |  \u6253\u5305\u7248\u672C\uFF1A0.1.0
  |  \u517C\u5BB9\u6A21\u5F0F\uFF1A${E.LEGACY}
  |  \u6253\u5305\u65F6\u95F4\uFF1A2022/4/21 \u4E0A\u534811:53:19
  |
  ------------------------------------------------------------
`);export{q as __vite_legacy_guard,D as n};
