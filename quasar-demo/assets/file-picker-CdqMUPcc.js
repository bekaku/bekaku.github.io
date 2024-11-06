import{d as S,_ as A,B as _,H as P,ai as M,aX as j,aL as N,F as i,ah as y,aC as T,u as G,a as D,aD as q,r as g,b2 as K,dZ as Y,d_ as X,d$ as $,aI as ee,e0 as le,e1 as ie,e2 as oe,ak as Z,I as p,E as r,ab as te,ac as x,N as ae,aW as ne,O as k,R as se,af as re,b9 as W,C as w,bW as de,dI as me,dJ as ce,al as ue,am as fe,au as ve,e3 as O,e4 as pe,e5 as Fe,cz as _e,cy as be,bP as ge,L as Pe,M as L,a7 as we,a8 as Ie,a9 as ke,aa as R,$ as ye,a_ as Se,ag as Ae,S as he}from"./index-C_yxR0el.js";import{U as Ce}from"./Button-ABnwyzUg.js";import{F as Ue,a as xe}from"./FilesPreviewItemAlt-DEJ8X77v.js";import{z as Re,n as Be,g as Ve}from"./FileManagerService-j-GgVOgm.js";import{u as ze}from"./useAppMeta-CXPOhSgr.js";import{B as Qe}from"./BaseAvatar-C2uiHoh1.js";import"./AppImage-BJRdTOBw.js";import"./useAxios-D6zl6uXP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-meta-CSDCNMcV.js";const Ee=S({__name:"FilesPreview",props:{showDelete:{type:Boolean,default:!0},col:{default:"col-3 q-pa-md"},items:{},formatSize:{type:Boolean}},emits:["on-remove"],setup(u,{expose:l,emit:o}){l();const e=o,c={emit:e,onRemove:n=>{e("on-remove",n)},FilesPreviewItem:Ue};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),Te={key:0,class:"row"};function qe(u,l,o,e,v,c){return o.items.length>0?(_(),P("div",Te,[(_(!0),P(M,null,j(o.items,(n,d)=>(_(),P("div",{class:N([o.col,"div-style q-pa-md"]),key:`f-${d}-${n.fileName}`},[i(e.FilesPreviewItem,{item:n,index:d,onOnRemove:e.onRemove,"show-delete":o.showDelete,"format-size":o.formatSize},null,8,["item","index","show-delete","format-size"])],2))),128))])):y("",!0)}const H=A(Ee,[["render",qe],["__file","FilesPreview.vue"]]),Oe=S({__name:"FilePicker",props:T({multiple:{type:Boolean,default:!1},showPreview:{type:Boolean,default:!0},icon:{default:Y},label:{},accept:{default:X},wildcard:{type:Boolean},maxFiles:{default:$}},{modelValue:{default:()=>[]},modelModifiers:{},fileItems:{default:()=>[]},fileItemsModifiers:{}}),emits:T(["onFileAdd"],["update:modelValue","update:fileItems"]),setup(u,{expose:l,emit:o}){const e=u,{appToast:v}=G(),{t:c}=D(),n=q(u,"modelValue"),d=q(u,"fileItems"),F=g([]),s=o,f=g(),b=()=>{if(e.maxFiles>0&&n.value&&n.value.length==e.maxFiles){v(c("error.limitFile2",{total:e.maxFiles}),{type:"negative"});return}f.value&&f.value.$el.click()},B=a=>{a&&a.stopPropagation(),n.value=[],F.value=[]},V=a=>{v(c("error.filesValidationFmt",{total:a.length}),{type:"negative"})},h=async a=>{const t=[];for(const m of a){const J=m.type;if(m.size>le)v(c("error.limitEachFile2",[m.name,ie]),{multiLine:!1,type:"negative"});else if(oe.includes(J))t.push(m);else{const E=await Re(m);E&&t.push(E)}}return new Promise(m=>{m(t)})},z=async a=>{const t=await h(a);if(s("onFileAdd",t),e.multiple){if(t&&t.length>0)for(const m of t)await I(m)}else t&&(n.value=[],d.value=[],await I(t));F.value=[]},I=async a=>{const t=Be(a);let m;t&&(m=await Ve(a)),C(a,t,m)},C=(a,t,m=void 0)=>{n.value&&(n.value.push(a),d.value.push({id:0,fileMime:a.type,fileName:a.name,filePath:m||"",fileThumbnailPath:"",fileSize:a.size+"",functionId:0,isImage:t,file:a}))},Q=a=>{n.value&&(n.value.splice(a,1),d.value.splice(a,1))};K(()=>{n.value=[],d.value=[],F.value=[]}),l({openFilePicker:b});const U={props:e,appToast:v,t:c,modelValue:n,fileItems:d,modelImageFiles:F,emit:s,appFileInputRef:f,openFilePicker:b,onClear:B,onRejected:V,validateAndZipFile:h,onFileAdded:z,onAddFile:I,onAddFilePreview:C,onRemoveNewImage:Q,get biX(){return ee},FilesPreview:H};return Object.defineProperty(U,"__isScriptSetup",{enumerable:!1,value:!0}),U}}),Le={class:"row"},Me={key:0,class:"col-12 col-md-8 q-pa-md"};function je(u,l,o,e,v,c){return _(),P("div",me(ce(u.$attrs)),[Z(u.$slots,"default",{},()=>[p("div",Le,[p("div",{class:N(["col-12 q-pa-md",{"col-md-4":o.showPreview}])},[i(W,{bordered:"",class:"app-border-radius"},{default:r(()=>[i(te,{clickable:"",onClick:e.openFilePicker},{default:r(()=>[i(x,{avatar:""},{default:r(()=>[i(ae,{name:o.icon},null,8,["name"])]),_:1}),i(x,null,{default:r(()=>[i(ne,null,{default:r(()=>[k(se(o.label?o.label:e.t("base.chooseFile")),1)]),_:1})]),_:1}),i(x,{side:""},{default:r(()=>[i(re,{onClick:e.onClear,round:"",flat:"",icon:e.biX},null,8,["icon"])]),_:1})]),_:1})]),_:1})],2),o.showPreview?(_(),P("div",Me,[e.fileItems.length>0&&e.modelValue&&e.modelValue.length>0?(_(),w(e.FilesPreview,{key:0,items:e.fileItems,onOnRemove:e.onRemoveNewImage,"format-size":""},null,8,["items"])):y("",!0)])):y("",!0)])]),i(de,{style:{display:"none"},ref:"appFileInputRef",filled:"","max-files":o.maxFiles,"bottom-slots":"",modelValue:e.modelImageFiles,"onUpdate:modelValue":[l[0]||(l[0]=n=>e.modelImageFiles=n),e.onFileAdded],label:o.label?o.label:e.t("base.chooseFile"),counter:"",multiple:o.multiple,accept:o.wildcard?void 0:o.accept,onRejected:e.onRejected},null,8,["max-files","modelValue","label","multiple","accept"])],16)}const Ne=A(Oe,[["render",je],["__file","FilePicker.vue"]]),De=S({__name:"ScrollArea",props:{height:{default:"420px"}},setup(u,{expose:l}){l();const o={};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function Xe(u,l,o,e,v,c){return _(),w(fe,{style:ue({height:o.height}),"content-active-style":"width: 100%;","content-style":"width: 100%;"},{default:r(()=>[Z(u.$slots,"default")]),_:3},8,["style"])}const Ze=A(De,[["render",Xe],["__file","ScrollArea.vue"]]),We=S({__name:"file-picker",setup(u,{expose:l}){l();const o=ve(),{t:e}=D(),{setTitle:v}=ze();v(`File picker | ${e("app.name")}`);const c=g([]),n=g([]),d=O("filePickerCustomUiRef"),F=g([]),s=O("filePickerCustomUi2Ref"),f=g([]),b=g(),a={authenStore:o,t:e,setTitle:v,files:c,filesPreview:n,filePickerCustomUiRef:d,customFiles:F,filePickerCustomUi2Ref:s,custom2Files:f,message:b,onFileAdd:t=>{console.log("onFildAdd",t)},onSubmit:()=>{console.log("onSubmit",c.value,"filesPreview",n.value)},openPicker:()=>{d.value&&d.value.openFilePicker()},onCustomFileAdd:t=>{console.log("onCustomFileAdd",t)},onCustomRemove:t=>{F.value&&F.value.splice(t,1)},openPicker2:()=>{s.value&&s.value.openFilePicker()},onCustomFileAdd2:t=>{console.log("onCustomFileAdd",t)},onCustomRemove2:t=>{f.value&&f.value.splice(t,1)},UiButton:Ce,UiFilePicker:Ne,UiScrollArea:Ze,get FileExtensionAccept(){return X},get biFileArrowUp(){return pe},get biUpload(){return Fe},get biSend(){return _e},get biEmojiSmile(){return be},get biImage(){return ge},BaseAvatar:Qe,FilesPreview:H,FilesPreviewItemAlt:xe};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),He={class:"row"},Je={class:"col-12 q-pa-md"},Ge={class:"col-12 q-pa-md"},Ke={class:"col-12 q-pa-md"},Ye={class:"row"},$e={class:"col-12 col-md-6 q-pa-md"},el={class:"col-12 col-md-6 q-pa-md"};function ll(u,l,o,e,v,c){return _(),w(Pe,{padding:""},{default:r(()=>[i(he,{flat:"",bordered:"",class:"content-limit"},{default:r(()=>[i(L,null,{default:r(()=>[i(we,null,{default:r(()=>[i(Ie,null,{default:r(()=>l[5]||(l[5]=[k(" file-picker ")])),_:1}),i(ke)]),_:1}),i(R)]),_:1}),i(L,null,{default:r(()=>{var n,d,F;return[p("div",He,[p("div",Je,[l[7]||(l[7]=p("div",{class:"text-h5"}," Simple Picker ",-1)),i(e.UiFilePicker,{multiple:"",modelValue:e.files,"onUpdate:modelValue":l[0]||(l[0]=s=>e.files=s),fileItems:e.filesPreview,"onUpdate:fileItems":l[1]||(l[1]=s=>e.filesPreview=s),icon:e.biFileArrowUp,"show-preview":"",accept:e.FileExtensionAccept,onOnFileAdd:e.onFileAdd,label:e.t("base.chooseFile")},null,8,["modelValue","fileItems","icon","accept","label"]),i(e.UiButton,{class:"q-my-md",onClick:e.onSubmit},{default:r(()=>l[6]||(l[6]=[k(" Submit ")])),_:1}),i(R)]),p("div",Ge,[l[8]||(l[8]=p("div",{class:"text-h5"}," Custom Ui ",-1)),i(e.UiFilePicker,{ref:"filePickerCustomUiRef",multiple:"",fileItems:e.customFiles,"onUpdate:fileItems":l[2]||(l[2]=s=>e.customFiles=s),accept:e.FileExtensionAccept,onOnFileAdd:e.onCustomFileAdd},{default:r(()=>[i(e.UiButton,{class:"q-my-md",onClick:e.openPicker,outline:"",icon:e.biUpload,label:"Open Picker"},null,8,["icon"])]),_:1},8,["fileItems","accept"]),i(e.FilesPreview,{items:e.customFiles,onOnRemove:e.onCustomRemove,"format-size":"",col:"col-4 col-md-2 q-pa-md"},null,8,["items"]),i(R)]),p("div",Ke,[l[10]||(l[10]=p("div",{class:"text-h5 q-pb-md"}," Custom Ui2 ",-1)),p("div",Ye,[p("div",$e,[i(e.UiFilePicker,{style:{display:"none"},ref:"filePickerCustomUi2Ref",multiple:"",fileItems:e.custom2Files,"onUpdate:fileItems":l[3]||(l[3]=s=>e.custom2Files=s),accept:e.FileExtensionAccept,"max-files":5,onOnFileAdd:e.onCustomFileAdd2},null,8,["fileItems","accept"]),i(ye,{outlined:"",modelValue:e.message,"onUpdate:modelValue":l[4]||(l[4]=s=>e.message=s),type:"textarea",autogrow:"",label:"Type message"},Se({before:r(()=>[i(e.UiButton,{round:"",flat:"",icon:e.biImage,color:"grey-7",onClick:e.openPicker2},null,8,["icon"]),i(e.UiButton,{round:"",flat:"",icon:e.biEmojiSmile,color:"grey-7"},null,8,["icon"])]),after:r(()=>[i(e.UiButton,{flat:"",round:"",icon:e.biSend,color:"primary"},{default:r(()=>[i(Ae,null,{default:r(()=>l[9]||(l[9]=[k(" Send ")])),_:1})]),_:1},8,["icon"])]),_:2},[(F=(d=(n=e.authenStore)==null?void 0:n.auth)==null?void 0:d.avatar)!=null&&F.thumbnail?{name:"prepend",fn:r(()=>{var s,f,b;return[i(e.BaseAvatar,{src:(b=(f=(s=e.authenStore)==null?void 0:s.auth)==null?void 0:f.avatar)==null?void 0:b.thumbnail},null,8,["src"])]}),key:"0"}:void 0]),1032,["modelValue"])]),p("div",el,[e.custom2Files!=null&&e.custom2Files.length>0?(_(),w(W,{key:0},{default:r(()=>[i(e.UiScrollArea,{height:"250px"},{default:r(()=>[(_(!0),P(M,null,j(e.custom2Files,(s,f)=>(_(),w(e.FilesPreviewItemAlt,{key:`f-${s.id}-${f}`,item:s,index:f,onOnRemove:e.onCustomRemove2,dense:"","format-size":"","image-size":"100px","show-delete":""},null,8,["item","index"]))),128))]),_:1})]),_:1})):y("",!0)])])])])]}),_:1})]),_:1})]),_:1})}const fl=A(We,[["render",ll],["__file","file-picker.vue"]]);export{fl as default};
