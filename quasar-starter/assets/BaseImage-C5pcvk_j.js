import{d as h,k as t,a$ as y,an as B,b0 as w,c as n,o as i,av as c,E as d,w as f,a as g,e as p,cv as C,r as I,N as b,K as k,cM as z,a1 as $}from"./index-UTJsbmGU.js";import{F as N}from"./FileManagerService-oa2a8H9O.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const H={class:"absolute-full flex flex-center"},L={class:"absolute-full flex flex-center bg-primary text-white"},M=h({__name:"BaseImage",props:{src:{},fetch:{type:Boolean,default:!1},imageBg:{type:Boolean,default:!1},placHolder:{},spinnerColor:{default:"white"},alt:{default:"img"},ratio:{default:()=>4/3},fit:{default:"cover"}},setup(o){const{fethCdnData:v}=N(),r=t(!0),a=t(),s=t(!1);y(async()=>{await u()}),B(()=>{s.value&&u()});const u=async()=>{if(!o.src){r.value=!1;return}o.fetch?v(o.src).then(e=>{l(),e&&(a.value=e)}).catch(()=>{l()}):(a.value=o.src,l())},l=()=>{r.value=!1,s.value||(s.value=!0)};return w(()=>{a.value=void 0}),(e,m)=>r.value?(i(),n(c,d({key:0,"spinner-color":e.spinnerColor,"placeholder-src":e.placHolder,ratio:e.ratio},e.$attrs,{loading:"lazy"}),{default:f(()=>[g("div",H,[p(C,{showing:"",color:"white",size:"xs"})])]),_:1},16,["spinner-color","placeholder-src","ratio"])):a.value?(i(),n(c,d({key:1,src:a.value,fit:e.fit,"placeholder-src":e.placHolder,"spinner-color":e.spinnerColor,ratio:e.ratio},e.$attrs,{loading:"lazy",class:{"img-bg":e.imageBg},alt:e.alt}),{error:f(()=>[g("div",L,[p($,{name:k(z),class:"q-mr-sm",size:"md"},null,8,["name"]),m[0]||(m[0]=b(" Cannot load image "))])]),default:f(()=>[I(e.$slots,"default",{},void 0,!0)]),_:3},16,["src","fit","placeholder-src","spinner-color","ratio","class","alt"])):(i(),n(c,d({key:2,ratio:e.ratio},e.$attrs,{loading:"lazy",src:"/images/no_picture_thumb.jpg"}),null,16,["ratio"]))}}),S=F(M,[["__scopeId","data-v-86158de6"]]);export{S as B};
