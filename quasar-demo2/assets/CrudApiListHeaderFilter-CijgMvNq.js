import{d as m,br as y,a as h,l as x,_ as Q,B as r,C as b,E as a,F as t,bs as F,bb as S,al as g,aN as B,O as i,R as d,aa as C,H as L,ai as k,aO as H,ab as V,ac as _,aZ as w,ag as A,af as N}from"./index-DnUFBeQi.js";const v=m({__name:"CrudApiListHeaderFilter",props:{headers:{type:Array,default:()=>[]},icon:{type:String,default:y},label:{type:String,default:void 0},width:{type:Number,default:200},listDense:{type:Boolean,default:!0},btnRound:{type:Boolean,default:!0}},emits:["on-sort-column","on-sort-mode"],setup(u,{expose:f}){f();const e=u,{t:l}=h(),c=x(()=>e.headers.filter(s=>s.options&&(s.options.fillable===!0||s.options.fillable===!1))),o={props:e,t:l,fillableHeaders:c};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function D(u,f,e,l,c,o){return r(),b(N,{class:"q-mx-sm",flat:"",round:e.btnRound,icon:e.icon,label:e.label},{default:a(()=>[t(F,null,{default:a(()=>[t(S,{style:g(`min-width: ${e.width}px`),dense:e.listDense},{default:a(()=>[t(B,{header:""},{default:a(()=>[i(d(l.t("base.filterField")),1)]),_:1}),t(C),(r(!0),L(k,null,H(l.fillableHeaders,(n,s)=>(r(),b(V,{tag:"label",clickable:"",key:"fill-fields-"+s},{default:a(()=>[t(_,{side:"",top:""},{default:a(()=>[t(w,{modelValue:n.options.fillable,"onUpdate:modelValue":p=>n.options.fillable=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(_,null,{default:a(()=>[i(d(l.t(n.label)),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["style","dense"])]),_:1}),t(A,null,{default:a(()=>[i(d(l.t("base.filterField")),1)]),_:1})]),_:1},8,["round","icon","label"])}const O=Q(v,[["render",D],["__file","CrudApiListHeaderFilter.vue"]]);export{O as default};
