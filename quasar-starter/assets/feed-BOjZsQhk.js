import{l as k,c1 as P,H as W,r as Q,m,n as r,eK as O,w as t,x as e,bd as M,ac as y,aY as q,af as S,bc as V,at as u,a3 as s,aJ as j,d_ as K,bJ as $,ar as f,as as l,au as c,a0 as a,a4 as d,cV as z,u as H,ap as C,f2 as B,cQ as R,$ as E,f3 as X,a2 as I,f4 as Z,aT as w,bO as ee,X as F,aq as J,ao as te,t as x,aV as v,di as ae,f5 as le,f6 as se,a1 as ne,f7 as A,ax as re,cD as oe,ey as G,aw as ue,f8 as ie,f9 as de,fa as ce,bj as fe,bl as me,bm as _e}from"./index-D_to5wmt.js";import{_ as pe}from"./BaseHeader.vue_vue_type_style_index_0_lang-DUGEi6fz.js";import{_ as Y}from"./BaseLink.vue_vue_type_script_setup_true_lang-Lvzpc2Kf.js";import{l as N}from"./index-CLkVnr6J.js";import{B as D}from"./BaseCard-BeCehtGl.js";import{_ as xe}from"./UserCard.vue_vue_type_script_setup_true_lang-C7sSX5Wz.js";import"./ClosePopup-B74q-YkR.js";import"./BaseAvatar-D6UCgu2h.js";import"./FileManagerService-CYEX_33d.js";import"./useAxios-BVW2bjHp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useAuth-DS6lQClk.js";import"./BaseLangugeSwitcherButton.vue_vue_type_script_setup_true_lang-BFAV-xk8.js";import"./BaseButton-RINx7LWR.js";const ve=k({__name:"FeedDrawer",props:{overlay:{type:Boolean,default:!1},side:{type:String,default:"left"}},setup(h){const{dark:o}=P(),{isSmallScreen:i}=W(),n=Q(!0),g=Q(!i.value),p=[{icon:K,text:"Home",link:"/"}],b=[{icon:"bi-folder2",text:"Library"},{icon:"bi-clock-history",text:"History"},{icon:"bi-clock",text:"Watch later"},{icon:"bi-hand-thumbs-up",text:"Liked videos"}],L=[{icon:"bi-play-btn",text:"Movies & Shows"},{icon:"bi-cast",text:"Gaming"},{icon:"bi-tv",text:"Live"}],U=[{icon:"bi-gear",text:"Settings"},{icon:"bi-flag",text:"Report history"},{icon:"bi-question-circle",text:"Help"},{icon:"bi-info-square",text:"Send feedback"}];return(Ve,T)=>(r(),m(O,{modelValue:g.value,"onUpdate:modelValue":T[0]||(T[0]=_=>g.value=_),"show-if-above":"",width:240,overlay:h.overlay,side:h.side,bordered:"",mini:n.value,onMouseover:T[1]||(T[1]=_=>n.value=!1),onMouseout:T[2]||(T[2]=_=>n.value=!0),"mini-to-overlay":""},{default:t(()=>[e(j,{class:"fit"},{default:t(()=>[e(M,{padding:"",class:"menu-list"},{default:t(()=>[(r(),y(S,null,q(p,_=>$(e(f,{key:_.text,to:_.link,clickable:""},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(c,{color:a(o).isActive?"white":"black",name:_.icon},null,8,["color","name"])]),_:2},1024),e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[s(d(_.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]),[[z]])),64)),(r(),y(S,null,q(b,_=>$(e(f,{key:_.text,clickable:""},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(c,{color:a(o).isActive?"white":"black",name:_.icon},null,8,["color","name"])]),_:2},1024),e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[s(d(_.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),[[z]])),64)),e(V,{class:"q-mt-md q-mb-xs"}),e(u,{header:"",class:"text-weight-bold text-uppercase"},{default:t(()=>T[3]||(T[3]=[s(" More from Youtube ")])),_:1}),(r(),y(S,null,q(L,_=>$(e(f,{key:_.text,clickable:""},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(c,{color:a(o).isActive?"white":"black",name:_.icon},null,8,["color","name"])]),_:2},1024),e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[s(d(_.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),[[z]])),64)),e(V,{class:"q-my-md"}),(r(),y(S,null,q(U,_=>$(e(f,{key:_.text,clickable:""},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(c,{color:a(o).isActive?"white":"black",name:_.icon},null,8,["color","name"])]),_:2},1024),e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[s(d(_.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),[[z]])),64)),e(V,{class:"q-mt-md q-mb-lg"})]),_:1})]),_:1})]),_:1},8,["modelValue","overlay","side","mini"]))}}),be=k({__name:"SectionFollowwingTag",setup(h){const{t:o}=H(),i=Q([{tag:"FreeDocumentary",author:"TrebleRose68",id:1},{tag:"Documentary",author:"Bekaku",id:2}]);return(n,g)=>(r(),m(D,{style:C({width:`${a(B)}px`})},{default:t(()=>[e(M,null,{default:t(()=>[e(u,{header:""},{default:t(()=>[e(c,{name:a(N),class:"q-mr-sm"},null,8,["name"]),s(d(a(o)("followingTag")),1)]),_:1}),(r(!0),y(S,null,q(i.value,(p,b)=>(r(),m(f,{key:b},{default:t(()=>[e(l,{side:"",top:""},{default:t(()=>[e(c,{name:a(N)},null,8,["name"])]),_:1}),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>[e(Y,{label:p.tag,to:`/tag/${p.tag}`,color:"text-black","color-dark":"text-white"},null,8,["label","to"])]),_:2},1024),e(u,{caption:""},{default:t(()=>[s(" By "+d(p.author),1)]),_:2},1024)]),_:2},1024),e(l,{side:""},{default:t(()=>[e(E,{class:"text-capitalize",size:"sm",flat:"",dense:"",round:"",icon:a(X)},{default:t(()=>[e(I,null,{default:t(()=>[s(d(a(o)("base.unfollow")),1)]),_:1})]),_:1},8,["icon"])]),_:1})]),_:2},1024))),128)),$((r(),m(f,{clickable:""},{default:t(()=>[e(l,{side:""},{default:t(()=>[e(c,{color:"primary",name:a(R)},null,8,["name"])]),_:1}),e(l,{class:"text-primary"},{default:t(()=>[s(d(a(o)("base.seeMore")),1)]),_:1})]),_:1})),[[z]])]),_:1})]),_:1},8,["style"]))}}),ge=k({__name:"SectionSavedPost",setup(h){const{t:o}=H(),i=Q([{image:"https://picsum.photos/160",title:"Sobering up has had a negative affect on relationship with [25f] gf. How to handle?",author:"BigGumbyLover"},{image:"https://picsum.photos/160",title:"Worker disappears after he was accidentally paid more than 300 times his salary",author:"Flair_Helper"},{image:"https://i.redd.it/5jrr5k4sbs991.jpg",title:"The only picture we have of my great grandfather (left), with an unknown man (circa 1910)",author:"TrebleRose68"}]);return(n,g)=>(r(),m(D,{style:C({width:`${a(B)}px`})},{default:t(()=>[e(M,null,{default:t(()=>[e(u,{header:""},{default:t(()=>[e(c,{name:a(Z),class:"q-mr-sm"},null,8,["name"]),s(d(a(o)("savedPost")),1)]),_:1}),(r(!0),y(S,null,q(i.value,(p,b)=>(r(),m(f,{key:b,clickable:""},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(w,{src:p.image,class:"bg-gray-1","spinner-color":"primary","no-native-menu":""},null,8,["src"])]),_:2},1024),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>[s(d(p.title),1)]),_:2},1024),e(u,{caption:""},{default:t(()=>[s(d(p.author),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),$((r(),m(f,{clickable:""},{default:t(()=>[e(l,{side:""},{default:t(()=>[e(c,{color:"primary",name:a(R)},null,8,["name"])]),_:1}),e(l,{class:"text-primary"},{default:t(()=>[s(d(a(o)("base.seeMore")),1)]),_:1})]),_:1})),[[z]])]),_:1})]),_:1},8,["style"]))}}),ye=k({__name:"FeedLeft",setup(h){const o=ee(),{screen:i}=P();return(n,g)=>(r(),y("div",{class:J(a(i).gt.sm?"q-mx-md":"")},[e(j,{style:C({height:"90vh",width:a(B)+"px"})},{default:t(()=>[e(D,{style:C({width:`${a(B)}px`})},{default:t(()=>[a(o).auth?(r(),m(xe,{key:0,"avatar-image":a(o).auth?.avatar?.image,"cover-image":a(o).loginedCover,name:a(o).loginedDisplay,description:"Software Engineer",height:"100px","avatar-top":"35px","avatar-size":"65px",descriptionStyle:"margin-top:5px"},null,8,["avatar-image","cover-image","name"])):F("",!0)]),_:1},8,["style"]),a(i).gt.sm?(r(),m(ge,{key:0})):F("",!0),a(i).gt.sm?(r(),m(be,{key:1,class:"q-mt-md"})):F("",!0)]),_:1},8,["style"])],2))}}),he={class:"row items-center q-gutter-x-sm"},we={class:"row items-center q-gutter-x-sm q-gutter-y-xs"},ke={class:"YL__drawer-footer-link",href:"javascript:void(0)"},qe=k({__name:"SiteLink",setup(h){const{dark:o}=P(),{t:i}=H(),n=[{text:"base.termAndprivacyPolicy",link:"http://www.grandats.com/synapse-policy/policy.html",external:!0}],g="1.0.0";return(p,b)=>(r(),m(te,{flat:"",class:"q-mt-md bg-transparent"},{default:t(()=>[x("div",{class:J(["q-py-md q-px-md",a(o).isActive?"text-grey-5":"text-grey-7"])},[x("div",he,[(r(),y(S,null,q(n,L=>e(f,{key:L.text,href:L.link,target:"_blank"},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(c,{name:a(le)},null,8,["name"])]),_:1}),e(l,null,{default:t(()=>[e(u,{caption:""},{default:t(()=>[s(d(a(i)(L.text)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"])),64))])],2),e(V),x("div",{class:J(["q-py-md q-px-md",a(o).isActive?"text-grey-5":"text-grey-7"])},[x("div",we,[e(v,{square:"",size:"42px",class:"q-mr-xs"},{default:t(()=>b[0]||(b[0]=[x("img",{src:"/logo/logo.png"},null,-1)])),_:1}),x("a",ke,d(`${a(i)("app.monogram")} @ ${a(ae)()} V.${a(g)}`),1)])],2)]),_:1}))}}),Se={class:"row justify-around text-center q-pa-xs"},$e=k({__name:"SectionLeaderboard",setup(h){const{t:o}=H();return(i,n)=>(r(),m(D,{style:C({width:`${a(B)}px`})},{default:t(()=>[e(M,null,{default:t(()=>[e(f,null,{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(v,{size:"48px",color:"orange",class:"text-white"},{default:t(()=>[e(c,{name:a(se)},null,8,["name"])]),_:1})]),_:1}),e(l,null,{default:t(()=>n[0]||(n[0]=[s(" Leaderboard ")])),_:1})]),_:1}),e(V),x("div",Se,[x("div",null,[e(v,{size:"48px"},{default:t(()=>[e(c,{name:a(ne),color:"positive"},null,8,["name"])]),_:1})]),n[1]||(n[1]=x("div",null,[x("div",{class:"text-weight-bold text-subtitle1"},"75"),x("span",{class:"text-muted"},"Your rank")],-1)),n[2]||(n[2]=x("div",null,[x("div",{class:"text-weight-bold text-subtitle1 text-positive"},"+7"),x("span",{class:"text-muted"},"Change")],-1))]),e(V),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>n[3]||(n[3]=[s(" Leaders ")])),_:1}),e(l,{side:""},{default:t(()=>n[4]||(n[4]=[s(" D/E ")])),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{"spinner-color":"white",src:a(A)},null,8,["src"])]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>n[5]||(n[5]=[s("1. Jane Groowy")])),_:1}),e(u,{caption:"",lines:"1"},{default:t(()=>n[6]||(n[6]=[s("Account Manager")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>n[7]||(n[7]=[s(" 5.5 ")])),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{"spinner-color":"white",src:a(A)},null,8,["src"])]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>n[8]||(n[8]=[s("2. Jane Groowy")])),_:1}),e(u,{caption:"",lines:"1"},{default:t(()=>n[9]||(n[9]=[s("Account Manager")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>n[10]||(n[10]=[s(" 5.5 ")])),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{"spinner-color":"white",src:a(A)},null,8,["src"])]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>n[11]||(n[11]=[s("3. Jane Groowy")])),_:1}),e(u,{caption:"",lines:"1"},{default:t(()=>n[12]||(n[12]=[s("Account Manager")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>n[13]||(n[13]=[s(" 5.5 ")])),_:1})]),_:1}),$((r(),m(f,{clickable:""},{default:t(()=>[e(l,{side:""},{default:t(()=>[e(c,{color:"primary",name:a(R)},null,8,["name"])]),_:1}),e(l,{class:"text-primary"},{default:t(()=>[s(d(a(o)("base.seeMore")),1)]),_:1})]),_:1})),[[z]])]),_:1})]),_:1},8,["style"]))}}),ze=k({__name:"SectionRecommendThemes",setup(h){const{t:o}=H(),i=Q([{name:"Security",author:"Jane Groowy",id:1},{name:"Coding",author:"Doug McMillion",id:2},{name:"Clean",author:"Cristopfer Nisson",id:3}]);return(n,g)=>(r(),m(D,{style:C({width:`${a(B)}px`})},{default:t(()=>[e(M,null,{default:t(()=>[e(u,{header:""},{default:t(()=>[s(d(a(o)("recommendationsThemes")),1)]),_:1}),(r(!0),y(S,null,q(i.value,(p,b)=>(r(),m(f,{key:b},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{"spinner-color":"white",src:a(A)},null,8,["src"])]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[s(d(p.name),1)]),_:2},1024),e(u,{caption:""},{default:t(()=>[s("By "+d(p.author),1)]),_:2},1024)]),_:2},1024),e(l,{side:""},{default:t(()=>[e(E,{flat:"",round:"",dense:"",icon:a(re)},{default:t(()=>[e(I,null,{default:t(()=>g[0]||(g[0]=[s("Post it")])),_:1})]),_:1},8,["icon"])]),_:1})]),_:2},1024))),128)),$((r(),m(f,{clickable:""},{default:t(()=>[e(l,{side:""},{default:t(()=>[e(c,{color:"primary",name:a(R)},null,8,["name"])]),_:1}),e(l,{class:"text-primary"},{default:t(()=>[s(d(a(o)("base.seeMore")),1)]),_:1})]),_:1})),[[z]])]),_:1})]),_:1},8,["style"]))}}),Ce=k({__name:"SectionHashTagTrends",setup(h){const{t:o}=H(),i=Q([{tag:"FreeDocumentary",author:"TrebleRose68",id:1},{tag:"Documentary",author:"Bekaku",id:2}]);return(n,g)=>(r(),m(D,{style:C({width:`${a(B)}px`})},{default:t(()=>[e(M,null,{default:t(()=>[e(u,{header:""},{default:t(()=>[s(d(a(o)("hastagTrend")),1)]),_:1}),(r(!0),y(S,null,q(i.value,(p,b)=>(r(),m(f,{key:b},{default:t(()=>[e(l,{side:"",top:""},{default:t(()=>[e(c,{name:a(N)},null,8,["name"])]),_:1}),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>[e(Y,{label:p.tag,to:`/tag/${p.tag}`,color:"text-black","color-dark":"text-white"},null,8,["label","to"])]),_:2},1024),e(u,{caption:"",lines:"1"},{default:t(()=>[s(" Created by "+d(p.author),1)]),_:2},1024)]),_:2},1024),e(l,{side:""},{default:t(()=>[e(E,{class:"text-capitalize",round:"",flat:"",dense:"",icon:a(oe)},{default:t(()=>[e(I,null,{default:t(()=>[s(d(a(o)("base.follow")),1)]),_:1})]),_:1},8,["icon"])]),_:1})]),_:2},1024))),128)),$((r(),m(f,{clickable:""},{default:t(()=>[e(l,{side:""},{default:t(()=>[e(c,{color:"primary",name:a(R)},null,8,["name"])]),_:1}),e(l,{class:"text-primary"},{default:t(()=>[s(d(a(o)("base.seeMore")),1)]),_:1})]),_:1})),[[z]])]),_:1})]),_:1},8,["style"]))}}),Be=k({__name:"SectionTodayMostView",setup(h){const{t:o}=H(),{dark:i}=P(),n=Q([{title:"The Six Morning Habit of SEO Specialist at Taksdfds",author:"Chanavee Bekaku"},{title:"Unconscious Bias",author:"Stacey Gordon"},{title:"Critical Thinking for Better life",author:"Becki Saltzman"}]);return(g,p)=>(r(),m(D,{style:C({width:`${a(B)}px`})},{default:t(()=>[e(M,null,{default:t(()=>[e(u,{header:""},{default:t(()=>[s(d(a(o)("todayMostViewPosts")),1)]),_:1}),(r(!0),y(S,null,q(n.value,(b,L)=>(r(),m(f,{key:L},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(v,{size:"36px",color:a(i).isActive?"white":"blue-1",class:J(a(i).isActive?"app-main-bg":"text-blue")},{default:t(()=>[s(d(L+1),1)]),_:2},1032,["color","class"])]),_:2},1024),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>[s(d(b.title),1)]),_:2},1024),e(u,{caption:"",lines:"1"},{default:t(()=>[s("By "+d(b.author),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),$((r(),m(f,{clickable:""},{default:t(()=>[e(l,{side:""},{default:t(()=>[e(c,{color:"primary",name:a(R)},null,8,["name"])]),_:1}),e(l,{class:"text-primary"},{default:t(()=>[s(d(a(o)("base.seeMore")),1)]),_:1})]),_:1})),[[z]])]),_:1})]),_:1},8,["style"]))}}),Le=k({__name:"SectionRecentPrized",setup(h){return(o,i)=>(r(),m(D,null,{default:t(()=>[e(M,{dense:"",class:"q-pb-md"},{default:t(()=>[e(u,{header:""},{default:t(()=>i[0]||(i[0]=[s("Recent activity")])),_:1}),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{src:a(A)},null,8,["src"])]),_:1}),e(v,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(w,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(c,{name:a(G),size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(u,{caption:"",class:"text-center",lines:"1"},{default:t(()=>i[1]||(i[1]=[s(" Chanavee gives prize to Bekaku ")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>[e(c,{name:a(ue)},null,8,["name"])]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{src:a(A)},null,8,["src"])]),_:1}),e(v,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(w,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(c,{name:a(G),size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(u,{caption:"",lines:"1"},{default:t(()=>i[2]||(i[2]=[s(" Chanavee gives love to Lisa ")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>[e(c,{name:a(ie)},null,8,["name"])]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{src:a(A)},null,8,["src"])]),_:1}),e(v,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(w,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(c,{name:a(G),size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(u,{caption:"",lines:"1"},{default:t(()=>i[3]||(i[3]=[s(" Chanavee comment to Lisa post ")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>[e(c,{name:a(de)},null,8,["name"])]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{src:a(A)},null,8,["src"])]),_:1}),e(v,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(w,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(c,{name:a(G),size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(u,{caption:"",lines:"1"},{default:t(()=>i[4]||(i[4]=[s(" Chanavee adopted Lisa post ")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>[e(c,{name:a(ce)},null,8,["name"])]),_:1})]),_:1})]),_:1})]),_:1}))}}),Te={class:"q-mx-md"},Ae=k({__name:"FeedRight",setup(h){return(o,i)=>(r(),y("div",Te,[e(j,{style:C({height:"90vh",width:a(B)+"px"})},{default:t(()=>[e(Le),e($e),e(ze,{class:"q-mt-md"}),e(Ce,{class:"q-mt-md"}),e(Be,{class:"q-mt-md"}),e(qe)]),_:1},8,["style"])]))}}),Me={class:"row"},De={key:0,class:"col-12 col-md-3 app-feed-page"},Qe={class:"col-12 col-md-6 app-feed-page"},He={key:1,class:"col-12 col-md-3 app-feed-page"},Xe=k({__name:"feed",setup(h){const{screen:o}=P();return(i,n)=>{const g=fe("router-view");return r(),m(_e,{view:"hHh LpR fFf"},{default:t(()=>[e(pe,{bordered:""}),e(ve,{overlay:""}),e(me,{class:"app-feed-container q-my-lg"},{default:t(()=>[x("div",Me,[a(o).gt.sm?(r(),y("div",De,[e(ye,{class:"fixed"})])):F("",!0),x("div",Qe,[e(g)]),a(o).gt.sm?(r(),y("div",He,[e(Ae,{class:"fixed"})])):F("",!0)])]),_:1})]),_:1})}}});export{Xe as default};
