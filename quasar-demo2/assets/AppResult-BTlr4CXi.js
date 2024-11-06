import{d as y,aM as h,aN as f,aO as x,aP as p,aQ as S,aR as v,aS as w,aT as B,aU as C,_ as I,B as a,H as r,I as s,al as d,C as u,E as q,ad as m,aL as g,ah as i,ak as b,R as z}from"./index-BzL-CGt2.js";const A=y({__name:"AppResult",props:{status:{type:String,default:"info"},title:{type:String,default:""},description:{type:String,default:""},icon:{type:String,default:""},iconSize:{type:String,default:"125px"},hideBg:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0}},setup(o,{expose:c}){c();const t=o,l={props:t,getIcon:()=>{let e;switch(t.status){case"404":e=C;break;case"403":e=B;break;case"500":e=w;break;case"418":e=v;break;case"success":e=S;break;case"warning":e=p;break;case"error":e=x;break;case"empty":e=f;break;default:e=h;break}return e},getIconColor:()=>{let e="";switch(t.status){case"404":case"403":case"500":case"418":e="text-amber";break;case"success":e="text-green";break;case"warning":e="text-orange";break;case"error":e="text-red";break;case"empty":e="text-blue-grey-2";break;default:e="text-blue";break}return e},getBgColor:()=>{let e="";switch(t.status){case"404":case"403":case"500":case"418":e="amber-1";break;case"success":e="green-1";break;case"warning":e="orange-1";break;case"error":e="red-1";break;case"empty":e="grey-1";break;default:e="blue-1";break}return e}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),R={class:"row items-center q-pa-md"},O={class:"col"},P={class:"column items-center"},V={class:"col text-center"},H={class:"col q-mt-md text-center"},L=["innerHTML"],M={key:1,class:"text-muted text-subtitle1"},N={class:"col q-mt-sm"};function T(o,c,t,n,k,_){return a(),r("div",R,[s("div",O,[s("div",P,[s("div",V,[t.status=="empty"?(a(),r("img",{key:0,src:"/quasar-starter-template/icons/empty-box.png",style:d(`width: ${t.iconSize} ; height: auto`)},null,4)):t.status=="error"?(a(),r("img",{key:1,style:d(`width: ${t.iconSize} ; height: auto`),src:"/quasar-starter-template/icons/sad-man.png"},null,4)):t.status=="404"?(a(),u(m,{key:2,square:"",style:{width:"100%",height:"auto"}},{default:q(()=>c[0]||(c[0]=[s("img",{src:"/quasar-starter-template/icons/404.png"},null,-1)])),_:1})):t.showIcon?(a(),u(m,{key:3,size:t.iconSize,color:t.hideBg?void 0:n.getBgColor(),icon:t.icon?t.icon:n.getIcon(),class:g(n.getIconColor())},null,8,["size","color","icon","class"])):i("",!0)]),s("div",H,[b(o.$slots,"text",{},()=>[t.title?(a(),r("div",{key:0,class:g(["text-h5 text-weight-bold q-mb-sm",t.status=="empty"?"text-grey-6":""]),innerHTML:t.title},null,10,L)):i("",!0),t.description?(a(),r("div",M,z(t.description),1)):i("",!0)])]),s("div",N,[b(o.$slots,"extra")])])])])}const Q=I(A,[["render",T],["__file","AppResult.vue"]]);export{Q as default};
