const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NotificationBarMenu-B2f2Fvis.js","assets/index-jqmU7M3e.js","assets/index-HNifYG8Q.css","assets/ClosePopup-B9Y505Vn.js","assets/BaseAvatar-BALmc6k5.js","assets/AppImage-D2YYGC96.js","assets/FileManagerService-L0QQYSOg.js","assets/useAxios-Ce_LYO3O.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/AppImage-DWpen-BO.css","assets/BaseAvatar-CgUjO2Sl.css","assets/useAuth-Cq0NYKgA.js","assets/SearchDialog-Buy31tRY.js","assets/AppDialog-CTXe4I8v.js","assets/QBar-DtmPYQcZ.js","assets/SearchDialog-DEB_n_WX.css"])))=>i.map(i=>d[i]);
import{d as U,bw as D,a as V,au as H,ce as F,f as j,cf as P,dL as K,dM as Y,cj as W,aE as X,dN as Z,c7 as J,dO as $,dP as ee,cb as ae,dQ as te,ci as oe,_ as z,B as n,C as r,E as t,F as a,ac as i,ah as g,aW as k,I as p,R as m,O as h,N as f,bq as C,b9 as B,aq as A,ab as v,aa as O,H as x,ai as L,aX as Q,ap as ne,dR as le,r as R,dS as re,T as ie,dK as se,dT as de,dU as ce,dV as ue,dW as fe,bF as me,Y as E,Z as M,dX as ge,a7 as he,af as S,ad as _e,a9 as be,ag as N,cA as ye,aL as ve,dY as Se}from"./index-jqmU7M3e.js";import{C as w}from"./ClosePopup-B9Y505Vn.js";import{B as ke}from"./BaseAvatar-BALmc6k5.js";import{u as Ae}from"./useAuth-Cq0NYKgA.js";import{a as G,u as Ne}from"./useAxios-Ce_LYO3O.js";const we=U({__name:"UserNavSetting",props:{hambergerMenu:{type:Boolean,default:!0},showLogo:{type:Boolean,default:!0},frontend:{type:Boolean,default:!0},showTogleDrawer:{type:Boolean,default:!1},reveal:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1}},setup(c,{expose:o}){o();const d=D(),{t:e}=V(),u=H(),b=F(),{signOut:_}=Ae(),l=j(()=>P.find(y=>y.iso==b.locale)),s={$q:d,t:e,authenStore:u,langugeAndThemeStore:b,signOut:_,currenLocale:l,BaseAvatar:ke,get availableLocales(){return P},get availableThemes(){return K},get biBoxArrowRight(){return Y},get biCheck2(){return W},get biChevronExpand(){return X},get biChevronRight(){return Z},get biGear(){return J},get biMoon(){return $},get biPersonSquare(){return ee},get biQuestionCircle(){return ae},get biSun(){return te},get biTranslate(){return oe}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),pe={class:"cursor-pointer text-weight-bold"};function Ce(c,o,d,e,u,b){return n(),r(v,ne(c.$attrs,{clickable:""}),{default:t(()=>[a(i,{avatar:"",top:""},{default:t(()=>[e.authenStore.loginedAvatar?(n(),r(e.BaseAvatar,{key:0,class:"shadow-5",src:e.authenStore.loginedAvatar,size:"36px"},null,8,["src"])):g("",!0)]),_:1}),e.$q.screen.gt.xs?(n(),r(i,{key:0},{default:t(()=>[a(k,{lines:"1"},{default:t(()=>[p("span",pe,m(e.authenStore.loginedDisplay),1)]),_:1}),a(k,{caption:"",lines:1},{default:t(()=>o[0]||(o[0]=[h(" Sofware Engineer ")])),_:1})]),_:1})):g("",!0),a(i,{side:""},{default:t(()=>[a(f,{name:e.biChevronExpand,size:"16px"},null,8,["name"])]),_:1}),a(C,null,{default:t(()=>[a(B,{style:{"min-width":"260px"}},{default:t(()=>{var _;return[A((n(),r(v,{clickable:"",to:`/user/${(_=e.authenStore.auth)==null?void 0:_.id}`},{default:t(()=>[a(i,{avatar:""},{default:t(()=>[e.authenStore.loginedAvatar?(n(),r(e.BaseAvatar,{key:0,src:e.authenStore.loginedAvatar,size:"36px",rounded:""},null,8,["src"])):(n(),r(f,{key:1,name:e.biPersonSquare},null,8,["name"]))]),_:1}),a(i,null,{default:t(()=>[h(m(e.t("base.yourProfile")),1)]),_:1})]),_:1},8,["to"])),[[w]]),a(O),a(v,{clickable:""},{default:t(()=>[a(i,{avatar:""},{default:t(()=>[a(f,{name:e.langugeAndThemeStore.theme=="dark"?e.biMoon:e.biSun},null,8,["name"])]),_:1}),a(i,null,{default:t(()=>[a(k,{lines:"1"},{default:t(()=>[h(m(e.t("base.appearance"))+" : "+m(e.t(`theme.${e.langugeAndThemeStore.theme}`)),1)]),_:1})]),_:1}),a(i,{side:""},{default:t(()=>[a(f,{name:e.biChevronRight},null,8,["name"])]),_:1}),a(C,{anchor:e.$q.screen.gt.xs?"top end":"bottom left",self:"top start"},{default:t(()=>[a(B,{style:{"min-width":"150px"}},{default:t(()=>[(n(!0),x(L,null,Q(e.availableThemes,l=>(n(),r(v,{clickable:"",key:l.key,onClick:s=>e.langugeAndThemeStore.setThemeSetting(l.key)},{default:t(()=>[a(i,{avatar:""},{default:t(()=>[a(f,{name:l.icon},null,8,["name"])]),_:2},1024),a(i,null,{default:t(()=>[h(m(e.t(l.text)),1)]),_:2},1024),l.key==e.langugeAndThemeStore.themeSetting?(n(),r(i,{key:0,side:""},{default:t(()=>[a(f,{name:e.biCheck2},null,8,["name"])]),_:1})):g("",!0)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["anchor"])]),_:1}),a(v,{clickable:""},{default:t(()=>[a(i,{avatar:""},{default:t(()=>[a(f,{name:e.biTranslate},null,8,["name"])]),_:1}),a(i,null,{default:t(()=>[a(k,{lines:"1"},{default:t(()=>[h(m(e.t("base.language"))+" : "+m(e.currenLocale?e.currenLocale.name:""),1)]),_:1})]),_:1}),a(i,{side:""},{default:t(()=>[a(f,{name:e.biChevronRight},null,8,["name"])]),_:1}),a(C,{anchor:e.$q.screen.gt.xs?"top end":"bottom left",self:"top start"},{default:t(()=>[a(B,{style:{"min-width":"150px"}},{default:t(()=>[(n(!0),x(L,null,Q(e.availableLocales,l=>(n(),r(v,{clickable:"",key:l.iso,onClick:s=>e.langugeAndThemeStore.setLocale(l.iso)},{default:t(()=>[a(i,null,{default:t(()=>[h(m(l.name),1)]),_:2},1024),l.iso==e.langugeAndThemeStore.locale?(n(),r(i,{key:0,side:""},{default:t(()=>[a(f,{name:e.biCheck2},null,8,["name"])]),_:1})):g("",!0)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["anchor"])]),_:1}),a(O),A((n(),r(v,{clickable:""},{default:t(()=>[a(i,{avatar:""},{default:t(()=>[a(f,{name:e.biQuestionCircle},null,8,["name"])]),_:1}),a(i,null,{default:t(()=>[h(m(e.t("base.help")),1)]),_:1})]),_:1})),[[w]]),A((n(),r(v,{clickable:"",to:"/settings"},{default:t(()=>[a(i,{avatar:""},{default:t(()=>[a(f,{name:e.biGear},null,8,["name"])]),_:1}),a(i,null,{default:t(()=>[h(m(e.t("base.setting")),1)]),_:1})]),_:1})),[[w]]),A((n(),r(v,{clickable:"",onClick:e.signOut},{default:t(()=>[a(i,{avatar:""},{default:t(()=>[a(f,{name:e.biBoxArrowRight},null,8,["name"])]),_:1}),a(i,null,{default:t(()=>[h(m(e.t("base.logout")),1)]),_:1})]),_:1},8,["onClick"])),[[w]])]}),_:1})]),_:1})]),_:1},16)}const Te=z(we,[["render",Ce],["__file","UserNavSetting.vue"]]),Be=le("notificationStore",()=>{const{cacheNotifyCount:c}=G(),o=R({lastestId:0,totalNotify:0});return{notify:o,setNotify:u=>{o.value.totalNotify=u.totalNotify,o.value.lastestId=u.lastestId},setLastNotify:u=>{c.value.lastestId=u}}}),xe=()=>{const{callAxios:c}=Ne();return{updateFcmSetting:async l=>{await c({API:"/api/userNotify/updateFcmSetting",method:"PUT",body:l})},refreshFcmToken:async l=>{await c({API:"/api/userNotify/refreshFcmToken",method:"PUT",body:l})},findAllByUser:async(l,s)=>new Promise(y=>{setTimeout(()=>{y([])},1500)}),findCountAllNotRead:async l=>await c({API:`/api/userNotify/findCountAllNotRead?lastestNotifyId=${l}`,method:"GET"}),updateReadNotify:async l=>await c({API:`/api/userNotify/updateReadNotify/${l}`,method:"PUT"}),updateReadNotifyAll:async()=>await c({API:"/api/userNotify/updateReadNotifyAll",method:"PUT"})}},Le=()=>{const{findCountAllNotRead:c}=xe(),{cacheNotifyCount:o}=G(),d=Be(),{notify:e}=re(d),{setNotify:u}=d;return ie(()=>{e.value.totalNotify=999}),{notify:e,setNotify:u,resetBadgeCount:()=>{e.value.totalNotify=0},notificationLink:(s,y)=>{if(s&&y){if(s=="LIKE_POST"||s=="SHARE"||s=="COMMENT_POST")return`/post/view/${y}`;if(s=="LIKE_COMMENT")return`/comment/view/${y}`;if(s=="COMMENT_REPLY")return`/comment/view/${y}?isReply=1`}},fetchNotReadNotify:async()=>{const s=await c(o.value&&o.value.lastestId?o.value.lastestId:0);s&&s.lastestId&&s.totalNotify&&u(s)}}},Re=U({__name:"AppHeader",props:{bordered:{type:Boolean,default:!1},reveal:{type:Boolean,default:!1},showTogleDrawer:{type:Boolean,default:!1},frontend:{type:Boolean},showLogo:{type:Boolean,default:!0},hambergerMenu:{type:Boolean},hambergerIcon:{default:()=>se},hambergerIconOff:{},showUserSetting:{type:Boolean,default:!0}},setup(c,{expose:o}){o();const d=E(()=>M(()=>import("./NotificationBarMenu-B2f2Fvis.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),e=E(()=>M(()=>import("./SearchDialog-Buy31tRY.js"),__vite__mapDeps([12,1,2,13,14,15]))),u=D(),b=R(!1),{notify:_,resetBadgeCount:l}=Le(),{t:s}=V(),y=F(),q=R(!1),I={NotificationBarMenu:d,SearchDialog:e,$q:u,showGotTopBtn:b,notify:_,resetBadgeCount:l,t:s,langugeAndThemeStore:y,showSearch:q,onOpenSearch:()=>{q.value=!0},onScroll:T=>{T&&T.position&&T.position.top>100?b.value=!0:b.value=!1},UserNavSetting:Te,get biAppIndicator(){return de},get biBell(){return ce},get biCameraVideo(){return ue},get biChatDots(){return fe},get biSearch(){return me}};return Object.defineProperty(I,"__isScriptSetup",{enumerable:!1,value:!0}),I}}),qe=["src"],Ie={class:"q-mr-sm text-muted"},Pe={class:"q-gutter-md row items-center no-wrap"};function Oe(c,o,d,e,u,b){return n(),x(L,null,[a(Se,{reveal:d.reveal,"height-hint":"58",bordered:d.bordered,elevated:e.showGotTopBtn,class:ve({"wee-second-bg-color-theme-dark text-white":e.$q.dark.isActive,"bg-white text-black":!e.$q.dark.isActive})},{default:t(()=>[a(ge,{onScroll:e.onScroll}),a(he,{class:"q-py-xs"},{default:t(()=>[d.showTogleDrawer?(n(),r(S,{key:0,dense:"",flat:"",round:"",icon:d.hambergerIcon,onClick:o[0]||(o[0]=_=>e.langugeAndThemeStore.setLeftDrawer(!e.langugeAndThemeStore.leftDrawerOpen))},null,8,["icon"])):g("",!0),d.showLogo?(n(),r(S,{key:1,flat:"","no-caps":"","no-wrap":"",class:"q-mr-xs",ripple:!1,to:"/"},{default:t(()=>[a(_e,{style:{height:"auto",width:"42px"},square:""},{default:t(()=>[p("img",{src:e.$q.dark.isActive?"/quasar-starter-template/logo/logo-white.png":"/quasar-starter-template/logo/logo-black.png"},null,8,qe)]),_:1})]),_:1})):g("",!0),e.$q.screen.gt.xs?(n(),r(S,{key:2,flat:"",onClick:e.onOpenSearch,class:"text-capitalize"},{default:t(()=>[p("span",Ie,m(e.t("base.search")+" Vue Quasar"),1),a(f,{name:e.biSearch},null,8,["name"])]),_:1})):g("",!0),a(be),p("div",Pe,[e.$q.screen.gt.sm?(n(),r(S,{key:0,round:"",dense:"",flat:"",icon:e.biCameraVideo},{default:t(()=>[a(N,null,{default:t(()=>o[3]||(o[3]=[h("Create a video or post")])),_:1})]),_:1},8,["icon"])):g("",!0),e.$q.screen.gt.sm?(n(),r(S,{key:1,round:"",dense:"",flat:"",icon:e.biAppIndicator},{default:t(()=>[a(N,null,{default:t(()=>o[4]||(o[4]=[h("Apps")])),_:1})]),_:1},8,["icon"])):g("",!0),e.$q.screen.gt.sm?(n(),r(S,{key:2,round:"",dense:"",flat:"",icon:e.biChatDots,to:"/chats"},{default:t(()=>[a(N,null,{default:t(()=>o[5]||(o[5]=[h("Messages")])),_:1})]),_:1},8,["icon"])):g("",!0),e.$q.screen.gt.xs?g("",!0):(n(),r(S,{key:3,round:"",dense:"",flat:"",onClick:e.onOpenSearch},{default:t(()=>[a(f,{name:e.biSearch},null,8,["name"])]),_:1})),a(S,{round:"",dense:"",flat:"",onClick:e.resetBadgeCount,icon:e.biBell},{default:t(()=>[e.notify&&e.notify.totalNotify?(n(),r(ye,{key:0,color:"negative",rounded:"","text-color":"white",floating:""},{default:t(()=>[h(m(e.notify.totalNotify>99?"99+":e.notify.totalNotify),1)]),_:1})):g("",!0),a(N,null,{default:t(()=>[h(m(e.t("nav.notifications")),1)]),_:1}),a(C,{anchor:"bottom left",self:"top left",style:{width:"360px"}},{default:t(()=>[a(e.NotificationBarMenu)]),_:1})]),_:1},8,["onClick","icon"]),d.showUserSetting?(n(),r(e.UserNavSetting,{key:4,style:{"max-width":"225px"}})):g("",!0)])]),_:1})]),_:1},8,["reveal","bordered","elevated","class"]),e.showSearch?(n(),r(e.SearchDialog,{key:0,"model-value":e.showSearch,"onUpdate:modelValue":o[1]||(o[1]=_=>e.showSearch=_),onOnClose:o[2]||(o[2]=_=>e.showSearch=!1)},null,8,["model-value"])):g("",!0)],64)}const ze=z(Re,[["render",Oe],["__file","AppHeader.vue"]]);export{ze as A,xe as U,Te as a,Le as u};