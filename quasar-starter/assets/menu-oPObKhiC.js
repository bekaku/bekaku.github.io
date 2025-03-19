import{l as q,ad as V,ae as N,r as R,m as v,n as s,cO as C,Y as K,w as a,x as e,V as p,aZ as w,ah as m,be as y,a0 as M,at as h,av as D,a5 as d,bd as U,u as W,a as X,ay as Y,bv as Z,cl as L,aA as I,dW as B,y as G,dk as J,bC as x,bq as ee,B as O,dX as F,dY as ae,dZ as le,as as ne,W as H,d_ as se,bo as oe,d$ as te,t as T,cM as ie,bM as re,X as de}from"./index-__cRNkUR.js";import{u as ue}from"./useAppMeta-BFA3x1Cv.js";import{B as $}from"./BaseButton-DlZR7aHG.js";import{B as P}from"./BaseCard-q-Y47Oi3.js";import{_ as ce}from"./BasePage.vue_vue_type_script_setup_true_lang-CK0_gL4k.js";import{_ as E}from"./BaseLabelValueItem.vue_vue_type_script_setup_true_lang-cj8dMTC_.js";import j from"./BaseBreadcrumbs-CnVoDRZL.js";import{_ as pe}from"./BaseScrollArea.vue_vue_type_script_setup_true_lang-DYsaoEsi.js";import{_ as me}from"./BaseMenuItems.vue_vue_type_style_index_0_lang-C-3C3RVg.js";import"./use-meta-B1rlW-p2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BaseAvatar-BZ-ZEarg.js";import"./FileManagerService-DuFwoC8x.js";import"./useAxios-DRM2HYJN.js";const A="M0 0h24v24H0V0z@@fill:none;&&M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",Q=q({__name:"BaseDropdownMenu",props:V({items:{},icon:{},title:{},width:{default:"100px"},cover:{type:Boolean,default:!1},dense:{type:Boolean,default:!0},iconSize:{},avatarSize:{},anchor:{default:"bottom left"},self:{}},{open:{type:Boolean,default:void 0},openModifiers:{}}),emits:V(["on-click"],["update:open"]),setup(S,{emit:g}){const u=N(S,"open"),i=R(),_=g,f=n=>{_("on-click",n),i.value&&i.value.hide()},k=()=>{u.value!==void 0&&(u.value=!1)};return(n,c)=>(s(),v(C,K({ref_key:"menuRef",ref:i},n.$attrs,{modelValue:u.value,"onUpdate:modelValue":c[0]||(c[0]=l=>u.value=l),class:"q-py-sm",style:{minWidth:n.width},cover:n.cover,anchor:n.anchor,onHide:k}),{default:a(()=>[e(y,null,{default:a(()=>[(s(!0),p(m,null,w(n.items,(l,b)=>(s(),p(m,{key:`app-menu-${l.value}-${b}`},[e(E,{item:l,dense:n.dense,clickable:l.value!=null||l.children&&l.children.length>0,onOnClick:f},{default:a(()=>[l.children&&l.children.length>0?(s(),p(m,{key:0},[e(h,{side:""},{default:a(()=>[e(D,{name:d(A)},null,8,["name"])]),_:1}),e(C,{anchor:"top end",self:"top start"},{default:a(()=>[e(y,{dense:n.dense},{default:a(()=>[(s(!0),p(m,null,w(l.children,(o,t)=>(s(),v(E,{key:`app-submenulevel2-${b}-${t}`,item:o,clickable:l.value!=null||l.children&&l.children.length>0,dense:n.dense,onOnClick:f},{default:a(()=>[o.children&&o.children.length>0?(s(),p(m,{key:0},[e(h,{side:""},{default:a(()=>[e(D,{name:d(A)},null,8,["name"])]),_:1}),e(C,{anchor:"top end",self:"top start"},{default:a(()=>[e(y,{dense:n.dense},{default:a(()=>[(s(!0),p(m,null,w(o.children,(r,z)=>(s(),v(E,{key:`app-submenulevel3-${b}-${t}-${z}`,clickable:l.value!=null||l.children&&l.children.length>0,item:r,dense:n.dense,onOnClick:f},null,8,["clickable","item","dense"]))),128))]),_:2},1032,["dense"])]),_:2},1024)],64)):M("",!0)]),_:2},1032,["item","clickable","dense"]))),128))]),_:2},1032,["dense"])]),_:2},1024)],64)):M("",!0)]),_:2},1032,["item","dense","clickable"]),l.border==!0?(s(),v(U,{key:0})):M("",!0)],64))),128))]),_:1})]),_:1},16,["modelValue","style","cover","anchor"]))}}),fe={class:"row"},be={class:"col-12 col-md-4 q-pa-sm"},Re=q({__name:"menu",setup(S){const{t:g}=W();X();const{setTitle:u}=ue();u(`Menu | ${g("app.name")}`);const i=R(!1),_=R([{label:"Edit",description:"edit this item",icon:Y,fetch:!1,value:1},{label:"Delete",icon:Z,color:"negative",fetch:!1,value:2},{label:"Copy",description:"Copy this item",icon:L,fetch:!1,value:3}]),f=[{label:"Cody Fisher",value:1,description:"Fisher",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg"},{label:"Robert Fox",value:2,description:"Fox",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg"},{label:"Esther Howard",value:3,description:"Howard",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg"},{label:"Darlene Robertson",value:4,description:"Robertson",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg"},{label:"Ralph Edwards",value:5,description:"Edwards",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png"}],k=[{label:"Cody Fisher",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg",border:!0},{label:"Profile",value:"Profile",icon:G},{label:"Billing",value:"Billing",icon:J},{label:"Keyboard shortcuts",value:"Keyboard",icon:x,border:!0},{label:"Team",value:"Team",icon:ee},{label:"Invite users",icon:le,children:[{label:"Email",value:"Email",icon:O},{label:"Message",value:"Message",icon:F},{label:"More",icon:ae,children:[{label:"Message",value:"Message",icon:F},{label:"Email",value:"Email",icon:O}]}]}],n=[{label:"base.home",to:"/",icon:se,translateLabel:!0},{label:"About"},{label:"Review"},{label:"Permission list",to:"/permission",icon:oe}],c=o=>{console.log("onMenuClick",o),i.value=!1},l=o=>{o&&o.stopImmediatePropagation(),i.value=!0},b=()=>{console.log("onItemClick")};return(o,t)=>(s(),v(ce,{full:!1},{default:a(()=>[e(P,{flat:"",bordered:!1,title:"Dropdown menu"},{default:a(()=>[e(I,{class:"q-gutter-md"},{default:a(()=>[e($,{icon:d(B),outline:"",label:"Simple menu"},{default:a(()=>[e(Q,{items:_.value,onOnClick:c},null,8,["items"])]),_:1},8,["icon"]),e($,{icon:d(B),outline:"",label:"Submenus"},{default:a(()=>[e(Q,{items:k,onOnClick:c})]),_:1},8,["icon"]),e(ne,{clickable:"",onClick:b},{default:a(()=>[e(h,null,{default:a(()=>t[2]||(t[2]=[H(" Q-item open state ")])),_:1}),e(h,{side:""},{default:a(()=>[e($,{icon:d(B),outline:"",label:"Click here",onClick:t[1]||(t[1]=r=>l(r))},{default:a(()=>[e(Q,{open:i.value,"onUpdate:open":t[0]||(t[0]=r=>i.value=r),items:f,onOnClick:c},null,8,["open"])]),_:1},8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(P,{flat:"",bordered:!1,title:"Breadcrumb"},{default:a(()=>[e(I,null,{default:a(()=>[e(j,{items:n}),e(j,{items:n,"separator-icon":d(te),"text-color":"orange","active-color":"secondary"},null,8,["separator-icon"])]),_:1})]),_:1}),e(P,{flat:"",bordered:!1,title:"Menu"},{default:a(()=>[T("div",fe,[T("div",be,[e(pe,null,{default:a(()=>[e(me,{items:d(ie)},{end:a(({menuItem:r})=>[e(h,{side:""},{default:a(()=>[e(re,{class:"bg-app-content-item"},{default:a(()=>[H(de(r.label?.charAt(0).toUpperCase()),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["items"])]),_:1})])])]),_:1})]),_:1}))}});export{Re as default};
