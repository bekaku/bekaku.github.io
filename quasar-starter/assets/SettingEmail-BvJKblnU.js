import{l as g,u as S,bM as y,r as m,o as V,c as d,al as w,m as x,n as E,w as n,t as u,x as t,M as Q,J as e,aN as B,aH as C,aM as M,af as q,aD as N,d9 as U,aF as k}from"./index-5wxfv7l2.js";import{U as A}from"./UserService-CXtBccXC.js";import{u as D}from"./useValidation-ZCD9po-z.js";import"./useAxios-BgEH28Tb.js";const F={class:"text-h6"},I={class:"row"},L={class:"col-12 col-md-6 q-pa-md"},W=g({__name:"SettingEmail",setup(H){const{t:s}=S(),l=y(),{updateEmail:c}=A(),{required:p,requireEmail:v}=D(),a=m({email:""}),i=m(!1);V(()=>{l.auth&&l.auth.email&&(a.value.email=l.auth.email)});const b=d(()=>a.value.email&&f.value),f=d(()=>a.value.email?w(a.value.email):!1),_=async()=>{i.value=!0;const o=await c(a.value);i.value=!1,o&&o.status=="OK"&&l.auth&&(l.auth.email=a.value.email)};return(o,r)=>(E(),x(k,null,{default:n(()=>[u("div",F,Q(e(s)("base.emailEdit")),1),t(B,{onSubmit:_},{default:n(()=>[u("div",I,[u("div",L,[t(C,{outlined:"",modelValue:a.value.email,"onUpdate:modelValue":r[0]||(r[0]=h=>a.value.email=h),label:e(s)("base.emailEdit"),rules:[e(p),e(v)],type:"email"},null,8,["modelValue","label","rules"])])]),t(M,{align:"right"},{default:n(()=>[t(q,{disable:!b.value,unelevated:"",color:"primary",icon:e(N),label:e(s)("base.edit"),type:"submit"},null,8,["disable","icon","label"])]),_:1})]),_:1}),t(U,{showing:i.value,label:e(s)("base.pleaseWait"),"label-class":"text-primary"},null,8,["showing","label"])]),_:1}))}});export{W as default};
