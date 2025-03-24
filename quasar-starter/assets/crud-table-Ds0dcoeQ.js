import{u as $}from"./useAppMeta-lJIxcsI_.js";import{l as U,u as X,r as v,a as F,o as R,c as V,m as x,n as z,w as H,x as J,J as f,y as j,bL as q}from"./index-CLKqN-vN.js";import{U as G}from"./UserService-BAnu7EYd.js";import{_ as K}from"./BasePage.vue_vue_type_script_setup_true_lang-Bcn-3NKS.js";import{C as c,I as g,a as Q}from"./CrudApiList-CjzL115e.js";import{u as W}from"./usePaging-W55WuPys.js";import{u as Y}from"./useSort-DebJu_YO.js";import"./use-meta-xuknqjA3.js";import"./useAxios-q9_gPrcg.js";import"./ClosePopup-BlTOv8y4.js";import"./Paging.vue_vue_type_script_setup_true_lang-CZNmpexT.js";import"./BaseCard-IBlaP6p_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BaseButton-B0k9Tcp5.js";const fe=U({__name:"crud-table",setup(Z){const{t:i}=X(),{setTitle:y}=$();y(`Crud table | ${i("app.name")}`);const C=v([{label:"Image",translateLabel:!1,column:"avatar.thumbnail",type:c.AVATAR,options:{fillable:!0,align:"center"}},{label:"Email",translateLabel:!1,column:"email",type:c.TEXT,options:{searchable:!0,sortable:!0,fillable:!0,searchType:g.TEXT,searchModel:"",searchOperation:":"}},{label:"Username",translateLabel:!1,column:"username",type:c.TEXT,options:{fillable:!0,searchable:!0,sortable:!0,searchType:g.TEXT,searchModel:"",searchOperation:":"}},{label:"Active",translateLabel:!1,column:"active",type:c.STATUS,options:{fillable:!0,sortable:!0,searchable:!0,align:"center",searchType:g.BOOLEAN,searchModel:!0,searchOperation:"=",clickable:!0}},{label:"Tools",translateLabel:!1,type:c.BASE_TOOL,options:{fillable:!0,editButton:!0,deleteButton:!0,copyButton:!0,align:"center"}}]),{findAll:h}=G(),{appConfirm:P}=F(),{pages:t,resetPaging:T}=W(5),{sort:a}=Y({column:"id",mode:"desc"}),o=v([]),u=v(!1),d=v(!1);R(async()=>{m()});const A=V(()=>`?page=${t.value.current}&size=${t.value.itemsPerPage}&sort=${a.value.column},${a.value.mode}`),m=async()=>{d.value=!0;const e=await h(A.value);return console.log("findAll",e),e&&(o.value=e.dataList,e.totalPages!=null&&(t.value.totalPages=e.totalPages),e.totalElements!=null&&(t.value.totalElements=e.totalElements),e.last!=null&&(t.value.last=e.last)),u.value||(u.value=!0),d.value=!1,new Promise(l=>l(!0))},L=async()=>{S(),await m()},S=()=>{T(),o.value=[],u.value=!1},w=e=>{console.log("onItemClick",e)},I=e=>{console.log("onItemCopy",e)},_=async e=>{console.log("onPageNoChange",e),e!=null&&(t.value.current=e,await m())},O=async e=>{console.log("onItemPerPageChange",e),e!=null&&(t.value.itemsPerPage=e,await m())},E=async e=>{a.value.column===e?a.value.mode=a.value.mode==="asc"?"desc":"asc":a.value.column=e,console.log("onSort",a.value),b()},b=async()=>{o.value=await q(o.value,a.value.column,a.value.mode||"asc")},k=async e=>{console.log("onSortMode",e),a.value.mode=e,b()},B=async e=>{console.log("onAdvanceSearch",e)},M=async(e,l)=>{await P(i("app.monogram"),i("base.deleteConfirm"))&&(console.log("onItemDelete",{indexOrIds:e,isSingle:l}),l?o.value=o.value.filter((s,r)=>r!==e):Array.isArray(e)&&(o.value=o.value.filter(s=>s.id&&!e.includes(s.id))))},N=()=>{console.log("onNewForm")},D=(e,l,n,s)=>{if(console.log("pages/permission/index.vue : onColClick",{index:l,event:e,headerOption:n,colValue:s}),n&&n.column&&n.column=="active"){const r=o.value[l];r&&(console.log("rowItem.active",r.active),o.value.map(p=>(p.id==r.id&&(p.active=!p.active),p)))}};return(e,l)=>(z(),x(K,null,{default:H(()=>[J(Q,{icon:f(j),title:f(i)("model_user"),"crud-name":"user",loading:d.value,"frist-load":u.value,pages:f(t),headers:C.value,sort:f(a),list:o.value,onOnItemClick:w,onOnItemCopy:I,onOnPageNoChange:_,onOnItemsPerpageChange:O,onOnSort:E,onOnSortMode:k,onOnReload:L,onOnAdvanceSearch:B,onOnItemDelete:M,onOnNewForm:N,onOnColClick:D},null,8,["icon","title","loading","frist-load","pages","headers","sort","list"])]),_:1}))}});export{fe as default};
