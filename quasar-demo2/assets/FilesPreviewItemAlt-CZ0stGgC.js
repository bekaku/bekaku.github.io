import{d as b,f as Q,cu as B,cv as F,_ as N,B as n,H as w,F as m,E as i,C as s,af as x,ah as d,ap as C,aW as h,aL as S,ak as g,O as u,R as y,ac as k,ab as I,ai as D,ag as P,N as T,a as q,ad as H,al as L}from"./index-BzL-CGt2.js";import{A}from"./AppImage-DjSNeab1.js";import{k as R}from"./FileManagerService-GbX17qD_.js";const O=b({__name:"FilesPreviewItem",props:{showDelete:{type:Boolean,default:!0},col:{default:"col-3 q-pa-md"},item:{},index:{},formatSize:{type:Boolean,default:!1},fetch:{type:Boolean,default:!1},useThumbnail:{type:Boolean,default:!1},showName:{type:Boolean,default:!0},showSize:{type:Boolean,default:!0},imageSize:{default:"125px"},imageHeight:{},iconSize:{default:"4em"},textColor:{},dense:{type:Boolean,default:!0},showTooltip:{type:Boolean,default:!1},ratio:{default:4/3},linesName:{default:1}},emits:["on-remove","on-click"],setup(o,{expose:a,emit:e}){a();const t=o,c=e,_=Q(()=>t.useThumbnail&&t.item.fileThumbnailPath?t.item.fileThumbnailPath:t.item.filePath),l={props:t,emit:c,getImagePath:_,onRemove:(r,v)=>{c("on-remove",v),r&&r.stopImmediatePropagation()},onClick:(r,v)=>{c("on-click",v),r&&r.stopImmediatePropagation()},AppImage:A,get formatBytes(){return B},get getFileTypeIcon(){return R},get biTrashFill(){return F}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),V={key:1,class:"text-center"};function j(o,a,e,t,c,_){var f,z;return(f=e.item)!=null&&f.isImage||(z=e.item)!=null&&z.image?(n(),w(D,{key:0},[m(t.AppImage,C(o.$attrs,{src:t.getImagePath,fetch:e.fetch,ratio:e.ratio,style:{maxHeight:e.imageHeight||e.imageSize,maxWidth:e.imageSize},class:"cursor-pointer",onClick:a[1]||(a[1]=l=>t.onClick(l,e.index))}),{default:i(()=>[e.showDelete?(n(),s(x,{key:0,onClick:a[0]||(a[0]=l=>t.onRemove(l,e.index)),class:"absolute all-pointer-events",name:"info",style:{top:"8px",left:"8px"},round:"",size:"sm",icon:t.biTrashFill,color:"negative"},null,8,["icon"])):d("",!0)]),_:1},16,["src","fetch","ratio","style"]),e.showName||e.showSize?(n(),s(I,C({key:0,dense:e.dense},o.$attrs,{class:"q-pa-none"}),{default:i(()=>[m(k,null,{default:i(()=>[e.showName?(n(),s(h,{key:0,lines:e.linesName,class:S(e.textColor)},{default:i(()=>[g(o.$slots,"fileName",{},()=>[u(y(e.item.fileName),1)])]),_:3},8,["lines","class"])):d("",!0)]),_:3}),m(k,{side:""},{default:i(()=>[e.showSize?(n(),s(h,{key:0,caption:""},{default:i(()=>[g(o.$slots,"size",{},()=>[u(y(e.formatSize?t.formatBytes(e.item.fileSize):e.item.fileSize),1)])]),_:3})):d("",!0)]),_:3})]),_:3},16,["dense"])):d("",!0)],64)):(n(),w("div",V,[m(T,C(o.$attrs,{class:"cursor-pointer",onClick:a[3]||(a[3]=l=>t.onClick(l,e.index)),size:e.iconSize,name:t.getFileTypeIcon(e.item.fileMime)}),{default:i(()=>[e.showDelete?(n(),s(x,{key:0,onClick:a[2]||(a[2]=l=>t.onRemove(l,e.index)),class:"absolute all-pointer-events",name:"info",style:{top:"8px",left:"8px"},round:"",size:"sm",icon:t.biTrashFill,color:"negative"},null,8,["icon"])):d("",!0),e.showTooltip&&e.item.fileName?(n(),s(P,{key:1},{default:i(()=>[u(y(e.item.fileName),1)]),_:1})):d("",!0)]),_:1},16,["size","name"]),e.showName||e.showSize?(n(),s(I,{key:0,dense:e.dense,class:"q-pa-none"},{default:i(()=>[m(k,null,{default:i(()=>[e.showName?(n(),s(h,{key:0,lines:e.linesName,class:S(e.textColor)},{default:i(()=>[g(o.$slots,"fileName",{},()=>[u(y(e.item.fileName),1)])]),_:3},8,["lines","class"])):d("",!0)]),_:3}),m(k,{side:""},{default:i(()=>[e.showSize?(n(),s(h,{key:0,caption:"",class:S(e.textColor)},{default:i(()=>[g(o.$slots,"size",{},()=>[u(y(e.formatSize?t.formatBytes(e.item.fileSize):e.item.fileSize),1)])]),_:3},8,["class"])):d("",!0)]),_:3})]),_:3},8,["dense"])):d("",!0)]))}const K=N(O,[["render",j],["__file","FilesPreviewItem.vue"]]),E=b({__name:"FilesPreviewItemAlt",props:{showDelete:{type:Boolean,default:!0},col:{},item:{},index:{},formatSize:{type:Boolean,default:!1},imageSize:{default:"75px"},iconSize:{default:"4em"},fetch:{type:Boolean,default:!1},dense:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},textColor:{default:"q-text-black"},showSize:{type:Boolean,default:!0}},emits:["on-remove","on-click"],setup(o,{expose:a,emit:e}){a();const{t}=q(),c=e,z={t,emit:c,onRemove:(l,r)=>{c("on-remove",r),l&&l.stopImmediatePropagation()},onClick:(l,r)=>{c("on-click",r,l),l&&l.stopImmediatePropagation()},get formatBytes(){return B},get getFileTypeIcon(){return R},AppImage:A,get biTrashFill(){return F}};return Object.defineProperty(z,"__isScriptSetup",{enumerable:!1,value:!0}),z}});function M(o,a,e,t,c,_){return n(),s(I,C(o.$attrs,{dense:e.dense,clickable:e.clickable,onClick:a[3]||(a[3]=f=>t.onClick(f,e.index))}),{default:i(()=>[m(k,{side:""},{default:i(()=>[e.item.isImage||e.item.image?(n(),s(H,{key:0,square:"",size:e.imageSize,class:"cursor-pointer",onClick:a[0]||(a[0]=f=>t.onClick(f,e.index))},{default:i(()=>[m(t.AppImage,{fetch:e.fetch,src:e.item.filePath},null,8,["fetch","src"])]),_:1},8,["size"])):(n(),w("div",{key:1,style:L({width:e.imageSize}),class:"cursor-pointer text-center",onClick:a[1]||(a[1]=f=>t.onClick(f,e.index))},[m(T,{class:S(e.textColor),name:t.getFileTypeIcon(e.item.fileMime),size:e.iconSize},null,8,["class","name","size"])],4))]),_:1}),m(k,null,{default:i(()=>[m(h,{lines:"1",class:S(e.textColor)},{default:i(()=>[g(o.$slots,"fileName",{},()=>[u(y(e.item.fileName),1)])]),_:3},8,["class"]),e.showSize?(n(),s(h,{key:0,caption:"",class:S(e.textColor)},{default:i(()=>[g(o.$slots,"size",{},()=>[u(y(e.formatSize?t.formatBytes(e.item.fileSize):e.item.fileSize),1)])]),_:3},8,["class"])):d("",!0)]),_:3}),m(k,{side:""},{default:i(()=>[g(o.$slots,"end",{},()=>[e.showDelete?(n(),s(x,{key:0,onClick:a[2]||(a[2]=f=>t.onRemove(f,e.index)),unelevated:"",round:"",size:"sm",icon:t.biTrashFill,color:"negative"},{default:i(()=>[m(P,{class:"bg-negative"},{default:i(()=>[u(y(t.t("base.delete")),1)]),_:1})]),_:1},8,["icon"])):d("",!0)])]),_:3})]),_:3},16,["dense","clickable"])}const U=N(E,[["render",M],["__file","FilesPreviewItemAlt.vue"]]);export{K as F,U as a};
