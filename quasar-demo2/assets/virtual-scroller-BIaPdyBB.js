import{e7 as ze,e8 as _e,bE as ae,B as _,C as k,e9 as $e,ea as we,eb as Ie,A as ce,ec as Te,aq as Oe,H as x,ak as w,ah as N,E as m,ai as Re,aF as Ve,ed as te,ap as Y,ee as ke,al as Ae,aC as ie,F as g,dI as de,dJ as ue,h as De,d as he,r as j,_ as fe,a as xe,dR as Me,T as Ue,cM as Pe,cN as Be,L as Ce,M as se,a7 as He,a8 as Ee,O as P,a9 as Fe,aa as Le,I as Ne,R as F,bg as je,af as re,ab as We,ac as qe,aE as Qe,S as Ke}from"./index-DDZXG7TO.js";import{u as Ye}from"./useAppMeta-BT_adV4U.js";import"./use-meta-DbSRbusI.js";function Xe(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var i=e.indexOf("Trident/");if(i>0){var s=e.indexOf("rv:");return parseInt(e.substring(s+3,e.indexOf(".",s)),10)}var r=e.indexOf("Edge/");return r>0?parseInt(e.substring(r+5,e.indexOf(".",r)),10):-1}let B;function W(){W.init||(W.init=!0,B=Xe()!==-1)}var H={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){W(),ae(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",B&&this.$el.appendChild(e),e.data="about:blank",B||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!B&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const Ge=$e();ze("data-v-b329ee4c");const Je={class:"resize-observer",tabindex:"-1"};_e();const Ze=Ge((e,t,i,s,r,a)=>(_(),k("div",Je)));H.render=Ze;H.__scopeId="data-v-b329ee4c";H.__file="src/components/ResizeObserver.vue";function C(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(t){return typeof t}:C=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}function et(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tt(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function it(e,t,i){return t&&tt(e.prototype,t),e}function le(e){return st(e)||rt(e)||lt(e)||ot()}function st(e){if(Array.isArray(e))return q(e)}function rt(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function lt(e,t){if(e){if(typeof e=="string")return q(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return q(e,t)}}function q(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}function ot(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nt(e){var t;return typeof e=="function"?t={callback:e}:t=e,t}function at(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,r,a,l=function(o){for(var c=arguments.length,h=new Array(c>1?c-1:0),f=1;f<c;f++)h[f-1]=arguments[f];if(a=h,!(s&&o===r)){var T=i.leading;typeof T=="function"&&(T=T(o,r)),(!s||o!==r)&&T&&e.apply(void 0,[o].concat(le(a))),r=o,clearTimeout(s),s=setTimeout(function(){e.apply(void 0,[o].concat(le(a))),s=0},t)}};return l._clear=function(){clearTimeout(s),s=null},l}function me(e,t){if(e===t)return!0;if(C(e)==="object"){for(var i in e)if(!me(e[i],t[i]))return!1;return!0}return!1}var ct=function(){function e(t,i,s){et(this,e),this.el=t,this.observer=null,this.frozen=!1,this.createObserver(i,s)}return it(e,[{key:"createObserver",value:function(i,s){var r=this;if(this.observer&&this.destroyObserver(),!this.frozen){if(this.options=nt(i),this.callback=function(n,o){r.options.callback(n,o),n&&r.options.once&&(r.frozen=!0,r.destroyObserver())},this.callback&&this.options.throttle){var a=this.options.throttleOptions||{},l=a.leading;this.callback=at(this.callback,this.options.throttle,{leading:function(o){return l==="both"||l==="visible"&&o||l==="hidden"&&!o}})}this.oldResult=void 0,this.observer=new IntersectionObserver(function(n){var o=n[0];if(n.length>1){var c=n.find(function(f){return f.isIntersecting});c&&(o=c)}if(r.callback){var h=o.isIntersecting&&o.intersectionRatio>=r.threshold;if(h===r.oldResult)return;r.oldResult=h,r.callback(h,o)}},this.options.intersection),ae(function(){r.observer&&r.observer.observe(r.el)})}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&typeof this.options.intersection.threshold=="number"?this.options.intersection.threshold:0}}]),e}();function pe(e,t,i){var s=t.value;if(s)if(typeof IntersectionObserver>"u")console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var r=new ct(e,s,i);e._vue_visibilityState=r}}function dt(e,t,i){var s=t.value,r=t.oldValue;if(!me(s,r)){var a=e._vue_visibilityState;if(!s){ve(e);return}a?a.createObserver(s,i):pe(e,{value:s},i)}}function ve(e){var t=e._vue_visibilityState;t&&(t.destroyObserver(),delete e._vue_visibilityState)}var ut={beforeMount:pe,updated:dt,unmounted:ve};function ht(e){return{all:e=e||new Map,on:function(t,i){var s=e.get(t);s&&s.push(i)||e.set(t,[i])},off:function(t,i){var s=e.get(t);s&&s.splice(s.indexOf(i)>>>0,1)},emit:function(t,i){(e.get(t)||[]).slice().map(function(s){s(i)}),(e.get("*")||[]).slice().map(function(s){s(t,i)})}}}var ft={itemsLimit:1e3},mt=/(auto|scroll)/;function ye(e,t){return e.parentNode===null?t:ye(e.parentNode,t.concat([e]))}var L=function(t,i){return getComputedStyle(t,null).getPropertyValue(i)},pt=function(t){return L(t,"overflow")+L(t,"overflow-y")+L(t,"overflow-x")},vt=function(t){return mt.test(pt(t))};function oe(e){if(e instanceof HTMLElement||e instanceof SVGElement){for(var t=ye(e.parentNode,[]),i=0;i<t.length;i+=1)if(vt(t[i]))return t[i];return document.scrollingElement||document.documentElement}}function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(e)}var be={items:{type:Array,required:!0},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:function(t){return["vertical","horizontal"].includes(t)}},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"}};function ge(){return this.items.length&&Q(this.items[0])!=="object"}var K=!1;if(typeof window<"u"){K=!1;try{var yt=Object.defineProperty({},"passive",{get:function(){K=!0}});window.addEventListener("test",null,yt)}catch{}}let bt=0;var X={name:"RecycleScroller",components:{ResizeObserver:H},directives:{ObserveVisibility:ut},props:{...be,itemSize:{type:Number,default:null},gridItems:{type:Number,default:void 0},itemSecondarySize:{type:Number,default:void 0},minItemSize:{type:[Number,String],default:null},sizeField:{type:String,default:"size"},typeField:{type:String,default:"type"},buffer:{type:Number,default:200},pageMode:{type:Boolean,default:!1},prerender:{type:Number,default:0},emitUpdate:{type:Boolean,default:!1},updateInterval:{type:Number,default:0},skipHover:{type:Boolean,default:!1},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"},listClass:{type:[String,Object,Array],default:""},itemClass:{type:[String,Object,Array],default:""}},emits:["resize","visible","hidden","update","scroll-start","scroll-end"],data(){return{pool:[],totalSize:0,ready:!1,hoverKey:null}},computed:{sizes(){if(this.itemSize===null){const e={"-1":{accumulator:0}},t=this.items,i=this.sizeField,s=this.minItemSize;let r=1e4,a=0,l;for(let n=0,o=t.length;n<o;n++)l=t[n][i]||s,l<r&&(r=l),a+=l,e[n]={accumulator:a,size:l};return this.$_computedMinItemSize=r,e}return[]},simpleArray:ge,itemIndexByKey(){const{keyField:e,items:t}=this,i={};for(let s=0,r=t.length;s<r;s++)i[t[s][e]]=s;return i}},watch:{items(){this.updateVisibleItems(!0)},pageMode(){this.applyPageMode(),this.updateVisibleItems(!1)},sizes:{handler(){this.updateVisibleItems(!1)},deep:!0},gridItems(){this.updateVisibleItems(!0)},itemSecondarySize(){this.updateVisibleItems(!0)}},created(){this.$_startIndex=0,this.$_endIndex=0,this.$_views=new Map,this.$_unusedViews=new Map,this.$_scrollDirty=!1,this.$_lastUpdateScrollPosition=0,this.prerender&&(this.$_prerender=!0,this.updateVisibleItems(!1)),this.gridItems&&!this.itemSize&&console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems")},mounted(){this.applyPageMode(),this.$nextTick(()=>{this.$_prerender=!1,this.updateVisibleItems(!0),this.ready=!0})},activated(){const e=this.$_lastUpdateScrollPosition;typeof e=="number"&&this.$nextTick(()=>{this.scrollToPosition(e)})},beforeUnmount(){this.removeListeners()},methods:{addView(e,t,i,s,r){const a=we({id:bt++,index:t,used:!0,key:s,type:r}),l=Ie({item:i,position:0,nr:a});return e.push(l),l},unuseView(e,t=!1){const i=this.$_unusedViews,s=e.nr.type;let r=i.get(s);r||(r=[],i.set(s,r)),r.push(e),t||(e.nr.used=!1,e.position=-9999)},handleResize(){this.$emit("resize"),this.ready&&this.updateVisibleItems(!1)},handleScroll(e){if(!this.$_scrollDirty){if(this.$_scrollDirty=!0,this.$_updateTimeout)return;const t=()=>requestAnimationFrame(()=>{this.$_scrollDirty=!1;const{continuous:i}=this.updateVisibleItems(!1,!0);i||(clearTimeout(this.$_refreshTimout),this.$_refreshTimout=setTimeout(this.handleScroll,this.updateInterval+100))});t(),this.updateInterval&&(this.$_updateTimeout=setTimeout(()=>{this.$_updateTimeout=0,this.$_scrollDirty&&t()},this.updateInterval))}},handleVisibilityChange(e,t){this.ready&&(e||t.boundingClientRect.width!==0||t.boundingClientRect.height!==0?(this.$emit("visible"),requestAnimationFrame(()=>{this.updateVisibleItems(!1)})):this.$emit("hidden"))},updateVisibleItems(e,t=!1){const i=this.itemSize,s=this.gridItems||1,r=this.itemSecondarySize||i,a=this.$_computedMinItemSize,l=this.typeField,n=this.simpleArray?null:this.keyField,o=this.items,c=o.length,h=this.sizes,f=this.$_views,T=this.$_unusedViews,R=this.pool,E=this.itemIndexByKey;let b,p,A,$,I;if(!c)b=p=$=I=A=0;else if(this.$_prerender)b=$=0,p=I=Math.min(this.prerender,o.length),A=null;else{const d=this.getScroll();if(t){let y=d.start-this.$_lastUpdateScrollPosition;if(y<0&&(y=-y),i===null&&y<a||y<i)return{continuous:!0}}this.$_lastUpdateScrollPosition=d.start;const S=this.buffer;d.start-=S,d.end+=S;let v=0;if(this.$refs.before&&(v=this.$refs.before.scrollHeight,d.start-=v),this.$refs.after){const y=this.$refs.after.scrollHeight;d.end+=y}if(i===null){let y,D=0,Z=c-1,z=~~(c/2),ee;do ee=z,y=h[z].accumulator,y<d.start?D=z:z<c-1&&h[z+1].accumulator>d.start&&(Z=z),z=~~((D+Z)/2);while(z!==ee);for(z<0&&(z=0),b=z,A=h[c-1].accumulator,p=z;p<c&&h[p].accumulator<d.end;p++);for(p===-1?p=o.length-1:(p++,p>c&&(p=c)),$=b;$<c&&v+h[$].accumulator<d.start;$++);for(I=$;I<c&&v+h[I].accumulator<d.end;I++);}else{b=~~(d.start/i*s);const y=b%s;b-=y,p=Math.ceil(d.end/i*s),$=Math.max(0,Math.floor((d.start-v)/i*s)),I=Math.floor((d.end-v)/i*s),b<0&&(b=0),p>c&&(p=c),$<0&&($=0),I>c&&(I=c),A=Math.ceil(c/s)*i}}p-b>ft.itemsLimit&&this.itemsLimitError(),this.totalSize=A;let u;const M=b<=this.$_endIndex&&p>=this.$_startIndex;if(M)for(let d=0,S=R.length;d<S;d++)u=R[d],u.nr.used&&(e&&(u.nr.index=E[u.item[n]]),(u.nr.index==null||u.nr.index<b||u.nr.index>=p)&&this.unuseView(u));const J=M?null:new Map;let V,O,U;for(let d=b;d<p;d++){V=o[d];const S=n?V[n]:V;if(S==null)throw new Error(`Key is ${S} on item (keyField is '${n}')`);if(u=f.get(S),!i&&!h[d].size){u&&this.unuseView(u);continue}O=V[l];let v=T.get(O),y=!1;if(!u)M?v&&v.length?u=v.pop():u=this.addView(R,d,V,S,O):(U=J.get(O)||0,(!v||U>=v.length)&&(u=this.addView(R,d,V,S,O),this.unuseView(u,!0),v=T.get(O)),u=v[U],J.set(O,U+1)),f.delete(u.nr.key),u.nr.used=!0,u.nr.index=d,u.nr.key=S,u.nr.type=O,f.set(S,u),y=!0;else if(!u.nr.used&&(u.nr.used=!0,y=!0,v)){const D=v.indexOf(u);D!==-1&&v.splice(D,1)}u.item=V,y&&(d===o.length-1&&this.$emit("scroll-end"),d===0&&this.$emit("scroll-start")),i===null?(u.position=h[d-1].accumulator,u.offset=0):(u.position=Math.floor(d/s)*i,u.offset=d%s*r)}return this.$_startIndex=b,this.$_endIndex=p,this.emitUpdate&&this.$emit("update",b,p,$,I),clearTimeout(this.$_sortTimer),this.$_sortTimer=setTimeout(this.sortViews,this.updateInterval+300),{continuous:M}},getListenerTarget(){let e=oe(this.$el);return window.document&&(e===window.document.documentElement||e===window.document.body)&&(e=window),e},getScroll(){const{$el:e,direction:t}=this,i=t==="vertical";let s;if(this.pageMode){const r=e.getBoundingClientRect(),a=i?r.height:r.width;let l=-(i?r.top:r.left),n=i?window.innerHeight:window.innerWidth;l<0&&(n+=l,l=0),l+n>a&&(n=a-l),s={start:l,end:l+n}}else i?s={start:e.scrollTop,end:e.scrollTop+e.clientHeight}:s={start:e.scrollLeft,end:e.scrollLeft+e.clientWidth};return s},applyPageMode(){this.pageMode?this.addListeners():this.removeListeners()},addListeners(){this.listenerTarget=this.getListenerTarget(),this.listenerTarget.addEventListener("scroll",this.handleScroll,K?{passive:!0}:!1),this.listenerTarget.addEventListener("resize",this.handleResize)},removeListeners(){this.listenerTarget&&(this.listenerTarget.removeEventListener("scroll",this.handleScroll),this.listenerTarget.removeEventListener("resize",this.handleResize),this.listenerTarget=null)},scrollToItem(e){let t;const i=this.gridItems||1;this.itemSize===null?t=e>0?this.sizes[e-1].accumulator:0:t=Math.floor(e/i)*this.itemSize,this.scrollToPosition(t)},scrollToPosition(e){const t=this.direction==="vertical"?{scroll:"scrollTop",start:"top"}:{scroll:"scrollLeft",start:"left"};let i,s,r;if(this.pageMode){const a=oe(this.$el),l=a.tagName==="HTML"?0:a[t.scroll],n=a.getBoundingClientRect(),c=this.$el.getBoundingClientRect()[t.start]-n[t.start];i=a,s=t.scroll,r=e+l+c}else i=this.$el,s=t.scroll,r=e;i[s]=r},itemsLimitError(){throw setTimeout(()=>{console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.","Scroller:",this.$el),console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.")}),new Error("Rendered items limit reached")},sortViews(){this.pool.sort((e,t)=>e.nr.index-t.nr.index)}}};const gt={key:0,ref:"before",class:"vue-recycle-scroller__slot"},St={key:1,ref:"after",class:"vue-recycle-scroller__slot"};function zt(e,t,i,s,r,a){const l=ce("ResizeObserver"),n=Te("observe-visibility");return Oe((_(),x("div",{class:ie(["vue-recycle-scroller",{ready:r.ready,"page-mode":i.pageMode,[`direction-${e.direction}`]:!0}]),onScrollPassive:t[0]||(t[0]=(...o)=>a.handleScroll&&a.handleScroll(...o))},[e.$slots.before?(_(),x("div",gt,[w(e.$slots,"before")],512)):N("v-if",!0),(_(),k(te(i.listTag),{ref:"wrapper",style:Ae({[e.direction==="vertical"?"minHeight":"minWidth"]:r.totalSize+"px"}),class:ie(["vue-recycle-scroller__item-wrapper",i.listClass])},{default:m(()=>[(_(!0),x(Re,null,Ve(r.pool,o=>(_(),k(te(i.itemTag),Y({key:o.nr.id,style:r.ready?{transform:`translate${e.direction==="vertical"?"Y":"X"}(${o.position}px) translate${e.direction==="vertical"?"X":"Y"}(${o.offset}px)`,width:i.gridItems?`${e.direction==="vertical"&&i.itemSecondarySize||i.itemSize}px`:void 0,height:i.gridItems?`${e.direction==="horizontal"&&i.itemSecondarySize||i.itemSize}px`:void 0}:null,class:["vue-recycle-scroller__item-view",[i.itemClass,{hover:!i.skipHover&&r.hoverKey===o.nr.key}]]},ke(i.skipHover?{}:{mouseenter:()=>{r.hoverKey=o.nr.key},mouseleave:()=>{r.hoverKey=null}})),{default:m(()=>[w(e.$slots,"default",{item:o.item,index:o.nr.index,active:o.nr.used})]),_:2},1040,["style","class"]))),128)),w(e.$slots,"empty")]),_:3},8,["style","class"])),e.$slots.after?(_(),x("div",St,[w(e.$slots,"after")],512)):N("v-if",!0),g(l,{onNotify:a.handleResize},null,8,["onNotify"])],34)),[[n,a.handleVisibilityChange]])}X.render=zt;X.__file="src/components/RecycleScroller.vue";var G={name:"DynamicScroller",components:{RecycleScroller:X},provide(){return typeof ResizeObserver<"u"&&(this.$_resizeObserver=new ResizeObserver(e=>{requestAnimationFrame(()=>{if(Array.isArray(e)){for(const t of e)if(t.target&&t.target.$_vs_onResize){let i,s;if(t.borderBoxSize){const r=t.borderBoxSize[0];i=r.inlineSize,s=r.blockSize}else i=t.contentRect.width,s=t.contentRect.height;t.target.$_vs_onResize(t.target.$_vs_id,i,s)}}})})),{vscrollData:this.vscrollData,vscrollParent:this,vscrollResizeObserver:this.$_resizeObserver}},inheritAttrs:!1,props:{...be,minItemSize:{type:[Number,String],required:!0}},emits:["resize","visible"],data(){return{vscrollData:{active:!0,sizes:{},keyField:this.keyField,simpleArray:!1}}},computed:{simpleArray:ge,itemsWithSize(){const e=[],{items:t,keyField:i,simpleArray:s}=this,r=this.vscrollData.sizes,a=t.length;for(let l=0;l<a;l++){const n=t[l],o=s?l:n[i];let c=r[o];typeof c>"u"&&!this.$_undefinedMap[o]&&(c=0),e.push({item:n,id:o,size:c})}return e}},watch:{items(){this.forceUpdate()},simpleArray:{handler(e){this.vscrollData.simpleArray=e},immediate:!0},direction(e){this.forceUpdate(!0)},itemsWithSize(e,t){const i=this.$el.scrollTop;let s=0,r=0;const a=Math.min(e.length,t.length);for(let n=0;n<a&&!(s>=i);n++)s+=t[n].size||this.minItemSize,r+=e[n].size||this.minItemSize;const l=r-s;l!==0&&(this.$el.scrollTop+=l)}},beforeCreate(){this.$_updates=[],this.$_undefinedSizes=0,this.$_undefinedMap={},this.$_events=ht()},activated(){this.vscrollData.active=!0},deactivated(){this.vscrollData.active=!1},unmounted(){this.$_events.all.clear()},methods:{onScrollerResize(){this.$refs.scroller&&this.forceUpdate(),this.$emit("resize")},onScrollerVisible(){this.$_events.emit("vscroll:update",{force:!1}),this.$emit("visible")},forceUpdate(e=!1){(e||this.simpleArray)&&(this.vscrollData.sizes={}),this.$_events.emit("vscroll:update",{force:!0})},scrollToItem(e){const t=this.$refs.scroller;t&&t.scrollToItem(e)},getItemSize(e,t=void 0){const i=this.simpleArray?t??this.items.indexOf(e):e[this.keyField];return this.vscrollData.sizes[i]||0},scrollToBottom(){if(this.$_scrollingToBottom)return;this.$_scrollingToBottom=!0;const e=this.$el;this.$nextTick(()=>{e.scrollTop=e.scrollHeight+5e3;const t=()=>{e.scrollTop=e.scrollHeight+5e3,requestAnimationFrame(()=>{e.scrollTop=e.scrollHeight+5e3,this.$_undefinedSizes===0?this.$_scrollingToBottom=!1:requestAnimationFrame(t)})};requestAnimationFrame(t)})}}};function _t(e,t,i,s,r,a){const l=ce("RecycleScroller");return _(),k(l,Y({ref:"scroller",items:a.itemsWithSize,"min-item-size":i.minItemSize,direction:e.direction,"key-field":"id","list-tag":e.listTag,"item-tag":e.itemTag},e.$attrs,{onResize:a.onScrollerResize,onVisible:a.onScrollerVisible}),{default:m(({item:n,index:o,active:c})=>[w(e.$slots,"default",de(ue({item:n.item,index:o,active:c,itemWithSize:n})))]),before:m(()=>[w(e.$slots,"before")]),after:m(()=>[w(e.$slots,"after")]),empty:m(()=>[w(e.$slots,"empty")]),_:3},16,["items","min-item-size","direction","list-tag","item-tag","onResize","onVisible"])}G.render=_t;G.__file="src/components/DynamicScroller.vue";var Se={name:"DynamicScrollerItem",inject:["vscrollData","vscrollParent","vscrollResizeObserver"],props:{item:{required:!0},watchData:{type:Boolean,default:!1},active:{type:Boolean,required:!0},index:{type:Number,default:void 0},sizeDependencies:{type:[Array,Object],default:null},emitResize:{type:Boolean,default:!1},tag:{type:String,default:"div"}},emits:["resize"],computed:{id(){if(this.vscrollData.simpleArray)return this.index;if(this.vscrollData.keyField in this.item)return this.item[this.vscrollData.keyField];throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`)},size(){return this.vscrollData.sizes[this.id]||0},finalActive(){return this.active&&this.vscrollData.active}},watch:{watchData:"updateWatchData",id(e,t){if(this.$el.$_vs_id=this.id,this.size||this.onDataUpdate(),this.$_sizeObserved){const i=this.vscrollData.sizes[t],s=this.vscrollData.sizes[e];i!=null&&i!==s&&this.applySize(i)}},finalActive(e){this.size||(e?this.vscrollParent.$_undefinedMap[this.id]||(this.vscrollParent.$_undefinedSizes++,this.vscrollParent.$_undefinedMap[this.id]=!0):this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=!1)),this.vscrollResizeObserver?e?this.observeSize():this.unobserveSize():e&&this.$_pendingVScrollUpdate===this.id&&this.updateSize()}},created(){if(!this.$isServer&&(this.$_forceNextVScrollUpdate=null,this.updateWatchData(),!this.vscrollResizeObserver)){for(const e in this.sizeDependencies)this.$watch(()=>this.sizeDependencies[e],this.onDataUpdate);this.vscrollParent.$_events.on("vscroll:update",this.onVscrollUpdate)}},mounted(){this.finalActive&&(this.updateSize(),this.observeSize())},beforeUnmount(){this.vscrollParent.$_events.off("vscroll:update",this.onVscrollUpdate),this.unobserveSize()},methods:{updateSize(){this.finalActive?this.$_pendingSizeUpdate!==this.id&&(this.$_pendingSizeUpdate=this.id,this.$_forceNextVScrollUpdate=null,this.$_pendingVScrollUpdate=null,this.computeSize(this.id)):this.$_forceNextVScrollUpdate=this.id},updateWatchData(){this.watchData&&!this.vscrollResizeObserver?this.$_watchData=this.$watch("item",()=>{this.onDataUpdate()},{deep:!0}):this.$_watchData&&(this.$_watchData(),this.$_watchData=null)},onVscrollUpdate({force:e}){!this.finalActive&&e&&(this.$_pendingVScrollUpdate=this.id),(this.$_forceNextVScrollUpdate===this.id||e||!this.size)&&this.updateSize()},onDataUpdate(){this.updateSize()},computeSize(e){this.$nextTick(()=>{if(this.id===e){const t=this.$el.offsetWidth,i=this.$el.offsetHeight;this.applyWidthHeight(t,i)}this.$_pendingSizeUpdate=null})},applyWidthHeight(e,t){const i=~~(this.vscrollParent.direction==="vertical"?t:e);i&&this.size!==i&&this.applySize(i)},applySize(e){this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=void 0),this.vscrollData.sizes[this.id]=e,this.emitResize&&this.$emit("resize",this.id)},observeSize(){this.vscrollResizeObserver&&(this.$_sizeObserved||(this.vscrollResizeObserver.observe(this.$el),this.$el.$_vs_id=this.id,this.$el.$_vs_onResize=this.onResize,this.$_sizeObserved=!0))},unobserveSize(){this.vscrollResizeObserver&&this.$_sizeObserved&&(this.vscrollResizeObserver.unobserve(this.$el),this.$el.$_vs_onResize=void 0,this.$_sizeObserved=!1)},onResize(e,t,i){this.id===e&&this.applyWidthHeight(t,i)}},render(){return De(this.tag,this.$slots.default())}};Se.__file="src/components/DynamicScrollerItem.vue";const $t=he({__name:"BaseVirtualScroller",props:{minItemSize:{default:54},emitUpdate:{type:Boolean,default:!0},scrollAreaHeight:{default:"65vh"},keyField:{default:"id"},items:{}},emits:["on-update"],setup(e,{expose:t,emit:i}){const s=j(),r=i,a=h=>{h!=null&&s.value&&s.value.scrollToItem(h)},l=()=>{s.value&&s.value.scrollToBottom()},n=(h,f,T,R)=>{const E=R!=f;r("on-update",{viewStartIndex:h,viewEndIndex:f,visibleStartIndex:T,visibleEndIndex:R,isScrollingToTop:E})},o=()=>{};t({onScrollToBottom:l,onScrollToItem:a});const c={appScrollerRef:s,emit:r,onScrollToItem:a,onScrollToBottom:l,onUpdate:n,onResize:o,get DynamicScroller(){return G},get DynamicScrollerItem(){return Se}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}});function wt(e,t,i,s,r,a){return _(),k(s.DynamicScroller,Y(e.$attrs,{ref:"appScrollerRef",items:i.items,"emit-update":i.emitUpdate,"key-field":i.keyField,"min-item-size":i.minItemSize,style:{height:"auto",maxHeight:i.scrollAreaHeight},onResize:s.onResize,onUpdate:s.onUpdate}),{before:m(()=>[w(e.$slots,"slotBefore")]),default:m(({item:l,index:n,active:o})=>[g(s.DynamicScrollerItem,{item:l,active:o,"data-index":n},{default:m(()=>[w(e.$slots,"default",de(ue({item:l,index:n,active:o})))]),_:2},1032,["item","active","data-index"])]),after:m(()=>[w(e.$slots,"slotAfter")]),_:3},16,["items","emit-update","key-field","min-item-size","style"])}const It=fe($t,[["render",wt],["__file","BaseVirtualScroller.vue"]]),ne=1e4,Tt=he({__name:"virtual-scroller",setup(e,{expose:t}){t();const{t:i}=xe(),{setTitle:s}=Ye();s(`Virtual scroller | ${i("app.name")}`);const r=j([]),a=j(),l=Me("scrollerTestRef");Ue(()=>{for(let f=0;f<ne;f++)r.value.push({id:f+1,label:"Option "+(f+1)})});const h={t:i,setTitle:s,dataList:r,maxSize:ne,updateItem:a,scrollerTestRef:l,onVirtualScrollUpdate:f=>{console.log("onVirtualScrollUpdate",f),a.value=f},onScrollTo:f=>{l.value&&l.value.onScrollToItem(f)},scrollToBottom:()=>{l.value&&l.value.onScrollToBottom()},get biArrowDown(){return Pe},get biArrowUp(){return Be},BaseVirtualScroller:It};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),Ot={key:0};function Rt(e,t,i,s,r,a){return _(),k(Ce,{padding:""},{default:m(()=>[g(Ke,{flat:"",bordered:"",class:"content-limit"},{default:m(()=>[g(se,null,{default:m(()=>[g(He,null,{default:m(()=>[g(Ee,null,{default:m(()=>t[1]||(t[1]=[P(" Virtual scroller ")])),_:1}),g(Fe)]),_:1}),g(Le)]),_:1}),g(se,{class:"q-gutter-y-lg"},{default:m(()=>[Ne("div",null,[s.updateItem?(_(),x("p",Ot,"("+F(`${s.updateItem.viewStartIndex}-[${s.updateItem.visibleStartIndex}-${s.updateItem.visibleEndIndex}]-${s.updateItem.viewEndIndex}`)+") ",1)):N("",!0)]),g(je,null,{default:m(()=>[g(re,{icon:s.biArrowDown,"no-caps":"",label:"Scroll to bottom",onClick:s.scrollToBottom},null,8,["icon"]),g(re,{icon:s.biArrowUp,"no-caps":"",label:"Scroll to top",onClick:t[0]||(t[0]=l=>s.onScrollTo(0))},null,8,["icon"])]),_:1}),g(s.BaseVirtualScroller,{id:"scroll-chat-target-id",ref:"scrollerTestRef",class:"q-pa-sm","key-field":"id",items:s.dataList,"min-item-size":24,"scroll-area-height":"250px",onOnUpdate:s.onVirtualScrollUpdate},{slotBefore:m(()=>t[2]||(t[2]=[P(" Before Slot ")])),default:m(({item:l,index:n})=>[(_(),k(We,{key:n,dense:"",clickable:""},{default:m(()=>[g(qe,null,{default:m(()=>[g(Qe,null,{default:m(()=>[P(" #"+F(n)+" - "+F(l.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))]),slotAfter:m(()=>t[3]||(t[3]=[P(" After Slot ")])),_:1},8,["items"])]),_:1})]),_:1})]),_:1})}const Dt=fe(Tt,[["render",Rt],["__file","virtual-scroller.vue"]]);export{Dt as default};