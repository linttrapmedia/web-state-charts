type DxAppend = [dx: "append", selector: string, html: string];
type DxAttr = [dx: "attr", selector: string, attr: string, value: string];
type DxClick = [dx: "click", selector: string, action: string];
type DxCall = [
  dx: "call",
  selector: string,
  method: string,
  ...args: (string | number)[]
];
type DxDispatch = [dx: "dispatch", action: string];
type DxGet = [dx: "get", url: string];
type DxJs = [dx: "js", method: string, ...args: (string | number)[]];
type DxPost = [
  dx: "post",
  url: string,
  ...data: [
    key: string,
    selector: string,
    val: "value" | "dataset" | "formData"
  ][]
];
type DxReplace = [dx: "replace", selector: string, content: string];
type DxServer = [dx: "server", key: string];
type DxState = [dx: "state", state: string];
type DxWait = [dx: "wait", milliseconds: number, action: string];

type DX =
  | DxAppend
  | DxAttr
  | DxClick
  | DxCall
  | DxJs
  | DxGet
  | DxPost
  | DxReplace
  | DxServer
  | DxState
  | DxWait;

type Config = {
  initialState: string;
  bindings: [selector: string, ...[event: string, action: string][]][];
  states: Record<string, Record<string | "entry", DX[]>>;
};

