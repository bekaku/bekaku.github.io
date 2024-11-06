import{d as x,bw as G,r as z,ce as I,K as U,_ as y,B as d,C as p,E as t,F as e,b9 as F,H as v,aF as k,aq as q,ab as u,ac as n,N as c,aE as i,O as r,R as m,ai as P,et as Y,aa as T,am as W,eC as J,bG as A,a as D,bt as R,eS as K,eT as H,ae as S,al as C,S as L,eU as X,af as Q,ag as O,aH as Z,ah as M,aC as B,cg as $,eV as ee,I as g,ad as b,eW as V,eX as te,cN as ae,eY as le,cq as ne,cs as re,cO as ie,eZ as oe,e_ as se,e$ as de,A as ue,Q as ce,G as _e}from"./index-DDZXG7TO.js";import{e as fe}from"./index-BSkhW1H0.js";import{A as me}from"./AppHeader-DHcE1Grq.js";import{l as E,P as pe}from"./ProfileCard-B0smCZmW.js";import{A as N}from"./AppLink-DYIC7sog.js";import"./useAxios-Oymy46L5.js";import"./ClosePopup-BEkvAfed.js";import"./AppResult-Gk2Gg_cz.js";import"./SkeletonItem-o4bxJXkX.js";const ge=x({__name:"FeedDrawer",props:{overlay:{type:Boolean,default:!1},side:{type:String,default:"left"}},setup(_,{expose:l}){l();const{dark:s}=G(),a=z(!0),f=I(),j={dark:s,miniState:a,langugeAndThemeStore:f,links1:[{icon:U,text:"Home",link:"/"},{icon:fe,text:"Pinia Store",link:"/pinia"},{icon:"bi-translate",text:"I18n",link:"/i18n"},{icon:"bi-file-arrow-down",text:"Fetch data",link:"/fetch-data"}],links2:[{icon:"bi-folder2",text:"Library"},{icon:"bi-clock-history",text:"History"},{icon:"bi-clock",text:"Watch later"},{icon:"bi-hand-thumbs-up",text:"Liked videos"}],links3:[{icon:"bi-play-btn",text:"Movies & Shows"},{icon:"bi-cast",text:"Gaming"},{icon:"bi-tv",text:"Live"}],links4:[{icon:"bi-gear",text:"Settings"},{icon:"bi-flag",text:"Report history"},{icon:"bi-question-circle",text:"Help"},{icon:"bi-info-square",text:"Send feedback"}]};return Object.defineProperty(j,"__isScriptSetup",{enumerable:!1,value:!0}),j}});function be(_,l,s,a,f,h){return d(),p(J,{modelValue:a.langugeAndThemeStore.leftDrawerOpen,"onUpdate:modelValue":l[0]||(l[0]=o=>a.langugeAndThemeStore.leftDrawerOpen=o),"show-if-above":"",width:240,overlay:s.overlay,side:s.side,bordered:"",mini:a.miniState,onMouseover:l[1]||(l[1]=o=>a.miniState=!1),onMouseout:l[2]||(l[2]=o=>a.miniState=!0),"mini-to-overlay":""},{default:t(()=>[e(W,{class:"fit"},{default:t(()=>[e(F,{padding:"",class:"menu-list"},{default:t(()=>[(d(),v(P,null,k(a.links1,o=>q(e(u,{key:o.text,to:o.link,clickable:""},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(c,{color:a.dark.isActive?"white":"black",name:o.icon},null,8,["color","name"])]),_:2},1024),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[r(m(o.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]),[[A]])),64)),e(Y,{icon:"bi-file",label:"Pages"},{default:t(()=>[e(F,{class:"q-pl-lg"},{default:t(()=>[e(u,{to:"/auth/login","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(c,{name:"bi-box-arrow-in-right"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[3]||(l[3]=[r("Login-1")])),_:1})]),_:1})]),_:1}),e(u,{to:"/auth/login2","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(c,{name:"bi-box-arrow-in-right"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[4]||(l[4]=[r("Login-2")])),_:1})]),_:1})]),_:1}),e(u,{to:"/Lock","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(c,{name:"bi-lock"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[5]||(l[5]=[r("Lock Screen")])),_:1})]),_:1})]),_:1}),e(u,{to:"/Lock-2","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(c,{name:"bi-lock"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[6]||(l[6]=[r("Lock Screen - 2")])),_:1})]),_:1})]),_:1}),e(u,{to:"/Pricing","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(c,{name:"bi-list"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[7]||(l[7]=[r("Pricing")])),_:1})]),_:1})]),_:1}),e(i,{header:"",class:"text-weight-bold"},{default:t(()=>l[8]||(l[8]=[r("Generic")])),_:1}),e(u,{to:"/Profile","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(c,{name:"bi-person"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[9]||(l[9]=[r("User Profile")])),_:1})]),_:1})]),_:1}),e(u,{to:"/Maintenance","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(c,{name:"bi-gear"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[10]||(l[10]=[r("Maintenance")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(T,{class:"q-my-md"}),(d(),v(P,null,k(a.links2,o=>q(e(u,{key:o.text,clickable:""},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(c,{color:a.dark.isActive?"white":"black",name:o.icon},null,8,["color","name"])]),_:2},1024),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[r(m(o.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),[[A]])),64)),e(T,{class:"q-mt-md q-mb-xs"}),e(i,{header:"",class:"text-weight-bold text-uppercase"},{default:t(()=>l[11]||(l[11]=[r(" More from Youtube ")])),_:1}),(d(),v(P,null,k(a.links3,o=>q(e(u,{key:o.text,clickable:""},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(c,{color:a.dark.isActive?"white":"black",name:o.icon},null,8,["color","name"])]),_:2},1024),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[r(m(o.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),[[A]])),64)),e(T,{class:"q-my-md"}),(d(),v(P,null,k(a.links4,o=>q(e(u,{key:o.text,clickable:""},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(c,{color:a.dark.isActive?"white":"black",name:o.icon},null,8,["color","name"])]),_:2},1024),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[r(m(o.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),[[A]])),64)),e(T,{class:"q-mt-md q-mb-lg"})]),_:1})]),_:1})]),_:1},8,["modelValue","overlay","side","mini"])}const he=y(ge,[["render",be],["__file","FeedDrawer.vue"]]),ve=x({__name:"SectionSavedPost",setup(_,{expose:l}){l();const{t:s}=D(),a=z([{image:"https://picsum.photos/160",title:"Sobering up has had a negative affect on relationship with [25f] gf. How to handle?",author:"BigGumbyLover"},{image:"https://picsum.photos/160",title:"Worker disappears after he was accidentally paid more than 300 times his salary",author:"Flair_Helper"},{image:"https://i.redd.it/5jrr5k4sbs991.jpg",title:"The only picture we have of my great grandfather (left), with an unknown man (circa 1910)",author:"TrebleRose68"}]),f={t:s,savedList:a,get biChevronDown(){return R},get biBookmark(){return K},get FeedSectionWidth(){return H}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}});function Se(_,l,s,a,f,h){return d(),p(L,{flat:"",bordered:"",style:C({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(F,null,{default:t(()=>[e(i,{header:""},{default:t(()=>[e(c,{name:a.biBookmark,class:"q-mr-sm"},null,8,["name"]),r(m(a.t("savedPost")),1)]),_:1}),(d(!0),v(P,null,k(a.savedList,(o,w)=>(d(),p(u,{key:w,clickable:""},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(S,{src:o.image,class:"bg-gray-1","spinner-color":"primary","no-native-menu":""},null,8,["src"])]),_:2},1024),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>[r(m(o.title),1)]),_:2},1024),e(i,{caption:""},{default:t(()=>[r(m(o.author),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),q((d(),p(u,{clickable:""},{default:t(()=>[e(n,{side:""},{default:t(()=>[e(c,{color:"primary",name:a.biChevronDown},null,8,["name"])]),_:1}),e(n,{class:"text-primary"},{default:t(()=>[r(m(a.t("base.seeMore")),1)]),_:1})]),_:1})),[[A]])]),_:1})]),_:1},8,["style"])}const xe=y(ve,[["render",Se],["__file","SectionSavedPost.vue"]]),ye=x({__name:"SectionFollowwingTag",setup(_,{expose:l}){l();const{t:s}=D(),a=z([{tag:"FreeDocumentary",author:"TrebleRose68",id:1},{tag:"Documentary",author:"Bekaku",id:2}]),f={t:s,followingTags:a,AppLink:N,get biChevronDown(){return R},get biDashCircle(){return X},get laHashtagSolid(){return E},get FeedSectionWidth(){return H}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}});function we(_,l,s,a,f,h){return d(),p(L,{flat:"",bordered:"",style:C({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(F,null,{default:t(()=>[e(i,{header:""},{default:t(()=>[e(c,{name:a.laHashtagSolid,class:"q-mr-sm"},null,8,["name"]),r(m(a.t("followingTag")),1)]),_:1}),(d(!0),v(P,null,k(a.followingTags,(o,w)=>(d(),p(u,{key:w},{default:t(()=>[e(n,{side:"",top:""},{default:t(()=>[e(c,{name:a.laHashtagSolid},null,8,["name"])]),_:1}),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>[e(a.AppLink,{label:o.tag,color:"text-black","color-dark":"text-white"},null,8,["label"])]),_:2},1024),e(i,{caption:""},{default:t(()=>[r(" By "+m(o.author),1)]),_:2},1024)]),_:2},1024),e(n,{side:""},{default:t(()=>[e(Q,{class:"text-capitalize",size:"sm",flat:"",dense:"",round:"",icon:a.biDashCircle},{default:t(()=>[e(O,null,{default:t(()=>[r(m(a.t("base.unfollow")),1)]),_:1})]),_:1},8,["icon"])]),_:1})]),_:2},1024))),128)),q((d(),p(u,{clickable:""},{default:t(()=>[e(n,{side:""},{default:t(()=>[e(c,{color:"primary",name:a.biChevronDown},null,8,["name"])]),_:1}),e(n,{class:"text-primary"},{default:t(()=>[r(m(a.t("base.seeMore")),1)]),_:1})]),_:1})),[[A]])]),_:1})]),_:1},8,["style"])}const ke=y(ye,[["render",we],["__file","SectionFollowwingTag.vue"]]),qe=x({__name:"FeedLeft",setup(_,{expose:l}){l();const a={authenStore:Z(),ProfileCard:pe,SectionSavedPost:xe,SectionFollowwingTag:ke,get FeedSectionWidth(){return H}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function Pe(_,l,s,a,f,h){return d(),v("div",{class:B(_.$q.screen.gt.sm?"q-mx-md":"")},[e(W,{style:C({height:"90vh",width:a.FeedSectionWidth+"px"})},{default:t(()=>[e(L,{flat:"",bordered:"",class:"q-mb-md",style:C({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(a.ProfileCard,{"avatar-image":a.authenStore.loginedAvatar,"cover-image":a.authenStore.loginedCover,name:a.authenStore.loginedDisplay,description:"Software Engineer",height:"100px","avatar-top":"35px","avatar-size":"65px",descriptionStyle:"margin-top:5px","show-medal":""},null,8,["avatar-image","cover-image","name"])]),_:1},8,["style"]),_.$q.screen.gt.sm?(d(),p(a.SectionSavedPost,{key:0})):M("",!0),_.$q.screen.gt.sm?(d(),p(a.SectionFollowwingTag,{key:1,class:"q-mt-md"})):M("",!0)]),_:1},8,["style"])],2)}const Ae=y(qe,[["render",Pe],["__file","FeedLeft.vue"]]),Fe=x({__name:"SiteLink",setup(_,{expose:l}){l();const{t:s}=D(),h={t:s,buttons2:[{text:"base.termAndprivacyPolicy",link:"http://www.grandats.com/synapse-policy/policy.html",external:!0}],appVersion:"1.0.0",get getYearNow(){return $},get biShieldExclamation(){return ee}};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),Ce={class:"row items-center q-gutter-x-sm"},Le={class:"row items-center q-gutter-x-sm q-gutter-y-xs"},Te={class:"YL__drawer-footer-link",href:"javascript:void(0)"};function He(_,l,s,a,f,h){return d(),p(L,{flat:"",class:"q-mt-md bg-transparent"},{default:t(()=>[g("div",{class:B(["q-py-md q-px-md",_.$q.dark.isActive?"text-grey-5":"text-grey-7"])},[g("div",Ce,[(d(),v(P,null,k(a.buttons2,o=>e(u,{key:o.text,href:o.link,target:"_blank"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(c,{name:a.biShieldExclamation},null,8,["name"])]),_:1}),e(n,null,{default:t(()=>[e(i,{caption:""},{default:t(()=>[r(m(a.t(o.text)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"])),64))])],2),e(T),g("div",{class:B(["q-py-md q-px-md",_.$q.dark.isActive?"text-grey-5":"text-grey-7"])},[g("div",Le,[e(b,{square:"",size:"42px",class:"q-mr-xs"},{default:t(()=>l[0]||(l[0]=[g("img",{src:"/quasar-starter-template/logo/logo.png"},null,-1)])),_:1}),g("a",Te,m(`${a.t("app.monogram")} @ ${a.getYearNow()} V.${a.appVersion}`),1)])],2)]),_:1})}const De=y(Fe,[["render",He],["__file","SiteLink.vue"]]),ze=x({__name:"SectionLeaderboard",setup(_,{expose:l}){l();const{t:s}=D(),a={t:s,get AvatarPlaceHolder128(){return V},get FeedSectionWidth(){return H},get biChevronDown(){return R},get biTrophy(){return te},get biArrowUp(){return ae}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),Re={class:"row justify-around text-center q-pa-xs"};function Me(_,l,s,a,f,h){return d(),p(L,{flat:"",bordered:"",style:C({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(F,null,{default:t(()=>[e(u,null,{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(b,{size:"48px",color:"orange",class:"text-white"},{default:t(()=>[e(c,{name:a.biTrophy},null,8,["name"])]),_:1})]),_:1}),e(n,null,{default:t(()=>l[0]||(l[0]=[r(" SS Leaderboard ")])),_:1})]),_:1}),e(T),g("div",Re,[g("div",null,[e(b,{size:"48px"},{default:t(()=>[e(c,{name:a.biArrowUp,color:"positive"},null,8,["name"])]),_:1})]),l[1]||(l[1]=g("div",null,[g("div",{class:"text-weight-bold text-subtitle1"},"75"),g("span",{class:"text-muted"},"Your rank")],-1)),l[2]||(l[2]=g("div",null,[g("div",{class:"text-weight-bold text-subtitle1 text-positive"},"+7"),g("span",{class:"text-muted"},"Change")],-1))]),e(T),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>l[3]||(l[3]=[r(" Leaders ")])),_:1}),e(n,{side:""},{default:t(()=>l[4]||(l[4]=[r(" D/E ")])),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{"spinner-color":"white",src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>l[5]||(l[5]=[r("1. Jane Groowy")])),_:1}),e(i,{caption:"",lines:"1"},{default:t(()=>l[6]||(l[6]=[r("Account Manager")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>l[7]||(l[7]=[r(" 5.5 ")])),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{"spinner-color":"white",src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>l[8]||(l[8]=[r("2. Jane Groowy")])),_:1}),e(i,{caption:"",lines:"1"},{default:t(()=>l[9]||(l[9]=[r("Account Manager")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>l[10]||(l[10]=[r(" 5.5 ")])),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{"spinner-color":"white",src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>l[11]||(l[11]=[r("3. Jane Groowy")])),_:1}),e(i,{caption:"",lines:"1"},{default:t(()=>l[12]||(l[12]=[r("Account Manager")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>l[13]||(l[13]=[r(" 5.5 ")])),_:1})]),_:1}),q((d(),p(u,{clickable:""},{default:t(()=>[e(n,{side:""},{default:t(()=>[e(c,{color:"primary",name:a.biChevronDown},null,8,["name"])]),_:1}),e(n,{class:"text-primary"},{default:t(()=>[r(m(a.t("base.seeMore")),1)]),_:1})]),_:1})),[[A]])]),_:1})]),_:1},8,["style"])}const Be=y(ze,[["render",Me],["__file","SectionLeaderboard.vue"]]),We=x({__name:"SectionRecommendThemes",setup(_,{expose:l}){l();const{t:s}=D(),a=z([{name:"Security",author:"Jane Groowy",id:1},{name:"Coding",author:"Doug McMillion",id:2},{name:"Clean",author:"Cristopfer Nisson",id:3}]),f={t:s,items:a,get AvatarPlaceHolder128(){return V},get biChevronDown(){return R},get biPencilSquare(){return le},get FeedSectionWidth(){return H}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}});function Qe(_,l,s,a,f,h){return d(),p(L,{flat:"",bordered:"",class:"q-mt-md",style:C({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(F,null,{default:t(()=>[e(i,{header:""},{default:t(()=>[r(m(a.t("recommendationsThemes")),1)]),_:1}),(d(!0),v(P,null,k(a.items,(o,w)=>(d(),p(u,{key:w},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{"spinner-color":"white",src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[r(m(o.name),1)]),_:2},1024),e(i,{caption:""},{default:t(()=>[r("By "+m(o.author),1)]),_:2},1024)]),_:2},1024),e(n,{side:""},{default:t(()=>[e(Q,{flat:"",round:"",dense:"",icon:a.biPencilSquare},{default:t(()=>[e(O,null,{default:t(()=>[r(m(a.t("ssAction.postIt")),1)]),_:1})]),_:1},8,["icon"])]),_:1})]),_:2},1024))),128)),q((d(),p(u,{clickable:""},{default:t(()=>[e(n,{side:""},{default:t(()=>[e(c,{color:"primary",name:a.biChevronDown},null,8,["name"])]),_:1}),e(n,{class:"text-primary"},{default:t(()=>[r(m(a.t("base.seeMore")),1)]),_:1})]),_:1})),[[A]]),e(T)]),_:1})]),_:1},8,["style"])}const Oe=y(We,[["render",Qe],["__file","SectionRecommendThemes.vue"]]),Ve=x({__name:"SectionHashTagTrends",setup(_,{expose:l}){l();const{t:s}=D(),a=z([{tag:"FreeDocumentary",author:"TrebleRose68",id:1},{tag:"Documentary",author:"Bekaku",id:2}]),f={t:s,tags:a,AppLink:N,get biChevronDown(){return R},get biPlus(){return ne},get laHashtagSolid(){return E},get FeedSectionWidth(){return H}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}});function je(_,l,s,a,f,h){return d(),p(L,{flat:"",bordered:"",class:"q-mt-md",style:C({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(F,null,{default:t(()=>[e(i,{header:""},{default:t(()=>[r(m(a.t("hastagTrend")),1)]),_:1}),(d(!0),v(P,null,k(a.tags,(o,w)=>(d(),p(u,{key:w},{default:t(()=>[e(n,{side:"",top:""},{default:t(()=>[e(c,{name:a.laHashtagSolid},null,8,["name"])]),_:1}),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>[e(a.AppLink,{label:o.tag,color:"text-black","color-dark":"text-white"},null,8,["label"])]),_:2},1024),e(i,{caption:"",lines:"1"},{default:t(()=>[r(" Created by "+m(o.author),1)]),_:2},1024)]),_:2},1024),e(n,{side:""},{default:t(()=>[e(Q,{class:"text-capitalize",round:"",flat:"",dense:"",icon:a.biPlus},{default:t(()=>[e(O,null,{default:t(()=>[r(m(a.t("base.follow")),1)]),_:1})]),_:1},8,["icon"])]),_:1})]),_:2},1024))),128)),q((d(),p(u,{clickable:""},{default:t(()=>[e(n,{side:""},{default:t(()=>[e(c,{color:"primary",name:a.biChevronDown},null,8,["name"])]),_:1}),e(n,{class:"text-primary"},{default:t(()=>[r(m(a.t("base.seeMore")),1)]),_:1})]),_:1})),[[A]])]),_:1})]),_:1},8,["style"])}const Ge=y(Ve,[["render",je],["__file","SectionHashTagTrends.vue"]]),Ee=x({__name:"SectionTodayMostView",setup(_,{expose:l}){l();const{t:s}=D(),a=z([{title:"The Six Morning Habit of SEO Specialist at Taksdfds",author:"Chanavee Bekaku"},{title:"Unconscious Bias",author:"Stacey Gordon"},{title:"Critical Thinking for Better life",author:"Becki Saltzman"}]),f={t:s,items:a,get biChevronDown(){return R},get FeedSectionWidth(){return H}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}});function Ne(_,l,s,a,f,h){return d(),p(L,{flat:"",bordered:"",class:"q-mt-md",style:C({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(F,null,{default:t(()=>[e(i,{header:""},{default:t(()=>[r(m(a.t("todayMostViewPosts")),1)]),_:1}),(d(!0),v(P,null,k(a.items,(o,w)=>(d(),p(u,{key:w},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(b,{size:"36px",color:_.$q.dark.isActive?"white":"blue-1",class:B(_.$q.dark.isActive?"app-main-bg":"text-blue")},{default:t(()=>[r(m(w+1),1)]),_:2},1032,["color","class"])]),_:2},1024),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>[r(m(o.title),1)]),_:2},1024),e(i,{caption:"",lines:"1"},{default:t(()=>[r("By "+m(o.author),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),q((d(),p(u,{clickable:""},{default:t(()=>[e(n,{side:""},{default:t(()=>[e(c,{color:"primary",name:a.biChevronDown},null,8,["name"])]),_:1}),e(n,{class:"text-primary"},{default:t(()=>[r(m(a.t("base.seeMore")),1)]),_:1})]),_:1})),[[A]])]),_:1})]),_:1},8,["style"])}const Ie=y(Ee,[["render",Ne],["__file","SectionTodayMostView.vue"]]),Ue=x({__name:"SectionRecentPrized",setup(_,{expose:l}){l();const s={get biArrowRight(){return re},get biGift(){return ie},get biHeart(){return oe},get biChatSquareDots(){return se},get biHandbag(){return de},get AvatarPlaceHolder128(){return V}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function Ye(_,l,s,a,f,h){return d(),p(L,{flat:"",bordered:"",class:"q-mb-md"},{default:t(()=>[e(F,{dense:"",class:"q-pb-md"},{default:t(()=>[e(i,{header:""},{default:t(()=>l[0]||(l[0]=[r("Recent activity")])),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1}),e(b,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(S,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(c,{name:a.biArrowRight,size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(i,{caption:"",class:"text-center",lines:"1"},{default:t(()=>l[1]||(l[1]=[r(" Chanavee gives prize to Bekaku ")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(c,{name:a.biGift},null,8,["name"])]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1}),e(b,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(S,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(c,{name:a.biArrowRight,size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(i,{caption:"",lines:"1"},{default:t(()=>l[2]||(l[2]=[r(" Chanavee gives love to Lisa ")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(c,{name:a.biHeart},null,8,["name"])]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1}),e(b,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(S,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(c,{name:a.biArrowRight,size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(i,{caption:"",lines:"1"},{default:t(()=>l[3]||(l[3]=[r(" Chanavee comment to Lisa post ")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(c,{name:a.biChatSquareDots},null,8,["name"])]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1}),e(b,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(S,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(c,{name:a.biArrowRight,size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(i,{caption:"",lines:"1"},{default:t(()=>l[4]||(l[4]=[r(" Chanavee adopted Lisa post ")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(c,{name:a.biHandbag},null,8,["name"])]),_:1})]),_:1})]),_:1})]),_:1})}const Je=y(Ue,[["render",Ye],["__file","SectionRecentPrized.vue"]]),Ke=x({__name:"FeedRight",setup(_,{expose:l}){l();const s={SiteLink:De,SectionLeaderboard:Be,SectionRecommendThemes:Oe,SectionHashTagTrends:Ge,SectionTodayMostView:Ie,SectionRecentPrized:Je,get FeedSectionWidth(){return H}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),Xe={class:"q-mx-md"};function Ze(_,l,s,a,f,h){return d(),v("div",Xe,[e(W,{style:C({height:"90vh",width:a.FeedSectionWidth+"px"})},{default:t(()=>[e(a.SectionRecentPrized),e(a.SectionLeaderboard),e(a.SectionRecommendThemes,{class:"q-mt-md"}),e(a.SectionHashTagTrends,{class:"q-mt-md"}),e(a.SectionTodayMostView,{class:"q-mt-md"}),e(a.SiteLink)]),_:1},8,["style"])])}const $e=y(Ke,[["render",Ze],["__file","FeedRight.vue"]]),et=x({__name:"FeedLayout",setup(_,{expose:l}){l();const a={$q:G(),FeedDrawer:he,AppHeader:me,FeedLeft:Ae,FeedRight:$e};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),tt={class:"row"},at={key:0,class:"col-12 col-md-3 app-feed-page"},lt={class:"col-12 col-md-6 app-feed-page"},nt={key:1,class:"col-12 col-md-3 app-feed-page"};function rt(_,l,s,a,f,h){const o=ue("router-view");return d(),p(ce,{view:"hHh LpR fFf"},{default:t(()=>[e(a.AppHeader,{bordered:""}),e(a.FeedDrawer,{overlay:""}),e(_e,{class:"app-feed-container q-my-lg"},{default:t(()=>[g("div",tt,[a.$q.screen.gt.sm?(d(),v("div",at,[e(a.FeedLeft,{class:"fixed"})])):M("",!0),g("div",lt,[e(o)]),a.$q.screen.gt.sm?(d(),v("div",nt,[e(a.FeedRight,{class:"fixed"})])):M("",!0)])]),_:1})]),_:1})}const gt=y(et,[["render",rt],["__file","FeedLayout.vue"]]);export{gt as default};