const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OpenGraphItem-DEJEE1VD.js","assets/index-BWIq0ofC.js","assets/index-HNifYG8Q.css"])))=>i.map(i=>d[i]);
import{d as T,u as z,f as F,et as G,_ as b,B as p,C as S,E as m,I as g,ap as D,cw as R,bT as W,a as Q,r as f,T as N,b2 as Z,eu as J,ev as X,bQ as Y,H as w,ak as P,aq as K,aL as O,F as i,ah as _,bG as $,ew as tt,Y as et,Z as nt,cx as A,ex as ot,L as at,M as U,a7 as st,a8 as it,O as k,a9 as rt,aa as q,$ as lt,ai as V,S as ct}from"./index-BWIq0ofC.js";import{A as ut}from"./AppLink-DsJCbfS8.js";import{u as dt}from"./useAxios-D638T_Qc.js";import{U as ht}from"./Button-RORyjDXU.js";import{u as mt}from"./useAppMeta-YZWWZ8qb.js";import{u as ft}from"./useValidation-DqEJAk3U.js";import"./use-meta-uc4Tq-FS.js";const pt=T({__name:"ContentHtml",props:{content:{},isEscapeHtml:{type:Boolean,default:!1},highLightText:{}},emits:["on-press"],setup(a,{expose:n,emit:e}){n();const{inputSanitizeHtml:t}=z(),l=e,c=s=>{l("on-press",s)},r=F(()=>{if(!a.content)return"";const s=a.isEscapeHtml?t(G(a.content)):t(a.content);return a.highLightText?s.replaceAll(a.highLightText,`<span class='text-weight-bold text-blue'>${a.highLightText}</span>`):s}),d={inputSanitizeHtml:t,emit:l,onPress:c,getSanitizeHtml:r};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),gt=["innerHTML"];function xt(a,n,e,t,l,c){return p(),S(R,null,{default:m(()=>[g("div",D(a.$attrs,{innerHTML:t.getSanitizeHtml,onClick:n[0]||(n[0]=r=>t.onPress(r))}),null,16,gt)]),_:1})}const yt=b(pt,[["render",xt],["__file","ContentHtml.vue"]]),_t=T({__name:"ContentItem",props:{contentId:{default:"content-id"},content:{},wrapText:{type:Boolean,default:!0},to:{},openPage:{type:Boolean,default:!0},showCopyText:{type:Boolean,default:!0},showMore:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!1},canUrlify:{type:Boolean,default:!0},hashtagUrlify:{type:Boolean,default:!1},limit:{default:4},fitContent:{type:Boolean,default:!1},linkStyle:{default:"app-text-link"},textStyle:{default:"q-text-black"},isEscapeHtml:{type:Boolean,default:!1},highLightText:{}},setup(a,{expose:n}){n(),W(o=>({"3a2e3468":o.limit}));const e=a,{appGoto:t}=z(),{t:l}=Q(),c=f(0),r=f(!1),d=f(!1),s=f(),x=f(!1);N(()=>{I()});const I=()=>{s.value=setTimeout(()=>{H(),e.canUrlify&&y(),x.value=!0},50)},y=()=>{document.querySelectorAll(`.content-href-${e.contentId}`).forEach(u=>{u.addEventListener("click",L)}),e.hashtagUrlify&&document.querySelectorAll(`.hashtag-href-${e.contentId}`).forEach(h=>{h.addEventListener("click",E)})},v=()=>{document.querySelectorAll(`.content-href-${e.contentId}`).forEach(h=>{h.removeEventListener("click",L)}),document.querySelectorAll(`.hashtag-href-${e.contentId}`).forEach(h=>{h.removeEventListener("click",E)})};Z(()=>{s.value&&(clearTimeout(s.value),s.value=null),v(),d.value=!1});const L=o=>{if(o.target.classList.contains(`content-href-${e.contentId}`)){if(o.srcElement&&o.srcElement.href){const u=o.srcElement.href;J(u,o)}o.stopPropagation(),o.preventDefault()}},E=o=>{if(o.target.classList.contains(`hashtag-href-${e.contentId}`)){if(o.srcElement&&o.srcElement.innerText){const u=o.srcElement.innerText;u&&t(`/hashtag/${u.replace("#","")}`)}o.stopPropagation(),o.preventDefault()}},H=()=>{if(e.wrapText){const o=document.getElementById(e.contentId);if(o){const h=o.offsetHeight/20;c.value=X(h,0),c.value>e.limit&&(r.value=!0)}}},B={props:e,appGoto:t,t:l,lineHeight:c,showMoreBtn:r,showMoreText:d,contentTimeOut:s,canShow:x,setLimitText:I,setEvenListener:y,removeEvenListener:v,onHtmlClick:L,onHashtagClick:E,setDescHeight:H,urlify:(o,u=void 0)=>{const h=e.isEscapeHtml?G(o):o;if(e.canUrlify){const j=/(https?:\/\/[^\s]+)/g,M=h.replace(j,C=>`<a class="content-href-${e.contentId} ${e.linkStyle} ${u||""}" href="${C}">${C}</a>`);return e.hashtagUrlify?M.replace(/#([a-zA-Z\p{L}\p{N}_\u0E00-\u0E7F]+)/gu,`<a class="hashtag-href-${e.contentId} ${e.linkStyle} ${u||""}">#$1</a>`):M}return h},onOpenPage:o=>{e.to&&t(e.to),o.stopImmediatePropagation()},onShowMoreText:async()=>{d.value=!0},get isEmpty(){return Y},AppLink:ut,ContentHtml:yt};return Object.defineProperty(B,"__isScriptSetup",{enumerable:!1,value:!0}),B}}),vt=["id"];function wt(a,n,e,t,l,c){return e.content?(p(),w("div",{key:0,style:{overflow:"hidden"},class:O({"text-holder-fitcontent":!t.isEmpty(e.content)&&e.fitContent})},[P(a.$slots,"top",{},void 0,!0),K((p(),w("div",{id:e.contentId,class:O([{"word-limit":t.showMoreBtn&&!t.showMoreText,"cursor-pointer":e.to},"app-auto-newline dont-break-out text-holder"])},[i(t.ContentHtml,{content:t.urlify(e.content,"text-primary"),"high-light-text":e.highLightText,onOnPress:n[0]||(n[0]=r=>t.onOpenPage(r))},null,8,["content","high-light-text"])],10,vt)),[[$]]),t.showMoreBtn&&!t.showMoreText?(p(),S(t.AppLink,{key:0,label:t.t("base.seeMore"),color:"text-primary",onClick:t.onShowMoreText},null,8,["label"])):_("",!0),P(a.$slots,"bottom",{},void 0,!0)],2)):_("",!0)}const Tt=b(_t,[["render",wt],["__scopeId","data-v-2a76e400"],["__file","ContentItem.vue"]]),bt=()=>{const{callAxios:a}=dt();return{getOgMeta:async t=>await a({API:`/api/public/getOgMeta?url=${t}`,method:"GET"}),getAppVersion:async()=>await a({API:"/api/public/appVersion",method:"GET"})}},St=T({__name:"OpenGraphItemAlt",props:{content:{},short:{type:Boolean,default:!1},textLines:{default:1},descriptionLines:{default:2},showBg:{type:Boolean,default:!0},imageSize:{default:"80px"},imageMaxHeight:{default:"250px"}},setup(a,{expose:n}){n();const e=et(()=>nt(()=>import("./OpenGraphItem-DEJEE1VD.js"),__vite__mapDeps([0,1,2]))),t=a,{getOgMeta:l}=bt(),c=f(),r=f(!1);N(async()=>{if(t.content){const s=tt(t.content);if(s&&s.length>0){const x=await l(s[0]);x&&(c.value=x,r.value=!0)}}});const d={OpenGraphItem:e,props:t,getOgMeta:l,opengraphItem:c,showOg:r};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}});function It(a,n,e,t,l,c){return t.opengraphItem&&t.showOg?(p(),S(t.OpenGraphItem,D({key:0},a.$attrs,{item:t.opengraphItem,short:e.short,textLines:e.textLines,descriptionLines:e.textLines,showBg:e.showBg,imageSize:e.imageSize,imageMaxHeight:e.imageMaxHeight}),null,16,["item","short","textLines","descriptionLines","showBg","imageSize","imageMaxHeight"])):_("",!0)}const Lt=b(St,[["render",It],["__file","OpenGraphItemAlt.vue"]]),Et=T({__name:"content-text",setup(a,{expose:n}){n();const{required:e}=ft(),{t}=Q(),{setTitle:l}=mt();l(`Content Text | ${t("app.name")}`);const c=A(),r=A(),d=f(`TypeScript has become the go-to language for many developers, providing the benefits of static typing while maintaining the flexibility of JavaScript. However, as TypeScript continues to evolve, some practices that were once considered best may now be outdated or suboptimal. In this article, we’ll cover 10 bad TypeScript habits you should break in 2024 to write cleaner, more efficient, and maintainable code.

1. Not Using strict Mode
The Problem:
Many developers disable TypeScript’s strict mode to avoid dealing with stricter type checks.

Why It’s Bad:
When strict mode is off, TypeScript becomes more lenient, reducing the effectiveness of type safety. This can lead to unexpected bugs and make refactoring more challenging in the future.

What to Do Instead:
Enable strict mode in your tsconfig.json. It will enforce better type checks and ensure that your code is more robust in the long run.

https://www.youtube.com/watch?v=PCSqrpAWq1s


DOMPurify is a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.
https://github.com/cure53/DOMPurify
Example
<img src=x onerror=alert(1)//>
<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>
<TABLE><tr><td>HELLO</tr></TABL>

#dev_tips #ทดสอบเท็ก`),s=f(!0),y={required:e,t,setTitle:l,contentUniqeId:c,contentUniqeId2:r,content:d,showContent:s,onPreview:()=>{s.value=!1,setTimeout(()=>{s.value=!0},500)},testExtractHashTag:()=>{const v=ot(d.value);console.log("contentHashTags",v)},ContentItem:Tt,OpenGraphItemAlt:Lt,UiButton:ht};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),kt={class:"row"},Ht={class:"col-12 col-md-6"},Bt={class:"col-12 col-md-6 q-pa-md"};function Mt(a,n,e,t,l,c){return p(),S(at,{padding:""},{default:m(()=>[i(ct,{flat:"",bordered:"",class:"content-limit"},{default:m(()=>[i(U,null,{default:m(()=>[i(st,null,{default:m(()=>[i(it,null,{default:m(()=>n[1]||(n[1]=[k(" Content Text ")])),_:1}),i(rt)]),_:1}),i(q)]),_:1}),i(U,null,{default:m(()=>[g("div",kt,[g("div",Ht,[i(lt,{outlined:"",modelValue:t.content,"onUpdate:modelValue":n[0]||(n[0]=r=>t.content=r),"bottom-slots":"",label:"Content",type:"textarea",rules:[t.required],autogrow:"",class:"limited-autogrow"},{hint:m(()=>n[2]||(n[2]=[g("span",{class:"text-negative"},"*",-1)])),_:1},8,["modelValue","rules"]),i(t.UiButton,{onClick:t.onPreview},{default:m(()=>n[3]||(n[3]=[k(" Reload Preview ")])),_:1}),i(t.UiButton,{onClick:t.testExtractHashTag,class:"q-ml-md",color:"negative"},{default:m(()=>n[4]||(n[4]=[k(" Extract HashTag from content ")])),_:1})]),g("div",Bt,[n[5]||(n[5]=g("div",{class:"text-h5 q-pb-sm"}," Preview with sanitize html ",-1)),t.showContent?(p(),w(V,{key:0},[i(t.ContentItem,{"wrap-text":"",content:t.content,"content-id":t.contentUniqeId,"is-escape-html":!1,hashtagUrlify:"","show-more":""},null,8,["content","content-id"]),i(t.OpenGraphItemAlt,{content:t.content,short:"",imageSize:"150px"},null,8,["content"])],64)):_("",!0),i(q,{class:"q-my-md"}),n[6]||(n[6]=g("div",{class:"text-h5 q-pb-sm"}," Preview with escape html ",-1)),t.showContent?(p(),w(V,{key:1},[i(t.ContentItem,{"wrap-text":"",content:t.content,"content-id":t.contentUniqeId2,"is-escape-html":"",limit:10,hashtagUrlify:"","show-more":""},null,8,["content","content-id"]),i(t.OpenGraphItemAlt,{content:t.content},null,8,["content"])],64)):_("",!0)])])]),_:1})]),_:1})]),_:1})}const Qt=b(Et,[["render",Mt],["__file","content-text.vue"]]);export{Qt as default};