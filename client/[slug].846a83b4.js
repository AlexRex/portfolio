import{S as t,i as s,s as e,e as a,t as l,f as n,g as r,h as o,d as c,k as h,l as i,m as f,o as u,a as v,q as m,b as p,v as d}from"./client.50e2ec6a.js";function g(t,s,e){const a=t.slice();return a[3]=s[e],a}function w(t){let s,e,v,m,p,d=t[3]+"";return{c(){s=a("a"),e=l("#"),v=l(d),p=l("  "),this.h()},l(t){s=n(t,"A",{href:!0});var a=r(s);e=o(a,"#"),v=o(a,d),a.forEach(c),p=o(t,"  "),this.h()},h(){h(s,"href",m="til?tag="+t[3])},m(t,a){i(t,s,a),f(s,e),f(s,v),i(t,p,a)},p:u,d(t){t&&c(s),t&&c(p)}}}function E(t){let s,e,E,z,D,H,j,x,L,q,y,I=new Date(t[1].date).toLocaleDateString()+"",M=t[1].title+"",S=t[0].html+"";document.title=s=t[1].title;let T=t[2],V=[];for(let s=0;s<T.length;s+=1)V[s]=w(g(t,T,s));return{c(){e=v(),E=a("div"),z=a("h3"),D=l(I),H=l(" · ");for(let t=0;t<V.length;t+=1)V[t].c();j=v(),x=a("h1"),L=l(M),q=v(),y=a("div"),this.h()},l(t){m('[data-svelte="svelte-vt2zer"]',document.head).forEach(c),e=p(t),E=n(t,"DIV",{class:!0});var s=r(E);z=n(s,"H3",{class:!0});var a=r(z);D=o(a,I),H=o(a," · ");for(let t=0;t<V.length;t+=1)V[t].l(a);a.forEach(c),j=p(s),x=n(s,"H1",{class:!0});var l=r(x);L=o(l,M),l.forEach(c),q=p(s),y=n(s,"DIV",{class:!0}),r(y).forEach(c),s.forEach(c),this.h()},h(){h(z,"class","svelte-1w16vzs"),h(x,"class","svelte-1w16vzs"),h(y,"class","post-html svelte-1w16vzs"),h(E,"class","content svelte-1w16vzs")},m(t,s){i(t,e,s),i(t,E,s),f(E,z),f(z,D),f(z,H);for(let t=0;t<V.length;t+=1)V[t].m(z,null);f(E,j),f(E,x),f(x,L),f(E,q),f(E,y),y.innerHTML=S},p(t,[e]){if(2&e&&s!==(s=t[1].title)&&(document.title=s),4&e){let s;for(T=t[2],s=0;s<T.length;s+=1){const a=g(t,T,s);V[s]?V[s].p(a,e):(V[s]=w(a),V[s].c(),V[s].m(z,null))}for(;s<V.length;s+=1)V[s].d(1);V.length=T.length}1&e&&S!==(S=t[0].html+"")&&(y.innerHTML=S)},i:u,o:u,d(t){t&&c(e),t&&c(E),d(V,t)}}}async function z({params:t,query:s}){const e=await this.fetch(`til/${t.slug}.json`),a=await e.json();if(200===e.status)return{post:a};this.error(e.status,a.message)}function D(t,s,e){let{post:a}=s;const{metadata:l}=a,n=l.tags.replace(/ /g,"").split(",");return t.$set=t=>{"post"in t&&e(0,a=t.post)},[a,l,n]}export default class extends t{constructor(t){super(),s(this,t,D,E,e,{post:0})}}export{z as preload};
