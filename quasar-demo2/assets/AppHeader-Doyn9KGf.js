const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NotifyIcon-CDR3OrrK.js","assets/index-DnUFBeQi.js","assets/index-HNifYG8Q.css","assets/SearchForm-rPBA5lNg.js","assets/useAxios-C4yiweSz.js","assets/SearchForm-BB958prA.css"])))=>i.map(i=>d[i]);
import{d as I,bx as j,a as O,au as te,ce as z,l as G,cf as U,et as ae,eu as oe,cj as ne,aU as le,eq as re,c7 as ie,ev as se,ew as ce,cb as de,ex as ue,ci as fe,_ as q,B as r,C as i,E as a,F as t,ac as u,ah as b,aN as k,I as C,R as _,O as h,N as y,bs as R,bb as P,aq as N,ab as S,aa as Q,H as x,ai as B,aO as E,ap as me,ey as _e,r as T,ez as he,T as H,u as K,Y,Z,ad as J,ae as V,aL as W,M as F,af as p,S as ge,bF as X,dK as be,eA as ye,eB as ve,eC as Se,eo as pe,eD as ke,a7 as we,a9 as Ne,ag as L,cA as Ae,eE as Ce}from"./index-DnUFBeQi.js";import{C as A}from"./ClosePopup-CG5r7XOg.js";import{B as xe}from"./BaseAvatar-CmyOpCDm.js";import{u as Be}from"./useAuth-CshZrdQE.js";import{a as $,u as Te}from"./useAxios-C4yiweSz.js";import Ie from"./AppResult-Dya3OwwP.js";import qe from"./SkeletonItem-D_oKOfQP.js";import De from"./AppDialog-DmxFkNQS.js";const Le=I({__name:"UserNavSetting",props:{hambergerMenu:{type:Boolean,default:!0},showLogo:{type:Boolean,default:!0},frontend:{type:Boolean,default:!0},showTogleDrawer:{type:Boolean,default:!1},reveal:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1}},setup(f,{expose:o}){o();const n=j(),{t:e}=O(),s=te(),m=z(),{signOut:d}=Be(),l=G(()=>U.find(g=>g.iso==m.locale)),c={$q:n,t:e,authenStore:s,langugeAndThemeStore:m,signOut:d,currenLocale:l,BaseAvatar:xe,get availableLocales(){return U},get availableThemes(){return ae},get biBoxArrowRight(){return oe},get biCheck2(){return ne},get biChevronExpand(){return le},get biChevronRight(){return re},get biGear(){return ie},get biMoon(){return se},get biPersonSquare(){return ce},get biQuestionCircle(){return de},get biSun(){return ue},get biTranslate(){return fe}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),Re={class:"cursor-pointer text-weight-bold"};function Oe(f,o,n,e,s,m){return r(),i(S,me(f.$attrs,{clickable:""}),{default:a(()=>[t(u,{avatar:"",top:""},{default:a(()=>[e.authenStore.loginedAvatar?(r(),i(e.BaseAvatar,{key:0,class:"shadow-5",src:e.authenStore.loginedAvatar,size:"36px"},null,8,["src"])):b("",!0)]),_:1}),e.$q.screen.gt.xs?(r(),i(u,{key:0},{default:a(()=>[t(k,{lines:"1"},{default:a(()=>[C("span",Re,_(e.authenStore.loginedDisplay),1)]),_:1}),t(k,{caption:"",lines:1},{default:a(()=>o[0]||(o[0]=[h(" Sofware Engineer ")])),_:1})]),_:1})):b("",!0),t(u,{side:""},{default:a(()=>[t(y,{name:e.biChevronExpand,size:"16px"},null,8,["name"])]),_:1}),t(R,null,{default:a(()=>[t(P,{style:{"min-width":"260px"}},{default:a(()=>{var d;return[N((r(),i(S,{clickable:"",to:`/user/${(d=e.authenStore.auth)==null?void 0:d.id}`},{default:a(()=>[t(u,{avatar:""},{default:a(()=>[e.authenStore.loginedAvatar?(r(),i(e.BaseAvatar,{key:0,src:e.authenStore.loginedAvatar,size:"36px",rounded:""},null,8,["src"])):(r(),i(y,{key:1,name:e.biPersonSquare},null,8,["name"]))]),_:1}),t(u,null,{default:a(()=>[h(_(e.t("base.yourProfile")),1)]),_:1})]),_:1},8,["to"])),[[A]]),t(Q),t(S,{clickable:""},{default:a(()=>[t(u,{avatar:""},{default:a(()=>[t(y,{name:e.langugeAndThemeStore.theme=="dark"?e.biMoon:e.biSun},null,8,["name"])]),_:1}),t(u,null,{default:a(()=>[t(k,{lines:"1"},{default:a(()=>[h(_(e.t("base.appearance"))+" : "+_(e.t(`theme.${e.langugeAndThemeStore.theme}`)),1)]),_:1})]),_:1}),t(u,{side:""},{default:a(()=>[t(y,{name:e.biChevronRight},null,8,["name"])]),_:1}),t(R,{anchor:e.$q.screen.gt.xs?"top end":"bottom left",self:"top start"},{default:a(()=>[t(P,{style:{"min-width":"150px"}},{default:a(()=>[(r(!0),x(B,null,E(e.availableThemes,l=>(r(),i(S,{clickable:"",key:l.key,onClick:c=>e.langugeAndThemeStore.setThemeSetting(l.key)},{default:a(()=>[t(u,{avatar:""},{default:a(()=>[t(y,{name:l.icon},null,8,["name"])]),_:2},1024),t(u,null,{default:a(()=>[h(_(e.t(l.text)),1)]),_:2},1024),l.key==e.langugeAndThemeStore.themeSetting?(r(),i(u,{key:0,side:""},{default:a(()=>[t(y,{name:e.biCheck2},null,8,["name"])]),_:1})):b("",!0)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["anchor"])]),_:1}),t(S,{clickable:""},{default:a(()=>[t(u,{avatar:""},{default:a(()=>[t(y,{name:e.biTranslate},null,8,["name"])]),_:1}),t(u,null,{default:a(()=>[t(k,{lines:"1"},{default:a(()=>[h(_(e.t("base.language"))+" : "+_(e.currenLocale?e.currenLocale.name:""),1)]),_:1})]),_:1}),t(u,{side:""},{default:a(()=>[t(y,{name:e.biChevronRight},null,8,["name"])]),_:1}),t(R,{anchor:e.$q.screen.gt.xs?"top end":"bottom left",self:"top start"},{default:a(()=>[t(P,{style:{"min-width":"150px"}},{default:a(()=>[(r(!0),x(B,null,E(e.availableLocales,l=>(r(),i(S,{clickable:"",key:l.iso,onClick:c=>e.langugeAndThemeStore.setLocale(l.iso)},{default:a(()=>[t(u,null,{default:a(()=>[h(_(l.name),1)]),_:2},1024),l.iso==e.langugeAndThemeStore.locale?(r(),i(u,{key:0,side:""},{default:a(()=>[t(y,{name:e.biCheck2},null,8,["name"])]),_:1})):b("",!0)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["anchor"])]),_:1}),t(Q),N((r(),i(S,{clickable:""},{default:a(()=>[t(u,{avatar:""},{default:a(()=>[t(y,{name:e.biQuestionCircle},null,8,["name"])]),_:1}),t(u,null,{default:a(()=>[h(_(e.t("base.help")),1)]),_:1})]),_:1})),[[A]]),N((r(),i(S,{clickable:"",to:"/settings"},{default:a(()=>[t(u,{avatar:""},{default:a(()=>[t(y,{name:e.biGear},null,8,["name"])]),_:1}),t(u,null,{default:a(()=>[h(_(e.t("base.setting")),1)]),_:1})]),_:1})),[[A]]),N((r(),i(S,{clickable:"",onClick:e.signOut},{default:a(()=>[t(u,{avatar:""},{default:a(()=>[t(y,{name:e.biBoxArrowRight},null,8,["name"])]),_:1}),t(u,null,{default:a(()=>[h(_(e.t("base.logout")),1)]),_:1})]),_:1},8,["onClick"])),[[A]])]}),_:1})]),_:1})]),_:1},16)}const Pe=q(Le,[["render",Oe],["__file","UserNavSetting.vue"]]),Qe=_e("notificationStore",()=>{const{cacheNotifyCount:f}=$(),o=T({lastestId:0,totalNotify:0});return{notify:o,setNotify:s=>{o.value.totalNotify=s.totalNotify,o.value.lastestId=s.lastestId},setLastNotify:s=>{f.value.lastestId=s}}}),M=()=>{const{callAxios:f}=Te();return{updateFcmSetting:async l=>{await f({API:"/api/userNotify/updateFcmSetting",method:"PUT",body:l})},refreshFcmToken:async l=>{await f({API:"/api/userNotify/refreshFcmToken",method:"PUT",body:l})},findAllByUser:async(l,c)=>new Promise(g=>{setTimeout(()=>{g([])},1500)}),findCountAllNotRead:async l=>await f({API:`/api/userNotify/findCountAllNotRead?lastestNotifyId=${l}`,method:"GET"}),updateReadNotify:async l=>await f({API:`/api/userNotify/updateReadNotify/${l}`,method:"PUT"}),updateReadNotifyAll:async()=>await f({API:"/api/userNotify/updateReadNotifyAll",method:"PUT"})}},ee=()=>{const{findCountAllNotRead:f}=M(),{cacheNotifyCount:o}=$(),n=Qe(),{notify:e}=he(n),{setNotify:s}=n;return H(()=>{e.value.totalNotify=999}),{notify:e,setNotify:s,resetBadgeCount:()=>{e.value.totalNotify=0},notificationLink:(c,g)=>{if(c&&g){if(c=="LIKE_POST"||c=="SHARE"||c=="COMMENT_POST")return`/post/view/${g}`;if(c=="LIKE_COMMENT")return`/comment/view/${g}`;if(c=="COMMENT_REPLY")return`/comment/view/${g}?isReply=1`}},fetchNotReadNotify:async()=>{const c=await f(o.value&&o.value.lastestId?o.value.lastestId:0);c&&c.lastestId&&c.totalNotify&&s(c)}}},Ee=I({__name:"NotificationItem",props:{index:{type:Number},item:{type:Object,default:()=>null}},emits:["on:click"],setup(f,{expose:o,emit:n}){o();const e=Y(()=>Z(()=>import("./NotifyIcon-CDR3OrrK.js"),__vite__mapDeps([0,1,2]))),s=f,{updateReadNotify:m}=M(),{notificationLink:d}=ee(),{appFormatDateDistance:l,isDark:c}=K(),g=n,v={NotifyIcon:e,props:s,updateReadNotify:m,notificationLink:d,appFormatDateDistance:l,isDark:c,emit:g,onClick:()=>{s.item.readStatus||m(s.item.id),g("on:click",s.index)}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}});function Me(f,o,n,e,s,m){return n.item?(r(),i(S,{key:0,to:e.notificationLink(n.item.functionCode,n.item.functionId),onClick:e.onClick,class:W(e.isDark&&!n.item.readStatus?"bg-grey-9":n.item.readStatus?"":"bg-light-blue-2")},{default:a(()=>[t(u,{avatar:""},{default:a(()=>[t(J,{size:"48px"},{default:a(()=>{var d,l;return[n.item.fromUser?(r(),i(V,{key:0,src:(l=(d=n.item.fromUser)==null?void 0:d.avatar)==null?void 0:l.thumbnail,"spinner-color":"white","no-native-menu":""},null,8,["src"])):(r(),i(V,{key:1,src:"/icon.png","spinner-color":"white","no-native-menu":""}))]}),_:1})]),_:1}),t(u,null,{default:a(()=>[t(k,{lines:2},{default:a(()=>[h(_(n.item.message),1)]),_:1}),t(k,{caption:""},{default:a(()=>[h(_(e.appFormatDateDistance(n.item.createdDate)),1)]),_:1})]),_:1}),t(u,{side:""},{default:a(()=>[t(e.NotifyIcon,{"notify-type":n.item.functionCode,"emoji-type":n.item.emojiType},null,8,["notify-type","emoji-type"])]),_:1})]),_:1},8,["to","class"])):b("",!0)}const Ue=q(Ee,[["render",Me],["__scopeId","data-v-46377830"],["__file","NotificationItem.vue"]]),Ve=I({__name:"NotificationBarMenu",setup(f,{expose:o}){o();const{findAllByUser:n}=M(),{t:e}=O(),s=T(!1),m=T([]);H(async()=>{s.value=!0,await d(),s.value=!1});const d=async()=>{const c=await n(1,10);return c&&c.length>0&&m.value.push(...c),new Promise(g=>{g(!0)})},l={findAllByUser:n,t:e,loading:s,items:m,fetchDataData:d,AppResult:Ie,NotificationItem:Ue,SkeletonItem:qe};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),Fe={class:"text-h6"};function je(f,o,n,e,s,m){return r(),i(ge,{flat:""},{default:a(()=>[t(F,null,{default:a(()=>[C("div",Fe,_(e.t("base.notification")),1)]),_:1}),e.loading?(r(),i(e.SkeletonItem,{key:0,items:5,show:""})):e.items.length>0?(r(),x(B,{key:1},[(r(!0),x(B,null,E(e.items,(d,l)=>(r(),i(e.NotificationItem,{key:`notification-${d.id}`,item:d,index:l},null,8,["item","index"]))),128)),t(F,null,{default:a(()=>[N(t(p,{unelevated:"",rounded:"",color:"primary",class:"full-width",label:e.t("base.readAllNotifications"),to:"/notifications"},null,8,["label"]),[[A]])]),_:1})],64)):(r(),i(e.AppResult,{key:2,status:"empty",description:e.t("error.dataNotfound")},null,8,["description"]))]),_:1})}const ze=q(Ve,[["render",je],["__file","NotificationBarMenu.vue"]]),Ge=I({__name:"SearchDialog",props:{modelValue:{type:Boolean,require:!0}},emits:["on-close","update:modelValue","on-submit"],setup(f,{expose:o,emit:n}){o();const e=Y(()=>Z(()=>import("./SearchForm-rPBA5lNg.js"),__vite__mapDeps([3,1,2,4,5]))),s=f,{appGoto:m}=K(),{t:d}=O(),l=n,c=G({get:()=>s.modelValue,set:v=>l("update:modelValue",v)}),D={SearchForm:e,props:s,appGoto:m,t:d,emit:l,show:c,onSubmit:v=>{c.value=!1;let w=`q=${v.q}&q_profile=${v.profile?"true":"false"}&q_post=${v.post?"true":"false"}&q_hashtag=${v.hashTag?"true":"false"}&q_theme=${v.theme?"true":"false"}`;m(`/search?${w}`)},AppDialog:De,get biSearch(){return X}};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}});function He(f,o,n,e,s,m){return r(),i(e.AppDialog,{icon:e.biSearch,"model-value":e.show,"full-width":!1,title:e.t("base.search"),onOnClose:o[0]||(o[0]=d=>e.show=!1),onOnHide:o[1]||(o[1]=d=>e.show=!1),persistent:!1,"transition-show":"fade","transition-hide":"fade","dialog-style":"width: 550px; max-width: 90vw"},{default:a(()=>[t(Q),t(e.SearchForm,{onOnSubmit:e.onSubmit})]),_:1},8,["icon","model-value","title"])}const Ke=q(Ge,[["render",He],["__scopeId","data-v-a2865a10"],["__file","SearchDialog.vue"]]),Ye=I({__name:"AppHeader",props:{bordered:{type:Boolean,default:!1},reveal:{type:Boolean,default:!1},showTogleDrawer:{type:Boolean,default:!1},frontend:{type:Boolean},showLogo:{type:Boolean,default:!0},hambergerMenu:{type:Boolean},hambergerIcon:{default:()=>be},hambergerIconOff:{},showUserSetting:{type:Boolean,default:!0}},setup(f,{expose:o}){o();const n=j(),e=T(!1),{notify:s,resetBadgeCount:m}=ee(),{t:d}=O(),l=z(),c=T(!1),v={$q:n,showGotTopBtn:e,notify:s,resetBadgeCount:m,t:d,langugeAndThemeStore:l,showSearch:c,onOpenSearch:()=>{c.value=!0},onScroll:w=>{w&&w.position&&w.position.top>100?e.value=!0:e.value=!1},UserNavSetting:Pe,get biAppIndicator(){return ye},get biBell(){return ve},get biCameraVideo(){return Se},get biChatDots(){return pe},get biSearch(){return X},NotificationBarMenu:ze,SearchDialog:Ke};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}),Ze=["src"],Je={class:"q-mr-sm text-muted"},We={class:"q-gutter-md row items-center no-wrap"};function Xe(f,o,n,e,s,m){return r(),x(B,null,[t(Ce,{reveal:n.reveal,"height-hint":"58",bordered:n.bordered,elevated:e.showGotTopBtn,class:W({"wee-second-bg-color-theme-dark text-white":e.$q.dark.isActive,"bg-white text-black":!e.$q.dark.isActive})},{default:a(()=>[t(ke,{onScroll:e.onScroll}),t(we,{class:"q-py-xs"},{default:a(()=>[n.showTogleDrawer?(r(),i(p,{key:0,dense:"",flat:"",round:"",icon:n.hambergerIcon,onClick:o[0]||(o[0]=d=>e.langugeAndThemeStore.setLeftDrawer(!e.langugeAndThemeStore.leftDrawerOpen))},null,8,["icon"])):b("",!0),n.showLogo?(r(),i(p,{key:1,flat:"","no-caps":"","no-wrap":"",class:"q-mr-xs",ripple:!1,to:"/"},{default:a(()=>[t(J,{style:{height:"auto",width:"42px"},square:""},{default:a(()=>[C("img",{src:e.$q.dark.isActive?"/quasar-starter-template/logo/logo-white.png":"/quasar-starter-template/logo/logo-black.png"},null,8,Ze)]),_:1})]),_:1})):b("",!0),e.$q.screen.gt.xs?(r(),i(p,{key:2,flat:"",onClick:e.onOpenSearch,class:"text-capitalize"},{default:a(()=>[C("span",Je,_(e.t("base.search")+" Vue Quasar"),1),t(y,{name:e.biSearch},null,8,["name"])]),_:1})):b("",!0),t(Ne),C("div",We,[e.$q.screen.gt.sm?(r(),i(p,{key:0,round:"",dense:"",flat:"",icon:e.biCameraVideo},{default:a(()=>[t(L,null,{default:a(()=>o[3]||(o[3]=[h("Create a video or post")])),_:1})]),_:1},8,["icon"])):b("",!0),e.$q.screen.gt.sm?(r(),i(p,{key:1,round:"",dense:"",flat:"",icon:e.biAppIndicator},{default:a(()=>[t(L,null,{default:a(()=>o[4]||(o[4]=[h("Apps")])),_:1})]),_:1},8,["icon"])):b("",!0),e.$q.screen.gt.sm?(r(),i(p,{key:2,round:"",dense:"",flat:"",icon:e.biChatDots,to:"/chats"},{default:a(()=>[t(L,null,{default:a(()=>o[5]||(o[5]=[h("Messages")])),_:1})]),_:1},8,["icon"])):b("",!0),e.$q.screen.gt.xs?b("",!0):(r(),i(p,{key:3,round:"",dense:"",flat:"",onClick:e.onOpenSearch},{default:a(()=>[t(y,{name:e.biSearch},null,8,["name"])]),_:1})),t(p,{round:"",dense:"",flat:"",onClick:e.resetBadgeCount,icon:e.biBell},{default:a(()=>[e.notify&&e.notify.totalNotify?(r(),i(Ae,{key:0,color:"negative",rounded:"","text-color":"white",floating:""},{default:a(()=>[h(_(e.notify.totalNotify>99?"99+":e.notify.totalNotify),1)]),_:1})):b("",!0),t(L,null,{default:a(()=>[h(_(e.t("nav.notifications")),1)]),_:1}),t(R,{anchor:"bottom left",self:"top left",style:{width:"360px"}},{default:a(()=>[t(e.NotificationBarMenu)]),_:1})]),_:1},8,["onClick","icon"]),n.showUserSetting?(r(),i(e.UserNavSetting,{key:4,style:{"max-width":"225px"}})):b("",!0)])]),_:1})]),_:1},8,["reveal","bordered","elevated","class"]),e.showSearch?(r(),i(e.SearchDialog,{key:0,"model-value":e.showSearch,"onUpdate:modelValue":o[1]||(o[1]=d=>e.showSearch=d),onOnClose:o[2]||(o[2]=d=>e.showSearch=!1)},null,8,["model-value"])):b("",!0)],64)}const it=q(Ye,[["render",Xe],["__file","AppHeader.vue"]]);export{it as A,Pe as U};
