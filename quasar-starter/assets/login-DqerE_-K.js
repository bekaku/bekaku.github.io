const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ForgotPassword-CAiMOVaO.js","assets/index-DzkObhlu.js","assets/index-Dx9QcfFl.css","assets/useAuth-8sWgrsly.js","assets/useAxios-DkD1F7Js.js","assets/useValidation-DHdZdQoo.js","assets/_plugin-vue_export-helper-DlAUqK2U.js"])))=>i.map(i=>d[i]);
import{d as F,s as N,j,u as z,k as n,d3 as M,b5 as O,c as V,o as k,w as r,a,M as R,X as v,T as e,e as t,aF as L,aC as W,as as G,d4 as J,a8 as f,f as K,am as X,an as Y,ap as H,aq as Z,W as q,aU as ee,$ as C,d5 as oe,S as te,d6 as ae,bJ as se,ak as le,P as ne,A as re,at as ie}from"./index-DzkObhlu.js";import{A as de,u as me}from"./useAuth-8sWgrsly.js";import{u as ue}from"./useValidation-DHdZdQoo.js";import{u as ce}from"./use-meta-BWinvIfh.js";import{B as $}from"./BaseButton-iQ4WZdZN.js";import{_ as A}from"./BaseInput.vue_vue_type_script_setup_true_lang-CXKI-F0H.js";import{_ as pe,a as ge}from"./BaseThemeSwitcher.vue_vue_type_script_setup_true_lang-IpTQemsJ.js";import{_ as ve}from"./BaseLink.vue_vue_type_script_setup_true_lang-DdmexVyn.js";import{_ as fe}from"./BasePage.vue_vue_type_script_setup_true_lang-D5Uv4pmO.js";import{_ as _e}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useAxios-DkD1F7Js.js";import"./BaseAvatar-CWi_yyTz.js";import"./BaseImage-BgKOuiA7.js";import"./FileManagerService-B6Qe19Gd.js";import"./_commonjsHelpers-D6-XlEtG.js";const ye={class:"row items-center q-pa-md",style:{height:"100vh"}},be={class:"col-12 col-md-6 fantasy-bg"},xe={class:"overlay flex flex-center text-white"},we={class:"q-pa-xl text-center"},he={class:"text-h2 text-weight-bold q-mb-md"},Ve={class:"col-12 col-md-6 flex flex-center"},ke={class:"q-pa-md",style:{width:"70%","max-width":"80%"}},qe={class:"text-center q-mb-xl"},Ce={class:"text-h4 text-weight-bolder q-my-md"},$e={class:"text-body1 text-grey-6 q-my-md"},Ae={class:"row items-center justify-between"},Ee={class:"q-px-sm"},Pe={class:"text-center q-mt-lg"},Qe={class:"row items-center q-gutter-x-md justify-center"},De=F({preFetch({ssrContext:E,redirect:_}){ne.get(re)&&_({path:"/"})},__name:"login",setup(E){const _=le(()=>ie(()=>import("./ForgotPassword-CAiMOVaO.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),{getDeviceId:b}=N(),{singin:P}=de(),{setAuthenticationCookies:Q}=me(),{t:s,currenLocale:x}=j(),{required:w}=ue(),{isDark:u}=z(),{getConfig:D}=M(),c=n("admin@mydomain.com"),p=n("P@ssw0rd"),m=n(!1),d=n(!1),T=n(null),y=n(),h=n(!1),g=n(!1),B=n(D("APP_VERSION")),I={title:s("page.login"),titleTemplate:i=>`${i} - Vue Quasar Example`,meta:{description:{name:"description",content:s("ssDescription")},keywords:{name:"keywords",content:"Vue Quasar Example, Vue Quasar Example"},twitterCard:{name:"twitter:card",content:"https://app.yourdomain.com/card.jpg"},ogTitle:{property:"og:title",content:"Vue Quasar Example"},ogUrl:{property:"og:url",content:"https://app.yourdomain.com"},ogType:{property:"og:type",content:"website"},ogDescription:{property:"og:description",content:s("ssDescription")},ogImage:{property:"og:image",content:"https://app.yourdomain.com/card.jpg"}}};ce(I),O(async()=>{y.value=await b()});const S=async()=>{d.value=!0;const i=await P({user:{emailOrUsername:c.value,password:p.value,loginFrom:"WEB",deviceId:y.value?y.value:null}});console.log("response",i),d.value=!1,i&&i.authenticationToken&&(Q(i),d.value=!1,window.location.replace("/quasar-starter"))},U=()=>{c.value=null,p.value=null,m.value=!1};return(i,o)=>(k(),V(fe,{padding:!1,class:C({"bg-white":!e(u),"app-second-bg-color-theme-dark":e(u)})},{default:r(()=>[a("div",ye,[a("div",be,[a("div",xe,[a("div",we,[a("h2",he,"Welcome to Our "+v(e(s)("app.monogram")),1),o[7]||(o[7]=a("p",{class:"text-h5"},"Embark on your next adventure",-1))])])]),a("div",Ve,[a("div",ke,[a("div",qe,[t(L,{size:"100px",class:"q-mb-md",square:""},{default:r(()=>[t(W,{src:e(u)?"/logo/logo-white.png":"/logo/logo-black.png","spinner-color":"white",alt:"logo",style:{height:"auto","max-width":"120px"}},null,8,["src"])]),_:1}),a("div",Ce,v(e(s)("base.loginTitle")),1),a("div",$e,v(e(s)("base.loginTitle2")),1)]),t(G,{ref_key:"loginForm",ref:T,class:"q-gutter-md",onSubmit:J(S,["prevent"]),onReset:o[5]||(o[5]=l=>U())},{default:r(()=>[t(A,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=l=>c.value=l),readonly:d.value,dense:!1,label:e(s)("base.emailOrUsername"),rules:[e(w)]},{prepend:r(()=>[t(f,{name:e(K),color:"grey-9"},null,8,["name"])]),_:1},8,["modelValue","readonly","label","rules"]),t(A,{modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=l=>p.value=l),readonly:d.value,dense:!1,type:m.value?"text":"password",label:e(s)("authen.password"),rules:[e(w)]},{prepend:r(()=>[t(f,{name:e(H),color:"grey-9"},null,8,["name"])]),append:r(()=>[t(f,{name:m.value?e(X):e(Y),class:"cursor-pointer",color:"grey-9",onClick:o[1]||(o[1]=l=>m.value=!m.value)},null,8,["name"])]),_:1},8,["modelValue","readonly","type","label","rules"]),a("div",Ae,[t(Z,{modelValue:h.value,"onUpdate:modelValue":o[3]||(o[3]=l=>h.value=l),label:"Remember me"},null,8,["modelValue"]),t($,{flat:"",label:e(s)("authen.forgetPassword"),onClick:o[4]||(o[4]=l=>g.value=!0)},null,8,["label"])]),a("div",Ee,[t($,{unelevated:"",loading:d.value,size:"lg",color:"primary",class:"full-width text-white",label:e(s)("authen.login"),type:"submit"},null,8,["loading","label"])])]),_:1},512),a("div",Pe,[o[9]||(o[9]=q(" Don't have an account? ")),t(ve,{to:"/signup",color:"primary"},{default:r(()=>o[8]||(o[8]=[q("Sign Up")])),_:1}),t(ee,{class:"q-my-md"}),a("div",Qe,[a("div",{class:C(e(u)?"text-grey-5":"text-grey-7")},v(`@ ${e(oe)()} ${e(s)("app.monogram")} ${B.value}`),3),t(te,{size:"13px",flat:"",dense:"","no-caps":"","no-wrap":"",icon:e(ae),label:e(x)?e(x).name:""},{default:r(()=>[t(f,{class:"q-ml-sm",name:e(se),size:"14px"},null,8,["name"]),t(pe,{anchor:"top left",self:"bottom left","close-on-click":""})]),_:1},8,["icon","label"]),t(ge)])])])])]),g.value?(k(),V(e(_),{key:0,modelValue:g.value,"onUpdate:modelValue":o[6]||(o[6]=l=>g.value=l)},null,8,["modelValue"])):R("",!0)]),_:1},8,["class"]))}}),Je=_e(De,[["__scopeId","data-v-5a80905c"]]);export{Je as default};
