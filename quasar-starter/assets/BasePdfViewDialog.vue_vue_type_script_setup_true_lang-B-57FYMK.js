import{l as m,aa as i,ab as r,H as f,m as h,n as u,w as c,x as p,a0 as b,b7 as w}from"./index-D68YvXgu.js";import{_ as g}from"./image-view-B2m1vLVk.js";const y=m({__name:"BasePdfViewDialog",props:i({title:{},src:{},fetchToServer:{type:Boolean,default:!1},showDownload:{type:Boolean,default:!0},isBlob:{type:Boolean,default:!1},scrollHeight:{default:"85vh"},minHeight:{default:"500px"},minWidth:{default:"100%"},closeable:{type:Boolean,default:!0},maximized:{type:Boolean,default:!1}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:i(["on-close","on-before-hide","on-delete"],["update:modelValue"]),setup(s,{emit:t}){const n=t,o=r(s,"modelValue"),{isSmallScreen:d}=f(),l=()=>{o.value=!1,n("on-close")};return(e,a)=>(u(),h(w,{"model-value":o.value,maximized:e.maximized||b(d),"full-width":"","full-height":"",onHide:l,onBeforeHide:a[0]||(a[0]=B=>e.$emit("on-before-hide"))},{default:c(()=>[p(g,{src:e.src,closeable:e.closeable,title:e.title,"fetch-to-server":e.fetchToServer,"show-download":e.showDownload,"is-blob":e.isBlob,"scroll-height":e.scrollHeight,"min-height":e.minHeight,"min-width":e.minWidth,onOnClose:l},null,8,["src","closeable","title","fetch-to-server","show-download","is-blob","scroll-height","min-height","min-width"])]),_:1},8,["model-value","maximized"]))}});export{y as _};
