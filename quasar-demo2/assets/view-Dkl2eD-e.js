const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Togle-C81ul9o0.js","assets/index-BzL-CGt2.js","assets/index-HNifYG8Q.css"])))=>i.map(i=>d[i]);
import{d as v,a as g,X as k,V as C,Y as T,Z as O,_ as P,B as S,C as x,E as d,L as A,F as l,I as a,$ as u,N as s,a0 as t}from"./index-BzL-CGt2.js";import{u as B,C as F}from"./CrudApiForm-CFOM3GBL.js";import{u as q}from"./useAppMeta-2NCT7RDI.js";import{u as h}from"./useValidation-B8t9Tu1X.js";import"./useAxios-BH7JSkg6.js";import"./Button-raohwBvU.js";import"./use-meta-BD084KRx.js";const D=v({__name:"view",setup(p,{expose:o}){o();const r=T(()=>O(()=>import("./Togle-C81ul9o0.js"),__vite__mapDeps([0,1,2]))),{t:e}=g(),{required:m}=h(),i={id:null,code:"",remark:null,description:null,operationType:1,frontEnd:!1},{crudAction:n,onBack:_,loading:y,onSubmit:b,crudEntity:V,onDelete:f,crudName:E}=B({crudName:"permission",apiEndpoint:"/api",fectchDataOnLoad:!0,backToPreviousPath:!0},i);q({additionalTitle:e("crudAction."+n.value)});const c={FormTogle:r,t:e,required:m,entity:i,crudAction:n,onBack:_,loading:y,onSubmit:b,crudEntity:V,onDelete:f,crudName:E,CrudApiForm:F,get biPencil(){return k},get biShieldCheck(){return C}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),N={class:"row"},U={class:"col-12 col-md-6 q-pa-md"},w={class:"col-12 col-md-6 q-pa-md"},L={class:"col-12 col-md-6 q-pa-md"},I={class:"col-12 col-md-6 q-pa-md"};function Q(p,o,r,e,m,i){return S(),x(A,{padding:""},{default:d(()=>[l(e.CrudApiForm,{icon:e.biShieldCheck,title:e.t("model_permission"),"crud-name":e.crudName,"crud-action":e.crudAction,loading:e.loading,onOnBack:e.onBack,onOnSubmit:e.onSubmit,onOnDelete:e.onDelete},{crudFromContent:d(()=>[a("div",N,[a("div",U,[l(u,{readonly:e.loading,outlined:"",counter:"",maxlength:"125",modelValue:e.crudEntity.code,"onUpdate:modelValue":o[0]||(o[0]=n=>e.crudEntity.code=n),label:e.t("model_permission_name"),rules:[e.required]},{prepend:d(()=>[l(s,{name:e.biShieldCheck},null,8,["name"])]),_:1},8,["readonly","modelValue","label","rules"])]),a("div",w,[l(u,{readonly:e.loading,outlined:"",counter:"",maxlength:"255",modelValue:e.crudEntity.remark,"onUpdate:modelValue":o[1]||(o[1]=n=>e.crudEntity.remark=n),label:e.t("model_permission_description")},{prepend:d(()=>[l(s,{name:e.biPencil},null,8,["name"])]),_:1},8,["readonly","modelValue","label"])]),a("div",L,[l(e.FormTogle,{useLabelTitle:"",label:"Frontend",modelValue:e.crudEntity.frontEnd,"onUpdate:modelValue":o[2]||(o[2]=n=>e.crudEntity.frontEnd=n)},null,8,["modelValue"])]),a("div",I,[o[6]||(o[6]=a("div",{class:"q-px-sm"},"Permission type",-1)),l(t,{modelValue:e.crudEntity.operationType,"onUpdate:modelValue":o[3]||(o[3]=n=>e.crudEntity.operationType=n),val:1,label:"Crud"},null,8,["modelValue"]),l(t,{modelValue:e.crudEntity.operationType,"onUpdate:modelValue":o[4]||(o[4]=n=>e.crudEntity.operationType=n),val:2,label:"Report"},null,8,["modelValue"]),l(t,{modelValue:e.crudEntity.operationType,"onUpdate:modelValue":o[5]||(o[5]=n=>e.crudEntity.operationType=n),val:3,label:"Other"},null,8,["modelValue"])])])]),_:1},8,["icon","title","crud-name","crud-action","loading","onOnBack","onOnSubmit","onOnDelete"])]),_:1})}const G=P(D,[["render",Q],["__file","view.vue"]]);export{G as default};
