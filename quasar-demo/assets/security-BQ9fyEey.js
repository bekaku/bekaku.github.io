const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BaseLoadmore-Ckx7daZ7.js","assets/index-Ck7C3Bne.js","assets/index-54-LVJYF.css","assets/PasswordForm-Dt9HCCs7.js","assets/useValidation-CGl9LgZ1.js"])))=>i.map(i=>d[i]);
import{d as G,u as J,a as X,r as n,T as $,b2 as ee,f as ae,b3 as se,b4 as te,b5 as oe,b6 as ne,Y as E,b7 as le,Z as F,_ as ie,B as d,C as c,E as t,S as re,F as s,I as f,R as i,aa as q,M as p,b8 as de,b9 as ue,O as w,aW as b,ab as ce,ac as k,N as z,H as fe,ah as R,af as me,ag as ge,ba as _e}from"./index-Ck7C3Bne.js";import{u as ve,A as pe}from"./useAuth-kiwKW7UN.js";import{U as we}from"./UserService-Mnoq8gRY.js";import{u as be}from"./useAppMeta-eNfZYAUK.js";import{u as Pe}from"./usePaging-BNKlWwao.js";import{u as De}from"./useValidation-CGl9LgZ1.js";import"./useAxios-CTh94MuL.js";import"./use-meta-o6AKASHm.js";const ye=G({__name:"security",setup(Y,{expose:l}){l();const C=E(()=>F(()=>import("./BaseLoadmore-Ckx7daZ7.js"),__vite__mapDeps([0,1,2]))),e=E(()=>F(()=>import("./PasswordForm-Dt9HCCs7.js"),__vite__mapDeps([3,1,2,4])));be();const{appConfirm:P,appLoading:m}=J(),{t:a}=X(),{signOut:g}=ve(),{selfUpdatePassword:D,currentAuthSession:Q}=we(),{removeAccessTokenSession:B}=pe(),{validatePasswordStrongV2:H,requireField:K}=De(),{pages:r}=Pe(10),y=n(""),A=n(""),I=n(""),N=n(!1),O=n(!0),S=n(!1),_=n([]),V=n(!0),u=n(null),v=n(!1),h=n(!1);$(()=>{x()}),ee(()=>{u.value&&(clearTimeout(u.value),u.value=null)});const M=ae(()=>`?page=${r.value.current>0?r.value.current-1:0}&size=${r.value.itemsPerPage}`),W=async()=>{S.value=!0;const o=await D({userChangePasswordRequest:{password:y.value,newPassword:A.value,logoutAllDevice:O.value}});S.value=!1,o&&o.status=="OK"&&(u.value=setTimeout(()=>{g()},1500))},j=()=>{y.value="",A.value="",I.value="",N.value=!1},Z=async()=>{r.value.current++,await x()},x=async()=>{const o=await Q(M.value);o&&o.length>0?(_.value.push(...o),o.length<r.value.itemsPerPage&&(v.value=!0)):v.value=!0,h.value||(h.value=!0),V.value=!1},T={BaseLoadmore:C,PasswordForm:e,appConfirm:P,appLoading:m,t:a,signOut:g,selfUpdatePassword:D,currentAuthSession:Q,removeAccessTokenSession:B,validatePasswordStrongV2:H,requireField:K,pages:r,currentPassword:y,newPassword:A,rePassword:I,showPassword:N,logoutAllDevice:O,loading:S,sessionList:_,sessionLoading:V,timeout:u,isInfiniteDisabled:v,fristLoaded:h,pageParam:M,onSubmit:W,onReset:j,loadNextPage:Z,loadSeesionLogined:x,displayDate:o=>o?le.formatDate(o,"MMMM DD YYYY, HH:mm:ss"):"-",onDeleteSession:async o=>{if(await P(a("authSessions"),a("base.deleteConfirm"))){const L=_.value[o];if(L&&L.id){m();const U=await B(L.id);m(!1),U&&U.status=="OK"&&_.value.splice(o,1)}}},get biDisplay(){return se},get biDot(){return te},get mdiAndroid(){return oe},get mdiApple(){return ne}};return Object.defineProperty(T,"__isScriptSetup",{enumerable:!1,value:!0}),T}}),Ae={class:"text-h6"},Se={class:"text-h6"},he={class:"text-weight-medium"},xe={class:"text-grey-8"},Le={key:0},ke={class:"text-grey-8 q-gutter-xs"};function Ce(Y,l,C,e,P,m){return d(),c(re,{square:"",flat:"",class:"bg-transparent q-pl-lg"},{default:t(()=>[s(p,null,{default:t(()=>[f("div",Ae,i(e.t("updatePassword")),1),s(q)]),_:1}),s(p,null,{default:t(()=>[s(e.PasswordForm,{currentPassword:e.currentPassword,"onUpdate:currentPassword":l[0]||(l[0]=a=>e.currentPassword=a),newPassword:e.newPassword,"onUpdate:newPassword":l[1]||(l[1]=a=>e.newPassword=a),logoutAllDevice:e.logoutAllDevice,"onUpdate:logoutAllDevice":l[2]||(l[2]=a=>e.logoutAllDevice=a),loading:e.loading,"onUpdate:loading":l[3]||(l[3]=a=>e.loading=a),"show-current-password":"","show-logout":"",onOnSubmit:e.onSubmit,"submit-label":e.t("updatePassword"),"action-align":"left"},null,8,["currentPassword","newPassword","logoutAllDevice","loading","submit-label"])]),_:1}),s(q),s(p,null,{default:t(()=>[f("div",Se,i(e.t("authSessions")),1)]),_:1}),e.sessionLoading?(d(),c(p,{key:0,class:"text-center"},{default:t(()=>[s(de,{color:"primary",size:"3em"})]),_:1})):(d(),c(ue,{key:1,separator:"",class:"rounded-borders"},{default:t(()=>[s(b,{header:""},{default:t(()=>[w(i(e.t("authSessionsHelp")),1)]),_:1}),s(_e,{style:{"max-height":"350px"},items:e.sessionList},{default:t(({item:a,index:g})=>[(d(),c(ce,{key:a.id},{default:t(()=>[s(k,{avatar:"",top:""},{default:t(()=>[s(z,{name:a.loginFrom=="WEB"?e.biDisplay:a.loginFrom=="IOS"?e.mdiApple:e.mdiAndroid,color:"black",size:"34px"},null,8,["name"])]),_:2},1024),s(k,{top:""},{default:t(()=>[s(b,{lines:"1"},{default:t(()=>[f("span",he,"["+i(a.ipAddredd)+"]",1),f("span",xe," - "+i(a.hostName),1),a.activeNow?(d(),fe("span",Le,[s(z,{size:"lg",name:e.biDot,color:"positive"},null,8,["name"])])):R("",!0)]),_:2},1024),s(b,{lines:"1"},{default:t(()=>[w(i(a.agent),1)]),_:2},1024),s(b,{lines:"1",caption:""},{default:t(()=>[w(i(e.t("lastestActive")+" "+e.displayDate(a.lastestActive||a.createdDate)),1)]),_:2},1024)]),_:2},1024),s(k,{top:"",side:""},{default:t(()=>[f("div",ke,[s(me,{class:"gt-xs",size:"12px",flat:"",round:"",icon:"bi-trash",onClick:D=>e.onDeleteSession(g)},{default:t(()=>[s(ge,null,{default:t(()=>[w(i(e.t("base.delete")),1)]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))]),_:1},8,["items"])]),_:1})),!e.isInfiniteDisabled&&e.fristLoaded?(d(),c(e.BaseLoadmore,{key:2,loading:e.loading,"frist-loaded":e.fristLoaded,"is-infinite-disabled":e.isInfiniteDisabled,label:e.t("base.loadMore"),onOnNextPage:e.loadNextPage,button:"","show-icon":"","full-width":""},null,8,["loading","frist-loaded","is-infinite-disabled","label"])):R("",!0)]),_:1})}const qe=ie(ye,[["render",Ce],["__file","security.vue"]]);export{qe as default};
