import{l as C,u as L,r as o,m as n,n as t,w as s,x as e,az as i,t as a,a0 as q,co as O,ac as u,a4 as d}from"./index-D68YvXgu.js";import{B as p}from"./BaseButton-BrRy4iP_.js";import{_ as m}from"./SkeletonItem.vue_vue_type_script_setup_true_lang-3pPwzn1g.js";import{u as P}from"./useAppMeta-Drc70SGy.js";import{u as R}from"./useAxios-Dx6XxiQg.js";import{B as c}from"./BaseCard-x93pQ0p7.js";import{_ as S}from"./BasePage.vue_vue_type_script_setup_true_lang-BE8aGQRs.js";import T from"./BaseAlert-C7cTPIyJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-meta-CKw5NdLW.js";const j={class:"row"},F={class:"col-12 col-md-6 q-pa-md"},G={key:1,style:{"max-height":"250px",overflow:"auto"},class:"bg-black text-light-green-13"},N={class:"col-12 col-md-6 q-pa-md"},J={key:1,style:{"max-height":"250px",overflow:"auto"},class:"bg-black text-light-green-13"},$={class:"col-12 col-md-6 q-pa-md"},z={key:1,style:{"max-height":"250px",overflow:"auto"},class:"bg-black text-light-green-13"},V={class:"col-12 col-md-6 q-pa-md"},D={key:1,style:{overflow:"auto"},class:"bg-black text-red"},ae=C({__name:"use-axios",setup(K){const{t:b}=L(),{setTitle:w}=P();w(`Use axios | ${b("app.name")}`);const{callAxios:r}=R(),g=o(null),f=o(!1),y=o(null),h=o(!1),k=o(null),_=o(!1),x=o(),v=o(!1),A=async()=>{f.value=!0,g.value=await r({API:"/api/permission?page=0&size=10&sort=code,asc",method:"GET"}),f.value=!1},E=async()=>{h.value=!0,y.value=await r({API:"/api/permission/findAllBackendPermission",method:"GET"}),h.value=!1},B=async()=>{_.value=!0,k.value=await r({API:"/api/permission/1",method:"GET"}),_.value=!1},I=async()=>{v.value=!0,r({API:"/api/permission/notfound_url",method:"GET"}).then(l=>{console.log("use-axios > fetch OK",l)}).catch(l=>{x.value=JSON.stringify(l),console.warn("use-axios > fetchError > catch",l)}).finally(()=>{console.log("use-axios > fetchError > finally"),v.value=!1})};return(l,M)=>(t(),n(S,null,{default:s(()=>[e(c,{title:"useAxios"},{default:s(()=>[e(i,null,{default:s(()=>[e(T,{type:"is-warning",icon:q(O),message:"You need to work with your API, you can use my Java Springboot REST API from the link https://github.com/bekaku/java-spring-boot-starter",closeable:!1},null,8,["icon"]),a("div",j,[a("div",F,[e(c,{flat:""},{default:s(()=>[e(i,{class:"q-gutter-y-md"},{default:s(()=>[e(p,{outline:"",label:"Fetch response API",onClick:A}),f.value?(t(),n(m,{key:0,"show-header":"",items:5})):(t(),u("div",G,[a("pre",null,"                                "+d(g.value)+`
                            `,1)]))]),_:1})]),_:1})]),a("div",N,[e(c,{flat:""},{default:s(()=>[e(i,{class:"q-gutter-y-md"},{default:s(()=>[e(p,{outline:"",label:"Fetch response LIST",onClick:E}),h.value?(t(),n(m,{key:0,"show-header":"",items:5})):(t(),u("div",J,[a("pre",null,"                                "+d(y.value)+`
                            `,1)]))]),_:1})]),_:1})]),a("div",$,[e(c,{flat:""},{default:s(()=>[e(i,{class:"q-gutter-y-md"},{default:s(()=>[e(p,{outline:"",label:"Fetch response Object",onClick:B}),_.value?(t(),n(m,{key:0,"show-header":"",items:5})):(t(),u("div",z,[a("pre",null,"                                "+d(k.value)+`
                            `,1)]))]),_:1})]),_:1})]),a("div",V,[e(c,{flat:""},{default:s(()=>[e(i,{class:"q-gutter-y-md"},{default:s(()=>[e(p,{color:"negative",outline:"",label:"Fetch ERROR handling",onClick:I}),v.value?(t(),n(m,{key:0,"show-header":"",items:5})):(t(),u("div",D,[a("pre",null,"                                        "+d(JSON.stringify(x.value))+`
                                    `,1)]))]),_:1})]),_:1})])])]),_:1})]),_:1})]),_:1}))}});export{ae as default};
