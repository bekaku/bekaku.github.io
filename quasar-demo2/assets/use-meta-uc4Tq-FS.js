import{f as i,w as o,p as t,o as l,j as u,k as v,l as c}from"./index-BWIq0ofC.js";function p(a){{const e={active:!0};if(typeof a=="function"){const n=i(a);e.val=n.value,o(n,s=>{e.val=s,e.active===!0&&t()})}else e.val=a;c.push(e),t(),l(()=>{e.active=!0,t()}),u(()=>{e.active=!1,t()}),v(()=>{c.splice(c.indexOf(e),1),t()})}}export{p as u};
