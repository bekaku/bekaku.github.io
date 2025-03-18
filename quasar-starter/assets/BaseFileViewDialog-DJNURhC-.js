import{F,f as V,c as p,d as P,e as x,h as I,i as M}from"./FileManagerService-CYEX_33d.js";import{l as N,aa as b,ab as k,a as C,r as n,o as L,ac as D,X as v,n as u,m as h}from"./index-D_to5wmt.js";import{_ as E}from"./BasePdfViewDialog.vue_vue_type_script_setup_true_lang-CvxGzLJl.js";import S from"./BaseImageViewDialog-CUGxBiyj.js";import"./useAxios-BVW2bjHp.js";import"./image-view-C8dLhhv8.js";import"./FilesPreviewItem.vue_vue_type_script_setup_true_lang-BwW_YL_o.js";import"./BaseAvatar-D6UCgu2h.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FilesPreviewItemAlt.vue_vue_type_script_setup_true_lang-D-WGlcX8.js";import"./BaseScrollArea.vue_vue_type_script_setup_true_lang-DrSZhysz.js";import"./useAppMeta-B2j8xE5P.js";import"./use-meta-Bp6Eaay9.js";import"./BasePage.vue_vue_type_script_setup_true_lang-CemhdidO.js";import"./BaseCard-BeCehtGl.js";import"./ClosePopup-B74q-YkR.js";import"./BaseSwiperSlides.vue_vue_type_script_setup_true_lang-CVYGojIL.js";import"./index-B36cy2Uc.js";import"./SkeletonItem.vue_vue_type_script_setup_true_lang-D9AnSgc5.js";const T={key:0},ae=N({__name:"BaseFileViewDialog",props:b({title:{},item:{},imageList:{},selectIndex:{},fetch:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!0},isBlob:{type:Boolean,default:!1}},{show:{type:Boolean,default:!1},showModifiers:{}}),emits:["update:show"],setup(a){const w=k(a,"show"),{appLoading:d}=C(),{downloadCdnData:g}=F(),l=n(!1),o=n(void 0),m=n(),r=n([]),c=n(0);L(async()=>{if(d(),await B(),a.selectIndex!=null&&a.selectIndex>=0&&(c.value=a.selectIndex),o.value=="pdf"){if(a.item.file){const e=await V(a.item.file);e&&(m.value=e)}else m.value=a.item.filePath;l.value=!0}else o.value=="image"?(a.imageList&&a.imageList.length>0?r.value.push(...a.imageList):r.value.push(a.item),l.value=!0):(await y(),s());d(!1)});const y=async()=>{const e=a.item;if(!e||!e.filePath)return s(),new Promise(t=>t(!1));if(a.fetch)await g(e.filePath,e.fileName||a.title);else{const t=p(e.fileMime),i=P(t);if(t&&i)if(a.isBlob)try{x(e.filePath,e.fileName||i)}catch(f){console.error(f)}else try{I(e.filePath,e.fileName||i)}catch(f){console.error(f)}}return new Promise(t=>t(!0))},B=async()=>new Promise(e=>{a.item||s(),o.value=M(a.item.fileMime),e(!0)}),s=()=>{w.value=!1};return(e,t)=>e.item&&o.value?(u(),D("div",T,[l.value&&o.value=="pdf"&&m.value?(u(),h(E,{key:0,modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=i=>l.value=i),src:m.value,"fetch-to-server":e.fetch,title:e.item.fileName||e.title,onOnClose:s},null,8,["modelValue","src","fetch-to-server","title"])):o.value=="image"&&l.value?(u(),h(S,{key:1,modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=i=>l.value=i),files:r.value,"selected-index":c.value,"show-delete-image":!1,maximized:!1,fetch:e.fetch,"show-arrow":e.showArrow,onOnClose:s},null,8,["modelValue","files","selected-index","fetch","show-arrow"])):v("",!0)])):v("",!0)}});export{ae as default};
