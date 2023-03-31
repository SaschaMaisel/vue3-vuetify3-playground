import { Fragment as fe, reactive as Rn, computed as g, watchEffect as zt, toRefs as Mt, getCurrentInstance as Dt, shallowRef as zn, shallowReactive as Mn, toRaw as Dn, watch as H, effectScope as Ft, defineComponent as ge, capitalize as ot, camelize as Wt, h as $e, inject as G, ref as C, unref as de, provide as le, createVNode as u, mergeProps as Se, isRef as he, toRef as P, Transition as xe, onBeforeMount as ut, nextTick as Fn, withDirectives as be, resolveDirective as ct, vShow as Ht, onBeforeUnmount as ae, resolveDynamicComponent as Wn, onMounted as Ge, openBlock as q, createBlock as ce, withCtx as B, createTextVNode as te, renderSlot as Hn, readonly as jt, onDeactivated as jn, onActivated as Gn, createElementVNode as Gt, toDisplayString as _e, TransitionGroup as Yn, resolveComponent as Ne, createElementBlock as Qe, renderList as xt, createCommentVNode as It } from "vue";
function Vt(e, t, n) {
  Xn(e, t), t.set(e, n);
}
function Xn(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function qn(e, t, n) {
  var l = Yt(e, t, "set");
  return Kn(e, l, n), n;
}
function Kn(e, t, n) {
  if (t.set)
    t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function ee(e, t) {
  var n = Yt(e, t, "get");
  return Un(e, n);
}
function Yt(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function Un(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Xt(e, t, n) {
  const l = t.length - 1;
  if (l < 0)
    return e === void 0 ? n : e;
  for (let i = 0; i < l; i++) {
    if (e == null)
      return n;
    e = e[t[i]];
  }
  return e == null || e[t[l]] === void 0 ? n : e[t[l]];
}
function Zn(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Xt(e, t.split("."), n));
}
function pe(e, t, n) {
  if (t == null)
    return e === void 0 ? n : e;
  if (e !== Object(e))
    return n;
  if (typeof t == "string")
    return Zn(e, t, n);
  if (Array.isArray(t))
    return Xt(e, t, n);
  if (typeof t != "function")
    return n;
  const l = t(e, n);
  return typeof l > "u" ? n : l;
}
function $(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function nt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const Lt = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
function qt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    t.some((a) => a instanceof RegExp ? a.test(i) : a === i) ? n[i] = e[i] : l[i] = e[i];
  return [n, l];
}
function De() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const i in e)
    l[i] = e[i];
  for (const i in t) {
    const a = e[i], s = t[i];
    if (nt(a) && nt(s)) {
      l[i] = De(a, s, n);
      continue;
    }
    if (Array.isArray(a) && Array.isArray(s) && n) {
      l[i] = n(a, s);
      continue;
    }
    l[i] = s;
  }
  return l;
}
function Kt(e) {
  return e.map((t) => t.type === fe ? Kt(t.children) : t).flat();
}
function dt() {
  return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
}
var Oe = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap();
class Jn {
  constructor(t) {
    Vt(this, Oe, {
      writable: !0,
      value: []
    }), Vt(this, oe, {
      writable: !0,
      value: 0
    }), this.size = t;
  }
  push(t) {
    ee(this, Oe)[ee(this, oe)] = t, qn(this, oe, (ee(this, oe) + 1) % this.size);
  }
  values() {
    return ee(this, Oe).slice(ee(this, oe)).concat(ee(this, Oe).slice(0, ee(this, oe)));
  }
}
function Ut(e) {
  const t = Rn({}), n = g(e);
  return zt(() => {
    for (const l in n.value)
      t[l] = n.value[l];
  }, {
    flush: "sync"
  }), Mt(t);
}
function lt(e, t) {
  return e.includes(t);
}
const Qn = ["top", "bottom"], el = ["start", "end", "left", "right"];
function tl(e, t) {
  let [n, l] = e.split(" ");
  return l || (l = lt(Qn, n) ? "start" : lt(el, n) ? "top" : "center"), {
    side: at(n, t),
    align: at(l, t)
  };
}
function at(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function nl(e, t, n) {
  if (n && (t = {
    _isVue: !0,
    $parent: n,
    $options: t
  }), t) {
    if (t.$_alreadyWarned = t.$_alreadyWarned || [], t.$_alreadyWarned.includes(e))
      return;
    t.$_alreadyWarned.push(e);
  }
  return `[Vuetify] ${e}` + (t ? sl(t) : "");
}
function ll(e, t, n) {
  const l = nl(e, t, n);
  l != null && console.warn(l);
}
const al = /(?:^|[-_])(\w)/g, il = (e) => e.replace(al, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function et(e, t) {
  if (e.$root === e)
    return "<Root>";
  const n = typeof e == "function" && e.cid != null ? e.options : e._isVue ? e.$options || e.constructor.options : e || {};
  let l = n.name || n._componentTag;
  const i = n.__file;
  if (!l && i) {
    const a = i.match(/([^/\\]+)\.vue$/);
    l = a == null ? void 0 : a[1];
  }
  return (l ? `<${il(l)}>` : "<Anonymous>") + (i && t !== !1 ? ` at ${i}` : "");
}
function sl(e) {
  if (e._isVue && e.$parent) {
    const t = [];
    let n = 0;
    for (; e; ) {
      if (t.length > 0) {
        const l = t[t.length - 1];
        if (l.constructor === e.constructor) {
          n++, e = e.$parent;
          continue;
        } else
          n > 0 && (t[t.length - 1] = [l, n], n = 0);
      }
      t.push(e), e = e.$parent;
    }
    return `

found in

` + t.map((l, i) => `${i === 0 ? "---> " : " ".repeat(5 + i * 2)}${Array.isArray(l) ? `${et(l[0])}... (${l[1]} recursive calls)` : et(l)}`).join(`
`);
  } else
    return `

(found in ${et(e)})`;
}
function At(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function K(e, t) {
  const n = Dt();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function ie() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = K(e).type;
  return dt((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
let Zt = 0, ze = /* @__PURE__ */ new WeakMap();
function vt() {
  const e = K("getUid");
  if (ze.has(e))
    return ze.get(e);
  {
    const t = Zt++;
    return ze.set(e, t), t;
  }
}
vt.reset = () => {
  Zt = 0, ze = /* @__PURE__ */ new WeakMap();
};
function rl(e) {
  const {
    provides: t
  } = K("injectSelf");
  if (t && e in t)
    return t[e];
}
function E(e, t) {
  return (n) => Object.keys(e).reduce((l, i) => {
    const s = typeof e[i] == "object" && e[i] != null && !Array.isArray(e[i]) ? e[i] : {
      type: e[i]
    };
    return n && i in n ? l[i] = {
      ...s,
      default: n[i]
    } : l[i] = s, t && !l[i].source && (l[i].source = t), l;
  }, {});
}
function ol(e, t) {
  var n, l;
  return ((n = e.props) == null ? void 0 : n.hasOwnProperty(t)) || ((l = e.props) == null ? void 0 : l.hasOwnProperty(dt(t)));
}
const T = function(t) {
  return t._setup = t._setup ?? t.setup, t.name ? (t._setup && (t.props = t.props ?? {}, t.props = E(t.props, t.name)(), t.props._as = String, t.setup = function(l, i) {
    const a = Dt(), s = Jt(), r = zn(), m = Mn({
      ...Dn(l)
    });
    zt(() => {
      const o = s.value.global, d = s.value[l._as ?? t.name];
      if (d) {
        const f = Object.entries(d).filter((y) => {
          let [S] = y;
          return S.startsWith("V");
        });
        f.length && (r.value = Object.fromEntries(f));
      }
      for (const f of Object.keys(l)) {
        let y = l[f];
        ol(a.vnode, f) || (y = (d == null ? void 0 : d[f]) ?? (o == null ? void 0 : o[f]) ?? l[f]), m[f] !== y && (m[f] = y);
      }
    });
    const c = t._setup(m, i);
    let v;
    return H(r, (o, d) => {
      !o && v ? v.stop() : o && !d && (v = Ft(), v.run(() => {
        var f;
        Ve(De(((f = rl(gt)) == null ? void 0 : f.value) ?? {}, o));
      }));
    }, {
      immediate: !0
    }), c;
  }), t) : (ll("The component is missing an explicit name, unable to generate default prop value"), t);
};
function Ye() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? T : ge)(t);
}
function Ie(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return T({
    name: n ?? ot(Wt(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      }
    },
    setup(l, i) {
      let {
        slots: a
      } = i;
      return () => {
        var s;
        return $e(l.tag, {
          class: e
        }, (s = a.default) == null ? void 0 : s.call(a));
      };
    }
  });
}
const ft = typeof window < "u", mt = ft && "IntersectionObserver" in window;
ft && typeof CSS < "u" && CSS.supports("selector(:focus-visible)");
function z(e) {
  const t = K("useRender");
  t.render = e;
}
const gt = Symbol.for("vuetify:defaults");
function Jt() {
  const e = G(gt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Ve(e, t) {
  const n = Jt(), l = C(e), i = g(() => {
    const a = de(t == null ? void 0 : t.scoped), s = de(t == null ? void 0 : t.reset), r = de(t == null ? void 0 : t.root);
    let m = De(l.value, {
      prev: n.value
    });
    if (a)
      return m;
    if (s || r) {
      const c = Number(s || 1 / 0);
      for (let v = 0; v <= c && m.prev; v++)
        m = m.prev;
      return m;
    }
    return De(m.prev, m);
  });
  return le(gt, i), i;
}
const ul = T({
  name: "VCardActions",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ve({
      VBtn: {
        variant: "text"
      }
    }), z(() => {
      var l;
      return u("div", {
        class: "v-card-actions"
      }, [(l = n.default) == null ? void 0 : l.call(n)]);
    }), {};
  }
});
const F = [String, Function, Object], cl = Symbol.for("vuetify:icons"), Xe = E({
  icon: {
    type: F,
    required: !0
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), dl = T({
  name: "VComponentIcon",
  props: Xe(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [u(e.icon, null, null)]
    });
  }
});
T({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Xe(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => u(e.tag, Se(n, {
      style: null
    }), {
      default: () => [u("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [u("path", {
        d: e.icon
      }, null)])]
    });
  }
});
T({
  name: "VLigatureIcon",
  props: Xe(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
T({
  name: "VClassIcon",
  props: Xe(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
});
const vl = (e) => {
  const t = G(cl);
  if (!t)
    throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: g(() => {
      const l = he(e) ? e.value : e.icon;
      if (!l)
        throw new Error("Icon value is undefined or null");
      let i = l;
      if (typeof l == "string" && l.includes("$")) {
        var a;
        i = (a = t.aliases) == null ? void 0 : a[l.slice(l.indexOf("$") + 1)];
      }
      if (!i)
        throw new Error(`Could not find aliased icon "${l}"`);
      if (typeof i != "string")
        return {
          component: dl,
          icon: i
        };
      const s = Object.keys(t.sets).find((c) => typeof i == "string" && i.startsWith(`${c}:`)), r = s ? i.slice(s.length + 1) : i;
      return {
        component: t.sets[s ?? t.defaultSet].component,
        icon: r
      };
    })
  };
}, fl = ["x-small", "small", "default", "large", "x-large"], Qt = E({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function en(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ie();
  return Ut(() => {
    let n, l;
    return lt(fl, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = {
      width: $(e.size),
      height: $(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: l
    };
  });
}
const j = E({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), Bt = Symbol.for("vuetify:theme"), J = E({
  theme: String
}, "theme");
function Q(e) {
  K("provideTheme");
  const t = G(Bt, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = g(() => e.theme ?? (t == null ? void 0 : t.name.value)), l = g(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = {
    ...t,
    name: n,
    themeClasses: l
  };
  return le(Bt, i), i;
}
function ht(e) {
  return Ut(() => {
    const t = [], n = {};
    return e.value.background && (At(e.value.background) ? n.backgroundColor = e.value.background : t.push(`bg-${e.value.background}`)), e.value.text && (At(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function yt(e, t) {
  const n = g(() => ({
    text: he(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: l,
    colorStyles: i
  } = ht(n);
  return {
    textColorClasses: l,
    textColorStyles: i
  };
}
function ne(e, t) {
  const n = g(() => ({
    background: he(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: l,
    colorStyles: i
  } = ht(n);
  return {
    backgroundColorClasses: l,
    backgroundColorStyles: i
  };
}
const ml = E({
  color: String,
  start: Boolean,
  end: Boolean,
  icon: F,
  ...Qt(),
  ...j({
    tag: "i"
  }),
  ...J()
}, "v-icon"), ve = T({
  name: "VIcon",
  props: ml(),
  setup(e, t) {
    let {
      attrs: n,
      slots: l
    } = t, i;
    l.default && (i = g(() => {
      var v, o;
      const d = (v = l.default) == null ? void 0 : v.call(l);
      if (d)
        return (o = Kt(d).filter((f) => f.children && typeof f.children == "string")[0]) == null ? void 0 : o.children;
    }));
    const {
      themeClasses: a
    } = Q(e), {
      iconData: s
    } = vl(i || e), {
      sizeClasses: r
    } = en(e), {
      textColorClasses: m,
      textColorStyles: c
    } = yt(P(e, "color"));
    return z(() => u(s.value.component, {
      tag: e.tag,
      icon: s.value.icon,
      class: ["v-icon", "notranslate", a.value, r.value, m.value, {
        "v-icon--clickable": !!n.onClick,
        "v-icon--start": e.start,
        "v-icon--end": e.end
      }],
      style: [r.value ? void 0 : {
        fontSize: $(e.size),
        height: $(e.size),
        width: $(e.size)
      }, c.value],
      role: n.onClick ? "button" : void 0,
      "aria-hidden": !n.onClick
    }, null)), {};
  }
});
const qe = E({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Ke(e) {
  return {
    dimensionStyles: g(() => ({
      height: $(e.height),
      maxHeight: $(e.maxHeight),
      maxWidth: $(e.maxWidth),
      minHeight: $(e.minHeight),
      minWidth: $(e.minWidth),
      width: $(e.width)
    }))
  };
}
function gl(e) {
  return {
    aspectStyles: g(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const hl = T({
  name: "VResponsive",
  props: {
    aspectRatio: [String, Number],
    contentClass: String,
    ...qe()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: l
    } = gl(e), {
      dimensionStyles: i
    } = Ke(e);
    return z(() => {
      var a;
      return u("div", {
        class: "v-responsive",
        style: i.value
      }, [u("div", {
        class: "v-responsive__sizer",
        style: l.value
      }, null), (a = n.additional) == null ? void 0 : a.call(n), n.default && u("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [n.default()])]);
    }), {};
  }
});
function yl(e, t) {
  if (!mt)
    return;
  const n = t.modifiers || {}, l = t.value, {
    handler: i,
    options: a
  } = typeof l == "object" ? l : {
    handler: l,
    options: {}
  }, s = new IntersectionObserver(function() {
    var r;
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], c = arguments.length > 1 ? arguments[1] : void 0;
    const v = (r = e._observe) == null ? void 0 : r[t.instance.$.uid];
    if (!v)
      return;
    const o = m.some((d) => d.isIntersecting);
    i && (!n.quiet || v.init) && (!n.once || o || v.init) && i(o, m, c), o && n.once ? tn(e, t) : v.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: s
  }, s.observe(e);
}
function tn(e, t) {
  var n;
  const l = (n = e._observe) == null ? void 0 : n[t.instance.$.uid];
  l && (l.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const pl = {
  mounted: yl,
  unmounted: tn
}, _l = pl, Sl = E({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Re = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: l,
    ...i
  } = e, {
    component: a = xe,
    ...s
  } = typeof l == "object" ? l : {};
  return $e(a, Se(typeof l == "string" ? {
    name: l
  } : s, i), n);
}, nn = T({
  name: "VImg",
  directives: {
    intersect: _l
  },
  props: {
    aspectRatio: [String, Number],
    alt: String,
    cover: Boolean,
    eager: Boolean,
    gradient: String,
    lazySrc: String,
    options: {
      type: Object,
      // For more information on types, navigate to:
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      default: () => ({
        root: void 0,
        rootMargin: void 0,
        threshold: void 0
      })
    },
    sizes: String,
    src: {
      type: [String, Object],
      default: ""
    },
    srcset: String,
    width: [String, Number],
    ...Sl()
  },
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: l
    } = t;
    const i = C(""), a = C(), s = C(e.eager ? "loading" : "idle"), r = C(), m = C(), c = g(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), v = g(() => c.value.aspect || r.value / m.value || 0);
    H(() => e.src, () => {
      o(s.value !== "idle");
    }), ut(() => o());
    function o(h) {
      if (!(e.eager && h) && !(mt && !h && !e.eager)) {
        if (s.value = "loading", c.value.lazySrc) {
          const p = new Image();
          p.src = c.value.lazySrc, S(p, null);
        }
        c.value.src && Fn(() => {
          var p, w;
          if (n("loadstart", ((p = a.value) == null ? void 0 : p.currentSrc) || c.value.src), (w = a.value) != null && w.complete) {
            if (a.value.naturalWidth || f(), s.value === "error")
              return;
            v.value || S(a.value, null), d();
          } else
            v.value || S(a.value), y();
        });
      }
    }
    function d() {
      var h;
      y(), s.value = "loaded", n("load", ((h = a.value) == null ? void 0 : h.currentSrc) || c.value.src);
    }
    function f() {
      var h;
      s.value = "error", n("error", ((h = a.value) == null ? void 0 : h.currentSrc) || c.value.src);
    }
    function y() {
      const h = a.value;
      h && (i.value = h.currentSrc || h.src);
    }
    function S(h) {
      let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const w = () => {
        const {
          naturalHeight: L,
          naturalWidth: M
        } = h;
        L || M ? (r.value = M, m.value = L) : !h.complete && s.value === "loading" && p != null ? setTimeout(w, p) : (h.currentSrc.endsWith(".svg") || h.currentSrc.startsWith("data:image/svg+xml")) && (r.value = 1, m.value = 1);
      };
      w();
    }
    const _ = g(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), I = () => {
      var h;
      if (!c.value.src || s.value === "idle")
        return null;
      const p = u("img", {
        class: ["v-img__img", _.value],
        src: c.value.src,
        srcset: c.value.srcset,
        alt: "",
        sizes: e.sizes,
        ref: a,
        onLoad: d,
        onError: f
      }, null), w = (h = l.sources) == null ? void 0 : h.call(l);
      return u(Re, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [be(w ? u("picture", {
          class: "v-img__picture"
        }, [w, p]) : p, [[Ht, s.value === "loaded"]])]
      });
    }, x = () => u(Re, {
      transition: e.transition
    }, {
      default: () => [c.value.lazySrc && s.value !== "loaded" && u("img", {
        class: ["v-img__img", "v-img__img--preload", _.value],
        src: c.value.lazySrc,
        alt: ""
      }, null)]
    }), V = () => l.placeholder ? u(Re, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(s.value === "loading" || s.value === "error" && !l.error) && u("div", {
        class: "v-img__placeholder"
      }, [l.placeholder()])]
    }) : null, N = () => l.error ? u(Re, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [s.value === "error" && u("div", {
        class: "v-img__error"
      }, [l.error()])]
    }) : null, b = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, k = C(!1);
    {
      const h = H(v, (p) => {
        p && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            k.value = !0;
          });
        }), h());
      });
    }
    return z(() => be(u(hl, {
      class: ["v-img", {
        "v-img--booting": !k.value
      }],
      style: {
        width: $(e.width === "auto" ? r.value : e.width)
      },
      aspectRatio: v.value,
      "aria-label": e.alt,
      role: e.alt ? "img" : void 0
    }, {
      additional: () => u(fe, null, [u(I, null, null), u(x, null, null), u(b, null, null), u(V, null, null), u(N, null, null)]),
      default: l.default
    }), [[ct("intersect"), {
      handler: o,
      options: e.options
    }, null, {
      once: !0
    }]])), {
      currentSrc: i,
      image: a,
      state: s,
      naturalWidth: r,
      naturalHeight: m
    };
  }
}), bl = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function pt(e, t) {
  return u(fe, null, [e && u("span", {
    key: "overlay",
    class: `${t}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${t}__underlay`
  }, null)]);
}
const Ue = E({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => bl.includes(e)
  }
}, "variant");
function _t(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ie();
  const n = g(() => {
    const {
      variant: a
    } = de(e);
    return `${t}--variant-${a}`;
  }), {
    colorClasses: l,
    colorStyles: i
  } = ht(g(() => {
    const {
      variant: a,
      color: s
    } = de(e);
    return {
      [["elevated", "flat"].includes(a) ? "background" : "text"]: s
    };
  }));
  return {
    colorClasses: l,
    colorStyles: i,
    variantClasses: n
  };
}
const wl = [null, "default", "comfortable", "compact"], Le = E({
  density: {
    type: String,
    default: "default",
    validator: (e) => wl.includes(e)
  }
}, "density");
function Ze(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ie();
  return {
    densityClasses: g(() => `${t}--density-${e.density}`)
  };
}
const se = E({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  }
}, "rounded");
function re(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ie();
  return {
    roundedClasses: g(() => {
      const l = he(e) ? e.value : e.rounded, i = [];
      if (l === !0 || l === "")
        i.push(`${t}--rounded`);
      else if (typeof l == "string" || l === 0)
        for (const a of String(l).split(" "))
          i.push(`rounded-${a}`);
      return i;
    })
  };
}
const Cl = E({
  start: Boolean,
  end: Boolean,
  icon: F,
  image: String,
  ...Le(),
  ...se(),
  ...Qt(),
  ...j(),
  ...Ue({
    variant: "flat"
  })
}, "VAvatar"), Fe = T({
  name: "VAvatar",
  props: Cl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      colorClasses: l,
      colorStyles: i,
      variantClasses: a
    } = _t(e), {
      densityClasses: s
    } = Ze(e), {
      roundedClasses: r
    } = re(e), {
      sizeClasses: m,
      sizeStyles: c
    } = en(e);
    return z(() => {
      var v;
      return u(e.tag, {
        class: ["v-avatar", {
          "v-avatar--start": e.start,
          "v-avatar--end": e.end
        }, l.value, s.value, r.value, m.value, a.value],
        style: [i.value, c.value]
      }, {
        default: () => [e.image ? u(nn, {
          key: "image",
          src: e.image,
          alt: ""
        }, null) : e.icon ? u(ve, {
          key: "icon",
          icon: e.icon
        }, null) : (v = n.default) == null ? void 0 : v.call(n), pt(!1, "v-avatar")]
      });
    }), {};
  }
}), kl = Ie("v-card-subtitle"), ln = Ie("v-card-title"), me = ge({
  name: "VDefaultsProvider",
  props: {
    defaults: Object,
    reset: [Number, String],
    root: Boolean,
    scoped: Boolean
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: l,
      reset: i,
      root: a,
      scoped: s
    } = Mt(e);
    return Ve(l, {
      reset: i,
      root: a,
      scoped: s
    }), () => {
      var r;
      return (r = n.default) == null ? void 0 : r.call(n);
    };
  }
}), $l = ge({
  name: "VCardItem",
  props: {
    appendAvatar: String,
    appendIcon: F,
    prependAvatar: String,
    prependIcon: F,
    subtitle: String,
    title: String,
    ...Le()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => {
      var l, i, a, s, r;
      const m = !!(e.prependAvatar || e.prependIcon || n.prepend), c = !!(e.appendAvatar || e.appendIcon || n.append), v = !!(e.title || n.title), o = !!(e.subtitle || n.subtitle);
      return u("div", {
        class: "v-card-item"
      }, [m && u(me, {
        key: "prepend",
        defaults: {
          VAvatar: {
            density: e.density,
            icon: e.prependIcon,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, {
        default: () => [u("div", {
          class: "v-card-item__prepend"
        }, [((l = n.prepend) == null ? void 0 : l.call(n)) ?? u(Fe, null, null)])]
      }), u("div", {
        class: "v-card-item__content"
      }, [v && u(ln, {
        key: "title"
      }, {
        default: () => [((i = n.title) == null ? void 0 : i.call(n)) ?? e.title]
      }), o && u(kl, {
        key: "subtitle"
      }, {
        default: () => [((a = n.subtitle) == null ? void 0 : a.call(n)) ?? e.subtitle]
      }), (s = n.default) == null ? void 0 : s.call(n)]), c && u(me, {
        key: "append",
        defaults: {
          VAvatar: {
            density: e.density,
            icon: e.appendIcon,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, {
        default: () => [u("div", {
          class: "v-card-item__append"
        }, [((r = n.append) == null ? void 0 : r.call(n)) ?? u(Fe, null, null)])]
      })]);
    }), {};
  }
}), xl = Ie("v-card-text");
const it = Symbol("rippleStop"), Il = 80;
function Et(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function tt(e, t) {
  e.style.opacity = `calc(${t} * var(--v-theme-overlay-multiplier))`;
}
function st(e) {
  return e.constructor.name === "TouchEvent";
}
function an(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Vl = function(e, t) {
  var n;
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = 0, a = 0;
  if (!an(e)) {
    const d = t.getBoundingClientRect(), f = st(e) ? e.touches[e.touches.length - 1] : e;
    i = f.clientX - d.left, a = f.clientY - d.top;
  }
  let s = 0, r = 0.3;
  (n = t._ripple) != null && n.circle ? (r = 0.15, s = t.clientWidth / 2, s = l.center ? s : s + Math.sqrt((i - s) ** 2 + (a - s) ** 2) / 4) : s = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const m = `${(t.clientWidth - s * 2) / 2}px`, c = `${(t.clientHeight - s * 2) / 2}px`, v = l.center ? m : `${i - s}px`, o = l.center ? c : `${a - s}px`;
  return {
    radius: s,
    scale: r,
    x: v,
    y: o,
    centerX: m,
    centerY: c
  };
}, We = {
  /* eslint-disable max-statements */
  show(e, t) {
    var n;
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!(t != null && (n = t._ripple) != null && n.enabled))
      return;
    const i = document.createElement("span"), a = document.createElement("span");
    i.appendChild(a), i.className = "v-ripple__container", l.class && (i.className += ` ${l.class}`);
    const {
      radius: s,
      scale: r,
      x: m,
      y: c,
      centerX: v,
      centerY: o
    } = Vl(e, t, l), d = `${s * 2}px`;
    a.className = "v-ripple__animation", a.style.width = d, a.style.height = d, t.appendChild(i);
    const f = window.getComputedStyle(t);
    f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), Et(a, `translate(${m}, ${c}) scale3d(${r},${r},${r})`), tt(a, 0), a.dataset.activated = String(performance.now()), setTimeout(() => {
      a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), Et(a, `translate(${v}, ${o}) scale3d(1,1,1)`), tt(a, 0.08);
    }, 0);
  },
  hide(e) {
    var t;
    if (!(e != null && (t = e._ripple) != null && t.enabled))
      return;
    const n = e.getElementsByClassName("v-ripple__animation");
    if (n.length === 0)
      return;
    const l = n[n.length - 1];
    if (l.dataset.isHiding)
      return;
    l.dataset.isHiding = "true";
    const i = performance.now() - Number(l.dataset.activated), a = Math.max(250 - i, 0);
    setTimeout(() => {
      l.classList.remove("v-ripple__animation--in"), l.classList.add("v-ripple__animation--out"), tt(l, 0), setTimeout(() => {
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), l.parentNode && e.removeChild(l.parentNode);
      }, 300);
    }, a);
  }
};
function sn(e) {
  return typeof e > "u" || !!e;
}
function we(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[it])) {
    if (e[it] = !0, st(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || an(e), n._ripple.class && (t.class = n._ripple.class), st(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        We.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var l;
        n != null && (l = n._ripple) != null && l.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Il);
    } else
      We.show(e, n, t);
  }
}
function Tt(e) {
  e[it] = !0;
}
function D(e) {
  const t = e.currentTarget;
  if (!(!t || !t._ripple)) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        D(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), We.hide(t);
  }
}
function rn(e) {
  const t = e.currentTarget;
  !t || !t._ripple || (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Ce = !1;
function on(e) {
  !Ce && (e.keyCode === Lt.enter || e.keyCode === Lt.space) && (Ce = !0, we(e));
}
function un(e) {
  Ce = !1, D(e);
}
function cn(e) {
  Ce && (Ce = !1, D(e));
}
function dn(e, t, n) {
  const {
    value: l,
    modifiers: i
  } = t, a = sn(l);
  if (a || We.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = i.center, e._ripple.circle = i.circle, nt(l) && l.class && (e._ripple.class = l.class), a && !n) {
    if (i.stop) {
      e.addEventListener("touchstart", Tt, {
        passive: !0
      }), e.addEventListener("mousedown", Tt);
      return;
    }
    e.addEventListener("touchstart", we, {
      passive: !0
    }), e.addEventListener("touchend", D, {
      passive: !0
    }), e.addEventListener("touchmove", rn, {
      passive: !0
    }), e.addEventListener("touchcancel", D), e.addEventListener("mousedown", we), e.addEventListener("mouseup", D), e.addEventListener("mouseleave", D), e.addEventListener("keydown", on), e.addEventListener("keyup", un), e.addEventListener("blur", cn), e.addEventListener("dragstart", D, {
      passive: !0
    });
  } else
    !a && n && vn(e);
}
function vn(e) {
  e.removeEventListener("mousedown", we), e.removeEventListener("touchstart", we), e.removeEventListener("touchend", D), e.removeEventListener("touchmove", rn), e.removeEventListener("touchcancel", D), e.removeEventListener("mouseup", D), e.removeEventListener("mouseleave", D), e.removeEventListener("keydown", on), e.removeEventListener("keyup", un), e.removeEventListener("dragstart", D), e.removeEventListener("blur", cn);
}
function Ll(e, t) {
  dn(e, t, !1);
}
function Al(e) {
  delete e._ripple, vn(e);
}
function Bl(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = sn(t.oldValue);
  dn(e, t, n);
}
const fn = {
  mounted: Ll,
  unmounted: Al,
  updated: Bl
};
function El(e) {
  const t = C(), n = C(!1);
  if (mt) {
    const l = new IntersectionObserver((i) => {
      e == null || e(i, l), n.value = !!i.find((a) => a.isIntersecting);
    });
    ae(() => {
      l.disconnect();
    }), H(t, (i, a) => {
      a && (l.unobserve(a), n.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: t,
    isIntersecting: n
  };
}
function Tl(e, t) {
  let n;
  H(e, (l) => {
    if (l && !n)
      n = Ft(), n.run(t);
    else {
      var i;
      (i = n) == null || i.stop(), n = void 0;
    }
  }, {
    immediate: !0
  });
}
function He(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (o) => o, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (o) => o;
  const a = K("useProxiedModel"), s = C(e[t] !== void 0 ? e[t] : n), r = dt(t), c = r !== t ? g(() => {
    var o, d, f, y;
    return e[t], !!(((o = a.vnode.props) != null && o.hasOwnProperty(t) || (d = a.vnode.props) != null && d.hasOwnProperty(r)) && ((f = a.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`) || (y = a.vnode.props) != null && y.hasOwnProperty(`onUpdate:${r}`)));
  }) : g(() => {
    var o, d;
    return e[t], !!((o = a.vnode.props) != null && o.hasOwnProperty(t) && (d = a.vnode.props) != null && d.hasOwnProperty(`onUpdate:${t}`));
  });
  Tl(() => !c.value, () => {
    H(() => e[t], (o) => {
      s.value = o;
    });
  });
  const v = g({
    get() {
      return l(c.value ? e[t] : s.value);
    },
    set(o) {
      const d = i(o);
      (c.value ? e[t] : s.value) === d || l(c.value ? e[t] : s.value) === o || (s.value = d, a == null || a.emit(`update:${t}`, d));
    }
  });
  return Object.defineProperty(v, "externalValue", {
    get: () => c.value ? e[t] : s.value
  }), v;
}
const Pl = Symbol.for("vuetify:locale");
function St() {
  const e = G(Pl);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Nl = T({
  name: "VProgressLinear",
  props: {
    active: {
      type: Boolean,
      default: !0
    },
    bgColor: String,
    bgOpacity: [Number, String],
    bufferValue: {
      type: [Number, String],
      default: 0
    },
    clickable: Boolean,
    color: String,
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    modelValue: {
      type: [Number, String],
      default: 0
    },
    reverse: Boolean,
    stream: Boolean,
    striped: Boolean,
    roundedBar: Boolean,
    ...se(),
    ...j(),
    ...J()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = He(e, "modelValue"), {
      isRtl: i
    } = St(), {
      themeClasses: a
    } = Q(e), {
      textColorClasses: s,
      textColorStyles: r
    } = yt(e, "color"), {
      backgroundColorClasses: m,
      backgroundColorStyles: c
    } = ne(g(() => e.bgColor || e.color)), {
      backgroundColorClasses: v,
      backgroundColorStyles: o
    } = ne(e, "color"), {
      roundedClasses: d
    } = re(e), {
      intersectionRef: f,
      isIntersecting: y
    } = El(), S = g(() => parseInt(e.max, 10)), _ = g(() => parseInt(e.height, 10)), I = g(() => parseFloat(e.bufferValue) / S.value * 100), x = g(() => parseFloat(l.value) / S.value * 100), V = g(() => i.value !== e.reverse), N = g(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), b = g(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
    function k(h) {
      if (!f.value)
        return;
      const {
        left: p,
        right: w,
        width: L
      } = f.value.getBoundingClientRect(), M = V.value ? L - h.clientX + (w - L) : h.clientX - p;
      l.value = Math.round(M / L * S.value);
    }
    return z(() => u(e.tag, {
      ref: f,
      class: ["v-progress-linear", {
        "v-progress-linear--active": e.active && y.value,
        "v-progress-linear--reverse": V.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, d.value, a.value],
      style: {
        height: e.active ? $(_.value) : 0,
        "--v-progress-linear-height": $(_.value)
      },
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : x.value,
      onClick: e.clickable && k
    }, {
      default: () => [e.stream && u("div", {
        key: "stream",
        class: ["v-progress-linear__stream", s.value],
        style: {
          ...r.value,
          [V.value ? "left" : "right"]: $(-_.value),
          borderTop: `${$(_.value / 2)} dotted`,
          opacity: b.value,
          top: `calc(50% - ${$(_.value / 4)})`,
          width: $(100 - I.value, "%"),
          "--v-progress-linear-stream-to": $(_.value * (V.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", m.value],
        style: [c.value, {
          opacity: b.value,
          width: $(e.stream ? I.value : 100, "%")
        }]
      }, null), u(xe, {
        name: N.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((h) => u("div", {
          key: h,
          class: ["v-progress-linear__indeterminate", h, v.value],
          style: o.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", v.value],
          style: [o.value, {
            width: $(x.value, "%")
          }]
        }, null)]
      }), n.default && u("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: x.value,
        buffer: I.value
      })])]
    })), {};
  }
}), Ol = E({
  loading: Boolean
}, "loader");
function Rl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ie();
  return {
    loaderClasses: g(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function zl(e, t) {
  var n;
  let {
    slots: l
  } = t;
  return u("div", {
    class: `${e.name}__loader`
  }, [((n = l.default) == null ? void 0 : n.call(l, {
    color: e.color,
    isActive: e.active
  })) || u(Nl, {
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Ae = E({
  border: [Boolean, Number, String]
}, "border");
function Be(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ie();
  return {
    borderClasses: g(() => {
      const l = he(e) ? e.value : e.border, i = [];
      if (l === !0 || l === "")
        i.push(`${t}--border`);
      else if (typeof l == "string" || l === 0)
        for (const a of String(l).split(" "))
          i.push(`border-${a}`);
      return i;
    })
  };
}
const Ee = E({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function Te(e) {
  return {
    elevationClasses: g(() => {
      const n = he(e) ? e.value : e.elevation, l = [];
      return n == null || l.push(`elevation-${n}`), l;
    })
  };
}
const Pt = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ml = E({
  location: String
}, "location");
function Dl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: l
  } = St();
  return {
    locationStyles: g(() => {
      if (!e.location)
        return {};
      const {
        side: a,
        align: s
      } = tl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
      function r(c) {
        return n ? n(c) : 0;
      }
      const m = {};
      return a !== "center" && (t ? m[Pt[a]] = `calc(100% - ${r(a)}px)` : m[a] = 0), s !== "center" ? t ? m[Pt[s]] = `calc(100% - ${r(s)}px)` : m[s] = 0 : (a === "center" ? m.top = m.left = "50%" : m[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[a]] = "50%", m.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[a]), m;
    })
  };
}
const Fl = ["static", "relative", "fixed", "absolute", "sticky"], Wl = E({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Fl.includes(e)
    )
  }
}, "position");
function Hl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ie();
  return {
    positionClasses: g(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function jl() {
  var e, t;
  return (e = K("useRouter")) == null || (t = e.proxy) == null ? void 0 : t.$router;
}
function mn(e, t) {
  const n = Wn("RouterLink"), l = g(() => !!(e.href || e.to)), i = g(() => (l == null ? void 0 : l.value) || !!(t.onClick || t.onClickOnce));
  if (typeof n == "string")
    return {
      isLink: l,
      isClickable: i,
      href: P(e, "href")
    };
  const a = e.to ? n.useLink(e) : void 0;
  return {
    isLink: l,
    isClickable: i,
    route: a == null ? void 0 : a.route,
    navigate: a == null ? void 0 : a.navigate,
    isActive: a && g(() => {
      var s, r;
      return e.exact ? (s = a.isExactActive) == null ? void 0 : s.value : (r = a.isActive) == null ? void 0 : r.value;
    }),
    href: g(() => e.to ? a == null ? void 0 : a.route.value.href : e.href)
  };
}
const gn = E({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router"), hn = T({
  name: "VCard",
  directives: {
    Ripple: fn
  },
  props: {
    appendAvatar: String,
    appendIcon: F,
    disabled: Boolean,
    flat: Boolean,
    hover: Boolean,
    image: String,
    link: {
      type: Boolean,
      default: void 0
    },
    prependAvatar: String,
    prependIcon: F,
    ripple: Boolean,
    subtitle: String,
    text: String,
    title: String,
    ...J(),
    ...Ae(),
    ...Le(),
    ...qe(),
    ...Ee(),
    ...Ol(),
    ...Ml(),
    ...Wl(),
    ...se(),
    ...gn(),
    ...j(),
    ...Ue({
      variant: "elevated"
    })
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: l
    } = t;
    const {
      themeClasses: i
    } = Q(e), {
      borderClasses: a
    } = Be(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: m
    } = _t(e), {
      densityClasses: c
    } = Ze(e), {
      dimensionStyles: v
    } = Ke(e), {
      elevationClasses: o
    } = Te(e), {
      loaderClasses: d
    } = Rl(e), {
      locationStyles: f
    } = Dl(e), {
      positionClasses: y
    } = Hl(e), {
      roundedClasses: S
    } = re(e), _ = mn(e, n), I = g(() => e.link !== !1 && _.isLink.value), x = g(() => !e.disabled && e.link !== !1 && (e.link || _.isClickable.value));
    return z(() => {
      var V, N, b;
      const k = I.value ? "a" : e.tag, h = !!(l.title || e.title), p = !!(l.subtitle || e.subtitle), w = h || p, L = !!(l.append || e.appendAvatar || e.appendIcon), M = !!(l.prepend || e.prependAvatar || e.prependIcon), Y = !!(l.image || e.image), U = w || M || L, O = !!(l.text || e.text);
      return be(u(k, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": x.value
        }, i.value, a.value, s.value, c.value, o.value, d.value, y.value, S.value, m.value],
        style: [r.value, v.value, f.value],
        href: _.href.value,
        onClick: x.value && _.navigate
      }, {
        default: () => [Y && u(me, {
          key: "image",
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, {
          default: () => [u("div", {
            class: "v-card__image"
          }, [((V = l.image) == null ? void 0 : V.call(l)) ?? u(nn, null, null)])]
        }), u(zl, {
          name: "v-card",
          active: !!e.loading,
          color: typeof e.loading == "boolean" ? void 0 : e.loading
        }, {
          default: l.loader
        }), U && u($l, {
          key: "item",
          prependAvatar: e.prependAvatar,
          prependIcon: e.prependIcon,
          title: e.title,
          subtitle: e.subtitle,
          appendAvatar: e.appendAvatar,
          appendIcon: e.appendIcon
        }, {
          default: l.item,
          prepend: l.prepend,
          title: l.title,
          subtitle: l.subtitle,
          append: l.append
        }), O && u(xl, {
          key: "text"
        }, {
          default: () => [((N = l.text) == null ? void 0 : N.call(l)) ?? e.text]
        }), (b = l.default) == null ? void 0 : b.call(l), l.actions && u(ul, null, {
          default: l.actions
        }), pt(x.value, "v-card")]
      }), [[ct("ripple"), x.value]]);
    }), {};
  }
}), Gl = /* @__PURE__ */ ge({
  __name: "MainFrame",
  props: {
    sideBarItems: null,
    topBarItems: null
  },
  setup(e) {
    const t = e;
    return Ge(() => console.log("props:", t)), (n, l) => (q(), ce(hn, { class: "mainFrame" }, {
      default: B(() => [
        u(ln, null, {
          default: B(() => [
            te(" ABC ")
          ]),
          _: 1
        }),
        Hn(n.$slots, "default", { class: "mainFrame__businessArea" })
      ]),
      _: 3
    }));
  }
});
function Yl(e) {
  const t = C(), n = C();
  if (ft) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (n.value = i[0].contentRect);
    });
    ae(() => {
      l.disconnect();
    }), H(t, (i, a) => {
      a && (l.unobserve(a), n.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: jt(n)
  };
}
const Xl = Symbol.for("vuetify:layout"), ql = Symbol.for("vuetify:layout-item"), yn = E({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function pn(e) {
  const t = G(Xl);
  if (!t)
    throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${vt()}`, l = K("useLayoutItem");
  le(ql, {
    id: n
  });
  const i = C(!1);
  jn(() => i.value = !0), Gn(() => i.value = !1);
  const {
    layoutItemStyles: a,
    layoutItemScrimStyles: s
  } = t.register(l, {
    ...e,
    active: g(() => i.value ? !1 : e.active.value),
    id: n
  });
  return ae(() => t.unregister(n)), {
    layoutItemStyles: a,
    layoutRect: t.layoutRect,
    layoutItemScrimStyles: s
  };
}
const Kl = T({
  name: "VFooter",
  props: {
    app: Boolean,
    color: String,
    height: {
      type: [Number, String],
      default: "auto"
    },
    ...Ae(),
    ...Ee(),
    ...yn(),
    ...se(),
    ...j({
      tag: "footer"
    }),
    ...J()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: l
    } = Q(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: a
    } = ne(P(e, "color")), {
      borderClasses: s
    } = Be(e), {
      elevationClasses: r
    } = Te(e), {
      roundedClasses: m
    } = re(e), c = C(32), {
      resizeRef: v
    } = Yl((f) => {
      f.length && (c.value = f[0].target.clientHeight);
    }), o = g(() => e.height === "auto" ? c.value : parseInt(e.height, 10)), {
      layoutItemStyles: d
    } = pn({
      id: e.name,
      order: g(() => parseInt(e.order, 10)),
      position: g(() => "bottom"),
      layoutSize: o,
      elementSize: g(() => e.height === "auto" ? void 0 : o.value),
      active: g(() => e.app),
      absolute: P(e, "absolute")
    });
    return z(() => u(e.tag, {
      ref: v,
      class: ["v-footer", l.value, i.value, s.value, r.value, m.value],
      style: [a, e.app ? d.value : void 0]
    }, n)), {};
  }
});
const bt = ["sm", "md", "lg", "xl", "xxl"], _n = (() => bt.reduce((e, t) => (e[t] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}))(), Sn = (() => bt.reduce((e, t) => (e["offset" + ot(t)] = {
  type: [String, Number],
  default: null
}, e), {}))(), bn = (() => bt.reduce((e, t) => (e["order" + ot(t)] = {
  type: [String, Number],
  default: null
}, e), {}))(), Nt = {
  col: Object.keys(_n),
  offset: Object.keys(Sn),
  order: Object.keys(bn)
};
function Ul(e, t, n) {
  let l = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const i = t.replace(e, "");
      l += `-${i}`;
    }
    return e === "col" && (l = "v-" + l), e === "col" && (n === "" || n === !0) || (l += `-${n}`), l.toLowerCase();
  }
}
const Zl = ["auto", "start", "end", "center", "baseline", "stretch"], Jl = T({
  name: "VCol",
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: !1
    },
    ..._n,
    offset: {
      type: [String, Number],
      default: null
    },
    ...Sn,
    order: {
      type: [String, Number],
      default: null
    },
    ...bn,
    alignSelf: {
      type: String,
      default: null,
      validator: (e) => Zl.includes(e)
    },
    ...j()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = g(() => {
      const i = [];
      let a;
      for (a in Nt)
        Nt[a].forEach((r) => {
          const m = e[r], c = Ul(a, r, m);
          c && i.push(c);
        });
      const s = i.some((r) => r.startsWith("v-col-"));
      return i.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !s || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), i;
    });
    return () => {
      var i;
      return $e(e.tag, {
        class: l.value
      }, (i = n.default) == null ? void 0 : i.call(n));
    };
  }
}), Ql = /* @__PURE__ */ ge({
  __name: "FooterBar",
  setup(e) {
    return ut(() => {
      console.log("footersetup"), window.addEventListener("sessionIdUpdate", () => {
        sessionStorage.getItem("connectionId");
      });
    }), (t, n) => (q(), ce(hn, { height: "100%" }, {
      default: B(() => [
        u(Kl, {
          padless: "",
          class: "font-weight-medium",
          color: "secondary",
          style: { height: "100%" }
        }, {
          default: B(() => [
            u(Jl, {
              class: "text-center",
              cols: "12"
            }, {
              default: B(() => [
                Gt("strong", null, _e((/* @__PURE__ */ new Date()).getFullYear()) + " — Mitsubishi Heavy Industries EMEA - Digital Solutions", 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
const wn = T({
  name: "VDivider",
  props: {
    color: String,
    inset: Boolean,
    length: [Number, String],
    thickness: [Number, String],
    vertical: Boolean,
    ...J()
  },
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const {
      themeClasses: l
    } = Q(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: a
    } = ne(P(e, "color")), s = g(() => {
      const r = {};
      return e.length && (r[e.vertical ? "maxHeight" : "maxWidth"] = $(e.length)), e.thickness && (r[e.vertical ? "borderRightWidth" : "borderTopWidth"] = $(e.thickness)), r;
    });
    return z(() => u("hr", {
      class: [{
        "v-divider": !0,
        "v-divider--inset": e.inset,
        "v-divider--vertical": e.vertical
      }, l.value, i.value],
      style: [s.value, a.value],
      "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
      role: `${n.role || "separator"}`
    }, null)), {};
  }
});
function W(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top center 0", n = arguments.length > 2 ? arguments[2] : void 0;
  return T({
    name: e,
    props: {
      group: Boolean,
      hideOnLeave: Boolean,
      leaveAbsolute: Boolean,
      mode: {
        type: String,
        default: n
      },
      origin: {
        type: String,
        default: t
      }
    },
    setup(l, i) {
      let {
        slots: a
      } = i;
      return () => {
        const s = l.group ? Yn : xe;
        return $e(s, {
          name: e,
          mode: l.mode,
          onBeforeEnter(r) {
            r.style.transformOrigin = l.origin;
          },
          onLeave(r) {
            if (l.leaveAbsolute) {
              const {
                offsetTop: m,
                offsetLeft: c,
                offsetWidth: v,
                offsetHeight: o
              } = r;
              r._transitionInitialStyles = {
                position: r.style.position,
                top: r.style.top,
                left: r.style.left,
                width: r.style.width,
                height: r.style.height
              }, r.style.position = "absolute", r.style.top = `${m}px`, r.style.left = `${c}px`, r.style.width = `${v}px`, r.style.height = `${o}px`;
            }
            l.hideOnLeave && r.style.setProperty("display", "none", "important");
          },
          onAfterLeave(r) {
            if (l.leaveAbsolute && r != null && r._transitionInitialStyles) {
              const {
                position: m,
                top: c,
                left: v,
                width: o,
                height: d
              } = r._transitionInitialStyles;
              delete r._transitionInitialStyles, r.style.position = m || "", r.style.top = c || "", r.style.left = v || "", r.style.width = o || "", r.style.height = d || "";
            }
          }
        }, a.default);
      };
    }
  });
}
function Cn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return T({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      }
    },
    setup(l, i) {
      let {
        slots: a
      } = i;
      return () => $e(xe, {
        name: e,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...t
      }, a.default);
    }
  });
}
function kn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", l = Wt(`offset-${n}`);
  return {
    onBeforeEnter(s) {
      s._parent = s.parentNode, s._initialStyle = {
        transition: s.style.transition,
        overflow: s.style.overflow,
        [n]: s.style[n]
      };
    },
    onEnter(s) {
      const r = s._initialStyle;
      s.style.setProperty("transition", "none", "important"), s.style.overflow = "hidden";
      const m = `${s[l]}px`;
      s.style[n] = "0", s.offsetHeight, s.style.transition = r.transition, e && s._parent && s._parent.classList.add(e), requestAnimationFrame(() => {
        s.style[n] = m;
      });
    },
    onAfterEnter: a,
    onEnterCancelled: a,
    onLeave(s) {
      s._initialStyle = {
        transition: "",
        overflow: s.style.overflow,
        [n]: s.style[n]
      }, s.style.overflow = "hidden", s.style[n] = `${s[l]}px`, s.offsetHeight, requestAnimationFrame(() => s.style[n] = "0");
    },
    onAfterLeave: i,
    onLeaveCancelled: i
  };
  function i(s) {
    e && s._parent && s._parent.classList.remove(e), a(s);
  }
  function a(s) {
    const r = s._initialStyle[n];
    s.style.overflow = s._initialStyle.overflow, r != null && (s.style[n] = r), delete s._initialStyle;
  }
}
W("fab-transition", "center center", "out-in");
W("dialog-bottom-transition");
W("dialog-top-transition");
W("fade-transition");
W("scale-transition");
W("scroll-x-transition");
W("scroll-x-reverse-transition");
W("scroll-y-transition");
W("scroll-y-reverse-transition");
W("slide-x-transition");
W("slide-x-reverse-transition");
W("slide-y-transition");
W("slide-y-reverse-transition");
const ea = Cn("expand-transition", kn());
Cn("expand-x-transition", kn("", !0));
const rt = Symbol.for("vuetify:list");
function $n() {
  const e = G(rt, {
    hasPrepend: C(!1),
    updateHasPrepend: () => null
  }), t = {
    hasPrepend: C(!1),
    updateHasPrepend: (n) => {
      n && (t.hasPrepend.value = n);
    }
  };
  return le(rt, t), e;
}
function xn() {
  return G(rt, null);
}
const ta = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: l,
      parents: i
    } = e;
    if (n) {
      const a = /* @__PURE__ */ new Set();
      a.add(t);
      let s = i.get(t);
      for (; s != null; )
        a.add(s), s = i.get(s);
      return a;
    } else
      return l.delete(t), l;
  },
  select: () => null
}, In = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: l,
      parents: i
    } = e;
    if (n) {
      let a = i.get(t);
      for (l.add(t); a != null && a !== t; )
        l.add(a), a = i.get(a);
      return l;
    } else
      l.delete(t);
    return l;
  },
  select: () => null
}, na = {
  open: In.open,
  select: (e) => {
    let {
      id: t,
      value: n,
      opened: l,
      parents: i
    } = e;
    if (!n)
      return l;
    const a = [];
    let s = i.get(t);
    for (; s != null; )
      a.push(s), s = i.get(s);
    return new Set(a);
  }
}, wt = (e) => {
  const t = {
    select: (n) => {
      let {
        id: l,
        value: i,
        selected: a
      } = n;
      if (e && !i) {
        const s = Array.from(a.entries()).reduce((r, m) => {
          let [c, v] = m;
          return v === "on" ? [...r, c] : r;
        }, []);
        if (s.length === 1 && s[0] === l)
          return a;
      }
      return a.set(l, i ? "on" : "off"), a;
    },
    in: (n, l, i) => {
      let a = /* @__PURE__ */ new Map();
      for (const s of n || [])
        a = t.select({
          id: s,
          value: !0,
          selected: new Map(a),
          children: l,
          parents: i
        });
      return a;
    },
    out: (n) => {
      const l = [];
      for (const [i, a] of n.entries())
        a === "on" && l.push(i);
      return l;
    }
  };
  return t;
}, Vn = (e) => {
  const t = wt(e);
  return {
    select: (l) => {
      let {
        selected: i,
        id: a,
        ...s
      } = l;
      const r = i.has(a) ? /* @__PURE__ */ new Map([[a, i.get(a)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...s,
        id: a,
        selected: r
      });
    },
    in: (l, i, a) => {
      let s = /* @__PURE__ */ new Map();
      return l != null && l.length && (s = t.in(l.slice(0, 1), i, a)), s;
    },
    out: (l, i, a) => t.out(l, i, a)
  };
}, la = (e) => {
  const t = wt(e);
  return {
    select: (l) => {
      let {
        id: i,
        selected: a,
        children: s,
        ...r
      } = l;
      return s.has(i) ? a : t.select({
        id: i,
        selected: a,
        children: s,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, aa = (e) => {
  const t = Vn(e);
  return {
    select: (l) => {
      let {
        id: i,
        selected: a,
        children: s,
        ...r
      } = l;
      return s.has(i) ? a : t.select({
        id: i,
        selected: a,
        children: s,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, ia = (e) => {
  const t = {
    select: (n) => {
      let {
        id: l,
        value: i,
        selected: a,
        children: s,
        parents: r
      } = n;
      const m = new Map(a), c = [l];
      for (; c.length; ) {
        const o = c.shift();
        a.set(o, i ? "on" : "off"), s.has(o) && c.push(...s.get(o));
      }
      let v = r.get(l);
      for (; v; ) {
        const o = s.get(v), d = o.every((y) => a.get(y) === "on"), f = o.every((y) => !a.has(y) || a.get(y) === "off");
        a.set(v, d ? "on" : f ? "off" : "indeterminate"), v = r.get(v);
      }
      return e && !i && Array.from(a.entries()).reduce((d, f) => {
        let [y, S] = f;
        return S === "on" ? [...d, y] : d;
      }, []).length === 0 ? m : a;
    },
    in: (n, l, i) => {
      let a = /* @__PURE__ */ new Map();
      for (const s of n || [])
        a = t.select({
          id: s,
          value: !0,
          selected: new Map(a),
          children: l,
          parents: i
        });
      return a;
    },
    out: (n, l) => {
      const i = [];
      for (const [a, s] of n.entries())
        s === "on" && !l.has(a) && i.push(a);
      return i;
    }
  };
  return t;
}, ke = Symbol.for("vuetify:nested"), Ln = {
  id: C(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: C(/* @__PURE__ */ new Map()),
    children: C(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    select: () => null,
    opened: C(/* @__PURE__ */ new Set()),
    selected: C(/* @__PURE__ */ new Map()),
    selectedValues: C([])
  }
}, sa = E({
  selectStrategy: [String, Function],
  openStrategy: [String, Function],
  opened: Array,
  selected: Array,
  mandatory: Boolean
}, "nested"), ra = (e) => {
  let t = !1;
  const n = C(/* @__PURE__ */ new Map()), l = C(/* @__PURE__ */ new Map()), i = He(e, "opened", e.opened, (o) => new Set(o), (o) => [...o.values()]), a = g(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return aa(e.mandatory);
      case "leaf":
        return la(e.mandatory);
      case "independent":
        return wt(e.mandatory);
      case "single-independent":
        return Vn(e.mandatory);
      case "classic":
      default:
        return ia(e.mandatory);
    }
  }), s = g(() => {
    if (typeof e.openStrategy == "function")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return na;
      case "single":
        return ta;
      case "multiple":
      default:
        return In;
    }
  }), r = He(e, "selected", e.selected, (o) => a.value.in(o, n.value, l.value), (o) => a.value.out(o, n.value, l.value));
  ae(() => {
    t = !0;
  });
  function m(o) {
    const d = [];
    let f = o;
    for (; f != null; )
      d.unshift(f), f = l.value.get(f);
    return d;
  }
  const c = K("nested"), v = {
    id: C(),
    root: {
      opened: i,
      selected: r,
      selectedValues: g(() => {
        const o = [];
        for (const [d, f] of r.value.entries())
          f === "on" && o.push(d);
        return o;
      }),
      register: (o, d, f) => {
        d && o !== d && l.value.set(o, d), f && n.value.set(o, []), d != null && n.value.set(d, [...n.value.get(d) || [], o]);
      },
      unregister: (o) => {
        if (t)
          return;
        n.value.delete(o);
        const d = l.value.get(o);
        if (d) {
          const f = n.value.get(d) ?? [];
          n.value.set(d, f.filter((y) => y !== o));
        }
        l.value.delete(o), i.value.delete(o);
      },
      open: (o, d, f) => {
        c.emit("click:open", {
          id: o,
          value: d,
          path: m(o),
          event: f
        });
        const y = s.value.open({
          id: o,
          value: d,
          opened: new Set(i.value),
          children: n.value,
          parents: l.value,
          event: f
        });
        y && (i.value = y);
      },
      openOnSelect: (o, d, f) => {
        const y = s.value.select({
          id: o,
          value: d,
          selected: new Map(r.value),
          opened: new Set(i.value),
          children: n.value,
          parents: l.value,
          event: f
        });
        y && (i.value = y);
      },
      select: (o, d, f) => {
        c.emit("click:select", {
          id: o,
          value: d,
          path: m(o),
          event: f
        });
        const y = a.value.select({
          id: o,
          value: d,
          selected: new Map(r.value),
          children: n.value,
          parents: l.value,
          event: f
        });
        y && (r.value = y), v.root.openOnSelect(o, d, f);
      },
      children: n,
      parents: l
    }
  };
  return le(ke, v), v.root;
}, An = (e, t) => {
  const n = G(ke, Ln), l = g(() => e.value ?? Symbol(vt())), i = {
    ...n,
    id: l,
    open: (a, s) => n.root.open(l.value, a, s),
    openOnSelect: (a, s) => n.root.openOnSelect(l.value, a, s),
    isOpen: g(() => n.root.opened.value.has(l.value)),
    parent: g(() => n.root.parents.value.get(l.value)),
    select: (a, s) => n.root.select(l.value, a, s),
    isSelected: g(() => n.root.selected.value.get(l.value) === "on"),
    isIndeterminate: g(() => n.root.selected.value.get(l.value) === "indeterminate"),
    isLeaf: g(() => !n.root.children.value.get(l.value)),
    isGroupActivator: n.isGroupActivator
  };
  return !n.isGroupActivator && n.root.register(l.value, n.id.value, t), ae(() => {
    !n.isGroupActivator && n.root.unregister(l.value);
  }), t && le(ke, i), i;
}, oa = () => {
  const e = G(ke, Ln);
  le(ke, {
    ...e,
    isGroupActivator: !0
  });
}, ua = T({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return oa(), () => {
      var l;
      return (l = n.default) == null ? void 0 : l.call(n);
    };
  }
}), ca = E({
  activeColor: String,
  color: String,
  collapseIcon: {
    type: F,
    default: "$collapse"
  },
  expandIcon: {
    type: F,
    default: "$expand"
  },
  prependIcon: F,
  appendIcon: F,
  fluid: Boolean,
  subgroup: Boolean,
  value: null,
  ...j()
}, "VListGroup"), Ct = Ye()({
  name: "VListGroup",
  props: {
    title: String,
    ...ca()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: l,
      open: i,
      id: a
    } = An(P(e, "value"), !0), s = g(() => `v-list-group--id-${String(a.value)}`), r = xn();
    function m(o) {
      i(!l.value, o);
    }
    const c = g(() => ({
      onClick: m,
      class: "v-list-group__header",
      id: s.value
    })), v = g(() => l.value ? e.collapseIcon : e.expandIcon);
    return z(() => {
      var o;
      return u(e.tag, {
        class: ["v-list-group", {
          "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
          "v-list-group--fluid": e.fluid,
          "v-list-group--subgroup": e.subgroup
        }]
      }, {
        default: () => [n.activator && u(me, {
          defaults: {
            VListItem: {
              active: l.value,
              activeColor: e.activeColor,
              color: e.color,
              prependIcon: e.prependIcon || e.subgroup && v.value,
              appendIcon: e.appendIcon || !e.subgroup && v.value,
              title: e.title,
              value: e.value
            }
          }
        }, {
          default: () => [u(ua, null, {
            default: () => [n.activator({
              props: c.value,
              isOpen: l
            })]
          })]
        }), u(ea, null, {
          default: () => [be(u("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": s.value
          }, [(o = n.default) == null ? void 0 : o.call(n)]), [[Ht, l.value]])]
        })]
      });
    }), {};
  }
});
function da(e) {
  return qt(e, Object.keys(Ct.props));
}
const va = Ie("v-list-item-subtitle"), Me = Ie("v-list-item-title"), je = Ye()({
  name: "VListItem",
  directives: {
    Ripple: fn
  },
  props: {
    active: {
      type: Boolean,
      default: void 0
    },
    activeClass: String,
    activeColor: String,
    appendAvatar: String,
    appendIcon: F,
    disabled: Boolean,
    lines: String,
    link: {
      type: Boolean,
      default: void 0
    },
    nav: Boolean,
    prependAvatar: String,
    prependIcon: F,
    subtitle: [String, Number, Boolean],
    title: [String, Number, Boolean],
    value: null,
    ...Ae(),
    ...Le(),
    ...qe(),
    ...Ee(),
    ...se(),
    ...gn(),
    ...j(),
    ...J(),
    ...Ue({
      variant: "text"
    })
  },
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: l,
      emit: i
    } = t;
    const a = mn(e, n), s = g(() => e.value ?? a.href.value), {
      select: r,
      isSelected: m,
      isIndeterminate: c,
      isGroupActivator: v,
      root: o,
      parent: d,
      openOnSelect: f
    } = An(s, !1), y = xn(), S = g(() => {
      var A;
      return e.active !== !1 && (e.active || ((A = a.isActive) == null ? void 0 : A.value) || m.value);
    }), _ = g(() => e.link !== !1 && a.isLink.value), I = g(() => !e.disabled && e.link !== !1 && (e.link || a.isClickable.value || e.value != null && !!y)), x = g(() => e.rounded || e.nav), V = g(() => ({
      color: S.value ? e.activeColor ?? e.color : e.color,
      variant: e.variant
    }));
    H(() => {
      var A;
      return (A = a.isActive) == null ? void 0 : A.value;
    }, (A) => {
      A && d.value != null && o.open(d.value, !0), A && f(A);
    }, {
      immediate: !0
    });
    const {
      themeClasses: N
    } = Q(e), {
      borderClasses: b
    } = Be(e), {
      colorClasses: k,
      colorStyles: h,
      variantClasses: p
    } = _t(V), {
      densityClasses: w
    } = Ze(e), {
      dimensionStyles: L
    } = Ke(e), {
      elevationClasses: M
    } = Te(e), {
      roundedClasses: Y
    } = re(x), U = g(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), O = g(() => ({
      isActive: S.value,
      select: r,
      isSelected: m.value,
      isIndeterminate: c.value
    }));
    function X(A) {
      var Z;
      i("click", A), !(v || !I.value) && ((Z = a.navigate) == null || Z.call(a, A), e.value != null && r(!m.value, A));
    }
    function R(A) {
      (A.key === "Enter" || A.key === " ") && (A.preventDefault(), X(A));
    }
    return z(() => {
      var A, Z, ye, Pe, kt;
      const Tn = _.value ? "a" : e.tag, $t = !y || m.value || S.value, Pn = l.title || e.title, Nn = l.subtitle || e.subtitle, On = !!(l.append || e.appendAvatar || e.appendIcon), Je = !!(l.prepend || e.prependAvatar || e.prependIcon);
      return y == null || y.updateHasPrepend(Je), be(u(Tn, {
        class: ["v-list-item", {
          "v-list-item--active": S.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": I.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !Je && (y == null ? void 0 : y.hasPrepend.value),
          [`${e.activeClass}`]: e.activeClass && S.value
        }, N.value, b.value, $t ? k.value : void 0, w.value, M.value, U.value, Y.value, p.value],
        style: [$t ? h.value : void 0, L.value],
        href: a.href.value,
        tabindex: I.value ? 0 : void 0,
        onClick: X,
        onKeydown: I.value && !_.value && R
      }, {
        default: () => [pt(I.value || S.value, "v-list-item"), Je && u(me, {
          key: "prepend",
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.prependAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.prependIcon
            },
            VListItemAction: {
              start: !0
            }
          }
        }, {
          default: () => [u("div", {
            class: "v-list-item__prepend"
          }, [e.prependAvatar && u(Fe, {
            key: "prepend-avatar"
          }, null), e.prependIcon && u(ve, {
            key: "prepend-icon"
          }, null), (A = l.prepend) == null ? void 0 : A.call(l, O.value)])]
        }), u("div", {
          class: "v-list-item__content"
        }, [Pn && u(Me, {
          key: "title"
        }, {
          default: () => [((Z = l.title) == null ? void 0 : Z.call(l, {
            title: e.title
          })) ?? e.title]
        }), Nn && u(va, {
          key: "subtitle"
        }, {
          default: () => [((ye = l.subtitle) == null ? void 0 : ye.call(l, {
            subtitle: e.subtitle
          })) ?? e.subtitle]
        }), (Pe = l.default) == null ? void 0 : Pe.call(l, O.value)]), On && u(me, {
          key: "append",
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.appendAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.appendIcon
            },
            VListItemAction: {
              end: !0
            }
          }
        }, {
          default: () => [u("div", {
            class: "v-list-item__append"
          }, [(kt = l.append) == null ? void 0 : kt.call(l, O.value), e.appendIcon && u(ve, {
            key: "append-icon"
          }, null), e.appendAvatar && u(Fe, {
            key: "append-avatar"
          }, null)])]
        })]
      }), [[ct("ripple"), I.value]]);
    }), {};
  }
}), fa = T({
  name: "VListSubheader",
  props: {
    color: String,
    inset: Boolean,
    sticky: Boolean,
    title: String,
    ...j()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: l,
      textColorStyles: i
    } = yt(P(e, "color"));
    return z(() => {
      var a;
      const s = !!(n.default || e.title);
      return u(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, l.value],
        style: {
          textColorStyles: i
        }
      }, {
        default: () => [s && u("div", {
          class: "v-list-subheader__text"
        }, [((a = n.default) == null ? void 0 : a.call(n)) ?? e.title])]
      });
    }), {};
  }
}), Bn = Ye()({
  name: "VListChildren",
  props: {
    items: Array
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return $n(), () => {
      var l, i;
      return ((l = n.default) == null ? void 0 : l.call(n)) ?? ((i = e.items) == null ? void 0 : i.map((a) => {
        let {
          children: s,
          props: r,
          type: m,
          raw: c
        } = a;
        if (m === "divider") {
          var v;
          return ((v = n.divider) == null ? void 0 : v.call(n, {
            props: r
          })) ?? u(wn, r, null);
        }
        if (m === "subheader") {
          var o;
          return ((o = n.subheader) == null ? void 0 : o.call(n, {
            props: r
          })) ?? u(fa, r, {
            default: n.subheader
          });
        }
        const d = {
          subtitle: n.subtitle ? (S) => {
            var _;
            return (_ = n.subtitle) == null ? void 0 : _.call(n, {
              ...S,
              item: c
            });
          } : void 0,
          prepend: n.prepend ? (S) => {
            var _;
            return (_ = n.prepend) == null ? void 0 : _.call(n, {
              ...S,
              item: c
            });
          } : void 0,
          append: n.append ? (S) => {
            var _;
            return (_ = n.append) == null ? void 0 : _.call(n, {
              ...S,
              item: c
            });
          } : void 0,
          default: n.default ? (S) => {
            var _;
            return (_ = n.default) == null ? void 0 : _.call(n, {
              ...S,
              item: c
            });
          } : void 0,
          title: n.title ? (S) => {
            var _;
            return (_ = n.title) == null ? void 0 : _.call(n, {
              ...S,
              item: c
            });
          } : void 0
        }, [f, y] = da(r);
        return s ? u(Ct, Se({
          value: r == null ? void 0 : r.value
        }, f), {
          activator: (S) => {
            let {
              props: _
            } = S;
            return n.header ? n.header({
              ...r,
              ..._
            }) : u(je, Se(r, _), d);
          },
          default: () => u(Bn, {
            items: s
          }, n)
        }) : n.item ? n.item(r) : u(je, r, d);
      }));
    };
  }
}), ma = E({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean
}, "item");
function ga(e, t) {
  const n = pe(t, e.itemType, "item"), l = typeof t == "string" ? t : pe(t, e.itemTitle), i = pe(t, e.itemValue, void 0), a = pe(t, e.itemChildren), s = e.itemProps === !0 ? qt(t, ["children"])[1] : pe(t, e.itemProps), r = {
    title: l,
    value: i,
    ...s
  };
  return {
    type: n,
    title: r.title,
    value: r.value,
    props: r,
    children: n === "item" && a ? En(e, a) : void 0,
    raw: t
  };
}
function En(e, t) {
  const n = [];
  for (const l of t)
    n.push(ga(e, l));
  return n;
}
function ha(e) {
  return {
    items: g(() => En(e, e.items))
  };
}
const ya = Ye()({
  name: "VList",
  props: {
    activeColor: String,
    activeClass: String,
    bgColor: String,
    disabled: Boolean,
    lines: {
      type: [Boolean, String],
      default: "one"
    },
    nav: Boolean,
    ...sa({
      selectStrategy: "single-leaf",
      openStrategy: "list"
    }),
    ...Ae(),
    ...Le(),
    ...qe(),
    ...Ee(),
    itemType: {
      type: String,
      default: "type"
    },
    ...ma(),
    ...se(),
    ...j(),
    ...J(),
    ...Ue({
      variant: "text"
    })
  },
  emits: {
    "update:selected": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: l
    } = ha(e), {
      themeClasses: i
    } = Q(e), {
      backgroundColorClasses: a,
      backgroundColorStyles: s
    } = ne(P(e, "bgColor")), {
      borderClasses: r
    } = Be(e), {
      densityClasses: m
    } = Ze(e), {
      dimensionStyles: c
    } = Ke(e), {
      elevationClasses: v
    } = Te(e), {
      roundedClasses: o
    } = re(e), {
      open: d,
      select: f
    } = ra(e), y = g(() => e.lines ? `v-list--${e.lines}-line` : void 0), S = P(e, "activeColor"), _ = P(e, "color");
    $n(), Ve({
      VListGroup: {
        activeColor: S,
        color: _
      },
      VListItem: {
        activeClass: P(e, "activeClass"),
        activeColor: S,
        color: _,
        density: P(e, "density"),
        disabled: P(e, "disabled"),
        lines: P(e, "lines"),
        nav: P(e, "nav"),
        variant: P(e, "variant")
      }
    });
    const I = C(!1), x = C();
    function V(p) {
      I.value = !0;
    }
    function N(p) {
      I.value = !1;
    }
    function b(p) {
      var w;
      !I.value && !(p.relatedTarget && (w = x.value) != null && w.contains(p.relatedTarget)) && h();
    }
    function k(p) {
      x.value && (p.key === "ArrowDown" ? h("next") : p.key === "ArrowUp" ? h("prev") : p.key === "Home" ? h("first") : p.key === "End" && h("last"));
    }
    function h(p) {
      if (!x.value)
        return;
      const w = [...x.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter((O) => !O.hasAttribute("disabled")), L = w.indexOf(document.activeElement);
      if (p)
        if (p === "first") {
          var Y;
          (Y = w[0]) == null || Y.focus();
        } else if (p === "last") {
          var U;
          (U = w.at(-1)) == null || U.focus();
        } else {
          let O, X = L;
          const R = p === "next" ? 1 : -1;
          do
            X += R, O = w[X];
          while ((!O || O.offsetParent == null) && X < w.length && X >= 0);
          O ? O.focus() : h(p === "next" ? "first" : "last");
        }
      else {
        var M;
        (M = w[0]) == null || M.focus();
      }
    }
    return z(() => u(e.tag, {
      ref: x,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav
      }, i.value, a.value, r.value, m.value, v.value, y.value, o.value],
      style: [s.value, c.value],
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: V,
      onFocusout: N,
      onFocus: b,
      onKeydown: k
    }, {
      default: () => [u(Bn, {
        items: l.value
      }, n)]
    })), {
      open: d,
      select: f,
      focus: h
    };
  }
});
const pa = Symbol.for("vuetify:display");
function _a() {
  const e = G(pa);
  if (!e)
    throw new Error("Could not find Vuetify display injection");
  return e;
}
function Sa() {
  const e = C(!1);
  return Ge(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: g(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: jt(e)
  };
}
function ba(e) {
  let {
    rootEl: t,
    isSticky: n,
    layoutItemStyles: l
  } = e;
  const i = C(!1), a = C(0), s = g(() => {
    const c = typeof i.value == "boolean" ? "top" : i.value;
    return [n.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, i.value ? {
      [c]: $(a.value)
    } : {
      top: l.value.top
    }];
  });
  Ge(() => {
    H(n, (c) => {
      c ? window.addEventListener("scroll", m, {
        passive: !0
      }) : window.removeEventListener("scroll", m);
    }, {
      immediate: !0
    });
  }), ae(() => {
    document.removeEventListener("scroll", m);
  });
  let r = 0;
  function m() {
    const c = r > window.scrollY ? "up" : "down", v = t.value.getBoundingClientRect(), o = parseFloat(l.value.top ?? 0), d = window.scrollY - Math.max(0, a.value - o), f = v.height + Math.max(a.value, o) - window.scrollY - window.innerHeight;
    v.height < window.innerHeight - o ? (i.value = "top", a.value = o) : c === "up" && i.value === "bottom" || c === "down" && i.value === "top" ? (a.value = window.scrollY + v.top, i.value = !0) : c === "down" && f <= 0 ? (a.value = 0, i.value = "bottom") : c === "up" && d <= 0 && (a.value = v.top + d, i.value = "top"), r = window.scrollY;
  }
  return {
    isStuck: i,
    stickyStyles: s
  };
}
const wa = 100, Ca = 20;
function Ot(e) {
  const t = 1.41421356237;
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * t;
}
function Rt(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t)
      continue;
    const l = Ot(t), i = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (i - l) * Math.abs(i), n === e.length - 1 && (t *= 0.5);
  }
  return Ot(t) * 1e3;
}
function ka() {
  const e = {};
  function t(i) {
    Array.from(i.changedTouches).forEach((a) => {
      (e[a.identifier] ?? (e[a.identifier] = new Jn(Ca))).push([i.timeStamp, a]);
    });
  }
  function n(i) {
    Array.from(i.changedTouches).forEach((a) => {
      delete e[a.identifier];
    });
  }
  function l(i) {
    var a;
    const s = (a = e[i]) == null ? void 0 : a.values().reverse();
    if (!s)
      throw new Error(`No samples for touch id ${i}`);
    const r = s[0], m = [], c = [];
    for (const v of s) {
      if (r[0] - v[0] > wa)
        break;
      m.push({
        t: v[0],
        d: v[1].clientX
      }), c.push({
        t: v[0],
        d: v[1].clientY
      });
    }
    return {
      x: Rt(m),
      y: Rt(c),
      get direction() {
        const {
          x: v,
          y: o
        } = this, [d, f] = [Math.abs(v), Math.abs(o)];
        return d > f && v >= 0 ? "right" : d > f && v <= 0 ? "left" : f > d && o >= 0 ? "down" : f > d && o <= 0 ? "up" : $a();
      }
    };
  }
  return {
    addMovement: t,
    endTouch: n,
    getVelocity: l
  };
}
function $a() {
  throw new Error();
}
function xa(e) {
  let {
    isActive: t,
    isTemporary: n,
    width: l,
    touchless: i,
    position: a
  } = e;
  Ge(() => {
    window.addEventListener("touchstart", I, {
      passive: !0
    }), window.addEventListener("touchmove", x, {
      passive: !1
    }), window.addEventListener("touchend", V, {
      passive: !0
    });
  }), ae(() => {
    window.removeEventListener("touchstart", I), window.removeEventListener("touchmove", x), window.removeEventListener("touchend", V);
  });
  const s = g(() => a.value !== "bottom"), {
    addMovement: r,
    endTouch: m,
    getVelocity: c
  } = ka();
  let v = !1;
  const o = C(!1), d = C(0), f = C(0);
  let y;
  function S(b, k) {
    return (a.value === "left" ? b : a.value === "right" ? document.documentElement.clientWidth - b : a.value === "bottom" ? document.documentElement.clientHeight - b : ue()) - (k ? l.value : 0);
  }
  function _(b) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const h = a.value === "left" ? (b - f.value) / l.value : a.value === "right" ? (document.documentElement.clientWidth - b - f.value) / l.value : a.value === "bottom" ? (document.documentElement.clientHeight - b - f.value) / l.value : ue();
    return k ? Math.max(0, Math.min(1, h)) : h;
  }
  function I(b) {
    if (i.value)
      return;
    const k = b.changedTouches[0].clientX, h = b.changedTouches[0].clientY, p = 25, w = a.value === "left" ? k < p : a.value === "right" ? k > document.documentElement.clientWidth - p : a.value === "bottom" ? h > document.documentElement.clientHeight - p : ue(), L = t.value && (a.value === "left" ? k < l.value : a.value === "right" ? k > document.documentElement.clientWidth - l.value : a.value === "bottom" ? h > document.documentElement.clientHeight - l.value : ue());
    (w || L || t.value && n.value) && (v = !0, y = [k, h], f.value = S(s.value ? k : h, t.value), d.value = _(s.value ? k : h), m(b), r(b));
  }
  function x(b) {
    const k = b.changedTouches[0].clientX, h = b.changedTouches[0].clientY;
    if (v) {
      if (!b.cancelable) {
        v = !1;
        return;
      }
      const w = Math.abs(k - y[0]), L = Math.abs(h - y[1]);
      (s.value ? w > L && w > 3 : L > w && L > 3) ? (o.value = !0, v = !1) : (s.value ? L : w) > 3 && (v = !1);
    }
    if (!o.value)
      return;
    b.preventDefault(), r(b);
    const p = _(s.value ? k : h, !1);
    d.value = Math.max(0, Math.min(1, p)), p > 1 ? f.value = S(s.value ? k : h, !0) : p < 0 && (f.value = S(s.value ? k : h, !1));
  }
  function V(b) {
    if (v = !1, !o.value)
      return;
    r(b), o.value = !1;
    const k = c(b.changedTouches[0].identifier), h = Math.abs(k.x), p = Math.abs(k.y);
    (s.value ? h > p && h > 400 : p > h && p > 3) ? t.value = k.direction === ({
      left: "right",
      right: "left",
      bottom: "up"
    }[a.value] || ue()) : t.value = d.value > 0.5;
  }
  const N = g(() => o.value ? {
    transform: a.value === "left" ? `translateX(calc(-100% + ${d.value * l.value}px))` : a.value === "right" ? `translateX(calc(100% - ${d.value * l.value}px))` : a.value === "bottom" ? `translateY(calc(100% - ${d.value * l.value}px))` : ue(),
    transition: "none"
  } : void 0);
  return {
    isDragging: o,
    dragProgress: d,
    dragStyles: N
  };
}
function ue() {
  throw new Error();
}
const Ia = ["start", "end", "left", "right", "bottom"], Va = T({
  name: "VNavigationDrawer",
  props: {
    color: String,
    disableResizeWatcher: Boolean,
    disableRouteWatcher: Boolean,
    expandOnHover: Boolean,
    floating: Boolean,
    modelValue: {
      type: Boolean,
      default: null
    },
    permanent: Boolean,
    rail: Boolean,
    railWidth: {
      type: [Number, String],
      default: 56
    },
    scrim: {
      type: [String, Boolean],
      default: !0
    },
    image: String,
    temporary: Boolean,
    touchless: Boolean,
    width: {
      type: [Number, String],
      default: 256
    },
    location: {
      type: String,
      default: "start",
      validator: (e) => Ia.includes(e)
    },
    sticky: Boolean,
    ...Ae(),
    ...Ee(),
    ...yn(),
    ...se(),
    ...j({
      tag: "nav"
    }),
    ...J()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: l
    } = t;
    const {
      isRtl: i
    } = St(), {
      themeClasses: a
    } = Q(e), {
      borderClasses: s
    } = Be(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: m
    } = ne(P(e, "color")), {
      elevationClasses: c
    } = Te(e), {
      mobile: v
    } = _a(), {
      roundedClasses: o
    } = re(e), d = jl(), f = He(e, "modelValue", null, (R) => !!R), {
      ssrBootStyles: y
    } = Sa(), S = C(), _ = C(!1), I = g(() => e.rail && e.expandOnHover && _.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), x = g(() => at(e.location, i.value)), V = g(() => !e.permanent && (v.value || e.temporary)), N = g(() => e.sticky && !V.value && x.value !== "bottom");
    e.disableResizeWatcher || H(V, (R) => !e.permanent && (f.value = !R)), !e.disableRouteWatcher && d && H(d.currentRoute, () => V.value && (f.value = !1)), H(() => e.permanent, (R) => {
      R && (f.value = !0);
    }), ut(() => {
      e.modelValue != null || V.value || (f.value = e.permanent || !v.value);
    });
    const {
      isDragging: b,
      dragProgress: k,
      dragStyles: h
    } = xa({
      isActive: f,
      isTemporary: V,
      width: I,
      touchless: P(e, "touchless"),
      position: x
    }), p = g(() => {
      const R = V.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : I.value;
      return b.value ? R * k.value : R;
    }), {
      layoutItemStyles: w,
      layoutRect: L,
      layoutItemScrimStyles: M
    } = pn({
      id: e.name,
      order: g(() => parseInt(e.order, 10)),
      position: x,
      layoutSize: p,
      elementSize: I,
      active: g(() => f.value || b.value),
      disableTransitions: g(() => b.value),
      absolute: g(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || N.value && typeof Y.value != "string"
      ))
    }), {
      isStuck: Y,
      stickyStyles: U
    } = ba({
      rootEl: S,
      isSticky: N,
      layoutItemStyles: w
    }), O = ne(g(() => typeof e.scrim == "string" ? e.scrim : null)), X = g(() => ({
      ...b.value ? {
        opacity: k.value * 0.2,
        transition: "none"
      } : void 0,
      ...L.value ? {
        left: $(L.value.left),
        right: $(L.value.right),
        top: $(L.value.top),
        bottom: $(L.value.bottom)
      } : void 0,
      ...M.value
    }));
    return Ve({
      VList: {
        bgColor: "transparent"
      }
    }), z(() => {
      var R, A, Z, ye;
      const Pe = l.image || e.image;
      return u(fe, null, [u(e.tag, Se({
        ref: S,
        onMouseenter: () => _.value = !0,
        onMouseleave: () => _.value = !1,
        class: ["v-navigation-drawer", `v-navigation-drawer--${x.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": _.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": V.value,
          "v-navigation-drawer--active": f.value,
          "v-navigation-drawer--sticky": N.value
        }, a.value, r.value, s.value, c.value, o.value],
        style: [m.value, w.value, h.value, y.value, U.value]
      }, n), {
        default: () => [Pe && u("div", {
          key: "image",
          class: "v-navigation-drawer__img"
        }, [l.image ? (R = l.image) == null ? void 0 : R.call(l, {
          image: e.image
        }) : u("img", {
          src: e.image,
          alt: ""
        }, null)]), l.prepend && u("div", {
          class: "v-navigation-drawer__prepend"
        }, [(A = l.prepend) == null ? void 0 : A.call(l)]), u("div", {
          class: "v-navigation-drawer__content"
        }, [(Z = l.default) == null ? void 0 : Z.call(l)]), l.append && u("div", {
          class: "v-navigation-drawer__append"
        }, [(ye = l.append) == null ? void 0 : ye.call(l)])]
      }), u(xe, {
        name: "fade-transition"
      }, {
        default: () => [V.value && (b.value || f.value) && !!e.scrim && u("div", {
          class: ["v-navigation-drawer__scrim", O.backgroundColorClasses.value],
          style: [X.value, O.backgroundColorStyles.value],
          onClick: () => f.value = !1
        }, null)]
      })]);
    }), {
      isStuck: Y
    };
  }
}), La = { class: "sideBar" }, Aa = /* @__PURE__ */ ge({
  __name: "SideBar",
  props: {
    items: null,
    showSystemStatus: { type: Boolean },
    status: null,
    onLedClicked: null
  },
  setup(e) {
    const t = e, n = g(() => t.items);
    return (l, i) => {
      const a = Ne("v-list-item-icon"), s = Ne("v-list-item-content"), r = Ne("v-list-item-group"), m = Ne("status-indicator");
      return q(), Qe("div", null, [
        Gt("div", La, [
          u(Va, {
            color: "secondary",
            permanent: "",
            "expand-on-hover": "",
            "mini-variant-width": "80"
          }, {
            default: B(() => [
              u(ya, null, {
                default: B(() => [
                  u(je, null, {
                    default: B(() => [
                      u(a, null, {
                        default: B(() => [
                          u(ve, null, {
                            default: B(() => [
                              te("fas fa-bars")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      u(Me, null, {
                        default: B(() => [
                          te("Menu")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  u(wn),
                  (q(!0), Qe(fe, null, xt(de(n), (c) => {
                    var v;
                    return q(), ce(Ct, {
                      mandatory: "",
                      key: c.title,
                      appendIcon: ((v = c.children) == null ? void 0 : v.length) === 0 ? "" : "$expand",
                      group: c.group,
                      onClick: (o) => c.action()
                    }, {
                      activator: B(() => [
                        u(a, null, {
                          default: B(() => [
                            u(ve, { color: "primary" }, {
                              default: B(() => [
                                te(_e(c.icon), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        u(s, null, {
                          default: B(() => [
                            u(Me, null, {
                              default: B(() => [
                                te(_e(c.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      default: B(() => [
                        c.children ? (q(), ce(r, { key: 0 }, {
                          default: B(() => [
                            (q(!0), Qe(fe, null, xt(c.children, (o) => (q(), ce(je, {
                              class: "pl-12",
                              key: o.title,
                              to: o.link,
                              onClick: (d) => o.action()
                            }, {
                              default: B(() => [
                                u(a, null, {
                                  default: B(() => [
                                    u(ve, { color: "primary" }, {
                                      default: B(() => [
                                        te(_e(o.icon), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                u(s, null, {
                                  default: B(() => [
                                    u(Me, null, {
                                      default: B(() => [
                                        te(_e(o.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to", "onClick"]))), 128))
                          ]),
                          _: 2
                        }, 1024)) : It("", !0)
                      ]),
                      _: 2
                    }, 1032, ["appendIcon", "group", "onClick"]);
                  }), 128))
                ]),
                _: 1
              }),
              e.showSystemStatus ? (q(), ce(m, {
                key: 0,
                status: e.status,
                onLedClicked: e.onLedClicked
              }, null, 8, ["status", "onLedClicked"])) : It("", !0)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const Ea = {
  install(e) {
    e.component("MainFrame", Gl), e.component("FooterBar", Ql), e.component("SideBar", Aa), console.log(e);
  }
};
export {
  Ea as components
};
