const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NotificationItem-DMsS10H0.js","assets/index-C1BRECWX.js","assets/index-BqtQn6ht.css","assets/AppHeader-D3ebsnxa.js","assets/ClosePopup-D1nvKGL2.js","assets/BaseAvatar-c1Is7lK1.js","assets/AppImage-Dv_7_q5s.js","assets/FileManagerService-CWdNIQZG.js","assets/useAxios-Com3o9vK.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/AppImage-7qo1BP8j.css","assets/BaseAvatar-CgUjO2Sl.css","assets/useAuth-B-pNs4EP.js","assets/AppHeader-DEO3GFCV.css","assets/NotificationItem-DlV33eYF.css","assets/SkeletonItem-DNU5Kj4x.js","assets/AppResult-C3oSsT45.js"])))=>i.map(i=>d[i]);
import{d as C,a as E,r as y,T as I,Y as s,Z as l,_ as S,B as e,C as i,E as c,F as _,M as h,I as g,R as w,H as B,ai as N,aW as x,aq as D,af as P,S as b}from"./index-C1BRECWX.js";import{C as R}from"./ClosePopup-D1nvKGL2.js";import{U as L}from"./AppHeader-D3ebsnxa.js";import"./BaseAvatar-c1Is7lK1.js";import"./AppImage-Dv_7_q5s.js";import"./FileManagerService-CWdNIQZG.js";import"./useAxios-Com3o9vK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useAuth-B-pNs4EP.js";const M=C({__name:"NotificationBarMenu",setup(k,{expose:d}){d();const u=s(()=>l(()=>import("./NotificationItem-DMsS10H0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))),t=s(()=>l(()=>import("./SkeletonItem-DNU5Kj4x.js"),__vite__mapDeps([15,1,2]))),f=s(()=>l(()=>import("./AppResult-C3oSsT45.js"),__vite__mapDeps([16,1,2]))),{findAllByUser:n}=L(),{t:o}=E(),a=y(!1),m=y([]);I(async()=>{a.value=!0,await p(),a.value=!1});const p=async()=>{const r=await n(1,10);return r&&r.length>0&&m.value.push(...r),new Promise(A=>{A(!0)})},v={NotificationItem:u,SkeletonItem:t,AppResult:f,findAllByUser:n,t:o,loading:a,items:m,fetchDataData:p};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}),V={class:"text-h6"};function O(k,d,u,t,f,n){return e(),i(b,{flat:""},{default:c(()=>[_(h,null,{default:c(()=>[g("div",V,w(t.t("base.notification")),1)]),_:1}),t.loading?(e(),i(t.SkeletonItem,{key:0,items:5,show:""})):t.items.length>0?(e(),B(N,{key:1},[(e(!0),B(N,null,x(t.items,(o,a)=>(e(),i(t.NotificationItem,{key:`notification-${o.id}`,item:o,index:a},null,8,["item","index"]))),128)),_(h,null,{default:c(()=>[D(_(P,{unelevated:"",rounded:"",color:"primary",class:"full-width",label:t.t("base.readAllNotifications"),to:"/notifications"},null,8,["label"]),[[R]])]),_:1})],64)):(e(),i(t.AppResult,{key:2,status:"empty",description:t.t("error.dataNotfound")},null,8,["description"]))]),_:1})}const Z=S(M,[["render",O],["__file","NotificationBarMenu.vue"]]);export{Z as default};
