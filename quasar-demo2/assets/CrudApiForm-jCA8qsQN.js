import{u as p}from"./useAxios-C4yiweSz.js";import{u as x,a as q,r as v,bH as M,bI as z,bJ as J,T as K,bK as u,l as h,bL as N,bM as U,bN as Z,b4 as $,bO as ee,aQ as ae,d as te,aP as ne,bm as ie,bj as re,a6 as se,X as oe,_ as ue,B as b,C as k,E as l,F as c,ak as P,a7 as le,ag as ce,O as L,R as H,ah as w,a8 as de,H as me,ai as fe,N as ve,M as V,aa as be,bh as Pe,S as ge}from"./index-DnUFBeQi.js";import{U as ye}from"./Button-Cx6M-ULx.js";const Be=(e,i)=>{const{appGoto:a,getParam:t,appToast:r,appConfirm:E,isDevMode:d,getPreviousPath:A}=x(),{callAxios:C}=p(),{t:B}=q(),T=v(A()),g=v(!1),y=v(t(M)!=null?z(t(M)):0),m=v(Object.assign({},i)),S=v(e.requestEntityName?e.requestEntityName:void 0),s=v(t(J)),F=v(e.fetchDataLink);K(async()=>{e.fectchDataOnLoad&&D()});const D=async()=>s.value==u.VIEW||s.value==u.COPY?(await _(),s.value==u.COPY&&(m.value.id=null),new Promise(n=>{n(!0)})):new Promise(n=>{n(!0)}),W=h(()=>F.value?F.value:`${e.apiEndpoint}/${N(e.crudName?e.crudName:"")}/${y.value}`),_=async()=>{if(!y.value&&(!e.apiEndpoint||!e.crudName))return new Promise(f=>{f(!1)});g.value=!0;const n=W.value,o=await C({API:n,method:"GET"});return g.value=!1,!U(o)&&!Z(o)&&(m.value=o),new Promise(f=>{f(!0)})},j=()=>{m.value=Object.assign({},i)},I=()=>{let n="";e.backToPreviousPath!=null&&e.backToPreviousPath&&(n=T.value);const o=e.basePath||ee;n||(n=e.backLink?e.backLink:T.value?T.value:e.crudName?`${o?"/"+o:""}/${e.crudName.replaceAll("_","-")}`:""),n&&a(n)},R=h(()=>{if(!(!e.apiEndpoint||!e.crudName))return s.value===u.VIEW?e.actionPut?e.actionPut:e.apiEndpoint+"/"+N(e.crudName)+(e.methodPutIncludeId===void 0||e.methodPutIncludeId===!0?"/"+m.value.id:""):e.actionPost?e.actionPost:e.apiEndpoint+"/"+N(e.crudName)}),Y=async()=>{if(!e.apiEndpoint||!e.crudName)return;const n={};n[S.value?S.value:`${N(e.crudName)}`]=m.value;const o=R.value;if(!o)return;d(),g.value=!0;const f=await C({API:o,method:s.value===u.VIEW?"PUT":"POST",body:n});if(g.value=!1,!U(f))return f&&f.id&&(s.value===u.NEW||s.value===u.COPY?O(B("success.insertSuccesfull")):s.value===u.VIEW&&O(B("success.updateSuccesfull"))),e.preventRedirectToList||I(),new Promise(X=>{X(!0)})},O=n=>{r(n,{multiLine:!1,html:!0,type:"positive",timeout:3*1e3,position:"bottom",actions:[{icon:ae,color:"white"}]})},Q=h(()=>e.actionDelete?e.actionDelete:e.apiEndpoint&&e.crudName?`${e.apiEndpoint}/${N(e.crudName)}/${y.value}`:""),G=async()=>{if(s.value!=u.VIEW&&!m.value&&y.value==0&&!Q.value)return;await E(B("app.monogram"),B("base.deleteConfirm"))&&(await C({API:Q.value,method:"DELETE"}),I())};return $(()=>{j()}),{loading:g,...{onBack:I,onSubmit:Y,onDelete:G,fetchDataById:_,preFectData:D},crudId:y,crudAction:s,crudEntity:m,crudName:e.crudName,requestEntityName:S,fetchDataLink:F}},Ne=te({__name:"CrudApiForm",props:{crudName:{type:String,default:""},managePermission:{type:String,default:""},listPermission:{type:String,default:""},title:{type:String,default:""},icon:{type:String,default:ne},loading:{type:Boolean,default:!1},showBack:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},showEdit:{type:Boolean,default:!0},crudAction:{type:String,default:void 0},isFrontend:{type:Boolean,default:!1},showActionText:{type:Boolean,default:!0}},emits:["on-back","on-submit","on-delete"],setup(e,{expose:i}){i();const a=e,{t}=q(),r=ie(),E=h(()=>a.isFrontend?a.managePermission?r.isHaveFrontendPermission(a.managePermission):a.crudName?r.isHaveFrontendPermission(`${a.crudName}_manage`):!0:a.managePermission?r.isHavePermission(a.managePermission):a.crudName?r.isHavePermission(`${a.crudName}_manage`):!0),d=h(()=>a.isFrontend?a.listPermission?r.isHaveFrontendPermission(a.listPermission):a.crudName?r.isHaveFrontendPermission(`${a.crudName}_list`):!0:a.listPermission?r.isHavePermission(a.listPermission):a.crudName?r.isHavePermission(`${a.crudName}_list`):!0),A={props:a,t,permissionStore:r,isHaveManagePermission:E,isHaveListPermission:d,UiButton:ye,get biArrowLeft(){return re},get biTrash(){return se},get biPencil(){return oe}};return Object.defineProperty(A,"__isScriptSetup",{enumerable:!1,value:!0}),A}});function ke(e,i,a,t,r,E){return b(),k(ge,{flat:"",bordered:"",class:"wee-container-responsive-center"},{default:l(()=>[c(V,null,{default:l(()=>[P(e.$slots,"crudFromToolbar",{},()=>[c(le,null,{default:l(()=>[t.isHaveListPermission&&a.showBack?(b(),k(t.UiButton,{key:0,onClick:i[0]||(i[0]=d=>e.$emit("on-back")),flat:"",round:"",icon:t.biArrowLeft},{default:l(()=>[c(ce,null,{default:l(()=>[L(H(t.t("base.back")),1)]),_:1})]),_:1},8,["icon"])):w("",!0),c(de,null,{default:l(()=>[a.crudAction&&a.showActionText?(b(),me(fe,{key:0},[L(H(a.crudAction==="new"?t.t("base.addNew"):a.crudAction==="view"?t.t("base.edit"):t.t("base.copy")),1)],64)):w("",!0),L(" "+H(a.title),1)]),_:1}),P(e.$slots,"toolbarAction",{},()=>[c(ve,{size:"md",name:a.icon},null,8,["name"])])]),_:3})])]),_:3}),P(e.$slots,"crudFrom",{},()=>[c(Pe,{onSubmit:i[3]||(i[3]=d=>e.$emit("on-submit")),class:"q-gutter-md"},{default:l(()=>[P(e.$slots,"crudFromContent"),P(e.$slots,"crudAction",{},()=>[c(be),c(V,{align:"center",class:"q-gutter-sm"},{default:l(()=>[t.isHaveManagePermission&&a.showEdit?(b(),k(t.UiButton,{key:0,unelevated:"",icon:t.biPencil,label:t.t("base.save")+(a.crudAction==="view"?t.t("base.edit"):""),type:"submit",loading:a.loading,color:"primary"},null,8,["icon","label","loading"])):w("",!0),a.crudAction==="view"&&t.isHaveManagePermission&&a.showDelete?(b(),k(t.UiButton,{key:1,unelevated:"",icon:t.biTrash,label:t.t("base.delete"),color:"negative",loading:a.loading,onClick:i[1]||(i[1]=d=>e.$emit("on-delete"))},null,8,["icon","label","loading"])):w("",!0),t.isHaveListPermission&&a.showBack?(b(),k(t.UiButton,{key:2,label:t.t("base.cancel"),onClick:i[2]||(i[2]=d=>e.$emit("on-back")),flat:"",class:"q-ml-sm",disable:a.loading},null,8,["label","disable"])):w("",!0),P(e.$slots,"additionalCrudAction")]),_:3})])]),_:3})])]),_:3})}const Ce=ue(Ne,[["render",ke],["__file","CrudApiForm.vue"]]);export{Ce as C,Be as u};
