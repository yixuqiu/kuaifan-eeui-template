// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
if(typeof eeuiLog=="undefined"){var eeuiLog={debug:function(){},log:function(){},info:function(){},warn:function(){},error:function(){}}}
!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([,,,,,,,function(t,e,n){var o,r,i=[];i.push(n(8)),o=n(9);var a=n(10);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/pages/version_update/1.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-8e48f114",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),t.exports=o,t.exports.el="true",new Vue(t.exports)},function(t,e){t.exports={app:{flex:1,backgroundColor:"rgba(0,0,0,0.72)",justifyContent:"center",alignItems:"center"},body:{width:"500",borderRadius:"20",backgroundColor:"#ffffff"},title:{marginTop:"39",fontSize:"44",color:"#3147EF",textAlign:"center"},content:{marginTop:"42",marginRight:"42",marginBottom:"50",marginLeft:"42",minHeight:"32",maxHeight:"500"},"content-text":{fontSize:"28",lineHeight:"36",color:"#666666"},botton:{flexDirection:"row",alignItems:"center",justifyContent:"center"},"botton-item":{marginTop:0,marginRight:"11",marginBottom:"38",marginLeft:"11",width:"206",height:"68",lineHeight:"68",textAlign:"center",fontSize:"26",color:"#666666",borderRadius:"34",borderWidth:"1",borderStyle:"solid",borderColor:"#BFBFBF"},"botton-item-ok":{marginTop:0,marginRight:"11",marginBottom:"38",marginLeft:"11",width:"206",height:"68",lineHeight:"68",textAlign:"center",fontSize:"26",color:"#ffffff",borderRadius:"34",borderWidth:"1",borderStyle:"solid",borderColor:"#BFBFBF",backgroundColor:"#3147EF"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=app.requireModule("versionUpdate");e.default={data:function(){return{title:"",content:"",canCancel:!0}},mounted:function(){this.title=o.getTitle(),this.content=o.getContent(),this.canCancel=o.canCancel()},methods:{onCancel:function(){o.closeUpdate()},onUpdate:function(){o.startUpdate()}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["app"]},[n("div",{staticClass:["body"]},[n("text",{staticClass:["title"]},[t._v(t._s(t.title||"发现新版本"))]),n("scroller",{staticClass:["content"]},[n("text",{staticClass:["content-text"]},[t._v(t._s(t.content||"暂无更新介绍！"))])]),n("div",{staticClass:["botton"]},[t.canCancel?n("text",{staticClass:["botton-item"],on:{click:t.onCancel}},[t._v("以后再说")]):t._e(),n("text",{staticClass:["botton-item-ok"],on:{click:t.onUpdate}},[t._v("立即更新")])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}]);