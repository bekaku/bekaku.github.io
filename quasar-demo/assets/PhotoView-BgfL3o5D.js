import{d as M,bv as X,r as h,au as j,a as U,u as K,T as G,f as N,aH as J,cn as W,co as Y,a6 as p,cp as $,cq as ee,bg as ae,cr as oe,_ as te,A as le,B as c,C as w,E as l,F as a,S as ne,a7 as ie,ah as A,a8 as se,O as B,R as v,H as O,af as g,ai as re,a9 as de,bp as ue,b8 as ce,aq as q,ab as F,ac as _,N as H,I as fe,bx as me,bk as he}from"./index-DzrxKNnn.js";import{C as Z}from"./ClosePopup-DsK7QsUy.js";import{F as ge,d as be,a as we}from"./FileManagerService-B_drXciZ.js";import{B as ve}from"./BaseAvatar-XJg-8QrX.js";import"./useAxios-iI_x9o6-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./AppImage-B1uLR3Vj.js";const _e=M({__name:"PhotoView",props:{showDialog:{type:Boolean,default:!1},showDeleteImage:{type:Boolean,default:!1},maximized:{type:Boolean,default:!0},fetch:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!0},user:{type:Object,default:()=>null},files:{type:Array,default:()=>[]},images:{type:Array,default:()=>[]},selectedIndex:{type:Number,default:0}},emits:["on-close","update:showDialog","on-before-hide","on:delete"],setup(y,{expose:i,emit:o}){i();const e=y,I=X(),{fethCdnData:k}=ge(),r=h(),d=j(),f=o,{t:C}=U(),{appConfirm:z}=K(),s=h(0),u=h([]),D=h(!1),x=h(!1),Q=h(!0);G(async()=>{s.value=e.selectedIndex,await L(),Q.value=!1,document.addEventListener("keydown",S)});const V=N({get:()=>e.showDialog,set:t=>f("update:showDialog",t)}),S=t=>{t.key==="ArrowLeft"?(D.value=!0,x.value=!1,s.value>0&&s.value--):t.key==="ArrowRight"&&(D.value=!1,x.value=!0,s.value<T.value-1&&s.value++)},E=()=>{V.value=!1,f("on-close")},T=N(()=>e.files&&e.files.length?e.files.length:e.images&&e.images.length?e.images.length:0),L=async()=>{const t=e.files,m=e.images;if(t&&t.length>0)for(const n of t)if(e.fetch){const b=await P(n.filePath);b&&u.value.push(b)}else u.value.push(n.filePath);else if(m&&m.length>0)for(const n of m)if(e.fetch){const b=await P(n.image);b&&u.value.push(b)}else u.value.push(n.image);return new Promise(n=>{n(!0)})},P=async t=>{const m=await k(t);return m?new Promise(n=>{n(m)}):new Promise(n=>{n(null)})},R={props:e,$q:I,fethCdnData:k,vZoomerRef:r,authenStore:d,emit:f,t:C,appConfirm:z,slide:s,items:u,leftArrowPressed:D,rightArrowPressed:x,loading:Q,show:V,handleKeyDown:S,onClose:E,fileZise:T,setList:L,fetchImage:P,download:async()=>{if(u.value.length>0){const t=u.value[s.value];t&&be(t,we())}},deletePhoto:async()=>{await z(C("app.monogram"),C("base.deletePhotoConfirm"))&&f("on:delete",s.value)},zoomIn:()=>{r.value&&r.value.zoomIn()},zoomOut:()=>{r.value&&r.value.zoomOut()},get biX(){return J},get biThreeDotsVertical(){return W},get biDownload(){return Y},get biTrash(){return p},get biPlus(){return $},get biDash(){return ee},get biArrowLeft(){return ae},get biArrowRight(){return oe},BaseAvatar:ve};return Object.defineProperty(R,"__isScriptSetup",{enumerable:!1,value:!0}),R}}),ye={key:2,class:"q-ml-xs text-caption"},ke={class:"row items-center"};function Ce(y,i,o,e,I,k){const r=le("v-zoomer-gallery");return c(),w(he,{"model-value":e.show,onHide:e.onClose,onBeforeHide:i[3]||(i[3]=d=>y.$emit("on-before-hide")),maximized:o.maximized,"full-width":"","full-height":""},{default:l(()=>[a(ne,{class:"text-white",dark:""},{default:l(()=>[a(ie,null,{default:l(()=>{var d;return[o.user&&((d=o.user.avatar)!=null&&d.thumbnail)?(c(),w(e.BaseAvatar,{key:0,src:o.user.avatar.thumbnail,size:"32px"},null,8,["src"])):A("",!0),e.$q.screen.gt.xs?(c(),w(se,{key:1},{default:l(()=>[B(v(`${e.t("base.photo")} ${e.slide+1}/${o.files.length>0?o.files.length:o.images.length>0?o.images.length:0}`),1)]),_:1})):(c(),O("span",ye,v(`${e.slide+1}/${o.files.length>0?o.files.length:o.images.length>0?o.images.length:0}`),1)),a(g,{dense:"",flat:"",round:"",icon:e.biPlus,onClick:e.zoomIn},null,8,["icon"]),a(g,{dense:"",flat:"",round:"",icon:e.biDash,onClick:e.zoomOut},null,8,["icon"]),o.showArrow?(c(),O(re,{key:3},[a(g,{dense:"",flat:"",round:"",icon:e.biArrowLeft,disable:e.slide==0,onClick:i[0]||(i[0]=f=>e.slide=e.slide-1)},null,8,["icon","disable"]),a(g,{dense:"",flat:"",round:"",icon:e.biArrowRight,disable:e.slide==e.fileZise-1,onClick:i[1]||(i[1]=f=>e.slide=e.slide+1)},null,8,["icon","disable"])],64)):A("",!0),a(de),a(g,{flat:"",round:"",icon:e.biThreeDotsVertical},{default:l(()=>[a(ue,null,{default:l(()=>[a(ce,{style:{"min-width":"100px"}},{default:l(()=>[q((c(),w(F,{clickable:"",onClick:e.download},{default:l(()=>[a(_,{avatar:""},{default:l(()=>[a(H,{name:e.biDownload},null,8,["name"])]),_:1}),a(_,null,{default:l(()=>[B(v(e.t("base.download")),1)]),_:1})]),_:1})),[[Z]]),o.showDeleteImage&&e.authenStore&&e.authenStore.auth?q((c(),w(F,{key:0,clickable:"",onClick:e.deletePhoto},{default:l(()=>[a(_,{avatar:""},{default:l(()=>[a(H,{name:e.biTrash},null,8,["name"])]),_:1}),a(_,null,{default:l(()=>[B(v(e.t("base.delete")),1)]),_:1})]),_:1})),[[Z]]):A("",!0)]),_:1})]),_:1})]),_:1},8,["icon"]),a(g,{flat:"",round:"",icon:e.biX,onClick:e.onClose},null,8,["icon"])]}),_:1}),fe("div",ke,[a(r,{style:{width:"100%",height:"90vh","background-color":"black",cursor:"pointer"},ref:"vZoomerRef",list:e.items,modelValue:e.slide,"onUpdate:modelValue":i[2]||(i[2]=d=>e.slide=d)},null,8,["list","modelValue"]),a(me,{showing:e.loading,"label-class":"text-white"},null,8,["showing"])])]),_:1})]),_:1},8,["model-value","maximized"])}const Le=te(_e,[["render",Ce],["__scopeId","data-v-ad107b3d"],["__file","PhotoView.vue"]]);export{Le as default};