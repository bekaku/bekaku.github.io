import{l as v,dn as h,r as p,R as m,n as a,W as _,X as g,ay as T,m as o,T as w,w as n,x as i,az as l,J as r,dR as C,aY as c,dS as E,dT as I,dU as j,dV as S,O as V,dW as A}from"./index-D_pQv8pS.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";const L=v({__name:"ChatMessageEngage",props:{chatId:{},items:{},iconSize:{default:32}},emits:["on-click"],setup(d,{emit:z}){h(t=>({"09c4277e":s.value}));const f=z,s=p(`${d.iconSize}px`),x=p(!1),y=t=>{x.value=!0,A(t),f("on-click",d.chatId)};return(t,u)=>(a(),m("div",V(t.$attrs,{class:"row cursor-pointer holder",onClick:u[0]||(u[0]=e=>y(e))}),[(a(!0),m(_,null,g(t.items,(e,k)=>(a(),m("div",{class:"icon text-center relative-position",style:T(`left: -${k*5}px`),key:e.emojiType},[e.emojiType=="CARE"?(a(),o(c,{key:0,color:"pink","text-color":"white",size:s.value},{default:n(()=>[i(l,{name:r(C),size:"20px"},null,8,["name"])]),_:1},8,["size"])):e.emojiType=="LAUGH"?(a(),o(c,{key:1,color:"orange","text-color":"white",size:s.value},{default:n(()=>[i(l,{name:r(E),size:"24px"},null,8,["name"])]),_:1},8,["size"])):e.emojiType=="SAD"?(a(),o(c,{key:2,color:"deep-purple","text-color":"white",size:s.value},{default:n(()=>[i(l,{name:r(I),size:"24px"},null,8,["name"])]),_:1},8,["size"])):e.emojiType=="LIKE"?(a(),o(c,{key:3,color:"primary","text-color":"white",size:s.value},{default:n(()=>[i(l,{name:r(j),size:"20px"},null,8,["name"])]),_:1},8,["size"])):e.emojiType=="FIGHTING"?(a(),o(c,{key:4,color:"green","text-color":"white",size:s.value},{default:n(()=>[i(l,{name:r(S),size:"24px"},null,8,["name"])]),_:1},8,["size"])):w("",!0)],4))),128))],16))}}),N=H(L,[["__scopeId","data-v-6b9d72c8"]]);export{N as default};
