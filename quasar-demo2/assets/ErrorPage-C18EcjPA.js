import{d as i,a as l,u as _,r as u,f,bh as p,_ as d,B as m,H as b,F as n,E as x,af as g}from"./index-BWIq0ofC.js";import h from"./AppResult-Bb6-EgpO.js";import{u as v}from"./use-meta-uc4Tq-FS.js";const A=i({__name:"ErrorPage",setup(c,{expose:o}){o();const{t:r}=l(),{getQuery:e}=_();v({title:r("error.error")});const t=u(e("code")),s=f(()=>t.value?r(`http.${t.value}`):void 0),a={t:r,getQuery:e,code:t,message:s,AppResult:h,get biArrowLeft(){return p}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),B={class:"fullscreen text-center q-pa-md flex flex-center"};function E(c,o,r,e,t,s){return m(),b("div",B,[n(e.AppResult,{status:"error","icon-size":"256px",title:e.code||e.t("error.error"),description:e.message},{extra:x(()=>[n(g,{outline:"",icon:e.biArrowLeft,label:e.t("base.back")+e.t("base.home"),to:"/"},null,8,["icon","label"])]),_:1},8,["title","description"])])}const k=d(A,[["render",E],["__file","ErrorPage.vue"]]);export{k as default};
