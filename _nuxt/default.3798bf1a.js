import{h as D,r as c,o as d,f as m,w as i,b as u,c as j,F as R,k as A,j as h,d as K,t as N,l as x,K as I,m as O,q as M,s as F,P as V,x as H,y as T,L as q,R as z,z as B,A as E,S as U,B as G,C as J,T as P,D as Q,g as W}from"./entry.aa3539cc.js";function S(e){return e!==null&&typeof e=="object"}function $(e,a,t=".",r){if(!S(a))return $(e,{},t,r);const n=Object.assign({},a);for(const o in e){if(o==="__proto__"||o==="constructor")continue;const l=e[o];l!=null&&(r&&r(n,o,l,t)||(Array.isArray(l)&&Array.isArray(n[o])?n[o]=[...l,...n[o]]:S(l)&&S(n[o])?n[o]=$(l,n[o],(t?`${t}.`:"")+o.toString(),r):n[o]=l))}return n}function X(e){return(...a)=>a.reduce((t,r)=>$(t,r,"",e),{})}const Y=X(),C=D("layouts",{state:()=>({drawer:!1,menuList:[{title:"Inicio",to:"/"},{title:"Noticias",to:"/notices"},{title:"Sobre mi",to:"/aboutMe"},{title:"proyectos",to:"/projects/"}],socialMedia:[{icon:"mdi-twitter",href:"https://twitter.com/Krashmello"},{icon:"mdi-github",href:"https://github.com/KrashMello"},{icon:"mdi-twitch",href:"https://www.twitch.tv/krashmello"}]}),getters:{},actions:{setDrawer(){this.drawer=!this.drawer}}}),Z={__name:"navbar",setup(e){let a=C();const{menuList:t,socialMedia:r}=a;return(n,o)=>{const l=c("v-btn"),_=c("v-col"),s=c("v-icon"),k=c("v-img"),y=c("v-row"),g=c("v-container"),b=c("v-app-bar");return d(),m(b,{flat:"",color:"background"},{default:i(()=>[u(g,{fluid:""},{default:i(()=>[u(y,{justify:"center"},{default:i(()=>[n.$vuetify.display.mobile?(d(),m(_,{key:1,cols:"5"},{default:i(()=>[u(l,{icon:"",onClick:o[0]||(o[0]=f=>h(a).setDrawer())},{default:i(()=>[u(s,null,{default:i(()=>[K(" mdi-menu ")]),_:1})]),_:1})]),_:1})):(d(),m(_,{key:0,cols:"5",class:"d-flex justify-space-evenly align-center"},{default:i(()=>[(d(!0),j(R,null,A(h(t),(f,v)=>(d(),m(l,{key:v,to:f.to,color:"textPrimary",text:""},{default:i(()=>[K(N(f.title),1)]),_:2},1032,["to"]))),128))]),_:1})),u(_,{cols:"1",class:"d-flex justify-center align-center"},{default:i(()=>[u(k,{src:"/logo64x64.png","min-height":"32","min-width":"32","max-height":"32","max-width":"32"})]),_:1}),n.$vuetify.display.mobile?(d(),m(_,{key:3,cols:"5"})):(d(),m(_,{key:2,cols:"5",class:"d-flex justify-end"},{default:i(()=>[(d(!0),j(R,null,A(h(r),(f,v)=>(d(),m(l,{key:v,icon:f.icon,link:"",color:"textPrimary",href:f.href,target:"blank"},null,8,["icon","href"]))),128))]),_:1}))]),_:1})]),_:1})]),_:1})}}},ee=Z,te=(e,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,t=>{var r;return((r=e.params[t.slice(1)])==null?void 0:r.toString())||""}),L=(e,a)=>{const t=e.route.matched.find(n=>{var o;return((o=n.components)==null?void 0:o.default)===e.Component.type}),r=a??(t==null?void 0:t.meta.key)??(t&&te(e.route,t));return typeof r=="function"?r(e.route):r},ne=(e,a)=>({default:()=>e?x(I,e===!0?{}:e,a):a}),oe=O({name:"RouteProvider",props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const a=e.renderKey,t=e.route,r={};for(const n in e.route)Object.defineProperty(r,n,{get:()=>a===e.renderKey?e.route[n]:t[n]});return M(V,F(r)),()=>x(e.vnode,{ref:e.vnodeRef})}}),ae=O({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a,expose:t}){const r=Q(),n=H(),o=T(V,null);t({pageRef:n});const l=T(q,null);let _;return()=>x(z,{name:e.name,route:e.route,...a},{default:s=>{const k=le(o,s.route,s.Component),y=o&&o.matched.length===s.route.matched.length;if(!s.Component)return _&&!y?_:void 0;if(_&&l&&!l.isCurrent(s.route))return _;if(k&&o&&(!l||l!=null&&l.isCurrent(o)))return y?_:null;const g=L(s,e.pageKey),b=r.deferHydration(),f=!!(e.transition??s.route.meta.pageTransition??B),v=f&&ie([e.transition,s.route.meta.pageTransition,B,{onAfterLeave:()=>{r.callHook("page:transition:finish",s.Component)}}].filter(Boolean));return _=E(P,f&&v,ne(e.keepalive??s.route.meta.keepalive??J,x(U,{suspensible:!0,onPending:()=>r.callHook("page:start",s.Component),onResolve:()=>{G(()=>r.callHook("page:finish",s.Component).finally(b))}},{default:()=>x(oe,{key:g,vnode:s.Component,route:s.route,renderKey:g,trackRootNodes:f,vnodeRef:n})}))).default(),_}})}});function re(e){return Array.isArray(e)?e:e?[e]:[]}function ie(e){const a=e.map(t=>({...t,onAfterLeave:re(t.onAfterLeave)}));return Y(...a)}function le(e,a,t){if(!e)return!1;const r=a.matched.findIndex(n=>{var o;return((o=n.components)==null?void 0:o.default)===(t==null?void 0:t.type)});return!r||r===-1?!1:a.matched.slice(0,r).some((n,o)=>{var l,_,s;return((l=n.components)==null?void 0:l.default)!==((s=(_=e.matched[o])==null?void 0:_.components)==null?void 0:s.default)})||t&&L({route:a,Component:t})!==L({route:e,Component:t})}const se={__name:"footer",setup(e){const a=C(),{menuList:t,socialMedia:r}=a;return(n,o)=>{const l=c("v-img"),_=c("v-col"),s=c("v-row"),k=c("v-list-item-title"),y=c("v-list-item"),g=c("v-list"),b=c("v-btn"),f=c("v-container"),v=c("v-footer");return d(),m(v,{color:"background",padless:""},{default:i(()=>[u(f,{fluid:""},{default:i(()=>[u(s,{justify:"center"},{default:i(()=>[u(_,{cols:`${n.$vuetify.display.mobile?"6":"4"}`},{default:i(()=>[u(l,{class:"","max-height":"85","max-width":"350",src:"/full_logo.png"})]),_:1},8,["cols"])]),_:1}),u(s,{justify:"center"},{default:i(()=>[u(_,{cols:`${n.$vuetify.display.mobile?"12":"4"}`},{default:i(()=>[u(g,{dense:"","bg-color":"background"},{default:i(()=>[(d(!0),j(R,null,A(h(t),(p,w)=>(d(),m(y,{color:"nord0",key:w,to:p.to},{default:i(()=>[u(k,null,{default:i(()=>[K(N(p.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["cols"])]),_:1}),n.$vuetify.display.mobile?(d(),m(s,{key:0},{default:i(()=>[u(_,{cols:"12",class:"pa-0 d-flex justify-center"},{default:i(()=>[(d(!0),j(R,null,A(h(r),(p,w)=>(d(),m(b,{key:w,icon:p.icon,link:"",color:"textPrimary",href:p.href,target:"blank"},null,8,["icon","href"]))),128))]),_:1})]),_:1})):W("",!0)]),_:1})]),_:1})}}},ce=se,_e={__name:"default",setup(e){const a=C(),{menuList:t}=a;return(r,n)=>{const o=ee,l=c("v-list-item-title"),_=c("v-list-item"),s=c("v-list"),k=c("v-navigation-drawer"),y=ae,g=c("v-container"),b=c("v-main"),f=ce,v=c("v-app");return d(),m(v,null,{default:i(()=>[u(o),u(k,{modelValue:h(a).drawer,"onUpdate:modelValue":n[0]||(n[0]=p=>h(a).drawer=p),absolute:"",temporary:"",color:"nord0"},{default:i(()=>[u(s,{nav:"",dense:"",dark:""},{default:i(()=>[(d(!0),j(R,null,A(h(t),(p,w)=>(d(),m(_,{color:"nord7",key:w,to:p.to},{default:i(()=>[u(l,null,{default:i(()=>[K(N(p.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["modelValue"]),u(b,{class:"pb-0"},{default:i(()=>[u(g,{fluid:""},{default:i(()=>[u(y)]),_:1})]),_:1}),u(f)]),_:1})}}};export{_e as default};
