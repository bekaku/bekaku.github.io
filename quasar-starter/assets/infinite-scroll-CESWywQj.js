import{l as g,u as v,r as x,m as u,n,w as e,x as a,be as B,V as h,ah as b,aZ as k,as as I,at as r,aW as Q,t as C,W as m,X as f,bM as V}from"./index-__cRNkUR.js";import{u as w}from"./useAppMeta-BFA3x1Cv.js";import{B as L}from"./BaseCard-q-Y47Oi3.js";import{_ as N}from"./BaseInfiniteScroll.vue_vue_type_script_setup_true_lang-Cddd2cg-.js";import{_ as T}from"./BasePage.vue_vue_type_script_setup_true_lang-CK0_gL4k.js";import"./use-meta-B1rlW-p2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BaseSpinner-BSVbRgky.js";const E=g({__name:"infinite-scroll",setup($){const{t:p}=v(),{setTitle:c}=w();c(`Blang page | ${p("app.name")}`);const l=x([]),o=()=>{let s=l.value.length;for(let t=0;t<40;t++)s++,l.value.push({id:s,label:"Option "+s})};o();const d=(s,t)=>{setTimeout(()=>{o(),t?.()},500)};return(s,t)=>(n(),u(T,{"scroll-event":"","show-to-top":""},{default:e(()=>[a(L,{title:"Infinite scroll"},{default:e(()=>[a(N,{onOnInfinite:d},{default:e(()=>[a(B,{dense:""},{default:e(()=>[(n(!0),h(b,null,k(l.value,(i,_)=>(n(),u(I,{key:i.id,clickable:""},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(Q,null,{default:e(()=>t[0]||(t[0]=[C("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1)])),_:1})]),_:1}),a(r,null,{default:e(()=>[m(f(i.label),1)]),_:2},1024),a(r,{side:""},{default:e(()=>[a(V,null,{default:e(()=>[m(" #"+f(_),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}});export{E as default};
