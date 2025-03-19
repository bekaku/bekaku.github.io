import{l as E,ad as U,a as Z,u as D,ae as G,r as f,aM as x,c as _,m as r,n as i,c3 as J,Y as W,a5 as b,c4 as Y,bX as ee,w as a,x as l,a0 as y,W as z,aW as le,av as C,X as c,J as R,bM as ae,dh as oe,v as N,at as $,as as Q,au as O,af as te,p as ne,q as ie,bd as se,V as P,ah as j,aA as ue,t as d,e0 as de,e1 as re,e2 as me,e3 as pe,e4 as ce}from"./index-__cRNkUR.js";import{u as ve}from"./useAppMeta-BFA3x1Cv.js";import{B as H}from"./BaseButton-DlZR7aHG.js";import{B as fe,a as L}from"./BaseCard-q-Y47Oi3.js";import{_ as X}from"./BaseCommandPalette.vue_vue_type_script_setup_true_lang-C18g3Xq9.js";import{_ as be}from"./BaseDialog.vue_vue_type_script_setup_true_lang-DymM6wAo.js";import{_ as ge}from"./BasePage.vue_vue_type_script_setup_true_lang-CK0_gL4k.js";import{u as ye}from"./useValidation-C8aYGl0y.js";import{B as T}from"./BaseAvatar-BZ-ZEarg.js";import{_ as Ve}from"./SkeletonItem.vue_vue_type_script_setup_true_lang-DHDipTjK.js";import"./use-meta-B1rlW-p2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BaseInput.vue_vue_type_script_setup_true_lang-CR4dWM_2.js";import"./BaseSpinner-BSVbRgky.js";import"./BaseScrollArea.vue_vue_type_script_setup_true_lang-DYsaoEsi.js";import"./BaseLabelValueItem.vue_vue_type_script_setup_true_lang-cj8dMTC_.js";import"./BaseResult.vue_vue_type_script_setup_true_lang-CuPcLEbB.js";import"./QBar-CAc_-Yo6.js";import"./Ellipsis-DEcjlhN0.js";import"./FileManagerService-DuFwoC8x.js";import"./useAxios-DRM2HYJN.js";const A=E({__name:"BaseSelect",props:U({items:{},label:{},optionValue:{default:"value"},optionLabel:{default:"label"},readonly:{type:Boolean,default:!1},dense:{type:Boolean,default:!0},outlined:{type:Boolean,default:!0},filled:{type:Boolean},canFilter:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0},required:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},useChips:{type:Boolean,default:!1},icon:{},loading:{type:Boolean,default:!1},fetchImage:{type:Boolean,default:!1},inputDebounce:{default:0},lazy:{type:Boolean,default:!1},noOptionsText:{},lazyLoading:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:U(["on-filter","on-scroll"],["update:modelValue"]),setup(m,{emit:F}){const{isDark:k}=Z(),{requiredSelect:p}=ye(),V=F,{t:S}=D(),v=G(m,"modelValue"),g=f([...m.items]);x(()=>{g.value=m.items});const h=_(()=>{if(!(m.multiple||!v.value))return m.items.find(e=>e.value==v.value)}),B=(e,s)=>{if(m.lazy)M(e,s);else{if(e===""){s(()=>{g.value=m.items});return}s(()=>{const n=e.toLowerCase();g.value=m.items.filter(u=>u.label&&u.label.toLowerCase().includes(n))})}},M=(e,s)=>{if(e===""){s(()=>{g.value=m.items});return}V("on-filter",e,s)},w=({to:e,ref:s})=>{if(!m.lazy)return;const n=g.value.length-1;m.loading!==!0&&e===n&&V("on-scroll",e,s)};return(e,s)=>e.loading?(i(),r(Ve,{key:0,show:"",items:1,"show-header":!1})):(i(),r(J,W({key:1},e.$attrs,{modelValue:v.value,"onUpdate:modelValue":s[1]||(s[1]=n=>v.value=n),label:e.label,dense:e.dense,outlined:e.outlined,filled:e.filled,"option-value":e.optionValue,"option-label":e.optionLabel,loading:e.lazyLoading,"ottom-slots":"","emit-value":"","map-options":"","use-chips":e.useChips,multiple:e.multiple,readonly:e.readonly,"use-input":e.canFilter,options:g.value,"input-debounce":e.inputDebounce,rules:[e.required?b(p):{}],"dropdown-icon":b(Y),onFilter:B,onVirtualScroll:w}),ee({prepend:a(()=>[N(e.$slots,"prepend",{},()=>[h.value!==void 0?(i(),P(j,{key:0},[h.value.avatar?(i(),r(T,{key:0,"fetch-image":e.fetchImage,src:h.value.avatar},null,8,["fetch-image","src"])):h.value.icon?(i(),r(C,{key:1,name:h.value.icon},null,8,["name"])):y("",!0)],64)):e.icon?(i(),r(C,{key:1,name:e.icon},null,8,["name"])):y("",!0)])]),hint:a(()=>[e.multiple?(i(),P(j,{key:0},[z(c(b(S)("base.canChooseMoreThen1")),1)],64)):y("",!0)]),option:a(({itemProps:n,opt:u,selected:I})=>[l(Q,ne(ie(n)),{default:a(()=>[u.avatar||u.icon?(i(),r($,{key:0,avatar:""},{default:a(()=>[u.avatar?(i(),r(T,{key:0,"fetch-image":e.fetchImage,src:u.avatar},null,8,["fetch-image","src"])):u.icon?(i(),r(C,{key:1,name:u.icon},null,8,["name"])):y("",!0)]),_:2},1024)):y("",!0),l($,null,{default:a(()=>[l(O,null,{default:a(()=>[z(c(u.label),1)]),_:2},1024),u.description?(i(),r(O,{key:0,caption:""},{default:a(()=>[z(c(u.description),1)]),_:2},1024)):y("",!0)]),_:2},1024),I?(i(),r($,{key:1,side:""},{default:a(()=>[l(C,{color:"primary",name:b(te)},null,8,["name"])]),_:1})):y("",!0)]),_:2},1040),u?.border?(i(),r(se,{key:0})):y("",!0)]),"no-option":a(()=>[l(Q,null,{default:a(()=>[l($,{class:"text-italic text-grey"},{default:a(()=>[z(c(e.noOptionsText||b(S)("error.dataNotfound")),1)]),_:1})]),_:1})]),after:a(()=>[N(e.$slots,"after")]),_:2},[e.multiple?{name:"selected-item",fn:a(n=>[l(ae,{square:"","icon-remove":b(R),removable:e.clearable,onRemove:u=>n.removeAtIndex(n.index),color:b(k)?"grey-9":"grey-3"},{default:a(()=>[n.opt?.avatar?(i(),r(T,{key:0,"fetch-image":e.fetchImage,src:n.opt.avatar,size:"20px"},null,8,["fetch-image","src"])):n.opt?.icon?(i(),r(le,{key:1,color:"primary","text-color":"white"},{default:a(()=>[l(C,{name:n.opt.icon},null,8,["name"])]),_:2},1024)):y("",!0),z(" "+c(n.opt.label),1)]),_:2},1032,["icon-remove","removable","onRemove","color"])]),key:"0"}:void 0,e.clearable?{name:"append",fn:a(()=>[v.value?(i(),r(C,{key:0,class:"cursor-pointer",name:b(R),onClick:s[0]||(s[0]=oe(n=>e.multiple?v.value=[]:v.value=null,["stop","prevent"]))},null,8,["name"])):y("",!0)]),key:"1"}:void 0]),1040,["modelValue","label","dense","outlined","filled","option-value","option-label","loading","use-chips","multiple","readonly","use-input","options","input-debounce","rules","dropdown-icon"]))}}),he=E({__name:"BaseSelectAlt",props:U({items:{},label:{},optionValue:{default:"value"},optionLabel:{default:"label"},dense:{type:Boolean,default:!0},outlined:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(m){const{t:F}=D(),k=G(m,"modelValue");return(p,V)=>(i(),r(J,W(p.$attrs,{modelValue:k.value,"onUpdate:modelValue":V[0]||(V[0]=S=>k.value=S),label:p.label,dense:p.dense,outlined:p.outlined,options:p.items,"option-value":p.optionValue,"option-label":p.optionLabel,"emit-value":"","map-options":"","dropdown-icon":b(Y),multiple:p.multiple}),{"no-option":a(()=>[l(Q,null,{default:a(()=>[l($,{class:"text-italic text-grey"},{default:a(()=>[z(c(b(F)("error.dataNotfound")),1)]),_:1})]),_:1})]),_:1},16,["modelValue","label","dense","outlined","options","option-value","option-label","dropdown-icon","multiple"]))}}),we={class:"row"},Se={class:"col-12 col-md-4 q-pa-md"},Be={class:"col-12 col-md-4 q-pa-md"},ke={class:"col-12 col-md-4 q-pa-md"},Me={class:"col-12 col-md-4 q-pa-md"},Ce={class:"col-12 col-md-4 q-pa-md"},ze={class:"text-h5 q-my-sm"},Fe={class:"row"},Le={class:"col-12 col-md-6"},$e={class:"col-12 col-md-6 q-px-md"},qe={class:"text-h5 q-my-sm"},_e=E({__name:"select",setup(m){const{t:F}=D(),{setTitle:k}=ve();k(`Select | ${F("app.name")}`);const p=f(),V=f(),S=f([]),v=f(),g=f([]),h=f(!1);f(!1);const B=f([]),M=f(!1),w=f([{label:"api_client_list",value:1}]),e=[{label:"Google",value:1,description:"Fox",icon:de},{label:"Facebook",value:2,icon:re},{label:"Twitter",value:3,icon:me},{label:"Apple",value:4,icon:pe},{label:"Microsoft",value:5,icon:ce}],s=[{label:"Cody Fisher",value:6,description:"Fisher",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg"},{label:"Robert Fox",value:7,description:"Fox",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg"},{label:"Esther Howard",value:8,description:"Howard",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg"},{label:"Darlene Robertson",value:9,description:"Robertson",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg"},{label:"Ralph Edwards",value:10,description:"Edwards",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png"}],n=[{name:"Cody Fisher",id:1},{name:"Robert Fox",id:2},{name:"Esther Howard",id:3},{name:"Darlene Robertson",id:4},{name:"Ralph Edwards",id:5}],u=[{label:"Users",children:s},{label:"Other",children:e},{label:"test",description:"Just test",value:55}],I=(q,o)=>{console.log("onLazyFilter",q),setTimeout(()=>{o(()=>{for(let t=0;t<30;t++)w.value.push({label:`Label ${w.value.length+1}`,value:w.value.length+1})})},2e3)},K=(q,o)=>{console.log("onScroll",q,o),h.value=!0,setTimeout(()=>{for(let t=0;t<30;t++)w.value.push({label:`Label ${w.value.length+1}`,value:w.value.length+1});h.value=!1},1500)};return(q,o)=>(i(),r(ge,null,{default:a(()=>[l(fe,{title:"Select"},{default:a(()=>[l(ue,null,{default:a(()=>[d("div",we,[d("div",Se,[l(L,{title:"Single Select"}),l(A,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=t=>p.value=t),required:"","can-filter":"",clearable:"",items:e,dense:"",multiple:!1,label:"Select Single"},null,8,["modelValue"]),d("p",null,"simpleModel : "+c(p.value),1)]),d("div",Be,[l(L,{title:"Single Avatar Select"}),l(A,{modelValue:v.value,"onUpdate:modelValue":o[1]||(o[1]=t=>v.value=t),"can-filter":"",clearable:"",items:s,dense:"",multiple:!1,label:"Select user"},null,8,["modelValue"]),d("p",null,"singleModel2 : "+c(v.value),1)]),d("div",ke,[l(L,{title:"Multiple Select"}),l(A,{modelValue:S.value,"onUpdate:modelValue":o[2]||(o[2]=t=>S.value=t),"can-filter":"",clearable:"",items:s,dense:"","use-chips":"",multiple:"",label:"Select Multiple"},null,8,["modelValue"]),d("p",null,"multipleModel : "+c(S.value),1)]),d("div",Me,[l(L,{title:"Select Alt"}),l(he,{modelValue:g.value,"onUpdate:modelValue":o[3]||(o[3]=t=>g.value=t),items:n,multiple:"",dense:"",label:"Select Any","option-label":"name","option-value":"id"},null,8,["modelValue"]),d("p",null,"multipleAnyModel : "+c(g.value),1)]),d("div",Ce,[l(L,{title:"Lazy loading, Virtual Scroller"}),l(A,{modelValue:V.value,"onUpdate:modelValue":o[4]||(o[4]=t=>V.value=t),"can-filter":"",clearable:"",items:w.value,dense:"",multiple:!1,lazy:"","input-debounce":300,"lazy-loading":h.value,label:"Select lazy Single","no-options-text":"Type for search",onOnFilter:I,onOnScroll:K},null,8,["modelValue","items","lazy-loading"]),d("p",null,"simpleModel : "+c(V.value),1)])]),d("div",ze,"Command palette "+c(B.value),1),d("div",Fe,[d("div",Le,[l(X,{modelValue:B.value,"onUpdate:modelValue":o[5]||(o[5]=t=>B.value=t),multiple:"",items:u},null,8,["modelValue"])]),d("div",$e,[d("div",qe,"Command palette dialog "+c(B.value),1),l(H,{outline:"",label:"Open Command palette dialog",onClick:o[6]||(o[6]=t=>M.value=!0)})])])]),_:1})]),_:1}),l(be,{modelValue:M.value,"onUpdate:modelValue":o[9]||(o[9]=t=>M.value=t),padding:!1,"show-toolbar":!1,"dialog-style":"width: 756px; max-width: 80vw;"},{default:a(()=>[l(X,{modelValue:B.value,"onUpdate:modelValue":o[8]||(o[8]=t=>B.value=t),bordered:!1,class:"q-pt-sm",multiple:"",items:u},{inputAppend:a(()=>[l(H,{flat:"",round:"",icon:b(R),onClick:o[7]||(o[7]=t=>M.value=!1)},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}))}});export{_e as default};
