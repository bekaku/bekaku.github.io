import{d as M,ab as k,cs as _,j as B,ac as x,k as r,a$ as C,ct as L,c as I,o as $,w as p,e as f,K as y,aA as A}from"./index-UTJsbmGU.js";import{_ as S}from"./BaseDialog.vue_vue_type_script_setup_true_lang-CbJfi44e.js";import{_ as P}from"./BaseCommandPalette.vue_vue_type_script_setup_true_lang-BE0uQvE8.js";import{B as U}from"./BaseButton-BUn1xyHV.js";import"./BaseCard-DoN1hG9u.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BaseInput.vue_vue_type_script_setup_true_lang-CVDxnSgW.js";import"./BaseAvatar-DYsAAppw.js";import"./BaseImage-C5pcvk_j.js";import"./FileManagerService-oa2a8H9O.js";import"./useAxios-D87ZUWP6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./BaseSpinner-hdbtQd30.js";import"./BaseScrollArea.vue_vue_type_script_setup_true_lang-CpNKkevY.js";import"./BaseLabelValueItem.vue_vue_type_script_setup_true_lang-CY7wWuLD.js";import"./BaseResult.vue_vue_type_script_setup_true_lang-DkfpcqgX.js";const W=M({__name:"SearchMenu",props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:k(["on-click"],["update:modelValue"]),setup(b,{emit:v}){const{drawers:h}=_(),{t:n}=B(),i=x(b,"modelValue"),d=r(),m=r(!0),s=r([]),V=v;C(async()=>{await g(),m.value=!1});const g=()=>{const t=h.concat(L);return new Promise(l=>{for(const o of t)if(o.children!=null&&o.children.length>0)for(const e of o.children)if(e.children!=null&&e.children.length>0){const c={label:e.label&&e.translateLabel!==!1?n(e.label):e.label||"",description:e.description,icon:e.icon,children:[]},u=[];for(const a of e.children)u.push({label:a.label&&a.translateLabel!==!1?n(a.label):a.label||"",description:a.description,icon:a.icon,value:a.to});c.children=u,s.value.push(c)}else s.value.push({label:e.label&&e.translateLabel!==!1?n(e.label):e.label||"",description:e.description,icon:e.icon,value:e.to});l(!0)})},w=t=>{t!=null&&V("on-click",t)};return(t,l)=>($(),I(S,{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=o=>i.value=o),"show-toolbar":!1,padding:!1,"dialog-style":"width: 756px; max-width: 80vw;"},{default:p(()=>[f(P,{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=o=>d.value=o),loading:m.value,bordered:!1,class:"q-pt-sm",multiple:!1,items:s.value,onOnClick:w},{inputAppend:p(()=>[f(U,{round:"",flat:"",icon:y(A),onClick:l[0]||(l[0]=o=>i.value=!1)},null,8,["icon"])]),_:1},8,["modelValue","loading","items"])]),_:1},8,["modelValue"]))}});export{W as default};
