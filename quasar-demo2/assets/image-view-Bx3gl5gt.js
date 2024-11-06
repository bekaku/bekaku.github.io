const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PdfView-DLhotllt.js","assets/index-DDZXG7TO.js","assets/index-HNifYG8Q.css","assets/AppDialog-ChpWrbHv.js","assets/QBar-C1ux2P-L.js","assets/FileManagerService-CpAt8e2p.js","assets/useAxios-Oymy46L5.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/index-CDY51G8j.js","assets/PhotoView-B1lZJf9j.js","assets/ClosePopup-BEkvAfed.js","assets/BaseAvatar-B3Ajisrm.js","assets/AppImage-DZr9IbH2.js","assets/AppImage-DWpen-BO.css","assets/BaseAvatar-CgUjO2Sl.css","assets/PhotoView-cltEszSu.css"])))=>i.map(i=>d[i]);
import{d as G,aP as Y,aQ as Z,u as K,r as n,T as W,Y as z,Z as O,_ as H,B as r,H as u,C as P,ah as T,a as X,f as $,E as m,L as ee,F as l,M as k,a7 as ie,a8 as oe,O as A,a9 as se,aa as le,S as B,I as g,aE as U,aF as C,ai as N}from"./index-DDZXG7TO.js";import{F as te,a as ae}from"./FilesPreviewItemAlt-BV2-ACw1.js";import{B as ne}from"./BaseScrollArea-BYvWNVjb.js";import{u as me}from"./useAppMeta-BT_adV4U.js";import{F as re,f as fe,c as de,e as ce,h as he,i as ge,j as pe}from"./FileManagerService-CpAt8e2p.js";import"./AppImage-DZr9IbH2.js";import"./use-meta-DbSRbusI.js";import"./useAxios-Oymy46L5.js";import"./_commonjsHelpers-Cpj98o6Y.js";const we=G({__name:"FileView",props:Y({title:{},item:{},imageList:{},selectIndex:{},fetch:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!0},isBlob:{type:Boolean,default:!1}},{show:{type:Boolean,default:!1},showModifiers:{}}),emits:["update:show"],setup(V,{expose:i}){i();const d=z(()=>O(()=>import("./PdfView-DLhotllt.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),e=z(()=>O(()=>import("./PhotoView-B1lZJf9j.js"),__vite__mapDeps([9,1,2,10,5,6,7,11,12,13,14,15]))),s=V,x=Z(V,"show"),{appLoading:o}=K(),{downloadCdnData:a}=re(),_=n(!1),p=n(void 0),v=n(),I=n([]),y=n(0);W(async()=>{if(o(),await M(),s.selectIndex!=null&&s.selectIndex>=0&&(y.value=s.selectIndex),p.value=="pdf"){if(s.item.file){const t=await fe(s.item.file);t&&(v.value=t)}else v.value=s.item.filePath;_.value=!0}else p.value=="image"?(s.imageList&&s.imageList.length>0?I.value.push(...s.imageList):I.value.push(s.item),_.value=!0):(await b(),w());o(!1)});const b=async()=>{const t=s.item;if(!t||!t.filePath)return w(),new Promise(async c=>c(!1));if(s.fetch)await a(t.filePath,t.fileName||s.title);else{const c=de(t.fileMime),S=ce(c);if(c&&S)if(s.isBlob)try{he(t.filePath,t.fileName||S)}catch(F){console.error(F)}else try{ge(t.filePath,t.fileName||S)}catch(F){console.error(F)}}return new Promise(async c=>c(!0))},M=async()=>new Promise(t=>{const c=s.item;c||w(),p.value=pe(c.fileMime),t(!0)}),w=()=>{x.value=!1},j={PdfView:d,PhotoView:e,props:s,show:x,appLoading:o,downloadCdnData:a,showView:_,fileType:p,pdfSrc:v,imageItems:I,imageSelectIndex:y,onDownloadFile:b,detechFile:M,onClose:w};return Object.defineProperty(j,"__isScriptSetup",{enumerable:!1,value:!0}),j}}),ue={key:0};function xe(V,i,d,e,s,x){return d.item&&e.fileType?(r(),u("div",ue,[e.showView&&e.fileType=="pdf"&&e.pdfSrc?(r(),P(e.PdfView,{key:0,src:e.pdfSrc,"fetch-to-server":d.fetch,show:e.showView,"onUpdate:show":i[0]||(i[0]=o=>e.showView=o),title:d.item.fileName||d.title,onOnClose:e.onClose},null,8,["src","fetch-to-server","show","title"])):e.fileType=="image"&&e.showView?(r(),P(e.PhotoView,{key:1,"show-dialog":e.showView,files:e.imageItems,"selected-index":e.imageSelectIndex,"show-delete-image":!1,maximized:!1,fetch:d.fetch,showArrow:d.showArrow,onOnClose:e.onClose},null,8,["show-dialog","files","selected-index","fetch","showArrow"])):T("",!0)])):T("",!0)}const ve=H(we,[["render",xe],["__file","FileView.vue"]]),Ie=G({__name:"image-view",setup(V,{expose:i}){i();const d=z(()=>O(()=>import("./PhotoView-B1lZJf9j.js"),__vite__mapDeps([9,1,2,10,5,6,7,11,12,13,14,15]))),e=z(()=>O(()=>import("./PdfView-DLhotllt.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),{t:s}=X(),{setTitle:x}=me();x(`Image View | ${s("app.name")}`);const o=n(0),a=n(!1),_=n([{id:1,fileMime:"image/jpeg",fileName:"Img001.jpg",filePath:"https://images.pexels.com/photos/29009130/pexels-photo-29009130/free-photo-of-misty-mountain-road-in-madeira-portugal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",fileThumbnailPath:"",fileSize:"2 MB",isImage:!0},{id:2,fileMime:"image/jpeg",fileName:"Img002.jpg",filePath:"https://images.pexels.com/photos/14775022/pexels-photo-14775022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",fileThumbnailPath:"",fileSize:"2 MB",isImage:!0},{id:3,fileMime:"image/jpeg",fileName:"Img003.jpg",filePath:"https://images.pexels.com/photos/8140820/pexels-photo-8140820.jpeg",fileThumbnailPath:"",fileSize:"2 MB",isImage:!0},{id:4,fileMime:"image/jpeg",fileName:"Img004.jpg",filePath:"https://images.pexels.com/photos/27796242/pexels-photo-27796242/free-photo-of-people-standing-outside-a-store-with-the-words-good-luck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",fileThumbnailPath:"",fileSize:"2 MB",isImage:!0},{id:5,fileMime:"image/jpeg",fileName:"Img005.jpg",filePath:"https://images.pexels.com/photos/28637782/pexels-photo-28637782/free-photo-of-vintage-desert-gas-station-with-cafe-sign.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",fileThumbnailPath:"",fileSize:"2 MB",isImage:!0},{id:6,fileMime:"image/jpeg",fileName:"Img006.jpg",filePath:"https://images.pexels.com/photos/21294005/pexels-photo-21294005/free-photo-of-portrait-of-woman-blowing-dandelion-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",fileThumbnailPath:"",fileSize:"2 MB",isImage:!0},{id:7,fileMime:"image/jpeg",fileName:"Img007.jpg",filePath:"https://images.pexels.com/photos/27869817/pexels-photo-27869817/free-photo-of-two-women-sitting-on-a-couch-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",fileThumbnailPath:"",fileSize:"2 MB",isImage:!0},{id:8,fileMime:"image/jpeg",fileName:"Img008.jpg",filePath:"https://images.pexels.com/photos/28924817/pexels-photo-28924817/free-photo-of-hong-kong-island-dazzling-night-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",fileThumbnailPath:"",fileSize:"2 MB",isImage:!0},{id:9,fileMime:"image/jpeg",fileName:"Img009.jpg",filePath:"https://images.pexels.com/photos/29008754/pexels-photo-29008754/free-photo-of-scenic-desert-highway-at-sunrise-in-utah.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",fileThumbnailPath:"",fileSize:"2 MB",isImage:!0},{id:10,fileMime:"image/jpeg",fileName:"Img010.jpg",filePath:"https://images.pexels.com/photos/25244460/pexels-photo-25244460/free-photo-of-a-fashionable-young-woman-standing-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",fileThumbnailPath:"",fileSize:"2 MB",isImage:!0},{id:11,fileMime:"image/jpeg",fileName:"Img011.jpg",filePath:"https://images.pexels.com/photos/27467770/pexels-photo-27467770/free-photo-of-laptop-and-camera-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",fileThumbnailPath:"",fileSize:"2 MB",isImage:!0},{id:12,fileMime:"image/jpeg",fileName:"Img011.jpg",filePath:"https://images.pexels.com/photos/28271613/pexels-photo-28271613/free-photo-of-a-car-mirror-is-shown-in-the-side-view-of-a-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",fileThumbnailPath:"",fileSize:"2 MB",isImage:!0}]),p=n(!1),v=n(),I=n(),y=n([{id:1,fileMime:"application/pdf",fileName:"Trace-based Just-in-Time Type Specialization for Dynamic Languages",filePath:"https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",fileThumbnailPath:"",fileSize:"2 MB",isImage:!1}]),b=n(!1),M=n(0),w=n([]),j=n(),t=n(_.value.concat(y.value)),c=async f=>{console.log("onImgPreviewClick",f),o.value=f,a.value=!0},S=async f=>{console.log("onPdfPreviewClick",f);const h=y.value[f];h&&(v.value=h.filePath,I.value=h.fileName,p.value=!0)},F=()=>{v.value=void 0,I.value=void 0,p.value=!1},J=async f=>{console.log("onMixPreviewClick",f),b.value=!1,M.value=0,w.value=[];const h=t.value[f];h&&(h.isImage&&await q(h),j.value=h,b.value=!0)},L=$(()=>t.value.filter(f=>f.isImage)),q=f=>new Promise(h=>{const D=L.value.findIndex(E=>E.id==f.id);if(D>=0){const E=L.value;for(const R of E)R&&w.value.push(R);M.value=D}h(!0)}),Q={PhotoView:d,PdfView:e,t:s,setTitle:x,imageSelectIndex:o,showImageView:a,imageItems:_,showPdfView:p,pdfSrc:v,pdfName:I,pdfItems:y,showMixFiles:b,fileMixImageSelectIndex:M,fileImageItemsForView:w,fileMixForView:j,mixItems:t,onImgPreviewClick:c,onPdfPreviewClick:S,onClosePefView:F,onMixPreviewClick:J,getImageItems:L,setImagesFileView:q,FilesPreviewItem:te,FilesPreviewItemAlt:ae,BaseScrollArea:ne,FileView:ve};return Object.defineProperty(Q,"__isScriptSetup",{enumerable:!1,value:!0}),Q}}),Pe={class:"row"},_e={class:"col-12 col-md-6"},ye={class:"row"},be={class:"col-12 col-md-6 q-px-md"},Me={class:"row"},Ve={class:"row"};function je(V,i,d,e,s,x){return r(),P(ee,{padding:""},{default:m(()=>[l(B,{flat:"",bordered:"",class:"content-limit"},{default:m(()=>[l(k,null,{default:m(()=>[l(ie,null,{default:m(()=>[l(oe,null,{default:m(()=>i[4]||(i[4]=[A(" Image View ")])),_:1}),l(se)]),_:1}),l(le)]),_:1}),l(k,null,{default:m(()=>[l(B,null,{default:m(()=>[l(k,null,{default:m(()=>[i[7]||(i[7]=g("div",{class:"text-h6 q-mb-md"}," Image Only ",-1)),g("div",Pe,[g("div",_e,[l(U,{header:""},{default:m(()=>i[5]||(i[5]=[A("Grid")])),_:1}),g("div",ye,[(r(!0),u(N,null,C(e.imageItems,(o,a)=>(r(),u("div",{class:"col-4 col-md-3 q-pa-xs",key:`img-${a}-${o.fileName}`},[l(e.FilesPreviewItem,{style:{"border-radius":"10px"},item:o,index:a,"show-delete":!1,"show-tooltip":"","use-thumbnail":!1,"image-size":"100%","show-name":!1,"show-size":!1,onOnClick:e.onImgPreviewClick},null,8,["item","index"])]))),128))])]),g("div",be,[l(U,{header:""},{default:m(()=>i[6]||(i[6]=[A("List")])),_:1}),l(e.BaseScrollArea,{height:"310px"},{default:m(()=>[(r(!0),u(N,null,C(e.imageItems,(o,a)=>(r(),P(e.FilesPreviewItemAlt,{key:`img-${a}-${o.fileName}`,item:o,index:a,clickable:"",dense:"","show-delete":!0,"show-name":"","show-size":"",onOnClick:e.onImgPreviewClick},null,8,["item","index"]))),128))]),_:1})])])]),_:1})]),_:1}),l(B,{class:"q-my-md"},{default:m(()=>[l(k,null,{default:m(()=>[i[8]||(i[8]=g("div",{class:"text-h6 q-mb-md"}," Pdf View ",-1)),g("div",Me,[(r(!0),u(N,null,C(e.pdfItems,(o,a)=>(r(),u("div",{class:"col-4 col-md-2 q-pa-xs",key:`impdfg-${a}-${o.id}`},[l(e.FilesPreviewItem,{style:{"border-radius":"10px"},item:o,index:a,"show-delete":!1,"show-tooltip":"","show-name":"","show-size":"",onOnClick:e.onPdfPreviewClick},null,8,["item","index"])]))),128))])]),_:1})]),_:1}),l(B,{class:"q-my-md"},{default:m(()=>[l(k,null,{default:m(()=>[i[9]||(i[9]=g("div",{class:"text-h6 q-mb-md"}," Mix item View ",-1)),g("div",Ve,[(r(!0),u(N,null,C(e.mixItems,(o,a)=>(r(),u("div",{class:"col-4 col-md-2 q-pa-xs",key:`impdfg-${a}-${o.fileName}`},[l(e.FilesPreviewItem,{style:{"border-radius":"10px"},item:o,index:a,"show-delete":!1,"show-tooltip":"","show-name":"","show-size":"","image-size":"100%",linesName:2,onOnClick:e.onMixPreviewClick},null,8,["item","index"])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),e.showImageView?(r(),P(e.PhotoView,{key:0,"show-dialog":e.showImageView,files:e.imageItems,"selected-index":e.imageSelectIndex,"show-delete-image":!1,maximized:!1,"show-arrow":"",onOnClose:i[0]||(i[0]=()=>e.showImageView=!1)},null,8,["show-dialog","files","selected-index"])):T("",!0),e.showPdfView&&e.pdfSrc?(r(),P(e.PdfView,{key:1,src:e.pdfSrc,show:e.showPdfView,"onUpdate:show":i[1]||(i[1]=o=>e.showPdfView=o),title:e.pdfName,onOnClose:i[2]||(i[2]=()=>e.onClosePefView)},null,8,["src","show","title"])):T("",!0),e.showMixFiles&&e.fileMixForView?(r(),P(e.FileView,{key:2,item:e.fileMixForView,"image-list":e.fileImageItemsForView,"select-index":e.fileMixImageSelectIndex,title:"Images","show-arrow":!0,show:e.showMixFiles,"onUpdate:show":i[3]||(i[3]=o=>e.showMixFiles=o)},null,8,["item","image-list","select-index","show"])):T("",!0)]),_:1})}const Le=H(Ie,[["render",je],["__file","image-view.vue"]]);export{Le as default};