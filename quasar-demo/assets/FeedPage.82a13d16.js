import{b1 as Oe,b2 as De,r as h,a8 as z,b3 as W,b4 as ze,b5 as He,b6 as ge,b7 as ne,b8 as Be,b9 as be,ba as We,bb as Ve,bc as te,bd as ce,be as ye,bf as ke,bg as de,bh as Fe,bi as Re,bj as Qe,aO as je,d as S,C as we,o as u,a as f,w as t,Q as R,e,l as $,m,K as A,p as J,u as a,f as b,G as Q,i as p,t as g,y as T,aL as Ue,aJ as K,bk as Ye,J as D,bl as Ge,T as Ze,bm as Ie,I as _,al as $e,am as X,v as oe,q,g as C,bn as me,bo as fe,bp as pe,bq as ve,j as N,F as j,br as Je,X as _e,B as H,W as Ke,Z as Xe,bs as et,bt as tt,Y as at,h as Se,bu as lt,S as se,bv as nt,ae as ot,an as st,bw as it,bx as Ce,k as he,H as V,by as rt,bz as ut,bA as ct,bB as dt,bC as mt,aI as L,ak as ft,bD as pt,bE as vt,bF as _t,bG as gt}from"./index.66a94ce3.js";import{u as ht}from"./use-meta.98c62cea.js";import{u as F}from"./useLang.ae8dbc44.js";import{C as O}from"./ClosePopup.5c3629ff.js";import{b as Me,c as bt,d as Ee,e as yt,_ as le,f as kt,a as Pe}from"./AppLink.f250ab17.js";import{u as Le}from"./useBase.7325ffef.js";import{_ as xt}from"./plugin-vue_export-helper.21dcd24c.js";const{passive:B}=Ve;var Tt=Oe({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:De,initialIndex:{type:Number,default:0},disable:Boolean,reverse:Boolean},emits:["load"],setup(n,{slots:l,emit:c}){const o=h(!1),r=h(!0),s=h(null),v=h(null);let y=n.initialIndex,i,k;const x=z(()=>"q-infinite-scroll__loading"+(o.value===!0?"":" invisible"));function E(){if(n.disable===!0||o.value===!0||r.value===!1)return;const I=te(i),M=ce(i),Z=ye(i);n.reverse===!1?Math.round(M+Z+n.offset)>=Math.round(I)&&U():Math.round(M)<=n.offset&&U()}function U(){if(n.disable===!0||o.value===!0||r.value===!1)return;y++,o.value=!0;const I=te(i);c("load",y,M=>{r.value===!0&&(o.value=!1,ke(()=>{if(n.reverse===!0){const Z=te(i),Ne=ce(i),qe=Z-I;de(i,Ne+qe)}M===!0?Y():s.value&&s.value.closest("body")&&k()}))})}function ie(){y=0}function ee(){r.value===!1&&(r.value=!0,i.addEventListener("scroll",k,B)),E()}function Y(){r.value===!0&&(r.value=!1,o.value=!1,i.removeEventListener("scroll",k,B),k!==void 0&&k.cancel!==void 0&&k.cancel())}function G(){if(i&&r.value===!0&&i.removeEventListener("scroll",k,B),i=Fe(s.value,n.scrollTarget),r.value===!0){if(i.addEventListener("scroll",k,B),n.reverse===!0){const I=te(i),M=ye(i);de(i,I-M)}E()}}function P(I){y=I}function d(I){I=parseInt(I,10);const M=k;k=I<=0?E:Re(E,isNaN(I)===!0?100:I),i&&r.value===!0&&(M!==void 0&&i.removeEventListener("scroll",M,B),i.addEventListener("scroll",k,B))}function w(I){if(re.value===!0){if(v.value===null){I!==!0&&ke(()=>{w(!0)});return}const M=`${o.value===!0?"un":""}pauseAnimations`;Array.from(v.value.getElementsByTagName("svg")).forEach(Z=>{Z[M]()})}}const re=z(()=>n.disable!==!0&&r.value===!0);W([o,re],()=>{w()}),W(()=>n.disable,I=>{I===!0?Y():ee()}),W(()=>n.reverse,()=>{o.value===!1&&r.value===!0&&E()}),W(()=>n.scrollTarget,G),W(()=>n.debounce,d);let ue=!1;ze(()=>{ue!==!1&&i&&de(i,ue)}),He(()=>{ue=i?ce(i):!1}),ge(()=>{r.value===!0&&i.removeEventListener("scroll",k,B)}),ne(()=>{d(n.debounce),G(),o.value===!1&&w()});const Ae=Qe();return Object.assign(Ae.proxy,{poll:()=>{k!==void 0&&k()},trigger:U,stop:Y,reset:ie,resume:ee,setIndex:P,updateScrollTarget:G}),()=>{const I=Be(l.default,[]);return re.value===!0&&I[n.reverse===!1?"push":"unshift"](be("div",{ref:v,class:x.value},We(l.loading))),be("div",{class:"q-infinite-scroll",ref:s},I)}}}),wt=n=>{const{t:l}=F(),c=je(),o=h(c.meta.pageName?l(`${c.meta.pageName}`)+`${n&&n.additionalTitle?" - "+n.additionalTitle:""}`:l("app.name"));return ht(()=>({title:o.value})),{setTitle:s=>{o.value=s}}};const It=S({__name:"FeedPostArea",setup(n){const{t:l}=F(),c=we();return(o,r)=>(u(),f(R,{flat:"",bordered:""},{default:t(()=>[e(K,null,{default:t(()=>[e($,null,{default:t(()=>[e(m,{avatar:""},{default:t(()=>[e(A,{size:"48px",class:"shadow-5"},{default:t(()=>[e(J,{src:a(c).loginedAvatar,"spinner-color":"white","no-native-menu":""},null,8,["src"])]),_:1})]),_:1}),e(m,null,{default:t(()=>[e(b,{style:{padding:"15px","border-radius":"25px"},class:Q(["cursor-pointer",o.$q.dark.isActive?"wee-main-bg-color-theme-dark text-white":"bg-grey-3"])},{default:t(()=>[p(g(a(l)("dSologan")),1)]),_:1},8,["class"])]),_:1}),e(m,{side:""},{default:t(()=>[e(T,{class:"text-capitalize",icon:a(Ue),color:"primary",label:"Post it!",unelevated:"",rounded:""},null,8,["icon"])]),_:1})]),_:1})]),_:1}),e(Ie,{align:"around"},{default:t(()=>[e(T,{class:"text-capitalize",color:"info",flat:"",icon:a(Ye),label:"Photo"},null,8,["icon"]),e(D,{vertical:""}),e(T,{class:"text-capitalize",color:"green",flat:"",icon:a(Ge),label:"Video"},null,8,["icon"]),e(D,{vertical:""}),e(T,{class:"text-capitalize",color:"orange",flat:"",icon:a(Ze),label:"Write article"},null,8,["icon"])]),_:1})]),_:1}))}}),$t={class:"text-caption wee-text-muted q-mr-sm"},St=S({__name:"FeedSort",setup(n){const{t:l}=F(),c=h("NEW_POST"),o=r=>{c.value=r};return(r,s)=>(u(),f(R,{flat:"",class:"bg-transparent"},{default:t(()=>[e(K,null,{default:t(()=>[_("span",$t,g(a(l)("sort.by"))+":",1),e(T,{class:"text-capitalize",flat:"","icon-right":a($e),label:a(l)("sort.post."+c.value)},{default:t(()=>[e(X,null,{default:t(()=>[e(oe,{style:{"min-width":"100px"}},{default:t(()=>[q((u(),f($,{clickable:"",onClick:s[0]||(s[0]=v=>o("NEW_POST"))},{default:t(()=>[e(m,{side:""},{default:t(()=>[e(C,{name:a(Me)},null,8,["name"])]),_:1}),e(m,null,{default:t(()=>[e(b,null,{default:t(()=>[p(g(a(l)("sort.post.NEW_POST")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[p(g(a(l)("sort.post.NEW_POST_DESC")),1)]),_:1})]),_:1})]),_:1})),[[O]]),q((u(),f($,{clickable:"",onClick:s[1]||(s[1]=v=>o("NEW_ACTIVITY"))},{default:t(()=>[e(m,{side:""},{default:t(()=>[e(C,{name:a(bt)},null,8,["name"])]),_:1}),e(m,null,{default:t(()=>[e(b,null,{default:t(()=>[p(g(a(l)("sort.post.NEW_ACTIVITY")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[p(g(a(l)("sort.post.NEW_ACTIVITY_DESC")),1)]),_:1})]),_:1})]),_:1})),[[O]]),q((u(),f($,{clickable:"",onClick:s[2]||(s[2]=v=>o("TOP_POST"))},{default:t(()=>[e(m,{side:""},{default:t(()=>[e(C,{name:a(Ee)},null,8,["name"])]),_:1}),e(m,null,{default:t(()=>[e(b,null,{default:t(()=>[p(g(a(l)("sort.post.TOP_POST")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[p(g(a(l)("sort.post.TOP_POST_DESC")),1)]),_:1})]),_:1})]),_:1})),[[O]])]),_:1})]),_:1})]),_:1},8,["icon-right","label"])]),_:1})]),_:1}))}}),Ct=S({__name:"CommentSort",setup(n){const{t:l}=F(),c=h("NEW_COMMENT"),o=r=>{c.value=r};return(r,s)=>(u(),f(T,{class:"text-capitalize",flat:"","icon-right":a($e),label:a(l)("sort.comment."+c.value)},{default:t(()=>[e(X,null,{default:t(()=>[e(oe,{style:{"min-width":"100px"}},{default:t(()=>[q((u(),f($,{clickable:"",onClick:s[0]||(s[0]=v=>o("NEW_COMMENT"))},{default:t(()=>[e(m,{side:""},{default:t(()=>[e(C,{name:a(Me)},null,8,["name"])]),_:1}),e(m,null,{default:t(()=>[e(b,null,{default:t(()=>[p(g(a(l)("sort.comment.NEW_COMMENT")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[p(g(a(l)("sort.comment.NEW_COMMENT_DESC")),1)]),_:1})]),_:1})]),_:1})),[[O]]),q((u(),f($,{clickable:"",onClick:s[1]||(s[1]=v=>o("TOP_COMMENT"))},{default:t(()=>[e(m,{side:""},{default:t(()=>[e(C,{name:a(Ee)},null,8,["name"])]),_:1}),e(m,null,{default:t(()=>[e(b,null,{default:t(()=>[p(g(a(l)("sort.comment.TOP_COMMENT")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[p(g(a(l)("sort.comment.NEW_COMMENT_DESC")),1)]),_:1})]),_:1})]),_:1})),[[O]]),q((u(),f($,{clickable:"",onClick:s[2]||(s[2]=v=>o("ALL_COMMENT"))},{default:t(()=>[e(m,{side:""},{default:t(()=>[e(C,{name:a(yt)},null,8,["name"])]),_:1}),e(m,null,{default:t(()=>[e(b,null,{default:t(()=>[p(g(a(l)("sort.comment.ALL_COMMENT")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[p(g(a(l)("sort.comment.ALL_COMMENT_DESC")),1)]),_:1})]),_:1})]),_:1})),[[O]])]),_:1})]),_:1})]),_:1},8,["icon-right","label"]))}}),Mt={class:"row justify-between q-pa-md q-gutter-md"},Et=S({__name:"PostAction",props:{action:{type:String,default:void 0}},setup(n){const{WeeToast:l}=Le(),c=n,o=h(!1),r=h(!1),s=h(),v=h(!1),y=h(!1),i=h(!1),k=h(!1),x=h();ne(()=>{x.value=c.action}),W(r,P=>{P?s.value=setTimeout(()=>{o.value=P},300):o.value=P}),ge(()=>{s.value&&(clearTimeout(s.value),s.value=null)});const E=P=>{x.value=P,P==="PRIZE_IT"&&G()},U=()=>{s.value=setTimeout(()=>{x.value=void 0},300),o.value=!1},ie=z(()=>x.value?x.value=="LOVE_IT"?me:x.value=="PRIZE_IT"?fe:x.value=="ADOPT_IT"?pe:ve:""),ee=z(()=>x.value?x.value=="LOVE_IT"?"I loved it":x.value=="PRIZE_IT"?"I prized it":x.value=="ADOPT_IT"?"I adopted it":"I actioned it":""),Y=z(()=>x.value?x.value=="LOVE_IT"?"pink":x.value=="PRIZE_IT"?"amber-8":x.value=="ADOPT_IT"?"green":"blue":""),G=()=>{l(`
    <strong>Chanavee Bekaku</strong><br> Received a reward from Danial <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"/></svg>
    `,{caption:"5 Minutes ago",avatar:se,position:"right",color:"primary",html:!0,multiLine:!0,hideClose:!0})};return(P,d)=>(u(),N(j,null,[e(D),e(Ie,{align:"around"},{default:t(()=>[x.value?(u(),f(tt,{key:1,appear:"","enter-active-class":"animated heartBeat"},{default:t(()=>[e(T,{flat:"",icon:ie.value,class:"text-capitalize",label:ee.value,color:Y.value,onClick:U},null,8,["icon","label","color"])]),_:1})):(u(),f(T,{key:0,flat:"",icon:a(_e),class:"text-capitalize",label:"Love it",onMouseover:d[15]||(d[15]=w=>r.value=!0)},{default:t(()=>[e(X,{modelValue:o.value,"onUpdate:modelValue":d[12]||(d[12]=w=>o.value=w),cover:"",anchor:"bottom left","auto-close":"",onHide:d[13]||(d[13]=w=>r.value=!1),onMouseleave:d[14]||(d[14]=w=>r.value=!1)},{default:t(()=>[_("div",Mt,[e(Je,{appear:"","enter-active-class":"animated lightSpeedInLeft"},{default:t(()=>[e(T,{key:"btn-1",round:"",dense:"",flat:"",color:"pink",onMouseover:d[0]||(d[0]=w=>v.value=!0),onMouseleave:d[1]||(d[1]=w=>v.value=!1),icon:v.value?a(me):a(_e),onClick:d[2]||(d[2]=w=>E("LOVE_IT"))},{default:t(()=>[e(H,{class:"bg-pink",anchor:"top middle",self:"center middle"},{default:t(()=>[p(" Love it ")]),_:1})]),_:1},8,["icon"]),e(T,{key:"btn-2",round:"",dense:"",flat:"",color:"amber-8",onMouseover:d[3]||(d[3]=w=>y.value=!0),onMouseleave:d[4]||(d[4]=w=>y.value=!1),icon:y.value?a(fe):a(Ke),onClick:d[5]||(d[5]=w=>E("PRIZE_IT"))},{default:t(()=>[e(H,{anchor:"top middle",self:"center middle",class:"bg-amber-8"},{default:t(()=>[p("Prize it")]),_:1})]),_:1},8,["icon"]),e(T,{key:"btn-3",round:"",dense:"",flat:"",color:"green",onMouseover:d[6]||(d[6]=w=>i.value=!0),onMouseleave:d[7]||(d[7]=w=>i.value=!1),icon:i.value?a(pe):a(Xe),onClick:d[8]||(d[8]=w=>E("ADOPT_IT"))},{default:t(()=>[e(H,{anchor:"top middle",self:"center middle",class:"bg-green"},{default:t(()=>[p("Adopt it")]),_:1})]),_:1},8,["icon"]),e(T,{key:"btn-4",round:"",dense:"",flat:"",color:"blue",onMouseover:d[9]||(d[9]=w=>k.value=!0),onMouseleave:d[10]||(d[10]=w=>k.value=!1),icon:k.value?a(ve):a(et),onClick:d[11]||(d[11]=w=>E("ACTION_IT"))},{default:t(()=>[e(H,{anchor:"top middle",self:"center middle",class:"bg-blue"},{default:t(()=>[p("Action it")]),_:1})]),_:1},8,["icon"])]),_:1})])]),_:1},8,["modelValue"])]),_:1},8,["icon"])),e(D,{vertical:""}),e(T,{class:"text-capitalize",flat:"",icon:a(at),label:"Comment it"},{default:t(()=>[e(H,null,{default:t(()=>[p("Comment it")]),_:1})]),_:1},8,["icon"]),e(D,{vertical:""}),e(T,{class:"text-capitalize",flat:"",icon:a(Se),label:"Save it"},{default:t(()=>[e(H,null,{default:t(()=>[p("Save it")]),_:1})]),_:1},8,["icon"]),e(D,{vertical:""}),e(T,{class:"text-capitalize",flat:"",icon:a(lt),label:"Share it"},{default:t(()=>[e(H,null,{default:t(()=>[p("Share it")]),_:1})]),_:1},8,["icon"])]),_:1})],64))}}),Pt={class:"text-caption text-muted"},Lt={class:"row justify-between"},At={class:"row"},Nt={class:"q-mr-xs"},qt=_("a",{href:"javascript:void(0)",class:"wee-link wee-text-muted text-caption"},"10.9k",-1),Ot={class:"q-gutter-x-md"},Dt={href:"javascript:void(0)",class:"wee-link wee-text-muted text-caption"},zt={href:"javascript:void(0)",class:"wee-link wee-text-muted text-caption"},Ht=S({__name:"PostEngaging",setup(n){const{t:l}=F();return(c,o)=>(u(),f(K,null,{default:t(()=>[_("div",Pt,[e(C,{name:a(nt)},null,8,["name"]),p(" "+g(a(l)("userEngagement"))+" 21.8k ",1)]),_("div",Lt,[_("div",At,[_("div",Nt,[e(A,{color:"pink","text-color":"white",size:"20px",icon:a(me),class:"relative-position",style:{left:"0px"}},null,8,["icon"]),e(A,{color:"amber-8","text-color":"white",size:"20px",icon:a(fe),class:"relative-position",style:{left:"-5px"}},null,8,["icon"]),e(A,{color:"green","text-color":"white",size:"20px",icon:a(pe),class:"relative-position",style:{left:"-10px"}},null,8,["icon"]),e(A,{color:"blue","text-color":"white",size:"20px",icon:a(ve),class:"relative-position",style:{left:"-15px"}},null,8,["icon"]),qt])]),_("div",Ot,[_("a",Dt,"9k "+g(a(l)("comments")),1),_("a",zt,"1.9k "+g(a(l)("shares")),1)])])]),_:1}))}}),Bt=["src"],Wt=S({__name:"CommentArea",setup(n){const l=h(null);return(c,o)=>(u(),f($,null,{default:t(()=>[e(m,{avatar:"",top:""},{default:t(()=>[e(A,{size:"36px"},{default:t(()=>[_("img",{src:a(se)},null,8,Bt)]),_:1})]),_:1}),e(m,null,{default:t(()=>[e(ot,{dense:"",filled:"",modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=r=>l.value=r),type:"textarea",autogrow:"",label:"Add comment",counter:"",maxlength:"255"},{append:t(()=>[e(T,{flat:"",round:"",icon:a(st)},null,8,["icon"]),e(T,{flat:"",round:"",icon:a(it)},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),Vt=_("span",{class:"cursor-pointer text-weight-bold"},"Chanavee Bekaku",-1),Ft=_("span",{class:"text-muted text-caption q-ml-sm"},"June 28 at 8:40 PM",-1),Rt={class:"row q-my-sm"},Qt={class:"q-pr-sm"},jt={class:"q-mx-sm"},Ut=_("span",{class:"text-caption text-muted q-ml-xs"},"1.9k",-1),Yt={class:"q-pl-sm"},Gt=_("span",{class:"q-mx-sm"},[_("span",{class:"text-caption text-muted q-ml-xs"},"1.9k")],-1),xe=S({__name:"CommentItem",setup(n){return(l,c)=>(u(),f($,null,{default:t(()=>[e(m,{avatar:"",top:""},{default:t(()=>[e(A,{size:"36px"},{default:t(()=>[e(J,{src:a(se)},null,8,["src"])]),_:1})]),_:1}),e(m,null,{default:t(()=>[e(b,{lines:"1"},{default:t(()=>[Vt,Ft]),_:1}),e(b,null,{default:t(()=>[_("div",{class:Q([l.$q.dark.isActive?"text-grey-1 bg-grey-10":"text-grey-9 bg-grey-2","q-pa-md"]),style:{"border-radius":"15px"}}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",2)]),_:1}),e(b,{lines:"1"},{default:t(()=>[_("div",Rt,[_("div",Qt,[e(le,{label:"Love it",class:"text-caption"}),_("span",jt,[e(C,{name:a(_e)},null,8,["name"]),Ut])]),e(D,{vertical:""}),_("div",Yt,[e(le,{label:"Reply it",class:"text-caption"}),Gt])])]),_:1})]),_:1}),e(m,{side:"",top:""},{default:t(()=>[e(T,{dense:"",icon:a(Ce),size:"sm",flat:"",round:""},null,8,["icon"])]),_:1})]),_:1}))}}),Zt=S({__name:"CommentItems",setup(n){return(l,c)=>(u(),N(j,null,[e(oe,null,{default:t(()=>[e(xe),e(xe,{style:{"padding-left":"10%"}})]),_:1}),e(T,{label:"Load more comments...",class:"text-capitalize q-ma-sm",flat:""})],64))}}),Jt={class:"row"},Kt={key:0,class:"absolute-bottom text-subtitle1 full-height row items-center justify-center"},ae=6,Xt=S({__name:"PostGallerry",props:{items:{type:Array,default:()=>[]}},setup(n){const l=n,c=z(()=>l.items.length===1?"col-12":l.items.length>=3?"col-4":"col-6"),o=z(()=>l.items.length>ae?l.items.length-ae:0),r=z(()=>l.items.length>0?l.items.slice(0,ae):[]);return(s,v)=>(u(),N("div",Jt,[(u(!0),N(j,null,he(r.value,(y,i)=>(u(),N("div",{key:i,class:Q(c.value)},[e(J,{class:"bg-gray-1",src:y.image,"placeholder-src":y.thumbnail,"spinner-color":"white",ratio:4/3,"no-native-menu":""},{default:t(()=>[i==ae-1&&o.value>0?(u(),N("div",Kt,[_("div",null,"+"+g(o.value),1)])):V("",!0)]),_:2},1032,["src","placeholder-src"])],2))),128))]))}}),ea={class:"q-gutter-md"},ta=S({__name:"PostHashtag",props:{items:{type:Array,default:()=>[]}},setup(n){return(l,c)=>(u(),f(K,null,{default:t(()=>[_("div",ea,[(u(!0),N(j,null,he(n.items,(o,r)=>(u(),f(le,{key:r,label:`#${o.name}`,color:"text-primary"},null,8,["label"]))),128))])]),_:1}))}});const aa=["id","innerHTML"],la=S({__name:"PostContent",props:{content:{type:String,default:""},postId:{type:Number,default:0}},setup(n){const l=n,{t:c}=F(),o=h(0),r=h(4),s=h(!1),v=h(!1);ne(()=>{y()});const y=()=>{var i=document.getElementById("feed-post-content-"+l.postId);if(i){var k=i.offsetHeight;const x=k/17;o.value=rt(x,0),o.value>r.value&&(s.value=!0)}};return(i,k)=>(u(),f(K,null,{default:t(()=>[_("div",{id:"feed-post-content-"+n.postId,class:Q(s.value&&!v.value?"word-limit":""),innerHTML:a(ut)(n.content)},null,10,aa),s.value&&!v.value?(u(),f(le,{key:0,label:"..."+a(c)("base.seeMore"),color:"text-primary",onClick:k[0]||(k[0]=x=>v.value=!0)},null,8,["label"])):V("",!0)]),_:1}))}});var na=xt(la,[["__scopeId","data-v-220833a6"]]);const Te=S({__name:"ProfileName",props:{label:{type:String,default:""},color:{type:String,default:"text-muted"},external:{type:Boolean,default:!1},href:{type:String,default:""},to:{type:String,default:""}},setup(n){const l=h(!1),c=h(!1),o=h();W(c,v=>{v?o.value=setTimeout(()=>{l.value=v},1*1e3):l.value=v}),ge(()=>{r()});const r=()=>{o.value&&(clearTimeout(o.value),o.value=null),c.value=!1},s=()=>{l.value||r()};return(v,y)=>(u(),N(j,null,[e(T,{class:Q(["text-capitalize app-text-link btn--no-hover",n.color]),ripple:!1,dense:"",flat:"",label:n.label,to:n.to,href:n.href?n.href:void 0,target:n.external?"_blank":void 0,onMouseover:y[3]||(y[3]=i=>c.value=!0),onMouseleave:s},{default:t(()=>[e(X,{modelValue:l.value,"onUpdate:modelValue":y[0]||(y[0]=i=>l.value=i),style:{width:"350px"},onHide:y[1]||(y[1]=i=>c.value=!1),onMouseleave:y[2]||(y[2]=i=>c.value=!1),cover:"",anchor:"center left"},{default:t(()=>[e(R,null,{default:t(()=>[e(Pe,{"avatar-image":"http://192.168.7.249:8080/cdn/images/202206/9_1656492735469_83bd2a0841514c4fbb81c8f674026519.jpg","cover-image":"http://192.168.7.249:8080/cdn/images/202207/9_1656661445570_8ded7c66943c4f69ac5db376236a7e09.jpg",name:n.label,description:"Software Engineer",height:"85px","avatar-top":"35px","avatar-size":"48px",descriptionStyle:"margin-top:5px","show-medal":""},null,8,["name"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["class","label","to","href","target"]),e(kt,{label:"Silver medal"})],64))}}),oa=S({__name:"PostMenu",setup(n){const{t:l}=F();return(c,o)=>(u(),f(T,{dense:"",icon:a(Ce),flat:"",round:""},{default:t(()=>[e(X,{cover:"",anchor:"top middle"},{default:t(()=>[e(oe,{style:{"min-width":"100px"}},{default:t(()=>[q((u(),f($,{clickable:""},{default:t(()=>[e(m,{side:"",top:""},{default:t(()=>[e(C,{name:a(Se)},null,8,["name"])]),_:1}),e(m,null,{default:t(()=>[e(b,null,{default:t(()=>[p(g(a(l)("saveThisPost")),1)]),_:1})]),_:1})]),_:1})),[[O]]),q((u(),f($,{clickable:""},{default:t(()=>[e(m,{side:"",top:""},{default:t(()=>[e(C,{name:a(ct)},null,8,["name"])]),_:1}),e(m,null,{default:t(()=>[e(b,null,{default:t(()=>[p(g(a(l)("copyLinkToPost")),1)]),_:1})]),_:1})]),_:1})),[[O]]),q((u(),f($,{clickable:""},{default:t(()=>[e(m,{side:"",top:""},{default:t(()=>[e(C,{name:a(dt)},null,8,["name"])]),_:1}),e(m,null,{default:t(()=>[e(b,null,{default:t(()=>[p(g(a(l)("reportPost")),1)]),_:1})]),_:1})]),_:1})),[[O]])]),_:1})]),_:1})]),_:1},8,["icon"]))}}),sa=_("img",{class:"bg-gray-8",src:"https://loremflickr.com/320/240?random=1","spinner-color":"white","no-native-menu":""},null,-1),ia={class:"text-caption q-ml-sm wee-text-muted"},ra=S({__name:"FeedPost",props:{post:{type:Object,default:()=>null,required:!0},index:{type:Number}},setup(n){const l=n,{AppFormatDateTime:c}=Le(),o=h();ne(()=>{r()});const r=async()=>{const s=mt(l.post.content);s&&s.length>0&&(o.value={domain:"youtube.com",url:"https://www.youtube.com/watch?v=2qeueW4YavM",title:"Solo wild camping in the rain [ASMR]",desc:"#ASMR #wildcamping #rainsounds  Back with another ASMR style wild camp. I had a few people ask for longer videos like this, so here you have it :) I love mak...",image:"https://i.ytimg.com/vi/2qeueW4YavM/maxresdefault.jpg",imageAlt:""})};return(s,v)=>(u(),f(R,{flat:"",bordered:"",class:"q-mt-md"},{default:t(()=>[L(s.$slots,"refrenceItem",{},()=>[n.post.reference?(u(),f($,{key:0},{default:t(()=>[e(m,{avatar:""},{default:t(()=>[e(A,{size:"30px"},{default:t(()=>[sa]),_:1})]),_:1}),e(m,null,{default:t(()=>[e(b,null,{default:t(()=>[e(Te,{label:n.post.reference.name,color:"wee-text-head",to:"/user/bekaku"},null,8,["label"]),_("span",ia,g(n.post.reference.activity),1)]),_:1})]),_:1}),e(m,{side:""},{default:t(()=>[e(C,{name:n.post.reference.activityIcon},null,8,["name"])]),_:1})]),_:1})):V("",!0),e(D)]),L(s.$slots,"header",{},()=>[e($,null,{default:t(()=>[e(m,{avatar:"",top:""},{default:t(()=>[e(A,{size:"48px"},{default:t(()=>[e(J,{class:"bg-gray-8",src:a(se),"spinner-color":"white","no-native-menu":""},null,8,["src"]),e(ft,{floating:"",color:"positive",rounded:"",transparent:"",class:"absolute",style:{top:"30px"}})]),_:1})]),_:1}),e(m,null,{default:t(()=>[e(b,{class:"text-weight-bold cursor-pointer"},{default:t(()=>[e(Te,{label:"Chanavee Bekaku",color:"wee-text-head wee-text-weight-bold",to:"/user/bekaku"})]),_:1}),e(b,{caption:""},{default:t(()=>[p(g(a(c)(n.post.postDatetime,a(pt))),1)]),_:1})]),_:1}),e(m,{side:"",top:""},{default:t(()=>[e(oa)]),_:1})]),_:1})]),L(s.$slots,"description",{},()=>[e(na,{content:n.post.content,"post-id":n.post.id},null,8,["content","post-id"])]),L(s.$slots,"hashtag",{},()=>[n.post.hashtag.length>0?(u(),f(ta,{key:0,items:n.post.hashtag},null,8,["items"])):V("",!0)]),L(s.$slots,"photos",{},()=>[n.post.gallery.length>0?(u(),f(Xt,{key:0,items:n.post.gallery},null,8,["items"])):V("",!0)]),n.post.gallery.length==0&&o.value?(u(),f(R,{key:0,flat:""},{default:t(()=>[e(J,{"spinner-color":"white",src:o.value.image,style:{"max-height":"314px"}},null,8,["src"]),e($,{clickable:"",class:Q(s.$q.dark.isActive?"wee-main-bg-color-theme-dark":"bg-grey-2"),href:o.value.url,target:"_blank"},{default:t(()=>[e(m,null,{default:t(()=>[e(b,{lines:1},{default:t(()=>[p(g(o.value.domain),1)]),_:1}),e(b,{lines:1},{default:t(()=>[p(g(o.value.title),1)]),_:1}),e(b,{caption:"",lines:2},{default:t(()=>[p(g(o.value.desc),1)]),_:1})]),_:1}),e(m,{side:""},{default:t(()=>[e(C,{name:a(vt)},null,8,["name"])]),_:1})]),_:1},8,["class","href"])]),_:1})):V("",!0),L(s.$slots,"engaging",{},()=>[e(Ht)]),L(s.$slots,"action",{},()=>[e(Et)]),L(s.$slots,"commentsArea",{},()=>[e(Wt),e(Ct,{class:"q-ml-sm"})]),L(s.$slots,"commentsList",{},()=>[e(Zt)])]),_:3}))}}),ua={class:"row justify-center q-my-md"},ga=S({__name:"FeedPage",setup(n){const l=we();wt();const c=[{id:1,pin:!1,postDatetime:"2022-01-05 11:30:30",content:"Solo wild camping in the rain [ASMR] https://www.youtube.com/watch?v=2qeueW4YavM",gallery:[],hashtag:[{id:1,name:"DesperateHours"},{id:2,name:"FreeDocumentary"},{id:3,name:"Documentary"}],reference:{name:"Danial Wong",activity:"likes this",activityIcon:"bi-heart"}},{id:2,pin:!1,postDatetime:"2022-04-28 11:30:30",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",gallery:[{image:"https://loremflickr.com/500/300/dog",thumbnail:"https://loremflickr.com/160/160/dog"},{image:"https://loremflickr.com/500/300/brazil,rio",thumbnail:"https://loremflickr.com/160/160/brazil,rio"},{image:"https://loremflickr.com/500/300/paris",thumbnail:"https://loremflickr.com/160/160/paris"},{image:"https://loremflickr.com/500/300?random=1",thumbnail:"https://loremflickr.com/160/160?random=1"},{image:"https://loremflickr.com/500/300?random=2",thumbnail:"https://loremflickr.com/160/160?random=2"},{image:"https://loremflickr.com/500/300?random=3",thumbnail:"https://loremflickr.com/160/160?random=3"},{image:"https://loremflickr.com/500/300?random=4",thumbnail:"https://loremflickr.com/160/160?random=4"}],hashtag:[]},{id:3,pin:!1,postDatetime:"2022-07-05 11:30:30",reference:{name:"Vinayak Naik",activity:"prize this",activityIcon:"bi-gift"},content:"555 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",gallery:[{image:"https://loremflickr.com/500/300?random=3",thumbnail:"https://loremflickr.com/160/160?random=3"}],hashtag:[{id:1,name:"WeAreHearForBuil"}]},{id:4,pin:!1,postDatetime:"2022-01-05 11:30:30",reference:{name:"Danial Wong",activity:"share this",activityIcon:"bi-share"},content:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. https://pantip.com/topic/40388674',gallery:[],hashtag:[{id:1,name:"WeAreHearForBuil"}]},{id:5,pin:!1,postDatetime:"2022-01-05 11:30:30",reference:{name:"Danial Wong",activity:"share this",activityIcon:"bi-share"},content:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. https://pantip.com/topic/40388674',gallery:[],hashtag:[]}],o=h(c),r=(s,v)=>{console.log("onLoadRef",s),setTimeout(()=>{o.value.push(c[0]),v()},2e3)};return(s,v)=>(u(),f(_t,{class:"q-px-md"},{default:t(()=>[e(Tt,{onLoad:r,offset:250},{loading:t(()=>[_("div",ua,[e(gt,{color:"primary",size:"40px"})])]),default:t(()=>[s.$q.screen.gt.sm?V("",!0):(u(),f(R,{key:0,flat:"",bordered:"",class:"q-mb-md"},{default:t(()=>[e(Pe,{"avatar-image":a(l).loginedAvatar,"cover-image":a(l).loginedCover,name:a(l).loginedDisplay,description:"Software Engineer",height:"100px","avatar-top":"50px","avatar-size":"65px",descriptionStyle:"margin-top:25px","show-medal":""},null,8,["avatar-image","cover-image","name"])]),_:1})),e(It),e(St),(u(!0),N(j,null,he(o.value,(y,i)=>(u(),f(ra,{key:i,post:y,index:i},null,8,["post","index"]))),128))]),_:1})]),_:1}))}});export{ga as default};
