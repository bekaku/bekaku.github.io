import{l as I,u as N,r as M,m as A,n as B,w as E,x as L,a0 as e,bq as P,V as v}from"./index-D_to5wmt.js";import{u as x}from"./useCrudList-DAjLUkEi.js";import{u as R}from"./useAppMeta-B2j8xE5P.js";import{I as a,C as o,_ as k}from"./CrudApiList.vue_vue_type_script_setup_true_lang-l8X0DycE.js";import"./useSort-CQJ8lk8O.js";import"./useAxios-BVW2bjHp.js";import"./use-meta-Bp6Eaay9.js";import"./ClosePopup-B74q-YkR.js";import"./Paging.vue_vue_type_script_setup_true_lang-uXIHBVmj.js";import"./BaseCard-BeCehtGl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const J=I({__name:"index",setup(w){R();const{t:r}=N(),t=M([{label:"model_role_id",column:"id",type:o.NUMBER_FORMAT,options:{searchable:!0,sortable:!0,searchType:a.NUMBER,searchModel:"",searchOperation:"="}},{label:"model_role_name",column:"name",type:o.TEXT,options:{fillable:!0,searchable:!0,sortable:!0,searchType:a.TEXT,searchModel:"",searchOperation:":"}},{label:"model_permission_frontEnd",column:"frontEnd",type:o.STATUS,options:{fillable:!0,sortable:!0,searchable:!0,align:"center",searchType:a.BOOLEAN,searchModel:!1,searchOperation:"="}},{label:"base.enable",column:"active",type:o.STATUS,options:{fillable:!0,sortable:!0,searchable:!0,align:"center",searchType:a.BOOLEAN,searchModel:!1,searchOperation:"="}},{label:"base.tool",type:o.BASE_TOOL,options:{fillable:!0,editButton:!0,deleteButton:!0,copyButton:!0,align:"center"}}]),{loading:l,crudName:s,fristLoad:i,pages:p,sort:c,filteredList:d,onItemClick:m,onItemCopy:u,onPageNoChange:O,onItemPerPageChange:h,onSort:f,onSortMode:g,onReload:b,filterText:_,onAdvanceSearch:C,onItemDelete:S,onNewForm:T}=x({crudName:"role",apiEndpoint:"/api",fetchListOnload:!0,defaultSort:{column:"name",mode:"asc"}},t);return(U,n)=>(B(),A(v,{padding:""},{default:E(()=>[L(k,{icon:e(P),title:e(r)("model_role"),loading:e(l),"crud-name":e(s),"frist-load":e(i),pages:e(p),headers:t.value,sort:e(c),list:e(d),onOnItemClick:e(m),onOnItemCopy:e(u),onOnPageNoChange:e(O),onOnItemsPerpageChange:e(h),onOnSort:e(f),onOnSortMode:e(g),onOnReload:e(b),onUpdateSearch:n[0]||(n[0]=y=>_.value=y),onOnAdvanceSearch:e(C),onOnItemDelete:e(S),onOnNewForm:e(T)},null,8,["icon","title","loading","crud-name","frist-load","pages","headers","sort","list","onOnItemClick","onOnItemCopy","onOnPageNoChange","onOnItemsPerpageChange","onOnSort","onOnSortMode","onOnReload","onOnAdvanceSearch","onOnItemDelete","onOnNewForm"])]),_:1}))}});export{J as default};
