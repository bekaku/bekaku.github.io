const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AppResult-C3oSsT45.js","assets/index-C1BRECWX.js","assets/index-BqtQn6ht.css","assets/DatePicker-DZYvyoR8.js","assets/ClosePopup-D1nvKGL2.js","assets/Togle-BRe19slC.js","assets/CrudApiListHeaderFilter-C_3n4g5M.js"])))=>i.map(i=>d[i]);
import{a as Ce,u as Qe,r as P,f as I,T as tt,bK as Ie,e5 as at,bP as qe,bL as Oe,bM as ot,bQ as nt,bR as rt,b1 as lt,e6 as Pe,e7 as st,d3 as it,bJ as Ee,d as Be,e8 as ut,aG as ct,_ as Ve,B as o,C as f,E as u,F as i,bp as ze,b8 as Xe,al as ye,aV as dt,O as S,R as _,aa as ke,H as m,ai as g,aW as K,aq as ae,ab as oe,ac as F,I as b,N as D,ah as v,ag as q,af as O,aU as N,e9 as je,bj as mt,bl as ht,b$ as ft,ea as vt,aD as yt,eb as gt,ec as kt,bc as _t,X as bt,cp as pt,bE as St,ed as wt,ee as At,cn as Pt,a6 as Et,aH as Tt,Y as he,ef as Ct,eg as Bt,eh as Vt,ei as Mt,ej as xt,Z as fe,ak as E,M as ve,a7 as Nt,a8 as It,$ as De,be as Ue,S as Le,aE as Ot,bf as Dt,aJ as Fe,dH as Ut,dI as Lt,ap as He,aK as Re,ad as Ft,ae as Te}from"./index-C1BRECWX.js";import{u as Ke}from"./useSort-qBY4f6Ap.js";import{u as Ht}from"./useAxios-Com3o9vK.js";import{C as ne}from"./ClosePopup-D1nvKGL2.js";import Rt from"./Paging-BocqX5An.js";const Ca=(t,h)=>{const{pages:l,sort:e,resetSort:V}=Ke(t?t.defaultSort:void 0,t?t.itemsPerPage:10),{t:M}=Ce(),{appGoto:n,getCurrentPath:s,getQuery:a,appConfirm:T,appLoading:w,inputSanitizeHtml:W}=Qe(),{callAxios:H}=Ht(),k=P([]),U=P(!1),R=P(!1),re=P(),L=P(""),x=P(""),G=P(""),Z=P(t.additionalUri),z=P(t.actionList),J=P(t.actionDelete),X=P(h!=null?h.value:[]),le=I(()=>{const r=[];return X.value&&X.value.length>0?X.value.filter(d=>d.options&&d.options.searchable===!0):r}),ce=r=>le.value.find(d=>d.column===r)!=null,_e=()=>{const r=a(Pe),d=r==null?void 0:r.split(","),A=st;if(d&&d.length>0)for(const B of d)for(const te in A)be(B,A[te])},be=(r,d)=>{const A=r.split(d);A.length==2&&ce(A[0])&&(L.value?L.value+=","+r.trim():L.value=`${Pe}=${r.trim()}`)};_e(),tt(async()=>{t.fetchListOnload&&await ee(),t.mockData&&(t.mockData.totalPages!=null&&(l.value.totalPages=t.mockData.totalPages),t.mockData.totalElements!=null&&(l.value.totalElements=t.mockData.totalElements),t.mockData.last!=null&&(l.value.last=t.mockData.last),k.value=t.mockData.dataList,U.value=!0)});const pe=I(()=>z.value?z.value:t.apiEndpoint&&t.crudName?t.apiEndpoint+"/"+Ie(t.crudName):""),j=I(()=>J.value?J.value:t.apiEndpoint&&t.crudName?t.apiEndpoint+"/"+Ie(t.crudName):""),Y=I(()=>{let r=!1,d="";return(t.pageAble==null||t.pageAble)&&(d+=`page=${t.pageStartZero==null||t.pageStartZero?l.value.current>0?l.value.current-1:0:l.value.current}`,d+=`&size=${l.value.itemsPerPage}`,r=!0),(t.sortAble==null||t.sortAble)&&(r&&(d+="&"),d+=`${e.value.column&&e.value.mode?"sort="+e.value.column+","+e.value.mode:""}`,r=!0),L.value&&(r&&(d+="&"),d+=`${L.value}`,r=!0),x.value&&(r&&(d+="&"),d+=`${at}=${x.value}`,r=!0),Z.value&&(r&&(d+="&"),d+=`${Z.value}`,r=!0),qe(d)?void 0:d}),se=I(()=>`${pe.value}${Y.value?"?"+Y.value:""}`),$=I(()=>{if(t)return`${s(!1)}${Y.value?"?"+Y.value:""}`}),ee=async()=>{if(!se.value)return new Promise(d=>{d(!1)});R.value=!0;const r=await H({API:se.value,method:"GET"});return new Promise(d=>{!Oe(r)&&!ot(r)&&(nt(r)?(k.value=r.dataList,r.totalPages!=null&&(l.value.totalPages=r.totalPages),r.totalElements!=null&&(l.value.totalElements=r.totalElements),r.last!=null&&(l.value.last=r.last)):rt(r)&&r!=null&&(k.value=r)),U.value||(U.value=!0),R.value=!1,d(!0)})},ie=I(()=>{const r=k.value,d=G.value?G.value.toLowerCase().trim():null;if(!d)return r;let A=[];const B=le.value;if(B.length==0)return r;for(const te of B){const me=te.column;if(me&&r&&r.length>0){const $e=r.filter(Ae=>Ae[me]&&Ae[me].toString().toLowerCase().includes(d)&&!A.find(et=>et.id===Ae.id));A=A.concat($e)}}return A}),Se=async r=>{l.value.current=r,$.value&&Q()},Me=async r=>{l.value.itemsPerPage=r,$.value&&Q()},xe=async r=>{e.value.column===r?e.value.mode=e.value.mode==="asc"?"desc":"asc":e.value.column=r,Q()},Ne=async r=>{e.value.mode=r,Q()},Q=async()=>{$.value&&(n($.value),await ee())},de=r=>{x.value="",L.value=`${Pe}=${r}`,Q()},c=r=>{x.value=W(r),Q()},y=()=>{L.value="",l.value.current=1,k.value=[],V(),Q()},p=r=>new Promise(d=>{const A=ie.value.length>0?ie.value[r]:null;d(A)}),C=r=>new Promise(d=>{d(k.value.findIndex(A=>A.id===r))}),we=async(r,d)=>{if(await T(M("app.monogram"),M("base.deleteConfirm")))if(d){const B=await p(r);if(B){const te=await C(B.id);w(),await ue(B.id)&&te!=-1&&k.value.splice(te,1),w(!1)}}else{w();for(const B of r)await ue(B);await ee(),w(!1)}},ue=async r=>{const d=`${j.value}/${r}`,A=await H({API:d,method:"DELETE"});return Oe(A)||it(A)?new Promise(B=>{B(!1)}):new Promise(B=>{B(!!(A&&A.status=="OK"))})},Ge=()=>{t.apiEndpoint&&t.crudName&&n(`${t.crudName.replaceAll("_","-")}/${Ee.NEW}/0`)},Ze=async r=>{const d=await p(r);d&&t.apiEndpoint&&t.crudName&&n(`${t.crudName.replaceAll("_","-")}/${Ee.VIEW}/${d.id}`)},Je=async r=>{const d=await p(r);d&&t.apiEndpoint&&t.crudName&&n(`${t.crudName.replaceAll("_","-")}/${Ee.COPY}/${d.id}`)};lt(()=>{k.value=[],L.value="",x.value="",G.value="",re.value=void 0,Z.value=void 0,z.value=void 0,J.value=void 0});const Ye={onPageNoChange:Se,onItemPerPageChange:Me,fetchList:ee,onSort:xe,onSortMode:Ne,onReload:y,filteredList:ie,onAdvanceSearch:de,onKeywordSearch:c,onItemDelete:we,onNewForm:Ge,onItemClick:Ze,onItemCopy:Je,getItemByIndex:p};return{pages:l,sort:e,resetSort:V,loading:R,fristLoad:U,dataList:k,filterText:G,keywordSearchText:x,crudName:t.crudName,manualActionList:re,additionalUri:Z,actionList:z,actionDelete:J,listHeader:X,...Ye}};var ge=(t=>(t[t.TEXT=0]="TEXT",t[t.HTML=1]="HTML",t[t.IMAGE=2]="IMAGE",t[t.AVATAR=3]="AVATAR",t[t.STATUS=4]="STATUS",t[t.DATE=5]="DATE",t[t.DATE_TIME=6]="DATE_TIME",t[t.LINKABLE=7]="LINKABLE",t[t.BASE_TOOL=8]="BASE_TOOL",t[t.NUMBER_FORMAT=9]="NUMBER_FORMAT",t[t.ICON=10]="ICON",t[t.FUNCTION=11]="FUNCTION",t))(ge||{}),We=(t=>(t[t.TEXT=0]="TEXT",t[t.NUMBER=1]="NUMBER",t[t.BOOLEAN=2]="BOOLEAN",t[t.DATE=3]="DATE",t[t.DATETIME=4]="DATETIME",t))(We||{});const Qt=Be({__name:"AppSort",props:{fields:{type:Array,default:()=>[]},sort:{type:Object,default:null},icon:{type:String,default:ut},label:{type:String,default:void 0},width:{type:Number,default:200},listDense:{type:Boolean,default:!0},btnRound:{type:Boolean,default:!0}},emits:["on-sort-column","on-sort-mode"],setup(t,{expose:h,emit:l}){h();const e=t,V=l,{t:M}=Ce(),{sortMode:n}=Ke(),T={props:e,emit:V,t:M,sortMode:n,onSortColumn:w=>{w&&e.sort.column!==w&&V("on-sort-column",w)},onSortMode:w=>{w&&e.sort.mode!==w&&V("on-sort-mode",w)},get biCheck(){return ct}};return Object.defineProperty(T,"__isScriptSetup",{enumerable:!1,value:!0}),T}});function qt(t,h,l,e,V,M){return o(),f(O,{class:"q-mx-sm",flat:"",round:l.btnRound,icon:l.icon,label:l.label},{default:u(()=>[i(ze,null,{default:u(()=>[i(Xe,{style:ye(`min-width: ${l.width}px`),dense:l.listDense},{default:u(()=>[i(dt,{header:""},{default:u(()=>[S(_(e.t("sort.sort")),1)]),_:1}),i(ke),(o(!0),m(g,null,K(l.fields,(n,s)=>ae((o(),f(oe,{clickable:"",key:"sort-fields-"+s,onClick:a=>e.onSortColumn(n.value)},{default:u(()=>[i(F,null,{default:u(()=>[b("span",null,[S(_(n.label),1),l.sort.column===n.value?(o(),f(D,{key:0,class:"q-ml-sm",name:e.biCheck},null,8,["name"])):v("",!0)])]),_:2},1024)]),_:2},1032,["onClick"])),[[ne]])),128)),i(ke),(o(!0),m(g,null,K(e.sortMode,(n,s)=>ae((o(),f(oe,{clickable:"",key:"sort-mode-"+s,onClick:a=>e.onSortMode(n.value)},{default:u(()=>[i(F,null,{default:u(()=>[b("span",null,[S(_(n.label)+" ",1),l.sort.mode===n.value?(o(),f(D,{key:0,class:"q-ml-sm",name:e.biCheck},null,8,["name"])):v("",!0)])]),_:2},1024)]),_:2},1032,["onClick"])),[[ne]])),128))]),_:1},8,["style","dense"])]),_:1}),i(q,null,{default:u(()=>[S(_(e.t("sort.sort")),1)]),_:1})]),_:1},8,["round","icon","label"])}const zt=Ve(Qt,[["render",qt],["__file","AppSort.vue"]]),Xt=Be({__name:"SkeletonTable",props:{rows:{type:Number,default:5},flat:{type:Boolean,default:!0}},setup(t,{expose:h}){h();const l={};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),jt={class:"text-left",style:{width:"150px"}},Kt={class:"text-right"},Wt={class:"text-right"},Gt={class:"text-right"},Zt={class:"text-right"},Jt={class:"text-right"},Yt={class:"text-left"},$t={class:"text-right"},ea={class:"text-right"},ta={class:"text-right"},aa={class:"text-right"},oa={class:"text-right"};function na(t,h,l,e,V,M){return o(),f(je,{flat:l.flat},{default:u(()=>[b("thead",null,[b("tr",null,[b("th",jt,[i(N,{animation:"blink",type:"text"})]),b("th",Kt,[i(N,{animation:"blink",type:"text"})]),b("th",Wt,[i(N,{animation:"blink",type:"text"})]),b("th",Gt,[i(N,{animation:"blink",type:"text"})]),b("th",Zt,[i(N,{animation:"blink",type:"text"})]),b("th",Jt,[i(N,{animation:"blink",type:"text"})])])]),b("tbody",null,[(o(!0),m(g,null,K(l.rows,n=>(o(),m("tr",{key:n},[b("td",Yt,[i(N,{animation:"blink",type:"text",width:"85px"})]),b("td",$t,[i(N,{animation:"blink",type:"text",width:"50px"})]),b("td",ea,[i(N,{animation:"blink",type:"text",width:"35px"})]),b("td",ta,[i(N,{animation:"blink",type:"text",width:"65px"})]),b("td",aa,[i(N,{animation:"blink",type:"text",width:"25px"})]),b("td",oa,[i(N,{animation:"blink",type:"text",width:"85px"})])]))),128))])]),_:1},8,["flat"])}const ra=Ve(Xt,[["render",na],["__file","SkeletonTable.vue"]]),la=t=>typeof t=="number"?!1:typeof t=="string"?t.trim().length===0:Array.isArray(t)?t.length===0:typeof t=="object"?t==null||Object.keys(t).length===0:typeof t=="boolean"?!1:!t,sa=(t,h)=>{const l=h.split(".");if(Array.isArray(l)){const e=l.pop(),V=l.length;let M=1,n=l[0];for(;(t=t[n])&&M<V;)n=l[M],M++;if(!la(t))return t[e]}},ia=Be({__name:"CrudApiList",props:{crudName:{type:String,default:""},viewPermission:{type:String,default:""},managePermission:{type:String,default:""},title:{type:String,default:""},icon:{type:String,default:mt},list:{type:Array,default:()=>[]},headers:{type:Array,default:()=>[]},sort:{type:Object,default:null},pages:{type:Object},fristLoad:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},showPaging:{type:Boolean,default:!0},isFrontend:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!0},showNewBtn:{type:Boolean,default:!0},showSearchBtn:{type:Boolean,default:!0},showSearchTextBox:{type:Boolean,default:!1},showThreeDot:{type:Boolean,default:!0},showFilter:{type:Boolean,default:!0},showSort:{type:Boolean,default:!0},fullWidth:{type:Boolean,default:!1}},emits:["on-page-no-change","on-items-perpage-change","update-search","on-sort","on-sort-mode","on-item-copy","on-item-click","on-item-delete","on-new-form","on-reload","on-advance-search","on-keyword-search"],setup(t,{expose:h,emit:l}){h();const e=he(()=>fe(()=>import("./AppResult-C3oSsT45.js"),__vite__mapDeps([0,1,2]))),V=he(()=>fe(()=>import("./DatePicker-DZYvyoR8.js"),__vite__mapDeps([3,1,2,4]))),M=he(()=>fe(()=>import("./Togle-BRe19slC.js"),__vite__mapDeps([5,1,2]))),n=he(()=>fe(()=>import("./CrudApiListHeaderFilter-C_3n4g5M.js"),__vite__mapDeps([6,1,2]))),s=t,a=l,{t:T,locale:w}=Ce(),{searchOperations:W,inputSanitizeHtml:H}=Qe(),k=ht(),U=P(s.pages),R=P(""),re=P(!1),L=P(!1),x=P([]),G=c=>{a("update-search",c)},Z=()=>{z(re.value)},z=c=>{if(x.value=[],c)for(let y=0;y<s.list.length;y++){const p=s.list[y];p&&x.value.push(p.id)}},J=()=>{x.value.length>0&&X(x.value,!1)},X=(c,y)=>{a("on-item-delete",c,y)},le=c=>{const p=s.list[c];if(p)return p},ce=(c,y)=>{const p=le(y);return!c||!p?null:c.split(".").length>1?sa(p,c):qe(p[c])?null:p[c]},_e=(c,y)=>{if(!c)return!1;const p=ce(c,y);return p?p===!0:!1},be=I(()=>{const y=s.headers.filter(C=>C.options&&C.options.sortable===!0),p=[];for(const C of y)p.push({value:C.options.sortColunm?C.options.sortColunm:C.column,label:T(C.label)});return p}),pe=I(()=>{const c=s.headers;return s.headers&&s.headers.length>0?s.headers.filter(y=>y.options&&y.options.fillable===!0):c}),j=I(()=>{const c=s.headers;return s.headers&&s.headers.length>0?s.headers.filter(y=>y.options&&y.options.searchable===!0):c}),Y=()=>{se(),a("on-reload")},se=()=>{if(j.value.length>0)for(const c of j.value)c.options&&(c.type==ge.STATUS?c.options.searchModel=!0:c.options.searchModel=null)},$=()=>{R.value="";let c="";if(j.value.length>0){for(const y of j.value)if(y.options){const p=y.options.searchOperation,C=y.options.searchModel,we=y.options.searchColunm?y.options.searchColunm:y.column;if(p!=null&&C!=null){let ue=H(C);y.type==ge.STATUS&&(ue=C),c&&(c+=","),c+=`${we}${p}${ue}`}}}a("on-advance-search",c)},ee=()=>{var c;((c=R.value)==null?void 0:c.trim().length)>=Ct&&a("on-keyword-search",H(R.value))},ie=I(()=>s.isFrontend?s.viewPermission?k.isHaveFrontendPermission(s.viewPermission):s.crudName?k.isHaveFrontendPermission(`${s.crudName}_view`):!0:s.viewPermission?k.isHavePermission(s.viewPermission):s.crudName?k.isHavePermission(`${s.crudName}_view`):!0),Se=I(()=>s.isFrontend?s.managePermission?k.isHaveFrontendPermission(s.managePermission):s.crudName?k.isHaveFrontendPermission(`${s.crudName}_manage`):!0:s.managePermission?k.isHavePermission(s.managePermission):s.crudName?k.isHavePermission(`${s.crudName}_manage`):!0),de={AppResult:e,DatePicker:V,FormTogle:M,CrudApiListHeaderFilter:n,props:s,emit:a,t:T,locale:w,searchOperations:W,inputSanitizeHtml:H,permissionStore:k,crudPages:U,filterText:R,selectedAll:re,showSearch:L,selected:x,updateSearchText:G,onCheckedAll:Z,updateSelectedAll:z,onDeleteItemSelected:J,onItemDelete:X,getItemByIndex:le,getValueByColunm:ce,getValueBoolean:_e,sortableHeaders:be,fillableHeaders:pe,searchableHeaders:j,onClearSearch:Y,onClearSearchModel:se,onAdvanceSearch:$,onKeywordSearch:ee,isHaveViewPermission:ie,isHaveManagePermission:Se,dateForMat:(c,y=void 0)=>c?Bt(c,y||Vt,w.value):void 0,datetimeForMat:(c,y=void 0)=>c?Mt(c,y||xt,w.value):void 0,onPageChange:async c=>{c&&U.value&&(U.value.current=c,a("on-page-no-change",c))},onPerPageChange:async c=>{c&&U.value&&(U.value.itemsPerPage=c,a("on-items-perpage-change",c))},AppSort:zt,AppPaging:Rt,SkeletonTable:ra,get CrudListDataType(){return ge},get ICrudListHeaderOptionSearchType(){return We},get biArrowClockwise(){return ft},get biCheckCircle(){return vt},get biChevronExpand(){return yt},get biClipboard(){return gt},get biEraser(){return kt},get biEye(){return _t},get biPencil(){return bt},get biPlus(){return pt},get biSearch(){return St},get biSortAlphaDown(){return wt},get biSortAlphaUpAlt(){return At},get biThreeDotsVertical(){return Pt},get biTrash(){return Et},get biX(){return Tt}};return Object.defineProperty(de,"__isScriptSetup",{enumerable:!1,value:!0}),de}}),ua={class:"col"},ca={class:"row items-center"},da={class:"text-h6"},ma={class:"row"},ha={key:0,class:"col-12 col-md-4 q-pa-sm"},fa={class:"q-gutter-md row items-center"},va={key:0},ya={key:0},ga={key:1},ka={key:0,class:"text-center"},_a={key:0,class:"text-center"},ba={key:0},pa=["alt"];function Sa(t,h,l,e,V,M){return o(),m("div",{class:Re(["row",{"wee-container-responsive-center":!l.fullWidth}])},[b("div",ua,[i(Le,{flat:"",bordered:""},{default:u(()=>[E(t.$slots,"headerCard"),i(ve,null,{default:u(()=>[i(Nt,null,{default:u(()=>[i(It,null,{default:u(()=>[E(t.$slots,"title",{},()=>[l.title?(o(),m(g,{key:0},[i(D,{name:l.icon},null,8,["name"]),S(" "+_(l.title),1)],64)):v("",!0)])]),_:3}),b("div",ca,[l.showSearchTextBox&&!e.showSearch?(o(),f(Ue,{key:0,onSubmit:e.onKeywordSearch},{default:u(()=>[i(De,{dense:"",outlined:"",rounded:"",clearable:"",style:{width:"350px"},modelValue:e.filterText,"onUpdate:modelValue":h[0]||(h[0]=n=>e.filterText=n),placeholder:e.t("base.searchHelp3")},{prepend:u(()=>[i(D,{name:e.biSearch},null,8,["name"])]),_:1},8,["modelValue","placeholder"])]),_:1})):v("",!0),E(t.$slots,"extraBeforeInnerToolbar"),e.isHaveManagePermission&&l.showNewBtn?(o(),f(O,{key:1,class:"q-ml-xs",flat:"",round:"",icon:e.biPlus,onClick:h[1]||(h[1]=n=>t.$emit("on-new-form"))},{default:u(()=>[i(q,null,{default:u(()=>[S(_(e.t("base.addNew")),1)]),_:1})]),_:1},8,["icon"])):v("",!0),l.showSearchBtn?(o(),f(O,{key:2,class:"q-ml-xs",flat:"",round:"",icon:e.biSearch,onClick:h[2]||(h[2]=n=>e.showSearch=!e.showSearch)},{default:u(()=>[i(q,null,{default:u(()=>[S(_(e.t("base.search")),1)]),_:1})]),_:1},8,["icon"])):v("",!0),l.showSort?(o(),f(e.AppSort,{key:3,sort:l.sort,fields:e.sortableHeaders,onOnSortColumn:h[3]||(h[3]=n=>t.$emit("on-sort",n)),onOnSortMode:h[4]||(h[4]=n=>t.$emit("on-sort-mode",n))},null,8,["sort","fields"])):v("",!0),l.showFilter?(o(),f(e.CrudApiListHeaderFilter,{key:4,headers:l.headers},null,8,["headers"])):v("",!0),l.showThreeDot?(o(),f(O,{key:5,flat:"",round:"",dense:"",icon:e.biThreeDotsVertical},{default:u(()=>[i(ze,null,{default:u(()=>[i(Xe,{style:{"min-width":"200px"},dense:""},{default:u(()=>[e.isHaveManagePermission&&l.showNewBtn?ae((o(),f(oe,{key:0,clickable:"",onClick:h[5]||(h[5]=n=>t.$emit("on-new-form"))},{default:u(()=>[i(F,{avatar:""},{default:u(()=>[i(D,{name:e.biPlus},null,8,["name"])]),_:1}),i(F,null,{default:u(()=>[S(_(e.t("base.addNew")),1)]),_:1})]),_:1})),[[ne]]):v("",!0),e.isHaveManagePermission&&l.showCheckbox?ae((o(),f(oe,{key:1,clickable:"",onClick:e.onDeleteItemSelected},{default:u(()=>[i(F,{avatar:""},{default:u(()=>[i(D,{name:e.biTrash},null,8,["name"])]),_:1}),i(F,null,{default:u(()=>[S(_(e.t("base.deleteSeleted")),1)]),_:1})]),_:1})),[[ne]]):v("",!0),l.showSearchBtn?ae((o(),f(oe,{key:2,clickable:"",onClick:h[6]||(h[6]=n=>e.showSearch=!0)},{default:u(()=>[i(F,{avatar:""},{default:u(()=>[i(D,{name:e.biSearch},null,8,["name"])]),_:1}),i(F,null,{default:u(()=>[S(_(e.t("base.searchAdvance")),1)]),_:1})]),_:1})),[[ne]]):v("",!0),i(ke),ae((o(),f(oe,{clickable:"",onClick:h[7]||(h[7]=n=>t.$emit("on-reload"))},{default:u(()=>[i(F,{avatar:""},{default:u(()=>[i(D,{name:e.biArrowClockwise},null,8,["name"])]),_:1}),i(F,null,{default:u(()=>[S(_(e.t("base.reload")),1)]),_:1})]),_:1})),[[ne]])]),_:1})]),_:1})]),_:1},8,["icon"])):v("",!0),E(t.$slots,"extraInnerToolbar")])]),_:3}),E(t.$slots,"extraToolbar")]),_:3}),e.showSearch?(o(),f(ve,{key:0,class:"q-mb-lg"},{default:u(()=>[i(Le,{flat:"",bordered:""},{default:u(()=>[i(ve,null,{default:u(()=>[b("div",da,_(e.t("base.search")),1)]),_:1}),i(Ue,{onSubmit:e.onAdvanceSearch,class:"q-pa-md"},{default:u(()=>[E(t.$slots,"topSearchExtra"),e.searchableHeaders.length>0?(o(),m(g,{key:0},[b("div",ma,[E(t.$slots,"topInnerSearchExtra"),(o(!0),m(g,null,K(e.searchableHeaders,(n,s)=>{var a,T,w,W,H;return o(),m(g,{key:`advance-search-${s}`},[n.options?(o(),m("div",ha,[b("div",fa,[((a=n.options)==null?void 0:a.searchType)==e.ICrudListHeaderOptionSearchType.TEXT||((T=n.options)==null?void 0:T.searchType)==e.ICrudListHeaderOptionSearchType.NUMBER?(o(),f(De,{key:0,outlined:"",dense:"",modelValue:n.options.searchModel,"onUpdate:modelValue":k=>n.options.searchModel=k,type:((w=n.options)==null?void 0:w.searchType)==e.ICrudListHeaderOptionSearchType.TEXT?"text":"number",label:e.t(n.label),clearable:"",style:{width:"100%"}},{before:u(()=>[n.options.searchOperationReadonly?v("",!0):(o(),f(Ot,{key:0,dense:"",filled:"",label:e.t(n.label),class:"q-mx-lg",modelValue:n.options.searchOperation,"onUpdate:modelValue":k=>n.options.searchOperation=k,options:e.searchOperations,"option-value":"value","option-label":"text","emit-value":"","map-options":"",readonly:n.options.searchOperationReadonly,style:{"min-width":"150px"},"dropdown-icon":e.biChevronExpand},null,8,["label","modelValue","onUpdate:modelValue","options","readonly","dropdown-icon"]))]),_:2},1032,["modelValue","onUpdate:modelValue","type","label"])):((W=n.options)==null?void 0:W.searchType)==e.ICrudListHeaderOptionSearchType.BOOLEAN?(o(),f(e.FormTogle,{key:1,"use-checkbox":"",useLabelTitle:"",label:e.t(n.label),modelValue:n.options.searchModel,"onUpdate:modelValue":k=>n.options.searchModel=k},null,8,["label","modelValue","onUpdate:modelValue"])):((H=n.options)==null?void 0:H.searchType)==e.ICrudListHeaderOptionSearchType.DATE?(o(),m(g,{key:2},[n.options.searchModel!=null?(o(),f(e.DatePicker,{key:0,dense:"",modelValue:n.options.searchModel,"onUpdate:modelValue":k=>n.options.searchModel=k,title:e.t(n.label)},null,8,["modelValue","onUpdate:modelValue","title"])):v("",!0)],64)):v("",!0)])])):v("",!0)],64)}),128)),E(t.$slots,"belowInnerSearchExtra")]),E(t.$slots,"belowSearchExtra"),i(ke),i(Dt,{align:"center"},{default:u(()=>[i(O,{type:"submit",flat:"",icon:e.biSearch,label:e.t("base.okay")},null,8,["icon","label"]),i(O,{flat:"",icon:e.biX,onClick:h[8]||(h[8]=n=>e.showSearch=!1),label:e.t("base.close")},null,8,["icon","label"]),i(O,{flat:"",icon:e.biEraser,onClick:e.onClearSearch,label:e.t("base.clear")},null,8,["icon","label"])]),_:1})],64)):v("",!0)]),_:3})]),_:3})]),_:3})):v("",!0),!l.fristLoad||l.loading?(o(),f(e.SkeletonTable,{key:1})):E(t.$slots,"table",{key:2},()=>[l.list.length>0?(o(),f(je,{key:0,separator:"cell",flat:"",bordered:""},{default:u(()=>[b("thead",null,[E(t.$slots,"theader",{},()=>[b("tr",null,[e.isHaveManagePermission&&l.showCheckbox?(o(),m("th",va,[i(Fe,{modelValue:e.selectedAll,"onUpdate:modelValue":h[9]||(h[9]=n=>e.selectedAll=n),onClick:e.onCheckedAll},{default:u(()=>[i(q,null,{default:u(()=>[S(_(e.selectedAll?e.t("base.deselectAll"):e.t("base.selectAll")),1)]),_:1})]),_:1},8,["modelValue"])])):v("",!0),(o(!0),m(g,null,K(e.fillableHeaders,(n,s)=>(o(),m(g,{key:`tblHeader-${s}`},[n.type===e.CrudListDataType.BASE_TOOL?(o(),m(g,{key:0},[e.isHaveManagePermission||e.isHaveViewPermission?(o(),m("th",ya,_(e.t(n.label)),1)):v("",!0)],64)):(o(),m("th",ga,[n.options&&n.options.sortable?(o(),f(O,{key:0,onClick:a=>t.$emit("on-sort",n.options.sortColunm?n.options.sortColunm:n.column),flat:""},{default:u(()=>[l.sort.column==n.options.sortColunm||l.sort.column==n.column?(o(),f(D,{key:0,name:l.sort.mode=="desc"?e.biSortAlphaUpAlt:e.biSortAlphaDown},null,8,["name"])):v("",!0),S(" "+_(e.t(n.label)),1)]),_:2},1032,["onClick"])):(o(),m(g,{key:1},[S(_(e.t(n.label)),1)],64))]))],64))),128))])])]),b("tbody",null,[E(t.$slots,"tbody",Ut(Lt({list:l.list,fillableHeaders:e.fillableHeaders})),()=>[(o(!0),m(g,null,K(l.list,(n,s)=>(o(),m("tr",{key:`item-tr-${s}`},[e.isHaveManagePermission&&l.showCheckbox?(o(),m("td",ka,[i(Fe,{modelValue:e.selected,"onUpdate:modelValue":h[10]||(h[10]=a=>e.selected=a),val:n.id},null,8,["modelValue","val"])])):v("",!0),(o(!0),m(g,null,K(e.fillableHeaders,(a,T)=>(o(),m(g,{key:`item-body-${T}`},[a.options?(o(),m(g,{key:0},[a.type===e.CrudListDataType.BASE_TOOL?(o(),m("td",_a,[E(t.$slots,"baseTool",He({ref_for:!0},{item:n,index:s}),()=>[e.isHaveManagePermission||e.isHaveViewPermission?(o(),m(g,{key:0},[a.options&&a.options.editButton?(o(),m(g,{key:0},[e.isHaveManagePermission||e.isHaveViewPermission?(o(),f(O,{key:0,onClick:w=>t.$emit("on-item-click",s),color:"primary",icon:e.isHaveManagePermission?e.biPencil:e.biEye,flat:"",round:""},{default:u(()=>[i(q,null,{default:u(()=>[S(_(e.isHaveManagePermission?e.t("base.edit"):e.t("base.view")),1)]),_:1})]),_:2},1032,["onClick","icon"])):v("",!0)],64)):v("",!0),a.options&&a.options.copyButton?(o(),m(g,{key:1},[e.isHaveManagePermission?(o(),f(O,{key:0,onClick:w=>t.$emit("on-item-copy",s),color:"primary",class:"q-ml-sm",icon:e.biClipboard,flat:"",round:""},{default:u(()=>[i(q,null,{default:u(()=>[S(_(e.t("base.copy")),1)]),_:1})]),_:2},1032,["onClick","icon"])):v("",!0)],64)):v("",!0),a.options&&a.options.deleteButton?(o(),m(g,{key:2},[e.isHaveManagePermission?(o(),f(O,{key:0,onClick:w=>e.onItemDelete(s,!0),color:"negative",class:"q-ml-sm",icon:e.biTrash,flat:"",round:""},{default:u(()=>[i(q,{class:"bg-negative"},{default:u(()=>[S(_(e.t("base.delete")),1)]),_:1})]),_:2},1032,["onClick","icon"])):v("",!0)],64)):v("",!0)],64)):v("",!0)]),E(t.$slots,"additionalBaseTool",He({ref_for:!0},{item:n,index:s}))])):(o(),m("td",{key:1,class:Re({"text-center":a.options&&a.options.align=="center","text-left":a.options&&a.options.align=="left","text-right":a.options&&a.options.align=="right","long-text-break":a.options&&a.options.maxWidth}),style:ye({maxWidth:a.options&&a.options.maxWidth?a.options.maxWidth:""})},[a.type===e.CrudListDataType.TEXT?(o(),m(g,{key:0},[a.options&&a.options.toolTip?(o(),m("span",ba,[S(_(a.column?e.getValueByColunm(a.column,s):"")+" ",1),i(q,null,{default:u(()=>[S(_(a.column?e.getValueByColunm(a.column,s):""),1)]),_:2},1024)])):(o(),m(g,{key:1},[S(_(a.column?e.getValueByColunm(a.column,s):""),1)],64))],64)):a.type===e.CrudListDataType.FUNCTION&&a.options&&a.options.func?(o(),m(g,{key:1},[a.column&&e.getValueByColunm(a.column,s)!=null?(o(),m(g,{key:0},[S(_(a.options.func(e.getValueByColunm(a.column,s))),1)],64)):v("",!0)],64)):a.type===e.CrudListDataType.NUMBER_FORMAT?(o(),m(g,{key:2},[S(_(a.column?e.getValueByColunm(a.column,s).toLocaleString():""),1)],64)):a.type===e.CrudListDataType.DATE?(o(),m(g,{key:3},[S(_(a.column?e.dateForMat(e.getValueByColunm(a.column,s)):""),1)],64)):a.type===e.CrudListDataType.DATE_TIME?(o(),m(g,{key:4},[S(_(a.column?e.datetimeForMat(e.getValueByColunm(a.column,s)):""),1)],64)):a.type===e.CrudListDataType.STATUS?(o(),f(D,{key:5,size:"sm",color:a.column&&e.getValueBoolean(a.column,s)?"positive":"grey-4",name:e.biCheckCircle},null,8,["color","name"])):a.type===e.CrudListDataType.AVATAR?(o(),m(g,{key:6},[a.column&&e.getValueByColunm(a.column,s)?(o(),f(Ft,{key:0,rounded:a.options.rounded,square:a.options.square,size:a.options.size?a.options.size:"36px"},{default:u(()=>[a.column&&e.getValueByColunm(a.column,s)?(o(),f(Te,{key:0,src:e.getValueByColunm(a.column,s),alt:"item-img-"+T,ratio:1},null,8,["src","alt"])):(o(),m("img",{key:1,src:"/avatar_default.png",alt:"item-img-"+T},null,8,pa))]),_:2},1032,["rounded","square","size"])):v("",!0)],64)):a.type===e.CrudListDataType.IMAGE?(o(),m(g,{key:7},[a.column&&e.getValueByColunm(a.column,s)?(o(),f(Te,{key:0,src:e.getValueByColunm(a.column,s),"spinner-color":"white",class:"bg-grey-8",ratio:4/3,style:ye(a.options.size?`width: ${a.options.size}; height: ${a.options.size}`:"width:55px;height:55px")},null,8,["src","style"])):(o(),f(Te,{key:1,src:"/images/no_picture_thumb.jpg","spinner-color":"white",class:"bg-grey-8",ratio:4/3,style:ye(a.options.size?`width: ${a.options.size}; height: ${a.options.size}`:"width:55px;height:55px")},null,8,["style"]))],64)):a.type===e.CrudListDataType.ICON?(o(),m(g,{key:8},[a.column?(o(),f(D,{key:0,name:e.getValueByColunm(a.column,s)},null,8,["name"])):v("",!0)],64)):v("",!0)],6))],64)):v("",!0)],64))),128))]))),128))])])]),_:3})):(o(),f(ve,{key:1,class:"text-center"},{default:u(()=>[i(e.AppResult,{status:"empty",description:e.t("error.dataNotfound")},null,8,["description"])]),_:1}))]),E(t.$slots,"paging",{},()=>[e.crudPages&&l.showPaging&&e.crudPages.totalPages>0?(o(),f(e.AppPaging,{key:0,modelValue:e.crudPages,"onUpdate:modelValue":h[11]||(h[11]=n=>e.crudPages=n),"boundary-numbers":!1,"onUpdate:current":e.onPageChange,"onUpdate:perPage":e.onPerPageChange},null,8,["modelValue"])):v("",!0)])]),_:3})])],2)}const Ba=Ve(ia,[["render",Sa],["__file","CrudApiList.vue"]]);export{ge as C,We as I,Ba as a,Ca as u};
