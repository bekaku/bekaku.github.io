const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NotifyIcon-C622rXrj.js","assets/index-ZORCAnWx.js","assets/index-HNifYG8Q.css"])))=>i.map(i=>d[i]);
import{d as N,u as v,Y as b,Z as x,_ as D,B as m,C as r,E as i,F as a,ac as l,ad as g,ae as p,aW as y,O as k,R as C,aL as S,ab as h,ah as j}from"./index-ZORCAnWx.js";import{U as L,u as Q}from"./AppHeader-DyooUF1b.js";import"./ClosePopup-8o396qhR.js";import"./BaseAvatar-BpMlrxWN.js";import"./AppImage-pYjLaXSs.js";import"./FileManagerService-BjIGCFM0.js";import"./useAxios-C6fOtpAb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useAuth-KshevrgW.js";const B=N({__name:"NotificationItem",props:{index:{type:Number},item:{type:Object,default:()=>null}},emits:["on:click"],setup(d,{expose:f,emit:e}){f();const t=b(()=>x(()=>import("./NotifyIcon-C622rXrj.js"),__vite__mapDeps([0,1,2]))),o=d,{updateReadNotify:s}=L(),{notificationLink:n}=Q(),{appFormatDateDistance:c,isDark:I}=v(),u=e,_={NotifyIcon:t,props:o,updateReadNotify:s,notificationLink:n,appFormatDateDistance:c,isDark:I,emit:u,onClick:()=>{o.item.readStatus||s(o.item.id),u("on:click",o.index)}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}});function O(d,f,e,t,o,s){return e.item?(m(),r(h,{key:0,to:t.notificationLink(e.item.functionCode,e.item.functionId),onClick:t.onClick,class:S(t.isDark&&!e.item.readStatus?"bg-grey-9":e.item.readStatus?"":"bg-light-blue-2")},{default:i(()=>[a(l,{avatar:""},{default:i(()=>[a(g,{size:"48px"},{default:i(()=>{var n,c;return[e.item.fromUser?(m(),r(p,{key:0,src:(c=(n=e.item.fromUser)==null?void 0:n.avatar)==null?void 0:c.thumbnail,"spinner-color":"white","no-native-menu":""},null,8,["src"])):(m(),r(p,{key:1,src:"/icon.png","spinner-color":"white","no-native-menu":""}))]}),_:1})]),_:1}),a(l,null,{default:i(()=>[a(y,{lines:2},{default:i(()=>[k(C(e.item.message),1)]),_:1}),a(y,{caption:""},{default:i(()=>[k(C(t.appFormatDateDistance(e.item.createdDate)),1)]),_:1})]),_:1}),a(l,{side:""},{default:i(()=>[a(t.NotifyIcon,{"notify-type":e.item.functionCode,"emoji-type":e.item.emojiType},null,8,["notify-type","emoji-type"])]),_:1})]),_:1},8,["to","class"])):j("",!0)}const W=D(B,[["render",O],["__scopeId","data-v-46377830"],["__file","NotificationItem.vue"]]);export{W as default};
