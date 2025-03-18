import{l as J,bb as K,u as M,br as Z,c as B,m as h,n as P,ao as x,w as o,x as c,v as y,bs as _,X as E,a0 as s,bt as ee,a2 as ae,a3 as L,a4 as F,bu as te,ac as ne,af as se,au as ue,az as O,bc as re,ax as ie,bv as le,aH as oe,a as ce,r as f,bw as de,bx as W,by as me,o as fe,C as l,s as N,d as z,e as ve,h as be,bz as Pe,J as ye}from"./index-D_to5wmt.js";import{B as p}from"./BaseButton-RINx7LWR.js";import{u as ke}from"./useAxios-BVW2bjHp.js";const Ne=J({__name:"CrudApiForm",props:{crudName:{},listPermission:{},managePermission:{},byPassPermission:{type:Boolean,default:!1},title:{},icon:{default:()=>K},loading:{type:Boolean,default:!1},showBack:{type:Boolean,default:!0},showDelete:{type:Boolean},showEdit:{type:Boolean},crudAction:{},showActionText:{type:Boolean,default:!0},fullWidth:{type:Boolean,default:!0},editButton:{type:Boolean,default:!0},deleteButton:{type:Boolean,default:!0},copyButton:{type:Boolean,default:!1},buttonSize:{default:"md"}},emits:["on-back","on-submit","on-delete"],setup(e){const{t:n}=M(),v=Z(),b=B(()=>e.byPassPermission?!0:e.managePermission?v.isHavePermission(e.managePermission):e.crudName?v.isHavePermission([`${e.crudName}_manage`]):!0),A=B(()=>e.byPassPermission?!0:e.listPermission?v.isHavePermission(e.listPermission):e.crudName?v.isHavePermission([`${e.crudName}_list`]):!0);return(a,u)=>(P(),h(x,{flat:"",bordered:"",class:"wee-container-responsive-center"},{default:o(()=>[c(O,null,{default:o(()=>[y(a.$slots,"crudFromToolbar",{},()=>[c(_,null,{default:o(()=>[A.value&&a.showBack?(P(),h(p,{key:0,onClick:u[0]||(u[0]=k=>a.$emit("on-back")),flat:"",round:"",icon:s(ee)},{default:o(()=>[c(ae,null,{default:o(()=>[L(F(s(n)("base.back")),1)]),_:1})]),_:1},8,["icon"])):E("",!0),c(te,null,{default:o(()=>[a.crudAction&&a.showActionText?(P(),ne(se,{key:0},[L(F(a.crudAction==="new"?s(n)("base.addNew"):a.crudAction==="view"?s(n)("base.edit"):s(n)("base.copy")),1)],64)):E("",!0),L(" "+F(a.title),1)]),_:1}),y(a.$slots,"toolbarAction",{},()=>[c(ue,{size:"md",name:a.icon},null,8,["name"])])]),_:3})])]),_:3}),y(a.$slots,"crudFrom",{},()=>[c(oe,{onSubmit:u[3]||(u[3]=k=>a.$emit("on-submit")),class:"q-gutter-md"},{default:o(()=>[y(a.$slots,"crudFromContent"),y(a.$slots,"crudAction",{},()=>[c(re),c(O,{align:"center",class:"q-gutter-sm"},{default:o(()=>[b.value&&a.showEdit?(P(),h(p,{key:0,unelevated:"",icon:s(ie),label:s(n)("base.save")+(a.crudAction==="view"?s(n)("base.edit"):""),type:"submit",loading:a.loading,color:"primary"},null,8,["icon","label","loading"])):E("",!0),a.crudAction==="view"&&b.value&&a.showDelete?(P(),h(p,{key:1,unelevated:"",icon:s(le),label:s(n)("base.delete"),color:"negative",loading:a.loading,onClick:u[1]||(u[1]=k=>a.$emit("on-delete"))},null,8,["icon","label","loading"])):E("",!0),A.value&&a.showBack?(P(),h(p,{key:2,label:s(n)("base.cancel"),onClick:u[2]||(u[2]=k=>a.$emit("on-back")),flat:"",class:"q-ml-sm",disable:a.loading},null,8,["label","disable"])):E("",!0),y(a.$slots,"additionalCrudAction")]),_:3})])]),_:3})])]),_:3}))}}),Be=(e,n)=>{const{appGoto:v,getParam:b,appToast:A,appConfirm:a,isDevMode:u,getPreviousPath:k}=ce(),{callAxios:C}=ke(),{t:$}=M(),T=f(k()),g=f(!1),w=f(b(W)!=null?de(b(W)):0),d=f(Object.assign({},n)),I=f(e.requestEntityName?e.requestEntityName:void 0),r=f(b(me)),D=f(e.fetchDataLink);fe(async()=>{e.fectchDataOnLoad&&Q()});const Q=async()=>r.value==l.VIEW||r.value==l.COPY?(await V(),r.value==l.COPY&&(d.value.id=null),new Promise(t=>{t(!0)})):new Promise(t=>{t(!0)}),R=B(()=>D.value?D.value:`${e.apiEndpoint}/${N(e.crudName?e.crudName:"")}/${w.value}`),V=async()=>{if(!w.value&&(!e.apiEndpoint||!e.crudName))return new Promise(m=>{m(!1)});g.value=!0;const t=R.value,i=await C({API:t,method:"GET"});return g.value=!1,!z(i)&&!ve(i)&&(d.value=i),new Promise(m=>{m(!0)})},Y=()=>{d.value=Object.assign({},n)},S=()=>{let t="";e.backToPreviousPath!=null&&e.backToPreviousPath&&(t=T.value);const i=e.basePath||Pe;t||(t=e.backLink?e.backLink:T.value?T.value:e.crudName?`${i?"/"+i:""}/${e.crudName.replaceAll("_","-")}`:""),t&&v(t)},j=B(()=>{if(!(!e.apiEndpoint||!e.crudName))return r.value===l.VIEW?e.actionPut?e.actionPut:e.apiEndpoint+"/"+N(e.crudName)+(e.methodPutIncludeId===void 0||e.methodPutIncludeId===!0?"/"+d.value.id:""):e.actionPost?e.actionPost:e.apiEndpoint+"/"+N(e.crudName)}),G=async()=>{if(!e.apiEndpoint||!e.crudName)return;const t={};t[I.value?I.value:`${N(e.crudName)}`]=d.value;const i=j.value;if(!i)return;u(),g.value=!0;const m=await C({API:i,method:r.value===l.VIEW?"PUT":"POST",body:t});if(g.value=!1,!z(m))return m&&m.id&&(r.value===l.NEW||r.value===l.COPY?q($("success.insertSuccesfull")):r.value===l.VIEW&&q($("success.updateSuccesfull"))),e.preventRedirectToList||S(),new Promise(X=>{X(!0)})},q=t=>{A(t,{multiLine:!1,html:!0,type:"positive",timeout:3*1e3,position:"bottom",actions:[{icon:ye,color:"white"}]})},H=B(()=>e.actionDelete?e.actionDelete:e.apiEndpoint&&e.crudName?`${e.apiEndpoint}/${N(e.crudName)}/${w.value}`:""),U=async()=>{if(r.value!=l.VIEW&&!d.value&&w.value==0&&!H.value)return;await a($("app.monogram"),$("base.deleteConfirm"))&&(await C({API:H.value,method:"DELETE"}),S())};return be(()=>{Y()}),{loading:g,...{onBack:S,onSubmit:G,onDelete:U,fetchDataById:V,preFectData:Q},crudId:w,crudAction:r,crudEntity:d,crudName:e.crudName,requestEntityName:I,fetchDataLink:D}};export{Ne as _,Be as u};
