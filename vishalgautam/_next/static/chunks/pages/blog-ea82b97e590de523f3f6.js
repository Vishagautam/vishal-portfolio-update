_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [12],
  {
    "3bhu": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n("nKUr"),
        i = n("xvhg"),
        l = n("YFqc"),
        a = n.n(l),
        o = n("jm+/"),
        s = n("Pn9C"),
        c = [
          { title: "About", href: "/about" },
          { title: "Blog", href: "/blog" },
          { title: "200k Vote", href: "/200kvote" },
        ];
      function d(e) {
        var t = e.page,
          n = Object(o.a)(),
          l = Object(i.a)(n, 2)[1],
          d = Object(s.a)(),
          u = Math.max(document.documentElement.scrollHeight - l, 0),
          m = 100 * (u ? d / u : 0);
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)("div", {
              className: "relative z-50",
              children: Object(r.jsxs)("div", {
                className:
                  "flex text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-white",
                children: [
                  Object(r.jsx)(a.a, {
                    href: "/",
                    children: Object(r.jsx)("a", {
                      className:
                        "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3.5 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 text-blue-500 hover:bg-gray-200 transition",
                      children: "William Lin",
                    }),
                  }),
                  Object(r.jsx)("div", { className: "flex-1" }),
                  c.map(function (e) {
                    return Object(r.jsx)(
                      a.a,
                      {
                        href: e.href,
                        children: Object(r.jsx)("a", {
                          className:
                            (t === e.title
                              ? "bg-blue-500 hover:bg-blue-600 text-white"
                              : "text-blue-500 hover:bg-gray-200") +
                            " flex items-center px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 transition",
                          children: e.title,
                        }),
                      },
                      e.title
                    );
                  }),
                ],
              }),
            }),
            Object(r.jsx)("div", {
              className: "fixed -top-24 shadow-2xl z-40 w-full",
              children: Object(r.jsx)("div", { className: "m-10 h-5" }),
            }),
            Object(r.jsx)("div", {
              className: "sticky top-0 h-1 z-50 bg-blue-300",
              children: Object(r.jsx)("div", {
                className: "h-full bg-blue-500 transition-all ease-out",
                style: { width: m + "%" },
              }),
            }),
          ],
        });
      }
    },
    dKBD: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "__N_SSG", function () {
          return x;
        }),
        n.d(t, "default", function () {
          return h;
        });
      var r = n("nKUr"),
        i = n("z7pX"),
        l = n("g4pe"),
        a = n.n(l),
        o = n("q1tI"),
        s = n("VtrM"),
        c = n("HNYG"),
        d = n("3bhu"),
        u = n("1nWx");
      var m = [1, 2, 2, 3, 3],
        b = ["", "sm:inline", "md:inline", "lg:inline", "xl:inline"],
        x = !0;
      function h(e) {
        var t = e.numPosts,
          n = Math.ceil(t / 4),
          l = (function () {
            var e = Object(o.useState)(null),
              t = e[0],
              n = e[1];
            return (
              Object(o.useEffect)(function () {
                window.location.hash && n(window.location.hash.substr(1));
              }, []),
              Object(o.useEffect)(function () {
                console.log("hi");
                var e = function () {
                  return n(
                    window.location.hash ? window.location.hash.substr(1) : null
                  );
                };
                return (
                  window.addEventListener("hashchange", e),
                  function () {
                    return window.removeEventListener("hashchange", e);
                  }
                );
              }, []),
              t
            );
          })(),
          x = 0;
        l &&
          !isNaN(+l) &&
          Number.isInteger(+l) &&
          (x = Math.min(Math.max(+l, 0), n - 1));
        var h = Object(s.a)(
            "/api/blog/posts?start="
              .concat(4 * x, "&end=")
              .concat(Math.min(4 * (x + 1), t))
          ).data,
          j = Object(o.useState)(!1),
          g = j[0],
          w = j[1];
        Object(o.useEffect)(
          function () {
            g && ((document.documentElement.scrollTop = 0), w(!1));
          },
          [g]
        );
        for (
          var f = function (e) {
              (location.hash = "#" + e), w(!0);
            },
            p = [],
            v = m.map(function (e) {
              return Math.max(Math.min(x - e, n - 1 - 2 * e), 0);
            }),
            O = function (e) {
              for (
                var t =
                    e == x
                      ? "border-blue-500 bg-blue-500 hover:bg-blue-600 hover:border-blue-600 text-white"
                      : "hover:bg-gray-100",
                  n = 0;
                e < v[n] || e > v[n] + 2 * m[n];

              )
                ++n;
              b[n] && (t += " hidden " + b[n]),
                p.push(
                  Object(r.jsx)(
                    "button",
                    {
                      onClick: function () {
                        return f(e);
                      },
                      className:
                        t +
                        " border border-r-0 w-10 sm:w-11 md:w-12 lg:w-14 xl:w-16 py-1 md:py-1.5 transition",
                      children: e + 1,
                    },
                    e
                  )
                );
            },
            y = v[4];
          y < Math.min(v[4] + 1 + 2 * m[4], n);
          ++y
        )
          O(y);
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsxs)(a.a, {
              children: [
                Object(r.jsx)("title", { children: "Blog - William Lin" }),
                Object(r.jsx)("meta", {
                  name: "twitter:title",
                  content: "Blog - William Lin",
                }),
                Object(r.jsx)("meta", {
                  property: "og:title",
                  content: "Blog - William Lin",
                }),
                Object(r.jsx)("meta", {
                  property: "og:url",
                  content: "https://williamlin.io/blog",
                }),
                Object(r.jsx)("meta", {
                  name: "description",
                  property: "og:description",
                  content: u.b.metaDesc,
                }),
                Object(r.jsx)("meta", {
                  name: "twitter:description",
                  content: u.b.metaDesc,
                }),
              ],
            }),
            Object(r.jsx)(d.a, { page: "Blog" }),
            Object(r.jsxs)("div", {
              className: "text-center p-4 max-w-full break-words bg-gray-100",
              children: [
                Object(i.a)(Array(Math.min(4, t - 4 * x))).map(function (e, t) {
                  return Object(r.jsx)(
                    "div",
                    {
                      className: "my-4 sm:my-5 md:my-6 lg:my-7 xl:my-8",
                      children: Object(r.jsx)(c.a, {
                        post: h ? h.posts[t] : void 0,
                        height: "35em",
                      }),
                    },
                    t
                  );
                }),
                Object(r.jsxs)("div", {
                  className:
                    "inline-flex font-medium text-blue-500 text-center bg-white shadow-lg rounded text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl",
                  children: [
                    Object(r.jsx)("button", {
                      onClick: function () {
                        return f(0);
                      },
                      disabled: x <= 0,
                      className:
                        (x > 0
                          ? "hover:bg-gray-100"
                          : "text-gray-400 cursor-default") +
                        " border border-r-0 rounded-l w-10 sm:w-11 md:w-12 lg:w-14 xl:w-16 py-1 md:py-1.5 transition",
                      children: Object(r.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className: "inline",
                        viewBox: "0 0 16 16",
                        style: {
                          width: "1em",
                          height: "1em",
                          verticalAlign: "-0.14em",
                        },
                        children: Object(r.jsx)("path", {
                          fillRule: "evenodd",
                          d: "M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z",
                        }),
                      }),
                    }),
                    p,
                    Object(r.jsx)("button", {
                      onClick: function () {
                        return f(n - 1);
                      },
                      disabled: x >= n - 1,
                      className:
                        (x < n - 1
                          ? "hover:bg-gray-100"
                          : "text-gray-400 cursor-default") +
                        " border rounded-r w-10 sm:w-11 md:w-12 lg:w-14 xl:w-16 py-1 md:py-1.5 transition",
                      children: Object(r.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className: "inline",
                        viewBox: "0 0 16 16",
                        style: {
                          width: "1em",
                          height: "1em",
                          verticalAlign: "-0.14em",
                        },
                        children: Object(r.jsx)("path", {
                          fillRule: "evenodd",
                          d: "M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    vHou: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog",
        function () {
          return n("dKBD");
        },
      ]);
    },
    z7pX: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var r = n("6FTQ");
      var i = n("8rE2");
      function l(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Object(r.a)(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          Object(i.a)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
  },
  [["vHou", 0, 1, 5, 2, 3, 4, 6]],
]);
