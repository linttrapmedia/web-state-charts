"use strict";(()=>{function h(i,s){let t=[...i];for(let e=0;e<s.length;e++)e<t.length?t[e]=s[e]:t.push(s[e]);return t}function d(i,s){i.attachShadow(s)}function l(i,s){let t=new CSSStyleSheet;return t.replace(s),i.shadowRoot.adoptedStyleSheets=[t],t}function c(i,s){let t=document.createElement("template");t.innerHTML=s;let e=t.content.cloneNode(!0);return i.shadowRoot.appendChild(e),e}var g=`
:host {
  font-size: var(--dx-text-size, 14px);
  font-family: var(--dx-text-font, Arial);
  color: var(--dx-text-color, #000);
}
:host img {
  transition: all 0.2s ease-in-out;
}
`,m="<slot></slot>",r=class extends HTMLElement{constructor(){super();this.preload=!1;this.breakpoints=[0,960,1440];this.height=["auto"];this.width=["auto"];d(this,{mode:"open"}),l(this,g),c(this,m),this.render=this.render.bind(this),this.setupImageAndLazyLoading=this.setupImageAndLazyLoading.bind(this),this.setupPreloading=this.setupPreloading.bind(this),this.setupAttributes=this.setupAttributes.bind(this),this.connectedCallback=this.connectedCallback.bind(this)}connectedCallback(){this.setupAttributes().setupPreloading().setupImageAndLazyLoading().render(),window.addEventListener("resize",this.render)}disconnectedCallback(){window.removeEventListener("resize",this.render)}render(){let t=window.innerWidth;this.breakpoints.forEach((e,n)=>{t>e&&(this.height[n]&&(this.img.style.height=this.height[n]),this.width[n]&&(this.img.style.width=this.width[n]))})}setupAttributes(){return r.observedAttributes.forEach(t=>{let e=this.getAttribute(t);if(!!e)return Array.isArray(this[t])?this[t]=h(this[t],e.split(",")):this[t]=e}),this}setupImageAndLazyLoading(){let t=document.createElement("img");return this.shadowRoot?.appendChild(t),this.img=t,this["lazy-src"]?(this.img.src=this["lazy-src"],new IntersectionObserver((n,u)=>{n.forEach(o=>{if(o.isIntersecting){let a=o.target;a.src=this.src,u.unobserve(a)}})}).observe(t)):this.img.src=this.src,this}setupPreloading(){if(this.getAttribute("preload")!==null){let t=document.createElement("link");t.rel="preload",t.as="image",t.href=this.src,document.head.appendChild(t)}return this}static get observedAttributes(){return["height","lazy-src","preload","src","width"]}};customElements.define("dx-img",r);})();
//# sourceMappingURL=dx-img.js.map
