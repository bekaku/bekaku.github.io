import{b as s,P as a,A as u}from"./index-D_to5wmt.js";const l=s(({router:t,ssrContext:i,store:c,redirect:f})=>{const r=a;t.beforeEach((o,h,e)=>{o.meta.requireAuth===!0?r.get(u)?e():e({path:"/auth",replace:!0}):e()})});export{l as default};
