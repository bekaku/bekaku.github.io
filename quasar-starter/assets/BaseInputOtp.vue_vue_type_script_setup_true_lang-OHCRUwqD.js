import{l as y,c as f,r as i,bl as k,a2 as w,R as p,n as c,W as B,X as b,m as U,w as V,v as L,O as A,aG as C}from"./index-BvWZzpdy.js";const F={class:"row q-gutter-x-sm justify-center"},R=y({__name:"BaseInputOtp",props:{inputLength:{}},emits:["on-submit"],setup(d,{emit:m}){const v=m,o=f(()=>d.inputLength),l=i([]),u=i([]),n=f(()=>{const e=u.value.filter(s=>s);return o.value!==e.length?"":e.join("")});k(()=>{l.value=[]});const h=(e,s)=>{e&&(l.value[s]=e)},r=e=>{e>=0&&(e<o.value?l.value[e].select():n.value&&l.value[e-1].blur())},_=(e,s)=>{e&&r(s+1)},g=(e,s)=>{const t=e.key;["Tab","Shift","Meta","Control","Alt"].includes(t)||["Delete"].includes(t)||(t==="ArrowLeft"||t==="Backspace"?r(s-1):t==="ArrowRight"&&r(s+1))};return w(n,()=>{n.value&&v("on-submit",n.value)}),(e,s)=>(c(),p("div",F,[(c(!0),p(B,null,b(o.value,t=>(c(),U(C,A({ref_for:!0},e.$attrs,{ref_for:!0,ref:a=>h(a,t-1),key:t,modelValue:u.value[t-1],"onUpdate:modelValue":[a=>u.value[t-1]=a,a=>_(a,t-1)],maxlength:"1",outlined:"","input-class":"text-center",style:{width:"6ch"},onKeyup:a=>g(a,t-1)}),{default:V(()=>[L(e.$slots,"default")]),_:2},1040,["modelValue","onUpdate:modelValue","onKeyup"]))),128))]))}});export{R as _};