class DomMachine extends HTMLElement {
  state: string;
  config: Config;
  subs: ((state: string, action: string, dx: DX) => void)[] = [];
  constructor() {
    super();
    this.transform = this.transform.bind(this);
    this.applyAppend = this.applyAppend.bind(this);
    this.applyAttr = this.applyAttr.bind(this);
    this.applyCall = this.applyCall.bind(this);
    this.applyClick = this.applyClick.bind(this);
    this.applyDispatch = this.applyDispatch.bind(this);
    this.applyGet = this.applyGet.bind(this);
    this.applyJs = this.applyJs.bind(this);
    this.applyPost = this.applyPost.bind(this);
    this.applyReplace = this.applyReplace.bind(this);
    this.applyState = this.applyState.bind(this);
    this.applyWait = this.applyWait.bind(this);
    this.handleClientEvent = this.handleClientEvent.bind(this);
    this.handleServerEvent = this.handleServerEvent.bind(this);
    this.init = this.init.bind(this);
    this.sub = this.sub.bind(this);
  }
  connectedCallback() {
    const src = this.getAttribute("src");
    if (!src) return;
    fetch(src).then((r) => r.json().then(this.init));
  }
  applyAppend(transformation: DxAppend) {
    const [, selector, html] = transformation;
    const el = this.querySelector(selector);
    if (!el) return;
    const tmpl = document.createElement("template");
    tmpl.innerHTML = decodeURIComponent(html);
    el.append(tmpl.content);
  }
  applyAttr(transformation: DxAttr) {
    const [, selector, attr, value] = transformation;
    const els = this.querySelectorAll(selector) as NodeListOf<HTMLElement>;
    els.forEach((el) => {
      if (value === null) return el.removeAttribute(attr);
      el.setAttribute(attr, value);
    });
  }
  applyCall(transformation: DxCall) {
    const [, selector, method, ...args] = transformation;
    const el = this.querySelector(selector);
    if (!el) return;
    el[method](...args);
  }
  applyClick(transformation: DxClick) {
    const [, selector, action] = transformation;
    const els = this.querySelectorAll(selector) as NodeListOf<HTMLElement>;
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      const cb = (e) => {
        e.preventDefault();
        this.handleClientEvent(action);
      };
      el.removeEventListener("click", cb);
      el.addEventListener("click", cb);
    }
  }
  applyDispatch(transformation: DxCall) {
    const [, action] = transformation;
    this.handleClientEvent(action);
  }
  applyGet(transformation: DxGet) {
    const [, url] = transformation;
    fetch(url, {
      method: "GET",
    }).then((r) => r.json().then(this.handleServerEvent));
  }
  applyJs(transformation: DxJs) {
    const [, method, ...args] = transformation;
    window[method](...args);
  }
  applyPost(transformation: DxPost) {
    const [, url, ...data] = transformation;
    const body = {};
    for (let i = 0; i < data.length; i++) {
      const [key, selector, val] = data[i];
      const el = this.querySelector(selector);
      if (!el) return;
      body[key] = el[val];
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then((r) => r.json().then(this.handleServerEvent));
  }
  applyReplace(transformation: DxReplace) {
    const [, selector, content] = transformation;
    const el = this.querySelector(selector);
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    const tmpl = document.createElement("template");
    tmpl.innerHTML = decodeURIComponent(content);
    parent.replaceChild(tmpl.content, el);
  }
  applyState(transformation: DxState) {
    const [, state] = transformation;
    const hasEntry = this.config.states[state].entry;
    if (hasEntry) this.transform("entry", this.config.states[state].entry);
    this.state = state;
  }
  applyWait(transformation: DxWait) {
    const [, timeInSeconds, action] = transformation;
    const startTime = new Date().getTime();
    while (new Date().getTime() - startTime < timeInSeconds) {
      // Do nothing
    }
    if (action) this.handleClientEvent(action);
  }
  handleClientEvent(action: string) {
    console.log(action, this.config.states[this.state][action]);
    this.transform(action, this.config.states[this.state][action] as DX[]);
  }
  handleServerEvent(se: { action: string } & any) {
    const { action } = se;
    const transformations = this.config.states[this.state][action].reduce(
      (acc, t) => {
        const [dx, key] = t as any;
        if (dx === "server") return [...acc, ...se[key]];
        return [...acc, t];
      },
      [] as DX[]
    );
    this.transform(action, transformations);
  }
  init(config: Config) {
    this.config = config;
    const that = this;

    // Apply bindings
    const bindings = this.config.bindings ?? [];

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          for (let i = 0; i < bindings.length; i++) {
            const [selector, ...events] = bindings[i];
            const els = this.querySelectorAll(
              selector
            ) as NodeListOf<HTMLElement>;
            for (let j = 0; j < els.length; j++) {
              const el = els[j];
              for (let k = 0; k < events.length; k++) {
                const [event, action] = events[k];
                const cb = (e) => {
                  e.preventDefault();
                  console.log(e.target, el);
                  if (e.target !== el) return;
                  this.handleClientEvent(action);
                };
                that.removeEventListener(event, cb);
                that.addEventListener(event, cb);
              }
            }
          }
        }
      });
    });

    observer.observe(this, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    // for (let i = 0; i < bindings.length; i++) {
    //   const [selector, events] = bindings[i];
    //   const els = this.querySelectorAll(selector) as NodeListOf<HTMLElement>;
    //   console.log(els);
    //   for (let j = 0; j < els.length; j++) {
    //     const el = els[j];
    //     for (let k = 0; k < events.length; k++) {
    //       const [event, action] = events[k];
    //       this.addEventListener(event, (e) => {
    //         console.log(e.target, el);
    //         e.preventDefault();
    //         if (e.target !== el) return;
    //         this.handleClientEvent(action);
    //       });
    //     }
    //   }
    // }

    // Apply initial state
    const initState = config.states[config.initialState];
    this.state = config.initialState;
    if (initState.entry) this.transform("entry", initState.entry);
  }
  sub(s: (state: string, action: string, dx: DX) => void) {
    this.subs.push(s);
  }
  transform(action: string, transformations: DX[]) {
    if (!transformations) return;
    for (let i = 0; i < transformations.length; i++) {
      const transformation = transformations[i];
      const [trait] = transformation;
      const traitMap = {
        append: this.applyAppend,
        attr: this.applyAttr,
        click: this.applyClick,
        call: this.applyCall,
        dispatch: this.applyDispatch,
        js: this.applyJs,
        get: this.applyGet,
        post: this.applyPost,
        replace: this.applyReplace,
        state: this.applyState,
        wait: this.applyWait,
      };
      traitMap[trait](transformation);
      this.subs.forEach((s) => s(this.state, action, transformation));
    }
  }
}

customElements.define("dom-machine", DomMachine);
