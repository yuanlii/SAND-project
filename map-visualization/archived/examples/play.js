!(function(n) {
  function e(e) {
    for (var t, o, r = e[0], h = e[1], a = 0, c = []; a < r.length; a++)
      (o = r[a]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && c.push(i[o][0]),
        (i[o] = 0);
    for (t in h) Object.prototype.hasOwnProperty.call(h, t) && (n[t] = h[t]);
    for (u && u(e); c.length; ) c.shift()();
  }
  var t = {},
    i = { main: 0 };
  function o(e) {
    if (t[e]) return t[e].exports;
    var i = (t[e] = { i: e, l: !1, exports: {} });
    return n[e].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  (o.e = function(n) {
    var e = [],
      t = i[n];
    if (0 !== t)
      if (t) e.push(t[2]);
      else {
        var r = new Promise(function(e, o) {
          t = i[n] = [e, o];
        });
        e.push((t[2] = r));
        var h,
          a = document.createElement("script");
        (a.charset = "utf-8"),
          (a.timeout = 120),
          o.nc && a.setAttribute("nonce", o.nc),
          (a.src = (function(n) {
            return (
              o.p +
              "static/js/" +
              ({}[n] || n) +
              "." +
              {
                0: "3d3c06",
                1: "a8642e",
                2: "35d013",
                3: "0c3018",
                4: "c84208",
                5: "fffc6f",
                6: "febef9",
                7: "5cc224",
                8: "8fe80d",
                9: "5fe109"
              }[n] +
              ".chunk.js"
            );
          })(n));
        var u = new Error();
        h = function(e) {
          (a.onerror = a.onload = null), clearTimeout(c);
          var t = i[n];
          if (0 !== t) {
            if (t) {
              var o = e && ("load" === e.type ? "missing" : e.type),
                r = e && e.target && e.target.src;
              (u.message =
                "Loading chunk " + n + " failed.\n(" + o + ": " + r + ")"),
                (u.name = "ChunkLoadError"),
                (u.type = o),
                (u.request = r),
                t[1](u);
            }
            i[n] = void 0;
          }
        };
        var c = setTimeout(function() {
          h({ type: "timeout", target: a });
        }, 12e4);
        (a.onerror = a.onload = h), document.head.appendChild(a);
      }
    return Promise.all(e);
  }),
    (o.m = n),
    (o.c = t),
    (o.d = function(n, e, t) {
      o.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
    }),
    (o.r = function(n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (o.t = function(n, e) {
      if ((1 & e && (n = o(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (o.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var i in n)
          o.d(
            t,
            i,
            function(e) {
              return n[e];
            }.bind(null, i)
          );
      return t;
    }),
    (o.n = function(n) {
      var e =
        n && n.__esModule
          ? function() {
              return n.default;
            }
          : function() {
              return n;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function(n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (o.p = "/chinese-colors/"),
    (o.oe = function(n) {
      throw n;
    });
  var r = (window.webpackJsonp = window.webpackJsonp || []),
    h = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var a = 0; a < r.length; a++) e(r[a]);
  var u = h;
  o((o.s = 17));
})([
  function(n, e, t) {
    n.exports = t(2)(0);
  },
  function(n, e, t) {
    n.exports = t(2)(17);
  },
  function(n, e) {
    n.exports = react_e930f0774fb8e81fddea;
  },
  function(n, e, t) {
    "use strict";
    t.d(e, "c", function() {
      return h;
    }),
      t.d(e, "d", function() {
        return r;
      }),
      t.d(e, "a", function() {
        return a;
      }),
      t.d(e, "b", function() {
        return o;
      });
    var i = t(0);
    const o = (n = 750) => {
        const [e, t] = Object(i.useState)(window.innerWidth <= n);
        return (
          Object(i.useEffect)(() => {
            const e = () => {
              window.innerWidth <= n ? t(!0) : t(!1);
            };
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e, !0);
              }
            );
          }, [n]),
          { isMobile: e }
        );
      },
      r = () => {
        const [n, e] = Object(i.useState)(!1);
        return {
          preview: n,
          closePreview: () => {
            e(!1);
          },
          showPreview: () => {
            e(!0);
          }
        };
      },
      h = () => {
        const [n, e] = Object(i.useState)(!1);
        return {
          visible: n,
          closeModal: () => {
            e(!1);
          },
          showModal: () => {
            e(!0);
          }
        };
      },
      a = n => {
        const e = n => {
            localStorage.setItem("SELECTED_COLOR", JSON.stringify(n));
            let e = document.title.split(" - ");
            (document.title =
              e.length > 1 ? `${n.name} - ${e[1]}` : `${n.name} - ${e[0]}`),
              document
                .querySelector("meta[name=theme-color]")
                .setAttribute("content", n.hex);
          },
          { currColor: t } = n;
        e(t);
        const [o, r] = Object(i.useReducer)((n, t) => {
          const { type: i, payload: o } = t,
            { currSet: r, sets: h } = n;
          switch (i) {
            case "UPDATE_COLOR": {
              let t = r.colors.find(n => n.name === o.name);
              return e(t), { ...n, currColor: t };
            }
            case "UPDATE_COLOR_SET": {
              let t = h.find(n => n.name === o.name);
              return (
                localStorage.setItem("SELECTED_COLOR_SET", JSON.stringify(t)),
                "" == o.name &&
                  (t.colors = JSON.parse(
                    localStorage.getItem("FAV_COLORS") || "[]"
                  )),
                e(t.colors[0]),
                { ...n, currSet: t, currColor: t.colors[0] }
              );
            }
            default:
              throw new Error();
          }
        }, n);
        return {
          ...o,
          updateCurrColor: n => {
            r({ type: "UPDATE_COLOR", payload: { name: n } });
          },
          updateCurrSet: n => {
            r({ type: "UPDATE_COLOR_SET", payload: { name: n } });
          }
        };
      };
  },
  function(n, e, t) {
    const i = t(6),
      o = t(16),
      r = {};
    Object.keys(i).forEach(n => {
      (r[n] = {}),
        Object.defineProperty(r[n], "channels", { value: i[n].channels }),
        Object.defineProperty(r[n], "labels", { value: i[n].labels });
      const e = o(n);
      Object.keys(e).forEach(t => {
        const i = e[t];
        (r[n][t] = (function(n) {
          const e = function(...e) {
            const t = e[0];
            if (null == t) return t;
            t.length > 1 && (e = t);
            const i = n(e);
            if ("object" == typeof i)
              for (let n = i.length, e = 0; e < n; e++) i[e] = Math.round(i[e]);
            return i;
          };
          return "conversion" in n && (e.conversion = n.conversion), e;
        })(i)),
          (r[n][t].raw = (function(n) {
            const e = function(...e) {
              const t = e[0];
              return null == t ? t : (t.length > 1 && (e = t), n(e));
            };
            return "conversion" in n && (e.conversion = n.conversion), e;
          })(i));
      });
    }),
      (n.exports = r);
  },
  function(n) {
    n.exports = JSON.parse(
      '[{"name":"红","hex":"#ffb3a7","colors":[{"hex":"#ffb3a7","name":"粉红","intro":"即浅红色。别称：妃色、杨妃色、湘妃色、妃红色","figure":"flower.moon.png?o=0.8"},{"hex":"#ed5736","name":"妃色","intro":"妃红色。古同\\"绯\\"，粉红色。杨妃色湘妃色粉红皆同义。"},{"hex":"#f00056","name":"品红","intro":"比大红浅的红色（这里的\\"品红\\"估计是指的\\"一品红\\"，是基于大红色系的，和现在我们印刷用色的\\"品红M100\\"不是一个概念）"},{"hex":"#f47983","name":"桃红","intro":"桃花的颜色，比粉红略鲜润的颜色。（不大于M70的色彩，有时可加入适量黄色）"},{"hex":"#db5a6b","name":"海棠红","intro":"淡紫红色、较桃红色深一些，是非常妩媚娇艳的颜色。","figure":"flower.moon.png?o=0.6"},{"hex":"#f20c00","name":"石榴红","intro":"石榴花的颜色，高色度和纯度的红色。"},{"hex":"#c93756","name":"樱桃色","intro":"鲜红色"},{"hex":"#f05654","name":"银红","intro":"银朱和粉红色颜料配成的颜色。多用来形容有光泽的各种红色，尤指有光泽浅红。"},{"hex":"#ff2121","name":"大红","intro":"正红色，三原色中的红，传统的中国红，又称绛色（RGB色中的R255系列明度）"},{"hex":"#8c4356","name":"绛紫","intro":"紫中略带红的颜色"},{"hex":"#c83c23","name":"绯红","intro":"艳丽的深红"},{"hex":"#9d2933","name":"胭脂","intro":"1，女子装扮时用的胭脂的颜色。2，国画暗红色颜料"},{"hex":"#ff4c00","name":"朱红","intro":"朱砂的颜色，比大红活泼，也称铅朱朱色丹色（在YM对等的情况下，适量减少红色的成分就是该色的色彩系列感觉）"},{"hex":"#ff4e20","name":"丹","intro":"丹砂的鲜艳红色"},{"hex":"#f35336","name":"彤","intro":"赤色"},{"hex":"#cb3a56","name":"茜色","intro":"茜草染的色彩，呈深红色"},{"hex":"#ff2d51","name":"火红","intro":"火焰的红色，赤色"},{"hex":"#c91f37","name":"赫赤","intro":"深红，火红。泛指赤色、火红色。"},{"hex":"#ef7a82","name":"嫣红","intro":"鲜艳的红色","figure":"jinyu.png?o=0.8"},{"hex":"#ff0097","name":"洋红","intro":"色橘红（这个色彩方向不太对，通常洋红指的是倾向于M100系列的红色，应该削弱黄色成分。）"},{"hex":"#ff3300","name":"炎","intro":"引申为红色。"},{"hex":"#c3272b","name":"赤","intro":"本义火的颜色，即红色"},{"hex":"#a98175","name":"绾","intro":"绛色；浅绛色。"},{"hex":"#c32136","name":"枣红","intro":"即深红（色相不变，是深浅变化）"},{"hex":"#b36d61","name":"檀","intro":"浅红色，浅绛色。"},{"hex":"#be002f","name":"殷红","intro":"发黑的红色。"},{"hex":"#dc3023","name":"酡红","intro":"像饮酒后脸上泛现的红色，泛指脸红"},{"hex":"#f9906f","name":"酡颜","intro":"饮酒脸红的样子。亦泛指脸红色","figure":"meinv.png?o=0.9&width=18rem"}]},{"name":"黄","hex":"#fff143","colors":[{"hex":"#fff143","name":"鹅黄","intro":"淡黄色（鹅嘴的颜色，高明度微偏红黄色）"},{"hex":"#faff72","name":"鸭黄","intro":"小鸭毛的黄色"},{"hex":"#eaff56","name":"樱草色","intro":"淡黄色"},{"hex":"#ffa631","name":"杏黄","intro":"成熟杏子的黄色（Y100M20~30感觉的色彩，比较常用且有浓郁中国味道）"},{"hex":"#ff8c31","name":"杏红","intro":"成熟杏子偏红色的一种颜色"},{"hex":"#ff8936","name":"橘黄","intro":"柑橘的黄色。"},{"hex":"#ffa400","name":"橙黄","intro":"同上。（Y100M50感觉的色彩，现代感比较强。广告上用得较多）"},{"hex":"#ff7500","name":"橘红","intro":"柑橘皮所呈现的红色。"},{"hex":"#ffc773","name":"姜黄","intro":"中药名。别名黄姜。为姜科植物姜黄的根茎。又指人脸色不正,呈黄白色"},{"hex":"#f0c239","name":"缃色","intro":"浅黄色。"},{"hex":"#fa8c35","name":"橙色","intro":"界于红色和黄色之间的混合色。"},{"hex":"#b35c44","name":"茶色","intro":"一种比栗色稍红的棕橙色至浅棕色"},{"hex":"#a88462","name":"驼色","intro":"一种比咔叽色稍红而微淡、比肉桂色黄而稍淡和比核桃棕色黄而暗的浅黄棕色"},{"hex":"#c89b40","name":"昏黄","intro":"形容天色、灯光等呈幽暗的黄色"},{"hex":"#60281e","name":"栗色","intro":"栗壳的颜色。即紫黑色"},{"hex":"#b25d25","name":"棕色","intro":"棕毛的颜色,即褐色。1，在红色和黄色之间的任何一种颜色2，适中的暗淡和适度的浅黑。"},{"hex":"#827100","name":"棕绿","intro":"绿中泛棕色的一种颜色。"},{"hex":"#7c4b00","name":"棕黑","intro":"深棕色。"},{"hex":"#9b4400","name":"棕红","intro":"红褐色。"},{"hex":"#ae7000","name":"棕黄","intro":"浅褐色。"},{"hex":"#9c5333","name":"赭","intro":"赤红如赭土的颜料,古人用以饰面"},{"hex":"#955539","name":"赭色","intro":"红色、赤红色。"},{"hex":"#ca6924","name":"琥珀","intro":""},{"hex":"#6e511e","name":"褐色","intro":"黄黑色"},{"hex":"#d3b17d","name":"枯黄","intro":"干枯焦黄"},{"hex":"#e29c45","name":"黄栌","intro":"一种落叶灌木，花黄绿色,叶子秋天变成红色。木材黄色可做染料。"},{"hex":"#896c39","name":"秋色","intro":"1，中常橄榄棕色,它比一般橄榄棕色稍暗,且稍稍绿些。2，古以秋为金,其色白,故代指白色。"},{"hex":"#d9b611","name":"秋香色","intro":"浅橄榄色浅黄绿色。（直接在Y中掺入k10~30可得到不同浓淡的该类色彩）"}]},{"name":"绿","hex":"#0aa344","colors":[{"hex":"#bddd22","name":"嫩绿","intro":"像刚长出的嫩叶的浅绿色"},{"hex":"#c9dd22","name":"柳黄","intro":"像柳树芽那样的浅黄色"},{"hex":"#afdd22","name":"柳绿","intro":"柳叶的青绿色"},{"hex":"#789262","name":"竹青","intro":"竹子的绿色"},{"hex":"#a3d900","name":"葱黄","intro":"黄绿色，嫩黄色"},{"hex":"#9ed900","name":"葱绿","intro":"1，浅绿又略显微黄的颜色2，草木青翠的样子"},{"hex":"#0eb83a","name":"葱青","intro":"淡淡的青绿色"},{"hex":"#0eb840","name":"葱倩","intro":"青绿色"},{"hex":"#0aa344","name":"青葱","intro":"翠绿色,形容植物浓绿"},{"hex":"#00bc12","name":"油绿","intro":"光润而浓绿的颜色。以上几种绿色都是明亮可爱的色彩。"},{"hex":"#0c8918","name":"绿沈","intro":"（沉）深绿"},{"hex":"#1bd1a5","name":"碧色","intro":"1，青绿色。2，青白色,浅蓝色。"},{"hex":"#2add9c","name":"碧绿","intro":"鲜艳的青绿色"},{"hex":"#48c0a3","name":"青碧","intro":"鲜艳的青蓝色"},{"hex":"#3de1ad","name":"翡翠色","intro":"1，翡翠鸟羽毛的青绿色。2，翡翠宝石的颜色。（C-Y≥30的系列色彩，多与白色配合以体现清新明丽感觉，与黑色配合效果不好该色个性柔弱，会被黑色牵制）"},{"hex":"#40de5a","name":"草绿","intro":"绿而略黄的颜色。"},{"hex":"#00e09e","name":"青色","intro":"1，一类带绿的蓝色,中等深浅,高度饱和。3，本义是蓝色。4，一般指深绿色。5，也指黑色。6，四色印刷中的一色。2，特指三补色中的一色。"},{"hex":"#00e079","name":"青翠","intro":"鲜绿"},{"hex":"#c0ebd7","name":"青白","intro":"白而发青,尤指脸没有血色"},{"hex":"#e0eee8","name":"鸭卵青","intro":"淡青灰色，极淡的青绿色"},{"hex":"#bbcdc5","name":"蟹壳青","intro":"深灰绿色"},{"hex":"#424c50","name":"鸦青","intro":"鸦羽的颜色。即黑而带有紫绿光的颜色。"},{"hex":"#00e500","name":"绿色","intro":"1，在光谱中介于蓝与黄之间的那种颜色。2，本义青中带黄的颜色。3，引申为黑色，如绿鬓乌黑而光亮的鬓发。代指为青春年少的容颜。（现代色彩研究中，把绿色提高到了一个重要的位置，和其它红黄兰三原色并列研究，称做\\"心理原色\\"之一）"},{"hex":"#9ed048","name":"豆绿","intro":"浅黄绿色"},{"hex":"#96ce54","name":"豆青","intro":"浅青绿色"},{"hex":"#7bcfa6","name":"石青","intro":"淡灰绿色"},{"hex":"#2edfa3","name":"玉色","intro":"玉的颜色，高雅的淡绿、淡青色"},{"hex":"#7fecad","name":"缥","intro":"绿色而微白"},{"hex":"#a4e2c6","name":"艾绿","intro":"艾草的颜色。偏苍白的绿色。"},{"hex":"#21a675","name":"松柏绿","intro":"经冬松柏叶的深绿"},{"hex":"#057748","name":"松花绿","intro":"亦作\\"松花\\"、\\"松绿\\"。偏黑的深绿色,墨绿。","figure":"hudie.png?width=10rem"},{"hex":"#bce672","name":"松花色","intro":"浅黄绿色。（松树花粉的颜色）《红楼梦》中提及松花配桃红为娇艳"}]},{"name":"蓝","hex":"#44cef6","colors":[{"hex":"#44cef6","name":"蓝","intro":"三原色的一种。像晴天天空的颜色（这里的蓝色指的不是RGB色彩中的B，而是CMY色彩中的C）"},{"hex":"#177cb0","name":"靛青","intro":"也叫\\"蓝靛\\"。用蓼蓝叶泡水调和与石灰沉淀所得的蓝色染料。呈深蓝绿色（靛，发音dian四声，有些地方将蓝墨水称为\\"靛水\\"或者\\"兰靛水\\"）","figure":"hehua.caise.png"},{"hex":"#065279","name":"靛蓝","intro":"由植物(例如靛蓝或菘蓝属植物)得到的蓝色染料","figure":"moon.png"},{"hex":"#3eede7","name":"碧蓝","intro":"青蓝色"},{"hex":"#70f3ff","name":"蔚蓝","intro":"类似晴朗天空的颜色的一种蓝色","figure":"he.png"},{"hex":"#4b5cc4","name":"宝蓝","intro":"鲜艳明亮的蓝色（英文中为RoyalBlue即皇家蓝色，是皇室选用的色彩，多和小面积纯黄色（金色）配合使用。）"},{"hex":"#a1afc9","name":"蓝灰色","intro":"一种近于灰略带蓝的深灰色"},{"hex":"#2e4e7e","name":"藏青","intro":"蓝而近黑"},{"hex":"#3b2e7e","name":"藏蓝","intro":"蓝里略透红色"},{"hex":"#4a4266","name":"黛","intro":"青黑色的颜料。古代女子用以画眉。"},{"hex":"#4a4266","name":"黛螺","intro":"绘画或画眉所使用的青黑色颜料，代指女子眉妩。"},{"hex":"#4a4266","name":"黛色","intro":"青黑色。"},{"hex":"#426666","name":"黛绿","intro":"墨绿。"},{"hex":"#425066","name":"黛蓝","intro":"深蓝色"},{"hex":"#574266","name":"黛紫","intro":"深紫色"},{"hex":"#8d4bbb","name":"紫色","intro":"蓝和红组成的颜色。古人以紫为祥瑞的颜色。代指与帝王、皇宫有关的事物。"},{"hex":"#815463","name":"紫酱","intro":"浑浊的紫色"},{"hex":"#815476","name":"酱紫","intro":"紫中略带红的颜色"},{"hex":"#4c221b","name":"紫檀","intro":"檀木的颜色，也称乌檀色乌木色"},{"hex":"#003371","name":"绀青绀紫","intro":"纯度较低的深紫色"},{"hex":"#56004f","name":"紫棠","intro":"黑红色"},{"hex":"#801dae","name":"青莲","intro":"偏蓝的紫色"},{"hex":"#4c8dae","name":"群青","intro":"深蓝色"},{"hex":"#b0a4e3","name":"雪青","intro":"浅蓝紫色"},{"hex":"#cca4e3","name":"丁香色","intro":"紫丁香的颜色，浅浅的紫色，很娇柔淡雅的色彩"},{"hex":"#edd1d8","name":"藕色","intro":"浅灰而略带红的颜色"},{"hex":"#e4c6d0","name":"藕荷色","intro":"浅紫而略带红的颜色","figure":"jinyu.png?o=0.8"}]},{"name":"苍","hex":"#75878a","colors":[{"hex":"#75878a","name":"苍色","intro":"即各种颜色掺入黑色后的颜色","figure":"qunshan.png?width=100%"},{"hex":"#519a73","name":"苍翠","intro":""},{"hex":"#a29b7c","name":"苍黄","intro":"","figure":"guilinshanshui.png"},{"hex":"#7397ab","name":"苍青","intro":""},{"hex":"#395260","name":"苍黑","intro":"","figure":"sundown.png"},{"hex":"#d1d9e0","name":"苍白","intro":"准确的说是掺入不同灰度级别的灰色","figure":"fanchuan.png"}]},{"name":"水","hex":"#d2f0f4","colors":[{"hex":"#88ada6","name":"水色","intro":""},{"hex":"#f3d3e7","name":"水红","intro":""},{"hex":"#d4f2e7","name":"水绿","intro":""},{"hex":"#d2f0f4","name":"水蓝","intro":"","figure":"yu.png?width=17rem"},{"hex":"#d3e0f3","name":"淡青","intro":""},{"hex":"#30dff3","name":"湖蓝","intro":"","figure":"moon.png"},{"hex":"#25f8cb","name":"湖绿","intro":"皆是浅色。深色淡色，颜色深的或浅的，不再一一列出。","figure":"hehua.caise.png"}]},{"name":"灰白","hex":"#f0f0f4","colors":[{"hex":"#ffffff","name":"精白","intro":"纯白，洁白，净白，粉白。","figure":"meihua.shuimo.png"},{"hex":"#fffbf0","name":"象牙白","intro":"乳白色","figure":"pomo.png"},{"hex":"#f2fdff","name":"雪白","intro":"如雪般洁白","figure":"meihua.pink.png"},{"hex":"#d6ecf0","name":"月白","intro":"淡蓝色"},{"hex":"#f2ecde","name":"缟","intro":"白色","figure":"meihua.pink.png"},{"hex":"#e0f0e9","name":"素","intro":"白色，无色","figure":"qunshan.png?width=100%"},{"hex":"#f3f9f1","name":"荼白","intro":"如荼之白色","figure":"ddh.png?width=16rem"},{"hex":"#e9f1f6","name":"霜色","intro":"白霜的颜色。","figure":"qunshan2.png?width=100%"},{"hex":"#c2ccd0","name":"花白","intro":"白色和黑色混杂的。斑白的夹杂有灰色的白","figure":"flower.moon.png"},{"hex":"#fcefe8","name":"鱼肚白","intro":"似鱼腹部的颜色，多指黎明时东方的天色颜色（M5Y5）"},{"hex":"#e3f9fd","name":"莹白","intro":"晶莹洁白","figure":"meinv.png?width=18rem"},{"hex":"#808080","name":"灰色","intro":"黑色和白色混和成的一种颜色"},{"hex":"#eedeb0","name":"牙色","intro":"与象牙相似的淡黄色（暖白）"},{"hex":"#f0f0f4","name":"铅白","intro":"铅粉的白色。铅粉，国画颜料，日久易氧化\\"返铅\\"变黑。铅粉在古时用以搽脸的化妆品。（冷白）"}]},{"name":"黑","hex":"#000000","colors":[{"hex":"#622a1d","name":"玄色","intro":"赤黑色，黑中带红的颜色，又泛指黑色"},{"hex":"#3d3b4f","name":"玄青","intro":"深黑色"},{"hex":"#725e82","name":"乌色","intro":"暗而呈黑的颜色"},{"hex":"#392f41","name":"乌黑","intro":"深黑；漆黑","figure":"moon.png"},{"hex":"#161823","name":"漆黑","intro":"非常黑的","figure":"flower.moon.png?o=0.6"},{"hex":"#50616d","name":"墨色","intro":"即黑色"},{"hex":"#758a99","name":"墨灰","intro":"即黑灰"},{"hex":"#000000","name":"黑色","intro":"亮度最低的非彩色的或消色差的物体的颜色；最暗的灰色；与白色截然不同的消色差的颜色；被认为特别属于那些既不能反射、又不能透过能使人感觉到的微小入射光的物体,任何亮度很低的物体颜色。","figure":"moon.png"},{"hex":"#493131","name":"缁色","intro":"帛黑色"},{"hex":"#312520","name":"煤黑","intro":"别称：象牙黑。都是黑，不过有冷暖之分。"},{"hex":"#5d513c","name":"黧","intro":"黑中带黄的颜色"},{"hex":"#75664d","name":"黎","intro":"黑中带黄似黎草色"},{"hex":"#6b6882","name":"黝","intro":"本义为淡黑色或微青黑色。"},{"hex":"#665757","name":"黝黑","intro":"（皮肤暴露在太阳光下而晒成的）青黑色"},{"hex":"#41555d","name":"黯","intro":"深黑色、泛指黑色"}]},{"name":"金银","hex":"#eacd76","colors":[{"hex":"#f2be45","name":"赤金","intro":"足金的颜色"},{"hex":"#eacd76","name":"金色","intro":"平均为深黄色带光泽的颜色"},{"hex":"#e9e7ef","name":"银白","intro":"带银光的白色"},{"hex":"#bacac6","name":"老银","intro":"金属氧化后的色彩"},{"hex":"#a78e44","name":"乌金","intro":""},{"hex":"#549688","name":"铜绿","intro":""}]}]'
    );
  },
  function(n, e, t) {
    const i = t(15),
      o = {};
    for (const n of Object.keys(i)) o[i[n]] = n;
    const r = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    n.exports = r;
    for (const n of Object.keys(r)) {
      if (!("channels" in r[n]))
        throw new Error("missing channels property: " + n);
      if (!("labels" in r[n]))
        throw new Error("missing channel labels property: " + n);
      if (r[n].labels.length !== r[n].channels)
        throw new Error("channel and label counts mismatch: " + n);
      const { channels: e, labels: t } = r[n];
      delete r[n].channels,
        delete r[n].labels,
        Object.defineProperty(r[n], "channels", { value: e }),
        Object.defineProperty(r[n], "labels", { value: t });
    }
    (r.rgb.hsl = function(n) {
      const e = n[0] / 255,
        t = n[1] / 255,
        i = n[2] / 255,
        o = Math.min(e, t, i),
        r = Math.max(e, t, i),
        h = r - o;
      let a, u;
      r === o
        ? (a = 0)
        : e === r
        ? (a = (t - i) / h)
        : t === r
        ? (a = 2 + (i - e) / h)
        : i === r && (a = 4 + (e - t) / h),
        (a = Math.min(60 * a, 360)) < 0 && (a += 360);
      const c = (o + r) / 2;
      return [
        a,
        100 * (u = r === o ? 0 : c <= 0.5 ? h / (r + o) : h / (2 - r - o)),
        100 * c
      ];
    }),
      (r.rgb.hsv = function(n) {
        let e, t, i, o, r;
        const h = n[0] / 255,
          a = n[1] / 255,
          u = n[2] / 255,
          c = Math.max(h, a, u),
          g = c - Math.min(h, a, u),
          s = function(n) {
            return (c - n) / 6 / g + 0.5;
          };
        return (
          0 === g
            ? ((o = 0), (r = 0))
            : ((r = g / c),
              (e = s(h)),
              (t = s(a)),
              (i = s(u)),
              h === c
                ? (o = i - t)
                : a === c
                ? (o = 1 / 3 + e - i)
                : u === c && (o = 2 / 3 + t - e),
              o < 0 ? (o += 1) : o > 1 && (o -= 1)),
          [360 * o, 100 * r, 100 * c]
        );
      }),
      (r.rgb.hwb = function(n) {
        const e = n[0],
          t = n[1];
        let i = n[2];
        return [
          r.rgb.hsl(n)[0],
          100 * ((1 / 255) * Math.min(e, Math.min(t, i))),
          100 * (i = 1 - (1 / 255) * Math.max(e, Math.max(t, i)))
        ];
      }),
      (r.rgb.cmyk = function(n) {
        const e = n[0] / 255,
          t = n[1] / 255,
          i = n[2] / 255,
          o = Math.min(1 - e, 1 - t, 1 - i);
        return [
          100 * ((1 - e - o) / (1 - o) || 0),
          100 * ((1 - t - o) / (1 - o) || 0),
          100 * ((1 - i - o) / (1 - o) || 0),
          100 * o
        ];
      }),
      (r.rgb.keyword = function(n) {
        const e = o[n];
        if (e) return e;
        let t,
          r = 1 / 0;
        for (const e of Object.keys(i)) {
          const o = i[e],
            u =
              ((a = o),
              ((h = n)[0] - a[0]) ** 2 +
                (h[1] - a[1]) ** 2 +
                (h[2] - a[2]) ** 2);
          u < r && ((r = u), (t = e));
        }
        var h, a;
        return t;
      }),
      (r.keyword.rgb = function(n) {
        return i[n];
      }),
      (r.rgb.xyz = function(n) {
        let e = n[0] / 255,
          t = n[1] / 255,
          i = n[2] / 255;
        return [
          100 *
            (0.4124 *
              (e = e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92) +
              0.3576 *
                (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92) +
              0.1805 *
                (i = i > 0.04045 ? ((i + 0.055) / 1.055) ** 2.4 : i / 12.92)),
          100 * (0.2126 * e + 0.7152 * t + 0.0722 * i),
          100 * (0.0193 * e + 0.1192 * t + 0.9505 * i)
        ];
      }),
      (r.rgb.lab = function(n) {
        const e = r.rgb.xyz(n);
        let t = e[0],
          i = e[1],
          o = e[2];
        return [
          116 *
            (i = (i /= 100) > 0.008856 ? i ** (1 / 3) : 7.787 * i + 16 / 116) -
            16,
          500 *
            ((t =
              (t /= 95.047) > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116) -
              i),
          200 *
            (i -
              (o =
                (o /= 108.883) > 0.008856
                  ? o ** (1 / 3)
                  : 7.787 * o + 16 / 116))
        ];
      }),
      (r.hsl.rgb = function(n) {
        const e = n[0] / 360,
          t = n[1] / 100,
          i = n[2] / 100;
        let o, r, h;
        if (0 === t) return [(h = 255 * i), h, h];
        const a = 2 * i - (o = i < 0.5 ? i * (1 + t) : i + t - i * t),
          u = [0, 0, 0];
        for (let n = 0; n < 3; n++)
          (r = e + (1 / 3) * -(n - 1)) < 0 && r++,
            r > 1 && r--,
            (h =
              6 * r < 1
                ? a + 6 * (o - a) * r
                : 2 * r < 1
                ? o
                : 3 * r < 2
                ? a + (o - a) * (2 / 3 - r) * 6
                : a),
            (u[n] = 255 * h);
        return u;
      }),
      (r.hsl.hsv = function(n) {
        const e = n[0];
        let t = n[1] / 100,
          i = n[2] / 100,
          o = t;
        const r = Math.max(i, 0.01);
        return (
          (t *= (i *= 2) <= 1 ? i : 2 - i),
          (o *= r <= 1 ? r : 2 - r),
          [
            e,
            100 * (0 === i ? (2 * o) / (r + o) : (2 * t) / (i + t)),
            100 * ((i + t) / 2)
          ]
        );
      }),
      (r.hsv.rgb = function(n) {
        const e = n[0] / 60,
          t = n[1] / 100;
        let i = n[2] / 100;
        const o = Math.floor(e) % 6,
          r = e - Math.floor(e),
          h = 255 * i * (1 - t),
          a = 255 * i * (1 - t * r),
          u = 255 * i * (1 - t * (1 - r));
        switch (((i *= 255), o)) {
          case 0:
            return [i, u, h];
          case 1:
            return [a, i, h];
          case 2:
            return [h, i, u];
          case 3:
            return [h, a, i];
          case 4:
            return [u, h, i];
          case 5:
            return [i, h, a];
        }
      }),
      (r.hsv.hsl = function(n) {
        const e = n[0],
          t = n[1] / 100,
          i = n[2] / 100,
          o = Math.max(i, 0.01);
        let r, h;
        h = (2 - t) * i;
        const a = (2 - t) * o;
        return (
          (r = t * o),
          [e, 100 * (r = (r /= a <= 1 ? a : 2 - a) || 0), 100 * (h /= 2)]
        );
      }),
      (r.hwb.rgb = function(n) {
        const e = n[0] / 360;
        let t = n[1] / 100,
          i = n[2] / 100;
        const o = t + i;
        let r;
        o > 1 && ((t /= o), (i /= o));
        const h = Math.floor(6 * e),
          a = 1 - i;
        (r = 6 * e - h), 0 != (1 & h) && (r = 1 - r);
        const u = t + r * (a - t);
        let c, g, s;
        switch (h) {
          default:
          case 6:
          case 0:
            (c = a), (g = u), (s = t);
            break;
          case 1:
            (c = u), (g = a), (s = t);
            break;
          case 2:
            (c = t), (g = a), (s = u);
            break;
          case 3:
            (c = t), (g = u), (s = a);
            break;
          case 4:
            (c = u), (g = t), (s = a);
            break;
          case 5:
            (c = a), (g = t), (s = u);
        }
        return [255 * c, 255 * g, 255 * s];
      }),
      (r.cmyk.rgb = function(n) {
        const e = n[0] / 100,
          t = n[1] / 100,
          i = n[2] / 100,
          o = n[3] / 100;
        return [
          255 * (1 - Math.min(1, e * (1 - o) + o)),
          255 * (1 - Math.min(1, t * (1 - o) + o)),
          255 * (1 - Math.min(1, i * (1 - o) + o))
        ];
      }),
      (r.xyz.rgb = function(n) {
        const e = n[0] / 100,
          t = n[1] / 100,
          i = n[2] / 100;
        let o, r, h;
        return (
          (o =
            (o = 3.2406 * e + -1.5372 * t + -0.4986 * i) > 0.0031308
              ? 1.055 * o ** (1 / 2.4) - 0.055
              : 12.92 * o),
          (r =
            (r = -0.9689 * e + 1.8758 * t + 0.0415 * i) > 0.0031308
              ? 1.055 * r ** (1 / 2.4) - 0.055
              : 12.92 * r),
          (h =
            (h = 0.0557 * e + -0.204 * t + 1.057 * i) > 0.0031308
              ? 1.055 * h ** (1 / 2.4) - 0.055
              : 12.92 * h),
          [
            255 * (o = Math.min(Math.max(0, o), 1)),
            255 * (r = Math.min(Math.max(0, r), 1)),
            255 * (h = Math.min(Math.max(0, h), 1))
          ]
        );
      }),
      (r.xyz.lab = function(n) {
        let e = n[0],
          t = n[1],
          i = n[2];
        return [
          116 *
            (t = (t /= 100) > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116) -
            16,
          500 *
            ((e =
              (e /= 95.047) > 0.008856 ? e ** (1 / 3) : 7.787 * e + 16 / 116) -
              t),
          200 *
            (t -
              (i =
                (i /= 108.883) > 0.008856
                  ? i ** (1 / 3)
                  : 7.787 * i + 16 / 116))
        ];
      }),
      (r.lab.xyz = function(n) {
        let e, t, i;
        const o = (t = (n[0] + 16) / 116) ** 3,
          r = (e = n[1] / 500 + t) ** 3,
          h = (i = t - n[2] / 200) ** 3;
        return (
          (t = o > 0.008856 ? o : (t - 16 / 116) / 7.787),
          (e = r > 0.008856 ? r : (e - 16 / 116) / 7.787),
          (i = h > 0.008856 ? h : (i - 16 / 116) / 7.787),
          [(e *= 95.047), (t *= 100), (i *= 108.883)]
        );
      }),
      (r.lab.lch = function(n) {
        const e = n[0],
          t = n[1],
          i = n[2];
        let o;
        return (
          (o = (360 * Math.atan2(i, t)) / 2 / Math.PI) < 0 && (o += 360),
          [e, Math.sqrt(t * t + i * i), o]
        );
      }),
      (r.lch.lab = function(n) {
        const e = n[0],
          t = n[1],
          i = (n[2] / 360) * 2 * Math.PI;
        return [e, t * Math.cos(i), t * Math.sin(i)];
      }),
      (r.rgb.ansi16 = function(n, e = null) {
        const [t, i, o] = n;
        let h = null === e ? r.rgb.hsv(n)[2] : e;
        if (0 === (h = Math.round(h / 50))) return 30;
        let a =
          30 +
          ((Math.round(o / 255) << 2) |
            (Math.round(i / 255) << 1) |
            Math.round(t / 255));
        return 2 === h && (a += 60), a;
      }),
      (r.hsv.ansi16 = function(n) {
        return r.rgb.ansi16(r.hsv.rgb(n), n[2]);
      }),
      (r.rgb.ansi256 = function(n) {
        const e = n[0],
          t = n[1],
          i = n[2];
        return e === t && t === i
          ? e < 8
            ? 16
            : e > 248
            ? 231
            : Math.round(((e - 8) / 247) * 24) + 232
          : 16 +
              36 * Math.round((e / 255) * 5) +
              6 * Math.round((t / 255) * 5) +
              Math.round((i / 255) * 5);
      }),
      (r.ansi16.rgb = function(n) {
        let e = n % 10;
        if (0 === e || 7 === e)
          return n > 50 && (e += 3.5), [(e = (e / 10.5) * 255), e, e];
        const t = 0.5 * (1 + ~~(n > 50));
        return [
          (1 & e) * t * 255,
          ((e >> 1) & 1) * t * 255,
          ((e >> 2) & 1) * t * 255
        ];
      }),
      (r.ansi256.rgb = function(n) {
        if (n >= 232) {
          const e = 10 * (n - 232) + 8;
          return [e, e, e];
        }
        let e;
        return (
          (n -= 16),
          [
            (Math.floor(n / 36) / 5) * 255,
            (Math.floor((e = n % 36) / 6) / 5) * 255,
            ((e % 6) / 5) * 255
          ]
        );
      }),
      (r.rgb.hex = function(n) {
        const e = (
          ((255 & Math.round(n[0])) << 16) +
          ((255 & Math.round(n[1])) << 8) +
          (255 & Math.round(n[2]))
        )
          .toString(16)
          .toUpperCase();
        return "000000".substring(e.length) + e;
      }),
      (r.hex.rgb = function(n) {
        const e = n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!e) return [0, 0, 0];
        let t = e[0];
        3 === e[0].length &&
          (t = t
            .split("")
            .map(n => n + n)
            .join(""));
        const i = parseInt(t, 16);
        return [(i >> 16) & 255, (i >> 8) & 255, 255 & i];
      }),
      (r.rgb.hcg = function(n) {
        const e = n[0] / 255,
          t = n[1] / 255,
          i = n[2] / 255,
          o = Math.max(Math.max(e, t), i),
          r = Math.min(Math.min(e, t), i),
          h = o - r;
        let a, u;
        return (
          (u =
            h <= 0
              ? 0
              : o === e
              ? ((t - i) / h) % 6
              : o === t
              ? 2 + (i - e) / h
              : 4 + (e - t) / h),
          (u /= 6),
          [360 * (u %= 1), 100 * h, 100 * (a = h < 1 ? r / (1 - h) : 0)]
        );
      }),
      (r.hsl.hcg = function(n) {
        const e = n[1] / 100,
          t = n[2] / 100,
          i = t < 0.5 ? 2 * e * t : 2 * e * (1 - t);
        let o = 0;
        return i < 1 && (o = (t - 0.5 * i) / (1 - i)), [n[0], 100 * i, 100 * o];
      }),
      (r.hsv.hcg = function(n) {
        const e = n[1] / 100,
          t = n[2] / 100,
          i = e * t;
        let o = 0;
        return i < 1 && (o = (t - i) / (1 - i)), [n[0], 100 * i, 100 * o];
      }),
      (r.hcg.rgb = function(n) {
        const e = n[0] / 360,
          t = n[1] / 100,
          i = n[2] / 100;
        if (0 === t) return [255 * i, 255 * i, 255 * i];
        const o = [0, 0, 0],
          r = (e % 1) * 6,
          h = r % 1,
          a = 1 - h;
        let u = 0;
        switch (Math.floor(r)) {
          case 0:
            (o[0] = 1), (o[1] = h), (o[2] = 0);
            break;
          case 1:
            (o[0] = a), (o[1] = 1), (o[2] = 0);
            break;
          case 2:
            (o[0] = 0), (o[1] = 1), (o[2] = h);
            break;
          case 3:
            (o[0] = 0), (o[1] = a), (o[2] = 1);
            break;
          case 4:
            (o[0] = h), (o[1] = 0), (o[2] = 1);
            break;
          default:
            (o[0] = 1), (o[1] = 0), (o[2] = a);
        }
        return (
          (u = (1 - t) * i),
          [255 * (t * o[0] + u), 255 * (t * o[1] + u), 255 * (t * o[2] + u)]
        );
      }),
      (r.hcg.hsv = function(n) {
        const e = n[1] / 100,
          t = e + (n[2] / 100) * (1 - e);
        let i = 0;
        return t > 0 && (i = e / t), [n[0], 100 * i, 100 * t];
      }),
      (r.hcg.hsl = function(n) {
        const e = n[1] / 100,
          t = (n[2] / 100) * (1 - e) + 0.5 * e;
        let i = 0;
        return (
          t > 0 && t < 0.5
            ? (i = e / (2 * t))
            : t >= 0.5 && t < 1 && (i = e / (2 * (1 - t))),
          [n[0], 100 * i, 100 * t]
        );
      }),
      (r.hcg.hwb = function(n) {
        const e = n[1] / 100,
          t = e + (n[2] / 100) * (1 - e);
        return [n[0], 100 * (t - e), 100 * (1 - t)];
      }),
      (r.hwb.hcg = function(n) {
        const e = n[1] / 100,
          t = 1 - n[2] / 100,
          i = t - e;
        let o = 0;
        return i < 1 && (o = (t - i) / (1 - i)), [n[0], 100 * i, 100 * o];
      }),
      (r.apple.rgb = function(n) {
        return [
          (n[0] / 65535) * 255,
          (n[1] / 65535) * 255,
          (n[2] / 65535) * 255
        ];
      }),
      (r.rgb.apple = function(n) {
        return [
          (n[0] / 255) * 65535,
          (n[1] / 255) * 65535,
          (n[2] / 255) * 65535
        ];
      }),
      (r.gray.rgb = function(n) {
        return [(n[0] / 100) * 255, (n[0] / 100) * 255, (n[0] / 100) * 255];
      }),
      (r.gray.hsl = function(n) {
        return [0, 0, n[0]];
      }),
      (r.gray.hsv = r.gray.hsl),
      (r.gray.hwb = function(n) {
        return [0, 100, n[0]];
      }),
      (r.gray.cmyk = function(n) {
        return [0, 0, 0, n[0]];
      }),
      (r.gray.lab = function(n) {
        return [n[0], 0, 0];
      }),
      (r.gray.hex = function(n) {
        const e = 255 & Math.round((n[0] / 100) * 255),
          t = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
        return "000000".substring(t.length) + t;
      }),
      (r.rgb.gray = function(n) {
        return [((n[0] + n[1] + n[2]) / 3 / 255) * 100];
      });
  },
  function(n, e, t) {
    n.exports = t.p + "00746b7e611ff49d789bc56df95eba4b.png";
  },
  function(n, e, t) {
    n.exports = t(2)(13);
  },
  function(n, e, t) {
    "use strict";
    const i = (function(n) {
        let e,
          t = {};
        for (let i in n)
          for (let o, r = 0, h = (e = n[i]).length; r < h; r++)
            (o = e.charCodeAt(r)),
              t.hasOwnProperty(o) ? (t[o] += "," + i) : (t[o] = i);
        return t;
      })(t(11)),
      o = t(12),
      r = new o(i);
    (n.exports = r.convert.bind(r)),
      (n.exports.compare = r.compare.bind(r)),
      (n.exports.STYLE_NORMAL = o.STYLE_NORMAL),
      (n.exports.STYLE_TONE = o.STYLE_TONE),
      (n.exports.STYLE_TONE2 = o.STYLE_TONE2),
      (n.exports.STYLE_TO3NE = o.STYLE_TO3NE),
      (n.exports.STYLE_INITIALS = o.STYLE_INITIALS),
      (n.exports.STYLE_FIRST_LETTER = o.STYLE_FIRST_LETTER);
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = e.Reset = e.reset = void 0);
    var i = t(1);
    function o() {
      var n = h(["", ""]);
      return (
        (o = function() {
          return n;
        }),
        n
      );
    }
    function r() {
      var n = h([
        "\n/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"
      ]);
      return (
        (r = function() {
          return n;
        }),
        n
      );
    }
    function h(n, e) {
      return (
        e || (e = n.slice(0)),
        Object.freeze(
          Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
        )
      );
    }
    var a = (0, i.css)(r());
    e.reset = a;
    var u = (0, i.createGlobalStyle)(o(), a);
    e.Reset = u;
    var c = a;
    e.default = c;
  },
  function(n, e) {
    n.exports = {
      a: "",
      ā: "吖锕錒",
      á: "嗄",
      ǎ: "",
      à: "",
      āi: "哎哀埃娭溾嗳銰锿噯諰鎄",
      ái: "啀娾捱皑凒隑嵦溰嘊敱敳皚磑癌",
      ǎi: "毐昹娾欸絠嗳矮蔼躷噯濭藹譪霭靄",
      ài:
        "艾伌欬爱砹硋堨焥隘嗌嗳塧嫒愛碍叆暧瑷僾噯壒嬡懓薆鴱懝曖璦賹餲皧瞹馤礙譺鑀鱫靉",
      ān: "安侒峖桉氨偣庵菴谙啽媕萻葊痷腤裺鹌蓭誝鞍鞌盦諳馣鮟盫鵪韽鶕",
      án: "玵啽雸儑",
      ǎn: "垵俺唵埯铵揞晻罯銨",
      àn: "厈屵屽犴岸咹按洝荌案胺豻堓隌晻暗貋儑錌闇黯",
      āng: "肮骯",
      áng: "卬岇昂昻",
      ǎng: "",
      àng: "枊盎醠",
      āo: "泑柪眑梎軪熝爊",
      áo: "敖厫隞嗷嗸嶅廒慠滶獓蔜遨骜摮獒璈磝墽翱聱螯翶謷謸翺鳌鏕鏖鰲鷔鼇",
      ǎo: "艹抝芺袄眑郩镺媪媼襖",
      ào: "岙扷抝坳垇岰柪傲奡軪奧嫯嶅慠澚隩墺嶴懊擙澳鏊驁",
      ba: "罷",
      bā: "丷八仈巴叭朳玐夿岜扷芭峇柭疤哱哵捌笆粑羓蚆釟豝鲃魞",
      bá: "叐犮抜妭拔茇炦癹胈菝詙跋軷颰魃鼥",
      bǎ: "钯鈀靶",
      bà: "坝弝爸皅垻跁鲃魞鲅鲌罷鮁鮊覇矲霸壩灞欛",
      bāi: "挀掰擘",
      bái: "白",
      bǎi: "百佰栢瓸捭竡粨絔摆擺襬",
      bài: "呗庍拝败拜唄敗猈稗粺薭贁韛",
      bān: "扳攽朌肦班般颁斑搬斒頒搫瘢鳻螌褩癍辬",
      bǎn: "阪坂岅昄板版瓪钣粄舨鈑蝂魬闆",
      bàn: "办半伴扮坢姅怑绊柈秚湴絆跘鉡靽辦瓣",
      bāng: "邦垹帮捠梆浜邫幇幚縍幫鞤",
      bǎng: "绑綁牓膀髈",
      bàng: "玤挷蚄傍棒棓硥谤塝搒稖蒡蛖蜯镑縍艕謗鎊",
      bāo: "勹包佨孢苞枹胞剝笣煲龅裦蕔褒襃闁齙",
      báo: "窇雹",
      bǎo: "宝怉饱保鸨宲珤堢媬葆寚飹飽褓駂鳵緥鴇賲藵寳寶靌",
      bào: "勽犳报怉抱豹趵铇菢蚫袌報鉋鲍骲髱虣鮑儤曓嚗曝爆犦忁鑤",
      bei: "呗唄",
      bēi: "陂卑杯柸盃庳桮悲揹棓椑碑鹎箄諀鞞藣鵯",
      běi: "鉳",
      bèi:
        "贝孛狈貝邶备昁杮牬苝郥钡俻倍悖狽偝偹梖珼鄁備僃惫棑棓焙琲軰辈愂碚禙蓓蛽犕褙誖鞁骳輩鋇憊糒鞴鐾",
      bēn: "泍贲栟喯犇賁锛漰錛蟦",
      běn: "夲本苯奙畚翉楍",
      bèn: "坋坌泍炃倴捹桳渀笨逩撪",
      bēng: "伻祊奟崩絣閍嗙嵭痭嘣綳繃",
      béng: "甮甭",
      běng: "埄埲菶琣琫綳繃鞛",
      bèng: "泵迸堋逬揼跰塴綳甏镚繃蹦鏰",
      bī: "皀屄偪毴逼楅榌豍螕鵖鲾鎞鰏",
      bí: "荸鼻嬶",
      bǐ: "匕比夶朼佊吡妣沘疕纰彼毞肶柀秕俾娝笔粃紕舭啚崥筆鄙聛貏",
      bì:
        "币必毕闬闭佖坒庇芘诐邲咇妼怭怶畁畀肶苾哔柲毖珌畐疪祕胇荜贲陛毙狴畢笓粊袐铋婢敝旇梐紴翍萆萞閇閈閉堛弼弻愊愎湢皕禆筚詖貱賁赑嗶彃滗滭煏痺痹睤睥腷蓖蓽蜌裨跸鉍閟飶幣弊熚獙碧稫箅箆綼蔽鄪馝幤潷獘罼襅駜髲壁嬖廦篦篳縪薜觱避鮅斃濞蹕鞞髀奰璧鄨鎞鏎饆繴襣襞鞸韠魓躃躄驆鶝朇贔鐴鷝鷩鼊",
      biān: "辺边炞砭笾猵编萹煸牑甂箯糄編臱蝙鞕獱邉鍽鳊邊鞭鯾鯿籓籩",
      biǎn: "贬疺窆匾貶惼揙碥稨褊糄鴘藊覵鶣",
      biàn: "卞弁忭抃汳汴苄釆变峅玣変昪覍徧缏遍閞辡緶艑諚辧辨辩辫辮辯變",
      biāo:
        "灬杓标飑骉髟彪淲猋脿颩僄墂幖摽滮蔈颮骠標熛膔膘麃瘭磦镖飚飙儦檦篻颷瀌藨謤爂臕贆鏢穮镳飈飆飊飇鑣驫",
      biáo: "嫑",
      biǎo: "表婊裱諘褾錶檦",
      biào: "俵摽鳔",
      biē: "柭憋蟞癟鳖鱉鼈虌龞",
      bié: "別柲莂蛂徶襒蟞蹩",
      biě: "癟",
      biè: "別彆",
      bīn: "汃邠玢砏宾彬梹傧斌椕滨缤槟瑸豩賓賔镔儐濒頻濱濵虨豳檳璸瀕霦繽鑌顮",
      bǐn: "",
      bìn: "摈殡膑髩儐擯鬂殯臏髌鬓髕鬢",
      bīng: "冫仌仒氷冰兵幷栟掤梹蛃絣槟鋲檳",
      bǐng: "丙邴陃怲抦秉苪昞昺柄炳饼眪偋屛寎棅琕禀稟鈵鉼鞆餅餠鞞鞸",
      bìng: "並併幷枋垪庰倂栤病窉竝偋傡寎摒誁鮩靐",
      bo: "啵蔔噃",
      bō: "癶拨波癷玻剝哱盋砵趵钵饽紴缽菠袰溊碆鉢僠嶓撥播餑磻礡蹳皪驋鱍",
      bó:
        "仢彴肑驳帛狛瓝苩侼柭胉郣亳挬浡瓟秡袯钹铂桲淿脖舶萡袹博殕渤葧鹁愽搏猼鉑鈸馎鲌僰榑煿牔箔膊艊誖馛駁踣鋍镈壆馞駮鮊穛襏謈嚗懪簙鎛餺鵓糪髆髉欂襮礴鑮",
      bǒ: "癷蚾跛",
      bò: "孹擗擘檗檘譒蘗",
      bū: "峬庯逋钸晡鈽誧餔錻鯆鵏",
      bú: "鳪轐醭",
      bǔ: "卟补哺捕捬補鸔",
      bù: "布佈吥步咘怖抪歩歨柨钚勏埔埗悑捗荹部埠婄瓿鈈廍蔀箁踄郶篰餢",
      cā: "嚓擦攃",
      cǎ: "礤礸",
      cà: "遪囃",
      cāi: "偲猜",
      cái: "才扐材财財裁纔",
      cǎi: "毝倸啋埰婇寀彩採棌睬跴綵踩",
      cài: "埰寀菜蔡縩",
      cān: "參叄飡骖叅喰湌傪嬠餐爘驂囋",
      cán: "残蚕惭殘慚摲蝅慙蠺蠶",
      cǎn: "惨朁慘憯穇篸黪黲",
      càn: "灿孱傪粲嘇摻儏澯薒燦璨謲鏒",
      cāng: "仓仺伧沧苍玱鸧倉舱傖凔嵢滄獊蒼瑲濸篬艙螥鶬",
      cáng: "匨臧欌鑶",
      càng: "賶",
      cāo: "撡操糙",
      cáo: "曺曹傮嘈嶆慒漕蓸槽褿艚螬鏪",
      cǎo: "屮艸草愺慅懆騲",
      cào: "肏鄵襙鼜",
      cè: "夨冊册厕恻拺测荝敇畟側厠笧粣萗廁惻測策萴筞筴蓛箣憡簎",
      cēn: "參叄叅嵾穇篸",
      cén: "岑汵埁涔笒",
      cēng: "噌",
      céng: "层曽層嶒橧竲驓",
      cèng: "蹭",
      cī: "呰呲玼疵趀偨跐縒骴髊蠀齹",
      cí: "词珁兹垐柌祠茨瓷粢詞辝慈甆辞磁雌鹚糍辤飺餈嬨濨薋鴜礠辭鷀鶿",
      cǐ: "此佌泚玼皉啙跐鮆",
      cì: "朿次佽刾庛茦栨莿絘蛓赐螆賜",
      cōng:
        "匆囪囱苁忩枞茐怱悤棇焧葱楤漗聡蓯蔥骢暰樅樬潨熜瑽璁聦聪瞛篵聰蟌鍯繱鏓鏦騘驄",
      cóng: "丛徔従婃孮徖從悰淙琮碂慒漎潀潈誴賨賩樷錝藂叢灇欉爜",
      cǒng: "",
      còng: "愡憁謥",
      cōu: "",
      cóu: "",
      cǒu: "",
      còu: "凑湊傶楱腠辏輳",
      cū: "怚粗觕麁麄橻麆麤",
      cú: "徂殂",
      cǔ: "皻",
      cù: "促猝脨媨瘄蔟誎趗噈憱踧醋瘯踿簇縬趨鼀蹙蹵蹴顣",
      cuān: "汆撺鋑镩蹿攛躥鑹",
      cuán: "濽櫕巑攢灒欑穳",
      cuàn: "窜殩熶窽篡窾簒竄爨",
      cuī: "隹崔脺催凗嵟缞墔慛摧榱漼槯磪縗鏙",
      cuǐ: "漼熣璀趡皠",
      cuì: "伜忰疩倅粋紣翆脃脆啐啛崒悴淬萃椊毳焠琗瘁粹綷翠膵膬濢竁襊顇臎",
      cūn: "邨村皴踆澊竴膥",
      cún: "存侟拵壿澊",
      cǔn: "刌忖",
      cùn: "寸吋籿",
      cuō: "搓瑳遳磋蹉醝鎈",
      cuó: "虘嵯嵳痤睉矬蒫瘥蔖鹾酂鹺酇",
      cuǒ: "脞",
      cuò: "剉剒厝夎挫莡莝庴措逪锉蓌错縒諎銼錯",
      chā: "扠扱芆臿挿偛嗏插揷馇銟锸艖疀嚓鍤鎈餷",
      chá: "秅苴垞査茬茶捈梌嵖搽猹靫楂槎詧察摖檫",
      chǎ: "紁蹅镲鑔",
      chà: "仛奼汊岔侘衩诧剎姹紁詫",
      chāi: "芆肞钗釵",
      chái: "犲侪柴豺祡喍儕",
      chǎi: "茝",
      chài: "虿袃訍瘥蠆囆",
      chān: "辿觇梴搀覘裧摻緂鋓幨襜攙",
      chán:
        "苂婵谗單孱棎湹禅馋煘缠僝嶃嶄獑蝉誗鋋儃嬋廛潹潺緾澶磛禪毚螹蟐鄽瀍繟蟬儳劖繵蟾酁嚵壥巉瀺欃纏纒躔镵艬讒鑱饞",
      chǎn:
        "产刬旵丳斺浐剗谄啴產産铲阐蒇剷嵼摌滻嘽幝蕆諂閳骣燀簅冁繟醦譂鏟闡囅灛讇",
      chàn: "忏刬剗硟摲幝幨燀懴儳懺羼韂顫",
      chāng: "伥昌倀娼淐猖菖阊椙琩裮锠錩閶鲳闛鯧鼚",
      cháng: "仩仧兏肠苌镸長尝偿常徜瓺萇場甞腸嘗塲嫦瑺膓償嚐鲿鱨",
      chǎng: "昶惝場敞僘厰塲廠氅鋹",
      chàng: "怅玚畅鬯唱悵焻瑒暢畼誯韔",
      chāo: "抄弨怊欩钞訬焯超鈔勦摷綽劋樔窼",
      cháo: "牊晁巣巢鄛鼌漅樔潮窲罺鼂轈謿",
      chǎo: "炒眧粆焣煼槱麨巐",
      chào: "仦仯耖觘",
      chē: "伡車俥砗唓莗硨蛼",
      ché: "",
      chě: "扯偖撦奲",
      chè: "屮彻呫坼迠烢烲焎聅掣揊硩頙徹摰撤澈勶瞮爡",
      chen: "伧傖",
      chēn: "肜抻郴捵棽琛嗔綝瘨瞋諃賝謓",
      chén:
        "尘臣忱沉辰陈迧茞宸栕莀莐陳敐晨桭梣訦谌軙愖跈鈂煁蔯塵敶樄瘎霃螴諶薼麎曟鷐",
      chěn: "趻硶碜墋夦磣踸鍖贂醦",
      chèn: "衬爯疢龀偁趂趁榇稱齓齔儭嚫穪谶櫬襯讖",
      chēng:
        "朾阷泟柽爯凈棦浾琤偁淨碀蛏晿牚搶赪僜憆摚稱靗撐撑緽橖橕瞠赬頳檉竀罉鎗矃穪蟶鏿鐣饓鐺",
      chéng:
        "氶丞成朾呈承枨诚郕乗城埩娍宬峸洆荿埕挰晟浧珹掁珵窚脭铖堘惩揨棖椉程筬絾裎塍塖溗誠畻酲鋮憕撜澂橙檙鯎瀓懲騬",
      chěng: "侱徎悜逞骋庱睈裎騁",
      chèng: "秤牚稱竀穪",
      chi: "麶",
      chī: "吃妛哧彨胵蚩鸱瓻眵笞粚喫訵嗤媸摛痴絺樆噄殦瞝誺噭螭鴟鵄癡魑齝攡彲黐",
      chí:
        "弛池驰迟坻沶狋茌迡持柢竾荎俿歭耛菭蚳赿筂貾遅跢遟馳箈箎墀徲漦踟遲篪謘鍉邌鶗鶙",
      chǐ: "叺伬扡呎肔侈卶齿垑奓拸胣恥耻蚇袳豉欼歯袲裭誃鉹褫齒",
      chì:
        "彳叱斥佁杘灻赤饬侙抶勅恜柅炽勑捇眙翄翅敕烾啻湁飭傺痸腟誃鉓雴憏瘈翤遫銐慗慸瘛翨熾懘趩鶒鷘",
      chōng: "充忡沖茺浺珫翀舂嘃摏徸憃憧衝罿艟蹖",
      chóng: "虫崈崇痋隀漴褈緟蝩蟲爞",
      chǒng: "宠埫寵",
      chòng: "铳揰銃",
      chou: "鮘",
      chōu: "抽牰婤掫紬搊跾瘳篘醔犨犫",
      chóu:
        "怞俦诪帱栦惆梼畤紬绸菗椆畴絒愁皗稠筹裯詶酧酬綢踌儔雔嚋嬦幬懤盩薵檮燽雠疇籌躊醻讐讎雦",
      chǒu: "丒丑吜杽杻偢瞅醜矁魗",
      chòu: "臰遚殠",
      chu: "橻",
      chū: "出岀初榋摢摴樗貙櫖齣",
      chú: "刍除芻耝厨滁蒢豠锄媰耡蒭蜍趎鉏雏犓廚篨鋤橱幮櫉藸蟵躇雛櫥蹰鶵躕",
      chǔ: "処杵础椘處储楮禇楚褚濋儲檚璴礎齭齼",
      chù: "亍処竌怵泏绌豖欪炪竐俶敊埱珿絀菆傗鄐慉搐滀触閦儊嘼諔憷斶歜臅黜觸矗",
      chuā: "欻",
      chuǎ: "",
      chuà: "",
      chuāi: "搋",
      chuái: "膗",
      chuǎi: "",
      chuài: "啜欼膪踹",
      chuān: "巛川氚穿猭瑏",
      chuán: "舡舩剶船圌遄傳椯椽歂暷篅膞輲",
      chuǎn: "舛荈喘堾歂僢踳",
      chuàn: "汌串玔钏釧猭賗鶨",
      chuāng: "刅疮窓創窗牎摐牕瘡窻",
      chuáng: "床牀喠噇朣橦",
      chuǎng: "闯傸磢闖",
      chuàng: "怆刱剏剙創愴",
      chuī: "吹炊龡",
      chuí: "垂倕埀桘陲捶菙圌搥棰腄槌硾锤箠錘鎚顀",
      chuǐ: "",
      chuì: "惙",
      chūn: "芚旾杶春萅媋暙椿槆瑃箺蝽橁輴櫄鰆鶞",
      chún: "纯肫陙唇浱純莼脣湻犉滣蒓鹑漘蓴膞醇醕錞鯙鶉",
      chǔn: "朐偆萶惷睶賰蠢",
      chuō: "逴趠踔戳繛",
      chuò: "辶吷辵拺哾娖娕啜婥婼惙涰淖辍酫綽踀箹輟鋜龊擉磭餟繛歠鏃嚽齪鑡孎",
      da: "繨",
      dā: "咑哒耷笚嗒搭褡噠墶撘鎝鎉",
      dá:
        "达迏迖迚呾妲怛沓垯炟羍荅荙畗剳匒惮畣笪逹溚詚達跶靼憚薘鞑燵蟽鐽韃龖龘",
      dǎ: "",
      dà: "亣汏眔",
      dāi: "呆呔獃懛",
      dǎi: "歹逮傣",
      dài:
        "代诒轪侢垈岱帒甙绐迨带怠柋殆玳贷帯貣軑埭帶紿蚮袋軚逮釱棣詒貸軩瑇跢廗箉叇曃緿蝳駘鮘鴏戴艜黛簤蹛瀻霴襶黱靆",
      dān: "丹妉単眈砃耼耽郸聃躭酖單媅愖殚瘅匰箪褝鄲頕儋勯擔殫甔癉襌簞聸",
      dǎn: "伔刐抌玬瓭胆衴疸紞赕亶馾撢撣賧燀黕膽皽黵",
      dàn:
        "旦但帎呾沊泹狚诞唌柦疍訑啗啖惔惮淡萏蛋啿弾氮腅蜑觛亶瘅窞蓞誕僤噉馾髧儋嘾彈憚醈憺擔澹禫餤駳鴠癉膻癚嚪繵贉霮饏黮",
      dāng: "珰裆筜當儅噹澢璫襠簹艡蟷鐺闣",
      dǎng: "党谠當擋譡黨攩灙欓讜",
      dàng:
        "氹凼圵宕砀垱荡档偒菪婸崵愓瓽逿嵣當雼潒碭儅瞊蕩趤壋擋檔璗盪礑簜蘯闣",
      dāo: "刀刂忉朷氘舠釖鱽裯魛螩",
      dáo: "捯",
      dǎo: "导岛陦島捣祷禂搗隝嘄嶋嶌槝導隯壔嶹擣蹈檮禱",
      dào: "辺到帱悼梼焘盗菿椡盜絩道稲箌翢噵稻艔衜檤衟幬燾翿軇瓙纛",
      de: "旳",
      dē: "嘚",
      dé: "恴淂蚮悳惪棏锝徳德鍀",
      dēi: "嘚",
      děi: "",
      dèn: "扥扽",
      dēng: "灯登豋僜噔嬁燈璒竳簦艠蹬",
      děng: "等戥",
      dèng: "邓凳鄧隥墱嶝憕瞪磴镫櫈瀓覴鐙",
      dī: "氐仾低奃岻彽秪袛啲埞羝隄堤渧趆滴碮樀磾鞮鏑",
      dí:
        "扚廸旳狄肑籴苖迪唙敌浟涤荻啇梑笛觌靮滌蓧馰髢嘀嫡翟蔋蔐頔敵篴镝嚁藡豴蹢鏑糴覿鸐",
      dǐ: "氐厎坘诋邸阺呧坻弤抵拞枑柢牴砥掋菧觝詆軧楴聜骶鯳",
      dì:
        "坔旳杕玓怟枤苐俤哋埅帝埊娣逓递偙梊焍珶眱祶第菂谛釱媂揥棣渧睇缔蒂遆僀楴禘腣遞鉪墆墑墬嵽摕疐碲蔕蝃遰慸甋締蝭嶳諦諟踶螮",
      diǎ: "嗲",
      diān: "佔敁掂傎厧嵮滇槇槙瘨窴颠蹎巅顚顛癫巓攧巔癲齻",
      dián: "",
      diǎn: "典奌点婰敟椣跕碘蒧蕇踮點嚸",
      diàn: "电阽坫店垫扂玷痁钿婝惦淀奠琔殿痶蜔鈿電墊壂橂橝澱靛磹癜簟驔",
      diāo: "刁叼汈刟虭凋奝弴彫蛁椆琱貂碉鳭瞗錭雕鮉鲷簓鼦鯛鵰",
      diǎo: "扚屌鳥",
      diào: "弔伄吊钓盄窎訋掉釣铞铫絩鈟竨蓧誂銚銱雿魡調瘹窵鋽藋鑃",
      diē: "爹跌褺",
      dié:
        "佚怢泆苵迭咥垤峌恎挕昳柣绖胅瓞眣耊啑戜眰谍喋堞崼幉惵揲畳絰耋臷詄趃跕軼镻叠楪殜牃牒跮嵽碟蜨褋槢艓蝶疂諜蹀鴩螲鲽鞢曡疉鰈疊氎",
      diě: "",
      diè: "哋",
      dīng: "仃叮奵帄玎甼町疔盯耵虰酊釘靪",
      dǐng: "奵艼顶酊頂鼎嵿鼑濎薡鐤",
      dìng: "订忊饤矴定訂釘飣啶掟萣铤椗腚碇锭碠聢蝊鋌錠磸顁",
      diū: "丟丢铥颩銩",
      dōng: "东冬咚岽東苳昸氡倲鸫埬娻崬崠涷笗菄徚氭蝀鮗鼕鯟鶇鶫",
      dǒng: "揰董墥嬞懂箽蕫諌",
      dòng: "动冻侗垌姛峒恫挏栋洞狪胨迵凍戙烔胴動娻崠硐棟湩絧腖働勭燑駧霘",
      dōu: "吺枓侸唗兜兠蔸橷瞗篼",
      dóu: "唞",
      dǒu: "乧阧抖钭陡蚪鈄",
      dòu: "吋豆郖浢狵荳逗饾鬥梪毭渎脰酘痘閗窦鬦鋀餖斣瀆闘竇鬪鬬鬭",
      dū: "厾剢阇嘟督醏闍",
      dú: "独涜渎椟牍犊裻読獨錖凟匵嬻瀆櫝殰牘犢瓄皾騳黩讀豄贕韣髑鑟韇韥黷讟",
      dǔ: "竺笃堵暏琽赌睹覩賭篤",
      dù: "芏妒杜妬姤荰秺晵渡靯镀螙斁殬鍍蠧蠹",
      duān: "耑偳剬媏端褍鍴",
      duǎn: "短",
      duàn: "段断塅缎葮椴煅瑖腶碫锻緞毈簖鍛斷躖籪",
      duī: "垖堆塠痽磓镦鴭鐓鐜",
      duǐ: "啍頧",
      duì: "队对兊兌対杸祋怼陮敓敚隊碓綐對憞憝濧濻薱懟瀢瀩譈譵轛",
      dūn: "吨惇蜳墪墫墩撴獤噸撉橔犜礅蹾蹲驐",
      dǔn: "盹趸躉",
      dùn: "伅坉庉忳沌炖盾砘逇钝顿遁鈍楯頓碷遯憞潡燉踲",
      duo: "",
      duō: "夛多咄哆畓剟掇敠敪毲裰跢嚉",
      duó: "仛夺沰铎剫敓敚喥痥鈬奪凙踱鐸",
      duǒ: "朵朶哚垜挆埵崜缍袳椯硾趓躱躲綞亸軃鬌嚲奲",
      duò: "杕杝刴剁枤沲陊陏饳垜尮挆挅柁柂柮桗舵隋媠惰隓跢跥跺飿馱墮憜駄墯隳鵽",
      ē: "妸妿娿婀屙痾",
      é: "讹吪囮迗俄峉哦娥峩峨涐莪珴訛皒睋鈋锇鹅磀誐鋨頟额魤額鵞鵝譌",
      ě: "枙娿砨惡頋噁騀鵈",
      è:
        "厄戹歺岋阨呃扼苊阸呝枙砐轭咢咹垩姶洝砈匎敋蚅饿偔卾堊娾悪硆谔軛鄂阏堮堨崿惡愕湂萼豟軶遌遏鈪廅搕搤搹琧痷腭僫蝁锷鹗蕚遻頞颚餓噩擜覨諤閼餩鍔鳄歞顎礘櫮鰐鶚鰪讍齃鑩齶鱷",
      ēi: "诶欸誒",
      éi: "诶欸誒",
      ěi: "诶欸誒",
      èi: "诶欸誒",
      ēn: "奀恩蒽煾",
      ěn: "峎",
      èn: "摁",
      ēng: "鞥",
      ér: "儿而児杒侕兒陑峏洏耏荋栭胹唲梕袻鸸粫聏輀鲕隭髵鮞鴯轜",
      ěr: "尒尓尔耳迩洱饵栮毦珥铒衈爾鉺餌駬薾邇趰",
      èr: "二弍弐佴刵咡贰貮貳誀樲髶",
      fā: "冹沷発發彂醗醱",
      fá: "乏伐姂坺垡浌疺罚茷阀栰笩傠筏瞂罰閥墢罸橃藅",
      fǎ: "佱法峜砝鍅灋",
      fà: "珐琺髪蕟髮",
      fān: "帆忛犿拚畨勫噃嬏幡憣旙旛繙翻藩轓颿籓飜鱕",
      fán:
        "凢凣凡匥杋柉矾籵钒舤烦舧笲釩棥煩緐墦樊蕃燔璠膰薠襎羳蹯瀿礬蘩鐇鐢蠜鷭",
      fǎn: "反払仮返橎",
      fàn: "氾犯奿汎泛饭范贩畈訉軓婏桳梵盕笵販軬飰飯滼嬎範輽瀪",
      fāng: "匚方邡汸芳枋牥祊钫淓蚄堏趽鈁錺鴋",
      fáng: "防妨房肪埅鲂魴",
      fǎng: "仿访彷纺昉昘瓬眆倣旊眪紡舫訪髣鶭",
      fàng: "放趽",
      fēi: "飞妃非飛啡婓婔渄绯扉斐暃猆靟裶緋蜚霏鲱餥馡騑騛鯡飝",
      féi: "肥疿淝腓痱蜰",
      fěi: "朏胐匪诽奜悱斐棐榧翡蕜誹篚",
      fèi:
        "吠犻芾废杮柹沸狒肺胏昲胇费俷剕厞疿砩陫屝笰萉廃費痱镄廢曊橃橨癈鼣濷蟦櫠鐨靅",
      fēn: "吩帉纷芬昐氛玢砏竕衯紛翂梤棻訜躮酚鈖雰馚朆餴饙",
      fén:
        "坆坟妢岎汾朌枌炃羒蚠蚡棼焚蒶隫墳幩濆獖蕡魵鳻橨燌燓豮鼢羵鼖豶轒鐼馩黂",
      fěn: "粉黺",
      fèn: "坋弅奋忿秎偾愤粪僨憤獖瞓奮橨膹糞鲼瀵鱝",
      fēng:
        "丰仹凨凬夆妦沣沨凮枫炐封疯盽砜風埄峰峯莑偑桻烽琒堼崶渢猦葑锋楓犎蜂熢瘋碸僼篈鄷鋒檒豐鎽鏠酆寷灃蘴霻蠭靊飌麷",
      féng: "夆浲逢堸溄馮摓漨綘艂縫",
      fěng: "讽風覂唪諷",
      fèng: "凤奉俸桻湗焨煈赗鳯鳳鴌縫賵",
      fó: "仏仸坲梻",
      fōu: "",
      fóu: "紑",
      fǒu: "缶妚炰缹缻殕雬鴀",
      fū:
        "伕邞呋妋抙姇枎玞肤怤柎砆胕荂衭娐尃捊荴旉琈紨趺酜麸稃跗鈇筟綒鄜孵粰蓲敷膚鳺麩糐麬麱懯璷",
      fú:
        "乀巿弗払伏凫甶刜孚扶芣芙芾咈姇宓岪帗怫枎泭绂绋苻茀俘垘枹柫柭氟洑炥玸畉畐祓罘胕茯郛韨鳬哹垺栿浮畗砩莩蚨袚匐桴涪烰琈符笰紱紼翇艴菔虙袱幅棴絥罦葍福綍艀蜉辐鉘鉜颫鳧榑稪箁箙粰褔豧韍颰幞澓蝠髴鴔諨踾輻鮄癁襆鮲黻襥鵩纀鶝",
      fǔ:
        "阝呒抚甫乶府弣拊斧俌俛柎郙俯蚥釡釜捬脯辅椨焤盙腑滏蜅腐輔嘸撫頫鬴簠黼",
      fù:
        "讣付妇负附咐坿彿竎阜驸复峊柎洑祔訃負赴蚥袝偩冨婏婦捬紨蚹傅媍富復秿萯蛗覄詂赋椱缚腹鲋榑禣複褔赙緮蕧蝜蝮賦駙嬔縛輹鮒賻鍑鍢鳆覆馥鰒",
      gā: "旮伽夾嘎嘠",
      gá: "钆軋尜釓嘎嘠噶錷",
      gǎ: "尕玍朒嘎嘠",
      gà: "尬魀",
      gāi: "侅该郂陔垓姟峐荄晐赅畡祴絯隑該豥賅賌",
      gǎi: "忋改絠",
      gài: "丐乢匄匃杚钙摡溉葢鈣戤概槩蓋漑槪瓂",
      gān: "甘忓迀攼玕肝咁坩泔矸苷柑玵竿疳酐粓凲尲尴筸漧鳱尶尷魐",
      gǎn: "仠芉皯秆衦赶敢桿稈感澉趕橄擀澸篢簳鳡鱤",
      gàn: "佄旰汵盰绀倝凎淦紺詌骭幹榦檊簳贑赣贛灨",
      gāng: "冈冮刚纲肛岡牨疘矼缸剛罡堈崗掆釭棡犅堽摃碙綱罁鋼鎠",
      gǎng: "岗犺崗",
      gàng: "焵焹筻槓鋼戅戆戇",
      gāo: "皋羔羙高皐髙臯睪槔睾槹獋橰篙糕餻櫜韟鷎鼛鷱",
      gǎo: "夰杲菒稁搞缟槀槁稾稿镐縞藁檺藳鎬",
      gào: "吿告勂诰郜峼祮祰锆筶禞誥鋯",
      gē: "戈仡圪扢犵纥戓肐牫咯紇饹哥袼鸽割彁滒戨歌鴚擱謌鴿鎶",
      gé:
        "呄佮佫匌挌阁革敋格鬲愅猲臵蛒裓隔颌嗝塥滆觡搿槅膈閣閤獦镉鞈韐骼臈諽輵擱鮥鮯櫊鎑鎘韚轕鞷騔",
      gě: "個哿笴舸嘅嗰蓋鲄",
      gè: "亇吤茖虼個硌铬箇鉻",
      gěi: "給",
      gēn: "根跟",
      gén: "哏",
      gěn: "",
      gèn: "亙亘艮茛揯搄",
      gēng: "刯庚畊浭耕菮椩焿絙絚赓鹒緪縆羮賡羹鶊",
      gěng: "郠哽埂峺挭绠耿莄梗綆鲠骾鯁",
      gèng: "堩緪縆",
      gōng: "工弓公厷功攻杛侊糿糼肱宫紅宮恭躬龚匑塨幊愩觥躳慐匔碽篢髸觵龏龔",
      gǒng: "廾巩汞拱唝拲栱珙嗊輁澒銾鞏",
      gòng: "贡羾唝貢嗊愩慐熕",
      gōu: "佝沟芶钩痀袧缑鈎溝鉤緱褠篝簼鞲韝",
      gǒu: "芶岣狗苟枸玽耉耇笱耈蚼豿",
      gòu: "呴坸构诟购垢姤冓啂夠够傋訽媾彀搆詬遘雊構煹觏撀糓覯購",
      gū:
        "杚呱咕姑孤沽泒苽巭巬柧轱唃唂罛鸪笟菇菰蛄蓇觚軱軲辜酤稒鈲磆箍箛嫴篐橭鮕鴣",
      gú: "",
      gǔ:
        "夃古扢抇汩诂谷股牯罟羖逧钴傦啒淈脵蛊嗗尳愲詁馉毂賈鈷鼔鼓嘏榖皷鹘穀縎糓薣濲皼臌轂餶櫎瀔盬瞽鶻蠱",
      gù: "固怘故凅顾堌崓崮梏牿棝祻雇榾痼锢僱錮鲴鯝顧",
      guā: "瓜刮呱胍栝桰铦鸹歄煱颪趏劀緺銛諣踻銽颳鴰騧",
      guá: "",
      guǎ: "冎叧呙呱咼剐剮寡",
      guà: "卦坬诖挂啩掛罣袿絓罫褂詿",
      guāi: "乖",
      guái: "叏",
      guǎi: "拐枴柺罫箉",
      guài: "夬怪恠",
      guān: "关纶官矜覌倌矝莞涫棺蒄窤閞綸関瘝癏観闗鳏關鰥觀鱞",
      guǎn: "莞馆琯痯筦斡管輨璭舘錧館鳤",
      guàn:
        "卝毌丱贯泴覌悺惯掼淉貫悹祼慣摜潅遦樌盥罆雚観躀鏆灌爟瓘矔礶鹳罐觀鑵欟鱹鸛",
      guāng: "光灮炚炛炗咣垙姯挄洸茪桄烡珖胱硄僙輄潢銧黆",
      guǎng: "広犷廣獷臩",
      guàng: "俇桄逛臦撗",
      guī:
        "归圭妫规邽皈茥闺帰珪胿亀硅窐袿規媯廆椝瑰郌嫢摫閨鲑嬀嶲槣槻槼鳺璝瞡龜鮭巂歸雟鬶騩櫰櫷瓌蘬鬹",
      guǐ: "宄氿朹轨庋佹匦诡陒垝姽恑攱癸軌鬼庪祪軓匭晷湀蛫觤詭厬簋蟡",
      guì:
        "攰刿刽昋炅攱贵桂桧匮眭硊趹椢猤筀貴溎蓕跪匱瞆劊劌嶡撌槶螝樻檜瞶禬簂櫃癐襘鐀鳜鞼鑎鱖鱥",
      gǔn: "丨衮惃硍绲袞辊滚蓘裷滾緄蔉磙緷輥鲧鮌鯀",
      gùn: "睔謴",
      guo: "",
      guō: "呙咼咶埚郭啯堝崞渦猓楇聒鈛锅墎瘑嘓彉濄蝈鍋彍蟈懖矌",
      guó: "囗囯囶囻国圀敋喐國帼掴腘摑幗慖漍聝蔮膕虢簂馘",
      guǒ: "果惈淉菓馃椁褁槨粿綶蜾裹輠餜櫎",
      guò: "過腂鐹",
      hā: "虾紦铪鉿蝦",
      há: "",
      hǎ: "奤",
      hà: "",
      hāi: "咍嗨",
      hái: "郂孩骸還嚡",
      hǎi: "海胲烸塰酼醢",
      hài: "亥妎拸骇害氦猲絯嗐餀駭駴饚",
      han: "兯爳",
      hān: "犴佄顸哻蚶酣頇嫨谽憨馠魽歛鼾",
      hán: "邗含汵邯函肣凾虷唅圅娢浛笒崡晗梒涵焓琀寒嵅韩椷甝筨馯蜬澏鋡韓",
      hǎn: "丆罕浫喊豃闞",
      hàn:
        "仠厈汉屽忓扞闬攼旰旱肣唅垾悍捍涆猂莟晘焊菡釬閈皔睅傼蛿颔馯撖漢蔊蜭鳱暵熯輚銲鋎憾撼翰螒頷顄駻譀雗瀚鶾",
      hāng: "",
      háng: "邟妔苀迒斻杭垳绗桁笐航蚢颃裄貥筕絎頏魧",
      hàng: "忼沆笐",
      hāo: "茠蒿嚆薅薧",
      háo: "乚毜呺竓皋蚝毫椃嗥獆號貉噑獔豪嘷獋諕儫嚎壕濠籇蠔譹",
      hǎo: "郝",
      hào:
        "昊侴昦秏哠恏悎浩耗晧淏傐皓鄗滈滜聕號暠暤暭澔皜皞镐曍皡薃皥藃鎬颢灏顥鰝灝",
      hē: "诃抲欱訶嗬蠚",
      hé:
        "禾纥呙劾咊咼姀河郃峆曷柇狢盇籺紇阂饸敆盉盍荷釛啝涸渮盒菏萂龁喛惒粭訸颌楁毼澕蓋詥貈貉鉌阖鲄朅熆閡閤餄鹖麧噈頜篕翮螛魺礉闔鞨齕覈鶡皬鑉龢",
      hě: "",
      hè: "咊抲垎贺哬袔隺寉焃惒猲賀嗃煂碋熇褐赫鹤翯嚇壑癋謞燺爀鶮鶴靍靎鸖靏",
      hēi: "黒黑嗨潶",
      hén: "拫痕鞎",
      hěn: "佷哏很狠詪噷",
      hèn: "恨噷",
      hēng: "亨哼悙涥脝",
      héng: "姮恆恒桁烆珩胻鸻撗橫衡鴴鵆蘅鑅",
      hèng: "悙啈橫",
      hng: "哼",
      hōng: "叿吽呍灴轰訇烘軣揈渹焢硡谾薨輷嚝鍧巆轟",
      hóng:
        "厷仜弘叿妅屸吰宏汯玒瓨纮闳宖泓玜苰垬娂沗洪竑紅羾荭虹浤浲紘翃耾硔紭谹鸿渱溄竤粠葓葒鈜閎綋翝谼潂鉷鞃魟篊鋐彋霐黉霟鴻黌",
      hǒng: "唝晎嗊愩慐",
      hòng: "讧訌閧撔澒銾蕻闂鬨闀",
      hōu: "齁",
      hóu: "矦鄇喉帿猴葔瘊睺銗篌糇翭骺翵鍭餱鯸",
      hǒu: "吼吽犼呴",
      hòu: "后郈厚垕後洉矦茩逅候堠豞鲎鲘鮜鱟",
      hū:
        "乎乯匢虍芴呼垀忽昒曶泘苸恗烀芔轷匫唿惚淴虖軤雽嘑寣滹雐幠戯歑戱膴戲謼",
      hú:
        "囫抇弧狐瓳胡壶隺壷斛焀喖壺媩搰湖猢絗葫鹄楜煳瑚瓡嘝蔛鹕鹘槲箶縎蝴衚魱縠螜醐頶觳鍸餬礐鵠瀫鬍鰗鶘鶦鶻鶮",
      hǔ: "乕汻虎浒俿淲萀琥虝滸錿鯱",
      hù:
        "互弖戶戸户冱芐帍护沍沪岵怙戽昈曶枑姱怘祜笏粐婟扈瓠楛嗃嗀綔鄠雽嫭嫮摢滬蔰槴熩鳸濩簄豰鍙嚛鹱觷護鳠頀鱯鸌",
      huā: "吪芲花砉埖婲華椛硴蒊嘩糀誮錵蘤",
      huá: "呚姡骅華釪釫铧滑猾嘩搳撶劃磆蕐螖鋘譁鏵驊鷨",
      huà: "夻杹枠画话崋桦華婳畫嬅畵觟話劃摦樺嫿槬澅諙諣黊繣舙譮",
      huái: "怀佪徊淮槐褢踝懐褱懷瀤櫰耲蘹",
      huài: "咶壊壞蘾",
      huān: "欢犿狟貆歓鴅懁鵍酄嚾孉懽獾歡讙貛驩",
      huán:
        "环郇峘洹狟荁垸桓萈萑堚寏絙雈獂綄羦蒝貆锾瞏圜嬛寰澴缳還阛環豲鍰雚镮鹮糫繯鐶闤鬟瓛",
      huǎn: "睆缓緩",
      huàn:
        "幻奂肒奐宦唤换浣涣烉患梙焕逭喚喛嵈愌換渙痪煥瑍綄豢漶瘓槵鲩擐澣藧鯇攌嚾轘鯶鰀",
      huāng: "巟肓荒衁宺朚塃慌",
      huáng:
        "皇偟凰隍黄喤堭媓崲徨惶揘湟葟遑黃楻煌瑝墴潢獚锽熿璜篁艎蝗癀磺穔諻簧蟥鍠餭鳇趪韹鐄騜鰉鱑鷬",
      huǎng: "汻怳恍炾宺晄奛谎幌詤熀熿縨謊兤櫎爌",
      huàng: "愰滉榥曂皝鎤皩",
      hui: "",
      huī:
        "灰灳诙咴恢拻挥洃虺袆晖烣珲豗婎媈揮翚辉隓暉椲楎煇琿睢禈詼墮幑睳褘噅噕撝翬輝麾徽隳瀈蘳孈鰴",
      huí: "囘回囬佪廻廽恛洄茴迴烠蚘逥痐缋蛕蛔蜖藱鮰繢",
      huǐ: "虺悔烠毀毁螝毇檓燬譭",
      huì:
        "卉屷屶汇讳泋哕浍绘芔荟诲恚恵桧烩贿彗晦秽喙廆惠湏絵缋翙阓匯彚彙會滙詯賄颒僡嘒瘣蔧誨銊圚寭慧憓暳槥潓潰蕙噦嬒徻橞殨澮濊獩璤薈薉諱頮檅檜燴璯篲藱餯嚖懳瞺穢繢蟪櫘繪翽譓儶鏸闠鐬靧譿顪",
      hūn: "昏昬荤婚惛涽焄阍棔殙湣葷睧睯蔒閽轋",
      hún: "忶浑珲馄渾湷琿魂餛鼲",
      hǔn: "",
      hùn: "诨俒眃倱圂婫掍焝溷尡慁睴觨諢",
      huō: "吙秴耠劐攉騞",
      huó: "佸姡活秮秳趏",
      huǒ: "灬火伙邩钬鈥漷煷夥",
      huò:
        "沎或货咟俰捇眓获閄剨喐掝祸貨惑旤湱禍漷窢蒦锪嚄奯擭濊濩獲篧鍃霍檴謋雘矆礊穫镬嚯彟瀖耯艧藿蠖嚿曤臛癨矐鑊韄靃彠",
      jī:
        "丌讥击刉叽饥乩刏圾机玑肌芨矶鸡枅苙咭剞唧姬屐积笄飢基庴喞嵆嵇幾攲敧朞犄筓缉赍嗘畸稘跻鳮僟毄箕綨緁銈嘰撃槣樭畿緝觭諅賫踑躸齑墼撽機激璣禨積錤隮懠擊磯簊羁賷櫅耭雞譏韲鶏譤鐖饑癪躋鞿魕鶺鷄羇虀鑇覉鑙齏羈鸄覊",
      jí:
        "乁亽亼及尐伋吉岌彶忣汲级即极皀亟佶诘郆卽叝姞急皍笈級堲揤疾觙偮卙唶楖淁焏谻戢棘極殛湒集塉嫉愱楫蒺蝍趌辑槉耤膌銡嶯潗濈瘠箿蕀蕺諔趞踖鞊鹡檝螏輯磼簎藉襋蹐鍓艥籍轚鏶霵齎躤雧",
      jǐ: "己丮妀屰犱泲虮挤脊掎済鱾幾戟給嵴麂魢撠憿橶擠濟穖蟣",
      jì:
        "彐彑旡计记伎坖妓忌技汥芰际剂季哜垍既洎紀茍茤荠計迹剤畟紒继觊記偈寄寂帺徛悸旣梞済绩塈惎臮葪蔇兾勣痵継蓟裚跡際鬾魝摖暨漃漈禝稩穊誋跽霁魥鲚暩瞉稷諅鲫冀劑曁禨穄薊襀髻嚌懠檕濟穖績繋罽薺覬鮆檵櫅櫭璾蹟鯽鵋齌廭懻癠穧繫蘎骥鯚瀱繼蘮鱀蘻霽鰶鰿鷑鱭驥",
      jia: "",
      jiā:
        "加乫伽夾宊抸佳拁泇徍枷毠浃珈哿埉挾浹痂梜笳耞袈傢猳葭跏椵犌腵鉫嘉擖镓糘豭貑鴐鎵麚",
      jiá: "圿夾忦扴郏拮荚郟唊恝莢戛脥袷铗戞猰蛱裌颉颊蛺鋏頬頰鴶鵊",
      jiǎ: "甲岬叚玾胛斚钾婽徦斝椵賈鉀榎槚瘕檟",
      jià: "驾架嫁幏賈榢價稼駕",
      jiān:
        "戋奸尖幵坚歼冿戔玪肩艰姧姦兼堅帴惤猏笺菅菺豜傔揃湔牋犍缄葌閒間雃靬搛椷椾煎瑊睷碊缣蒹豣漸監箋蔪樫熞稴緘蕑蕳鋑鲣鳽鹣熸篯縑鋻艱鞬餰馢麉瀐濺鞯鳒鵑殱礛籈鵳攕瀸鰔櫼殲譼鰜鶼礷籛韀鰹囏虃鑯韉",
      jiǎn:
        "囝拣枧俭柬茧倹挸捡笕减剪帴揵梘检湕趼堿揀揃検減睑硷裥詃锏弿暕瑐筧简絸谫彅戩戬碱儉翦鋄撿橏篯檢藆襇襉謇蹇瞼礆簡繭謭鎫鬋鰎鹸瀽蠒鐗鐧鹻籛譾襺鹼",
      jiàn:
        "件見侟建饯剑洊牮荐贱俴健剣栫涧珔舰剱徤揵袸谏釰釼寋旔朁楗毽腱臶跈践閒間賎鉴键僣僭榗槛漸監劎劍墹澗箭糋諓賤趝踐踺劒劔薦諫鋻鍵餞瞷瞯磵礀螹鍳鞬擶檻濺繝瀳覵覸譛鏩聻艦轞鐱鑒鑑鑬鑳",
      jiāng: "江姜茳畕豇將葁畺摪翞僵漿螀壃缰薑橿殭螿鳉疅礓繮韁鱂",
      jiǎng: "讲奖桨傋塂蒋奨奬蔣槳獎耩膙講顜",
      jiàng: "匞匠夅弜洚绛將弶強絳畺酱勥滰嵹摾漿彊犟糡醤糨醬櫤謽",
      jiāo:
        "艽交郊姣娇峧浇茮茭骄胶敎喬椒焦蛟跤僬嘐虠鲛嬌嶕嶣憍憢澆膠蕉燋膲礁穚鮫鵁鹪簥蟭轇鐎驕鷦鷮",
      jiáo: "矯",
      jiǎo:
        "臫佼恔挢狡绞饺捁晈烄笅皎脚釥铰搅湫筊絞勦敫湬煍腳賋僥摎摷暞踋鉸餃儌劋徺撟撹樔徼憿敽敿燞曒璬矯皦蟜繳譑孂纐攪灚鱎龣",
      jiào:
        "叫呌峤挍訆悎珓窌笅轿较敎斍覐窖筊覚滘較嘂嘄嘦斠漖酵噍嶠潐噭嬓徼獥癄藠趭轎醮灂覺譥皭釂",
      jie: "價",
      jiē:
        "阶疖哜皆袓接掲痎秸菨階喈喼嗟堦媘嫅椄湝結脻街裓楬煯瑎稭鞂擑蝔嚌癤謯鶛",
      jié:
        "卩卪孑尐讦扢刧刦劫岊昅杢刼劼杰疌衱诘拮洁狤迼倢桀桔桝洯紒莭訐偈偼啑婕崨捷掶袷袺傑媫嵑結絜蛣颉嵥搩楶滐睫節蜐詰趌跲鉣截榤碣竭蓵鲒嶱潔羯誱踕镼鞊頡幯擳嶻擮礍鍻鮚巀蠞蠘蠽",
      jiě: "姐毑媎觧飷檞",
      jiè:
        "丯介吤妎岕庎戒屆届斺玠畍界疥砎衸诫借悈紒蚧唶徣堺楐琾蛶觧骱犗耤誡褯魪嶰藉鎅鶡",
      jīn: "巾今仐斤钅竻釒金津矜砛荕衿觔埐珒矝紟惍琎菳堻琻筋釿璡鹶黅襟",
      jǐn: "侭卺巹紧堇婜菫僅厪谨锦嫤廑慬漌緊蓳馑槿瑾儘錦謹饉",
      jìn:
        "伒劤妗近进枃勁浕荩晉晋浸烬笒紟赆唫祲進煡臸僅寖搢溍缙靳墐嫤慬榗瑨盡馸僸凚歏殣觐噤嬐濅縉賮嚍壗嬧濜藎燼璶覲贐齽",
      jīng:
        "坕坙巠京泾经茎亰秔荊荆涇粇婛惊旍旌猄経菁晶稉腈葏睛粳經兢箐精綡聙鋞橸鲸鯨鶁鶄麖鼱驚麠",
      jǐng: "井丼阱刭坓宑汫汬肼剄穽殌儆頚幜憬擏澋璄憼暻璟璥頸蟼警",
      jìng:
        "劤妌弪径迳俓勁婙浄胫倞凈弳徑痉竞莖逕婧桱梷殑淨竟竫脛敬痙竧靓傹靖境獍誩踁静靚憼曔镜靜瀞鵛鏡競竸",
      jiōng: "冂冋坰扃埛扄浻絅銄駉駫蘏蘔",
      jiǒng: "冏囧泂炅迥侰炯逈浻烱絅煚窘颎綗臦僒煛熲澃褧燛顈臩",
      jiòng: "",
      jiū: "丩勼纠朻牞究糺鸠糾赳阄萛啾揂揪剹揫鳩摎稵樛鬏鬮",
      jiú: "",
      jiǔ: "九乆久乣氿奺汣杦灸玖糺舏韭紤酒镹韮",
      jiù: "匛旧臼咎疚柩柾倃捄桕匓厩救就廄廐舅僦廏慦殧舊鹫匶鯦麔欍齨鷲",
      jū:
        "凥伡抅車匊居岨泃狙苴驹俥毩疽眗砠罝陱娵婮崌掬梮涺揟椐毱琚腒趄跔跙锔裾雎艍蜛諊踘躹鋦駒據鋸鮈鴡檋鞠鞫鶋",
      jú:
        "局泦侷狊挶桔啹婅淗焗菊郹椈湨犑輂僪粷蓻跼閰趜鋦橘駶繘鵙蹫鵴巈蘜鶪鼰鼳驧",
      jǔ: "咀岨弆举枸矩莒挙椇筥榉榘蒟龃聥舉踽擧櫸齟欅襷",
      jù:
        "巨乬巪讵姖岠怇拒洰苣邭具怐怚拠昛歫炬珇秬钜俱倨倶剧烥粔耟蚷袓埧埾惧詎距焣犋跙鉅飓蒩虡豦锯寠愳窭聚駏劇勮屦踞鮔壉懅據澽窶螶遽鋸屨颶瞿貗簴躆醵忂懼鐻",
      juān: "姢勌娟捐涓朘梋焆瓹脧圏裐鹃勬鋑鋗镌鞙鎸鐫蠲",
      juǎn: "呟巻帣埍捲菤锩臇錈闂",
      juàn:
        "奆劵奍巻帣弮倦勌悁桊狷绢隽婘惓淃瓹眷鄄圏棬椦睊絭罥腃雋睠絹飬慻蔨嶲鋗餋獧縳巂羂讂",
      juē: "噘撅撧屩屫",
      jué:
        "亅孒孓决刔氒诀吷妜弡抉決芵叕泬玨玦挗珏疦砄绝虳埆捔欮蚗袦崫崛掘斍桷覐觖訣赽趹傕厥焳矞絕絶覚趉鈌劂瑴谲駃噊嶡嶥憰撅熦爴獗瘚蕝蕨觮鴂鴃噱壆憠橜橛燋璚爵臄镢櫭繘蟨蟩爑譎蹷蹶髉匷矍覺鐍鐝鳜灍爝觼穱彏戄攫玃鷢矡貜躩钁",
      juě: "蹶",
      juè: "誳",
      jūn: "军君均汮姰袀軍钧莙蚐桾皲鈞碅筠皸皹覠銁銞鲪頵麇龜鍕鮶麏麕",
      jǔn: "",
      jùn:
        "呁俊郡陖埈峻捃浚隽馂骏晙焌珺棞畯竣葰雋儁箘箟蜠賐寯懏餕燇濬駿鵘鵔鵕攈攟",
      kā: "喀",
      kǎ: "佧咔咯垰胩裃鉲",
      kāi: "开奒揩锎開鐦",
      kǎi: "凯剀垲恺闿豈铠凱剴嘅慨蒈塏嵦愷輆暟锴鍇鎧闓颽",
      kài: "忾炌欯欬烗勓愒愾濭鎎",
      kān: "刊栞勘龛堪嵁戡龕",
      kǎn: "凵冚坎扻侃砍莰偘埳惂欿歁槛輡檻顑竷轗",
      kàn: "衎崁墈阚瞰磡闞竷鬫矙",
      kāng: "忼闶砊粇康閌嫝嵻慷漮槺穅糠躿鏮鱇",
      káng: "",
      kǎng: "",
      kàng: "亢伉匟邟囥抗犺闶炕钪鈧閌",
      kāo: "尻嵪髛",
      kǎo: "丂攷考拷洘栲烤薧",
      kào: "洘铐犒銬鲓靠鮳鯌",
      kē:
        "匼柯牁牱珂科轲疴砢趷钶蚵铪嵙棵痾萪軻颏嗑搕犐稞窠鈳榼薖鉿颗樖瞌磕蝌頦窼醘顆髁礚",
      ké: "殻揢殼翗",
      kě: "岢炣渇嵑敤渴軻閜磆嶱",
      kè: "克刻剋勀勊客峇恪娔尅悈袔课堁氪骒愘硞缂衉嗑愙歁溘锞碦緙艐課濭錁礊騍",
      kēi: "剋尅",
      kēn: "",
      kěn: "肎肯肻垦恳啃龂豤貇龈墾錹懇",
      kèn: "珢掯硍裉褃",
      kēng: "劥阬坈坑妔挳硁殸牼揁硜铿硻摼誙銵鍞鏗",
      kěng: "硻",
      kōng: "倥埪崆悾涳椌硿箜躻錓鵼",
      kǒng: "孔倥恐悾",
      kòng: "矼控羫鞚",
      kōu: "抠芤眍眗剾彄摳瞘",
      kǒu: "口劶竘",
      kòu: "叩扣佝怐敂冦宼寇釦窛筘滱蔲蔻瞉簆鷇",
      kū: "扝刳矻郀朏枯胐哭桍秙窋堀圐跍窟骷鮬",
      kú: "",
      kǔ: "狜苦楛",
      kù: "库俈绔庫捁秙焅袴喾硞絝裤瘔酷廤褲嚳",
      kuā: "咵姱恗晇絓舿誇",
      kuǎ: "侉垮楇銙",
      kuà: "胯趶誇跨骻",
      kuǎi: "蒯擓",
      kuài: "巜凷圦块快侩郐哙浍狯脍欳塊蒉會筷駃鲙儈墤鄶噲廥澮獪璯膾旝糩鱠",
      kuān: "宽寛寬臗髋鑧髖",
      kuǎn: "梡欵款歀窽窾",
      kuàn: "",
      kuāng: "匡迋劻诓邼匩哐恇洭硄筐筺誆軭",
      kuáng: "忹抂狅狂诳軖軠誑鵟",
      kuǎng: "夼儣懭",
      kuàng:
        "卝丱邝圹纩况旷岲況矿昿贶框眖砿眶絋絖貺軦鉱鋛鄺壙黋懬曠爌矌礦穬纊鑛",
      kuī: "亏刲岿悝盔窥聧窺虧顝闚巋",
      kuí: "奎晆逵鄈隗馗喹揆葵骙戣暌楏楑魁睽蝰頯櫆藈鍨鍷騤夔蘷巙虁犪躨",
      kuǐ: "尯煃跬頍磈蹞",
      kuì: "尯胿匮喟媿愧愦蒉馈匱瞆嘳嬇憒潰篑聭聩蕢殨膭謉瞶餽簣聵籄饋",
      kūn: "坤昆堃堒婫崑崐晜猑菎裈焜琨髠裩貇锟髡鹍潉蜫褌髨熴瑻醌錕鲲騉鯤鵾鶤",
      kǔn: "悃捆阃壸梱祵硱稇裍壼稛綑閫閸",
      kùn: "困涃睏",
      kuò: "扩拡挄适秮秳铦筈萿葀蛞阔廓漷銛噋銽頢髺擴濶闊鞟韕霩鞹鬠",
      la: "鞡",
      lā: "垃柆砬菈搚磖邋",
      lá: "旯剌砬揦磖嚹",
      lǎ: "喇藞",
      là: "剌翋揦溂揧楋瘌蜡蝋辢辣蝲臈擸攋爉臘鬎櫴瓎镴鯻蠟鑞",
      lái: "来來俫倈崃徕涞莱郲婡崍庲徠梾淶猍萊逨棶琜筙铼箂錸騋鯠鶆麳",
      lǎi: "襰",
      lài: "疠娕徕唻婡徠赉睐睞赖誺賚濑賴頼癘顂癞鵣攋瀨瀬籁藾櫴癩籟",
      lán:
        "兰岚拦栏啉婪惏嵐葻阑暕蓝谰厱澜褴儖斓篮懢燣燷藍襕镧闌璼幱襤譋攔瀾灆籃繿蘫蘭斕欄襴囒灡籣欗讕躝襽鑭韊",
      lǎn: "览浨揽缆榄漤罱醂壈懒覧擥嬾懶孄覽孏攬灠欖爦顲纜",
      làn: "坔烂滥燗嚂壏濫爁爛瓓爤爦糷钄",
      lāng: "啷",
      láng: "勆郞哴欴狼嫏廊斏桹琅蓈榔瑯硠稂锒筤艆蜋郒樃螂躴鋃鎯駺",
      lǎng: "崀朗朖烺塱蓢誏朤",
      làng: "埌浪莨阆筤蒗誏閬",
      lāo: "捞粩撈",
      láo: "労劳牢窂哰崂浶勞痨铹僗嘮嶗憦憥朥癆磱簩蟧醪鐒顟髝",
      lǎo: "耂老佬咾恅狫荖栳珯硓铑蛯銠鮱轑",
      lào: "涝絡嗠耢酪嫪嘮憦樂澇躼橯耮軂",
      le: "饹",
      lē: "嘞",
      lè: "仂阞叻忇扐氻艻牞玏泐竻砳楽韷餎樂簕鳓鰳鱳",
      lei: "嘞",
      lēi: "",
      léi: "絫雷嫘缧蔂樏畾磥檑縲攂礌镭櫑瓃羸礧纍罍蘲鐳轠儽鑘靁虆鱩欙纝鼺",
      lěi: "厽耒诔垒洡塁絫傫誄瘣樏磊蕌磥蕾儡壘癗礌藟櫑櫐矋礨礧灅蠝蘽讄壨鑸鸓",
      lèi: "泪洡类涙淚祱絫酹銇頛頪錑攂颣類礧纇蘱禷",
      lēng: "稜",
      léng: "唥崚塄楞碐稜薐",
      lěng: "冷",
      lèng: "倰堎愣睖踜",
      li: "",
      lī: "",
      lí:
        "刕杝厘柂剓狸离荲骊悡梨梸犁琍菞喱棃犂鹂剺漓睝筣缡艃蓠嫠孷樆璃盠竰貍犛糎蔾褵鋫鲡黎篱縭罹錅蟍謧醨嚟藜邌釐離鯏斄瓈蟸鏫鯬鵹麗黧囄灕蘺蠫孋廲劙鑗穲籬纚驪鱺鸝",
      lǐ: "礼李里俚峛峢娌峲悝浬逦理裡锂粴裏豊鋰鲤澧禮鯉醴蠡鳢邐鱧欚纚鱱",
      lì:
        "力历厉屴扐立吏扚朸利励叓呖坜杝沥苈例叕岦戾枥沴沵疠苙迣俐俪栃栎疬砅茘荔赲轹郦唎娳悧栛栗浰涖猁珕砬砺砾秝莉莅鬲唳婯悷笠粒粝脷蚸蛎傈凓厤棙痢蛠詈跞雳厯塛慄搮溧睙蒞蒚蜊鉝鳨厲暦歴瑮綟蜧銐蝷镉勵曆歷篥隷鴗巁檪濿癘磿隸鬁儮擽曞櫔爄犡禲蠇鎘嚦壢攊櫟瀝瓅礪藶麗櫪爏瓑皪盭礫糲蠣儷癧礰纅酈鷅麜囇孋攦觻躒轢欐讈轣攭瓥靂靋",
      liǎ: "俩倆",
      lián:
        "奁连帘怜涟莲連梿联裢亷嗹廉慩溓漣蓮匲奩槏槤熑覝劆匳噒嫾憐磏聨聫褳鲢濂濓縺翴聮薕螊櫣燫聯臁謰蹥檶鎌镰瀮簾蠊鬑鐮鰱籢籨",
      liǎn: "莶敛梿琏脸裣慩摙溓槤璉蔹嬚薟斂櫣歛臉鄻襝羷蘞蘝醶",
      liàn: "练炼恋殓僆堜媡湅萰链摙楝煉瑓潋稴練澰錬殮鍊鏈瀲鰊戀纞",
      liāng: "",
      liáng: "良俍莨梁涼椋辌粱粮墚踉樑輬駺糧",
      liǎng: "両两兩俩倆唡啢掚脼裲緉蜽魉魎",
      liàng: "亮倞哴悢谅涼辆喨晾湸靓輌踉諒輛鍄",
      liāo: "蹽",
      liáo:
        "辽疗窌聊尞僚寥嵺憀摎漻膋嘹嫽寮嶚嶛憭敹樛獠缭遼暸橑璙膫療竂鹩屪廫簝繚藔蟟蟧豂賿蹘爎爒飂髎飉鷯",
      liǎo: "钌釕鄝缪蓼憭繆曢爎镽爒",
      liào: "尥尦钌炓料釕廖撂窷镣鐐",
      lie: "",
      liē: "",
      lié: "",
      liě: "忚毟挘",
      liè:
        "列劣劦冽劽姴挒洌茢迾哷埓埒栵浖烈烮捩猎猟脟棙蛚煭聗趔綟巤獦颲燤儠巁鮤鴷擸爄獵爉犣躐鬛鬣鱲",
      līn: "拎",
      lín:
        "厸邻阾林临冧啉崊惏晽琳粦碄箖粼綝鄰隣嶙潾獜遴斴暽燐璘辚霖疄瞵磷臨繗翷麐轔壣瀶鏻鳞驎鱗麟",
      lǐn: "菻亃僯箖凜凛撛廩廪懍懔澟檁檩癝癛",
      lìn: "吝恡悋赁焛亃痳賃蔺獜橉甐膦閵疄藺蹸躏躙躪轥",
      líng:
        "伶刢灵呤囹坽夌姈岺彾泠狑苓昤朎柃玲瓴〇凌皊砱秢竛羐袊铃陵鸰婈崚掕棂淩琌笭紷绫羚翎聆舲菱蛉衑祾詅跉軨稜蓤裬鈴閝零龄綾蔆輘霊駖澪蕶錂霗魿鲮鴒鹷燯霝霛齢酃鯪孁齡櫺醽靈欞爧麢龗",
      lǐng: "岺袊领領嶺",
      lìng: "另炩蘦",
      liū: "熘澑蹓",
      liú:
        "刘畄斿浏流留旈琉畱硫裗媹嵧旒蒥蓅骝摎榴漻瑠飗劉瑬瘤磂镏駠鹠橊璢疁镠癅蟉駵嚠懰瀏藰鎏鎦麍鏐飀鐂騮飅鰡鶹驑",
      liǔ: "柳栁桞珋桺绺锍綹熮罶鋶橮嬼懰羀藰",
      liù: "窌翏塯廇遛澑磂磟鹨鎦霤餾雡飂鬸鷚",
      lo: "咯",
      lóng:
        "龙屸尨咙泷茏昽栊珑胧眬砻竜聋隆湰滝嶐槞漋癃窿篭龍儱蘢鏧霳嚨巃巄瀧曨朧櫳爖瓏襱矓礲礱蠬蠪龓龒籠聾豅躘靇鑨驡鸗",
      lǒng: "陇垅垄拢篢篭龍隴儱徿壟壠攏竉龓籠躘",
      lòng: "哢梇硦儱徿贚",
      lou: "喽嘍瞜",
      lōu: "摟",
      lóu: "剅娄偻婁喽溇蒌僂楼嘍寠廔慺漊蔞遱樓熡耧蝼瞜耬艛螻謱貗軁髅鞻髏鷜",
      lǒu: "嵝塿嶁摟甊篓簍",
      lòu: "陋屚漏瘘镂瘻瘺鏤",
      lū: "噜撸謢嚕擼",
      lú:
        "卢庐芦垆枦泸炉栌胪轳舮鸬玈舻颅鈩鲈馿魲盧嚧壚廬攎瀘獹璷蘆曥櫨爐瓐臚矑籚纑罏艫蠦轤鑪顱髗鱸鸕黸",
      lǔ: "卤虏掳鹵硵鲁虜塷滷蓾樐澛魯擄橹氇磠穞镥瀂櫓氌艣鏀艪鐪鑥",
      lù:
        "圥甪陆侓坴彔录峍勎赂辂陸娽淕淥渌硉菉逯鹿椂琭祿禄僇剹勠盝睩稑賂路輅塶廘摝漉箓粶緑蓼蔍戮樚熝膔趢踛辘醁潞穋蕗錄錴録璐簏螰鴼簶蹗轆騄鹭簬簵鏕鯥鵦鵱麓鏴騼籙觻虂鷺",
      luán: "娈孪峦挛栾鸾脔滦銮鵉圝奱孌孿巒攣曫欒灓羉臡臠圞灤虊鑾癴癵鸞",
      luǎn: "卵覶",
      luàn: "乱釠乿亂薍灓",
      lūn: "掄",
      lún: "仑伦囵沦纶芲侖轮倫陯圇婨崘崙掄淪菕棆腀碖綸耣蜦論踚輪磮錀鯩",
      lǔn: "埨惀碖稐耣",
      lùn: "惀溣碖論",
      luo: "囉囖",
      luō: "捋頱囉囖",
      luó: "寽罗猡脶萝逻椤腡锣箩骡镙螺攎羅覶鏍儸覼騾囉攞玀蘿邏欏驘鸁籮鑼饠囖",
      luǒ: "剆倮砢捰蓏裸躶瘰蠃臝曪攭癳",
      luò: "泺咯峈洛荦骆洜珞捰渃硌硦笿絡蛒跞詻摞漯犖雒駱磱鮥鵅擽濼攊皪躒纙",
      lǘ: "驴闾榈閭氀膢瞜櫚藘驢",
      lǚ: "吕呂侣郘侶挔捛捋旅梠焒祣偻稆铝屡絽缕僂屢慺膂褛鋁履膐褸儢縷穭鷜",
      lǜ: "垏律哷虑嵂氯葎滤綠緑慮箻膟勴繂濾櫖爈卛鑢",
      lüè: "寽掠畧略锊稤圙鋢鋝",
      ma: "嗎嘛麽",
      mā: "亇妈孖庅媽嫲榪螞",
      má: "菻麻嗎痲痳嘛嫲蔴犘蟇",
      mǎ: "马犸杩玛码馬嗎溤獁遤瑪碼螞鎷鰢鷌",
      mà: "杩祃閁骂傌睰嘜榪禡罵螞駡鬕",
      mái: "薶霾",
      mǎi: "买荬買嘪蕒鷶",
      mài: "劢迈佅売麦卖唛脈麥衇勱賣邁霡霢",
      mān: "颟顢",
      mán: "姏悗蛮絻谩慲摱馒樠瞞鞔謾饅鳗鬘鬗鰻矕蠻",
      mǎn: "娨屘満满滿螨襔蟎鏋矕",
      màn: "曼僈鄤墁嫚幔慢摱漫獌缦蔄槾澫熳澷镘縵鏝蘰",
      māng: "牤",
      máng: "邙吂忙汒芒尨杗杧盲盳厖恾笀茫哤娏庬浝狵朚牻硭釯铓痝蛖鋩駹蘉",
      mǎng: "莽莾硥茻壾漭蟒蠎",
      màng: "",
      māo: "貓",
      máo: "毛矛芼枆牦茅茆旄罞渵軞酕堥嵍楙锚緢鉾髦氂犛蝥貓髳錨蟊鶜",
      mǎo: "冇卯夘乮峁戼泖昴铆笷蓩鉚",
      mào: "冃皃芼冐茂柕眊秏贸旄耄袤覒媢帽萺貿鄚愗暓毷瑁瞀貌鄮蝐懋",
      me: "庅麽麼嚜",
      mē: "嚒",
      mè: "濹嚰",
      méi:
        "坆沒枚玫苺栂眉脄莓梅珻脢郿堳媒嵋湄湈猸睂葿楣楳煤瑂禖腜塺槑酶镅鹛鋂霉穈徾鎇攗鶥黴",
      měi: "毎每凂美挴浼羙媄嵄渼媺镁嬍燘躾鎂黣",
      mèi: "妹抺沬旀昧祙袂眛媚寐殙痗跊鬽煝睸韎魅篃蝞嚜櫗",
      mēn: "悶椚",
      mén: "门们扪汶怋玧钔門們閅捫菛璊瞞穈鍆亹斖虋",
      mèn: "悗惛焖悶暪燜鞔懑懣",
      mēng: "掹擝矇",
      méng:
        "尨甿虻庬莔萌溕盟雺甍鄳儚橗瞢蕄蝱鄸鋂髳幪懜懞濛獴曚朦檬氋礞鯍鹲艨矒靀霿饛顭鸏",
      měng: "黾冡勐猛黽锰艋蜢瞢懜懞蟒錳懵蠓鯭矒鼆",
      mèng: "孟梦夢夣懜霥癦",
      mī: "咪瞇",
      mí:
        "冞祢迷袮猕谜蒾詸摵瞇謎醚彌擟瞴縻藌麊麋麿檷禰靡瀰獼蘪麛镾戂攠瓕蘼爢醾醿鸍釄",
      mǐ: "米芈侎沵羋弭洣敉粎脒渳葞蔝銤彌濔孊攠灖",
      mì:
        "冖糸汨沕宓怽枈觅峚祕宻密淧覔覓幂谧塓幎覛嘧榓滵漞熐蔤蜜鼏冪樒幦濗謐櫁簚羃",
      mián: "宀芇杣眠婂绵媔棉綿緜臱蝒嬵檰櫋矈矊矏",
      miǎn: "丏汅免沔黾勉眄娩莬偭冕勔渑喕媔愐湎睌缅葂黽絻腼澠緬靦鮸",
      miàn: "靣面牑糆麫麪麺麵",
      miāo: "喵",
      miáo: "苗媌描瞄鹋嫹緢鶓",
      miǎo: "厸仯劰杪眇秒淼渺缈篎緲藐邈",
      miào: "妙庙玅竗庿缪廟繆",
      miē: "乜吀咩哶孭",
      mié: "",
      miè: "灭烕眜覕搣滅蔑薎鴓幭懱瀎篾櫗簚礣蠛衊鑖鱴",
      mín: "民忟垊姄岷忞怋旻旼玟苠珉盿砇罠崏捪渂琘琝缗暋瑉痻碈鈱緍緡賯錉鴖鍲",
      mǐn:
        "皿冺刡忟闵呡忞抿泯黾勄敃闽悯敏笢笽惽湏湣閔黽愍敯暋僶閩慜憫潣簢鳘蠠鰵",
      míng: "名明鸣洺眀茗冥朙眳铭鄍嫇溟猽蓂詺暝榠銘鳴瞑螟覭",
      mǐng: "佲姳凕嫇慏酩",
      mìng: "命掵",
      miǔ: "",
      miù: "谬缪繆謬",
      mō: "摸嚤",
      mó: "庅尛谟嫫馍摹膜骳麽麼魹橅糢嬤嬷謨謩擵饃蘑髍魔劘戂攠饝",
      mǒ: "懡",
      mò:
        "末圽沒妺帓殁歿歾沫茉陌帞昩枺狢皌眜眿砞秣莈眽絈袹絔蛨貃嗼塻寞漠獏蓦貈貊貉銆靺墨嫼瘼瞐瞙镆魩黙縸默瀎貘嚜藦蟔鏌爅驀礳纆耱",
      mōu: "哞",
      móu: "牟侔劺呣恈敄桙眸谋堥蛑缪踎謀繆鍪鴾麰鞪",
      mǒu: "厶某",
      mòu: "",
      mú: "毪氁",
      mǔ: "母亩牡坶姆拇畂峔牳畆畒胟娒畝畞砪畮鉧踇",
      mù:
        "木仫目凩朷牟沐狇坶炑牧苜毣莯蚞钼募雮墓幙幕慔楘睦鉬慕暯暮缪樢艒霂穆縸繆鞪",
      n: "",
      ń: "唔嗯",
      ň: "嗯",
      na: "",
      nā: "",
      ná: "秅拏拿挐嗱蒘搻誽镎鎿",
      nǎ: "乸雫",
      nà: "吶妠抐纳肭郍衲钠納袦捺笚笝豽軜貀鈉蒳靹魶",
      nái: "腉搱摨孻",
      nǎi: "乃奶艿氖疓妳廼迺倷釢嬭",
      nài: "佴奈柰耏耐萘渿鼐褦螚錼",
      nān: "囝囡",
      nán: "男抩枏侽柟娚畘莮喃遖暔楠諵難",
      nǎn: "赧揇湳萳煵腩嫨蝻戁",
      nàn: "妠婻諵難",
      nāng: "儾囔",
      náng: "乪涳搑憹嚢蠰饟馕欜饢",
      nǎng: "搑擃瀼曩攮灢馕",
      nàng: "儾齉",
      nāo: "孬",
      náo: "呶怓挠峱桡硇铙猱蛲詉碙摎撓嶩憹橈獶蟯夒譊鐃巎獿",
      nǎo: "垴恼悩脑匘脳堖惱嫐瑙腦碯憹獶",
      nào: "闹婥淖閙鬧臑",
      ne: "",
      né: "",
      nè: "疒讷吶抐眲訥",
      néi: "",
      něi: "娞浽馁脮腇餒鮾鯘",
      nèi: "內氝氞錗",
      nèn: "恁媆嫩嫰",
      néng: "",
      něng: "螚",
      nèng: "",
      ńg: "唔嗯",
      ňg: "嗯",
      nī: "妮",
      ní: "尼坭怩抳籾倪屔秜郳铌埿婗淣猊蚭棿蛪跜鈮聣蜺馜觬貎輗霓鲵鯢麑齯臡",
      nǐ: "伱伲你拟妳抳狔苨柅婗掜旎晲棿孴儞儗隬懝擬濔薿檷聻",
      nì: "屰氼伲抐昵胒逆匿眤秜堄惄嫟愵睨腻暱縌誽膩嬺",
      niān: "拈蔫",
      nián: "年秊哖姩秥粘溓鲇鮎鲶鵇黏鯰",
      niǎn: "涊淰焾辇榐辗撚撵碾輦簐蹍攆蹨躎",
      niàn: "卄廿念姩唸埝悥惗艌",
      niáng: "娘嬢孃釀",
      niǎng: "",
      niàng: "酿醸釀",
      niǎo: "鸟茑袅鳥嫋裊蔦樢嬝褭嬲",
      niào: "脲",
      niē: "捏揑",
      nié: "苶",
      niě: "",
      niè:
        "乜帇圼峊枿陧涅痆聂臬啮掜菍隉敜湼嗫嵲踂噛摰槷踗踙銸镊镍嶭篞臲鋷錜颞蹑嚙聶鎳闑孼孽櫱籋蘖囁攝齧巕糱糵蠥鑈囐囓讘躡鑷顳钀",
      nín: "囜恁脌您",
      nǐn: "拰",
      níng: "咛狞苧柠聍寍寕甯寗寜寧儜凝橣嚀嬣擰獰薴檸聹鑏鬡鸋",
      nǐng: "擰矃",
      nìng: "佞侫泞倿寍寕甯寗寜寧澝擰濘",
      niū: "妞孧",
      niú: "牜牛汼怓",
      niǔ: "忸扭沑狃纽杻炄钮紐莥鈕靵",
      niù: "抝",
      nóng: "农侬哝浓脓秾農儂辳噥濃蕽檂燶禯膿癑穠襛譨醲欁鬞",
      nǒng: "繷",
      nòng: "挊挵癑齈",
      nóu: "羺",
      nǒu: "",
      nòu: "搙槈耨獳檽鎒鐞",
      nú: "奴伮孥帑驽笯駑",
      nǔ: "伮努弩砮胬",
      nù: "怒傉搙",
      nuán: "奻渜",
      nuǎn: "渜湪暖煖煗餪",
      nuàn: "",
      nuó: "挪梛傩橠難儺",
      nuǒ: "袳袲",
      nuò: "耎诺喏掿毭逽愞搙搦锘搻榒稬諾蹃糑鍩懧懦糥穤糯",
      nǘ: "",
      nǚ: "钕籹釹",
      nǜ: "沑衂恧朒衄聏",
      nüè: "虐婩硸瘧",
      o: "筽",
      ō: "喔噢",
      ó: "哦",
      ǒ: "嚄",
      ò: "哦",
      ou: "",
      ōu: "讴吽沤欧殴瓯鸥區嘔塸漚歐毆熰甌膒鴎櫙藲謳鏂鷗",
      óu: "",
      ǒu: "吘禺偶腢嘔熰耦蕅藕",
      òu: "怄沤嘔慪漚",
      pā: "汃妑苩皅趴舥啪葩",
      pá: "杷爬钯掱琶筢潖",
      pǎ: "",
      pà: "汃帊帕怕袙",
      pāi: "拍",
      pái: "俳徘猅棑牌箄輫簲簰犤",
      pǎi: "廹",
      pài: "沠哌派渒湃蒎鎃",
      pān: "眅畨萠潘攀籓",
      pán: "丬爿肨柈洀胖眫湴盘跘媻幋蒰搫槃盤磐縏膰磻蹒瀊蟠蹣鎜鞶",
      pǎn: "坢盻",
      pàn: "冸判沜拚泮炍肨叛牉盼胖畔聁袢詊溿頖鋬闆鵥襻鑻",
      pāng: "乓汸沗胮雱滂膖霶",
      páng: "厐夆尨彷庞逄庬趽舽嫎徬膀篣螃鳑龎龐鰟",
      pǎng: "嗙耪覫",
      pàng: "炐肨胖眫",
      pāo: "抛拋脬萢藨穮",
      páo: "咆垉庖狍炰爮瓟袍铇匏烰袌跁軳鉋鞄褜麃麅",
      pǎo: "",
      pào: "奅疱皰砲袌靤麭嚗礟礮",
      pēi: "妚呸怌抷肧柸胚衃醅",
      péi: "阫陪培婄毰赔锫裵裴賠錇",
      pěi: "俖琣",
      pèi: "伂妃沛犻佩帔姵斾柭旆浿珮配淠棑媐蓜辔馷嶏霈攈轡",
      pēn: "噴濆歕",
      pén: "瓫盆湓葐",
      pěn: "呠翸",
      pèn: "喯噴",
      pēng: "亨匉怦抨泙恲胓砰梈烹硑絣軯剻閛漰嘭駍磞",
      péng:
        "芃朋挷竼倗捀莑堋弸淜袶棚椖傰塜塳搒漨痭硼稝蓬鹏樥熢憉澎輣篣篷膨錋韸髼蟚蟛鬅纄蘕韼鵬騯鬔鑝",
      pěng: "捧淎皏摓",
      pèng: "掽椪碰閛槰踫磞",
      pi: "榌",
      pī:
        "丕伓伾妚批纰邳坯岯怶披抷枈炋狉狓砒悂秛秠紕铍陴旇翍耚豾釽鈚鉟銔磇駓髬噼錃錍魾憵礕礔鎞霹",
      pí:
        "皮仳阰纰芘陂枇肶毘毗疲笓紕蚍郫铍啤埤崥猈蚾蚽豼焷琵禆脾腗裨鈹鲏罴膍蜱罷隦魮壀螕鮍篺螷貔鞞鵧羆朇鼙蠯",
      pǐ: "匹庀疋仳圮吡苉悂脴痞銢嶏諀鴄擗噽癖嚭",
      pì: "屁埤淠揊嫓媲睥潎稫僻澼嚊濞甓疈譬闢鷿鸊",
      piān: "囨偏媥楄犏篇翩鍂鶣",
      pián: "骈胼缏腁楩賆跰瑸緶骿蹁駢璸騈",
      piǎn: "覑谝貵諞",
      piàn: "猵骗魸獱騗騙",
      piāo: "剽勡嘌嫖彯慓缥飘旚縹翲螵犥飃飄魒",
      piáo: "嫖瓢薸闝",
      piǎo: "莩殍缥瞟篻縹醥皫顠",
      piào: "僄彯徱骠驃鰾",
      piē: "氕覕潎撆暼瞥",
      piě: "丿苤鐅",
      piè: "嫳",
      pīn: "拚姘拼砏礗穦馪驞",
      pín: "玭贫娦貧琕嫔嬪薲嚬矉蘋蠙颦顰",
      pǐn: "品榀",
      pìn: "牝汖聘",
      pīng: "乒甹俜娉涄砯聠艵頩",
      píng:
        "平评凭呯坪岼泙郱帡庰枰洴玶胓荓瓶帲淜硑萍蚲塀幈焩甁缾蓱蛢評馮軿鲆凴竮鉼慿箳輧憑鮃檘簈蘋",
      pǐng: "屛",
      pìng: "",
      pō: "钋陂坡岥泺泼釙翍颇溌酦頗潑醗濼醱鏺",
      pó: "婆嘙搫蔢鄱皤櫇嚩",
      pǒ: "叵尀钷笸鉕箥駊髲",
      pò: "廹岶敀昢洦珀哱烞砶破粕奤湐猼蒪魄",
      pōu: "抙剖娝捊",
      póu: "抔抙垺捊掊裒箁",
      pǒu: "咅哣婄掊棓犃",
      pū: "攵攴扑抪炇柨陠痡秿噗撲潽鋪鯆",
      pú: "圤匍捗莆菩菐葡蒲蒱僕箁酺墣獛璞濮瞨穙镤贌纀鏷",
      pǔ: "圃埔浦烳普圑溥暜谱諩擈樸氆檏镨譜蹼鐠",
      pù: "痡舗舖鋪曝",
      qi: "啐",
      qī:
        "七迉沏恓柒倛凄桤郪娸悽戚捿桼淒萋喰攲敧棲欹欺紪缉傶褄僛嘁墄慽榿漆緀慼緝諆踦螇霋蹊魌鏚鶈",
      qí:
        "丌亓伎祁圻岓岐忯芪亝斉歧畁祇祈肵俟疧荠剘斊旂竒耆脐蚔蚑蚚陭颀埼崎帺掑淇猉畦萁萕跂軝釮骐骑嵜棊棋琦琪祺蛴隑愭碁碕稘褀锜頎鬿旗粸綥綨綦蜝蜞齊璂禥蕲觭螧錡鲯懠濝薺藄鄿檱櫀簯簱臍騎騏鳍蘄鯕鵸鶀麒籏艩蠐鬐騹鰭玂麡",
      qǐ: "乞邔企屺芑启呇杞玘盀唘豈起啔啓啟婍梩绮袳跂晵棨綮綺諬闙",
      qì:
        "气讫忔扱気汔迄呚弃汽矵芞亟呮泣炁盵咠洓竐栔欫氣訖唭焏夡愒棄湆湇葺滊碛摖暣甈碶噐憇槭趞器憩磜磧磩藒礘罊蟿鐑",
      qiā: "抲掐袷揢葜擖",
      qiá: "",
      qiǎ: "拤峠跒酠鞐",
      qià: "圶冾匼咭帢恰洽胢殎硈愘磍髂",
      qiān:
        "千仟阡圱圲奷扦汘芊迁佥岍杄汧茾欦竏臤钎拪牵粁悭挳蚈谸婜孯牽釺掔谦鈆僉愆签鉛骞鹐慳搴摼撁厱磏諐遷鳽褰謙顅檶攐攑櫏簽鏲鵮孅攓騫籖鬜鬝籤韆",
      qián:
        "仱岒忴扲拑玪乹前炶荨钤歬虔蚙钱钳偂掮揵軡亁媊朁犍葥鈐煔鉗墘榩箝銭撍潛潜羬蕁橬錢黔鎆黚騝濳騚灊鰬",
      qiǎn: "凵肷唊淺嵰遣槏膁蜸谴缱繾譴鑓",
      qiàn: "欠刋伣芡俔茜倩悓堑掅傔棈椠欿嗛慊皘蒨塹歉綪蔳儙槧篏輤篟壍嬱縴",
      qiāng:
        "羌戕戗斨枪玱矼羗猐啌跄嗴椌溬獇腔嗆搶蜣锖嶈戧摤槍牄瑲羫锵篬謒蹌蹡鎗鏘鏹鶬",
      qiáng: "強墙嫱蔷樯漒蔃墻嬙廧彊薔檣牆艢蘠",
      qiǎng: "強羟搶羥墏彊繈襁镪繦鏹",
      qiàng: "戗炝唴跄嗆戧摪熗羻",
      qiāo:
        "帩硗郻喿嵪煍跷鄥鄡劁勪幓敲毃踍锹墝碻磝頝骹墽幧橇燆缲橾磽鍬鍫礉繑繰趬蹺蹻鏒鐰",
      qiáo:
        "乔侨峤荍荞桥硚菬喬睄僑摮槗谯嘺墧嫶嶠憔潐蕎鞒樵橋燋犞癄瞧礄翹櫵藮譙趫鐈鞽顦",
      qiǎo: "丂巧釥愀髜",
      qiào: "诮陗峭窍偢殻殼誚髚僺嘺撬箾噭撽鞘韒礉竅翹鞩躈",
      qiē: "苆",
      qié: "癿伽茄聺",
      qiě: "",
      qiè:
        "厒妾怯疌郄匧窃悏挈栔洯帹惬淁笡愜椄猰蛪趄跙嗛慊朅稧箧锲篋踥穕鍥鯜竊籡",
      qīn: "兓侵钦衾骎菳媇嵚欽嵰綅誛嶔親顉駸鮼寴",
      qín:
        "庈忴扲芩芹肣矜埐珡矝秦耹菦蚙捦菳琴琹禽覃鈙鈫雂勤嗪嫀溱靲廑慬噙嶜擒斳鳹懄檎澿瘽螓懃蠄鵭",
      qǐn: "坅昑笉梫赾寑锓寝寖寢鋟螼",
      qìn: "吢吣抋沁唚菣揿搇撳寴瀙藽",
      qīng: "靑青氢轻倾卿郬圊埥寈氫淸清軽傾綪蜻輕錆鲭鯖鑋",
      qíng: "夝甠剠勍啨情殑硘晴棾氰葝暒擏樈擎檠黥",
      qǐng: "苘顷请庼頃廎漀請檾謦",
      qìng: "庆凊掅殸渹碃箐綮靘慶磬親儬濪罄櫦",
      qiōng: "",
      qióng:
        "卭邛宆穷穹茕桏惸琁筇笻赹焪焭琼舼蛬蛩煢熍睘跫銎瞏窮儝嬛憌橩璚藑瓊竆藭瓗",
      qiòng: "",
      qiū:
        "丘丠邱坵恘秌秋恷蚯媝湫萩楸湬塸蓲鹙篍緧蝵穐趥龜橚鳅蟗鞦鞧蘒鰌鰍鶖蠤龝",
      qiú:
        "厹叴囚扏犰玌艽芁朹汓肍求虬泅牫虯俅觓訅訄酋唒浗紌莍逎逑釚梂殏毬球赇釻頄崷巯渞湭皳盚遒煪絿蛷裘巰觩賕璆蝤銶醔鮂鼽鯄鰽",
      qiǔ: "搝糗",
      qiù: "",
      qū:
        "伹佉匤岖诎阹驱呿坥屈岴抾浀祛胠袪區焌紶蛆躯煀筁粬蛐詘趍嶇憈駆敺觑誳駈麹髷魼趨麯覰覷軀鶌麴黢覻驅鰸鱋",
      qú:
        "佢劬斪朐胊菃衐鸲淭絇翑蚼葋軥蕖璖磲螶鴝璩翵蟝瞿鼩蘧忂灈戵欋氍爠籧臞癯欔蠷衢躣蠼鑺鸜",
      qǔ: "苣取竘娶紶詓竬蝺龋齲",
      qù: "去厺刞欪耝阒觑閴麮闃鼁覰覷覻",
      quān: "奍弮悛圏棬椦箞鐉",
      quán:
        "全权佺狋诠姾峑恮泉洤荃拳牷辁啳埢婘惓捲痊硂铨椦湶犈筌絟葲搼楾瑔觠詮跧輇蜷銓槫権踡縓醛駩闎鳈鬈騡孉巏鰁權齤矔蠸颧顴灥",
      quǎn: "犭犬犮畎烇绻綣虇",
      quàn: "劝牶勧韏勸灥",
      quē: "炔缺缼蚗蒛阙闕",
      qué: "瘸",
      què: "汋却卻埆崅悫琷傕敠敪棤硞确阕塙搉皵碏阙鹊愨榷墧慤碻確趞燩闋礐闕鵲礭",
      qūn: "夋囷逡箘歏",
      qún: "宭峮帬裙羣群裠麇",
      qǔn: "",
      rán: "呥肰衻袇蚦袡蚺然髥嘫髯燃繎",
      rǎn: "冄冉姌苒染珃媣蒅熯橪",
      ràn: "",
      rāng: "",
      ráng: "穣儴勷瀼獽蘘禳瓤穰躟鬤",
      rǎng: "壌壤攘爙纕",
      ràng: "让懹譲讓",
      ráo: "娆荛饶桡嬈蕘橈襓饒",
      rǎo: "扰娆隢嬈擾",
      rào: "绕遶穘繞",
      ré: "捼",
      rě: "喏惹",
      rè: "热渃熱",
      rén: "亻人仁壬忈朲忎秂芢魜銋鵀",
      rěn: "忍荏栠栣荵秹菍棯稔綛躵銋",
      rèn:
        "刃刄认仞仭讱屻岃扨纫妊杒牣纴肕轫韧饪祍姙紉衽紝訒軔梕袵釰釼絍腍鈓靱靭韌飪認餁",
      rēng: "扔",
      réng: "仍辸礽芿陾",
      rì: "日驲囸氜衵釰釼鈤馹",
      róng:
        "戎肜栄狨绒茙茸荣容峵毧烿傛媶嵘搑絨羢嫆嵤搈榵溶蓉榕榮熔瑢穁槦縙蝾褣镕螎融駥嬫嶸爃鎔瀜曧蠑",
      rǒng: "冗宂坈傇軵縙氄",
      ròng: "穃縙",
      róu: "厹禸柔粈脜媃揉渘葇楺煣瑈腬糅蝚蹂輮鍒鞣瓇騥鰇鶔",
      rǒu: "韖",
      ròu: "肉宍楺譳",
      rū: "嶿",
      rú:
        "邚如吺侞帤茹挐桇袽铷渪筎蒘銣蕠蝡儒鴑嚅嬬孺濡獳薷鴽曘檽襦繻蠕颥醹顬鱬",
      rǔ: "汝肗乳辱鄏擩",
      rù: "入扖杁洳嗕媷溽缛蓐鳰褥縟",
      ruán: "堧撋壖",
      ruǎn: "阮朊软耎偄軟媆瑌腝碝緛輭檽瓀礝",
      ruàn: "緛",
      ruí: "苼桵甤緌蕤",
      ruǐ: "惢蕋蕊橤繠壡蘃蘂",
      ruì: "兊兌抐汭芮枘笍蚋锐瑞蜹睿銳鋭叡鏸",
      rún: "瞤",
      rǔn: "",
      rùn: "闰润閏閠潤橍膶",
      ruó: "挼捼",
      ruò: "叒偌弱鄀婼渃焫楉嵶蒻箬篛爇鰙鰯鶸",
      sa: "",
      sā: "仨",
      sǎ: "訯靸潵鞈攃灑躠纚",
      sà: "卅泧钑飒脎萨鈒摋隡馺蕯颯薩櫒鏾",
      sāi: "毢愢揌毸腮嘥噻鳃顋鰓",
      sǎi: "嗮",
      sài: "赛僿賽簺",
      san: "壭",
      sān: "三弎叁參叄叅毶毵厁毿犙鬖",
      sǎn: "仐伞傘糁馓糝糤糣繖鏒鏾饊",
      sàn: "俕帴閐潵",
      sāng: "桒桑喪槡",
      sǎng: "嗓搡磉褬颡鎟顙",
      sàng: "喪",
      sāo: "掻慅搔溞缫懆缲螦繅鳋颾騒繰騷鰠鱢",
      sǎo: "埽掃嫂",
      sào: "埽掃瘙懆氉矂髞",
      sē: "閪",
      sè:
        "色拺洓栜涩啬渋粣铯雭歮琗嗇瑟摵歰銫槭澁廧懎擌濇濏瘷穑薔澀璱瀒穡鎍繬穯轖鏼闟譅飋",
      sēn: "森椮槮襂",
      sěn: "",
      sēng: "僧鬙",
      sèng: "",
      sī:
        "厶纟丝司糹糸私咝泀俬恖虒鸶偲傂媤愢斯絲缌蛳楒禗鉰飔凘厮禠罳蜤銯锶嘶噝廝撕澌磃緦蕬鋖燍螄鍶蟖蟴颸騦鯣鐁鷥鼶",
      sí: "",
      sǐ: "死愢",
      sì:
        "巳亖四寺汜佀兕姒泤祀価孠杫泗饲驷俟娰枱柶洠牭洍涘肂飤梩笥耛耜釲竢覗嗣肆貄鈶鈻飴飼榹銉禩駟蕼儩騃瀃",
      sōng: "忪枀松枩娀柗倯凇崧庺梥淞菘愡揔棇嵩硹憽濍檧鬆",
      sóng: "",
      sǒng: "怂悚捒耸竦傱愯楤嵷摗漎慫聳駷",
      sòng: "吅讼宋诵送颂訟頌誦鎹餸",
      sōu: "凁捒捜鄋嗖廀廋搜溲獀蒐蓃馊摉飕摗锼撨艘螋醙鎪餿颼颾鏉騪",
      sǒu: "叜叟傁棷蓃嗾瞍擞薮擻藪櫢籔",
      sòu: "欶嗽擞瘶擻",
      sū: "甦酥稡稣窣穌鯂蘇蘓櫯囌",
      sú: "圱俗",
      sǔ: "",
      sù:
        "玊夙诉泝肃洬涑珟素莤速埣梀殐粛骕傃棴粟訴谡嗉塑塐嫊愫溯溸肅遡鹔僳愬摵榡膆蔌觫趚遬憟樕樎潥碿鋉餗潚縤橚璛簌縮藗謖蹜驌鱐鷫",
      suān: "狻痠酸",
      suǎn: "匴篹",
      suàn: "祘笇筭蒜算",
      suī: "夊芕虽倠哸娞浽荾荽眭毸滖睢缞嗺熣濉縗鞖雖",
      suí: "绥隋随遀綏隨瓍髄",
      suǐ: "膸瀡髓",
      suì:
        "亗岁砕祟谇埣嵗遂歲歳煫睟碎隧嬘澻穂誶賥檖燧璲禭穗穟繀襚邃旞繐繸譢鐆鏸鐩韢",
      sūn: "狲荪孫喰飧飱搎猻蓀槂蕵薞",
      sǔn: "扻损笋隼筍損榫箰簨鎨鶽",
      sùn: "摌",
      suō: "唆娑挱莏莎傞挲桫梭睃嗍嗦羧蓑摍趖簑簔縮鮻",
      suó: "",
      suǒ: "所乺唢索琑琐嫅惢锁嗩暛溑獕瑣褨璅縒鎍鎖鎻鏁",
      suò: "逤溹蜶",
      shā: "杀杉纱乷剎砂唦挱殺猀粆紗莎挲桬毮铩痧硰摋蔱裟榝樧魦鲨閷髿鎩鯊鯋繺",
      shá: "啥",
      shǎ: "傻儍",
      shà: "倽唼啑帹菨萐喢嗄廈歃翜歰箑翣濈閯霎",
      shāi: "筛篩諰簁簛籭",
      shǎi: "摋",
      shài: "晒攦曬",
      shān:
        "山彡邖圸删刪杉芟姍姗衫钐埏挻柵炶狦珊舢痁脠軕笘釤閊傓跚剼搧煔嘇幓煽潸澘穇檆縿膻鯅羴羶",
      shán: "",
      shǎn: "闪陕炶陝閃閄晱煔睒摻熌覢",
      shàn:
        "讪汕姍姗疝钐剡訕赸掞釤善單椫禅銏骟僐鄯儃墡墠撣潬缮嬗嶦擅敾樿歚禪膳磰謆赡繕蟮蟺譱贍鐥饍騸鳝鳣灗鱓鱔",
      shang: "",
      shāng: "伤殇商愓湯觞傷禓墒慯滳漡蔏殤熵螪觴謪鬺",
      shǎng: "垧扄晌埫赏樉賞鋿鏛贘鑜",
      shàng: "丄尙尚恦绱緔鞝",
      shāo: "娋弰烧莦焼萷旓筲艄輎蕱燒鞘髾鮹",
      sháo: "勺芍杓苕柖玿韶",
      shǎo: "",
      shào: "佋劭卲邵绍柖哨娋袑紹睄綤潲",
      shē: "奓奢猞赊畭畬畲輋賒賖檨",
      shé: "舌佘虵阇揲蛥闍磼",
      shě: "舍捨",
      shè: "厍设社泏舎舍厙挕涉涻渉設赦弽慑摂滠慴蔎歙蠂韘騇懾攝灄麝欇",
      shéi: "誰",
      shēn:
        "申屾扟伸身侁冞呻妽籶绅罙诜姺柛氠珅穼籸娠峷甡眒砷莘參叄堔敒深紳兟叅棽葠裑訷嫀搷罧蓡詵幓甧糁蔘糂燊薓駪鲹曑糝糣鯓鵢鯵鰺",
      shén: "神榊鉮鰰",
      shěn: "邥吲弞抌审矤哂矧宷谂谉婶淰渖訠棯審諗頣魫曋瞫嬸瀋覾讅",
      shèn: "肾侺昚胂涁眘渗祳脤谌腎葚愼慎椹瘆蜄蜃滲鋠瘮黮",
      shēng: "升生阩呏声斘昇枡泩狌苼殅牲珄竔陞曻陹殸笙湦焺甥鉎聲鍟鼪鵿",
      shéng: "渑绳憴澠縄繉繩譝",
      shěng: "眚偗渻",
      shèng: "圣乗娍胜晠晟剰剩勝椉貹嵊琞聖墭榺蕂橳賸",
      shi: "辻籂",
      shī:
        "尸失师厔呞虱诗邿鸤屍施浉狮師絁釶湤湿葹溮溼獅蒒蓍詩鉇嘘瑡酾鳲噓箷蝨鳾褷鲺濕鍦鯴鰤鶳襹釃",
      shí:
        "十饣乭时竍実实旹飠姼峕炻祏蚀埘宲時莳寔湜遈塒嵵溡蒔鉐實榯碩蝕鲥鮖鼫識鼭鰣",
      shǐ: "史矢乨豕使始驶兘宩屎狶痑笶榁鉂駛",
      shì:
        "士礻丗世仕市示卋式忕亊忯戺事侍势呩柹视试饰冟咶室峙恀恃拭昰是枾柿狧眂贳适栻烒眎眡耆舐莳轼逝铈啫埶畤秲視釈崼崻弑徥惿揓谥貰释勢嗜弒楴煶睗筮蒔觢試軾鈰鉃飾舓誓適鉽馶奭銴餝餙噬嬕澨澤諡諟遾檡螫謚簭襫醳釋鰘",
      shōu: "収收敊",
      shóu: "熟",
      shǒu: "扌手守垨首艏",
      shòu: "寿受狩兽售授涭绶痩膄壽夀瘦綬嘼獣獸鏉",
      shū:
        "书殳疋忬抒纾叔杸枢陎姝倐倏捈書殊紓婌悆掓梳淑焂菽軗鄃琡疎疏舒摅毹毺綀输瑹跾踈樞緰蔬輸橾鮛儵攄瀭鵨",
      shú: "朮尗秫孰赎蒣塾熟璹贖",
      shǔ: "鼡暏暑稌黍署蜀鼠數潻薥薯曙癙藷襡糬襩屬籔蠴鱪鱰",
      shù:
        "朮戍束沭述侸俞兪咰怸怷树竖荗恕捒庻庶絉蒁術隃尌裋竪腧鉥墅漱潄數澍豎樹濖錰霔鏣鶐虪",
      shuā: "唰",
      shuǎ: "耍",
      shuà: "誜",
      shuāi: "缞摔縗",
      shuǎi: "甩",
      shuài: "帅帥蟀卛",
      shuān: "闩拴閂栓絟",
      shuàn: "涮腨槫",
      shuāng: "双泷霜雙孀瀧骦孇騻欆礵鷞鹴艭驦鸘",
      shuǎng: "爽塽慡漺縔鏯",
      shuàng: "灀",
      shuí: "谁脽誰",
      shuǐ: "氵水氺閖",
      shuì: "帨挩捝涗涚娷祱稅税裞睡說説",
      shǔn: "吮楯",
      shùn: "顺眴舜順蕣橓瞚瞤瞬鬊",
      shuō: "說説",
      shuò: "妁洬烁朔铄欶矟搠蒴銏愬槊獡碩數箾鎙爍鑠",
      ta: "侤",
      tā: "他它牠祂趿铊塌榙溻鉈褟闧",
      tá: "",
      tǎ: "塔溚墖獭鮙鳎獺鰨",
      tà:
        "沓挞狧闼粏崉涾傝嗒搨遝遢阘榻毾漯禢撻澾誻踏鞈嚃橽錔濌蹋鞜鎉鎑闒鞳蹹躂嚺闟闥譶躢",
      tāi: "囼孡珆胎",
      tái: "旲邰坮抬骀枱炱炲菭跆鲐箈臺颱駘儓鮐嬯擡薹檯斄籉",
      tǎi: "奤",
      tài: "太冭夳忕汏忲汰汱态肽钛泰舦酞鈦溙態燤",
      tān: "坍贪怹啴痑舑貪摊滩嘽潬瘫擹攤灘癱",
      tán:
        "坛昙倓谈郯埮婒惔弾覃榃痰锬谭嘾墰墵彈憛潭談醈壇曇橝澹燂錟檀顃罈藫壜繵譚貚醰譠罎",
      tǎn: "忐坦袒钽菼毯僋鉭嗿緂儃憳憻暺醓璮襢",
      tàn: "叹炭倓埮探傝湠僋嘆碳舕歎",
      tāng: "铴湯嘡劏羰蝪薚镗蹚鏜闛鞺鼞",
      táng:
        "坣唐堂傏啺愓棠鄌塘嵣搪溏蓎隚榶漟煻瑭禟膅樘磄糃膛橖篖糖螗踼糛螳赯醣鎕餹鏜闛饄鶶",
      tǎng: "伖帑偒傥耥躺镋鎲儻戃灙曭爣矘钂",
      tàng: "烫铴摥燙鐋",
      tāo: "夲夵弢抭涛绦掏涭絛詜嫍幍慆搯滔槄瑫韬飸縚縧濤謟轁鞱韜饕",
      táo: "匋迯咷洮逃桃陶啕梼淘绹萄祹裪綯蜪鞀醄鞉鋾駣檮饀騊鼗",
      tǎo: "讨討",
      tào: "套",
      tè: "忑忒特脦犆铽慝鋱蟘",
      tēng: "熥膯鼟",
      téng: "疼痋幐腾誊漛滕邆縢螣駦謄儯藤騰籐鰧籘虅驣",
      tèng: "霯",
      tī: "剔梯锑踢銻擿鷉鷈體",
      tí:
        "苐厗荑桋绨偍珶啼媂媞崹惿渧稊缇罤遆鹈嗁瑅禔綈睼碮褆徲漽磃緹蕛题趧蹄醍謕蹏鍗鳀題鮷鵜騠鯷鶗鶙禵鷤",
      tǐ: "挮徥躰骵醍軆體",
      tì:
        "戻奃屉剃朑俶倜悌挮涕眣绨逖啑屜悐惕掦笹逷屟惖揥替棣綈裼褅歒殢髰薙嚏鬀嚔瓋鬄籊趯",
      tiān: "天兲呑婖添酟靔黇靝",
      tián: "田屇沺恬畑畋盷胋钿甛甜菾湉塡搷阗瑱碵緂磌窴鴫璳闐鷆鷏",
      tiǎn: "奵忝殄倎栝唺悿淟紾铦晪琠腆觍痶睓舔銛餂覥賟銽錪",
      tiàn: "掭菾琠瑱舚",
      tiāo: "旫佻庣恌條祧聎",
      tiáo: "芀朷岧岹苕迢祒條笤萔铫蓚蓨蓧龆樤蜩銚調鋚鞗髫鲦鯈鎥齠鰷",
      tiǎo: "宨晀朓脁窕誂斢窱嬥",
      tiào: "啁眺粜絩覜趒糶",
      tiē: "怗贴萜聑貼跕",
      tié: "",
      tiě: "铁蛈鉄僣銕鐡鐵驖",
      tiè: "呫飻餮",
      tīng: "厅庁汀听庍耓厛烃桯烴渟綎鞓聴聼廰聽廳",
      tíng: "邒廷亭庭莛停婷嵉渟筳葶蜓楟榳閮霆聤蝏諪鼮",
      tǐng: "圢甼町侹侱娗挺涏梃烶珽脡铤艇颋誔鋌閮頲",
      tìng: "忊梃濎",
      tōng: "囲炵通痌絧嗵蓪樋",
      tóng:
        "仝佟彤侗峂庝哃垌峒峝狪茼晍桐浵烔砼蚒偅痌眮秱铜硧童粡絧詷赨酮鉖僮勭鉵銅餇鲖潼獞曈朣橦氃燑犝膧瞳穜鮦",
      tǒng: "侗统捅桶筒統筩綂",
      tòng: "恸痛衕慟憅",
      tou: "",
      tōu: "偸偷婾媮緰鋀鍮",
      tóu: "亠投骰頭",
      tǒu: "妵紏敨飳斢黈蘣",
      tòu: "透埱",
      tu: "汢",
      tū: "凸宊禿秃怢突涋捸堗湥痜葖嶀鋵鵚鼵",
      tú:
        "図图凃峹庩徒悇捈涂荼莵途啚屠梌菟揬稌趃塗嵞瘏筡腯蒤鈯圗圖廜摕潳瑹跿酴墿馟檡鍎駼鵌鶟鷋鷵",
      tǔ: "土圡钍唋釷",
      tù: "兎迌兔唋莵堍菟鋀鵵",
      tuān: "湍猯圕煓貒",
      tuán: "団团抟剸團塼慱摶漙槫篿檲鏄糰鷒鷻",
      tuǎn: "畽墥疃",
      tuàn: "彖湪猯褖貒",
      tuī: "忒推蓷藬讉",
      tuí: "弚颓僓隤墤尵橔頺頹頽魋穨蘈蹪",
      tuǐ: "俀聉腿僓蹆骽",
      tuì: "侻退娧煺蛻蜕螁駾",
      tūn: "吞呑旽涒啍朜焞噋憞暾",
      tún: "坉庉忳芚饨蛌豘豚軘飩鲀魨霕黗臀臋",
      tǔn: "氽",
      tùn: "",
      tuō: "乇仛讬托扡汑饦杔侂咃咜拕拖沰挩捝莌袉袥託啴涶脫脱飥馲魠鮵",
      tuó:
        "阤驮佗陀陁坨岮沱沲狏驼侻柁砤砣袉铊鸵紽堶媠詑跎酡碢鉈馱槖駄鋖駞駝橐鮀鴕鼧騨鼍驒驝鼉",
      tuǒ: "彵妥庹椭楕嫷撱橢鵎鰖",
      tuò: "杝柝毤唾涶萚跅毻嶞箨蘀籜",
      wa: "哇",
      wā: "屲穵呙劸咼哇徍挖洼娲畖窊唲啘媧窐嗗瓾蛙搲溛漥窪鼃攨韈",
      wá: "娃",
      wǎ: "佤邷咓砙瓸搲",
      wà: "帓袜婠聉嗢搲腽膃韎襪韤",
      wai: "",
      wāi: "呙咼歪喎竵瀤",
      wǎi: "崴",
      wài: "外顡",
      wān: "毌夗弯剜埦婠帵捥塆湾睕蜿潫豌鋺彎壪灣",
      wán: "丸刓汍纨芄完岏忨抏杬玩笂紈捖蚖顽烷琓貦頑翫",
      wǎn:
        "夘夗倇唍挽盌莞莬埦婉惋捥晚晥梚涴绾脘菀萖惌晩晼椀琬皖畹碗箢綩綰輓踠鋔鋺",
      wàn: "卍卐妧杤捥脕掔腕萬絻綄輐槾澫鋄瞣薍錽蟃贃鎫贎",
      wāng: "尣尫尪汪尩瀇",
      wáng: "亾兦仼莣蚟朚",
      wǎng: "罓罒网彺忹抂徃往枉罖罔迬惘菵暀棢蛧辋網蝄誷輞瀇魍",
      wàng: "妄忘迋旺盳徍望暀朢",
      wēi:
        "厃危威倭烓偎逶隇隈喴媙崴嵔愄揋揻葨葳微椳楲溦煨詴蜲縅蝛覣嶶薇燰鳂癐癓巍鰃鰄霺",
      wéi:
        "囗韦圩囲围帏沩违闱隹峗峞洈為韋桅涠唯帷惟硙维喡圍媁嵬幃湋溈爲琟違潍維蓶鄬撝潙潿醀濰鍏闈鮠壝矀覹犩欈",
      wěi:
        "伟伪纬芛苇炜玮洧娓屗捤浘荱诿偉偽唩崣捼梶痏硊萎隗骩媁嵔廆徫愇渨猥葦蒍骫骪暐椲煒瑋痿腲艉韪僞嶉撱碨磈鲔寪緯蔿諉踓韑頠薳儰濻鍡鮪瀢韙颹韡亹瓗斖",
      wèi:
        "卫未位味苿為畏胃叞軎猚硙菋谓喂喡媦渭爲猬煟墛瞆碨蔚蜼慰熭犚磑緭蝟衛懀罻衞謂餧鮇螱褽餵魏藯轊鏏霨鳚蘶饖瓗讆躗讏躛",
      wēn: "昷塭温缊榅殟溫瑥辒韫榲瘟緼縕豱輼轀鎾饂鳁鞰鰛鰮",
      wén: "文彣芠炆玟闻紋蚉蚊珳阌雯瘒聞馼駇魰鳼鴍螡閺閿蟁闅鼤繧闦",
      wěn: "伆刎吻呅忟抆呡忞歾肳紊桽脗稳穏穩",
      wèn: "问妏汶紋莬問渂揾搵絻顐璺",
      wēng: "翁嗡滃鹟聬螉鎓鶲",
      wěng: "勜奣塕嵡滃蓊暡瞈攚",
      wèng: "瓮蕹甕罋齆",
      wō: "挝倭莴唩涹渦猧萵喔窝窩蜗撾濄緺蝸踒薶",
      wǒ: "呙我咼婑婐捰",
      wò: "仴沃肟卧枂臥偓捾涴媉幄握渥焥硪楃腛斡瞃濣瓁臒龌馧龏齷",
      wū:
        "乌圬弙扜扝汚汙污邬呜巫杅杇於屋洿诬钨烏剭窏釫惡鄔嗚誈僫歍誣箼鋘螐鴮鎢鰞",
      wú:
        "无毋吳吴吾呉芜郚唔娪峿洖浯茣莁梧珸祦無铻鹀蜈墲蕪鋙鋘橆璑蟱鯃鵐譕鼯鷡",
      wǔ:
        "乄五午仵伍妩庑忤怃迕旿武玝侮倵娒捂逜陚啎娬牾堥珷摀碔鹉熓瑦舞嫵廡憮潕儛甒膴瞴鵡躌",
      wù:
        "兀勿务戊阢屼扤坞岉杌沕芴忢旿物矹俉卼敄柮误務唔娪悟悞悮粅趶晤焐婺嵍惡渞痦隖靰骛塢奦嵨溩雺雾僫寤熃誤鹜鋈窹霚鼿霧齀蘁騖鶩",
      xī:
        "夕兮邜吸忚扱汐西希扸卥昔析矽穸肸肹俙咥咭徆怸恓诶郗饻唏奚娭屖息悕氥浠牺狶莃唽悉惜晞桸欷淅渓烯焁焈琋硒羛菥赥釸傒惁晰晳焟焬犀睎稀粞翖翕舾鄎厀嵠徯溪煕皙碏蒠裼锡僖榽熄熈熙獡緆蜥覡誒豨閪餏嘻噏嬆嬉嶲憘潝瘜磎膝凞暿樨橀歙熻熺熹窸羲螅螇錫燨犠瞦礂蟋豀谿豯貕蹊巂糦繥釐雟鯑鵗觹譆醯鏭鐊隵嚱巇曦爔犧酅饎觽鼷蠵鸂觿鑴",
      xí: "习郋席習袭觋雭喺媳椺蒵蓆嶍漝趘槢薂隰檄謵鎴霫鳛飁騱騽鰼襲驨",
      xǐ:
        "杫枲玺徙喜葈葸鈢鉩鉨屣漇蓰銑憘憙暿橲歖禧諰壐縰謑鳃蟢蹝釐璽鰓瓕鱚囍矖纚躧",
      xì:
        "匸卌扢屃忾饩呬忥怬细郄钑係恄欪盻郤屓欯绤細釳阋傒摡椞舃舄趇隙愾慀滊禊綌蒵赩隟墍熂犔稧戯潟澙蕮覤戱縘黖戲磶虩餼鬩繫闟霼屭衋",
      xiā: "呷虲疨虾谺傄閕煆颬瘕瞎蝦鰕",
      xiá:
        "匣侠狎俠峡柙炠狭陜埉峽烚狹珨祫捾硖笚翈舺陿徦硤遐敮暇瑕筪舝瘕碬辖磍蕸縖螛赮魻轄鍜霞鎋黠騢鶷",
      xiǎ: "閕閜",
      xià: "丅下乤圷芐疜夏梺廈睱諕嚇懗罅夓鎼鏬",
      xiān:
        "仚仙屳先奾佡忺氙杴欦祆秈苮姺枮籼珗莶掀铦搟綅跹酰锨僊僲嘕摻銛暹銽韯嬐憸薟鍁繊褼韱鮮蹮馦孅廯攕醶纎鶱襳躚纖鱻",
      xián:
        "伭咞闲咁妶弦臤贤咸唌挦涎玹盷胘娴娹婱絃舷蚿衔啣湺痫蛝閑閒鹇嗛嫌溓衘甉銜嫻嫺憪撏澖稴羬誸賢諴輱醎癇癎瞯藖礥鹹麙贒鑦鷴鷼鷳",
      xiǎn:
        "彡冼狝显险崄毨烍猃蚬険赻筅尟尠搟禒蜆跣銑箲險嶮獫獮藓鍌鮮燹顕幰攇櫶蘚譣玁韅顯灦",
      xiàn:
        "咞岘苋見现线臽限姭宪県陥哯垷娊峴涀莧軐陷埳晛現硍馅睍絤綖缐羡塪搚溓献粯羨腺僩僴槏綫誢憪撊線鋧憲橌橺縣錎餡壏懢豏麲瀗臔獻糮鏾霰鼸",
      xiāng:
        "乡芗香郷厢啍鄉鄊廂湘缃萫葙鄕楿稥薌箱緗膷襄儴勷忀骧麘欀瓖镶鱜纕鑲驤",
      xiáng: "夅瓨佭庠羏栙祥絴翔詳跭",
      xiǎng: "享亯响蚃饷晑飨想銄餉鲞蠁鮝鯗響饗饟鱶",
      xiàng: "向姠项珦象缿衖項像勨嶑潒銗閧曏橡襐闂嚮蟓鐌鱌",
      xiāo:
        "灲灱呺枭侾哓枵骁宯宵庨消烋绡莦虓逍鸮婋梟焇猇萧痚痟睄硣硝窙翛销嗃揱綃蛸嘐歊潇熇箫踃嘵憢撨獟獢箾銷霄骹彇膮蕭颵魈鴞穘簘藃蟂蟏鴵嚣瀟簫蟰髇櫹嚻囂髐鷍蠨驍毊虈",
      xiáo: "姣洨郩崤淆訤殽誵",
      xiǎo: "小晓暁筱筿皛曉篠謏皢",
      xiào: "孝効咲恔俲哮效涍笑啸傚敩殽嗃詨嘋嘨誟嘯薂歗熽斅斆",
      xiē: "娎揳猲楔歇滊獦蝎蠍",
      xié:
        "劦协旪協胁垥奊峫恊拹挾脇脅脋衺偕斜梋谐絜翓颉嗋愶慀搚携瑎綊熁膎鲑勰撷擕緳縀缬蝢鞋諧燲鮭嚡擷鞵儶襭孈攜讗龤",
      xiě: "写冩寫藛",
      xiè:
        "伳灺泻祄绁缷卸枻洩炨炧卨屑栧偞偰徢械烲焎禼紲亵媟屟渫絏絬谢僁塮觟觧榍榝榭褉靾噧寫屧暬樧碿緤嶰廨懈澥獬糏薤薢邂韰燮褻謝夑瀉鞢韘瀣爕繲蟹蠏齘齛纈齥齂躠躞",
      xīn: "忄心邤妡忻辛昕杺欣盺俽莘惞訢鈊锌新歆廞鋅噺噷嬜薪馨鑫馫",
      xín: "枔襑镡礥鐔",
      xǐn: "伈",
      xìn: "阠伩囟孞炘軐脪衅訫愖焮馸顖舋釁",
      xīng: "狌星垶骍惺猩煋瑆腥觪箵篂興謃鮏曐觲騂皨鯹",
      xíng: "刑邢饧巠形陉侀郉哘型洐荥钘陘娙硎铏鈃蛵滎鉶銒鋞餳",
      xǐng: "睲醒擤",
      xìng: "杏姓幸性荇倖莕婞悻涬葕睲緈鋞嬹臖",
      xiōng: "凶匂兄兇匈芎讻忷汹哅恟洶胷胸訩詾賯",
      xióng: "雄熊熋",
      xiǒng: "焽焸",
      xiòng: "诇詗夐敻",
      xiū: "俢修咻庥烌烋羞脩脙鸺臹貅馐樇銝髤髹鎀鮴鵂鏅饈鱃飍",
      xiú: "苬",
      xiǔ: "朽滫潃糔",
      xiù: "秀岫峀珛绣袖琇锈嗅溴綉璓褏褎銹螑嚊繍鏅繡鏥鏽齅",
      xū:
        "圩戌旴姁疞盱欨砉胥须眗訏顼偦虗虚裇許谞媭揟欻湏湑虛須楈綇頊嘘墟稰蓲需魆噓嬃歔緰縃蕦蝑歘藇諝燸譃魖驉鑐鬚",
      xú: "俆冔徐禑蒣",
      xǔ: "呴姁诩浒栩珝喣湑蛡暊詡滸稰鄦糈諿醑盨",
      xù:
        "旭伵序旴汿芧侐卹妶怴沀叙恓恤昫朐洫垿晇欰殈烅珬勗勖喐惐掝敍敘淢烼绪续蚼酗壻婿朂溆矞絮聓訹慉滀煦続蓄賉槒漵潊盢瞁緒聟蓿銊嘼獝稸緖藇藚續鱮",
      xuān:
        "吅轩昍咺宣弲晅軒梋谖喧塇媗愃愋揎萲萱暄煊瑄蓒睻儇禤箮翧蝖鋗嬛懁蕿諠諼鞙駨鍹駽矎翾藼蘐蠉譞鰚讂",
      xuán: "玄伭妶玹痃悬琁蜁嫙漩暶璇縣檈璿懸",
      xuǎn: "咺选烜喛暅選癣癬",
      xuàn: "怰泫昡炫绚眩袨铉琄眴衒渲絢楥楦鉉夐敻碹蔙镟颴縼繏鏇贙",
      xuē: "疶蒆靴薛辥辪鞾",
      xué: "穴斈乴学峃茓泶袕鸴敩踅噱壆學嶨澩燢觷鷽",
      xuě: "彐雪樰膤艝轌鳕鱈",
      xuè: "吷坹岤怴泬狘疦桖谑滈趐謔瞲瀥",
      xūn: "坃勋埙焄勛塤煇窨勲勳薫嚑壎獯薰曛燻臐矄蘍壦爋纁醺",
      xún:
        "廵寻巡旬杊畃询郇咰姰峋恂洵浔紃荀荨栒桪毥珣偱眴尋循揗詢鄩鲟噚潯蕁攳樳燅燖璕駨蟫蟳爓鱘鱏灥",
      xùn:
        "卂训讯伨汛迅驯侚巺徇狥迿逊孫殉毥浚訊訓訙奞巽殾稄遜馴愻噀潠蕈濬爋顨鶽鑂",
      ya: "",
      yā: "丫圧吖亞庘押枒垭鸦桠鸭啞孲铔椏鴉錏鴨壓鵶鐚",
      yá: "牙伢厑岈芽厓拁琊笌蚜堐崕崖涯猚釾睚衙漄齖",
      yǎ: "疋厊庌挜疨唖啞掗痖雅瘂蕥",
      yà:
        "劜圠轧亚冴襾覀讶亜犽迓亞玡軋姶娅挜砑俹氩埡婭掗訝铔揠氬猰聐圔椻稏碣窫潝磍壓瓛齾",
      yān:
        "恹剦烟珚胭崦淊淹焑焉菸阉殗渰湮傿歅煙硽鄢嫣漹嶖樮醃橪閹閼嬮懨篶懕臙黫黰",
      yán:
        "讠厃延闫严妍芫訁言岩昖沿炏炎郔唌埏姸娫狿莚娮梴盐啱琂硏訮閆阎喦嵓嵒筵綖蜒塩揅楌詽碞蔅羬颜厳虤閻檐顏顔嚴壛巌簷櫩壧巖巗欕礹鹽麣",
      yǎn:
        "夵抁沇乵兖俨兗匽弇衍剡偃厣掞掩眼萒郾酓隁嵃愝扊揜晻棪渰渷琰遃隒椼硽罨裺演褗戭窴蝘魇噞嬐躽縯檿黡厴甗鰋鶠黤儼黬黭龑孍顩鼴巘巚曮魘鼹礹齴黶",
      yàn:
        "厌妟觃牪匽姲彥彦洝砚唁宴晏烻艳覎验偐掞焔猏硏谚隁喭堰敥棪殗焱焰猒硯雁傿椻溎滟豣鳫厭墕暥熖酽鳱嬊谳餍鴈燄諺赝鬳嚈嬮曕鴳酀騐験嚥嬿艶贋軅曣爓醶騴齞鷃灔贗囐觾讌醼饜驗鷰艷灎釅驠灧讞豓豔灩",
      yāng: "央姎抰泱柍殃胦眏秧鸯鉠雵鞅鍈鴦",
      yáng:
        "扬阦阳旸杨炀玚飏佯劷氜疡钖垟徉昜洋羏烊珜眻陽婸崵崸愓揚蛘敭暘楊煬瑒禓瘍諹輰鍚鴹颺鰑霷鸉",
      yǎng: "卬佒咉坱岟养柍炴氧眏痒紻傟勜楧軮慃氱蝆飬養駚懩攁瀁癢礢",
      yàng: "怏柍恙样烊羕楧詇煬様漾鞅樣瀁",
      yāo: "幺夭吆妖枖殀祅約訞喓葽楆腰鴁撽邀鴢",
      yáo:
        "爻尧匋尭肴垚姚峣恌轺倄烑珧皐窕窑铫隃傜堯揺殽谣軺嗂媱徭愮搖摇滧猺遙遥僥摿暚榣瑤瑶銚飖餆嶢嶤徺磘窯窰餚繇謡謠鎐鳐颻蘨邎顤鰩鱙",
      yǎo: "仸宎岆抭杳枖狕苭咬柼眑窅窈舀偠婹崾溔蓔榚闄騕齩鷕",
      yào: "怮穾药烄袎窔筄葯詏愮熎瘧覞靿樂獟箹鹞薬鼼曜燿艞藥矅耀纅鷂讑",
      ye: "亪",
      yē: "吔耶倻椰暍歋窫噎潱擨蠮",
      yé: "爷耶峫捓揶铘爺瑘釾鋣鎁",
      yě: "也冶埜野嘢漜壄",
      yè:
        "业曳页曵邺夜抴亱拽枼洂頁捙晔枽烨液焆谒堨揲殗腋葉墷楪業煠痷馌僷曅燁璍擖擛曄皣瞱緤鄴靥嶪嶫澲謁餣擫曗瞸鍱擪爗礏鎑饁鵺鐷靨驜瓛鸈",
      yi: "弬",
      yī:
        "一乊弌辷衤伊衣医吚壱依祎咿洢悘渏猗畩郼铱壹揖蛜禕嫛漪稦銥嬄撎噫夁瑿鹥繄檹毉醫黟譩鷖黳",
      yí:
        "乁仪匜圯夷彵迆冝宐杝沂诒侇宜怡沶狏狋迤迱饴咦姨峓恞拸柂洟珆瓵荑贻迻宧巸扅栘桋眙胰袘貤痍移萓釶椬羠蛦詒貽遗媐暆椸煕誃跠頉颐飴儀熪箷遺嶬彛彜螔頥頤寲嶷簃顊鮧鴺彞彝謻鏔籎觺讉",
      yǐ:
        "乚乛乙已以扡迆钇佁攺矣苡叕苢迤迱庡舣蚁釔倚扆笖逘酏偯猗崺攲敧旑鈘鉯鳦裿旖輢嬟敼螘檥礒艤蟻顗轙齮",
      yì:
        "乂义亿弋刈忆艺仡匇肊艾议阣亦伇屹异忔芅伿佚劮呓坄役抑杙耴苅译邑佾呭呹妷峄怈怿易枍欥泆炈秇绎衪诣驿俋奕帟帠弈昳枻浂玴疫羿轶唈垼悒挹栺栧欭浥浳益袘袣谊貤勚埶埸悘悥掜殹異羛翊翌萟訳訲豙豛逸釴隿幆敡晹棭殔湙焲焬蛡詍跇軼鄓鈠骮亄兿嗌意溢獈痬睪竩缢義肄裔裛詣勩嫕廙榏潩瘗膉蓺蜴駅億槸毅熠熤熼瘞篒誼镒鹝鹢黓儗劓圛墿嬑嶧憶懌曀殪澺燚瘱瞖穓縊艗薏螠褹寱懝斁曎檍歝燡燱翳翼臆貖鮨癔藝藙贀鎰镱繶繹豷霬鯣鶃鶂鶍瀷蘙議譯醳醷饐囈鐿鷁鷊懿襼驛鷧虉鸃鷾讛齸",
      yīn:
        "囙因阥阴侌垔姻洇茵荫音骃栶欭氤陰凐秵裀铟陻隂喑堙婣愔湮筃絪歅溵禋蒑蔭慇瘖銦磤緸鞇諲霒駰噾濦闉霠齗韾",
      yín:
        "冘乑伒吟圻犾苂斦烎垠泿圁峾狺珢荶訔訚唫婬寅崟崯淫訡银鈝龂滛碒鄞夤蔩銀龈噖殥璌誾嚚檭蟫霪齦鷣",
      yǐn: "廴尹引吲饮粌蚓硍赺淾鈏飲隠靷飮朄輑磤趛檃瘾隱嶾濥縯螾檼蘟櫽癮讔",
      yìn: "廴印茚洕胤荫垽梀堷湚猌飲廕隠飮窨酳慭癊憗憖隱鮣懚",
      yīng:
        "応旲英柍荥偀桜珱莺啨婴媖愥渶绬朠楧焽焸煐瑛嫈碤锳嘤撄甇緓缨罂蝧賏樱璎噟罃褮霙鴬鹦嬰應膺韺甖鹰鶑鶧嚶孆孾攖瀴罌蘡譍櫻瓔礯譻鶯鑍纓蠳鷪軈鷹鸎鸚",
      yíng:
        "夃盁迎茔盈荧浧耺莹営桯萤萦营蛍溁溋萾僌塋嵤楹滢蓥滎潆熒蝇瑩禜蝿嬴營縈螢濙濚濴藀覮謍赢瀅爃蠅鎣巆攍瀛瀠瀯櫿贏灐籝灜籯",
      yǐng: "矨郢浧梬颍颕颖摬影潁瘿穎頴覮巊廮瀴鐛癭",
      yìng: "応映眏暎硬媵膡鞕應瀴鱦",
      yo: "喲",
      yō: "唷喲",
      yōng:
        "拥痈邕庸傭嗈鄘雍墉嫞慵滽槦牅牗銿噰壅擁澭郺镛臃癕雝鏞鳙廱灉饔鱅鷛癰",
      yóng: "喁揘颙顒鰫",
      yǒng: "永甬咏怺泳俑勈勇栐埇悀柡恿惥愑湧硧詠塎嵱彮愹蛹慂踊鲬噰澭踴鯒",
      yòng: "用苚砽蒏醟",
      yōu: "优妋忧攸呦怮泑幽峳浟逌悠羪麀滺憂優鄾嚘懮瀀獶櫌纋耰獿",
      yóu:
        "尢冘尤由甴汼沋犹邮怞油肬怣斿柚疣庮秞莜莤莸郵铀偤蚰訧逰揂游猶遊鱿楢猷鈾鲉輏駀蕕蝣魷輶鮋繇櫾",
      yǒu: "友丣卣苃酉羑栯莠梄聈铕湵楢禉蜏銪槱牖牗黝懮",
      yòu: "又右幼佑佦侑孧泑狖哊囿姷宥峟柚牰祐诱迶唀梎痏蚴亴貁釉酭誘鼬櫾",
      yū: "込扜扝纡迃迂穻陓紆唹淤盓瘀箊",
      yú:
        "丂亐于邘伃余妤扵杅欤玗玙於盂臾衧鱼乻俞兪捓禺竽舁茰虶娛娯娪娱桙狳谀酑馀渔萸釪隃隅雩魚堣堬婾媀媮崳嵎嵛揄楰渝湡畬腴萮逾骬愚楡榆歈牏瑜艅虞觎漁睮窬舆褕歶羭蕍蝓諛雓餘魣嬩懙澞覦踰歟璵螸輿鍝謣髃鮽旟籅騟鯲蘛轝鰅鷠鸆齵",
      yǔ:
        "伛宇屿羽穻俁俣挧禹圄祤偊匬圉庾敔鄅斞萭傴寙楀瑀瘐與語窳頨龉噳嶼懙貐斔穥麌齬",
      yù:
        "肀玉驭圫聿芌芋吾妪忬汩灹饫欥育郁俞昱狱禺秗茟俼叞峪彧栯浴砡钰预域堉悆惐捥欲淢淯痏粖翑袬谕逳阈喅喩喻媀寓庽御棛棜棫焴琙琟矞硢硲裕遇飫馭鹆奧愈滪煜稢罭艈蒮蓣誉鈺預僪嫗嶎戫毓澚獄瘉緎蜟蜮語輍銉隩慾潏熨稶蓹薁豫遹鋊鳿澦燏燠蕷藇諭錥閾鴧鴪鴥儥礇禦魊鹬癒礖礜篽醧鵒櫲饇蘌譽鐭霱雤欎驈鬻籞鱊鷸鸒欝軉鬰鬱灪籲爩",
      yuān:
        "夗囦肙鸢剈冤弲悁眢鸳寃涴渆渁渊渕惌淵葾棩蒬蜎裷鹓箢鳶蜵駌鋺鴛嬽鵷灁鼘鼝",
      yuán:
        "元円贠邧园妧沅芫杬茒垣爰貟原員圆笎蚖袁厡酛傆喛圎媛援湲猨缘鈨鼋園圓塬媴嫄楥溒源猿蒝榞榬辕緣縁蝝蝯褤魭圜橼羱薗螈黿謜轅鎱櫞邍騵鶢鶰厵",
      yuǎn: "盶逺遠薳鋺",
      yuàn: "夗妴苑怨院垸衏傆媛掾瑗禐愿裫褑噮願",
      yuē: "曰曱扚約啘箹矱",
      yuě: "哕噦",
      yuè:
        "月戉兊刖兌妜岄抈礿岳枂泧玥恱栎哾悅悦蚏蚎軏钺阅捳跀跃粤越鈅楽粵鉞說説樂閲閱嬳樾篗髺嶽臒龠擽矆櫟籆瀹蘥黦爚禴趯躍籥鑰鸑籰鸙",
      yūn: "涒缊蒀暈氲煴蒕氳熅煾奫緼蝹縕赟馧贇",
      yún:
        "云勻匀伝囩妘抣沄纭芸昀畇眃秐貟郧員涢紜耘耺鄖雲愪溳筠筼蒷熉澐蕓鋆橒篔縜",
      yǔn: "允阭夽抎狁玧陨荺殒喗鈗隕煴殞熅馻磒賱霣齫齳",
      yùn:
        "孕贠运枟郓恽貟員菀鄆酝傊惲愠缊運慍暈榅煇腪韫韵褞熨緷緼蕰蕴縕薀醖醞餫藴鞰韗韞蘊韻",
      zā: "帀匝沞迊咂拶桚紥紮鉔噈魳臜臢",
      zá: "杂沯砸偺喒韴雑襍雜囃囋囐雥",
      zǎ: "咋偺喒",
      zāi: "災灾甾哉栽烖畠菑渽溨睵賳",
      zǎi: "宰崽",
      zài: "再在扗抂洅傤載酨儎縡",
      zān: "兂撍糌橵篸簪簮鵤鐕鐟",
      zán: "偺喒",
      zǎn: "拶昝桚寁揝噆撍儧攅儹攢趱趲",
      zàn: "暂暫賛赞錾鄼濽蹔酂瓉贊鏩鏨瓒酇囋灒讃瓚禶穳襸讚饡",
      zāng: "匨牂羘赃賍臧賘贓髒贜",
      zǎng: "驵駔",
      zàng: "奘弉脏塟葬臧蔵銺臓臟",
      zāo: "傮遭糟蹧醩",
      záo: "凿鑿",
      zǎo: "早枣栆蚤棗璅澡璪薻藻",
      zào: "灶皁皂唣唕造梍喿慥煰艁噪簉燥竃竈譟趮躁",
      zé:
        "则択沢咋泎责迮則唶啧帻笮舴責溭滜睪矠飵嘖嫧幘箦蔶樍歵諎赜擇澤皟瞔簀耫礋襗謮賾蠌灂齚齰鸅",
      zè: "仄庂汄昃昗捑側崱稄",
      zéi: "贼戝賊鲗蠈鰂鱡",
      zēn: "撍",
      zěn: "怎",
      zèn: "谮譖",
      zēng: "曽増鄫增憎缯橧璔縡矰磳竲罾繒譄鱛",
      zěng: "",
      zèng: "锃綜缯鋥熷甑赠繒鬵贈囎",
      zi: "嗭",
      zī:
        "孖孜甾茊兹呲咨姕姿茲栥玆畠紎赀资崰淄秶缁菑谘赼嗞孳嵫椔湽滋粢葘辎鄑孶禌觜訾貲資趑锱稵緕緇鈭镃龇輜鼒澬薋諮趦輺錙髭鲻鍿鎡璾頾頿鯔鶅齍纃鰦齜",
      zí: "蓻",
      zǐ: "子吇芓姉姊杍沝矷秄胏呰秭籽耔茈虸笫梓釨啙紫滓訿榟橴",
      zì: "字自芓秄洓茡荢倳剚恣牸渍眦眥菑胔胾漬",
      zōng:
        "宗枞倧骔堫嵏嵕惾棕猣腙葼朡椶潈稯綜緃樅熧緵翪蝬踨踪磫繌鍐豵蹤騌鬃騣鬉鬷鯮鯼鑁",
      zǒng: "总倊偬捴惣揔搃焧傯蓗嵸摠潀稯総熜緫縂燪縱總",
      zòng: "昮疭從猔碂粽潨糉緵瘲縦縱繌糭",
      zōu: "邹驺诹郰陬掫菆棸棷鄒箃緅諏鄹鲰鯫黀騶齱齺",
      zǒu: "赱走搊鯐",
      zòu: "奏揍媰楱",
      zū: "怚柤租菹葅蒩",
      zú: "卆足倅哫崒崪族椊稡箤踤镞鎐鏃",
      zǔ: "诅阻组俎柤爼珇祖唨組詛靻鎺",
      zù: "",
      zuān: "鉆劗躜鑚躦鑽",
      zuǎn: "繤缵纂纉籫纘",
      zuàn: "揝篹賺攥",
      zuī: "厜朘嗺樶蟕纗",
      zuí: "",
      zuǐ: "咀觜嶊嘴噿濢璻",
      zuì: "冣栬絊酔晬最祽睟稡罪辠槜酻蕞醉嶵檇鋷錊檌欈",
      zūn: "尊噂墫嶟遵樽繜罇鶎鐏鳟鱒鷷",
      zǔn: "僔撙繜譐",
      zùn: "拵捘栫袸銌瀳",
      zuo: "咗",
      zuō: "嘬穝",
      zuó: "苲昨柮秨莋捽笮稓筰鈼",
      zuǒ: "左佐繓",
      zuò: "作坐阼岝岞怍侳柞祚胙唑座袏做葄葃酢蓙飵諎糳",
      zhā: "吒咋抯挓柤査哳紥偧紮揸渣楂飵劄摣潳皶樝觰皻譇齄齇",
      zhá: "札甴軋闸剳蚻铡喋煠牐閘劄箚霅耫鍘譗",
      zhǎ: "厏拃苲眨砟鲊鲝諎鮓鮺",
      zhà: "乍吒灹诈怍咤奓柞宱痄蚱喥溠詐搾鲊榨鮓醡",
      zhāi: "亝哜夈粂捚斋側斎摘榸齊嚌擿齋",
      zhái: "厇宅翟擇檡",
      zhǎi: "厏抧窄鉙",
      zhài: "责债砦責債寨瘵",
      zhān:
        "岾怗枬沾毡旃栴粘蛅飦惉詀趈詹閚谵鳽噡嶦薝邅霑氈氊瞻覱鹯旜譫饘鳣驙魙鱣鸇",
      zhán: "讝",
      zhǎn: "斩飐展盏斬琖搌盞嶃嶄榐辗颭嫸醆橏輾皽黵",
      zhàn: "佔战栈桟站偡绽菚嵁棧湛戦碊僝綻嶘戰虥虦覱轏譧欃蘸驏",
      zhāng: "弡张張章傽鄣嫜彰慞漳獐粻蔁遧暲樟璋餦蟑鏱騿鱆麞",
      zhǎng: "仉仧兏長掌漲幥礃鞝",
      zhàng: "丈仗扙帐杖胀账粀帳涱脹痮障墇嶂幛漲賬瘬瘴瞕",
      zhāo: "佋钊妱巶招昭炤釗啁釽鉊鳭駋鍣皽",
      zháo: "",
      zhǎo: "爫找沼菬瑵",
      zhào: "兆诏枛垗炤狣赵笊肁啅旐棹罀詔照罩箌肈肇趙曌濯燳鮡櫂瞾羄",
      zhe: "嗻",
      zhē: "嗻嫬遮螫",
      zhé:
        "乇厇扸杔歽矺砓籷虴哲埑粍袩啠悊晢晣辄喆棏聑蛰詟搩蜇谪馲摺輒慹磔輙銸辙蟄嚞謫謺鮿轍讁讋",
      zhě: "者乽啫锗赭踷褶鍺襵",
      zhè: "柘浙這淛嗻蔗樜鹧蟅鷓",
      zhèi: "",
      zhēn:
        "贞针侦侲帧枮浈珎珍胗貞帪桢眞真砧祯針偵酙寊幀揕湞葴遉嫃搸斟椹楨溱獉甄禎蒖蓁鉁榛槙殝瑧碪禛潧箴樼澵臻薽錱轃鍼籈鱵",
      zhén: "",
      zhěn: "诊抮枕姫弫昣轸屒畛疹眕袗紾聄萙竧裖覙診軫嫃缜槙稹駗縝縥辴鬒黰",
      zhèn: "圳阵纼甽侲挋陣鸩振朕栚紖桭眹赈塦揕絼榐瑱誫賑鋴镇震鴆鎮鎭",
      zhēng:
        "凧争佂姃征怔爭糽埩峥炡狰烝眐脀钲埥崝崢掙猙睁聇铮媜揁筝徰睜蒸踭鉦徴箏綪錚徵篜鬇癥鏳",
      zhěng: "氶抍糽拯掟晸愸撜整",
      zhèng: "氶证诤郑政徎钲掙幁証塣諍靕鄭憕鴊證",
      zhī:
        "之支卮汁芝巵汥呮泜肢栀祗秓胑胝衼倁栺疷祬脂隻梔菭椥臸搘稙綕榰蜘馶憄鳷鴲織鼅蘵",
      zhí:
        "执侄妷直秇姪郦値值聀釞埴執淔职戠植犆禃絷臷跖瓡摕摭馽嬂慹漐潪踯樴膱縶職蟙蹠軄躑",
      zhǐ:
        "夂止凪劧旨阯坁址帋扺汦沚纸芷坧抧杫祇祉茋咫恉指枳洔砋秖衹轵淽疻紙蚔訨趾軹黹禔筫絺酯墌徴徵槯藢襧",
      zhì:
        "至芖坁志忮扻豸制厔垁帙帜斦治炙质迣郅俧峙庢庤挃柣栉洷祑陟娡徏挚捗晊桎歭狾秩致袟贽轾乿偫剬徝掷梽楖猘畤痓痔眰秲秷窒紩翐袠觗貭铚鸷傂崻彘智滞痣蛭骘寘廌搱滍稚筫置跱輊锧雉墆滯潌疐瘈聜製覟誌銍幟憄摨摯潪熫稺膣觯質踬銴鋕擳旘瀄璏緻隲駤鴙儨劕懥擲擿櫛穉螲懫織贄櫍瓆觶騭鯯礩豑鶨騺驇躓鷙鑕豒",
      zhōng:
        "夂伀汷刣妐彸忪忠泈炂终柊盅衳钟舯衷終鈡幒蔠蜙锺銿螤鴤螽鍾斔鼨蹱鐘籦",
      zhǒng: "肿冢喠尰塚歱煄腫瘇種徸踵穜",
      zhòng: "仲众妕狆祌茽衶蚛偅眾堹媑筗衆種緟諥",
      zhōu:
        "州舟诌侜周洲炿诪烐珘辀郮啁婤徟掫淍矪週鸼喌赒輈翢銂賙輖霌駲嚋盩謅鵃騆譸",
      zhóu: "妯軸碡",
      zhǒu: "肘帚疛胕菷晭睭箒鯞",
      zhòu:
        "纣伷呪咒宙绉冑咮昼紂胄荮皱酎晝粙椆葤詋軸甃僽皺駎噣縐繇薵骤籀籕籒驟",
      zhū:
        "侏诛邾洙茱株珠诸猪硃秼袾铢絑蛛誅跦槠潴蕏蝫銖橥諸豬駯鮢鴸瀦藸鼄櫧櫫鯺蠩",
      zhú: "朮竹竺炢笁茿烛窋逐笜舳逫瘃蓫敱磩築篴斀燭蠋躅鱁劚孎灟斸曯欘爥蠾钃",
      zhǔ: "丶主劯宔拄砫罜陼帾渚煑煮詝褚嘱濐燝麈瞩屬囑鸀矚",
      zhù:
        "伫佇住纻芧苎坾拀杼注苧贮迬驻乼壴柱柷殶炷祝疰眝砫祩竚莇紵紸羜蛀尌嵀註貯跓軴铸筯鉒飳馵嗻墸箸翥樦澍鋳駐築篫麆簗櫡鑄",
      zhuā: "抓挝撾檛膼簻髽",
      zhuǎ: "爫",
      zhuāi: "拽",
      zhuǎi: "跩",
      zhuài: "拽睉",
      zhuān: "专叀専恮砖耑專剸鄟塼嫥漙瑼甎磗膞颛磚諯篿蟤顓鱄",
      zhuǎn: "孨転膞竱轉",
      zhuàn: "灷啭転堟蒃傳瑑腞僎僝赚撰篆馔篹縳襈賺簨贃譔饌囀籑",
      zhuāng: "妆庄妝庒荘娤桩莊梉湷粧装裝樁糚",
      zhuǎng: "奘",
      zhuàng: "壮壯状狀壵焋僮漴撞戅戆戇",
      zhuī: "隹骓锥錐騅鵻",
      zhuǐ: "沝",
      zhuì: "坠笍奞娷缀隊惴甀缒腏畷硾膇墜綴赘縋諈醊錣礈贅鑆",
      zhūn: "圫宒忳迍肫窀谆啍諄衠",
      zhǔn: "准埻凖準稕綧",
      zhùn: "旽訰稕綧",
      zhuō: "拙炪倬捉桌梲棁涿淖棳棹焯窧槕穛鐯穱",
      zhuó:
        "圴彴汋犳灼卓叕妰茁斫浊丵剢捔浞烵诼酌啄啅娺聉斱斮晫椓琸硺窡罬蓔墌撯擆斲禚劅諁諑趠鋜噣濁燋篧擢斀斵濯藋櫡謶镯繳鵫灂蠗鐲籗鷟蠿籱",
      zhuò: "",
      "chǎng,ān,hàn": "厂",
      "dīng,zhēng": "丁",
      "bǔ,bo": "卜",
      "jǐ,jī": "几",
      "le,liǎo": "了",
      "gān,gàn": "干",
      "dà,dài,tài": "大",
      "yǔ,yù,yú": "与",
      "shàng,shǎng": "上",
      "wàn,mò": "万",
      "gè,gě": "个各",
      "me,mó,ma,yāo": "么",
      "guǎng,ān": "广",
      "wáng,wú": "亡",
      "nǚ,rǔ": "女",
      "chā,chá,chǎ": "叉",
      "wáng,wàng": "王",
      "fū,fú": "夫",
      "zhā,zā,zhá": "扎",
      "bù,fǒu": "不",
      "qū,ōu": "区",
      "chē,jū": "车",
      "qiè,qiē": "切",
      "wǎ,wà": "瓦",
      "tún,zhūn": "屯",
      "shǎo,shào": "少",
      "zhōng,zhòng": "中",
      "nèi,nà": "内",
      "jiàn,xiàn": "见",
      "cháng,zhǎng": "长",
      "shén,shí": "什",
      "piàn,piān": "片",
      "pú,pū": "仆",
      "huà,huā": "化",
      "chóu,qiú": "仇",
      "zhuǎ,zhǎo": "爪",
      "jǐn,jìn": "仅",
      "fù,fǔ": "父",
      "cóng,zòng": "从",
      "fēn,fèn": "分",
      "shì,zhī": "氏",
      "fēng,fěng": "风",
      "gōu,gòu": "勾",
      "liù,lù": "六",
      "dǒu,dòu": "斗",
      "wèi,wéi": "为",
      "chǐ,chě": "尺",
      "yǔ,yú": "予",
      "dǎ,dá": "打",
      "zhèng,zhēng": "正症挣",
      "bā,pá": "扒",
      "jié,jiē": "节结",
      "shù,shú,zhú": "术",
      "kě,kè": "可",
      "shí,dàn": "石",
      "kǎ,qiǎ": "卡",
      "běi,bèi": "北",
      "zhàn,zhān": "占",
      "qiě,jū": "且",
      "yè,xié": "叶",
      "hào,háo": "号",
      "zhī,zhǐ": "只",
      "dāo,tāo": "叨",
      "zǎi,zǐ,zī": "仔",
      "lìng,líng,lǐng": "令",
      "lè,yuè": "乐",
      "jù,gōu": "句",
      "chù,chǔ": "处",
      "tóu,tou": "头",
      "níng,nìng,zhù": "宁",
      "zhào,shào": "召",
      "fā,fà": "发",
      "tái,tāi": "台苔",
      "káng,gāng": "扛",
      "dì,de": "地",
      "sǎo,sào": "扫",
      "chǎng,cháng": "场",
      "pǔ,pò,pō,piáo": "朴",
      "guò,guo,guō": "过",
      "yā,yà": "压",
      "yǒu,yòu": "有",
      "kuā,kuà": "夸",
      "xié,yá,yé,yú,xú": "邪",
      "jiá,jiā,gā,xiá": "夹",
      "huà,huá": "划",
      "dāng,dàng": "当",
      "tù,tǔ": "吐",
      "xià,hè": "吓",
      "tóng,tòng": "同",
      "qū,qǔ": "曲",
      "ma,má,mǎ": "吗",
      "qǐ,kǎi": "岂",
      "zhū,shú": "朱",
      "chuán,zhuàn": "传",
      "xiū,xǔ": "休",
      "rèn,rén": "任",
      "huá,huà,huā": "华",
      "jià,jiè,jie": "价",
      "fèn,bīn": "份",
      "yǎng,áng": "仰",
      "xiě,xuè": "血",
      "sì,shì": "似",
      "háng,xíng": "行",
      "huì,kuài": "会",
      "hé,gě": "合",
      "chuàng,chuāng": "创",
      "chōng,chòng": "冲",
      "qí,jì,zī,zhāi": "齐",
      "yáng,xiáng": "羊",
      "bìng,bīng": "并",
      "hàn,hán": "汗",
      "tāng,shāng": "汤",
      "xīng,xìng": "兴",
      "xǔ,hǔ": "许",
      "lùn,lún": "论",
      "nà,nǎ,nèi,nā": "那",
      "jìn,jǐn": "尽",
      "sūn,xùn": "孙",
      "xì,hū": "戏",
      "hǎo,hào": "好",
      "tā,jiě": "她",
      "guān,guàn": "观冠",
      "hóng,gōng": "红",
      "xiān,qiàn": "纤",
      "jì,jǐ": "纪济",
      "yuē,yāo": "约",
      "nòng,lòng": "弄",
      "yuǎn,yuàn": "远",
      "huài,pēi,pī,péi": "坏",
      "zhé,shé,zhē": "折",
      "qiǎng,qiāng,chēng": "抢",
      "ké,qiào": "壳",
      "fāng,fáng": "坊",
      "bǎ,bà": "把",
      "gān,gǎn": "杆",
      "sū,sù": "苏",
      "gàng,gāng": "杠",
      "gèng,gēng": "更",
      "lì,lí": "丽",
      "hái,huán": "还",
      "fǒu,pǐ": "否",
      "xiàn,xuán": "县",
      "zhù,chú": "助",
      "ya,yā": "呀",
      "chǎo,chāo": "吵",
      "yuán,yún,yùn": "员",
      "ba,bā": "吧",
      "bié,biè": "别",
      "dīng,dìng": "钉",
      "gū,gù": "估",
      "hé,hē,hè": "何",
      "tǐ,tī,bèn": "体",
      "bó,bǎi,bà": "伯",
      "yòng,yōng": "佣",
      "fó,fú,bì,bó": "佛",
      "dù,dǔ": "肚",
      "guī,jūn,qiū": "龟",
      "jiǎo,jué": "角",
      "tiáo,tiāo": "条",
      "xì,jì": "系",
      "yìng,yīng": "应",
      "zhè,zhèi": "这",
      "jiān,jiàn": "间监",
      "mēn,mèn": "闷",
      "dì,tì,tuí": "弟",
      "shā,shà": "沙",
      "shà,shā": "煞",
      "méi,mò": "没",
      "shěn,chén": "沈",
      "shí,zhì": "识",
      "niào,suī": "尿",
      "wěi,yǐ": "尾",
      "ē,ā": "阿",
      "jìn,jìng": "劲",
      "zòng,zǒng": "纵",
      "wén,wèn": "纹",
      "mǒ,mò,mā": "抹",
      "dān,dàn,dǎn": "担",
      "chāi,cā": "拆",
      "jū,gōu": "拘",
      "lā,lá": "拉",
      "bàn,pàn": "拌",
      "zé,zhái": "择",
      "qí,jī": "其奇",
      "ruò,rě": "若",
      "píng,pēng": "苹",
      "zhī,qí": "枝",
      "guì,jǔ": "柜",
      "sàng,sāng": "丧",
      "cì,cī": "刺",
      "yǔ,yù": "雨语",
      "bēn,bèn": "奔",
      "qī,qì": "妻",
      "zhuǎn,zhuàn,zhuǎi": "转",
      "xiē,suò": "些",
      "ne,ní": "呢",
      "tiě,tiē,tiè,": "帖",
      "lǐng,líng": "岭",
      "zhī,zhì": "知织",
      "hé,hè,huó,huò,hú": "和",
      "gòng,gōng": "供共",
      "wěi,wēi": "委",
      "cè,zè,zhāi": "侧",
      "pò,pǎi": "迫",
      "de,dì,dí": "的",
      "cǎi,cài": "采",
      "fú,fù": "服",
      "dǐ,de": "底",
      "jìng,chēng": "净",
      "juàn,juǎn": "卷",
      "quàn,xuàn": "券",
      "dān,shàn,chán": "单",
      "qiǎn,jiān": "浅",
      "xiè,yì": "泄",
      "pō,bó": "泊",
      "pào,pāo": "泡",
      "ní,nì": "泥",
      "zé,shì": "泽",
      "kōng,kòng,kǒng": "空",
      "láng,làng": "郎",
      "xiáng,yáng": "详",
      "lì,dài": "隶",
      "shuā,shuà": "刷",
      "jiàng,xiáng": "降",
      "cān,shēn,cēn,sān": "参",
      "dú,dài": "毒",
      "kuà,kū": "挎",
      "dǎng,dàng": "挡",
      "kuò,guā": "括",
      "shí,shè": "拾",
      "tiāo,tiǎo": "挑",
      "shèn,shén": "甚",
      "xiàng,hàng": "巷",
      "nán,nā": "南",
      "xiāng,xiàng": "相",
      "chá,zhā": "查",
      "bǎi,bó,bò": "柏",
      "yào,yāo": "要",
      "yán,yàn": "研",
      "qì,qiè": "砌",
      "bèi,bēi": "背",
      "shěng,xǐng": "省",
      "xiāo,xuē": "削",
      "hǒng,hōng,hòng": "哄",
      "mào,mò": "冒",
      "yǎ,yā": "哑",
      "sī,sāi": "思",
      "mǎ,mā,mà": "蚂",
      "huá,huā": "哗",
      "yè,yàn,yān": "咽",
      "zán,zǎ": "咱",
      "hā,hǎ,hà": "哈",
      "nǎ,něi,na,né": "哪",
      "hāi,ké": "咳",
      "gǔ,gū": "骨",
      "gāng,gàng": "钢",
      "yào,yuè": "钥",
      "kàn,kān": "看",
      "zhòng,zhǒng,chóng": "种",
      "biàn,pián": "便",
      "zhòng,chóng": "重",
      "xìn,shēn": "信",
      "zhuī,duī": "追",
      "dài,dāi": "待",
      "shí,sì,yì": "食",
      "mài,mò": "脉",
      "jiāng,jiàng": "将浆",
      "dù,duó": "度",
      "qīn,qìng": "亲",
      "chà,chā,chāi,cī": "差",
      "zhà,zhá": "炸",
      "pào,páo,bāo": "炮",
      "sǎ,xǐ": "洒",
      "xǐ,xiǎn": "洗",
      "jué,jiào": "觉",
      "biǎn,piān": "扁",
      "shuō,shuì,yuè": "说",
      "lǎo,mǔ": "姥",
      "gěi,jǐ": "给",
      "luò,lào": "络",
      "zǎi,zài": "载",
      "mái,mán": "埋",
      "shāo,shào": "捎稍",
      "dū,dōu": "都",
      "ái,āi": "挨",
      "mò,mù": "莫",
      "è,wù,ě,wū": "恶",
      "xiào,jiào": "校",
      "hé,hú": "核",
      "yūn,yùn": "晕",
      "huàng,huǎng": "晃",
      "ài,āi": "唉",
      "ā,á,ǎ,à,a": "啊",
      "bà,ba,pí": "罢",
      "zuàn,zuān": "钻",
      "qiān,yán": "铅",
      "chéng,shèng": "乘",
      "mì,bì": "秘泌",
      "chēng,chèn,chèng": "称",
      "dào,dǎo": "倒",
      "tǎng,cháng": "倘",
      "chàng,chāng": "倡",
      "chòu,xiù": "臭",
      "shè,yè,yì": "射",
      "gē,gé": "胳搁",
      "shuāi,cuī": "衰",
      "liáng,liàng": "凉量",
      "chù,xù": "畜",
      "páng,bàng": "旁磅",
      "zhǎng,zhàng": "涨",
      "yǒng,chōng": "涌",
      "qiāo,qiǎo": "悄",
      "jiā,jia,jie": "迦家",
      "dú,dòu": "读",
      "shàn,shān": "扇",
      "shān,shàn": "苫",
      "bèi,pī": "被",
      "tiáo,diào,zhōu": "调",
      "bō,bāo": "剥",
      "néng,nài": "能",
      "nán,nàn,nuó": "难",
      "pái,pǎi": "排",
      "jiào,jiāo": "教",
      "jù,jū": "据",
      "zhù,zhuó,zhe": "著",
      "jūn,jùn": "菌",
      "lè,lēi": "勒",
      "shāo,sào": "梢",
      "fù,pì": "副",
      "piào,piāo": "票",
      "shèng,chéng": "盛",
      "què,qiāo,qiǎo": "雀",
      "chí,shi": "匙",
      "mī,mí": "眯",
      "la,lā": "啦",
      "shé,yí": "蛇",
      "lèi,léi,lěi": "累",
      "zhǎn,chán": "崭",
      "quān,juàn,juān": "圈",
      "lóng,lǒng": "笼",
      "dé,děi,de": "得",
      "jiǎ,jià": "假",
      "māo,máo": "猫",
      "xuán,xuàn": "旋",
      "zhe,zhuó,zháo,zhāo": "着",
      "lǜ,shuài": "率",
      "gài,gě,hé": "盖",
      "lín,lìn": "淋",
      "qú,jù": "渠",
      "jiàn,jiān": "渐溅",
      "hùn,hún": "混",
      "sù,xiǔ,xiù": "宿",
      "tán,dàn": "弹",
      "yǐn,yìn": "隐",
      "jǐng,gěng": "颈",
      "lǜ,lù": "绿",
      "qū,cù": "趋",
      "tí,dī,dǐ": "提",
      "jiē,qì": "揭",
      "lǒu,lōu": "搂",
      "qī,jī": "期",
      "sàn,sǎn": "散",
      "gě,gé": "葛",
      "zhāo,cháo": "朝",
      "luò,là,lào": "落",
      "yǐ,yī": "椅",
      "gùn,hùn": "棍",
      "zhí,shi": "殖",
      "xià,shà": "厦",
      "liè,liě": "裂",
      "jǐng,yǐng": "景",
      "pēn,pèn": "喷",
      "pǎo,páo": "跑",
      "hē,hè,yè": "喝",
      "pù,pū": "铺",
      "zhù,zhú": "筑",
      "dá,dā": "答",
      "bǎo,bǔ,pù": "堡",
      "ào,yù": "奥",
      "fān,pān": "番",
      "là,xī": "腊",
      "gǎng,jiǎng": "港",
      "céng,zēng": "曾",
      "yú,tōu": "愉",
      "qiáng,qiǎng,jiàng": "强",
      "shǔ,zhǔ": "属",
      "zhōu,yù": "粥",
      "shè,niè": "摄",
      "tián,zhèn": "填",
      "méng,mēng,měng": "蒙",
      "jìn,jīn": "禁",
      "lù,liù": "碌",
      "tiào,táo": "跳",
      "é,yǐ": "蛾",
      "jiě,jiè,xiè": "解",
      "shù,shǔ,shuò": "数",
      "liū,liù": "溜",
      "sāi,sài,sè": "塞",
      "pì,bì": "辟",
      "fèng,féng": "缝",
      "piě,piē": "撇",
      "mó,mú": "模",
      "bǎng,bàng": "榜",
      "shang,cháng": "裳",
      "xiān,xiǎn": "鲜",
      "yí,nǐ": "疑",
      "gāo,gào": "膏",
      "piāo,piào,piǎo": "漂",
      "suō,sù": "缩",
      "qù,cù": "趣",
      "sā,sǎ": "撒",
      "tàng,tāng": "趟",
      "héng,hèng": "横",
      "mán,mén": "瞒",
      "bào,pù": "暴",
      "mó,mā": "摩",
      "hú,hū,hù": "糊",
      "pī,pǐ": "劈",
      "yàn,yān": "燕",
      "báo,bó,bò": "薄",
      "mó,mò": "磨",
      "jiǎo,zhuó": "缴",
      "cáng,zàng": "藏",
      "fán,pó": "繁",
      "bì,bei": "臂",
      "chàn,zhàn": "颤",
      "jiāng,qiáng": "疆",
      "jiáo,jué,jiào": "嚼",
      "rǎng,rāng": "嚷",
      "lù,lòu": "露",
      "náng,nāng": "囊",
      "hāng,bèn": "夯",
      "āo,wā": "凹",
      "féng,píng": "冯",
      "xū,yù": "吁",
      "lèi,lē": "肋",
      "lūn,lún": "抡",
      "jiè,gài": "芥",
      "xīn,xìn": "芯",
      "chā,chà": "杈",
      "xiāo,xiào": "肖",
      "zhī,zī": "吱",
      "ǒu,ōu,òu": "呕",
      "nà,nè": "呐",
      "qiàng,qiāng": "呛",
      "tún,dùn": "囤",
      "kēng,háng": "吭",
      "diàn,tián": "佃",
      "sì,cì": "伺",
      "diàn,tián,shèng": "甸",
      "páo,bào": "刨",
      "duì,ruì,yuè": "兑",
      "kē,kě": "坷",
      "tuò,tà,zhí": "拓",
      "fú,bì": "拂",
      "nǐng,níng,nìng": "拧",
      "ào,ǎo,niù": "拗",
      "kē,hē": "苛",
      "yān,yǎn": "奄",
      "hē,a,kē": "呵",
      "gā,kā": "咖",
      "jiǎo,yáo": "侥",
      "chà,shā": "刹",
      "nüè,yào": "疟",
      "máng,méng": "氓",
      "gē,yì": "疙",
      "jǔ,jù": "沮",
      "zú,cù": "卒",
      "wǎn,yuān": "宛",
      "mí,mǐ": "弥",
      "qì,qiè,xiè": "契",
      "xié,jiā": "挟",
      "duò,duǒ": "垛",
      "zhà,shān,shi,cè": "栅",
      "bó,bèi": "勃",
      "zhóu,zhòu": "轴",
      "liē,liě,lié,lie": "咧",
      "yo,yō": "哟",
      "qiào,xiào": "俏",
      "hóu,hòu": "侯",
      "píng,bǐng": "屏",
      "nà,nuó": "娜",
      "pá,bà": "耙",
      "qī,xī": "栖",
      "jiǎ,gǔ": "贾",
      "láo,lào": "唠",
      "bàng,bèng": "蚌",
      "gōng,zhōng": "蚣",
      "li,lǐ,lī": "哩",
      "juè,jué": "倔",
      "yīn,yān,yǐn": "殷",
      "wō,guō": "涡",
      "lào,luò": "烙",
      "niǎn,niē": "捻",
      "yè,yē": "掖",
      "chān,xiān,càn,shǎn": "掺",
      "dǎn,shàn": "掸",
      "fēi,fěi": "菲",
      "qián,gān": "乾",
      "shuò,shí": "硕",
      "luō,luó,luo": "啰",
      "hǔ,xià": "唬",
      "dāng,chēng": "铛",
      "xiǎn,xǐ": "铣",
      "jiǎo,jiáo": "矫",
      "kuǐ,guī": "傀",
      "jì,zhài": "祭",
      "tǎng,chǎng": "淌",
      "chún,zhūn": "淳",
      "wèi,yù": "尉",
      "duò,huī": "堕",
      "chuò,chāo": "绰",
      "bēng,běng,bèng": "绷",
      "zōng,zèng": "综",
      "zhuó,zuó": "琢",
      "chuǎi,chuài,chuāi,tuán,zhuī": "揣",
      "péng,bāng": "彭",
      "zhuī,chuí": "椎",
      "léng,lēng,líng": "棱",
      "qiào,qiáo": "翘",
      "zhā,chā": "喳",
      "há,gé": "蛤",
      "qiàn,kàn": "嵌",
      "yān,ā": "腌",
      "dūn,duì": "敦",
      "kuì,huì": "溃",
      "sāo,sǎo": "骚",
      "kǎi,jiē": "楷",
      "pín,bīn": "频",
      "liú,liù": "馏",
      "nì,niào": "溺",
      "jiǎo,chāo": "剿",
      "áo,āo": "熬",
      "màn,wàn": "蔓",
      "chá,chā": "碴",
      "xūn,xùn": "熏",
      "da,dá": "瘩",
      "tuì,tùn": "褪",
      "liáo,liāo": "撩",
      "cuō,zuǒ": "撮",
      "cháo,zhāo": "嘲",
      "hēi,mò": "嘿",
      "zhuàng,chuáng": "幢",
      "jī,qǐ": "稽",
      "biě,biē": "瘪",
      "liáo,lào,lǎo": "潦",
      "chéng,dèng": "澄",
      "lèi,léi": "擂",
      "mò,má": "蟆",
      "liáo,liǎo": "燎",
      "liào,liǎo": "瞭",
      "sào,sāo": "臊",
      "mí,méi": "糜",
      "huò,huō,huá": "豁",
      "pù,bào": "瀑",
      "zǎn,cuán": "攒",
      "bò,bǒ": "簸",
      "bó,bù": "簿"
    };
  },
  function(n, e, t) {
    "use strict";
    const i = t(13),
      o = {
        NORMAL: 0,
        TONE: 1,
        TONE2: 2,
        TO3NE: 5,
        INITIALS: 3,
        FIRST_LETTER: 4
      },
      r = { style: o.TONE, segment: !1, heteronym: !1 },
      h = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,r,zh,ch,sh,z,c,s".split(","),
      a = t(14),
      u = new RegExp("([" + Object.keys(a).join("") + "])", "g"),
      c = /([aeoiuvnm])([0-4])$/;
    class g {
      constructor(n) {
        this._dict = n;
      }
      convert(n, e) {
        if ("string" != typeof n) return [];
        e = i({}, r, e);
        let t = [],
          o = "";
        for (let i, r, h = 0, a = n.length; h < a; h++)
          (i = (r = n[h]).charCodeAt(0)),
            this._dict[i]
              ? (o.length > 0 && (t.push([o]), (o = "")),
                t.push(this.single_pinyin(r, e)))
              : (o += r);
        return o.length > 0 && (t.push([o]), (o = "")), t;
      }
      single_pinyin(n, e) {
        if ("string" != typeof n) return [];
        if (1 !== n.length) return this.single_pinyin(n.charAt(0), e);
        let t = n.charCodeAt(0);
        if (!this._dict[t]) return [n];
        let i = this._dict[t].split(",");
        if (!e.heteronym) return [g.toFixed(i[0], e.style)];
        let o = {},
          r = [];
        for (let n, t = 0, h = i.length; t < h; t++)
          (n = g.toFixed(i[t], e.style)),
            o.hasOwnProperty(n) || ((o[n] = n), r.push(n));
        return r;
      }
      static toFixed(n, e) {
        let t,
          i,
          r = "";
        switch (e) {
          case o.INITIALS:
            return (function(n) {
              for (let e = 0, t = h.length; e < t; e++)
                if (0 === n.indexOf(h[e])) return h[e];
              return "";
            })(n);
          case o.FIRST_LETTER:
            return (
              (t = n.charAt(0)), a.hasOwnProperty(t) && (t = a[t].charAt(0)), t
            );
          case o.NORMAL:
            return n.replace(u, function(n, e) {
              return a[e].replace(c, "$1");
            });
          case o.TO3NE:
            return n.replace(u, function(n, e) {
              return a[e];
            });
          case o.TONE2:
            return (
              (i = n.replace(u, function(n, e) {
                return (r = a[e].replace(c, "$2")), a[e].replace(c, "$1");
              })) + r
            );
          case o.TONE:
          default:
            return n;
        }
      }
      compare(n, e) {
        const t = this.convert(n, r),
          i = this.convert(e, r);
        return String(t).localeCompare(String(i));
      }
      static get STYLE_NORMAL() {
        return o.NORMAL;
      }
      static get STYLE_TONE() {
        return o.TONE;
      }
      static get STYLE_TONE2() {
        return o.TONE2;
      }
      static get STYLE_TO3NE() {
        return o.TO3NE;
      }
      static get STYLE_INITIALS() {
        return o.INITIALS;
      }
      static get STYLE_FIRST_LETTER() {
        return o.FIRST_LETTER;
      }
      static get DEFAULT_OPTIONS() {
        return r;
      }
    }
    n.exports = g;
  },
  function(n, e, t) {
    n.exports = t(2)(5);
  },
  function(n, e) {
    n.exports = {
      ā: "a1",
      á: "a2",
      ǎ: "a3",
      à: "a4",
      ē: "e1",
      é: "e2",
      ě: "e3",
      è: "e4",
      ō: "o1",
      ó: "o2",
      ǒ: "o3",
      ò: "o4",
      ī: "i1",
      í: "i2",
      ǐ: "i3",
      ì: "i4",
      ū: "u1",
      ú: "u2",
      ǔ: "u3",
      ù: "u4",
      ü: "v0",
      ǘ: "v2",
      ǚ: "v3",
      ǜ: "v4",
      ń: "n2",
      ň: "n3",
      "": "m2"
    };
  },
  function(n, e, t) {
    "use strict";
    n.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    };
  },
  function(n, e, t) {
    const i = t(6);
    function o(n) {
      const e = (function() {
          const n = {},
            e = Object.keys(i);
          for (let t = e.length, i = 0; i < t; i++)
            n[e[i]] = { distance: -1, parent: null };
          return n;
        })(),
        t = [n];
      for (e[n].distance = 0; t.length; ) {
        const n = t.pop(),
          o = Object.keys(i[n]);
        for (let i = o.length, r = 0; r < i; r++) {
          const i = o[r],
            h = e[i];
          -1 === h.distance &&
            ((h.distance = e[n].distance + 1), (h.parent = n), t.unshift(i));
        }
      }
      return e;
    }
    function r(n, e) {
      return function(t) {
        return e(n(t));
      };
    }
    function h(n, e) {
      const t = [e[n].parent, n];
      let o = i[e[n].parent][n],
        h = e[n].parent;
      for (; e[h].parent; )
        t.unshift(e[h].parent),
          (o = r(i[e[h].parent][h], o)),
          (h = e[h].parent);
      return (o.conversion = t), o;
    }
    n.exports = function(n) {
      const e = o(n),
        t = {},
        i = Object.keys(e);
      for (let n = i.length, o = 0; o < n; o++) {
        const n = i[o];
        null !== e[n].parent && (t[n] = h(n, e));
      }
      return t;
    };
  },
  function(n, e, t) {
    "use strict";
    t.r(e);
    var i = t(0),
      o = t.n(i),
      r = t(8),
      h = t.n(r),
      a = t(1),
      u = t(9),
      c = t.n(u),
      g = t(4),
      s = t.n(g);
    const l = a.keyframes`
0% {
    transform: rotate(0deg);
}
100%{
    transform: rotate(-360deg);
}
`,
      m = a.default.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  animation: ${l} 3s infinite ease-in;
`,
      f = a.default.div`
  position: absolute;
  width: ${n => `${n.size}${n.sizeUnit}`};
  height: ${n => `${n.size}${n.sizeUnit}`};
  animation: ${n => a.keyframes`
${(((n.size / 2 / n.countBalls) * (n.index - 1)) / n.size) * 100}% {
    opacity: 0;
}
${(((n.size / 2 / n.countBalls + 1e-4) * (n.index - 1)) / n.size) * 100}% {
    opacity: 1;
    transform: ${`rotateZ(${0 - (360 / n.countBalls) * (n.index - 2)}deg)`};
}
${(((n.size / 2 / n.countBalls) * (n.index - 0) + 2) / n.size) * 100}% {
    transform: ${`rotateZ(${0 - (360 / n.countBalls) * (n.index - 1)}deg)`};
}
${((n.size / 2 + (n.size / 2 / n.countBalls) * (n.index - 0) + 2) / n.size) *
  100}% {
    transform: ${`rotateZ(${0 - (360 / n.countBalls) * (n.index - 1)}deg)`};
}
100% {
    transform: ${`rotateZ(${0 -
      (360 / n.countBalls) * (n.countBalls - 1)}deg)`};
    opacity: 1;
}
`} 2s infinite linear;
  transform: ${n => `rotateZ(${(360 / n.countBalls) * n.index}deg)`};
  opacity: 0;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0%;
    width: ${n => `${n.ballSize}${n.sizeUnit}`};
    height: ${n => `${n.ballSize}${n.sizeUnit}`};
    background-color: ${n => `${n.color}`};
    transform: translateX(-50%);
    border-radius: 50%;
  }
`;
    var d = ({ size: n = 40, color: e = "#fff", sizeUnit: t = "px" }) => {
        const i = n / 2,
          r = n / 8;
        return o.a.createElement(
          m,
          { size: n, sizeUnit: t },
          (({
            countBalls: n,
            radius: e,
            angle: t,
            color: i = "#fff",
            size: r = 40,
            ballSize: h,
            sizeUnit: a = "px"
          }) => {
            const u = [],
              c = h / 2;
            for (let g = 0; g < n; g++) {
              const s = Math.sin(t * g * (Math.PI / 180)) * e - c,
                l = Math.cos(t * g * (Math.PI / 180)) * e - c;
              u.push(
                o.a.createElement(f, {
                  countBalls: n,
                  color: i,
                  ballSize: h,
                  size: r,
                  sizeUnit: a,
                  x: s,
                  y: l,
                  key: g.toString(),
                  index: g + 1
                })
              );
            }
            return u;
          })({
            countBalls: 9,
            radius: i,
            angle: 40,
            color: e,
            size: n,
            ballSize: r,
            sizeUnit: t
          })
        );
      },
      b = t(3),
      p = t(5);
    function x() {
      return (x =
        Object.assign ||
        function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
          }
          return n;
        }).apply(this, arguments);
    }
    const y = Object(i.lazy)(() => t.e(0).then(t.bind(null, 34))),
      z = Object(i.lazy)(() => t.e(7).then(t.bind(null, 35))),
      j = Object(i.lazy)(() =>
        Promise.all([t.e(2), t.e(3)]).then(t.bind(null, 36))
      ),
      w = Object(i.lazy)(() => t.e(8).then(t.bind(null, 37))),
      k = Object(i.lazy)(() => t.e(1).then(t.bind(null, 38))),
      v = Object(i.lazy)(() => t.e(5).then(t.bind(null, 31))),
      q = Object(i.lazy)(() => t.e(4).then(t.bind(null, 32))),
      O = Object(i.lazy)(() => t.e(6).then(t.bind(null, 33))),
      E = Object(i.lazy)(() => t.e(9).then(t.bind(null, 39)));
    p.push({
      name: "",
      colors: JSON.parse(localStorage.getItem("FAV_COLORS") || "[]")
    });
    const S = p.map(
        n => (
          (n.RGB = s.a.hex.rgb(n.hex)),
          (n.colors = n.colors.map(n => ({
            ...n,
            RGB: s.a.hex.rgb(n.hex),
            CMYK: s.a.hex.cmyk(n.hex),
            pinyin: c()(n.name, { heteronym: !0, segment: !0 })
              .map(n => (n.length > 1 ? n[n.length - 1] : n))
              .join(" ")
          }))),
          n
        )
      ),
      M = a.default.section`
  height: 100vh;
  display: flex;
  padding: 1rem 0.5rem;
  justify-content: space-evenly;
  transition: all 0.9s;
  .params {
    margin-right: 1rem;
  }
  .colorSet {
    position: fixed;
    bottom: 2rem;
    right: 3rem;
    padding: 0 1rem;
    z-index: 999;
  }
  .colorNav {
    position: relative;
    height: 100vh;
    width: 16rem;
    margin-right: 1.5rem;
    .colors {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      height: 100vh;
      overflow-y: scroll;
    }
  }
  .btns {
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
    var T = () => {
        const n =
            JSON.parse(localStorage.getItem("SELECTED_COLOR_SET")) || S[0],
          e = JSON.parse(localStorage.getItem("SELECTED_COLOR")) || n.colors[9],
          { visible: t, showModal: r, closeModal: h } = Object(b.c)(),
          { preview: a, showPreview: u, closePreview: c } = Object(b.d)(),
          {
            sets: g,
            currSet: s,
            currColor: l,
            updateCurrColor: m,
            updateCurrSet: f
          } = Object(b.a)({
            sets: S.map(n => {
              return { ...n };
            }),
            currColor: e,
            currSet: n
          });
        return (
          Object(i.useEffect)(() => {
            document.body.style.backgroundColor = l.hex;
          }, [l]),
          o.a.createElement(
            i.Suspense,
            {
              fallback: o.a.createElement(d, {
                color: "#000",
                size: "4",
                sizeUnit: "rem"
              })
            },
            o.a.createElement(
              M,
              null,
              o.a.createElement(
                "aside",
                { className: "colorSet" },
                o.a.createElement(E, {
                  sets: g,
                  currSetName: s.name,
                  setCurrSet: f
                })
              ),
              o.a.createElement(
                "nav",
                { className: "colorNav" },
                o.a.createElement(
                  "ul",
                  { className: "colors" },
                  s.colors.map((n, e) =>
                    o.a.createElement(
                      z,
                      x(
                        {
                          seq: e + 1,
                          isCurr: l.name == n.name,
                          setCurrColor: m
                        },
                        n,
                        { key: n.name }
                      )
                    )
                  )
                )
              ),
              o.a.createElement(w, x({ className: "params" }, l)),
              o.a.createElement(y, l),
              o.a.createElement(q, { rgb: l.RGB }),
              o.a.createElement(
                "section",
                { className: "btns" },
                o.a.createElement(v, { showInfoModal: r }),
                o.a.createElement(O, { showPreview: u })
              )
            ),
            a &&
              o.a.createElement(j, {
                closePreview: c,
                name: l.name,
                pinyin: l.pinyin,
                color: l.hex,
                figure: l.figure
              }),
            t && o.a.createElement(k, { bgColor: l.hex, closeModal: h })
          )
        );
      },
      L = t(10),
      _ = t.n(L),
      N = t(7),
      C = t.n(N);
    var I = a.createGlobalStyle`
  ${_.a}
  *{
    box-sizing:border-box;
    user-select:none;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color:#ffffeb;
    touch-action: manipulation
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:"Fangzheng ZY", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  }
  *::-webkit-scrollbar {
    width: 0px;
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  body{
    -webkit-overflow-scrolling: touch;
    margin:0 auto;
    background-image: url(${C.a});
    transition:background-color 1.6s;

  }


  @media screen and (min-width: 320px){
      html {
          font-size: 12px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 14px;
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 20px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 24px;
      }
  }
  @font-face {
    font-family: "TChinese";
    src: url("font/chinese.font.eot"); /* IE9 */
    src: url("font/chinese.font.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */

    url("font/chinese.font.woff") format("woff"), /* chrome、firefox */
    url("font/chinese.font.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */

    url("font/chinese.font.svg#font/chinese.font") format("svg"); /* iOS 4.1- */
    font-style: normal;
    font-weight: normal;
}
`;
    const R = Boolean(
      "localhost" === window.location.hostname ||
        "[::1]" === window.location.hostname ||
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    );
    function $(n) {
      navigator.serviceWorker
        .register(n)
        .then(n => {
          n.onupdatefound = () => {
            const e = n.installing;
            e.onstatechange = () => {
              "installed" === e.state && navigator.serviceWorker.controller;
            };
          };
        })
        .catch(n => {});
    }
    h.a.render(
      o.a.createElement(
        o.a.Fragment,
        null,
        o.a.createElement(I, null),
        o.a.createElement(T, null)
      ),
      document.getElementById("root")
    ),
      (function() {
        if ("serviceWorker" in navigator) {
          if (
            new URL(
              Object({ NODE_ENV: "production" }).PUBLIC_URL,
              window.location
            ).origin !== window.location.origin
          )
            return;
          window.addEventListener("load", () => {
            const n = "service-worker.js";
            R
              ? (!(function(n) {
                  fetch(n)
                    .then(e => {
                      404 === e.status ||
                      -1 === e.headers.get("content-type").indexOf("javascript")
                        ? navigator.serviceWorker.ready.then(n => {
                            n.unregister().then(() => {
                              window.location.reload();
                            });
                          })
                        : $(n);
                    })
                    .catch(() => {});
                })(n),
                navigator.serviceWorker.ready.then(() => {}))
              : $(n);
          });
        }
      })();
  }
]);
