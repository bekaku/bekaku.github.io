import{l as B,u as C,m as i,n as t,at as I,a0 as b,w as s,x as o,$ as w,aX as Q,aw as v,J as n,I as m,as as N,au as f,a3 as k,av as z,v as d,L as u,M as p,aY as P,a7 as $,R as h,Q as D}from"./index-CLKqN-vN.js";import{a as L}from"./BaseAvatar-DnAxF3hq.js";import{g as T}from"./FileManagerService-gOE363Ni.js";const M=B({__name:"BaseFilesPreviewItemAlt",props:{showDelete:{type:Boolean,default:!0},col:{},item:{},index:{},formatSize:{type:Boolean,default:!1},imageSize:{default:"75px"},iconSize:{default:"4em"},fetch:{type:Boolean,default:!1},dense:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},textColor:{default:"q-text-black"},showSize:{type:Boolean,default:!0}},emits:["on-remove","on-click"],setup(V,{emit:g}){const{t:y}=C(),c=g,S=(e,a)=>{c("on-remove",a),e&&e.stopImmediatePropagation()},r=(e,a)=>{c("on-click",a,e),e&&e.stopImmediatePropagation()};return(e,a)=>(t(),i(I,b(e.$attrs,{dense:e.dense,clickable:e.clickable,onClick:a[3]||(a[3]=l=>r(l,e.index))}),{default:s(()=>[o(f,{side:""},{default:s(()=>[e.item.isImage||e.item.image?(t(),i(Q,{key:0,square:"",size:e.imageSize,class:"cursor-pointer",onClick:a[0]||(a[0]=l=>r(l,e.index))},{default:s(()=>[o(L,{fetch:e.fetch||!1,src:e.item.filePath},null,8,["fetch","src"])]),_:1},8,["size"])):(t(),w("div",{key:1,style:N({width:e.imageSize}),class:"cursor-pointer text-center",onClick:a[1]||(a[1]=l=>r(l,e.index))},[o(v,{class:m(e.textColor),name:n(T)(e.item.fileMime),size:e.iconSize},null,8,["class","name","size"])],4))]),_:1}),o(f,null,{default:s(()=>[o(z,{lines:"1",class:m(e.textColor)},{default:s(()=>[d(e.$slots,"fileName",{},()=>[u(p(e.item.fileName),1)])]),_:3},8,["class"]),e.showSize?(t(),i(z,{key:0,caption:"",class:m(e.textColor)},{default:s(()=>[d(e.$slots,"size",{},()=>[u(p(e.formatSize?n(P)(e.item.fileSize):e.item.fileSize),1)])]),_:3},8,["class"])):k("",!0)]),_:3}),o(f,{side:""},{default:s(()=>[d(e.$slots,"end",{},()=>[e.showDelete?(t(),i($,{key:0,onClick:a[2]||(a[2]=l=>S(l,e.index)),flat:"",round:"",icon:n(h),color:"negative"},{default:s(()=>[o(D,{class:"bg-negative"},{default:s(()=>[u(p(n(y)("base.delete")),1)]),_:1})]),_:1},8,["icon"])):k("",!0)])]),_:3})]),_:3},16,["dense","clickable"]))}});export{M as _};
