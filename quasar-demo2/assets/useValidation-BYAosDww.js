import{a as F,n as i,v as S,q as f}from"./index-ZORCAnWx.js";const I=()=>{const{t}=F(),d=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,l=e=>e&&e.length>0||t("error.validateRequireField"),c=e=>!!e||t("error.validateRequireChoose"),m=e=>i(e)||t("error.validateNumber"),g=e=>i(e)&&parseInt(e)>0||t("error.validatePositiveNumber"),M=e=>i(e)&&parseInt(e)>=0||t("error.validateMinusNumber"),q=e=>i(e)&&(parseInt(e)||parseFloat(e))>=0||t("error.validateMinusNumber"),N=e=>i(e)&&parseFloat(e)>0||t("error.validatePositiveNumber"),b=e=>i(e)&&parseFloat(e)>=0||t("error.validateMinusNumber"),v=(e,r)=>e&&e.length>0||t("error.validateRequire",[r]),h=e=>e&&e.length>0&&S(e)!=null||t("error.emailValidate"),V=e=>e?e&&e.length>0&&f(e)!=null||t("error.usernameValidate"):!0,P=(e,r,a)=>e.length<=r||t("error.validateMax",[a,r]),n=(e,r,a)=>e>0&&e<=r||t("error.validateMaxValue",[a,r]),o=(e,r,a)=>e>=r||t("error.validateMinValue",[a,r]);return{required:l,requiredSelect:c,requireField:v,requireEmail:h,validateMax:P,validateMaxValue:n,validateMinMaxValue:(e,r,a,u)=>{if(e==null)return!0;const s=o(e,r,u);return s!=!0?s:n(e,a,u)},validatePasswordStrong:e=>d.test(e),validateMinValue:o,requiredNumber:m,requiredPositiveNumber:g,requiredPositiveFloatNumber:N,requireUsername:V,validatePasswordStrongV2:e=>{let r=0;return e.length<8||(r+=1),e.match(/[a-z]/)&&e.match(/[A-Z]/)&&(r+=1),e.match(/\d/)&&(r+=1),e.match(/[^a-zA-Z\d]/)&&(r+=1),r>2},validatePercentage:e=>e&&e>=0&&e<=100||t("error.percentageValueWrong"),requiredNotMinusNumber:M,requiredNotMinusFloatNumber:b,requiredNotMinusNumberOrFloat:q}};export{I as u};
