import{b as qt}from"./index-UTJsbmGU.js";const Q=typeof window<"u"&&typeof window.document<"u",I=Q?window:{},$t=Q?"ontouchstart"in I.document.documentElement:!1,ut=Q?"PointerEvent"in I:!1,z="cropper",Z=`${z}-canvas`,Gt=`${z}-crosshair`,Jt=`${z}-grid`,Vt=`${z}-handle`,tt=`${z}-image`,P=`${z}-selection`,Qt=`${z}-shade`,te=`${z}-viewer`,G="select",Ut="move",Y="scale",lt="rotate",J="transform",_="none",gt="n-resize",mt="e-resize",bt="s-resize",pt="w-resize",L="ne-resize",U="nw-resize",j="se-resize",B="sw-resize",ee="action",se=$t?"touchend touchcancel":"mouseup",ie=$t?"touchmove":"mousemove",ne=$t?"touchstart":"mousedown",vt=ut?"pointerdown":ne,Ct=ut?"pointermove":ie,Et=ut?"pointerup pointercancel":se,wt="error",St="keydown",X="load",yt="wheel",H="action",D="actionend",ae="actionmove",W="actionstart",M="change",dt="transform";function oe(l){return typeof l=="string"}const jt=Number.isNaN||I.isNaN;function u(l){return typeof l=="number"&&!jt(l)}function T(l){return u(l)&&l>0&&l<1/0}function re(l){return typeof l>"u"}function Bt(l){return typeof l=="object"&&l!==null}const{hasOwnProperty:he}=Object.prototype;function V(l){if(!Bt(l))return!1;try{const{constructor:t}=l,{prototype:s}=t;return t&&s&&he.call(s,"isPrototypeOf")}catch{return!1}}function ft(l){return typeof l=="function"}function Zt(l){return typeof l=="object"&&l!==null&&l.nodeType===1}const ce=/([a-z\d])([A-Z])/g;function At(l){return String(l).replace(ce,"$1-$2").toLowerCase()}const le=/-[A-z\d]/g;function Tt(l){return l.replace(le,t=>t.slice(1).toUpperCase())}const Kt=/\s\s*/;function C(l,t,s,e){t.trim().split(Kt).forEach(i=>{l.removeEventListener(i,s,e)})}function E(l,t,s,e){t.trim().split(Kt).forEach(i=>{l.addEventListener(i,s,e)})}function kt(l,t,s,e){E(l,t,s,Object.assign(Object.assign({},e),{once:!0}))}const de={bubbles:!0,cancelable:!0,composed:!0};function $e(l,t,s,e){return l.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign(Object.assign({},de),{detail:s}),e)))}const Ot=Promise.resolve();function ue(l,t){return t?Ot.then(l?t.bind(l):t):Ot}function xt(l){const{documentElement:t}=l.ownerDocument,s=l.getBoundingClientRect();return{left:s.left+(I.pageXOffset-t.clientLeft),top:s.top+(I.pageYOffset-t.clientTop)}}const fe=/deg|g?rad|turn$/i;function ct(l){const t=parseFloat(l)||0;if(t!==0){const[s="rad"]=String(l).match(fe)||[];switch(s.toLowerCase()){case"deg":return t/360*(Math.PI*2);case"grad":return t/400*(Math.PI*2);case"turn":return t*(Math.PI*2)}}return t}const Nt="contain",ge="cover";function q(l,t=Nt){const{aspectRatio:s}=l;let{width:e,height:i}=l;const n=T(e),r=T(i);if(n&&r){const a=i*s;t===Nt&&a>e||t===ge&&a<e?i=e/s:e=i*s}else n?i=e/s:r&&(e=i*s);return{width:e,height:i}}function Ft(l,...t){if(t.length===0)return l;const[s,e,i,n,r,a]=l,[c,h,o,$,f,g]=t[0];return l=[s*c+i*h,e*c+n*h,s*o+i*$,e*o+n*$,s*f+i*g+r,e*f+n*g+a],Ft(l,...t.slice(1))}var me=":host([hidden]){display:none!important}";const be=/left|top|width|height/i,It="open",K=new WeakMap,F=new WeakMap,Rt=new Map,_t=I.document&&Array.isArray(I.document.adoptedStyleSheets)&&"replaceSync"in I.CSSStyleSheet.prototype;class R extends HTMLElement{get $sharedStyle(){return`${this.themeColor?`:host{--theme-color: ${this.themeColor};}`:""}${me}`}constructor(){var t,s;super(),this.shadowRootMode=It,this.slottable=!0;const e=(s=(t=Object.getPrototypeOf(this))===null||t===void 0?void 0:t.constructor)===null||s===void 0?void 0:s.$name;e&&Rt.set(e,this.tagName.toLowerCase())}static get observedAttributes(){return["shadow-root-mode","slottable","theme-color"]}attributeChangedCallback(t,s,e){if(Object.is(e,s))return;const i=Tt(t),n=this[i];let r=e;switch(typeof n){case"boolean":r=e!==null&&e!=="false";break;case"number":r=Number(e);break}switch(this[i]=r,t){case"theme-color":{const a=F.get(this),c=this.$sharedStyle;a&&c&&(_t?a.replaceSync(c):a.textContent=c);break}}}$propertyChangedCallback(t,s,e){if(!Object.is(e,s))switch(t=At(t),typeof e){case"boolean":e===!0?this.hasAttribute(t)||this.setAttribute(t,""):this.removeAttribute(t);break;case"number":jt(e)?e="":e=String(e);default:e?this.getAttribute(t)!==e&&this.setAttribute(t,e):this.removeAttribute(t)}}connectedCallback(){Object.getPrototypeOf(this).constructor.observedAttributes.forEach(s=>{const e=Tt(s);let i=this[e];re(i)||this.$propertyChangedCallback(e,void 0,i),Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get(){return i},set(n){const r=i;i=n,this.$propertyChangedCallback(e,r,n)}})});const t=this.attachShadow({mode:this.shadowRootMode||It});if(this.shadowRoot||K.set(this,t),F.set(this,this.$addStyles(this.$sharedStyle)),this.$style&&this.$addStyles(this.$style),this.$template){const s=document.createElement("template");s.innerHTML=this.$template,t.appendChild(s.content)}if(this.slottable){const s=document.createElement("slot");t.appendChild(s)}}disconnectedCallback(){F.has(this)&&F.delete(this),K.has(this)&&K.delete(this)}$getTagNameOf(t){var s;return(s=Rt.get(t))!==null&&s!==void 0?s:t}$setStyles(t){return Object.keys(t).forEach(s=>{let e=t[s];u(e)&&(e!==0&&be.test(s)?e=`${e}px`:e=String(e)),this.style[s]=e}),this}$getShadowRoot(){return this.shadowRoot||K.get(this)}$addStyles(t){let s;const e=this.$getShadowRoot();return _t?(s=new CSSStyleSheet,s.replaceSync(t),e.adoptedStyleSheets=e.adoptedStyleSheets.concat(s)):(s=document.createElement("style"),s.textContent=t,e.appendChild(s)),s}$emit(t,s,e){return $e(this,t,s,e)}$nextTick(t){return ue(this,t)}static $define(t,s){Bt(t)&&(s=t,t=""),t||(t=this.$name||this.name),t=At(t),Q&&I.customElements&&!I.customElements.get(t)&&customElements.define(t,this,s)}}R.$version="2.0.0";var pe=':host{display:block;min-height:100px;min-width:200px;overflow:hidden;position:relative;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host([background]){background-color:#fff;background-image:repeating-linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc),repeating-linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc);background-image:repeating-conic-gradient(#ccc 0 25%,#fff 0 50%);background-position:0 0,.5rem .5rem;background-size:1rem 1rem}:host([disabled]){pointer-events:none}:host([disabled]):after{bottom:0;content:"";cursor:not-allowed;display:block;left:0;pointer-events:none;position:absolute;right:0;top:0}';class et extends R{constructor(){super(...arguments),this.$onPointerDown=null,this.$onPointerMove=null,this.$onPointerUp=null,this.$onWheel=null,this.$wheeling=!1,this.$pointers=new Map,this.$style=pe,this.$action=_,this.background=!1,this.disabled=!1,this.scaleStep=.1,this.themeColor="#39f"}static get observedAttributes(){return super.observedAttributes.concat(["background","disabled","scale-step"])}connectedCallback(){super.connectedCallback(),this.disabled||this.$bind()}disconnectedCallback(){this.disabled||this.$unbind(),super.disconnectedCallback()}$propertyChangedCallback(t,s,e){if(!Object.is(e,s))switch(super.$propertyChangedCallback(t,s,e),t){case"disabled":e?this.$unbind():this.$bind();break}}$bind(){this.$onPointerDown||(this.$onPointerDown=this.$handlePointerDown.bind(this),E(this,vt,this.$onPointerDown)),this.$onPointerMove||(this.$onPointerMove=this.$handlePointerMove.bind(this),E(this.ownerDocument,Ct,this.$onPointerMove)),this.$onPointerUp||(this.$onPointerUp=this.$handlePointerUp.bind(this),E(this.ownerDocument,Et,this.$onPointerUp)),this.$onWheel||(this.$onWheel=this.$handleWheel.bind(this),E(this,yt,this.$onWheel,{passive:!1,capture:!0}))}$unbind(){this.$onPointerDown&&(C(this,vt,this.$onPointerDown),this.$onPointerDown=null),this.$onPointerMove&&(C(this.ownerDocument,Ct,this.$onPointerMove),this.$onPointerMove=null),this.$onPointerUp&&(C(this.ownerDocument,Et,this.$onPointerUp),this.$onPointerUp=null),this.$onWheel&&(C(this,yt,this.$onWheel,{capture:!0}),this.$onWheel=null)}$handlePointerDown(t){const{buttons:s,button:e,type:i}=t;if(this.disabled||(i==="pointerdown"&&t.pointerType==="mouse"||i==="mousedown")&&(u(s)&&s!==1||u(e)&&e!==0||t.ctrlKey))return;const{$pointers:n}=this;let r="";if(t.changedTouches)Array.from(t.changedTouches).forEach(({identifier:a,pageX:c,pageY:h})=>{n.set(a,{startX:c,startY:h,endX:c,endY:h})});else{const{pointerId:a=0,pageX:c,pageY:h}=t;n.set(a,{startX:c,startY:h,endX:c,endY:h})}n.size>1?r=J:Zt(t.target)&&(r=t.target.action||t.target.getAttribute(ee)||""),this.$emit(W,{action:r,relatedEvent:t})!==!1&&(t.preventDefault(),this.$action=r,this.style.willChange="transform")}$handlePointerMove(t){const{$action:s,$pointers:e}=this;if(this.disabled||s===_||e.size===0||this.$emit(ae,{action:s,relatedEvent:t})===!1)return;if(t.preventDefault(),t.changedTouches)Array.from(t.changedTouches).forEach(({identifier:n,pageX:r,pageY:a})=>{const c=e.get(n);c&&Object.assign(c,{endX:r,endY:a})});else{const{pointerId:n=0,pageX:r,pageY:a}=t,c=e.get(n);c&&Object.assign(c,{endX:r,endY:a})}const i={action:s,relatedEvent:t};if(s===J){const n=new Map(e);let r=0,a=0,c=0,h=0,o=t.pageX,$=t.pageY;e.forEach((d,y)=>{n.delete(y),n.forEach(w=>{let m=w.startX-d.startX,v=w.startY-d.startY,b=w.endX-d.endX,p=w.endY-d.endY,S=0,A=0,k=0,O=0;if(m===0?v<0?k=Math.PI*2:v>0&&(k=Math.PI):m>0?k=Math.PI/2+Math.atan(v/m):m<0&&(k=Math.PI*1.5+Math.atan(v/m)),b===0?p<0?O=Math.PI*2:p>0&&(O=Math.PI):b>0?O=Math.PI/2+Math.atan(p/b):b<0&&(O=Math.PI*1.5+Math.atan(p/b)),O>0||k>0){const x=O-k,N=Math.abs(x);N>r&&(r=N,c=x,o=(d.startX+w.startX)/2,$=(d.startY+w.startY)/2)}if(m=Math.abs(m),v=Math.abs(v),b=Math.abs(b),p=Math.abs(p),m>0&&v>0?S=Math.sqrt(m*m+v*v):m>0?S=m:v>0&&(S=v),b>0&&p>0?A=Math.sqrt(b*b+p*p):b>0?A=b:p>0&&(A=p),S>0&&A>0){const x=(A-S)/S,N=Math.abs(x);N>a&&(a=N,h=x,o=(d.startX+w.startX)/2,$=(d.startY+w.startY)/2)}})});const f=r>0,g=a>0;f&&g?(i.rotate=c,i.scale=h,i.centerX=o,i.centerY=$):f?(i.action=lt,i.rotate=c,i.centerX=o,i.centerY=$):g?(i.action=Y,i.scale=h,i.centerX=o,i.centerY=$):i.action=_}else{const[n]=Array.from(e.values());Object.assign(i,n)}e.forEach(n=>{n.startX=n.endX,n.startY=n.endY}),i.action!==_&&this.$emit(H,i,{cancelable:!1})}$handlePointerUp(t){const{$action:s,$pointers:e}=this;if(!(this.disabled||s===_)&&this.$emit(D,{action:s,relatedEvent:t})!==!1){if(t.preventDefault(),t.changedTouches)Array.from(t.changedTouches).forEach(({identifier:i})=>{e.delete(i)});else{const{pointerId:i=0}=t;e.delete(i)}e.size===0&&(this.style.willChange="",this.$action=_)}}$handleWheel(t){if(this.disabled||(t.preventDefault(),this.$wheeling))return;this.$wheeling=!0,setTimeout(()=>{this.$wheeling=!1},50);const e=(t.deltaY>0?-1:1)*this.scaleStep;this.$emit(H,{action:Y,scale:e,relatedEvent:t},{cancelable:!1})}$setAction(t){return oe(t)&&(this.$action=t),this}$toCanvas(t){return new Promise((s,e)=>{if(!this.isConnected){e(new Error("The current element is not connected to the DOM."));return}const i=document.createElement("canvas");let n=this.offsetWidth,r=this.offsetHeight,a=1;V(t)&&(T(t.width)||T(t.height))&&({width:n,height:r}=q({aspectRatio:n/r,width:t.width,height:t.height}),a=n/this.offsetWidth),i.width=n,i.height=r;const c=this.querySelector(this.$getTagNameOf(tt));if(!c){s(i);return}c.$ready().then(h=>{const o=i.getContext("2d");if(o){const[$,f,g,d,y,w]=c.$getTransform();let m=y,v=w,b=h.naturalWidth,p=h.naturalHeight;a!==1&&(m*=a,v*=a,b*=a,p*=a);const S=b/2,A=p/2;o.fillStyle="transparent",o.fillRect(0,0,n,r),V(t)&&ft(t.beforeDraw)&&t.beforeDraw.call(this,o,i),o.save(),o.translate(S,A),o.transform($,f,g,d,m,v),o.translate(-S,-A),o.drawImage(h,0,0,b,p),o.restore()}s(i)}).catch(e)})}}et.$name=Z;et.$version="2.0.0";var ve=":host{display:inline-block}img{display:block;height:100%;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}";const Pt=new WeakMap,Mt=["alt","crossorigin","decoding","importance","loading","referrerpolicy","sizes","src","srcset"];class st extends R{constructor(){super(...arguments),this.$matrix=[1,0,0,1,0,0],this.$onLoad=null,this.$onCanvasAction=null,this.$onCanvasActionEnd=null,this.$onCanvasActionStart=null,this.$actionStartTarget=null,this.$style=ve,this.$image=new Image,this.initialCenterSize="contain",this.rotatable=!1,this.scalable=!1,this.skewable=!1,this.slottable=!1,this.translatable=!1}set $canvas(t){Pt.set(this,t)}get $canvas(){return Pt.get(this)}static get observedAttributes(){return super.observedAttributes.concat(Mt,["initial-center-size","rotatable","scalable","skewable","translatable"])}attributeChangedCallback(t,s,e){Object.is(e,s)||(super.attributeChangedCallback(t,s,e),Mt.includes(t)&&this.$image.setAttribute(t,e))}$propertyChangedCallback(t,s,e){if(!Object.is(e,s))switch(super.$propertyChangedCallback(t,s,e),t){case"initialCenterSize":this.$nextTick(()=>{this.$center(e)});break}}connectedCallback(){super.connectedCallback();const{$image:t}=this,s=this.closest(this.$getTagNameOf(Z));s&&(this.$canvas=s,this.$setStyles({display:"block",position:"absolute"}),this.$onCanvasActionStart=e=>{var i,n;this.$actionStartTarget=(n=(i=e.detail)===null||i===void 0?void 0:i.relatedEvent)===null||n===void 0?void 0:n.target},this.$onCanvasActionEnd=()=>{this.$actionStartTarget=null},this.$onCanvasAction=this.$handleAction.bind(this),E(s,W,this.$onCanvasActionStart),E(s,D,this.$onCanvasActionEnd),E(s,H,this.$onCanvasAction)),this.$onLoad=this.$handleLoad.bind(this),E(t,X,this.$onLoad),this.$getShadowRoot().appendChild(t)}disconnectedCallback(){const{$image:t,$canvas:s}=this;s&&(this.$onCanvasActionStart&&(C(s,W,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(C(s,D,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onCanvasAction&&(C(s,H,this.$onCanvasAction),this.$onCanvasAction=null)),t&&this.$onLoad&&(C(t,X,this.$onLoad),this.$onLoad=null),this.$getShadowRoot().removeChild(t),super.disconnectedCallback()}$handleLoad(){const{$image:t}=this;this.$setStyles({width:t.naturalWidth,height:t.naturalHeight}),this.$canvas&&this.$center(this.initialCenterSize)}$handleAction(t){if(this.hidden||!(this.rotatable||this.scalable||this.translatable))return;const{$canvas:s}=this,{detail:e}=t;if(e){const{relatedEvent:i}=e;let{action:n}=e;switch(n===J&&(!this.rotatable||!this.scalable)&&(this.rotatable?n=lt:this.scalable?n=Y:n=_),n){case Ut:if(this.translatable){let r=null;i&&(r=i.target.closest(this.$getTagNameOf(P))),r||(r=s.querySelector(this.$getTagNameOf(P))),r&&r.multiple&&!r.active&&(r=s.querySelector(`${this.$getTagNameOf(P)}[active]`)),(!r||r.hidden||!r.movable||r.dynamic||!(this.$actionStartTarget&&r.contains(this.$actionStartTarget)))&&this.$move(e.endX-e.startX,e.endY-e.startY)}break;case lt:if(this.rotatable)if(i){const{x:r,y:a}=this.getBoundingClientRect();this.$rotate(e.rotate,i.clientX-r,i.clientY-a)}else this.$rotate(e.rotate);break;case Y:if(this.scalable)if(i){const r=i.target.closest(this.$getTagNameOf(P));if(!r||!r.zoomable||r.zoomable&&r.dynamic){const{x:a,y:c}=this.getBoundingClientRect();this.$zoom(e.scale,i.clientX-a,i.clientY-c)}}else this.$zoom(e.scale);break;case J:if(this.rotatable&&this.scalable){const{rotate:r}=e;let{scale:a}=e;a<0?a=1/(1-a):a+=1;const c=Math.cos(r),h=Math.sin(r),[o,$,f,g]=[c*a,h*a,-h*a,c*a];if(i){const d=this.getBoundingClientRect(),y=i.clientX-d.x,w=i.clientY-d.y,[m,v,b,p]=this.$matrix,S=d.width/2,A=d.height/2,k=y-S,O=w-A,x=(k*p-b*O)/(m*p-b*v),N=(O*m-v*k)/(m*p-b*v);this.$transform(o,$,f,g,x*(1-o)+N*f,N*(1-g)+x*$)}else this.$transform(o,$,f,g,0,0)}break}}}$ready(t){const{$image:s}=this,e=new Promise((i,n)=>{const r=new Error("Failed to load the image source");if(s.complete)s.naturalWidth>0&&s.naturalHeight>0?i(s):n(r);else{const a=()=>{C(s,wt,c),i(s)},c=()=>{C(s,X,a),n(r)};kt(s,X,a),kt(s,wt,c)}});return ft(t)&&e.then(i=>(t(i),i)),e}$center(t){const{parentElement:s}=this;if(!s)return this;const e=s.getBoundingClientRect(),i=e.width,n=e.height,{x:r,y:a,width:c,height:h}=this.getBoundingClientRect(),o=r+c/2,$=a+h/2,f=e.x+i/2,g=e.y+n/2;if(this.$move(f-o,g-$),t&&(c!==i||h!==n)){const d=i/c,y=n/h;switch(t){case"cover":this.$scale(Math.max(d,y));break;case"contain":this.$scale(Math.min(d,y));break}}return this}$move(t,s=t){if(this.translatable&&u(t)&&u(s)){const[e,i,n,r]=this.$matrix,a=(t*r-n*s)/(e*r-n*i),c=(s*e-i*t)/(e*r-n*i);this.$translate(a,c)}return this}$moveTo(t,s=t){if(this.translatable&&u(t)&&u(s)){const[e,i,n,r]=this.$matrix,a=(t*r-n*s)/(e*r-n*i),c=(s*e-i*t)/(e*r-n*i);this.$setTransform(e,i,n,r,a,c)}return this}$rotate(t,s,e){if(this.rotatable){const i=ct(t),n=Math.cos(i),r=Math.sin(i),[a,c,h,o]=[n,r,-r,n];if(u(s)&&u(e)){const[$,f,g,d]=this.$matrix,{width:y,height:w}=this.getBoundingClientRect(),m=y/2,v=w/2,b=s-m,p=e-v,S=(b*d-g*p)/($*d-g*f),A=(p*$-f*b)/($*d-g*f);this.$transform(a,c,h,o,S*(1-a)-A*h,A*(1-o)-S*c)}else this.$transform(a,c,h,o,0,0)}return this}$zoom(t,s,e){if(!this.scalable||t===0)return this;if(t<0?t=1/(1-t):t+=1,u(s)&&u(e)){const[i,n,r,a]=this.$matrix,{width:c,height:h}=this.getBoundingClientRect(),o=c/2,$=h/2,f=s-o,g=e-$,d=(f*a-r*g)/(i*a-r*n),y=(g*i-n*f)/(i*a-r*n);this.$transform(t,0,0,t,d*(1-t),y*(1-t))}else this.$scale(t);return this}$scale(t,s=t){return this.scalable&&this.$transform(t,0,0,s,0,0),this}$skew(t,s=0){if(this.skewable){const e=ct(t),i=ct(s);this.$transform(1,Math.tan(i),Math.tan(e),1,0,0)}return this}$translate(t,s=t){return this.translatable&&u(t)&&u(s)&&this.$transform(1,0,0,1,t,s),this}$transform(t,s,e,i,n,r){return u(t)&&u(s)&&u(e)&&u(i)&&u(n)&&u(r)?this.$setTransform(Ft(this.$matrix,[t,s,e,i,n,r])):this}$setTransform(t,s,e,i,n,r){if((this.rotatable||this.scalable||this.skewable||this.translatable)&&(Array.isArray(t)&&([t,s,e,i,n,r]=t),u(t)&&u(s)&&u(e)&&u(i)&&u(n)&&u(r))){const a=[...this.$matrix],c=[t,s,e,i,n,r];if(this.$emit(dt,{matrix:c,oldMatrix:a})===!1)return this;this.$matrix=c,this.style.transform=`matrix(${c.join(", ")})`}return this}$getTransform(){return this.$matrix.slice()}$resetTransform(){return this.$setTransform([1,0,0,1,0,0])}}st.$name=tt;st.$version="2.0.0";var Ce=":host{display:block;height:0;left:0;outline:var(--theme-color) solid 1px;position:relative;top:0;width:0}:host([transparent]){outline-color:transparent}";const zt=new WeakMap;class it extends R{constructor(){super(...arguments),this.$onCanvasChange=null,this.$onCanvasActionEnd=null,this.$onCanvasActionStart=null,this.$style=Ce,this.x=0,this.y=0,this.width=0,this.height=0,this.slottable=!1,this.themeColor="rgba(0, 0, 0, 0.65)"}set $canvas(t){zt.set(this,t)}get $canvas(){return zt.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["height","width","x","y"])}connectedCallback(){super.connectedCallback();const t=this.closest(this.$getTagNameOf(Z));if(t){this.$canvas=t,this.style.position="absolute";const s=t.querySelector(this.$getTagNameOf(P));s&&(this.$onCanvasActionStart=e=>{s.hidden&&e.detail.action===G&&(this.hidden=!1)},this.$onCanvasActionEnd=e=>{s.hidden&&e.detail.action===G&&(this.hidden=!0)},this.$onCanvasChange=e=>{const{x:i,y:n,width:r,height:a}=e.detail;this.$change(i,n,r,a),(s.hidden||i===0&&n===0&&r===0&&a===0)&&(this.hidden=!0)},E(t,W,this.$onCanvasActionStart),E(t,D,this.$onCanvasActionEnd),E(t,M,this.$onCanvasChange))}this.$render()}disconnectedCallback(){const{$canvas:t}=this;t&&(this.$onCanvasActionStart&&(C(t,W,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(C(t,D,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onCanvasChange&&(C(t,M,this.$onCanvasChange),this.$onCanvasChange=null)),super.disconnectedCallback()}$change(t,s,e=this.width,i=this.height){return!u(t)||!u(s)||!u(e)||!u(i)||t===this.x&&s===this.y&&e===this.width&&i===this.height?this:(this.hidden&&(this.hidden=!1),this.x=t,this.y=s,this.width=e,this.height=i,this.$render())}$reset(){return this.$change(0,0,0,0)}$render(){return this.$setStyles({transform:`translate(${this.x}px, ${this.y}px)`,width:this.width,height:this.height,outlineWidth:I.innerWidth})}}it.$name=Qt;it.$version="2.0.0";var Ee=':host{background-color:var(--theme-color);display:block}:host([action=move]),:host([action=select]){height:100%;left:0;position:absolute;top:0;width:100%}:host([action=move]){cursor:move}:host([action=select]){cursor:crosshair}:host([action$=-resize]){background-color:transparent;height:15px;position:absolute;width:15px}:host([action$=-resize]):after{background-color:var(--theme-color);content:"";display:block;height:5px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:5px}:host([action=n-resize]),:host([action=s-resize]){cursor:ns-resize;left:50%;transform:translateX(-50%);width:100%}:host([action=n-resize]){top:-8px}:host([action=s-resize]){bottom:-8px}:host([action=e-resize]),:host([action=w-resize]){cursor:ew-resize;height:100%;top:50%;transform:translateY(-50%)}:host([action=e-resize]){right:-8px}:host([action=w-resize]){left:-8px}:host([action=ne-resize]){cursor:nesw-resize;right:-8px;top:-8px}:host([action=nw-resize]){cursor:nwse-resize;left:-8px;top:-8px}:host([action=se-resize]){bottom:-8px;cursor:nwse-resize;right:-8px}:host([action=se-resize]):after{height:15px;width:15px}@media (pointer:coarse){:host([action=se-resize]):after{height:10px;width:10px}}@media (pointer:fine){:host([action=se-resize]):after{height:5px;width:5px}}:host([action=sw-resize]){bottom:-8px;cursor:nesw-resize;left:-8px}:host([plain]){background-color:transparent}';class nt extends R{constructor(){super(...arguments),this.$onCanvasCropEnd=null,this.$onCanvasCropStart=null,this.$style=Ee,this.action=_,this.plain=!1,this.slottable=!1,this.themeColor="rgba(51, 153, 255, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["action","plain"])}}nt.$name=Vt;nt.$version="2.0.0";var we=':host{display:block;left:0;position:relative;right:0}:host([outlined]){outline:1px solid var(--theme-color)}:host([multiple]){outline:1px dashed hsla(0,0%,100%,.5)}:host([multiple]):after{bottom:0;content:"";cursor:pointer;display:block;left:0;position:absolute;right:0;top:0}:host([multiple][active]){outline-color:var(--theme-color);z-index:1}:host([multiple])>*{visibility:hidden}:host([multiple][active])>*{visibility:visible}:host([multiple][active]):after{display:none}';const Dt=new WeakMap;class at extends R{constructor(){super(...arguments),this.$onCanvasAction=null,this.$onCanvasActionStart=null,this.$onCanvasActionEnd=null,this.$onDocumentKeyDown=null,this.$action="",this.$actionStartTarget=null,this.$changing=!1,this.$style=we,this.$initialSelection={x:0,y:0,width:0,height:0},this.x=0,this.y=0,this.width=0,this.height=0,this.aspectRatio=NaN,this.initialAspectRatio=NaN,this.initialCoverage=NaN,this.active=!1,this.linked=!1,this.dynamic=!1,this.movable=!1,this.resizable=!1,this.zoomable=!1,this.multiple=!1,this.keyboard=!1,this.outlined=!1,this.precise=!1}set $canvas(t){Dt.set(this,t)}get $canvas(){return Dt.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["active","aspect-ratio","dynamic","height","initial-aspect-ratio","initial-coverage","keyboard","linked","movable","multiple","outlined","precise","resizable","width","x","y","zoomable"])}$propertyChangedCallback(t,s,e){if(!Object.is(e,s))switch(super.$propertyChangedCallback(t,s,e),t){case"x":case"y":case"width":case"height":this.$changing||this.$nextTick(()=>{this.$change(this.x,this.y,this.width,this.height,this.aspectRatio,!0)});break;case"aspectRatio":case"initialAspectRatio":this.$nextTick(()=>{this.$initSelection()});break;case"initialCoverage":this.$nextTick(()=>{T(e)&&e<=1&&this.$initSelection(!0,!0)});break;case"keyboard":this.$nextTick(()=>{this.$canvas&&(e?this.$onDocumentKeyDown||(this.$onDocumentKeyDown=this.$handleKeyDown.bind(this),E(this.ownerDocument,St,this.$onDocumentKeyDown)):this.$onDocumentKeyDown&&(C(this.ownerDocument,St,this.$onDocumentKeyDown),this.$onDocumentKeyDown=null))});break;case"multiple":this.$nextTick(()=>{if(this.$canvas){const i=this.$getSelections();e?(i.forEach(n=>{n.active=!1}),this.active=!0,this.$emit(M,{x:this.x,y:this.y,width:this.width,height:this.height})):(this.active=!1,i.slice(1).forEach(n=>{this.$removeSelection(n)}))}});break;case"precise":this.$nextTick(()=>{this.$change(this.x,this.y)});break;case"linked":e&&(this.dynamic=!0);break}}connectedCallback(){super.connectedCallback();const t=this.closest(this.$getTagNameOf(Z));t?(this.$canvas=t,this.$setStyles({position:"absolute",transform:`translate(${this.x}px, ${this.y}px)`}),this.hidden||this.$render(),this.$initSelection(!0),this.$onCanvasActionStart=this.$handleActionStart.bind(this),this.$onCanvasActionEnd=this.$handleActionEnd.bind(this),this.$onCanvasAction=this.$handleAction.bind(this),E(t,W,this.$onCanvasActionStart),E(t,D,this.$onCanvasActionEnd),E(t,H,this.$onCanvasAction)):this.$render()}disconnectedCallback(){const{$canvas:t}=this;t&&(this.$onCanvasActionStart&&(C(t,W,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(C(t,D,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onCanvasAction&&(C(t,H,this.$onCanvasAction),this.$onCanvasAction=null)),super.disconnectedCallback()}$getSelections(){let t=[];return this.parentElement&&(t=Array.from(this.parentElement.querySelectorAll(this.$getTagNameOf(P)))),t}$initSelection(t=!1,s=!1){const{initialCoverage:e,parentElement:i}=this;if(T(e)&&i){const n=this.aspectRatio||this.initialAspectRatio;let r=(s?0:this.width)||i.offsetWidth*e,a=(s?0:this.height)||i.offsetHeight*e;T(n)&&({width:r,height:a}=q({aspectRatio:n,width:r,height:a})),this.$change(this.x,this.y,r,a),t&&this.$center(),this.$initialSelection={x:this.x,y:this.y,width:this.width,height:this.height}}}$createSelection(){const t=this.cloneNode(!0);return this.hasAttribute("id")&&t.removeAttribute("id"),t.initialCoverage=NaN,this.active=!1,this.parentElement&&this.parentElement.insertBefore(t,this.nextSibling),t}$removeSelection(t=this){if(this.parentElement){const s=this.$getSelections();if(s.length>1){const e=s.indexOf(t),i=s[e+1]||s[e-1];i&&(t.active=!1,this.parentElement.removeChild(t),i.active=!0,i.$emit(M,{x:i.x,y:i.y,width:i.width,height:i.height}))}else this.$clear()}}$handleActionStart(t){var s,e;const i=(e=(s=t.detail)===null||s===void 0?void 0:s.relatedEvent)===null||e===void 0?void 0:e.target;this.$action="",this.$actionStartTarget=i,!this.hidden&&this.multiple&&!this.active&&i===this&&this.parentElement&&(this.$getSelections().forEach(n=>{n.active=!1}),this.active=!0,this.$emit(M,{x:this.x,y:this.y,width:this.width,height:this.height}))}$handleAction(t){const{currentTarget:s,detail:e}=t;if(!s||!e)return;const{relatedEvent:i}=e;let{action:n}=e;if(!n&&this.multiple&&(n=this.$action||i?.target.action,this.$action=n),!n||this.hidden&&n!==G||this.multiple&&!this.active&&n!==Y)return;const r=e.endX-e.startX,a=e.endY-e.startY,{width:c,height:h}=this;let{aspectRatio:o}=this;switch(!T(o)&&i.shiftKey&&(o=T(c)&&T(h)?c/h:1),n){case G:if(r!==0&&a!==0){const{$canvas:$}=this,f=xt(s);(this.multiple&&!this.hidden?this.$createSelection():this).$change(e.startX-f.left,e.startY-f.top,Math.abs(r),Math.abs(a),o),r<0?a<0?n=U:a>0&&(n=B):r>0&&(a<0?n=L:a>0&&(n=j)),$&&($.$action=n)}break;case Ut:this.movable&&(this.dynamic||this.$actionStartTarget&&this.contains(this.$actionStartTarget))&&this.$move(r,a);break;case Y:if(i&&this.zoomable&&(this.dynamic||this.contains(i.target))){const $=xt(s);this.$zoom(e.scale,i.pageX-$.left,i.pageY-$.top)}break;default:this.$resize(n,r,a,o)}}$handleActionEnd(){this.$action="",this.$actionStartTarget=null}$handleKeyDown(t){if(this.hidden||!this.keyboard||this.multiple&&!this.active||t.defaultPrevented)return;const{activeElement:s}=document;if(!(s&&(["INPUT","TEXTAREA"].includes(s.tagName)||["true","plaintext-only"].includes(s.contentEditable))))switch(t.key){case"Backspace":t.metaKey&&(t.preventDefault(),this.$removeSelection());break;case"Delete":t.preventDefault(),this.$removeSelection();break;case"ArrowLeft":t.preventDefault(),this.$move(-1,0);break;case"ArrowRight":t.preventDefault(),this.$move(1,0);break;case"ArrowUp":t.preventDefault(),this.$move(0,-1);break;case"ArrowDown":t.preventDefault(),this.$move(0,1);break;case"+":t.preventDefault(),this.$zoom(.1);break;case"-":t.preventDefault(),this.$zoom(-.1);break}}$center(){const{parentElement:t}=this;if(!t)return this;const s=(t.offsetWidth-this.width)/2,e=(t.offsetHeight-this.height)/2;return this.$change(s,e)}$move(t,s=t){return this.$moveTo(this.x+t,this.y+s)}$moveTo(t,s=t){return this.movable?this.$change(t,s):this}$resize(t,s=0,e=0,i=this.aspectRatio){if(!this.resizable)return this;const n=T(i),{$canvas:r}=this;let{x:a,y:c,width:h,height:o}=this;switch(t){case gt:c+=e,o-=e,o<0&&(t=bt,o=-o,c-=o),n&&(s=e*i,a+=s/2,h-=s,h<0&&(h=-h,a-=h));break;case mt:h+=s,h<0&&(t=pt,h=-h,a-=h),n&&(e=s/i,c-=e/2,o+=e,o<0&&(o=-o,c-=o));break;case bt:o+=e,o<0&&(t=gt,o=-o,c-=o),n&&(s=e*i,a-=s/2,h+=s,h<0&&(h=-h,a-=h));break;case pt:a+=s,h-=s,h<0&&(t=mt,h=-h,a-=h),n&&(e=s/i,c+=e/2,o-=e,o<0&&(o=-o,c-=o));break;case L:n&&(e=-s/i),c+=e,o-=e,h+=s,h<0&&o<0?(t=B,h=-h,o=-o,a-=h,c-=o):h<0?(t=U,h=-h,a-=h):o<0&&(t=j,o=-o,c-=o);break;case U:n&&(e=s/i),a+=s,c+=e,h-=s,o-=e,h<0&&o<0?(t=j,h=-h,o=-o,a-=h,c-=o):h<0?(t=L,h=-h,a-=h):o<0&&(t=B,o=-o,c-=o);break;case j:n&&(e=s/i),h+=s,o+=e,h<0&&o<0?(t=U,h=-h,o=-o,a-=h,c-=o):h<0?(t=B,h=-h,a-=h):o<0&&(t=L,o=-o,c-=o);break;case B:n&&(e=-s/i),a+=s,h-=s,o+=e,h<0&&o<0?(t=L,h=-h,o=-o,a-=h,c-=o):h<0?(t=j,h=-h,a-=h):o<0&&(t=U,o=-o,c-=o);break}return r&&r.$setAction(t),this.$change(a,c,h,o)}$zoom(t,s,e){if(!this.zoomable||t===0)return this;t<0?t=1/(1-t):t+=1;const{width:i,height:n}=this,r=i*t,a=n*t;let c=this.x,h=this.y;return u(s)&&u(e)?(c-=(r-i)*((s-this.x)/i),h-=(a-n)*((e-this.y)/n)):(c-=(r-i)/2,h-=(a-n)/2),this.$change(c,h,r,a)}$change(t,s,e=this.width,i=this.height,n=this.aspectRatio,r=!1){return this.$changing||!u(t)||!u(s)||!u(e)||!u(i)||e<0||i<0?this:(T(n)&&({width:e,height:i}=q({aspectRatio:n,width:e,height:i},"cover")),this.precise||(t=Math.round(t),s=Math.round(s),e=Math.round(e),i=Math.round(i)),t===this.x&&s===this.y&&e===this.width&&i===this.height&&Object.is(n,this.aspectRatio)&&!r?this:(this.hidden&&(this.hidden=!1),this.$emit(M,{x:t,y:s,width:e,height:i})===!1?this:(this.$changing=!0,this.x=t,this.y=s,this.width=e,this.height=i,this.$changing=!1,this.$render())))}$reset(){const{x:t,y:s,width:e,height:i}=this.$initialSelection;return this.$change(t,s,e,i)}$clear(){return this.$change(0,0,0,0,NaN,!0),this.hidden=!0,this}$render(){return this.$setStyles({transform:`translate(${this.x}px, ${this.y}px)`,width:this.width,height:this.height})}$toCanvas(t){return new Promise((s,e)=>{if(!this.isConnected){e(new Error("The current element is not connected to the DOM."));return}const i=document.createElement("canvas");let{width:n,height:r}=this,a=1;if(V(t)&&(T(t.width)||T(t.height))&&({width:n,height:r}=q({aspectRatio:n/r,width:t.width,height:t.height}),a=n/this.width),i.width=n,i.height=r,!this.$canvas){s(i);return}const c=this.$canvas.querySelector(this.$getTagNameOf(tt));if(!c){s(i);return}c.$ready().then(h=>{const o=i.getContext("2d");if(o){const[$,f,g,d,y,w]=c.$getTransform(),m=-this.x,v=-this.y,b=(m*d-g*v)/($*d-g*f),p=(v*$-f*m)/($*d-g*f);let S=$*b+g*p+y,A=f*b+d*p+w,k=h.naturalWidth,O=h.naturalHeight;a!==1&&(S*=a,A*=a,k*=a,O*=a);const x=k/2,N=O/2;o.fillStyle="transparent",o.fillRect(0,0,n,r),V(t)&&ft(t.beforeDraw)&&t.beforeDraw.call(this,o,i),o.save(),o.translate(x,N),o.transform($,f,g,d,S,A),o.translate(-x,-N),o.drawImage(h,0,0,k,O),o.restore()}s(i)}).catch(e)})}}at.$name=P;at.$version="2.0.0";var Se=":host{display:flex;flex-direction:column;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host([bordered]){border:1px dashed var(--theme-color)}:host([covered]){bottom:0;left:0;position:absolute;right:0;top:0}:host>span{display:flex;flex:1}:host>span+span{border-top:1px dashed var(--theme-color)}:host>span>span{flex:1}:host>span>span+span{border-left:1px dashed var(--theme-color)}";class ot extends R{constructor(){super(...arguments),this.$style=Se,this.bordered=!1,this.columns=3,this.covered=!1,this.rows=3,this.slottable=!1,this.themeColor="rgba(238, 238, 238, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["bordered","columns","covered","rows"])}$propertyChangedCallback(t,s,e){Object.is(e,s)||(super.$propertyChangedCallback(t,s,e),(t==="rows"||t==="columns")&&this.$nextTick(()=>{this.$render()}))}connectedCallback(){super.connectedCallback(),this.$render()}$render(){const t=this.$getShadowRoot(),s=document.createDocumentFragment();for(let e=0;e<this.rows;e+=1){const i=document.createElement("span");i.setAttribute("role","row");for(let n=0;n<this.columns;n+=1){const r=document.createElement("span");r.setAttribute("role","gridcell"),i.appendChild(r)}s.appendChild(i)}t&&(t.innerHTML="",t.appendChild(s))}}ot.$name=Jt;ot.$version="2.0.0";var ye=':host{display:inline-block;height:1em;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1em}:host:after,:host:before{background-color:var(--theme-color);content:"";display:block;position:absolute}:host:before{height:1px;left:0;top:50%;transform:translateY(-50%);width:100%}:host:after{height:100%;left:50%;top:0;transform:translateX(-50%);width:1px}:host([centered]){left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}';class rt extends R{constructor(){super(...arguments),this.$style=ye,this.centered=!1,this.slottable=!1,this.themeColor="rgba(238, 238, 238, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["centered"])}}rt.$name=Gt;rt.$version="2.0.0";var Ae=":host{display:block;height:100%;overflow:hidden;position:relative;width:100%}";const Wt=new WeakMap,Xt=new WeakMap,Yt=new WeakMap,Ht=new WeakMap,Te="both",ke="horizontal",Lt="vertical",Oe="none";class ht extends R{constructor(){super(...arguments),this.$onSelectionChange=null,this.$onSourceImageLoad=null,this.$onSourceImageTransform=null,this.$scale=1,this.$style=Ae,this.resize=Lt,this.selection="",this.slottable=!1}set $image(t){Xt.set(this,t)}get $image(){return Xt.get(this)}set $sourceImage(t){Ht.set(this,t)}get $sourceImage(){return Ht.get(this)}set $canvas(t){Wt.set(this,t)}get $canvas(){return Wt.get(this)}set $selection(t){Yt.set(this,t)}get $selection(){return Yt.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["resize","selection"])}connectedCallback(){super.connectedCallback();let t=null;if(this.selection?t=this.ownerDocument.querySelector(this.selection):t=this.closest(this.$getTagNameOf(P)),Zt(t)){this.$selection=t,this.$onSelectionChange=this.$handleSelectionChange.bind(this),E(t,M,this.$onSelectionChange);const s=t.closest(this.$getTagNameOf(Z));if(s){this.$canvas=s;const e=s.querySelector(this.$getTagNameOf(tt));e&&(this.$sourceImage=e,this.$image=e.cloneNode(!0),this.$getShadowRoot().appendChild(this.$image),this.$onSourceImageLoad=this.$handleSourceImageLoad.bind(this),this.$onSourceImageTransform=this.$handleSourceImageTransform.bind(this),E(e.$image,X,this.$onSourceImageLoad),E(e,dt,this.$onSourceImageTransform))}this.$render()}}disconnectedCallback(){const{$selection:t,$sourceImage:s}=this;t&&this.$onSelectionChange&&(C(t,M,this.$onSelectionChange),this.$onSelectionChange=null),s&&this.$onSourceImageLoad&&(C(s.$image,X,this.$onSourceImageLoad),this.$onSourceImageLoad=null),s&&this.$onSourceImageTransform&&(C(s,dt,this.$onSourceImageTransform),this.$onSourceImageTransform=null),super.disconnectedCallback()}$handleSelectionChange(t){this.$render(t.detail)}$handleSourceImageLoad(){const{$image:t,$sourceImage:s}=this,e=t.getAttribute("src"),i=s.getAttribute("src");i&&i!==e&&(t.setAttribute("src",i),t.$ready(()=>{setTimeout(()=>{this.$render()},50)}))}$handleSourceImageTransform(t){this.$render(void 0,t.detail.matrix)}$render(t,s){const{$canvas:e,$selection:i}=this;!t&&!i.hidden&&(t=i),(!t||t.x===0&&t.y===0&&t.width===0&&t.height===0)&&(t={x:0,y:0,width:e.offsetWidth,height:e.offsetHeight});const{x:n,y:r,width:a,height:c}=t,h={},{clientWidth:o,clientHeight:$}=this;let f=o,g=$,d=NaN;switch(this.resize){case Te:d=1,f=a,g=c,h.width=a,h.height=c;break;case ke:d=c>0?$/c:0,f=a*d,h.width=f;break;case Lt:d=a>0?o/a:0,g=c*d,h.height=g;break;case Oe:default:o>0?d=a>0?o/a:0:$>0&&(d=c>0?$/c:0)}this.$scale=d,this.$setStyles(h),this.$sourceImage&&this.$transformImageByOffset(s??this.$sourceImage.$getTransform(),-n,-r)}$transformImageByOffset(t,s,e){const{$image:i,$scale:n,$sourceImage:r}=this;if(r&&i&&n>=0){const[a,c,h,o,$,f]=t,g=(s*o-h*e)/(a*o-h*c),d=(e*a-c*s)/(a*o-h*c),y=a*g+h*d+$,w=c*g+o*d+f;i.$ready(m=>{this.$setStyles.call(i,{width:m.naturalWidth*n,height:m.naturalHeight*n})}),i.$setTransform(a,c,h,o,y*n,w*n)}}}ht.$name=te;ht.$version="2.0.0";/*! Cropper.js v2.0.0 | (c) 2015-present Chen Fengyuan | MIT */et.$define();rt.$define();ot.$define();nt.$define();st.$define();at.$define();it.$define();ht.$define();const Ne=qt(({app:l})=>{et.$define(),st.$define(),it.$define(),nt.$define(),at.$define(),ot.$define(),rt.$define(),ht.$define()});export{Ne as default};
