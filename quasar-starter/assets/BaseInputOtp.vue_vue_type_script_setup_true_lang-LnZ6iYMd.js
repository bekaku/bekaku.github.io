import{l as y,c as i,r as f,bl as k,U as w,$ as p,n as c,ai as B,a_ as U,m as b,w as V,v as L,a0 as A,aD as C}from"./index-CLKqN-vN.js";const F={class:"row q-gutter-x-sm justify-center"},$=y({__name:"BaseInputOtp",props:{inputLength:{}},emits:["on-submit"],setup(d,{emit:m}){const v=m,o=i(()=>d.inputLength),l=f([]),u=f([]),n=i(()=>{const e=u.value.filter(a=>a);return o.value!==e.length?"":e.join("")});k(()=>{l.value=[]});const h=(e,a)=>{e&&(l.value[a]=e)},r=e=>{e>=0&&(e<o.value?l.value[e].select():n.value&&l.value[e-1].blur())},_=(e,a)=>{e&&r(a+1)},g=(e,a)=>{const t=e.key;["Tab","Shift","Meta","Control","Alt"].includes(t)||["Delete"].includes(t)||(t==="ArrowLeft"||t==="Backspace"?r(a-1):t==="ArrowRight"&&r(a+1))};return w(n,()=>{n.value&&v("on-submit",n.value)}),(e,a)=>(c(),p("div",F,[(c(!0),p(B,null,U(o.value,t=>(c(),b(C,A({ref_for:!0},e.$attrs,{ref_for:!0,ref:s=>h(s,t-1),key:t,modelValue:u.value[t-1],"onUpdate:modelValue":[s=>u.value[t-1]=s,s=>_(s,t-1)],maxlength:"1",outlined:"","input-class":"text-center",style:{width:"6ch"},onKeyup:s=>g(s,t-1)}),{default:V(()=>[L(e.$slots,"default")]),_:2},1040,["modelValue","onUpdate:modelValue","onKeyup"]))),128))]))}});export{$ as _};
