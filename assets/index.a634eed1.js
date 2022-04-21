import{n as l}from"./index.46e34e4f.js";import"./vendor.1590f61e.js";var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unit-view",style:{fontSize:t.size,lineHeight:t.lineHeight,height:t.lineHeight}},[n("div",{staticClass:"offset-wrap",style:{transform:"translateY(-"+t.offY+"px)",transition:"transform "+t.duration+" "+t.timingFunction}},t._l(10,function(r){return n("div",{key:r,staticClass:"unit-num"},[t._v(" "+t._s(r-1)+" ")])}),0)])},h=[];_._withStripped=!0;const g={name:"ScrollUnit",props:{num:{type:Number,default:0},timingFunction:{type:String,default:"LINEAR"},duration:{type:String,default:"0.5s"},size:{type:String,default:"20px"},lineHeight:{type:String,default:"23px"}},data(){return{}},computed:{offsetUnit(){return parseFloat(this.lineHeight)},offY(){return Math.abs(this.num)%10*this.offsetUnit}}},i={};var a=l(g,_,h,!1,$,"59320663",null,null);function $(t){for(let e in i)this[e]=i[e]}a.options.__file="node_modules/ljc-scroll-num-vue2/packages/scrollUnit/src/scrollUnit.vue";var s=function(){return a.exports}();s.install=function(t){t.component(s.name,s)};var v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.numArr,function(r,d){return n("scrollUnit",t._b({key:d,staticClass:"letter-unit",attrs:{num:r}},"scrollUnit",t.$attrs,!1))}),1)},y=[];v._withStripped=!0;const S={name:"scrollNum",components:{scrollUnit:s},props:{value:{type:Number,default:0}},computed:{numArr(){const t=Math.abs(this.value||0);return String(t).split("").map(Number)}}},u={};var m=l(S,v,y,!1,x,"2505fdc1",null,null);function x(t){for(let e in u)this[e]=u[e]}m.options.__file="node_modules/ljc-scroll-num-vue2/packages/scrollNum/src/scrollNum.vue";var o=function(){return m.exports}();o.install=function(t){t.component(o.name,o)};const b=s,N=o;var p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common-passage"},[n("h1",[t._v("\u6570\u5B57\u6EDA\u52A8\u7EC4\u4EF6")]),n("h2",[t._v("\u6EDA\u52A8\u5355\u5143")]),n("p",[t._v(" \u6EDA\u52A8\u5355\u5143\u53EA\u5141\u8BB8\u4E00\u4E2A\u6570\u5B57\u8FDB\u884C\u6EDA\u52A8\uFF0C\u5982\u679C\u4F20\u5165\u6570\u503C\u5927\u4E8E10\uFF0C\u53EA\u4F1A\u6EDA\u52A8\u6700\u540E\u4E00\u4E2A\u6570\u5B57\u3002 \u4ECE\u901A\u7528\u6548\u679C\u548C\u7B80\u5355\u5B9E\u73B0\u8003\u8651\uFF0C\u91C7\u7528\u6700\u77ED\u6EDA\u52A8\u8DEF\u5F84\uFF0C\u975E\u5FAA\u73AF\u7248\u672C\u3002 ")]),n("p"),n("address",{staticClass:"tip"},[t._v("\u8003\u8651\u4EE5\u540E\u505A\u4E00\u4E2A\u5B9A\u5411\u5FAA\u73AF\u6EDA\u52A8\u7684\u7248\u672C")]),n("p"),n("ScrollUnit",{attrs:{num:t.num1}}),n("br"),n("button",{on:{click:function(r){t.num1++}}},[t._v("+1")]),n("button",{on:{click:function(r){t.num1--}}},[t._v("-1")]),n("button",{on:{click:function(r){t.num1+=4}}},[t._v("+4")]),n("button",{on:{click:function(r){t.num1-=4}}},[t._v("-4")]),n("h2",[t._v("\u6EDA\u52A8\u7684\u6570\u5B57")]),n("p",[t._v("\u53EF\u4EE5\u64CD\u7EB5\u4E0A\u65B9\u7684\u6309\u94AE\u89C2\u5BDF\u53D8\u5316")]),n("ScrollNum",{attrs:{value:t.num1}}),n("h2",[t._v("API")]),t._v(" \u6211\u5728 npm \u5730\u5740\u5199\u4E86 "),n("a",{attrs:{target:"_blank",href:"https://www.npmjs.com/package/ljc-scroll-num-vue2"}},[t._v("api\u8BF4\u660E")])],1)},U=[];p._withStripped=!0;const k={components:{ScrollUnit:b,ScrollNum:N},data(){return{num1:0}}},c={};var f=l(k,p,U,!1,w,"3ed8b0dc",null,null);function w(t){for(let e in c)this[e]=c[e]}f.options.__file="src/components/scrollNum/index.vue";var F=function(){return f.exports}();export{F as default};
