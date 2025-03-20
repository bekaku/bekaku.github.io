import{l as S,bJ as I,cV as $,V as u,n as m,t as i,v as j,Y as D,u as A,H as z,_ as L,m as Q,w as a,x as e,aA as V,ah as w,aZ as v,aq as _,as as h,at as y,au as n,W as s,X as r,a0 as E,a5 as d,bt as N,d3 as H,a2 as F}from"./index-B-iUHEQy.js";import{B as b,a as W}from"./BaseAvatar-CgSx78Ax.js";import{_ as x}from"./BaseSwiperSlides.vue_vue_type_script_setup_true_lang-BWPz7RHl.js";import{u as O}from"./useAppMeta-DmM4Hq4_.js";import{B as R}from"./BaseButton-CdxUc0EN.js";import{B as P}from"./BaseCard-Br98EXO-.js";import{_ as U}from"./BasePage.vue_vue_type_script_setup_true_lang-D92O8psz.js";import"./FileManagerService-BKLx4J9H.js";import"./useAxios-DENhyFar.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-meta-Dp1-EvBM.js";const k=S({__name:"RippleItem",props:{cursorPointer:{type:Boolean,default:!0},borderRadius:{default:"5px"}},setup(B){return(p,g)=>I((m(),u("div",D(p.$attrs,{class:["relative-position q-hoverable",{"cursor-pointer":p.cursorPointer}],style:{borderRadius:p.borderRadius}}),[g[0]||(g[0]=i("span",{class:"q-focus-helper"},null,-1)),i("div",null,[j(p.$slots,"default")])],16)),[[$]])}}),G={class:"row"},J={class:"col-12 col-md-6 q-pa-sm"},M={key:0,class:"row justify-center q-gutter-md"},X={class:"col-12 col-md-6 q-pa-sm"},Y={class:"col-12 col-md-6 q-pa-sm"},Z={class:"row justify-center q-pa-md"},K={class:"col-12 q-pa-sm"},ue=S({__name:"swipper",setup(B){const{t:p}=A(),{setTitle:g}=O();g(`Swipper | ${p("app.name")}`);const{isSmallScreen:T}=z(),c=L("testSwiperRef"),f=[{id:1,name:"Cody Fisher",time:"12.30",new:9,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg",message:"Hey there! I've heard about PrimeVue. Any cool tips for getting started?"},{id:2,name:"PrimeTek Team",time:"12.30",new:0,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png",message:"Let's implement PrimeVue. Elevating our UI game! 🚀"},{id:3,name:"Robert Fox",time:"12.30",new:8,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg",message:`Interesting! PrimeVue sounds amazing. What's your favorite feature?
`},{id:4,name:"Esther Howard",time:"12.30",new:1,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg",message:"Quick one, team! Anyone"},{id:5,name:"Darlene Robertson",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg",message:"ust explored PrimeVue's themes"},{id:6,name:"Ralph Edwards",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png",message:"PrimeVue is a game-changer, righ"},{id:7,name:"Darrell Steward",time:"12.30",new:0,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar7.png",message:"Reflecting on PrimeVue's impact o"},{id:8,name:"PrimeTek Team",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar-primetek.png",message:"Let's implement PrimeVue"},{id:9,name:"Cody Fisher",time:"12.30",new:9,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg",message:"Hey there! I've heard about PrimeVue. Any cool tips for getting started?"},{id:10,name:"PrimeTek Team",time:"12.30",new:0,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png",message:"Let's implement PrimeVue. Elevating our UI game! 🚀"},{id:11,name:"Robert Fox",time:"12.30",new:8,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg",message:`Interesting! PrimeVue sounds amazing. What's your favorite feature?
`},{id:12,name:"Esther Howard",time:"12.30",new:1,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg",message:"Quick one, team! Anyone"},{id:13,name:"Darlene Robertson",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg",message:"ust explored PrimeVue's themes"},{id:14,name:"Ralph Edwards",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png",message:"PrimeVue is a game-changer, righ"},{id:15,name:"Darrell Steward",time:"12.30",new:0,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar7.png",message:"Reflecting on PrimeVue's impact o"},{id:16,name:"PrimeTek Team",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar-primetek.png",message:"Let's implement PrimeVue"}],q={initialSlide:0,speed:400,slidesPerView:4.7,spaceBetween:5,centeredSlides:!1,navigation:!0,autoplay:!1,pagination:!0,paginationDynamic:!0,paginationType:"bullets",effect:"slide",zoom:!0},C={initialSlide:0,speed:400,slidesPerView:2.7,spaceBetween:5,centeredSlides:!1,navigation:!1,autoplay:!1,pagination:!0,paginationDynamic:!0,paginationType:"bullets",direction:"vertical",effect:"slide",zoom:!0};return(ee,o)=>(m(),Q(U,null,{default:a(()=>[i("div",G,[i("div",J,[e(P,{title:"Horizontal"},{default:a(()=>[e(V,null,{default:a(()=>[e(x,{ref_key:"testSwiperRef",ref:c,params:q},{start:a(()=>o[2]||(o[2]=[s(" Slot start ")])),end:a(()=>[d(c)?(m(),u("div",M,[e(R,{flat:"",light:"",label:"Prev",icon:d(N),onClick:o[0]||(o[0]=t=>d(c).onPrev())},null,8,["icon"]),e(R,{flat:"",light:"",label:"Next",icon:d(H),onClick:o[1]||(o[1]=t=>d(c).onNext())},null,8,["icon"])])):E("",!0)]),default:a(()=>[(m(),u(w,null,v(f,(t,l)=>i("swiper-slide",{key:l},[e(_,{flat:"",class:"text-center",style:{height:"150px"}},{default:a(()=>[e(k,null,{default:a(()=>[e(b,{rounded:"",src:t.image,size:"56px"},null,8,["src"]),e(h,null,{default:a(()=>[e(y,null,{default:a(()=>[e(n,{lines:"1"},{default:a(()=>[s(r(t.name),1)]),_:2},1024),e(n,{caption:"",lines:"1",class:"q-text-caption"},{default:a(()=>[s(r(t.time),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])),64))]),_:1},512)]),_:1})]),_:1})]),i("div",X,[e(P,{title:"Virtical"},{default:a(()=>[e(V,null,{default:a(()=>[e(x,{params:C,style:{height:"350px"}},{default:a(()=>[(m(),u(w,null,v(f,(t,l)=>i("swiper-slide",{key:`virtical-${l}`},[e(_,{flat:"",class:"text-center",style:{height:"150px"}},{default:a(()=>[e(k,null,{default:a(()=>[e(b,{rounded:"",src:t.image,size:"56px"},null,8,["src"]),e(h,null,{default:a(()=>[e(y,null,{default:a(()=>[e(n,{lines:"1"},{default:a(()=>[s(r(t.name),1)]),_:2},1024),e(n,{caption:"",lines:"1",class:"q-text-caption"},{default:a(()=>[s(r(t.time),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])),64))]),_:1})]),_:1})]),_:1})]),i("div",Y,[e(P,{title:"Card"},{default:a(()=>[i("div",Z,[e(x,{params:{slidesPerView:1,spaceBetween:5,navigation:!0,pagination:!0,paginationDynamic:!0,paginationType:"bullets",effect:"cards",speed:800},style:{height:"350px",width:"250px"}},{default:a(()=>[(m(),u(w,null,v(f,(t,l)=>i("swiper-slide",{key:`card-${l}`},[e(_,{flat:"",bordered:"",class:"text-center cursor-pointer",style:{height:"300px"}},{default:a(()=>[e(W,{src:t.image},null,8,["src"]),e(h,null,{default:a(()=>[e(y,null,{default:a(()=>[e(n,{lines:"1"},{default:a(()=>[s(r(t.name),1)]),_:2},1024),e(n,{caption:"",lines:"1",class:"q-text-caption"},{default:a(()=>[s(r(t.time),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])),64))]),_:1})])]),_:1})]),i("div",K,[e(P,{title:"Grid"},{default:a(()=>[e(V,null,{default:a(()=>[e(F,null,{default:a(()=>[e(x,{params:{initialSlide:0,speed:400,slidesPerView:d(T)?2.5:5,spaceBetween:30,pagination:!0,gridRows:2},style:{height:"250px"}},{default:a(()=>[(m(),u(w,null,v(f,(t,l)=>i("swiper-slide",{key:`gird-row-${l}`},[e(_,{flat:"",class:"text-center",style:{height:"100px"}},{default:a(()=>[e(k,null,{default:a(()=>[e(b,{rounded:"",src:t.image,size:"56px"},null,8,["src"]),e(h,null,{default:a(()=>[e(y,null,{default:a(()=>[e(n,{lines:"1"},{default:a(()=>[s(r(t.name),1)]),_:2},1024),e(n,{caption:"",lines:"1",class:"q-text-caption"},{default:a(()=>[s(r(t.time),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])),64))]),_:1},8,["params"])]),_:1})]),_:1})]),_:1})])])]),_:1}))}});export{ue as default};
