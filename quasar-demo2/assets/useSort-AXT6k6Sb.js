import{u as x,a as y,r,D as E}from"./index-jqmU7M3e.js";const I=(e,c)=>{const{getQuery:u}=x(),{t:l}=y(),b=r([{value:"asc",label:l("sort.asc")},{value:"desc",label:l("sort.desc")}]),i=n=>{const t=u(n);return t?+t:0},s=(()=>{const n=u("sort");if(n){const t=n.split(",");if(t.length==2){const P=t[0],a=t[1];if(a=="asc"||a=="desc")return{column:P,mode:a}}}})(),m=i("page"),o=i("size"),g={column:s&&s.column?s.column:e&&e.column?e.column:void 0,mode:s&&s.mode?s.mode:e&&e.mode?e.mode:void 0},v={current:m!=null?m+1:1,itemsPerPage:o&&o<=50&&o>0?o:c||E,totalPages:0,totalElements:0,last:!1,perPageList:[{text:"5",value:5},{text:"10",value:10},{text:"15",value:15},{text:"20",value:20},{text:"50",value:50}]},d=r(Object.assign({},g)),p=r(Object.assign({},v));return{sortMode:b,sort:d,pages:p,resetSort:()=>{d.value=Object.assign({},g),p.value=Object.assign({},v)}}};export{I as u};
