import{l as d,ad as r,ae as m,m as l,n as o,aV as u,w as f,t as i,a0 as p,av as c,X as B}from"./index-__cRNkUR.js";import{B as b}from"./BaseAvatar-BZ-ZEarg.js";const V={class:"row items-center q-gutter-x-sm"},v=d({__name:"BaseRadio",props:r({items:{},disable:{type:Boolean},inline:{type:Boolean,default:!0},size:{default:"md"},color:{},fetchImage:{type:Boolean,default:!1},leftLabel:{type:Boolean,default:!1},editMode:{type:Boolean,default:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const s=m(n,"modelValue");return(e,t)=>(o(),l(u,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=a=>s.value=a),disable:!e.editMode||e.disable,options:e.items,type:"radio",color:e.color,size:e.size,inline:e.inline,"left-label":e.leftLabel},{label:f(a=>[i("div",V,[a.avatar?(o(),l(b,{key:0,"fetch-image":e.fetchImage,src:a.avatar},null,8,["fetch-image","src"])):a.icon?(o(),l(c,{key:1,name:a.icon},null,8,["name"])):p("",!0),i("span",null,B(a.label),1)])]),_:1},8,["modelValue","disable","options","color","size","inline","left-label"]))}});export{v as _};
