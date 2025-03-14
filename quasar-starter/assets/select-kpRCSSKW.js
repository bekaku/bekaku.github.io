import{d as O,ab as U,u as Z,j as Q,ac as G,k as f,an as x,s as _,c as r,o as i,bD as W,E as J,K as b,bE as K,bv as ee,w as a,e as l,F as y,N as z,ay as le,a1 as M,O as c,aA as E,b8 as ae,dw as te,r as D,X as $,W as T,Y as N,ah as oe,n as ne,g as ie,aO as se,R as P,S as j,a6 as ue,a as d,cW as de,cR as re,cX as me,f as pe,cU as ce}from"./index-UTJsbmGU.js";import{u as ve}from"./useAppMeta-BXY7KmSo.js";import{B as H}from"./BaseButton-BUn1xyHV.js";import{B as fe,a as F}from"./BaseCard-DoN1hG9u.js";import{_ as X}from"./BaseCommandPalette.vue_vue_type_script_setup_true_lang-BE0uQvE8.js";import{_ as be}from"./BaseDialog.vue_vue_type_script_setup_true_lang-CbJfi44e.js";import{_ as ge}from"./BasePage.vue_vue_type_script_setup_true_lang-BoDIjOxp.js";import{u as ye}from"./useValidation-DR5jvQLZ.js";import{B as R}from"./BaseAvatar-DYsAAppw.js";import{_ as Ve}from"./SkeletonItem.vue_vue_type_script_setup_true_lang-8BIbtStU.js";import"./use-meta-BDBs0vT6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BaseInput.vue_vue_type_script_setup_true_lang-CVDxnSgW.js";import"./BaseSpinner-hdbtQd30.js";import"./BaseScrollArea.vue_vue_type_script_setup_true_lang-CpNKkevY.js";import"./BaseLabelValueItem.vue_vue_type_script_setup_true_lang-CY7wWuLD.js";import"./BaseResult.vue_vue_type_script_setup_true_lang-DkfpcqgX.js";import"./BaseImage-C5pcvk_j.js";import"./FileManagerService-oa2a8H9O.js";import"./useAxios-D87ZUWP6.js";import"./_commonjsHelpers-BosuxZz1.js";const A=O({__name:"BaseSelect",props:U({items:{},label:{},optionValue:{default:"value"},optionLabel:{default:"label"},readonly:{type:Boolean,default:!1},dense:{type:Boolean,default:!0},outlined:{type:Boolean,default:!0},filled:{type:Boolean},canFilter:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0},required:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},useChips:{type:Boolean,default:!1},icon:{},loading:{type:Boolean,default:!1},fetchImage:{type:Boolean,default:!1},inputDebounce:{default:0},lazy:{type:Boolean,default:!1},noOptionsText:{},lazyLoading:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:U(["on-filter","on-scroll"],["update:modelValue"]),setup(m,{emit:L}){const{isDark:k}=Z(),{requiredSelect:p}=ye(),V=L,{t:S}=Q(),v=G(m,"modelValue"),g=f([...m.items]);x(()=>{g.value=m.items});const h=_(()=>{if(!(m.multiple||!v.value))return m.items.find(e=>e.value==v.value)}),B=(e,s)=>{if(m.lazy)C(e,s);else{if(e===""){s(()=>{g.value=m.items});return}s(()=>{const n=e.toLowerCase();g.value=m.items.filter(u=>u.label&&u.label.toLowerCase().includes(n))})}},C=(e,s)=>{if(e===""){s(()=>{g.value=m.items});return}V("on-filter",e,s)},w=({to:e,ref:s})=>{if(!m.lazy)return;const n=g.value.length-1;m.loading!==!0&&e===n&&V("on-scroll",e,s)};return(e,s)=>e.loading?(i(),r(Ve,{key:0,show:"",items:1,"show-header":!1})):(i(),r(W,J({key:1},e.$attrs,{modelValue:v.value,"onUpdate:modelValue":s[1]||(s[1]=n=>v.value=n),label:e.label,dense:e.dense,outlined:e.outlined,filled:e.filled,"option-value":e.optionValue,"option-label":e.optionLabel,loading:e.lazyLoading,"ottom-slots":"","emit-value":"","map-options":"","use-chips":e.useChips,multiple:e.multiple,readonly:e.readonly,"use-input":e.canFilter,options:g.value,"input-debounce":e.inputDebounce,rules:[e.required?b(p):{}],"dropdown-icon":b(K),onFilter:B,onVirtualScroll:w}),ee({prepend:a(()=>[D(e.$slots,"prepend",{},()=>[h.value!==void 0?(i(),P(j,{key:0},[h.value.avatar?(i(),r(R,{key:0,"fetch-image":e.fetchImage,src:h.value.avatar},null,8,["fetch-image","src"])):h.value.icon?(i(),r(M,{key:1,name:h.value.icon},null,8,["name"])):y("",!0)],64)):e.icon?(i(),r(M,{key:1,name:e.icon},null,8,["name"])):y("",!0)])]),hint:a(()=>[e.multiple?(i(),P(j,{key:0},[z(c(b(S)("base.canChooseMoreThen1")),1)],64)):y("",!0)]),option:a(({itemProps:n,opt:u,selected:I})=>[l(T,ne(ie(n)),{default:a(()=>[u.avatar||u.icon?(i(),r($,{key:0,avatar:""},{default:a(()=>[u.avatar?(i(),r(R,{key:0,"fetch-image":e.fetchImage,src:u.avatar},null,8,["fetch-image","src"])):u.icon?(i(),r(M,{key:1,name:u.icon},null,8,["name"])):y("",!0)]),_:2},1024)):y("",!0),l($,null,{default:a(()=>[l(N,null,{default:a(()=>[z(c(u.label),1)]),_:2},1024),u.description?(i(),r(N,{key:0,caption:""},{default:a(()=>[z(c(u.description),1)]),_:2},1024)):y("",!0)]),_:2},1024),I?(i(),r($,{key:1,side:""},{default:a(()=>[l(M,{color:"primary",name:b(oe)},null,8,["name"])]),_:1})):y("",!0)]),_:2},1040),u?.border?(i(),r(se,{key:0})):y("",!0)]),"no-option":a(()=>[l(T,null,{default:a(()=>[l($,{class:"text-italic text-grey"},{default:a(()=>[z(c(e.noOptionsText||b(S)("error.dataNotfound")),1)]),_:1})]),_:1})]),after:a(()=>[D(e.$slots,"after")]),_:2},[e.multiple?{name:"selected-item",fn:a(n=>[l(ae,{square:"","icon-remove":b(E),removable:e.clearable,onRemove:u=>n.removeAtIndex(n.index),color:b(k)?"grey-9":"grey-3"},{default:a(()=>[n.opt?.avatar?(i(),r(R,{key:0,"fetch-image":e.fetchImage,src:n.opt.avatar,size:"20px"},null,8,["fetch-image","src"])):n.opt?.icon?(i(),r(le,{key:1,color:"primary","text-color":"white"},{default:a(()=>[l(M,{name:n.opt.icon},null,8,["name"])]),_:2},1024)):y("",!0),z(" "+c(n.opt.label),1)]),_:2},1032,["icon-remove","removable","onRemove","color"])]),key:"0"}:void 0,e.clearable?{name:"append",fn:a(()=>[v.value?(i(),r(M,{key:0,class:"cursor-pointer",name:b(E),onClick:s[0]||(s[0]=te(n=>e.multiple?v.value=[]:v.value=null,["stop","prevent"]))},null,8,["name"])):y("",!0)]),key:"1"}:void 0]),1040,["modelValue","label","dense","outlined","filled","option-value","option-label","loading","use-chips","multiple","readonly","use-input","options","input-debounce","rules","dropdown-icon"]))}}),he=O({__name:"BaseSelectAlt",props:U({items:{},label:{},optionValue:{default:"value"},optionLabel:{default:"label"},dense:{type:Boolean,default:!0},outlined:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(m){const{t:L}=Q(),k=G(m,"modelValue");return(p,V)=>(i(),r(W,J(p.$attrs,{modelValue:k.value,"onUpdate:modelValue":V[0]||(V[0]=S=>k.value=S),label:p.label,dense:p.dense,outlined:p.outlined,options:p.items,"option-value":p.optionValue,"option-label":p.optionLabel,"emit-value":"","map-options":"","dropdown-icon":b(K),multiple:p.multiple}),{"no-option":a(()=>[l(T,null,{default:a(()=>[l($,{class:"text-italic text-grey"},{default:a(()=>[z(c(b(L)("error.dataNotfound")),1)]),_:1})]),_:1})]),_:1},16,["modelValue","label","dense","outlined","options","option-value","option-label","dropdown-icon","multiple"]))}}),we={class:"row"},Se={class:"col-12 col-md-4 q-pa-md"},Be={class:"col-12 col-md-4 q-pa-md"},ke={class:"col-12 col-md-4 q-pa-md"},Ce={class:"col-12 col-md-4 q-pa-md"},Me={class:"col-12 col-md-4 q-pa-md"},ze={class:"text-h5 q-my-sm"},Le={class:"row"},Fe={class:"col-12 col-md-6"},$e={class:"col-12 col-md-6 q-px-md"},qe={class:"text-h5 q-my-sm"},_e=O({__name:"select",setup(m){const{t:L}=Q(),{setTitle:k}=ve();k(`Select | ${L("app.name")}`);const p=f(),V=f(),S=f([]),v=f(),g=f([]),h=f(!1);f(!1);const B=f([]),C=f(!1),w=f([{label:"api_client_list",value:1}]),e=[{label:"Google",value:1,description:"Fox",icon:de},{label:"Facebook",value:2,icon:re},{label:"Twitter",value:3,icon:me},{label:"Apple",value:4,icon:pe},{label:"Oracle",value:5,icon:ce}],s=[{label:"Cody Fisher",value:6,description:"Fisher",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg"},{label:"Robert Fox",value:7,description:"Fox",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg"},{label:"Esther Howard",value:8,description:"Howard",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg"},{label:"Darlene Robertson",value:9,description:"Robertson",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg"},{label:"Ralph Edwards",value:10,description:"Edwards",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png"}],n=[{name:"Cody Fisher",id:1},{name:"Robert Fox",id:2},{name:"Esther Howard",id:3},{name:"Darlene Robertson",id:4},{name:"Ralph Edwards",id:5}],u=[{label:"Users",children:s},{label:"Other",children:e},{label:"test",description:"Just test",value:55}],I=(q,t)=>{console.log("onLazyFilter",q),setTimeout(()=>{t(()=>{for(let o=0;o<30;o++)w.value.push({label:`Label ${w.value.length+1}`,value:w.value.length+1})})},2e3)},Y=(q,t)=>{console.log("onScroll",q,t),h.value=!0,setTimeout(()=>{for(let o=0;o<30;o++)w.value.push({label:`Label ${w.value.length+1}`,value:w.value.length+1});h.value=!1},1500)};return(q,t)=>(i(),r(ge,null,{default:a(()=>[l(fe,{title:"Select"},{default:a(()=>[l(ue,null,{default:a(()=>[d("div",we,[d("div",Se,[l(F,{title:"Single Select"}),l(A,{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=o=>p.value=o),required:"","can-filter":"",clearable:"",items:e,dense:"",multiple:!1,label:"Select Single"},null,8,["modelValue"]),d("p",null,"simpleModel : "+c(p.value),1)]),d("div",Be,[l(F,{title:"Single Avatar Select"}),l(A,{modelValue:v.value,"onUpdate:modelValue":t[1]||(t[1]=o=>v.value=o),"can-filter":"",clearable:"",items:s,dense:"",multiple:!1,label:"Select Multiple"},null,8,["modelValue"]),d("p",null,"singleModel2 : "+c(v.value),1)]),d("div",ke,[l(F,{title:"Multiple Select"}),l(A,{modelValue:S.value,"onUpdate:modelValue":t[2]||(t[2]=o=>S.value=o),"can-filter":"",clearable:"",items:s,dense:"","use-chips":"",multiple:"",label:"Select Multiple"},null,8,["modelValue"]),d("p",null,"multipleModel : "+c(S.value),1)]),d("div",Ce,[l(F,{title:"Select Alt"}),l(he,{modelValue:g.value,"onUpdate:modelValue":t[3]||(t[3]=o=>g.value=o),items:n,multiple:"",dense:"",label:"Select Any","option-label":"name","option-value":"id"},null,8,["modelValue"]),d("p",null,"multipleAnyModel : "+c(g.value),1)]),d("div",Me,[l(F,{title:"Lazy loading, Virtual Scroller"}),l(A,{modelValue:V.value,"onUpdate:modelValue":t[4]||(t[4]=o=>V.value=o),"can-filter":"",clearable:"",items:w.value,dense:"",multiple:!1,lazy:"","input-debounce":300,"lazy-loading":h.value,label:"Select lazy Single","no-options-text":"Type for search",onOnFilter:I,onOnScroll:Y},null,8,["modelValue","items","lazy-loading"]),d("p",null,"simpleModel : "+c(V.value),1)])]),d("div",ze,"Command palette "+c(B.value),1),d("div",Le,[d("div",Fe,[l(X,{modelValue:B.value,"onUpdate:modelValue":t[5]||(t[5]=o=>B.value=o),multiple:"",items:u},null,8,["modelValue"])]),d("div",$e,[d("div",qe,"Command palette dialog "+c(B.value),1),l(H,{outline:"",label:"Open Command palette dialog",onClick:t[6]||(t[6]=o=>C.value=!0)})])])]),_:1})]),_:1}),l(be,{modelValue:C.value,"onUpdate:modelValue":t[9]||(t[9]=o=>C.value=o),padding:!1,"show-toolbar":!1,"dialog-style":"width: 756px; max-width: 80vw;"},{default:a(()=>[l(X,{modelValue:B.value,"onUpdate:modelValue":t[8]||(t[8]=o=>B.value=o),bordered:!1,class:"q-pt-sm",multiple:"",items:u},{inputAppend:a(()=>[l(H,{flat:"",round:"",icon:b(E),onClick:t[7]||(t[7]=o=>C.value=!1)},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}))}});export{_e as default};
