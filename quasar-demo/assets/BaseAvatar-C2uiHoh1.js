import{d as l,bT as u,_ as c,B as d,C as t,E as f,ak as s,ae as i,aL as n,H as m,ah as _,ai as b,ap as v,ad as B}from"./index-C_yxR0el.js";import{A as g}from"./AppImage-BJRdTOBw.js";const C=l({__name:"BaseAvatar",props:{src:{},spinnerColor:{default:"white"},color:{},imgBg:{default:"bg-grey-8"},ratio:{default:4/3},size:{default:"32px"},square:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},fetchImage:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},borderedColor:{default:"#fff"},borderedWidth:{default:"2px"}},setup(r,{expose:o}){o(),u(a=>({"7742c5eb":a.borderedWidth,"762bc788":a.borderedColor,"527f42d1":a.size}));const e={AppImage:g};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function y(r,o,e,a,h,q){return d(),t(B,v({size:e.size,square:e.square,rounded:e.rounded},r.$attrs,{color:e.color}),{default:f(()=>[s(r.$slots,"default",{},()=>[e.fetchImage?(d(),m(b,{key:1},[e.src?(d(),t(a.AppImage,{key:0,src:e.src,class:n({bordered:e.bordered,"avatar-rounded":!e.square&&e.rounded,"avatar-round":!e.square&&!e.rounded}),ratio:1},null,8,["src","class"])):_("",!0)],64)):(d(),t(i,{key:0,src:e.src,class:n({bordered:e.bordered,"avatar-rounded":!e.square&&e.rounded,"avatar-round":!e.square&&!e.rounded}),"spinner-color":e.spinnerColor,"no-native-menu":""},null,8,["src","class","spinner-color"])),s(r.$slots,"extra",{},void 0,!0)],!0)]),_:3},16,["size","square","rounded","color"])}const z=c(C,[["render",y],["__scopeId","data-v-ca83d0c8"],["__file","BaseAvatar.vue"]]);export{z as B};