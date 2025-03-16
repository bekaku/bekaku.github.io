const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BaseLoadmore-D3afEBSZ.js","assets/index-D68YvXgu.js","assets/index-Bb7z0Y_k.css"])))=>i.map(i=>d[i]);
import{l as Y,a as F,u as H,r as l,o as q,h as K,c as R,m,n as u,w as s,x as a,a0 as o,X as C,az as S,bc as G,t as w,a4 as r,bA as W,bd as X,at as b,a3 as P,bB as j,ar as J,as as x,au as Q,bC as Z,bD as ee,bE as ae,ac as se,bF as te,$ as oe,a2 as le,aA as ne,bG as ie,aI as re}from"./index-D68YvXgu.js";import{u as ue,A as de}from"./useAuth-BIpM3BpW.js";import{U as ce}from"./UserService-Uig_Xa3j.js";import{u as pe}from"./useAppMeta-Drc70SGy.js";import{u as me}from"./usePaging-BNr6zZmt.js";import{B as fe}from"./BaseCard-x93pQ0p7.js";import{_ as ve}from"./SettingLayout.vue_vue_type_script_setup_true_lang-BxZ7cYbF.js";import{_ as ge}from"./PasswordForm.vue_vue_type_script_setup_true_lang-Cci9q9gn.js";import"./useAxios-Dx6XxiQg.js";import"./use-meta-CKw5NdLW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BaseMenuItems.vue_vue_type_style_index_0_lang-eUzo1y3V.js";import"./BaseAvatar-DG8Rgp18.js";import"./FileManagerService-D0wKNKzi.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./BasePage.vue_vue_type_script_setup_true_lang-BE8aGQRs.js";import"./useValidation-BLU7ykTP.js";import"./BaseButton-BrRy4iP_.js";const _e={class:"text-h6"},we={class:"text-weight-medium"},be={class:"text-grey-8"},Pe={key:0},he={class:"text-grey-8 q-gutter-xs"},Ye=Y({__name:"security",setup(Ae){const L=ne(()=>re(()=>import("./BaseLoadmore-D3afEBSZ.js"),__vite__mapDeps([0,1,2])));pe();const{appConfirm:I,appLoading:D}=F(),{t:n}=H(),{signOut:N}=ue(),{selfUpdatePassword:U,currentAuthSession:M}=ce(),{removeAccessTokenSession:O}=de(),{pages:d}=me(10),h=l(""),A=l("");l(""),l(!1);const y=l(!0),c=l(!1),f=l([]),k=l(!0),v=l(null),p=l(!1),g=l(!1);q(()=>{B()}),K(()=>{v.value&&(clearTimeout(v.value),v.value=null)});const z=R(()=>`?page=${d.value.current>0?d.value.current-1:0}&size=${d.value.itemsPerPage}`),T=async()=>{c.value=!0;const t=await U({userChangePasswordRequest:{password:h.value,newPassword:A.value,logoutAllDevice:y.value}});c.value=!1,t&&t.status=="OK"&&(v.value=setTimeout(()=>{N()},1500))},V=async()=>{d.value.current++,await B()},B=async()=>{const t=await M(z.value);t&&t.length>0?(f.value.push(...t),t.length<d.value.itemsPerPage&&(p.value=!0)):p.value=!0,g.value||(g.value=!0),k.value=!1},$=t=>t?ie.formatDate(t,"MMMM DD YYYY, HH:mm:ss"):"-",E=async t=>{if(await I(n("authSessions"),n("base.deleteConfirm"))){const e=f.value[t];if(e&&e.id){D();const _=await O(e.id);D(!1),_&&_.status=="OK"&&f.value.splice(t,1)}}};return(t,i)=>(u(),m(ve,null,{content:s(()=>[a(fe,{title:o(n)("updatePassword")},{default:s(()=>[a(S,null,{default:s(()=>[a(ge,{currentPassword:h.value,"onUpdate:currentPassword":i[0]||(i[0]=e=>h.value=e),newPassword:A.value,"onUpdate:newPassword":i[1]||(i[1]=e=>A.value=e),logoutAllDevice:y.value,"onUpdate:logoutAllDevice":i[2]||(i[2]=e=>y.value=e),loading:c.value,"onUpdate:loading":i[3]||(i[3]=e=>c.value=e),"show-current-password":"","show-logout":"",onOnSubmit:T,"submit-label":o(n)("updatePassword"),"action-align":"left"},null,8,["currentPassword","newPassword","logoutAllDevice","loading","submit-label"])]),_:1}),a(G),a(S,null,{default:s(()=>[w("div",_e,r(o(n)("authSessions")),1)]),_:1}),k.value?(u(),m(S,{key:0,class:"text-center"},{default:s(()=>[a(W,{color:"primary",size:"3em"})]),_:1})):(u(),m(X,{key:1,separator:"",class:"rounded-borders"},{default:s(()=>[a(b,{header:""},{default:s(()=>[P(r(o(n)("authSessionsHelp")),1)]),_:1}),a(j,{style:{"max-height":"350px"},items:f.value},{default:s(({item:e,index:_})=>[(u(),m(J,{key:e.id},{default:s(()=>[a(x,{avatar:"",top:""},{default:s(()=>[a(Q,{name:e.loginFrom=="WEB"?o(Z):e.loginFrom=="IOS"?o(ee):o(ae),color:"black",size:"34px"},null,8,["name"])]),_:2},1024),a(x,{top:""},{default:s(()=>[a(b,{lines:"1"},{default:s(()=>[w("span",we,"["+r(e.ipAddredd)+"]",1),w("span",be," - "+r(e.hostName),1),e.activeNow?(u(),se("span",Pe,[a(Q,{size:"lg",name:o(te),color:"positive"},null,8,["name"])])):C("",!0)]),_:2},1024),a(b,{lines:"1"},{default:s(()=>[P(r(e.agent),1)]),_:2},1024),a(b,{lines:"1",caption:""},{default:s(()=>[P(r(o(n)("lastestActive")+" "+$(e.lastestActive||e.createdDate)),1)]),_:2},1024)]),_:2},1024),a(x,{top:"",side:""},{default:s(()=>[w("div",he,[a(oe,{class:"gt-xs",size:"12px",flat:"",round:"",icon:"bi-trash",onClick:ye=>E(_)},{default:s(()=>[a(le,null,{default:s(()=>[P(r(o(n)("base.delete")),1)]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))]),_:1},8,["items"])]),_:1})),!p.value&&g.value?(u(),m(o(L),{key:2,loading:c.value,"frist-loaded":g.value,"is-infinite-disabled":p.value,label:o(n)("base.loadMore"),onOnNextPage:V,button:"","show-icon":"","full-width":""},null,8,["loading","frist-loaded","is-infinite-disabled","label"])):C("",!0)]),_:1},8,["title"])]),_:1}))}});export{Ye as default};
