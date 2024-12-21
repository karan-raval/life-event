(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l);
  new MutationObserver((l) => {
    for (const c of l)
      if (c.type === "childList")
        for (const m of c.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && o(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(l) {
    const c = {};
    return (
      l.integrity && (c.integrity = l.integrity),
      l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function o(l) {
    if (l.ep) return;
    l.ep = !0;
    const c = a(l);
    fetch(l.href, c);
  }
})();
function jp(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Xl = { exports: {} },
  Ei = {},
  Kl = { exports: {} },
  ye = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cm;
function fy() {
  if (Cm) return ye;
  Cm = 1;
  var n = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    m = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    P = Symbol.iterator;
  function y(D) {
    return D === null || typeof D != "object"
      ? null
      : ((D = (P && D[P]) || D["@@iterator"]),
        typeof D == "function" ? D : null);
  }
  var j = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    b = Object.assign,
    T = {};
  function _(D, V, pe) {
    (this.props = D),
      (this.context = V),
      (this.refs = T),
      (this.updater = pe || j);
  }
  (_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (D, V) {
      if (typeof D != "object" && typeof D != "function" && D != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, D, V, "setState");
    }),
    (_.prototype.forceUpdate = function (D) {
      this.updater.enqueueForceUpdate(this, D, "forceUpdate");
    });
  function A() {}
  A.prototype = _.prototype;
  function R(D, V, pe) {
    (this.props = D),
      (this.context = V),
      (this.refs = T),
      (this.updater = pe || j);
  }
  var x = (R.prototype = new A());
  (x.constructor = R), b(x, _.prototype), (x.isPureReactComponent = !0);
  var S = Array.isArray,
    E = Object.prototype.hasOwnProperty,
    k = { current: null },
    I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(D, V, pe) {
    var he,
      Se = {},
      _e = null,
      je = null;
    if (V != null)
      for (he in (V.ref !== void 0 && (je = V.ref),
      V.key !== void 0 && (_e = "" + V.key),
      V))
        E.call(V, he) && !I.hasOwnProperty(he) && (Se[he] = V[he]);
    var Te = arguments.length - 2;
    if (Te === 1) Se.children = pe;
    else if (1 < Te) {
      for (var Ae = Array(Te), mt = 0; mt < Te; mt++)
        Ae[mt] = arguments[mt + 2];
      Se.children = Ae;
    }
    if (D && D.defaultProps)
      for (he in ((Te = D.defaultProps), Te))
        Se[he] === void 0 && (Se[he] = Te[he]);
    return {
      $$typeof: n,
      type: D,
      key: _e,
      ref: je,
      props: Se,
      _owner: k.current,
    };
  }
  function Y(D, V) {
    return {
      $$typeof: n,
      type: D.type,
      key: V,
      ref: D.ref,
      props: D.props,
      _owner: D._owner,
    };
  }
  function ne(D) {
    return typeof D == "object" && D !== null && D.$$typeof === n;
  }
  function te(D) {
    var V = { "=": "=0", ":": "=2" };
    return (
      "$" +
      D.replace(/[=:]/g, function (pe) {
        return V[pe];
      })
    );
  }
  var F = /\/+/g;
  function X(D, V) {
    return typeof D == "object" && D !== null && D.key != null
      ? te("" + D.key)
      : V.toString(36);
  }
  function J(D, V, pe, he, Se) {
    var _e = typeof D;
    (_e === "undefined" || _e === "boolean") && (D = null);
    var je = !1;
    if (D === null) je = !0;
    else
      switch (_e) {
        case "string":
        case "number":
          je = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case n:
            case i:
              je = !0;
          }
      }
    if (je)
      return (
        (je = D),
        (Se = Se(je)),
        (D = he === "" ? "." + X(je, 0) : he),
        S(Se)
          ? ((pe = ""),
            D != null && (pe = D.replace(F, "$&/") + "/"),
            J(Se, V, pe, "", function (mt) {
              return mt;
            }))
          : Se != null &&
            (ne(Se) &&
              (Se = Y(
                Se,
                pe +
                  (!Se.key || (je && je.key === Se.key)
                    ? ""
                    : ("" + Se.key).replace(F, "$&/") + "/") +
                  D
              )),
            V.push(Se)),
        1
      );
    if (((je = 0), (he = he === "" ? "." : he + ":"), S(D)))
      for (var Te = 0; Te < D.length; Te++) {
        _e = D[Te];
        var Ae = he + X(_e, Te);
        je += J(_e, V, pe, Ae, Se);
      }
    else if (((Ae = y(D)), typeof Ae == "function"))
      for (D = Ae.call(D), Te = 0; !(_e = D.next()).done; )
        (_e = _e.value), (Ae = he + X(_e, Te++)), (je += J(_e, V, pe, Ae, Se));
    else if (_e === "object")
      throw (
        ((V = String(D)),
        Error(
          "Objects are not valid as a React child (found: " +
            (V === "[object Object]"
              ? "object with keys {" + Object.keys(D).join(", ") + "}"
              : V) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return je;
  }
  function ee(D, V, pe) {
    if (D == null) return D;
    var he = [],
      Se = 0;
    return (
      J(D, he, "", "", function (_e) {
        return V.call(pe, _e, Se++);
      }),
      he
    );
  }
  function ie(D) {
    if (D._status === -1) {
      var V = D._result;
      (V = V()),
        V.then(
          function (pe) {
            (D._status === 0 || D._status === -1) &&
              ((D._status = 1), (D._result = pe));
          },
          function (pe) {
            (D._status === 0 || D._status === -1) &&
              ((D._status = 2), (D._result = pe));
          }
        ),
        D._status === -1 && ((D._status = 0), (D._result = V));
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var ae = { current: null },
    $ = { transition: null },
    le = {
      ReactCurrentDispatcher: ae,
      ReactCurrentBatchConfig: $,
      ReactCurrentOwner: k,
    };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ye.Children = {
      map: ee,
      forEach: function (D, V, pe) {
        ee(
          D,
          function () {
            V.apply(this, arguments);
          },
          pe
        );
      },
      count: function (D) {
        var V = 0;
        return (
          ee(D, function () {
            V++;
          }),
          V
        );
      },
      toArray: function (D) {
        return (
          ee(D, function (V) {
            return V;
          }) || []
        );
      },
      only: function (D) {
        if (!ne(D))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return D;
      },
    }),
    (ye.Component = _),
    (ye.Fragment = a),
    (ye.Profiler = l),
    (ye.PureComponent = R),
    (ye.StrictMode = o),
    (ye.Suspense = p),
    (ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le),
    (ye.act = Z),
    (ye.cloneElement = function (D, V, pe) {
      if (D == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            D +
            "."
        );
      var he = b({}, D.props),
        Se = D.key,
        _e = D.ref,
        je = D._owner;
      if (V != null) {
        if (
          (V.ref !== void 0 && ((_e = V.ref), (je = k.current)),
          V.key !== void 0 && (Se = "" + V.key),
          D.type && D.type.defaultProps)
        )
          var Te = D.type.defaultProps;
        for (Ae in V)
          E.call(V, Ae) &&
            !I.hasOwnProperty(Ae) &&
            (he[Ae] = V[Ae] === void 0 && Te !== void 0 ? Te[Ae] : V[Ae]);
      }
      var Ae = arguments.length - 2;
      if (Ae === 1) he.children = pe;
      else if (1 < Ae) {
        Te = Array(Ae);
        for (var mt = 0; mt < Ae; mt++) Te[mt] = arguments[mt + 2];
        he.children = Te;
      }
      return {
        $$typeof: n,
        type: D.type,
        key: Se,
        ref: _e,
        props: he,
        _owner: je,
      };
    }),
    (ye.createContext = function (D) {
      return (
        (D = {
          $$typeof: m,
          _currentValue: D,
          _currentValue2: D,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (D.Provider = { $$typeof: c, _context: D }),
        (D.Consumer = D)
      );
    }),
    (ye.createElement = W),
    (ye.createFactory = function (D) {
      var V = W.bind(null, D);
      return (V.type = D), V;
    }),
    (ye.createRef = function () {
      return { current: null };
    }),
    (ye.forwardRef = function (D) {
      return { $$typeof: h, render: D };
    }),
    (ye.isValidElement = ne),
    (ye.lazy = function (D) {
      return { $$typeof: w, _payload: { _status: -1, _result: D }, _init: ie };
    }),
    (ye.memo = function (D, V) {
      return { $$typeof: g, type: D, compare: V === void 0 ? null : V };
    }),
    (ye.startTransition = function (D) {
      var V = $.transition;
      $.transition = {};
      try {
        D();
      } finally {
        $.transition = V;
      }
    }),
    (ye.unstable_act = Z),
    (ye.useCallback = function (D, V) {
      return ae.current.useCallback(D, V);
    }),
    (ye.useContext = function (D) {
      return ae.current.useContext(D);
    }),
    (ye.useDebugValue = function () {}),
    (ye.useDeferredValue = function (D) {
      return ae.current.useDeferredValue(D);
    }),
    (ye.useEffect = function (D, V) {
      return ae.current.useEffect(D, V);
    }),
    (ye.useId = function () {
      return ae.current.useId();
    }),
    (ye.useImperativeHandle = function (D, V, pe) {
      return ae.current.useImperativeHandle(D, V, pe);
    }),
    (ye.useInsertionEffect = function (D, V) {
      return ae.current.useInsertionEffect(D, V);
    }),
    (ye.useLayoutEffect = function (D, V) {
      return ae.current.useLayoutEffect(D, V);
    }),
    (ye.useMemo = function (D, V) {
      return ae.current.useMemo(D, V);
    }),
    (ye.useReducer = function (D, V, pe) {
      return ae.current.useReducer(D, V, pe);
    }),
    (ye.useRef = function (D) {
      return ae.current.useRef(D);
    }),
    (ye.useState = function (D) {
      return ae.current.useState(D);
    }),
    (ye.useSyncExternalStore = function (D, V, pe) {
      return ae.current.useSyncExternalStore(D, V, pe);
    }),
    (ye.useTransition = function () {
      return ae.current.useTransition();
    }),
    (ye.version = "18.3.1"),
    ye
  );
}
var km;
function Kt() {
  return km || ((km = 1), (Kl.exports = fy())), Kl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Om;
function my() {
  if (Om) return Ei;
  Om = 1;
  var n = Kt(),
    i = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(h, p, g) {
    var w,
      P = {},
      y = null,
      j = null;
    g !== void 0 && (y = "" + g),
      p.key !== void 0 && (y = "" + p.key),
      p.ref !== void 0 && (j = p.ref);
    for (w in p) o.call(p, w) && !c.hasOwnProperty(w) && (P[w] = p[w]);
    if (h && h.defaultProps)
      for (w in ((p = h.defaultProps), p)) P[w] === void 0 && (P[w] = p[w]);
    return {
      $$typeof: i,
      type: h,
      key: y,
      ref: j,
      props: P,
      _owner: l.current,
    };
  }
  return (Ei.Fragment = a), (Ei.jsx = m), (Ei.jsxs = m), Ei;
}
var Im;
function hy() {
  return Im || ((Im = 1), (Xl.exports = my())), Xl.exports;
}
var d = hy(),
  L = Kt();
const an = jp(L);
var io = {},
  Gl = { exports: {} },
  dt = {},
  Ql = { exports: {} },
  Jl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Am;
function py() {
  return (
    Am ||
      ((Am = 1),
      (function (n) {
        function i($, le) {
          var Z = $.length;
          $.push(le);
          e: for (; 0 < Z; ) {
            var D = (Z - 1) >>> 1,
              V = $[D];
            if (0 < l(V, le)) ($[D] = le), ($[Z] = V), (Z = D);
            else break e;
          }
        }
        function a($) {
          return $.length === 0 ? null : $[0];
        }
        function o($) {
          if ($.length === 0) return null;
          var le = $[0],
            Z = $.pop();
          if (Z !== le) {
            $[0] = Z;
            e: for (var D = 0, V = $.length, pe = V >>> 1; D < pe; ) {
              var he = 2 * (D + 1) - 1,
                Se = $[he],
                _e = he + 1,
                je = $[_e];
              if (0 > l(Se, Z))
                _e < V && 0 > l(je, Se)
                  ? (($[D] = je), ($[_e] = Z), (D = _e))
                  : (($[D] = Se), ($[he] = Z), (D = he));
              else if (_e < V && 0 > l(je, Z))
                ($[D] = je), ($[_e] = Z), (D = _e);
              else break e;
            }
          }
          return le;
        }
        function l($, le) {
          var Z = $.sortIndex - le.sortIndex;
          return Z !== 0 ? Z : $.id - le.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var m = Date,
            h = m.now();
          n.unstable_now = function () {
            return m.now() - h;
          };
        }
        var p = [],
          g = [],
          w = 1,
          P = null,
          y = 3,
          j = !1,
          b = !1,
          T = !1,
          _ = typeof setTimeout == "function" ? setTimeout : null,
          A = typeof clearTimeout == "function" ? clearTimeout : null,
          R = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function x($) {
          for (var le = a(g); le !== null; ) {
            if (le.callback === null) o(g);
            else if (le.startTime <= $)
              o(g), (le.sortIndex = le.expirationTime), i(p, le);
            else break;
            le = a(g);
          }
        }
        function S($) {
          if (((T = !1), x($), !b))
            if (a(p) !== null) (b = !0), ie(E);
            else {
              var le = a(g);
              le !== null && ae(S, le.startTime - $);
            }
        }
        function E($, le) {
          (b = !1), T && ((T = !1), A(W), (W = -1)), (j = !0);
          var Z = y;
          try {
            for (
              x(le), P = a(p);
              P !== null && (!(P.expirationTime > le) || ($ && !te()));

            ) {
              var D = P.callback;
              if (typeof D == "function") {
                (P.callback = null), (y = P.priorityLevel);
                var V = D(P.expirationTime <= le);
                (le = n.unstable_now()),
                  typeof V == "function"
                    ? (P.callback = V)
                    : P === a(p) && o(p),
                  x(le);
              } else o(p);
              P = a(p);
            }
            if (P !== null) var pe = !0;
            else {
              var he = a(g);
              he !== null && ae(S, he.startTime - le), (pe = !1);
            }
            return pe;
          } finally {
            (P = null), (y = Z), (j = !1);
          }
        }
        var k = !1,
          I = null,
          W = -1,
          Y = 5,
          ne = -1;
        function te() {
          return !(n.unstable_now() - ne < Y);
        }
        function F() {
          if (I !== null) {
            var $ = n.unstable_now();
            ne = $;
            var le = !0;
            try {
              le = I(!0, $);
            } finally {
              le ? X() : ((k = !1), (I = null));
            }
          } else k = !1;
        }
        var X;
        if (typeof R == "function")
          X = function () {
            R(F);
          };
        else if (typeof MessageChannel < "u") {
          var J = new MessageChannel(),
            ee = J.port2;
          (J.port1.onmessage = F),
            (X = function () {
              ee.postMessage(null);
            });
        } else
          X = function () {
            _(F, 0);
          };
        function ie($) {
          (I = $), k || ((k = !0), X());
        }
        function ae($, le) {
          W = _(function () {
            $(n.unstable_now());
          }, le);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            b || j || ((b = !0), ie(E));
          }),
          (n.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Y = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return a(p);
          }),
          (n.unstable_next = function ($) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var le = 3;
                break;
              default:
                le = y;
            }
            var Z = y;
            y = le;
            try {
              return $();
            } finally {
              y = Z;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function ($, le) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var Z = y;
            y = $;
            try {
              return le();
            } finally {
              y = Z;
            }
          }),
          (n.unstable_scheduleCallback = function ($, le, Z) {
            var D = n.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? D + Z : D))
                : (Z = D),
              $)
            ) {
              case 1:
                var V = -1;
                break;
              case 2:
                V = 250;
                break;
              case 5:
                V = 1073741823;
                break;
              case 4:
                V = 1e4;
                break;
              default:
                V = 5e3;
            }
            return (
              (V = Z + V),
              ($ = {
                id: w++,
                callback: le,
                priorityLevel: $,
                startTime: Z,
                expirationTime: V,
                sortIndex: -1,
              }),
              Z > D
                ? (($.sortIndex = Z),
                  i(g, $),
                  a(p) === null &&
                    $ === a(g) &&
                    (T ? (A(W), (W = -1)) : (T = !0), ae(S, Z - D)))
                : (($.sortIndex = V), i(p, $), b || j || ((b = !0), ie(E))),
              $
            );
          }),
          (n.unstable_shouldYield = te),
          (n.unstable_wrapCallback = function ($) {
            var le = y;
            return function () {
              var Z = y;
              y = le;
              try {
                return $.apply(this, arguments);
              } finally {
                y = Z;
              }
            };
          });
      })(Jl)),
    Jl
  );
}
var Rm;
function gy() {
  return Rm || ((Rm = 1), (Ql.exports = py())), Ql.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dm;
function vy() {
  if (Dm) return dt;
  Dm = 1;
  var n = Kt(),
    i = gy();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var o = new Set(),
    l = {};
  function c(e, t) {
    m(e, t), m(e + "Capture", t);
  }
  function m(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    p = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w = {},
    P = {};
  function y(e) {
    return p.call(P, e)
      ? !0
      : p.call(w, e)
      ? !1
      : g.test(e)
      ? (P[e] = !0)
      : ((w[e] = !0), !1);
  }
  function j(e, t, r, s) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function b(e, t, r, s) {
    if (t === null || typeof t > "u" || j(e, t, r, s)) return !0;
    if (s) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function T(e, t, r, s, u, f, v) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = s),
      (this.attributeNamespace = u),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = f),
      (this.removeEmptyString = v);
  }
  var _ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      _[e] = new T(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      _[t] = new T(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      _[e] = new T(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      _[e] = new T(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        _[e] = new T(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      _[e] = new T(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      _[e] = new T(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      _[e] = new T(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      _[e] = new T(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var A = /[\-:]([a-z])/g;
  function R(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(A, R);
      _[t] = new T(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(A, R);
        _[t] = new T(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(A, R);
      _[t] = new T(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      _[e] = new T(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (_.xlinkHref = new T(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      _[e] = new T(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function x(e, t, r, s) {
    var u = _.hasOwnProperty(t) ? _[t] : null;
    (u !== null
      ? u.type !== 0
      : s ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (b(t, r, u, s) && (r = null),
      s || u === null
        ? y(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : u.mustUseProperty
        ? (e[u.propertyName] = r === null ? (u.type === 3 ? !1 : "") : r)
        : ((t = u.attributeName),
          (s = u.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((u = u.type),
              (r = u === 3 || (u === 4 && r === !0) ? "" : "" + r),
              s ? e.setAttributeNS(s, t, r) : e.setAttribute(t, r))));
  }
  var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    E = Symbol.for("react.element"),
    k = Symbol.for("react.portal"),
    I = Symbol.for("react.fragment"),
    W = Symbol.for("react.strict_mode"),
    Y = Symbol.for("react.profiler"),
    ne = Symbol.for("react.provider"),
    te = Symbol.for("react.context"),
    F = Symbol.for("react.forward_ref"),
    X = Symbol.for("react.suspense"),
    J = Symbol.for("react.suspense_list"),
    ee = Symbol.for("react.memo"),
    ie = Symbol.for("react.lazy"),
    ae = Symbol.for("react.offscreen"),
    $ = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = ($ && e[$]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Z = Object.assign,
    D;
  function V(e) {
    if (D === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        D = (t && t[1]) || "";
      }
    return (
      `
` +
      D +
      e
    );
  }
  var pe = !1;
  function he(e, t) {
    if (!e || pe) return "";
    pe = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (U) {
            var s = U;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (U) {
            s = U;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (U) {
          s = U;
        }
        e();
      }
    } catch (U) {
      if (U && s && typeof U.stack == "string") {
        for (
          var u = U.stack.split(`
`),
            f = s.stack.split(`
`),
            v = u.length - 1,
            N = f.length - 1;
          1 <= v && 0 <= N && u[v] !== f[N];

        )
          N--;
        for (; 1 <= v && 0 <= N; v--, N--)
          if (u[v] !== f[N]) {
            if (v !== 1 || N !== 1)
              do
                if ((v--, N--, 0 > N || u[v] !== f[N])) {
                  var C =
                    `
` + u[v].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      C.includes("<anonymous>") &&
                      (C = C.replace("<anonymous>", e.displayName)),
                    C
                  );
                }
              while (1 <= v && 0 <= N);
            break;
          }
      }
    } finally {
      (pe = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? V(e) : "";
  }
  function Se(e) {
    switch (e.tag) {
      case 5:
        return V(e.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = he(e.type, !1)), e;
      case 11:
        return (e = he(e.type.render, !1)), e;
      case 1:
        return (e = he(e.type, !0)), e;
      default:
        return "";
    }
  }
  function _e(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case I:
        return "Fragment";
      case k:
        return "Portal";
      case Y:
        return "Profiler";
      case W:
        return "StrictMode";
      case X:
        return "Suspense";
      case J:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case te:
          return (e.displayName || "Context") + ".Consumer";
        case ne:
          return (e._context.displayName || "Context") + ".Provider";
        case F:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ee:
          return (
            (t = e.displayName || null), t !== null ? t : _e(e.type) || "Memo"
          );
        case ie:
          (t = e._payload), (e = e._init);
          try {
            return _e(e(t));
          } catch {}
      }
    return null;
  }
  function je(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return _e(t);
      case 8:
        return t === W ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Te(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ae(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function mt(e) {
    var t = Ae(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      s = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var u = r.get,
        f = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (v) {
            (s = "" + v), f.call(this, v);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (v) {
            s = "" + v;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Xi(e) {
    e._valueTracker || (e._valueTracker = mt(e));
  }
  function Rc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      s = "";
    return (
      e && (s = Ae(e) ? (e.checked ? "true" : "false") : e.value),
      (e = s),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Ki(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ts(e, t) {
    var r = t.checked;
    return Z({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function Dc(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      s = t.checked != null ? t.checked : t.defaultChecked;
    (r = Te(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: s,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Lc(e, t) {
    (t = t.checked), t != null && x(e, "checked", t, !1);
  }
  function ns(e, t) {
    Lc(e, t);
    var r = Te(t.value),
      s = t.type;
    if (r != null)
      s === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? rs(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && rs(e, t.type, Te(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Mc(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (
        !(
          (s !== "submit" && s !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function rs(e, t, r) {
    (t !== "number" || Ki(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var zr = Array.isArray;
  function rr(e, t, r, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < r.length; u++) t["$" + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        (u = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== u && (e[r].selected = u),
          u && s && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Te(r), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          (e[u].selected = !0), s && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function is(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return Z({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Fc(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(a(92));
        if (zr(r)) {
          if (1 < r.length) throw Error(a(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: Te(r) };
  }
  function zc(e, t) {
    var r = Te(t.value),
      s = Te(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      s != null && (e.defaultValue = "" + s);
  }
  function Uc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Bc(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function as(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Bc(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Gi,
    Wc = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, s, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, s, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Gi = Gi || document.createElement("div"),
            Gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Gi.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Ur(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Br = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    gv = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Br).forEach(function (e) {
    gv.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Br[t] = Br[e]);
    });
  });
  function $c(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Br.hasOwnProperty(e) && Br[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Vc(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var s = r.indexOf("--") === 0,
          u = $c(r, t[r], s);
        r === "float" && (r = "cssFloat"), s ? e.setProperty(r, u) : (e[r] = u);
      }
  }
  var vv = Z(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function os(e, t) {
    if (t) {
      if (vv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function ss(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ls = null;
  function us(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var cs = null,
    ir = null,
    ar = null;
  function Hc(e) {
    if ((e = ui(e))) {
      if (typeof cs != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = xa(t)), cs(e.stateNode, e.type, t));
    }
  }
  function qc(e) {
    ir ? (ar ? ar.push(e) : (ar = [e])) : (ir = e);
  }
  function Yc() {
    if (ir) {
      var e = ir,
        t = ar;
      if (((ar = ir = null), Hc(e), t)) for (e = 0; e < t.length; e++) Hc(t[e]);
    }
  }
  function Xc(e, t) {
    return e(t);
  }
  function Kc() {}
  var ds = !1;
  function Gc(e, t, r) {
    if (ds) return e(t, r);
    ds = !0;
    try {
      return Xc(e, t, r);
    } finally {
      (ds = !1), (ir !== null || ar !== null) && (Kc(), Yc());
    }
  }
  function Wr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var s = xa(r);
    if (s === null) return null;
    r = s[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) ||
          ((e = e.type),
          (s = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !s);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(a(231, t, typeof r));
    return r;
  }
  var fs = !1;
  if (h)
    try {
      var $r = {};
      Object.defineProperty($r, "passive", {
        get: function () {
          fs = !0;
        },
      }),
        window.addEventListener("test", $r, $r),
        window.removeEventListener("test", $r, $r);
    } catch {
      fs = !1;
    }
  function yv(e, t, r, s, u, f, v, N, C) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, U);
    } catch (q) {
      this.onError(q);
    }
  }
  var Vr = !1,
    Qi = null,
    Ji = !1,
    ms = null,
    xv = {
      onError: function (e) {
        (Vr = !0), (Qi = e);
      },
    };
  function wv(e, t, r, s, u, f, v, N, C) {
    (Vr = !1), (Qi = null), yv.apply(xv, arguments);
  }
  function bv(e, t, r, s, u, f, v, N, C) {
    if ((wv.apply(this, arguments), Vr)) {
      if (Vr) {
        var U = Qi;
        (Vr = !1), (Qi = null);
      } else throw Error(a(198));
      Ji || ((Ji = !0), (ms = U));
    }
  }
  function Ln(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Qc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Jc(e) {
    if (Ln(e) !== e) throw Error(a(188));
  }
  function Sv(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Ln(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var r = e, s = t; ; ) {
      var u = r.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((s = u.return), s !== null)) {
          r = s;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === r) return Jc(u), e;
          if (f === s) return Jc(u), t;
          f = f.sibling;
        }
        throw Error(a(188));
      }
      if (r.return !== s.return) (r = u), (s = f);
      else {
        for (var v = !1, N = u.child; N; ) {
          if (N === r) {
            (v = !0), (r = u), (s = f);
            break;
          }
          if (N === s) {
            (v = !0), (s = u), (r = f);
            break;
          }
          N = N.sibling;
        }
        if (!v) {
          for (N = f.child; N; ) {
            if (N === r) {
              (v = !0), (r = f), (s = u);
              break;
            }
            if (N === s) {
              (v = !0), (s = f), (r = u);
              break;
            }
            N = N.sibling;
          }
          if (!v) throw Error(a(189));
        }
      }
      if (r.alternate !== s) throw Error(a(190));
    }
    if (r.tag !== 3) throw Error(a(188));
    return r.stateNode.current === r ? e : t;
  }
  function Zc(e) {
    return (e = Sv(e)), e !== null ? ed(e) : null;
  }
  function ed(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ed(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var td = i.unstable_scheduleCallback,
    nd = i.unstable_cancelCallback,
    _v = i.unstable_shouldYield,
    Ev = i.unstable_requestPaint,
    ze = i.unstable_now,
    Tv = i.unstable_getCurrentPriorityLevel,
    hs = i.unstable_ImmediatePriority,
    rd = i.unstable_UserBlockingPriority,
    Zi = i.unstable_NormalPriority,
    Pv = i.unstable_LowPriority,
    id = i.unstable_IdlePriority,
    ea = null,
    zt = null;
  function Nv(e) {
    if (zt && typeof zt.onCommitFiberRoot == "function")
      try {
        zt.onCommitFiberRoot(ea, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Nt = Math.clz32 ? Math.clz32 : kv,
    jv = Math.log,
    Cv = Math.LN2;
  function kv(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((jv(e) / Cv) | 0)) | 0;
  }
  var ta = 64,
    na = 4194304;
  function Hr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ra(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0,
      u = e.suspendedLanes,
      f = e.pingedLanes,
      v = r & 268435455;
    if (v !== 0) {
      var N = v & ~u;
      N !== 0 ? (s = Hr(N)) : ((f &= v), f !== 0 && (s = Hr(f)));
    } else (v = r & ~u), v !== 0 ? (s = Hr(v)) : f !== 0 && (s = Hr(f));
    if (s === 0) return 0;
    if (
      t !== 0 &&
      t !== s &&
      !(t & u) &&
      ((u = s & -s), (f = t & -t), u >= f || (u === 16 && (f & 4194240) !== 0))
    )
      return t;
    if ((s & 4 && (s |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= s; 0 < t; )
        (r = 31 - Nt(t)), (u = 1 << r), (s |= e[r]), (t &= ~u);
    return s;
  }
  function Ov(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Iv(e, t) {
    for (
      var r = e.suspendedLanes,
        s = e.pingedLanes,
        u = e.expirationTimes,
        f = e.pendingLanes;
      0 < f;

    ) {
      var v = 31 - Nt(f),
        N = 1 << v,
        C = u[v];
      C === -1
        ? (!(N & r) || N & s) && (u[v] = Ov(N, t))
        : C <= t && (e.expiredLanes |= N),
        (f &= ~N);
    }
  }
  function ps(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ad() {
    var e = ta;
    return (ta <<= 1), !(ta & 4194240) && (ta = 64), e;
  }
  function gs(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function qr(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Nt(t)),
      (e[t] = r);
  }
  function Av(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var u = 31 - Nt(r),
        f = 1 << u;
      (t[u] = 0), (s[u] = -1), (e[u] = -1), (r &= ~f);
    }
  }
  function vs(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var s = 31 - Nt(r),
        u = 1 << s;
      (u & t) | (e[s] & t) && (e[s] |= t), (r &= ~u);
    }
  }
  var Pe = 0;
  function od(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var sd,
    ys,
    ld,
    ud,
    cd,
    xs = !1,
    ia = [],
    dn = null,
    fn = null,
    mn = null,
    Yr = new Map(),
    Xr = new Map(),
    hn = [],
    Rv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function dd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        dn = null;
        break;
      case "dragenter":
      case "dragleave":
        fn = null;
        break;
      case "mouseover":
      case "mouseout":
        mn = null;
        break;
      case "pointerover":
      case "pointerout":
        Yr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xr.delete(t.pointerId);
    }
  }
  function Kr(e, t, r, s, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: s,
          nativeEvent: f,
          targetContainers: [u],
        }),
        t !== null && ((t = ui(t)), t !== null && ys(t)),
        e)
      : ((e.eventSystemFlags |= s),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Dv(e, t, r, s, u) {
    switch (t) {
      case "focusin":
        return (dn = Kr(dn, e, t, r, s, u)), !0;
      case "dragenter":
        return (fn = Kr(fn, e, t, r, s, u)), !0;
      case "mouseover":
        return (mn = Kr(mn, e, t, r, s, u)), !0;
      case "pointerover":
        var f = u.pointerId;
        return Yr.set(f, Kr(Yr.get(f) || null, e, t, r, s, u)), !0;
      case "gotpointercapture":
        return (
          (f = u.pointerId), Xr.set(f, Kr(Xr.get(f) || null, e, t, r, s, u)), !0
        );
    }
    return !1;
  }
  function fd(e) {
    var t = Mn(e.target);
    if (t !== null) {
      var r = Ln(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Qc(r)), t !== null)) {
            (e.blockedOn = t),
              cd(e.priority, function () {
                ld(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function aa(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = bs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var s = new r.constructor(r.type, r);
        (ls = s), r.target.dispatchEvent(s), (ls = null);
      } else return (t = ui(r)), t !== null && ys(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function md(e, t, r) {
    aa(e) && r.delete(t);
  }
  function Lv() {
    (xs = !1),
      dn !== null && aa(dn) && (dn = null),
      fn !== null && aa(fn) && (fn = null),
      mn !== null && aa(mn) && (mn = null),
      Yr.forEach(md),
      Xr.forEach(md);
  }
  function Gr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      xs ||
        ((xs = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Lv)));
  }
  function Qr(e) {
    function t(u) {
      return Gr(u, e);
    }
    if (0 < ia.length) {
      Gr(ia[0], e);
      for (var r = 1; r < ia.length; r++) {
        var s = ia[r];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (
      dn !== null && Gr(dn, e),
        fn !== null && Gr(fn, e),
        mn !== null && Gr(mn, e),
        Yr.forEach(t),
        Xr.forEach(t),
        r = 0;
      r < hn.length;
      r++
    )
      (s = hn[r]), s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < hn.length && ((r = hn[0]), r.blockedOn === null); )
      fd(r), r.blockedOn === null && hn.shift();
  }
  var or = S.ReactCurrentBatchConfig,
    oa = !0;
  function Mv(e, t, r, s) {
    var u = Pe,
      f = or.transition;
    or.transition = null;
    try {
      (Pe = 1), ws(e, t, r, s);
    } finally {
      (Pe = u), (or.transition = f);
    }
  }
  function Fv(e, t, r, s) {
    var u = Pe,
      f = or.transition;
    or.transition = null;
    try {
      (Pe = 4), ws(e, t, r, s);
    } finally {
      (Pe = u), (or.transition = f);
    }
  }
  function ws(e, t, r, s) {
    if (oa) {
      var u = bs(e, t, r, s);
      if (u === null) Fs(e, t, s, sa, r), dd(e, s);
      else if (Dv(u, e, t, r, s)) s.stopPropagation();
      else if ((dd(e, s), t & 4 && -1 < Rv.indexOf(e))) {
        for (; u !== null; ) {
          var f = ui(u);
          if (
            (f !== null && sd(f),
            (f = bs(e, t, r, s)),
            f === null && Fs(e, t, s, sa, r),
            f === u)
          )
            break;
          u = f;
        }
        u !== null && s.stopPropagation();
      } else Fs(e, t, s, null, r);
    }
  }
  var sa = null;
  function bs(e, t, r, s) {
    if (((sa = null), (e = us(s)), (e = Mn(e)), e !== null))
      if (((t = Ln(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Qc(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (sa = e), null;
  }
  function hd(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Tv()) {
          case hs:
            return 1;
          case rd:
            return 4;
          case Zi:
          case Pv:
            return 16;
          case id:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pn = null,
    Ss = null,
    la = null;
  function pd() {
    if (la) return la;
    var e,
      t = Ss,
      r = t.length,
      s,
      u = "value" in pn ? pn.value : pn.textContent,
      f = u.length;
    for (e = 0; e < r && t[e] === u[e]; e++);
    var v = r - e;
    for (s = 1; s <= v && t[r - s] === u[f - s]; s++);
    return (la = u.slice(e, 1 < s ? 1 - s : void 0));
  }
  function ua(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ca() {
    return !0;
  }
  function gd() {
    return !1;
  }
  function ht(e) {
    function t(r, s, u, f, v) {
      (this._reactName = r),
        (this._targetInst = u),
        (this.type = s),
        (this.nativeEvent = f),
        (this.target = v),
        (this.currentTarget = null);
      for (var N in e)
        e.hasOwnProperty(N) && ((r = e[N]), (this[N] = r ? r(f) : f[N]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? ca
          : gd),
        (this.isPropagationStopped = gd),
        this
      );
    }
    return (
      Z(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = ca));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = ca));
        },
        persist: function () {},
        isPersistent: ca,
      }),
      t
    );
  }
  var sr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    _s = ht(sr),
    Jr = Z({}, sr, { view: 0, detail: 0 }),
    zv = ht(Jr),
    Es,
    Ts,
    Zr,
    da = Z({}, Jr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ns,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Zr &&
              (Zr && e.type === "mousemove"
                ? ((Es = e.screenX - Zr.screenX), (Ts = e.screenY - Zr.screenY))
                : (Ts = Es = 0),
              (Zr = e)),
            Es);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ts;
      },
    }),
    vd = ht(da),
    Uv = Z({}, da, { dataTransfer: 0 }),
    Bv = ht(Uv),
    Wv = Z({}, Jr, { relatedTarget: 0 }),
    Ps = ht(Wv),
    $v = Z({}, sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vv = ht($v),
    Hv = Z({}, sr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    qv = ht(Hv),
    Yv = Z({}, sr, { data: 0 }),
    yd = ht(Yv),
    Xv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Kv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Gv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Qv(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Gv[e])
      ? !!t[e]
      : !1;
  }
  function Ns() {
    return Qv;
  }
  var Jv = Z({}, Jr, {
      key: function (e) {
        if (e.key) {
          var t = Xv[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ua(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Kv[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ns,
      charCode: function (e) {
        return e.type === "keypress" ? ua(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ua(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Zv = ht(Jv),
    e0 = Z({}, da, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xd = ht(e0),
    t0 = Z({}, Jr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ns,
    }),
    n0 = ht(t0),
    r0 = Z({}, sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    i0 = ht(r0),
    a0 = Z({}, da, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    o0 = ht(a0),
    s0 = [9, 13, 27, 32],
    js = h && "CompositionEvent" in window,
    ei = null;
  h && "documentMode" in document && (ei = document.documentMode);
  var l0 = h && "TextEvent" in window && !ei,
    wd = h && (!js || (ei && 8 < ei && 11 >= ei)),
    bd = " ",
    Sd = !1;
  function _d(e, t) {
    switch (e) {
      case "keyup":
        return s0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ed(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var lr = !1;
  function u0(e, t) {
    switch (e) {
      case "compositionend":
        return Ed(t);
      case "keypress":
        return t.which !== 32 ? null : ((Sd = !0), bd);
      case "textInput":
        return (e = t.data), e === bd && Sd ? null : e;
      default:
        return null;
    }
  }
  function c0(e, t) {
    if (lr)
      return e === "compositionend" || (!js && _d(e, t))
        ? ((e = pd()), (la = Ss = pn = null), (lr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return wd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var d0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Td(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!d0[e.type] : t === "textarea";
  }
  function Pd(e, t, r, s) {
    qc(s),
      (t = ga(t, "onChange")),
      0 < t.length &&
        ((r = new _s("onChange", "change", null, r, s)),
        e.push({ event: r, listeners: t }));
  }
  var ti = null,
    ni = null;
  function f0(e) {
    Vd(e, 0);
  }
  function fa(e) {
    var t = mr(e);
    if (Rc(t)) return e;
  }
  function m0(e, t) {
    if (e === "change") return t;
  }
  var Nd = !1;
  if (h) {
    var Cs;
    if (h) {
      var ks = "oninput" in document;
      if (!ks) {
        var jd = document.createElement("div");
        jd.setAttribute("oninput", "return;"),
          (ks = typeof jd.oninput == "function");
      }
      Cs = ks;
    } else Cs = !1;
    Nd = Cs && (!document.documentMode || 9 < document.documentMode);
  }
  function Cd() {
    ti && (ti.detachEvent("onpropertychange", kd), (ni = ti = null));
  }
  function kd(e) {
    if (e.propertyName === "value" && fa(ni)) {
      var t = [];
      Pd(t, ni, e, us(e)), Gc(f0, t);
    }
  }
  function h0(e, t, r) {
    e === "focusin"
      ? (Cd(), (ti = t), (ni = r), ti.attachEvent("onpropertychange", kd))
      : e === "focusout" && Cd();
  }
  function p0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return fa(ni);
  }
  function g0(e, t) {
    if (e === "click") return fa(t);
  }
  function v0(e, t) {
    if (e === "input" || e === "change") return fa(t);
  }
  function y0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var jt = typeof Object.is == "function" ? Object.is : y0;
  function ri(e, t) {
    if (jt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (s = 0; s < r.length; s++) {
      var u = r[s];
      if (!p.call(t, u) || !jt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Od(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Id(e, t) {
    var r = Od(e);
    e = 0;
    for (var s; r; ) {
      if (r.nodeType === 3) {
        if (((s = e + r.textContent.length), e <= t && s >= t))
          return { node: r, offset: t - e };
        e = s;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Od(r);
    }
  }
  function Ad(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ad(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Rd() {
    for (var e = window, t = Ki(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Ki(e.document);
    }
    return t;
  }
  function Os(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function x0(e) {
    var t = Rd(),
      r = e.focusedElem,
      s = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Ad(r.ownerDocument.documentElement, r)
    ) {
      if (s !== null && Os(r)) {
        if (
          ((t = s.start),
          (e = s.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var u = r.textContent.length,
            f = Math.min(s.start, u);
          (s = s.end === void 0 ? f : Math.min(s.end, u)),
            !e.extend && f > s && ((u = s), (s = f), (f = u)),
            (u = Id(r, f));
          var v = Id(r, s);
          u &&
            v &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== v.node ||
              e.focusOffset !== v.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            f > s
              ? (e.addRange(t), e.extend(v.node, v.offset))
              : (t.setEnd(v.node, v.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var w0 = h && "documentMode" in document && 11 >= document.documentMode,
    ur = null,
    Is = null,
    ii = null,
    As = !1;
  function Dd(e, t, r) {
    var s =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    As ||
      ur == null ||
      ur !== Ki(s) ||
      ((s = ur),
      "selectionStart" in s && Os(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (ii && ri(ii, s)) ||
        ((ii = s),
        (s = ga(Is, "onSelect")),
        0 < s.length &&
          ((t = new _s("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: s }),
          (t.target = ur))));
  }
  function ma(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var cr = {
      animationend: ma("Animation", "AnimationEnd"),
      animationiteration: ma("Animation", "AnimationIteration"),
      animationstart: ma("Animation", "AnimationStart"),
      transitionend: ma("Transition", "TransitionEnd"),
    },
    Rs = {},
    Ld = {};
  h &&
    ((Ld = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete cr.animationend.animation,
      delete cr.animationiteration.animation,
      delete cr.animationstart.animation),
    "TransitionEvent" in window || delete cr.transitionend.transition);
  function ha(e) {
    if (Rs[e]) return Rs[e];
    if (!cr[e]) return e;
    var t = cr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in Ld) return (Rs[e] = t[r]);
    return e;
  }
  var Md = ha("animationend"),
    Fd = ha("animationiteration"),
    zd = ha("animationstart"),
    Ud = ha("transitionend"),
    Bd = new Map(),
    Wd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function gn(e, t) {
    Bd.set(e, t), c(t, [e]);
  }
  for (var Ds = 0; Ds < Wd.length; Ds++) {
    var Ls = Wd[Ds],
      b0 = Ls.toLowerCase(),
      S0 = Ls[0].toUpperCase() + Ls.slice(1);
    gn(b0, "on" + S0);
  }
  gn(Md, "onAnimationEnd"),
    gn(Fd, "onAnimationIteration"),
    gn(zd, "onAnimationStart"),
    gn("dblclick", "onDoubleClick"),
    gn("focusin", "onFocus"),
    gn("focusout", "onBlur"),
    gn(Ud, "onTransitionEnd"),
    m("onMouseEnter", ["mouseout", "mouseover"]),
    m("onMouseLeave", ["mouseout", "mouseover"]),
    m("onPointerEnter", ["pointerout", "pointerover"]),
    m("onPointerLeave", ["pointerout", "pointerover"]),
    c(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    c(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    c(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    c(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ai =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    _0 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ai)
    );
  function $d(e, t, r) {
    var s = e.type || "unknown-event";
    (e.currentTarget = r), bv(s, t, void 0, e), (e.currentTarget = null);
  }
  function Vd(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var s = e[r],
        u = s.event;
      s = s.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var v = s.length - 1; 0 <= v; v--) {
            var N = s[v],
              C = N.instance,
              U = N.currentTarget;
            if (((N = N.listener), C !== f && u.isPropagationStopped()))
              break e;
            $d(u, N, U), (f = C);
          }
        else
          for (v = 0; v < s.length; v++) {
            if (
              ((N = s[v]),
              (C = N.instance),
              (U = N.currentTarget),
              (N = N.listener),
              C !== f && u.isPropagationStopped())
            )
              break e;
            $d(u, N, U), (f = C);
          }
      }
    }
    if (Ji) throw ((e = ms), (Ji = !1), (ms = null), e);
  }
  function ke(e, t) {
    var r = t[Vs];
    r === void 0 && (r = t[Vs] = new Set());
    var s = e + "__bubble";
    r.has(s) || (Hd(t, e, 2, !1), r.add(s));
  }
  function Ms(e, t, r) {
    var s = 0;
    t && (s |= 4), Hd(r, e, s, t);
  }
  var pa = "_reactListening" + Math.random().toString(36).slice(2);
  function oi(e) {
    if (!e[pa]) {
      (e[pa] = !0),
        o.forEach(function (r) {
          r !== "selectionchange" && (_0.has(r) || Ms(r, !1, e), Ms(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[pa] || ((t[pa] = !0), Ms("selectionchange", !1, t));
    }
  }
  function Hd(e, t, r, s) {
    switch (hd(t)) {
      case 1:
        var u = Mv;
        break;
      case 4:
        u = Fv;
        break;
      default:
        u = ws;
    }
    (r = u.bind(null, t, r, e)),
      (u = void 0),
      !fs ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      s
        ? u !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: u })
          : e.addEventListener(t, r, !0)
        : u !== void 0
        ? e.addEventListener(t, r, { passive: u })
        : e.addEventListener(t, r, !1);
  }
  function Fs(e, t, r, s, u) {
    var f = s;
    if (!(t & 1) && !(t & 2) && s !== null)
      e: for (;;) {
        if (s === null) return;
        var v = s.tag;
        if (v === 3 || v === 4) {
          var N = s.stateNode.containerInfo;
          if (N === u || (N.nodeType === 8 && N.parentNode === u)) break;
          if (v === 4)
            for (v = s.return; v !== null; ) {
              var C = v.tag;
              if (
                (C === 3 || C === 4) &&
                ((C = v.stateNode.containerInfo),
                C === u || (C.nodeType === 8 && C.parentNode === u))
              )
                return;
              v = v.return;
            }
          for (; N !== null; ) {
            if (((v = Mn(N)), v === null)) return;
            if (((C = v.tag), C === 5 || C === 6)) {
              s = f = v;
              continue e;
            }
            N = N.parentNode;
          }
        }
        s = s.return;
      }
    Gc(function () {
      var U = f,
        q = us(r),
        K = [];
      e: {
        var H = Bd.get(e);
        if (H !== void 0) {
          var re = _s,
            se = e;
          switch (e) {
            case "keypress":
              if (ua(r) === 0) break e;
            case "keydown":
            case "keyup":
              re = Zv;
              break;
            case "focusin":
              (se = "focus"), (re = Ps);
              break;
            case "focusout":
              (se = "blur"), (re = Ps);
              break;
            case "beforeblur":
            case "afterblur":
              re = Ps;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              re = vd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              re = Bv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              re = n0;
              break;
            case Md:
            case Fd:
            case zd:
              re = Vv;
              break;
            case Ud:
              re = i0;
              break;
            case "scroll":
              re = zv;
              break;
            case "wheel":
              re = o0;
              break;
            case "copy":
            case "cut":
            case "paste":
              re = qv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              re = xd;
          }
          var ue = (t & 4) !== 0,
            Ue = !ue && e === "scroll",
            M = ue ? (H !== null ? H + "Capture" : null) : H;
          ue = [];
          for (var O = U, z; O !== null; ) {
            z = O;
            var Q = z.stateNode;
            if (
              (z.tag === 5 &&
                Q !== null &&
                ((z = Q),
                M !== null &&
                  ((Q = Wr(O, M)), Q != null && ue.push(si(O, Q, z)))),
              Ue)
            )
              break;
            O = O.return;
          }
          0 < ue.length &&
            ((H = new re(H, se, null, r, q)),
            K.push({ event: H, listeners: ue }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((H = e === "mouseover" || e === "pointerover"),
            (re = e === "mouseout" || e === "pointerout"),
            H &&
              r !== ls &&
              (se = r.relatedTarget || r.fromElement) &&
              (Mn(se) || se[Gt]))
          )
            break e;
          if (
            (re || H) &&
            ((H =
              q.window === q
                ? q
                : (H = q.ownerDocument)
                ? H.defaultView || H.parentWindow
                : window),
            re
              ? ((se = r.relatedTarget || r.toElement),
                (re = U),
                (se = se ? Mn(se) : null),
                se !== null &&
                  ((Ue = Ln(se)),
                  se !== Ue || (se.tag !== 5 && se.tag !== 6)) &&
                  (se = null))
              : ((re = null), (se = U)),
            re !== se)
          ) {
            if (
              ((ue = vd),
              (Q = "onMouseLeave"),
              (M = "onMouseEnter"),
              (O = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ue = xd),
                (Q = "onPointerLeave"),
                (M = "onPointerEnter"),
                (O = "pointer")),
              (Ue = re == null ? H : mr(re)),
              (z = se == null ? H : mr(se)),
              (H = new ue(Q, O + "leave", re, r, q)),
              (H.target = Ue),
              (H.relatedTarget = z),
              (Q = null),
              Mn(q) === U &&
                ((ue = new ue(M, O + "enter", se, r, q)),
                (ue.target = z),
                (ue.relatedTarget = Ue),
                (Q = ue)),
              (Ue = Q),
              re && se)
            )
              t: {
                for (ue = re, M = se, O = 0, z = ue; z; z = dr(z)) O++;
                for (z = 0, Q = M; Q; Q = dr(Q)) z++;
                for (; 0 < O - z; ) (ue = dr(ue)), O--;
                for (; 0 < z - O; ) (M = dr(M)), z--;
                for (; O--; ) {
                  if (ue === M || (M !== null && ue === M.alternate)) break t;
                  (ue = dr(ue)), (M = dr(M));
                }
                ue = null;
              }
            else ue = null;
            re !== null && qd(K, H, re, ue, !1),
              se !== null && Ue !== null && qd(K, Ue, se, ue, !0);
          }
        }
        e: {
          if (
            ((H = U ? mr(U) : window),
            (re = H.nodeName && H.nodeName.toLowerCase()),
            re === "select" || (re === "input" && H.type === "file"))
          )
            var ce = m0;
          else if (Td(H))
            if (Nd) ce = v0;
            else {
              ce = p0;
              var fe = h0;
            }
          else
            (re = H.nodeName) &&
              re.toLowerCase() === "input" &&
              (H.type === "checkbox" || H.type === "radio") &&
              (ce = g0);
          if (ce && (ce = ce(e, U))) {
            Pd(K, ce, r, q);
            break e;
          }
          fe && fe(e, H, U),
            e === "focusout" &&
              (fe = H._wrapperState) &&
              fe.controlled &&
              H.type === "number" &&
              rs(H, "number", H.value);
        }
        switch (((fe = U ? mr(U) : window), e)) {
          case "focusin":
            (Td(fe) || fe.contentEditable === "true") &&
              ((ur = fe), (Is = U), (ii = null));
            break;
          case "focusout":
            ii = Is = ur = null;
            break;
          case "mousedown":
            As = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (As = !1), Dd(K, r, q);
            break;
          case "selectionchange":
            if (w0) break;
          case "keydown":
          case "keyup":
            Dd(K, r, q);
        }
        var me;
        if (js)
          e: {
            switch (e) {
              case "compositionstart":
                var ge = "onCompositionStart";
                break e;
              case "compositionend":
                ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ge = "onCompositionUpdate";
                break e;
            }
            ge = void 0;
          }
        else
          lr
            ? _d(e, r) && (ge = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (ge = "onCompositionStart");
        ge &&
          (wd &&
            r.locale !== "ko" &&
            (lr || ge !== "onCompositionStart"
              ? ge === "onCompositionEnd" && lr && (me = pd())
              : ((pn = q),
                (Ss = "value" in pn ? pn.value : pn.textContent),
                (lr = !0))),
          (fe = ga(U, ge)),
          0 < fe.length &&
            ((ge = new yd(ge, e, null, r, q)),
            K.push({ event: ge, listeners: fe }),
            me
              ? (ge.data = me)
              : ((me = Ed(r)), me !== null && (ge.data = me)))),
          (me = l0 ? u0(e, r) : c0(e, r)) &&
            ((U = ga(U, "onBeforeInput")),
            0 < U.length &&
              ((q = new yd("onBeforeInput", "beforeinput", null, r, q)),
              K.push({ event: q, listeners: U }),
              (q.data = me)));
      }
      Vd(K, t);
    });
  }
  function si(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function ga(e, t) {
    for (var r = t + "Capture", s = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      u.tag === 5 &&
        f !== null &&
        ((u = f),
        (f = Wr(e, r)),
        f != null && s.unshift(si(e, f, u)),
        (f = Wr(e, t)),
        f != null && s.push(si(e, f, u))),
        (e = e.return);
    }
    return s;
  }
  function dr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function qd(e, t, r, s, u) {
    for (var f = t._reactName, v = []; r !== null && r !== s; ) {
      var N = r,
        C = N.alternate,
        U = N.stateNode;
      if (C !== null && C === s) break;
      N.tag === 5 &&
        U !== null &&
        ((N = U),
        u
          ? ((C = Wr(r, f)), C != null && v.unshift(si(r, C, N)))
          : u || ((C = Wr(r, f)), C != null && v.push(si(r, C, N)))),
        (r = r.return);
    }
    v.length !== 0 && e.push({ event: t, listeners: v });
  }
  var E0 = /\r\n?/g,
    T0 = /\u0000|\uFFFD/g;
  function Yd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        E0,
        `
`
      )
      .replace(T0, "");
  }
  function va(e, t, r) {
    if (((t = Yd(t)), Yd(e) !== t && r)) throw Error(a(425));
  }
  function ya() {}
  var zs = null,
    Us = null;
  function Bs(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ws = typeof setTimeout == "function" ? setTimeout : void 0,
    P0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xd = typeof Promise == "function" ? Promise : void 0,
    N0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Xd < "u"
        ? function (e) {
            return Xd.resolve(null).then(e).catch(j0);
          }
        : Ws;
  function j0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function $s(e, t) {
    var r = t,
      s = 0;
    do {
      var u = r.nextSibling;
      if ((e.removeChild(r), u && u.nodeType === 8))
        if (((r = u.data), r === "/$")) {
          if (s === 0) {
            e.removeChild(u), Qr(t);
            return;
          }
          s--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || s++;
      r = u;
    } while (r);
    Qr(t);
  }
  function vn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Kd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var fr = Math.random().toString(36).slice(2),
    Ut = "__reactFiber$" + fr,
    li = "__reactProps$" + fr,
    Gt = "__reactContainer$" + fr,
    Vs = "__reactEvents$" + fr,
    C0 = "__reactListeners$" + fr,
    k0 = "__reactHandles$" + fr;
  function Mn(e) {
    var t = e[Ut];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Gt] || r[Ut])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = Kd(e); e !== null; ) {
            if ((r = e[Ut])) return r;
            e = Kd(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function ui(e) {
    return (
      (e = e[Ut] || e[Gt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function mr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function xa(e) {
    return e[li] || null;
  }
  var Hs = [],
    hr = -1;
  function yn(e) {
    return { current: e };
  }
  function Oe(e) {
    0 > hr || ((e.current = Hs[hr]), (Hs[hr] = null), hr--);
  }
  function Ce(e, t) {
    hr++, (Hs[hr] = e.current), (e.current = t);
  }
  var xn = {},
    Qe = yn(xn),
    ot = yn(!1),
    Fn = xn;
  function pr(e, t) {
    var r = e.type.contextTypes;
    if (!r) return xn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
      return s.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      f;
    for (f in r) u[f] = t[f];
    return (
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function st(e) {
    return (e = e.childContextTypes), e != null;
  }
  function wa() {
    Oe(ot), Oe(Qe);
  }
  function Gd(e, t, r) {
    if (Qe.current !== xn) throw Error(a(168));
    Ce(Qe, t), Ce(ot, r);
  }
  function Qd(e, t, r) {
    var s = e.stateNode;
    if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
      return r;
    s = s.getChildContext();
    for (var u in s) if (!(u in t)) throw Error(a(108, je(e) || "Unknown", u));
    return Z({}, r, s);
  }
  function ba(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        xn),
      (Fn = Qe.current),
      Ce(Qe, e),
      Ce(ot, ot.current),
      !0
    );
  }
  function Jd(e, t, r) {
    var s = e.stateNode;
    if (!s) throw Error(a(169));
    r
      ? ((e = Qd(e, t, Fn)),
        (s.__reactInternalMemoizedMergedChildContext = e),
        Oe(ot),
        Oe(Qe),
        Ce(Qe, e))
      : Oe(ot),
      Ce(ot, r);
  }
  var Qt = null,
    Sa = !1,
    qs = !1;
  function Zd(e) {
    Qt === null ? (Qt = [e]) : Qt.push(e);
  }
  function O0(e) {
    (Sa = !0), Zd(e);
  }
  function wn() {
    if (!qs && Qt !== null) {
      qs = !0;
      var e = 0,
        t = Pe;
      try {
        var r = Qt;
        for (Pe = 1; e < r.length; e++) {
          var s = r[e];
          do s = s(!0);
          while (s !== null);
        }
        (Qt = null), (Sa = !1);
      } catch (u) {
        throw (Qt !== null && (Qt = Qt.slice(e + 1)), td(hs, wn), u);
      } finally {
        (Pe = t), (qs = !1);
      }
    }
    return null;
  }
  var gr = [],
    vr = 0,
    _a = null,
    Ea = 0,
    wt = [],
    bt = 0,
    zn = null,
    Jt = 1,
    Zt = "";
  function Un(e, t) {
    (gr[vr++] = Ea), (gr[vr++] = _a), (_a = e), (Ea = t);
  }
  function ef(e, t, r) {
    (wt[bt++] = Jt), (wt[bt++] = Zt), (wt[bt++] = zn), (zn = e);
    var s = Jt;
    e = Zt;
    var u = 32 - Nt(s) - 1;
    (s &= ~(1 << u)), (r += 1);
    var f = 32 - Nt(t) + u;
    if (30 < f) {
      var v = u - (u % 5);
      (f = (s & ((1 << v) - 1)).toString(32)),
        (s >>= v),
        (u -= v),
        (Jt = (1 << (32 - Nt(t) + u)) | (r << u) | s),
        (Zt = f + e);
    } else (Jt = (1 << f) | (r << u) | s), (Zt = e);
  }
  function Ys(e) {
    e.return !== null && (Un(e, 1), ef(e, 1, 0));
  }
  function Xs(e) {
    for (; e === _a; )
      (_a = gr[--vr]), (gr[vr] = null), (Ea = gr[--vr]), (gr[vr] = null);
    for (; e === zn; )
      (zn = wt[--bt]),
        (wt[bt] = null),
        (Zt = wt[--bt]),
        (wt[bt] = null),
        (Jt = wt[--bt]),
        (wt[bt] = null);
  }
  var pt = null,
    gt = null,
    Re = !1,
    Ct = null;
  function tf(e, t) {
    var r = Tt(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function nf(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (pt = e), (gt = vn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (pt = e), (gt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = zn !== null ? { id: Jt, overflow: Zt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = Tt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (pt = e),
              (gt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ks(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Gs(e) {
    if (Re) {
      var t = gt;
      if (t) {
        var r = t;
        if (!nf(e, t)) {
          if (Ks(e)) throw Error(a(418));
          t = vn(r.nextSibling);
          var s = pt;
          t && nf(e, t)
            ? tf(s, r)
            : ((e.flags = (e.flags & -4097) | 2), (Re = !1), (pt = e));
        }
      } else {
        if (Ks(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (Re = !1), (pt = e);
      }
    }
  }
  function rf(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    pt = e;
  }
  function Ta(e) {
    if (e !== pt) return !1;
    if (!Re) return rf(e), (Re = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Bs(e.type, e.memoizedProps))),
      t && (t = gt))
    ) {
      if (Ks(e)) throw (af(), Error(a(418)));
      for (; t; ) tf(e, t), (t = vn(t.nextSibling));
    }
    if ((rf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                gt = vn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        gt = null;
      }
    } else gt = pt ? vn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function af() {
    for (var e = gt; e; ) e = vn(e.nextSibling);
  }
  function yr() {
    (gt = pt = null), (Re = !1);
  }
  function Qs(e) {
    Ct === null ? (Ct = [e]) : Ct.push(e);
  }
  var I0 = S.ReactCurrentBatchConfig;
  function ci(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(a(309));
          var s = r.stateNode;
        }
        if (!s) throw Error(a(147, e));
        var u = s,
          f = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === f
          ? t.ref
          : ((t = function (v) {
              var N = u.refs;
              v === null ? delete N[f] : (N[f] = v);
            }),
            (t._stringRef = f),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!r._owner) throw Error(a(290, e));
    }
    return e;
  }
  function Pa(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function of(e) {
    var t = e._init;
    return t(e._payload);
  }
  function sf(e) {
    function t(M, O) {
      if (e) {
        var z = M.deletions;
        z === null ? ((M.deletions = [O]), (M.flags |= 16)) : z.push(O);
      }
    }
    function r(M, O) {
      if (!e) return null;
      for (; O !== null; ) t(M, O), (O = O.sibling);
      return null;
    }
    function s(M, O) {
      for (M = new Map(); O !== null; )
        O.key !== null ? M.set(O.key, O) : M.set(O.index, O), (O = O.sibling);
      return M;
    }
    function u(M, O) {
      return (M = jn(M, O)), (M.index = 0), (M.sibling = null), M;
    }
    function f(M, O, z) {
      return (
        (M.index = z),
        e
          ? ((z = M.alternate),
            z !== null
              ? ((z = z.index), z < O ? ((M.flags |= 2), O) : z)
              : ((M.flags |= 2), O))
          : ((M.flags |= 1048576), O)
      );
    }
    function v(M) {
      return e && M.alternate === null && (M.flags |= 2), M;
    }
    function N(M, O, z, Q) {
      return O === null || O.tag !== 6
        ? ((O = Wl(z, M.mode, Q)), (O.return = M), O)
        : ((O = u(O, z)), (O.return = M), O);
    }
    function C(M, O, z, Q) {
      var ce = z.type;
      return ce === I
        ? q(M, O, z.props.children, Q, z.key)
        : O !== null &&
          (O.elementType === ce ||
            (typeof ce == "object" &&
              ce !== null &&
              ce.$$typeof === ie &&
              of(ce) === O.type))
        ? ((Q = u(O, z.props)), (Q.ref = ci(M, O, z)), (Q.return = M), Q)
        : ((Q = Ga(z.type, z.key, z.props, null, M.mode, Q)),
          (Q.ref = ci(M, O, z)),
          (Q.return = M),
          Q);
    }
    function U(M, O, z, Q) {
      return O === null ||
        O.tag !== 4 ||
        O.stateNode.containerInfo !== z.containerInfo ||
        O.stateNode.implementation !== z.implementation
        ? ((O = $l(z, M.mode, Q)), (O.return = M), O)
        : ((O = u(O, z.children || [])), (O.return = M), O);
    }
    function q(M, O, z, Q, ce) {
      return O === null || O.tag !== 7
        ? ((O = Xn(z, M.mode, Q, ce)), (O.return = M), O)
        : ((O = u(O, z)), (O.return = M), O);
    }
    function K(M, O, z) {
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return (O = Wl("" + O, M.mode, z)), (O.return = M), O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case E:
            return (
              (z = Ga(O.type, O.key, O.props, null, M.mode, z)),
              (z.ref = ci(M, null, O)),
              (z.return = M),
              z
            );
          case k:
            return (O = $l(O, M.mode, z)), (O.return = M), O;
          case ie:
            var Q = O._init;
            return K(M, Q(O._payload), z);
        }
        if (zr(O) || le(O))
          return (O = Xn(O, M.mode, z, null)), (O.return = M), O;
        Pa(M, O);
      }
      return null;
    }
    function H(M, O, z, Q) {
      var ce = O !== null ? O.key : null;
      if ((typeof z == "string" && z !== "") || typeof z == "number")
        return ce !== null ? null : N(M, O, "" + z, Q);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case E:
            return z.key === ce ? C(M, O, z, Q) : null;
          case k:
            return z.key === ce ? U(M, O, z, Q) : null;
          case ie:
            return (ce = z._init), H(M, O, ce(z._payload), Q);
        }
        if (zr(z) || le(z)) return ce !== null ? null : q(M, O, z, Q, null);
        Pa(M, z);
      }
      return null;
    }
    function re(M, O, z, Q, ce) {
      if ((typeof Q == "string" && Q !== "") || typeof Q == "number")
        return (M = M.get(z) || null), N(O, M, "" + Q, ce);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case E:
            return (
              (M = M.get(Q.key === null ? z : Q.key) || null), C(O, M, Q, ce)
            );
          case k:
            return (
              (M = M.get(Q.key === null ? z : Q.key) || null), U(O, M, Q, ce)
            );
          case ie:
            var fe = Q._init;
            return re(M, O, z, fe(Q._payload), ce);
        }
        if (zr(Q) || le(Q)) return (M = M.get(z) || null), q(O, M, Q, ce, null);
        Pa(O, Q);
      }
      return null;
    }
    function se(M, O, z, Q) {
      for (
        var ce = null, fe = null, me = O, ge = (O = 0), qe = null;
        me !== null && ge < z.length;
        ge++
      ) {
        me.index > ge ? ((qe = me), (me = null)) : (qe = me.sibling);
        var Ee = H(M, me, z[ge], Q);
        if (Ee === null) {
          me === null && (me = qe);
          break;
        }
        e && me && Ee.alternate === null && t(M, me),
          (O = f(Ee, O, ge)),
          fe === null ? (ce = Ee) : (fe.sibling = Ee),
          (fe = Ee),
          (me = qe);
      }
      if (ge === z.length) return r(M, me), Re && Un(M, ge), ce;
      if (me === null) {
        for (; ge < z.length; ge++)
          (me = K(M, z[ge], Q)),
            me !== null &&
              ((O = f(me, O, ge)),
              fe === null ? (ce = me) : (fe.sibling = me),
              (fe = me));
        return Re && Un(M, ge), ce;
      }
      for (me = s(M, me); ge < z.length; ge++)
        (qe = re(me, M, ge, z[ge], Q)),
          qe !== null &&
            (e &&
              qe.alternate !== null &&
              me.delete(qe.key === null ? ge : qe.key),
            (O = f(qe, O, ge)),
            fe === null ? (ce = qe) : (fe.sibling = qe),
            (fe = qe));
      return (
        e &&
          me.forEach(function (Cn) {
            return t(M, Cn);
          }),
        Re && Un(M, ge),
        ce
      );
    }
    function ue(M, O, z, Q) {
      var ce = le(z);
      if (typeof ce != "function") throw Error(a(150));
      if (((z = ce.call(z)), z == null)) throw Error(a(151));
      for (
        var fe = (ce = null), me = O, ge = (O = 0), qe = null, Ee = z.next();
        me !== null && !Ee.done;
        ge++, Ee = z.next()
      ) {
        me.index > ge ? ((qe = me), (me = null)) : (qe = me.sibling);
        var Cn = H(M, me, Ee.value, Q);
        if (Cn === null) {
          me === null && (me = qe);
          break;
        }
        e && me && Cn.alternate === null && t(M, me),
          (O = f(Cn, O, ge)),
          fe === null ? (ce = Cn) : (fe.sibling = Cn),
          (fe = Cn),
          (me = qe);
      }
      if (Ee.done) return r(M, me), Re && Un(M, ge), ce;
      if (me === null) {
        for (; !Ee.done; ge++, Ee = z.next())
          (Ee = K(M, Ee.value, Q)),
            Ee !== null &&
              ((O = f(Ee, O, ge)),
              fe === null ? (ce = Ee) : (fe.sibling = Ee),
              (fe = Ee));
        return Re && Un(M, ge), ce;
      }
      for (me = s(M, me); !Ee.done; ge++, Ee = z.next())
        (Ee = re(me, M, ge, Ee.value, Q)),
          Ee !== null &&
            (e &&
              Ee.alternate !== null &&
              me.delete(Ee.key === null ? ge : Ee.key),
            (O = f(Ee, O, ge)),
            fe === null ? (ce = Ee) : (fe.sibling = Ee),
            (fe = Ee));
      return (
        e &&
          me.forEach(function (dy) {
            return t(M, dy);
          }),
        Re && Un(M, ge),
        ce
      );
    }
    function Ue(M, O, z, Q) {
      if (
        (typeof z == "object" &&
          z !== null &&
          z.type === I &&
          z.key === null &&
          (z = z.props.children),
        typeof z == "object" && z !== null)
      ) {
        switch (z.$$typeof) {
          case E:
            e: {
              for (var ce = z.key, fe = O; fe !== null; ) {
                if (fe.key === ce) {
                  if (((ce = z.type), ce === I)) {
                    if (fe.tag === 7) {
                      r(M, fe.sibling),
                        (O = u(fe, z.props.children)),
                        (O.return = M),
                        (M = O);
                      break e;
                    }
                  } else if (
                    fe.elementType === ce ||
                    (typeof ce == "object" &&
                      ce !== null &&
                      ce.$$typeof === ie &&
                      of(ce) === fe.type)
                  ) {
                    r(M, fe.sibling),
                      (O = u(fe, z.props)),
                      (O.ref = ci(M, fe, z)),
                      (O.return = M),
                      (M = O);
                    break e;
                  }
                  r(M, fe);
                  break;
                } else t(M, fe);
                fe = fe.sibling;
              }
              z.type === I
                ? ((O = Xn(z.props.children, M.mode, Q, z.key)),
                  (O.return = M),
                  (M = O))
                : ((Q = Ga(z.type, z.key, z.props, null, M.mode, Q)),
                  (Q.ref = ci(M, O, z)),
                  (Q.return = M),
                  (M = Q));
            }
            return v(M);
          case k:
            e: {
              for (fe = z.key; O !== null; ) {
                if (O.key === fe)
                  if (
                    O.tag === 4 &&
                    O.stateNode.containerInfo === z.containerInfo &&
                    O.stateNode.implementation === z.implementation
                  ) {
                    r(M, O.sibling),
                      (O = u(O, z.children || [])),
                      (O.return = M),
                      (M = O);
                    break e;
                  } else {
                    r(M, O);
                    break;
                  }
                else t(M, O);
                O = O.sibling;
              }
              (O = $l(z, M.mode, Q)), (O.return = M), (M = O);
            }
            return v(M);
          case ie:
            return (fe = z._init), Ue(M, O, fe(z._payload), Q);
        }
        if (zr(z)) return se(M, O, z, Q);
        if (le(z)) return ue(M, O, z, Q);
        Pa(M, z);
      }
      return (typeof z == "string" && z !== "") || typeof z == "number"
        ? ((z = "" + z),
          O !== null && O.tag === 6
            ? (r(M, O.sibling), (O = u(O, z)), (O.return = M), (M = O))
            : (r(M, O), (O = Wl(z, M.mode, Q)), (O.return = M), (M = O)),
          v(M))
        : r(M, O);
    }
    return Ue;
  }
  var xr = sf(!0),
    lf = sf(!1),
    Na = yn(null),
    ja = null,
    wr = null,
    Js = null;
  function Zs() {
    Js = wr = ja = null;
  }
  function el(e) {
    var t = Na.current;
    Oe(Na), (e._currentValue = t);
  }
  function tl(e, t, r) {
    for (; e !== null; ) {
      var s = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
          : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function br(e, t) {
    (ja = e),
      (Js = wr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (lt = !0), (e.firstContext = null));
  }
  function St(e) {
    var t = e._currentValue;
    if (Js !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
        if (ja === null) throw Error(a(308));
        (wr = e), (ja.dependencies = { lanes: 0, firstContext: e });
      } else wr = wr.next = e;
    return t;
  }
  var Bn = null;
  function nl(e) {
    Bn === null ? (Bn = [e]) : Bn.push(e);
  }
  function uf(e, t, r, s) {
    var u = t.interleaved;
    return (
      u === null ? ((r.next = r), nl(t)) : ((r.next = u.next), (u.next = r)),
      (t.interleaved = r),
      en(e, s)
    );
  }
  function en(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var bn = !1;
  function rl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function cf(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function tn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Sn(e, t, r) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), be & 2)) {
      var u = s.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (s.pending = t),
        en(e, r)
      );
    }
    return (
      (u = s.interleaved),
      u === null ? ((t.next = t), nl(s)) : ((t.next = u.next), (u.next = t)),
      (s.interleaved = t),
      en(e, r)
    );
  }
  function Ca(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var s = t.lanes;
      (s &= e.pendingLanes), (r |= s), (t.lanes = r), vs(e, r);
    }
  }
  function df(e, t) {
    var r = e.updateQueue,
      s = e.alternate;
    if (s !== null && ((s = s.updateQueue), r === s)) {
      var u = null,
        f = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var v = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          f === null ? (u = f = v) : (f = f.next = v), (r = r.next);
        } while (r !== null);
        f === null ? (u = f = t) : (f = f.next = t);
      } else u = f = t;
      (r = {
        baseState: s.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: s.shared,
        effects: s.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function ka(e, t, r, s) {
    var u = e.updateQueue;
    bn = !1;
    var f = u.firstBaseUpdate,
      v = u.lastBaseUpdate,
      N = u.shared.pending;
    if (N !== null) {
      u.shared.pending = null;
      var C = N,
        U = C.next;
      (C.next = null), v === null ? (f = U) : (v.next = U), (v = C);
      var q = e.alternate;
      q !== null &&
        ((q = q.updateQueue),
        (N = q.lastBaseUpdate),
        N !== v &&
          (N === null ? (q.firstBaseUpdate = U) : (N.next = U),
          (q.lastBaseUpdate = C)));
    }
    if (f !== null) {
      var K = u.baseState;
      (v = 0), (q = U = C = null), (N = f);
      do {
        var H = N.lane,
          re = N.eventTime;
        if ((s & H) === H) {
          q !== null &&
            (q = q.next =
              {
                eventTime: re,
                lane: 0,
                tag: N.tag,
                payload: N.payload,
                callback: N.callback,
                next: null,
              });
          e: {
            var se = e,
              ue = N;
            switch (((H = t), (re = r), ue.tag)) {
              case 1:
                if (((se = ue.payload), typeof se == "function")) {
                  K = se.call(re, K, H);
                  break e;
                }
                K = se;
                break e;
              case 3:
                se.flags = (se.flags & -65537) | 128;
              case 0:
                if (
                  ((se = ue.payload),
                  (H = typeof se == "function" ? se.call(re, K, H) : se),
                  H == null)
                )
                  break e;
                K = Z({}, K, H);
                break e;
              case 2:
                bn = !0;
            }
          }
          N.callback !== null &&
            N.lane !== 0 &&
            ((e.flags |= 64),
            (H = u.effects),
            H === null ? (u.effects = [N]) : H.push(N));
        } else
          (re = {
            eventTime: re,
            lane: H,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null,
          }),
            q === null ? ((U = q = re), (C = K)) : (q = q.next = re),
            (v |= H);
        if (((N = N.next), N === null)) {
          if (((N = u.shared.pending), N === null)) break;
          (H = N),
            (N = H.next),
            (H.next = null),
            (u.lastBaseUpdate = H),
            (u.shared.pending = null);
        }
      } while (!0);
      if (
        (q === null && (C = K),
        (u.baseState = C),
        (u.firstBaseUpdate = U),
        (u.lastBaseUpdate = q),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (v |= u.lane), (u = u.next);
        while (u !== t);
      } else f === null && (u.shared.lanes = 0);
      (Vn |= v), (e.lanes = v), (e.memoizedState = K);
    }
  }
  function ff(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var s = e[t],
          u = s.callback;
        if (u !== null) {
          if (((s.callback = null), (s = r), typeof u != "function"))
            throw Error(a(191, u));
          u.call(s);
        }
      }
  }
  var di = {},
    Bt = yn(di),
    fi = yn(di),
    mi = yn(di);
  function Wn(e) {
    if (e === di) throw Error(a(174));
    return e;
  }
  function il(e, t) {
    switch ((Ce(mi, t), Ce(fi, e), Ce(Bt, di), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : as(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = as(t, e));
    }
    Oe(Bt), Ce(Bt, t);
  }
  function Sr() {
    Oe(Bt), Oe(fi), Oe(mi);
  }
  function mf(e) {
    Wn(mi.current);
    var t = Wn(Bt.current),
      r = as(t, e.type);
    t !== r && (Ce(fi, e), Ce(Bt, r));
  }
  function al(e) {
    fi.current === e && (Oe(Bt), Oe(fi));
  }
  var Le = yn(0);
  function Oa(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ol = [];
  function sl() {
    for (var e = 0; e < ol.length; e++)
      ol[e]._workInProgressVersionPrimary = null;
    ol.length = 0;
  }
  var Ia = S.ReactCurrentDispatcher,
    ll = S.ReactCurrentBatchConfig,
    $n = 0,
    Me = null,
    We = null,
    Ve = null,
    Aa = !1,
    hi = !1,
    pi = 0,
    A0 = 0;
  function Je() {
    throw Error(a(321));
  }
  function ul(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!jt(e[r], t[r])) return !1;
    return !0;
  }
  function cl(e, t, r, s, u, f) {
    if (
      (($n = f),
      (Me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ia.current = e === null || e.memoizedState === null ? M0 : F0),
      (e = r(s, u)),
      hi)
    ) {
      f = 0;
      do {
        if (((hi = !1), (pi = 0), 25 <= f)) throw Error(a(301));
        (f += 1),
          (Ve = We = null),
          (t.updateQueue = null),
          (Ia.current = z0),
          (e = r(s, u));
      } while (hi);
    }
    if (
      ((Ia.current = La),
      (t = We !== null && We.next !== null),
      ($n = 0),
      (Ve = We = Me = null),
      (Aa = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function dl() {
    var e = pi !== 0;
    return (pi = 0), e;
  }
  function Wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ve === null ? (Me.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve;
  }
  function _t() {
    if (We === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = We.next;
    var t = Ve === null ? Me.memoizedState : Ve.next;
    if (t !== null) (Ve = t), (We = e);
    else {
      if (e === null) throw Error(a(310));
      (We = e),
        (e = {
          memoizedState: We.memoizedState,
          baseState: We.baseState,
          baseQueue: We.baseQueue,
          queue: We.queue,
          next: null,
        }),
        Ve === null ? (Me.memoizedState = Ve = e) : (Ve = Ve.next = e);
    }
    return Ve;
  }
  function gi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function fl(e) {
    var t = _t(),
      r = t.queue;
    if (r === null) throw Error(a(311));
    r.lastRenderedReducer = e;
    var s = We,
      u = s.baseQueue,
      f = r.pending;
    if (f !== null) {
      if (u !== null) {
        var v = u.next;
        (u.next = f.next), (f.next = v);
      }
      (s.baseQueue = u = f), (r.pending = null);
    }
    if (u !== null) {
      (f = u.next), (s = s.baseState);
      var N = (v = null),
        C = null,
        U = f;
      do {
        var q = U.lane;
        if (($n & q) === q)
          C !== null &&
            (C = C.next =
              {
                lane: 0,
                action: U.action,
                hasEagerState: U.hasEagerState,
                eagerState: U.eagerState,
                next: null,
              }),
            (s = U.hasEagerState ? U.eagerState : e(s, U.action));
        else {
          var K = {
            lane: q,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null,
          };
          C === null ? ((N = C = K), (v = s)) : (C = C.next = K),
            (Me.lanes |= q),
            (Vn |= q);
        }
        U = U.next;
      } while (U !== null && U !== f);
      C === null ? (v = s) : (C.next = N),
        jt(s, t.memoizedState) || (lt = !0),
        (t.memoizedState = s),
        (t.baseState = v),
        (t.baseQueue = C),
        (r.lastRenderedState = s);
    }
    if (((e = r.interleaved), e !== null)) {
      u = e;
      do (f = u.lane), (Me.lanes |= f), (Vn |= f), (u = u.next);
      while (u !== e);
    } else u === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function ml(e) {
    var t = _t(),
      r = t.queue;
    if (r === null) throw Error(a(311));
    r.lastRenderedReducer = e;
    var s = r.dispatch,
      u = r.pending,
      f = t.memoizedState;
    if (u !== null) {
      r.pending = null;
      var v = (u = u.next);
      do (f = e(f, v.action)), (v = v.next);
      while (v !== u);
      jt(f, t.memoizedState) || (lt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (r.lastRenderedState = f);
    }
    return [f, s];
  }
  function hf() {}
  function pf(e, t) {
    var r = Me,
      s = _t(),
      u = t(),
      f = !jt(s.memoizedState, u);
    if (
      (f && ((s.memoizedState = u), (lt = !0)),
      (s = s.queue),
      hl(yf.bind(null, r, s, e), [e]),
      s.getSnapshot !== t || f || (Ve !== null && Ve.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        vi(9, vf.bind(null, r, s, u, t), void 0, null),
        He === null)
      )
        throw Error(a(349));
      $n & 30 || gf(r, t, u);
    }
    return u;
  }
  function gf(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Me.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function vf(e, t, r, s) {
    (t.value = r), (t.getSnapshot = s), xf(t) && wf(e);
  }
  function yf(e, t, r) {
    return r(function () {
      xf(t) && wf(e);
    });
  }
  function xf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !jt(e, r);
    } catch {
      return !0;
    }
  }
  function wf(e) {
    var t = en(e, 1);
    t !== null && At(t, e, 1, -1);
  }
  function bf(e) {
    var t = Wt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = L0.bind(null, Me, e)),
      [t.memoizedState, e]
    );
  }
  function vi(e, t, r, s) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
      (t = Me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Me.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
      e
    );
  }
  function Sf() {
    return _t().memoizedState;
  }
  function Ra(e, t, r, s) {
    var u = Wt();
    (Me.flags |= e),
      (u.memoizedState = vi(1 | t, r, void 0, s === void 0 ? null : s));
  }
  function Da(e, t, r, s) {
    var u = _t();
    s = s === void 0 ? null : s;
    var f = void 0;
    if (We !== null) {
      var v = We.memoizedState;
      if (((f = v.destroy), s !== null && ul(s, v.deps))) {
        u.memoizedState = vi(t, r, f, s);
        return;
      }
    }
    (Me.flags |= e), (u.memoizedState = vi(1 | t, r, f, s));
  }
  function _f(e, t) {
    return Ra(8390656, 8, e, t);
  }
  function hl(e, t) {
    return Da(2048, 8, e, t);
  }
  function Ef(e, t) {
    return Da(4, 2, e, t);
  }
  function Tf(e, t) {
    return Da(4, 4, e, t);
  }
  function Pf(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Nf(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), Da(4, 4, Pf.bind(null, t, e), r)
    );
  }
  function pl() {}
  function jf(e, t) {
    var r = _t();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && ul(t, s[1])
      ? s[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function Cf(e, t) {
    var r = _t();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && ul(t, s[1])
      ? s[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function kf(e, t, r) {
    return $n & 21
      ? (jt(r, t) ||
          ((r = ad()), (Me.lanes |= r), (Vn |= r), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (lt = !0)), (e.memoizedState = r));
  }
  function R0(e, t) {
    var r = Pe;
    (Pe = r !== 0 && 4 > r ? r : 4), e(!0);
    var s = ll.transition;
    ll.transition = {};
    try {
      e(!1), t();
    } finally {
      (Pe = r), (ll.transition = s);
    }
  }
  function Of() {
    return _t().memoizedState;
  }
  function D0(e, t, r) {
    var s = Pn(e);
    if (
      ((r = {
        lane: s,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      If(e))
    )
      Af(t, r);
    else if (((r = uf(e, t, r, s)), r !== null)) {
      var u = at();
      At(r, e, s, u), Rf(r, t, s);
    }
  }
  function L0(e, t, r) {
    var s = Pn(e),
      u = {
        lane: s,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (If(e)) Af(t, u);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var v = t.lastRenderedState,
            N = f(v, r);
          if (((u.hasEagerState = !0), (u.eagerState = N), jt(N, v))) {
            var C = t.interleaved;
            C === null
              ? ((u.next = u), nl(t))
              : ((u.next = C.next), (C.next = u)),
              (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (r = uf(e, t, u, s)),
        r !== null && ((u = at()), At(r, e, s, u), Rf(r, t, s));
    }
  }
  function If(e) {
    var t = e.alternate;
    return e === Me || (t !== null && t === Me);
  }
  function Af(e, t) {
    hi = Aa = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function Rf(e, t, r) {
    if (r & 4194240) {
      var s = t.lanes;
      (s &= e.pendingLanes), (r |= s), (t.lanes = r), vs(e, r);
    }
  }
  var La = {
      readContext: St,
      useCallback: Je,
      useContext: Je,
      useEffect: Je,
      useImperativeHandle: Je,
      useInsertionEffect: Je,
      useLayoutEffect: Je,
      useMemo: Je,
      useReducer: Je,
      useRef: Je,
      useState: Je,
      useDebugValue: Je,
      useDeferredValue: Je,
      useTransition: Je,
      useMutableSource: Je,
      useSyncExternalStore: Je,
      useId: Je,
      unstable_isNewReconciler: !1,
    },
    M0 = {
      readContext: St,
      useCallback: function (e, t) {
        return (Wt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: St,
      useEffect: _f,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Ra(4194308, 4, Pf.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ra(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ra(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Wt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var s = Wt();
        return (
          (t = r !== void 0 ? r(t) : t),
          (s.memoizedState = s.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (s.queue = e),
          (e = e.dispatch = D0.bind(null, Me, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Wt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: bf,
      useDebugValue: pl,
      useDeferredValue: function (e) {
        return (Wt().memoizedState = e);
      },
      useTransition: function () {
        var e = bf(!1),
          t = e[0];
        return (e = R0.bind(null, e[1])), (Wt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var s = Me,
          u = Wt();
        if (Re) {
          if (r === void 0) throw Error(a(407));
          r = r();
        } else {
          if (((r = t()), He === null)) throw Error(a(349));
          $n & 30 || gf(s, t, r);
        }
        u.memoizedState = r;
        var f = { value: r, getSnapshot: t };
        return (
          (u.queue = f),
          _f(yf.bind(null, s, f, e), [e]),
          (s.flags |= 2048),
          vi(9, vf.bind(null, s, f, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Wt(),
          t = He.identifierPrefix;
        if (Re) {
          var r = Zt,
            s = Jt;
          (r = (s & ~(1 << (32 - Nt(s) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = pi++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = A0++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    F0 = {
      readContext: St,
      useCallback: jf,
      useContext: St,
      useEffect: hl,
      useImperativeHandle: Nf,
      useInsertionEffect: Ef,
      useLayoutEffect: Tf,
      useMemo: Cf,
      useReducer: fl,
      useRef: Sf,
      useState: function () {
        return fl(gi);
      },
      useDebugValue: pl,
      useDeferredValue: function (e) {
        var t = _t();
        return kf(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = fl(gi)[0],
          t = _t().memoizedState;
        return [e, t];
      },
      useMutableSource: hf,
      useSyncExternalStore: pf,
      useId: Of,
      unstable_isNewReconciler: !1,
    },
    z0 = {
      readContext: St,
      useCallback: jf,
      useContext: St,
      useEffect: hl,
      useImperativeHandle: Nf,
      useInsertionEffect: Ef,
      useLayoutEffect: Tf,
      useMemo: Cf,
      useReducer: ml,
      useRef: Sf,
      useState: function () {
        return ml(gi);
      },
      useDebugValue: pl,
      useDeferredValue: function (e) {
        var t = _t();
        return We === null ? (t.memoizedState = e) : kf(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = ml(gi)[0],
          t = _t().memoizedState;
        return [e, t];
      },
      useMutableSource: hf,
      useSyncExternalStore: pf,
      useId: Of,
      unstable_isNewReconciler: !1,
    };
  function kt(e, t) {
    if (e && e.defaultProps) {
      (t = Z({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function gl(e, t, r, s) {
    (t = e.memoizedState),
      (r = r(s, t)),
      (r = r == null ? t : Z({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Ma = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Ln(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var s = at(),
        u = Pn(e),
        f = tn(s, u);
      (f.payload = t),
        r != null && (f.callback = r),
        (t = Sn(e, f, u)),
        t !== null && (At(t, e, u, s), Ca(t, e, u));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var s = at(),
        u = Pn(e),
        f = tn(s, u);
      (f.tag = 1),
        (f.payload = t),
        r != null && (f.callback = r),
        (t = Sn(e, f, u)),
        t !== null && (At(t, e, u, s), Ca(t, e, u));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = at(),
        s = Pn(e),
        u = tn(r, s);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = Sn(e, u, s)),
        t !== null && (At(t, e, s, r), Ca(t, e, s));
    },
  };
  function Df(e, t, r, s, u, f, v) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(s, f, v)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ri(r, s) || !ri(u, f)
        : !0
    );
  }
  function Lf(e, t, r) {
    var s = !1,
      u = xn,
      f = t.contextType;
    return (
      typeof f == "object" && f !== null
        ? (f = St(f))
        : ((u = st(t) ? Fn : Qe.current),
          (s = t.contextTypes),
          (f = (s = s != null) ? pr(e, u) : xn)),
      (t = new t(r, f)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ma),
      (e.stateNode = t),
      (t._reactInternals = e),
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      t
    );
  }
  function Mf(e, t, r, s) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, s),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, s),
      t.state !== e && Ma.enqueueReplaceState(t, t.state, null);
  }
  function vl(e, t, r, s) {
    var u = e.stateNode;
    (u.props = r), (u.state = e.memoizedState), (u.refs = {}), rl(e);
    var f = t.contextType;
    typeof f == "object" && f !== null
      ? (u.context = St(f))
      : ((f = st(t) ? Fn : Qe.current), (u.context = pr(e, f))),
      (u.state = e.memoizedState),
      (f = t.getDerivedStateFromProps),
      typeof f == "function" && (gl(e, t, f, r), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        t !== u.state && Ma.enqueueReplaceState(u, u.state, null),
        ka(e, r, u, s),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function _r(e, t) {
    try {
      var r = "",
        s = t;
      do (r += Se(s)), (s = s.return);
      while (s);
      var u = r;
    } catch (f) {
      u =
        `
Error generating stack: ` +
        f.message +
        `
` +
        f.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function yl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function xl(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var U0 = typeof WeakMap == "function" ? WeakMap : Map;
  function Ff(e, t, r) {
    (r = tn(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var s = t.value;
    return (
      (r.callback = function () {
        Va || ((Va = !0), (Rl = s)), xl(e, t);
      }),
      r
    );
  }
  function zf(e, t, r) {
    (r = tn(-1, r)), (r.tag = 3);
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = t.value;
      (r.payload = function () {
        return s(u);
      }),
        (r.callback = function () {
          xl(e, t);
        });
    }
    var f = e.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == "function" &&
        (r.callback = function () {
          xl(e, t),
            typeof s != "function" &&
              (En === null ? (En = new Set([this])) : En.add(this));
          var v = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: v !== null ? v : "",
          });
        }),
      r
    );
  }
  function Uf(e, t, r) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new U0();
      var u = new Set();
      s.set(t, u);
    } else (u = s.get(t)), u === void 0 && ((u = new Set()), s.set(t, u));
    u.has(r) || (u.add(r), (e = ey.bind(null, e, t, r)), t.then(e, e));
  }
  function Bf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Wf(e, t, r, s, u) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = u), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = tn(-1, 1)), (t.tag = 2), Sn(r, t, 1))),
            (r.lanes |= 1)),
        e);
  }
  var B0 = S.ReactCurrentOwner,
    lt = !1;
  function it(e, t, r, s) {
    t.child = e === null ? lf(t, null, r, s) : xr(t, e.child, r, s);
  }
  function $f(e, t, r, s, u) {
    r = r.render;
    var f = t.ref;
    return (
      br(t, u),
      (s = cl(e, t, r, s, f, u)),
      (r = dl()),
      e !== null && !lt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          nn(e, t, u))
        : (Re && r && Ys(t), (t.flags |= 1), it(e, t, s, u), t.child)
    );
  }
  function Vf(e, t, r, s, u) {
    if (e === null) {
      var f = r.type;
      return typeof f == "function" &&
        !Bl(f) &&
        f.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = f), Hf(e, t, f, s, u))
        : ((e = Ga(r.type, null, s, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((f = e.child), !(e.lanes & u))) {
      var v = f.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : ri), r(v, s) && e.ref === t.ref)
      )
        return nn(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = jn(f, s)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Hf(e, t, r, s, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (ri(f, s) && e.ref === t.ref)
        if (((lt = !1), (t.pendingProps = s = f), (e.lanes & u) !== 0))
          e.flags & 131072 && (lt = !0);
        else return (t.lanes = e.lanes), nn(e, t, u);
    }
    return wl(e, t, r, s, u);
  }
  function qf(e, t, r) {
    var s = t.pendingProps,
      u = s.children,
      f = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ce(Tr, vt),
          (vt |= r);
      else {
        if (!(r & 1073741824))
          return (
            (e = f !== null ? f.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ce(Tr, vt),
            (vt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (s = f !== null ? f.baseLanes : r),
          Ce(Tr, vt),
          (vt |= s);
      }
    else
      f !== null ? ((s = f.baseLanes | r), (t.memoizedState = null)) : (s = r),
        Ce(Tr, vt),
        (vt |= s);
    return it(e, t, u, r), t.child;
  }
  function Yf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function wl(e, t, r, s, u) {
    var f = st(r) ? Fn : Qe.current;
    return (
      (f = pr(t, f)),
      br(t, u),
      (r = cl(e, t, r, s, f, u)),
      (s = dl()),
      e !== null && !lt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          nn(e, t, u))
        : (Re && s && Ys(t), (t.flags |= 1), it(e, t, r, u), t.child)
    );
  }
  function Xf(e, t, r, s, u) {
    if (st(r)) {
      var f = !0;
      ba(t);
    } else f = !1;
    if ((br(t, u), t.stateNode === null))
      za(e, t), Lf(t, r, s), vl(t, r, s, u), (s = !0);
    else if (e === null) {
      var v = t.stateNode,
        N = t.memoizedProps;
      v.props = N;
      var C = v.context,
        U = r.contextType;
      typeof U == "object" && U !== null
        ? (U = St(U))
        : ((U = st(r) ? Fn : Qe.current), (U = pr(t, U)));
      var q = r.getDerivedStateFromProps,
        K =
          typeof q == "function" ||
          typeof v.getSnapshotBeforeUpdate == "function";
      K ||
        (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
          typeof v.componentWillReceiveProps != "function") ||
        ((N !== s || C !== U) && Mf(t, v, s, U)),
        (bn = !1);
      var H = t.memoizedState;
      (v.state = H),
        ka(t, s, v, u),
        (C = t.memoizedState),
        N !== s || H !== C || ot.current || bn
          ? (typeof q == "function" && (gl(t, r, q, s), (C = t.memoizedState)),
            (N = bn || Df(t, r, N, s, H, C, U))
              ? (K ||
                  (typeof v.UNSAFE_componentWillMount != "function" &&
                    typeof v.componentWillMount != "function") ||
                  (typeof v.componentWillMount == "function" &&
                    v.componentWillMount(),
                  typeof v.UNSAFE_componentWillMount == "function" &&
                    v.UNSAFE_componentWillMount()),
                typeof v.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof v.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = C)),
            (v.props = s),
            (v.state = C),
            (v.context = U),
            (s = N))
          : (typeof v.componentDidMount == "function" && (t.flags |= 4194308),
            (s = !1));
    } else {
      (v = t.stateNode),
        cf(e, t),
        (N = t.memoizedProps),
        (U = t.type === t.elementType ? N : kt(t.type, N)),
        (v.props = U),
        (K = t.pendingProps),
        (H = v.context),
        (C = r.contextType),
        typeof C == "object" && C !== null
          ? (C = St(C))
          : ((C = st(r) ? Fn : Qe.current), (C = pr(t, C)));
      var re = r.getDerivedStateFromProps;
      (q =
        typeof re == "function" ||
        typeof v.getSnapshotBeforeUpdate == "function") ||
        (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
          typeof v.componentWillReceiveProps != "function") ||
        ((N !== K || H !== C) && Mf(t, v, s, C)),
        (bn = !1),
        (H = t.memoizedState),
        (v.state = H),
        ka(t, s, v, u);
      var se = t.memoizedState;
      N !== K || H !== se || ot.current || bn
        ? (typeof re == "function" && (gl(t, r, re, s), (se = t.memoizedState)),
          (U = bn || Df(t, r, U, s, H, se, C) || !1)
            ? (q ||
                (typeof v.UNSAFE_componentWillUpdate != "function" &&
                  typeof v.componentWillUpdate != "function") ||
                (typeof v.componentWillUpdate == "function" &&
                  v.componentWillUpdate(s, se, C),
                typeof v.UNSAFE_componentWillUpdate == "function" &&
                  v.UNSAFE_componentWillUpdate(s, se, C)),
              typeof v.componentDidUpdate == "function" && (t.flags |= 4),
              typeof v.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof v.componentDidUpdate != "function" ||
                (N === e.memoizedProps && H === e.memoizedState) ||
                (t.flags |= 4),
              typeof v.getSnapshotBeforeUpdate != "function" ||
                (N === e.memoizedProps && H === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = se)),
          (v.props = s),
          (v.state = se),
          (v.context = C),
          (s = U))
        : (typeof v.componentDidUpdate != "function" ||
            (N === e.memoizedProps && H === e.memoizedState) ||
            (t.flags |= 4),
          typeof v.getSnapshotBeforeUpdate != "function" ||
            (N === e.memoizedProps && H === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return bl(e, t, r, s, f, u);
  }
  function bl(e, t, r, s, u, f) {
    Yf(e, t);
    var v = (t.flags & 128) !== 0;
    if (!s && !v) return u && Jd(t, r, !1), nn(e, t, f);
    (s = t.stateNode), (B0.current = t);
    var N =
      v && typeof r.getDerivedStateFromError != "function" ? null : s.render();
    return (
      (t.flags |= 1),
      e !== null && v
        ? ((t.child = xr(t, e.child, null, f)), (t.child = xr(t, null, N, f)))
        : it(e, t, N, f),
      (t.memoizedState = s.state),
      u && Jd(t, r, !0),
      t.child
    );
  }
  function Kf(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Gd(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Gd(e, t.context, !1),
      il(e, t.containerInfo);
  }
  function Gf(e, t, r, s, u) {
    return yr(), Qs(u), (t.flags |= 256), it(e, t, r, s), t.child;
  }
  var Sl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function _l(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Qf(e, t, r) {
    var s = t.pendingProps,
      u = Le.current,
      f = !1,
      v = (t.flags & 128) !== 0,
      N;
    if (
      ((N = v) ||
        (N = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      N
        ? ((f = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      Ce(Le, u & 1),
      e === null)
    )
      return (
        Gs(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((v = s.children),
            (e = s.fallback),
            f
              ? ((s = t.mode),
                (f = t.child),
                (v = { mode: "hidden", children: v }),
                !(s & 1) && f !== null
                  ? ((f.childLanes = 0), (f.pendingProps = v))
                  : (f = Qa(v, s, 0, null)),
                (e = Xn(e, s, r, null)),
                (f.return = t),
                (e.return = t),
                (f.sibling = e),
                (t.child = f),
                (t.child.memoizedState = _l(r)),
                (t.memoizedState = Sl),
                e)
              : El(t, v))
      );
    if (((u = e.memoizedState), u !== null && ((N = u.dehydrated), N !== null)))
      return W0(e, t, v, s, N, u, r);
    if (f) {
      (f = s.fallback), (v = t.mode), (u = e.child), (N = u.sibling);
      var C = { mode: "hidden", children: s.children };
      return (
        !(v & 1) && t.child !== u
          ? ((s = t.child),
            (s.childLanes = 0),
            (s.pendingProps = C),
            (t.deletions = null))
          : ((s = jn(u, C)), (s.subtreeFlags = u.subtreeFlags & 14680064)),
        N !== null ? (f = jn(N, f)) : ((f = Xn(f, v, r, null)), (f.flags |= 2)),
        (f.return = t),
        (s.return = t),
        (s.sibling = f),
        (t.child = s),
        (s = f),
        (f = t.child),
        (v = e.child.memoizedState),
        (v =
          v === null
            ? _l(r)
            : {
                baseLanes: v.baseLanes | r,
                cachePool: null,
                transitions: v.transitions,
              }),
        (f.memoizedState = v),
        (f.childLanes = e.childLanes & ~r),
        (t.memoizedState = Sl),
        s
      );
    }
    return (
      (f = e.child),
      (e = f.sibling),
      (s = jn(f, { mode: "visible", children: s.children })),
      !(t.mode & 1) && (s.lanes = r),
      (s.return = t),
      (s.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = s),
      (t.memoizedState = null),
      s
    );
  }
  function El(e, t) {
    return (
      (t = Qa({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Fa(e, t, r, s) {
    return (
      s !== null && Qs(s),
      xr(t, e.child, null, r),
      (e = El(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function W0(e, t, r, s, u, f, v) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (s = yl(Error(a(422)))), Fa(e, t, v, s))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((f = s.fallback),
          (u = t.mode),
          (s = Qa({ mode: "visible", children: s.children }, u, 0, null)),
          (f = Xn(f, u, v, null)),
          (f.flags |= 2),
          (s.return = t),
          (f.return = t),
          (s.sibling = f),
          (t.child = s),
          t.mode & 1 && xr(t, e.child, null, v),
          (t.child.memoizedState = _l(v)),
          (t.memoizedState = Sl),
          f);
    if (!(t.mode & 1)) return Fa(e, t, v, null);
    if (u.data === "$!") {
      if (((s = u.nextSibling && u.nextSibling.dataset), s)) var N = s.dgst;
      return (
        (s = N), (f = Error(a(419))), (s = yl(f, s, void 0)), Fa(e, t, v, s)
      );
    }
    if (((N = (v & e.childLanes) !== 0), lt || N)) {
      if (((s = He), s !== null)) {
        switch (v & -v) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = u & (s.suspendedLanes | v) ? 0 : u),
          u !== 0 &&
            u !== f.retryLane &&
            ((f.retryLane = u), en(e, u), At(s, e, u, -1));
      }
      return Ul(), (s = yl(Error(a(421)))), Fa(e, t, v, s);
    }
    return u.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = ty.bind(null, e)),
        (u._reactRetry = t),
        null)
      : ((e = f.treeContext),
        (gt = vn(u.nextSibling)),
        (pt = t),
        (Re = !0),
        (Ct = null),
        e !== null &&
          ((wt[bt++] = Jt),
          (wt[bt++] = Zt),
          (wt[bt++] = zn),
          (Jt = e.id),
          (Zt = e.overflow),
          (zn = t)),
        (t = El(t, s.children)),
        (t.flags |= 4096),
        t);
  }
  function Jf(e, t, r) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), tl(e.return, t, r);
  }
  function Tl(e, t, r, s, u) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: r,
          tailMode: u,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = s),
        (f.tail = r),
        (f.tailMode = u));
  }
  function Zf(e, t, r) {
    var s = t.pendingProps,
      u = s.revealOrder,
      f = s.tail;
    if ((it(e, t, s.children, r), (s = Le.current), s & 2))
      (s = (s & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Jf(e, r, t);
          else if (e.tag === 19) Jf(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      s &= 1;
    }
    if ((Ce(Le, s), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (r = t.child, u = null; r !== null; )
            (e = r.alternate),
              e !== null && Oa(e) === null && (u = r),
              (r = r.sibling);
          (r = u),
            r === null
              ? ((u = t.child), (t.child = null))
              : ((u = r.sibling), (r.sibling = null)),
            Tl(t, !1, u, r, f);
          break;
        case "backwards":
          for (r = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && Oa(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = r), (r = u), (u = e);
          }
          Tl(t, !0, r, null, f);
          break;
        case "together":
          Tl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function za(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function nn(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Vn |= t.lanes),
      !(r & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, r = jn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = jn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function $0(e, t, r) {
    switch (t.tag) {
      case 3:
        Kf(t), yr();
        break;
      case 5:
        mf(t);
        break;
      case 1:
        st(t.type) && ba(t);
        break;
      case 4:
        il(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context,
          u = t.memoizedProps.value;
        Ce(Na, s._currentValue), (s._currentValue = u);
        break;
      case 13:
        if (((s = t.memoizedState), s !== null))
          return s.dehydrated !== null
            ? (Ce(Le, Le.current & 1), (t.flags |= 128), null)
            : r & t.child.childLanes
            ? Qf(e, t, r)
            : (Ce(Le, Le.current & 1),
              (e = nn(e, t, r)),
              e !== null ? e.sibling : null);
        Ce(Le, Le.current & 1);
        break;
      case 19:
        if (((s = (r & t.childLanes) !== 0), e.flags & 128)) {
          if (s) return Zf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ce(Le, Le.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), qf(e, t, r);
    }
    return nn(e, t, r);
  }
  var em, Pl, tm, nm;
  (em = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (Pl = function () {}),
    (tm = function (e, t, r, s) {
      var u = e.memoizedProps;
      if (u !== s) {
        (e = t.stateNode), Wn(Bt.current);
        var f = null;
        switch (r) {
          case "input":
            (u = ts(e, u)), (s = ts(e, s)), (f = []);
            break;
          case "select":
            (u = Z({}, u, { value: void 0 })),
              (s = Z({}, s, { value: void 0 })),
              (f = []);
            break;
          case "textarea":
            (u = is(e, u)), (s = is(e, s)), (f = []);
            break;
          default:
            typeof u.onClick != "function" &&
              typeof s.onClick == "function" &&
              (e.onclick = ya);
        }
        os(r, s);
        var v;
        r = null;
        for (U in u)
          if (!s.hasOwnProperty(U) && u.hasOwnProperty(U) && u[U] != null)
            if (U === "style") {
              var N = u[U];
              for (v in N) N.hasOwnProperty(v) && (r || (r = {}), (r[v] = ""));
            } else
              U !== "dangerouslySetInnerHTML" &&
                U !== "children" &&
                U !== "suppressContentEditableWarning" &&
                U !== "suppressHydrationWarning" &&
                U !== "autoFocus" &&
                (l.hasOwnProperty(U)
                  ? f || (f = [])
                  : (f = f || []).push(U, null));
        for (U in s) {
          var C = s[U];
          if (
            ((N = u != null ? u[U] : void 0),
            s.hasOwnProperty(U) && C !== N && (C != null || N != null))
          )
            if (U === "style")
              if (N) {
                for (v in N)
                  !N.hasOwnProperty(v) ||
                    (C && C.hasOwnProperty(v)) ||
                    (r || (r = {}), (r[v] = ""));
                for (v in C)
                  C.hasOwnProperty(v) &&
                    N[v] !== C[v] &&
                    (r || (r = {}), (r[v] = C[v]));
              } else r || (f || (f = []), f.push(U, r)), (r = C);
            else
              U === "dangerouslySetInnerHTML"
                ? ((C = C ? C.__html : void 0),
                  (N = N ? N.__html : void 0),
                  C != null && N !== C && (f = f || []).push(U, C))
                : U === "children"
                ? (typeof C != "string" && typeof C != "number") ||
                  (f = f || []).push(U, "" + C)
                : U !== "suppressContentEditableWarning" &&
                  U !== "suppressHydrationWarning" &&
                  (l.hasOwnProperty(U)
                    ? (C != null && U === "onScroll" && ke("scroll", e),
                      f || N === C || (f = []))
                    : (f = f || []).push(U, C));
        }
        r && (f = f || []).push("style", r);
        var U = f;
        (t.updateQueue = U) && (t.flags |= 4);
      }
    }),
    (nm = function (e, t, r, s) {
      r !== s && (t.flags |= 4);
    });
  function yi(e, t) {
    if (!Re)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), (r = r.sibling);
          s === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      s = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (s |= u.subtreeFlags & 14680064),
          (s |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (s |= u.subtreeFlags),
          (s |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= s), (e.childLanes = r), t;
  }
  function V0(e, t, r) {
    var s = t.pendingProps;
    switch ((Xs(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ze(t), null;
      case 1:
        return st(t.type) && wa(), Ze(t), null;
      case 3:
        return (
          (s = t.stateNode),
          Sr(),
          Oe(ot),
          Oe(Qe),
          sl(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ta(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Ct !== null && (Ml(Ct), (Ct = null)))),
          Pl(e, t),
          Ze(t),
          null
        );
      case 5:
        al(t);
        var u = Wn(mi.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          tm(e, t, r, s, u),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(a(166));
            return Ze(t), null;
          }
          if (((e = Wn(Bt.current)), Ta(t))) {
            (s = t.stateNode), (r = t.type);
            var f = t.memoizedProps;
            switch (((s[Ut] = t), (s[li] = f), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                ke("cancel", s), ke("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", s);
                break;
              case "video":
              case "audio":
                for (u = 0; u < ai.length; u++) ke(ai[u], s);
                break;
              case "source":
                ke("error", s);
                break;
              case "img":
              case "image":
              case "link":
                ke("error", s), ke("load", s);
                break;
              case "details":
                ke("toggle", s);
                break;
              case "input":
                Dc(s, f), ke("invalid", s);
                break;
              case "select":
                (s._wrapperState = { wasMultiple: !!f.multiple }),
                  ke("invalid", s);
                break;
              case "textarea":
                Fc(s, f), ke("invalid", s);
            }
            os(r, f), (u = null);
            for (var v in f)
              if (f.hasOwnProperty(v)) {
                var N = f[v];
                v === "children"
                  ? typeof N == "string"
                    ? s.textContent !== N &&
                      (f.suppressHydrationWarning !== !0 &&
                        va(s.textContent, N, e),
                      (u = ["children", N]))
                    : typeof N == "number" &&
                      s.textContent !== "" + N &&
                      (f.suppressHydrationWarning !== !0 &&
                        va(s.textContent, N, e),
                      (u = ["children", "" + N]))
                  : l.hasOwnProperty(v) &&
                    N != null &&
                    v === "onScroll" &&
                    ke("scroll", s);
              }
            switch (r) {
              case "input":
                Xi(s), Mc(s, f, !0);
                break;
              case "textarea":
                Xi(s), Uc(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick == "function" && (s.onclick = ya);
            }
            (s = u), (t.updateQueue = s), s !== null && (t.flags |= 4);
          } else {
            (v = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Bc(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = v.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof s.is == "string"
                  ? (e = v.createElement(r, { is: s.is }))
                  : ((e = v.createElement(r)),
                    r === "select" &&
                      ((v = e),
                      s.multiple
                        ? (v.multiple = !0)
                        : s.size && (v.size = s.size)))
                : (e = v.createElementNS(e, r)),
              (e[Ut] = t),
              (e[li] = s),
              em(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((v = ss(r, s)), r)) {
                case "dialog":
                  ke("cancel", e), ke("close", e), (u = s);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ke("load", e), (u = s);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < ai.length; u++) ke(ai[u], e);
                  u = s;
                  break;
                case "source":
                  ke("error", e), (u = s);
                  break;
                case "img":
                case "image":
                case "link":
                  ke("error", e), ke("load", e), (u = s);
                  break;
                case "details":
                  ke("toggle", e), (u = s);
                  break;
                case "input":
                  Dc(e, s), (u = ts(e, s)), ke("invalid", e);
                  break;
                case "option":
                  u = s;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!s.multiple }),
                    (u = Z({}, s, { value: void 0 })),
                    ke("invalid", e);
                  break;
                case "textarea":
                  Fc(e, s), (u = is(e, s)), ke("invalid", e);
                  break;
                default:
                  u = s;
              }
              os(r, u), (N = u);
              for (f in N)
                if (N.hasOwnProperty(f)) {
                  var C = N[f];
                  f === "style"
                    ? Vc(e, C)
                    : f === "dangerouslySetInnerHTML"
                    ? ((C = C ? C.__html : void 0), C != null && Wc(e, C))
                    : f === "children"
                    ? typeof C == "string"
                      ? (r !== "textarea" || C !== "") && Ur(e, C)
                      : typeof C == "number" && Ur(e, "" + C)
                    : f !== "suppressContentEditableWarning" &&
                      f !== "suppressHydrationWarning" &&
                      f !== "autoFocus" &&
                      (l.hasOwnProperty(f)
                        ? C != null && f === "onScroll" && ke("scroll", e)
                        : C != null && x(e, f, C, v));
                }
              switch (r) {
                case "input":
                  Xi(e), Mc(e, s, !1);
                  break;
                case "textarea":
                  Xi(e), Uc(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + Te(s.value));
                  break;
                case "select":
                  (e.multiple = !!s.multiple),
                    (f = s.value),
                    f != null
                      ? rr(e, !!s.multiple, f, !1)
                      : s.defaultValue != null &&
                        rr(e, !!s.multiple, s.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = ya);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ze(t), null;
      case 6:
        if (e && t.stateNode != null) nm(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(a(166));
          if (((r = Wn(mi.current)), Wn(Bt.current), Ta(t))) {
            if (
              ((s = t.stateNode),
              (r = t.memoizedProps),
              (s[Ut] = t),
              (f = s.nodeValue !== r) && ((e = pt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  va(s.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    va(s.nodeValue, r, (e.mode & 1) !== 0);
              }
            f && (t.flags |= 4);
          } else
            (s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s)),
              (s[Ut] = t),
              (t.stateNode = s);
        }
        return Ze(t), null;
      case 13:
        if (
          (Oe(Le),
          (s = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Re && gt !== null && t.mode & 1 && !(t.flags & 128))
            af(), yr(), (t.flags |= 98560), (f = !1);
          else if (((f = Ta(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(a(318));
              if (
                ((f = t.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(a(317));
              f[Ut] = t;
            } else
              yr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ze(t), (f = !1);
          } else Ct !== null && (Ml(Ct), (Ct = null)), (f = !0);
          if (!f) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = r), t)
          : ((s = s !== null),
            s !== (e !== null && e.memoizedState !== null) &&
              s &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Le.current & 1 ? $e === 0 && ($e = 3) : Ul())),
            t.updateQueue !== null && (t.flags |= 4),
            Ze(t),
            null);
      case 4:
        return (
          Sr(),
          Pl(e, t),
          e === null && oi(t.stateNode.containerInfo),
          Ze(t),
          null
        );
      case 10:
        return el(t.type._context), Ze(t), null;
      case 17:
        return st(t.type) && wa(), Ze(t), null;
      case 19:
        if ((Oe(Le), (f = t.memoizedState), f === null)) return Ze(t), null;
        if (((s = (t.flags & 128) !== 0), (v = f.rendering), v === null))
          if (s) yi(f, !1);
          else {
            if ($e !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((v = Oa(e)), v !== null)) {
                  for (
                    t.flags |= 128,
                      yi(f, !1),
                      s = v.updateQueue,
                      s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      s = r,
                      r = t.child;
                    r !== null;

                  )
                    (f = r),
                      (e = s),
                      (f.flags &= 14680066),
                      (v = f.alternate),
                      v === null
                        ? ((f.childLanes = 0),
                          (f.lanes = e),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = v.childLanes),
                          (f.lanes = v.lanes),
                          (f.child = v.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = v.memoizedProps),
                          (f.memoizedState = v.memoizedState),
                          (f.updateQueue = v.updateQueue),
                          (f.type = v.type),
                          (e = v.dependencies),
                          (f.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return Ce(Le, (Le.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            f.tail !== null &&
              ze() > Pr &&
              ((t.flags |= 128), (s = !0), yi(f, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = Oa(v)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                yi(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !v.alternate &&
                  !Re)
              )
                return Ze(t), null;
            } else
              2 * ze() - f.renderingStartTime > Pr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (s = !0), yi(f, !1), (t.lanes = 4194304));
          f.isBackwards
            ? ((v.sibling = t.child), (t.child = v))
            : ((r = f.last),
              r !== null ? (r.sibling = v) : (t.child = v),
              (f.last = v));
        }
        return f.tail !== null
          ? ((t = f.tail),
            (f.rendering = t),
            (f.tail = t.sibling),
            (f.renderingStartTime = ze()),
            (t.sibling = null),
            (r = Le.current),
            Ce(Le, s ? (r & 1) | 2 : r & 1),
            t)
          : (Ze(t), null);
      case 22:
      case 23:
        return (
          zl(),
          (s = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
          s && t.mode & 1
            ? vt & 1073741824 &&
              (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ze(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function H0(e, t) {
    switch ((Xs(t), t.tag)) {
      case 1:
        return (
          st(t.type) && wa(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Sr(),
          Oe(ot),
          Oe(Qe),
          sl(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return al(t), null;
      case 13:
        if (
          (Oe(Le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          yr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Oe(Le), null;
      case 4:
        return Sr(), null;
      case 10:
        return el(t.type._context), null;
      case 22:
      case 23:
        return zl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ua = !1,
    et = !1,
    q0 = typeof WeakSet == "function" ? WeakSet : Set,
    oe = null;
  function Er(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (s) {
          Fe(e, t, s);
        }
      else r.current = null;
  }
  function Nl(e, t, r) {
    try {
      r();
    } catch (s) {
      Fe(e, t, s);
    }
  }
  var rm = !1;
  function Y0(e, t) {
    if (((zs = oa), (e = Rd()), Os(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var s = r.getSelection && r.getSelection();
          if (s && s.rangeCount !== 0) {
            r = s.anchorNode;
            var u = s.anchorOffset,
              f = s.focusNode;
            s = s.focusOffset;
            try {
              r.nodeType, f.nodeType;
            } catch {
              r = null;
              break e;
            }
            var v = 0,
              N = -1,
              C = -1,
              U = 0,
              q = 0,
              K = e,
              H = null;
            t: for (;;) {
              for (
                var re;
                K !== r || (u !== 0 && K.nodeType !== 3) || (N = v + u),
                  K !== f || (s !== 0 && K.nodeType !== 3) || (C = v + s),
                  K.nodeType === 3 && (v += K.nodeValue.length),
                  (re = K.firstChild) !== null;

              )
                (H = K), (K = re);
              for (;;) {
                if (K === e) break t;
                if (
                  (H === r && ++U === u && (N = v),
                  H === f && ++q === s && (C = v),
                  (re = K.nextSibling) !== null)
                )
                  break;
                (K = H), (H = K.parentNode);
              }
              K = re;
            }
            r = N === -1 || C === -1 ? null : { start: N, end: C };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Us = { focusedElem: e, selectionRange: r }, oa = !1, oe = t;
      oe !== null;

    )
      if (
        ((t = oe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (oe = e);
      else
        for (; oe !== null; ) {
          t = oe;
          try {
            var se = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (se !== null) {
                    var ue = se.memoizedProps,
                      Ue = se.memoizedState,
                      M = t.stateNode,
                      O = M.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ue : kt(t.type, ue),
                        Ue
                      );
                    M.__reactInternalSnapshotBeforeUpdate = O;
                  }
                  break;
                case 3:
                  var z = t.stateNode.containerInfo;
                  z.nodeType === 1
                    ? (z.textContent = "")
                    : z.nodeType === 9 &&
                      z.documentElement &&
                      z.removeChild(z.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (Q) {
            Fe(t, t.return, Q);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (oe = e);
            break;
          }
          oe = t.return;
        }
    return (se = rm), (rm = !1), se;
  }
  function xi(e, t, r) {
    var s = t.updateQueue;
    if (((s = s !== null ? s.lastEffect : null), s !== null)) {
      var u = (s = s.next);
      do {
        if ((u.tag & e) === e) {
          var f = u.destroy;
          (u.destroy = void 0), f !== void 0 && Nl(t, r, f);
        }
        u = u.next;
      } while (u !== s);
    }
  }
  function Ba(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var s = r.create;
          r.destroy = s();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function jl(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function im(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), im(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Ut],
          delete t[li],
          delete t[Vs],
          delete t[C0],
          delete t[k0])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function am(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function om(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || am(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Cl(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = ya));
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Cl(e, t, r), e = e.sibling; e !== null; )
        Cl(e, t, r), (e = e.sibling);
  }
  function kl(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (s !== 4 && ((e = e.child), e !== null))
      for (kl(e, t, r), e = e.sibling; e !== null; )
        kl(e, t, r), (e = e.sibling);
  }
  var Ke = null,
    Ot = !1;
  function _n(e, t, r) {
    for (r = r.child; r !== null; ) sm(e, t, r), (r = r.sibling);
  }
  function sm(e, t, r) {
    if (zt && typeof zt.onCommitFiberUnmount == "function")
      try {
        zt.onCommitFiberUnmount(ea, r);
      } catch {}
    switch (r.tag) {
      case 5:
        et || Er(r, t);
      case 6:
        var s = Ke,
          u = Ot;
        (Ke = null),
          _n(e, t, r),
          (Ke = s),
          (Ot = u),
          Ke !== null &&
            (Ot
              ? ((e = Ke),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : Ke.removeChild(r.stateNode));
        break;
      case 18:
        Ke !== null &&
          (Ot
            ? ((e = Ke),
              (r = r.stateNode),
              e.nodeType === 8
                ? $s(e.parentNode, r)
                : e.nodeType === 1 && $s(e, r),
              Qr(e))
            : $s(Ke, r.stateNode));
        break;
      case 4:
        (s = Ke),
          (u = Ot),
          (Ke = r.stateNode.containerInfo),
          (Ot = !0),
          _n(e, t, r),
          (Ke = s),
          (Ot = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !et &&
          ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
        ) {
          u = s = s.next;
          do {
            var f = u,
              v = f.destroy;
            (f = f.tag),
              v !== void 0 && (f & 2 || f & 4) && Nl(r, t, v),
              (u = u.next);
          } while (u !== s);
        }
        _n(e, t, r);
        break;
      case 1:
        if (
          !et &&
          (Er(r, t),
          (s = r.stateNode),
          typeof s.componentWillUnmount == "function")
        )
          try {
            (s.props = r.memoizedProps),
              (s.state = r.memoizedState),
              s.componentWillUnmount();
          } catch (N) {
            Fe(r, t, N);
          }
        _n(e, t, r);
        break;
      case 21:
        _n(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((et = (s = et) || r.memoizedState !== null), _n(e, t, r), (et = s))
          : _n(e, t, r);
        break;
      default:
        _n(e, t, r);
    }
  }
  function lm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new q0()),
        t.forEach(function (s) {
          var u = ny.bind(null, e, s);
          r.has(s) || (r.add(s), s.then(u, u));
        });
    }
  }
  function It(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var s = 0; s < r.length; s++) {
        var u = r[s];
        try {
          var f = e,
            v = t,
            N = v;
          e: for (; N !== null; ) {
            switch (N.tag) {
              case 5:
                (Ke = N.stateNode), (Ot = !1);
                break e;
              case 3:
                (Ke = N.stateNode.containerInfo), (Ot = !0);
                break e;
              case 4:
                (Ke = N.stateNode.containerInfo), (Ot = !0);
                break e;
            }
            N = N.return;
          }
          if (Ke === null) throw Error(a(160));
          sm(f, v, u), (Ke = null), (Ot = !1);
          var C = u.alternate;
          C !== null && (C.return = null), (u.return = null);
        } catch (U) {
          Fe(u, t, U);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) um(t, e), (t = t.sibling);
  }
  function um(e, t) {
    var r = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((It(t, e), $t(e), s & 4)) {
          try {
            xi(3, e, e.return), Ba(3, e);
          } catch (ue) {
            Fe(e, e.return, ue);
          }
          try {
            xi(5, e, e.return);
          } catch (ue) {
            Fe(e, e.return, ue);
          }
        }
        break;
      case 1:
        It(t, e), $t(e), s & 512 && r !== null && Er(r, r.return);
        break;
      case 5:
        if (
          (It(t, e),
          $t(e),
          s & 512 && r !== null && Er(r, r.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            Ur(u, "");
          } catch (ue) {
            Fe(e, e.return, ue);
          }
        }
        if (s & 4 && ((u = e.stateNode), u != null)) {
          var f = e.memoizedProps,
            v = r !== null ? r.memoizedProps : f,
            N = e.type,
            C = e.updateQueue;
          if (((e.updateQueue = null), C !== null))
            try {
              N === "input" && f.type === "radio" && f.name != null && Lc(u, f),
                ss(N, v);
              var U = ss(N, f);
              for (v = 0; v < C.length; v += 2) {
                var q = C[v],
                  K = C[v + 1];
                q === "style"
                  ? Vc(u, K)
                  : q === "dangerouslySetInnerHTML"
                  ? Wc(u, K)
                  : q === "children"
                  ? Ur(u, K)
                  : x(u, q, K, U);
              }
              switch (N) {
                case "input":
                  ns(u, f);
                  break;
                case "textarea":
                  zc(u, f);
                  break;
                case "select":
                  var H = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!f.multiple;
                  var re = f.value;
                  re != null
                    ? rr(u, !!f.multiple, re, !1)
                    : H !== !!f.multiple &&
                      (f.defaultValue != null
                        ? rr(u, !!f.multiple, f.defaultValue, !0)
                        : rr(u, !!f.multiple, f.multiple ? [] : "", !1));
              }
              u[li] = f;
            } catch (ue) {
              Fe(e, e.return, ue);
            }
        }
        break;
      case 6:
        if ((It(t, e), $t(e), s & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (u = e.stateNode), (f = e.memoizedProps);
          try {
            u.nodeValue = f;
          } catch (ue) {
            Fe(e, e.return, ue);
          }
        }
        break;
      case 3:
        if (
          (It(t, e), $t(e), s & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Qr(t.containerInfo);
          } catch (ue) {
            Fe(e, e.return, ue);
          }
        break;
      case 4:
        It(t, e), $t(e);
        break;
      case 13:
        It(t, e),
          $t(e),
          (u = e.child),
          u.flags & 8192 &&
            ((f = u.memoizedState !== null),
            (u.stateNode.isHidden = f),
            !f ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (Al = ze())),
          s & 4 && lm(e);
        break;
      case 22:
        if (
          ((q = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((et = (U = et) || q), It(t, e), (et = U)) : It(t, e),
          $t(e),
          s & 8192)
        ) {
          if (
            ((U = e.memoizedState !== null),
            (e.stateNode.isHidden = U) && !q && e.mode & 1)
          )
            for (oe = e, q = e.child; q !== null; ) {
              for (K = oe = q; oe !== null; ) {
                switch (((H = oe), (re = H.child), H.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    xi(4, H, H.return);
                    break;
                  case 1:
                    Er(H, H.return);
                    var se = H.stateNode;
                    if (typeof se.componentWillUnmount == "function") {
                      (s = H), (r = H.return);
                      try {
                        (t = s),
                          (se.props = t.memoizedProps),
                          (se.state = t.memoizedState),
                          se.componentWillUnmount();
                      } catch (ue) {
                        Fe(s, r, ue);
                      }
                    }
                    break;
                  case 5:
                    Er(H, H.return);
                    break;
                  case 22:
                    if (H.memoizedState !== null) {
                      fm(K);
                      continue;
                    }
                }
                re !== null ? ((re.return = H), (oe = re)) : fm(K);
              }
              q = q.sibling;
            }
          e: for (q = null, K = e; ; ) {
            if (K.tag === 5) {
              if (q === null) {
                q = K;
                try {
                  (u = K.stateNode),
                    U
                      ? ((f = u.style),
                        typeof f.setProperty == "function"
                          ? f.setProperty("display", "none", "important")
                          : (f.display = "none"))
                      : ((N = K.stateNode),
                        (C = K.memoizedProps.style),
                        (v =
                          C != null && C.hasOwnProperty("display")
                            ? C.display
                            : null),
                        (N.style.display = $c("display", v)));
                } catch (ue) {
                  Fe(e, e.return, ue);
                }
              }
            } else if (K.tag === 6) {
              if (q === null)
                try {
                  K.stateNode.nodeValue = U ? "" : K.memoizedProps;
                } catch (ue) {
                  Fe(e, e.return, ue);
                }
            } else if (
              ((K.tag !== 22 && K.tag !== 23) ||
                K.memoizedState === null ||
                K === e) &&
              K.child !== null
            ) {
              (K.child.return = K), (K = K.child);
              continue;
            }
            if (K === e) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === e) break e;
              q === K && (q = null), (K = K.return);
            }
            q === K && (q = null),
              (K.sibling.return = K.return),
              (K = K.sibling);
          }
        }
        break;
      case 19:
        It(t, e), $t(e), s & 4 && lm(e);
        break;
      case 21:
        break;
      default:
        It(t, e), $t(e);
    }
  }
  function $t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (am(r)) {
              var s = r;
              break e;
            }
            r = r.return;
          }
          throw Error(a(160));
        }
        switch (s.tag) {
          case 5:
            var u = s.stateNode;
            s.flags & 32 && (Ur(u, ""), (s.flags &= -33));
            var f = om(e);
            kl(e, f, u);
            break;
          case 3:
          case 4:
            var v = s.stateNode.containerInfo,
              N = om(e);
            Cl(e, N, v);
            break;
          default:
            throw Error(a(161));
        }
      } catch (C) {
        Fe(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function X0(e, t, r) {
    (oe = e), cm(e);
  }
  function cm(e, t, r) {
    for (var s = (e.mode & 1) !== 0; oe !== null; ) {
      var u = oe,
        f = u.child;
      if (u.tag === 22 && s) {
        var v = u.memoizedState !== null || Ua;
        if (!v) {
          var N = u.alternate,
            C = (N !== null && N.memoizedState !== null) || et;
          N = Ua;
          var U = et;
          if (((Ua = v), (et = C) && !U))
            for (oe = u; oe !== null; )
              (v = oe),
                (C = v.child),
                v.tag === 22 && v.memoizedState !== null
                  ? mm(u)
                  : C !== null
                  ? ((C.return = v), (oe = C))
                  : mm(u);
          for (; f !== null; ) (oe = f), cm(f), (f = f.sibling);
          (oe = u), (Ua = N), (et = U);
        }
        dm(e);
      } else
        u.subtreeFlags & 8772 && f !== null
          ? ((f.return = u), (oe = f))
          : dm(e);
    }
  }
  function dm(e) {
    for (; oe !== null; ) {
      var t = oe;
      if (t.flags & 8772) {
        var r = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                et || Ba(5, t);
                break;
              case 1:
                var s = t.stateNode;
                if (t.flags & 4 && !et)
                  if (r === null) s.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : kt(t.type, r.memoizedProps);
                    s.componentDidUpdate(
                      u,
                      r.memoizedState,
                      s.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var f = t.updateQueue;
                f !== null && ff(t, f, s);
                break;
              case 3:
                var v = t.updateQueue;
                if (v !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  ff(t, v, r);
                }
                break;
              case 5:
                var N = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = N;
                  var C = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      C.autoFocus && r.focus();
                      break;
                    case "img":
                      C.src && (r.src = C.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var U = t.alternate;
                  if (U !== null) {
                    var q = U.memoizedState;
                    if (q !== null) {
                      var K = q.dehydrated;
                      K !== null && Qr(K);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          et || (t.flags & 512 && jl(t));
        } catch (H) {
          Fe(t, t.return, H);
        }
      }
      if (t === e) {
        oe = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (oe = r);
        break;
      }
      oe = t.return;
    }
  }
  function fm(e) {
    for (; oe !== null; ) {
      var t = oe;
      if (t === e) {
        oe = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (oe = r);
        break;
      }
      oe = t.return;
    }
  }
  function mm(e) {
    for (; oe !== null; ) {
      var t = oe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Ba(4, t);
            } catch (C) {
              Fe(t, r, C);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var u = t.return;
              try {
                s.componentDidMount();
              } catch (C) {
                Fe(t, u, C);
              }
            }
            var f = t.return;
            try {
              jl(t);
            } catch (C) {
              Fe(t, f, C);
            }
            break;
          case 5:
            var v = t.return;
            try {
              jl(t);
            } catch (C) {
              Fe(t, v, C);
            }
        }
      } catch (C) {
        Fe(t, t.return, C);
      }
      if (t === e) {
        oe = null;
        break;
      }
      var N = t.sibling;
      if (N !== null) {
        (N.return = t.return), (oe = N);
        break;
      }
      oe = t.return;
    }
  }
  var K0 = Math.ceil,
    Wa = S.ReactCurrentDispatcher,
    Ol = S.ReactCurrentOwner,
    Et = S.ReactCurrentBatchConfig,
    be = 0,
    He = null,
    Be = null,
    Ge = 0,
    vt = 0,
    Tr = yn(0),
    $e = 0,
    wi = null,
    Vn = 0,
    $a = 0,
    Il = 0,
    bi = null,
    ut = null,
    Al = 0,
    Pr = 1 / 0,
    rn = null,
    Va = !1,
    Rl = null,
    En = null,
    Ha = !1,
    Tn = null,
    qa = 0,
    Si = 0,
    Dl = null,
    Ya = -1,
    Xa = 0;
  function at() {
    return be & 6 ? ze() : Ya !== -1 ? Ya : (Ya = ze());
  }
  function Pn(e) {
    return e.mode & 1
      ? be & 2 && Ge !== 0
        ? Ge & -Ge
        : I0.transition !== null
        ? (Xa === 0 && (Xa = ad()), Xa)
        : ((e = Pe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : hd(e.type))),
          e)
      : 1;
  }
  function At(e, t, r, s) {
    if (50 < Si) throw ((Si = 0), (Dl = null), Error(a(185)));
    qr(e, r, s),
      (!(be & 2) || e !== He) &&
        (e === He && (!(be & 2) && ($a |= r), $e === 4 && Nn(e, Ge)),
        ct(e, s),
        r === 1 &&
          be === 0 &&
          !(t.mode & 1) &&
          ((Pr = ze() + 500), Sa && wn()));
  }
  function ct(e, t) {
    var r = e.callbackNode;
    Iv(e, t);
    var s = ra(e, e === He ? Ge : 0);
    if (s === 0)
      r !== null && nd(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = s & -s), e.callbackPriority !== t)) {
      if ((r != null && nd(r), t === 1))
        e.tag === 0 ? O0(pm.bind(null, e)) : Zd(pm.bind(null, e)),
          N0(function () {
            !(be & 6) && wn();
          }),
          (r = null);
      else {
        switch (od(s)) {
          case 1:
            r = hs;
            break;
          case 4:
            r = rd;
            break;
          case 16:
            r = Zi;
            break;
          case 536870912:
            r = id;
            break;
          default:
            r = Zi;
        }
        r = _m(r, hm.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function hm(e, t) {
    if (((Ya = -1), (Xa = 0), be & 6)) throw Error(a(327));
    var r = e.callbackNode;
    if (Nr() && e.callbackNode !== r) return null;
    var s = ra(e, e === He ? Ge : 0);
    if (s === 0) return null;
    if (s & 30 || s & e.expiredLanes || t) t = Ka(e, s);
    else {
      t = s;
      var u = be;
      be |= 2;
      var f = vm();
      (He !== e || Ge !== t) && ((rn = null), (Pr = ze() + 500), qn(e, t));
      do
        try {
          J0();
          break;
        } catch (N) {
          gm(e, N);
        }
      while (!0);
      Zs(),
        (Wa.current = f),
        (be = u),
        Be !== null ? (t = 0) : ((He = null), (Ge = 0), (t = $e));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((u = ps(e)), u !== 0 && ((s = u), (t = Ll(e, u)))),
        t === 1)
      )
        throw ((r = wi), qn(e, 0), Nn(e, s), ct(e, ze()), r);
      if (t === 6) Nn(e, s);
      else {
        if (
          ((u = e.current.alternate),
          !(s & 30) &&
            !G0(u) &&
            ((t = Ka(e, s)),
            t === 2 && ((f = ps(e)), f !== 0 && ((s = f), (t = Ll(e, f)))),
            t === 1))
        )
          throw ((r = wi), qn(e, 0), Nn(e, s), ct(e, ze()), r);
        switch (((e.finishedWork = u), (e.finishedLanes = s), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Yn(e, ut, rn);
            break;
          case 3:
            if (
              (Nn(e, s),
              (s & 130023424) === s && ((t = Al + 500 - ze()), 10 < t))
            ) {
              if (ra(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & s) !== s)) {
                at(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = Ws(Yn.bind(null, e, ut, rn), t);
              break;
            }
            Yn(e, ut, rn);
            break;
          case 4:
            if ((Nn(e, s), (s & 4194240) === s)) break;
            for (t = e.eventTimes, u = -1; 0 < s; ) {
              var v = 31 - Nt(s);
              (f = 1 << v), (v = t[v]), v > u && (u = v), (s &= ~f);
            }
            if (
              ((s = u),
              (s = ze() - s),
              (s =
                (120 > s
                  ? 120
                  : 480 > s
                  ? 480
                  : 1080 > s
                  ? 1080
                  : 1920 > s
                  ? 1920
                  : 3e3 > s
                  ? 3e3
                  : 4320 > s
                  ? 4320
                  : 1960 * K0(s / 1960)) - s),
              10 < s)
            ) {
              e.timeoutHandle = Ws(Yn.bind(null, e, ut, rn), s);
              break;
            }
            Yn(e, ut, rn);
            break;
          case 5:
            Yn(e, ut, rn);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return ct(e, ze()), e.callbackNode === r ? hm.bind(null, e) : null;
  }
  function Ll(e, t) {
    var r = bi;
    return (
      e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256),
      (e = Ka(e, t)),
      e !== 2 && ((t = ut), (ut = r), t !== null && Ml(t)),
      e
    );
  }
  function Ml(e) {
    ut === null ? (ut = e) : ut.push.apply(ut, e);
  }
  function G0(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var s = 0; s < r.length; s++) {
            var u = r[s],
              f = u.getSnapshot;
            u = u.value;
            try {
              if (!jt(f(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Nn(e, t) {
    for (
      t &= ~Il,
        t &= ~$a,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Nt(t),
        s = 1 << r;
      (e[r] = -1), (t &= ~s);
    }
  }
  function pm(e) {
    if (be & 6) throw Error(a(327));
    Nr();
    var t = ra(e, 0);
    if (!(t & 1)) return ct(e, ze()), null;
    var r = Ka(e, t);
    if (e.tag !== 0 && r === 2) {
      var s = ps(e);
      s !== 0 && ((t = s), (r = Ll(e, s)));
    }
    if (r === 1) throw ((r = wi), qn(e, 0), Nn(e, t), ct(e, ze()), r);
    if (r === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Yn(e, ut, rn),
      ct(e, ze()),
      null
    );
  }
  function Fl(e, t) {
    var r = be;
    be |= 1;
    try {
      return e(t);
    } finally {
      (be = r), be === 0 && ((Pr = ze() + 500), Sa && wn());
    }
  }
  function Hn(e) {
    Tn !== null && Tn.tag === 0 && !(be & 6) && Nr();
    var t = be;
    be |= 1;
    var r = Et.transition,
      s = Pe;
    try {
      if (((Et.transition = null), (Pe = 1), e)) return e();
    } finally {
      (Pe = s), (Et.transition = r), (be = t), !(be & 6) && wn();
    }
  }
  function zl() {
    (vt = Tr.current), Oe(Tr);
  }
  function qn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), P0(r)), Be !== null))
      for (r = Be.return; r !== null; ) {
        var s = r;
        switch ((Xs(s), s.tag)) {
          case 1:
            (s = s.type.childContextTypes), s != null && wa();
            break;
          case 3:
            Sr(), Oe(ot), Oe(Qe), sl();
            break;
          case 5:
            al(s);
            break;
          case 4:
            Sr();
            break;
          case 13:
            Oe(Le);
            break;
          case 19:
            Oe(Le);
            break;
          case 10:
            el(s.type._context);
            break;
          case 22:
          case 23:
            zl();
        }
        r = r.return;
      }
    if (
      ((He = e),
      (Be = e = jn(e.current, null)),
      (Ge = vt = t),
      ($e = 0),
      (wi = null),
      (Il = $a = Vn = 0),
      (ut = bi = null),
      Bn !== null)
    ) {
      for (t = 0; t < Bn.length; t++)
        if (((r = Bn[t]), (s = r.interleaved), s !== null)) {
          r.interleaved = null;
          var u = s.next,
            f = r.pending;
          if (f !== null) {
            var v = f.next;
            (f.next = u), (s.next = v);
          }
          r.pending = s;
        }
      Bn = null;
    }
    return e;
  }
  function gm(e, t) {
    do {
      var r = Be;
      try {
        if ((Zs(), (Ia.current = La), Aa)) {
          for (var s = Me.memoizedState; s !== null; ) {
            var u = s.queue;
            u !== null && (u.pending = null), (s = s.next);
          }
          Aa = !1;
        }
        if (
          (($n = 0),
          (Ve = We = Me = null),
          (hi = !1),
          (pi = 0),
          (Ol.current = null),
          r === null || r.return === null)
        ) {
          ($e = 1), (wi = t), (Be = null);
          break;
        }
        e: {
          var f = e,
            v = r.return,
            N = r,
            C = t;
          if (
            ((t = Ge),
            (N.flags |= 32768),
            C !== null && typeof C == "object" && typeof C.then == "function")
          ) {
            var U = C,
              q = N,
              K = q.tag;
            if (!(q.mode & 1) && (K === 0 || K === 11 || K === 15)) {
              var H = q.alternate;
              H
                ? ((q.updateQueue = H.updateQueue),
                  (q.memoizedState = H.memoizedState),
                  (q.lanes = H.lanes))
                : ((q.updateQueue = null), (q.memoizedState = null));
            }
            var re = Bf(v);
            if (re !== null) {
              (re.flags &= -257),
                Wf(re, v, N, f, t),
                re.mode & 1 && Uf(f, U, t),
                (t = re),
                (C = U);
              var se = t.updateQueue;
              if (se === null) {
                var ue = new Set();
                ue.add(C), (t.updateQueue = ue);
              } else se.add(C);
              break e;
            } else {
              if (!(t & 1)) {
                Uf(f, U, t), Ul();
                break e;
              }
              C = Error(a(426));
            }
          } else if (Re && N.mode & 1) {
            var Ue = Bf(v);
            if (Ue !== null) {
              !(Ue.flags & 65536) && (Ue.flags |= 256),
                Wf(Ue, v, N, f, t),
                Qs(_r(C, N));
              break e;
            }
          }
          (f = C = _r(C, N)),
            $e !== 4 && ($e = 2),
            bi === null ? (bi = [f]) : bi.push(f),
            (f = v);
          do {
            switch (f.tag) {
              case 3:
                (f.flags |= 65536), (t &= -t), (f.lanes |= t);
                var M = Ff(f, C, t);
                df(f, M);
                break e;
              case 1:
                N = C;
                var O = f.type,
                  z = f.stateNode;
                if (
                  !(f.flags & 128) &&
                  (typeof O.getDerivedStateFromError == "function" ||
                    (z !== null &&
                      typeof z.componentDidCatch == "function" &&
                      (En === null || !En.has(z))))
                ) {
                  (f.flags |= 65536), (t &= -t), (f.lanes |= t);
                  var Q = zf(f, N, t);
                  df(f, Q);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        xm(r);
      } catch (ce) {
        (t = ce), Be === r && r !== null && (Be = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function vm() {
    var e = Wa.current;
    return (Wa.current = La), e === null ? La : e;
  }
  function Ul() {
    ($e === 0 || $e === 3 || $e === 2) && ($e = 4),
      He === null || (!(Vn & 268435455) && !($a & 268435455)) || Nn(He, Ge);
  }
  function Ka(e, t) {
    var r = be;
    be |= 2;
    var s = vm();
    (He !== e || Ge !== t) && ((rn = null), qn(e, t));
    do
      try {
        Q0();
        break;
      } catch (u) {
        gm(e, u);
      }
    while (!0);
    if ((Zs(), (be = r), (Wa.current = s), Be !== null)) throw Error(a(261));
    return (He = null), (Ge = 0), $e;
  }
  function Q0() {
    for (; Be !== null; ) ym(Be);
  }
  function J0() {
    for (; Be !== null && !_v(); ) ym(Be);
  }
  function ym(e) {
    var t = Sm(e.alternate, e, vt);
    (e.memoizedProps = e.pendingProps),
      t === null ? xm(e) : (Be = t),
      (Ol.current = null);
  }
  function xm(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((r = H0(r, t)), r !== null)) {
          (r.flags &= 32767), (Be = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          ($e = 6), (Be = null);
          return;
        }
      } else if (((r = V0(r, t, vt)), r !== null)) {
        Be = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Be = t;
        return;
      }
      Be = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function Yn(e, t, r) {
    var s = Pe,
      u = Et.transition;
    try {
      (Et.transition = null), (Pe = 1), Z0(e, t, r, s);
    } finally {
      (Et.transition = u), (Pe = s);
    }
    return null;
  }
  function Z0(e, t, r, s) {
    do Nr();
    while (Tn !== null);
    if (be & 6) throw Error(a(327));
    r = e.finishedWork;
    var u = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var f = r.lanes | r.childLanes;
    if (
      (Av(e, f),
      e === He && ((Be = He = null), (Ge = 0)),
      (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
        Ha ||
        ((Ha = !0),
        _m(Zi, function () {
          return Nr(), null;
        })),
      (f = (r.flags & 15990) !== 0),
      r.subtreeFlags & 15990 || f)
    ) {
      (f = Et.transition), (Et.transition = null);
      var v = Pe;
      Pe = 1;
      var N = be;
      (be |= 4),
        (Ol.current = null),
        Y0(e, r),
        um(r, e),
        x0(Us),
        (oa = !!zs),
        (Us = zs = null),
        (e.current = r),
        X0(r),
        Ev(),
        (be = N),
        (Pe = v),
        (Et.transition = f);
    } else e.current = r;
    if (
      (Ha && ((Ha = !1), (Tn = e), (qa = u)),
      (f = e.pendingLanes),
      f === 0 && (En = null),
      Nv(r.stateNode),
      ct(e, ze()),
      t !== null)
    )
      for (s = e.onRecoverableError, r = 0; r < t.length; r++)
        (u = t[r]), s(u.value, { componentStack: u.stack, digest: u.digest });
    if (Va) throw ((Va = !1), (e = Rl), (Rl = null), e);
    return (
      qa & 1 && e.tag !== 0 && Nr(),
      (f = e.pendingLanes),
      f & 1 ? (e === Dl ? Si++ : ((Si = 0), (Dl = e))) : (Si = 0),
      wn(),
      null
    );
  }
  function Nr() {
    if (Tn !== null) {
      var e = od(qa),
        t = Et.transition,
        r = Pe;
      try {
        if (((Et.transition = null), (Pe = 16 > e ? 16 : e), Tn === null))
          var s = !1;
        else {
          if (((e = Tn), (Tn = null), (qa = 0), be & 6)) throw Error(a(331));
          var u = be;
          for (be |= 4, oe = e.current; oe !== null; ) {
            var f = oe,
              v = f.child;
            if (oe.flags & 16) {
              var N = f.deletions;
              if (N !== null) {
                for (var C = 0; C < N.length; C++) {
                  var U = N[C];
                  for (oe = U; oe !== null; ) {
                    var q = oe;
                    switch (q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xi(8, q, f);
                    }
                    var K = q.child;
                    if (K !== null) (K.return = q), (oe = K);
                    else
                      for (; oe !== null; ) {
                        q = oe;
                        var H = q.sibling,
                          re = q.return;
                        if ((im(q), q === U)) {
                          oe = null;
                          break;
                        }
                        if (H !== null) {
                          (H.return = re), (oe = H);
                          break;
                        }
                        oe = re;
                      }
                  }
                }
                var se = f.alternate;
                if (se !== null) {
                  var ue = se.child;
                  if (ue !== null) {
                    se.child = null;
                    do {
                      var Ue = ue.sibling;
                      (ue.sibling = null), (ue = Ue);
                    } while (ue !== null);
                  }
                }
                oe = f;
              }
            }
            if (f.subtreeFlags & 2064 && v !== null) (v.return = f), (oe = v);
            else
              e: for (; oe !== null; ) {
                if (((f = oe), f.flags & 2048))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xi(9, f, f.return);
                  }
                var M = f.sibling;
                if (M !== null) {
                  (M.return = f.return), (oe = M);
                  break e;
                }
                oe = f.return;
              }
          }
          var O = e.current;
          for (oe = O; oe !== null; ) {
            v = oe;
            var z = v.child;
            if (v.subtreeFlags & 2064 && z !== null) (z.return = v), (oe = z);
            else
              e: for (v = O; oe !== null; ) {
                if (((N = oe), N.flags & 2048))
                  try {
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ba(9, N);
                    }
                  } catch (ce) {
                    Fe(N, N.return, ce);
                  }
                if (N === v) {
                  oe = null;
                  break e;
                }
                var Q = N.sibling;
                if (Q !== null) {
                  (Q.return = N.return), (oe = Q);
                  break e;
                }
                oe = N.return;
              }
          }
          if (
            ((be = u),
            wn(),
            zt && typeof zt.onPostCommitFiberRoot == "function")
          )
            try {
              zt.onPostCommitFiberRoot(ea, e);
            } catch {}
          s = !0;
        }
        return s;
      } finally {
        (Pe = r), (Et.transition = t);
      }
    }
    return !1;
  }
  function wm(e, t, r) {
    (t = _r(r, t)),
      (t = Ff(e, t, 1)),
      (e = Sn(e, t, 1)),
      (t = at()),
      e !== null && (qr(e, 1, t), ct(e, t));
  }
  function Fe(e, t, r) {
    if (e.tag === 3) wm(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          wm(t, e, r);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (En === null || !En.has(s)))
          ) {
            (e = _r(r, e)),
              (e = zf(t, e, 1)),
              (t = Sn(t, e, 1)),
              (e = at()),
              t !== null && (qr(t, 1, e), ct(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function ey(e, t, r) {
    var s = e.pingCache;
    s !== null && s.delete(t),
      (t = at()),
      (e.pingedLanes |= e.suspendedLanes & r),
      He === e &&
        (Ge & r) === r &&
        ($e === 4 || ($e === 3 && (Ge & 130023424) === Ge && 500 > ze() - Al)
          ? qn(e, 0)
          : (Il |= r)),
      ct(e, t);
  }
  function bm(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = na), (na <<= 1), !(na & 130023424) && (na = 4194304))
        : (t = 1));
    var r = at();
    (e = en(e, t)), e !== null && (qr(e, t, r), ct(e, r));
  }
  function ty(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), bm(e, r);
  }
  function ny(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode,
          u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    s !== null && s.delete(t), bm(e, r);
  }
  var Sm;
  Sm = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ot.current) lt = !0;
      else {
        if (!(e.lanes & r) && !(t.flags & 128)) return (lt = !1), $0(e, t, r);
        lt = !!(e.flags & 131072);
      }
    else (lt = !1), Re && t.flags & 1048576 && ef(t, Ea, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var s = t.type;
        za(e, t), (e = t.pendingProps);
        var u = pr(t, Qe.current);
        br(t, r), (u = cl(null, t, s, e, u, r));
        var f = dl();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              st(s) ? ((f = !0), ba(t)) : (f = !1),
              (t.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              rl(t),
              (u.updater = Ma),
              (t.stateNode = u),
              (u._reactInternals = t),
              vl(t, s, e, r),
              (t = bl(null, t, s, !0, f, r)))
            : ((t.tag = 0), Re && f && Ys(t), it(null, t, u, r), (t = t.child)),
          t
        );
      case 16:
        s = t.elementType;
        e: {
          switch (
            (za(e, t),
            (e = t.pendingProps),
            (u = s._init),
            (s = u(s._payload)),
            (t.type = s),
            (u = t.tag = iy(s)),
            (e = kt(s, e)),
            u)
          ) {
            case 0:
              t = wl(null, t, s, e, r);
              break e;
            case 1:
              t = Xf(null, t, s, e, r);
              break e;
            case 11:
              t = $f(null, t, s, e, r);
              break e;
            case 14:
              t = Vf(null, t, s, kt(s.type, e), r);
              break e;
          }
          throw Error(a(306, s, ""));
        }
        return t;
      case 0:
        return (
          (s = t.type),
          (u = t.pendingProps),
          (u = t.elementType === s ? u : kt(s, u)),
          wl(e, t, s, u, r)
        );
      case 1:
        return (
          (s = t.type),
          (u = t.pendingProps),
          (u = t.elementType === s ? u : kt(s, u)),
          Xf(e, t, s, u, r)
        );
      case 3:
        e: {
          if ((Kf(t), e === null)) throw Error(a(387));
          (s = t.pendingProps),
            (f = t.memoizedState),
            (u = f.element),
            cf(e, t),
            ka(t, s, null, r);
          var v = t.memoizedState;
          if (((s = v.element), f.isDehydrated))
            if (
              ((f = {
                element: s,
                isDehydrated: !1,
                cache: v.cache,
                pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                transitions: v.transitions,
              }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              (u = _r(Error(a(423)), t)), (t = Gf(e, t, s, r, u));
              break e;
            } else if (s !== u) {
              (u = _r(Error(a(424)), t)), (t = Gf(e, t, s, r, u));
              break e;
            } else
              for (
                gt = vn(t.stateNode.containerInfo.firstChild),
                  pt = t,
                  Re = !0,
                  Ct = null,
                  r = lf(t, null, s, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((yr(), s === u)) {
              t = nn(e, t, r);
              break e;
            }
            it(e, t, s, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          mf(t),
          e === null && Gs(t),
          (s = t.type),
          (u = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (v = u.children),
          Bs(s, u) ? (v = null) : f !== null && Bs(s, f) && (t.flags |= 32),
          Yf(e, t),
          it(e, t, v, r),
          t.child
        );
      case 6:
        return e === null && Gs(t), null;
      case 13:
        return Qf(e, t, r);
      case 4:
        return (
          il(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = xr(t, null, s, r)) : it(e, t, s, r),
          t.child
        );
      case 11:
        return (
          (s = t.type),
          (u = t.pendingProps),
          (u = t.elementType === s ? u : kt(s, u)),
          $f(e, t, s, u, r)
        );
      case 7:
        return it(e, t, t.pendingProps, r), t.child;
      case 8:
        return it(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return it(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((s = t.type._context),
            (u = t.pendingProps),
            (f = t.memoizedProps),
            (v = u.value),
            Ce(Na, s._currentValue),
            (s._currentValue = v),
            f !== null)
          )
            if (jt(f.value, v)) {
              if (f.children === u.children && !ot.current) {
                t = nn(e, t, r);
                break e;
              }
            } else
              for (f = t.child, f !== null && (f.return = t); f !== null; ) {
                var N = f.dependencies;
                if (N !== null) {
                  v = f.child;
                  for (var C = N.firstContext; C !== null; ) {
                    if (C.context === s) {
                      if (f.tag === 1) {
                        (C = tn(-1, r & -r)), (C.tag = 2);
                        var U = f.updateQueue;
                        if (U !== null) {
                          U = U.shared;
                          var q = U.pending;
                          q === null
                            ? (C.next = C)
                            : ((C.next = q.next), (q.next = C)),
                            (U.pending = C);
                        }
                      }
                      (f.lanes |= r),
                        (C = f.alternate),
                        C !== null && (C.lanes |= r),
                        tl(f.return, r, t),
                        (N.lanes |= r);
                      break;
                    }
                    C = C.next;
                  }
                } else if (f.tag === 10) v = f.type === t.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((v = f.return), v === null)) throw Error(a(341));
                  (v.lanes |= r),
                    (N = v.alternate),
                    N !== null && (N.lanes |= r),
                    tl(v, r, t),
                    (v = f.sibling);
                } else v = f.child;
                if (v !== null) v.return = f;
                else
                  for (v = f; v !== null; ) {
                    if (v === t) {
                      v = null;
                      break;
                    }
                    if (((f = v.sibling), f !== null)) {
                      (f.return = v.return), (v = f);
                      break;
                    }
                    v = v.return;
                  }
                f = v;
              }
          it(e, t, u.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (s = t.pendingProps.children),
          br(t, r),
          (u = St(u)),
          (s = s(u)),
          (t.flags |= 1),
          it(e, t, s, r),
          t.child
        );
      case 14:
        return (
          (s = t.type),
          (u = kt(s, t.pendingProps)),
          (u = kt(s.type, u)),
          Vf(e, t, s, u, r)
        );
      case 15:
        return Hf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (s = t.type),
          (u = t.pendingProps),
          (u = t.elementType === s ? u : kt(s, u)),
          za(e, t),
          (t.tag = 1),
          st(s) ? ((e = !0), ba(t)) : (e = !1),
          br(t, r),
          Lf(t, s, u),
          vl(t, s, u, r),
          bl(null, t, s, !0, e, r)
        );
      case 19:
        return Zf(e, t, r);
      case 22:
        return qf(e, t, r);
    }
    throw Error(a(156, t.tag));
  };
  function _m(e, t) {
    return td(e, t);
  }
  function ry(e, t, r, s) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Tt(e, t, r, s) {
    return new ry(e, t, r, s);
  }
  function Bl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function iy(e) {
    if (typeof e == "function") return Bl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === F)) return 11;
      if (e === ee) return 14;
    }
    return 2;
  }
  function jn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Tt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Ga(e, t, r, s, u, f) {
    var v = 2;
    if (((s = e), typeof e == "function")) Bl(e) && (v = 1);
    else if (typeof e == "string") v = 5;
    else
      e: switch (e) {
        case I:
          return Xn(r.children, u, f, t);
        case W:
          (v = 8), (u |= 8);
          break;
        case Y:
          return (
            (e = Tt(12, r, t, u | 2)), (e.elementType = Y), (e.lanes = f), e
          );
        case X:
          return (e = Tt(13, r, t, u)), (e.elementType = X), (e.lanes = f), e;
        case J:
          return (e = Tt(19, r, t, u)), (e.elementType = J), (e.lanes = f), e;
        case ae:
          return Qa(r, u, f, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ne:
                v = 10;
                break e;
              case te:
                v = 9;
                break e;
              case F:
                v = 11;
                break e;
              case ee:
                v = 14;
                break e;
              case ie:
                (v = 16), (s = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Tt(v, r, t, u)), (t.elementType = e), (t.type = s), (t.lanes = f), t
    );
  }
  function Xn(e, t, r, s) {
    return (e = Tt(7, e, s, t)), (e.lanes = r), e;
  }
  function Qa(e, t, r, s) {
    return (
      (e = Tt(22, e, s, t)),
      (e.elementType = ae),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Wl(e, t, r) {
    return (e = Tt(6, e, null, t)), (e.lanes = r), e;
  }
  function $l(e, t, r) {
    return (
      (t = Tt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function ay(e, t, r, s, u) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = gs(0)),
      (this.expirationTimes = gs(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = gs(0)),
      (this.identifierPrefix = s),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Vl(e, t, r, s, u, f, v, N, C) {
    return (
      (e = new ay(e, t, r, N, C)),
      t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
      (f = Tt(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: s,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      rl(f),
      e
    );
  }
  function oy(e, t, r) {
    var s =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: k,
      key: s == null ? null : "" + s,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function Em(e) {
    if (!e) return xn;
    e = e._reactInternals;
    e: {
      if (Ln(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (st(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (st(r)) return Qd(e, r, t);
    }
    return t;
  }
  function Tm(e, t, r, s, u, f, v, N, C) {
    return (
      (e = Vl(r, s, !0, e, u, f, v, N, C)),
      (e.context = Em(null)),
      (r = e.current),
      (s = at()),
      (u = Pn(r)),
      (f = tn(s, u)),
      (f.callback = t ?? null),
      Sn(r, f, u),
      (e.current.lanes = u),
      qr(e, u, s),
      ct(e, s),
      e
    );
  }
  function Ja(e, t, r, s) {
    var u = t.current,
      f = at(),
      v = Pn(u);
    return (
      (r = Em(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = tn(f, v)),
      (t.payload = { element: e }),
      (s = s === void 0 ? null : s),
      s !== null && (t.callback = s),
      (e = Sn(u, t, v)),
      e !== null && (At(e, u, v, f), Ca(e, u, v)),
      v
    );
  }
  function Za(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Pm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Hl(e, t) {
    Pm(e, t), (e = e.alternate) && Pm(e, t);
  }
  function sy() {
    return null;
  }
  var Nm =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ql(e) {
    this._internalRoot = e;
  }
  (eo.prototype.render = ql.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      Ja(e, t, null, null);
    }),
    (eo.prototype.unmount = ql.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Hn(function () {
            Ja(null, e, null, null);
          }),
            (t[Gt] = null);
        }
      });
  function eo(e) {
    this._internalRoot = e;
  }
  eo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ud();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < hn.length && t !== 0 && t < hn[r].priority; r++);
      hn.splice(r, 0, e), r === 0 && fd(e);
    }
  };
  function Yl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function to(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function jm() {}
  function ly(e, t, r, s, u) {
    if (u) {
      if (typeof s == "function") {
        var f = s;
        s = function () {
          var U = Za(v);
          f.call(U);
        };
      }
      var v = Tm(t, s, e, 0, null, !1, !1, "", jm);
      return (
        (e._reactRootContainer = v),
        (e[Gt] = v.current),
        oi(e.nodeType === 8 ? e.parentNode : e),
        Hn(),
        v
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof s == "function") {
      var N = s;
      s = function () {
        var U = Za(C);
        N.call(U);
      };
    }
    var C = Vl(e, 0, !1, null, null, !1, !1, "", jm);
    return (
      (e._reactRootContainer = C),
      (e[Gt] = C.current),
      oi(e.nodeType === 8 ? e.parentNode : e),
      Hn(function () {
        Ja(t, C, r, s);
      }),
      C
    );
  }
  function no(e, t, r, s, u) {
    var f = r._reactRootContainer;
    if (f) {
      var v = f;
      if (typeof u == "function") {
        var N = u;
        u = function () {
          var C = Za(v);
          N.call(C);
        };
      }
      Ja(t, v, e, u);
    } else v = ly(r, t, e, u, s);
    return Za(v);
  }
  (sd = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Hr(t.pendingLanes);
          r !== 0 &&
            (vs(t, r | 1), ct(t, ze()), !(be & 6) && ((Pr = ze() + 500), wn()));
        }
        break;
      case 13:
        Hn(function () {
          var s = en(e, 1);
          if (s !== null) {
            var u = at();
            At(s, e, 1, u);
          }
        }),
          Hl(e, 1);
    }
  }),
    (ys = function (e) {
      if (e.tag === 13) {
        var t = en(e, 134217728);
        if (t !== null) {
          var r = at();
          At(t, e, 134217728, r);
        }
        Hl(e, 134217728);
      }
    }),
    (ld = function (e) {
      if (e.tag === 13) {
        var t = Pn(e),
          r = en(e, t);
        if (r !== null) {
          var s = at();
          At(r, e, t, s);
        }
        Hl(e, t);
      }
    }),
    (ud = function () {
      return Pe;
    }),
    (cd = function (e, t) {
      var r = Pe;
      try {
        return (Pe = e), t();
      } finally {
        Pe = r;
      }
    }),
    (cs = function (e, t, r) {
      switch (t) {
        case "input":
          if ((ns(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var s = r[t];
              if (s !== e && s.form === e.form) {
                var u = xa(s);
                if (!u) throw Error(a(90));
                Rc(s), ns(s, u);
              }
            }
          }
          break;
        case "textarea":
          zc(e, r);
          break;
        case "select":
          (t = r.value), t != null && rr(e, !!r.multiple, t, !1);
      }
    }),
    (Xc = Fl),
    (Kc = Hn);
  var uy = { usingClientEntryPoint: !1, Events: [ui, mr, xa, qc, Yc, Fl] },
    _i = {
      findFiberByHostInstance: Mn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    cy = {
      bundleType: _i.bundleType,
      version: _i.version,
      rendererPackageName: _i.rendererPackageName,
      rendererConfig: _i.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: S.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Zc(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: _i.findFiberByHostInstance || sy,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ro.isDisabled && ro.supportsFiber)
      try {
        (ea = ro.inject(cy)), (zt = ro);
      } catch {}
  }
  return (
    (dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uy),
    (dt.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Yl(t)) throw Error(a(200));
      return oy(e, t, null, r);
    }),
    (dt.createRoot = function (e, t) {
      if (!Yl(e)) throw Error(a(299));
      var r = !1,
        s = "",
        u = Nm;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = Vl(e, 1, !1, null, null, r, !1, s, u)),
        (e[Gt] = t.current),
        oi(e.nodeType === 8 ? e.parentNode : e),
        new ql(t)
      );
    }),
    (dt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = Zc(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (dt.flushSync = function (e) {
      return Hn(e);
    }),
    (dt.hydrate = function (e, t, r) {
      if (!to(t)) throw Error(a(200));
      return no(null, e, t, !0, r);
    }),
    (dt.hydrateRoot = function (e, t, r) {
      if (!Yl(e)) throw Error(a(405));
      var s = (r != null && r.hydratedSources) || null,
        u = !1,
        f = "",
        v = Nm;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (u = !0),
          r.identifierPrefix !== void 0 && (f = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (v = r.onRecoverableError)),
        (t = Tm(t, null, e, 1, r ?? null, u, !1, f, v)),
        (e[Gt] = t.current),
        oi(e),
        s)
      )
        for (e = 0; e < s.length; e++)
          (r = s[e]),
            (u = r._getVersion),
            (u = u(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, u])
              : t.mutableSourceEagerHydrationData.push(r, u);
      return new eo(t);
    }),
    (dt.render = function (e, t, r) {
      if (!to(t)) throw Error(a(200));
      return no(null, e, t, !1, r);
    }),
    (dt.unmountComponentAtNode = function (e) {
      if (!to(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (Hn(function () {
            no(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Gt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (dt.unstable_batchedUpdates = Fl),
    (dt.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
      if (!to(r)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return no(e, t, r, !1, s);
    }),
    (dt.version = "18.3.1-next-f1338f8080-20240426"),
    dt
  );
}
var Lm;
function yy() {
  if (Lm) return Gl.exports;
  Lm = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (Gl.exports = vy()), Gl.exports;
}
var Mm;
function xy() {
  if (Mm) return io;
  Mm = 1;
  var n = yy();
  return (io.createRoot = n.createRoot), (io.hydrateRoot = n.hydrateRoot), io;
}
var wy = xy(),
  Ti = {},
  Fm;
function by() {
  if (Fm) return Ti;
  (Fm = 1),
    Object.defineProperty(Ti, "__esModule", { value: !0 }),
    (Ti.parse = m),
    (Ti.serialize = g);
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    i = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    o = /^[\u0020-\u003A\u003D-\u007E]*$/,
    l = Object.prototype.toString,
    c = (() => {
      const y = function () {};
      return (y.prototype = Object.create(null)), y;
    })();
  function m(y, j) {
    const b = new c(),
      T = y.length;
    if (T < 2) return b;
    const _ = (j == null ? void 0 : j.decode) || w;
    let A = 0;
    do {
      const R = y.indexOf("=", A);
      if (R === -1) break;
      const x = y.indexOf(";", A),
        S = x === -1 ? T : x;
      if (R > S) {
        A = y.lastIndexOf(";", R - 1) + 1;
        continue;
      }
      const E = h(y, A, R),
        k = p(y, R, E),
        I = y.slice(E, k);
      if (b[I] === void 0) {
        let W = h(y, R + 1, S),
          Y = p(y, S, W);
        const ne = _(y.slice(W, Y));
        b[I] = ne;
      }
      A = S + 1;
    } while (A < T);
    return b;
  }
  function h(y, j, b) {
    do {
      const T = y.charCodeAt(j);
      if (T !== 32 && T !== 9) return j;
    } while (++j < b);
    return b;
  }
  function p(y, j, b) {
    for (; j > b; ) {
      const T = y.charCodeAt(--j);
      if (T !== 32 && T !== 9) return j + 1;
    }
    return b;
  }
  function g(y, j, b) {
    const T = (b == null ? void 0 : b.encode) || encodeURIComponent;
    if (!n.test(y)) throw new TypeError(`argument name is invalid: ${y}`);
    const _ = T(j);
    if (!i.test(_)) throw new TypeError(`argument val is invalid: ${j}`);
    let A = y + "=" + _;
    if (!b) return A;
    if (b.maxAge !== void 0) {
      if (!Number.isInteger(b.maxAge))
        throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);
      A += "; Max-Age=" + b.maxAge;
    }
    if (b.domain) {
      if (!a.test(b.domain))
        throw new TypeError(`option domain is invalid: ${b.domain}`);
      A += "; Domain=" + b.domain;
    }
    if (b.path) {
      if (!o.test(b.path))
        throw new TypeError(`option path is invalid: ${b.path}`);
      A += "; Path=" + b.path;
    }
    if (b.expires) {
      if (!P(b.expires) || !Number.isFinite(b.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${b.expires}`);
      A += "; Expires=" + b.expires.toUTCString();
    }
    if (
      (b.httpOnly && (A += "; HttpOnly"),
      b.secure && (A += "; Secure"),
      b.partitioned && (A += "; Partitioned"),
      b.priority)
    )
      switch (
        typeof b.priority == "string" ? b.priority.toLowerCase() : void 0
      ) {
        case "low":
          A += "; Priority=Low";
          break;
        case "medium":
          A += "; Priority=Medium";
          break;
        case "high":
          A += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${b.priority}`);
      }
    if (b.sameSite)
      switch (
        typeof b.sameSite == "string" ? b.sameSite.toLowerCase() : b.sameSite
      ) {
        case !0:
        case "strict":
          A += "; SameSite=Strict";
          break;
        case "lax":
          A += "; SameSite=Lax";
          break;
        case "none":
          A += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${b.sameSite}`);
      }
    return A;
  }
  function w(y) {
    if (y.indexOf("%") === -1) return y;
    try {
      return decodeURIComponent(y);
    } catch {
      return y;
    }
  }
  function P(y) {
    return l.call(y) === "[object Date]";
  }
  return Ti;
}
by();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var zm = "popstate";
function Sy(n = {}) {
  function i(o, l) {
    let { pathname: c, search: m, hash: h } = o.location;
    return Lu(
      "",
      { pathname: c, search: m, hash: h },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function a(o, l) {
    return typeof l == "string" ? l : Di(l);
  }
  return Ey(i, a, null, n);
}
function De(n, i) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(i);
}
function Dt(n, i) {
  if (!n) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function _y() {
  return Math.random().toString(36).substring(2, 10);
}
function Um(n, i) {
  return { usr: n.state, key: n.key, idx: i };
}
function Lu(n, i, a = null, o) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? Ar(i) : i),
    state: a,
    key: (i && i.key) || o || _y(),
  };
}
function Di({ pathname: n = "/", search: i = "", hash: a = "" }) {
  return (
    i && i !== "?" && (n += i.charAt(0) === "?" ? i : "?" + i),
    a && a !== "#" && (n += a.charAt(0) === "#" ? a : "#" + a),
    n
  );
}
function Ar(n) {
  let i = {};
  if (n) {
    let a = n.indexOf("#");
    a >= 0 && ((i.hash = n.substring(a)), (n = n.substring(0, a)));
    let o = n.indexOf("?");
    o >= 0 && ((i.search = n.substring(o)), (n = n.substring(0, o))),
      n && (i.pathname = n);
  }
  return i;
}
function Ey(n, i, a, o = {}) {
  let { window: l = document.defaultView, v5Compat: c = !1 } = o,
    m = l.history,
    h = "POP",
    p = null,
    g = w();
  g == null && ((g = 0), m.replaceState({ ...m.state, idx: g }, ""));
  function w() {
    return (m.state || { idx: null }).idx;
  }
  function P() {
    h = "POP";
    let _ = w(),
      A = _ == null ? null : _ - g;
    (g = _), p && p({ action: h, location: T.location, delta: A });
  }
  function y(_, A) {
    h = "PUSH";
    let R = Lu(T.location, _, A);
    g = w() + 1;
    let x = Um(R, g),
      S = T.createHref(R);
    try {
      m.pushState(x, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      l.location.assign(S);
    }
    c && p && p({ action: h, location: T.location, delta: 1 });
  }
  function j(_, A) {
    h = "REPLACE";
    let R = Lu(T.location, _, A);
    g = w();
    let x = Um(R, g),
      S = T.createHref(R);
    m.replaceState(x, "", S),
      c && p && p({ action: h, location: T.location, delta: 0 });
  }
  function b(_) {
    let A = l.location.origin !== "null" ? l.location.origin : l.location.href,
      R = typeof _ == "string" ? _ : Di(_);
    return (
      (R = R.replace(/ $/, "%20")),
      De(
        A,
        `No window.location.(origin|href) available to create URL for href: ${R}`
      ),
      new URL(R, A)
    );
  }
  let T = {
    get action() {
      return h;
    },
    get location() {
      return n(l, m);
    },
    listen(_) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(zm, P),
        (p = _),
        () => {
          l.removeEventListener(zm, P), (p = null);
        }
      );
    },
    createHref(_) {
      return i(l, _);
    },
    createURL: b,
    encodeLocation(_) {
      let A = b(_);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: y,
    replace: j,
    go(_) {
      return m.go(_);
    },
  };
  return T;
}
function Cp(n, i, a = "/") {
  return Ty(n, i, a, !1);
}
function Ty(n, i, a, o) {
  let l = typeof i == "string" ? Ar(i) : i,
    c = On(l.pathname || "/", a);
  if (c == null) return null;
  let m = kp(n);
  Py(m);
  let h = null;
  for (let p = 0; h == null && p < m.length; ++p) {
    let g = My(c);
    h = Dy(m[p], g, o);
  }
  return h;
}
function kp(n, i = [], a = [], o = "") {
  let l = (c, m, h) => {
    let p = {
      relativePath: h === void 0 ? c.path || "" : h,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: m,
      route: c,
    };
    p.relativePath.startsWith("/") &&
      (De(
        p.relativePath.startsWith(o),
        `Absolute route path "${p.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (p.relativePath = p.relativePath.slice(o.length)));
    let g = on([o, p.relativePath]),
      w = a.concat(p);
    c.children &&
      c.children.length > 0 &&
      (De(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      kp(c.children, i, w, g)),
      !(c.path == null && !c.index) &&
        i.push({ path: g, score: Ay(g, c.index), routesMeta: w });
  };
  return (
    n.forEach((c, m) => {
      var h;
      if (c.path === "" || !((h = c.path) != null && h.includes("?"))) l(c, m);
      else for (let p of Op(c.path)) l(c, m, p);
    }),
    i
  );
}
function Op(n) {
  let i = n.split("/");
  if (i.length === 0) return [];
  let [a, ...o] = i,
    l = a.endsWith("?"),
    c = a.replace(/\?$/, "");
  if (o.length === 0) return l ? [c, ""] : [c];
  let m = Op(o.join("/")),
    h = [];
  return (
    h.push(...m.map((p) => (p === "" ? c : [c, p].join("/")))),
    l && h.push(...m),
    h.map((p) => (n.startsWith("/") && p === "" ? "/" : p))
  );
}
function Py(n) {
  n.sort((i, a) =>
    i.score !== a.score
      ? a.score - i.score
      : Ry(
          i.routesMeta.map((o) => o.childrenIndex),
          a.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
var Ny = /^:[\w-]+$/,
  jy = 3,
  Cy = 2,
  ky = 1,
  Oy = 10,
  Iy = -2,
  Bm = (n) => n === "*";
function Ay(n, i) {
  let a = n.split("/"),
    o = a.length;
  return (
    a.some(Bm) && (o += Iy),
    i && (o += Cy),
    a
      .filter((l) => !Bm(l))
      .reduce((l, c) => l + (Ny.test(c) ? jy : c === "" ? ky : Oy), o)
  );
}
function Ry(n, i) {
  return n.length === i.length && n.slice(0, -1).every((o, l) => o === i[l])
    ? n[n.length - 1] - i[i.length - 1]
    : 0;
}
function Dy(n, i, a = !1) {
  let { routesMeta: o } = n,
    l = {},
    c = "/",
    m = [];
  for (let h = 0; h < o.length; ++h) {
    let p = o[h],
      g = h === o.length - 1,
      w = c === "/" ? i : i.slice(c.length) || "/",
      P = jo(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: g },
        w
      ),
      y = p.route;
    if (
      (!P &&
        g &&
        a &&
        !o[o.length - 1].route.index &&
        (P = jo(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          w
        )),
      !P)
    )
      return null;
    Object.assign(l, P.params),
      m.push({
        params: l,
        pathname: on([c, P.pathname]),
        pathnameBase: By(on([c, P.pathnameBase])),
        route: y,
      }),
      P.pathnameBase !== "/" && (c = on([c, P.pathnameBase]));
  }
  return m;
}
function jo(n, i) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [a, o] = Ly(n.path, n.caseSensitive, n.end),
    l = i.match(a);
  if (!l) return null;
  let c = l[0],
    m = c.replace(/(.)\/+$/, "$1"),
    h = l.slice(1);
  return {
    params: o.reduce((g, { paramName: w, isOptional: P }, y) => {
      if (w === "*") {
        let b = h[y] || "";
        m = c.slice(0, c.length - b.length).replace(/(.)\/+$/, "$1");
      }
      const j = h[y];
      return (
        P && !j ? (g[w] = void 0) : (g[w] = (j || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: c,
    pathnameBase: m,
    pattern: n,
  };
}
function Ly(n, i = !1, a = !0) {
  Dt(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let o = [],
    l =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (m, h, p) => (
            o.push({ paramName: h, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (l += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (l += "\\/*$")
      : n !== "" && n !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, i ? void 0 : "i"), o]
  );
}
function My(n) {
  try {
    return n
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      Dt(
        !1,
        `The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
      ),
      n
    );
  }
}
function On(n, i) {
  if (i === "/") return n;
  if (!n.toLowerCase().startsWith(i.toLowerCase())) return null;
  let a = i.endsWith("/") ? i.length - 1 : i.length,
    o = n.charAt(a);
  return o && o !== "/" ? null : n.slice(a) || "/";
}
function Fy(n, i = "/") {
  let {
    pathname: a,
    search: o = "",
    hash: l = "",
  } = typeof n == "string" ? Ar(n) : n;
  return {
    pathname: a ? (a.startsWith("/") ? a : zy(a, i)) : i,
    search: Wy(o),
    hash: $y(l),
  };
}
function zy(n, i) {
  let a = i.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((l) => {
      l === ".." ? a.length > 1 && a.pop() : l !== "." && a.push(l);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Zl(n, i, a, o) {
  return `Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Uy(n) {
  return n.filter(
    (i, a) => a === 0 || (i.route.path && i.route.path.length > 0)
  );
}
function cc(n) {
  let i = Uy(n);
  return i.map((a, o) => (o === i.length - 1 ? a.pathname : a.pathnameBase));
}
function dc(n, i, a, o = !1) {
  let l;
  typeof n == "string"
    ? (l = Ar(n))
    : ((l = { ...n }),
      De(
        !l.pathname || !l.pathname.includes("?"),
        Zl("?", "pathname", "search", l)
      ),
      De(
        !l.pathname || !l.pathname.includes("#"),
        Zl("#", "pathname", "hash", l)
      ),
      De(!l.search || !l.search.includes("#"), Zl("#", "search", "hash", l)));
  let c = n === "" || l.pathname === "",
    m = c ? "/" : l.pathname,
    h;
  if (m == null) h = a;
  else {
    let P = i.length - 1;
    if (!o && m.startsWith("..")) {
      let y = m.split("/");
      for (; y[0] === ".."; ) y.shift(), (P -= 1);
      l.pathname = y.join("/");
    }
    h = P >= 0 ? i[P] : "/";
  }
  let p = Fy(l, h),
    g = m && m !== "/" && m.endsWith("/"),
    w = (c || m === ".") && a.endsWith("/");
  return !p.pathname.endsWith("/") && (g || w) && (p.pathname += "/"), p;
}
var on = (n) => n.join("/").replace(/\/\/+/g, "/"),
  By = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Wy = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  $y = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function Vy(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
var Ip = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Ip);
var Hy = ["GET", ...Ip];
new Set(Hy);
var Rr = L.createContext(null);
Rr.displayName = "DataRouter";
var Lo = L.createContext(null);
Lo.displayName = "DataRouterState";
var Ap = L.createContext({ isTransitioning: !1 });
Ap.displayName = "ViewTransition";
var qy = L.createContext(new Map());
qy.displayName = "Fetchers";
var Yy = L.createContext(null);
Yy.displayName = "Await";
var Lt = L.createContext(null);
Lt.displayName = "Navigation";
var Ui = L.createContext(null);
Ui.displayName = "Location";
var Mt = L.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Mt.displayName = "Route";
var fc = L.createContext(null);
fc.displayName = "RouteError";
function Xy(n, { relative: i } = {}) {
  De(
    Dr(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: o } = L.useContext(Lt),
    { hash: l, pathname: c, search: m } = Bi(n, { relative: i }),
    h = c;
  return (
    a !== "/" && (h = c === "/" ? a : on([a, c])),
    o.createHref({ pathname: h, search: m, hash: l })
  );
}
function Dr() {
  return L.useContext(Ui) != null;
}
function Dn() {
  return (
    De(
      Dr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    L.useContext(Ui).location
  );
}
var Rp =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Dp(n) {
  L.useContext(Lt).static || L.useLayoutEffect(n);
}
function Mo() {
  let { isDataRoute: n } = L.useContext(Mt);
  return n ? u1() : Ky();
}
function Ky() {
  De(
    Dr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = L.useContext(Rr),
    { basename: i, navigator: a } = L.useContext(Lt),
    { matches: o } = L.useContext(Mt),
    { pathname: l } = Dn(),
    c = JSON.stringify(cc(o)),
    m = L.useRef(!1);
  return (
    Dp(() => {
      m.current = !0;
    }),
    L.useCallback(
      (p, g = {}) => {
        if ((Dt(m.current, Rp), !m.current)) return;
        if (typeof p == "number") {
          a.go(p);
          return;
        }
        let w = dc(p, JSON.parse(c), l, g.relative === "path");
        n == null &&
          i !== "/" &&
          (w.pathname = w.pathname === "/" ? i : on([i, w.pathname])),
          (g.replace ? a.replace : a.push)(w, g.state, g);
      },
      [i, a, c, l, n]
    )
  );
}
var Gy = L.createContext(null);
function Qy(n) {
  let i = L.useContext(Mt).outlet;
  return i && L.createElement(Gy.Provider, { value: n }, i);
}
function Bi(n, { relative: i } = {}) {
  let { matches: a } = L.useContext(Mt),
    { pathname: o } = Dn(),
    l = JSON.stringify(cc(a));
  return L.useMemo(() => dc(n, JSON.parse(l), o, i === "path"), [n, l, o, i]);
}
function Jy(n, i) {
  return Lp(n, i);
}
function Lp(n, i, a, o) {
  var A;
  De(
    Dr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l } = L.useContext(Lt),
    { matches: c } = L.useContext(Mt),
    m = c[c.length - 1],
    h = m ? m.params : {},
    p = m ? m.pathname : "/",
    g = m ? m.pathnameBase : "/",
    w = m && m.route;
  {
    let R = (w && w.path) || "";
    Mp(
      p,
      !w || R.endsWith("*") || R.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${
        R === "/" ? "*" : `${R}/*`
      }">.`
    );
  }
  let P = Dn(),
    y;
  if (i) {
    let R = typeof i == "string" ? Ar(i) : i;
    De(
      g === "/" || ((A = R.pathname) == null ? void 0 : A.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`
    ),
      (y = R);
  } else y = P;
  let j = y.pathname || "/",
    b = j;
  if (g !== "/") {
    let R = g.replace(/^\//, "").split("/");
    b = "/" + j.replace(/^\//, "").split("/").slice(R.length).join("/");
  }
  let T = Cp(n, { pathname: b });
  Dt(
    w || T != null,
    `No routes matched location "${y.pathname}${y.search}${y.hash}" `
  ),
    Dt(
      T == null ||
        T[T.length - 1].route.element !== void 0 ||
        T[T.length - 1].route.Component !== void 0 ||
        T[T.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let _ = r1(
    T &&
      T.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, h, R.params),
          pathname: on([
            g,
            l.encodeLocation
              ? l.encodeLocation(R.pathname).pathname
              : R.pathname,
          ]),
          pathnameBase:
            R.pathnameBase === "/"
              ? g
              : on([
                  g,
                  l.encodeLocation
                    ? l.encodeLocation(R.pathnameBase).pathname
                    : R.pathnameBase,
                ]),
        })
      ),
    c,
    a,
    o
  );
  return i && _
    ? L.createElement(
        Ui.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...y,
            },
            navigationType: "POP",
          },
        },
        _
      )
    : _;
}
function Zy() {
  let n = l1(),
    i = Vy(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    a = n instanceof Error ? n.stack : null,
    o = "rgba(200,200,200, 0.5)",
    l = { padding: "0.5rem", backgroundColor: o },
    c = { padding: "2px 4px", backgroundColor: o },
    m = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (m = L.createElement(
      L.Fragment,
      null,
      L.createElement("p", null, "💿 Hey developer 👋"),
      L.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        L.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        L.createElement("code", { style: c }, "errorElement"),
        " prop on your route."
      )
    )),
    L.createElement(
      L.Fragment,
      null,
      L.createElement("h2", null, "Unexpected Application Error!"),
      L.createElement("h3", { style: { fontStyle: "italic" } }, i),
      a ? L.createElement("pre", { style: l }, a) : null,
      m
    )
  );
}
var e1 = L.createElement(Zy, null),
  t1 = class extends L.Component {
    constructor(n) {
      super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, i) {
      return i.location !== n.location ||
        (i.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : i.error,
            location: i.location,
            revalidation: n.revalidation || i.revalidation,
          };
    }
    componentDidCatch(n, i) {
      console.error(
        "React Router caught the following error during render",
        n,
        i
      );
    }
    render() {
      return this.state.error !== void 0
        ? L.createElement(
            Mt.Provider,
            { value: this.props.routeContext },
            L.createElement(fc.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function n1({ routeContext: n, match: i, children: a }) {
  let o = L.useContext(Rr);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = i.route.id),
    L.createElement(Mt.Provider, { value: n }, a)
  );
}
function r1(n, i = [], a = null, o = null) {
  if (n == null) {
    if (!a) return null;
    if (a.errors) n = a.matches;
    else if (i.length === 0 && !a.initialized && a.matches.length > 0)
      n = a.matches;
    else return null;
  }
  let l = n,
    c = a == null ? void 0 : a.errors;
  if (c != null) {
    let p = l.findIndex(
      (g) => g.route.id && (c == null ? void 0 : c[g.route.id]) !== void 0
    );
    De(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        c
      ).join(",")}`
    ),
      (l = l.slice(0, Math.min(l.length, p + 1)));
  }
  let m = !1,
    h = -1;
  if (a)
    for (let p = 0; p < l.length; p++) {
      let g = l[p];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = p),
        g.route.id)
      ) {
        let { loaderData: w, errors: P } = a,
          y =
            g.route.loader &&
            !w.hasOwnProperty(g.route.id) &&
            (!P || P[g.route.id] === void 0);
        if (g.route.lazy || y) {
          (m = !0), h >= 0 ? (l = l.slice(0, h + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((p, g, w) => {
    let P,
      y = !1,
      j = null,
      b = null;
    a &&
      ((P = c && g.route.id ? c[g.route.id] : void 0),
      (j = g.route.errorElement || e1),
      m &&
        (h < 0 && w === 0
          ? (Mp(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (y = !0),
            (b = null))
          : h === w &&
            ((y = !0), (b = g.route.hydrateFallbackElement || null))));
    let T = i.concat(l.slice(0, w + 1)),
      _ = () => {
        let A;
        return (
          P
            ? (A = j)
            : y
            ? (A = b)
            : g.route.Component
            ? (A = L.createElement(g.route.Component, null))
            : g.route.element
            ? (A = g.route.element)
            : (A = p),
          L.createElement(n1, {
            match: g,
            routeContext: { outlet: p, matches: T, isDataRoute: a != null },
            children: A,
          })
        );
      };
    return a && (g.route.ErrorBoundary || g.route.errorElement || w === 0)
      ? L.createElement(t1, {
          location: a.location,
          revalidation: a.revalidation,
          component: j,
          error: P,
          children: _(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
        })
      : _();
  }, null);
}
function mc(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function i1(n) {
  let i = L.useContext(Rr);
  return De(i, mc(n)), i;
}
function a1(n) {
  let i = L.useContext(Lo);
  return De(i, mc(n)), i;
}
function o1(n) {
  let i = L.useContext(Mt);
  return De(i, mc(n)), i;
}
function hc(n) {
  let i = o1(n),
    a = i.matches[i.matches.length - 1];
  return (
    De(
      a.route.id,
      `${n} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function s1() {
  return hc("useRouteId");
}
function l1() {
  var o;
  let n = L.useContext(fc),
    i = a1("useRouteError"),
    a = hc("useRouteError");
  return n !== void 0 ? n : (o = i.errors) == null ? void 0 : o[a];
}
function u1() {
  let { router: n } = i1("useNavigate"),
    i = hc("useNavigate"),
    a = L.useRef(!1);
  return (
    Dp(() => {
      a.current = !0;
    }),
    L.useCallback(
      async (l, c = {}) => {
        Dt(a.current, Rp),
          a.current &&
            (typeof l == "number"
              ? n.navigate(l)
              : await n.navigate(l, { fromRouteId: i, ...c }));
      },
      [n, i]
    )
  );
}
var Wm = {};
function Mp(n, i, a) {
  !i && !Wm[n] && ((Wm[n] = !0), Dt(!1, a));
}
L.memo(c1);
function c1({ routes: n, future: i, state: a }) {
  return Lp(n, void 0, a, i);
}
function d1({ to: n, replace: i, state: a, relative: o }) {
  De(
    Dr(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: l } = L.useContext(Lt);
  Dt(
    !l,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: c } = L.useContext(Mt),
    { pathname: m } = Dn(),
    h = Mo(),
    p = dc(n, cc(c), m, o === "path"),
    g = JSON.stringify(p);
  return (
    L.useEffect(() => {
      h(JSON.parse(g), { replace: i, state: a, relative: o });
    }, [h, g, o, i, a]),
    null
  );
}
function f1(n) {
  return Qy(n.context);
}
function tt(n) {
  De(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function m1({
  basename: n = "/",
  children: i = null,
  location: a,
  navigationType: o = "POP",
  navigator: l,
  static: c = !1,
}) {
  De(
    !Dr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let m = n.replace(/^\/*/, "/"),
    h = L.useMemo(
      () => ({ basename: m, navigator: l, static: c, future: {} }),
      [m, l, c]
    );
  typeof a == "string" && (a = Ar(a));
  let {
      pathname: p = "/",
      search: g = "",
      hash: w = "",
      state: P = null,
      key: y = "default",
    } = a,
    j = L.useMemo(() => {
      let b = On(p, m);
      return b == null
        ? null
        : {
            location: { pathname: b, search: g, hash: w, state: P, key: y },
            navigationType: o,
          };
    }, [m, p, g, w, P, y, o]);
  return (
    Dt(
      j != null,
      `<Router basename="${m}"> is not able to match the URL "${p}${g}${w}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    j == null
      ? null
      : L.createElement(
          Lt.Provider,
          { value: h },
          L.createElement(Ui.Provider, { children: i, value: j })
        )
  );
}
function $m({ children: n, location: i }) {
  return Jy(Mu(n), i);
}
function Mu(n, i = []) {
  let a = [];
  return (
    L.Children.forEach(n, (o, l) => {
      if (!L.isValidElement(o)) return;
      let c = [...i, l];
      if (o.type === L.Fragment) {
        a.push.apply(a, Mu(o.props.children, c));
        return;
      }
      De(
        o.type === tt,
        `[${
          typeof o.type == "string" ? o.type : o.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        De(
          !o.props.index || !o.props.children,
          "An index route cannot have child routes."
        );
      let m = {
        id: o.props.id || c.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        loader: o.props.loader,
        action: o.props.action,
        hydrateFallbackElement: o.props.hydrateFallbackElement,
        HydrateFallback: o.props.HydrateFallback,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.hasErrorBoundary === !0 ||
          o.props.ErrorBoundary != null ||
          o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      o.props.children && (m.children = Mu(o.props.children, c)), a.push(m);
    }),
    a
  );
}
var bo = "get",
  So = "application/x-www-form-urlencoded";
function Fo(n) {
  return n != null && typeof n.tagName == "string";
}
function h1(n) {
  return Fo(n) && n.tagName.toLowerCase() === "button";
}
function p1(n) {
  return Fo(n) && n.tagName.toLowerCase() === "form";
}
function g1(n) {
  return Fo(n) && n.tagName.toLowerCase() === "input";
}
function v1(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function y1(n, i) {
  return n.button === 0 && (!i || i === "_self") && !v1(n);
}
var ao = null;
function x1() {
  if (ao === null)
    try {
      new FormData(document.createElement("form"), 0), (ao = !1);
    } catch {
      ao = !0;
    }
  return ao;
}
var w1 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function eu(n) {
  return n != null && !w1.has(n)
    ? (Dt(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${So}"`
      ),
      null)
    : n;
}
function b1(n, i) {
  let a, o, l, c, m;
  if (p1(n)) {
    let h = n.getAttribute("action");
    (o = h ? On(h, i) : null),
      (a = n.getAttribute("method") || bo),
      (l = eu(n.getAttribute("enctype")) || So),
      (c = new FormData(n));
  } else if (h1(n) || (g1(n) && (n.type === "submit" || n.type === "image"))) {
    let h = n.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = n.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((o = p ? On(p, i) : null),
      (a = n.getAttribute("formmethod") || h.getAttribute("method") || bo),
      (l =
        eu(n.getAttribute("formenctype")) ||
        eu(h.getAttribute("enctype")) ||
        So),
      (c = new FormData(h, n)),
      !x1())
    ) {
      let { name: g, type: w, value: P } = n;
      if (w === "image") {
        let y = g ? `${g}.` : "";
        c.append(`${y}x`, "0"), c.append(`${y}y`, "0");
      } else g && c.append(g, P);
    }
  } else {
    if (Fo(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = bo), (o = null), (l = So), (m = n);
  }
  return (
    c && l === "text/plain" && ((m = c), (c = void 0)),
    { action: o, method: a.toLowerCase(), encType: l, formData: c, body: m }
  );
}
function pc(n, i) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(i);
}
async function S1(n, i) {
  if (n.id in i) return i[n.id];
  try {
    let a = await import(n.module);
    return (i[n.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function _1(n) {
  return n == null
    ? !1
    : n.href == null
    ? n.rel === "preload" &&
      typeof n.imageSrcSet == "string" &&
      typeof n.imageSizes == "string"
    : typeof n.rel == "string" && typeof n.href == "string";
}
async function E1(n, i, a) {
  let o = await Promise.all(
    n.map(async (l) => {
      let c = i.routes[l.route.id];
      if (c) {
        let m = await S1(c, a);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return j1(
    o
      .flat(1)
      .filter(_1)
      .filter((l) => l.rel === "stylesheet" || l.rel === "preload")
      .map((l) =>
        l.rel === "stylesheet"
          ? { ...l, rel: "prefetch", as: "style" }
          : { ...l, rel: "prefetch" }
      )
  );
}
function Vm(n, i, a, o, l, c) {
  let m = (p, g) => (a[g] ? p.route.id !== a[g].route.id : !0),
    h = (p, g) => {
      var w;
      return (
        a[g].pathname !== p.pathname ||
        (((w = a[g].route.path) == null ? void 0 : w.endsWith("*")) &&
          a[g].params["*"] !== p.params["*"])
      );
    };
  return c === "assets"
    ? i.filter((p, g) => m(p, g) || h(p, g))
    : c === "data"
    ? i.filter((p, g) => {
        var P;
        let w = o.routes[p.route.id];
        if (!w || !w.hasLoader) return !1;
        if (m(p, g) || h(p, g)) return !0;
        if (p.route.shouldRevalidate) {
          let y = p.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams: ((P = a[0]) == null ? void 0 : P.params) || {},
            nextUrl: new URL(n, window.origin),
            nextParams: p.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof y == "boolean") return y;
        }
        return !0;
      })
    : [];
}
function T1(n, i) {
  return P1(
    n
      .map((a) => {
        let o = i.routes[a.route.id];
        if (!o) return [];
        let l = [o.module];
        return o.imports && (l = l.concat(o.imports)), l;
      })
      .flat(1)
  );
}
function P1(n) {
  return [...new Set(n)];
}
function N1(n) {
  let i = {},
    a = Object.keys(n).sort();
  for (let o of a) i[o] = n[o];
  return i;
}
function j1(n, i) {
  let a = new Set();
  return (
    new Set(i),
    n.reduce((o, l) => {
      let c = JSON.stringify(N1(l));
      return a.has(c) || (a.add(c), o.push({ key: c, link: l })), o;
    }, [])
  );
}
function C1(n) {
  let i =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : n;
  return (
    i.pathname === "/"
      ? (i.pathname = "_root.data")
      : (i.pathname = `${i.pathname.replace(/\/$/, "")}.data`),
    i
  );
}
function k1() {
  let n = L.useContext(Rr);
  return (
    pc(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    n
  );
}
function O1() {
  let n = L.useContext(Lo);
  return (
    pc(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    n
  );
}
var gc = L.createContext(void 0);
gc.displayName = "FrameworkContext";
function Fp() {
  let n = L.useContext(gc);
  return (
    pc(n, "You must render this element inside a <HydratedRouter> element"), n
  );
}
function I1(n, i) {
  let a = L.useContext(gc),
    [o, l] = L.useState(!1),
    [c, m] = L.useState(!1),
    {
      onFocus: h,
      onBlur: p,
      onMouseEnter: g,
      onMouseLeave: w,
      onTouchStart: P,
    } = i,
    y = L.useRef(null);
  L.useEffect(() => {
    if ((n === "render" && m(!0), n === "viewport")) {
      let T = (A) => {
          A.forEach((R) => {
            m(R.isIntersecting);
          });
        },
        _ = new IntersectionObserver(T, { threshold: 0.5 });
      return (
        y.current && _.observe(y.current),
        () => {
          _.disconnect();
        }
      );
    }
  }, [n]),
    L.useEffect(() => {
      if (o) {
        let T = setTimeout(() => {
          m(!0);
        }, 100);
        return () => {
          clearTimeout(T);
        };
      }
    }, [o]);
  let j = () => {
      l(!0);
    },
    b = () => {
      l(!1), m(!1);
    };
  return a
    ? n !== "intent"
      ? [c, y, {}]
      : [
          c,
          y,
          {
            onFocus: Pi(h, j),
            onBlur: Pi(p, b),
            onMouseEnter: Pi(g, j),
            onMouseLeave: Pi(w, b),
            onTouchStart: Pi(P, j),
          },
        ]
    : [!1, y, {}];
}
function Pi(n, i) {
  return (a) => {
    n && n(a), a.defaultPrevented || i(a);
  };
}
function A1({ page: n, ...i }) {
  let { router: a } = k1(),
    o = L.useMemo(() => Cp(a.routes, n, a.basename), [a.routes, n, a.basename]);
  return o
    ? L.createElement(D1, { page: n, matches: o, ...i })
    : (console.warn(`Tried to prefetch ${n} but no routes matched.`), null);
}
function R1(n) {
  let { manifest: i, routeModules: a } = Fp(),
    [o, l] = L.useState([]);
  return (
    L.useEffect(() => {
      let c = !1;
      return (
        E1(n, i, a).then((m) => {
          c || l(m);
        }),
        () => {
          c = !0;
        }
      );
    }, [n, i, a]),
    o
  );
}
function D1({ page: n, matches: i, ...a }) {
  let o = Dn(),
    { manifest: l, routeModules: c } = Fp(),
    { loaderData: m, matches: h } = O1(),
    p = L.useMemo(() => Vm(n, i, h, l, o, "data"), [n, i, h, l, o]),
    g = L.useMemo(() => Vm(n, i, h, l, o, "assets"), [n, i, h, l, o]),
    w = L.useMemo(() => {
      if (n === o.pathname + o.search + o.hash) return [];
      let j = new Set(),
        b = !1;
      if (
        (i.forEach((_) => {
          var R;
          let A = l.routes[_.route.id];
          !A ||
            !A.hasLoader ||
            ((!p.some((x) => x.route.id === _.route.id) &&
              _.route.id in m &&
              (R = c[_.route.id]) != null &&
              R.shouldRevalidate) ||
            A.hasClientLoader
              ? (b = !0)
              : j.add(_.route.id));
        }),
        j.size === 0)
      )
        return [];
      let T = C1(n);
      return (
        b &&
          j.size > 0 &&
          T.searchParams.set(
            "_routes",
            i
              .filter((_) => j.has(_.route.id))
              .map((_) => _.route.id)
              .join(",")
          ),
        [T.pathname + T.search]
      );
    }, [m, o, l, p, i, n, c]),
    P = L.useMemo(() => T1(g, l), [g, l]),
    y = R1(g);
  return L.createElement(
    L.Fragment,
    null,
    w.map((j) =>
      L.createElement("link", {
        key: j,
        rel: "prefetch",
        as: "fetch",
        href: j,
        ...a,
      })
    ),
    P.map((j) =>
      L.createElement("link", { key: j, rel: "modulepreload", href: j, ...a })
    ),
    y.map(({ key: j, link: b }) => L.createElement("link", { key: j, ...b }))
  );
}
function L1(...n) {
  return (i) => {
    n.forEach((a) => {
      typeof a == "function" ? a(i) : a != null && (a.current = i);
    });
  };
}
var zp =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  zp && (window.__reactRouterVersion = "7.0.2");
} catch {}
function M1({ basename: n, children: i, window: a }) {
  let o = L.useRef();
  o.current == null && (o.current = Sy({ window: a, v5Compat: !0 }));
  let l = o.current,
    [c, m] = L.useState({ action: l.action, location: l.location }),
    h = L.useCallback(
      (p) => {
        L.startTransition(() => m(p));
      },
      [m]
    );
  return (
    L.useLayoutEffect(() => l.listen(h), [l, h]),
    L.createElement(m1, {
      basename: n,
      children: i,
      location: c.location,
      navigationType: c.action,
      navigator: l,
    })
  );
}
var Up = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  zo = L.forwardRef(function (
    {
      onClick: i,
      discover: a = "render",
      prefetch: o = "none",
      relative: l,
      reloadDocument: c,
      replace: m,
      state: h,
      target: p,
      to: g,
      preventScrollReset: w,
      viewTransition: P,
      ...y
    },
    j
  ) {
    let { basename: b } = L.useContext(Lt),
      T = typeof g == "string" && Up.test(g),
      _,
      A = !1;
    if (typeof g == "string" && T && ((_ = g), zp))
      try {
        let Y = new URL(window.location.href),
          ne = g.startsWith("//") ? new URL(Y.protocol + g) : new URL(g),
          te = On(ne.pathname, b);
        ne.origin === Y.origin && te != null
          ? (g = te + ne.search + ne.hash)
          : (A = !0);
      } catch {
        Dt(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let R = Xy(g, { relative: l }),
      [x, S, E] = I1(o, y),
      k = U1(g, {
        replace: m,
        state: h,
        target: p,
        preventScrollReset: w,
        relative: l,
        viewTransition: P,
      });
    function I(Y) {
      i && i(Y), Y.defaultPrevented || k(Y);
    }
    let W = L.createElement("a", {
      ...y,
      ...E,
      href: _ || R,
      onClick: A || c ? i : I,
      ref: L1(j, S),
      target: p,
      "data-discover": !T && a === "render" ? "true" : void 0,
    });
    return x && !T
      ? L.createElement(L.Fragment, null, W, L.createElement(A1, { page: R }))
      : W;
  });
zo.displayName = "Link";
var Xe = L.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: a = !1,
    className: o = "",
    end: l = !1,
    style: c,
    to: m,
    viewTransition: h,
    children: p,
    ...g
  },
  w
) {
  let P = Bi(m, { relative: g.relative }),
    y = Dn(),
    j = L.useContext(Lo),
    { navigator: b, basename: T } = L.useContext(Lt),
    _ = j != null && H1(P) && h === !0,
    A = b.encodeLocation ? b.encodeLocation(P).pathname : P.pathname,
    R = y.pathname,
    x =
      j && j.navigation && j.navigation.location
        ? j.navigation.location.pathname
        : null;
  a ||
    ((R = R.toLowerCase()),
    (x = x ? x.toLowerCase() : null),
    (A = A.toLowerCase())),
    x && T && (x = On(x, T) || x);
  const S = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
  let E = R === A || (!l && R.startsWith(A) && R.charAt(S) === "/"),
    k =
      x != null &&
      (x === A || (!l && x.startsWith(A) && x.charAt(A.length) === "/")),
    I = { isActive: E, isPending: k, isTransitioning: _ },
    W = E ? i : void 0,
    Y;
  typeof o == "function"
    ? (Y = o(I))
    : (Y = [
        o,
        E ? "active" : null,
        k ? "pending" : null,
        _ ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ne = typeof c == "function" ? c(I) : c;
  return L.createElement(
    zo,
    {
      ...g,
      "aria-current": W,
      className: Y,
      ref: w,
      style: ne,
      to: m,
      viewTransition: h,
    },
    typeof p == "function" ? p(I) : p
  );
});
Xe.displayName = "NavLink";
var F1 = L.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: i,
      navigate: a,
      reloadDocument: o,
      replace: l,
      state: c,
      method: m = bo,
      action: h,
      onSubmit: p,
      relative: g,
      preventScrollReset: w,
      viewTransition: P,
      ...y
    },
    j
  ) => {
    let b = $1(),
      T = V1(h, { relative: g }),
      _ = m.toLowerCase() === "get" ? "get" : "post",
      A = typeof h == "string" && Up.test(h),
      R = (x) => {
        if ((p && p(x), x.defaultPrevented)) return;
        x.preventDefault();
        let S = x.nativeEvent.submitter,
          E = (S == null ? void 0 : S.getAttribute("formmethod")) || m;
        b(S || x.currentTarget, {
          fetcherKey: i,
          method: E,
          navigate: a,
          replace: l,
          state: c,
          relative: g,
          preventScrollReset: w,
          viewTransition: P,
        });
      };
    return L.createElement("form", {
      ref: j,
      method: _,
      action: T,
      onSubmit: o ? p : R,
      ...y,
      "data-discover": !A && n === "render" ? "true" : void 0,
    });
  }
);
F1.displayName = "Form";
function z1(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bp(n) {
  let i = L.useContext(Rr);
  return De(i, z1(n)), i;
}
function U1(
  n,
  {
    target: i,
    replace: a,
    state: o,
    preventScrollReset: l,
    relative: c,
    viewTransition: m,
  } = {}
) {
  let h = Mo(),
    p = Dn(),
    g = Bi(n, { relative: c });
  return L.useCallback(
    (w) => {
      if (y1(w, i)) {
        w.preventDefault();
        let P = a !== void 0 ? a : Di(p) === Di(g);
        h(n, {
          replace: P,
          state: o,
          preventScrollReset: l,
          relative: c,
          viewTransition: m,
        });
      }
    },
    [p, h, g, a, o, i, n, l, c, m]
  );
}
var B1 = 0,
  W1 = () => `__${String(++B1)}__`;
function $1() {
  let { router: n } = Bp("useSubmit"),
    { basename: i } = L.useContext(Lt),
    a = s1();
  return L.useCallback(
    async (o, l = {}) => {
      let { action: c, method: m, encType: h, formData: p, body: g } = b1(o, i);
      if (l.navigate === !1) {
        let w = l.fetcherKey || W1();
        await n.fetch(w, a, l.action || c, {
          preventScrollReset: l.preventScrollReset,
          formData: p,
          body: g,
          formMethod: l.method || m,
          formEncType: l.encType || h,
          flushSync: l.flushSync,
        });
      } else
        await n.navigate(l.action || c, {
          preventScrollReset: l.preventScrollReset,
          formData: p,
          body: g,
          formMethod: l.method || m,
          formEncType: l.encType || h,
          replace: l.replace,
          state: l.state,
          fromRouteId: a,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition,
        });
    },
    [n, i, a]
  );
}
function V1(n, { relative: i } = {}) {
  let { basename: a } = L.useContext(Lt),
    o = L.useContext(Mt);
  De(o, "useFormAction must be used inside a RouteContext");
  let [l] = o.matches.slice(-1),
    c = { ...Bi(n || ".", { relative: i }) },
    m = Dn();
  if (n == null) {
    c.search = m.search;
    let h = new URLSearchParams(c.search),
      p = h.getAll("index");
    if (p.some((w) => w === "")) {
      h.delete("index"),
        p.filter((P) => P).forEach((P) => h.append("index", P));
      let w = h.toString();
      c.search = w ? `?${w}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      l.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (c.pathname = c.pathname === "/" ? a : on([a, c.pathname])),
    Di(c)
  );
}
function H1(n, i = {}) {
  let a = L.useContext(Ap);
  De(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Bp("useViewTransitionState"),
    l = Bi(n, { relative: i.relative });
  if (!a.isTransitioning) return !1;
  let c = On(a.currentLocation.pathname, o) || a.currentLocation.pathname,
    m = On(a.nextLocation.pathname, o) || a.nextLocation.pathname;
  return jo(l.pathname, m) != null || jo(l.pathname, c) != null;
}
new TextEncoder();
function q1() {
  return d.jsx(d.Fragment, {
    children: d.jsx("div", {
      className: "h-[75vh] w-[100%]",
      children: d.jsx("iframe", {
        className: "h-[100%] w-[100%]",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4037587653092!2d77.24814681073335!3d28.55763607560438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03380c261ff7%3A0x5ee866df4272251c!2sDestination%20Wedding%20Planners%20in%20Delhi%20%7C%20Vision%20Vivaah!5e0!3m2!1sen!2sin!4v1733279595778!5m2!1sen!2sin",
        allowFullScreen: !0,
        referrerPolicy: "no-referrer-when-downgrade",
      }),
    }),
  });
}
var Wp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Hm = an.createContext && an.createContext(Wp),
  Y1 = ["attr", "size", "title"];
function X1(n, i) {
  if (n == null) return {};
  var a = K1(n, i),
    o,
    l;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (l = 0; l < c.length; l++)
      (o = c[l]),
        !(i.indexOf(o) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, o) &&
          (a[o] = n[o]);
  }
  return a;
}
function K1(n, i) {
  if (n == null) return {};
  var a = {};
  for (var o in n)
    if (Object.prototype.hasOwnProperty.call(n, o)) {
      if (i.indexOf(o) >= 0) continue;
      a[o] = n[o];
    }
  return a;
}
function Co() {
  return (
    (Co = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var i = 1; i < arguments.length; i++) {
            var a = arguments[i];
            for (var o in a)
              Object.prototype.hasOwnProperty.call(a, o) && (n[o] = a[o]);
          }
          return n;
        }),
    Co.apply(this, arguments)
  );
}
function qm(n, i) {
  var a = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    i &&
      (o = o.filter(function (l) {
        return Object.getOwnPropertyDescriptor(n, l).enumerable;
      })),
      a.push.apply(a, o);
  }
  return a;
}
function ko(n) {
  for (var i = 1; i < arguments.length; i++) {
    var a = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? qm(Object(a), !0).forEach(function (o) {
          G1(n, o, a[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
      : qm(Object(a)).forEach(function (o) {
          Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(a, o));
        });
  }
  return n;
}
function G1(n, i, a) {
  return (
    (i = Q1(i)),
    i in n
      ? Object.defineProperty(n, i, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[i] = a),
    n
  );
}
function Q1(n) {
  var i = J1(n, "string");
  return typeof i == "symbol" ? i : i + "";
}
function J1(n, i) {
  if (typeof n != "object" || !n) return n;
  var a = n[Symbol.toPrimitive];
  if (a !== void 0) {
    var o = a.call(n, i || "default");
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(n);
}
function $p(n) {
  return (
    n &&
    n.map((i, a) =>
      an.createElement(i.tag, ko({ key: a }, i.attr), $p(i.child))
    )
  );
}
function Uo(n) {
  return (i) =>
    an.createElement(Z1, Co({ attr: ko({}, n.attr) }, i), $p(n.child));
}
function Z1(n) {
  var i = (a) => {
    var { attr: o, size: l, title: c } = n,
      m = X1(n, Y1),
      h = l || a.size || "1em",
      p;
    return (
      a.className && (p = a.className),
      n.className && (p = (p ? p + " " : "") + n.className),
      an.createElement(
        "svg",
        Co(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          a.attr,
          o,
          m,
          {
            className: p,
            style: ko(ko({ color: n.color || a.color }, a.style), n.style),
            height: h,
            width: h,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        c && an.createElement("title", null, c),
        n.children
      )
    );
  };
  return Hm !== void 0
    ? an.createElement(Hm.Consumer, null, (a) => i(a))
    : i(Wp);
}
function Vp(n) {
  return Uo({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        },
        child: [],
      },
      { tag: "path", attr: { d: "M14.05 2a9 9 0 0 1 8 7.94" }, child: [] },
      { tag: "path", attr: { d: "M14.05 6A5 5 0 0 1 18 10" }, child: [] },
    ],
  })(n);
}
function Hp(n) {
  return Uo({
    tag: "svg",
    attr: { version: "1.1", viewBox: "0 0 17 17" },
    child: [
      { tag: "g", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z",
        },
        child: [],
      },
    ],
  })(n);
}
function qp(n) {
  return Uo({
    tag: "svg",
    attr: { viewBox: "0 0 256 256", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z",
          opacity: "0.2",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z",
        },
        child: [],
      },
    ],
  })(n);
}
const ex = () => {
    const [n, i] = L.useState({
        name: "",
        email: "",
        mobile: "",
        city: "",
        message: "",
      }),
      a = (l) => {
        i({ ...n, [l.target.name]: l.target.value });
      },
      o = (l) => {
        l.preventDefault(),
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(n),
          })
            .then((c) => c.json())
            .then(() => {
              alert("Data saved successfully!"),
                i({ name: "", email: "", mobile: "", city: "", message: "" });
            });
      };
    return d.jsx(d.Fragment, {
      children: d.jsx("div", {
        className: "w-[100%] h-[180vh]  -mb-4",
        children: d.jsxs("div", {
          className: "relative bg-cover bg-center h-[100%]",
          style: {
            backgroundImage:
              "url('https://www.visionvivaah.com/argon/img/contactus.jpg')",
          },
          children: [
            d.jsx("div", {
              className: "absolute inset-0 bg-sky-900 bg-opacity-60",
            }),
            d.jsx("h1", {
              className:
                "destination-titles font-extrabold text-center text-5xl text-white relative pt-24",
              children: "Contact us",
            }),
            d.jsxs("div", {
              className: "flex",
              children: [
                d.jsx("p", {
                  className:
                    "ml-[44.5%] w-36 border-4 relative border-red-600 mt-4",
                }),
                d.jsx("p", {
                  className: "border-4 ml-1 w-1 relative border-black mt-4",
                }),
                d.jsx("p", {
                  className: "border-4 w-1 ml-1 border-black mt-4",
                }),
              ],
            }),
            d.jsx("div", {
              children: d.jsx("h2", {
                className:
                  "relative text-white text-lg font-semibold text-center pt-4",
                children: "We Look Forward To Hearing From You",
              }),
            }),
            d.jsxs("div", {
              className: "flex mt-16 relative",
              children: [
                d.jsx("div", {
                  className: "w-[50%] h-[120vh] relative ml-16",
                  children: d.jsxs("form", {
                    onSubmit: o,
                    className: "space-y-4 p-6 rounded-lg",
                    children: [
                      d.jsxs("div", {
                        children: [
                          d.jsx("label", {
                            htmlFor: "name",
                            className: "block text-white text-xl font-semibold",
                            children: "Name:",
                          }),
                          d.jsx("input", {
                            type: "text",
                            id: "name",
                            name: "name",
                            value: n.name,
                            onChange: a,
                            placeholder: "Enter your name",
                            required: !0,
                            className:
                              "border-2 bg-transparent border-white rounded w-full p-2",
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        children: [
                          d.jsx("label", {
                            htmlFor: "email",
                            className: "block text-white text-xl font-semibold",
                            children: "Email:",
                          }),
                          d.jsx("input", {
                            type: "email",
                            id: "email",
                            name: "email",
                            value: n.email,
                            onChange: a,
                            placeholder: "Enter your email",
                            required: !0,
                            className:
                              "border-2 bg-transparent border-white rounded w-full p-2",
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        children: [
                          d.jsx("label", {
                            htmlFor: "mobile",
                            className: "block text-white text-xl font-semibold",
                            children: "Mobile:",
                          }),
                          d.jsx("input", {
                            type: "tel",
                            id: "mobile",
                            name: "mobile",
                            value: n.mobile,
                            onChange: a,
                            placeholder: "Enter your mobile number",
                            pattern: "[0-9]{10}",
                            required: !0,
                            className:
                              "border-2 bg-transparent border-white rounded w-full p-2",
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        children: [
                          d.jsx("label", {
                            htmlFor: "city",
                            className: "block text-white text-xl font-semibold",
                            children: "City:",
                          }),
                          d.jsx("input", {
                            type: "text",
                            id: "city",
                            name: "city",
                            value: n.city,
                            onChange: a,
                            placeholder: "Enter your city",
                            required: !0,
                            className:
                              "border-2 bg-transparent border-white rounded w-full p-2",
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        children: [
                          d.jsx("label", {
                            htmlFor: "message",
                            className: "block text-white text-xl font-semibold",
                            children: "Message:",
                          }),
                          d.jsx("textarea", {
                            id: "message",
                            name: "message",
                            value: n.message,
                            onChange: a,
                            placeholder: "Type your message here",
                            rows: "4",
                            required: !0,
                            className:
                              "border-2 bg-transparent border-white rounded w-full p-2",
                          }),
                        ],
                      }),
                      d.jsx("button", {
                        type: "submit",
                        className:
                          "text-white p-3 text-xl w-full rounded-3xl bg-red-600 hover:bg-blue-700 hover:border-4 border-sky-500",
                        children: "SEND NOW",
                      }),
                    ],
                  }),
                }),
                d.jsxs("div", {
                  className: "w-[45%] h-[100vh] ml-20 relative text-white",
                  children: [
                    d.jsx(Vp, { className: "text-3xl mt-12 ml-64" }),
                    d.jsxs("p", {
                      className: "text-center mt-2 text-md",
                      children: [
                        "+91-8266000652",
                        d.jsx("br", {}),
                        "+91-8077320515",
                      ],
                    }),
                    d.jsx(Hp, { className: "text-3xl mt-24 ml-64" }),
                    d.jsx("p", {
                      className: "text-center mt-2 text-md",
                      children: "lifeevents001@gmail.com",
                    }),
                    d.jsx(qp, { className: "text-4xl mt-24 ml-64" }),
                    d.jsxs("p", {
                      className: "mt-2 text-sm text-center",
                      children: [
                        "Life Events,",
                        d.jsx("br", {}),
                        "220/4 Nehru Nagar, GarhRoad, Meerut",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Yp = "/assets/logo-CV9jPwVb.png";
function tx() {
  return d.jsx(d.Fragment, {
    children: d.jsxs("div", {
      className: "flex justify-center h-[15vh] w-[100%] gap-40  pr-2",
      style: { backgroundColor: "var(--deepblue)", color: "var(--yellow)" },
      children: [
        d.jsx("div", {
          children: d.jsxs("ul", {
            className: "flex  gap-7 text-lg text-white p-4 mt-2 ",
            style: { color: "var(--yellow)" },
            children: [
              d.jsx("li", {
                children: d.jsx(Xe, { to: "/", children: "Home" }),
              }),
              d.jsx("li", {
                children: d.jsx(Xe, { to: "./about-us", children: "About Us" }),
              }),
              d.jsx("li", {
                children: d.jsx(Xe, { to: "./services", children: "Services" }),
              }),
              d.jsx("li", { children: d.jsx(Xe, { to: "./blog" }) }),
            ],
          }),
        }),
        d.jsxs("div", {
          children: [
            "   ",
            d.jsx(Xe, {
              to: "./login",
              children: d.jsx("img", {
                src: Yp,
                alt: "",
                className: "h-[10vh] w-[20vh] font-extrabold  mt-3",
              }),
            }),
            " ",
          ],
        }),
        d.jsx("div", {
          children: d.jsxs("ul", {
            className: "flex text-center   gap-7 text-lg p-4 mt-2",
            children: [
              d.jsx("li", {
                children: d.jsx(Xe, { to: "./gallery", children: "Gallery " }),
              }),
              d.jsx("li", {
                children: d.jsx(Xe, {
                  to: "./testimonials",
                  children: "Client Testimonials",
                }),
              }),
              d.jsx("li", {
                children: d.jsx(Xe, {
                  to: "./contacts",
                  children: "Contact Us",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Xp() {
  return d.jsx(d.Fragment, {
    children: d.jsxs("div", {
      className: "fixed w-[100%]  z-1 ",
      children: [
        d.jsx("div", {
          className: " text-white w-[100%] font-semibold    ",
          style: { backgroundColor: "var(--red)" },
          children: d.jsx("marquee", {
            behavior: "left",
            direction: "",
            children: "Do not Post Job and Promotional Queries",
          }),
        }),
        d.jsx(tx, {}),
        d.jsx("div", {
          className: " text-white w-[100%] font-semibold  ",
          style: { backgroundColor: "var(--blue)" },
          children: d.jsx("marquee", {
            behavior: "left",
            direction: "",
            children: "We have certified Event Management Team",
          }),
        }),
      ],
    }),
  });
}
const nx = () =>
  d.jsx(d.Fragment, {
    children: d.jsx("div", {
      className: "pt-28 h-[80vh]",
      children: d.jsxs("div", {
        className: "relative bg-cover bg-center h-[100%] ",
        style: {
          backgroundImage:
            "url('https://www.visionvivaah.com/gallery-image/banner/1565003834.jpg')",
        },
        children: [
          d.jsx("div", {
            className: "absolute inset-0 bg-sky-900 bg-opacity-60",
          }),
          d.jsx("h1", {
            className:
              "destination-titles relative font-extrabold text-center  text-white text-7xl  pt-24",
            children: "Our Gallery",
          }),
          d.jsxs("div", {
            className: "flex",
            children: [
              d.jsx("p", {
                className:
                  " ml-[44.5%] w-32 border-2 relative border-red-600 mt-4",
              }),
              d.jsx("p", {
                className: "border-2 ml-1 w-1 relative border-black mt-4",
              }),
              d.jsx("p", { className: "border-2 w-1 ml-1  border-black mt-4" }),
            ],
          }),
          d.jsxs("ul", {
            className:
              " justify-center flex text-white gap-2 mt-3 relative text-xl",
            children: [
              d.jsx("li", {
                className: "hover:border-b-2 border-white",
                children: d.jsx(Xe, { to: "/", children: "Home" }),
              }),
              d.jsx("li", { children: "/" }),
              d.jsx("li", {
                className: "hover:border-b-2 border-white",
                children: "Our Gallery",
              }),
            ],
          }),
        ],
      }),
    }),
  });
function Kp(n, i) {
  return function () {
    return n.apply(i, arguments);
  };
}
const { toString: rx } = Object.prototype,
  { getPrototypeOf: vc } = Object,
  Bo = ((n) => (i) => {
    const a = rx.call(i);
    return n[a] || (n[a] = a.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ft = (n) => ((n = n.toLowerCase()), (i) => Bo(i) === n),
  Wo = (n) => (i) => typeof i === n,
  { isArray: Lr } = Array,
  Li = Wo("undefined");
function ix(n) {
  return (
    n !== null &&
    !Li(n) &&
    n.constructor !== null &&
    !Li(n.constructor) &&
    yt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const Gp = Ft("ArrayBuffer");
function ax(n) {
  let i;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (i = ArrayBuffer.isView(n))
      : (i = n && n.buffer && Gp(n.buffer)),
    i
  );
}
const ox = Wo("string"),
  yt = Wo("function"),
  Qp = Wo("number"),
  $o = (n) => n !== null && typeof n == "object",
  sx = (n) => n === !0 || n === !1,
  _o = (n) => {
    if (Bo(n) !== "object") return !1;
    const i = vc(n);
    return (
      (i === null ||
        i === Object.prototype ||
        Object.getPrototypeOf(i) === null) &&
      !(Symbol.toStringTag in n) &&
      !(Symbol.iterator in n)
    );
  },
  lx = Ft("Date"),
  ux = Ft("File"),
  cx = Ft("Blob"),
  dx = Ft("FileList"),
  fx = (n) => $o(n) && yt(n.pipe),
  mx = (n) => {
    let i;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (yt(n.append) &&
          ((i = Bo(n)) === "formdata" ||
            (i === "object" &&
              yt(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  hx = Ft("URLSearchParams"),
  [px, gx, vx, yx] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ft
  ),
  xx = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wi(n, i, { allOwnKeys: a = !1 } = {}) {
  if (n === null || typeof n > "u") return;
  let o, l;
  if ((typeof n != "object" && (n = [n]), Lr(n)))
    for (o = 0, l = n.length; o < l; o++) i.call(null, n[o], o, n);
  else {
    const c = a ? Object.getOwnPropertyNames(n) : Object.keys(n),
      m = c.length;
    let h;
    for (o = 0; o < m; o++) (h = c[o]), i.call(null, n[h], h, n);
  }
}
function Jp(n, i) {
  i = i.toLowerCase();
  const a = Object.keys(n);
  let o = a.length,
    l;
  for (; o-- > 0; ) if (((l = a[o]), i === l.toLowerCase())) return l;
  return null;
}
const Gn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Zp = (n) => !Li(n) && n !== Gn;
function Fu() {
  const { caseless: n } = (Zp(this) && this) || {},
    i = {},
    a = (o, l) => {
      const c = (n && Jp(i, l)) || l;
      _o(i[c]) && _o(o)
        ? (i[c] = Fu(i[c], o))
        : _o(o)
        ? (i[c] = Fu({}, o))
        : Lr(o)
        ? (i[c] = o.slice())
        : (i[c] = o);
    };
  for (let o = 0, l = arguments.length; o < l; o++)
    arguments[o] && Wi(arguments[o], a);
  return i;
}
const wx = (n, i, a, { allOwnKeys: o } = {}) => (
    Wi(
      i,
      (l, c) => {
        a && yt(l) ? (n[c] = Kp(l, a)) : (n[c] = l);
      },
      { allOwnKeys: o }
    ),
    n
  ),
  bx = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  Sx = (n, i, a, o) => {
    (n.prototype = Object.create(i.prototype, o)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "super", { value: i.prototype }),
      a && Object.assign(n.prototype, a);
  },
  _x = (n, i, a, o) => {
    let l, c, m;
    const h = {};
    if (((i = i || {}), n == null)) return i;
    do {
      for (l = Object.getOwnPropertyNames(n), c = l.length; c-- > 0; )
        (m = l[c]), (!o || o(m, n, i)) && !h[m] && ((i[m] = n[m]), (h[m] = !0));
      n = a !== !1 && vc(n);
    } while (n && (!a || a(n, i)) && n !== Object.prototype);
    return i;
  },
  Ex = (n, i, a) => {
    (n = String(n)),
      (a === void 0 || a > n.length) && (a = n.length),
      (a -= i.length);
    const o = n.indexOf(i, a);
    return o !== -1 && o === a;
  },
  Tx = (n) => {
    if (!n) return null;
    if (Lr(n)) return n;
    let i = n.length;
    if (!Qp(i)) return null;
    const a = new Array(i);
    for (; i-- > 0; ) a[i] = n[i];
    return a;
  },
  Px = (
    (n) => (i) =>
      n && i instanceof n
  )(typeof Uint8Array < "u" && vc(Uint8Array)),
  Nx = (n, i) => {
    const o = (n && n[Symbol.iterator]).call(n);
    let l;
    for (; (l = o.next()) && !l.done; ) {
      const c = l.value;
      i.call(n, c[0], c[1]);
    }
  },
  jx = (n, i) => {
    let a;
    const o = [];
    for (; (a = n.exec(i)) !== null; ) o.push(a);
    return o;
  },
  Cx = Ft("HTMLFormElement"),
  kx = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (a, o, l) {
      return o.toUpperCase() + l;
    }),
  Ym = (
    ({ hasOwnProperty: n }) =>
    (i, a) =>
      n.call(i, a)
  )(Object.prototype),
  Ox = Ft("RegExp"),
  eg = (n, i) => {
    const a = Object.getOwnPropertyDescriptors(n),
      o = {};
    Wi(a, (l, c) => {
      let m;
      (m = i(l, c, n)) !== !1 && (o[c] = m || l);
    }),
      Object.defineProperties(n, o);
  },
  Ix = (n) => {
    eg(n, (i, a) => {
      if (yt(n) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
        return !1;
      const o = n[a];
      if (yt(o)) {
        if (((i.enumerable = !1), "writable" in i)) {
          i.writable = !1;
          return;
        }
        i.set ||
          (i.set = () => {
            throw Error("Can not rewrite read-only method '" + a + "'");
          });
      }
    });
  },
  Ax = (n, i) => {
    const a = {},
      o = (l) => {
        l.forEach((c) => {
          a[c] = !0;
        });
      };
    return Lr(n) ? o(n) : o(String(n).split(i)), a;
  },
  Rx = () => {},
  Dx = (n, i) => (n != null && Number.isFinite((n = +n)) ? n : i),
  tu = "abcdefghijklmnopqrstuvwxyz",
  Xm = "0123456789",
  tg = { DIGIT: Xm, ALPHA: tu, ALPHA_DIGIT: tu + tu.toUpperCase() + Xm },
  Lx = (n = 16, i = tg.ALPHA_DIGIT) => {
    let a = "";
    const { length: o } = i;
    for (; n--; ) a += i[(Math.random() * o) | 0];
    return a;
  };
function Mx(n) {
  return !!(
    n &&
    yt(n.append) &&
    n[Symbol.toStringTag] === "FormData" &&
    n[Symbol.iterator]
  );
}
const Fx = (n) => {
    const i = new Array(10),
      a = (o, l) => {
        if ($o(o)) {
          if (i.indexOf(o) >= 0) return;
          if (!("toJSON" in o)) {
            i[l] = o;
            const c = Lr(o) ? [] : {};
            return (
              Wi(o, (m, h) => {
                const p = a(m, l + 1);
                !Li(p) && (c[h] = p);
              }),
              (i[l] = void 0),
              c
            );
          }
        }
        return o;
      };
    return a(n, 0);
  },
  zx = Ft("AsyncFunction"),
  Ux = (n) => n && ($o(n) || yt(n)) && yt(n.then) && yt(n.catch),
  ng = ((n, i) =>
    n
      ? setImmediate
      : i
      ? ((a, o) => (
          Gn.addEventListener(
            "message",
            ({ source: l, data: c }) => {
              l === Gn && c === a && o.length && o.shift()();
            },
            !1
          ),
          (l) => {
            o.push(l), Gn.postMessage(a, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (a) => setTimeout(a))(
    typeof setImmediate == "function",
    yt(Gn.postMessage)
  ),
  Bx =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Gn)
      : (typeof process < "u" && process.nextTick) || ng,
  B = {
    isArray: Lr,
    isArrayBuffer: Gp,
    isBuffer: ix,
    isFormData: mx,
    isArrayBufferView: ax,
    isString: ox,
    isNumber: Qp,
    isBoolean: sx,
    isObject: $o,
    isPlainObject: _o,
    isReadableStream: px,
    isRequest: gx,
    isResponse: vx,
    isHeaders: yx,
    isUndefined: Li,
    isDate: lx,
    isFile: ux,
    isBlob: cx,
    isRegExp: Ox,
    isFunction: yt,
    isStream: fx,
    isURLSearchParams: hx,
    isTypedArray: Px,
    isFileList: dx,
    forEach: Wi,
    merge: Fu,
    extend: wx,
    trim: xx,
    stripBOM: bx,
    inherits: Sx,
    toFlatObject: _x,
    kindOf: Bo,
    kindOfTest: Ft,
    endsWith: Ex,
    toArray: Tx,
    forEachEntry: Nx,
    matchAll: jx,
    isHTMLForm: Cx,
    hasOwnProperty: Ym,
    hasOwnProp: Ym,
    reduceDescriptors: eg,
    freezeMethods: Ix,
    toObjectSet: Ax,
    toCamelCase: kx,
    noop: Rx,
    toFiniteNumber: Dx,
    findKey: Jp,
    global: Gn,
    isContextDefined: Zp,
    ALPHABET: tg,
    generateString: Lx,
    isSpecCompliantForm: Mx,
    toJSONObject: Fx,
    isAsyncFn: zx,
    isThenable: Ux,
    setImmediate: ng,
    asap: Bx,
  };
function ve(n, i, a, o, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = "AxiosError"),
    i && (this.code = i),
    a && (this.config = a),
    o && (this.request = o),
    l && ((this.response = l), (this.status = l.status ? l.status : null));
}
B.inherits(ve, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const rg = ve.prototype,
  ig = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((n) => {
  ig[n] = { value: n };
});
Object.defineProperties(ve, ig);
Object.defineProperty(rg, "isAxiosError", { value: !0 });
ve.from = (n, i, a, o, l, c) => {
  const m = Object.create(rg);
  return (
    B.toFlatObject(
      n,
      m,
      function (p) {
        return p !== Error.prototype;
      },
      (h) => h !== "isAxiosError"
    ),
    ve.call(m, n.message, i, a, o, l),
    (m.cause = n),
    (m.name = n.name),
    c && Object.assign(m, c),
    m
  );
};
const Wx = null;
function zu(n) {
  return B.isPlainObject(n) || B.isArray(n);
}
function ag(n) {
  return B.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Km(n, i, a) {
  return n
    ? n
        .concat(i)
        .map(function (l, c) {
          return (l = ag(l)), !a && c ? "[" + l + "]" : l;
        })
        .join(a ? "." : "")
    : i;
}
function $x(n) {
  return B.isArray(n) && !n.some(zu);
}
const Vx = B.toFlatObject(B, {}, null, function (i) {
  return /^is[A-Z]/.test(i);
});
function Vo(n, i, a) {
  if (!B.isObject(n)) throw new TypeError("target must be an object");
  (i = i || new FormData()),
    (a = B.toFlatObject(
      a,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (T, _) {
        return !B.isUndefined(_[T]);
      }
    ));
  const o = a.metaTokens,
    l = a.visitor || w,
    c = a.dots,
    m = a.indexes,
    p = (a.Blob || (typeof Blob < "u" && Blob)) && B.isSpecCompliantForm(i);
  if (!B.isFunction(l)) throw new TypeError("visitor must be a function");
  function g(b) {
    if (b === null) return "";
    if (B.isDate(b)) return b.toISOString();
    if (!p && B.isBlob(b))
      throw new ve("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(b) || B.isTypedArray(b)
      ? p && typeof Blob == "function"
        ? new Blob([b])
        : Buffer.from(b)
      : b;
  }
  function w(b, T, _) {
    let A = b;
    if (b && !_ && typeof b == "object") {
      if (B.endsWith(T, "{}"))
        (T = o ? T : T.slice(0, -2)), (b = JSON.stringify(b));
      else if (
        (B.isArray(b) && $x(b)) ||
        ((B.isFileList(b) || B.endsWith(T, "[]")) && (A = B.toArray(b)))
      )
        return (
          (T = ag(T)),
          A.forEach(function (x, S) {
            !(B.isUndefined(x) || x === null) &&
              i.append(
                m === !0 ? Km([T], S, c) : m === null ? T : T + "[]",
                g(x)
              );
          }),
          !1
        );
    }
    return zu(b) ? !0 : (i.append(Km(_, T, c), g(b)), !1);
  }
  const P = [],
    y = Object.assign(Vx, {
      defaultVisitor: w,
      convertValue: g,
      isVisitable: zu,
    });
  function j(b, T) {
    if (!B.isUndefined(b)) {
      if (P.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      P.push(b),
        B.forEach(b, function (A, R) {
          (!(B.isUndefined(A) || A === null) &&
            l.call(i, A, B.isString(R) ? R.trim() : R, T, y)) === !0 &&
            j(A, T ? T.concat(R) : [R]);
        }),
        P.pop();
    }
  }
  if (!B.isObject(n)) throw new TypeError("data must be an object");
  return j(n), i;
}
function Gm(n) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (o) {
    return i[o];
  });
}
function yc(n, i) {
  (this._pairs = []), n && Vo(n, this, i);
}
const og = yc.prototype;
og.append = function (i, a) {
  this._pairs.push([i, a]);
};
og.toString = function (i) {
  const a = i
    ? function (o) {
        return i.call(this, o, Gm);
      }
    : Gm;
  return this._pairs
    .map(function (l) {
      return a(l[0]) + "=" + a(l[1]);
    }, "")
    .join("&");
};
function Hx(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function sg(n, i, a) {
  if (!i) return n;
  const o = (a && a.encode) || Hx;
  B.isFunction(a) && (a = { serialize: a });
  const l = a && a.serialize;
  let c;
  if (
    (l
      ? (c = l(i, a))
      : (c = B.isURLSearchParams(i) ? i.toString() : new yc(i, a).toString(o)),
    c)
  ) {
    const m = n.indexOf("#");
    m !== -1 && (n = n.slice(0, m)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return n;
}
class Qm {
  constructor() {
    this.handlers = [];
  }
  use(i, a, o) {
    return (
      this.handlers.push({
        fulfilled: i,
        rejected: a,
        synchronous: o ? o.synchronous : !1,
        runWhen: o ? o.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(i) {
    B.forEach(this.handlers, function (o) {
      o !== null && i(o);
    });
  }
}
const lg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  qx = typeof URLSearchParams < "u" ? URLSearchParams : yc,
  Yx = typeof FormData < "u" ? FormData : null,
  Xx = typeof Blob < "u" ? Blob : null,
  Kx = {
    isBrowser: !0,
    classes: { URLSearchParams: qx, FormData: Yx, Blob: Xx },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  xc = typeof window < "u" && typeof document < "u",
  Uu = (typeof navigator == "object" && navigator) || void 0,
  Gx =
    xc &&
    (!Uu || ["ReactNative", "NativeScript", "NS"].indexOf(Uu.product) < 0),
  Qx =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Jx = (xc && window.location.href) || "http://localhost",
  Zx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: xc,
        hasStandardBrowserEnv: Gx,
        hasStandardBrowserWebWorkerEnv: Qx,
        navigator: Uu,
        origin: Jx,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  nt = { ...Zx, ...Kx };
function ew(n, i) {
  return Vo(
    n,
    new nt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (a, o, l, c) {
          return nt.isNode && B.isBuffer(a)
            ? (this.append(o, a.toString("base64")), !1)
            : c.defaultVisitor.apply(this, arguments);
        },
      },
      i
    )
  );
}
function tw(n) {
  return B.matchAll(/\w+|\[(\w*)]/g, n).map((i) =>
    i[0] === "[]" ? "" : i[1] || i[0]
  );
}
function nw(n) {
  const i = {},
    a = Object.keys(n);
  let o;
  const l = a.length;
  let c;
  for (o = 0; o < l; o++) (c = a[o]), (i[c] = n[c]);
  return i;
}
function ug(n) {
  function i(a, o, l, c) {
    let m = a[c++];
    if (m === "__proto__") return !0;
    const h = Number.isFinite(+m),
      p = c >= a.length;
    return (
      (m = !m && B.isArray(l) ? l.length : m),
      p
        ? (B.hasOwnProp(l, m) ? (l[m] = [l[m], o]) : (l[m] = o), !h)
        : ((!l[m] || !B.isObject(l[m])) && (l[m] = []),
          i(a, o, l[m], c) && B.isArray(l[m]) && (l[m] = nw(l[m])),
          !h)
    );
  }
  if (B.isFormData(n) && B.isFunction(n.entries)) {
    const a = {};
    return (
      B.forEachEntry(n, (o, l) => {
        i(tw(o), l, a, 0);
      }),
      a
    );
  }
  return null;
}
function rw(n, i, a) {
  if (B.isString(n))
    try {
      return (i || JSON.parse)(n), B.trim(n);
    } catch (o) {
      if (o.name !== "SyntaxError") throw o;
    }
  return (0, JSON.stringify)(n);
}
const $i = {
  transitional: lg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (i, a) {
      const o = a.getContentType() || "",
        l = o.indexOf("application/json") > -1,
        c = B.isObject(i);
      if ((c && B.isHTMLForm(i) && (i = new FormData(i)), B.isFormData(i)))
        return l ? JSON.stringify(ug(i)) : i;
      if (
        B.isArrayBuffer(i) ||
        B.isBuffer(i) ||
        B.isStream(i) ||
        B.isFile(i) ||
        B.isBlob(i) ||
        B.isReadableStream(i)
      )
        return i;
      if (B.isArrayBufferView(i)) return i.buffer;
      if (B.isURLSearchParams(i))
        return (
          a.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          i.toString()
        );
      let h;
      if (c) {
        if (o.indexOf("application/x-www-form-urlencoded") > -1)
          return ew(i, this.formSerializer).toString();
        if ((h = B.isFileList(i)) || o.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return Vo(
            h ? { "files[]": i } : i,
            p && new p(),
            this.formSerializer
          );
        }
      }
      return c || l ? (a.setContentType("application/json", !1), rw(i)) : i;
    },
  ],
  transformResponse: [
    function (i) {
      const a = this.transitional || $i.transitional,
        o = a && a.forcedJSONParsing,
        l = this.responseType === "json";
      if (B.isResponse(i) || B.isReadableStream(i)) return i;
      if (i && B.isString(i) && ((o && !this.responseType) || l)) {
        const m = !(a && a.silentJSONParsing) && l;
        try {
          return JSON.parse(i);
        } catch (h) {
          if (m)
            throw h.name === "SyntaxError"
              ? ve.from(h, ve.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return i;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: nt.classes.FormData, Blob: nt.classes.Blob },
  validateStatus: function (i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
B.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  $i.headers[n] = {};
});
const iw = B.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  aw = (n) => {
    const i = {};
    let a, o, l;
    return (
      n &&
        n
          .split(
            `
`
          )
          .forEach(function (m) {
            (l = m.indexOf(":")),
              (a = m.substring(0, l).trim().toLowerCase()),
              (o = m.substring(l + 1).trim()),
              !(!a || (i[a] && iw[a])) &&
                (a === "set-cookie"
                  ? i[a]
                    ? i[a].push(o)
                    : (i[a] = [o])
                  : (i[a] = i[a] ? i[a] + ", " + o : o));
          }),
      i
    );
  },
  Jm = Symbol("internals");
function Ni(n) {
  return n && String(n).trim().toLowerCase();
}
function Eo(n) {
  return n === !1 || n == null ? n : B.isArray(n) ? n.map(Eo) : String(n);
}
function ow(n) {
  const i = Object.create(null),
    a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; (o = a.exec(n)); ) i[o[1]] = o[2];
  return i;
}
const sw = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function nu(n, i, a, o, l) {
  if (B.isFunction(o)) return o.call(this, i, a);
  if ((l && (i = a), !!B.isString(i))) {
    if (B.isString(o)) return i.indexOf(o) !== -1;
    if (B.isRegExp(o)) return o.test(i);
  }
}
function lw(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (i, a, o) => a.toUpperCase() + o);
}
function uw(n, i) {
  const a = B.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(n, o + a, {
      value: function (l, c, m) {
        return this[o].call(this, i, l, c, m);
      },
      configurable: !0,
    });
  });
}
class ft {
  constructor(i) {
    i && this.set(i);
  }
  set(i, a, o) {
    const l = this;
    function c(h, p, g) {
      const w = Ni(p);
      if (!w) throw new Error("header name must be a non-empty string");
      const P = B.findKey(l, w);
      (!P || l[P] === void 0 || g === !0 || (g === void 0 && l[P] !== !1)) &&
        (l[P || p] = Eo(h));
    }
    const m = (h, p) => B.forEach(h, (g, w) => c(g, w, p));
    if (B.isPlainObject(i) || i instanceof this.constructor) m(i, a);
    else if (B.isString(i) && (i = i.trim()) && !sw(i)) m(aw(i), a);
    else if (B.isHeaders(i)) for (const [h, p] of i.entries()) c(p, h, o);
    else i != null && c(a, i, o);
    return this;
  }
  get(i, a) {
    if (((i = Ni(i)), i)) {
      const o = B.findKey(this, i);
      if (o) {
        const l = this[o];
        if (!a) return l;
        if (a === !0) return ow(l);
        if (B.isFunction(a)) return a.call(this, l, o);
        if (B.isRegExp(a)) return a.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, a) {
    if (((i = Ni(i)), i)) {
      const o = B.findKey(this, i);
      return !!(o && this[o] !== void 0 && (!a || nu(this, this[o], o, a)));
    }
    return !1;
  }
  delete(i, a) {
    const o = this;
    let l = !1;
    function c(m) {
      if (((m = Ni(m)), m)) {
        const h = B.findKey(o, m);
        h && (!a || nu(o, o[h], h, a)) && (delete o[h], (l = !0));
      }
    }
    return B.isArray(i) ? i.forEach(c) : c(i), l;
  }
  clear(i) {
    const a = Object.keys(this);
    let o = a.length,
      l = !1;
    for (; o--; ) {
      const c = a[o];
      (!i || nu(this, this[c], c, i, !0)) && (delete this[c], (l = !0));
    }
    return l;
  }
  normalize(i) {
    const a = this,
      o = {};
    return (
      B.forEach(this, (l, c) => {
        const m = B.findKey(o, c);
        if (m) {
          (a[m] = Eo(l)), delete a[c];
          return;
        }
        const h = i ? lw(c) : String(c).trim();
        h !== c && delete a[c], (a[h] = Eo(l)), (o[h] = !0);
      }),
      this
    );
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const a = Object.create(null);
    return (
      B.forEach(this, (o, l) => {
        o != null && o !== !1 && (a[l] = i && B.isArray(o) ? o.join(", ") : o);
      }),
      a
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, a]) => i + ": " + a).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...a) {
    const o = new this(i);
    return a.forEach((l) => o.set(l)), o;
  }
  static accessor(i) {
    const o = (this[Jm] = this[Jm] = { accessors: {} }).accessors,
      l = this.prototype;
    function c(m) {
      const h = Ni(m);
      o[h] || (uw(l, m), (o[h] = !0));
    }
    return B.isArray(i) ? i.forEach(c) : c(i), this;
  }
}
ft.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
B.reduceDescriptors(ft.prototype, ({ value: n }, i) => {
  let a = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(o) {
      this[a] = o;
    },
  };
});
B.freezeMethods(ft);
function ru(n, i) {
  const a = this || $i,
    o = i || a,
    l = ft.from(o.headers);
  let c = o.data;
  return (
    B.forEach(n, function (h) {
      c = h.call(a, c, l.normalize(), i ? i.status : void 0);
    }),
    l.normalize(),
    c
  );
}
function cg(n) {
  return !!(n && n.__CANCEL__);
}
function Mr(n, i, a) {
  ve.call(this, n ?? "canceled", ve.ERR_CANCELED, i, a),
    (this.name = "CanceledError");
}
B.inherits(Mr, ve, { __CANCEL__: !0 });
function dg(n, i, a) {
  const o = a.config.validateStatus;
  !a.status || !o || o(a.status)
    ? n(a)
    : i(
        new ve(
          "Request failed with status code " + a.status,
          [ve.ERR_BAD_REQUEST, ve.ERR_BAD_RESPONSE][
            Math.floor(a.status / 100) - 4
          ],
          a.config,
          a.request,
          a
        )
      );
}
function cw(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (i && i[1]) || "";
}
function dw(n, i) {
  n = n || 10;
  const a = new Array(n),
    o = new Array(n);
  let l = 0,
    c = 0,
    m;
  return (
    (i = i !== void 0 ? i : 1e3),
    function (p) {
      const g = Date.now(),
        w = o[c];
      m || (m = g), (a[l] = p), (o[l] = g);
      let P = c,
        y = 0;
      for (; P !== l; ) (y += a[P++]), (P = P % n);
      if (((l = (l + 1) % n), l === c && (c = (c + 1) % n), g - m < i)) return;
      const j = w && g - w;
      return j ? Math.round((y * 1e3) / j) : void 0;
    }
  );
}
function fw(n, i) {
  let a = 0,
    o = 1e3 / i,
    l,
    c;
  const m = (g, w = Date.now()) => {
    (a = w), (l = null), c && (clearTimeout(c), (c = null)), n.apply(null, g);
  };
  return [
    (...g) => {
      const w = Date.now(),
        P = w - a;
      P >= o
        ? m(g, w)
        : ((l = g),
          c ||
            (c = setTimeout(() => {
              (c = null), m(l);
            }, o - P)));
    },
    () => l && m(l),
  ];
}
const Oo = (n, i, a = 3) => {
    let o = 0;
    const l = dw(50, 250);
    return fw((c) => {
      const m = c.loaded,
        h = c.lengthComputable ? c.total : void 0,
        p = m - o,
        g = l(p),
        w = m <= h;
      o = m;
      const P = {
        loaded: m,
        total: h,
        progress: h ? m / h : void 0,
        bytes: p,
        rate: g || void 0,
        estimated: g && h && w ? (h - m) / g : void 0,
        event: c,
        lengthComputable: h != null,
        [i ? "download" : "upload"]: !0,
      };
      n(P);
    }, a);
  },
  Zm = (n, i) => {
    const a = n != null;
    return [(o) => i[0]({ lengthComputable: a, total: n, loaded: o }), i[1]];
  },
  eh =
    (n) =>
    (...i) =>
      B.asap(() => n(...i)),
  mw = nt.hasStandardBrowserEnv
    ? ((n, i) => (a) => (
        (a = new URL(a, nt.origin)),
        n.protocol === a.protocol &&
          n.host === a.host &&
          (i || n.port === a.port)
      ))(
        new URL(nt.origin),
        nt.navigator && /(msie|trident)/i.test(nt.navigator.userAgent)
      )
    : () => !0,
  hw = nt.hasStandardBrowserEnv
    ? {
        write(n, i, a, o, l, c) {
          const m = [n + "=" + encodeURIComponent(i)];
          B.isNumber(a) && m.push("expires=" + new Date(a).toGMTString()),
            B.isString(o) && m.push("path=" + o),
            B.isString(l) && m.push("domain=" + l),
            c === !0 && m.push("secure"),
            (document.cookie = m.join("; "));
        },
        read(n) {
          const i = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return i ? decodeURIComponent(i[3]) : null;
        },
        remove(n) {
          this.write(n, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function pw(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function gw(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function fg(n, i) {
  return n && !pw(i) ? gw(n, i) : i;
}
const th = (n) => (n instanceof ft ? { ...n } : n);
function Zn(n, i) {
  i = i || {};
  const a = {};
  function o(g, w, P, y) {
    return B.isPlainObject(g) && B.isPlainObject(w)
      ? B.merge.call({ caseless: y }, g, w)
      : B.isPlainObject(w)
      ? B.merge({}, w)
      : B.isArray(w)
      ? w.slice()
      : w;
  }
  function l(g, w, P, y) {
    if (B.isUndefined(w)) {
      if (!B.isUndefined(g)) return o(void 0, g, P, y);
    } else return o(g, w, P, y);
  }
  function c(g, w) {
    if (!B.isUndefined(w)) return o(void 0, w);
  }
  function m(g, w) {
    if (B.isUndefined(w)) {
      if (!B.isUndefined(g)) return o(void 0, g);
    } else return o(void 0, w);
  }
  function h(g, w, P) {
    if (P in i) return o(g, w);
    if (P in n) return o(void 0, g);
  }
  const p = {
    url: c,
    method: c,
    data: c,
    baseURL: m,
    transformRequest: m,
    transformResponse: m,
    paramsSerializer: m,
    timeout: m,
    timeoutMessage: m,
    withCredentials: m,
    withXSRFToken: m,
    adapter: m,
    responseType: m,
    xsrfCookieName: m,
    xsrfHeaderName: m,
    onUploadProgress: m,
    onDownloadProgress: m,
    decompress: m,
    maxContentLength: m,
    maxBodyLength: m,
    beforeRedirect: m,
    transport: m,
    httpAgent: m,
    httpsAgent: m,
    cancelToken: m,
    socketPath: m,
    responseEncoding: m,
    validateStatus: h,
    headers: (g, w, P) => l(th(g), th(w), P, !0),
  };
  return (
    B.forEach(Object.keys(Object.assign({}, n, i)), function (w) {
      const P = p[w] || l,
        y = P(n[w], i[w], w);
      (B.isUndefined(y) && P !== h) || (a[w] = y);
    }),
    a
  );
}
const mg = (n) => {
    const i = Zn({}, n);
    let {
      data: a,
      withXSRFToken: o,
      xsrfHeaderName: l,
      xsrfCookieName: c,
      headers: m,
      auth: h,
    } = i;
    (i.headers = m = ft.from(m)),
      (i.url = sg(fg(i.baseURL, i.url), n.params, n.paramsSerializer)),
      h &&
        m.set(
          "Authorization",
          "Basic " +
            btoa(
              (h.username || "") +
                ":" +
                (h.password ? unescape(encodeURIComponent(h.password)) : "")
            )
        );
    let p;
    if (B.isFormData(a)) {
      if (nt.hasStandardBrowserEnv || nt.hasStandardBrowserWebWorkerEnv)
        m.setContentType(void 0);
      else if ((p = m.getContentType()) !== !1) {
        const [g, ...w] = p
          ? p
              .split(";")
              .map((P) => P.trim())
              .filter(Boolean)
          : [];
        m.setContentType([g || "multipart/form-data", ...w].join("; "));
      }
    }
    if (
      nt.hasStandardBrowserEnv &&
      (o && B.isFunction(o) && (o = o(i)), o || (o !== !1 && mw(i.url)))
    ) {
      const g = l && c && hw.read(c);
      g && m.set(l, g);
    }
    return i;
  },
  vw = typeof XMLHttpRequest < "u",
  yw =
    vw &&
    function (n) {
      return new Promise(function (a, o) {
        const l = mg(n);
        let c = l.data;
        const m = ft.from(l.headers).normalize();
        let { responseType: h, onUploadProgress: p, onDownloadProgress: g } = l,
          w,
          P,
          y,
          j,
          b;
        function T() {
          j && j(),
            b && b(),
            l.cancelToken && l.cancelToken.unsubscribe(w),
            l.signal && l.signal.removeEventListener("abort", w);
        }
        let _ = new XMLHttpRequest();
        _.open(l.method.toUpperCase(), l.url, !0), (_.timeout = l.timeout);
        function A() {
          if (!_) return;
          const x = ft.from(
              "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
            ),
            E = {
              data:
                !h || h === "text" || h === "json"
                  ? _.responseText
                  : _.response,
              status: _.status,
              statusText: _.statusText,
              headers: x,
              config: n,
              request: _,
            };
          dg(
            function (I) {
              a(I), T();
            },
            function (I) {
              o(I), T();
            },
            E
          ),
            (_ = null);
        }
        "onloadend" in _
          ? (_.onloadend = A)
          : (_.onreadystatechange = function () {
              !_ ||
                _.readyState !== 4 ||
                (_.status === 0 &&
                  !(_.responseURL && _.responseURL.indexOf("file:") === 0)) ||
                setTimeout(A);
            }),
          (_.onabort = function () {
            _ &&
              (o(new ve("Request aborted", ve.ECONNABORTED, n, _)), (_ = null));
          }),
          (_.onerror = function () {
            o(new ve("Network Error", ve.ERR_NETWORK, n, _)), (_ = null);
          }),
          (_.ontimeout = function () {
            let S = l.timeout
              ? "timeout of " + l.timeout + "ms exceeded"
              : "timeout exceeded";
            const E = l.transitional || lg;
            l.timeoutErrorMessage && (S = l.timeoutErrorMessage),
              o(
                new ve(
                  S,
                  E.clarifyTimeoutError ? ve.ETIMEDOUT : ve.ECONNABORTED,
                  n,
                  _
                )
              ),
              (_ = null);
          }),
          c === void 0 && m.setContentType(null),
          "setRequestHeader" in _ &&
            B.forEach(m.toJSON(), function (S, E) {
              _.setRequestHeader(E, S);
            }),
          B.isUndefined(l.withCredentials) ||
            (_.withCredentials = !!l.withCredentials),
          h && h !== "json" && (_.responseType = l.responseType),
          g && (([y, b] = Oo(g, !0)), _.addEventListener("progress", y)),
          p &&
            _.upload &&
            (([P, j] = Oo(p)),
            _.upload.addEventListener("progress", P),
            _.upload.addEventListener("loadend", j)),
          (l.cancelToken || l.signal) &&
            ((w = (x) => {
              _ &&
                (o(!x || x.type ? new Mr(null, n, _) : x),
                _.abort(),
                (_ = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(w),
            l.signal &&
              (l.signal.aborted ? w() : l.signal.addEventListener("abort", w)));
        const R = cw(l.url);
        if (R && nt.protocols.indexOf(R) === -1) {
          o(new ve("Unsupported protocol " + R + ":", ve.ERR_BAD_REQUEST, n));
          return;
        }
        _.send(c || null);
      });
    },
  xw = (n, i) => {
    const { length: a } = (n = n ? n.filter(Boolean) : []);
    if (i || a) {
      let o = new AbortController(),
        l;
      const c = function (g) {
        if (!l) {
          (l = !0), h();
          const w = g instanceof Error ? g : this.reason;
          o.abort(
            w instanceof ve ? w : new Mr(w instanceof Error ? w.message : w)
          );
        }
      };
      let m =
        i &&
        setTimeout(() => {
          (m = null), c(new ve(`timeout ${i} of ms exceeded`, ve.ETIMEDOUT));
        }, i);
      const h = () => {
        n &&
          (m && clearTimeout(m),
          (m = null),
          n.forEach((g) => {
            g.unsubscribe
              ? g.unsubscribe(c)
              : g.removeEventListener("abort", c);
          }),
          (n = null));
      };
      n.forEach((g) => g.addEventListener("abort", c));
      const { signal: p } = o;
      return (p.unsubscribe = () => B.asap(h)), p;
    }
  },
  ww = function* (n, i) {
    let a = n.byteLength;
    if (a < i) {
      yield n;
      return;
    }
    let o = 0,
      l;
    for (; o < a; ) (l = o + i), yield n.slice(o, l), (o = l);
  },
  bw = async function* (n, i) {
    for await (const a of Sw(n)) yield* ww(a, i);
  },
  Sw = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const i = n.getReader();
    try {
      for (;;) {
        const { done: a, value: o } = await i.read();
        if (a) break;
        yield o;
      }
    } finally {
      await i.cancel();
    }
  },
  nh = (n, i, a, o) => {
    const l = bw(n, i);
    let c = 0,
      m,
      h = (p) => {
        m || ((m = !0), o && o(p));
      };
    return new ReadableStream(
      {
        async pull(p) {
          try {
            const { done: g, value: w } = await l.next();
            if (g) {
              h(), p.close();
              return;
            }
            let P = w.byteLength;
            if (a) {
              let y = (c += P);
              a(y);
            }
            p.enqueue(new Uint8Array(w));
          } catch (g) {
            throw (h(g), g);
          }
        },
        cancel(p) {
          return h(p), l.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ho =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  hg = Ho && typeof ReadableStream == "function",
  _w =
    Ho &&
    (typeof TextEncoder == "function"
      ? (
          (n) => (i) =>
            n.encode(i)
        )(new TextEncoder())
      : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
  pg = (n, ...i) => {
    try {
      return !!n(...i);
    } catch {
      return !1;
    }
  },
  Ew =
    hg &&
    pg(() => {
      let n = !1;
      const i = new Request(nt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (n = !0), "half";
        },
      }).headers.has("Content-Type");
      return n && !i;
    }),
  rh = 64 * 1024,
  Bu = hg && pg(() => B.isReadableStream(new Response("").body)),
  Io = { stream: Bu && ((n) => n.body) };
Ho &&
  ((n) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
      !Io[i] &&
        (Io[i] = B.isFunction(n[i])
          ? (a) => a[i]()
          : (a, o) => {
              throw new ve(
                `Response type '${i}' is not supported`,
                ve.ERR_NOT_SUPPORT,
                o
              );
            });
    });
  })(new Response());
const Tw = async (n) => {
    if (n == null) return 0;
    if (B.isBlob(n)) return n.size;
    if (B.isSpecCompliantForm(n))
      return (
        await new Request(nt.origin, { method: "POST", body: n }).arrayBuffer()
      ).byteLength;
    if (B.isArrayBufferView(n) || B.isArrayBuffer(n)) return n.byteLength;
    if ((B.isURLSearchParams(n) && (n = n + ""), B.isString(n)))
      return (await _w(n)).byteLength;
  },
  Pw = async (n, i) => {
    const a = B.toFiniteNumber(n.getContentLength());
    return a ?? Tw(i);
  },
  Nw =
    Ho &&
    (async (n) => {
      let {
        url: i,
        method: a,
        data: o,
        signal: l,
        cancelToken: c,
        timeout: m,
        onDownloadProgress: h,
        onUploadProgress: p,
        responseType: g,
        headers: w,
        withCredentials: P = "same-origin",
        fetchOptions: y,
      } = mg(n);
      g = g ? (g + "").toLowerCase() : "text";
      let j = xw([l, c && c.toAbortSignal()], m),
        b;
      const T =
        j &&
        j.unsubscribe &&
        (() => {
          j.unsubscribe();
        });
      let _;
      try {
        if (
          p &&
          Ew &&
          a !== "get" &&
          a !== "head" &&
          (_ = await Pw(w, o)) !== 0
        ) {
          let E = new Request(i, { method: "POST", body: o, duplex: "half" }),
            k;
          if (
            (B.isFormData(o) &&
              (k = E.headers.get("content-type")) &&
              w.setContentType(k),
            E.body)
          ) {
            const [I, W] = Zm(_, Oo(eh(p)));
            o = nh(E.body, rh, I, W);
          }
        }
        B.isString(P) || (P = P ? "include" : "omit");
        const A = "credentials" in Request.prototype;
        b = new Request(i, {
          ...y,
          signal: j,
          method: a.toUpperCase(),
          headers: w.normalize().toJSON(),
          body: o,
          duplex: "half",
          credentials: A ? P : void 0,
        });
        let R = await fetch(b);
        const x = Bu && (g === "stream" || g === "response");
        if (Bu && (h || (x && T))) {
          const E = {};
          ["status", "statusText", "headers"].forEach((Y) => {
            E[Y] = R[Y];
          });
          const k = B.toFiniteNumber(R.headers.get("content-length")),
            [I, W] = (h && Zm(k, Oo(eh(h), !0))) || [];
          R = new Response(
            nh(R.body, rh, I, () => {
              W && W(), T && T();
            }),
            E
          );
        }
        g = g || "text";
        let S = await Io[B.findKey(Io, g) || "text"](R, n);
        return (
          !x && T && T(),
          await new Promise((E, k) => {
            dg(E, k, {
              data: S,
              headers: ft.from(R.headers),
              status: R.status,
              statusText: R.statusText,
              config: n,
              request: b,
            });
          })
        );
      } catch (A) {
        throw (
          (T && T(),
          A && A.name === "TypeError" && /fetch/i.test(A.message)
            ? Object.assign(new ve("Network Error", ve.ERR_NETWORK, n, b), {
                cause: A.cause || A,
              })
            : ve.from(A, A && A.code, n, b))
        );
      }
    }),
  Wu = { http: Wx, xhr: yw, fetch: Nw };
B.forEach(Wu, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const ih = (n) => `- ${n}`,
  jw = (n) => B.isFunction(n) || n === null || n === !1,
  gg = {
    getAdapter: (n) => {
      n = B.isArray(n) ? n : [n];
      const { length: i } = n;
      let a, o;
      const l = {};
      for (let c = 0; c < i; c++) {
        a = n[c];
        let m;
        if (
          ((o = a),
          !jw(a) && ((o = Wu[(m = String(a)).toLowerCase()]), o === void 0))
        )
          throw new ve(`Unknown adapter '${m}'`);
        if (o) break;
        l[m || "#" + c] = o;
      }
      if (!o) {
        const c = Object.entries(l).map(
          ([h, p]) =>
            `adapter ${h} ` +
            (p === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let m = i
          ? c.length > 1
            ? `since :
` +
              c.map(ih).join(`
`)
            : " " + ih(c[0])
          : "as no adapter specified";
        throw new ve(
          "There is no suitable adapter to dispatch the request " + m,
          "ERR_NOT_SUPPORT"
        );
      }
      return o;
    },
    adapters: Wu,
  };
function iu(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Mr(null, n);
}
function ah(n) {
  return (
    iu(n),
    (n.headers = ft.from(n.headers)),
    (n.data = ru.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    gg
      .getAdapter(n.adapter || $i.adapter)(n)
      .then(
        function (o) {
          return (
            iu(n),
            (o.data = ru.call(n, n.transformResponse, o)),
            (o.headers = ft.from(o.headers)),
            o
          );
        },
        function (o) {
          return (
            cg(o) ||
              (iu(n),
              o &&
                o.response &&
                ((o.response.data = ru.call(
                  n,
                  n.transformResponse,
                  o.response
                )),
                (o.response.headers = ft.from(o.response.headers)))),
            Promise.reject(o)
          );
        }
      )
  );
}
const vg = "1.7.9",
  qo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, i) => {
    qo[n] = function (o) {
      return typeof o === n || "a" + (i < 1 ? "n " : " ") + n;
    };
  }
);
const oh = {};
qo.transitional = function (i, a, o) {
  function l(c, m) {
    return (
      "[Axios v" +
      vg +
      "] Transitional option '" +
      c +
      "'" +
      m +
      (o ? ". " + o : "")
    );
  }
  return (c, m, h) => {
    if (i === !1)
      throw new ve(
        l(m, " has been removed" + (a ? " in " + a : "")),
        ve.ERR_DEPRECATED
      );
    return (
      a &&
        !oh[m] &&
        ((oh[m] = !0),
        console.warn(
          l(
            m,
            " has been deprecated since v" +
              a +
              " and will be removed in the near future"
          )
        )),
      i ? i(c, m, h) : !0
    );
  };
};
qo.spelling = function (i) {
  return (a, o) => (console.warn(`${o} is likely a misspelling of ${i}`), !0);
};
function Cw(n, i, a) {
  if (typeof n != "object")
    throw new ve("options must be an object", ve.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(n);
  let l = o.length;
  for (; l-- > 0; ) {
    const c = o[l],
      m = i[c];
    if (m) {
      const h = n[c],
        p = h === void 0 || m(h, c, n);
      if (p !== !0)
        throw new ve("option " + c + " must be " + p, ve.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (a !== !0) throw new ve("Unknown option " + c, ve.ERR_BAD_OPTION);
  }
}
const To = { assertOptions: Cw, validators: qo },
  Vt = To.validators;
class Jn {
  constructor(i) {
    (this.defaults = i),
      (this.interceptors = { request: new Qm(), response: new Qm() });
  }
  async request(i, a) {
    try {
      return await this._request(i, a);
    } catch (o) {
      if (o instanceof Error) {
        let l = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(l)
          : (l = new Error());
        const c = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack
            ? c &&
              !String(o.stack).endsWith(c.replace(/^.+\n.+\n/, "")) &&
              (o.stack +=
                `
` + c)
            : (o.stack = c);
        } catch {}
      }
      throw o;
    }
  }
  _request(i, a) {
    typeof i == "string" ? ((a = a || {}), (a.url = i)) : (a = i || {}),
      (a = Zn(this.defaults, a));
    const { transitional: o, paramsSerializer: l, headers: c } = a;
    o !== void 0 &&
      To.assertOptions(
        o,
        {
          silentJSONParsing: Vt.transitional(Vt.boolean),
          forcedJSONParsing: Vt.transitional(Vt.boolean),
          clarifyTimeoutError: Vt.transitional(Vt.boolean),
        },
        !1
      ),
      l != null &&
        (B.isFunction(l)
          ? (a.paramsSerializer = { serialize: l })
          : To.assertOptions(
              l,
              { encode: Vt.function, serialize: Vt.function },
              !0
            )),
      To.assertOptions(
        a,
        {
          baseUrl: Vt.spelling("baseURL"),
          withXsrfToken: Vt.spelling("withXSRFToken"),
        },
        !0
      ),
      (a.method = (a.method || this.defaults.method || "get").toLowerCase());
    let m = c && B.merge(c.common, c[a.method]);
    c &&
      B.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (b) => {
          delete c[b];
        }
      ),
      (a.headers = ft.concat(m, c));
    const h = [];
    let p = !0;
    this.interceptors.request.forEach(function (T) {
      (typeof T.runWhen == "function" && T.runWhen(a) === !1) ||
        ((p = p && T.synchronous), h.unshift(T.fulfilled, T.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function (T) {
      g.push(T.fulfilled, T.rejected);
    });
    let w,
      P = 0,
      y;
    if (!p) {
      const b = [ah.bind(this), void 0];
      for (
        b.unshift.apply(b, h),
          b.push.apply(b, g),
          y = b.length,
          w = Promise.resolve(a);
        P < y;

      )
        w = w.then(b[P++], b[P++]);
      return w;
    }
    y = h.length;
    let j = a;
    for (P = 0; P < y; ) {
      const b = h[P++],
        T = h[P++];
      try {
        j = b(j);
      } catch (_) {
        T.call(this, _);
        break;
      }
    }
    try {
      w = ah.call(this, j);
    } catch (b) {
      return Promise.reject(b);
    }
    for (P = 0, y = g.length; P < y; ) w = w.then(g[P++], g[P++]);
    return w;
  }
  getUri(i) {
    i = Zn(this.defaults, i);
    const a = fg(i.baseURL, i.url);
    return sg(a, i.params, i.paramsSerializer);
  }
}
B.forEach(["delete", "get", "head", "options"], function (i) {
  Jn.prototype[i] = function (a, o) {
    return this.request(
      Zn(o || {}, { method: i, url: a, data: (o || {}).data })
    );
  };
});
B.forEach(["post", "put", "patch"], function (i) {
  function a(o) {
    return function (c, m, h) {
      return this.request(
        Zn(h || {}, {
          method: i,
          headers: o ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: m,
        })
      );
    };
  }
  (Jn.prototype[i] = a()), (Jn.prototype[i + "Form"] = a(!0));
});
class wc {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let a;
    this.promise = new Promise(function (c) {
      a = c;
    });
    const o = this;
    this.promise.then((l) => {
      if (!o._listeners) return;
      let c = o._listeners.length;
      for (; c-- > 0; ) o._listeners[c](l);
      o._listeners = null;
    }),
      (this.promise.then = (l) => {
        let c;
        const m = new Promise((h) => {
          o.subscribe(h), (c = h);
        }).then(l);
        return (
          (m.cancel = function () {
            o.unsubscribe(c);
          }),
          m
        );
      }),
      i(function (c, m, h) {
        o.reason || ((o.reason = new Mr(c, m, h)), a(o.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : (this._listeners = [i]);
  }
  unsubscribe(i) {
    if (!this._listeners) return;
    const a = this._listeners.indexOf(i);
    a !== -1 && this._listeners.splice(a, 1);
  }
  toAbortSignal() {
    const i = new AbortController(),
      a = (o) => {
        i.abort(o);
      };
    return (
      this.subscribe(a),
      (i.signal.unsubscribe = () => this.unsubscribe(a)),
      i.signal
    );
  }
  static source() {
    let i;
    return {
      token: new wc(function (l) {
        i = l;
      }),
      cancel: i,
    };
  }
}
function kw(n) {
  return function (a) {
    return n.apply(null, a);
  };
}
function Ow(n) {
  return B.isObject(n) && n.isAxiosError === !0;
}
const $u = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries($u).forEach(([n, i]) => {
  $u[i] = n;
});
function yg(n) {
  const i = new Jn(n),
    a = Kp(Jn.prototype.request, i);
  return (
    B.extend(a, Jn.prototype, i, { allOwnKeys: !0 }),
    B.extend(a, i, null, { allOwnKeys: !0 }),
    (a.create = function (l) {
      return yg(Zn(n, l));
    }),
    a
  );
}
const we = yg($i);
we.Axios = Jn;
we.CanceledError = Mr;
we.CancelToken = wc;
we.isCancel = cg;
we.VERSION = vg;
we.toFormData = Vo;
we.AxiosError = ve;
we.Cancel = we.CanceledError;
we.all = function (i) {
  return Promise.all(i);
};
we.spread = kw;
we.isAxiosError = Ow;
we.mergeConfig = Zn;
we.AxiosHeaders = ft;
we.formToJSON = (n) => ug(B.isHTMLForm(n) ? new FormData(n) : n);
we.getAdapter = gg.getAdapter;
we.HttpStatusCode = $u;
we.default = we;
const Iw = () => {
  const [n, i] = L.useState([]),
    [a, o] = L.useState("");
  return (
    L.useEffect(() => {
      we.get("http://localhost:5000/Gallery")
        .then((l) => {
          i(l.data);
        })
        .catch((l) => {
          o("Error fetching images");
        });
    }, []),
    d.jsx(d.Fragment, {
      children: d.jsx("div", {
        className:
          "bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] w-[100%]  mb-24",
        children: d.jsx("div", {
          className:
            " [w-100%] grid grid-cols-3 items-center pt-10 -gap-5 ml-20 mr-16",
          children: n.map((l, c) =>
            d.jsx(
              "div",
              {
                className: "flex justify-center mt-5 h-[48vh] w-[85%]",
                children: d.jsx("img", {
                  src: l.image,
                  alt: `Gallery Image ${c + 1}`,
                  className: "h-[100%] w-[100%] object-cover",
                }),
              },
              c
            )
          ),
        }),
      }),
    })
  );
};
function Aw() {
  return d.jsxs(d.Fragment, {
    children: [d.jsx("div", { children: d.jsx(nx, {}) }), d.jsx(Iw, {})],
  });
}
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ function Rw(n, i, a) {
  return (
    (i = Lw(i)) in n
      ? Object.defineProperty(n, i, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[i] = a),
    n
  );
}
function sh(n, i) {
  var a = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    i &&
      (o = o.filter(function (l) {
        return Object.getOwnPropertyDescriptor(n, l).enumerable;
      })),
      a.push.apply(a, o);
  }
  return a;
}
function G(n) {
  for (var i = 1; i < arguments.length; i++) {
    var a = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? sh(Object(a), !0).forEach(function (o) {
          Rw(n, o, a[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
      : sh(Object(a)).forEach(function (o) {
          Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(a, o));
        });
  }
  return n;
}
function Dw(n, i) {
  if (typeof n != "object" || !n) return n;
  var a = n[Symbol.toPrimitive];
  if (a !== void 0) {
    var o = a.call(n, i || "default");
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(n);
}
function Lw(n) {
  var i = Dw(n, "string");
  return typeof i == "symbol" ? i : i + "";
}
const lh = () => {};
let bc = {},
  xg = {},
  wg = null,
  bg = { mark: lh, measure: lh };
try {
  typeof window < "u" && (bc = window),
    typeof document < "u" && (xg = document),
    typeof MutationObserver < "u" && (wg = MutationObserver),
    typeof performance < "u" && (bg = performance);
} catch {}
const { userAgent: uh = "" } = bc.navigator || {},
  In = bc,
  Ie = xg,
  ch = wg,
  oo = bg;
In.document;
const cn =
    !!Ie.documentElement &&
    !!Ie.head &&
    typeof Ie.addEventListener == "function" &&
    typeof Ie.createElement == "function",
  Sg = ~uh.indexOf("MSIE") || ~uh.indexOf("Trident/");
var Mw = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
  Fw =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  _g = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands",
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin",
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin",
    },
  },
  zw = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Eg = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
  rt = "classic",
  Yo = "duotone",
  Uw = "sharp",
  Bw = "sharp-duotone",
  Tg = [rt, Yo, Uw, Bw],
  Ww = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    duotone: { 900: "fad", 400: "fadr", 300: "fadl", 100: "fadt" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds", 400: "fasdr", 300: "fasdl", 100: "fasdt" },
  },
  $w = {
    "Font Awesome 6 Free": { 900: "fas", 400: "far" },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    },
    "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 6 Duotone": {
      900: "fad",
      400: "fadr",
      normal: "fadr",
      300: "fadl",
      100: "fadt",
    },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast",
    },
    "Font Awesome 6 Sharp Duotone": {
      900: "fasds",
      400: "fasdr",
      normal: "fasdr",
      300: "fasdl",
      100: "fasdt",
    },
  },
  Vw = new Map([
    [
      "classic",
      {
        defaultShortPrefixId: "fas",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin", "brands"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp",
      {
        defaultShortPrefixId: "fass",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "duotone",
      {
        defaultShortPrefixId: "fad",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp-duotone",
      {
        defaultShortPrefixId: "fasds",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
  ]),
  Hw = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      brands: "fab",
    },
    duotone: { solid: "fad", regular: "fadr", light: "fadl", thin: "fadt" },
    sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
    "sharp-duotone": {
      solid: "fasds",
      regular: "fasdr",
      light: "fasdl",
      thin: "fasdt",
    },
  },
  qw = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  dh = {
    kit: { fak: "kit", "fa-kit": "kit" },
    "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
  },
  Yw = ["kit"],
  Xw = {
    kit: { "fa-kit": "fak" },
    "kit-duotone": { "fa-kit-duotone": "fakd" },
  },
  Kw = ["fak", "fakd"],
  Gw = { kit: { fak: "fa-kit" }, "kit-duotone": { fakd: "fa-kit-duotone" } },
  fh = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } },
  so = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Qw = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
  Jw = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  Zw = {
    "Font Awesome Kit": { 400: "fak", normal: "fak" },
    "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
  },
  eb = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    duotone: { "fa-regular": "fadr", "fa-light": "fadl", "fa-thin": "fadt" },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt",
    },
  },
  tb = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  },
  Vu = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    duotone: { fadr: "fa-regular", fadl: "fa-light", fadt: "fa-thin" },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin",
    },
  },
  nb = [
    "fa-solid",
    "fa-regular",
    "fa-light",
    "fa-thin",
    "fa-duotone",
    "fa-brands",
  ],
  Hu = [
    "fa",
    "fas",
    "far",
    "fal",
    "fat",
    "fad",
    "fadr",
    "fadl",
    "fadt",
    "fab",
    "fass",
    "fasr",
    "fasl",
    "fast",
    "fasds",
    "fasdr",
    "fasdl",
    "fasdt",
    ...Qw,
    ...nb,
  ],
  rb = ["solid", "regular", "light", "thin", "duotone", "brands"],
  Pg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ib = Pg.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  ab = [
    ...Object.keys(tb),
    ...rb,
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    so.GROUP,
    so.SWAP_OPACITY,
    so.PRIMARY,
    so.SECONDARY,
  ]
    .concat(Pg.map((n) => "".concat(n, "x")))
    .concat(ib.map((n) => "w-".concat(n))),
  ob = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  };
const sn = "___FONT_AWESOME___",
  qu = 16,
  Ng = "fa",
  jg = "svg-inline--fa",
  er = "data-fa-i2svg",
  Yu = "data-fa-pseudo-element",
  sb = "data-fa-pseudo-element-pending",
  Sc = "data-prefix",
  _c = "data-icon",
  mh = "fontawesome-i2svg",
  lb = "async",
  ub = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  Cg = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })();
function Vi(n) {
  return new Proxy(n, {
    get(i, a) {
      return a in i ? i[a] : i[rt];
    },
  });
}
const kg = G({}, _g);
kg[rt] = G(
  G(G(G({}, { "fa-duotone": "duotone" }), _g[rt]), dh.kit),
  dh["kit-duotone"]
);
const cb = Vi(kg),
  Xu = G({}, Hw);
Xu[rt] = G(G(G(G({}, { duotone: "fad" }), Xu[rt]), fh.kit), fh["kit-duotone"]);
const hh = Vi(Xu),
  Ku = G({}, Vu);
Ku[rt] = G(G({}, Ku[rt]), Gw.kit);
const Ec = Vi(Ku),
  Gu = G({}, eb);
Gu[rt] = G(G({}, Gu[rt]), Xw.kit);
Vi(Gu);
const db = Mw,
  Og = "fa-layers-text",
  fb = Fw,
  mb = G({}, Ww);
Vi(mb);
const hb = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  au = zw,
  pb = [...Yw, ...ab],
  Ai = In.FontAwesomeConfig || {};
function gb(n) {
  var i = Ie.querySelector("script[" + n + "]");
  if (i) return i.getAttribute(n);
}
function vb(n) {
  return n === "" ? !0 : n === "false" ? !1 : n === "true" ? !0 : n;
}
Ie &&
  typeof Ie.querySelector == "function" &&
  [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ].forEach((i) => {
    let [a, o] = i;
    const l = vb(gb(a));
    l != null && (Ai[o] = l);
  });
const Ig = {
  styleDefault: "solid",
  familyDefault: rt,
  cssPrefix: Ng,
  replacementClass: jg,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Ai.familyPrefix && (Ai.cssPrefix = Ai.familyPrefix);
const Ir = G(G({}, Ig), Ai);
Ir.autoReplaceSvg || (Ir.observeMutations = !1);
const de = {};
Object.keys(Ig).forEach((n) => {
  Object.defineProperty(de, n, {
    enumerable: !0,
    set: function (i) {
      (Ir[n] = i), Ri.forEach((a) => a(de));
    },
    get: function () {
      return Ir[n];
    },
  });
});
Object.defineProperty(de, "familyPrefix", {
  enumerable: !0,
  set: function (n) {
    (Ir.cssPrefix = n), Ri.forEach((i) => i(de));
  },
  get: function () {
    return Ir.cssPrefix;
  },
});
In.FontAwesomeConfig = de;
const Ri = [];
function yb(n) {
  return (
    Ri.push(n),
    () => {
      Ri.splice(Ri.indexOf(n), 1);
    }
  );
}
const kn = qu,
  qt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function xb(n) {
  if (!n || !cn) return;
  const i = Ie.createElement("style");
  i.setAttribute("type", "text/css"), (i.innerHTML = n);
  const a = Ie.head.childNodes;
  let o = null;
  for (let l = a.length - 1; l > -1; l--) {
    const c = a[l],
      m = (c.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(m) > -1 && (o = c);
  }
  return Ie.head.insertBefore(i, o), n;
}
const wb = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Mi() {
  let n = 12,
    i = "";
  for (; n-- > 0; ) i += wb[(Math.random() * 62) | 0];
  return i;
}
function Fr(n) {
  const i = [];
  for (let a = (n || []).length >>> 0; a--; ) i[a] = n[a];
  return i;
}
function Tc(n) {
  return n.classList
    ? Fr(n.classList)
    : (n.getAttribute("class") || "").split(" ").filter((i) => i);
}
function Ag(n) {
  return ""
    .concat(n)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function bb(n) {
  return Object.keys(n || {})
    .reduce((i, a) => i + "".concat(a, '="').concat(Ag(n[a]), '" '), "")
    .trim();
}
function Xo(n) {
  return Object.keys(n || {}).reduce(
    (i, a) => i + "".concat(a, ": ").concat(n[a].trim(), ";"),
    ""
  );
}
function Pc(n) {
  return (
    n.size !== qt.size ||
    n.x !== qt.x ||
    n.y !== qt.y ||
    n.rotate !== qt.rotate ||
    n.flipX ||
    n.flipY
  );
}
function Sb(n) {
  let { transform: i, containerWidth: a, iconWidth: o } = n;
  const l = { transform: "translate(".concat(a / 2, " 256)") },
    c = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "),
    m = "scale("
      .concat((i.size / 16) * (i.flipX ? -1 : 1), ", ")
      .concat((i.size / 16) * (i.flipY ? -1 : 1), ") "),
    h = "rotate(".concat(i.rotate, " 0 0)"),
    p = { transform: "".concat(c, " ").concat(m, " ").concat(h) },
    g = { transform: "translate(".concat((o / 2) * -1, " -256)") };
  return { outer: l, inner: p, path: g };
}
function _b(n) {
  let {
      transform: i,
      width: a = qu,
      height: o = qu,
      startCentered: l = !1,
    } = n,
    c = "";
  return (
    l && Sg
      ? (c += "translate("
          .concat(i.x / kn - a / 2, "em, ")
          .concat(i.y / kn - o / 2, "em) "))
      : l
      ? (c += "translate(calc(-50% + "
          .concat(i.x / kn, "em), calc(-50% + ")
          .concat(i.y / kn, "em)) "))
      : (c += "translate(".concat(i.x / kn, "em, ").concat(i.y / kn, "em) ")),
    (c += "scale("
      .concat((i.size / kn) * (i.flipX ? -1 : 1), ", ")
      .concat((i.size / kn) * (i.flipY ? -1 : 1), ") ")),
    (c += "rotate(".concat(i.rotate, "deg) ")),
    c
  );
}
var Eb = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function Rg() {
  const n = Ng,
    i = jg,
    a = de.cssPrefix,
    o = de.replacementClass;
  let l = Eb;
  if (a !== n || o !== i) {
    const c = new RegExp("\\.".concat(n, "\\-"), "g"),
      m = new RegExp("\\--".concat(n, "\\-"), "g"),
      h = new RegExp("\\.".concat(i), "g");
    l = l
      .replace(c, ".".concat(a, "-"))
      .replace(m, "--".concat(a, "-"))
      .replace(h, ".".concat(o));
  }
  return l;
}
let ph = !1;
function ou() {
  de.autoAddCss && !ph && (xb(Rg()), (ph = !0));
}
var Tb = {
  mixout() {
    return { dom: { css: Rg, insertCss: ou } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ou();
      },
      beforeI2svg() {
        ou();
      },
    };
  },
};
const ln = In || {};
ln[sn] || (ln[sn] = {});
ln[sn].styles || (ln[sn].styles = {});
ln[sn].hooks || (ln[sn].hooks = {});
ln[sn].shims || (ln[sn].shims = []);
var Yt = ln[sn];
const Dg = [],
  Lg = function () {
    Ie.removeEventListener("DOMContentLoaded", Lg),
      (Ao = 1),
      Dg.map((n) => n());
  };
let Ao = !1;
cn &&
  ((Ao = (Ie.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    Ie.readyState
  )),
  Ao || Ie.addEventListener("DOMContentLoaded", Lg));
function Pb(n) {
  cn && (Ao ? setTimeout(n, 0) : Dg.push(n));
}
function Hi(n) {
  const { tag: i, attributes: a = {}, children: o = [] } = n;
  return typeof n == "string"
    ? Ag(n)
    : "<"
        .concat(i, " ")
        .concat(bb(a), ">")
        .concat(o.map(Hi).join(""), "</")
        .concat(i, ">");
}
function gh(n, i, a) {
  if (n && n[i] && n[i][a]) return { prefix: i, iconName: a, icon: n[i][a] };
}
var su = function (i, a, o, l) {
  var c = Object.keys(i),
    m = c.length,
    h = a,
    p,
    g,
    w;
  for (o === void 0 ? ((p = 1), (w = i[c[0]])) : ((p = 0), (w = o)); p < m; p++)
    (g = c[p]), (w = h(w, i[g], g, i));
  return w;
};
function Nb(n) {
  const i = [];
  let a = 0;
  const o = n.length;
  for (; a < o; ) {
    const l = n.charCodeAt(a++);
    if (l >= 55296 && l <= 56319 && a < o) {
      const c = n.charCodeAt(a++);
      (c & 64512) == 56320
        ? i.push(((l & 1023) << 10) + (c & 1023) + 65536)
        : (i.push(l), a--);
    } else i.push(l);
  }
  return i;
}
function Qu(n) {
  const i = Nb(n);
  return i.length === 1 ? i[0].toString(16) : null;
}
function jb(n, i) {
  const a = n.length;
  let o = n.charCodeAt(i),
    l;
  return o >= 55296 &&
    o <= 56319 &&
    a > i + 1 &&
    ((l = n.charCodeAt(i + 1)), l >= 56320 && l <= 57343)
    ? (o - 55296) * 1024 + l - 56320 + 65536
    : o;
}
function vh(n) {
  return Object.keys(n).reduce((i, a) => {
    const o = n[a];
    return !!o.icon ? (i[o.iconName] = o.icon) : (i[a] = o), i;
  }, {});
}
function Ju(n, i) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: o = !1 } = a,
    l = vh(i);
  typeof Yt.hooks.addPack == "function" && !o
    ? Yt.hooks.addPack(n, vh(i))
    : (Yt.styles[n] = G(G({}, Yt.styles[n] || {}), l)),
    n === "fas" && Ju("fa", i);
}
const { styles: Fi, shims: Cb } = Yt,
  Mg = Object.keys(Ec),
  kb = Mg.reduce((n, i) => ((n[i] = Object.keys(Ec[i])), n), {});
let Nc = null,
  Fg = {},
  zg = {},
  Ug = {},
  Bg = {},
  Wg = {};
function Ob(n) {
  return ~pb.indexOf(n);
}
function Ib(n, i) {
  const a = i.split("-"),
    o = a[0],
    l = a.slice(1).join("-");
  return o === n && l !== "" && !Ob(l) ? l : null;
}
const $g = () => {
  const n = (o) => su(Fi, (l, c, m) => ((l[m] = su(c, o, {})), l), {});
  (Fg = n(
    (o, l, c) => (
      l[3] && (o[l[3]] = c),
      l[2] &&
        l[2]
          .filter((h) => typeof h == "number")
          .forEach((h) => {
            o[h.toString(16)] = c;
          }),
      o
    )
  )),
    (zg = n(
      (o, l, c) => (
        (o[c] = c),
        l[2] &&
          l[2]
            .filter((h) => typeof h == "string")
            .forEach((h) => {
              o[h] = c;
            }),
        o
      )
    )),
    (Wg = n((o, l, c) => {
      const m = l[2];
      return (
        (o[c] = c),
        m.forEach((h) => {
          o[h] = c;
        }),
        o
      );
    }));
  const i = "far" in Fi || de.autoFetchSvg,
    a = su(
      Cb,
      (o, l) => {
        const c = l[0];
        let m = l[1];
        const h = l[2];
        return (
          m === "far" && !i && (m = "fas"),
          typeof c == "string" && (o.names[c] = { prefix: m, iconName: h }),
          typeof c == "number" &&
            (o.unicodes[c.toString(16)] = { prefix: m, iconName: h }),
          o
        );
      },
      { names: {}, unicodes: {} }
    );
  (Ug = a.names),
    (Bg = a.unicodes),
    (Nc = Ko(de.styleDefault, { family: de.familyDefault }));
};
yb((n) => {
  Nc = Ko(n.styleDefault, { family: de.familyDefault });
});
$g();
function jc(n, i) {
  return (Fg[n] || {})[i];
}
function Ab(n, i) {
  return (zg[n] || {})[i];
}
function Qn(n, i) {
  return (Wg[n] || {})[i];
}
function Vg(n) {
  return Ug[n] || { prefix: null, iconName: null };
}
function Rb(n) {
  const i = Bg[n],
    a = jc("fas", n);
  return (
    i ||
    (a ? { prefix: "fas", iconName: a } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function An() {
  return Nc;
}
const Hg = () => ({ prefix: null, iconName: null, rest: [] });
function Db(n) {
  let i = rt;
  const a = Mg.reduce(
    (o, l) => ((o[l] = "".concat(de.cssPrefix, "-").concat(l)), o),
    {}
  );
  return (
    Tg.forEach((o) => {
      (n.includes(a[o]) || n.some((l) => kb[o].includes(l))) && (i = o);
    }),
    i
  );
}
function Ko(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: a = rt } = i,
    o = cb[a][n];
  if (a === Yo && !n) return "fad";
  const l = hh[a][n] || hh[a][o],
    c = n in Yt.styles ? n : null;
  return l || c || null;
}
function Lb(n) {
  let i = [],
    a = null;
  return (
    n.forEach((o) => {
      const l = Ib(de.cssPrefix, o);
      l ? (a = l) : o && i.push(o);
    }),
    { iconName: a, rest: i }
  );
}
function yh(n) {
  return n.sort().filter((i, a, o) => o.indexOf(i) === a);
}
function Go(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: a = !1 } = i;
  let o = null;
  const l = Hu.concat(Jw),
    c = yh(n.filter((P) => l.includes(P))),
    m = yh(n.filter((P) => !Hu.includes(P))),
    h = c.filter((P) => ((o = P), !Eg.includes(P))),
    [p = null] = h,
    g = Db(c),
    w = G(G({}, Lb(m)), {}, { prefix: Ko(p, { family: g }) });
  return G(
    G(
      G({}, w),
      Ub({
        values: n,
        family: g,
        styles: Fi,
        config: de,
        canonical: w,
        givenPrefix: o,
      })
    ),
    Mb(a, o, w)
  );
}
function Mb(n, i, a) {
  let { prefix: o, iconName: l } = a;
  if (n || !o || !l) return { prefix: o, iconName: l };
  const c = i === "fa" ? Vg(l) : {},
    m = Qn(o, l);
  return (
    (l = c.iconName || m || l),
    (o = c.prefix || o),
    o === "far" && !Fi.far && Fi.fas && !de.autoFetchSvg && (o = "fas"),
    { prefix: o, iconName: l }
  );
}
const Fb = Tg.filter((n) => n !== rt || n !== Yo),
  zb = Object.keys(Vu)
    .filter((n) => n !== rt)
    .map((n) => Object.keys(Vu[n]))
    .flat();
function Ub(n) {
  const {
      values: i,
      family: a,
      canonical: o,
      givenPrefix: l = "",
      styles: c = {},
      config: m = {},
    } = n,
    h = a === Yo,
    p = i.includes("fa-duotone") || i.includes("fad"),
    g = m.familyDefault === "duotone",
    w = o.prefix === "fad" || o.prefix === "fa-duotone";
  if (
    (!h && (p || g || w) && (o.prefix = "fad"),
    (i.includes("fa-brands") || i.includes("fab")) && (o.prefix = "fab"),
    !o.prefix &&
      Fb.includes(a) &&
      (Object.keys(c).find((y) => zb.includes(y)) || m.autoFetchSvg))
  ) {
    const y = Vw.get(a).defaultShortPrefixId;
    (o.prefix = y), (o.iconName = Qn(o.prefix, o.iconName) || o.iconName);
  }
  return (o.prefix === "fa" || l === "fa") && (o.prefix = An() || "fas"), o;
}
class Bb {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    const l = a.reduce(this._pullDefinitions, {});
    Object.keys(l).forEach((c) => {
      (this.definitions[c] = G(G({}, this.definitions[c] || {}), l[c])),
        Ju(c, l[c]);
      const m = Ec[rt][c];
      m && Ju(m, l[c]), $g();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(i, a) {
    const o = a.prefix && a.iconName && a.icon ? { 0: a } : a;
    return (
      Object.keys(o).map((l) => {
        const { prefix: c, iconName: m, icon: h } = o[l],
          p = h[2];
        i[c] || (i[c] = {}),
          p.length > 0 &&
            p.forEach((g) => {
              typeof g == "string" && (i[c][g] = h);
            }),
          (i[c][m] = h);
      }),
      i
    );
  }
}
let xh = [],
  Cr = {};
const Or = {},
  Wb = Object.keys(Or);
function $b(n, i) {
  let { mixoutsTo: a } = i;
  return (
    (xh = n),
    (Cr = {}),
    Object.keys(Or).forEach((o) => {
      Wb.indexOf(o) === -1 && delete Or[o];
    }),
    xh.forEach((o) => {
      const l = o.mixout ? o.mixout() : {};
      if (
        (Object.keys(l).forEach((c) => {
          typeof l[c] == "function" && (a[c] = l[c]),
            typeof l[c] == "object" &&
              Object.keys(l[c]).forEach((m) => {
                a[c] || (a[c] = {}), (a[c][m] = l[c][m]);
              });
        }),
        o.hooks)
      ) {
        const c = o.hooks();
        Object.keys(c).forEach((m) => {
          Cr[m] || (Cr[m] = []), Cr[m].push(c[m]);
        });
      }
      o.provides && o.provides(Or);
    }),
    a
  );
}
function Zu(n, i) {
  for (
    var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), l = 2;
    l < a;
    l++
  )
    o[l - 2] = arguments[l];
  return (
    (Cr[n] || []).forEach((m) => {
      i = m.apply(null, [i, ...o]);
    }),
    i
  );
}
function tr(n) {
  for (
    var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1;
    o < i;
    o++
  )
    a[o - 1] = arguments[o];
  (Cr[n] || []).forEach((c) => {
    c.apply(null, a);
  });
}
function Rn() {
  const n = arguments[0],
    i = Array.prototype.slice.call(arguments, 1);
  return Or[n] ? Or[n].apply(null, i) : void 0;
}
function ec(n) {
  n.prefix === "fa" && (n.prefix = "fas");
  let { iconName: i } = n;
  const a = n.prefix || An();
  if (i)
    return (i = Qn(a, i) || i), gh(qg.definitions, a, i) || gh(Yt.styles, a, i);
}
const qg = new Bb(),
  Vb = () => {
    (de.autoReplaceSvg = !1), (de.observeMutations = !1), tr("noAuto");
  },
  Hb = {
    i2svg: function () {
      let n =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return cn
        ? (tr("beforeI2svg", n), Rn("pseudoElements2svg", n), Rn("i2svg", n))
        : Promise.reject(new Error("Operation requires a DOM of some kind."));
    },
    watch: function () {
      let n =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: i } = n;
      de.autoReplaceSvg === !1 && (de.autoReplaceSvg = !0),
        (de.observeMutations = !0),
        Pb(() => {
          Yb({ autoReplaceSvgRoot: i }), tr("watch", n);
        });
    },
  },
  qb = {
    icon: (n) => {
      if (n === null) return null;
      if (typeof n == "object" && n.prefix && n.iconName)
        return {
          prefix: n.prefix,
          iconName: Qn(n.prefix, n.iconName) || n.iconName,
        };
      if (Array.isArray(n) && n.length === 2) {
        const i = n[1].indexOf("fa-") === 0 ? n[1].slice(3) : n[1],
          a = Ko(n[0]);
        return { prefix: a, iconName: Qn(a, i) || i };
      }
      if (
        typeof n == "string" &&
        (n.indexOf("".concat(de.cssPrefix, "-")) > -1 || n.match(db))
      ) {
        const i = Go(n.split(" "), { skipLookups: !0 });
        return {
          prefix: i.prefix || An(),
          iconName: Qn(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof n == "string") {
        const i = An();
        return { prefix: i, iconName: Qn(i, n) || n };
      }
    },
  },
  xt = {
    noAuto: Vb,
    config: de,
    dom: Hb,
    parse: qb,
    library: qg,
    findIconDefinition: ec,
    toHtml: Hi,
  },
  Yb = function () {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: i = Ie } = n;
    (Object.keys(Yt.styles).length > 0 || de.autoFetchSvg) &&
      cn &&
      de.autoReplaceSvg &&
      xt.dom.i2svg({ node: i });
  };
function Qo(n, i) {
  return (
    Object.defineProperty(n, "abstract", { get: i }),
    Object.defineProperty(n, "html", {
      get: function () {
        return n.abstract.map((a) => Hi(a));
      },
    }),
    Object.defineProperty(n, "node", {
      get: function () {
        if (!cn) return;
        const a = Ie.createElement("div");
        return (a.innerHTML = n.html), a.children;
      },
    }),
    n
  );
}
function Xb(n) {
  let {
    children: i,
    main: a,
    mask: o,
    attributes: l,
    styles: c,
    transform: m,
  } = n;
  if (Pc(m) && a.found && !o.found) {
    const { width: h, height: p } = a,
      g = { x: h / p / 2, y: 0.5 };
    l.style = Xo(
      G(
        G({}, c),
        {},
        {
          "transform-origin": ""
            .concat(g.x + m.x / 16, "em ")
            .concat(g.y + m.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: l, children: i }];
}
function Kb(n) {
  let { prefix: i, iconName: a, children: o, attributes: l, symbol: c } = n;
  const m =
    c === !0 ? "".concat(i, "-").concat(de.cssPrefix, "-").concat(a) : c;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: G(G({}, l), {}, { id: m }), children: o },
      ],
    },
  ];
}
function Cc(n) {
  const {
      icons: { main: i, mask: a },
      prefix: o,
      iconName: l,
      transform: c,
      symbol: m,
      title: h,
      maskId: p,
      titleId: g,
      extra: w,
      watchable: P = !1,
    } = n,
    { width: y, height: j } = a.found ? a : i,
    b = Kw.includes(o),
    T = [de.replacementClass, l ? "".concat(de.cssPrefix, "-").concat(l) : ""]
      .filter((E) => w.classes.indexOf(E) === -1)
      .filter((E) => E !== "" || !!E)
      .concat(w.classes)
      .join(" ");
  let _ = {
    children: [],
    attributes: G(
      G({}, w.attributes),
      {},
      {
        "data-prefix": o,
        "data-icon": l,
        class: T,
        role: w.attributes.role || "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(y, " ").concat(j),
      }
    ),
  };
  const A =
    b && !~w.classes.indexOf("fa-fw")
      ? { width: "".concat((y / j) * 16 * 0.0625, "em") }
      : {};
  P && (_.attributes[er] = ""),
    h &&
      (_.children.push({
        tag: "title",
        attributes: {
          id: _.attributes["aria-labelledby"] || "title-".concat(g || Mi()),
        },
        children: [h],
      }),
      delete _.attributes.title);
  const R = G(
      G({}, _),
      {},
      {
        prefix: o,
        iconName: l,
        main: i,
        mask: a,
        maskId: p,
        transform: c,
        symbol: m,
        styles: G(G({}, A), w.styles),
      }
    ),
    { children: x, attributes: S } =
      a.found && i.found
        ? Rn("generateAbstractMask", R) || { children: [], attributes: {} }
        : Rn("generateAbstractIcon", R) || { children: [], attributes: {} };
  return (R.children = x), (R.attributes = S), m ? Kb(R) : Xb(R);
}
function wh(n) {
  const {
      content: i,
      width: a,
      height: o,
      transform: l,
      title: c,
      extra: m,
      watchable: h = !1,
    } = n,
    p = G(
      G(G({}, m.attributes), c ? { title: c } : {}),
      {},
      { class: m.classes.join(" ") }
    );
  h && (p[er] = "");
  const g = G({}, m.styles);
  Pc(l) &&
    ((g.transform = _b({
      transform: l,
      startCentered: !0,
      width: a,
      height: o,
    })),
    (g["-webkit-transform"] = g.transform));
  const w = Xo(g);
  w.length > 0 && (p.style = w);
  const P = [];
  return (
    P.push({ tag: "span", attributes: p, children: [i] }),
    c &&
      P.push({ tag: "span", attributes: { class: "sr-only" }, children: [c] }),
    P
  );
}
function Gb(n) {
  const { content: i, title: a, extra: o } = n,
    l = G(
      G(G({}, o.attributes), a ? { title: a } : {}),
      {},
      { class: o.classes.join(" ") }
    ),
    c = Xo(o.styles);
  c.length > 0 && (l.style = c);
  const m = [];
  return (
    m.push({ tag: "span", attributes: l, children: [i] }),
    a &&
      m.push({ tag: "span", attributes: { class: "sr-only" }, children: [a] }),
    m
  );
}
const { styles: lu } = Yt;
function tc(n) {
  const i = n[0],
    a = n[1],
    [o] = n.slice(4);
  let l = null;
  return (
    Array.isArray(o)
      ? (l = {
          tag: "g",
          attributes: { class: "".concat(de.cssPrefix, "-").concat(au.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(de.cssPrefix, "-").concat(au.SECONDARY),
                fill: "currentColor",
                d: o[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(de.cssPrefix, "-").concat(au.PRIMARY),
                fill: "currentColor",
                d: o[1],
              },
            },
          ],
        })
      : (l = { tag: "path", attributes: { fill: "currentColor", d: o } }),
    { found: !0, width: i, height: a, icon: l }
  );
}
const Qb = { found: !1, width: 512, height: 512 };
function Jb(n, i) {
  !Cg &&
    !de.showMissingIcons &&
    n &&
    console.error(
      'Icon with name "'.concat(n, '" and prefix "').concat(i, '" is missing.')
    );
}
function nc(n, i) {
  let a = i;
  return (
    i === "fa" && de.styleDefault !== null && (i = An()),
    new Promise((o, l) => {
      if (a === "fa") {
        const c = Vg(n) || {};
        (n = c.iconName || n), (i = c.prefix || i);
      }
      if (n && i && lu[i] && lu[i][n]) {
        const c = lu[i][n];
        return o(tc(c));
      }
      Jb(n, i),
        o(
          G(
            G({}, Qb),
            {},
            {
              icon:
                de.showMissingIcons && n ? Rn("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
const bh = () => {},
  rc =
    de.measurePerformance && oo && oo.mark && oo.measure
      ? oo
      : { mark: bh, measure: bh },
  Ii = 'FA "6.7.1"',
  Zb = (n) => (rc.mark("".concat(Ii, " ").concat(n, " begins")), () => Yg(n)),
  Yg = (n) => {
    rc.mark("".concat(Ii, " ").concat(n, " ends")),
      rc.measure(
        "".concat(Ii, " ").concat(n),
        "".concat(Ii, " ").concat(n, " begins"),
        "".concat(Ii, " ").concat(n, " ends")
      );
  };
var kc = { begin: Zb, end: Yg };
const Po = () => {};
function Sh(n) {
  return typeof (n.getAttribute ? n.getAttribute(er) : null) == "string";
}
function e2(n) {
  const i = n.getAttribute ? n.getAttribute(Sc) : null,
    a = n.getAttribute ? n.getAttribute(_c) : null;
  return i && a;
}
function t2(n) {
  return (
    n &&
    n.classList &&
    n.classList.contains &&
    n.classList.contains(de.replacementClass)
  );
}
function n2() {
  return de.autoReplaceSvg === !0
    ? No.replace
    : No[de.autoReplaceSvg] || No.replace;
}
function r2(n) {
  return Ie.createElementNS("http://www.w3.org/2000/svg", n);
}
function i2(n) {
  return Ie.createElement(n);
}
function Xg(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: a = n.tag === "svg" ? r2 : i2 } = i;
  if (typeof n == "string") return Ie.createTextNode(n);
  const o = a(n.tag);
  return (
    Object.keys(n.attributes || []).forEach(function (c) {
      o.setAttribute(c, n.attributes[c]);
    }),
    (n.children || []).forEach(function (c) {
      o.appendChild(Xg(c, { ceFn: a }));
    }),
    o
  );
}
function a2(n) {
  let i = " ".concat(n.outerHTML, " ");
  return (i = "".concat(i, "Font Awesome fontawesome.com ")), i;
}
const No = {
  replace: function (n) {
    const i = n[0];
    if (i.parentNode)
      if (
        (n[1].forEach((a) => {
          i.parentNode.insertBefore(Xg(a), i);
        }),
        i.getAttribute(er) === null && de.keepOriginalSource)
      ) {
        let a = Ie.createComment(a2(i));
        i.parentNode.replaceChild(a, i);
      } else i.remove();
  },
  nest: function (n) {
    const i = n[0],
      a = n[1];
    if (~Tc(i).indexOf(de.replacementClass)) return No.replace(n);
    const o = new RegExp("".concat(de.cssPrefix, "-.*"));
    if ((delete a[0].attributes.id, a[0].attributes.class)) {
      const c = a[0].attributes.class
        .split(" ")
        .reduce(
          (m, h) => (
            h === de.replacementClass || h.match(o)
              ? m.toSvg.push(h)
              : m.toNode.push(h),
            m
          ),
          { toNode: [], toSvg: [] }
        );
      (a[0].attributes.class = c.toSvg.join(" ")),
        c.toNode.length === 0
          ? i.removeAttribute("class")
          : i.setAttribute("class", c.toNode.join(" "));
    }
    const l = a.map((c) => Hi(c)).join(`
`);
    i.setAttribute(er, ""), (i.innerHTML = l);
  },
};
function _h(n) {
  n();
}
function Kg(n, i) {
  const a = typeof i == "function" ? i : Po;
  if (n.length === 0) a();
  else {
    let o = _h;
    de.mutateApproach === lb && (o = In.requestAnimationFrame || _h),
      o(() => {
        const l = n2(),
          c = kc.begin("mutate");
        n.map(l), c(), a();
      });
  }
}
let Oc = !1;
function Gg() {
  Oc = !0;
}
function ic() {
  Oc = !1;
}
let Ro = null;
function Eh(n) {
  if (!ch || !de.observeMutations) return;
  const {
    treeCallback: i = Po,
    nodeCallback: a = Po,
    pseudoElementsCallback: o = Po,
    observeMutationsRoot: l = Ie,
  } = n;
  (Ro = new ch((c) => {
    if (Oc) return;
    const m = An();
    Fr(c).forEach((h) => {
      if (
        (h.type === "childList" &&
          h.addedNodes.length > 0 &&
          !Sh(h.addedNodes[0]) &&
          (de.searchPseudoElements && o(h.target), i(h.target)),
        h.type === "attributes" &&
          h.target.parentNode &&
          de.searchPseudoElements &&
          o(h.target.parentNode),
        h.type === "attributes" && Sh(h.target) && ~hb.indexOf(h.attributeName))
      )
        if (h.attributeName === "class" && e2(h.target)) {
          const { prefix: p, iconName: g } = Go(Tc(h.target));
          h.target.setAttribute(Sc, p || m), g && h.target.setAttribute(_c, g);
        } else t2(h.target) && a(h.target);
    });
  })),
    cn &&
      Ro.observe(l, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
      });
}
function o2() {
  Ro && Ro.disconnect();
}
function s2(n) {
  const i = n.getAttribute("style");
  let a = [];
  return (
    i &&
      (a = i.split(";").reduce((o, l) => {
        const c = l.split(":"),
          m = c[0],
          h = c.slice(1);
        return m && h.length > 0 && (o[m] = h.join(":").trim()), o;
      }, {})),
    a
  );
}
function l2(n) {
  const i = n.getAttribute("data-prefix"),
    a = n.getAttribute("data-icon"),
    o = n.innerText !== void 0 ? n.innerText.trim() : "";
  let l = Go(Tc(n));
  return (
    l.prefix || (l.prefix = An()),
    i && a && ((l.prefix = i), (l.iconName = a)),
    (l.iconName && l.prefix) ||
      (l.prefix &&
        o.length > 0 &&
        (l.iconName =
          Ab(l.prefix, n.innerText) || jc(l.prefix, Qu(n.innerText))),
      !l.iconName &&
        de.autoFetchSvg &&
        n.firstChild &&
        n.firstChild.nodeType === Node.TEXT_NODE &&
        (l.iconName = n.firstChild.data)),
    l
  );
}
function u2(n) {
  const i = Fr(n.attributes).reduce(
      (l, c) => (
        l.name !== "class" && l.name !== "style" && (l[c.name] = c.value), l
      ),
      {}
    ),
    a = n.getAttribute("title"),
    o = n.getAttribute("data-fa-title-id");
  return (
    de.autoA11y &&
      (a
        ? (i["aria-labelledby"] = ""
            .concat(de.replacementClass, "-title-")
            .concat(o || Mi()))
        : ((i["aria-hidden"] = "true"), (i.focusable = "false"))),
    i
  );
}
function c2() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: qt,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Th(n) {
  let i =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { styleParser: !0 };
  const { iconName: a, prefix: o, rest: l } = l2(n),
    c = u2(n),
    m = Zu("parseNodeAttributes", {}, n);
  let h = i.styleParser ? s2(n) : [];
  return G(
    {
      iconName: a,
      title: n.getAttribute("title"),
      titleId: n.getAttribute("data-fa-title-id"),
      prefix: o,
      transform: qt,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: l, styles: h, attributes: c },
    },
    m
  );
}
const { styles: d2 } = Yt;
function Qg(n) {
  const i = de.autoReplaceSvg === "nest" ? Th(n, { styleParser: !1 }) : Th(n);
  return ~i.extra.classes.indexOf(Og)
    ? Rn("generateLayersText", n, i)
    : Rn("generateSvgReplacementMutation", n, i);
}
function f2() {
  return [...qw, ...Hu];
}
function Ph(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!cn) return Promise.resolve();
  const a = Ie.documentElement.classList,
    o = (w) => a.add("".concat(mh, "-").concat(w)),
    l = (w) => a.remove("".concat(mh, "-").concat(w)),
    c = de.autoFetchSvg ? f2() : Eg.concat(Object.keys(d2));
  c.includes("fa") || c.push("fa");
  const m = [".".concat(Og, ":not([").concat(er, "])")]
    .concat(c.map((w) => ".".concat(w, ":not([").concat(er, "])")))
    .join(", ");
  if (m.length === 0) return Promise.resolve();
  let h = [];
  try {
    h = Fr(n.querySelectorAll(m));
  } catch {}
  if (h.length > 0) o("pending"), l("complete");
  else return Promise.resolve();
  const p = kc.begin("onTree"),
    g = h.reduce((w, P) => {
      try {
        const y = Qg(P);
        y && w.push(y);
      } catch (y) {
        Cg || (y.name === "MissingIcon" && console.error(y));
      }
      return w;
    }, []);
  return new Promise((w, P) => {
    Promise.all(g)
      .then((y) => {
        Kg(y, () => {
          o("active"),
            o("complete"),
            l("pending"),
            typeof i == "function" && i(),
            p(),
            w();
        });
      })
      .catch((y) => {
        p(), P(y);
      });
  });
}
function m2(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Qg(n).then((a) => {
    a && Kg([a], i);
  });
}
function h2(n) {
  return function (i) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const o = (i || {}).icon ? i : ec(i || {});
    let { mask: l } = a;
    return (
      l && (l = (l || {}).icon ? l : ec(l || {})),
      n(o, G(G({}, a), {}, { mask: l }))
    );
  };
}
const p2 = function (n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: a = qt,
    symbol: o = !1,
    mask: l = null,
    maskId: c = null,
    title: m = null,
    titleId: h = null,
    classes: p = [],
    attributes: g = {},
    styles: w = {},
  } = i;
  if (!n) return;
  const { prefix: P, iconName: y, icon: j } = n;
  return Qo(
    G({ type: "icon" }, n),
    () => (
      tr("beforeDOMElementCreation", { iconDefinition: n, params: i }),
      de.autoA11y &&
        (m
          ? (g["aria-labelledby"] = ""
              .concat(de.replacementClass, "-title-")
              .concat(h || Mi()))
          : ((g["aria-hidden"] = "true"), (g.focusable = "false"))),
      Cc({
        icons: {
          main: tc(j),
          mask: l
            ? tc(l.icon)
            : { found: !1, width: null, height: null, icon: {} },
        },
        prefix: P,
        iconName: y,
        transform: G(G({}, qt), a),
        symbol: o,
        title: m,
        maskId: c,
        titleId: h,
        extra: { attributes: g, styles: w, classes: p },
      })
    )
  );
};
var g2 = {
    mixout() {
      return { icon: h2(p2) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(n) {
          return (n.treeCallback = Ph), (n.nodeCallback = m2), n;
        },
      };
    },
    provides(n) {
      (n.i2svg = function (i) {
        const { node: a = Ie, callback: o = () => {} } = i;
        return Ph(a, o);
      }),
        (n.generateSvgReplacementMutation = function (i, a) {
          const {
            iconName: o,
            title: l,
            titleId: c,
            prefix: m,
            transform: h,
            symbol: p,
            mask: g,
            maskId: w,
            extra: P,
          } = a;
          return new Promise((y, j) => {
            Promise.all([
              nc(o, m),
              g.iconName
                ? nc(g.iconName, g.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then((b) => {
                let [T, _] = b;
                y([
                  i,
                  Cc({
                    icons: { main: T, mask: _ },
                    prefix: m,
                    iconName: o,
                    transform: h,
                    symbol: p,
                    maskId: w,
                    title: l,
                    titleId: c,
                    extra: P,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(j);
          });
        }),
        (n.generateAbstractIcon = function (i) {
          let {
            children: a,
            attributes: o,
            main: l,
            transform: c,
            styles: m,
          } = i;
          const h = Xo(m);
          h.length > 0 && (o.style = h);
          let p;
          return (
            Pc(c) &&
              (p = Rn("generateAbstractTransformGrouping", {
                main: l,
                transform: c,
                containerWidth: l.width,
                iconWidth: l.width,
              })),
            a.push(p || l.icon),
            { children: a, attributes: o }
          );
        });
    },
  },
  v2 = {
    mixout() {
      return {
        layer(n) {
          let i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: a = [] } = i;
          return Qo({ type: "layer" }, () => {
            tr("beforeDOMElementCreation", { assembler: n, params: i });
            let o = [];
            return (
              n((l) => {
                Array.isArray(l)
                  ? l.map((c) => {
                      o = o.concat(c.abstract);
                    })
                  : (o = o.concat(l.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(de.cssPrefix, "-layers"), ...a].join(" "),
                  },
                  children: o,
                },
              ]
            );
          });
        },
      };
    },
  },
  y2 = {
    mixout() {
      return {
        counter(n) {
          let i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title: a = null,
            classes: o = [],
            attributes: l = {},
            styles: c = {},
          } = i;
          return Qo(
            { type: "counter", content: n },
            () => (
              tr("beforeDOMElementCreation", { content: n, params: i }),
              Gb({
                content: n.toString(),
                title: a,
                extra: {
                  attributes: l,
                  styles: c,
                  classes: ["".concat(de.cssPrefix, "-layers-counter"), ...o],
                },
              })
            )
          );
        },
      };
    },
  },
  x2 = {
    mixout() {
      return {
        text(n) {
          let i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform: a = qt,
            title: o = null,
            classes: l = [],
            attributes: c = {},
            styles: m = {},
          } = i;
          return Qo(
            { type: "text", content: n },
            () => (
              tr("beforeDOMElementCreation", { content: n, params: i }),
              wh({
                content: n,
                transform: G(G({}, qt), a),
                title: o,
                extra: {
                  attributes: c,
                  styles: m,
                  classes: ["".concat(de.cssPrefix, "-layers-text"), ...l],
                },
              })
            )
          );
        },
      };
    },
    provides(n) {
      n.generateLayersText = function (i, a) {
        const { title: o, transform: l, extra: c } = a;
        let m = null,
          h = null;
        if (Sg) {
          const p = parseInt(getComputedStyle(i).fontSize, 10),
            g = i.getBoundingClientRect();
          (m = g.width / p), (h = g.height / p);
        }
        return (
          de.autoA11y && !o && (c.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            i,
            wh({
              content: i.innerHTML,
              width: m,
              height: h,
              transform: l,
              title: o,
              extra: c,
              watchable: !0,
            }),
          ])
        );
      };
    },
  };
const w2 = new RegExp('"', "ug"),
  Nh = [1105920, 1112319],
  jh = G(
    G(G(G({}, { FontAwesome: { normal: "fas", 400: "fas" } }), $w), ob),
    Zw
  ),
  ac = Object.keys(jh).reduce((n, i) => ((n[i.toLowerCase()] = jh[i]), n), {}),
  b2 = Object.keys(ac).reduce((n, i) => {
    const a = ac[i];
    return (n[i] = a[900] || [...Object.entries(a)][0][1]), n;
  }, {});
function S2(n) {
  const i = n.replace(w2, ""),
    a = jb(i, 0),
    o = a >= Nh[0] && a <= Nh[1],
    l = i.length === 2 ? i[0] === i[1] : !1;
  return { value: Qu(l ? i[0] : i), isSecondary: o || l };
}
function _2(n, i) {
  const a = n.replace(/^['"]|['"]$/g, "").toLowerCase(),
    o = parseInt(i),
    l = isNaN(o) ? "normal" : o;
  return (ac[a] || {})[l] || b2[a];
}
function Ch(n, i) {
  const a = "".concat(sb).concat(i.replace(":", "-"));
  return new Promise((o, l) => {
    if (n.getAttribute(a) !== null) return o();
    const m = Fr(n.children).filter((y) => y.getAttribute(Yu) === i)[0],
      h = In.getComputedStyle(n, i),
      p = h.getPropertyValue("font-family"),
      g = p.match(fb),
      w = h.getPropertyValue("font-weight"),
      P = h.getPropertyValue("content");
    if (m && !g) return n.removeChild(m), o();
    if (g && P !== "none" && P !== "") {
      const y = h.getPropertyValue("content");
      let j = _2(p, w);
      const { value: b, isSecondary: T } = S2(y),
        _ = g[0].startsWith("FontAwesome");
      let A = jc(j, b),
        R = A;
      if (_) {
        const x = Rb(b);
        x.iconName && x.prefix && ((A = x.iconName), (j = x.prefix));
      }
      if (
        A &&
        !T &&
        (!m || m.getAttribute(Sc) !== j || m.getAttribute(_c) !== R)
      ) {
        n.setAttribute(a, R), m && n.removeChild(m);
        const x = c2(),
          { extra: S } = x;
        (S.attributes[Yu] = i),
          nc(A, j)
            .then((E) => {
              const k = Cc(
                  G(
                    G({}, x),
                    {},
                    {
                      icons: { main: E, mask: Hg() },
                      prefix: j,
                      iconName: R,
                      extra: S,
                      watchable: !0,
                    }
                  )
                ),
                I = Ie.createElementNS("http://www.w3.org/2000/svg", "svg");
              i === "::before"
                ? n.insertBefore(I, n.firstChild)
                : n.appendChild(I),
                (I.outerHTML = k.map((W) => Hi(W)).join(`
`)),
                n.removeAttribute(a),
                o();
            })
            .catch(l);
      } else o();
    } else o();
  });
}
function E2(n) {
  return Promise.all([Ch(n, "::before"), Ch(n, "::after")]);
}
function T2(n) {
  return (
    n.parentNode !== document.head &&
    !~ub.indexOf(n.tagName.toUpperCase()) &&
    !n.getAttribute(Yu) &&
    (!n.parentNode || n.parentNode.tagName !== "svg")
  );
}
function kh(n) {
  if (cn)
    return new Promise((i, a) => {
      const o = Fr(n.querySelectorAll("*")).filter(T2).map(E2),
        l = kc.begin("searchPseudoElements");
      Gg(),
        Promise.all(o)
          .then(() => {
            l(), ic(), i();
          })
          .catch(() => {
            l(), ic(), a();
          });
    });
}
var P2 = {
  hooks() {
    return {
      mutationObserverCallbacks(n) {
        return (n.pseudoElementsCallback = kh), n;
      },
    };
  },
  provides(n) {
    n.pseudoElements2svg = function (i) {
      const { node: a = Ie } = i;
      de.searchPseudoElements && kh(a);
    };
  },
};
let Oh = !1;
var N2 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Gg(), (Oh = !0);
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        Eh(Zu("mutationObserverCallbacks", {}));
      },
      noAuto() {
        o2();
      },
      watch(n) {
        const { observeMutationsRoot: i } = n;
        Oh
          ? ic()
          : Eh(Zu("mutationObserverCallbacks", { observeMutationsRoot: i }));
      },
    };
  },
};
const Ih = (n) => {
  let i = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return n
    .toLowerCase()
    .split(" ")
    .reduce((a, o) => {
      const l = o.toLowerCase().split("-"),
        c = l[0];
      let m = l.slice(1).join("-");
      if (c && m === "h") return (a.flipX = !0), a;
      if (c && m === "v") return (a.flipY = !0), a;
      if (((m = parseFloat(m)), isNaN(m))) return a;
      switch (c) {
        case "grow":
          a.size = a.size + m;
          break;
        case "shrink":
          a.size = a.size - m;
          break;
        case "left":
          a.x = a.x - m;
          break;
        case "right":
          a.x = a.x + m;
          break;
        case "up":
          a.y = a.y - m;
          break;
        case "down":
          a.y = a.y + m;
          break;
        case "rotate":
          a.rotate = a.rotate + m;
          break;
      }
      return a;
    }, i);
};
var j2 = {
  mixout() {
    return { parse: { transform: (n) => Ih(n) } };
  },
  hooks() {
    return {
      parseNodeAttributes(n, i) {
        const a = i.getAttribute("data-fa-transform");
        return a && (n.transform = Ih(a)), n;
      },
    };
  },
  provides(n) {
    n.generateAbstractTransformGrouping = function (i) {
      let { main: a, transform: o, containerWidth: l, iconWidth: c } = i;
      const m = { transform: "translate(".concat(l / 2, " 256)") },
        h = "translate(".concat(o.x * 32, ", ").concat(o.y * 32, ") "),
        p = "scale("
          .concat((o.size / 16) * (o.flipX ? -1 : 1), ", ")
          .concat((o.size / 16) * (o.flipY ? -1 : 1), ") "),
        g = "rotate(".concat(o.rotate, " 0 0)"),
        w = { transform: "".concat(h, " ").concat(p, " ").concat(g) },
        P = { transform: "translate(".concat((c / 2) * -1, " -256)") },
        y = { outer: m, inner: w, path: P };
      return {
        tag: "g",
        attributes: G({}, y.outer),
        children: [
          {
            tag: "g",
            attributes: G({}, y.inner),
            children: [
              {
                tag: a.icon.tag,
                children: a.icon.children,
                attributes: G(G({}, a.icon.attributes), y.path),
              },
            ],
          },
        ],
      };
    };
  },
};
const uu = { x: 0, y: 0, width: "100%", height: "100%" };
function Ah(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    n.attributes && (n.attributes.fill || i) && (n.attributes.fill = "black"), n
  );
}
function C2(n) {
  return n.tag === "g" ? n.children : [n];
}
var k2 = {
    hooks() {
      return {
        parseNodeAttributes(n, i) {
          const a = i.getAttribute("data-fa-mask"),
            o = a ? Go(a.split(" ").map((l) => l.trim())) : Hg();
          return (
            o.prefix || (o.prefix = An()),
            (n.mask = o),
            (n.maskId = i.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides(n) {
      n.generateAbstractMask = function (i) {
        let {
          children: a,
          attributes: o,
          main: l,
          mask: c,
          maskId: m,
          transform: h,
        } = i;
        const { width: p, icon: g } = l,
          { width: w, icon: P } = c,
          y = Sb({ transform: h, containerWidth: w, iconWidth: p }),
          j = { tag: "rect", attributes: G(G({}, uu), {}, { fill: "white" }) },
          b = g.children ? { children: g.children.map(Ah) } : {},
          T = {
            tag: "g",
            attributes: G({}, y.inner),
            children: [
              Ah(
                G({ tag: g.tag, attributes: G(G({}, g.attributes), y.path) }, b)
              ),
            ],
          },
          _ = { tag: "g", attributes: G({}, y.outer), children: [T] },
          A = "mask-".concat(m || Mi()),
          R = "clip-".concat(m || Mi()),
          x = {
            tag: "mask",
            attributes: G(
              G({}, uu),
              {},
              {
                id: A,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [j, _],
          },
          S = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: R }, children: C2(P) },
              x,
            ],
          };
        return (
          a.push(S, {
            tag: "rect",
            attributes: G(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(R, ")"),
                mask: "url(#".concat(A, ")"),
              },
              uu
            ),
          }),
          { children: a, attributes: o }
        );
      };
    },
  },
  O2 = {
    provides(n) {
      let i = !1;
      In.matchMedia &&
        (i = In.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (n.missingIconAbstract = function () {
          const a = [],
            o = { fill: "currentColor" },
            l = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          a.push({
            tag: "path",
            attributes: G(
              G({}, o),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          const c = G(G({}, l), {}, { attributeName: "opacity" }),
            m = {
              tag: "circle",
              attributes: G(G({}, o), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            i ||
              m.children.push(
                {
                  tag: "animate",
                  attributes: G(
                    G({}, l),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: G(G({}, c), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            a.push(m),
            a.push({
              tag: "path",
              attributes: G(
                G({}, o),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: i
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: G(G({}, c), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            i ||
              a.push({
                tag: "path",
                attributes: G(
                  G({}, o),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: G(G({}, c), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: a }
          );
        });
    },
  },
  I2 = {
    hooks() {
      return {
        parseNodeAttributes(n, i) {
          const a = i.getAttribute("data-fa-symbol"),
            o = a === null ? !1 : a === "" ? !0 : a;
          return (n.symbol = o), n;
        },
      };
    },
  },
  A2 = [Tb, g2, v2, y2, x2, P2, N2, j2, k2, O2, I2];
$b(A2, { mixoutsTo: xt });
xt.noAuto;
xt.config;
xt.library;
xt.dom;
const oc = xt.parse;
xt.findIconDefinition;
xt.toHtml;
const R2 = xt.icon;
xt.layer;
xt.text;
xt.counter;
var cu = { exports: {} },
  du,
  Rh;
function D2() {
  if (Rh) return du;
  Rh = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (du = n), du;
}
var fu, Dh;
function L2() {
  if (Dh) return fu;
  Dh = 1;
  var n = D2();
  function i() {}
  function a() {}
  return (
    (a.resetWarningCache = i),
    (fu = function () {
      function o(m, h, p, g, w, P) {
        if (P !== n) {
          var y = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((y.name = "Invariant Violation"), y);
        }
      }
      o.isRequired = o;
      function l() {
        return o;
      }
      var c = {
        array: o,
        bigint: o,
        bool: o,
        func: o,
        number: o,
        object: o,
        string: o,
        symbol: o,
        any: o,
        arrayOf: l,
        element: o,
        elementType: o,
        instanceOf: l,
        node: o,
        objectOf: l,
        oneOf: l,
        oneOfType: l,
        shape: l,
        exact: l,
        checkPropTypes: a,
        resetWarningCache: i,
      };
      return (c.PropTypes = c), c;
    }),
    fu
  );
}
var Lh;
function M2() {
  return Lh || ((Lh = 1), (cu.exports = L2()())), cu.exports;
}
var F2 = M2();
const xe = jp(F2);
function Mh(n, i) {
  var a = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    i &&
      (o = o.filter(function (l) {
        return Object.getOwnPropertyDescriptor(n, l).enumerable;
      })),
      a.push.apply(a, o);
  }
  return a;
}
function Ht(n) {
  for (var i = 1; i < arguments.length; i++) {
    var a = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? Mh(Object(a), !0).forEach(function (o) {
          kr(n, o, a[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
      : Mh(Object(a)).forEach(function (o) {
          Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(a, o));
        });
  }
  return n;
}
function Do(n) {
  "@babel/helpers - typeof";
  return (
    (Do =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (i) {
            return typeof i;
          }
        : function (i) {
            return i &&
              typeof Symbol == "function" &&
              i.constructor === Symbol &&
              i !== Symbol.prototype
              ? "symbol"
              : typeof i;
          }),
    Do(n)
  );
}
function kr(n, i, a) {
  return (
    i in n
      ? Object.defineProperty(n, i, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[i] = a),
    n
  );
}
function z2(n, i) {
  if (n == null) return {};
  var a = {},
    o = Object.keys(n),
    l,
    c;
  for (c = 0; c < o.length; c++)
    (l = o[c]), !(i.indexOf(l) >= 0) && (a[l] = n[l]);
  return a;
}
function U2(n, i) {
  if (n == null) return {};
  var a = z2(n, i),
    o,
    l;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (l = 0; l < c.length; l++)
      (o = c[l]),
        !(i.indexOf(o) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, o) &&
          (a[o] = n[o]);
  }
  return a;
}
function sc(n) {
  return B2(n) || W2(n) || $2(n) || V2();
}
function B2(n) {
  if (Array.isArray(n)) return lc(n);
}
function W2(n) {
  if (
    (typeof Symbol < "u" && n[Symbol.iterator] != null) ||
    n["@@iterator"] != null
  )
    return Array.from(n);
}
function $2(n, i) {
  if (n) {
    if (typeof n == "string") return lc(n, i);
    var a = Object.prototype.toString.call(n).slice(8, -1);
    if (
      (a === "Object" && n.constructor && (a = n.constructor.name),
      a === "Map" || a === "Set")
    )
      return Array.from(n);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return lc(n, i);
  }
}
function lc(n, i) {
  (i == null || i > n.length) && (i = n.length);
  for (var a = 0, o = new Array(i); a < i; a++) o[a] = n[a];
  return o;
}
function V2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H2(n) {
  var i,
    a = n.beat,
    o = n.fade,
    l = n.beatFade,
    c = n.bounce,
    m = n.shake,
    h = n.flash,
    p = n.spin,
    g = n.spinPulse,
    w = n.spinReverse,
    P = n.pulse,
    y = n.fixedWidth,
    j = n.inverse,
    b = n.border,
    T = n.listItem,
    _ = n.flip,
    A = n.size,
    R = n.rotation,
    x = n.pull,
    S =
      ((i = {
        "fa-beat": a,
        "fa-fade": o,
        "fa-beat-fade": l,
        "fa-bounce": c,
        "fa-shake": m,
        "fa-flash": h,
        "fa-spin": p,
        "fa-spin-reverse": w,
        "fa-spin-pulse": g,
        "fa-pulse": P,
        "fa-fw": y,
        "fa-inverse": j,
        "fa-border": b,
        "fa-li": T,
        "fa-flip": _ === !0,
        "fa-flip-horizontal": _ === "horizontal" || _ === "both",
        "fa-flip-vertical": _ === "vertical" || _ === "both",
      }),
      kr(i, "fa-".concat(A), typeof A < "u" && A !== null),
      kr(i, "fa-rotate-".concat(R), typeof R < "u" && R !== null && R !== 0),
      kr(i, "fa-pull-".concat(x), typeof x < "u" && x !== null),
      kr(i, "fa-swap-opacity", n.swapOpacity),
      i);
  return Object.keys(S)
    .map(function (E) {
      return S[E] ? E : null;
    })
    .filter(function (E) {
      return E;
    });
}
function q2(n) {
  return (n = n - 0), n === n;
}
function Jg(n) {
  return q2(n)
    ? n
    : ((n = n.replace(/[\-_\s]+(.)?/g, function (i, a) {
        return a ? a.toUpperCase() : "";
      })),
      n.substr(0, 1).toLowerCase() + n.substr(1));
}
var Y2 = ["style"];
function X2(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function K2(n) {
  return n
    .split(";")
    .map(function (i) {
      return i.trim();
    })
    .filter(function (i) {
      return i;
    })
    .reduce(function (i, a) {
      var o = a.indexOf(":"),
        l = Jg(a.slice(0, o)),
        c = a.slice(o + 1).trim();
      return l.startsWith("webkit") ? (i[X2(l)] = c) : (i[l] = c), i;
    }, {});
}
function Zg(n, i) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof i == "string") return i;
  var o = (i.children || []).map(function (p) {
      return Zg(n, p);
    }),
    l = Object.keys(i.attributes || {}).reduce(
      function (p, g) {
        var w = i.attributes[g];
        switch (g) {
          case "class":
            (p.attrs.className = w), delete i.attributes.class;
            break;
          case "style":
            p.attrs.style = K2(w);
            break;
          default:
            g.indexOf("aria-") === 0 || g.indexOf("data-") === 0
              ? (p.attrs[g.toLowerCase()] = w)
              : (p.attrs[Jg(g)] = w);
        }
        return p;
      },
      { attrs: {} }
    ),
    c = a.style,
    m = c === void 0 ? {} : c,
    h = U2(a, Y2);
  return (
    (l.attrs.style = Ht(Ht({}, l.attrs.style), m)),
    n.apply(void 0, [i.tag, Ht(Ht({}, l.attrs), h)].concat(sc(o)))
  );
}
var ev = !1;
try {
  ev = !0;
} catch {}
function G2() {
  if (!ev && console && typeof console.error == "function") {
    var n;
    (n = console).error.apply(n, arguments);
  }
}
function Fh(n) {
  if (n && Do(n) === "object" && n.prefix && n.iconName && n.icon) return n;
  if (oc.icon) return oc.icon(n);
  if (n === null) return null;
  if (n && Do(n) === "object" && n.prefix && n.iconName) return n;
  if (Array.isArray(n) && n.length === 2)
    return { prefix: n[0], iconName: n[1] };
  if (typeof n == "string") return { prefix: "fas", iconName: n };
}
function mu(n, i) {
  return (Array.isArray(i) && i.length > 0) || (!Array.isArray(i) && i)
    ? kr({}, n, i)
    : {};
}
var zh = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  Kn = an.forwardRef(function (n, i) {
    var a = Ht(Ht({}, zh), n),
      o = a.icon,
      l = a.mask,
      c = a.symbol,
      m = a.className,
      h = a.title,
      p = a.titleId,
      g = a.maskId,
      w = Fh(o),
      P = mu("classes", [].concat(sc(H2(a)), sc((m || "").split(" ")))),
      y = mu(
        "transform",
        typeof a.transform == "string" ? oc.transform(a.transform) : a.transform
      ),
      j = mu("mask", Fh(l)),
      b = R2(
        w,
        Ht(
          Ht(Ht(Ht({}, P), y), j),
          {},
          { symbol: c, title: h, titleId: p, maskId: g }
        )
      );
    if (!b) return G2("Could not find icon", w), null;
    var T = b.abstract,
      _ = { ref: i };
    return (
      Object.keys(a).forEach(function (A) {
        zh.hasOwnProperty(A) || (_[A] = a[A]);
      }),
      Q2(T[0], _)
    );
  });
Kn.displayName = "FontAwesomeIcon";
Kn.propTypes = {
  beat: xe.bool,
  border: xe.bool,
  beatFade: xe.bool,
  bounce: xe.bool,
  className: xe.string,
  fade: xe.bool,
  flash: xe.bool,
  mask: xe.oneOfType([xe.object, xe.array, xe.string]),
  maskId: xe.string,
  fixedWidth: xe.bool,
  inverse: xe.bool,
  flip: xe.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: xe.oneOfType([xe.object, xe.array, xe.string]),
  listItem: xe.bool,
  pull: xe.oneOf(["right", "left"]),
  pulse: xe.bool,
  rotation: xe.oneOf([0, 90, 180, 270]),
  shake: xe.bool,
  size: xe.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: xe.bool,
  spinPulse: xe.bool,
  spinReverse: xe.bool,
  symbol: xe.oneOfType([xe.bool, xe.string]),
  title: xe.string,
  titleId: xe.string,
  transform: xe.oneOfType([xe.string, xe.object]),
  swapOpacity: xe.bool,
};
var Q2 = Zg.bind(null, an.createElement);
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ const J2 = {
    prefix: "fab",
    iconName: "facebook-f",
    icon: [
      320,
      512,
      [],
      "f39e",
      "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z",
    ],
  },
  Z2 = {
    prefix: "fab",
    iconName: "instagram",
    icon: [
      448,
      512,
      [],
      "f16d",
      "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    ],
  },
  eS = {
    prefix: "fab",
    iconName: "pinterest-p",
    icon: [
      384,
      512,
      [],
      "f231",
      "M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z",
    ],
  },
  tS = {
    prefix: "fab",
    iconName: "youtube",
    icon: [
      576,
      512,
      [61802],
      "f167",
      "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
    ],
  },
  nS = {
    prefix: "fab",
    iconName: "twitter",
    icon: [
      512,
      512,
      [],
      "f099",
      "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
    ],
  };
function rS() {
  return d.jsx(d.Fragment, {
    children: d.jsxs("div", {
      className: " pl-9 h-[53vh] w-[100%] ",
      style: { backgroundColor: "var(--deepblue)" },
      children: [
        d.jsxs("div", {
          children: [
            " ",
            d.jsx("img", {
              src: Yp,
              className: " h-[25vvh] w-[25vh] items-center ml-[42%]  pt-10",
              alt: "",
            }),
          ],
        }),
        d.jsxs("div", {
          className: "justicify-center text-center ml-5 mr-20",
          children: [
            d.jsx(Kn, {
              icon: J2,
              className:
                "text-blue-600 text-2xl m-2 border-2 h-7 w-7 p-2 border-white rounded-full",
            }),
            d.jsx(Kn, {
              icon: nS,
              className:
                "text-blue-400 text-2xl m-2 border-2 h-7 w-7 p-2 border-white rounded-full",
            }),
            d.jsx(Kn, {
              icon: eS,
              className:
                "text-red-600 text-2xl m-2 border-2 h-7 w-7 p-2 border-white rounded-full",
            }),
            d.jsx(Kn, {
              icon: tS,
              className:
                "text-red-600 text-2xl m-2 border-2 h-7 w-7 p-2 border-white rounded-full",
            }),
            d.jsx(Kn, {
              icon: Z2,
              className:
                "text-pink-500 text-2xl m-2 border-2 h-7 w-7 p-2 border-white rounded-full",
            }),
          ],
        }),
        d.jsx("div", {
          children: d.jsxs("p", {
            className: "text-white text-center",
            children: [
              "2019, All Right Reserved @ Vision Vivaah | Web Design & Development By ",
              d.jsxs("span", {
                className: "text-blue-500 ",
                children: [
                  "Web ",
                  d.jsx("span", {
                    className: "-ml-1",
                    style: { color: "var(--red)" },
                    children: "Hopers",
                  }),
                ],
              }),
              " ",
            ],
          }),
        }),
      ],
    }),
  });
}
const iS = () => {
    const [n, i] = L.useState([]),
      [a, o] = L.useState(null);
    return (
      L.useEffect(() => {
        fetch("http://localhost:5000/testimonials")
          .then((l) => {
            if (!l.ok) throw new Error("Network response was not ok");
            return l.json();
          })
          .then((l) => i(l))
          .catch(() => o("Failed to fetch testimonials"));
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            "bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] h-auto w-[100%] pl-20 mb-24 pt-48",
          children: n.map((l) =>
            d.jsxs(
              "div",
              {
                className:
                  "h-36 w-[96%] bg-white border-l-white flex mt-10 items-center shadow-2xl gap-14 text-gray-500 border-r-4 border-r-black",
                children: [
                  d.jsx("div", {
                    className:
                      "border-t-[30px] border-r-[30px] border-l-white border-t-red-500 w-0 h-0 border-b-[32px] border-r-[32px] border-r-white bg-white border-b-red-500 border-l-red-500 pt-[12.8vh]",
                  }),
                  d.jsx("div", {
                    children: d.jsx("img", {
                      src: l.image,
                      alt: "",
                      className: "w-32 rounded-full left-0",
                    }),
                  }),
                  d.jsxs("div", {
                    children: [
                      d.jsxs("p", {
                        className: "text-md t",
                        children: [l.text, " ", d.jsx("br", {})],
                      }),
                      d.jsxs("h1", {
                        className:
                          "text-red-600 font-bold text-gray-700 text-xl gap-2 mt-4 flex",
                        children: [
                          l.name,
                          " ",
                          d.jsx("div", {
                            className:
                              " .destination-titles text-sm mt-1 font-normal",
                            children: l.location,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              l.id
            )
          ),
        }),
      })
    );
  },
  aS = () =>
    d.jsx(d.Fragment, {
      children: d.jsx("div", {
        className: "pt-28 h-[80vh]",
        children: d.jsxs("div", {
          className: "relative bg-cover bg-center h-[100%] ",
          style: {
            backgroundImage:
              "url('https://www.visionvivaah.com/argon/img/s3.jpg')",
          },
          children: [
            d.jsx("div", {
              className: "absolute inset-0 bg-sky-900 bg-opacity-60",
            }),
            d.jsx("h1", {
              className:
                "destination-titles relative font-extrabold text-center  text-white text-7xl  pt-24",
              children: "Our Services",
            }),
            d.jsxs("div", {
              className: "flex",
              children: [
                d.jsx("p", {
                  className:
                    " ml-[44.5%] w-32 border-2 relative border-red-600 mt-4",
                }),
                d.jsx("p", {
                  className: "border-2 ml-1 w-1 relative border-black mt-4",
                }),
                d.jsx("p", {
                  className: "border-2 w-1 ml-1  border-black mt-4",
                }),
              ],
            }),
            d.jsxs("ul", {
              className:
                " justify-center flex text-white gap-2 mt-3 relative text-xl",
              children: [
                d.jsx("li", {
                  className: "hover:border-b-2 border-white",
                  children: d.jsx(Xe, { to: "/", children: "Home" }),
                }),
                d.jsx("li", { children: "/" }),
                d.jsx("li", {
                  className: "hover:border-b-2 border-white",
                  children: "Our Services",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  oS = () => {
    const [n, i] = L.useState([]);
    return (
      L.useEffect(() => {
        we.get("http://localhost:5000/services")
          .then((a) => i(a.data))
          .catch((a) => console.error("Error fetching services:", a));
      }, []),
      d.jsxs(d.Fragment, {
        children: [
          d.jsx("div", { children: d.jsx(aS, {}) }),
          d.jsx("div", {
            className:
              "bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] pt-14 h-auto w-[100%] pb-40",
            children: d.jsx("div", {
              className: " w-[100%] pl-24 pt-32 flex gap-12 flex-wrap ",
              children: n.map((a) =>
                d.jsxs(
                  "div",
                  {
                    className: " h-[60vh] w-[27.9%] mt-8",
                    children: [
                      d.jsx("img", {
                        className: "h-[36vh] w-[100%] mt-3 ",
                        src: a.image,
                        alt: "",
                      }),
                      d.jsx("h1", {
                        className: "destination-title pt-4 text-3xl",
                        children: a["wedding-type"],
                      }),
                      d.jsx("p", {
                        className: "text-sm mt-3 text-black",
                        children: a.text,
                      }),
                    ],
                  },
                  a.id
                )
              ),
            }),
          }),
        ],
      })
    );
  };
function Ye(n) {
  return Uo({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z",
        },
        child: [],
      },
    ],
  })(n);
}
const sS = [
  {
    id: 1,
    title: "Comprehensive Wedding Planning:",
    text: "We, as Wedding Planners, are here to meticulously manage every aspect of your wedding - from crafting the perfect invitation cards to selecting idyllic honeymoon destinations. We specialize in curating theme-based weddings, orchestrating musical extravaganzas, and planning formal parties, ensuring that every element is flawlessly executed.",
  },
  {
    id: 2,
    title: "Your Comfort is Our Priority:",
    text: "Our utmost dedication lies in ensuring your comfort throughout the entire wedding journey. We want you to revel in each function with your cherished family, friends, and relatives, knowing that every detail is impeccably taken care of",
  },
  {
    id: 3,
    title: "Leave No Stone Unturned:",
    text: "We are wholly committed to making your wedding a resounding success. Our team leaves no stone unturned when it comes to planning and executing every aspect of your special day",
  },
  {
    id: 4,
    title: "Seamless Coordination: ",
    text: "From our very first meeting to the grand culmination on your wedding day, we work closely with you. Our coordination is seamless, allowing us to bring your vision to life flawlessly",
  },
  {
    id: 5,
    title: "Exceptional Value for Your Investment:",
    text: " Lastly, we take immense pride in offering exceptional value for your money. Your trust in us is met with a commitment to delivering top-notch service and an unforgettable wedding experience.",
  },
];
function lS() {
  return d.jsx(d.Fragment, {
    children: d.jsxs("div", {
      class:
        "bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] top-0 h-screen w-[100%]  ",
      children: [
        d.jsx("h1", {
          className:
            "destination-titles  font-extrabold text-center text-5xl  pt-24",
          children: "What We are",
        }),
        d.jsxs("div", {
          className: "flex",
          children: [
            d.jsx("p", {
              className: " ml-[44.5%] w-32 border-2 border-red-600 mt-4",
            }),
            d.jsx("p", { className: "border-2 ml-1 w-1 border-black mt-4" }),
            d.jsx("p", { className: "border-2 w-1 ml-1 border-black mt-4" }),
          ],
        }),
        d.jsxs("div", {
          className: "w-[94%]  flex  pt-10",
          children: [
            d.jsx("div", {
              className: " w-[45%]  mt-14 justify-center",
              children: d.jsx("img", {
                src: "https://www.visionvivaah.com/sectionmedia/1563884033717864.png",
                alt: "",
                className: "w-[100%]",
              }),
            }),
            d.jsx("div", {
              children: sS.map((n) =>
                d.jsx(
                  "div",
                  {
                    className: "w-[90%] ml-4  pt-4",
                    children: d.jsx("ul", {
                      className: "p-6",
                      children: d.jsxs("li", {
                        className: "flex ",
                        children: [
                          d.jsx("span", {
                            className: "pt-1 mr-2",
                            children: d.jsx(Ye, {}),
                          }),
                          d.jsxs("span", {
                            className: "absolute ml-5 text-md",
                            children: [
                              n.title,
                              " ",
                              d.jsx("span", {
                                className: " font-thin",
                                children: n.text,
                              }),
                            ],
                          }),
                          "  ",
                        ],
                      }),
                    }),
                  },
                  n.id
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function uS() {
  return d.jsx(d.Fragment, {
    children: d.jsxs("div", {
      className: "mt-[66vh]",
      children: [
        d.jsx("h1", {
          className:
            "destination-titles  font-extrabold text-center mt-24 text-5xl",
          children: "What We do",
        }),
        d.jsxs("div", {
          className: "flex",
          children: [
            d.jsx("p", {
              className: " ml-[44.5%] w-32 border-2 border-red-600 mt-4",
            }),
            d.jsx("p", { className: "border-2 ml-1 w-1 border-black mt-4" }),
            d.jsx("p", { className: "border-2 w-1 ml-1 border-black mt-4" }),
          ],
        }),
        d.jsxs("div", {
          className: " flex mt-10 justify-center",
          children: [
            d.jsx("div", {
              className: "w-[30%]",
              children: d.jsxs("ul", {
                className: "p-2 ml-10",
                children: [
                  d.jsxs("li", {
                    className: "flex p-3",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", { children: "Artist Mangement" }),
                      " ",
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", { children: " Videography " }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", { children: "Photography " }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", { children: "Ritual Ceremony " }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", { children: "Home Decoration " }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", { children: "Many More ! " }),
                    ],
                  }),
                ],
              }),
            }),
            d.jsx("div", {
              className: "w-[66%]  h-[60vh]",
              children: d.jsx("img", {
                src: "https://www.visionvivaah.com/sectionmedia/1563884033787808.png",
                className: "h-[100%] w-[100%]",
                alt: "",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function cS() {
  return d.jsx(d.Fragment, {
    children: d.jsxs("div", {
      class:
        "bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] top-0  w-[100%]  ",
      children: [
        d.jsx("h1", {
          className:
            "destination-titles  font-extrabold text-center pt-24 text-5xl",
          children: "Why Choose us",
        }),
        d.jsxs("div", {
          className: "flex",
          children: [
            d.jsx("p", {
              className: " ml-[44.5%] w-32 mt-4 border-red-500 border-2",
            }),
            d.jsx("p", { className: "border-2 ml-1 w-1 border-black mt-4" }),
            d.jsx("p", { className: "border-2 w-1 ml-1 border-black mt-4" }),
          ],
        }),
        d.jsxs("div", {
          className: "h-[80vh] w-[100%] flex mt-20 gap-9",
          children: [
            d.jsx("div", {
              className: "h-[60vh] w-[90vh] ml-16 -mr-5 mt-5 ",
              children: d.jsx("img", {
                className: "h-[100%] w-[100%] ",
                src: "https://www.visionvivaah.com/sectionmedia/1563884033156609.png",
                alt: "",
              }),
            }),
            d.jsx("div", {
              className: "h-[120vh] w-[125vh] ",
              children: d.jsxs("ul", {
                className: " text-sm ",
                children: [
                  d.jsx("li", {
                    className: "flex p-3 py-1",
                    children:
                      "The goal behind establishing Vision Vivaah is to offer people worldwide services tailored to their wedding needs. This includes connecting them with the best service providers, offering gift solutions, providing guidance on pre and post-marriage etiquette, and most importantly, efficiently managing the entire event.  ",
                  }),
                  d.jsxs("li", {
                    className: "flex p-3 py-1 mt-4",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", {
                        children: " Your one stop shop for designer weddings.",
                      }),
                      " ",
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3 py-1",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", {
                        children: " Adding uniqueness to your wedding event. ",
                      }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3 py-1",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", {
                        children:
                          "A strong network to provide you with various specialties from different cities of India. ",
                      }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3 py-1",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", {
                        children:
                          "Adding a designer touch to enhance the ambiance. ",
                      }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3 py-1 ",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", {
                        children: "Highly cost-effective services.",
                      }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3 py-1",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", {
                        children:
                          "We assist you in identifying the best service providers in your town.",
                      }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3 py-1",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", {
                        children:
                          "Maintaining high professionalism and dedication. ",
                      }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3 py-1",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", {
                        children:
                          "Comprehensive coverage of every aspect of your wedding, ensuring a symmetrical touch.",
                      }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3 py-1",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", {
                        children:
                          "Our development department gives new concepts and designs.",
                      }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3 py-1",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", {
                        children: "Enjoy a hassle-free wedding experience.",
                      }),
                    ],
                  }),
                  d.jsxs("li", {
                    className: "flex p-3 py-1",
                    children: [
                      d.jsx("span", {
                        className: "pt-1 mr-2",
                        children: d.jsx(Ye, {}),
                      }),
                      d.jsx("span", {
                        children:
                          "We work to exacting standards and ensure timely delivery.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function dS() {
  const [n, i] = L.useState([]);
  L.useEffect(() => {
    a();
  }, []);
  const a = async () => {
    try {
      const o = await we.get("http://localhost:5000/teams");
      i(o.data);
    } catch (o) {
      console.error("Error fetching team data:", o);
    }
  };
  return d.jsxs("div", {
    className:
      "bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] top-0 w-[100%]",
    children: [
      d.jsx("h1", {
        className:
          "destination-titles font-extrabold text-center pt-24 text-5xl",
        children: "Team VisionVivaah",
      }),
      d.jsxs("div", {
        className: "flex justify-center",
        children: [
          d.jsx("p", { className: " w-32 mt-4 border-red-500 border-2" }),
          d.jsx("p", { className: "border-2 ml-1 w-1 border-black mt-4" }),
          d.jsx("p", { className: "border-2 w-1 ml-1 border-black mt-4" }),
        ],
      }),
      d.jsx("div", {
        className: "flex flex-wrap justify-center gap-12 mt-20",
        children: n.map((o) =>
          d.jsxs(
            "div",
            {
              className:
                "h-96 w-60 border-1 border-gray-500 rounded-md shadow-md bg-white",
              children: [
                d.jsx("div", {
                  className: "h-[48%] w-[40%] ml-16 mt-2",
                  children: d.jsx("img", {
                    className: "h-[85%] w-[100%] rounded-full",
                    src: o.image,
                    alt: o.name,
                  }),
                }),
                d.jsxs("div", {
                  children: [
                    d.jsx("p", {
                      className:
                        "destination-titl text-center -ml-8 text-red-500 text-3xl",
                      children: o.name,
                    }),
                    d.jsx("p", {
                      className:
                        "destination-post text-center -ml-12 mt-2 text-xl",
                      children: o.post,
                    }),
                    d.jsx("p", {
                      className: "text-sm text-center p-2 mt-2 mr-1",
                      children: o.text,
                    }),
                  ],
                }),
              ],
            },
            o.id
          )
        ),
      }),
    ],
  });
}
const fS = () =>
  d.jsx(d.Fragment, {
    children: d.jsx("div", {
      className: "pt-28 h-[80vh]",
      children: d.jsxs("div", {
        className: "relative bg-cover bg-center h-[100%] ",
        style: {
          backgroundImage:
            "url('https://www.visionvivaah.com/cms/about-us.jpg')",
        },
        children: [
          d.jsx("div", {
            className: "absolute inset-0 bg-sky-900 bg-opacity-60",
          }),
          d.jsx("h1", {
            className:
              "destination-titles relative font-extrabold text-center  text-white text-7xl  pt-24",
            children: "about Us",
          }),
          d.jsxs("div", {
            className: "flex",
            children: [
              d.jsx("p", {
                className:
                  " ml-[44.5%] w-32 border-2 relative border-red-600 mt-4",
              }),
              d.jsx("p", {
                className: "border-2 ml-1 w-1 relative border-black mt-4",
              }),
              d.jsx("p", { className: "border-2 w-1 ml-1  border-black mt-4" }),
            ],
          }),
          d.jsxs("ul", {
            className:
              " justify-center flex text-white gap-2 mt-3 relative text-xl",
            children: [
              d.jsx("li", {
                className: "hover:border-b-2 border-white",
                children: d.jsx(Xe, { to: "/", children: "Home" }),
              }),
              d.jsx("li", { children: "/" }),
              d.jsx("li", {
                className: "hover:border-b-2 border-white",
                children: "About Us",
              }),
            ],
          }),
        ],
      }),
    }),
  });
function mS() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx("div", { children: d.jsx(fS, {}) }),
      d.jsxs("div", {
        className: " h-[40vh] w-[90%] ml-16 ",
        children: [
          d.jsx("p", {
            className: "text-center   text-gray-900 font-sans pt-4",
            children:
              "Vision Vivah designs beautiful, elegant, and luxurious weddings. Our personal, bespoke, and flexible approach to wedding planning is what sets Vivaah apart. Our clients come from all walks of life, and our services are tailored to meet their individual needs. We take pride in our international reputation for delivering exceptional events with discretion and world-class service. We are privileged to collaborate with some of the most respected companies in the events business, all of whom share our passion, commitment, and high standards of service, excellence, and attention to detail",
          }),
          d.jsx("br", {}),
          d.jsx("p", {
            className: "text-center text-gray-900 font-serif ",
            children:
              "The emotion counts as it is related to the bride and groom's childhood dreams, and we highly value it.",
          }),
          d.jsx("br", {}),
          d.jsx("p", {
            className: "text-center  text-gray-900 font-serif pt-2",
            children:
              "To turn your dream into reality, we provide a one-stop solution for weddings and events. We aim to enhance your peace of mind by offering a comprehensive range of wedding services, sparing you the hassle of dealing with individual suppliers. As a renowned company with extensive experience in organizing weddings, we secure the best rates from all vendors in the market, which can benefit you.",
          }),
        ],
      }),
      d.jsx("div", { className: "mt-40", children: d.jsx(lS, {}) }),
      d.jsx("div", { className: "", children: d.jsx(uS, {}) }),
      d.jsx("div", { className: "mt-32", children: d.jsx(cS, {}) }),
      d.jsx("div", { className: "mt-34", children: d.jsx(dS, {}) }),
    ],
  });
}
const hS = [
  {
    id: 1,
    image:
      "https://www.visionvivaah.com/services-image/thumbnail/1565175349.jpg",
    "wedding-type": "Destination Wedding",
    text: "Picture yourselves in a warm, luxurious atmosphere with happy friends and family toasting the two of you after recuperating from travel time. Music",
  },
  {
    id: 2,
    image:
      "https://www.visionvivaah.com/services-image/thumbnail/1565175323.jpg",
    "wedding-type": "Wedding Planning",
    text: "Wedding is the most important time of the life for you, it brings a lot of responsibilities and stress as well. There are tons of things that you ha",
  },
  {
    id: 3,
    image:
      "https://www.visionvivaah.com/services-image/thumbnail/1565175337.jpg",
    "wedding-type": "Venue Selection",
    text: "We as planners are much more familiar with the capabilities of a space, the layout, and the time and items you'll need to really transform it. We se",
  },
  {
    id: 4,
    image:
      "https://www.visionvivaah.com/services-image/thumbnail/1565175362.jpg",
    "wedding-type": "Pre Wedding Rituals",
    text: "An Indian wedding is a sweet concoction of traditions, values and rituals that are not just beautiful to look at but have a deeper meaning - a more",
  },
  {
    id: 5,
    image:
      "https://www.visionvivaah.com/services-image/thumbnail/1565175415.jpg",
    "wedding-type": "Wedding Entertainment",
    text: "A crucial mistake some couples make is underestimating the importance of the entertainment on their special day. Whether it’s a DJ or a Band, hiri",
  },
  {
    id: 6,
    image:
      "https://www.visionvivaah.com/services-image/thumbnail/1565175438.jpg",
    "wedding-type": "Wedding Decor",
    text: "No Indian wedding is ever complete without elaborate wedding decorations.  Colorful Indian weddings require proper preparation, planning and co",
  },
];
function pS() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx("h1", {
        className:
          "destination-titles  font-extrabold text-center  text-5xl pt-24",
        children: "Our Services",
      }),
      d.jsxs("div", {
        className: "flex ",
        children: [
          d.jsx("p", {
            className: " ml-[44.5%] w-32 border-2 border-red-600 mt-4",
          }),
          d.jsx("p", { className: "border-2 ml-1 w-1 border-black mt-4" }),
          d.jsx("p", { className: "border-2 w-1 ml-1 border-black mt-4" }),
        ],
      }),
      d.jsx("div", {
        className: "h-[100vh] w-[100%] pl-24 pt-16 flex gap-10 flex-wrap",
        children: hS.map((n) =>
          d.jsxs(
            "div",
            {
              className: "h-[60vh] w-[28.9%] ",
              children: [
                d.jsx("div", {
                  className: "",
                  children: d.jsx("img", { src: n.image, alt: "" }),
                }),
                d.jsxs("div", {
                  children: [
                    d.jsx("h1", {
                      className: "destination-title pt-4 text-3xl",
                      children: n["wedding-type"],
                    }),
                    d.jsxs("p", {
                      class: "text-sm mt-3 text-black",
                      children: [n.text, "."],
                    }),
                  ],
                }),
              ],
            },
            n.id
          )
        ),
      }),
      d.jsx("div", {
        className: "",
        children: d.jsx(zo, {
          to: "/services",
          className:
            " mt-56 ml-[41%]  bg-red-500  text-white px-4 py-2 text-3xl   inline-block transition-all duration-300  hover:bg-green-500 hover:rounded-3xl",
          children: " VIEW MORE",
        }),
      }),
    ],
  });
}
const gS = () =>
    d.jsx(d.Fragment, {
      children: d.jsx("div", {
        className: "pt-28 h-[80vh]",
        children: d.jsxs("div", {
          className: "relative bg-cover bg-center h-[100%] ",
          style: {
            backgroundImage:
              "url('https://www.visionvivaah.com/aboutvivaah/backgound.jpg')",
          },
          children: [
            d.jsx("div", {
              className: "absolute inset-0 bg-sky-900 bg-opacity-60",
            }),
            d.jsx("h1", {
              className:
                "destination-titles relative font-extrabold text-center  text-white text-5xl  pt-24",
              children: "About Vivaah The Wedding Professional Services",
            }),
            d.jsxs("div", {
              className: "flex",
              children: [
                d.jsx("p", {
                  className:
                    " ml-[44.5%] w-32 border-2 relative border-red-600 mt-4",
                }),
                d.jsx("p", {
                  className: "border-2 ml-1 w-1 relative border-black mt-4",
                }),
                d.jsx("p", {
                  className: "border-2 w-1 ml-1  border-black mt-4",
                }),
              ],
            }),
            d.jsx("div", {
              children: d.jsx("p", {
                className: "text-center relative text-white pt-5 font-semibold",
                children:
                  "The Emotion counts as it is related the Bride and Groom’s childhood Dream and we value it.",
              }),
            }),
            d.jsx("button", {
              className:
                "hover:bg-red-500 rounded-[25vh] border-2 border-white text-3xl text-bold transition duration-300 text-white w-60 p-2 ml-[40%] mt-10 relative",
              children: d.jsx(zo, { to: "/about-us", children: "Read More" }),
            }),
          ],
        }),
      }),
    }),
  vS = () => {
    const [n, i] = L.useState({
        name: "",
        email: "",
        mobile: "",
        city: "",
        message: "",
      }),
      a = (l) => {
        i({ ...n, [l.target.name]: l.target.value });
      },
      o = (l) => {
        l.preventDefault(),
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(n),
          })
            .then((c) => c.json())
            .then(() => {
              alert("Data saved successfully!"),
                i({ name: "", email: "", mobile: "", city: "", message: "" });
            });
      };
    return d.jsx(d.Fragment, {
      children: d.jsx("div", {
        className: "w-[100%] h-[180vh] pt-14 -mb-4",
        children: d.jsxs("div", {
          className: "relative bg-cover bg-center h-[100%]",
          style: {
            backgroundImage:
              "url('https://www.visionvivaah.com/argon/img/contactus.jpg')",
          },
          children: [
            d.jsx("div", {
              className: "absolute inset-0 bg-sky-900 bg-opacity-60",
            }),
            d.jsx("h1", {
              className:
                "destination-titles font-extrabold text-center text-5xl text-white relative pt-24",
              children: "Contact us",
            }),
            d.jsxs("div", {
              className: "flex",
              children: [
                d.jsx("p", {
                  className:
                    "ml-[44.5%] w-36 border-4 relative border-red-600 mt-4",
                }),
                d.jsx("p", {
                  className: "border-4 ml-1 w-1 relative border-black mt-4",
                }),
                d.jsx("p", {
                  className: "border-4 w-1 ml-1 border-black mt-4",
                }),
              ],
            }),
            d.jsx("div", {
              children: d.jsx("h2", {
                className:
                  "relative text-white text-lg font-semibold text-center pt-4",
                children: "We Look Forward To Hearing From You",
              }),
            }),
            d.jsxs("div", {
              className: "flex mt-16 relative",
              children: [
                d.jsx("div", {
                  className: "w-[50%] h-[120vh] relative ml-16",
                  children: d.jsxs("form", {
                    onSubmit: o,
                    className: "space-y-4 p-6 rounded-lg",
                    children: [
                      d.jsxs("div", {
                        children: [
                          d.jsx("label", {
                            htmlFor: "name",
                            className: "block text-white text-xl font-semibold",
                            children: "Name:",
                          }),
                          d.jsx("input", {
                            type: "text",
                            id: "name",
                            name: "name",
                            value: n.name,
                            onChange: a,
                            placeholder: "Enter your name",
                            required: !0,
                            className:
                              "border-2 bg-transparent border-white rounded w-full p-2",
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        children: [
                          d.jsx("label", {
                            htmlFor: "email",
                            className: "block text-white text-xl font-semibold",
                            children: "Email:",
                          }),
                          d.jsx("input", {
                            type: "email",
                            id: "email",
                            name: "email",
                            value: n.email,
                            onChange: a,
                            placeholder: "Enter your email",
                            required: !0,
                            className:
                              "border-2 bg-transparent border-white rounded w-full p-2",
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        children: [
                          d.jsx("label", {
                            htmlFor: "mobile",
                            className: "block text-white text-xl font-semibold",
                            children: "Mobile:",
                          }),
                          d.jsx("input", {
                            type: "tel",
                            id: "mobile",
                            name: "mobile",
                            value: n.mobile,
                            onChange: a,
                            placeholder: "Enter your mobile number",
                            pattern: "[0-9]{10}",
                            required: !0,
                            className:
                              "border-2 bg-transparent border-white rounded w-full p-2",
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        children: [
                          d.jsx("label", {
                            htmlFor: "city",
                            className: "block text-white text-xl font-semibold",
                            children: "City:",
                          }),
                          d.jsx("input", {
                            type: "text",
                            id: "city",
                            name: "city",
                            value: n.city,
                            onChange: a,
                            placeholder: "Enter your city",
                            required: !0,
                            className:
                              "border-2 bg-transparent border-white rounded w-full p-2",
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        children: [
                          d.jsx("label", {
                            htmlFor: "message",
                            className: "block text-white text-xl font-semibold",
                            children: "Message:",
                          }),
                          d.jsx("textarea", {
                            id: "message",
                            name: "message",
                            value: n.message,
                            onChange: a,
                            placeholder: "Type your message here",
                            rows: "4",
                            required: !0,
                            className:
                              "border-2 bg-transparent border-white rounded w-full p-2",
                          }),
                        ],
                      }),
                      d.jsx("button", {
                        type: "submit",
                        className:
                          "text-white p-3 text-xl w-full rounded-3xl bg-red-600 hover:bg-blue-700 hover:border-4 border-sky-500",
                        children: "SEND NOW",
                      }),
                    ],
                  }),
                }),
                d.jsxs("div", {
                  className: "w-[45%] h-[100vh] ml-20 relative text-white",
                  children: [
                    d.jsx(Vp, { className: "text-3xl mt-12 ml-64" }),
                    d.jsxs("p", {
                      className: "text-center mt-2 text-md",
                      children: [
                        "+91-8266000652",
                        d.jsx("br", {}),
                        "+91-8077320515",
                      ],
                    }),
                    d.jsx(Hp, { className: "text-3xl mt-24 ml-64" }),
                    d.jsx("p", {
                      className: "text-center mt-2 text-md",
                      children: "lifeevents001@gmail.com",
                    }),
                    d.jsx(qp, { className: "text-4xl mt-24 ml-64" }),
                    d.jsxs("p", {
                      className: "mt-2 text-sm text-center",
                      children: [
                        "Life Events,",
                        d.jsx("br", {}),
                        "220/4 Nehru Nagar, GarhRoad, Meerut",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  };
function yS() {
  return d.jsx(d.Fragment, {
    children: d.jsxs("div", {
      className: "-mb-24",
      children: [
        "    ",
        d.jsx("h1", {
          className:
            "destination-titles  font-extrabold text-center text-5xl  pt-48",
          children: "Destination Wedding",
        }),
        d.jsxs("div", {
          className: "flex",
          children: [
            d.jsx("p", {
              className: " ml-[44.5%] w-32 border-4 border-red-600 mt-4",
            }),
            d.jsx("p", { className: "border-4 ml-1 w-1 border-black mt-4" }),
            d.jsx("p", { className: "border-4 w-1 ml-1 border-black mt-4" }),
          ],
        }),
        d.jsx("div", {
          children: d.jsx("p", {
            className: "text-center pt-4 text-lg w-[90%] ml-14",
            children:
              "Having a wedding away from home is attractive to different couples for different reasons. The phrase ‘Destination Weddings’ itself creates a lot of excitement for everyone. But planning and executing one is a difficult job. The best part about a destination wedding ceremony is that the two families get more time to spend together. Moreover, only near and dear ones gather to celebrate the union. So, to manage it beautifully, we have an experienced team of wedding planners in Ludhiana Punjab who are able to manage everything starting from selecting the venue to curating essentials for the wedding. Also If you are looking for best wedding planner in Chandigarh, Wedding planner in Mumbai, Wedding Planner in Delhi & Wedding Planner in Jaipur. Then Vision Vivaah is always there for you. Feel free to contact us anytime",
          }),
        }),
        d.jsx("div", {
          className: "w-[100%] h-[120vh] mt-5",
          children: d.jsx("img", {
            src: "https://www.visionvivaah.com/location/image.jpg",
            alt: "",
            className: "w-[100%] h-[100%]",
          }),
        }),
      ],
    }),
  });
}
const xS = () => {
  const [n, i] = L.useState([]),
    [a, o] = L.useState(0);
  return (
    L.useEffect(() => {
      fetch("http://localhost:5000/slider")
        .then((l) => l.json())
        .then((l) => i(l))
        .catch((l) => console.error("Error fetching slider data:", l));
    }, []),
    L.useEffect(() => {
      const l = setInterval(() => {
        o((c) => (c + 1) % n.length);
      }, 5e3);
      return () => clearInterval(l);
    }, [n]),
    n.length === 0
      ? d.jsx("p", { children: "Loading..." })
      : d.jsx("div", {
          className: "vertical-carousel",
          children: n.map((l, c) =>
            d.jsx(
              "div",
              {
                className: `carousel-slide ${c === a ? "active" : ""}`,
                style: { backgroundImage: `url(${l.image})` },
                children: d.jsxs("div", {
                  className: "carousel-caption",
                  children: [
                    d.jsx("h3", { children: l.title }),
                    d.jsx("p", { children: l.description }),
                  ],
                }),
              },
              l.id
            )
          ),
        })
  );
};
var hu = {},
  pu = {},
  gu = {},
  lo = {},
  Pt = {},
  Uh;
function nr() {
  if (Uh) return Pt;
  (Uh = 1),
    Object.defineProperty(Pt, "__esModule", { value: !0 }),
    (Pt.TraceDirectionKey = Pt.Direction = Pt.Axis = void 0);
  var n;
  (Pt.TraceDirectionKey = n),
    (function (o) {
      (o.NEGATIVE = "NEGATIVE"), (o.POSITIVE = "POSITIVE"), (o.NONE = "NONE");
    })(n || (Pt.TraceDirectionKey = n = {}));
  var i;
  (Pt.Direction = i),
    (function (o) {
      (o.TOP = "TOP"),
        (o.LEFT = "LEFT"),
        (o.RIGHT = "RIGHT"),
        (o.BOTTOM = "BOTTOM"),
        (o.NONE = "NONE");
    })(i || (Pt.Direction = i = {}));
  var a;
  return (
    (Pt.Axis = a),
    (function (o) {
      (o.X = "x"), (o.Y = "y");
    })(a || (Pt.Axis = a = {})),
    Pt
  );
}
var Bh;
function tv() {
  if (Bh) return lo;
  (Bh = 1),
    Object.defineProperty(lo, "__esModule", { value: !0 }),
    (lo.calculateDirection = i);
  var n = nr();
  function i(a) {
    var o,
      l = n.TraceDirectionKey.NEGATIVE,
      c = n.TraceDirectionKey.POSITIVE,
      m = a[a.length - 1],
      h = a[a.length - 2] || 0;
    return a.every(function (p) {
      return p === 0;
    })
      ? n.TraceDirectionKey.NONE
      : ((o = m > h ? c : l), m === 0 && (o = h < 0 ? c : l), o);
  }
  return lo;
}
var uo = {},
  Rt = {},
  Wh;
function Ic() {
  if (Wh) return Rt;
  (Wh = 1),
    Object.defineProperty(Rt, "__esModule", { value: !0 }),
    (Rt.resolveAxisDirection =
      Rt.getDirectionValue =
      Rt.getDirectionKey =
      Rt.getDifference =
        void 0);
  var n = nr(),
    i = function () {
      var m =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        h = Object.keys(m).toString();
      switch (h) {
        case n.TraceDirectionKey.POSITIVE:
          return n.TraceDirectionKey.POSITIVE;
        case n.TraceDirectionKey.NEGATIVE:
          return n.TraceDirectionKey.NEGATIVE;
        default:
          return n.TraceDirectionKey.NONE;
      }
    };
  Rt.getDirectionKey = i;
  var a = function () {
    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return m[m.length - 1] || 0;
  };
  Rt.getDirectionValue = a;
  var o = function () {
    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
      h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return Math.abs(m - h);
  };
  Rt.getDifference = o;
  var l = function (m, h) {
    var p = n.Direction.LEFT,
      g = n.Direction.RIGHT,
      w = n.Direction.NONE;
    return (
      m === n.Axis.Y && ((p = n.Direction.BOTTOM), (g = n.Direction.TOP)),
      h === n.TraceDirectionKey.NEGATIVE && (w = p),
      h === n.TraceDirectionKey.POSITIVE && (w = g),
      w
    );
  };
  return (Rt.resolveAxisDirection = l), Rt;
}
var $h;
function nv() {
  if ($h) return uo;
  ($h = 1),
    Object.defineProperty(uo, "__esModule", { value: !0 }),
    (uo.calculateDirectionDelta = a);
  var n = nr(),
    i = Ic();
  function a(o) {
    for (
      var l =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        c = o.length,
        m = c - 1,
        h = n.TraceDirectionKey.NONE;
      m >= 0;
      m--
    ) {
      var p = o[m],
        g = (0, i.getDirectionKey)(p),
        w = (0, i.getDirectionValue)(p[g]),
        P = o[m - 1] || {},
        y = (0, i.getDirectionKey)(P),
        j = (0, i.getDirectionValue)(P[y]),
        b = (0, i.getDifference)(w, j);
      if (b >= l) {
        h = g;
        break;
      } else h = y;
    }
    return h;
  }
  return uo;
}
var co = {},
  Vh;
function rv() {
  if (Vh) return co;
  (Vh = 1),
    Object.defineProperty(co, "__esModule", { value: !0 }),
    (co.calculateDuration = n);
  function n() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
      a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return i ? a - i : 0;
  }
  return co;
}
var fo = {},
  Hh;
function wS() {
  if (Hh) return fo;
  (Hh = 1),
    Object.defineProperty(fo, "__esModule", { value: !0 }),
    (fo.calculateMovingPosition = n);
  function n(i) {
    if ("changedTouches" in i) {
      var a = i.changedTouches && i.changedTouches[0];
      return { x: a && a.clientX, y: a && a.clientY };
    }
    return { x: i.clientX, y: i.clientY };
  }
  return fo;
}
var mo = {},
  ho = {},
  qh;
function iv() {
  if (qh) return ho;
  (qh = 1),
    Object.defineProperty(ho, "__esModule", { value: !0 }),
    (ho.updateTrace = n);
  function n(i, a) {
    var o = i[i.length - 1];
    return o !== a && i.push(a), i;
  }
  return ho;
}
var po = {},
  go = {},
  Yh;
function av() {
  if (Yh) return go;
  (Yh = 1),
    Object.defineProperty(go, "__esModule", { value: !0 }),
    (go.calculateTraceDirections = a);
  var n = nr();
  function i(o, l, c) {
    return (
      l in o
        ? Object.defineProperty(o, l, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (o[l] = c),
      o
    );
  }
  function a() {
    for (
      var o =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        l = [],
        c = n.TraceDirectionKey.POSITIVE,
        m = n.TraceDirectionKey.NEGATIVE,
        h = 0,
        p = [],
        g = n.TraceDirectionKey.NONE;
      h < o.length;
      h++
    ) {
      var w = o[h],
        P = o[h - 1];
      if (p.length) {
        var y = w > P ? c : m;
        g === n.TraceDirectionKey.NONE && (g = y),
          y === g
            ? p.push(w)
            : (l.push(i({}, g, p.slice())), (p = []), p.push(w), (g = y));
      } else w !== 0 && (g = w > 0 ? c : m), p.push(w);
    }
    return p.length && l.push(i({}, g, p)), l;
  }
  return go;
}
var Xh;
function ov() {
  if (Xh) return po;
  (Xh = 1),
    Object.defineProperty(po, "__esModule", { value: !0 }),
    (po.resolveDirection = c);
  var n = tv(),
    i = av(),
    a = nv(),
    o = Ic(),
    l = nr();
  function c(m) {
    var h =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : l.Axis.X,
      p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    if (p) {
      var g = (0, i.calculateTraceDirections)(m),
        w = (0, a.calculateDirectionDelta)(g, p);
      return (0, o.resolveAxisDirection)(h, w);
    }
    var P = (0, n.calculateDirection)(m);
    return (0, o.resolveAxisDirection)(h, P);
  }
  return po;
}
var vo = {},
  Kh;
function sv() {
  if (Kh) return vo;
  (Kh = 1),
    Object.defineProperty(vo, "__esModule", { value: !0 }),
    (vo.calculateVelocity = n);
  function n(i, a, o) {
    var l = Math.sqrt(i * i + a * a);
    return l / (o || 1);
  }
  return vo;
}
var Gh;
function bS() {
  if (Gh) return mo;
  (Gh = 1),
    Object.defineProperty(mo, "__esModule", { value: !0 }),
    (mo.calculatePosition = c);
  var n = iv(),
    i = ov(),
    a = rv(),
    o = sv(),
    l = nr();
  function c(m, h) {
    var p = m.start,
      g = m.x,
      w = m.y,
      P = m.traceX,
      y = m.traceY,
      j = h.rotatePosition,
      b = h.directionDelta,
      T = j.x - g,
      _ = w - j.y,
      A = Math.abs(T),
      R = Math.abs(_);
    (0, n.updateTrace)(P, T), (0, n.updateTrace)(y, _);
    var x = (0, i.resolveDirection)(P, l.Axis.X, b),
      S = (0, i.resolveDirection)(y, l.Axis.Y, b),
      E = (0, a.calculateDuration)(p, Date.now()),
      k = (0, o.calculateVelocity)(A, R, E);
    return {
      absX: A,
      absY: R,
      deltaX: T,
      deltaY: _,
      directionX: x,
      directionY: S,
      duration: E,
      positionX: j.x,
      positionY: j.y,
      velocity: k,
    };
  }
  return mo;
}
var ji = {},
  Qh;
function SS() {
  if (Qh) return ji;
  (Qh = 1),
    Object.defineProperty(ji, "__esModule", { value: !0 }),
    (ji.checkIsMoreThanSingleTouches = void 0);
  var n = function (a) {
    return !!(a.touches && a.touches.length > 1);
  };
  return (ji.checkIsMoreThanSingleTouches = n), ji;
}
var jr = {},
  yo = {},
  Jh;
function lv() {
  if (Jh) return yo;
  (Jh = 1),
    Object.defineProperty(yo, "__esModule", { value: !0 }),
    (yo.createOptions = n);
  function n() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (
      Object.defineProperty(i, "passive", {
        get: function () {
          return (this.isPassiveSupported = !0), !0;
        },
        enumerable: !0,
      }),
      i
    );
  }
  return yo;
}
var Zh;
function _S() {
  if (Zh) return jr;
  (Zh = 1),
    Object.defineProperty(jr, "__esModule", { value: !0 }),
    (jr.checkIsPassiveSupported = i),
    (jr.noop = void 0);
  var n = lv();
  function i(o) {
    if (typeof o == "boolean") return o;
    var l = { isPassiveSupported: o };
    try {
      var c = (0, n.createOptions)(l);
      window.addEventListener("checkIsPassiveSupported", a, c),
        window.removeEventListener("checkIsPassiveSupported", a, c);
    } catch {}
    return l.isPassiveSupported;
  }
  var a = function () {};
  return (jr.noop = a), jr;
}
var Ci = {},
  ep;
function ES() {
  if (ep) return Ci;
  (ep = 1),
    Object.defineProperty(Ci, "__esModule", { value: !0 }),
    (Ci.checkIsTouchEventsSupported = void 0);
  function n(a) {
    "@babel/helpers - typeof";
    return (
      (n =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (o) {
              return typeof o;
            }
          : function (o) {
              return o &&
                typeof Symbol == "function" &&
                o.constructor === Symbol &&
                o !== Symbol.prototype
                ? "symbol"
                : typeof o;
            }),
      n(a)
    );
  }
  var i = function () {
    return (
      (typeof window > "u" ? "undefined" : n(window)) === "object" &&
      ("ontouchstart" in window || !!window.navigator.maxTouchPoints)
    );
  };
  return (Ci.checkIsTouchEventsSupported = i), Ci;
}
var ki = {},
  tp;
function TS() {
  if (tp) return ki;
  (tp = 1),
    Object.defineProperty(ki, "__esModule", { value: !0 }),
    (ki.getInitialState = void 0);
  function n(l, c) {
    var m = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(l);
      c &&
        (h = h.filter(function (p) {
          return Object.getOwnPropertyDescriptor(l, p).enumerable;
        })),
        m.push.apply(m, h);
    }
    return m;
  }
  function i(l) {
    for (var c = 1; c < arguments.length; c++) {
      var m = arguments[c] != null ? arguments[c] : {};
      c % 2
        ? n(Object(m), !0).forEach(function (h) {
            a(l, h, m[h]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(m))
        : n(Object(m)).forEach(function (h) {
            Object.defineProperty(l, h, Object.getOwnPropertyDescriptor(m, h));
          });
    }
    return l;
  }
  function a(l, c, m) {
    return (
      c in l
        ? Object.defineProperty(l, c, {
            value: m,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (l[c] = m),
      l
    );
  }
  var o = function () {
    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return i(
      { x: 0, y: 0, start: 0, isSwiping: !1, traceX: [], traceY: [] },
      c
    );
  };
  return (ki.getInitialState = o), ki;
}
var Oi = {},
  np;
function PS() {
  if (np) return Oi;
  (np = 1),
    Object.defineProperty(Oi, "__esModule", { value: !0 }),
    (Oi.getInitialProps = void 0);
  function n(l, c) {
    var m = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(l);
      c &&
        (h = h.filter(function (p) {
          return Object.getOwnPropertyDescriptor(l, p).enumerable;
        })),
        m.push.apply(m, h);
    }
    return m;
  }
  function i(l) {
    for (var c = 1; c < arguments.length; c++) {
      var m = arguments[c] != null ? arguments[c] : {};
      c % 2
        ? n(Object(m), !0).forEach(function (h) {
            a(l, h, m[h]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(m))
        : n(Object(m)).forEach(function (h) {
            Object.defineProperty(l, h, Object.getOwnPropertyDescriptor(m, h));
          });
    }
    return l;
  }
  function a(l, c, m) {
    return (
      c in l
        ? Object.defineProperty(l, c, {
            value: m,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (l[c] = m),
      l
    );
  }
  var o = function () {
    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return i(
      {
        element: null,
        target: null,
        delta: 10,
        directionDelta: 0,
        rotationAngle: 0,
        mouseTrackingEnabled: !1,
        touchTrackingEnabled: !0,
        preventDefaultTouchmoveEvent: !1,
        preventTrackingOnMouseleave: !1,
      },
      c
    );
  };
  return (Oi.getInitialProps = o), Oi;
}
var xo = {},
  rp;
function NS() {
  if (rp) return xo;
  (rp = 1),
    Object.defineProperty(xo, "__esModule", { value: !0 }),
    (xo.getOptions = n);
  function n() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return i ? { passive: !1 } : {};
  }
  return xo;
}
var wo = {},
  ip;
function jS() {
  if (ip) return wo;
  (ip = 1),
    Object.defineProperty(wo, "__esModule", { value: !0 }),
    (wo.rotateByAngle = n);
  function n(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (a === 0) return i;
    var o = i.x,
      l = i.y,
      c = (Math.PI / 180) * a,
      m = o * Math.cos(c) + l * Math.sin(c),
      h = l * Math.cos(c) - o * Math.sin(c);
    return { x: m, y: h };
  }
  return wo;
}
var ap;
function CS() {
  return (
    ap ||
      ((ap = 1),
      (function (n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i = tv();
        Object.keys(i).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === i[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return i[x];
              },
            });
        });
        var a = nv();
        Object.keys(a).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === a[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return a[x];
              },
            });
        });
        var o = rv();
        Object.keys(o).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === o[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return o[x];
              },
            });
        });
        var l = wS();
        Object.keys(l).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === l[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return l[x];
              },
            });
        });
        var c = bS();
        Object.keys(c).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === c[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return c[x];
              },
            });
        });
        var m = av();
        Object.keys(m).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === m[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return m[x];
              },
            });
        });
        var h = sv();
        Object.keys(h).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === h[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return h[x];
              },
            });
        });
        var p = SS();
        Object.keys(p).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === p[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return p[x];
              },
            });
        });
        var g = _S();
        Object.keys(g).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === g[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return g[x];
              },
            });
        });
        var w = ES();
        Object.keys(w).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === w[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return w[x];
              },
            });
        });
        var P = Ic();
        Object.keys(P).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === P[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return P[x];
              },
            });
        });
        var y = lv();
        Object.keys(y).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === y[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return y[x];
              },
            });
        });
        var j = TS();
        Object.keys(j).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === j[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return j[x];
              },
            });
        });
        var b = PS();
        Object.keys(b).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === b[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return b[x];
              },
            });
        });
        var T = NS();
        Object.keys(T).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === T[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return T[x];
              },
            });
        });
        var _ = ov();
        Object.keys(_).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === _[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return _[x];
              },
            });
        });
        var A = jS();
        Object.keys(A).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === A[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return A[x];
              },
            });
        });
        var R = iv();
        Object.keys(R).forEach(function (x) {
          x === "default" ||
            x === "__esModule" ||
            (x in n && n[x] === R[x]) ||
            Object.defineProperty(n, x, {
              enumerable: !0,
              get: function () {
                return R[x];
              },
            });
        });
      })(gu)),
    gu
  );
}
var op;
function kS() {
  return (
    op ||
      ((op = 1),
      (function (n) {
        function i(y) {
          "@babel/helpers - typeof";
          return (
            (i =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (j) {
                    return typeof j;
                  }
                : function (j) {
                    return j &&
                      typeof Symbol == "function" &&
                      j.constructor === Symbol &&
                      j !== Symbol.prototype
                      ? "symbol"
                      : typeof j;
                  }),
            i(y)
          );
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = {};
        n.default = void 0;
        var o = m(CS()),
          l = nr();
        Object.keys(l).forEach(function (y) {
          y === "default" ||
            y === "__esModule" ||
            Object.prototype.hasOwnProperty.call(a, y) ||
            (y in n && n[y] === l[y]) ||
            Object.defineProperty(n, y, {
              enumerable: !0,
              get: function () {
                return l[y];
              },
            });
        });
        function c(y) {
          if (typeof WeakMap != "function") return null;
          var j = new WeakMap(),
            b = new WeakMap();
          return (c = function (_) {
            return _ ? b : j;
          })(y);
        }
        function m(y, j) {
          if (y && y.__esModule) return y;
          if (y === null || (i(y) !== "object" && typeof y != "function"))
            return { default: y };
          var b = c(j);
          if (b && b.has(y)) return b.get(y);
          var T = {},
            _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var A in y)
            if (A !== "default" && Object.prototype.hasOwnProperty.call(y, A)) {
              var R = _ ? Object.getOwnPropertyDescriptor(y, A) : null;
              R && (R.get || R.set)
                ? Object.defineProperty(T, A, R)
                : (T[A] = y[A]);
            }
          return (T.default = y), b && b.set(y, T), T;
        }
        function h(y, j) {
          if (!(y instanceof j))
            throw new TypeError("Cannot call a class as a function");
        }
        function p(y, j) {
          for (var b = 0; b < j.length; b++) {
            var T = j[b];
            (T.enumerable = T.enumerable || !1),
              (T.configurable = !0),
              "value" in T && (T.writable = !0),
              Object.defineProperty(y, T.key, T);
          }
        }
        function g(y, j, b) {
          return (
            j && p(y.prototype, j),
            b && p(y, b),
            Object.defineProperty(y, "prototype", { writable: !1 }),
            y
          );
        }
        function w(y, j, b) {
          return (
            j in y
              ? Object.defineProperty(y, j, {
                  value: b,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (y[j] = b),
            y
          );
        }
        var P = (function () {
          function y(j) {
            h(this, y),
              w(this, "state", void 0),
              w(this, "props", void 0),
              (this.state = o.getInitialState()),
              (this.props = o.getInitialProps(j)),
              (this.handleSwipeStart = this.handleSwipeStart.bind(this)),
              (this.handleSwipeMove = this.handleSwipeMove.bind(this)),
              (this.handleSwipeEnd = this.handleSwipeEnd.bind(this)),
              (this.handleMouseDown = this.handleMouseDown.bind(this)),
              (this.handleMouseMove = this.handleMouseMove.bind(this)),
              (this.handleMouseUp = this.handleMouseUp.bind(this)),
              (this.handleMouseLeave = this.handleMouseLeave.bind(this));
          }
          return (
            g(
              y,
              [
                {
                  key: "init",
                  value: function () {
                    this.setupTouchListeners(), this.setupMouseListeners();
                  },
                },
                {
                  key: "update",
                  value: function (b) {
                    var T = this.props,
                      _ = Object.assign({}, T, b);
                    if (T.element !== _.element || T.target !== _.target) {
                      this.destroy(), (this.props = _), this.init();
                      return;
                    }
                    (this.props = _),
                      (T.mouseTrackingEnabled !== _.mouseTrackingEnabled ||
                        T.preventTrackingOnMouseleave !==
                          _.preventTrackingOnMouseleave) &&
                        (this.cleanupMouseListeners(),
                        _.mouseTrackingEnabled
                          ? this.setupMouseListeners()
                          : this.cleanupMouseListeners()),
                      T.touchTrackingEnabled !== _.touchTrackingEnabled &&
                        (this.cleanupTouchListeners(),
                        _.touchTrackingEnabled
                          ? this.setupTouchListeners()
                          : this.cleanupTouchListeners());
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.cleanupMouseListeners(),
                      this.cleanupTouchListeners(),
                      (this.state = o.getInitialState()),
                      (this.props = o.getInitialProps());
                  },
                },
                {
                  key: "setupTouchListeners",
                  value: function () {
                    var b = this.props,
                      T = b.element,
                      _ = b.target,
                      A = b.touchTrackingEnabled;
                    if (T && A) {
                      var R = _ || T,
                        x = o.checkIsPassiveSupported(),
                        S = o.getOptions(x);
                      R.addEventListener(
                        "touchstart",
                        this.handleSwipeStart,
                        S
                      ),
                        R.addEventListener(
                          "touchmove",
                          this.handleSwipeMove,
                          S
                        ),
                        R.addEventListener("touchend", this.handleSwipeEnd, S);
                    }
                  },
                },
                {
                  key: "cleanupTouchListeners",
                  value: function () {
                    var b = this.props,
                      T = b.element,
                      _ = b.target,
                      A = _ || T;
                    A &&
                      (A.removeEventListener(
                        "touchstart",
                        this.handleSwipeStart
                      ),
                      A.removeEventListener("touchmove", this.handleSwipeMove),
                      A.removeEventListener("touchend", this.handleSwipeEnd));
                  },
                },
                {
                  key: "setupMouseListeners",
                  value: function () {
                    var b = this.props,
                      T = b.element,
                      _ = b.mouseTrackingEnabled,
                      A = b.preventTrackingOnMouseleave;
                    _ &&
                      T &&
                      (T.addEventListener("mousedown", this.handleMouseDown),
                      T.addEventListener("mousemove", this.handleMouseMove),
                      T.addEventListener("mouseup", this.handleMouseUp),
                      A &&
                        T.addEventListener(
                          "mouseleave",
                          this.handleMouseLeave
                        ));
                  },
                },
                {
                  key: "cleanupMouseListeners",
                  value: function () {
                    var b = this.props.element;
                    b &&
                      (b.removeEventListener("mousedown", this.handleMouseDown),
                      b.removeEventListener("mousemove", this.handleMouseMove),
                      b.removeEventListener("mouseup", this.handleMouseUp),
                      b.removeEventListener(
                        "mouseleave",
                        this.handleMouseLeave
                      ));
                  },
                },
                {
                  key: "getEventData",
                  value: function (b) {
                    var T =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : { directionDelta: 0 },
                      _ = this.props.rotationAngle,
                      A = T.directionDelta,
                      R = o.calculateMovingPosition(b),
                      x = o.rotateByAngle(R, _);
                    return o.calculatePosition(this.state, {
                      rotatePosition: x,
                      directionDelta: A,
                    });
                  },
                },
                {
                  key: "handleSwipeStart",
                  value: function (b) {
                    if (!o.checkIsMoreThanSingleTouches(b)) {
                      var T = this.props.rotationAngle,
                        _ = o.calculateMovingPosition(b),
                        A = o.rotateByAngle(_, T),
                        R = A.x,
                        x = A.y;
                      this.state = o.getInitialState({
                        isSwiping: !1,
                        start: Date.now(),
                        x: R,
                        y: x,
                      });
                    }
                  },
                },
                {
                  key: "handleSwipeMove",
                  value: function (b) {
                    var T = this.state,
                      _ = T.x,
                      A = T.y,
                      R = T.isSwiping;
                    if (!(!_ || !A || o.checkIsMoreThanSingleTouches(b))) {
                      var x = this.props.directionDelta || 0,
                        S = this.getEventData(b, { directionDelta: x }),
                        E = S.absX,
                        k = S.absY,
                        I = S.deltaX,
                        W = S.deltaY,
                        Y = S.directionX,
                        ne = S.directionY,
                        te = S.duration,
                        F = S.velocity,
                        X = this.props,
                        J = X.delta,
                        ee = X.preventDefaultTouchmoveEvent,
                        ie = X.onSwipeStart,
                        ae = X.onSwiping;
                      b.cancelable && ee && b.preventDefault(),
                        !(E < Number(J) && k < Number(J) && !R) &&
                          (ie &&
                            !R &&
                            ie(b, {
                              deltaX: I,
                              deltaY: W,
                              absX: E,
                              absY: k,
                              directionX: Y,
                              directionY: ne,
                              duration: te,
                              velocity: F,
                            }),
                          (this.state.isSwiping = !0),
                          ae &&
                            ae(b, {
                              deltaX: I,
                              deltaY: W,
                              absX: E,
                              absY: k,
                              directionX: Y,
                              directionY: ne,
                              duration: te,
                              velocity: F,
                            }));
                    }
                  },
                },
                {
                  key: "handleSwipeEnd",
                  value: function (b) {
                    var T = this.props,
                      _ = T.onSwiped,
                      A = T.onTap;
                    if (this.state.isSwiping) {
                      var R = this.props.directionDelta || 0,
                        x = this.getEventData(b, { directionDelta: R });
                      _ && _(b, x);
                    } else {
                      var S = this.getEventData(b);
                      A && A(b, S);
                    }
                    this.state = o.getInitialState();
                  },
                },
                {
                  key: "handleMouseDown",
                  value: function (b) {
                    var T = this.props.target;
                    T
                      ? T === b.target && this.handleSwipeStart(b)
                      : this.handleSwipeStart(b);
                  },
                },
                {
                  key: "handleMouseMove",
                  value: function (b) {
                    this.handleSwipeMove(b);
                  },
                },
                {
                  key: "handleMouseUp",
                  value: function (b) {
                    var T = this.state.isSwiping,
                      _ = this.props.target;
                    _
                      ? (_ === b.target || T) && this.handleSwipeEnd(b)
                      : this.handleSwipeEnd(b);
                  },
                },
                {
                  key: "handleMouseLeave",
                  value: function (b) {
                    var T = this.state.isSwiping;
                    T && this.handleSwipeEnd(b);
                  },
                },
              ],
              [
                {
                  key: "isTouchEventsSupported",
                  value: function () {
                    return o.checkIsTouchEventsSupported();
                  },
                },
              ]
            ),
            y
          );
        })();
        n.default = P;
      })(pu)),
    pu
  );
}
var vu = {},
  yu = {},
  sp;
function un() {
  return (
    sp ||
      ((sp = 1),
      (function (n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Modifiers =
            n.Classnames =
            n.AutoplayDirection =
            n.ControlsStrategy =
            n.AutoPlayStrategy =
            n.AnimationType =
            n.EventType =
              void 0),
          (function (i) {
            (i.ACTION = "action"),
              (i.INIT = "init"),
              (i.RESIZE = "resize"),
              (i.UPDATE = "update");
          })(n.EventType || (n.EventType = {})),
          (function (i) {
            (i.FADEOUT = "fadeout"), (i.SLIDE = "slide");
          })(n.AnimationType || (n.AnimationType = {})),
          (function (i) {
            (i.DEFAULT = "default"),
              (i.ALL = "all"),
              (i.ACTION = "action"),
              (i.NONE = "none");
          })(n.AutoPlayStrategy || (n.AutoPlayStrategy = {})),
          (function (i) {
            (i.DEFAULT = "default"),
              (i.ALTERNATE = "alternate"),
              (i.RESPONSIVE = "responsive");
          })(n.ControlsStrategy || (n.ControlsStrategy = {})),
          (function (i) {
            (i.RTL = "rtl"), (i.LTR = "ltr");
          })(n.AutoplayDirection || (n.AutoplayDirection = {})),
          (function (i) {
            (i.ANIMATED = "animated animated-out fadeOut"),
              (i.ROOT = "alice-carousel"),
              (i.WRAPPER = "alice-carousel__wrapper"),
              (i.STAGE = "alice-carousel__stage"),
              (i.STAGE_ITEM = "alice-carousel__stage-item"),
              (i.DOTS = "alice-carousel__dots"),
              (i.DOTS_ITEM = "alice-carousel__dots-item"),
              (i.PLAY_BTN = "alice-carousel__play-btn"),
              (i.PLAY_BTN_ITEM = "alice-carousel__play-btn-item"),
              (i.PLAY_BTN_WRAPPER = "alice-carousel__play-btn-wrapper"),
              (i.SLIDE_INFO = "alice-carousel__slide-info"),
              (i.SLIDE_INFO_ITEM = "alice-carousel__slide-info-item"),
              (i.BUTTON_PREV = "alice-carousel__prev-btn"),
              (i.BUTTON_PREV_WRAPPER = "alice-carousel__prev-btn-wrapper"),
              (i.BUTTON_PREV_ITEM = "alice-carousel__prev-btn-item"),
              (i.BUTTON_NEXT = "alice-carousel__next-btn"),
              (i.BUTTON_NEXT_WRAPPER = "alice-carousel__next-btn-wrapper"),
              (i.BUTTON_NEXT_ITEM = "alice-carousel__next-btn-item");
          })(n.Classnames || (n.Classnames = {})),
          (function (i) {
            (i.ACTIVE = "__active"),
              (i.INACTIVE = "__inactive"),
              (i.CLONED = "__cloned"),
              (i.CUSTOM = "__custom"),
              (i.PAUSE = "__pause"),
              (i.SEPARATOR = "__separator"),
              (i.SSR = "__ssr"),
              (i.TARGET = "__target");
          })(n.Modifiers || (n.Modifiers = {}));
      })(yu)),
    yu
  );
}
var lp;
function OS() {
  return (
    lp ||
      ((lp = 1),
      (function (n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.defaultProps = void 0);
        var i = un();
        n.defaultProps = {
          activeIndex: 0,
          animationDuration: 400,
          animationEasingFunction: "ease",
          animationType: i.AnimationType.SLIDE,
          autoHeight: !1,
          autoWidth: !1,
          autoPlay: !1,
          autoPlayControls: !1,
          autoPlayDirection: i.AutoplayDirection.LTR,
          autoPlayInterval: 400,
          autoPlayStrategy: i.AutoPlayStrategy.DEFAULT,
          children: void 0,
          controlsStrategy: i.ControlsStrategy.DEFAULT,
          disableButtonsControls: !1,
          disableDotsControls: !1,
          disableSlideInfo: !0,
          infinite: !1,
          innerWidth: void 0,
          items: void 0,
          keyboardNavigation: !1,
          mouseTracking: !1,
          syncStateOnPropsUpdate: !0,
          name: "",
          paddingLeft: 0,
          paddingRight: 0,
          responsive: void 0,
          swipeDelta: 20,
          swipeExtraPadding: 200,
          ssrSilentMode: !0,
          touchTracking: !0,
          touchMoveDefaultEvents: !0,
          onInitialized: function () {},
          onResized: function () {},
          onUpdated: function () {},
          onResizeEvent: void 0,
          onSlideChange: function () {},
          onSlideChanged: function () {},
        };
      })(vu)),
    vu
  );
}
var xu = {},
  up;
function IS() {
  return (
    up ||
      ((up = 1),
      (function (n) {
        var i = function () {
            return (i =
              Object.assign ||
              function (c) {
                for (var m, h = 1, p = arguments.length; h < p; h++)
                  for (var g in (m = arguments[h]))
                    Object.prototype.hasOwnProperty.call(m, g) && (c[g] = m[g]);
                return c;
              }).apply(this, arguments);
          },
          a = function (c) {
            return c && c.__esModule ? c : { default: c };
          },
          o = (Object.defineProperty(n, "__esModule", { value: !0 }), a(Kt()));
        function l(c) {
          var m = { xDown: null, xUp: null };
          return o.default.createElement(
            "a",
            i(
              {
                onClick: function (h) {
                  m.xDown !== m.xUp && h.preventDefault();
                },
                onMouseDown: function (h) {
                  h.preventDefault(), (m.xUp = null), (m.xDown = h.clientX);
                },
                onMouseUp: function (h) {
                  h.preventDefault(), (m.xUp = h.clientX);
                },
              },
              c
            ),
            c.children
          );
        }
        n.default = l;
      })(xu)),
    xu
  );
}
var wu = {},
  bu = {},
  Su = {},
  _u = {},
  Eu = {},
  Tu = {},
  cp;
function uv() {
  return (
    cp ||
      ((cp = 1),
      (function (n) {
        var i = function () {
            return (i =
              Object.assign ||
              function (l) {
                for (var c, m = 1, h = arguments.length; m < h; m++)
                  for (var p in (c = arguments[m]))
                    Object.prototype.hasOwnProperty.call(c, p) && (l[p] = c[p]);
                return l;
              }).apply(this, arguments);
          },
          a =
            (Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.mapPositionCoords = n.mapPartialCoords = void 0),
            function (l) {
              return l.map(function (c) {
                return { width: c.width, position: 0 };
              });
            }),
          o =
            ((n.mapPartialCoords = a),
            function (l, c) {
              return (
                c === void 0 && (c = 0),
                l.map(function (m) {
                  return m.position > c ? i(i({}, m), { position: c }) : m;
                })
              );
            });
        n.mapPositionCoords = o;
      })(Tu)),
    Tu
  );
}
var Pu = {},
  dp;
function Jo() {
  return (
    dp ||
      ((dp = 1),
      (function (n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.isVerticalTouchmoveDetected =
            n.getFadeoutAnimationPosition =
            n.getFadeoutAnimationIndex =
            n.getSwipeTouchendIndex =
            n.getSwipeTouchendPosition =
            n.getSwipeTransformationCursor =
            n.getTransformationItemIndex =
            n.getSwipeShiftValue =
            n.getItemCoords =
            n.getIsLeftDirection =
            n.shouldRecalculateSwipePosition =
            n.getSwipeLimitMax =
            n.getSwipeLimitMin =
            n.shouldCancelSlideAnimation =
            n.shouldRecalculateSlideIndex =
            n.getUpdateSlidePositionIndex =
            n.getActiveIndex =
            n.getStartIndex =
            n.getShiftIndex =
              void 0);
        var i = function (S, E) {
            return (S = S === void 0 ? 0 : S) + (E = E === void 0 ? 0 : E);
          },
          a =
            ((n.getShiftIndex = i),
            function (S, E) {
              if ((S === void 0 && (S = 0), (E = E === void 0 ? 0 : E))) {
                if (E <= S) return E - 1;
                if (0 < S) return S;
              }
              return 0;
            }),
          o =
            ((n.getStartIndex = a),
            function (I) {
              var E = I.startIndex,
                E = E === void 0 ? 0 : E,
                k = I.itemsCount,
                I = I.infinite;
              return I !== void 0 && I
                ? E
                : (0, n.getStartIndex)(E, k === void 0 ? 0 : k);
            }),
          l =
            ((n.getActiveIndex = o),
            function (S, E) {
              return S < 0 ? E - 1 : E <= S ? 0 : S;
            }),
          c =
            ((n.getUpdateSlidePositionIndex = l),
            function (S, E) {
              return S < 0 || E <= S;
            }),
          m =
            ((n.shouldRecalculateSlideIndex = c),
            function (S, E) {
              return S < 0 || E <= S;
            }),
          h =
            ((n.shouldCancelSlideAnimation = m),
            function (I, Y) {
              var k = I.itemsOffset,
                I = I.transformationSet,
                I = I === void 0 ? [] : I,
                W = Y.infinite,
                Y = Y.swipeExtraPadding;
              return W
                ? (I[k === void 0 ? 0 : k] || {}).position
                : ((W = (I[0] || {}).width),
                  Math.min(Y === void 0 ? 0 : Y, W === void 0 ? 0 : W));
            }),
          p =
            ((n.getSwipeLimitMin = h),
            function (te, I) {
              var k = I.infinite,
                I = I.swipeExtraPadding,
                I = I === void 0 ? 0 : I,
                W = te.itemsCount,
                Y = te.itemsOffset,
                ne = te.itemsInSlide,
                ne = ne === void 0 ? 1 : ne,
                te = te.transformationSet,
                te = te === void 0 ? [] : te;
              return k
                ? (
                    te[
                      (W === void 0 ? 1 : W) +
                        (0, n.getShiftIndex)(ne, Y === void 0 ? 0 : Y)
                    ] || {}
                  ).position || 0
                : (0, n.getItemCoords)(-ne, te).position + I;
            }),
          g =
            ((n.getSwipeLimitMax = p),
            function (S, E, k) {
              return -E <= S || Math.abs(S) >= k;
            }),
          w =
            ((n.shouldRecalculateSwipePosition = g),
            function (S) {
              return (S = S === void 0 ? 0 : S) < 0;
            }),
          P =
            ((n.getIsLeftDirection = w),
            function (S, E) {
              return (
                (E = E === void 0 ? [] : E).slice(
                  (S = S === void 0 ? 0 : S)
                )[0] || { position: 0, width: 0 }
              );
            }),
          y =
            ((n.getItemCoords = P),
            function (S, E) {
              return (
                S === void 0 && (S = 0),
                E === void 0 && (E = []),
                (0, n.getItemCoords)(S, E).position
              );
            }),
          j =
            ((n.getSwipeShiftValue = y),
            function (S, E) {
              return (
                E === void 0 && (E = 0),
                (S = S === void 0 ? [] : S).findIndex(function (k) {
                  return k.position >= Math.abs(E);
                })
              );
            }),
          b =
            ((n.getTransformationItemIndex = j),
            function (S, E, k) {
              return (
                S === void 0 && (S = []),
                E === void 0 && (E = 0),
                k === void 0 && (k = 0),
                (S = (0, n.getTransformationItemIndex)(S, E)),
                (0, n.getIsLeftDirection)(k) ? S : S - 1
              );
            }),
          T =
            ((n.getSwipeTransformationCursor = b),
            function (te, X, F) {
              F === void 0 && (F = 0);
              var I = te.infinite,
                W = te.autoWidth,
                Y = te.isStageContentPartial,
                ne = te.swipeAllowedPositionMax,
                te = te.transformationSet,
                F = (0, n.getSwipeTransformationCursor)(te, F, X),
                X = (0, n.getItemCoords)(F, te).position;
              if (!I) {
                if (W && Y) return 0;
                if (ne < X) return -ne;
              }
              return -X;
            }),
          _ =
            ((n.getSwipeTouchendPosition = T),
            function (S, X) {
              var k = X.transformationSet,
                I = X.itemsInSlide,
                W = X.itemsOffset,
                Y = X.itemsCount,
                ne = X.infinite,
                te = X.isStageContentPartial,
                F = X.activeIndex,
                X = X.translate3d;
              return ne || (!te && X !== Math.abs(S))
                ? ((te = (0, n.getTransformationItemIndex)(k, S)),
                  ne
                    ? te < (X = (0, n.getShiftIndex)(I, W))
                      ? Y - I - W + te
                      : X + Y <= te
                      ? te - (X + Y)
                      : te - X
                    : te)
                : F;
            }),
          A =
            ((n.getSwipeTouchendIndex = _),
            function (I) {
              var E = I.infinite,
                k = I.activeIndex,
                I = I.itemsInSlide;
              return E ? k + I : k;
            }),
          R =
            ((n.getFadeoutAnimationIndex = A),
            function (S, I) {
              var k = I.activeIndex,
                I = I.stageWidth;
              return S < k ? (k - S) * -I || 0 : (S - k) * I || 0;
            }),
          x =
            ((n.getFadeoutAnimationPosition = R),
            function (S, E, k) {
              return S < (k = k === void 0 ? 0 : k) || S < 0.1 * E;
            });
        n.isVerticalTouchmoveDetected = x;
      })(Pu)),
    Pu
  );
}
var fp;
function cv() {
  return (
    fp ||
      ((fp = 1),
      (function (n) {
        var i = function () {
            return (i =
              Object.assign ||
              function (F) {
                for (var X, J = 1, ee = arguments.length; J < ee; J++)
                  for (var ie in (X = arguments[J]))
                    Object.prototype.hasOwnProperty.call(X, ie) &&
                      (F[ie] = X[ie]);
                return F;
              }).apply(this, arguments);
          },
          a =
            (Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.getItemsInSlide =
              n.canUseDOM =
              n.getTransformMatrix =
              n.getTranslateXProperty =
              n.getTouchmoveTranslatePosition =
              n.getTranslate3dProperty =
              n.getRenderStageItemStyles =
              n.getRenderStageStyles =
              n.getTransitionProperty =
              n.getRenderWrapperStyles =
              n.animate =
              n.shouldHandleResizeEvent =
              n.getElementFirstChild =
              n.getElementCursor =
              n.getAutoheightProperty =
              n.getElementDimensions =
              n.getItemWidth =
              n.createDefaultTransformationSet =
              n.createAutowidthTransformationSet =
              n.isElement =
              n.createClones =
              n.getItemsOffset =
              n.getItemsCount =
              n.getSlides =
                void 0),
            uv()),
          o = Jo(),
          l = function (J) {
            var X = J.children,
              J = J.items;
            return X ? (X.length ? X : [X]) : J === void 0 ? [] : J;
          },
          c =
            ((n.getSlides = l),
            function (F) {
              return (0, n.getSlides)(F).length;
            }),
          m =
            ((n.getItemsCount = c),
            function (ee) {
              var X = ee.infinite,
                J = ee.paddingRight,
                ee = ee.paddingLeft;
              return X && (ee || J) ? 1 : 0;
            }),
          h =
            ((n.getItemsOffset = m),
            function (F) {
              var X,
                J,
                ee,
                ie,
                ae = (0, n.getSlides)(F);
              return F.infinite
                ? ((X = (0, n.getItemsCount)(F)),
                  (ie = (0, n.getItemsOffset)(F)),
                  (F = (0, n.getItemsInSlide)(X, F)),
                  (ee = Math.min(F, X) + ie),
                  (J = ae.slice(0, ee)),
                  (ee = ae.slice(-ee)),
                  ie &&
                    F === X &&
                    ((ie = ae[0]),
                    (F = ae.slice(-1)[0]),
                    ee.unshift(F),
                    J.push(ie)),
                  ee.concat(ae, J))
                : ae;
            }),
          p =
            ((n.createClones = h),
            function (F) {
              try {
                return F instanceof Element || F instanceof HTMLDocument;
              } catch {
                return !1;
              }
            }),
          g =
            ((n.isElement = p),
            function (F, X, J) {
              X === void 0 && (X = 0), J === void 0 && (J = !1);
              var ee = 0,
                ie = !0,
                ae = [];
              return (
                (0, n.isElement)(F) &&
                  ((ae = Array.from(
                    (F == null ? void 0 : F.children) || []
                  ).reduce(function ($, he, V) {
                    var D = 0,
                      V = V - 1,
                      pe = $[V],
                      he = y(he == null ? void 0 : he.firstChild).width,
                      he = he === void 0 ? 0 : he;
                    return (
                      (ie = (ee += he) <= X),
                      pe && (D = V == 0 ? pe.width : pe.width + pe.position),
                      $.push({ position: D, width: he }),
                      $
                    );
                  }, [])),
                  J ||
                    (ae = ie
                      ? (0, a.mapPartialCoords)(ae)
                      : ((F = ee - X), (0, a.mapPositionCoords)(ae, F)))),
                { coords: ae, content: ee, partial: ie }
              );
            }),
          w =
            ((n.createAutowidthTransformationSet = g),
            function (F, X, J, ee) {
              ee === void 0 && (ee = !1);
              var ie = 0,
                ae = !0,
                $ = [],
                le = (0, n.getItemWidth)(X, J);
              return (
                ($ = F.reduce(function (Z, D, he) {
                  var pe = 0,
                    he = Z[he - 1];
                  return (
                    (ae = (ie += le) <= X),
                    he && (pe = le + he.position || 0),
                    Z.push({ width: le, position: pe }),
                    Z
                  );
                }, [])),
                {
                  coords: ($ = ee
                    ? $
                    : ae
                    ? (0, a.mapPartialCoords)($)
                    : ((J = ie - X), (0, a.mapPositionCoords)($, J))),
                  content: ie,
                  partial: ae,
                }
              );
            }),
          P =
            ((n.createDefaultTransformationSet = w),
            function (F, X) {
              return 0 < X ? F / X : F;
            });
        function y(F) {
          return F && F.getBoundingClientRect
            ? { width: (F = F.getBoundingClientRect()).width, height: F.height }
            : { width: 0, height: 0 };
        }
        (n.getItemWidth = P), (n.getElementDimensions = y);
        var j = function (F, ee, ie) {
            var ee = (0, n.getElementCursor)(ee, ie),
              ie = (0, n.getElementFirstChild)(F, ee);
            if ((0, n.isElement)(ie))
              return (
                (F = window.getComputedStyle(ie)),
                (ee = parseFloat(F.marginTop)),
                (F = parseFloat(F.marginBottom)),
                Math.ceil(ie.offsetHeight + ee + F)
              );
          },
          b =
            ((n.getAutoheightProperty = j),
            function (F, ee) {
              var J = ee.activeIndex,
                ee = ee.itemsInSlide;
              return F.infinite ? J + ee + (0, n.getItemsOffset)(F) : J;
            }),
          T =
            ((n.getElementCursor = b),
            function (F, X) {
              return (
                (F = (F && F.children) || []), (F[X] && F[X].firstChild) || null
              );
            });
        function _(F, X, J) {
          return (
            (X = X === void 0 ? {} : X).width !==
            (J = J === void 0 ? {} : J).width
          );
        }
        function A(F, ie) {
          var ie = ie || {},
            J = ie.position,
            J = J === void 0 ? 0 : J,
            ee = ie.animationDuration,
            ee = ee === void 0 ? 0 : ee,
            ie = ie.animationEasingFunction,
            ie = ie === void 0 ? "ease" : ie;
          return (
            F &&
              (0, n.isElement)(F) &&
              ((F.style.transition = "transform "
                .concat(ee, "ms ")
                .concat(ie, " 0ms")),
              (F.style.transform = "translate3d(".concat(J, "px, 0, 0)"))),
            F
          );
        }
        (n.getElementFirstChild = T),
          (n.shouldHandleResizeEvent = _),
          (n.animate = A);
        var R = function (F, X, J) {
            var ae = F || {},
              ee = ae.paddingLeft,
              ie = ae.paddingRight,
              $ = ae.autoHeight,
              ae = ae.animationDuration,
              $ = $ ? (0, n.getAutoheightProperty)(J, F, X) : void 0;
            return {
              height: $,
              transition: $ ? "height ".concat(ae, "ms") : void 0,
              paddingLeft: "".concat(ee, "px"),
              paddingRight: "".concat(ie, "px"),
            };
          },
          x =
            ((n.getRenderWrapperStyles = R),
            function (J) {
              var J = J || {},
                X = J.animationDuration,
                J = J.animationEasingFunction,
                J = J === void 0 ? "ease" : J;
              return "transform "
                .concat(X === void 0 ? 0 : X, "ms ")
                .concat(J, " 0ms");
            }),
          S =
            ((n.getTransitionProperty = x),
            function (F, X) {
              return (
                (F = (F || {}).translate3d),
                (F = "translate3d(".concat(
                  -(F === void 0 ? 0 : F),
                  "px, 0, 0)"
                )),
                i(i({}, X), { transform: F })
              );
            }),
          E =
            ((n.getRenderStageStyles = S),
            function (F, ae) {
              var $ = ae.transformationSet,
                J = ae.fadeoutAnimationIndex,
                ee = ae.fadeoutAnimationPosition,
                ie = ae.fadeoutAnimationProcessing,
                ae = ae.animationDuration,
                $ = ($[F] || {}).width;
              return ie && J === F
                ? {
                    transform: "translateX(".concat(ee, "px)"),
                    animationDuration: "".concat(ae, "ms"),
                    width: "".concat($, "px"),
                  }
                : { width: $ };
            }),
          k =
            ((n.getRenderStageItemStyles = E),
            function (F, $) {
              var J = F,
                ee = $.infinite,
                ie = $.itemsOffset,
                ae = $.itemsInSlide,
                $ = $.transformationSet;
              return (
                (
                  ($ === void 0 ? [] : $)[
                    (J = ee
                      ? F +
                        (0, o.getShiftIndex)(
                          ae === void 0 ? 0 : ae,
                          ie === void 0 ? 0 : ie
                        )
                      : J)
                  ] || {}
                ).position || 0
              );
            }),
          I =
            ((n.getTranslate3dProperty = k),
            function (F, X) {
              return -(X - Math.floor(F));
            });
        function W(F) {
          return (F = Y(F)), (F = (F && F[4]) || ""), Number(F);
        }
        function Y(F) {
          return (
            (F &&
              (0, n.isElement)(F) &&
              window.getComputedStyle(F).transform.match(/(-?[0-9.]+)/g)) ||
            []
          );
        }
        (n.getTouchmoveTranslatePosition = I),
          (n.getTranslateXProperty = W),
          (n.getTransformMatrix = Y);
        var ne = function () {
            var F;
            try {
              return !!(
                (F = window == null ? void 0 : window.document) != null &&
                F.createElement
              );
            } catch {
              return !1;
            }
          },
          te =
            ((n.canUseDOM = ne),
            function (F, le) {
              var J,
                ee = 1,
                ie = le.responsive,
                ae = le.autoWidth,
                $ = le.infinite,
                le = le.innerWidth;
              return ae !== void 0 && ae
                ? $ !== void 0 && $
                  ? F
                  : ee
                : (ie &&
                    (ae = Object.keys(ie)).length &&
                    (le || (0, n.canUseDOM)()) &&
                    ((J = le === void 0 ? window.innerWidth : le),
                    ae.forEach(function (Z) {
                      var D;
                      Number(Z) <= J &&
                        ((D = (Z = ie[Z]).items),
                        (Z = Z.itemsFit),
                        (ee =
                          (Z === void 0 ? "fill" : Z) === "contain"
                            ? D
                            : Math.min(D, F)));
                    })),
                  ee || 1);
            });
        n.getItemsInSlide = te;
      })(Eu)),
    Eu
  );
}
var mp;
function dv() {
  return (
    mp ||
      ((mp = 1),
      (function (n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.calculateInitialState =
            n.getIsStageContentPartial =
            n.concatClassnames =
              void 0);
        var i = cv(),
          a = Jo(),
          o = function () {
            for (var m = [], h = 0; h < arguments.length; h++)
              m[h] = arguments[h];
            return m.filter(Boolean).join(" ");
          },
          l =
            ((n.concatClassnames = o),
            function (m, h, p) {
              return (
                h === void 0 && (h = 0),
                p === void 0 && (p = 0),
                !(m = m !== void 0 && m) && p <= h
              );
            }),
          c =
            ((n.getIsStageContentPartial = l),
            function (W, h, p) {
              p === void 0 && (p = (0, i.canUseDOM)());
              var g,
                w,
                P = W.animationDuration,
                P = P === void 0 ? 0 : P,
                y = W.infinite,
                y = y !== void 0 && y,
                j = W.autoPlay,
                j = j !== void 0 && j,
                b = W.autoWidth,
                b = b !== void 0 && b,
                T = (0, i.createClones)(W),
                _ = (0, i.getTransitionProperty)(),
                A = (0, i.getItemsCount)(W),
                R = (0, i.getItemsOffset)(W),
                x = (0, i.getItemsInSlide)(A, W),
                S = (0, a.getStartIndex)(W.activeIndex, A),
                S = (0, a.getActiveIndex)({
                  startIndex: S,
                  itemsCount: A,
                  infinite: y,
                }),
                E = (0, i.getElementDimensions)(h).width,
                k =
                  ((w =
                    ((h = (
                      b
                        ? ((g = (h = (0, i.createAutowidthTransformationSet)(
                            h,
                            E,
                            y
                          )).coords),
                          (w = h.content),
                          h)
                        : ((g = (h = (0, i.createDefaultTransformationSet)(
                            T,
                            E,
                            x,
                            y
                          )).coords),
                          (w = h.content),
                          h)
                    ).partial),
                    w)),
                  (0, a.getItemCoords)(-x, (g = g)).position),
                I = (0, a.getSwipeLimitMin)(
                  { itemsOffset: R, transformationSet: g },
                  W
                ),
                W = (0, a.getSwipeLimitMax)(
                  {
                    itemsCount: A,
                    itemsOffset: R,
                    itemsInSlide: x,
                    transformationSet: g,
                  },
                  W
                ),
                Y = (0, a.getSwipeShiftValue)(A, g);
              return {
                activeIndex: S,
                autoWidth: b,
                animationDuration: P,
                clones: T,
                infinite: y,
                itemsCount: A,
                itemsInSlide: x,
                itemsOffset: R,
                translate3d: (0, i.getTranslate3dProperty)(S, {
                  itemsInSlide: x,
                  itemsOffset: R,
                  transformationSet: g,
                  autoWidth: b,
                  infinite: y,
                }),
                stageWidth: E,
                stageContentWidth: w,
                initialStageHeight: 0,
                isStageContentPartial: h,
                isAutoPlaying: j,
                isAutoPlayCanceledOnAction: !1,
                transformationSet: g,
                transition: _,
                fadeoutAnimationIndex: null,
                fadeoutAnimationPosition: null,
                fadeoutAnimationProcessing: !1,
                swipeLimitMin: I,
                swipeLimitMax: W,
                swipeAllowedPositionMax: k,
                swipeShiftValue: Y,
                canUseDom: p,
              };
            });
        n.calculateInitialState = c;
      })(_u)),
    _u
  );
}
var Nu = {},
  hp;
function AS() {
  return (
    hp ||
      ((hp = 1),
      (function (n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.isClonedItem =
            n.isTargetItem =
            n.isActiveItem =
            n.getRenderStageItemClasses =
              void 0);
        var i = un(),
          a = dv(),
          o = Jo(),
          l = function (b, j) {
            b === void 0 && (b = 0);
            var w = j.fadeoutAnimationIndex,
              P = (0, n.isActiveItem)(b, j) ? i.Modifiers.ACTIVE : "",
              y = (0, n.isClonedItem)(b, j) ? i.Modifiers.CLONED : "",
              j = (0, n.isTargetItem)(b, j) ? i.Modifiers.TARGET : "",
              b = b === w ? i.Classnames.ANIMATED : "";
            return (0, a.concatClassnames)(i.Classnames.STAGE_ITEM, P, y, j, b);
          },
          c =
            ((n.getRenderStageItemClasses = l),
            function (p, b) {
              p === void 0 && (p = 0);
              var w = b.activeIndex,
                P = b.itemsInSlide,
                y = b.itemsOffset,
                j = b.infinite,
                b = b.autoWidth,
                T = (0, o.getShiftIndex)(P, y);
              return b && j
                ? p - T === w + y
                : ((b = w + T), j ? b <= p && p < b + P : w <= p && p < b);
            }),
          m =
            ((n.isActiveItem = c),
            function (p, j) {
              p === void 0 && (p = 0);
              var w = j.activeIndex,
                b = j.itemsInSlide,
                P = j.itemsOffset,
                y = j.infinite,
                j = j.autoWidth,
                b = (0, o.getShiftIndex)(b, P);
              return y ? (j && y ? p - b === w + P : p === w + b) : p === w;
            }),
          h =
            ((n.isTargetItem = m),
            function (p, b) {
              p === void 0 && (p = 0);
              var w = b.itemsInSlide,
                P = b.itemsOffset,
                y = b.itemsCount,
                j = b.infinite,
                b = b.autoWidth;
              return (
                !!j &&
                (b && j
                  ? p < w || y - 1 + w < p
                  : p < (b = (0, o.getShiftIndex)(w, P)) || y - 1 + b < p)
              );
            });
        n.isClonedItem = h;
      })(Nu)),
    Nu
  );
}
var ju = {},
  pp;
function RS() {
  return (
    pp ||
      ((pp = 1),
      (function (n) {
        function i(a, o) {
          o === void 0 && (o = 0);
          function l() {
            c && (clearTimeout(c), (c = void 0));
          }
          var c = void 0;
          return [
            function () {
              for (var m = this, h = [], p = 0; p < arguments.length; p++)
                h[p] = arguments[p];
              l(),
                (c = window.setTimeout(function () {
                  a.apply(m, h), (c = void 0);
                }, o));
            },
            l,
          ];
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.debounce = void 0),
          (n.debounce = i);
      })(ju)),
    ju
  );
}
var Cu = {},
  gp;
function DS() {
  return (
    gp ||
      ((gp = 1),
      (function (n) {
        function i() {
          for (var a = [], o = 0; o < arguments.length; o++)
            a[o] = arguments[o];
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.debug = void 0),
          (n.debug = i);
      })(Cu)),
    Cu
  );
}
var ku = {},
  vp;
function LS() {
  return (
    vp ||
      ((vp = 1),
      (function (n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.getSlideItemInfo =
            n.getSlideInfo =
            n.getSlideIndexForMultipleItems =
            n.getSlideIndexForNonMultipleItems =
            n.getActiveSlideDotsLength =
            n.getActiveSlideIndex =
              void 0);
        var i = function (h, w) {
            var w = w || {},
              P = w.activeIndex,
              g = w.itemsInSlide,
              w = w.itemsCount,
              P = P + g;
            return g === 1
              ? (0, n.getSlideIndexForNonMultipleItems)(P, g, w)
              : (0, n.getSlideIndexForMultipleItems)(P, g, w, h);
          },
          a =
            ((n.getActiveSlideIndex = i),
            function (h, p) {
              var g;
              return (
                p === void 0 && (p = 1),
                (h = h === void 0 ? 0 : h) && p
                  ? ((g = Math.floor(h / p)), h % p == 0 ? g - 1 : g)
                  : 0
              );
            }),
          o =
            ((n.getActiveSlideDotsLength = a),
            function (h, p, g) {
              return h < p ? g - p : g < h ? 0 : h - 1;
            }),
          l =
            ((n.getSlideIndexForNonMultipleItems = o),
            function (h, p, g, w) {
              var P = (0, n.getActiveSlideDotsLength)(g, p);
              return h === g + p
                ? 0
                : w || (h < p && h !== 0)
                ? P
                : h === 0
                ? g % p == 0
                  ? P
                  : P - 1
                : 0 < p
                ? Math.floor(h / p) - 1
                : 0;
            }),
          c =
            ((n.getSlideIndexForMultipleItems = l),
            function (h, p) {
              return (
                p === void 0 && (p = 0),
                (h = (h = h === void 0 ? 0 : h) + 1),
                h < 1 ? (h = p) : p < h && (h = 1),
                { item: h, itemsCount: p }
              );
            }),
          m =
            ((n.getSlideInfo = c),
            function (p) {
              var p = p || {},
                g = p.itemsInSlide,
                w = p.activeIndex,
                P = p.infinite,
                y = p.itemsCount;
              return p.isStageContentPartial
                ? { isPrevSlideDisabled: !0, isNextSlideDisabled: !0 }
                : {
                    isPrevSlideDisabled: P === !1 && w === 0,
                    isNextSlideDisabled: P === !1 && y - g <= w,
                  };
            });
        n.getSlideItemInfo = m;
      })(ku)),
    ku
  );
}
var Ou = {},
  yp;
function MS() {
  return (
    yp ||
      ((yp = 1),
      (function (n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.shouldCancelAutoPlayOnHover =
            n.shouldCancelAutoPlayOnAction =
            n.getItemIndexForDotNavigation =
            n.checkIsTheLastDotIndex =
            n.getDotsNavigationLength =
            n.hasDotForEachSlide =
            n.isStrategy =
            n.shouldDisableButtons =
            n.shouldDisableDots =
            n.shouldDisableControls =
              void 0);
        var i = un();
        function a(b, A) {
          var b = (b || {}).controlsStrategy,
            A = A || {},
            T = A.itemsInSlide,
            _ = A.itemsCount,
            A = A.autoWidth;
          if ((0, n.isStrategy)(b, i.ControlsStrategy.RESPONSIVE))
            return !A && T === _;
        }
        function o(y, j) {
          return y.disableDotsControls || a(y, j);
        }
        function l(y, j) {
          return y.disableButtonsControls || (!y.infinite && a(y, j));
        }
        (n.shouldDisableControls = a),
          (n.shouldDisableDots = o),
          (n.shouldDisableButtons = l);
        var c = function (y, j) {
            return (
              y === void 0 && (y = ""),
              j === void 0 && (j = ""),
              !!(y && y.includes(j))
            );
          },
          m =
            ((n.isStrategy = c),
            function (y, j) {
              return y || (0, n.isStrategy)(j, i.ControlsStrategy.ALTERNATE);
            }),
          h =
            ((n.hasDotForEachSlide = m),
            function (y, j, b) {
              return (
                y === void 0 && (y = 0),
                j === void 0 && (j = 1),
                (b = b !== void 0 && b)
                  ? y
                  : (Number(j) !== 0 && Math.ceil(y / j)) || 0
              );
            }),
          p =
            ((n.getDotsNavigationLength = h),
            function (y, j, b) {
              return !j && y === b - 1;
            }),
          g =
            ((n.checkIsTheLastDotIndex = p),
            function (y, j, b, T) {
              return (j ? b - T : y * T) || 0;
            }),
          w =
            ((n.getItemIndexForDotNavigation = g),
            function (y) {
              return (
                (y = y === void 0 ? "" : y) === i.AutoPlayStrategy.ACTION ||
                y === i.AutoPlayStrategy.ALL
              );
            }),
          P =
            ((n.shouldCancelAutoPlayOnAction = w),
            function (y) {
              return (
                (y = y === void 0 ? "" : y) === i.AutoPlayStrategy.DEFAULT ||
                y === i.AutoPlayStrategy.ALL
              );
            });
        n.shouldCancelAutoPlayOnHover = P;
      })(Ou)),
    Ou
  );
}
var xp;
function qi() {
  return (
    xp ||
      ((xp = 1),
      (function (n) {
        var i = Object.create
            ? function (o, l, c, m) {
                m === void 0 && (m = c);
                var h = Object.getOwnPropertyDescriptor(l, c);
                (h &&
                  ("get" in h
                    ? l.__esModule
                    : !h.writable && !h.configurable)) ||
                  (h = {
                    enumerable: !0,
                    get: function () {
                      return l[c];
                    },
                  }),
                  Object.defineProperty(o, m, h);
              }
            : function (o, l, c, m) {
                o[(m = m === void 0 ? c : m)] = l[c];
              },
          a = function (o, l) {
            for (var c in o)
              c === "default" ||
                Object.prototype.hasOwnProperty.call(l, c) ||
                i(l, o, c);
          };
        Object.defineProperty(n, "__esModule", { value: !0 }),
          a(dv(), n),
          a(cv(), n),
          a(AS(), n),
          a(RS(), n),
          a(Jo(), n),
          a(DS(), n),
          a(LS(), n),
          a(MS(), n),
          a(uv(), n);
      })(Su)),
    Su
  );
}
var wp;
function FS() {
  return (
    wp ||
      ((wp = 1),
      (function (n) {
        var i = function (m) {
            return m && m.__esModule ? m : { default: m };
          },
          a =
            (Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.SlideInfo = void 0),
            i(Kt())),
          o = un(),
          l = qi(),
          c = function (p) {
            var g = p.activeIndex,
              h = p.itemsCount,
              p = p.renderSlideInfo,
              g = (0, l.getSlideInfo)(g, h).item;
            return typeof p == "function"
              ? a.default.createElement(
                  "div",
                  { className: o.Classnames.SLIDE_INFO },
                  p({ item: g, itemsCount: h })
                )
              : ((p = (0, l.concatClassnames)(
                  o.Classnames.SLIDE_INFO_ITEM,
                  o.Modifiers.SEPARATOR
                )),
                a.default.createElement(
                  "div",
                  { className: o.Classnames.SLIDE_INFO },
                  a.default.createElement(
                    "span",
                    { className: o.Classnames.SLIDE_INFO_ITEM },
                    g
                  ),
                  a.default.createElement("span", { className: p }, "/"),
                  a.default.createElement(
                    "span",
                    { className: o.Classnames.SLIDE_INFO_ITEM },
                    h
                  )
                ));
          };
        n.SlideInfo = c;
      })(bu)),
    bu
  );
}
var Iu = {},
  bp;
function zS() {
  return (
    bp ||
      ((bp = 1),
      (function (n) {
        var i = function (l) {
            return l && l.__esModule ? l : { default: l };
          },
          a =
            (Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.StageItem = void 0),
            i(Kt())),
          o = function (h) {
            var c = h.item,
              m = h.className,
              h = h.styles;
            return a.default.createElement("li", { style: h, className: m }, c);
          };
        n.StageItem = o;
      })(Iu)),
    Iu
  );
}
var Au = {},
  Sp;
function US() {
  return (
    Sp ||
      ((Sp = 1),
      (function (n) {
        var i = function (m) {
            return m && m.__esModule ? m : { default: m };
          },
          a =
            (Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.DotsNavigation = void 0),
            i(Kt())),
          o = un(),
          l = qi(),
          c = function (_) {
            var h = _.state,
              p = _.onClick,
              g = _.onMouseEnter,
              w = _.onMouseLeave,
              P = _.controlsStrategy,
              y = _.renderDotsItem,
              j = h.itemsCount,
              b = h.itemsInSlide,
              T = h.infinite,
              _ = h.autoWidth,
              A = h.activeIndex,
              R = (0, l.getSlideItemInfo)(h).isNextSlideDisabled,
              x = (0, l.hasDotForEachSlide)(_, P),
              S = (0, l.getDotsNavigationLength)(j, b, x);
            return a.default.createElement(
              "ul",
              { className: o.Classnames.DOTS },
              Array.from({ length: j }).map(function (E, k) {
                var I, W, Y;
                if (k < S)
                  return (
                    (W = (0, l.checkIsTheLastDotIndex)(k, !!T, S)),
                    (I = (0, l.getItemIndexForDotNavigation)(k, W, j, b)),
                    (W = (0, l.getActiveSlideIndex)(R, h)),
                    x &&
                      ((W = A) < 0 ? (W = j - 1) : j <= A && (W = 0), (I = k)),
                    (W = W === k ? o.Modifiers.ACTIVE : ""),
                    (Y = y ? o.Modifiers.CUSTOM : ""),
                    (Y = (0, l.concatClassnames)(o.Classnames.DOTS_ITEM, W, Y)),
                    a.default.createElement(
                      "li",
                      {
                        key: "dot-item-".concat(k),
                        onMouseEnter: g,
                        onMouseLeave: w,
                        onClick: function () {
                          return p(I);
                        },
                        className: Y,
                      },
                      y && y({ isActive: !!W, activeIndex: k })
                    )
                  );
              })
            );
          };
        n.DotsNavigation = c;
      })(Au)),
    Au
  );
}
var Ru = {},
  _p;
function BS() {
  return (
    _p ||
      ((_p = 1),
      (function (n) {
        var i = function (m) {
            return m && m.__esModule ? m : { default: m };
          },
          a =
            (Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.PlayPauseButton = void 0),
            i(Kt())),
          o = un(),
          l = qi(),
          c = function (g) {
            var h = g.isPlaying,
              p = g.onClick,
              g = g.renderPlayPauseButton;
            return typeof g == "function"
              ? a.default.createElement(
                  "div",
                  { className: o.Classnames.PLAY_BTN, onClick: p },
                  g({ isPlaying: h })
                )
              : ((g = h ? o.Modifiers.PAUSE : ""),
                (h = (0, l.concatClassnames)(o.Classnames.PLAY_BTN_ITEM, g)),
                a.default.createElement(
                  "div",
                  { className: o.Classnames.PLAY_BTN },
                  a.default.createElement(
                    "div",
                    { className: o.Classnames.PLAY_BTN_WRAPPER },
                    a.default.createElement("div", { onClick: p, className: h })
                  )
                ));
          };
        n.PlayPauseButton = c;
      })(Ru)),
    Ru
  );
}
var Du = {},
  Ep;
function WS() {
  return (
    Ep ||
      ((Ep = 1),
      (function (n) {
        var i = function (m) {
            return m && m.__esModule ? m : { default: m };
          },
          a =
            (Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.PrevNextButton = void 0),
            i(Kt())),
          o = un(),
          l = qi(),
          c = function (y) {
            var h,
              p = y.name,
              g = y.isDisabled,
              w = y.onClick,
              P = y.renderPrevButton,
              y = y.renderNextButton;
            return typeof P == "function"
              ? a.default.createElement(
                  "div",
                  { className: o.Classnames.BUTTON_PREV, onClick: w },
                  P({ isDisabled: g })
                )
              : typeof y == "function"
              ? a.default.createElement(
                  "div",
                  { className: o.Classnames.BUTTON_NEXT, onClick: w },
                  y({ isDisabled: g })
                )
              : ((y = (P = p === "prev") ? "<" : ">"),
                (p = P ? o.Classnames.BUTTON_PREV : o.Classnames.BUTTON_NEXT),
                (h = P
                  ? o.Classnames.BUTTON_PREV_WRAPPER
                  : o.Classnames.BUTTON_NEXT_WRAPPER),
                (P = P
                  ? o.Classnames.BUTTON_PREV_ITEM
                  : o.Classnames.BUTTON_NEXT_ITEM),
                (g = g ? o.Modifiers.INACTIVE : ""),
                (P = (0, l.concatClassnames)(P, g)),
                a.default.createElement(
                  "div",
                  { className: p },
                  a.default.createElement(
                    "div",
                    { className: h },
                    a.default.createElement(
                      "p",
                      {
                        className: P,
                        onClick: function (j) {
                          return w(j);
                        },
                      },
                      a.default.createElement("span", { "data-area": y })
                    )
                  )
                ));
          };
        n.PrevNextButton = c;
      })(Du)),
    Du
  );
}
var Tp;
function $S() {
  return (
    Tp ||
      ((Tp = 1),
      (function (n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.PrevNextButton =
            n.PlayPauseButton =
            n.DotsNavigation =
            n.StageItem =
            n.SlideInfo =
              void 0);
        var i = FS(),
          a =
            (Object.defineProperty(n, "SlideInfo", {
              enumerable: !0,
              get: function () {
                return i.SlideInfo;
              },
            }),
            zS()),
          o =
            (Object.defineProperty(n, "StageItem", {
              enumerable: !0,
              get: function () {
                return a.StageItem;
              },
            }),
            US()),
          l =
            (Object.defineProperty(n, "DotsNavigation", {
              enumerable: !0,
              get: function () {
                return o.DotsNavigation;
              },
            }),
            BS()),
          c =
            (Object.defineProperty(n, "PlayPauseButton", {
              enumerable: !0,
              get: function () {
                return l.PlayPauseButton;
              },
            }),
            WS());
        Object.defineProperty(n, "PrevNextButton", {
          enumerable: !0,
          get: function () {
            return c.PrevNextButton;
          },
        });
      })(wu)),
    wu
  );
}
var Pp;
function VS() {
  return (
    Pp ||
      ((Pp = 1),
      (function (n) {
        var i = (function () {
            var R = function (x, S) {
              return (R =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array
                  ? function (E, k) {
                      E.__proto__ = k;
                    }
                  : function (E, k) {
                      for (var I in k)
                        Object.prototype.hasOwnProperty.call(k, I) &&
                          (E[I] = k[I]);
                    }))(x, S);
            };
            return function (x, S) {
              if (typeof S != "function" && S !== null)
                throw new TypeError(
                  "Class extends value " +
                    String(S) +
                    " is not a constructor or null"
                );
              function E() {
                this.constructor = x;
              }
              R(x, S),
                (x.prototype =
                  S === null
                    ? Object.create(S)
                    : ((E.prototype = S.prototype), new E()));
            };
          })(),
          a = function () {
            return (a =
              Object.assign ||
              function (R) {
                for (var x, S = 1, E = arguments.length; S < E; S++)
                  for (var k in (x = arguments[S]))
                    Object.prototype.hasOwnProperty.call(x, k) && (R[k] = x[k]);
                return R;
              }).apply(this, arguments);
          },
          o = Object.create
            ? function (R, x, S, E) {
                E === void 0 && (E = S);
                var k = Object.getOwnPropertyDescriptor(x, S);
                (k &&
                  ("get" in k
                    ? x.__esModule
                    : !k.writable && !k.configurable)) ||
                  (k = {
                    enumerable: !0,
                    get: function () {
                      return x[S];
                    },
                  }),
                  Object.defineProperty(R, E, k);
              }
            : function (R, x, S, E) {
                R[(E = E === void 0 ? S : E)] = x[S];
              },
          l = Object.create
            ? function (R, x) {
                Object.defineProperty(R, "default", {
                  enumerable: !0,
                  value: x,
                });
              }
            : function (R, x) {
                R.default = x;
              },
          c = function (R) {
            if (R && R.__esModule) return R;
            var x = {};
            if (R != null)
              for (var S in R)
                S !== "default" &&
                  Object.prototype.hasOwnProperty.call(R, S) &&
                  o(x, R, S);
            return l(x, R), x;
          },
          m = function (R, x) {
            for (var S in R)
              S === "default" ||
                Object.prototype.hasOwnProperty.call(x, S) ||
                o(x, R, S);
          },
          h = function (R, x, S, E) {
            return new (S = S || Promise)(function (k, I) {
              function W(te) {
                try {
                  ne(E.next(te));
                } catch (F) {
                  I(F);
                }
              }
              function Y(te) {
                try {
                  ne(E.throw(te));
                } catch (F) {
                  I(F);
                }
              }
              function ne(te) {
                var F;
                te.done
                  ? k(te.value)
                  : ((F = te.value) instanceof S
                      ? F
                      : new S(function (X) {
                          X(F);
                        })
                    ).then(W, Y);
              }
              ne((E = E.apply(R, [])).next());
            });
          },
          p = function (R, x) {
            var S,
              E,
              k,
              I = {
                label: 0,
                sent: function () {
                  if (1 & k[0]) throw k[1];
                  return k[1];
                },
                trys: [],
                ops: [],
              },
              W = { next: Y(0), throw: Y(1), return: Y(2) };
            return (
              typeof Symbol == "function" &&
                (W[Symbol.iterator] = function () {
                  return this;
                }),
              W
            );
            function Y(ne) {
              return function (te) {
                var F = [ne, te];
                if (S) throw new TypeError("Generator is already executing.");
                for (; I; )
                  try {
                    if (
                      ((S = 1),
                      E &&
                        (k =
                          2 & F[0]
                            ? E.return
                            : F[0]
                            ? E.throw || ((k = E.return) && k.call(E), 0)
                            : E.next) &&
                        !(k = k.call(E, F[1])).done)
                    )
                      return k;
                    switch (((E = 0), (F = k ? [2 & F[0], k.value] : F)[0])) {
                      case 0:
                      case 1:
                        k = F;
                        break;
                      case 4:
                        return I.label++, { value: F[1], done: !1 };
                      case 5:
                        I.label++, (E = F[1]), (F = [0]);
                        continue;
                      case 7:
                        (F = I.ops.pop()), I.trys.pop();
                        continue;
                      default:
                        if (
                          !(k = 0 < (k = I.trys).length && k[k.length - 1]) &&
                          (F[0] === 6 || F[0] === 2)
                        ) {
                          I = 0;
                          continue;
                        }
                        if (F[0] === 3 && (!k || (F[1] > k[0] && F[1] < k[3])))
                          I.label = F[1];
                        else if (F[0] === 6 && I.label < k[1])
                          (I.label = k[1]), (k = F);
                        else {
                          if (!(k && I.label < k[2])) {
                            k[2] && I.ops.pop(), I.trys.pop();
                            continue;
                          }
                          (I.label = k[2]), I.ops.push(F);
                        }
                    }
                    F = x.call(R, I);
                  } catch (X) {
                    (F = [6, X]), (E = 0);
                  } finally {
                    S = k = 0;
                  }
                if (5 & F[0]) throw F[1];
                return { value: F[0] ? F[1] : void 0, done: !0 };
              };
            }
          },
          g = function (R) {
            return R && R.__esModule ? R : { default: R };
          },
          w =
            (Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.Link = void 0),
            g(Kt())),
          P = g(kS()),
          y = OS(),
          j = g(IS()),
          b = ((n.Link = j.default), c($S())),
          T = c(qi()),
          _ = un(),
          A =
            (m(un(), n),
            (function (R) {
              function x(S) {
                var E = R.call(this, S) || this;
                return (
                  (E.swipeListener = null),
                  (E._handleKeyboardEvents = function (k) {
                    switch (k.code) {
                      case "Space":
                        return E.props.autoPlay && E._handlePlayPauseToggle();
                      case "ArrowLeft":
                        return E.slidePrev(k);
                      case "ArrowRight":
                        return E.slideNext(k);
                    }
                  }),
                  (E._handleBeforeSlideEnd = function (k) {
                    return h(E, void 0, void 0, function () {
                      var I, W, Y;
                      return p(this, function (ne) {
                        switch (ne.label) {
                          case 0:
                            return (
                              (W = this.state),
                              (Y = W.activeIndex),
                              (I = W.itemsCount),
                              (W = W.fadeoutAnimationProcessing),
                              T.shouldRecalculateSlideIndex(Y, I)
                                ? ((Y = T.getUpdateSlidePositionIndex(Y, I)),
                                  [4, this._handleUpdateSlidePosition(Y)])
                                : [3, 2]
                            );
                          case 1:
                            return ne.sent(), [3, 4];
                          case 2:
                            return W
                              ? [
                                  4,
                                  this.setState({
                                    fadeoutAnimationIndex: null,
                                    fadeoutAnimationPosition: null,
                                    fadeoutAnimationProcessing: !1,
                                  }),
                                ]
                              : [3, 4];
                          case 3:
                            ne.sent(), (ne.label = 4);
                          case 4:
                            return this._handleSlideChanged(k), [2];
                        }
                      });
                    });
                  }),
                  (E._handleMouseEnter = function () {
                    var k = E.props.autoPlayStrategy;
                    T.shouldCancelAutoPlayOnHover(k) &&
                      E.state.isAutoPlaying &&
                      ((E.isHovered = !0), E._handlePause());
                  }),
                  (E._handleMouseLeave = function () {
                    E.state.isAutoPlaying &&
                      ((E.isHovered = !1), E._handlePlay());
                  }),
                  (E._handlePause = function () {
                    E._clearAutoPlayTimeout();
                  }),
                  (E._handlePlayPauseToggle = function () {
                    return h(E, void 0, void 0, function () {
                      var k;
                      return p(this, function (I) {
                        switch (I.label) {
                          case 0:
                            return (
                              (k = this.state.isAutoPlaying),
                              (this.hasUserAction = !0),
                              [
                                4,
                                this.setState({
                                  isAutoPlaying: !k,
                                  isAutoPlayCanceledOnAction: !0,
                                }),
                              ]
                            );
                          case 1:
                            return (
                              I.sent(),
                              k ? this._handlePause() : this._handlePlay(),
                              [2]
                            );
                        }
                      });
                    });
                  }),
                  (E._setRootComponentRef = function (k) {
                    return (E.rootElement = k);
                  }),
                  (E._setStageComponentRef = function (k) {
                    return (E.stageComponent = k);
                  }),
                  (E._renderStageItem = function (k, I) {
                    var W = T.getRenderStageItemStyles(I, E.state),
                      Y = T.getRenderStageItemClasses(I, E.state);
                    return w.default.createElement(b.StageItem, {
                      styles: W,
                      className: Y,
                      key: "stage-item-".concat(I),
                      item: k,
                    });
                  }),
                  (E._renderSlideInfo = function () {
                    var k = E.props.renderSlideInfo,
                      W = E.state,
                      I = W.activeIndex,
                      W = W.itemsCount;
                    return w.default.createElement(b.SlideInfo, {
                      itemsCount: W,
                      activeIndex: I,
                      renderSlideInfo: k,
                    });
                  }),
                  (E.state = T.calculateInitialState(S, null)),
                  (E.isHovered = !1),
                  (E.isAnimationDisabled = !1),
                  (E.isTouchMoveProcessStarted = !1),
                  (E.cancelTouchAnimations = !1),
                  (E.hasUserAction = !1),
                  (E.rootElement = null),
                  (E.rootComponentDimensions = {}),
                  (E.stageComponent = null),
                  (E.startTouchmovePosition = void 0),
                  (E.slideTo = E.slideTo.bind(E)),
                  (E.slidePrev = E.slidePrev.bind(E)),
                  (E.slideNext = E.slideNext.bind(E)),
                  (E._handleTouchmove = E._handleTouchmove.bind(E)),
                  (E._handleTouchend = E._handleTouchend.bind(E)),
                  (E._handleDotClick = E._handleDotClick.bind(E)),
                  (E._handleResize = E._handleResize.bind(E)),
                  (S = T.debounce(E._handleResize, 100)),
                  (E._handleResizeDebounced = S[0]),
                  (E._cancelResizeDebounced = S[1]),
                  E
                );
              }
              return (
                i(x, R),
                (x.prototype.componentDidMount = function () {
                  return h(this, void 0, void 0, function () {
                    return p(this, function (S) {
                      switch (S.label) {
                        case 0:
                          return [4, this._setInitialState()];
                        case 1:
                          return (
                            S.sent(),
                            this._addEventListeners(),
                            this._setupSwipeHandlers(),
                            this.props.autoPlay && this._handlePlay(),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (x.prototype.componentDidUpdate = function (S) {
                  var $ = this.props,
                    E = $.activeIndex,
                    k = $.animationDuration,
                    I = $.autoWidth,
                    W = $.children,
                    Y = $.infinite,
                    ne = $.items,
                    te = $.paddingLeft,
                    F = $.paddingRight,
                    X = $.responsive,
                    J = $.swipeExtraPadding,
                    ee = $.mouseTracking,
                    ie = $.swipeDelta,
                    ae = $.touchTracking,
                    $ = $.touchMoveDefaultEvents;
                  (W && S.children !== W) ||
                  S.autoWidth !== I ||
                  S.infinite !== Y ||
                  S.items !== ne ||
                  S.paddingLeft !== te ||
                  S.paddingRight !== F ||
                  S.responsive !== X ||
                  S.swipeExtraPadding !== J
                    ? this._updateComponent()
                    : (S.animationDuration !== k &&
                        this.setState({ animationDuration: k }),
                      S.activeIndex !== E &&
                        this.slideTo(E, _.EventType.UPDATE)),
                    (S.swipeDelta === ie &&
                      S.mouseTracking === ee &&
                      S.touchTracking === ae &&
                      S.touchMoveDefaultEvents === $) ||
                      this._updateSwipeProps(),
                    this.props.keyboardNavigation !== S.keyboardNavigation &&
                      this._updateEventListeners();
                }),
                (x.prototype.componentWillUnmount = function () {
                  this._cancelResizeDebounced(),
                    this._cancelTimeoutAnimations(),
                    this._removeEventListeners();
                }),
                Object.defineProperty(x.prototype, "eventObject", {
                  get: function () {
                    var E = this.state,
                      S = E.itemsInSlide,
                      E = E.activeIndex,
                      I = T.getSlideItemInfo(this.state),
                      k = I.isNextSlideDisabled,
                      I = I.isPrevSlideDisabled;
                    return {
                      item: E,
                      slide: T.getActiveSlideIndex(k, this.state),
                      itemsInSlide: S,
                      isNextSlideDisabled: k,
                      isPrevSlideDisabled: I,
                      type: _.EventType.ACTION,
                    };
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(
                  x.prototype,
                  "isFadeoutAnimationAllowed",
                  {
                    get: function () {
                      var S = this.state.itemsInSlide,
                        W = this.props,
                        E = W.animationType,
                        k = W.paddingLeft,
                        I = W.paddingRight,
                        W = W.autoWidth;
                      return (
                        S === 1 &&
                        E === _.AnimationType.FADEOUT &&
                        !(k || I || W)
                      );
                    },
                    enumerable: !1,
                    configurable: !0,
                  }
                ),
                Object.defineProperty(x.prototype, "touchmovePosition", {
                  get: function () {
                    return this.startTouchmovePosition !== void 0
                      ? this.startTouchmovePosition
                      : this.state.translate3d;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (x.prototype.slideTo = function (S, E) {
                  var k, I, W;
                  S === void 0 && (S = 0),
                    this._handlePause(),
                    this.isFadeoutAnimationAllowed
                      ? ((k = T.getUpdateSlidePositionIndex(
                          S,
                          this.state.itemsCount
                        )),
                        (I = T.getFadeoutAnimationPosition(k, this.state)),
                        (W = T.getFadeoutAnimationIndex(this.state)),
                        this._handleSlideTo({
                          activeIndex: k,
                          fadeoutAnimationIndex: W,
                          fadeoutAnimationPosition: I,
                          eventType: E,
                        }))
                      : this._handleSlideTo({ activeIndex: S, eventType: E });
                }),
                (x.prototype.slidePrev = function (I) {
                  this._handlePause(),
                    I && I.isTrusted && (this.hasUserAction = !0);
                  var E,
                    k,
                    I = this.state.activeIndex - 1;
                  this.isFadeoutAnimationAllowed
                    ? ((E = -this.state.stageWidth),
                      (k = T.getFadeoutAnimationIndex(this.state)),
                      this._handleSlideTo({
                        activeIndex: I,
                        fadeoutAnimationIndex: k,
                        fadeoutAnimationPosition: E,
                      }))
                    : this._handleSlideTo({ activeIndex: I });
                }),
                (x.prototype.slideNext = function (I) {
                  this._handlePause(),
                    I && I.isTrusted && (this.hasUserAction = !0);
                  var E,
                    k,
                    I = this.state.activeIndex + 1;
                  this.isFadeoutAnimationAllowed
                    ? ((E = this.state.stageWidth),
                      (k = T.getFadeoutAnimationIndex(this.state)),
                      this._handleSlideTo({
                        activeIndex: I,
                        fadeoutAnimationIndex: k,
                        fadeoutAnimationPosition: E,
                      }))
                    : this._handleSlideTo({ activeIndex: I });
                }),
                (x.prototype._addEventListeners = function () {
                  window.addEventListener(
                    "resize",
                    this._handleResizeDebounced
                  ),
                    this.props.keyboardNavigation &&
                      window.addEventListener(
                        "keyup",
                        this._handleKeyboardEvents
                      );
                }),
                (x.prototype._removeEventListeners = function () {
                  this.swipeListener && this.swipeListener.destroy(),
                    window.removeEventListener(
                      "resize",
                      this._handleResizeDebounced
                    ),
                    window.removeEventListener(
                      "keyup",
                      this._handleKeyboardEvents
                    );
                }),
                (x.prototype._updateEventListeners = function () {
                  this.props.keyboardNavigation
                    ? window.addEventListener(
                        "keyup",
                        this._handleKeyboardEvents
                      )
                    : window.removeEventListener(
                        "keyup",
                        this._handleKeyboardEvents
                      );
                }),
                (x.prototype._handleResize = function (S) {
                  return h(this, void 0, void 0, function () {
                    var E, k, I, W;
                    return p(this, function (Y) {
                      switch (Y.label) {
                        case 0:
                          return (
                            (I = this.props.onResizeEvent),
                            (k = T.getElementDimensions(this.rootElement)),
                            (I || T.shouldHandleResizeEvent)(
                              S,
                              this.rootComponentDimensions,
                              k
                            )
                              ? (this._cancelTimeoutAnimations(),
                                (this.rootComponentDimensions = k),
                                (I = this.state),
                                (k = I.itemsCount),
                                (E = I.isAutoPlaying),
                                (I = T.getUpdateSlidePositionIndex(
                                  this.state.activeIndex,
                                  k
                                )),
                                (k = T.calculateInitialState(
                                  a(a({}, this.props), { activeIndex: I }),
                                  this.stageComponent
                                )),
                                (I = T.getTranslate3dProperty(
                                  k.activeIndex,
                                  k
                                )),
                                (W = a(a({}, k), {
                                  translate3d: I,
                                  isAutoPlaying: E,
                                })),
                                T.animate(this.stageComponent, {
                                  position: -I,
                                }),
                                [4, this.setState(W)])
                              : [3, 2]
                          );
                        case 1:
                          Y.sent(),
                            this._handleResized({
                              itemsInSlide: W.itemsInSlide,
                            }),
                            (this.isAnimationDisabled = !1),
                            E && this._handlePlay(),
                            (Y.label = 2);
                        case 2:
                          return [2];
                      }
                    });
                  });
                }),
                (x.prototype._handleTouchmove = function (S, Y) {
                  var k = Y.absY,
                    I = Y.absX,
                    W = Y.deltaX,
                    Y = this.props.swipeDelta,
                    J = this.state,
                    ne = J.swipeShiftValue,
                    te = J.swipeLimitMin,
                    F = J.swipeLimitMax,
                    X = J.infinite,
                    J = J.fadeoutAnimationProcessing;
                  if (
                    ((this.hasUserAction = !0),
                    !(
                      J ||
                      (!this.isTouchMoveProcessStarted &&
                        T.isVerticalTouchmoveDetected(I, k, Y))
                    ))
                  ) {
                    this.isTouchMoveProcessStarted ||
                      (this._cancelTimeoutAnimations(),
                      this._setTouchmovePosition(),
                      (this.isAnimationDisabled = !0),
                      (this.isTouchMoveProcessStarted = !0),
                      this._handleSlideChange());
                    var ee = T.getTouchmoveTranslatePosition(
                      W,
                      this.touchmovePosition
                    );
                    if (X === !1)
                      return te < ee || ee < -F
                        ? void 0
                        : void T.animate(this.stageComponent, { position: ee });
                    if (T.shouldRecalculateSwipePosition(ee, te, F))
                      try {
                        (function ie() {
                          T.getIsLeftDirection(W) ? (ee += ne) : (ee += -ne),
                            T.shouldRecalculateSwipePosition(ee, te, F) && ie();
                        })();
                      } catch (ie) {
                        T.debug(ie);
                      }
                    T.animate(this.stageComponent, { position: ee });
                  }
                }),
                (x.prototype._handleTouchend = function (S, Y) {
                  var k,
                    I,
                    W,
                    Y = Y.deltaX;
                  this._clearTouchmovePosition(),
                    this.isTouchMoveProcessStarted &&
                      ((this.isTouchMoveProcessStarted = !1),
                      (k = this.state.animationDuration),
                      (I = this.props.animationEasingFunction),
                      (W = T.getTranslateXProperty(this.stageComponent)),
                      (Y = T.getSwipeTouchendPosition(this.state, Y, W)),
                      T.animate(this.stageComponent, {
                        position: Y,
                        animationDuration: k,
                        animationEasingFunction: I,
                      }),
                      this._handleBeforeTouchEnd(Y));
                }),
                (x.prototype._handleBeforeTouchEnd = function (S) {
                  var E = this,
                    k = this.state.animationDuration;
                  this.touchEndTimeoutId = window.setTimeout(function () {
                    return h(E, void 0, void 0, function () {
                      var I,
                        W,
                        Y,
                        ne = this;
                      return p(this, function (te) {
                        switch (te.label) {
                          case 0:
                            return (
                              (I = T.getSwipeTouchendIndex(S, this.state)),
                              (W = T.getTranslate3dProperty(I, this.state)),
                              T.animate(this.stageComponent, { position: -W }),
                              (Y = T.getTransitionProperty()),
                              [
                                4,
                                this.setState({
                                  activeIndex: I,
                                  translate3d: W,
                                  transition: Y,
                                }),
                              ]
                            );
                          case 1:
                            return (
                              te.sent(),
                              requestAnimationFrame(function () {
                                return ne._handleSlideChanged();
                              }),
                              [2]
                            );
                        }
                      });
                    });
                  }, k);
                }),
                (x.prototype._handleSlideTo = function (S) {
                  var I = S.activeIndex,
                    E = I === void 0 ? 0 : I,
                    I = S.fadeoutAnimationIndex,
                    k = I === void 0 ? null : I,
                    I = S.fadeoutAnimationPosition,
                    W = I === void 0 ? null : I,
                    Y = S.eventType;
                  return h(this, void 0, void 0, function () {
                    var ne,
                      te,
                      F,
                      X,
                      J = this;
                    return p(this, function (ee) {
                      switch (ee.label) {
                        case 0:
                          return (
                            (te = this.props),
                            (F = te.infinite),
                            (te = te.animationEasingFunction),
                            (ne = this.state),
                            (X = ne.itemsCount),
                            (ne = ne.animationDuration),
                            this.isAnimationDisabled ||
                            this.state.activeIndex === E ||
                            (!F && T.shouldCancelSlideAnimation(E, X))
                              ? [2]
                              : ((this.isAnimationDisabled = !0),
                                this._cancelTimeoutAnimations(),
                                this._handleSlideChange(Y),
                                (F = !1),
                                (X = T.getTranslate3dProperty(E, this.state)),
                                (te =
                                  k !== null && W !== null
                                    ? ((F = !0), T.getTransitionProperty())
                                    : T.getTransitionProperty({
                                        animationDuration: ne,
                                        animationEasingFunction: te,
                                      })),
                                [
                                  4,
                                  this.setState({
                                    activeIndex: E,
                                    transition: te,
                                    translate3d: X,
                                    animationDuration: ne,
                                    fadeoutAnimationIndex: k,
                                    fadeoutAnimationPosition: W,
                                    fadeoutAnimationProcessing: F,
                                  }),
                                ])
                          );
                        case 1:
                          return (
                            ee.sent(),
                            (this.slideEndTimeoutId = window.setTimeout(
                              function () {
                                return J._handleBeforeSlideEnd(Y);
                              },
                              ne
                            )),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (x.prototype._handleUpdateSlidePosition = function (S) {
                  return h(this, void 0, void 0, function () {
                    var E, k, I;
                    return p(this, function (W) {
                      switch (W.label) {
                        case 0:
                          return (
                            (E = this.state.animationDuration),
                            (k = T.getTranslate3dProperty(S, this.state)),
                            (I = T.getTransitionProperty({
                              animationDuration: 0,
                            })),
                            [
                              4,
                              this.setState({
                                activeIndex: S,
                                translate3d: k,
                                transition: I,
                                animationDuration: E,
                                fadeoutAnimationIndex: null,
                                fadeoutAnimationPosition: null,
                                fadeoutAnimationProcessing: !1,
                              }),
                            ]
                          );
                        case 1:
                          return W.sent(), [2];
                      }
                    });
                  });
                }),
                (x.prototype._handleUpdated = function () {
                  this.props.onUpdated &&
                    this.props.onUpdated(
                      a(a({}, this.eventObject), { type: _.EventType.UPDATE })
                    );
                }),
                (x.prototype._handleResized = function (S) {
                  S === void 0 && (S = {}),
                    this.props.onResized &&
                      this.props.onResized(
                        a(a(a({}, this.eventObject), S), {
                          type: _.EventType.RESIZE,
                        })
                      );
                }),
                (x.prototype._handleSlideChange = function (S) {
                  this.props.onSlideChange &&
                    ((S = S
                      ? a(a({}, this.eventObject), { type: S })
                      : this.eventObject),
                    this.props.onSlideChange(S));
                }),
                (x.prototype._handleSlideChanged = function (S) {
                  return h(this, void 0, void 0, function () {
                    var E, k, I, W;
                    return p(this, function (Y) {
                      switch (Y.label) {
                        case 0:
                          return (
                            (k = this.state),
                            (E = k.isAutoPlaying),
                            (k = k.isAutoPlayCanceledOnAction),
                            (I = this.props),
                            (W = I.autoPlayStrategy),
                            (I = I.onSlideChanged),
                            T.shouldCancelAutoPlayOnAction(W) &&
                            this.hasUserAction &&
                            !k
                              ? [
                                  4,
                                  this.setState({
                                    isAutoPlayCanceledOnAction: !0,
                                    isAutoPlaying: !1,
                                  }),
                                ]
                              : [3, 2]
                          );
                        case 1:
                          return Y.sent(), [3, 3];
                        case 2:
                          E && this._handlePlay(), (Y.label = 3);
                        case 3:
                          return (
                            (this.isAnimationDisabled = !1),
                            I &&
                              ((W = S
                                ? a(a({}, this.eventObject), { type: S })
                                : this.eventObject),
                              I(W)),
                            S === _.EventType.UPDATE && this._handleUpdated(),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (x.prototype._handleDotClick = function (S) {
                  (this.hasUserAction = !0), this.slideTo(S);
                }),
                (x.prototype._handlePlay = function () {
                  this._setAutoPlayInterval();
                }),
                (x.prototype._cancelTimeoutAnimations = function () {
                  this._clearAutoPlayTimeout(),
                    this._clearSlideEndTimeout(),
                    this.clearTouchendTimeout();
                }),
                (x.prototype._clearAutoPlayTimeout = function () {
                  window.clearTimeout(this.autoPlayTimeoutId),
                    (this.autoPlayTimeoutId = void 0);
                }),
                (x.prototype._clearSlideEndTimeout = function () {
                  clearTimeout(this.slideEndTimeoutId),
                    (this.slideEndTimeoutId = void 0);
                }),
                (x.prototype.clearTouchendTimeout = function () {
                  clearTimeout(this.touchEndTimeoutId),
                    (this.touchEndTimeoutId = void 0);
                }),
                (x.prototype._clearTouchmovePosition = function () {
                  this.startTouchmovePosition = void 0;
                }),
                (x.prototype._setTouchmovePosition = function () {
                  var S = T.getTranslateXProperty(this.stageComponent);
                  this.startTouchmovePosition = -S;
                }),
                (x.prototype._setInitialState = function () {
                  return h(this, void 0, void 0, function () {
                    var S;
                    return p(this, function (E) {
                      switch (E.label) {
                        case 0:
                          return (
                            (S = T.calculateInitialState(
                              this.props,
                              this.stageComponent
                            )),
                            (this.rootComponentDimensions =
                              T.getElementDimensions(this.rootElement)),
                            [4, this.setState(S)]
                          );
                        case 1:
                          return (
                            E.sent(),
                            this.props.onInitialized &&
                              this.props.onInitialized(
                                a(a({}, this.eventObject), {
                                  type: _.EventType.INIT,
                                })
                              ),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (x.prototype._setAutoPlayInterval = function () {
                  var S = this,
                    k = this.props,
                    E = k.autoPlayDirection,
                    k = k.autoPlayInterval;
                  this.autoPlayTimeoutId = window.setTimeout(function () {
                    S.isHovered ||
                      (E === _.AutoplayDirection.RTL
                        ? S.slidePrev()
                        : S.slideNext());
                  }, k);
                }),
                (x.prototype._setupSwipeHandlers = function () {
                  (this.swipeListener = new P.default({
                    element: this.rootElement,
                    delta: this.props.swipeDelta,
                    onSwiping: this._handleTouchmove,
                    onSwiped: this._handleTouchend,
                    rotationAngle: 5,
                    mouseTrackingEnabled: this.props.mouseTracking,
                    touchTrackingEnabled: this.props.touchTracking,
                    preventDefaultTouchmoveEvent:
                      !this.props.touchMoveDefaultEvents,
                    preventTrackingOnMouseleave: !0,
                  })),
                    this.swipeListener.init();
                }),
                (x.prototype._updateComponent = function () {
                  var S = this,
                    E = (
                      this.props.syncStateOnPropsUpdate
                        ? this.state
                        : this.props
                    ).activeIndex,
                    k = a(a({}, this.props), { activeIndex: E });
                  this._cancelTimeoutAnimations(),
                    (this.isAnimationDisabled = !1),
                    this.state.isAutoPlaying && this._handlePlay(),
                    this.setState({ clones: T.createClones(k) }),
                    requestAnimationFrame(function () {
                      S.setState(
                        T.calculateInitialState(k, S.stageComponent),
                        function () {
                          return S._handleUpdated();
                        }
                      );
                    });
                }),
                (x.prototype._updateSwipeProps = function () {
                  this.swipeListener &&
                    this.swipeListener.update({
                      delta: this.props.swipeDelta,
                      mouseTrackingEnabled: this.props.mouseTracking,
                      touchTrackingEnabled: this.props.touchTracking,
                      preventDefaultTouchmoveEvent:
                        !this.props.touchMoveDefaultEvents,
                    });
                }),
                (x.prototype._renderDotsNavigation = function () {
                  var E = this.props,
                    S = E.renderDotsItem,
                    E = E.controlsStrategy;
                  return w.default.createElement(b.DotsNavigation, {
                    state: this.state,
                    onClick: this._handleDotClick,
                    renderDotsItem: S,
                    controlsStrategy: E,
                  });
                }),
                (x.prototype._renderPrevButton = function () {
                  var S = this.props.renderPrevButton,
                    E = T.getSlideItemInfo(this.state).isPrevSlideDisabled;
                  return w.default.createElement(b.PrevNextButton, {
                    name: "prev",
                    onClick: this.slidePrev,
                    isDisabled: E,
                    renderPrevButton: S,
                  });
                }),
                (x.prototype._renderNextButton = function () {
                  var S = this.props.renderNextButton,
                    E = T.getSlideItemInfo(this.state).isNextSlideDisabled;
                  return w.default.createElement(b.PrevNextButton, {
                    name: "next",
                    onClick: this.slideNext,
                    isDisabled: E,
                    renderNextButton: S,
                  });
                }),
                (x.prototype._renderPlayPauseButton = function () {
                  var S = this.props.renderPlayPauseButton,
                    E = this.state.isAutoPlaying;
                  return w.default.createElement(b.PlayPauseButton, {
                    isPlaying: E,
                    onClick: this._handlePlayPauseToggle,
                    renderPlayPauseButton: S,
                  });
                }),
                (x.prototype.render = function () {
                  var ne = this.state,
                    W = ne.translate3d,
                    S = ne.clones,
                    Y = ne.transition,
                    ne = ne.canUseDom,
                    E = T.shouldDisableDots(this.props, this.state),
                    k = T.shouldDisableButtons(this.props, this.state),
                    I = T.getRenderWrapperStyles(
                      this.props,
                      this.state,
                      this.stageComponent
                    ),
                    W = T.getRenderStageStyles(
                      { translate3d: W },
                      { transition: Y }
                    ),
                    Y = this.props.ssrSilentMode || ne ? "" : _.Modifiers.SSR,
                    ne = T.concatClassnames(_.Classnames.ROOT, Y);
                  return w.default.createElement(
                    "div",
                    { className: ne },
                    w.default.createElement(
                      "div",
                      { ref: this._setRootComponentRef },
                      w.default.createElement(
                        "div",
                        {
                          style: I,
                          className: _.Classnames.WRAPPER,
                          onMouseEnter: this._handleMouseEnter,
                          onMouseLeave: this._handleMouseLeave,
                        },
                        w.default.createElement(
                          "ul",
                          {
                            style: W,
                            className: _.Classnames.STAGE,
                            ref: this._setStageComponentRef,
                          },
                          S.map(this._renderStageItem)
                        )
                      )
                    ),
                    E ? null : this._renderDotsNavigation(),
                    k ? null : this._renderPrevButton(),
                    k ? null : this._renderNextButton(),
                    this.props.disableSlideInfo
                      ? null
                      : this._renderSlideInfo(),
                    this.props.autoPlayControls
                      ? this._renderPlayPauseButton()
                      : null
                  );
                }),
                (x.defaultProps = y.defaultProps),
                x
              );
            })(w.default.PureComponent));
        n.default = A;
      })(hu)),
    hu
  );
}
VS();
const HS = () => {
  const [n, i] = L.useState([]),
    [a, o] = L.useState(0);
  return (
    L.useEffect(() => {
      fetch("http://localhost:5000/slide")
        .then((l) => l.json())
        .then((l) => i(l))
        .catch((l) => console.error("Error fetching slider data:", l));
    }, []),
    L.useEffect(() => {
      const l = setInterval(() => {
        o((c) => (c + 1) % n.length);
      }, 5e3);
      return () => clearInterval(l);
    }, [n]),
    n.length === 0
      ? d.jsx("p", { children: "Loading..." })
      : d.jsx(d.Fragment, {
          children: d.jsx("div", {
            className: "b-background-carousel",
            children: n.map((l, c) =>
              d.jsxs(
                "div",
                {
                  className: ` b-carousel-slide   pt-10 font-bold mt-28 ${
                    c === a ? "active" : ""
                  }`,
                  style: { backgroundImage: `url(${l.image})` },
                  children: [
                    d.jsx("h1", {
                      className:
                        " destination-title pt-10 text-center text-yellow-500 text-6xl font-bold",
                      children: "Wedding Entertainment",
                    }),
                    d.jsx("p", {
                      className:
                        " pt-10 text-center text-gray-200 text-2xl font-bold",
                      children:
                        "The Emotion counts as it is related the Bride and Groom’s childhood Dream and we value it. to make your dream come true into reality we provide one stop solution for Wedding & Events. We cherish your peace of mind by offering a complete range of wedding services and saving you from being occupied on dealing and wrangling with the individual suppliers. As we are a renowned company and have been organizing wedding on a frequent basis, we get the best rates available in the market from all the vendors which can be benefited by you. So If you want best wedding planners in Punjab and event management company in Ludhiana then feel free to contact us anytime.",
                    }),
                    d.jsxs("div", {
                      className: "b-carousel-caption",
                      children: [
                        d.jsx("h3", { children: l.title }),
                        d.jsx("p", { children: l.description }),
                      ],
                    }),
                  ],
                },
                l.id
              )
            ),
          }),
        })
  );
};
function qS() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsxs("div", { className: "pt-32", children: [" ", d.jsx(xS, {})] }),
      d.jsx("div", { children: d.jsx(pS, {}) }),
      d.jsx("div", { children: d.jsx(gS, {}) }),
      d.jsx("div", { children: d.jsx(yS, {}) }),
      d.jsxs("div", { children: [" ", d.jsx(HS, {})] }),
      d.jsxs("div", { children: [d.jsx(vS, {}), " "] }),
    ],
  });
}
const YS = () =>
  d.jsx(d.Fragment, {
    children: d.jsx("div", {
      className: "pt-28 h-[80vh]",
      children: d.jsxs("div", {
        className: "relative bg-cover bg-center h-[100%] ",
        style: {
          backgroundImage:
            "url('https://www.visionvivaah.com/argon/img/s3.jpg')",
        },
        children: [
          d.jsx("div", {
            className: "absolute inset-0 bg-sky-900 bg-opacity-60",
          }),
          d.jsx("h1", {
            className:
              "destination-titles relative font-extrabold text-center  text-white text-7xl  pt-24",
            children: "contact Us",
          }),
          d.jsxs("div", {
            className: "flex",
            children: [
              d.jsx("p", {
                className:
                  " ml-[44.5%] w-32 border-2 relative border-red-600 mt-4",
              }),
              d.jsx("p", {
                className: "border-2 ml-1 w-1 relative border-black mt-4",
              }),
              d.jsx("p", { className: "border-2 w-1 ml-1  border-black mt-4" }),
            ],
          }),
          d.jsxs("ul", {
            className:
              " justify-center flex text-white gap-2 mt-3 relative text-xl",
            children: [
              d.jsx("li", {
                className: "hover:border-b-2 border-white",
                children: d.jsx(Xe, { to: "/", children: "Home" }),
              }),
              d.jsx("li", { children: "/" }),
              d.jsx("li", {
                className: "hover:border-b-2 border-white",
                children: "contact Us",
              }),
            ],
          }),
        ],
      }),
    }),
  });
function XS() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx("div", { children: d.jsx(YS, {}) }),
      d.jsx("div", { children: d.jsx(q1, {}) }),
      d.jsx("div", { children: d.jsx(ex, {}) }),
    ],
  });
}
function KS(n) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0],
    a = document.createElement("style");
  (a.type = "text/css"),
    i.firstChild ? i.insertBefore(a, i.firstChild) : i.appendChild(a),
    a.styleSheet
      ? (a.styleSheet.cssText = n)
      : a.appendChild(document.createTextNode(n));
}
KS(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var Ac = (n) => typeof n == "number" && !isNaN(n),
  zi = (n) => typeof n == "string",
  fv = (n) => typeof n == "function",
  GS = (n) => zi(n) || Ac(n),
  QS = (n) => L.isValidElement(n) || zi(n) || fv(n) || Ac(n),
  JS = 1,
  mv = () => `${JS++}`,
  Xt = new Map(),
  uc = [],
  Np = new Set(),
  hv = () => Xt.size > 0,
  ZS = (n, { containerId: i }) => {
    var a;
    return (a = Xt.get(i || 1)) == null ? void 0 : a.toasts.get(n);
  };
function e_(n, i) {
  var a;
  if (i) return !!((a = Xt.get(i)) != null && a.isToastActive(n));
  let o = !1;
  return (
    Xt.forEach((l) => {
      l.isToastActive(n) && (o = !0);
    }),
    o
  );
}
function t_(n) {
  if (!hv()) {
    uc = uc.filter((i) => n != null && i.options.toastId !== n);
    return;
  }
  if (n == null || GS(n))
    Xt.forEach((i) => {
      i.removeToast(n);
    });
  else if (n && ("containerId" in n || "id" in n)) {
    let i = Xt.get(n.containerId);
    i
      ? i.removeToast(n.id)
      : Xt.forEach((a) => {
          a.removeToast(n.id);
        });
  }
}
var n_ = (n = {}) => {
  Xt.forEach((i) => {
    i.props.limit &&
      (!n.containerId || i.id === n.containerId) &&
      i.clearQueue();
  });
};
function r_(n, i) {
  QS(n) &&
    (hv() || uc.push({ content: n, options: i }),
    Xt.forEach((a) => {
      a.buildToast(n, i);
    }));
}
function pv(n, i) {
  Xt.forEach((a) => {
    (i == null ||
      !(i != null && i.containerId) ||
      (i == null ? void 0 : i.containerId) === a.id) &&
      a.toggle(n, i == null ? void 0 : i.id);
  });
}
function i_(n) {
  return (
    Np.add(n),
    () => {
      Np.delete(n);
    }
  );
}
function a_(n) {
  return n && (zi(n.toastId) || Ac(n.toastId)) ? n.toastId : mv();
}
function Yi(n, i) {
  return r_(n, i), i.toastId;
}
function Zo(n, i) {
  return { ...i, type: (i && i.type) || n, toastId: a_(i) };
}
function es(n) {
  return (i, a) => Yi(i, Zo(n, a));
}
function Ne(n, i) {
  return Yi(n, Zo("default", i));
}
Ne.loading = (n, i) =>
  Yi(
    n,
    Zo("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...i,
    })
  );
function o_(n, { pending: i, error: a, success: o }, l) {
  let c;
  i && (c = zi(i) ? Ne.loading(i, l) : Ne.loading(i.render, { ...l, ...i }));
  let m = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    h = (g, w, P) => {
      if (w == null) {
        Ne.dismiss(c);
        return;
      }
      let y = { type: g, ...m, ...l, data: P },
        j = zi(w) ? { render: w } : w;
      return c ? Ne.update(c, { ...y, ...j }) : Ne(j.render, { ...y, ...j }), P;
    },
    p = fv(n) ? n() : n;
  return p.then((g) => h("success", o, g)).catch((g) => h("error", a, g)), p;
}
Ne.promise = o_;
Ne.success = es("success");
Ne.info = es("info");
Ne.error = es("error");
Ne.warning = es("warning");
Ne.warn = Ne.warning;
Ne.dark = (n, i) => Yi(n, Zo("default", { theme: "dark", ...i }));
function s_(n) {
  t_(n);
}
Ne.dismiss = s_;
Ne.clearWaitingQueue = n_;
Ne.isActive = e_;
Ne.update = (n, i = {}) => {
  let a = ZS(n, i);
  if (a) {
    let { props: o, content: l } = a,
      c = { delay: 100, ...o, ...i, toastId: i.toastId || n, updateId: mv() };
    c.toastId !== n && (c.staleId = n);
    let m = c.render || l;
    delete c.render, Yi(m, c);
  }
};
Ne.done = (n) => {
  Ne.update(n, { progress: 1 });
};
Ne.onChange = i_;
Ne.play = (n) => pv(!0, n);
Ne.pause = (n) => pv(!1, n);
const l_ = () => {
    const n = Mo(),
      [i, a] = L.useState({ email: "", password: "" }),
      [o, l] = L.useState(!1),
      c = (h) => {
        const { name: p, value: g } = h.target;
        a({ ...i, [p]: g });
      },
      m = async (h) => {
        var p, g;
        h.preventDefault(), l(!0);
        try {
          const w = await we.post("http://localhost:5000/api/auth/login", i),
            { token: P, message: y } = w.data;
          localStorage.setItem("token", P),
            Ne.success(y || "Login successful! 🎉"),
            n("/blog");
        } catch (w) {
          const P =
            ((g = (p = w.response) == null ? void 0 : p.data) == null
              ? void 0
              : g.message) || "Invalid email or password.";
          Ne.error(P);
        } finally {
          l(!1);
        }
      };
    return d.jsx("div", {
      className:
        "flex justify-center pt-36 items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500",
      children: d.jsxs("div", {
        className: "bg-white p-8 rounded-lg shadow-lg max-w-sm w-full",
        children: [
          d.jsx("h2", {
            className: "text-2xl font-bold text-gray-700 mb-6 text-center",
            children: "Login to Your Account",
          }),
          d.jsxs("form", {
            onSubmit: m,
            children: [
              d.jsxs("div", {
                className: "mb-4",
                children: [
                  d.jsx("label", {
                    className: "block text-gray-600 mb-2",
                    children: "Email",
                  }),
                  d.jsx("input", {
                    className:
                      "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
                    type: "email",
                    name: "email",
                    placeholder: "Enter your email",
                    value: i.email,
                    onChange: c,
                    autoComplete: "email",
                    required: !0,
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "mb-4",
                children: [
                  d.jsx("label", {
                    className: "block text-gray-600 mb-2",
                    children: "Password",
                  }),
                  d.jsx("input", {
                    className:
                      "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
                    type: "password",
                    name: "password",
                    placeholder: "Enter your password",
                    value: i.password,
                    onChange: c,
                    autoComplete: "current-password",
                    required: !0,
                  }),
                ],
              }),
              d.jsx("button", {
                type: "submit",
                className: `w-full py-2 mt-4 rounded-lg ${
                  o
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white font-bold`,
                disabled: o,
                children: o ? "Logging in..." : "Login",
              }),
            ],
          }),
          d.jsxs("p", {
            className: "text-sm text-gray-500 mt-4 text-center",
            children: [
              "Don't have an account? ",
              d.jsx("a", {
                href: "/register",
                className: "text-blue-500 hover:underline",
                children: "Sign Up",
              }),
            ],
          }),
        ],
      }),
    });
  },
  u_ = () => {
    const [n, i] = L.useState([]),
      [a, o] = L.useState(""),
      [l, c] = L.useState(""),
      [m, h] = L.useState(""),
      [p, g] = L.useState(""),
      [w, P] = L.useState(""),
      [y, j] = L.useState("");
    L.useEffect(() => {
      fetch("http://localhost:5000/testimonials")
        .then((_) => {
          if (!_.ok) throw new Error("Network response was not ok");
          return _.json();
        })
        .then((_) => i(_))
        .catch(() => P("Failed to fetch testimonials"));
    }, []);
    const b = () => {
        if (!a || !l || !m || !p) {
          P("Please fill all fields");
          return;
        }
        const _ = { image: a, text: l, name: m, location: p };
        we.post("http://localhost:5000/Testimonial", _)
          .then(() => {
            j("Testimonial added successfully"),
              i([...n, _]),
              o(""),
              c(""),
              h(""),
              g("");
          })
          .catch(() => P("Failed to add testimonial"));
      },
      T = (_) => {
        we.delete(`http://localhost:5000/Testimonial/${_}`)
          .then(() => {
            j("Testimonial deleted successfully"),
              i(n.filter((A) => A.id !== _));
          })
          .catch(() => P("Failed to delete testimonial"));
      };
    return d.jsxs("div", {
      className: "pt-48",
      children: [
        d.jsx("h1", {
          className: "text-2xl font-bold mb-4",
          children: "Admin Panel",
        }),
        d.jsxs("div", {
          className: "mb-6",
          children: [
            d.jsx("input", {
              type: "text",
              value: a,
              onChange: (_) => o(_.target.value),
              placeholder: "Image URL",
              className: "border p-2 mr-2",
            }),
            d.jsx("input", {
              type: "text",
              value: l,
              onChange: (_) => c(_.target.value),
              placeholder: "Testimonial Text",
              className: "border p-2 mr-2",
            }),
            d.jsx("input", {
              type: "text",
              value: m,
              onChange: (_) => h(_.target.value),
              placeholder: "Name",
              className: "border p-2 mr-2",
            }),
            d.jsx("input", {
              type: "text",
              value: p,
              onChange: (_) => g(_.target.value),
              placeholder: "Location",
              className: "border p-2 mr-2",
            }),
            d.jsx("button", {
              onClick: b,
              className: "bg-blue-500 text-white px-4 py-2",
              children: "Add Testimonial",
            }),
          ],
        }),
        w && d.jsx("p", { className: "text-red-500", children: w }),
        y && d.jsx("p", { className: "text-green-500", children: y }),
        d.jsx("div", {
          className: "grid grid-cols-3 gap-4",
          children: n.map((_) =>
            d.jsxs(
              "div",
              {
                className: "border p-4 flex flex-col items-center",
                children: [
                  d.jsx("img", {
                    src: _.image,
                    alt: _.name,
                    className: "h-24 w-24 rounded-full mb-2",
                  }),
                  d.jsx("p", { children: _.text }),
                  d.jsx("h3", { className: "font-bold", children: _.name }),
                  d.jsx("p", {
                    className: "text-gray-500",
                    children: _.location,
                  }),
                  d.jsx("button", {
                    onClick: () => T(_.id),
                    className: "bg-red-500 text-white px-4 py-2 mt-2",
                    children: "Delete",
                  }),
                ],
              },
              _.id
            )
          ),
        }),
      ],
    });
  };
function c_() {
  return d.jsxs("div", { children: ["  ", d.jsx(u_, {}), "   "] });
}
const d_ = () => {
    const [n, i] = L.useState(""),
      [a, o] = L.useState([]),
      [l, c] = L.useState(""),
      [m, h] = L.useState(""),
      [p, g] = L.useState(null);
    L.useEffect(() => {
      we.get("http://localhost:5000/Gallery")
        .then((y) => {
          o(y.data);
        })
        .catch((y) => {
          c("Error fetching images");
        });
    }, []);
    const w = () => {
        if (!n) {
          c("Please enter a valid image URL");
          return;
        }
        we.post("http://localhost:5000/Gallery", { image: n })
          .then((y) => {
            h("Image added successfully!"), i(""), o([...a, { image: n }]);
          })
          .catch((y) => {
            c("Failed to add image");
          });
      },
      P = (y) => {
        p === y
          ? (we
              .delete(`http://localhost:5000/Gallery/${y}`)
              .then((j) => {
                h("Image deleted successfully!"),
                  o(a.filter((b) => b.id !== y));
              })
              .catch((j) => {
                c("Failed to delete image");
              }),
            g(null))
          : g(y);
      };
    return d.jsx(d.Fragment, {
      children: d.jsx("div", {
        className: "pt-48",
        children: d.jsxs("div", {
          style: { padding: "20px" },
          children: [
            d.jsx("h1", { children: "Admin Panel" }),
            d.jsxs("div", {
              children: [
                d.jsx("input", {
                  type: "text",
                  value: n,
                  onChange: (y) => i(y.target.value),
                  placeholder: "Enter Image URL",
                  className:
                    "p-2 w-96 border-2 border-blue-500 rounded-lg bordr-2 border-sky-500",
                }),
                d.jsx("button", {
                  onClick: w,
                  className:
                    "text-lg mr-9 ml-5 mt-2 rounded-xl hover:bg-green-500 hover:rounded-xl bg-blue-500 p-2  text-white font-semibold",
                  children: "Add Image",
                }),
              ],
            }),
            l && d.jsx("p", { style: { color: "red" }, children: l }),
            m && d.jsx("p", { style: { color: "green" }, children: m }),
            d.jsx("h1", {
              className: "text-2xl font-bold text-center text-red-500 pt-10",
              children: "Admin Panel",
            }),
            d.jsx("h2", {
              className:
                "text-2xl font-bold text-center text-sky-400 pb-10 pt-10",
              children: "Image Gallery",
            }),
            d.jsx("div", {
              className: "flex flex-wrap w-[100%] gap-20 ml-10",
              children: a.map((y, j) =>
                d.jsxs(
                  "div",
                  {
                    className:
                      "h-[55vh]  border-2 border-blue-500   justify-center w-[25.9%] mb-20",
                    children: [
                      d.jsx("img", {
                        src: y.image,
                        alt: `Gallery Image ${j}`,
                        style: { objectFit: "cover" },
                        className: "h-[100%] w-[100%] ",
                      }),
                      p === y.id
                        ? d.jsxs("div", {
                            children: [
                              d.jsx("button", {
                                onClick: () => P(y.id),
                                className:
                                  "text-lg mr-9 ml-5 mt-2 rounded-xl hover:bg-red-500 hover:rounded-xl bg-green-500 p-2  text-white font-semibold",
                                children: "Confirm Delete",
                              }),
                              d.jsx("button", {
                                onClick: () => g(null),
                                className:
                                  "text-lg mr-9 m-2 rounded-xl hover:bg-red-500 text-white font-semibold hover:rounded-xl bg-green-500 p-2 ",
                                children: " Cancel ",
                              }),
                            ],
                          })
                        : d.jsx("button", {
                            onClick: () => P(y.id),
                            className:
                              "hover:bg-red-500 rounded-[25vh] border-2 border-white text-lg text-bold transition duration-300 w-60 p-2 mt-4  ml-8 relative hover:text-white hover:font-semibold",
                            children: "Delete",
                          }),
                    ],
                  },
                  j
                )
              ),
            }),
          ],
        }),
      }),
    });
  },
  f_ = () => {
    const [n, i] = L.useState([]),
      [a, o] = L.useState({ name: "", post: "", text: "", image: "" }),
      [l, c] = L.useState(null),
      [m, h] = L.useState(!1),
      [p, g] = L.useState("");
    L.useEffect(() => {
      w();
    }, []);
    const w = async () => {
        try {
          const _ = await we.get("http://localhost:5000/teams");
          i(_.data);
        } catch (_) {
          console.error("Error fetching teams:", _);
        }
      },
      P = (_) => {
        const { name: A, value: R } = _.target;
        o((x) => ({ ...x, [A]: R }));
      },
      y = async (_) => {
        _.preventDefault();
        try {
          const A = await we.post("http://localhost:5000/teams", a);
          i((R) => [...R, A.data]),
            o({ name: "", post: "", text: "", image: "" }),
            g("Team successfully added!"),
            setTimeout(() => g(""), 3e3);
        } catch (A) {
          console.error("Error adding team:", A);
        }
      },
      j = (_) => {
        c(_), h(!0);
      },
      b = async () => {
        try {
          await we.delete(`http://localhost:5000/teams/${l.id}`),
            i((_) => _.filter((A) => A.id !== l.id)),
            h(!1),
            c(null),
            g("Team successfully deleted!"),
            setTimeout(() => g(""), 3e3);
        } catch (_) {
          console.error("Error deleting team:", _);
        }
      },
      T = () => {
        h(!1), c(null);
      };
    return d.jsx(d.Fragment, {
      children: d.jsxs("div", {
        className: "p-48 ",
        children: [
          d.jsx("h1", {
            className: "text-3xl font-bold mb-5",
            children: "Admin Panel - Manage Teams",
          }),
          p && d.jsx("p", { className: "text-green-500 mb-4", children: p }),
          d.jsxs("form", {
            onSubmit: y,
            className: "mb-10 bg-white p-6 ml-[30%] rounded shadow-md w-96",
            children: [
              d.jsx("h2", {
                className: "text-xl font-bold mb-4",
                children: "Add New Team",
              }),
              d.jsxs("div", {
                className: "mb-4",
                children: [
                  d.jsx("label", {
                    className: "block font-semibold mb-1",
                    children: "Name",
                  }),
                  d.jsx("input", {
                    type: "text",
                    name: "name",
                    value: a.name,
                    onChange: P,
                    className:
                      "w-full border border-gray-300 rounded px-3 py-2",
                    required: !0,
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "mb-4",
                children: [
                  d.jsx("label", {
                    className: "block font-semibold mb-1",
                    children: "Post",
                  }),
                  d.jsx("input", {
                    type: "text",
                    name: "post",
                    value: a.post,
                    onChange: P,
                    className:
                      "w-full border border-gray-300 rounded px-3 py-2",
                    required: !0,
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "mb-4",
                children: [
                  d.jsx("label", {
                    className: "block font-semibold mb-1",
                    children: "Text",
                  }),
                  d.jsx("textarea", {
                    name: "text",
                    value: a.text,
                    onChange: P,
                    className:
                      "w-full border border-gray-300 rounded px-3 py-2",
                    required: !0,
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "mb-4",
                children: [
                  d.jsx("label", {
                    className: "block font-semibold mb-1",
                    children: "Image URL",
                  }),
                  d.jsx("input", {
                    type: "text",
                    name: "image",
                    value: a.image,
                    onChange: P,
                    className:
                      "w-full border border-gray-300 rounded px-3 py-2",
                    required: !0,
                  }),
                ],
              }),
              d.jsx("button", {
                type: "submit",
                className:
                  "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
                children: "Add Team",
              }),
            ],
          }),
          d.jsx("div", {
            className: "grid grid-cols-3 gap-5",
            children: n.map((_) =>
              d.jsxs(
                "div",
                {
                  className:
                    "border rounded-lg p-5 shadow-lg bg-white flex flex-col items-center",
                  children: [
                    d.jsx("img", {
                      src: _.image,
                      alt: _.name,
                      className: "h-32 w-32 rounded-full mb-4",
                    }),
                    d.jsx("h3", {
                      className: "text-xl font-bold",
                      children: _.name,
                    }),
                    d.jsx("p", {
                      className: "text-gray-500",
                      children: _.post,
                    }),
                    d.jsx("p", { className: "text-sm mt-2", children: _.text }),
                    d.jsx("button", {
                      onClick: () => j(_),
                      className:
                        "mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600",
                      children: "Delete",
                    }),
                  ],
                },
                _.id
              )
            ),
          }),
          m &&
            d.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",
              children: d.jsxs("div", {
                className: "bg-white p-6 rounded-lg shadow-lg w-96",
                children: [
                  d.jsxs("h3", {
                    className: "text-lg font-bold mb-4",
                    children: [
                      'Are you sure you want to delete "',
                      l == null ? void 0 : l.name,
                      '"?',
                    ],
                  }),
                  d.jsxs("div", {
                    className: "flex justify-end gap-4",
                    children: [
                      d.jsx("button", {
                        onClick: b,
                        className:
                          "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600",
                        children: "Confirm Delete",
                      }),
                      d.jsx("button", {
                        onClick: T,
                        className:
                          "bg-gray-300 px-4 py-2 rounded hover:bg-gray-400",
                        children: "Cancel",
                      }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      }),
    });
  },
  m_ = () => {
    const [n, i] = L.useState([]),
      [a, o] = L.useState({ image: "", "wedding-type": "", text: "" }),
      [l, c] = L.useState(""),
      [m, h] = L.useState(""),
      [p, g] = L.useState(null);
    L.useEffect(() => {
      we.get("http://localhost:5000/services")
        .then((y) => i(y.data))
        .catch(() => c("Error fetching services."));
    }, []);
    const w = () => {
        if (!a.image || !a["wedding-type"] || !a.text) {
          c("All fields are required.");
          return;
        }
        we.post("http://localhost:5000/services", { ...a })
          .then((y) => {
            i([...n, y.data]),
              o({ image: "", "wedding-type": "", text: "" }),
              h("Service added successfully!"),
              c("");
          })
          .catch(() => c("Failed to add service."));
      },
      P = (y) => {
        we.delete(`http://localhost:5000/services/${y}`)
          .then(() => {
            i(n.filter((j) => j.id !== y)),
              h("Service deleted successfully!"),
              c(""),
              g(null);
          })
          .catch(() => c("Failed to delete service."));
      };
    return d.jsxs("div", {
      className: "pt-48",
      children: [
        d.jsx("h1", {
          className: "text-2xl font-bold mb-4",
          children: "Admin Panel",
        }),
        l && d.jsx("p", { className: "text-red-500", children: l }),
        m && d.jsx("p", { className: "text-green-500", children: m }),
        d.jsxs("div", {
          className: "mb-6",
          children: [
            d.jsx("h2", {
              className: "text-xl font-semibold mb-2",
              children: "Add New Service",
            }),
            d.jsx("input", {
              type: "text",
              placeholder: "Image URL",
              value: a.image,
              onChange: (y) => o({ ...a, image: y.target.value }),
              className: "border p-2 mb-2 w-full",
            }),
            d.jsx("input", {
              type: "text",
              placeholder: "Wedding Type",
              value: a["wedding-type"],
              onChange: (y) => o({ ...a, "wedding-type": y.target.value }),
              className: "border p-2 mb-2 w-full",
            }),
            d.jsx("textarea", {
              placeholder: "Description",
              value: a.text,
              onChange: (y) => o({ ...a, text: y.target.value }),
              className: "border p-2 mb-2 w-full",
            }),
            d.jsx("button", {
              onClick: w,
              className: "bg-blue-500 text-white px-4 py-2 rounded",
              children: "Add Service",
            }),
          ],
        }),
        d.jsxs("div", {
          children: [
            d.jsx("h2", {
              className: "text-xl font-semibold mb-2",
              children: "Existing Services",
            }),
            d.jsx("div", {
              className: "grid grid-cols-3 gap-4",
              children: n.map((y) =>
                d.jsxs(
                  "div",
                  {
                    className: "border p-4 flex flex-col items-center",
                    children: [
                      d.jsx("img", {
                        src: y.image,
                        alt: y["wedding-type"],
                        className: "w-24 h-24 object-cover mb-2",
                      }),
                      d.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: y["wedding-type"],
                      }),
                      d.jsx("p", {
                        className: "text-sm text-gray-500 mb-2",
                        children: y.text,
                      }),
                      p === y.id
                        ? d.jsxs("div", {
                            className: "flex gap-2 mt-2",
                            children: [
                              d.jsx("button", {
                                onClick: () => P(y.id),
                                className:
                                  "bg-red-500 text-white px-3 py-1 rounded",
                                children: "Confirm",
                              }),
                              d.jsx("button", {
                                onClick: () => g(null),
                                className:
                                  "bg-gray-500 text-white px-3 py-1 rounded",
                                children: "Cancel",
                              }),
                            ],
                          })
                        : d.jsx("button", {
                            onClick: () => g(y.id),
                            className:
                              "bg-red-500 text-white px-3 py-1 rounded",
                            children: "Delete",
                          }),
                    ],
                  },
                  y.id
                )
              ),
            }),
          ],
        }),
      ],
    });
  };
function h_() {
  return d.jsx(d.Fragment, {
    children: d.jsxs("div", {
      className: "pt-[24vh] gap-20 mb-40 ",
      children: [
        d.jsx("div", {
          className:
            " border-2  text-lg h-12   font-bold   text-center bg-gray-500  border-green-500 ",
          children: d.jsxs("ul", {
            className: "flex  bg-blue",
            children: [
              d.jsx("li", {
                className:
                  "bg-green-500 p-2  hover:bg-blue-500 hover:border-2 hover:border-red-500",
                children: d.jsx(Xe, { to: "gallery", children: "Gallery" }),
              }),
              d.jsx("li", {
                className:
                  " bg-green-500 p-2 hover:bg-blue-500 hover:border-2  hover:border-red-500",
                children: d.jsx(Xe, { to: "homeTeam", children: "Team" }),
              }),
              d.jsx("li", {
                className:
                  " bg-green-500 p-2 hover:bg-blue-500 hover:border-2  hover:border-red-500",
                children: d.jsx(Xe, { to: "Service", children: "Service" }),
              }),
              d.jsx("li", {
                className:
                  " bg-green-500 p-2 hover:bg-blue-500 hover:border-2  hover:border-red-500",
                children: d.jsx(Xe, {
                  to: "Testimonial",
                  children: "Testimonial",
                }),
              }),
              d.jsx("li", {
                className:
                  " bg-green-500 p-2 hover:bg-blue-500 hover:border-2  hover:border-red-500",
                children: d.jsx(Xe, { to: "userdata", children: "Userdata" }),
              }),
            ],
          }),
        }),
        d.jsx("div", {
          className: "border-2 border-green-500  bg-gray-500 w-[100%] ",
          children: d.jsx(f1, {}),
        }),
      ],
    }),
  });
}
const p_ = () => {
    const [n, i] = L.useState([]);
    return (
      L.useEffect(() => {
        fetch("http://localhost:5000/users")
          .then((a) => {
            if (!a.ok) throw new Error(`HTTP error! Status: ${a.status}`);
            return a.json();
          })
          .then((a) => {
            console.log("Fetched data:", a), i(a);
          })
          .catch((a) => console.error("Fetch error:", a));
      }, []),
      d.jsxs("div", {
        className: "pt-48 ml-10",
        children: [
          d.jsx("h1", {
            className: "text-3xl font-bold mb-6",
            children: "User Submissions",
          }),
          n.length === 0
            ? d.jsx("p", { children: "No users have submitted data yet." })
            : d.jsx("div", {
                className: "grid grid-cols-3 gap-4",
                children: n.map((a, o) =>
                  d.jsxs(
                    "div",
                    {
                      className: "border p-4 rounded shadow",
                      children: [
                        d.jsx("h2", {
                          className: "font-semibold text-xl",
                          children: a.name,
                        }),
                        d.jsxs("p", { children: ["Email: ", a.email] }),
                        d.jsxs("p", { children: ["Mobile: ", a.mobile] }),
                        d.jsxs("p", { children: ["City: ", a.city] }),
                        d.jsxs("p", { children: ["Message: ", a.message] }),
                      ],
                    },
                    o
                  )
                ),
              }),
        ],
      })
    );
  },
  g_ = () => {
    const n = Mo(),
      [i, a] = L.useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        city: "",
        message: "",
      }),
      [o, l] = L.useState({}),
      c = (p) => {
        const { name: g, value: w } = p.target;
        a({ ...i, [g]: w }), l({ ...o, [g]: "" });
      },
      m = () => {
        const p = {};
        return (
          i.name.trim()
            ? i.name.length < 3 &&
              (p.name = "Name must be at least 3 characters.")
            : (p.name = "Name is required."),
          i.email.trim()
            ? /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(i.email) ||
              (p.email = "Enter a valid email address.")
            : (p.email = "Email is required."),
          i.password.trim()
            ? i.password.length < 6 &&
              (p.password = "Password must be at least 6 characters.")
            : (p.password = "Password is required."),
          i.phone.trim()
            ? /^\d{10}$/.test(i.phone) ||
              (p.phone = "Enter a valid 10-digit phone number.")
            : (p.phone = "Phone number is required."),
          i.city.trim() || (p.city = "City is required."),
          i.message.trim() || (p.message = "Message is required."),
          p
        );
      },
      h = async (p) => {
        p.preventDefault();
        const g = m();
        if (Object.keys(g).length > 0) {
          l(g);
          return;
        }
        try {
          await we.post("http://localhost:5000/api/auth/register", i),
            Ne.success("Registration successful!"),
            n("/login");
        } catch {
          Ne.error("Error during registration. Please try again.");
        }
      };
    return d.jsx("div", {
      className: "pt-48 pb-10",
      children: d.jsxs("div", {
        className: "max-w-md mx-auto bg-white p-8 rounded-lg shadow-md",
        children: [
          d.jsx("h2", {
            className: "text-3xl font-bold text-center text-gray-800 mb-6",
            children: "Register",
          }),
          d.jsxs("form", {
            onSubmit: h,
            children: [
              d.jsxs("div", {
                className: "mb-4",
                children: [
                  d.jsx("input", {
                    type: "text",
                    name: "name",
                    placeholder: "Name",
                    value: i.name,
                    onChange: c,
                    className:
                      "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                  }),
                  o.name &&
                    d.jsx("small", {
                      className: "text-red-500 text-sm",
                      children: o.name,
                    }),
                ],
              }),
              d.jsxs("div", {
                className: "mb-4",
                children: [
                  d.jsx("input", {
                    type: "email",
                    name: "email",
                    placeholder: "Email",
                    value: i.email,
                    onChange: c,
                    className:
                      "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                  }),
                  o.email &&
                    d.jsx("small", {
                      className: "text-red-500 text-sm",
                      children: o.email,
                    }),
                ],
              }),
              d.jsxs("div", {
                className: "mb-4",
                children: [
                  d.jsx("input", {
                    type: "password",
                    name: "password",
                    placeholder: "Password",
                    value: i.password,
                    onChange: c,
                    className:
                      "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                  }),
                  o.password &&
                    d.jsx("small", {
                      className: "text-red-500 text-sm",
                      children: o.password,
                    }),
                ],
              }),
              d.jsxs("div", {
                className: "mb-4",
                children: [
                  d.jsx("input", {
                    type: "text",
                    name: "phone",
                    placeholder: "Phone",
                    value: i.phone,
                    onChange: c,
                    className:
                      "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                  }),
                  o.phone &&
                    d.jsx("small", {
                      className: "text-red-500 text-sm",
                      children: o.phone,
                    }),
                ],
              }),
              d.jsxs("div", {
                className: "mb-4",
                children: [
                  d.jsx("input", {
                    type: "text",
                    name: "city",
                    placeholder: "City",
                    value: i.city,
                    onChange: c,
                    className:
                      "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                  }),
                  o.city &&
                    d.jsx("small", {
                      className: "text-red-500 text-sm",
                      children: o.city,
                    }),
                ],
              }),
              d.jsxs("div", {
                className: "mb-6",
                children: [
                  d.jsx("textarea", {
                    name: "message",
                    placeholder: "Message",
                    value: i.message,
                    onChange: c,
                    className:
                      "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                  }),
                  o.message &&
                    d.jsx("small", {
                      className: "text-red-500 text-sm",
                      children: o.message,
                    }),
                ],
              }),
              d.jsx("button", {
                type: "submit",
                className:
                  "w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600",
                children: "Register",
              }),
            ],
          }),
        ],
      }),
    });
  };
function v_({ children: n, isAuthenticated: i }) {
  return i ? n : d.jsx(d1, { to: "/login" });
}
function y_() {
  const [n, i] = L.useState(!1);
  L.useEffect(() => {
    const l = localStorage.getItem("token");
    i(!!l);
  }, []);
  const a = () => i(!0),
    o = () => i(!1);
  return d.jsxs(d.Fragment, {
    children: [
      d.jsxs("div", {
        className: "mb-0",
        children: [
          d.jsx(Xp, {}),
          d.jsx("div", {
            className: "",
            children: d.jsxs($m, {
              children: [
                d.jsx(tt, { path: "/", element: d.jsx(qS, {}) }),
                d.jsx(tt, { path: "/about-us", element: d.jsx(mS, {}) }),
                d.jsx(tt, { path: "/services", element: d.jsx(oS, {}) }),
                d.jsx(tt, { path: "/blog", element: d.jsx(h_, {}) }),
                d.jsx(tt, { path: "/register", element: d.jsx(g_, {}) }),
                d.jsx(tt, {
                  path: "/login",
                  element: d.jsx(l_, {
                    onLogin: a,
                    isAuthenticated: n,
                    onLogout: o,
                  }),
                }),
                d.jsx(tt, { path: "/gallery", element: d.jsx(Aw, {}) }),
                d.jsx(tt, { path: "/testimonials", element: d.jsx(iS, {}) }),
                d.jsx(tt, { path: "/contacts", element: d.jsx(XS, {}) }),
                d.jsx(tt, {
                  path: "/blog/*",
                  element: d.jsx(v_, {
                    isAuthenticated: n,
                    children: d.jsxs($m, {
                      children: [
                        d.jsx(tt, { path: "gallery", element: d.jsx(d_, {}) }),
                        d.jsx(tt, { path: "homeTeam", element: d.jsx(f_, {}) }),
                        d.jsx(tt, { path: "service", element: d.jsx(m_, {}) }),
                        d.jsx(tt, {
                          path: "testimonial",
                          element: d.jsx(c_, {}),
                        }),
                        d.jsx(tt, { path: "userdata", element: d.jsx(p_, {}) }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      d.jsx(rS, {}),
    ],
  });
}
wy.createRoot(document.getElementById("root")).render(
  d.jsx(M1, {
    children: d.jsxs(L.StrictMode, {
      children: [d.jsx(Xp, {}), d.jsx(y_, {})],
    }),
  })
);
