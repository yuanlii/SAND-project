/*! For license information please see 2.35d013.chunk.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    25: function(A, e, t) {
      "use strict";
      var r = {};
      try {
        !(function(A, e) {
          if (
            "+" !== new A("q=%2B").get("q") ||
            "+" !== new A({ q: "+" }).get("q") ||
            "+" !== new A([["q", "+"]]).get("q") ||
            "q=%0A" !== new A("q=\n").toString() ||
            "q=+%26" !== new A({ q: " &" }).toString()
          )
            throw A;
          r.URLSearchParams = A;
        })(URLSearchParams);
      } catch (A) {
        !(function(A, e, t) {
          var n = A.create,
            B = A.defineProperty,
            s = /[!'\(\)~]|%20|%00/g,
            o = /\+/g,
            i = {
              "!": "%21",
              "'": "%27",
              "(": "%28",
              ")": "%29",
              "~": "%7E",
              "%20": "+",
              "%00": "\0"
            },
            a = {
              append: function(A, e) {
                w(this._ungap, A, e);
              },
              delete: function(A) {
                delete this._ungap[A];
              },
              get: function(A) {
                return this.has(A) ? this._ungap[A][0] : null;
              },
              getAll: function(A) {
                return this.has(A) ? this._ungap[A].slice(0) : [];
              },
              has: function(A) {
                return A in this._ungap;
              },
              set: function(A, t) {
                this._ungap[A] = [e(t)];
              },
              forEach: function(A, t) {
                var r = this;
                for (var n in r._ungap) r._ungap[n].forEach(B, n);
                function B(B) {
                  A.call(t, B, e(n), r);
                }
              },
              toJSON: function() {
                return {};
              },
              toString: function() {
                var A = [];
                for (var e in this._ungap)
                  for (
                    var t = l(e), r = 0, n = this._ungap[e];
                    r < n.length;
                    r++
                  )
                    A.push(t + "=" + l(n[r]));
                return A.join("&");
              }
            };
          for (var c in a)
            B(Q.prototype, c, { configurable: !0, writable: !0, value: a[c] });
          function Q(A) {
            var e = n(null);
            switch ((B(this, "_ungap", { value: e }), !0)) {
              case !A:
                break;
              case "string" == typeof A:
                "?" === A.charAt(0) && (A = A.slice(1));
                for (var r = A.split("&"), s = 0, o = r.length; s < o; s++) {
                  var i = (a = r[s]).indexOf("=");
                  -1 < i
                    ? w(e, U(a.slice(0, i)), U(a.slice(i + 1)))
                    : a.length && w(e, U(a), "");
                }
                break;
              case t(A):
                for (s = 0, o = A.length; s < o; s++) {
                  var a;
                  w(e, (a = A[s])[0], a[1]);
                }
                break;
              case "forEach" in A:
                A.forEach(u, e);
                break;
              default:
                for (var c in A) w(e, c, A[c]);
            }
          }
          function u(A, e) {
            w(this, e, A);
          }
          function w(A, e, r) {
            var n = t(r) ? r.join(",") : r;
            e in A ? A[e].push(n) : (A[e] = [n]);
          }
          function U(A) {
            return decodeURIComponent(A.replace(o, " "));
          }
          function l(A) {
            return encodeURIComponent(A).replace(s, C);
          }
          function C(A) {
            return i[A];
          }
          r.URLSearchParams = Q;
        })(Object, String, Array.isArray);
      }
      !(function(A) {
        var e = !1;
        try {
          e = !!Symbol.iterator;
        } catch (A) {}
        function t(A, t) {
          var r = [];
          return (
            A.forEach(t, r),
            e
              ? r[Symbol.iterator]()
              : {
                  next: function() {
                    var A = r.shift();
                    return { done: void 0 === A, value: A };
                  }
                }
          );
        }
        "forEach" in A ||
          (A.forEach = function(A, e) {
            var t = this,
              r = Object.create(null);
            this.toString()
              .replace(/=[\s\S]*?(?:&|$)/g, "=")
              .split("=")
              .forEach(function(n) {
                !n.length ||
                  n in r ||
                  (r[n] = t.getAll(n)).forEach(function(r) {
                    A.call(e, r, n, t);
                  });
              });
          }),
          "keys" in A ||
            (A.keys = function() {
              return t(this, function(A, e) {
                this.push(e);
              });
            }),
          "values" in A ||
            (A.values = function() {
              return t(this, function(A, e) {
                this.push(A);
              });
            }),
          "entries" in A ||
            (A.entries = function() {
              return t(this, function(A, e) {
                this.push([e, A]);
              });
            }),
          !e || Symbol.iterator in A || (A[Symbol.iterator] = A.entries),
          "sort" in A ||
            (A.sort = function() {
              for (
                var A,
                  e,
                  t,
                  r = this.entries(),
                  n = r.next(),
                  B = n.done,
                  s = [],
                  o = Object.create(null);
                !B;

              )
                (e = (t = n.value)[0]),
                  s.push(e),
                  e in o || (o[e] = []),
                  o[e].push(t[1]),
                  (B = (n = r.next()).done);
              for (s.sort(), A = 0; A < s.length; A++) this.delete(s[A]);
              for (A = 0; A < s.length; A++)
                (e = s[A]), this.append(e, o[e].shift());
            }),
          (function(e) {
            var t = e.defineProperty,
              r = e.getOwnPropertyDescriptor,
              n = function(e) {
                var t = e.append;
                (e.append = A.append),
                  URLSearchParams.call(e, e._usp.search.slice(1)),
                  (e.append = t);
              },
              B = function(A, e) {
                if (!(A instanceof e))
                  throw new TypeError(
                    "'searchParams' accessed on an object that does not implement interface " +
                      e.name
                  );
              },
              s = function(s) {
                var o,
                  i,
                  a = s.prototype,
                  c = r(a, "searchParams"),
                  Q = r(a, "href"),
                  u = r(a, "search");
                !c &&
                  u &&
                  u.set &&
                  ((i = (function(e) {
                    function r(t, r) {
                      A.append.call(this, t, r),
                        (t = this.toString()),
                        e.set.call(this._usp, t ? "?" + t : "");
                    }
                    function n(t) {
                      A.delete.call(this, t),
                        (t = this.toString()),
                        e.set.call(this._usp, t ? "?" + t : "");
                    }
                    function B(t, r) {
                      A.set.call(this, t, r),
                        (t = this.toString()),
                        e.set.call(this._usp, t ? "?" + t : "");
                    }
                    return function(A, e) {
                      return (
                        (A.append = r),
                        (A.delete = n),
                        (A.set = B),
                        t(A, "_usp", {
                          configurable: !0,
                          writable: !0,
                          value: e
                        })
                      );
                    };
                  })(u)),
                  (o = function(A, e) {
                    return (
                      t(A, "_searchParams", {
                        configurable: !0,
                        writable: !0,
                        value: i(e, A)
                      }),
                      e
                    );
                  }),
                  e.defineProperties(a, {
                    href: {
                      get: function() {
                        return Q.get.call(this);
                      },
                      set: function(A) {
                        var e = this._searchParams;
                        Q.set.call(this, A), e && n(e);
                      }
                    },
                    search: {
                      get: function() {
                        return u.get.call(this);
                      },
                      set: function(A) {
                        var e = this._searchParams;
                        u.set.call(this, A), e && n(e);
                      }
                    },
                    searchParams: {
                      get: function() {
                        return (
                          B(this, s),
                          this._searchParams ||
                            o(this, new URLSearchParams(this.search.slice(1)))
                        );
                      },
                      set: function(A) {
                        B(this, s), o(this, A);
                      }
                    }
                  }));
              };
            try {
              s(HTMLAnchorElement),
                /^function|object$/.test(typeof URL) && URL.prototype && s(URL);
            } catch (A) {}
          })(Object);
      })(r.URLSearchParams.prototype, Object),
        (e.a = r.URLSearchParams);
    },
    26: function(A, e, t) {
      A.exports = (function() {
        "use strict";
        var A = function(e, t) {
          return (A =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(A, e) {
                A.__proto__ = e;
              }) ||
            function(A, e) {
              for (var t in e) e.hasOwnProperty(t) && (A[t] = e[t]);
            })(e, t);
        };
        function e(e, t) {
          function r() {
            this.constructor = e;
          }
          A(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        }
        var t = function() {
          return (t =
            Object.assign ||
            function(A) {
              for (var e, t = 1, r = arguments.length; t < r; t++)
                for (var n in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
              return A;
            }).apply(this, arguments);
        };
        function r(A, e, t, r) {
          return new (t || (t = Promise))(function(n, B) {
            function s(A) {
              try {
                i(r.next(A));
              } catch (A) {
                B(A);
              }
            }
            function o(A) {
              try {
                i(r.throw(A));
              } catch (A) {
                B(A);
              }
            }
            function i(A) {
              A.done
                ? n(A.value)
                : new t(function(e) {
                    e(A.value);
                  }).then(s, o);
            }
            i((r = r.apply(A, e || [])).next());
          });
        }
        function n(A, e) {
          var t,
            r,
            n,
            B,
            s = {
              label: 0,
              sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1];
              },
              trys: [],
              ops: []
            };
          return (
            (B = { next: o(0), throw: o(1), return: o(2) }),
            "function" == typeof Symbol &&
              (B[Symbol.iterator] = function() {
                return this;
              }),
            B
          );
          function o(B) {
            return function(o) {
              return (function(B) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((t = 1),
                      r &&
                        (n =
                          2 & B[0]
                            ? r.return
                            : B[0]
                            ? r.throw || ((n = r.return) && n.call(r), 0)
                            : r.next) &&
                        !(n = n.call(r, B[1])).done)
                    )
                      return n;
                    switch (((r = 0), n && (B = [2 & B[0], n.value]), B[0])) {
                      case 0:
                      case 1:
                        n = B;
                        break;
                      case 4:
                        return s.label++, { value: B[1], done: !1 };
                      case 5:
                        s.label++, (r = B[1]), (B = [0]);
                        continue;
                      case 7:
                        (B = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(n = (n = s.trys).length > 0 && n[n.length - 1]) &&
                          (6 === B[0] || 2 === B[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === B[0] &&
                          (!n || (B[1] > n[0] && B[1] < n[3]))
                        ) {
                          s.label = B[1];
                          break;
                        }
                        if (6 === B[0] && s.label < n[1]) {
                          (s.label = n[1]), (n = B);
                          break;
                        }
                        if (n && s.label < n[2]) {
                          (s.label = n[2]), s.ops.push(B);
                          break;
                        }
                        n[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    B = e.call(A, s);
                  } catch (A) {
                    (B = [6, A]), (r = 0);
                  } finally {
                    t = n = 0;
                  }
                if (5 & B[0]) throw B[1];
                return { value: B[0] ? B[1] : void 0, done: !0 };
              })([B, o]);
            };
          }
        }
        for (
          var B = (function() {
              function A(A, e, t, r) {
                (this.left = A),
                  (this.top = e),
                  (this.width = t),
                  (this.height = r);
              }
              return (
                (A.prototype.add = function(e, t, r, n) {
                  return new A(
                    this.left + e,
                    this.top + t,
                    this.width + r,
                    this.height + n
                  );
                }),
                (A.fromClientRect = function(e) {
                  return new A(e.left, e.top, e.width, e.height);
                }),
                A
              );
            })(),
            s = function(A) {
              return B.fromClientRect(A.getBoundingClientRect());
            },
            o = function(A) {
              for (var e = [], t = 0, r = A.length; t < r; ) {
                var n = A.charCodeAt(t++);
                if (n >= 55296 && n <= 56319 && t < r) {
                  var B = A.charCodeAt(t++);
                  56320 == (64512 & B)
                    ? e.push(((1023 & n) << 10) + (1023 & B) + 65536)
                    : (e.push(n), t--);
                } else e.push(n);
              }
              return e;
            },
            i = function() {
              for (var A = [], e = 0; e < arguments.length; e++)
                A[e] = arguments[e];
              if (String.fromCodePoint)
                return String.fromCodePoint.apply(String, A);
              var t = A.length;
              if (!t) return "";
              for (var r = [], n = -1, B = ""; ++n < t; ) {
                var s = A[n];
                s <= 65535
                  ? r.push(s)
                  : ((s -= 65536),
                    r.push(55296 + (s >> 10), (s % 1024) + 56320)),
                  (n + 1 === t || r.length > 16384) &&
                    ((B += String.fromCharCode.apply(String, r)),
                    (r.length = 0));
              }
              return B;
            },
            a =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            c = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
            Q = 0;
          Q < a.length;
          Q++
        )
          c[a.charCodeAt(Q)] = Q;
        var u,
          w = function(A, e, t) {
            return A.slice
              ? A.slice(e, t)
              : new Uint16Array(Array.prototype.slice.call(A, e, t));
          },
          U = (function() {
            function A(A, e, t, r, n, B) {
              (this.initialValue = A),
                (this.errorValue = e),
                (this.highStart = t),
                (this.highValueIndex = r),
                (this.index = n),
                (this.data = B);
            }
            return (
              (A.prototype.get = function(A) {
                var e;
                if (A >= 0) {
                  if (A < 55296 || (A > 56319 && A <= 65535))
                    return (
                      (e = ((e = this.index[A >> 5]) << 2) + (31 & A)),
                      this.data[e]
                    );
                  if (A <= 65535)
                    return (
                      (e =
                        ((e = this.index[2048 + ((A - 55296) >> 5)]) << 2) +
                        (31 & A)),
                      this.data[e]
                    );
                  if (A < this.highStart)
                    return (
                      (e = 2080 + (A >> 11)),
                      (e = this.index[e]),
                      (e += (A >> 5) & 63),
                      (e = ((e = this.index[e]) << 2) + (31 & A)),
                      this.data[e]
                    );
                  if (A <= 1114111) return this.data[this.highValueIndex];
                }
                return this.errorValue;
              }),
              A
            );
          })(),
          l = 10,
          C = 13,
          g = 15,
          E = 17,
          F = 18,
          h = 19,
          H = 20,
          f = 21,
          d = 22,
          p = 24,
          N = 25,
          K = 26,
          I = 27,
          m = 28,
          T = 30,
          R = 32,
          L = 33,
          v = 34,
          O = 35,
          b = 37,
          S = 38,
          D = 39,
          y = 40,
          M = 42,
          _ = "!",
          P = (function(A) {
            var e,
              t,
              r,
              n = (function(A) {
                var e,
                  t,
                  r,
                  n,
                  B,
                  s = 0.75 * A.length,
                  o = A.length,
                  i = 0;
                "=" === A[A.length - 1] &&
                  (s--, "=" === A[A.length - 2] && s--);
                var a =
                    "undefined" != typeof ArrayBuffer &&
                    "undefined" != typeof Uint8Array &&
                    void 0 !== Uint8Array.prototype.slice
                      ? new ArrayBuffer(s)
                      : new Array(s),
                  Q = Array.isArray(a) ? a : new Uint8Array(a);
                for (e = 0; e < o; e += 4)
                  (t = c[A.charCodeAt(e)]),
                    (r = c[A.charCodeAt(e + 1)]),
                    (n = c[A.charCodeAt(e + 2)]),
                    (B = c[A.charCodeAt(e + 3)]),
                    (Q[i++] = (t << 2) | (r >> 4)),
                    (Q[i++] = ((15 & r) << 4) | (n >> 2)),
                    (Q[i++] = ((3 & n) << 6) | (63 & B));
                return a;
              })(A),
              B = Array.isArray(n)
                ? (function(A) {
                    for (var e = A.length, t = [], r = 0; r < e; r += 4)
                      t.push(
                        (A[r + 3] << 24) |
                          (A[r + 2] << 16) |
                          (A[r + 1] << 8) |
                          A[r]
                      );
                    return t;
                  })(n)
                : new Uint32Array(n),
              s = Array.isArray(n)
                ? (function(A) {
                    for (var e = A.length, t = [], r = 0; r < e; r += 2)
                      t.push((A[r + 1] << 8) | A[r]);
                    return t;
                  })(n)
                : new Uint16Array(n),
              o = w(s, 12, B[4] / 2),
              i =
                2 === B[5]
                  ? w(s, (24 + B[4]) / 2)
                  : ((e = B),
                    (t = Math.ceil((24 + B[4]) / 4)),
                    e.slice
                      ? e.slice(t, r)
                      : new Uint32Array(Array.prototype.slice.call(e, t, r)));
            return new U(B[0], B[1], B[2], B[3], o, i);
          })(
            "KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"
          ),
          x = [T, 36],
          V = [1, 2, 3, 5],
          z = [l, 8],
          X = [I, K],
          J = V.concat(z),
          G = [S, D, y, v, O],
          k = [g, C],
          W = function(A, e, t, r) {
            var n = r[t];
            if (Array.isArray(A) ? -1 !== A.indexOf(n) : A === n)
              for (var B = t; B <= r.length; ) {
                if ((i = r[++B]) === e) return !0;
                if (i !== l) break;
              }
            if (n === l)
              for (B = t; B > 0; ) {
                var s = r[--B];
                if (Array.isArray(A) ? -1 !== A.indexOf(s) : A === s)
                  for (var o = t; o <= r.length; ) {
                    var i;
                    if ((i = r[++o]) === e) return !0;
                    if (i !== l) break;
                  }
                if (s !== l) break;
              }
            return !1;
          },
          Y = function(A, e) {
            for (var t = A; t >= 0; ) {
              var r = e[t];
              if (r !== l) return r;
              t--;
            }
            return 0;
          },
          q = function(A, e, t, r, n) {
            if (0 === t[r]) return "×";
            var B = r - 1;
            if (Array.isArray(n) && !0 === n[B]) return "×";
            var s = B - 1,
              o = B + 1,
              i = e[B],
              a = s >= 0 ? e[s] : 0,
              c = e[o];
            if (2 === i && 3 === c) return "×";
            if (-1 !== V.indexOf(i)) return _;
            if (-1 !== V.indexOf(c)) return "×";
            if (-1 !== z.indexOf(c)) return "×";
            if (8 === Y(B, e)) return "÷";
            if (11 === P.get(A[B]) && (c === b || c === R || c === L))
              return "×";
            if (7 === i || 7 === c) return "×";
            if (9 === i) return "×";
            if (-1 === [l, C, g].indexOf(i) && 9 === c) return "×";
            if (-1 !== [E, F, h, p, m].indexOf(c)) return "×";
            if (Y(B, e) === d) return "×";
            if (W(23, d, B, e)) return "×";
            if (W([E, F], f, B, e)) return "×";
            if (W(12, 12, B, e)) return "×";
            if (i === l) return "÷";
            if (23 === i || 23 === c) return "×";
            if (16 === c || 16 === i) return "÷";
            if (-1 !== [C, g, f].indexOf(c) || 14 === i) return "×";
            if (36 === a && -1 !== k.indexOf(i)) return "×";
            if (i === m && 36 === c) return "×";
            if (c === H && -1 !== x.concat(H, h, N, b, R, L).indexOf(i))
              return "×";
            if (
              (-1 !== x.indexOf(c) && i === N) ||
              (-1 !== x.indexOf(i) && c === N)
            )
              return "×";
            if (
              (i === I && -1 !== [b, R, L].indexOf(c)) ||
              (-1 !== [b, R, L].indexOf(i) && c === K)
            )
              return "×";
            if (
              (-1 !== x.indexOf(i) && -1 !== X.indexOf(c)) ||
              (-1 !== X.indexOf(i) && -1 !== x.indexOf(c))
            )
              return "×";
            if (
              (-1 !== [I, K].indexOf(i) &&
                (c === N || (-1 !== [d, g].indexOf(c) && e[o + 1] === N))) ||
              (-1 !== [d, g].indexOf(i) && c === N) ||
              (i === N && -1 !== [N, m, p].indexOf(c))
            )
              return "×";
            if (-1 !== [N, m, p, E, F].indexOf(c))
              for (var Q = B; Q >= 0; ) {
                if ((u = e[Q]) === N) return "×";
                if (-1 === [m, p].indexOf(u)) break;
                Q--;
              }
            if (-1 !== [I, K].indexOf(c))
              for (Q = -1 !== [E, F].indexOf(i) ? s : B; Q >= 0; ) {
                var u;
                if ((u = e[Q]) === N) return "×";
                if (-1 === [m, p].indexOf(u)) break;
                Q--;
              }
            if (
              (S === i && -1 !== [S, D, v, O].indexOf(c)) ||
              (-1 !== [D, v].indexOf(i) && -1 !== [D, y].indexOf(c)) ||
              (-1 !== [y, O].indexOf(i) && c === y)
            )
              return "×";
            if (
              (-1 !== G.indexOf(i) && -1 !== [H, K].indexOf(c)) ||
              (-1 !== G.indexOf(c) && i === I)
            )
              return "×";
            if (-1 !== x.indexOf(i) && -1 !== x.indexOf(c)) return "×";
            if (i === p && -1 !== x.indexOf(c)) return "×";
            if (
              (-1 !== x.concat(N).indexOf(i) && c === d) ||
              (-1 !== x.concat(N).indexOf(c) && i === F)
            )
              return "×";
            if (41 === i && 41 === c) {
              for (var w = t[B], U = 1; w > 0 && 41 === e[--w]; ) U++;
              if (U % 2 != 0) return "×";
            }
            return i === R && c === L ? "×" : "÷";
          },
          j = function(A, e) {
            e || (e = { lineBreak: "normal", wordBreak: "normal" });
            var t = (function(A, e) {
                void 0 === e && (e = "strict");
                var t = [],
                  r = [],
                  n = [];
                return (
                  A.forEach(function(A, B) {
                    var s = P.get(A);
                    if (
                      (s > 50 ? (n.push(!0), (s -= 50)) : n.push(!1),
                      -1 !== ["normal", "auto", "loose"].indexOf(e) &&
                        -1 !== [8208, 8211, 12316, 12448].indexOf(A))
                    )
                      return r.push(B), t.push(16);
                    if (4 === s || 11 === s) {
                      if (0 === B) return r.push(B), t.push(T);
                      var o = t[B - 1];
                      return -1 === J.indexOf(o)
                        ? (r.push(r[B - 1]), t.push(o))
                        : (r.push(B), t.push(T));
                    }
                    return (
                      r.push(B),
                      31 === s
                        ? t.push("strict" === e ? f : b)
                        : s === M
                        ? t.push(T)
                        : 29 === s
                        ? t.push(T)
                        : 43 === s
                        ? (A >= 131072 && A <= 196605) ||
                          (A >= 196608 && A <= 262141)
                          ? t.push(b)
                          : t.push(T)
                        : void t.push(s)
                    );
                  }),
                  [r, t, n]
                );
              })(A, e.lineBreak),
              r = t[0],
              n = t[1],
              B = t[2];
            return (
              ("break-all" !== e.wordBreak && "break-word" !== e.wordBreak) ||
                (n = n.map(function(A) {
                  return -1 !== [N, T, M].indexOf(A) ? b : A;
                })),
              [
                r,
                n,
                "keep-all" === e.wordBreak
                  ? B.map(function(e, t) {
                      return e && A[t] >= 19968 && A[t] <= 40959;
                    })
                  : void 0
              ]
            );
          },
          Z = (function() {
            function A(A, e, t, r) {
              (this.codePoints = A),
                (this.required = e === _),
                (this.start = t),
                (this.end = r);
            }
            return (
              (A.prototype.slice = function() {
                return i.apply(
                  void 0,
                  this.codePoints.slice(this.start, this.end)
                );
              }),
              A
            );
          })();
        !(function(A) {
          (A[(A.STRING_TOKEN = 0)] = "STRING_TOKEN"),
            (A[(A.BAD_STRING_TOKEN = 1)] = "BAD_STRING_TOKEN"),
            (A[(A.LEFT_PARENTHESIS_TOKEN = 2)] = "LEFT_PARENTHESIS_TOKEN"),
            (A[(A.RIGHT_PARENTHESIS_TOKEN = 3)] = "RIGHT_PARENTHESIS_TOKEN"),
            (A[(A.COMMA_TOKEN = 4)] = "COMMA_TOKEN"),
            (A[(A.HASH_TOKEN = 5)] = "HASH_TOKEN"),
            (A[(A.DELIM_TOKEN = 6)] = "DELIM_TOKEN"),
            (A[(A.AT_KEYWORD_TOKEN = 7)] = "AT_KEYWORD_TOKEN"),
            (A[(A.PREFIX_MATCH_TOKEN = 8)] = "PREFIX_MATCH_TOKEN"),
            (A[(A.DASH_MATCH_TOKEN = 9)] = "DASH_MATCH_TOKEN"),
            (A[(A.INCLUDE_MATCH_TOKEN = 10)] = "INCLUDE_MATCH_TOKEN"),
            (A[(A.LEFT_CURLY_BRACKET_TOKEN = 11)] = "LEFT_CURLY_BRACKET_TOKEN"),
            (A[(A.RIGHT_CURLY_BRACKET_TOKEN = 12)] =
              "RIGHT_CURLY_BRACKET_TOKEN"),
            (A[(A.SUFFIX_MATCH_TOKEN = 13)] = "SUFFIX_MATCH_TOKEN"),
            (A[(A.SUBSTRING_MATCH_TOKEN = 14)] = "SUBSTRING_MATCH_TOKEN"),
            (A[(A.DIMENSION_TOKEN = 15)] = "DIMENSION_TOKEN"),
            (A[(A.PERCENTAGE_TOKEN = 16)] = "PERCENTAGE_TOKEN"),
            (A[(A.NUMBER_TOKEN = 17)] = "NUMBER_TOKEN"),
            (A[(A.FUNCTION = 18)] = "FUNCTION"),
            (A[(A.FUNCTION_TOKEN = 19)] = "FUNCTION_TOKEN"),
            (A[(A.IDENT_TOKEN = 20)] = "IDENT_TOKEN"),
            (A[(A.COLUMN_TOKEN = 21)] = "COLUMN_TOKEN"),
            (A[(A.URL_TOKEN = 22)] = "URL_TOKEN"),
            (A[(A.BAD_URL_TOKEN = 23)] = "BAD_URL_TOKEN"),
            (A[(A.CDC_TOKEN = 24)] = "CDC_TOKEN"),
            (A[(A.CDO_TOKEN = 25)] = "CDO_TOKEN"),
            (A[(A.COLON_TOKEN = 26)] = "COLON_TOKEN"),
            (A[(A.SEMICOLON_TOKEN = 27)] = "SEMICOLON_TOKEN"),
            (A[(A.LEFT_SQUARE_BRACKET_TOKEN = 28)] =
              "LEFT_SQUARE_BRACKET_TOKEN"),
            (A[(A.RIGHT_SQUARE_BRACKET_TOKEN = 29)] =
              "RIGHT_SQUARE_BRACKET_TOKEN"),
            (A[(A.UNICODE_RANGE_TOKEN = 30)] = "UNICODE_RANGE_TOKEN"),
            (A[(A.WHITESPACE_TOKEN = 31)] = "WHITESPACE_TOKEN"),
            (A[(A.EOF_TOKEN = 32)] = "EOF_TOKEN");
        })(u || (u = {}));
        var $ = function(A) {
            return A >= 48 && A <= 57;
          },
          AA = function(A) {
            return $(A) || (A >= 65 && A <= 70) || (A >= 97 && A <= 102);
          },
          eA = function(A) {
            return 10 === A || 9 === A || 32 === A;
          },
          tA = function(A) {
            return (
              (function(A) {
                return (
                  (function(A) {
                    return A >= 97 && A <= 122;
                  })(A) ||
                  (function(A) {
                    return A >= 65 && A <= 90;
                  })(A)
                );
              })(A) ||
              (function(A) {
                return A >= 128;
              })(A) ||
              95 === A
            );
          },
          rA = function(A) {
            return tA(A) || $(A) || 45 === A;
          },
          nA = function(A) {
            return (
              (A >= 0 && A <= 8) ||
              11 === A ||
              (A >= 14 && A <= 31) ||
              127 === A
            );
          },
          BA = function(A, e) {
            return 92 === A && 10 !== e;
          },
          sA = function(A, e, t) {
            return 45 === A
              ? tA(e) || BA(e, t)
              : !!tA(A) || !(92 !== A || !BA(A, e));
          },
          oA = function(A, e, t) {
            return 43 === A || 45 === A
              ? !!$(e) || (46 === e && $(t))
              : $(46 === A ? e : A);
          },
          iA = function(A) {
            var e = 0,
              t = 1;
            (43 !== A[e] && 45 !== A[e]) || (45 === A[e] && (t = -1), e++);
            for (var r = []; $(A[e]); ) r.push(A[e++]);
            var n = r.length ? parseInt(i.apply(void 0, r), 10) : 0;
            46 === A[e] && e++;
            for (var B = []; $(A[e]); ) B.push(A[e++]);
            var s = B.length,
              o = s ? parseInt(i.apply(void 0, B), 10) : 0;
            (69 !== A[e] && 101 !== A[e]) || e++;
            var a = 1;
            (43 !== A[e] && 45 !== A[e]) || (45 === A[e] && (a = -1), e++);
            for (var c = []; $(A[e]); ) c.push(A[e++]);
            var Q = c.length ? parseInt(i.apply(void 0, c), 10) : 0;
            return t * (n + o * Math.pow(10, -s)) * Math.pow(10, a * Q);
          },
          aA = { type: u.LEFT_PARENTHESIS_TOKEN },
          cA = { type: u.RIGHT_PARENTHESIS_TOKEN },
          QA = { type: u.COMMA_TOKEN },
          uA = { type: u.SUFFIX_MATCH_TOKEN },
          wA = { type: u.PREFIX_MATCH_TOKEN },
          UA = { type: u.COLUMN_TOKEN },
          lA = { type: u.DASH_MATCH_TOKEN },
          CA = { type: u.INCLUDE_MATCH_TOKEN },
          gA = { type: u.LEFT_CURLY_BRACKET_TOKEN },
          EA = { type: u.RIGHT_CURLY_BRACKET_TOKEN },
          FA = { type: u.SUBSTRING_MATCH_TOKEN },
          hA = { type: u.BAD_URL_TOKEN },
          HA = { type: u.BAD_STRING_TOKEN },
          fA = { type: u.CDO_TOKEN },
          dA = { type: u.CDC_TOKEN },
          pA = { type: u.COLON_TOKEN },
          NA = { type: u.SEMICOLON_TOKEN },
          KA = { type: u.LEFT_SQUARE_BRACKET_TOKEN },
          IA = { type: u.RIGHT_SQUARE_BRACKET_TOKEN },
          mA = { type: u.WHITESPACE_TOKEN },
          TA = { type: u.EOF_TOKEN },
          RA = (function() {
            function A() {
              this._value = [];
            }
            return (
              (A.prototype.write = function(A) {
                this._value = this._value.concat(o(A));
              }),
              (A.prototype.read = function() {
                for (var A = [], e = this.consumeToken(); e !== TA; )
                  A.push(e), (e = this.consumeToken());
                return A;
              }),
              (A.prototype.consumeToken = function() {
                var A = this.consumeCodePoint();
                switch (A) {
                  case 34:
                    return this.consumeStringToken(34);
                  case 35:
                    var e = this.peekCodePoint(0),
                      t = this.peekCodePoint(1),
                      r = this.peekCodePoint(2);
                    if (rA(e) || BA(t, r)) {
                      var n = sA(e, t, r) ? 2 : 1,
                        B = this.consumeName();
                      return { type: u.HASH_TOKEN, value: B, flags: n };
                    }
                    break;
                  case 36:
                    if (61 === this.peekCodePoint(0))
                      return this.consumeCodePoint(), uA;
                    break;
                  case 39:
                    return this.consumeStringToken(39);
                  case 40:
                    return aA;
                  case 41:
                    return cA;
                  case 42:
                    if (61 === this.peekCodePoint(0))
                      return this.consumeCodePoint(), FA;
                    break;
                  case 43:
                    if (oA(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                      return (
                        this.reconsumeCodePoint(A), this.consumeNumericToken()
                      );
                    break;
                  case 44:
                    return QA;
                  case 45:
                    var s = A,
                      o = this.peekCodePoint(0),
                      a = this.peekCodePoint(1);
                    if (oA(s, o, a))
                      return (
                        this.reconsumeCodePoint(A), this.consumeNumericToken()
                      );
                    if (sA(s, o, a))
                      return (
                        this.reconsumeCodePoint(A), this.consumeIdentLikeToken()
                      );
                    if (45 === o && 62 === a)
                      return (
                        this.consumeCodePoint(), this.consumeCodePoint(), dA
                      );
                    break;
                  case 46:
                    if (oA(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                      return (
                        this.reconsumeCodePoint(A), this.consumeNumericToken()
                      );
                    break;
                  case 47:
                    if (42 === this.peekCodePoint(0))
                      for (this.consumeCodePoint(); ; ) {
                        var c = this.consumeCodePoint();
                        if (42 === c && 47 === (c = this.consumeCodePoint()))
                          return this.consumeToken();
                        if (-1 === c) return this.consumeToken();
                      }
                    break;
                  case 58:
                    return pA;
                  case 59:
                    return NA;
                  case 60:
                    if (
                      33 === this.peekCodePoint(0) &&
                      45 === this.peekCodePoint(1) &&
                      45 === this.peekCodePoint(2)
                    )
                      return (
                        this.consumeCodePoint(), this.consumeCodePoint(), fA
                      );
                    break;
                  case 64:
                    var Q = this.peekCodePoint(0),
                      w = this.peekCodePoint(1),
                      U = this.peekCodePoint(2);
                    if (sA(Q, w, U))
                      return (
                        (B = this.consumeName()),
                        { type: u.AT_KEYWORD_TOKEN, value: B }
                      );
                    break;
                  case 91:
                    return KA;
                  case 92:
                    if (BA(A, this.peekCodePoint(0)))
                      return (
                        this.reconsumeCodePoint(A), this.consumeIdentLikeToken()
                      );
                    break;
                  case 93:
                    return IA;
                  case 61:
                    if (61 === this.peekCodePoint(0))
                      return this.consumeCodePoint(), wA;
                    break;
                  case 123:
                    return gA;
                  case 125:
                    return EA;
                  case 117:
                  case 85:
                    var l = this.peekCodePoint(0),
                      C = this.peekCodePoint(1);
                    return (
                      43 !== l ||
                        (!AA(C) && 63 !== C) ||
                        (this.consumeCodePoint(),
                        this.consumeUnicodeRangeToken()),
                      this.reconsumeCodePoint(A),
                      this.consumeIdentLikeToken()
                    );
                  case 124:
                    if (61 === this.peekCodePoint(0))
                      return this.consumeCodePoint(), lA;
                    if (124 === this.peekCodePoint(0))
                      return this.consumeCodePoint(), UA;
                    break;
                  case 126:
                    if (61 === this.peekCodePoint(0))
                      return this.consumeCodePoint(), CA;
                    break;
                  case -1:
                    return TA;
                }
                return eA(A)
                  ? (this.consumeWhiteSpace(), mA)
                  : $(A)
                  ? (this.reconsumeCodePoint(A), this.consumeNumericToken())
                  : tA(A)
                  ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken())
                  : { type: u.DELIM_TOKEN, value: i(A) };
              }),
              (A.prototype.consumeCodePoint = function() {
                var A = this._value.shift();
                return void 0 === A ? -1 : A;
              }),
              (A.prototype.reconsumeCodePoint = function(A) {
                this._value.unshift(A);
              }),
              (A.prototype.peekCodePoint = function(A) {
                return A >= this._value.length ? -1 : this._value[A];
              }),
              (A.prototype.consumeUnicodeRangeToken = function() {
                for (
                  var A = [], e = this.consumeCodePoint();
                  AA(e) && A.length < 6;

                )
                  A.push(e), (e = this.consumeCodePoint());
                for (var t = !1; 63 === e && A.length < 6; )
                  A.push(e), (e = this.consumeCodePoint()), (t = !0);
                if (t) {
                  var r = parseInt(
                      i.apply(
                        void 0,
                        A.map(function(A) {
                          return 63 === A ? 48 : A;
                        })
                      ),
                      16
                    ),
                    n = parseInt(
                      i.apply(
                        void 0,
                        A.map(function(A) {
                          return 63 === A ? 70 : A;
                        })
                      ),
                      16
                    );
                  return { type: u.UNICODE_RANGE_TOKEN, start: r, end: n };
                }
                var B = parseInt(i.apply(void 0, A), 16);
                if (45 === this.peekCodePoint(0) && AA(this.peekCodePoint(1))) {
                  this.consumeCodePoint(), (e = this.consumeCodePoint());
                  for (var s = []; AA(e) && s.length < 6; )
                    s.push(e), (e = this.consumeCodePoint());
                  return (
                    (n = parseInt(i.apply(void 0, s), 16)),
                    { type: u.UNICODE_RANGE_TOKEN, start: B, end: n }
                  );
                }
                return { type: u.UNICODE_RANGE_TOKEN, start: B, end: B };
              }),
              (A.prototype.consumeIdentLikeToken = function() {
                var A = this.consumeName();
                return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0)
                  ? (this.consumeCodePoint(), this.consumeUrlToken())
                  : 40 === this.peekCodePoint(0)
                  ? (this.consumeCodePoint(),
                    { type: u.FUNCTION_TOKEN, value: A })
                  : { type: u.IDENT_TOKEN, value: A };
              }),
              (A.prototype.consumeUrlToken = function() {
                var A = [];
                if ((this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)))
                  return { type: u.URL_TOKEN, value: "" };
                var e = this.peekCodePoint(0);
                if (39 === e || 34 === e) {
                  var t = this.consumeStringToken(this.consumeCodePoint());
                  return t.type === u.STRING_TOKEN &&
                    (this.consumeWhiteSpace(),
                    -1 === this.peekCodePoint(0) ||
                      41 === this.peekCodePoint(0))
                    ? (this.consumeCodePoint(),
                      { type: u.URL_TOKEN, value: t.value })
                    : (this.consumeBadUrlRemnants(), hA);
                }
                for (;;) {
                  var r = this.consumeCodePoint();
                  if (-1 === r || 41 === r)
                    return { type: u.URL_TOKEN, value: i.apply(void 0, A) };
                  if (eA(r))
                    return (
                      this.consumeWhiteSpace(),
                      -1 === this.peekCodePoint(0) ||
                      41 === this.peekCodePoint(0)
                        ? (this.consumeCodePoint(),
                          { type: u.URL_TOKEN, value: i.apply(void 0, A) })
                        : (this.consumeBadUrlRemnants(), hA)
                    );
                  if (34 === r || 39 === r || 40 === r || nA(r))
                    return this.consumeBadUrlRemnants(), hA;
                  if (92 === r) {
                    if (!BA(r, this.peekCodePoint(0)))
                      return this.consumeBadUrlRemnants(), hA;
                    A.push(this.consumeEscapedCodePoint());
                  } else A.push(r);
                }
              }),
              (A.prototype.consumeWhiteSpace = function() {
                for (; eA(this.peekCodePoint(0)); ) this.consumeCodePoint();
              }),
              (A.prototype.consumeBadUrlRemnants = function() {
                for (;;) {
                  var A = this.consumeCodePoint();
                  if (41 === A || -1 === A) return;
                  BA(A, this.peekCodePoint(0)) &&
                    this.consumeEscapedCodePoint();
                }
              }),
              (A.prototype.consumeStringSlice = function(A) {
                for (var e = ""; A > 0; ) {
                  var t = Math.min(6e4, A);
                  (e += i.apply(void 0, this._value.splice(0, t))), (A -= t);
                }
                return this._value.shift(), e;
              }),
              (A.prototype.consumeStringToken = function(A) {
                for (var e = "", t = 0; ; ) {
                  var r = this._value[t];
                  if (-1 === r || void 0 === r || r === A)
                    return (
                      (e += this.consumeStringSlice(t)),
                      { type: u.STRING_TOKEN, value: e }
                    );
                  if (10 === r) return this._value.splice(0, t), HA;
                  if (92 === r) {
                    var n = this._value[t + 1];
                    -1 !== n &&
                      void 0 !== n &&
                      (10 === n
                        ? ((e += this.consumeStringSlice(t)),
                          (t = -1),
                          this._value.shift())
                        : BA(r, n) &&
                          ((e += this.consumeStringSlice(t)),
                          (e += i(this.consumeEscapedCodePoint())),
                          (t = -1)));
                  }
                  t++;
                }
              }),
              (A.prototype.consumeNumber = function() {
                var A = [],
                  e = 4,
                  t = this.peekCodePoint(0);
                for (
                  (43 !== t && 45 !== t) || A.push(this.consumeCodePoint());
                  $(this.peekCodePoint(0));

                )
                  A.push(this.consumeCodePoint());
                t = this.peekCodePoint(0);
                var r = this.peekCodePoint(1);
                if (46 === t && $(r))
                  for (
                    A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                      e = 8;
                    $(this.peekCodePoint(0));

                  )
                    A.push(this.consumeCodePoint());
                (t = this.peekCodePoint(0)), (r = this.peekCodePoint(1));
                var n = this.peekCodePoint(2);
                if (
                  (69 === t || 101 === t) &&
                  (((43 === r || 45 === r) && $(n)) || $(r))
                )
                  for (
                    A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                      e = 8;
                    $(this.peekCodePoint(0));

                  )
                    A.push(this.consumeCodePoint());
                return [iA(A), e];
              }),
              (A.prototype.consumeNumericToken = function() {
                var A = this.consumeNumber(),
                  e = A[0],
                  t = A[1],
                  r = this.peekCodePoint(0),
                  n = this.peekCodePoint(1),
                  B = this.peekCodePoint(2);
                if (sA(r, n, B)) {
                  var s = this.consumeName();
                  return {
                    type: u.DIMENSION_TOKEN,
                    number: e,
                    flags: t,
                    unit: s
                  };
                }
                return 37 === r
                  ? (this.consumeCodePoint(),
                    { type: u.PERCENTAGE_TOKEN, number: e, flags: t })
                  : { type: u.NUMBER_TOKEN, number: e, flags: t };
              }),
              (A.prototype.consumeEscapedCodePoint = function() {
                var A = this.consumeCodePoint();
                if (AA(A)) {
                  for (
                    var e = i(A);
                    AA(this.peekCodePoint(0)) && e.length < 6;

                  )
                    e += i(this.consumeCodePoint());
                  eA(this.peekCodePoint(0)) && this.consumeCodePoint();
                  var t = parseInt(e, 16);
                  return 0 === t ||
                    (function(A) {
                      return A >= 55296 && A <= 57343;
                    })(t) ||
                    t > 1114111
                    ? 65533
                    : t;
                }
                return -1 === A ? 65533 : A;
              }),
              (A.prototype.consumeName = function() {
                for (var A = ""; ; ) {
                  var e = this.consumeCodePoint();
                  if (rA(e)) A += i(e);
                  else {
                    if (!BA(e, this.peekCodePoint(0)))
                      return this.reconsumeCodePoint(e), A;
                    A += i(this.consumeEscapedCodePoint());
                  }
                }
              }),
              A
            );
          })(),
          LA = (function() {
            function A(A) {
              this._tokens = A;
            }
            return (
              (A.create = function(e) {
                var t = new RA();
                return t.write(e), new A(t.read());
              }),
              (A.parseValue = function(e) {
                return A.create(e).parseComponentValue();
              }),
              (A.parseValues = function(e) {
                return A.create(e).parseComponentValues();
              }),
              (A.prototype.parseComponentValue = function() {
                for (
                  var A = this.consumeToken();
                  A.type === u.WHITESPACE_TOKEN;

                )
                  A = this.consumeToken();
                if (A.type === u.EOF_TOKEN)
                  throw new SyntaxError(
                    "Error parsing CSS component value, unexpected EOF"
                  );
                this.reconsumeToken(A);
                var e = this.consumeComponentValue();
                do {
                  A = this.consumeToken();
                } while (A.type === u.WHITESPACE_TOKEN);
                if (A.type === u.EOF_TOKEN) return e;
                throw new SyntaxError(
                  "Error parsing CSS component value, multiple values found when expecting only one"
                );
              }),
              (A.prototype.parseComponentValues = function() {
                for (var A = []; ; ) {
                  var e = this.consumeComponentValue();
                  if (e.type === u.EOF_TOKEN) return A;
                  A.push(e), A.push();
                }
              }),
              (A.prototype.consumeComponentValue = function() {
                var A = this.consumeToken();
                switch (A.type) {
                  case u.LEFT_CURLY_BRACKET_TOKEN:
                  case u.LEFT_SQUARE_BRACKET_TOKEN:
                  case u.LEFT_PARENTHESIS_TOKEN:
                    return this.consumeSimpleBlock(A.type);
                  case u.FUNCTION_TOKEN:
                    return this.consumeFunction(A);
                }
                return A;
              }),
              (A.prototype.consumeSimpleBlock = function(A) {
                for (
                  var e = { type: A, values: [] }, t = this.consumeToken();
                  ;

                ) {
                  if (t.type === u.EOF_TOKEN || PA(t, A)) return e;
                  this.reconsumeToken(t),
                    e.values.push(this.consumeComponentValue()),
                    (t = this.consumeToken());
                }
              }),
              (A.prototype.consumeFunction = function(A) {
                for (
                  var e = { name: A.value, values: [], type: u.FUNCTION };
                  ;

                ) {
                  var t = this.consumeToken();
                  if (
                    t.type === u.EOF_TOKEN ||
                    t.type === u.RIGHT_PARENTHESIS_TOKEN
                  )
                    return e;
                  this.reconsumeToken(t),
                    e.values.push(this.consumeComponentValue());
                }
              }),
              (A.prototype.consumeToken = function() {
                var A = this._tokens.shift();
                return void 0 === A ? TA : A;
              }),
              (A.prototype.reconsumeToken = function(A) {
                this._tokens.unshift(A);
              }),
              A
            );
          })(),
          vA = function(A) {
            return A.type === u.DIMENSION_TOKEN;
          },
          OA = function(A) {
            return A.type === u.NUMBER_TOKEN;
          },
          bA = function(A) {
            return A.type === u.IDENT_TOKEN;
          },
          SA = function(A) {
            return A.type === u.STRING_TOKEN;
          },
          DA = function(A, e) {
            return bA(A) && A.value === e;
          },
          yA = function(A) {
            return A.type !== u.WHITESPACE_TOKEN;
          },
          MA = function(A) {
            return A.type !== u.WHITESPACE_TOKEN && A.type !== u.COMMA_TOKEN;
          },
          _A = function(A) {
            var e = [],
              t = [];
            return (
              A.forEach(function(A) {
                if (A.type === u.COMMA_TOKEN) {
                  if (0 === t.length)
                    throw new Error(
                      "Error parsing function args, zero tokens for arg"
                    );
                  return e.push(t), void (t = []);
                }
                A.type !== u.WHITESPACE_TOKEN && t.push(A);
              }),
              t.length && e.push(t),
              e
            );
          },
          PA = function(A, e) {
            return (
              (e === u.LEFT_CURLY_BRACKET_TOKEN &&
                A.type === u.RIGHT_CURLY_BRACKET_TOKEN) ||
              (e === u.LEFT_SQUARE_BRACKET_TOKEN &&
                A.type === u.RIGHT_SQUARE_BRACKET_TOKEN) ||
              (e === u.LEFT_PARENTHESIS_TOKEN &&
                A.type === u.RIGHT_PARENTHESIS_TOKEN)
            );
          },
          xA = function(A) {
            return A.type === u.NUMBER_TOKEN || A.type === u.DIMENSION_TOKEN;
          },
          VA = function(A) {
            return A.type === u.PERCENTAGE_TOKEN || xA(A);
          },
          zA = function(A) {
            return A.length > 1 ? [A[0], A[1]] : [A[0]];
          },
          XA = { type: u.NUMBER_TOKEN, number: 0, flags: 4 },
          JA = { type: u.PERCENTAGE_TOKEN, number: 50, flags: 4 },
          GA = { type: u.PERCENTAGE_TOKEN, number: 100, flags: 4 },
          kA = function(A, e, t) {
            var r = A[0],
              n = A[1];
            return [WA(r, e), WA(void 0 !== n ? n : r, t)];
          },
          WA = function(A, e) {
            if (A.type === u.PERCENTAGE_TOKEN) return (A.number / 100) * e;
            if (vA(A))
              switch (A.unit) {
                case "rem":
                case "em":
                  return 16 * A.number;
                case "px":
                default:
                  return A.number;
              }
            return A.number;
          },
          YA = function(A) {
            if (A.type === u.DIMENSION_TOKEN)
              switch (A.unit) {
                case "deg":
                  return (Math.PI * A.number) / 180;
                case "grad":
                  return (Math.PI / 200) * A.number;
                case "rad":
                  return A.number;
                case "turn":
                  return 2 * Math.PI * A.number;
              }
            throw new Error("Unsupported angle type");
          },
          qA = function(A) {
            return (
              A.type === u.DIMENSION_TOKEN &&
              ("deg" === A.unit ||
                "grad" === A.unit ||
                "rad" === A.unit ||
                "turn" === A.unit)
            );
          },
          jA = function(A) {
            switch (
              A.filter(bA)
                .map(function(A) {
                  return A.value;
                })
                .join(" ")
            ) {
              case "to bottom right":
              case "to right bottom":
              case "left top":
              case "top left":
                return [XA, XA];
              case "to top":
              case "bottom":
                return ZA(0);
              case "to bottom left":
              case "to left bottom":
              case "right top":
              case "top right":
                return [XA, GA];
              case "to right":
              case "left":
                return ZA(90);
              case "to top left":
              case "to left top":
              case "right bottom":
              case "bottom right":
                return [GA, GA];
              case "to bottom":
              case "top":
                return ZA(180);
              case "to top right":
              case "to right top":
              case "left bottom":
              case "bottom left":
                return [GA, XA];
              case "to left":
              case "right":
                return ZA(270);
            }
            return 0;
          },
          ZA = function(A) {
            return (Math.PI * A) / 180;
          },
          $A = function(A) {
            if (A.type === u.FUNCTION) {
              var e = ae[A.name];
              if (void 0 === e)
                throw new Error(
                  'Attempting to parse an unsupported color function "' +
                    A.name +
                    '"'
                );
              return e(A.values);
            }
            if (A.type === u.HASH_TOKEN) {
              if (3 === A.value.length) {
                var t = A.value.substring(0, 1),
                  r = A.value.substring(1, 2),
                  n = A.value.substring(2, 3);
                return te(
                  parseInt(t + t, 16),
                  parseInt(r + r, 16),
                  parseInt(n + n, 16),
                  1
                );
              }
              if (4 === A.value.length) {
                (t = A.value.substring(0, 1)),
                  (r = A.value.substring(1, 2)),
                  (n = A.value.substring(2, 3));
                var B = A.value.substring(3, 4);
                return te(
                  parseInt(t + t, 16),
                  parseInt(r + r, 16),
                  parseInt(n + n, 16),
                  parseInt(B + B, 16) / 255
                );
              }
              if (6 === A.value.length)
                return (
                  (t = A.value.substring(0, 2)),
                  (r = A.value.substring(2, 4)),
                  (n = A.value.substring(4, 6)),
                  te(parseInt(t, 16), parseInt(r, 16), parseInt(n, 16), 1)
                );
              if (8 === A.value.length)
                return (
                  (t = A.value.substring(0, 2)),
                  (r = A.value.substring(2, 4)),
                  (n = A.value.substring(4, 6)),
                  (B = A.value.substring(6, 8)),
                  te(
                    parseInt(t, 16),
                    parseInt(r, 16),
                    parseInt(n, 16),
                    parseInt(B, 16) / 255
                  )
                );
            }
            if (A.type === u.IDENT_TOKEN) {
              var s = ce[A.value.toUpperCase()];
              if (void 0 !== s) return s;
            }
            return ce.TRANSPARENT;
          },
          Ae = function(A) {
            return 0 == (255 & A);
          },
          ee = function(A) {
            var e = 255 & A,
              t = 255 & (A >> 8),
              r = 255 & (A >> 16),
              n = 255 & (A >> 24);
            return e < 255
              ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")"
              : "rgb(" + n + "," + r + "," + t + ")";
          },
          te = function(A, e, t, r) {
            return (
              ((A << 24) |
                (e << 16) |
                (t << 8) |
                (Math.round(255 * r) << 0)) >>>
              0
            );
          },
          re = function(A, e) {
            if (A.type === u.NUMBER_TOKEN) return A.number;
            if (A.type === u.PERCENTAGE_TOKEN) {
              var t = 3 === e ? 1 : 255;
              return 3 === e
                ? (A.number / 100) * t
                : Math.round((A.number / 100) * t);
            }
            return 0;
          },
          ne = function(A) {
            var e = A.filter(MA);
            if (3 === e.length) {
              var t = e.map(re),
                r = t[0],
                n = t[1],
                B = t[2];
              return te(r, n, B, 1);
            }
            if (4 === e.length) {
              var s = e.map(re),
                o = ((r = s[0]), (n = s[1]), (B = s[2]), s[3]);
              return te(r, n, B, o);
            }
            return 0;
          };
        function Be(A, e, t) {
          return (
            t < 0 && (t += 1),
            t >= 1 && (t -= 1),
            t < 1 / 6
              ? (e - A) * t * 6 + A
              : t < 0.5
              ? e
              : t < 2 / 3
              ? 6 * (e - A) * (2 / 3 - t) + A
              : A
          );
        }
        var se,
          oe,
          ie = function(A) {
            var e = A.filter(MA),
              t = e[0],
              r = e[1],
              n = e[2],
              B = e[3],
              s =
                (t.type === u.NUMBER_TOKEN ? ZA(t.number) : YA(t)) /
                (2 * Math.PI),
              o = VA(r) ? r.number / 100 : 0,
              i = VA(n) ? n.number / 100 : 0,
              a = void 0 !== B && VA(B) ? WA(B, 1) : 1;
            if (0 === o) return te(255 * i, 255 * i, 255 * i, 1);
            var c = i <= 0.5 ? i * (o + 1) : i + o - i * o,
              Q = 2 * i - c,
              w = Be(Q, c, s + 1 / 3),
              U = Be(Q, c, s),
              l = Be(Q, c, s - 1 / 3);
            return te(255 * w, 255 * U, 255 * l, a);
          },
          ae = { hsl: ie, hsla: ie, rgb: ne, rgba: ne },
          ce = {
            ALICEBLUE: 4042850303,
            ANTIQUEWHITE: 4209760255,
            AQUA: 16777215,
            AQUAMARINE: 2147472639,
            AZURE: 4043309055,
            BEIGE: 4126530815,
            BISQUE: 4293182719,
            BLACK: 255,
            BLANCHEDALMOND: 4293643775,
            BLUE: 65535,
            BLUEVIOLET: 2318131967,
            BROWN: 2771004159,
            BURLYWOOD: 3736635391,
            CADETBLUE: 1604231423,
            CHARTREUSE: 2147418367,
            CHOCOLATE: 3530104575,
            CORAL: 4286533887,
            CORNFLOWERBLUE: 1687547391,
            CORNSILK: 4294499583,
            CRIMSON: 3692313855,
            CYAN: 16777215,
            DARKBLUE: 35839,
            DARKCYAN: 9145343,
            DARKGOLDENROD: 3095837695,
            DARKGRAY: 2846468607,
            DARKGREEN: 6553855,
            DARKGREY: 2846468607,
            DARKKHAKI: 3182914559,
            DARKMAGENTA: 2332068863,
            DARKOLIVEGREEN: 1433087999,
            DARKORANGE: 4287365375,
            DARKORCHID: 2570243327,
            DARKRED: 2332033279,
            DARKSALMON: 3918953215,
            DARKSEAGREEN: 2411499519,
            DARKSLATEBLUE: 1211993087,
            DARKSLATEGRAY: 793726975,
            DARKSLATEGREY: 793726975,
            DARKTURQUOISE: 13554175,
            DARKVIOLET: 2483082239,
            DEEPPINK: 4279538687,
            DEEPSKYBLUE: 12582911,
            DIMGRAY: 1768516095,
            DIMGREY: 1768516095,
            DODGERBLUE: 512819199,
            FIREBRICK: 2988581631,
            FLORALWHITE: 4294635775,
            FORESTGREEN: 579543807,
            FUCHSIA: 4278255615,
            GAINSBORO: 3705462015,
            GHOSTWHITE: 4177068031,
            GOLD: 4292280575,
            GOLDENROD: 3668254975,
            GRAY: 2155905279,
            GREEN: 8388863,
            GREENYELLOW: 2919182335,
            GREY: 2155905279,
            HONEYDEW: 4043305215,
            HOTPINK: 4285117695,
            INDIANRED: 3445382399,
            INDIGO: 1258324735,
            IVORY: 4294963455,
            KHAKI: 4041641215,
            LAVENDER: 3873897215,
            LAVENDERBLUSH: 4293981695,
            LAWNGREEN: 2096890111,
            LEMONCHIFFON: 4294626815,
            LIGHTBLUE: 2916673279,
            LIGHTCORAL: 4034953471,
            LIGHTCYAN: 3774873599,
            LIGHTGOLDENRODYELLOW: 4210742015,
            LIGHTGRAY: 3553874943,
            LIGHTGREEN: 2431553791,
            LIGHTGREY: 3553874943,
            LIGHTPINK: 4290167295,
            LIGHTSALMON: 4288707327,
            LIGHTSEAGREEN: 548580095,
            LIGHTSKYBLUE: 2278488831,
            LIGHTSLATEGRAY: 2005441023,
            LIGHTSLATEGREY: 2005441023,
            LIGHTSTEELBLUE: 2965692159,
            LIGHTYELLOW: 4294959359,
            LIME: 16711935,
            LIMEGREEN: 852308735,
            LINEN: 4210091775,
            MAGENTA: 4278255615,
            MAROON: 2147483903,
            MEDIUMAQUAMARINE: 1724754687,
            MEDIUMBLUE: 52735,
            MEDIUMORCHID: 3126187007,
            MEDIUMPURPLE: 2473647103,
            MEDIUMSEAGREEN: 1018393087,
            MEDIUMSLATEBLUE: 2070474495,
            MEDIUMSPRINGGREEN: 16423679,
            MEDIUMTURQUOISE: 1221709055,
            MEDIUMVIOLETRED: 3340076543,
            MIDNIGHTBLUE: 421097727,
            MINTCREAM: 4127193855,
            MISTYROSE: 4293190143,
            MOCCASIN: 4293178879,
            NAVAJOWHITE: 4292783615,
            NAVY: 33023,
            OLDLACE: 4260751103,
            OLIVE: 2155872511,
            OLIVEDRAB: 1804477439,
            ORANGE: 4289003775,
            ORANGERED: 4282712319,
            ORCHID: 3664828159,
            PALEGOLDENROD: 4008225535,
            PALEGREEN: 2566625535,
            PALETURQUOISE: 2951671551,
            PALEVIOLETRED: 3681588223,
            PAPAYAWHIP: 4293907967,
            PEACHPUFF: 4292524543,
            PERU: 3448061951,
            PINK: 4290825215,
            PLUM: 3718307327,
            POWDERBLUE: 2967529215,
            PURPLE: 2147516671,
            REBECCAPURPLE: 1714657791,
            RED: 4278190335,
            ROSYBROWN: 3163525119,
            ROYALBLUE: 1097458175,
            SADDLEBROWN: 2336560127,
            SALMON: 4202722047,
            SANDYBROWN: 4104413439,
            SEAGREEN: 780883967,
            SEASHELL: 4294307583,
            SIENNA: 2689740287,
            SILVER: 3233857791,
            SKYBLUE: 2278484991,
            SLATEBLUE: 1784335871,
            SLATEGRAY: 1887473919,
            SLATEGREY: 1887473919,
            SNOW: 4294638335,
            SPRINGGREEN: 16744447,
            STEELBLUE: 1182971135,
            TAN: 3535047935,
            TEAL: 8421631,
            THISTLE: 3636451583,
            TOMATO: 4284696575,
            TRANSPARENT: 0,
            TURQUOISE: 1088475391,
            VIOLET: 4001558271,
            WHEAT: 4125012991,
            WHITE: 4294967295,
            WHITESMOKE: 4126537215,
            YELLOW: 4294902015,
            YELLOWGREEN: 2597139199
          };
        (function(A) {
          (A[(A.VALUE = 0)] = "VALUE"),
            (A[(A.LIST = 1)] = "LIST"),
            (A[(A.IDENT_VALUE = 2)] = "IDENT_VALUE"),
            (A[(A.TYPE_VALUE = 3)] = "TYPE_VALUE"),
            (A[(A.TOKEN_VALUE = 4)] = "TOKEN_VALUE");
        })(se || (se = {})),
          (function(A) {
            (A[(A.BORDER_BOX = 0)] = "BORDER_BOX"),
              (A[(A.PADDING_BOX = 1)] = "PADDING_BOX"),
              (A[(A.CONTENT_BOX = 2)] = "CONTENT_BOX");
          })(oe || (oe = {}));
        var Qe,
          ue,
          we,
          Ue = {
            name: "background-clip",
            initialValue: "border-box",
            prefix: !1,
            type: se.LIST,
            parse: function(A) {
              return A.map(function(A) {
                if (bA(A))
                  switch (A.value) {
                    case "padding-box":
                      return oe.PADDING_BOX;
                    case "content-box":
                      return oe.CONTENT_BOX;
                  }
                return oe.BORDER_BOX;
              });
            }
          },
          le = {
            name: "background-color",
            initialValue: "transparent",
            prefix: !1,
            type: se.TYPE_VALUE,
            format: "color"
          },
          Ce = function(A) {
            var e = $A(A[0]),
              t = A[1];
            return t && VA(t)
              ? { color: e, stop: t }
              : { color: e, stop: null };
          },
          ge = function(A, e) {
            var t = A[0],
              r = A[A.length - 1];
            null === t.stop && (t.stop = XA), null === r.stop && (r.stop = GA);
            for (var n = [], B = 0, s = 0; s < A.length; s++) {
              var o = A[s].stop;
              if (null !== o) {
                var i = WA(o, e);
                i > B ? n.push(i) : n.push(B), (B = i);
              } else n.push(null);
            }
            var a = null;
            for (s = 0; s < n.length; s++) {
              var c = n[s];
              if (null === c) null === a && (a = s);
              else if (null !== a) {
                for (
                  var Q = s - a, u = (c - n[a - 1]) / (Q + 1), w = 1;
                  w <= Q;
                  w++
                )
                  n[a + w - 1] = u * w;
                a = null;
              }
            }
            return A.map(function(A, t) {
              return {
                color: A.color,
                stop: Math.max(Math.min(1, n[t] / e), 0)
              };
            });
          },
          Ee = function(A, e, t) {
            var r =
                "number" == typeof A
                  ? A
                  : (function(A, e, t) {
                      var r = e / 2,
                        n = t / 2,
                        B = WA(A[0], e) - r,
                        s = n - WA(A[1], t);
                      return (Math.atan2(s, B) + 2 * Math.PI) % (2 * Math.PI);
                    })(A, e, t),
              n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)),
              B = e / 2,
              s = t / 2,
              o = n / 2,
              i = Math.sin(r - Math.PI / 2) * o,
              a = Math.cos(r - Math.PI / 2) * o;
            return [n, B - a, B + a, s - i, s + i];
          },
          Fe = function(A, e) {
            return Math.sqrt(A * A + e * e);
          },
          he = function(A, e, t, r, n) {
            return [[0, 0], [0, e], [A, 0], [A, e]].reduce(
              function(A, e) {
                var B = e[0],
                  s = e[1],
                  o = Fe(t - B, r - s);
                return (n
                ? o < A.optimumDistance
                : o > A.optimumDistance)
                  ? { optimumCorner: e, optimumDistance: o }
                  : A;
              },
              { optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null }
            ).optimumCorner;
          },
          He = function(A) {
            var e = ZA(180),
              t = [];
            return (
              _A(A).forEach(function(A, r) {
                if (0 === r) {
                  var n = A[0];
                  if (
                    n.type === u.IDENT_TOKEN &&
                    -1 !== ["top", "left", "right", "bottom"].indexOf(n.value)
                  )
                    return void (e = jA(A));
                  if (qA(n)) return void (e = (YA(n) + ZA(270)) % ZA(360));
                }
                var B = Ce(A);
                t.push(B);
              }),
              { angle: e, stops: t, type: Qe.LINEAR_GRADIENT }
            );
          },
          fe = function(A) {
            return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3];
          },
          de = function(A, e, t, r, n) {
            var B = "http://www.w3.org/2000/svg",
              s = document.createElementNS(B, "svg"),
              o = document.createElementNS(B, "foreignObject");
            return (
              s.setAttributeNS(null, "width", A.toString()),
              s.setAttributeNS(null, "height", e.toString()),
              o.setAttributeNS(null, "width", "100%"),
              o.setAttributeNS(null, "height", "100%"),
              o.setAttributeNS(null, "x", t.toString()),
              o.setAttributeNS(null, "y", r.toString()),
              o.setAttributeNS(null, "externalResourcesRequired", "true"),
              s.appendChild(o),
              o.appendChild(n),
              s
            );
          },
          pe = function(A) {
            return new Promise(function(e, t) {
              var r = new Image();
              (r.onload = function() {
                return e(r);
              }),
                (r.onerror = t),
                (r.src =
                  "data:image/svg+xml;charset=utf-8," +
                  encodeURIComponent(new XMLSerializer().serializeToString(A)));
            });
          },
          Ne = {
            get SUPPORT_RANGE_BOUNDS() {
              var A = (function(A) {
                if (A.createRange) {
                  var e = A.createRange();
                  if (e.getBoundingClientRect) {
                    var t = A.createElement("boundtest");
                    (t.style.height = "123px"),
                      (t.style.display = "block"),
                      A.body.appendChild(t),
                      e.selectNode(t);
                    var r = e.getBoundingClientRect(),
                      n = Math.round(r.height);
                    if ((A.body.removeChild(t), 123 === n)) return !0;
                  }
                }
                return !1;
              })(document);
              return (
                Object.defineProperty(Ne, "SUPPORT_RANGE_BOUNDS", { value: A }),
                A
              );
            },
            get SUPPORT_SVG_DRAWING() {
              var A = (function(A) {
                var e = new Image(),
                  t = A.createElement("canvas"),
                  r = t.getContext("2d");
                if (!r) return !1;
                e.src =
                  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                try {
                  r.drawImage(e, 0, 0), t.toDataURL();
                } catch (A) {
                  return !1;
                }
                return !0;
              })(document);
              return (
                Object.defineProperty(Ne, "SUPPORT_SVG_DRAWING", { value: A }),
                A
              );
            },
            get SUPPORT_FOREIGNOBJECT_DRAWING() {
              var A =
                "function" == typeof Array.from &&
                "function" == typeof window.fetch
                  ? (function(A) {
                      var e = A.createElement("canvas");
                      (e.width = 100), (e.height = 100);
                      var t = e.getContext("2d");
                      if (!t) return Promise.reject(!1);
                      (t.fillStyle = "rgb(0, 255, 0)"),
                        t.fillRect(0, 0, 100, 100);
                      var r = new Image(),
                        n = e.toDataURL();
                      r.src = n;
                      var B = de(100, 100, 0, 0, r);
                      return (
                        (t.fillStyle = "red"),
                        t.fillRect(0, 0, 100, 100),
                        pe(B)
                          .then(function(e) {
                            t.drawImage(e, 0, 0);
                            var r = t.getImageData(0, 0, 100, 100).data;
                            (t.fillStyle = "red"), t.fillRect(0, 0, 100, 100);
                            var B = A.createElement("div");
                            return (
                              (B.style.backgroundImage = "url(" + n + ")"),
                              (B.style.height = "100px"),
                              fe(r)
                                ? pe(de(100, 100, 0, 0, B))
                                : Promise.reject(!1)
                            );
                          })
                          .then(function(A) {
                            return (
                              t.drawImage(A, 0, 0),
                              fe(t.getImageData(0, 0, 100, 100).data)
                            );
                          })
                          .catch(function() {
                            return !1;
                          })
                      );
                    })(document)
                  : Promise.resolve(!1);
              return (
                Object.defineProperty(Ne, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                  value: A
                }),
                A
              );
            },
            get SUPPORT_CORS_IMAGES() {
              var A = void 0 !== new Image().crossOrigin;
              return (
                Object.defineProperty(Ne, "SUPPORT_CORS_IMAGES", { value: A }),
                A
              );
            },
            get SUPPORT_RESPONSE_TYPE() {
              var A = "string" == typeof new XMLHttpRequest().responseType;
              return (
                Object.defineProperty(Ne, "SUPPORT_RESPONSE_TYPE", {
                  value: A
                }),
                A
              );
            },
            get SUPPORT_CORS_XHR() {
              var A = "withCredentials" in new XMLHttpRequest();
              return (
                Object.defineProperty(Ne, "SUPPORT_CORS_XHR", { value: A }), A
              );
            }
          },
          Ke = (function() {
            function A(A) {
              (this.id = A), (this.start = Date.now());
            }
            return (
              (A.prototype.debug = function() {
                for (var A = [], e = 0; e < arguments.length; e++)
                  A[e] = arguments[e];
                ("undefined" != typeof window &&
                  window.console &&
                  "function" == typeof console.debug) ||
                  this.info.apply(this, A);
              }),
              (A.prototype.getTime = function() {
                return Date.now() - this.start;
              }),
              (A.create = function(e) {
                A.instances[e] = new A(e);
              }),
              (A.destroy = function(e) {
                delete A.instances[e];
              }),
              (A.getInstance = function(e) {
                var t = A.instances[e];
                if (void 0 === t)
                  throw new Error("No logger instance found with id " + e);
                return t;
              }),
              (A.prototype.info = function() {
                for (var A = [], e = 0; e < arguments.length; e++)
                  A[e] = arguments[e];
                "undefined" != typeof window && window.console && console.info;
              }),
              (A.prototype.error = function() {
                for (var A = [], e = 0; e < arguments.length; e++)
                  A[e] = arguments[e];
                ("undefined" != typeof window &&
                  window.console &&
                  "function" == typeof console.error) ||
                  this.info.apply(this, A);
              }),
              (A.instances = {}),
              A
            );
          })(),
          Ie = (function() {
            function A() {}
            return (
              (A.create = function(e, t) {
                return (A._caches[e] = new me(e, t));
              }),
              (A.destroy = function(e) {
                delete A._caches[e];
              }),
              (A.open = function(e) {
                var t = A._caches[e];
                if (void 0 !== t) return t;
                throw new Error('Cache with key "' + e + '" not found');
              }),
              (A.getOrigin = function(e) {
                var t = A._link;
                return t
                  ? ((t.href = e),
                    (t.href = t.href),
                    t.protocol + t.hostname + t.port)
                  : "about:blank";
              }),
              (A.isSameOrigin = function(e) {
                return A.getOrigin(e) === A._origin;
              }),
              (A.setContext = function(e) {
                (A._link = e.document.createElement("a")),
                  (A._origin = A.getOrigin(e.location.href));
              }),
              (A.getInstance = function() {
                var e = A._current;
                if (null === e) throw new Error("No cache instance attached");
                return e;
              }),
              (A.attachInstance = function(e) {
                A._current = e;
              }),
              (A.detachInstance = function() {
                A._current = null;
              }),
              (A._caches = {}),
              (A._origin = "about:blank"),
              (A._current = null),
              A
            );
          })(),
          me = (function() {
            function A(A, e) {
              (this.id = A), (this._options = e), (this._cache = {});
            }
            return (
              (A.prototype.addImage = function(A) {
                var e = Promise.resolve();
                return this.has(A)
                  ? e
                  : Se(A) || ve(A)
                  ? ((this._cache[A] = this.loadImage(A)), e)
                  : e;
              }),
              (A.prototype.match = function(A) {
                return this._cache[A];
              }),
              (A.prototype.loadImage = function(A) {
                return r(this, void 0, void 0, function() {
                  var e,
                    t,
                    r,
                    B,
                    s = this;
                  return n(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (e = Ie.isSameOrigin(A)),
                          (t =
                            !Oe(A) &&
                            !0 === this._options.useCORS &&
                            Ne.SUPPORT_CORS_IMAGES &&
                            !e),
                          (r =
                            !Oe(A) &&
                            !e &&
                            "string" == typeof this._options.proxy &&
                            Ne.SUPPORT_CORS_XHR &&
                            !t),
                          e ||
                          !1 !== this._options.allowTaint ||
                          Oe(A) ||
                          r ||
                          t
                            ? ((B = A), r ? [4, this.proxy(B)] : [3, 2])
                            : [2]
                        );
                      case 1:
                        (B = n.sent()), (n.label = 2);
                      case 2:
                        return (
                          Ke.getInstance(this.id).debug(
                            "Added image " + A.substring(0, 256)
                          ),
                          [
                            4,
                            new Promise(function(A, e) {
                              var r = new Image();
                              (r.onload = function() {
                                return A(r);
                              }),
                                (r.onerror = e),
                                (be(B) || t) && (r.crossOrigin = "anonymous"),
                                (r.src = B),
                                !0 === r.complete &&
                                  setTimeout(function() {
                                    return A(r);
                                  }, 500),
                                s._options.imageTimeout > 0 &&
                                  setTimeout(function() {
                                    return e(
                                      "Timed out (" +
                                        s._options.imageTimeout +
                                        "ms) loading image"
                                    );
                                  }, s._options.imageTimeout);
                            })
                          ]
                        );
                      case 3:
                        return [2, n.sent()];
                    }
                  });
                });
              }),
              (A.prototype.has = function(A) {
                return void 0 !== this._cache[A];
              }),
              (A.prototype.keys = function() {
                return Promise.resolve(Object.keys(this._cache));
              }),
              (A.prototype.proxy = function(A) {
                var e = this,
                  t = this._options.proxy;
                if (!t) throw new Error("No proxy defined");
                var r = A.substring(0, 256);
                return new Promise(function(n, B) {
                  var s = Ne.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                    o = new XMLHttpRequest();
                  if (
                    ((o.onload = function() {
                      if (200 === o.status)
                        if ("text" === s) n(o.response);
                        else {
                          var A = new FileReader();
                          A.addEventListener(
                            "load",
                            function() {
                              return n(A.result);
                            },
                            !1
                          ),
                            A.addEventListener(
                              "error",
                              function(A) {
                                return B(A);
                              },
                              !1
                            ),
                            A.readAsDataURL(o.response);
                        }
                      else
                        B(
                          "Failed to proxy resource " +
                            r +
                            " with status code " +
                            o.status
                        );
                    }),
                    (o.onerror = B),
                    o.open(
                      "GET",
                      t + "?url=" + encodeURIComponent(A) + "&responseType=" + s
                    ),
                    "text" !== s &&
                      o instanceof XMLHttpRequest &&
                      (o.responseType = s),
                    e._options.imageTimeout)
                  ) {
                    var i = e._options.imageTimeout;
                    (o.timeout = i),
                      (o.ontimeout = function() {
                        return B("Timed out (" + i + "ms) proxying " + r);
                      });
                  }
                  o.send();
                });
              }),
              A
            );
          })(),
          Te = /^data:image\/svg\+xml/i,
          Re = /^data:image\/.*;base64,/i,
          Le = /^data:image\/.*/i,
          ve = function(A) {
            return Ne.SUPPORT_SVG_DRAWING || !De(A);
          },
          Oe = function(A) {
            return Le.test(A);
          },
          be = function(A) {
            return Re.test(A);
          },
          Se = function(A) {
            return "blob" === A.substr(0, 4);
          },
          De = function(A) {
            return "svg" === A.substr(-3).toLowerCase() || Te.test(A);
          },
          ye = function(A) {
            var e = ue.CIRCLE,
              t = we.FARTHEST_CORNER,
              r = [],
              n = [];
            return (
              _A(A).forEach(function(A, B) {
                var s = !0;
                if (
                  (0 === B
                    ? (s = A.reduce(function(A, e) {
                        if (bA(e))
                          switch (e.value) {
                            case "center":
                              return n.push(JA), !1;
                            case "top":
                            case "left":
                              return n.push(XA), !1;
                            case "right":
                            case "bottom":
                              return n.push(GA), !1;
                          }
                        else if (VA(e) || xA(e)) return n.push(e), !1;
                        return A;
                      }, s))
                    : 1 === B &&
                      (s = A.reduce(function(A, r) {
                        if (bA(r))
                          switch (r.value) {
                            case "circle":
                              return (e = ue.CIRCLE), !1;
                            case "ellipse":
                              return (e = ue.ELLIPSE), !1;
                            case "contain":
                            case "closest-side":
                              return (t = we.CLOSEST_SIDE), !1;
                            case "farthest-side":
                              return (t = we.FARTHEST_SIDE), !1;
                            case "closest-corner":
                              return (t = we.CLOSEST_CORNER), !1;
                            case "cover":
                            case "farthest-corner":
                              return (t = we.FARTHEST_CORNER), !1;
                          }
                        else if (xA(r) || VA(r))
                          return Array.isArray(t) || (t = []), t.push(r), !1;
                        return A;
                      }, s)),
                  s)
                ) {
                  var o = Ce(A);
                  r.push(o);
                }
              }),
              {
                size: t,
                shape: e,
                stops: r,
                position: n,
                type: Qe.RADIAL_GRADIENT
              }
            );
          };
        !(function(A) {
          (A[(A.URL = 0)] = "URL"),
            (A[(A.LINEAR_GRADIENT = 1)] = "LINEAR_GRADIENT"),
            (A[(A.RADIAL_GRADIENT = 2)] = "RADIAL_GRADIENT");
        })(Qe || (Qe = {})),
          (function(A) {
            (A[(A.CIRCLE = 0)] = "CIRCLE"), (A[(A.ELLIPSE = 1)] = "ELLIPSE");
          })(ue || (ue = {})),
          (function(A) {
            (A[(A.CLOSEST_SIDE = 0)] = "CLOSEST_SIDE"),
              (A[(A.FARTHEST_SIDE = 1)] = "FARTHEST_SIDE"),
              (A[(A.CLOSEST_CORNER = 2)] = "CLOSEST_CORNER"),
              (A[(A.FARTHEST_CORNER = 3)] = "FARTHEST_CORNER");
          })(we || (we = {}));
        var Me,
          _e = function(A) {
            if (A.type === u.URL_TOKEN) {
              var e = { url: A.value, type: Qe.URL };
              return Ie.getInstance().addImage(A.value), e;
            }
            if (A.type === u.FUNCTION) {
              var t = Pe[A.name];
              if (void 0 === t)
                throw new Error(
                  'Attempting to parse an unsupported image function "' +
                    A.name +
                    '"'
                );
              return t(A.values);
            }
            throw new Error("Unsupported image type");
          },
          Pe = {
            "linear-gradient": function(A) {
              var e = ZA(180),
                t = [];
              return (
                _A(A).forEach(function(A, r) {
                  if (0 === r) {
                    var n = A[0];
                    if (n.type === u.IDENT_TOKEN && "to" === n.value)
                      return void (e = jA(A));
                    if (qA(n)) return void (e = YA(n));
                  }
                  var B = Ce(A);
                  t.push(B);
                }),
                { angle: e, stops: t, type: Qe.LINEAR_GRADIENT }
              );
            },
            "-moz-linear-gradient": He,
            "-ms-linear-gradient": He,
            "-o-linear-gradient": He,
            "-webkit-linear-gradient": He,
            "radial-gradient": function(A) {
              var e = ue.CIRCLE,
                t = we.FARTHEST_CORNER,
                r = [],
                n = [];
              return (
                _A(A).forEach(function(A, B) {
                  var s = !0;
                  if (0 === B) {
                    var o = !1;
                    s = A.reduce(function(A, r) {
                      if (o)
                        if (bA(r))
                          switch (r.value) {
                            case "center":
                              return n.push(JA), A;
                            case "top":
                            case "left":
                              return n.push(XA), A;
                            case "right":
                            case "bottom":
                              return n.push(GA), A;
                          }
                        else (VA(r) || xA(r)) && n.push(r);
                      else if (bA(r))
                        switch (r.value) {
                          case "circle":
                            return (e = ue.CIRCLE), !1;
                          case "ellipse":
                            return (e = ue.ELLIPSE), !1;
                          case "at":
                            return (o = !0), !1;
                          case "closest-side":
                            return (t = we.CLOSEST_SIDE), !1;
                          case "cover":
                          case "farthest-side":
                            return (t = we.FARTHEST_SIDE), !1;
                          case "contain":
                          case "closest-corner":
                            return (t = we.CLOSEST_CORNER), !1;
                          case "farthest-corner":
                            return (t = we.FARTHEST_CORNER), !1;
                        }
                      else if (xA(r) || VA(r))
                        return Array.isArray(t) || (t = []), t.push(r), !1;
                      return A;
                    }, s);
                  }
                  if (s) {
                    var i = Ce(A);
                    r.push(i);
                  }
                }),
                {
                  size: t,
                  shape: e,
                  stops: r,
                  position: n,
                  type: Qe.RADIAL_GRADIENT
                }
              );
            },
            "-moz-radial-gradient": ye,
            "-ms-radial-gradient": ye,
            "-o-radial-gradient": ye,
            "-webkit-radial-gradient": ye,
            "-webkit-gradient": function(A) {
              var e = ZA(180),
                t = [],
                r = Qe.LINEAR_GRADIENT,
                n = ue.CIRCLE,
                B = we.FARTHEST_CORNER;
              return (
                _A(A).forEach(function(A, e) {
                  var n = A[0];
                  if (0 === e) {
                    if (bA(n) && "linear" === n.value)
                      return void (r = Qe.LINEAR_GRADIENT);
                    if (bA(n) && "radial" === n.value)
                      return void (r = Qe.RADIAL_GRADIENT);
                  }
                  if (n.type === u.FUNCTION)
                    if ("from" === n.name) {
                      var B = $A(n.values[0]);
                      t.push({ stop: XA, color: B });
                    } else if ("to" === n.name)
                      (B = $A(n.values[0])), t.push({ stop: GA, color: B });
                    else if ("color-stop" === n.name) {
                      var s = n.values.filter(MA);
                      if (2 === s.length) {
                        B = $A(s[1]);
                        var o = s[0];
                        OA(o) &&
                          t.push({
                            stop: {
                              type: u.PERCENTAGE_TOKEN,
                              number: 100 * o.number,
                              flags: o.flags
                            },
                            color: B
                          });
                      }
                    }
                }),
                r === Qe.LINEAR_GRADIENT
                  ? { angle: (e + ZA(180)) % ZA(360), stops: t, type: r }
                  : { size: B, shape: n, stops: t, position: [], type: r }
              );
            }
          },
          xe = {
            name: "background-image",
            initialValue: "none",
            type: se.LIST,
            prefix: !1,
            parse: function(A) {
              if (0 === A.length) return [];
              var e = A[0];
              return e.type === u.IDENT_TOKEN && "none" === e.value
                ? []
                : A.filter(MA).map(_e);
            }
          },
          Ve = {
            name: "background-origin",
            initialValue: "border-box",
            prefix: !1,
            type: se.LIST,
            parse: function(A) {
              return A.map(function(A) {
                if (bA(A))
                  switch (A.value) {
                    case "padding-box":
                      return 1;
                    case "content-box":
                      return 2;
                  }
                return 0;
              });
            }
          },
          ze = {
            name: "background-position",
            initialValue: "0% 0%",
            type: se.LIST,
            prefix: !1,
            parse: function(A) {
              return _A(A)
                .map(function(A) {
                  return A.filter(VA);
                })
                .map(zA);
            }
          };
        !(function(A) {
          (A[(A.REPEAT = 0)] = "REPEAT"),
            (A[(A.NO_REPEAT = 1)] = "NO_REPEAT"),
            (A[(A.REPEAT_X = 2)] = "REPEAT_X"),
            (A[(A.REPEAT_Y = 3)] = "REPEAT_Y");
        })(Me || (Me = {}));
        var Xe,
          Je = {
            name: "background-repeat",
            initialValue: "repeat",
            prefix: !1,
            type: se.LIST,
            parse: function(A) {
              return _A(A)
                .map(function(A) {
                  return A.filter(bA)
                    .map(function(A) {
                      return A.value;
                    })
                    .join(" ");
                })
                .map(Ge);
            }
          },
          Ge = function(A) {
            switch (A) {
              case "no-repeat":
                return Me.NO_REPEAT;
              case "repeat-x":
              case "repeat no-repeat":
                return Me.REPEAT_X;
              case "repeat-y":
              case "no-repeat repeat":
                return Me.REPEAT_Y;
              case "repeat":
              default:
                return Me.REPEAT;
            }
          };
        !(function(A) {
          (A.AUTO = "auto"), (A.CONTAIN = "contain"), (A.COVER = "cover");
        })(Xe || (Xe = {}));
        var ke,
          We = {
            name: "background-size",
            initialValue: "0",
            prefix: !1,
            type: se.LIST,
            parse: function(A) {
              return _A(A).map(function(A) {
                return A.filter(Ye);
              });
            }
          },
          Ye = function(A) {
            return bA(A) || VA(A);
          },
          qe = function(A) {
            return {
              name: "border-" + A + "-color",
              initialValue: "transparent",
              prefix: !1,
              type: se.TYPE_VALUE,
              format: "color"
            };
          },
          je = qe("top"),
          Ze = qe("right"),
          $e = qe("bottom"),
          At = qe("left"),
          et = function(A) {
            return {
              name: "border-radius-" + A,
              initialValue: "0 0",
              prefix: !1,
              type: se.LIST,
              parse: function(A) {
                return zA(A.filter(VA));
              }
            };
          },
          tt = et("top-left"),
          rt = et("top-right"),
          nt = et("bottom-right"),
          Bt = et("bottom-left");
        !(function(A) {
          (A[(A.NONE = 0)] = "NONE"), (A[(A.SOLID = 1)] = "SOLID");
        })(ke || (ke = {}));
        var st,
          ot = function(A) {
            return {
              name: "border-" + A + "-style",
              initialValue: "solid",
              prefix: !1,
              type: se.IDENT_VALUE,
              parse: function(A) {
                switch (A) {
                  case "none":
                    return ke.NONE;
                }
                return ke.SOLID;
              }
            };
          },
          it = ot("top"),
          at = ot("right"),
          ct = ot("bottom"),
          Qt = ot("left"),
          ut = function(A) {
            return {
              name: "border-" + A + "-width",
              initialValue: "0",
              type: se.VALUE,
              prefix: !1,
              parse: function(A) {
                return vA(A) ? A.number : 0;
              }
            };
          },
          wt = ut("top"),
          Ut = ut("right"),
          lt = ut("bottom"),
          Ct = ut("left"),
          gt = {
            name: "color",
            initialValue: "transparent",
            prefix: !1,
            type: se.TYPE_VALUE,
            format: "color"
          },
          Et = {
            name: "display",
            initialValue: "inline-block",
            prefix: !1,
            type: se.LIST,
            parse: function(A) {
              return A.filter(bA).reduce(function(A, e) {
                return A | Ft(e.value);
              }, 0);
            }
          },
          Ft = function(A) {
            switch (A) {
              case "block":
                return 2;
              case "inline":
                return 4;
              case "run-in":
                return 8;
              case "flow":
                return 16;
              case "flow-root":
                return 32;
              case "table":
                return 64;
              case "flex":
              case "-webkit-flex":
                return 128;
              case "grid":
                return 256;
              case "ruby":
                return 512;
              case "subgrid":
                return 1024;
              case "list-item":
                return 2048;
              case "table-row-group":
                return 4096;
              case "table-header-group":
                return 8192;
              case "table-footer-group":
                return 16384;
              case "table-row":
                return 32768;
              case "table-cell":
                return 65536;
              case "table-column-group":
                return 131072;
              case "table-column":
                return 262144;
              case "table-caption":
                return 524288;
              case "ruby-base":
                return 1048576;
              case "ruby-text":
                return 2097152;
              case "ruby-base-container":
                return 4194304;
              case "ruby-text-container":
                return 8388608;
              case "contents":
                return 16777216;
              case "inline-block":
                return 33554432;
              case "inline-list-item":
                return 67108864;
              case "inline-table":
                return 134217728;
              case "inline-flex":
                return 268435456;
              case "inline-grid":
                return 536870912;
            }
            return 0;
          };
        !(function(A) {
          (A[(A.NONE = 0)] = "NONE"),
            (A[(A.LEFT = 1)] = "LEFT"),
            (A[(A.RIGHT = 2)] = "RIGHT"),
            (A[(A.INLINE_START = 3)] = "INLINE_START"),
            (A[(A.INLINE_END = 4)] = "INLINE_END");
        })(st || (st = {}));
        var ht,
          Ht = {
            name: "float",
            initialValue: "none",
            prefix: !1,
            type: se.IDENT_VALUE,
            parse: function(A) {
              switch (A) {
                case "left":
                  return st.LEFT;
                case "right":
                  return st.RIGHT;
                case "inline-start":
                  return st.INLINE_START;
                case "inline-end":
                  return st.INLINE_END;
              }
              return st.NONE;
            }
          },
          ft = {
            name: "letter-spacing",
            initialValue: "0",
            prefix: !1,
            type: se.VALUE,
            parse: function(A) {
              return A.type === u.IDENT_TOKEN && "normal" === A.value
                ? 0
                : A.type === u.NUMBER_TOKEN
                ? A.number
                : A.type === u.DIMENSION_TOKEN
                ? A.number
                : 0;
            }
          };
        !(function(A) {
          (A.NORMAL = "normal"), (A.STRICT = "strict");
        })(ht || (ht = {}));
        var dt,
          pt = {
            name: "line-break",
            initialValue: "normal",
            prefix: !1,
            type: se.IDENT_VALUE,
            parse: function(A) {
              switch (A) {
                case "strict":
                  return ht.STRICT;
                case "normal":
                default:
                  return ht.NORMAL;
              }
            }
          },
          Nt = {
            name: "line-height",
            initialValue: "normal",
            prefix: !1,
            type: se.TOKEN_VALUE
          },
          Kt = {
            name: "list-style-image",
            initialValue: "none",
            type: se.VALUE,
            prefix: !1,
            parse: function(A) {
              return A.type === u.IDENT_TOKEN && "none" === A.value
                ? null
                : _e(A);
            }
          };
        !(function(A) {
          (A[(A.INSIDE = 0)] = "INSIDE"), (A[(A.OUTSIDE = 1)] = "OUTSIDE");
        })(dt || (dt = {}));
        var It,
          mt = {
            name: "list-style-position",
            initialValue: "outside",
            prefix: !1,
            type: se.IDENT_VALUE,
            parse: function(A) {
              switch (A) {
                case "inside":
                  return dt.INSIDE;
                case "outside":
                default:
                  return dt.OUTSIDE;
              }
            }
          };
        !(function(A) {
          (A[(A.NONE = -1)] = "NONE"),
            (A[(A.DISC = 0)] = "DISC"),
            (A[(A.CIRCLE = 1)] = "CIRCLE"),
            (A[(A.SQUARE = 2)] = "SQUARE"),
            (A[(A.DECIMAL = 3)] = "DECIMAL"),
            (A[(A.CJK_DECIMAL = 4)] = "CJK_DECIMAL"),
            (A[(A.DECIMAL_LEADING_ZERO = 5)] = "DECIMAL_LEADING_ZERO"),
            (A[(A.LOWER_ROMAN = 6)] = "LOWER_ROMAN"),
            (A[(A.UPPER_ROMAN = 7)] = "UPPER_ROMAN"),
            (A[(A.LOWER_GREEK = 8)] = "LOWER_GREEK"),
            (A[(A.LOWER_ALPHA = 9)] = "LOWER_ALPHA"),
            (A[(A.UPPER_ALPHA = 10)] = "UPPER_ALPHA"),
            (A[(A.ARABIC_INDIC = 11)] = "ARABIC_INDIC"),
            (A[(A.ARMENIAN = 12)] = "ARMENIAN"),
            (A[(A.BENGALI = 13)] = "BENGALI"),
            (A[(A.CAMBODIAN = 14)] = "CAMBODIAN"),
            (A[(A.CJK_EARTHLY_BRANCH = 15)] = "CJK_EARTHLY_BRANCH"),
            (A[(A.CJK_HEAVENLY_STEM = 16)] = "CJK_HEAVENLY_STEM"),
            (A[(A.CJK_IDEOGRAPHIC = 17)] = "CJK_IDEOGRAPHIC"),
            (A[(A.DEVANAGARI = 18)] = "DEVANAGARI"),
            (A[(A.ETHIOPIC_NUMERIC = 19)] = "ETHIOPIC_NUMERIC"),
            (A[(A.GEORGIAN = 20)] = "GEORGIAN"),
            (A[(A.GUJARATI = 21)] = "GUJARATI"),
            (A[(A.GURMUKHI = 22)] = "GURMUKHI"),
            (A[(A.HEBREW = 22)] = "HEBREW"),
            (A[(A.HIRAGANA = 23)] = "HIRAGANA"),
            (A[(A.HIRAGANA_IROHA = 24)] = "HIRAGANA_IROHA"),
            (A[(A.JAPANESE_FORMAL = 25)] = "JAPANESE_FORMAL"),
            (A[(A.JAPANESE_INFORMAL = 26)] = "JAPANESE_INFORMAL"),
            (A[(A.KANNADA = 27)] = "KANNADA"),
            (A[(A.KATAKANA = 28)] = "KATAKANA"),
            (A[(A.KATAKANA_IROHA = 29)] = "KATAKANA_IROHA"),
            (A[(A.KHMER = 30)] = "KHMER"),
            (A[(A.KOREAN_HANGUL_FORMAL = 31)] = "KOREAN_HANGUL_FORMAL"),
            (A[(A.KOREAN_HANJA_FORMAL = 32)] = "KOREAN_HANJA_FORMAL"),
            (A[(A.KOREAN_HANJA_INFORMAL = 33)] = "KOREAN_HANJA_INFORMAL"),
            (A[(A.LAO = 34)] = "LAO"),
            (A[(A.LOWER_ARMENIAN = 35)] = "LOWER_ARMENIAN"),
            (A[(A.MALAYALAM = 36)] = "MALAYALAM"),
            (A[(A.MONGOLIAN = 37)] = "MONGOLIAN"),
            (A[(A.MYANMAR = 38)] = "MYANMAR"),
            (A[(A.ORIYA = 39)] = "ORIYA"),
            (A[(A.PERSIAN = 40)] = "PERSIAN"),
            (A[(A.SIMP_CHINESE_FORMAL = 41)] = "SIMP_CHINESE_FORMAL"),
            (A[(A.SIMP_CHINESE_INFORMAL = 42)] = "SIMP_CHINESE_INFORMAL"),
            (A[(A.TAMIL = 43)] = "TAMIL"),
            (A[(A.TELUGU = 44)] = "TELUGU"),
            (A[(A.THAI = 45)] = "THAI"),
            (A[(A.TIBETAN = 46)] = "TIBETAN"),
            (A[(A.TRAD_CHINESE_FORMAL = 47)] = "TRAD_CHINESE_FORMAL"),
            (A[(A.TRAD_CHINESE_INFORMAL = 48)] = "TRAD_CHINESE_INFORMAL"),
            (A[(A.UPPER_ARMENIAN = 49)] = "UPPER_ARMENIAN"),
            (A[(A.DISCLOSURE_OPEN = 50)] = "DISCLOSURE_OPEN"),
            (A[(A.DISCLOSURE_CLOSED = 51)] = "DISCLOSURE_CLOSED");
        })(It || (It = {}));
        var Tt,
          Rt = {
            name: "list-style-type",
            initialValue: "none",
            prefix: !1,
            type: se.IDENT_VALUE,
            parse: function(A) {
              switch (A) {
                case "disc":
                  return It.DISC;
                case "circle":
                  return It.CIRCLE;
                case "square":
                  return It.SQUARE;
                case "decimal":
                  return It.DECIMAL;
                case "cjk-decimal":
                  return It.CJK_DECIMAL;
                case "decimal-leading-zero":
                  return It.DECIMAL_LEADING_ZERO;
                case "lower-roman":
                  return It.LOWER_ROMAN;
                case "upper-roman":
                  return It.UPPER_ROMAN;
                case "lower-greek":
                  return It.LOWER_GREEK;
                case "lower-alpha":
                  return It.LOWER_ALPHA;
                case "upper-alpha":
                  return It.UPPER_ALPHA;
                case "arabic-indic":
                  return It.ARABIC_INDIC;
                case "armenian":
                  return It.ARMENIAN;
                case "bengali":
                  return It.BENGALI;
                case "cambodian":
                  return It.CAMBODIAN;
                case "cjk-earthly-branch":
                  return It.CJK_EARTHLY_BRANCH;
                case "cjk-heavenly-stem":
                  return It.CJK_HEAVENLY_STEM;
                case "cjk-ideographic":
                  return It.CJK_IDEOGRAPHIC;
                case "devanagari":
                  return It.DEVANAGARI;
                case "ethiopic-numeric":
                  return It.ETHIOPIC_NUMERIC;
                case "georgian":
                  return It.GEORGIAN;
                case "gujarati":
                  return It.GUJARATI;
                case "gurmukhi":
                  return It.GURMUKHI;
                case "hebrew":
                  return It.HEBREW;
                case "hiragana":
                  return It.HIRAGANA;
                case "hiragana-iroha":
                  return It.HIRAGANA_IROHA;
                case "japanese-formal":
                  return It.JAPANESE_FORMAL;
                case "japanese-informal":
                  return It.JAPANESE_INFORMAL;
                case "kannada":
                  return It.KANNADA;
                case "katakana":
                  return It.KATAKANA;
                case "katakana-iroha":
                  return It.KATAKANA_IROHA;
                case "khmer":
                  return It.KHMER;
                case "korean-hangul-formal":
                  return It.KOREAN_HANGUL_FORMAL;
                case "korean-hanja-formal":
                  return It.KOREAN_HANJA_FORMAL;
                case "korean-hanja-informal":
                  return It.KOREAN_HANJA_INFORMAL;
                case "lao":
                  return It.LAO;
                case "lower-armenian":
                  return It.LOWER_ARMENIAN;
                case "malayalam":
                  return It.MALAYALAM;
                case "mongolian":
                  return It.MONGOLIAN;
                case "myanmar":
                  return It.MYANMAR;
                case "oriya":
                  return It.ORIYA;
                case "persian":
                  return It.PERSIAN;
                case "simp-chinese-formal":
                  return It.SIMP_CHINESE_FORMAL;
                case "simp-chinese-informal":
                  return It.SIMP_CHINESE_INFORMAL;
                case "tamil":
                  return It.TAMIL;
                case "telugu":
                  return It.TELUGU;
                case "thai":
                  return It.THAI;
                case "tibetan":
                  return It.TIBETAN;
                case "trad-chinese-formal":
                  return It.TRAD_CHINESE_FORMAL;
                case "trad-chinese-informal":
                  return It.TRAD_CHINESE_INFORMAL;
                case "upper-armenian":
                  return It.UPPER_ARMENIAN;
                case "disclosure-open":
                  return It.DISCLOSURE_OPEN;
                case "disclosure-closed":
                  return It.DISCLOSURE_CLOSED;
                case "none":
                default:
                  return It.NONE;
              }
            }
          },
          Lt = function(A) {
            return {
              name: "margin-" + A,
              initialValue: "0",
              prefix: !1,
              type: se.TOKEN_VALUE
            };
          },
          vt = Lt("top"),
          Ot = Lt("right"),
          bt = Lt("bottom"),
          St = Lt("left");
        !(function(A) {
          (A[(A.VISIBLE = 0)] = "VISIBLE"),
            (A[(A.HIDDEN = 1)] = "HIDDEN"),
            (A[(A.SCROLL = 2)] = "SCROLL"),
            (A[(A.AUTO = 3)] = "AUTO");
        })(Tt || (Tt = {}));
        var Dt,
          yt = {
            name: "overflow",
            initialValue: "visible",
            prefix: !1,
            type: se.LIST,
            parse: function(A) {
              return A.filter(bA).map(function(A) {
                switch (A.value) {
                  case "hidden":
                    return Tt.HIDDEN;
                  case "scroll":
                    return Tt.SCROLL;
                  case "auto":
                    return Tt.AUTO;
                  case "visible":
                  default:
                    return Tt.VISIBLE;
                }
              });
            }
          };
        !(function(A) {
          (A.NORMAL = "normal"), (A.BREAK_WORD = "break-word");
        })(Dt || (Dt = {}));
        var Mt,
          _t = {
            name: "overflow-wrap",
            initialValue: "normal",
            prefix: !1,
            type: se.IDENT_VALUE,
            parse: function(A) {
              switch (A) {
                case "break-word":
                  return Dt.BREAK_WORD;
                case "normal":
                default:
                  return Dt.NORMAL;
              }
            }
          },
          Pt = function(A) {
            return {
              name: "padding-" + A,
              initialValue: "0",
              prefix: !1,
              type: se.TYPE_VALUE,
              format: "length-percentage"
            };
          },
          xt = Pt("top"),
          Vt = Pt("right"),
          zt = Pt("bottom"),
          Xt = Pt("left");
        !(function(A) {
          (A[(A.LEFT = 0)] = "LEFT"),
            (A[(A.CENTER = 1)] = "CENTER"),
            (A[(A.RIGHT = 2)] = "RIGHT");
        })(Mt || (Mt = {}));
        var Jt,
          Gt = {
            name: "text-align",
            initialValue: "left",
            prefix: !1,
            type: se.IDENT_VALUE,
            parse: function(A) {
              switch (A) {
                case "right":
                  return Mt.RIGHT;
                case "center":
                case "justify":
                  return Mt.CENTER;
                case "left":
                default:
                  return Mt.LEFT;
              }
            }
          };
        !(function(A) {
          (A[(A.STATIC = 0)] = "STATIC"),
            (A[(A.RELATIVE = 1)] = "RELATIVE"),
            (A[(A.ABSOLUTE = 2)] = "ABSOLUTE"),
            (A[(A.FIXED = 3)] = "FIXED"),
            (A[(A.STICKY = 4)] = "STICKY");
        })(Jt || (Jt = {}));
        var kt,
          Wt = {
            name: "position",
            initialValue: "static",
            prefix: !1,
            type: se.IDENT_VALUE,
            parse: function(A) {
              switch (A) {
                case "relative":
                  return Jt.RELATIVE;
                case "absolute":
                  return Jt.ABSOLUTE;
                case "fixed":
                  return Jt.FIXED;
                case "sticky":
                  return Jt.STICKY;
              }
              return Jt.STATIC;
            }
          },
          Yt = {
            name: "text-shadow",
            initialValue: "none",
            type: se.LIST,
            prefix: !1,
            parse: function(A) {
              return 1 === A.length && DA(A[0], "none")
                ? []
                : _A(A).map(function(A) {
                    for (
                      var e = {
                          color: ce.TRANSPARENT,
                          offsetX: XA,
                          offsetY: XA,
                          blur: XA
                        },
                        t = 0,
                        r = 0;
                      r < A.length;
                      r++
                    ) {
                      var n = A[r];
                      xA(n)
                        ? (0 === t
                            ? (e.offsetX = n)
                            : 1 === t
                            ? (e.offsetY = n)
                            : (e.blur = n),
                          t++)
                        : (e.color = $A(n));
                    }
                    return e;
                  });
            }
          };
        !(function(A) {
          (A[(A.NONE = 0)] = "NONE"),
            (A[(A.LOWERCASE = 1)] = "LOWERCASE"),
            (A[(A.UPPERCASE = 2)] = "UPPERCASE"),
            (A[(A.CAPITALIZE = 3)] = "CAPITALIZE");
        })(kt || (kt = {}));
        var qt,
          jt = {
            name: "text-transform",
            initialValue: "none",
            prefix: !1,
            type: se.IDENT_VALUE,
            parse: function(A) {
              switch (A) {
                case "uppercase":
                  return kt.UPPERCASE;
                case "lowercase":
                  return kt.LOWERCASE;
                case "capitalize":
                  return kt.CAPITALIZE;
              }
              return kt.NONE;
            }
          },
          Zt = {
            name: "transform",
            initialValue: "none",
            prefix: !0,
            type: se.VALUE,
            parse: function(A) {
              if (A.type === u.IDENT_TOKEN && "none" === A.value) return null;
              if (A.type === u.FUNCTION) {
                var e = $t[A.name];
                if (void 0 === e)
                  throw new Error(
                    'Attempting to parse an unsupported transform function "' +
                      A.name +
                      '"'
                  );
                return e(A.values);
              }
              return null;
            }
          },
          $t = {
            matrix: function(A) {
              var e = A.filter(function(A) {
                return A.type === u.NUMBER_TOKEN;
              }).map(function(A) {
                return A.number;
              });
              return 6 === e.length ? e : null;
            },
            matrix3d: function(A) {
              var e = A.filter(function(A) {
                  return A.type === u.NUMBER_TOKEN;
                }).map(function(A) {
                  return A.number;
                }),
                t = e[0],
                r = e[1],
                n = (e[2], e[3], e[4]),
                B = e[5],
                s = (e[6], e[7], e[8], e[9], e[10], e[11], e[12]),
                o = e[13];
              return e[14], e[15], 16 === e.length ? [t, r, n, B, s, o] : null;
            }
          },
          Ar = { type: u.PERCENTAGE_TOKEN, number: 50, flags: 4 },
          er = [Ar, Ar],
          tr = {
            name: "transform-origin",
            initialValue: "50% 50%",
            prefix: !0,
            type: se.LIST,
            parse: function(A) {
              var e = A.filter(VA);
              return 2 !== e.length ? er : [e[0], e[1]];
            }
          };
        !(function(A) {
          (A[(A.VISIBLE = 0)] = "VISIBLE"),
            (A[(A.HIDDEN = 1)] = "HIDDEN"),
            (A[(A.COLLAPSE = 2)] = "COLLAPSE");
        })(qt || (qt = {}));
        var rr,
          nr = {
            name: "visible",
            initialValue: "none",
            prefix: !1,
            type: se.IDENT_VALUE,
            parse: function(A) {
              switch (A) {
                case "hidden":
                  return qt.HIDDEN;
                case "collapse":
                  return qt.COLLAPSE;
                case "visible":
                default:
                  return qt.VISIBLE;
              }
            }
          };
        !(function(A) {
          (A.NORMAL = "normal"),
            (A.BREAK_ALL = "break-all"),
            (A.KEEP_ALL = "keep-all");
        })(rr || (rr = {}));
        var Br,
          sr = {
            name: "word-break",
            initialValue: "normal",
            prefix: !1,
            type: se.IDENT_VALUE,
            parse: function(A) {
              switch (A) {
                case "break-all":
                  return rr.BREAK_ALL;
                case "keep-all":
                  return rr.KEEP_ALL;
                case "normal":
                default:
                  return rr.NORMAL;
              }
            }
          },
          or = {
            name: "z-index",
            initialValue: "auto",
            prefix: !1,
            type: se.VALUE,
            parse: function(A) {
              if (A.type === u.IDENT_TOKEN) return { auto: !0, order: 0 };
              if (OA(A)) return { auto: !1, order: A.number };
              throw new Error("Invalid z-index number parsed");
            }
          },
          ir = {
            name: "opacity",
            initialValue: "1",
            type: se.VALUE,
            prefix: !1,
            parse: function(A) {
              return OA(A) ? A.number : 1;
            }
          },
          ar = {
            name: "text-decoration-color",
            initialValue: "transparent",
            prefix: !1,
            type: se.TYPE_VALUE,
            format: "color"
          },
          cr = {
            name: "text-decoration-line",
            initialValue: "none",
            prefix: !1,
            type: se.LIST,
            parse: function(A) {
              return A.filter(bA)
                .map(function(A) {
                  switch (A.value) {
                    case "underline":
                      return 1;
                    case "overline":
                      return 2;
                    case "line-through":
                      return 3;
                    case "none":
                      return 4;
                  }
                  return 0;
                })
                .filter(function(A) {
                  return 0 !== A;
                });
            }
          },
          Qr = {
            name: "font-family",
            initialValue: "",
            prefix: !1,
            type: se.LIST,
            parse: function(A) {
              return A.filter(ur).map(function(A) {
                return A.value;
              });
            }
          },
          ur = function(A) {
            return A.type === u.STRING_TOKEN || A.type === u.IDENT_TOKEN;
          },
          wr = {
            name: "font-size",
            initialValue: "0",
            prefix: !1,
            type: se.TYPE_VALUE,
            format: "length"
          },
          Ur = {
            name: "font-weight",
            initialValue: "normal",
            type: se.VALUE,
            prefix: !1,
            parse: function(A) {
              if (OA(A)) return A.number;
              if (bA(A))
                switch (A.value) {
                  case "bold":
                    return 700;
                  case "normal":
                  default:
                    return 400;
                }
              return 400;
            }
          },
          lr = {
            name: "font-variant",
            initialValue: "none",
            type: se.LIST,
            prefix: !1,
            parse: function(A) {
              return A.filter(bA).map(function(A) {
                return A.value;
              });
            }
          };
        !(function(A) {
          (A.NORMAL = "normal"), (A.ITALIC = "italic"), (A.OBLIQUE = "oblique");
        })(Br || (Br = {}));
        var Cr,
          gr = {
            name: "font-style",
            initialValue: "normal",
            prefix: !1,
            type: se.IDENT_VALUE,
            parse: function(A) {
              switch (A) {
                case "oblique":
                  return Br.OBLIQUE;
                case "italic":
                  return Br.ITALIC;
                case "normal":
                default:
                  return Br.NORMAL;
              }
            }
          },
          Er = function(A, e) {
            return 0 != (A & e);
          },
          Fr = {
            name: "content",
            initialValue: "none",
            type: se.LIST,
            prefix: !1,
            parse: function(A) {
              if (0 === A.length) return [];
              var e = A[0];
              return e.type === u.IDENT_TOKEN && "none" === e.value ? [] : A;
            }
          },
          hr = {
            name: "counter-increment",
            initialValue: "none",
            prefix: !0,
            type: se.LIST,
            parse: function(A) {
              if (0 === A.length) return null;
              var e = A[0];
              if (e.type === u.IDENT_TOKEN && "none" === e.value) return null;
              for (var t = [], r = A.filter(yA), n = 0; n < r.length; n++) {
                var B = r[n],
                  s = r[n + 1];
                if (B.type === u.IDENT_TOKEN) {
                  var o = s && OA(s) ? s.number : 1;
                  t.push({ counter: B.value, increment: o });
                }
              }
              return t;
            }
          },
          Hr = {
            name: "counter-reset",
            initialValue: "none",
            prefix: !0,
            type: se.LIST,
            parse: function(A) {
              if (0 === A.length) return [];
              for (var e = [], t = A.filter(yA), r = 0; r < t.length; r++) {
                var n = t[r],
                  B = t[r + 1];
                if (bA(n) && "none" !== n.value) {
                  var s = B && OA(B) ? B.number : 0;
                  e.push({ counter: n.value, reset: s });
                }
              }
              return e;
            }
          },
          fr = {
            name: "quotes",
            initialValue: "none",
            prefix: !0,
            type: se.LIST,
            parse: function(A) {
              if (0 === A.length) return null;
              var e = A[0];
              if (e.type === u.IDENT_TOKEN && "none" === e.value) return null;
              var t = [],
                r = A.filter(SA);
              if (r.length % 2 != 0) return null;
              for (var n = 0; n < r.length; n += 2) {
                var B = r[n].value,
                  s = r[n + 1].value;
                t.push({ open: B, close: s });
              }
              return t;
            }
          },
          dr = function(A, e, t) {
            if (!A) return "";
            var r = A[Math.min(e, A.length - 1)];
            return r ? (t ? r.open : r.close) : "";
          },
          pr = {
            name: "box-shadow",
            initialValue: "none",
            type: se.LIST,
            prefix: !1,
            parse: function(A) {
              return 1 === A.length && DA(A[0], "none")
                ? []
                : _A(A).map(function(A) {
                    for (
                      var e = {
                          color: 255,
                          offsetX: XA,
                          offsetY: XA,
                          blur: XA,
                          spread: XA,
                          inset: !1
                        },
                        t = 0,
                        r = 0;
                      r < A.length;
                      r++
                    ) {
                      var n = A[r];
                      DA(n, "inset")
                        ? (e.inset = !0)
                        : xA(n)
                        ? (0 === t
                            ? (e.offsetX = n)
                            : 1 === t
                            ? (e.offsetY = n)
                            : 2 === t
                            ? (e.blur = n)
                            : (e.spread = n),
                          t++)
                        : (e.color = $A(n));
                    }
                    return e;
                  });
            }
          },
          Nr = (function() {
            function A(A) {
              (this.backgroundClip = mr(Ue, A.backgroundClip)),
                (this.backgroundColor = mr(le, A.backgroundColor)),
                (this.backgroundImage = mr(xe, A.backgroundImage)),
                (this.backgroundOrigin = mr(Ve, A.backgroundOrigin)),
                (this.backgroundPosition = mr(ze, A.backgroundPosition)),
                (this.backgroundRepeat = mr(Je, A.backgroundRepeat)),
                (this.backgroundSize = mr(We, A.backgroundSize)),
                (this.borderTopColor = mr(je, A.borderTopColor)),
                (this.borderRightColor = mr(Ze, A.borderRightColor)),
                (this.borderBottomColor = mr($e, A.borderBottomColor)),
                (this.borderLeftColor = mr(At, A.borderLeftColor)),
                (this.borderTopLeftRadius = mr(tt, A.borderTopLeftRadius)),
                (this.borderTopRightRadius = mr(rt, A.borderTopRightRadius)),
                (this.borderBottomRightRadius = mr(
                  nt,
                  A.borderBottomRightRadius
                )),
                (this.borderBottomLeftRadius = mr(
                  Bt,
                  A.borderBottomLeftRadius
                )),
                (this.borderTopStyle = mr(it, A.borderTopStyle)),
                (this.borderRightStyle = mr(at, A.borderRightStyle)),
                (this.borderBottomStyle = mr(ct, A.borderBottomStyle)),
                (this.borderLeftStyle = mr(Qt, A.borderLeftStyle)),
                (this.borderTopWidth = mr(wt, A.borderTopWidth)),
                (this.borderRightWidth = mr(Ut, A.borderRightWidth)),
                (this.borderBottomWidth = mr(lt, A.borderBottomWidth)),
                (this.borderLeftWidth = mr(Ct, A.borderLeftWidth)),
                (this.boxShadow = mr(pr, A.boxShadow)),
                (this.color = mr(gt, A.color)),
                (this.display = mr(Et, A.display)),
                (this.float = mr(Ht, A.cssFloat)),
                (this.fontFamily = mr(Qr, A.fontFamily)),
                (this.fontSize = mr(wr, A.fontSize)),
                (this.fontStyle = mr(gr, A.fontStyle)),
                (this.fontVariant = mr(lr, A.fontVariant)),
                (this.fontWeight = mr(Ur, A.fontWeight)),
                (this.letterSpacing = mr(ft, A.letterSpacing)),
                (this.lineBreak = mr(pt, A.lineBreak)),
                (this.lineHeight = mr(Nt, A.lineHeight)),
                (this.listStyleImage = mr(Kt, A.listStyleImage)),
                (this.listStylePosition = mr(mt, A.listStylePosition)),
                (this.listStyleType = mr(Rt, A.listStyleType)),
                (this.marginTop = mr(vt, A.marginTop)),
                (this.marginRight = mr(Ot, A.marginRight)),
                (this.marginBottom = mr(bt, A.marginBottom)),
                (this.marginLeft = mr(St, A.marginLeft)),
                (this.opacity = mr(ir, A.opacity));
              var e = mr(yt, A.overflow);
              (this.overflowX = e[0]),
                (this.overflowY = e[e.length > 1 ? 1 : 0]),
                (this.overflowWrap = mr(_t, A.overflowWrap)),
                (this.paddingTop = mr(xt, A.paddingTop)),
                (this.paddingRight = mr(Vt, A.paddingRight)),
                (this.paddingBottom = mr(zt, A.paddingBottom)),
                (this.paddingLeft = mr(Xt, A.paddingLeft)),
                (this.position = mr(Wt, A.position)),
                (this.textAlign = mr(Gt, A.textAlign)),
                (this.textDecorationColor = mr(
                  ar,
                  A.textDecorationColor || A.color
                )),
                (this.textDecorationLine = mr(cr, A.textDecorationLine)),
                (this.textShadow = mr(Yt, A.textShadow)),
                (this.textTransform = mr(jt, A.textTransform)),
                (this.transform = mr(Zt, A.transform)),
                (this.transformOrigin = mr(tr, A.transformOrigin)),
                (this.visibility = mr(nr, A.visibility)),
                (this.wordBreak = mr(sr, A.wordBreak)),
                (this.zIndex = mr(or, A.zIndex));
            }
            return (
              (A.prototype.isVisible = function() {
                return (
                  this.display > 0 &&
                  this.opacity > 0 &&
                  this.visibility === qt.VISIBLE
                );
              }),
              (A.prototype.isTransparent = function() {
                return Ae(this.backgroundColor);
              }),
              (A.prototype.isTransformed = function() {
                return null !== this.transform;
              }),
              (A.prototype.isPositioned = function() {
                return this.position !== Jt.STATIC;
              }),
              (A.prototype.isPositionedWithZIndex = function() {
                return this.isPositioned() && !this.zIndex.auto;
              }),
              (A.prototype.isFloating = function() {
                return this.float !== st.NONE;
              }),
              (A.prototype.isInlineLevel = function() {
                return (
                  Er(this.display, 4) ||
                  Er(this.display, 33554432) ||
                  Er(this.display, 268435456) ||
                  Er(this.display, 536870912) ||
                  Er(this.display, 67108864) ||
                  Er(this.display, 134217728)
                );
              }),
              A
            );
          })(),
          Kr = function(A) {
            (this.content = mr(Fr, A.content)),
              (this.quotes = mr(fr, A.quotes));
          },
          Ir = function(A) {
            (this.counterIncrement = mr(hr, A.counterIncrement)),
              (this.counterReset = mr(Hr, A.counterReset));
          },
          mr = function(A, e) {
            var t = new RA(),
              r = null != e ? e.toString() : A.initialValue;
            t.write(r);
            var n = new LA(t.read());
            switch (A.type) {
              case se.IDENT_VALUE:
                var B = n.parseComponentValue();
                return A.parse(bA(B) ? B.value : A.initialValue);
              case se.VALUE:
                return A.parse(n.parseComponentValue());
              case se.LIST:
                return A.parse(n.parseComponentValues());
              case se.TOKEN_VALUE:
                return n.parseComponentValue();
              case se.TYPE_VALUE:
                switch (A.format) {
                  case "angle":
                    return YA(n.parseComponentValue());
                  case "color":
                    return $A(n.parseComponentValue());
                  case "image":
                    return _e(n.parseComponentValue());
                  case "length":
                    var s = n.parseComponentValue();
                    return xA(s) ? s : XA;
                  case "length-percentage":
                    var o = n.parseComponentValue();
                    return VA(o) ? o : XA;
                }
            }
            throw new Error(
              "Attempting to parse unsupported css format type " + A.format
            );
          },
          Tr = function(A) {
            (this.styles = new Nr(window.getComputedStyle(A, null))),
              (this.textNodes = []),
              (this.elements = []),
              null !== this.styles.transform &&
                un(A) &&
                (A.style.transform = "none"),
              (this.bounds = s(A)),
              (this.flags = 0);
          },
          Rr = function(A, e) {
            (this.text = A), (this.bounds = e);
          },
          Lr = function(A, e, t) {
            var r = br(A, e),
              n = [],
              B = 0;
            return (
              r.forEach(function(A) {
                if (e.textDecorationLine.length || A.trim().length > 0)
                  if (Ne.SUPPORT_RANGE_BOUNDS)
                    n.push(new Rr(A, Or(t, B, A.length)));
                  else {
                    var r = t.splitText(A.length);
                    n.push(new Rr(A, vr(t))), (t = r);
                  }
                else Ne.SUPPORT_RANGE_BOUNDS || (t = t.splitText(A.length));
                B += A.length;
              }),
              n
            );
          },
          vr = function(A) {
            var e = A.ownerDocument;
            if (e) {
              var t = e.createElement("html2canvaswrapper");
              t.appendChild(A.cloneNode(!0));
              var r = A.parentNode;
              if (r) {
                r.replaceChild(t, A);
                var n = s(t);
                return t.firstChild && r.replaceChild(t.firstChild, t), n;
              }
            }
            return new B(0, 0, 0, 0);
          },
          Or = function(A, e, t) {
            var r = A.ownerDocument;
            if (!r) throw new Error("Node has no owner document");
            var n = r.createRange();
            return (
              n.setStart(A, e),
              n.setEnd(A, e + t),
              B.fromClientRect(n.getBoundingClientRect())
            );
          },
          br = function(A, e) {
            return 0 !== e.letterSpacing
              ? o(A).map(function(A) {
                  return i(A);
                })
              : Sr(A, e);
          },
          Sr = function(A, e) {
            for (
              var t,
                r = (function(A, e) {
                  var t = o(A),
                    r = j(t, e),
                    n = r[0],
                    B = r[1],
                    s = r[2],
                    i = t.length,
                    a = 0,
                    c = 0;
                  return {
                    next: function() {
                      if (c >= i) return { done: !0, value: null };
                      for (
                        var A = "×";
                        c < i && "×" === (A = q(t, B, n, ++c, s));

                      );
                      if ("×" !== A || c === i) {
                        var e = new Z(t, A, a, c);
                        return (a = c), { value: e, done: !1 };
                      }
                      return { done: !0, value: null };
                    }
                  };
                })(A, {
                  lineBreak: e.lineBreak,
                  wordBreak:
                    e.overflowWrap === Dt.BREAK_WORD
                      ? "break-word"
                      : e.wordBreak
                }),
                n = [];
              !(t = r.next()).done;

            )
              t.value && n.push(t.value.slice());
            return n;
          },
          Dr = function(A, e) {
            (this.text = yr(A.data, e.textTransform)),
              (this.textBounds = Lr(this.text, e, A));
          },
          yr = function(A, e) {
            switch (e) {
              case kt.LOWERCASE:
                return A.toLowerCase();
              case kt.CAPITALIZE:
                return A.replace(Mr, _r);
              case kt.UPPERCASE:
                return A.toUpperCase();
              default:
                return A;
            }
          },
          Mr = /(^|\s|:|-|\(|\))([a-z])/g,
          _r = function(A, e, t) {
            return A.length > 0 ? e + t.toUpperCase() : A;
          },
          Pr = (function(A) {
            function t(e) {
              var t = A.call(this, e) || this;
              return (
                (t.src = e.currentSrc || e.src),
                (t.intrinsicWidth = e.naturalWidth),
                (t.intrinsicHeight = e.naturalHeight),
                Ie.getInstance().addImage(t.src),
                t
              );
            }
            return e(t, A), t;
          })(Tr),
          xr = (function(A) {
            function t(e) {
              var t = A.call(this, e) || this;
              return (
                (t.canvas = e),
                (t.intrinsicWidth = e.width),
                (t.intrinsicHeight = e.height),
                t
              );
            }
            return e(t, A), t;
          })(Tr),
          Vr = (function(A) {
            function t(e) {
              var t = A.call(this, e) || this,
                r = new XMLSerializer();
              return (
                (t.svg =
                  "data:image/svg+xml," +
                  encodeURIComponent(r.serializeToString(e))),
                (t.intrinsicWidth = e.width.baseVal.value),
                (t.intrinsicHeight = e.height.baseVal.value),
                Ie.getInstance().addImage(t.svg),
                t
              );
            }
            return e(t, A), t;
          })(Tr),
          zr = (function(A) {
            function t(e) {
              var t = A.call(this, e) || this;
              return (t.value = e.value), t;
            }
            return e(t, A), t;
          })(Tr),
          Xr = (function(A) {
            function t(e) {
              var t = A.call(this, e) || this;
              return (
                (t.start = e.start),
                (t.reversed =
                  "boolean" == typeof e.reversed && !0 === e.reversed),
                t
              );
            }
            return e(t, A), t;
          })(Tr),
          Jr = [{ type: u.DIMENSION_TOKEN, flags: 0, unit: "px", number: 3 }],
          Gr = [{ type: u.PERCENTAGE_TOKEN, flags: 0, number: 50 }],
          kr = function(A) {
            return A.width > A.height
              ? new B(
                  A.left + (A.width - A.height) / 2,
                  A.top,
                  A.height,
                  A.height
                )
              : A.width < A.height
              ? new B(
                  A.left,
                  A.top + (A.height - A.width) / 2,
                  A.width,
                  A.width
                )
              : A;
          },
          Wr = function(A) {
            var e =
              A.type === jr ? new Array(A.value.length + 1).join("•") : A.value;
            return 0 === e.length ? A.placeholder || "" : e;
          },
          Yr = "checkbox",
          qr = "radio",
          jr = "password",
          Zr = (function(A) {
            function t(e) {
              var t = A.call(this, e) || this;
              switch (
                ((t.type = e.type.toLowerCase()),
                (t.checked = e.checked),
                (t.value = Wr(e)),
                (t.type !== Yr && t.type !== qr) ||
                  ((t.styles.backgroundColor = 3739148031),
                  (t.styles.borderTopColor = t.styles.borderRightColor = t.styles.borderBottomColor = t.styles.borderLeftColor = 2779096575),
                  (t.styles.borderTopWidth = t.styles.borderRightWidth = t.styles.borderBottomWidth = t.styles.borderLeftWidth = 1),
                  (t.styles.borderTopStyle = t.styles.borderRightStyle = t.styles.borderBottomStyle = t.styles.borderLeftStyle =
                    ke.SOLID),
                  (t.styles.backgroundClip = [oe.BORDER_BOX]),
                  (t.styles.backgroundOrigin = [0]),
                  (t.bounds = kr(t.bounds))),
                t.type)
              ) {
                case Yr:
                  t.styles.borderTopRightRadius = t.styles.borderTopLeftRadius = t.styles.borderBottomRightRadius = t.styles.borderBottomLeftRadius = Jr;
                  break;
                case qr:
                  t.styles.borderTopRightRadius = t.styles.borderTopLeftRadius = t.styles.borderBottomRightRadius = t.styles.borderBottomLeftRadius = Gr;
              }
              return t;
            }
            return e(t, A), t;
          })(Tr),
          $r = (function(A) {
            function t(e) {
              var t = A.call(this, e) || this,
                r = e.options[e.selectedIndex || 0];
              return (t.value = (r && r.text) || ""), t;
            }
            return e(t, A), t;
          })(Tr),
          An = (function(A) {
            function t(e) {
              var t = A.call(this, e) || this;
              return (t.value = e.value), t;
            }
            return e(t, A), t;
          })(Tr),
          en = function(A) {
            return $A(LA.create(A).parseComponentValue());
          },
          tn = (function(A) {
            function t(e) {
              var t = A.call(this, e) || this;
              (t.src = e.src),
                (t.width = parseInt(e.width, 10)),
                (t.height = parseInt(e.height, 10)),
                (t.backgroundColor = t.styles.backgroundColor);
              try {
                if (
                  e.contentWindow &&
                  e.contentWindow.document &&
                  e.contentWindow.document.documentElement
                ) {
                  t.tree = sn(e.contentWindow.document.documentElement);
                  var r = e.contentWindow.document.documentElement
                      ? en(
                          getComputedStyle(
                            e.contentWindow.document.documentElement
                          ).backgroundColor
                        )
                      : ce.TRANSPARENT,
                    n = e.contentWindow.document.body
                      ? en(
                          getComputedStyle(e.contentWindow.document.body)
                            .backgroundColor
                        )
                      : ce.TRANSPARENT;
                  t.backgroundColor = Ae(r)
                    ? Ae(n)
                      ? t.styles.backgroundColor
                      : n
                    : r;
                }
              } catch (A) {}
              return t;
            }
            return e(t, A), t;
          })(Tr),
          rn = ["OL", "UL", "MENU"],
          nn = function(A, e, t) {
            for (var r = A.firstChild, n = void 0; r; r = n)
              if (((n = r.nextSibling), cn(r) && r.data.trim().length > 0))
                e.textNodes.push(new Dr(r, e.styles));
              else if (Qn(r)) {
                var B = Bn(r);
                B.styles.isVisible() &&
                  (on(r, B, t)
                    ? (B.flags |= 4)
                    : an(B.styles) && (B.flags |= 2),
                  -1 !== rn.indexOf(r.tagName) && (B.flags |= 8),
                  e.elements.push(B),
                  dn(r) || Cn(r) || pn(r) || nn(r, B, t));
              }
          },
          Bn = function(A) {
            return Fn(A)
              ? new Pr(A)
              : En(A)
              ? new xr(A)
              : Cn(A)
              ? new Vr(A)
              : wn(A)
              ? new zr(A)
              : Un(A)
              ? new Xr(A)
              : ln(A)
              ? new Zr(A)
              : pn(A)
              ? new $r(A)
              : dn(A)
              ? new An(A)
              : hn(A)
              ? new tn(A)
              : new Tr(A);
          },
          sn = function(A) {
            var e = Bn(A);
            return (e.flags |= 4), nn(A, e, e), e;
          },
          on = function(A, e, t) {
            return (
              e.styles.isPositionedWithZIndex() ||
              e.styles.opacity < 1 ||
              e.styles.isTransformed() ||
              (gn(A) && t.styles.isTransparent())
            );
          },
          an = function(A) {
            return A.isPositioned() || A.isFloating();
          },
          cn = function(A) {
            return A.nodeType === Node.TEXT_NODE;
          },
          Qn = function(A) {
            return A.nodeType === Node.ELEMENT_NODE;
          },
          un = function(A) {
            return void 0 !== A.style;
          },
          wn = function(A) {
            return "LI" === A.tagName;
          },
          Un = function(A) {
            return "OL" === A.tagName;
          },
          ln = function(A) {
            return "INPUT" === A.tagName;
          },
          Cn = function(A) {
            return "svg" === A.tagName;
          },
          gn = function(A) {
            return "BODY" === A.tagName;
          },
          En = function(A) {
            return "CANVAS" === A.tagName;
          },
          Fn = function(A) {
            return "IMG" === A.tagName;
          },
          hn = function(A) {
            return "IFRAME" === A.tagName;
          },
          Hn = function(A) {
            return "STYLE" === A.tagName;
          },
          fn = function(A) {
            return "SCRIPT" === A.tagName;
          },
          dn = function(A) {
            return "TEXTAREA" === A.tagName;
          },
          pn = function(A) {
            return "SELECT" === A.tagName;
          },
          Nn = (function() {
            function A() {
              this.counters = {};
            }
            return (
              (A.prototype.getCounterValue = function(A) {
                var e = this.counters[A];
                return e && e.length ? e[e.length - 1] : 1;
              }),
              (A.prototype.getCounterValues = function(A) {
                var e = this.counters[A];
                return e || [];
              }),
              (A.prototype.pop = function(A) {
                var e = this;
                A.forEach(function(A) {
                  return e.counters[A].pop();
                });
              }),
              (A.prototype.parse = function(A) {
                var e = this,
                  t = A.counterIncrement,
                  r = A.counterReset;
                null !== t &&
                  t.forEach(function(A) {
                    var t = e.counters[A.counter];
                    t && (t[Math.max(0, t.length - 1)] += A.increment);
                  });
                var n = [];
                return (
                  r.forEach(function(A) {
                    var t = e.counters[A.counter];
                    n.push(A.counter),
                      t || (t = e.counters[A.counter] = []),
                      t.push(A.reset);
                  }),
                  n
                );
              }),
              A
            );
          })(),
          Kn = {
            integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            values: [
              "M",
              "CM",
              "D",
              "CD",
              "C",
              "XC",
              "L",
              "XL",
              "X",
              "IX",
              "V",
              "IV",
              "I"
            ]
          },
          In = {
            integers: [
              9e3,
              8e3,
              7e3,
              6e3,
              5e3,
              4e3,
              3e3,
              2e3,
              1e3,
              900,
              800,
              700,
              600,
              500,
              400,
              300,
              200,
              100,
              90,
              80,
              70,
              60,
              50,
              40,
              30,
              20,
              10,
              9,
              8,
              7,
              6,
              5,
              4,
              3,
              2,
              1
            ],
            values: [
              "Ք",
              "Փ",
              "Ւ",
              "Ց",
              "Ր",
              "Տ",
              "Վ",
              "Ս",
              "Ռ",
              "Ջ",
              "Պ",
              "Չ",
              "Ո",
              "Շ",
              "Ն",
              "Յ",
              "Մ",
              "Ճ",
              "Ղ",
              "Ձ",
              "Հ",
              "Կ",
              "Ծ",
              "Խ",
              "Լ",
              "Ի",
              "Ժ",
              "Թ",
              "Ը",
              "Է",
              "Զ",
              "Ե",
              "Դ",
              "Գ",
              "Բ",
              "Ա"
            ]
          },
          mn = {
            integers: [
              1e4,
              9e3,
              8e3,
              7e3,
              6e3,
              5e3,
              4e3,
              3e3,
              2e3,
              1e3,
              400,
              300,
              200,
              100,
              90,
              80,
              70,
              60,
              50,
              40,
              30,
              20,
              19,
              18,
              17,
              16,
              15,
              10,
              9,
              8,
              7,
              6,
              5,
              4,
              3,
              2,
              1
            ],
            values: [
              "י׳",
              "ט׳",
              "ח׳",
              "ז׳",
              "ו׳",
              "ה׳",
              "ד׳",
              "ג׳",
              "ב׳",
              "א׳",
              "ת",
              "ש",
              "ר",
              "ק",
              "צ",
              "פ",
              "ע",
              "ס",
              "נ",
              "מ",
              "ל",
              "כ",
              "יט",
              "יח",
              "יז",
              "טז",
              "טו",
              "י",
              "ט",
              "ח",
              "ז",
              "ו",
              "ה",
              "ד",
              "ג",
              "ב",
              "א"
            ]
          },
          Tn = {
            integers: [
              1e4,
              9e3,
              8e3,
              7e3,
              6e3,
              5e3,
              4e3,
              3e3,
              2e3,
              1e3,
              900,
              800,
              700,
              600,
              500,
              400,
              300,
              200,
              100,
              90,
              80,
              70,
              60,
              50,
              40,
              30,
              20,
              10,
              9,
              8,
              7,
              6,
              5,
              4,
              3,
              2,
              1
            ],
            values: [
              "ჵ",
              "ჰ",
              "ჯ",
              "ჴ",
              "ხ",
              "ჭ",
              "წ",
              "ძ",
              "ც",
              "ჩ",
              "შ",
              "ყ",
              "ღ",
              "ქ",
              "ფ",
              "ჳ",
              "ტ",
              "ს",
              "რ",
              "ჟ",
              "პ",
              "ო",
              "ჲ",
              "ნ",
              "მ",
              "ლ",
              "კ",
              "ი",
              "თ",
              "ჱ",
              "ზ",
              "ვ",
              "ე",
              "დ",
              "გ",
              "ბ",
              "ა"
            ]
          },
          Rn = function(A, e, t, r, n, B) {
            return A < e || A > t
              ? Sn(A, n, B.length > 0)
              : r.integers.reduce(function(e, t, n) {
                  for (; A >= t; ) (A -= t), (e += r.values[n]);
                  return e;
                }, "") + B;
          },
          Ln = function(A, e, t, r) {
            var n = "";
            do {
              t || A--, (n = r(A) + n), (A /= e);
            } while (A * e >= e);
            return n;
          },
          vn = function(A, e, t, r, n) {
            var B = t - e + 1;
            return (
              (A < 0 ? "-" : "") +
              (Ln(Math.abs(A), B, r, function(A) {
                return i(Math.floor(A % B) + e);
              }) +
                n)
            );
          },
          On = function(A, e, t) {
            void 0 === t && (t = ". ");
            var r = e.length;
            return (
              Ln(Math.abs(A), r, !1, function(A) {
                return e[Math.floor(A % r)];
              }) + t
            );
          },
          bn = function(A, e, t, r, n, B) {
            if (A < -9999 || A > 9999)
              return Sn(A, It.CJK_DECIMAL, n.length > 0);
            var s = Math.abs(A),
              o = n;
            if (0 === s) return e[0] + o;
            for (var i = 0; s > 0 && i <= 4; i++) {
              var a = s % 10;
              0 === a && Er(B, 1) && "" !== o
                ? (o = e[a] + o)
                : a > 1 ||
                  (1 === a && 0 === i) ||
                  (1 === a && 1 === i && Er(B, 2)) ||
                  (1 === a && 1 === i && Er(B, 4) && A > 100) ||
                  (1 === a && i > 1 && Er(B, 8))
                ? (o = e[a] + (i > 0 ? t[i - 1] : "") + o)
                : 1 === a && i > 0 && (o = t[i - 1] + o),
                (s = Math.floor(s / 10));
            }
            return (A < 0 ? r : "") + o;
          },
          Sn = function(A, e, t) {
            var r = t ? ". " : "",
              n = t ? "、" : "",
              B = t ? ", " : "",
              s = t ? " " : "";
            switch (e) {
              case It.DISC:
                return "•" + s;
              case It.CIRCLE:
                return "◦" + s;
              case It.SQUARE:
                return "◾" + s;
              case It.DECIMAL_LEADING_ZERO:
                var o = vn(A, 48, 57, !0, r);
                return o.length < 4 ? "0" + o : o;
              case It.CJK_DECIMAL:
                return On(A, "〇一二三四五六七八九", n);
              case It.LOWER_ROMAN:
                return Rn(A, 1, 3999, Kn, It.DECIMAL, r).toLowerCase();
              case It.UPPER_ROMAN:
                return Rn(A, 1, 3999, Kn, It.DECIMAL, r);
              case It.LOWER_GREEK:
                return vn(A, 945, 969, !1, r);
              case It.LOWER_ALPHA:
                return vn(A, 97, 122, !1, r);
              case It.UPPER_ALPHA:
                return vn(A, 65, 90, !1, r);
              case It.ARABIC_INDIC:
                return vn(A, 1632, 1641, !0, r);
              case It.ARMENIAN:
              case It.UPPER_ARMENIAN:
                return Rn(A, 1, 9999, In, It.DECIMAL, r);
              case It.LOWER_ARMENIAN:
                return Rn(A, 1, 9999, In, It.DECIMAL, r).toLowerCase();
              case It.BENGALI:
                return vn(A, 2534, 2543, !0, r);
              case It.CAMBODIAN:
              case It.KHMER:
                return vn(A, 6112, 6121, !0, r);
              case It.CJK_EARTHLY_BRANCH:
                return On(A, "子丑寅卯辰巳午未申酉戌亥", n);
              case It.CJK_HEAVENLY_STEM:
                return On(A, "甲乙丙丁戊己庚辛壬癸", n);
              case It.CJK_IDEOGRAPHIC:
              case It.TRAD_CHINESE_INFORMAL:
                return bn(A, "零一二三四五六七八九", "十百千萬", "負", n, 14);
              case It.TRAD_CHINESE_FORMAL:
                return bn(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", n, 15);
              case It.SIMP_CHINESE_INFORMAL:
                return bn(A, "零一二三四五六七八九", "十百千萬", "负", n, 14);
              case It.SIMP_CHINESE_FORMAL:
                return bn(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", n, 15);
              case It.JAPANESE_INFORMAL:
                return bn(
                  A,
                  "〇一二三四五六七八九",
                  "十百千万",
                  "マイナス",
                  n,
                  0
                );
              case It.JAPANESE_FORMAL:
                return bn(
                  A,
                  "零壱弐参四伍六七八九",
                  "拾百千万",
                  "マイナス",
                  n,
                  7
                );
              case It.KOREAN_HANGUL_FORMAL:
                return bn(
                  A,
                  "영일이삼사오육칠팔구",
                  "십백천만",
                  "마이너스",
                  B,
                  7
                );
              case It.KOREAN_HANJA_INFORMAL:
                return bn(
                  A,
                  "零一二三四五六七八九",
                  "十百千萬",
                  "마이너스",
                  B,
                  0
                );
              case It.KOREAN_HANJA_FORMAL:
                return bn(
                  A,
                  "零壹貳參四五六七八九",
                  "拾百千",
                  "마이너스",
                  B,
                  7
                );
              case It.DEVANAGARI:
                return vn(A, 2406, 2415, !0, r);
              case It.GEORGIAN:
                return Rn(A, 1, 19999, Tn, It.DECIMAL, r);
              case It.GUJARATI:
                return vn(A, 2790, 2799, !0, r);
              case It.GURMUKHI:
                return vn(A, 2662, 2671, !0, r);
              case It.HEBREW:
                return Rn(A, 1, 10999, mn, It.DECIMAL, r);
              case It.HIRAGANA:
                return On(
                  A,
                  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん"
                );
              case It.HIRAGANA_IROHA:
                return On(
                  A,
                  "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす"
                );
              case It.KANNADA:
                return vn(A, 3302, 3311, !0, r);
              case It.KATAKANA:
                return On(
                  A,
                  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",
                  n
                );
              case It.KATAKANA_IROHA:
                return On(
                  A,
                  "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",
                  n
                );
              case It.LAO:
                return vn(A, 3792, 3801, !0, r);
              case It.MONGOLIAN:
                return vn(A, 6160, 6169, !0, r);
              case It.MYANMAR:
                return vn(A, 4160, 4169, !0, r);
              case It.ORIYA:
                return vn(A, 2918, 2927, !0, r);
              case It.PERSIAN:
                return vn(A, 1776, 1785, !0, r);
              case It.TAMIL:
                return vn(A, 3046, 3055, !0, r);
              case It.TELUGU:
                return vn(A, 3174, 3183, !0, r);
              case It.THAI:
                return vn(A, 3664, 3673, !0, r);
              case It.TIBETAN:
                return vn(A, 3872, 3881, !0, r);
              case It.DECIMAL:
              default:
                return vn(A, 48, 57, !0, r);
            }
          },
          Dn = (function() {
            function A(A, e) {
              if (
                ((this.options = e),
                (this.scrolledElements = []),
                (this.referenceElement = A),
                (this.counters = new Nn()),
                (this.quoteDepth = 0),
                !A.ownerDocument)
              )
                throw new Error(
                  "Cloned element does not have an owner document"
                );
              this.documentElement = this.cloneNode(
                A.ownerDocument.documentElement
              );
            }
            return (
              (A.prototype.toIFrame = function(A, e) {
                var t = this,
                  r = Mn(A, e);
                if (!r.contentWindow)
                  return Promise.reject("Unable to find iframe window");
                var n = A.defaultView.pageXOffset,
                  B = A.defaultView.pageYOffset,
                  s = r.contentWindow,
                  o = s.document,
                  i = _n(r).then(function() {
                    t.scrolledElements.forEach(zn),
                      s &&
                        (s.scrollTo(e.left, e.top),
                        !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) ||
                          (s.scrollY === e.top && s.scrollX === e.left) ||
                          ((o.documentElement.style.top = -e.top + "px"),
                          (o.documentElement.style.left = -e.left + "px"),
                          (o.documentElement.style.position = "absolute")));
                    var A = t.options.onclone;
                    return void 0 === t.clonedReferenceElement
                      ? Promise.reject(
                          "Error finding the " +
                            t.referenceElement.nodeName +
                            " in the cloned document"
                        )
                      : "function" == typeof A
                      ? Promise.resolve()
                          .then(function() {
                            return A(o);
                          })
                          .then(function() {
                            return r;
                          })
                      : r;
                  });
                return (
                  o.open(),
                  o.write(xn(document.doctype) + "<html></html>"),
                  Vn(this.referenceElement.ownerDocument, n, B),
                  o.replaceChild(
                    o.adoptNode(this.documentElement),
                    o.documentElement
                  ),
                  o.close(),
                  i
                );
              }),
              (A.prototype.createElementClone = function(A) {
                return En(A)
                  ? this.createCanvasClone(A)
                  : Hn(A)
                  ? this.createStyleClone(A)
                  : A.cloneNode(!1);
              }),
              (A.prototype.createStyleClone = function(A) {
                try {
                  var e = A.sheet;
                  if (e && e.cssRules) {
                    var t = [].slice.call(e.cssRules, 0).reduce(function(A, e) {
                        return e && "string" == typeof e.cssText
                          ? A + e.cssText
                          : A;
                      }, ""),
                      r = A.cloneNode(!1);
                    return (r.textContent = t), r;
                  }
                } catch (A) {
                  if (
                    (Ke.getInstance(this.options.id).error(
                      "Unable to access cssRules property",
                      A
                    ),
                    "SecurityError" !== A.name)
                  )
                    throw A;
                }
                return A.cloneNode(!1);
              }),
              (A.prototype.createCanvasClone = function(A) {
                if (this.options.inlineImages && A.ownerDocument) {
                  var e = A.ownerDocument.createElement("img");
                  try {
                    return (e.src = A.toDataURL()), e;
                  } catch (A) {
                    Ke.getInstance(this.options.id).info(
                      "Unable to clone canvas contents, canvas is tainted"
                    );
                  }
                }
                var t = A.cloneNode(!1);
                try {
                  (t.width = A.width), (t.height = A.height);
                  var r = A.getContext("2d"),
                    n = t.getContext("2d");
                  return (
                    n &&
                      (r
                        ? n.putImageData(
                            r.getImageData(0, 0, A.width, A.height),
                            0,
                            0
                          )
                        : n.drawImage(A, 0, 0)),
                    t
                  );
                } catch (A) {}
                return t;
              }),
              (A.prototype.cloneNode = function(A) {
                if (cn(A)) return document.createTextNode(A.data);
                if (!A.ownerDocument) return A.cloneNode(!1);
                var e = A.ownerDocument.defaultView;
                if (un(A) && e) {
                  var t = this.createElementClone(A),
                    r = e.getComputedStyle(A),
                    n = e.getComputedStyle(A, ":before"),
                    B = e.getComputedStyle(A, ":after");
                  this.referenceElement === A &&
                    (this.clonedReferenceElement = t),
                    gn(t) && Gn(t);
                  for (
                    var s = this.counters.parse(new Ir(r)),
                      o = this.resolvePseudoContent(A, t, n, Cr.BEFORE),
                      i = A.firstChild;
                    i;
                    i = i.nextSibling
                  )
                    (Qn(i) &&
                      (fn(i) ||
                        i.hasAttribute("data-html2canvas-ignore") ||
                        ("function" == typeof this.options.ignoreElements &&
                          this.options.ignoreElements(i)))) ||
                      (this.options.copyStyles && Qn(i) && Hn(i)) ||
                      t.appendChild(this.cloneNode(i));
                  o && t.insertBefore(o, t.firstChild);
                  var a = this.resolvePseudoContent(A, t, B, Cr.AFTER);
                  return (
                    a && t.appendChild(a),
                    this.counters.pop(s),
                    r && this.options.copyStyles && !hn(A) && Pn(r, t),
                    (0 === A.scrollTop && 0 === A.scrollLeft) ||
                      this.scrolledElements.push([
                        t,
                        A.scrollLeft,
                        A.scrollTop
                      ]),
                    (dn(A) || pn(A)) && (dn(t) || pn(t)) && (t.value = A.value),
                    t
                  );
                }
                return A.cloneNode(!1);
              }),
              (A.prototype.resolvePseudoContent = function(A, e, t, r) {
                var n = this;
                if (t) {
                  var B = t.content,
                    s = e.ownerDocument;
                  if (
                    s &&
                    B &&
                    "none" !== B &&
                    "-moz-alt-content" !== B &&
                    "none" !== t.display
                  ) {
                    this.counters.parse(new Ir(t));
                    var o = new Kr(t),
                      i = s.createElement("html2canvaspseudoelement");
                    return (
                      Pn(t, i),
                      o.content.forEach(function(e) {
                        if (e.type === u.STRING_TOKEN)
                          i.appendChild(s.createTextNode(e.value));
                        else if (e.type === u.URL_TOKEN) {
                          var t = s.createElement("img");
                          (t.src = e.value),
                            (t.style.opacity = "1"),
                            i.appendChild(t);
                        } else if (e.type === u.FUNCTION) {
                          if ("attr" === e.name) {
                            var r = e.values.filter(bA);
                            r.length &&
                              i.appendChild(
                                s.createTextNode(
                                  A.getAttribute(r[0].value) || ""
                                )
                              );
                          } else if ("counter" === e.name) {
                            var B = e.values.filter(MA),
                              a = B[0],
                              c = B[1];
                            if (a && bA(a)) {
                              var Q = n.counters.getCounterValue(a.value),
                                w = c && bA(c) ? Rt.parse(c.value) : It.DECIMAL;
                              i.appendChild(s.createTextNode(Sn(Q, w, !1)));
                            }
                          } else if ("counters" === e.name) {
                            var U = e.values.filter(MA),
                              l = ((a = U[0]), U[1]);
                            if (((c = U[2]), a && bA(a))) {
                              var C = n.counters.getCounterValues(a.value),
                                g = c && bA(c) ? Rt.parse(c.value) : It.DECIMAL,
                                E =
                                  l && l.type === u.STRING_TOKEN ? l.value : "",
                                F = C.map(function(A) {
                                  return Sn(A, g, !1);
                                }).join(E);
                              i.appendChild(s.createTextNode(F));
                            }
                          }
                        } else if (e.type === u.IDENT_TOKEN)
                          switch (e.value) {
                            case "open-quote":
                              i.appendChild(
                                s.createTextNode(
                                  dr(o.quotes, n.quoteDepth++, !0)
                                )
                              );
                              break;
                            case "close-quote":
                              i.appendChild(
                                s.createTextNode(
                                  dr(o.quotes, --n.quoteDepth, !1)
                                )
                              );
                          }
                      }),
                      (i.className = Xn + " " + Jn),
                      (e.className += r === Cr.BEFORE ? " " + Xn : " " + Jn),
                      i
                    );
                  }
                }
              }),
              A
            );
          })();
        !(function(A) {
          (A[(A.BEFORE = 0)] = "BEFORE"), (A[(A.AFTER = 1)] = "AFTER");
        })(Cr || (Cr = {}));
        var yn,
          Mn = function(A, e) {
            var t = A.createElement("iframe");
            return (
              (t.className = "html2canvas-container"),
              (t.style.visibility = "hidden"),
              (t.style.position = "fixed"),
              (t.style.left = "-10000px"),
              (t.style.top = "0px"),
              (t.style.border = "0"),
              (t.width = e.width.toString()),
              (t.height = e.height.toString()),
              (t.scrolling = "no"),
              t.setAttribute("data-html2canvas-ignore", "true"),
              A.body.appendChild(t),
              t
            );
          },
          _n = function(A) {
            return new Promise(function(e, t) {
              var r = A.contentWindow;
              if (!r) return t("No window assigned for iframe");
              var n = r.document;
              r.onload = A.onload = n.onreadystatechange = function() {
                r.onload = A.onload = n.onreadystatechange = null;
                var t = setInterval(function() {
                  n.body.childNodes.length > 0 &&
                    "complete" === n.readyState &&
                    (clearInterval(t), e(A));
                }, 50);
              };
            });
          },
          Pn = function(A, e) {
            for (var t = A.length - 1; t >= 0; t--) {
              var r = A.item(t);
              "content" !== r && e.style.setProperty(r, A.getPropertyValue(r));
            }
            return e;
          },
          xn = function(A) {
            var e = "";
            return (
              A &&
                ((e += "<!DOCTYPE "),
                A.name && (e += A.name),
                A.internalSubset && (e += A.internalSubset),
                A.publicId && (e += '"' + A.publicId + '"'),
                A.systemId && (e += '"' + A.systemId + '"'),
                (e += ">")),
              e
            );
          },
          Vn = function(A, e, t) {
            A &&
              A.defaultView &&
              (e !== A.defaultView.pageXOffset ||
                t !== A.defaultView.pageYOffset) &&
              A.defaultView.scrollTo(e, t);
          },
          zn = function(A) {
            var e = A[0],
              t = A[1],
              r = A[2];
            (e.scrollLeft = t), (e.scrollTop = r);
          },
          Xn = "___html2canvas___pseudoelement_before",
          Jn = "___html2canvas___pseudoelement_after",
          Gn = function(A) {
            kn(
              A,
              "." +
                Xn +
                ':before{\n    content: "" !important;\n    display: none !important;\n}\n         .' +
                Jn +
                ':after{\n    content: "" !important;\n    display: none !important;\n}'
            );
          },
          kn = function(A, e) {
            var t = A.ownerDocument;
            if (t) {
              var r = t.createElement("style");
              (r.textContent = e), A.appendChild(r);
            }
          };
        !(function(A) {
          (A[(A.VECTOR = 0)] = "VECTOR"),
            (A[(A.BEZIER_CURVE = 1)] = "BEZIER_CURVE");
        })(yn || (yn = {}));
        var Wn,
          Yn = function(A, e) {
            return (
              A.length === e.length &&
              A.some(function(A, t) {
                return A === e[t];
              })
            );
          },
          qn = (function() {
            function A(A, e) {
              (this.type = yn.VECTOR), (this.x = A), (this.y = e);
            }
            return (
              (A.prototype.add = function(e, t) {
                return new A(this.x + e, this.y + t);
              }),
              A
            );
          })(),
          jn = function(A, e, t) {
            return new qn(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
          },
          Zn = (function() {
            function A(A, e, t, r) {
              (this.type = yn.BEZIER_CURVE),
                (this.start = A),
                (this.startControl = e),
                (this.endControl = t),
                (this.end = r);
            }
            return (
              (A.prototype.subdivide = function(e, t) {
                var r = jn(this.start, this.startControl, e),
                  n = jn(this.startControl, this.endControl, e),
                  B = jn(this.endControl, this.end, e),
                  s = jn(r, n, e),
                  o = jn(n, B, e),
                  i = jn(s, o, e);
                return t
                  ? new A(this.start, r, s, i)
                  : new A(i, o, B, this.end);
              }),
              (A.prototype.add = function(e, t) {
                return new A(
                  this.start.add(e, t),
                  this.startControl.add(e, t),
                  this.endControl.add(e, t),
                  this.end.add(e, t)
                );
              }),
              (A.prototype.reverse = function() {
                return new A(
                  this.end,
                  this.endControl,
                  this.startControl,
                  this.start
                );
              }),
              A
            );
          })(),
          $n = function(A) {
            return A.type === yn.BEZIER_CURVE;
          },
          AB = function(A) {
            var e = A.styles,
              t = A.bounds,
              r = kA(e.borderTopLeftRadius, t.width, t.height),
              n = r[0],
              B = r[1],
              s = kA(e.borderTopRightRadius, t.width, t.height),
              o = s[0],
              i = s[1],
              a = kA(e.borderBottomRightRadius, t.width, t.height),
              c = a[0],
              Q = a[1],
              u = kA(e.borderBottomLeftRadius, t.width, t.height),
              w = u[0],
              U = u[1],
              l = [];
            l.push((n + o) / t.width),
              l.push((w + c) / t.width),
              l.push((B + U) / t.height),
              l.push((i + Q) / t.height);
            var C = Math.max.apply(Math, l);
            C > 1 &&
              ((n /= C),
              (B /= C),
              (o /= C),
              (i /= C),
              (c /= C),
              (Q /= C),
              (w /= C),
              (U /= C));
            var g = t.width - o,
              E = t.height - Q,
              F = t.width - c,
              h = t.height - U,
              H = e.borderTopWidth,
              f = e.borderRightWidth,
              d = e.borderBottomWidth,
              p = e.borderLeftWidth,
              N = WA(e.paddingTop, A.bounds.width),
              K = WA(e.paddingRight, A.bounds.width),
              I = WA(e.paddingBottom, A.bounds.width),
              m = WA(e.paddingLeft, A.bounds.width);
            (this.topLeftBorderBox =
              n > 0 || B > 0
                ? eB(t.left, t.top, n, B, Wn.TOP_LEFT)
                : new qn(t.left, t.top)),
              (this.topRightBorderBox =
                o > 0 || i > 0
                  ? eB(t.left + g, t.top, o, i, Wn.TOP_RIGHT)
                  : new qn(t.left + t.width, t.top)),
              (this.bottomRightBorderBox =
                c > 0 || Q > 0
                  ? eB(t.left + F, t.top + E, c, Q, Wn.BOTTOM_RIGHT)
                  : new qn(t.left + t.width, t.top + t.height)),
              (this.bottomLeftBorderBox =
                w > 0 || U > 0
                  ? eB(t.left, t.top + h, w, U, Wn.BOTTOM_LEFT)
                  : new qn(t.left, t.top + t.height)),
              (this.topLeftPaddingBox =
                n > 0 || B > 0
                  ? eB(
                      t.left + p,
                      t.top + H,
                      Math.max(0, n - p),
                      Math.max(0, B - H),
                      Wn.TOP_LEFT
                    )
                  : new qn(t.left + p, t.top + H)),
              (this.topRightPaddingBox =
                o > 0 || i > 0
                  ? eB(
                      t.left + Math.min(g, t.width + p),
                      t.top + H,
                      g > t.width + p ? 0 : o - p,
                      i - H,
                      Wn.TOP_RIGHT
                    )
                  : new qn(t.left + t.width - f, t.top + H)),
              (this.bottomRightPaddingBox =
                c > 0 || Q > 0
                  ? eB(
                      t.left + Math.min(F, t.width - p),
                      t.top + Math.min(E, t.height + H),
                      Math.max(0, c - f),
                      Q - d,
                      Wn.BOTTOM_RIGHT
                    )
                  : new qn(t.left + t.width - f, t.top + t.height - d)),
              (this.bottomLeftPaddingBox =
                w > 0 || U > 0
                  ? eB(
                      t.left + p,
                      t.top + h,
                      Math.max(0, w - p),
                      U - d,
                      Wn.BOTTOM_LEFT
                    )
                  : new qn(t.left + p, t.top + t.height - d)),
              (this.topLeftContentBox =
                n > 0 || B > 0
                  ? eB(
                      t.left + p + m,
                      t.top + H + N,
                      Math.max(0, n - (p + m)),
                      Math.max(0, B - (H + N)),
                      Wn.TOP_LEFT
                    )
                  : new qn(t.left + p + m, t.top + H + N)),
              (this.topRightContentBox =
                o > 0 || i > 0
                  ? eB(
                      t.left + Math.min(g, t.width + p + m),
                      t.top + H + N,
                      g > t.width + p + m ? 0 : o - p + m,
                      i - (H + N),
                      Wn.TOP_RIGHT
                    )
                  : new qn(t.left + t.width - (f + K), t.top + H + N)),
              (this.bottomRightContentBox =
                c > 0 || Q > 0
                  ? eB(
                      t.left + Math.min(F, t.width - (p + m)),
                      t.top + Math.min(E, t.height + H + N),
                      Math.max(0, c - (f + K)),
                      Q - (d + I),
                      Wn.BOTTOM_RIGHT
                    )
                  : new qn(
                      t.left + t.width - (f + K),
                      t.top + t.height - (d + I)
                    )),
              (this.bottomLeftContentBox =
                w > 0 || U > 0
                  ? eB(
                      t.left + p + m,
                      t.top + h,
                      Math.max(0, w - (p + m)),
                      U - (d + I),
                      Wn.BOTTOM_LEFT
                    )
                  : new qn(t.left + p + m, t.top + t.height - (d + I)));
          };
        !(function(A) {
          (A[(A.TOP_LEFT = 0)] = "TOP_LEFT"),
            (A[(A.TOP_RIGHT = 1)] = "TOP_RIGHT"),
            (A[(A.BOTTOM_RIGHT = 2)] = "BOTTOM_RIGHT"),
            (A[(A.BOTTOM_LEFT = 3)] = "BOTTOM_LEFT");
        })(Wn || (Wn = {}));
        var eB = function(A, e, t, r, n) {
            var B = ((Math.sqrt(2) - 1) / 3) * 4,
              s = t * B,
              o = r * B,
              i = A + t,
              a = e + r;
            switch (n) {
              case Wn.TOP_LEFT:
                return new Zn(
                  new qn(A, a),
                  new qn(A, a - o),
                  new qn(i - s, e),
                  new qn(i, e)
                );
              case Wn.TOP_RIGHT:
                return new Zn(
                  new qn(A, e),
                  new qn(A + s, e),
                  new qn(i, a - o),
                  new qn(i, a)
                );
              case Wn.BOTTOM_RIGHT:
                return new Zn(
                  new qn(i, e),
                  new qn(i, e + o),
                  new qn(A + s, a),
                  new qn(A, a)
                );
              case Wn.BOTTOM_LEFT:
              default:
                return new Zn(
                  new qn(i, a),
                  new qn(i - s, a),
                  new qn(A, e + o),
                  new qn(A, e)
                );
            }
          },
          tB = function(A) {
            return [
              A.topLeftBorderBox,
              A.topRightBorderBox,
              A.bottomRightBorderBox,
              A.bottomLeftBorderBox
            ];
          },
          rB = function(A) {
            return [
              A.topLeftPaddingBox,
              A.topRightPaddingBox,
              A.bottomRightPaddingBox,
              A.bottomLeftPaddingBox
            ];
          },
          nB = function(A, e, t) {
            (this.type = 0),
              (this.offsetX = A),
              (this.offsetY = e),
              (this.matrix = t),
              (this.target = 6);
          },
          BB = function(A, e) {
            (this.type = 1), (this.target = e), (this.path = A);
          },
          sB = function(A) {
            (this.element = A),
              (this.inlineLevel = []),
              (this.nonInlineLevel = []),
              (this.negativeZIndex = []),
              (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
              (this.positiveZIndex = []),
              (this.nonPositionedFloats = []),
              (this.nonPositionedInlineLevel = []);
          },
          oB = (function() {
            function A(A, e) {
              if (
                ((this.container = A),
                (this.effects = e.slice(0)),
                (this.curves = new AB(A)),
                null !== A.styles.transform)
              ) {
                var t = A.bounds.left + A.styles.transformOrigin[0].number,
                  r = A.bounds.top + A.styles.transformOrigin[1].number,
                  n = A.styles.transform;
                this.effects.push(new nB(t, r, n));
              }
              if (A.styles.overflowX !== Tt.VISIBLE) {
                var B = tB(this.curves),
                  s = rB(this.curves);
                Yn(B, s)
                  ? this.effects.push(new BB(B, 6))
                  : (this.effects.push(new BB(B, 2)),
                    this.effects.push(new BB(s, 4)));
              }
            }
            return (
              (A.prototype.getParentEffects = function() {
                var A = this.effects.slice(0);
                if (this.container.styles.overflowX !== Tt.VISIBLE) {
                  var e = tB(this.curves),
                    t = rB(this.curves);
                  Yn(e, t) || A.push(new BB(t, 6));
                }
                return A;
              }),
              A
            );
          })(),
          iB = function(A, e, t, r) {
            A.container.elements.forEach(function(n) {
              var B = Er(n.flags, 4),
                s = Er(n.flags, 2),
                o = new oB(n, A.getParentEffects());
              Er(n.styles.display, 2048) && r.push(o);
              var i = Er(n.flags, 8) ? [] : r;
              if (B || s) {
                var a = B || n.styles.isPositioned() ? t : e,
                  c = new sB(o);
                if (
                  n.styles.isPositioned() ||
                  n.styles.opacity < 1 ||
                  n.styles.isTransformed()
                ) {
                  var Q = n.styles.zIndex.order;
                  if (Q < 0) {
                    var u = 0;
                    a.negativeZIndex.some(function(A, e) {
                      return (
                        Q > A.element.container.styles.zIndex.order &&
                        ((u = e), !0)
                      );
                    }),
                      a.negativeZIndex.splice(u, 0, c);
                  } else if (Q > 0) {
                    var w = 0;
                    a.positiveZIndex.some(function(A, e) {
                      return (
                        Q > A.element.container.styles.zIndex.order &&
                        ((w = e + 1), !0)
                      );
                    }),
                      a.positiveZIndex.splice(w, 0, c);
                  } else a.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
                } else
                  n.styles.isFloating()
                    ? a.nonPositionedFloats.push(c)
                    : a.nonPositionedInlineLevel.push(c);
                iB(o, c, B ? c : t, i);
              } else n.styles.isInlineLevel() ? e.inlineLevel.push(o) : e.nonInlineLevel.push(o), iB(o, e, t, i);
              Er(n.flags, 8) && aB(n, i);
            });
          },
          aB = function(A, e) {
            for (
              var t = A instanceof Xr ? A.start : 1,
                r = A instanceof Xr && A.reversed,
                n = 0;
              n < e.length;
              n++
            ) {
              var B = e[n];
              B.container instanceof zr &&
                "number" == typeof B.container.value &&
                0 !== B.container.value &&
                (t = B.container.value),
                (B.listValue = Sn(t, B.container.styles.listStyleType, !0)),
                (t += r ? -1 : 1);
            }
          },
          cB = function(A, e, t, r) {
            var n = [];
            return (
              $n(A) ? n.push(A.subdivide(0.5, !1)) : n.push(A),
              $n(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t),
              $n(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r),
              $n(e) ? n.push(e.subdivide(0.5, !1).reverse()) : n.push(e),
              n
            );
          },
          QB = function(A) {
            var e = A.bounds,
              t = A.styles;
            return e.add(
              t.borderLeftWidth,
              t.borderTopWidth,
              -(t.borderRightWidth + t.borderLeftWidth),
              -(t.borderTopWidth + t.borderBottomWidth)
            );
          },
          uB = function(A) {
            var e = A.styles,
              t = A.bounds,
              r = WA(e.paddingLeft, t.width),
              n = WA(e.paddingRight, t.width),
              B = WA(e.paddingTop, t.width),
              s = WA(e.paddingBottom, t.width);
            return t.add(
              r + e.borderLeftWidth,
              B + e.borderTopWidth,
              -(e.borderRightWidth + e.borderLeftWidth + r + n),
              -(e.borderTopWidth + e.borderBottomWidth + B + s)
            );
          },
          wB = function(A, e, t) {
            var r = (function(A, e) {
                return 0 === A ? e.bounds : 2 === A ? uB(e) : QB(e);
              })(gB(A.styles.backgroundOrigin, e), A),
              n = (function(A, e) {
                return A === oe.BORDER_BOX
                  ? e.bounds
                  : A === oe.CONTENT_BOX
                  ? uB(e)
                  : QB(e);
              })(gB(A.styles.backgroundClip, e), A),
              B = CB(gB(A.styles.backgroundSize, e), t, r),
              s = B[0],
              o = B[1],
              i = kA(
                gB(A.styles.backgroundPosition, e),
                r.width - s,
                r.height - o
              );
            return [
              EB(gB(A.styles.backgroundRepeat, e), i, B, r, n),
              Math.round(r.left + i[0]),
              Math.round(r.top + i[1]),
              s,
              o
            ];
          },
          UB = function(A) {
            return bA(A) && A.value === Xe.AUTO;
          },
          lB = function(A) {
            return "number" == typeof A;
          },
          CB = function(A, e, t) {
            var r = e[0],
              n = e[1],
              B = e[2],
              s = A[0],
              o = A[1];
            if (VA(s) && o && VA(o)) return [WA(s, t.width), WA(o, t.height)];
            var i = lB(B);
            if (bA(s) && (s.value === Xe.CONTAIN || s.value === Xe.COVER))
              return lB(B)
                ? t.width / t.height < B != (s.value === Xe.COVER)
                  ? [t.width, t.width / B]
                  : [t.height * B, t.height]
                : [t.width, t.height];
            var a = lB(r),
              c = lB(n),
              Q = a || c;
            if (UB(s) && (!o || UB(o)))
              return a && c
                ? [r, n]
                : i || Q
                ? Q && i
                  ? [a ? r : n * B, c ? n : r / B]
                  : [a ? r : t.width, c ? n : t.height]
                : [t.width, t.height];
            if (i) {
              var u = 0,
                w = 0;
              return (
                VA(s) ? (u = WA(s, t.width)) : VA(o) && (w = WA(o, t.height)),
                UB(s) ? (u = w * B) : (o && !UB(o)) || (w = u / B),
                [u, w]
              );
            }
            var U = null,
              l = null;
            if (
              (VA(s)
                ? (U = WA(s, t.width))
                : o && VA(o) && (l = WA(o, t.height)),
              null === U ||
                (o && !UB(o)) ||
                (l = a && c ? (U / r) * n : t.height),
              null !== l && UB(s) && (U = a && c ? (l / n) * r : t.width),
              null !== U && null !== l)
            )
              return [U, l];
            throw new Error("Unable to calculate background-size for element");
          },
          gB = function(A, e) {
            var t = A[e];
            return void 0 === t ? A[0] : t;
          },
          EB = function(A, e, t, r, n) {
            var B = e[0],
              s = e[1],
              o = t[0],
              i = t[1];
            switch (A) {
              case Me.REPEAT_X:
                return [
                  new qn(Math.round(r.left), Math.round(r.top + s)),
                  new qn(Math.round(r.left + r.width), Math.round(r.top + s)),
                  new qn(
                    Math.round(r.left + r.width),
                    Math.round(i + r.top + s)
                  ),
                  new qn(Math.round(r.left), Math.round(i + r.top + s))
                ];
              case Me.REPEAT_Y:
                return [
                  new qn(Math.round(r.left + B), Math.round(r.top)),
                  new qn(Math.round(r.left + B + o), Math.round(r.top)),
                  new qn(
                    Math.round(r.left + B + o),
                    Math.round(r.height + r.top)
                  ),
                  new qn(Math.round(r.left + B), Math.round(r.height + r.top))
                ];
              case Me.NO_REPEAT:
                return [
                  new qn(Math.round(r.left + B), Math.round(r.top + s)),
                  new qn(Math.round(r.left + B + o), Math.round(r.top + s)),
                  new qn(Math.round(r.left + B + o), Math.round(r.top + s + i)),
                  new qn(Math.round(r.left + B), Math.round(r.top + s + i))
                ];
              default:
                return [
                  new qn(Math.round(n.left), Math.round(n.top)),
                  new qn(Math.round(n.left + n.width), Math.round(n.top)),
                  new qn(
                    Math.round(n.left + n.width),
                    Math.round(n.height + n.top)
                  ),
                  new qn(Math.round(n.left), Math.round(n.height + n.top))
                ];
            }
          },
          FB = (function() {
            function A(A) {
              (this._data = {}), (this._document = A);
            }
            return (
              (A.prototype.parseMetrics = function(A, e) {
                var t = this._document.createElement("div"),
                  r = this._document.createElement("img"),
                  n = this._document.createElement("span"),
                  B = this._document.body;
                (t.style.visibility = "hidden"),
                  (t.style.fontFamily = A),
                  (t.style.fontSize = e),
                  (t.style.margin = "0"),
                  (t.style.padding = "0"),
                  B.appendChild(t),
                  (r.src =
                    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
                  (r.width = 1),
                  (r.height = 1),
                  (r.style.margin = "0"),
                  (r.style.padding = "0"),
                  (r.style.verticalAlign = "baseline"),
                  (n.style.fontFamily = A),
                  (n.style.fontSize = e),
                  (n.style.margin = "0"),
                  (n.style.padding = "0"),
                  n.appendChild(this._document.createTextNode("Hidden Text")),
                  t.appendChild(n),
                  t.appendChild(r);
                var s = r.offsetTop - n.offsetTop + 2;
                t.removeChild(n),
                  t.appendChild(this._document.createTextNode("Hidden Text")),
                  (t.style.lineHeight = "normal"),
                  (r.style.verticalAlign = "super");
                var o = r.offsetTop - t.offsetTop + 2;
                return B.removeChild(t), { baseline: s, middle: o };
              }),
              (A.prototype.getMetrics = function(A, e) {
                var t = A + " " + e;
                return (
                  void 0 === this._data[t] &&
                    (this._data[t] = this.parseMetrics(A, e)),
                  this._data[t]
                );
              }),
              A
            );
          })(),
          hB = (function() {
            function A(A) {
              (this._activeEffects = []),
                (this.canvas = A.canvas
                  ? A.canvas
                  : document.createElement("canvas")),
                (this.ctx = this.canvas.getContext("2d")),
                (this.options = A),
                (this.canvas.width = Math.floor(A.width * A.scale)),
                (this.canvas.height = Math.floor(A.height * A.scale)),
                (this.canvas.style.width = A.width + "px"),
                (this.canvas.style.height = A.height + "px"),
                (this.fontMetrics = new FB(document)),
                this.ctx.scale(this.options.scale, this.options.scale),
                this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY),
                (this.ctx.textBaseline = "bottom"),
                (this._activeEffects = []),
                Ke.getInstance(A.id).debug(
                  "Canvas renderer initialized (" +
                    A.width +
                    "x" +
                    A.height +
                    " at " +
                    A.x +
                    "," +
                    A.y +
                    ") with scale " +
                    A.scale
                );
            }
            return (
              (A.prototype.applyEffects = function(A, e) {
                for (var t = this; this._activeEffects.length; )
                  this.popEffect();
                A.filter(function(A) {
                  return Er(A.target, e);
                }).forEach(function(A) {
                  return t.applyEffect(A);
                });
              }),
              (A.prototype.applyEffect = function(A) {
                this.ctx.save(),
                  (function(A) {
                    return 0 === A.type;
                  })(A) &&
                    (this.ctx.translate(A.offsetX, A.offsetY),
                    this.ctx.transform(
                      A.matrix[0],
                      A.matrix[1],
                      A.matrix[2],
                      A.matrix[3],
                      A.matrix[4],
                      A.matrix[5]
                    ),
                    this.ctx.translate(-A.offsetX, -A.offsetY)),
                  (function(A) {
                    return 1 === A.type;
                  })(A) && (this.path(A.path), this.ctx.clip()),
                  this._activeEffects.push(A);
              }),
              (A.prototype.popEffect = function() {
                this._activeEffects.pop(), this.ctx.restore();
              }),
              (A.prototype.renderStack = function(A) {
                return r(this, void 0, void 0, function() {
                  var e;
                  return n(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return (e = A.element.container.styles).isVisible()
                          ? ((this.ctx.globalAlpha = e.opacity),
                            [4, this.renderStackContent(A)])
                          : [3, 2];
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              (A.prototype.renderNode = function(A) {
                return r(this, void 0, void 0, function() {
                  return n(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return A.container.styles.isVisible()
                          ? [4, this.renderNodeBackgroundAndBorders(A)]
                          : [3, 3];
                      case 1:
                        return e.sent(), [4, this.renderNodeContent(A)];
                      case 2:
                        e.sent(), (e.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (A.prototype.renderTextWithLetterSpacing = function(A, e) {
                var t = this;
                0 === e
                  ? this.ctx.fillText(
                      A.text,
                      A.bounds.left,
                      A.bounds.top + A.bounds.height
                    )
                  : o(A.text)
                      .map(function(A) {
                        return i(A);
                      })
                      .reduce(function(e, r) {
                        return (
                          t.ctx.fillText(r, e, A.bounds.top + A.bounds.height),
                          e + t.ctx.measureText(r).width
                        );
                      }, A.bounds.left);
              }),
              (A.prototype.createFontStyle = function(A) {
                var e = A.fontVariant
                    .filter(function(A) {
                      return "normal" === A || "small-caps" === A;
                    })
                    .join(""),
                  t = A.fontFamily.join(", "),
                  r = vA(A.fontSize)
                    ? "" + A.fontSize.number + A.fontSize.unit
                    : A.fontSize.number + "px";
                return [[A.fontStyle, e, A.fontWeight, r, t].join(" "), t, r];
              }),
              (A.prototype.renderTextNode = function(A, e) {
                return r(this, void 0, void 0, function() {
                  var t,
                    r,
                    B,
                    s,
                    o = this;
                  return n(this, function(n) {
                    return (
                      (t = this.createFontStyle(e)),
                      (r = t[0]),
                      (B = t[1]),
                      (s = t[2]),
                      (this.ctx.font = r),
                      A.textBounds.forEach(function(A) {
                        (o.ctx.fillStyle = ee(e.color)),
                          o.renderTextWithLetterSpacing(A, e.letterSpacing);
                        var t = e.textShadow;
                        t.length &&
                          A.text.trim().length &&
                          (t
                            .slice(0)
                            .reverse()
                            .forEach(function(e) {
                              (o.ctx.shadowColor = ee(e.color)),
                                (o.ctx.shadowOffsetX =
                                  e.offsetX.number * o.options.scale),
                                (o.ctx.shadowOffsetY =
                                  e.offsetY.number * o.options.scale),
                                (o.ctx.shadowBlur = e.blur.number),
                                o.ctx.fillText(
                                  A.text,
                                  A.bounds.left,
                                  A.bounds.top + A.bounds.height
                                );
                            }),
                          (o.ctx.shadowColor = ""),
                          (o.ctx.shadowOffsetX = 0),
                          (o.ctx.shadowOffsetY = 0),
                          (o.ctx.shadowBlur = 0)),
                          e.textDecorationLine.length &&
                            ((o.ctx.fillStyle = ee(
                              e.textDecorationColor || e.color
                            )),
                            e.textDecorationLine.forEach(function(e) {
                              switch (e) {
                                case 1:
                                  var t = o.fontMetrics.getMetrics(B, s)
                                    .baseline;
                                  o.ctx.fillRect(
                                    A.bounds.left,
                                    Math.round(A.bounds.top + t),
                                    A.bounds.width,
                                    1
                                  );
                                  break;
                                case 2:
                                  o.ctx.fillRect(
                                    A.bounds.left,
                                    Math.round(A.bounds.top),
                                    A.bounds.width,
                                    1
                                  );
                                  break;
                                case 3:
                                  var r = o.fontMetrics.getMetrics(B, s).middle;
                                  o.ctx.fillRect(
                                    A.bounds.left,
                                    Math.ceil(A.bounds.top + r),
                                    A.bounds.width,
                                    1
                                  );
                              }
                            }));
                      }),
                      [2]
                    );
                  });
                });
              }),
              (A.prototype.renderReplacedElement = function(A, e, t) {
                if (t && A.intrinsicWidth > 0 && A.intrinsicHeight > 0) {
                  var r = uB(A),
                    n = rB(e);
                  this.path(n),
                    this.ctx.save(),
                    this.ctx.clip(),
                    this.ctx.drawImage(
                      t,
                      0,
                      0,
                      A.intrinsicWidth,
                      A.intrinsicHeight,
                      r.left,
                      r.top,
                      r.width,
                      r.height
                    ),
                    this.ctx.restore();
                }
              }),
              (A.prototype.renderNodeContent = function(e) {
                return r(this, void 0, void 0, function() {
                  var t, r, s, o, i, a, c, Q, w, U, l, C, g, E;
                  return n(this, function(n) {
                    switch (n.label) {
                      case 0:
                        this.applyEffects(e.effects, 4),
                          (t = e.container),
                          (r = e.curves),
                          (s = t.styles),
                          (o = 0),
                          (i = t.textNodes),
                          (n.label = 1);
                      case 1:
                        return o < i.length
                          ? ((a = i[o]), [4, this.renderTextNode(a, s)])
                          : [3, 4];
                      case 2:
                        n.sent(), (n.label = 3);
                      case 3:
                        return o++, [3, 1];
                      case 4:
                        if (!(t instanceof Pr)) return [3, 8];
                        n.label = 5;
                      case 5:
                        return (
                          n.trys.push([5, 7, , 8]),
                          [4, this.options.cache.match(t.src)]
                        );
                      case 6:
                        return (
                          (C = n.sent()),
                          this.renderReplacedElement(t, r, C),
                          [3, 8]
                        );
                      case 7:
                        return (
                          n.sent(),
                          Ke.getInstance(this.options.id).error(
                            "Error loading image " + t.src
                          ),
                          [3, 8]
                        );
                      case 8:
                        if (
                          (t instanceof xr &&
                            this.renderReplacedElement(t, r, t.canvas),
                          !(t instanceof Vr))
                        )
                          return [3, 12];
                        n.label = 9;
                      case 9:
                        return (
                          n.trys.push([9, 11, , 12]),
                          [4, this.options.cache.match(t.svg)]
                        );
                      case 10:
                        return (
                          (C = n.sent()),
                          this.renderReplacedElement(t, r, C),
                          [3, 12]
                        );
                      case 11:
                        return (
                          n.sent(),
                          Ke.getInstance(this.options.id).error(
                            "Error loading svg " + t.svg.substring(0, 255)
                          ),
                          [3, 12]
                        );
                      case 12:
                        return t instanceof tn && t.tree
                          ? [
                              4,
                              new A({
                                id: this.options.id,
                                scale: this.options.scale,
                                backgroundColor: t.backgroundColor,
                                x: 0,
                                y: 0,
                                scrollX: 0,
                                scrollY: 0,
                                width: t.width,
                                height: t.height,
                                cache: this.options.cache,
                                windowWidth: t.width,
                                windowHeight: t.height
                              }).render(t.tree)
                            ]
                          : [3, 14];
                      case 13:
                        (c = n.sent()),
                          this.ctx.drawImage(
                            c,
                            0,
                            0,
                            t.width,
                            t.width,
                            t.bounds.left,
                            t.bounds.top,
                            t.bounds.width,
                            t.bounds.height
                          ),
                          (n.label = 14);
                      case 14:
                        if (
                          (t instanceof Zr &&
                            ((Q = Math.min(t.bounds.width, t.bounds.height)),
                            t.type === Yr
                              ? t.checked &&
                                (this.ctx.save(),
                                this.path([
                                  new qn(
                                    t.bounds.left + 0.39363 * Q,
                                    t.bounds.top + 0.79 * Q
                                  ),
                                  new qn(
                                    t.bounds.left + 0.16 * Q,
                                    t.bounds.top + 0.5549 * Q
                                  ),
                                  new qn(
                                    t.bounds.left + 0.27347 * Q,
                                    t.bounds.top + 0.44071 * Q
                                  ),
                                  new qn(
                                    t.bounds.left + 0.39694 * Q,
                                    t.bounds.top + 0.5649 * Q
                                  ),
                                  new qn(
                                    t.bounds.left + 0.72983 * Q,
                                    t.bounds.top + 0.23 * Q
                                  ),
                                  new qn(
                                    t.bounds.left + 0.84 * Q,
                                    t.bounds.top + 0.34085 * Q
                                  ),
                                  new qn(
                                    t.bounds.left + 0.39363 * Q,
                                    t.bounds.top + 0.79 * Q
                                  )
                                ]),
                                (this.ctx.fillStyle = ee(707406591)),
                                this.ctx.fill(),
                                this.ctx.restore())
                              : t.type === qr &&
                                t.checked &&
                                (this.ctx.save(),
                                this.ctx.beginPath(),
                                this.ctx.arc(
                                  t.bounds.left + Q / 2,
                                  t.bounds.top + Q / 2,
                                  Q / 4,
                                  0,
                                  2 * Math.PI,
                                  !0
                                ),
                                (this.ctx.fillStyle = ee(707406591)),
                                this.ctx.fill(),
                                this.ctx.restore())),
                          HB(t) && t.value.length)
                        ) {
                          switch (
                            ((this.ctx.font = this.createFontStyle(s)[0]),
                            (this.ctx.fillStyle = ee(s.color)),
                            (this.ctx.textBaseline = "middle"),
                            (this.ctx.textAlign = dB(t.styles.textAlign)),
                            (E = uB(t)),
                            (w = 0),
                            t.styles.textAlign)
                          ) {
                            case Mt.CENTER:
                              w += E.width / 2;
                              break;
                            case Mt.RIGHT:
                              w += E.width;
                          }
                          (U = E.add(w, 0, 0, -E.height / 2 + 1)),
                            this.ctx.save(),
                            this.path([
                              new qn(E.left, E.top),
                              new qn(E.left + E.width, E.top),
                              new qn(E.left + E.width, E.top + E.height),
                              new qn(E.left, E.top + E.height)
                            ]),
                            this.ctx.clip(),
                            this.renderTextWithLetterSpacing(
                              new Rr(t.value, U),
                              s.letterSpacing
                            ),
                            this.ctx.restore(),
                            (this.ctx.textBaseline = "bottom"),
                            (this.ctx.textAlign = "left");
                        }
                        if (!Er(t.styles.display, 2048)) return [3, 20];
                        if (null === t.styles.listStyleImage) return [3, 19];
                        if ((l = t.styles.listStyleImage).type !== Qe.URL)
                          return [3, 18];
                        (C = void 0), (g = l.url), (n.label = 15);
                      case 15:
                        return (
                          n.trys.push([15, 17, , 18]),
                          [4, this.options.cache.match(g)]
                        );
                      case 16:
                        return (
                          (C = n.sent()),
                          this.ctx.drawImage(
                            C,
                            t.bounds.left - (C.width + 10),
                            t.bounds.top
                          ),
                          [3, 18]
                        );
                      case 17:
                        return (
                          n.sent(),
                          Ke.getInstance(this.options.id).error(
                            "Error loading list-style-image " + g
                          ),
                          [3, 18]
                        );
                      case 18:
                        return [3, 20];
                      case 19:
                        e.listValue &&
                          t.styles.listStyleType !== It.NONE &&
                          ((this.ctx.font = this.createFontStyle(s)[0]),
                          (this.ctx.fillStyle = ee(s.color)),
                          (this.ctx.textBaseline = "middle"),
                          (this.ctx.textAlign = "right"),
                          (E = new B(
                            t.bounds.left,
                            t.bounds.top +
                              WA(t.styles.paddingTop, t.bounds.width),
                            t.bounds.width,
                            (function(A, e) {
                              return bA(A) && "normal" === A.value
                                ? 1.2 * e
                                : A.type === u.NUMBER_TOKEN
                                ? e * A.number
                                : VA(A)
                                ? WA(A, e)
                                : e;
                            })(s.lineHeight, s.fontSize.number) /
                              2 +
                              1
                          )),
                          this.renderTextWithLetterSpacing(
                            new Rr(e.listValue, E),
                            s.letterSpacing
                          ),
                          (this.ctx.textBaseline = "bottom"),
                          (this.ctx.textAlign = "left")),
                          (n.label = 20);
                      case 20:
                        return [2];
                    }
                  });
                });
              }),
              (A.prototype.renderStackContent = function(A) {
                return r(this, void 0, void 0, function() {
                  var e, t, r, B, s, o, i, a, c, Q, u, w, U, l, C;
                  return n(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          this.renderNodeBackgroundAndBorders(A.element)
                        ];
                      case 1:
                        n.sent(),
                          (e = 0),
                          (t = A.negativeZIndex),
                          (n.label = 2);
                      case 2:
                        return e < t.length
                          ? ((C = t[e]), [4, this.renderStack(C)])
                          : [3, 5];
                      case 3:
                        n.sent(), (n.label = 4);
                      case 4:
                        return e++, [3, 2];
                      case 5:
                        return [4, this.renderNodeContent(A.element)];
                      case 6:
                        n.sent(),
                          (r = 0),
                          (B = A.nonInlineLevel),
                          (n.label = 7);
                      case 7:
                        return r < B.length
                          ? ((C = B[r]), [4, this.renderNode(C)])
                          : [3, 10];
                      case 8:
                        n.sent(), (n.label = 9);
                      case 9:
                        return r++, [3, 7];
                      case 10:
                        (s = 0), (o = A.nonPositionedFloats), (n.label = 11);
                      case 11:
                        return s < o.length
                          ? ((C = o[s]), [4, this.renderStack(C)])
                          : [3, 14];
                      case 12:
                        n.sent(), (n.label = 13);
                      case 13:
                        return s++, [3, 11];
                      case 14:
                        (i = 0),
                          (a = A.nonPositionedInlineLevel),
                          (n.label = 15);
                      case 15:
                        return i < a.length
                          ? ((C = a[i]), [4, this.renderStack(C)])
                          : [3, 18];
                      case 16:
                        n.sent(), (n.label = 17);
                      case 17:
                        return i++, [3, 15];
                      case 18:
                        (c = 0), (Q = A.inlineLevel), (n.label = 19);
                      case 19:
                        return c < Q.length
                          ? ((C = Q[c]), [4, this.renderNode(C)])
                          : [3, 22];
                      case 20:
                        n.sent(), (n.label = 21);
                      case 21:
                        return c++, [3, 19];
                      case 22:
                        (u = 0),
                          (w = A.zeroOrAutoZIndexOrTransformedOrOpacity),
                          (n.label = 23);
                      case 23:
                        return u < w.length
                          ? ((C = w[u]), [4, this.renderStack(C)])
                          : [3, 26];
                      case 24:
                        n.sent(), (n.label = 25);
                      case 25:
                        return u++, [3, 23];
                      case 26:
                        (U = 0), (l = A.positiveZIndex), (n.label = 27);
                      case 27:
                        return U < l.length
                          ? ((C = l[U]), [4, this.renderStack(C)])
                          : [3, 30];
                      case 28:
                        n.sent(), (n.label = 29);
                      case 29:
                        return U++, [3, 27];
                      case 30:
                        return [2];
                    }
                  });
                });
              }),
              (A.prototype.mask = function(A) {
                this.ctx.beginPath(),
                  this.ctx.moveTo(0, 0),
                  this.ctx.lineTo(this.canvas.width, 0),
                  this.ctx.lineTo(this.canvas.width, this.canvas.height),
                  this.ctx.lineTo(0, this.canvas.height),
                  this.ctx.lineTo(0, 0),
                  this.formatPath(A.slice(0).reverse()),
                  this.ctx.closePath();
              }),
              (A.prototype.path = function(A) {
                this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath();
              }),
              (A.prototype.formatPath = function(A) {
                var e = this;
                A.forEach(function(A, t) {
                  var r = $n(A) ? A.start : A;
                  0 === t ? e.ctx.moveTo(r.x, r.y) : e.ctx.lineTo(r.x, r.y),
                    $n(A) &&
                      e.ctx.bezierCurveTo(
                        A.startControl.x,
                        A.startControl.y,
                        A.endControl.x,
                        A.endControl.y,
                        A.end.x,
                        A.end.y
                      );
                });
              }),
              (A.prototype.renderRepeat = function(A, e, t, r) {
                this.path(A),
                  (this.ctx.fillStyle = e),
                  this.ctx.translate(t, r),
                  this.ctx.fill(),
                  this.ctx.translate(-t, -r);
              }),
              (A.prototype.resizeImage = function(A, e, t) {
                if (A.width === e && A.height === t) return A;
                var r = this.canvas.ownerDocument.createElement("canvas");
                return (
                  (r.width = e),
                  (r.height = t),
                  r
                    .getContext("2d")
                    .drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t),
                  r
                );
              }),
              (A.prototype.renderBackgroundImage = function(A) {
                return r(this, void 0, void 0, function() {
                  var e, t, r, B, s, o;
                  return n(this, function(i) {
                    switch (i.label) {
                      case 0:
                        (e = A.styles.backgroundImage.length - 1),
                          (t = function(t) {
                            var B,
                              s,
                              o,
                              i,
                              a,
                              c,
                              Q,
                              u,
                              w,
                              U,
                              l,
                              C,
                              g,
                              E,
                              F,
                              h,
                              H,
                              f,
                              d,
                              p,
                              N,
                              K,
                              I,
                              m,
                              T,
                              R,
                              L,
                              v,
                              O,
                              b,
                              S;
                            return n(this, function(n) {
                              switch (n.label) {
                                case 0:
                                  if (t.type !== Qe.URL) return [3, 5];
                                  (B = void 0), (s = t.url), (n.label = 1);
                                case 1:
                                  return (
                                    n.trys.push([1, 3, , 4]),
                                    [4, r.options.cache.match(s)]
                                  );
                                case 2:
                                  return (B = n.sent()), [3, 4];
                                case 3:
                                  return (
                                    n.sent(),
                                    Ke.getInstance(r.options.id).error(
                                      "Error loading background-image " + s
                                    ),
                                    [3, 4]
                                  );
                                case 4:
                                  return (
                                    B &&
                                      ((o = wB(A, e, [
                                        B.width,
                                        B.height,
                                        B.width / B.height
                                      ])),
                                      (h = o[0]),
                                      (K = o[1]),
                                      (I = o[2]),
                                      (d = o[3]),
                                      (p = o[4]),
                                      (E = r.ctx.createPattern(
                                        r.resizeImage(B, d, p),
                                        "repeat"
                                      )),
                                      r.renderRepeat(h, E, K, I)),
                                    [3, 6]
                                  );
                                case 5:
                                  t.type === Qe.LINEAR_GRADIENT
                                    ? ((i = wB(A, e, [null, null, null])),
                                      (h = i[0]),
                                      (K = i[1]),
                                      (I = i[2]),
                                      (d = i[3]),
                                      (p = i[4]),
                                      (a = Ee(t.angle, d, p)),
                                      (c = a[0]),
                                      (Q = a[1]),
                                      (u = a[2]),
                                      (w = a[3]),
                                      (U = a[4]),
                                      ((l = document.createElement(
                                        "canvas"
                                      )).width = d),
                                      (l.height = p),
                                      (C = l.getContext("2d")),
                                      (g = C.createLinearGradient(Q, w, u, U)),
                                      ge(t.stops, c).forEach(function(A) {
                                        return g.addColorStop(
                                          A.stop,
                                          ee(A.color)
                                        );
                                      }),
                                      (C.fillStyle = g),
                                      C.fillRect(0, 0, d, p),
                                      (E = r.ctx.createPattern(l, "repeat")),
                                      r.renderRepeat(h, E, K, I))
                                    : (function(A) {
                                        return A.type === Qe.RADIAL_GRADIENT;
                                      })(t) &&
                                      ((F = wB(A, e, [null, null, null])),
                                      (h = F[0]),
                                      (H = F[1]),
                                      (f = F[2]),
                                      (d = F[3]),
                                      (p = F[4]),
                                      (N =
                                        0 === t.position.length
                                          ? [JA]
                                          : t.position),
                                      (K = WA(N[0], d)),
                                      (I = WA(N[N.length - 1], p)),
                                      (m = (function(A, e, t, r, n) {
                                        var B = 0,
                                          s = 0;
                                        switch (A.size) {
                                          case we.CLOSEST_SIDE:
                                            A.shape === ue.CIRCLE
                                              ? (B = s = Math.min(
                                                  Math.abs(e),
                                                  Math.abs(e - r),
                                                  Math.abs(t),
                                                  Math.abs(t - n)
                                                ))
                                              : A.shape === ue.ELLIPSE &&
                                                ((B = Math.min(
                                                  Math.abs(e),
                                                  Math.abs(e - r)
                                                )),
                                                (s = Math.min(
                                                  Math.abs(t),
                                                  Math.abs(t - n)
                                                )));
                                            break;
                                          case we.CLOSEST_CORNER:
                                            if (A.shape === ue.CIRCLE)
                                              B = s = Math.min(
                                                Fe(e, t),
                                                Fe(e, t - n),
                                                Fe(e - r, t),
                                                Fe(e - r, t - n)
                                              );
                                            else if (A.shape === ue.ELLIPSE) {
                                              var o =
                                                  Math.min(
                                                    Math.abs(t),
                                                    Math.abs(t - n)
                                                  ) /
                                                  Math.min(
                                                    Math.abs(e),
                                                    Math.abs(e - r)
                                                  ),
                                                i = he(r, n, e, t, !0),
                                                a = i[0],
                                                c = i[1];
                                              s =
                                                o *
                                                (B = Fe(a - e, (c - t) / o));
                                            }
                                            break;
                                          case we.FARTHEST_SIDE:
                                            A.shape === ue.CIRCLE
                                              ? (B = s = Math.max(
                                                  Math.abs(e),
                                                  Math.abs(e - r),
                                                  Math.abs(t),
                                                  Math.abs(t - n)
                                                ))
                                              : A.shape === ue.ELLIPSE &&
                                                ((B = Math.max(
                                                  Math.abs(e),
                                                  Math.abs(e - r)
                                                )),
                                                (s = Math.max(
                                                  Math.abs(t),
                                                  Math.abs(t - n)
                                                )));
                                            break;
                                          case we.FARTHEST_CORNER:
                                            if (A.shape === ue.CIRCLE)
                                              B = s = Math.max(
                                                Fe(e, t),
                                                Fe(e, t - n),
                                                Fe(e - r, t),
                                                Fe(e - r, t - n)
                                              );
                                            else if (A.shape === ue.ELLIPSE) {
                                              o =
                                                Math.max(
                                                  Math.abs(t),
                                                  Math.abs(t - n)
                                                ) /
                                                Math.max(
                                                  Math.abs(e),
                                                  Math.abs(e - r)
                                                );
                                              var Q = he(r, n, e, t, !1);
                                              (a = Q[0]),
                                                (c = Q[1]),
                                                (s =
                                                  o *
                                                  (B = Fe(a - e, (c - t) / o)));
                                            }
                                        }
                                        return (
                                          Array.isArray(A.size) &&
                                            ((B = WA(A.size[0], r)),
                                            (s =
                                              2 === A.size.length
                                                ? WA(A.size[1], n)
                                                : B)),
                                          [B, s]
                                        );
                                      })(t, K, I, d, p)),
                                      (T = m[0]),
                                      (R = m[1]),
                                      T > 0 &&
                                        T > 0 &&
                                        ((L = r.ctx.createRadialGradient(
                                          H + K,
                                          f + I,
                                          0,
                                          H + K,
                                          f + I,
                                          T
                                        )),
                                        ge(t.stops, 2 * T).forEach(function(A) {
                                          return L.addColorStop(
                                            A.stop,
                                            ee(A.color)
                                          );
                                        }),
                                        r.path(h),
                                        (r.ctx.fillStyle = L),
                                        T !== R
                                          ? ((v =
                                              A.bounds.left +
                                              0.5 * A.bounds.width),
                                            (O =
                                              A.bounds.top +
                                              0.5 * A.bounds.height),
                                            (S = 1 / (b = R / T)),
                                            r.ctx.save(),
                                            r.ctx.translate(v, O),
                                            r.ctx.transform(1, 0, 0, b, 0, 0),
                                            r.ctx.translate(-v, -O),
                                            r.ctx.fillRect(
                                              H,
                                              S * (f - O) + O,
                                              d,
                                              p * S
                                            ),
                                            r.ctx.restore())
                                          : r.ctx.fill())),
                                    (n.label = 6);
                                case 6:
                                  return e--, [2];
                              }
                            });
                          }),
                          (r = this),
                          (B = 0),
                          (s = A.styles.backgroundImage.slice(0).reverse()),
                          (i.label = 1);
                      case 1:
                        return B < s.length ? ((o = s[B]), [5, t(o)]) : [3, 4];
                      case 2:
                        i.sent(), (i.label = 3);
                      case 3:
                        return B++, [3, 1];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (A.prototype.renderBorder = function(A, e, t) {
                return r(this, void 0, void 0, function() {
                  return n(this, function(r) {
                    return (
                      this.path(
                        (function(A, e) {
                          switch (e) {
                            case 0:
                              return cB(
                                A.topLeftBorderBox,
                                A.topLeftPaddingBox,
                                A.topRightBorderBox,
                                A.topRightPaddingBox
                              );
                            case 1:
                              return cB(
                                A.topRightBorderBox,
                                A.topRightPaddingBox,
                                A.bottomRightBorderBox,
                                A.bottomRightPaddingBox
                              );
                            case 2:
                              return cB(
                                A.bottomRightBorderBox,
                                A.bottomRightPaddingBox,
                                A.bottomLeftBorderBox,
                                A.bottomLeftPaddingBox
                              );
                            case 3:
                            default:
                              return cB(
                                A.bottomLeftBorderBox,
                                A.bottomLeftPaddingBox,
                                A.topLeftBorderBox,
                                A.topLeftPaddingBox
                              );
                          }
                        })(t, e)
                      ),
                      (this.ctx.fillStyle = ee(A)),
                      this.ctx.fill(),
                      [2]
                    );
                  });
                });
              }),
              (A.prototype.renderNodeBackgroundAndBorders = function(A) {
                return r(this, void 0, void 0, function() {
                  var e,
                    t,
                    r,
                    B,
                    s,
                    o,
                    i,
                    a,
                    c = this;
                  return n(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return (
                          this.applyEffects(A.effects, 2),
                          (e = A.container.styles),
                          (t =
                            !Ae(e.backgroundColor) || e.backgroundImage.length),
                          (r = [
                            {
                              style: e.borderTopStyle,
                              color: e.borderTopColor
                            },
                            {
                              style: e.borderRightStyle,
                              color: e.borderRightColor
                            },
                            {
                              style: e.borderBottomStyle,
                              color: e.borderBottomColor
                            },
                            {
                              style: e.borderLeftStyle,
                              color: e.borderLeftColor
                            }
                          ]),
                          (B = fB(gB(e.backgroundClip, 0), A.curves)),
                          t || e.boxShadow.length
                            ? (this.ctx.save(),
                              this.path(B),
                              this.ctx.clip(),
                              Ae(e.backgroundColor) ||
                                ((this.ctx.fillStyle = ee(e.backgroundColor)),
                                this.ctx.fill()),
                              [4, this.renderBackgroundImage(A.container)])
                            : [3, 2]
                        );
                      case 1:
                        n.sent(),
                          this.ctx.restore(),
                          e.boxShadow
                            .slice(0)
                            .reverse()
                            .forEach(function(e) {
                              c.ctx.save();
                              var t,
                                r,
                                n,
                                B,
                                s,
                                o = tB(A.curves),
                                i = e.inset ? 0 : 1e4,
                                a =
                                  ((t = o),
                                  (r =
                                    -i + (e.inset ? 1 : -1) * e.spread.number),
                                  (n = (e.inset ? 1 : -1) * e.spread.number),
                                  (B = e.spread.number * (e.inset ? -2 : 2)),
                                  (s = e.spread.number * (e.inset ? -2 : 2)),
                                  t.map(function(A, e) {
                                    switch (e) {
                                      case 0:
                                        return A.add(r, n);
                                      case 1:
                                        return A.add(r + B, n);
                                      case 2:
                                        return A.add(r + B, n + s);
                                      case 3:
                                        return A.add(r, n + s);
                                    }
                                    return A;
                                  }));
                              e.inset
                                ? (c.path(o), c.ctx.clip(), c.mask(a))
                                : (c.mask(o), c.ctx.clip(), c.path(a)),
                                (c.ctx.shadowOffsetX = e.offsetX.number + i),
                                (c.ctx.shadowOffsetY = e.offsetY.number),
                                (c.ctx.shadowColor = ee(e.color)),
                                (c.ctx.shadowBlur = e.blur.number),
                                (c.ctx.fillStyle = e.inset
                                  ? ee(e.color)
                                  : "rgba(0,0,0,1)"),
                                c.ctx.fill(),
                                c.ctx.restore();
                            }),
                          (n.label = 2);
                      case 2:
                        (s = 0), (o = 0), (i = r), (n.label = 3);
                      case 3:
                        return o < i.length
                          ? (a = i[o]).style === ke.NONE || Ae(a.color)
                            ? [3, 5]
                            : [4, this.renderBorder(a.color, s++, A.curves)]
                          : [3, 6];
                      case 4:
                        n.sent(), (n.label = 5);
                      case 5:
                        return o++, [3, 3];
                      case 6:
                        return [2];
                    }
                  });
                });
              }),
              (A.prototype.render = function(A) {
                return r(this, void 0, void 0, function() {
                  var e;
                  return n(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return (
                          this.options.backgroundColor &&
                            ((this.ctx.fillStyle = ee(
                              this.options.backgroundColor
                            )),
                            this.ctx.fillRect(
                              this.options.x - this.options.scrollX,
                              this.options.y - this.options.scrollY,
                              this.options.width,
                              this.options.height
                            )),
                          (r = new oB(A, [])),
                          (n = new sB(r)),
                          iB(r, n, n, (B = [])),
                          aB(r.container, B),
                          (e = n),
                          [4, this.renderStack(e)]
                        );
                      case 1:
                        return (
                          t.sent(), this.applyEffects([], 2), [2, this.canvas]
                        );
                    }
                    var r, n, B;
                  });
                });
              }),
              A
            );
          })(),
          HB = function(A) {
            return (
              A instanceof An ||
              A instanceof $r ||
              (A instanceof Zr && A.type !== qr && A.type !== Yr)
            );
          },
          fB = function(A, e) {
            switch (A) {
              case oe.BORDER_BOX:
                return tB(e);
              case oe.CONTENT_BOX:
                return (function(A) {
                  return [
                    A.topLeftContentBox,
                    A.topRightContentBox,
                    A.bottomRightContentBox,
                    A.bottomLeftContentBox
                  ];
                })(e);
              case oe.PADDING_BOX:
              default:
                return rB(e);
            }
          },
          dB = function(A) {
            switch (A) {
              case Mt.CENTER:
                return "center";
              case Mt.RIGHT:
                return "right";
              case Mt.LEFT:
              default:
                return "left";
            }
          },
          pB = (function() {
            function A(A) {
              (this.canvas = A.canvas
                ? A.canvas
                : document.createElement("canvas")),
                (this.ctx = this.canvas.getContext("2d")),
                (this.options = A),
                (this.canvas.width = Math.floor(A.width * A.scale)),
                (this.canvas.height = Math.floor(A.height * A.scale)),
                (this.canvas.style.width = A.width + "px"),
                (this.canvas.style.height = A.height + "px"),
                this.ctx.scale(this.options.scale, this.options.scale),
                this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY),
                Ke.getInstance(A.id).debug(
                  "EXPERIMENTAL ForeignObject renderer initialized (" +
                    A.width +
                    "x" +
                    A.height +
                    " at " +
                    A.x +
                    "," +
                    A.y +
                    ") with scale " +
                    A.scale
                );
            }
            return (
              (A.prototype.render = function(A) {
                return r(this, void 0, void 0, function() {
                  var e, t;
                  return n(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (e = de(
                            Math.max(
                              this.options.windowWidth,
                              this.options.width
                            ) * this.options.scale,
                            Math.max(
                              this.options.windowHeight,
                              this.options.height
                            ) * this.options.scale,
                            this.options.scrollX * this.options.scale,
                            this.options.scrollY * this.options.scale,
                            A
                          )),
                          [4, NB(e)]
                        );
                      case 1:
                        return (
                          (t = r.sent()),
                          this.options.backgroundColor &&
                            ((this.ctx.fillStyle = ee(
                              this.options.backgroundColor
                            )),
                            this.ctx.fillRect(
                              0,
                              0,
                              this.options.width * this.options.scale,
                              this.options.height * this.options.scale
                            )),
                          this.ctx.drawImage(
                            t,
                            -this.options.x * this.options.scale,
                            -this.options.y * this.options.scale
                          ),
                          [2, this.canvas]
                        );
                    }
                  });
                });
              }),
              A
            );
          })(),
          NB = function(A) {
            return new Promise(function(e, t) {
              var r = new Image();
              (r.onload = function() {
                e(r);
              }),
                (r.onerror = t),
                (r.src =
                  "data:image/svg+xml;charset=utf-8," +
                  encodeURIComponent(new XMLSerializer().serializeToString(A)));
            });
          },
          KB = function(A) {
            return $A(LA.create(A).parseComponentValue());
          };
        Ie.setContext(window);
        var IB = function(A, e) {
            return r(void 0, void 0, void 0, function() {
              var r,
                o,
                i,
                a,
                c,
                Q,
                u,
                w,
                U,
                l,
                C,
                g,
                E,
                F,
                h,
                H,
                f,
                d,
                p,
                N,
                K,
                I,
                m;
              return n(this, function(n) {
                switch (n.label) {
                  case 0:
                    if (!(r = A.ownerDocument))
                      throw new Error("Element is not attached to a Document");
                    if (!(o = r.defaultView))
                      throw new Error("Document is not attached to a Window");
                    return (
                      (i = (
                        Math.round(1e3 * Math.random()) + Date.now()
                      ).toString(16)),
                      (a =
                        gn(A) || "HTML" === A.tagName
                          ? (function(A) {
                              var e = A.body,
                                t = A.documentElement;
                              if (!e || !t)
                                throw new Error("Unable to get document size");
                              var r = Math.max(
                                  Math.max(e.scrollWidth, t.scrollWidth),
                                  Math.max(e.offsetWidth, t.offsetWidth),
                                  Math.max(e.clientWidth, t.clientWidth)
                                ),
                                n = Math.max(
                                  Math.max(e.scrollHeight, t.scrollHeight),
                                  Math.max(e.offsetHeight, t.offsetHeight),
                                  Math.max(e.clientHeight, t.clientHeight)
                                );
                              return new B(0, 0, r, n);
                            })(r)
                          : s(A)),
                      (c = a.width),
                      (Q = a.height),
                      (u = a.left),
                      (w = a.top),
                      (U = t(
                        {},
                        {
                          allowTaint: !1,
                          imageTimeout: 15e3,
                          proxy: void 0,
                          useCORS: !1
                        },
                        e
                      )),
                      (l = {
                        backgroundColor: "#ffffff",
                        cache: e.cache ? e.cache : Ie.create(i, U),
                        logging: !0,
                        removeContainer: !0,
                        foreignObjectRendering: !1,
                        scale: o.devicePixelRatio || 1,
                        windowWidth: o.innerWidth,
                        windowHeight: o.innerHeight,
                        scrollX: o.pageXOffset,
                        scrollY: o.pageYOffset,
                        x: u,
                        y: w,
                        width: Math.ceil(c),
                        height: Math.ceil(Q),
                        id: i
                      }),
                      (C = t({}, l, U, e)),
                      (g = new B(
                        C.scrollX,
                        C.scrollY,
                        C.windowWidth,
                        C.windowHeight
                      )),
                      Ke.create(i),
                      Ke.getInstance(i).debug("Starting document clone"),
                      (E = new Dn(A, {
                        id: i,
                        onclone: C.onclone,
                        ignoreElements: C.ignoreElements,
                        inlineImages: C.foreignObjectRendering,
                        copyStyles: C.foreignObjectRendering
                      })),
                      (F = E.clonedReferenceElement)
                        ? [4, E.toIFrame(r, g)]
                        : [
                            2,
                            Promise.reject(
                              "Unable to find element in cloned iframe"
                            )
                          ]
                    );
                  case 1:
                    return (
                      (h = n.sent()),
                      (H = r.documentElement
                        ? KB(
                            getComputedStyle(r.documentElement).backgroundColor
                          )
                        : ce.TRANSPARENT),
                      (f = r.body
                        ? KB(getComputedStyle(r.body).backgroundColor)
                        : ce.TRANSPARENT),
                      (d = e.backgroundColor),
                      (p = "string" == typeof d ? KB(d) : 4294967295),
                      (N =
                        A === r.documentElement
                          ? Ae(H)
                            ? Ae(f)
                              ? p
                              : f
                            : H
                          : p),
                      (K = {
                        id: i,
                        cache: C.cache,
                        backgroundColor: N,
                        scale: C.scale,
                        x: C.x,
                        y: C.y,
                        scrollX: C.scrollX,
                        scrollY: C.scrollY,
                        width: C.width,
                        height: C.height,
                        windowWidth: C.windowWidth,
                        windowHeight: C.windowHeight
                      }),
                      C.foreignObjectRendering
                        ? (Ke.getInstance(i).debug(
                            "Document cloned, using foreign object rendering"
                          ),
                          [4, new pB(K).render(F)])
                        : [3, 3]
                    );
                  case 2:
                    return (I = n.sent()), [3, 5];
                  case 3:
                    return (
                      Ke.getInstance(i).debug(
                        "Document cloned, using computed rendering"
                      ),
                      Ie.attachInstance(C.cache),
                      Ke.getInstance(i).debug("Starting DOM parsing"),
                      (m = sn(F)),
                      Ie.detachInstance(),
                      N === m.styles.backgroundColor &&
                        (m.styles.backgroundColor = ce.TRANSPARENT),
                      Ke.getInstance(i).debug("Starting renderer"),
                      [4, new hB(K).render(m)]
                    );
                  case 4:
                    (I = n.sent()), (n.label = 5);
                  case 5:
                    return (
                      !0 === C.removeContainer &&
                        (mB(h) ||
                          Ke.getInstance(i).error(
                            "Cannot detach cloned iframe as it is not in the DOM anymore"
                          )),
                      Ke.getInstance(i).debug("Finished rendering"),
                      Ke.destroy(i),
                      Ie.destroy(i),
                      [2, I]
                    );
                }
              });
            });
          },
          mB = function(A) {
            return !!A.parentNode && (A.parentNode.removeChild(A), !0);
          };
        return function(A, e) {
          return void 0 === e && (e = {}), IB(A, e);
        };
      })();
    },
    27: function(A, e, t) {
      (function(t) {
        var r, n, B;
        (n = []),
          void 0 ===
            (B =
              "function" ==
              typeof (r = function() {
                "use strict";
                function e(A, e, t) {
                  var r = new XMLHttpRequest();
                  r.open("GET", A),
                    (r.responseType = "blob"),
                    (r.onload = function() {
                      s(r.response, e, t);
                    }),
                    (r.onerror = function() {}),
                    r.send();
                }
                function r(A) {
                  var e = new XMLHttpRequest();
                  e.open("HEAD", A, !1);
                  try {
                    e.send();
                  } catch (A) {}
                  return 200 <= e.status && 299 >= e.status;
                }
                function n(A) {
                  try {
                    A.dispatchEvent(new MouseEvent("click"));
                  } catch (t) {
                    var e = document.createEvent("MouseEvents");
                    e.initMouseEvent(
                      "click",
                      !0,
                      !0,
                      window,
                      0,
                      0,
                      0,
                      80,
                      20,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      A.dispatchEvent(e);
                  }
                }
                var B =
                    "object" == typeof window && window.window === window
                      ? window
                      : "object" == typeof self && self.self === self
                      ? self
                      : "object" == typeof t && t.global === t
                      ? t
                      : void 0,
                  s =
                    B.saveAs ||
                    ("object" != typeof window || window !== B
                      ? function() {}
                      : "download" in HTMLAnchorElement.prototype
                      ? function(A, t, s) {
                          var o = B.URL || B.webkitURL,
                            i = document.createElement("a");
                          (t = t || A.name || "download"),
                            (i.download = t),
                            (i.rel = "noopener"),
                            "string" == typeof A
                              ? ((i.href = A),
                                i.origin === location.origin
                                  ? n(i)
                                  : r(i.href)
                                  ? e(A, t, s)
                                  : n(i, (i.target = "_blank")))
                              : ((i.href = o.createObjectURL(A)),
                                setTimeout(function() {
                                  o.revokeObjectURL(i.href);
                                }, 4e4),
                                setTimeout(function() {
                                  n(i);
                                }, 0));
                        }
                      : "msSaveOrOpenBlob" in navigator
                      ? function(A, t, B) {
                          if (
                            ((t = t || A.name || "download"),
                            "string" != typeof A)
                          )
                            navigator.msSaveOrOpenBlob(
                              (function(A, e) {
                                return (
                                  void 0 === e
                                    ? (e = { autoBom: !1 })
                                    : "object" != typeof e &&
                                      (e = { autoBom: !e }),
                                  e.autoBom &&
                                  /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                                    A.type
                                  )
                                    ? new Blob(["\ufeff", A], { type: A.type })
                                    : A
                                );
                              })(A, B),
                              t
                            );
                          else if (r(A)) e(A, t, B);
                          else {
                            var s = document.createElement("a");
                            (s.href = A),
                              (s.target = "_blank"),
                              setTimeout(function() {
                                n(s);
                              });
                          }
                        }
                      : function(A, t, r, n) {
                          if (
                            ((n = n || open("", "_blank")) &&
                              (n.document.title = n.document.body.innerText =
                                "downloading..."),
                            "string" == typeof A)
                          )
                            return e(A, t, r);
                          var s = "application/octet-stream" === A.type,
                            o = /constructor/i.test(B.HTMLElement) || B.safari,
                            i = /CriOS\/[\d]+/.test(navigator.userAgent);
                          if (
                            (i || (s && o)) &&
                            "object" == typeof FileReader
                          ) {
                            var a = new FileReader();
                            (a.onloadend = function() {
                              var A = a.result;
                              (A = i
                                ? A
                                : A.replace(
                                    /^data:[^;]*;/,
                                    "data:attachment/file;"
                                  )),
                                n ? (n.location.href = A) : (location = A),
                                (n = null);
                            }),
                              a.readAsDataURL(A);
                          } else {
                            var c = B.URL || B.webkitURL,
                              Q = c.createObjectURL(A);
                            n ? (n.location = Q) : (location.href = Q),
                              (n = null),
                              setTimeout(function() {
                                c.revokeObjectURL(Q);
                              }, 4e4);
                          }
                        });
                (B.saveAs = s.saveAs = s), (A.exports = s);
              })
                ? r.apply(e, n)
                : r) || (A.exports = B);
      }.call(this, t(28)));
    },
    28: function(A, e) {
      var t;
      t = (function() {
        return this;
      })();
      try {
        t = t || new Function("return this")();
      } catch (A) {
        "object" == typeof window && (t = window);
      }
      A.exports = t;
    }
  }
]);
