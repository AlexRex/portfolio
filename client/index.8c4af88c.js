import{S as s,i as t,s as e,e as o,a as r,f as l,g as a,b as c,d as n,k as h,l as i,m as p,t as u,q as f,h as g,o as m,v as d}from"./client.1210b26b.js";function v(s,t,e){const o=s.slice();return o[1]=t[e],o}function E(s){let t,e,u,f,g,m,d,v,E,j,b,y,F,S;return{c(){t=o("li"),e=o("a"),u=o("picture"),f=o("source"),m=r(),d=o("source"),E=r(),j=o("img"),S=r(),this.h()},l(s){t=l(s,"LI",{class:!0});var o=a(t);e=l(o,"A",{href:!0});var r=a(e);u=l(r,"PICTURE",{});var h=a(u);f=l(h,"SOURCE",{srcset:!0,type:!0}),m=c(h),d=l(h,"SOURCE",{srcset:!0,type:!0}),E=c(h),j=l(h,"IMG",{src:!0,alt:!0}),h.forEach(n),r.forEach(n),S=c(o),o.forEach(n),this.h()},h(){h(f,"srcset",g=s[1].resolutions[256].webpFile),h(f,"type","image/webp"),h(d,"srcset",v=s[1].resolutions[256].jpgFile),h(d,"type","image/jpeg"),j.src!==(b=s[1].resolutions[256].jpgFile)&&h(j,"src",b),h(j,"alt",y=s[1].metadata.id),h(e,"href",F="photos/"+s[1].slug),h(t,"class","picture svelte-1con9ie")},m(s,o){i(s,t,o),p(t,e),p(e,u),p(u,f),p(u,m),p(u,d),p(u,E),p(u,j),p(t,S)},p(s,t){1&t&&g!==(g=s[1].resolutions[256].webpFile)&&h(f,"srcset",g),1&t&&v!==(v=s[1].resolutions[256].jpgFile)&&h(d,"srcset",v),1&t&&j.src!==(b=s[1].resolutions[256].jpgFile)&&h(j,"src",b),1&t&&y!==(y=s[1].metadata.id)&&h(j,"alt",y),1&t&&F!==(F="photos/"+s[1].slug)&&h(e,"href",F)},d(s){s&&n(t)}}}function j(s){let t,e,j,b,y,F,S=s[0],I=[];for(let t=0;t<S.length;t+=1)I[t]=E(v(s,S,t));return{c(){t=r(),e=o("div"),j=o("h1"),b=u("Some pictures"),y=r(),F=o("ul");for(let s=0;s<I.length;s+=1)I[s].c();this.h()},l(s){f('[data-svelte="svelte-1bm5inq"]',document.head).forEach(n),t=c(s),e=l(s,"DIV",{class:!0});var o=a(e);j=l(o,"H1",{});var r=a(j);b=g(r,"Some pictures"),r.forEach(n),y=c(o),F=l(o,"UL",{class:!0});var h=a(F);for(let s=0;s<I.length;s+=1)I[s].l(h);h.forEach(n),o.forEach(n),this.h()},h(){document.title="Photos",h(F,"class","gallery svelte-1con9ie"),h(e,"class","content svelte-1con9ie")},m(s,o){i(s,t,o),i(s,e,o),p(e,j),p(j,b),p(e,y),p(e,F);for(let s=0;s<I.length;s+=1)I[s].m(F,null)},p(s,[t]){if(1&t){let e;for(S=s[0],e=0;e<S.length;e+=1){const o=v(s,S,e);I[e]?I[e].p(o,t):(I[e]=E(o),I[e].c(),I[e].m(F,null))}for(;e<I.length;e+=1)I[e].d(1);I.length=S.length}},i:m,o:m,d(s){s&&n(t),s&&n(e),d(I,s)}}}function b({params:s,query:t,path:e}){return this.fetch("photos.json").then(s=>s.json()).then(s=>({photos:s}))}function y(s,t,e){let{photos:o}=t;return s.$set=s=>{"photos"in s&&e(0,o=s.photos)},[o]}export default class extends s{constructor(s){super(),t(this,s,y,j,e,{photos:0})}}export{b as preload};
