const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BaseResult-BxVjDszv.js","assets/BaseResult.vue_vue_type_script_setup_true_lang-YQvm5QEs.js","assets/index-BUKV_9O1.js","assets/index-Fr33gqm_.css","assets/BaseDatePicker-CnqEbf67.js","assets/BaseDatePicker.vue_vue_type_script_setup_true_lang-C3HMcchX.js","assets/ClosePopup-DPKYBDjj.js","assets/BaseToggle-C1AwKWgG.js","assets/BaseToggle.vue_vue_type_script_setup_true_lang-CRAh5qvJ.js","assets/CrudApiListHeaderFilter-CWAVVoxJ.js"])))=>i.map(i=>d[i]);
import{l as ie,eJ as Le,u as me,m as d,n,a4 as U,w as u,x as i,cB as we,bg as Be,ar as ne,V as m,au as De,W as f,X as y,a5 as a,bf as le,ah as v,aZ as C,a7 as M,b7 as j,as as G,at as V,t as h,a0 as c,av as S,af as pe,eK as Ae,aY as T,Z as ae,v as B,aD as We,ay as ve,eL as Xe,cs as je,by as Ee,dM as se,be as Ge,a as Ke,bu as Je,r as Z,c as H,aA as x,bv as Ye,bx as Ze,aI as ye,aC as he,bk as ee,cT as ke,aB as te,eM as He,aR as _e,aq as xe,aH as et,J as tt,eN as ot,aG as fe,p as nt,q as at,eO as st,c8 as lt,c9 as be,eP as it,eQ as ut,Y as ge,eR as rt,aW as dt,aU as de,eS as mt,i as ct,eT as pt,eU as vt,eV as yt,eW as ht,aJ as oe}from"./index-BUKV_9O1.js";import{C as K}from"./ClosePopup-DPKYBDjj.js";import{u as kt}from"./useSort-kIMN6SL_.js";import{_ as ft}from"./Paging.vue_vue_type_script_setup_true_lang-Dn4teIE6.js";import{B as bt}from"./BaseCard-CVr34Mor.js";import{B as W}from"./BaseButton-CaTrqY0C.js";import{_ as gt}from"./_plugin-vue_export-helper-DlAUqK2U.js";var A=(s=>(s[s.TEXT=0]="TEXT",s[s.HTML=1]="HTML",s[s.IMAGE=2]="IMAGE",s[s.AVATAR=3]="AVATAR",s[s.STATUS=4]="STATUS",s[s.DATE=5]="DATE",s[s.DATE_TIME=6]="DATE_TIME",s[s.LINKABLE=7]="LINKABLE",s[s.BASE_TOOL=8]="BASE_TOOL",s[s.NUMBER_FORMAT=9]="NUMBER_FORMAT",s[s.ICON=10]="ICON",s[s.FUNCTION=11]="FUNCTION",s))(A||{}),X=(s=>(s[s.TEXT=0]="TEXT",s[s.NUMBER=1]="NUMBER",s[s.BOOLEAN=2]="BOOLEAN",s[s.DATE=3]="DATE",s[s.DATETIME=4]="DATETIME",s))(X||{});const wt=ie({__name:"BaseSort",props:{fields:{type:Array,default:()=>[]},sort:{type:Object,default:null},icon:{type:String,default:Le},label:{type:String,default:void 0},width:{type:Number,default:200},listDense:{type:Boolean,default:!0},btnRound:{type:Boolean,default:!0}},emits:["on-sort-column","on-sort-mode"],setup(s,{emit:N}){const z=s,b=N,{t:R}=me(),{sortMode:Q}=kt(),$=l=>{l&&z.sort.column!==l&&b("on-sort-column",l)},k=l=>{l&&z.sort.mode!==l&&b("on-sort-mode",l)};return(l,E)=>(n(),d(U,{class:"q-mx-sm",flat:"",round:s.btnRound,icon:s.icon,label:s.label},{default:u(()=>[i(we,null,{default:u(()=>[i(Be,{style:ne(`min-width: ${s.width}px`),dense:s.listDense},{default:u(()=>[i(De,{header:""},{default:u(()=>[f(y(a(R)("sort.sort")),1)]),_:1}),i(le),(n(!0),m(v,null,C(s.fields,(g,O)=>j((n(),d(G,{clickable:"",key:"sort-fields-"+O,onClick:P=>$(g.value)},{default:u(()=>[i(V,null,{default:u(()=>[h("span",null,[f(y(g.label),1),s.sort.column===g.value?(n(),d(S,{key:0,class:"q-ml-sm",name:a(pe)},null,8,["name"])):c("",!0)])]),_:2},1024)]),_:2},1032,["onClick"])),[[K]])),128)),i(le),(n(!0),m(v,null,C(a(Q),(g,O)=>j((n(),d(G,{clickable:"",key:"sort-mode-"+O,onClick:P=>k(g.value)},{default:u(()=>[i(V,null,{default:u(()=>[h("span",null,[f(y(g.label)+" ",1),s.sort.mode===g.value?(n(),d(S,{key:0,class:"q-ml-sm",name:a(pe)},null,8,["name"])):c("",!0)])]),_:2},1024)]),_:2},1032,["onClick"])),[[K]])),128))]),_:1},8,["style","dense"])]),_:1}),i(M,null,{default:u(()=>[f(y(a(R)("sort.sort")),1)]),_:1})]),_:1},8,["round","icon","label"]))}}),Bt={class:"text-left",style:{width:"150px"}},At={class:"text-right"},Et={class:"text-right"},$t={class:"text-right"},Tt={class:"text-right"},St={class:"text-right"},Pt={class:"text-left"},Vt={class:"text-right"},Mt={class:"text-right"},zt={class:"text-right"},Nt={class:"text-right"},Ot={class:"text-right"},It=ie({__name:"SkeletonTable",props:{no:{default:5},flat:{type:Boolean,default:!0}},setup(s){return(N,z)=>(n(),d(Ae,{flat:N.flat},{default:u(()=>[h("thead",null,[h("tr",null,[h("th",Bt,[i(T,{animation:"blink",type:"text"})]),h("th",At,[i(T,{animation:"blink",type:"text"})]),h("th",Et,[i(T,{animation:"blink",type:"text"})]),h("th",$t,[i(T,{animation:"blink",type:"text"})]),h("th",Tt,[i(T,{animation:"blink",type:"text"})]),h("th",St,[i(T,{animation:"blink",type:"text"})])])]),h("tbody",null,[(n(!0),m(v,null,C(N.no,b=>(n(),m("tr",{key:b},[h("td",Pt,[i(T,{animation:"blink",type:"text",width:"85px"})]),h("td",Vt,[i(T,{animation:"blink",type:"text",width:"50px"})]),h("td",Mt,[i(T,{animation:"blink",type:"text",width:"35px"})]),h("td",zt,[i(T,{animation:"blink",type:"text",width:"65px"})]),h("td",Nt,[i(T,{animation:"blink",type:"text",width:"25px"})]),h("td",Ot,[i(T,{animation:"blink",type:"text",width:"85px"})])]))),128))])]),_:1},8,["flat"]))}}),Ut=ie({__name:"BaseCrudActionButton",props:{isHaveManagePermission:{type:Boolean},isHaveViewPermission:{type:Boolean},viewButton:{type:Boolean,default:!0},editButton:{type:Boolean,default:!0},copyButton:{type:Boolean,default:!0},deleteButton:{type:Boolean,default:!0},size:{default:"12px"},button:{type:Boolean,default:!1},crudAction:{},loading:{type:Boolean,default:!1}},emits:["on-item-click","on-item-copy","on-item-delete"],setup(s,{emit:N}){const z=N,{t:b}=me(),R=(l,E)=>{se(l),z("on-item-click",E)},Q=(l,E)=>{R(l,E)},$=l=>{se(l),z("on-item-copy")},k=l=>{se(l),z("on-item-delete")};return(l,E)=>l.isHaveManagePermission||l.isHaveViewPermission?(n(),m("div",{key:0,class:ae({"q-gutter-xs":!l.button,"q-gutter-md":l.button})},[l.viewButton&&l.isHaveViewPermission?(n(),d(W,{key:0,loading:l.loading,icon:a(We),flat:"",dense:"",round:"",size:l.size,onClick:E[0]||(E[0]=g=>R(g,"view"))},{default:u(()=>[l.button?c("",!0):(n(),d(M,{key:0},{default:u(()=>[f(y(a(b)("base.view")),1)]),_:1}))]),_:1},8,["loading","icon","size"])):c("",!0),l.editButton&&l.isHaveManagePermission?(n(),m(v,{key:1},[l.button?(n(),m(v,{key:1},[l.crudAction==="view"?(n(),d(W,{key:0,loading:l.loading,icon:a(ve),unelevated:l.button,color:"primary",outline:!1,size:l.size,label:a(b)("base.edit"),type:"button",onClick:E[2]||(E[2]=g=>Q(g,"edit"))},null,8,["loading","icon","unelevated","size","label"])):(n(),d(W,{key:1,loading:l.loading,icon:a(Xe),unelevated:"",color:"positive",size:l.size,label:l.crudAction=="edit"||l.crudAction=="new"||l.crudAction=="copy"?a(b)("base.save"):"",type:"submit"},{default:u(()=>[l.button?c("",!0):(n(),d(M,{key:0},{default:u(()=>[f(y(a(b)("base.edit")),1)]),_:1}))]),_:1},8,["loading","icon","size","label"]))],64)):(n(),d(W,{key:0,icon:a(ve),flat:"",dense:"",round:"",size:l.size,type:"button",onClick:E[1]||(E[1]=g=>Q(g,"edit"))},{default:u(()=>[i(M,null,{default:u(()=>[f(y(a(b)("base.edit")),1)]),_:1})]),_:1},8,["icon","size"]))],64)):c("",!0),l.copyButton&&l.isHaveManagePermission?(n(),d(W,{key:2,loading:l.loading,icon:a(je),flat:!l.button,dense:!l.button,size:l.size,outline:l.button,label:!l.button||l.crudAction==null?void 0:a(b)("base.copy"),onClick:$},{default:u(()=>[l.button?c("",!0):(n(),d(M,{key:0},{default:u(()=>[f(y(a(b)("base.copy")),1)]),_:1}))]),_:1},8,["loading","icon","flat","dense","size","outline","label"])):c("",!0),l.deleteButton&&l.isHaveManagePermission&&l.crudAction!=="copy"&&l.crudAction!=="new"?(n(),d(W,{key:3,color:"negative",loading:l.loading,icon:a(Ee),flat:!l.button,outline:!1,"outline-color":l.button?"negative":void 0,dense:!l.button,round:!l.button,size:l.size,label:!l.button||l.crudAction==null?void 0:a(b)("base.delete"),onClick:k},{default:u(()=>[l.button?c("",!0):(n(),d(M,{key:0,class:"bg-negative"},{default:u(()=>[f(y(a(b)("base.delete")),1)]),_:1}))]),_:1},8,["loading","icon","flat","outline-color","dense","round","size","label"])):c("",!0),B(l.$slots,"additionalBtn")],2)):c("",!0)}}),Rt={class:"col"},Ct={class:"row items-center"},Qt={class:"text-h6"},qt={class:"row"},Ft={key:0,class:"col-12 col-md-4 q-pa-sm"},Lt={class:"q-gutter-md row items-center"},Dt={key:0},Wt={key:0},Xt={key:1},jt=["onClick"],Gt={key:0,class:"text-center"},Kt={key:0,class:"text-center"},Jt=["onClick"],Yt={key:0},Zt=["alt"],Ht=ie({__name:"CrudApiList",props:{crudName:{},viewPermission:{},managePermission:{},byPassPermission:{type:Boolean,default:!1},title:{},icon:{default:()=>Ge},list:{},headers:{},sort:{},pages:{},fristLoad:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},showPaging:{type:Boolean,default:!0},showCheckbox:{type:Boolean,default:!0},showNewBtn:{type:Boolean,default:!0},showSearchBtn:{type:Boolean,default:!0},showSearchTextBox:{type:Boolean,default:!1},showThreeDot:{type:Boolean,default:!0},showFilter:{type:Boolean,default:!0},showSort:{type:Boolean,default:!0},fullWidth:{type:Boolean,default:!0},tableSeperator:{default:"horizontal"},rowClickable:{type:Boolean,default:!0}},emits:["on-page-no-change","on-items-perpage-change","update-search","on-sort","on-sort-mode","on-item-copy","on-item-click","on-item-delete","on-new-form","on-reload","on-advance-search","on-keyword-search","on-col-click"],setup(s,{emit:N}){const z=te(()=>oe(()=>import("./BaseResult-BxVjDszv.js"),__vite__mapDeps([0,1,2,3]))),b=te(()=>oe(()=>import("./BaseDatePicker-CnqEbf67.js"),__vite__mapDeps([4,5,2,3,6]))),R=te(()=>oe(()=>import("./BaseToggle-C1AwKWgG.js"),__vite__mapDeps([7,8,2,3]))),Q=te(()=>oe(()=>import("./CrudApiListHeaderFilter-CWAVVoxJ.js"),__vite__mapDeps([9,2,3]))),$=N,{t:k,locale:l}=me(),{searchOperations:E,inputSanitizeHtml:g}=Ke(),O=Je(),P=Z(s.pages),J=Z(""),_=Z(!1),q=Z(!1),F=Z([]),$e=()=>{Te(_.value)},Te=e=>{if(F.value=[],e)for(let r=0;r<s.list.length;r++){const t=s.list[r];t&&F.value.push(t.id)}},Se=()=>{F.value.length>0&&ce(F.value,!1)},ce=(e,r)=>{$("on-item-delete",e,r)},Pe=e=>{const t=s.list[e];if(t)return t},w=(e,r)=>{if(e==null)return null;const t=Pe(r);return!e||!t?null:e.split(".").length>1?mt(t,e):ct(t[e])?null:t[e]},Ve=(e,r)=>{if(!e)return!1;const t=w(e,r);return t?t===!0:!1},Me=H(()=>{const e=s.headers.filter(t=>t.options&&t.options.sortable===!0),r=[];for(const t of e)r.push({value:t.options.sortColunm?t.options.sortColunm:t.column,label:t.translateLabel==null||t.translateLabel?k(t.label):t.label});return r}),ue=H(()=>s.headers&&s.headers.length>0?s.headers.filter(e=>e.options&&e.options.fillable===!0):s.headers),L=H(()=>s.headers&&s.headers.length>0?s.headers.filter(e=>e.options&&e.options.searchable===!0):s.headers),ze=()=>{Ne(),$("on-reload")},Ne=()=>{if(L.value.length>0)for(const e of L.value)e.options&&(e.type==A.STATUS?e.options.searchModel=!0:e.options.searchModel=null)},Oe=()=>{J.value="";let e="";if(L.value.length>0){for(const r of L.value)if(r.options){const t=r.options.searchOperation,p=r.options.searchModel,o=r.options.searchColunm?r.options.searchColunm:r.column;if(t!=null&&p!=null){let D=g(p);r.type==A.STATUS&&(D=p),e&&(e+=","),e+=`${o}${t}${D}`}}}$("on-advance-search",e)},Ie=()=>{J.value?.trim().length>=st&&$("on-keyword-search",g(J.value))},Y=H(()=>s.byPassPermission?!0:s.viewPermission?O.isHavePermission(s.viewPermission):s.crudName?O.isHavePermission([`${s.crudName}_view`]):!0),I=H(()=>s.byPassPermission?!0:s.managePermission?O.isHavePermission(s.managePermission):s.crudName?O.isHavePermission([`${s.crudName}_manage`]):!0),Ue=(e,r=void 0)=>e?pt(e,r||vt,l.value):void 0,Re=(e,r=void 0)=>e?yt(e,r||ht,l.value):void 0,Ce=async e=>{e&&P.value&&(P.value.current=e,$("on-page-no-change",e))},Qe=async e=>{e&&P.value&&(P.value.itemsPerPage=e,$("on-items-perpage-change",e))},qe=(e,r)=>{!s.rowClickable&&Y.value||$("on-item-click",r,"view")},Fe=(e,r,t,p)=>{t?.options.clickable&&(se(e),$("on-col-click",e,r,t,p))};return(e,r)=>(n(),m("div",{class:ae(["row",{"content-limit":!e.fullWidth}])},[h("div",Rt,[i(bt,null,{default:u(()=>[B(e.$slots,"headerCard",{},void 0,!0),i(x,null,{default:u(()=>[i(Ye,null,{default:u(()=>[i(Ze,null,{default:u(()=>[B(e.$slots,"title",{},()=>[e.title?(n(),m(v,{key:0},[i(S,{name:e.icon},null,8,["name"]),f(" "+y(e.title),1)],64)):c("",!0)],!0)]),_:3}),h("div",Ct,[e.showSearchTextBox&&!q.value?(n(),d(ye,{key:0,onSubmit:Ie},{default:u(()=>[i(he,{dense:"",outlined:"",rounded:"",clearable:"",style:{width:"350px"},modelValue:J.value,"onUpdate:modelValue":r[0]||(r[0]=t=>J.value=t),placeholder:a(k)("base.searchHelp3")},{prepend:u(()=>[i(S,{name:a(ee)},null,8,["name"])]),_:1},8,["modelValue","placeholder"])]),_:1})):c("",!0),B(e.$slots,"extraBeforeInnerToolbar",{},void 0,!0),I.value&&e.showNewBtn?(n(),d(U,{key:1,class:"q-ml-xs",flat:"",round:"",icon:a(ke),onClick:r[1]||(r[1]=t=>e.$emit("on-new-form"))},{default:u(()=>[i(M,null,{default:u(()=>[f(y(a(k)("base.addNew")),1)]),_:1})]),_:1},8,["icon"])):c("",!0),e.showSearchBtn?(n(),d(U,{key:2,class:"q-ml-xs",flat:"",round:"",icon:a(ee),onClick:r[2]||(r[2]=t=>q.value=!q.value)},{default:u(()=>[i(M,null,{default:u(()=>[f(y(a(k)("base.search")),1)]),_:1})]),_:1},8,["icon"])):c("",!0),e.showSort&&e.sort?(n(),d(wt,{key:3,sort:e.sort,fields:Me.value,onOnSortColumn:r[3]||(r[3]=t=>e.$emit("on-sort",t)),onOnSortMode:r[4]||(r[4]=t=>e.$emit("on-sort-mode",t))},null,8,["sort","fields"])):c("",!0),e.showFilter?(n(),d(a(Q),{key:4,headers:e.headers},null,8,["headers"])):c("",!0),e.showThreeDot?(n(),d(U,{key:5,flat:"",round:"",dense:"",icon:a(He)},{default:u(()=>[i(we,null,{default:u(()=>[i(Be,{style:{"min-width":"200px"},dense:""},{default:u(()=>[I.value&&e.showNewBtn?j((n(),d(G,{key:0,clickable:"",onClick:r[5]||(r[5]=t=>e.$emit("on-new-form"))},{default:u(()=>[i(V,{avatar:""},{default:u(()=>[i(S,{name:a(ke)},null,8,["name"])]),_:1}),i(V,null,{default:u(()=>[f(y(a(k)("base.addNew")),1)]),_:1})]),_:1})),[[K]]):c("",!0),I.value&&e.showCheckbox?j((n(),d(G,{key:1,clickable:"",onClick:Se},{default:u(()=>[i(V,{avatar:""},{default:u(()=>[i(S,{name:a(Ee)},null,8,["name"])]),_:1}),i(V,null,{default:u(()=>[f(y(a(k)("base.deleteSeleted")),1)]),_:1})]),_:1})),[[K]]):c("",!0),e.showSearchBtn?j((n(),d(G,{key:2,clickable:"",onClick:r[6]||(r[6]=t=>q.value=!0)},{default:u(()=>[i(V,{avatar:""},{default:u(()=>[i(S,{name:a(ee)},null,8,["name"])]),_:1}),i(V,null,{default:u(()=>[f(y(a(k)("base.searchAdvance")),1)]),_:1})]),_:1})),[[K]]):c("",!0),i(le),j((n(),d(G,{clickable:"",onClick:r[7]||(r[7]=t=>e.$emit("on-reload"))},{default:u(()=>[i(V,{avatar:""},{default:u(()=>[i(S,{name:a(_e)},null,8,["name"])]),_:1}),i(V,null,{default:u(()=>[f(y(a(k)("base.reload")),1)]),_:1})]),_:1})),[[K]])]),_:1})]),_:1})]),_:1},8,["icon"])):c("",!0),B(e.$slots,"extraInnerToolbar",{},void 0,!0)])]),_:3}),B(e.$slots,"extraToolbar",{},void 0,!0)]),_:3}),q.value?(n(),d(x,{key:0,class:"q-mb-lg"},{default:u(()=>[i(xe,{flat:"",bordered:""},{default:u(()=>[i(x,null,{default:u(()=>[h("div",Qt,y(a(k)("base.search")),1)]),_:1}),i(ye,{onSubmit:Oe,class:"q-pa-md"},{default:u(()=>[B(e.$slots,"topSearchExtra",{},void 0,!0),L.value.length>0?(n(),m(v,{key:0},[h("div",qt,[B(e.$slots,"topInnerSearchExtra",{},void 0,!0),(n(!0),m(v,null,C(L.value,(t,p)=>(n(),m(v,{key:`advance-search-${p}`},[t.options?(n(),m("div",Ft,[h("div",Lt,[t.options?.searchType==a(X).TEXT||t.options?.searchType==a(X).NUMBER?(n(),d(he,{key:0,outlined:"",dense:"",modelValue:t.options.searchModel,"onUpdate:modelValue":o=>t.options.searchModel=o,type:t.options?.searchType==a(X).TEXT?"text":"number",label:t.translateLabel==null||t.translateLabel?a(k)(t.label):t.label,clearable:"",style:{width:"100%"}},{before:u(()=>[t.options.searchOperationReadonly?c("",!0):(n(),d(lt,{key:0,dense:"",filled:"",label:t.translateLabel==null||t.translateLabel?a(k)(t.label):t.label,class:"q-mx-lg",modelValue:t.options.searchOperation,"onUpdate:modelValue":o=>t.options.searchOperation=o,options:a(E),"option-value":"value","option-label":"text","emit-value":"","map-options":"",readonly:t.options.searchOperationReadonly,style:{"min-width":"150px"},"dropdown-icon":a(be)},null,8,["label","modelValue","onUpdate:modelValue","options","readonly","dropdown-icon"]))]),_:2},1032,["modelValue","onUpdate:modelValue","type","label"])):t.options?.searchType==a(X).BOOLEAN?(n(),d(a(R),{key:1,"use-checkbox":"",useLabelTitle:"",label:t.translateLabel==null||t.translateLabel?a(k)(t.label):t.label,modelValue:t.options.searchModel,"onUpdate:modelValue":o=>t.options.searchModel=o},null,8,["label","modelValue","onUpdate:modelValue"])):t.options?.searchType==a(X).DATE?(n(),m(v,{key:2},[t.options.searchModel!=null?(n(),d(a(b),{key:0,dense:"",modelValue:t.options.searchModel,"onUpdate:modelValue":o=>t.options.searchModel=o,label:t.translateLabel==null||t.translateLabel?a(k)(t.label):t.label},null,8,["modelValue","onUpdate:modelValue","label"])):c("",!0)],64)):c("",!0)])])):c("",!0)],64))),128)),B(e.$slots,"belowInnerSearchExtra",{},void 0,!0)]),B(e.$slots,"belowSearchExtra",{},void 0,!0),i(le),i(et,{align:"center"},{default:u(()=>[i(U,{type:"submit",flat:"",icon:a(ee),label:a(k)("base.okay")},null,8,["icon","label"]),i(U,{flat:"",icon:a(tt),onClick:r[8]||(r[8]=t=>q.value=!1),label:a(k)("base.close")},null,8,["icon","label"]),i(U,{flat:"",icon:a(ot),onClick:ze,label:a(k)("base.clear")},null,8,["icon","label"])]),_:1})],64)):c("",!0)]),_:3})]),_:3})]),_:3})):c("",!0),!e.fristLoad||e.loading?(n(),d(It,{key:1})):B(e.$slots,"table",{key:2},()=>[e.list.length>0?(n(),d(Ae,{key:0,separator:e.tableSeperator,flat:"",dense:"",bordered:"",class:"crud-table"},{default:u(()=>[h("thead",null,[B(e.$slots,"theader",{},()=>[h("tr",null,[I.value&&e.showCheckbox?(n(),m("th",Dt,[i(fe,{modelValue:_.value,"onUpdate:modelValue":r[9]||(r[9]=t=>_.value=t),onClick:$e},{default:u(()=>[i(M,null,{default:u(()=>[f(y(_.value?a(k)("base.deselectAll"):a(k)("base.selectAll")),1)]),_:1})]),_:1},8,["modelValue"])])):c("",!0),(n(!0),m(v,null,C(ue.value,(t,p)=>(n(),m(v,{key:`tblHeader-${p}`},[t.type===a(A).BASE_TOOL?(n(),m(v,{key:0},[I.value||Y.value?(n(),m("th",Wt,y(t.translateLabel==null||t.translateLabel?a(k)(t.label):t.label),1)):c("",!0)],64)):(n(),m("th",Xt,[t.options&&t.options.sortable?(n(),d(U,{key:0,class:"btn--no-hover",onClick:o=>e.$emit("on-sort",t.options.sortColunm?t.options.sortColunm:t.column),flat:"","no-caps":""},{default:u(()=>[e.sort&&e.sort.column==t.options.sortColunm||e.sort&&e.sort.column==t.column?(n(),d(S,{key:0,name:e.sort.mode=="desc"?a(it):a(ut),class:"q-mr-xs",size:"18px"},null,8,["name"])):c("",!0),f(" "+y(t.translateLabel==null||t.translateLabel?a(k)(t.label):t.label)+" ",1),i(S,{class:"q-ml-xs",size:"12px",name:a(be)},null,8,["name"])]),_:2},1032,["onClick"])):(n(),m(v,{key:1},[f(y(t.translateLabel==null||t.translateLabel?a(k)(t.label):t.label),1)],64))]))],64))),128))])],!0)]),h("tbody",null,[B(e.$slots,"tbody",nt(at({list:e.list,fillableHeaders:ue.value})),()=>[(n(!0),m(v,null,C(e.list,(t,p)=>(n(),m("tr",{key:`item-tr-${p}`,class:ae({"cursor-pointer":e.rowClickable&&Y.value}),onClick:o=>qe(o,p)},[I.value&&e.showCheckbox?(n(),m("td",Gt,[i(fe,{modelValue:F.value,"onUpdate:modelValue":r[10]||(r[10]=o=>F.value=o),val:t.id},null,8,["modelValue","val"])])):c("",!0),(n(!0),m(v,null,C(ue.value,(o,D)=>(n(),m(v,{key:`item-body-${D}`},[o.options?(n(),m(v,{key:0},[o.type===a(A).BASE_TOOL?(n(),m("td",Kt,[B(e.$slots,"baseTool",ge({ref_for:!0},{item:t,index:p}),()=>[I.value||Y.value?(n(),d(Ut,{key:0,"is-have-manage-permission":I.value,"is-have-view-permission":Y.value,"edit-button":o.options&&o.options.editButton||!1,"copy-button":o.options&&o.options.copyButton||!1,"delete-button":o.options&&o.options.deleteButton||!1,onOnItemClick:re=>e.$emit("on-item-click",p,re),onOnItemCopy:()=>e.$emit("on-item-copy",p),onOnItemDelete:()=>ce(p,!0)},null,8,["is-have-manage-permission","is-have-view-permission","edit-button","copy-button","delete-button","onOnItemClick","onOnItemCopy","onOnItemDelete"])):c("",!0)],!0),B(e.$slots,"additionalBaseTool",ge({ref_for:!0},{item:t,index:p}),void 0,!0)])):(n(),m("td",{key:1,style:ne({maxWidth:o.options&&o.options.maxWidth?o.options.maxWidth:""})},[h("div",{class:ae(["row",{"justify-center":o.options&&o.options.align=="center","justify-start":o.options&&o.options.align=="left","justify-end":o.options&&o.options.align=="right","long-text-break":o.options&&o.options.maxWidth}])},[h("div",{style:{width:"fit-content"},onClick:re=>Fe(re,p,o,w(o.column,p))},[o.type===a(A).TEXT?(n(),m(v,{key:0},[o.options&&o.options.toolTip?(n(),m("span",Yt,[f(y(o.column?w(o.column,p):"")+" ",1),i(M,null,{default:u(()=>[f(y(o.column?w(o.column,p):""),1)]),_:2},1024)])):(n(),m(v,{key:1},[f(y(o.column?w(o.column,p):""),1)],64))],64)):o.type===a(A).FUNCTION&&o.options&&o.options.func?(n(),m(v,{key:1},[o.column&&w(o.column,p)!=null?(n(),m(v,{key:0},[f(y(o.options.func(w(o.column,p))),1)],64)):c("",!0)],64)):o.type===a(A).NUMBER_FORMAT?(n(),m(v,{key:2},[f(y(o.column?w(o.column,p).toLocaleString():""),1)],64)):o.type===a(A).DATE?(n(),m(v,{key:3},[f(y(o.column?Ue(w(o.column,p)):""),1)],64)):o.type===a(A).DATE_TIME?(n(),m(v,{key:4},[f(y(o.column?Re(w(o.column,p)):""),1)],64)):o.type===a(A).STATUS?(n(),d(S,{key:5,size:"sm",color:o.column&&Ve(o.column,p)?"positive":"grey-4",name:a(rt)},null,8,["color","name"])):o.type===a(A).AVATAR?(n(),m(v,{key:6},[o.column&&w(o.column,p)?(n(),d(dt,{key:0,rounded:o.options.rounded,square:o.options.square,size:o.options.size?o.options.size:"36px"},{default:u(()=>[o.column&&w(o.column,p)?(n(),d(de,{key:0,src:w(o.column,p),alt:"item-img-"+D,ratio:1},null,8,["src","alt"])):(n(),m("img",{key:1,src:"/avatar_default.png",alt:"item-img-"+D},null,8,Zt))]),_:2},1032,["rounded","square","size"])):c("",!0)],64)):o.type===a(A).IMAGE?(n(),m(v,{key:7},[o.column&&w(o.column,p)?(n(),d(de,{key:0,src:w(o.column,p),"spinner-color":"white",class:"bg-grey-8",ratio:4/3,style:ne(o.options.size?`width: ${o.options.size}; height: ${o.options.size}`:"width:55px;height:55px")},null,8,["src","style"])):(n(),d(de,{key:1,src:"/images/no_picture_thumb.jpg","spinner-color":"white",class:"bg-grey-8",ratio:4/3,style:ne(o.options.size?`width: ${o.options.size}; height: ${o.options.size}`:"width:55px;height:55px")},null,8,["style"]))],64)):o.type===a(A).ICON?(n(),m(v,{key:8},[o.column?(n(),d(S,{key:0,name:w(o.column,p)},null,8,["name"])):c("",!0)],64)):c("",!0)],8,Jt)],2)],4))],64)):c("",!0)],64))),128))],10,jt))),128))],!0)])]),_:3},8,["separator"])):(n(),d(x,{key:1,class:"text-center"},{default:u(()=>[i(a(z),{status:"empty",description:a(k)("error.dataNotfound")},null,8,["description"])]),_:1}))],!0),B(e.$slots,"paging",{},()=>[P.value&&e.showPaging&&P.value.totalPages>0?(n(),d(ft,{key:0,modelValue:P.value,"onUpdate:modelValue":r[11]||(r[11]=t=>P.value=t),"boundary-numbers":!1,"onUpdate:current":Ce,"onUpdate:perPage":Qe},null,8,["modelValue"])):c("",!0)],!0)]),_:3})])],2))}}),so=gt(Ht,[["__scopeId","data-v-27221b70"]]);export{A as C,X as I,so as a};
