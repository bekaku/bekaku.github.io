import{d as y,a as w,r as m,a5 as U,a6 as A,_ as Q,B as t,C as n,E as r,L as F,F as a,M as C,a7 as k,a8 as T,O as g,a9 as S,aa as B,I as l,ab as O,ac as P,ad as D,ae as f,af as v,ag as b,R as x,ah as u,H as N,ai as V,S as j}from"./index-C1BRECWX.js";import{I as z}from"./ImageCropper-CA4KFbkT.js";import{A as q}from"./AppImage-Dv_7_q5s.js";import{u as E}from"./useAppMeta-K1UR0RUG.js";import{g as L}from"./FileManagerService-CWdNIQZG.js";import"./QBar-C857vWjV.js";import"./use-meta-J1hOGrFp.js";import"./useAxios-Com3o9vK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const M=y({__name:"image-cropper",setup(h,{expose:o}){o();const{t:c}=w(),{setTitle:e}=E();e(`Image Cropper | ${c("app.name")}`);const p=m(!1),i=m(),s=m(),_={t:c,setTitle:e,showImageCroper:p,cropedUrl:i,cropedFile:s,onCloseImageCropper:()=>{p.value=!1},onDeleteFile:()=>{i.value=void 0,s.value=void 0},onCropImage:async d=>{console.log("onCropImage",d);const I=await L(d);I&&(i.value=I),s.value=d},ImageCropper:z,AppImage:q,get biPencilFill(){return U},get biTrash(){return A}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),H={class:"row"},R={class:"col-12 col-md-4"},G={class:"col-12 col-md-8 q-pa-md"},J={class:"q-gutter-sm"};function K(h,o,c,e,p,i){return t(),n(F,{padding:""},{default:r(()=>[a(j,{flat:"",bordered:"",class:"content-limit"},{default:r(()=>[a(C,null,{default:r(()=>[a(k,null,{default:r(()=>[a(T,null,{default:r(()=>o[1]||(o[1]=[g(" Image Cropper ")])),_:1}),a(S)]),_:1}),a(B)]),_:1}),a(C,null,{default:r(()=>[l("div",H,[l("div",R,[a(O,null,{default:r(()=>[a(P,{avatar:"",top:""},{default:r(()=>[a(D,{size:"75px",rounded:""},{default:r(()=>[e.cropedUrl?(t(),n(f,{key:0,"spinner-color":"white",src:e.cropedUrl},null,8,["src"])):(t(),n(f,{key:1,"spinner-color":"white",src:"/images/no_picture_thumb.jpg"})),a(v,{color:"primary",onClick:o[0]||(o[0]=s=>e.showImageCroper=!0),round:"",size:"sm",unelevated:"",style:{left:"50px"},class:"absolute-top",icon:e.biPencilFill},{default:r(()=>[a(b,null,{default:r(()=>[g(x(e.t("base.changeAvatar")),1)]),_:1})]),_:1},8,["icon"]),e.cropedFile!=null?(t(),n(v,{key:2,color:"negative",onClick:e.onDeleteFile,round:"",size:"sm",unelevated:"",style:{left:"100px"},class:"absolute-top",icon:e.biTrash},{default:r(()=>[a(b,null,{default:r(()=>[g(x(e.t("base.delete")),1)]),_:1})]),_:1},8,["icon"])):u("",!0)]),_:1})]),_:1})]),_:1})]),l("div",G,[l("div",J,[e.cropedUrl==null?(t(),n(f,{key:0,"spinner-color":"white",src:"/images/no_picture.jpg"})):u("",!0),e.cropedUrl?(t(),N(V,{key:1},[a(e.AppImage,{src:e.cropedUrl,ratio:1,alt:"1",style:{height:"250px","max-width":"250px"}},null,8,["src"]),a(e.AppImage,{src:e.cropedUrl,ratio:3/4,alt:"3/4",style:{height:"250px","max-width":"250px"}},null,8,["src"]),a(e.AppImage,{src:e.cropedUrl,ratio:16/9,alt:"16/9",style:{height:"250px","max-width":"250px"}},null,8,["src"]),o[2]||(o[2]=l("p",null,"cover",-1)),a(e.AppImage,{src:e.cropedUrl,fit:"cover",alt:"contain"},null,8,["src"]),o[3]||(o[3]=l("p",null,"contain",-1)),a(e.AppImage,{src:e.cropedUrl,fit:"contain",alt:"contain"},null,8,["src"]),o[4]||(o[4]=l("p",null,"fill",-1)),a(e.AppImage,{src:e.cropedUrl,fit:"fill",alt:"fill"},null,8,["src"]),o[5]||(o[5]=l("p",null,"scale-down",-1)),a(e.AppImage,{src:e.cropedUrl,fit:"scale-down","image-bg":""},null,8,["src"])],64)):u("",!0)])])])]),_:1})]),_:1}),a(e.ImageCropper,{title:e.t("cropAvatar"),dialog:e.showImageCroper,onOnClose:e.onCloseImageCropper,onOnOkay:e.onCropImage},null,8,["title","dialog"])]),_:1})}const ie=Q(M,[["render",K],["__file","image-cropper.vue"]]);export{ie as default};
