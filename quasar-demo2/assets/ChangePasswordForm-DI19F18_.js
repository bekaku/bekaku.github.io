import{d as k,a as x,u as B,r as i,w as A,aD as U,br as D,be as F,_ as I,B as q,C as L,E as s,F as a,S as N,N as v,I as C,R as P,a9 as O,af as V,ag as E,O as K,M as u,bh as X,$ as M,aM as R,aa as T,bi as j,aE as z}from"./index-Cd3HZUlj.js";import{Q as G}from"./QBar-BOW1NthI.js";import{u as H}from"./useValidation-BBErmw9F.js";import{U as J}from"./UserService-D2y3XvfW.js";import"./useAxios-DnD0xNDn.js";const W=k({__name:"ChangePasswordForm",props:{dialog:{type:Boolean,default:!1},isFromCompanyAdmin:{type:Boolean,default:!1},title:{type:String,default:void 0},userId:{type:Number,default:void 0}},emits:["on-close","on-okay"],setup(m,{expose:l,emit:c}){l();const e=m,r=c,{t:f}=x(),{appLoading:o}=B(),p=i(!1),n=i(""),d=i(!0),{validatePasswordStrongV2:Q,required:S}=H(),{updateUserPassword:w,updateUserPasswordByAdmin:b}=J(),g=()=>{r("on-close")},h=()=>{_({userChangePasswordRequest:{password:n.value,logoutAllDevice:d.value}})},_=async t=>{e.userId&&(o(),e.isFromCompanyAdmin?await b(t,e.userId):await w(t,e.userId),o(!1),g(),n.value="",d.value=!0)};A(()=>e.dialog,t=>{p.value=t});const y={props:e,emit:r,t:f,appLoading:o,show:p,newPassword:n,logoutAllDevice:d,validatePasswordStrongV2:Q,required:S,updateUserPassword:w,updateUserPasswordByAdmin:b,onClose:g,onOkay:h,onUpdateUserPassword:_,get biX(){return U},get biKey(){return D},get biLock(){return F}};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}});function Y(m,l,c,e,r,f){return q(),L(z,{modelValue:e.show,"onUpdate:modelValue":l[2]||(l[2]=o=>e.show=o),persistent:"","transition-show":"slide-up","transition-hide":"slide-down"},{default:s(()=>[a(N,{style:{"max-width":"480px"},flat:"",bordered:""},{default:s(()=>[a(G,{class:"bg-transparent q-my-sm"},{default:s(()=>[a(v,{name:e.biKey},null,8,["name"]),C("div",null,P(e.t("base.changePassword")),1),a(O),a(V,{dense:"",flat:"",icon:e.biX,size:"md",onClick:e.onClose},{default:s(()=>[a(E,null,{default:s(()=>[K(P(e.t("base.close")),1)]),_:1})]),_:1},8,["icon"])]),_:1}),a(u,null,{default:s(()=>[a(X,{onSubmit:e.onOkay,class:"q-px-sm"},{default:s(()=>[a(u,null,{default:s(()=>[a(M,{class:"q-pt-md",outlined:"",dense:"",modelValue:e.newPassword,"onUpdate:modelValue":l[0]||(l[0]=o=>e.newPassword=o),type:"password",label:e.t("authen.newPassword"),rules:[e.required,o=>e.validatePasswordStrongV2(o)||e.t("error.passwordStrongError")]},{prepend:s(()=>[a(v,{name:e.biLock,color:"grey-9"},null,8,["name"])]),_:1},8,["modelValue","label","rules"])]),_:1}),a(u,null,{default:s(()=>[C("div",null,[a(R,{modelValue:e.logoutAllDevice,"onUpdate:modelValue":l[1]||(l[1]=o=>e.logoutAllDevice=o),label:e.t("authen.logoutAll")},null,8,["modelValue","label"])])]),_:1}),a(T),a(j,{align:"center"},{default:s(()=>[a(V,{unelevated:"",color:"primary",label:e.t("updatePassword"),type:"submit"},null,8,["label"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}const se=I(W,[["render",Y],["__file","ChangePasswordForm.vue"]]);export{se as default};
