import{b as s,P as a}from"./index-DnUFBeQi.js";const u="_myappkey_01",l=s(({router:t,ssrContext:i,store:p,redirect:c})=>{const r=a;t.beforeEach((o,f,e)=>{o.meta.requireAuth===!0?r.get(u)?e():e({path:"/auth",replace:!0}):e()})});export{l as default};
