import{l as k,bN as P,N as U,r as D,m,n as r,fl as O,w as t,x as e,bg as A,$ as g,a_ as q,ai as S,bf as V,av as u,L as s,aL as E,cC as X,b8 as $,at as f,au as l,aw as c,J as a,M as d,b9 as z,u as H,as as C,fr as L,d2 as R,a7 as J,fs as K,Q as j,ft as Z,aV as w,bM as ee,a3 as F,I as N,ar as te,t as x,aX as v,dy as ae,fu as le,fv as se,a8 as ne,fw as T,az as re,cW as oe,ct as G,ay as ue,fx as ie,fy as de,fz as ce,_ as fe,bn as me,bo as _e}from"./index-CLKqN-vN.js";import{_ as pe}from"./BaseHeader.vue_vue_type_style_index_0_lang-DEqU1nBi.js";import{_ as W}from"./BaseLink.vue_vue_type_script_setup_true_lang-DJfgxdwQ.js";import{l as I}from"./index-CLkVnr6J.js";import{B as Q}from"./BaseCard-IBlaP6p_.js";import{_ as xe}from"./UserCard.vue_vue_type_script_setup_true_lang-Y4o_dXau.js";import"./ClosePopup-BlTOv8y4.js";import"./BaseAvatar-DnAxF3hq.js";import"./FileManagerService-gOE363Ni.js";import"./useAxios-q9_gPrcg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useAuth-B1r19eqz.js";import"./BaseLangugeSwitcherButton.vue_vue_type_script_setup_true_lang-DJYi_gbI.js";import"./BaseButton-B0k9Tcp5.js";import"./BaseTooltip.vue_vue_type_script_setup_true_lang-BJUeJRon.js";const ve=k({__name:"FeedDrawer",props:{overlay:{type:Boolean,default:!1},side:{type:String,default:"left"}},setup(h){const{dark:o}=P(),{isSmallScreen:i}=U(),n=D(!0),b=D(!i.value),p=[{icon:X,text:"Home",link:"/"}],y=[{icon:"bi-folder2",text:"Library"},{icon:"bi-clock-history",text:"History"},{icon:"bi-clock",text:"Watch later"},{icon:"bi-hand-thumbs-up",text:"Liked videos"}],B=[{icon:"bi-play-btn",text:"Movies & Shows"},{icon:"bi-cast",text:"Gaming"},{icon:"bi-tv",text:"Live"}],Y=[{icon:"bi-gear",text:"Settings"},{icon:"bi-flag",text:"Report history"},{icon:"bi-question-circle",text:"Help"},{icon:"bi-info-square",text:"Send feedback"}];return(Ve,M)=>(r(),m(O,{modelValue:b.value,"onUpdate:modelValue":M[0]||(M[0]=_=>b.value=_),"show-if-above":"",width:240,overlay:h.overlay,side:h.side,bordered:"",mini:n.value,onMouseover:M[1]||(M[1]=_=>n.value=!1),onMouseout:M[2]||(M[2]=_=>n.value=!0),"mini-to-overlay":""},{default:t(()=>[e(E,{class:"fit"},{default:t(()=>[e(A,{padding:"",class:"menu-list"},{default:t(()=>[(r(),g(S,null,q(p,_=>$(e(f,{key:_.text,to:_.link,clickable:""},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(c,{color:a(o).isActive?"white":"black",name:_.icon},null,8,["color","name"])]),_:2},1024),e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[s(d(_.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]),[[z]])),64)),(r(),g(S,null,q(y,_=>$(e(f,{key:_.text,clickable:""},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(c,{color:a(o).isActive?"white":"black",name:_.icon},null,8,["color","name"])]),_:2},1024),e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[s(d(_.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),[[z]])),64)),e(V,{class:"q-mt-md q-mb-xs"}),e(u,{header:"",class:"text-weight-bold text-uppercase"},{default:t(()=>M[3]||(M[3]=[s(" More from Youtube ")])),_:1}),(r(),g(S,null,q(B,_=>$(e(f,{key:_.text,clickable:""},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(c,{color:a(o).isActive?"white":"black",name:_.icon},null,8,["color","name"])]),_:2},1024),e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[s(d(_.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),[[z]])),64)),e(V,{class:"q-my-md"}),(r(),g(S,null,q(Y,_=>$(e(f,{key:_.text,clickable:""},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(c,{color:a(o).isActive?"white":"black",name:_.icon},null,8,["color","name"])]),_:2},1024),e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[s(d(_.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),[[z]])),64)),e(V,{class:"q-mt-md q-mb-lg"})]),_:1})]),_:1})]),_:1},8,["modelValue","overlay","side","mini"]))}}),ye=k({__name:"SectionFollowwingTag",setup(h){const{t:o}=H(),i=D([{tag:"FreeDocumentary",author:"TrebleRose68",id:1},{tag:"Documentary",author:"Bekaku",id:2}]);return(n,b)=>(r(),m(Q,{style:C({width:`${a(L)}px`})},{default:t(()=>[e(A,null,{default:t(()=>[e(u,{header:""},{default:t(()=>[e(c,{name:a(I),class:"q-mr-sm"},null,8,["name"]),s(d(a(o)("followingTag")),1)]),_:1}),(r(!0),g(S,null,q(i.value,(p,y)=>(r(),m(f,{key:y},{default:t(()=>[e(l,{side:"",top:""},{default:t(()=>[e(c,{name:a(I)},null,8,["name"])]),_:1}),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>[e(W,{label:p.tag,to:`/tag/${p.tag}`,color:"text-black","color-dark":"text-white"},null,8,["label","to"])]),_:2},1024),e(u,{caption:""},{default:t(()=>[s(" By "+d(p.author),1)]),_:2},1024)]),_:2},1024),e(l,{side:""},{default:t(()=>[e(J,{class:"text-capitalize",size:"sm",flat:"",dense:"",round:"",icon:a(K)},{default:t(()=>[e(j,null,{default:t(()=>[s(d(a(o)("base.unfollow")),1)]),_:1})]),_:1},8,["icon"])]),_:1})]),_:2},1024))),128)),$((r(),m(f,{clickable:""},{default:t(()=>[e(l,{side:""},{default:t(()=>[e(c,{color:"primary",name:a(R)},null,8,["name"])]),_:1}),e(l,{class:"text-primary"},{default:t(()=>[s(d(a(o)("base.seeMore")),1)]),_:1})]),_:1})),[[z]])]),_:1})]),_:1},8,["style"]))}}),be=k({__name:"SectionSavedPost",setup(h){const{t:o}=H(),i=D([{image:"https://picsum.photos/160",title:"Sobering up has had a negative affect on relationship with [25f] gf. How to handle?",author:"BigGumbyLover"},{image:"https://picsum.photos/160",title:"Worker disappears after he was accidentally paid more than 300 times his salary",author:"Flair_Helper"},{image:"https://i.redd.it/5jrr5k4sbs991.jpg",title:"The only picture we have of my great grandfather (left), with an unknown man (circa 1910)",author:"TrebleRose68"}]);return(n,b)=>(r(),m(Q,{style:C({width:`${a(L)}px`})},{default:t(()=>[e(A,null,{default:t(()=>[e(u,{header:""},{default:t(()=>[e(c,{name:a(Z),class:"q-mr-sm"},null,8,["name"]),s(d(a(o)("savedPost")),1)]),_:1}),(r(!0),g(S,null,q(i.value,(p,y)=>(r(),m(f,{key:y,clickable:""},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(w,{src:p.image,class:"bg-gray-1","spinner-color":"primary","no-native-menu":""},null,8,["src"])]),_:2},1024),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>[s(d(p.title),1)]),_:2},1024),e(u,{caption:""},{default:t(()=>[s(d(p.author),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),$((r(),m(f,{clickable:""},{default:t(()=>[e(l,{side:""},{default:t(()=>[e(c,{color:"primary",name:a(R)},null,8,["name"])]),_:1}),e(l,{class:"text-primary"},{default:t(()=>[s(d(a(o)("base.seeMore")),1)]),_:1})]),_:1})),[[z]])]),_:1})]),_:1},8,["style"]))}}),ge=k({__name:"FeedLeft",setup(h){const o=ee(),{screen:i}=P();return(n,b)=>(r(),g("div",{class:N(a(i).gt.sm?"q-mx-md":"")},[e(E,{style:C({height:"90vh",width:a(L)+"px"})},{default:t(()=>[e(Q,{style:C({width:`${a(L)}px`})},{default:t(()=>[a(o).auth?(r(),m(xe,{key:0,"avatar-image":a(o).auth?.avatar?.image,"cover-image":a(o).loginedCover,name:a(o).loginedDisplay,description:"Software Engineer",height:"100px","avatar-top":"35px","avatar-size":"65px",descriptionStyle:"margin-top:5px"},null,8,["avatar-image","cover-image","name"])):F("",!0)]),_:1},8,["style"]),a(i).gt.sm?(r(),m(be,{key:0})):F("",!0),a(i).gt.sm?(r(),m(ye,{key:1,class:"q-mt-md"})):F("",!0)]),_:1},8,["style"])],2))}}),he={class:"row items-center q-gutter-x-sm"},we={class:"row items-center q-gutter-x-sm q-gutter-y-xs"},ke={class:"YL__drawer-footer-link",href:"javascript:void(0)"},qe=k({__name:"SiteLink",setup(h){const{dark:o}=P(),{t:i}=H(),n=[{text:"base.termAndprivacyPolicy",link:"http://www.grandats.com/synapse-policy/policy.html",external:!0}],b="1.0.1";return(p,y)=>(r(),m(te,{flat:"",class:"q-mt-md bg-transparent"},{default:t(()=>[x("div",{class:N(["q-py-md q-px-md",a(o).isActive?"text-grey-5":"text-grey-7"])},[x("div",he,[(r(),g(S,null,q(n,B=>e(f,{key:B.text,href:B.link,target:"_blank"},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(c,{name:a(le)},null,8,["name"])]),_:1}),e(l,null,{default:t(()=>[e(u,{caption:""},{default:t(()=>[s(d(a(i)(B.text)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"])),64))])],2),e(V),x("div",{class:N(["q-py-md q-px-md",a(o).isActive?"text-grey-5":"text-grey-7"])},[x("div",we,[e(v,{square:"",size:"42px",class:"q-mr-xs"},{default:t(()=>y[0]||(y[0]=[x("img",{src:"/logo/logo.png"},null,-1)])),_:1}),x("a",ke,d(`${a(i)("app.monogram")} @ ${a(ae)()} V.${a(b)}`),1)])],2)]),_:1}))}}),Se={class:"row justify-around text-center q-pa-xs"},$e=k({__name:"SectionLeaderboard",setup(h){const{t:o}=H();return(i,n)=>(r(),m(Q,{style:C({width:`${a(L)}px`})},{default:t(()=>[e(A,null,{default:t(()=>[e(f,null,{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(v,{size:"48px",color:"orange",class:"text-white"},{default:t(()=>[e(c,{name:a(se)},null,8,["name"])]),_:1})]),_:1}),e(l,null,{default:t(()=>n[0]||(n[0]=[s(" Leaderboard ")])),_:1})]),_:1}),e(V),x("div",Se,[x("div",null,[e(v,{size:"48px"},{default:t(()=>[e(c,{name:a(ne),color:"positive"},null,8,["name"])]),_:1})]),n[1]||(n[1]=x("div",null,[x("div",{class:"text-weight-bold text-subtitle1"},"75"),x("span",{class:"text-muted"},"Your rank")],-1)),n[2]||(n[2]=x("div",null,[x("div",{class:"text-weight-bold text-subtitle1 text-positive"},"+7"),x("span",{class:"text-muted"},"Change")],-1))]),e(V),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>n[3]||(n[3]=[s(" Leaders ")])),_:1}),e(l,{side:""},{default:t(()=>n[4]||(n[4]=[s(" D/E ")])),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{"spinner-color":"white",src:a(T)},null,8,["src"])]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>n[5]||(n[5]=[s("1. Jane Groowy")])),_:1}),e(u,{caption:"",lines:"1"},{default:t(()=>n[6]||(n[6]=[s("Account Manager")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>n[7]||(n[7]=[s(" 5.5 ")])),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{"spinner-color":"white",src:a(T)},null,8,["src"])]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>n[8]||(n[8]=[s("2. Jane Groowy")])),_:1}),e(u,{caption:"",lines:"1"},{default:t(()=>n[9]||(n[9]=[s("Account Manager")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>n[10]||(n[10]=[s(" 5.5 ")])),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{"spinner-color":"white",src:a(T)},null,8,["src"])]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>n[11]||(n[11]=[s("3. Jane Groowy")])),_:1}),e(u,{caption:"",lines:"1"},{default:t(()=>n[12]||(n[12]=[s("Account Manager")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>n[13]||(n[13]=[s(" 5.5 ")])),_:1})]),_:1}),$((r(),m(f,{clickable:""},{default:t(()=>[e(l,{side:""},{default:t(()=>[e(c,{color:"primary",name:a(R)},null,8,["name"])]),_:1}),e(l,{class:"text-primary"},{default:t(()=>[s(d(a(o)("base.seeMore")),1)]),_:1})]),_:1})),[[z]])]),_:1})]),_:1},8,["style"]))}}),ze=k({__name:"SectionRecommendThemes",setup(h){const{t:o}=H(),i=D([{name:"Security",author:"Jane Groowy",id:1},{name:"Coding",author:"Doug McMillion",id:2},{name:"Clean",author:"Cristopfer Nisson",id:3}]);return(n,b)=>(r(),m(Q,{style:C({width:`${a(L)}px`})},{default:t(()=>[e(A,null,{default:t(()=>[e(u,{header:""},{default:t(()=>[s(d(a(o)("recommendationsThemes")),1)]),_:1}),(r(!0),g(S,null,q(i.value,(p,y)=>(r(),m(f,{key:y},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{"spinner-color":"white",src:a(T)},null,8,["src"])]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[s(d(p.name),1)]),_:2},1024),e(u,{caption:""},{default:t(()=>[s("By "+d(p.author),1)]),_:2},1024)]),_:2},1024),e(l,{side:""},{default:t(()=>[e(J,{flat:"",round:"",dense:"",icon:a(re)},{default:t(()=>[e(j,null,{default:t(()=>b[0]||(b[0]=[s("Post it")])),_:1})]),_:1},8,["icon"])]),_:1})]),_:2},1024))),128)),$((r(),m(f,{clickable:""},{default:t(()=>[e(l,{side:""},{default:t(()=>[e(c,{color:"primary",name:a(R)},null,8,["name"])]),_:1}),e(l,{class:"text-primary"},{default:t(()=>[s(d(a(o)("base.seeMore")),1)]),_:1})]),_:1})),[[z]])]),_:1})]),_:1},8,["style"]))}}),Ce=k({__name:"SectionHashTagTrends",setup(h){const{t:o}=H(),i=D([{tag:"FreeDocumentary",author:"TrebleRose68",id:1},{tag:"Documentary",author:"Bekaku",id:2}]);return(n,b)=>(r(),m(Q,{style:C({width:`${a(L)}px`})},{default:t(()=>[e(A,null,{default:t(()=>[e(u,{header:""},{default:t(()=>[s(d(a(o)("hastagTrend")),1)]),_:1}),(r(!0),g(S,null,q(i.value,(p,y)=>(r(),m(f,{key:y},{default:t(()=>[e(l,{side:"",top:""},{default:t(()=>[e(c,{name:a(I)},null,8,["name"])]),_:1}),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>[e(W,{label:p.tag,to:`/tag/${p.tag}`,color:"text-black","color-dark":"text-white"},null,8,["label","to"])]),_:2},1024),e(u,{caption:"",lines:"1"},{default:t(()=>[s(" Created by "+d(p.author),1)]),_:2},1024)]),_:2},1024),e(l,{side:""},{default:t(()=>[e(J,{class:"text-capitalize",round:"",flat:"",dense:"",icon:a(oe)},{default:t(()=>[e(j,null,{default:t(()=>[s(d(a(o)("base.follow")),1)]),_:1})]),_:1},8,["icon"])]),_:1})]),_:2},1024))),128)),$((r(),m(f,{clickable:""},{default:t(()=>[e(l,{side:""},{default:t(()=>[e(c,{color:"primary",name:a(R)},null,8,["name"])]),_:1}),e(l,{class:"text-primary"},{default:t(()=>[s(d(a(o)("base.seeMore")),1)]),_:1})]),_:1})),[[z]])]),_:1})]),_:1},8,["style"]))}}),Le=k({__name:"SectionTodayMostView",setup(h){const{t:o}=H(),{dark:i}=P(),n=D([{title:"The Six Morning Habit of SEO Specialist at Taksdfds",author:"Chanavee Bekaku"},{title:"Unconscious Bias",author:"Stacey Gordon"},{title:"Critical Thinking for Better life",author:"Becki Saltzman"}]);return(b,p)=>(r(),m(Q,{style:C({width:`${a(L)}px`})},{default:t(()=>[e(A,null,{default:t(()=>[e(u,{header:""},{default:t(()=>[s(d(a(o)("todayMostViewPosts")),1)]),_:1}),(r(!0),g(S,null,q(n.value,(y,B)=>(r(),m(f,{key:B},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(v,{size:"36px",color:a(i).isActive?"white":"blue-1",class:N(a(i).isActive?"app-main-bg":"text-blue")},{default:t(()=>[s(d(B+1),1)]),_:2},1032,["color","class"])]),_:2},1024),e(l,null,{default:t(()=>[e(u,{lines:"1"},{default:t(()=>[s(d(y.title),1)]),_:2},1024),e(u,{caption:"",lines:"1"},{default:t(()=>[s("By "+d(y.author),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),$((r(),m(f,{clickable:""},{default:t(()=>[e(l,{side:""},{default:t(()=>[e(c,{color:"primary",name:a(R)},null,8,["name"])]),_:1}),e(l,{class:"text-primary"},{default:t(()=>[s(d(a(o)("base.seeMore")),1)]),_:1})]),_:1})),[[z]])]),_:1})]),_:1},8,["style"]))}}),Be=k({__name:"SectionRecentPrized",setup(h){return(o,i)=>(r(),m(Q,null,{default:t(()=>[e(A,{dense:"",class:"q-pb-md"},{default:t(()=>[e(u,{header:""},{default:t(()=>i[0]||(i[0]=[s("Recent activity")])),_:1}),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{src:a(T)},null,8,["src"])]),_:1}),e(v,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(w,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(c,{name:a(G),size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(u,{caption:"",class:"text-center",lines:"1"},{default:t(()=>i[1]||(i[1]=[s(" Chanavee gives prize to Bekaku ")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>[e(c,{name:a(ue)},null,8,["name"])]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{src:a(T)},null,8,["src"])]),_:1}),e(v,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(w,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(c,{name:a(G),size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(u,{caption:"",lines:"1"},{default:t(()=>i[2]||(i[2]=[s(" Chanavee gives love to Lisa ")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>[e(c,{name:a(ie)},null,8,["name"])]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{src:a(T)},null,8,["src"])]),_:1}),e(v,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(w,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(c,{name:a(G),size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(u,{caption:"",lines:"1"},{default:t(()=>i[3]||(i[3]=[s(" Chanavee comment to Lisa post ")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>[e(c,{name:a(de)},null,8,["name"])]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>[e(u,null,{default:t(()=>[e(v,{size:"36px"},{default:t(()=>[e(w,{src:a(T)},null,8,["src"])]),_:1}),e(v,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(w,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(c,{name:a(G),size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(u,{caption:"",lines:"1"},{default:t(()=>i[4]||(i[4]=[s(" Chanavee adopted Lisa post ")])),_:1})]),_:1}),e(l,{side:""},{default:t(()=>[e(c,{name:a(ce)},null,8,["name"])]),_:1})]),_:1})]),_:1})]),_:1}))}}),Me={class:"q-mx-md"},Te=k({__name:"FeedRight",setup(h){return(o,i)=>(r(),g("div",Me,[e(E,{style:C({height:"90vh",width:a(L)+"px"})},{default:t(()=>[e(Be),e($e),e(ze,{class:"q-mt-md"}),e(Ce,{class:"q-mt-md"}),e(Le,{class:"q-mt-md"}),e(qe)]),_:1},8,["style"])]))}}),Ae={class:"row"},Qe={key:0,class:"col-12 col-md-3 app-feed-page"},De={class:"col-12 col-md-6 app-feed-page"},He={key:1,class:"col-12 col-md-3 app-feed-page"},Ze=k({__name:"feed",setup(h){const{screen:o}=P();return(i,n)=>{const b=fe("router-view");return r(),m(_e,{view:"hHh LpR fFf"},{default:t(()=>[e(pe,{bordered:""}),e(ve,{overlay:""}),e(me,{class:"app-feed-container q-my-lg"},{default:t(()=>[x("div",Ae,[a(o).gt.sm?(r(),g("div",Qe,[e(ge,{class:"fixed"})])):F("",!0),x("div",De,[e(b)]),a(o).gt.sm?(r(),g("div",He,[e(Te,{class:"fixed"})])):F("",!0)])]),_:1})]),_:1})}}});export{Ze as default};
