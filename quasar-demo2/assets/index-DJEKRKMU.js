import{d as N,a as T,r as y,a1 as L,a2 as k,_ as A,B,C as E,E as x,L as R,F as v}from"./index-jqmU7M3e.js";import{C as o,I as a,u as D,a as F}from"./CrudApiList-BQ8LB5_m.js";import{u as w}from"./useAppMeta-DNEh8Dai.js";import"./useSort-AXT6k6Sb.js";import"./useAxios-Ce_LYO3O.js";import"./ClosePopup-B9Y505Vn.js";import"./Paging-C18Cjole.js";import"./index-BSkhW1H0.js";import"./use-meta-DLLB1L9J.js";const U=N({__name:"index",setup(d,{expose:n}){n(),w();const{t:l}=T(),e=y([{label:"model_role_id",column:"id",type:o.NUMBER_FORMAT,options:{searchable:!0,sortable:!0,searchType:a.NUMBER,searchModel:"",searchOperation:"="}},{label:"model_role_name",column:"name",type:o.TEXT,options:{fillable:!0,searchable:!0,sortable:!0,searchType:a.TEXT,searchModel:"",searchOperation:":"}},{label:"model_permission_frontEnd",column:"frontEnd",type:o.STATUS,options:{fillable:!0,sortable:!0,searchable:!0,align:"center",searchType:a.BOOLEAN,searchModel:!1,searchOperation:"="}},{label:"base.enable",column:"active",type:o.STATUS,options:{fillable:!0,sortable:!0,searchable:!0,align:"center",searchType:a.BOOLEAN,searchModel:!1,searchOperation:"="}},{label:"base.tool",type:o.BASE_TOOL,options:{fillable:!0,editButton:!0,deleteButton:!0,copyButton:!0,align:"center"}}]),{loading:i,crudName:s,fristLoad:r,pages:m,sort:p,filteredList:g,onItemClick:h,onItemCopy:f,onPageNoChange:u,onItemPerPageChange:O,onSort:C,onSortMode:_,onReload:b,filterText:P,onAdvanceSearch:S,onItemDelete:I,onNewForm:M}=D({crudName:"role",apiEndpoint:"/api",fetchListOnload:!1,defaultSort:{column:"name",mode:"asc"},mockData:L},e),c={t:l,headers:e,loading:i,crudName:s,fristLoad:r,pages:m,sort:p,filteredList:g,onItemClick:h,onItemCopy:f,onPageNoChange:u,onItemPerPageChange:O,onSort:C,onSortMode:_,onReload:b,filterText:P,onAdvanceSearch:S,onItemDelete:I,onNewForm:M,onMockPageNoChange:t=>{console.log("onPageNoChange",t)},onMockItemPerPageChange:t=>{console.log("onItemPerPageChange",t)},CrudApiList:F,get biPeople(){return k}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}});function X(d,n,l,e,i,s){return B(),E(R,{padding:""},{default:x(()=>[v(e.CrudApiList,{icon:e.biPeople,title:e.t("model_role"),loading:e.loading,"crud-name":e.crudName,"frist-load":e.fristLoad,pages:e.pages,headers:e.headers,sort:e.sort,list:e.filteredList,onOnItemClick:e.onItemClick,onOnItemCopy:e.onItemCopy,onOnPageNoChange:e.onMockPageNoChange,onOnItemsPerpageChange:e.onMockItemPerPageChange,onOnSort:e.onSort,onOnSortMode:e.onSortMode,onOnReload:e.onReload,onUpdateSearch:n[0]||(n[0]=r=>e.filterText=r),onOnAdvanceSearch:e.onAdvanceSearch,onOnItemDelete:e.onItemDelete,onOnNewForm:e.onNewForm},null,8,["icon","title","loading","crud-name","frist-load","pages","headers","sort","list","onOnItemClick","onOnItemCopy","onOnSort","onOnSortMode","onOnReload","onOnAdvanceSearch","onOnItemDelete","onOnNewForm"])]),_:1})}const Z=A(U,[["render",X],["__file","index.vue"]]);export{Z as default};
