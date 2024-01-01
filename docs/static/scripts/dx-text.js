"use strict";(()=>{var i=class extends HTMLElement{constructor(){super();this.align=[];this.breakpoints=[0,960,1440];this.color=[""];this.font=["primary"];this.size=[""];this.shadow=[];this.spacing=[];this.oblique=[];this.opacity=[];this.weight=[];this.styleSheet=new CSSStyleSheet;this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML="<slot></slot>",this.render=this.render.bind(this),this.setupAttributes=this.setupAttributes.bind(this),this.shadowRoot.adoptedStyleSheets=[this.styleSheet]}connectedCallback(){this.setupAttributes().render(),window.addEventListener("resize",this.render)}disconnectedCallback(){window.removeEventListener("resize",this.render)}render(){let s="",t=(r,e,n)=>{if(!this[r]||!n)return;let o=n.slice(0,2)==="--"?`var(${n})`:n;s+=`${e}: ${o};`};this.breakpoints.forEach((r,e)=>{window.innerWidth>r&&(t("align","text-align",this.align[e]),t("color","color",this.color[e]),t("font","font-family",this.font[e]),t("opacity","opacity",this.opacity[e]),t("shadow","text-shadow",this.shadow[e]),t("size","font-size",this.size[e]),t("spacing","letter-spacing",this.spacing[e]),t("weight","font-weight",this.weight[e])),this.styleSheet.replace(`:host { ${s} }`),console.log(s)})}setupAttributes(){return i.observedAttributes.forEach(s=>{let t=this.getAttribute(s);!t||(this[s]=t.split(","))}),this}static get observedAttributes(){return["align","breakpoints","color","font","opacity","shadow","size","spacing","weight"]}};customElements.define("dx-text",i);})();
//# sourceMappingURL=dx-text.js.map
