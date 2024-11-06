import{d as B,_ as R,aq as G,B as f,H as z,I as m,ak as F,ap as H,bG as U,aC as X,r as b,aD as A,T as J,w as K,C as W,E as a,ah as Y,cw as Z,a as $,L as ee,F as t,M as T,a7 as ie,a8 as te,O as P,a9 as ae,aa as ne,S as x,aX as C,ab as E,ac as L,aW as I,R as k,ai as N}from"./index-gOe3LaSD.js";import{B as se}from"./BaseAvatar-DU8IzIGC.js";import{u as oe}from"./useAppMeta-Bj7LfK3W.js";import"./AppImage-k26bkTXw.js";import"./FileManagerService-BN2GBvqC.js";import"./useAxios-xdd54WUR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-meta-wLKP5K43.js";const le=B({__name:"RippleItem",props:{cursorPointer:{type:Boolean,default:!0}},setup(o,{expose:n}){n();const l={};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}});function re(o,n,l,i,u,w){return G((f(),z("div",H(o.$attrs,{class:["relative-position q-hoverable",{"cursor-pointer":l.cursorPointer}]}),[n[0]||(n[0]=m("span",{class:"q-focus-helper"},null,-1)),m("div",null,[F(o.$slots,"default")])],16)),[[U]])}const de=R(le,[["render",re],["__file","RippleItem.vue"]]),pe=B({__name:"SwiperSlides",props:X({paramiters:{},max:{default:0}},{currentIndex:{type:Number,default:0},currentIndexModifiers:{},slideAction:{type:String,default:void 0},slideActionModifiers:{}}),emits:["update:currentIndex","update:slideAction"],setup(o,{expose:n}){n();const l=o,i=b(!1),u=b(),w=b([]),s=b(void 0),d=A(o,"currentIndex"),p=A(o,"slideAction"),c=b();J(async()=>{await _(),await v(),i.value=!0});const v=()=>new Promise(r=>{const e=l.paramiters;let g;(e==null?void 0:e.pagination)!=null&&(typeof(e==null?void 0:e.pagination)=="boolean"?g={enabled:e==null?void 0:e.pagination}:g=e==null?void 0:e.pagination),u.value={keyboard:(e==null?void 0:e.keyboard)||!1,pagination:g,allowTouchMove:(e==null?void 0:e.allowTouchMove)!=null?e.allowTouchMove:!0,navigation:(e==null?void 0:e.navigation)||!1,scrollbar:(e==null?void 0:e.scrollbar)||!1,updateOnWindowResize:(e==null?void 0:e.updateOnWindowResize)||!1,zoom:(e==null?void 0:e.zoom)||!1,initialSlide:(e==null?void 0:e.initialSlide)||0,slidesPerGroup:(e==null?void 0:e.slidesPerGroup)||0,freeMode:(e==null?void 0:e.freeMode)||!1,lazy:(e==null?void 0:e.lazy)||!0,style:(e==null?void 0:e.style)||{"--swiper-navigation-color":"#2e86de","--swiper-pagination-color":"#2e86de","--swiper-navigation-size":"20px","--swiper-navigation-top-offset":"50%","--swiper-navigation-sides-offset":"5px"},speed:(e==null?void 0:e.speed)||300,slidesPerView:(e==null?void 0:e.slidesPerView)||1,spaceBetween:(e==null?void 0:e.spaceBetween)||0,centeredSlides:(e==null?void 0:e.centeredSlides)||!1,autoplay:(e==null?void 0:e.autoplay)||!1,paginationDynamic:(e==null?void 0:e.paginationDynamic)||!1,paginationType:(e==null?void 0:e.paginationType)||"bullets",direction:(e==null?void 0:e.direction)||"horizontal",loop:(e==null?void 0:e.loop)||!1,effect:(e==null?void 0:e.effect)||"slide"},r(!0)}),V=r=>{},_=()=>new Promise(r=>{c.value=document.querySelector("swiper-container"),r(!0)}),y=()=>{c.value&&c.value.swiper.slideNext()},h=()=>{c.value&&c.value.swiper.slidePrev()};K(p,r=>{r!=null&&(r=="next"?y():r=="prev"&&h()),p.value=void 0});const S={props:l,showSlide:i,opts:u,modules:w,swiperRef:s,currentIndex:d,slideAction:p,swiperEl:c,initSlides:v,onSlideChange:V,onInitSwiper:_,onNext:y,onPrev:h};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}}),ce=["keyboard","pagination","navigation","scrollbar","zoom","initial-slide","lazy","autoplay","speed","slides-per-view","space-between","centered-slides","pagination-dynamic-bullets","pagination-type","direction","loop","effect","allow-touch-move"];function me(o,n,l,i,u,w){return f(),W(Z,null,{default:a(()=>{var s,d,p,c,v,V,_,y,h,S,r,e,g,M,Q,D,O,j,q;return[i.showSlide?(f(),z("swiper-container",H({key:0,class:"cursor-pointer"},o.$attrs,{keyboard:(s=i.opts)==null?void 0:s.keyboard,pagination:(d=i.opts)==null?void 0:d.pagination,navigation:(p=i.opts)==null?void 0:p.navigation,scrollbar:(c=i.opts)==null?void 0:c.scrollbar,zoom:(v=i.opts)==null?void 0:v.zoom,"initial-slide":(V=i.opts)==null?void 0:V.initialSlide,lazy:(_=i.opts)==null?void 0:_.lazy,style:(y=i.opts)==null?void 0:y.style,autoplay:(h=i.opts)==null?void 0:h.autoplay,speed:(S=i.opts)==null?void 0:S.speed,"slides-per-view":(r=i.opts)==null?void 0:r.slidesPerView,"space-between":(e=i.opts)==null?void 0:e.spaceBetween,"centered-slides":(g=i.opts)==null?void 0:g.centeredSlides,"pagination-dynamic-bullets":(M=i.opts)==null?void 0:M.paginationDynamic,"pagination-type":(Q=i.opts)==null?void 0:Q.paginationType,direction:(D=i.opts)==null?void 0:D.direction,loop:(O=i.opts)==null?void 0:O.loop,effect:(j=i.opts)==null?void 0:j.effect,"allow-touch-move":(q=i.opts)==null?void 0:q.allowTouchMove,onSwiperslidechange:i.onSlideChange}),[F(o.$slots,"default")],16,ce)):Y("",!0)]}),_:3})}const ue=R(pe,[["render",me],["__file","SwiperSlides.vue"]]),ge=B({__name:"swipper",setup(o,{expose:n}){n();const{t:l}=$(),{setTitle:i}=oe();i(`Swipper | ${l("app.name")}`);const p={t:l,setTitle:i,items:[{id:1,name:"Cody Fisher",time:"12.30",new:9,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg",message:"Hey there! I've heard about PrimeVue. Any cool tips for getting started?"},{id:2,name:"PrimeTek Team",time:"12.30",new:0,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png",message:"Let's implement PrimeVue. Elevating our UI game! 🚀"},{id:3,name:"Robert Fox",time:"12.30",new:8,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg",message:`Interesting! PrimeVue sounds amazing. What's your favorite feature?
`},{id:4,name:"Esther Howard",time:"12.30",new:1,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg",message:"Quick one, team! Anyone"},{id:5,name:"Darlene Robertson",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg",message:"ust explored PrimeVue's themes"},{id:6,name:"Ralph Edwards",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png",message:"PrimeVue is a game-changer, righ"},{id:7,name:"Darrell Steward",time:"12.30",new:0,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar7.png",message:"Reflecting on PrimeVue's impact o"},{id:8,name:"PrimeTek Team",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar-primetek.png",message:"Let's implement PrimeVue"},{id:9,name:"Cody Fisher",time:"12.30",new:9,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg",message:"Hey there! I've heard about PrimeVue. Any cool tips for getting started?"},{id:10,name:"PrimeTek Team",time:"12.30",new:0,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png",message:"Let's implement PrimeVue. Elevating our UI game! 🚀"},{id:11,name:"Robert Fox",time:"12.30",new:8,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg",message:`Interesting! PrimeVue sounds amazing. What's your favorite feature?
`},{id:12,name:"Esther Howard",time:"12.30",new:1,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg",message:"Quick one, team! Anyone"},{id:13,name:"Darlene Robertson",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg",message:"ust explored PrimeVue's themes"},{id:14,name:"Ralph Edwards",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png",message:"PrimeVue is a game-changer, righ"},{id:15,name:"Darrell Steward",time:"12.30",new:0,online:!0,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar7.png",message:"Reflecting on PrimeVue's impact o"},{id:16,name:"PrimeTek Team",time:"12.30",new:0,online:!1,image:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar-primetek.png",message:"Let's implement PrimeVue"}],defualtStyle:{minHeight:"100px"},slideOpts:{initialSlide:0,speed:400,slidesPerView:4.7,spaceBetween:5,centeredSlides:!1,navigation:!0,autoplay:!1,pagination:!0,paginationDynamic:!0,paginationType:"bullets",effect:"slide",zoom:!0},slideOptsVertical:{initialSlide:0,speed:400,slidesPerView:3.7,spaceBetween:5,centeredSlides:!1,navigation:!1,autoplay:!1,pagination:!0,paginationDynamic:!0,paginationType:"bullets",direction:"vertical",effect:"slide",zoom:!0},BaseAvatar:se,RippleItem:de,BaseSwiperSlides:ue};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}),fe={class:"row"},we={class:"col col-md-6 q-pa-sm"},ve={class:"col col-md-6 q-pa-sm"};function _e(o,n,l,i,u,w){return f(),W(ee,{padding:""},{default:a(()=>[t(x,{flat:"",bordered:"",class:"content-limit"},{default:a(()=>[t(T,null,{default:a(()=>[t(ie,null,{default:a(()=>[t(te,null,{default:a(()=>n[0]||(n[0]=[P(" Swipper ")])),_:1}),t(ae)]),_:1}),t(ne)]),_:1}),t(T,{class:"q-gutter-y-lg"},{default:a(()=>[m("div",fe,[m("div",we,[t(x,null,{default:a(()=>[n[1]||(n[1]=m("div",{class:"q-pa-md text-h5"}," Simple ",-1)),t(T,null,{default:a(()=>[t(i.BaseSwiperSlides,{paramiters:i.slideOpts},{default:a(()=>[(f(),z(N,null,C(i.items,(s,d)=>m("swiper-slide",{key:d},[t(x,{flat:"",class:"text-center",style:i.defualtStyle},{default:a(()=>[t(i.RippleItem,null,{default:a(()=>[t(i.BaseAvatar,{rounded:"",src:s.image,size:"56px"},null,8,["src"]),t(E,null,{default:a(()=>[t(L,null,{default:a(()=>[t(I,{lines:"1"},{default:a(()=>[P(k(s.name),1)]),_:2},1024),t(I,{caption:"",lines:"1",class:"q-text-caption"},{default:a(()=>[P(k(s.time),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])),64))]),_:1})]),_:1})]),_:1})]),m("div",ve,[t(x,null,{default:a(()=>[n[2]||(n[2]=m("div",{class:"q-pa-md text-h5"}," Virtical ",-1)),t(T,null,{default:a(()=>[t(i.BaseSwiperSlides,{paramiters:i.slideOptsVertical,style:{height:"450px",width:"250px"}},{default:a(()=>[(f(),z(N,null,C(i.items,(s,d)=>m("swiper-slide",{key:`virtical-${d}`},[t(x,{flat:"",class:"text-center",style:i.defualtStyle},{default:a(()=>[t(i.RippleItem,null,{default:a(()=>[t(i.BaseAvatar,{rounded:"",src:s.image,size:"56px"},null,8,["src"]),t(E,null,{default:a(()=>[t(L,null,{default:a(()=>[t(I,{lines:"1"},{default:a(()=>[P(k(s.name),1)]),_:2},1024),t(I,{caption:"",lines:"1",class:"q-text-caption"},{default:a(()=>[P(k(s.time),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])),64))]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1})]),_:1})}const Ie=R(ge,[["render",_e],["__file","swipper.vue"]]);export{Ie as default};
