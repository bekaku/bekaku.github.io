import{l as L,u as I,a as A,c as Q,m as l,n as a,ar as E,W as p,w as t,X as c,x as m,v as u,as as k,ac as r,af as o,au as P,aq as g,at as S,a3 as h,a4 as v,a0 as d,p as M,q as D,bd as C,aY as z,bc as R,e4 as F,e5 as U,cb as W,e6 as X,t as Y}from"./index-D68YvXgu.js";import{B as j}from"./BaseAvatar-DG8Rgp18.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";const H=L({__name:"BaseMenuItem",props:{item:{},darkText:{},lightText:{},iconSize:{default:"20px"},dense:{type:Boolean,default:!0},avatarSize:{default:"24px"}},setup(T){const{t:f}=I(),{getCurrentPath:b}=A(),i=Q(()=>T.item.to==b(!1));return(e,N)=>(a(),l(E,p(e.$attrs,{to:e.item.to,clickable:e.item.to!=null,dense:e.dense,"active-class":e.item.noActiveLink?"q-item-no-link-highlighting":"active-menu-link",class:{"nav-active":i.value,"default-nav-dense":e.dense}}),{default:t(()=>[e.item.avatar||e.item.icon?(a(),l(k,{key:0,side:""},{default:t(()=>[e.item.avatar?(a(),r(o,{key:0},[e.item.avatar?(a(),l(j,{key:0,size:e.item.avatarSize||e.avatarSize,"fetch-image":!!e.item.fetch,src:e.item.avatar},null,8,["size","fetch-image","src"])):c("",!0)],64)):(a(),l(P,{key:1,name:e.item.icon,class:g({"q-text-black":!i.value,"active-menu-link":i.value}),size:e.item.iconSize||e.iconSize,color:e.item.color},null,8,["name","class","size","color"]))]),_:1})):c("",!0),m(k,null,{default:t(()=>[m(S,{class:g({"active-menu-link":i.value})},{default:t(()=>[h(v(e.item?.translateLabel!==!1?d(f)(`${e.item.label}`):e.item.label),1)]),_:1},8,["class"]),e.item?.description?(a(),l(S,{key:0,caption:"",lines:"1",class:g({"active-menu-link-caption":i.value,"q-pb-xs":e.dense})},{default:t(()=>[h(v(e.item.description),1)]),_:1},8,["class"])):c("",!0)]),_:1}),u(e.$slots,"end",M(D({item:e.item})),void 0,!0)]),_:3},16,["to","clickable","dense","active-class","class"]))}}),B=G(H,[["__scopeId","data-v-eeeb6b7e"]]),J={class:"parent-menu-border"},x=L({__name:"BaseMenuItems",props:{items:{},darkText:{},lightText:{},dark:{type:Boolean},iconSize:{default:"20px"},dense:{type:Boolean,default:!0},expanAll:{type:Boolean,default:!1}},setup(T){const{t:f}=I(),{getCurrentPath:b}=A(),i=Q(()=>b(!1));return(e,N)=>(a(),l(C,p(e.$attrs,{padding:""}),{default:t(()=>[u(e.$slots,"before"),e.items&&e.items.length>0?(a(!0),r(o,{key:0},z(e.items,(n,y)=>(a(),r(o,{key:`parent-${y}`},[n.border?(a(),l(R,{key:0})):c("",!0),n.children&&n.children.length>0?(a(),r(o,{key:1},[n.label?(a(),l(S,{key:0,header:"",class:"q-pa-none text-subtitle2 q-pl-md q-mt-md q-pb-xs"},{default:t(()=>[h(v(n?.translateLabel!==!1?d(f)(`${n.label}`):n.label),1)]),_:2},1024)):c("",!0),(a(!0),r(o,null,z(n.children,(s,q)=>(a(),r(o,{key:`parent-${y}-page-${q}`},[s.children?(a(),l(F,{key:1,icon:s.icon,label:s?.translateLabel!==!1?d(f)(`${s.label}`):s.label,"default-opened":e.expanAll||d(X)(i.value,s.children),"expand-icon":d(W),"expanded-icon":d(U),"expand-icon-class":"text-muted",dense:e.dense,class:"parent-defult"},{header:t(()=>[m(k,{avatar:""},{default:t(()=>[m(P,{name:s.icon,size:e.iconSize},null,8,["name","size"])]),_:2},1024),m(k,null,{default:t(()=>[h(v(s?.translateLabel!==!1?d(f)(`${s.label}`):s.label),1)]),_:2},1024)]),default:t(()=>[m(C,{class:"q-pl-sm"},{default:t(()=>[Y("div",J,[(a(!0),r(o,null,z(s.children,($,V)=>(a(),l(B,{key:`parent-${y}-page-${q}-sub-${V}`,"light-text":e.lightText,"dark-text":e.darkText,dense:e.dense,item:$,"icon-size":"18px"},{end:t(({item:w})=>[u(e.$slots,"end",p({ref_for:!0},{menuItem:w}))]),_:2},1032,["light-text","dark-text","dense","item"]))),128))])]),_:2},1024)]),_:2},1032,["icon","label","default-opened","expand-icon","expanded-icon","dense"])):(a(),l(B,{key:0,"dark-text":e.darkText,"light-text":e.lightText,dense:e.dense,item:s},{end:t(({item:$})=>[u(e.$slots,"end",p({ref_for:!0},{menuItem:$}))]),_:2},1032,["dark-text","light-text","dense","item"]))],64))),128))],64)):(a(),l(B,{key:2,"dark-text":e.darkText,"light-text":e.lightText,dense:e.dense,item:n},{end:t(({item:s})=>[u(e.$slots,"end",p({ref_for:!0},{menuItem:s}))]),_:2},1032,["dark-text","light-text","dense","item"]))],64))),128)):c("",!0),u(e.$slots,"after")]),_:3},16))}});export{x as _};
