import{d as g,bv as v,a as h,u as y,bk as L,_ as S,B as o,H as c,F as w,E as x,ai as m,aX as B,C as A,cl as C,ah as b,cm as P,aL as T}from"./index-CyhFmzYZ.js";const q=g({__name:"AppTabs",props:{items:{type:Array,default:()=>[]},dense:{type:Boolean,default:!0}},setup(k,{expose:u}){u();const t=v(),{t:a}=h(),{getParam:l}=y(),n=L(),d={$q:t,t:a,getParam:l,permisisonStore:n,getLink:s=>{let r=s.to;const i=s.params;if(r&&i&&i.length>0)for(const _ of i){const f=l(_);f&&(r=r.replaceAll(`:${_}`,f))}return r},canShow:s=>s.permissions==null?!0:s.frontend==!0?n.isHaveFrontendMultiPermission(s.permissions):n.isHaveMultiPermission(s.permissions)};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}});function F(k,u,t,a,l,n){return t.items.length>0?(o(),c("div",{key:0,class:T(["q-pa-md q-gutter-sm",{"limit-tabs":!a.$q.screen.gt.xs}])},[w(P,{dense:t.dense,"inline-label":"","outside-arrows":"","mobile-arrows":"","active-color":"primary"},{default:x(()=>[(o(!0),c(m,null,B(t.items,(e,p)=>(o(),c(m,{key:p},[a.canShow(e)?(o(),A(C,{key:0,icon:e.icon,label:e.translateLabel?a.t(e.label):e.label,to:a.getLink(e)},null,8,["icon","label","to"])):b("",!0)],64))),128))]),_:1},8,["dense"])],2)):b("",!0)}const Q=S(q,[["render",F],["__scopeId","data-v-7c124fcf"],["__file","AppTabs.vue"]]);export{Q as default};