import{d as g,j as v,k as B,c as u,o as n,w as e,e as a,aP as k,R as x,S as h,T as I,W as Q,X as o,ay as b,a as C,N as m,O as c,b8 as N}from"./index-UTJsbmGU.js";import{u as T}from"./useAppMeta-BXY7KmSo.js";import{B as w}from"./BaseCard-DoN1hG9u.js";import{_ as y}from"./BaseInfiniteScroll.vue_vue_type_script_setup_true_lang-BMBNHKmn.js";import{_ as L}from"./BasePage.vue_vue_type_script_setup_true_lang-BoDIjOxp.js";import"./use-meta-BDBs0vT6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BaseSpinner-hdbtQd30.js";const E=g({__name:"infinite-scroll",setup(O){const{t:f}=v(),{setTitle:p}=T();p(`Blang page | ${f("app.name")}`);const l=B([]),r=()=>{let s=l.value.length;for(let t=0;t<40;t++)s++,l.value.push({id:s,label:"Option "+s})};r();const d=(s,t)=>{setTimeout(()=>{r(),t?.()},500)};return(s,t)=>(n(),u(L,{"scroll-event":"","show-to-top":""},{default:e(()=>[a(w,{title:"Infinite scroll"},{default:e(()=>[a(y,{onOnInfinite:d},{default:e(()=>[a(k,{dense:""},{default:e(()=>[(n(!0),x(h,null,I(l.value,(i,_)=>(n(),u(Q,{key:i.id,clickable:""},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(b,null,{default:e(()=>t[0]||(t[0]=[C("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1)])),_:1})]),_:1}),a(o,null,{default:e(()=>[m(c(i.label),1)]),_:2},1024),a(o,{side:""},{default:e(()=>[a(N,null,{default:e(()=>[m(" #"+c(_),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}});export{E as default};
