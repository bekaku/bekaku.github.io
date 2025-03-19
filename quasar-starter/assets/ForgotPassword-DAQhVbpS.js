const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BaseDialog-CZOntNT8.js","assets/BaseDialog.vue_vue_type_script_setup_true_lang-DymM6wAo.js","assets/index-__cRNkUR.js","assets/index-CaH3Tiy9.css","assets/QBar-CAc_-Yo6.js","assets/Ellipsis-DEcjlhN0.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/Ellipsis-D-gyw0_d.css","assets/BaseInputOtp-B8oPcct7.js","assets/BaseInputOtp.vue_vue_type_script_setup_true_lang-DXoo2fLW.js","assets/PasswordForm-bkT2CPU2.js","assets/PasswordForm.vue_vue_type_script_setup_true_lang-cjpBozse.js","assets/useValidation-C8aYGl0y.js","assets/BaseButton-DlZR7aHG.js","assets/BaseButton-CM0Q31Ev.css"])))=>i.map(i=>d[i]);
import{ai as E,ak as N,r as I,c as v,am as i,av as j,bJ as J,cV as X,ei as G,ej as Y,ek as A,el as H,em as Z,en as ee,eo as te,an as Q,ep as ae,eq as ne,aj as oe,al as re,er as se,es as le,et as ie,eu as ue,l as ce,a as de,u as ve,ae as pe,m as L,a0 as R,n as $,w,x as p,bd as fe,aq as me,aA as _e,a5 as l,ev as ge,aI as be,t as x,X as k,aC as Se,B as Pe,aH as K,a4 as O,ew as qe,aB as B,cP as U,aJ as T}from"./index-__cRNkUR.js";import{A as we}from"./useAuth-sZYgT14t.js";import{u as Ce}from"./useValidation-C8aYGl0y.js";import{_ as ye}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useAxios-DRM2HYJN.js";const W=E({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:d}){const{proxy:{$q:m}}=N(),q=I(null),n=v(()=>e.stepper.modelValue===e.step.name),_=v(()=>{const t=e.step.disable;return t===!0||t===""}),C=v(()=>{const t=e.step.error;return t===!0||t===""}),g=v(()=>{const t=e.step.done;return _.value===!1&&(t===!0||t==="")}),f=v(()=>{const t=e.step.headerNav,o=t===!0||t===""||t===void 0;return _.value===!1&&e.stepper.headerNav&&o}),b=v(()=>e.step.prefix&&(n.value===!1||e.stepper.activeIcon==="none")&&(C.value===!1||e.stepper.errorIcon==="none")&&(g.value===!1||e.stepper.doneIcon==="none")),s=v(()=>{const t=e.step.icon||e.stepper.inactiveIcon;if(n.value===!0){const o=e.step.activeIcon||e.stepper.activeIcon;return o==="none"?t:o||m.iconSet.stepper.active}if(C.value===!0){const o=e.step.errorIcon||e.stepper.errorIcon;return o==="none"?t:o||m.iconSet.stepper.error}if(_.value===!1&&g.value===!0){const o=e.step.doneIcon||e.stepper.doneIcon;return o==="none"?t:o||m.iconSet.stepper.done}return t}),c=v(()=>{const t=C.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(n.value===!0){const o=e.step.activeColor||e.stepper.activeColor||e.step.color;return o!==void 0?o:t}return t!==void 0?t:_.value===!1&&g.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),S=v(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(c.value!==void 0?` text-${c.value}`:"")+(C.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(b.value===!0?"prefix":"icon"):"")+(n.value===!0?" q-stepper__tab--active":"")+(g.value===!0?" q-stepper__tab--done":"")+(f.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(_.value===!0?" q-stepper__tab--disabled":"")),y=v(()=>e.stepper.headerNav!==!0?!1:f.value);function u(){q.value?.focus(),n.value===!1&&e.goToPanel(e.step.name)}function V(t){t.keyCode===13&&n.value===!1&&e.goToPanel(e.step.name)}return()=>{const t={class:S.value};f.value===!0&&(t.onClick=u,t.onKeyup=V,Object.assign(t,_.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:d.tabindex||0}));const o=[i("div",{class:"q-focus-helper",tabindex:-1,ref:q}),i("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[i("span",{class:"row flex-center"},[b.value===!0?e.step.prefix:i(j,{name:s.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const h=[i("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&h.push(i("div",{class:"q-stepper__caption"},e.step.caption)),o.push(i("div",{class:"q-stepper__label q-stepper__line relative-position"},h))}return J(i("div",t,o),[[X,y.value]])}}});function M(e){return i("div",{class:"q-stepper__step-content"},[i("div",{class:"q-stepper__step-inner"},Q(e.default))])}const F={setup(e,{slots:d}){return()=>M(d)}},D=E({name:"QStep",props:{...G,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]},setup(e,{slots:d,emit:m}){const{proxy:{$q:q}}=N(),n=Y(H,A);if(n===A)return console.error("QStep needs to be a child of QStepper"),A;const{getCache:_}=ee(),C=I(null),g=v(()=>n.value.modelValue===e.name),f=v(()=>q.platform.is.ios!==!0&&q.platform.is.chrome===!0||g.value!==!0||n.value.vertical!==!0?{}:{onScroll(c){const{target:S}=c;S.scrollTop>0&&(S.scrollTop=0),e.onScroll!==void 0&&m("scroll",c)}}),b=v(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function s(){const c=n.value.vertical;return c===!0&&n.value.keepAlive===!0?i(te,n.value.keepAliveProps.value,g.value===!0?[i(n.value.needsUniqueKeepAliveWrapper.value===!0?_(b.value,()=>({...F,name:b.value})):F,{key:b.value},d.default)]:void 0):c!==!0||g.value===!0?M(d):void 0}return()=>i("div",{ref:C,class:"q-stepper__step",role:"tabpanel",...f.value},n.value.vertical===!0?[i(W,{stepper:n.value,step:e,goToPanel:n.value.goToPanel}),n.value.animated===!0?i(Z,s):s()]:[s()])}}),he=/(-\w)/g;function xe(e){const d={};for(const m in e){const q=m.replace(he,n=>n[1].toUpperCase());d[q]=e[m]}return d}const Ve=E({name:"QStepper",props:{...oe,...ne,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:ae,setup(e,{slots:d}){const m=N(),q=re(e,m.proxy.$q),{updatePanelsList:n,isValidPanelName:_,updatePanelIndex:C,getPanelContent:g,getPanels:f,panelDirectives:b,goToPanel:s,keepAliveProps:c,needsUniqueKeepAliveWrapper:S}=se();le(H,v(()=>({goToPanel:s,keepAliveProps:c,needsUniqueKeepAliveWrapper:S,...e})));const y=v(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0?" q-stepper--flat":"")+(e.bordered===!0?" q-stepper--bordered":"")+(q.value===!0?" q-stepper--dark q-dark":"")),u=v(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function V(){const t=Q(d.message,[]);if(e.vertical===!0){_(e.modelValue)&&C();const o=i("div",{class:"q-stepper__content"},Q(d.default));return t===void 0?[o]:t.concat(o)}return[i("div",{class:u.value},f().map(o=>{const h=xe(o.props);return i(W,{key:h.name,stepper:e,step:h,goToPanel:s})})),t,ue("div",{class:"q-stepper__content q-panel-parent"},g(),"cont",e.swipeable,()=>b.value)]}return()=>(n(d),i("div",{class:y.value},ie(d.navigation,V())))}}),Ie={class:"q-pa-md text-center"},ke={class:"text-body1"},Ae={class:"text-subtitle2 text-muted"},Be={class:"q-pa-md text-center"},Te={class:"text-body1 text-center"},De={class:"text-subtitle2 text-muted"},Qe={class:"text-subtitle2 text-warning"},Ee=ce({__name:"ForgotPassword",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(e){const d=B(()=>T(()=>import("./BaseDialog-CZOntNT8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),m=B(()=>T(()=>import("./BaseInputOtp-B8oPcct7.js"),__vite__mapDeps([8,9,2,3]))),q=B(()=>T(()=>import("./PasswordForm-bkT2CPU2.js"),__vite__mapDeps([10,11,2,3,12,13,6,14]))),{requestVerifyCodeToResetPwd:n,sendVerifyCodeToResetPwd:_,resetPassword:C}=we(),{requireEmail:g}=Ce(),{appLoading:f,appToast:b}=de(),{t:s}=ve(),c=pe(e,"modelValue"),S=I(),y=I(1),u=I({email:"",token:"",newPassword:"",confirmPassword:""}),V=I(!1),t=async()=>{if(!u.value.email)return;f();const r=await n(u.value);if(f(!1),r&&r.status&&r.status==200){const a=r.data;a.message&&b(a.message,{type:"positive",position:"bottom",multiLine:!1}),S.value&&S.value.next()}else r&&r.data&&h(r.data)},o=async r=>{if(!r||!u.value.email)return;u.value.token=r,f();const a=await _(u.value);f(!1),a&&a.status!=null&&a.status!=200?h(a.data):S.value&&S.value.next()},h=r=>{r.errors&&b(r.errors.toString(),{type:"negative",position:"bottom",multiLine:!1})},z=async()=>{if(!u.value.token||!u.value.email||!u.value.newPassword)return;f();const r=await C(u.value);if(f(!1),r&&r.status&&r.status==200){const a=r.data;a.message&&b(a.message,{type:"positive",position:"bottom",multiLine:!1}),c.value=!1}else r&&r.data&&h(r.data)};return(r,a)=>c.value!=null?($(),L(l(d),{key:0,modelValue:c.value,"onUpdate:modelValue":a[5]||(a[5]=P=>c.value=P),"full-width":!1,title:l(s)("authen.forgetPassword"),onOnClose:a[6]||(a[6]=P=>c.value=!1),onOnHide:a[7]||(a[7]=P=>c.value=!1),persistent:!0,"transition-show":"fade","transition-hide":"fade",icon:l(U)},{default:w(()=>[p(fe),p(me,{flat:""},{default:w(()=>[p(_e,null,{default:w(()=>[p(Ve,{flat:"",bordered:"",modelValue:y.value,"onUpdate:modelValue":a[4]||(a[4]=P=>y.value=P),ref_key:"stepper",ref:S,color:"primary",animated:""},{default:w(()=>[p(D,{name:1,title:l(s)("authen.verification"),icon:l(ge),done:y.value>1},{default:w(()=>[p(be,{onSubmit:t,class:"q-px-sm"},{default:w(()=>[x("div",Ie,[x("div",ke,k(l(s)("authen.forgotPwdTitle")),1),x("div",Ae,k(l(s)("authen.forgotPwdSubtitle")),1)]),p(Se,{outlined:"",modelValue:u.value.email,"onUpdate:modelValue":a[0]||(a[0]=P=>u.value.email=P),label:l(s)("base.email"),rules:[l(g)]},{prepend:w(()=>[p(j,{name:l(Pe)},null,8,["name"])]),_:1},8,["modelValue","label","rules"]),p(K,{align:"center"},{default:w(()=>[p(O,{unelevated:"",type:"submit",color:"primary",label:l(s)("base.continue")},null,8,["label"])]),_:1})]),_:1})]),_:1},8,["title","icon","done"]),p(D,{name:2,title:l(s)("authen.verificationCode"),icon:l(qe),done:y.value>2},{default:w(()=>[x("div",Be,[x("div",Te,k(l(s)("authen.login_main_helper4")),1),x("div",De,k(l(s)("authen.login_main_helper5")),1),x("div",Qe,k(l(s)("authen.login_main_helper6")),1)]),p(l(m),{"input-length":6,onOnSubmit:o}),p(K,{align:"center"},{default:w(()=>[p(O,{flat:"",color:"primary",onClick:a[1]||(a[1]=P=>y.value=1),label:l(s)("base.previous"),class:"q-ml-sm"},null,8,["label"])]),_:1})]),_:1},8,["title","icon","done"]),p(D,{name:3,title:l(s)("authen.setPassword"),icon:l(U),done:y.value>3},{default:w(()=>[u.value?($(),L(l(q),{key:0,newPassword:u.value.newPassword,"onUpdate:newPassword":a[2]||(a[2]=P=>u.value.newPassword=P),loading:V.value,"onUpdate:loading":a[3]||(a[3]=P=>V.value=P),onOnSubmit:z},null,8,["newPassword","loading"])):R("",!0)]),_:1},8,["title","icon","done"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title","icon"])):R("",!0)}}),Oe=ye(Ee,[["__scopeId","data-v-7e39602a"]]);export{Oe as default};
