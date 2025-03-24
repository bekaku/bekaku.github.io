import{l as F,al as C,u as M,am as N,r as O,c as T,m as r,n as a,O as D,w as s,R as f,T as p,x as d,v as E,az as h,J as u,bf as z,W as m,bg as H,X as B,aE as P,U,L as j,M as J,Y as S,bh as w,bi as V,bj as $,bk as R}from"./index-BvWZzpdy.js";import{B as W}from"./BaseCard-B_NQL-y6.js";import{_ as X}from"./BaseInput.vue_vue_type_script_setup_true_lang-D30qLj7g.js";import{_ as L}from"./BaseSpinner.vue_vue_type_script_setup_true_lang-BFuHChbK.js";import{_ as Y}from"./BaseScrollArea.vue_vue_type_script_setup_true_lang-anIsXKRU.js";import{_ as I}from"./BaseLabelValueItem.vue_vue_type_script_setup_true_lang-etAIDQvC.js";import{_ as G}from"./BaseResult.vue_vue_type_script_setup_true_lang-D7imBxYr.js";const oe=F({__name:"BaseCommandPalette",props:C({items:{},bordered:{type:Boolean,default:!0},flat:{type:Boolean,default:!0},label:{},readonly:{type:Boolean,default:!1},dense:{type:Boolean,default:!0},denseItem:{type:Boolean,default:!0},canFilter:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},icon:{default:()=>R},loading:{type:Boolean,default:!1},inputDebounce:{default:100},lazy:{type:Boolean},noOptionsText:{},placeholder:{},color:{default:"primary"},iconSize:{},avatarSize:{},scrollHeight:{default:"420px"},useCheckbox:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:C(["on-click"],["update:modelValue"]),setup(c,{emit:Q}){const{t:b}=M(),n=N(c,"modelValue"),t=O(""),q=Q,k=T(()=>t.value===void 0||t.value.trim().length==0?c.items:c.items.map(e=>{if(e.children){const o=e.children.filter(l=>l.label&&l.label.toLowerCase().includes(t.value.toLowerCase())||l.description!=null&&l.description.toLowerCase().includes(t.value.toLowerCase()));return{...e,children:o}}else return e.label&&e.label.toLowerCase().includes(t.value.toLowerCase())||e.description!=null&&e.description.toLowerCase().includes(t.value.toLowerCase())?e:null}).filter(e=>e!==null&&(!e.children||e.children.length>0))),g=e=>{if(c.readonly)return;const o=e?.value;q("on-click",o),o!=null&&(c.multiple||(n.value===o?n.value=void 0:n.value=o),n.value!=null&&Array.isArray(n.value)&&(i(o)?n.value=n.value.filter(y=>y!==o):n.value.push(o)))},i=e=>{if(e!=null){if(!c.multiple)return n.value===e;if(n.value!=null&&Array.isArray(n.value))return n.value.find(o=>o==e)}};return(e,o)=>(a(),r(W,D(e.$attrs,{bordered:e.bordered,flat:e.flat}),{default:s(()=>[e.canFilter&&!e.readonly?(a(),f(m,{key:0},[d(X,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=l=>t.value=l),class:"q-px-sm",borderless:"",dense:e.dense,debounce:e.inputDebounce,placeholder:e.placeholder||u(b)("base.typeForsearch")+"..."},{prepend:s(()=>[e.loading?(a(),r(L,{key:0,type:"defult",size:"24px",class:"q-mb-sm"})):(a(),r(h,{key:1,name:e.icon,class:"text-muted",size:"20px"},null,8,["name"]))]),append:s(()=>[E(e.$slots,"inputAppend")]),_:3},8,["modelValue","dense","debounce","placeholder"]),d(z)],64)):p("",!0),d(P,null,{default:s(()=>[e.loading?(a(),r(L,{key:0})):(a(),r(H,{key:1,dense:e.denseItem},{default:s(()=>[d(Y,{height:e.scrollHeight},{default:s(()=>[(a(!0),f(m,null,B(k.value,(l,y)=>(a(),f(m,{key:`app-commandpalette-${y}`},[l&&l.children&&l.children.length>0?(a(),f(m,{key:0},[d(U,{header:""},{default:s(()=>[j(J(l.label),1)]),_:2},1024),l.border?(a(),r(z,{key:0,class:"q-mb-sm"})):p("",!0),(a(!0),f(m,null,B(l.children,(v,A)=>(a(),r(I,{key:`app-submenulevel2-${y}-${A}`,item:v,"avatar-size":e.iconSize,"icon-size":e.iconSize,"high-light-text":t.value,color:i(v.value)?e.color:void 0,dense:e.denseItem,clickable:e.readonly?!1:l.value!=null||l.children&&l.children.length>0,onOnClick:g},{default:s(()=>[d(S,{side:""},{default:s(()=>[e.useCheckbox?(a(),r(h,{key:0,name:i(v.value)?u(w):u(V),color:i(v.value)?e.color:void 0,size:"20px"},null,8,["name","color"])):i(v.value)?(a(),r(h,{key:1,name:u($),color:e.color,size:"20px"},null,8,["name","color"])):p("",!0)]),_:2},1024)]),_:2},1032,["item","avatar-size","icon-size","high-light-text","color","dense","clickable"]))),128))],64)):(a(),f(m,{key:1},[l?(a(),r(I,{key:0,item:l,dense:e.dense,"avatar-size":e.iconSize,"icon-size":e.iconSize,"high-light-text":t.value,clickable:l.value!=null||l.children&&l.children.length>0,color:i(l.value)?"primary":void 0,onOnClick:g},{default:s(()=>[d(S,{side:""},{default:s(()=>[e.useCheckbox?(a(),r(h,{key:0,name:i(l.value)?u(w):u(V),color:i(l.value)?e.color:void 0,size:"20px"},null,8,["name","color"])):i(l.value)?(a(),r(h,{key:1,name:u($),color:e.color,size:"20px"},null,8,["name","color"])):p("",!0)]),_:2},1024)]),_:2},1032,["item","dense","avatar-size","icon-size","high-light-text","clickable","color"])):p("",!0)],64))],64))),128)),k.value.length==0?(a(),r(G,{key:0,status:"empty",description:u(b)("error.dataNotfound")},null,8,["description"])):p("",!0)]),_:1},8,["height"])]),_:1},8,["dense"]))]),_:1})]),_:3},16,["bordered","flat"]))}});export{oe as _};
