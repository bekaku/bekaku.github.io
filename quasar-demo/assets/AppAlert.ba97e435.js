import{d as u,r as m,q as c,cP as f,o as t,j as i,I as l,a as o,g as y,H as n,t as r,i as g,aI as v,y as x,G as B,n as S}from"./index.1297aae9.js";const k={key:0,class:"q-mx-sm text-weight-bold"},p=u({__name:"AppAlert",props:{message:{type:String,required:!1},title:{type:String,default:null},type:{type:String,default:""},icon:{type:String,default:"mdi-lightbulb-on-outline"},dense:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},closeable:{type:Boolean,default:!1}},setup(e){const a=m(!0);return(d,s)=>c((t(),i("div",{class:B(["wee-notification",e.type]),style:S({padding:e.dense?"5px":"1rem 2.25rem 1rem 1.25rem",borderRadius:e.radius?"5px":""})},[l("div",null,[l("strong",null,[e.icon?(t(),o(y,{key:0,name:e.icon,style:{"margin-right":"5px"},size:"md"},null,8,["name"])):n("",!0)]),e.title?(t(),i("span",k,r(e.title),1)):n("",!0),g(" "+r(e.message?e.message:"")+" ",1),l("div",null,[v(d.$slots,"extra")])]),e.closeable?(t(),o(x,{key:0,round:"",flat:"",onClick:s[0]||(s[0]=b=>a.value=!a.value),icon:"mdi-close"})):n("",!0)],6)),[[f,a.value]])}});export{p as default};