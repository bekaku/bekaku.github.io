import{ai as Ye,co as ze,cp as ke,cq as Le,aj as Xe,ak as Ue,al as We,cr as Ee,cs as Je,r as B,c,ct as U,cu as w,cv as Ze,M as ye,cg as Ge,cw as Re,cx as el,cy as ll,an as tl,am as s,cz as ul,cA as nl,cB as al,bJ as Ce,a4 as ie,l as ol,ad as be,ae as il,u as sl,m as W,n as E,bX as rl,w as q,t as oe,X as ge,a5 as S,a0 as _e,bZ as dl,x as J,bY as cl,cC as qe,bW as vl,av as ml}from"./index-__cRNkUR.js";import{C as fl}from"./ClosePopup-BucMY_X5.js";import{B as hl}from"./BaseButton-DlZR7aHG.js";import{_ as kl}from"./BaseInput.vue_vue_type_script_setup_true_lang-CR4dWM_2.js";function yl(t,O){return t.hour!==null&&t.minute===null?"minute":"hour"}function bl(){const t=new Date;return{hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds(),millisecond:t.getMilliseconds()}}const gl=Ye({name:"QTime",props:{...Xe,...Le,...ke,modelValue:{required:!0,validator:t=>typeof t=="string"||t===null},mask:{...ke.mask,default:null},format24h:{type:Boolean,default:null},defaultDate:{type:String,validator:t=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t)},options:Function,hourOptions:Array,minuteOptions:Array,secondOptions:Array,withSeconds:Boolean,nowBtn:Boolean},emits:ze,setup(t,{slots:O,emit:Z}){const f=Ue(),{$q:b}=f.proxy,P=We(t,b),{tabindex:g,headerClass:H,getLocale:G,getCurrentDate:r}=Ee(t,b),_=Je(t),C=ul(_);let A,I;const se=B(null),F=c(()=>xe()),K=c(()=>G()),re=c(()=>Se()),T=U(t.modelValue,F.value,K.value,t.calendar,re.value),i=B(yl(T)),u=B(T),v=B(T.hour===null||T.hour<12),pe=c(()=>`q-time q-time--${t.landscape===!0?"landscape":"portrait"}`+(P.value===!0?" q-time--dark q-dark":"")+(t.disable===!0?" disabled":t.readonly===!0?" q-time--readonly":"")+(t.bordered===!0?" q-time--bordered":"")+(t.square===!0?" q-time--square no-border-radius":"")+(t.flat===!0?" q-time--flat no-shadow":"")),R=c(()=>{const e=u.value;return{hour:e.hour===null?"--":h.value===!0?w(e.hour):String(v.value===!0?e.hour===0?12:e.hour:e.hour>12?e.hour-12:e.hour),minute:e.minute===null?"--":w(e.minute),second:e.second===null?"--":w(e.second)}}),h=c(()=>t.format24h!==null?t.format24h:b.lang.date.format24h),we=c(()=>{const e=i.value==="hour",l=e===!0?12:60,n=u.value[i.value];let d=`rotate(${Math.round(n*(360/l))-180}deg) translateX(-50%)`;return e===!0&&h.value===!0&&u.value.hour>=12&&(d+=" scale(.7)"),{transform:d}}),de=c(()=>u.value.hour!==null),Me=c(()=>de.value===!0&&u.value.minute!==null),M=c(()=>t.hourOptions!==void 0?e=>t.hourOptions.includes(e):t.options!==void 0?e=>t.options(e,null,null):null),$=c(()=>t.minuteOptions!==void 0?e=>t.minuteOptions.includes(e):t.options!==void 0?e=>t.options(u.value.hour,e,null):null),N=c(()=>t.secondOptions!==void 0?e=>t.secondOptions.includes(e):t.options!==void 0?e=>t.options(u.value.hour,u.value.minute,e):null),y=c(()=>{if(M.value===null)return null;const e=Q(0,11,M.value),l=Q(12,11,M.value);return{am:e,pm:l,values:e.values.concat(l.values)}}),V=c(()=>$.value!==null?Q(0,59,$.value):null),D=c(()=>N.value!==null?Q(0,59,N.value):null),j=c(()=>{switch(i.value){case"hour":return y.value;case"minute":return V.value;case"second":return D.value}}),Ve=c(()=>{let e,l,n=0,o=1;const d=j.value!==null?j.value.values:void 0;i.value==="hour"?h.value===!0?(e=0,l=23):(e=0,l=11,v.value===!1&&(n=12)):(e=0,l=55,o=5);const k=[];for(let a=e,m=e;a<=l;a+=o,m++){const p=a+n,je=d?.includes(p)===!1,Qe=i.value==="hour"&&a===0?h.value===!0?"00":"12":a;k.push({val:p,index:m,disable:je,label:Qe})}return k}),De=c(()=>[[Ze,Be,void 0,{stop:!0,prevent:!0,mouse:!0}]]);ye(()=>t.modelValue,e=>{const l=U(e,F.value,K.value,t.calendar,re.value);(l.dateHash!==u.value.dateHash||l.timeHash!==u.value.timeHash)&&(u.value=l,l.hour===null?i.value="hour":v.value=l.hour<12)}),ye([F,K],()=>{Ge(()=>{ae()})});function ce(){const e={...r(),...bl()};ae(e),Object.assign(u.value,e),i.value="hour"}function Q(e,l,n){const o=Array.apply(null,{length:l+1}).map((d,k)=>{const a=k+e;return{index:a,val:n(a)===!0}}).filter(d=>d.val===!0).map(d=>d.index);return{min:o[0],max:o[o.length-1],values:o,threshold:l+1}}function ve(e,l,n){const o=Math.abs(e-l);return Math.min(o,n-o)}function ee(e,{min:l,max:n,values:o,threshold:d}){if(e===l)return l;if(e<l||e>n)return ve(e,l,d)<=ve(e,n,d)?l:n;const k=o.findIndex(p=>e<=p),a=o[k-1],m=o[k];return e-a<=m-e?a:m}function xe(){return t.calendar!=="persian"&&t.mask!==null?t.mask:`HH:mm${t.withSeconds===!0?":ss":""}`}function Se(){if(typeof t.defaultDate!="string"){const e=r(!0);return e.dateHash=Re(e),e}return U(t.defaultDate,"YYYY/MM/DD",void 0,t.calendar)}function le(){return nl(f)===!0||j.value!==null&&(j.value.values.length===0||i.value==="hour"&&h.value!==!0&&y.value[v.value===!0?"am":"pm"].values.length===0)}function te(){const e=se.value,{top:l,left:n,width:o}=e.getBoundingClientRect(),d=o/2;return{top:l+d,left:n+d,dist:d*.7}}function Be(e){if(le()!==!0){if(e.isFirst===!0){A=te(),I=Y(e.evt,A);return}I=Y(e.evt,A,I),e.isFinal===!0&&(A=!1,I=null,me())}}function me(){i.value==="hour"?i.value="minute":t.withSeconds&&i.value==="minute"&&(i.value="second")}function Y(e,l,n){const o=el(e),d=Math.abs(o.top-l.top),k=Math.sqrt(Math.pow(Math.abs(o.top-l.top),2)+Math.pow(Math.abs(o.left-l.left),2));let a,m=Math.asin(d/k)*(180/Math.PI);if(o.top<l.top?m=l.left<o.left?90-m:270+m:m=l.left<o.left?m+90:270-m,i.value==="hour"){if(a=m/30,y.value!==null){const p=h.value!==!0?v.value===!0:y.value.am.values.length!==0&&y.value.pm.values.length!==0?k>=l.dist:y.value.am.values.length!==0;a=ee(a+(p===!0?0:12),y.value[p===!0?"am":"pm"])}else a=Math.round(a),h.value===!0?k<l.dist?a<12&&(a+=12):a===12&&(a=0):v.value===!0&&a===12?a=0:v.value===!1&&a!==12&&(a+=12);h.value===!0&&(v.value=a<12)}else a=Math.round(m/6)%60,i.value==="minute"&&V.value!==null?a=ee(a,V.value):i.value==="second"&&D.value!==null&&(a=ee(a,D.value));return n!==a&&Te[i.value](a),a}const ue={hour(){i.value="hour"},minute(){i.value="minute"},second(){i.value="second"}};function Oe(e){e.keyCode===13&&fe()}function Pe(e){e.keyCode===13&&he()}function He(e){le()!==!0&&(b.platform.is.desktop!==!0&&Y(e,te()),me())}function Ae(e){le()!==!0&&Y(e,te())}function Ie(e){if(e.keyCode===13)i.value="hour";else if([37,39].includes(e.keyCode)){const l=e.keyCode===37?-1:1;if(y.value!==null){const n=h.value===!0?y.value.values:y.value[v.value===!0?"am":"pm"].values;if(n.length===0)return;if(u.value.hour===null)z(n[0]);else{const o=(n.length+n.indexOf(u.value.hour)+l)%n.length;z(n[o])}}else{const n=h.value===!0?24:12,o=h.value!==!0&&v.value===!1?12:0,d=u.value.hour===null?-l:u.value.hour;z(o+(24+d+l)%n)}}}function Fe(e){if(e.keyCode===13)i.value="minute";else if([37,39].includes(e.keyCode)){const l=e.keyCode===37?-1:1;if(V.value!==null){const n=V.value.values;if(n.length===0)return;if(u.value.minute===null)L(n[0]);else{const o=(n.length+n.indexOf(u.value.minute)+l)%n.length;L(n[o])}}else{const n=u.value.minute===null?-l:u.value.minute;L((60+n+l)%60)}}}function Ke(e){if(e.keyCode===13)i.value="second";else if([37,39].includes(e.keyCode)){const l=e.keyCode===37?-1:1;if(D.value!==null){const n=D.value.values;if(n.length===0)return;if(u.value.seconds===null)X(n[0]);else{const o=(n.length+n.indexOf(u.value.second)+l)%n.length;X(n[o])}}else{const n=u.value.second===null?-l:u.value.second;X((60+n+l)%60)}}}function z(e){u.value.hour!==e&&(u.value.hour=e,x())}function L(e){u.value.minute!==e&&(u.value.minute=e,x())}function X(e){u.value.second!==e&&(u.value.second=e,x())}const Te={hour:z,minute:L,second:X};function fe(){v.value===!1&&(v.value=!0,u.value.hour!==null&&(u.value.hour-=12,x()))}function he(){v.value===!0&&(v.value=!1,u.value.hour!==null&&(u.value.hour+=12,x()))}function ne(e){const l=t.modelValue;i.value!==e&&l!==void 0&&l!==null&&l!==""&&typeof l!="string"&&(i.value=e)}function x(){if(M.value!==null&&M.value(u.value.hour)!==!0){u.value=U(),ne("hour");return}if($.value!==null&&$.value(u.value.minute)!==!0){u.value.minute=null,u.value.second=null,ne("minute");return}if(t.withSeconds===!0&&N.value!==null&&N.value(u.value.second)!==!0){u.value.second=null,ne("second");return}u.value.hour===null||u.value.minute===null||t.withSeconds===!0&&u.value.second===null||ae()}function ae(e){const l=Object.assign({...u.value},e),n=t.calendar==="persian"?w(l.hour)+":"+w(l.minute)+(t.withSeconds===!0?":"+w(l.second):""):ll(new Date(l.year,l.month===null?null:l.month-1,l.day,l.hour,l.minute,l.second,l.millisecond),F.value,K.value,l.year,l.timezoneOffset);l.changed=n!==t.modelValue,Z("update:modelValue",n,l)}function $e(){const e=[s("div",{class:"q-time__link "+(i.value==="hour"?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onClick:ue.hour,onKeyup:Ie},R.value.hour),s("div",":"),s("div",de.value===!0?{class:"q-time__link "+(i.value==="minute"?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onKeyup:Fe,onClick:ue.minute}:{class:"q-time__link"},R.value.minute)];t.withSeconds===!0&&e.push(s("div",":"),s("div",Me.value===!0?{class:"q-time__link "+(i.value==="second"?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onKeyup:Ke,onClick:ue.second}:{class:"q-time__link"},R.value.second));const l=[s("div",{class:"q-time__header-label row items-center no-wrap",dir:"ltr"},e)];return h.value===!1&&l.push(s("div",{class:"q-time__header-ampm column items-between no-wrap"},[s("div",{class:"q-time__link "+(v.value===!0?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onClick:fe,onKeyup:Oe},"AM"),s("div",{class:"q-time__link "+(v.value!==!0?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onClick:he,onKeyup:Pe},"PM")])),s("div",{class:"q-time__header flex flex-center no-wrap "+H.value},l)}function Ne(){const e=u.value[i.value];return s("div",{class:"q-time__content col relative-position"},[s(al,{name:"q-transition--scale"},()=>s("div",{key:"clock"+i.value,class:"q-time__container-parent absolute-full"},[s("div",{ref:se,class:"q-time__container-child fit overflow-hidden"},[Ce(s("div",{class:"q-time__clock cursor-pointer non-selectable",onClick:He,onMousedown:Ae},[s("div",{class:"q-time__clock-circle fit"},[s("div",{class:"q-time__clock-pointer"+(u.value[i.value]===null?" hidden":t.color!==void 0?` text-${t.color}`:""),style:we.value}),Ve.value.map(l=>s("div",{class:`q-time__clock-position row flex-center q-time__clock-pos-${l.index}`+(l.val===e?" q-time__clock-position--active "+H.value:l.disable===!0?" q-time__clock-position--disable":"")},[s("span",l.label)]))])]),De.value)])])),t.nowBtn===!0?s(ie,{class:"q-time__now-button absolute",icon:b.iconSet.datetime.now,unelevated:!0,size:"sm",round:!0,color:t.color,textColor:t.textColor,tabindex:g.value,onClick:ce}):null])}return f.proxy.setNow=ce,()=>{const e=[Ne()],l=tl(O.default);return l!==void 0&&e.push(s("div",{class:"q-time__actions"},l)),t.name!==void 0&&t.disable!==!0&&C(e,"push"),s("div",{class:pe.value,tabindex:-1},[$e(),s("div",{class:"q-time__main col overflow-auto"},e)])}}}),_l={class:"row items-center justify-end"},ql={class:"text-negative"},Cl={class:"self-center full-width no-outline",tabindex:"0"},Dl=ol({__name:"BaseTimePicker",props:be({label:{},dense:{type:Boolean,default:!0},disable:{type:Boolean,default:!1},required:{type:Boolean,default:!1},color:{},editMode:{type:Boolean,default:!0}},{modelValue:{},modelModifiers:{}}),emits:be(["on-update"],["update:modelValue"]),setup(t,{emit:O}){const Z=O,f=il(t,"modelValue"),b=B(null),{t:P}=sl(),g=()=>{f.value=""},H=()=>{b.value&&b.value.hide(),console.log("onClosePicker")},G=r=>{Z("on-update",r)};return(r,_)=>r.editMode?(E(),W(kl,{key:0,modelValue:f.value,"onUpdate:modelValue":_[2]||(_[2]=C=>f.value=C),required:r.required,label:r.label,disable:r.disable,outlined:"",dense:"",mask:"time",rules:["time"]},rl({append:q(()=>[J(hl,{icon:S(qe),flat:"",dense:"",class:"cursor-pointer"},{default:q(()=>[r.editMode?(E(),W(cl,{key:0,ref_key:"timeProxy",ref:b,"transition-show":"scale","transition-hide":"scale",onHide:H},{default:q(()=>[J(gl,{modelValue:f.value,"onUpdate:modelValue":[_[0]||(_[0]=C=>f.value=C),_[1]||(_[1]=C=>G(C))]},{default:q(()=>[oe("div",_l,[Ce(J(ie,{label:S(P)("base.close"),color:"primary",flat:""},null,8,["label"]),[[fl]])])]),_:1},8,["modelValue"])]),_:1},512)):_e("",!0)]),_:1},8,["icon"])]),after:q(()=>[f.value&&r.editMode?(E(),W(ie,{key:0,flat:"",round:"",icon:S(dl),onClick:g},null,8,["icon"])):_e("",!0)]),_:2},[r.required&&!f.value&&r.editMode&&!r.disable?{name:"hint",fn:q(()=>[oe("span",ql,ge(S(P)("error.validateRequireChoose")),1)]),key:"0"}:void 0]),1032,["modelValue","required","label","disable"])):(E(),W(vl,{key:1,outlined:r.editMode,borderless:!r.editMode,"bottom-slots":"",label:r.label,"stack-label":"",dense:r.dense,disable:r.disable},{prepend:q(()=>[J(ml,{name:S(qe),color:r.color},null,8,["name","color"])]),control:q(()=>[oe("div",Cl,ge(f.value),1)]),_:1},8,["outlined","borderless","label","dense","disable"]))}});export{Dl as _};
