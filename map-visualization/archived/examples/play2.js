(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    21: function(e, t, r) {
      "use strict";
      var n = r(22).CopyToClipboard;
      (n.CopyToClipboard = n), (e.exports = n);
    },
    22: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        a = l(r(0)),
        i = l(r(23));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      (t.CopyToClipboard = (function(e) {
        function t() {
          var e, r, n;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var o = arguments.length, l = Array(o), s = 0; s < o; s++)
            l[s] = arguments[s];
          return (
            (r = n = c(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(l)
              )
            )),
            (n.onClick = function(e) {
              var t = n.props,
                r = t.text,
                o = t.onCopy,
                l = t.children,
                c = t.options,
                s = a.default.Children.only(l),
                p = (0, i.default)(r, c);
              o && o(r, p),
                s &&
                  s.props &&
                  "function" == typeof s.props.onClick &&
                  s.props.onClick(e);
            }),
            c(n, r)
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(t, [
            {
              key: "render",
              value: function() {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  r = (function(e, t) {
                    var r = {};
                    for (var n in e)
                      t.indexOf(n) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, n) &&
                          (r[n] = e[n]));
                    return r;
                  })(e, ["text", "onCopy", "options", "children"]),
                  o = a.default.Children.only(t);
                return a.default.cloneElement(
                  o,
                  n({}, r, { onClick: this.onClick })
                );
              }
            }
          ]),
          t
        );
      })(a.default.PureComponent)).defaultProps = {
        onCopy: void 0,
        options: void 0
      };
    },
    23: function(e, t, r) {
      "use strict";
      var n = r(24),
        o = "Copy to clipboard: #{key}, Enter";
      e.exports = function(e, t) {
        var r,
          a,
          i,
          l,
          c,
          s = !1;
        t || (t = {}), t.debug;
        try {
          if (
            ((a = n()),
            (i = document.createRange()),
            (l = document.getSelection()),
            ((c = document.createElement("span")).textContent = e),
            (c.style.all = "unset"),
            (c.style.position = "fixed"),
            (c.style.top = 0),
            (c.style.clip = "rect(0, 0, 0, 0)"),
            (c.style.whiteSpace = "pre"),
            (c.style.webkitUserSelect = "text"),
            (c.style.MozUserSelect = "text"),
            (c.style.msUserSelect = "text"),
            (c.style.userSelect = "text"),
            c.addEventListener("copy", function(r) {
              r.stopPropagation(),
                t.format &&
                  (r.preventDefault(),
                  r.clipboardData.clearData(),
                  r.clipboardData.setData(t.format, e));
            }),
            document.body.appendChild(c),
            i.selectNodeContents(c),
            l.addRange(i),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          s = !0;
        } catch (n) {
          try {
            window.clipboardData.setData(t.format || "text", e), (s = !0);
          } catch (n) {
            (r = (function(e) {
              var t =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
              return e.replace(/#{\s*key\s*}/g, t);
            })("message" in t ? t.message : o)),
              window.prompt(r, e);
          }
        } finally {
          l &&
            ("function" == typeof l.removeRange
              ? l.removeRange(i)
              : l.removeAllRanges()),
            c && document.body.removeChild(c),
            a();
        }
        return s;
      };
    },
    24: function(e, t) {
      e.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (
          var t = document.activeElement, r = [], n = 0;
          n < e.rangeCount;
          n++
        )
          r.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function() {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                r.forEach(function(t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    34: function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        o = r.n(n),
        a = r(1);
      const i = a.default.div`
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 1.4rem;
    height: 1.4rem;
    path {
      transition: all 0.5s ease-in;
    }
  }
`;
      var l = ({ currColor: e }) => {
          const [t, r] = Object(n.useState)(!1);
          Object(n.useEffect)(() => {
            JSON.parse(localStorage.getItem("FAV_COLORS") || "[]").some(
              t => t.name == e.name
            )
              ? r(!0)
              : r(!1);
          }, [e]);
          return o.a.createElement(
            i,
            {
              onClick: () => {
                let n = JSON.parse(localStorage.getItem("FAV_COLORS") || "[]");
                t ? (n = n.filter(t => t.name != e.name)) : n.push(e),
                  r(e => !e),
                  localStorage.setItem("FAV_COLORS", JSON.stringify(n));
              }
            },
            o.a.createElement(
              "svg",
              {
                t: "1568172188297",
                className: "icon",
                viewBox: "0 0 1024 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "p-id": "2640",
                width: "32",
                height: "32"
              },
              o.a.createElement("path", {
                d:
                  "M512 910.933333l-61.866667-56.106667c-219.733333-199.466667-364.8-331.093333-364.8-492.16 0-131.626667 103.04-234.666667 234.666667-234.666667 74.24 0 145.493333 34.56 192 88.96 46.506667-54.4 117.76-88.96 192-88.96 131.626667 0 234.666667 103.04 234.666667 234.666667 0 161.066667-145.066667 292.693333-364.8 492.16l-61.866667 56.106667z",
                "p-id": "2641",
                fill: t ? "#ef7a82" : "#fff"
              })
            )
          );
        },
        c = r(21);
      var s = a.keyframes`
from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
      const p = a.default.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .icon {
    width: 1.4rem;
  }
  > .hex {
    font-size: 0.6rem;
    padding: 0.2rem;
    background: rgba(51, 51, 51, 0.5);
    border-radius: 0.2rem;
    text-transform: uppercase;
  }
  .copyTip {
    position: absolute;
    left: 0.3rem;
    top: 2rem;
    font-size: 0.6rem;
    padding: 0.3rem 0.4rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.2rem;
    animation: ${s} 1s;
    animation-fill-mode: both;
  }
`;
      var u = ({ currColorHex: e }) => {
        const [t, r] = Object(n.useState)(!1);
        return o.a.createElement(
          c.CopyToClipboard,
          {
            text: e,
            onCopy: () => {
              r(!0),
                setTimeout(() => {
                  r(!1);
                }, 1800);
            }
          },
          o.a.createElement(
            p,
            { onClick: () => {} },
            o.a.createElement(
              "svg",
              {
                t: "1568174087144",
                className: "icon",
                viewBox: "0 0 1024 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "p-id": "7098",
                width: "36",
                height: "36"
              },
              o.a.createElement("path", {
                d:
                  "M220.429 838.029c-18.2 0-32.9-14.7-32.9-32.9v-437c0-18.2 14.7-32.9 32.9-32.9h440c18.2 0 32.9 14.7 32.9 32.9v436.9c0 18.2-14.7 32.9-32.9 32.9h-440z m407-65.9v-371.1h-374.1v371.1h374.1z",
                fill: "#fff",
                "p-id": "7099"
              }),
              o.a.createElement("path", {
                d:
                  "M438.129 254.029c-18.2 0-32.9-14.7-32.9-32.9s14.7-32.9 32.9-32.9h369.6c18.2 0 32.9 14.7 32.9 32.9v363.5c0 18.2-14.7 32.9-32.9 32.9s-32.9-14.7-32.9-32.9v-330.6h-336.7z",
                fill: "#fff",
                "p-id": "7100"
              })
            ),
            o.a.createElement("span", { className: "hex" }, e),
            t
              ? o.a.createElement("span", { className: "copyTip" }, "已复制!")
              : null
          )
        );
      };
      function f(e = [0, 0, 0]) {
        const [t, r, n] = e;
        return (299 * t + 587 * r + 114 * n) / 1e3 > 130 ? "#333" : "#fff";
      }
      const m = a.default.hgroup`
  color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  padding: 1rem 0.8rem;
  position: relative;
  width: 4.6rem;
  cursor: default;
  margin-top: -6rem;
  margin-right: 0.5rem;

  &:hover > h1 {
    transform: scale(1.1);
  }

  > h1 {
    font-size: 3.2rem;
    letter-spacing: -0.5rem;
    writing-mode: vertical-lr;
    transition: transform 0.4s ease-in;

    font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
      'Microsoft YaHei';
  }
  > h2 {
    text-transform: capitalize;
    font-size: 0.6rem;
    writing-mode: vertical-lr;
    position: absolute;
    right: 0.2rem;
    bottom: 0.4rem;
    color: rgba(255, 255, 255, 0.66);
  }
  > h3 {
    width: 100%;
    position: absolute;
    left: -0.4rem;
    bottom: -2.8rem;
    display: flex;
  }
`;
      t.default = ({ name: e, pinyin: t, hex: r, RGB: n, CMYK: a }) =>
        o.a.createElement(
          m,
          null,
          o.a.createElement("h1", { style: { color: f(n) } }, e),
          o.a.createElement(l, {
            currColor: { hex: r, name: e, pinyin: t, RGB: n, CMYK: a }
          }),
          o.a.createElement("h2", null, t),
          o.a.createElement(
            "h3",
            null,
            o.a.createElement(u, { currColorHex: r })
          )
        );
    }
  }
]);
