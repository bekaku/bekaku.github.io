import{b as s,A as u,P as h}from"./index.1297aae9.js";var p=s(({router:t,ssrContext:i})=>{const o=h;t.beforeEach((r,f,e)=>{r.matched.some(a=>a.meta.requireAuth)?o.get(u)?e():e({path:"/auth",replace:!0}):e()})});export{p as default};
