import{l as C,r as p,U as L,R as q,o as S,bj as R,m as n,n as h,Z as A,w as r,X as f,W as E,u as O,cZ as V,e9 as $,x as a,cB as k,az as D,t as s,a0 as o}from"./index-D_to5wmt.js";import{u as F}from"./useAppMeta-B2j8xE5P.js";import{B as y}from"./BaseCard-BeCehtGl.js";import{_ as U}from"./BasePage.vue_vue_type_script_setup_true_lang-CemhdidO.js";import{_ as B,a as b}from"./ChartSparklines.vue_vue_type_script_setup_true_lang-DJNApvSk.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-meta-Bp6Eaay9.js";const T=C({__name:"ChartPie",props:{chartId:{default:"chart-pie-id"},height:{default:"auto"},width:{default:"auto"},labelunit:{},showLegend:{type:Boolean,default:!0},legendUseSeriesColors:{type:Boolean,default:!0},legendPosition:{default:"bottom"},type:{default:"pie"},mode:{default:"light"},palette:{default:"palette1"},series:{},colors:{},dark:{type:Boolean,default:!1},showDataLabels:{type:Boolean,default:!0},labelRotate:{},categories:{},strokestyle:{default:"smooth"},strokeWidth:{default:1}},setup(e){const u=p(e.series),c=p(),l=L("chartPieRef");q(()=>{c.value=void 0,u.value=[]}),S(()=>{t()});const t=()=>{e.series.length>0&&(c.value={chart:{id:e.chartId,background:"transparent",width:e.width,height:e.height,type:e.type,toolbar:{show:!1},animations:{enabled:!0,easing:"easein",speed:800}},theme:{mode:e.dark?"dark":e.mode,palette:e.palette},plotOptions:{},colors:e.colors&&e.colors.length>0?e.colors:void 0,labels:e.categories,stroke:{width:e.strokeWidth,curve:e.strokestyle},fill:{opacity:1,type:"gradient"},legend:{show:e.showLegend,position:e.legendPosition,horizontalAlign:"center",verticalAlign:"middle",labels:{colors:"#8E8E93",useSeriesColors:e.legendUseSeriesColors}},dataLabels:{enabled:e.showDataLabels},responsive:[]})};return(i,d)=>{const g=R("apexchart");return h(),n(A,null,{default:r(()=>[c.value?(h(),n(g,E({key:0},i.$attrs,{ref_key:"chartPieRef",ref:l,height:i.height,type:i.type,options:c.value,series:u.value}),null,16,["height","type","options","series"])):f("",!0)]),_:1})}}}),M=C({__name:"ChartRadar",props:{chartId:{default:"chart-radar-id"},height:{default:"350"},width:{default:"auto"},labelunit:{},showLegend:{type:Boolean,default:!0},legendUseSeriesColors:{type:Boolean},legendPosition:{},mode:{default:"light"},palette:{default:"palette1"},series:{},colors:{},showDataLabels:{type:Boolean,default:!1},labelRotate:{},categories:{},yaxisShow:{type:Boolean,default:!1},yaxisTickamount:{default:5},xaxisTickamount:{default:0},gridPadding:{default:()=>({top:0,right:0,bottom:0,left:0})},yaxisMax:{},yaxisMin:{},markers:{default:0},strokeWidth:{default:2},gridColors:{},opacity:{default:.2},dark:{type:Boolean,default:!1}},setup(e){const u=p(e.series),c=p(),l=L("chartRadarRef");q(()=>{c.value=void 0,u.value=[]}),S(()=>{t()});const t=()=>{e.series.length>0&&(c.value={chart:{id:e.chartId,background:"transparent",width:e.width,height:e.height,type:"radar",parentHeightOffset:0,toolbar:{show:!1}},theme:{mode:e.dark?"dark":e.mode,palette:e.palette},plotOptions:{radar:{polygons:{fill:{colors:e.gridColors}}}},colors:e.colors&&e.colors.length>0?e.colors:void 0,xaxis:{labels:{rotate:e.labelRotate},categories:e.categories,tickAmount:e.xaxisTickamount>0?e.xaxisTickamount:void 0},yaxis:{show:e.yaxisShow,tickAmount:e.yaxisTickamount,max:e.yaxisMax,min:e.yaxisMin},dataLabels:{enabled:e.showDataLabels},stroke:{width:e.strokeWidth},fill:{opacity:e.opacity},markers:{size:e.markers},legend:{show:e.showLegend},grid:{padding:e.gridPadding}})};return(i,d)=>{const g=R("apexchart");return h(),n(A,null,{default:r(()=>[c.value?(h(),n(g,E({key:0},i.$attrs,{ref_key:"chartRadarRef",ref:l,height:i.height,type:"radar",options:c.value,series:u.value}),null,16,["height","options","series"])):f("",!0)]),_:1})}}}),x=C({__name:"ChartRadial",props:{chartId:{default:"chart-radial-id"},height:{default:"auto"},width:{default:"100%"},showLegend:{type:Boolean,default:!0},legendUseSeriesColors:{type:Boolean,default:!0},legendOffsetX:{default:0},legendOffsetY:{default:0},legendFloating:{type:Boolean,default:!1},showDataLabels:{type:Boolean,default:!0},showDataLabelsName:{type:Boolean,default:!0},showDataLabelsValue:{type:Boolean,default:!0},dataLabelsSize:{default:"14px"},dataValueSize:{default:"18px"},dataLabelsValueOfsetY:{default:0},legendPosition:{default:"bottom"},labelunit:{},stokeLineCap:{default:"round"},fillType:{default:"gradient"},endAngle:{default:360},startAngle:{default:0},mode:{default:"light"},palette:{default:"palette1"},series:{},colors:{},categories:{},gridPadding:{default:()=>({top:0,right:0,bottom:0,left:0})},semi:{type:Boolean,default:!1},hollowBg:{type:Boolean,default:!0},hollowSize:{default:"55%"},valUnit:{},trackBackgroud:{default:"#f0f0f0"},trackBackgroudDark:{default:"#383a42"},dark:{type:Boolean,default:!1}},setup(e){const u=p(e.series),c=p(),l=L("chartRadialRef");q(()=>{c.value=void 0,u.value=[]}),S(()=>{t()});const t=()=>{e.series.length>0&&(c.value={chart:{id:e.chartId,background:"transparent",width:e.width,height:e.height,type:"radialBar",toolbar:{show:!1},animations:{enabled:!0,easing:"easein",speed:800}},theme:{mode:e.dark?"dark":e.mode,palette:e.palette},plotOptions:{radialBar:{offsetY:0,startAngle:e.startAngle,endAngle:e.endAngle,hollow:{margin:0,size:e.hollowSize,background:e.mode==="dark"||!e.hollowBg||e.semi?"transparent":"#fff",position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:3,opacity:.15}},track:{background:e.dark?e.trackBackgroudDark:e.trackBackgroud,strokeWidth:"100%",margin:2,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{show:e.showDataLabels,name:{offsetY:e.semi?-30:0,show:e.showDataLabelsName,fontSize:e.dataLabelsSize,fontWeight:400},value:{show:e.showDataLabelsValue,offsetY:e.dataLabelsValueOfsetY>0?e.dataLabelsValueOfsetY:e.semi?-20:5,formatter(i){return i+(e.valUnit||"")},fontSize:e.dataValueSize}}}},colors:e.colors&&e.colors.length>0?e.colors:void 0,stroke:{lineCap:e.stokeLineCap},fill:{type:e.fillType,gradient:{shade:"light",type:"horizontal",shadeIntensity:.5,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},labels:e.categories,legend:{show:e.showLegend,floating:e.legendFloating,fontSize:"16px",offsetX:e.legendOffsetX,offsetY:e.legendOffsetY,position:e.legendPosition,horizontalAlign:"center",verticalAlign:"middle",labels:{colors:"#8E8E93",useSeriesColors:e.legendUseSeriesColors}},grid:{padding:e.gridPadding},tooltip:{y:{formatter(i){return i}}},responsive:[]})};return(i,d)=>{const g=R("apexchart");return h(),n(A,null,{default:r(()=>[c.value?(h(),n(g,E({key:0},i.$attrs,{ref_key:"chartRadialRef",ref:l,height:i.height,type:"radialBar",options:c.value,series:u.value}),null,16,["height","options","series"])):f("",!0)]),_:1})}}}),I={class:"row"},J={class:"col-12 col-md-3 q-pa-sm"},N={class:"col-12 col-md-3 q-pa-sm"},W={class:"col-12 col-md-3 q-pa-sm"},X={class:"col-12 col-md-3 q-pa-sm"},Q={class:"row"},Z={class:"col-12 col-md-3 q-pa-sm"},j={class:"col-12 col-md-3 q-pa-sm"},H={class:"col-12 col-md-3 q-pa-sm"},G={class:"col-12 col-md-3 q-pa-sm"},K={class:"row"},_={class:"col-12 col-md-6"},ee={class:"col-12 col-md-6"},ae={class:"row"},te={class:"col-12 col-md-6 q-pa-sm"},se={class:"col-12 col-md-6 q-pa-sm"},le={class:"row"},ie={class:"col-12 col-md-6 q-pa-sm"},re={class:"col-12 col-md-6 q-pa-sm"},oe={class:"row"},de={class:"col-12 col-md-6"},ce={class:"col-12 col-md-6"},ne={class:"row"},he={class:"col-12 col-md-6"},ue={class:"col-12 col-md-6"},ge=C({__name:"charts",setup(e){const{t:u}=O(),{setTitle:c}=F();c(`Charts | ${u("app.name")}`);const{isDark:l}=V(),t=$({radial:!1,sparkline:!1,radar:!1,area:!1,line:!1,bar:!1,pine:!1});S(async()=>{await i(1),await i(2),await i(3),await i(4),await i(5),await i(6),await i(7)});const i=P=>new Promise(z=>{setTimeout(()=>{switch(P){case 1:t.radial=!t.radial;break;case 2:t.sparkline=!t.sparkline;break;case 3:t.radar=!t.radar;break;case 4:t.area=!t.area;break;case 5:t.line=!t.line;break;case 6:t.bar=!t.bar;break;case 7:t.pine=!t.pine}z(!0)},100)}),d={categories:["January","February","March","April","May","June","July","August","September","October","November","December"],series:[{name:"Access",data:[32,26,57,21,8,6,14,39,10,7,9,25]},{name:"Post",data:[10,8,30,21,27,10,9,40,20,10,50,12]},{name:"Repost",data:[8,10,15,21,4,15,10,50,8,0,9,25]},{name:"Comment",data:[1,0,2,4,0,0,1,2,0,0,1,11]},{name:"Feel",data:[20,10,40,16,0,5,19,1,5,0,1,4]},{name:"Share",data:[1,10,11,21,17,36,51,30,15,24,56,8]},{name:"Read",data:[75,38,25,70,3,2,45,35,9,6,11,24]},{name:"Learn",data:[22,0,3,2,45,11,31,20,22,10,12,21]},{name:"Reward",data:[30,1,13,1,0,0,3,0,3,0,20,15]}]},g={categories:["January","February","March","April","May","June"],series:[{name:"Access",data:[80,50,30,40,100,20]},{name:"Post",data:[20,30,40,80,20,80]},{name:"Repost",data:[44,76,78,13,43,10]}]},m={categories:["AAPL"],series:[{name:"AAPL",data:[1382.54,1285.23,1688.76,1090.12,1307.65,1285.98,1309.34,1311.56,1393.24,1300.87,1188.98,1091.45,1193.67,1335.23,1302.87,1370.98,1103.34,1295.78,817.34,1395.87]}]},w=[44,55,41,37,22,43,21],v=["Jan","Feb","Mar","Apr","May","Jun","Jul"];return(P,z)=>(h(),n(U,null,{default:r(()=>[a(k,null,{default:r(()=>[t.radial?(h(),n(y,{key:0,class:"q-my-md",title:"Radial"},{default:r(()=>[a(D,null,{default:r(()=>[s("div",I,[s("div",J,[a(x,{"chart-id":"radial-1",series:w.slice(0,3),categories:v.slice(0,3),"legend-position":"right",dark:o(l)},null,8,["series","categories","dark"])]),s("div",N,[a(x,{"chart-id":"radial-2",height:"250","val-unit":"%",colors:["#8D6E63"],series:w.slice(0,1),categories:v.slice(0,1),dark:o(l)},null,8,["series","categories","dark"])]),s("div",W,[a(x,{"chart-id":"radial-3",semi:"","stoke-line-cap":"square","start-angle":-90,"end-angle":90,colors:["#647C64"],series:w.slice(1,2),categories:v.slice(1,2),"show-legend":!1},null,8,["series","categories"])]),s("div",X,[a(x,{"chart-id":"radial-4","val-unit":"%",colors:["#8E8CD8"],"start-angle":-180,"end-angle":360,"show-legend":!1,"grid-padding":{bottom:-100},series:w.slice(2,3),categories:v.slice(2,3),dark:o(l)},null,8,["series","categories","dark"])])])]),_:1})]),_:1})):f("",!0)]),_:1}),a(k,null,{default:r(()=>[t.sparkline?(h(),n(y,{key:0,class:"q-my-md",title:"Sparklines"},{default:r(()=>[a(D,null,{default:r(()=>[s("div",Q,[s("div",Z,[a(B,{height:"100","chart-id":"sparkline-area","stroke-width":1,strokestyle:"smooth",colors:["#9E9E9E"],series:m.series,categories:m.categories,dark:o(l)},null,8,["series","categories","dark"])]),s("div",j,[a(B,{height:"100","chart-id":"sparkline-area-2","stroke-width":1,strokestyle:"straight",colors:["#607D8B"],series:m.series,categories:m.categories,dark:o(l)},null,8,["series","categories","dark"])]),s("div",H,[a(B,{height:"100","chart-id":"sparkline-line",type:"line","stroke-width":3,colors:["#607D8B"],series:m.series,categories:m.categories,dark:o(l)},null,8,["series","categories","dark"])]),s("div",G,[a(B,{height:"100","chart-id":"sparkline-bar",type:"bar","stroke-width":1,colors:["#8D6E63"],series:m.series,categories:m.categories,dark:o(l)},null,8,["series","categories","dark"])])])]),_:1})]),_:1})):f("",!0)]),_:1}),a(k,null,{default:r(()=>[t.radar?(h(),n(y,{key:0,class:"q-my-md",title:"Radar"},{default:r(()=>[a(D,null,{default:r(()=>[s("div",K,[s("div",_,[a(M,{"chart-id":"chart-radar",height:"350",markers:3,colors:["#8D6E63","#9E9E9E","#607D8B"],series:g.series,categories:g.categories},null,8,["series","categories"])]),s("div",ee,[a(M,{"chart-id":"chart-radar-2",height:"350",markers:0,"show-data-labels":"",colors:["#4E342E"],"grid-colors":o(l)?["#383a42","#717886"]:["#f8f8f8","#fff"],series:g.series.slice(0,1),categories:g.categories,dark:o(l)},null,8,["grid-colors","series","categories","dark"])])])]),_:1})]),_:1})):f("",!0)]),_:1}),a(k,null,{default:r(()=>[t.area?(h(),n(y,{key:0,title:"Area"},{default:r(()=>[s("div",ae,[s("div",te,[a(b,{class:"q-my-sm","chart-id":"chart-area",height:"350",palette:"palette1",type:"area","stroke-width":2,colors:["#8D6E63","#9E9E9E","#607D8B"],series:d.series.slice(0,3),categories:d.categories,strokestyle:"smooth","label-rotate":-45,"show-toolbar":"",zoom:"",dark:o(l)},null,8,["series","categories","dark"])]),s("div",se,[a(b,{class:"q-my-sm","chart-id":"chart-area-2",height:"350",type:"area","stroke-width":2,colors:["#8D6E63","#9E9E9E","#607D8B"],series:d.series.slice(0,3),categories:d.categories,strokestyle:"straight","xaxis-tickamount":3,dark:o(l)},null,8,["series","categories","dark"])])])]),_:1})):f("",!0)]),_:1}),a(k,null,{default:r(()=>[t.line?(h(),n(y,{key:0,class:"q-my-md",title:"Line"},{default:r(()=>[s("div",le,[s("div",ie,[a(b,{class:"q-my-sm","chart-id":"chart-line",height:"350",palette:"palette1",type:"line",series:d.series.slice(6,9),categories:d.categories,strokestyle:"straight","label-rotate":-45,"stroke-width":3,dark:o(l)},null,8,["series","categories","dark"])]),s("div",re,[a(b,{class:"q-my-sm","chart-id":"chart-line-2",height:"350",palette:"palette8",type:"line",series:d.series.slice(6,9),categories:d.categories,strokestyle:"smooth","xaxis-tickamount":3,"stroke-width":3,dark:o(l)},null,8,["series","categories","dark"])])])]),_:1})):f("",!0)]),_:1}),a(k,null,{default:r(()=>[t.bar?(h(),n(y,{key:0,class:"q-my-md",title:"Bar"},{default:r(()=>[a(b,{class:"q-my-sm","chart-id":"chart-bar",height:"350",palette:"palette3",type:"bar",colors:["#64748B","#94A3B8","#CBD5E1"],series:d.series.slice(3,6),categories:d.categories,strokestyle:"smooth","label-rotate":-45,dark:o(l)},null,8,["series","categories","dark"]),s("div",oe,[s("div",de,[a(b,{class:"q-my-sm","chart-id":"chart-bar-simple",height:"350",palette:"palette3",type:"bar",opacity:.3,series:d.series.slice(0,1),categories:d.categories,strokestyle:"smooth","label-rotate":-90,dark:o(l)},null,8,["series","categories","dark"])]),s("div",ce,[a(b,{class:"q-my-sm","chart-id":"chart-bar-horizontal",height:"350",palette:"palette4",type:"bar",horizontal:"",series:d.series.slice(0,1),categories:d.categories,strokestyle:"smooth",dark:o(l)},null,8,["series","categories","dark"])])])]),_:1})):f("",!0)]),_:1}),a(k,null,{default:r(()=>[t.pine?(h(),n(y,{key:0,class:"q-my-md",title:"Pie/Donuts"},{default:r(()=>[s("div",ne,[s("div",he,[a(T,{class:"q-my-sm","chart-id":"chart-pine",height:"350",palette:"palette1",type:"pie",series:w,categories:v,dark:o(l)},null,8,["dark"])]),s("div",ue,[a(T,{class:"q-my-sm","chart-id":"chart-donut",height:"350",palette:"palette5",type:"donut",colors:["#FFB900","#E74856","#0078D7","#0099BC","#7A7574","#00CC6A","#8E8CD8"],series:w,categories:v,dark:o(l)},null,8,["dark"])])])]),_:1})):f("",!0)]),_:1})]),_:1}))}}),pe=Y(ge,[["__scopeId","data-v-560dc81f"]]);export{pe as default};
