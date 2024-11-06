import{d as H,a as w,u as B,r as I,bF as L,aI as F,_ as T,B as u,C as h,E as l,F as a,M as U,bf as N,I as i,$ as E,aa as P,af as S,ag as X,O as c,R as m,aW as f,aK as _,b9 as O,ba as W,ab as x,ac as v,by as j,S as z}from"./index-C_yxR0el.js";import{a as A}from"./useAxios-D6zl6uXP.js";const D=H({__name:"SearchForm",props:{showHistory:{type:Boolean,require:!0}},emits:["on-submit"],setup(q,{expose:o,emit:g}){o();const{t:e}=w(),{inputSanitizeHtml:b}=B(),{SearchHistoryList:r}=A(),t=I(!1),d=g,s=I({q:"",post:!0,hashTag:!0,profile:!0,theme:!0}),Q=async()=>{s.value.q&&(s.value.q=b(s.value.q.trim()),s.value.q.length>=4&&(t.value=!0,await p(s.value),t.value=!1,y(s.value)))},p=n=>new Promise(C=>{r.value.find(k=>k.q==n.q)||r.value.push(n),C(!0)}),y=n=>{d("on-submit",n)},V={t:e,inputSanitizeHtml:b,SearchHistoryList:r,loading:t,emit:d,searchItem:s,onSubmit:Q,onAddHistory:p,onSearch:y,removeSearch:n=>{r.value.length>0&&r.value.splice(n,1)},get biSearch(){return L},get biX(){return F}};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}}),K={class:"row"},M={class:"col-12"},R={class:"col-12"},G={class:"q-gutter-sm"},J={class:"col-12"},Y={class:"text-grey-8 q-gutter-xs"};function Z(q,o,g,e,b,r){return u(),h(z,{style:{"min-height":"250px"}},{default:l(()=>[a(U,null,{default:l(()=>[a(N,{onSubmit:e.onSubmit,class:"q-gutter-md"},{default:l(()=>[i("div",K,[i("div",M,[a(E,{"bottom-slots":"",modelValue:e.searchItem.q,"onUpdate:modelValue":o[0]||(o[0]=t=>e.searchItem.q=t),label:e.t("searchHelp"),clearable:"",outlined:""},{append:l(()=>[a(P,{vertical:"",class:"q-mx-sm"}),a(S,{color:"primary",rounded:"",flat:"",icon:e.biSearch,onClick:e.onSubmit},{default:l(()=>[a(X,null,{default:l(()=>[c(m(e.t("base.search")),1)]),_:1})]),_:1},8,["icon"])]),_:1},8,["modelValue","label"])]),i("div",R,[a(f,{header:""},{default:l(()=>[c(m(e.t("searchType")),1)]),_:1}),i("div",G,[a(_,{modelValue:e.searchItem.post,"onUpdate:modelValue":o[1]||(o[1]=t=>e.searchItem.post=t),label:"Posts"},null,8,["modelValue"]),a(_,{modelValue:e.searchItem.profile,"onUpdate:modelValue":o[2]||(o[2]=t=>e.searchItem.profile=t),label:e.t("base.profile")},null,8,["modelValue","label"]),a(_,{modelValue:e.searchItem.hashTag,"onUpdate:modelValue":o[3]||(o[3]=t=>e.searchItem.hashTag=t),label:e.t("base.hashtag")},null,8,["modelValue","label"]),a(_,{modelValue:e.searchItem.theme,"onUpdate:modelValue":o[4]||(o[4]=t=>e.searchItem.theme=t),label:"Comments"},null,8,["modelValue"])])]),i("div",J,[a(f,{header:""},{default:l(()=>[c(m(e.t("searchHistory")),1)]),_:1}),a(O,{dense:""},{default:l(()=>[e.SearchHistoryList.length>0?(u(),h(W,{key:0,style:{"max-height":"350px"},items:e.SearchHistoryList},{default:l(({item:t,index:d})=>[(u(),h(x,{key:d},{default:l(()=>[a(v,null,{default:l(()=>[a(f,null,{default:l(()=>[c(m(t.q),1)]),_:2},1024)]),_:2},1024),a(v,{side:""},{default:l(()=>[i("div",Y,[a(S,{icon:e.biSearch,onClick:s=>e.onSearch(t),round:"",dense:"",flat:""},null,8,["icon","onClick"]),a(S,{dense:"",icon:e.biX,round:"",flat:"",onClick:s=>e.removeSearch(d)},null,8,["icon","onClick"])])]),_:2},1024)]),_:2},1024))]),_:1},8,["items"])):(u(),h(x,{key:1},{default:l(()=>[a(v,null,{default:l(()=>[a(f,{caption:""},{default:l(()=>[c(m(e.t("searchHistoryNotfound")),1)]),_:1})]),_:1})]),_:1}))]),_:1})])])]),_:1})]),_:1}),a(j,{showing:e.loading,label:e.t("base.pleaseWait"),"label-class":"text-primary"},null,8,["showing","label"])]),_:1})}const te=T(D,[["render",Z],["__scopeId","data-v-4de2df30"],["__file","SearchForm.vue"]]);export{te as default};
