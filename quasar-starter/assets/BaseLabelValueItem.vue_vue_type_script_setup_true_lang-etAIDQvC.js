import{l as z,R as r,n as a,W as n,m as t,T as l,w as o,v as s,x as m,Y as d,az as B,U as c,I as S,L as u,M as f,O as b,Z as v,bf as h}from"./index-BvWZzpdy.js";import{B as g}from"./BaseAvatar-D36Htoab.js";const $=z({__name:"BaseLabelValueItem",props:{item:{},iconSize:{default:"20px"},avatarSize:{default:"24px"},dense:{type:Boolean,default:!0},clickable:{type:Boolean},seperator:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},color:{}},emits:["on-click"],setup(i,{emit:p}){const k=p,y=()=>{(!i.item?.children||i.item.children.length==0)&&k("on-click",i.item)};return(e,I)=>(a(),r(n,null,[e.item?(a(),t(v,b({key:0},e.$attrs,{clickable:e.clickable,class:{rounded:e.rounded},dense:e.dense,onClick:y}),{default:o(()=>[s(e.$slots,"start",{},()=>[e.item.avatar||e.item.icon?(a(),t(d,{key:0,side:""},{default:o(()=>[e.item.avatar?(a(),r(n,{key:0},[e.item.avatar?(a(),t(g,{key:0,size:e.item.avatarSize||e.avatarSize,"fetch-image":!!e.item.fetch,src:e.item.avatar},null,8,["size","fetch-image","src"])):l("",!0)],64)):(a(),t(B,{key:1,name:e.item.icon,size:e.item.iconSize||e.iconSize,color:e.item.color},null,8,["name","size","color"]))]),_:1})):l("",!0)]),m(d,null,{default:o(()=>[s(e.$slots,"label",{},()=>[m(c,{class:S(e.color?"text-"+e.color:e.item.color?"text-"+e.item.color:"")},{default:o(()=>[u(f(e.item.label),1)]),_:1},8,["class"]),e.item.description?(a(),t(c,{key:0,caption:""},{default:o(()=>[u(f(e.item.description),1)]),_:1})):l("",!0)])]),_:3}),s(e.$slots,"end"),s(e.$slots,"default")]),_:3},16,["clickable","class","dense"])):l("",!0),e.seperator?(a(),t(h,{key:1})):l("",!0)],64))}});export{$ as _};
