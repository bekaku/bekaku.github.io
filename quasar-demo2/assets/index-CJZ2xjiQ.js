import{s as Oe,f0 as De,r as h,f as O,w as B,o as Ne,j as qe,b2 as pe,T as ne,f1 as Be,h as be,y as Re,f2 as ze,f3 as te,f4 as de,f5 as he,bE as ye,f6 as ue,f7 as je,f8 as Ve,z as Qe,d as P,a as V,au as xe,X as We,bV as Ue,f9 as Ge,eY as Ye,_ as T,B as d,C as m,E as n,F as t,ab as S,ac as c,ad as A,ae as J,aW as v,aL as Q,O as f,R as p,af as x,M as X,aa as F,bg as ke,S as j,fa as Se,I as _,bq as K,b9 as oe,aq as L,N as I,u as Pe,fb as ce,fc as me,fd as fe,fe as _e,ff as Ze,eZ as Te,e_ as Je,cO as Xe,fg as Ke,e$ as $e,eS as Ie,eW as le,H,fh as et,ag as N,dk as tt,ai as W,fi as at,cy as nt,bP as ot,$ as lt,eP as we,aX as ge,ah as R,ev as rt,fj as it,fk as st,fl as dt,bw as Ce,ew as ut,fm as ct,bx as mt,ak as M,cA as ft,L as _t,J as pt}from"./index-ZORCAnWx.js";import{u as gt}from"./useAppMeta-FpZKiwHi.js";import{C as E}from"./ClosePopup-8o396qhR.js";import{a as Me,b as Ae,c as vt,d as bt,P as He,M as ht}from"./ProfileCard-Ck5BhHNP.js";import{A as ve}from"./AppLink-yLuWdeZ2.js";import"./use-meta-C7THedNo.js";const{passive:q}=ze,yt=Oe({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:De,initialIndex:{type:Number,default:0},disable:Boolean,reverse:Boolean},emits:["load"],setup(r,{slots:a,emit:o}){const e=h(!1),i=h(!0),s=h(null),l=h(null);let g=r.initialIndex,u,y;const z=O(()=>"q-infinite-scroll__loading"+(e.value===!0?"":" invisible"));function b(){if(r.disable===!0||e.value===!0||i.value===!1)return;const k=te(u),w=de(u),Z=he(u);r.reverse===!1?Math.round(w+Z+r.offset)>=Math.round(k)&&D():Math.round(w)<=r.offset&&D()}function D(){if(r.disable===!0||e.value===!0||i.value===!1)return;g++,e.value=!0;const k=te(u);o("load",g,w=>{i.value===!0&&(e.value=!1,ye(()=>{if(r.reverse===!0){const Z=te(u),Ee=de(u),Fe=Z-k;ue(u,Ee+Fe)}w===!0?U():s.value&&s.value.closest("body")&&y()}))})}function re(){g=0}function $(){i.value===!1&&(i.value=!0,u.addEventListener("scroll",y,q)),b()}function U(){i.value===!0&&(i.value=!1,e.value=!1,u.removeEventListener("scroll",y,q),y!==void 0&&y.cancel!==void 0&&y.cancel())}function G(){if(u&&i.value===!0&&u.removeEventListener("scroll",y,q),u=je(s.value,r.scrollTarget),i.value===!0){if(u.addEventListener("scroll",y,q),r.reverse===!0){const k=te(u),w=he(u);ue(u,k-w)}b()}}function ee(k){g=k}function Y(k){k=parseInt(k,10);const w=y;y=k<=0?b:Ve(b,isNaN(k)===!0?100:k),u&&i.value===!0&&(w!==void 0&&u.removeEventListener("scroll",w,q),u.addEventListener("scroll",y,q))}function C(k){if(ie.value===!0){if(l.value===null){k!==!0&&ye(()=>{C(!0)});return}const w=`${e.value===!0?"un":""}pauseAnimations`;Array.from(l.value.getElementsByTagName("svg")).forEach(Z=>{Z[w]()})}}const ie=O(()=>r.disable!==!0&&i.value===!0);B([e,ie],()=>{C()}),B(()=>r.disable,k=>{k===!0?U():$()}),B(()=>r.reverse,()=>{e.value===!1&&i.value===!0&&b()}),B(()=>r.scrollTarget,G),B(()=>r.debounce,Y);let se=!1;Ne(()=>{se!==!1&&u&&ue(u,se)}),qe(()=>{se=u?de(u):!1}),pe(()=>{i.value===!0&&u.removeEventListener("scroll",y,q)}),ne(()=>{Y(r.debounce),G(),e.value===!1&&C()});const Le=Qe();return Object.assign(Le.proxy,{poll:()=>{y!==void 0&&y()},trigger:D,stop:U,reset:re,resume:$,setIndex:ee,updateScrollTarget:G}),()=>{const k=Be(a.default,[]);return ie.value===!0&&k[r.reverse===!1?"push":"unshift"](be("div",{ref:l,class:z.value},Re(a.loading))),be("div",{class:"q-infinite-scroll",ref:s},k)}}}),xt=P({__name:"FeedPostArea",setup(r,{expose:a}){a();const{t:o}=V(),e=xe(),i={t:o,authenStore:e,get biPencil(){return We},get biCardImage(){return Ue},get biPlayBtn(){return Ge},get biPencilSquare(){return Ye}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});function kt(r,a,o,e,i,s){return d(),m(j,{flat:"",bordered:""},{default:n(()=>[t(X,null,{default:n(()=>[t(S,null,{default:n(()=>[t(c,{avatar:""},{default:n(()=>[t(A,{size:"48px",class:"shadow-5"},{default:n(()=>[t(J,{src:e.authenStore.loginedAvatar,"spinner-color":"white","no-native-menu":""},null,8,["src"])]),_:1})]),_:1}),t(c,null,{default:n(()=>[t(v,{style:{padding:"15px","border-radius":"25px"},class:Q(["cursor-pointer",r.$q.dark.isActive?"wee-main-bg-color-theme-dark text-white":"bg-grey-3"])},{default:n(()=>[f(p(e.t("dSologan")),1)]),_:1},8,["class"])]),_:1}),t(c,{side:""},{default:n(()=>[t(x,{class:"text-capitalize",icon:e.biPencil,color:"primary",label:"Post it!",unelevated:"",rounded:""},null,8,["icon"])]),_:1})]),_:1})]),_:1}),t(ke,{align:"around"},{default:n(()=>[t(x,{class:"text-capitalize",color:"info",flat:"",icon:e.biCardImage,label:"Photo"},null,8,["icon"]),t(F,{vertical:""}),t(x,{class:"text-capitalize",color:"green",flat:"",icon:e.biPlayBtn,label:"Video"},null,8,["icon"]),t(F,{vertical:""}),t(x,{class:"text-capitalize",color:"orange",flat:"",icon:e.biPencilSquare,label:"Write article"},null,8,["icon"])]),_:1})]),_:1})}const St=T(xt,[["render",kt],["__file","FeedPostArea.vue"]]),Pt=P({__name:"FeedSort",setup(r,{expose:a}){a();const{t:o}=V(),e=h("NEW_POST"),s={t:o,sort:e,onSort:l=>{e.value=l},get biCaretDownFill(){return Se},get laRocketSolid(){return Me},get laFireSolid(){return Ae},get laMeteorSolid(){return vt}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),Tt={class:"text-caption text-muted q-mr-sm"};function It(r,a,o,e,i,s){return d(),m(j,{flat:"",class:"bg-transparent"},{default:n(()=>[t(X,null,{default:n(()=>[_("span",Tt,p(e.t("sort.by"))+":",1),t(x,{class:"text-capitalize",flat:"","icon-right":e.biCaretDownFill,label:e.t("sort.post."+e.sort)},{default:n(()=>[t(K,null,{default:n(()=>[t(oe,{style:{"min-width":"100px"}},{default:n(()=>[L((d(),m(S,{clickable:"",onClick:a[0]||(a[0]=l=>e.onSort("NEW_POST"))},{default:n(()=>[t(c,{side:""},{default:n(()=>[t(I,{name:e.laFireSolid},null,8,["name"])]),_:1}),t(c,null,{default:n(()=>[t(v,null,{default:n(()=>[f(p(e.t("sort.post.NEW_POST")),1)]),_:1}),t(v,{caption:""},{default:n(()=>[f(p(e.t("sort.post.NEW_POST_DESC")),1)]),_:1})]),_:1})]),_:1})),[[E]]),L((d(),m(S,{clickable:"",onClick:a[1]||(a[1]=l=>e.onSort("NEW_ACTIVITY"))},{default:n(()=>[t(c,{side:""},{default:n(()=>[t(I,{name:e.laMeteorSolid},null,8,["name"])]),_:1}),t(c,null,{default:n(()=>[t(v,null,{default:n(()=>[f(p(e.t("sort.post.NEW_ACTIVITY")),1)]),_:1}),t(v,{caption:""},{default:n(()=>[f(p(e.t("sort.post.NEW_ACTIVITY_DESC")),1)]),_:1})]),_:1})]),_:1})),[[E]]),L((d(),m(S,{clickable:"",onClick:a[2]||(a[2]=l=>e.onSort("TOP_POST"))},{default:n(()=>[t(c,{side:""},{default:n(()=>[t(I,{name:e.laRocketSolid},null,8,["name"])]),_:1}),t(c,null,{default:n(()=>[t(v,null,{default:n(()=>[f(p(e.t("sort.post.TOP_POST")),1)]),_:1}),t(v,{caption:""},{default:n(()=>[f(p(e.t("sort.post.TOP_POST_DESC")),1)]),_:1})]),_:1})]),_:1})),[[E]])]),_:1})]),_:1})]),_:1},8,["icon-right","label"])]),_:1})]),_:1})}const wt=T(Pt,[["render",It],["__file","FeedSort.vue"]]),Ct=P({__name:"CommentSort",setup(r,{expose:a}){a();const{t:o}=V(),e=h("NEW_COMMENT"),s={t:o,sort:e,onSort:l=>{e.value=l},get biCaretDownFill(){return Se},get laRocketSolid(){return Me},get laFireSolid(){return Ae},get laHourglassEndSolid(){return bt}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function Mt(r,a,o,e,i,s){return d(),m(x,{class:"text-capitalize",flat:"","icon-right":e.biCaretDownFill,label:e.t("sort.comment."+e.sort)},{default:n(()=>[t(K,null,{default:n(()=>[t(oe,{style:{"min-width":"100px"}},{default:n(()=>[L((d(),m(S,{clickable:"",onClick:a[0]||(a[0]=l=>e.onSort("NEW_COMMENT"))},{default:n(()=>[t(c,{side:""},{default:n(()=>[t(I,{name:e.laFireSolid},null,8,["name"])]),_:1}),t(c,null,{default:n(()=>[t(v,null,{default:n(()=>[f(p(e.t("sort.comment.NEW_COMMENT")),1)]),_:1}),t(v,{caption:""},{default:n(()=>[f(p(e.t("sort.comment.NEW_COMMENT_DESC")),1)]),_:1})]),_:1})]),_:1})),[[E]]),L((d(),m(S,{clickable:"",onClick:a[1]||(a[1]=l=>e.onSort("TOP_COMMENT"))},{default:n(()=>[t(c,{side:""},{default:n(()=>[t(I,{name:e.laRocketSolid},null,8,["name"])]),_:1}),t(c,null,{default:n(()=>[t(v,null,{default:n(()=>[f(p(e.t("sort.comment.TOP_COMMENT")),1)]),_:1}),t(v,{caption:""},{default:n(()=>[f(p(e.t("sort.comment.NEW_COMMENT_DESC")),1)]),_:1})]),_:1})]),_:1})),[[E]]),L((d(),m(S,{clickable:"",onClick:a[2]||(a[2]=l=>e.onSort("ALL_COMMENT"))},{default:n(()=>[t(c,{side:""},{default:n(()=>[t(I,{name:e.laHourglassEndSolid},null,8,["name"])]),_:1}),t(c,null,{default:n(()=>[t(v,null,{default:n(()=>[f(p(e.t("sort.comment.ALL_COMMENT")),1)]),_:1}),t(v,{caption:""},{default:n(()=>[f(p(e.t("sort.comment.ALL_COMMENT_DESC")),1)]),_:1})]),_:1})]),_:1})),[[E]])]),_:1})]),_:1})]),_:1},8,["icon-right","label"])}const At=T(Ct,[["render",Mt],["__file","CommentSort.vue"]]),Ht=P({__name:"PostAction",props:{action:{type:String,default:void 0}},setup(r,{expose:a}){a();const{appToast:o}=Pe(),e=r,i=h(!1),s=h(!1),l=h(),g=h(!1),u=h(!1),y=h(!1),z=h(!1),b=h();ne(()=>{b.value=e.action}),B(s,C=>{C?l.value=setTimeout(()=>{i.value=C},300):i.value=C}),pe(()=>{l.value&&(clearTimeout(l.value),l.value=null)});const D=C=>{b.value=C,C==="PRIZE_IT"&&ee()},re=()=>{l.value=setTimeout(()=>{b.value=void 0},300),i.value=!1},$=O(()=>b.value?b.value=="LOVE_IT"?ce:b.value=="PRIZE_IT"?me:b.value=="ADOPT_IT"?fe:_e:""),U=O(()=>b.value?b.value=="LOVE_IT"?"I loved it":b.value=="PRIZE_IT"?"I prized it":b.value=="ADOPT_IT"?"I adopted it":"I actioned it":""),G=O(()=>b.value?b.value=="LOVE_IT"?"pink":b.value=="PRIZE_IT"?"amber-8":b.value=="ADOPT_IT"?"green":"blue":""),ee=()=>{o(`
    <strong>Chanavee Bekaku</strong><br> Received a reward from Danial <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"/></svg>
    `,{caption:"5 Minutes ago",avatar:le,position:"right",color:"primary",html:!0,multiLine:!0,hideClose:!0})},Y={appToast:o,props:e,showReact:i,reactHover:s,hoverTimeOut:l,loveHover:g,prizeHover:u,adoptHover:y,actionHover:z,actionType:b,onLiked:D,onUnLiked:re,actionIcon:$,actionText:U,actionColor:G,testNotify:ee,get biHandIndexThumbFill(){return _e},get biHandIndexThumb(){return Ze},get biHeart(){return Te},get biChatSquareDots(){return Je},get biGiftFill(){return me},get biGift(){return Xe},get biArrow90degRight(){return Ke},get biHeartFill(){return ce},get biHandbagFill(){return fe},get biHandbag(){return $e},get biBookmark(){return Ie}};return Object.defineProperty(Y,"__isScriptSetup",{enumerable:!1,value:!0}),Y}}),Lt={class:"row justify-between q-pa-md q-gutter-md"};function Et(r,a,o,e,i,s){return d(),H(W,null,[t(F),t(ke,{align:"around"},{default:n(()=>[e.actionType?(d(),m(tt,{key:1,appear:"","enter-active-class":"animated heartBeat"},{default:n(()=>[t(x,{flat:"",icon:e.actionIcon,class:"text-capitalize",label:e.actionText,color:e.actionColor,onClick:e.onUnLiked},null,8,["icon","label","color"])]),_:1})):(d(),m(x,{key:0,flat:"",icon:e.biHeart,class:"text-capitalize",label:"Love it",onMouseover:a[15]||(a[15]=l=>e.reactHover=!0)},{default:n(()=>[t(K,{modelValue:e.showReact,"onUpdate:modelValue":a[12]||(a[12]=l=>e.showReact=l),cover:"",anchor:"bottom left","auto-close":"",onHide:a[13]||(a[13]=l=>e.reactHover=!1),onMouseleave:a[14]||(a[14]=l=>e.reactHover=!1)},{default:n(()=>[_("div",Lt,[t(et,{appear:"","enter-active-class":"animated lightSpeedInLeft"},{default:n(()=>[t(x,{key:"btn-1",round:"",dense:"",flat:"",color:"pink",onMouseover:a[0]||(a[0]=l=>e.loveHover=!0),onMouseleave:a[1]||(a[1]=l=>e.loveHover=!1),icon:e.loveHover?e.biHeartFill:e.biHeart,onClick:a[2]||(a[2]=l=>e.onLiked("LOVE_IT"))},{default:n(()=>[t(N,{class:"bg-pink",anchor:"top middle",self:"center middle"},{default:n(()=>a[16]||(a[16]=[f(" Love it ")])),_:1})]),_:1},8,["icon"]),t(x,{key:"btn-2",round:"",dense:"",flat:"",color:"amber-8",onMouseover:a[3]||(a[3]=l=>e.prizeHover=!0),onMouseleave:a[4]||(a[4]=l=>e.prizeHover=!1),icon:e.prizeHover?e.biGiftFill:e.biGift,onClick:a[5]||(a[5]=l=>e.onLiked("PRIZE_IT"))},{default:n(()=>[t(N,{anchor:"top middle",self:"center middle",class:"bg-amber-8"},{default:n(()=>a[17]||(a[17]=[f("Prize it")])),_:1})]),_:1},8,["icon"]),t(x,{key:"btn-3",round:"",dense:"",flat:"",color:"green",onMouseover:a[6]||(a[6]=l=>e.adoptHover=!0),onMouseleave:a[7]||(a[7]=l=>e.adoptHover=!1),icon:e.adoptHover?e.biHandbagFill:e.biHandbag,onClick:a[8]||(a[8]=l=>e.onLiked("ADOPT_IT"))},{default:n(()=>[t(N,{anchor:"top middle",self:"center middle",class:"bg-green"},{default:n(()=>a[18]||(a[18]=[f("Adopt it")])),_:1})]),_:1},8,["icon"]),t(x,{key:"btn-4",round:"",dense:"",flat:"",color:"blue",onMouseover:a[9]||(a[9]=l=>e.actionHover=!0),onMouseleave:a[10]||(a[10]=l=>e.actionHover=!1),icon:e.actionHover?e.biHandIndexThumbFill:e.biHandIndexThumb,onClick:a[11]||(a[11]=l=>e.onLiked("ACTION_IT"))},{default:n(()=>[t(N,{anchor:"top middle",self:"center middle",class:"bg-blue"},{default:n(()=>a[19]||(a[19]=[f("Action it")])),_:1})]),_:1},8,["icon"])]),_:1})])]),_:1},8,["modelValue"])]),_:1},8,["icon"])),t(F,{vertical:""}),t(x,{class:"text-capitalize",flat:"",icon:e.biChatSquareDots,label:"Comment it"},{default:n(()=>[t(N,null,{default:n(()=>a[20]||(a[20]=[f("Comment it")])),_:1})]),_:1},8,["icon"]),t(F,{vertical:""}),t(x,{class:"text-capitalize",flat:"",icon:e.biBookmark,label:"Save it"},{default:n(()=>[t(N,null,{default:n(()=>a[21]||(a[21]=[f("Save it")])),_:1})]),_:1},8,["icon"]),t(F,{vertical:""}),t(x,{class:"text-capitalize",flat:"",icon:e.biArrow90degRight,label:"Share it"},{default:n(()=>[t(N,null,{default:n(()=>a[22]||(a[22]=[f("Share it")])),_:1})]),_:1},8,["icon"])]),_:1})],64)}const Ft=T(Ht,[["render",Et],["__file","PostAction.vue"]]),Ot=P({__name:"PostEngaging",setup(r,{expose:a}){a();const{t:o}=V(),e={t:o,get biHandIndexThumbFill(){return _e},get biGiftFill(){return me},get biHeartFill(){return ce},get biHandbagFill(){return fe},get biMagic(){return at}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),Dt={class:"text-caption text-muted"},Nt={class:"row justify-between"},qt={class:"row"},Bt={class:"q-mr-xs"},Rt={class:"q-gutter-x-md"},zt={href:"javascript:void(0)",class:"app-text-link text-muted text-caption"},jt={href:"javascript:void(0)",class:"app-text-link text-muted text-caption"};function Vt(r,a,o,e,i,s){return d(),m(X,null,{default:n(()=>[_("div",Dt,[t(I,{name:e.biMagic},null,8,["name"]),f(" "+p(e.t("userEngagement"))+" 21.8k ",1)]),_("div",Nt,[_("div",qt,[_("div",Bt,[t(A,{color:"pink","text-color":"white",size:"20px",icon:e.biHeartFill,class:"relative-position",style:{left:"0px"}},null,8,["icon"]),t(A,{color:"amber-8","text-color":"white",size:"20px",icon:e.biGiftFill,class:"relative-position",style:{left:"-5px"}},null,8,["icon"]),t(A,{color:"green","text-color":"white",size:"20px",icon:e.biHandbagFill,class:"relative-position",style:{left:"-10px"}},null,8,["icon"]),t(A,{color:"blue","text-color":"white",size:"20px",icon:e.biHandIndexThumbFill,class:"relative-position",style:{left:"-15px"}},null,8,["icon"]),a[0]||(a[0]=_("a",{href:"javascript:void(0)",class:"app-text-link text-muted text-caption"},"10.9k",-1))])]),_("div",Rt,[_("a",zt,"9k "+p(e.t("comments")),1),_("a",jt,"1.9k "+p(e.t("shares")),1)])])]),_:1})}const Qt=T(Ot,[["render",Vt],["__file","PostEngaging.vue"]]),Wt=P({__name:"CommentArea",setup(r,{expose:a}){a();const e={comments:h(null),get AvatarPlaceHolder128(){return le},get biEmojiSmile(){return nt},get biImage(){return ot}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),Ut=["src"];function Gt(r,a,o,e,i,s){return d(),m(S,null,{default:n(()=>[t(c,{avatar:"",top:""},{default:n(()=>[t(A,{size:"36px"},{default:n(()=>[_("img",{src:e.AvatarPlaceHolder128},null,8,Ut)]),_:1})]),_:1}),t(c,null,{default:n(()=>[t(lt,{dense:"",filled:"",modelValue:e.comments,"onUpdate:modelValue":a[0]||(a[0]=l=>e.comments=l),type:"textarea",autogrow:"",label:"Add comment",counter:"",maxlength:"255"},{append:n(()=>[t(x,{flat:"",round:"",icon:e.biEmojiSmile},null,8,["icon"]),t(x,{flat:"",round:"",icon:e.biImage},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1})]),_:1})}const Yt=T(Wt,[["render",Gt],["__file","CommentArea.vue"]]),Zt=P({__name:"CommentItem",setup(r,{expose:a}){a();const o={get AvatarPlaceHolder128(){return le},get biHeart(){return Te},get biThreeDots(){return we},AppLink:ve};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),Jt={class:"row q-my-sm"},Xt={class:"q-pr-sm"},Kt={class:"q-mx-sm"},$t={class:"q-pl-sm"};function ea(r,a,o,e,i,s){return d(),m(S,null,{default:n(()=>[t(c,{avatar:"",top:""},{default:n(()=>[t(A,{size:"36px"},{default:n(()=>[t(J,{src:e.AvatarPlaceHolder128},null,8,["src"])]),_:1})]),_:1}),t(c,null,{default:n(()=>[t(v,{lines:"1"},{default:n(()=>a[0]||(a[0]=[_("span",{class:"cursor-pointer text-weight-bold"},"Chanavee Bekaku",-1),_("span",{class:"text-muted text-caption q-ml-sm"},"June 28 at 8:40 PM",-1)])),_:1}),t(v,null,{default:n(()=>[_("div",{class:Q([{"text-grey-1 wee-main-bg-color-theme-dark":r.$q.dark.isActive,"text-grey-9 bg-grey-2":!r.$q.dark.isActive},"q-pa-md"]),style:{"border-radius":"15px"}}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",2)]),_:1}),t(v,{lines:"1"},{default:n(()=>[_("div",Jt,[_("div",Xt,[t(e.AppLink,{label:"Love it",class:"text-caption"}),_("span",Kt,[t(I,{name:e.biHeart},null,8,["name"]),a[1]||(a[1]=_("span",{class:"text-caption text-muted q-ml-xs"},"1.9k",-1))])]),t(F,{vertical:""}),_("div",$t,[t(e.AppLink,{label:"Reply it",class:"text-caption"}),a[2]||(a[2]=_("span",{class:"q-mx-sm"},[_("span",{class:"text-caption text-muted q-ml-xs"},"1.9k")],-1))])])]),_:1})]),_:1}),t(c,{side:"",top:""},{default:n(()=>[t(x,{dense:"",icon:e.biThreeDots,size:"sm",flat:"",round:""},null,8,["icon"])]),_:1})]),_:1})}const ta=T(Zt,[["render",ea],["__file","CommentItem.vue"]]),aa=P({__name:"CommentItems",setup(r,{expose:a}){a();const o={CommentItem:ta};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function na(r,a,o,e,i,s){return d(),H(W,null,[t(oe,null,{default:n(()=>[t(e.CommentItem),t(e.CommentItem,{style:{"padding-left":"10%"}})]),_:1}),t(x,{label:"Load more comments...",class:"text-capitalize q-ma-sm",flat:""})],64)}const oa=T(aa,[["render",na],["__file","CommentItems.vue"]]),ae=6,la=P({__name:"PostGallerry",props:{items:{type:Array,default:()=>[]}},setup(r,{expose:a}){a();const o=r,e=O(()=>o.items.length===1?"col-12":o.items.length>=3?"col-4":"col-6"),i=O(()=>o.items.length>ae?o.items.length-ae:0),s=O(()=>o.items.length>0?o.items.slice(0,ae):[]),l={props:o,limitImage:ae,getColWidth:e,getMoreNumber:i,limitItems:s};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),ra={class:"row"},ia={key:0,class:"absolute-bottom text-subtitle1 full-height row items-center justify-center"};function sa(r,a,o,e,i,s){return d(),H("div",ra,[(d(!0),H(W,null,ge(e.limitItems,(l,g)=>(d(),H("div",{key:g,class:Q(e.getColWidth)},[t(J,{class:"bg-gray-1",src:l.image,"placeholder-src":l.thumbnail,"spinner-color":"white",ratio:4/3,"no-native-menu":""},{default:n(()=>[g==e.limitImage-1&&e.getMoreNumber>0?(d(),H("div",ia,[_("div",null,"+"+p(e.getMoreNumber),1)])):R("",!0)]),_:2},1032,["src","placeholder-src"])],2))),128))])}const da=T(la,[["render",sa],["__file","PostGallerry.vue"]]),ua=P({__name:"PostHashtag",props:{items:{type:Array,default:()=>[]}},setup(r,{expose:a}){a();const o={AppLink:ve};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),ca={class:"q-gutter-md"};function ma(r,a,o,e,i,s){return d(),m(X,null,{default:n(()=>[_("div",ca,[(d(!0),H(W,null,ge(o.items,(l,g)=>(d(),m(e.AppLink,{key:g,label:`#${l.name}`,color:"text-primary"},null,8,["label"]))),128))])]),_:1})}const fa=T(ua,[["render",ma],["__file","PostHashtag.vue"]]),_a=P({__name:"PostContent",props:{content:{type:String,default:""},postId:{type:Number,default:0}},setup(r,{expose:a}){a();const o=r,{t:e}=V(),i=h(0),s=h(4),l=h(!1),g=h(!1);ne(()=>{u()});const u=()=>{var z=document.getElementById("feed-post-content-"+o.postId);if(z){var b=z.offsetHeight;const D=b/17;i.value=rt(D,0),i.value>s.value&&(l.value=!0)}},y={props:o,t:e,lineHeight:i,limitLines:s,showMoreBtn:l,showMoreText:g,setDescHeight:u,AppLink:ve,get urlify(){return it}};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),pa=["id","innerHTML"];function ga(r,a,o,e,i,s){return d(),m(X,null,{default:n(()=>[_("div",{id:"feed-post-content-"+o.postId,class:Q(e.showMoreBtn&&!e.showMoreText?"word-limit":""),innerHTML:e.urlify(o.content)},null,10,pa),e.showMoreBtn&&!e.showMoreText?(d(),m(e.AppLink,{key:0,label:"..."+e.t("base.seeMore"),color:"text-primary",onClick:a[0]||(a[0]=l=>e.showMoreText=!0)},null,8,["label"])):R("",!0)]),_:1})}const va=T(_a,[["render",ga],["__scopeId","data-v-b3fad31b"],["__file","PostContent.vue"]]),ba=P({__name:"ProfileName",props:{label:{type:String,default:""},color:{type:String,default:"text-muted"},external:{type:Boolean,default:!1},href:{type:String,default:""},to:{type:String,default:""}},setup(r,{expose:a}){a();const o=h(!1),e=h(!1),i=h();B(e,u=>{u?i.value=setTimeout(()=>{o.value=u},1*1e3):o.value=u}),pe(()=>{s()});const s=()=>{i.value&&(clearTimeout(i.value),i.value=null),e.value=!1},g={show:o,hover:e,hoverTimeOut:i,clearTo:s,onMouseLeave:()=>{o.value||s()},ProfileCard:He,MedalBadge:ht};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}});function ha(r,a,o,e,i,s){return d(),H(W,null,[t(x,{class:Q(["text-capitalize app-text-link btn--no-hover",o.color]),ripple:!1,dense:"",flat:"",label:o.label,to:o.to,href:o.href?o.href:void 0,target:o.external?"_blank":void 0,onMouseover:a[3]||(a[3]=l=>e.hover=!0),onMouseleave:e.onMouseLeave},{default:n(()=>[t(K,{modelValue:e.show,"onUpdate:modelValue":a[0]||(a[0]=l=>e.show=l),style:{width:"350px"},onHide:a[1]||(a[1]=l=>e.hover=!1),onMouseleave:a[2]||(a[2]=l=>e.hover=!1),cover:"",anchor:"center left"},{default:n(()=>[t(j,null,{default:n(()=>[t(e.ProfileCard,{"avatar-image":"http://192.168.7.249:8080/cdn/images/202206/9_1656492735469_83bd2a0841514c4fbb81c8f674026519.jpg","cover-image":"http://192.168.7.249:8080/cdn/images/202207/9_1656661445570_8ded7c66943c4f69ac5db376236a7e09.jpg",name:o.label,description:"Software Engineer",height:"85px","avatar-top":"35px","avatar-size":"48px",descriptionStyle:"margin-top:5px","show-medal":""},null,8,["name"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["class","label","to","href","target"]),t(e.MedalBadge,{label:"Silver medal"})],64)}const ya=T(ba,[["render",ha],["__file","ProfileName.vue"]]),xa=P({__name:"PostMenu",setup(r,{expose:a}){a();const{t:o}=V(),e={t:o,get biThreeDots(){return we},get biBookmark(){return Ie},get biLink45deg(){return st},get biFlag(){return dt}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function ka(r,a,o,e,i,s){return d(),m(x,{dense:"",icon:e.biThreeDots,flat:"",round:""},{default:n(()=>[t(K,{cover:"",anchor:"top middle"},{default:n(()=>[t(oe,{style:{"min-width":"100px"}},{default:n(()=>[L((d(),m(S,{clickable:""},{default:n(()=>[t(c,{side:"",top:""},{default:n(()=>[t(I,{name:e.biBookmark},null,8,["name"])]),_:1}),t(c,null,{default:n(()=>[t(v,null,{default:n(()=>[f(p(e.t("saveThisPost")),1)]),_:1})]),_:1})]),_:1})),[[E]]),L((d(),m(S,{clickable:""},{default:n(()=>[t(c,{side:"",top:""},{default:n(()=>[t(I,{name:e.biLink45deg},null,8,["name"])]),_:1}),t(c,null,{default:n(()=>[t(v,null,{default:n(()=>[f(p(e.t("copyLinkToPost")),1)]),_:1})]),_:1})]),_:1})),[[E]]),L((d(),m(S,{clickable:""},{default:n(()=>[t(c,{side:"",top:""},{default:n(()=>[t(I,{name:e.biFlag},null,8,["name"])]),_:1}),t(c,null,{default:n(()=>[t(v,null,{default:n(()=>[f(p(e.t("reportPost")),1)]),_:1})]),_:1})]),_:1})),[[E]])]),_:1})]),_:1})]),_:1},8,["icon"])}const Sa=T(xa,[["render",ka],["__file","PostMenu.vue"]]),Pa=P({__name:"FeedPost",props:{post:{type:Object,default:()=>null,required:!0},index:{type:Number}},setup(r,{expose:a}){a();const o=r,e=Ce(),{appFormatDateTime:i}=Pe(),s=h();ne(()=>{l()});const l=async()=>{const u=ut(o.post.content);u&&u.length>0&&(s.value={domain:"youtube.com",url:"https://www.youtube.com/watch?v=2wMRYQPj7iU",title:"Solo wild camping in the rain [ASMR]",desc:"#ASMR #wildcamping #rainsounds  Back with another ASMR style wild camp. I had a few people ask for longer videos like this, so here you have it :) I love mak...",image:"https://i.ytimg.com/vi/2wMRYQPj7iU/maxresdefault.jpg",imageAlt:""})},g={props:o,$q:e,appFormatDateTime:i,opengraphItem:s,checkOgLink:l,get AvatarPlaceHolder128(){return le},CommentSort:At,PostAction:Ft,PostEngaging:Qt,CommentArea:Yt,CommentItems:oa,PostGallerry:da,PostHashtag:fa,PostContent:va,ProfileName:ya,PostMenu:Sa,get FORMAT_DATE12(){return ct},get biBoxArrowUpRight(){return mt}};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}),Ta={class:"text-caption q-ml-sm text-muted"};function Ia(r,a,o,e,i,s){return d(),m(j,{flat:"",bordered:"",class:"q-mt-md"},{default:n(()=>[M(r.$slots,"refrenceItem",{},()=>[o.post.reference?(d(),m(S,{key:0},{default:n(()=>[t(c,{avatar:""},{default:n(()=>[t(A,{size:"30px"},{default:n(()=>a[0]||(a[0]=[_("img",{class:"bg-gray-8",src:"https://i.pravatar.cc/196","spinner-color":"white","no-native-menu":""},null,-1)])),_:1})]),_:1}),t(c,null,{default:n(()=>[t(v,null,{default:n(()=>[t(e.ProfileName,{label:o.post.reference.name,color:"wee-text-head",to:"/user/bekaku"},null,8,["label"]),_("span",Ta,p(o.post.reference.activity),1)]),_:1})]),_:1}),t(c,{side:""},{default:n(()=>[t(I,{name:o.post.reference.activityIcon},null,8,["name"])]),_:1})]),_:1})):R("",!0),t(F)]),M(r.$slots,"header",{},()=>[t(S,null,{default:n(()=>[t(c,{avatar:"",top:""},{default:n(()=>[t(A,{size:"48px"},{default:n(()=>[t(J,{class:"bg-gray-8",src:e.AvatarPlaceHolder128,"spinner-color":"white","no-native-menu":""},null,8,["src"]),t(ft,{floating:"",color:"positive",rounded:"",transparent:"",class:"absolute",style:{top:"30px"}})]),_:1})]),_:1}),t(c,null,{default:n(()=>[t(v,{class:"text-weight-bold cursor-pointer"},{default:n(()=>[t(e.ProfileName,{label:"Chanavee Bekaku",color:"wee-text-head wee-text-weight-bold",to:"/user/bekaku"})]),_:1}),t(v,{caption:""},{default:n(()=>[f(p(e.appFormatDateTime(o.post.postDatetime,e.FORMAT_DATE12)),1)]),_:1})]),_:1}),t(c,{side:"",top:""},{default:n(()=>[t(e.PostMenu)]),_:1})]),_:1})]),M(r.$slots,"description",{},()=>[t(e.PostContent,{content:o.post.content,"post-id":o.post.id},null,8,["content","post-id"])]),M(r.$slots,"hashtag",{},()=>[o.post.hashtag.length>0?(d(),m(e.PostHashtag,{key:0,items:o.post.hashtag},null,8,["items"])):R("",!0)]),M(r.$slots,"photos",{},()=>[o.post.gallery.length>0?(d(),m(e.PostGallerry,{key:0,items:o.post.gallery},null,8,["items"])):R("",!0)]),o.post.gallery.length==0&&e.opengraphItem?(d(),m(j,{key:0,flat:""},{default:n(()=>[t(J,{"spinner-color":"white",src:e.opengraphItem.image,style:{"max-height":"314px"}},null,8,["src"]),t(S,{clickable:"",class:Q(e.$q.dark.isActive?"wee-main-bg-color-theme-dark":"bg-grey-2"),href:e.opengraphItem.url,target:"_blank"},{default:n(()=>[t(c,null,{default:n(()=>[t(v,{lines:1},{default:n(()=>[f(p(e.opengraphItem.domain),1)]),_:1}),t(v,{lines:1},{default:n(()=>[f(p(e.opengraphItem.title),1)]),_:1}),t(v,{caption:"",lines:2},{default:n(()=>[f(p(e.opengraphItem.desc),1)]),_:1})]),_:1}),t(c,{side:""},{default:n(()=>[t(I,{name:e.biBoxArrowUpRight},null,8,["name"])]),_:1})]),_:1},8,["class","href"])]),_:1})):R("",!0),M(r.$slots,"engaging",{},()=>[t(e.PostEngaging)]),M(r.$slots,"action",{},()=>[t(e.PostAction)]),M(r.$slots,"commentsArea",{},()=>[t(e.CommentArea),t(e.CommentSort,{class:"q-ml-sm"})]),M(r.$slots,"commentsList",{},()=>[t(e.CommentItems)])]),_:3})}const wa=T(Pa,[["render",Ia],["__file","FeedPost.vue"]]),Ca=P({__name:"index",setup(r,{expose:a}){a();const o=xe();gt();const e=Ce(),i=[{id:1,pin:!1,postDatetime:"2022-01-05 11:30:30",content:"Solo wild camping in the rain [ASMR] https://www.youtube.com/watch?v=2wMRYQPj7iU",gallery:[],hashtag:[{id:1,name:"DesperateHours"},{id:2,name:"FreeDocumentary"},{id:3,name:"Documentary"}],reference:{name:"Danial Wong",activity:"likes this",activityIcon:"bi-heart"}},{id:2,pin:!1,postDatetime:"2022-04-28 11:30:30",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",gallery:[{image:"https://loremflickr.com/500/300/dog",thumbnail:"https://loremflickr.com/160/160/dog"},{image:"https://loremflickr.com/500/300/brazil,rio",thumbnail:"https://loremflickr.com/160/160/brazil,rio"},{image:"https://loremflickr.com/500/300/paris",thumbnail:"https://loremflickr.com/160/160/paris"},{image:"https://loremflickr.com/500/300?random=1",thumbnail:"https://loremflickr.com/160/160?random=1"},{image:"https://loremflickr.com/500/300?random=2",thumbnail:"https://loremflickr.com/160/160?random=2"},{image:"https://loremflickr.com/500/300?random=3",thumbnail:"https://loremflickr.com/160/160?random=3"},{image:"https://loremflickr.com/500/300?random=4",thumbnail:"https://loremflickr.com/160/160?random=4"}],hashtag:[]},{id:3,pin:!1,postDatetime:"2022-07-05 11:30:30",reference:{name:"Vinayak Naik",activity:"prize this",activityIcon:"bi-gift"},content:"555 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",gallery:[{image:"https://loremflickr.com/500/300?random=3",thumbnail:"https://loremflickr.com/160/160?random=3"}],hashtag:[{id:1,name:"WeAreHearForBuil"}]},{id:4,pin:!1,postDatetime:"2022-01-05 11:30:30",reference:{name:"Danial Wong",activity:"share this",activityIcon:"bi-share"},content:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. https://pantip.com/topic/40388674',gallery:[],hashtag:[{id:1,name:"WeAreHearForBuil"}]},{id:5,pin:!1,postDatetime:"2022-01-05 11:30:30",reference:{name:"Danial Wong",activity:"share this",activityIcon:"bi-share"},content:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. https://pantip.com/topic/40388674',gallery:[],hashtag:[]}],s=h(i),g={authenStore:o,$q:e,initialPost:i,posts:s,onLoadRef:(u,y)=>{console.log("onLoadRef",u),setTimeout(()=>{s.value.push(i[0]),y()},2e3)},FeedPostArea:St,FeedSort:wt,FeedPost:wa,ProfileCard:He};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}),Ma={class:"row justify-center q-my-md"};function Aa(r,a,o,e,i,s){return d(),m(_t,{class:"q-px-md"},{default:n(()=>[t(yt,{onLoad:e.onLoadRef,offset:250},{loading:n(()=>[_("div",Ma,[t(pt,{color:"primary",size:"40px"})])]),default:n(()=>[e.$q.screen.gt.sm?R("",!0):(d(),m(j,{key:0,flat:"",bordered:"",class:"q-mb-md"},{default:n(()=>[t(e.ProfileCard,{"avatar-image":e.authenStore.loginedAvatar,"cover-image":e.authenStore.loginedCover,name:e.authenStore.loginedDisplay,description:"Software Engineer",height:"100px","avatar-top":"50px","avatar-size":"65px",descriptionStyle:"margin-top:25px","show-medal":""},null,8,["avatar-image","cover-image","name"])]),_:1})),t(e.FeedPostArea),t(e.FeedSort),(d(!0),H(W,null,ge(e.posts,(l,g)=>(d(),m(e.FeedPost,{key:g,post:l,index:g},null,8,["post","index"]))),128))]),_:1})]),_:1})}const Na=T(Ca,[["render",Aa],["__file","index.vue"]]);export{Na as default};
