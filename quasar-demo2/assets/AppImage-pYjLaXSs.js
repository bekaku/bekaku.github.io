import{d as p,r as c,T as b,bU as y,b2 as I,bV as C,_ as B,B as d,C as f,E as u,I as v,F as _,by as x,ap as m,ae as g,N as w,O as k,ak as z}from"./index-ZORCAnWx.js";import{F as U}from"./FileManagerService-BjIGCFM0.js";const A=p({__name:"AppImage",props:{src:{},fetch:{type:Boolean,default:!1},imageBg:{type:Boolean,default:!1},placHolder:{},spinnerColor:{default:"white"},alt:{default:"img"},ratio:{default:()=>4/3},fit:{default:"cover"}},setup(a,{expose:o}){o();const{fethCdnData:e}=U(),t=c(!0),r=c(),l=c(!1);b(async()=>{await n()}),y(()=>{l.value&&n()});const n=async()=>{if(!a.src){t.value=!1;return}a.fetch?e(a.src).then(i=>{s(),i&&(r.value=i)}).catch(i=>{s()}):(r.value=a.src,s())},s=()=>{t.value=!1,l.value||(l.value=!0)};I(()=>{r.value=void 0});const h={fethCdnData:e,loading:t,srcUrl:r,firstLoaded:l,onFetchImage:n,clearLoading:s,get biCardImage(){return C}};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),F={class:"absolute-full flex flex-center"},N={class:"absolute-full flex flex-center bg-primary text-white"};function S(a,o,e,t,r,l){return t.loading?(d(),f(g,m({key:0,"spinner-color":e.spinnerColor,"placeholder-src":e.placHolder,ratio:e.ratio},a.$attrs,{loading:"lazy"}),{default:u(()=>[v("div",F,[_(x,{showing:"",color:"white",size:"xs"})])]),_:1},16,["spinner-color","placeholder-src","ratio"])):t.srcUrl?(d(),f(g,m({key:1,src:t.srcUrl,fit:e.fit,"placeholder-src":e.placHolder,"spinner-color":e.spinnerColor,ratio:e.ratio},a.$attrs,{loading:"lazy",class:{"img-bg":e.imageBg},alt:e.alt}),{error:u(()=>[v("div",N,[_(w,{name:t.biCardImage,class:"q-mr-sm",size:"md"},null,8,["name"]),o[0]||(o[0]=k(" Cannot load image "))])]),default:u(()=>[z(a.$slots,"default",{},void 0,!0)]),_:3},16,["src","fit","placeholder-src","spinner-color","ratio","class","alt"])):(d(),f(g,m({key:2,ratio:e.ratio},a.$attrs,{loading:"lazy",src:"/quasar-starter-template/images/no_picture_thumb.jpg"}),null,16,["ratio"]))}const L=B(A,[["render",S],["__scopeId","data-v-d5c53d38"],["__file","AppImage.vue"]]);export{L as A};
