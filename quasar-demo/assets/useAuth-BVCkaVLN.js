import{at as P,au as D,u as q,a as K,av as l,aw as i,ax as p,ay as g,az as S,P as V,aA as u}from"./index-DzrxKNnn.js";import{u as E,a as O}from"./useAxios-iI_x9o6-.js";const I=()=>{const{callAxios:s,callAxiosProcess:n}=E();return{singin:async t=>new Promise(a=>{setTimeout(()=>{a(P)},1500)}),singoutToServer:async t=>new Promise(a=>{setTimeout(()=>{a({status:"OK",timestamp:""})},1500)}),refreshToken:async t=>new Promise(a=>{setTimeout(()=>{a(P)},1500)}),removeAccessTokenSession:async t=>await s({API:`/api/auth/removeAccessTokenSession?id=${t}`,method:"DELETE"}),requestVerifyCodeToResetPwd:async t=>await n({API:"/api/auth/requestVerifyCodeToResetPwd",method:"POST",body:{forgotPasswordRequest:t}}),sendVerifyCodeToResetPwd:async t=>await n({API:"/api/auth/sendVerifyCodeToResetPwd",method:"POST",body:{forgotPasswordRequest:t}}),resetPassword:async t=>await n({API:"/api/auth/resetPassword",method:"POST",body:{forgotPasswordRequest:t}})}},L=()=>{const s=V,n=D(),{appConfirm:d,appLoading:c,isDevMode:m}=q(),{t:h}=K(),{singoutToServer:A}=I(),{logoutClear:f}=O(),T=()=>{},t=e=>s&&s.get(e)||null,a=e=>{e!=null&&n.setAuthen(e)},k=async()=>{var r;if(!s)return;if(await d(h("app.monogram"),h("helper.logoutConfirm"))){c();const o=t(p),R=(r=n.auth)==null?void 0:r.email;await y(o,R),c(!1),w()}},C=e=>{v(s,e,!m())},v=(e,r,o=!1)=>{e&&(e.set(l,r.authenticationToken,{expires:i(u),path:"/",secure:o,sameSite:"Strict"}),e.set(p,r.refreshToken,{expires:i(u),path:"/",secure:o,sameSite:"Strict"}),e.set(g,r.expiresAt,{expires:i(u),path:"/",secure:o,sameSite:"Strict"}),e.set(S,Date.now().toString(),{expires:i(u),path:"/",secure:o,sameSite:"Strict"}))},y=async(e,r)=>!e||!r?new Promise(o=>{o(!0)}):(await A({refreshToken:{refreshToken:e,email:r}}),new Promise(o=>{o(!0)})),x=()=>new Promise(e=>{s&&(s.remove(l,{path:"/"}),s.remove(p,{path:"/"}),s.remove(g,{path:"/"}),s.remove(S,{path:"/"})),f(),e(!0)}),w=async(e=!0)=>{await x(),n.logout(),e&&window.location.replace("/auth/login")};return{initAppAuthen:T,signOut:k,setAuthen:a,destroyAuthDataAndRedirect:w,setAuthenticationCookies:C,logoutToServer:y}};export{I as A,L as u};
