const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AppBreadcrumbs-DYvi8oxn.js","assets/index-Bhd6CteR.js","assets/index-HNifYG8Q.css","assets/AppTabs-CwdLdCc0.js","assets/AppTabs-BmhPnZJE.css"])))=>i.map(i=>d[i]);
import{d as k,bv as j,a as I,u as V,_ as w,aq as D,bG as O,B as s,C as d,E as r,F as a,ac as u,N as g,aL as U,aW as y,O as _,R as p,ah as f,ap as z,ab as S,f as A,ey as F,ak as P,H as h,ai as v,aX as T,aa as C,ez as G,b9 as Q,r as B,eA as H,ce as W,cg as Y,c7 as X,cb as Z,bF as J,eB as K,ev as $,c9 as ee,ar as te,I as R,$ as ae,am as re,eC as ne,m as ie,em as se,Y as L,Z as M,a7 as E,S as le,bk as oe,eD as ce,eE as de,A as me,Q as ue,G as fe}from"./index-Bhd6CteR.js";import{a as be,A as _e}from"./AppHeader-qAAtQCxR.js";import{d as pe,a as he}from"./index-BSkhW1H0.js";import"./ClosePopup-CA_H_152.js";import"./BaseAvatar-DkX-D0Xl.js";import"./AppImage-CzkPfClj.js";import"./FileManagerService-B4ot9pJ5.js";import"./useAxios-wGJYVDjS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useAuth-DCHNFfdB.js";const ge=k({__name:"MenuItem",props:{item:{},darkText:{default:"text-white"},lightText:{default:"text-black"},iconSize:{default:"sm"},dense:{type:Boolean,default:!1}},setup(l,{expose:i}){i();const t=j(),{t:e}=I(),{getCurrentPath:m}=V(),c={$q:t,t:e,getCurrentPath:m};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}});function xe(l,i,t,e,m,c){return D((s(),d(S,z(l.$attrs,{to:t.item.to,clickable:"",dense:t.dense,"active-class":t.item.noActiveLink?"q-item-no-link-highlighting":"active-menu-link",class:t.item.to==e.getCurrentPath(!1)?"text-primary":e.$q.dark.isActive?t.darkText:t.lightText}),{default:r(()=>[a(u,{side:""},{default:r(()=>[a(g,{name:t.item.icon,class:U(t.item.to==e.getCurrentPath(!1)?"text-primary":"q-text-black"),size:t.iconSize},null,8,["name","class","size"])]),_:1}),a(u,null,{default:r(()=>{var n;return[a(y,null,{default:r(()=>{var b;return[_(p(((b=t.item)==null?void 0:b.translate)!==!1?e.t(`${t.item.title}`):t.item.title),1)]}),_:1}),(n=t.item)!=null&&n.caption?(s(),d(y,{key:0,caption:"",lines:"1"},{default:r(()=>[_(p(t.item.caption),1)]),_:1})):f("",!0)]}),_:1})]),_:1},16,["to","dense","active-class","class"])),[[O]])}const ve=w(ge,[["render",xe],["__file","MenuItem.vue"]]),ke=k({__name:"MenuItems",props:{menuItems:{},darkText:{},lightText:{},dark:{type:Boolean,default:!1},iconSize:{default:"sm"},dense:{type:Boolean,default:!1}},setup(l,{expose:i}){i();const{t}=I(),{getCurrentPath:e}=V(),m=A(()=>e(!1)),c={t,getCurrentPath:e,currentUrlPath:m,MenuItem:ve,get checkExpansionChildActive(){return F},get mdiChevronDown(){return pe},get mdiChevronRight(){return he}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}});function we(l,i,t,e,m,c){return s(),d(Q,z(l.$attrs,{padding:""}),{default:r(()=>[P(l.$slots,"before"),t.menuItems.length>0?(s(!0),h(v,{key:0},T(t.menuItems,(n,b)=>(s(),h(v,{key:`parent-${b}`},[n.border?(s(),d(C,{key:0})):f("",!0),n.header?(s(),d(y,{key:1,header:""},{default:r(()=>[_(p((n==null?void 0:n.translate)!==!1?e.t(`${n.header}`):n.header),1)]),_:2},1024)):f("",!0),n.pages&&n.pages.length>0?(s(!0),h(v,{key:2},T(n.pages,(o,x)=>(s(),h(v,{key:`parent-${b}-page-${x}`},[o.items?(s(),d(G,{key:1,icon:o.icon,label:(o==null?void 0:o.translate)!==!1?e.t(`${o.title}`):o.title,"default-opened":e.checkExpansionChildActive(e.currentUrlPath,o.items),"expand-icon":e.mdiChevronRight,"expanded-icon":e.mdiChevronDown,"expand-icon-class":"text-muted",dense:t.dense},{header:r(()=>[a(u,{avatar:""},{default:r(()=>[a(g,{name:o.icon,size:t.iconSize},null,8,["name","size"])]),_:2},1024),a(u,null,{default:r(()=>[_(p((o==null?void 0:o.translate)!==!1?e.t(`${o.title}`):o.title),1)]),_:2},1024)]),default:r(()=>[D((s(),d(Q,{clickable:"",class:"q-pl-sm"},{default:r(()=>[(s(!0),h(v,null,T(o.items,(q,N)=>(s(),d(e.MenuItem,{key:`parent-${b}-page-${x}-sub-${N}`,"light-text":t.lightText,"dark-text":t.darkText,item:q},null,8,["light-text","dark-text","item"]))),128))]),_:2},1024)),[[O]])]),_:2},1032,["icon","label","default-opened","expand-icon","expanded-icon","dense"])):(s(),d(e.MenuItem,{key:0,"dark-text":t.darkText,"light-text":t.lightText,item:o},null,8,["dark-text","light-text","item"]))],64))),128)):f("",!0)],64))),128)):f("",!0),P(l.$slots,"after")]),_:3},16)}const Se=w(ke,[["render",we],["__file","MenuItems.vue"]]),ye=k({__name:"BackendDrawer",props:{overlay:{type:Boolean,default:!1},miniToOverlay:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},width:{default:250},showUserSetting:{type:Boolean,default:!0}},setup(l,{expose:i}){i();const t=B(!0),e=H(),{t:m}=I(),c=W(),n=B(!1),b=B(""),x={drawerModel:t,drawerStore:e,t:m,langugeAndThemeStore:c,miniState:n,searchText:b,additionalMenu:[{border:!0,translate:!1,header:"Example",pages:[{icon:"bi-list",title:"Composables",translate:!1,items:[{icon:"bi-database",permission:"",title:"useAxios",translate:!1,to:"/example/composables/use-axios"},{icon:"bi-chevron-right",permission:"",title:"useBase",translate:!1,to:"/example/composables/use-base"},{icon:"bi-file-earmark",permission:"",title:"usePageFetch",translate:!1,to:"/example/composables/use-pagefecth"}]},{icon:"bi-brush",title:"Quasar UI",translate:!1,items:[{icon:"bi-person-circle",permission:"",title:"Avatar",translate:!1,to:"/example/ui/avatar"},{icon:"bi-app",permission:"",title:"Button",translate:!1,to:"/example/ui/button"},{icon:"bi-calendar",permission:"",title:"Date-time picker",translate:!1,to:"/example/ui/date-picker"},{icon:"bi-upload",permission:"",title:"File picker",translate:!1,to:"/example/ui/file-picker"},{icon:"bi-chevron-expand",permission:"",title:"Select",translate:!1,to:"/example/ui/select"},{icon:"bi-toggle-off",permission:"",title:"Toggle",translate:!1,to:"/example/ui/toggle"}]},{icon:"bi-pie-chart",title:"Charts",translate:!1,items:[{icon:"bi-bar-chart",permission:"",title:"Bar",translate:!1,to:"/example/charts/bar"}]},{icon:$,permission:"",title:"Chat",translate:!1,to:"/chats"},{icon:"bi-cursor-text",permission:"",title:"Content text",caption:"Display user input",translate:!1,to:"/example/content-text"},{icon:"bi-emoji-smile",permission:"",title:"Emoji picker",translate:!1,to:"/example/emoji-picker"},{icon:"bi-crop",permission:"",title:"Image cropper",translate:!1,to:"/example/image-cropper"},{icon:"bi-file-image",permission:"",title:"Image/Pdf View",translate:!1,to:"/example/image-view"},{icon:"bi-markdown",permission:"",title:"Markdown editor",translate:!1,to:"/example/markdown-editor"},{icon:"bi-file",permission:"",title:"Result",caption:"Error, Success, 404",translate:!1,to:"/example/result"},{icon:"bi-arrow-left-right",permission:"",title:"Swiper",translate:!1,to:"/example/swiper"},{icon:"bi-funnel",permission:"",title:"Sort items",translate:!1,to:"/example/sort-items"},{icon:ee,permission:"",title:"Social feed",translate:!1,to:"/feed"},{icon:"bi-arrow-down-up",permission:"",title:"Virtual scroller",translate:!1,to:"/example/virtual-scroller"}]}],MenuItems:Se,get getYearNow(){return Y},get biGear(){return X},get biQuestionCircle(){return Z},get biSearch(){return J},get biCommand(){return K},UserNavSetting:be};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}});function Ce(l,i,t,e,m,c){return s(),d(ne,{modelValue:e.drawerModel,"onUpdate:modelValue":i[1]||(i[1]=n=>e.drawerModel=n),"show-if-above":"",width:t.width,overlay:t.overlay,bordered:t.bordered,"mini-to-overlay":t.miniToOverlay&&!e.langugeAndThemeStore.leftDrawerOpen,mini:e.miniState&&!e.langugeAndThemeStore.leftDrawerOpen,onMouseover:i[2]||(i[2]=n=>e.miniState=!1),onMouseout:i[3]||(i[3]=n=>e.miniState=!0),class:"drawer-bg"},{default:r(()=>[a(re,{class:"fit"},{default:r(()=>[D(R("div",null,[a(e.UserNavSetting,{class:"q-pt-md"}),a(ae,{modelValue:e.searchText,"onUpdate:modelValue":i[0]||(i[0]=n=>e.searchText=n),class:"q-pa-md",outlined:"",dense:""},{prepend:r(()=>[a(g,{name:e.biSearch,size:"xs"},null,8,["name"])]),append:r(()=>[a(g,{name:e.biCommand,size:"xs"},null,8,["name"])]),_:1},8,["modelValue"])],512),[[te,!e.miniState||e.langugeAndThemeStore.leftDrawerOpen]]),a(e.MenuItems,{"menu-items":e.drawerStore.drawers},null,8,["menu-items"]),a(e.MenuItems,{"menu-items":e.additionalMenu},{after:r(()=>[a(C),a(S,{clickable:""},{default:r(()=>[a(u,{side:""},{default:r(()=>[a(g,{class:"q-text-black",name:e.biQuestionCircle},null,8,["name"])]),_:1}),a(u,null,{default:r(()=>[_(p(e.t("base.help")),1)]),_:1})]),_:1}),a(S,{clickable:"",to:"/settings"},{default:r(()=>[a(u,{side:""},{default:r(()=>[a(g,{class:"q-text-black",name:e.biGear},null,8,["name"])]),_:1}),a(u,null,{default:r(()=>[_(p(e.t("base.setting")),1)]),_:1})]),_:1}),a(C),a(S,null,{default:r(()=>[a(u,null,{default:r(()=>[a(y,{caption:""},{default:r(()=>[_(p(`@ ${e.getYearNow()} ${e.t("app.monogram")}`),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","width","overlay","bordered","mini-to-overlay","mini"])}const Te=w(ye,[["render",Ce],["__file","BackendDrawer.vue"]]),Be=()=>{const l=ie(),i=A(()=>l.meta.breadcrumbs),t=A(()=>l.meta.tabs);return{breadcrumbs:i,tabs:t}},Ae=k({__name:"LayoutBreadcrumbTab",setup(l,{expose:i}){i();const t=L(()=>M(()=>import("./AppBreadcrumbs-DYvi8oxn.js"),__vite__mapDeps([0,1,2]))),e=L(()=>M(()=>import("./AppTabs-CwdLdCc0.js"),__vite__mapDeps([3,1,2,4]))),{breadcrumbs:m,tabs:c}=Be(),n={AppBreadcrumbs:t,AppTabs:e,breadcrumbs:m,tabs:c,get biChevronRight(){return se}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Ie={key:0,class:"row q-mt-lg content-limit"},De={class:"col"};function Pe(l,i,t,e,m,c){return e.breadcrumbs||e.tabs?(s(),h("div",Ie,[R("div",De,[a(le,{flat:"",class:"bg-transparent"},{default:r(()=>[e.breadcrumbs&&e.breadcrumbs.length>0?(s(),d(E,{key:0,flat:"",bordered:"",class:"rounded-borders"},{default:r(()=>[a(e.AppBreadcrumbs,{breadcrumbs:e.breadcrumbs,"separator-icon":e.biChevronRight},null,8,["breadcrumbs","separator-icon"])]),_:1})):f("",!0),e.tabs&&e.tabs.length>0&&e.breadcrumbs&&e.breadcrumbs.length>0?(s(),d(C,{key:1})):f("",!0),e.tabs&&e.tabs.length>0?(s(),d(E,{key:2},{default:r(()=>[a(e.AppTabs,{items:e.tabs},null,8,["items"])]),_:1})):f("",!0)]),_:1})])])):f("",!0)}const Qe=w(Ae,[["render",Pe],["__file","LayoutBreadcrumbTab.vue"]]),Le=k({preFetch({redirect:l}){oe().isHavePermission(ce)||l({path:"/auth/login"})},__name:"DefultLayout",setup(l,{expose:i}){i();const t={AppHeader:_e,BackendDrawer:Te,LayoutBreadcrumbTab:Qe,get biWindowSidebar(){return de}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}});function Me(l,i,t,e,m,c){const n=me("router-view");return s(),d(ue,{view:"lHh Lpr lff"},{default:r(()=>[a(e.AppHeader,{frontend:!1,"show-togle-drawer":!0,"show-logo":!0,bordered:"","hamberger-icon":e.biWindowSidebar},null,8,["hamberger-icon"]),a(e.BackendDrawer,{bordered:""}),a(fe,null,{default:r(()=>[a(e.LayoutBreadcrumbTab),a(n)]),_:1})]),_:1})}const Ge=w(Le,[["render",Me],["__file","DefultLayout.vue"]]);export{Ge as default};
