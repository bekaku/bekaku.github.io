const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ForgotPassword-BX8O4kVb.js","assets/index-UTJsbmGU.js","assets/index-Dx9QcfFl.css","assets/useAuth-BTdA4huR.js","assets/useAxios-D87ZUWP6.js","assets/useValidation-DR5jvQLZ.js","assets/_plugin-vue_export-helper-DlAUqK2U.js"])))=>i.map(i=>d[i]);
import{d as U,j as N,u as O,k as n,a$ as j,c as C,o as E,w as r,a,F as z,O as _,K as e,e as t,ay as R,av as L,al as M,dw as K,a1 as y,f as W,af as G,ag as J,ai as Y,aj as H,N as P,aO as X,U as $,dE as Z,J as ee,dF as oe,bE as te,ad as ae,P as se,A as le,am as ne}from"./index-UTJsbmGU.js";import{A as re,u as ie}from"./useAuth-BTdA4huR.js";import{b as de}from"./useAxios-D87ZUWP6.js";import{u as me}from"./useValidation-DR5jvQLZ.js";import{u as ue}from"./use-meta-BDBs0vT6.js";import{B as A}from"./BaseButton-BUn1xyHV.js";import{_ as Q}from"./BaseInput.vue_vue_type_script_setup_true_lang-CVDxnSgW.js";import{_ as ce,a as pe}from"./BaseThemeSwitcher.vue_vue_type_script_setup_true_lang-BiQsZuc7.js";import{_ as ge}from"./BaseLink.vue_vue_type_script_setup_true_lang-Ch2xy9ct.js";import{_ as fe}from"./BasePage.vue_vue_type_script_setup_true_lang-BoDIjOxp.js";import{_ as ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BaseAvatar-DYsAAppw.js";import"./BaseImage-C5pcvk_j.js";import"./FileManagerService-oa2a8H9O.js";import"./_commonjsHelpers-BosuxZz1.js";var _e={};const ye=()=>({getConfig:x=>{const c=_e[x];if(c)return c},isProduction:()=>!0,isServer:()=>!1}),be={class:"row items-center q-pa-md",style:{height:"100vh"}},xe={class:"col-12 col-md-6 fantasy-bg"},we={class:"overlay flex flex-center text-white"},he={class:"q-pa-xl text-center"},Ve={class:"text-h2 text-weight-bold q-mb-md"},ke={class:"col-12 col-md-6 flex flex-center"},qe={class:"q-pa-md",style:{width:"70%","max-width":"80%"}},Ce={class:"text-center q-mb-xl"},Ee={class:"text-h4 text-weight-bolder q-my-md"},Pe={class:"text-body1 text-grey-6 q-my-md"},$e={class:"row items-center justify-between"},Ae={class:"q-px-sm"},Qe={class:"text-center q-mt-lg"},De={class:"row items-center q-gutter-x-md justify-center"},Se=U({preFetch({ssrContext:h,redirect:u}){se.get(le)&&u({path:"/"})},__name:"login",setup(h){const u=ae(()=>ne(()=>import("./ForgotPassword-BX8O4kVb.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),{getDeviceId:b}=de(),{singin:x}=re(),{setAuthenticationCookies:c}=ie(),{t:s,currenLocale:V}=N(),{required:k}=me(),{isDark:p}=O(),{getConfig:D}=ye(),g=n("admin@mydomain.com"),f=n("P@ssw0rd"),m=n(!1),d=n(!1),S=n(null),w=n(),q=n(!1),v=n(!1),B=n(D("APP_VERSION")),F={title:s("page.login"),titleTemplate:i=>`${i} - Vue Quasar Example`,meta:{description:{name:"description",content:s("ssDescription")},keywords:{name:"keywords",content:"Vue Quasar Example, Vue Quasar Example"},twitterCard:{name:"twitter:card",content:"https://app.yourdomain.com/card.jpg"},ogTitle:{property:"og:title",content:"Vue Quasar Example"},ogUrl:{property:"og:url",content:"https://app.yourdomain.com"},ogType:{property:"og:type",content:"website"},ogDescription:{property:"og:description",content:s("ssDescription")},ogImage:{property:"og:image",content:"https://app.yourdomain.com/card.jpg"}}};ue(F),j(async()=>{w.value=await b()});const I=async()=>{d.value=!0;const i=await x({user:{emailOrUsername:g.value,password:f.value,loginFrom:"WEB",deviceId:w.value?w.value:null}});console.log("response",i),d.value=!1,i&&i.authenticationToken&&(c(i),d.value=!1,window.location.replace("/"))},T=()=>{g.value=null,f.value=null,m.value=!1};return(i,o)=>(E(),C(fe,{padding:!1,class:$({"bg-white":!e(p),"app-second-bg-color-theme-dark":e(p)})},{default:r(()=>[a("div",be,[a("div",xe,[a("div",we,[a("div",he,[a("h2",Ve,"Welcome to Our "+_(e(s)("app.monogram")),1),o[7]||(o[7]=a("p",{class:"text-h5"},"Embark on your next adventure",-1))])])]),a("div",ke,[a("div",qe,[a("div",Ce,[t(R,{size:"100px",class:"q-mb-md",square:""},{default:r(()=>[t(L,{src:e(p)?"/logo/logo-white.png":"/logo/logo-black.png","spinner-color":"white",alt:"logo",style:{height:"auto","max-width":"120px"}},null,8,["src"])]),_:1}),a("div",Ee,_(e(s)("base.loginTitle")),1),a("div",Pe,_(e(s)("base.loginTitle2")),1)]),t(M,{ref_key:"loginForm",ref:S,class:"q-gutter-md",onSubmit:K(I,["prevent"]),onReset:o[5]||(o[5]=l=>T())},{default:r(()=>[t(Q,{modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=l=>g.value=l),readonly:d.value,dense:!1,label:e(s)("base.emailOrUsername"),rules:[e(k)]},{prepend:r(()=>[t(y,{name:e(W),color:"grey-9"},null,8,["name"])]),_:1},8,["modelValue","readonly","label","rules"]),t(Q,{modelValue:f.value,"onUpdate:modelValue":o[2]||(o[2]=l=>f.value=l),readonly:d.value,dense:!1,type:m.value?"text":"password",label:e(s)("authen.password"),rules:[e(k)]},{prepend:r(()=>[t(y,{name:e(Y),color:"grey-9"},null,8,["name"])]),append:r(()=>[t(y,{name:m.value?e(G):e(J),class:"cursor-pointer",color:"grey-9",onClick:o[1]||(o[1]=l=>m.value=!m.value)},null,8,["name"])]),_:1},8,["modelValue","readonly","type","label","rules"]),a("div",$e,[t(H,{modelValue:q.value,"onUpdate:modelValue":o[3]||(o[3]=l=>q.value=l),label:"Remember me"},null,8,["modelValue"]),t(A,{flat:"",label:e(s)("authen.forgetPassword"),onClick:o[4]||(o[4]=l=>v.value=!0)},null,8,["label"])]),a("div",Ae,[t(A,{unelevated:"",loading:d.value,size:"lg",color:"primary",class:"full-width text-white",label:e(s)("authen.login"),type:"submit"},null,8,["loading","label"])])]),_:1},512),a("div",Qe,[o[9]||(o[9]=P(" Don't have an account? ")),t(ge,{to:"/signup",color:"primary"},{default:r(()=>o[8]||(o[8]=[P("Sign Up")])),_:1}),t(X,{class:"q-my-md"}),a("div",De,[a("div",{class:$(e(p)?"text-grey-5":"text-grey-7")},_(`@ ${e(Z)()} ${e(s)("app.monogram")} ${B.value}`),3),t(ee,{size:"13px",flat:"",dense:"","no-caps":"","no-wrap":"",icon:e(oe),label:e(V)?e(V).name:""},{default:r(()=>[t(y,{class:"q-ml-sm",name:e(te),size:"14px"},null,8,["name"]),t(ce,{anchor:"top left",self:"bottom left","close-on-click":""})]),_:1},8,["icon","label"]),t(pe)])])])])]),v.value?(E(),C(e(u),{key:0,modelValue:v.value,"onUpdate:modelValue":o[6]||(o[6]=l=>v.value=l)},null,8,["modelValue"])):z("",!0)]),_:1},8,["class"]))}}),Je=ve(Se,[["__scopeId","data-v-837f0aeb"]]);export{Je as default};
