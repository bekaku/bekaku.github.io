import{d as p,aC as _,a as y,r as S,w as B,aD as C,_ as b,B as u,C as c,E as l,F as o,S as w,ap as Q,ak as i,N as v,ah as D,I as H,O as m,R as g,a9 as V,af as k,ag as x,aE as z}from"./index-Cd3HZUlj.js";import{Q as N}from"./QBar-BOW1NthI.js";const A=p({__name:"AppDialog",props:{modelValue:Boolean,dialog:{type:Boolean,default:!1},persistent:{type:Boolean,default:!0},fullWidth:{type:Boolean,default:!1},fullHeight:{type:Boolean,default:!1},maximized:{type:Boolean,default:!1},icon:{type:String,default:_},title:{type:String,default:""},dialogStyle:{type:String,default:""},dialogClass:{type:String,default:""},transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"}},emits:["on-close","on-hide","on-before-hide"],setup(t,{expose:n,emit:e}){n();const a=t,s=e,{t:d}=y(),r=S(!1);B(()=>a.dialog,h=>{r.value=h});const f={props:a,emit:s,t:d,show:r,onClose:()=>{s("on-close")},get biX(){return C}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}});function X(t,n,e,a,s,d){return u(),c(z,{"model-value":e.modelValue,persistent:e.persistent,maximized:e.maximized,"transition-show":e.transitionShow,"transition-hide":e.transitionHide,"full-width":e.fullWidth,"full-height":e.fullHeight,onHide:a.onClose,onBeforeHide:a.onClose},{default:l(()=>[o(w,Q(t.$attrs,{flat:"",bordered:"",class:e.dialogClass}),{default:l(()=>[i(t.$slots,"toolBar",{},()=>[o(N,{class:"bg-transparent q-my-xs"},{default:l(()=>[i(t.$slots,"icon",{},()=>[e.icon?(u(),c(v,{key:0,name:e.icon},null,8,["name"])):D("",!0)]),H("div",null,[i(t.$slots,"title",{},()=>[m(g(e.title),1)])]),o(V),i(t.$slots,"toolbarAction",{},()=>[o(k,{round:"",flat:"",icon:a.biX,size:"md",onClick:a.onClose},{default:l(()=>[o(x,null,{default:l(()=>[m(g(a.t("base.close")),1)]),_:1})]),_:1},8,["icon"])])]),_:3})]),i(t.$slots,"default")]),_:3},16,["class"])]),_:3},8,["model-value","persistent","maximized","transition-show","transition-hide","full-width","full-height"])}const O=b(A,[["render",X],["__file","AppDialog.vue"]]);export{O as default};
