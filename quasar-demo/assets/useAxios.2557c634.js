import{aY as u,aZ as h,a_ as o,A as v,a$ as b,aQ as l,P as y,b0 as c}from"./index.1297aae9.js";import{u as A}from"./useBase.9460d773.js";import{u as L}from"./useLang.596523dd.js";var $=()=>{const{WeeToast:i,WeeLoader:s,isDevMode:m}=A(),{locale:n}=L(),r=y,d=t=>t?u(t)||h(t)?new Promise(e=>{e(null)}):new Promise(e=>{e(t)}):new Promise(e=>{e(null)}),f=t=>{var e;s(!1),i(`<strong>${t.message}</strong><br> ${(e=t.errors)==null?void 0:e.join("<br>")}`,{multiLine:!0,html:!0,type:"negative",timeout:0,position:"bottom",caption:c(t.timestamp,n.value),actions:[{icon:l,color:"white"}]})},g=t=>{!t.message||(s(!1),i(t.message,{multiLine:!0,html:!0,type:t.status=="OK"||t.status=="CREATED"?"positive":"negative",timeout:t.status=="OK"||t.status=="CREATED"?3*1e3:10*1e3,position:"bottom",caption:c(t.timestamp,n.value),actions:[{icon:l,color:"white"}]}))};return{callAxios:t=>new Promise((e,p)=>{o.defaults.headers["Accept-Language"]=n.value,o.defaults.headers.Authorization=`Bearer ${r.get(v)}`,t.baseURL?o.defaults.baseURL=t.baseURL:o.defaults.baseURL="https://jsonplaceholder.typicode.com",t.contentType?o.defaults.headers["Content-Type"]=t.contentType:o.defaults.headers["Content-Type"]="application/json",m()&&console.log(`api ${o.defaults.baseURL}${t.API}`),o({method:t.method,url:t.API,data:t.body?t.body:void 0}).then(a=>{a.data&&(u(a.data)?f(a.data):b(a.data)&&g(a.data)),e(a.data)}).catch(a=>{p(a.message),s(!1),i(`<strong>${a.code}</strong><br> ${a.message}`,{multiLine:!0,html:!0,type:"negative",color:"white",textColor:"negative",timeout:10*1e3,position:"bottom",actions:[{icon:l,color:"negative"}]})})}),validateServerResponse:d}};export{$ as u};