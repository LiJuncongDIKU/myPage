import{n as o}from"./index.9f942e48.js";import"./vendor.1590f61e.js";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"workbench"},[t("div",{staticClass:"header"},[e._v("\u4E00\u4E9B\u6709\u610F\u601D\u7684\u8F6E\u5B50")]),t("div",{staticClass:"bench-body"},[t("div",{staticClass:"menus"},e._l(e.menu,function(s){return t("div",{key:s.name,class:{"menu-item":!0,active:e.$route.name===s.name},on:{click:function(m){return e.jumpRoute(s)}}},[e._v(" "+e._s(s.meta.label)+" ")])}),0),t("div",{staticClass:"content-wrap"},[t("keep-alive",[t("router-view")],1)],1)])])},u=[];i._withStripped=!0;const c={computed:{menu(){return this.$router.options.routes.find(e=>e.name==="Home").children}},methods:{jumpRoute(e){e.name!==this.$route.name&&this.$router.push({name:e.name})}}},r={};var a=o(c,i,u,!1,_,"fae5bece",null,null);function _(e){for(let n in r)this[n]=r[n]}a.options.__file="src/views/Home.vue";var d=function(){return a.exports}();export{d as default};