import{l as A,V as i,n as s,ah as v,aZ as b,Z as h,x as e,w as a,m as g,a0 as B,aY as x,as as k,at as u,au as m,t as o,H as M,r as y,bH as z,o as P,dk as E,bq as F,dl as U,dm as J,a5 as r,dn as O,aA as N,d8 as H,dp as j,dq as W,W as n,X as d,av as Y,ar as D,dr as Z,a2 as I,cC as G,be as K}from"./index-C7ops4Xx.js";import{u as X}from"./use-meta-BoZp1IKx.js";import{B as ee}from"./BaseAvatar-CiSapBuH.js";import{B as ae}from"./BaseButton-C-BXMEin.js";import{B as f,a as te}from"./BaseCard-J5Ngfw26.js";import{_ as le}from"./BaseDatePicker.vue_vue_type_script_setup_true_lang-PFEv2PWM.js";import{_ as se}from"./BaseLink.vue_vue_type_script_setup_true_lang-B5fE7rhR.js";import{_ as oe}from"./BasePage.vue_vue_type_script_setup_true_lang-D4SVBa1v.js";import{B as re}from"./BaseTabs-BIPBsNbx.js";import{_ as ie,a as ne}from"./ChartSparklines.vue_vue_type_script_setup_true_lang-DQjNJm4t.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FileManagerService-BHSiTww-.js";import"./useAxios-CqGq8IzB.js";import"./ClosePopup-CLsto8Iq.js";const ue=A({__name:"SkeletonCard",props:{vertical:{type:Boolean,default:!1},flat:{type:Boolean,default:!0},height:{default:"100px"},no:{default:1},textNumber:{default:0},col:{default:"col-12 col-md-12 q-pa-xs"},rowCss:{}},setup(Q){return(l,C)=>l.vertical?(s(!0),i(v,{key:1},b(l.no,_=>(s(),i("div",{key:_,class:h(["row",l.rowCss])},[o("div",{class:h(l.col)},[e(f,{flat:l.flat,bordered:!l.flat},{default:a(()=>[e(x,{height:l.height},null,8,["height"]),l.textNumber>0?(s(),g(k,{key:0},{default:a(()=>[e(u,null,{default:a(()=>[(s(!0),i(v,null,b(l.textNumber,w=>(s(),g(m,{key:w},{default:a(()=>[e(x,{type:"text",animation:"fade"})]),_:2},1024))),128))]),_:1})]),_:1})):B("",!0)]),_:1},8,["flat","bordered"])],2)],2))),128)):(s(),i("div",{key:0,class:h(["row",l.rowCss])},[(s(!0),i(v,null,b(l.no,_=>(s(),i("div",{key:_,class:h(l.col)},[e(f,{flat:l.flat,bordered:!l.flat},{default:a(()=>[e(x,{height:l.height},null,8,["height"]),l.textNumber>0?(s(),g(k,{key:0},{default:a(()=>[e(u,null,{default:a(()=>[(s(!0),i(v,null,b(l.textNumber,w=>(s(),g(m,{key:w},{default:a(()=>[e(x,{type:"text",animation:"fade"})]),_:2},1024))),128))]),_:1})]),_:1})):B("",!0)]),_:1},8,["flat","bordered"])],2))),128))],2))}}),ce={class:"row"},me={class:"row"},pe={class:"q-px-md"},fe={class:"row"},ve={class:"row"},be={class:"col-12 col-md-8 q-px-md"},he={class:"col-12 col-md-4 q-px-md"},ge=A({__name:"index",setup(Q){X({title:"Index Page"});const{isSmallScreen:l}=M(),C=y("2025-01-01"),_=y("2025-02-15"),w=y("overview"),{isDark:S}=z(),q=y(!1);P(()=>{setTimeout(()=>{q.value=!0},500)});const V=y([{label:"Total Revenue",value:"$45,231.89",description:"+20.1% from last month",icon:E},{label:"Subscriptions",value:"+2350",description:"+180.1% from last month",icon:F},{label:"Sales",value:"+12,234",description:"+19% from last month",icon:U},{label:"Active Now",value:"+573",description:"+201 since last hour",icon:J}]),T=y([{label:"Olivia Martin",value:"+$1,999.00",description:"olivia.martin@email.com",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png"},{label:"Jackson Lee",value:"+$39.00",description:"jackson.lee@email.com",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar3.png"},{label:"Isabella Nguyen",value:"+$299.00",description:"isabella.nguyen@email.com",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar4.png"},{label:"William Kim",value:"+$99.00",description:"will@email.com",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar5.png"},{label:"Sofia Davis",value:"+$39.00",description:"sofia.davis@email.com",avatar:"https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png"}]),$={categories:["January","February","March","April","May","June","July","August","September","October","November","December"],series:[{name:"Access",data:[32,26,57,21,8,6,14,39,10,7,9,25]},{name:"Post",data:[10,8,30,21,27,10,9,40,20,10,50,12]},{name:"Repost",data:[8,10,15,21,4,15,10,50,8,0,9,25]},{name:"Comment",data:[11,20,12,14,0,10,51,22,30,10,31,11]},{name:"Feel",data:[20,10,40,16,0,5,19,1,5,0,1,4]},{name:"Share",data:[1,10,11,21,17,36,51,30,15,24,56,8]},{name:"Read",data:[75,38,25,70,3,2,45,35,9,6,11,24]},{name:"Learn",data:[22,0,3,2,45,11,31,20,22,10,12,21]},{name:"Reward",data:[30,1,13,1,0,0,3,0,3,0,20,15]}]},R=[{label:"Revenue Status",description:"12.030",value:"27%",color:"#15803d",bg:"green-1",series:[{name:"status",data:[1e4,14e3,2e4,16e3,18e3,2e4,16e3,14500,18e3]}],categories:["status"]},{label:"Page View",description:"5592",value:"12%",color:"#f97316",bg:"orange-1",series:[{name:"view",data:[5e3,7500,9e3,8500,7e3,6e3,8e3,9500,7200]}],categories:["view"]},{label:"Bounce Rate",description:"55.56%",value:"22%",color:"#ef4444",bg:"red-1",series:[{name:"rate",data:[28e3,25e3,27e3,24e3,23e3,26e3,25e3,22e3,2e4]}],categories:["rate"]},{label:"Product Sale Rate",description:"12.56%",value:"17%",color:"#8b5cf6",bg:"purple-1",series:[{name:"sale",data:[15e3,12e3,18e3,22e3,14e3,11e3,25e3,2e4,17e3]}],categories:["sale"]}],L=[{label:"Social Feed",description:"Example Facebook feed clone",to:"/example/feed",icon:H},{label:"Chats",description:"Chat layout example",to:"/example/chats",icon:j},{label:"Charts",description:"Chart components Area, Bar, Line, Pie...",to:"/example/charts",icon:W}];return(_e,p)=>(s(),g(oe,{"scroll-event":"","show-to-top":""},{default:a(()=>[e(f,{title:"Dashboard",bordered:!1,flat:"","sub-title":"Top picks for you. Updated daily.",icon:r(O)},{default:a(()=>[e(N,null,{default:a(()=>[o("div",ce,[o("div",{class:h(["col-12 col-md-8",{"q-pr-md":!r(l)}])},[e(re,{modelValue:w.value,"onUpdate:modelValue":p[0]||(p[0]=t=>w.value=t),"full-width":r(l),items:[{label:"Overview",value:"overview"},{label:"Analytics",value:"analytics"},{label:"Reports",value:"reports"}],align:"left"},null,8,["modelValue","full-width"])],2),o("div",{class:h(["col-12 col-md-4",{"q-pt-md":r(l)}])},[e(le,{start:C.value,"onUpdate:start":p[1]||(p[1]=t=>C.value=t),end:_.value,"onUpdate:end":p[2]||(p[2]=t=>_.value=t),clearable:!1,"show-format-date":"",label:"Range",range:""},{after:a(()=>[e(ae,{label:"Download",dark:""})]),_:1},8,["start","end"])],2)])]),_:1}),o("div",me,[(s(),i(v,null,b(L,(t,c)=>o("div",{key:c,class:"col-12 col-md-4 q-px-md"},[e(f,{flat:"",class:"card-shade"},{default:a(()=>[e(N,null,{default:a(()=>[e(te,{icon:t.icon,title:t.label},{end:a(()=>[e(u,{side:""},{default:a(()=>[e(se,{to:t.to||"",color:"primary"},{default:a(()=>p[3]||(p[3]=[n(" Explore ")])),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["icon","title"]),n(" "+d(t.description),1)]),_:2},1024)]),_:2},1024)])),64))]),o("div",{class:h(["row",{"q-mb-md":r(l)}])},[(s(!0),i(v,null,b(V.value,(t,c)=>(s(),i("div",{key:c,class:h(["col-12 col-md-3",{"q-pa-md":!r(l),"q-px-md q-py-sm":r(l)}])},[e(f,{flat:!1,margin:!1},{default:a(()=>[e(k,null,{default:a(()=>[e(u,null,{default:a(()=>[e(m,{class:"text-subtitle1"},{default:a(()=>[n(d(t.label),1)]),_:2},1024),e(m,{class:"text-h5 text-weight-bold"},{default:a(()=>[n(d(t.value),1)]),_:2},1024),e(m,{caption:"",class:"text-caption"},{default:a(()=>[n(d(t.description),1)]),_:2},1024)]),_:2},1024),e(u,{side:"",top:""},{default:a(()=>[e(Y,{name:t.icon,size:"18px"},null,8,["name"])]),_:2},1024)]),_:2},1024)]),_:2},1024)],2))),128))],2),o("div",pe,[e(f,null,{default:a(()=>[o("div",fe,[(s(),i(v,null,b(R,(t,c)=>o("div",{key:c,class:"col-12 col-md-3",style:D({borderRight:!r(l)&&c<R.length-1?`1px solid ${r(S)?"var(--color-zinc-700)":"var(--color-zinc-200)"}`:"none"})},[e(k,null,{default:a(()=>[e(u,null,{default:a(()=>[e(m,null,{default:a(()=>[n(d(t.label),1)]),_:2},1024),e(m,null,{default:a(()=>[n(d(t.description)+" ",1),e(Z,{color:t.bg,style:D({color:t.color})},{default:a(()=>[n(d(t.value),1)]),_:2},1032,["color","style"])]),_:2},1024)]),_:2},1024),e(u,{side:""},{default:a(()=>[e(I,null,{default:a(()=>[e(ie,{style:{width:"155px"},height:"75","chart-id":`sparkline-area-${c}`,"stroke-width":1,strokestyle:"smooth",colors:[t.color],series:t.series,categories:t.categories,dark:r(S)},null,8,["chart-id","colors","series","categories","dark"])]),_:2},1024)]),_:2},1024)]),_:2},1024)],4)),64))])]),_:1})]),o("div",ve,[o("div",be,[e(f,{title:"Overview",flat:!1},{default:a(()=>[e(N,null,{default:a(()=>[q.value?B("",!0):(s(),g(ue,{key:0,height:"365px"})),e(G,null,{default:a(()=>[e(I,null,{default:a(()=>[q.value?(s(),g(ne,{key:0,class:"q-my-sm","chart-id":"chart-bar",height:"350",type:"bar",colors:["#64748B","#94A3B8","#CBD5E1"],series:$.series.slice(3,6),categories:$.categories,strokestyle:"smooth","label-rotate":r(l)?-45:0,"xaxis-tickamount":4,dark:r(S)},null,8,["series","categories","label-rotate","dark"])):B("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),o("div",he,[e(f,{title:"Recent Sales","sub-title":"You made 265 sales this month.",flat:!1,style:{"min-height":"480px"}},{default:a(()=>[e(K,null,{default:a(()=>[(s(!0),i(v,null,b(T.value,(t,c)=>(s(),g(k,{key:c},{default:a(()=>[e(u,{avatar:""},{default:a(()=>[e(ee,{src:t.avatar||"/images/no_picture_thumb.jpg",size:"40px"},null,8,["src"])]),_:2},1024),e(u,null,{default:a(()=>[e(m,null,{default:a(()=>[n(d(t.label),1)]),_:2},1024),e(m,{caption:""},{default:a(()=>[n(d(t.description),1)]),_:2},1024)]),_:2},1024),e(u,{side:"",top:"",class:"text-subtitle1 q-text-black text-weight-bold"},{default:a(()=>[n(d(t.value),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])])]),_:1},8,["icon"])]),_:1}))}}),Qe=de(ge,[["__scopeId","data-v-f15e7966"]]);export{Qe as default};
