import{d as S,r as n,T as x,P as b,av as w,bj as P,_ as V,B as y,H as E,F as o,E as s,S as I,M as B,af as f,O as d}from"./index-C_yxR0el.js";import{u as J}from"./useAppMeta-CXPOhSgr.js";import{U as M}from"./UserService-BgMKd9pz.js";import"./use-meta-CSDCNMcV.js";import"./useAxios-D6zl6uXP.js";const j=500,m=20,A=S({__name:"TestPage",setup(T,{expose:e}){e(),J({additionalTitle:"Test Page"});const{findCurrentUserData:p}=M(),a=n("http://localhost:8080/cdn/images/202211/145_1668642842865_fe718909cb0d4bd88e17c8568fe12e2f.jpg"),l=n(),r=n(),c=n(),u=n(),i=n();x(async()=>{console.log("onMounted")});const g=()=>{for(let t=0;t<m;t++)v()},k=()=>{l.value&&(clearInterval(l.value),l.value=null),r.value&&(clearInterval(r.value),r.value=null),c.value&&(clearInterval(c.value),c.value=null),u.value&&(clearInterval(u.value),u.value=null),i.value&&(clearInterval(i.value),i.value=null)},v=async()=>{const t=await p();console.log("res",t)},_={findCurrentUserData:p,src:a,interVal:l,interVal2:r,interVal3:c,interVal4:u,interVal5:i,timeout:j,totalRequest:m,start:g,stop:k,fetchData:v,testJwt:async()=>{const t=b.get(w);if(t){const C=await P(t);console.log("currentExpireStatus","currentToken",t,C)}}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),D={class:"q-pa-md"};function Q(T,e,p,a,l,r){return y(),E("div",D,[o(I,{flat:"",bordered:"",class:"wee-container-responsive-center"},{default:s(()=>[o(B,null,{default:s(()=>[o(f,{onClick:a.fetchData},{default:s(()=>e[0]||(e[0]=[d(" Fetch")])),_:1}),o(f,{onClick:a.start},{default:s(()=>e[1]||(e[1]=[d(" start")])),_:1}),o(f,{onClick:a.stop,color:"negative"},{default:s(()=>e[2]||(e[2]=[d(" stop")])),_:1}),o(f,{onClick:a.testJwt,color:"blue"},{default:s(()=>e[3]||(e[3]=[d(" JWT TEST")])),_:1})]),_:1})]),_:1})])}const H=V(A,[["render",Q],["__file","TestPage.vue"]]);export{H as default};
