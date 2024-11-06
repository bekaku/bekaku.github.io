import{s as Ye,t as Ee,d6 as We,d7 as fe,d8 as Ze,x as Ge,d9 as Je,da as Re,r as D,f as v,db as W,dc as M,dd as $e,w as he,bD as et,de as tt,df as lt,dg as at,y as nt,h as r,z as ut,dh as ot,di as it,dj as st,aq as ye,af as ue,d as be,aB as _e,aC as rt,a as pe,dk as dt,aH as ct,_ as qe,B as Z,C as G,aZ as vt,E as _,I as S,R as ne,N as mt,F as k,O as Ce,ag as ft,a_ as ht,ah as ke,b0 as _t,dl as kt,dm as gt,L as yt,M as ge,a7 as bt,a8 as pt,a9 as qt,aa as Ct,S as wt}from"./index-C1BRECWX.js";import xt from"./DatePicker-DZYvyoR8.js";import{C as Vt}from"./ClosePopup-D1nvKGL2.js";import{u as Mt}from"./useAppMeta-K1UR0RUG.js";import"./use-meta-J1hOGrFp.js";function Dt(l,c){return l.hour!==null&&l.minute===null?"minute":"hour"}function St(){const l=new Date;return{hour:l.getHours(),minute:l.getMinutes(),second:l.getSeconds(),millisecond:l.getMilliseconds()}}const Tt=Ye({name:"QTime",props:{...Ee,...We,...fe,modelValue:{required:!0,validator:l=>typeof l=="string"||l===null},mask:{...fe.mask,default:null},format24h:{type:Boolean,default:null},defaultDate:{type:String,validator:l=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(l)},options:Function,hourOptions:Array,minuteOptions:Array,secondOptions:Array,withSeconds:Boolean,nowBtn:Boolean},emits:Ze,setup(l,{slots:c,emit:b}){const s=ut(),{$q:g}=s.proxy,C=Ge(l,g),{tabindex:m,headerClass:x,getLocale:H,getCurrentDate:V}=Je(l,g),we=Re(l),xe=ot(we);let U,A;const oe=D(null),Q=v(()=>Pe()),I=v(()=>H()),ie=v(()=>Oe()),F=W(l.modelValue,Q.value,I.value,l.calendar,ie.value),i=D(Dt(F)),a=D(F),f=D(F.hour===null||F.hour<12),Ve=v(()=>`q-time q-time--${l.landscape===!0?"landscape":"portrait"}`+(C.value===!0?" q-time--dark q-dark":"")+(l.disable===!0?" disabled":l.readonly===!0?" q-time--readonly":"")+(l.bordered===!0?" q-time--bordered":"")+(l.square===!0?" q-time--square no-border-radius":"")+(l.flat===!0?" q-time--flat no-shadow":"")),J=v(()=>{const e=a.value;return{hour:e.hour===null?"--":y.value===!0?M(e.hour):String(f.value===!0?e.hour===0?12:e.hour:e.hour>12?e.hour-12:e.hour),minute:e.minute===null?"--":M(e.minute),second:e.second===null?"--":M(e.second)}}),y=v(()=>l.format24h!==null?l.format24h:g.lang.date.format24h),Me=v(()=>{const e=i.value==="hour",t=e===!0?12:60,n=a.value[i.value];let d=`rotate(${Math.round(n*(360/t))-180}deg) translateX(-50%)`;return e===!0&&y.value===!0&&a.value.hour>=12&&(d+=" scale(.7)"),{transform:d}}),se=v(()=>a.value.hour!==null),De=v(()=>se.value===!0&&a.value.minute!==null),T=v(()=>l.hourOptions!==void 0?e=>l.hourOptions.includes(e):l.options!==void 0?e=>l.options(e,null,null):null),K=v(()=>l.minuteOptions!==void 0?e=>l.minuteOptions.includes(e):l.options!==void 0?e=>l.options(a.value.hour,e,null):null),N=v(()=>l.secondOptions!==void 0?e=>l.secondOptions.includes(e):l.options!==void 0?e=>l.options(a.value.hour,a.value.minute,e):null),q=v(()=>{if(T.value===null)return null;const e=z(0,11,T.value),t=z(12,11,T.value);return{am:e,pm:t,values:e.values.concat(t.values)}}),P=v(()=>K.value!==null?z(0,59,K.value):null),O=v(()=>N.value!==null?z(0,59,N.value):null),j=v(()=>{switch(i.value){case"hour":return q.value;case"minute":return P.value;case"second":return O.value}}),Se=v(()=>{let e,t,n=0,o=1;const d=j.value!==null?j.value.values:void 0;i.value==="hour"?y.value===!0?(e=0,t=23):(e=0,t=11,f.value===!1&&(n=12)):(e=0,t=55,o=5);const p=[];for(let u=e,h=e;u<=t;u+=o,h++){const w=u+n,Le=d!==void 0&&d.includes(w)===!1,Xe=i.value==="hour"&&u===0?y.value===!0?"00":"12":u;p.push({val:w,index:h,disable:Le,label:Xe})}return p}),Te=v(()=>[[$e,Be,void 0,{stop:!0,prevent:!0,mouse:!0}]]);he(()=>l.modelValue,e=>{const t=W(e,Q.value,I.value,l.calendar,ie.value);(t.dateHash!==a.value.dateHash||t.timeHash!==a.value.timeHash)&&(a.value=t,t.hour===null?i.value="hour":f.value=t.hour<12)}),he([Q,I],()=>{et(()=>{ae()})});function re(){const e={...V(),...St()};ae(e),Object.assign(a.value,e),i.value="hour"}function z(e,t,n){const o=Array.apply(null,{length:t+1}).map((d,p)=>{const u=p+e;return{index:u,val:n(u)===!0}}).filter(d=>d.val===!0).map(d=>d.index);return{min:o[0],max:o[o.length-1],values:o,threshold:t+1}}function de(e,t,n){const o=Math.abs(e-t);return Math.min(o,n-o)}function R(e,{min:t,max:n,values:o,threshold:d}){if(e===t)return t;if(e<t||e>n)return de(e,t,d)<=de(e,n,d)?t:n;const p=o.findIndex(w=>e<=w),u=o[p-1],h=o[p];return e-u<=h-e?u:h}function Pe(){return l.calendar!=="persian"&&l.mask!==null?l.mask:`HH:mm${l.withSeconds===!0?":ss":""}`}function Oe(){if(typeof l.defaultDate!="string"){const e=V(!0);return e.dateHash=tt(e),e}return W(l.defaultDate,"YYYY/MM/DD",void 0,l.calendar)}function $(){return it(s)===!0||j.value!==null&&(j.value.values.length===0||i.value==="hour"&&y.value!==!0&&q.value[f.value===!0?"am":"pm"].values.length===0)}function ee(){const e=oe.value,{top:t,left:n,width:o}=e.getBoundingClientRect(),d=o/2;return{top:t+d,left:n+d,dist:d*.7}}function Be(e){if($()!==!0){if(e.isFirst===!0){U=ee(),A=L(e.evt,U);return}A=L(e.evt,U,A),e.isFinal===!0&&(U=!1,A=null,ce())}}function ce(){i.value==="hour"?i.value="minute":l.withSeconds&&i.value==="minute"&&(i.value="second")}function L(e,t,n){const o=lt(e),d=Math.abs(o.top-t.top),p=Math.sqrt(Math.pow(Math.abs(o.top-t.top),2)+Math.pow(Math.abs(o.left-t.left),2));let u,h=Math.asin(d/p)*(180/Math.PI);if(o.top<t.top?h=t.left<o.left?90-h:270+h:h=t.left<o.left?h+90:270-h,i.value==="hour"){if(u=h/30,q.value!==null){const w=y.value!==!0?f.value===!0:q.value.am.values.length!==0&&q.value.pm.values.length!==0?p>=t.dist:q.value.am.values.length!==0;u=R(u+(w===!0?0:12),q.value[w===!0?"am":"pm"])}else u=Math.round(u),y.value===!0?p<t.dist?u<12&&(u+=12):u===12&&(u=0):f.value===!0&&u===12?u=0:f.value===!1&&u!==12&&(u+=12);y.value===!0&&(f.value=u<12)}else u=Math.round(h/6)%60,i.value==="minute"&&P.value!==null?u=R(u,P.value):i.value==="second"&&O.value!==null&&(u=R(u,O.value));return n!==u&&Ne[i.value](u),u}const te={hour(){i.value="hour"},minute(){i.value="minute"},second(){i.value="second"}};function He(e){e.keyCode===13&&ve()}function Ue(e){e.keyCode===13&&me()}function Ae(e){$()!==!0&&(g.platform.is.desktop!==!0&&L(e,ee()),ce())}function Qe(e){$()!==!0&&L(e,ee())}function Ie(e){if(e.keyCode===13)i.value="hour";else if([37,39].includes(e.keyCode)){const t=e.keyCode===37?-1:1;if(q.value!==null){const n=y.value===!0?q.value.values:q.value[f.value===!0?"am":"pm"].values;if(n.length===0)return;if(a.value.hour===null)X(n[0]);else{const o=(n.length+n.indexOf(a.value.hour)+t)%n.length;X(n[o])}}else{const n=y.value===!0?24:12,o=y.value!==!0&&f.value===!1?12:0,d=a.value.hour===null?-t:a.value.hour;X(o+(24+d+t)%n)}}}function Fe(e){if(e.keyCode===13)i.value="minute";else if([37,39].includes(e.keyCode)){const t=e.keyCode===37?-1:1;if(P.value!==null){const n=P.value.values;if(n.length===0)return;if(a.value.minute===null)Y(n[0]);else{const o=(n.length+n.indexOf(a.value.minute)+t)%n.length;Y(n[o])}}else{const n=a.value.minute===null?-t:a.value.minute;Y((60+n+t)%60)}}}function Ke(e){if(e.keyCode===13)i.value="second";else if([37,39].includes(e.keyCode)){const t=e.keyCode===37?-1:1;if(O.value!==null){const n=O.value.values;if(n.length===0)return;if(a.value.seconds===null)E(n[0]);else{const o=(n.length+n.indexOf(a.value.second)+t)%n.length;E(n[o])}}else{const n=a.value.second===null?-t:a.value.second;E((60+n+t)%60)}}}function X(e){a.value.hour!==e&&(a.value.hour=e,B())}function Y(e){a.value.minute!==e&&(a.value.minute=e,B())}function E(e){a.value.second!==e&&(a.value.second=e,B())}const Ne={hour:X,minute:Y,second:E};function ve(){f.value===!1&&(f.value=!0,a.value.hour!==null&&(a.value.hour-=12,B()))}function me(){f.value===!0&&(f.value=!1,a.value.hour!==null&&(a.value.hour+=12,B()))}function le(e){const t=l.modelValue;i.value!==e&&t!==void 0&&t!==null&&t!==""&&typeof t!="string"&&(i.value=e)}function B(){if(T.value!==null&&T.value(a.value.hour)!==!0){a.value=W(),le("hour");return}if(K.value!==null&&K.value(a.value.minute)!==!0){a.value.minute=null,a.value.second=null,le("minute");return}if(l.withSeconds===!0&&N.value!==null&&N.value(a.value.second)!==!0){a.value.second=null,le("second");return}a.value.hour===null||a.value.minute===null||l.withSeconds===!0&&a.value.second===null||ae()}function ae(e){const t=Object.assign({...a.value},e),n=l.calendar==="persian"?M(t.hour)+":"+M(t.minute)+(l.withSeconds===!0?":"+M(t.second):""):at(new Date(t.year,t.month===null?null:t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),Q.value,I.value,t.year,t.timezoneOffset);t.changed=n!==l.modelValue,b("update:modelValue",n,t)}function je(){const e=[r("div",{class:"q-time__link "+(i.value==="hour"?"q-time__link--active":"cursor-pointer"),tabindex:m.value,onClick:te.hour,onKeyup:Ie},J.value.hour),r("div",":"),r("div",se.value===!0?{class:"q-time__link "+(i.value==="minute"?"q-time__link--active":"cursor-pointer"),tabindex:m.value,onKeyup:Fe,onClick:te.minute}:{class:"q-time__link"},J.value.minute)];l.withSeconds===!0&&e.push(r("div",":"),r("div",De.value===!0?{class:"q-time__link "+(i.value==="second"?"q-time__link--active":"cursor-pointer"),tabindex:m.value,onKeyup:Ke,onClick:te.second}:{class:"q-time__link"},J.value.second));const t=[r("div",{class:"q-time__header-label row items-center no-wrap",dir:"ltr"},e)];return y.value===!1&&t.push(r("div",{class:"q-time__header-ampm column items-between no-wrap"},[r("div",{class:"q-time__link "+(f.value===!0?"q-time__link--active":"cursor-pointer"),tabindex:m.value,onClick:ve,onKeyup:He},"AM"),r("div",{class:"q-time__link "+(f.value!==!0?"q-time__link--active":"cursor-pointer"),tabindex:m.value,onClick:me,onKeyup:Ue},"PM")])),r("div",{class:"q-time__header flex flex-center no-wrap "+x.value},t)}function ze(){const e=a.value[i.value];return r("div",{class:"q-time__content col relative-position"},[r(st,{name:"q-transition--scale"},()=>r("div",{key:"clock"+i.value,class:"q-time__container-parent absolute-full"},[r("div",{ref:oe,class:"q-time__container-child fit overflow-hidden"},[ye(r("div",{class:"q-time__clock cursor-pointer non-selectable",onClick:Ae,onMousedown:Qe},[r("div",{class:"q-time__clock-circle fit"},[r("div",{class:"q-time__clock-pointer"+(a.value[i.value]===null?" hidden":l.color!==void 0?` text-${l.color}`:""),style:Me.value}),Se.value.map(t=>r("div",{class:`q-time__clock-position row flex-center q-time__clock-pos-${t.index}`+(t.val===e?" q-time__clock-position--active "+x.value:t.disable===!0?" q-time__clock-position--disable":"")},[r("span",t.label)]))])]),Te.value)])])),l.nowBtn===!0?r(ue,{class:"q-time__now-button absolute",icon:g.iconSet.datetime.now,unelevated:!0,size:"sm",round:!0,color:l.color,textColor:l.textColor,tabindex:m.value,onClick:re}):null])}return s.proxy.setNow=re,()=>{const e=[ze()],t=nt(c.default);return t!==void 0&&e.push(r("div",{class:"q-time__actions"},t)),l.name!==void 0&&l.disable!==!0&&xe(e,"push"),r("div",{class:Ve.value,tabindex:-1},[je(),r("div",{class:"q-time__main col overflow-auto"},e)])}}}),Pt=be({__name:"TimePicker",props:_e({title:{type:String,default:""},dense:{type:Boolean,default:!1},disable:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:_e(["update:modelValue"],["update:modelValue"]),setup(l,{expose:c,emit:b}){c();const s=b,g=rt(l,"modelValue"),{t:C}=pe(),x={emit:s,modelValue:g,t:C,clear:()=>{g.value=""},get biClock(){return dt},get biX(){return ct}};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}),Ot={class:"self-center full-width no-outline",tabindex:"0"},Bt={class:"row items-center justify-end"},Ht={class:"text-negative"};function Ut(l,c,b,s,g,C){return Z(),G(_t,{outlined:"","bottom-slots":"",label:b.title,"stack-label":""},vt({control:_(()=>[S("div",Ot,ne(s.modelValue),1)]),append:_(()=>[b.disable?ke("",!0):(Z(),G(mt,{key:0,name:s.biClock,color:"primary",class:"cursor-pointer"},{default:_(()=>[k(ft,null,{default:_(()=>[Ce(ne(s.t("base.chooseDate")),1)]),_:1}),k(ht,{ref:"q-date-search","transition-show":"scale","transition-hide":"scale"},{default:_(()=>[k(Tt,{modelValue:s.modelValue,"onUpdate:modelValue":[c[0]||(c[0]=m=>s.modelValue=m),c[1]||(c[1]=m=>l.$emit("update:modelValue",m))]},{default:_(()=>[S("div",Bt,[ye(k(ue,{label:s.t("base.close"),color:"primary",flat:""},null,8,["label"]),[[Vt]])])]),_:1},8,["modelValue"])]),_:1},512)]),_:1},8,["name"]))]),after:_(()=>[s.modelValue?(Z(),G(ue,{key:0,flat:"",round:"",icon:s.biX,size:"xs",onClick:s.clear},null,8,["icon"])):ke("",!0)]),_:2},[b.required&&!s.modelValue?{name:"hint",fn:_(()=>[S("span",Ht,ne(s.t("error.validateRequireChoose")),1)]),key:"0"}:void 0]),1032,["label"])}const At=qe(Pt,[["render",Ut],["__file","TimePicker.vue"]]),Qt=be({__name:"date-picker",setup(l,{expose:c}){c();const{t:b}=pe(),{setTitle:s}=Mt();s(`Date time Picker | ${b("app.name")}`);const g=D(kt(gt)),C=D(""),H={t:b,setTitle:s,d:g,pickTime:C,onUpdate:V=>{console.log("onUpdate",V)},onUpdateTime:V=>{console.log("onUpdateTime",V)},UiDatePicker:xt,UiTimePicker:At};return Object.defineProperty(H,"__isScriptSetup",{enumerable:!1,value:!0}),H}}),It={class:"row"},Ft={class:"col-4 q-pa-md"},Kt={class:"col-4 q-pa-md"};function Nt(l,c,b,s,g,C){return Z(),G(yt,{padding:""},{default:_(()=>[k(wt,{flat:"",bordered:"",class:"content-limit"},{default:_(()=>[k(ge,null,{default:_(()=>[k(bt,null,{default:_(()=>[k(pt,null,{default:_(()=>c[2]||(c[2]=[Ce(" Date time picker ")])),_:1}),k(qt)]),_:1}),k(Ct)]),_:1}),k(ge,null,{default:_(()=>[S("div",It,[S("div",Ft,[k(s.UiDatePicker,{modelValue:s.d,"onUpdate:modelValue":[c[0]||(c[0]=m=>s.d=m),s.onUpdate],title:"Select Date",required:""},null,8,["modelValue"])]),S("div",Kt,[k(s.UiTimePicker,{modelValue:s.pickTime,"onUpdate:modelValue":[c[1]||(c[1]=m=>s.pickTime=m),s.onUpdateTime],title:"Select Date",required:""},null,8,["modelValue"])])])]),_:1})]),_:1})]),_:1})}const Et=qe(Qt,[["render",Nt],["__scopeId","data-v-8ebd1ddb"],["__file","date-picker.vue"]]);export{Et as default};
