import{d as w,h as v}from"./index-BWIq0ofC.js";const P=w({inject:["manager"],props:{index:{type:Number,required:!0},disabled:{type:Boolean,default:!1}},data(){return{}},watch:{index(t){this.$el&&this.$el.sortableInfo&&(this.$el.sortableInfo.index=t)},disabled(t){t?this.removeDraggable():this.setDraggable(this.index)}},mounted(){const{disabled:t,index:e}=this.$props;t||this.setDraggable(e)},beforeUnmount(){this.disabled||this.removeDraggable()},methods:{setDraggable(t){const e=this.$el;e.sortableInfo={index:t,manager:this.manager},this.ref={node:e},this.manager.add(this.ref)},removeDraggable(){this.manager.remove(this.ref)}}});class H{constructor(){this.refs=[],this.active=null}add(e){this.refs||(this.refs=[]),this.refs.push(e)}remove(e){const i=this.getIndex(e);i!==-1&&this.refs.splice(i,1)}isActive(){return!!this.active}getActive(){return this.refs.find(({node:e})=>{var i,s;return((i=e==null?void 0:e.sortableInfo)===null||i===void 0?void 0:i.index)==((s=this===null||this===void 0?void 0:this.active)===null||s===void 0?void 0:s.index)})||null}getIndex(e){return this.refs.indexOf(e)}getRefs(){return this.refs}getOrderedRefs(){return this.refs.sort((e,i)=>e.node.sortableInfo.index-i.node.sortableInfo.index)}}const b=t=>t.touches!=null;function D(t,e){return!!t&&Object.prototype.hasOwnProperty.call(t,e)}function G(t,e,i){const s=t.slice(0);if(i>=s.length){let n=i-s.length;for(;n--+1;)s.push(void 0)}return s.splice(i,0,s.splice(e,1)[0]),s}function k(t,e){const i=t.slice(0);return e>=i.length||i.splice(e,1),i}function W(t,e,i){const s=t.slice(0);return e===s.length?s.push(i):s.splice(e,0,i),s}const m={start:["touchstart","mousedown"],move:["touchmove","mousemove"],end:["touchend","mouseup"],cancel:["touchcancel","keyup"]};function O(t,e){for(;t;){if(e(t))return t;t=t.parentNode}}function E(t,e,i){return i<t?t:i>e?e:i}function S(t){return t.substr(-2)==="px"?parseFloat(t):0}function $(t){const e=window.getComputedStyle(t);return{top:S(e.marginTop),right:S(e.marginRight),bottom:S(e.marginBottom),left:S(e.marginLeft)}}function y(t,e="page"){const i=`${e}X`,s=`${e}Y`;return{x:b(t)?t.touches[0][i]:t[i],y:b(t)?t.touches[0][s]:t[s]}}function _(t){const e=[t];for(;t;t=t.offsetParent)e.unshift(t);return e}function A(t,e){const i=_(t),s=_(e);if(i[0]!=s[0])throw"No common ancestor!";for(let n=0;n<i.length;n++)if(i[n]!=s[n])return i[n-1]}function x(t,e,i={top:0,left:0}){if(t){const s={top:i.top+t.offsetTop,left:i.left+t.offsetLeft};return t.offsetParent!==e.offsetParent?x(t.offsetParent,e,s):s}return{top:0,left:0}}function N(t){const e=t.querySelectorAll("input, textarea, select"),i=t.cloneNode(!0);return[...i.querySelectorAll("input, textarea, select")].forEach((n,r)=>{n.type!=="file"&&e[r]&&(n.value=e[r].value)}),i}function F(t,e,i){if(typeof t=="string"&&(t=+t),Array.isArray(t)||(t=[t,t]),t.length!==2)throw new Error(`lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given ${t}`);const[s,n]=t;return[L(s,e,i),L(n,e,i)]}function L(t,e,i){let s=t,n=t,r="px";if(typeof t=="string"){const o=/^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);if(o===null)throw new Error(`lockOffset value should be a number or a string of a number followed by "px" or "%". Given ${t}`);s=n=parseFloat(t),r=o[1]}if(!isFinite(s)||!isFinite(n))throw new Error(`lockOffset value should be a finite. Given ${t}`);return r==="%"&&(s=s*e/100,n=n*i/100),{x:s,y:n}}function K(t,e,i,s){const n=t-i,r=e-s;return Math.sqrt(n*n+r*r)}function X(t){return{x:t.left+t.width/2,y:t.top+t.height/2}}function R(t=[]){for(let e=0,i=t.length;e<i;e++){const s=t[e],n=s.node;if(!n)return;s.edgeOffset=null,C(n)}}function C(t,e="",i=""){t&&(t.style.transform=e,t.style.transitionDuration=i)}function B(t,e,i){const s=Math.max(e,i);return Math.min(e,i)<=t&&t<=s}function M({x:t,y:e},{top:i,left:s,width:n,height:r}){const o=B(t,s,s+n),h=B(e,i,i+r);return o&&h}const T=setTimeout,Y=w({inject:{SlicksortHub:{from:"SlicksortHub",default:null}},provide(){return{manager:this.manager}},props:{list:{type:Array,required:!0},axis:{type:String,default:"y"},distance:{type:Number,default:0},pressDelay:{type:Number,default:0},pressThreshold:{type:Number,default:5},useDragHandle:{type:Boolean,default:!1},useWindowAsScrollContainer:{type:Boolean,default:!1},hideSortableGhost:{type:Boolean,default:!0},lockToContainerEdges:{type:Boolean,default:!1},lockOffset:{type:[String,Number,Array],default:"50%"},transitionDuration:{type:Number,default:300},appendTo:{type:String,default:"body"},draggedSettlingDuration:{type:Number,default:null},group:{type:String,default:""},accept:{type:[Boolean,Array,Function],default:null},cancelKey:{type:String,default:"Escape"},block:{type:Array,default:()=>[]},lockAxis:{type:String,default:""},helperClass:{type:String,default:""},contentWindow:{type:Object,default:null},shouldCancelStart:{type:Function,default:t=>["input","textarea","select","option","button"].indexOf(t.target.tagName.toLowerCase())!==-1},getHelperDimensions:{type:Function,default:({node:t})=>({width:t.offsetWidth,height:t.offsetHeight})}},emits:["sort-start","sort-move","sort-end","sort-cancel","sort-insert","sort-remove","update:list"],data(){let t=!1;return this.group&&this.SlicksortHub&&(t=!0),{sorting:!1,hub:t?this.SlicksortHub:null,manager:new H}},mounted(){this.hub&&(this.id=this.hub.getId()),this.container=this.$el,this.document=this.container.ownerDocument||document,this._window=this.contentWindow||window,this.scrollContainer=this.useWindowAsScrollContainer?{scrollLeft:0,scrollTop:0}:this.container,this.events={start:this.handleStart,move:this.handleMove,end:this.handleEnd};for(const t in this.events)D(this.events,t)&&m[t].forEach(e=>this.container.addEventListener(e,this.events[t]));this.hub&&this.hub.addContainer(this)},beforeUnmount(){for(const t in this.events)D(this.events,t)&&m[t].forEach(e=>this.container.removeEventListener(e,this.events[t]));this.hub&&this.hub.removeContainer(this),this.dragendTimer&&clearTimeout(this.dragendTimer),this.cancelTimer&&clearTimeout(this.cancelTimer),this.pressTimer&&clearTimeout(this.pressTimer),this.autoscrollInterval&&clearInterval(this.autoscrollInterval)},methods:{handleStart(t){const{distance:e,shouldCancelStart:i}=this.$props;if(!b(t)&&t.button===2||i(t))return!1;this._touched=!0,this._pos=y(t);const s=t.target,n=O(s,r=>r.sortableInfo!=null);if(n&&n.sortableInfo&&this.nodeIsChild(n)&&!this.sorting){const{useDragHandle:r}=this.$props,{index:o}=n.sortableInfo;if(r&&!O(s,h=>h.sortableHandle!=null))return;this.manager.active={index:o},s.tagName.toLowerCase()==="a"&&t.preventDefault(),e||(this.pressDelay===0?this.handlePress(t):this.pressTimer=T(()=>this.handlePress(t),this.pressDelay))}},nodeIsChild(t){return t.sortableInfo.manager===this.manager},handleMove(t){const{distance:e,pressThreshold:i}=this.$props;if(!this.sorting&&this._touched){const s=y(t);this._delta={x:this._pos.x-s.x,y:this._pos.y-s.y};const n=Math.abs(this._delta.x)+Math.abs(this._delta.y);!e&&(!i||i&&n>=i)?(this.cancelTimer&&clearTimeout(this.cancelTimer),this.cancelTimer=T(this.cancel,0)):e&&n>=e&&this.manager.isActive()&&this.handlePress(t)}},handleEnd(){if(!this._touched)return;const{distance:t}=this.$props;this._touched=!1,t||this.cancel()},cancel(){this.sorting||(this.pressTimer&&clearTimeout(this.pressTimer),this.manager.active=null,this.hub&&this.hub.cancel())},handleSortCancel(t){(b(t)||t.key===this.cancelKey)&&(this.newIndex=this.index,this.canceling=!0,this.translate={x:0,y:0},this.animateNodes(),this.handleSortEnd(t))},handlePress(t){t.stopPropagation();const e=this.manager.getActive();if(e){const{getHelperDimensions:i,helperClass:s,hideSortableGhost:n,appendTo:r}=this.$props,{node:o}=e,{index:h}=o.sortableInfo,a=$(o),l=this.container.getBoundingClientRect(),u=i({index:h,node:o});this.node=o,this.margin=a,this.width=u.width,this.height=u.height,this.marginOffset={x:this.margin.left+this.margin.right,y:Math.max(this.margin.top,this.margin.bottom)},this.boundingClientRect=o.getBoundingClientRect(),this.containerBoundingRect=l,this.index=h,this.newIndex=h;const p=N(o);this.helper=this.document.querySelector(r).appendChild(p),this.helper.style.position="fixed",this.helper.style.top=`${this.boundingClientRect.top-a.top}px`,this.helper.style.left=`${this.boundingClientRect.left-a.left}px`,this.helper.style.width=`${this.width}px`,this.helper.style.height=`${this.height}px`,this.helper.style.boxSizing="border-box",this.helper.style.pointerEvents="none",n&&(this.sortableGhost=o,o.style.visibility="hidden",o.style.opacity="0"),this.hub&&(this.hub.sortStart(this),this.hub.helper=this.helper,this.hub.ghost=this.sortableGhost),this.intializeOffsets(t,this.boundingClientRect),this.offsetEdge=x(o,this.container),s&&this.helper.classList.add(...s.split(" ")),this.listenerNode=b(t)?o:this._window,m.move.forEach(d=>this.listenerNode.addEventListener(d,this.handleSortMove)),m.end.forEach(d=>this.listenerNode.addEventListener(d,this.handleSortEnd)),m.cancel.forEach(d=>this.listenerNode.addEventListener(d,this.handleSortCancel)),this.sorting=!0,this.$emit("sort-start",{event:t,node:o,index:h})}},handleSortMove(t){if(t.preventDefault(),this.updatePosition(t),this.hub){const e=this.list[this.index];this.hub.handleSortMove(t,e)}(!this.hub||this.hub.isDest(this))&&(this.animateNodes(),this.autoscroll()),this.$emit("sort-move",{event:t})},handleDropOut(){const t=this.list[this.index],e=k(this.list,this.index);return this.$emit("sort-remove",{oldIndex:this.index}),this.$emit("update:list",e),t},handleDropIn(t){const e=W(this.list,this.newIndex,t);this.$emit("sort-insert",{newIndex:this.newIndex,value:t}),this.$emit("update:list",e),this.handleDragEnd()},handleDragOut(){this.autoscrollInterval&&(clearInterval(this.autoscrollInterval),this.autoscrollInterval=null),this.hub.isSource(this)?(this.translate={x:1e4,y:1e4},this.animateNodes()):(this.manager.getRefs().forEach(t=>{t.node.style.transform=""}),this.dragendTimer=T(this.handleDragEnd,this.transitionDuration||0))},handleDragEnd(){this.autoscrollInterval&&(clearInterval(this.autoscrollInterval),this.autoscrollInterval=null),R(this.manager.getRefs()),this.sortableGhost&&(this.sortableGhost.remove(),this.sortableGhost=null),this.dragendTimer&&(clearTimeout(this.dragendTimer),this.dragendTimer=null),this.manager.active=null,this._touched=!1,this.sorting=!1},intializeOffsets(t,e){const{useWindowAsScrollContainer:i,containerBoundingRect:s,_window:n}=this;this.marginOffset={x:this.margin.left+this.margin.right,y:Math.max(this.margin.top,this.margin.bottom)},this._axis={x:this.axis.indexOf("x")>=0,y:this.axis.indexOf("y")>=0},this.initialOffset=y(t),this.initialScroll={top:this.scrollContainer.scrollTop,left:this.scrollContainer.scrollLeft},this.initialWindowScroll={top:window.pageYOffset,left:window.pageXOffset},this.translate={x:0,y:0},this.minTranslate={},this.maxTranslate={},this._axis.x&&(this.minTranslate.x=(i?0:s.left)-e.left-this.width/2,this.maxTranslate.x=(i?n.innerWidth:s.left+s.width)-e.left-this.width/2),this._axis.y&&(this.minTranslate.y=(i?0:s.top)-e.top-this.height/2,this.maxTranslate.y=(i?n.innerHeight:s.top+s.height)-e.top-this.height/2)},handleDragIn(t,e,i){if(this.hub.isSource(this))return;this.dragendTimer&&(this.handleDragEnd(),clearTimeout(this.dragendTimer),this.dragendTimer=null);const s=this.manager.getRefs();this.index=s.length,this.manager.active={index:this.index};const n=this.container.getBoundingClientRect(),r=i.getBoundingClientRect();this.containerBoundingRect=n,this.sortableGhost=N(e),this.container.appendChild(this.sortableGhost);const o=this.sortableGhost.getBoundingClientRect();this.boundingClientRect=o,this.margin=$(this.sortableGhost),this.width=o.width,this.height=o.height,this.offsetEdge=x(this.sortableGhost,this.container),this.intializeOffsets(t,o),this.initialOffset.x+=o.x-r.x,this.initialOffset.y+=o.y-r.y,this.sorting=!0},handleSortEnd(t){this.listenerNode&&(m.move.forEach(s=>this.listenerNode.removeEventListener(s,this.handleSortMove)),m.end.forEach(s=>this.listenerNode.removeEventListener(s,this.handleSortEnd)),m.cancel.forEach(s=>this.listenerNode.removeEventListener(s,this.handleSortCancel)));const e=this.manager.getRefs();this.helper&&this.helperClass&&this.helper.classList.remove(...this.helperClass.split(" ")),this.autoscrollInterval&&clearInterval(this.autoscrollInterval),this.autoscrollInterval=null;const i=()=>{this.helper&&(this.helper.remove(),this.helper=null),this.hideSortableGhost&&this.sortableGhost&&(this.sortableGhost.style.visibility="",this.sortableGhost.style.opacity=""),R(e),this.hub&&!this.hub.isDest(this)?this.canceling?this.hub.cancel():this.hub.handleSortEnd():this.canceling?this.$emit("sort-cancel",{event:t}):(this.$emit("sort-end",{event:t,oldIndex:this.index,newIndex:this.newIndex}),this.$emit("update:list",G(this.list,this.index,this.newIndex))),this.manager.active=null,this._touched=!1,this.canceling=!1,this.sorting=!1};this.transitionDuration||this.draggedSettlingDuration?this.transitionHelperIntoPlace(e,i):i()},transitionHelperIntoPlace(t,e){if(this.draggedSettlingDuration===0||t.length===0||!this.helper)return Promise.resolve();const i=t[this.index].node;let s=0,n=0;const r={top:window.pageYOffset-this.initialWindowScroll.top,left:window.pageXOffset-this.initialWindowScroll.left};if(this.hub&&!this.hub.isDest(this)&&!this.canceling){const l=this.hub.getDest();if(!l)return;const u=l.newIndex,p=l.manager.getOrderedRefs(),d=u<p.length?p[u].node:l.sortableGhost,c=A(i,d),f=x(i,c),g=x(d,c);s=g.left-f.left-r.left,n=g.top-f.top-r.top}else{const l=t[this.newIndex].node,u={left:this.scrollContainer.scrollLeft-this.initialScroll.left+r.left,top:this.scrollContainer.scrollTop-this.initialScroll.top+r.top};s=-u.left,this.translate&&this.translate.x>0?s+=l.offsetLeft+l.offsetWidth-(i.offsetLeft+i.offsetWidth):s+=l.offsetLeft-i.offsetLeft,n=-u.top,this.translate&&this.translate.y>0?n+=l.offsetTop+l.offsetHeight-(i.offsetTop+i.offsetHeight):n+=l.offsetTop-i.offsetTop}const o=this.draggedSettlingDuration!==null?this.draggedSettlingDuration:this.transitionDuration;C(this.helper,`translate3d(${s}px,${n}px, 0)`,`${o}ms`);const h=l=>{(!l||l.propertyName==="transform")&&(clearTimeout(a),C(this.helper),e())},a=setTimeout(h,o+10);this.helper.addEventListener("transitionend",h)},updatePosition(t){const{lockAxis:e,lockToContainerEdges:i}=this.$props,s=y(t),n={x:s.x-this.initialOffset.x,y:s.y-this.initialOffset.y};if(n.y-=window.pageYOffset-this.initialWindowScroll.top,n.x-=window.pageXOffset-this.initialWindowScroll.left,this.translate=n,i){const[r,o]=F(this.lockOffset,this.height,this.width),h={x:this.width/2-r.x,y:this.height/2-r.y},a={x:this.width/2-o.x,y:this.height/2-o.y};this.minTranslate.x&&this.maxTranslate.x&&(n.x=E(this.minTranslate.x+h.x,this.maxTranslate.x-a.x,n.x)),this.minTranslate.y&&this.maxTranslate.y&&(n.y=E(this.minTranslate.y+h.y,this.maxTranslate.y-a.y,n.y))}e==="x"?n.y=0:e==="y"&&(n.x=0),this.helper&&(this.helper.style.transform=`translate3d(${n.x}px,${n.y}px, 0)`)},animateNodes(){const{transitionDuration:t,hideSortableGhost:e}=this.$props,i=this.manager.getOrderedRefs(),s={left:this.scrollContainer.scrollLeft-this.initialScroll.left,top:this.scrollContainer.scrollTop-this.initialScroll.top},n={left:this.offsetEdge.left+this.translate.x+s.left,top:this.offsetEdge.top+this.translate.y+s.top},r={top:window.pageYOffset-this.initialWindowScroll.top,left:window.pageXOffset-this.initialWindowScroll.left};this.newIndex=null;for(let o=0,h=i.length;o<h;o++){const{node:a}=i[o],l=a.sortableInfo.index,u=a.offsetWidth,p=a.offsetHeight,d={width:this.width>u?u/2:this.width/2,height:this.height>p?p/2:this.height/2},c={x:0,y:0};let{edgeOffset:f}=i[o];f||(i[o].edgeOffset=f=x(a,this.container));const g=o<i.length-1&&i[o+1],I=o>0&&i[o-1];if(g&&!g.edgeOffset&&(g.edgeOffset=x(g.node,this.container)),l===this.index){e&&(this.sortableGhost=a,a.style.visibility="hidden",a.style.opacity="0");continue}t&&(a.style.transitionDuration=`${t}ms`),this._axis.x?this._axis.y?l<this.index&&(n.left+r.left-d.width<=f.left&&n.top+r.top<=f.top+d.height||n.top+r.top+d.height<=f.top)?(c.x=this.width+this.marginOffset.x,f.left+c.x>this.containerBoundingRect.width-d.width&&g&&(c.x=g.edgeOffset.left-f.left,c.y=g.edgeOffset.top-f.top),this.newIndex===null&&(this.newIndex=l)):l>this.index&&(n.left+r.left+d.width>=f.left&&n.top+r.top+d.height>=f.top||n.top+r.top+d.height>=f.top+p)&&(c.x=-(this.width+this.marginOffset.x),f.left+c.x<this.containerBoundingRect.left+d.width&&I&&(c.x=I.edgeOffset.left-f.left,c.y=I.edgeOffset.top-f.top),this.newIndex=l):l>this.index&&n.left+r.left+d.width>=f.left?(c.x=-(this.width+this.marginOffset.x),this.newIndex=l):l<this.index&&n.left+r.left<=f.left+d.width&&(c.x=this.width+this.marginOffset.x,this.newIndex==null&&(this.newIndex=l)):this._axis.y&&(l>this.index&&n.top+r.top+d.height>=f.top?(c.y=-(this.height+this.marginOffset.y),this.newIndex=l):l<this.index&&n.top+r.top<=f.top+d.height&&(c.y=this.height+this.marginOffset.y,this.newIndex==null&&(this.newIndex=l))),a.style.transform=`translate3d(${c.x}px,${c.y}px,0)`}this.newIndex==null&&(this.newIndex=this.index)},autoscroll(){const t=this.translate,e={x:0,y:0},i={x:1,y:1},s={x:10,y:10};t.y>=this.maxTranslate.y-this.height/2?(e.y=1,i.y=s.y*Math.abs((this.maxTranslate.y-this.height/2-t.y)/this.height)):t.x>=this.maxTranslate.x-this.width/2?(e.x=1,i.x=s.x*Math.abs((this.maxTranslate.x-this.width/2-t.x)/this.width)):t.y<=this.minTranslate.y+this.height/2?(e.y=-1,i.y=s.y*Math.abs((t.y-this.height/2-this.minTranslate.y)/this.height)):t.x<=this.minTranslate.x+this.width/2&&(e.x=-1,i.x=s.x*Math.abs((t.x-this.width/2-this.minTranslate.x)/this.width)),this.autoscrollInterval&&(clearInterval(this.autoscrollInterval),this.autoscrollInterval=null),(e.x!==0||e.y!==0)&&(this.autoscrollInterval=window.setInterval(()=>{const n={left:1*i.x*e.x,top:1*i.y*e.y};this.useWindowAsScrollContainer?this._window.scrollBy(n.left,n.top):(this.scrollContainer.scrollTop+=n.top,this.scrollContainer.scrollLeft+=n.left),this.translate.x+=n.left,this.translate.y+=n.top,this.animateNodes()},5))}}}),q={beforeMount(t){t.sortableHandle=!0}},j=w({name:"SlickItem",mixins:[P],props:{tag:{type:String,default:"div"}},render(){var t,e;return v(this.tag,(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t))}}),Z=w({name:"SlickList",mixins:[Y],props:{tag:{type:String,default:"div"},itemKey:{type:[String,Function],default:"id"}},render(){var t,e;return this.$slots.item?v(this.tag,this.list.map((i,s)=>{let n;if(i!=null){if(typeof this.itemKey=="function")n=this.itemKey(i);else if(typeof i=="object"&&D(i,this.itemKey)&&typeof i[this.itemKey]=="string")n=i[this.itemKey];else if(typeof i=="string")n=i;else throw new Error("Cannot find key for item, use the item-key prop and pass a function or string");return v(j,{key:n,index:s},{default:()=>{var r,o;return(o=(r=this.$slots).item)===null||o===void 0?void 0:o.call(r,{item:i,index:s})}})}})):v(this.tag,(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t))}}),tt=w({props:{tag:{type:String,default:"span"}},mounted(){this.$el.sortableHandle=!0},render(){var t,e;return v(this.tag,(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t))}});let z=1;function U(t,e,i){return e.id===t.id?!0:t.block&&t.block.includes(e.group)?!1:typeof t.accept=="function"?t.accept({dest:t,source:e,payload:i}):typeof t.accept=="boolean"?t.accept:!!(t.accept&&t.accept.includes(e.group)||t.group===e.group)}function V({x:t,y:e},i,s){if(M({x:t,y:e},s.container.getBoundingClientRect()))return s;let n=null,r=1/0;for(let o=0;o<i.length;o++){const h=i[o],a=h.container.getBoundingClientRect();if(M({x:t,y:e},a))return h;const u=X(a),p=K(t,e,u.x,u.y);p<r&&(n=h,r=p)}return n}class J{constructor(){this.helper=null,this.ghost=null,this.refs=[],this.source=null,this.dest=null}getId(){return""+z++}isSource({id:e}){var i;return((i=this.source)===null||i===void 0?void 0:i.id)===e}getSource(){return this.source}isDest({id:e}){var i;return((i=this.dest)===null||i===void 0?void 0:i.id)===e}getDest(){return this.dest}addContainer(e){this.refs.push(e)}removeContainer(e){this.refs=this.refs.filter(i=>i.id!==e.id)}sortStart(e){this.source=e,this.dest=e}handleSortMove(e,i){var s,n,r,o;const h=this.dest,a=this.source;if(!h||!a)return;const l=this.refs,u=y(e,"client"),p=V(u,l,h)||h;h.id!==p.id&&U(p,a,i)&&(this.dest=p,h.handleDragOut(),p.handleDragIn(e,this.ghost,this.helper)),h.id!==((s=this.source)===null||s===void 0?void 0:s.id)&&((n=this.dest)===null||n===void 0||n.updatePosition(e),(r=this.dest)===null||r===void 0||r.animateNodes(),(o=this.dest)===null||o===void 0||o.autoscroll())}handleSortEnd(){var e,i,s,n;if(((e=this.source)===null||e===void 0?void 0:e.id)===((i=this.dest)===null||i===void 0?void 0:i.id))return;const r=(s=this.source)===null||s===void 0?void 0:s.handleDropOut();(n=this.dest)===null||n===void 0||n.handleDropIn(r),this.reset()}reset(){this.source=null,this.dest=null,this.helper=null,this.ghost=null}cancel(){var e;(e=this.dest)===null||e===void 0||e.handleDragEnd(),this.reset()}}const et={install(t){t.directive("drag-handle",q),t.provide("SlicksortHub",new J)}};export{tt as D,j as S,Z as a,et as p};
