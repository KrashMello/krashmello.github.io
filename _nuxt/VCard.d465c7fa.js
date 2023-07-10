import{m as y,d as f,b as A,c as N,u as w}from"./VRow.dc8de799.js";import{E as b,N as $,q as n,C as P,O as u,D as z,F as G,c as I,H as J,P as K}from"./entry.57ea0edd.js";import{c as C,a as h,b as g,m as Q,d as U,e as W,f as X,g as Y,h as Z,i as ee,j as ae,k as te,R as ne,u as de,l as ie,n as se,o as le,p as ce,q as re,r as ue,s as oe,t as ve,V as me,L as ke,v as ge}from"./index.3774a817.js";const ye=b()({name:"VCardActions",props:y(),setup(e,i){let{slots:t}=i;return $({VBtn:{variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=C("v-card-subtitle"),be=C("v-card-title"),Ce=P({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...y(),...A()},"VCardItem"),pe=b()({name:"VCardItem",props:Ce(),setup(e,i){let{slots:t}=i;return f(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),v=!!(s||t.append),m=!!(e.title||t.title),k=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(g,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(h,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(be,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),k&&n(fe,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),v&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(g,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(h,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ve=C("v-card-text"),Ie=P({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...Q(),...y(),...A(),...U(),...W(),...X(),...Y(),...Z(),...ee(),...ae(),...N(),...z(),...te({variant:"elevated"})},"VCard"),Se=b()({name:"VCard",directives:{Ripple:ne},props:Ie(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:o}=G(e),{borderClasses:s}=de(e),{colorClasses:v,colorStyles:m,variantClasses:k}=ie(e),{densityClasses:l}=w(e),{dimensionStyles:d}=se(e),{elevationClasses:S}=le(e),{loaderClasses:x}=ce(e),{locationStyles:D}=re(e),{positionClasses:L}=ue(e),{roundedClasses:T}=oe(e),c=ve(e,t),B=I(()=>e.link!==!1&&c.isLink.value),r=I(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const _=B.value?"a":e.tag,R=!!(a.title||e.title),E=!!(a.subtitle||e.subtitle),F=R||E,O=!!(a.append||e.appendAvatar||e.appendIcon),j=!!(a.prepend||e.prependAvatar||e.prependIcon),q=!!(a.image||e.image),H=F||j||O,M=!!(a.text||e.text);return J(n(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},o.value,s.value,v.value,l.value,S.value,x.value,L.value,T.value,k.value,e.class],style:[m.value,d.value,D.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var p;return[q&&n("div",{key:"image",class:"v-card__image"},[a.image?n(g,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(me,{key:"image-img",cover:!0,src:e.image},null)]),n(ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),H&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),M&&n(Ve,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(ye,null,{default:a.actions}),ge(r.value,"v-card")]}}),[[K("ripple"),r.value&&e.ripple]])}),{}}});export{Se as V,be as a,Ve as b,ye as c,fe as d};
