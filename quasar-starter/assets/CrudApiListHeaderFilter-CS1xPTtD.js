import{l as y,cN as Q,u as x,c as L,m as u,n as o,w as e,x as a,cO as V,be as g,ar as k,V as B,au as S,W as d,X as i,a5 as r,bd as w,ah as F,aZ as C,as as N,at as c,aG as _,a7 as v,a4 as D}from"./index-__cRNkUR.js";const A=y({__name:"CrudApiListHeaderFilter",props:{headers:{type:Array,default:()=>[]},icon:{type:String,default:Q},label:{type:String,default:void 0},width:{type:Number,default:200},listDense:{type:Boolean,default:!0},btnRound:{type:Boolean,default:!0}},emits:["on-sort-column","on-sort-mode"],setup(l){const f=l,{t:n}=x(),b=L(()=>f.headers.filter(s=>s.options&&(s.options.fillable===!0||s.options.fillable===!1)));return(m,s)=>(o(),u(D,{class:"q-mx-sm",flat:"",round:l.btnRound,icon:l.icon,label:l.label},{default:e(()=>[a(V,null,{default:e(()=>[a(g,{style:k(`min-width: ${l.width}px`),dense:l.listDense},{default:e(()=>[a(S,{header:""},{default:e(()=>[d(i(r(n)("base.filterField")),1)]),_:1}),a(w),(o(!0),B(F,null,C(b.value,(t,p)=>(o(),u(N,{tag:"label",clickable:"",key:"fill-fields-"+p},{default:e(()=>[a(c,{side:"",top:""},{default:e(()=>[a(_,{modelValue:t.options.fillable,"onUpdate:modelValue":h=>t.options.fillable=h},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(c,null,{default:e(()=>[d(i(t.translateLabel==null||t.translateLabel?r(n)(t.label):t.label),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["style","dense"])]),_:1}),a(v,null,{default:e(()=>[d(i(r(n)("base.filterField")),1)]),_:1})]),_:1},8,["round","icon","label"]))}});export{A as default};
