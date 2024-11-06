import{d as y,r as z,cd as E,K as I,_ as x,B as d,C as p,E as t,F as e,b8 as F,H as v,aW as k,aq as q,ab as c,ac as n,N as _,aV as i,O as r,R as f,ai as P,ey as U,aa as C,am as W,eB as Y,bF as A,a as D,br as R,eR as $,eS as H,ae as S,al as L,S as T,eT as J,af as Q,ag as V,au as K,ah as M,aK as B,cf as X,eU as Z,I as g,ad as b,eV as j,eW as ee,cM as te,eX as ae,cp as le,cr as ne,cN as re,eY as ie,eZ as oe,e_ as se,bv as de,A as ue,Q as ce,G as _e}from"./index-DzrxKNnn.js";import{e as fe}from"./index-BSkhW1H0.js";import{A as me}from"./AppHeader-Bqd-p9oM.js";import{l as G,P as pe}from"./ProfileCard-vrSbShXu.js";import{A as N}from"./AppLink-6AGoOLwJ.js";import"./ClosePopup-DsK7QsUy.js";import"./BaseAvatar-XJg-8QrX.js";import"./AppImage-B1uLR3Vj.js";import"./FileManagerService-B_drXciZ.js";import"./useAxios-iI_x9o6-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useAuth-BVCkaVLN.js";const ge=y({__name:"FeedDrawer",props:{overlay:{type:Boolean,default:!1},side:{type:String,default:"left"}},setup(u,{expose:l}){l();const s=z(!0),a=E(),O={miniState:s,langugeAndThemeStore:a,links1:[{icon:I,text:"Home",link:"/"},{icon:fe,text:"Pinia Store",link:"/pinia"},{icon:"bi-translate",text:"I18n",link:"/i18n"},{icon:"bi-file-arrow-down",text:"Fetch data",link:"/fetch-data"}],links2:[{icon:"bi-folder2",text:"Library"},{icon:"bi-clock-history",text:"History"},{icon:"bi-clock",text:"Watch later"},{icon:"bi-hand-thumbs-up",text:"Liked videos"}],links3:[{icon:"bi-play-btn",text:"Movies & Shows"},{icon:"bi-cast",text:"Gaming"},{icon:"bi-tv",text:"Live"}],links4:[{icon:"bi-gear",text:"Settings"},{icon:"bi-flag",text:"Report history"},{icon:"bi-question-circle",text:"Help"},{icon:"bi-info-square",text:"Send feedback"}]};return Object.defineProperty(O,"__isScriptSetup",{enumerable:!1,value:!0}),O}});function be(u,l,s,a,m,h){return d(),p(Y,{modelValue:a.langugeAndThemeStore.leftDrawerOpen,"onUpdate:modelValue":l[0]||(l[0]=o=>a.langugeAndThemeStore.leftDrawerOpen=o),"show-if-above":"",width:240,overlay:s.overlay,side:s.side,bordered:"",mini:a.miniState,onMouseover:l[1]||(l[1]=o=>a.miniState=!1),onMouseout:l[2]||(l[2]=o=>a.miniState=!0),"mini-to-overlay":""},{default:t(()=>[e(W,{class:"fit"},{default:t(()=>[e(F,{padding:"",class:"menu-list"},{default:t(()=>[(d(),v(P,null,k(a.links1,o=>q(e(c,{key:o.text,to:o.link,clickable:""},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(_,{color:u.$q.dark.isActive?"white":"black",name:o.icon},null,8,["color","name"])]),_:2},1024),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[r(f(o.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]),[[A]])),64)),e(U,{icon:"bi-file",label:"Pages"},{default:t(()=>[e(F,{class:"q-pl-lg"},{default:t(()=>[e(c,{to:"/auth/login","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(_,{name:"bi-box-arrow-in-right"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[3]||(l[3]=[r("Login-1")])),_:1})]),_:1})]),_:1}),e(c,{to:"/auth/login2","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(_,{name:"bi-box-arrow-in-right"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[4]||(l[4]=[r("Login-2")])),_:1})]),_:1})]),_:1}),e(c,{to:"/Lock","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(_,{name:"bi-lock"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[5]||(l[5]=[r("Lock Screen")])),_:1})]),_:1})]),_:1}),e(c,{to:"/Lock-2","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(_,{name:"bi-lock"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[6]||(l[6]=[r("Lock Screen - 2")])),_:1})]),_:1})]),_:1}),e(c,{to:"/Pricing","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(_,{name:"bi-list"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[7]||(l[7]=[r("Pricing")])),_:1})]),_:1})]),_:1}),e(i,{header:"",class:"text-weight-bold"},{default:t(()=>l[8]||(l[8]=[r("Generic")])),_:1}),e(c,{to:"/Profile","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(_,{name:"bi-person"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[9]||(l[9]=[r("User Profile")])),_:1})]),_:1})]),_:1}),e(c,{to:"/Maintenance","active-class":"q-item-no-link-highlighting"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(_,{name:"bi-gear"})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>l[10]||(l[10]=[r("Maintenance")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(C,{class:"q-my-md"}),(d(),v(P,null,k(a.links2,o=>q(e(c,{key:o.text,clickable:""},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(_,{color:u.$q.dark.isActive?"white":"black",name:o.icon},null,8,["color","name"])]),_:2},1024),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[r(f(o.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),[[A]])),64)),e(C,{class:"q-mt-md q-mb-xs"}),e(i,{header:"",class:"text-weight-bold text-uppercase"},{default:t(()=>l[11]||(l[11]=[r(" More from Youtube ")])),_:1}),(d(),v(P,null,k(a.links3,o=>q(e(c,{key:o.text,clickable:""},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(_,{color:u.$q.dark.isActive?"white":"black",name:o.icon},null,8,["color","name"])]),_:2},1024),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[r(f(o.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),[[A]])),64)),e(C,{class:"q-my-md"}),(d(),v(P,null,k(a.links4,o=>q(e(c,{key:o.text,clickable:""},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(_,{color:u.$q.dark.isActive?"white":"black",name:o.icon},null,8,["color","name"])]),_:2},1024),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[r(f(o.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),[[A]])),64)),e(C,{class:"q-mt-md q-mb-lg"})]),_:1})]),_:1})]),_:1},8,["modelValue","overlay","side","mini"])}const he=x(ge,[["render",be],["__file","FeedDrawer.vue"]]),ve=y({__name:"SectionSavedPost",setup(u,{expose:l}){l();const{t:s}=D(),a=z([{image:"https://picsum.photos/160",title:"Sobering up has had a negative affect on relationship with [25f] gf. How to handle?",author:"BigGumbyLover"},{image:"https://picsum.photos/160",title:"Worker disappears after he was accidentally paid more than 300 times his salary",author:"Flair_Helper"},{image:"https://i.redd.it/5jrr5k4sbs991.jpg",title:"The only picture we have of my great grandfather (left), with an unknown man (circa 1910)",author:"TrebleRose68"}]),m={t:s,savedList:a,get biChevronDown(){return R},get biBookmark(){return $},get FeedSectionWidth(){return H}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}});function Se(u,l,s,a,m,h){return d(),p(T,{flat:"",bordered:"",style:L({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(F,null,{default:t(()=>[e(i,{header:""},{default:t(()=>[e(_,{name:a.biBookmark,class:"q-mr-sm"},null,8,["name"]),r(f(a.t("savedPost")),1)]),_:1}),(d(!0),v(P,null,k(a.savedList,(o,w)=>(d(),p(c,{key:w,clickable:""},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(S,{src:o.image,class:"bg-gray-1","spinner-color":"primary","no-native-menu":""},null,8,["src"])]),_:2},1024),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>[r(f(o.title),1)]),_:2},1024),e(i,{caption:""},{default:t(()=>[r(f(o.author),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),q((d(),p(c,{clickable:""},{default:t(()=>[e(n,{side:""},{default:t(()=>[e(_,{color:"primary",name:a.biChevronDown},null,8,["name"])]),_:1}),e(n,{class:"text-primary"},{default:t(()=>[r(f(a.t("base.seeMore")),1)]),_:1})]),_:1})),[[A]])]),_:1})]),_:1},8,["style"])}const ye=x(ve,[["render",Se],["__file","SectionSavedPost.vue"]]),xe=y({__name:"SectionFollowwingTag",setup(u,{expose:l}){l();const{t:s}=D(),a=z([{tag:"FreeDocumentary",author:"TrebleRose68",id:1},{tag:"Documentary",author:"Bekaku",id:2}]),m={t:s,followingTags:a,AppLink:N,get biChevronDown(){return R},get biDashCircle(){return J},get laHashtagSolid(){return G},get FeedSectionWidth(){return H}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}});function we(u,l,s,a,m,h){return d(),p(T,{flat:"",bordered:"",style:L({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(F,null,{default:t(()=>[e(i,{header:""},{default:t(()=>[e(_,{name:a.laHashtagSolid,class:"q-mr-sm"},null,8,["name"]),r(f(a.t("followingTag")),1)]),_:1}),(d(!0),v(P,null,k(a.followingTags,(o,w)=>(d(),p(c,{key:w},{default:t(()=>[e(n,{side:"",top:""},{default:t(()=>[e(_,{name:a.laHashtagSolid},null,8,["name"])]),_:1}),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>[e(a.AppLink,{label:o.tag,color:"text-black","color-dark":"text-white"},null,8,["label"])]),_:2},1024),e(i,{caption:""},{default:t(()=>[r(" By "+f(o.author),1)]),_:2},1024)]),_:2},1024),e(n,{side:""},{default:t(()=>[e(Q,{class:"text-capitalize",size:"sm",flat:"",dense:"",round:"",icon:a.biDashCircle},{default:t(()=>[e(V,null,{default:t(()=>[r(f(a.t("base.unfollow")),1)]),_:1})]),_:1},8,["icon"])]),_:1})]),_:2},1024))),128)),q((d(),p(c,{clickable:""},{default:t(()=>[e(n,{side:""},{default:t(()=>[e(_,{color:"primary",name:a.biChevronDown},null,8,["name"])]),_:1}),e(n,{class:"text-primary"},{default:t(()=>[r(f(a.t("base.seeMore")),1)]),_:1})]),_:1})),[[A]])]),_:1})]),_:1},8,["style"])}const ke=x(xe,[["render",we],["__file","SectionFollowwingTag.vue"]]),qe=y({__name:"FeedLeft",setup(u,{expose:l}){l();const a={authenStore:K(),ProfileCard:pe,SectionSavedPost:ye,SectionFollowwingTag:ke,get FeedSectionWidth(){return H}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function Pe(u,l,s,a,m,h){return d(),v("div",{class:B(u.$q.screen.gt.sm?"q-mx-md":"")},[e(W,{style:L({height:"90vh",width:a.FeedSectionWidth+"px"})},{default:t(()=>[e(T,{flat:"",bordered:"",class:"q-mb-md",style:L({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(a.ProfileCard,{"avatar-image":a.authenStore.loginedAvatar,"cover-image":a.authenStore.loginedCover,name:a.authenStore.loginedDisplay,description:"Software Engineer",height:"100px","avatar-top":"35px","avatar-size":"65px",descriptionStyle:"margin-top:5px","show-medal":""},null,8,["avatar-image","cover-image","name"])]),_:1},8,["style"]),u.$q.screen.gt.sm?(d(),p(a.SectionSavedPost,{key:0})):M("",!0),u.$q.screen.gt.sm?(d(),p(a.SectionFollowwingTag,{key:1,class:"q-mt-md"})):M("",!0)]),_:1},8,["style"])],2)}const Ae=x(qe,[["render",Pe],["__file","FeedLeft.vue"]]),Fe=y({__name:"SiteLink",setup(u,{expose:l}){l();const{t:s}=D(),h={t:s,buttons2:[{text:"base.termAndprivacyPolicy",link:"http://www.grandats.com/synapse-policy/policy.html",external:!0}],appVersion:"1.0.0",get getYearNow(){return X},get biShieldExclamation(){return Z}};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),Le={class:"row items-center q-gutter-x-sm"},Te={class:"row items-center q-gutter-x-sm q-gutter-y-xs"},Ce={class:"YL__drawer-footer-link",href:"javascript:void(0)"};function He(u,l,s,a,m,h){return d(),p(T,{flat:"",class:"q-mt-md bg-transparent"},{default:t(()=>[g("div",{class:B(["q-py-md q-px-md",u.$q.dark.isActive?"text-grey-5":"text-grey-7"])},[g("div",Le,[(d(),v(P,null,k(a.buttons2,o=>e(c,{key:o.text,href:o.link,target:"_blank"},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(_,{name:a.biShieldExclamation},null,8,["name"])]),_:1}),e(n,null,{default:t(()=>[e(i,{caption:""},{default:t(()=>[r(f(a.t(o.text)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"])),64))])],2),e(C),g("div",{class:B(["q-py-md q-px-md",u.$q.dark.isActive?"text-grey-5":"text-grey-7"])},[g("div",Te,[e(b,{square:"",size:"42px",class:"q-mr-xs"},{default:t(()=>l[0]||(l[0]=[g("img",{src:"/quasar-starter-template/logo/logo.png"},null,-1)])),_:1}),g("a",Ce,f(`${a.t("app.monogram")} @ ${a.getYearNow()} V.${a.appVersion}`),1)])],2)]),_:1})}const De=x(Fe,[["render",He],["__file","SiteLink.vue"]]),ze=y({__name:"SectionLeaderboard",setup(u,{expose:l}){l();const{t:s}=D(),a={t:s,get AvatarPlaceHolder128(){return j},get FeedSectionWidth(){return H},get biChevronDown(){return R},get biTrophy(){return ee},get biArrowUp(){return te}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),Re={class:"row justify-around text-center q-pa-xs"};function Me(u,l,s,a,m,h){return d(),p(T,{flat:"",bordered:"",style:L({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(F,null,{default:t(()=>[e(c,null,{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(b,{size:"48px",color:"orange",class:"text-white"},{default:t(()=>[e(_,{name:a.biTrophy},null,8,["name"])]),_:1})]),_:1}),e(n,null,{default:t(()=>l[0]||(l[0]=[r(" SS Leaderboard ")])),_:1})]),_:1}),e(C),g("div",Re,[g("div",null,[e(b,{size:"48px"},{default:t(()=>[e(_,{name:a.biArrowUp,color:"positive"},null,8,["name"])]),_:1})]),l[1]||(l[1]=g("div",null,[g("div",{class:"text-weight-bold text-subtitle1"},"75"),g("span",{class:"text-muted"},"Your rank")],-1)),l[2]||(l[2]=g("div",null,[g("div",{class:"text-weight-bold text-subtitle1 text-positive"},"+7"),g("span",{class:"text-muted"},"Change")],-1))]),e(C),e(c,null,{default:t(()=>[e(n,null,{default:t(()=>l[3]||(l[3]=[r(" Leaders ")])),_:1}),e(n,{side:""},{default:t(()=>l[4]||(l[4]=[r(" D/E ")])),_:1})]),_:1}),e(c,null,{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{"spinner-color":"white",src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>l[5]||(l[5]=[r("1. Jane Groowy")])),_:1}),e(i,{caption:"",lines:"1"},{default:t(()=>l[6]||(l[6]=[r("Account Manager")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>l[7]||(l[7]=[r(" 5.5 ")])),_:1})]),_:1}),e(c,null,{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{"spinner-color":"white",src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>l[8]||(l[8]=[r("2. Jane Groowy")])),_:1}),e(i,{caption:"",lines:"1"},{default:t(()=>l[9]||(l[9]=[r("Account Manager")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>l[10]||(l[10]=[r(" 5.5 ")])),_:1})]),_:1}),e(c,null,{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{"spinner-color":"white",src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>l[11]||(l[11]=[r("3. Jane Groowy")])),_:1}),e(i,{caption:"",lines:"1"},{default:t(()=>l[12]||(l[12]=[r("Account Manager")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>l[13]||(l[13]=[r(" 5.5 ")])),_:1})]),_:1}),q((d(),p(c,{clickable:""},{default:t(()=>[e(n,{side:""},{default:t(()=>[e(_,{color:"primary",name:a.biChevronDown},null,8,["name"])]),_:1}),e(n,{class:"text-primary"},{default:t(()=>[r(f(a.t("base.seeMore")),1)]),_:1})]),_:1})),[[A]])]),_:1})]),_:1},8,["style"])}const Be=x(ze,[["render",Me],["__file","SectionLeaderboard.vue"]]),We=y({__name:"SectionRecommendThemes",setup(u,{expose:l}){l();const{t:s}=D(),a=z([{name:"Security",author:"Jane Groowy",id:1},{name:"Coding",author:"Doug McMillion",id:2},{name:"Clean",author:"Cristopfer Nisson",id:3}]),m={t:s,items:a,get AvatarPlaceHolder128(){return j},get biChevronDown(){return R},get biPencilSquare(){return ae},get FeedSectionWidth(){return H}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}});function Qe(u,l,s,a,m,h){return d(),p(T,{flat:"",bordered:"",class:"q-mt-md",style:L({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(F,null,{default:t(()=>[e(i,{header:""},{default:t(()=>[r(f(a.t("recommendationsThemes")),1)]),_:1}),(d(!0),v(P,null,k(a.items,(o,w)=>(d(),p(c,{key:w},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{"spinner-color":"white",src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[r(f(o.name),1)]),_:2},1024),e(i,{caption:""},{default:t(()=>[r("By "+f(o.author),1)]),_:2},1024)]),_:2},1024),e(n,{side:""},{default:t(()=>[e(Q,{flat:"",round:"",dense:"",icon:a.biPencilSquare},{default:t(()=>[e(V,null,{default:t(()=>[r(f(a.t("ssAction.postIt")),1)]),_:1})]),_:1},8,["icon"])]),_:1})]),_:2},1024))),128)),q((d(),p(c,{clickable:""},{default:t(()=>[e(n,{side:""},{default:t(()=>[e(_,{color:"primary",name:a.biChevronDown},null,8,["name"])]),_:1}),e(n,{class:"text-primary"},{default:t(()=>[r(f(a.t("base.seeMore")),1)]),_:1})]),_:1})),[[A]]),e(C)]),_:1})]),_:1},8,["style"])}const Ve=x(We,[["render",Qe],["__file","SectionRecommendThemes.vue"]]),je=y({__name:"SectionHashTagTrends",setup(u,{expose:l}){l();const{t:s}=D(),a=z([{tag:"FreeDocumentary",author:"TrebleRose68",id:1},{tag:"Documentary",author:"Bekaku",id:2}]),m={t:s,tags:a,AppLink:N,get biChevronDown(){return R},get biPlus(){return le},get laHashtagSolid(){return G},get FeedSectionWidth(){return H}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}});function Oe(u,l,s,a,m,h){return d(),p(T,{flat:"",bordered:"",class:"q-mt-md",style:L({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(F,null,{default:t(()=>[e(i,{header:""},{default:t(()=>[r(f(a.t("hastagTrend")),1)]),_:1}),(d(!0),v(P,null,k(a.tags,(o,w)=>(d(),p(c,{key:w},{default:t(()=>[e(n,{side:"",top:""},{default:t(()=>[e(_,{name:a.laHashtagSolid},null,8,["name"])]),_:1}),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>[e(a.AppLink,{label:o.tag,color:"text-black","color-dark":"text-white"},null,8,["label"])]),_:2},1024),e(i,{caption:"",lines:"1"},{default:t(()=>[r(" Created by "+f(o.author),1)]),_:2},1024)]),_:2},1024),e(n,{side:""},{default:t(()=>[e(Q,{class:"text-capitalize",round:"",flat:"",dense:"",icon:a.biPlus},{default:t(()=>[e(V,null,{default:t(()=>[r(f(a.t("base.follow")),1)]),_:1})]),_:1},8,["icon"])]),_:1})]),_:2},1024))),128)),q((d(),p(c,{clickable:""},{default:t(()=>[e(n,{side:""},{default:t(()=>[e(_,{color:"primary",name:a.biChevronDown},null,8,["name"])]),_:1}),e(n,{class:"text-primary"},{default:t(()=>[r(f(a.t("base.seeMore")),1)]),_:1})]),_:1})),[[A]])]),_:1})]),_:1},8,["style"])}const Ge=x(je,[["render",Oe],["__file","SectionHashTagTrends.vue"]]),Ne=y({__name:"SectionTodayMostView",setup(u,{expose:l}){l();const{t:s}=D(),a=z([{title:"The Six Morning Habit of SEO Specialist at Taksdfds",author:"Chanavee Bekaku"},{title:"Unconscious Bias",author:"Stacey Gordon"},{title:"Critical Thinking for Better life",author:"Becki Saltzman"}]),m={t:s,items:a,get biChevronDown(){return R},get FeedSectionWidth(){return H}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}});function Ee(u,l,s,a,m,h){return d(),p(T,{flat:"",bordered:"",class:"q-mt-md",style:L({width:`${a.FeedSectionWidth}px`})},{default:t(()=>[e(F,null,{default:t(()=>[e(i,{header:""},{default:t(()=>[r(f(a.t("todayMostViewPosts")),1)]),_:1}),(d(!0),v(P,null,k(a.items,(o,w)=>(d(),p(c,{key:w},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(b,{size:"36px",color:u.$q.dark.isActive?"white":"blue-1",class:B(u.$q.dark.isActive?"app-main-bg":"text-blue")},{default:t(()=>[r(f(w+1),1)]),_:2},1032,["color","class"])]),_:2},1024),e(n,null,{default:t(()=>[e(i,{lines:"1"},{default:t(()=>[r(f(o.title),1)]),_:2},1024),e(i,{caption:"",lines:"1"},{default:t(()=>[r("By "+f(o.author),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),q((d(),p(c,{clickable:""},{default:t(()=>[e(n,{side:""},{default:t(()=>[e(_,{color:"primary",name:a.biChevronDown},null,8,["name"])]),_:1}),e(n,{class:"text-primary"},{default:t(()=>[r(f(a.t("base.seeMore")),1)]),_:1})]),_:1})),[[A]])]),_:1})]),_:1},8,["style"])}const Ie=x(Ne,[["render",Ee],["__file","SectionTodayMostView.vue"]]),Ue=y({__name:"SectionRecentPrized",setup(u,{expose:l}){l();const s={get biArrowRight(){return ne},get biGift(){return re},get biHeart(){return ie},get biChatSquareDots(){return oe},get biHandbag(){return se},get AvatarPlaceHolder128(){return j}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function Ye(u,l,s,a,m,h){return d(),p(T,{flat:"",bordered:"",class:"q-mb-md"},{default:t(()=>[e(F,{dense:"",class:"q-pb-md"},{default:t(()=>[e(i,{header:""},{default:t(()=>l[0]||(l[0]=[r("Recent activity")])),_:1}),e(c,null,{default:t(()=>[e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1}),e(b,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(S,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(_,{name:a.biArrowRight,size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(i,{caption:"",class:"text-center",lines:"1"},{default:t(()=>l[1]||(l[1]=[r(" Chanavee gives prize to Bekaku ")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(_,{name:a.biGift},null,8,["name"])]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1}),e(b,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(S,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(_,{name:a.biArrowRight,size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(i,{caption:"",lines:"1"},{default:t(()=>l[2]||(l[2]=[r(" Chanavee gives love to Lisa ")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(_,{name:a.biHeart},null,8,["name"])]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1}),e(b,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(S,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(_,{name:a.biArrowRight,size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(i,{caption:"",lines:"1"},{default:t(()=>l[3]||(l[3]=[r(" Chanavee comment to Lisa post ")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(_,{name:a.biChatSquareDots},null,8,["name"])]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[e(b,{size:"36px"},{default:t(()=>[e(S,{src:a.AvatarPlaceHolder128},null,8,["src"])]),_:1}),e(b,{size:"36px",class:"q-ml-md"},{default:t(()=>[e(S,{src:"https://cdn.quasar.dev/img/avatar.png"}),e(_,{name:a.biArrowRight,size:"md",color:"amber",class:"absolute-bottom-left",style:{left:"-25px"}},null,8,["name"])]),_:1})]),_:1}),e(i,{caption:"",lines:"1"},{default:t(()=>l[4]||(l[4]=[r(" Chanavee adopted Lisa post ")])),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(_,{name:a.biHandbag},null,8,["name"])]),_:1})]),_:1})]),_:1})]),_:1})}const $e=x(Ue,[["render",Ye],["__file","SectionRecentPrized.vue"]]),Je=y({__name:"FeedRight",setup(u,{expose:l}){l();const s={SiteLink:De,SectionLeaderboard:Be,SectionRecommendThemes:Ve,SectionHashTagTrends:Ge,SectionTodayMostView:Ie,SectionRecentPrized:$e,get FeedSectionWidth(){return H}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),Ke={class:"q-mx-md"};function Xe(u,l,s,a,m,h){return d(),v("div",Ke,[e(W,{style:L({height:"90vh",width:a.FeedSectionWidth+"px"})},{default:t(()=>[e(a.SectionRecentPrized),e(a.SectionLeaderboard),e(a.SectionRecommendThemes,{class:"q-mt-md"}),e(a.SectionHashTagTrends,{class:"q-mt-md"}),e(a.SectionTodayMostView,{class:"q-mt-md"}),e(a.SiteLink)]),_:1},8,["style"])])}const Ze=x(Je,[["render",Xe],["__file","FeedRight.vue"]]),et=y({__name:"FeedLayout",setup(u,{expose:l}){l();const a={$q:de(),FeedDrawer:he,AppHeader:me,FeedLeft:Ae,FeedRight:Ze};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),tt={class:"row"},at={key:0,class:"col-12 col-md-3 app-feed-page"},lt={class:"col-12 col-md-6 app-feed-page"},nt={key:1,class:"col-12 col-md-3 app-feed-page"};function rt(u,l,s,a,m,h){const o=ue("router-view");return d(),p(ce,{view:"hHh LpR fFf"},{default:t(()=>[e(a.AppHeader,{bordered:""}),e(a.FeedDrawer,{overlay:""}),e(_e,{class:"app-feed-container q-my-lg"},{default:t(()=>[g("div",tt,[a.$q.screen.gt.sm?(d(),v("div",at,[e(a.FeedLeft,{class:"fixed"})])):M("",!0),g("div",lt,[e(o)]),a.$q.screen.gt.sm?(d(),v("div",nt,[e(a.FeedRight,{class:"fixed"})])):M("",!0)])]),_:1})]),_:1})}const ht=x(et,[["render",rt],["__file","FeedLayout.vue"]]);export{ht as default};
