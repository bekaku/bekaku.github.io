import{l as t,cQ as o,V as n,n as i,x as s,Z as d,a4 as f}from"./index-__cRNkUR.js";const u={class:"row justify-center"},m=t({__name:"BaseLoadmore",props:{fristLoaded:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},icon:{type:String,default:o},isInfiniteDisabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},button:{type:Boolean,default:!0},small:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},label:{type:String,default:""},color:{type:String,default:void 0},fill:{type:String,default:"solid"}},emits:["on-next-page"],setup(e){return(a,l)=>(i(),n("div",u,[s(f,{onClick:l[0]||(l[0]=c=>a.$emit("on-next-page")),disable:e.isInfiniteDisabled,label:e.label,class:d(["text-capitalize q-ma-sm",e.color+" "+(e.fullWidth?"full-width":"")]),icon:e.showIcon?e.icon:void 0,flat:"",loading:e.loading},null,8,["disable","label","class","icon","loading"])]))}});export{m as default};
