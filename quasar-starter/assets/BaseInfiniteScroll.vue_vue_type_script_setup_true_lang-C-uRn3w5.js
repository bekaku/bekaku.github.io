import{aR as D,bR as U,k as m,C as R,E as d,G as j,H as O,b6 as Q,bS as W,b5 as Y,bT as F,bU as G,aS as p,bV as K,bW as b,bX as _,bY as k,bZ as H,b_ as L,b$ as X,c0 as Z,d as z,K as J,Y as ee,o as te,r as A,e as C,w as le,a as se}from"./index-DLAlP7tE.js";import ne from"./BaseSpinner-CQNyfW0y.js";const{passive:r}=W,ae=D({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:U,initialIndex:{type:Number,default:0},disable:Boolean,reverse:Boolean},emits:["load"],setup(s,{slots:v,emit:h}){const a=m(!1),l=m(!0),i=m(null),g=m(null);let u=s.initialIndex,e,n;const V=R(()=>"q-infinite-scroll__loading"+(a.value===!0?"":" invisible"));function f(){if(s.disable===!0||a.value===!0||l.value===!1)return;const t=b(e),o=_(e),c=k(e);s.reverse===!1?Math.round(o+c+s.offset)>=Math.round(t)&&S():Math.round(o)<=s.offset&&S()}function S(){if(s.disable===!0||a.value===!0||l.value===!1)return;u++,a.value=!0;const t=b(e);h("load",u,o=>{l.value===!0&&(a.value=!1,H(()=>{if(s.reverse===!0){const c=b(e),M=_(e),$=c-t;L(e,M+$)}o===!0?T():i.value&&i.value.closest("body")&&n()}))})}function q(){u=0}function N(){l.value===!1&&(l.value=!0,e.addEventListener("scroll",n,r)),f()}function T(){l.value===!0&&(l.value=!1,a.value=!1,e.removeEventListener("scroll",n,r),n?.cancel?.())}function I(){if(e&&l.value===!0&&e.removeEventListener("scroll",n,r),e=X(i.value,s.scrollTarget),l.value===!0){if(e.addEventListener("scroll",n,r),s.reverse===!0){const t=b(e),o=k(e);L(e,t-o)}f()}}function w(t){u=t}function P(t){t=parseInt(t,10);const o=n;n=t<=0?f:Z(f,isNaN(t)===!0?100:t),e&&l.value===!0&&(o!==void 0&&e.removeEventListener("scroll",o,r),e.addEventListener("scroll",n,r))}function y(t){if(B.value===!0){if(g.value===null){t!==!0&&H(()=>{y(!0)});return}const o=`${a.value===!0?"un":""}pauseAnimations`;Array.from(g.value.getElementsByTagName("svg")).forEach(c=>{c[o]()})}}const B=R(()=>s.disable!==!0&&l.value===!0);d([a,B],()=>{y()}),d(()=>s.disable,t=>{t===!0?T():N()}),d(()=>s.reverse,()=>{a.value===!1&&l.value===!0&&f()}),d(()=>s.scrollTarget,I),d(()=>s.debounce,P);let E=!1;j(()=>{E!==!1&&e&&L(e,E)}),O(()=>{E=e?_(e):!1}),Q(()=>{l.value===!0&&e.removeEventListener("scroll",n,r)}),Y(()=>{P(s.debounce),I(),a.value===!1&&y()});const x=F();return Object.assign(x.proxy,{poll:()=>{n?.()},trigger:S,stop:T,reset:q,resume:N,setIndex:w,updateScrollTarget:I}),()=>{const t=G(v.default,[]);return B.value===!0&&t[s.reverse===!1?"push":"unshift"](p("div",{ref:g,class:V.value},K(v.loading))),p("div",{class:"q-infinite-scroll",ref:i},t)}}}),oe={class:"row justify-center q-my-md"},ue=z({__name:"BaseInfiniteScroll",props:{scrollTarget:{},reverse:{type:Boolean,default:!1},debounce:{default:250},offset:{default:500}},emits:["on-infinite"],setup(s,{expose:v,emit:h}){const a=h,l=J("baseInfiniteScrollRef"),i=(e,n)=>{a("on-infinite",e,n)};return v({stop:()=>{l.value&&l.value.stop()},resume:()=>{l.value&&l.value.resume()}}),(e,n)=>(te(),ee("div",null,[A(e.$slots,"default"),C(ae,{ref_key:"baseInfiniteScrollRef",ref:l,reverse:e.reverse,offset:e.offset,debounce:e.debounce,"scroll-target":e.scrollTarget,onLoad:i},{loading:le(()=>[se("div",oe,[C(ne)])]),_:1},8,["reverse","offset","debounce","scroll-target"]),A(e.$slots,"bottom")]))}});export{ue as _};
