import{g as b,u as x,r as o,c as _,w as t,o as r,a as s,e,h as k,v as w,i as l,b as $,n as c,t as m,d as I,f as h,j as A,F as D}from"./entry.3fba7c2b.js";const L=b("home",{state:()=>({items:["Desarollador","Soñador","Ser Humano"],bioList:[{date:"1994",description:"Nací en Cabudare Edo. Lara, Venezuela"},{date:"2019",description:"Culminó mi carrera de ingeniería en sistema en la Universidad Experimental Politécnica de las fuerzas Armadas (UNEFA)"},{date:"2019-2021",description:"Trabaje en la empresa Lácteos Los Andes como Desarrollador de Aplicaciones"},{date:"2022-presente",description:"Trabajo en la Alcaldía de Iribarren como Desarrollador de Aplicaciones"}],counter:0,transitionItems:!0}),getters:{},actions:{setTimer(){setTimeout(()=>{this.transitionItems=!1},4500),setInterval(()=>{this.transitionItems=!0,this.counter>=this.items.length-1?this.counter=0:this.counter++,setTimeout(()=>{this.transitionItems=!1},4500)},5e3)}}});const B=e("h1",{class:"titlele text-primary font-weight-black",textContent:"MI NOMBRE ES JOEL"},null,-1),C={style:{"min-height":"56px"}},E={class:"titlele-2 text-primary font-weight-black",style:{"font-size":"30px"}},M=e("strong",null," Bíografia ",-1),N=[M],S={class:"text-accent font-weight-black"},T={class:"text-accent"},V=e("strong",null," Lo que Amo ",-1),j=[V],z=e("p",{class:"text-accent"}," Desarrollar Aplicativos, Buscar Información, la Fotografía, Música y el Arte ",-1),O={__name:"index",setup(F){const n=L();return n.setTimer(),x({title:"Inicio",meta:[{hid:"description",name:"description",content:"KrashMello website"},{hid:"og-title",property:"og:title",content:"Inicio - KrashMello"},{hid:"og-desc",property:"og:description",content:"KrashMello website"}]}),(a,H)=>{const p=o("v-scroll-x-transition"),i=o("v-col"),f=o("v-img"),d=o("v-row"),y=o("v-table"),g=o("v-container");return r(),_(g,null,{default:t(()=>[s(d,{justify:"center",class:"mt-5"},{default:t(()=>[s(i,{cols:`${a.$vuetify.display.mobile?"12":"6"}`},{default:t(()=>[B,e("div",C,[s(p,null,{default:t(()=>[k(e("h3",E,[$(" un "),e("span",{class:c(`${a.$vuetify.theme.name==="dark"?"text-accent":"text-secondary"}`)},m(l(n).items[l(n).counter]),3)],512),[[w,l(n).transitionItems]])]),_:1})]),e("p",{class:c(`subtitle-h mt-3 ${a.$vuetify.theme.name==="dark"?"text-secondary":"text-primary"}`)}," Me gusta desarrollar herramientas para el uso y beneficios de muchos ",2)]),_:1},8,["cols"]),a.$vuetify.display.mobile?I("",!0):(r(),_(i,{key:0,cols:"6"},{default:t(()=>[s(f,{"max-height":"247",src:`${a.$vuetify.theme.name==="dark"?"/logoDeer_dark.webp":"/logoDeer_light.webp"}`},null,8,["src"])]),_:1}))]),_:1}),s(d,{class:"mt-3"},{default:t(()=>[s(i,{cols:"12"},{default:t(()=>[e("h1",{class:c(`${a.$vuetify.theme.name==="dark"?"text-primary":"text-secondary"}`)},N,2),s(y,{style:{"background-color":"rgba(0, 0, 0, 0)"}},{default:t(()=>[e("tbody",null,[(r(!0),h(D,null,A(l(n).bioList,(u,v)=>(r(),h("tr",{key:v},[e("td",S,[e("strong",null,m(u.date),1)]),e("td",T,m(u.description),1)]))),128))])]),_:1})]),_:1})]),_:1}),s(d,{class:"mt-3"},{default:t(()=>[s(i,{cols:"12"},{default:t(()=>[e("h1",{class:c(`${a.$vuetify.theme.name==="dark"?"text-primary":"text-secondary"}`)},j,2),z]),_:1})]),_:1})]),_:1})}}};export{O as default};
