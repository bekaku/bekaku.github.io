import{l as U,u as h,a as k,r as m,M as A,m as I,n as F,w as a,x as e,ao as q,t as w,au as b,a0 as s,cS as D,a4 as v,b8 as N,$ as g,J as L,a2 as z,a3 as E,az as p,aH as T,aB as G,aE as H,aF as J,bc as K,aG as M,b7 as O}from"./index-D68YvXgu.js";import{Q as R}from"./QBar-BjQusByF.js";import{u as X}from"./useValidation-BLU7ykTP.js";import{U as $}from"./UserService-Uig_Xa3j.js";import"./useAxios-Dx6XxiQg.js";const ae=U({__name:"ChangePasswordForm",props:{dialog:{type:Boolean,default:!1},isFromCompanyAdmin:{type:Boolean,default:!1},title:{type:String,default:void 0},userId:{type:Number,default:void 0}},emits:["on-close","on-okay"],setup(y,{emit:Q}){const n=y,V=Q,{t:o}=h(),{appLoading:c}=k(),i=m(!1),d=m(""),u=m(!0),{validatePasswordStrongV2:C,required:_}=X(),{updateUserPassword:B,updateUserPasswordByAdmin:P}=$(),f=()=>{V("on-close")},S=()=>{x({userChangePasswordRequest:{password:d.value,logoutAllDevice:u.value}})},x=async r=>{n.userId&&(c(),n.isFromCompanyAdmin?await P(r,n.userId):await B(r,n.userId),c(!1),f(),d.value="",u.value=!0)};return A(()=>n.dialog,r=>{i.value=r}),(r,t)=>(F(),I(O,{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=l=>i.value=l),persistent:"","transition-show":"slide-up","transition-hide":"slide-down"},{default:a(()=>[e(q,{style:{"max-width":"480px"},flat:"",bordered:""},{default:a(()=>[e(R,{class:"bg-transparent q-my-sm"},{default:a(()=>[e(b,{name:s(D)},null,8,["name"]),w("div",null,v(s(o)("base.changePassword")),1),e(N),e(g,{dense:"",flat:"",icon:s(L),size:"md",onClick:f},{default:a(()=>[e(z,null,{default:a(()=>[E(v(s(o)("base.close")),1)]),_:1})]),_:1},8,["icon"])]),_:1}),e(p,null,{default:a(()=>[e(T,{onSubmit:S,class:"q-px-sm"},{default:a(()=>[e(p,null,{default:a(()=>[e(G,{class:"q-pt-md",outlined:"",dense:"",modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=l=>d.value=l),type:"password",label:s(o)("authen.newPassword"),rules:[s(_),l=>s(C)(l)||s(o)("error.passwordStrongError")]},{prepend:a(()=>[e(b,{name:s(H),color:"grey-9"},null,8,["name"])]),_:1},8,["modelValue","label","rules"])]),_:1}),e(p,null,{default:a(()=>[w("div",null,[e(J,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=l=>u.value=l),label:s(o)("authen.logoutAll")},null,8,["modelValue","label"])])]),_:1}),e(K),e(M,{align:"center"},{default:a(()=>[e(g,{unelevated:"",color:"primary",label:s(o)("updatePassword"),type:"submit"},null,8,["label"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});export{ae as default};
