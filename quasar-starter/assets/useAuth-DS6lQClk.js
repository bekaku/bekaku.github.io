import{bN as b,bO as D,a as K,u as R,bP as q,A as y,bQ as a,bR as u,bS as p,bT as d,bU as g,P as O}from"./index-D_to5wmt.js";import{u as V}from"./useAxios-BVW2bjHp.js";const B=()=>(V(),{singin:async n=>(console.log("AuthenService.ts > singin",n),new Promise(t=>{setTimeout(()=>{t(b)},500)})),singoutToServer:async n=>(console.log("AuthenService.ts > singoutToServer",n),new Promise(t=>{setTimeout(()=>{t({status:"OK",timestamp:"2025-03-14 13:30"})},500)})),refreshToken:async n=>new Promise(t=>{setTimeout(()=>{t(null)},500)}),removeAccessTokenSession:async n=>new Promise(t=>{setTimeout(()=>{t({status:"OK",timestamp:"2025-03-14 13:30"})},500)}),requestVerifyCodeToResetPwd:async n=>new Promise(t=>{setTimeout(()=>{t(null)},500)}),sendVerifyCodeToResetPwd:async n=>new Promise(t=>{setTimeout(()=>{t(null)},500)}),resetPassword:async n=>new Promise(t=>{setTimeout(()=>{t(null)},500)})}),G=()=>{const s=O,i=D(),{appConfirm:h,appLoading:c,isDevMode:l,appGoto:T}=K(),{t:m}=R(),{singoutToServer:n}=B(),{logoutClear:t}=q(),w=()=>{},S=e=>s&&s.get(e)||null,P=e=>{e!=null&&i.setAuthen(e)},v=async()=>{if(!s)return;if(await h(m("app.monogram"),m("helper.logoutConfirm"))){c();const r=S(p),o=i.auth?.email;await A(r,o),c(!1),f()}},k=e=>{C(s,e,!l())},C=(e,r,o=!1)=>{e&&(e.set(y,r.authenticationToken,{expires:a(u),path:"/",secure:o,sameSite:"Lax"}),e.set(p,r.refreshToken,{expires:a(u),path:"/",secure:o,sameSite:"Strict"}),e.set(d,r.expiresAt,{expires:a(u),path:"/",secure:o,sameSite:"Strict"}),e.set(g,Date.now().toString(),{expires:a(u),path:"/",secure:o,sameSite:"Strict"}))},A=async(e,r)=>!e||!r?new Promise(o=>{o(!0)}):(await n({refreshToken:{refreshToken:e,email:r}}),new Promise(o=>{o(!0)})),x=()=>new Promise(e=>{s&&(s.remove(y,{path:"/"}),s.remove(p,{path:"/"}),s.remove(d,{path:"/"}),s.remove(g,{path:"/"})),t(),e(!0)}),f=async(e=!0)=>{await x(),i.logout(),e&&T("/auth/login",!0)};return{initAppAuthen:w,signOut:v,setAuthen:P,destroyAuthDataAndRedirect:f,setAuthenticationCookies:k,logoutToServer:A}};export{B as A,G as u};
