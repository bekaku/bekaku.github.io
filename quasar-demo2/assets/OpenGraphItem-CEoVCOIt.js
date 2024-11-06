import{d as h,bx as g,by as y,_ as x,B as a,C as l,E as t,H as k,ae as _,al as f,ah as i,F as s,ab as b,aL as B,ac as m,aN as r,O as d,R as c,N as w,ap as I,S}from"./index-DnUFBeQi.js";const q=h({__name:"OpenGraphItem",props:{item:{},short:{type:Boolean,default:!1},showBg:{type:Boolean,default:!0},textLines:{default:1},descriptionLines:{default:2},imageSize:{default:"125px"},imageMaxHeight:{default:"250px"}},setup(u,{expose:o}){o();const n={$q:g(),get biBoxArrowUpRight(){return y}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),L=["href"];function Q(u,o,e,n,C,A){return e.item&&(e.item.image||e.item.domain||e.item.title||e.item.desc)?(a(),l(S,I({key:0},u.$attrs,{flat:""}),{default:t(()=>[e.short?i("",!0):(a(),k("a",{key:0,href:e.item.url,target:"_blank"},[e.item.image?(a(),l(_,{key:0,"spinner-color":"white",src:e.item.image,ratio:16/9,style:f({maxHeight:e.imageMaxHeight})},null,8,["src","style"])):i("",!0)],8,L)),s(b,{clickable:"",class:B({"bg-grey-2":e.showBg&&!n.$q.dark.isActive,"wee-main-bg-color-theme-dark":e.showBg&&n.$q.dark.isActive,"q-pl-none q-pt-none q-pb-none":e.short}),href:e.item.url,target:"_blank",dense:e.short},{default:t(()=>[e.short&&e.item.image?(a(),l(m,{key:0,side:""},{default:t(()=>[s(_,{src:e.item.image,style:f({width:`${e.imageSize}`}),ratio:4/3},null,8,["src","style"])]),_:1})):i("",!0),s(m,null,{default:t(()=>[e.item.domain?(a(),l(r,{key:0,lines:e.textLines},{default:t(()=>[d(c(e.item.domain),1)]),_:1},8,["lines"])):i("",!0),e.item.title?(a(),l(r,{key:1,lines:e.textLines},{default:t(()=>[d(c(e.item.title),1)]),_:1},8,["lines"])):i("",!0),e.item.desc?(a(),l(r,{key:2,caption:"",lines:e.short?1:e.descriptionLines},{default:t(()=>[d(c(e.item.desc),1)]),_:1},8,["lines"])):i("",!0)]),_:1}),s(m,{side:""},{default:t(()=>[s(w,{name:n.biBoxArrowUpRight},null,8,["name"])]),_:1})]),_:1},8,["class","href","dense"])]),_:1},16)):i("",!0)}const O=x(q,[["render",Q],["__file","OpenGraphItem.vue"]]);export{O as default};