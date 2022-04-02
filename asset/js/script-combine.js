/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "2.2.4",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return e.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : e.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a) {
        return n.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(e.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: g,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                        : (f = c && n.isPlainObject(c) ? c : {}),
                      (g[b] = n.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var b = a && a.toString();
        return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
      },
      isPlainObject: function (a) {
        var b;
        if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
        if (
          a.constructor &&
          !k.call(a, "constructor") &&
          !k.call(a.constructor.prototype || {}, "isPrototypeOf")
        )
          return !1;
        for (b in a);
        return void 0 === b || k.call(a, b);
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? i[j.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = n.trim(a)),
          a &&
            (1 === a.indexOf("use strict")
              ? ((b = d.createElement("script")),
                (b.text = a),
                d.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (s(a)) {
          for (c = a.length; c > d; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : g.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : h.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          g = 0,
          h = [];
        if (s(a))
          for (d = a.length; d > g; g++)
            (e = b(a[g], g, c)), null != e && h.push(e);
        else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
        return f.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, f;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((d = e.call(arguments, 2)),
              (f = function () {
                return a.apply(b || this, d.concat(e.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: l,
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : "array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        L +
        "*\\]",
      O =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        N +
        ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function fa(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== x && (o = $.exec(a)))
          if ((f = o[1])) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = o[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return H.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) (w = b), (s = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(aa, "\\$&"))
              : b.setAttribute("id", (k = u)),
              (r = g(a)),
              (h = r.length),
              (l = V.test(k) ? "#" + k : "[id='" + k + "']");
            while (h--) r[h] = l + " " + qa(r[h]);
            (s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
          }
          if (s)
            try {
              return H.apply(d, w.querySelectorAll(s)), d;
            } catch (y) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e);
    }
    function ga() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ha(a) {
      return (a[u] = !0), a;
    }
    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function ka(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function na(a) {
      return ha(function (b) {
        return (
          (b = +b),
          ha(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = fa.support = {}),
      (f = fa.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = fa.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", da, !1)
                  : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ia(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ia(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
              (c.getById = ia(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return "undefined" != typeof b.getElementsByClassName && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = Z.test(n.querySelectorAll)) &&
                (ia(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ia(function (a) {
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Z.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ia(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", O);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Z.test(o.compareDocumentPosition)),
              (t =
                b || Z.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? ka(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (fa.matches = function (a, b) {
        return fa(a, null, null, b);
      }),
      (fa.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(T, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return fa(b, n, null, [a]).length > 0;
      }),
      (fa.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fa.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (fa.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (fa.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fa.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = fa.selectors =
        {
          cacheLength: 50,
          createPseudo: ha,
          match: W,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ba, ca)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || fa.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && fa.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return W.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      U.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ba, ca).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = fa.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  fa.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ha(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ha(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(Q, "$1"));
              return d[u]
                ? ha(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ha(function (a) {
              return function (b) {
                return fa(a, b).length > 0;
              };
            }),
            contains: ha(function (a) {
              return (
                (a = a.replace(ba, ca)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ha(function (a) {
              return (
                V.test(a || "") || fa.error("unsupported lang: " + a),
                (a = a.replace(ba, ca).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Y.test(a.nodeName);
            },
            input: function (a) {
              return X.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: na(function () {
              return [0];
            }),
            last: na(function (a, b) {
              return [b - 1];
            }),
            eq: na(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: na(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: na(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = la(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
    function pa() {}
    (pa.prototype = d.filters = d.pseudos),
      (d.setFilters = new pa()),
      (g = fa.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = R.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = S.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(Q, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = W[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        });
    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j,
              k = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((j = b[u] || (b[u] = {})),
                    (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (k[2] = h[2]);
                  if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function sa(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c;
    }
    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function va(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = va(d)),
        e && !e[u] && (e = va(e, f)),
        ha(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ua(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ua(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function wa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ra(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ra(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return va(
              i > 1 && sa(m),
              i > 1 &&
                qa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(Q, "$1"),
              c,
              e > i && wa(a.slice(i, e)),
              f > e && wa((a = a.slice(e))),
              f > e && qa(a)
            );
          }
          m.push(c);
        }
      return sa(m);
    }
    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u);
            }
            H.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ha(f) : f;
    }
    return (
      (h = fa.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xa(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fa.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = W.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ba, ca),
                  (_.test(j[0].type) && oa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(
              f,
              b,
              !p,
              e,
              !b || (_.test(a) && oa(b.parentNode)) || b
            ),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ia(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ia(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ja("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ia(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ja("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ia(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ja(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      fa
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.uniqueSort = n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
  function z(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            })
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)),
          (d.selector = this.selector ? this.selector + " " + a : a),
          d
        );
      },
      filter: function (a) {
        return this.pushStack(z(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(z(this, a || [], !0));
      },
      is: function (a) {
        return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var A,
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = (n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || A), "string" == typeof a)) {
        if (
          ((e =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : B.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            x.test(e[1]) && n.isPlainObject(b))
          )
            for (e in b)
              n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return (
          (f = d.getElementById(e[2])),
          f && f.parentNode && ((this.length = 1), (this[0] = f)),
          (this.context = d),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (C.prototype = n.fn), (A = n(d));
  var D = /^(?:parents|prev(?:Until|All))/,
    E = { children: !0, contents: !0, next: !0, prev: !0 };
  n.fn.extend({
    has: function (a) {
      var b = n(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      for (
        var c,
          d = 0,
          e = this.length,
          f = [],
          g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
        e > d;
        d++
      )
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (
            c.nodeType < 11 &&
            (g
              ? g.index(c) > -1
              : 1 === c.nodeType && n.find.matchesSelector(c, a))
          ) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? h.call(n(a), this[0])
          : h.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return u(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return u(a, "parentNode", c);
      },
      next: function (a) {
        return F(a, "nextSibling");
      },
      prev: function (a) {
        return F(a, "previousSibling");
      },
      nextAll: function (a) {
        return u(a, "nextSibling");
      },
      prevAll: function (a) {
        return u(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return u(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return u(a, "previousSibling", c);
      },
      siblings: function (a) {
        return v((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return v(a.firstChild);
      },
      contents: function (a) {
        return a.contentDocument || n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 &&
            (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var G = /\S+/g;
  function H(a) {
    var b = {};
    return (
      n.each(a.match(G) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                n.each(b, function (b, c) {
                  n.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== n.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            n.each(arguments, function (a, b) {
              var c;
              while ((c = n.inArray(b, f, c)) > -1)
                f.splice(c, 1), h >= c && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = g = []), c || (f = c = ""), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(c.notify)
                            .done(c.resolve)
                            .fail(c.reject)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (d > 1)
          for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .progress(h(b, j, i))
                  .done(h(b, k, c))
                  .fail(g.reject)
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var I;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (I.resolveWith(d, [n]),
            n.fn.triggerHandler &&
              (n(d).triggerHandler("ready"), n(d).off("ready"))));
      },
    });
  function J() {
    d.removeEventListener("DOMContentLoaded", J),
      a.removeEventListener("load", J),
      n.ready();
  }
  (n.ready.promise = function (b) {
    return (
      I ||
        ((I = n.Deferred()),
        "complete" === d.readyState ||
        ("loading" !== d.readyState && !d.documentElement.doScroll)
          ? a.setTimeout(n.ready)
          : (d.addEventListener("DOMContentLoaded", J),
            a.addEventListener("load", J))),
      I.promise(b)
    );
  }),
    n.ready.promise();
  var K = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) K(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        n.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(n(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    L = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function M() {
    this.expando = n.expando + M.uid++;
  }
  (M.uid = 1),
    (M.prototype = {
      register: function (a, b) {
        var c = b || {};
        return (
          a.nodeType
            ? (a[this.expando] = c)
            : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0,
              }),
          a[this.expando]
        );
      },
      cache: function (a) {
        if (!L(a)) return {};
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            L(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a);
        if ("string" == typeof b) e[b] = c;
        else for (d in b) e[d] = b[d];
        return e;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = a[this.expando];
        if (void 0 !== f) {
          if (void 0 === b) this.register(a);
          else {
            n.isArray(b)
              ? (d = b.concat(b.map(n.camelCase)))
              : ((e = n.camelCase(b)),
                b in f
                  ? (d = [b, e])
                  : ((d = e), (d = d in f ? [d] : d.match(G) || []))),
              (c = d.length);
            while (c--) delete f[d[c]];
          }
          (void 0 === b || n.isEmptyObject(f)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        var b = a[this.expando];
        return void 0 !== b && !n.isEmptyObject(b);
      },
    });
  var N = new M(),
    O = new M(),
    P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Q = /[A-Z]/g;
  function R(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Q, "-$&").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : P.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        O.set(a, b, c);
      } else c = void 0;
    return c;
  }
  n.extend({
    hasData: function (a) {
      return O.hasData(a) || N.hasData(a);
    },
    data: function (a, b, c) {
      return O.access(a, b, c);
    },
    removeData: function (a, b) {
      O.remove(a, b);
    },
    _data: function (a, b, c) {
      return N.access(a, b, c);
    },
    _removeData: function (a, b) {
      N.remove(a, b);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = O.get(f)), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), R(f, d, e[d])));
            N.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              O.set(this, a);
            })
          : K(
              this,
              function (b) {
                var c, d;
                if (f && void 0 === b) {
                  if (
                    ((c =
                      O.get(f, a) ||
                      O.get(f, a.replace(Q, "-$&").toLowerCase())),
                    void 0 !== c)
                  )
                    return c;
                  if (((d = n.camelCase(a)), (c = O.get(f, d)), void 0 !== c))
                    return c;
                  if (((c = R(f, d, void 0)), void 0 !== c)) return c;
                } else
                  (d = n.camelCase(a)),
                    this.each(function () {
                      var c = O.get(this, d);
                      O.set(this, d, b),
                        a.indexOf("-") > -1 &&
                          void 0 !== c &&
                          O.set(this, a, b);
                    });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          O.remove(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = N.get(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = N.access(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          N.get(a, c) ||
          N.access(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              N.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = N.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    U = ["Top", "Right", "Bottom", "Left"],
    V = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    };
  function W(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return n.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || ("px" !== j && +i)) && T.exec(n.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var X = /^(?:checkbox|radio)$/i,
    Y = /<([\w:-]+)/,
    Z = /^$|\/(?:java|ecma)script/i,
    $ = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  ($.optgroup = $.option),
    ($.tbody = $.tfoot = $.colgroup = $.caption = $.thead),
    ($.th = $.td);
  function _(a, b) {
    var c =
      "undefined" != typeof a.getElementsByTagName
        ? a.getElementsByTagName(b || "*")
        : "undefined" != typeof a.querySelectorAll
        ? a.querySelectorAll(b || "*")
        : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
  }
  var ba = /<|&#?\w+;/;
  function ca(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        o = 0,
        p = a.length;
      p > o;
      o++
    )
      if (((f = a[o]), f || 0 === f))
        if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
        else if (ba.test(f)) {
          (g = g || l.appendChild(b.createElement("div"))),
            (h = (Y.exec(f) || ["", ""])[1].toLowerCase()),
            (i = $[h] || $._default),
            (g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2]),
            (k = i[0]);
          while (k--) g = g.lastChild;
          n.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
        } else m.push(b.createTextNode(f));
    (l.textContent = ""), (o = 0);
    while ((f = m[o++]))
      if (d && n.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = n.contains(f.ownerDocument, f)),
        (g = _(l.appendChild(f), "script")),
        j && aa(g),
        c)
      ) {
        k = 0;
        while ((f = g[k++])) Z.test(f.type || "") && c.push(f);
      }
    return l;
  }
  !(function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var da = /^key/,
    ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    fa = /^([^.]*)(?:\.(.+)|)/;
  function ga() {
    return !0;
  }
  function ha() {
    return !1;
  }
  function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ja(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ja(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = ha;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return n().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = n.guid++))),
      a.each(function () {
        n.event.add(this, b, e, d, c);
      })
    );
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = N.get(a);
      if (r) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          c.guid || (c.guid = n.guid++),
          (i = r.events) || (i = r.events = {}),
          (g = r.handle) ||
            (g = r.handle =
              function (b) {
                return "undefined" != typeof n && n.event.triggered !== b.type
                  ? n.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || "").match(G) || [""]),
          (j = b.length);
        while (j--)
          (h = fa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                f
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(o, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = N.hasData(a) && N.get(a);
      if (r && (i = r.events)) {
        (b = (b || "").match(G) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = fa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = i[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        d,
        f,
        g,
        h = [],
        i = e.call(arguments),
        j = (N.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (a.rnamespace && !a.rnamespace.test(g.namespace)) ||
              ((a.handleObj = g),
              (a.data = g.data),
              (d = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== d &&
                (a.result = d) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (
        h &&
        i.nodeType &&
        ("click" !== a.type || isNaN(a.button) || a.button < 1)
      )
        for (; i !== this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) > -1
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || d),
            (e = c.documentElement),
            (f = c.body),
            (a.pageX =
              b.clientX +
              ((e && e.scrollLeft) || (f && f.scrollLeft) || 0) -
              ((e && e.clientLeft) || (f && f.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((e && e.scrollTop) || (f && f.scrollTop) || 0) -
              ((e && e.clientTop) || (f && f.clientTop) || 0))),
          a.which ||
            void 0 === g ||
            (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = a.type,
        g = a,
        h = this.fixHooks[f];
      h ||
        (this.fixHooks[f] = h =
          ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}),
        (e = h.props ? this.props.concat(h.props) : this.props),
        (a = new n.Event(g)),
        (b = e.length);
      while (b--) (c = e[b]), (a[c] = g[c]);
      return (
        a.target || (a.target = d),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        h.filter ? h.filter(a, g) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            n.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? ga
                  : ha))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: ha,
      isPropagationStopped: ha,
      isImmediatePropagationStopped: ha,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = ga),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = ga),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = ga),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || n.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    n.fn.extend({
      on: function (a, b, c, d) {
        return ja(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return ja(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = ha),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
    });
  var ka =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    la = /<script|<style|<link/i,
    ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
    na = /^true\/(.*)/,
    oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function pa(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function qa(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function ra(a) {
    var b = na.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function sa(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        N.hasData(a) &&
        ((f = N.access(a)), (g = N.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      O.hasData(a) && ((h = O.access(a)), (i = n.extend({}, h)), O.set(b, i));
    }
  }
  function ta(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && X.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function ua(a, b, c, d) {
    b = f.apply([], b);
    var e,
      g,
      h,
      i,
      j,
      k,
      m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || (o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
      });
    if (
      o &&
      ((e = ca(b, a[0].ownerDocument, !1, a, d)),
      (g = e.firstChild),
      1 === e.childNodes.length && (e = g),
      g || d)
    ) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++)
        (j = e),
          m !== p &&
            ((j = n.clone(j, !0, !0)), i && n.merge(h, _(j, "script"))),
          c.call(a[m], j, m);
      if (i)
        for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++)
          (j = h[m]),
            Z.test(j.type || "") &&
              !N.access(j, "globalEval") &&
              n.contains(k, j) &&
              (j.src
                ? n._evalUrl && n._evalUrl(j.src)
                : n.globalEval(j.textContent.replace(oa, "")));
    }
    return a;
  }
  function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || n.cleanData(_(d)),
        d.parentNode &&
          (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(ka, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (
        !(
          l.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        )
      )
        for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++)
          ta(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++)
            sa(f[d], g[d]);
        else sa(a, h);
      return (
        (g = _(h, "script")), g.length > 0 && aa(g, !i && _(a, "script")), h
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (L(c)) {
          if ((b = c[N.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            c[N.expando] = void 0;
          }
          c[O.expando] && (c[O.expando] = void 0);
        }
    },
  }),
    n.fn.extend({
      domManip: ua,
      detach: function (a) {
        return va(this, a, !0);
      },
      remove: function (a) {
        return va(this, a);
      },
      text: function (a) {
        return K(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return ua(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = pa(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return ua(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = pa(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return ua(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return ua(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(_(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return K(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !la.test(a) &&
              !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = n.htmlPrefilter(a);
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(_(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return ua(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            n.inArray(this, a) < 0 &&
              (n.cleanData(_(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++)
            (c = h === f ? this : this.clone(!0)),
              n(e[h])[b](c),
              g.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var wa,
    xa = { HTML: "block", BODY: "block" };
  function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d;
  }
  function za(a) {
    var b = d,
      c = xa[a];
    return (
      c ||
        ((c = ya(a, b)),
        ("none" !== c && c) ||
          ((wa = (
            wa || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = wa[0].contentDocument),
          b.write(),
          b.close(),
          (c = ya(a, b)),
          wa.detach()),
        (xa[a] = c)),
      c
    );
  }
  var Aa = /^margin/,
    Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ca = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    },
    Da = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Ea = d.documentElement;
  !(function () {
    var b,
      c,
      e,
      f,
      g = d.createElement("div"),
      h = d.createElement("div");
    if (h.style) {
      (h.style.backgroundClip = "content-box"),
        (h.cloneNode(!0).style.backgroundClip = ""),
        (l.clearCloneStyle = "content-box" === h.style.backgroundClip),
        (g.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        g.appendChild(h);
      function i() {
        (h.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (h.innerHTML = ""),
          Ea.appendChild(g);
        var d = a.getComputedStyle(h);
        (b = "1%" !== d.top),
          (f = "2px" === d.marginLeft),
          (c = "4px" === d.width),
          (h.style.marginRight = "50%"),
          (e = "4px" === d.marginRight),
          Ea.removeChild(g);
      }
      n.extend(l, {
        pixelPosition: function () {
          return i(), b;
        },
        boxSizingReliable: function () {
          return null == c && i(), c;
        },
        pixelMarginRight: function () {
          return null == c && i(), e;
        },
        reliableMarginLeft: function () {
          return null == c && i(), f;
        },
        reliableMarginRight: function () {
          var b,
            c = h.appendChild(d.createElement("div"));
          return (
            (c.style.cssText = h.style.cssText =
              "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (c.style.marginRight = c.style.width = "0"),
            (h.style.width = "1px"),
            Ea.appendChild(g),
            (b = !parseFloat(a.getComputedStyle(c).marginRight)),
            Ea.removeChild(g),
            h.removeChild(c),
            b
          );
        },
      });
    }
  })();
  function Fa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Ca(a)),
      (g = c ? c.getPropertyValue(b) || c[b] : void 0),
      ("" !== g && void 0 !== g) ||
        n.contains(a.ownerDocument, a) ||
        (g = n.style(a, b)),
      c &&
        !l.pixelMarginRight() &&
        Ba.test(g) &&
        Aa.test(b) &&
        ((d = h.width),
        (e = h.minWidth),
        (f = h.maxWidth),
        (h.minWidth = h.maxWidth = h.width = g),
        (g = c.width),
        (h.width = d),
        (h.minWidth = e),
        (h.maxWidth = f)),
      void 0 !== g ? g + "" : g
    );
  }
  function Ga(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Ha = /^(none|table(?!-c[ea]).+)/,
    Ia = { position: "absolute", visibility: "hidden", display: "block" },
    Ja = { letterSpacing: "0", fontWeight: "400" },
    Ka = ["Webkit", "O", "Moz", "ms"],
    La = d.createElement("div").style;
  function Ma(a) {
    if (a in La) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ka.length;
    while (c--) if (((a = Ka[c] + b), a in La)) return a;
  }
  function Na(a, b, c) {
    var d = T.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Oa(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + U[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + U[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    return g;
  }
  function Pa(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ca(a),
      g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Fa(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Ba.test(e))
      )
        return e;
      (d = g && (l.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = N.get(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                V(d) &&
                (f[g] = N.access(d, "olddisplay", za(d.nodeName))))
            : ((e = V(d)),
              ("none" === c && e) ||
                N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Fa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = T.exec(c)) &&
                e[1] &&
                ((c = W(a, b, e)), (f = "number")),
              null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Fa(a, b, d)),
        "normal" === e && b in Ja && (e = Ja[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? Da(a, Ia, function () {
                  return Pa(a, b, d);
                })
              : Pa(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e,
            f = d && Ca(a),
            g =
              d &&
              Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
          return (
            g &&
              (e = T.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = n.css(a, b))),
            Na(a, c, g)
          );
        },
      };
    }),
    (n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
      return b
        ? (parseFloat(Fa(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              Da(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        : void 0;
    })),
    (n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
      return b
        ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"])
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Aa.test(a) || (n.cssHooks[a + b].set = Na);
    }),
    n.fn.extend({
      css: function (a, b) {
        return K(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = Ca(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Qa(this, !0);
      },
      hide: function () {
        return Qa(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              V(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Ra),
    (Ra.prototype = {
      constructor: Ra,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || n.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Ra.propHooks[this.prop];
        return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Ra.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Ra.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ra.prototype.init.prototype = Ra.prototype),
    (Ra.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : n.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (n.fx = Ra.prototype.init),
    (n.fx.step = {});
  var Sa,
    Ta,
    Ua = /^(?:toggle|show|hide)$/,
    Va = /queueHooks$/;
  function Wa() {
    return (
      a.setTimeout(function () {
        Sa = void 0;
      }),
      (Sa = n.now())
    );
  }
  function Xa(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = U[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ya(a, b, c) {
    for (
      var d,
        e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]),
        f = 0,
        g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Za(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = {},
      o = a.style,
      p = a.nodeType && V(a),
      q = N.get(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function () {
        l.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (o.display = "inline-block")),
      c.overflow &&
        ((o.overflow = "hidden"),
        l.always(function () {
          (o.overflow = c.overflow[0]),
            (o.overflowX = c.overflow[1]),
            (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Ua.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m))
      "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : (q = N.access(a, "fxshow", {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(function () {
              n(a).hide();
            }),
        l.done(function () {
          var b;
          N.remove(a, "fxshow");
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ya(p ? q[d] : 0, d, l)),
          d in q ||
            ((q[d] = g.start),
            p &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function $a(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function _a(a, b, c) {
    var d,
      e,
      f = 0,
      g = _a.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = Sa || Wa(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Sa || Wa(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for ($a(k, j.opts.specialEasing); g > f; f++)
      if ((d = _a.prefilters[f].call(j, a, k, j.opts)))
        return (
          n.isFunction(d.stop) &&
            (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
          d
        );
    return (
      n.map(k, Ya, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(_a, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return W(c.elem, a, T.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]),
          (_a.tweeners[c] = _a.tweeners[c] || []),
          _a.tweeners[c].unshift(b);
    },
    prefilters: [Za],
    prefilter: function (a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(V)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = _a(this, n.extend({}, a), f);
            (e || N.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = N.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = N.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(Xa(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = 0,
        c = n.timers;
      for (Sa = n.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (Sa = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      a.clearInterval(Ta), (Ta = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (b, c) {
      return (
        (b = n.fx ? n.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      (a.type = "checkbox"),
        (l.checkOn = "" !== a.value),
        (l.optSelected = c.selected),
        (b.disabled = !0),
        (l.optDisabled = !c.disabled),
        (a = d.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (l.radioValue = "t" === a.value);
    })();
  var ab,
    bb = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (e =
                  n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0))),
              void 0 !== c
                ? null === c
                  ? void n.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(G);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
    }),
    (ab = {
      set: function (a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = bb[b] || n.find.attr;
      bb[b] = function (a, b, d) {
        var e, f;
        return (
          d ||
            ((f = bb[b]),
            (bb[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            (bb[b] = f)),
          e
        );
      };
    });
  var cb = /^(?:input|select|textarea|button)$/i,
    db = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    },
  }),
    n.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && n.isXMLDoc(a)) ||
              ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = n.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : cb.test(a.nodeName) || (db.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    l.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    );
  var eb = /[\t\r\n\f]/g;
  function fb(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, fb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = fb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")))
          ) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = n.trim(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, fb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = fb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")))
          ) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = n.trim(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : n.isFunction(a)
        ? this.each(function (c) {
            n(this).toggleClass(a.call(this, c, fb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = n(this)), (f = a.match(G) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = fb(this)), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (
          1 === c.nodeType &&
          (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1
        )
          return !0;
      return !1;
    },
  });
  var gb = /\r/g,
    hb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                (c.selected || i === e) &&
                  (l.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute("disabled")) &&
                  (!c.parentNode.disabled ||
                    !n.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]),
                (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) > -1)
            : void 0;
        },
      }),
        l.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var ib = /^(?:focusinfocus|focusoutblur)$/;
  n.extend(n.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !ib.test(q + n.event.triggered) &&
          (q.indexOf(".") > -1 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (l = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          f || !o.trigger || o.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (
            j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            p.push(h), (i = h);
          i === (e.ownerDocument || d) &&
            p.push(i.defaultView || i.parentWindow || a);
        }
        g = 0;
        while ((h = p[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : o.bindType || q),
            (m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle")),
            m && m.apply(h, c),
            (m = l && h[l]),
            m &&
              m.apply &&
              L(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = q),
          f ||
            b.isDefaultPrevented() ||
            (o._default && o._default.apply(p.pop(), c) !== !1) ||
            !L(e) ||
            (l &&
              n.isFunction(e[q]) &&
              !n.isWindow(e) &&
              ((i = e[l]),
              i && (e[l] = null),
              (n.event.triggered = q),
              e[q](),
              (n.event.triggered = void 0),
              i && (e[l] = i))),
          b.result
        );
      }
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
      n.event.trigger(d, null, b);
    },
  }),
    n.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    (l.focusin = "onfocusin" in a),
    l.focusin ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = N.access(d, b);
            e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = N.access(d, b) - 1;
            e
              ? N.access(d, b, e)
              : (d.removeEventListener(a, c, !0), N.remove(d, b));
          },
        };
      });
  var jb = a.location,
    kb = n.now(),
    lb = /\?/;
  (n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }),
    (n.parseXML = function (b) {
      var c;
      if (!b || "string" != typeof b) return null;
      try {
        c = new a.DOMParser().parseFromString(b, "text/xml");
      } catch (d) {
        c = void 0;
      }
      return (
        (c && !c.getElementsByTagName("parsererror").length) ||
          n.error("Invalid XML: " + b),
        c
      );
    });
  var mb = /#.*$/,
    nb = /([?&])_=[^&]*/,
    ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    qb = /^(?:GET|HEAD)$/,
    rb = /^\/\//,
    sb = {},
    tb = {},
    ub = "*/".concat("*"),
    vb = d.createElement("a");
  vb.href = jb.href;
  function wb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function xb(a, b, c, d) {
    var e = {},
      f = a === tb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function yb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function zb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Ab(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: jb.href,
      type: "GET",
      isLocal: pb.test(jb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ub,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
    },
    ajaxPrefilter: wb(sb),
    ajaxTransport: wb(tb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = n.ajaxSetup({}, c),
        o = m.context || m,
        p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
        q = n.Deferred(),
        r = n.Callbacks("once memory"),
        s = m.statusCode || {},
        t = {},
        u = {},
        v = 0,
        w = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === v) {
              if (!h) {
                h = {};
                while ((b = ob.exec(g))) h[b[1].toLowerCase()] = b[2];
              }
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === v ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return v || ((a = u[c] = u[c] || a), (t[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return v || (m.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > v) for (b in a) s[b] = [s[b], a[b]];
              else x.always(a[x.status]);
            return this;
          },
          abort: function (a) {
            var b = a || w;
            return e && e.abort(b), z(0, b), this;
          },
        };
      if (
        ((q.promise(x).complete = r.add),
        (x.success = x.done),
        (x.error = x.fail),
        (m.url = ((b || m.url || jb.href) + "")
          .replace(mb, "")
          .replace(rb, jb.protocol + "//")),
        (m.type = c.method || c.type || m.method || m.type),
        (m.dataTypes = n
          .trim(m.dataType || "*")
          .toLowerCase()
          .match(G) || [""]),
        null == m.crossDomain)
      ) {
        j = d.createElement("a");
        try {
          (j.href = m.url),
            (j.href = j.href),
            (m.crossDomain =
              vb.protocol + "//" + vb.host != j.protocol + "//" + j.host);
        } catch (y) {
          m.crossDomain = !0;
        }
      }
      if (
        (m.data &&
          m.processData &&
          "string" != typeof m.data &&
          (m.data = n.param(m.data, m.traditional)),
        xb(sb, m, c, x),
        2 === v)
      )
        return x;
      (k = n.event && m.global),
        k && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !qb.test(m.type)),
        (f = m.url),
        m.hasContent ||
          (m.data &&
            ((f = m.url += (lb.test(f) ? "&" : "?") + m.data), delete m.data),
          m.cache === !1 &&
            (m.url = nb.test(f)
              ? f.replace(nb, "$1_=" + kb++)
              : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)),
        m.ifModified &&
          (n.lastModified[f] &&
            x.setRequestHeader("If-Modified-Since", n.lastModified[f]),
          n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])),
        ((m.data && m.hasContent && m.contentType !== !1) || c.contentType) &&
          x.setRequestHeader("Content-Type", m.contentType),
        x.setRequestHeader(
          "Accept",
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "")
            : m.accepts["*"]
        );
      for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
      if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v))
        return x.abort();
      w = "abort";
      for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]);
      if ((e = xb(tb, m, c, x))) {
        if (((x.readyState = 1), k && p.trigger("ajaxSend", [x, m]), 2 === v))
          return x;
        m.async &&
          m.timeout > 0 &&
          (i = a.setTimeout(function () {
            x.abort("timeout");
          }, m.timeout));
        try {
          (v = 1), e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;
          z(-1, y);
        }
      } else z(-1, "No Transport");
      function z(b, c, d, h) {
        var j,
          l,
          t,
          u,
          w,
          y = c;
        2 !== v &&
          ((v = 2),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ""),
          (x.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && 300 > b) || 304 === b),
          d && (u = zb(m, x, d)),
          (u = Ab(m, u, x, j)),
          j
            ? (m.ifModified &&
                ((w = x.getResponseHeader("Last-Modified")),
                w && (n.lastModified[f] = w),
                (w = x.getResponseHeader("etag")),
                w && (n.etag[f] = w)),
              204 === b || "HEAD" === m.type
                ? (y = "nocontent")
                : 304 === b
                ? (y = "notmodified")
                : ((y = u.state), (l = u.data), (t = u.error), (j = !t)))
            : ((t = y), (!b && y) || ((y = "error"), 0 > b && (b = 0))),
          (x.status = b),
          (x.statusText = (c || y) + ""),
          j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]),
          x.statusCode(s),
          (s = void 0),
          k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]),
          r.fireWith(o, [x, y]),
          k &&
            (p.trigger("ajaxComplete", [x, m]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return x;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax(
            n.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              n.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        var b;
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = n(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return !n.expr.filters.visible(a);
    }),
    (n.expr.filters.visible = function (a) {
      return (
        a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
      );
    });
  var Bb = /%20/g,
    Cb = /\[\]$/,
    Db = /\r?\n/g,
    Eb = /^(?:submit|button|image|reset|file)$/i,
    Fb = /^(?:input|select|textarea|keygen)/i;
  function Gb(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || Cb.test(a)
          ? d(a, e)
          : Gb(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) Gb(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Gb(c, a[c], b, e);
    return d.join("&").replace(Bb, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              Fb.test(this.nodeName) &&
              !Eb.test(a) &&
              (this.checked || !X.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(Db, "\r\n") };
                })
              : { name: b.name, value: c.replace(Db, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    });
  var Hb = { 0: 200, 1223: 204 },
    Ib = n.ajaxSettings.xhr();
  (l.cors = !!Ib && "withCredentials" in Ib),
    (l.ajax = Ib = !!Ib),
    n.ajaxTransport(function (b) {
      var c, d;
      return l.cors || (Ib && !b.crossDomain)
        ? {
            send: function (e, f) {
              var g,
                h = b.xhr();
              if (
                (h.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
              )
                for (g in b.xhrFields) h[g] = b.xhrFields[g];
              b.mimeType &&
                h.overrideMimeType &&
                h.overrideMimeType(b.mimeType),
                b.crossDomain ||
                  e["X-Requested-With"] ||
                  (e["X-Requested-With"] = "XMLHttpRequest");
              for (g in e) h.setRequestHeader(g, e[g]);
              (c = function (a) {
                return function () {
                  c &&
                    ((c =
                      d =
                      h.onload =
                      h.onerror =
                      h.onabort =
                      h.onreadystatechange =
                        null),
                    "abort" === a
                      ? h.abort()
                      : "error" === a
                      ? "number" != typeof h.status
                        ? f(0, "error")
                        : f(h.status, h.statusText)
                      : f(
                          Hb[h.status] || h.status,
                          h.statusText,
                          "text" !== (h.responseType || "text") ||
                            "string" != typeof h.responseText
                            ? { binary: h.response }
                            : { text: h.responseText },
                          h.getAllResponseHeaders()
                        ));
                };
              }),
                (h.onload = c()),
                (d = h.onerror = c("error")),
                void 0 !== h.onabort
                  ? (h.onabort = d)
                  : (h.onreadystatechange = function () {
                      4 === h.readyState &&
                        a.setTimeout(function () {
                          c && d();
                        });
                    }),
                (c = c("abort"));
              try {
                h.send((b.hasContent && b.data) || null);
              } catch (i) {
                if (c) throw i;
              }
            },
            abort: function () {
              c && c();
            },
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (e, f) {
            (b = n("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && f("error" === a.type ? 404 : 200, a.type);
                })
              )),
              d.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Jb = [],
    Kb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Jb.pop() || n.expando + "_" + kb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Kb.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Kb.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Kb, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? n(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Jb.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || d);
      var e = x.exec(a),
        f = !c && [];
      return e
        ? [b.createElement(e[1])]
        : ((e = ca([a], b, f)),
          f && f.length && n(f).remove(),
          n.merge([], e.childNodes));
    });
  var Lb = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h > -1 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .always(
            c &&
              function (a, b) {
                g.each(function () {
                  c.apply(this, f || [a.responseText, b, a]);
                });
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  function Mb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, d)
              ? ((e = d.getBoundingClientRect()),
                (c = Mb(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === n.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (d = a.offset()),
                (d.top += n.css(a[0], "borderTopWidth", !0)),
                (d.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - d.top - n.css(c, "marginTop", !0),
              left: b.left - d.left - n.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (a && "static" === n.css(a, "position")) a = a.offsetParent;
          return a || Ea;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function (d) {
          return K(
            this,
            function (a, d, e) {
              var f = Mb(a);
              return void 0 === e
                ? f
                  ? f[b]
                  : a[d]
                : void (f
                    ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
        return c
          ? ((c = Fa(a, b)), Ba.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return K(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    n.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
      size: function () {
        return this.length;
      },
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var Nb = a.jQuery,
    Ob = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
    }),
    b || (a.jQuery = a.$ = n),
    n
  );
});

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.Popper = t());
})(this, function () {
  "use strict";
  function e(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = getComputedStyle(e, null);
    return t ? o[t] : o;
  }
  function o(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function n(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;
      case "#document":
        return e.body;
    }
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll)/.test(r + s + p) ? e : n(o(e));
  }
  function r(e) {
    var o = e && e.offsetParent,
      i = o && o.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TD", "TABLE"].indexOf(o.nodeName) &&
        "static" === t(o, "position")
        ? r(o)
        : o
      : e
      ? e.ownerDocument.documentElement
      : document.documentElement;
  }
  function p(e) {
    var t = e.nodeName;
    return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e);
  }
  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }
  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = o ? e : t,
      n = o ? t : e,
      a = document.createRange();
    a.setStart(i, 0), a.setEnd(n, 0);
    var l = a.commonAncestorContainer;
    if ((e !== l && t !== l) || i.contains(n)) return p(l) ? l : r(l);
    var f = s(e);
    return f.host ? d(f.host, t) : d(e, s(t).host);
  }
  function a(e) {
    var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
      o = "top" === t ? "scrollTop" : "scrollLeft",
      i = e.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var n = e.ownerDocument.documentElement,
        r = e.ownerDocument.scrollingElement || n;
      return r[o];
    }
    return e[o];
  }
  function l(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = a(t, "top"),
      n = a(t, "left"),
      r = o ? -1 : 1;
    return (
      (e.top += i * r),
      (e.bottom += i * r),
      (e.left += n * r),
      (e.right += n * r),
      e
    );
  }
  function f(e, t) {
    var o = "x" === t ? "Left" : "Top",
      i = "Left" == o ? "Right" : "Bottom";
    return (
      parseFloat(e["border" + o + "Width"], 10) +
      parseFloat(e["border" + i + "Width"], 10)
    );
  }
  function m(e, t, o, i) {
    return J(
      t["offset" + e],
      t["scroll" + e],
      o["client" + e],
      o["offset" + e],
      o["scroll" + e],
      ie()
        ? o["offset" + e] +
            i["margin" + ("Height" === e ? "Top" : "Left")] +
            i["margin" + ("Height" === e ? "Bottom" : "Right")]
        : 0
    );
  }
  function h() {
    var e = document.body,
      t = document.documentElement,
      o = ie() && getComputedStyle(t);
    return { height: m("Height", e, t, o), width: m("Width", e, t, o) };
  }
  function c(e) {
    return se({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function g(e) {
    var o = {};
    if (ie())
      try {
        o = e.getBoundingClientRect();
        var i = a(e, "top"),
          n = a(e, "left");
        (o.top += i), (o.left += n), (o.bottom += i), (o.right += n);
      } catch (e) {}
    else o = e.getBoundingClientRect();
    var r = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top,
      },
      p = "HTML" === e.nodeName ? h() : {},
      s = p.width || e.clientWidth || r.right - r.left,
      d = p.height || e.clientHeight || r.bottom - r.top,
      l = e.offsetWidth - s,
      m = e.offsetHeight - d;
    if (l || m) {
      var g = t(e);
      (l -= f(g, "x")), (m -= f(g, "y")), (r.width -= l), (r.height -= m);
    }
    return c(r);
  }
  function u(e, o) {
    var i = ie(),
      r = "HTML" === o.nodeName,
      p = g(e),
      s = g(o),
      d = n(e),
      a = t(o),
      f = parseFloat(a.borderTopWidth, 10),
      m = parseFloat(a.borderLeftWidth, 10),
      h = c({
        top: p.top - s.top - f,
        left: p.left - s.left - m,
        width: p.width,
        height: p.height,
      });
    if (((h.marginTop = 0), (h.marginLeft = 0), !i && r)) {
      var u = parseFloat(a.marginTop, 10),
        b = parseFloat(a.marginLeft, 10);
      (h.top -= f - u),
        (h.bottom -= f - u),
        (h.left -= m - b),
        (h.right -= m - b),
        (h.marginTop = u),
        (h.marginLeft = b);
    }
    return (
      (i ? o.contains(d) : o === d && "BODY" !== d.nodeName) && (h = l(h, o)), h
    );
  }
  function b(e) {
    var t = e.ownerDocument.documentElement,
      o = u(e, t),
      i = J(t.clientWidth, window.innerWidth || 0),
      n = J(t.clientHeight, window.innerHeight || 0),
      r = a(t),
      p = a(t, "left"),
      s = {
        top: r - o.top + o.marginTop,
        left: p - o.left + o.marginLeft,
        width: i,
        height: n,
      };
    return c(s);
  }
  function w(e) {
    var i = e.nodeName;
    return "BODY" === i || "HTML" === i
      ? !1
      : "fixed" === t(e, "position") || w(o(e));
  }
  function y(e, t, i, r) {
    var p = { top: 0, left: 0 },
      s = d(e, t);
    if ("viewport" === r) p = b(s);
    else {
      var a;
      "scrollParent" === r
        ? ((a = n(o(t))),
          "BODY" === a.nodeName && (a = e.ownerDocument.documentElement))
        : "window" === r
        ? (a = e.ownerDocument.documentElement)
        : (a = r);
      var l = u(a, s);
      if ("HTML" === a.nodeName && !w(s)) {
        var f = h(),
          m = f.height,
          c = f.width;
        (p.top += l.top - l.marginTop),
          (p.bottom = m + l.top),
          (p.left += l.left - l.marginLeft),
          (p.right = c + l.left);
      } else p = l;
    }
    return (p.left += i), (p.top += i), (p.right -= i), (p.bottom -= i), p;
  }
  function E(e) {
    var t = e.width,
      o = e.height;
    return t * o;
  }
  function v(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var p = y(o, i, r, n),
      s = {
        top: { width: p.width, height: t.top - p.top },
        right: { width: p.right - t.right, height: p.height },
        bottom: { width: p.width, height: p.bottom - t.bottom },
        left: { width: t.left - p.left, height: p.height },
      },
      d = Object.keys(s)
        .map(function (e) {
          return se({ key: e }, s[e], { area: E(s[e]) });
        })
        .sort(function (e, t) {
          return t.area - e.area;
        }),
      a = d.filter(function (e) {
        var t = e.width,
          i = e.height;
        return t >= o.clientWidth && i >= o.clientHeight;
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split("-")[1];
    return l + (f ? "-" + f : "");
  }
  function O(e, t, o) {
    var i = d(t, o);
    return u(o, i);
  }
  function L(e) {
    var t = getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      n = { width: e.offsetWidth + i, height: e.offsetHeight + o };
    return n;
  }
  function x(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function S(e, t, o) {
    o = o.split("-")[0];
    var i = L(e),
      n = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(o),
      p = r ? "top" : "left",
      s = r ? "left" : "top",
      d = r ? "height" : "width",
      a = r ? "width" : "height";
    return (
      (n[p] = t[p] + t[d] / 2 - i[d] / 2),
      (n[s] = o === s ? t[s] - i[a] : t[x(s)]),
      n
    );
  }
  function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function D(e, t, o) {
    if (Array.prototype.findIndex)
      return e.findIndex(function (e) {
        return e[t] === o;
      });
    var i = T(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(i);
  }
  function C(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, D(t, "name", i));
    return (
      n.forEach(function (t) {
        t["function"] &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var i = t["function"] || t.fn;
        t.enabled &&
          e(i) &&
          ((o.offsets.popper = c(o.offsets.popper)),
          (o.offsets.reference = c(o.offsets.reference)),
          (o = i(o, t)));
      }),
      o
    );
  }
  function N() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (e.offsets.reference = O(this.state, this.popper, this.reference)),
        (e.placement = v(
          this.options.placement,
          e.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (e.originalPlacement = e.placement),
        (e.offsets.popper = S(this.popper, e.offsets.reference, e.placement)),
        (e.offsets.popper.position = "absolute"),
        (e = C(this.modifiers, e)),
        this.state.isCreated
          ? this.options.onUpdate(e)
          : ((this.state.isCreated = !0), this.options.onCreate(e));
    }
  }
  function k(e, t) {
    return e.some(function (e) {
      var o = e.name,
        i = e.enabled;
      return i && o === t;
    });
  }
  function W(e) {
    for (
      var t = [!1, "ms", "Webkit", "Moz", "O"],
        o = e.charAt(0).toUpperCase() + e.slice(1),
        n = 0;
      n < t.length - 1;
      n++
    ) {
      var i = t[n],
        r = i ? "" + i + o : e;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function P() {
    return (
      (this.state.isDestroyed = !0),
      k(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.left = ""),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style[W("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function B(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function H(e, t, o, i) {
    var r = "BODY" === e.nodeName,
      p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, { passive: !0 }),
      r || H(n(p.parentNode), t, o, i),
      i.push(p);
  }
  function A(e, t, o, i) {
    (o.updateBound = i),
      B(e).addEventListener("resize", o.updateBound, { passive: !0 });
    var r = n(e);
    return (
      H(r, "scroll", o.updateBound, o.scrollParents),
      (o.scrollElement = r),
      (o.eventsEnabled = !0),
      o
    );
  }
  function I() {
    this.state.eventsEnabled ||
      (this.state = A(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function M(e, t) {
    return (
      B(e).removeEventListener("resize", t.updateBound),
      t.scrollParents.forEach(function (e) {
        e.removeEventListener("scroll", t.updateBound);
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    );
  }
  function R() {
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state = M(this.reference, this.state)));
  }
  function U(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) &&
        U(t[o]) &&
        (i = "px"),
        (e.style[o] = t[o] + i);
    });
  }
  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];
      !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }
  function F(e, t, o) {
    var i = T(e, function (e) {
        var o = e.name;
        return o === t;
      }),
      n =
        !!i &&
        e.some(function (e) {
          return e.name === o && e.enabled && e.order < i.order;
        });
    if (!n) {
      var r = "`" + t + "`";
      console.warn(
        "`" +
          o +
          "`" +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return n;
  }
  function K(e) {
    return "end" === e ? "start" : "start" === e ? "end" : e;
  }
  function q(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = ae.indexOf(e),
      i = ae.slice(o + 1).concat(ae.slice(0, o));
    return t ? i.reverse() : i;
  }
  function V(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +n[1],
      p = n[2];
    if (!r) return e;
    if (0 === p.indexOf("%")) {
      var s;
      switch (p) {
        case "%p":
          s = o;
          break;
        case "%":
        case "%r":
        default:
          s = i;
      }
      var d = c(s);
      return (d[t] / 100) * r;
    }
    if ("vh" === p || "vw" === p) {
      var a;
      return (
        (a =
          "vh" === p
            ? J(document.documentElement.clientHeight, window.innerHeight || 0)
            : J(document.documentElement.clientWidth, window.innerWidth || 0)),
        (a / 100) * r
      );
    }
    return r;
  }
  function z(e, t, o, i) {
    var n = [0, 0],
      r = -1 !== ["right", "left"].indexOf(i),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      s = p.indexOf(
        T(p, function (e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    p[s] &&
      -1 === p[s].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var d = /\s*,\s*|\s+/,
      a =
        -1 === s
          ? [p]
          : [
              p.slice(0, s).concat([p[s].split(d)[0]]),
              [p[s].split(d)[1]].concat(p.slice(s + 1)),
            ];
    return (
      (a = a.map(function (e, i) {
        var n = (1 === i ? !r : r) ? "height" : "width",
          p = !1;
        return e
          .reduce(function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
              ? ((e[e.length - 1] = t), (p = !0), e)
              : p
              ? ((e[e.length - 1] += t), (p = !1), e)
              : e.concat(t);
          }, [])
          .map(function (e) {
            return V(e, n, t, o);
          });
      })),
      a.forEach(function (e, t) {
        e.forEach(function (o, i) {
          U(o) && (n[t] += o * ("-" === e[i - 1] ? -1 : 1));
        });
      }),
      n
    );
  }
  function G(e, t) {
    var o,
      i = t.offset,
      n = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = n.split("-")[0];
    return (
      (o = U(+i) ? [+i, 0] : z(i, p, s, d)),
      "left" === d
        ? ((p.top += o[0]), (p.left -= o[1]))
        : "right" === d
        ? ((p.top += o[0]), (p.left += o[1]))
        : "top" === d
        ? ((p.left += o[0]), (p.top -= o[1]))
        : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
      (e.popper = p),
      e
    );
  }
  for (
    var _ = Math.min,
      X = Math.floor,
      J = Math.max,
      Q = "undefined" != typeof window && "undefined" != typeof document,
      Z = ["Edge", "Trident", "Firefox"],
      $ = 0,
      ee = 0;
    ee < Z.length;
    ee += 1
  )
    if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
      $ = 1;
      break;
    }
  var i,
    te = Q && window.Promise,
    oe = te
      ? function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function () {
                (t = !1), e();
              }));
          };
        }
      : function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                (t = !1), e();
              }, $));
          };
        },
    ie = function () {
      return (
        void 0 == i && (i = -1 !== navigator.appVersion.indexOf("MSIE 10")), i
      );
    },
    ne = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    re = (function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++)
          (o = t[n]),
            (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
      }
      return function (t, o, i) {
        return o && e(t.prototype, o), i && e(t, i), t;
      };
    })(),
    pe = function (e, t, o) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = o),
        e
      );
    },
    se =
      Object.assign ||
      function (e) {
        for (var t, o = 1; o < arguments.length; o++)
          for (var i in ((t = arguments[o]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      },
    de = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    ae = de.slice(3),
    le = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise",
    },
    fe = (function () {
      function t(o, i) {
        var n = this,
          r =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        ne(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(n.update);
          }),
          (this.update = oe(this.update.bind(this))),
          (this.options = se({}, t.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = o && o.jquery ? o[0] : o),
          (this.popper = i && i.jquery ? i[0] : i),
          (this.options.modifiers = {}),
          Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(
            function (e) {
              n.options.modifiers[e] = se(
                {},
                t.Defaults.modifiers[e] || {},
                r.modifiers ? r.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (e) {
              return se({ name: e }, n.options.modifiers[e]);
            })
            .sort(function (e, t) {
              return e.order - t.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              e(t.onLoad) &&
              t.onLoad(n.reference, n.popper, n.options, t, n.state);
          }),
          this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), (this.state.eventsEnabled = p);
      }
      return (
        re(t, [
          {
            key: "update",
            value: function () {
              return N.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return P.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return I.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return R.call(this);
            },
          },
        ]),
        t
      );
    })();
  return (
    (fe.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
    (fe.placements = de),
    (fe.Defaults = {
      placement: "bottom",
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (e) {
            var t = e.placement,
              o = t.split("-")[0],
              i = t.split("-")[1];
            if (i) {
              var n = e.offsets,
                r = n.reference,
                p = n.popper,
                s = -1 !== ["bottom", "top"].indexOf(o),
                d = s ? "left" : "top",
                a = s ? "width" : "height",
                l = {
                  start: pe({}, d, r[d]),
                  end: pe({}, d, r[d] + r[a] - p[a]),
                };
              e.offsets.popper = se({}, p, l[i]);
            }
            return e;
          },
        },
        offset: { order: 200, enabled: !0, fn: G, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (e, t) {
            var o = t.boundariesElement || r(e.instance.popper);
            e.instance.reference === o && (o = r(o));
            var i = y(e.instance.popper, e.instance.reference, t.padding, o);
            t.boundaries = i;
            var n = t.priority,
              p = e.offsets.popper,
              s = {
                primary: function (e) {
                  var o = p[e];
                  return (
                    p[e] < i[e] &&
                      !t.escapeWithReference &&
                      (o = J(p[e], i[e])),
                    pe({}, e, o)
                  );
                },
                secondary: function (e) {
                  var o = "right" === e ? "left" : "top",
                    n = p[o];
                  return (
                    p[e] > i[e] &&
                      !t.escapeWithReference &&
                      (n = _(
                        p[o],
                        i[e] - ("right" === e ? p.width : p.height)
                      )),
                    pe({}, o, n)
                  );
                },
              };
            return (
              n.forEach(function (e) {
                var t =
                  -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                p = se({}, p, s[t](e));
              }),
              (e.offsets.popper = p),
              e
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (e) {
            var t = e.offsets,
              o = t.popper,
              i = t.reference,
              n = e.placement.split("-")[0],
              r = X,
              p = -1 !== ["top", "bottom"].indexOf(n),
              s = p ? "right" : "bottom",
              d = p ? "left" : "top",
              a = p ? "width" : "height";
            return (
              o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]),
              o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])),
              e
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (e, o) {
            var i;
            if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
            var n = o.element;
            if ("string" == typeof n) {
              if (((n = e.instance.popper.querySelector(n)), !n)) return e;
            } else if (!e.instance.popper.contains(n))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                e
              );
            var r = e.placement.split("-")[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ["left", "right"].indexOf(r),
              l = a ? "height" : "width",
              f = a ? "Top" : "Left",
              m = f.toLowerCase(),
              h = a ? "left" : "top",
              g = a ? "bottom" : "right",
              u = L(n)[l];
            d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)),
              d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]),
              (e.offsets.popper = c(e.offsets.popper));
            var b = d[m] + d[l] / 2 - u / 2,
              w = t(e.instance.popper),
              y = parseFloat(w["margin" + f], 10),
              E = parseFloat(w["border" + f + "Width"], 10),
              v = b - e.offsets.popper[m] - y - E;
            return (
              (v = J(_(s[l] - u, v), 0)),
              (e.arrowElement = n),
              (e.offsets.arrow =
                ((i = {}), pe(i, m, Math.round(v)), pe(i, h, ""), i)),
              e
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (e, t) {
            if (k(e.instance.modifiers, "inner")) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            var o = y(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                t.boundariesElement
              ),
              i = e.placement.split("-")[0],
              n = x(i),
              r = e.placement.split("-")[1] || "",
              p = [];
            switch (t.behavior) {
              case le.FLIP:
                p = [i, n];
                break;
              case le.CLOCKWISE:
                p = q(i);
                break;
              case le.COUNTERCLOCKWISE:
                p = q(i, !0);
                break;
              default:
                p = t.behavior;
            }
            return (
              p.forEach(function (s, d) {
                if (i !== s || p.length === d + 1) return e;
                (i = e.placement.split("-")[0]), (n = x(i));
                var a = e.offsets.popper,
                  l = e.offsets.reference,
                  f = X,
                  m =
                    ("left" === i && f(a.right) > f(l.left)) ||
                    ("right" === i && f(a.left) < f(l.right)) ||
                    ("top" === i && f(a.bottom) > f(l.top)) ||
                    ("bottom" === i && f(a.top) < f(l.bottom)),
                  h = f(a.left) < f(o.left),
                  c = f(a.right) > f(o.right),
                  g = f(a.top) < f(o.top),
                  u = f(a.bottom) > f(o.bottom),
                  b =
                    ("left" === i && h) ||
                    ("right" === i && c) ||
                    ("top" === i && g) ||
                    ("bottom" === i && u),
                  w = -1 !== ["top", "bottom"].indexOf(i),
                  y =
                    !!t.flipVariations &&
                    ((w && "start" === r && h) ||
                      (w && "end" === r && c) ||
                      (!w && "start" === r && g) ||
                      (!w && "end" === r && u));
                (m || b || y) &&
                  ((e.flipped = !0),
                  (m || b) && (i = p[d + 1]),
                  y && (r = K(r)),
                  (e.placement = i + (r ? "-" + r : "")),
                  (e.offsets.popper = se(
                    {},
                    e.offsets.popper,
                    S(e.instance.popper, e.offsets.reference, e.placement)
                  )),
                  (e = C(e.instance.modifiers, e, "flip")));
              }),
              e
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (e) {
            var t = e.placement,
              o = t.split("-")[0],
              i = e.offsets,
              n = i.popper,
              r = i.reference,
              p = -1 !== ["left", "right"].indexOf(o),
              s = -1 === ["top", "left"].indexOf(o);
            return (
              (n[p ? "left" : "top"] =
                r[o] - (s ? n[p ? "width" : "height"] : 0)),
              (e.placement = x(t)),
              (e.offsets.popper = c(n)),
              e
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (e) {
            if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
            var t = e.offsets.reference,
              o = T(e.instance.modifiers, function (e) {
                return "preventOverflow" === e.name;
              }).boundaries;
            if (
              t.bottom < o.top ||
              t.left > o.right ||
              t.top > o.bottom ||
              t.right < o.left
            ) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
            }
            return e;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (e, t) {
            var o = t.x,
              i = t.y,
              n = e.offsets.popper,
              p = T(e.instance.modifiers, function (e) {
                return "applyStyle" === e.name;
              }).gpuAcceleration;
            void 0 !== p &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s,
              d,
              a = void 0 === p ? t.gpuAcceleration : p,
              l = r(e.instance.popper),
              f = g(l),
              m = { position: n.position },
              h = {
                left: X(n.left),
                top: X(n.top),
                bottom: X(n.bottom),
                right: X(n.right),
              },
              c = "bottom" === o ? "top" : "bottom",
              u = "right" === i ? "left" : "right",
              b = W("transform");
            if (
              ((d = "bottom" == c ? -f.height + h.bottom : h.top),
              (s = "right" == u ? -f.width + h.right : h.left),
              a && b)
            )
              (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"),
                (m[c] = 0),
                (m[u] = 0),
                (m.willChange = "transform");
            else {
              var w = "bottom" == c ? -1 : 1,
                y = "right" == u ? -1 : 1;
              (m[c] = d * w), (m[u] = s * y), (m.willChange = c + ", " + u);
            }
            var E = { "x-placement": e.placement };
            return (
              (e.attributes = se({}, E, e.attributes)),
              (e.styles = se({}, m, e.styles)),
              (e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (e) {
            return (
              Y(e.instance.popper, e.styles),
              j(e.instance.popper, e.attributes),
              e.arrowElement &&
                Object.keys(e.arrowStyles).length &&
                Y(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad: function (e, t, o, i, n) {
            var r = O(n, t, e),
              p = v(
                o.placement,
                r,
                t,
                e,
                o.modifiers.flip.boundariesElement,
                o.modifiers.flip.padding
              );
            return (
              t.setAttribute("x-placement", p),
              Y(t, { position: "absolute" }),
              o
            );
          },
          gpuAcceleration: void 0,
        },
      },
    }),
    fe
  );
});
//# sourceMappingURL=popper.min.js.map

/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], e)
    : e((t.bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, n) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function r() {
    return (r =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  (e = e && e.hasOwnProperty("default") ? e.default : e),
    (n = n && n.hasOwnProperty("default") ? n.default : n);
  var o,
    a,
    l,
    h,
    c,
    u,
    f,
    d,
    _,
    g,
    p,
    m,
    v,
    E,
    T,
    y,
    C,
    I,
    A,
    b,
    D,
    S,
    w,
    N,
    O,
    k,
    P = (function (t) {
      var e = !1;
      function n(e) {
        var n = this,
          s = !1;
        return (
          t(this).one(i.TRANSITION_END, function () {
            s = !0;
          }),
          setTimeout(function () {
            s || i.triggerTransitionEnd(n);
          }, e),
          this
        );
      }
      var i = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
          do {
            t += ~~(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        },
        getSelectorFromElement: function (e) {
          var n,
            i = e.getAttribute("data-target");
          (i && "#" !== i) || (i = e.getAttribute("href") || ""),
            "#" === i.charAt(0) &&
              ((n = i),
              (i = n =
                "function" == typeof t.escapeSelector
                  ? t.escapeSelector(n).substr(1)
                  : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")));
          try {
            return t(document).find(i).length > 0 ? i : null;
          } catch (t) {
            return null;
          }
        },
        reflow: function (t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function (n) {
          t(n).trigger(e.end);
        },
        supportsTransitionEnd: function () {
          return Boolean(e);
        },
        isElement: function (t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
          for (var s in n)
            if (Object.prototype.hasOwnProperty.call(n, s)) {
              var r = n[s],
                o = e[s],
                a =
                  o && i.isElement(o)
                    ? "element"
                    : ((l = o),
                      {}.toString
                        .call(l)
                        .match(/\s([a-zA-Z]+)/)[1]
                        .toLowerCase());
              if (!new RegExp(r).test(a))
                throw new Error(
                  t.toUpperCase() +
                    ': Option "' +
                    s +
                    '" provided type "' +
                    a +
                    '" but expected type "' +
                    r +
                    '".'
                );
            }
          var l;
        },
      };
      return (
        (e = ("undefined" == typeof window || !window.QUnit) && {
          end: "transitionend",
        }),
        (t.fn.emulateTransitionEnd = n),
        i.supportsTransitionEnd() &&
          (t.event.special[i.TRANSITION_END] = {
            bindType: e.end,
            delegateType: e.end,
            handle: function (e) {
              if (t(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments);
            },
          }),
        i
      );
    })(e),
    L =
      ((a = "alert"),
      (h = "." + (l = "bs.alert")),
      (c = (o = e).fn[a]),
      (u = {
        CLOSE: "close" + h,
        CLOSED: "closed" + h,
        CLICK_DATA_API: "click" + h + ".data-api",
      }),
      (f = "alert"),
      (d = "fade"),
      (_ = "show"),
      (g = (function () {
        function t(t) {
          this._element = t;
        }
        var e = t.prototype;
        return (
          (e.close = function (t) {
            t = t || this._element;
            var e = this._getRootElement(t);
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
          }),
          (e.dispose = function () {
            o.removeData(this._element, l), (this._element = null);
          }),
          (e._getRootElement = function (t) {
            var e = P.getSelectorFromElement(t),
              n = !1;
            return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n;
          }),
          (e._triggerCloseEvent = function (t) {
            var e = o.Event(u.CLOSE);
            return o(t).trigger(e), e;
          }),
          (e._removeElement = function (t) {
            var e = this;
            o(t).removeClass(_),
              P.supportsTransitionEnd() && o(t).hasClass(d)
                ? o(t)
                    .one(P.TRANSITION_END, function (n) {
                      return e._destroyElement(t, n);
                    })
                    .emulateTransitionEnd(150)
                : this._destroyElement(t);
          }),
          (e._destroyElement = function (t) {
            o(t).detach().trigger(u.CLOSED).remove();
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var n = o(this),
                i = n.data(l);
              i || ((i = new t(this)), n.data(l, i)),
                "close" === e && i[e](this);
            });
          }),
          (t._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.0.0";
              },
            },
          ]),
          t
        );
      })()),
      o(document).on(
        u.CLICK_DATA_API,
        '[data-dismiss="alert"]',
        g._handleDismiss(new g())
      ),
      (o.fn[a] = g._jQueryInterface),
      (o.fn[a].Constructor = g),
      (o.fn[a].noConflict = function () {
        return (o.fn[a] = c), g._jQueryInterface;
      }),
      g),
    R =
      ((m = "button"),
      (E = "." + (v = "bs.button")),
      (T = ".data-api"),
      (y = (p = e).fn[m]),
      (C = "active"),
      (I = "btn"),
      (A = "focus"),
      (b = '[data-toggle^="button"]'),
      (D = '[data-toggle="buttons"]'),
      (S = "input"),
      (w = ".active"),
      (N = ".btn"),
      (O = {
        CLICK_DATA_API: "click" + E + T,
        FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T,
      }),
      (k = (function () {
        function t(t) {
          this._element = t;
        }
        var e = t.prototype;
        return (
          (e.toggle = function () {
            var t = !0,
              e = !0,
              n = p(this._element).closest(D)[0];
            if (n) {
              var i = p(this._element).find(S)[0];
              if (i) {
                if ("radio" === i.type)
                  if (i.checked && p(this._element).hasClass(C)) t = !1;
                  else {
                    var s = p(n).find(w)[0];
                    s && p(s).removeClass(C);
                  }
                if (t) {
                  if (
                    i.hasAttribute("disabled") ||
                    n.hasAttribute("disabled") ||
                    i.classList.contains("disabled") ||
                    n.classList.contains("disabled")
                  )
                    return;
                  (i.checked = !p(this._element).hasClass(C)),
                    p(i).trigger("change");
                }
                i.focus(), (e = !1);
              }
            }
            e &&
              this._element.setAttribute(
                "aria-pressed",
                !p(this._element).hasClass(C)
              ),
              t && p(this._element).toggleClass(C);
          }),
          (e.dispose = function () {
            p.removeData(this._element, v), (this._element = null);
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var n = p(this).data(v);
              n || ((n = new t(this)), p(this).data(v, n)),
                "toggle" === e && n[e]();
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.0.0";
              },
            },
          ]),
          t
        );
      })()),
      p(document)
        .on(O.CLICK_DATA_API, b, function (t) {
          t.preventDefault();
          var e = t.target;
          p(e).hasClass(I) || (e = p(e).closest(N)),
            k._jQueryInterface.call(p(e), "toggle");
        })
        .on(O.FOCUS_BLUR_DATA_API, b, function (t) {
          var e = p(t.target).closest(N)[0];
          p(e).toggleClass(A, /^focus(in)?$/.test(t.type));
        }),
      (p.fn[m] = k._jQueryInterface),
      (p.fn[m].Constructor = k),
      (p.fn[m].noConflict = function () {
        return (p.fn[m] = y), k._jQueryInterface;
      }),
      k),
    j = (function (t) {
      var e = "carousel",
        n = "bs.carousel",
        i = "." + n,
        o = t.fn[e],
        a = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
        },
        l = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
        },
        h = "next",
        c = "prev",
        u = "left",
        f = "right",
        d = {
          SLIDE: "slide" + i,
          SLID: "slid" + i,
          KEYDOWN: "keydown" + i,
          MOUSEENTER: "mouseenter" + i,
          MOUSELEAVE: "mouseleave" + i,
          TOUCHEND: "touchend" + i,
          LOAD_DATA_API: "load" + i + ".data-api",
          CLICK_DATA_API: "click" + i + ".data-api",
        },
        _ = "carousel",
        g = "active",
        p = "slide",
        m = "carousel-item-right",
        v = "carousel-item-left",
        E = "carousel-item-next",
        T = "carousel-item-prev",
        y = {
          ACTIVE: ".active",
          ACTIVE_ITEM: ".active.carousel-item",
          ITEM: ".carousel-item",
          NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
          INDICATORS: ".carousel-indicators",
          DATA_SLIDE: "[data-slide], [data-slide-to]",
          DATA_RIDE: '[data-ride="carousel"]',
        },
        C = (function () {
          function o(e, n) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this._config = this._getConfig(n)),
              (this._element = t(e)[0]),
              (this._indicatorsElement = t(this._element).find(
                y.INDICATORS
              )[0]),
              this._addEventListeners();
          }
          var C = o.prototype;
          return (
            (C.next = function () {
              this._isSliding || this._slide(h);
            }),
            (C.nextWhenVisible = function () {
              !document.hidden &&
                t(this._element).is(":visible") &&
                "hidden" !== t(this._element).css("visibility") &&
                this.next();
            }),
            (C.prev = function () {
              this._isSliding || this._slide(c);
            }),
            (C.pause = function (e) {
              e || (this._isPaused = !0),
                t(this._element).find(y.NEXT_PREV)[0] &&
                  P.supportsTransitionEnd() &&
                  (P.triggerTransitionEnd(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
            }),
            (C.cycle = function (t) {
              t || (this._isPaused = !1),
                this._interval &&
                  (clearInterval(this._interval), (this._interval = null)),
                this._config.interval &&
                  !this._isPaused &&
                  (this._interval = setInterval(
                    (document.visibilityState
                      ? this.nextWhenVisible
                      : this.next
                    ).bind(this),
                    this._config.interval
                  ));
            }),
            (C.to = function (e) {
              var n = this;
              this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];
              var i = this._getItemIndex(this._activeElement);
              if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                  t(this._element).one(d.SLID, function () {
                    return n.to(e);
                  });
                else {
                  if (i === e) return this.pause(), void this.cycle();
                  var s = e > i ? h : c;
                  this._slide(s, this._items[e]);
                }
            }),
            (C.dispose = function () {
              t(this._element).off(i),
                t.removeData(this._element, n),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (C._getConfig = function (t) {
              return (t = r({}, a, t)), P.typeCheckConfig(e, t, l), t;
            }),
            (C._addEventListeners = function () {
              var e = this;
              this._config.keyboard &&
                t(this._element).on(d.KEYDOWN, function (t) {
                  return e._keydown(t);
                }),
                "hover" === this._config.pause &&
                  (t(this._element)
                    .on(d.MOUSEENTER, function (t) {
                      return e.pause(t);
                    })
                    .on(d.MOUSELEAVE, function (t) {
                      return e.cycle(t);
                    }),
                  "ontouchstart" in document.documentElement &&
                    t(this._element).on(d.TOUCHEND, function () {
                      e.pause(),
                        e.touchTimeout && clearTimeout(e.touchTimeout),
                        (e.touchTimeout = setTimeout(function (t) {
                          return e.cycle(t);
                        }, 500 + e._config.interval));
                    }));
            }),
            (C._keydown = function (t) {
              if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                  case 37:
                    t.preventDefault(), this.prev();
                    break;
                  case 39:
                    t.preventDefault(), this.next();
                }
            }),
            (C._getItemIndex = function (e) {
              return (
                (this._items = t.makeArray(t(e).parent().find(y.ITEM))),
                this._items.indexOf(e)
              );
            }),
            (C._getItemByDirection = function (t, e) {
              var n = t === h,
                i = t === c,
                s = this._getItemIndex(e),
                r = this._items.length - 1;
              if (((i && 0 === s) || (n && s === r)) && !this._config.wrap)
                return e;
              var o = (s + (t === c ? -1 : 1)) % this._items.length;
              return -1 === o
                ? this._items[this._items.length - 1]
                : this._items[o];
            }),
            (C._triggerSlideEvent = function (e, n) {
              var i = this._getItemIndex(e),
                s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
                r = t.Event(d.SLIDE, {
                  relatedTarget: e,
                  direction: n,
                  from: s,
                  to: i,
                });
              return t(this._element).trigger(r), r;
            }),
            (C._setActiveIndicatorElement = function (e) {
              if (this._indicatorsElement) {
                t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && t(n).addClass(g);
              }
            }),
            (C._slide = function (e, n) {
              var i,
                s,
                r,
                o = this,
                a = t(this._element).find(y.ACTIVE_ITEM)[0],
                l = this._getItemIndex(a),
                c = n || (a && this._getItemByDirection(e, a)),
                _ = this._getItemIndex(c),
                C = Boolean(this._interval);
              if (
                (e === h
                  ? ((i = v), (s = E), (r = u))
                  : ((i = m), (s = T), (r = f)),
                c && t(c).hasClass(g))
              )
                this._isSliding = !1;
              else if (
                !this._triggerSlideEvent(c, r).isDefaultPrevented() &&
                a &&
                c
              ) {
                (this._isSliding = !0),
                  C && this.pause(),
                  this._setActiveIndicatorElement(c);
                var I = t.Event(d.SLID, {
                  relatedTarget: c,
                  direction: r,
                  from: l,
                  to: _,
                });
                P.supportsTransitionEnd() && t(this._element).hasClass(p)
                  ? (t(c).addClass(s),
                    P.reflow(c),
                    t(a).addClass(i),
                    t(c).addClass(i),
                    t(a)
                      .one(P.TRANSITION_END, function () {
                        t(c)
                          .removeClass(i + " " + s)
                          .addClass(g),
                          t(a).removeClass(g + " " + s + " " + i),
                          (o._isSliding = !1),
                          setTimeout(function () {
                            return t(o._element).trigger(I);
                          }, 0);
                      })
                      .emulateTransitionEnd(600))
                  : (t(a).removeClass(g),
                    t(c).addClass(g),
                    (this._isSliding = !1),
                    t(this._element).trigger(I)),
                  C && this.cycle();
              }
            }),
            (o._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n),
                  s = r({}, a, t(this).data());
                "object" == typeof e && (s = r({}, s, e));
                var l = "string" == typeof e ? e : s.slide;
                if (
                  (i || ((i = new o(this, s)), t(this).data(n, i)),
                  "number" == typeof e)
                )
                  i.to(e);
                else if ("string" == typeof l) {
                  if ("undefined" == typeof i[l])
                    throw new TypeError('No method named "' + l + '"');
                  i[l]();
                } else s.interval && (i.pause(), i.cycle());
              });
            }),
            (o._dataApiClickHandler = function (e) {
              var i = P.getSelectorFromElement(this);
              if (i) {
                var s = t(i)[0];
                if (s && t(s).hasClass(_)) {
                  var a = r({}, t(s).data(), t(this).data()),
                    l = this.getAttribute("data-slide-to");
                  l && (a.interval = !1),
                    o._jQueryInterface.call(t(s), a),
                    l && t(s).data(n).to(l),
                    e.preventDefault();
                }
              }
            }),
            s(o, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return a;
                },
              },
            ]),
            o
          );
        })();
      return (
        t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler),
        t(window).on(d.LOAD_DATA_API, function () {
          t(y.DATA_RIDE).each(function () {
            var e = t(this);
            C._jQueryInterface.call(e, e.data());
          });
        }),
        (t.fn[e] = C._jQueryInterface),
        (t.fn[e].Constructor = C),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = o), C._jQueryInterface;
        }),
        C
      );
    })(e),
    H = (function (t) {
      var e = "collapse",
        n = "bs.collapse",
        i = "." + n,
        o = t.fn[e],
        a = { toggle: !0, parent: "" },
        l = { toggle: "boolean", parent: "(string|element)" },
        h = {
          SHOW: "show" + i,
          SHOWN: "shown" + i,
          HIDE: "hide" + i,
          HIDDEN: "hidden" + i,
          CLICK_DATA_API: "click" + i + ".data-api",
        },
        c = "show",
        u = "collapse",
        f = "collapsing",
        d = "collapsed",
        _ = "width",
        g = "height",
        p = {
          ACTIVES: ".show, .collapsing",
          DATA_TOGGLE: '[data-toggle="collapse"]',
        },
        m = (function () {
          function i(e, n) {
            (this._isTransitioning = !1),
              (this._element = e),
              (this._config = this._getConfig(n)),
              (this._triggerArray = t.makeArray(
                t(
                  '[data-toggle="collapse"][href="#' +
                    e.id +
                    '"],[data-toggle="collapse"][data-target="#' +
                    e.id +
                    '"]'
                )
              ));
            for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
              var r = i[s],
                o = P.getSelectorFromElement(r);
              null !== o &&
                t(o).filter(e).length > 0 &&
                ((this._selector = o), this._triggerArray.push(r));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._element,
                  this._triggerArray
                ),
              this._config.toggle && this.toggle();
          }
          var o = i.prototype;
          return (
            (o.toggle = function () {
              t(this._element).hasClass(c) ? this.hide() : this.show();
            }),
            (o.show = function () {
              var e,
                s,
                r = this;
              if (
                !this._isTransitioning &&
                !t(this._element).hasClass(c) &&
                (this._parent &&
                  0 ===
                    (e = t.makeArray(
                      t(this._parent)
                        .find(p.ACTIVES)
                        .filter('[data-parent="' + this._config.parent + '"]')
                    )).length &&
                  (e = null),
                !(
                  e &&
                  (s = t(e).not(this._selector).data(n)) &&
                  s._isTransitioning
                ))
              ) {
                var o = t.Event(h.SHOW);
                if ((t(this._element).trigger(o), !o.isDefaultPrevented())) {
                  e &&
                    (i._jQueryInterface.call(t(e).not(this._selector), "hide"),
                    s || t(e).data(n, null));
                  var a = this._getDimension();
                  t(this._element).removeClass(u).addClass(f),
                    (this._element.style[a] = 0),
                    this._triggerArray.length > 0 &&
                      t(this._triggerArray)
                        .removeClass(d)
                        .attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                  var l = function () {
                    t(r._element).removeClass(f).addClass(u).addClass(c),
                      (r._element.style[a] = ""),
                      r.setTransitioning(!1),
                      t(r._element).trigger(h.SHOWN);
                  };
                  if (P.supportsTransitionEnd()) {
                    var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));
                    t(this._element)
                      .one(P.TRANSITION_END, l)
                      .emulateTransitionEnd(600),
                      (this._element.style[a] = this._element[_] + "px");
                  } else l();
                }
              }
            }),
            (o.hide = function () {
              var e = this;
              if (!this._isTransitioning && t(this._element).hasClass(c)) {
                var n = t.Event(h.HIDE);
                if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                  var i = this._getDimension();
                  if (
                    ((this._element.style[i] =
                      this._element.getBoundingClientRect()[i] + "px"),
                    P.reflow(this._element),
                    t(this._element).addClass(f).removeClass(u).removeClass(c),
                    this._triggerArray.length > 0)
                  )
                    for (var s = 0; s < this._triggerArray.length; s++) {
                      var r = this._triggerArray[s],
                        o = P.getSelectorFromElement(r);
                      if (null !== o)
                        t(o).hasClass(c) ||
                          t(r).addClass(d).attr("aria-expanded", !1);
                    }
                  this.setTransitioning(!0);
                  var a = function () {
                    e.setTransitioning(!1),
                      t(e._element)
                        .removeClass(f)
                        .addClass(u)
                        .trigger(h.HIDDEN);
                  };
                  (this._element.style[i] = ""),
                    P.supportsTransitionEnd()
                      ? t(this._element)
                          .one(P.TRANSITION_END, a)
                          .emulateTransitionEnd(600)
                      : a();
                }
              }
            }),
            (o.setTransitioning = function (t) {
              this._isTransitioning = t;
            }),
            (o.dispose = function () {
              t.removeData(this._element, n),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (o._getConfig = function (t) {
              return (
                ((t = r({}, a, t)).toggle = Boolean(t.toggle)),
                P.typeCheckConfig(e, t, l),
                t
              );
            }),
            (o._getDimension = function () {
              return t(this._element).hasClass(_) ? _ : g;
            }),
            (o._getParent = function () {
              var e = this,
                n = null;
              P.isElement(this._config.parent)
                ? ((n = this._config.parent),
                  "undefined" != typeof this._config.parent.jquery &&
                    (n = this._config.parent[0]))
                : (n = t(this._config.parent)[0]);
              var s =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]';
              return (
                t(n)
                  .find(s)
                  .each(function (t, n) {
                    e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [
                      n,
                    ]);
                  }),
                n
              );
            }),
            (o._addAriaAndCollapsedClass = function (e, n) {
              if (e) {
                var i = t(e).hasClass(c);
                n.length > 0 &&
                  t(n).toggleClass(d, !i).attr("aria-expanded", i);
              }
            }),
            (i._getTargetFromElement = function (e) {
              var n = P.getSelectorFromElement(e);
              return n ? t(n)[0] : null;
            }),
            (i._jQueryInterface = function (e) {
              return this.each(function () {
                var s = t(this),
                  o = s.data(n),
                  l = r({}, a, s.data(), "object" == typeof e && e);
                if (
                  (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                  o || ((o = new i(this, l)), s.data(n, o)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof o[e])
                    throw new TypeError('No method named "' + e + '"');
                  o[e]();
                }
              });
            }),
            s(i, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return a;
                },
              },
            ]),
            i
          );
        })();
      return (
        t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
          "A" === e.currentTarget.tagName && e.preventDefault();
          var i = t(this),
            s = P.getSelectorFromElement(this);
          t(s).each(function () {
            var e = t(this),
              s = e.data(n) ? "toggle" : i.data();
            m._jQueryInterface.call(e, s);
          });
        }),
        (t.fn[e] = m._jQueryInterface),
        (t.fn[e].Constructor = m),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = o), m._jQueryInterface;
        }),
        m
      );
    })(e),
    W = (function (t) {
      var e = "dropdown",
        i = "bs.dropdown",
        o = "." + i,
        a = ".data-api",
        l = t.fn[e],
        h = new RegExp("38|40|27"),
        c = {
          HIDE: "hide" + o,
          HIDDEN: "hidden" + o,
          SHOW: "show" + o,
          SHOWN: "shown" + o,
          CLICK: "click" + o,
          CLICK_DATA_API: "click" + o + a,
          KEYDOWN_DATA_API: "keydown" + o + a,
          KEYUP_DATA_API: "keyup" + o + a,
        },
        u = "disabled",
        f = "show",
        d = "dropup",
        _ = "dropright",
        g = "dropleft",
        p = "dropdown-menu-right",
        m = "dropdown-menu-left",
        v = "position-static",
        E = '[data-toggle="dropdown"]',
        T = ".dropdown form",
        y = ".dropdown-menu",
        C = ".navbar-nav",
        I = ".dropdown-menu .dropdown-item:not(.disabled)",
        A = "top-start",
        b = "top-end",
        D = "bottom-start",
        S = "bottom-end",
        w = "right-start",
        N = "left-start",
        O = { offset: 0, flip: !0, boundary: "scrollParent" },
        k = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
        },
        L = (function () {
          function a(t, e) {
            (this._element = t),
              (this._popper = null),
              (this._config = this._getConfig(e)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners();
          }
          var l = a.prototype;
          return (
            (l.toggle = function () {
              if (!this._element.disabled && !t(this._element).hasClass(u)) {
                var e = a._getParentFromElement(this._element),
                  i = t(this._menu).hasClass(f);
                if ((a._clearMenus(), !i)) {
                  var s = { relatedTarget: this._element },
                    r = t.Event(c.SHOW, s);
                  if ((t(e).trigger(r), !r.isDefaultPrevented())) {
                    if (!this._inNavbar) {
                      if ("undefined" == typeof n)
                        throw new TypeError(
                          "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                        );
                      var o = this._element;
                      t(e).hasClass(d) &&
                        (t(this._menu).hasClass(m) ||
                          t(this._menu).hasClass(p)) &&
                        (o = e),
                        "scrollParent" !== this._config.boundary &&
                          t(e).addClass(v),
                        (this._popper = new n(
                          o,
                          this._menu,
                          this._getPopperConfig()
                        ));
                    }
                    "ontouchstart" in document.documentElement &&
                      0 === t(e).closest(C).length &&
                      t("body").children().on("mouseover", null, t.noop),
                      this._element.focus(),
                      this._element.setAttribute("aria-expanded", !0),
                      t(this._menu).toggleClass(f),
                      t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s));
                  }
                }
              }
            }),
            (l.dispose = function () {
              t.removeData(this._element, i),
                t(this._element).off(o),
                (this._element = null),
                (this._menu = null),
                null !== this._popper &&
                  (this._popper.destroy(), (this._popper = null));
            }),
            (l.update = function () {
              (this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate();
            }),
            (l._addEventListeners = function () {
              var e = this;
              t(this._element).on(c.CLICK, function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle();
              });
            }),
            (l._getConfig = function (n) {
              return (
                (n = r(
                  {},
                  this.constructor.Default,
                  t(this._element).data(),
                  n
                )),
                P.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
              );
            }),
            (l._getMenuElement = function () {
              if (!this._menu) {
                var e = a._getParentFromElement(this._element);
                this._menu = t(e).find(y)[0];
              }
              return this._menu;
            }),
            (l._getPlacement = function () {
              var e = t(this._element).parent(),
                n = D;
              return (
                e.hasClass(d)
                  ? ((n = A), t(this._menu).hasClass(p) && (n = b))
                  : e.hasClass(_)
                  ? (n = w)
                  : e.hasClass(g)
                  ? (n = N)
                  : t(this._menu).hasClass(p) && (n = S),
                n
              );
            }),
            (l._detectNavbar = function () {
              return t(this._element).closest(".navbar").length > 0;
            }),
            (l._getPopperConfig = function () {
              var t = this,
                e = {};
              return (
                "function" == typeof this._config.offset
                  ? (e.fn = function (e) {
                      return (
                        (e.offsets = r(
                          {},
                          e.offsets,
                          t._config.offset(e.offsets) || {}
                        )),
                        e
                      );
                    })
                  : (e.offset = this._config.offset),
                {
                  placement: this._getPlacement(),
                  modifiers: {
                    offset: e,
                    flip: { enabled: this._config.flip },
                    preventOverflow: {
                      boundariesElement: this._config.boundary,
                    },
                  },
                }
              );
            }),
            (a._jQueryInterface = function (e) {
              return this.each(function () {
                var n = t(this).data(i);
                if (
                  (n ||
                    ((n = new a(this, "object" == typeof e ? e : null)),
                    t(this).data(i, n)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof n[e])
                    throw new TypeError('No method named "' + e + '"');
                  n[e]();
                }
              });
            }),
            (a._clearMenus = function (e) {
              if (
                !e ||
                (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
              )
                for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
                  var r = a._getParentFromElement(n[s]),
                    o = t(n[s]).data(i),
                    l = { relatedTarget: n[s] };
                  if (o) {
                    var h = o._menu;
                    if (
                      t(r).hasClass(f) &&
                      !(
                        e &&
                        (("click" === e.type &&
                          /input|textarea/i.test(e.target.tagName)) ||
                          ("keyup" === e.type && 9 === e.which)) &&
                        t.contains(r, e.target)
                      )
                    ) {
                      var u = t.Event(c.HIDE, l);
                      t(r).trigger(u),
                        u.isDefaultPrevented() ||
                          ("ontouchstart" in document.documentElement &&
                            t("body").children().off("mouseover", null, t.noop),
                          n[s].setAttribute("aria-expanded", "false"),
                          t(h).removeClass(f),
                          t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)));
                    }
                  }
                }
            }),
            (a._getParentFromElement = function (e) {
              var n,
                i = P.getSelectorFromElement(e);
              return i && (n = t(i)[0]), n || e.parentNode;
            }),
            (a._dataApiKeydownHandler = function (e) {
              if (
                (/input|textarea/i.test(e.target.tagName)
                  ? !(
                      32 === e.which ||
                      (27 !== e.which &&
                        ((40 !== e.which && 38 !== e.which) ||
                          t(e.target).closest(y).length))
                    )
                  : h.test(e.which)) &&
                (e.preventDefault(),
                e.stopPropagation(),
                !this.disabled && !t(this).hasClass(u))
              ) {
                var n = a._getParentFromElement(this),
                  i = t(n).hasClass(f);
                if (
                  (i || (27 === e.which && 32 === e.which)) &&
                  (!i || (27 !== e.which && 32 !== e.which))
                ) {
                  var s = t(n).find(I).get();
                  if (0 !== s.length) {
                    var r = s.indexOf(e.target);
                    38 === e.which && r > 0 && r--,
                      40 === e.which && r < s.length - 1 && r++,
                      r < 0 && (r = 0),
                      s[r].focus();
                  }
                } else {
                  if (27 === e.which) {
                    var o = t(n).find(E)[0];
                    t(o).trigger("focus");
                  }
                  t(this).trigger("click");
                }
              }
            }),
            s(a, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return O;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return k;
                },
              },
            ]),
            a
          );
        })();
      return (
        t(document)
          .on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler)
          .on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler)
          .on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus)
          .on(c.CLICK_DATA_API, E, function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              L._jQueryInterface.call(t(this), "toggle");
          })
          .on(c.CLICK_DATA_API, T, function (t) {
            t.stopPropagation();
          }),
        (t.fn[e] = L._jQueryInterface),
        (t.fn[e].Constructor = L),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = l), L._jQueryInterface;
        }),
        L
      );
    })(e),
    M = (function (t) {
      var e = "modal",
        n = "bs.modal",
        i = "." + n,
        o = t.fn.modal,
        a = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        l = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean",
        },
        h = {
          HIDE: "hide" + i,
          HIDDEN: "hidden" + i,
          SHOW: "show" + i,
          SHOWN: "shown" + i,
          FOCUSIN: "focusin" + i,
          RESIZE: "resize" + i,
          CLICK_DISMISS: "click.dismiss" + i,
          KEYDOWN_DISMISS: "keydown.dismiss" + i,
          MOUSEUP_DISMISS: "mouseup.dismiss" + i,
          MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
          CLICK_DATA_API: "click" + i + ".data-api",
        },
        c = "modal-scrollbar-measure",
        u = "modal-backdrop",
        f = "modal-open",
        d = "fade",
        _ = "show",
        g = {
          DIALOG: ".modal-dialog",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          STICKY_CONTENT: ".sticky-top",
          NAVBAR_TOGGLER: ".navbar-toggler",
        },
        p = (function () {
          function o(e, n) {
            (this._config = this._getConfig(n)),
              (this._element = e),
              (this._dialog = t(e).find(g.DIALOG)[0]),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._originalBodyPadding = 0),
              (this._scrollbarWidth = 0);
          }
          var p = o.prototype;
          return (
            (p.toggle = function (t) {
              return this._isShown ? this.hide() : this.show(t);
            }),
            (p.show = function (e) {
              var n = this;
              if (!this._isTransitioning && !this._isShown) {
                P.supportsTransitionEnd() &&
                  t(this._element).hasClass(d) &&
                  (this._isTransitioning = !0);
                var i = t.Event(h.SHOW, { relatedTarget: e });
                t(this._element).trigger(i),
                  this._isShown ||
                    i.isDefaultPrevented() ||
                    ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    t(document.body).addClass(f),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(
                      h.CLICK_DISMISS,
                      g.DATA_DISMISS,
                      function (t) {
                        return n.hide(t);
                      }
                    ),
                    t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
                      t(n._element).one(h.MOUSEUP_DISMISS, function (e) {
                        t(e.target).is(n._element) &&
                          (n._ignoreBackdropClick = !0);
                      });
                    }),
                    this._showBackdrop(function () {
                      return n._showElement(e);
                    }));
              }
            }),
            (p.hide = function (e) {
              var n = this;
              if (
                (e && e.preventDefault(),
                !this._isTransitioning && this._isShown)
              ) {
                var i = t.Event(h.HIDE);
                if (
                  (t(this._element).trigger(i),
                  this._isShown && !i.isDefaultPrevented())
                ) {
                  this._isShown = !1;
                  var s =
                    P.supportsTransitionEnd() && t(this._element).hasClass(d);
                  s && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(document).off(h.FOCUSIN),
                    t(this._element).removeClass(_),
                    t(this._element).off(h.CLICK_DISMISS),
                    t(this._dialog).off(h.MOUSEDOWN_DISMISS),
                    s
                      ? t(this._element)
                          .one(P.TRANSITION_END, function (t) {
                            return n._hideModal(t);
                          })
                          .emulateTransitionEnd(300)
                      : this._hideModal();
                }
              }
            }),
            (p.dispose = function () {
              t.removeData(this._element, n),
                t(window, document, this._element, this._backdrop).off(i),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._scrollbarWidth = null);
            }),
            (p.handleUpdate = function () {
              this._adjustDialog();
            }),
            (p._getConfig = function (t) {
              return (t = r({}, a, t)), P.typeCheckConfig(e, t, l), t;
            }),
            (p._showElement = function (e) {
              var n = this,
                i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                (this._element.scrollTop = 0),
                i && P.reflow(this._element),
                t(this._element).addClass(_),
                this._config.focus && this._enforceFocus();
              var s = t.Event(h.SHOWN, { relatedTarget: e }),
                r = function () {
                  n._config.focus && n._element.focus(),
                    (n._isTransitioning = !1),
                    t(n._element).trigger(s);
                };
              i
                ? t(this._dialog)
                    .one(P.TRANSITION_END, r)
                    .emulateTransitionEnd(300)
                : r();
            }),
            (p._enforceFocus = function () {
              var e = this;
              t(document)
                .off(h.FOCUSIN)
                .on(h.FOCUSIN, function (n) {
                  document !== n.target &&
                    e._element !== n.target &&
                    0 === t(e._element).has(n.target).length &&
                    e._element.focus();
                });
            }),
            (p._setEscapeEvent = function () {
              var e = this;
              this._isShown && this._config.keyboard
                ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide());
                  })
                : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS);
            }),
            (p._setResizeEvent = function () {
              var e = this;
              this._isShown
                ? t(window).on(h.RESIZE, function (t) {
                    return e.handleUpdate(t);
                  })
                : t(window).off(h.RESIZE);
            }),
            (p._hideModal = function () {
              var e = this;
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  t(document.body).removeClass(f),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    t(e._element).trigger(h.HIDDEN);
                });
            }),
            (p._removeBackdrop = function () {
              this._backdrop &&
                (t(this._backdrop).remove(), (this._backdrop = null));
            }),
            (p._showBackdrop = function (e) {
              var n = this,
                i = t(this._element).hasClass(d) ? d : "";
              if (this._isShown && this._config.backdrop) {
                var s = P.supportsTransitionEnd() && i;
                if (
                  ((this._backdrop = document.createElement("div")),
                  (this._backdrop.className = u),
                  i && t(this._backdrop).addClass(i),
                  t(this._backdrop).appendTo(document.body),
                  t(this._element).on(h.CLICK_DISMISS, function (t) {
                    n._ignoreBackdropClick
                      ? (n._ignoreBackdropClick = !1)
                      : t.target === t.currentTarget &&
                        ("static" === n._config.backdrop
                          ? n._element.focus()
                          : n.hide());
                  }),
                  s && P.reflow(this._backdrop),
                  t(this._backdrop).addClass(_),
                  !e)
                )
                  return;
                if (!s) return void e();
                t(this._backdrop)
                  .one(P.TRANSITION_END, e)
                  .emulateTransitionEnd(150);
              } else if (!this._isShown && this._backdrop) {
                t(this._backdrop).removeClass(_);
                var r = function () {
                  n._removeBackdrop(), e && e();
                };
                P.supportsTransitionEnd() && t(this._element).hasClass(d)
                  ? t(this._backdrop)
                      .one(P.TRANSITION_END, r)
                      .emulateTransitionEnd(150)
                  : r();
              } else e && e();
            }),
            (p._adjustDialog = function () {
              var t =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              !this._isBodyOverflowing &&
                t &&
                (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing &&
                  !t &&
                  (this._element.style.paddingRight =
                    this._scrollbarWidth + "px");
            }),
            (p._resetAdjustments = function () {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }),
            (p._checkScrollbar = function () {
              var t = document.body.getBoundingClientRect();
              (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (p._setScrollbar = function () {
              var e = this;
              if (this._isBodyOverflowing) {
                t(g.FIXED_CONTENT).each(function (n, i) {
                  var s = t(i)[0].style.paddingRight,
                    r = t(i).css("padding-right");
                  t(i)
                    .data("padding-right", s)
                    .css(
                      "padding-right",
                      parseFloat(r) + e._scrollbarWidth + "px"
                    );
                }),
                  t(g.STICKY_CONTENT).each(function (n, i) {
                    var s = t(i)[0].style.marginRight,
                      r = t(i).css("margin-right");
                    t(i)
                      .data("margin-right", s)
                      .css(
                        "margin-right",
                        parseFloat(r) - e._scrollbarWidth + "px"
                      );
                  }),
                  t(g.NAVBAR_TOGGLER).each(function (n, i) {
                    var s = t(i)[0].style.marginRight,
                      r = t(i).css("margin-right");
                    t(i)
                      .data("margin-right", s)
                      .css(
                        "margin-right",
                        parseFloat(r) + e._scrollbarWidth + "px"
                      );
                  });
                var n = document.body.style.paddingRight,
                  i = t("body").css("padding-right");
                t("body")
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + this._scrollbarWidth + "px"
                  );
              }
            }),
            (p._resetScrollbar = function () {
              t(g.FIXED_CONTENT).each(function (e, n) {
                var i = t(n).data("padding-right");
                "undefined" != typeof i &&
                  t(n).css("padding-right", i).removeData("padding-right");
              }),
                t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (
                  e,
                  n
                ) {
                  var i = t(n).data("margin-right");
                  "undefined" != typeof i &&
                    t(n).css("margin-right", i).removeData("margin-right");
                });
              var e = t("body").data("padding-right");
              "undefined" != typeof e &&
                t("body").css("padding-right", e).removeData("padding-right");
            }),
            (p._getScrollbarWidth = function () {
              var t = document.createElement("div");
              (t.className = c), document.body.appendChild(t);
              var e = t.getBoundingClientRect().width - t.clientWidth;
              return document.body.removeChild(t), e;
            }),
            (o._jQueryInterface = function (e, i) {
              return this.each(function () {
                var s = t(this).data(n),
                  a = r(
                    {},
                    o.Default,
                    t(this).data(),
                    "object" == typeof e && e
                  );
                if (
                  (s || ((s = new o(this, a)), t(this).data(n, s)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof s[e])
                    throw new TypeError('No method named "' + e + '"');
                  s[e](i);
                } else a.show && s.show(i);
              });
            }),
            s(o, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return a;
                },
              },
            ]),
            o
          );
        })();
      return (
        t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
          var i,
            s = this,
            o = P.getSelectorFromElement(this);
          o && (i = t(o)[0]);
          var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            e.preventDefault();
          var l = t(i).one(h.SHOW, function (e) {
            e.isDefaultPrevented() ||
              l.one(h.HIDDEN, function () {
                t(s).is(":visible") && s.focus();
              });
          });
          p._jQueryInterface.call(t(i), a, this);
        }),
        (t.fn.modal = p._jQueryInterface),
        (t.fn.modal.Constructor = p),
        (t.fn.modal.noConflict = function () {
          return (t.fn.modal = o), p._jQueryInterface;
        }),
        p
      );
    })(e),
    U = (function (t) {
      var e = "tooltip",
        i = "bs.tooltip",
        o = "." + i,
        a = t.fn[e],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        h = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
        },
        c = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        },
        u = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent",
        },
        f = "show",
        d = "out",
        _ = {
          HIDE: "hide" + o,
          HIDDEN: "hidden" + o,
          SHOW: "show" + o,
          SHOWN: "shown" + o,
          INSERTED: "inserted" + o,
          CLICK: "click" + o,
          FOCUSIN: "focusin" + o,
          FOCUSOUT: "focusout" + o,
          MOUSEENTER: "mouseenter" + o,
          MOUSELEAVE: "mouseleave" + o,
        },
        g = "fade",
        p = "show",
        m = ".tooltip-inner",
        v = ".arrow",
        E = "hover",
        T = "focus",
        y = "click",
        C = "manual",
        I = (function () {
          function a(t, e) {
            if ("undefined" == typeof n)
              throw new TypeError(
                "Bootstrap tooltips require Popper.js (https://popper.js.org)"
              );
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = t),
              (this.config = this._getConfig(e)),
              (this.tip = null),
              this._setListeners();
          }
          var I = a.prototype;
          return (
            (I.enable = function () {
              this._isEnabled = !0;
            }),
            (I.disable = function () {
              this._isEnabled = !1;
            }),
            (I.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (I.toggle = function (e) {
              if (this._isEnabled)
                if (e) {
                  var n = this.constructor.DATA_KEY,
                    i = t(e.currentTarget).data(n);
                  i ||
                    ((i = new this.constructor(
                      e.currentTarget,
                      this._getDelegateConfig()
                    )),
                    t(e.currentTarget).data(n, i)),
                    (i._activeTrigger.click = !i._activeTrigger.click),
                    i._isWithActiveTrigger()
                      ? i._enter(null, i)
                      : i._leave(null, i);
                } else {
                  if (t(this.getTipElement()).hasClass(p))
                    return void this._leave(null, this);
                  this._enter(null, this);
                }
            }),
            (I.dispose = function () {
              clearTimeout(this._timeout),
                t.removeData(this.element, this.constructor.DATA_KEY),
                t(this.element).off(this.constructor.EVENT_KEY),
                t(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && t(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null),
                null !== this._popper && this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (I.show = function () {
              var e = this;
              if ("none" === t(this.element).css("display"))
                throw new Error("Please use show on visible elements");
              var i = t.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                t(this.element).trigger(i);
                var s = t.contains(
                  this.element.ownerDocument.documentElement,
                  this.element
                );
                if (i.isDefaultPrevented() || !s) return;
                var r = this.getTipElement(),
                  o = P.getUID(this.constructor.NAME);
                r.setAttribute("id", o),
                  this.element.setAttribute("aria-describedby", o),
                  this.setContent(),
                  this.config.animation && t(r).addClass(g);
                var l =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, r, this.element)
                      : this.config.placement,
                  h = this._getAttachment(l);
                this.addAttachmentClass(h);
                var c =
                  !1 === this.config.container
                    ? document.body
                    : t(this.config.container);
                t(r).data(this.constructor.DATA_KEY, this),
                  t.contains(
                    this.element.ownerDocument.documentElement,
                    this.tip
                  ) || t(r).appendTo(c),
                  t(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new n(this.element, r, {
                    placement: h,
                    modifiers: {
                      offset: { offset: this.config.offset },
                      flip: { behavior: this.config.fallbackPlacement },
                      arrow: { element: v },
                      preventOverflow: {
                        boundariesElement: this.config.boundary,
                      },
                    },
                    onCreate: function (t) {
                      t.originalPlacement !== t.placement &&
                        e._handlePopperPlacementChange(t);
                    },
                    onUpdate: function (t) {
                      e._handlePopperPlacementChange(t);
                    },
                  })),
                  t(r).addClass(p),
                  "ontouchstart" in document.documentElement &&
                    t("body").children().on("mouseover", null, t.noop);
                var u = function () {
                  e.config.animation && e._fixTransition();
                  var n = e._hoverState;
                  (e._hoverState = null),
                    t(e.element).trigger(e.constructor.Event.SHOWN),
                    n === d && e._leave(null, e);
                };
                P.supportsTransitionEnd() && t(this.tip).hasClass(g)
                  ? t(this.tip)
                      .one(P.TRANSITION_END, u)
                      .emulateTransitionEnd(a._TRANSITION_DURATION)
                  : u();
              }
            }),
            (I.hide = function (e) {
              var n = this,
                i = this.getTipElement(),
                s = t.Event(this.constructor.Event.HIDE),
                r = function () {
                  n._hoverState !== f &&
                    i.parentNode &&
                    i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    e && e();
                };
              t(this.element).trigger(s),
                s.isDefaultPrevented() ||
                  (t(i).removeClass(p),
                  "ontouchstart" in document.documentElement &&
                    t("body").children().off("mouseover", null, t.noop),
                  (this._activeTrigger[y] = !1),
                  (this._activeTrigger[T] = !1),
                  (this._activeTrigger[E] = !1),
                  P.supportsTransitionEnd() && t(this.tip).hasClass(g)
                    ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150)
                    : r(),
                  (this._hoverState = ""));
            }),
            (I.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (I.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (I.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-tooltip-" + e);
            }),
            (I.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (I.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(m), this.getTitle()),
                e.removeClass(g + " " + p);
            }),
            (I.setElementContent = function (e, n) {
              var i = this.config.html;
              "object" == typeof n && (n.nodeType || n.jquery)
                ? i
                  ? t(n).parent().is(e) || e.empty().append(n)
                  : e.text(t(n).text())
                : e[i ? "html" : "text"](n);
            }),
            (I.getTitle = function () {
              var t = this.element.getAttribute("data-original-title");
              return (
                t ||
                  (t =
                    "function" == typeof this.config.title
                      ? this.config.title.call(this.element)
                      : this.config.title),
                t
              );
            }),
            (I._getAttachment = function (t) {
              return c[t.toUpperCase()];
            }),
            (I._setListeners = function () {
              var e = this;
              this.config.trigger.split(" ").forEach(function (n) {
                if ("click" === n)
                  t(e.element).on(
                    e.constructor.Event.CLICK,
                    e.config.selector,
                    function (t) {
                      return e.toggle(t);
                    }
                  );
                else if (n !== C) {
                  var i =
                      n === E
                        ? e.constructor.Event.MOUSEENTER
                        : e.constructor.Event.FOCUSIN,
                    s =
                      n === E
                        ? e.constructor.Event.MOUSELEAVE
                        : e.constructor.Event.FOCUSOUT;
                  t(e.element)
                    .on(i, e.config.selector, function (t) {
                      return e._enter(t);
                    })
                    .on(s, e.config.selector, function (t) {
                      return e._leave(t);
                    });
                }
                t(e.element)
                  .closest(".modal")
                  .on("hide.bs.modal", function () {
                    return e.hide();
                  });
              }),
                this.config.selector
                  ? (this.config = r({}, this.config, {
                      trigger: "manual",
                      selector: "",
                    }))
                  : this._fixTitle();
            }),
            (I._fixTitle = function () {
              var t = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== t) &&
                (this.element.setAttribute(
                  "data-original-title",
                  this.element.getAttribute("title") || ""
                ),
                this.element.setAttribute("title", ""));
            }),
            (I._enter = function (e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusin" === e.type ? T : E] = !0),
                t(n.getTipElement()).hasClass(p) || n._hoverState === f
                  ? (n._hoverState = f)
                  : (clearTimeout(n._timeout),
                    (n._hoverState = f),
                    n.config.delay && n.config.delay.show
                      ? (n._timeout = setTimeout(function () {
                          n._hoverState === f && n.show();
                        }, n.config.delay.show))
                      : n.show());
            }),
            (I._leave = function (e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusout" === e.type ? T : E] = !1),
                n._isWithActiveTrigger() ||
                  (clearTimeout(n._timeout),
                  (n._hoverState = d),
                  n.config.delay && n.config.delay.hide
                    ? (n._timeout = setTimeout(function () {
                        n._hoverState === d && n.hide();
                      }, n.config.delay.hide))
                    : n.hide());
            }),
            (I._isWithActiveTrigger = function () {
              for (var t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
              return !1;
            }),
            (I._getConfig = function (n) {
              return (
                "number" ==
                  typeof (n = r(
                    {},
                    this.constructor.Default,
                    t(this.element).data(),
                    n
                  )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                "number" == typeof n.title && (n.title = n.title.toString()),
                "number" == typeof n.content &&
                  (n.content = n.content.toString()),
                P.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
              );
            }),
            (I._getDelegateConfig = function () {
              var t = {};
              if (this.config)
                for (var e in this.config)
                  this.constructor.Default[e] !== this.config[e] &&
                    (t[e] = this.config[e]);
              return t;
            }),
            (I._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(l);
              null !== n && n.length > 0 && e.removeClass(n.join(""));
            }),
            (I._handlePopperPlacementChange = function (t) {
              this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement));
            }),
            (I._fixTransition = function () {
              var e = this.getTipElement(),
                n = this.config.animation;
              null === e.getAttribute("x-placement") &&
                (t(e).removeClass(g),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = n));
            }),
            (a._jQueryInterface = function (e) {
              return this.each(function () {
                var n = t(this).data(i),
                  s = "object" == typeof e && e;
                if (
                  (n || !/dispose|hide/.test(e)) &&
                  (n || ((n = new a(this, s)), t(this).data(i, n)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof n[e])
                    throw new TypeError('No method named "' + e + '"');
                  n[e]();
                }
              });
            }),
            s(a, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return u;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return e;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return i;
                },
              },
              {
                key: "Event",
                get: function () {
                  return _;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return o;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return h;
                },
              },
            ]),
            a
          );
        })();
      return (
        (t.fn[e] = I._jQueryInterface),
        (t.fn[e].Constructor = I),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = a), I._jQueryInterface;
        }),
        I
      );
    })(e),
    x = (function (t) {
      var e = "popover",
        n = "bs.popover",
        i = "." + n,
        o = t.fn[e],
        a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        l = r({}, U.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        h = r({}, U.DefaultType, { content: "(string|element|function)" }),
        c = "fade",
        u = "show",
        f = ".popover-header",
        d = ".popover-body",
        _ = {
          HIDE: "hide" + i,
          HIDDEN: "hidden" + i,
          SHOW: "show" + i,
          SHOWN: "shown" + i,
          INSERTED: "inserted" + i,
          CLICK: "click" + i,
          FOCUSIN: "focusin" + i,
          FOCUSOUT: "focusout" + i,
          MOUSEENTER: "mouseenter" + i,
          MOUSELEAVE: "mouseleave" + i,
        },
        g = (function (r) {
          var o, g;
          function p() {
            return r.apply(this, arguments) || this;
          }
          (g = r),
            ((o = p).prototype = Object.create(g.prototype)),
            (o.prototype.constructor = o),
            (o.__proto__ = g);
          var m = p.prototype;
          return (
            (m.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (m.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-popover-" + e);
            }),
            (m.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (m.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(f), this.getTitle());
              var n = this._getContent();
              "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(e.find(d), n),
                e.removeClass(c + " " + u);
            }),
            (m._getContent = function () {
              return (
                this.element.getAttribute("data-content") || this.config.content
              );
            }),
            (m._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(a);
              null !== n && n.length > 0 && e.removeClass(n.join(""));
            }),
            (p._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n),
                  s = "object" == typeof e ? e : null;
                if (
                  (i || !/destroy|hide/.test(e)) &&
                  (i || ((i = new p(this, s)), t(this).data(n, i)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            s(p, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return l;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return e;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return n;
                },
              },
              {
                key: "Event",
                get: function () {
                  return _;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return i;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return h;
                },
              },
            ]),
            p
          );
        })(U);
      return (
        (t.fn[e] = g._jQueryInterface),
        (t.fn[e].Constructor = g),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = o), g._jQueryInterface;
        }),
        g
      );
    })(e),
    K = (function (t) {
      var e = "scrollspy",
        n = "bs.scrollspy",
        i = "." + n,
        o = t.fn[e],
        a = { offset: 10, method: "auto", target: "" },
        l = { offset: "number", method: "string", target: "(string|element)" },
        h = {
          ACTIVATE: "activate" + i,
          SCROLL: "scroll" + i,
          LOAD_DATA_API: "load" + i + ".data-api",
        },
        c = "dropdown-item",
        u = "active",
        f = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          NAV_LIST_GROUP: ".nav, .list-group",
          NAV_LINKS: ".nav-link",
          NAV_ITEMS: ".nav-item",
          LIST_ITEMS: ".list-group-item",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle",
        },
        d = "offset",
        _ = "position",
        g = (function () {
          function o(e, n) {
            var i = this;
            (this._element = e),
              (this._scrollElement = "BODY" === e.tagName ? window : e),
              (this._config = this._getConfig(n)),
              (this._selector =
                this._config.target +
                " " +
                f.NAV_LINKS +
                "," +
                this._config.target +
                " " +
                f.LIST_ITEMS +
                "," +
                this._config.target +
                " " +
                f.DROPDOWN_ITEMS),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              t(this._scrollElement).on(h.SCROLL, function (t) {
                return i._process(t);
              }),
              this.refresh(),
              this._process();
          }
          var g = o.prototype;
          return (
            (g.refresh = function () {
              var e = this,
                n = this._scrollElement === this._scrollElement.window ? d : _,
                i = "auto" === this._config.method ? n : this._config.method,
                s = i === _ ? this._getScrollTop() : 0;
              (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                t
                  .makeArray(t(this._selector))
                  .map(function (e) {
                    var n,
                      r = P.getSelectorFromElement(e);
                    if ((r && (n = t(r)[0]), n)) {
                      var o = n.getBoundingClientRect();
                      if (o.width || o.height) return [t(n)[i]().top + s, r];
                    }
                    return null;
                  })
                  .filter(function (t) {
                    return t;
                  })
                  .sort(function (t, e) {
                    return t[0] - e[0];
                  })
                  .forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1]);
                  });
            }),
            (g.dispose = function () {
              t.removeData(this._element, n),
                t(this._scrollElement).off(i),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (g._getConfig = function (n) {
              if ("string" != typeof (n = r({}, a, n)).target) {
                var i = t(n.target).attr("id");
                i || ((i = P.getUID(e)), t(n.target).attr("id", i)),
                  (n.target = "#" + i);
              }
              return P.typeCheckConfig(e, n, l), n;
            }),
            (g._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
            }),
            (g._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                )
              );
            }),
            (g._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
            }),
            (g._process = function () {
              var t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                n = this._config.offset + e - this._getOffsetHeight();
              if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
              } else {
                if (
                  this._activeTarget &&
                  t < this._offsets[0] &&
                  this._offsets[0] > 0
                )
                  return (this._activeTarget = null), void this._clear();
                for (var s = this._offsets.length; s--; ) {
                  this._activeTarget !== this._targets[s] &&
                    t >= this._offsets[s] &&
                    ("undefined" == typeof this._offsets[s + 1] ||
                      t < this._offsets[s + 1]) &&
                    this._activate(this._targets[s]);
                }
              }
            }),
            (g._activate = function (e) {
              (this._activeTarget = e), this._clear();
              var n = this._selector.split(",");
              n = n.map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              });
              var i = t(n.join(","));
              i.hasClass(c)
                ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),
                  i.addClass(u))
                : (i.addClass(u),
                  i
                    .parents(f.NAV_LIST_GROUP)
                    .prev(f.NAV_LINKS + ", " + f.LIST_ITEMS)
                    .addClass(u),
                  i
                    .parents(f.NAV_LIST_GROUP)
                    .prev(f.NAV_ITEMS)
                    .children(f.NAV_LINKS)
                    .addClass(u)),
                t(this._scrollElement).trigger(h.ACTIVATE, {
                  relatedTarget: e,
                });
            }),
            (g._clear = function () {
              t(this._selector).filter(f.ACTIVE).removeClass(u);
            }),
            (o._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n);
                if (
                  (i ||
                    ((i = new o(this, "object" == typeof e && e)),
                    t(this).data(n, i)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            s(o, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return a;
                },
              },
            ]),
            o
          );
        })();
      return (
        t(window).on(h.LOAD_DATA_API, function () {
          for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--; ) {
            var i = t(e[n]);
            g._jQueryInterface.call(i, i.data());
          }
        }),
        (t.fn[e] = g._jQueryInterface),
        (t.fn[e].Constructor = g),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = o), g._jQueryInterface;
        }),
        g
      );
    })(e),
    V = (function (t) {
      var e = "bs.tab",
        n = "." + e,
        i = t.fn.tab,
        r = {
          HIDE: "hide" + n,
          HIDDEN: "hidden" + n,
          SHOW: "show" + n,
          SHOWN: "shown" + n,
          CLICK_DATA_API: "click.bs.tab.data-api",
        },
        o = "dropdown-menu",
        a = "active",
        l = "disabled",
        h = "fade",
        c = "show",
        u = ".dropdown",
        f = ".nav, .list-group",
        d = ".active",
        _ = "> li > .active",
        g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        p = ".dropdown-toggle",
        m = "> .dropdown-menu .active",
        v = (function () {
          function n(t) {
            this._element = t;
          }
          var i = n.prototype;
          return (
            (i.show = function () {
              var e = this;
              if (
                !(
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    t(this._element).hasClass(a)) ||
                  t(this._element).hasClass(l)
                )
              ) {
                var n,
                  i,
                  s = t(this._element).closest(f)[0],
                  o = P.getSelectorFromElement(this._element);
                if (s) {
                  var h = "UL" === s.nodeName ? _ : d;
                  i = (i = t.makeArray(t(s).find(h)))[i.length - 1];
                }
                var c = t.Event(r.HIDE, { relatedTarget: this._element }),
                  u = t.Event(r.SHOW, { relatedTarget: i });
                if (
                  (i && t(i).trigger(c),
                  t(this._element).trigger(u),
                  !u.isDefaultPrevented() && !c.isDefaultPrevented())
                ) {
                  o && (n = t(o)[0]), this._activate(this._element, s);
                  var g = function () {
                    var n = t.Event(r.HIDDEN, { relatedTarget: e._element }),
                      s = t.Event(r.SHOWN, { relatedTarget: i });
                    t(i).trigger(n), t(e._element).trigger(s);
                  };
                  n ? this._activate(n, n.parentNode, g) : g();
                }
              }
            }),
            (i.dispose = function () {
              t.removeData(this._element, e), (this._element = null);
            }),
            (i._activate = function (e, n, i) {
              var s = this,
                r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
                o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
                a = function () {
                  return s._transitionComplete(e, r, i);
                };
              r && o
                ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150)
                : a();
            }),
            (i._transitionComplete = function (e, n, i) {
              if (n) {
                t(n).removeClass(c + " " + a);
                var s = t(n.parentNode).find(m)[0];
                s && t(s).removeClass(a),
                  "tab" === n.getAttribute("role") &&
                    n.setAttribute("aria-selected", !1);
              }
              if (
                (t(e).addClass(a),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !0),
                P.reflow(e),
                t(e).addClass(c),
                e.parentNode && t(e.parentNode).hasClass(o))
              ) {
                var r = t(e).closest(u)[0];
                r && t(r).find(p).addClass(a),
                  e.setAttribute("aria-expanded", !0);
              }
              i && i();
            }),
            (n._jQueryInterface = function (i) {
              return this.each(function () {
                var s = t(this),
                  r = s.data(e);
                if (
                  (r || ((r = new n(this)), s.data(e, r)), "string" == typeof i)
                ) {
                  if ("undefined" == typeof r[i])
                    throw new TypeError('No method named "' + i + '"');
                  r[i]();
                }
              });
            }),
            s(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            n
          );
        })();
      return (
        t(document).on(r.CLICK_DATA_API, g, function (e) {
          e.preventDefault(), v._jQueryInterface.call(t(this), "show");
        }),
        (t.fn.tab = v._jQueryInterface),
        (t.fn.tab.Constructor = v),
        (t.fn.tab.noConflict = function () {
          return (t.fn.tab = i), v._jQueryInterface;
        }),
        v
      );
    })(e);
  !(function (t) {
    if ("undefined" == typeof t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      e[0] >= 4
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(e),
    (t.Util = P),
    (t.Alert = L),
    (t.Button = R),
    (t.Carousel = j),
    (t.Collapse = H),
    (t.Dropdown = W),
    (t.Modal = M),
    (t.Popover = x),
    (t.Scrollspy = K),
    (t.Tab = V),
    (t.Tooltip = U),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map

!(function (e) {
  "use strict";
  e.fn.meanmenu = function (n) {
    var a = {
      meanMenuTarget: jQuery(this),
      meanMenuContainer: "body",
      meanMenuClose: "X",
      meanMenuCloseSize: "18px",
      meanMenuOpen: "<span /><span /><span />",
      meanRevealPosition: "right",
      meanRevealPositionDistance: "0",
      meanRevealColour: "",
      meanScreenWidth: "767",
      meanNavPush: "",
      meanShowChildren: !0,
      meanExpandableChildren: !0,
      meanExpand: "+",
      meanContract: "-",
      meanRemoveAttrs: !1,
      onePage: !1,
      meanDisplay: "block",
      removeElements: "",
      siteLogo: "<a href='index.html'>Site Logo</a>",
    };
    n = e.extend(a, n);
    var t = window.innerWidth || document.documentElement.clientWidth;
    return this.each(function () {
      var e = n.meanMenuTarget,
        a = n.meanMenuContainer,
        r = n.meanMenuClose,
        i = n.meanMenuCloseSize,
        s = n.meanMenuOpen,
        u = n.meanRevealPosition,
        m = n.meanRevealPositionDistance,
        l = n.meanRevealColour,
        o = n.meanScreenWidth,
        c = n.meanNavPush,
        h = ".meanmenu-reveal",
        v = n.meanShowChildren,
        d = n.meanExpandableChildren,
        y = n.meanExpand,
        j = n.meanContract,
        Q = n.meanRemoveAttrs,
        f = n.onePage,
        g = n.meanDisplay,
        p = n.removeElements,
        C = n.siteLogo,
        w = !1;
      (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/Blackberry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) &&
        (w = !0),
        (navigator.userAgent.match(/MSIE 8/i) ||
          navigator.userAgent.match(/MSIE 7/i)) &&
          jQuery("html").css("overflow-y", "scroll");
      var x = "",
        A = function () {
          if ("center" === u) {
            var e = window.innerWidth || document.documentElement.clientWidth,
              n = e / 2 - 22 + "px";
            (x = "left:" + n + ";right:auto;"),
              w
                ? jQuery(".meanmenu-reveal").animate({ left: n })
                : jQuery(".meanmenu-reveal").css("left", n);
          }
        },
        E = !1,
        M = !1;
      "right" === u && (x = "right:" + m + ";left:auto;"),
        "left" === u && (x = "left:" + m + ";right:auto;"),
        A();
      var P = "",
        W = function () {
          P.html(jQuery(P).is(".meanmenu-reveal.meanclose") ? r : s);
        },
        S = function () {
          jQuery(".mean-bar,.mean-push").remove(),
            jQuery(a).removeClass("mean-container"),
            jQuery(e).css("display", g),
            (E = !1),
            (M = !1),
            jQuery(p).removeClass("mean-remove");
        },
        b = function () {
          var n = "background:" + l + ";color:" + l + ";" + x;
          if (o >= t) {
            jQuery(p).addClass("mean-remove"),
              (M = !0),
              jQuery(a).addClass("mean-container"),
              jQuery(".mean-container").prepend(
                '<div class="mean-bar">' +
                  C +
                  '<a href="#nav" class="meanmenu-reveal" style="' +
                  n +
                  '">Show Navigation</a><nav class="mean-nav"></nav></div>'
              );
            var r = jQuery(e).html();
            jQuery(".mean-nav").html(r),
              Q &&
                jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                  jQuery(this).is(".mean-remove")
                    ? jQuery(this).attr("class", "mean-remove")
                    : jQuery(this).removeAttr("class"),
                    jQuery(this).removeAttr("id");
                }),
              jQuery(e).before('<div class="mean-push" />'),
              jQuery(".mean-push").css("margin-top", c),
              jQuery(e).hide(),
              jQuery(".meanmenu-reveal").show(),
              jQuery(h).html(s),
              (P = jQuery(h)),
              jQuery(".mean-nav ul").hide(),
              v
                ? d
                  ? (jQuery(".mean-nav ul ul").each(function () {
                      jQuery(this).children().length &&
                        jQuery(this, "li:first")
                          .parent()
                          .append(
                            '<a class="mean-expand" href="#" style="font-size: ' +
                              i +
                              '">' +
                              y +
                              "</a>"
                          );
                    }),
                    jQuery(".mean-expand").on("click", function (e) {
                      e.preventDefault(),
                        jQuery(this).hasClass("mean-clicked")
                          ? (jQuery(this).text(y),
                            jQuery(this)
                              .prev("ul")
                              .slideUp(300, function () {}))
                          : (jQuery(this).text(j),
                            jQuery(this)
                              .prev("ul")
                              .slideDown(300, function () {})),
                        jQuery(this).toggleClass("mean-clicked");
                    }))
                  : jQuery(".mean-nav ul ul").show()
                : jQuery(".mean-nav ul ul").hide(),
              jQuery(".mean-nav ul li").last().addClass("mean-last"),
              P.removeClass("meanclose"),
              jQuery(P).click(function (e) {
                e.preventDefault(),
                  E === !1
                    ? (P.css("text-align", "center"),
                      P.css("text-indent", "0"),
                      P.css("font-size", i),
                      jQuery(".mean-nav ul:first").slideDown(),
                      (E = !0))
                    : (jQuery(".mean-nav ul:first").slideUp(), (E = !1)),
                  P.toggleClass("meanclose"),
                  W(),
                  jQuery(p).addClass("mean-remove");
              }),
              f &&
                jQuery(".mean-nav ul > li > a:first-child").on(
                  "click",
                  function () {
                    jQuery(".mean-nav ul:first").slideUp(),
                      (E = !1),
                      jQuery(P).toggleClass("meanclose").html(s);
                  }
                );
          } else S();
        };
      w ||
        jQuery(window).resize(function () {
          (t = window.innerWidth || document.documentElement.clientWidth),
            S(),
            o >= t ? (b(), A()) : S();
        }),
        jQuery(window).resize(function () {
          (t = window.innerWidth || document.documentElement.clientWidth),
            w
              ? (A(), o >= t ? M === !1 && b() : S())
              : (S(), o >= t && (b(), A()));
        }),
        b();
    });
  };
})(jQuery);

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!(function (l, o, e) {
  "use strict";
  (l.fn.scrollUp = function (o) {
    l.data(e.body, "scrollUp") ||
      (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o));
  }),
    (l.fn.scrollUp.init = function (r) {
      var s,
        t,
        c,
        i,
        n,
        a,
        d,
        p = (l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r)),
        f = !1;
      switch (
        ((d = p.scrollTrigger
          ? l(p.scrollTrigger)
          : l("<a/>", { id: p.scrollName, href: "#top" })),
        p.scrollTitle && d.attr("title", p.scrollTitle),
        d.appendTo("body"),
        p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
        d.css({ display: "none", position: "fixed", zIndex: p.zIndex }),
        p.activeOverlay &&
          l("<div/>", { id: p.scrollName + "-active" })
            .css({
              position: "absolute",
              top: p.scrollDistance + "px",
              width: "100%",
              borderTop: "1px dotted" + p.activeOverlay,
              zIndex: p.zIndex,
            })
            .appendTo("body"),
        p.animation)
      ) {
        case "fade":
          (s = "fadeIn"), (t = "fadeOut"), (c = p.animationSpeed);
          break;
        case "slide":
          (s = "slideDown"), (t = "slideUp"), (c = p.animationSpeed);
          break;
        default:
          (s = "show"), (t = "hide"), (c = 0);
      }
      (i =
        "top" === p.scrollFrom
          ? p.scrollDistance
          : l(e).height() - l(o).height() - p.scrollDistance),
        (n = l(o).scroll(function () {
          l(o).scrollTop() > i
            ? f || (d[s](c), (f = !0))
            : f && (d[t](c), (f = !1));
        })),
        p.scrollTarget
          ? "number" == typeof p.scrollTarget
            ? (a = p.scrollTarget)
            : "string" == typeof p.scrollTarget &&
              (a = Math.floor(l(p.scrollTarget).offset().top))
          : (a = 0),
        d.click(function (o) {
          o.preventDefault(),
            l("html, body").animate(
              { scrollTop: a },
              p.scrollSpeed,
              p.easingType
            );
        });
    }),
    (l.fn.scrollUp.defaults = {
      scrollName: "scrollUp",
      scrollDistance: 300,
      scrollFrom: "top",
      scrollSpeed: 300,
      easingType: "linear",
      animation: "fade",
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: "Scroll to top",
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647,
    }),
    (l.fn.scrollUp.destroy = function (r) {
      l.removeData(e.body, "scrollUp"),
        l("#" + l.fn.scrollUp.settings.scrollName).remove(),
        l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(),
        l.fn.jquery.split(".")[1] >= 7
          ? l(o).off("scroll", r)
          : l(o).unbind("scroll", r);
    }),
    (l.scrollUp = l.fn.scrollUp);
})(jQuery, window, document);

/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
!(function (t) {
  "use strict";
  t.fn.counterUp = function (e) {
    var n = t.extend({ time: 400, delay: 10 }, e);
    return this.each(function () {
      var e = t(this),
        u = n,
        a = function () {
          for (
            var t = [],
              n = u.time / u.delay,
              a = e.data("num"),
              r = /[0-9]+,[0-9]+/.test(a),
              o = (/^[0-9]+$/.test(a), /^[0-9]+\.[0-9]+$/.test(a)),
              c = o ? (a.split(".")[1] || []).length : 0,
              d = n;
            d >= 1;
            d--
          ) {
            var s = parseInt((a / n) * d);
            if ((o && (s = parseFloat((a / n) * d).toFixed(c)), r))
              for (; /(\d+)(\d{3})/.test(s.toString()); )
                s = s.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            t.unshift(s);
          }
          e.data("counterup-nums", t), e.text("0");
          var i = function () {
            e.data("counterup-nums") &&
              (e.text(e.data("counterup-nums").shift()),
              e.data("counterup-nums").length
                ? setTimeout(e.data("counterup-func"), u.delay)
                : (delete e.data("counterup-nums"),
                  e.data("counterup-nums", null),
                  e.data("counterup-func", null)));
          };
          e.data("counterup-func", i),
            setTimeout(e.data("counterup-func"), u.delay);
        };
      e.waypoint(a, { offset: "100%", triggerOnce: !0 });
    });
  };
})(jQuery);

/*!
Waypoints - 4.0.1
Copyright Â© 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.Context.refreshAll();
      for (var e in i) i[e].enabled = !0;
      return this;
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        n.windowContext ||
          ((n.windowContext = !0), (n.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s];
            if (null !== a.triggerPoint) {
              var l = o.oldScroll < a.triggerPoint,
                h = o.newScroll >= a.triggerPoint,
                p = l && h,
                u = !l && !h;
              (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
            }
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = Math.floor(y + l - f)),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();

var DateFormatter;
!(function () {
  "use strict";
  var D, s, r, a, n;
  (D = function (e, t) {
    return (
      "string" == typeof e &&
      "string" == typeof t &&
      e.toLowerCase() === t.toLowerCase()
    );
  }),
    (s = function (e, t, a) {
      var n = a || "0",
        r = e.toString();
      return r.length < t ? s(n + r, t) : r;
    }),
    (r = function (e) {
      var t, a;
      for (e = e || {}, t = 1; t < arguments.length; t++)
        if ((a = arguments[t]))
          for (var n in a)
            a.hasOwnProperty(n) &&
              ("object" == typeof a[n] ? r(e[n], a[n]) : (e[n] = a[n]));
      return e;
    }),
    (a = function (e, t) {
      for (var a = 0; a < t.length; a++)
        if (t[a].toLowerCase() === e.toLowerCase()) return a;
      return -1;
    }),
    (n = {
      dateSettings: {
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthsShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        meridiem: ["AM", "PM"],
        ordinal: function (e) {
          var t = e % 10,
            a = { 1: "st", 2: "nd", 3: "rd" };
          return 1 !== Math.floor((e % 100) / 10) && a[t] ? a[t] : "th";
        },
      },
      separators: /[ \-+\/\.T:@]/g,
      validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
      intParts: /[djwNzmnyYhHgGis]/g,
      tzParts:
        /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
      tzClip: /[^-+\dA-Z]/g,
    }),
    ((DateFormatter = function (e) {
      var t = this,
        a = r(n, e);
      (t.dateSettings = a.dateSettings),
        (t.separators = a.separators),
        (t.validParts = a.validParts),
        (t.intParts = a.intParts),
        (t.tzParts = a.tzParts),
        (t.tzClip = a.tzClip);
    }).prototype = {
      constructor: DateFormatter,
      getMonth: function (e) {
        var t;
        return (
          0 === (t = a(e, this.dateSettings.monthsShort) + 1) &&
            (t = a(e, this.dateSettings.months) + 1),
          t
        );
      },
      parseDate: function (e, t) {
        var a,
          n,
          r,
          o,
          i,
          s,
          d,
          u,
          l,
          f,
          c = this,
          m = !1,
          h = !1,
          g = c.dateSettings,
          p = {
            date: null,
            year: null,
            month: null,
            day: null,
            hour: 0,
            min: 0,
            sec: 0,
          };
        if (!e) return null;
        if (e instanceof Date) return e;
        if ("U" === t) return (r = parseInt(e)) ? new Date(1e3 * r) : e;
        switch (typeof e) {
          case "number":
            return new Date(e);
          case "string":
            break;
          default:
            return null;
        }
        if (!(a = t.match(c.validParts)) || 0 === a.length)
          throw new Error("Invalid date format definition.");
        for (
          n = e.replace(c.separators, "\0").split("\0"), r = 0;
          r < n.length;
          r++
        )
          switch (((o = n[r]), (i = parseInt(o)), a[r])) {
            case "y":
            case "Y":
              if (!i) return null;
              (l = o.length),
                (p.year = 2 === l ? parseInt((i < 70 ? "20" : "19") + o) : i),
                (m = !0);
              break;
            case "m":
            case "n":
            case "M":
            case "F":
              if (isNaN(i)) {
                if (!(0 < (s = c.getMonth(o)))) return null;
                p.month = s;
              } else {
                if (!(1 <= i && i <= 12)) return null;
                p.month = i;
              }
              m = !0;
              break;
            case "d":
            case "j":
              if (!(1 <= i && i <= 31)) return null;
              (p.day = i), (m = !0);
              break;
            case "g":
            case "h":
              if (
                ((f =
                  n[
                    (d =
                      -1 < a.indexOf("a")
                        ? a.indexOf("a")
                        : -1 < a.indexOf("A")
                        ? a.indexOf("A")
                        : -1)
                  ]),
                -1 < d)
              )
                (u = D(f, g.meridiem[0]) ? 0 : D(f, g.meridiem[1]) ? 12 : -1),
                  1 <= i && i <= 12 && -1 < u
                    ? (p.hour = i + u - 1)
                    : 0 <= i && i <= 23 && (p.hour = i);
              else {
                if (!(0 <= i && i <= 23)) return null;
                p.hour = i;
              }
              h = !0;
              break;
            case "G":
            case "H":
              if (!(0 <= i && i <= 23)) return null;
              (p.hour = i), (h = !0);
              break;
            case "i":
              if (!(0 <= i && i <= 59)) return null;
              (p.min = i), (h = !0);
              break;
            case "s":
              if (!(0 <= i && i <= 59)) return null;
              (p.sec = i), (h = !0);
          }
        if (!0 === m && p.year && p.month && p.day)
          p.date = new Date(
            p.year,
            p.month - 1,
            p.day,
            p.hour,
            p.min,
            p.sec,
            0
          );
        else {
          if (!0 !== h) return null;
          p.date = new Date(0, 0, 0, p.hour, p.min, p.sec, 0);
        }
        return p.date;
      },
      guessDate: function (e, t) {
        if ("string" != typeof e) return e;
        var a,
          n,
          r,
          o,
          i,
          s,
          d = e.replace(this.separators, "\0").split("\0"),
          u = t.match(this.validParts),
          l = new Date(),
          f = 0;
        if (!/^[djmn]/g.test(u[0])) return e;
        for (r = 0; r < d.length; r++) {
          if (((f = 2), (i = d[r]), (s = parseInt(i.substr(0, 2))), isNaN(s)))
            return null;
          switch (r) {
            case 0:
              "m" === u[0] || "n" === u[0] ? l.setMonth(s - 1) : l.setDate(s);
              break;
            case 1:
              "m" === u[0] || "n" === u[0] ? l.setDate(s) : l.setMonth(s - 1);
              break;
            case 2:
              if (
                ((n = l.getFullYear()),
                (f = (a = i.length) < 4 ? a : 4),
                !(n = parseInt(
                  a < 4 ? n.toString().substr(0, 4 - a) + i : i.substr(0, 4)
                )))
              )
                return null;
              l.setFullYear(n);
              break;
            case 3:
              l.setHours(s);
              break;
            case 4:
              l.setMinutes(s);
              break;
            case 5:
              l.setSeconds(s);
          }
          0 < (o = i.substr(f)).length && d.splice(r + 1, 0, o);
        }
        return l;
      },
      parseFormat: function (e, n) {
        var a,
          t = this,
          r = t.dateSettings,
          o = /\\?(.?)/gi,
          i = function (e, t) {
            return a[e] ? a[e]() : t;
          };
        return (
          (a = {
            d: function () {
              return s(a.j(), 2);
            },
            D: function () {
              return r.daysShort[a.w()];
            },
            j: function () {
              return n.getDate();
            },
            l: function () {
              return r.days[a.w()];
            },
            N: function () {
              return a.w() || 7;
            },
            w: function () {
              return n.getDay();
            },
            z: function () {
              var e = new Date(a.Y(), a.n() - 1, a.j()),
                t = new Date(a.Y(), 0, 1);
              return Math.round((e - t) / 864e5);
            },
            W: function () {
              var e = new Date(a.Y(), a.n() - 1, a.j() - a.N() + 3),
                t = new Date(e.getFullYear(), 0, 4);
              return s(1 + Math.round((e - t) / 864e5 / 7), 2);
            },
            F: function () {
              return r.months[n.getMonth()];
            },
            m: function () {
              return s(a.n(), 2);
            },
            M: function () {
              return r.monthsShort[n.getMonth()];
            },
            n: function () {
              return n.getMonth() + 1;
            },
            t: function () {
              return new Date(a.Y(), a.n(), 0).getDate();
            },
            L: function () {
              var e = a.Y();
              return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 1 : 0;
            },
            o: function () {
              var e = a.n(),
                t = a.W();
              return (
                a.Y() + (12 === e && t < 9 ? 1 : 1 === e && 9 < t ? -1 : 0)
              );
            },
            Y: function () {
              return n.getFullYear();
            },
            y: function () {
              return a.Y().toString().slice(-2);
            },
            a: function () {
              return a.A().toLowerCase();
            },
            A: function () {
              var e = a.G() < 12 ? 0 : 1;
              return r.meridiem[e];
            },
            B: function () {
              var e = 3600 * n.getUTCHours(),
                t = 60 * n.getUTCMinutes(),
                a = n.getUTCSeconds();
              return s(Math.floor((e + t + a + 3600) / 86.4) % 1e3, 3);
            },
            g: function () {
              return a.G() % 12 || 12;
            },
            G: function () {
              return n.getHours();
            },
            h: function () {
              return s(a.g(), 2);
            },
            H: function () {
              return s(a.G(), 2);
            },
            i: function () {
              return s(n.getMinutes(), 2);
            },
            s: function () {
              return s(n.getSeconds(), 2);
            },
            u: function () {
              return s(1e3 * n.getMilliseconds(), 6);
            },
            e: function () {
              return (
                /\((.*)\)/.exec(String(n))[1] || "Coordinated Universal Time"
              );
            },
            I: function () {
              return new Date(a.Y(), 0) - Date.UTC(a.Y(), 0) !=
                new Date(a.Y(), 6) - Date.UTC(a.Y(), 6)
                ? 1
                : 0;
            },
            O: function () {
              var e = n.getTimezoneOffset(),
                t = Math.abs(e);
              return (
                (0 < e ? "-" : "+") + s(100 * Math.floor(t / 60) + (t % 60), 4)
              );
            },
            P: function () {
              var e = a.O();
              return e.substr(0, 3) + ":" + e.substr(3, 2);
            },
            T: function () {
              return (
                (String(n).match(t.tzParts) || [""])
                  .pop()
                  .replace(t.tzClip, "") || "UTC"
              );
            },
            Z: function () {
              return 60 * -n.getTimezoneOffset();
            },
            c: function () {
              return "Y-m-d\\TH:i:sP".replace(o, i);
            },
            r: function () {
              return "D, d M Y H:i:s O".replace(o, i);
            },
            U: function () {
              return n.getTime() / 1e3 || 0;
            },
          }),
          i(e, e)
        );
      },
      formatDate: function (e, t) {
        var a,
          n,
          r,
          o,
          i,
          s = "";
        if ("string" == typeof e && !(e = this.parseDate(e, t))) return null;
        if (e instanceof Date) {
          for (r = t.length, a = 0; a < r; a++)
            "S" !== (i = t.charAt(a)) &&
              "\\" !== i &&
              (0 < a && "\\" === t.charAt(a - 1)
                ? (s += i)
                : ((o = this.parseFormat(i, e)),
                  a !== r - 1 &&
                    this.intParts.test(i) &&
                    "S" === t.charAt(a + 1) &&
                    ((n = parseInt(o) || 0),
                    (o += this.dateSettings.ordinal(n))),
                  (s += o)));
          return s;
        }
        return "";
      },
    });
})();
var datetimepickerFactory = function (L) {
  "use strict";
  var s = {
      i18n: {
        ar: {
          months: [
            "ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ",
            "Ø´Ø¨Ø§Ø·",
            "Ø¢Ø°Ø§Ø±",
            "Ù†ÙŠØ³Ø§Ù†",
            "Ù…Ø§ÙŠÙˆ",
            "Ø­Ø²ÙŠØ±Ø§Ù†",
            "ØªÙ…ÙˆØ²",
            "Ø¢Ø¨",
            "Ø£ÙŠÙ„ÙˆÙ„",
            "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„",
            "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ",
            "ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„",
          ],
          dayOfWeekShort: ["Ù†", "Ø«", "Ø¹", "Ø®", "Ø¬", "Ø³", "Ø­"],
          dayOfWeek: [
            "Ø§Ù„Ø£Ø­Ø¯",
            "Ø§Ù„Ø§Ø«Ù†ÙŠÙ†",
            "Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡",
            "Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡",
            "Ø§Ù„Ø®Ù…ÙŠØ³",
            "Ø§Ù„Ø¬Ù…Ø¹Ø©",
            "Ø§Ù„Ø³Ø¨Øª",
            "Ø§Ù„Ø£Ø­Ø¯",
          ],
        },
        ro: {
          months: [
            "Ianuarie",
            "Februarie",
            "Martie",
            "Aprilie",
            "Mai",
            "Iunie",
            "Iulie",
            "August",
            "Septembrie",
            "Octombrie",
            "Noiembrie",
            "Decembrie",
          ],
          dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "SÃ¢"],
          dayOfWeek: [
            "DuminicÄƒ",
            "Luni",
            "MarÅ£i",
            "Miercuri",
            "Joi",
            "Vineri",
            "SÃ¢mbÄƒtÄƒ",
          ],
        },
        id: {
          months: [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
          ],
          dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
          dayOfWeek: [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu",
          ],
        },
        is: {
          months: [
            "JanÃºar",
            "FebrÃºar",
            "Mars",
            "AprÃ­l",
            "MaÃ­",
            "JÃºnÃ­",
            "JÃºlÃ­",
            "ÃgÃºst",
            "September",
            "OktÃ³ber",
            "NÃ³vember",
            "Desember",
          ],
          dayOfWeekShort: [
            "Sun",
            "MÃ¡n",
            "ÃžriÃ°",
            "MiÃ°",
            "Fim",
            "FÃ¶s",
            "Lau",
          ],
          dayOfWeek: [
            "Sunnudagur",
            "MÃ¡nudagur",
            "ÃžriÃ°judagur",
            "MiÃ°vikudagur",
            "Fimmtudagur",
            "FÃ¶studagur",
            "Laugardagur",
          ],
        },
        bg: {
          months: [
            "Ð¯Ð½ÑƒÐ°Ñ€Ð¸",
            "Ð¤ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸",
            "ÐœÐ°Ñ€Ñ‚",
            "ÐÐ¿Ñ€Ð¸Ð»",
            "ÐœÐ°Ð¹",
            "Ð®Ð½Ð¸",
            "Ð®Ð»Ð¸",
            "ÐÐ²Ð³ÑƒÑÑ‚",
            "Ð¡ÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸",
            "ÐžÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸",
            "ÐÐ¾ÐµÐ¼Ð²Ñ€Ð¸",
            "Ð”ÐµÐºÐµÐ¼Ð²Ñ€Ð¸",
          ],
          dayOfWeekShort: [
            "ÐÐ´",
            "ÐŸÐ½",
            "Ð’Ñ‚",
            "Ð¡Ñ€",
            "Ð§Ñ‚",
            "ÐŸÑ‚",
            "Ð¡Ð±",
          ],
          dayOfWeek: [
            "ÐÐµÐ´ÐµÐ»Ñ",
            "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº",
            "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº",
            "Ð¡Ñ€ÑÐ´Ð°",
            "Ð§ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº",
            "ÐŸÐµÑ‚ÑŠÐº",
            "Ð¡ÑŠÐ±Ð¾Ñ‚Ð°",
          ],
        },
        fa: {
          months: [
            "ÙØ±ÙˆØ±Ø¯ÛŒÙ†",
            "Ø§Ø±Ø¯ÛŒØ¨Ù‡Ø´Øª",
            "Ø®Ø±Ø¯Ø§Ø¯",
            "ØªÛŒØ±",
            "Ù…Ø±Ø¯Ø§Ø¯",
            "Ø´Ù‡Ø±ÛŒÙˆØ±",
            "Ù…Ù‡Ø±",
            "Ø¢Ø¨Ø§Ù†",
            "Ø¢Ø°Ø±",
            "Ø¯ÛŒ",
            "Ø¨Ù‡Ù…Ù†",
            "Ø§Ø³ÙÙ†Ø¯",
          ],
          dayOfWeekShort: [
            "ÛŒÚ©Ø´Ù†Ø¨Ù‡",
            "Ø¯ÙˆØ´Ù†Ø¨Ù‡",
            "Ø³Ù‡ Ø´Ù†Ø¨Ù‡",
            "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡",
            "Ù¾Ù†Ø¬Ø´Ù†Ø¨Ù‡",
            "Ø¬Ù…Ø¹Ù‡",
            "Ø´Ù†Ø¨Ù‡",
          ],
          dayOfWeek: [
            "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡",
            "Ø¯ÙˆØ´Ù†Ø¨Ù‡",
            "Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡",
            "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡",
            "Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡",
            "Ø¬Ù…Ø¹Ù‡",
            "Ø´Ù†Ø¨Ù‡",
            "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡",
          ],
        },
        ru: {
          months: [
            "Ð¯Ð½Ð²Ð°Ñ€ÑŒ",
            "Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ",
            "ÐœÐ°Ñ€Ñ‚",
            "ÐÐ¿Ñ€ÐµÐ»ÑŒ",
            "ÐœÐ°Ð¹",
            "Ð˜ÑŽÐ½ÑŒ",
            "Ð˜ÑŽÐ»ÑŒ",
            "ÐÐ²Ð³ÑƒÑÑ‚",
            "Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ",
            "ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ",
            "ÐÐ¾ÑÐ±Ñ€ÑŒ",
            "Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ",
          ],
          dayOfWeekShort: [
            "Ð’Ñ",
            "ÐŸÐ½",
            "Ð’Ñ‚",
            "Ð¡Ñ€",
            "Ð§Ñ‚",
            "ÐŸÑ‚",
            "Ð¡Ð±",
          ],
          dayOfWeek: [
            "Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ",
            "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº",
            "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº",
            "Ð¡Ñ€ÐµÐ´Ð°",
            "Ð§ÐµÑ‚Ð²ÐµÑ€Ð³",
            "ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°",
            "Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°",
          ],
        },
        uk: {
          months: [
            "Ð¡Ñ–Ñ‡ÐµÐ½ÑŒ",
            "Ð›ÑŽÑ‚Ð¸Ð¹",
            "Ð‘ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ",
            "ÐšÐ²Ñ–Ñ‚ÐµÐ½ÑŒ",
            "Ð¢Ñ€Ð°Ð²ÐµÐ½ÑŒ",
            "Ð§ÐµÑ€Ð²ÐµÐ½ÑŒ",
            "Ð›Ð¸Ð¿ÐµÐ½ÑŒ",
            "Ð¡ÐµÑ€Ð¿ÐµÐ½ÑŒ",
            "Ð’ÐµÑ€ÐµÑÐµÐ½ÑŒ",
            "Ð–Ð¾Ð²Ñ‚ÐµÐ½ÑŒ",
            "Ð›Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´",
            "Ð“Ñ€ÑƒÐ´ÐµÐ½ÑŒ",
          ],
          dayOfWeekShort: [
            "ÐÐ´Ð»",
            "ÐŸÐ½Ð´",
            "Ð’Ñ‚Ñ€",
            "Ð¡Ñ€Ð´",
            "Ð§Ñ‚Ð²",
            "ÐŸÑ‚Ð½",
            "Ð¡Ð±Ñ‚",
          ],
          dayOfWeek: [
            "ÐÐµÐ´Ñ–Ð»Ñ",
            "ÐŸÐ¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº",
            "Ð’Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº",
            "Ð¡ÐµÑ€ÐµÐ´Ð°",
            "Ð§ÐµÑ‚Ð²ÐµÑ€",
            "ÐŸ'ÑÑ‚Ð½Ð¸Ñ†Ñ",
            "Ð¡ÑƒÐ±Ð¾Ñ‚Ð°",
          ],
        },
        en: {
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayOfWeek: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        el: {
          months: [
            "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚",
            "Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚",
            "ÎœÎ¬ÏÏ„Î¹Î¿Ï‚",
            "Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚",
            "ÎœÎ¬Î¹Î¿Ï‚",
            "Î™Î¿ÏÎ½Î¹Î¿Ï‚",
            "Î™Î¿ÏÎ»Î¹Î¿Ï‚",
            "Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚",
            "Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚",
            "ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚",
            "ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚",
            "Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚",
          ],
          dayOfWeekShort: [
            "ÎšÏ…Ï",
            "Î”ÎµÏ…",
            "Î¤ÏÎ¹",
            "Î¤ÎµÏ„",
            "Î ÎµÎ¼",
            "Î Î±Ï",
            "Î£Î±Î²",
          ],
          dayOfWeek: [
            "ÎšÏ…ÏÎ¹Î±ÎºÎ®",
            "Î”ÎµÏ…Ï„Î­ÏÎ±",
            "Î¤ÏÎ¯Ï„Î·",
            "Î¤ÎµÏ„Î¬ÏÏ„Î·",
            "Î Î­Î¼Ï€Ï„Î·",
            "Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®",
            "Î£Î¬Î²Î²Î±Ï„Î¿",
          ],
        },
        de: {
          months: [
            "Januar",
            "Februar",
            "MÃ¤rz",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
          ],
          dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
          dayOfWeek: [
            "Sonntag",
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag",
          ],
        },
        nl: {
          months: [
            "januari",
            "februari",
            "maart",
            "april",
            "mei",
            "juni",
            "juli",
            "augustus",
            "september",
            "oktober",
            "november",
            "december",
          ],
          dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
          dayOfWeek: [
            "zondag",
            "maandag",
            "dinsdag",
            "woensdag",
            "donderdag",
            "vrijdag",
            "zaterdag",
          ],
        },
        tr: {
          months: [
            "Ocak",
            "Åžubat",
            "Mart",
            "Nisan",
            "MayÄ±s",
            "Haziran",
            "Temmuz",
            "AÄŸustos",
            "EylÃ¼l",
            "Ekim",
            "KasÄ±m",
            "AralÄ±k",
          ],
          dayOfWeekShort: ["Paz", "Pts", "Sal", "Ã‡ar", "Per", "Cum", "Cts"],
          dayOfWeek: [
            "Pazar",
            "Pazartesi",
            "SalÄ±",
            "Ã‡arÅŸamba",
            "PerÅŸembe",
            "Cuma",
            "Cumartesi",
          ],
        },
        fr: {
          months: [
            "Janvier",
            "FÃ©vrier",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "AoÃ»t",
            "Septembre",
            "Octobre",
            "Novembre",
            "DÃ©cembre",
          ],
          dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
          dayOfWeek: [
            "dimanche",
            "lundi",
            "mardi",
            "mercredi",
            "jeudi",
            "vendredi",
            "samedi",
          ],
        },
        es: {
          months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
          dayOfWeekShort: ["Dom", "Lun", "Mar", "MiÃ©", "Jue", "Vie", "SÃ¡b"],
          dayOfWeek: [
            "Domingo",
            "Lunes",
            "Martes",
            "MiÃ©rcoles",
            "Jueves",
            "Viernes",
            "SÃ¡bado",
          ],
        },
        th: {
          months: [
            "à¸¡à¸à¸£à¸²à¸„à¸¡",
            "à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ",
            "à¸¡à¸µà¸™à¸²à¸„à¸¡",
            "à¹€à¸¡à¸©à¸²à¸¢à¸™",
            "à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡",
            "à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™",
            "à¸à¸£à¸à¸Žà¸²à¸„à¸¡",
            "à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡",
            "à¸à¸±à¸™à¸¢à¸²à¸¢à¸™",
            "à¸•à¸¸à¸¥à¸²à¸„à¸¡",
            "à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™",
            "à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡",
          ],
          dayOfWeekShort: [
            "à¸­à¸².",
            "à¸ˆ.",
            "à¸­.",
            "à¸ž.",
            "à¸žà¸¤.",
            "à¸¨.",
            "à¸ª.",
          ],
          dayOfWeek: [
            "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ",
            "à¸ˆà¸±à¸™à¸—à¸£à¹Œ",
            "à¸­à¸±à¸‡à¸„à¸²à¸£",
            "à¸žà¸¸à¸˜",
            "à¸žà¸¤à¸«à¸±à¸ª",
            "à¸¨à¸¸à¸à¸£à¹Œ",
            "à¹€à¸ªà¸²à¸£à¹Œ",
            "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ",
          ],
        },
        pl: {
          months: [
            "styczeÅ„",
            "luty",
            "marzec",
            "kwiecieÅ„",
            "maj",
            "czerwiec",
            "lipiec",
            "sierpieÅ„",
            "wrzesieÅ„",
            "paÅºdziernik",
            "listopad",
            "grudzieÅ„",
          ],
          dayOfWeekShort: ["nd", "pn", "wt", "Å›r", "cz", "pt", "sb"],
          dayOfWeek: [
            "niedziela",
            "poniedziaÅ‚ek",
            "wtorek",
            "Å›roda",
            "czwartek",
            "piÄ…tek",
            "sobota",
          ],
        },
        pt: {
          months: [
            "Janeiro",
            "Fevereiro",
            "MarÃ§o",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
          ],
          dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
          dayOfWeek: [
            "Domingo",
            "Segunda",
            "TerÃ§a",
            "Quarta",
            "Quinta",
            "Sexta",
            "SÃ¡bado",
          ],
        },
        ch: {
          months: [
            "ä¸€æœˆ",
            "äºŒæœˆ",
            "ä¸‰æœˆ",
            "å››æœˆ",
            "äº”æœˆ",
            "å…­æœˆ",
            "ä¸ƒæœˆ",
            "å…«æœˆ",
            "ä¹æœˆ",
            "åæœˆ",
            "åä¸€æœˆ",
            "åäºŒæœˆ",
          ],
          dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
        },
        se: {
          months: [
            "Januari",
            "Februari",
            "Mars",
            "April",
            "Maj",
            "Juni",
            "Juli",
            "Augusti",
            "September",
            "Oktober",
            "November",
            "December",
          ],
          dayOfWeekShort: ["SÃ¶n", "MÃ¥n", "Tis", "Ons", "Tor", "Fre", "LÃ¶r"],
        },
        km: {
          months: [
            "áž˜áž€ážšáž¶â€‹",
            "áž€áž»áž˜áŸ’áž—áŸˆ",
            "áž˜áž·áž“áž¶â€‹",
            "áž˜áŸážŸáž¶â€‹",
            "áž§ážŸáž—áž¶â€‹",
            "áž˜áž·ážáž»áž“áž¶â€‹",
            "áž€áž€áŸ’áž€ážŠáž¶â€‹",
            "ážŸáž¸áž áž¶â€‹",
            "áž€áž‰áŸ’áž‰áž¶â€‹",
            "ážáž»áž›áž¶â€‹",
            "ážœáž·áž…áŸ’áž†áž·áž€áž¶",
            "áž’áŸ’áž“áž¼â€‹",
          ],
          dayOfWeekShort: [
            "áž¢áž¶áž‘áž·â€‹",
            "áž…áŸáž“áŸ’áž‘â€‹",
            "áž¢áž„áŸ’áž‚áž¶ážšâ€‹",
            "áž–áž»áž’â€‹",
            "áž–áŸ’ážšáž â€‹â€‹",
            "ážŸáž»áž€áŸ’ážšâ€‹",
            "ážŸáŸ…ážšáŸ",
          ],
          dayOfWeek: [
            "áž¢áž¶áž‘áž·ážáŸ’áž™â€‹",
            "áž…áŸáž“áŸ’áž‘â€‹",
            "áž¢áž„áŸ’áž‚áž¶ážšâ€‹",
            "áž–áž»áž’â€‹",
            "áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸâ€‹",
            "ážŸáž»áž€áŸ’ážšâ€‹",
            "ážŸáŸ…ážšáŸ",
          ],
        },
        kr: {
          months: [
            "1ì›”",
            "2ì›”",
            "3ì›”",
            "4ì›”",
            "5ì›”",
            "6ì›”",
            "7ì›”",
            "8ì›”",
            "9ì›”",
            "10ì›”",
            "11ì›”",
            "12ì›”",
          ],
          dayOfWeekShort: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
          dayOfWeek: [
            "ì¼ìš”ì¼",
            "ì›”ìš”ì¼",
            "í™”ìš”ì¼",
            "ìˆ˜ìš”ì¼",
            "ëª©ìš”ì¼",
            "ê¸ˆìš”ì¼",
            "í† ìš”ì¼",
          ],
        },
        it: {
          months: [
            "Gennaio",
            "Febbraio",
            "Marzo",
            "Aprile",
            "Maggio",
            "Giugno",
            "Luglio",
            "Agosto",
            "Settembre",
            "Ottobre",
            "Novembre",
            "Dicembre",
          ],
          dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
          dayOfWeek: [
            "Domenica",
            "LunedÃ¬",
            "MartedÃ¬",
            "MercoledÃ¬",
            "GiovedÃ¬",
            "VenerdÃ¬",
            "Sabato",
          ],
        },
        da: {
          months: [
            "Januar",
            "Februar",
            "Marts",
            "April",
            "Maj",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "December",
          ],
          dayOfWeekShort: ["SÃ¸n", "Man", "Tir", "Ons", "Tor", "Fre", "LÃ¸r"],
          dayOfWeek: [
            "sÃ¸ndag",
            "mandag",
            "tirsdag",
            "onsdag",
            "torsdag",
            "fredag",
            "lÃ¸rdag",
          ],
        },
        no: {
          months: [
            "Januar",
            "Februar",
            "Mars",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Desember",
          ],
          dayOfWeekShort: ["SÃ¸n", "Man", "Tir", "Ons", "Tor", "Fre", "LÃ¸r"],
          dayOfWeek: [
            "SÃ¸ndag",
            "Mandag",
            "Tirsdag",
            "Onsdag",
            "Torsdag",
            "Fredag",
            "LÃ¸rdag",
          ],
        },
        ja: {
          months: [
            "1æœˆ",
            "2æœˆ",
            "3æœˆ",
            "4æœˆ",
            "5æœˆ",
            "6æœˆ",
            "7æœˆ",
            "8æœˆ",
            "9æœˆ",
            "10æœˆ",
            "11æœˆ",
            "12æœˆ",
          ],
          dayOfWeekShort: ["æ—¥", "æœˆ", "ç«", "æ°´", "æœ¨", "é‡‘", "åœŸ"],
          dayOfWeek: [
            "æ—¥æ›œ",
            "æœˆæ›œ",
            "ç«æ›œ",
            "æ°´æ›œ",
            "æœ¨æ›œ",
            "é‡‘æ›œ",
            "åœŸæ›œ",
          ],
        },
        vi: {
          months: [
            "ThÃ¡ng 1",
            "ThÃ¡ng 2",
            "ThÃ¡ng 3",
            "ThÃ¡ng 4",
            "ThÃ¡ng 5",
            "ThÃ¡ng 6",
            "ThÃ¡ng 7",
            "ThÃ¡ng 8",
            "ThÃ¡ng 9",
            "ThÃ¡ng 10",
            "ThÃ¡ng 11",
            "ThÃ¡ng 12",
          ],
          dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
          dayOfWeek: [
            "Chá»§ nháº­t",
            "Thá»© hai",
            "Thá»© ba",
            "Thá»© tÆ°",
            "Thá»© nÄƒm",
            "Thá»© sÃ¡u",
            "Thá»© báº£y",
          ],
        },
        sl: {
          months: [
            "Januar",
            "Februar",
            "Marec",
            "April",
            "Maj",
            "Junij",
            "Julij",
            "Avgust",
            "September",
            "Oktober",
            "November",
            "December",
          ],
          dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "ÄŒet", "Pet", "Sob"],
          dayOfWeek: [
            "Nedelja",
            "Ponedeljek",
            "Torek",
            "Sreda",
            "ÄŒetrtek",
            "Petek",
            "Sobota",
          ],
        },
        cs: {
          months: [
            "Leden",
            "Ãšnor",
            "BÅ™ezen",
            "Duben",
            "KvÄ›ten",
            "ÄŒerven",
            "ÄŒervenec",
            "Srpen",
            "ZÃ¡Å™Ã­",
            "Å˜Ã­jen",
            "Listopad",
            "Prosinec",
          ],
          dayOfWeekShort: ["Ne", "Po", "Ãšt", "St", "ÄŒt", "PÃ¡", "So"],
        },
        hu: {
          months: [
            "JanuÃ¡r",
            "FebruÃ¡r",
            "MÃ¡rcius",
            "Ãprilis",
            "MÃ¡jus",
            "JÃºnius",
            "JÃºlius",
            "Augusztus",
            "Szeptember",
            "OktÃ³ber",
            "November",
            "December",
          ],
          dayOfWeekShort: ["Va", "HÃ©", "Ke", "Sze", "Cs", "PÃ©", "Szo"],
          dayOfWeek: [
            "vasÃ¡rnap",
            "hÃ©tfÅ‘",
            "kedd",
            "szerda",
            "csÃ¼tÃ¶rtÃ¶k",
            "pÃ©ntek",
            "szombat",
          ],
        },
        az: {
          months: [
            "Yanvar",
            "Fevral",
            "Mart",
            "Aprel",
            "May",
            "Iyun",
            "Iyul",
            "Avqust",
            "Sentyabr",
            "Oktyabr",
            "Noyabr",
            "Dekabr",
          ],
          dayOfWeekShort: ["B", "Be", "Ã‡a", "Ã‡", "Ca", "C", "Åž"],
          dayOfWeek: [
            "Bazar",
            "Bazar ertÉ™si",
            "Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±",
            "Ã‡É™rÅŸÉ™nbÉ™",
            "CÃ¼mÉ™ axÅŸamÄ±",
            "CÃ¼mÉ™",
            "ÅžÉ™nbÉ™",
          ],
        },
        bs: {
          months: [
            "Januar",
            "Februar",
            "Mart",
            "April",
            "Maj",
            "Jun",
            "Jul",
            "Avgust",
            "Septembar",
            "Oktobar",
            "Novembar",
            "Decembar",
          ],
          dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "ÄŒet", "Pet", "Sub"],
          dayOfWeek: [
            "Nedjelja",
            "Ponedjeljak",
            "Utorak",
            "Srijeda",
            "ÄŒetvrtak",
            "Petak",
            "Subota",
          ],
        },
        ca: {
          months: [
            "Gener",
            "Febrer",
            "MarÃ§",
            "Abril",
            "Maig",
            "Juny",
            "Juliol",
            "Agost",
            "Setembre",
            "Octubre",
            "Novembre",
            "Desembre",
          ],
          dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
          dayOfWeek: [
            "Diumenge",
            "Dilluns",
            "Dimarts",
            "Dimecres",
            "Dijous",
            "Divendres",
            "Dissabte",
          ],
        },
        "en-GB": {
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayOfWeek: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        et: {
          months: [
            "Jaanuar",
            "Veebruar",
            "MÃ¤rts",
            "Aprill",
            "Mai",
            "Juuni",
            "Juuli",
            "August",
            "September",
            "Oktoober",
            "November",
            "Detsember",
          ],
          dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
          dayOfWeek: [
            "PÃ¼hapÃ¤ev",
            "EsmaspÃ¤ev",
            "TeisipÃ¤ev",
            "KolmapÃ¤ev",
            "NeljapÃ¤ev",
            "Reede",
            "LaupÃ¤ev",
          ],
        },
        eu: {
          months: [
            "Urtarrila",
            "Otsaila",
            "Martxoa",
            "Apirila",
            "Maiatza",
            "Ekaina",
            "Uztaila",
            "Abuztua",
            "Iraila",
            "Urria",
            "Azaroa",
            "Abendua",
          ],
          dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
          dayOfWeek: [
            "Igandea",
            "Astelehena",
            "Asteartea",
            "Asteazkena",
            "Osteguna",
            "Ostirala",
            "Larunbata",
          ],
        },
        fi: {
          months: [
            "Tammikuu",
            "Helmikuu",
            "Maaliskuu",
            "Huhtikuu",
            "Toukokuu",
            "KesÃ¤kuu",
            "HeinÃ¤kuu",
            "Elokuu",
            "Syyskuu",
            "Lokakuu",
            "Marraskuu",
            "Joulukuu",
          ],
          dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
          dayOfWeek: [
            "sunnuntai",
            "maanantai",
            "tiistai",
            "keskiviikko",
            "torstai",
            "perjantai",
            "lauantai",
          ],
        },
        gl: {
          months: [
            "Xan",
            "Feb",
            "Maz",
            "Abr",
            "Mai",
            "Xun",
            "Xul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dec",
          ],
          dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
          dayOfWeek: [
            "Domingo",
            "Luns",
            "Martes",
            "MÃ©rcores",
            "Xoves",
            "Venres",
            "SÃ¡bado",
          ],
        },
        hr: {
          months: [
            "SijeÄanj",
            "VeljaÄa",
            "OÅ¾ujak",
            "Travanj",
            "Svibanj",
            "Lipanj",
            "Srpanj",
            "Kolovoz",
            "Rujan",
            "Listopad",
            "Studeni",
            "Prosinac",
          ],
          dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "ÄŒet", "Pet", "Sub"],
          dayOfWeek: [
            "Nedjelja",
            "Ponedjeljak",
            "Utorak",
            "Srijeda",
            "ÄŒetvrtak",
            "Petak",
            "Subota",
          ],
        },
        ko: {
          months: [
            "1ì›”",
            "2ì›”",
            "3ì›”",
            "4ì›”",
            "5ì›”",
            "6ì›”",
            "7ì›”",
            "8ì›”",
            "9ì›”",
            "10ì›”",
            "11ì›”",
            "12ì›”",
          ],
          dayOfWeekShort: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
          dayOfWeek: [
            "ì¼ìš”ì¼",
            "ì›”ìš”ì¼",
            "í™”ìš”ì¼",
            "ìˆ˜ìš”ì¼",
            "ëª©ìš”ì¼",
            "ê¸ˆìš”ì¼",
            "í† ìš”ì¼",
          ],
        },
        lt: {
          months: [
            "Sausio",
            "Vasario",
            "Kovo",
            "BalandÅ¾io",
            "GeguÅ¾Ä—s",
            "BirÅ¾elio",
            "Liepos",
            "RugpjÅ«Äio",
            "RugsÄ—jo",
            "Spalio",
            "LapkriÄio",
            "GruodÅ¾io",
          ],
          dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Å eÅ¡"],
          dayOfWeek: [
            "Sekmadienis",
            "Pirmadienis",
            "Antradienis",
            "TreÄiadienis",
            "Ketvirtadienis",
            "Penktadienis",
            "Å eÅ¡tadienis",
          ],
        },
        lv: {
          months: [
            "JanvÄris",
            "FebruÄris",
            "Marts",
            "AprÄ«lis ",
            "Maijs",
            "JÅ«nijs",
            "JÅ«lijs",
            "Augusts",
            "Septembris",
            "Oktobris",
            "Novembris",
            "Decembris",
          ],
          dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
          dayOfWeek: [
            "SvÄ“tdiena",
            "Pirmdiena",
            "Otrdiena",
            "TreÅ¡diena",
            "Ceturtdiena",
            "Piektdiena",
            "Sestdiena",
          ],
        },
        mk: {
          months: [
            "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸",
            "Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸",
            "Ð¼Ð°Ñ€Ñ‚",
            "Ð°Ð¿Ñ€Ð¸Ð»",
            "Ð¼Ð°Ñ˜",
            "Ñ˜ÑƒÐ½Ð¸",
            "Ñ˜ÑƒÐ»Ð¸",
            "Ð°Ð²Ð³ÑƒÑÑ‚",
            "ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸",
            "Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸",
            "Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸",
            "Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸",
          ],
          dayOfWeekShort: [
            "Ð½ÐµÐ´",
            "Ð¿Ð¾Ð½",
            "Ð²Ñ‚Ð¾",
            "ÑÑ€Ðµ",
            "Ñ‡ÐµÑ‚",
            "Ð¿ÐµÑ‚",
            "ÑÐ°Ð±",
          ],
          dayOfWeek: [
            "ÐÐµÐ´ÐµÐ»Ð°",
            "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº",
            "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº",
            "Ð¡Ñ€ÐµÐ´Ð°",
            "Ð§ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº",
            "ÐŸÐµÑ‚Ð¾Ðº",
            "Ð¡Ð°Ð±Ð¾Ñ‚Ð°",
          ],
        },
        mn: {
          months: [
            "1-Ñ€ ÑÐ°Ñ€",
            "2-Ñ€ ÑÐ°Ñ€",
            "3-Ñ€ ÑÐ°Ñ€",
            "4-Ñ€ ÑÐ°Ñ€",
            "5-Ñ€ ÑÐ°Ñ€",
            "6-Ñ€ ÑÐ°Ñ€",
            "7-Ñ€ ÑÐ°Ñ€",
            "8-Ñ€ ÑÐ°Ñ€",
            "9-Ñ€ ÑÐ°Ñ€",
            "10-Ñ€ ÑÐ°Ñ€",
            "11-Ñ€ ÑÐ°Ñ€",
            "12-Ñ€ ÑÐ°Ñ€",
          ],
          dayOfWeekShort: [
            "Ð”Ð°Ð²",
            "ÐœÑÐ³",
            "Ð›Ñ…Ð°",
            "ÐŸÒ¯Ñ€",
            "Ð‘ÑÐ½",
            "Ð‘ÑÐ¼",
            "ÐÑÐ¼",
          ],
          dayOfWeek: [
            "Ð”Ð°Ð²Ð°Ð°",
            "ÐœÑÐ³Ð¼Ð°Ñ€",
            "Ð›Ñ…Ð°Ð³Ð²Ð°",
            "ÐŸÒ¯Ñ€ÑÐ²",
            "Ð‘Ð°Ð°ÑÐ°Ð½",
            "Ð‘ÑÐ¼Ð±Ð°",
            "ÐÑÐ¼",
          ],
        },
        "pt-BR": {
          months: [
            "Janeiro",
            "Fevereiro",
            "MarÃ§o",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
          ],
          dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "SÃ¡b"],
          dayOfWeek: [
            "Domingo",
            "Segunda",
            "TerÃ§a",
            "Quarta",
            "Quinta",
            "Sexta",
            "SÃ¡bado",
          ],
        },
        sk: {
          months: [
            "JanuÃ¡r",
            "FebruÃ¡r",
            "Marec",
            "AprÃ­l",
            "MÃ¡j",
            "JÃºn",
            "JÃºl",
            "August",
            "September",
            "OktÃ³ber",
            "November",
            "December",
          ],
          dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Å t", "Pi", "So"],
          dayOfWeek: [
            "NedeÄ¾a",
            "Pondelok",
            "Utorok",
            "Streda",
            "Å tvrtok",
            "Piatok",
            "Sobota",
          ],
        },
        sq: {
          months: [
            "Janar",
            "Shkurt",
            "Mars",
            "Prill",
            "Maj",
            "Qershor",
            "Korrik",
            "Gusht",
            "Shtator",
            "Tetor",
            "NÃ«ntor",
            "Dhjetor",
          ],
          dayOfWeekShort: ["Die", "HÃ«n", "Mar", "MÃ«r", "Enj", "Pre", "Shtu"],
          dayOfWeek: [
            "E Diel",
            "E HÃ«nÃ«",
            "E MartÄ“",
            "E MÃ«rkurÃ«",
            "E Enjte",
            "E Premte",
            "E ShtunÃ«",
          ],
        },
        "sr-YU": {
          months: [
            "Januar",
            "Februar",
            "Mart",
            "April",
            "Maj",
            "Jun",
            "Jul",
            "Avgust",
            "Septembar",
            "Oktobar",
            "Novembar",
            "Decembar",
          ],
          dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "Äet", "Pet", "Sub"],
          dayOfWeek: [
            "Nedelja",
            "Ponedeljak",
            "Utorak",
            "Sreda",
            "ÄŒetvrtak",
            "Petak",
            "Subota",
          ],
        },
        sr: {
          months: [
            "Ñ˜Ð°Ð½ÑƒÐ°Ñ€",
            "Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€",
            "Ð¼Ð°Ñ€Ñ‚",
            "Ð°Ð¿Ñ€Ð¸Ð»",
            "Ð¼Ð°Ñ˜",
            "Ñ˜ÑƒÐ½",
            "Ñ˜ÑƒÐ»",
            "Ð°Ð²Ð³ÑƒÑÑ‚",
            "ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€",
            "Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€",
            "Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€",
            "Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€",
          ],
          dayOfWeekShort: [
            "Ð½ÐµÐ´",
            "Ð¿Ð¾Ð½",
            "ÑƒÑ‚Ð¾",
            "ÑÑ€Ðµ",
            "Ñ‡ÐµÑ‚",
            "Ð¿ÐµÑ‚",
            "ÑÑƒÐ±",
          ],
          dayOfWeek: [
            "ÐÐµÐ´ÐµÑ™Ð°",
            "ÐŸÐ¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº",
            "Ð£Ñ‚Ð¾Ñ€Ð°Ðº",
            "Ð¡Ñ€ÐµÐ´Ð°",
            "Ð§ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº",
            "ÐŸÐµÑ‚Ð°Ðº",
            "Ð¡ÑƒÐ±Ð¾Ñ‚Ð°",
          ],
        },
        sv: {
          months: [
            "Januari",
            "Februari",
            "Mars",
            "April",
            "Maj",
            "Juni",
            "Juli",
            "Augusti",
            "September",
            "Oktober",
            "November",
            "December",
          ],
          dayOfWeekShort: ["SÃ¶n", "MÃ¥n", "Tis", "Ons", "Tor", "Fre", "LÃ¶r"],
          dayOfWeek: [
            "SÃ¶ndag",
            "MÃ¥ndag",
            "Tisdag",
            "Onsdag",
            "Torsdag",
            "Fredag",
            "LÃ¶rdag",
          ],
        },
        "zh-TW": {
          months: [
            "ä¸€æœˆ",
            "äºŒæœˆ",
            "ä¸‰æœˆ",
            "å››æœˆ",
            "äº”æœˆ",
            "å…­æœˆ",
            "ä¸ƒæœˆ",
            "å…«æœˆ",
            "ä¹æœˆ",
            "åæœˆ",
            "åä¸€æœˆ",
            "åäºŒæœˆ",
          ],
          dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
          dayOfWeek: [
            "æ˜ŸæœŸæ—¥",
            "æ˜ŸæœŸä¸€",
            "æ˜ŸæœŸäºŒ",
            "æ˜ŸæœŸä¸‰",
            "æ˜ŸæœŸå››",
            "æ˜ŸæœŸäº”",
            "æ˜ŸæœŸå…­",
          ],
        },
        zh: {
          months: [
            "ä¸€æœˆ",
            "äºŒæœˆ",
            "ä¸‰æœˆ",
            "å››æœˆ",
            "äº”æœˆ",
            "å…­æœˆ",
            "ä¸ƒæœˆ",
            "å…«æœˆ",
            "ä¹æœˆ",
            "åæœˆ",
            "åä¸€æœˆ",
            "åäºŒæœˆ",
          ],
          dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
          dayOfWeek: [
            "æ˜ŸæœŸæ—¥",
            "æ˜ŸæœŸä¸€",
            "æ˜ŸæœŸäºŒ",
            "æ˜ŸæœŸä¸‰",
            "æ˜ŸæœŸå››",
            "æ˜ŸæœŸäº”",
            "æ˜ŸæœŸå…­",
          ],
        },
        ug: {
          months: [
            "1-Ø¦Ø§ÙŠ",
            "2-Ø¦Ø§ÙŠ",
            "3-Ø¦Ø§ÙŠ",
            "4-Ø¦Ø§ÙŠ",
            "5-Ø¦Ø§ÙŠ",
            "6-Ø¦Ø§ÙŠ",
            "7-Ø¦Ø§ÙŠ",
            "8-Ø¦Ø§ÙŠ",
            "9-Ø¦Ø§ÙŠ",
            "10-Ø¦Ø§ÙŠ",
            "11-Ø¦Ø§ÙŠ",
            "12-Ø¦Ø§ÙŠ",
          ],
          dayOfWeek: [
            "ÙŠÛ•ÙƒØ´Û•Ù†Ø¨Û•",
            "Ø¯ÛˆØ´Û•Ù†Ø¨Û•",
            "Ø³Û•ÙŠØ´Û•Ù†Ø¨Û•",
            "Ú†Ø§Ø±Ø´Û•Ù†Ø¨Û•",
            "Ù¾Û•ÙŠØ´Û•Ù†Ø¨Û•",
            "Ø¬ÛˆÙ…Û•",
            "Ø´Û•Ù†Ø¨Û•",
          ],
        },
        he: {
          months: [
            "×™× ×•××¨",
            "×¤×‘×¨×•××¨",
            "×ž×¨×¥",
            "××¤×¨×™×œ",
            "×ž××™",
            "×™×•× ×™",
            "×™×•×œ×™",
            "××•×’×•×¡×˜",
            "×¡×¤×˜×ž×‘×¨",
            "××•×§×˜×•×‘×¨",
            "× ×•×‘×ž×‘×¨",
            "×“×¦×ž×‘×¨",
          ],
          dayOfWeekShort: ["×'", "×‘'", "×’'", "×“'", "×”'", "×•'", "×©×‘×ª"],
          dayOfWeek: [
            "×¨××©×•×Ÿ",
            "×©× ×™",
            "×©×œ×™×©×™",
            "×¨×‘×™×¢×™",
            "×—×ž×™×©×™",
            "×©×™×©×™",
            "×©×‘×ª",
            "×¨××©×•×Ÿ",
          ],
        },
        hy: {
          months: [
            "Õ€Õ¸Ö‚Õ¶Õ¾Õ¡Ö€",
            "Õ“Õ¥Õ¿Ö€Õ¾Õ¡Ö€",
            "Õ„Õ¡Ö€Õ¿",
            "Ô±ÕºÖ€Õ«Õ¬",
            "Õ„Õ¡ÕµÕ«Õ½",
            "Õ€Õ¸Ö‚Õ¶Õ«Õ½",
            "Õ€Õ¸Ö‚Õ¬Õ«Õ½",
            "Õ•Õ£Õ¸Õ½Õ¿Õ¸Õ½",
            "ÕÕ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€",
            "Õ€Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€",
            "Õ†Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€",
            "Ô´Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€",
          ],
          dayOfWeekShort: [
            "Ô¿Õ«",
            "ÔµÖ€Õ¯",
            "ÔµÖ€Ö„",
            "Õ‰Õ¸Ö€",
            "Õ€Õ¶Õ£",
            "ÕˆÖ‚Ö€Õ¢",
            "Õ‡Õ¢Õ©",
          ],
          dayOfWeek: [
            "Ô¿Õ«Ö€Õ¡Õ¯Õ«",
            "ÔµÖ€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«",
            "ÔµÖ€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«",
            "Õ‰Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«",
            "Õ€Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«",
            "ÕˆÖ‚Ö€Õ¢Õ¡Õ©",
            "Õ‡Õ¡Õ¢Õ¡Õ©",
          ],
        },
        kg: {
          months: [
            "Ò®Ñ‡Ñ‚Ò¯Ð½ Ð°Ð¹Ñ‹",
            "Ð‘Ð¸Ñ€Ð´Ð¸Ð½ Ð°Ð¹Ñ‹",
            "Ð–Ð°Ð»Ð³Ð°Ð½ ÐšÑƒÑ€Ð°Ð½",
            "Ð§Ñ‹Ð½ ÐšÑƒÑ€Ð°Ð½",
            "Ð‘ÑƒÐ³Ñƒ",
            "ÐšÑƒÐ»Ð¶Ð°",
            "Ð¢ÐµÐºÐµ",
            "Ð‘Ð°Ñˆ ÐžÐ¾Ð½Ð°",
            "ÐÑÐº ÐžÐ¾Ð½Ð°",
            "Ð¢Ð¾Ð³ÑƒÐ·Ð´ÑƒÐ½ Ð°Ð¹Ñ‹",
            "Ð–ÐµÑ‚Ð¸Ð½Ð¸Ð½ Ð°Ð¹Ñ‹",
            "Ð‘ÐµÑˆÑ‚Ð¸Ð½ Ð°Ð¹Ñ‹",
          ],
          dayOfWeekShort: [
            "Ð–ÐµÐº",
            "Ð”Ò¯Ð¹",
            "Ð¨ÐµÐ¹",
            "Ð¨Ð°Ñ€",
            "Ð‘ÐµÐ¹",
            "Ð–ÑƒÐ¼",
            "Ð˜ÑˆÐµ",
          ],
          dayOfWeek: [
            "Ð–ÐµÐºÑˆÐµÐ¼Ð±",
            "Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±",
            "Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±",
            "Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±",
            "Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸",
            "Ð–ÑƒÐ¼Ð°",
            "Ð˜ÑˆÐµÐ½Ð±",
          ],
        },
        rm: {
          months: [
            "Schaner",
            "Favrer",
            "Mars",
            "Avrigl",
            "Matg",
            "Zercladur",
            "Fanadur",
            "Avust",
            "Settember",
            "October",
            "November",
            "December",
          ],
          dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
          dayOfWeek: [
            "Dumengia",
            "Glindesdi",
            "Mardi",
            "Mesemna",
            "Gievgia",
            "Venderdi",
            "Sonda",
          ],
        },
        ka: {
          months: [
            "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜",
            "áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜",
            "áƒ›áƒáƒ áƒ¢áƒ˜",
            "áƒáƒžáƒ áƒ˜áƒšáƒ˜",
            "áƒ›áƒáƒ˜áƒ¡áƒ˜",
            "áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜",
            "áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜",
            "áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ",
            "áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜",
            "áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜",
            "áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜",
            "áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜",
          ],
          dayOfWeekShort: [
            "áƒ™áƒ•",
            "áƒáƒ áƒ¨",
            "áƒ¡áƒáƒ›áƒ¨",
            "áƒáƒ—áƒ®",
            "áƒ®áƒ£áƒ—",
            "áƒžáƒáƒ ",
            "áƒ¨áƒáƒ‘",
          ],
          dayOfWeek: [
            "áƒ™áƒ•áƒ˜áƒ áƒ",
            "áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
            "áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
            "áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
            "áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
            "áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜",
            "áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
          ],
        },
      },
      ownerDocument: document,
      contentWindow: window,
      value: "",
      rtl: !1,
      format: "Y/m/d H:i",
      formatTime: "H:i",
      formatDate: "Y/m/d",
      startDate: !1,
      step: 60,
      monthChangeSpinner: !0,
      closeOnDateSelect: !1,
      closeOnTimeSelect: !0,
      closeOnWithoutClick: !0,
      closeOnInputClick: !0,
      openOnFocus: !0,
      timepicker: !0,
      datepicker: !0,
      weeks: !1,
      defaultTime: !1,
      defaultDate: !1,
      minDate: !1,
      maxDate: !1,
      minTime: !1,
      maxTime: !1,
      minDateTime: !1,
      maxDateTime: !1,
      allowTimes: [],
      opened: !1,
      initTime: !0,
      inline: !1,
      theme: "",
      touchMovedThreshold: 5,
      onSelectDate: function () {},
      onSelectTime: function () {},
      onChangeMonth: function () {},
      onGetWeekOfYear: function () {},
      onChangeYear: function () {},
      onChangeDateTime: function () {},
      onShow: function () {},
      onClose: function () {},
      onGenerate: function () {},
      withoutCopyright: !0,
      inverseButton: !1,
      hours12: !1,
      next: "xdsoft_next",
      prev: "xdsoft_prev",
      dayOfWeekStart: 0,
      parentID: "body",
      timeHeightInTimePicker: 25,
      timepickerScrollbar: !0,
      todayButton: !0,
      prevButton: !0,
      nextButton: !0,
      defaultSelect: !0,
      scrollMonth: !0,
      scrollTime: !0,
      scrollInput: !0,
      lazyInit: !1,
      mask: !1,
      validateOnBlur: !0,
      allowBlank: !0,
      yearStart: 1950,
      yearEnd: 2050,
      monthStart: 0,
      monthEnd: 11,
      style: "",
      id: "",
      fixed: !1,
      roundTime: "round",
      className: "",
      weekends: [],
      highlightedDates: [],
      highlightedPeriods: [],
      allowDates: [],
      allowDateRe: null,
      disabledDates: [],
      disabledWeekDays: [],
      yearOffset: 0,
      beforeShowDay: null,
      enterLikeTab: !0,
      showApplyButton: !1,
      insideParent: !1,
    },
    E = null,
    n = null,
    R = "en",
    a = { meridiem: ["AM", "PM"] },
    r = function () {
      var e = s.i18n[R],
        t = {
          days: e.dayOfWeek,
          daysShort: e.dayOfWeekShort,
          months: e.months,
          monthsShort: L.map(e.months, function (e) {
            return e.substring(0, 3);
          }),
        };
      "function" == typeof DateFormatter &&
        (E = n = new DateFormatter({ dateSettings: L.extend({}, a, t) }));
    },
    o = {
      moment: {
        default_options: {
          format: "YYYY/MM/DD HH:mm",
          formatDate: "YYYY/MM/DD",
          formatTime: "HH:mm",
        },
        formatter: {
          parseDate: function (e, t) {
            if (i(t)) return n.parseDate(e, t);
            var a = moment(e, t);
            return !!a.isValid() && a.toDate();
          },
          formatDate: function (e, t) {
            return i(t) ? n.formatDate(e, t) : moment(e).format(t);
          },
          formatMask: function (e) {
            return e
              .replace(/Y{4}/g, "9999")
              .replace(/Y{2}/g, "99")
              .replace(/M{2}/g, "19")
              .replace(/D{2}/g, "39")
              .replace(/H{2}/g, "29")
              .replace(/m{2}/g, "59")
              .replace(/s{2}/g, "59");
          },
        },
      },
    };
  L.datetimepicker = {
    setLocale: function (e) {
      var t = s.i18n[e] ? e : "en";
      R !== t && ((R = t), r());
    },
    setDateFormatter: function (e) {
      if ("string" == typeof e && o.hasOwnProperty(e)) {
        var t = o[e];
        L.extend(s, t.default_options), (E = t.formatter);
      } else E = e;
    },
  };
  var t = {
      RFC_2822: "D, d M Y H:i:s O",
      ATOM: "Y-m-dTH:i:sP",
      ISO_8601: "Y-m-dTH:i:sO",
      RFC_822: "D, d M y H:i:s O",
      RFC_850: "l, d-M-y H:i:s T",
      RFC_1036: "D, d M y H:i:s O",
      RFC_1123: "D, d M Y H:i:s O",
      RSS: "D, d M Y H:i:s O",
      W3C: "Y-m-dTH:i:sP",
    },
    i = function (e) {
      return -1 !== Object.values(t).indexOf(e);
    };
  function m(e, t, a) {
    (this.date = e), (this.desc = t), (this.style = a);
  }
  L.extend(L.datetimepicker, t),
    r(),
    window.getComputedStyle ||
      (window.getComputedStyle = function (a) {
        return (
          (this.el = a),
          (this.getPropertyValue = function (e) {
            var t = /(-([a-z]))/g;
            return (
              "float" === e && (e = "styleFloat"),
              t.test(e) &&
                (e = e.replace(t, function (e, t, a) {
                  return a.toUpperCase();
                })),
              a.currentStyle[e] || null
            );
          }),
          this
        );
      }),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (e, t) {
        var a, n;
        for (a = t || 0, n = this.length; a < n; a += 1)
          if (this[a] === e) return a;
        return -1;
      }),
    (Date.prototype.countDaysInMonth = function () {
      return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
    }),
    (L.fn.xdsoftScroller = function (p, D) {
      return this.each(function () {
        var o,
          i,
          s,
          d,
          u,
          l = L(this),
          a = function (e) {
            var t,
              a = { x: 0, y: 0 };
            return (
              "touchstart" === e.type ||
              "touchmove" === e.type ||
              "touchend" === e.type ||
              "touchcancel" === e.type
                ? ((t =
                    e.originalEvent.touches[0] ||
                    e.originalEvent.changedTouches[0]),
                  (a.x = t.clientX),
                  (a.y = t.clientY))
                : ("mousedown" !== e.type &&
                    "mouseup" !== e.type &&
                    "mousemove" !== e.type &&
                    "mouseover" !== e.type &&
                    "mouseout" !== e.type &&
                    "mouseenter" !== e.type &&
                    "mouseleave" !== e.type) ||
                  ((a.x = e.clientX), (a.y = e.clientY)),
              a
            );
          },
          f = 100,
          n = !1,
          r = 0,
          c = 0,
          m = 0,
          t = !1,
          h = 0,
          g = function () {};
        "hide" !== D
          ? (L(this).hasClass("xdsoft_scroller_box") ||
              ((o = l.children().eq(0)),
              (i = l[0].clientHeight),
              (s = o[0].offsetHeight),
              (d = L('<div class="xdsoft_scrollbar"></div>')),
              (u = L('<div class="xdsoft_scroller"></div>')),
              d.append(u),
              l.addClass("xdsoft_scroller_box").append(d),
              (g = function (e) {
                var t = a(e).y - r + h;
                t < 0 && (t = 0),
                  t + u[0].offsetHeight > m && (t = m - u[0].offsetHeight),
                  l.trigger("scroll_element.xdsoft_scroller", [f ? t / f : 0]);
              }),
              u
                .on(
                  "touchstart.xdsoft_scroller mousedown.xdsoft_scroller",
                  function (e) {
                    i || l.trigger("resize_scroll.xdsoft_scroller", [D]),
                      (r = a(e).y),
                      (h = parseInt(u.css("margin-top"), 10)),
                      (m = d[0].offsetHeight),
                      "mousedown" === e.type || "touchstart" === e.type
                        ? (p.ownerDocument &&
                            L(p.ownerDocument.body).addClass("xdsoft_noselect"),
                          L([p.ownerDocument.body, p.contentWindow]).on(
                            "touchend mouseup.xdsoft_scroller",
                            function e() {
                              L([p.ownerDocument.body, p.contentWindow])
                                .off("touchend mouseup.xdsoft_scroller", e)
                                .off("mousemove.xdsoft_scroller", g)
                                .removeClass("xdsoft_noselect");
                            }
                          ),
                          L(p.ownerDocument.body).on(
                            "mousemove.xdsoft_scroller",
                            g
                          ))
                        : ((t = !0), e.stopPropagation(), e.preventDefault());
                  }
                )
                .on("touchmove", function (e) {
                  t && (e.preventDefault(), g(e));
                })
                .on("touchend touchcancel", function () {
                  (t = !1), (h = 0);
                }),
              l
                .on("scroll_element.xdsoft_scroller", function (e, t) {
                  i || l.trigger("resize_scroll.xdsoft_scroller", [t, !0]),
                    (t = 1 < t ? 1 : t < 0 || isNaN(t) ? 0 : t),
                    u.css("margin-top", f * t),
                    setTimeout(function () {
                      o.css(
                        "marginTop",
                        -parseInt((o[0].offsetHeight - i) * t, 10)
                      );
                    }, 10);
                })
                .on("resize_scroll.xdsoft_scroller", function (e, t, a) {
                  var n, r;
                  (i = l[0].clientHeight),
                    (s = o[0].offsetHeight),
                    (r = (n = i / s) * d[0].offsetHeight),
                    1 < n
                      ? u.hide()
                      : (u.show(),
                        u.css("height", parseInt(10 < r ? r : 10, 10)),
                        (f = d[0].offsetHeight - u[0].offsetHeight),
                        !0 !== a &&
                          l.trigger("scroll_element.xdsoft_scroller", [
                            t ||
                              Math.abs(parseInt(o.css("marginTop"), 10)) /
                                (s - i),
                          ]));
                }),
              l.on("mousewheel", function (e) {
                var t = Math.abs(parseInt(o.css("marginTop"), 10));
                return (
                  (t -= 20 * e.deltaY) < 0 && (t = 0),
                  l.trigger("scroll_element.xdsoft_scroller", [t / (s - i)]),
                  e.stopPropagation(),
                  !1
                );
              }),
              l.on("touchstart", function (e) {
                (n = a(e)), (c = Math.abs(parseInt(o.css("marginTop"), 10)));
              }),
              l.on("touchmove", function (e) {
                if (n) {
                  e.preventDefault();
                  var t = a(e);
                  l.trigger("scroll_element.xdsoft_scroller", [
                    (c - (t.y - n.y)) / (s - i),
                  ]);
                }
              }),
              l.on("touchend touchcancel", function () {
                (n = !1), (c = 0);
              })),
            l.trigger("resize_scroll.xdsoft_scroller", [D]))
          : l.find(".xdsoft_scrollbar").hide();
      });
    }),
    (L.fn.datetimepicker = function (H, a) {
      var n,
        r,
        o = this,
        p = 17,
        D = 13,
        y = 27,
        v = 37,
        b = 38,
        k = 39,
        x = 40,
        T = 9,
        S = 116,
        M = 65,
        w = 67,
        j = 86,
        J = 90,
        z = 89,
        I = !1,
        N =
          L.isPlainObject(H) || !H
            ? L.extend(!0, {}, s, H)
            : L.extend(!0, {}, s),
        i = 0;
      return (
        (n = function (O) {
          var t,
            n,
            a,
            r,
            W,
            h,
            _ = L('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
            e = L(
              '<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'
            ),
            g = L('<div class="xdsoft_datepicker active"></div>'),
            F = L(
              '<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'
            ),
            C = L('<div class="xdsoft_calendar"></div>'),
            o = L(
              '<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'
            ),
            u = o.find(".xdsoft_time_box").eq(0),
            P = L('<div class="xdsoft_time_variant"></div>'),
            i = L(
              '<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'
            ),
            Y = L(
              '<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'
            ),
            A = L(
              '<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'
            ),
            s = !1,
            d = 0;
          N.id && _.attr("id", N.id),
            N.style && _.attr("style", N.style),
            N.weeks && _.addClass("xdsoft_showweeks"),
            N.rtl && _.addClass("xdsoft_rtl"),
            _.addClass("xdsoft_" + N.theme),
            _.addClass(N.className),
            F.find(".xdsoft_month span").after(Y),
            F.find(".xdsoft_year span").after(A),
            F.find(".xdsoft_month,.xdsoft_year").on(
              "touchstart mousedown.xdsoft",
              function (e) {
                var t,
                  a,
                  n = L(this).find(".xdsoft_select").eq(0),
                  r = 0,
                  o = 0,
                  i = n.is(":visible");
                for (
                  F.find(".xdsoft_select").hide(),
                    W.currentTime &&
                      (r =
                        W.currentTime[
                          L(this).hasClass("xdsoft_month")
                            ? "getMonth"
                            : "getFullYear"
                        ]()),
                    n[i ? "hide" : "show"](),
                    t = n.find("div.xdsoft_option"),
                    a = 0;
                  a < t.length && t.eq(a).data("value") !== r;
                  a += 1
                )
                  o += t[0].offsetHeight;
                return (
                  n.xdsoftScroller(
                    N,
                    o / (n.children()[0].offsetHeight - n[0].clientHeight)
                  ),
                  e.stopPropagation(),
                  !1
                );
              }
            );
          var l = function (e) {
            var t = e.originalEvent,
              a = t.touches ? t.touches[0] : t;
            this.touchStartPosition = this.touchStartPosition || a;
            var n = Math.abs(this.touchStartPosition.clientX - a.clientX),
              r = Math.abs(this.touchStartPosition.clientY - a.clientY);
            Math.sqrt(n * n + r * r) > N.touchMovedThreshold &&
              (this.touchMoved = !0);
          };
          function f() {
            var e,
              t = !1;
            return (
              N.startDate
                ? (t = W.strToDate(N.startDate))
                : (t = N.value || (O && O.val && O.val() ? O.val() : ""))
                ? ((t = W.strToDateTime(t)),
                  N.yearOffset &&
                    (t = new Date(
                      t.getFullYear() - N.yearOffset,
                      t.getMonth(),
                      t.getDate(),
                      t.getHours(),
                      t.getMinutes(),
                      t.getSeconds(),
                      t.getMilliseconds()
                    )))
                : N.defaultDate &&
                  ((t = W.strToDateTime(N.defaultDate)),
                  N.defaultTime &&
                    ((e = W.strtotime(N.defaultTime)),
                    t.setHours(e.getHours()),
                    t.setMinutes(e.getMinutes()))),
              t && W.isValidDate(t) ? _.data("changed", !0) : (t = ""),
              t || 0
            );
          }
          function c(m) {
            var h = function (e, t) {
                var a = e
                  .replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1")
                  .replace(/_/g, "{digit+}")
                  .replace(/([0-9]{1})/g, "{digit$1}")
                  .replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}")
                  .replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                return new RegExp(a).test(t);
              },
              g = function (e, t) {
                if (
                  !(e =
                    "string" == typeof e || e instanceof String
                      ? m.ownerDocument.getElementById(e)
                      : e)
                )
                  return !1;
                if (e.createTextRange) {
                  var a = e.createTextRange();
                  return (
                    a.collapse(!0),
                    a.moveEnd("character", t),
                    a.moveStart("character", t),
                    a.select(),
                    !0
                  );
                }
                return !!e.setSelectionRange && (e.setSelectionRange(t, t), !0);
              };
            m.mask && O.off("keydown.xdsoft"),
              !0 === m.mask &&
                (E.formatMask
                  ? (m.mask = E.formatMask(m.format))
                  : (m.mask = m.format
                      .replace(/Y/g, "9999")
                      .replace(/F/g, "9999")
                      .replace(/m/g, "19")
                      .replace(/d/g, "39")
                      .replace(/H/g, "29")
                      .replace(/i/g, "59")
                      .replace(/s/g, "59"))),
              "string" === L.type(m.mask) &&
                (h(m.mask, O.val()) ||
                  (O.val(m.mask.replace(/[0-9]/g, "_")), g(O[0], 0)),
                O.on("paste.xdsoft", function (e) {
                  var t = (
                      e.clipboardData ||
                      e.originalEvent.clipboardData ||
                      window.clipboardData
                    ).getData("text"),
                    a = this.value,
                    n = this.selectionStart;
                  return (
                    (a = a.substr(0, n) + t + a.substr(n + t.length)),
                    (n += t.length),
                    h(m.mask, a)
                      ? ((this.value = a), g(this, n))
                      : "" === L.trim(a)
                      ? (this.value = m.mask.replace(/[0-9]/g, "_"))
                      : O.trigger("error_input.xdsoft"),
                    e.preventDefault(),
                    !1
                  );
                }),
                O.on("keydown.xdsoft", function (e) {
                  var t,
                    a = this.value,
                    n = e.which,
                    r = this.selectionStart,
                    o = this.selectionEnd,
                    i = r !== o;
                  if (
                    (48 <= n && n <= 57) ||
                    (96 <= n && n <= 105) ||
                    8 === n ||
                    46 === n
                  ) {
                    for (
                      t =
                        8 === n || 46 === n
                          ? "_"
                          : String.fromCharCode(
                              96 <= n && n <= 105 ? n - 48 : n
                            ),
                        8 === n && r && !i && (r -= 1);
                      ;

                    ) {
                      var s = m.mask.substr(r, 1),
                        d = r < m.mask.length,
                        u = 0 < r;
                      if (!(/[^0-9_]/.test(s) && d && u)) break;
                      r += 8 !== n || i ? 1 : -1;
                    }
                    if ((e.metaKey && (i = !(r = 0)), i)) {
                      var l = o - r,
                        f = m.mask.replace(/[0-9]/g, "_"),
                        c = f.substr(r, l).substr(1);
                      a = a.substr(0, r) + (t + c) + a.substr(r + l);
                    } else {
                      a = a.substr(0, r) + t + a.substr(r + 1);
                    }
                    if ("" === L.trim(a)) a = f;
                    else if (r === m.mask.length) return e.preventDefault(), !1;
                    for (
                      r += 8 === n ? 0 : 1;
                      /[^0-9_]/.test(m.mask.substr(r, 1)) &&
                      r < m.mask.length &&
                      0 < r;

                    )
                      r += 8 === n ? 0 : 1;
                    h(m.mask, a)
                      ? ((this.value = a), g(this, r))
                      : "" === L.trim(a)
                      ? (this.value = m.mask.replace(/[0-9]/g, "_"))
                      : O.trigger("error_input.xdsoft");
                  } else if ((-1 !== [M, w, j, J, z].indexOf(n) && I) || -1 !== [y, b, x, v, k, S, p, T, D].indexOf(n)) return !0;
                  return e.preventDefault(), !1;
                }));
          }
          F.find(".xdsoft_select")
            .xdsoftScroller(N)
            .on("touchstart mousedown.xdsoft", function (e) {
              var t = e.originalEvent;
              (this.touchMoved = !1),
                (this.touchStartPosition = t.touches ? t.touches[0] : t),
                e.stopPropagation(),
                e.preventDefault();
            })
            .on("touchmove", ".xdsoft_option", l)
            .on("touchend mousedown.xdsoft", ".xdsoft_option", function () {
              if (!this.touchMoved) {
                (void 0 !== W.currentTime && null !== W.currentTime) ||
                  (W.currentTime = W.now());
                var e = W.currentTime.getFullYear();
                W &&
                  W.currentTime &&
                  W.currentTime[
                    L(this).parent().parent().hasClass("xdsoft_monthselect")
                      ? "setMonth"
                      : "setFullYear"
                  ](L(this).data("value")),
                  L(this).parent().parent().hide(),
                  _.trigger("xchange.xdsoft"),
                  N.onChangeMonth &&
                    L.isFunction(N.onChangeMonth) &&
                    N.onChangeMonth.call(_, W.currentTime, _.data("input")),
                  e !== W.currentTime.getFullYear() &&
                    L.isFunction(N.onChangeYear) &&
                    N.onChangeYear.call(_, W.currentTime, _.data("input"));
              }
            }),
            (_.getValue = function () {
              return W.getCurrentTime();
            }),
            (_.setOptions = function (e) {
              var l = {};
              (N = L.extend(!0, {}, N, e)),
                e.allowTimes &&
                  L.isArray(e.allowTimes) &&
                  e.allowTimes.length &&
                  (N.allowTimes = L.extend(!0, [], e.allowTimes)),
                e.weekends &&
                  L.isArray(e.weekends) &&
                  e.weekends.length &&
                  (N.weekends = L.extend(!0, [], e.weekends)),
                e.allowDates &&
                  L.isArray(e.allowDates) &&
                  e.allowDates.length &&
                  (N.allowDates = L.extend(!0, [], e.allowDates)),
                e.allowDateRe &&
                  "[object String]" ===
                    Object.prototype.toString.call(e.allowDateRe) &&
                  (N.allowDateRe = new RegExp(e.allowDateRe)),
                e.highlightedDates &&
                  L.isArray(e.highlightedDates) &&
                  e.highlightedDates.length &&
                  (L.each(e.highlightedDates, function (e, t) {
                    var a,
                      n = L.map(t.split(","), L.trim),
                      r = new m(E.parseDate(n[0], N.formatDate), n[1], n[2]),
                      o = E.formatDate(r.date, N.formatDate);
                    void 0 !== l[o]
                      ? (a = l[o].desc) &&
                        a.length &&
                        r.desc &&
                        r.desc.length &&
                        (l[o].desc = a + "\n" + r.desc)
                      : (l[o] = r);
                  }),
                  (N.highlightedDates = L.extend(!0, [], l))),
                e.highlightedPeriods &&
                  L.isArray(e.highlightedPeriods) &&
                  e.highlightedPeriods.length &&
                  ((l = L.extend(!0, [], N.highlightedDates)),
                  L.each(e.highlightedPeriods, function (e, t) {
                    var a, n, r, o, i, s, d;
                    if (L.isArray(t))
                      (a = t[0]), (n = t[1]), (r = t[2]), (d = t[3]);
                    else {
                      var u = L.map(t.split(","), L.trim);
                      (a = E.parseDate(u[0], N.formatDate)),
                        (n = E.parseDate(u[1], N.formatDate)),
                        (r = u[2]),
                        (d = u[3]);
                    }
                    for (; a <= n; )
                      (o = new m(a, r, d)),
                        (i = E.formatDate(a, N.formatDate)),
                        a.setDate(a.getDate() + 1),
                        void 0 !== l[i]
                          ? (s = l[i].desc) &&
                            s.length &&
                            o.desc &&
                            o.desc.length &&
                            (l[i].desc = s + "\n" + o.desc)
                          : (l[i] = o);
                  }),
                  (N.highlightedDates = L.extend(!0, [], l))),
                e.disabledDates &&
                  L.isArray(e.disabledDates) &&
                  e.disabledDates.length &&
                  (N.disabledDates = L.extend(!0, [], e.disabledDates)),
                e.disabledWeekDays &&
                  L.isArray(e.disabledWeekDays) &&
                  e.disabledWeekDays.length &&
                  (N.disabledWeekDays = L.extend(!0, [], e.disabledWeekDays)),
                (!N.open && !N.opened) || N.inline || O.trigger("open.xdsoft"),
                N.inline &&
                  ((s = !0), _.addClass("xdsoft_inline"), O.after(_).hide()),
                N.inverseButton &&
                  ((N.next = "xdsoft_prev"), (N.prev = "xdsoft_next")),
                N.datepicker ? g.addClass("active") : g.removeClass("active"),
                N.timepicker ? o.addClass("active") : o.removeClass("active"),
                N.value &&
                  (W.setCurrentTime(N.value), O && O.val && O.val(W.str)),
                isNaN(N.dayOfWeekStart)
                  ? (N.dayOfWeekStart = 0)
                  : (N.dayOfWeekStart = parseInt(N.dayOfWeekStart, 10) % 7),
                N.timepickerScrollbar || u.xdsoftScroller(N, "hide"),
                N.minDate &&
                  /^[\+\-](.*)$/.test(N.minDate) &&
                  (N.minDate = E.formatDate(
                    W.strToDateTime(N.minDate),
                    N.formatDate
                  )),
                N.maxDate &&
                  /^[\+\-](.*)$/.test(N.maxDate) &&
                  (N.maxDate = E.formatDate(
                    W.strToDateTime(N.maxDate),
                    N.formatDate
                  )),
                N.minDateTime &&
                  /^\+(.*)$/.test(N.minDateTime) &&
                  (N.minDateTime = W.strToDateTime(N.minDateTime).dateFormat(
                    N.formatDate
                  )),
                N.maxDateTime &&
                  /^\+(.*)$/.test(N.maxDateTime) &&
                  (N.maxDateTime = W.strToDateTime(N.maxDateTime).dateFormat(
                    N.formatDate
                  )),
                i.toggle(N.showApplyButton),
                F.find(".xdsoft_today_button").css(
                  "visibility",
                  N.todayButton ? "visible" : "hidden"
                ),
                F.find("." + N.prev).css(
                  "visibility",
                  N.prevButton ? "visible" : "hidden"
                ),
                F.find("." + N.next).css(
                  "visibility",
                  N.nextButton ? "visible" : "hidden"
                ),
                c(N),
                N.validateOnBlur &&
                  O.off("blur.xdsoft").on("blur.xdsoft", function () {
                    if (
                      N.allowBlank &&
                      (!L.trim(L(this).val()).length ||
                        ("string" == typeof N.mask &&
                          L.trim(L(this).val()) ===
                            N.mask.replace(/[0-9]/g, "_")))
                    )
                      L(this).val(null), _.data("xdsoft_datetime").empty();
                    else {
                      var e = E.parseDate(L(this).val(), N.format);
                      if (e) L(this).val(E.formatDate(e, N.format));
                      else {
                        var t = +[L(this).val()[0], L(this).val()[1]].join(""),
                          a = +[L(this).val()[2], L(this).val()[3]].join("");
                        !N.datepicker &&
                        N.timepicker &&
                        0 <= t &&
                        t < 24 &&
                        0 <= a &&
                        a < 60
                          ? L(this).val(
                              [t, a]
                                .map(function (e) {
                                  return 9 < e ? e : "0" + e;
                                })
                                .join(":")
                            )
                          : L(this).val(E.formatDate(W.now(), N.format));
                      }
                      _.data("xdsoft_datetime").setCurrentTime(L(this).val());
                    }
                    _.trigger("changedatetime.xdsoft"),
                      _.trigger("close.xdsoft");
                  }),
                (N.dayOfWeekStartPrev =
                  0 === N.dayOfWeekStart ? 6 : N.dayOfWeekStart - 1),
                _.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft");
            }),
            _.data("options", N).on(
              "touchstart mousedown.xdsoft",
              function (e) {
                return (
                  e.stopPropagation(),
                  e.preventDefault(),
                  A.hide(),
                  Y.hide(),
                  !1
                );
              }
            ),
            u.append(P),
            u.xdsoftScroller(N),
            _.on("afterOpen.xdsoft", function () {
              u.xdsoftScroller(N);
            }),
            _.append(g).append(o),
            !0 !== N.withoutCopyright && _.append(e),
            g.append(F).append(C).append(i),
            N.insideParent ? L(O).parent().append(_) : L(N.parentID).append(_),
            (W = new (function () {
              var r = this;
              (r.now = function (e) {
                var t,
                  a,
                  n = new Date();
                return (
                  !e &&
                    N.defaultDate &&
                    ((t = r.strToDateTime(N.defaultDate)),
                    n.setFullYear(t.getFullYear()),
                    n.setMonth(t.getMonth()),
                    n.setDate(t.getDate())),
                  n.setFullYear(n.getFullYear()),
                  !e &&
                    N.defaultTime &&
                    ((a = r.strtotime(N.defaultTime)),
                    n.setHours(a.getHours()),
                    n.setMinutes(a.getMinutes()),
                    n.setSeconds(a.getSeconds()),
                    n.setMilliseconds(a.getMilliseconds())),
                  n
                );
              }),
                (r.isValidDate = function (e) {
                  return (
                    "[object Date]" === Object.prototype.toString.call(e) &&
                    !isNaN(e.getTime())
                  );
                }),
                (r.setCurrentTime = function (e, t) {
                  "string" == typeof e
                    ? (r.currentTime = r.strToDateTime(e))
                    : r.isValidDate(e)
                    ? (r.currentTime = e)
                    : e || t || !N.allowBlank || N.inline
                    ? (r.currentTime = r.now())
                    : (r.currentTime = null),
                    _.trigger("xchange.xdsoft");
                }),
                (r.empty = function () {
                  r.currentTime = null;
                }),
                (r.getCurrentTime = function () {
                  return r.currentTime;
                }),
                (r.nextMonth = function () {
                  (void 0 !== r.currentTime && null !== r.currentTime) ||
                    (r.currentTime = r.now());
                  var e,
                    t = r.currentTime.getMonth() + 1;
                  return (
                    12 === t &&
                      (r.currentTime.setFullYear(
                        r.currentTime.getFullYear() + 1
                      ),
                      (t = 0)),
                    (e = r.currentTime.getFullYear()),
                    r.currentTime.setDate(
                      Math.min(
                        new Date(
                          r.currentTime.getFullYear(),
                          t + 1,
                          0
                        ).getDate(),
                        r.currentTime.getDate()
                      )
                    ),
                    r.currentTime.setMonth(t),
                    N.onChangeMonth &&
                      L.isFunction(N.onChangeMonth) &&
                      N.onChangeMonth.call(_, W.currentTime, _.data("input")),
                    e !== r.currentTime.getFullYear() &&
                      L.isFunction(N.onChangeYear) &&
                      N.onChangeYear.call(_, W.currentTime, _.data("input")),
                    _.trigger("xchange.xdsoft"),
                    t
                  );
                }),
                (r.prevMonth = function () {
                  (void 0 !== r.currentTime && null !== r.currentTime) ||
                    (r.currentTime = r.now());
                  var e = r.currentTime.getMonth() - 1;
                  return (
                    -1 === e &&
                      (r.currentTime.setFullYear(
                        r.currentTime.getFullYear() - 1
                      ),
                      (e = 11)),
                    r.currentTime.setDate(
                      Math.min(
                        new Date(
                          r.currentTime.getFullYear(),
                          e + 1,
                          0
                        ).getDate(),
                        r.currentTime.getDate()
                      )
                    ),
                    r.currentTime.setMonth(e),
                    N.onChangeMonth &&
                      L.isFunction(N.onChangeMonth) &&
                      N.onChangeMonth.call(_, W.currentTime, _.data("input")),
                    _.trigger("xchange.xdsoft"),
                    e
                  );
                }),
                (r.getWeekOfYear = function (e) {
                  if (N.onGetWeekOfYear && L.isFunction(N.onGetWeekOfYear)) {
                    var t = N.onGetWeekOfYear.call(_, e);
                    if (void 0 !== t) return t;
                  }
                  var a = new Date(e.getFullYear(), 0, 1);
                  return (
                    4 !== a.getDay() &&
                      a.setMonth(0, 1 + ((4 - a.getDay() + 7) % 7)),
                    Math.ceil(((e - a) / 864e5 + a.getDay() + 1) / 7)
                  );
                }),
                (r.strToDateTime = function (e) {
                  var t,
                    a,
                    n = [];
                  return e && e instanceof Date && r.isValidDate(e)
                    ? e
                    : ((n = /^([+-]{1})(.*)$/.exec(e)) &&
                        (n[2] = E.parseDate(n[2], N.formatDate)),
                      (a =
                        n && n[2]
                          ? ((t =
                              n[2].getTime() - 6e4 * n[2].getTimezoneOffset()),
                            new Date(
                              r.now(!0).getTime() + parseInt(n[1] + "1", 10) * t
                            ))
                          : e
                          ? E.parseDate(e, N.format)
                          : r.now()),
                      r.isValidDate(a) || (a = r.now()),
                      a);
                }),
                (r.strToDate = function (e) {
                  if (e && e instanceof Date && r.isValidDate(e)) return e;
                  var t = e ? E.parseDate(e, N.formatDate) : r.now(!0);
                  return r.isValidDate(t) || (t = r.now(!0)), t;
                }),
                (r.strtotime = function (e) {
                  if (e && e instanceof Date && r.isValidDate(e)) return e;
                  var t = e ? E.parseDate(e, N.formatTime) : r.now(!0);
                  return r.isValidDate(t) || (t = r.now(!0)), t;
                }),
                (r.str = function () {
                  var e = N.format;
                  return (
                    N.yearOffset &&
                      (e = (e = e.replace(
                        "Y",
                        r.currentTime.getFullYear() + N.yearOffset
                      )).replace(
                        "y",
                        String(
                          r.currentTime.getFullYear() + N.yearOffset
                        ).substring(2, 4)
                      )),
                    E.formatDate(r.currentTime, e)
                  );
                }),
                (r.currentTime = this.now());
            })()),
            i.on("touchend click", function (e) {
              e.preventDefault(),
                _.data("changed", !0),
                W.setCurrentTime(f()),
                O.val(W.str()),
                _.trigger("close.xdsoft");
            }),
            F.find(".xdsoft_today_button")
              .on("touchend mousedown.xdsoft", function () {
                _.data("changed", !0),
                  W.setCurrentTime(0, !0),
                  _.trigger("afterOpen.xdsoft");
              })
              .on("dblclick.xdsoft", function () {
                var e,
                  t,
                  a = W.getCurrentTime();
                (a = new Date(a.getFullYear(), a.getMonth(), a.getDate())),
                  (e = W.strToDate(N.minDate)),
                  a <
                    (e = new Date(
                      e.getFullYear(),
                      e.getMonth(),
                      e.getDate()
                    )) ||
                    ((t = W.strToDate(N.maxDate)),
                    (t = new Date(t.getFullYear(), t.getMonth(), t.getDate())) <
                      a ||
                      (O.val(W.str()),
                      O.trigger("change"),
                      _.trigger("close.xdsoft")));
              }),
            F.find(".xdsoft_prev,.xdsoft_next").on(
              "touchend mousedown.xdsoft",
              function () {
                var a = L(this),
                  n = 0,
                  r = !1;
                !(function e(t) {
                  a.hasClass(N.next)
                    ? W.nextMonth()
                    : a.hasClass(N.prev) && W.prevMonth(),
                    N.monthChangeSpinner &&
                      (r || (n = setTimeout(e, t || 100)));
                })(500),
                  L([N.ownerDocument.body, N.contentWindow]).on(
                    "touchend mouseup.xdsoft",
                    function e() {
                      clearTimeout(n),
                        (r = !0),
                        L([N.ownerDocument.body, N.contentWindow]).off(
                          "touchend mouseup.xdsoft",
                          e
                        );
                    }
                  );
              }
            ),
            o
              .find(".xdsoft_prev,.xdsoft_next")
              .on("touchend mousedown.xdsoft", function () {
                var o = L(this),
                  i = 0,
                  s = !1,
                  d = 110;
                !(function e(t) {
                  var a = u[0].clientHeight,
                    n = P[0].offsetHeight,
                    r = Math.abs(parseInt(P.css("marginTop"), 10));
                  o.hasClass(N.next) && n - a - N.timeHeightInTimePicker >= r
                    ? P.css(
                        "marginTop",
                        "-" + (r + N.timeHeightInTimePicker) + "px"
                      )
                    : o.hasClass(N.prev) &&
                      0 <= r - N.timeHeightInTimePicker &&
                      P.css(
                        "marginTop",
                        "-" + (r - N.timeHeightInTimePicker) + "px"
                      ),
                    u.trigger("scroll_element.xdsoft_scroller", [
                      Math.abs(parseInt(P[0].style.marginTop, 10) / (n - a)),
                    ]),
                    (d = 10 < d ? 10 : d - 10),
                    s || (i = setTimeout(e, t || d));
                })(500),
                  L([N.ownerDocument.body, N.contentWindow]).on(
                    "touchend mouseup.xdsoft",
                    function e() {
                      clearTimeout(i),
                        (s = !0),
                        L([N.ownerDocument.body, N.contentWindow]).off(
                          "touchend mouseup.xdsoft",
                          e
                        );
                    }
                  );
              }),
            (t = 0),
            _.on("xchange.xdsoft", function (e) {
              clearTimeout(t),
                (t = setTimeout(function () {
                  (void 0 !== W.currentTime && null !== W.currentTime) ||
                    (W.currentTime = W.now());
                  for (
                    var e,
                      t,
                      a,
                      n,
                      r,
                      o,
                      i,
                      s,
                      d,
                      u,
                      l = "",
                      f = new Date(
                        W.currentTime.getFullYear(),
                        W.currentTime.getMonth(),
                        1,
                        12,
                        0,
                        0
                      ),
                      c = 0,
                      m = W.now(),
                      h = !1,
                      g = !1,
                      p = !1,
                      D = !1,
                      y = [],
                      v = !0,
                      b = "";
                    f.getDay() !== N.dayOfWeekStart;

                  )
                    f.setDate(f.getDate() - 1);
                  for (
                    l += "<table><thead><tr>",
                      N.weeks && (l += "<th></th>"),
                      e = 0;
                    e < 7;
                    e += 1
                  )
                    l +=
                      "<th>" +
                      N.i18n[R].dayOfWeekShort[(e + N.dayOfWeekStart) % 7] +
                      "</th>";
                  for (
                    l += "</tr></thead>",
                      l += "<tbody>",
                      !1 !== N.maxDate &&
                        ((h = W.strToDate(N.maxDate)),
                        (h = new Date(
                          h.getFullYear(),
                          h.getMonth(),
                          h.getDate(),
                          23,
                          59,
                          59,
                          999
                        ))),
                      !1 !== N.minDate &&
                        ((g = W.strToDate(N.minDate)),
                        (g = new Date(
                          g.getFullYear(),
                          g.getMonth(),
                          g.getDate()
                        ))),
                      !1 !== N.minDateTime &&
                        ((p = W.strToDate(N.minDateTime)),
                        (p = new Date(
                          p.getFullYear(),
                          p.getMonth(),
                          p.getDate(),
                          p.getHours(),
                          p.getMinutes(),
                          p.getSeconds()
                        ))),
                      !1 !== N.maxDateTime &&
                        ((D = W.strToDate(N.maxDateTime)),
                        (D = new Date(
                          D.getFullYear(),
                          D.getMonth(),
                          D.getDate(),
                          D.getHours(),
                          D.getMinutes(),
                          D.getSeconds()
                        ))),
                      !1 !== D &&
                        (u =
                          31 * (12 * D.getFullYear() + D.getMonth()) +
                          D.getDate());
                    c < W.currentTime.countDaysInMonth() ||
                    f.getDay() !== N.dayOfWeekStart ||
                    W.currentTime.getMonth() === f.getMonth();

                  ) {
                    (y = []),
                      (c += 1),
                      (a = f.getDay()),
                      (n = f.getDate()),
                      (r = f.getFullYear()),
                      (M = f.getMonth()),
                      (o = W.getWeekOfYear(f)),
                      (d = ""),
                      y.push("xdsoft_date"),
                      (i =
                        N.beforeShowDay && L.isFunction(N.beforeShowDay.call)
                          ? N.beforeShowDay.call(_, f)
                          : null),
                      N.allowDateRe &&
                        "[object RegExp]" ===
                          Object.prototype.toString.call(N.allowDateRe) &&
                        (N.allowDateRe.test(E.formatDate(f, N.formatDate)) ||
                          y.push("xdsoft_disabled")),
                      N.allowDates &&
                        0 < N.allowDates.length &&
                        -1 ===
                          N.allowDates.indexOf(E.formatDate(f, N.formatDate)) &&
                        y.push("xdsoft_disabled");
                    var k =
                      31 * (12 * f.getFullYear() + f.getMonth()) + f.getDate();
                    ((!1 !== h && h < f) ||
                      (!1 !== p && f < p) ||
                      (!1 !== g && f < g) ||
                      (!1 !== D && u < k) ||
                      (i && !1 === i[0])) &&
                      y.push("xdsoft_disabled"),
                      -1 !==
                        N.disabledDates.indexOf(
                          E.formatDate(f, N.formatDate)
                        ) && y.push("xdsoft_disabled"),
                      -1 !== N.disabledWeekDays.indexOf(a) &&
                        y.push("xdsoft_disabled"),
                      O.is("[disabled]") && y.push("xdsoft_disabled"),
                      i && "" !== i[1] && y.push(i[1]),
                      W.currentTime.getMonth() !== M &&
                        y.push("xdsoft_other_month"),
                      (N.defaultSelect || _.data("changed")) &&
                        E.formatDate(W.currentTime, N.formatDate) ===
                          E.formatDate(f, N.formatDate) &&
                        y.push("xdsoft_current"),
                      E.formatDate(m, N.formatDate) ===
                        E.formatDate(f, N.formatDate) && y.push("xdsoft_today"),
                      (0 !== f.getDay() &&
                        6 !== f.getDay() &&
                        -1 ===
                          N.weekends.indexOf(E.formatDate(f, N.formatDate))) ||
                        y.push("xdsoft_weekend"),
                      void 0 !==
                        N.highlightedDates[E.formatDate(f, N.formatDate)] &&
                        ((t =
                          N.highlightedDates[E.formatDate(f, N.formatDate)]),
                        y.push(
                          void 0 === t.style
                            ? "xdsoft_highlighted_default"
                            : t.style
                        ),
                        (d = void 0 === t.desc ? "" : t.desc)),
                      N.beforeShowDay &&
                        L.isFunction(N.beforeShowDay) &&
                        y.push(N.beforeShowDay(f)),
                      v &&
                        ((l += "<tr>"),
                        (v = !1),
                        N.weeks && (l += "<th>" + o + "</th>")),
                      (l +=
                        '<td data-date="' +
                        n +
                        '" data-month="' +
                        M +
                        '" data-year="' +
                        r +
                        '" class="xdsoft_date xdsoft_day_of_week' +
                        f.getDay() +
                        " " +
                        y.join(" ") +
                        '" title="' +
                        d +
                        '"><div>' +
                        n +
                        "</div></td>"),
                      f.getDay() === N.dayOfWeekStartPrev &&
                        ((l += "</tr>"), (v = !0)),
                      f.setDate(n + 1);
                  }
                  (l += "</tbody></table>"),
                    C.html(l),
                    F.find(".xdsoft_label span")
                      .eq(0)
                      .text(N.i18n[R].months[W.currentTime.getMonth()]),
                    F.find(".xdsoft_label span")
                      .eq(1)
                      .text(W.currentTime.getFullYear() + N.yearOffset),
                    (M = b = "");
                  var x = 0;
                  if (!1 !== N.minTime) {
                    var T = W.strtotime(N.minTime);
                    x = 60 * T.getHours() + T.getMinutes();
                  }
                  var S = 1440;
                  if (!1 !== N.maxTime) {
                    T = W.strtotime(N.maxTime);
                    S = 60 * T.getHours() + T.getMinutes();
                  }
                  if (!1 !== N.minDateTime) {
                    T = W.strToDateTime(N.minDateTime);
                    if (
                      E.formatDate(W.currentTime, N.formatDate) ===
                      E.formatDate(T, N.formatDate)
                    ) {
                      var M = 60 * T.getHours() + T.getMinutes();
                      x < M && (x = M);
                    }
                  }
                  if (!1 !== N.maxDateTime) {
                    T = W.strToDateTime(N.maxDateTime);
                    if (
                      E.formatDate(W.currentTime, N.formatDate) ===
                      E.formatDate(T, N.formatDate)
                    )
                      (M = 60 * T.getHours() + T.getMinutes()) < S && (S = M);
                  }
                  if (
                    ((s = function (e, t) {
                      var a,
                        n = W.now(),
                        r =
                          N.allowTimes &&
                          L.isArray(N.allowTimes) &&
                          N.allowTimes.length;
                      n.setHours(e),
                        (e = parseInt(n.getHours(), 10)),
                        n.setMinutes(t),
                        (t = parseInt(n.getMinutes(), 10)),
                        (y = []);
                      var o = 60 * e + t;
                      (O.is("[disabled]") || S <= o || o < x) &&
                        y.push("xdsoft_disabled"),
                        (a = new Date(W.currentTime)).setHours(
                          parseInt(W.currentTime.getHours(), 10)
                        ),
                        r ||
                          a.setMinutes(
                            Math[N.roundTime](
                              W.currentTime.getMinutes() / N.step
                            ) * N.step
                          ),
                        (N.initTime || N.defaultSelect || _.data("changed")) &&
                          a.getHours() === parseInt(e, 10) &&
                          ((!r && 59 < N.step) ||
                            a.getMinutes() === parseInt(t, 10)) &&
                          (N.defaultSelect || _.data("changed")
                            ? y.push("xdsoft_current")
                            : N.initTime && y.push("xdsoft_init_time")),
                        parseInt(m.getHours(), 10) === parseInt(e, 10) &&
                          parseInt(m.getMinutes(), 10) === parseInt(t, 10) &&
                          y.push("xdsoft_today"),
                        (b +=
                          '<div class="xdsoft_time ' +
                          y.join(" ") +
                          '" data-hour="' +
                          e +
                          '" data-minute="' +
                          t +
                          '">' +
                          E.formatDate(n, N.formatTime) +
                          "</div>");
                    }),
                    N.allowTimes &&
                      L.isArray(N.allowTimes) &&
                      N.allowTimes.length)
                  )
                    for (c = 0; c < N.allowTimes.length; c += 1)
                      s(
                        W.strtotime(N.allowTimes[c]).getHours(),
                        (M = W.strtotime(N.allowTimes[c]).getMinutes())
                      );
                  else
                    for (e = c = 0; c < (N.hours12 ? 12 : 24); c += 1)
                      for (e = 0; e < 60; e += N.step) {
                        var w = 60 * c + e;
                        w < x ||
                          S <= w ||
                          s(
                            (c < 10 ? "0" : "") + c,
                            (M = (e < 10 ? "0" : "") + e)
                          );
                      }
                  for (
                    P.html(b), H = "", c = parseInt(N.yearStart, 10);
                    c <= parseInt(N.yearEnd, 10);
                    c += 1
                  )
                    H +=
                      '<div class="xdsoft_option ' +
                      (W.currentTime.getFullYear() === c
                        ? "xdsoft_current"
                        : "") +
                      '" data-value="' +
                      c +
                      '">' +
                      (c + N.yearOffset) +
                      "</div>";
                  for (
                    A.children().eq(0).html(H),
                      c = parseInt(N.monthStart, 10),
                      H = "";
                    c <= parseInt(N.monthEnd, 10);
                    c += 1
                  )
                    H +=
                      '<div class="xdsoft_option ' +
                      (W.currentTime.getMonth() === c ? "xdsoft_current" : "") +
                      '" data-value="' +
                      c +
                      '">' +
                      N.i18n[R].months[c] +
                      "</div>";
                  Y.children().eq(0).html(H), L(_).trigger("generate.xdsoft");
                }, 10)),
                e.stopPropagation();
            }).on("afterOpen.xdsoft", function () {
              var e, t, a, n;
              N.timepicker &&
                (P.find(".xdsoft_current").length
                  ? (e = ".xdsoft_current")
                  : P.find(".xdsoft_init_time").length &&
                    (e = ".xdsoft_init_time"),
                e
                  ? ((t = u[0].clientHeight),
                    (a = P[0].offsetHeight) - t <
                      (n = P.find(e).index() * N.timeHeightInTimePicker + 1) &&
                      (n = a - t),
                    u.trigger("scroll_element.xdsoft_scroller", [
                      parseInt(n, 10) / (a - t),
                    ]))
                  : u.trigger("scroll_element.xdsoft_scroller", [0]));
            }),
            (n = 0),
            C.on("touchend click.xdsoft", "td", function (e) {
              e.stopPropagation(), (n += 1);
              var t = L(this),
                a = W.currentTime;
              if (
                (null == a && ((W.currentTime = W.now()), (a = W.currentTime)),
                t.hasClass("xdsoft_disabled"))
              )
                return !1;
              a.setDate(1),
                a.setFullYear(t.data("year")),
                a.setMonth(t.data("month")),
                a.setDate(t.data("date")),
                _.trigger("select.xdsoft", [a]),
                O.val(W.str()),
                N.onSelectDate &&
                  L.isFunction(N.onSelectDate) &&
                  N.onSelectDate.call(_, W.currentTime, _.data("input"), e),
                _.data("changed", !0),
                _.trigger("xchange.xdsoft"),
                _.trigger("changedatetime.xdsoft"),
                (1 < n ||
                  !0 === N.closeOnDateSelect ||
                  (!1 === N.closeOnDateSelect && !N.timepicker)) &&
                  !N.inline &&
                  _.trigger("close.xdsoft"),
                setTimeout(function () {
                  n = 0;
                }, 200);
            }),
            P.on("touchstart", "div", function (e) {
              this.touchMoved = !1;
            })
              .on("touchmove", "div", l)
              .on("touchend click.xdsoft", "div", function (e) {
                if (!this.touchMoved) {
                  e.stopPropagation();
                  var t = L(this),
                    a = W.currentTime;
                  if (
                    (null == a &&
                      ((W.currentTime = W.now()), (a = W.currentTime)),
                    t.hasClass("xdsoft_disabled"))
                  )
                    return !1;
                  a.setHours(t.data("hour")),
                    a.setMinutes(t.data("minute")),
                    _.trigger("select.xdsoft", [a]),
                    _.data("input").val(W.str()),
                    N.onSelectTime &&
                      L.isFunction(N.onSelectTime) &&
                      N.onSelectTime.call(_, W.currentTime, _.data("input"), e),
                    _.data("changed", !0),
                    _.trigger("xchange.xdsoft"),
                    _.trigger("changedatetime.xdsoft"),
                    !0 !== N.inline &&
                      !0 === N.closeOnTimeSelect &&
                      _.trigger("close.xdsoft");
                }
              }),
            g.on("mousewheel.xdsoft", function (e) {
              return (
                !N.scrollMonth ||
                (e.deltaY < 0 ? W.nextMonth() : W.prevMonth(), !1)
              );
            }),
            O.on("mousewheel.xdsoft", function (e) {
              return (
                !N.scrollInput ||
                (!N.datepicker && N.timepicker
                  ? (0 <=
                      (a = P.find(".xdsoft_current").length
                        ? P.find(".xdsoft_current").eq(0).index()
                        : 0) +
                        e.deltaY &&
                      a + e.deltaY < P.children().length &&
                      (a += e.deltaY),
                    P.children().eq(a).length &&
                      P.children().eq(a).trigger("mousedown"),
                    !1)
                  : N.datepicker && !N.timepicker
                  ? (g.trigger(e, [e.deltaY, e.deltaX, e.deltaY]),
                    O.val && O.val(W.str()),
                    _.trigger("changedatetime.xdsoft"),
                    !1)
                  : void 0)
              );
            }),
            _.on("changedatetime.xdsoft", function (e) {
              if (N.onChangeDateTime && L.isFunction(N.onChangeDateTime)) {
                var t = _.data("input");
                N.onChangeDateTime.call(_, W.currentTime, t, e),
                  delete N.value,
                  t.trigger("change");
              }
            })
              .on("generate.xdsoft", function () {
                N.onGenerate &&
                  L.isFunction(N.onGenerate) &&
                  N.onGenerate.call(_, W.currentTime, _.data("input")),
                  s && (_.trigger("afterOpen.xdsoft"), (s = !1));
              })
              .on("click.xdsoft", function (e) {
                e.stopPropagation();
              }),
            (a = 0),
            (h = function (e, t) {
              do {
                if (!(e = e.parentNode) || !1 === t(e)) break;
              } while ("HTML" !== e.nodeName);
            }),
            (r = function () {
              var e, t, a, n, r, o, i, s, d, u, l, f, c;
              if (
                ((e = (s = _.data("input")).offset()),
                (t = s[0]),
                (u = "top"),
                (a = e.top + t.offsetHeight - 1),
                (n = e.left),
                (r = "absolute"),
                (d = L(N.contentWindow).width()),
                (f = L(N.contentWindow).height()),
                (c = L(N.contentWindow).scrollTop()),
                N.ownerDocument.documentElement.clientWidth - e.left <
                  g.parent().outerWidth(!0))
              ) {
                var m = g.parent().outerWidth(!0) - t.offsetWidth;
                n -= m;
              }
              "rtl" === s.parent().css("direction") &&
                (n -= _.outerWidth() - s.outerWidth()),
                N.fixed
                  ? ((a -= c),
                    (n -= L(N.contentWindow).scrollLeft()),
                    (r = "fixed"))
                  : ((i = !1),
                    h(t, function (e) {
                      return (
                        null !== e &&
                        ("fixed" ===
                        N.contentWindow
                          .getComputedStyle(e)
                          .getPropertyValue("position")
                          ? !(i = !0)
                          : void 0)
                      );
                    }),
                    i && !N.insideParent
                      ? ((r = "fixed"),
                        a + _.outerHeight() > f + c
                          ? ((u = "bottom"), (a = f + c - e.top))
                          : (a -= c))
                      : a + _[0].offsetHeight > f + c &&
                        (a = e.top - _[0].offsetHeight + 1),
                    a < 0 && (a = 0),
                    n + t.offsetWidth > d && (n = d - t.offsetWidth)),
                (o = _[0]),
                h(o, function (e) {
                  if (
                    "relative" ===
                      N.contentWindow
                        .getComputedStyle(e)
                        .getPropertyValue("position") &&
                    d >= e.offsetWidth
                  )
                    return (n -= (d - e.offsetWidth) / 2), !1;
                }),
                (l = {
                  position: r,
                  left: N.insideParent ? t.offsetLeft : n,
                  top: "",
                  bottom: "",
                }),
                N.insideParent
                  ? (l[u] = t.offsetTop + t.offsetHeight)
                  : (l[u] = a),
                _.css(l);
            }),
            _.on("open.xdsoft", function (e) {
              var t = !0;
              N.onShow &&
                L.isFunction(N.onShow) &&
                (t = N.onShow.call(_, W.currentTime, _.data("input"), e)),
                !1 !== t &&
                  (_.show(),
                  r(),
                  L(N.contentWindow)
                    .off("resize.xdsoft", r)
                    .on("resize.xdsoft", r),
                  N.closeOnWithoutClick &&
                    L([N.ownerDocument.body, N.contentWindow]).on(
                      "touchstart mousedown.xdsoft",
                      function e() {
                        _.trigger("close.xdsoft"),
                          L([N.ownerDocument.body, N.contentWindow]).off(
                            "touchstart mousedown.xdsoft",
                            e
                          );
                      }
                    ));
            })
              .on("close.xdsoft", function (e) {
                var t = !0;
                F.find(".xdsoft_month,.xdsoft_year")
                  .find(".xdsoft_select")
                  .hide(),
                  N.onClose &&
                    L.isFunction(N.onClose) &&
                    (t = N.onClose.call(_, W.currentTime, _.data("input"), e)),
                  !1 === t || N.opened || N.inline || _.hide(),
                  e.stopPropagation();
              })
              .on("toggle.xdsoft", function () {
                _.is(":visible")
                  ? _.trigger("close.xdsoft")
                  : _.trigger("open.xdsoft");
              })
              .data("input", O),
            (d = 0),
            _.data("xdsoft_datetime", W),
            _.setOptions(N),
            W.setCurrentTime(f()),
            O.data("xdsoft_datetimepicker", _)
              .on(
                "open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",
                function () {
                  O.is(":disabled") ||
                    (O.data("xdsoft_datetimepicker").is(":visible") &&
                      N.closeOnInputClick) ||
                    (N.openOnFocus &&
                      (clearTimeout(d),
                      (d = setTimeout(function () {
                        O.is(":disabled") ||
                          ((s = !0),
                          W.setCurrentTime(f(), !0),
                          N.mask && c(N),
                          _.trigger("open.xdsoft"));
                      }, 100))));
                }
              )
              .on("keydown.xdsoft", function (e) {
                var t,
                  a = e.which;
                return -1 !== [D].indexOf(a) && N.enterLikeTab
                  ? ((t = L(
                      "input:visible,textarea:visible,button:visible,a:visible"
                    )),
                    _.trigger("close.xdsoft"),
                    t.eq(t.index(this) + 1).focus(),
                    !1)
                  : -1 !== [T].indexOf(a)
                  ? (_.trigger("close.xdsoft"), !0)
                  : void 0;
              })
              .on("blur.xdsoft", function () {
                _.trigger("close.xdsoft");
              });
        }),
        (r = function (e) {
          var t = e.data("xdsoft_datetimepicker");
          t &&
            (t.data("xdsoft_datetime", null),
            t.remove(),
            e.data("xdsoft_datetimepicker", null).off(".xdsoft"),
            L(N.contentWindow).off("resize.xdsoft"),
            L([N.contentWindow, N.ownerDocument.body]).off(
              "mousedown.xdsoft touchstart"
            ),
            e.unmousewheel && e.unmousewheel());
        }),
        L(N.ownerDocument)
          .off("keydown.xdsoftctrl keyup.xdsoftctrl")
          .off("keydown.xdsoftcmd keyup.xdsoftcmd")
          .on("keydown.xdsoftctrl", function (e) {
            e.keyCode === p && (I = !0);
          })
          .on("keyup.xdsoftctrl", function (e) {
            e.keyCode === p && (I = !1);
          })
          .on("keydown.xdsoftcmd", function (e) {
            91 === e.keyCode && !0;
          })
          .on("keyup.xdsoftcmd", function (e) {
            91 === e.keyCode && !1;
          }),
        this.each(function () {
          var t,
            e = L(this).data("xdsoft_datetimepicker");
          if (e) {
            if ("string" === L.type(H))
              switch (H) {
                case "show":
                  L(this).select().focus(), e.trigger("open.xdsoft");
                  break;
                case "hide":
                  e.trigger("close.xdsoft");
                  break;
                case "toggle":
                  e.trigger("toggle.xdsoft");
                  break;
                case "destroy":
                  r(L(this));
                  break;
                case "reset":
                  (this.value = this.defaultValue),
                    (this.value &&
                      e
                        .data("xdsoft_datetime")
                        .isValidDate(E.parseDate(this.value, N.format))) ||
                      e.data("changed", !1),
                    e.data("xdsoft_datetime").setCurrentTime(this.value);
                  break;
                case "validate":
                  e.data("input").trigger("blur.xdsoft");
                  break;
                default:
                  e[H] && L.isFunction(e[H]) && (o = e[H](a));
              }
            else e.setOptions(H);
            return 0;
          }
          "string" !== L.type(H) &&
            (!N.lazyInit || N.open || N.inline
              ? n(L(this))
              : (t = L(this)).on(
                  "open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",
                  function e() {
                    t.is(":disabled") ||
                      t.data("xdsoft_datetimepicker") ||
                      (clearTimeout(i),
                      (i = setTimeout(function () {
                        t.data("xdsoft_datetimepicker") || n(t),
                          t
                            .off(
                              "open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",
                              e
                            )
                            .trigger("open.xdsoft");
                      }, 100)));
                  }
                ));
        }),
        o
      );
    }),
    (L.fn.datetimepicker.defaults = s);
};
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery", "jquery-mousewheel"], e)
    : "object" == typeof exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(datetimepickerFactory),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? (module.exports = e)
      : e(jQuery);
  })(function (c) {
    var m,
      h,
      e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      t =
        "onwheel" in document || 9 <= document.documentMode
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      g = Array.prototype.slice;
    if (c.event.fixHooks)
      for (var a = e.length; a; ) c.event.fixHooks[e[--a]] = c.event.mouseHooks;
    var p = (c.event.special.mousewheel = {
      version: "3.1.12",
      setup: function () {
        if (this.addEventListener)
          for (var e = t.length; e; ) this.addEventListener(t[--e], n, !1);
        else this.onmousewheel = n;
        c.data(this, "mousewheel-line-height", p.getLineHeight(this)),
          c.data(this, "mousewheel-page-height", p.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var e = t.length; e; ) this.removeEventListener(t[--e], n, !1);
        else this.onmousewheel = null;
        c.removeData(this, "mousewheel-line-height"),
          c.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function (e) {
        var t = c(e),
          a = t["offsetParent" in c.fn ? "offsetParent" : "parent"]();
        return (
          a.length || (a = c("body")),
          parseInt(a.css("fontSize"), 10) ||
            parseInt(t.css("fontSize"), 10) ||
            16
        );
      },
      getPageHeight: function (e) {
        return c(e).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
    });
    function n(e) {
      var t,
        a = e || window.event,
        n = g.call(arguments, 1),
        r = 0,
        o = 0,
        i = 0,
        s = 0,
        d = 0;
      if (
        (((e = c.event.fix(a)).type = "mousewheel"),
        "detail" in a && (i = -1 * a.detail),
        "wheelDelta" in a && (i = a.wheelDelta),
        "wheelDeltaY" in a && (i = a.wheelDeltaY),
        "wheelDeltaX" in a && (o = -1 * a.wheelDeltaX),
        "axis" in a && a.axis === a.HORIZONTAL_AXIS && ((o = -1 * i), (i = 0)),
        (r = 0 === i ? o : i),
        "deltaY" in a && (r = i = -1 * a.deltaY),
        "deltaX" in a && ((o = a.deltaX), 0 === i && (r = -1 * o)),
        0 !== i || 0 !== o)
      ) {
        if (1 === a.deltaMode) {
          var u = c.data(this, "mousewheel-line-height");
          (r *= u), (i *= u), (o *= u);
        } else if (2 === a.deltaMode) {
          var l = c.data(this, "mousewheel-page-height");
          (r *= l), (i *= l), (o *= l);
        }
        if (
          ((t = Math.max(Math.abs(i), Math.abs(o))),
          (!h || t < h) && y(a, (h = t)) && (h /= 40),
          y(a, t) && ((r /= 40), (o /= 40), (i /= 40)),
          (r = Math[1 <= r ? "floor" : "ceil"](r / h)),
          (o = Math[1 <= o ? "floor" : "ceil"](o / h)),
          (i = Math[1 <= i ? "floor" : "ceil"](i / h)),
          p.settings.normalizeOffset && this.getBoundingClientRect)
        ) {
          var f = this.getBoundingClientRect();
          (s = e.clientX - f.left), (d = e.clientY - f.top);
        }
        return (
          (e.deltaX = o),
          (e.deltaY = i),
          (e.deltaFactor = h),
          (e.offsetX = s),
          (e.offsetY = d),
          (e.deltaMode = 0),
          n.unshift(e, r, o, i),
          m && clearTimeout(m),
          (m = setTimeout(D, 200)),
          (c.event.dispatch || c.event.handle).apply(this, n)
        );
      }
    }
    function D() {
      h = null;
    }
    function y(e, t) {
      return (
        p.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
      );
    }
    c.fn.extend({
      mousewheel: function (e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
      },
      unmousewheel: function (e) {
        return this.unbind("mousewheel", e);
      },
    });
  });

!(function (a, b) {
  "function" == typeof define && define.amd
    ? define("bloodhound", ["jquery"], function (c) {
        return (a.Bloodhound = b(c));
      })
    : "object" == typeof exports
    ? (module.exports = b(require("jquery")))
    : (a.Bloodhound = b(jQuery));
})(this, function (a) {
  var b = (function () {
      "use strict";
      return {
        isMsie: function () {
          return /(msie|trident)/i.test(navigator.userAgent)
            ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
            : !1;
        },
        isBlankString: function (a) {
          return !a || /^\s*$/.test(a);
        },
        escapeRegExChars: function (a) {
          return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        isString: function (a) {
          return "string" == typeof a;
        },
        isNumber: function (a) {
          return "number" == typeof a;
        },
        isArray: a.isArray,
        isFunction: a.isFunction,
        isObject: a.isPlainObject,
        isUndefined: function (a) {
          return "undefined" == typeof a;
        },
        isElement: function (a) {
          return !(!a || 1 !== a.nodeType);
        },
        isJQuery: function (b) {
          return b instanceof a;
        },
        toStr: function (a) {
          return b.isUndefined(a) || null === a ? "" : a + "";
        },
        bind: a.proxy,
        each: function (b, c) {
          function d(a, b) {
            return c(b, a);
          }
          a.each(b, d);
        },
        map: a.map,
        filter: a.grep,
        every: function (b, c) {
          var d = !0;
          return b
            ? (a.each(b, function (a, e) {
                return (d = c.call(null, e, a, b)) ? void 0 : !1;
              }),
              !!d)
            : d;
        },
        some: function (b, c) {
          var d = !1;
          return b
            ? (a.each(b, function (a, e) {
                return (d = c.call(null, e, a, b)) ? !1 : void 0;
              }),
              !!d)
            : d;
        },
        mixin: a.extend,
        identity: function (a) {
          return a;
        },
        clone: function (b) {
          return a.extend(!0, {}, b);
        },
        getIdGenerator: function () {
          var a = 0;
          return function () {
            return a++;
          };
        },
        templatify: function (b) {
          function c() {
            return String(b);
          }
          return a.isFunction(b) ? b : c;
        },
        defer: function (a) {
          setTimeout(a, 0);
        },
        debounce: function (a, b, c) {
          var d, e;
          return function () {
            var f,
              g,
              h = this,
              i = arguments;
            return (
              (f = function () {
                (d = null), c || (e = a.apply(h, i));
              }),
              (g = c && !d),
              clearTimeout(d),
              (d = setTimeout(f, b)),
              g && (e = a.apply(h, i)),
              e
            );
          };
        },
        throttle: function (a, b) {
          var c, d, e, f, g, h;
          return (
            (g = 0),
            (h = function () {
              (g = new Date()), (e = null), (f = a.apply(c, d));
            }),
            function () {
              var i = new Date(),
                j = b - (i - g);
              return (
                (c = this),
                (d = arguments),
                0 >= j
                  ? (clearTimeout(e), (e = null), (g = i), (f = a.apply(c, d)))
                  : e || (e = setTimeout(h, j)),
                f
              );
            }
          );
        },
        stringify: function (a) {
          return b.isString(a) ? a : JSON.stringify(a);
        },
        noop: function () {},
      };
    })(),
    c = "0.11.1",
    d = (function () {
      "use strict";
      function a(a) {
        return (a = b.toStr(a)), a ? a.split(/\s+/) : [];
      }
      function c(a) {
        return (a = b.toStr(a)), a ? a.split(/\W+/) : [];
      }
      function d(a) {
        return function (c) {
          return (
            (c = b.isArray(c) ? c : [].slice.call(arguments, 0)),
            function (d) {
              var e = [];
              return (
                b.each(c, function (c) {
                  e = e.concat(a(b.toStr(d[c])));
                }),
                e
              );
            }
          );
        };
      }
      return {
        nonword: c,
        whitespace: a,
        obj: { nonword: d(c), whitespace: d(a) },
      };
    })(),
    e = (function () {
      "use strict";
      function c(c) {
        (this.maxSize = b.isNumber(c) ? c : 100),
          this.reset(),
          this.maxSize <= 0 && (this.set = this.get = a.noop);
      }
      function d() {
        this.head = this.tail = null;
      }
      function e(a, b) {
        (this.key = a), (this.val = b), (this.prev = this.next = null);
      }
      return (
        b.mixin(c.prototype, {
          set: function (a, b) {
            var c,
              d = this.list.tail;
            this.size >= this.maxSize &&
              (this.list.remove(d), delete this.hash[d.key], this.size--),
              (c = this.hash[a])
                ? ((c.val = b), this.list.moveToFront(c))
                : ((c = new e(a, b)),
                  this.list.add(c),
                  (this.hash[a] = c),
                  this.size++);
          },
          get: function (a) {
            var b = this.hash[a];
            return b ? (this.list.moveToFront(b), b.val) : void 0;
          },
          reset: function () {
            (this.size = 0), (this.hash = {}), (this.list = new d());
          },
        }),
        b.mixin(d.prototype, {
          add: function (a) {
            this.head && ((a.next = this.head), (this.head.prev = a)),
              (this.head = a),
              (this.tail = this.tail || a);
          },
          remove: function (a) {
            a.prev ? (a.prev.next = a.next) : (this.head = a.next),
              a.next ? (a.next.prev = a.prev) : (this.tail = a.prev);
          },
          moveToFront: function (a) {
            this.remove(a), this.add(a);
          },
        }),
        c
      );
    })(),
    f = (function () {
      "use strict";
      function c(a, c) {
        (this.prefix = ["__", a, "__"].join("")),
          (this.ttlKey = "__ttl__"),
          (this.keyMatcher = new RegExp("^" + b.escapeRegExChars(this.prefix))),
          (this.ls = c || h),
          !this.ls && this._noop();
      }
      function d() {
        return new Date().getTime();
      }
      function e(a) {
        return JSON.stringify(b.isUndefined(a) ? null : a);
      }
      function f(b) {
        return a.parseJSON(b);
      }
      function g(a) {
        var b,
          c,
          d = [],
          e = h.length;
        for (b = 0; e > b; b++)
          (c = h.key(b)).match(a) && d.push(c.replace(a, ""));
        return d;
      }
      var h;
      try {
        (h = window.localStorage), h.setItem("~~~", "!"), h.removeItem("~~~");
      } catch (i) {
        h = null;
      }
      return (
        b.mixin(c.prototype, {
          _prefix: function (a) {
            return this.prefix + a;
          },
          _ttlKey: function (a) {
            return this._prefix(a) + this.ttlKey;
          },
          _noop: function () {
            this.get =
              this.set =
              this.remove =
              this.clear =
              this.isExpired =
                b.noop;
          },
          _safeSet: function (a, b) {
            try {
              this.ls.setItem(a, b);
            } catch (c) {
              "QuotaExceededError" === c.name && (this.clear(), this._noop());
            }
          },
          get: function (a) {
            return (
              this.isExpired(a) && this.remove(a),
              f(this.ls.getItem(this._prefix(a)))
            );
          },
          set: function (a, c, f) {
            return (
              b.isNumber(f)
                ? this._safeSet(this._ttlKey(a), e(d() + f))
                : this.ls.removeItem(this._ttlKey(a)),
              this._safeSet(this._prefix(a), e(c))
            );
          },
          remove: function (a) {
            return (
              this.ls.removeItem(this._ttlKey(a)),
              this.ls.removeItem(this._prefix(a)),
              this
            );
          },
          clear: function () {
            var a,
              b = g(this.keyMatcher);
            for (a = b.length; a--; ) this.remove(b[a]);
            return this;
          },
          isExpired: function (a) {
            var c = f(this.ls.getItem(this._ttlKey(a)));
            return b.isNumber(c) && d() > c ? !0 : !1;
          },
        }),
        c
      );
    })(),
    g = (function () {
      "use strict";
      function c(a) {
        (a = a || {}),
          (this.cancelled = !1),
          (this.lastReq = null),
          (this._send = a.transport),
          (this._get = a.limiter ? a.limiter(this._get) : this._get),
          (this._cache = a.cache === !1 ? new e(0) : h);
      }
      var d = 0,
        f = {},
        g = 6,
        h = new e(10);
      return (
        (c.setMaxPendingRequests = function (a) {
          g = a;
        }),
        (c.resetCache = function () {
          h.reset();
        }),
        b.mixin(c.prototype, {
          _fingerprint: function (b) {
            return (b = b || {}), b.url + b.type + a.param(b.data || {});
          },
          _get: function (a, b) {
            function c(a) {
              b(null, a), k._cache.set(i, a);
            }
            function e() {
              b(!0);
            }
            function h() {
              d--,
                delete f[i],
                k.onDeckRequestArgs &&
                  (k._get.apply(k, k.onDeckRequestArgs),
                  (k.onDeckRequestArgs = null));
            }
            var i,
              j,
              k = this;
            (i = this._fingerprint(a)),
              this.cancelled ||
                i !== this.lastReq ||
                ((j = f[i])
                  ? j.done(c).fail(e)
                  : g > d
                  ? (d++, (f[i] = this._send(a).done(c).fail(e).always(h)))
                  : (this.onDeckRequestArgs = [].slice.call(arguments, 0)));
          },
          get: function (c, d) {
            var e, f;
            (d = d || a.noop),
              (c = b.isString(c) ? { url: c } : c || {}),
              (f = this._fingerprint(c)),
              (this.cancelled = !1),
              (this.lastReq = f),
              (e = this._cache.get(f)) ? d(null, e) : this._get(c, d);
          },
          cancel: function () {
            this.cancelled = !0;
          },
        }),
        c
      );
    })(),
    h = (window.SearchIndex = (function () {
      "use strict";
      function c(c) {
        (c = c || {}),
          (c.datumTokenizer && c.queryTokenizer) ||
            a.error("datumTokenizer and queryTokenizer are both required"),
          (this.identify = c.identify || b.stringify),
          (this.datumTokenizer = c.datumTokenizer),
          (this.queryTokenizer = c.queryTokenizer),
          this.reset();
      }
      function d(a) {
        return (
          (a = b.filter(a, function (a) {
            return !!a;
          })),
          (a = b.map(a, function (a) {
            return a.toLowerCase();
          }))
        );
      }
      function e() {
        var a = {};
        return (a[i] = []), (a[h] = {}), a;
      }
      function f(a) {
        for (var b = {}, c = [], d = 0, e = a.length; e > d; d++)
          b[a[d]] || ((b[a[d]] = !0), c.push(a[d]));
        return c;
      }
      function g(a, b) {
        var c = 0,
          d = 0,
          e = [];
        (a = a.sort()), (b = b.sort());
        for (var f = a.length, g = b.length; f > c && g > d; )
          a[c] < b[d] ? c++ : a[c] > b[d] ? d++ : (e.push(a[c]), c++, d++);
        return e;
      }
      var h = "c",
        i = "i";
      return (
        b.mixin(c.prototype, {
          bootstrap: function (a) {
            (this.datums = a.datums), (this.trie = a.trie);
          },
          add: function (a) {
            var c = this;
            (a = b.isArray(a) ? a : [a]),
              b.each(a, function (a) {
                var f, g;
                (c.datums[(f = c.identify(a))] = a),
                  (g = d(c.datumTokenizer(a))),
                  b.each(g, function (a) {
                    var b, d, g;
                    for (b = c.trie, d = a.split(""); (g = d.shift()); )
                      (b = b[h][g] || (b[h][g] = e())), b[i].push(f);
                  });
              });
          },
          get: function (a) {
            var c = this;
            return b.map(a, function (a) {
              return c.datums[a];
            });
          },
          search: function (a) {
            var c,
              e,
              j = this;
            return (
              (c = d(this.queryTokenizer(a))),
              b.each(c, function (a) {
                var b, c, d, f;
                if (e && 0 === e.length) return !1;
                for (b = j.trie, c = a.split(""); b && (d = c.shift()); )
                  b = b[h][d];
                return b && 0 === c.length
                  ? ((f = b[i].slice(0)), void (e = e ? g(e, f) : f))
                  : ((e = []), !1);
              }),
              e
                ? b.map(f(e), function (a) {
                    return j.datums[a];
                  })
                : []
            );
          },
          all: function () {
            var a = [];
            for (var b in this.datums) a.push(this.datums[b]);
            return a;
          },
          reset: function () {
            (this.datums = {}), (this.trie = e());
          },
          serialize: function () {
            return { datums: this.datums, trie: this.trie };
          },
        }),
        c
      );
    })()),
    i = (function () {
      "use strict";
      function a(a) {
        (this.url = a.url),
          (this.ttl = a.ttl),
          (this.cache = a.cache),
          (this.prepare = a.prepare),
          (this.transform = a.transform),
          (this.transport = a.transport),
          (this.thumbprint = a.thumbprint),
          (this.storage = new f(a.cacheKey));
      }
      var c;
      return (
        (c = { data: "data", protocol: "protocol", thumbprint: "thumbprint" }),
        b.mixin(a.prototype, {
          _settings: function () {
            return { url: this.url, type: "GET", dataType: "json" };
          },
          store: function (a) {
            this.cache &&
              (this.storage.set(c.data, a, this.ttl),
              this.storage.set(c.protocol, location.protocol, this.ttl),
              this.storage.set(c.thumbprint, this.thumbprint, this.ttl));
          },
          fromCache: function () {
            var a,
              b = {};
            return this.cache
              ? ((b.data = this.storage.get(c.data)),
                (b.protocol = this.storage.get(c.protocol)),
                (b.thumbprint = this.storage.get(c.thumbprint)),
                (a =
                  b.thumbprint !== this.thumbprint ||
                  b.protocol !== location.protocol),
                b.data && !a ? b.data : null)
              : null;
          },
          fromNetwork: function (a) {
            function b() {
              a(!0);
            }
            function c(b) {
              a(null, e.transform(b));
            }
            var d,
              e = this;
            a &&
              ((d = this.prepare(this._settings())),
              this.transport(d).fail(b).done(c));
          },
          clear: function () {
            return this.storage.clear(), this;
          },
        }),
        a
      );
    })(),
    j = (function () {
      "use strict";
      function a(a) {
        (this.url = a.url),
          (this.prepare = a.prepare),
          (this.transform = a.transform),
          (this.transport = new g({
            cache: a.cache,
            limiter: a.limiter,
            transport: a.transport,
          }));
      }
      return (
        b.mixin(a.prototype, {
          _settings: function () {
            return { url: this.url, type: "GET", dataType: "json" };
          },
          get: function (a, b) {
            function c(a, c) {
              b(a ? [] : e.transform(c));
            }
            var d,
              e = this;
            if (b)
              return (
                (a = a || ""),
                (d = this.prepare(a, this._settings())),
                this.transport.get(d, c)
              );
          },
          cancelLastRequest: function () {
            this.transport.cancel();
          },
        }),
        a
      );
    })(),
    k = (function () {
      "use strict";
      function d(d) {
        var e;
        return d
          ? ((e = {
              url: null,
              ttl: 864e5,
              cache: !0,
              cacheKey: null,
              thumbprint: "",
              prepare: b.identity,
              transform: b.identity,
              transport: null,
            }),
            (d = b.isString(d) ? { url: d } : d),
            (d = b.mixin(e, d)),
            !d.url && a.error("prefetch requires url to be set"),
            (d.transform = d.filter || d.transform),
            (d.cacheKey = d.cacheKey || d.url),
            (d.thumbprint = c + d.thumbprint),
            (d.transport = d.transport ? h(d.transport) : a.ajax),
            d)
          : null;
      }
      function e(c) {
        var d;
        if (c)
          return (
            (d = {
              url: null,
              cache: !0,
              prepare: null,
              replace: null,
              wildcard: null,
              limiter: null,
              rateLimitBy: "debounce",
              rateLimitWait: 300,
              transform: b.identity,
              transport: null,
            }),
            (c = b.isString(c) ? { url: c } : c),
            (c = b.mixin(d, c)),
            !c.url && a.error("remote requires url to be set"),
            (c.transform = c.filter || c.transform),
            (c.prepare = f(c)),
            (c.limiter = g(c)),
            (c.transport = c.transport ? h(c.transport) : a.ajax),
            delete c.replace,
            delete c.wildcard,
            delete c.rateLimitBy,
            delete c.rateLimitWait,
            c
          );
      }
      function f(a) {
        function b(a, b) {
          return (b.url = f(b.url, a)), b;
        }
        function c(a, b) {
          return (b.url = b.url.replace(g, encodeURIComponent(a))), b;
        }
        function d(a, b) {
          return b;
        }
        var e, f, g;
        return (
          (e = a.prepare),
          (f = a.replace),
          (g = a.wildcard),
          e ? e : (e = f ? b : a.wildcard ? c : d)
        );
      }
      function g(a) {
        function c(a) {
          return function (c) {
            return b.debounce(c, a);
          };
        }
        function d(a) {
          return function (c) {
            return b.throttle(c, a);
          };
        }
        var e, f, g;
        return (
          (e = a.limiter),
          (f = a.rateLimitBy),
          (g = a.rateLimitWait),
          e || (e = /^throttle$/i.test(f) ? d(g) : c(g)),
          e
        );
      }
      function h(c) {
        return function (d) {
          function e(a) {
            b.defer(function () {
              g.resolve(a);
            });
          }
          function f(a) {
            b.defer(function () {
              g.reject(a);
            });
          }
          var g = a.Deferred();
          return c(d, e, f), g;
        };
      }
      return function (c) {
        var f, g;
        return (
          (f = {
            initialize: !0,
            identify: b.stringify,
            datumTokenizer: null,
            queryTokenizer: null,
            sufficient: 5,
            sorter: null,
            local: [],
            prefetch: null,
            remote: null,
          }),
          (c = b.mixin(f, c || {})),
          !c.datumTokenizer && a.error("datumTokenizer is required"),
          !c.queryTokenizer && a.error("queryTokenizer is required"),
          (g = c.sorter),
          (c.sorter = g
            ? function (a) {
                return a.sort(g);
              }
            : b.identity),
          (c.local = b.isFunction(c.local) ? c.local() : c.local),
          (c.prefetch = d(c.prefetch)),
          (c.remote = e(c.remote)),
          c
        );
      };
    })(),
    l = (function () {
      "use strict";
      function c(a) {
        (a = k(a)),
          (this.sorter = a.sorter),
          (this.identify = a.identify),
          (this.sufficient = a.sufficient),
          (this.local = a.local),
          (this.remote = a.remote ? new j(a.remote) : null),
          (this.prefetch = a.prefetch ? new i(a.prefetch) : null),
          (this.index = new h({
            identify: this.identify,
            datumTokenizer: a.datumTokenizer,
            queryTokenizer: a.queryTokenizer,
          })),
          a.initialize !== !1 && this.initialize();
      }
      var e;
      return (
        (e = window && window.Bloodhound),
        (c.noConflict = function () {
          return window && (window.Bloodhound = e), c;
        }),
        (c.tokenizers = d),
        b.mixin(c.prototype, {
          __ttAdapter: function () {
            function a(a, b, d) {
              return c.search(a, b, d);
            }
            function b(a, b) {
              return c.search(a, b);
            }
            var c = this;
            return this.remote ? a : b;
          },
          _loadPrefetch: function () {
            function b(a, b) {
              return a
                ? c.reject()
                : (e.add(b),
                  e.prefetch.store(e.index.serialize()),
                  void c.resolve());
            }
            var c,
              d,
              e = this;
            return (
              (c = a.Deferred()),
              this.prefetch
                ? (d = this.prefetch.fromCache())
                  ? (this.index.bootstrap(d), c.resolve())
                  : this.prefetch.fromNetwork(b)
                : c.resolve(),
              c.promise()
            );
          },
          _initialize: function () {
            function a() {
              b.add(b.local);
            }
            var b = this;
            return (
              this.clear(),
              (this.initPromise = this._loadPrefetch()).done(a),
              this.initPromise
            );
          },
          initialize: function (a) {
            return !this.initPromise || a
              ? this._initialize()
              : this.initPromise;
          },
          add: function (a) {
            return this.index.add(a), this;
          },
          get: function (a) {
            return (
              (a = b.isArray(a) ? a : [].slice.call(arguments)),
              this.index.get(a)
            );
          },
          search: function (a, c, d) {
            function e(a) {
              var c = [];
              b.each(a, function (a) {
                !b.some(f, function (b) {
                  return g.identify(a) === g.identify(b);
                }) && c.push(a);
              }),
                d && d(c);
            }
            var f,
              g = this;
            return (
              (f = this.sorter(this.index.search(a))),
              c(this.remote ? f.slice() : f),
              this.remote && f.length < this.sufficient
                ? this.remote.get(a, e)
                : this.remote && this.remote.cancelLastRequest(),
              this
            );
          },
          all: function () {
            return this.index.all();
          },
          clear: function () {
            return this.index.reset(), this;
          },
          clearPrefetchCache: function () {
            return this.prefetch && this.prefetch.clear(), this;
          },
          clearRemoteCache: function () {
            return g.resetCache(), this;
          },
          ttAdapter: function () {
            return this.__ttAdapter();
          },
        }),
        c
      );
    })();
  return l;
}),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define("typeahead.js", ["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(this, function (a) {
    var b = (function () {
        "use strict";
        return {
          isMsie: function () {
            return /(msie|trident)/i.test(navigator.userAgent)
              ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
              : !1;
          },
          isBlankString: function (a) {
            return !a || /^\s*$/.test(a);
          },
          escapeRegExChars: function (a) {
            return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          },
          isString: function (a) {
            return "string" == typeof a;
          },
          isNumber: function (a) {
            return "number" == typeof a;
          },
          isArray: a.isArray,
          isFunction: a.isFunction,
          isObject: a.isPlainObject,
          isUndefined: function (a) {
            return "undefined" == typeof a;
          },
          isElement: function (a) {
            return !(!a || 1 !== a.nodeType);
          },
          isJQuery: function (b) {
            return b instanceof a;
          },
          toStr: function (a) {
            return b.isUndefined(a) || null === a ? "" : a + "";
          },
          bind: a.proxy,
          each: function (b, c) {
            function d(a, b) {
              return c(b, a);
            }
            a.each(b, d);
          },
          map: a.map,
          filter: a.grep,
          every: function (b, c) {
            var d = !0;
            return b
              ? (a.each(b, function (a, e) {
                  return (d = c.call(null, e, a, b)) ? void 0 : !1;
                }),
                !!d)
              : d;
          },
          some: function (b, c) {
            var d = !1;
            return b
              ? (a.each(b, function (a, e) {
                  return (d = c.call(null, e, a, b)) ? !1 : void 0;
                }),
                !!d)
              : d;
          },
          mixin: a.extend,
          identity: function (a) {
            return a;
          },
          clone: function (b) {
            return a.extend(!0, {}, b);
          },
          getIdGenerator: function () {
            var a = 0;
            return function () {
              return a++;
            };
          },
          templatify: function (b) {
            function c() {
              return String(b);
            }
            return a.isFunction(b) ? b : c;
          },
          defer: function (a) {
            setTimeout(a, 0);
          },
          debounce: function (a, b, c) {
            var d, e;
            return function () {
              var f,
                g,
                h = this,
                i = arguments;
              return (
                (f = function () {
                  (d = null), c || (e = a.apply(h, i));
                }),
                (g = c && !d),
                clearTimeout(d),
                (d = setTimeout(f, b)),
                g && (e = a.apply(h, i)),
                e
              );
            };
          },
          throttle: function (a, b) {
            var c, d, e, f, g, h;
            return (
              (g = 0),
              (h = function () {
                (g = new Date()), (e = null), (f = a.apply(c, d));
              }),
              function () {
                var i = new Date(),
                  j = b - (i - g);
                return (
                  (c = this),
                  (d = arguments),
                  0 >= j
                    ? (clearTimeout(e),
                      (e = null),
                      (g = i),
                      (f = a.apply(c, d)))
                    : e || (e = setTimeout(h, j)),
                  f
                );
              }
            );
          },
          stringify: function (a) {
            return b.isString(a) ? a : JSON.stringify(a);
          },
          noop: function () {},
        };
      })(),
      c = (function () {
        "use strict";
        function a(a) {
          var g, h;
          return (
            (h = b.mixin({}, f, a)),
            (g = { css: e(), classes: h, html: c(h), selectors: d(h) }),
            {
              css: g.css,
              html: g.html,
              classes: g.classes,
              selectors: g.selectors,
              mixin: function (a) {
                b.mixin(a, g);
              },
            }
          );
        }
        function c(a) {
          return {
            wrapper: '<span class="' + a.wrapper + '"></span>',
            menu: '<div class="' + a.menu + '"></div>',
          };
        }
        function d(a) {
          var c = {};
          return (
            b.each(a, function (a, b) {
              c[b] = "." + a;
            }),
            c
          );
        }
        function e() {
          var a = {
            wrapper: { position: "relative", display: "inline-block" },
            hint: {
              position: "absolute",
              top: "0",
              left: "0",
              borderColor: "transparent",
              boxShadow: "none",
              opacity: "1",
            },
            input: {
              position: "relative",
              verticalAlign: "top",
              backgroundColor: "transparent",
            },
            inputWithNoHint: { position: "relative", verticalAlign: "top" },
            menu: {
              position: "absolute",
              top: "100%",
              left: "0",
              zIndex: "100",
              display: "none",
            },
            ltr: { left: "0", right: "auto" },
            rtl: { left: "auto", right: " 0" },
          };
          return (
            b.isMsie() &&
              b.mixin(a.input, {
                backgroundImage:
                  "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
              }),
            a
          );
        }
        var f = {
          wrapper: "twitter-typeahead",
          input: "tt-input",
          hint: "tt-hint",
          menu: "tt-menu",
          dataset: "tt-dataset",
          suggestion: "tt-suggestion",
          selectable: "tt-selectable",
          empty: "tt-empty",
          open: "tt-open",
          cursor: "tt-cursor",
          highlight: "tt-highlight",
        };
        return a;
      })(),
      d = (function () {
        "use strict";
        function c(b) {
          (b && b.el) || a.error("EventBus initialized without el"),
            (this.$el = a(b.el));
        }
        var d, e;
        return (
          (d = "typeahead:"),
          (e = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted",
          }),
          b.mixin(c.prototype, {
            _trigger: function (b, c) {
              var e;
              return (
                (e = a.Event(d + b)),
                (c = c || []).unshift(e),
                this.$el.trigger.apply(this.$el, c),
                e
              );
            },
            before: function (a) {
              var b, c;
              return (
                (b = [].slice.call(arguments, 1)),
                (c = this._trigger("before" + a, b)),
                c.isDefaultPrevented()
              );
            },
            trigger: function (a) {
              var b;
              this._trigger(a, [].slice.call(arguments, 1)),
                (b = e[a]) && this._trigger(b, [].slice.call(arguments, 1));
            },
          }),
          c
        );
      })(),
      e = (function () {
        "use strict";
        function a(a, b, c, d) {
          var e;
          if (!c) return this;
          for (
            b = b.split(i),
              c = d ? h(c, d) : c,
              this._callbacks = this._callbacks || {};
            (e = b.shift());

          )
            (this._callbacks[e] = this._callbacks[e] || {
              sync: [],
              async: [],
            }),
              this._callbacks[e][a].push(c);
          return this;
        }
        function b(b, c, d) {
          return a.call(this, "async", b, c, d);
        }
        function c(b, c, d) {
          return a.call(this, "sync", b, c, d);
        }
        function d(a) {
          var b;
          if (!this._callbacks) return this;
          for (a = a.split(i); (b = a.shift()); ) delete this._callbacks[b];
          return this;
        }
        function e(a) {
          var b, c, d, e, g;
          if (!this._callbacks) return this;
          for (
            a = a.split(i), d = [].slice.call(arguments, 1);
            (b = a.shift()) && (c = this._callbacks[b]);

          )
            (e = f(c.sync, this, [b].concat(d))),
              (g = f(c.async, this, [b].concat(d))),
              e() && j(g);
          return this;
        }
        function f(a, b, c) {
          function d() {
            for (var d, e = 0, f = a.length; !d && f > e; e += 1)
              d = a[e].apply(b, c) === !1;
            return !d;
          }
          return d;
        }
        function g() {
          var a;
          return (a = window.setImmediate
            ? function (a) {
                setImmediate(function () {
                  a();
                });
              }
            : function (a) {
                setTimeout(function () {
                  a();
                }, 0);
              });
        }
        function h(a, b) {
          return a.bind
            ? a.bind(b)
            : function () {
                a.apply(b, [].slice.call(arguments, 0));
              };
        }
        var i = /\s+/,
          j = g();
        return { onSync: c, onAsync: b, off: d, trigger: e };
      })(),
      f = (function (a) {
        "use strict";
        function c(a, c, d) {
          for (var e, f = [], g = 0, h = a.length; h > g; g++)
            f.push(b.escapeRegExChars(a[g]));
          return (
            (e = d ? "\\b(" + f.join("|") + ")\\b" : "(" + f.join("|") + ")"),
            c ? new RegExp(e) : new RegExp(e, "i")
          );
        }
        var d = {
          node: null,
          pattern: null,
          tagName: "strong",
          className: null,
          wordsOnly: !1,
          caseSensitive: !1,
        };
        return function (e) {
          function f(b) {
            var c, d, f;
            return (
              (c = h.exec(b.data)) &&
                ((f = a.createElement(e.tagName)),
                e.className && (f.className = e.className),
                (d = b.splitText(c.index)),
                d.splitText(c[0].length),
                f.appendChild(d.cloneNode(!0)),
                b.parentNode.replaceChild(f, d)),
              !!c
            );
          }
          function g(a, b) {
            for (var c, d = 3, e = 0; e < a.childNodes.length; e++)
              (c = a.childNodes[e]),
                c.nodeType === d ? (e += b(c) ? 1 : 0) : g(c, b);
          }
          var h;
          (e = b.mixin({}, d, e)),
            e.node &&
              e.pattern &&
              ((e.pattern = b.isArray(e.pattern) ? e.pattern : [e.pattern]),
              (h = c(e.pattern, e.caseSensitive, e.wordsOnly)),
              g(e.node, f));
        };
      })(window.document),
      g = (function () {
        "use strict";
        function c(c, e) {
          (c = c || {}),
            c.input || a.error("input is missing"),
            e.mixin(this),
            (this.$hint = a(c.hint)),
            (this.$input = a(c.input)),
            (this.query = this.$input.val()),
            (this.queryWhenFocused = this.hasFocus() ? this.query : null),
            (this.$overflowHelper = d(this.$input)),
            this._checkLanguageDirection(),
            0 === this.$hint.length &&
              (this.setHint =
                this.getHint =
                this.clearHint =
                this.clearHintIfInvalid =
                  b.noop);
        }
        function d(b) {
          return a('<pre aria-hidden="true"></pre>')
            .css({
              position: "absolute",
              visibility: "hidden",
              whiteSpace: "pre",
              fontFamily: b.css("font-family"),
              fontSize: b.css("font-size"),
              fontStyle: b.css("font-style"),
              fontVariant: b.css("font-variant"),
              fontWeight: b.css("font-weight"),
              wordSpacing: b.css("word-spacing"),
              letterSpacing: b.css("letter-spacing"),
              textIndent: b.css("text-indent"),
              textRendering: b.css("text-rendering"),
              textTransform: b.css("text-transform"),
            })
            .insertAfter(b);
        }
        function f(a, b) {
          return c.normalizeQuery(a) === c.normalizeQuery(b);
        }
        function g(a) {
          return a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
        }
        var h;
        return (
          (h = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down",
          }),
          (c.normalizeQuery = function (a) {
            return b
              .toStr(a)
              .replace(/^\s*/g, "")
              .replace(/\s{2,}/g, " ");
          }),
          b.mixin(c.prototype, e, {
            _onBlur: function () {
              this.resetInputValue(), this.trigger("blurred");
            },
            _onFocus: function () {
              (this.queryWhenFocused = this.query), this.trigger("focused");
            },
            _onKeydown: function (a) {
              var b = h[a.which || a.keyCode];
              this._managePreventDefault(b, a),
                b && this._shouldTrigger(b, a) && this.trigger(b + "Keyed", a);
            },
            _onInput: function () {
              this._setQuery(this.getInputValue()),
                this.clearHintIfInvalid(),
                this._checkLanguageDirection();
            },
            _managePreventDefault: function (a, b) {
              var c;
              switch (a) {
                case "up":
                case "down":
                  c = !g(b);
                  break;
                default:
                  c = !1;
              }
              c && b.preventDefault();
            },
            _shouldTrigger: function (a, b) {
              var c;
              switch (a) {
                case "tab":
                  c = !g(b);
                  break;
                default:
                  c = !0;
              }
              return c;
            },
            _checkLanguageDirection: function () {
              var a = (this.$input.css("direction") || "ltr").toLowerCase();
              this.dir !== a &&
                ((this.dir = a),
                this.$hint.attr("dir", a),
                this.trigger("langDirChanged", a));
            },
            _setQuery: function (a, b) {
              var c, d;
              (c = f(a, this.query)),
                (d = c ? this.query.length !== a.length : !1),
                (this.query = a),
                b || c
                  ? !b && d && this.trigger("whitespaceChanged", this.query)
                  : this.trigger("queryChanged", this.query);
            },
            bind: function () {
              var a,
                c,
                d,
                e,
                f = this;
              return (
                (a = b.bind(this._onBlur, this)),
                (c = b.bind(this._onFocus, this)),
                (d = b.bind(this._onKeydown, this)),
                (e = b.bind(this._onInput, this)),
                this.$input
                  .on("blur.tt", a)
                  .on("focus.tt", c)
                  .on("keydown.tt", d),
                !b.isMsie() || b.isMsie() > 9
                  ? this.$input.on("input.tt", e)
                  : this.$input.on(
                      "keydown.tt keypress.tt cut.tt paste.tt",
                      function (a) {
                        h[a.which || a.keyCode] ||
                          b.defer(b.bind(f._onInput, f, a));
                      }
                    ),
                this
              );
            },
            focus: function () {
              this.$input.focus();
            },
            blur: function () {
              this.$input.blur();
            },
            getLangDir: function () {
              return this.dir;
            },
            getQuery: function () {
              return this.query || "";
            },
            setQuery: function (a, b) {
              this.setInputValue(a), this._setQuery(a, b);
            },
            hasQueryChangedSinceLastFocus: function () {
              return this.query !== this.queryWhenFocused;
            },
            getInputValue: function () {
              return this.$input.val();
            },
            setInputValue: function (a) {
              this.$input.val(a),
                this.clearHintIfInvalid(),
                this._checkLanguageDirection();
            },
            resetInputValue: function () {
              this.setInputValue(this.query);
            },
            getHint: function () {
              return this.$hint.val();
            },
            setHint: function (a) {
              this.$hint.val(a);
            },
            clearHint: function () {
              this.setHint("");
            },
            clearHintIfInvalid: function () {
              var a, b, c, d;
              (a = this.getInputValue()),
                (b = this.getHint()),
                (c = a !== b && 0 === b.indexOf(a)),
                (d = "" !== a && c && !this.hasOverflow()),
                !d && this.clearHint();
            },
            hasFocus: function () {
              return this.$input.is(":focus");
            },
            hasOverflow: function () {
              var a = this.$input.width() - 2;
              return (
                this.$overflowHelper.text(this.getInputValue()),
                this.$overflowHelper.width() >= a
              );
            },
            isCursorAtEnd: function () {
              var a, c, d;
              return (
                (a = this.$input.val().length),
                (c = this.$input[0].selectionStart),
                b.isNumber(c)
                  ? c === a
                  : document.selection
                  ? ((d = document.selection.createRange()),
                    d.moveStart("character", -a),
                    a === d.text.length)
                  : !0
              );
            },
            destroy: function () {
              this.$hint.off(".tt"),
                this.$input.off(".tt"),
                this.$overflowHelper.remove(),
                (this.$hint = this.$input = this.$overflowHelper = a("<div>"));
            },
          }),
          c
        );
      })(),
      h = (function () {
        "use strict";
        function c(c, e) {
          (c = c || {}),
            (c.templates = c.templates || {}),
            (c.templates.notFound = c.templates.notFound || c.templates.empty),
            c.source || a.error("missing source"),
            c.node || a.error("missing node"),
            c.name && !h(c.name) && a.error("invalid dataset name: " + c.name),
            e.mixin(this),
            (this.highlight = !!c.highlight),
            (this.name = c.name || j()),
            (this.limit = c.limit || 5),
            (this.displayFn = d(c.display || c.displayKey)),
            (this.templates = g(c.templates, this.displayFn)),
            (this.source = c.source.__ttAdapter
              ? c.source.__ttAdapter()
              : c.source),
            (this.async = b.isUndefined(c.async)
              ? this.source.length > 2
              : !!c.async),
            this._resetLastSuggestion(),
            (this.$el = a(c.node)
              .addClass(this.classes.dataset)
              .addClass(this.classes.dataset + "-" + this.name));
        }
        function d(a) {
          function c(b) {
            return b[a];
          }
          return (a = a || b.stringify), b.isFunction(a) ? a : c;
        }
        function g(c, d) {
          function e(b) {
            return a("<div>").text(d(b));
          }
          return {
            notFound: c.notFound && b.templatify(c.notFound),
            pending: c.pending && b.templatify(c.pending),
            header: c.header && b.templatify(c.header),
            footer: c.footer && b.templatify(c.footer),
            suggestion: c.suggestion || e,
          };
        }
        function h(a) {
          return /^[_a-zA-Z0-9-]+$/.test(a);
        }
        var i, j;
        return (
          (i = { val: "tt-selectable-display", obj: "tt-selectable-object" }),
          (j = b.getIdGenerator()),
          (c.extractData = function (b) {
            var c = a(b);
            return c.data(i.obj)
              ? { val: c.data(i.val) || "", obj: c.data(i.obj) || null }
              : null;
          }),
          b.mixin(c.prototype, e, {
            _overwrite: function (a, b) {
              (b = b || []),
                b.length
                  ? this._renderSuggestions(a, b)
                  : this.async && this.templates.pending
                  ? this._renderPending(a)
                  : !this.async && this.templates.notFound
                  ? this._renderNotFound(a)
                  : this._empty(),
                this.trigger("rendered", this.name, b, !1);
            },
            _append: function (a, b) {
              (b = b || []),
                b.length && this.$lastSuggestion.length
                  ? this._appendSuggestions(a, b)
                  : b.length
                  ? this._renderSuggestions(a, b)
                  : !this.$lastSuggestion.length &&
                    this.templates.notFound &&
                    this._renderNotFound(a),
                this.trigger("rendered", this.name, b, !0);
            },
            _renderSuggestions: function (a, b) {
              var c;
              (c = this._getSuggestionsFragment(a, b)),
                (this.$lastSuggestion = c.children().last()),
                this.$el
                  .html(c)
                  .prepend(this._getHeader(a, b))
                  .append(this._getFooter(a, b));
            },
            _appendSuggestions: function (a, b) {
              var c, d;
              (c = this._getSuggestionsFragment(a, b)),
                (d = c.children().last()),
                this.$lastSuggestion.after(c),
                (this.$lastSuggestion = d);
            },
            _renderPending: function (a) {
              var b = this.templates.pending;
              this._resetLastSuggestion(),
                b && this.$el.html(b({ query: a, dataset: this.name }));
            },
            _renderNotFound: function (a) {
              var b = this.templates.notFound;
              this._resetLastSuggestion(),
                b && this.$el.html(b({ query: a, dataset: this.name }));
            },
            _empty: function () {
              this.$el.empty(), this._resetLastSuggestion();
            },
            _getSuggestionsFragment: function (c, d) {
              var e,
                g = this;
              return (
                (e = document.createDocumentFragment()),
                b.each(d, function (b) {
                  var d, f;
                  (f = g._injectQuery(c, b)),
                    (d = a(g.templates.suggestion(f))
                      .data(i.obj, b)
                      .data(i.val, g.displayFn(b))
                      .addClass(
                        g.classes.suggestion + " " + g.classes.selectable
                      )),
                    e.appendChild(d[0]);
                }),
                this.highlight &&
                  f({ className: this.classes.highlight, node: e, pattern: c }),
                a(e)
              );
            },
            _getFooter: function (a, b) {
              return this.templates.footer
                ? this.templates.footer({
                    query: a,
                    suggestions: b,
                    dataset: this.name,
                  })
                : null;
            },
            _getHeader: function (a, b) {
              return this.templates.header
                ? this.templates.header({
                    query: a,
                    suggestions: b,
                    dataset: this.name,
                  })
                : null;
            },
            _resetLastSuggestion: function () {
              this.$lastSuggestion = a();
            },
            _injectQuery: function (a, c) {
              return b.isObject(c) ? b.mixin({ _query: a }, c) : c;
            },
            update: function (b) {
              function c(a) {
                g ||
                  ((g = !0),
                  (a = (a || []).slice(0, e.limit)),
                  (h = a.length),
                  e._overwrite(b, a),
                  h < e.limit && e.async && e.trigger("asyncRequested", b));
              }
              function d(c) {
                (c = c || []),
                  !f &&
                    h < e.limit &&
                    ((e.cancel = a.noop),
                    (h += c.length),
                    e._append(b, c.slice(0, e.limit - h)),
                    e.async && e.trigger("asyncReceived", b));
              }
              var e = this,
                f = !1,
                g = !1,
                h = 0;
              this.cancel(),
                (this.cancel = function () {
                  (f = !0),
                    (e.cancel = a.noop),
                    e.async && e.trigger("asyncCanceled", b);
                }),
                this.source(b, c, d),
                !g && c([]);
            },
            cancel: a.noop,
            clear: function () {
              this._empty(), this.cancel(), this.trigger("cleared");
            },
            isEmpty: function () {
              return this.$el.is(":empty");
            },
            destroy: function () {
              this.$el = a("<div>");
            },
          }),
          c
        );
      })(),
      i = (function () {
        "use strict";
        function c(c, d) {
          function e(b) {
            var c = f.$node.find(b.node).first();
            return (
              (b.node = c.length ? c : a("<div>").appendTo(f.$node)),
              new h(b, d)
            );
          }
          var f = this;
          (c = c || {}),
            c.node || a.error("node is required"),
            d.mixin(this),
            (this.$node = a(c.node)),
            (this.query = null),
            (this.datasets = b.map(c.datasets, e));
        }
        return (
          b.mixin(c.prototype, e, {
            _onSelectableClick: function (b) {
              this.trigger("selectableClicked", a(b.currentTarget));
            },
            _onRendered: function (a, b, c, d) {
              this.$node.toggleClass(
                this.classes.empty,
                this._allDatasetsEmpty()
              ),
                this.trigger("datasetRendered", b, c, d);
            },
            _onCleared: function () {
              this.$node.toggleClass(
                this.classes.empty,
                this._allDatasetsEmpty()
              ),
                this.trigger("datasetCleared");
            },
            _propagate: function () {
              this.trigger.apply(this, arguments);
            },
            _allDatasetsEmpty: function () {
              function a(a) {
                return a.isEmpty();
              }
              return b.every(this.datasets, a);
            },
            _getSelectables: function () {
              return this.$node.find(this.selectors.selectable);
            },
            _removeCursor: function () {
              var a = this.getActiveSelectable();
              a && a.removeClass(this.classes.cursor);
            },
            _ensureVisible: function (a) {
              var b, c, d, e;
              (b = a.position().top),
                (c = b + a.outerHeight(!0)),
                (d = this.$node.scrollTop()),
                (e =
                  this.$node.height() +
                  parseInt(this.$node.css("paddingTop"), 10) +
                  parseInt(this.$node.css("paddingBottom"), 10)),
                0 > b
                  ? this.$node.scrollTop(d + b)
                  : c > e && this.$node.scrollTop(d + (c - e));
            },
            bind: function () {
              var a,
                c = this;
              return (
                (a = b.bind(this._onSelectableClick, this)),
                this.$node.on("click.tt", this.selectors.selectable, a),
                b.each(this.datasets, function (a) {
                  a.onSync("asyncRequested", c._propagate, c)
                    .onSync("asyncCanceled", c._propagate, c)
                    .onSync("asyncReceived", c._propagate, c)
                    .onSync("rendered", c._onRendered, c)
                    .onSync("cleared", c._onCleared, c);
                }),
                this
              );
            },
            isOpen: function () {
              return this.$node.hasClass(this.classes.open);
            },
            open: function () {
              this.$node.addClass(this.classes.open);
            },
            close: function () {
              this.$node.removeClass(this.classes.open), this._removeCursor();
            },
            setLanguageDirection: function (a) {
              this.$node.attr("dir", a);
            },
            selectableRelativeToCursor: function (a) {
              var b, c, d, e;
              return (
                (c = this.getActiveSelectable()),
                (b = this._getSelectables()),
                (d = c ? b.index(c) : -1),
                (e = d + a),
                (e = ((e + 1) % (b.length + 1)) - 1),
                (e = -1 > e ? b.length - 1 : e),
                -1 === e ? null : b.eq(e)
              );
            },
            setCursor: function (a) {
              this._removeCursor(),
                (a = a && a.first()) &&
                  (a.addClass(this.classes.cursor), this._ensureVisible(a));
            },
            getSelectableData: function (a) {
              return a && a.length ? h.extractData(a) : null;
            },
            getActiveSelectable: function () {
              var a = this._getSelectables()
                .filter(this.selectors.cursor)
                .first();
              return a.length ? a : null;
            },
            getTopSelectable: function () {
              var a = this._getSelectables().first();
              return a.length ? a : null;
            },
            update: function (a) {
              function c(b) {
                b.update(a);
              }
              var d = a !== this.query;
              return d && ((this.query = a), b.each(this.datasets, c)), d;
            },
            empty: function () {
              function a(a) {
                a.clear();
              }
              b.each(this.datasets, a),
                (this.query = null),
                this.$node.addClass(this.classes.empty);
            },
            destroy: function () {
              function c(a) {
                a.destroy();
              }
              this.$node.off(".tt"),
                (this.$node = a("<div>")),
                b.each(this.datasets, c);
            },
          }),
          c
        );
      })(),
      j = (function () {
        "use strict";
        function a() {
          i.apply(this, [].slice.call(arguments, 0));
        }
        var c = i.prototype;
        return (
          b.mixin(a.prototype, i.prototype, {
            open: function () {
              return (
                !this._allDatasetsEmpty() && this._show(),
                c.open.apply(this, [].slice.call(arguments, 0))
              );
            },
            close: function () {
              return (
                this._hide(), c.close.apply(this, [].slice.call(arguments, 0))
              );
            },
            _onRendered: function () {
              return (
                this._allDatasetsEmpty()
                  ? this._hide()
                  : this.isOpen() && this._show(),
                c._onRendered.apply(this, [].slice.call(arguments, 0))
              );
            },
            _onCleared: function () {
              return (
                this._allDatasetsEmpty()
                  ? this._hide()
                  : this.isOpen() && this._show(),
                c._onCleared.apply(this, [].slice.call(arguments, 0))
              );
            },
            setLanguageDirection: function (a) {
              return (
                this.$node.css("ltr" === a ? this.css.ltr : this.css.rtl),
                c.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
              );
            },
            _hide: function () {
              this.$node.hide();
            },
            _show: function () {
              this.$node.css("display", "block");
            },
          }),
          a
        );
      })(),
      k = (function () {
        "use strict";
        function c(c, e) {
          var f, g, h, i, j, k, l, m, n, o, p;
          (c = c || {}),
            c.input || a.error("missing input"),
            c.menu || a.error("missing menu"),
            c.eventBus || a.error("missing event bus"),
            e.mixin(this),
            (this.eventBus = c.eventBus),
            (this.minLength = b.isNumber(c.minLength) ? c.minLength : 1),
            (this.input = c.input),
            (this.menu = c.menu),
            (this.enabled = !0),
            (this.active = !1),
            this.input.hasFocus() && this.activate(),
            (this.dir = this.input.getLangDir()),
            this._hacks(),
            this.menu
              .bind()
              .onSync("selectableClicked", this._onSelectableClicked, this)
              .onSync("asyncRequested", this._onAsyncRequested, this)
              .onSync("asyncCanceled", this._onAsyncCanceled, this)
              .onSync("asyncReceived", this._onAsyncReceived, this)
              .onSync("datasetRendered", this._onDatasetRendered, this)
              .onSync("datasetCleared", this._onDatasetCleared, this),
            (f = d(this, "activate", "open", "_onFocused")),
            (g = d(this, "deactivate", "_onBlurred")),
            (h = d(this, "isActive", "isOpen", "_onEnterKeyed")),
            (i = d(this, "isActive", "isOpen", "_onTabKeyed")),
            (j = d(this, "isActive", "_onEscKeyed")),
            (k = d(this, "isActive", "open", "_onUpKeyed")),
            (l = d(this, "isActive", "open", "_onDownKeyed")),
            (m = d(this, "isActive", "isOpen", "_onLeftKeyed")),
            (n = d(this, "isActive", "isOpen", "_onRightKeyed")),
            (o = d(this, "_openIfActive", "_onQueryChanged")),
            (p = d(this, "_openIfActive", "_onWhitespaceChanged")),
            this.input
              .bind()
              .onSync("focused", f, this)
              .onSync("blurred", g, this)
              .onSync("enterKeyed", h, this)
              .onSync("tabKeyed", i, this)
              .onSync("escKeyed", j, this)
              .onSync("upKeyed", k, this)
              .onSync("downKeyed", l, this)
              .onSync("leftKeyed", m, this)
              .onSync("rightKeyed", n, this)
              .onSync("queryChanged", o, this)
              .onSync("whitespaceChanged", p, this)
              .onSync("langDirChanged", this._onLangDirChanged, this);
        }
        function d(a) {
          var c = [].slice.call(arguments, 1);
          return function () {
            var d = [].slice.call(arguments);
            b.each(c, function (b) {
              return a[b].apply(a, d);
            });
          };
        }
        return (
          b.mixin(c.prototype, {
            _hacks: function () {
              var c, d;
              (c = this.input.$input || a("<div>")),
                (d = this.menu.$node || a("<div>")),
                c.on("blur.tt", function (a) {
                  var e, f, g;
                  (e = document.activeElement),
                    (f = d.is(e)),
                    (g = d.has(e).length > 0),
                    b.isMsie() &&
                      (f || g) &&
                      (a.preventDefault(),
                      a.stopImmediatePropagation(),
                      b.defer(function () {
                        c.focus();
                      }));
                }),
                d.on("mousedown.tt", function (a) {
                  a.preventDefault();
                });
            },
            _onSelectableClicked: function (a, b) {
              this.select(b);
            },
            _onDatasetCleared: function () {
              this._updateHint();
            },
            _onDatasetRendered: function (a, b, c, d) {
              this._updateHint(), this.eventBus.trigger("render", c, d, b);
            },
            _onAsyncRequested: function (a, b, c) {
              this.eventBus.trigger("asyncrequest", c, b);
            },
            _onAsyncCanceled: function (a, b, c) {
              this.eventBus.trigger("asynccancel", c, b);
            },
            _onAsyncReceived: function (a, b, c) {
              this.eventBus.trigger("asyncreceive", c, b);
            },
            _onFocused: function () {
              this._minLengthMet() && this.menu.update(this.input.getQuery());
            },
            _onBlurred: function () {
              this.input.hasQueryChangedSinceLastFocus() &&
                this.eventBus.trigger("change", this.input.getQuery());
            },
            _onEnterKeyed: function (a, b) {
              var c;
              (c = this.menu.getActiveSelectable()) &&
                this.select(c) &&
                b.preventDefault();
            },
            _onTabKeyed: function (a, b) {
              var c;
              (c = this.menu.getActiveSelectable())
                ? this.select(c) && b.preventDefault()
                : (c = this.menu.getTopSelectable()) &&
                  this.autocomplete(c) &&
                  b.preventDefault();
            },
            _onEscKeyed: function () {
              this.close();
            },
            _onUpKeyed: function () {
              this.moveCursor(-1);
            },
            _onDownKeyed: function () {
              this.moveCursor(1);
            },
            _onLeftKeyed: function () {
              "rtl" === this.dir &&
                this.input.isCursorAtEnd() &&
                this.autocomplete(this.menu.getTopSelectable());
            },
            _onRightKeyed: function () {
              "ltr" === this.dir &&
                this.input.isCursorAtEnd() &&
                this.autocomplete(this.menu.getTopSelectable());
            },
            _onQueryChanged: function (a, b) {
              this._minLengthMet(b) ? this.menu.update(b) : this.menu.empty();
            },
            _onWhitespaceChanged: function () {
              this._updateHint();
            },
            _onLangDirChanged: function (a, b) {
              this.dir !== b &&
                ((this.dir = b), this.menu.setLanguageDirection(b));
            },
            _openIfActive: function () {
              this.isActive() && this.open();
            },
            _minLengthMet: function (a) {
              return (
                (a = b.isString(a) ? a : this.input.getQuery() || ""),
                a.length >= this.minLength
              );
            },
            _updateHint: function () {
              var a, c, d, e, f, h, i;
              (a = this.menu.getTopSelectable()),
                (c = this.menu.getSelectableData(a)),
                (d = this.input.getInputValue()),
                !c || b.isBlankString(d) || this.input.hasOverflow()
                  ? this.input.clearHint()
                  : ((e = g.normalizeQuery(d)),
                    (f = b.escapeRegExChars(e)),
                    (h = new RegExp("^(?:" + f + ")(.+$)", "i")),
                    (i = h.exec(c.val)),
                    i && this.input.setHint(d + i[1]));
            },
            isEnabled: function () {
              return this.enabled;
            },
            enable: function () {
              this.enabled = !0;
            },
            disable: function () {
              this.enabled = !1;
            },
            isActive: function () {
              return this.active;
            },
            activate: function () {
              return this.isActive()
                ? !0
                : !this.isEnabled() || this.eventBus.before("active")
                ? !1
                : ((this.active = !0), this.eventBus.trigger("active"), !0);
            },
            deactivate: function () {
              return this.isActive()
                ? this.eventBus.before("idle")
                  ? !1
                  : ((this.active = !1),
                    this.close(),
                    this.eventBus.trigger("idle"),
                    !0)
                : !0;
            },
            isOpen: function () {
              return this.menu.isOpen();
            },
            open: function () {
              return (
                this.isOpen() ||
                  this.eventBus.before("open") ||
                  (this.menu.open(),
                  this._updateHint(),
                  this.eventBus.trigger("open")),
                this.isOpen()
              );
            },
            close: function () {
              return (
                this.isOpen() &&
                  !this.eventBus.before("close") &&
                  (this.menu.close(),
                  this.input.clearHint(),
                  this.input.resetInputValue(),
                  this.eventBus.trigger("close")),
                !this.isOpen()
              );
            },
            setVal: function (a) {
              this.input.setQuery(b.toStr(a));
            },
            getVal: function () {
              return this.input.getQuery();
            },
            select: function (a) {
              var b = this.menu.getSelectableData(a);
              return b && !this.eventBus.before("select", b.obj)
                ? (this.input.setQuery(b.val, !0),
                  this.eventBus.trigger("select", b.obj),
                  this.close(),
                  !0)
                : !1;
            },
            autocomplete: function (a) {
              var b, c, d;
              return (
                (b = this.input.getQuery()),
                (c = this.menu.getSelectableData(a)),
                (d = c && b !== c.val),
                d && !this.eventBus.before("autocomplete", c.obj)
                  ? (this.input.setQuery(c.val),
                    this.eventBus.trigger("autocomplete", c.obj),
                    !0)
                  : !1
              );
            },
            moveCursor: function (a) {
              var b, c, d, e, f;
              return (
                (b = this.input.getQuery()),
                (c = this.menu.selectableRelativeToCursor(a)),
                (d = this.menu.getSelectableData(c)),
                (e = d ? d.obj : null),
                (f = this._minLengthMet() && this.menu.update(b)),
                f || this.eventBus.before("cursorchange", e)
                  ? !1
                  : (this.menu.setCursor(c),
                    d
                      ? this.input.setInputValue(d.val)
                      : (this.input.resetInputValue(), this._updateHint()),
                    this.eventBus.trigger("cursorchange", e),
                    !0)
              );
            },
            destroy: function () {
              this.input.destroy(), this.menu.destroy();
            },
          }),
          c
        );
      })();
    !(function () {
      "use strict";
      function e(b, c) {
        b.each(function () {
          var b,
            d = a(this);
          (b = d.data(p.typeahead)) && c(b, d);
        });
      }
      function f(a, b) {
        return a
          .clone()
          .addClass(b.classes.hint)
          .removeData()
          .css(b.css.hint)
          .css(l(a))
          .prop("readonly", !0)
          .removeAttr("id name placeholder required")
          .attr({ autocomplete: "off", spellcheck: "false", tabindex: -1 });
      }
      function h(a, b) {
        a.data(p.attrs, {
          dir: a.attr("dir"),
          autocomplete: a.attr("autocomplete"),
          spellcheck: a.attr("spellcheck"),
          style: a.attr("style"),
        }),
          a
            .addClass(b.classes.input)
            .attr({ autocomplete: "off", spellcheck: !1 });
        try {
          !a.attr("dir") && a.attr("dir", "auto");
        } catch (c) {}
        return a;
      }
      function l(a) {
        return {
          backgroundAttachment: a.css("background-attachment"),
          backgroundClip: a.css("background-clip"),
          backgroundColor: a.css("background-color"),
          backgroundImage: a.css("background-image"),
          backgroundOrigin: a.css("background-origin"),
          backgroundPosition: a.css("background-position"),
          backgroundRepeat: a.css("background-repeat"),
          backgroundSize: a.css("background-size"),
        };
      }
      function m(a) {
        var c, d;
        (c = a.data(p.www)),
          (d = a.parent().filter(c.selectors.wrapper)),
          b.each(a.data(p.attrs), function (c, d) {
            b.isUndefined(c) ? a.removeAttr(d) : a.attr(d, c);
          }),
          a
            .removeData(p.typeahead)
            .removeData(p.www)
            .removeData(p.attr)
            .removeClass(c.classes.input),
          d.length && (a.detach().insertAfter(d), d.remove());
      }
      function n(c) {
        var d, e;
        return (
          (d = b.isJQuery(c) || b.isElement(c)),
          (e = d ? a(c).first() : []),
          e.length ? e : null
        );
      }
      var o, p, q;
      (o = a.fn.typeahead),
        (p = { www: "tt-www", attrs: "tt-attrs", typeahead: "tt-typeahead" }),
        (q = {
          initialize: function (e, l) {
            function m() {
              var c, m, q, r, s, t, u, v, w, x, y;
              b.each(l, function (a) {
                a.highlight = !!e.highlight;
              }),
                (c = a(this)),
                (m = a(o.html.wrapper)),
                (q = n(e.hint)),
                (r = n(e.menu)),
                (s = e.hint !== !1 && !q),
                (t = e.menu !== !1 && !r),
                s && (q = f(c, o)),
                t && (r = a(o.html.menu).css(o.css.menu)),
                q && q.val(""),
                (c = h(c, o)),
                (s || t) &&
                  (m.css(o.css.wrapper),
                  c.css(s ? o.css.input : o.css.inputWithNoHint),
                  c
                    .wrap(m)
                    .parent()
                    .prepend(s ? q : null)
                    .append(t ? r : null)),
                (y = t ? j : i),
                (u = new d({ el: c })),
                (v = new g({ hint: q, input: c }, o)),
                (w = new y({ node: r, datasets: l }, o)),
                (x = new k(
                  { input: v, menu: w, eventBus: u, minLength: e.minLength },
                  o
                )),
                c.data(p.www, o),
                c.data(p.typeahead, x);
            }
            var o;
            return (
              (l = b.isArray(l) ? l : [].slice.call(arguments, 1)),
              (e = e || {}),
              (o = c(e.classNames)),
              this.each(m)
            );
          },
          isEnabled: function () {
            var a;
            return (
              e(this.first(), function (b) {
                a = b.isEnabled();
              }),
              a
            );
          },
          enable: function () {
            return (
              e(this, function (a) {
                a.enable();
              }),
              this
            );
          },
          disable: function () {
            return (
              e(this, function (a) {
                a.disable();
              }),
              this
            );
          },
          isActive: function () {
            var a;
            return (
              e(this.first(), function (b) {
                a = b.isActive();
              }),
              a
            );
          },
          activate: function () {
            return (
              e(this, function (a) {
                a.activate();
              }),
              this
            );
          },
          deactivate: function () {
            return (
              e(this, function (a) {
                a.deactivate();
              }),
              this
            );
          },
          isOpen: function () {
            var a;
            return (
              e(this.first(), function (b) {
                a = b.isOpen();
              }),
              a
            );
          },
          open: function () {
            return (
              e(this, function (a) {
                a.open();
              }),
              this
            );
          },
          close: function () {
            return (
              e(this, function (a) {
                a.close();
              }),
              this
            );
          },
          select: function (b) {
            var c = !1,
              d = a(b);
            return (
              e(this.first(), function (a) {
                c = a.select(d);
              }),
              c
            );
          },
          autocomplete: function (b) {
            var c = !1,
              d = a(b);
            return (
              e(this.first(), function (a) {
                c = a.autocomplete(d);
              }),
              c
            );
          },
          moveCursor: function (a) {
            var b = !1;
            return (
              e(this.first(), function (c) {
                b = c.moveCursor(a);
              }),
              b
            );
          },
          val: function (a) {
            var b;
            return arguments.length
              ? (e(this, function (b) {
                  b.setVal(a);
                }),
                this)
              : (e(this.first(), function (a) {
                  b = a.getVal();
                }),
                b);
          },
          destroy: function () {
            return (
              e(this, function (a, b) {
                m(b), a.destroy();
              }),
              this
            );
          },
        }),
        (a.fn.typeahead = function (a) {
          return q[a]
            ? q[a].apply(this, [].slice.call(arguments, 1))
            : q.initialize.apply(this, arguments);
        }),
        (a.fn.typeahead.noConflict = function () {
          return (a.fn.typeahead = o), this;
        });
    })();
  });
!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this.drag = a.extend({}, m)),
      (this.state = a.extend({}, n)),
      (this.e = a.extend({}, o)),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._invalidated = {}),
      (this._pipe = []),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Pipe,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  function f(a) {
    if (a.touches !== d)
      return { x: a.touches[0].pageX, y: a.touches[0].pageY };
    if (a.touches === d) {
      if (a.pageX !== d) return { x: a.pageX, y: a.pageY };
      if (a.pageX === d) return { x: a.clientX, y: a.clientY };
    }
  }
  function g(a) {
    var b,
      d,
      e = c.createElement("div"),
      f = a;
    for (b in f)
      if (((d = f[b]), "undefined" != typeof e.style[d]))
        return (e = null), [d, b];
    return [!1];
  }
  function h() {
    return g([
      "transition",
      "WebkitTransition",
      "MozTransition",
      "OTransition",
    ])[1];
  }
  function i() {
    return g([
      "transform",
      "WebkitTransform",
      "MozTransform",
      "OTransform",
      "msTransform",
    ])[0];
  }
  function j() {
    return g([
      "perspective",
      "webkitPerspective",
      "MozPerspective",
      "OPerspective",
      "MsPerspective",
    ])[0];
  }
  function k() {
    return "ontouchstart" in b || !!navigator.msMaxTouchPoints;
  }
  function l() {
    return b.navigator.msPointerEnabled;
  }
  var m, n, o;
  (m = {
    start: 0,
    startX: 0,
    startY: 0,
    current: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0,
    distance: null,
    startTime: 0,
    endTime: 0,
    updatedX: 0,
    targetEl: null,
  }),
    (n = {
      isTouch: !1,
      isScrolling: !1,
      isSwiping: !1,
      direction: !1,
      inMotion: !1,
    }),
    (o = {
      _onDragStart: null,
      _onDragMove: null,
      _onDragEnd: null,
      _transitionEnd: null,
      _resizer: null,
      _responsiveCall: null,
      _goToLoop: null,
      _checkVisibile: null,
    }),
    (e.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: b,
      responsiveClass: !1,
      fallbackEasing: "swing",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      themeClass: "owl-theme",
      baseClass: "owl-carousel",
      itemClass: "owl-item",
      centerClass: "center",
      activeClass: "active",
    }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Plugins = {}),
    (e.Pipe = [
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var a = this._clones,
            b = this.$stage.children(".cloned");
          (b.length !== a.length || (!this.settings.loop && a.length > 0)) &&
            (this.$stage.children(".cloned").remove(), (this._clones = []));
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var a,
            b,
            c = this._clones,
            d = this._items,
            e = this.settings.loop
              ? c.length - Math.max(2 * this.settings.items, 4)
              : 0;
          for (a = 0, b = Math.abs(e / 2); b > a; a++)
            e > 0
              ? (this.$stage
                  .children()
                  .eq(d.length + c.length - 1)
                  .remove(),
                c.pop(),
                this.$stage.children().eq(0).remove(),
                c.pop())
              : (c.push(c.length / 2),
                this.$stage.append(
                  d[c[c.length - 1]].clone().addClass("cloned")
                ),
                c.push(d.length - 1 - (c.length - 1) / 2),
                this.$stage.prepend(
                  d[c[c.length - 1]].clone().addClass("cloned")
                ));
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d = this.settings.rtl ? 1 : -1,
            e = (this.width() / this.settings.items).toFixed(3),
            f = 0;
          for (
            this._coordinates = [],
              b = 0,
              c = this._clones.length + this._items.length;
            c > b;
            b++
          )
            (a = this._mergers[this.relative(b)]),
              (a =
                (this.settings.mergeFit && Math.min(a, this.settings.items)) ||
                a),
              (f +=
                (this.settings.autoWidth
                  ? this._items[this.relative(b)].width() + this.settings.margin
                  : e * a) * d),
              this._coordinates.push(f);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var b,
            c,
            d = (this.width() / this.settings.items).toFixed(3),
            e = {
              width:
                Math.abs(this._coordinates[this._coordinates.length - 1]) +
                2 * this.settings.stagePadding,
              "padding-left": this.settings.stagePadding || "",
              "padding-right": this.settings.stagePadding || "",
            };
          if (
            (this.$stage.css(e),
            (e = {
              width: this.settings.autoWidth
                ? "auto"
                : d - this.settings.margin,
            }),
            (e[this.settings.rtl ? "margin-left" : "margin-right"] =
              this.settings.margin),
            !this.settings.autoWidth &&
              a.grep(this._mergers, function (a) {
                return a > 1;
              }).length > 0)
          )
            for (b = 0, c = this._coordinates.length; c > b; b++)
              (e.width =
                Math.abs(this._coordinates[b]) -
                Math.abs(this._coordinates[b - 1] || 0) -
                this.settings.margin),
                this.$stage.children().eq(b).css(e);
          else this.$stage.children().css(e);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current && this.reset(this.$stage.children().index(a.current));
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; d > c; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c);
          this.$stage
            .children("." + this.settings.activeClass)
            .removeClass(this.settings.activeClass),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass(this.settings.activeClass),
            this.settings.center &&
              (this.$stage
                .children("." + this.settings.centerClass)
                .removeClass(this.settings.centerClass),
              this.$stage
                .children()
                .eq(this.current())
                .addClass(this.settings.centerClass));
        },
      },
    ]),
    (e.prototype.initialize = function () {
      if (
        (this.trigger("initialize"),
        this.$element
          .addClass(this.settings.baseClass)
          .addClass(this.settings.themeClass)
          .toggleClass("owl-rtl", this.settings.rtl),
        this.browserSupport(),
        this.settings.autoWidth && this.state.imagesLoaded !== !0)
      ) {
        var b, c, e;
        if (
          ((b = this.$element.find("img")),
          (c = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (e = this.$element.children(c).width()),
          b.length && 0 >= e)
        )
          return this.preloadAutoWidthImages(b), !1;
      }
      this.$element.addClass("owl-loading"),
        (this.$stage = a(
          "<" + this.settings.stageElement + ' class="owl-stage"/>'
        ).wrap('<div class="owl-stage-outer">')),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        (this._width = this.$element.width()),
        this.refresh(),
        this.$element.removeClass("owl-loading").addClass("owl-loaded"),
        this.eventsCall(),
        this.internalEvents(),
        this.addTriggerableEvents(),
        this.trigger("initialized");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            b >= a && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          delete e.responsive,
          e.responsiveClass &&
            this.$element
              .attr("class", function (a, b) {
                return b.replace(/\b owl-responsive-\S+/g, "");
              })
              .addClass("owl-responsive-" + d))
        : (e = a.extend({}, this.options)),
        (null === this.settings || this._breakpoint !== d) &&
          (this.trigger("change", { property: { name: "settings", value: e } }),
          (this._breakpoint = d),
          (this.settings = e),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: { name: "settings", value: this.settings },
          }));
    }),
    (e.prototype.optionsLogic = function () {
      this.$element.toggleClass("owl-center", this.settings.center),
        this.settings.loop &&
          this._items.length < this.settings.items &&
          (this.settings.loop = !1),
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.settings.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        c > b;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      this._invalidated = {};
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      if (0 === this._items.length) return !1;
      new Date().getTime();
      this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$stage.addClass("owl-refresh"),
        this.update(),
        this.$stage.removeClass("owl-refresh"),
        (this.state.orientation = b.orientation),
        this.watchVisibility(),
        this.trigger("refreshed");
    }),
    (e.prototype.eventsCall = function () {
      (this.e._onDragStart = a.proxy(function (a) {
        this.onDragStart(a);
      }, this)),
        (this.e._onDragMove = a.proxy(function (a) {
          this.onDragMove(a);
        }, this)),
        (this.e._onDragEnd = a.proxy(function (a) {
          this.onDragEnd(a);
        }, this)),
        (this.e._onResize = a.proxy(function (a) {
          this.onResize(a);
        }, this)),
        (this.e._transitionEnd = a.proxy(function (a) {
          this.transitionEnd(a);
        }, this)),
        (this.e._preventClick = a.proxy(function (a) {
          this.preventClick(a);
        }, this));
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this.e._onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function () {
      return this._items.length
        ? this._width === this.$element.width()
          ? !1
          : this.trigger("resize").isDefaultPrevented()
          ? !1
          : ((this._width = this.$element.width()),
            this.invalidate("width"),
            this.refresh(),
            void this.trigger("resized"))
        : !1;
    }),
    (e.prototype.eventsRouter = function (a) {
      var b = a.type;
      "mousedown" === b || "touchstart" === b
        ? this.onDragStart(a)
        : "mousemove" === b || "touchmove" === b
        ? this.onDragMove(a)
        : "mouseup" === b || "touchend" === b
        ? this.onDragEnd(a)
        : "touchcancel" === b && this.onDragEnd(a);
    }),
    (e.prototype.internalEvents = function () {
      var c = (k(), l());
      this.settings.mouseDrag
        ? (this.$stage.on(
            "mousedown",
            a.proxy(function (a) {
              this.eventsRouter(a);
            }, this)
          ),
          this.$stage.on("dragstart", function () {
            return !1;
          }),
          (this.$stage.get(0).onselectstart = function () {
            return !1;
          }))
        : this.$element.addClass("owl-text-select-on"),
        this.settings.touchDrag &&
          !c &&
          this.$stage.on(
            "touchstart touchcancel",
            a.proxy(function (a) {
              this.eventsRouter(a);
            }, this)
          ),
        this.transitionEndVendor &&
          this.on(
            this.$stage.get(0),
            this.transitionEndVendor,
            this.e._transitionEnd,
            !1
          ),
        this.settings.responsive !== !1 &&
          this.on(b, "resize", a.proxy(this.onThrottledResize, this));
    }),
    (e.prototype.onDragStart = function (d) {
      var e, g, h, i;
      if (
        ((e = d.originalEvent || d || b.event),
        3 === e.which || this.state.isTouch)
      )
        return !1;
      if (
        ("mousedown" === e.type && this.$stage.addClass("owl-grab"),
        this.trigger("drag"),
        (this.drag.startTime = new Date().getTime()),
        this.speed(0),
        (this.state.isTouch = !0),
        (this.state.isScrolling = !1),
        (this.state.isSwiping = !1),
        (this.drag.distance = 0),
        (g = f(e).x),
        (h = f(e).y),
        (this.drag.offsetX = this.$stage.position().left),
        (this.drag.offsetY = this.$stage.position().top),
        this.settings.rtl &&
          (this.drag.offsetX =
            this.$stage.position().left +
            this.$stage.width() -
            this.width() +
            this.settings.margin),
        this.state.inMotion && this.support3d)
      )
        (i = this.getTransformProperty()),
          (this.drag.offsetX = i),
          this.animate(i),
          (this.state.inMotion = !0);
      else if (this.state.inMotion && !this.support3d)
        return (this.state.inMotion = !1), !1;
      (this.drag.startX = g - this.drag.offsetX),
        (this.drag.startY = h - this.drag.offsetY),
        (this.drag.start = g - this.drag.startX),
        (this.drag.targetEl = e.target || e.srcElement),
        (this.drag.updatedX = this.drag.start),
        ("IMG" === this.drag.targetEl.tagName ||
          "A" === this.drag.targetEl.tagName) &&
          (this.drag.targetEl.draggable = !1),
        a(c).on(
          "mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",
          a.proxy(function (a) {
            this.eventsRouter(a);
          }, this)
        );
    }),
    (e.prototype.onDragMove = function (a) {
      var c, e, g, h, i, j;
      this.state.isTouch &&
        (this.state.isScrolling ||
          ((c = a.originalEvent || a || b.event),
          (e = f(c).x),
          (g = f(c).y),
          (this.drag.currentX = e - this.drag.startX),
          (this.drag.currentY = g - this.drag.startY),
          (this.drag.distance = this.drag.currentX - this.drag.offsetX),
          this.drag.distance < 0
            ? (this.state.direction = this.settings.rtl ? "right" : "left")
            : this.drag.distance > 0 &&
              (this.state.direction = this.settings.rtl ? "left" : "right"),
          this.settings.loop
            ? this.op(
                this.drag.currentX,
                ">",
                this.coordinates(this.minimum())
              ) && "right" === this.state.direction
              ? (this.drag.currentX -=
                  (this.settings.center && this.coordinates(0)) -
                  this.coordinates(this._items.length))
              : this.op(
                  this.drag.currentX,
                  "<",
                  this.coordinates(this.maximum())
                ) &&
                "left" === this.state.direction &&
                (this.drag.currentX +=
                  (this.settings.center && this.coordinates(0)) -
                  this.coordinates(this._items.length))
            : ((h = this.coordinates(
                this.settings.rtl ? this.maximum() : this.minimum()
              )),
              (i = this.coordinates(
                this.settings.rtl ? this.minimum() : this.maximum()
              )),
              (j = this.settings.pullDrag ? this.drag.distance / 5 : 0),
              (this.drag.currentX = Math.max(
                Math.min(this.drag.currentX, h + j),
                i + j
              ))),
          (this.drag.distance > 8 || this.drag.distance < -8) &&
            (c.preventDefault !== d ? c.preventDefault() : (c.returnValue = !1),
            (this.state.isSwiping = !0)),
          (this.drag.updatedX = this.drag.currentX),
          (this.drag.currentY > 16 || this.drag.currentY < -16) &&
            this.state.isSwiping === !1 &&
            ((this.state.isScrolling = !0),
            (this.drag.updatedX = this.drag.start)),
          this.animate(this.drag.updatedX)));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d, e, f;
      if (this.state.isTouch) {
        if (
          ("mouseup" === b.type && this.$stage.removeClass("owl-grab"),
          this.trigger("dragged"),
          this.drag.targetEl.removeAttribute("draggable"),
          (this.state.isTouch = !1),
          (this.state.isScrolling = !1),
          (this.state.isSwiping = !1),
          0 === this.drag.distance && this.state.inMotion !== !0)
        )
          return (this.state.inMotion = !1), !1;
        (this.drag.endTime = new Date().getTime()),
          (d = this.drag.endTime - this.drag.startTime),
          (e = Math.abs(this.drag.distance)),
          (e > 3 || d > 300) && this.removeClick(this.drag.targetEl),
          (f = this.closest(this.drag.updatedX)),
          this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(f),
          this.invalidate("position"),
          this.update(),
          this.settings.pullDrag ||
            this.drag.updatedX !== this.coordinates(f) ||
            this.transitionEnd(),
          (this.drag.distance = 0),
          a(c).off(".owl.dragEvents");
      }
    }),
    (e.prototype.removeClick = function (c) {
      (this.drag.targetEl = c),
        a(c).on("click.preventClick", this.e._preventClick),
        b.setTimeout(function () {
          a(c).off("click.preventClick");
        }, 300);
    }),
    (e.prototype.preventClick = function (b) {
      b.preventDefault ? b.preventDefault() : (b.returnValue = !1),
        b.stopPropagation && b.stopPropagation(),
        a(b.target).off("click.preventClick");
    }),
    (e.prototype.getTransformProperty = function () {
      var a, c;
      return (
        (a = b
          .getComputedStyle(this.$stage.get(0), null)
          .getPropertyValue(this.vendorName + "transform")),
        (a = a.replace(/matrix(3d)?\(|\)/g, "").split(",")),
        (c = 16 === a.length),
        c !== !0 ? a[4] : a[12]
      );
    }),
    (e.prototype.closest = function (b) {
      var c = -1,
        d = 30,
        e = this.width(),
        f = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            f,
            a.proxy(function (a, g) {
              return (
                b > g - d && g + d > b
                  ? (c = a)
                  : this.op(b, "<", g) &&
                    this.op(b, ">", f[a + 1] || g - e) &&
                    (c = "left" === this.state.direction ? a + 1 : a),
                -1 === c
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", f[this.minimum()])
            ? (c = b = this.minimum())
            : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())),
        c
      );
    }),
    (e.prototype.animate = function (b) {
      this.trigger("translate"),
        (this.state.inMotion = this.speed() > 0),
        this.support3d
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px, 0px)",
              transition: this.speed() / 1e3 + "s",
            })
          : this.state.isTouch
          ? this.$stage.css({ left: b + "px" })
          : this.$stage.animate(
              { left: b },
              this.speed() / 1e3,
              this.settings.fallbackEasing,
              a.proxy(function () {
                this.state.inMotion && this.transitionEnd();
              }, this)
            );
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (a) {
      this._invalidated[a] = !0;
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)),
        a !== d &&
          ((this._speed = 0),
          (this._current = a),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(a)),
          this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (b, c) {
      var e = c ? this._items.length : this._items.length + this._clones.length;
      return !a.isNumeric(b) || 1 > e
        ? d
        : (b = this._clones.length
            ? ((b % e) + e) % e
            : Math.max(this.minimum(c), Math.min(this.maximum(c), b)));
    }),
    (e.prototype.relative = function (a) {
      return (
        (a = this.normalize(a)),
        (a -= this._clones.length / 2),
        this.normalize(a, !0)
      );
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = 0,
        f = this.settings;
      if (a) return this._items.length - 1;
      if (!f.loop && f.center) b = this._items.length - 1;
      else if (f.loop || f.center)
        if (f.loop || f.center) b = this._items.length + f.items;
        else {
          if (!f.autoWidth && !f.merge)
            throw "Can not detect maximum absolute position.";
          for (
            revert = f.rtl ? 1 : -1,
              c = this.$stage.width() - this.$element.width();
            (d = this.coordinates(e)) && !(d * revert >= c);

          )
            b = ++e;
        }
      else b = this._items.length - f.items;
      return b;
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c = null;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? ((c = this._coordinates[b]),
              (c +=
                ((this.width() - c + (this._coordinates[b - 1] || 0)) / 2) *
                (this.settings.rtl ? -1 : 1)))
            : (c = this._coordinates[b - 1] || 0),
          c);
    }),
    (e.prototype.duration = function (a, b, c) {
      return (
        Math.min(Math.max(Math.abs(b - a), 1), 6) *
        Math.abs(c || this.settings.smartSpeed)
      );
    }),
    (e.prototype.to = function (c, d) {
      if (this.settings.loop) {
        var e = c - this.relative(this.current()),
          f = this.current(),
          g = this.current(),
          h = this.current() + e,
          i = 0 > g - h ? !0 : !1,
          j = this._clones.length + this._items.length;
        h < this.settings.items && i === !1
          ? ((f = g + this._items.length), this.reset(f))
          : h >= j - this.settings.items &&
            i === !0 &&
            ((f = g - this._items.length), this.reset(f)),
          b.clearTimeout(this.e._goToLoop),
          (this.e._goToLoop = b.setTimeout(
            a.proxy(function () {
              this.speed(this.duration(this.current(), f + e, d)),
                this.current(f + e),
                this.update();
            }, this),
            30
          ));
      } else
        this.speed(this.duration(this.current(), c, d)),
          this.current(c),
          this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.transitionEnd = function (a) {
      return a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
        ? !1
        : ((this.state.inMotion = !1), void this.trigger("translated"));
    }),
    (e.prototype.viewport = function () {
      var d;
      if (this.options.responsiveBaseElement !== b)
        d = a(this.options.responsiveBaseElement).width();
      else if (b.innerWidth) d = b.innerWidth;
      else {
        if (!c.documentElement || !c.documentElement.clientWidth)
          throw "Can not detect viewport width.";
        d = c.documentElement.clientWidth;
      }
      return d;
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .andSelf("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          a.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (e.prototype.add = function (a, b) {
      (b = b === d ? this._items.length : this.normalize(b, !0)),
        this.trigger("add", { content: a, position: b }),
        0 === this._items.length || b === this._items.length
          ? (this.$stage.append(a),
            this._items.push(a),
            this._mergers.push(
              1 *
                a
                  .find("[data-merge]")
                  .andSelf("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[b].before(a),
            this._items.splice(b, 0, a),
            this._mergers.splice(
              b,
              0,
              1 *
                a
                  .find("[data-merge]")
                  .andSelf("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this.invalidate("items"),
        this.trigger("added", { content: a, position: b });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)),
        a !== d &&
          (this.trigger("remove", { content: this._items[a], position: a }),
          this._items[a].remove(),
          this._items.splice(a, 1),
          this._mergers.splice(a, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.addTriggerableEvents = function () {
      var b = a.proxy(function (b, c) {
        return a.proxy(function (a) {
          a.relatedTarget !== this &&
            (this.suppress([c]),
            b.apply(this, [].slice.call(arguments, 1)),
            this.release([c]));
        }, this);
      }, this);
      a.each(
        {
          next: this.next,
          prev: this.prev,
          to: this.to,
          destroy: this.destroy,
          refresh: this.refresh,
          replace: this.replace,
          add: this.add,
          remove: this.remove,
        },
        a.proxy(function (a, c) {
          this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"));
        }, this)
      );
    }),
    (e.prototype.watchVisibility = function () {
      function c(a) {
        return a.offsetWidth > 0 && a.offsetHeight > 0;
      }
      function d() {
        c(this.$element.get(0)) &&
          (this.$element.removeClass("owl-hidden"),
          this.refresh(),
          b.clearInterval(this.e._checkVisibile));
      }
      c(this.$element.get(0)) ||
        (this.$element.addClass("owl-hidden"),
        b.clearInterval(this.e._checkVisibile),
        (this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500)));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      var c, d, e, f;
      (c = 0),
        (d = this),
        b.each(function (g, h) {
          (e = a(h)),
            (f = new Image()),
            (f.onload = function () {
              c++,
                e.attr("src", f.src),
                e.css("opacity", 1),
                c >= b.length && ((d.state.imagesLoaded = !0), d.initialize());
            }),
            (f.src =
              e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"));
        });
    }),
    (e.prototype.destroy = function () {
      this.$element.hasClass(this.settings.themeClass) &&
        this.$element.removeClass(this.settings.themeClass),
        this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"),
        this.transitionEndVendor &&
          this.off(
            this.$stage.get(0),
            this.transitionEndVendor,
            this.e._transitionEnd
          );
      for (var d in this._plugins) this._plugins[d].destroy();
      (this.settings.mouseDrag || this.settings.touchDrag) &&
        (this.$stage.off("mousedown touchstart touchcancel"),
        a(c).off(".owl.dragEvents"),
        (this.$stage.get(0).onselectstart = function () {}),
        this.$stage.off("dragstart", function () {
          return !1;
        })),
        this.$element.off(".owl"),
        this.$stage.children(".cloned").remove(),
        (this.e = null),
        this.$element.removeData("owlCarousel"),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.unwrap();
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : c > a;
        case ">":
          return d ? c > a : a > c;
        case ">=":
          return d ? c >= a : a >= c;
        case "<=":
          return d ? a >= c : c >= a;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d) {
      var e = { item: { count: this._items.length, index: this.current() } },
        f = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        g = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, e, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(g);
          }),
          this.$element.trigger(g),
          this.settings &&
            "function" == typeof this.settings[f] &&
            this.settings[f].apply(this, g)),
        g
      );
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.browserSupport = function () {
      if (((this.support3d = j()), this.support3d)) {
        this.transformVendor = i();
        var a = [
          "transitionend",
          "webkitTransitionEnd",
          "transitionend",
          "oTransitionEnd",
        ];
        (this.transitionEndVendor = a[h()]),
          (this.vendorName = this.transformVendor.replace(/Transform/i, "")),
          (this.vendorName =
            "" !== this.vendorName
              ? "-" + this.vendorName.toLowerCase() + "-"
              : "");
      }
      this.state.orientation = b.orientation;
    }),
    (a.fn.owlCarousel = function (b) {
      return this.each(function () {
        a(this).data("owlCarousel") ||
          a(this).data("owlCarousel", new e(this, b));
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b) {
    var c = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel": a.proxy(function (b) {
            if (
              b.namespace &&
              this._core.settings &&
              this._core.settings.lazyLoad &&
              ((b.property && "position" == b.property.name) ||
                "initialized" == b.type)
            )
              for (
                var c = this._core.settings,
                  d = (c.center && Math.ceil(c.items / 2)) || c.items,
                  e = (c.center && -1 * d) || 0,
                  f =
                    ((b.property && b.property.value) || this._core.current()) +
                    e,
                  g = this._core.clones().length,
                  h = a.proxy(function (a, b) {
                    this.load(b);
                  }, this);
                e++ < d;

              )
                this.load(g / 2 + this._core.relative(f)),
                  g && a.each(this._core.clones(this._core.relative(f++)), h);
          }, this),
        }),
        (this._core.options = a.extend({}, c.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (c.Defaults = { lazyLoad: !1 }),
      (c.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        "background-image": "url(" + g + ")",
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (c.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = c);
  })(window.Zepto || window.jQuery, window, document),
  (function (a) {
    var b = function (c) {
      (this._core = c),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function () {
            this._core.settings.autoHeight && this.update();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            this._core.settings.autoHeight &&
              "position" == a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass) ===
                this._core.$stage.children().eq(this._core.current()) &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, b.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (b.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (b.prototype.update = function () {
        this._core.$stage
          .parent()
          .height(
            this._core.$stage.children().eq(this._core.current()).height()
          )
          .addClass(this._core.settings.autoHeightClass);
      }),
      (b.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c) {
    var d = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._fullscreen = !1),
        (this._handlers = {
          "resize.owl.carousel": a.proxy(function (a) {
            this._core.settings.video &&
              !this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
            this._playing && this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            var c = a(b.content).find(".owl-video");
            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
          }, this),
        }),
        (this._core.options = a.extend({}, d.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (d.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (d.prototype.fetch = function (a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
          d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else {
          if (!(d[3].indexOf("vimeo") > -1))
            throw new Error("Video URL not supported.");
          c = "vimeo";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (d.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"'
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (a) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? '<div class="owl-video-tn ' +
                  j +
                  '" ' +
                  i +
                  '="' +
                  a +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  a +
                  ')"></div>'),
              b.after(d),
              b.after(e);
          };
        return (
          b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length
            ? (l(h.attr(i)), h.remove(), !1)
            : void ("youtube" === c.type
                ? ((f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg"),
                  l(f))
                : "vimeo" === c.type &&
                  a.ajax({
                    type: "GET",
                    url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (a) {
                      (f = a[0].thumbnail_large), l(f);
                    },
                  }))
        );
      }),
      (d.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null);
      }),
      (d.prototype.play = function (b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c,
          d,
          e = a(b.target || b.srcElement),
          f = e.closest("." + this._core.settings.itemClass),
          g = this._videos[f.attr("data-video")],
          h = g.width || "100%",
          i = g.height || this._core.$stage.height();
        "youtube" === g.type
          ? (c =
              '<iframe width="' +
              h +
              '" height="' +
              i +
              '" src="http://www.youtube.com/embed/' +
              g.id +
              "?autoplay=1&v=" +
              g.id +
              '" frameborder="0" allowfullscreen></iframe>')
          : "vimeo" === g.type &&
            (c =
              '<iframe src="http://player.vimeo.com/video/' +
              g.id +
              '?autoplay=1" width="' +
              h +
              '" height="' +
              i +
              '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
          f.addClass("owl-video-playing"),
          (this._playing = f),
          (d = a(
            '<div style="height:' +
              i +
              "px; width:" +
              h +
              'px" class="owl-video-frame">' +
              c +
              "</div>"
          )),
          e.after(d);
      }),
      (d.prototype.isInFullScreen = function () {
        var d =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return (
          d &&
            a(d).parent().hasClass("owl-video-frame") &&
            (this._core.speed(0), (this._fullscreen = !0)),
          d && this._fullscreen && this._playing
            ? !1
            : this._fullscreen
            ? ((this._fullscreen = !1), !1)
            : this._playing && this._core.state.orientation !== b.orientation
            ? ((this._core.state.orientation = b.orientation), !1)
            : !0
        );
      }),
      (d.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = d);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            a.proxy(function (a) {
              this.swapping = "translated" == a.type;
            }, this),
          "translate.owl.carousel": a.proxy(function () {
            this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)
                .one(
                  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                  c
                )),
            f &&
              e
                .addClass("animated owl-animated-in")
                .addClass(f)
                .one(
                  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                  c
                ));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.transitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c) {
    var d = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, d.Defaults, this.core.options)),
        (this.handlers = {
          "translated.owl.carousel refreshed.owl.carousel": a.proxy(
            function () {
              this.autoplay();
            },
            this
          ),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function () {
            this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this.core.settings.autoplayHoverPause && this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this.core.settings.autoplayHoverPause && this.autoplay();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (d.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (d.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay
          ? (b.clearInterval(this.interval),
            (this.interval = b.setInterval(
              a.proxy(function () {
                this.play();
              }, this),
              this.core.settings.autoplayTimeout
            )))
          : b.clearInterval(this.interval);
      }),
      (d.prototype.play = function () {
        return c.hidden === !0 ||
          this.core.state.isTouch ||
          this.core.state.isScrolling ||
          this.core.state.isSwiping ||
          this.core.state.inMotion
          ? void 0
          : this.core.settings.autoplay === !1
          ? void b.clearInterval(this.interval)
          : void this.core.next(this.core.settings.autoplaySpeed);
      }),
      (d.prototype.stop = function () {
        b.clearInterval(this.interval);
      }),
      (d.prototype.pause = function () {
        b.clearInterval(this.interval);
      }),
      (d.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = d);
  })(window.Zepto || window.jQuery, window, document),
  (function (a) {
    "use strict";
    var b = function (c) {
      (this._core = c),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            this._core.settings.dotsData &&
              this._templates.push(
                a(b.content)
                  .find("[data-dot]")
                  .andSelf("[data-dot]")
                  .attr("data-dot")
              );
          }, this),
          "add.owl.carousel": a.proxy(function (b) {
            this._core.settings.dotsData &&
              this._templates.splice(
                b.position,
                0,
                a(b.content)
                  .find("[data-dot]")
                  .andSelf("[data-dot]")
                  .attr("data-dot")
              );
          }, this),
          "remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) {
            this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "change.owl.carousel": a.proxy(function (a) {
            if (
              "position" == a.property.name &&
              !this._core.state.revert &&
              !this._core.settings.loop &&
              this._core.settings.navRewind
            ) {
              var b = this._core.current(),
                c = this._core.maximum(),
                d = this._core.minimum();
              a.data =
                a.property.value > c
                  ? b >= c
                    ? d
                    : c
                  : a.property.value < d
                  ? c
                  : a.property.value;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            "position" == a.property.name && this.draw();
          }, this),
          "refreshed.owl.carousel": a.proxy(function () {
            this._initialized || (this.initialize(), (this._initialized = !0)),
              this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation");
          }, this),
        }),
        (this._core.options = a.extend({}, b.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (b.Defaults = {
      nav: !1,
      navRewind: !0,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
      controlsClass: "owl-controls",
    }),
      (b.prototype.initialize = function () {
        var b,
          c,
          d = this._core.settings;
        d.dotsData ||
          (this._templates = [
            a("<div>")
              .addClass(d.dotClass)
              .append(a("<span>"))
              .prop("outerHTML"),
          ]),
          (d.navContainer && d.dotsContainer) ||
            (this._controls.$container = a("<div>")
              .addClass(d.controlsClass)
              .appendTo(this.$element)),
          (this._controls.$indicators = d.dotsContainer
            ? a(d.dotsContainer)
            : a("<div>")
                .hide()
                .addClass(d.dotsClass)
                .appendTo(this._controls.$container)),
          this._controls.$indicators.on(
            "click",
            "div",
            a.proxy(function (b) {
              var c = a(b.target).parent().is(this._controls.$indicators)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(c, d.dotsSpeed);
            }, this)
          ),
          (b = d.navContainer
            ? a(d.navContainer)
            : a("<div>")
                .addClass(d.navContainerClass)
                .prependTo(this._controls.$container)),
          (this._controls.$next = a("<" + d.navElement + ">")),
          (this._controls.$previous = this._controls.$next.clone()),
          this._controls.$previous
            .addClass(d.navClass[0])
            .html(d.navText[0])
            .hide()
            .prependTo(b)
            .on(
              "click",
              a.proxy(function () {
                this.prev(d.navSpeed);
              }, this)
            ),
          this._controls.$next
            .addClass(d.navClass[1])
            .html(d.navText[1])
            .hide()
            .appendTo(b)
            .on(
              "click",
              a.proxy(function () {
                this.next(d.navSpeed);
              }, this)
            );
        for (c in this._overrides) this._core[c] = a.proxy(this[c], this);
      }),
      (b.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (b.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.settings,
          e = this._core.clones().length / 2,
          f = e + this._core.items().length,
          g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if (
          ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)),
          d.dots || "page" == d.slideBy)
        )
          for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)
            (b >= g || 0 === b) &&
              (this._pages.push({ start: a - e, end: a - e + g - 1 }),
              (b = 0),
              ++c),
              (b += this._core.mergers(this._core.relative(a)));
      }),
      (b.prototype.draw = function () {
        var b,
          c,
          d = "",
          e = this._core.settings,
          f =
            (this._core.$stage.children(),
            this._core.relative(this._core.current()));
        if (
          (!e.nav ||
            e.loop ||
            e.navRewind ||
            (this._controls.$previous.toggleClass("disabled", 0 >= f),
            this._controls.$next.toggleClass(
              "disabled",
              f >= this._core.maximum()
            )),
          this._controls.$previous.toggle(e.nav),
          this._controls.$next.toggle(e.nav),
          e.dots)
        ) {
          if (
            ((b =
              this._pages.length -
              this._controls.$indicators.children().length),
            e.dotData && 0 !== b)
          ) {
            for (c = 0; c < this._controls.$indicators.children().length; c++)
              d += this._templates[this._core.relative(c)];
            this._controls.$indicators.html(d);
          } else
            b > 0
              ? ((d = new Array(b + 1).join(this._templates[0])),
                this._controls.$indicators.append(d))
              : 0 > b &&
                this._controls.$indicators.children().slice(b).remove();
          this._controls.$indicators.find(".active").removeClass("active"),
            this._controls.$indicators
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active");
        }
        this._controls.$indicators.toggle(e.dots);
      }),
      (b.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items),
        };
      }),
      (b.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(this._pages, function (a) {
            return a.start <= b && a.end >= b;
          })
          .pop();
      }),
      (b.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (b.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (b.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (b.prototype.to = function (b, c, d) {
        var e;
        d
          ? a.proxy(this._overrides.to, this._core)(b, c)
          : ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ));
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = b);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b) {
    "use strict";
    var c = function (d) {
      (this._core = d),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function () {
            "URLHash" == this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            var c = a(b.content)
              .find("[data-hash]")
              .andSelf("[data-hash]")
              .attr("data-hash");
            this._hashes[c] = b.content;
          }, this),
        }),
        (this._core.options = a.extend({}, c.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function () {
            var a = b.location.hash.substring(1),
              c = this._core.$stage.children(),
              d = (this._hashes[a] && c.index(this._hashes[a])) || 0;
            return a ? void this._core.to(d, !1, !0) : !1;
          }, this)
        );
    };
    (c.Defaults = { URLhashListener: !1 }),
      (c.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = c);
  })(window.Zepto || window.jQuery, window, document);
!(function (a, b, c, d) {
  "use strict";
  var e = a.fn.twbsPagination,
    f = function (b, c) {
      if (
        ((this.$element = a(b)),
        (this.options = a.extend({}, a.fn.twbsPagination.defaults, c)),
        this.options.startPage < 1 ||
          this.options.startPage > this.options.totalPages)
      )
        throw new Error("Start page option is incorrect");
      if (
        ((this.options.totalPages = parseInt(this.options.totalPages)),
        isNaN(this.options.totalPages))
      )
        throw new Error("Total pages option is not correct!");
      if (
        ((this.options.visiblePages = parseInt(this.options.visiblePages)),
        isNaN(this.options.visiblePages))
      )
        throw new Error("Visible pages option is not correct!");
      if (
        (this.options.onPageClick instanceof Function &&
          this.$element.first().on("page", this.options.onPageClick),
        this.options.hideOnlyOnePage && 1 == this.options.totalPages)
      )
        return this.$element.trigger("page", 1), this;
      this.options.totalPages < this.options.visiblePages &&
        (this.options.visiblePages = this.options.totalPages),
        this.options.href &&
          ((this.options.startPage = this.getPageFromQueryString()),
          this.options.startPage || (this.options.startPage = 1));
      var d =
        "function" == typeof this.$element.prop
          ? this.$element.prop("tagName")
          : this.$element.attr("tagName");
      return (
        "UL" === d
          ? (this.$listContainer = this.$element)
          : (this.$listContainer = a("<ul></ul>")),
        this.$listContainer.addClass(this.options.paginationClass),
        "UL" !== d && this.$element.append(this.$listContainer),
        this.options.initiateStartPageClick
          ? this.show(this.options.startPage)
          : ((this.currentPage = this.options.startPage),
            this.render(this.getPages(this.options.startPage)),
            this.setupEvents()),
        this
      );
    };
  (f.prototype = {
    constructor: f,
    destroy: function () {
      return (
        this.$element.empty(),
        this.$element.removeData("twbs-pagination"),
        this.$element.off("page"),
        this
      );
    },
    show: function (a) {
      if (a < 1 || a > this.options.totalPages)
        throw new Error("Page is incorrect.");
      return (
        (this.currentPage = a),
        this.render(this.getPages(a)),
        this.setupEvents(),
        this.$element.trigger("page", a),
        this
      );
    },
    enable: function () {
      this.show(this.currentPage);
    },
    disable: function () {
      var b = this;
      this.$listContainer.off("click").on("click", "li", function (a) {
        a.preventDefault();
      }),
        this.$listContainer.children().each(function () {
          var c = a(this);
          c.hasClass(b.options.activeClass) ||
            a(this).addClass(b.options.disabledClass);
        });
    },
    buildListItems: function (a) {
      var b = [];
      if (
        (this.options.first && b.push(this.buildItem("first", 1)),
        this.options.prev)
      ) {
        var c =
          a.currentPage > 1
            ? a.currentPage - 1
            : this.options.loop
            ? this.options.totalPages
            : 1;
        b.push(this.buildItem("prev", c));
      }
      for (var d = 0; d < a.numeric.length; d++)
        b.push(this.buildItem("page", a.numeric[d]));
      if (this.options.next) {
        var e =
          a.currentPage < this.options.totalPages
            ? a.currentPage + 1
            : this.options.loop
            ? 1
            : this.options.totalPages;
        b.push(this.buildItem("next", e));
      }
      return (
        this.options.last &&
          b.push(this.buildItem("last", this.options.totalPages)),
        b
      );
    },
    buildItem: function (b, c) {
      var d = a("<li></li>"),
        e = a("<a></a>"),
        f = this.options[b] ? this.makeText(this.options[b], c) : c;
      return (
        d.addClass(this.options[b + "Class"]),
        d.data("page", c),
        d.data("page-type", b),
        d.append(
          e
            .attr("href", this.makeHref(c))
            .addClass(this.options.anchorClass)
            .html(f)
        ),
        d
      );
    },
    getPages: function (a) {
      var b = [],
        c = Math.floor(this.options.visiblePages / 2),
        d = a - c + 1 - (this.options.visiblePages % 2),
        e = a + c;
      d <= 0 && ((d = 1), (e = this.options.visiblePages)),
        e > this.options.totalPages &&
          ((d = this.options.totalPages - this.options.visiblePages + 1),
          (e = this.options.totalPages));
      for (var f = d; f <= e; ) b.push(f), f++;
      return { currentPage: a, numeric: b };
    },
    render: function (b) {
      var c = this;
      this.$listContainer.children().remove();
      var d = this.buildListItems(b);
      a.each(d, function (a, b) {
        c.$listContainer.append(b);
      }),
        this.$listContainer.children().each(function () {
          var d = a(this),
            e = d.data("page-type");
          switch (e) {
            case "page":
              d.data("page") === b.currentPage &&
                d.addClass(c.options.activeClass);
              break;
            case "first":
              d.toggleClass(c.options.disabledClass, 1 === b.currentPage);
              break;
            case "last":
              d.toggleClass(
                c.options.disabledClass,
                b.currentPage === c.options.totalPages
              );
              break;
            case "prev":
              d.toggleClass(
                c.options.disabledClass,
                !c.options.loop && 1 === b.currentPage
              );
              break;
            case "next":
              d.toggleClass(
                c.options.disabledClass,
                !c.options.loop && b.currentPage === c.options.totalPages
              );
          }
        });
    },
    setupEvents: function () {
      var b = this;
      this.$listContainer.off("click").on("click", "li", function (c) {
        var d = a(this);
        return (
          !d.hasClass(b.options.disabledClass) &&
          !d.hasClass(b.options.activeClass) &&
          (!b.options.href && c.preventDefault(),
          void b.show(parseInt(d.data("page"))))
        );
      });
    },
    makeHref: function (a) {
      return this.options.href ? this.generateQueryString(a) : "#";
    },
    makeText: function (a, b) {
      return a
        .replace(this.options.pageVariable, b)
        .replace(this.options.totalPagesVariable, this.options.totalPages);
    },
    getPageFromQueryString: function (a) {
      var b = this.getSearchString(a),
        c = new RegExp(this.options.pageVariable + "(=([^&#]*)|&|#|$)"),
        d = c.exec(b);
      return d && d[2]
        ? ((d = decodeURIComponent(d[2])),
          (d = parseInt(d)),
          isNaN(d) ? null : d)
        : null;
    },
    generateQueryString: function (a, b) {
      var c = this.getSearchString(b),
        d = new RegExp(this.options.pageVariable + "=*[^&#]*");
      return c ? "?" + c.replace(d, this.options.pageVariable + "=" + a) : "";
    },
    getSearchString: function (a) {
      var c = a || b.location.search;
      return "" === c ? null : (0 === c.indexOf("?") && (c = c.substr(1)), c);
    },
    getCurrentPage: function () {
      return this.currentPage;
    },
  }),
    (a.fn.twbsPagination = function (b) {
      var c,
        e = Array.prototype.slice.call(arguments, 1),
        g = a(this),
        h = g.data("twbs-pagination"),
        i = "object" == typeof b ? b : {};
      return (
        h || g.data("twbs-pagination", (h = new f(this, i))),
        "string" == typeof b && (c = h[b].apply(h, e)),
        c === d ? g : c
      );
    }),
    (a.fn.twbsPagination.defaults = {
      totalPages: 1,
      startPage: 1,
      visiblePages: 5,
      initiateStartPageClick: !0,
      hideOnlyOnePage: !1,
      href: !1,
      pageVariable: "{{page}}",
      totalPagesVariable: "{{total_pages}}",
      page: null,
      first: "First",
      prev: "Previous",
      next: "Next",
      last: "Last",
      loop: !1,
      onPageClick: null,
      paginationClass: "pagination",
      nextClass: "page-item next",
      prevClass: "page-item prev",
      lastClass: "page-item last",
      firstClass: "page-item first",
      pageClass: "page-item",
      activeClass: "active",
      disabledClass: "disabled",
      anchorClass: "page-link",
    }),
    (a.fn.twbsPagination.Constructor = f),
    (a.fn.twbsPagination.noConflict = function () {
      return (a.fn.twbsPagination = e), this;
    }),
    (a.fn.twbsPagination.version = "1.4.1");
})(window.jQuery, window, document);
