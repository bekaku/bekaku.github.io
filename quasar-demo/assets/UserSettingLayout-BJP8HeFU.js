import{d as g,a as y,r as S,a4 as w,by as k,ba as L,_ as h,B as r,C as n,E as e,F as t,H as p,aW as Q,ai as d,aa as $,aV as u,O as _,R as f,aq as x,ab as A,ac as m,N as B,b8 as C,S as I,bF as P,A as U,Q as D,L as F,I as l,G as H}from"./index-DzrxKNnn.js";import{A as N}from"./AppHeader-Bqd-p9oM.js";import"./ClosePopup-DsK7QsUy.js";import"./BaseAvatar-XJg-8QrX.js";import"./AppImage-B1uLR3Vj.js";import"./FileManagerService-B_drXciZ.js";import"./useAxios-iI_x9o6-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useAuth-BVCkaVLN.js";const V=g({props:{overlay:{type:Boolean,default:!1}},setup(){const{t:s}=y(),o=S([{icon:w,text:"page.settingsPublicProfile",link:"/settings/profile"},{separator:!0},{header:"Access"},{icon:k,text:"page.settingsSecurity",link:"/settings/security"},{icon:L,text:"contactInfo",link:"/settings/emails"}]);return{t:s,links1:o}}});function q(s,o,i,c,b,v){return r(),n(I,{flat:"",class:"full-height"},{default:e(()=>[t(C,{bordered:""},{default:e(()=>[(r(!0),p(d,null,Q(s.links1,a=>(r(),p(d,{key:a.text},[a.separator?(r(),n($,{key:0,spaced:""})):a.header?(r(),n(u,{key:1,header:""},{default:e(()=>[_(f(a.header),1)]),_:2},1024)):x((r(),n(A,{key:2,to:a.link,clickable:""},{default:e(()=>[t(m,{avatar:""},{default:e(()=>[t(B,{color:s.$q.dark.isActive?"white":"black",name:a.icon},null,8,["color","name"])]),_:2},1024),t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[_(f(s.t(`${a.text}`)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),[[P]])],64))),128))]),_:1})]),_:1})}const E=h(V,[["render",q],["__file","UserSettingDrawer.vue"]]),R=g({__name:"UserSettingLayout",setup(s,{expose:o}){o();const i={AppHeader:N,UserSettingDrawer:E};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),O={class:"row"},j={class:"col-12 col-md-4"},G={class:"col-12 col-md-8"};function T(s,o,i,c,b,v){const a=U("router-view");return r(),n(D,{view:"hHh LpR fFf"},{default:e(()=>[t(c.AppHeader,{"hamberger-menu":!1}),t(H,{class:"wee-container-responsive-center"},{default:e(()=>[t(F,{padding:"",class:"q-ma-md wee-bg-white"},{default:e(()=>[l("div",O,[l("div",j,[t(c.UserSettingDrawer)]),l("div",G,[t(a)])])]),_:1})]),_:1})]),_:1})}const te=h(R,[["render",T],["__file","UserSettingLayout.vue"]]);export{te as default};