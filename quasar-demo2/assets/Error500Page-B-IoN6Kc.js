import{d as _,a as p,u as f,bi as d,r as n,bh as u,_ as m,B as x,H as b,F as c,E as g,O as E,R as S,af as h}from"./index-Bhd6CteR.js";import A from"./AppResult-DW23M7rZ.js";import{u as B}from"./use-meta-BD8nEejs.js";const P=_({__name:"Error500Page",setup(i,{expose:t}){t();const{t:r}=p(),{getParam:e}=f(),o=d();B({title:r("error.error")});const s=n(e("code")),l=n(e("message")),a={t:r,getParam:e,exceptionStore:o,code:s,message:l,AppResult:A,get biArrowLeft(){return u}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),w={class:"fullscreen text-center q-pa-md flex flex-center"};function L(i,t,r,e,o,s){return x(),b("div",w,[c(e.AppResult,{status:"error","icon-size":"256px",title:e.code,description:e.message},{extra:g(()=>[E(S(e.exceptionStore.error)+" ",1),c(h,{outline:"",icon:e.biArrowLeft,label:e.t("base.back")+e.t("base.home"),to:"/"},null,8,["icon","label"])]),_:1},8,["title","description"])])}const y=m(P,[["render",L],["__file","Error500Page.vue"]]);export{y as default};