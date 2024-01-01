"use strict";(()=>{function r(s,i){s.attachShadow(i)}function o(s,i){let t=new CSSStyleSheet;return t.replace(i),s.shadowRoot.adoptedStyleSheets=[t],t}function l(s,i){let t=document.createElement("template");t.innerHTML=i;let e=t.content.cloneNode(!0);return s.shadowRoot.appendChild(e),e}var n=class extends HTMLElement{constructor(){super();this.subscribers=[];r(this,{mode:"open"}),o(this,":host { display:block; width:100%; height: 100%; }"),this.calculateBreakpoint=this.calculateBreakpoint.bind(this),this.subscribe=this.subscribe.bind(this),this.update=this.update.bind(this),this.template=l(this,"<slot></slot>")}calculateBreakpoint(){let t=window.innerWidth,e="sm",a=Number(this.getAttribute("sm")??"0"),c=Number(this.getAttribute("md")??"640"),h=Number(this.getAttribute("lg")??"1024"),d=Number(this.getAttribute("xl")??"1280"),u=Number(this.getAttribute("xxl")??"1536");return t>0&&(e="sm"),t>=a&&(e="sm"),t>=c&&(e="md"),t>=h&&(e="lg"),t>=d&&(e="xl"),t>=u&&(e="xxl"),e}connectedCallback(){this.update(),window.addEventListener("resize",this.update)}subscribe(t){this.subscribers.push(t)}update(){for(let t=0;t<this.subscribers.length;t++)this.subscribers[t].render(this.calculateBreakpoint())}disconnectedCallback(){window.removeEventListener("resize",this.update)}static get observedAttributes(){return["sm","md","lg","xl","xxl"]}};customElements.define("dx-mq",n);})();
//# sourceMappingURL=dx-mq.js.map
