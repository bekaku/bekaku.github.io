import{d as h,o as a,j as c,I as s,n as r,a as n,w as l,K as o,G as d,aI as u,H as m,bO as y,bP as x,bQ as f,bR as w,bS as S,bT as z,bU as q,bV as v,bW as B}from"./index.1297aae9.js";const C={class:"row items-center q-pa-md"},I={class:"col"},A={class:"column items-center"},H={class:"col text-center"},T=s("img",{src:"/quasar-starter-template/icons/tick.png"},null,-1),V=s("img",{src:"/quasar-starter-template/icons/404.png"},null,-1),$={class:"col q-mt-md text-center"},p=["innerHTML"],L=["innerHTML"],M={class:"col q-mt-sm"},P=h({__name:"AppResult",props:{status:{type:String,default:"info"},title:{type:String,default:""},description:{type:String,default:""},icon:{type:String,default:""},iconSize:{type:String,default:"128px"},hideBg:{type:Boolean,default:!0}},setup(t){const i=t,g=()=>{let e;switch(i.status){case"404":e=B;break;case"403":e=v;break;case"500":e=q;break;case"418":e=z;break;case"success":e=S;break;case"warning":e=w;break;case"error":e=f;break;case"empty":e=x;break;default:e=y;break}return e},b=()=>{let e="";switch(i.status){case"404":case"403":case"500":case"418":e="text-amber";break;case"success":e="text-green";break;case"warning":e="text-orange";break;case"error":e="text-red";break;case"empty":e="text-blue-grey-2";break;default:e="text-blue";break}return e},k=()=>{let e="";switch(i.status){case"404":case"403":case"500":case"418":e="amber-1";break;case"success":e="green-1";break;case"warning":e="orange-1";break;case"error":e="red-1";break;case"empty":e="grey-1";break;default:e="blue-1";break}return e};return(e,R)=>(a(),c("div",C,[s("div",I,[s("div",A,[s("div",H,[t.status=="empty"?(a(),c("img",{key:0,src:"/quasar-starter-template/icons/empty-box.png",style:r(`width: ${t.iconSize} ; height: auto`)},null,4)):t.status=="error"?(a(),c("img",{key:1,style:r(`width: ${t.iconSize} ; height: auto`),src:"/quasar-starter-template/icons/sad-man.png"},null,4)):t.status=="warning"?(a(),c("img",{key:2,src:"/quasar-starter-template/icons/warning.png",style:r(`width: ${t.iconSize} ; height: auto`)},null,4)):t.status=="success"?(a(),n(o,{key:3,square:"",size:t.iconSize},{default:l(()=>[T]),_:1},8,["size"])):t.status=="404"?(a(),n(o,{key:4,square:"",style:{width:"100%",height:"auto"}},{default:l(()=>[V]),_:1})):(a(),n(o,{key:5,size:t.iconSize,color:t.hideBg?"":k(),icon:t.icon?t.icon:g(),class:d(b())},null,8,["size","color","icon","class"]))]),s("div",$,[u(e.$slots,"text",{},()=>[t.title?(a(),c("div",{key:0,class:d(["text-h5 text-weight-bold q-mb-sm",t.status=="empty"?"text-grey-6":""]),innerHTML:t.title},null,10,p)):m("",!0),t.description?(a(),c("div",{key:1,class:"text-grey-6",innerHTML:t.description},null,8,L)):m("",!0)])]),s("div",M,[u(e.$slots,"extra")])])])]))}});export{P as _};
