const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ForgotPassword-Dh7oKsd6.js","assets/index-Cd3HZUlj.js","assets/index-HNifYG8Q.css","assets/useAuth-DDQ19SYr.js","assets/useAxios-DnD0xNDn.js","assets/useValidation-BBErmw9F.js","assets/ForgotPassword-BRGwmqTL.css"])))=>i.map(i=>d[i]);
import{d as O,cd as M,a as Y,r as n,bw as Z,T as W,ce as G,l as J,cf as A,P as K,cg as X,ch as $,ci as ee,cj as te,be as ae,bf as oe,bg as le,a4 as se,Y as ne,aA as re,Z as ie,_ as de,B as d,C as m,E as o,L as ce,I as s,S,al as T,F as t,ck as me,cl as w,R as i,M as u,ah as _,a7 as ue,aN as L,a9 as ge,af as v,N as g,bq as pe,bb as be,H as we,aZ as ye,ab as he,ac as D,O as fe,ai as xe,ae as _e,bh as ve,$ as E,bi as ke}from"./index-Cd3HZUlj.js";import{u as qe}from"./use-meta-XTSl7AT_.js";import{u as Pe}from"./useValidation-BBErmw9F.js";import{A as Ce,u as Qe}from"./useAuth-DDQ19SYr.js";import{b as Ve}from"./useAxios-DnD0xNDn.js";const Ae=O({preFetch({ssrContext:k}){M(K)},__name:"login",setup(k,{expose:a}){a();const q=ne(()=>ie(()=>import("./ForgotPassword-Dh7oKsd6.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),{getDeviceId:e}=Ve(),{singin:y}=Ce(),{setAuthenticationCookies:h,destroyAuthDataAndRedirect:l}=Qe(),{t:c}=Y(),{required:F}=Pe(),I=n("700px"),f=n("admin@mydomain.com"),x=n("P@ssw0rd"),P=n(!1),p=n(!1),N=n(null),b=n(),B=n(!1),C={title:c("page.login"),titleTemplate:r=>`${r} - Vue Quasar Example`,meta:{description:{name:"description",content:c("ssDescription")},keywords:{name:"keywords",content:"Vue Quasar Example, Vue Quasar Example"},twitterCard:{name:"twitter:card",content:"https://app.yourdomain.com/card.jpg"},ogTitle:{property:"og:title",content:"Vue Quasar Example"},ogUrl:{property:"og:url",content:"https://app.yourdomain.com"},ogType:{property:"og:type",content:"website"},ogDescription:{property:"og:description",content:c("ssDescription")},ogImage:{property:"og:image",content:"https://app.yourdomain.com/card.jpg"}}};qe(C);const U=Z();W(async()=>{l(!1),b.value=await e()});const R=async()=>{p.value=!0;const r=await y({user:{emailOrUsername:f.value,password:x.value,loginFrom:"WEB",deviceId:b.value?b.value:null}});console.log("singin",r),p.value=!1,r&&r.authenticationToken&&(h(r),p.value=!1,window.location.replace(re))},j=()=>{f.value=null,x.value=null,P.value=!1},Q=G(),z=J(()=>A.find(r=>r.iso==Q.locale)),H=n("style"),V={ForgotPassword:q,getDeviceId:e,singin:y,setAuthenticationCookies:h,destroyAuthDataAndRedirect:l,t:c,required:F,cardHeight:I,email:f,password:x,showPassword:P,loading:p,loginForm:N,deviceId:b,dialogForgotPassword:B,metaData:C,$q:U,onSubmit:R,onReset:j,langugeAndThemeStore:Q,currenLocale:z,slide:H,get getYearNow(){return X},get biCaretDown(){return $},get biTranslate(){return ee},get biCheck2(){return te},get biLock(){return ae},get biEye(){return oe},get biEyeSlash(){return le},get biPerson(){return se},get availableLocales(){return A}};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}}),Se={class:"row context"},Te={class:"col-12 col-md-6 bg-primary"},Le={class:"text-subtitle1 q-mt-md text-center"},De={class:"text-subtitle1 q-mt-md text-center"},Ee={class:"text-subtitle1 q-mt-md text-center"},Fe={class:"col-12 col-md-6"},Ie={class:"text-h4 text-weight-bolder q-my-md"},Ne={class:"text-body1 text-grey-6 q-my-md"};function Be(k,a,q,e,y,h){return d(),m(ce,{class:"window-height row justify-center items-center"},{default:o(()=>[s("div",Se,[s("div",Te,[!e.$q.screen.sm&&!e.$q.screen.xs?(d(),m(S,{key:0,square:"",flat:"",class:"q-pb-lg bg-primary",style:T(`max-width: 480px; height: ${e.cardHeight}`)},{default:o(()=>[t(u,null,{default:o(()=>[t(me,{autoplay:"",infinite:"",modelValue:e.slide,"onUpdate:modelValue":a[0]||(a[0]=l=>e.slide=l),"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"white",navigation:"",height:"500px",class:"bg-primary text-white rounded-borders"},{default:o(()=>[t(w,{name:"style",class:"column no-wrap flex-center"},{default:o(()=>a[7]||(a[7]=[s("div",{class:"q-mt-md text-center"},[s("img",{src:"/quasar-starter-template/logo/logo-white.png",style:{height:"175px",width:"auto"}}),s("div",{class:"text-h3 text-weight-bolder"},"Vue Quasar"),s("div",{class:"text-subtitle1 q-mt-lg"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. ")],-1)])),_:1}),t(w,{name:"tv",class:"column no-wrap flex-center"},{default:o(()=>[a[8]||(a[8]=s("img",{src:"/quasar-starter-template/logo/logo-white.png",style:{height:"175px",width:"auto"}},null,-1)),s("div",Le,i(e.t("ssDescription")),1)]),_:1}),t(w,{name:"layers",class:"column no-wrap flex-center"},{default:o(()=>[a[9]||(a[9]=s("img",{src:"/quasar-starter-template/logo/logo-white.png",style:{height:"205px",width:"auto"}},null,-1)),s("div",De,i(e.t("ssDescription2")),1)]),_:1}),t(w,{name:"map",class:"column no-wrap flex-center"},{default:o(()=>[a[10]||(a[10]=s("img",{src:"/quasar-starter-template/logo/logo-white.png",style:{height:"175px",width:"auto"}},null,-1)),s("div",Ee,i(e.t("ssDescription3")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["style"])):_("",!0)]),s("div",Fe,[t(S,{square:"",flat:"",bordered:"",class:"q-pa-lg",style:T(`max-width: 480px; height: ${e.cardHeight};min-width:350px`)},{default:o(()=>[t(ue,{class:L(["q-py-xs",e.$q.dark.isActive?"wee-second-bg-color-theme-dark text-white":"text-black"]),style:{background:"none"}},{default:o(()=>[t(ge),t(v,{flat:"","no-wrap":"",icon:e.biTranslate,label:e.currenLocale?e.currenLocale.name:""},{default:o(()=>[t(g,{class:"q-ml-sm",name:e.biCaretDown,size:"16px"},null,8,["name"]),t(pe,{"auto-close":""},{default:o(()=>[t(be,{style:{"min-width":"150px"}},{default:o(()=>[(d(!0),we(xe,null,ye(e.availableLocales,l=>(d(),m(he,{clickable:"",key:l.iso,onClick:c=>e.langugeAndThemeStore.setLocale(l.iso)},{default:o(()=>[t(D,null,{default:o(()=>[fe(i(l.name),1)]),_:2},1024),l.iso==e.langugeAndThemeStore.locale?(d(),m(D,{key:0,side:""},{default:o(()=>[t(g,{name:e.biCheck2},null,8,["name"])]),_:1})):_("",!0)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1},8,["icon","label"])]),_:1},8,["class"]),t(u,{class:"text-center"},{default:o(()=>[t(_e,{src:e.$q.dark.isActive?"/quasar-starter-template/logo/logo-white.png":"/quasar-starter-template/logo/logo-black.png","spinner-color":"white",style:{height:"auto","max-width":"120px"}},null,8,["src"]),s("div",Ie,i(e.t("base.loginTitle")),1),s("div",Ne,i(e.t("base.loginTitle2")),1)]),_:1}),t(ve,{onSubmit:e.onSubmit,onReset:a[4]||(a[4]=l=>e.onReset()),ref:"loginForm",class:"q-px-sm"},{default:o(()=>[t(u,null,{default:o(()=>[t(E,{readonly:e.loading,outlined:"",modelValue:e.email,"onUpdate:modelValue":a[1]||(a[1]=l=>e.email=l),label:e.t("base.emailOrUsername"),rules:[e.required]},{prepend:o(()=>[t(g,{name:e.biPerson,color:"grey-9"},null,8,["name"])]),_:1},8,["readonly","modelValue","label","rules"]),t(E,{class:"q-pt-lg",readonly:e.loading,outlined:"",modelValue:e.password,"onUpdate:modelValue":a[3]||(a[3]=l=>e.password=l),type:e.showPassword?"text":"password",label:e.t("authen.password"),rules:[e.required]},{prepend:o(()=>[t(g,{name:e.biLock,color:"grey-9"},null,8,["name"])]),append:o(()=>[t(g,{name:e.showPassword?e.biEye:e.biEyeSlash,onClick:a[2]||(a[2]=l=>e.showPassword=!e.showPassword),class:"cursor-pointer",color:"grey-9"},null,8,["name"])]),_:1},8,["readonly","modelValue","type","label","rules"])]),_:1}),t(ke,null,{default:o(()=>[t(v,{unelevated:"",loading:e.loading,size:"lg",color:"primary",class:"full-width text-white",label:e.t("authen.login"),type:"submit"},null,8,["loading","label"])]),_:1})]),_:1},512),t(u,{class:"text-center q-pa-sm"},{default:o(()=>[t(v,{flat:"",label:e.t("authen.forgetPassword"),class:"text-muted text-capitalize",onClick:a[5]||(a[5]=l=>e.dialogForgotPassword=!0)},null,8,["label"])]),_:1}),t(u,{class:"q-mt-lg text-center"},{default:o(()=>[s("div",{class:L(e.$q.dark.isActive?"text-grey-5":"text-grey-7")},i(`@ ${e.getYearNow()} ${e.t("app.monogram")}`),3)]),_:1})]),_:1},8,["style"])])]),e.dialogForgotPassword?(d(),m(e.ForgotPassword,{key:0,modelValue:e.dialogForgotPassword,"onUpdate:modelValue":a[6]||(a[6]=l=>e.dialogForgotPassword=l)},null,8,["modelValue"])):_("",!0)]),_:1})}const Oe=de(Ae,[["render",Be],["__scopeId","data-v-af61c9e8"],["__file","login.vue"]]);export{Oe as default};
