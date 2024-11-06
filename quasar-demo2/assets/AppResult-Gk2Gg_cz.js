import{d as y,at as h,au as f,av as x,aw as p,ax as v,ay as w,az as B,aA as C,aB as S,_ as I,B as a,H as r,I as s,al as d,C as u,E as z,ad as m,aC as g,ah as i,ak as b,R as q}from"./index-DDZXG7TO.js";const A=y({__name:"AppResult",props:{status:{type:String,default:"info"},title:{type:String,default:""},description:{type:String,default:""},icon:{type:String,default:""},iconSize:{type:String,default:"125px"},hideBg:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0}},setup(o,{expose:c}){c();const t=o,l={props:t,getIcon:()=>{let e;switch(t.status){case"404":e=S;break;case"403":e=C;break;case"500":e=B;break;case"418":e=w;break;case"success":e=v;break;case"warning":e=p;break;case"error":e=x;break;case"empty":e=f;break;default:e=h;break}return e},getIconColor:()=>{let e="";switch(t.status){case"404":case"403":case"500":case"418":e="text-amber";break;case"success":e="text-green";break;case"warning":e="text-orange";break;case"error":e="text-red";break;case"empty":e="text-blue-grey-2";break;default:e="text-blue";break}return e},getBgColor:()=>{let e="";switch(t.status){case"404":case"403":case"500":case"418":e="amber-1";break;case"success":e="green-1";break;case"warning":e="orange-1";break;case"error":e="red-1";break;case"empty":e="grey-1";break;default:e="blue-1";break}return e}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),R={class:"row items-center q-pa-md"},V={class:"col"},H={class:"column items-center"},O={class:"col text-center"},P={class:"col q-mt-md text-center"},E=["innerHTML"],L={key:1,class:"text-muted text-subtitle1"},M={class:"col q-mt-sm"};function N(o,c,t,n,k,_){return a(),r("div",R,[s("div",V,[s("div",H,[s("div",O,[t.status=="empty"?(a(),r("img",{key:0,src:"/quasar-starter-template/icons/empty-box.png",style:d(`width: ${t.iconSize} ; height: auto`)},null,4)):t.status=="error"?(a(),r("img",{key:1,style:d(`width: ${t.iconSize} ; height: auto`),src:"/quasar-starter-template/icons/sad-man.png"},null,4)):t.status=="404"?(a(),u(m,{key:2,square:"",style:{width:"100%",height:"auto"}},{default:z(()=>c[0]||(c[0]=[s("img",{src:"/quasar-starter-template/icons/404.png"},null,-1)])),_:1})):t.showIcon?(a(),u(m,{key:3,size:t.iconSize,color:t.hideBg?void 0:n.getBgColor(),icon:t.icon?t.icon:n.getIcon(),class:g(n.getIconColor())},null,8,["size","color","icon","class"])):i("",!0)]),s("div",P,[b(o.$slots,"text",{},()=>[t.title?(a(),r("div",{key:0,class:g(["text-h5 text-weight-bold q-mb-sm",t.status=="empty"?"text-grey-6":""]),innerHTML:t.title},null,10,E)):i("",!0),t.description?(a(),r("div",L,q(t.description),1)):i("",!0)])]),s("div",M,[b(o.$slots,"extra")])])])])}const j=I(A,[["render",N],["__file","AppResult.vue"]]);export{j as default};