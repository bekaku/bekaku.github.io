import{d as j,C as F,a1 as P,r as E,a8 as G,a9 as $,o as n,a as o,w as a,G as L,aa as O,e,y as _,u as l,ab as R,H as h,K as C,ac as J,i as u,ad as B,I as p,ae as K,af as U,ag as Y,B as k,ah as W,ai as X,aj as Z,ak as ee,g as r,al as ae,am as x,v as q,l as c,m as s,t as i,J as Q,an as le,q as v,ao as te,ap as se,f as T,aq as V,j as I,k as D,ar as M,as as ne,F as z,a5 as ue,at as oe,au as re,av as ie,aw as de}from"./index.0f1d0ef3.js";import{C as w}from"./ClosePopup.8ff13798.js";import{u as ce}from"./useLang.44b01c23.js";import{u as fe}from"./useAuth.da8e0601.js";const me=p("img",{src:"/quasar-starter-template/logo/logo.png"},null,-1),_e={class:"YL__toolbar-input-container row no-wrap"},pe={class:"q-gutter-sm row items-center no-wrap"},be=["src"],he=["src"],ye=j({__name:"AppHeader",props:{hambergerMenu:{type:Boolean,default:!0}},setup(N){const{t:f}=ce(),y=F(),m=P(),{signOut:H}=fe(),S=E(""),A=G(()=>$.find(d=>d.iso==m.locale));return(d,g)=>(n(),o(O,{class:L(["q-py-xs",d.$q.dark.isActive?"wee-second-bg-color-theme-dark text-white":"bg-white text-black"]),"height-hint":"58"},{default:a(()=>[e(de,null,{default:a(()=>[N.hambergerMenu?(n(),o(_,{key:0,flat:"",dense:"",round:"",onClick:g[0]||(g[0]=t=>l(m).setLeftDrawer(!l(m).leftDrawerOpen)),"aria-label":"Menu",icon:l(R)},null,8,["icon"])):h("",!0),d.$q.screen.gt.xs?(n(),o(_,{key:1,flat:"","no-caps":"","no-wrap":"",class:"q-ml-xs",ripple:!1,to:"/"},{default:a(()=>[e(C,{square:"",class:"q-ml-xs",size:"36px"},{default:a(()=>[me]),_:1}),e(J,{shrink:"",class:L(["text-weight-bold text-uppercase",d.$q.dark.isActive?"text-white":"text-black"])},{default:a(()=>[u(" Vue Social ")]),_:1},8,["class"])]),_:1})):h("",!0),e(B),p("div",_e,[e(K,{dense:"",outlined:"",square:"",modelValue:S.value,"onUpdate:modelValue":g[1]||(g[1]=t=>S.value=t),placeholder:l(f)("base.search"),class:"col"},{append:a(()=>[e(_,{round:"",dense:"",flat:"",icon:l(U)},null,8,["icon"])]),_:1},8,["modelValue","placeholder"])]),e(B),p("div",pe,[d.$q.screen.gt.sm?(n(),o(_,{key:0,round:"",dense:"",flat:"",icon:l(Y)},{default:a(()=>[e(k,null,{default:a(()=>[u("Create a video or post")]),_:1})]),_:1},8,["icon"])):h("",!0),d.$q.screen.gt.sm?(n(),o(_,{key:1,round:"",dense:"",flat:"",icon:l(W)},{default:a(()=>[e(k,null,{default:a(()=>[u("Apps")]),_:1})]),_:1},8,["icon"])):h("",!0),d.$q.screen.gt.sm?(n(),o(_,{key:2,round:"",dense:"",flat:"",icon:l(X)},{default:a(()=>[e(k,null,{default:a(()=>[u("Messages")]),_:1})]),_:1},8,["icon"])):h("",!0),e(_,{round:"",dense:"",flat:"",icon:l(Z),class:"text-weight-bolder"},{default:a(()=>[e(ee,{color:"negative","text-color":"white",floating:""},{default:a(()=>[u(" 2 ")]),_:1}),e(k,null,{default:a(()=>[u("Notifications")]),_:1})]),_:1},8,["icon"]),e(_,{dense:"",flat:"","no-wrap":""},{default:a(()=>[e(C,{class:"shadow-5",round:"",size:"36px"},{default:a(()=>{var t,b;return[p("img",{src:(b=(t=l(y).auth)==null?void 0:t.avatar)==null?void 0:b.thumbnail},null,8,be)]}),_:1}),e(r,{name:l(ae),size:"16px"},null,8,["name"]),e(x,null,{default:a(()=>[e(q,{style:{"min-width":"260px"}},{default:a(()=>[e(c,null,{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(C,null,{default:a(()=>{var t,b;return[p("img",{src:(b=(t=l(y).auth)==null?void 0:t.avatar)==null?void 0:b.thumbnail},null,8,he)]}),_:1})]),_:1}),e(s,null,{default:a(()=>{var t;return[p("div",null,[u(" Signed in as "),p("strong",null,i((t=l(y).auth)==null?void 0:t.username),1)])]}),_:1})]),_:1}),e(Q),e(c,{clickable:""},{default:a(()=>[e(s,null,{default:a(()=>[p("div",null,[e(r,{name:l(le),color:"primary",class:"q-mr-sm",size:"18px"},null,8,["name"]),u(" Set your status ")])]),_:1})]),_:1}),e(Q),v((n(),o(c,{clickable:""},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(r,{name:l(te)},null,8,["name"])]),_:1}),e(s,null,{default:a(()=>[u(i(l(f)("base.yourProfile")),1)]),_:1})]),_:1})),[[w]]),e(c,{clickable:""},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(r,{name:l(se)},null,8,["name"])]),_:1}),e(s,null,{default:a(()=>[e(T,{lines:"1"},{default:a(()=>[u(i(l(f)("base.appearance"))+" : "+i(l(f)(`theme.${l(m).theme}`)),1)]),_:1})]),_:1}),e(s,{side:""},{default:a(()=>[e(r,{name:l(V)},null,8,["name"])]),_:1}),e(x,{anchor:d.$q.screen.gt.xs?"top end":"bottom left",self:"top start"},{default:a(()=>[e(q,{style:{"min-width":"150px"}},{default:a(()=>[(n(!0),I(z,null,D(l(ne),t=>(n(),o(c,{clickable:"",key:t.key,onClick:b=>l(m).setThemeSetting(t.key)},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(r,{name:t.icon},null,8,["name"])]),_:2},1024),e(s,null,{default:a(()=>[u(i(l(f)(t.text)),1)]),_:2},1024),t.key==l(m).themeSetting?(n(),o(s,{key:0,side:""},{default:a(()=>[e(r,{name:l(M)},null,8,["name"])]),_:1})):h("",!0)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["anchor"])]),_:1}),e(c,{clickable:""},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(r,{name:l(ue)},null,8,["name"])]),_:1}),e(s,null,{default:a(()=>[e(T,{lines:"1"},{default:a(()=>[u(i(l(f)("base.language"))+" : "+i(A.value?A.value.name:""),1)]),_:1})]),_:1}),e(s,{side:""},{default:a(()=>[e(r,{name:l(V)},null,8,["name"])]),_:1}),e(x,{anchor:d.$q.screen.gt.xs?"top end":"bottom left",self:"top start"},{default:a(()=>[e(q,{style:{"min-width":"150px"}},{default:a(()=>[(n(!0),I(z,null,D(l($),t=>(n(),o(c,{clickable:"",key:t.iso,onClick:b=>l(m).setLocale(t.iso)},{default:a(()=>[e(s,null,{default:a(()=>[u(i(t.name),1)]),_:2},1024),t.iso==l(m).locale?(n(),o(s,{key:0,side:""},{default:a(()=>[e(r,{name:l(M)},null,8,["name"])]),_:1})):h("",!0)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["anchor"])]),_:1}),e(Q),v((n(),o(c,{clickable:""},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(r,{name:l(oe)},null,8,["name"])]),_:1}),e(s,null,{default:a(()=>[u(i(l(f)("base.help")),1)]),_:1})]),_:1})),[[w]]),v((n(),o(c,{clickable:"",to:"/settings"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(r,{name:l(re)},null,8,["name"])]),_:1}),e(s,null,{default:a(()=>[u(i(l(f)("base.setting")),1)]),_:1})]),_:1})),[[w]]),v((n(),o(c,{clickable:"",onClick:l(H)},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(r,{name:l(ie)},null,8,["name"])]),_:1}),e(s,null,{default:a(()=>[u(i(l(f)("base.logout")),1)]),_:1})]),_:1},8,["onClick"])),[[w]])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1},8,["class"]))}});export{ye as _};
