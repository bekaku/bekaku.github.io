import{l as r,am as d,an as m,m as l,n as o,aY as u,w as p,t as n,T as f,p as b,O as c,aA as B,M as V}from"./index-5wxfv7l2.js";import{B as y}from"./BaseAvatar-DmaVsg_V.js";const v={class:"row items-center q-gutter-x-sm"},g=r({__name:"BaseRadio",props:d({items:{},disable:{type:Boolean},inline:{type:Boolean,default:!0},size:{default:"md"},color:{},leftLabel:{type:Boolean,default:!1},editMode:{type:Boolean,default:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(i){const s=m(i,"modelValue");return(e,t)=>(o(),l(u,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=a=>s.value=a),disable:!e.editMode||e.disable,options:e.items,type:"radio",color:e.color,size:e.size,inline:e.inline,"left-label":e.leftLabel},{label:p(a=>[n("div",v,[a.avatar?(o(),l(y,b(c({key:0},{...a.avatar})),null,16)):a.icon?(o(),l(B,{key:1,name:a.icon},null,8,["name"])):f("",!0),n("span",null,V(a.label),1)])]),_:1},8,["modelValue","disable","options","color","size","inline","left-label"]))}});export{g as _};
