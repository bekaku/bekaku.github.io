import{d as h,o as s,j as i,I as a,n as r,a as n,w as l,K as o,G as d,aI as u,H as m,bO as y,bP as f,bQ as x,bR as v,bS as w,bT as S,bU as z,bV as B,bW as C}from"./index.d1ef8089.js";var q="/assets/empty-box.8bd297d9.png",I="/assets/sad-man.dd240612.png",A="/assets/warning.ca3df64c.png",H="/assets/tick.1b59a3c6.png",T="/assets/404.d5454baf.png";const V={class:"row items-center q-pa-md"},$={class:"col"},p={class:"column items-center"},L={class:"col text-center"},M=a("img",{src:H},null,-1),R=a("img",{src:T},null,-1),O={class:"col q-mt-md text-center"},P=["innerHTML"],N=["innerHTML"],Q={class:"col q-mt-sm"},G=h({__name:"AppResult",props:{status:{type:String,default:"info"},title:{type:String,default:""},description:{type:String,default:""},icon:{type:String,default:""},iconSize:{type:String,default:"128px"},hideBg:{type:Boolean,default:!0}},setup(t){const c=t,b=()=>{let e;switch(c.status){case"404":e=C;break;case"403":e=B;break;case"500":e=z;break;case"418":e=S;break;case"success":e=w;break;case"warning":e=v;break;case"error":e=x;break;case"empty":e=f;break;default:e=y;break}return e},g=()=>{let e="";switch(c.status){case"404":case"403":case"500":case"418":e="text-amber";break;case"success":e="text-green";break;case"warning":e="text-orange";break;case"error":e="text-red";break;case"empty":e="text-blue-grey-2";break;default:e="text-blue";break}return e},k=()=>{let e="";switch(c.status){case"404":case"403":case"500":case"418":e="amber-1";break;case"success":e="green-1";break;case"warning":e="orange-1";break;case"error":e="red-1";break;case"empty":e="grey-1";break;default:e="blue-1";break}return e};return(e,j)=>(s(),i("div",V,[a("div",$,[a("div",p,[a("div",L,[t.status=="empty"?(s(),i("img",{key:0,src:q,style:r(`width: ${t.iconSize} ; height: auto`)},null,4)):t.status=="error"?(s(),i("img",{key:1,style:r(`width: ${t.iconSize} ; height: auto`),src:I},null,4)):t.status=="warning"?(s(),i("img",{key:2,src:A,style:r(`width: ${t.iconSize} ; height: auto`)},null,4)):t.status=="success"?(s(),n(o,{key:3,square:"",size:t.iconSize},{default:l(()=>[M]),_:1},8,["size"])):t.status=="404"?(s(),n(o,{key:4,square:"",style:{width:"100%",height:"auto"}},{default:l(()=>[R]),_:1})):(s(),n(o,{key:5,size:t.iconSize,color:t.hideBg?"":k(),icon:t.icon?t.icon:b(),class:d(g())},null,8,["size","color","icon","class"]))]),a("div",O,[u(e.$slots,"text",{},()=>[t.title?(s(),i("div",{key:0,class:d(["text-h5 text-weight-bold q-mb-sm",t.status=="empty"?"text-grey-6":""]),innerHTML:t.title},null,10,P)):m("",!0),t.description?(s(),i("div",{key:1,class:"text-grey-6",innerHTML:t.description},null,8,N)):m("",!0)])]),a("div",Q,[u(e.$slots,"extra")])])])]))}});export{G as _};