import{l as T,r as l,o as C,m as x,n as V,w as a,x as n,aA as S,a4 as o,W as r,P as w,A,cL as B}from"./index-__cRNkUR.js";import{U as I}from"./UserService-Du7jMFT3.js";import{u as $}from"./useAppMeta-BFA3x1Cv.js";import{B as y}from"./BaseCard-q-Y47Oi3.js";import{_}from"./BasePage.vue_vue_type_script_setup_true_lang-CK0_gL4k.js";import"./useAxios-DRM2HYJN.js";import"./use-meta-B1rlW-p2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b=20,j=T({__name:"test",setup(E){$({additionalTitle:"Test Page"});const{findCurrentUserData:d}=I();l("http://localhost:8080/cdn/images/202211/145_1668642842865_fe718909cb0d4bd88e17c8568fe12e2f.jpg");const s=l(),u=l(),i=l(),f=l(),v=l();l(!1),C(async()=>{console.log("onMounted")});const m=()=>{for(let e=0;e<b;e++)c()},g=()=>{s.value&&(clearInterval(s.value),s.value=null),u.value&&(clearInterval(u.value),u.value=null),i.value&&(clearInterval(i.value),i.value=null),f.value&&(clearInterval(f.value),f.value=null),v.value&&(clearInterval(v.value),v.value=null)},c=async()=>{const e=await d();console.log("res",e)},k=async()=>{const e=w.get(A);if(e){const t=await B(e);console.log("currentExpireStatus","currentToken",e,t)}};return(e,t)=>(V(),x(_,null,{default:a(()=>[n(y,null,{default:a(()=>[n(S,null,{default:a(()=>[n(o,{onClick:t[0]||(t[0]=p=>c())},{default:a(()=>t[4]||(t[4]=[r(" Fetch")])),_:1}),n(o,{onClick:t[1]||(t[1]=p=>m())},{default:a(()=>t[5]||(t[5]=[r(" start")])),_:1}),n(o,{onClick:t[2]||(t[2]=p=>g()),color:"negative"},{default:a(()=>t[6]||(t[6]=[r(" stop")])),_:1}),n(o,{onClick:t[3]||(t[3]=p=>k()),color:"blue"},{default:a(()=>t[7]||(t[7]=[r(" JWT TEST")])),_:1})]),_:1})]),_:1})]),_:1}))}});export{j as default};
