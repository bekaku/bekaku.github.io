import{l as E,ad as R,u as D,bq as Z,ae as J,r as y,aM as x,c as _,m as r,n as i,c8 as W,Y as X,a5 as f,c9 as Y,c0 as ee,w as a,x as l,a0 as g,W as z,aW as le,av as M,X as c,ar as ae,J as U,bR as oe,dw as te,v as N,at as $,as as Q,au as O,af as ne,p as ie,q as se,bf as ue,V as P,ah as j,aA as de,t as d,eb as re,ec as me,ed as pe,ee as ce,ef as ve}from"./index-BUKV_9O1.js";import{u as fe}from"./useAppMeta-eA7SJycm.js";import{B as H}from"./BaseButton-CaTrqY0C.js";import{B as be,a as L}from"./BaseCard-CVr34Mor.js";import{_ as G}from"./BaseCommandPalette.vue_vue_type_script_setup_true_lang-DFW5yRH9.js";import{_ as ge}from"./BaseDialog.vue_vue_type_script_setup_true_lang-sVyws3dz.js";import{_ as ye}from"./BasePage.vue_vue_type_script_setup_true_lang-C9gXlWUq.js";import{u as Ve}from"./useValidation-CudGxf_T.js";import{_ as he}from"./SkeletonItem.vue_vue_type_script_setup_true_lang-C9i1fiUb.js";import{B as T}from"./BaseAvatar-YhefbKXS.js";import"./use-meta-BfsM_rxZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BaseInput.vue_vue_type_script_setup_true_lang-DONewUfx.js";import"./BaseSpinner-Cd9dyqoV.js";import"./BaseScrollArea.vue_vue_type_script_setup_true_lang-CGGch_uA.js";import"./BaseLabelValueItem.vue_vue_type_script_setup_true_lang-C6tqZTAA.js";import"./BaseResult.vue_vue_type_script_setup_true_lang-YQvm5QEs.js";import"./QBar-C-cge2z0.js";import"./Ellipsis-CZtz479i.js";import"./FileManagerService-DtMSDvzq.js";import"./useAxios-578BH76m.js";const A=E({__name:"BaseSelect",props:R({items:{},label:{},optionValue:{default:"value"},optionLabel:{default:"label"},readonly:{type:Boolean,default:!1},dense:{type:Boolean,default:!0},outlined:{type:Boolean,default:!0},filled:{type:Boolean},canFilter:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0},required:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},useChips:{type:Boolean,default:!1},icon:{},loading:{type:Boolean,default:!1},fetchImage:{type:Boolean,default:!1},inputDebounce:{default:0},lazy:{type:Boolean,default:!1},noOptionsText:{},lazyLoading:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:R(["on-filter","on-scroll"],["update:modelValue"]),setup(p,{emit:F}){const{requiredSelect:k}=Ve(),m=F,{t:V}=D(),{isDark:B}=Z(),v=J(p,"modelValue"),b=y([...p.items]);x(()=>{b.value=p.items});const h=_(()=>{if(!(p.multiple||!v.value))return p.items.find(e=>e.value==v.value)}),S=(e,s)=>{if(p.lazy)C(e,s);else{if(e===""){s(()=>{b.value=p.items});return}s(()=>{const n=e.toLowerCase();b.value=p.items.filter(u=>u.label&&u.label.toLowerCase().includes(n))})}},C=(e,s)=>{if(e===""){s(()=>{b.value=p.items});return}m("on-filter",e,s)},w=({to:e,ref:s})=>{if(!p.lazy)return;const n=b.value.length-1;p.loading!==!0&&e===n&&m("on-scroll",e,s)};return(e,s)=>e.loading?(i(),r(he,{key:0,show:"",items:1,"show-header":!1})):(i(),r(W,X({key:1},e.$attrs,{modelValue:v.value,"onUpdate:modelValue":s[1]||(s[1]=n=>v.value=n),label:e.label,dense:e.dense,outlined:e.outlined,filled:e.filled,"option-value":e.optionValue,"option-label":e.optionLabel,loading:e.lazyLoading,"ottom-slots":"","emit-value":"","map-options":"","use-chips":e.useChips,multiple:e.multiple,readonly:e.readonly,"use-input":e.canFilter,options:b.value,"input-debounce":e.inputDebounce,rules:[e.required?f(k):{}],"dropdown-icon":f(Y),behavior:"menu",onFilter:S,onVirtualScroll:w}),ee({prepend:a(()=>[N(e.$slots,"prepend",{},()=>[h.value!==void 0?(i(),P(j,{key:0},[h.value.avatar?(i(),r(T,{key:0,"fetch-image":e.fetchImage,src:h.value.avatar},null,8,["fetch-image","src"])):h.value.icon?(i(),r(M,{key:1,name:h.value.icon},null,8,["name"])):g("",!0)],64)):e.icon?(i(),r(M,{key:1,name:e.icon},null,8,["name"])):g("",!0)])]),hint:a(()=>[e.multiple?(i(),P(j,{key:0},[z(c(f(V)("base.canChooseMoreThen1")),1)],64)):g("",!0)]),option:a(({itemProps:n,opt:u,selected:I})=>[l(Q,ie(se(n)),{default:a(()=>[u.avatar||u.icon?(i(),r($,{key:0,avatar:""},{default:a(()=>[u.avatar?(i(),r(T,{key:0,"fetch-image":e.fetchImage,src:u.avatar},null,8,["fetch-image","src"])):u.icon?(i(),r(M,{key:1,name:u.icon},null,8,["name"])):g("",!0)]),_:2},1024)):g("",!0),l($,null,{default:a(()=>[l(O,null,{default:a(()=>[z(c(u.label),1)]),_:2},1024),u.description?(i(),r(O,{key:0,caption:""},{default:a(()=>[z(c(u.description),1)]),_:2},1024)):g("",!0)]),_:2},1024),I?(i(),r($,{key:1,side:""},{default:a(()=>[l(M,{color:"primary",name:f(ne)},null,8,["name"])]),_:1})):g("",!0)]),_:2},1040),u?.border?(i(),r(ue,{key:0})):g("",!0)]),"no-option":a(()=>[l(Q,null,{default:a(()=>[l($,{class:"text-italic text-grey"},{default:a(()=>[z(c(e.noOptionsText||f(V)("error.dataNotfound")),1)]),_:1})]),_:1})]),after:a(()=>[N(e.$slots,"after")]),_:2},[e.multiple?{name:"selected-item",fn:a(n=>[l(oe,{square:"","icon-remove":f(U),removable:e.clearable,style:ae({backgroundColor:f(B)?"var(--color-zinc-700)":"var(--color-zinc-100)"}),onRemove:u=>n.removeAtIndex(n.index)},{default:a(()=>[n.opt?.avatar?(i(),r(T,{key:0,"fetch-image":e.fetchImage,src:n.opt.avatar,size:"20px"},null,8,["fetch-image","src"])):n.opt?.icon?(i(),r(le,{key:1,color:"primary","text-color":"white"},{default:a(()=>[l(M,{name:n.opt.icon},null,8,["name"])]),_:2},1024)):g("",!0),z(" "+c(n.opt.label),1)]),_:2},1032,["icon-remove","removable","style","onRemove"])]),key:"0"}:void 0,e.clearable?{name:"append",fn:a(()=>[v.value?(i(),r(M,{key:0,class:"cursor-pointer",name:f(U),onClick:s[0]||(s[0]=te(n=>e.multiple?v.value=[]:v.value=null,["stop","prevent"]))},null,8,["name"])):g("",!0)]),key:"1"}:void 0]),1040,["modelValue","label","dense","outlined","filled","option-value","option-label","loading","use-chips","multiple","readonly","use-input","options","input-debounce","rules","dropdown-icon"]))}}),we=E({__name:"BaseSelectAlt",props:R({items:{},label:{},optionValue:{default:"value"},optionLabel:{default:"label"},dense:{type:Boolean,default:!0},outlined:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(p){const{t:F}=D(),k=J(p,"modelValue");return(m,V)=>(i(),r(W,X(m.$attrs,{modelValue:k.value,"onUpdate:modelValue":V[0]||(V[0]=B=>k.value=B),label:m.label,dense:m.dense,outlined:m.outlined,options:m.items,"option-value":m.optionValue,"option-label":m.optionLabel,"emit-value":"","map-options":"","dropdown-icon":f(Y),multiple:m.multiple,behavior:"menu"}),{"no-option":a(()=>[l(Q,null,{default:a(()=>[l($,{class:"text-italic text-grey"},{default:a(()=>[z(c(f(F)("error.dataNotfound")),1)]),_:1})]),_:1})]),_:1},16,["modelValue","label","dense","outlined","options","option-value","option-label","dropdown-icon","multiple"]))}}),Se={class:"row"},Be={class:"col-12 col-md-4 q-pa-md"},ke={class:"col-12 col-md-4 q-pa-md"},Ce={class:"col-12 col-md-4 q-pa-md"},Me={class:"col-12 col-md-4 q-pa-md"},ze={class:"col-12 col-md-4 q-pa-md"},Fe={class:"text-h5 q-my-sm"},Le={class:"row"},$e={class:"col-12 col-md-6"},qe={class:"col-12 col-md-6 q-px-md"},Ae={class:"text-h5 q-my-sm"},el=E({__name:"select",setup(p){const{t:F}=D(),{setTitle:k}=fe();k(`Select | ${F("app.name")}`);const m=y(),V=y(),B=y([]),v=y(),b=y([]),h=y(!1),S=y([]),C=y(!1),w=y([{label:"api_client_list",value:1}]),e=[{label:"Google",value:1,description:"Fox",icon:re},{label:"Facebook",value:2,icon:me},{label:"Twitter",value:3,icon:pe},{label:"Apple",value:4,icon:ce},{label:"Microsoft",value:5,icon:ve}],s=[{label:"Cody Fisher",value:6,description:"Fisher",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg"},{label:"Robert Fox",value:7,description:"Fox",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg"},{label:"Esther Howard",value:8,description:"Howard",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg"},{label:"Darlene Robertson",value:9,description:"Robertson",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg"},{label:"Ralph Edwards",value:10,description:"Edwards",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png"}],n=[{name:"Cody Fisher",id:1},{name:"Robert Fox",id:2},{name:"Esther Howard",id:3},{name:"Darlene Robertson",id:4},{name:"Ralph Edwards",id:5}],u=[{label:"Users",children:s},{label:"Other",children:e},{label:"test",description:"Just test",value:55}],I=(q,o)=>{console.log("onLazyFilter",q),setTimeout(()=>{o(()=>{for(let t=0;t<30;t++)w.value.push({label:`Label ${w.value.length+1}`,value:w.value.length+1})})},2e3)},K=(q,o)=>{console.log("onScroll",q,o),h.value=!0,setTimeout(()=>{for(let t=0;t<30;t++)w.value.push({label:`Label ${w.value.length+1}`,value:w.value.length+1});h.value=!1},1500)};return(q,o)=>(i(),r(ye,null,{default:a(()=>[l(be,{title:"Select"},{default:a(()=>[l(de,null,{default:a(()=>[d("div",Se,[d("div",Be,[l(L,{title:"Single Select"}),l(A,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=t=>m.value=t),required:"","can-filter":"",clearable:"",items:e,dense:"",multiple:!1,label:"Select Single"},null,8,["modelValue"]),d("p",null,"simpleModel : "+c(m.value),1)]),d("div",ke,[l(L,{title:"Single Avatar Select"}),l(A,{modelValue:v.value,"onUpdate:modelValue":o[1]||(o[1]=t=>v.value=t),"can-filter":"",clearable:"",items:s,dense:"",multiple:!1,label:"Select user"},null,8,["modelValue"]),d("p",null,"singleModel2 : "+c(v.value),1)]),d("div",Ce,[l(L,{title:"Multiple Select"}),l(A,{modelValue:B.value,"onUpdate:modelValue":o[2]||(o[2]=t=>B.value=t),"can-filter":"",clearable:"",items:s,dense:"","use-chips":"",multiple:"",label:"Select Multiple"},null,8,["modelValue"]),d("p",null,"multipleModel : "+c(B.value),1)]),d("div",Me,[l(L,{title:"Select Alt"}),l(we,{modelValue:b.value,"onUpdate:modelValue":o[3]||(o[3]=t=>b.value=t),items:n,multiple:"",dense:"",label:"Select Any","option-label":"name","option-value":"id"},null,8,["modelValue"]),d("p",null,"multipleAnyModel : "+c(b.value),1)]),d("div",ze,[l(L,{title:"Lazy loading, Virtual Scroller"}),l(A,{modelValue:V.value,"onUpdate:modelValue":o[4]||(o[4]=t=>V.value=t),"can-filter":"",clearable:"",items:w.value,dense:"",multiple:!1,lazy:"","input-debounce":300,"lazy-loading":h.value,label:"Select lazy Single","no-options-text":"Type for search",onOnFilter:I,onOnScroll:K},null,8,["modelValue","items","lazy-loading"]),d("p",null,"simpleModel : "+c(V.value),1)])]),d("div",Fe,"Command palette "+c(S.value),1),d("div",Le,[d("div",$e,[l(G,{modelValue:S.value,"onUpdate:modelValue":o[5]||(o[5]=t=>S.value=t),multiple:"",items:u},null,8,["modelValue"])]),d("div",qe,[d("div",Ae,"Command palette dialog "+c(S.value),1),l(H,{outline:"",label:"Open Command palette dialog",onClick:o[6]||(o[6]=t=>C.value=!0)})])])]),_:1})]),_:1}),l(ge,{modelValue:C.value,"onUpdate:modelValue":o[9]||(o[9]=t=>C.value=t),padding:!1,"show-toolbar":!1,"dialog-style":"width: 756px; max-width: 80vw;"},{default:a(()=>[l(G,{modelValue:S.value,"onUpdate:modelValue":o[8]||(o[8]=t=>S.value=t),bordered:!1,class:"q-pt-sm",multiple:"",items:u},{inputAppend:a(()=>[l(H,{flat:"",round:"",icon:f(U),onClick:o[7]||(o[7]=t=>C.value=!1)},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}))}});export{el as default};
