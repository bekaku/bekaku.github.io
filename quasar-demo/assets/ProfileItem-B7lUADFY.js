import{d as r,_ as u,B as d,C as m,E as a,F as l,ac as i,ak as s,ad as f,ae as c,aW as _,aL as b,O as p,R as y,ab as v,ah as B}from"./index-Ck7C3Bne.js";const N=r({__name:"ProfileItem",props:{item:{type:Object,default:()=>null},index:{type:Number,default:0},nameLines:{type:Number,default:1},positionLines:{type:Number,default:1},avatarSize:{type:Number,default:42},button:{type:Boolean,default:!0},nameBold:{type:Boolean,default:!0},dense:{type:Boolean,default:!1},to:{type:String,default:void 0}},emits:["on-select"],setup(t,{expose:n}){n();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function S(t,n,e,k,I,g){return e.item?(d(),m(v,{key:0,dense:e.dense,clickable:e.button,onClick:n[0]||(n[0]=o=>t.$emit("on-select",e.item)),to:e.to?e.to:void 0},{default:a(()=>[l(i,{avatar:"",top:"",class:"q-pt-sm"},{default:a(()=>[s(t.$slots,"avata",{},()=>[l(f,{size:`${e.avatarSize}px`},{default:a(()=>{var o;return[l(c,{class:"bg-grey-8",src:(o=e.item.avatar)==null?void 0:o.thumbnail,"spinner-color":"white","no-native-menu":""},null,8,["src"])]}),_:1},8,["size"])])]),_:3}),l(i,null,{default:a(()=>[s(t.$slots,"profilename",{},()=>[l(_,{lines:e.nameLines,class:b(["cursor-pointer",{"text-weight-bold":e.nameBold}])},{default:a(()=>[p(y(e.item.fullName),1)]),_:1},8,["lines","class"])]),s(t.$slots,"position"),s(t.$slots,"extra")]),_:3}),l(i,{side:"",top:""},{default:a(()=>[s(t.$slots,"side")]),_:3})]),_:3},8,["dense","clickable","to"])):B("",!0)}const z=u(N,[["render",S],["__file","ProfileItem.vue"]]);export{z as default};
