const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BaseResult-86td3Kl3.js","assets/BaseResult.vue_vue_type_script_setup_true_lang-BfUlOw5B.js","assets/index-DLAlP7tE.js","assets/index-Dx9QcfFl.css","assets/BaseDatePicker-BRdR3Ak7.js","assets/BaseDatePicker.vue_vue_type_script_setup_true_lang-yj7RN7RF.js","assets/ClosePopup-0qiMoSOJ.js","assets/BaseToggle-DN2z7Dhi.js","assets/BaseToggle.vue_vue_type_script_setup_true_lang-ClB4VJUt.js","assets/CrudApiListHeaderFilter-dDqJBFJW.js"])))=>i.map(i=>d[i]);
import{u as Le}from"./useAppMeta-DyJRMwTu.js";import{d as ue,ej as Ce,j as ye,c as d,o as a,S as _,w as r,e as l,bv as Pe,aV as Me,a7 as le,Y as c,a3 as Qe,W as g,X as f,T as s,aU as re,Z as h,_ as D,bj as K,a1 as G,a2 as I,a as y,M as m,a8 as N,ao as be,V as z,ek as Ve,a0 as M,c7 as ze,u as _e,cz as Fe,k as U,C as j,r as $,ad as oe,d5 as qe,d6 as De,as as we,al as Ae,aZ as ae,cp as Te,ak as ne,d9 as Xe,db as $e,az as xe,a6 as We,bK as je,bL as Ke,ar as Ge,z as Ze,el as Ye,aq as Ee,em as Je,en as He,n as et,g as tt,L as Se,ab as ot,am as at,eo as nt,$ as Be,ep as st,aF as lt,aC as fe,at as se,eq as rt,cN as ut,er as it,es as ct,et as dt,eu as mt,ev as pt,b5 as vt,f as ht,ew as ft}from"./index-DLAlP7tE.js";import{U as yt}from"./UserService-B_hYByeM.js";import{_ as gt}from"./BasePage.vue_vue_type_script_setup_true_lang-BdL7YVTl.js";import{C as Z}from"./ClosePopup-0qiMoSOJ.js";import{u as Ne}from"./useSort-K_6qSdWR.js";import{_ as kt}from"./Paging.vue_vue_type_script_setup_true_lang-CcecVEMt.js";import{B as bt}from"./BaseCard-ClBFMLe-.js";import{u as wt}from"./usePaging-CBAra2JS.js";import{_ as At}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-meta-CE23s7B5.js";import"./useAxios-DN4MWJg7.js";const Tt=ue({__name:"BaseSort",props:{fields:{type:Array,default:()=>[]},sort:{type:Object,default:null},icon:{type:String,default:Ce},label:{type:String,default:void 0},width:{type:Number,default:200},listDense:{type:Boolean,default:!0},btnRound:{type:Boolean,default:!0}},emits:["on-sort-column","on-sort-mode"],setup(n,{emit:V}){const F=n,L=V,{t:X}=ye(),{sortMode:Y}=Ne(),w=k=>{k&&F.sort.column!==k&&L("on-sort-column",k)},p=k=>{k&&F.sort.mode!==k&&L("on-sort-mode",k)};return(k,E)=>(a(),d(_,{class:"q-mx-sm",flat:"",round:n.btnRound,icon:n.icon,label:n.label},{default:r(()=>[l(Pe,null,{default:r(()=>[l(Me,{style:le(`min-width: ${n.width}px`),dense:n.listDense},{default:r(()=>[l(Qe,{header:""},{default:r(()=>[g(f(s(X)("sort.sort")),1)]),_:1}),l(re),(a(!0),c(h,null,D(n.fields,(T,S)=>K((a(),d(G,{clickable:"",key:"sort-fields-"+S,onClick:B=>w(T.value)},{default:r(()=>[l(I,null,{default:r(()=>[y("span",null,[g(f(T.label),1),n.sort.column===T.value?(a(),d(N,{key:0,class:"q-ml-sm",name:s(be)},null,8,["name"])):m("",!0)])]),_:2},1024)]),_:2},1032,["onClick"])),[[Z]])),128)),l(re),(a(!0),c(h,null,D(s(Y),(T,S)=>K((a(),d(G,{clickable:"",key:"sort-mode-"+S,onClick:B=>p(T.value)},{default:r(()=>[l(I,null,{default:r(()=>[y("span",null,[g(f(T.label)+" ",1),n.sort.mode===T.value?(a(),d(N,{key:0,class:"q-ml-sm",name:s(be)},null,8,["name"])):m("",!0)])]),_:2},1024)]),_:2},1032,["onClick"])),[[Z]])),128))]),_:1},8,["style","dense"])]),_:1}),l(z,null,{default:r(()=>[g(f(s(X)("sort.sort")),1)]),_:1})]),_:1},8,["round","icon","label"]))}}),$t={class:"text-left",style:{width:"150px"}},Et={class:"text-right"},St={class:"text-right"},Bt={class:"text-right"},Pt={class:"text-right"},Mt={class:"text-right"},Vt={class:"text-left"},_t={class:"text-right"},Nt={class:"text-right"},Ot={class:"text-right"},It={class:"text-right"},Ut={class:"text-right"},Rt=ue({__name:"SkeletonTable",props:{no:{default:5},flat:{type:Boolean,default:!0}},setup(n){return(V,F)=>(a(),d(Ve,{flat:V.flat},{default:r(()=>[y("thead",null,[y("tr",null,[y("th",$t,[l(M,{animation:"blink",type:"text"})]),y("th",Et,[l(M,{animation:"blink",type:"text"})]),y("th",St,[l(M,{animation:"blink",type:"text"})]),y("th",Bt,[l(M,{animation:"blink",type:"text"})]),y("th",Pt,[l(M,{animation:"blink",type:"text"})]),y("th",Mt,[l(M,{animation:"blink",type:"text"})])])]),y("tbody",null,[(a(!0),c(h,null,D(V.no,L=>(a(),c("tr",{key:L},[y("td",Vt,[l(M,{animation:"blink",type:"text",width:"85px"})]),y("td",_t,[l(M,{animation:"blink",type:"text",width:"50px"})]),y("td",Nt,[l(M,{animation:"blink",type:"text",width:"35px"})]),y("td",Ot,[l(M,{animation:"blink",type:"text",width:"65px"})]),y("td",It,[l(M,{animation:"blink",type:"text",width:"25px"})]),y("td",Ut,[l(M,{animation:"blink",type:"text",width:"85px"})])]))),128))])]),_:1},8,["flat"]))}});var b=(n=>(n[n.TEXT=0]="TEXT",n[n.HTML=1]="HTML",n[n.IMAGE=2]="IMAGE",n[n.AVATAR=3]="AVATAR",n[n.STATUS=4]="STATUS",n[n.DATE=5]="DATE",n[n.DATE_TIME=6]="DATE_TIME",n[n.LINKABLE=7]="LINKABLE",n[n.BASE_TOOL=8]="BASE_TOOL",n[n.NUMBER_FORMAT=9]="NUMBER_FORMAT",n[n.ICON=10]="ICON",n[n.FUNCTION=11]="FUNCTION",n))(b||{}),R=(n=>(n[n.TEXT=0]="TEXT",n[n.NUMBER=1]="NUMBER",n[n.BOOLEAN=2]="BOOLEAN",n[n.DATE=3]="DATE",n[n.DATETIME=4]="DATETIME",n))(R||{});const Lt={class:"col"},Ct={class:"row items-center"},Qt={class:"text-h6"},zt={class:"row"},Ft={key:0,class:"col-12 col-md-4 q-pa-sm"},qt={class:"q-gutter-md row items-center"},Dt={key:0},Xt={key:0},xt={key:1},Wt={key:0,class:"text-center"},jt={key:0,class:"text-center"},Kt={key:0},Gt=["alt"],Zt=ue({__name:"CrudApiList",props:{crudName:{},viewPermission:{},managePermission:{},byPassPermission:{type:Boolean,default:!1},title:{},icon:{default:()=>ze},list:{},headers:{},sort:{},pages:{},fristLoad:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},showPaging:{type:Boolean,default:!0},showCheckbox:{type:Boolean,default:!0},showNewBtn:{type:Boolean,default:!0},showSearchBtn:{type:Boolean,default:!0},showSearchTextBox:{type:Boolean,default:!1},showThreeDot:{type:Boolean,default:!0},showFilter:{type:Boolean,default:!0},showSort:{type:Boolean,default:!0},fullWidth:{type:Boolean,default:!0},tableSeperator:{default:"horizontal"},rowClickable:{type:Boolean,default:!0}},emits:["on-page-no-change","on-items-perpage-change","update-search","on-sort","on-sort-mode","on-item-copy","on-item-click","on-item-delete","on-new-form","on-reload","on-advance-search","on-keyword-search"],setup(n,{emit:V}){const F=ne(()=>se(()=>import("./BaseResult-86td3Kl3.js"),__vite__mapDeps([0,1,2,3]))),L=ne(()=>se(()=>import("./BaseDatePicker-BRdR3Ak7.js"),__vite__mapDeps([4,5,2,3,6]))),X=ne(()=>se(()=>import("./BaseToggle-DN2z7Dhi.js"),__vite__mapDeps([7,8,2,3]))),Y=ne(()=>se(()=>import("./CrudApiListHeaderFilter-dDqJBFJW.js"),__vite__mapDeps([9,2,3]))),w=V,{t:p,locale:k}=ye(),{searchOperations:E,inputSanitizeHtml:T}=_e(),S=Fe(),B=U(n.pages),O=U(""),x=U(!1),C=U(!1),Q=U([]),ie=()=>{ce(x.value)},ce=t=>{if(Q.value=[],t)for(let u=0;u<n.list.length;u++){const e=n.list[u];e&&Q.value.push(e.id)}},de=()=>{Q.value.length>0&&ee(Q.value,!1)},ee=(t,u)=>{w("on-item-delete",t,u)},te=t=>{const e=n.list[t];if(e)return e},A=(t,u)=>{const e=te(u);return!t||!e?null:t.split(".").length>1?rt(e,t):ut(e[t])?null:e[t]},me=(t,u)=>{if(!t)return!1;const e=A(t,u);return e?e===!0:!1},pe=j(()=>{const t=n.headers.filter(e=>e.options&&e.options.sortable===!0),u=[];for(const e of t)u.push({value:e.options.sortColunm?e.options.sortColunm:e.column,label:e.translateLabel==null||e.translateLabel?p(e.label):e.label});return u}),J=j(()=>n.headers&&n.headers.length>0?n.headers.filter(t=>t.options&&t.options.fillable===!0):n.headers),i=j(()=>n.headers&&n.headers.length>0?n.headers.filter(t=>t.options&&t.options.searchable===!0):n.headers),q=()=>{ge(),w("on-reload")},ge=()=>{if(i.value.length>0)for(const t of i.value)t.options&&(t.type==b.STATUS?t.options.searchModel=!0:t.options.searchModel=null)},H=()=>{O.value="";let t="";if(i.value.length>0){for(const u of i.value)if(u.options){const e=u.options.searchOperation,v=u.options.searchModel,o=u.options.searchColunm?u.options.searchColunm:u.column;if(e!=null&&v!=null){let W=T(v);u.type==b.STATUS&&(W=v),t&&(t+=","),t+=`${o}${e}${W}`}}}w("on-advance-search",t)},ve=()=>{O.value?.trim().length>=it&&w("on-keyword-search",T(O.value))},he=j(()=>n.byPassPermission?!0:n.viewPermission?S.isHavePermission(n.viewPermission):n.crudName?S.isHavePermission([`${n.crudName}_view`]):!0),P=j(()=>n.byPassPermission?!0:n.managePermission?S.isHavePermission(n.managePermission):n.crudName?S.isHavePermission([`${n.crudName}_manage`]):!0),Oe=(t,u=void 0)=>t?ct(t,u||dt,k.value):void 0,Ie=(t,u=void 0)=>t?mt(t,u||pt,k.value):void 0,Ue=async t=>{t&&B.value&&(B.value.current=t,w("on-page-no-change",t))},Re=async t=>{t&&B.value&&(B.value.itemsPerPage=t,w("on-items-perpage-change",t))};return(t,u)=>(a(),c("div",{class:Be(["row",{"content-limit":!t.fullWidth}])},[y("div",Lt,[l(bt,null,{default:r(()=>[$(t.$slots,"headerCard"),l(oe,null,{default:r(()=>[l(qe,null,{default:r(()=>[l(De,null,{default:r(()=>[$(t.$slots,"title",{},()=>[t.title?(a(),c(h,{key:0},[l(N,{name:t.icon},null,8,["name"]),g(" "+f(t.title),1)],64)):m("",!0)])]),_:3}),y("div",Ct,[t.showSearchTextBox&&!C.value?(a(),d(we,{key:0,onSubmit:ve},{default:r(()=>[l(Ae,{dense:"",outlined:"",rounded:"",clearable:"",style:{width:"350px"},modelValue:O.value,"onUpdate:modelValue":u[0]||(u[0]=e=>O.value=e),placeholder:s(p)("base.searchHelp3")},{prepend:r(()=>[l(N,{name:s(ae)},null,8,["name"])]),_:1},8,["modelValue","placeholder"])]),_:1})):m("",!0),$(t.$slots,"extraBeforeInnerToolbar"),P.value&&t.showNewBtn?(a(),d(_,{key:1,class:"q-ml-xs",flat:"",round:"",icon:s(Te),onClick:u[1]||(u[1]=e=>t.$emit("on-new-form"))},{default:r(()=>[l(z,null,{default:r(()=>[g(f(s(p)("base.addNew")),1)]),_:1})]),_:1},8,["icon"])):m("",!0),t.showSearchBtn?(a(),d(_,{key:2,class:"q-ml-xs",flat:"",round:"",icon:s(ae),onClick:u[2]||(u[2]=e=>C.value=!C.value)},{default:r(()=>[l(z,null,{default:r(()=>[g(f(s(p)("base.search")),1)]),_:1})]),_:1},8,["icon"])):m("",!0),t.showSort&&t.sort?(a(),d(Tt,{key:3,sort:t.sort,fields:pe.value,onOnSortColumn:u[3]||(u[3]=e=>t.$emit("on-sort",e)),onOnSortMode:u[4]||(u[4]=e=>t.$emit("on-sort-mode",e))},null,8,["sort","fields"])):m("",!0),t.showFilter?(a(),d(s(Y),{key:4,headers:t.headers},null,8,["headers"])):m("",!0),t.showThreeDot?(a(),d(_,{key:5,flat:"",round:"",dense:"",icon:s(Xe)},{default:r(()=>[l(Pe,null,{default:r(()=>[l(Me,{style:{"min-width":"200px"},dense:""},{default:r(()=>[P.value&&t.showNewBtn?K((a(),d(G,{key:0,clickable:"",onClick:u[5]||(u[5]=e=>t.$emit("on-new-form"))},{default:r(()=>[l(I,{avatar:""},{default:r(()=>[l(N,{name:s(Te)},null,8,["name"])]),_:1}),l(I,null,{default:r(()=>[g(f(s(p)("base.addNew")),1)]),_:1})]),_:1})),[[Z]]):m("",!0),P.value&&t.showCheckbox?K((a(),d(G,{key:1,clickable:"",onClick:de},{default:r(()=>[l(I,{avatar:""},{default:r(()=>[l(N,{name:s($e)},null,8,["name"])]),_:1}),l(I,null,{default:r(()=>[g(f(s(p)("base.deleteSeleted")),1)]),_:1})]),_:1})),[[Z]]):m("",!0),t.showSearchBtn?K((a(),d(G,{key:2,clickable:"",onClick:u[6]||(u[6]=e=>C.value=!0)},{default:r(()=>[l(I,{avatar:""},{default:r(()=>[l(N,{name:s(ae)},null,8,["name"])]),_:1}),l(I,null,{default:r(()=>[g(f(s(p)("base.searchAdvance")),1)]),_:1})]),_:1})),[[Z]]):m("",!0),l(re),K((a(),d(G,{clickable:"",onClick:u[7]||(u[7]=e=>t.$emit("on-reload"))},{default:r(()=>[l(I,{avatar:""},{default:r(()=>[l(N,{name:s(xe)},null,8,["name"])]),_:1}),l(I,null,{default:r(()=>[g(f(s(p)("base.reload")),1)]),_:1})]),_:1})),[[Z]])]),_:1})]),_:1})]),_:1},8,["icon"])):m("",!0),$(t.$slots,"extraInnerToolbar")])]),_:3}),$(t.$slots,"extraToolbar")]),_:3}),C.value?(a(),d(oe,{key:0,class:"q-mb-lg"},{default:r(()=>[l(We,{flat:"",bordered:""},{default:r(()=>[l(oe,null,{default:r(()=>[y("div",Qt,f(s(p)("base.search")),1)]),_:1}),l(we,{onSubmit:H,class:"q-pa-md"},{default:r(()=>[$(t.$slots,"topSearchExtra"),i.value.length>0?(a(),c(h,{key:0},[y("div",zt,[$(t.$slots,"topInnerSearchExtra"),(a(!0),c(h,null,D(i.value,(e,v)=>(a(),c(h,{key:`advance-search-${v}`},[e.options?(a(),c("div",Ft,[y("div",qt,[e.options?.searchType==s(R).TEXT||e.options?.searchType==s(R).NUMBER?(a(),d(Ae,{key:0,outlined:"",dense:"",modelValue:e.options.searchModel,"onUpdate:modelValue":o=>e.options.searchModel=o,type:e.options?.searchType==s(R).TEXT?"text":"number",label:e.translateLabel==null||e.translateLabel?s(p)(e.label):e.label,clearable:"",style:{width:"100%"}},{before:r(()=>[e.options.searchOperationReadonly?m("",!0):(a(),d(je,{key:0,dense:"",filled:"",label:e.translateLabel==null||e.translateLabel?s(p)(e.label):e.label,class:"q-mx-lg",modelValue:e.options.searchOperation,"onUpdate:modelValue":o=>e.options.searchOperation=o,options:s(E),"option-value":"value","option-label":"text","emit-value":"","map-options":"",readonly:e.options.searchOperationReadonly,style:{"min-width":"150px"},"dropdown-icon":s(Ke)},null,8,["label","modelValue","onUpdate:modelValue","options","readonly","dropdown-icon"]))]),_:2},1032,["modelValue","onUpdate:modelValue","type","label"])):e.options?.searchType==s(R).BOOLEAN?(a(),d(s(X),{key:1,"use-checkbox":"",useLabelTitle:"",label:e.translateLabel==null||e.translateLabel?s(p)(e.label):e.label,modelValue:e.options.searchModel,"onUpdate:modelValue":o=>e.options.searchModel=o},null,8,["label","modelValue","onUpdate:modelValue"])):e.options?.searchType==s(R).DATE?(a(),c(h,{key:2},[e.options.searchModel!=null?(a(),d(s(L),{key:0,dense:"",modelValue:e.options.searchModel,"onUpdate:modelValue":o=>e.options.searchModel=o,label:e.translateLabel==null||e.translateLabel?s(p)(e.label):e.label},null,8,["modelValue","onUpdate:modelValue","label"])):m("",!0)],64)):m("",!0)])])):m("",!0)],64))),128)),$(t.$slots,"belowInnerSearchExtra")]),$(t.$slots,"belowSearchExtra"),l(re),l(Ge,{align:"center"},{default:r(()=>[l(_,{type:"submit",flat:"",icon:s(ae),label:s(p)("base.okay")},null,8,["icon","label"]),l(_,{flat:"",icon:s(Ze),onClick:u[8]||(u[8]=e=>C.value=!1),label:s(p)("base.close")},null,8,["icon","label"]),l(_,{flat:"",icon:s(Ye),onClick:q,label:s(p)("base.clear")},null,8,["icon","label"])]),_:1})],64)):m("",!0)]),_:3})]),_:3})]),_:3})):m("",!0),!t.fristLoad||t.loading?(a(),d(Rt,{key:1})):$(t.$slots,"table",{key:2},()=>[t.list.length>0?(a(),d(Ve,{key:0,separator:t.tableSeperator,flat:"",bordered:""},{default:r(()=>[y("thead",null,[$(t.$slots,"theader",{},()=>[y("tr",null,[P.value&&t.showCheckbox?(a(),c("th",Dt,[l(Ee,{modelValue:x.value,"onUpdate:modelValue":u[9]||(u[9]=e=>x.value=e),onClick:ie},{default:r(()=>[l(z,null,{default:r(()=>[g(f(x.value?s(p)("base.deselectAll"):s(p)("base.selectAll")),1)]),_:1})]),_:1},8,["modelValue"])])):m("",!0),(a(!0),c(h,null,D(J.value,(e,v)=>(a(),c(h,{key:`tblHeader-${v}`},[e.type===s(b).BASE_TOOL?(a(),c(h,{key:0},[P.value||he.value?(a(),c("th",Xt,f(e.translateLabel==null||e.translateLabel?s(p)(e.label):e.label),1)):m("",!0)],64)):(a(),c("th",xt,[e.options&&e.options.sortable?(a(),d(_,{key:0,onClick:o=>t.$emit("on-sort",e.options.sortColunm?e.options.sortColunm:e.column),flat:""},{default:r(()=>[t.sort&&t.sort.column==e.options.sortColunm||t.sort&&t.sort.column==e.column?(a(),d(N,{key:0,name:t.sort.mode=="desc"?s(Je):s(He)},null,8,["name"])):m("",!0),g(" "+f(e.translateLabel==null||e.translateLabel?s(p)(e.label):e.label),1)]),_:2},1032,["onClick"])):(a(),c(h,{key:1},[g(f(e.translateLabel==null||e.translateLabel?s(p)(e.label):e.label),1)],64))]))],64))),128))])])]),y("tbody",null,[$(t.$slots,"tbody",et(tt({list:t.list,fillableHeaders:J.value})),()=>[(a(!0),c(h,null,D(t.list,(e,v)=>(a(),c("tr",{key:`item-tr-${v}`},[P.value&&t.showCheckbox?(a(),c("td",Wt,[l(Ee,{modelValue:Q.value,"onUpdate:modelValue":u[10]||(u[10]=o=>Q.value=o),val:e.id},null,8,["modelValue","val"])])):m("",!0),(a(!0),c(h,null,D(J.value,(o,W)=>(a(),c(h,{key:`item-body-${W}`},[o.options?(a(),c(h,{key:0},[o.type===s(b).BASE_TOOL?(a(),c("td",jt,[$(t.$slots,"baseTool",Se({ref_for:!0},{item:e,index:v}),()=>[P.value||he.value?(a(),c(h,{key:0},[o.options&&o.options.editButton?(a(),c(h,{key:0},[P.value||he.value?(a(),d(_,{key:0,onClick:ke=>t.$emit("on-item-click",v),color:"primary",icon:P.value?s(ot):s(at),flat:"",round:""},{default:r(()=>[l(z,null,{default:r(()=>[g(f(P.value?s(p)("base.edit"):s(p)("base.view")),1)]),_:1})]),_:2},1032,["onClick","icon"])):m("",!0)],64)):m("",!0),o.options&&o.options.copyButton?(a(),c(h,{key:1},[P.value?(a(),d(_,{key:0,onClick:ke=>t.$emit("on-item-copy",v),color:"primary",class:"q-ml-sm",icon:s(nt),flat:"",round:""},{default:r(()=>[l(z,null,{default:r(()=>[g(f(s(p)("base.copy")),1)]),_:1})]),_:2},1032,["onClick","icon"])):m("",!0)],64)):m("",!0),o.options&&o.options.deleteButton?(a(),c(h,{key:2},[P.value?(a(),d(_,{key:0,onClick:ke=>ee(v,!0),color:"negative",class:"q-ml-sm",icon:s($e),flat:"",round:""},{default:r(()=>[l(z,{class:"bg-negative"},{default:r(()=>[g(f(s(p)("base.delete")),1)]),_:1})]),_:2},1032,["onClick","icon"])):m("",!0)],64)):m("",!0)],64)):m("",!0)]),$(t.$slots,"additionalBaseTool",Se({ref_for:!0},{item:e,index:v}))])):(a(),c("td",{key:1,class:Be({"text-center":o.options&&o.options.align=="center","text-left":o.options&&o.options.align=="left","text-right":o.options&&o.options.align=="right","long-text-break":o.options&&o.options.maxWidth}),style:le({maxWidth:o.options&&o.options.maxWidth?o.options.maxWidth:""})},[o.type===s(b).TEXT?(a(),c(h,{key:0},[o.options&&o.options.toolTip?(a(),c("span",Kt,[g(f(o.column?A(o.column,v):"")+" ",1),l(z,null,{default:r(()=>[g(f(o.column?A(o.column,v):""),1)]),_:2},1024)])):(a(),c(h,{key:1},[g(f(o.column?A(o.column,v):""),1)],64))],64)):o.type===s(b).FUNCTION&&o.options&&o.options.func?(a(),c(h,{key:1},[o.column&&A(o.column,v)!=null?(a(),c(h,{key:0},[g(f(o.options.func(A(o.column,v))),1)],64)):m("",!0)],64)):o.type===s(b).NUMBER_FORMAT?(a(),c(h,{key:2},[g(f(o.column?A(o.column,v).toLocaleString():""),1)],64)):o.type===s(b).DATE?(a(),c(h,{key:3},[g(f(o.column?Oe(A(o.column,v)):""),1)],64)):o.type===s(b).DATE_TIME?(a(),c(h,{key:4},[g(f(o.column?Ie(A(o.column,v)):""),1)],64)):o.type===s(b).STATUS?(a(),d(N,{key:5,size:"sm",color:o.column&&me(o.column,v)?"positive":"grey-4",name:s(st)},null,8,["color","name"])):o.type===s(b).AVATAR?(a(),c(h,{key:6},[o.column&&A(o.column,v)?(a(),d(lt,{key:0,rounded:o.options.rounded,square:o.options.square,size:o.options.size?o.options.size:"36px"},{default:r(()=>[o.column&&A(o.column,v)?(a(),d(fe,{key:0,src:A(o.column,v),alt:"item-img-"+W,ratio:1},null,8,["src","alt"])):(a(),c("img",{key:1,src:"/avatar_default.png",alt:"item-img-"+W},null,8,Gt))]),_:2},1032,["rounded","square","size"])):m("",!0)],64)):o.type===s(b).IMAGE?(a(),c(h,{key:7},[o.column&&A(o.column,v)?(a(),d(fe,{key:0,src:A(o.column,v),"spinner-color":"white",class:"bg-grey-8",ratio:4/3,style:le(o.options.size?`width: ${o.options.size}; height: ${o.options.size}`:"width:55px;height:55px")},null,8,["src","style"])):(a(),d(fe,{key:1,src:"/images/no_picture_thumb.jpg","spinner-color":"white",class:"bg-grey-8",ratio:4/3,style:le(o.options.size?`width: ${o.options.size}; height: ${o.options.size}`:"width:55px;height:55px")},null,8,["style"]))],64)):o.type===s(b).ICON?(a(),c(h,{key:8},[o.column?(a(),d(N,{key:0,name:A(o.column,v)},null,8,["name"])):m("",!0)],64)):m("",!0)],6))],64)):m("",!0)],64))),128))]))),128))])])]),_:3},8,["separator"])):(a(),d(oe,{key:1,class:"text-center"},{default:r(()=>[l(s(F),{status:"empty",description:s(p)("error.dataNotfound")},null,8,["description"])]),_:1}))]),$(t.$slots,"paging",{},()=>[B.value&&t.showPaging&&B.value.totalPages>0?(a(),d(kt,{key:0,modelValue:B.value,"onUpdate:modelValue":u[11]||(u[11]=e=>B.value=e),"boundary-numbers":!1,"onUpdate:current":Ue,"onUpdate:perPage":Re},null,8,["modelValue"])):m("",!0)])]),_:3})])],2))}}),Yt=ue({__name:"crud-table",setup(n){const{t:V}=ye(),{setTitle:F}=Le();F(`Crud table | ${V("app.name")}`);const L=U([{label:"Image",translateLabel:!1,column:"avatar.thumbnail",type:b.AVATAR,options:{fillable:!0,align:"center",size:"55px"}},{label:"Email",translateLabel:!1,column:"email",type:b.TEXT,options:{searchable:!0,sortable:!0,fillable:!0,searchType:R.TEXT,searchModel:"",searchOperation:":"}},{label:"Username",translateLabel:!1,column:"username",type:b.TEXT,options:{fillable:!0,searchable:!0,sortable:!0,searchType:R.TEXT,searchModel:"",searchOperation:":"}},{label:"Active",translateLabel:!1,column:"active",type:b.STATUS,options:{fillable:!0,sortable:!0,searchable:!0,align:"center",searchType:R.BOOLEAN,searchModel:!0,searchOperation:"="}},{label:"Tools",translateLabel:!1,type:b.BASE_TOOL,options:{fillable:!0,editButton:!0,deleteButton:!0,copyButton:!0,align:"center"}}]),{findAll:X}=yt(),{appConfirm:Y}=_e(),{pages:w,resetPaging:p}=wt(5),{sort:k}=Ne({column:"id",mode:"desc"}),E=U([]),T=U(!1),S=U(!1);vt(async()=>{O()});const B=j(()=>`?page=${w.value.current}&size=${w.value.itemsPerPage}&sort=${k.value.column},${k.value.mode}`),O=async()=>{S.value=!0;const i=await X(B.value);return console.log("findAll",i),i&&(E.value=i.dataList,i.totalPages!=null&&(w.value.totalPages=i.totalPages),i.totalElements!=null&&(w.value.totalElements=i.totalElements),i.last!=null&&(w.value.last=i.last)),T.value||(T.value=!0),S.value=!1,new Promise(q=>q(!0))},x=async()=>{C(),await O()},C=()=>{p(),E.value=[],T.value=!1},Q=i=>{console.log("onItemClick",i)},ie=i=>{console.log("onItemCopy",i)},ce=async i=>{console.log("onPageNoChange",i),i!=null&&(w.value.current=i,await O())},de=async i=>{console.log("onItemPerPageChange",i),i!=null&&(w.value.itemsPerPage=i,await O())},ee=async i=>{k.value.column===i?k.value.mode=k.value.mode==="asc"?"desc":"asc":k.value.column=i,console.log("onSort",k.value),te()},te=async()=>{E.value=await ft(E.value,k.value.column,k.value.mode||"asc")},A=async i=>{console.log("onSortMode",i),k.value.mode=i,te()},me=async i=>{console.log("onAdvanceSearch",i)},pe=async(i,q)=>{await Y(V("app.monogram"),V("base.deleteConfirm"))&&(console.log("onItemDelete",{indexOrIds:i,isSingle:q}),q?E.value=E.value.filter((H,ve)=>ve!==i):Array.isArray(i)&&(E.value=E.value.filter(H=>H.id&&!i.includes(H.id))))},J=()=>{console.log("onNewForm")};return(i,q)=>(a(),d(gt,null,{default:r(()=>[l(Zt,{icon:s(ht),title:s(V)("model_user"),"crud-name":"user",loading:S.value,"frist-load":T.value,pages:s(w),headers:L.value,sort:s(k),list:E.value,onOnItemClick:Q,onOnItemCopy:ie,onOnPageNoChange:ce,onOnItemsPerpageChange:de,onOnSort:ee,onOnSortMode:A,onOnReload:x,onOnAdvanceSearch:me,onOnItemDelete:pe,onOnNewForm:J},null,8,["icon","title","loading","frist-load","pages","headers","sort","list"])]),_:1}))}}),co=At(Yt,[["__scopeId","data-v-b8bc127b"]]);export{co as default};
