import{d as B,bm as S,a as x,u as q,_ as v,B as t,H as l,F as A,E as k,ai as g,C as h,N as L,ah as y,aX as w,bn as P,ak as C,bo as I}from"./index-C_yxR0el.js";const Q=B({__name:"AppBreadcrumbs",props:{breadcrumbs:{type:Array,default:()=>[]},showSeparator:{type:Boolean,default:!0},separatorIcon:{type:String}},setup(m,{expose:f}){f();const e=S(),{t:c}=x(),{getParam:u,getQuery:i}=q(),b={permisisonStore:e,t:c,getParam:u,getQuery:i,getLink:r=>{let s=r.to;if(s){const d=r.params;if(d&&d.length>0)for(const n of d){const o=u(n);o&&(s=s.replaceAll(`:${n}`,o))}const p=r.queries;if(p&&p.length>0)for(const n of p){const o=i(n);o&&(s=s.replaceAll(`{${n}}`,o))}}return s},canShow:r=>r.permissions==null?!0:r.frontend==!0?e.isHaveFrontendMultiPermission(r.permissions):e.isHaveMultiPermission(r.permissions)};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}),V={key:0,class:"q-pa-md q-gutter-sm"},E={key:1,class:"text-muted"};function F(m,f,e,c,u,i){return e.breadcrumbs.length>0?(t(),l("div",V,[A(I,null,{separator:k(()=>[e.showSeparator?(t(),l(g,{key:0},[e.separatorIcon?(t(),h(L,{key:0,class:"text-muted",name:e.separatorIcon},null,8,["name"])):(t(),l("span",E,"/"))],64)):y("",!0)]),default:k(()=>[(t(!0),l(g,null,w(e.breadcrumbs,(a,_)=>(t(),h(P,{key:`breadcrumb-${_}-${a.to}`,label:a.translateLabel?c.t(a.label):a.label,icon:a.icon,to:c.getLink(a),exact:""},null,8,["label","icon","to"]))),128)),C(m.$slots,"extra")]),_:3})])):y("",!0)}const N=v(Q,[["render",F],["__file","AppBreadcrumbs.vue"]]);export{N as default};
