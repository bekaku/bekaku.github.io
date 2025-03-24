import{l as F,ae as C,u as M,af as N,r as D,c as O,m as r,n as l,a0 as T,w as s,$ as f,a3 as p,x as d,v as H,aw as h,J as u,bf as z,ai as v,bg as P,a_ as B,aB as j,av as E,L as J,M as U,au as S,bh as w,bi as $,bj as V,bk as G}from"./index-CLKqN-vN.js";import{B as K}from"./BaseCard-IBlaP6p_.js";import{_ as R}from"./BaseInput.vue_vue_type_script_setup_true_lang-BTxbop2D.js";import{_ as L}from"./BaseSpinner.vue_vue_type_script_setup_true_lang-DspQfui_.js";import{_ as W}from"./BaseScrollArea.vue_vue_type_script_setup_true_lang-CE6lKAg0.js";import{_ as I}from"./BaseLabelValueItem.vue_vue_type_script_setup_true_lang-D2J-bUzp.js";import{_ as X}from"./BaseResult.vue_vue_type_script_setup_true_lang-CD0kWdHq.js";const oe=F({__name:"BaseCommandPalette",props:C({items:{},bordered:{type:Boolean,default:!0},flat:{type:Boolean,default:!0},label:{},readonly:{type:Boolean,default:!1},dense:{type:Boolean,default:!0},denseItem:{type:Boolean,default:!0},canFilter:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},icon:{default:()=>G},loading:{type:Boolean,default:!1},inputDebounce:{default:100},lazy:{type:Boolean},noOptionsText:{},placeholder:{},color:{default:"primary"},iconSize:{},avatarSize:{},scrollHeight:{default:"420px"},useCheckbox:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:C(["on-click"],["update:modelValue"]),setup(c,{emit:Q}){const{t:b}=M(),n=N(c,"modelValue"),t=D(""),q=Q,k=O(()=>t.value===void 0||t.value.trim().length==0?c.items:c.items.map(e=>{if(e.children){const o=e.children.filter(a=>a.label&&a.label.toLowerCase().includes(t.value.toLowerCase())||a.description!=null&&a.description.toLowerCase().includes(t.value.toLowerCase()));return{...e,children:o}}else return e.label&&e.label.toLowerCase().includes(t.value.toLowerCase())||e.description!=null&&e.description.toLowerCase().includes(t.value.toLowerCase())?e:null}).filter(e=>e!==null&&(!e.children||e.children.length>0))),g=e=>{if(c.readonly)return;const o=e?.value;q("on-click",o),o!=null&&(c.multiple||(n.value===o?n.value=void 0:n.value=o),n.value!=null&&Array.isArray(n.value)&&(i(o)?n.value=n.value.filter(y=>y!==o):n.value.push(o)))},i=e=>{if(e!=null){if(!c.multiple)return n.value===e;if(n.value!=null&&Array.isArray(n.value))return n.value.find(o=>o==e)}};return(e,o)=>(l(),r(K,T(e.$attrs,{bordered:e.bordered,flat:e.flat}),{default:s(()=>[e.canFilter&&!e.readonly?(l(),f(v,{key:0},[d(R,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),class:"q-px-sm",borderless:"",dense:e.dense,debounce:e.inputDebounce,placeholder:e.placeholder||u(b)("base.typeForsearch")+"..."},{prepend:s(()=>[e.loading?(l(),r(L,{key:0,type:"defult",size:"24px",class:"q-mb-sm"})):(l(),r(h,{key:1,name:e.icon,class:"text-muted",size:"20px"},null,8,["name"]))]),append:s(()=>[H(e.$slots,"inputAppend")]),_:3},8,["modelValue","dense","debounce","placeholder"]),d(z)],64)):p("",!0),d(j,null,{default:s(()=>[e.loading?(l(),r(L,{key:0})):(l(),r(P,{key:1,dense:e.denseItem},{default:s(()=>[d(W,{height:e.scrollHeight},{default:s(()=>[(l(!0),f(v,null,B(k.value,(a,y)=>(l(),f(v,{key:`app-commandpalette-${y}`},[a&&a.children&&a.children.length>0?(l(),f(v,{key:0},[d(E,{header:""},{default:s(()=>[J(U(a.label),1)]),_:2},1024),a.border?(l(),r(z,{key:0,class:"q-mb-sm"})):p("",!0),(l(!0),f(v,null,B(a.children,(m,A)=>(l(),r(I,{key:`app-submenulevel2-${y}-${A}`,item:m,"avatar-size":e.iconSize,"icon-size":e.iconSize,"high-light-text":t.value,color:i(m.value)?e.color:void 0,dense:e.denseItem,clickable:e.readonly?!1:a.value!=null||a.children&&a.children.length>0,onOnClick:g},{default:s(()=>[d(S,{side:""},{default:s(()=>[e.useCheckbox?(l(),r(h,{key:0,name:i(m.value)?u(w):u($),color:i(m.value)?e.color:void 0,size:"20px"},null,8,["name","color"])):i(m.value)?(l(),r(h,{key:1,name:u(V),color:e.color,size:"20px"},null,8,["name","color"])):p("",!0)]),_:2},1024)]),_:2},1032,["item","avatar-size","icon-size","high-light-text","color","dense","clickable"]))),128))],64)):(l(),f(v,{key:1},[a?(l(),r(I,{key:0,item:a,dense:e.dense,"avatar-size":e.iconSize,"icon-size":e.iconSize,"high-light-text":t.value,clickable:a.value!=null||a.children&&a.children.length>0,color:i(a.value)?"primary":void 0,onOnClick:g},{default:s(()=>[d(S,{side:""},{default:s(()=>[e.useCheckbox?(l(),r(h,{key:0,name:i(a.value)?u(w):u($),color:i(a.value)?e.color:void 0,size:"20px"},null,8,["name","color"])):i(a.value)?(l(),r(h,{key:1,name:u(V),color:e.color,size:"20px"},null,8,["name","color"])):p("",!0)]),_:2},1024)]),_:2},1032,["item","dense","avatar-size","icon-size","high-light-text","clickable","color"])):p("",!0)],64))],64))),128)),k.value.length==0?(l(),r(X,{key:0,status:"empty",description:u(b)("error.dataNotfound")},null,8,["description"])):p("",!0)]),_:1},8,["height"])]),_:1},8,["dense"]))]),_:1})]),_:3},16,["bordered","flat"]))}});export{oe as _};
