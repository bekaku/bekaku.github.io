import{d as m,bo as y,a as h,f as x,_ as Q,B as r,C as b,E as a,F as t,bp as F,b8 as S,al as g,aV as B,O as i,R as d,aa as C,H as L,ai as V,aW as k,ab as H,ac as p,aJ as w,ag as A,af as v}from"./index-C1BRECWX.js";const D=m({__name:"CrudApiListHeaderFilter",props:{headers:{type:Array,default:()=>[]},icon:{type:String,default:y},label:{type:String,default:void 0},width:{type:Number,default:200},listDense:{type:Boolean,default:!0},btnRound:{type:Boolean,default:!0}},emits:["on-sort-column","on-sort-mode"],setup(u,{expose:f}){f();const e=u,{t:l}=h(),c=x(()=>e.headers.filter(s=>s.options&&(s.options.fillable===!0||s.options.fillable===!1))),o={props:e,t:l,fillableHeaders:c};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function I(u,f,e,l,c,o){return r(),b(v,{class:"q-mx-sm",flat:"",round:e.btnRound,icon:e.icon,label:e.label},{default:a(()=>[t(F,null,{default:a(()=>[t(S,{style:g(`min-width: ${e.width}px`),dense:e.listDense},{default:a(()=>[t(B,{header:""},{default:a(()=>[i(d(l.t("base.filterField")),1)]),_:1}),t(C),(r(!0),L(V,null,k(l.fillableHeaders,(n,s)=>(r(),b(H,{tag:"label",clickable:"",key:"fill-fields-"+s},{default:a(()=>[t(p,{side:"",top:""},{default:a(()=>[t(w,{modelValue:n.options.fillable,"onUpdate:modelValue":_=>n.options.fillable=_},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(p,null,{default:a(()=>[i(d(l.t(n.label)),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["style","dense"])]),_:1}),t(A,null,{default:a(()=>[i(d(l.t("base.filterField")),1)]),_:1})]),_:1},8,["round","icon","label"])}const R=Q(D,[["render",I],["__file","CrudApiListHeaderFilter.vue"]]);export{R as default};
