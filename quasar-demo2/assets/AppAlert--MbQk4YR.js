import{d as u,r as c,_ as m,aq as f,ar as _,B as s,H as r,I as l,C as i,N as y,ah as n,R as d,O as p,ak as g,af as h,aL as x,al as S}from"./index-BzL-CGt2.js";const w=u({__name:"AppAlert",props:{message:{type:String,required:!1},title:{type:String,default:null},type:{type:String,default:""},icon:{type:String,default:"mdi-lightbulb-on-outline"},dense:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},closeable:{type:Boolean,default:!1}},setup(o,{expose:a}){a();const t={show:c(!0)};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),B={key:0,class:"q-mx-sm text-weight-bold"};function b(o,a,e,t,k,v){return f((s(),r("div",{class:x(["wee-notification",e.type]),style:S({padding:e.dense?"5px":"1rem 2.25rem 1rem 1.25rem",borderRadius:e.radius?"5px":""})},[l("div",null,[l("strong",null,[e.icon?(s(),i(y,{key:0,name:e.icon,style:{"margin-right":"5px"},size:"md"},null,8,["name"])):n("",!0)]),e.title?(s(),r("span",B,d(e.title),1)):n("",!0),p(" "+d(e.message?e.message:"")+" ",1),l("div",null,[g(o.$slots,"extra")])]),e.closeable?(s(),i(h,{key:0,round:"",flat:"",onClick:a[0]||(a[0]=A=>t.show=!t.show),icon:"mdi-close"})):n("",!0)],6)),[[_,t.show]])}const N=m(w,[["render",b],["__file","AppAlert.vue"]]);export{N as default};
