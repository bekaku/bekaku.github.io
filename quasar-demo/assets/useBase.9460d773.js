import{aN as h,aO as C,aP as T,a8 as W,aQ as k,aR as A,aS as F,aT as P,aU as x,aV as N,aW as w,aX as O}from"./index.1297aae9.js";import{u as L}from"./useLang.596523dd.js";var B=()=>{const s=h(),i=C(),c=T(),{t:n,locale:u}=L(),p=W(()=>s.dark.isActive),b=(e=!0)=>e?i.fullPath:i.path,d=()=>c.options.history.state.back,l=e=>{if(!!e)return i.params?i.params[e]:void 0},m=e=>{if(!!e)return i.query?i.query[e]:void 0},v=e=>{const t=l(e);return t!=null?+t:0},g=e=>{const t=m(e);return t!=null?+t:0},y=(e,t)=>{!e||(t?c.replace({path:e}):c.push(e))},f=()=>{s.loading.isActive&&s.loading.hide()};return{WeeGetParam:l,WeeGetQuery:m,WeeGoTo:y,WeeLoader:(e=!0,t=void 0,a=0)=>{e?(f(),s.loading.show({delay:a,message:t===void 0?n("base.pleaseWait"):t})):f()},WeeToast:(e,t)=>{if(!e)return;let a;if(t&&t.type){const o=t.type;o==="positive"?a=x:o==="negative"?a=N:o==="warning"?a=w:o==="info"&&(a=O)}s.notify(Object.assign({message:e,icon:a,timeout:5e3,progress:!0,position:"bottom",multiLine:!0,actions:t!=null&&t.hideClose?void 0:[{icon:k,color:"white"}]},t))},WeeConfirm:async(e,t,a={},o={})=>new Promise(r=>{s.dialog({title:e,message:t,ok:Object.assign({textColor:"primary",flat:!0,label:n("base.okay")},a),cancel:Object.assign({textColor:"grey",flat:!0,label:n("base.cancel")},o),persistent:!0}).onOk(()=>{r(!0)}).onOk(()=>{r(!0)}).onCancel(()=>{r(!1)}).onDismiss(()=>{r(!1)})}),getCurrentPath:b,getParamNumber:v,getQueryNumber:g,getPreviousPath:d,AppFormatDate:(e,t)=>A(e,t,u.value),scrollToTop:e=>{e&&e.scrollIntoView({block:"end",behavior:"smooth"})},isDevMode:()=>!1,AppFormatDateTime:(e,t)=>F(e,t,u.value),AppFormatDateDistance:e=>P(e,u.value),readableNumber:(e,t)=>{if(e<1e3)return e;const a=[{value:1,symbol:""},{value:1e3,symbol:"k"}],o=/\.0+$|(\.[0-9]*[1-9])0+$/,r=a.slice().reverse().find(function(D){return e>=D.value});return r?(e/r.value).toFixed(t).replace(o,"$1")+(r.symbol?n("readableNum."+r.symbol):""):"0"},isDark:p}};export{B as u};
