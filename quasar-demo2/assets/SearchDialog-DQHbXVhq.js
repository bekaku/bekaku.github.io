const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SearchForm-GHZkH2bY.js","assets/index-gOe3LaSD.js","assets/index-HNifYG8Q.css","assets/useAxios-xdd54WUR.js","assets/SearchForm-BB958prA.css"])))=>i.map(i=>d[i]);
import{d as _,u as f,a as m,f as h,bF as S,Y as b,Z as g,_ as v,B as w,C as q,E as x,F as u,aa as D}from"./index-gOe3LaSD.js";import V from"./AppDialog-D8V44avF.js";import"./QBar-TCRQx70o.js";const B=_({__name:"SearchDialog",props:{modelValue:{type:Boolean,require:!0}},emits:["on-close","update:modelValue","on-submit"],setup(n,{expose:o,emit:l}){o();const e=b(()=>g(()=>import("./SearchForm-GHZkH2bY.js"),__vite__mapDeps([0,1,2,3,4]))),t=n,{appGoto:s}=f(),{t:r}=m(),i=l,d=h({get:()=>t.modelValue,set:a=>i("update:modelValue",a)}),p={SearchForm:e,props:t,appGoto:s,t:r,emit:i,show:d,onSubmit:a=>{d.value=!1;let c=`q=${a.q}&q_profile=${a.profile?"true":"false"}&q_post=${a.post?"true":"false"}&q_hashtag=${a.hashTag?"true":"false"}&q_theme=${a.theme?"true":"false"}`;s(`/search?${c}`)},AppDialog:V,get biSearch(){return S}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}});function C(n,o,l,e,t,s){return w(),q(e.AppDialog,{icon:e.biSearch,"model-value":e.show,"full-width":!1,title:e.t("base.search"),onOnClose:o[0]||(o[0]=r=>e.show=!1),onOnHide:o[1]||(o[1]=r=>e.show=!1),persistent:!1,"transition-show":"fade","transition-hide":"fade","dialog-style":"width: 550px; max-width: 90vw"},{default:x(()=>[u(D),u(e.SearchForm,{onOnSubmit:e.onSubmit})]),_:1},8,["icon","model-value","title"])}const $=v(B,[["render",C],["__scopeId","data-v-a2865a10"],["__file","SearchDialog.vue"]]);export{$ as default};
