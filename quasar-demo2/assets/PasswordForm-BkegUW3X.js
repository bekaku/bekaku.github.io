const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AppAlert--MbQk4YR.js","assets/index-BzL-CGt2.js","assets/index-HNifYG8Q.css"])))=>i.map(i=>d[i]);
import{d as F,aC as v,a as q,r as _,aD as c,f as S,aH as M,bc as Q,bz as N,bd as I,be as U,Y as T,Z as H,_ as O,B as i,C as u,E as n,F as a,bf as j,M as k,I as m,H as z,$ as f,N as t,ah as w,aK as K,bg as R,af as Y,S as Z}from"./index-BzL-CGt2.js";import{u as G}from"./useValidation-B8t9Tu1X.js";const J=F({__name:"PasswordForm",props:v({submitLabel:{},actionAlign:{default:"center"},showCurrentPassword:{type:Boolean,default:!1},showLogout:{type:Boolean,default:!1}},{currentPassword:{},currentPasswordModifiers:{},newPassword:{},newPasswordModifiers:{},logoutAllDevice:{type:Boolean},logoutAllDeviceModifiers:{},loading:{type:Boolean},loadingModifiers:{}}),emits:v(["onSubmit"],["update:currentPassword","update:newPassword","update:logoutAllDevice","update:loading"]),setup(s,{expose:l,emit:d}){l();const e=T(()=>H(()=>import("./AppAlert--MbQk4YR.js"),__vite__mapDeps([0,1,2]))),P=s,{t:g}=q(),{validatePasswordStrongV2:o,requireField:V}=G(),A=_(!1),C=c(s,"currentPassword"),r=c(s,"newPassword"),p=c(s,"logoutAllDevice"),L=c(s,"loading"),b=_(""),h=d,B=D=>D===r.value,E=S(()=>r.value?o(r.value):!1),x=S(()=>b.value&&r.value&&r.value===b.value),y={AppAlert:e,props:P,t:g,validatePasswordStrongV2:o,requireField:V,showPassword:A,currentPassword:C,newPassword:r,logoutAllDevice:p,loading:L,confirmPassword:b,emit:h,validateTheSamePwd:B,isValidPwd:E,isSamePwd:x,onSubmit:()=>{r.value&&h("onSubmit")},get biCheck(){return M},get biLock(){return Q},get biShieldLock(){return N},get biEye(){return I},get biEyeSlash(){return U}};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),W={class:"row"},X={key:0,class:"col-12 col-md-12"},$={class:"col-12 col-md-12 q-py-sm"},ee={class:"col-12 col-md-12"};function oe(s,l,d,e,P,g){return i(),u(Z,{flat:""},{default:n(()=>[a(j,{onSubmit:e.onSubmit,ref:"formPwd"},{default:n(()=>[a(k,null,{default:n(()=>[a(e.AppAlert,{dense:"",type:"is-warning",icon:e.biShieldLock,message:e.t("authen.helper2"),radius:"",class:"q-mb-md"},null,8,["icon","message"]),m("div",W,[d.showCurrentPassword?(i(),z("div",X,[a(f,{readonly:e.loading,outlined:"",dense:"",autocomplete:"off",modelValue:e.currentPassword,"onUpdate:modelValue":l[1]||(l[1]=o=>e.currentPassword=o),type:e.showPassword?"text":"password",label:e.t("authen.currentPassword"),rules:[o=>e.requireField(o,e.t("authen.currentPassword"))]},{prepend:n(()=>[a(t,{name:e.biShieldLock},null,8,["name"])]),append:n(()=>[a(t,{name:e.showPassword?e.biEye:e.biEyeSlash,onClick:l[0]||(l[0]=o=>e.showPassword=!e.showPassword)},null,8,["name"])]),_:1},8,["readonly","modelValue","type","label","rules"])])):w("",!0),m("div",$,[a(f,{class:"q-pt-md",readonly:e.loading,outlined:"",dense:"",autocomplete:"off",modelValue:e.newPassword,"onUpdate:modelValue":l[2]||(l[2]=o=>e.newPassword=o),type:e.showPassword?"text":"password",label:e.t("authen.newPassword"),rules:[o=>e.requireField(o,e.t("authen.newPassword")),o=>e.validatePasswordStrongV2(o)||e.t("authen.helper2")]},{prepend:n(()=>[a(t,{name:e.biLock,color:"grey-9"},null,8,["name"])]),append:n(()=>[e.isValidPwd?(i(),u(t,{key:0,name:e.biCheck,color:"positive"},null,8,["name"])):w("",!0)]),_:1},8,["readonly","modelValue","type","label","rules"])]),m("div",ee,[a(f,{class:"q-pt-md",readonly:e.loading,outlined:"",dense:"",autocomplete:"off",modelValue:e.confirmPassword,"onUpdate:modelValue":l[3]||(l[3]=o=>e.confirmPassword=o),type:e.showPassword?"text":"password",label:e.t("authen.confirmPassword"),rules:[o=>e.requireField(o,e.t("authen.confirmPassword")),o=>e.validateTheSamePwd(o)||e.t("error.passwordNotMatchNew")]},{prepend:n(()=>[a(t,{name:e.biLock,color:"grey-9"},null,8,["name"])]),append:n(()=>[e.isSamePwd?(i(),u(t,{key:0,name:e.biCheck,color:"positive"},null,8,["name"])):w("",!0)]),_:1},8,["readonly","modelValue","type","label","rules"])])])]),_:1}),d.showLogout?(i(),u(k,{key:0},{default:n(()=>[m("div",null,[a(K,{modelValue:e.logoutAllDevice,"onUpdate:modelValue":l[4]||(l[4]=o=>e.logoutAllDevice=o),label:e.t("authen.logoutAll")},null,8,["modelValue","label"])])]),_:1})):w("",!0),a(R,{align:d.actionAlign},{default:n(()=>[a(Y,{unelevated:"",type:"submit",color:"primary",label:d.submitLabel},null,8,["label"])]),_:1},8,["align"])]),_:1},512)]),_:1})}const re=O(J,[["render",oe],["__file","PasswordForm.vue"]]);export{re as default};
