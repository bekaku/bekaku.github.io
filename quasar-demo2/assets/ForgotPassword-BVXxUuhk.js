const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AppDialog-CIJ3GhIN.js","assets/index-BWIq0ofC.js","assets/index-HNifYG8Q.css","assets/QBar-M-1mCpKM.js","assets/FormOtp-Du81wbB2.js","assets/PasswordForm-D6tSdla9.js","assets/useValidation-DqEJAk3U.js"])))=>i.map(i=>d[i]);
import{s as T,r as h,f as c,h as i,N as L,aq as z,bG as M,z as Q,ds as W,dt as H,du as A,dv as O,dw as G,dx as Y,y as B,dy as Z,t as J,dz as X,dA as $,x as ee,dB as te,dC as ae,dD as ne,dE as oe,d as re,u as se,a as le,aD as ie,dF as de,bb as ue,br as ce,dG as ve,Y as k,Z as D,_ as pe,B as fe,C as me,E as g,F as u,aa as _e,S as be,M as ge,bf as Pe,I as C,R as V,$ as ye,bg as F,af as K}from"./index-BWIq0ofC.js";import{A as Se}from"./useAuth-UrJwPac8.js";import{u as we}from"./useValidation-DqEJAk3U.js";import"./useAxios-D638T_Qc.js";const U=T({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:n}){const{proxy:{$q:f}}=Q(),t=h(null),o=c(()=>e.stepper.modelValue===e.step.name),v=c(()=>{const a=e.step.disable;return a===!0||a===""}),s=c(()=>{const a=e.step.error;return a===!0||a===""}),m=c(()=>{const a=e.step.done;return v.value===!1&&(a===!0||a==="")}),y=c(()=>{const a=e.step.headerNav,r=a===!0||a===""||a===void 0;return v.value===!1&&e.stepper.headerNav&&r}),d=c(()=>e.step.prefix&&(o.value===!1||e.stepper.activeIcon==="none")&&(s.value===!1||e.stepper.errorIcon==="none")&&(m.value===!1||e.stepper.doneIcon==="none")),_=c(()=>{const a=e.step.icon||e.stepper.inactiveIcon;if(o.value===!0){const r=e.step.activeIcon||e.stepper.activeIcon;return r==="none"?a:r||f.iconSet.stepper.active}if(s.value===!0){const r=e.step.errorIcon||e.stepper.errorIcon;return r==="none"?a:r||f.iconSet.stepper.error}if(v.value===!1&&m.value===!0){const r=e.step.doneIcon||e.stepper.doneIcon;return r==="none"?a:r||f.iconSet.stepper.done}return a}),b=c(()=>{const a=s.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(o.value===!0){const r=e.step.activeColor||e.stepper.activeColor||e.step.color;return r!==void 0?r:a}return a!==void 0?a:v.value===!1&&m.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),S=c(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(b.value!==void 0?` text-${b.value}`:"")+(s.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(d.value===!0?"prefix":"icon"):"")+(o.value===!0?" q-stepper__tab--active":"")+(m.value===!0?" q-stepper__tab--done":"")+(y.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(v.value===!0?" q-stepper__tab--disabled":"")),w=c(()=>e.stepper.headerNav!==!0?!1:y.value);function x(){t.value!==null&&t.value.focus(),o.value===!1&&e.goToPanel(e.step.name)}function p(a){a.keyCode===13&&o.value===!1&&e.goToPanel(e.step.name)}return()=>{const a={class:S.value};y.value===!0&&(a.onClick=x,a.onKeyup=p,Object.assign(a,v.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:n.tabindex||0}));const r=[i("div",{class:"q-focus-helper",tabindex:-1,ref:t}),i("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[i("span",{class:"row flex-center"},[d.value===!0?e.step.prefix:i(L,{name:_.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const q=[i("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&q.push(i("div",{class:"q-stepper__caption"},e.step.caption)),r.push(i("div",{class:"q-stepper__label q-stepper__line relative-position"},q))}return z(i("div",a,r),[[M,w.value]])}}});function j(e){return i("div",{class:"q-stepper__step-content"},[i("div",{class:"q-stepper__step-inner"},B(e.default))])}const R={setup(e,{slots:n}){return()=>j(n)}},E=T({name:"QStep",props:{...W,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]},setup(e,{slots:n,emit:f}){const{proxy:{$q:t}}=Q(),o=H(O,A);if(o===A)return console.error("QStep needs to be a child of QStepper"),A;const{getCache:v}=Z(),s=h(null),m=c(()=>o.value.modelValue===e.name),y=c(()=>t.platform.is.ios!==!0&&t.platform.is.chrome===!0||m.value!==!0||o.value.vertical!==!0?{}:{onScroll(b){const{target:S}=b;S.scrollTop>0&&(S.scrollTop=0),e.onScroll!==void 0&&f("scroll",b)}}),d=c(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function _(){const b=o.value.vertical;return b===!0&&o.value.keepAlive===!0?i(Y,o.value.keepAliveProps.value,m.value===!0?[i(o.value.needsUniqueKeepAliveWrapper.value===!0?v(d.value,()=>({...R,name:d.value})):R,{key:d.value},n.default)]:void 0):b!==!0||m.value===!0?j(n):void 0}return()=>i("div",{ref:s,class:"q-stepper__step",role:"tabpanel",...y.value},o.value.vertical===!0?[i(U,{stepper:o.value,step:e,goToPanel:o.value.goToPanel}),o.value.animated===!0?i(G,_):_()]:[_()])}}),qe=/(-\w)/g;function Ce(e){const n={};for(const f in e){const t=f.replace(qe,o=>o[1].toUpperCase());n[t]=e[f]}return n}const he=T({name:"QStepper",props:{...J,...X,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:$,setup(e,{slots:n}){const f=Q(),t=ee(e,f.proxy.$q),{updatePanelsList:o,isValidPanelName:v,updatePanelIndex:s,getPanelContent:m,getPanels:y,panelDirectives:d,goToPanel:_,keepAliveProps:b,needsUniqueKeepAliveWrapper:S}=te();ae(O,c(()=>({goToPanel:_,keepAliveProps:b,needsUniqueKeepAliveWrapper:S,...e})));const w=c(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0?" q-stepper--flat":"")+(e.bordered===!0?" q-stepper--bordered":"")+(t.value===!0?" q-stepper--dark q-dark":"")),x=c(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function p(){const a=B(n.message,[]);if(e.vertical===!0){v(e.modelValue)&&s();const r=i("div",{class:"q-stepper__content"},B(n.default));return a===void 0?[r]:a.concat(r)}return[i("div",{class:x.value},y().map(r=>{const q=Ce(r.props);return i(U,{key:q.name,stepper:e,step:q,goToPanel:_})})),a,oe("div",{class:"q-stepper__content q-panel-parent"},m(),"cont",e.swipeable,()=>d.value)]}return()=>(o(n),i("div",{class:w.value},ne(n.navigation,p())))}}),xe=re({__name:"ForgotPassword",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(e,{expose:n}){n();const f=k(()=>D(()=>import("./AppDialog-CIJ3GhIN.js"),__vite__mapDeps([0,1,2,3]))),t=k(()=>D(()=>import("./FormOtp-Du81wbB2.js"),__vite__mapDeps([4,1,2]))),o=k(()=>D(()=>import("./PasswordForm-D6tSdla9.js"),__vite__mapDeps([5,1,2,6]))),{requestVerifyCodeToResetPwd:v,sendVerifyCodeToResetPwd:s,resetPassword:m}=Se(),{requireEmail:y}=we(),{appLoading:d,appToast:_}=se(),{t:b}=le(),S=ie(e,"modelValue"),w=h(),x=h(1),p=h({email:"",token:"",newPassword:"",confirmPassword:""}),a=h(!1),r=async()=>{if(!p.value.email)return;d();const l=await v(p.value);if(d(!1),l&&l.status&&l.status==200){const P=l.data;P.message&&_(P.message,{type:"positive",position:"bottom",multiLine:!1}),w.value&&w.value.next()}else l&&l.data&&I(l.data)},q=async l=>{if(!l||!p.value.email)return;p.value.token=l,d();const P=await s(p.value);d(!1),P&&P.status!=null&&P.status!=200?I(P.data):w.value&&w.value.next()},I=l=>{l.errors&&_(l.errors.toString(),{type:"negative",position:"bottom",multiLine:!1})},N={AppDialog:f,FormOtp:t,PasswordForm:o,requestVerifyCodeToResetPwd:v,sendVerifyCodeToResetPwd:s,resetPassword:m,requireEmail:y,appLoading:d,appToast:_,t:b,modelValue:S,stepper:w,step:x,entity:p,loading:a,requestVerifyCode:r,verifyCode:q,notifyError:I,setNewPassword:async()=>{if(!p.value.token||!p.value.email||!p.value.newPassword)return;d();const l=await m(p.value);if(d(!1),l&&l.status&&l.status==200){const P=l.data;P.message&&_(P.message,{type:"positive",position:"bottom",multiLine:!1}),S.value=!1}else l&&l.data&&I(l.data)},get bi123(){return de},get biEnvelope(){return ue},get biKey(){return ce},get biPersonVcard(){return ve}};return Object.defineProperty(N,"__isScriptSetup",{enumerable:!1,value:!0}),N}}),Ve={class:"q-pa-md text-center"},Ie={class:"text-body1"},Ae={class:"text-subtitle2 text-muted"},ke={class:"q-pa-md text-center"},De={class:"text-body1 text-center"},Ee={class:"text-subtitle2 text-muted"},Be={class:"text-subtitle2 text-warning"};function Te(e,n,f,t,o,v){return fe(),me(t.AppDialog,{"model-value":t.modelValue,"full-width":!1,title:t.t("authen.forgetPassword"),onOnClose:n[5]||(n[5]=s=>t.modelValue=!1),onOnHide:n[6]||(n[6]=s=>t.modelValue=!1),persistent:!0,"transition-show":"fade","transition-hide":"fade",icon:t.biKey},{default:g(()=>[u(_e),u(be,{flat:""},{default:g(()=>[u(ge,null,{default:g(()=>[u(he,{flat:"",bordered:"",modelValue:t.step,"onUpdate:modelValue":n[4]||(n[4]=s=>t.step=s),ref:"stepper",color:"primary",animated:""},{default:g(()=>[u(E,{name:1,title:t.t("authen.verification"),icon:t.biPersonVcard,done:t.step>1},{default:g(()=>[u(Pe,{onSubmit:t.requestVerifyCode,ref:"formStep1",class:"q-px-sm"},{default:g(()=>[C("div",Ve,[C("div",Ie,V(t.t("authen.forgotPwdTitle")),1),C("div",Ae,V(t.t("authen.forgotPwdSubtitle")),1)]),u(ye,{outlined:"",modelValue:t.entity.email,"onUpdate:modelValue":n[0]||(n[0]=s=>t.entity.email=s),label:t.t("base.email"),rules:[t.requireEmail]},{prepend:g(()=>[u(L,{name:t.biEnvelope},null,8,["name"])]),_:1},8,["modelValue","label","rules"]),u(F,{align:"center"},{default:g(()=>[u(K,{unelevated:"",type:"submit",color:"primary",label:t.t("base.continue")},null,8,["label"])]),_:1})]),_:1},512)]),_:1},8,["title","icon","done"]),u(E,{name:2,title:t.t("authen.verificationCode"),icon:t.bi123,done:t.step>2},{default:g(()=>[C("div",ke,[C("div",De,V(t.t("authen.login_main_helper4")),1),C("div",Ee,V(t.t("authen.login_main_helper5")),1),C("div",Be,V(t.t("authen.login_main_helper6")),1)]),u(t.FormOtp,{"input-length":6,onOnSubmit:t.verifyCode}),u(F,{align:"center"},{default:g(()=>[u(K,{flat:"",color:"primary",onClick:n[1]||(n[1]=s=>t.step=1),label:t.t("base.previous"),class:"q-ml-sm"},null,8,["label"])]),_:1})]),_:1},8,["title","icon","done"]),u(E,{name:3,title:t.t("authen.setPassword"),icon:t.biKey,done:t.step>3},{default:g(()=>[u(t.PasswordForm,{newPassword:t.entity.newPassword,"onUpdate:newPassword":n[2]||(n[2]=s=>t.entity.newPassword=s),loading:t.loading,"onUpdate:loading":n[3]||(n[3]=s=>t.loading=s),onOnSubmit:t.setNewPassword},null,8,["newPassword","loading"])]),_:1},8,["title","icon","done"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model-value","title","icon"])}const Le=pe(xe,[["render",Te],["__scopeId","data-v-e7737190"],["__file","ForgotPassword.vue"]]);export{Le as default};
