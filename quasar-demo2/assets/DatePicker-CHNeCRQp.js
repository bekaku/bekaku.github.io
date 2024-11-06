import{d as x,aC as p,aD as V,r as h,a as C,u as P,aY as g,aI as B,aZ as T,_ as S,B as D,C as b,a_ as w,E as a,I as c,R as u,F as o,ag as A,O as L,a$ as F,b0 as M,aq as Q,af as m,ah as Y,b1 as q}from"./index-BzL-CGt2.js";import{C as N}from"./ClosePopup-DfQy5j8Q.js";const W=x({__name:"DatePicker",props:p({title:{type:String,default:""},minDate:{type:String,default:void 0},maxDate:{type:String,default:void 0},dateList:{type:Array,default:()=>[]},dense:{type:Boolean,default:!1},disable:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:p(["update:modelValue"],["update:modelValue"]),setup(n,{expose:r,emit:l}){var _;r();const e=n,s=V(n,"modelValue"),i=h(null),d=l,k=(_=e.dateList)==null?void 0:_.map(t=>t.replaceAll("-","/")),{t:y}=C(),{datePickerLocale:v}=P(),f={props:e,modelValue:s,dateProxy:i,emit:d,limitDates:k,t:y,datePickerLocale:v,clear:()=>{s.value=""},options:t=>e.minDate&&e.maxDate?t>=e.minDate.replaceAll("-","/")&&t<=e.maxDate.replaceAll("-","/"):e.minDate?t>=e.minDate.replaceAll("-","/"):e.maxDate?t<=e.maxDate.replaceAll("-","/"):!0,onClosePicker:t=>{i.value&&i.value.hide()},get biCalendarWeek(){return g},get biX(){return B},get convertDateFormatToThai(){return T}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}),X={class:"self-center full-width no-outline",tabindex:"0"},j={class:"row items-center justify-end"},I={class:"text-negative"};function O(n,r,l,e,s,i){return D(),b(q,{outlined:"","bottom-slots":"",label:l.title,"stack-label":""},w({control:a(()=>[c("div",X,u(e.convertDateFormatToThai(e.modelValue)),1)]),append:a(()=>[o(m,{flat:"",round:"",icon:e.biCalendarWeek,disable:l.disable,color:"primary",dense:""},{default:a(()=>[o(A,null,{default:a(()=>[L(u(e.t("base.chooseDate")),1)]),_:1}),o(F,{ref:"dateProxy","transition-show":"scale","transition-hide":"scale"},{default:a(()=>[o(M,{modelValue:e.modelValue,"onUpdate:modelValue":[r[0]||(r[0]=d=>e.modelValue=d),e.onClosePicker],mask:"YYYY-MM-DD","first-day-of-week":0,locale:e.datePickerLocale,options:l.dateList.length>0?e.limitDates:e.options},{default:a(()=>[c("div",j,[Q(o(m,{label:e.t("base.close"),color:"primary",flat:""},null,8,["label"]),[[N]])])]),_:1},8,["modelValue","locale","options"])]),_:1},512)]),_:1},8,["icon","disable"])]),after:a(()=>[e.modelValue?(D(),b(m,{key:0,flat:"",round:"",icon:e.biX,size:"xs",onClick:e.clear},null,8,["icon"])):Y("",!0)]),_:2},[l.required&&!e.modelValue?{name:"hint",fn:a(()=>[c("span",I,u(e.t("error.validateRequireChoose")),1)]),key:"0"}:void 0]),1032,["label"])}const G=S(W,[["render",O],["__file","DatePicker.vue"]]);export{G as default};
