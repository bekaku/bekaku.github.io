import{d as g,f as _,r as h,w as U,bA as V,_ as b,B as i,H as v,ai as k,aX as F,C as w,ap as B,$ as K}from"./index-gOe3LaSD.js";const S=g({__name:"FormOtp",props:{inputLength:{}},emits:["onSubmit"],setup(c,{expose:p,emit:d}){p();const n=c,f=d,s=_(()=>n.inputLength),t=h([]),o=h([]),r=_(()=>{const e=o.value.filter(a=>a);return s.value!==e.length?"":e.join("")});U(r,()=>{r.value&&f("onSubmit",r.value)}),V(()=>{t.value=[]});const y=(e,a)=>{e&&(t.value[a]=e)},u=e=>{e>=0&&(e<s.value?t.value[e].select():r.value&&t.value[e-1].blur())},m={props:n,emit:f,length:s,fields:t,fieldValues:o,composite:r,updateFieldRef:y,focus:u,onUpdate:(e,a)=>{e&&u(a+1)},onKeyUp:(e,a)=>{const l=e.key;["Tab","Shift","Meta","Control","Alt"].includes(l)||["Delete"].includes(l)||(l==="ArrowLeft"||l==="Backspace"?u(a-1):l==="ArrowRight"&&u(a+1))}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}),A={class:"row q-gutter-x-sm justify-center"};function L(c,p,d,n,f,s){return i(),v("div",A,[(i(!0),v(k,null,F(n.length,t=>(i(),w(K,B({outlined:"",modelValue:n.fieldValues[t-1],"onUpdate:modelValue":o=>n.fieldValues[t-1]=o,ref_for:!0},c.$attrs,{onKeyup:o=>n.onKeyUp(o,t-1),"onUpdate:modelValue":o=>n.onUpdate(o,t-1),key:t,ref_for:!0,ref:o=>n.updateFieldRef(o,t-1),maxlength:"1","input-class":"text-center",style:{width:"6ch"}}),null,16,["modelValue","onUpdate:modelValue","onKeyup"]))),128))])}const R=b(S,[["render",L],["__file","FormOtp.vue"]]);export{R as default};
