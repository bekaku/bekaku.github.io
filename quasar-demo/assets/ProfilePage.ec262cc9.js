import{bZ as _,b_ as h,d as b,bL as v,C as A,r as y,_ as C,o as O,j as P,e,w as o,Q as m,F as S,b$ as w,aJ as d,I,t as g,J as T,K as k,p as F,y as Q,B as x,i as D,bM as L}from"./index.d1ef8089.js";import{u as B}from"./useLang.15945f01.js";import{u as E}from"./use-meta.31817217.js";import{u as $}from"./useAxios.aa46c4fc.js";import{U as M}from"./UserService.c9d4c585.js";import{u as U}from"./useBase.379f5ea1.js";import{_ as V}from"./plugin-vue_export-helper.21dcd24c.js";var N=()=>{const{callAxios:a}=$();return{uploadApi:async(n,r=0)=>{const t=new FormData;return t.append(_,n),t.append(h,r.toString()),await a({API:"/api/fileManager/uploadApi",method:"POST",body:t})}}};const R={biPencilFill:w},q=b({components:{ImageCropper:v(()=>L(()=>import("./ImageCropper.64832299.js"),["assets/ImageCropper.64832299.js","assets/ImageCropper.03ed8414.css","assets/index.d1ef8089.js","assets/index.ec64cab0.css","assets/useLang.15945f01.js","assets/useBase.379f5ea1.js","assets/plugin-vue_export-helper.21dcd24c.js"]))},setup(){const{t:a}=B(),{WeeLoader:s}=U();E({title:a("page.settingsPublicProfile")});const{uploadApi:n}=N(),{updateUserAvatar:r}=M(),t=A(),u=y(!1);return{t:a,authenStore:t,dialog:u,onOkay:async i=>{s();const p=await n(i);if(p&&t.auth){await r(p.id);const c=t.auth;c.avatar&&(c.avatar.thumbnail=p.fileThumbnailPath,c.avatar.image=p.filePath)}s(!1)},onOpenCropper:()=>{u.value=!0},...R}}}),J={class:"text-h6"};function j(a,s,n,r,t,u){const f=C("image-cropper");return O(),P(S,null,[e(m,{square:"",flat:"",class:"bg-transparent q-pl-lg"},{default:o(()=>[e(d,null,{default:o(()=>[I("div",J,g(a.t("page.settingsPublicProfile")),1),e(T)]),_:1}),e(d,null,{default:o(()=>[e(m,null,{default:o(()=>[e(d,{class:"text-white bg-primary",style:{height:"100px"}},{default:o(()=>[e(k,{size:"100px",class:"shadow-10 absolute-bottom",style:{top:"20px",left:"25px"}},{default:o(()=>{var l,i;return[e(F,{"spinner-color":"white",src:(i=(l=a.authenStore.auth)==null?void 0:l.avatar)==null?void 0:i.image,style:{height:"100px","max-width":"100px"}},null,8,["src"]),e(Q,{onClick:a.onOpenCropper,flat:"",round:"",class:"absolute",icon:a.biPencilFill},{default:o(()=>[e(x,null,{default:o(()=>[D(g(a.t("base.changeAvatar")),1)]),_:1})]),_:1},8,["onClick","icon"])]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{title:a.t("cropAvatar"),dialog:a.dialog,onOnClose:s[0]||(s[0]=l=>a.dialog=!1),onOnOkay:a.onOkay},null,8,["title","dialog","onOnOkay"])],64)}var X=V(q,[["render",j]]);export{X as default};