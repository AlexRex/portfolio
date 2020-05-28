import{S as s,i as a,s as e,a as t,e as r,t as o,q as l,d as c,b as i,f as n,g as h,h as p,k as v,l as u,m as d,w as f,o as g}from"./client.1210b26b.js";function m(s){let a,e,m,E,b,x,j,w,F,S,z,y,B,D,I,R,A,H,O,P,C,M,N,U,V,q,$,k,G,L,T,J,K,Q,W,X,Y,Z,_,ss,as,es,ts,rs,os,ls,cs,is,ns,hs,ps,vs,us,ds=new Date(s[1].date).toLocaleDateString()+"",fs=s[0].id+"",gs=s[2](s[1].cameraBrand)+"",ms=s[2](s[1].cameraModel)+"",Es=s[2](s[1].lensModel)+"",bs=s[2](s[1].exposure)+"",xs=s[2](s[1].aperture)+"",js=s[2](s[1].iso)+"",ws=s[2](s[1].focal)+"";return document.title=a=s[0].id,{c(){e=t(),m=r("div"),E=r("h3"),b=o(ds),x=t(),j=r("h1"),w=o(fs),F=t(),S=r("div"),z=r("div"),y=r("picture"),B=r("source"),I=t(),R=r("source"),H=t(),O=r("img"),M=t(),N=r("p"),U=r("span"),V=r("b"),q=o("Hardware:"),$=t(),k=o(gs),G=t(),L=o(ms),T=o(" | "),J=o(Es),K=t(),Q=r("br"),W=t(),X=r("span"),Y=r("b"),Z=o("Setup:"),_=t(),ss=o(bs),as=o(" | "),es=o(xs),ts=o(" | "),rs=o(js),os=o(" | "),ls=o(ws),cs=t(),is=r("br"),ns=t(),hs=r("a"),ps=r("b"),vs=o("Original"),this.h()},l(s){l('[data-svelte="svelte-1ter1gm"]',document.head).forEach(c),e=i(s),m=n(s,"DIV",{class:!0});var a=h(m);E=n(a,"H3",{class:!0});var t=h(E);b=p(t,ds),t.forEach(c),x=i(a),j=n(a,"H1",{class:!0});var r=h(j);w=p(r,fs),r.forEach(c),a.forEach(c),F=i(s),S=n(s,"DIV",{class:!0});var o=h(S);z=n(o,"DIV",{class:!0});var v=h(z);y=n(v,"PICTURE",{});var u=h(y);B=n(u,"SOURCE",{srcset:!0,type:!0}),I=i(u),R=n(u,"SOURCE",{srcset:!0,type:!0}),H=i(u),O=n(u,"IMG",{src:!0,alt:!0,class:!0}),u.forEach(c),v.forEach(c),M=i(o),N=n(o,"P",{class:!0});var d=h(N);U=n(d,"SPAN",{});var f=h(U);V=n(f,"B",{});var g=h(V);q=p(g,"Hardware:"),g.forEach(c),$=i(f),k=p(f,gs),G=i(f),L=p(f,ms),T=p(f," | "),J=p(f,Es),f.forEach(c),K=i(d),Q=n(d,"BR",{}),W=i(d),X=n(d,"SPAN",{});var D=h(X);Y=n(D,"B",{});var A=h(Y);Z=p(A,"Setup:"),A.forEach(c),_=i(D),ss=p(D,bs),as=p(D," | "),es=p(D,xs),ts=p(D," | "),rs=p(D,js),os=p(D," | "),ls=p(D,ws),D.forEach(c),cs=i(d),is=n(d,"BR",{}),ns=i(d),hs=n(d,"A",{href:!0});var P=h(hs);ps=n(P,"B",{});var C=h(ps);vs=p(C,"Original"),C.forEach(c),P.forEach(c),d.forEach(c),o.forEach(c),this.h()},h(){v(E,"class","svelte-1vz025x"),v(j,"class","svelte-1vz025x"),v(m,"class","header svelte-1vz025x"),v(B,"srcset",D=s[0].resolutions[1080].webpFile),v(B,"type","image/webp"),v(R,"srcset",A=s[0].resolutions[1080].jpgFile),v(R,"type","image/jpeg"),O.src!==(P=s[0].resolutions[1080].jpgFile)&&v(O,"src",P),v(O,"alt",C=s[0].metadata.id),v(O,"class","svelte-1vz025x"),v(z,"class","photo svelte-1vz025x"),v(hs,"href",us=s[0].resolutions.original.jpgFile),v(N,"class","details svelte-1vz025x"),v(S,"class","photo-container svelte-1vz025x")},m(s,a){u(s,e,a),u(s,m,a),d(m,E),d(E,b),d(m,x),d(m,j),d(j,w),u(s,F,a),u(s,S,a),d(S,z),d(z,y),d(y,B),d(y,I),d(y,R),d(y,H),d(y,O),d(S,M),d(S,N),d(N,U),d(U,V),d(V,q),d(U,$),d(U,k),d(U,G),d(U,L),d(U,T),d(U,J),d(N,K),d(N,Q),d(N,W),d(N,X),d(X,Y),d(Y,Z),d(X,_),d(X,ss),d(X,as),d(X,es),d(X,ts),d(X,rs),d(X,os),d(X,ls),d(N,cs),d(N,is),d(N,ns),d(N,hs),d(hs,ps),d(ps,vs)},p(s,[e]){1&e&&a!==(a=s[0].id)&&(document.title=a),1&e&&fs!==(fs=s[0].id+"")&&f(w,fs),1&e&&D!==(D=s[0].resolutions[1080].webpFile)&&v(B,"srcset",D),1&e&&A!==(A=s[0].resolutions[1080].jpgFile)&&v(R,"srcset",A),1&e&&O.src!==(P=s[0].resolutions[1080].jpgFile)&&v(O,"src",P),1&e&&C!==(C=s[0].metadata.id)&&v(O,"alt",C),1&e&&us!==(us=s[0].resolutions.original.jpgFile)&&v(hs,"href",us)},i:g,o:g,d(s){s&&c(e),s&&c(m),s&&c(F),s&&c(S)}}}async function E({params:s,query:a}){const e=await this.fetch(`photos/${s.slug}.json`),t=await e.json();if(200===e.status)return{photo:t};this.error(e.status,t.message)}function b(s,a,e){let{photo:t}=a;const{metadata:r}=t;return s.$set=s=>{"photo"in s&&e(0,t=s.photo)},[t,r,s=>s||"Not Available"]}export default class extends s{constructor(s){super(),a(this,s,b,m,e,{photo:0})}}export{E as preload};
