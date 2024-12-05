var Od = Object.defineProperty;
var $d = (i, s, a) =>
  s in i
    ? Od(i, s, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (i[s] = a);
var Yl = (i, s, a) => $d(i, typeof s != "symbol" ? s + "" : s, a);
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) p(f);
  new MutationObserver((f) => {
    for (const m of f)
      if (m.type === "childList")
        for (const E of m.addedNodes)
          E.tagName === "LINK" && E.rel === "modulepreload" && p(E);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(f) {
    const m = {};
    return (
      f.integrity && (m.integrity = f.integrity),
      f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (m.credentials = "omit")
          : (m.credentials = "same-origin"),
      m
    );
  }
  function p(f) {
    if (f.ep) return;
    f.ep = !0;
    const m = a(f);
    fetch(f.href, m);
  }
})();
function Dd(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var Xi = { exports: {} },
  zr = {},
  Ji = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lc;
function Fd() {
  if (lc) return re;
  lc = 1;
  var i = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    p = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    E = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    x = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    O = Symbol.iterator;
  function C(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (O && v[O]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var F = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    D = {};
  function I(v, R, te) {
    (this.props = v),
      (this.context = R),
      (this.refs = D),
      (this.updater = te || F);
  }
  (I.prototype.isReactComponent = {}),
    (I.prototype.setState = function (v, R) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, v, R, "setState");
    }),
    (I.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function $() {}
  $.prototype = I.prototype;
  function U(v, R, te) {
    (this.props = v),
      (this.context = R),
      (this.refs = D),
      (this.updater = te || F);
  }
  var K = (U.prototype = new $());
  (K.constructor = U), T(K, I.prototype), (K.isPureReactComponent = !0);
  var ee = Array.isArray,
    ce = Object.prototype.hasOwnProperty,
    ge = { current: null },
    ue = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ce(v, R, te) {
    var ne,
      le = {},
      oe = null,
      de = null;
    if (R != null)
      for (ne in (R.ref !== void 0 && (de = R.ref),
      R.key !== void 0 && (oe = "" + R.key),
      R))
        ce.call(R, ne) && !ue.hasOwnProperty(ne) && (le[ne] = R[ne]);
    var se = arguments.length - 2;
    if (se === 1) le.children = te;
    else if (1 < se) {
      for (var he = Array(se), X = 0; X < se; X++) he[X] = arguments[X + 2];
      le.children = he;
    }
    if (v && v.defaultProps)
      for (ne in ((se = v.defaultProps), se))
        le[ne] === void 0 && (le[ne] = se[ne]);
    return {
      $$typeof: i,
      type: v,
      key: oe,
      ref: de,
      props: le,
      _owner: ge.current,
    };
  }
  function we(v, R) {
    return {
      $$typeof: i,
      type: v.type,
      key: R,
      ref: v.ref,
      props: v.props,
      _owner: v._owner,
    };
  }
  function Pe(v) {
    return typeof v == "object" && v !== null && v.$$typeof === i;
  }
  function be(v) {
    var R = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (te) {
        return R[te];
      })
    );
  }
  var ot = /\/+/g;
  function He(v, R) {
    return typeof v == "object" && v !== null && v.key != null
      ? be("" + v.key)
      : R.toString(36);
  }
  function Ve(v, R, te, ne, le) {
    var oe = typeof v;
    (oe === "undefined" || oe === "boolean") && (v = null);
    var de = !1;
    if (v === null) de = !0;
    else
      switch (oe) {
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case i:
            case s:
              de = !0;
          }
      }
    if (de)
      return (
        (de = v),
        (le = le(de)),
        (v = ne === "" ? "." + He(de, 0) : ne),
        ee(le)
          ? ((te = ""),
            v != null && (te = v.replace(ot, "$&/") + "/"),
            Ve(le, R, te, "", function (X) {
              return X;
            }))
          : le != null &&
            (Pe(le) &&
              (le = we(
                le,
                te +
                  (!le.key || (de && de.key === le.key)
                    ? ""
                    : ("" + le.key).replace(ot, "$&/") + "/") +
                  v,
              )),
            R.push(le)),
        1
      );
    if (((de = 0), (ne = ne === "" ? "." : ne + ":"), ee(v)))
      for (var se = 0; se < v.length; se++) {
        oe = v[se];
        var he = ne + He(oe, se);
        de += Ve(oe, R, te, he, le);
      }
    else if (((he = C(v)), typeof he == "function"))
      for (v = he.call(v), se = 0; !(oe = v.next()).done; )
        (oe = oe.value),
          (he = ne + He(oe, se++)),
          (de += Ve(oe, R, te, he, le));
    else if (oe === "object")
      throw (
        ((R = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (R === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : R) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return de;
  }
  function et(v, R, te) {
    if (v == null) return v;
    var ne = [],
      le = 0;
    return (
      Ve(v, ne, "", "", function (oe) {
        return R.call(te, oe, le++);
      }),
      ne
    );
  }
  function _e(v) {
    if (v._status === -1) {
      var R = v._result;
      (R = R()),
        R.then(
          function (te) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = te));
          },
          function (te) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = te));
          },
        ),
        v._status === -1 && ((v._status = 0), (v._result = R));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var fe = { current: null },
    M = { transition: null },
    Y = {
      ReactCurrentDispatcher: fe,
      ReactCurrentBatchConfig: M,
      ReactCurrentOwner: ge,
    };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (re.Children = {
      map: et,
      forEach: function (v, R, te) {
        et(
          v,
          function () {
            R.apply(this, arguments);
          },
          te,
        );
      },
      count: function (v) {
        var R = 0;
        return (
          et(v, function () {
            R++;
          }),
          R
        );
      },
      toArray: function (v) {
        return (
          et(v, function (R) {
            return R;
          }) || []
        );
      },
      only: function (v) {
        if (!Pe(v))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return v;
      },
    }),
    (re.Component = I),
    (re.Fragment = a),
    (re.Profiler = f),
    (re.PureComponent = U),
    (re.StrictMode = p),
    (re.Suspense = w),
    (re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (re.act = W),
    (re.cloneElement = function (v, R, te) {
      if (v == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            v +
            ".",
        );
      var ne = T({}, v.props),
        le = v.key,
        oe = v.ref,
        de = v._owner;
      if (R != null) {
        if (
          (R.ref !== void 0 && ((oe = R.ref), (de = ge.current)),
          R.key !== void 0 && (le = "" + R.key),
          v.type && v.type.defaultProps)
        )
          var se = v.type.defaultProps;
        for (he in R)
          ce.call(R, he) &&
            !ue.hasOwnProperty(he) &&
            (ne[he] = R[he] === void 0 && se !== void 0 ? se[he] : R[he]);
      }
      var he = arguments.length - 2;
      if (he === 1) ne.children = te;
      else if (1 < he) {
        se = Array(he);
        for (var X = 0; X < he; X++) se[X] = arguments[X + 2];
        ne.children = se;
      }
      return {
        $$typeof: i,
        type: v.type,
        key: le,
        ref: oe,
        props: ne,
        _owner: de,
      };
    }),
    (re.createContext = function (v) {
      return (
        (v = {
          $$typeof: E,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (v.Provider = { $$typeof: m, _context: v }),
        (v.Consumer = v)
      );
    }),
    (re.createElement = Ce),
    (re.createFactory = function (v) {
      var R = Ce.bind(null, v);
      return (R.type = v), R;
    }),
    (re.createRef = function () {
      return { current: null };
    }),
    (re.forwardRef = function (v) {
      return { $$typeof: _, render: v };
    }),
    (re.isValidElement = Pe),
    (re.lazy = function (v) {
      return { $$typeof: j, _payload: { _status: -1, _result: v }, _init: _e };
    }),
    (re.memo = function (v, R) {
      return { $$typeof: x, type: v, compare: R === void 0 ? null : R };
    }),
    (re.startTransition = function (v) {
      var R = M.transition;
      M.transition = {};
      try {
        v();
      } finally {
        M.transition = R;
      }
    }),
    (re.unstable_act = W),
    (re.useCallback = function (v, R) {
      return fe.current.useCallback(v, R);
    }),
    (re.useContext = function (v) {
      return fe.current.useContext(v);
    }),
    (re.useDebugValue = function () {}),
    (re.useDeferredValue = function (v) {
      return fe.current.useDeferredValue(v);
    }),
    (re.useEffect = function (v, R) {
      return fe.current.useEffect(v, R);
    }),
    (re.useId = function () {
      return fe.current.useId();
    }),
    (re.useImperativeHandle = function (v, R, te) {
      return fe.current.useImperativeHandle(v, R, te);
    }),
    (re.useInsertionEffect = function (v, R) {
      return fe.current.useInsertionEffect(v, R);
    }),
    (re.useLayoutEffect = function (v, R) {
      return fe.current.useLayoutEffect(v, R);
    }),
    (re.useMemo = function (v, R) {
      return fe.current.useMemo(v, R);
    }),
    (re.useReducer = function (v, R, te) {
      return fe.current.useReducer(v, R, te);
    }),
    (re.useRef = function (v) {
      return fe.current.useRef(v);
    }),
    (re.useState = function (v) {
      return fe.current.useState(v);
    }),
    (re.useSyncExternalStore = function (v, R, te) {
      return fe.current.useSyncExternalStore(v, R, te);
    }),
    (re.useTransition = function () {
      return fe.current.useTransition();
    }),
    (re.version = "18.3.1"),
    re
  );
}
var oc;
function ou() {
  return oc || ((oc = 1), (Ji.exports = Fd())), Ji.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ic;
function Md() {
  if (ic) return zr;
  ic = 1;
  var i = ou(),
    s = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    p = Object.prototype.hasOwnProperty,
    f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(_, w, x) {
    var j,
      O = {},
      C = null,
      F = null;
    x !== void 0 && (C = "" + x),
      w.key !== void 0 && (C = "" + w.key),
      w.ref !== void 0 && (F = w.ref);
    for (j in w) p.call(w, j) && !m.hasOwnProperty(j) && (O[j] = w[j]);
    if (_ && _.defaultProps)
      for (j in ((w = _.defaultProps), w)) O[j] === void 0 && (O[j] = w[j]);
    return {
      $$typeof: s,
      type: _,
      key: C,
      ref: F,
      props: O,
      _owner: f.current,
    };
  }
  return (zr.Fragment = a), (zr.jsx = E), (zr.jsxs = E), zr;
}
var uc;
function Ud() {
  return uc || ((uc = 1), (Xi.exports = Md())), Xi.exports;
}
var V = Ud(),
  k = ou();
const Ir = Dd(k);
var Gl = {},
  Zi = { exports: {} },
  qe = {},
  qi = { exports: {} },
  bi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ac;
function Ad() {
  return (
    ac ||
      ((ac = 1),
      (function (i) {
        function s(M, Y) {
          var W = M.length;
          M.push(Y);
          e: for (; 0 < W; ) {
            var v = (W - 1) >>> 1,
              R = M[v];
            if (0 < f(R, Y)) (M[v] = Y), (M[W] = R), (W = v);
            else break e;
          }
        }
        function a(M) {
          return M.length === 0 ? null : M[0];
        }
        function p(M) {
          if (M.length === 0) return null;
          var Y = M[0],
            W = M.pop();
          if (W !== Y) {
            M[0] = W;
            e: for (var v = 0, R = M.length, te = R >>> 1; v < te; ) {
              var ne = 2 * (v + 1) - 1,
                le = M[ne],
                oe = ne + 1,
                de = M[oe];
              if (0 > f(le, W))
                oe < R && 0 > f(de, le)
                  ? ((M[v] = de), (M[oe] = W), (v = oe))
                  : ((M[v] = le), (M[ne] = W), (v = ne));
              else if (oe < R && 0 > f(de, W))
                (M[v] = de), (M[oe] = W), (v = oe);
              else break e;
            }
          }
          return Y;
        }
        function f(M, Y) {
          var W = M.sortIndex - Y.sortIndex;
          return W !== 0 ? W : M.id - Y.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          i.unstable_now = function () {
            return m.now();
          };
        } else {
          var E = Date,
            _ = E.now();
          i.unstable_now = function () {
            return E.now() - _;
          };
        }
        var w = [],
          x = [],
          j = 1,
          O = null,
          C = 3,
          F = !1,
          T = !1,
          D = !1,
          I = typeof setTimeout == "function" ? setTimeout : null,
          $ = typeof clearTimeout == "function" ? clearTimeout : null,
          U = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function K(M) {
          for (var Y = a(x); Y !== null; ) {
            if (Y.callback === null) p(x);
            else if (Y.startTime <= M)
              p(x), (Y.sortIndex = Y.expirationTime), s(w, Y);
            else break;
            Y = a(x);
          }
        }
        function ee(M) {
          if (((D = !1), K(M), !T))
            if (a(w) !== null) (T = !0), _e(ce);
            else {
              var Y = a(x);
              Y !== null && fe(ee, Y.startTime - M);
            }
        }
        function ce(M, Y) {
          (T = !1), D && ((D = !1), $(Ce), (Ce = -1)), (F = !0);
          var W = C;
          try {
            for (
              K(Y), O = a(w);
              O !== null && (!(O.expirationTime > Y) || (M && !be()));

            ) {
              var v = O.callback;
              if (typeof v == "function") {
                (O.callback = null), (C = O.priorityLevel);
                var R = v(O.expirationTime <= Y);
                (Y = i.unstable_now()),
                  typeof R == "function"
                    ? (O.callback = R)
                    : O === a(w) && p(w),
                  K(Y);
              } else p(w);
              O = a(w);
            }
            if (O !== null) var te = !0;
            else {
              var ne = a(x);
              ne !== null && fe(ee, ne.startTime - Y), (te = !1);
            }
            return te;
          } finally {
            (O = null), (C = W), (F = !1);
          }
        }
        var ge = !1,
          ue = null,
          Ce = -1,
          we = 5,
          Pe = -1;
        function be() {
          return !(i.unstable_now() - Pe < we);
        }
        function ot() {
          if (ue !== null) {
            var M = i.unstable_now();
            Pe = M;
            var Y = !0;
            try {
              Y = ue(!0, M);
            } finally {
              Y ? He() : ((ge = !1), (ue = null));
            }
          } else ge = !1;
        }
        var He;
        if (typeof U == "function")
          He = function () {
            U(ot);
          };
        else if (typeof MessageChannel < "u") {
          var Ve = new MessageChannel(),
            et = Ve.port2;
          (Ve.port1.onmessage = ot),
            (He = function () {
              et.postMessage(null);
            });
        } else
          He = function () {
            I(ot, 0);
          };
        function _e(M) {
          (ue = M), ge || ((ge = !0), He());
        }
        function fe(M, Y) {
          Ce = I(function () {
            M(i.unstable_now());
          }, Y);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            T || F || ((T = !0), _e(ce));
          }),
          (i.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (we = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return a(w);
          }),
          (i.unstable_next = function (M) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = C;
            }
            var W = C;
            C = Y;
            try {
              return M();
            } finally {
              C = W;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (M, Y) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var W = C;
            C = M;
            try {
              return Y();
            } finally {
              C = W;
            }
          }),
          (i.unstable_scheduleCallback = function (M, Y, W) {
            var v = i.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? v + W : v))
                : (W = v),
              M)
            ) {
              case 1:
                var R = -1;
                break;
              case 2:
                R = 250;
                break;
              case 5:
                R = 1073741823;
                break;
              case 4:
                R = 1e4;
                break;
              default:
                R = 5e3;
            }
            return (
              (R = W + R),
              (M = {
                id: j++,
                callback: Y,
                priorityLevel: M,
                startTime: W,
                expirationTime: R,
                sortIndex: -1,
              }),
              W > v
                ? ((M.sortIndex = W),
                  s(x, M),
                  a(w) === null &&
                    M === a(x) &&
                    (D ? ($(Ce), (Ce = -1)) : (D = !0), fe(ee, W - v)))
                : ((M.sortIndex = R), s(w, M), T || F || ((T = !0), _e(ce))),
              M
            );
          }),
          (i.unstable_shouldYield = be),
          (i.unstable_wrapCallback = function (M) {
            var Y = C;
            return function () {
              var W = C;
              C = Y;
              try {
                return M.apply(this, arguments);
              } finally {
                C = W;
              }
            };
          });
      })(bi)),
    bi
  );
}
var sc;
function Wd() {
  return sc || ((sc = 1), (qi.exports = Ad())), qi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cc;
function Bd() {
  if (cc) return qe;
  cc = 1;
  var i = ou(),
    s = Wd();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var p = new Set(),
    f = {};
  function m(e, t) {
    E(e, t), E(e + "Capture", t);
  }
  function E(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) p.add(t[e]);
  }
  var _ = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    w = Object.prototype.hasOwnProperty,
    x =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    j = {},
    O = {};
  function C(e) {
    return w.call(O, e)
      ? !0
      : w.call(j, e)
        ? !1
        : x.test(e)
          ? (O[e] = !0)
          : ((j[e] = !0), !1);
  }
  function F(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, n, r) {
    if (t === null || typeof t > "u" || F(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
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
  function D(e, t, n, r, l, o, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u);
  }
  var I = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      I[e] = new D(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      I[t] = new D(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        I[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      I[e] = new D(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        I[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      I[e] = new D(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      I[e] = new D(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      I[e] = new D(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      I[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var $ = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace($, U);
      I[t] = new D(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace($, U);
        I[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace($, U);
      I[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      I[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (I.xlinkHref = new D(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      I[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function K(e, t, n, r) {
    var l = I.hasOwnProperty(t) ? I[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (T(t, n, l, r) && (n = null),
      r || l === null
        ? C(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ee = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ce = Symbol.for("react.element"),
    ge = Symbol.for("react.portal"),
    ue = Symbol.for("react.fragment"),
    Ce = Symbol.for("react.strict_mode"),
    we = Symbol.for("react.profiler"),
    Pe = Symbol.for("react.provider"),
    be = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    He = Symbol.for("react.suspense"),
    Ve = Symbol.for("react.suspense_list"),
    et = Symbol.for("react.memo"),
    _e = Symbol.for("react.lazy"),
    fe = Symbol.for("react.offscreen"),
    M = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (M && e[M]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var W = Object.assign,
    v;
  function R(e) {
    if (v === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        v = (t && t[1]) || "";
      }
    return (
      `
` +
      v +
      e
    );
  }
  var te = !1;
  function ne(e, t) {
    if (!e || te) return "";
    te = !0;
    var n = Error.prepareStackTrace;
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
          } catch (S) {
            var r = S;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (S) {
            r = S;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (S) {
          r = S;
        }
        e();
      }
    } catch (S) {
      if (S && r && typeof S.stack == "string") {
        for (
          var l = S.stack.split(`
`),
            o = r.stack.split(`
`),
            u = l.length - 1,
            c = o.length - 1;
          1 <= u && 0 <= c && l[u] !== o[c];

        )
          c--;
        for (; 1 <= u && 0 <= c; u--, c--)
          if (l[u] !== o[c]) {
            if (u !== 1 || c !== 1)
              do
                if ((u--, c--, 0 > c || l[u] !== o[c])) {
                  var d =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      d.includes("<anonymous>") &&
                      (d = d.replace("<anonymous>", e.displayName)),
                    d
                  );
                }
              while (1 <= u && 0 <= c);
            break;
          }
      }
    } finally {
      (te = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? R(e) : "";
  }
  function le(e) {
    switch (e.tag) {
      case 5:
        return R(e.type);
      case 16:
        return R("Lazy");
      case 13:
        return R("Suspense");
      case 19:
        return R("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ne(e.type, !1)), e;
      case 11:
        return (e = ne(e.type.render, !1)), e;
      case 1:
        return (e = ne(e.type, !0)), e;
      default:
        return "";
    }
  }
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ue:
        return "Fragment";
      case ge:
        return "Portal";
      case we:
        return "Profiler";
      case Ce:
        return "StrictMode";
      case He:
        return "Suspense";
      case Ve:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case be:
          return (e.displayName || "Context") + ".Consumer";
        case Pe:
          return (e._context.displayName || "Context") + ".Provider";
        case ot:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case et:
          return (
            (t = e.displayName || null), t !== null ? t : oe(e.type) || "Memo"
          );
        case _e:
          (t = e._payload), (e = e._init);
          try {
            return oe(e(t));
          } catch {}
      }
    return null;
  }
  function de(e) {
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
        return oe(t);
      case 8:
        return t === Ce ? "StrictMode" : "Mode";
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
  function se(e) {
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
  function he(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function X(e) {
    var t = he(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = "" + u), o.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function q(e) {
    e._valueTracker || (e._valueTracker = X(e));
  }
  function wt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = he(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ft(e) {
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
  function to(e, t) {
    var n = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function fu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = se(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function du(e, t) {
    (t = t.checked), t != null && K(e, "checked", t, !1);
  }
  function no(e, t) {
    du(e, t);
    var n = se(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? ro(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && ro(e, t.type, se(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function pu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function ro(e, t, n) {
    (t !== "number" || Ft(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Kn = Array.isArray;
  function wn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + se(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function lo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function hu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (Kn(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: se(n) };
  }
  function mu(e, t) {
    var n = se(t.value),
      r = se(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function vu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function yu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function oo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? yu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ur,
    gu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ur = Ur || document.createElement("div"),
            Ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ur.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Yn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gn = {
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
    Fc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Gn).forEach(function (e) {
    Fc.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gn[t] = Gn[e]);
    });
  });
  function wu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Gn.hasOwnProperty(e) && Gn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Su(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = wu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Mc = W(
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
    },
  );
  function io(e, t) {
    if (t) {
      if (Mc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function uo(e, t) {
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
  var ao = null;
  function so(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var co = null,
    Sn = null,
    kn = null;
  function ku(e) {
    if ((e = vr(e))) {
      if (typeof co != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = al(t)), co(e.stateNode, e.type, t));
    }
  }
  function Eu(e) {
    Sn ? (kn ? kn.push(e) : (kn = [e])) : (Sn = e);
  }
  function xu() {
    if (Sn) {
      var e = Sn,
        t = kn;
      if (((kn = Sn = null), ku(e), t)) for (e = 0; e < t.length; e++) ku(t[e]);
    }
  }
  function Cu(e, t) {
    return e(t);
  }
  function _u() {}
  var fo = !1;
  function Ru(e, t, n) {
    if (fo) return e(t, n);
    fo = !0;
    try {
      return Cu(e, t, n);
    } finally {
      (fo = !1), (Sn !== null || kn !== null) && (_u(), xu());
    }
  }
  function Xn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = al(n);
    if (r === null) return null;
    n = r[t];
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
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var po = !1;
  if (_)
    try {
      var Jn = {};
      Object.defineProperty(Jn, "passive", {
        get: function () {
          po = !0;
        },
      }),
        window.addEventListener("test", Jn, Jn),
        window.removeEventListener("test", Jn, Jn);
    } catch {
      po = !1;
    }
  function Uc(e, t, n, r, l, o, u, c, d) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, S);
    } catch (N) {
      this.onError(N);
    }
  }
  var Zn = !1,
    Ar = null,
    Wr = !1,
    ho = null,
    Ac = {
      onError: function (e) {
        (Zn = !0), (Ar = e);
      },
    };
  function Wc(e, t, n, r, l, o, u, c, d) {
    (Zn = !1), (Ar = null), Uc.apply(Ac, arguments);
  }
  function Bc(e, t, n, r, l, o, u, c, d) {
    if ((Wc.apply(this, arguments), Zn)) {
      if (Zn) {
        var S = Ar;
        (Zn = !1), (Ar = null);
      } else throw Error(a(198));
      Wr || ((Wr = !0), (ho = S));
    }
  }
  function ln(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Pu(e) {
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
  function Nu(e) {
    if (ln(e) !== e) throw Error(a(188));
  }
  function Hc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ln(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Nu(l), e;
          if (o === r) return Nu(l), t;
          o = o.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var u = !1, c = l.child; c; ) {
          if (c === n) {
            (u = !0), (n = l), (r = o);
            break;
          }
          if (c === r) {
            (u = !0), (r = l), (n = o);
            break;
          }
          c = c.sibling;
        }
        if (!u) {
          for (c = o.child; c; ) {
            if (c === n) {
              (u = !0), (n = o), (r = l);
              break;
            }
            if (c === r) {
              (u = !0), (r = o), (n = l);
              break;
            }
            c = c.sibling;
          }
          if (!u) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function Lu(e) {
    return (e = Hc(e)), e !== null ? Tu(e) : null;
  }
  function Tu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Tu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var zu = s.unstable_scheduleCallback,
    Iu = s.unstable_cancelCallback,
    Vc = s.unstable_shouldYield,
    Qc = s.unstable_requestPaint,
    Ne = s.unstable_now,
    Kc = s.unstable_getCurrentPriorityLevel,
    mo = s.unstable_ImmediatePriority,
    ju = s.unstable_UserBlockingPriority,
    Br = s.unstable_NormalPriority,
    Yc = s.unstable_LowPriority,
    Ou = s.unstable_IdlePriority,
    Hr = null,
    St = null;
  function Gc(e) {
    if (St && typeof St.onCommitFiberRoot == "function")
      try {
        St.onCommitFiberRoot(Hr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var dt = Math.clz32 ? Math.clz32 : Zc,
    Xc = Math.log,
    Jc = Math.LN2;
  function Zc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Xc(e) / Jc) | 0)) | 0;
  }
  var Vr = 64,
    Qr = 4194304;
  function qn(e) {
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
  function Kr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var c = u & ~l;
      c !== 0 ? (r = qn(c)) : ((o &= u), o !== 0 && (r = qn(o)));
    } else (u = n & ~l), u !== 0 ? (r = qn(u)) : o !== 0 && (r = qn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - dt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function qc(e, t) {
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
  function bc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var u = 31 - dt(o),
        c = 1 << u,
        d = l[u];
      d === -1
        ? (!(c & n) || c & r) && (l[u] = qc(c, t))
        : d <= t && (e.expiredLanes |= c),
        (o &= ~c);
    }
  }
  function vo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function $u() {
    var e = Vr;
    return (Vr <<= 1), !(Vr & 4194240) && (Vr = 64), e;
  }
  function yo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function bn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - dt(t)),
      (e[t] = n);
  }
  function ef(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - dt(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function go(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - dt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var pe = 0;
  function Du(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Fu,
    wo,
    Mu,
    Uu,
    Au,
    So = !1,
    Yr = [],
    Mt = null,
    Ut = null,
    At = null,
    er = new Map(),
    tr = new Map(),
    Wt = [],
    tf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Wu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Mt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ut = null;
        break;
      case "mouseover":
      case "mouseout":
        At = null;
        break;
      case "pointerover":
      case "pointerout":
        er.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        tr.delete(t.pointerId);
    }
  }
  function nr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = vr(t)), t !== null && wo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function nf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Mt = nr(Mt, e, t, n, r, l)), !0;
      case "dragenter":
        return (Ut = nr(Ut, e, t, n, r, l)), !0;
      case "mouseover":
        return (At = nr(At, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return er.set(o, nr(er.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), tr.set(o, nr(tr.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Bu(e) {
    var t = on(e.target);
    if (t !== null) {
      var n = ln(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Pu(n)), t !== null)) {
            (e.blockedOn = t),
              Au(e.priority, function () {
                Mu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Gr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (ao = r), n.target.dispatchEvent(r), (ao = null);
      } else return (t = vr(n)), t !== null && wo(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Hu(e, t, n) {
    Gr(e) && n.delete(t);
  }
  function rf() {
    (So = !1),
      Mt !== null && Gr(Mt) && (Mt = null),
      Ut !== null && Gr(Ut) && (Ut = null),
      At !== null && Gr(At) && (At = null),
      er.forEach(Hu),
      tr.forEach(Hu);
  }
  function rr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      So ||
        ((So = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, rf)));
  }
  function lr(e) {
    function t(l) {
      return rr(l, e);
    }
    if (0 < Yr.length) {
      rr(Yr[0], e);
      for (var n = 1; n < Yr.length; n++) {
        var r = Yr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Mt !== null && rr(Mt, e),
        Ut !== null && rr(Ut, e),
        At !== null && rr(At, e),
        er.forEach(t),
        tr.forEach(t),
        n = 0;
      n < Wt.length;
      n++
    )
      (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
      Bu(n), n.blockedOn === null && Wt.shift();
  }
  var En = ee.ReactCurrentBatchConfig,
    Xr = !0;
  function lf(e, t, n, r) {
    var l = pe,
      o = En.transition;
    En.transition = null;
    try {
      (pe = 1), ko(e, t, n, r);
    } finally {
      (pe = l), (En.transition = o);
    }
  }
  function of(e, t, n, r) {
    var l = pe,
      o = En.transition;
    En.transition = null;
    try {
      (pe = 4), ko(e, t, n, r);
    } finally {
      (pe = l), (En.transition = o);
    }
  }
  function ko(e, t, n, r) {
    if (Xr) {
      var l = Eo(e, t, n, r);
      if (l === null) Uo(e, t, r, Jr, n), Wu(e, r);
      else if (nf(l, e, t, n, r)) r.stopPropagation();
      else if ((Wu(e, r), t & 4 && -1 < tf.indexOf(e))) {
        for (; l !== null; ) {
          var o = vr(l);
          if (
            (o !== null && Fu(o),
            (o = Eo(e, t, n, r)),
            o === null && Uo(e, t, r, Jr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Uo(e, t, r, null, n);
    }
  }
  var Jr = null;
  function Eo(e, t, n, r) {
    if (((Jr = null), (e = so(r)), (e = on(e)), e !== null))
      if (((t = ln(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Pu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Jr = e), null;
  }
  function Vu(e) {
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
        switch (Kc()) {
          case mo:
            return 1;
          case ju:
            return 4;
          case Br:
          case Yc:
            return 16;
          case Ou:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Bt = null,
    xo = null,
    Zr = null;
  function Qu() {
    if (Zr) return Zr;
    var e,
      t = xo,
      n = t.length,
      r,
      l = "value" in Bt ? Bt.value : Bt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
    return (Zr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function qr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function br() {
    return !0;
  }
  function Ku() {
    return !1;
  }
  function tt(e) {
    function t(n, r, l, o, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null);
      for (var c in e)
        e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(o) : o[c]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? br
          : Ku),
        (this.isPropagationStopped = Ku),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = br));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = br));
        },
        persist: function () {},
        isPersistent: br,
      }),
      t
    );
  }
  var xn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Co = tt(xn),
    or = W({}, xn, { view: 0, detail: 0 }),
    uf = tt(or),
    _o,
    Ro,
    ir,
    el = W({}, or, {
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
      getModifierState: No,
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
          : (e !== ir &&
              (ir && e.type === "mousemove"
                ? ((_o = e.screenX - ir.screenX), (Ro = e.screenY - ir.screenY))
                : (Ro = _o = 0),
              (ir = e)),
            _o);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ro;
      },
    }),
    Yu = tt(el),
    af = W({}, el, { dataTransfer: 0 }),
    sf = tt(af),
    cf = W({}, or, { relatedTarget: 0 }),
    Po = tt(cf),
    ff = W({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    df = tt(ff),
    pf = W({}, xn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    hf = tt(pf),
    mf = W({}, xn, { data: 0 }),
    Gu = tt(mf),
    vf = {
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
    yf = {
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
    gf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function wf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = gf[e])
        ? !!t[e]
        : !1;
  }
  function No() {
    return wf;
  }
  var Sf = W({}, or, {
      key: function (e) {
        if (e.key) {
          var t = vf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = qr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? yf[e.keyCode] || "Unidentified"
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
      getModifierState: No,
      charCode: function (e) {
        return e.type === "keypress" ? qr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? qr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    kf = tt(Sf),
    Ef = W({}, el, {
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
    Xu = tt(Ef),
    xf = W({}, or, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: No,
    }),
    Cf = tt(xf),
    _f = W({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rf = tt(_f),
    Pf = W({}, el, {
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
    Nf = tt(Pf),
    Lf = [9, 13, 27, 32],
    Lo = _ && "CompositionEvent" in window,
    ur = null;
  _ && "documentMode" in document && (ur = document.documentMode);
  var Tf = _ && "TextEvent" in window && !ur,
    Ju = _ && (!Lo || (ur && 8 < ur && 11 >= ur)),
    Zu = " ",
    qu = !1;
  function bu(e, t) {
    switch (e) {
      case "keyup":
        return Lf.indexOf(t.keyCode) !== -1;
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
  function ea(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Cn = !1;
  function zf(e, t) {
    switch (e) {
      case "compositionend":
        return ea(t);
      case "keypress":
        return t.which !== 32 ? null : ((qu = !0), Zu);
      case "textInput":
        return (e = t.data), e === Zu && qu ? null : e;
      default:
        return null;
    }
  }
  function If(e, t) {
    if (Cn)
      return e === "compositionend" || (!Lo && bu(e, t))
        ? ((e = Qu()), (Zr = xo = Bt = null), (Cn = !1), e)
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
        return Ju && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var jf = {
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
  function ta(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jf[e.type] : t === "textarea";
  }
  function na(e, t, n, r) {
    Eu(r),
      (t = ol(t, "onChange")),
      0 < t.length &&
        ((n = new Co("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var ar = null,
    sr = null;
  function Of(e) {
    Sa(e, 0);
  }
  function tl(e) {
    var t = Ln(e);
    if (wt(t)) return e;
  }
  function $f(e, t) {
    if (e === "change") return t;
  }
  var ra = !1;
  if (_) {
    var To;
    if (_) {
      var zo = "oninput" in document;
      if (!zo) {
        var la = document.createElement("div");
        la.setAttribute("oninput", "return;"),
          (zo = typeof la.oninput == "function");
      }
      To = zo;
    } else To = !1;
    ra = To && (!document.documentMode || 9 < document.documentMode);
  }
  function oa() {
    ar && (ar.detachEvent("onpropertychange", ia), (sr = ar = null));
  }
  function ia(e) {
    if (e.propertyName === "value" && tl(sr)) {
      var t = [];
      na(t, sr, e, so(e)), Ru(Of, t);
    }
  }
  function Df(e, t, n) {
    e === "focusin"
      ? (oa(), (ar = t), (sr = n), ar.attachEvent("onpropertychange", ia))
      : e === "focusout" && oa();
  }
  function Ff(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return tl(sr);
  }
  function Mf(e, t) {
    if (e === "click") return tl(t);
  }
  function Uf(e, t) {
    if (e === "input" || e === "change") return tl(t);
  }
  function Af(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var pt = typeof Object.is == "function" ? Object.is : Af;
  function cr(e, t) {
    if (pt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!w.call(t, l) || !pt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ua(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function aa(e, t) {
    var n = ua(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ua(n);
    }
  }
  function sa(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? sa(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ca() {
    for (var e = window, t = Ft(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ft(e.document);
    }
    return t;
  }
  function Io(e) {
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
  function Wf(e) {
    var t = ca(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      sa(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Io(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = aa(n, o));
          var u = aa(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Bf = _ && "documentMode" in document && 11 >= document.documentMode,
    _n = null,
    jo = null,
    fr = null,
    Oo = !1;
  function fa(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Oo ||
      _n == null ||
      _n !== Ft(r) ||
      ((r = _n),
      "selectionStart" in r && Io(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (fr && cr(fr, r)) ||
        ((fr = r),
        (r = ol(jo, "onSelect")),
        0 < r.length &&
          ((t = new Co("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = _n))));
  }
  function nl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Rn = {
      animationend: nl("Animation", "AnimationEnd"),
      animationiteration: nl("Animation", "AnimationIteration"),
      animationstart: nl("Animation", "AnimationStart"),
      transitionend: nl("Transition", "TransitionEnd"),
    },
    $o = {},
    da = {};
  _ &&
    ((da = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Rn.animationend.animation,
      delete Rn.animationiteration.animation,
      delete Rn.animationstart.animation),
    "TransitionEvent" in window || delete Rn.transitionend.transition);
  function rl(e) {
    if ($o[e]) return $o[e];
    if (!Rn[e]) return e;
    var t = Rn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in da) return ($o[e] = t[n]);
    return e;
  }
  var pa = rl("animationend"),
    ha = rl("animationiteration"),
    ma = rl("animationstart"),
    va = rl("transitionend"),
    ya = new Map(),
    ga =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ht(e, t) {
    ya.set(e, t), m(t, [e]);
  }
  for (var Do = 0; Do < ga.length; Do++) {
    var Fo = ga[Do],
      Hf = Fo.toLowerCase(),
      Vf = Fo[0].toUpperCase() + Fo.slice(1);
    Ht(Hf, "on" + Vf);
  }
  Ht(pa, "onAnimationEnd"),
    Ht(ha, "onAnimationIteration"),
    Ht(ma, "onAnimationStart"),
    Ht("dblclick", "onDoubleClick"),
    Ht("focusin", "onFocus"),
    Ht("focusout", "onBlur"),
    Ht(va, "onTransitionEnd"),
    E("onMouseEnter", ["mouseout", "mouseover"]),
    E("onMouseLeave", ["mouseout", "mouseover"]),
    E("onPointerEnter", ["pointerout", "pointerover"]),
    E("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var dr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Qf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(dr),
    );
  function wa(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Bc(r, t, void 0, e), (e.currentTarget = null);
  }
  function Sa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var c = r[u],
              d = c.instance,
              S = c.currentTarget;
            if (((c = c.listener), d !== o && l.isPropagationStopped()))
              break e;
            wa(l, c, S), (o = d);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((c = r[u]),
              (d = c.instance),
              (S = c.currentTarget),
              (c = c.listener),
              d !== o && l.isPropagationStopped())
            )
              break e;
            wa(l, c, S), (o = d);
          }
      }
    }
    if (Wr) throw ((e = ho), (Wr = !1), (ho = null), e);
  }
  function ve(e, t) {
    var n = t[Qo];
    n === void 0 && (n = t[Qo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (ka(t, e, 2, !1), n.add(r));
  }
  function Mo(e, t, n) {
    var r = 0;
    t && (r |= 4), ka(n, e, r, t);
  }
  var ll = "_reactListening" + Math.random().toString(36).slice(2);
  function pr(e) {
    if (!e[ll]) {
      (e[ll] = !0),
        p.forEach(function (n) {
          n !== "selectionchange" && (Qf.has(n) || Mo(n, !1, e), Mo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ll] || ((t[ll] = !0), Mo("selectionchange", !1, t));
    }
  }
  function ka(e, t, n, r) {
    switch (Vu(t)) {
      case 1:
        var l = lf;
        break;
      case 4:
        l = of;
        break;
      default:
        l = ko;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !po ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1);
  }
  function Uo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var c = r.stateNode.containerInfo;
          if (c === l || (c.nodeType === 8 && c.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var d = u.tag;
              if (
                (d === 3 || d === 4) &&
                ((d = u.stateNode.containerInfo),
                d === l || (d.nodeType === 8 && d.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; c !== null; ) {
            if (((u = on(c)), u === null)) return;
            if (((d = u.tag), d === 5 || d === 6)) {
              r = o = u;
              continue e;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
    Ru(function () {
      var S = o,
        N = so(n),
        L = [];
      e: {
        var P = ya.get(e);
        if (P !== void 0) {
          var A = Co,
            H = e;
          switch (e) {
            case "keypress":
              if (qr(n) === 0) break e;
            case "keydown":
            case "keyup":
              A = kf;
              break;
            case "focusin":
              (H = "focus"), (A = Po);
              break;
            case "focusout":
              (H = "blur"), (A = Po);
              break;
            case "beforeblur":
            case "afterblur":
              A = Po;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = Yu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = sf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = Cf;
              break;
            case pa:
            case ha:
            case ma:
              A = df;
              break;
            case va:
              A = Rf;
              break;
            case "scroll":
              A = uf;
              break;
            case "wheel":
              A = Nf;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = hf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = Xu;
          }
          var Q = (t & 4) !== 0,
            Le = !Q && e === "scroll",
            y = Q ? (P !== null ? P + "Capture" : null) : P;
          Q = [];
          for (var h = S, g; h !== null; ) {
            g = h;
            var z = g.stateNode;
            if (
              (g.tag === 5 &&
                z !== null &&
                ((g = z),
                y !== null &&
                  ((z = Xn(h, y)), z != null && Q.push(hr(h, z, g)))),
              Le)
            )
              break;
            h = h.return;
          }
          0 < Q.length &&
            ((P = new A(P, H, null, n, N)), L.push({ event: P, listeners: Q }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((P = e === "mouseover" || e === "pointerover"),
            (A = e === "mouseout" || e === "pointerout"),
            P &&
              n !== ao &&
              (H = n.relatedTarget || n.fromElement) &&
              (on(H) || H[Nt]))
          )
            break e;
          if (
            (A || P) &&
            ((P =
              N.window === N
                ? N
                : (P = N.ownerDocument)
                  ? P.defaultView || P.parentWindow
                  : window),
            A
              ? ((H = n.relatedTarget || n.toElement),
                (A = S),
                (H = H ? on(H) : null),
                H !== null &&
                  ((Le = ln(H)), H !== Le || (H.tag !== 5 && H.tag !== 6)) &&
                  (H = null))
              : ((A = null), (H = S)),
            A !== H)
          ) {
            if (
              ((Q = Yu),
              (z = "onMouseLeave"),
              (y = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = Xu),
                (z = "onPointerLeave"),
                (y = "onPointerEnter"),
                (h = "pointer")),
              (Le = A == null ? P : Ln(A)),
              (g = H == null ? P : Ln(H)),
              (P = new Q(z, h + "leave", A, n, N)),
              (P.target = Le),
              (P.relatedTarget = g),
              (z = null),
              on(N) === S &&
                ((Q = new Q(y, h + "enter", H, n, N)),
                (Q.target = g),
                (Q.relatedTarget = Le),
                (z = Q)),
              (Le = z),
              A && H)
            )
              t: {
                for (Q = A, y = H, h = 0, g = Q; g; g = Pn(g)) h++;
                for (g = 0, z = y; z; z = Pn(z)) g++;
                for (; 0 < h - g; ) (Q = Pn(Q)), h--;
                for (; 0 < g - h; ) (y = Pn(y)), g--;
                for (; h--; ) {
                  if (Q === y || (y !== null && Q === y.alternate)) break t;
                  (Q = Pn(Q)), (y = Pn(y));
                }
                Q = null;
              }
            else Q = null;
            A !== null && Ea(L, P, A, Q, !1),
              H !== null && Le !== null && Ea(L, Le, H, Q, !0);
          }
        }
        e: {
          if (
            ((P = S ? Ln(S) : window),
            (A = P.nodeName && P.nodeName.toLowerCase()),
            A === "select" || (A === "input" && P.type === "file"))
          )
            var G = $f;
          else if (ta(P))
            if (ra) G = Uf;
            else {
              G = Ff;
              var J = Df;
            }
          else
            (A = P.nodeName) &&
              A.toLowerCase() === "input" &&
              (P.type === "checkbox" || P.type === "radio") &&
              (G = Mf);
          if (G && (G = G(e, S))) {
            na(L, G, n, N);
            break e;
          }
          J && J(e, P, S),
            e === "focusout" &&
              (J = P._wrapperState) &&
              J.controlled &&
              P.type === "number" &&
              ro(P, "number", P.value);
        }
        switch (((J = S ? Ln(S) : window), e)) {
          case "focusin":
            (ta(J) || J.contentEditable === "true") &&
              ((_n = J), (jo = S), (fr = null));
            break;
          case "focusout":
            fr = jo = _n = null;
            break;
          case "mousedown":
            Oo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Oo = !1), fa(L, n, N);
            break;
          case "selectionchange":
            if (Bf) break;
          case "keydown":
          case "keyup":
            fa(L, n, N);
        }
        var Z;
        if (Lo)
          e: {
            switch (e) {
              case "compositionstart":
                var b = "onCompositionStart";
                break e;
              case "compositionend":
                b = "onCompositionEnd";
                break e;
              case "compositionupdate":
                b = "onCompositionUpdate";
                break e;
            }
            b = void 0;
          }
        else
          Cn
            ? bu(e, n) && (b = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (b = "onCompositionStart");
        b &&
          (Ju &&
            n.locale !== "ko" &&
            (Cn || b !== "onCompositionStart"
              ? b === "onCompositionEnd" && Cn && (Z = Qu())
              : ((Bt = N),
                (xo = "value" in Bt ? Bt.value : Bt.textContent),
                (Cn = !0))),
          (J = ol(S, b)),
          0 < J.length &&
            ((b = new Gu(b, e, null, n, N)),
            L.push({ event: b, listeners: J }),
            Z ? (b.data = Z) : ((Z = ea(n)), Z !== null && (b.data = Z)))),
          (Z = Tf ? zf(e, n) : If(e, n)) &&
            ((S = ol(S, "onBeforeInput")),
            0 < S.length &&
              ((N = new Gu("onBeforeInput", "beforeinput", null, n, N)),
              L.push({ event: N, listeners: S }),
              (N.data = Z)));
      }
      Sa(L, t);
    });
  }
  function hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ol(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Xn(e, n)),
        o != null && r.unshift(hr(e, o, l)),
        (o = Xn(e, t)),
        o != null && r.push(hr(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function Pn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ea(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var c = n,
        d = c.alternate,
        S = c.stateNode;
      if (d !== null && d === r) break;
      c.tag === 5 &&
        S !== null &&
        ((c = S),
        l
          ? ((d = Xn(n, o)), d != null && u.unshift(hr(n, d, c)))
          : l || ((d = Xn(n, o)), d != null && u.push(hr(n, d, c)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Kf = /\r\n?/g,
    Yf = /\u0000|\uFFFD/g;
  function xa(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Kf,
        `
`,
      )
      .replace(Yf, "");
  }
  function il(e, t, n) {
    if (((t = xa(t)), xa(e) !== t && n)) throw Error(a(425));
  }
  function ul() {}
  var Ao = null,
    Wo = null;
  function Bo(e, t) {
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
  var Ho = typeof setTimeout == "function" ? setTimeout : void 0,
    Gf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ca = typeof Promise == "function" ? Promise : void 0,
    Xf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ca < "u"
          ? function (e) {
              return Ca.resolve(null).then(e).catch(Jf);
            }
          : Ho;
  function Jf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Vo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), lr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    lr(t);
  }
  function Vt(e) {
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
  function _a(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Nn = Math.random().toString(36).slice(2),
    kt = "__reactFiber$" + Nn,
    mr = "__reactProps$" + Nn,
    Nt = "__reactContainer$" + Nn,
    Qo = "__reactEvents$" + Nn,
    Zf = "__reactListeners$" + Nn,
    qf = "__reactHandles$" + Nn;
  function on(e) {
    var t = e[kt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Nt] || n[kt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = _a(e); e !== null; ) {
            if ((n = e[kt])) return n;
            e = _a(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function vr(e) {
    return (
      (e = e[kt] || e[Nt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Ln(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function al(e) {
    return e[mr] || null;
  }
  var Ko = [],
    Tn = -1;
  function Qt(e) {
    return { current: e };
  }
  function ye(e) {
    0 > Tn || ((e.current = Ko[Tn]), (Ko[Tn] = null), Tn--);
  }
  function me(e, t) {
    Tn++, (Ko[Tn] = e.current), (e.current = t);
  }
  var Kt = {},
    Ue = Qt(Kt),
    Ye = Qt(!1),
    un = Kt;
  function zn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Kt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ge(e) {
    return (e = e.childContextTypes), e != null;
  }
  function sl() {
    ye(Ye), ye(Ue);
  }
  function Ra(e, t, n) {
    if (Ue.current !== Kt) throw Error(a(168));
    me(Ue, t), me(Ye, n);
  }
  function Pa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, de(e) || "Unknown", l));
    return W({}, n, r);
  }
  function cl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Kt),
      (un = Ue.current),
      me(Ue, e),
      me(Ye, Ye.current),
      !0
    );
  }
  function Na(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = Pa(e, t, un)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ye(Ye),
        ye(Ue),
        me(Ue, e))
      : ye(Ye),
      me(Ye, n);
  }
  var Lt = null,
    fl = !1,
    Yo = !1;
  function La(e) {
    Lt === null ? (Lt = [e]) : Lt.push(e);
  }
  function bf(e) {
    (fl = !0), La(e);
  }
  function Yt() {
    if (!Yo && Lt !== null) {
      Yo = !0;
      var e = 0,
        t = pe;
      try {
        var n = Lt;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Lt = null), (fl = !1);
      } catch (l) {
        throw (Lt !== null && (Lt = Lt.slice(e + 1)), zu(mo, Yt), l);
      } finally {
        (pe = t), (Yo = !1);
      }
    }
    return null;
  }
  var In = [],
    jn = 0,
    dl = null,
    pl = 0,
    it = [],
    ut = 0,
    an = null,
    Tt = 1,
    zt = "";
  function sn(e, t) {
    (In[jn++] = pl), (In[jn++] = dl), (dl = e), (pl = t);
  }
  function Ta(e, t, n) {
    (it[ut++] = Tt), (it[ut++] = zt), (it[ut++] = an), (an = e);
    var r = Tt;
    e = zt;
    var l = 32 - dt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - dt(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      (o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Tt = (1 << (32 - dt(t) + l)) | (n << l) | r),
        (zt = o + e);
    } else (Tt = (1 << o) | (n << l) | r), (zt = e);
  }
  function Go(e) {
    e.return !== null && (sn(e, 1), Ta(e, 1, 0));
  }
  function Xo(e) {
    for (; e === dl; )
      (dl = In[--jn]), (In[jn] = null), (pl = In[--jn]), (In[jn] = null);
    for (; e === an; )
      (an = it[--ut]),
        (it[ut] = null),
        (zt = it[--ut]),
        (it[ut] = null),
        (Tt = it[--ut]),
        (it[ut] = null);
  }
  var nt = null,
    rt = null,
    Se = !1,
    ht = null;
  function za(e, t) {
    var n = ft(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Ia(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (nt = e), (rt = Vt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (nt = e), (rt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = an !== null ? { id: Tt, overflow: zt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ft(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (nt = e),
              (rt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Jo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Zo(e) {
    if (Se) {
      var t = rt;
      if (t) {
        var n = t;
        if (!Ia(e, t)) {
          if (Jo(e)) throw Error(a(418));
          t = Vt(n.nextSibling);
          var r = nt;
          t && Ia(e, t)
            ? za(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (nt = e));
        }
      } else {
        if (Jo(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (Se = !1), (nt = e);
      }
    }
  }
  function ja(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    nt = e;
  }
  function hl(e) {
    if (e !== nt) return !1;
    if (!Se) return ja(e), (Se = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Bo(e.type, e.memoizedProps))),
      t && (t = rt))
    ) {
      if (Jo(e)) throw (Oa(), Error(a(418)));
      for (; t; ) za(e, t), (t = Vt(t.nextSibling));
    }
    if ((ja(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = Vt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else rt = nt ? Vt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Oa() {
    for (var e = rt; e; ) e = Vt(e.nextSibling);
  }
  function On() {
    (rt = nt = null), (Se = !1);
  }
  function qo(e) {
    ht === null ? (ht = [e]) : ht.push(e);
  }
  var ed = ee.ReactCurrentBatchConfig;
  function yr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var c = l.refs;
              u === null ? delete c[o] : (c[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function ml(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function $a(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Da(e) {
    function t(y, h) {
      if (e) {
        var g = y.deletions;
        g === null ? ((y.deletions = [h]), (y.flags |= 16)) : g.push(h);
      }
    }
    function n(y, h) {
      if (!e) return null;
      for (; h !== null; ) t(y, h), (h = h.sibling);
      return null;
    }
    function r(y, h) {
      for (y = new Map(); h !== null; )
        h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
      return y;
    }
    function l(y, h) {
      return (y = tn(y, h)), (y.index = 0), (y.sibling = null), y;
    }
    function o(y, h, g) {
      return (
        (y.index = g),
        e
          ? ((g = y.alternate),
            g !== null
              ? ((g = g.index), g < h ? ((y.flags |= 2), h) : g)
              : ((y.flags |= 2), h))
          : ((y.flags |= 1048576), h)
      );
    }
    function u(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function c(y, h, g, z) {
      return h === null || h.tag !== 6
        ? ((h = Hi(g, y.mode, z)), (h.return = y), h)
        : ((h = l(h, g)), (h.return = y), h);
    }
    function d(y, h, g, z) {
      var G = g.type;
      return G === ue
        ? N(y, h, g.props.children, z, g.key)
        : h !== null &&
            (h.elementType === G ||
              (typeof G == "object" &&
                G !== null &&
                G.$$typeof === _e &&
                $a(G) === h.type))
          ? ((z = l(h, g.props)), (z.ref = yr(y, h, g)), (z.return = y), z)
          : ((z = Ul(g.type, g.key, g.props, null, y.mode, z)),
            (z.ref = yr(y, h, g)),
            (z.return = y),
            z);
    }
    function S(y, h, g, z) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== g.containerInfo ||
        h.stateNode.implementation !== g.implementation
        ? ((h = Vi(g, y.mode, z)), (h.return = y), h)
        : ((h = l(h, g.children || [])), (h.return = y), h);
    }
    function N(y, h, g, z, G) {
      return h === null || h.tag !== 7
        ? ((h = yn(g, y.mode, z, G)), (h.return = y), h)
        : ((h = l(h, g)), (h.return = y), h);
    }
    function L(y, h, g) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = Hi("" + h, y.mode, g)), (h.return = y), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ce:
            return (
              (g = Ul(h.type, h.key, h.props, null, y.mode, g)),
              (g.ref = yr(y, null, h)),
              (g.return = y),
              g
            );
          case ge:
            return (h = Vi(h, y.mode, g)), (h.return = y), h;
          case _e:
            var z = h._init;
            return L(y, z(h._payload), g);
        }
        if (Kn(h) || Y(h))
          return (h = yn(h, y.mode, g, null)), (h.return = y), h;
        ml(y, h);
      }
      return null;
    }
    function P(y, h, g, z) {
      var G = h !== null ? h.key : null;
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return G !== null ? null : c(y, h, "" + g, z);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ce:
            return g.key === G ? d(y, h, g, z) : null;
          case ge:
            return g.key === G ? S(y, h, g, z) : null;
          case _e:
            return (G = g._init), P(y, h, G(g._payload), z);
        }
        if (Kn(g) || Y(g)) return G !== null ? null : N(y, h, g, z, null);
        ml(y, g);
      }
      return null;
    }
    function A(y, h, g, z, G) {
      if ((typeof z == "string" && z !== "") || typeof z == "number")
        return (y = y.get(g) || null), c(h, y, "" + z, G);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ce:
            return (
              (y = y.get(z.key === null ? g : z.key) || null), d(h, y, z, G)
            );
          case ge:
            return (
              (y = y.get(z.key === null ? g : z.key) || null), S(h, y, z, G)
            );
          case _e:
            var J = z._init;
            return A(y, h, g, J(z._payload), G);
        }
        if (Kn(z) || Y(z)) return (y = y.get(g) || null), N(h, y, z, G, null);
        ml(h, z);
      }
      return null;
    }
    function H(y, h, g, z) {
      for (
        var G = null, J = null, Z = h, b = (h = 0), $e = null;
        Z !== null && b < g.length;
        b++
      ) {
        Z.index > b ? (($e = Z), (Z = null)) : ($e = Z.sibling);
        var ae = P(y, Z, g[b], z);
        if (ae === null) {
          Z === null && (Z = $e);
          break;
        }
        e && Z && ae.alternate === null && t(y, Z),
          (h = o(ae, h, b)),
          J === null ? (G = ae) : (J.sibling = ae),
          (J = ae),
          (Z = $e);
      }
      if (b === g.length) return n(y, Z), Se && sn(y, b), G;
      if (Z === null) {
        for (; b < g.length; b++)
          (Z = L(y, g[b], z)),
            Z !== null &&
              ((h = o(Z, h, b)),
              J === null ? (G = Z) : (J.sibling = Z),
              (J = Z));
        return Se && sn(y, b), G;
      }
      for (Z = r(y, Z); b < g.length; b++)
        ($e = A(Z, y, b, g[b], z)),
          $e !== null &&
            (e &&
              $e.alternate !== null &&
              Z.delete($e.key === null ? b : $e.key),
            (h = o($e, h, b)),
            J === null ? (G = $e) : (J.sibling = $e),
            (J = $e));
      return (
        e &&
          Z.forEach(function (nn) {
            return t(y, nn);
          }),
        Se && sn(y, b),
        G
      );
    }
    function Q(y, h, g, z) {
      var G = Y(g);
      if (typeof G != "function") throw Error(a(150));
      if (((g = G.call(g)), g == null)) throw Error(a(151));
      for (
        var J = (G = null), Z = h, b = (h = 0), $e = null, ae = g.next();
        Z !== null && !ae.done;
        b++, ae = g.next()
      ) {
        Z.index > b ? (($e = Z), (Z = null)) : ($e = Z.sibling);
        var nn = P(y, Z, ae.value, z);
        if (nn === null) {
          Z === null && (Z = $e);
          break;
        }
        e && Z && nn.alternate === null && t(y, Z),
          (h = o(nn, h, b)),
          J === null ? (G = nn) : (J.sibling = nn),
          (J = nn),
          (Z = $e);
      }
      if (ae.done) return n(y, Z), Se && sn(y, b), G;
      if (Z === null) {
        for (; !ae.done; b++, ae = g.next())
          (ae = L(y, ae.value, z)),
            ae !== null &&
              ((h = o(ae, h, b)),
              J === null ? (G = ae) : (J.sibling = ae),
              (J = ae));
        return Se && sn(y, b), G;
      }
      for (Z = r(y, Z); !ae.done; b++, ae = g.next())
        (ae = A(Z, y, b, ae.value, z)),
          ae !== null &&
            (e &&
              ae.alternate !== null &&
              Z.delete(ae.key === null ? b : ae.key),
            (h = o(ae, h, b)),
            J === null ? (G = ae) : (J.sibling = ae),
            (J = ae));
      return (
        e &&
          Z.forEach(function (jd) {
            return t(y, jd);
          }),
        Se && sn(y, b),
        G
      );
    }
    function Le(y, h, g, z) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === ue &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case ce:
            e: {
              for (var G = g.key, J = h; J !== null; ) {
                if (J.key === G) {
                  if (((G = g.type), G === ue)) {
                    if (J.tag === 7) {
                      n(y, J.sibling),
                        (h = l(J, g.props.children)),
                        (h.return = y),
                        (y = h);
                      break e;
                    }
                  } else if (
                    J.elementType === G ||
                    (typeof G == "object" &&
                      G !== null &&
                      G.$$typeof === _e &&
                      $a(G) === J.type)
                  ) {
                    n(y, J.sibling),
                      (h = l(J, g.props)),
                      (h.ref = yr(y, J, g)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                  n(y, J);
                  break;
                } else t(y, J);
                J = J.sibling;
              }
              g.type === ue
                ? ((h = yn(g.props.children, y.mode, z, g.key)),
                  (h.return = y),
                  (y = h))
                : ((z = Ul(g.type, g.key, g.props, null, y.mode, z)),
                  (z.ref = yr(y, h, g)),
                  (z.return = y),
                  (y = z));
            }
            return u(y);
          case ge:
            e: {
              for (J = g.key; h !== null; ) {
                if (h.key === J)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === g.containerInfo &&
                    h.stateNode.implementation === g.implementation
                  ) {
                    n(y, h.sibling),
                      (h = l(h, g.children || [])),
                      (h.return = y),
                      (y = h);
                    break e;
                  } else {
                    n(y, h);
                    break;
                  }
                else t(y, h);
                h = h.sibling;
              }
              (h = Vi(g, y.mode, z)), (h.return = y), (y = h);
            }
            return u(y);
          case _e:
            return (J = g._init), Le(y, h, J(g._payload), z);
        }
        if (Kn(g)) return H(y, h, g, z);
        if (Y(g)) return Q(y, h, g, z);
        ml(y, g);
      }
      return (typeof g == "string" && g !== "") || typeof g == "number"
        ? ((g = "" + g),
          h !== null && h.tag === 6
            ? (n(y, h.sibling), (h = l(h, g)), (h.return = y), (y = h))
            : (n(y, h), (h = Hi(g, y.mode, z)), (h.return = y), (y = h)),
          u(y))
        : n(y, h);
    }
    return Le;
  }
  var $n = Da(!0),
    Fa = Da(!1),
    vl = Qt(null),
    yl = null,
    Dn = null,
    bo = null;
  function ei() {
    bo = Dn = yl = null;
  }
  function ti(e) {
    var t = vl.current;
    ye(vl), (e._currentValue = t);
  }
  function ni(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Fn(e, t) {
    (yl = e),
      (bo = Dn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Xe = !0), (e.firstContext = null));
  }
  function at(e) {
    var t = e._currentValue;
    if (bo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Dn === null)) {
        if (yl === null) throw Error(a(308));
        (Dn = e), (yl.dependencies = { lanes: 0, firstContext: e });
      } else Dn = Dn.next = e;
    return t;
  }
  var cn = null;
  function ri(e) {
    cn === null ? (cn = [e]) : cn.push(e);
  }
  function Ma(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ri(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      It(e, r)
    );
  }
  function It(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Gt = !1;
  function li(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ua(e, t) {
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
  function jt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Xt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ie & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        It(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ri(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      It(e, n)
    );
  }
  function gl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), go(e, n);
    }
  }
  function Aa(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = u) : (o = o.next = u), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function wl(e, t, n, r) {
    var l = e.updateQueue;
    Gt = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var d = c,
        S = d.next;
      (d.next = null), u === null ? (o = S) : (u.next = S), (u = d);
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (c = N.lastBaseUpdate),
        c !== u &&
          (c === null ? (N.firstBaseUpdate = S) : (c.next = S),
          (N.lastBaseUpdate = d)));
    }
    if (o !== null) {
      var L = l.baseState;
      (u = 0), (N = S = d = null), (c = o);
      do {
        var P = c.lane,
          A = c.eventTime;
        if ((r & P) === P) {
          N !== null &&
            (N = N.next =
              {
                eventTime: A,
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null,
              });
          e: {
            var H = e,
              Q = c;
            switch (((P = t), (A = n), Q.tag)) {
              case 1:
                if (((H = Q.payload), typeof H == "function")) {
                  L = H.call(A, L, P);
                  break e;
                }
                L = H;
                break e;
              case 3:
                H.flags = (H.flags & -65537) | 128;
              case 0:
                if (
                  ((H = Q.payload),
                  (P = typeof H == "function" ? H.call(A, L, P) : H),
                  P == null)
                )
                  break e;
                L = W({}, L, P);
                break e;
              case 2:
                Gt = !0;
            }
          }
          c.callback !== null &&
            c.lane !== 0 &&
            ((e.flags |= 64),
            (P = l.effects),
            P === null ? (l.effects = [c]) : P.push(c));
        } else
          (A = {
            eventTime: A,
            lane: P,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            N === null ? ((S = N = A), (d = L)) : (N = N.next = A),
            (u |= P);
        if (((c = c.next), c === null)) {
          if (((c = l.shared.pending), c === null)) break;
          (P = c),
            (c = P.next),
            (P.next = null),
            (l.lastBaseUpdate = P),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (N === null && (d = L),
        (l.baseState = d),
        (l.firstBaseUpdate = S),
        (l.lastBaseUpdate = N),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (pn |= u), (e.lanes = u), (e.memoizedState = L);
    }
  }
  function Wa(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var gr = {},
    Et = Qt(gr),
    wr = Qt(gr),
    Sr = Qt(gr);
  function fn(e) {
    if (e === gr) throw Error(a(174));
    return e;
  }
  function oi(e, t) {
    switch ((me(Sr, t), me(wr, e), me(Et, gr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : oo(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = oo(t, e));
    }
    ye(Et), me(Et, t);
  }
  function Mn() {
    ye(Et), ye(wr), ye(Sr);
  }
  function Ba(e) {
    fn(Sr.current);
    var t = fn(Et.current),
      n = oo(t, e.type);
    t !== n && (me(wr, e), me(Et, n));
  }
  function ii(e) {
    wr.current === e && (ye(Et), ye(wr));
  }
  var ke = Qt(0);
  function Sl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
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
  var ui = [];
  function ai() {
    for (var e = 0; e < ui.length; e++)
      ui[e]._workInProgressVersionPrimary = null;
    ui.length = 0;
  }
  var kl = ee.ReactCurrentDispatcher,
    si = ee.ReactCurrentBatchConfig,
    dn = 0,
    Ee = null,
    ze = null,
    je = null,
    El = !1,
    kr = !1,
    Er = 0,
    td = 0;
  function Ae() {
    throw Error(a(321));
  }
  function ci(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!pt(e[n], t[n])) return !1;
    return !0;
  }
  function fi(e, t, n, r, l, o) {
    if (
      ((dn = o),
      (Ee = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (kl.current = e === null || e.memoizedState === null ? od : id),
      (e = n(r, l)),
      kr)
    ) {
      o = 0;
      do {
        if (((kr = !1), (Er = 0), 25 <= o)) throw Error(a(301));
        (o += 1),
          (je = ze = null),
          (t.updateQueue = null),
          (kl.current = ud),
          (e = n(r, l));
      } while (kr);
    }
    if (
      ((kl.current = _l),
      (t = ze !== null && ze.next !== null),
      (dn = 0),
      (je = ze = Ee = null),
      (El = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function di() {
    var e = Er !== 0;
    return (Er = 0), e;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return je === null ? (Ee.memoizedState = je = e) : (je = je.next = e), je;
  }
  function st() {
    if (ze === null) {
      var e = Ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = je === null ? Ee.memoizedState : je.next;
    if (t !== null) (je = t), (ze = e);
    else {
      if (e === null) throw Error(a(310));
      (ze = e),
        (e = {
          memoizedState: ze.memoizedState,
          baseState: ze.baseState,
          baseQueue: ze.baseQueue,
          queue: ze.queue,
          next: null,
        }),
        je === null ? (Ee.memoizedState = je = e) : (je = je.next = e);
    }
    return je;
  }
  function xr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function pi(e) {
    var t = st(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = ze,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = o.next), (o.next = u);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var c = (u = null),
        d = null,
        S = o;
      do {
        var N = S.lane;
        if ((dn & N) === N)
          d !== null &&
            (d = d.next =
              {
                lane: 0,
                action: S.action,
                hasEagerState: S.hasEagerState,
                eagerState: S.eagerState,
                next: null,
              }),
            (r = S.hasEagerState ? S.eagerState : e(r, S.action));
        else {
          var L = {
            lane: N,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null,
          };
          d === null ? ((c = d = L), (u = r)) : (d = d.next = L),
            (Ee.lanes |= N),
            (pn |= N);
        }
        S = S.next;
      } while (S !== null && S !== o);
      d === null ? (u = r) : (d.next = c),
        pt(r, t.memoizedState) || (Xe = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = d),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (Ee.lanes |= o), (pn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function hi(e) {
    var t = st(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (o = e(o, u.action)), (u = u.next);
      while (u !== l);
      pt(o, t.memoizedState) || (Xe = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Ha() {}
  function Va(e, t) {
    var n = Ee,
      r = st(),
      l = t(),
      o = !pt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Xe = !0)),
      (r = r.queue),
      mi(Ya.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (je !== null && je.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Cr(9, Ka.bind(null, n, r, l, t), void 0, null),
        Oe === null)
      )
        throw Error(a(349));
      dn & 30 || Qa(n, t, l);
    }
    return l;
  }
  function Qa(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ee.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ka(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ga(t) && Xa(e);
  }
  function Ya(e, t, n) {
    return n(function () {
      Ga(t) && Xa(e);
    });
  }
  function Ga(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !pt(e, n);
    } catch {
      return !0;
    }
  }
  function Xa(e) {
    var t = It(e, 1);
    t !== null && gt(t, e, 1, -1);
  }
  function Ja(e) {
    var t = xt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = ld.bind(null, Ee, e)),
      [t.memoizedState, e]
    );
  }
  function Cr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ee.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Za() {
    return st().memoizedState;
  }
  function xl(e, t, n, r) {
    var l = xt();
    (Ee.flags |= e),
      (l.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Cl(e, t, n, r) {
    var l = st();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ze !== null) {
      var u = ze.memoizedState;
      if (((o = u.destroy), r !== null && ci(r, u.deps))) {
        l.memoizedState = Cr(t, n, o, r);
        return;
      }
    }
    (Ee.flags |= e), (l.memoizedState = Cr(1 | t, n, o, r));
  }
  function qa(e, t) {
    return xl(8390656, 8, e, t);
  }
  function mi(e, t) {
    return Cl(2048, 8, e, t);
  }
  function ba(e, t) {
    return Cl(4, 2, e, t);
  }
  function es(e, t) {
    return Cl(4, 4, e, t);
  }
  function ts(e, t) {
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
  function ns(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Cl(4, 4, ts.bind(null, t, e), n)
    );
  }
  function vi() {}
  function rs(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ci(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function ls(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ci(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function os(e, t, n) {
    return dn & 21
      ? (pt(n, t) ||
          ((n = $u()), (Ee.lanes |= n), (pn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
  }
  function nd(e, t) {
    var n = pe;
    (pe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = si.transition;
    si.transition = {};
    try {
      e(!1), t();
    } finally {
      (pe = n), (si.transition = r);
    }
  }
  function is() {
    return st().memoizedState;
  }
  function rd(e, t, n) {
    var r = bt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      us(e))
    )
      as(t, n);
    else if (((n = Ma(e, t, n, r)), n !== null)) {
      var l = Ke();
      gt(n, e, r, l), ss(n, t, r);
    }
  }
  function ld(e, t, n) {
    var r = bt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (us(e)) as(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            c = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = c), pt(c, u))) {
            var d = t.interleaved;
            d === null
              ? ((l.next = l), ri(t))
              : ((l.next = d.next), (d.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ma(e, t, l, r)),
        n !== null && ((l = Ke()), gt(n, e, r, l), ss(n, t, r));
    }
  }
  function us(e) {
    var t = e.alternate;
    return e === Ee || (t !== null && t === Ee);
  }
  function as(e, t) {
    kr = El = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ss(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), go(e, n);
    }
  }
  var _l = {
      readContext: at,
      useCallback: Ae,
      useContext: Ae,
      useEffect: Ae,
      useImperativeHandle: Ae,
      useInsertionEffect: Ae,
      useLayoutEffect: Ae,
      useMemo: Ae,
      useReducer: Ae,
      useRef: Ae,
      useState: Ae,
      useDebugValue: Ae,
      useDeferredValue: Ae,
      useTransition: Ae,
      useMutableSource: Ae,
      useSyncExternalStore: Ae,
      useId: Ae,
      unstable_isNewReconciler: !1,
    },
    od = {
      readContext: at,
      useCallback: function (e, t) {
        return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: at,
      useEffect: qa,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          xl(4194308, 4, ts.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return xl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return xl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = xt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = xt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = rd.bind(null, Ee, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = xt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ja,
      useDebugValue: vi,
      useDeferredValue: function (e) {
        return (xt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ja(!1),
          t = e[0];
        return (e = nd.bind(null, e[1])), (xt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ee,
          l = xt();
        if (Se) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), Oe === null)) throw Error(a(349));
          dn & 30 || Qa(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          qa(Ya.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Cr(9, Ka.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = xt(),
          t = Oe.identifierPrefix;
        if (Se) {
          var n = zt,
            r = Tt;
          (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Er++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = td++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    id = {
      readContext: at,
      useCallback: rs,
      useContext: at,
      useEffect: mi,
      useImperativeHandle: ns,
      useInsertionEffect: ba,
      useLayoutEffect: es,
      useMemo: ls,
      useReducer: pi,
      useRef: Za,
      useState: function () {
        return pi(xr);
      },
      useDebugValue: vi,
      useDeferredValue: function (e) {
        var t = st();
        return os(t, ze.memoizedState, e);
      },
      useTransition: function () {
        var e = pi(xr)[0],
          t = st().memoizedState;
        return [e, t];
      },
      useMutableSource: Ha,
      useSyncExternalStore: Va,
      useId: is,
      unstable_isNewReconciler: !1,
    },
    ud = {
      readContext: at,
      useCallback: rs,
      useContext: at,
      useEffect: mi,
      useImperativeHandle: ns,
      useInsertionEffect: ba,
      useLayoutEffect: es,
      useMemo: ls,
      useReducer: hi,
      useRef: Za,
      useState: function () {
        return hi(xr);
      },
      useDebugValue: vi,
      useDeferredValue: function (e) {
        var t = st();
        return ze === null ? (t.memoizedState = e) : os(t, ze.memoizedState, e);
      },
      useTransition: function () {
        var e = hi(xr)[0],
          t = st().memoizedState;
        return [e, t];
      },
      useMutableSource: Ha,
      useSyncExternalStore: Va,
      useId: is,
      unstable_isNewReconciler: !1,
    };
  function mt(e, t) {
    if (e && e.defaultProps) {
      (t = W({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function yi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : W({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Rl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ln(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ke(),
        l = bt(e),
        o = jt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Xt(e, o, l)),
        t !== null && (gt(t, e, l, r), gl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ke(),
        l = bt(e),
        o = jt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Xt(e, o, l)),
        t !== null && (gt(t, e, l, r), gl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ke(),
        r = bt(e),
        l = jt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Xt(e, l, r)),
        t !== null && (gt(t, e, r, n), gl(t, e, r));
    },
  };
  function cs(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !cr(n, r) || !cr(l, o)
          : !0
    );
  }
  function fs(e, t, n) {
    var r = !1,
      l = Kt,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = at(o))
        : ((l = Ge(t) ? un : Ue.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? zn(e, l) : Kt)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Rl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function ds(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
  }
  function gi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), li(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = at(o))
      : ((o = Ge(t) ? un : Ue.current), (l.context = zn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (yi(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Rl.enqueueReplaceState(l, l.state, null),
        wl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Un(e, t) {
    try {
      var n = "",
        r = t;
      do (n += le(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function wi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Si(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var ad = typeof WeakMap == "function" ? WeakMap : Map;
  function ps(e, t, n) {
    (n = jt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        jl || ((jl = !0), ($i = r)), Si(e, t);
      }),
      n
    );
  }
  function hs(e, t, n) {
    (n = jt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Si(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          Si(e, t),
            typeof r != "function" &&
              (Zt === null ? (Zt = new Set([this])) : Zt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function ms(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new ad();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Ed.bind(null, e, t, n)), t.then(e, e));
  }
  function vs(e) {
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
  function ys(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = jt(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var sd = ee.ReactCurrentOwner,
    Xe = !1;
  function Qe(e, t, n, r) {
    t.child = e === null ? Fa(t, null, n, r) : $n(t, e.child, n, r);
  }
  function gs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Fn(t, l),
      (r = fi(e, t, n, r, o, l)),
      (n = di()),
      e !== null && !Xe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Ot(e, t, l))
        : (Se && n && Go(t), (t.flags |= 1), Qe(e, t, r, l), t.child)
    );
  }
  function ws(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Bi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Ss(e, t, o, r, l))
        : ((e = Ul(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
      var u = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : cr), n(u, r) && e.ref === t.ref)
      )
        return Ot(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = tn(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ss(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (cr(o, r) && e.ref === t.ref)
        if (((Xe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          e.flags & 131072 && (Xe = !0);
        else return (t.lanes = e.lanes), Ot(e, t, l);
    }
    return ki(e, t, n, r, l);
  }
  function ks(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          me(Wn, lt),
          (lt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            me(Wn, lt),
            (lt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          me(Wn, lt),
          (lt |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        me(Wn, lt),
        (lt |= r);
    return Qe(e, t, l, n), t.child;
  }
  function Es(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ki(e, t, n, r, l) {
    var o = Ge(n) ? un : Ue.current;
    return (
      (o = zn(t, o)),
      Fn(t, l),
      (n = fi(e, t, n, r, o, l)),
      (r = di()),
      e !== null && !Xe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Ot(e, t, l))
        : (Se && r && Go(t), (t.flags |= 1), Qe(e, t, n, l), t.child)
    );
  }
  function xs(e, t, n, r, l) {
    if (Ge(n)) {
      var o = !0;
      cl(t);
    } else o = !1;
    if ((Fn(t, l), t.stateNode === null))
      Nl(e, t), fs(t, n, r), gi(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        c = t.memoizedProps;
      u.props = c;
      var d = u.context,
        S = n.contextType;
      typeof S == "object" && S !== null
        ? (S = at(S))
        : ((S = Ge(n) ? un : Ue.current), (S = zn(t, S)));
      var N = n.getDerivedStateFromProps,
        L =
          typeof N == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      L ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== r || d !== S) && ds(t, u, r, S)),
        (Gt = !1);
      var P = t.memoizedState;
      (u.state = P),
        wl(t, r, u, l),
        (d = t.memoizedState),
        c !== r || P !== d || Ye.current || Gt
          ? (typeof N == "function" && (yi(t, n, N, r), (d = t.memoizedState)),
            (c = Gt || cs(t, n, c, r, P, d, S))
              ? (L ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = d)),
            (u.props = r),
            (u.state = d),
            (u.context = S),
            (r = c))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        Ua(e, t),
        (c = t.memoizedProps),
        (S = t.type === t.elementType ? c : mt(t.type, c)),
        (u.props = S),
        (L = t.pendingProps),
        (P = u.context),
        (d = n.contextType),
        typeof d == "object" && d !== null
          ? (d = at(d))
          : ((d = Ge(n) ? un : Ue.current), (d = zn(t, d)));
      var A = n.getDerivedStateFromProps;
      (N =
        typeof A == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== L || P !== d) && ds(t, u, r, d)),
        (Gt = !1),
        (P = t.memoizedState),
        (u.state = P),
        wl(t, r, u, l);
      var H = t.memoizedState;
      c !== L || P !== H || Ye.current || Gt
        ? (typeof A == "function" && (yi(t, n, A, r), (H = t.memoizedState)),
          (S = Gt || cs(t, n, S, r, P, H, d) || !1)
            ? (N ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, H, d),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, H, d)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = H)),
          (u.props = r),
          (u.state = H),
          (u.context = d),
          (r = S))
        : (typeof u.componentDidUpdate != "function" ||
            (c === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ei(e, t, n, r, o, l);
  }
  function Ei(e, t, n, r, l, o) {
    Es(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && Na(t, n, !1), Ot(e, t, o);
    (r = t.stateNode), (sd.current = t);
    var c =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = $n(t, e.child, null, o)), (t.child = $n(t, null, c, o)))
        : Qe(e, t, c, o),
      (t.memoizedState = r.state),
      l && Na(t, n, !0),
      t.child
    );
  }
  function Cs(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ra(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ra(e, t.context, !1),
      oi(e, t.containerInfo);
  }
  function _s(e, t, n, r, l) {
    return On(), qo(l), (t.flags |= 256), Qe(e, t, n, r), t.child;
  }
  var xi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ci(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Rs(e, t, n) {
    var r = t.pendingProps,
      l = ke.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      c
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      me(ke, l & 1),
      e === null)
    )
      return (
        Zo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((u = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: "hidden", children: u }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = Al(u, r, 0, null)),
                (e = yn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Ci(n)),
                (t.memoizedState = xi),
                e)
              : _i(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((c = l.dehydrated), c !== null)))
      return cd(e, t, u, r, c, l, n);
    if (o) {
      (o = r.fallback), (u = t.mode), (l = e.child), (c = l.sibling);
      var d = { mode: "hidden", children: r.children };
      return (
        !(u & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = d),
            (t.deletions = null))
          : ((r = tn(l, d)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        c !== null ? (o = tn(c, o)) : ((o = yn(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? Ci(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = xi),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = tn(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function _i(e, t) {
    return (
      (t = Al({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Pl(e, t, n, r) {
    return (
      r !== null && qo(r),
      $n(t, e.child, null, n),
      (e = _i(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function cd(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = wi(Error(a(422)))), Pl(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Al({ mode: "visible", children: r.children }, l, 0, null)),
            (o = yn(o, l, u, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            t.mode & 1 && $n(t, e.child, null, u),
            (t.child.memoizedState = Ci(u)),
            (t.memoizedState = xi),
            o);
    if (!(t.mode & 1)) return Pl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var c = r.dgst;
      return (
        (r = c), (o = Error(a(419))), (r = wi(o, r, void 0)), Pl(e, t, u, r)
      );
    }
    if (((c = (u & e.childLanes) !== 0), Xe || c)) {
      if (((r = Oe), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | u) ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), It(e, l), gt(r, e, l, -1));
      }
      return Wi(), (r = wi(Error(a(421)))), Pl(e, t, u, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = xd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (rt = Vt(l.nextSibling)),
        (nt = t),
        (Se = !0),
        (ht = null),
        e !== null &&
          ((it[ut++] = Tt),
          (it[ut++] = zt),
          (it[ut++] = an),
          (Tt = e.id),
          (zt = e.overflow),
          (an = t)),
        (t = _i(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ps(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ni(e.return, t, n);
  }
  function Ri(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function Ns(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Qe(e, t, r.children, n), (r = ke.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ps(e, n, t);
          else if (e.tag === 19) Ps(e, n, t);
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
      r &= 1;
    }
    if ((me(ke, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && Sl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Ri(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Sl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Ri(t, !0, n, null, o);
          break;
        case "together":
          Ri(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Nl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ot(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (pn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = tn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function fd(e, t, n) {
    switch (t.tag) {
      case 3:
        Cs(t), On();
        break;
      case 5:
        Ba(t);
        break;
      case 1:
        Ge(t.type) && cl(t);
        break;
      case 4:
        oi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        me(vl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (me(ke, ke.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? Rs(e, t, n)
              : (me(ke, ke.current & 1),
                (e = Ot(e, t, n)),
                e !== null ? e.sibling : null);
        me(ke, ke.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Ns(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          me(ke, ke.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ks(e, t, n);
    }
    return Ot(e, t, n);
  }
  var Ls, Pi, Ts, zs;
  (Ls = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Pi = function () {}),
    (Ts = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), fn(Et.current);
        var o = null;
        switch (n) {
          case "input":
            (l = to(e, l)), (r = to(e, r)), (o = []);
            break;
          case "select":
            (l = W({}, l, { value: void 0 })),
              (r = W({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = lo(e, l)), (r = lo(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ul);
        }
        io(n, r);
        var u;
        n = null;
        for (S in l)
          if (!r.hasOwnProperty(S) && l.hasOwnProperty(S) && l[S] != null)
            if (S === "style") {
              var c = l[S];
              for (u in c) c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              S !== "dangerouslySetInnerHTML" &&
                S !== "children" &&
                S !== "suppressContentEditableWarning" &&
                S !== "suppressHydrationWarning" &&
                S !== "autoFocus" &&
                (f.hasOwnProperty(S)
                  ? o || (o = [])
                  : (o = o || []).push(S, null));
        for (S in r) {
          var d = r[S];
          if (
            ((c = l != null ? l[S] : void 0),
            r.hasOwnProperty(S) && d !== c && (d != null || c != null))
          )
            if (S === "style")
              if (c) {
                for (u in c)
                  !c.hasOwnProperty(u) ||
                    (d && d.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in d)
                  d.hasOwnProperty(u) &&
                    c[u] !== d[u] &&
                    (n || (n = {}), (n[u] = d[u]));
              } else n || (o || (o = []), o.push(S, n)), (n = d);
            else
              S === "dangerouslySetInnerHTML"
                ? ((d = d ? d.__html : void 0),
                  (c = c ? c.__html : void 0),
                  d != null && c !== d && (o = o || []).push(S, d))
                : S === "children"
                  ? (typeof d != "string" && typeof d != "number") ||
                    (o = o || []).push(S, "" + d)
                  : S !== "suppressContentEditableWarning" &&
                    S !== "suppressHydrationWarning" &&
                    (f.hasOwnProperty(S)
                      ? (d != null && S === "onScroll" && ve("scroll", e),
                        o || c === d || (o = []))
                      : (o = o || []).push(S, d));
        }
        n && (o = o || []).push("style", n);
        var S = o;
        (t.updateQueue = S) && (t.flags |= 4);
      }
    }),
    (zs = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function _r(e, t) {
    if (!Se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function We(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function dd(e, t, n) {
    var r = t.pendingProps;
    switch ((Xo(t), t.tag)) {
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
        return We(t), null;
      case 1:
        return Ge(t.type) && sl(), We(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Mn(),
          ye(Ye),
          ye(Ue),
          ai(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (hl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), ht !== null && (Mi(ht), (ht = null)))),
          Pi(e, t),
          We(t),
          null
        );
      case 5:
        ii(t);
        var l = fn(Sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Ts(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return We(t), null;
          }
          if (((e = fn(Et.current)), hl(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[kt] = t), (r[mr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ve("cancel", r), ve("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < dr.length; l++) ve(dr[l], r);
                break;
              case "source":
                ve("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ve("error", r), ve("load", r);
                break;
              case "details":
                ve("toggle", r);
                break;
              case "input":
                fu(r, o), ve("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  ve("invalid", r);
                break;
              case "textarea":
                hu(r, o), ve("invalid", r);
            }
            io(n, o), (l = null);
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var c = o[u];
                u === "children"
                  ? typeof c == "string"
                    ? r.textContent !== c &&
                      (o.suppressHydrationWarning !== !0 &&
                        il(r.textContent, c, e),
                      (l = ["children", c]))
                    : typeof c == "number" &&
                      r.textContent !== "" + c &&
                      (o.suppressHydrationWarning !== !0 &&
                        il(r.textContent, c, e),
                      (l = ["children", "" + c]))
                  : f.hasOwnProperty(u) &&
                    c != null &&
                    u === "onScroll" &&
                    ve("scroll", r);
              }
            switch (n) {
              case "input":
                q(r), pu(r, o, !0);
                break;
              case "textarea":
                q(r), vu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = ul);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = yu(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === "select" &&
                        ((u = e),
                        r.multiple
                          ? (u.multiple = !0)
                          : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[kt] = t),
              (e[mr] = r),
              Ls(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = uo(n, r)), n)) {
                case "dialog":
                  ve("cancel", e), ve("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ve("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < dr.length; l++) ve(dr[l], e);
                  l = r;
                  break;
                case "source":
                  ve("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ve("error", e), ve("load", e), (l = r);
                  break;
                case "details":
                  ve("toggle", e), (l = r);
                  break;
                case "input":
                  fu(e, r), (l = to(e, r)), ve("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = W({}, r, { value: void 0 })),
                    ve("invalid", e);
                  break;
                case "textarea":
                  hu(e, r), (l = lo(e, r)), ve("invalid", e);
                  break;
                default:
                  l = r;
              }
              io(n, l), (c = l);
              for (o in c)
                if (c.hasOwnProperty(o)) {
                  var d = c[o];
                  o === "style"
                    ? Su(e, d)
                    : o === "dangerouslySetInnerHTML"
                      ? ((d = d ? d.__html : void 0), d != null && gu(e, d))
                      : o === "children"
                        ? typeof d == "string"
                          ? (n !== "textarea" || d !== "") && Yn(e, d)
                          : typeof d == "number" && Yn(e, "" + d)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (f.hasOwnProperty(o)
                            ? d != null && o === "onScroll" && ve("scroll", e)
                            : d != null && K(e, o, d, u));
                }
              switch (n) {
                case "input":
                  q(e), pu(e, r, !1);
                  break;
                case "textarea":
                  q(e), vu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + se(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? wn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        wn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ul);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return We(t), null;
      case 6:
        if (e && t.stateNode != null) zs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = fn(Sr.current)), fn(Et.current), hl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[kt] = t),
              (o = r.nodeValue !== n) && ((e = nt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  il(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    il(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[kt] = t),
              (t.stateNode = r);
        }
        return We(t), null;
      case 13:
        if (
          (ye(ke),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && rt !== null && t.mode & 1 && !(t.flags & 128))
            Oa(), On(), (t.flags |= 98560), (o = !1);
          else if (((o = hl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(a(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(a(317));
              o[kt] = t;
            } else
              On(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            We(t), (o = !1);
          } else ht !== null && (Mi(ht), (ht = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ke.current & 1 ? Ie === 0 && (Ie = 3) : Wi())),
            t.updateQueue !== null && (t.flags |= 4),
            We(t),
            null);
      case 4:
        return (
          Mn(),
          Pi(e, t),
          e === null && pr(t.stateNode.containerInfo),
          We(t),
          null
        );
      case 10:
        return ti(t.type._context), We(t), null;
      case 17:
        return Ge(t.type) && sl(), We(t), null;
      case 19:
        if ((ye(ke), (o = t.memoizedState), o === null)) return We(t), null;
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) _r(o, !1);
          else {
            if (Ie !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = Sl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      _r(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return me(ke, (ke.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ne() > Bn &&
              ((t.flags |= 128), (r = !0), _r(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Sl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                _r(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !u.alternate &&
                  !Se)
              )
                return We(t), null;
            } else
              2 * Ne() - o.renderingStartTime > Bn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), _r(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (o.last = u));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ne()),
            (t.sibling = null),
            (n = ke.current),
            me(ke, r ? (n & 1) | 2 : n & 1),
            t)
          : (We(t), null);
      case 22:
      case 23:
        return (
          Ai(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? lt & 1073741824 &&
              (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : We(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function pd(e, t) {
    switch ((Xo(t), t.tag)) {
      case 1:
        return (
          Ge(t.type) && sl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Mn(),
          ye(Ye),
          ye(Ue),
          ai(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ii(t), null;
      case 13:
        if (
          (ye(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          On();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ye(ke), null;
      case 4:
        return Mn(), null;
      case 10:
        return ti(t.type._context), null;
      case 22:
      case 23:
        return Ai(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ll = !1,
    Be = !1,
    hd = typeof WeakSet == "function" ? WeakSet : Set,
    B = null;
  function An(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Re(e, t, r);
        }
      else n.current = null;
  }
  function Ni(e, t, n) {
    try {
      n();
    } catch (r) {
      Re(e, t, r);
    }
  }
  var Is = !1;
  function md(e, t) {
    if (((Ao = Xr), (e = ca()), Io(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              c = -1,
              d = -1,
              S = 0,
              N = 0,
              L = e,
              P = null;
            t: for (;;) {
              for (
                var A;
                L !== n || (l !== 0 && L.nodeType !== 3) || (c = u + l),
                  L !== o || (r !== 0 && L.nodeType !== 3) || (d = u + r),
                  L.nodeType === 3 && (u += L.nodeValue.length),
                  (A = L.firstChild) !== null;

              )
                (P = L), (L = A);
              for (;;) {
                if (L === e) break t;
                if (
                  (P === n && ++S === l && (c = u),
                  P === o && ++N === r && (d = u),
                  (A = L.nextSibling) !== null)
                )
                  break;
                (L = P), (P = L.parentNode);
              }
              L = A;
            }
            n = c === -1 || d === -1 ? null : { start: c, end: d };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Wo = { focusedElem: e, selectionRange: n }, Xr = !1, B = t;
      B !== null;

    )
      if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (B = e);
      else
        for (; B !== null; ) {
          t = B;
          try {
            var H = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (H !== null) {
                    var Q = H.memoizedProps,
                      Le = H.memoizedState,
                      y = t.stateNode,
                      h = y.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Q : mt(t.type, Q),
                        Le,
                      );
                    y.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var g = t.stateNode.containerInfo;
                  g.nodeType === 1
                    ? (g.textContent = "")
                    : g.nodeType === 9 &&
                      g.documentElement &&
                      g.removeChild(g.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (z) {
            Re(t, t.return, z);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (B = e);
            break;
          }
          B = t.return;
        }
    return (H = Is), (Is = !1), H;
  }
  function Rr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && Ni(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Tl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Li(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function js(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), js(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[kt],
          delete t[mr],
          delete t[Qo],
          delete t[Zf],
          delete t[qf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Os(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function $s(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Os(e.return)) return null;
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
  function Ti(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ul));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ti(e, t, n), e = e.sibling; e !== null; )
        Ti(e, t, n), (e = e.sibling);
  }
  function zi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (zi(e, t, n), e = e.sibling; e !== null; )
        zi(e, t, n), (e = e.sibling);
  }
  var De = null,
    vt = !1;
  function Jt(e, t, n) {
    for (n = n.child; n !== null; ) Ds(e, t, n), (n = n.sibling);
  }
  function Ds(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(Hr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Be || An(n, t);
      case 6:
        var r = De,
          l = vt;
        (De = null),
          Jt(e, t, n),
          (De = r),
          (vt = l),
          De !== null &&
            (vt
              ? ((e = De),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : De.removeChild(n.stateNode));
        break;
      case 18:
        De !== null &&
          (vt
            ? ((e = De),
              (n = n.stateNode),
              e.nodeType === 8
                ? Vo(e.parentNode, n)
                : e.nodeType === 1 && Vo(e, n),
              lr(e))
            : Vo(De, n.stateNode));
        break;
      case 4:
        (r = De),
          (l = vt),
          (De = n.stateNode.containerInfo),
          (vt = !0),
          Jt(e, t, n),
          (De = r),
          (vt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Be &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            (o = o.tag),
              u !== void 0 && (o & 2 || o & 4) && Ni(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        Jt(e, t, n);
        break;
      case 1:
        if (
          !Be &&
          (An(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (c) {
            Re(n, t, c);
          }
        Jt(e, t, n);
        break;
      case 21:
        Jt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Be = (r = Be) || n.memoizedState !== null), Jt(e, t, n), (Be = r))
          : Jt(e, t, n);
        break;
      default:
        Jt(e, t, n);
    }
  }
  function Fs(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new hd()),
        t.forEach(function (r) {
          var l = Cd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            u = t,
            c = u;
          e: for (; c !== null; ) {
            switch (c.tag) {
              case 5:
                (De = c.stateNode), (vt = !1);
                break e;
              case 3:
                (De = c.stateNode.containerInfo), (vt = !0);
                break e;
              case 4:
                (De = c.stateNode.containerInfo), (vt = !0);
                break e;
            }
            c = c.return;
          }
          if (De === null) throw Error(a(160));
          Ds(o, u, l), (De = null), (vt = !1);
          var d = l.alternate;
          d !== null && (d.return = null), (l.return = null);
        } catch (S) {
          Re(l, t, S);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Ms(t, e), (t = t.sibling);
  }
  function Ms(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((yt(t, e), Ct(e), r & 4)) {
          try {
            Rr(3, e, e.return), Tl(3, e);
          } catch (Q) {
            Re(e, e.return, Q);
          }
          try {
            Rr(5, e, e.return);
          } catch (Q) {
            Re(e, e.return, Q);
          }
        }
        break;
      case 1:
        yt(t, e), Ct(e), r & 512 && n !== null && An(n, n.return);
        break;
      case 5:
        if (
          (yt(t, e),
          Ct(e),
          r & 512 && n !== null && An(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Yn(l, "");
          } catch (Q) {
            Re(e, e.return, Q);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            c = e.type,
            d = e.updateQueue;
          if (((e.updateQueue = null), d !== null))
            try {
              c === "input" && o.type === "radio" && o.name != null && du(l, o),
                uo(c, u);
              var S = uo(c, o);
              for (u = 0; u < d.length; u += 2) {
                var N = d[u],
                  L = d[u + 1];
                N === "style"
                  ? Su(l, L)
                  : N === "dangerouslySetInnerHTML"
                    ? gu(l, L)
                    : N === "children"
                      ? Yn(l, L)
                      : K(l, N, L, S);
              }
              switch (c) {
                case "input":
                  no(l, o);
                  break;
                case "textarea":
                  mu(l, o);
                  break;
                case "select":
                  var P = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var A = o.value;
                  A != null
                    ? wn(l, !!o.multiple, A, !1)
                    : P !== !!o.multiple &&
                      (o.defaultValue != null
                        ? wn(l, !!o.multiple, o.defaultValue, !0)
                        : wn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[mr] = o;
            } catch (Q) {
              Re(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((yt(t, e), Ct(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (Q) {
            Re(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (
          (yt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            lr(t.containerInfo);
          } catch (Q) {
            Re(e, e.return, Q);
          }
        break;
      case 4:
        yt(t, e), Ct(e);
        break;
      case 13:
        yt(t, e),
          Ct(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Oi = Ne())),
          r & 4 && Fs(e);
        break;
      case 22:
        if (
          ((N = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Be = (S = Be) || N), yt(t, e), (Be = S)) : yt(t, e),
          Ct(e),
          r & 8192)
        ) {
          if (
            ((S = e.memoizedState !== null),
            (e.stateNode.isHidden = S) && !N && e.mode & 1)
          )
            for (B = e, N = e.child; N !== null; ) {
              for (L = B = N; B !== null; ) {
                switch (((P = B), (A = P.child), P.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Rr(4, P, P.return);
                    break;
                  case 1:
                    An(P, P.return);
                    var H = P.stateNode;
                    if (typeof H.componentWillUnmount == "function") {
                      (r = P), (n = P.return);
                      try {
                        (t = r),
                          (H.props = t.memoizedProps),
                          (H.state = t.memoizedState),
                          H.componentWillUnmount();
                      } catch (Q) {
                        Re(r, n, Q);
                      }
                    }
                    break;
                  case 5:
                    An(P, P.return);
                    break;
                  case 22:
                    if (P.memoizedState !== null) {
                      Ws(L);
                      continue;
                    }
                }
                A !== null ? ((A.return = P), (B = A)) : Ws(L);
              }
              N = N.sibling;
            }
          e: for (N = null, L = e; ; ) {
            if (L.tag === 5) {
              if (N === null) {
                N = L;
                try {
                  (l = L.stateNode),
                    S
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((c = L.stateNode),
                        (d = L.memoizedProps.style),
                        (u =
                          d != null && d.hasOwnProperty("display")
                            ? d.display
                            : null),
                        (c.style.display = wu("display", u)));
                } catch (Q) {
                  Re(e, e.return, Q);
                }
              }
            } else if (L.tag === 6) {
              if (N === null)
                try {
                  L.stateNode.nodeValue = S ? "" : L.memoizedProps;
                } catch (Q) {
                  Re(e, e.return, Q);
                }
            } else if (
              ((L.tag !== 22 && L.tag !== 23) ||
                L.memoizedState === null ||
                L === e) &&
              L.child !== null
            ) {
              (L.child.return = L), (L = L.child);
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              N === L && (N = null), (L = L.return);
            }
            N === L && (N = null),
              (L.sibling.return = L.return),
              (L = L.sibling);
          }
        }
        break;
      case 19:
        yt(t, e), Ct(e), r & 4 && Fs(e);
        break;
      case 21:
        break;
      default:
        yt(t, e), Ct(e);
    }
  }
  function Ct(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Os(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Yn(l, ""), (r.flags &= -33));
            var o = $s(e);
            zi(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              c = $s(e);
            Ti(e, c, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (d) {
        Re(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function vd(e, t, n) {
    (B = e), Us(e);
  }
  function Us(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
      var l = B,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Ll;
        if (!u) {
          var c = l.alternate,
            d = (c !== null && c.memoizedState !== null) || Be;
          c = Ll;
          var S = Be;
          if (((Ll = u), (Be = d) && !S))
            for (B = l; B !== null; )
              (u = B),
                (d = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? Bs(l)
                  : d !== null
                    ? ((d.return = u), (B = d))
                    : Bs(l);
          for (; o !== null; ) (B = o), Us(o), (o = o.sibling);
          (B = l), (Ll = c), (Be = S);
        }
        As(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (B = o)) : As(e);
    }
  }
  function As(e) {
    for (; B !== null; ) {
      var t = B;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Be || Tl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Be)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : mt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var o = t.updateQueue;
                o !== null && Wa(t, o, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Wa(t, u, n);
                }
                break;
              case 5:
                var c = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = c;
                  var d = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d.autoFocus && n.focus();
                      break;
                    case "img":
                      d.src && (n.src = d.src);
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
                  var S = t.alternate;
                  if (S !== null) {
                    var N = S.memoizedState;
                    if (N !== null) {
                      var L = N.dehydrated;
                      L !== null && lr(L);
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
          Be || (t.flags & 512 && Li(t));
        } catch (P) {
          Re(t, t.return, P);
        }
      }
      if (t === e) {
        B = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Ws(e) {
    for (; B !== null; ) {
      var t = B;
      if (t === e) {
        B = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Bs(e) {
    for (; B !== null; ) {
      var t = B;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Tl(4, t);
            } catch (d) {
              Re(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                Re(t, l, d);
              }
            }
            var o = t.return;
            try {
              Li(t);
            } catch (d) {
              Re(t, o, d);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Li(t);
            } catch (d) {
              Re(t, u, d);
            }
        }
      } catch (d) {
        Re(t, t.return, d);
      }
      if (t === e) {
        B = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        (c.return = t.return), (B = c);
        break;
      }
      B = t.return;
    }
  }
  var yd = Math.ceil,
    zl = ee.ReactCurrentDispatcher,
    Ii = ee.ReactCurrentOwner,
    ct = ee.ReactCurrentBatchConfig,
    ie = 0,
    Oe = null,
    Te = null,
    Fe = 0,
    lt = 0,
    Wn = Qt(0),
    Ie = 0,
    Pr = null,
    pn = 0,
    Il = 0,
    ji = 0,
    Nr = null,
    Je = null,
    Oi = 0,
    Bn = 1 / 0,
    $t = null,
    jl = !1,
    $i = null,
    Zt = null,
    Ol = !1,
    qt = null,
    $l = 0,
    Lr = 0,
    Di = null,
    Dl = -1,
    Fl = 0;
  function Ke() {
    return ie & 6 ? Ne() : Dl !== -1 ? Dl : (Dl = Ne());
  }
  function bt(e) {
    return e.mode & 1
      ? ie & 2 && Fe !== 0
        ? Fe & -Fe
        : ed.transition !== null
          ? (Fl === 0 && (Fl = $u()), Fl)
          : ((e = pe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Vu(e.type))),
            e)
      : 1;
  }
  function gt(e, t, n, r) {
    if (50 < Lr) throw ((Lr = 0), (Di = null), Error(a(185)));
    bn(e, n, r),
      (!(ie & 2) || e !== Oe) &&
        (e === Oe && (!(ie & 2) && (Il |= n), Ie === 4 && en(e, Fe)),
        Ze(e, r),
        n === 1 &&
          ie === 0 &&
          !(t.mode & 1) &&
          ((Bn = Ne() + 500), fl && Yt()));
  }
  function Ze(e, t) {
    var n = e.callbackNode;
    bc(e, t);
    var r = Kr(e, e === Oe ? Fe : 0);
    if (r === 0)
      n !== null && Iu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Iu(n), t === 1))
        e.tag === 0 ? bf(Vs.bind(null, e)) : La(Vs.bind(null, e)),
          Xf(function () {
            !(ie & 6) && Yt();
          }),
          (n = null);
      else {
        switch (Du(r)) {
          case 1:
            n = mo;
            break;
          case 4:
            n = ju;
            break;
          case 16:
            n = Br;
            break;
          case 536870912:
            n = Ou;
            break;
          default:
            n = Br;
        }
        n = qs(n, Hs.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Hs(e, t) {
    if (((Dl = -1), (Fl = 0), ie & 6)) throw Error(a(327));
    var n = e.callbackNode;
    if (Hn() && e.callbackNode !== n) return null;
    var r = Kr(e, e === Oe ? Fe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ml(e, r);
    else {
      t = r;
      var l = ie;
      ie |= 2;
      var o = Ks();
      (Oe !== e || Fe !== t) && (($t = null), (Bn = Ne() + 500), mn(e, t));
      do
        try {
          Sd();
          break;
        } catch (c) {
          Qs(e, c);
        }
      while (!0);
      ei(),
        (zl.current = o),
        (ie = l),
        Te !== null ? (t = 0) : ((Oe = null), (Fe = 0), (t = Ie));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = vo(e)), l !== 0 && ((r = l), (t = Fi(e, l)))),
        t === 1)
      )
        throw ((n = Pr), mn(e, 0), en(e, r), Ze(e, Ne()), n);
      if (t === 6) en(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !gd(l) &&
            ((t = Ml(e, r)),
            t === 2 && ((o = vo(e)), o !== 0 && ((r = o), (t = Fi(e, o)))),
            t === 1))
        )
          throw ((n = Pr), mn(e, 0), en(e, r), Ze(e, Ne()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            vn(e, Je, $t);
            break;
          case 3:
            if (
              (en(e, r),
              (r & 130023424) === r && ((t = Oi + 500 - Ne()), 10 < t))
            ) {
              if (Kr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ke(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Ho(vn.bind(null, e, Je, $t), t);
              break;
            }
            vn(e, Je, $t);
            break;
          case 4:
            if ((en(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - dt(r);
              (o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o);
            }
            if (
              ((r = l),
              (r = Ne() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * yd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Ho(vn.bind(null, e, Je, $t), r);
              break;
            }
            vn(e, Je, $t);
            break;
          case 5:
            vn(e, Je, $t);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Ze(e, Ne()), e.callbackNode === n ? Hs.bind(null, e) : null;
  }
  function Fi(e, t) {
    var n = Nr;
    return (
      e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256),
      (e = Ml(e, t)),
      e !== 2 && ((t = Je), (Je = n), t !== null && Mi(t)),
      e
    );
  }
  function Mi(e) {
    Je === null ? (Je = e) : Je.push.apply(Je, e);
  }
  function gd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!pt(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
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
  function en(e, t) {
    for (
      t &= ~ji,
        t &= ~Il,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - dt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Vs(e) {
    if (ie & 6) throw Error(a(327));
    Hn();
    var t = Kr(e, 0);
    if (!(t & 1)) return Ze(e, Ne()), null;
    var n = Ml(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = vo(e);
      r !== 0 && ((t = r), (n = Fi(e, r)));
    }
    if (n === 1) throw ((n = Pr), mn(e, 0), en(e, t), Ze(e, Ne()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      vn(e, Je, $t),
      Ze(e, Ne()),
      null
    );
  }
  function Ui(e, t) {
    var n = ie;
    ie |= 1;
    try {
      return e(t);
    } finally {
      (ie = n), ie === 0 && ((Bn = Ne() + 500), fl && Yt());
    }
  }
  function hn(e) {
    qt !== null && qt.tag === 0 && !(ie & 6) && Hn();
    var t = ie;
    ie |= 1;
    var n = ct.transition,
      r = pe;
    try {
      if (((ct.transition = null), (pe = 1), e)) return e();
    } finally {
      (pe = r), (ct.transition = n), (ie = t), !(ie & 6) && Yt();
    }
  }
  function Ai() {
    (lt = Wn.current), ye(Wn);
  }
  function mn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Gf(n)), Te !== null))
      for (n = Te.return; n !== null; ) {
        var r = n;
        switch ((Xo(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && sl();
            break;
          case 3:
            Mn(), ye(Ye), ye(Ue), ai();
            break;
          case 5:
            ii(r);
            break;
          case 4:
            Mn();
            break;
          case 13:
            ye(ke);
            break;
          case 19:
            ye(ke);
            break;
          case 10:
            ti(r.type._context);
            break;
          case 22:
          case 23:
            Ai();
        }
        n = n.return;
      }
    if (
      ((Oe = e),
      (Te = e = tn(e.current, null)),
      (Fe = lt = t),
      (Ie = 0),
      (Pr = null),
      (ji = Il = pn = 0),
      (Je = Nr = null),
      cn !== null)
    ) {
      for (t = 0; t < cn.length; t++)
        if (((n = cn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            (o.next = l), (r.next = u);
          }
          n.pending = r;
        }
      cn = null;
    }
    return e;
  }
  function Qs(e, t) {
    do {
      var n = Te;
      try {
        if ((ei(), (kl.current = _l), El)) {
          for (var r = Ee.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          El = !1;
        }
        if (
          ((dn = 0),
          (je = ze = Ee = null),
          (kr = !1),
          (Er = 0),
          (Ii.current = null),
          n === null || n.return === null)
        ) {
          (Ie = 1), (Pr = t), (Te = null);
          break;
        }
        e: {
          var o = e,
            u = n.return,
            c = n,
            d = t;
          if (
            ((t = Fe),
            (c.flags |= 32768),
            d !== null && typeof d == "object" && typeof d.then == "function")
          ) {
            var S = d,
              N = c,
              L = N.tag;
            if (!(N.mode & 1) && (L === 0 || L === 11 || L === 15)) {
              var P = N.alternate;
              P
                ? ((N.updateQueue = P.updateQueue),
                  (N.memoizedState = P.memoizedState),
                  (N.lanes = P.lanes))
                : ((N.updateQueue = null), (N.memoizedState = null));
            }
            var A = vs(u);
            if (A !== null) {
              (A.flags &= -257),
                ys(A, u, c, o, t),
                A.mode & 1 && ms(o, S, t),
                (t = A),
                (d = S);
              var H = t.updateQueue;
              if (H === null) {
                var Q = new Set();
                Q.add(d), (t.updateQueue = Q);
              } else H.add(d);
              break e;
            } else {
              if (!(t & 1)) {
                ms(o, S, t), Wi();
                break e;
              }
              d = Error(a(426));
            }
          } else if (Se && c.mode & 1) {
            var Le = vs(u);
            if (Le !== null) {
              !(Le.flags & 65536) && (Le.flags |= 256),
                ys(Le, u, c, o, t),
                qo(Un(d, c));
              break e;
            }
          }
          (o = d = Un(d, c)),
            Ie !== 4 && (Ie = 2),
            Nr === null ? (Nr = [o]) : Nr.push(o),
            (o = u);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = ps(o, d, t);
                Aa(o, y);
                break e;
              case 1:
                c = d;
                var h = o.type,
                  g = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (g !== null &&
                      typeof g.componentDidCatch == "function" &&
                      (Zt === null || !Zt.has(g))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var z = hs(o, c, t);
                  Aa(o, z);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Gs(n);
      } catch (G) {
        (t = G), Te === n && n !== null && (Te = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ks() {
    var e = zl.current;
    return (zl.current = _l), e === null ? _l : e;
  }
  function Wi() {
    (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4),
      Oe === null || (!(pn & 268435455) && !(Il & 268435455)) || en(Oe, Fe);
  }
  function Ml(e, t) {
    var n = ie;
    ie |= 2;
    var r = Ks();
    (Oe !== e || Fe !== t) && (($t = null), mn(e, t));
    do
      try {
        wd();
        break;
      } catch (l) {
        Qs(e, l);
      }
    while (!0);
    if ((ei(), (ie = n), (zl.current = r), Te !== null)) throw Error(a(261));
    return (Oe = null), (Fe = 0), Ie;
  }
  function wd() {
    for (; Te !== null; ) Ys(Te);
  }
  function Sd() {
    for (; Te !== null && !Vc(); ) Ys(Te);
  }
  function Ys(e) {
    var t = Zs(e.alternate, e, lt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Gs(e) : (Te = t),
      (Ii.current = null);
  }
  function Gs(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = pd(n, t)), n !== null)) {
          (n.flags &= 32767), (Te = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ie = 6), (Te = null);
          return;
        }
      } else if (((n = dd(n, t, lt)), n !== null)) {
        Te = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    Ie === 0 && (Ie = 5);
  }
  function vn(e, t, n) {
    var r = pe,
      l = ct.transition;
    try {
      (ct.transition = null), (pe = 1), kd(e, t, n, r);
    } finally {
      (ct.transition = l), (pe = r);
    }
    return null;
  }
  function kd(e, t, n, r) {
    do Hn();
    while (qt !== null);
    if (ie & 6) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (ef(e, o),
      e === Oe && ((Te = Oe = null), (Fe = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Ol ||
        ((Ol = !0),
        qs(Br, function () {
          return Hn(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = ct.transition), (ct.transition = null);
      var u = pe;
      pe = 1;
      var c = ie;
      (ie |= 4),
        (Ii.current = null),
        md(e, n),
        Ms(n, e),
        Wf(Wo),
        (Xr = !!Ao),
        (Wo = Ao = null),
        (e.current = n),
        vd(n),
        Qc(),
        (ie = c),
        (pe = u),
        (ct.transition = o);
    } else e.current = n;
    if (
      (Ol && ((Ol = !1), (qt = e), ($l = l)),
      (o = e.pendingLanes),
      o === 0 && (Zt = null),
      Gc(n.stateNode),
      Ze(e, Ne()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (jl) throw ((jl = !1), (e = $i), ($i = null), e);
    return (
      $l & 1 && e.tag !== 0 && Hn(),
      (o = e.pendingLanes),
      o & 1 ? (e === Di ? Lr++ : ((Lr = 0), (Di = e))) : (Lr = 0),
      Yt(),
      null
    );
  }
  function Hn() {
    if (qt !== null) {
      var e = Du($l),
        t = ct.transition,
        n = pe;
      try {
        if (((ct.transition = null), (pe = 16 > e ? 16 : e), qt === null))
          var r = !1;
        else {
          if (((e = qt), (qt = null), ($l = 0), ie & 6)) throw Error(a(331));
          var l = ie;
          for (ie |= 4, B = e.current; B !== null; ) {
            var o = B,
              u = o.child;
            if (B.flags & 16) {
              var c = o.deletions;
              if (c !== null) {
                for (var d = 0; d < c.length; d++) {
                  var S = c[d];
                  for (B = S; B !== null; ) {
                    var N = B;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rr(8, N, o);
                    }
                    var L = N.child;
                    if (L !== null) (L.return = N), (B = L);
                    else
                      for (; B !== null; ) {
                        N = B;
                        var P = N.sibling,
                          A = N.return;
                        if ((js(N), N === S)) {
                          B = null;
                          break;
                        }
                        if (P !== null) {
                          (P.return = A), (B = P);
                          break;
                        }
                        B = A;
                      }
                  }
                }
                var H = o.alternate;
                if (H !== null) {
                  var Q = H.child;
                  if (Q !== null) {
                    H.child = null;
                    do {
                      var Le = Q.sibling;
                      (Q.sibling = null), (Q = Le);
                    } while (Q !== null);
                  }
                }
                B = o;
              }
            }
            if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (B = u);
            else
              e: for (; B !== null; ) {
                if (((o = B), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(9, o, o.return);
                  }
                var y = o.sibling;
                if (y !== null) {
                  (y.return = o.return), (B = y);
                  break e;
                }
                B = o.return;
              }
          }
          var h = e.current;
          for (B = h; B !== null; ) {
            u = B;
            var g = u.child;
            if (u.subtreeFlags & 2064 && g !== null) (g.return = u), (B = g);
            else
              e: for (u = h; B !== null; ) {
                if (((c = B), c.flags & 2048))
                  try {
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Tl(9, c);
                    }
                  } catch (G) {
                    Re(c, c.return, G);
                  }
                if (c === u) {
                  B = null;
                  break e;
                }
                var z = c.sibling;
                if (z !== null) {
                  (z.return = c.return), (B = z);
                  break e;
                }
                B = c.return;
              }
          }
          if (
            ((ie = l),
            Yt(),
            St && typeof St.onPostCommitFiberRoot == "function")
          )
            try {
              St.onPostCommitFiberRoot(Hr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (pe = n), (ct.transition = t);
      }
    }
    return !1;
  }
  function Xs(e, t, n) {
    (t = Un(n, t)),
      (t = ps(e, t, 1)),
      (e = Xt(e, t, 1)),
      (t = Ke()),
      e !== null && (bn(e, 1, t), Ze(e, t));
  }
  function Re(e, t, n) {
    if (e.tag === 3) Xs(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Xs(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Zt === null || !Zt.has(r)))
          ) {
            (e = Un(n, e)),
              (e = hs(t, e, 1)),
              (t = Xt(t, e, 1)),
              (e = Ke()),
              t !== null && (bn(t, 1, e), Ze(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ed(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ke()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Oe === e &&
        (Fe & n) === n &&
        (Ie === 4 || (Ie === 3 && (Fe & 130023424) === Fe && 500 > Ne() - Oi)
          ? mn(e, 0)
          : (ji |= n)),
      Ze(e, t);
  }
  function Js(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Qr), (Qr <<= 1), !(Qr & 130023424) && (Qr = 4194304))
        : (t = 1));
    var n = Ke();
    (e = It(e, t)), e !== null && (bn(e, t, n), Ze(e, n));
  }
  function xd(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Js(e, n);
  }
  function Cd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), Js(e, n);
  }
  var Zs;
  Zs = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ye.current) Xe = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), fd(e, t, n);
        Xe = !!(e.flags & 131072);
      }
    else (Xe = !1), Se && t.flags & 1048576 && Ta(t, pl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Nl(e, t), (e = t.pendingProps);
        var l = zn(t, Ue.current);
        Fn(t, n), (l = fi(null, t, r, e, l, n));
        var o = di();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ge(r) ? ((o = !0), cl(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              li(t),
              (l.updater = Rl),
              (t.stateNode = l),
              (l._reactInternals = t),
              gi(t, r, e, n),
              (t = Ei(null, t, r, !0, o, n)))
            : ((t.tag = 0), Se && o && Go(t), Qe(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Nl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Rd(r)),
            (e = mt(r, e)),
            l)
          ) {
            case 0:
              t = ki(null, t, r, e, n);
              break e;
            case 1:
              t = xs(null, t, r, e, n);
              break e;
            case 11:
              t = gs(null, t, r, e, n);
              break e;
            case 14:
              t = ws(null, t, r, mt(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          ki(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          xs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Cs(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Ua(e, t),
            wl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = Un(Error(a(423)), t)), (t = _s(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Un(Error(a(424)), t)), (t = _s(e, t, r, n, l));
              break e;
            } else
              for (
                rt = Vt(t.stateNode.containerInfo.firstChild),
                  nt = t,
                  Se = !0,
                  ht = null,
                  n = Fa(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((On(), r === l)) {
              t = Ot(e, t, n);
              break e;
            }
            Qe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ba(t),
          e === null && Zo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          Bo(r, l) ? (u = null) : o !== null && Bo(r, o) && (t.flags |= 32),
          Es(e, t),
          Qe(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && Zo(t), null;
      case 13:
        return Rs(e, t, n);
      case 4:
        return (
          oi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = $n(t, null, r, n)) : Qe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          gs(e, t, r, l, n)
        );
      case 7:
        return Qe(e, t, t.pendingProps, n), t.child;
      case 8:
        return Qe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Qe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (u = l.value),
            me(vl, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (pt(o.value, u)) {
              if (o.children === l.children && !Ye.current) {
                t = Ot(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var c = o.dependencies;
                if (c !== null) {
                  u = o.child;
                  for (var d = c.firstContext; d !== null; ) {
                    if (d.context === r) {
                      if (o.tag === 1) {
                        (d = jt(-1, n & -n)), (d.tag = 2);
                        var S = o.updateQueue;
                        if (S !== null) {
                          S = S.shared;
                          var N = S.pending;
                          N === null
                            ? (d.next = d)
                            : ((d.next = N.next), (N.next = d)),
                            (S.pending = d);
                        }
                      }
                      (o.lanes |= n),
                        (d = o.alternate),
                        d !== null && (d.lanes |= n),
                        ni(o.return, n, t),
                        (c.lanes |= n);
                      break;
                    }
                    d = d.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(a(341));
                  (u.lanes |= n),
                    (c = u.alternate),
                    c !== null && (c.lanes |= n),
                    ni(u, n, t),
                    (u = o.sibling);
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      (o.return = u.return), (u = o);
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          Qe(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Fn(t, n),
          (l = at(l)),
          (r = r(l)),
          (t.flags |= 1),
          Qe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = mt(r, t.pendingProps)),
          (l = mt(r.type, l)),
          ws(e, t, r, l, n)
        );
      case 15:
        return Ss(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          Nl(e, t),
          (t.tag = 1),
          Ge(r) ? ((e = !0), cl(t)) : (e = !1),
          Fn(t, n),
          fs(t, r, l),
          gi(t, r, l, n),
          Ei(null, t, r, !0, e, n)
        );
      case 19:
        return Ns(e, t, n);
      case 22:
        return ks(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function qs(e, t) {
    return zu(e, t);
  }
  function _d(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
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
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ft(e, t, n, r) {
    return new _d(e, t, n, r);
  }
  function Bi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Rd(e) {
    if (typeof e == "function") return Bi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ot)) return 11;
      if (e === et) return 14;
    }
    return 2;
  }
  function tn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ft(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ul(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == "function")) Bi(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case ue:
          return yn(n.children, l, o, t);
        case Ce:
          (u = 8), (l |= 8);
          break;
        case we:
          return (
            (e = ft(12, n, t, l | 2)), (e.elementType = we), (e.lanes = o), e
          );
        case He:
          return (e = ft(13, n, t, l)), (e.elementType = He), (e.lanes = o), e;
        case Ve:
          return (e = ft(19, n, t, l)), (e.elementType = Ve), (e.lanes = o), e;
        case fe:
          return Al(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Pe:
                u = 10;
                break e;
              case be:
                u = 9;
                break e;
              case ot:
                u = 11;
                break e;
              case et:
                u = 14;
                break e;
              case _e:
                (u = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ft(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function yn(e, t, n, r) {
    return (e = ft(7, e, r, t)), (e.lanes = n), e;
  }
  function Al(e, t, n, r) {
    return (
      (e = ft(22, e, r, t)),
      (e.elementType = fe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Hi(e, t, n) {
    return (e = ft(6, e, null, t)), (e.lanes = n), e;
  }
  function Vi(e, t, n) {
    return (
      (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Pd(e, t, n, r, l) {
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
      (this.eventTimes = yo(0)),
      (this.expirationTimes = yo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = yo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Qi(e, t, n, r, l, o, u, c, d) {
    return (
      (e = new Pd(e, t, n, c, d)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ft(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      li(o),
      e
    );
  }
  function Nd(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ge,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function bs(e) {
    if (!e) return Kt;
    e = e._reactInternals;
    e: {
      if (ln(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ge(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ge(n)) return Pa(e, n, t);
    }
    return t;
  }
  function ec(e, t, n, r, l, o, u, c, d) {
    return (
      (e = Qi(n, r, !0, e, l, o, u, c, d)),
      (e.context = bs(null)),
      (n = e.current),
      (r = Ke()),
      (l = bt(n)),
      (o = jt(r, l)),
      (o.callback = t ?? null),
      Xt(n, o, l),
      (e.current.lanes = l),
      bn(e, l, r),
      Ze(e, r),
      e
    );
  }
  function Wl(e, t, n, r) {
    var l = t.current,
      o = Ke(),
      u = bt(l);
    return (
      (n = bs(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = jt(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Xt(l, t, u)),
      e !== null && (gt(e, l, u, o), gl(e, l, u)),
      u
    );
  }
  function Bl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function tc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ki(e, t) {
    tc(e, t), (e = e.alternate) && tc(e, t);
  }
  function Ld() {
    return null;
  }
  var nc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Yi(e) {
    this._internalRoot = e;
  }
  (Hl.prototype.render = Yi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      Wl(e, t, null, null);
    }),
    (Hl.prototype.unmount = Yi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          hn(function () {
            Wl(null, e, null, null);
          }),
            (t[Nt] = null);
        }
      });
  function Hl(e) {
    this._internalRoot = e;
  }
  Hl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Uu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
      Wt.splice(n, 0, e), n === 0 && Bu(e);
    }
  };
  function Gi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Vl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function rc() {}
  function Td(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var S = Bl(u);
          o.call(S);
        };
      }
      var u = ec(t, r, e, 0, null, !1, !1, "", rc);
      return (
        (e._reactRootContainer = u),
        (e[Nt] = u.current),
        pr(e.nodeType === 8 ? e.parentNode : e),
        hn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function () {
        var S = Bl(d);
        c.call(S);
      };
    }
    var d = Qi(e, 0, !1, null, null, !1, !1, "", rc);
    return (
      (e._reactRootContainer = d),
      (e[Nt] = d.current),
      pr(e.nodeType === 8 ? e.parentNode : e),
      hn(function () {
        Wl(t, d, n, r);
      }),
      d
    );
  }
  function Ql(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var c = l;
        l = function () {
          var d = Bl(u);
          c.call(d);
        };
      }
      Wl(t, u, e, l);
    } else u = Td(n, t, e, l, r);
    return Bl(u);
  }
  (Fu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = qn(t.pendingLanes);
          n !== 0 &&
            (go(t, n | 1), Ze(t, Ne()), !(ie & 6) && ((Bn = Ne() + 500), Yt()));
        }
        break;
      case 13:
        hn(function () {
          var r = It(e, 1);
          if (r !== null) {
            var l = Ke();
            gt(r, e, 1, l);
          }
        }),
          Ki(e, 1);
    }
  }),
    (wo = function (e) {
      if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
          var n = Ke();
          gt(t, e, 134217728, n);
        }
        Ki(e, 134217728);
      }
    }),
    (Mu = function (e) {
      if (e.tag === 13) {
        var t = bt(e),
          n = It(e, t);
        if (n !== null) {
          var r = Ke();
          gt(n, e, t, r);
        }
        Ki(e, t);
      }
    }),
    (Uu = function () {
      return pe;
    }),
    (Au = function (e, t) {
      var n = pe;
      try {
        return (pe = e), t();
      } finally {
        pe = n;
      }
    }),
    (co = function (e, t, n) {
      switch (t) {
        case "input":
          if ((no(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = al(r);
                if (!l) throw Error(a(90));
                wt(r), no(r, l);
              }
            }
          }
          break;
        case "textarea":
          mu(e, n);
          break;
        case "select":
          (t = n.value), t != null && wn(e, !!n.multiple, t, !1);
      }
    }),
    (Cu = Ui),
    (_u = hn);
  var zd = { usingClientEntryPoint: !1, Events: [vr, Ln, al, Eu, xu, Ui] },
    Tr = {
      findFiberByHostInstance: on,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Id = {
      bundleType: Tr.bundleType,
      version: Tr.version,
      rendererPackageName: Tr.rendererPackageName,
      rendererConfig: Tr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ee.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Lu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Tr.findFiberByHostInstance || Ld,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kl.isDisabled && Kl.supportsFiber)
      try {
        (Hr = Kl.inject(Id)), (St = Kl);
      } catch {}
  }
  return (
    (qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd),
    (qe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Gi(t)) throw Error(a(200));
      return Nd(e, t, null, n);
    }),
    (qe.createRoot = function (e, t) {
      if (!Gi(e)) throw Error(a(299));
      var n = !1,
        r = "",
        l = nc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Qi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Nt] = t.current),
        pr(e.nodeType === 8 ? e.parentNode : e),
        new Yi(t)
      );
    }),
    (qe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = Lu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (qe.flushSync = function (e) {
      return hn(e);
    }),
    (qe.hydrate = function (e, t, n) {
      if (!Vl(t)) throw Error(a(200));
      return Ql(null, e, t, !0, n);
    }),
    (qe.hydrateRoot = function (e, t, n) {
      if (!Gi(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        u = nc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = ec(t, null, e, 1, n ?? null, l, !1, o, u)),
        (e[Nt] = t.current),
        pr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Hl(t);
    }),
    (qe.render = function (e, t, n) {
      if (!Vl(t)) throw Error(a(200));
      return Ql(null, e, t, !1, n);
    }),
    (qe.unmountComponentAtNode = function (e) {
      if (!Vl(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (hn(function () {
            Ql(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Nt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (qe.unstable_batchedUpdates = Ui),
    (qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Vl(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Ql(e, t, n, !1, r);
    }),
    (qe.version = "18.3.1-next-f1338f8080-20240426"),
    qe
  );
}
var fc;
function Hd() {
  if (fc) return Zi.exports;
  fc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), (Zi.exports = Bd()), Zi.exports;
}
var dc;
function Vd() {
  if (dc) return Gl;
  dc = 1;
  var i = Hd();
  return (Gl.createRoot = i.createRoot), (Gl.hydrateRoot = i.hydrateRoot), Gl;
}
var Qd = Vd(),
  jr = {},
  pc;
function Kd() {
  if (pc) return jr;
  (pc = 1),
    Object.defineProperty(jr, "__esModule", { value: !0 }),
    (jr.parse = E),
    (jr.serialize = x);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    s = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    p = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    m = (() => {
      const C = function () {};
      return (C.prototype = Object.create(null)), C;
    })();
  function E(C, F) {
    const T = new m(),
      D = C.length;
    if (D < 2) return T;
    const I = (F == null ? void 0 : F.decode) || j;
    let $ = 0;
    do {
      const U = C.indexOf("=", $);
      if (U === -1) break;
      const K = C.indexOf(";", $),
        ee = K === -1 ? D : K;
      if (U > ee) {
        $ = C.lastIndexOf(";", U - 1) + 1;
        continue;
      }
      const ce = _(C, $, U),
        ge = w(C, U, ce),
        ue = C.slice(ce, ge);
      if (T[ue] === void 0) {
        let Ce = _(C, U + 1, ee),
          we = w(C, ee, Ce);
        const Pe = I(C.slice(Ce, we));
        T[ue] = Pe;
      }
      $ = ee + 1;
    } while ($ < D);
    return T;
  }
  function _(C, F, T) {
    do {
      const D = C.charCodeAt(F);
      if (D !== 32 && D !== 9) return F;
    } while (++F < T);
    return T;
  }
  function w(C, F, T) {
    for (; F > T; ) {
      const D = C.charCodeAt(--F);
      if (D !== 32 && D !== 9) return F + 1;
    }
    return T;
  }
  function x(C, F, T) {
    const D = (T == null ? void 0 : T.encode) || encodeURIComponent;
    if (!i.test(C)) throw new TypeError(`argument name is invalid: ${C}`);
    const I = D(F);
    if (!s.test(I)) throw new TypeError(`argument val is invalid: ${F}`);
    let $ = C + "=" + I;
    if (!T) return $;
    if (T.maxAge !== void 0) {
      if (!Number.isInteger(T.maxAge))
        throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);
      $ += "; Max-Age=" + T.maxAge;
    }
    if (T.domain) {
      if (!a.test(T.domain))
        throw new TypeError(`option domain is invalid: ${T.domain}`);
      $ += "; Domain=" + T.domain;
    }
    if (T.path) {
      if (!p.test(T.path))
        throw new TypeError(`option path is invalid: ${T.path}`);
      $ += "; Path=" + T.path;
    }
    if (T.expires) {
      if (!O(T.expires) || !Number.isFinite(T.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${T.expires}`);
      $ += "; Expires=" + T.expires.toUTCString();
    }
    if (
      (T.httpOnly && ($ += "; HttpOnly"),
      T.secure && ($ += "; Secure"),
      T.partitioned && ($ += "; Partitioned"),
      T.priority)
    )
      switch (
        typeof T.priority == "string" ? T.priority.toLowerCase() : void 0
      ) {
        case "low":
          $ += "; Priority=Low";
          break;
        case "medium":
          $ += "; Priority=Medium";
          break;
        case "high":
          $ += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${T.priority}`);
      }
    if (T.sameSite)
      switch (
        typeof T.sameSite == "string" ? T.sameSite.toLowerCase() : T.sameSite
      ) {
        case !0:
        case "strict":
          $ += "; SameSite=Strict";
          break;
        case "lax":
          $ += "; SameSite=Lax";
          break;
        case "none":
          $ += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${T.sameSite}`);
      }
    return $;
  }
  function j(C) {
    if (C.indexOf("%") === -1) return C;
    try {
      return decodeURIComponent(C);
    } catch {
      return C;
    }
  }
  function O(C) {
    return f.call(C) === "[object Date]";
  }
  return jr;
}
Kd();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var hc = "popstate";
function Yd(i = {}) {
  function s(p, f) {
    let { pathname: m, search: E, hash: _ } = p.location;
    return nu(
      "",
      { pathname: m, search: E, hash: _ },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default",
    );
  }
  function a(p, f) {
    return typeof f == "string" ? f : $r(f);
  }
  return Xd(s, a, null, i);
}
function xe(i, s) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
function _t(i, s) {
  if (!i) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function Gd() {
  return Math.random().toString(36).substring(2, 10);
}
function mc(i, s) {
  return { usr: i.state, key: i.key, idx: s };
}
function nu(i, s, a = null, p) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? Vn(s) : s),
    state: a,
    key: (s && s.key) || p || Gd(),
  };
}
function $r({ pathname: i = "/", search: s = "", hash: a = "" }) {
  return (
    s && s !== "?" && (i += s.charAt(0) === "?" ? s : "?" + s),
    a && a !== "#" && (i += a.charAt(0) === "#" ? a : "#" + a),
    i
  );
}
function Vn(i) {
  let s = {};
  if (i) {
    let a = i.indexOf("#");
    a >= 0 && ((s.hash = i.substring(a)), (i = i.substring(0, a)));
    let p = i.indexOf("?");
    p >= 0 && ((s.search = i.substring(p)), (i = i.substring(0, p))),
      i && (s.pathname = i);
  }
  return s;
}
function Xd(i, s, a, p = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = p,
    E = f.history,
    _ = "POP",
    w = null,
    x = j();
  x == null && ((x = 0), E.replaceState({ ...E.state, idx: x }, ""));
  function j() {
    return (E.state || { idx: null }).idx;
  }
  function O() {
    _ = "POP";
    let I = j(),
      $ = I == null ? null : I - x;
    (x = I), w && w({ action: _, location: D.location, delta: $ });
  }
  function C(I, $) {
    _ = "PUSH";
    let U = nu(D.location, I, $);
    x = j() + 1;
    let K = mc(U, x),
      ee = D.createHref(U);
    try {
      E.pushState(K, "", ee);
    } catch (ce) {
      if (ce instanceof DOMException && ce.name === "DataCloneError") throw ce;
      f.location.assign(ee);
    }
    m && w && w({ action: _, location: D.location, delta: 1 });
  }
  function F(I, $) {
    _ = "REPLACE";
    let U = nu(D.location, I, $);
    x = j();
    let K = mc(U, x),
      ee = D.createHref(U);
    E.replaceState(K, "", ee),
      m && w && w({ action: _, location: D.location, delta: 0 });
  }
  function T(I) {
    let $ = f.location.origin !== "null" ? f.location.origin : f.location.href,
      U = typeof I == "string" ? I : $r(I);
    return (
      (U = U.replace(/ $/, "%20")),
      xe(
        $,
        `No window.location.(origin|href) available to create URL for href: ${U}`,
      ),
      new URL(U, $)
    );
  }
  let D = {
    get action() {
      return _;
    },
    get location() {
      return i(f, E);
    },
    listen(I) {
      if (w) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(hc, O),
        (w = I),
        () => {
          f.removeEventListener(hc, O), (w = null);
        }
      );
    },
    createHref(I) {
      return s(f, I);
    },
    createURL: T,
    encodeLocation(I) {
      let $ = T(I);
      return { pathname: $.pathname, search: $.search, hash: $.hash };
    },
    push: C,
    replace: F,
    go(I) {
      return E.go(I);
    },
  };
  return D;
}
function Sc(i, s, a = "/") {
  return Jd(i, s, a, !1);
}
function Jd(i, s, a, p) {
  let f = typeof s == "string" ? Vn(s) : s,
    m = rn(f.pathname || "/", a);
  if (m == null) return null;
  let E = kc(i);
  Zd(E);
  let _ = null;
  for (let w = 0; _ == null && w < E.length; ++w) {
    let x = ap(m);
    _ = ip(E[w], x, p);
  }
  return _;
}
function kc(i, s = [], a = [], p = "") {
  let f = (m, E, _) => {
    let w = {
      relativePath: _ === void 0 ? m.path || "" : _,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: E,
      route: m,
    };
    w.relativePath.startsWith("/") &&
      (xe(
        w.relativePath.startsWith(p),
        `Absolute route path "${w.relativePath}" nested under path "${p}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (w.relativePath = w.relativePath.slice(p.length)));
    let x = Dt([p, w.relativePath]),
      j = a.concat(w);
    m.children &&
      m.children.length > 0 &&
      (xe(
        m.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${x}".`,
      ),
      kc(m.children, s, j, x)),
      !(m.path == null && !m.index) &&
        s.push({ path: x, score: lp(x, m.index), routesMeta: j });
  };
  return (
    i.forEach((m, E) => {
      var _;
      if (m.path === "" || !((_ = m.path) != null && _.includes("?"))) f(m, E);
      else for (let w of Ec(m.path)) f(m, E, w);
    }),
    s
  );
}
function Ec(i) {
  let s = i.split("/");
  if (s.length === 0) return [];
  let [a, ...p] = s,
    f = a.endsWith("?"),
    m = a.replace(/\?$/, "");
  if (p.length === 0) return f ? [m, ""] : [m];
  let E = Ec(p.join("/")),
    _ = [];
  return (
    _.push(...E.map((w) => (w === "" ? m : [m, w].join("/")))),
    f && _.push(...E),
    _.map((w) => (i.startsWith("/") && w === "" ? "/" : w))
  );
}
function Zd(i) {
  i.sort((s, a) =>
    s.score !== a.score
      ? a.score - s.score
      : op(
          s.routesMeta.map((p) => p.childrenIndex),
          a.routesMeta.map((p) => p.childrenIndex),
        ),
  );
}
var qd = /^:[\w-]+$/,
  bd = 3,
  ep = 2,
  tp = 1,
  np = 10,
  rp = -2,
  vc = (i) => i === "*";
function lp(i, s) {
  let a = i.split("/"),
    p = a.length;
  return (
    a.some(vc) && (p += rp),
    s && (p += ep),
    a
      .filter((f) => !vc(f))
      .reduce((f, m) => f + (qd.test(m) ? bd : m === "" ? tp : np), p)
  );
}
function op(i, s) {
  return i.length === s.length && i.slice(0, -1).every((p, f) => p === s[f])
    ? i[i.length - 1] - s[s.length - 1]
    : 0;
}
function ip(i, s, a = !1) {
  let { routesMeta: p } = i,
    f = {},
    m = "/",
    E = [];
  for (let _ = 0; _ < p.length; ++_) {
    let w = p[_],
      x = _ === p.length - 1,
      j = m === "/" ? s : s.slice(m.length) || "/",
      O = ql(
        { path: w.relativePath, caseSensitive: w.caseSensitive, end: x },
        j,
      ),
      C = w.route;
    if (
      (!O &&
        x &&
        a &&
        !p[p.length - 1].route.index &&
        (O = ql(
          { path: w.relativePath, caseSensitive: w.caseSensitive, end: !1 },
          j,
        )),
      !O)
    )
      return null;
    Object.assign(f, O.params),
      E.push({
        params: f,
        pathname: Dt([m, O.pathname]),
        pathnameBase: dp(Dt([m, O.pathnameBase])),
        route: C,
      }),
      O.pathnameBase !== "/" && (m = Dt([m, O.pathnameBase]));
  }
  return E;
}
function ql(i, s) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [a, p] = up(i.path, i.caseSensitive, i.end),
    f = s.match(a);
  if (!f) return null;
  let m = f[0],
    E = m.replace(/(.)\/+$/, "$1"),
    _ = f.slice(1);
  return {
    params: p.reduce((x, { paramName: j, isOptional: O }, C) => {
      if (j === "*") {
        let T = _[C] || "";
        E = m.slice(0, m.length - T.length).replace(/(.)\/+$/, "$1");
      }
      const F = _[C];
      return (
        O && !F ? (x[j] = void 0) : (x[j] = (F || "").replace(/%2F/g, "/")), x
      );
    }, {}),
    pathname: m,
    pathnameBase: E,
    pattern: i,
  };
}
function up(i, s = !1, a = !0) {
  _t(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`,
  );
  let p = [],
    f =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (E, _, w) => (
            p.push({ paramName: _, isOptional: w != null }),
            w ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    i.endsWith("*")
      ? (p.push({ paramName: "*" }),
        (f += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
        ? (f += "\\/*$")
        : i !== "" && i !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, s ? void 0 : "i"), p]
  );
}
function ap(i) {
  try {
    return i
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      _t(
        !1,
        `The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`,
      ),
      i
    );
  }
}
function rn(i, s) {
  if (s === "/") return i;
  if (!i.toLowerCase().startsWith(s.toLowerCase())) return null;
  let a = s.endsWith("/") ? s.length - 1 : s.length,
    p = i.charAt(a);
  return p && p !== "/" ? null : i.slice(a) || "/";
}
function sp(i, s = "/") {
  let {
    pathname: a,
    search: p = "",
    hash: f = "",
  } = typeof i == "string" ? Vn(i) : i;
  return {
    pathname: a ? (a.startsWith("/") ? a : cp(a, s)) : s,
    search: pp(p),
    hash: hp(f),
  };
}
function cp(i, s) {
  let a = s.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((f) => {
      f === ".." ? a.length > 1 && a.pop() : f !== "." && a.push(f);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function eu(i, s, a, p) {
  return `Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(p)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function fp(i) {
  return i.filter(
    (s, a) => a === 0 || (s.route.path && s.route.path.length > 0),
  );
}
function xc(i) {
  let s = fp(i);
  return s.map((a, p) => (p === s.length - 1 ? a.pathname : a.pathnameBase));
}
function Cc(i, s, a, p = !1) {
  let f;
  typeof i == "string"
    ? (f = Vn(i))
    : ((f = { ...i }),
      xe(
        !f.pathname || !f.pathname.includes("?"),
        eu("?", "pathname", "search", f),
      ),
      xe(
        !f.pathname || !f.pathname.includes("#"),
        eu("#", "pathname", "hash", f),
      ),
      xe(!f.search || !f.search.includes("#"), eu("#", "search", "hash", f)));
  let m = i === "" || f.pathname === "",
    E = m ? "/" : f.pathname,
    _;
  if (E == null) _ = a;
  else {
    let O = s.length - 1;
    if (!p && E.startsWith("..")) {
      let C = E.split("/");
      for (; C[0] === ".."; ) C.shift(), (O -= 1);
      f.pathname = C.join("/");
    }
    _ = O >= 0 ? s[O] : "/";
  }
  let w = sp(f, _),
    x = E && E !== "/" && E.endsWith("/"),
    j = (m || E === ".") && a.endsWith("/");
  return !w.pathname.endsWith("/") && (x || j) && (w.pathname += "/"), w;
}
var Dt = (i) => i.join("/").replace(/\/\/+/g, "/"),
  dp = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  pp = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  hp = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function mp(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var _c = ["POST", "PUT", "PATCH", "DELETE"];
new Set(_c);
var vp = ["GET", ..._c];
new Set(vp);
var Qn = k.createContext(null);
Qn.displayName = "DataRouter";
var bl = k.createContext(null);
bl.displayName = "DataRouterState";
var Rc = k.createContext({ isTransitioning: !1 });
Rc.displayName = "ViewTransition";
var yp = k.createContext(new Map());
yp.displayName = "Fetchers";
var gp = k.createContext(null);
gp.displayName = "Await";
var Rt = k.createContext(null);
Rt.displayName = "Navigation";
var Dr = k.createContext(null);
Dr.displayName = "Location";
var Pt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Pt.displayName = "Route";
var iu = k.createContext(null);
iu.displayName = "RouteError";
function wp(i, { relative: s } = {}) {
  xe(
    Fr(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: a, navigator: p } = k.useContext(Rt),
    { hash: f, pathname: m, search: E } = Mr(i, { relative: s }),
    _ = m;
  return (
    a !== "/" && (_ = m === "/" ? a : Dt([a, m])),
    p.createHref({ pathname: _, search: E, hash: f })
  );
}
function Fr() {
  return k.useContext(Dr) != null;
}
function gn() {
  return (
    xe(
      Fr(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    k.useContext(Dr).location
  );
}
var Pc =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Nc(i) {
  k.useContext(Rt).static || k.useLayoutEffect(i);
}
function Lc() {
  let { isDataRoute: i } = k.useContext(Pt);
  return i ? jp() : Sp();
}
function Sp() {
  xe(
    Fr(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let i = k.useContext(Qn),
    { basename: s, navigator: a } = k.useContext(Rt),
    { matches: p } = k.useContext(Pt),
    { pathname: f } = gn(),
    m = JSON.stringify(xc(p)),
    E = k.useRef(!1);
  return (
    Nc(() => {
      E.current = !0;
    }),
    k.useCallback(
      (w, x = {}) => {
        if ((_t(E.current, Pc), !E.current)) return;
        if (typeof w == "number") {
          a.go(w);
          return;
        }
        let j = Cc(w, JSON.parse(m), f, x.relative === "path");
        i == null &&
          s !== "/" &&
          (j.pathname = j.pathname === "/" ? s : Dt([s, j.pathname])),
          (x.replace ? a.replace : a.push)(j, x.state, x);
      },
      [s, a, m, f, i],
    )
  );
}
k.createContext(null);
function kp() {
  let { matches: i } = k.useContext(Pt),
    s = i[i.length - 1];
  return s ? s.params : {};
}
function Mr(i, { relative: s } = {}) {
  let { matches: a } = k.useContext(Pt),
    { pathname: p } = gn(),
    f = JSON.stringify(xc(a));
  return k.useMemo(() => Cc(i, JSON.parse(f), p, s === "path"), [i, f, p, s]);
}
function Ep(i, s) {
  return Tc(i, s);
}
function Tc(i, s, a, p) {
  var $;
  xe(
    Fr(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: f } = k.useContext(Rt),
    { matches: m } = k.useContext(Pt),
    E = m[m.length - 1],
    _ = E ? E.params : {},
    w = E ? E.pathname : "/",
    x = E ? E.pathnameBase : "/",
    j = E && E.route;
  {
    let U = (j && j.path) || "";
    zc(
      w,
      !j || U.endsWith("*") || U.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U === "/" ? "*" : `${U}/*`}">.`,
    );
  }
  let O = gn(),
    C;
  if (s) {
    let U = typeof s == "string" ? Vn(s) : s;
    xe(
      x === "/" || (($ = U.pathname) == null ? void 0 : $.startsWith(x)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${U.pathname}" was given in the \`location\` prop.`,
    ),
      (C = U);
  } else C = O;
  let F = C.pathname || "/",
    T = F;
  if (x !== "/") {
    let U = x.replace(/^\//, "").split("/");
    T = "/" + F.replace(/^\//, "").split("/").slice(U.length).join("/");
  }
  let D = Sc(i, { pathname: T });
  _t(
    j || D != null,
    `No routes matched location "${C.pathname}${C.search}${C.hash}" `,
  ),
    _t(
      D == null ||
        D[D.length - 1].route.element !== void 0 ||
        D[D.length - 1].route.Component !== void 0 ||
        D[D.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let I = Pp(
    D &&
      D.map((U) =>
        Object.assign({}, U, {
          params: Object.assign({}, _, U.params),
          pathname: Dt([
            x,
            f.encodeLocation
              ? f.encodeLocation(U.pathname).pathname
              : U.pathname,
          ]),
          pathnameBase:
            U.pathnameBase === "/"
              ? x
              : Dt([
                  x,
                  f.encodeLocation
                    ? f.encodeLocation(U.pathnameBase).pathname
                    : U.pathnameBase,
                ]),
        }),
      ),
    m,
    a,
    p,
  );
  return s && I
    ? k.createElement(
        Dr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...C,
            },
            navigationType: "POP",
          },
        },
        I,
      )
    : I;
}
function xp() {
  let i = Ip(),
    s = mp(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
        ? i.message
        : JSON.stringify(i),
    a = i instanceof Error ? i.stack : null,
    p = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: p },
    m = { padding: "2px 4px", backgroundColor: p },
    E = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (E = k.createElement(
      k.Fragment,
      null,
      k.createElement("p", null, "💿 Hey developer 👋"),
      k.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        k.createElement("code", { style: m }, "ErrorBoundary"),
        " or",
        " ",
        k.createElement("code", { style: m }, "errorElement"),
        " prop on your route.",
      ),
    )),
    k.createElement(
      k.Fragment,
      null,
      k.createElement("h2", null, "Unexpected Application Error!"),
      k.createElement("h3", { style: { fontStyle: "italic" } }, s),
      a ? k.createElement("pre", { style: f }, a) : null,
      E,
    )
  );
}
var Cp = k.createElement(xp, null),
  _p = class extends k.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, s) {
      return s.location !== i.location ||
        (s.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : s.error,
            location: s.location,
            revalidation: i.revalidation || s.revalidation,
          };
    }
    componentDidCatch(i, s) {
      console.error(
        "React Router caught the following error during render",
        i,
        s,
      );
    }
    render() {
      return this.state.error !== void 0
        ? k.createElement(
            Pt.Provider,
            { value: this.props.routeContext },
            k.createElement(iu.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Rp({ routeContext: i, match: s, children: a }) {
  let p = k.useContext(Qn);
  return (
    p &&
      p.static &&
      p.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (p.staticContext._deepestRenderedBoundaryId = s.route.id),
    k.createElement(Pt.Provider, { value: i }, a)
  );
}
function Pp(i, s = [], a = null, p = null) {
  if (i == null) {
    if (!a) return null;
    if (a.errors) i = a.matches;
    else if (s.length === 0 && !a.initialized && a.matches.length > 0)
      i = a.matches;
    else return null;
  }
  let f = i,
    m = a == null ? void 0 : a.errors;
  if (m != null) {
    let w = f.findIndex(
      (x) => x.route.id && (m == null ? void 0 : m[x.route.id]) !== void 0,
    );
    xe(
      w >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`,
    ),
      (f = f.slice(0, Math.min(f.length, w + 1)));
  }
  let E = !1,
    _ = -1;
  if (a)
    for (let w = 0; w < f.length; w++) {
      let x = f[w];
      if (
        ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (_ = w),
        x.route.id)
      ) {
        let { loaderData: j, errors: O } = a,
          C =
            x.route.loader &&
            !j.hasOwnProperty(x.route.id) &&
            (!O || O[x.route.id] === void 0);
        if (x.route.lazy || C) {
          (E = !0), _ >= 0 ? (f = f.slice(0, _ + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((w, x, j) => {
    let O,
      C = !1,
      F = null,
      T = null;
    a &&
      ((O = m && x.route.id ? m[x.route.id] : void 0),
      (F = x.route.errorElement || Cp),
      E &&
        (_ < 0 && j === 0
          ? (zc(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (C = !0),
            (T = null))
          : _ === j &&
            ((C = !0), (T = x.route.hydrateFallbackElement || null))));
    let D = s.concat(f.slice(0, j + 1)),
      I = () => {
        let $;
        return (
          O
            ? ($ = F)
            : C
              ? ($ = T)
              : x.route.Component
                ? ($ = k.createElement(x.route.Component, null))
                : x.route.element
                  ? ($ = x.route.element)
                  : ($ = w),
          k.createElement(Rp, {
            match: x,
            routeContext: { outlet: w, matches: D, isDataRoute: a != null },
            children: $,
          })
        );
      };
    return a && (x.route.ErrorBoundary || x.route.errorElement || j === 0)
      ? k.createElement(_p, {
          location: a.location,
          revalidation: a.revalidation,
          component: F,
          error: O,
          children: I(),
          routeContext: { outlet: null, matches: D, isDataRoute: !0 },
        })
      : I();
  }, null);
}
function uu(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Np(i) {
  let s = k.useContext(Qn);
  return xe(s, uu(i)), s;
}
function Lp(i) {
  let s = k.useContext(bl);
  return xe(s, uu(i)), s;
}
function Tp(i) {
  let s = k.useContext(Pt);
  return xe(s, uu(i)), s;
}
function au(i) {
  let s = Tp(i),
    a = s.matches[s.matches.length - 1];
  return (
    xe(
      a.route.id,
      `${i} can only be used on routes that contain a unique "id"`,
    ),
    a.route.id
  );
}
function zp() {
  return au("useRouteId");
}
function Ip() {
  var p;
  let i = k.useContext(iu),
    s = Lp("useRouteError"),
    a = au("useRouteError");
  return i !== void 0 ? i : (p = s.errors) == null ? void 0 : p[a];
}
function jp() {
  let { router: i } = Np("useNavigate"),
    s = au("useNavigate"),
    a = k.useRef(!1);
  return (
    Nc(() => {
      a.current = !0;
    }),
    k.useCallback(
      async (f, m = {}) => {
        _t(a.current, Pc),
          a.current &&
            (typeof f == "number"
              ? i.navigate(f)
              : await i.navigate(f, { fromRouteId: s, ...m }));
      },
      [i, s],
    )
  );
}
var yc = {};
function zc(i, s, a) {
  !s && !yc[i] && ((yc[i] = !0), _t(!1, a));
}
k.memo(Op);
function Op({ routes: i, future: s, state: a }) {
  return Tc(i, void 0, a, s);
}
function ru(i) {
  xe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function $p({
  basename: i = "/",
  children: s = null,
  location: a,
  navigationType: p = "POP",
  navigator: f,
  static: m = !1,
}) {
  xe(
    !Fr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let E = i.replace(/^\/*/, "/"),
    _ = k.useMemo(
      () => ({ basename: E, navigator: f, static: m, future: {} }),
      [E, f, m],
    );
  typeof a == "string" && (a = Vn(a));
  let {
      pathname: w = "/",
      search: x = "",
      hash: j = "",
      state: O = null,
      key: C = "default",
    } = a,
    F = k.useMemo(() => {
      let T = rn(w, E);
      return T == null
        ? null
        : {
            location: { pathname: T, search: x, hash: j, state: O, key: C },
            navigationType: p,
          };
    }, [E, w, x, j, O, C, p]);
  return (
    _t(
      F != null,
      `<Router basename="${E}"> is not able to match the URL "${w}${x}${j}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    F == null
      ? null
      : k.createElement(
          Rt.Provider,
          { value: _ },
          k.createElement(Dr.Provider, { children: s, value: F }),
        )
  );
}
function Dp({ children: i, location: s }) {
  return Ep(lu(i), s);
}
function lu(i, s = []) {
  let a = [];
  return (
    k.Children.forEach(i, (p, f) => {
      if (!k.isValidElement(p)) return;
      let m = [...s, f];
      if (p.type === k.Fragment) {
        a.push.apply(a, lu(p.props.children, m));
        return;
      }
      xe(
        p.type === ru,
        `[${typeof p.type == "string" ? p.type : p.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        xe(
          !p.props.index || !p.props.children,
          "An index route cannot have child routes.",
        );
      let E = {
        id: p.props.id || m.join("-"),
        caseSensitive: p.props.caseSensitive,
        element: p.props.element,
        Component: p.props.Component,
        index: p.props.index,
        path: p.props.path,
        loader: p.props.loader,
        action: p.props.action,
        hydrateFallbackElement: p.props.hydrateFallbackElement,
        HydrateFallback: p.props.HydrateFallback,
        errorElement: p.props.errorElement,
        ErrorBoundary: p.props.ErrorBoundary,
        hasErrorBoundary:
          p.props.hasErrorBoundary === !0 ||
          p.props.ErrorBoundary != null ||
          p.props.errorElement != null,
        shouldRevalidate: p.props.shouldRevalidate,
        handle: p.props.handle,
        lazy: p.props.lazy,
      };
      p.props.children && (E.children = lu(p.props.children, m)), a.push(E);
    }),
    a
  );
}
var Jl = "get",
  Zl = "application/x-www-form-urlencoded";
function eo(i) {
  return i != null && typeof i.tagName == "string";
}
function Fp(i) {
  return eo(i) && i.tagName.toLowerCase() === "button";
}
function Mp(i) {
  return eo(i) && i.tagName.toLowerCase() === "form";
}
function Up(i) {
  return eo(i) && i.tagName.toLowerCase() === "input";
}
function Ap(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Wp(i, s) {
  return i.button === 0 && (!s || s === "_self") && !Ap(i);
}
var Xl = null;
function Bp() {
  if (Xl === null)
    try {
      new FormData(document.createElement("form"), 0), (Xl = !1);
    } catch {
      Xl = !0;
    }
  return Xl;
}
var Hp = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function tu(i) {
  return i != null && !Hp.has(i)
    ? (_t(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zl}"`,
      ),
      null)
    : i;
}
function Vp(i, s) {
  let a, p, f, m, E;
  if (Mp(i)) {
    let _ = i.getAttribute("action");
    (p = _ ? rn(_, s) : null),
      (a = i.getAttribute("method") || Jl),
      (f = tu(i.getAttribute("enctype")) || Zl),
      (m = new FormData(i));
  } else if (Fp(i) || (Up(i) && (i.type === "submit" || i.type === "image"))) {
    let _ = i.form;
    if (_ == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let w = i.getAttribute("formaction") || _.getAttribute("action");
    if (
      ((p = w ? rn(w, s) : null),
      (a = i.getAttribute("formmethod") || _.getAttribute("method") || Jl),
      (f =
        tu(i.getAttribute("formenctype")) ||
        tu(_.getAttribute("enctype")) ||
        Zl),
      (m = new FormData(_, i)),
      !Bp())
    ) {
      let { name: x, type: j, value: O } = i;
      if (j === "image") {
        let C = x ? `${x}.` : "";
        m.append(`${C}x`, "0"), m.append(`${C}y`, "0");
      } else x && m.append(x, O);
    }
  } else {
    if (eo(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (a = Jl), (p = null), (f = Zl), (E = i);
  }
  return (
    m && f === "text/plain" && ((E = m), (m = void 0)),
    { action: p, method: a.toLowerCase(), encType: f, formData: m, body: E }
  );
}
function su(i, s) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
async function Qp(i, s) {
  if (i.id in s) return s[i.id];
  try {
    let a = await import(i.module);
    return (s[i.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`,
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Kp(i) {
  return i == null
    ? !1
    : i.href == null
      ? i.rel === "preload" &&
        typeof i.imageSrcSet == "string" &&
        typeof i.imageSizes == "string"
      : typeof i.rel == "string" && typeof i.href == "string";
}
async function Yp(i, s, a) {
  let p = await Promise.all(
    i.map(async (f) => {
      let m = s.routes[f.route.id];
      if (m) {
        let E = await Qp(m, a);
        return E.links ? E.links() : [];
      }
      return [];
    }),
  );
  return Zp(
    p
      .flat(1)
      .filter(Kp)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" },
      ),
  );
}
function gc(i, s, a, p, f, m) {
  let E = (w, x) => (a[x] ? w.route.id !== a[x].route.id : !0),
    _ = (w, x) => {
      var j;
      return (
        a[x].pathname !== w.pathname ||
        (((j = a[x].route.path) == null ? void 0 : j.endsWith("*")) &&
          a[x].params["*"] !== w.params["*"])
      );
    };
  return m === "assets"
    ? s.filter((w, x) => E(w, x) || _(w, x))
    : m === "data"
      ? s.filter((w, x) => {
          var O;
          let j = p.routes[w.route.id];
          if (!j || !j.hasLoader) return !1;
          if (E(w, x) || _(w, x)) return !0;
          if (w.route.shouldRevalidate) {
            let C = w.route.shouldRevalidate({
              currentUrl: new URL(
                f.pathname + f.search + f.hash,
                window.origin,
              ),
              currentParams: ((O = a[0]) == null ? void 0 : O.params) || {},
              nextUrl: new URL(i, window.origin),
              nextParams: w.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof C == "boolean") return C;
          }
          return !0;
        })
      : [];
}
function Gp(i, s) {
  return Xp(
    i
      .map((a) => {
        let p = s.routes[a.route.id];
        if (!p) return [];
        let f = [p.module];
        return p.imports && (f = f.concat(p.imports)), f;
      })
      .flat(1),
  );
}
function Xp(i) {
  return [...new Set(i)];
}
function Jp(i) {
  let s = {},
    a = Object.keys(i).sort();
  for (let p of a) s[p] = i[p];
  return s;
}
function Zp(i, s) {
  let a = new Set();
  return (
    new Set(s),
    i.reduce((p, f) => {
      let m = JSON.stringify(Jp(f));
      return a.has(m) || (a.add(m), p.push({ key: m, link: f })), p;
    }, [])
  );
}
function qp(i) {
  let s =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : i;
  return (
    s.pathname === "/"
      ? (s.pathname = "_root.data")
      : (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
    s
  );
}
function bp() {
  let i = k.useContext(Qn);
  return (
    su(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    i
  );
}
function eh() {
  let i = k.useContext(bl);
  return (
    su(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    i
  );
}
var cu = k.createContext(void 0);
cu.displayName = "FrameworkContext";
function Ic() {
  let i = k.useContext(cu);
  return (
    su(i, "You must render this element inside a <HydratedRouter> element"), i
  );
}
function th(i, s) {
  let a = k.useContext(cu),
    [p, f] = k.useState(!1),
    [m, E] = k.useState(!1),
    {
      onFocus: _,
      onBlur: w,
      onMouseEnter: x,
      onMouseLeave: j,
      onTouchStart: O,
    } = s,
    C = k.useRef(null);
  k.useEffect(() => {
    if ((i === "render" && E(!0), i === "viewport")) {
      let D = ($) => {
          $.forEach((U) => {
            E(U.isIntersecting);
          });
        },
        I = new IntersectionObserver(D, { threshold: 0.5 });
      return (
        C.current && I.observe(C.current),
        () => {
          I.disconnect();
        }
      );
    }
  }, [i]),
    k.useEffect(() => {
      if (p) {
        let D = setTimeout(() => {
          E(!0);
        }, 100);
        return () => {
          clearTimeout(D);
        };
      }
    }, [p]);
  let F = () => {
      f(!0);
    },
    T = () => {
      f(!1), E(!1);
    };
  return a
    ? i !== "intent"
      ? [m, C, {}]
      : [
          m,
          C,
          {
            onFocus: Or(_, F),
            onBlur: Or(w, T),
            onMouseEnter: Or(x, F),
            onMouseLeave: Or(j, T),
            onTouchStart: Or(O, F),
          },
        ]
    : [!1, C, {}];
}
function Or(i, s) {
  return (a) => {
    i && i(a), a.defaultPrevented || s(a);
  };
}
function nh({ page: i, ...s }) {
  let { router: a } = bp(),
    p = k.useMemo(() => Sc(a.routes, i, a.basename), [a.routes, i, a.basename]);
  return p
    ? k.createElement(lh, { page: i, matches: p, ...s })
    : (console.warn(`Tried to prefetch ${i} but no routes matched.`), null);
}
function rh(i) {
  let { manifest: s, routeModules: a } = Ic(),
    [p, f] = k.useState([]);
  return (
    k.useEffect(() => {
      let m = !1;
      return (
        Yp(i, s, a).then((E) => {
          m || f(E);
        }),
        () => {
          m = !0;
        }
      );
    }, [i, s, a]),
    p
  );
}
function lh({ page: i, matches: s, ...a }) {
  let p = gn(),
    { manifest: f, routeModules: m } = Ic(),
    { loaderData: E, matches: _ } = eh(),
    w = k.useMemo(() => gc(i, s, _, f, p, "data"), [i, s, _, f, p]),
    x = k.useMemo(() => gc(i, s, _, f, p, "assets"), [i, s, _, f, p]),
    j = k.useMemo(() => {
      if (i === p.pathname + p.search + p.hash) return [];
      let F = new Set(),
        T = !1;
      if (
        (s.forEach((I) => {
          var U;
          let $ = f.routes[I.route.id];
          !$ ||
            !$.hasLoader ||
            ((!w.some((K) => K.route.id === I.route.id) &&
              I.route.id in E &&
              (U = m[I.route.id]) != null &&
              U.shouldRevalidate) ||
            $.hasClientLoader
              ? (T = !0)
              : F.add(I.route.id));
        }),
        F.size === 0)
      )
        return [];
      let D = qp(i);
      return (
        T &&
          F.size > 0 &&
          D.searchParams.set(
            "_routes",
            s
              .filter((I) => F.has(I.route.id))
              .map((I) => I.route.id)
              .join(","),
          ),
        [D.pathname + D.search]
      );
    }, [E, p, f, w, s, i, m]),
    O = k.useMemo(() => Gp(x, f), [x, f]),
    C = rh(x);
  return k.createElement(
    k.Fragment,
    null,
    j.map((F) =>
      k.createElement("link", {
        key: F,
        rel: "prefetch",
        as: "fetch",
        href: F,
        ...a,
      }),
    ),
    O.map((F) =>
      k.createElement("link", { key: F, rel: "modulepreload", href: F, ...a }),
    ),
    C.map(({ key: F, link: T }) => k.createElement("link", { key: F, ...T })),
  );
}
function oh(...i) {
  return (s) => {
    i.forEach((a) => {
      typeof a == "function" ? a(s) : a != null && (a.current = s);
    });
  };
}
var jc =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  jc && (window.__reactRouterVersion = "7.0.2");
} catch {}
function ih({ basename: i, children: s, window: a }) {
  let p = k.useRef();
  p.current == null && (p.current = Yd({ window: a, v5Compat: !0 }));
  let f = p.current,
    [m, E] = k.useState({ action: f.action, location: f.location }),
    _ = k.useCallback(
      (w) => {
        k.startTransition(() => E(w));
      },
      [E],
    );
  return (
    k.useLayoutEffect(() => f.listen(_), [f, _]),
    k.createElement($p, {
      basename: i,
      children: s,
      location: m.location,
      navigationType: m.action,
      navigator: f,
    })
  );
}
var Oc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $c = k.forwardRef(function (
    {
      onClick: s,
      discover: a = "render",
      prefetch: p = "none",
      relative: f,
      reloadDocument: m,
      replace: E,
      state: _,
      target: w,
      to: x,
      preventScrollReset: j,
      viewTransition: O,
      ...C
    },
    F,
  ) {
    let { basename: T } = k.useContext(Rt),
      D = typeof x == "string" && Oc.test(x),
      I,
      $ = !1;
    if (typeof x == "string" && D && ((I = x), jc))
      try {
        let we = new URL(window.location.href),
          Pe = x.startsWith("//") ? new URL(we.protocol + x) : new URL(x),
          be = rn(Pe.pathname, T);
        Pe.origin === we.origin && be != null
          ? (x = be + Pe.search + Pe.hash)
          : ($ = !0);
      } catch {
        _t(
          !1,
          `<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let U = wp(x, { relative: f }),
      [K, ee, ce] = th(p, C),
      ge = ch(x, {
        replace: E,
        state: _,
        target: w,
        preventScrollReset: j,
        relative: f,
        viewTransition: O,
      });
    function ue(we) {
      s && s(we), we.defaultPrevented || ge(we);
    }
    let Ce = k.createElement("a", {
      ...C,
      ...ce,
      href: I || U,
      onClick: $ || m ? s : ue,
      ref: oh(F, ee),
      target: w,
      "data-discover": !D && a === "render" ? "true" : void 0,
    });
    return K && !D
      ? k.createElement(k.Fragment, null, Ce, k.createElement(nh, { page: U }))
      : Ce;
  });
$c.displayName = "Link";
var uh = k.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: a = !1,
    className: p = "",
    end: f = !1,
    style: m,
    to: E,
    viewTransition: _,
    children: w,
    ...x
  },
  j,
) {
  let O = Mr(E, { relative: x.relative }),
    C = gn(),
    F = k.useContext(bl),
    { navigator: T, basename: D } = k.useContext(Rt),
    I = F != null && mh(O) && _ === !0,
    $ = T.encodeLocation ? T.encodeLocation(O).pathname : O.pathname,
    U = C.pathname,
    K =
      F && F.navigation && F.navigation.location
        ? F.navigation.location.pathname
        : null;
  a ||
    ((U = U.toLowerCase()),
    (K = K ? K.toLowerCase() : null),
    ($ = $.toLowerCase())),
    K && D && (K = rn(K, D) || K);
  const ee = $ !== "/" && $.endsWith("/") ? $.length - 1 : $.length;
  let ce = U === $ || (!f && U.startsWith($) && U.charAt(ee) === "/"),
    ge =
      K != null &&
      (K === $ || (!f && K.startsWith($) && K.charAt($.length) === "/")),
    ue = { isActive: ce, isPending: ge, isTransitioning: I },
    Ce = ce ? s : void 0,
    we;
  typeof p == "function"
    ? (we = p(ue))
    : (we = [
        p,
        ce ? "active" : null,
        ge ? "pending" : null,
        I ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Pe = typeof m == "function" ? m(ue) : m;
  return k.createElement(
    $c,
    {
      ...x,
      "aria-current": Ce,
      className: we,
      ref: j,
      style: Pe,
      to: E,
      viewTransition: _,
    },
    typeof w == "function" ? w(ue) : w,
  );
});
uh.displayName = "NavLink";
var ah = k.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: s,
      navigate: a,
      reloadDocument: p,
      replace: f,
      state: m,
      method: E = Jl,
      action: _,
      onSubmit: w,
      relative: x,
      preventScrollReset: j,
      viewTransition: O,
      ...C
    },
    F,
  ) => {
    let T = ph(),
      D = hh(_, { relative: x }),
      I = E.toLowerCase() === "get" ? "get" : "post",
      $ = typeof _ == "string" && Oc.test(_),
      U = (K) => {
        if ((w && w(K), K.defaultPrevented)) return;
        K.preventDefault();
        let ee = K.nativeEvent.submitter,
          ce = (ee == null ? void 0 : ee.getAttribute("formmethod")) || E;
        T(ee || K.currentTarget, {
          fetcherKey: s,
          method: ce,
          navigate: a,
          replace: f,
          state: m,
          relative: x,
          preventScrollReset: j,
          viewTransition: O,
        });
      };
    return k.createElement("form", {
      ref: F,
      method: I,
      action: D,
      onSubmit: p ? w : U,
      ...C,
      "data-discover": !$ && i === "render" ? "true" : void 0,
    });
  },
);
ah.displayName = "Form";
function sh(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dc(i) {
  let s = k.useContext(Qn);
  return xe(s, sh(i)), s;
}
function ch(
  i,
  {
    target: s,
    replace: a,
    state: p,
    preventScrollReset: f,
    relative: m,
    viewTransition: E,
  } = {},
) {
  let _ = Lc(),
    w = gn(),
    x = Mr(i, { relative: m });
  return k.useCallback(
    (j) => {
      if (Wp(j, s)) {
        j.preventDefault();
        let O = a !== void 0 ? a : $r(w) === $r(x);
        _(i, {
          replace: O,
          state: p,
          preventScrollReset: f,
          relative: m,
          viewTransition: E,
        });
      }
    },
    [w, _, x, a, p, s, i, f, m, E],
  );
}
var fh = 0,
  dh = () => `__${String(++fh)}__`;
function ph() {
  let { router: i } = Dc("useSubmit"),
    { basename: s } = k.useContext(Rt),
    a = zp();
  return k.useCallback(
    async (p, f = {}) => {
      let { action: m, method: E, encType: _, formData: w, body: x } = Vp(p, s);
      if (f.navigate === !1) {
        let j = f.fetcherKey || dh();
        await i.fetch(j, a, f.action || m, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: x,
          formMethod: f.method || E,
          formEncType: f.encType || _,
          flushSync: f.flushSync,
        });
      } else
        await i.navigate(f.action || m, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: x,
          formMethod: f.method || E,
          formEncType: f.encType || _,
          replace: f.replace,
          state: f.state,
          fromRouteId: a,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [i, s, a],
  );
}
function hh(i, { relative: s } = {}) {
  let { basename: a } = k.useContext(Rt),
    p = k.useContext(Pt);
  xe(p, "useFormAction must be used inside a RouteContext");
  let [f] = p.matches.slice(-1),
    m = { ...Mr(i || ".", { relative: s }) },
    E = gn();
  if (i == null) {
    m.search = E.search;
    let _ = new URLSearchParams(m.search),
      w = _.getAll("index");
    if (w.some((j) => j === "")) {
      _.delete("index"),
        w.filter((O) => O).forEach((O) => _.append("index", O));
      let j = _.toString();
      m.search = j ? `?${j}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      f.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (m.pathname = m.pathname === "/" ? a : Dt([a, m.pathname])),
    $r(m)
  );
}
function mh(i, s = {}) {
  let a = k.useContext(Rc);
  xe(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: p } = Dc("useViewTransitionState"),
    f = Mr(i, { relative: s.relative });
  if (!a.isTransitioning) return !1;
  let m = rn(a.currentLocation.pathname, p) || a.currentLocation.pathname,
    E = rn(a.nextLocation.pathname, p) || a.nextLocation.pathname;
  return ql(f.pathname, E) != null || ql(f.pathname, m) != null;
}
new TextEncoder();
class vh {
  constructor(s, a = "prefetch") {
    Yl(this, "images");
    Yl(this, "loadedCount");
    Yl(this, "rel");
    if (!Array.isArray(s) || s.length === 0)
      throw new Error("Images must be a non-empty array.");
    (this.images = s), (this.loadedCount = 0), (this.rel = a);
  }
  async preload() {
    for (const s of this.images)
      try {
        await this.preloadImage(s);
      } catch (a) {
        console.error(a);
      }
  }
  preloadImage(s) {
    return new Promise((a, p) => {
      const f = document.createElement("link");
      (f.rel = this.rel),
        (f.as = "image"),
        (f.href = s),
        document.head.appendChild(f),
        (f.onload = () => {
          document.head.removeChild(f), this.loadedCount++, a();
        }),
        (f.onerror = () => {
          document.head.removeChild(f),
            console.error(`Failed to preload ${s}`),
            p(new Error(`Failed to preload ${s}`));
        });
    });
  }
}
const yh = "_slideshowWrapper_15jap_7",
  gh = "_disableUI_15jap_10",
  wh = "_arrowButtonWrapper_15jap_10",
  Sh = "_thumbnailButtonWrapper_15jap_11",
  kh = "_slideWrapper_15jap_16",
  Eh = "_slide_15jap_7",
  xh = "_active_15jap_37",
  Ch = "_contentWrapper_15jap_42",
  _h = "_content_15jap_42",
  Rh = "_thumbnail_15jap_11",
  Ph = "_visuallyHidden_15jap_58",
  Nh = "_overlayWrapper1_15jap_62",
  Lh = "_overlayWrapper2_15jap_63",
  Th = "_overlay_15jap_62",
  Me = {
    slideshowWrapper: yh,
    disableUI: gh,
    arrowButtonWrapper: wh,
    thumbnailButtonWrapper: Sh,
    slideWrapper: kh,
    slide: Eh,
    active: xh,
    contentWrapper: Ch,
    content: _h,
    thumbnail: Rh,
    visuallyHidden: Ph,
    overlayWrapper1: Nh,
    overlayWrapper2: Lh,
    overlay: Th,
  },
  wc = ({
    slides: i,
    initialAutoSlide: s = !0,
    interval: a = 6e3,
    basePath: p = "/slideshow",
    enableRouting: f = !0,
    restartDelay: m = 14e3,
    previousLabel: E = "< Previous",
    nextLabel: _ = "Next >",
    resumeLabel: w = "Restart",
    pauseLabel: x = "Pause",
    transitionResetDelay: j = 1500,
  }) => {
    var he;
    const O = k.useRef(!0),
      C = k.useMemo(() => i, [i]),
      [F, T] = k.useState(!1);
    f && !p && console.error("'basePath' is required when routing is enabled.");
    const D = Lc(),
      I = k.useRef(D);
    k.useEffect(() => {
      I.current = D;
    }, [D]);
    const { slug: $ } = kp();
    f && !$ && I.current(`${p}/${i[0].slug}`);
    const U = f ? C.findIndex((X) => X.slug === $) : -1,
      [K, ee] = k.useState(-1),
      [ce, ge] = k.useState(-1),
      ue = k.useRef(K);
    k.useEffect(() => {
      let X = null;
      return (
        K !== -1 &&
          (ge(ue.current),
          T(!0),
          (X = setTimeout(() => {
            T(!1);
          }, j))),
        (ue.current = K),
        () => {
          X && clearTimeout(X);
        }
      );
    }, [K]);
    const [Ce, we] = k.useState("unset"),
      Pe = k.useRef([]);
    k.useEffect(() => {
      const X = () => {
        const q = Pe.current[K];
        if (q) {
          const wt = q.offsetHeight;
          we(wt ? `${wt}px` : "unset");
        }
      };
      return (
        X(),
        window.addEventListener("resize", X),
        () => {
          window.removeEventListener("resize", X);
        }
      );
    }, [K]);
    const be = k.useRef(!1);
    k.useEffect(() => {
      if (!be.current) {
        const X = ue.current >= 0 ? ue.current : 0,
          q = [
            ...i.slice(X).map((Ft) => Ft.background),
            ...i.slice(0, X).map((Ft) => Ft.background),
          ];
        new vh(q).preload(), (be.current = !0);
      }
    }, [i]);
    const [ot, He] = k.useState(((he = C[K]) == null ? void 0 : he.slug) || "");
    k.useEffect(() => {
      var X;
      He(((X = C[K]) == null ? void 0 : X.slug) || "");
    }, [K, C]);
    const [Ve, et] = k.useState(!1),
      _e = k.useRef(Ve);
    k.useEffect(() => {
      _e.current = Ve;
    }, [Ve]);
    const fe = k.useRef(null),
      M = k.useRef([]),
      Y = k.useCallback(() => {
        fe.current &&
          (clearTimeout(fe.current),
          clearInterval(fe.current),
          (fe.current = null));
      }, []),
      W = k.useCallback(
        (X = !1) => {
          Y(),
            et(!1),
            s &&
              (X && ee((q) => (q + 1) % C.length),
              (fe.current = setInterval(() => {
                ee((q) => (q + 1) % C.length);
              }, a)));
        },
        [s, a, C.length, Y],
      ),
      v = k.useCallback(() => {
        Y(),
          !(m <= 0) &&
            s &&
            !_e.current &&
            (ee((X) => (X + 1) % C.length),
            (fe.current = setInterval(() => {
              ee((X) => (X + 1) % C.length);
            }, a)));
      }, [s, a, m, C.length, Y]);
    k.useEffect(() => {
      _e.current ||
        (f
          ? O.current &&
            setTimeout(() => {
              U !== -1 ? ee(U) : (I.current(`${p}/${C[0].slug}`), ee(0)),
                (O.current = !1);
            }, 0)
          : O.current &&
            setTimeout(() => {
              ee(0), (O.current = !1);
            }, 0),
        O.current && s && W());
    }, [$, U, C, I, W, p, f, s]),
      k.useEffect(() => {
        M.current[ue.current] &&
          M.current[ue.current].focus({ preventScroll: !0 });
      });
    const R = k.useCallback(
        (X) => {
          if ((ee(X), f)) {
            const q = `${p}/${C[X].slug}`;
            I.current(q);
          }
          Y(),
            m > -1 &&
              !_e.current &&
              (fe.current = setTimeout(() => {
                v();
              }, m));
        },
        [K, m, v, Y, f, p, C],
      ),
      te = k.useCallback(() => {
        const X = (ue.current - 1 + C.length) % C.length;
        R(X);
      }, [C, R]),
      ne = k.useCallback(() => {
        const X = (ue.current + 1) % C.length;
        R(X);
      }, [C, R]),
      le = k.useRef(te),
      oe = k.useRef(ne),
      de = k.useRef(Y);
    k.useEffect(() => {
      (le.current = te), (oe.current = ne), (de.current = Y);
    }, [te, ne, Y]),
      k.useEffect(() => {
        const X = (q) => {
          q.key === "ArrowLeft"
            ? le.current()
            : q.key === "ArrowRight" && oe.current();
        };
        return (
          window.addEventListener("keydown", X),
          () => {
            de.current(), window.removeEventListener("keydown", X);
          }
        );
      }, []);
    const se = () => {
      _e.current ? W(!0) : (Y(), et(!0));
    };
    return V.jsxs(V.Fragment, {
      children: [
        V.jsx("div", {
          className: "bb-debug",
          style: {
            color: "#000",
            zIndex: 1e3,
            position: "absolute",
            top: 0,
            display: "none",
          },
          children: `
          curr: ${K}
          prev: ${ce}
          transitioning: ${F}
        `,
        }),
        V.jsxs("div", {
          className: `
          ${Me.slideshowWrapper} 
          bb-slideshow 
          bb-slideshow-slide-${ot} 
          ${F ? `${Me.disableUI} bb-disable-ui` : ""}
        `,
          "aria-roledescription": "carousel",
          "aria-label": "Slideshow",
          "aria-live": "polite",
          "aria-busy": F,
          children: [
            V.jsx("div", {
              className: `${Me.slideWrapper} bb-slide-wrapper`,
              children: C.map((X, q) =>
                V.jsx(
                  "div",
                  {
                    tabIndex: q === K ? 0 : -1,
                    className: `${Me.slide} ${q === K ? Me.active : ""} bb-slide-${q} bb-slide`,
                    style: { backgroundImage: `url(${X.background})` },
                    role: "group",
                    "aria-roledescription": "slide",
                    "aria-label": `${X.alt || `Slide ${q + 1} of ${C.length}`}`,
                    "aria-hidden": q !== K,
                  },
                  q,
                ),
              ),
            }),
            V.jsx("div", {
              className: `${Me.overlayWrapper1} bb-overlay-wrapper bb-overlay-wrapper-1`,
              children: C.map((X, q) =>
                V.jsx(
                  "div",
                  {
                    className: `
                bb-overlay-1-${q + 1} 
                ${Me.overlay} 
                bb-overlay 
                ${q === K ? `${Me.active} bb-active` : ""} 
                ${q === ce && F ? " bb-previous" : ""}
              `,
                  },
                  q,
                ),
              ),
            }),
            V.jsx("div", {
              className: `${Me.overlayWrapper2} bb-overlay-wrapper bb-overlay-wrapper-2`,
            }),
            V.jsx("div", {
              style: { height: Ce },
              className: `${Me.contentWrapper} bb-content-wrapper`,
              children: C.map((X, q) =>
                V.jsx(
                  "div",
                  {
                    ref: (wt) => (Pe.current[q] = wt),
                    className: `${Me.content} bb-content ${q === K ? Me.active + " bb-active" : ""} ${q === ce ? " bb-previous" : ""}`,
                    children: C[q].content,
                  },
                  q,
                ),
              ),
            }),
            V.jsxs("div", {
              className: `${Me.arrowButtonWrapper} bb-arrow-button-wrapper`,
              children: [
                E &&
                  V.jsx("button", {
                    onClick: te,
                    "aria-label": "Previous slide",
                    "aria-controls": "slideshow",
                    children: E,
                  }),
                V.jsx("button", {
                  onClick: se,
                  "aria-label": _e.current ? w : x,
                  children: _e.current ? w : x,
                }),
                _ &&
                  V.jsx("button", {
                    onClick: ne,
                    "aria-label": "Next slide",
                    "aria-controls": "slideshow",
                    children: _,
                  }),
              ],
            }),
            V.jsx("div", {
              className: `${Me.thumbnailButtonWrapper} bb-thumbnail-button-wrapper`,
              role: "tablist",
              children: C.map((X, q) =>
                V.jsx(
                  "button",
                  {
                    ref: (wt) => (M.current[q] = wt),
                    onClick: () => R(q),
                    className: `${Me.thumbnail} ${q === K ? `${Me.active} bb-active` : ""} bb-thumbnail`,
                    role: "tab",
                    "aria-selected": q === K,
                    "aria-controls": `slide-${q}`,
                    id: `tab-${q}`,
                    children: C[q].thumbnail
                      ? V.jsx("img", {
                          src: C[q].thumbnail,
                          alt: C[q].alt || `Slide thumbnail ${q + 1}`,
                        })
                      : V.jsx("span", {
                          className: "bb-visually-hidden",
                          children: `Slide ${q + 1}`,
                        }),
                  },
                  q,
                ),
              ),
            }),
            V.jsx("p", {
              className: `${Me.visuallyHidden} bb-visually-hidden`,
              children:
                "Use the left and right arrow keys to navigate the slideshow.",
            }),
          ],
        }),
      ],
    });
  };
class zh {
  static applyChildCSSVariables(s) {
    if (!Ir.isValidElement(s))
      throw new Error("Invalid React element provided.");
    const a = Ir.Children.toArray(s.props.children),
      p = a.length,
      f = { ...(s.props.style || {}), "--numChildren": p.toString() },
      m = a.map((E, _) => {
        if (Ir.isValidElement(E)) {
          const w = { ...(E.props.style || {}), "--childIndex": _.toString() };
          return Ir.cloneElement(E, { style: w });
        }
        return E;
      });
    return Ir.cloneElement(s, { style: f, children: m });
  }
}
function Ih() {
  console.log("process.env.NODE_ENV", "production");
  const i = "/bb-react-slideshow",
    s = [
      {
        slug: "one",
        background: `${i}/assets/images/1-background.jpg`,
        thumbnail: `${i}/assets/images/1-thumbnail.jpg`,
        desc: "",
        alt: "Rico the dog",
        content: V.jsxs("div", {
          children: [
            V.jsx("h3", { children: "MORE FROM RICO THE DOG" }),
            V.jsx("button", { children: "RICO IS BACK!" }),
            V.jsx("h2", { children: "RICOBOT" }),
            V.jsx("p", {
              children:
                "Charge into a brand-new supersized adventure with RICO across 50 exciting and diverse worlds, available now on PS5!",
            }),
            V.jsx("a", {
              href: "https://www.playstation.com/",
              className: "bb-cta",
              target: "_blank",
              children: "LEARN MORE",
            }),
          ],
        }),
      },
      {
        slug: "two",
        background: `${i}/assets/images/2-background.jpg`,
        thumbnail: `${i}/assets/images/2-thumbnail.jpg`,
        desc: "",
        alt: "Rico napping",
        content: V.jsxs("div", {
          children: [
            V.jsx("h3", { children: "CAUGHT IN THE ACT…" }),
            V.jsx("button", { children: "BASHFUL BULLDOG" }),
            V.jsx("h2", { children: "RICO NAPS" }),
            V.jsx("p", {
              children:
                "Rico may be the king of the couch, but when you walk in on his mid-afternoon lounging session, he suddenly pretends he's never seen a bed before. His guilty-but-adorable side-eye is unmatched.",
            }),
            V.jsx("a", {
              href: "https://www.playstation.com/",
              className: "bb-cta",
              target: "_blank",
              children: "RICOS'S SHENANIGANS",
            }),
          ],
        }),
      },
      {
        slug: "three",
        background: `${i}/assets/images/3-background.jpg`,
        thumbnail: `${i}/assets/images/3-thumbnail.jpg`,
        desc: "",
        alt: "Rico in the snow",
        content: V.jsxs("div", {
          children: [
            V.jsx("h3", { children: "SNOW DAY WITH RICO" }),
            V.jsx("button", { children: "FROSTY FUN" }),
            V.jsx("h2", { children: "SNOW CHOMP" }),
            V.jsx("p", {
              children:
                "Rico takes winter adventures to the next level! Whether he's chomping on snow or leaving adorable paw prints behind, his enthusiasm for frosty fun is absolutely contagious. Don't miss his next snowy escapade!",
            }),
            V.jsx("a", {
              href: "https://www.playstation.com/",
              className: "bb-cta",
              target: "_blank",
              children: "EXPLORE MORE",
            }),
          ],
        }),
      },
      {
        slug: "four",
        background: `${i}/assets/images/4-background.jpg`,
        thumbnail: `${i}/assets/images/4-thumbnail.jpg`,
        desc: "",
        alt: "Rico flying",
        content: V.jsxs("div", {
          children: [
            V.jsx("h3", { children: "FLY HIGH, RICO!" }),
            V.jsx("button", { children: "SKY-HIGH STYLE" }),
            V.jsx("h2", { className: "", children: "RICO TAKES FLIGHT" }),
            V.jsx("p", {
              children:
                "Rico is on top of the world—literally! Whether it's a summer breeze or the view from above, he’s the star of every outdoor adventure. Soak up the sunshine with this fearless flying Frenchie.",
            }),
            V.jsx("a", {
              href: "https://www.playstation.com/",
              className: "bb-cta",
              target: "_blank",
              children: "JOIN THE FUN",
            }),
          ],
        }),
      },
      {
        slug: "five",
        background: `${i}/assets/images/5-background.jpg`,
        thumbnail: `${i}/assets/images/5-thumbnail.jpg`,
        desc: "",
        alt: "Rico's birthday",
        content: V.jsxs("div", {
          children: [
            V.jsx("h3", { children: "IT'S RICO'S DAY!" }),
            V.jsx("button", { children: "PARTY ANIMAL" }),
            V.jsx("h2", { children: "BIRTHDAY BOY" }),
            V.jsx("p", {
              children:
                "Rico's turning one, and he's ready to celebrate in style! With a cupcake in front of him and his bright yellow party hat, this pup knows how to steal the spotlight. Here's to the sweetest birthday ever!",
            }),
            V.jsx("a", {
              href: "https://www.playstation.com/",
              className: "bb-cta",
              target: "_blank",
              children: "CELEBRATE WITH RICO",
            }),
          ],
        }),
      },
      {
        slug: "six",
        background: `${i}/assets/images/6-background.jpg`,
        thumbnail: `${i}/assets/images/6-thumbnail.jpg`,
        desc: "",
        alt: "Rico in the sun",
        content: V.jsxs("div", {
          children: [
            V.jsx("h3", { children: "SUMMER VIBES ONLY" }),
            V.jsx("button", { children: "WALK & ROLL" }),
            V.jsx("h2", { children: "RICO'S RECHARGE" }),
            V.jsx("p", {
              children:
                "Nothing beats a sunny stroll for this happy pup! Rico's mid-walk breather, complete with closed eyes and a big panting grin, is pure summertime bliss. Leash up and join him for the ultimate doggy day out.",
            }),
            V.jsx("a", {
              href: "https://www.playstation.com/",
              className: "bb-cta",
              target: "_blank",
              children: "WALK WITH RICO",
            }),
          ],
        }),
      },
    ].map((a) => ({ ...a, content: zh.applyChildCSSVariables(a.content) }));
  return V.jsx(ih, {
    children: V.jsxs(Dp, {
      children: [
        V.jsx(ru, {
          path: `${i}/rico-slideshow/:slug`,
          element: V.jsx(wc, {
            slides: s,
            basePath: `${i}/rico-slideshow`,
            initialAutoSlide: !0,
          }),
        }),
        V.jsx(ru, {
          path: `${i}/second-slideshow/:slug`,
          element: V.jsx(wc, { slides: s, basePath: `${i}/rico-slideshow` }),
        }),
      ],
    }),
  });
}
Qd.createRoot(document.getElementById("root")).render(
  V.jsx(k.StrictMode, { children: V.jsx(Ih, {}) }),
);