import{d as I,aC as V,a as Q,aD as P,dK as R,_ as L,B as g,H as C,F as a,E as t,ai as O,aX as B,C as S,ak as T,ab as K,ac as f,O as d,R as w,aW as D,af as v,aa as x,ap as q,b9 as N,aq as z,bg as W,dI as J,dJ as X,M as _,I as c,S as b,bl as G,r as h,bp as Y,L as Z,a7 as H,a8 as U,a9 as $,ad as ee,ae,ah as j}from"./index-Ck7C3Bne.js";import{C as te}from"./ClosePopup-DMq1xCIu.js";import{D as F,S as le,a as ne}from"./vue-slicksort.esm-DsIP23Uv.js";import oe from"./Togle-ycQOMA3I.js";import{u as ie}from"./useAppMeta-eNfZYAUK.js";import"./use-meta-o6AKASHm.js";const se=I({__name:"AppSlick",props:V({labelKey:{},valueKey:{}},{modelValue:{},modelModifiers:{}}),emits:V(["onSorting"],["update:modelValue"]),setup(o,{expose:l,emit:i}){l();const e=o,{t:s}=Q(),r=P(o,"modelValue"),n=i,m=()=>new Promise(y=>{const M=[],k=r.value;if(k&&k.length>0)for(const A of k)A[e.valueKey]&&M.push(A[e.valueKey]);y(M)}),p={props:e,t:s,modelValue:r,emit:n,setResquest:m,onSorting:async()=>{const y=await m();n("onSorting",y)},get biList(){return R},get DragHandle(){return F},get SlickItem(){return le},get SlickList(){return ne}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}});function re(o,l,i,e,s,r){return g(),C("div",J(X(o.$attrs)),[a(N,null,{default:t(()=>[a(e.SlickList,{axis:"y",list:e.modelValue,"onUpdate:list":l[0]||(l[0]=n=>e.modelValue=n),useDragHandle:"",distance:1,helperClass:"sortHelper"},{default:t(()=>[(g(!0),C(O,null,B(e.modelValue,(n,m)=>(g(),S(e.SlickItem,{key:n.id,index:m,class:"SortableHelper"},{default:t(()=>[T(o.$slots,"item",q({ref_for:!0},{item:n,inedx:m}),()=>[a(K,null,{default:t(()=>[a(f,{avatar:""},{default:t(()=>[d(w(m+1),1)]),_:2},1024),a(f,null,{default:t(()=>[a(D,null,{default:t(()=>[d(w(n[i.labelKey]),1)]),_:2},1024)]),_:2},1024),a(f,{side:""},{default:t(()=>[a(e.DragHandle,null,{default:t(()=>[a(v,{flat:"",round:"",icon:e.biList},null,8,["icon"])]),_:1})]),_:1})]),_:2},1024),a(x)],!0)]),_:2},1032,["index"]))),128))]),_:3},8,["list"])]),_:3}),T(o.$slots,"action",{},()=>[a(x),a(W,{align:"center"},{default:t(()=>[a(v,{flat:"",onClick:e.onSorting,color:"primary",label:e.t("base.save")},null,8,["label"]),z(a(v,{flat:"",label:e.t("base.close")},null,8,["label"]),[[te]])]),_:1})],!0)],16)}const E=L(se,[["render",re],["__scopeId","data-v-e6642246"],["__file","AppSlick.vue"]]),me=I({__name:"AppSlickDialog",props:V({labelKey:{},valueKey:{}},{modelValue:{},modelModifiers:{},doalogModel:{type:Boolean,default:!1},doalogModelModifiers:{}}),emits:V(["onSorting"],["update:modelValue","update:doalogModel"]),setup(o,{expose:l,emit:i}){l();const{t:e}=Q(),s=P(o,"modelValue"),r=P(o,"doalogModel"),n=i,u={t:e,modelValue:s,doalogModel:r,emit:n,onSorting:async p=>{n("onSorting",p)},AppSlick:E};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),de={class:"text-h6 ellipsis"};function ge(o,l,i,e,s,r){return g(),S(G,{modelValue:e.doalogModel,"onUpdate:modelValue":l[1]||(l[1]=n=>e.doalogModel=n)},{default:t(()=>[a(b,{class:"dialog"},{default:t(()=>[a(_,null,{default:t(()=>[c("div",de,w(e.t("sort.sort")),1)]),_:1}),a(e.AppSlick,{modelValue:e.modelValue,"onUpdate:modelValue":l[0]||(l[0]=n=>e.modelValue=n),"label-key":i.labelKey,"value-key":i.valueKey,onOnSorting:e.onSorting},null,8,["modelValue","label-key","value-key"])]),_:1})]),_:1},8,["modelValue"])}const ue=L(me,[["render",ge],["__scopeId","data-v-8bb71a88"],["__file","AppSlickDialog.vue"]]),pe=I({__name:"sort-items",setup(o,{expose:l}){l();const{t:i}=Q(),{setTitle:e}=ie();e(`Sort items | ${i("app.name")}`);const s=h(!1),r=h(!1),n=h([{id:1,name:"Cody Fisher",time:"12.30",new:9,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg",message:"Hey there! I've heard about PrimeVue. Any cool tips for getting started?"},{id:2,name:"PrimeTek Team",time:"12.30",new:0,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png",message:"Let's implement PrimeVue. Elevating our UI game! 🚀"},{id:3,name:"Robert Fox",time:"12.30",new:8,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg",message:`Interesting! PrimeVue sounds amazing. What's your favorite feature?
`},{id:4,name:"Esther Howard",time:"12.30",new:1,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg",message:"Quick one, team! Anyone"},{id:5,name:"Darlene Robertson",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg",message:"ust explored PrimeVue's themes"},{id:6,name:"Ralph Edwards",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png",message:"PrimeVue is a game-changer, righ"},{id:7,name:"Darrell Steward",time:"12.30",new:0,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar7.png",message:"Reflecting on PrimeVue's impact o"},{id:8,name:"PrimeTek Team",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar-primetek.png",message:"Let's implement PrimeVue"},{id:9,name:"Cody Fisher",time:"12.30",new:9,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg",message:"Hey there! I've heard about PrimeVue. Any cool tips for getting started?"},{id:10,name:"PrimeTek Team",time:"12.30",new:0,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png",message:"Let's implement PrimeVue. Elevating our UI game! 🚀"},{id:11,name:"Robert Fox",time:"12.30",new:8,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg",message:`Interesting! PrimeVue sounds amazing. What's your favorite feature?
`},{id:12,name:"Esther Howard",time:"12.30",new:1,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg",message:"Quick one, team! Anyone"},{id:13,name:"Darlene Robertson",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg",message:"ust explored PrimeVue's themes"},{id:14,name:"Ralph Edwards",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png",message:"PrimeVue is a game-changer, righ"},{id:15,name:"Darrell Steward",time:"12.30",new:0,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar7.png",message:"Reflecting on PrimeVue's impact o"},{id:16,name:"PrimeTek Team",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar-primetek.png",message:"Let's implement PrimeVue"}]),u={t:i,setTitle:e,sortDialog:s,cansort:r,items:n,onSorting:async p=>{console.log("onSorting",p),s.value=!1},AppSlick:E,AppSlickDialog:ue,UiTogle:oe,get biList(){return R},get biFunnel(){return Y},get DragHandle(){return F}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),ce={class:"row"},fe={class:"col col-md-6 q-pa-sm"},we={style:{"max-height":"450px",overflow:"auto"},class:"bg-black text-light-green-13"},ve={class:"col col-md-6 q-pa-sm"};function _e(o,l,i,e,s,r){return g(),S(Z,{padding:""},{default:t(()=>[a(b,{flat:"",bordered:"",class:"content-limit"},{default:t(()=>[a(_,null,{default:t(()=>[a(H,null,{default:t(()=>[a(U,null,{default:t(()=>l[5]||(l[5]=[d(" Sort items ")])),_:1}),a($)]),_:1}),a(x)]),_:1}),a(_,{class:"q-gutter-y-lg"},{default:t(()=>[c("div",ce,[c("div",fe,[a(b,null,{default:t(()=>[l[7]||(l[7]=c("div",{class:"q-pa-md text-h5"}," Dialog ",-1)),a(_,null,{default:t(()=>[a(v,{onClick:l[0]||(l[0]=n=>e.sortDialog=!0),color:"primary","no-caps":""},{default:t(()=>l[6]||(l[6]=[d("Open sort dialog")])),_:1}),c("pre",we,"                                    "+w(e.items)+`
                                `,1)]),_:1})]),_:1})]),c("div",ve,[a(b,null,{default:t(()=>[a(H,null,{default:t(()=>[a(v,{flat:"",round:"",dense:"",icon:e.biFunnel},null,8,["icon"]),a(U,null,{default:t(()=>l[8]||(l[8]=[d(" Custom UI ")])),_:1}),a(e.UiTogle,{modelValue:e.cansort,"onUpdate:modelValue":l[1]||(l[1]=n=>e.cansort=n),label:"Toggle","use-checkbox":!1},null,8,["modelValue"])]),_:1}),a(_,null,{default:t(()=>[a(e.AppSlick,{style:{height:"60vh",overflow:"auto"},modelValue:e.items,"onUpdate:modelValue":l[2]||(l[2]=n=>e.items=n),"label-key":"name","value-key":"id",onOnSorting:e.onSorting},{item:t(({item:n})=>[a(K,null,{default:t(()=>[a(f,{avatar:""},{default:t(()=>[a(ee,null,{default:t(()=>[a(ae,{src:n.image},null,8,["src"])]),_:2},1024)]),_:2},1024),a(f,null,{default:t(()=>[a(D,null,{default:t(()=>[d(w(n.name),1)]),_:2},1024),a(D,{caption:"",lines:"1"},{default:t(()=>[d(w(n.message),1)]),_:2},1024)]),_:2},1024),e.cansort?(g(),S(f,{key:0,side:""},{default:t(()=>[a(e.DragHandle,null,{default:t(()=>[a(v,{flat:"",round:"",icon:e.biList},null,8,["icon"])]),_:1})]),_:1})):j("",!0)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1})])])]),_:1})]),_:1}),e.sortDialog?(g(),S(e.AppSlickDialog,{key:0,modelValue:e.items,"onUpdate:modelValue":l[3]||(l[3]=n=>e.items=n),doalogModel:e.sortDialog,"onUpdate:doalogModel":l[4]||(l[4]=n=>e.sortDialog=n),"label-key":"name","value-key":"id",onOnSorting:e.onSorting},null,8,["modelValue","doalogModel"])):j("",!0)]),_:1})}const Pe=L(pe,[["render",_e],["__file","sort-items.vue"]]);export{Pe as default};
