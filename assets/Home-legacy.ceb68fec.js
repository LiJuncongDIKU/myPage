!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.common-passage[data-v-fae5bece]{padding:0 24px}button+button[data-v-fae5bece]{margin-left:10px}.dev-tag[data-v-fae5bece]{display:inline-block;position:relative}.dev-tag[data-v-fae5bece]:after{content:"dev";color:#fff;background:#f00;padding:5px;font-size:16px;line-height:1;position:absolute;right:-45px;top:0;border-radius:4px}.tip[data-v-fae5bece]{font-size:14px;color:#555}.line-throught[data-v-fae5bece]{text-decoration-line:line-through}.menu-new[data-v-fae5bece]:after{content:"New";display:inline-block;background-color:red;color:#fff;border-radius:5px;padding:2px 4px;font-size:12px}.menu-new[data-v-fae5bece]{position:relative}.menu-new[data-v-fae5bece]:after{content:"Dev";display:inline-block;background-color:orange;color:#fff;border-radius:5px;padding:2px 4px;font-size:12px}.not-recommended[data-v-fae5bece]{text-decoration-line:line-through;text-decoration-color:red}.not-recommended[data-v-fae5bece]:after{content:"\\4e0d\\63a8\\8350\\ff0c\\5df2\\6709\\66f4\\4f73\\7684\\5b9e\\73b0\\65b9\\5f0f";display:inline-block;font-size:14px;font-weight:400;font-style:italic;text-decoration:none}.flex-box[data-v-fae5bece]{display:flex}.workbench[data-v-fae5bece]{width:100vw;height:100vh;min-width:1000px;min-height:800px;display:flex;flex-direction:column}.workbench .header[data-v-fae5bece]{color:#fff;font-size:22px;font-weight:700;padding:.5em 1em;background:#333}.workbench .bench-body[data-v-fae5bece]{flex:auto;display:flex;background:#eee;overflow:hidden}.workbench .menus[data-v-fae5bece]{flex:0 0 200px;background:#111;color:#fff}.workbench .menus .menu-item[data-v-fae5bece]{text-align:center;padding:.8em 1em;border-bottom:1px solid #333;cursor:pointer}.workbench .menus .menu-item.active[data-v-fae5bece]{background:#a50000}.workbench .menus .menu-item[data-v-fae5bece]:not(.active):hover{background:#4e0000}.workbench .content-wrap[data-v-fae5bece]{flex:auto;overflow:auto}\n',document.head.appendChild(e),System.register(["./vendor-legacy.f4e95127.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.n}],execute:function(){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"workbench"},[n("div",{staticClass:"header"},[e._v("李俊聪的个人项目")]),n("div",{staticClass:"bench-body"},[n("div",{staticClass:"menus"},e._l(e.menu,(function(t){return n("div",{key:t.name,class:[t.meta.exClass,"menu-item",e.$route.name===t.name?"active":""],on:{click:function(n){return e.jumpRoute(t)}}},[e._v(" "+e._s(t.meta.label)+" ")])})),0),n("div",{staticClass:"content-wrap"},[n("keep-alive",[n("router-view")],1)],1)])])},a=[];n._withStripped=!0;var o={},i=t({computed:{menu:function(){return this.$router.options.routes.find((function(e){return"Home"===e.name})).children}},methods:{jumpRoute:function(e){e.name!==this.$route.name&&this.$router.push({name:e.name})}}},n,a,!1,r,"fae5bece",null,null);function r(e){for(var t in o)this[t]=o[t]}i.options.__file="src/views/Home.vue";e("default",function(){return i.exports}())}}}))}();
