import{d as i,cj as p,r as a,ck as m,_ as l,o as u,j as f,e as n,w as d,y as _}from"./index.d1ef8089.js";import{u as b}from"./useBase.379f5ea1.js";import{_ as g}from"./AppResult.d9a0b5ca.js";import{u as x}from"./useLang.15945f01.js";import{u as $}from"./use-meta.31817217.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const k=i({name:"ErrorPage",components:{AppResult:g},setup(){const{t:e}=x(),{WeeGetParam:o}=b(),r=p();$({title:e("error.error")});const t=a(o("code")),s=a(o("message"));return{code:t,message:s,t:e,biArrowLeft:m,exceptionStore:r}}}),w={class:"fullscreen text-center q-pa-md flex flex-center"};function B(e,o,r,t,s,E){const c=l("app-result");return u(),f("div",w,[n(c,{status:"error","icon-size":"256px",title:e.code||e.t("error.error"),description:e.message},{extra:d(()=>[n(_,{outline:"",icon:e.biArrowLeft,label:e.t("base.back")+e.t("base.home"),to:"/"},null,8,["icon","label"])]),_:1},8,["title","description"])])}var S=h(k,[["render",B]]);export{S as default};
