const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProfileItem-BlRphRaZ.js","assets/index-BWIq0ofC.js","assets/index-HNifYG8Q.css"])))=>i.map(i=>d[i]);
import{d as x,a as E,f as o,a2 as H,X as P,bt as k,bu as A,Y as R,Z as O,_ as L,B as s,C as i,E as t,ab as y,F as r,ac as n,ad as p,N as Q,aW as u,I as b,ah as l,bv as I,O as g,R as m,M as C,ae as q,S as M}from"./index-BWIq0ofC.js";const w=x({__name:"SearchItem",props:{q:{type:String,default:""},item:{type:Object,default:()=>null}},setup(d,{expose:f}){f();const a=R(()=>O(()=>import("./ProfileItem-BlRphRaZ.js"),__vite__mapDeps([0,1,2]))),e=d,{t:_}=E(),h=o(()=>{if(e.item&&e.item.searchResult)return e.q?e.item.searchResult.replaceAll(e.q,`<span class='text-weight-bold text-blue'>${e.q}</span>`):e.item.searchResult}),c=o(()=>{if(e.item.searchType=="PROFILE")return H;if(e.item.searchType=="POST")return P;if(e.item.searchType=="HASHTAG")return k;if(e.item.searchType=="THEME")return A}),S=o(()=>{if(e.item.searchType=="PROFILE")return"base.profile";if(e.item.searchType=="POST")return"post";if(e.item.searchType=="HASHTAG")return"base.hashtag";if(e.item.searchType=="THEME")return"organizeTheme"}),v=o(()=>{if(e.item.searchType=="POST")return`/post/view/${e.item.searchId}`;if(e.item.searchType=="HASHTAG")return`/hashtag/${e.item.searchId}`;if(e.item.searchType=="THEME")return`/company-theme/post/${e.item.searchId}`}),T={ProfileItem:a,props:e,t:_,text:h,getIcon:c,getType:S,getLink:v};return Object.defineProperty(T,"__isScriptSetup",{enumerable:!1,value:!0}),T}}),D=["innerHTML"],F={class:"text-h6"};function N(d,f,a,e,_,h){return s(),i(M,{flat:"",bordered:"",class:"q-mb-md"},{default:t(()=>[a.item.searchType=="POST"||a.item.searchType=="THEME"||a.item.searchType=="HASHTAG"?(s(),i(y,{key:0,to:e.getLink},{default:t(()=>[r(n,{avatar:"",top:""},{default:t(()=>[r(p,{color:"primary","text-color":"white",rounded:"",size:"100px"},{default:t(()=>[r(Q,{name:e.getIcon},null,8,["name"])]),_:1})]),_:1}),r(n,{top:""},{default:t(()=>[r(u,{lines:"3"},{default:t(()=>[b("div",{innerHTML:e.text},null,8,D)]),_:1}),a.item.userRefDto?(s(),i(u,{key:0},{default:t(()=>[r(e.ProfileItem,{button:!1,item:a.item.userRefDto},null,8,["item"])]),_:1})):l("",!0)]),_:1}),e.getType?(s(),i(n,{key:0,side:""},{default:t(()=>[r(I,{class:"q-mt-md",color:"primary",outline:""},{default:t(()=>[g(m(e.t(e.getType)),1)]),_:1})]),_:1})):l("",!0)]),_:1},8,["to"])):a.item.searchType=="PROFILE"?(s(),i(C,{key:1},{default:t(()=>[r(y,null,{default:t(()=>[a.item.avatar?(s(),i(n,{key:0,avatar:""},{default:t(()=>[r(p,{rounded:"",size:"100px"},{default:t(()=>{var c;return[r(q,{src:(c=a.item.avatar)==null?void 0:c.thumbnail},null,8,["src"])]}),_:1})]),_:1})):l("",!0),r(n,{top:""},{default:t(()=>[a.item.userRefDto?(s(),i(u,{key:0,class:"text-weight-bold cursor-pointer"})):(s(),i(u,{key:1},{default:t(()=>[b("div",F,m(a.item.searchResult),1)]),_:1}))]),_:1}),e.getType?(s(),i(n,{key:1,side:""},{default:t(()=>[r(I,{class:"q-mt-md",color:"primary",outline:""},{default:t(()=>[g(m(e.t(e.getType)),1)]),_:1})]),_:1})):l("",!0)]),_:1})]),_:1})):l("",!0)]),_:1})}const B=L(w,[["render",N],["__file","SearchItem.vue"]]);export{B as default};
