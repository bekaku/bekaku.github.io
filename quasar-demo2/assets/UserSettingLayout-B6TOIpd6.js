import{d as g,a as y,r as S,a4 as w,bA as k,bb as L,_ as h,B as r,C as n,E as e,F as t,H as d,aF as Q,ai as p,aa as $,aE as u,O as _,R as f,aq as x,ab as A,ac as m,N as B,b9 as C,S as I,bG as P,A as U,Q as D,L as E,I as l,G as F}from"./index-DDZXG7TO.js";import{A as H}from"./AppHeader-DHcE1Grq.js";import"./useAxios-Oymy46L5.js";import"./ClosePopup-BEkvAfed.js";import"./AppResult-Gk2Gg_cz.js";import"./SkeletonItem-o4bxJXkX.js";const N=g({props:{overlay:{type:Boolean,default:!1}},setup(){const{t:s}=y(),o=S([{icon:w,text:"page.settingsPublicProfile",link:"/settings/profile"},{separator:!0},{header:"Access"},{icon:k,text:"page.settingsSecurity",link:"/settings/security"},{icon:L,text:"contactInfo",link:"/settings/emails"}]);return{t:s,links1:o}}});function q(s,o,i,c,b,v){return r(),n(I,{flat:"",class:"full-height"},{default:e(()=>[t(C,{bordered:""},{default:e(()=>[(r(!0),d(p,null,Q(s.links1,a=>(r(),d(p,{key:a.text},[a.separator?(r(),n($,{key:0,spaced:""})):a.header?(r(),n(u,{key:1,header:""},{default:e(()=>[_(f(a.header),1)]),_:2},1024)):x((r(),n(A,{key:2,to:a.link,clickable:""},{default:e(()=>[t(m,{avatar:""},{default:e(()=>[t(B,{color:s.$q.dark.isActive?"white":"black",name:a.icon},null,8,["color","name"])]),_:2},1024),t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[_(f(s.t(`${a.text}`)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),[[P]])],64))),128))]),_:1})]),_:1})}const R=h(N,[["render",q],["__file","UserSettingDrawer.vue"]]),V=g({__name:"UserSettingLayout",setup(s,{expose:o}){o();const i={AppHeader:H,UserSettingDrawer:R};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),G={class:"row"},O={class:"col-12 col-md-4"},j={class:"col-12 col-md-8"};function T(s,o,i,c,b,v){const a=U("router-view");return r(),n(D,{view:"hHh LpR fFf"},{default:e(()=>[t(c.AppHeader,{"hamberger-menu":!1}),t(F,{class:"wee-container-responsive-center"},{default:e(()=>[t(E,{padding:"",class:"q-ma-md wee-bg-white"},{default:e(()=>[l("div",G,[l("div",O,[t(c.UserSettingDrawer)]),l("div",j,[t(a)])])]),_:1})]),_:1})]),_:1})}const Y=h(V,[["render",T],["__file","UserSettingLayout.vue"]]);export{Y as default};
