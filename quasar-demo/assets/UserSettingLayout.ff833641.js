import{d as h,r as v,o as s,a as i,w as e,Q as b,e as t,j as _,k as w,F as d,J as k,f as p,i as f,t as m,q as y,l as Q,m as g,g as x,u as S,v as L,R as C,_ as I,$ as A,C as B,bY as F,bF as $,I as u,a0 as q}from"./index.1297aae9.js";import{_ as D}from"./AppHeader.381b1a69.js";import{u as N}from"./useLang.596523dd.js";import"./ClosePopup.192184e9.js";import"./useAuth.c6a9d1a5.js";import"./useBase.9460d773.js";import"./useAxios.2557c634.js";const P=h({__name:"UserSettingDrawer",props:{overlay:{type:Boolean,default:!1}},setup(c){const{t:n}=N(),o=v([{icon:"bi-person",text:"page.settingsPublicProfile",link:"/settings/profile"},{icon:"bi-bell",text:"page.settingsNotification",link:"/settings/notifications"},{separator:!0},{header:"Access"},{icon:"bi-shield-lock",text:"page.settingsSecurity",link:"/settings/security"},{icon:"bi-envelope",text:"page.settingsEmail",link:"/settings/emails"}]);return(r,l)=>(s(),i(b,{square:"",flat:""},{default:e(()=>[t(L,{bordered:""},{default:e(()=>[(s(!0),_(d,null,w(o.value,a=>(s(),_(d,{key:a.text},[a.separator?(s(),i(k,{key:0,spaced:""})):a.header?(s(),i(p,{key:1,header:""},{default:e(()=>[f(m(a.header),1)]),_:2},1024)):y((s(),i(Q,{key:2,to:a.link,clickable:""},{default:e(()=>[t(g,{avatar:""},{default:e(()=>[t(x,{color:r.$q.dark.isActive?"white":"black",name:a.icon},null,8,["color","name"])]),_:2},1024),t(g,null,{default:e(()=>[t(p,null,{default:e(()=>[f(m(S(n)(`${a.text}`)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),[[C]])],64))),128))]),_:1})]),_:1}))}}),R={class:"row"},V={class:"col-12 col-md-4"},E={class:"col-12 col-md-8"},U={async preFetch({ssrContext:c,redirect:n}){const o=B();if(!o.auth){const{init:r}=F(c,n),l=await r();l&&o.setAuthen(l)}}},K=h({...U,__name:"UserSettingLayout",setup(c){return(n,o)=>{const r=I("router-view");return s(),i(A,{view:"hHh LpR fFf"},{default:e(()=>[t(D,{"hamberger-menu":!1}),t(q,{class:"wee-container-responsive-center"},{default:e(()=>[t($,{padding:"",class:"q-ma-md wee-bg-white"},{default:e(()=>[u("div",R,[u("div",V,[t(P)]),u("div",E,[t(r)])])]),_:1})]),_:1})]),_:1})}}});export{K as default};
