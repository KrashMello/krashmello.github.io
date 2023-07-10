import{m as E,c as U,d as O,b as Ne,u as Ie}from"./VRow.dc8de799.js";import{ay as X,E as w,az as Oe,ax as He,e as de,c as v,aA as H,aB as ve,aC as ee,C as y,aD as V,G as g,O as me,D as K,r as G,F as J,aE as De,$ as fe,aF as Ae,aG as We,q as o,a1 as ge,aj as he,aH as Q,U as T,a6 as j,ao as je,ah as Fe,H as te,P as Me,L as ye,I as Xe,J as ne,aI as qe,N as Ye,b as Ue,al as pe,a7 as Ke,aJ as Ge,aK as ae,S as Je,aL as Qe,aM as se}from"./entry.57ea0edd.js";const Ze=["top","bottom"],et=["start","end","left","right"];function tt(e,t){let[n,a]=e.split(" ");return a||(a=X(Ze,n)?"start":X(et,n)?"top":"center"),{side:re(n,t),align:re(a,t)}}function re(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return w()({name:n??Oe(He(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...E()},setup(a,r){let{slots:s}=r;return()=>{var i;return de(a.tag,{class:[e,a.class],style:a.style},(i=s.default)==null?void 0:i.call(s))}}})}function Z(e){return ve(()=>{const t=[],n={};return e.value.background&&(ee(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(ee(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function be(e,t){const n=v(()=>({text:H(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=Z(n);return{textColorClasses:a,textColorStyles:r}}function ie(e,t){const n=v(()=>({background:H(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=Z(n);return{backgroundColorClasses:a,backgroundColorStyles:r}}const nt=["x-small","small","default","large","x-large"],_e=y({size:{type:[String,Number],default:"default"}},"size");function Se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return ve(()=>{let n,a;return X(nt,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:g(e.size),height:g(e.size)}),{sizeClasses:n,sizeStyles:a}})}const at=y({color:String,start:Boolean,end:Boolean,icon:me,...E(),..._e(),...U({tag:"i"}),...K()},"VIcon"),st=w()({name:"VIcon",props:at(),setup(e,t){let{attrs:n,slots:a}=t;const r=G(),{themeClasses:s}=J(e),{iconData:i}=De(v(()=>r.value||e.icon)),{sizeClasses:l}=Se(e),{textColorClasses:u,textColorStyles:c}=be(fe(e,"color"));return O(()=>{var h,p;const m=(h=a.default)==null?void 0:h.call(a);return m&&(r.value=(p=Ae(m).filter(b=>b.type===We&&b.children&&typeof b.children=="string")[0])==null?void 0:p.children),o(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,l.value,u.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[l.value?void 0:{fontSize:g(e.size),height:g(e.size),width:g(e.size)},c.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[m]})}),{}}});const rt=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function it(e){return{dimensionStyles:v(()=>({height:g(e.height),maxHeight:g(e.maxHeight),maxWidth:g(e.maxWidth),minHeight:g(e.minHeight),minWidth:g(e.minWidth),width:g(e.width)}))}}function ot(e){return{aspectStyles:v(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Ce=y({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...E(),...rt()},"VResponsive"),oe=w()({name:"VResponsive",props:Ce(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=ot(e),{dimensionStyles:r}=it(e);return O(()=>{var s;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[o("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&o("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),lt=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),W=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:r,...s}=e,{component:i=he,...l}=typeof a=="object"?a:{};return de(i,ge(typeof a=="string"?{name:r?"":a}:l,s,{disabled:r}),n)};function ut(e,t){if(!Q)return;const n=t.modifiers||{},a=t.value,{handler:r,options:s}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var h;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const c=(h=e._observe)==null?void 0:h[t.instance.$.uid];if(!c)return;const m=l.some(p=>p.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||m||c.init)&&r(m,l,u),m&&n.once?we(e,t):c.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function we(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const ct={mounted:ut,unmounted:we},dt=ct,vt=y({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...Ce(),...E(),...lt()},"VImg"),mt=w()({name:"VImg",directives:{intersect:dt},props:vt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const r=T(""),s=G(),i=T(e.eager?"loading":"idle"),l=T(),u=T(),c=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=v(()=>c.value.aspect||l.value/u.value||0);j(()=>e.src,()=>{h(i.value!=="idle")}),j(m,(d,f)=>{!d&&f&&s.value&&x(s.value)}),je(()=>h());function h(d){if(!(e.eager&&d)&&!(Q&&!d&&!e.eager)){if(i.value="loading",c.value.lazySrc){const f=new Image;f.src=c.value.lazySrc,x(f,null)}c.value.src&&Fe(()=>{var f,S;if(n("loadstart",((f=s.value)==null?void 0:f.currentSrc)||c.value.src),(S=s.value)!=null&&S.complete){if(s.value.naturalWidth||b(),i.value==="error")return;m.value||x(s.value,null),p()}else m.value||x(s.value),D()})}}function p(){var d;D(),i.value="loaded",n("load",((d=s.value)==null?void 0:d.currentSrc)||c.value.src)}function b(){var d;i.value="error",n("error",((d=s.value)==null?void 0:d.currentSrc)||c.value.src)}function D(){const d=s.value;d&&(r.value=d.currentSrc||d.src)}let k=-1;function x(d){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{clearTimeout(k);const{naturalHeight:A,naturalWidth:P}=d;A||P?(l.value=P,u.value=A):!d.complete&&i.value==="loading"&&f!=null?k=window.setTimeout(S,f):(d.currentSrc.endsWith(".svg")||d.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,u.value=1)};S()}const L=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),C=()=>{var S;if(!c.value.src||i.value==="idle")return null;const d=o("img",{class:["v-img__img",L.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:p,onError:b},null),f=(S=a.sources)==null?void 0:S.call(a);return o(W,{transition:e.transition,appear:!0},{default:()=>[te(f?o("picture",{class:"v-img__picture"},[f,d]):d,[[Xe,i.value==="loaded"]])]})},z=()=>o(W,{transition:e.transition},{default:()=>[c.value.lazySrc&&i.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",L.value],src:c.value.lazySrc,alt:e.alt},null)]}),R=()=>a.placeholder?o(W,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!a.error)&&o("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,$=()=>a.error?o(W,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&o("div",{class:"v-img__error"},[a.error()])]}):null,M=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,B=T(!1);{const d=j(m,f=>{f&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{B.value=!0})}),d())})}return O(()=>{const[d]=oe.filterProps(e);return te(o(oe,ge({class:["v-img",{"v-img--booting":!B.value},e.class],style:[{width:g(e.width==="auto"?l.value:e.width)},e.style]},d,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(ye,null,[o(C,null,null),o(z,null,null),o(M,null,null),o(R,null,null),o($,null,null)]),default:a.default}),[[Me("intersect"),{handler:h,options:e.options},null,{once:!0}]])}),{currentSrc:r,image:s,state:i,naturalWidth:l,naturalHeight:u}}}),ke=y({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{roundedClasses:v(()=>{const a=H(e)?e.value:e.rounded,r=[];if(a===!0||a==="")r.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`rounded-${s}`);return r})}}const ft=["elevated","flat","tonal","outlined","text","plain"];function gt(e,t){return o(ye,null,[e&&o("span",{key:"overlay",class:`${t}__overlay`},null),o("span",{key:"underlay",class:`${t}__underlay`},null)])}const ht=y({color:String,variant:{type:String,default:"elevated",validator:e=>ft.includes(e)}},"variant");function yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();const n=v(()=>{const{variant:s}=ne(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:r}=Z(v(()=>{const{variant:s,color:i}=ne(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:r,variantClasses:n}}const pt=y({start:Boolean,end:Boolean,icon:me,image:String,...E(),...Ne(),...ke(),..._e(),...U(),...K(),...ht({variant:"flat"})},"VAvatar"),Bt=w()({name:"VAvatar",props:pt(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=J(e),{colorClasses:r,colorStyles:s,variantClasses:i}=yt(e),{densityClasses:l}=Ie(e),{roundedClasses:u}=xe(e),{sizeClasses:c,sizeStyles:m}=Se(e);return O(()=>o(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,r.value,l.value,u.value,c.value,i.value,e.class],style:[s.value,m.value,e.style]},{default:()=>{var h;return[e.image?o(mt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?o(st,{key:"icon",icon:e.icon},null):(h=n.default)==null?void 0:h.call(n),gt(!1,"v-avatar")]}})),{}}}),bt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Nt=w(!1)({name:"VDefaultsProvider",props:bt(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:r,reset:s,root:i,scoped:l}=qe(e);return Ye(a,{reset:s,root:i,scoped:l,disabled:r}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}}),It=y({border:[Boolean,Number,String]},"border");function Ot(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{borderClasses:v(()=>{const a=H(e)?e.value:e.border,r=[];if(a===!0||a==="")r.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`border-${s}`);return r})}}const Ht=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Dt(e){return{elevationClasses:v(()=>{const n=H(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}function _t(e,t){const n=G(),a=T(!1);if(Q){const r=new IntersectionObserver(s=>{e==null||e(s,r),a.value=!!s.find(i=>i.isIntersecting)},t);Ue(()=>{r.disconnect()}),j(n,(s,i)=>{i&&(r.unobserve(i),a.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const le={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},St=y({location:String},"location");function Ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=pe();return{locationStyles:v(()=>{if(!e.location)return{};const{side:s,align:i}=tt(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function l(c){return n?n(c):0}const u={};return s!=="center"&&(t?u[le[s]]=`calc(100% - ${l(s)}px)`:u[s]=0),i!=="center"?t?u[le[i]]=`calc(100% - ${l(i)}px)`:u[i]=0:(s==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),u})}}const wt=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...E(),...St({location:"top"}),...ke(),...U(),...K()},"VProgressLinear"),kt=w()({name:"VProgressLinear",props:wt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=Ke(e,"modelValue"),{isRtl:r,rtlClasses:s}=pe(),{themeClasses:i}=J(e),{locationStyles:l}=Ct(e),{textColorClasses:u,textColorStyles:c}=be(e,"color"),{backgroundColorClasses:m,backgroundColorStyles:h}=ie(v(()=>e.bgColor||e.color)),{backgroundColorClasses:p,backgroundColorStyles:b}=ie(e,"color"),{roundedClasses:D}=xe(e),{intersectionRef:k,isIntersecting:x}=_t(),L=v(()=>parseInt(e.max,10)),C=v(()=>parseInt(e.height,10)),z=v(()=>parseFloat(e.bufferValue)/L.value*100),R=v(()=>parseFloat(a.value)/L.value*100),$=v(()=>r.value!==e.reverse),M=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),B=v(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function d(f){if(!k.value)return;const{left:S,right:A,width:P}=k.value.getBoundingClientRect(),Be=$.value?P-f.clientX+(A-P):f.clientX-S;a.value=Math.round(Be/P*L.value)}return O(()=>o(e.tag,{ref:k,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&x.value,"v-progress-linear--reverse":$.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},D.value,i.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?g(C.value):0,"--v-progress-linear-height":g(C.value),...l.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:R.value,onClick:e.clickable&&d},{default:()=>[e.stream&&o("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...c.value,[$.value?"left":"right"]:g(-C.value),borderTop:`${g(C.value/2)} dotted`,opacity:B.value,top:`calc(50% - ${g(C.value/4)})`,width:g(100-z.value,"%"),"--v-progress-linear-stream-to":g(C.value*($.value?1:-1))}},null),o("div",{class:["v-progress-linear__background",m.value],style:[h.value,{opacity:B.value,width:g(e.stream?z.value:100,"%")}]},null),o(he,{name:M.value},{default:()=>[e.indeterminate?o("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(f=>o("div",{key:f,class:["v-progress-linear__indeterminate",f,p.value],style:b.value},null))]):o("div",{class:["v-progress-linear__determinate",p.value],style:[b.value,{width:g(R.value,"%")}]},null)]}),n.default&&o("div",{class:"v-progress-linear__content"},[n.default({value:R.value,buffer:z.value})])]})),{}}}),At=y({loading:[Boolean,String]},"loader");function Wt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{loaderClasses:v(()=>({[`${t}--loading`]:e.loading}))}}function jt(e,t){var a;let{slots:n}=t;return o("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||o(kt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const xt=["static","relative","fixed","absolute","sticky"],Ft=y({position:{type:String,validator:e=>xt.includes(e)}},"position");function Mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{positionClasses:v(()=>e.position?`${t}--${e.position}`:void 0)}}function Xt(){var e,t;return(t=(e=Je("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function qt(e,t){const n=Ge("RouterLink"),a=v(()=>!!(e.href||e.to)),r=v(()=>(a==null?void 0:a.value)||ae(t,"click")||ae(e,"click"));if(typeof n=="string")return{isLink:a,isClickable:r,href:fe(e,"href")};const s=e.to?n.useLink(e):void 0;return{isLink:a,isClickable:r,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&v(()=>{var i,l;return e.exact?(i=s.isExactActive)==null?void 0:i.value:(l=s.isActive)==null?void 0:l.value}),href:v(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const Yt=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const q=Symbol("rippleStop"),Lt=80;function ue(e,t){e.style.transform=t,e.style.webkitTransform=t}function Y(e){return e.constructor.name==="TouchEvent"}function Le(e){return e.constructor.name==="KeyboardEvent"}const $t=function(e,t){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,r=0;if(!Le(e)){const p=t.getBoundingClientRect(),b=Y(e)?e.touches[e.touches.length-1]:e;a=b.clientX-p.left,r=b.clientY-p.top}let s=0,i=.3;(h=t._ripple)!=null&&h.circle?(i=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const l=`${(t.clientWidth-s*2)/2}px`,u=`${(t.clientHeight-s*2)/2}px`,c=n.center?l:`${a-s}px`,m=n.center?u:`${r-s}px`;return{radius:s,scale:i,x:c,y:m,centerX:l,centerY:u}},F={show(e,t){var b;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((b=t==null?void 0:t._ripple)!=null&&b.enabled))return;const a=document.createElement("span"),r=document.createElement("span");a.appendChild(r),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:i,x:l,y:u,centerX:c,centerY:m}=$t(e,t,n),h=`${s*2}px`;r.className="v-ripple__animation",r.style.width=h,r.style.height=h,t.appendChild(a);const p=window.getComputedStyle(t);p&&p.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),ue(r,`translate(${l}, ${u}) scale3d(${i},${i},${i})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),ue(r,`translate(${c}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),r=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=n.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function $e(e){return typeof e>"u"||!!e}function N(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[q])){if(e[q]=!0,Y(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Le(e),n._ripple.class&&(t.class=n._ripple.class),Y(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{F.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Lt)}else F.show(e,n,t)}}function ce(e){e[q]=!0}function _(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),F.hide(t)}}function Pe(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let I=!1;function Te(e){!I&&(e.keyCode===se.enter||e.keyCode===se.space)&&(I=!0,N(e))}function Ee(e){I=!1,_(e)}function Ve(e){I&&(I=!1,_(e))}function ze(e,t,n){const{value:a,modifiers:r}=t,s=$e(a);if(s||F.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=r.center,e._ripple.circle=r.circle,Qe(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(r.stop){e.addEventListener("touchstart",ce,{passive:!0}),e.addEventListener("mousedown",ce);return}e.addEventListener("touchstart",N,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",Pe,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",N),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",Te),e.addEventListener("keyup",Ee),e.addEventListener("blur",Ve),e.addEventListener("dragstart",_,{passive:!0})}else!s&&n&&Re(e)}function Re(e){e.removeEventListener("mousedown",N),e.removeEventListener("touchstart",N),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",Pe),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",Te),e.removeEventListener("keyup",Ee),e.removeEventListener("dragstart",_),e.removeEventListener("blur",Ve)}function Pt(e,t){ze(e,t,!1)}function Tt(e){delete e._ripple,Re(e)}function Et(e,t){if(t.value===t.oldValue)return;const n=$e(t.oldValue);ze(e,t,n)}const Ut={mounted:Pt,unmounted:Tt,updated:Et};export{re as A,_e as B,Se as C,_t as D,jt as L,W as M,Ut as R,mt as V,Bt as a,Nt as b,Rt as c,rt as d,Ht as e,At as f,St as g,Ft as h,ke as i,Yt as j,ht as k,yt as l,It as m,it as n,Dt as o,Wt as p,Ct as q,Mt as r,xe as s,qt as t,Ot as u,gt as v,be as w,ie as x,st as y,Xt as z};
