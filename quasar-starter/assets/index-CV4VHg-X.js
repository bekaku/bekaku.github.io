const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BaseToggle-e5O9zh2Y.js","assets/BaseToggle.vue_vue_type_script_setup_true_lang-Sg3I7Jxh.js","assets/index-D_to5wmt.js","assets/index-DurpC8Fs.css","assets/BaseImageCropperDialog-LkVEPnf5.js","assets/BaseImageCropper.vue_vue_type_script_setup_true_lang-BVdvRcyz.js","assets/FileManagerService-CYEX_33d.js","assets/useAxios-BVW2bjHp.js","assets/BaseFilePicker-DNuDUVfM.js","assets/BaseButton-RINx7LWR.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/BaseButton-CM0Q31Ev.css","assets/FilesPreviewItemAlt.vue_vue_type_script_setup_true_lang-D-WGlcX8.js","assets/BaseAvatar-D6UCgu2h.js","assets/BaseAvatar-BJnla1kf.css","assets/FilesPreviewItem.vue_vue_type_script_setup_true_lang-BwW_YL_o.js","assets/BaseFilePicker-Dq96Uecd.css","assets/BaseScrollArea.vue_vue_type_script_setup_true_lang-DrSZhysz.js","assets/BaseDialog.vue_vue_type_script_setup_true_lang-B-1gXN7U.js","assets/QBar-PMjTcIWy.js","assets/Ellipsis-CbAUlcmJ.js","assets/Ellipsis-D-gyw0_d.css"])))=>i.map(i=>d[i]);
import{l as S,u as O,r as b,c as L,m as v,n as f,ao as q,w as o,x as l,t as m,a4 as x,a0 as e,aH as E,aB as N,X as g,aA as F,aG as R,$ as M,ax as X,az as z,cR as G,aI as I,a as H,bO as W,cX as U,a2 as k,a3 as B}from"./index-D_to5wmt.js";import{F as j}from"./FileManagerService-CYEX_33d.js";import{U as D}from"./UserService-BMcjQIdV.js";import{u as J}from"./useValidation-jNRx7Mqs.js";import{_ as P}from"./UserCard.vue_vue_type_script_setup_true_lang-C7sSX5Wz.js";import{u as K}from"./useAppMeta-B2j8xE5P.js";import{B as A}from"./BaseButton-RINx7LWR.js";import{B as Y}from"./BaseCard-BeCehtGl.js";import{_ as Z}from"./SettingLayout.vue_vue_type_script_setup_true_lang-Be-yDEIt.js";import"./useAxios-BVW2bjHp.js";import"./BaseAvatar-D6UCgu2h.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-meta-Bp6Eaay9.js";import"./BaseMenuItems.vue_vue_type_style_index_0_lang-6S0p1Fb-.js";import"./BasePage.vue_vue_type_script_setup_true_lang-CemhdidO.js";const ee={class:"text-h6"},ae={class:"row"},te={class:"col-12 col-md-6 q-pa-md"},oe={class:"col-12 col-md-6 q-pa-md"},le={class:"col-12 col-md-12 q-pa-md"},se=S({__name:"SettingPersonal",emits:["on-finish"],setup(Q,{emit:h}){const r=F(()=>I(()=>import("./BaseToggle-e5O9zh2Y.js"),__vite__mapDeps([0,1,2,3]))),{t:i}=O(),{updatePersonalData:C}=D(),{required:V}=J(),s=b({fullName:"",positionName:"",teamLeaderName:"",autoFollowUser:!0,initialConfig:!0}),t=b(!1),d=h,p=L(()=>s.value.fullName&&s.value.fullName.length>=4),_=async()=>{t.value=!0,await C(s.value),t.value=!1,d("on-finish")};return(w,u)=>(f(),v(q,{flat:"",bordered:""},{default:o(()=>[l(z,null,{default:o(()=>[m("div",ee,x(e(i)("base.privateData")),1),l(E,{onSubmit:_},{default:o(()=>[m("div",ae,[m("div",te,[l(N,{outlined:"",modelValue:s.value.fullName,"onUpdate:modelValue":u[0]||(u[0]=c=>s.value.fullName=c),label:e(i)("base.editName"),rules:[e(V)]},null,8,["modelValue","label","rules"])]),m("div",oe,[l(N,{outlined:"",modelValue:s.value.positionName,"onUpdate:modelValue":u[1]||(u[1]=c=>s.value.positionName=c),label:e(i)("model.user_data.positionName"),rules:[e(V)]},null,8,["modelValue","label","rules"])])]),m("div",le,[s.value.autoFollowUser!=null?(f(),v(e(r),{key:0,label:e(i)("base.other"),modelValue:s.value.autoFollowUser,"onUpdate:modelValue":u[2]||(u[2]=c=>s.value.autoFollowUser=c)},null,8,["label","modelValue"])):g("",!0)]),l(R,{align:"right"},{default:o(()=>[l(M,{disable:!p.value,unelevated:"",color:"primary",icon:e(X),label:e(i)("base.okay"),type:"submit"},null,8,["disable","icon","label"])]),_:1})]),_:1})]),_:1}),l(G,{showing:t.value,label:e(i)("base.pleaseWait"),"label-class":"text-primary"},null,8,["showing","label"])]),_:1}))}}),ie={class:"text-white absolute-right q-pa-md"},ne={class:"text-white absolute-center"},re={class:"absolute-bottom",style:{top:"55px"}},we=S({__name:"index",setup(Q){const h=F(()=>I(()=>import("./BaseImageCropperDialog-LkVEPnf5.js"),__vite__mapDeps([4,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])));K();const{t:r}=O(),{appLoading:i}=H(),{uploadApi:C}=j(),{updateUserAvatar:V,updateUserCover:s}=D(),t=W(),d=b(!1),p=b(!1),_=b(void 0),w=async y=>{i();const a=await C(y);if(a&&t.auth&&a.id){await V(a.id);const n=t.auth;n.avatar&&(n.avatar.thumbnail=a.fileThumbnailPath,n.avatar.image=a.filePath)}i(!1)},u=()=>{d.value=!0},c=()=>{p.value=!0},$=async y=>{i();const a=await C(y);if(a&&t.auth&&a.id){await s(a.id);const n=t.auth;n.cover={thumbnail:a.fileThumbnailPath,image:a.filePath}}i(!1)},T=()=>{console.log("onCoverCropClose"),_.value=void 0,p.value=!1};return(y,a)=>(f(),v(Z,null,{content:o(()=>[l(Y,null,{default:o(()=>[e(t).auth?(f(),v(P,{key:0,"avatar-image":e(t).auth?.avatar?.image,"cover-image":e(t).loginedCover,name:e(t).loginedDisplay,description:e(r)("app.name"),height:"250px","avatar-top":"110px","description-style":"margin-top:35px"},{extra:o(()=>[m("div",ie,[l(A,{round:"",unelevated:"",color:"pink",icon:e(U),onClick:c},{default:o(()=>[l(k,null,{default:o(()=>[B(x(e(r)("base.changeCover")),1)]),_:1})]),_:1},8,["icon"])]),m("div",ne,[m("div",re,[l(A,{round:"",icon:e(U),color:"pink",onClick:u},{default:o(()=>[l(k,null,{default:o(()=>[B(x(e(r)("base.changeAvatar")),1)]),_:1})]),_:1},8,["icon"])])])]),_:1},8,["avatar-image","cover-image","name","description"])):g("",!0)]),_:1}),l(se)]),default:o(()=>[d.value?(f(),v(e(h),{key:0,modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=n=>d.value=n),title:e(r)("cropAvatar"),onOnSubmit:w,onOnClose:a[1]||(a[1]=n=>d.value=!1)},null,8,["modelValue","title"])):g("",!0),p.value?(f(),v(e(h),{key:1,modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=n=>p.value=n),title:e(r)("base.changeCover"),ratio:16/9,onOnClose:T,onOnSubmit:$},{preview:o(()=>[e(t).auth&&_.value?(f(),v(P,{key:0,"avatar-image":e(t).auth?.avatar?.image,"cover-image":_.value,name:e(t).loginedDisplay,description:e(r)("app.name"),height:"250px","avatar-top":"110px","avatar-flat":"",flat:"","description-style":"margin-top:35px"},null,8,["avatar-image","cover-image","name","description"])):g("",!0)]),_:1},8,["modelValue","title"])):g("",!0)]),_:1}))}});export{we as default};
