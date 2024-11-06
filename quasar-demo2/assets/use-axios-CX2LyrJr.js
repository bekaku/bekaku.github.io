import{d as E,a as I,r as l,_ as S,B as t,C as i,E as o,L as w,F as s,M as r,a7 as O,a8 as R,O as B,a9 as T,aa as j,I as a,S as c,H as p,R as f}from"./index-ZORCAnWx.js";import{U as C}from"./Button-C2m30Yz-.js";import q from"./SkeletonItem-Br15pgKM.js";import{u as P}from"./useAppMeta-FpZKiwHi.js";import{u as U}from"./useAxios-C6fOtpAb.js";import"./use-meta-C7THedNo.js";const Q=E({__name:"use-axios",setup(A,{expose:d}){d();const{t:m}=I(),{setTitle:e}=P();e(`Use axios | ${m("app.name")}`);const{callAxios:n}=U(),h=l(null),_=l(!1),y=l(null),g=l(!1),b=l(null),v=l(!1),k=l(),x=l(!1),L={t:m,setTitle:e,callAxios:n,reponseApiItem:h,reaponseApiLoading:_,reponseListItems:y,reponseListLoading:g,reponseObject:b,reponseObjectLoading:v,responseError:k,responseErrorLoading:x,fetchResponseApi:async()=>{_.value=!0,h.value=await n({API:"/api/permission?page=0&size=10&sort=code,asc",method:"GET"}),_.value=!1},fetchResponseList:async()=>{g.value=!0,y.value=await n({API:"/api/permission/findAllBackendPermission",method:"GET"}),g.value=!1},fetchResponseObject:async()=>{v.value=!0,b.value=await n({API:"/api/permission/1",method:"GET"}),v.value=!1},fetchError:async()=>{x.value=!0,n({API:"/api/permission/notfound_url",method:"GET"}).then(u=>{console.log("use-axios > fetch OK",u)}).catch(u=>{k.value=JSON.stringify(u),console.warn("use-axios > fetchError > catch",u)}).finally(()=>{console.log("use-axios > fetchError > finally"),x.value=!1})},UiButton:C,SkeletonItem:q};return Object.defineProperty(L,"__isScriptSetup",{enumerable:!1,value:!0}),L}}),F={class:"row"},N={class:"col-12 col-md-6 q-pa-md"},G={key:1,style:{"max-height":"250px",overflow:"auto"},class:"bg-black text-light-green-13"},V={class:"col-12 col-md-6 q-pa-md"},J={key:1,style:{"max-height":"250px",overflow:"auto"},class:"bg-black text-light-green-13"},M={class:"col-12 col-md-6 q-pa-md"},z={key:1,style:{"max-height":"250px",overflow:"auto"},class:"bg-black text-light-green-13"},D={class:"col-12 col-md-6 q-pa-md"},H={key:1,style:{overflow:"auto"},class:"bg-black text-red"};function K(A,d,m,e,n,h){return t(),i(w,{padding:""},{default:o(()=>[s(c,{flat:"",bordered:"",class:"content-limit"},{default:o(()=>[s(r,null,{default:o(()=>[s(O,null,{default:o(()=>[s(R,null,{default:o(()=>d[0]||(d[0]=[B(" Use axios ")])),_:1}),s(T)]),_:1}),s(j)]),_:1}),s(r,null,{default:o(()=>[a("div",F,[a("div",N,[s(c,null,{default:o(()=>[s(r,{class:"q-gutter-y-md"},{default:o(()=>[s(e.UiButton,{outline:"",label:"Fetch response API",onClick:e.fetchResponseApi}),e.reaponseApiLoading?(t(),i(e.SkeletonItem,{key:0,"show-header":"",items:5})):(t(),p("div",G,[a("pre",null,"                                "+f(e.reponseApiItem)+`
                            `,1)]))]),_:1})]),_:1})]),a("div",V,[s(c,null,{default:o(()=>[s(r,{class:"q-gutter-y-md"},{default:o(()=>[s(e.UiButton,{outline:"",label:"Fetch response LIST",onClick:e.fetchResponseList}),e.reponseListLoading?(t(),i(e.SkeletonItem,{key:0,"show-header":"",items:5})):(t(),p("div",J,[a("pre",null,"                                "+f(e.reponseListItems)+`
                            `,1)]))]),_:1})]),_:1})]),a("div",M,[s(c,null,{default:o(()=>[s(r,{class:"q-gutter-y-md"},{default:o(()=>[s(e.UiButton,{outline:"",label:"Fetch response Object",onClick:e.fetchResponseObject}),e.reponseObjectLoading?(t(),i(e.SkeletonItem,{key:0,"show-header":"",items:5})):(t(),p("div",z,[a("pre",null,"                                "+f(e.reponseObject)+`
                            `,1)]))]),_:1})]),_:1})]),a("div",D,[s(c,null,{default:o(()=>[s(r,{class:"q-gutter-y-md"},{default:o(()=>[s(e.UiButton,{color:"negative",outline:"",label:"Fetch ERROR handling",onClick:e.fetchError}),e.responseErrorLoading?(t(),i(e.SkeletonItem,{key:0,"show-header":"",items:5})):(t(),p("div",H,[a("pre",null,"                                        "+f(JSON.stringify(e.responseError))+`
                                    `,1)]))]),_:1})]),_:1})])])]),_:1})]),_:1})]),_:1})}const le=S(Q,[["render",K],["__file","use-axios.vue"]]);export{le as default};
