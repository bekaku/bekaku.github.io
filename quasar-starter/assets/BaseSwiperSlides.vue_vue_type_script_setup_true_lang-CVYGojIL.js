import{l as f,aa as r,r as g,U as c,ab as v,c as w,m as b,n as l,Z as y,w as z,v as n,ac as h,X as k,W as S}from"./index-D_to5wmt.js";const I=["keyboard","pagination","navigation","scrollbar","zoom","initial-slide","lazy","autoplay","speed","slides-per-view","space-between","centered-slides","pagination-dynamic-bullets","pagination-type","direction","loop","effect","allow-touch-move","update-on-window-resize","slides-per-group","pagination-clickable","grid-rows","grab-cursor"],B=f({__name:"BaseSwiperSlides",props:r({params:{},zoomMaxRatio:{default:4}},{currentIndex:{type:Number,default:0},currentIndexModifiers:{}}),emits:r(["onSlideChange"],["update:currentIndex"]),setup(i,{expose:t,emit:p}){const d=p,o=g(1),a=c("swiperElRef");v(i,"currentIndex");const m=w(()=>{let e;return i.params?.pagination!=null&&(typeof i.params?.pagination=="boolean"?e={enabled:i.params?.pagination}:e=i.params?.pagination),e}),u=e=>{if(e&&e.detail&&e.detail.length>0){const s=e.detail[0];s&&d("onSlideChange",{activeIndex:s.activeIndex,realIndex:s.realIndex})}};return t({onNext:()=>{a.value&&a.value.swiper.slideNext()},onPrev:()=>{a.value&&a.value.swiper.slidePrev()},onZoomIn:e=>{a.value&&(o.value<i.zoomMaxRatio&&o.value++,a.value.swiper.zoom.in(o.value))},onZoomOut:()=>{o.value=1,a.value&&a.value.swiper.zoom.out()}}),(e,s)=>(l(),b(y,null,{default:z(()=>[n(e.$slots,"start"),e.params?(l(),h("swiper-container",S({key:0,ref_key:"swiperElRef",ref:a},e.$attrs,{keyboard:e.params?.keyboard||!1,pagination:m.value,navigation:e.params?.navigation||!1,scrollbar:e.params?.scrollbar||!1,zoom:e.params?.zoom||!1,"initial-slide":e.params?.initialSlide||0,lazy:e.params?.lazy||!0,style:e.params?.style||{"--swiper-navigation-color":"#2e86de","--swiper-pagination-color":"#2e86de","--swiper-navigation-size":"20px","--swiper-navigation-top-offset":"50%","--swiper-navigation-sides-offset":"5px"},autoplay:e.params?.autoplay||!1,speed:e.params?.speed||400,"slides-per-view":e.params?.slidesPerView||1,"space-between":e.params?.spaceBetween||0,"centered-slides":e.params?.centeredSlides||!1,"pagination-dynamic-bullets":e.params?.paginationDynamic||!1,"pagination-type":e.params?.paginationType||"bullets",direction:e.params?.direction||"horizontal",loop:e.params?.loop||!1,effect:e.params?.effect||"slide","allow-touch-move":e.params?.allowTouchMove!=null?e.params.allowTouchMove:!0,"update-on-window-resize":e.params?.updateOnWindowResize||!1,"slides-per-group":e.params?.slidesPerGroup||1,"pagination-clickable":e.params?.paginationClickable||!0,"grid-rows":e.params?.gridRows||1,"grab-cursor":e.params?.grabCursor||!1,onSwiperslidechange:u}),[n(e.$slots,"default")],16,I)):k("",!0),n(e.$slots,"end")]),_:3}))}});export{B as _};
