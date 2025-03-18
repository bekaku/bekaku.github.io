import{l as S,ac as m,X as y,n as r,af as z,aY as B,aq as q,x as d,m as $,aa as b,d1 as D,a as E,u as U,ab as k,r as P,h as O,p as j,q as H,t as I,v as Q,a0 as V,Z,w as X,dR as Y,dS as G,cE as J,cD as K,dT as W,dU as _,dV as x}from"./index-D_to5wmt.js";import{j as ee,a as le,z as ae}from"./FileManagerService-CYEX_33d.js";import{B as ie}from"./BaseButton-RINx7LWR.js";import{_ as te}from"./FilesPreviewItemAlt.vue_vue_type_script_setup_true_lang-D-WGlcX8.js";import{_ as se}from"./FilesPreviewItem.vue_vue_type_script_setup_true_lang-BwW_YL_o.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ne={key:0,class:"row"},re={key:1,class:"col"},me=S({__name:"BaseFilesPreview",props:{showDelete:{type:Boolean,default:!0},col:{default:"col-3 q-pa-md"},items:{},formatSize:{type:Boolean},gallery:{type:Boolean,default:!0},imageSize:{}},emits:["on-remove"],setup(n,{emit:f}){const c=f,u=a=>{c("on-remove",a)};return(a,t)=>a.items.length>0?(r(),m("div",ne,[a.gallery?(r(!0),m(z,{key:0},B(a.items,(s,o)=>(r(),m("div",{key:`f-${o}-${s.fileName}`,class:q([a.col,"div-style q-pa-md"])},[d(se,{item:s,index:o,"show-delete":a.showDelete,"format-size":a.formatSize||!1,onOnRemove:u},null,8,["item","index","show-delete","format-size"])],2))),128)):(r(),m("div",re,[(r(!0),m(z,null,B(a.items,(s,o)=>(r(),$(te,{key:`f-alt-${o}-${s.fileName}`,item:s,index:o,dense:"","show-delete":a.showDelete,"format-size":a.formatSize||!1,"image-size":a.imageSize||"",onOnRemove:u},null,8,["item","index","show-delete","format-size","image-size"]))),128))]))])):y("",!0)}}),ue={key:0,class:"row"},de={class:"col-12 div-preview"},fe=S({__name:"BaseFilePicker",props:b({multiple:{type:Boolean,default:!0},showPreview:{type:Boolean,default:!0},gallery:{type:Boolean,default:!1},icon:{default:()=>K},label:{},accept:{default:()=>J},wildcard:{type:Boolean},maxFiles:{default:()=>G},previewHieight:{default:"250px"}},{modelValue:{default:()=>[]},modelModifiers:{},fileItems:{default:()=>[]},fileItemsModifiers:{}}),emits:b(["on-file-add"],["update:modelValue","update:fileItems"]),setup(n,{expose:f,emit:c}){D(e=>({ec624e68:e.previewHieight}));const{appToast:u}=E(),{t:a}=U(),t=k(n,"modelValue"),s=k(n,"fileItems"),o=P([]),R=c,p=P(),h=()=>{if(n.multiple&&n.maxFiles>0&&t.value&&t.value.length==n.maxFiles){u(a("error.limitFile2",{total:n.maxFiles}),{type:"negative"});return}p.value&&p.value.$el.click()},F=()=>{t.value=[],o.value=[],s.value=[]},A=e=>{u(a("error.filesValidationFmt",{total:e.length}),{type:"negative"})},N=async e=>{const i=[];for(const l of e){const v=l.type;if(l.size>W)u(a("error.limitEachFile2",[l.name,_]),{multiLine:!1,type:"negative"});else if(x.includes(v))i.push(l);else{const w=await ae(l);w&&i.push(w)}}return new Promise(l=>{l(i)})},C=async e=>{const i=Array.isArray(e)?e:[e],l=await N(i);if(R("on-file-add",l),n.multiple){if(l&&l.length>0)for(const v of l)await g(v)}else l&&(t.value=[],s.value=[],await g(l[0]));o.value=[]},g=async e=>{const i=ee(e);let l;i&&(l=await le(e)),L(e,i,l)},L=(e,i,l=void 0)=>{t.value&&(t.value.push(e),s.value.push({id:0,fileMime:e.type,fileName:e.name,filePath:l||"",fileThumbnailPath:"",fileSize:e.size+"",functionId:0,isImage:i,file:e}))},M=e=>{!t.value||t.value.length==0||(n.multiple?T(e):F())},T=e=>{t.value=t.value.filter((i,l)=>l!=e),s.value=s.value.filter((i,l)=>l!=e),o.value=o.value.filter((i,l)=>l!=e)};return O(()=>{F()}),f({openFilePicker:h}),(e,i)=>(r(),m("div",j(H(e.$attrs)),[I("div",{class:"cursor-pointer div",onClick:h},[Q(e.$slots,"default",{},()=>[d(ie,{icon:e.icon,outline:"",label:e.label?e.label:V(a)("base.chooseFile")},null,8,["icon","label"])],!0)]),d(Z,null,{default:X(()=>[e.showPreview?(r(),m("div",ue,[I("div",de,[s.value.length>0&&t.value&&t.value.length>0?(r(),$(me,{key:0,gallery:e.gallery,items:s.value,"format-size":"",onOnRemove:M},null,8,["gallery","items"])):y("",!0)])])):y("",!0)]),_:1}),d(Y,{ref_key:"appFileInputRef",ref:p,modelValue:o.value,"onUpdate:modelValue":[i[0]||(i[0]=l=>o.value=l),C],style:{display:"none"},filled:"","max-files":e.maxFiles,"bottom-slots":"",label:e.label?e.label:V(a)("base.chooseFile"),counter:"",multiple:e.multiple,accept:e.wildcard?void 0:e.accept,onRejected:A},null,8,["modelValue","max-files","label","multiple","accept"])],16))}}),we=oe(fe,[["__scopeId","data-v-081490b0"]]);export{we as B,me as _};
