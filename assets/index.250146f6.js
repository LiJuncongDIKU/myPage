import{n as o}from"./index.9f942e48.js";import"./vendor.1590f61e.js";var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unit-view",style:{fontSize:t.size,lineHeight:t.lineHeight,height:t.lineHeight}},[n("div",{staticClass:"offset-wrap"},t._l(10,function(i){return n("div",{key:i,class:"unit-num offset-"+(t.aimNum+1-i),style:{transition:"transform "+t.duration+" "+t.timingFunction}},[t._v(" "+t._s(i-1)+" ")])}),0)])},a=[];u._withStripped=!0;const v={name:"scrollUnit",props:{num:{type:Number,default:0},timingFunction:{type:String,default:"LINEAR"},duration:{type:String,default:"0.5s"},size:{type:String,default:"20px"},lineHeight:{type:String,default:"23px"}},data(){return{}},computed:{offsetUnit(){return parseFloat(this.lineHeight)},aimNum(){return Math.abs(this.num)%10}}},r={};var _=o(v,u,a,!1,m,"df6bfe52",null,null);function m(t){for(let e in r)this[e]=r[e]}_.options.__file="src/components/scrollNum/scrollUnit.vue";var p=function(){return _.exports}(),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common-passage"},[n("h1",{staticClass:"dev-tag"},[t._v("\u6570\u5B57\u6EDA\u52A8\u7EC4\u4EF6")]),n("h2",[t._v("\u6EDA\u52A8\u5355\u5143")]),n("p",[t._v(" \u6EDA\u52A8\u5355\u5143\u53EA\u5141\u8BB8\u4E00\u4E2A\u6570\u5B57\u8FDB\u884C\u6EDA\u52A8\uFF0C\u5982\u679C\u4F20\u5165\u6570\u503C\u5927\u4E8E10\uFF0C\u53EA\u4F1A\u6EDA\u52A8\u6700\u540E\u4E00\u4E2A\u6570\u5B57\u3002 \u4ECE\u901A\u7528\u6548\u679C\u5206\u6790\uFF0C\u6570\u5B57\u5E94\u8BE5\u4E00\u76F4\u53EA\u4F1A\u5F80\u4E0B\u6EDA\u52A8 ")]),n("scrollUnit",{attrs:{num:t.num1}}),n("button",{on:{click:function(i){t.num1++}}},[t._v("+1")]),n("button",{on:{click:function(i){t.num1--}}},[t._v("-1")]),n("button",{on:{click:function(i){t.num1+=4}}},[t._v("+4")]),n("button",{on:{click:function(i){t.num1-=4}}},[t._v("-4")])],1)},f=[];c._withStripped=!0;const d={components:{scrollUnit:p},data(){return{num1:0}}},s={};var l=o(d,c,f,!1,h,"3ed8b0dc",null,null);function h(t){for(let e in s)this[e]=s[e]}l.options.__file="src/components/scrollNum/index.vue";var x=function(){return l.exports}();export{x as default};
