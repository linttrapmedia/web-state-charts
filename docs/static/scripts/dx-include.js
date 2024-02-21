"use strict";(()=>{var cn=Object.create;var At=Object.defineProperty;var fn=Object.getOwnPropertyDescriptor;var un=Object.getOwnPropertyNames;var mn=Object.getPrototypeOf,pn=Object.prototype.hasOwnProperty;var dn=(m,c)=>()=>(c||m((c={exports:{}}).exports,c),c.exports);var Tn=(m,c,_,C)=>{if(c&&typeof c=="object"||typeof c=="function")for(let x of un(c))!pn.call(m,x)&&x!==_&&At(m,x,{get:()=>c[x],enumerable:!(C=fn(c,x))||C.enumerable});return m};var hn=(m,c,_)=>(_=m!=null?cn(mn(m)):{},Tn(c||!m||!m.__esModule?At(_,"default",{value:m,enumerable:!0}):_,m));var St=dn((xe,Pe)=>{(function(m,c){typeof xe=="object"&&typeof Pe<"u"?Pe.exports=c():typeof define=="function"&&define.amd?define(c):(m=typeof globalThis<"u"?globalThis:m||self,m.DOMPurify=c())})(xe,function(){"use strict";let{entries:m,setPrototypeOf:c,isFrozen:_,getPrototypeOf:C,getOwnPropertyDescriptor:x}=Object,{freeze:A,seal:b,create:ve}=Object,{apply:ce,construct:fe}=typeof Reflect<"u"&&Reflect;A||(A=function(o){return o}),b||(b=function(o){return o}),ce||(ce=function(o,l,a){return o.apply(l,a)}),fe||(fe=function(o,l){return new o(...l)});let Q=N(Array.prototype.forEach),Ue=N(Array.prototype.pop),j=N(Array.prototype.push),ee=N(String.prototype.toLowerCase),ue=N(String.prototype.toString),Lt=N(String.prototype.match),X=N(String.prototype.replace),yt=N(String.prototype.indexOf),Nt=N(String.prototype.trim),O=N(Object.prototype.hasOwnProperty),y=N(RegExp.prototype.test),V=bt(TypeError);function N(s){return function(o){for(var l=arguments.length,a=new Array(l>1?l-1:0),h=1;h<l;h++)a[h-1]=arguments[h];return ce(s,o,a)}}function bt(s){return function(){for(var o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];return fe(s,l)}}function r(s,o){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ee;c&&c(s,null);let a=o.length;for(;a--;){let h=o[a];if(typeof h=="string"){let M=l(h);M!==h&&(_(o)||(o[a]=M),h=M)}s[h]=!0}return s}function Ot(s){for(let o=0;o<s.length;o++)O(s,o)||(s[o]=null);return s}function P(s){let o=ve(null);for(let[l,a]of m(s))O(s,l)&&(Array.isArray(a)?o[l]=Ot(a):a&&typeof a=="object"&&a.constructor===Object?o[l]=P(a):o[l]=a);return o}function te(s,o){for(;s!==null;){let a=x(s,o);if(a){if(a.get)return N(a.get);if(typeof a.value=="function")return N(a.value)}s=C(s)}function l(){return null}return l}let Fe=A(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),me=A(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),pe=A(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Dt=A(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),de=A(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ct=A(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),He=A(["#text"]),ze=A(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Te=A(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ge=A(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ne=A(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Mt=b(/\{\{[\w\W]*|[\w\W]*\}\}/gm),It=b(/<%[\w\W]*|[\w\W]*%>/gm),wt=b(/\${[\w\W]*}/gm),xt=b(/^data-[\-\w.\u00B7-\uFFFF]/),Pt=b(/^aria-[\-\w]+$/),We=b(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),kt=b(/^(?:\w+script|data):/i),vt=b(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Be=b(/^html$/i);var Ye=Object.freeze({__proto__:null,MUSTACHE_EXPR:Mt,ERB_EXPR:It,TMPLIT_EXPR:wt,DATA_ATTR:xt,ARIA_ATTR:Pt,IS_ALLOWED_URI:We,IS_SCRIPT_OR_DATA:kt,ATTR_WHITESPACE:vt,DOCTYPE_NAME:Be});let Ut=function(){return typeof window>"u"?null:window},Ft=function(o,l){if(typeof o!="object"||typeof o.createPolicy!="function")return null;let a=null,h="data-tt-policy-suffix";l&&l.hasAttribute(h)&&(a=l.getAttribute(h));let M="dompurify"+(a?"#"+a:"");try{return o.createPolicy(M,{createHTML(F){return F},createScriptURL(F){return F}})}catch{return console.warn("TrustedTypes policy "+M+" could not be created."),null}};function je(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ut(),o=i=>je(i);if(o.version="3.0.9",o.removed=[],!s||!s.document||s.document.nodeType!==9)return o.isSupported=!1,o;let{document:l}=s,a=l,h=a.currentScript,{DocumentFragment:M,HTMLTemplateElement:F,Node:he,Element:Xe,NodeFilter:ge,NamedNodeMap:zt=s.NamedNodeMap||s.MozNamedAttrMap,HTMLFormElement:Gt,DOMParser:Wt,trustedTypes:oe}=s,ie=Xe.prototype,Bt=te(ie,"cloneNode"),Yt=te(ie,"nextSibling"),jt=te(ie,"childNodes"),Ee=te(ie,"parentNode");if(typeof F=="function"){let i=l.createElement("template");i.content&&i.content.ownerDocument&&(l=i.content.ownerDocument)}let S,$="",{implementation:_e,createNodeIterator:Xt,createDocumentFragment:Vt,getElementsByTagName:$t}=l,{importNode:qt}=a,D={};o.isSupported=typeof m=="function"&&typeof Ee=="function"&&_e&&_e.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:Ae,ERB_EXPR:Se,TMPLIT_EXPR:Re,DATA_ATTR:Kt,ARIA_ATTR:Zt,IS_SCRIPT_OR_DATA:Jt,ATTR_WHITESPACE:Ve}=Ye,{IS_ALLOWED_URI:$e}=Ye,p=null,qe=r({},[...Fe,...me,...pe,...de,...He]),d=null,Ke=r({},[...ze,...Te,...Ge,...ne]),u=Object.seal(ve(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),q=null,Le=null,Ze=!0,ye=!0,Je=!1,Qe=!0,H=!1,k=!1,Ne=!1,be=!1,z=!1,re=!1,ae=!1,et=!0,tt=!1,Qt="user-content-",Oe=!0,K=!1,G={},W=null,nt=r({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ot=null,it=r({},["audio","video","img","source","image","track"]),De=null,rt=r({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),se="http://www.w3.org/1998/Math/MathML",le="http://www.w3.org/2000/svg",I="http://www.w3.org/1999/xhtml",B=I,Ce=!1,Me=null,en=r({},[se,le,I],ue),Z=null,tn=["application/xhtml+xml","text/html"],nn="text/html",T=null,Y=null,on=l.createElement("form"),at=function(e){return e instanceof RegExp||e instanceof Function},Ie=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Y&&Y===e)){if((!e||typeof e!="object")&&(e={}),e=P(e),Z=tn.indexOf(e.PARSER_MEDIA_TYPE)===-1?nn:e.PARSER_MEDIA_TYPE,T=Z==="application/xhtml+xml"?ue:ee,p=O(e,"ALLOWED_TAGS")?r({},e.ALLOWED_TAGS,T):qe,d=O(e,"ALLOWED_ATTR")?r({},e.ALLOWED_ATTR,T):Ke,Me=O(e,"ALLOWED_NAMESPACES")?r({},e.ALLOWED_NAMESPACES,ue):en,De=O(e,"ADD_URI_SAFE_ATTR")?r(P(rt),e.ADD_URI_SAFE_ATTR,T):rt,ot=O(e,"ADD_DATA_URI_TAGS")?r(P(it),e.ADD_DATA_URI_TAGS,T):it,W=O(e,"FORBID_CONTENTS")?r({},e.FORBID_CONTENTS,T):nt,q=O(e,"FORBID_TAGS")?r({},e.FORBID_TAGS,T):{},Le=O(e,"FORBID_ATTR")?r({},e.FORBID_ATTR,T):{},G=O(e,"USE_PROFILES")?e.USE_PROFILES:!1,Ze=e.ALLOW_ARIA_ATTR!==!1,ye=e.ALLOW_DATA_ATTR!==!1,Je=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Qe=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,H=e.SAFE_FOR_TEMPLATES||!1,k=e.WHOLE_DOCUMENT||!1,z=e.RETURN_DOM||!1,re=e.RETURN_DOM_FRAGMENT||!1,ae=e.RETURN_TRUSTED_TYPE||!1,be=e.FORCE_BODY||!1,et=e.SANITIZE_DOM!==!1,tt=e.SANITIZE_NAMED_PROPS||!1,Oe=e.KEEP_CONTENT!==!1,K=e.IN_PLACE||!1,$e=e.ALLOWED_URI_REGEXP||We,B=e.NAMESPACE||I,u=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&at(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(u.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&at(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(u.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(u.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),H&&(ye=!1),re&&(z=!0),G&&(p=r({},He),d=[],G.html===!0&&(r(p,Fe),r(d,ze)),G.svg===!0&&(r(p,me),r(d,Te),r(d,ne)),G.svgFilters===!0&&(r(p,pe),r(d,Te),r(d,ne)),G.mathMl===!0&&(r(p,de),r(d,Ge),r(d,ne))),e.ADD_TAGS&&(p===qe&&(p=P(p)),r(p,e.ADD_TAGS,T)),e.ADD_ATTR&&(d===Ke&&(d=P(d)),r(d,e.ADD_ATTR,T)),e.ADD_URI_SAFE_ATTR&&r(De,e.ADD_URI_SAFE_ATTR,T),e.FORBID_CONTENTS&&(W===nt&&(W=P(W)),r(W,e.FORBID_CONTENTS,T)),Oe&&(p["#text"]=!0),k&&r(p,["html","head","body"]),p.table&&(r(p,["tbody"]),delete q.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw V('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw V('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');S=e.TRUSTED_TYPES_POLICY,$=S.createHTML("")}else S===void 0&&(S=Ft(oe,h)),S!==null&&typeof $=="string"&&($=S.createHTML(""));A&&A(e),Y=e}},st=r({},["mi","mo","mn","ms","mtext"]),lt=r({},["foreignobject","desc","title","annotation-xml"]),rn=r({},["title","style","font","a","script"]),ct=r({},[...me,...pe,...Dt]),ft=r({},[...de,...Ct]),an=function(e){let t=Ee(e);(!t||!t.tagName)&&(t={namespaceURI:B,tagName:"template"});let n=ee(e.tagName),f=ee(t.tagName);return Me[e.namespaceURI]?e.namespaceURI===le?t.namespaceURI===I?n==="svg":t.namespaceURI===se?n==="svg"&&(f==="annotation-xml"||st[f]):Boolean(ct[n]):e.namespaceURI===se?t.namespaceURI===I?n==="math":t.namespaceURI===le?n==="math"&&lt[f]:Boolean(ft[n]):e.namespaceURI===I?t.namespaceURI===le&&!lt[f]||t.namespaceURI===se&&!st[f]?!1:!ft[n]&&(rn[n]||!ct[n]):!!(Z==="application/xhtml+xml"&&Me[e.namespaceURI]):!1},v=function(e){j(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},we=function(e,t){try{j(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch{j(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!d[e])if(z||re)try{v(t)}catch{}else try{t.setAttribute(e,"")}catch{}},ut=function(e){let t=null,n=null;if(be)e="<remove></remove>"+e;else{let E=Lt(e,/^[\r\n\t ]+/);n=E&&E[0]}Z==="application/xhtml+xml"&&B===I&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");let f=S?S.createHTML(e):e;if(B===I)try{t=new Wt().parseFromString(f,Z)}catch{}if(!t||!t.documentElement){t=_e.createDocument(B,"template",null);try{t.documentElement.innerHTML=Ce?$:f}catch{}}let g=t.body||t.documentElement;return e&&n&&g.insertBefore(l.createTextNode(n),g.childNodes[0]||null),B===I?$t.call(t,k?"html":"body")[0]:k?t.documentElement:g},mt=function(e){return Xt.call(e.ownerDocument||e,e,ge.SHOW_ELEMENT|ge.SHOW_COMMENT|ge.SHOW_TEXT,null)},sn=function(e){return e instanceof Gt&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof zt)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},pt=function(e){return typeof he=="function"&&e instanceof he},w=function(e,t,n){!D[e]||Q(D[e],f=>{f.call(o,t,n,Y)})},dt=function(e){let t=null;if(w("beforeSanitizeElements",e,null),sn(e))return v(e),!0;let n=T(e.nodeName);if(w("uponSanitizeElement",e,{tagName:n,allowedTags:p}),e.hasChildNodes()&&!pt(e.firstElementChild)&&y(/<[/\w]/g,e.innerHTML)&&y(/<[/\w]/g,e.textContent))return v(e),!0;if(!p[n]||q[n]){if(!q[n]&&ht(n)&&(u.tagNameCheck instanceof RegExp&&y(u.tagNameCheck,n)||u.tagNameCheck instanceof Function&&u.tagNameCheck(n)))return!1;if(Oe&&!W[n]){let f=Ee(e)||e.parentNode,g=jt(e)||e.childNodes;if(g&&f){let E=g.length;for(let R=E-1;R>=0;--R)f.insertBefore(Bt(g[R],!0),Yt(e))}}return v(e),!0}return e instanceof Xe&&!an(e)||(n==="noscript"||n==="noembed"||n==="noframes")&&y(/<\/no(script|embed|frames)/i,e.innerHTML)?(v(e),!0):(H&&e.nodeType===3&&(t=e.textContent,Q([Ae,Se,Re],f=>{t=X(t,f," ")}),e.textContent!==t&&(j(o.removed,{element:e.cloneNode()}),e.textContent=t)),w("afterSanitizeElements",e,null),!1)},Tt=function(e,t,n){if(et&&(t==="id"||t==="name")&&(n in l||n in on))return!1;if(!(ye&&!Le[t]&&y(Kt,t))){if(!(Ze&&y(Zt,t))){if(!d[t]||Le[t]){if(!(ht(e)&&(u.tagNameCheck instanceof RegExp&&y(u.tagNameCheck,e)||u.tagNameCheck instanceof Function&&u.tagNameCheck(e))&&(u.attributeNameCheck instanceof RegExp&&y(u.attributeNameCheck,t)||u.attributeNameCheck instanceof Function&&u.attributeNameCheck(t))||t==="is"&&u.allowCustomizedBuiltInElements&&(u.tagNameCheck instanceof RegExp&&y(u.tagNameCheck,n)||u.tagNameCheck instanceof Function&&u.tagNameCheck(n))))return!1}else if(!De[t]){if(!y($e,X(n,Ve,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&yt(n,"data:")===0&&ot[e])){if(!(Je&&!y(Jt,X(n,Ve,"")))){if(n)return!1}}}}}}return!0},ht=function(e){return e!=="annotation-xml"&&e.indexOf("-")>0},gt=function(e){w("beforeSanitizeAttributes",e,null);let{attributes:t}=e;if(!t)return;let n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:d},f=t.length;for(;f--;){let g=t[f],{name:E,namespaceURI:R,value:U}=g,J=T(E),L=E==="value"?U:Nt(U);if(n.attrName=J,n.attrValue=L,n.keepAttr=!0,n.forceKeepAttr=void 0,w("uponSanitizeAttribute",e,n),L=n.attrValue,n.forceKeepAttr||(we(E,e),!n.keepAttr))continue;if(!Qe&&y(/\/>/i,L)){we(E,e);continue}H&&Q([Ae,Se,Re],_t=>{L=X(L,_t," ")});let Et=T(e.nodeName);if(!!Tt(Et,J,L)){if(tt&&(J==="id"||J==="name")&&(we(E,e),L=Qt+L),S&&typeof oe=="object"&&typeof oe.getAttributeType=="function"&&!R)switch(oe.getAttributeType(Et,J)){case"TrustedHTML":{L=S.createHTML(L);break}case"TrustedScriptURL":{L=S.createScriptURL(L);break}}try{R?e.setAttributeNS(R,E,L):e.setAttribute(E,L),Ue(o.removed)}catch{}}}w("afterSanitizeAttributes",e,null)},ln=function i(e){let t=null,n=mt(e);for(w("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)w("uponSanitizeShadowNode",t,null),!dt(t)&&(t.content instanceof M&&i(t.content),gt(t));w("afterSanitizeShadowDOM",e,null)};return o.sanitize=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,n=null,f=null,g=null;if(Ce=!i,Ce&&(i="<!-->"),typeof i!="string"&&!pt(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw V("dirty is not a string, aborting")}else throw V("toString is not a function");if(!o.isSupported)return i;if(Ne||Ie(e),o.removed=[],typeof i=="string"&&(K=!1),K){if(i.nodeName){let U=T(i.nodeName);if(!p[U]||q[U])throw V("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof he)t=ut("<!---->"),n=t.ownerDocument.importNode(i,!0),n.nodeType===1&&n.nodeName==="BODY"||n.nodeName==="HTML"?t=n:t.appendChild(n);else{if(!z&&!H&&!k&&i.indexOf("<")===-1)return S&&ae?S.createHTML(i):i;if(t=ut(i),!t)return z?null:ae?$:""}t&&be&&v(t.firstChild);let E=mt(K?i:t);for(;f=E.nextNode();)dt(f)||(f.content instanceof M&&ln(f.content),gt(f));if(K)return i;if(z){if(re)for(g=Vt.call(t.ownerDocument);t.firstChild;)g.appendChild(t.firstChild);else g=t;return(d.shadowroot||d.shadowrootmode)&&(g=qt.call(a,g,!0)),g}let R=k?t.outerHTML:t.innerHTML;return k&&p["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&y(Be,t.ownerDocument.doctype.name)&&(R="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+R),H&&Q([Ae,Se,Re],U=>{R=X(R,U," ")}),S&&ae?S.createHTML(R):R},o.setConfig=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ie(i),Ne=!0},o.clearConfig=function(){Y=null,Ne=!1},o.isValidAttribute=function(i,e,t){Y||Ie({});let n=T(i),f=T(e);return Tt(n,f,t)},o.addHook=function(i,e){typeof e=="function"&&(D[i]=D[i]||[],j(D[i],e))},o.removeHook=function(i){if(D[i])return Ue(D[i])},o.removeHooks=function(i){D[i]&&(D[i]=[])},o.removeAllHooks=function(){D={}},o}var Ht=je();return Ht})});var Rt=hn(St(),1),ke=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let c=this.getAttribute("onload");c&&new Function(c)()}static get observedAttributes(){return["src","onload"]}attributeChangedCallback(c,_,C){c==="src"&&C!==_&&this.loadContent(C)}async loadContent(c){try{let _=await fetch(c);if(!_.ok)throw new Error(`${c} not found`);let C=await _.text();this.shadowRoot.innerHTML=this.sanitizeHTML(C)}catch(_){console.error(_),this.shadowRoot.innerHTML=`<p>Error loading content from ${c}</p>`}}sanitizeHTML(c){return Rt.sanitize(c,{CUSTOM_ELEMENT_HANDLING:{tagNameCheck:/^dx-/,attributeNameCheck:/./,allowCustomizedBuiltInElements:!0}})}};customElements.define("dx-include",ke);})();
/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */
//# sourceMappingURL=dx-include.js.map
