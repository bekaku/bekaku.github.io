import{d as l,bs as o,_ as n,B as s,H as i,F as d,aL as f,af as r}from"./index-BWIq0ofC.js";const u=l({__name:"BaseLoadmore",props:{fristLoaded:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},icon:{type:String,default:o},isInfiniteDisabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},button:{type:Boolean,default:!0},small:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},label:{type:String,default:""},color:{type:String,default:void 0},fill:{type:String,default:"solid"}},emits:["on-next-page"],setup(t,{expose:a}){a();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),c={class:"row justify-center"};function _(t,a,e,p,m,B){return s(),i("div",c,[d(r,{onClick:a[0]||(a[0]=b=>t.$emit("on-next-page")),disable:e.isInfiniteDisabled,label:e.label,class:f(["text-capitalize q-ma-sm",e.color+" "+(e.fullWidth?"full-width":"")]),icon:e.showIcon?e.icon:void 0,flat:"",loading:e.loading},null,8,["disable","label","class","icon","loading"])])}const g=n(u,[["render",_],["__file","BaseLoadmore.vue"]]);export{g as default};
