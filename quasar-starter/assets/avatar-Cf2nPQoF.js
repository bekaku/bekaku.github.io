import{l as _,d1 as x,ac as i,n as o,v as l,af as $,aY as w,X as B,a4 as z,W as c,m as u,w as t,ap as C,u as S,bO as A,r as k,x as e,az as N,t as v,a0 as f,dq as g,a3 as h,a2 as V}from"./index-D_to5wmt.js";import{a as T,B as s}from"./BaseAvatar-D6UCgu2h.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as Q}from"./useAppMeta-B2j8xE5P.js";import{B as G}from"./BaseCard-BeCehtGl.js";import{_ as L}from"./BasePage.vue_vue_type_script_setup_true_lang-CemhdidO.js";import"./FileManagerService-CYEX_33d.js";import"./useAxios-BVW2bjHp.js";import"./use-meta-Bp6Eaay9.js";const D={key:0,class:"avatar extra"},E=_({__name:"BaseAvatarGroup",props:{items:{},spinnerColor:{default:"white"},color:{},imgBg:{default:"bg-grey-8"},ratio:{default:4/3},height:{default:0},size:{default:"40px"},square:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},fetch:{type:Boolean,default:!1},limit:{default:5},boderColor:{default:"white"},overrapSize:{default:"-10px"}},setup(b){return x(a=>({"2b1fb048":a.size,"5b294c26":a.boderColor,55872247:a.overrapSize})),(a,p)=>(o(),i("div",c({class:"avatar-group"},a.$attrs),[l(a.$slots,"default",{},()=>[(o(!0),i($,null,w(a.items.slice(0,a.limit),(d,r)=>(o(),u(T,{key:`${r}-${d}`,square:a.square,rounded:a.rounded,class:"avatar",src:d,fetch:a.fetch||!1,ratio:1,style:C({zIndex:a.limit?a.limit-r:"0"})},{default:t(()=>[l(a.$slots,"extra",c({ref_for:!0},{index:r}),void 0,!0)]),_:2},1032,["square","rounded","src","fetch","style"]))),128)),l(a.$slots,"moreNumber",{},()=>[a.items.length>5?(o(),i("div",D,"+"+z(a.items.length-5),1)):B("",!0)],!0)],!0)],16))}}),q=I(E,[["__scopeId","data-v-463a4f7f"]]),F={class:"row q-pa-md q-gutter-md"},M={class:"row q-gutter-x-xl"},U=_({__name:"avatar",setup(b){const{t:a}=S(),{setTitle:p}=Q();p(`Avatar | ${a("app.name")}`);const d=A(),r=k(["https://cdn.quasar.dev/img/avatar1.jpg","https://cdn.quasar.dev/img/avatar2.jpg","https://cdn.quasar.dev/img/avatar3.jpg","https://cdn.quasar.dev/img/avatar4.jpg","https://cdn.quasar.dev/img/avatar5.jpg","https://cdn.quasar.dev/img/avatar6.jpg","https://cdn.quasar.dev/img/avatar7.jpg","https://cdn.quasar.dev/img/avatar8.jpg"]),j=n=>r.value[n];return(n,m)=>(o(),u(L,{full:!1},{default:t(()=>[e(G,{title:"Avatar"},{default:t(()=>[e(N,null,{default:t(()=>[v("div",F,[f(d).auth?.avatar?.image?(o(),u(s,{key:0,src:f(d).auth?.avatar?.image,"fetch-image":""},null,8,["src"])):B("",!0),e(s,{src:"https://cdn.quasar.dev/img/avatar2.jpg",size:"64px"}),e(s,{rounded:"",src:"https://cdn.quasar.dev/img/avatar1.jpg",size:"64px"}),e(s,{square:"",src:"https://cdn.quasar.dev/img/avatar3.jpg",size:"64px"}),e(s,{src:"https://cdn.quasar.dev/img/avatar6.jpg",bordered:"","bordered-color":"#23d160","bordered-width":"4px",size:"64px",class:"shadow-10"}),e(s,{src:"https://cdn.quasar.dev/img/avatar4.jpg",size:"64px"},{extra:t(()=>[e(g,{floating:"",color:"primary"},{default:t(()=>m[0]||(m[0]=[h("new")])),_:1})]),_:1}),e(s,{src:"https://cdn.quasar.dev/img/avatar5.jpg",bordered:"",size:"42px"},{extra:t(()=>[e(g,{floating:"",color:"positive",rounded:"",transparent:"",class:"absolute",style:{top:"2px"}})]),_:1})]),v("div",M,[e(q,{items:r.value,limit:5,size:"42px"},{extra:t(({index:y})=>[e(V,null,{default:t(()=>[h(z(j(y)),1)]),_:2},1024)]),_:1},8,["items"]),e(q,{items:r.value,limit:5,size:"42px","boder-color":"#00a0dc"},null,8,["items"])])]),_:1})]),_:1})]),_:1}))}});export{U as default};
