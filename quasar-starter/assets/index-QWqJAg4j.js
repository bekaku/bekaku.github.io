import{l as I,u as N,r as A,m as L,n as M,w as B,x as E,a5 as e,bt as P,$ as v}from"./index-BUKV_9O1.js";import{u as x}from"./useCrudList-zAKhFXTl.js";import{u as R}from"./useAppMeta-eA7SJycm.js";import{I as t,C as o,a as k}from"./CrudApiList-CLqYkaLh.js";import"./useSort-kIMN6SL_.js";import"./useAxios-578BH76m.js";import"./use-meta-BfsM_rxZ.js";import"./ClosePopup-DPKYBDjj.js";import"./Paging.vue_vue_type_script_setup_true_lang-Dn4teIE6.js";import"./BaseCard-CVr34Mor.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BaseButton-CaTrqY0C.js";const K=I({__name:"index",setup(w){R();const{t:r}=N(),a=A([{label:"model_role_id",column:"id",type:o.NUMBER_FORMAT,options:{searchable:!0,sortable:!0,searchType:t.NUMBER,searchModel:"",searchOperation:"="}},{label:"model_role_name",column:"name",type:o.TEXT,options:{fillable:!0,searchable:!0,sortable:!0,searchType:t.TEXT,searchModel:"",searchOperation:":"}},{label:"model_permission_frontEnd",column:"frontEnd",type:o.STATUS,options:{fillable:!0,sortable:!0,searchable:!0,align:"center",searchType:t.BOOLEAN,searchModel:!1,searchOperation:"="}},{label:"base.enable",column:"active",type:o.STATUS,options:{fillable:!0,sortable:!0,searchable:!0,align:"center",searchType:t.BOOLEAN,searchModel:!1,searchOperation:"="}},{label:"base.tool",type:o.BASE_TOOL,options:{fillable:!0,editButton:!0,deleteButton:!0,copyButton:!0,align:"center"}}]),{loading:l,crudName:s,fristLoad:i,pages:p,sort:d,filteredList:c,onItemClick:m,onItemCopy:u,onPageNoChange:O,onItemPerPageChange:h,onSort:f,onSortMode:g,onReload:b,filterText:C,onAdvanceSearch:S,onItemDelete:T,onNewForm:_}=x({crudName:"role",apiEndpoint:"/api",fetchListOnload:!0,defaultSort:{column:"name",mode:"asc"}},a);return(U,n)=>(M(),L(v,{padding:""},{default:B(()=>[E(k,{icon:e(P),title:e(r)("model_role"),loading:e(l),"crud-name":e(s),"frist-load":e(i),pages:e(p),headers:a.value,sort:e(d),list:e(c),onOnItemClick:e(m),onOnItemCopy:e(u),onOnPageNoChange:e(O),onOnItemsPerpageChange:e(h),onOnSort:e(f),onOnSortMode:e(g),onOnReload:e(b),onUpdateSearch:n[0]||(n[0]=y=>C.value=y),onOnAdvanceSearch:e(S),onOnItemDelete:e(T),onOnNewForm:e(_)},null,8,["icon","title","loading","crud-name","frist-load","pages","headers","sort","list","onOnItemClick","onOnItemCopy","onOnPageNoChange","onOnItemsPerpageChange","onOnSort","onOnSortMode","onOnReload","onOnAdvanceSearch","onOnItemDelete","onOnNewForm"])]),_:1}))}});export{K as default};
