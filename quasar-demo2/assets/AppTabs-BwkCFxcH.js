import{d as k,bw as h,a as v,u as y,bm as w,_ as S,B as o,H as c,F as x,E as B,ai as f,aZ as L,C as A,cm as C,ah as b,cn as P,aN as T}from"./index-Cd3HZUlj.js";const q=k({__name:"AppTabs",props:{items:{type:Array,default:()=>[]},dense:{type:Boolean,default:!0}},setup(g,{expose:u}){u();const t=h(),{t:a}=v(),{getParam:i}=y(),n=w(),d={$q:t,t:a,getParam:i,permisisonStore:n,getLink:s=>{let r=s.to;const l=s.params;if(r&&l&&l.length>0)for(const _ of l){const m=i(_);m&&(r=r.replaceAll(`:${_}`,m))}return r},canShow:s=>s.permissions==null?!0:s.frontend==!0?n.isHaveFrontendMultiPermission(s.permissions):n.isHaveMultiPermission(s.permissions)};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}});function F(g,u,t,a,i,n){return t.items.length>0?(o(),c("div",{key:0,class:T(["q-pa-md q-gutter-sm",{"limit-tabs":!a.$q.screen.gt.xs}])},[x(P,{dense:t.dense,"inline-label":"","outside-arrows":"","mobile-arrows":"","active-color":"primary"},{default:B(()=>[(o(!0),c(f,null,L(t.items,(e,p)=>(o(),c(f,{key:p},[a.canShow(e)?(o(),A(C,{key:0,icon:e.icon,label:e.translateLabel?a.t(e.label):e.label,to:a.getLink(e)},null,8,["icon","label","to"])):b("",!0)],64))),128))]),_:1},8,["dense"])],2)):b("",!0)}const N=S(q,[["render",F],["__scopeId","data-v-7c124fcf"],["__file","AppTabs.vue"]]);export{N as default};
