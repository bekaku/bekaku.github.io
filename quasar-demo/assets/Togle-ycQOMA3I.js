import{d as u,aC as c,a as s,aD as r,aH as m,aI as f,_ as k,B as t,H as i,R as V,ah as _,C as b,aJ as g,aK as y,ai as L}from"./index-Ck7C3Bne.js";const h=u({__name:"Togle",props:c({label:{type:String,default:void 0},trueLabel:{type:String,default:void 0},falseLabel:{type:String,default:void 0},color:{type:String,default:"primary"},size:{type:String,default:"md"},useCheckbox:{type:Boolean,default:!0},useLabelTitle:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!1}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(n,{expose:a}){a();const{t:e}=s(),l=r(n,"modelValue"),o={t:e,modelValue:l,get biCheck(){return m},get biX(){return f}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),C={key:0,class:"text-muted"};function T(n,a,e,l,o,x){return t(),i(L,null,[!e.label&&e.showTitle?(t(),i("div",C,V(e.label),1)):_("",!0),e.useCheckbox?(t(),b(y,{key:2,modelValue:l.modelValue,"onUpdate:modelValue":a[1]||(a[1]=d=>l.modelValue=d),color:e.color,size:e.size,label:e.useLabelTitle?e.label?e.label:l.t("base.enable"):l.modelValue?e.trueLabel?e.trueLabel:l.t("base.enable"):e.falseLabel?e.falseLabel:l.t("base.disable")},null,8,["modelValue","color","size","label"])):(t(),b(g,{key:1,modelValue:l.modelValue,"onUpdate:modelValue":a[0]||(a[0]=d=>l.modelValue=d),"checked-icon":l.biCheck,color:e.color,size:e.size,"keep-color":"",label:e.useLabelTitle?e.label?e.label:l.t("base.enable"):l.modelValue?e.trueLabel?e.trueLabel:l.t("base.enable"):e.falseLabel?e.falseLabel:l.t("base.disable"),"unchecked-icon":l.biX},null,8,["modelValue","checked-icon","color","size","label","unchecked-icon"]))],64)}const S=k(h,[["render",T],["__file","Togle.vue"]]);export{S as default};
