const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BaseImageViewDialog-Dut3KLut.js","assets/index-BUKV_9O1.js","assets/index-Fr33gqm_.css","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/BaseFilesPreviewItem.vue_vue_type_script_setup_true_lang-BN5Iltha.js","assets/BaseAvatar-YhefbKXS.js","assets/FileManagerService-DtMSDvzq.js","assets/useAxios-578BH76m.js","assets/BaseAvatar-BJnla1kf.css","assets/BaseFilesPreviewItemAlt.vue_vue_type_script_setup_true_lang-BTzkGJSH.js","assets/BaseScrollArea.vue_vue_type_script_setup_true_lang-CGGch_uA.js","assets/useAppMeta-eA7SJycm.js","assets/use-meta-BfsM_rxZ.js","assets/BasePage.vue_vue_type_script_setup_true_lang-C9gXlWUq.js","assets/BaseCard-CVr34Mor.js","assets/BaseCard-IC8sCSUl.css","assets/ClosePopup-DPKYBDjj.js","assets/BaseSwiperSlides.vue_vue_type_script_setup_true_lang-D6XU-qn_.js","assets/index-DLxukzHp.js","assets/SkeletonItem.vue_vue_type_script_setup_true_lang-C9i1fiUb.js","assets/BaseImageViewDialog-CWA4uJwq.css","assets/BasePdfViewDialog-F6gFPWhF.js","assets/BasePdfViewDialog.vue_vue_type_script_setup_true_lang-D5e756Kx.js","assets/BaseFileViewDialog-p6hIsee0.js"])))=>i.map(i=>d[i]);
import{l as X,_ as Ve,c6 as Se,u as se,a as De,bT as _e,r,o as ge,c as we,m as c,n as t,aq as te,Z as le,w as l,v as Te,t as y,x as a,a0 as b,V as I,a5 as u,bx as pe,W as V,X as D,a4 as P,cT as Le,eX as Qe,bw as he,cq as ye,ah as Q,bb as be,ct as Ne,cB as Oe,bg as Me,b7 as ne,as as ie,at as Z,av as ue,eY as ke,by as ze,J as Ce,bv as Ie,d3 as Ae,aZ as A,ar as j,aU as Fe,ad as K,ae as F,U as qe,a2 as xe,eZ as Pe,bq as Be,aP as Re,a7 as E,aO as Ue,bf as re,aK as Ze,d4 as de,d5 as fe,aA as H,au as ce,aB as Y,aJ as ee}from"./index-BUKV_9O1.js";import{_ as ae}from"./BaseFilesPreviewItem.vue_vue_type_script_setup_true_lang-BN5Iltha.js";import{_ as Ee}from"./BaseFilesPreviewItemAlt.vue_vue_type_script_setup_true_lang-BTzkGJSH.js";import{_ as He}from"./BaseScrollArea.vue_vue_type_script_setup_true_lang-CGGch_uA.js";import{u as We}from"./useAppMeta-eA7SJycm.js";import{_ as je}from"./BasePage.vue_vue_type_script_setup_true_lang-C9gXlWUq.js";import{B as W,a as me}from"./BaseCard-CVr34Mor.js";import{C as ve}from"./ClosePopup-DPKYBDjj.js";import{F as $e,k as Ke,l as Xe,m as Je,n as Ge,e as Ye,h as ea}from"./FileManagerService-DtMSDvzq.js";import{_ as aa}from"./BaseSwiperSlides.vue_vue_type_script_setup_true_lang-D6XU-qn_.js";import{B as la}from"./BaseAvatar-YhefbKXS.js";import{_ as sa}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{$ as ta}from"./index-DLxukzHp.js";import{_ as oa}from"./SkeletonItem.vue_vue_type_script_setup_true_lang-C9i1fiUb.js";const na={key:2,class:"q-ml-xs text-caption"},ia={class:"row items-center"},ua={class:"swiper-zoom-container"},ra=X({__name:"BaseImageView",props:{showDeleteImage:{type:Boolean,default:!1},fetch:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!0},user:{},files:{default:()=>[]},images:{default:()=>[]},selectedIndex:{default:0},allowKeyboard:{type:Boolean,default:!0},height:{default:"90vh"},width:{default:"100%"},dark:{type:Boolean,default:!0},closeable:{type:Boolean,default:!0}},emits:["onClose","onBeforeHide","onDelete"],setup(o,{emit:z}){const S=z,p=Ve("baseImgViewSwiperRef"),{screen:N}=Se(),{t:x}=se(),{appConfirm:_}=De(),B=_e(),{fethCdnData:h}=$e(),n=r(0),d=r([]),$=r(!1),T=r(!1),m=r(!0),v=r({speed:400,slidesPerView:1,spaceBetween:0,centeredSlides:!1,pagination:!1,initialSlide:o.selectedIndex,zoom:!0});ge(async()=>{n.value=o.selectedIndex,await M(),m.value=!1,o.allowKeyboard&&document.addEventListener("keydown",O)});const k=we(()=>d.value?d.value.length:0),O=e=>{e.key==="ArrowLeft"?($.value=!0,T.value=!1,n.value>0&&R()):e.key==="ArrowRight"&&($.value=!1,T.value=!0,n.value<k.value-1&&q())},M=async()=>{if(o.files&&o.files.length>0)for(const e of o.files)if(o.fetch){const s=await L(e.filePath);s&&d.value.push(s)}else d.value.push(e.filePath);else if(o.images&&o.images.length>0)for(const e of o.images)if(o.fetch){const s=await L(e.image);s&&d.value.push(s)}else d.value.push(e.image);return new Promise(e=>{e(!0)})},L=async e=>{const s=await h(e);return s?new Promise(i=>{i(s)}):new Promise(i=>{i(null)})},g=async()=>{if(d.value.length>0){const e=d.value[n.value];e&&Ke(e,Xe())}},f=async()=>{await _(x("app.monogram"),x("base.deletePhotoConfirm"))&&(d.value.splice(n.value,1),S("onDelete",n.value),d.value.length==0&&S("onClose"))},C=e=>{!m.value&&e&&(n.value=e.realIndex)},q=()=>{p.value&&p.value.onNext()},R=()=>{p.value&&p.value.onPrev()},J=()=>{p.value&&p.value.onZoomIn()},U=()=>{p.value&&p.value.onZoomOut()},G=()=>{S("onClose")};return(e,s)=>(t(),c(te,{class:le({"text-white":e.dark}),flat:"",dark:e.dark},{default:l(()=>[Te(e.$slots,"toolbar",{},()=>[a(Ie,null,{default:l(()=>[e.user&&e.user.avatar?.thumbnail?(t(),c(la,{key:0,src:e.user.avatar.thumbnail,size:"32px"},null,8,["src"])):b("",!0),u(N).gt.xs?(t(),c(pe,{key:1},{default:l(()=>[V(D(`${u(x)("base.photo")} ${n.value+1}/${k.value}`),1)]),_:1})):(t(),I("span",na,D(`${n.value+1}/${k.value}`),1)),a(P,{dense:"",flat:"",round:"",icon:u(Le),onClick:J},null,8,["icon"]),a(P,{dense:"",flat:"",round:"",icon:u(Qe),onClick:U},null,8,["icon"]),e.showArrow?(t(),I(Q,{key:3},[a(P,{dense:"",flat:"",round:"",icon:u(he),disable:n.value==0,onClick:s[0]||(s[0]=i=>R())},null,8,["icon","disable"]),a(P,{dense:"",flat:"",round:"",icon:u(ye),disable:n.value==k.value-1,onClick:s[1]||(s[1]=i=>q())},null,8,["icon","disable"])],64)):b("",!0),a(be),a(P,{flat:"",round:"",dense:"",icon:u(Ne)},{default:l(()=>[a(Oe,null,{default:l(()=>[a(Me,{style:{"min-width":"100px"}},{default:l(()=>[ne((t(),c(ie,{clickable:"",onClick:g},{default:l(()=>[a(Z,{avatar:""},{default:l(()=>[a(ue,{name:u(ke)},null,8,["name"])]),_:1}),a(Z,null,{default:l(()=>[V(D(u(x)("base.download")),1)]),_:1})]),_:1})),[[ve]]),e.showDeleteImage&&u(B)&&u(B).auth?ne((t(),c(ie,{key:0,clickable:"",onClick:f},{default:l(()=>[a(Z,{avatar:""},{default:l(()=>[a(ue,{name:u(ze)},null,8,["name"])]),_:1}),a(Z,null,{default:l(()=>[V(D(u(x)("base.delete")),1)]),_:1})]),_:1})),[[ve]]):b("",!0)]),_:1})]),_:1})]),_:1},8,["icon"]),e.closeable?(t(),c(P,{key:4,dense:"",flat:"",round:"",icon:u(Ce),onClick:G},null,8,["icon"])):b("",!0)]),_:1})],!0),y("div",ia,[m.value?(t(),c(Ae,{key:0,showing:m.value,"label-class":"text-white"},null,8,["showing"])):b("",!0),a(aa,{ref_key:"baseImgViewSwiperRef",ref:p,params:v.value,style:j({height:e.height,width:e.width}),class:le({"bg-black":e.dark,"bg-grey-2":!e.dark}),onOnSlideChange:C},{default:l(()=>[(t(!0),I(Q,null,A(d.value,(i,w)=>(t(),I("swiper-slide",{key:`base-img-view-${w}-${i}`},[y("div",ua,[a(Fe,{style:j({maxWidth:e.width,maxHeight:e.height}),ratio:"1",fit:"scale-down",class:"swiper-zoom-target",src:i,alt:`img-${w}`},null,8,["style","src","alt"])])]))),128))]),_:1},8,["params","style","class"])])]),_:3},8,["class","dark"]))}}),da=sa(ra,[["__scopeId","data-v-7d4044a6"]]),fa={class:"row justify-center"},ca=X({__name:"BasePdfViewCore",props:K({src:{},fitParent:{type:Boolean,default:!1},textLayer:{type:Boolean,default:!1},width:{},height:{},watermarkText:{},hideForms:{type:Boolean,default:!1}},{scale:{type:Number,default:1},scaleModifiers:{},page:{type:Number,default:1},pageModifiers:{},pagess:{type:Number,default:1},pagessModifiers:{},loading:{type:Boolean,default:!0},loadingModifiers:{}}),emits:K(["onPageChange"],["update:scale","update:page","update:pagess","update:loading"]),setup(o,{emit:z}){const S=F(o,"scale"),p=F(o,"page"),N=F(o,"pagess");F(o,"loading");const x=r(!1),{pdf:_,pages:B}=ta(o.src),h=()=>{x.value=!0,N.value=B.value};return(n,d)=>{const $=qe("pdf-vue");return t(),c(xe,null,{default:l(()=>[y("div",fa,[x.value?b("",!0):(t(),c(Pe,{key:0,query:"",color:"primary",style:{height:"5px"}})),a($,{pdf:u(_),scale:S.value,page:p.value,"fit-parent":n.fitParent,width:n.width,height:n.height,"text-layer":n.textLayer,"watermark-text":n.watermarkText,"hide-forms":n.hideForms,onLoaded:h},null,8,["pdf","scale","page","fit-parent","width","height","text-layer","watermark-text","hide-forms"])])]),_:1})}}}),ma=X({__name:"BasePdfView",props:K({title:{},src:{},fetchToServer:{type:Boolean,default:!1},showDownload:{type:Boolean,default:!0},isBlob:{type:Boolean,default:!1},scrollHeight:{default:"80vh"},minHeight:{default:"500px"},minWidth:{default:"100%"},closeable:{type:Boolean,default:!0}},{show:{type:Boolean,default:!1},showModifiers:{}}),emits:K(["on-close"],["update:show"]),setup(o,{emit:z}){const{isDark:S}=Be(),{fethCdnData:p,downloadCdnData:N}=$e(),x=z,{t:_}=se(),B=F(o,"show"),h=r(),n=r(!0),d=r(!1),$=r(),T=r(),m=r(1),v=r(1),k=r(0);ge(async()=>{O()});const O=async()=>{if(n.value=!0,o.fetchToServer){const g=await p(o.src,"axiosresponse");g&&(h.value=await Je(g),T.value=g.headers["content-type"],$.value=Ge(g),n.value=!1)}else h.value=o.src,n.value=!1},M=async()=>{if(d.value=!0,o.fetchToServer)await N(o.src,o.title);else if(o.isBlob)try{Ye(o.src,o.title||"pdf_file.pdf")}catch(g){console.error(g)}else ea(o.src,o.title||"pdf_file.pdf");d.value=!1},L=()=>{x("on-close"),B.value=!1};return(g,f)=>(t(),c(te,{flat:""},{default:l(()=>[a(Ie,null,{default:l(()=>[g.title?(t(),c(pe,{key:0},{default:l(()=>[V(D(g.title),1)]),_:1})):b("",!0),a(P,{flat:"",round:"",dense:"",icon:u(Re),onClick:f[0]||(f[0]=C=>m.value=m.value>.25?m.value-.25:m.value)},{default:l(()=>[a(E,null,{default:l(()=>f[7]||(f[7]=[V(" Zoom-")])),_:1})]),_:1},8,["icon"]),y("span",null,D(m.value*100+"%"),1),a(P,{flat:"",round:"",dense:"",icon:u(Ue),onClick:f[1]||(f[1]=C=>m.value=m.value<2?m.value+.25:m.value)},{default:l(()=>[a(E,null,{default:l(()=>f[8]||(f[8]=[V(" Zoom+")])),_:1})]),_:1},8,["icon"]),a(re,{vertical:"",class:"q-mx-xs"}),a(P,{flat:"",dense:"",round:"",icon:u(he),onClick:f[2]||(f[2]=C=>v.value=v.value>1?v.value-1:v.value)},null,8,["icon"]),y("span",null,D(v.value)+" / "+D(k.value),1),a(P,{dense:"",flat:"",round:"",icon:u(ye),onClick:f[3]||(f[3]=C=>v.value=v.value<k.value?v.value+1:v.value)},null,8,["icon"]),a(be),g.showDownload&&!n.value?(t(),c(P,{key:1,dense:"",flat:"",round:"",icon:u(ke),onClick:M},{default:l(()=>[a(E,null,{default:l(()=>[V(D(u(_)("base.download")),1)]),_:1})]),_:1},8,["icon"])):b("",!0),g.closeable?(t(),c(P,{key:2,round:"",flat:"",dense:"",icon:u(Ce),onClick:L},{default:l(()=>[a(E,null,{default:l(()=>[V(D(u(_)("base.close")),1)]),_:1})]),_:1},8,["icon"])):b("",!0)]),_:1}),a(re),y("div",{class:le({"bg-black":u(S),"bg-grey-2":!u(S)})},[y("div",{style:j({minHeight:g.minHeight,minWidth:g.minWidth})},[d.value?(t(),c(Pe,{key:0,query:"",color:"primary",class:"q-my-sm",style:{height:"5px"}})):b("",!0),n.value?(t(),I(Q,{key:1},[n.value?(t(),c(oa,{key:0,height:100,"text-number":3,flat:"",show:""})):b("",!0)],64)):h.value?(t(),c(Ze,{key:2,style:j({height:g.scrollHeight})},{default:l(()=>[a(ca,{scale:m.value,"onUpdate:scale":f[4]||(f[4]=C=>m.value=C),page:v.value,"onUpdate:page":f[5]||(f[5]=C=>v.value=C),pagess:k.value,"onUpdate:pagess":f[6]||(f[6]=C=>k.value=C),src:h.value},null,8,["scale","page","pagess","src"])]),_:1},8,["style"])):(t(),I(Q,{key:3},[V(" Error")],64))],4)],2)]),_:1}))}}),va={class:"row"},ga={class:"col-12 col-md-6"},wa={class:"row"},pa={class:"col-12 col-md-6 q-px-md"},ha={class:"row"},ya={class:"row"},ba=X({__name:"image-view",setup(o){const z=Y(()=>ee(()=>import("./BaseImageViewDialog-Dut3KLut.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))),S=Y(()=>ee(()=>import("./BasePdfViewDialog-F6gFPWhF.js"),__vite__mapDeps([21,22,1,2,4,5,6,7,3,8,9,10,11,12,13,14,15,16,17,18,19]))),p=Y(()=>ee(()=>import("./BaseFileViewDialog-p6hIsee0.js"),__vite__mapDeps([23,6,7,1,2,22,0,3,4,5,8,9,10,11,12,13,14,15,16,17,18,19,20]))),{t:N}=se(),{setTitle:x}=We();x(`Image View | ${N("app.name")}`);const{isDark:_}=Be(),B=r(0),h=r(!1),n=r([...de]),d=r(!1),$=r(),T=r(),m=r([...fe]),v=r(!1),k=r(0),O=r([]),M=r(),L=r([...de,...fe]),g=async e=>{console.log("onImgPreviewClick",e),B.value=e,h.value=!0},f=async e=>{console.log("onPdfPreviewClick",e);const s=m.value[e];s&&($.value=s.filePath,T.value=s.fileName,d.value=!0)},C=()=>{B.value=0,h.value=!1},q=e=>{console.log("onDeleteImage",e)},R=()=>{$.value=void 0,T.value=void 0,d.value=!1},J=async e=>{console.log("onMixPreviewClick",e),v.value=!1,k.value=0,O.value=[];const s=L.value[e];s&&(s.isImage&&await G(s),M.value=s,v.value=!0)},U=we(()=>L.value.filter(e=>e.isImage)),G=e=>new Promise(s=>{const i=U.value.findIndex(w=>w.id==e.id);if(i>=0){const w=U.value;for(const oe of w)oe&&O.value.push(oe);k.value=i}s(!0)});return(e,s)=>(t(),c(je,{padding:""},{default:l(()=>[a(W,{title:"Image Only"},{default:l(()=>[a(H,null,{default:l(()=>[y("div",va,[y("div",ga,[a(ce,{header:""},{default:l(()=>s[4]||(s[4]=[V("Grid")])),_:1}),y("div",wa,[(t(!0),I(Q,null,A(n.value,(i,w)=>(t(),I("div",{class:"col-4 col-md-3 q-pa-xs",key:`img-${w}-${i.fileName}`},[a(ae,{style:{"border-radius":"10px"},item:i,index:w,"show-delete":!1,"show-tooltip":"","use-thumbnail":!1,"image-size":"100%","show-name":!1,"show-size":!1,onOnClick:g},null,8,["item","index"])]))),128))])]),y("div",pa,[a(ce,{header:""},{default:l(()=>s[5]||(s[5]=[V("List")])),_:1}),a(He,{height:"310px"},{default:l(()=>[(t(!0),I(Q,null,A(n.value,(i,w)=>(t(),c(Ee,{key:`img-${w}-${i.fileName}`,item:i,index:w,clickable:"",dense:"","show-delete":!0,"show-name":"","show-size":"",onOnClick:g},null,8,["item","index"]))),128))]),_:1})])])]),_:1})]),_:1}),a(me,{title:"Image Slide"}),a(W,null,{default:l(()=>[a(H,null,{default:l(()=>[a(xe,null,{default:l(()=>[a(da,{files:n.value,"selected-index":B.value,dark:u(_),"show-delete-image":!1,"show-arrow":"",height:"350px",closeable:!1},null,8,["files","selected-index","dark"])]),_:1})]),_:1})]),_:1}),a(W,{title:"Pdf View"},{default:l(()=>[a(H,null,{default:l(()=>[s[6]||(s[6]=y("div",{class:"text-h6 q-mb-md"},"Pdf View",-1)),y("div",ha,[(t(!0),I(Q,null,A(m.value,(i,w)=>(t(),I("div",{class:"col-4 col-md-2 q-pa-xs",key:`impdfg-${w}-${i.id}`},[a(ae,{style:{"border-radius":"10px"},item:i,index:w,"show-delete":!1,"show-tooltip":"","show-name":"","show-size":"",onOnClick:f},null,8,["item","index"])]))),128))]),a(me,{title:"Pdf inline display"}),a(te,{flat:"",bordered:""},{default:l(()=>[a(ma,{src:"https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",closeable:!1,title:"compressed.tracemonkey-pldi-09.pdf"})]),_:1})]),_:1})]),_:1}),a(W,{title:"Mix item View"},{default:l(()=>[a(H,null,{default:l(()=>[y("div",ya,[(t(!0),I(Q,null,A(L.value,(i,w)=>(t(),I("div",{class:"col-4 col-md-2 q-pa-xs",key:`impdfg-${w}-${i.fileName}`},[a(ae,{style:{"border-radius":"10px"},item:i,index:w,"show-delete":!1,"show-tooltip":"","show-name":"","show-size":"","image-size":"100%",linesName:2,onOnClick:J},null,8,["item","index"])]))),128))])]),_:1})]),_:1}),h.value?(t(),c(u(z),{key:0,modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=i=>h.value=i),files:n.value,"selected-index":B.value,"show-delete-image":!0,maximized:!1,"show-arrow":"",onOnDelete:q,onOnClose:C},null,8,["modelValue","files","selected-index"])):b("",!0),d.value&&$.value?(t(),c(u(S),{key:1,modelValue:d.value,"onUpdate:modelValue":s[1]||(s[1]=i=>d.value=i),src:$.value,title:T.value,onOnClose:s[2]||(s[2]=()=>R)},null,8,["modelValue","src","title"])):b("",!0),v.value&&M.value?(t(),c(u(p),{key:2,item:M.value,"image-list":O.value,"select-index":k.value,title:"Images","show-arrow":!0,show:v.value,"onUpdate:show":s[3]||(s[3]=i=>v.value=i)},null,8,["item","image-list","select-index","show"])):b("",!0)]),_:1}))}}),Na=Object.freeze(Object.defineProperty({__proto__:null,default:ba},Symbol.toStringTag,{value:"Module"}));export{da as B,ma as _,Na as i};
