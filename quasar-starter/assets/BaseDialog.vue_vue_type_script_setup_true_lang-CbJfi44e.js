import{aL as Q,bW as S,bM as V,bX as D,s as q,aM as A,bO as H,d as N,ab as B,ac as T,j as W,u as E,k as F,c as f,o as m,bY as I,w as o,e as n,r as i,a as v,F as c,U as w,K as a,a1 as L,N as b,O as h,bZ as O,J as k,b_ as P,b$ as X,M as C,aA as j,E as J,$ as K,c0 as U}from"./index-UTJsbmGU.js";const Y=Q({name:"QBar",props:{...S,dense:Boolean},setup(s,{slots:p}){const{proxy:{$q:d}}=V(),r=D(s,d),l=q(()=>`q-bar row no-wrap items-center q-bar--${s.dense===!0?"dense":"standard"}  q-bar--${r.value===!0?"dark":"light"}`);return()=>A("div",{class:l.value,role:"toolbar"},H(p.default))}}),G=N({__name:"BaseDialog",props:B({persistent:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},fullHeight:{type:Boolean,default:!1},maximized:{type:Boolean,default:!1},canMaximized:{type:Boolean,default:!1},icon:{default:()=>U},title:{},transitionShow:{default:"fade"},transitionHide:{default:"fade"},width:{},maxWidth:{},dialogStyle:{},autoClose:{type:Boolean,default:!0},showToolbar:{type:Boolean,default:!0},padding:{type:Boolean,default:!0}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:B(["on-close","on-hide","on-before-hide"],["update:modelValue"]),setup(s,{emit:p}){const d=T(s,"modelValue"),r=p,{t:l}=W(),{isDark:g}=E(),t=F(s.maximized),$=()=>{r("on-close"),y()},z=()=>{r("on-hide"),y()},y=()=>{s.autoClose&&(d.value=!1)};return(e,u)=>(m(),f(I,{"model-value":d.value,persistent:e.persistent,maximized:t.value,"transition-show":e.transitionShow,"transition-hide":e.transitionHide,"full-width":e.fullWidth,"full-height":e.fullHeight,onHide:z,onBeforeHide:u[1]||(u[1]=M=>e.$emit("on-before-hide"))},{default:o(()=>[n(K,J(e.$attrs,{style:e.dialogStyle}),{default:o(()=>[i(e.$slots,"toolBar",{},()=>[e.showToolbar?(m(),f(Y,{key:0,class:w(["q-py-md",{"bg-grey-2":!a(g),"bg-dark-900":a(g)}])},{default:o(()=>[i(e.$slots,"icon",{},()=>[e.icon?(m(),f(L,{key:0,name:e.icon},null,8,["name"])):c("",!0)]),v("div",null,[i(e.$slots,"title",{},()=>[b(h(e.title),1)])]),n(O),i(e.$slots,"toolbarAction",{},()=>[e.canMaximized?(m(),f(k,{key:0,round:"",flat:"",icon:t.value?a(X):a(P),onClick:u[0]||(u[0]=M=>t.value=!t.value)},{default:o(()=>[n(C,null,{default:o(()=>[b(h(t.value?a(l)("base.minimize"):a(l)("base.maximize")),1)]),_:1})]),_:1},8,["icon"])):c("",!0),n(k,{round:"",flat:"",icon:a(j),onClick:$},{default:o(()=>[n(C,null,{default:o(()=>[b(h(a(l)("base.close")),1)]),_:1})]),_:1},8,["icon"])])]),_:3},8,["class"])):c("",!0)]),v("div",{class:w({"q-pa-md":e.padding})},[i(e.$slots,"default")],2)]),_:3},16,["style"])]),_:3},8,["model-value","persistent","maximized","transition-show","transition-hide","full-width","full-height"]))}});export{G as _};
