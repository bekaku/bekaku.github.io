import{d as w,aN as Q,r as f,a8 as L,o as P,a as T,w as t,Q as B,e,g as N,u as a,bK as q,I as o,t as l,aI as V,y as s,aJ as u,bL as x,C as O,bF as W,i as D,bM as S}from"./index.1297aae9.js";import{u as F}from"./use-meta.b344b526.js";import{u as E}from"./useLang.596523dd.js";import{u as G}from"./counter.c0506df3.js";import{u as $}from"./useBase.9460d773.js";import{_ as M}from"./AppResult.10c2878f.js";const R=o("p",null,"Test Component",-1),j=w({__name:"BtnComponent",props:{modelValue:{type:String},no:{type:Number},overlay:{type:Boolean,default:!1},meta:{type:Object,default:void 0,required:!0},todos:{type:Array,default:()=>[]}},emits:["on-custom-click","update:modelValue"],setup(c,{emit:v}){const C=c,{WeeGoTo:m}=$(),r=Q();E();const _=f("vvvvvvvvv"),b=L({get:()=>C.modelValue,set:i=>d("update:modelValue",i)}),d=v,n=()=>{r.notify("onCloseClick"),console.log("onCloseClick")},g=()=>{d("on-custom-click",_.value)},y=()=>{m("/testPage")};return(i,p)=>(P(),T(B,{flat:"",class:"q-my-lg"},{default:t(()=>[e(u,null,{default:t(()=>[R,e(N,{name:a(q)},null,8,["name"]),o("p",null,l(b.value),1),o("p",null,"modelValue : "+l(c.modelValue),1),o("p",null,"overlay : "+l(c.overlay),1),o("p",null,"meta : "+l(c.meta),1),o("p",null,"todos : "+l(c.todos),1),V(i.$slots,"extra"),V(i.$slots,"closeBtn",{},()=>[e(s,{onClick:n,label:"on close"})]),e(s,{onClick:g,label:"on Submit"}),e(s,{onClick:p[0]||(p[0]=h=>i.$emit("on-custom-click")),label:"on direct Submit"}),e(s,{label:"Goto",onClick:y})]),_:3})]),_:3}))}}),H={class:"q-gutter-lg"},J=o("div",{class:"text-h6"},"Extra section from page",-1),te=w({__name:"IndexPage",setup(c){const v=x(()=>S(()=>import("./ExampleComponent.bf995f87.js"),["assets/ExampleComponent.bf995f87.js","assets/index.1297aae9.js","assets/index.6170d171.css"])),C=x(()=>S(()=>import("./AppAlert.ba97e435.js"),["assets/AppAlert.ba97e435.js","assets/index.1297aae9.js","assets/index.6170d171.css"]));F({title:"Index Page"});const{WeeLoader:m,WeeToast:r,WeeConfirm:_}=$(),b=G(),d=O(),{t:n}=E(),g=f("Hello worl!!"),y=f([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),i=f({totalCount:1200}),p=async()=>{await _(n("app.monogram"),n("base.deleteConfirm"))?r("Confirm",{type:"positive"}):r("Cancle",{type:"negative"})},h=()=>{m(),setTimeout(()=>{m(!1)},3e3)},A=()=>{r("this is a toast",{type:"positive"})},I=k=>{console.log("click from component",k)};return(k,K)=>(P(),T(W,{padding:""},{default:t(()=>[e(B,{elavated:""},{default:t(()=>[e(u,null,{default:t(()=>[o("p",null,l(a(n)("app.name")),1),o("div",null,"Pinia Counter : "+l(a(b).counter),1),o("div",H,[e(s,{label:"show loading",color:"primary",unelevated:"",onClick:h}),e(s,{label:"show toast",color:"warning",onClick:A}),e(s,{label:"show confirm",color:"negative",onClick:p})]),e(a(v),{title:"Example component",active:"",todos:y.value,meta:i.value},null,8,["todos","meta"])]),_:1}),e(u,null,{default:t(()=>[D(" auth : "+l(a(d).auth),1)]),_:1}),e(u,null,{default:t(()=>[e(M,{status:"empty",description:a(n)("error.dataNotfound")},{extra:t(()=>[e(s,{outline:"",icon:"bi-arrow-left",label:a(n)("base.back")+a(n)("base.home")},null,8,["label"])]),_:1},8,["description"]),e(a(C),{radius:"",type:"is-light",message:"This is alert message!!",title:"Title"})]),_:1})]),_:1}),e(j,{"model-value":g.value,overlay:!0,meta:{id:2,name:"nnnn"},onOnCustomClick:I},{extra:t(()=>[e(u,null,{default:t(()=>[J]),_:1})]),_:1},8,["model-value"])]),_:1}))}});export{te as default};
