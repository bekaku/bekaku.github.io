import{d as m,a as C,u as _,r as b,aj as g,_ as x,B as y,C as w,E as t,L as v,F as o,M as f,a7 as B,a8 as T,O as U,a9 as h,aa as k,$ as Q,S as L}from"./index-BzL-CGt2.js";import{u as S}from"./useAppMeta-2NCT7RDI.js";import{U as M}from"./Button-raohwBvU.js";import"./use-meta-BD084KRx.js";const V=m({__name:"use-base",setup(u,{expose:n}){n();const{t:a}=C(),{setTitle:e}=S();e(`Use base | ${a("app.name")}`);const{appLoading:r,appToast:l,appConfirm:s,writeToClipboard:i}=_(),c=b("Text to copy"),p={t:a,setTitle:e,appLoading:r,appToast:l,appConfirm:s,writeToClipboard:i,textModel:c,confirm:async()=>{await s(a("app.monogram"),a("base.deleteConfirm"))?l("Confirm",{type:"positive",multiLine:!1}):l("Cancel",{type:"negative",multiLine:!1})},confirm2:async()=>{const d=await s(a("app.monogram"),a("base.deleteConfirm"),{textColor:"white",flat:!1,noCaps:!0,color:"positive",label:"Acknowledge"},{textColor:"white",flat:!1,color:"negative",label:"Just text",noCaps:!0});console.log(d)},loader:()=>{r(),setTimeout(()=>{r(!1)},3e3)},toaster:()=>{l("this is a toast",{avatar:"https://cdn.quasar.dev/img/avatar2.jpg",multiLine:!1,color:"primary",timeout:5e3,position:"right"})},onCopyText:async()=>{await i(c.value)},get biCopy(){return g},UiButton:M};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}});function j(u,n,a,e,r,l){return y(),w(v,{padding:""},{default:t(()=>[o(L,{flat:"",bordered:"",class:"content-limit"},{default:t(()=>[o(f,null,{default:t(()=>[o(B,null,{default:t(()=>[o(T,null,{default:t(()=>n[1]||(n[1]=[U(" Use base")])),_:1}),o(h)]),_:1}),o(k)]),_:1}),o(f,{class:"q-gutter-md"},{default:t(()=>[o(e.UiButton,{label:"show loading",color:"primary",unelevated:"",onClick:e.loader}),o(e.UiButton,{label:"show toast",color:"warning",onClick:e.toaster}),o(e.UiButton,{label:"show confirm",color:"negative",onClick:e.confirm}),o(e.UiButton,{label:"show confirm Custom Btn",onClick:e.confirm2}),o(Q,{modelValue:e.textModel,"onUpdate:modelValue":n[0]||(n[0]=s=>e.textModel=s),outlined:"",style:{width:"250px"}},{append:t(()=>[o(e.UiButton,{flat:"",round:"",icon:e.biCopy,onClick:e.onCopyText},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}const z=x(V,[["render",j],["__file","use-base.vue"]]);export{z as default};
