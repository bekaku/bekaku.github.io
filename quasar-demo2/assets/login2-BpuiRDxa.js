import{d as f,a as c,r as t,v as w,bb as y,bc as h,bd as v,be as k,_ as S,B as q,C as Q,E as l,L as E,I as n,F as s,M as u,ae as R,R as g,aa as V,bf as $,$ as b,N as p,bg as C,af as P,al as B,S as F}from"./index-jqmU7M3e.js";import{u as I}from"./use-meta-DLLB1L9J.js";const L=f({components:{},setup(){const{t:e}=c(),o=t(void 0),i=t(void 0),d=t(!1),r=t(!1),m=t(null);return I({title:`${e("page.login")} | ${e("app.monogram")}`}),{...{biEnvelope:y,biLock:h,biEye:v,biEyeSlash:k},email:o,password:i,showPassword:d,onSubmit:()=>{r.value=!0,setTimeout(()=>{r.value=!1},1e3*3)},onReset:()=>{o.value=void 0,i.value=void 0,d.value=!1},t:e,loading:r,loginForm:m,validateEmail:w}}}),z={class:"column q-pa-lg"},N={class:"row"},j={class:"text-h5 text-weight-bolder q-my-md text-uppercase"};function M(e,o,i,d,r,m){return q(),Q(E,{class:"window-height row justify-center items-center",style:`
     background: #5865f2;
    background: url(/login-bg.png) no-repeat center center fixed;
    background: url(/login-bg.png) no-repeat center center fixed, linear-gradient(#5865f2, #0c1aa5);
  background-size: auto;
  background-repeat: no-repeat;`},{default:l(()=>[n("div",z,[n("div",N,[s(F,{class:"shadow-24 q-pb-lg",style:B(e.$q.screen.gt.xs?"width: 480px":"")},{default:l(()=>[s(u,{class:"text-center"},{default:l(()=>[s(R,{src:"/quasar-starter-template/logo/logo.png","spinner-color":"white",style:{height:"auto","max-width":"55px"}}),n("div",j,g(e.t("app.monogram")),1),o[4]||(o[4]=n("div",{class:"text-subtitle1 text-grey-6 q-my-md"}," We're excited to see you again! ",-1)),s(V)]),_:1}),s($,{onSubmit:e.onSubmit,onReset:e.onReset,ref:"loginForm",class:"q-px-sm"},{default:l(()=>[s(u,null,{default:l(()=>[s(b,{readonly:e.loading,outlined:"",clearable:"",modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=a=>e.email=a),type:"email",label:e.t("base.email"),rules:[a=>a&&a.length>0&&e.validateEmail(a)||e.t("error.emailValidate")]},{prepend:l(()=>[s(p,{name:e.biEnvelope,color:"grey-9"},null,8,["name"])]),_:1},8,["readonly","modelValue","label","rules"]),s(b,{class:"q-pt-lg",readonly:e.loading,outlined:"",clearable:"",modelValue:e.password,"onUpdate:modelValue":o[2]||(o[2]=a=>e.password=a),type:e.showPassword?"text":"password",label:e.t("authen.password"),rules:[a=>a&&a.length>0||e.t("error.validateRequire",[e.t("authen.password")])]},{prepend:l(()=>[s(p,{name:e.biLock,color:"grey-9"},null,8,["name"])]),append:l(()=>[s(p,{name:e.showPassword?e.biEye:e.biEyeSlash,onClick:o[1]||(o[1]=a=>e.showPassword=!e.showPassword),class:"cursor-pointer",color:"grey-9"},null,8,["name"])]),_:1},8,["readonly","modelValue","type","label","rules"])]),_:1}),s(C,{class:"q-px-lg"},{default:l(()=>[s(P,{unelevated:"",loading:e.loading,size:"lg",color:"primary",class:"full-width text-white",label:e.t("authen.login"),type:"submit"},null,8,["loading","label"])]),_:1})]),_:1},8,["onSubmit","onReset"]),s(u,{class:"text-center q-pa-sm"},{default:l(()=>[n("a",{class:"wee-link text-grey-6",href:"javascript:void(0)",onClick:o[3]||(o[3]=(...a)=>e.onReset&&e.onReset(...a))},g(e.t("authen.forgetPassword")),1)]),_:1})]),_:1},8,["style"])])])]),_:1})}const W=S(L,[["render",M],["__file","login2.vue"]]);export{W as default};
