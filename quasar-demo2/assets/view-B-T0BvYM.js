const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AppResult-BTlr4CXi.js","assets/index-BzL-CGt2.js","assets/index-HNifYG8Q.css"])))=>i.map(i=>d[i]);
import{d as oe,a as ae,u as de,r as I,T as re,f as A,a2 as se,aH as ce,aI as ue,bF as me,bz as fe,V as _e,Y as pe,Z as ve,_ as ye,B as c,C as _,E as n,L as be,F as l,I as v,$ as G,N as g,aa as h,O as r,R as s,M as z,aK as E,ag as Pe,am as M,b9 as X,aW as u,H as V,aX as C,aq as L,ab as S,ac as f,ai as w,af as ke,bG as T}from"./index-BzL-CGt2.js";import{u as Ae,C as ge}from"./CrudApiForm-CFOM3GBL.js";import{u as he}from"./useAppMeta-2NCT7RDI.js";import{u as Ee}from"./useValidation-B8t9Tu1X.js";import{u as Ve}from"./useAxios-BH7JSkg6.js";import Ce from"./Togle-C81ul9o0.js";import"./Button-raohwBvU.js";import"./use-meta-BD084KRx.js";const Le=()=>{const{callAxios:b}=Ve();return{findAll:async y=>await b({API:`/api/permission${y}`,method:"GET"}),userAcl:async(y=0)=>await b({API:`/api/permission/userAcl?getMenuList=${y}`,method:"GET"}),findAllBackendPermission:async()=>await b({API:"/api/permission/findAllBackendPermission",method:"GET"}),findAllFrontendPermission:async()=>await b({API:"/api/permission/findAllFrontendPermission",method:"GET"})}},Se=oe({__name:"view",setup(b,{expose:o}){o();const B=pe(()=>ve(()=>import("./AppResult-BTlr4CXi.js"),__vite__mapDeps([0,1,2]))),{t:e}=ae(),{required:F}=Ee(),{appLoading:y}=de(),{findAllBackendPermission:t,findAllFrontendPermission:m}=Le(),a=I([]),x=I(""),Q=I(!1),D={id:null,name:"",nameEn:null,active:!0,frontEnd:!1,companySelected:0,selectdPermissions:[]},{crudAction:O,onBack:H,loading:j,onSubmit:K,crudEntity:P,onDelete:W,preFectData:U,crudName:Y}=Ae({crudName:"role",apiEndpoint:"/api",fectchDataOnLoad:!1,backToPreviousPath:!0},D);y(),he({additionalTitle:e("crudAction."+O.value)}),re(()=>{N()});const N=async()=>{const i=await t();i&&(a.value=i);const d=await m();d&&a.value.push(...d),await U(),y(!1)},k=A(()=>{const i=a.value,d=x.value?x.value.toLowerCase().trim():null;return d?i.filter(p=>p.description&&p.description.toString().toLowerCase().includes(d)):i}),Z=A(()=>k.value.filter(i=>i.operationType===1&&!i.frontEnd)),J=A(()=>k.value.filter(i=>i.operationType===2&&!i.frontEnd)),$=A(()=>k.value.filter(i=>i.operationType===3&&!i.frontEnd)),ee=A(()=>k.value.filter(i=>i.frontEnd)),le=i=>{const d=a.value.find(p=>p.id===i);return d&&d.description?d.description:"unknown"},ne=i=>{const d=a.value.find(p=>p.id===i);return d&&d.code?d.code:"unknown"},te=i=>{P.value&&P.value.selectdPermissions&&P.value.selectdPermissions.splice(i,1)},ie=()=>{q(Q.value)},q=i=>{if(P.value.selectdPermissions=[],i)for(let d=0;d<a.value.length;d++){const p=a.value[d];p&&P.value.selectdPermissions.push(p.id)}},R={AppResult:B,t:e,required:F,appLoading:y,findAllBackendPermission:t,findAllFrontendPermission:m,permissions:a,filterText:x,selectedAll:Q,entity:D,crudAction:O,onBack:H,loading:j,onSubmit:K,crudEntity:P,onDelete:W,preFectData:U,crudName:Y,onLoadData:N,filteredList:k,filteredCrudList:Z,filteredReportList:J,filteredOtherList:$,filteredFrontendList:ee,findDisplayPermissionById:le,findCodePermissionById:ne,removePermission:te,onCheckedAll:ie,updateSelectedAll:q,CrudApiForm:ge,FormTogle:Ce,get biPeople(){return se},get biCheck(){return ce},get biX(){return ue},get biSearch(){return me},get biShieldLock(){return fe},get biShieldCheck(){return _e}};return Object.defineProperty(R,"__isScriptSetup",{enumerable:!1,value:!0}),R}}),we={class:"row"},Te={class:"col-12 q-pa-md"},Be={class:"col-12 col-md-6 q-pa-md"},Fe={class:"col-12 col-md-6 q-pa-md"},xe={class:"row"},Ie={class:"col-12 col-md-6"},Qe={class:"q-px-md"},De={class:"col-12 col-md-6"},Oe={class:"q-px-md"};function Ue(b,o,B,e,F,y){return c(),_(be,{padding:""},{default:n(()=>[l(e.CrudApiForm,{icon:e.biPeople,title:e.t("model_role"),"crud-action":e.crudAction,"crud-name":e.crudName,loading:e.loading,onOnBack:e.onBack,onOnSubmit:e.onSubmit,onOnDelete:e.onDelete},{crudFromContent:n(()=>[v("div",we,[v("div",Te,[l(G,{readonly:e.loading,outlined:"",counter:"",maxlength:"125",modelValue:e.crudEntity.name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.crudEntity.name=t),label:e.t("model_role_name"),rules:[e.required]},{prepend:n(()=>[l(g,{name:e.biPeople},null,8,["name"])]),_:1},8,["readonly","modelValue","label","rules"])]),v("div",Be,[l(e.FormTogle,{label:e.t("base.enable"),modelValue:e.crudEntity.active,"onUpdate:modelValue":o[1]||(o[1]=t=>e.crudEntity.active=t)},null,8,["label","modelValue"])]),v("div",Fe,[l(e.FormTogle,{label:e.t("model_permission_frontEnd"),modelValue:e.crudEntity.frontEnd,"onUpdate:modelValue":o[2]||(o[2]=t=>e.crudEntity.frontEnd=t)},null,8,["label","modelValue"])])]),l(h),v("div",xe,[v("div",Ie,[v("div",Qe,[l(g,{name:e.biShieldLock,size:"sm",color:"negative"},null,8,["name"]),r(" "+s(e.t("model_permission")),1)]),l(z,null,{default:n(()=>[l(G,{rounded:"",filled:"",outlined:"",modelValue:e.filterText,"onUpdate:modelValue":o[4]||(o[4]=t=>e.filterText=t),label:e.t("base.search")},{prepend:n(()=>[l(E,{modelValue:e.selectedAll,"onUpdate:modelValue":o[3]||(o[3]=t=>e.selectedAll=t),onClick:e.onCheckedAll},{default:n(()=>[l(Pe,null,{default:n(()=>[r(s(e.selectedAll?e.t("base.deselectAll"):e.t("base.selectAll")),1)]),_:1})]),_:1},8,["modelValue"])]),append:n(()=>[l(g,{name:e.biSearch},null,8,["name"])]),_:1},8,["modelValue","label"]),l(M,{style:{height:"450px"}},{default:n(()=>[e.filteredList.length>0?(c(),_(X,{key:0,dense:""},{default:n(()=>[l(u,{header:""},{default:n(()=>[r(s(e.t("crudPermission")),1)]),_:1}),l(h,{spaced:""}),(c(!0),V(w,null,C(e.filteredCrudList,(t,m)=>L((c(),_(S,{key:m,tag:"label"},{default:n(()=>[l(f,{avatar:""},{default:n(()=>[l(E,{modelValue:e.crudEntity.selectdPermissions,"onUpdate:modelValue":o[5]||(o[5]=a=>e.crudEntity.selectdPermissions=a),val:t.id},null,8,["modelValue","val"])]),_:2},1024),l(f,null,{default:n(()=>[l(u,null,{default:n(()=>[r(s(t.description?t.description:"unknown"),1)]),_:2},1024),l(u,{caption:""},{default:n(()=>[r(s(t.code),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[T]])),128)),l(u,{header:""},{default:n(()=>[r(s(e.t("reportPermission")),1)]),_:1}),l(h,{spaced:""}),(c(!0),V(w,null,C(e.filteredReportList,(t,m)=>L((c(),_(S,{key:m,tag:"label"},{default:n(()=>[l(f,{avatar:""},{default:n(()=>[l(E,{modelValue:e.crudEntity.selectdPermissions,"onUpdate:modelValue":o[6]||(o[6]=a=>e.crudEntity.selectdPermissions=a),val:t.id},null,8,["modelValue","val"])]),_:2},1024),l(f,null,{default:n(()=>[l(u,null,{default:n(()=>[r(s(t.description?t.description:"unknown"),1)]),_:2},1024),l(u,{caption:""},{default:n(()=>[r(s(t.code),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[T]])),128)),l(u,{header:""},{default:n(()=>[r(s(e.t("otherPermission")),1)]),_:1}),l(h,{spaced:""}),(c(!0),V(w,null,C(e.filteredOtherList,(t,m)=>L((c(),_(S,{key:m,tag:"label"},{default:n(()=>[l(f,{avatar:""},{default:n(()=>[l(E,{modelValue:e.crudEntity.selectdPermissions,"onUpdate:modelValue":o[7]||(o[7]=a=>e.crudEntity.selectdPermissions=a),val:t.id},null,8,["modelValue","val"])]),_:2},1024),l(f,null,{default:n(()=>[l(u,null,{default:n(()=>[r(s(t.description?t.description:"unknown"),1)]),_:2},1024),l(u,{caption:""},{default:n(()=>[r(s(t.code),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[T]])),128)),l(u,{header:""},{default:n(()=>o[9]||(o[9]=[r("Frontend")])),_:1}),l(h,{spaced:""}),(c(!0),V(w,null,C(e.filteredFrontendList,(t,m)=>L((c(),_(S,{key:m,tag:"label"},{default:n(()=>[l(f,{avatar:""},{default:n(()=>[l(E,{modelValue:e.crudEntity.selectdPermissions,"onUpdate:modelValue":o[8]||(o[8]=a=>e.crudEntity.selectdPermissions=a),val:t.id},null,8,["modelValue","val"])]),_:2},1024),l(f,null,{default:n(()=>[l(u,null,{default:n(()=>[r(s(t.description?t.description:"unknown"),1)]),_:2},1024),l(u,{caption:""},{default:n(()=>[r(s(t.code),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[T]])),128))]),_:1})):(c(),_(e.AppResult,{key:1,status:"empty",description:e.t("error.dataNotfound")},null,8,["description"]))]),_:1})]),_:1})]),v("div",De,[v("div",Oe,[l(g,{color:"positive",name:e.biShieldCheck,size:"sm"},null,8,["name"]),r(" "+s(e.t("permissionGrant")),1)]),l(z,null,{default:n(()=>[l(M,{style:{height:"450px"}},{default:n(()=>[e.crudEntity.selectdPermissions.length>0?(c(),_(X,{key:0,dense:""},{default:n(()=>[(c(!0),V(w,null,C(e.crudEntity.selectdPermissions,(t,m)=>L((c(),_(S,{key:m},{default:n(()=>[l(f,{avatar:""},{default:n(()=>[l(g,{color:"primary",name:e.biCheck},null,8,["name"])]),_:1}),l(f,null,{default:n(()=>[l(u,null,{default:n(()=>[r(s(e.findDisplayPermissionById(t)),1)]),_:2},1024),l(u,{caption:""},{default:n(()=>[r(s(e.findCodePermissionById(t)),1)]),_:2},1024)]),_:2},1024),l(f,{side:""},{default:n(()=>[l(ke,{flat:"",round:"",color:"negative",onClick:a=>e.removePermission(m),icon:e.biX},null,8,["onClick","icon"])]),_:2},1024)]),_:2},1024)),[[T]])),128))]),_:1})):(c(),_(e.AppResult,{key:1,status:"empty","icon-size":"55px",description:e.t("permissionNotFound")},null,8,["description"]))]),_:1})]),_:1})])])]),_:1},8,["icon","title","crud-action","crud-name","loading","onOnBack","onOnSubmit","onOnDelete"])]),_:1})}const je=ye(Se,[["render",Ue],["__file","view.vue"]]);export{je as default};
