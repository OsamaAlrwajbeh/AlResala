/*! For license information please see main.js.LICENSE */
(buildinfo = { buildname: "fs-webpack-build", ver: "5.8.0", template: "newclientcustom" }),
    (function (e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var a = (n[i] = { i: i, l: !1, exports: {} });
            return e[i].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
        }
        var n = {};
        (t.m = e),
            (t.c = n),
            (t.d = function (e, n, i) {
                t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i });
            }),
            (t.n = function (e) {
                var n =
                    e && e.__esModule
                        ? function () {
                            return e.default;
                        }
                        : function () {
                            return e;
                        };
                return t.d(n, "a", n), n;
            }),
            (t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 5));
    })([
        function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = ((t.html = $(document.documentElement)), (t.body = $(document.body)));
            (t.notDraftMode = !n.hasClass("fsDraftMode")),
                (t.notComposeMode = !n.hasClass("fsComposeMode")),
                (t.win = $(window)),
                (t.calendarGrid = $(".fsCalendar.fsGrid")),
                (t.slideshowSubtypeHorizontal = $("body:not(.home) .fsSlideshow.fsSlideshowHorizontal:not(.hero):not(.showcase-slideshow):not(.testimonial-slideshow):not(.custom-post-slideshow)"));
        },
        function (e, t) {
            function n(e, t) {
                if (0 === e.length || 0 === t.length) return !1;
                var n = $(e).eq(0),
                    i = n.attr("data-image-sizes"),
                    a = n.attr("data-aspect-ratio");
                $(t).eq(0).attr("data-image-sizes", i).attr("data-aspect-ratio", a), FS.util.updateDynamicImages($(t).eq(0));
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.moveResourceImage = n);
        },
        function (e, t) {
            function n(e) {
                (backgroundElement = e),
                    $(backgroundElement).each(function () {
                        var e = $(this).find("img").attr("src");
                        $(this).css("background-image", 'url("' + e + '")');
                    });
            }
            function i(e, t, n) {
                var i;
                return function () {
                    var a = this,
                        s = arguments,
                        o = function () {
                            (i = null), n || e.apply(a, s);
                        },
                        r = n && !i;
                    clearTimeout(i), (i = setTimeout(o, t)), r && e.apply(a, s);
                };
            }
            function a(e, t) {
                var n,
                    i,
                    a = 100;
                (n = function n() {
                    e.find("input.gsc-input").length ? ($.support.placeholder ? e.find("input.gsc-input").attr("placeholder", t) : e.find("input.gsc-input").attr("value", t)) : a > 0 && ((i = setTimeout(n, 100)), (a -= 1));
                }),
                    (i = setTimeout(n, 100));
            }
            function s(e, t) {
                return e.replace(/\{([\w\.]*)\}/g, function (e, n) {
                    for (var i = n.split("."), a = t[i.shift()], s = 0, o = i.length; s < o; s++) a = a[i[s]];
                    return void 0 !== a && null !== a ? a : "";
                });
            }
            function o() {
                $.fn.randomize = function (e) {
                    return (
                        (e ? $(this).find(e) : $(this).children()).parent().each(function () {
                            $(this)
                                .children(e)
                                .sort(function () {
                                    return Math.round(Math.random()) - 0.5;
                                })
                                .detach()
                                .appendTo(this);
                        }),
                        this
                    );
                };
            }
            function r(e, t) {
                var n = e.querySelectorAll(
                    'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
                ),
                    i = n[0],
                    a = n[n.length - 1];
                e.addEventListener("keydown", function (e) {
                    var n = "Tab" === e.key || 9 === e.keyCode,
                        s = "Escape" === e.key || 27 === e.keyCode;
                    (n || s) &&
                        (s && (e.stopPropagation(), (this.callback = t), this.callback()), e.shiftKey ? document.activeElement === i && (a.focus(), e.preventDefault()) : document.activeElement === a && (i.focus(), e.preventDefault()));
                });
            }
            function l(e, t) {
                for (var n = [], i = e.length; i--;) {
                    for (var a = document.createElement(t), s = e[i], o = s.attributes, r = o.length - 1; r >= 0; r--) {
                        var l = o[r];
                        a.setAttribute(l.name, l.value);
                    }
                    (a.innerHTML = s.innerHTML), (n[i - 1] = a);
                }
                return a;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.backgroundImage = n), (t.debounce = i), (t.placeholder = a), (t.nano = s), (t.randomGenerator = o), (t.trapFocus = r), (t.replaceTagName = l);
        },
        function (e, t) {
            !(function (e, t, n, i) {
                e.fn.doubleTapToGo = function (i) {
                    return (
                        !!("ontouchstart" in t || navigator.msMaxTouchPoints || navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) &&
                        ((t.isTouching = !1),
                            this.each(function (i) {
                                var a = !1;
                                e(this).on("touchstart", function (e) {
                                    "touchstart" === e.type && (t.isTouching = !0);
                                }),
                                    e(this).on("click", function (n) {
                                        var i = e(this);
                                        i[0] != a[0] && !0 === t.isTouching && (n.preventDefault(), (a = i)), (t.isTouching = !1);
                                    }),
                                    e(n).on("click touchstart MSPointerDown", function (t) {
                                        for (var n = !0, i = e(t.target).parents(), s = 0; s < i.length; s++) i[s] == a[0] && (n = !1);
                                        n && (a = !1);
                                    });
                            }),
                            this)
                    );
                };
            })(jQuery, window, document);
        },
        function (e, t) {
            function n(e, t) {
                if (0 === e.length) return !1;
                var n,
                    a = JSON.parse(unescape(e[0].getAttribute("data-image-sizes")));
                if ("number" == typeof t) for (i = 0; i < a.length; i++) void 0 === n && a[i].width >= t && (n = a[i].url);
                return n || ("small" === t ? a[0].url : a[a.length - 1].url);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.getImageSize = n);
        },
        function (e, t, n) {
            n(6), n(7), n(23);
        },
        function (e, t) { },
        function (e, t, n) {
            !(function () {
                if (void 0 !== window.buildinfo) {
                    var e = document.getElementsByTagName("body")[0];
                    e.setAttribute("data-buildver", window.buildinfo.ver), e.setAttribute("data-sitetemplate", window.buildinfo.template);
                }
            })(),
                n(8),
                n(9),
                INITIATE_ALL.init();
        },
        function (e, t) {
            !(function (e, t, n) {
                function i(e, t) {
                    return typeof e === t;
                }
                function a() {
                    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : $ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
                }
                function s(e) {
                    return e
                        .replace(/([a-z])-([a-z])/g, function (e, t, n) {
                            return t + n.toUpperCase();
                        })
                        .replace(/^-/, "");
                }
                function o() {
                    var e = t.body;
                    return e || ((e = a($ ? "svg" : "body")), (e.fake = !0)), e;
                }
                function r(e, n, i, s) {
                    var r,
                        l,
                        d,
                        f,
                        c = "modernizr",
                        u = a("div"),
                        p = o();
                    if (parseInt(i, 10)) for (; i--;) (d = a("div")), (d.id = s ? s[i] : c + (i + 1)), u.appendChild(d);
                    return (
                        (r = a("style")),
                        (r.type = "text/css"),
                        (r.id = "s" + c),
                        (p.fake ? p : u).appendChild(r),
                        p.appendChild(u),
                        r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(t.createTextNode(e)),
                        (u.id = c),
                        p.fake && ((p.style.background = ""), (p.style.overflow = "hidden"), (f = y.style.overflow), (y.style.overflow = "hidden"), y.appendChild(p)),
                        (l = n(u, e)),
                        p.fake ? (p.parentNode.removeChild(p), (y.style.overflow = f), y.offsetHeight) : u.parentNode.removeChild(u),
                        !!l
                    );
                }
                function l(e, t) {
                    return !!~("" + e).indexOf(t);
                }
                function d(e, t) {
                    return function () {
                        return e.apply(t, arguments);
                    };
                }
                function f(e, t, n) {
                    var a;
                    for (var s in e) if (e[s] in t) return !1 === n ? e[s] : ((a = t[e[s]]), i(a, "function") ? d(a, n || t) : a);
                    return !1;
                }
                function c(t, n, i) {
                    var a;
                    if ("getComputedStyle" in e) {
                        a = getComputedStyle.call(e, t, n);
                        var s = e.console;
                        if (null !== a) i && (a = a.getPropertyValue(i));
                        else if (s) {
                            var o = s.error ? "error" : "log";
                            s[o].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
                        }
                    } else a = !n && t.currentStyle && t.currentStyle[i];
                    return a;
                }
                function u(e) {
                    return e
                        .replace(/([A-Z])/g, function (e, t) {
                            return "-" + t.toLowerCase();
                        })
                        .replace(/^ms-/, "-ms-");
                }
                function p(t, i) {
                    var a = t.length;
                    if ("CSS" in e && "supports" in e.CSS) {
                        for (; a--;) if (e.CSS.supports(u(t[a]), i)) return !0;
                        return !1;
                    }
                    if ("CSSSupportsRule" in e) {
                        for (var s = []; a--;) s.push("(" + u(t[a]) + ":" + i + ")");
                        return (
                            (s = s.join(" or ")),
                            r("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
                                return "absolute" == c(e, null, "position");
                            })
                        );
                    }
                    return n;
                }
                function h(e, t, o, r) {
                    function d() {
                        c && (delete N.style, delete N.modElem);
                    }
                    if (((r = !i(r, "undefined") && r), !i(o, "undefined"))) {
                        var f = p(e, o);
                        if (!i(f, "undefined")) return f;
                    }
                    for (var c, u, h, v, g, m = ["modernizr", "tspan", "samp"]; !N.style && m.length;) (c = !0), (N.modElem = a(m.shift())), (N.style = N.modElem.style);
                    for (h = e.length, u = 0; u < h; u++)
                        if (((v = e[u]), (g = N.style[v]), l(v, "-") && (v = s(v)), N.style[v] !== n)) {
                            if (r || i(o, "undefined")) return d(), "pfx" != t || v;
                            try {
                                N.style[v] = o;
                            } catch (e) { }
                            if (N.style[v] != g) return d(), "pfx" != t || v;
                        }
                    return d(), !1;
                }
                function v(e, t, n, a, s) {
                    var o = e.charAt(0).toUpperCase() + e.slice(1),
                        r = (e + " " + P.join(o + " ") + o).split(" ");
                    return i(t, "string") || i(t, "undefined") ? h(r, t, a, s) : ((r = (e + " " + S.join(o + " ") + o).split(" ")), f(r, t, n));
                }
                function g(e, t, i) {
                    return v(e, n, n, t, i);
                }
                var m = [],
                    b = [],
                    w = {
                        _version: "3.5.0",
                        _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
                        _q: [],
                        on: function (e, t) {
                            var n = this;
                            setTimeout(function () {
                                t(n[e]);
                            }, 0);
                        },
                        addTest: function (e, t, n) {
                            b.push({ name: e, fn: t, options: n });
                        },
                        addAsyncTest: function (e) {
                            b.push({ name: null, fn: e });
                        },
                    },
                    C = function () { };
                (C.prototype = w), (C = new C()), C.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
                var y = t.documentElement,
                    $ = "svg" === y.nodeName.toLowerCase();
                C.addTest("audio", function () {
                    var e = a("audio"),
                        t = !1;
                    try {
                        (t = !!e.canPlayType),
                            t &&
                            ((t = new Boolean(t)),
                                (t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "")),
                                (t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, "")),
                                (t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")),
                                (t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
                                (t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")));
                    } catch (e) { }
                    return t;
                });
                var x = (function () {
                    function e(e, t) {
                        var s;
                        return (
                            !!e &&
                            ((t && "string" != typeof t) || (t = a(t || "div")),
                                (e = "on" + e),
                                (s = e in t),
                                !s && i && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), (s = "function" == typeof t[e]), t[e] !== n && (t[e] = n), t.removeAttribute(e)),
                                s)
                        );
                    }
                    var i = !("onblur" in t.documentElement);
                    return e;
                })();
                w.hasEvent = x;
                var k = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
                w._prefixes = k;
                var T = "Moz O ms Webkit",
                    S = w._config.usePrefixes ? T.toLowerCase().split(" ") : [];
                (w._domPrefixes = S),
                    C.addTest("pointerevents", function () {
                        var e = !1,
                            t = S.length;
                        for (e = C.hasEvent("pointerdown"); t-- && !e;) x(S[t] + "pointerdown") && (e = !0);
                        return e;
                    });
                var P = w._config.usePrefixes ? T.split(" ") : [];
                w._cssomPrefixes = P;
                var E = function (t) {
                    var i,
                        a = k.length,
                        s = e.CSSRule;
                    if (void 0 === s) return n;
                    if (!t) return !1;
                    if (((t = t.replace(/^@/, "")), (i = t.replace(/-/g, "_").toUpperCase() + "_RULE") in s)) return "@" + t;
                    for (var o = 0; o < a; o++) {
                        var r = k[o];
                        if (r.toUpperCase() + "_" + i in s) return "@-" + r.toLowerCase() + "-" + t;
                    }
                    return !1;
                };
                w.atRule = E;
                var A = (w.testStyles = r);
                C.addTest("touchevents", function () {
                    var n;
                    if ("ontouchstart" in e || (e.DocumentTouch && t instanceof DocumentTouch)) n = !0;
                    else {
                        var i = ["@media (", k.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                        A(i, function (e) {
                            n = 9 === e.offsetTop;
                        });
                    }
                    return n;
                });
                var I = { elem: a("modernizr") };
                C._q.push(function () {
                    delete I.elem;
                });
                var N = { style: I.elem.style };
                C._q.unshift(function () {
                    delete N.style;
                }),
                    (w.testAllProps = v);
                var D = (w.prefixed = function (e, t, n) {
                    return 0 === e.indexOf("@") ? E(e) : (-1 != e.indexOf("-") && (e = s(e)), t ? v(e, t, n) : v(e, "pfx"));
                });
                C.addTest("forcetouch", function () {
                    return !!x(D("mouseforcewillbegin", e, !1), e) && MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN;
                }),
                    C.addTest("objectfit", !!D("objectFit"), { aliases: ["object-fit"] }),
                    (w.testAllProps = g),
                    C.addTest("flexbox", g("flexBasis", "1px", !0)),
                    (function () {
                        var e, t, n, a, s, o, r;
                        for (var l in b)
                            if (b.hasOwnProperty(l)) {
                                if (((e = []), (t = b[l]), t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)))
                                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                                for (a = i(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++)
                                    (o = e[s]), (r = o.split(".")), 1 === r.length ? (C[r[0]] = a) : (!C[r[0]] || C[r[0]] instanceof Boolean || (C[r[0]] = new Boolean(C[r[0]])), (C[r[0]][r[1]] = a)), m.push((a ? "" : "no-") + r.join("-"));
                            }
                    })(),
                    (function (e) {
                        var t = y.className,
                            n = C._config.classPrefix || "";
                        if (($ && (t = t.baseVal), C._config.enableJSClass)) {
                            var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                            t = t.replace(i, "$1" + n + "js$2");
                        }
                        C._config.enableClasses && ((t += " " + n + e.join(" " + n)), $ ? (y.className.baseVal = t) : (y.className = t));
                    })(m),
                    delete w.addTest,
                    delete w.addAsyncTest;
                for (var R = 0; R < C._q.length; R++) C._q[R]();
                e.Modernizr = C;
            })(window, document);
        },
        function (e, t, n) {
            function i(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var a = n(0),
                s = n(10),
                o = i(s),
                r = n(11),
                l = i(r),
                d = n(12),
                f = i(d),
                c = n(15),
                u = i(c),
                p = n(16),
                h = i(p),
                v = n(18),
                g = i(v),
                m = n(20),
                b = i(m),
                w = n(22),
                C = i(w);
            INITIATE_ALL = {
                init: function () {
                    a.notDraftMode && f.default.init(),
                        h.default.init(),
                        u.default.init(),
                        g.default.init(),
                        a.body.hasClass("home") && C.default.init(),
                        b.default.init(),
                        a.calendarGrid.length && o.default.init(),
                        a.slideshowSubtypeHorizontal.length && !a.body.hasClass("home") && l.default.init();
                },
            };
        },
        function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (RESPONSIVE_CALENDAR_GRID = {
                    init: function () {
                        this.responsiveCalendarGrid();
                    },
                    responsiveCalendarGrid: function () {
                        var e = function (e) {
                            var t,
                                n = $(e.target).closest(".fsCalendar.fsGrid"),
                                i = $(e.target).closest(".fsCalendarDaybox").hasClass("fsCalendarWeekendDayBox") ? $(e.target).closest("div[tabIndex]") : $(e.target).closest(".fsCalendarDaybox"),
                                a = 0,
                                s = n.find("#event-view");
                            n.find(".fsCalendarEventGrid .fsCalendarDaybox, .fsCalendarWeekendDayBox > div").removeClass("selected"),
                                s.length && i.length && ((t = i.clone()), i.addClass("selected"), (a = s.offset().top - 16), s.find("> div").remove(), s.prepend(t)),
                                $("html,body").animate({ scrollTop: a }, 450);
                        },
                            t = function (e) {
                                $("html,body").animate({ scrollTop: e.offset().top }, 450),
                                    e.find(".selected").length ? e.find(".selected").focus() : e.find(".fsCalendarDaybox[tabIndex], .fsCalendarWeekendDayBox > div[tabIndex]").last().focus();
                            },
                            n = function (e) {
                                if (e.hasClass("fsCalendar fsGrid"))
                                    var t,
                                        n = e.attr("id"),
                                        a = 0,
                                        s = setInterval(function () {
                                            (t = $("#" + n).find(".fsCalendarEventGrid")), t.length && (clearInterval(s), i(t)), a++ > 20 && clearInterval(s);
                                        }, 20);
                            },
                            i = function (n) {
                                var i = $('<div id="event-view" />').insertAfter(n),
                                    a = $('<button class="scroll-up">Back Up To Calendar</button>').appendTo(i),
                                    s = n.find(".fsCalendarToday").clone().removeClass("fsCalendarToday");
                                i.each(function () {
                                    $(this).prepend(s);
                                }),
                                    a.on("click", function () {
                                        t(n);
                                    }),
                                    n.find(".fsCalendarDaybox:not(.fsCalendarWeekendDayBox), .fsCalendarWeekendDayBox > div").has(".fsCalendarInfo").attr("tabIndex", 0),
                                    n.on("click", ".fsCalendarDaybox:not(.fsCalendarWeekendDayBox), .fsCalendarWeekendDayBox > div ", e),
                                    n.on("keydown", ".fsCalendarDaybox:not(.fsCalendarWeekendDayBox), .fsCalendarWeekendDayBox > div ", function (e) {
                                        13 == (e.keyCode ? e.keyCode : e.which) && $(window).width() < 900 && ($(this).trigger("click"), i.find(":focusable").eq(0).focus());
                                    }),
                                    i.on("keydown", function (e) {
                                        var t = i[0].querySelectorAll("a[href]:not([disabled]), div[tabIndex], .scroll-up"),
                                            a = t[0],
                                            s = "Tab" === e.key || 9 === e.keyCode;
                                        (s || e.shiftKey) &&
                                            e.shiftKey &&
                                            s &&
                                            document.activeElement === a &&
                                            (n.find(".selected").length ? n.find(".selected").focus() : n.find(".fsCalendarDaybox[tabIndex], .fsCalendarWeekendDayBox > div[tabIndex]").last().focus(), e.preventDefault());
                                    });
                            };
                        FS.events.onElementUpdated("Calendar", function (e) {
                            n(e);
                        }),
                            $(".fsGrid .fsCalendarEventGrid").each(function () {
                                i($(this));
                            });
                    },
                }),
                (t.default = RESPONSIVE_CALENDAR_GRID);
        },
        function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(0);
            (RESPONSIVE_SLIDESHOW_SUBTYPE = {
                init: function () {
                    this.responsiveSlideshows();
                },
                responsiveSlideshows: function () {
                    i.slideshowSubtypeHorizontal.find(".fsElementSlideshow").each(function (e) {
                        var t = $(this),
                            n = t.data("slides-to-show"),
                            i = n < 2 ? n : 2,
                            a = n < 3 ? n : 3,
                            s = n < 4 ? n : 4,
                            o = [
                                { breakpoint: 1100, settings: { slidesToShow: s, slidesToScroll: s } },
                                { breakpoint: 1e3, settings: { slidesToShow: a, slidesToScroll: a } },
                                { breakpoint: 800, settings: { slidesToShow: i, slidesToScroll: i } },
                                { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                            ];
                        t.hasClass("slick-initialized")
                            ? t.slick("slickSetOption", "responsive", o, !0)
                            : t.on("init", function (e) {
                                setTimeout(function () {
                                    t.slick("slickSetOption", "responsive", o, !0);
                                }, 1);
                            });
                    });
                },
            }),
                (t.default = RESPONSIVE_SLIDESHOW_SUBTYPE);
        },
        function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(0);
            n(13),
                n(14),
                (ACCESSIBILITY = {
                    init: function () {
                        i.notDraftMode, this.accessibleSectionLabel();
                    },
                    skipToContent: function () { },
                    accessibleNavigation: function () { },
                    accessibleSearch: function () { },
                    accessibleSectionLabel: function () {
                        $("section").each(function () {
                            var e = $(this).find("> header .fsElementTitle").text();
                            $(this).attr("aria-label") || $(this).attr("aria-label", e);
                        });
                    },
                    googleTranslateAccessibility: function () { },
                }),
                (t.default = ACCESSIBILITY);
        },
        function (e, t) {
            var n = {
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
            };
            $.fn.accessibility_menu = function (e) {
                var t = $.extend({ menuClass: "menu-item-open", mainMenuLabel: "Main", topMenuRole: "menubar", listItemsRole: "menuitem", subNavRole: "menu", firstTab: "level2" }, e),
                    i = $(this),
                    a = ".fsNavPageInfo",
                    s = ".fsNavLevel1",
                    o = 'ul[class^="fsNavLevel"]',
                    r = ".fsNavPageDescription",
                    l = i.find("> li > a, > li > button");
                if (i.length) {
                    $(this).parent()[0].hasAttribute("aria-label") || $(this).parent().attr("aria-label", t.mainMenuLabel),
                        $(this).attr("role", t.topMenuRole).find("li").attr("role", t.listItemsRole),
                        $(this).find(o).attr("role", t.subNavRole),
                        $(this).find(a).find("a, button").attr("tabIndex", -1),
                        $(l).each(function () {
                            $(this).next(a).length > 0 && $(this).parent("li").attr("aria-haspopup", "true").find(a).attr("aria-hidden", "true");
                        }),
                        $(l).unbind(),
                        $(l).bind("focus mouseenter mouseleave keydown", function () {
                            var e = new Array();
                            if (
                                ($(this).parents(s).find("> li > a, > li > button").removeAttr("tabindex"),
                                    $(this)
                                        .parents(s)
                                        .find("." + t.menuClass)
                                        .removeClass(t.menuClass)
                                        .find(a)
                                        .attr("aria-hidden", "true")
                                        .find("a, button")
                                        .attr("tabindex", -1),
                                    $(this).next(a).attr("aria-hidden", "false").parent("li").addClass(t.menuClass),
                                    e.push($(this)[0]),
                                    "level2" == t.firstTab)
                            ) {
                                if ($(this).next(a).find(o).find("a, button").length) for (var n = 0; n < $(this).next(a).find(o).find("a, button").length; n++) e.push($(this).next(a).find(o).find("a, button")[n]);
                                if ($(this).next(a).find(r).find("a, button").length) for (var i = 0; i < $(this).next(a).find(r).find("a, button").length; i++) e.push($(this).next(a).find(r).find("a, button")[i]);
                            } else if ("pagedesc" == t.firstTab) {
                                if ($(this).next(a).find(r).find("a, button").length) for (var l = 0; l < $(this).next(a).find(r).find("a, button").length; l++) e.push($(this).next(a).find(r).find("a, button")[l]);
                                if ($(this).next(a).find(o).find("a, button").length) for (var d = 0; d < $(this).next(a).find(o).find("a, button").length; d++) e.push($(this).next(a).find(o).find("a, button")[d]);
                            }
                            for (var f = 0; f < e.length; f++) e[f].setAttribute("tabindex", f);
                        }),
                        $(this).on("mouseleave", function () {
                            $(this).find("> li > a, > li > button").removeAttr("tabindex"),
                                $(this)
                                    .find("." + t.menuClass)
                                    .removeClass(t.menuClass)
                                    .find(a)
                                    .attr("aria-hidden", "true")
                                    .find("a, button")
                                    .attr("tabIndex", -1);
                        }),
                        $(l).keydown(function (e) {
                            var i = $(this).parent("li").find(a).find("a, button").length;
                            if (38 == e.keyCode)
                                e.preventDefault(),
                                    $(this).parent("li").find(a).find("a, button").length &&
                                    $(this)
                                        .parent("li")
                                        .find(a)
                                        .find("a[tabindex=" + i + "], button[tabindex=" + i + "]")
                                        .focus();
                            else if (39 == e.keyCode)
                                e.preventDefault(), 0 == $(this).parent("li").next("li").length ? $(this).parents(s).find("> li").first().find("a, button").first().focus() : $(this).parent("li").next("li").find("a, button").first().focus();
                            else if (40 == e.keyCode)
                                $(this).parent("li").find(a).find("a, button").length &&
                                    (e.preventDefault(), $(this).parent("li").addClass(t.menuClass).find(a).attr("aria-hidden", "false"), $(this).parent("li").find("a[tabindex=1], button[tabindex=1]").focus());
                            else if (37 == e.keyCode)
                                e.preventDefault(), 0 == $(this).parent("li").prev("li").length ? $(this).parents(s).find("> li").last().find("a, button").first().focus() : $(this).parent("li").prev("li").find("a, button").first().focus();
                            else if (9 == e.keyCode)
                                if (e.shiftKey)
                                    if (0 == $(this).parent("li").prev("li").length)
                                        $(this).parents(s).find("> li > a, > li > button").removeAttr("tabindex"),
                                            $("." + t.menuClass)
                                                .removeClass(t.menuClass)
                                                .find(a)
                                                .attr("aria-hidden", "true")
                                                .find("a, button")
                                                .attr("tabIndex", -1);
                                    else if ($(this).parent("li").prev("li").length) {
                                        e.preventDefault();
                                        var o = $(this).parent("li").prev("li").find(a).find("a, button").length;
                                        $(this).parents(s).find("> li > a, > li > button").removeAttr("tabindex"),
                                            $("." + t.menuClass)
                                                .removeClass(t.menuClass)
                                                .find(a)
                                                .attr("aria-hidden", "true")
                                                .find("a, button")
                                                .attr("tabIndex", -1),
                                            $(this).parent("li").prev("li").addClass(t.menuClass).find(a).attr("aria-hidden", "false"),
                                            $(this)
                                                .parent("li")
                                                .prev("li")
                                                .find("> a, > button")
                                                .focus()
                                                .parent()
                                                .find(a)
                                                .find("a[tabindex=" + o + "], button[tabindex=" + o + "]")
                                                .focus();
                                    } else
                                        $(this).parents(s).find("> li > a, > li > button").removeAttr("tabindex"),
                                            $("." + t.menuClass)
                                                .removeClass(t.menuClass)
                                                .find(a)
                                                .attr("aria-hidden", "true")
                                                .find("a, button")
                                                .attr("tabIndex", -1);
                                else
                                    $(this).parent("li").find(a).find("a, button").length &&
                                        (e.preventDefault(), $(this).parent("li").addClass(t.menuClass).find(a).attr("aria-hidden", "false"), $(this).parent("li").find("a[tabindex=1], button[tabindex=1]").focus());
                            else
                                32 == e.keyCode
                                    ? (e.preventDefault(), (window.location = $(this).attr("href")))
                                    : 27 == e.keyCode
                                        ? (e.preventDefault(),
                                            $("." + t.menuClass)
                                                .removeClass(t.menuClass)
                                                .find("> a, > button")
                                                .removeAttr("tabindex")
                                                .parent("li")
                                                .find(a)
                                                .attr("aria-hidden", "true")
                                                .find("a, button")
                                                .attr("tabIndex", -1))
                                        : $(this)
                                            .parent("li")
                                            .find(".fsNavPageInfo[aria-hidden=false] a, .fsNavPageInfo[aria-hidden=false] button")
                                            .each(function () {
                                                if ($(this).text().substring(0, 1).toLowerCase() == n[e.keyCode]) return $(this).focus(), !1;
                                            });
                        });
                    var d = $(this).find(a).find("a, button");
                    $(d).unbind(),
                        $(d).bind("focus mouseenter mouseleave keydown", function () {
                            $(this)
                                .parent()
                                .parent()
                                .find("." + t.menuClass)
                                .removeClass(t.menuClass)
                                .find(a)
                                .attr("aria-hidden", "true"),
                                $(this).next(a).attr("aria-hidden", "false").parentsUntil(s, "li").addClass(t.menuClass);
                        }),
                        $(d).keydown(function (e) {
                            var i = $(this).parents(a).find("a, button").length,
                                o = parseInt($(this).attr("tabindex"));
                            if (38 == e.keyCode)
                                e.preventDefault(),
                                    1 == o
                                        ? $(this).parents(a).parent("li").find("a, button").first().focus()
                                        : $(this)
                                            .parents(a)
                                            .find("a[tabindex=" + (o - 1) + "], button[tabindex=" + (o - 1) + "]")
                                            .parentsUntil(s, "li")
                                            .addClass(t.menuClass)
                                            .find("a[tabindex=" + (o - 1) + "], button[tabindex=" + (o - 1) + "]")
                                            .focus();
                            else if (39 == e.keyCode)
                                e.preventDefault(),
                                    0 == $(this).parents(s).find("a[tabindex='0'], button[tabindex='0']").parent("li").next("li").length
                                        ? $(this).parents(s).find("> li").first().find("a, button").first().focus()
                                        : $(this).parents(s).find("a[tabindex='0'], button[tabindex='0']").parent("li").next("li").find("a, button").first().focus();
                            else if (40 == e.keyCode)
                                e.preventDefault(),
                                    o == i
                                        ? $(this).parents(a).parent("li").find("a, button").first().focus()
                                        : $(this)
                                            .parents(a)
                                            .find("a[tabindex=" + (o + 1) + "], button[tabindex=" + (o + 1) + "]")
                                            .focus();
                            else if (27 == e.keyCode || 37 == e.keyCode)
                                e.preventDefault(),
                                    $("." + t.menuClass)
                                        .removeClass(t.menuClass)
                                        .find(a)
                                        .attr("aria-hidden", "true")
                                        .find("a, button")
                                        .attr("tabIndex", -1),
                                    $(this).parentsUntil(s, "li").find("a, button").first().focus();
                            else if (9 == e.keyCode)
                                e.shiftKey
                                    ? (e.preventDefault(),
                                        1 == o
                                            ? $(this).parents(a).parent("li").find("a, button").first().focus()
                                            : $(this)
                                                .parents(a)
                                                .find("a[tabindex=" + (o - 1) + "], button[tabindex=" + (o - 1) + "]")
                                                .parentsUntil(s, "li")
                                                .addClass(t.menuClass)
                                                .find("a[tabindex=" + (o - 1) + "], button[tabindex=" + (o - 1) + "]")
                                                .focus())
                                    : o == i
                                        ? $(this).parents(a).parent("li").next("li").length
                                            ? (e.preventDefault(), $(this).parents(a).parent("li").next("li").find("a, button").first().focus())
                                            : ($(this).parents(s).find("> li > a, > li > button").removeAttr("tabindex"),
                                                $("." + t.menuClass)
                                                    .removeClass(t.menuClass)
                                                    .find(a)
                                                    .attr("aria-hidden", "true")
                                                    .find("a, button")
                                                    .attr("tabIndex", -1))
                                        : (e.preventDefault(),
                                            $(this)
                                                .parents(a)
                                                .find("a[tabindex=" + (o + 1) + "], button[tabindex=" + (o + 1) + "]")
                                                .focus());
                            else if (32 == e.keyCode) e.preventDefault(), (window.location = $(this).attr("href"));
                            else {
                                var r = !1;
                                $(this)
                                    .parent("li")
                                    .nextAll("li")
                                    .find("a, button")
                                    .each(function () {
                                        if ($(this).text().substring(0, 1).toLowerCase() == n[e.keyCode]) return $(this).focus(), (r = !0), !1;
                                    }),
                                    r ||
                                    $(this)
                                        .parent("li")
                                        .prevAll("li")
                                        .find("a, button")
                                        .each(function () {
                                            if ($(this).text().substring(0, 1).toLowerCase() == n[e.keyCode]) return $(this).focus(), !1;
                                        });
                            }
                        }),
                        $(document).click(function () {
                            $(this).parents(s).find("> li > a, > li > button").removeAttr("tabindex"),
                                $("." + t.menuClass)
                                    .removeClass(t.menuClass)
                                    .find(a)
                                    .attr("aria-hidden", "true")
                                    .find("a, button")
                                    .attr("tabIndex", -1);
                        }),
                        $(this).click(function (e) {
                            e.stopPropagation();
                        });
                }
            };
        },
        function (e, t) {
            var n = {
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
            };
            $.fn.accessibility_menu_main = function (e) {
                var t = $.extend({ menuClass: "menu-item-open", mainMenuLabel: "Main Menu", mainMenuRole: "navigation", topMenuRole: "menubar", listItemsRole: "menuitem", subNavRole: "menu", firstTab: "level2" }, e),
                    i = $(this),
                    a = ".fsNavPageInfo",
                    s = ".fsNavLevel1",
                    o = 'ul[class^="fsNavLevel"]:not(.nav-level-hide)',
                    r = ".fsNavPageDescription",
                    l = i.find("> li > a");
                $(this).parent().attr("role", t.mainMenuRole).attr("aria-label", t.mainMenuLabel),
                    $(this).attr("role", t.topMenuRole).find("li").attr("role", t.listItemsRole),
                    $(this).find(o).attr("role", t.subNavRole),
                    $(this).find(a).find("a").attr("tabIndex", -1),
                    $(l).each(function () {
                        $(this).next(a).length > 0 && $(this).parent("li").attr("aria-haspopup", "true").find(a).attr("aria-hidden", "true");
                    }),
                    $(l).bind("focus mouseenter mouseleave keydown", function () {
                        var e = new Array();
                        if (
                            ($(this).parents(s).find("> li > a").removeAttr("tabindex"),
                                $(this)
                                    .parents(s)
                                    .find("." + t.menuClass)
                                    .removeClass(t.menuClass)
                                    .find(a)
                                    .attr("aria-hidden", "true")
                                    .find("a")
                                    .attr("tabindex", -1),
                                $(this).next(a).attr("aria-hidden", "false").parent("li").addClass(t.menuClass),
                                e.push($(this)[0]),
                                "level2" == t.firstTab)
                        ) {
                            if ($(this).next(a).find(o).find("a").length) for (var n = 0; n < $(this).next(a).find(o).find("a").length; n++) e.push($(this).next(a).find(o).find("a")[n]);
                            if ($(this).next(a).find(r).find("a").length) for (var i = 0; i < $(this).next(a).find(r).find("a").length; i++) e.push($(this).next(a).find(r).find("a")[i]);
                        } else if ("pagedesc" == t.firstTab) {
                            if ($(this).next(a).find(r).find("a").length) for (var l = 0; l < $(this).next(a).find(r).find("a").length; l++) e.push($(this).next(a).find(r).find("a")[l]);
                            if ($(this).next(a).find(o).find("a").length) for (var d = 0; d < $(this).next(a).find(o).find("a").length; d++) e.push($(this).next(a).find(o).find("a")[d]);
                        }
                        for (var f = 0; f < e.length; f++) e[f].setAttribute("tabindex", f);
                    }),
                    $(this).on("mouseleave", function () {
                        $(this).find("> li > a").removeAttr("tabindex"),
                            $(this)
                                .find("." + t.menuClass)
                                .removeClass(t.menuClass)
                                .find(a)
                                .attr("aria-hidden", "true")
                                .find("a")
                                .attr("tabIndex", -1);
                    }),
                    $(l).keydown(function (e) {
                        var i = $(this).parent("li").find(a).find("a").length;
                        if (38 == e.keyCode)
                            e.preventDefault(),
                                $(this).parent("li").find(a).find("a").length &&
                                $(this)
                                    .parent("li")
                                    .find(a)
                                    .find("a[tabindex=" + i + "]")
                                    .focus();
                        else if (39 == e.keyCode)
                            e.preventDefault(), 0 == $(this).parent("li").next("li").length ? $(this).parents(s).find("> li").first().find("a").first().focus() : $(this).parent("li").next("li").find("a").first().focus();
                        else if (40 == e.keyCode)
                            $(this).parent("li").find(a).find("a").length && (e.preventDefault(), $(this).parent("li").addClass(t.menuClass).find(a).attr("aria-hidden", "false"), $(this).parent("li").find("a[tabindex=1]").focus());
                        else if (37 == e.keyCode)
                            e.preventDefault(), 0 == $(this).parent("li").prev("li").length ? $(this).parents(s).find("> li").last().find("a").first().focus() : $(this).parent("li").prev("li").find("a").first().focus();
                        else if (9 == e.keyCode)
                            if (e.shiftKey)
                                if (0 == $(this).parent("li").prev("li").length)
                                    $(this).parents(s).find("> li > a").removeAttr("tabindex"),
                                        $("." + t.menuClass)
                                            .removeClass(t.menuClass)
                                            .find(a)
                                            .attr("aria-hidden", "true")
                                            .find("a")
                                            .attr("tabIndex", -1);
                                else if ($(this).parent("li").prev("li").length) {
                                    e.preventDefault();
                                    var o = $(this).parent("li").prev("li").find(a).find("a").length;
                                    $(this).parents(s).find("> li > a").removeAttr("tabindex"),
                                        $("." + t.menuClass)
                                            .removeClass(t.menuClass)
                                            .find(a)
                                            .attr("aria-hidden", "true")
                                            .find("a")
                                            .attr("tabIndex", -1),
                                        $(this).parent("li").prev("li").addClass(t.menuClass).find(a).attr("aria-hidden", "false"),
                                        $(this)
                                            .parent("li")
                                            .prev("li")
                                            .find(">a")
                                            .focus()
                                            .parent()
                                            .find(a)
                                            .find("a[tabindex=" + o + "]")
                                            .focus();
                                } else
                                    $(this).parents(s).find("> li > a").removeAttr("tabindex"),
                                        $("." + t.menuClass)
                                            .removeClass(t.menuClass)
                                            .find(a)
                                            .attr("aria-hidden", "true")
                                            .find("a")
                                            .attr("tabIndex", -1);
                            else $(this).parent("li").find(a).find("a").length && (e.preventDefault(), $(this).parent("li").addClass(t.menuClass).find(a).attr("aria-hidden", "false"), $(this).parent("li").find("a[tabindex=1]").focus());
                        else
                            32 == e.keyCode
                                ? (e.preventDefault(), (window.location = $(this).attr("href")))
                                : 27 == e.keyCode
                                    ? (e.preventDefault(),
                                        $("." + t.menuClass)
                                            .removeClass(t.menuClass)
                                            .find("> a")
                                            .removeAttr("tabindex")
                                            .parent("li")
                                            .find(a)
                                            .attr("aria-hidden", "true")
                                            .find("a")
                                            .attr("tabIndex", -1))
                                    : $(this)
                                        .parent("li")
                                        .find(".fsNavPageInfo[aria-hidden=false] a")
                                        .each(function () {
                                            if ($(this).text().substring(0, 1).toLowerCase() == n[e.keyCode]) return $(this).focus(), !1;
                                        });
                    });
                var d = $(this).find(a).find("> ul a, > .wrapper-info > .wrapper-info-inner > .wrapper-description a");
                $(d).bind("focus mouseenter mouseleave keydown", function () {
                    $(this)
                        .parent()
                        .parent()
                        .find("." + t.menuClass)
                        .removeClass(t.menuClass)
                        .find(a)
                        .attr("aria-hidden", "true"),
                        $(this).next(a).attr("aria-hidden", "false").parentsUntil(s, "li").addClass(t.menuClass);
                }),
                    $(d).keydown(function (e) {
                        var i = $(this).parents(a).find("> ul a, > .wrapper-info > .wrapper-info-inner > .wrapper-description a").length,
                            o = parseInt($(this).attr("tabindex"));
                        if (38 == e.keyCode)
                            e.preventDefault(),
                                1 == o
                                    ? $(this).parents(a).parent("li").find("a").first().focus()
                                    : $(this)
                                        .parents(a)
                                        .find("a[tabindex=" + (o - 1) + "]")
                                        .parentsUntil(s, "li")
                                        .addClass(t.menuClass)
                                        .find("a[tabindex=" + (o - 1) + "]")
                                        .focus();
                        else if (39 == e.keyCode)
                            e.preventDefault(),
                                0 == $(this).parents(s).find("a[tabindex='0']").parent("li").next("li").length
                                    ? $(this).parents(s).find("> li").first().find("a").first().focus()
                                    : $(this).parents(s).find("a[tabindex='0']").parent("li").next("li").find("a").first().focus();
                        else if (40 == e.keyCode)
                            e.preventDefault(),
                                o == i
                                    ? $(this).parents(a).parent("li").find("a").first().focus()
                                    : $(this)
                                        .parents(a)
                                        .find("a[tabindex=" + (o + 1) + "]")
                                        .focus();
                        else if (27 == e.keyCode || 37 == e.keyCode)
                            e.preventDefault(),
                                $("." + t.menuClass)
                                    .removeClass(t.menuClass)
                                    .find(a)
                                    .attr("aria-hidden", "true")
                                    .find("a")
                                    .attr("tabIndex", -1),
                                $(this).parentsUntil(s, "li").find("a").first().focus();
                        else if (9 == e.keyCode)
                            e.shiftKey
                                ? (e.preventDefault(),
                                    1 == o
                                        ? $(this).parents(a).parent("li").find("a").first().focus()
                                        : $(this)
                                            .parents(a)
                                            .find("a[tabindex=" + (o - 1) + "]")
                                            .parentsUntil(s, "li")
                                            .addClass(t.menuClass)
                                            .find("a[tabindex=" + (o - 1) + "]")
                                            .focus())
                                : o == i
                                    ? $(this).parents(a).parent("li").next("li").length
                                        ? (e.preventDefault(), $(this).parents(a).parent("li").next("li").find("a").first().focus())
                                        : ($(this).parents(s).find("> li > a").removeAttr("tabindex"),
                                            $("." + t.menuClass)
                                                .removeClass(t.menuClass)
                                                .find(a)
                                                .attr("aria-hidden", "true")
                                                .find("a")
                                                .attr("tabIndex", -1))
                                    : (e.preventDefault(),
                                        $(this)
                                            .parents(a)
                                            .find("a[tabindex=" + (o + 1) + "]")
                                            .focus());
                        else if (32 == e.keyCode) e.preventDefault(), (window.location = $(this).attr("href"));
                        else {
                            var r = !1;
                            $(this)
                                .parent("li")
                                .nextAll("li")
                                .find("a")
                                .each(function () {
                                    if ($(this).text().substring(0, 1).toLowerCase() == n[e.keyCode]) return $(this).focus(), (r = !0), !1;
                                }),
                                r ||
                                $(this)
                                    .parent("li")
                                    .prevAll("li")
                                    .find("a")
                                    .each(function () {
                                        if ($(this).text().substring(0, 1).toLowerCase() == n[e.keyCode]) return $(this).focus(), !1;
                                    });
                        }
                    }),
                    $(document).click(function () {
                        $(this).parents(s).find("> li > a").removeAttr("tabindex"),
                            $("." + t.menuClass)
                                .removeClass(t.menuClass)
                                .find(a)
                                .attr("aria-hidden", "true")
                                .find("a")
                                .attr("tabIndex", -1);
                    }),
                    $(this).click(function (e) {
                        e.stopPropagation();
                    });
            };
        },
        function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(0),
                a = n(1),
                s = n(2);
            n(3),
                (NAVIGATION = {
                    init: function () {
                        this.primaryNav(), this.secondaryNav(), this.subNav(), this.headerUtilityNav(), this.mobileMenu(), this.mobileLearningCenter(), this.mobileSearch(), this.social();
                    },
                    primaryNav: function () {
                        var e,
                            t = $(".nav-main-header");
                        t.length &&
                            ((e = t.find(".fsNavLevel1")),
                                e.find("> li > a").wrapInner("<span></span>"),
                                e.find("> li > .fsNavPageInfo").each(function () {
                                    var e = $(this),
                                        t = e.find("> .fsNavPageDescription"),
                                        n = e.find("> .fsNavPageThumbnail"),
                                        i = e.find("> .fsNavLevel2");
                                    e.parent("li");
                                    i.length && (i.prependTo(e), i.wrap('<div class="wrapper-navigation"></div>')),
                                        t.length && (t.appendTo(e), t.wrap('<div class="wrapper-description"></div>')),
                                        n.length && !t.length && (n.appendTo(e), n.wrap('<div class="wrapper-description"></div>'), (0, a.moveResourceImage)(n.find("img"), n.parent())),
                                        e.wrapInner('<div class="wrapper-info"><div class="wrapper-info-inner"></div></div>'),
                                        i.length && (i.clone().prependTo(e), i.addClass("nav-level-hide"));
                                }),
                                e.find(".fsNavLevel2 li > a").wrapInner("<span></span>"),
                                e.accessibility_menu_main(),
                                e.find("> li.fsNavParentPage").doubleTapToGo(),
                                t.attr("updated", ""));
                    },
                    secondaryNav: function () {
                        $(".nav-secondary.fsNavigation").each(function (e) {
                            var t = $(this),
                                n = t.find("h2.fsElementTitle"),
                                i = t.find("nav"),
                                a = t.find("ul.fsNavLevel1");
                            a.length
                                ? (n.length &&
                                    (n.wrapInner('<button class="toggle-secondary"></button>'),
                                        t.on("click", ".toggle-secondary", function (e) {
                                            t.toggleClass("nav-collapsed"), i.slideToggle(400, function (e) { });
                                        })),
                                    t.find(".fsNavLevel2 .fsNavPageInfo").remove(),
                                    a.find("> li > a").wrapInner("<span></span>"))
                                : t.addClass("nav-hide"),
                                t.attr("updated", "");
                        });
                    },
                    subNav: function () {
                        var e = $(".nav-sub.fsNavigation");
                        e.length &&
                            (e.find("a").wrapInner("<span></span>"),
                                e.find("li.fsNavParentPage").each(function (e) {
                                    var t = $(this),
                                        n = t.find("> a");
                                    $('<button class="menu-toggle" aria-expanded="false"><span>Toggle ' + n.text() + "</span></button>").insertAfter(n);
                                }),
                                e.find('li.fsNavParentPage[class*="fsNavCurrentPage"]').addClass("menu-open"),
                                e.find('li.fsNavParentPage[class*="fsNavCurrentPage"] > button.menu-toggle').attr("aria-expanded", !0),
                                e.find('li.fsNavParentPage[class*="fsNavCurrentPage"] > .fsNavPageInfo').show(),
                                e.on("click", ".menu-toggle", function (e) {
                                    e.preventDefault(), e.stopPropagation();
                                    var t = $(this),
                                        n = t.parent(),
                                        i = t.siblings(".fsNavPageInfo"),
                                        a = !n.hasClass("menu-open");
                                    a ? n.addClass("menu-opening") : (n.removeClass("menu-open"), t.attr("aria-expanded", !1), n.addClass("menu-closing")),
                                        n.addClass("menu-sliding"),
                                        i.slideToggle(400, function () {
                                            n.removeClass("menu-sliding menu-closing menu-opening"), a && (n.addClass("menu-open"), t.attr("aria-expanded", !0));
                                        });
                                }),
                                e.attr("updated", ""));
                    },
                    headerUtilityNav: function () {
                        var e = $(".fsHeader .nav-utility-header");
                        e.length && (e.find(".fsNavLevel1 > li > a").wrapInner("<span></span>"), e.find(".fsNavLevel1").accessibility_menu(), e.attr("updated", ""));
                    },
                    breadcrumbs: function () {
                        var e = $(".fsHeader .header-breadcrumb"),
                            t = $(".fsHeader .nav-breadcrumb-header");
                        $(".fsPageTitle");
                        e.length && (e.prependTo("#fsPageBodyWrapper"), t.length && 1 === t.find("li").length && t.addClass("nav-hide"), e.attr("updated", ""));
                    },
                    mobileMenu: function () {
                        var e,
                            t = $("#fsHeader, #fsMenu"),
                            n = "off-canvas-active",
                            o = $('<button type="button" class="toggle-off-canvas-menu"><div class="toggle-off-canvas-icon"><span></span><span></span><span></span><span></span></div><span>Open Menu</span></button>'),
                            r = $('<button type="button" class="toggle-off-canvas-menu"><div class="toggle-off-canvas-icon"><span></span><span></span><span></span><span></span></div><span>Close Menu</span></button>'),
                            l = (o.find("span"), $("#fsMenu .off-canvas-container")),
                            d = ($("#fsMenu .fsMenu"), l.find(".nav-main-mobile"));
                        o.appendTo(".header-top-columns > .fsStyleColumn-2"),
                            r.appendTo(l.find("> .fsElementContent")),
                            t.on("click", ".toggle-off-canvas-menu, .toggle-search-mobile", function (t) {
                                t.preventDefault(),
                                    t.stopPropagation(),
                                    i.html.hasClass(n)
                                        ? (i.html.removeClass(n), o.focus())
                                        : ((e = $(window).scrollTop()),
                                            i.html.addClass(n),
                                            r.focus(),
                                            (0, s.trapFocus)(l[0], function (e) {
                                                i.html.removeClass(n), o.focus();
                                            }),
                                            $(document).scrollTop(e));
                            }),
                            l.find(".fsNavigation").find("a").wrapInner("<span></span>"),
                            $("#fsMenu .fsMenu")
                                .on("click..off-canvas-overlay", "> .off-canvas-overlay", function (e) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        i.html.removeClass(n),
                                        setTimeout(function () {
                                            l.removeClass("active"), d.find("li.menu-open").removeClass("menu-open");
                                        }, 600);
                                })
                                .prepend('<div class="off-canvas-overlay"></div>'),
                            d.find("li.fsNavParentPage").each(function (e) {
                                var t = $(this),
                                    n = t.find("> a"),
                                    i = t.find("> .fsNavPageInfo"),
                                    s = t.find("> .fsNavPageInfo > .fsNavPageDescription"),
                                    o = t.find("> .fsNavPageInfo > .fsNavPageThumbnail");
                                $('<button type="button" class="menu-toggle"><span>' + n.text() + "</span></button>").insertAfter(n),
                                    i.length &&
                                    (n.addClass("menu-parent-link").prependTo(i.find("> ul")).wrap("<li></li>"),
                                        s.length && (s.appendTo(i), s.wrap('<div class="wrapper-description"></div>')),
                                        o.length && !s.length && (o.appendTo(i), o.wrap('<div class="wrapper-description"></div>'), (0, a.moveResourceImage)(o.find("img"), o.parent())),
                                        i.wrapInner('<div class="wrapper-info"></div>'),
                                        i.prepend('<div class="toggle-back-top"><button type="button" class="toggle-back"><span>الرجوع</span></button></div>'));
                            }),
                            d.on("click", ".toggle-back", function (e) {
                                e.preventDefault(), e.stopPropagation();
                                var t = $(this),
                                    n = t.closest("li"),
                                    i = n.find("> .menu-toggle");
                                n.removeClass("menu-open"), l.removeClass("active"), i.focus();
                            }),
                            d.on("click", ".menu-toggle", function (e) {
                                e.preventDefault(), e.stopPropagation();
                                var t = $(this),
                                    n = t.siblings(".fsNavPageInfo"),
                                    i = t.closest("li"),
                                    a = n.find("> .toggle-back-top > .toggle-back");
                                n.find("> .wrapper-info")[0].scrollTo(0, 0),
                                    i.addClass("menu-open"),
                                    l.addClass("active"),
                                    a.length && a.focus(),
                                    (0, s.trapFocus)(n[0], function (e) {
                                        i.removeClass("menu-open"), l.removeClass("active"), t.focus();
                                    });
                            });
                    },
                    mobileSubNav: function () {
                        var e = $(".nav-sub-mobile.fsNavigation"),
                            t = e.find("ul.fsNavLevel1 > li.fsNavParentPage");
                        e.length &&
                            (t.length
                                ? (e.find("a").wrapInner("<span></span>"),
                                    e.find("li.fsNavParentPage").each(function (e) {
                                        var t = $(this),
                                            n = t.find("> a");
                                        $('<button class="menu-toggle" aria-expanded="false"><span>Toggle ' + n.text() + "</span></button>").insertAfter(n);
                                    }),
                                    e.find('li.fsNavParentPage[class*="fsNavCurrentPage"]').addClass("menu-open"),
                                    e.find('li.fsNavParentPage[class*="fsNavCurrentPage"] > button.menu-toggle').attr("aria-expanded", !0),
                                    e.find('li.fsNavParentPage[class*="fsNavCurrentPage"] > .fsNavPageInfo').show(),
                                    e.on("click", ".menu-toggle", function (e) {
                                        e.preventDefault(), e.stopPropagation();
                                        var t = $(this),
                                            n = t.parent(),
                                            i = t.siblings(".fsNavPageInfo"),
                                            a = !n.hasClass("menu-open");
                                        a ? n.addClass("menu-opening") : (n.removeClass("menu-open"), t.attr("aria-expanded", !1), n.addClass("menu-closing")),
                                            n.addClass("menu-sliding"),
                                            i.slideToggle(400, function () {
                                                n.removeClass("menu-sliding menu-closing menu-opening"), a && (n.addClass("menu-open"), t.attr("aria-expanded", !0));
                                            });
                                    }))
                                : e.attr("hide", "")),
                            e.attr("updated", "");
                    },
                    mobileLearningCenter: function () {
                        var e,
                            t = $("#fsMenu .mobile-learning-container.fsContainer"),
                            n = $("#fsMenu .nav-learning-mobile.fsNavigation"),
                            i = $("#fsMenu .off-canvas-container"),
                            a = $("#fsMenu .nav-utility-mobile.fsNavigation li.nav-utility-learning > a");
                        a.length &&
                            n.length &&
                            t.length &&
                            ((e = $('<button type="button" class="toggle-back"><span>Back</span></button>').prependTo(t)),
                                e.wrap('<div class="toggle-back-top"></div>'),
                                a.on("click", function (t) {
                                    t.preventDefault(), t.stopPropagation(), i.addClass("active learning-mobile-open"), e.focus();
                                }),
                                t.on("click", ".toggle-back", function (e) {
                                    e.preventDefault(), e.stopPropagation(), i.removeClass("active learning-mobile-open"), a.focus();
                                }),
                                (0, s.trapFocus)(t[0], function (e) {
                                    i.removeClass("active learning-mobile-open"), a.focus();
                                }));
                    },
                    mobileSearch: function () {
                        var e,
                            t = $("#fsMenu .mobile-search-container.fsContainer"),
                            n = $("#fsMenu .mobile-search.fsSearchElement"),
                            i = $("#fsMenu .off-canvas-container"),
                            a = $("#fsMenu .nav-utility-mobile.fsNavigation li.nav-utility-search > a");
                        a.length &&
                            n.length &&
                            t.length &&
                            ((e = $('<button type="button" class="toggle-back"><span>Back</span></button>').prependTo(t)),
                                e.wrap('<div class="toggle-back-top"></div>'),
                                a.on("click", function (t) {
                                    t.preventDefault(), t.stopPropagation(), i.addClass("active search-mobile-open"), e.focus();
                                }),
                                t.on("click", ".toggle-back", function (e) {
                                    e.preventDefault(), e.stopPropagation(), i.removeClass("active search-mobile-open"), a.focus();
                                }),
                                (0, s.trapFocus)(t[0], function (e) {
                                    i.removeClass("active search-mobile-open"), a.focus();
                                }));
                    },
                    social: function () {
                        $(".nav-social.fsNavigation").each(function () {
                            $(this)
                                .find("a")
                                .contents()
                                .filter(function () {
                                    return 3 == this.nodeType && "" != $.trim(this.nodeValue);
                                })
                                .wrap('<span class="fsStyleSROnly"></span>');
                        });
                    },
                }),
                (t.default = NAVIGATION);
        },
        function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(0),
                a = (n(1), n(2));
            n(17),
                (DEFAULTS = {
                    init: function () {
                        this.misc(), this.fullWidthPanelCSS(), this.headerSticky(), this.headerSearch(), this.footerSections(), this.relocateAlerts(), this.bannerCheck(), this.cards(), this.postUpdate();
                    },
                    misc: function () {
                        $(".fsCalendar .fsDayContainer > article:first-child").unwrap();
                    },
                    fullWidthPanelCSS: function () {
                        i.body.hasClass("fsComposeMode") || i.body.append('<style type="text/css">:root { --scrollbar-width: ' + (window.innerWidth - document.body.clientWidth) + "px; }</style>");
                    },
                    headerSticky: function () {
                        var e,
                            t = 0,
                            n = "sticky-active",
                            a = function () {
                                var a = window.pageYOffset || document.documentElement.scrollTop;
                                a > e && (a > t ? (i.html.removeClass(n), i.html.attr("sd", "down")) : (i.html.addClass(n), i.html.attr("sd", "up"))), (t = a <= 0 ? 0 : a);
                            },
                            s = function () {
                                e = $("#fsHeader .header-top").height();
                            },
                            o = function (e, t) {
                                clearTimeout(e._tId),
                                    (e._tId = setTimeout(function () {
                                        e();
                                    }, t));
                            };
                        s(),
                            $(window).on("scroll", function () {
                                o(a, 20);
                            }),
                            $(window).on("resize", function () {
                                o(s, 20);
                            }),
                            i.body.waypoint(
                                function (e) {
                                    "down" === e ? i.html.addClass("sticky-possible") : "up" === e && (i.html.removeClass(n), i.html.removeClass("sticky-possible"));
                                },
                                {
                                    offset: function () {
                                        return -e;
                                    },
                                }
                            );
                    },
                    headerSearch: function () {
                        var e = $("#fsHeader .header-search-container.fsContainer"),
                            t = $("#fsHeader .header-search.fsSearchElement");
                        if (e.length && t.length) {
                            var n,
                                s,
                                o = (t.find("input.fsStyleSearchField"), $("#fsHeader li.nav-utility-search > a")),
                                r = $('<button type="button" class="header-search-close"><span>Close Search</span></button>').prependTo(e.find("> .fsElementContent")),
                                l = "search-header-open",
                                d = ".search-header",
                                f = function e() {
                                    arguments.length > 0 && void 0 !== arguments[0] && !arguments[0]
                                        ? ($(document).off("keyup" + d), i.html.off("click" + d), i.html.off("focusin" + d), i.html.removeClass(l), s.attr("aria-expanded", !1), s.focus())
                                        : (i.html.addClass(l),
                                            s.attr("aria-expanded", !0),
                                            s.blur(),
                                            r.length && r.focus(),
                                            (0, a.trapFocus)($("#fsHeader .header-search-container")[0], function (t) {
                                                e(!1);
                                            }),
                                            i.html.on("click" + d, function (t) {
                                                e(!1);
                                            }));
                                };
                            e.find("> .fsElementContent").on("click", "button.header-search-close", function (e) {
                                f(!1);
                            }),
                                e.on("click", function (e) {
                                    e.stopPropagation();
                                }),
                                o.length &&
                                ((n = o.parent()),
                                    (s = $((0, a.replaceTagName)(o, "button"))),
                                    o.replaceWith(s.removeAttr("href target").attr("role", "button").addClass("toggle-search").attr("aria-expanded", !1).prepend('<span class="fsStyleSROnly">Toggle </span>').wrapInner("<span></span>")),
                                    n.on("click", "button.toggle-search", function (e) {
                                        e.preventDefault(), e.stopPropagation(), f(!i.html.hasClass(l));
                                    }));
                        }
                    },
                    footerSections: function () {
                        var e,
                            t = $("#fsFooter .footer-middle-sections.fsAccordion");
                        t.length &&
                            ((e = t.find("> .fsElementContent > .fsPanel")),
                                e.each(function (n) {
                                    var i = $(this),
                                        a = i.find("> header > .fsElementTitle");
                                    a.length && i.prepend('<div class="section-title">' + a.text() + "</div>"), i.attr("section-index", n + 1), t.find("> .fsElementContent").attr("sections", e.length);
                                }),
                                t.attr("updated", ""));
                    },
                    relocateAlerts: function () {
                        $(".fsNews .fsAlertFeeds, .fsPostElement .fsAlertFeeds, .fsCalendar .fsAlertFeeds").each(function (e) {
                            var t = $(this),
                                n = t.closest(".fsElement"),
                                i = n.find("header");
                            n.find("header > .fsElementTitle").length && (n.addClass("fsHasAlertFeeds"), i.append(t));
                        });
                    },
                    relocateFinalsite: function () {
                        $("#fsPoweredByFinalsite").appendTo(".footer-bottom-columns .fsStyleColumn-2");
                    },
                    bannerCheck: function () {
                        var e = $("#fsBannerLeft, #fsBannerRight"),
                            t = function (e) {
                                var t = e.attr("id").substr(2);
                                e.find("> .fsBanner").height() ? i.body.removeClass("empty" + t) : i.body.addClass("empty" + t);
                            };
                        if (!e.length) return !1;
                        $(window)
                            .on("resize", function (n) {
                                e.length > 1
                                    ? e.each(function (n) {
                                        t(e.eq(n));
                                    })
                                    : t(e);
                            })
                            .trigger("resize");
                    },
                    cards: function () {
                        i.body.hasClass("fsComposeMode") ||
                            $('.fsContent[class*="card-"]').each(function (e) {
                                var t,
                                    n = $(this),
                                    i = n.find("header"),
                                    a = n.find("header .fsElementHeaderContent"),
                                    s = n.find("header .fsElementHeaderContent figure.fsImage").first();
                                s.length &&
                                    ((t = $('<div class="top-image"></div>').insertBefore(n.find("> .fsElementContent"))),
                                        t.prepend(s),
                                        a.length &&
                                        (a.children().each(function () {
                                            "" === $.trim($(this).text()) && $(this).remove();
                                        }),
                                            ("" !== $.trim(a.html()) && "" !== $.trim(a.text())) || a.remove()),
                                        ((i.length && "" === $.trim(i.html())) || "" === $.trim(i.text())) && i.remove(),
                                        n.find("> header").length || n.attr("top-image-only", ""),
                                        n.attr("updated", ""));
                            });
                    },
                    postUpdate: function () {
                        $(".fsPostElement article").each(function (e) {
                            var t = $(this),
                                n = t.find(".fsThumbnail"),
                                i = t.find(".fsTags");
                            n.length && t.addClass("has-image"), i.length && (t.append(i), i.attr("updated", ""));
                        });
                    },
                }),
                (t.default = DEFAULTS);
        },
        function (e, t) {
            !(function () {
                "use strict";
                function e(i) {
                    if (!i) throw new Error("No options passed to Waypoint constructor");
                    if (!i.element) throw new Error("No element option passed to Waypoint constructor");
                    if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
                    (this.key = "waypoint-" + t),
                        (this.options = e.Adapter.extend({}, e.defaults, i)),
                        (this.element = this.options.element),
                        (this.adapter = new e.Adapter(this.element)),
                        (this.callback = i.handler),
                        (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
                        (this.enabled = this.options.enabled),
                        (this.triggerPoint = null),
                        (this.group = e.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
                        (this.context = e.Context.findOrCreateByElement(this.options.context)),
                        e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]),
                        this.group.add(this),
                        this.context.add(this),
                        (n[this.key] = this),
                        (t += 1);
                }
                var t = 0,
                    n = {};
                (e.prototype.queueTrigger = function (e) {
                    this.group.queueTrigger(this, e);
                }),
                    (e.prototype.trigger = function (e) {
                        this.enabled && this.callback && this.callback.apply(this, e);
                    }),
                    (e.prototype.destroy = function () {
                        this.context.remove(this), this.group.remove(this), delete n[this.key];
                    }),
                    (e.prototype.disable = function () {
                        return (this.enabled = !1), this;
                    }),
                    (e.prototype.enable = function () {
                        return this.context.refresh(), (this.enabled = !0), this;
                    }),
                    (e.prototype.next = function () {
                        return this.group.next(this);
                    }),
                    (e.prototype.previous = function () {
                        return this.group.previous(this);
                    }),
                    (e.invokeAll = function (e) {
                        var t = [];
                        for (var i in n) t.push(n[i]);
                        for (var a = 0, s = t.length; a < s; a++) t[a][e]();
                    }),
                    (e.destroyAll = function () {
                        e.invokeAll("destroy");
                    }),
                    (e.disableAll = function () {
                        e.invokeAll("disable");
                    }),
                    (e.enableAll = function () {
                        e.Context.refreshAll();
                        for (var t in n) n[t].enabled = !0;
                        return this;
                    }),
                    (e.refreshAll = function () {
                        e.Context.refreshAll();
                    }),
                    (e.viewportHeight = function () {
                        return window.innerHeight || document.documentElement.clientHeight;
                    }),
                    (e.viewportWidth = function () {
                        return document.documentElement.clientWidth;
                    }),
                    (e.adapters = []),
                    (e.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }),
                    (e.offsetAliases = {
                        "bottom-in-view": function () {
                            return this.context.innerHeight() - this.adapter.outerHeight();
                        },
                        "right-in-view": function () {
                            return this.context.innerWidth() - this.adapter.outerWidth();
                        },
                    }),
                    (window.Waypoint = e);
            })(),
                (function () {
                    "use strict";
                    function e(e) {
                        window.setTimeout(e, 1e3 / 60);
                    }
                    function t(e) {
                        (this.element = e),
                            (this.Adapter = a.Adapter),
                            (this.adapter = new this.Adapter(e)),
                            (this.key = "waypoint-context-" + n),
                            (this.didScroll = !1),
                            (this.didResize = !1),
                            (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
                            (this.waypoints = { vertical: {}, horizontal: {} }),
                            (e.waypointContextKey = this.key),
                            (i[e.waypointContextKey] = this),
                            (n += 1),
                            a.windowContext || ((a.windowContext = !0), (a.windowContext = new t(window))),
                            this.createThrottledScrollHandler(),
                            this.createThrottledResizeHandler();
                    }
                    var n = 0,
                        i = {},
                        a = window.Waypoint,
                        s = window.onload;
                    (t.prototype.add = function (e) {
                        var t = e.options.horizontal ? "horizontal" : "vertical";
                        (this.waypoints[t][e.key] = e), this.refresh();
                    }),
                        (t.prototype.checkEmpty = function () {
                            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                                t = this.Adapter.isEmptyObject(this.waypoints.vertical),
                                n = this.element == this.element.window;
                            e && t && !n && (this.adapter.off(".waypoints"), delete i[this.key]);
                        }),
                        (t.prototype.createThrottledResizeHandler = function () {
                            function e() {
                                t.handleResize(), (t.didResize = !1);
                            }
                            var t = this;
                            this.adapter.on("resize.waypoints", function () {
                                t.didResize || ((t.didResize = !0), a.requestAnimationFrame(e));
                            });
                        }),
                        (t.prototype.createThrottledScrollHandler = function () {
                            function e() {
                                t.handleScroll(), (t.didScroll = !1);
                            }
                            var t = this;
                            this.adapter.on("scroll.waypoints", function () {
                                (t.didScroll && !a.isTouch) || ((t.didScroll = !0), a.requestAnimationFrame(e));
                            });
                        }),
                        (t.prototype.handleResize = function () {
                            a.Context.refreshAll();
                        }),
                        (t.prototype.handleScroll = function () {
                            var e = {},
                                t = {
                                    horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" },
                                    vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" },
                                };
                            for (var n in t) {
                                var i = t[n],
                                    a = i.newScroll > i.oldScroll,
                                    s = a ? i.forward : i.backward;
                                for (var o in this.waypoints[n]) {
                                    var r = this.waypoints[n][o];
                                    if (null !== r.triggerPoint) {
                                        var l = i.oldScroll < r.triggerPoint,
                                            d = i.newScroll >= r.triggerPoint,
                                            f = l && d,
                                            c = !l && !d;
                                        (f || c) && (r.queueTrigger(s), (e[r.group.id] = r.group));
                                    }
                                }
                            }
                            for (var u in e) e[u].flushTriggers();
                            this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll };
                        }),
                        (t.prototype.innerHeight = function () {
                            return this.element == this.element.window ? a.viewportHeight() : this.adapter.innerHeight();
                        }),
                        (t.prototype.remove = function (e) {
                            delete this.waypoints[e.axis][e.key], this.checkEmpty();
                        }),
                        (t.prototype.innerWidth = function () {
                            return this.element == this.element.window ? a.viewportWidth() : this.adapter.innerWidth();
                        }),
                        (t.prototype.destroy = function () {
                            var e = [];
                            for (var t in this.waypoints) for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
                            for (var i = 0, a = e.length; i < a; i++) e[i].destroy();
                        }),
                        (t.prototype.refresh = function () {
                            var e,
                                t = this.element == this.element.window,
                                n = t ? void 0 : this.adapter.offset(),
                                i = {};
                            this.handleScroll(),
                                (e = {
                                    horizontal: {
                                        contextOffset: t ? 0 : n.left,
                                        contextScroll: t ? 0 : this.oldScroll.x,
                                        contextDimension: this.innerWidth(),
                                        oldScroll: this.oldScroll.x,
                                        forward: "right",
                                        backward: "left",
                                        offsetProp: "left",
                                    },
                                    vertical: { contextOffset: t ? 0 : n.top, contextScroll: t ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" },
                                });
                            for (var s in e) {
                                var o = e[s];
                                for (var r in this.waypoints[s]) {
                                    var l,
                                        d,
                                        f,
                                        c,
                                        u,
                                        p = this.waypoints[s][r],
                                        h = p.options.offset,
                                        v = p.triggerPoint,
                                        g = 0,
                                        m = null == v;
                                    p.element !== p.element.window && (g = p.adapter.offset()[o.offsetProp]),
                                        "function" == typeof h ? (h = h.apply(p)) : "string" == typeof h && ((h = parseFloat(h)), p.options.offset.indexOf("%") > -1 && (h = Math.ceil((o.contextDimension * h) / 100))),
                                        (l = o.contextScroll - o.contextOffset),
                                        (p.triggerPoint = Math.floor(g + l - h)),
                                        (d = v < o.oldScroll),
                                        (f = p.triggerPoint >= o.oldScroll),
                                        (c = d && f),
                                        (u = !d && !f),
                                        !m && c
                                            ? (p.queueTrigger(o.backward), (i[p.group.id] = p.group))
                                            : !m && u
                                                ? (p.queueTrigger(o.forward), (i[p.group.id] = p.group))
                                                : m && o.oldScroll >= p.triggerPoint && (p.queueTrigger(o.forward), (i[p.group.id] = p.group));
                                }
                            }
                            return (
                                a.requestAnimationFrame(function () {
                                    for (var e in i) i[e].flushTriggers();
                                }),
                                this
                            );
                        }),
                        (t.findOrCreateByElement = function (e) {
                            return t.findByElement(e) || new t(e);
                        }),
                        (t.refreshAll = function () {
                            for (var e in i) i[e].refresh();
                        }),
                        (t.findByElement = function (e) {
                            return i[e.waypointContextKey];
                        }),
                        (window.onload = function () {
                            s && s(), t.refreshAll();
                        }),
                        (a.requestAnimationFrame = function (t) {
                            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t);
                        }),
                        (a.Context = t);
                })(),
                (function () {
                    "use strict";
                    function e(e, t) {
                        return e.triggerPoint - t.triggerPoint;
                    }
                    function t(e, t) {
                        return t.triggerPoint - e.triggerPoint;
                    }
                    function n(e) {
                        (this.name = e.name), (this.axis = e.axis), (this.id = this.name + "-" + this.axis), (this.waypoints = []), this.clearTriggerQueues(), (i[this.axis][this.name] = this);
                    }
                    var i = { vertical: {}, horizontal: {} },
                        a = window.Waypoint;
                    (n.prototype.add = function (e) {
                        this.waypoints.push(e);
                    }),
                        (n.prototype.clearTriggerQueues = function () {
                            this.triggerQueues = { up: [], down: [], left: [], right: [] };
                        }),
                        (n.prototype.flushTriggers = function () {
                            for (var n in this.triggerQueues) {
                                var i = this.triggerQueues[n],
                                    a = "up" === n || "left" === n;
                                i.sort(a ? t : e);
                                for (var s = 0, o = i.length; s < o; s += 1) {
                                    var r = i[s];
                                    (r.options.continuous || s === i.length - 1) && r.trigger([n]);
                                }
                            }
                            this.clearTriggerQueues();
                        }),
                        (n.prototype.next = function (t) {
                            this.waypoints.sort(e);
                            var n = a.Adapter.inArray(t, this.waypoints);
                            return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1];
                        }),
                        (n.prototype.previous = function (t) {
                            this.waypoints.sort(e);
                            var n = a.Adapter.inArray(t, this.waypoints);
                            return n ? this.waypoints[n - 1] : null;
                        }),
                        (n.prototype.queueTrigger = function (e, t) {
                            this.triggerQueues[t].push(e);
                        }),
                        (n.prototype.remove = function (e) {
                            var t = a.Adapter.inArray(e, this.waypoints);
                            t > -1 && this.waypoints.splice(t, 1);
                        }),
                        (n.prototype.first = function () {
                            return this.waypoints[0];
                        }),
                        (n.prototype.last = function () {
                            return this.waypoints[this.waypoints.length - 1];
                        }),
                        (n.findOrCreate = function (e) {
                            return i[e.axis][e.name] || new n(e);
                        }),
                        (a.Group = n);
                })(),
                (function () {
                    "use strict";
                    function e(e) {
                        this.$element = t(e);
                    }
                    var t = window.jQuery,
                        n = window.Waypoint;
                    t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (t, n) {
                        e.prototype[n] = function () {
                            var e = Array.prototype.slice.call(arguments);
                            return this.$element[n].apply(this.$element, e);
                        };
                    }),
                        t.each(["extend", "inArray", "isEmptyObject"], function (n, i) {
                            e[i] = t[i];
                        }),
                        n.adapters.push({ name: "jquery", Adapter: e }),
                        (n.Adapter = e);
                })(),
                (function () {
                    "use strict";
                    function e(e) {
                        return function () {
                            var n = [],
                                i = arguments[0];
                            return (
                                e.isFunction(arguments[0]) && ((i = e.extend({}, arguments[1])), (i.handler = arguments[0])),
                                this.each(function () {
                                    var a = e.extend({}, i, { element: this });
                                    "string" == typeof a.context && (a.context = e(this).closest(a.context)[0]), n.push(new t(a));
                                }),
                                n
                            );
                        };
                    }
                    var t = window.Waypoint;
                    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto));
                })();
        },
        function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(0),
                a = n(4);
            n(19),
                (DEFAULT_STYLES = {
                    init: function () {
                        this.tableStyle(), this.postAlignment(), this.calendarAlignment(), this.tabResources();
                    },
                    tableStyle: function () {
                        function e() {
                            $("table.fs_style_98, table.fsElementTable").each(function () {
                                $(this).parent().hasClass("table-overflow") || $(this).wrap('<div class="table-overflow" style="overflow-x: auto;" tabindex="0"></div>');
                            });
                        }
                        i.notComposeMode && e(),
                            FS.events.onComposeModeChanged(function (t) {
                                !1 === t
                                    ? e()
                                    : !0 === t &&
                                    $("table.fs_style_98, table.fsElementTable").each(function () {
                                        $(this).parent().hasClass("table-overflow") && $(this).unwrap();
                                    });
                            });
                    },
                    postAlignment: function () {
                        var e = function (e, t, n) {
                            var i,
                                a,
                                s,
                                o = e.attr("id");
                            void 0 !== o && o.length && ((a = o.split("_")), a.length > 1 && ((s = a[0] + "_" + a[1]), (i = $("#" + s)), i.length || (i = $("#" + void 0)), i.length && i.hasClass(t) && "function" == typeof n && n()));
                        },
                            t = function (e) {
                                var t = e.is(".fsDialog.fsElementDialog") ? e.find("article") : e,
                                    n = t.hasClass("fsThumbnailAlignLeft") ? "left" : !!t.hasClass("fsThumbnailAlignRight") && "right";
                                n &&
                                    e.find("article").each(function () {
                                        var e = $(this),
                                            t = e.find(".fsThumbnail");
                                        e.find("> .article-wrapper").length ||
                                            (e.wrapInner('<div class="article-text"></div>'),
                                                t.length && ("left" === n ? e.prepend(t) : e.append(t), t.wrap('<div class="article-image"></div>')),
                                                e.wrapInner('<div class="article-wrapper"></div>'));
                                    });
                            };
                        $('.fsPostElement[class*="fsThumbnailAlign"]').each(function () {
                            t($(this));
                        }),
                            FS.events.onElementUpdated("Post", function (e) {
                                t(e);
                            }),
                            FS.events.onElementAdded("Post", function (e) {
                                t(e);
                            }),
                            FS.events.onElementMoreLoaded("Post", function (e) {
                                t(e);
                            }),
                            FS.events.onElementDialogShown("Post", function (n) {
                                e(n, "fsPostElement", function () {
                                    t(n.parent());
                                });
                            });
                    },
                    calendarAlignment: function () {
                        var e = function (e, t, n) {
                            var i,
                                a,
                                s,
                                o = e.attr("id");
                            void 0 !== o && o.length && ((a = o.split("_")), a.length > 1 && ((s = a[0] + "_" + a[1]), (i = $("#" + s)), i.length || (i = $("#" + void 0)), i.length && i.hasClass(t) && "function" == typeof n && n()));
                        },
                            t = function (e) {
                                e.find("article").each(function () {
                                    var e = $(this),
                                        t = e.find("time.fsDate");
                                    e.find("> .article-wrapper").length || (e.wrapInner('<div class="article-text"></div>'), e.prepend(t), t.wrap('<div class="article-date"></div>'), e.wrapInner('<div class="article-wrapper"></div>'));
                                });
                            };
                        $(".fsCalendar.fsList, .fsCalendar.fsSlideshow, .fsCalendar.fsSingleItem").each(function () {
                            t($(this));
                        }),
                            FS.events.onElementUpdated("Calendar", function (e) {
                                t(e);
                            }),
                            FS.events.onElementAdded("Calendar", function (e) {
                                t(e);
                            }),
                            FS.events.onElementMoreLoaded("Calendar", function (e) {
                                t(e);
                            }),
                            FS.events.onElementDialogShown("Calendar", function (n) {
                                e(n, "fsCalendar", function () {
                                    t(n.parent());
                                });
                            });
                    },
                    tabResources: function () {
                        $(".fsTabs .fsPanel:not(.fsStateOpen) .fsResourceElement.fsSingleItem .fsResourceTypeImage img").each(function () {
                            var e = $(this);
                            e.attr("src", (0, a.getImageSize)(e, e.closest(".fsTabs").width()));
                        });
                    },
                }),
                (t.default = DEFAULT_STYLES);
        },
        function (e, t) {
            !(function () {
                "use strict";
                if ("undefined" != typeof window) {
                    var e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                        t = !!e && parseInt(e[1], 10) >= 16;
                    if ("objectFit" in document.documentElement.style != !1 && !t)
                        return void (window.objectFitPolyfill = function () {
                            return !1;
                        });
                    var n = function (e) {
                        var t = window.getComputedStyle(e, null),
                            n = t.getPropertyValue("position"),
                            i = t.getPropertyValue("overflow"),
                            a = t.getPropertyValue("display");
                        (n && "static" !== n) || (e.style.position = "relative"),
                            "hidden" !== i && (e.style.overflow = "hidden"),
                            (a && "inline" !== a) || (e.style.display = "block"),
                            0 === e.clientHeight && (e.style.height = "100%"),
                            -1 === e.className.indexOf("object-fit-polyfill") && (e.className = e.className + " object-fit-polyfill");
                    },
                        i = function (e) {
                            var t = window.getComputedStyle(e, null),
                                n = {
                                    "max-width": "none",
                                    "max-height": "none",
                                    "min-width": "0px",
                                    "min-height": "0px",
                                    top: "auto",
                                    right: "auto",
                                    bottom: "auto",
                                    left: "auto",
                                    "margin-top": "0px",
                                    "margin-right": "0px",
                                    "margin-bottom": "0px",
                                    "margin-left": "0px",
                                };
                            for (var i in n) {
                                t.getPropertyValue(i) !== n[i] && (e.style[i] = n[i]);
                            }
                        },
                        a = function (e, t, n) {
                            var i, a, s, o, r;
                            if (((n = n.split(" ")), n.length < 2 && (n[1] = n[0]), "x" === e)) (i = n[0]), (a = n[1]), (s = "left"), (o = "right"), (r = t.clientWidth);
                            else {
                                if ("y" !== e) return;
                                (i = n[1]), (a = n[0]), (s = "top"), (o = "bottom"), (r = t.clientHeight);
                            }
                            return i === s || a === s
                                ? void (t.style[s] = "0")
                                : i === o || a === o
                                    ? void (t.style[o] = "0")
                                    : "center" === i || "50%" === i
                                        ? ((t.style[s] = "50%"), void (t.style["margin-" + s] = r / -2 + "px"))
                                        : i.indexOf("%") >= 0
                                            ? ((i = parseInt(i)), void (i < 50 ? ((t.style[s] = i + "%"), (t.style["margin-" + s] = r * (i / -100) + "px")) : ((i = 100 - i), (t.style[o] = i + "%"), (t.style["margin-" + o] = r * (i / -100) + "px"))))
                                            : void (t.style[s] = i);
                        },
                        s = function (e) {
                            var t = e.dataset ? e.dataset.objectFit : e.getAttribute("data-object-fit"),
                                s = e.dataset ? e.dataset.objectPosition : e.getAttribute("data-object-position");
                            (t = t || "cover"), (s = s || "50% 50%");
                            var o = e.parentNode;
                            n(o),
                                i(e),
                                (e.style.position = "absolute"),
                                (e.style.height = "100%"),
                                (e.style.width = "auto"),
                                "scale-down" === t && ((e.style.height = "auto"), e.clientWidth < o.clientWidth && e.clientHeight < o.clientHeight ? (a("x", e, s), a("y", e, s)) : ((t = "contain"), (e.style.height = "100%"))),
                                "none" === t
                                    ? ((e.style.width = "auto"), (e.style.height = "auto"), a("x", e, s), a("y", e, s))
                                    : ("cover" === t && e.clientWidth > o.clientWidth) || ("contain" === t && e.clientWidth < o.clientWidth)
                                        ? ((e.style.top = "0"), (e.style.marginTop = "0"), a("x", e, s))
                                        : "scale-down" !== t && ((e.style.width = "100%"), (e.style.height = "auto"), (e.style.left = "0"), (e.style.marginLeft = "0"), a("y", e, s));
                        },
                        o = function (e) {
                            if (void 0 === e) e = document.querySelectorAll("[data-object-fit]");
                            else if (e && e.nodeName) e = [e];
                            else {
                                if ("object" != typeof e || !e.length || !e[0].nodeName) return !1;
                                e = e;
                            }
                            for (var n = 0; n < e.length; n++)
                                if (e[n].nodeName) {
                                    var i = e[n].nodeName.toLowerCase();
                                    "img" !== i || t
                                        ? "video" === i &&
                                        (e[n].readyState > 0
                                            ? s(e[n])
                                            : e[n].addEventListener("loadedmetadata", function () {
                                                s(this);
                                            }))
                                        : e[n].complete
                                            ? s(e[n])
                                            : e[n].addEventListener("load", function () {
                                                s(this);
                                            });
                                }
                            return !0;
                        };
                    document.addEventListener("DOMContentLoaded", function () {
                        o();
                    }),
                        window.addEventListener("resize", function () {
                            o();
                        }),
                        (window.objectFitPolyfill = o);
                }
            })();
        },
        function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(0),
                a = n(2),
                s = n(1),
                o = n(4);
            n(3),
                n(21),
                (ENHANCEMENTS = {
                    init: function () {
                        i.notComposeMode &&
                            (this.heroFeatured(),
                                this.heroCombo(),
                                this.heroDefault(),
                                this.pageAlert(),
                                this.showcaseSlideshow(),
                                this.testimonialSlideshow(),
                                this.slideTabs(),
                                this.slideOver(),
                                this.featuredDuo(),
                                this.plainCTAs(),
                                this.infographicSlideshow(),
                                this.customPostFilter(),
                                this.customPostDetail(),
                                this.customPostSlideshow(),
                                this.customDirectory(),
                                this.featuredPostLogo());
                    },
                    heroFeatured: function () {
                        var e = $("#fsPageBodyWrapper .hero-featured.fsResourceElement.fsSingleItem").first();
                        e.insertAfter(".fsHeader .header-top"),
                            e.find("article").each(function (t) {
                                var n,
                                    i,
                                    a = $(this),
                                    r = a.find("img"),
                                    l = a.find("video"),
                                    d = e.attr("data-image-sizes"),
                                    f = $('<div class="slide-media"></div>'),
                                    c = "",
                                    u = "",
                                    p = a.find(".fsTitle").first(),
                                    h = a.find("figcaption, .fsDescription"),
                                    v = null;
                                (i = $('<div class="slide-overlay"></div>').prependTo(a)),
                                    i.append(f),
                                    f.wrap('<div class="slide-media-wrapper"></div>'),
                                    r.length &&
                                    (f.append(r),
                                        r.addClass("image-desktop"),
                                        r.attr("src", (0, o.getImageSize)(r, $(window).width())),
                                        void 0 !== d && ((n = $('<img class="image-mobile">').insertAfter(r)), (0, s.moveResourceImage)(e, n), e.removeAttr("data-image-sizes data-aspect-ratio style"))),
                                    l.length && l.remove(),
                                    (v = $('<div class="caption"></div>').wrap('<div class="caption-wrapper">')),
                                    p.length && "." !== $.trim(p.text()) && ((c += p.text()), p.remove()),
                                    p.length && "." === $.trim(p.text()).substr(-4, 1) && ((c = ""), p.remove()),
                                    h.length && "" !== $.trim(h.text()) && ((u += h.html()), h.remove()),
                                    $.trim(c).length ? (v.append('<div class="caption-title">' + c + "</div>"), i.prepend(v.parent())) : a.addClass("no-title"),
                                    $.trim(u).length ? (v.append('<div class="caption-description">' + u + "</div>"), i.prepend(v.parent())) : a.addClass("no-description"),
                                    e.find("figure").remove();
                            }),
                            e.find(".caption").length && e.attr("has-caption", ""),
                            e.attr("updated", "");
                    },
                    heroCombo: function () {
                        var e,
                            t,
                            n = $("#fsPageBodyWrapper .hero-combo.fsContainer").first();
                        if (n.length) {
                            if (
                                (n.find(".fsBreadcrumb.fsNavigation").length && n.attr("has-breadcrumbs", ""),
                                    n.find(".fsContent").length && n.attr("has-content", ""),
                                    n.find(".fsTwoColumnLayout").length && n.attr("columns", ""),
                                    (t = n.find(".fsTwoColumnLayout .fsStyleColumn-2 .fsResourceElement.fsSingleItem")),
                                    t.length)
                            ) {
                                n.attr("resource", "");
                                var i,
                                    a = t.find("video");
                                a.length &&
                                    (void 0 !== a.attr("autoplay"),
                                        (i = void 0 !== a.attr("controls")),
                                        t.find(".fsPlayOverlay").length
                                            ? t.find(".fsPlayOverlay button").append("<span>Play</span>")
                                            : i ||
                                            (function (e) {
                                                var t = e.find("video"),
                                                    i = t.attr("autoplay"),
                                                    a = !1,
                                                    s =
                                                        ($('<button class="video-toggle"><span></span></button>').insertAfter(t),
                                                            function () {
                                                                var t = e.hasClass("paused") ? "Play" : "Pause";
                                                                e.find(".video-toggle span").text(t);
                                                            });
                                                if (
                                                    (t.on("pause ended", function (n) {
                                                        if (a) {
                                                            var i = t[0].play();
                                                            void 0 !== i &&
                                                                i
                                                                    .then(function (e) {
                                                                        a = !1;
                                                                    })
                                                                    .catch(function (e) { });
                                                        } else e.addClass("paused"), s();
                                                    }),
                                                        t.on("play playing", function (t) {
                                                            e.removeClass("paused"), s();
                                                        }),
                                                        e.on("click", ".video-toggle", function (n) {
                                                            if (e.hasClass("paused")) {
                                                                var i = t[0].play();
                                                                void 0 !== i && i.then(function (e) { }).catch(function (e) { });
                                                            } else t[0].pause();
                                                        }),
                                                        void 0 !== i && i)
                                                ) {
                                                    var o = t[0].play();
                                                    void 0 !== o && o.then(function (e) { }).catch(function (e) { }), n.removeClass("paused");
                                                }
                                                s();
                                            })(t));
                            }
                            void 0 !== n.attr("data-image-sizes") &&
                                ((e = $('<div class="hero-combo-background"><div></div></div>').prependTo(n)),
                                    (0, s.moveResourceImage)(n, e.find("> div")),
                                    n.removeAttr("data-image-sizes data-aspect-ratio"),
                                    n.css("background-image", ""),
                                    n.attr("has-background-image", "")),
                                n.insertAfter(".fsHeader .header-top"),
                                n.attr("updated", "");
                        }
                    },
                    heroDefault: function () {
                        if (!i.body.hasClass("fsComposeMode")) {
                            var e,
                                t,
                                n = $(".hero.fsResourceElement");
                            if (n.length) {
                                i.html.hasClass("has-hero") || i.html.addClass("has-hero").removeClass("no-hero"), (hasHero = !0), n.length > 1 ? ((e = $("#fsPageBodyWrapper .hero.fsResourceElement").first()), n.not(e).remove()) : (e = n);
                                var a,
                                    s = e.find(".fsElementSlideshow"),
                                    o =
                                        (e.find("> header > .fsElementTitle"),
                                            e.find("> header > .fsElementHeaderContent"),
                                            $('<div class="slideshow-controls-container"><div class="slideshow-controls"><div class="slideshow-controls-inner"></div></div></div>').appendTo(s)),
                                    r = e.find(".fsElementSlideshowControls");
                                e.find(".scroll-to");
                                (t = e),
                                    (pageHero = e),
                                    e.insertAfter(".fsHeader .header-top"),
                                    s.length
                                        ? (i.html.addClass("hero-slideshow"),
                                            (a = function () {
                                                var t = (e.find(".scroll-to"), o.find(".slideshow-controls-inner"));
                                                s.find(".slide-overlay .slideshow-controls-container").remove(),
                                                    void 0 !== s.attr("data-dots") && "true" === s.attr("data-dots") && e.find(".fsPager").appendTo(t),
                                                    void 0 !== s.attr("data-arrows") && "true" === s.attr("data-arrows") && e.find(".slick-arrow").appendTo(t),
                                                    r.length && e.find(".fsElementSlideshowControls").appendTo(t);
                                            }),
                                            s.on("init", function (e, t) {
                                                setTimeout(function () {
                                                    setTimeout(function () {
                                                        void 0 === s.attr("updated") && (a(), s.attr("updated", ""));
                                                    }, 1);
                                                }, 1);
                                            }),
                                            s.on("breakpoint", function (e, t) {
                                                setTimeout(function () {
                                                    setTimeout(function () {
                                                        a();
                                                    }, 1);
                                                }, 1);
                                            }),
                                            s.on("beforeChange", function (e, t, n, i) {
                                                var a,
                                                    o = t.$slides.eq(n),
                                                    r = s.find(".slideshow-background"),
                                                    l = o.find(".slide-media").css("background-image");
                                                t.$slides.removeClass("slick-shown"),
                                                    "none" !== l
                                                        ? r.css("background-image", l)
                                                        : ((a = o.find("video")), a.length && void 0 !== a.attr("poster") && a.attr("poster").length && r.css("background-image", "url(" + a.attr("poster") + ")"));
                                            }),
                                            s.on("afterChange", function (e, t, n) {
                                                t.$slides.eq(n).addClass("slick-shown");
                                            }),
                                            s.hasClass("slick-initialized")
                                                ? (a("slick-initialized"), s.prepend('<div class="slideshow-background"><div class="slideshow-background-inner"></div></div>'))
                                                : setTimeout(function () {
                                                    s.prepend('<div class="slideshow-background"><div class="slideshow-background-inner"></div></div>');
                                                }, 1))
                                        : e.find("> .fsElementContent").append(o),
                                    e.find("article").each(function (t) {
                                        var n,
                                            a = $(this),
                                            s = a.find("img"),
                                            o = a.find("video"),
                                            r = $('<div class="slide-media"></div>'),
                                            l = ["data-aspect-ratio", "data-image-sizes", "data-resource-title", "data-resouce-uuid"],
                                            d = "",
                                            f = "",
                                            c = a.find(".fsTitle").first(),
                                            u = a.find("figcaption, .fsDescription"),
                                            p = null;
                                        if (((n = $('<div class="Overlay-Black"></div><div class="slide-overlay"></div>').prependTo(a)), n.append(r), r.wrap('<div class="slide-media-wrapper"></div>'), s.length)) {
                                            for (var h = 0; h < l.length; h++) void 0 !== s.attr(l[h]) && r.attr(l[h], s.attr(l[h]));
                                            r.css("background-image", "url(" + s.attr("src") + ")");
                                        }
                                        o.length && n.find(".slide-media").append(o),
                                            (p = $('<div class="caption"></div>').wrap('<div class="caption-wrapper">')),
                                            c.length && "." !== $.trim(c.text()) && ((d += c.text()), c.remove()),
                                            c.length && "." === $.trim(c.text()).substr(-4, 1) && ((d = ""), c.remove()),
                                            u.length && "" !== $.trim(u.text()) && ((f += u.html()), u.remove()),
                                            $.trim(d).length ? (p.append('<div class="caption-title">' + d + "</div>"), n.append(p.parent())) : a.addClass("no-title"),
                                            $.trim(f).length ? (p.append('<div class="caption-description">' + f + "</div>"), n.append(p.parent())) : a.addClass("no-description"),
                                            e.hasClass("fsSingleItem") && i.body.hasClass("home") && null !== p
                                                ? (n.append(p.parent()), n.wrapInner('<div class="slide-overlay-inner"></div>'))
                                                : n.wrapInner('<div class="slide-overlay-inner"></div>');
                                    }),
                                    e.find(".caption").length && e.attr("has-caption", ""),
                                    e.attr("updated", ""),
                                    e.find(".fsElementFooterContent").each(function () {
                                        var e,
                                            t,
                                            n = $(this),
                                            a = n.find("a").first().detach();
                                        a.length
                                            ? ((e = a.attr("href")),
                                                n.html(""),
                                                n.append(a),
                                                void 0 !== e &&
                                                -1 !== e.lastIndexOf("#") &&
                                                ((t = e.substring(e.lastIndexOf("#") - 1)),
                                                    n.on("click", "a", function (e) {
                                                        e.preventDefault();
                                                        var n = $(t).offset().top - 100;
                                                        i.html.add(i.body).animate({ scrollTop: n }, 2e3, function () {
                                                            var e = $(t).find('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])').first();
                                                            e.length && e.focus();
                                                        });
                                                    })))
                                            : n.parent("footer").remove();
                                    }),
                                    t.hasClass("fsSingleItem") && (t.find(".fsResourceTypeImage").length && t.addClass("is-image"), t.find(".fsResourceTypeVideo").length && t.addClass("is-video")),
                                    t.hasClass("fsSingleItem") &&
                                    t.find("article").hasClass("fsResourceTypeVideo") &&
                                    (function () {
                                        var n = t.find("article.fsResourceTypeVideo"),
                                            i = n.find("video"),
                                            a = i.attr("autoplay"),
                                            s = !1,
                                            o = $(
                                                '<div class="slideshow-controls-container"><div class="slideshow-controls"><div class="slideshow-controls-inner"><fieldset aria-controls="slideshow" aria-label="slideshow controls" class="fsElementSlideshowControls"></fieldset></div></div></div>'
                                            ),
                                            r = $('<button class="video-toggle"><span></span></button>'),
                                            l = function () {
                                                var e = t.hasClass("paused") ? "Play" : "Pause";
                                                t.find(".video-toggle span").text(e);
                                            };
                                        if (
                                            (n.find(".slide-media").append(i),
                                                i.on("pause ended", function (e) {
                                                    if (s) {
                                                        var n = i[0].play();
                                                        void 0 !== n &&
                                                            n
                                                                .then(function (e) {
                                                                    s = !1;
                                                                })
                                                                .catch(function (e) { });
                                                    } else t.addClass("paused"), l();
                                                }),
                                                i.on("play playing", function (e) {
                                                    t.removeClass("paused"), l();
                                                }),
                                                t.on("click", ".video-toggle", function (e) {
                                                    if (t.hasClass("paused")) {
                                                        var n = i[0].play();
                                                        void 0 !== n && n.then(function (e) { }).catch(function (e) { });
                                                    } else i[0].pause();
                                                }),
                                                o.find("fieldset").append(r),
                                                e.find("> .fsElementContent").append(o),
                                                void 0 !== a && a)
                                        ) {
                                            var d = i[0].play();
                                            void 0 !== d && d.then(function (e) { }).catch(function (e) { }), t.removeClass("paused");
                                        }
                                        $(window)
                                            .on("resize", function (e) {
                                                var t = window.innerWidth || document.documentElement.clientWidth || document.getElementByTagName("body")[0].clientWidth;
                                                if (void 0 !== a && a)
                                                    if (t < 1e3) i[0].paused || i[0].pause();
                                                    else if (i[0].paused) {
                                                        var n = i[0].play();
                                                        void 0 !== n && n.then(function (e) { }).catch(function (e) { });
                                                    }
                                            })
                                            .trigger("resize"),
                                            l();
                                    })(),
                                    t.on("click", ".scroll-to", function (e) {
                                        var t = $("#fsPageBodyWrapper").offset().top;
                                        i.body.hasClass("fsAccountBarVisible") && (t -= $("#fsAccountBar").height()), i.html.add(i.body).animate({ scrollTop: t }, 2e3);
                                    }),
                                    t.find(".fsResourceTypeVideo").length &&
                                    t.find("video").each(function () {
                                        var e = $(this);
                                        e.attr("data-object-fit", ""), objectFitPolyfill(e);
                                    });
                            } else i.html.hasClass("has-hero") || i.html.addClass("no-hero");
                        }
                    },
                    pageAlert: function () {
                        var e,
                            t,
                            n = $(".page-alert.fsContent"),
                            i = "alert-active";
                        n.length &&
                            (n.length > 1 && ((n = n.first()), $(".page-alert.fsContent").slice(1).remove()),
                                (e = $('<button class="toggle-alert"><span class="toggle-alert-icon"></span><span class="fsStyleSROnly">Close Alert</span></button>')),
                                (t = $('<button class="toggle-alert"><span class="toggle-alert-icon"></span><span class="fsStyleSROnly">Open Alert</span></button>')),
                                n.wrapInner('<div class="alert-inner" tabindex="0"></div>'),
                                n.on("click", ".toggle-alert", function () {
                                    n.hasClass(i)
                                        ? (n.removeClass(i), t.removeAttr("aria-hidden"), t.focus())
                                        : (n.addClass(i),
                                            t.attr("aria-hidden", !0),
                                            setTimeout(function () {
                                                n.find(".alert-inner").focus(),
                                                    (0, a.trapFocus)(n.find(".alert-inner")[0], function (e) {
                                                        n.removeClass(i), t.removeAttr("aria-hidden"), t.focus();
                                                    });
                                            }, 400));
                                }),
                                n.prepend(t),
                                n.find(".alert-inner").append(e),
                                n.appendTo("#fsHeader > .fsBanner"),
                                n.attr("updated", ""));
                    },
                    showcaseSlideshow: function () {
                        $(".showcase-slideshow.fsPostElement.fsSlideshow").each(function () {
                            var e = !1,
                                t = $(this),
                                n = t.find(".fsElementSlideshow"),
                                i = "info-active",
                                a = function () {
                                    var e,
                                        a = $('<div class="slideshow-controls"></div>').insertAfter(t.find("> .fsElementContent")),
                                        s = $('<div class="slideshow-progress-bar"></div>').appendTo(a);
                                    s.wrap('<div class="slideshow-progress"></div>'),
                                        t.find(".fsPager, .slick-dots").appendTo(a),
                                        t.find(".slick-arrow, .fsLeftArrow, .fsRightArrow").appendTo(a),
                                        a.wrapInner('<div class="slideshow-controls-inner"></div>'),
                                        n.slick("unslick"),
                                        (e = n.find("article").length),
                                        n.find("article").each(function (e) {
                                            o($(this));
                                        }),
                                        n.attr({ "data-adaptive-height": !0, "data-autoplay": !1, "data-dots": !1, "data-slides-to-show": 1 }),
                                        n.slick({
                                            arrows: !0,
                                            prevArrow: t.find(".fsLeftArrow"),
                                            nextArrow: t.find(".fsRightArrow"),
                                            dots: !1,
                                            slidesToShow: 1,
                                            slidesToScroll: 1,
                                            mobileFirst: !0,
                                            autoplay: !1,
                                            speed: 600,
                                            adaptiveHeight: !0,
                                            cssEase: "cubic-bezier(.285,.02,.18,1.02)",
                                            draggable: !1,
                                            swipeToSlide: !1,
                                            touchMove: !1,
                                            responsive: [{ breakpoint: 699, settings: { slidesToShow: 2, slidesToScroll: 1 } }],
                                        }),
                                        n.find("article.slick-current").prev().addClass("slide-previous"),
                                        s.css("transform", "translate3d(" + (1 / e) * 100 + "%, 0, 0)"),
                                        n.on("beforeChange", function (t, i, a, o) {
                                            n.attr("transitioning", ""), s.css("transform", "translate3d(" + ((o + 1) / e) * 100 + "%, 0, 0)"), n.find("article").removeClass("slide-previous");
                                            var r,
                                                l = i.$slides.eq(a),
                                                d = !1;
                                            if ((a > o && ((d = i.$slides.eq(a).prev()), (r = "left")), o > a && ((d = i.$slides.eq(o).prev()), (r = "right")), a === i.$slides.length - 1 && 0 === o)) {
                                                var f = n.find('.slick-slide[data-slick-index="' + i.$slides.length + '"]');
                                                f.addClass("slick-activating"), n.addClass("slick-wraparound-end"), (d = i.$slides.eq(a)), (r = "right");
                                            }
                                            if (o === i.$slides.length - 1 && 0 === a) {
                                                var f = n.find('.slick-slide[data-slick-index="-1"]');
                                                f.addClass("slick-activating"), n.addClass("slick-wraparound-start"), (d = f), (r = "left");
                                            }
                                            d || (d = i.$slides.eq(a)),
                                                d.prevAll().addClass("slide-previous"),
                                                void 0 !== r &&
                                                (d.addClass("slide-previous-set-" + r),
                                                    setTimeout(function () {
                                                        d.addClass("slide-previous-pre-" + r);
                                                    }, 10)),
                                                l.addClass("slick-deactivating");
                                        }),
                                        n.on("afterChange", function (e, t, i) {
                                            n.removeAttr("transitioning", "");
                                            t.$slides.eq(i);
                                            n.removeClass("slick-wraparound-start slick-wraparound-end"),
                                                n.find(".slick-cloned").removeClass("slick-activating"),
                                                n.find("article").removeClass("slide-previous-set-left slide-previous-pre-left slide-previous-set-right slide-previous-pre-right slick-deactivating slide-previous"),
                                                0 === i ? t.$slides.eq(0).prev().addClass("slide-previous") : t.$slides.eq(i - 1).addClass("slide-previous"),
                                                n.find("article").attr("tabindex", -1),
                                                setTimeout(function () {
                                                    n.find("article.slick-active").attr("tabindex", 0);
                                                }, 50);
                                        }),
                                        n.on("breakpoint", function () {
                                            n.find("article").attr("tabindex", -1), n.find("article.slick-active").attr("tabindex", 0);
                                        }),
                                        n.find("article").attr("tabindex", -1),
                                        n.find("article.slick-active").attr("tabindex", 0),
                                        n.on("click", "article", function () {
                                            var e = $(this),
                                                t = e.attr("data-slick-index");
                                            !e.hasClass("slick-current") &&
                                                e.hasClass("slick-active") &&
                                                setTimeout(function () {
                                                    n.slick("slickGoTo", t);
                                                }, 10);
                                        }),
                                        t.on("click", ".toggle-info, article.slick-active", function (e) {
                                            var a = $(this).is("article") ? $(this) : $(this).closest("article.slick-slide");
                                            t.hasClass("info-activating") ||
                                                t.hasClass("info-deactivating") ||
                                                (a.hasClass("slick-current")
                                                    ? t.hasClass(i)
                                                        ? (t.addClass("info-deactivating"),
                                                            t.removeClass("info-activated"),
                                                            t.removeClass(i),
                                                            n.slick("slickSetOption", "speed", 600, !1),
                                                            n.slick("slickGoTo", n.slick("getSlick").currentSlide),
                                                            setTimeout(function () {
                                                                t.removeClass("info-deactivating");
                                                            }, 600))
                                                        : (t.addClass(i),
                                                            t.addClass("info-activating"),
                                                            setTimeout(function () {
                                                                n.slick("slickSetOption", "speed", 0, !1), t.addClass("info-activated"), t.removeClass("info-activating");
                                                            }, 1300))
                                                    : setTimeout(function () {
                                                        t.addClass(i),
                                                            t.addClass("info-activating"),
                                                            setTimeout(function () {
                                                                n.slick("slickSetOption", "speed", 0, !1), t.addClass("info-activated"), t.removeClass("info-activating");
                                                            }, 1300);
                                                    }, 200));
                                        }),
                                        t.attr("updated", ""),
                                        t.find("article[aria-describedby]").removeAttr("aria-describedby"),
                                        setTimeout(function () {
                                            t.find(".fsPager, .slick-dots").appendTo(a);
                                        }, 300);
                                },
                                o = function (e) {
                                    var t,
                                        n,
                                        i,
                                        a,
                                        o,
                                        r = (e.find(".fsTitle"), e.find(".fsSummary"), e.find(".fsBody"), e.find(".fsThumbnail"));
                                    $('<button class="toggle-info"><span class="fsStyleSROnly">Toggle More Information</span></button>').prependTo(e);
                                    r.length && ((t = $("<picture></picture>").appendTo(r)), r.find("img").appendTo(t), t.wrap("<figure></figure>"), (0, s.moveResourceImage)(r.find("img"), t)),
                                        e.wrapInner('<div class="article-sizer"></div>'),
                                        (n = e.find(".article-sizer")),
                                        (i = n.clone().removeClass("article-sizer").addClass("article-expand").insertAfter(n)),
                                        (a = n.clone().removeClass("article-sizer").addClass("article-active").wrapInner('<div class="article-active-inner"></div>')),
                                        a.find(".fsThumbnail, .fsSummary, .toggle-info").remove(),
                                        n.add(i).find(".fsBody, .fsReadMoreLink").remove(),
                                        n.find(".fsBody, .fsReadMoreLink").remove(),
                                        a.insertAfter(i),
                                        (o = a.find("img.inset").detach()),
                                        a.find(".fsBody figure.fsImage").each(function () {
                                            $(this).find("img").length || $(this).remove();
                                        }),
                                        a.find(".fsBody p").each(function () {
                                            "" === $.trim($(this).text()) && $(this).remove();
                                        }),
                                        o.length && ((inset = $('<div class="article-inset-inner"></div>').insertAfter(a)), inset.append(o), inset.wrap('<div class="article-inset"></div>'));
                                };
                            n.hasClass("slick-initialized")
                                ? a()
                                : n.on("init", function () {
                                    e ||
                                        ((e = !0),
                                            setTimeout(function () {
                                                a();
                                            }, 10));
                                });
                        });
                    },
                    testimonialSlideshow: function () {
                        $(".testimonial-slideshow.fsPostElement.fsSlideshow").each(function () {
                            $(this).prepend('<div class="logomark"></div>');
                            var e = !1,
                                t = $(this),
                                n = t.find(".fsElementSlideshow"),
                                i = function () {
                                    var e,
                                        i,
                                        s,
                                        r,
                                        l = $('<div class="slideshow-controls"></div>').insertAfter(t.find("> .fsElementContent")),
                                        d = $('<div class="slideshow-progress-bar"></div>').appendTo(l);
                                    d.wrap('<div class="slideshow-progress"></div>'),
                                        t.find(".fsPager, .slick-dots").appendTo(l),
                                        t.find(".slick-arrow, .fsLeftArrow, .fsRightArrow").appendTo(l),
                                        l.wrapInner('<div class="slideshow-controls-inner"></div>'),
                                        n.slick("unslick"),
                                        (e = n.clone().addClass("slideshow-edge").insertBefore(n)),
                                        e.find("article").each(function (e) {
                                            a($(this), e);
                                        }),
                                        (i = e.clone().addClass("slideshow-post").insertAfter(n)),
                                        e.addClass("slideshow-pre"),
                                        n.addClass("slideshow-current"),
                                        (r = n.add(e).add(i)),
                                        (s = n.find("article").length),
                                        n.find("article").each(function (e) {
                                            o($(this), e);
                                        }),
                                        n.attr({ "data-adaptive-height": !0, "data-autoplay": !1, "data-dots": !1, "data-slides-to-show": 1 }),
                                        n.slick({
                                            arrows: !0,
                                            prevArrow: t.find(".fsLeftArrow"),
                                            nextArrow: t.find(".fsRightArrow"),
                                            dots: !1,
                                            slidesToShow: 1,
                                            slidesToScroll: 1,
                                            initialSlide: 0,
                                            mobileFirst: !0,
                                            autoplay: !1,
                                            speed: 600,
                                            centerMode: !1,
                                            cssEase: "cubic-bezier(.285,.02,.18,1.02)",
                                            draggable: !1,
                                            swipe: !1,
                                            swipeToMove: !1,
                                            touchMove: !1,
                                            adaptiveHeight: !0,
                                            responsive: null,
                                        }),
                                        e.add(i).attr({ "data-adaptive-height": !0, "data-autoplay": !1, "data-dots": !1, "data-arrows": !1, "data-slides-to-show": 1 }),
                                        e.slick({
                                            arrows: !1,
                                            dots: !1,
                                            fade: !1,
                                            slidesToShow: 1,
                                            slidesToScroll: 1,
                                            initialSlide: 0,
                                            mobileFirst: !0,
                                            autoplay: !1,
                                            speed: 600,
                                            centerMode: !1,
                                            cssEase: "cubic-bezier(.285,.02,.18,1.02)",
                                            draggable: !1,
                                            swipe: !1,
                                            swipeToMove: !1,
                                            touchMove: !1,
                                            responsive: null,
                                        }),
                                        i.slick({
                                            arrows: !1,
                                            dots: !1,
                                            fade: !1,
                                            slidesToShow: 1,
                                            slidesToScroll: 1,
                                            initialSlide: 1,
                                            mobileFirst: !0,
                                            autoplay: !1,
                                            speed: 600,
                                            centerMode: !1,
                                            cssEase: "cubic-bezier(.285,.02,.18,1.02)",
                                            draggable: !1,
                                            swipe: !1,
                                            swipeToMove: !1,
                                            touchMove: !1,
                                            responsive: null,
                                        }),
                                        d.css("transform", "translate3d(" + (1 / s) * 100 + "%, 0, 0)"),
                                        e.on("click", "article:not(.slick-current)", function (e) {
                                            void 0 !== $(this).attr("data-slideshow-index") && $(window).width() < 900 && n.slick("slickNext");
                                        }),
                                        n.on("beforeChange", function (t, n, a, o) {
                                            var r;
                                            (r = a < o ? o === n.$slides.length - 1 && 0 === a : a !== n.$slides.length - 1 || 0 !== o),
                                                r ? (e.slick("slickPrev"), i.slick("slickPrev")) : (e.slick("slickNext"), i.slick("slickNext")),
                                                d.css("transform", "translate3d(" + ((o + 1) / s) * 100 + "%, 0, 0)");
                                        }),
                                        r.on("beforeChange", function (e, t, n, i) {
                                            if (n !== i) {
                                                var a,
                                                    s = !1,
                                                    o = !1,
                                                    r = !1,
                                                    l = !1;
                                                if (
                                                    (n > i && ((s = t.$slides.eq(n).prev()), (o = t.$slides.eq(i)), (r = t.$slides.eq(i).next()), (l = t.$slides.eq(i).next().next()), (a = "left")),
                                                        i > n && ((s = t.$slides.eq(i).prev()), (o = t.$slides.eq(i)), (r = t.$slides.eq(i).next()), (l = t.$slides.eq(i).next().next()), (a = "right")),
                                                        n === t.$slides.length - 1 && 0 === i)
                                                ) {
                                                    var d = t.$slider.find('.slick-slide[data-slick-index="' + t.$slides.length + '"]');
                                                    d.addClass("slick-activating"), t.$slider.addClass("slick-wraparound-end"), (s = t.$slides.eq(n)), (o = d), (r = d.next()), (l = d.next().next()), (a = "right");
                                                }
                                                if (i === t.$slides.length - 1 && 0 === n) {
                                                    var d = t.$slider.find('.slick-slide[data-slick-index="-1"]');
                                                    d.addClass("slick-activating"),
                                                        t.$slider.addClass("slick-wraparound-start"),
                                                        (s = t.$slides.eq(t.$slides.length - 1)),
                                                        (o = d),
                                                        (r = t.$slides.eq(n)),
                                                        (l = t.$slides.eq(n).next()),
                                                        (a = "left");
                                                }
                                                s.addClass("slide-previous-" + a), o.addClass("slide-current-" + a), r.addClass("slide-next-" + a), l.addClass("slide-next-next-" + a);
                                            }
                                        }),
                                        r.on("afterChange", function (e, t, n) {
                                            t.$slider.removeClass("slick-wraparound-start slick-wraparound-end"),
                                                t.$slider.find(".slick-cloned").removeClass("slick-activating"),
                                                t.$slider.find("article").removeClass("slide-previous-left slide-previous-right slide-previous"),
                                                t.$slider.find("article").removeClass("slide-current-left slide-current-right"),
                                                t.$slider.find("article").removeClass("slide-next-left slide-next-right"),
                                                t.$slider.find("article").removeClass("slide-next-next-left slide-next-next-right");
                                        }),
                                        n.on("afterChange", function (e, t, n) {
                                            t.$slider.find("article").attr("tabindex", -1),
                                                setTimeout(function () {
                                                    t.$slider.find("article.slick-active").attr("tabindex", 0);
                                                }, 50);
                                        }),
                                        n.on("breakpoint", function (e, t, n) {
                                            t.$slider.find("article").attr("tabindex", -1), t.$slider.find("article.slick-active").attr("tabindex", 0);
                                        }),
                                        n.find("article").attr("tabindex", -1),
                                        n.find("article.slick-active").attr("tabindex", 0),
                                        t.find("> .fsElementContent").prepend('<div class="article-card"><div class="article-card-inner"></div></div>'),
                                        t.find("article[aria-describedby]").removeAttr("aria-describedby"),
                                        t.attr("updated", ""),
                                        setTimeout(function () {
                                            t.find(".fsPager, .slick-dots").appendTo(l);
                                        }, 300);
                                },
                                a = function (e, t) {
                                    var n = e.find(".fsThumbnail").detach();
                                    e.html(""), n.length && (e.append(n), n.wrapInner("<figure></figure>"), (0, s.moveResourceImage)(n.find("img"), n.find("figure"))), e.attr("data-slideshow-index", t);
                                },
                                o = function (e, t) {
                                    var n = e.find(".fsThumbnail").detach();
                                    e.wrapInner('<div class="article-inner"></div>'),
                                        e.find(".article-inner").prepend('<div class="blockquote-icon"></div>'),
                                        n.length && (e.prepend(n), n.wrapInner("<figure></figure>"), (0, s.moveResourceImage)(n.find("img"), n.find("figure"))),
                                        e.attr("data-slideshow-index", t);
                                };
                            n.hasClass("slick-initialized")
                                ? i()
                                : n.on("init", function () {
                                    e ||
                                        ((e = !0),
                                            setTimeout(function () {
                                                i();
                                            }, 10));
                                });
                        });
                    },
                    slideTabs: function () {
                        $(".slide-tabs.fsTabs").each(function (e) {
                            var t = $(this),
                                n = t.find("> .fsElementContent > ul.fsTabsNav"),
                                i = "info-active";
                            t.find("> .fsElementContent > .fsPanel").first().addClass("fsStateOpen"),
                                t.removeClass("fsPanelIconBefore").addClass("fsPanelIconAfter"),
                                n.find("> li > a").each(function () {
                                    var e = $(this),
                                        n = e.attr("aria-controls");
                                    t.find("#" + n + "> .fsElementContent").prepend(
                                        '<button class="toggle-info"><span class="toggle-info-icon"></span><span class="fsStyleSROnly">Toggle More Information about ' + e.text() + "</span></button>"
                                    );
                                }),
                                n.on("click", "> li > a", function (e) {
                                    var n = $(this),
                                        s = n.attr("aria-controls");
                                    t.addClass(i),
                                        void 0 !== s &&
                                        (t.find("#" + s + " .toggle-info").focus(),
                                            (0, a.trapFocus)(t.find("#" + s + " > .fsElementContent")[0], function (e) {
                                                t.removeClass(i), n.focus();
                                            }));
                                }),
                                n.on("mouseover focus", "> li > a", function (e) {
                                    var n = $(this),
                                        i = n.attr("aria-controls");
                                    n.parent().siblings().removeClass("fsStateSelected"),
                                        n.parent().addClass("fsStateSelected"),
                                        void 0 !== i && (t.find("> .fsElementContent > .fsPanel").removeClass("fsStateOpen"), t.find("#" + i).addClass("fsStateOpen"));
                                }),
                                t.on("click", ".toggle-info", function (e) {
                                    if (t.hasClass(i)) {
                                        t.removeClass(i);
                                        $(this).closest(".fsPanel").attr("id");
                                    } else
                                        t.addClass(i),
                                            (0, a.trapFocus)($(this).closest(".fsPanel").find("> .fsElementContent")[0], function (e) {
                                                t.removeClass(i);
                                            });
                                }),
                                t.find("> .fsElementContent > .fsPanel").each(function () {
                                    var e = $(this);
                                    e.find("> .fsElementContent > .fsResourceElement.fsSingleItem article.fsResourceTypeImage").each(function () {
                                        var e,
                                            t = $(this),
                                            n = t.find("picture"),
                                            i = t.find("img");
                                        n.length && i.length && ((e = i.attr("src")), (0, s.moveResourceImage)(i, n), void 0 !== e && n.css("background-image", "url(" + e + ")"));
                                    }),
                                        e.attr("updated", "");
                                }),
                                t.attr("updated", "");
                        });
                    },
                    slideOver: function () {
                        $(".slide-over.fsResourceElement.fsSlideshow").each(function () {
                            var e = $(this),
                                t = e.find(".fsElementSlideshow"),
                                n = !1,
                                i = function () {
                                    var e = $('<div class="slideshow-background"></div>').prependTo(t);
                                    (0, s.moveResourceImage)(t.find(".slick-current img"), e),
                                        t.find("article").each(function () {
                                            (0, s.moveResourceImage)($(this).find("img"), $(this).find("picture"));
                                        }),
                                        t.on("beforeChange", function (e, n, i, a) {
                                            t.addClass("slide-change");
                                        }),
                                        t.on("afterChange", function (n, i, a) {
                                            var o = i.$slides.eq(a),
                                                r = o.find("picture");
                                            t.removeClass("slide-change"), (0, s.moveResourceImage)(r, e), e.css("background-image", r.css("background-image"));
                                        });
                                };
                            t.hasClass("slick-initialized")
                                ? i()
                                : t.on("init", function () {
                                    n ||
                                        ((n = !0),
                                            setTimeout(function () {
                                                i();
                                            }, 10));
                                });
                        });
                    },
                    plainCTAs: function () {
                        $(".cta-block.fsContent").each(function (e) {
                            var t,
                                n = $(this),
                                i = n.find(".fsElementFooterContent a").first(),
                                s = n.find("> header"),
                                o = n.find("> .fsElementContent"),
                                r = n.find("> footer"),
                                l = $('<div class="cta-post"></div>'),
                                d = $('<div class="cta-pre"></div>'),
                                f = $('<div class="cta-inner"></div>').appendTo(d),
                                c = n.find(".fsElementHeaderContent figure.fsImage");
                            (t = i.length && void 0 !== i.attr("href") ? $('<a class="cta-container"></a>').attr("href", i.attr("href")) : $('<div class="cta-container" tabindex="0"></div>')),
                                t.prepend(d).prepend(l).prependTo(n),
                                t.wrapInner('<div class="cta-section"><div class="cta-wrapper"></div></div>'),
                                t.on("mouseleave", function () {
                                    t.blur();
                                }),
                                s.length && s.appendTo(d),
                                o.appendTo(f),
                                f.appendTo(l),
                                r.length &&
                                (r.appendTo(l),
                                    r.find("a").each(function (e) {
                                        var t = $(this),
                                            n = (0, a.replaceTagName)(t, "span");
                                        t.replaceWith($(n).removeAttr("href target"));
                                    })),
                                n.hasClass("featured-cta-block") && c.length && c.clone().addClass("cta-icon").prependTo(n),
                                n.doubleTapToGo(),
                                n.attr("updated", "");
                        });
                    },
                    featuredDuo: function () { },
                    infographicSlideshow: function () {
                        $(".infographic.fsPostElement.fsSlideshow").each(function () { }),
                            $(".infographic.fsPostElement.fsSlideshow").each(function () {
                                var e = !1,
                                    t = $(this),
                                    n = t.find(".fsElementSlideshow"),
                                    i = function (e, t) {
                                        var n = e.$slides.length,
                                            i = t + e.options.slidesToScroll;
                                        return i > n && (i = n), (i / n) * 100;
                                    },
                                    a = function () {
                                        var e = $('<div class="slideshow-controls"></div>').insertAfter(t.find("> .fsElementContent")),
                                            a = $('<div class="slideshow-progress-bar"></div>').appendTo(e);
                                        a.wrap('<div class="slideshow-progress"></div>'),
                                            t.find(".fsPager, .slick-dots").remove(),
                                            t.find(".slick-arrow, .fsLeftArrow, .fsRightArrow").appendTo(e),
                                            e.wrapInner('<div class="slideshow-controls-inner"></div>'),
                                            n.find("article:not(.slick-cloned)").each(function (e) {
                                                $(this).attr("slideshow-index", e);
                                            }),
                                            a.css("transform", "translate3d(" + i(n.slick("getSlick"), 0) + "%, 0, 0)"),
                                            n.on("beforeChange", function (e, t, n, s) {
                                                a.css("transform", "translate3d(" + i(t, s) + "%, 0, 0)");
                                            }),
                                            n.on("breakpoint", function (e, n, i) {
                                                t.find(".fsPager, .slick-dots").remove();
                                            });
                                    };
                                n.hasClass("slick-initialized")
                                    ? a()
                                    : n.on("init", function () {
                                        e ||
                                            ((e = !0),
                                                setTimeout(function () {
                                                    a();
                                                }, 10));
                                    });
                            });
                    },
                    customPostFilter: function () {
                        $(".custom-post-filter.fsContainer").each(function () {
                            var e = $(this),
                                t = e.find(".custom-post-filter-sticky.fsContainer"),
                                n = e.find(".custom-post-filter-mobile.fsContainer"),
                                s = e.find(".custom-post-filter-tools.fsContainer"),
                                o = e.find(".custom-post-filter-tools.fsContainer .custom-post-filter-tools-header.fsContainer"),
                                r = e.find('.fsPostElement[class*="custom-post-filter-results"]');
                            s.length &&
                                (!(function () {
                                    var t,
                                        n = s.find(".custom-post-filter-tools-header.fsContainer > header > .fsElementTitle"),
                                        r = s.find(".fsPostToolsElement.fsSearch"),
                                        l = s.find("> .fsElementContent");
                                    o.length &&
                                        (o.insertBefore(s.find("> .fsElementContent")),
                                            n.length &&
                                            (n.wrapInner("<button><span></span></button>"),
                                                n.on("click", "button", function () {
                                                    var e = "tools-open";
                                                    s.hasClass(e)
                                                        ? (l.slideUp(400, function () {
                                                            $(window).trigger("resize");
                                                        }),
                                                            s.removeClass(e))
                                                        : (s.addClass(e),
                                                            l.hide(),
                                                            l.slideDown(400, function () {
                                                                $(window).trigger("resize");
                                                            }));
                                                }),
                                                (t = $('<button class="toggle-tools-mobile"><span>' + n.text() + '</span><span class="toggle-tools-mobile-icon"><span></span><span></span><span></span><span></span></span></button>').insertBefore(
                                                    s
                                                )),
                                                t.clone().prependTo(s),
                                                t.wrap('<div class="toggle-tools-mobile-container"></div>'),
                                                e.on("click", ".toggle-tools-mobile", function (e) {
                                                    e.preventDefault(), e.stopPropagation();
                                                    var t,
                                                        n = "tools-active";
                                                    i.html.hasClass(n)
                                                        ? i.html.removeClass(n)
                                                        : ((t = $(window).scrollTop()),
                                                            i.html.addClass(n),
                                                            console.log(s),
                                                            (0, a.trapFocus)(s[0], function (e) {
                                                                i.html.removeClass(n);
                                                            }),
                                                            $(document).scrollTop(t));
                                                }),
                                                t.waypoint(
                                                    function (n) {
                                                        "down" === n ? (t.addClass("sticky"), e.addClass("tools-sticky-mobile")) : "up" === n && (t.removeClass("sticky"), e.removeClass("tools-sticky-mobile"));
                                                    },
                                                    { offset: 0 }
                                                ),
                                                e.waypoint(
                                                    function (e) {
                                                        "down" === e ? t.removeClass("sticky") : "up" === e && t.addClass("sticky");
                                                    },
                                                    {
                                                        offset: function () {
                                                            return -e.height();
                                                        },
                                                    }
                                                )),
                                            r.length && o.find("> .fsElementContent").append(r));
                                })(),
                                    s.find(".fsToolsElement:not(.fsSearch)").each(function () {
                                        var t,
                                            n = $(this),
                                            a = n.find(".fsElementTitle"),
                                            s = n.find(".fsToolsList"),
                                            r = "tool-active";
                                        o.length &&
                                            ((t = $('<button type="button" class="tool-toggle"><span>' + a.text() + "</span></button>").insertBefore(n)),
                                                t.on("click", function (e) {
                                                    n.addClass(r);
                                                }),
                                                n.on("click", "button.toggle-back", function (e) {
                                                    n.removeClass(r);
                                                })),
                                            s.length &&
                                            s.on("click", "a", function (t) {
                                                var a = ($(this), e.find(".toggle-tools-mobile-container"));
                                                a.length && $(document).scrollTop(a.offset().top), n.removeClass(r), i.html.removeClass("tools-active"), $(document).off("keyup.custom-post-tools");
                                            }),
                                            n.wrapInner('<div class="tool-inner"></div>'),
                                            n.prepend('<div class="toggle-back-top"><button type="button" class="toggle-back"><span>Back</span></button></div>');
                                    }),
                                    r.length &&
                                    FS.events.onElementUpdated("Post", function (e) {
                                        setTimeout(function () {
                                            Waypoint.refreshAll();
                                        }, 100);
                                    }),
                                    n.length && r.length && n.appendTo(s.find("> .fsElementContent")),
                                    t.length &&
                                    r.length &&
                                    o.length &&
                                    (o.waypoint(
                                        function (e) {
                                            "down" === e ? t.addClass("shown") : "up" === e && t.removeClass("shown");
                                        },
                                        { offset: -40 }
                                    ),
                                        e.waypoint(
                                            function (e) {
                                                "down" === e ? t.removeClass("shown") : "up" === e && t.addClass("shown");
                                            },
                                            {
                                                offset: function () {
                                                    return -e.height();
                                                },
                                            }
                                        )),
                                    s.wrapInner('<div class="tools-inner"></div>'),
                                    s.find("> .tools-inner > button.toggle-tools-mobile").insertBefore(s.find("> .tools-inner")),
                                    s.attr("updated", "")),
                                $(".custom-post-filter.fsContainer .fsSearch.fsPostToolsElement, .custom-post-filter-sticky.fsContainer .fsSearch.fsPostToolsElement").each(function () {
                                    var e = $(this),
                                        t = e.find("input.fsStyleSearchField"),
                                        n = ($('<button type="button" class="toggle-search"><span class="fsStyleSROnly">Open Search</span></button>').prependTo(e.find("> .fsElementContent")), e.find(".fsButtonClear")),
                                        a = "search-open",
                                        s = ".search-custom-post-filter",
                                        o = function n() {
                                            arguments.length > 0 && void 0 !== arguments[0] && !arguments[0]
                                                ? (e.removeClass(a), $(document).off("keyup" + s), i.html.off("click" + s), i.html.off("focusin" + s))
                                                : (e.addClass(a),
                                                    t.length && t.focus(),
                                                    i.html.on("focusin" + s, function (t) {
                                                        $(t.target).closest(e).length || n(!1);
                                                    }),
                                                    i.html.on("click" + s, function (e) {
                                                        n(!1);
                                                    }),
                                                    $(document).off("keyup" + s),
                                                    $(document).on("keyup" + s, function (e) {
                                                        27 == e.keyCode && n(!1);
                                                    }));
                                        };
                                    e.find("button.fsElementToolsSearchButton").wrapInner('<span class="fsStyleSROnly"></span>'),
                                        t.attr("placeholder", "WHAT ARE YOU LOOKING FOR?"),
                                        n.length &&
                                        (n.toggleClass("fsStateHidden", !t.val().length),
                                            e.on("click", ".fsButtonClear", function (e) {
                                                t.val("").trigger("change").focus();
                                            }),
                                            e.on("change input", function () {
                                                n.toggleClass("fsStateHidden", !t.val().length);
                                            })),
                                        e.on("click", function (e) {
                                            e.stopPropagation();
                                        }),
                                        e.on("click", ".toggle-search", function (t) {
                                            t.stopPropagation(), o(!e.hasClass(a));
                                        });
                                });
                        }),
                            $(".custom-post-filter .fsToolsList a").click(function () {
                                setTimeout(function () {
                                    document.querySelector(".custom-post-filter-tools-header").scrollIntoView({});
                                }, 10);
                            });
                    },
                    customPostDetail: function () {
                        $(".custom-post-detail-element.fsPostElement").each(function () {
                            var e = $(this);
                            e.prepend('<div class="custom-post-detail-background"></div>'),
                                e.find("article").each(function () {
                                    var t = $(this),
                                        n = t.find(".fsThumbnail");
                                    n.length ? (n.wrapInner('<div class="thumbnail-inner"></div>'), (0, s.moveResourceImage)(n.find("img"), n.find(".thumbnail-inner"))) : e.attr("no-photo", "");
                                }),
                                e.attr("updated", "");
                        });
                    },
                    customPostSlideshow: function () {
                        $(".custom-post-slideshow.fsPostElement.fsSlideshow").each(function () {
                            var e = $(this),
                                t = e.find("> header > h2.fsElementTitle"),
                                n = !1,
                                i = e.find(".fsElementSlideshow"),
                                a = function () {
                                    var t = $('<div class="slideshow-controls"><div class="slideshow-controls-inner"></div></div>').insertAfter(i);
                                    i.find("article").each(function () {
                                        o($(this));
                                    }),
                                        i.slick("slickSetOption", { slidesToShow: 1, slidesToScroll: 1, responsive: null }, !0),
                                        e.find(".fsPrevButton, .fsNextButton").appendTo(t.find(".slideshow-controls-inner"));
                                },
                                o = function (e) {
                                    var n = e.find(".fsThumbnail").detach(),
                                        i = e.find(".fsSummary"),
                                        a = $('<div class="article-content"></div>'),
                                        o = $('<div class="article-image"></div>');
                                    e.children().appendTo(a),
                                        e.append(o),
                                        e.append(a),
                                        n.length && (o.prepend(n), n.wrapInner('<div class="thumbnail-inner"></div>'), (0, s.moveResourceImage)(n.find("img"), n.find(".thumbnail-inner"))),
                                        t.length && a.prepend('<h4 class="article-title">' + t.text() + "</h4>"),
                                        i.length && i.dotdotdot({ watch: !0 }),
                                        e.wrapInner('<div class="article-inner"></div>');
                                };
                            i.hasClass("slick-initialized")
                                ? a()
                                : i.on("init", function () {
                                    n ||
                                        ((n = !0),
                                            setTimeout(function () {
                                                a();
                                            }, 10));
                                }),
                                e.attr("updated", "");
                        });
                    },
                    customDirectory: function () {
                        var e = function (e) {
                            e.children().not(".fsPhoto").wrapAll('<div class="constituent-info"></div>'),
                                e.wrapInner('<div class="constituent-overlay" tab-index=""></div>'),
                                e.hasClass("fsHasPhoto") && e.find(".constituent-overlay").attr("tabindex", 0),
                                e.attr("updated", "");
                        };
                        $(".custom-directory.fsConstituent.fsDirectory").each(function (t) {
                            $(this)
                                .find(".fsConstituentItem")
                                .each(function () {
                                    e($(this));
                                });
                        }),
                            $(".custom-directory.fsConstituent.fsDirectory").length &&
                            FS.events.onElementUpdated("Constituent", function (t) {
                                t.find(".fsConstituentItem:not([updated])").each(function () {
                                    e($(this));
                                });
                            });
                    },
                    featuredPostLogo: function () {
                        var e = function (e) {
                            var t,
                                n = e.find("a.fsPostLink").first().clone(),
                                i = e.find(".fsThumbnail").detach(),
                                o = e.find(".fsSummary").detach(),
                                r = e.find(".fsReadMoreLink").detach(),
                                l = $('<div class="post-overlay-inner"></div>');
                            if (((t = n.length ? n.html("").attr("class", "fsPostLink post-overlay") : $('<div class="post-overlay" tabindex="0"></div>')), t.append(l), e.html(t), i.length))
                                if ((t.prepend(i), i.is("a.fsPostLink"))) {
                                    var d = $((0, a.replaceTagName)(i, "div"));
                                    d.removeAttr("href data-page-id data-opens-in data-slug").removeClass("fsPostLink"), t.prepend(d), (0, s.moveResourceImage)(d.find("img"), d);
                                } else t.prepend(i), (0, s.moveResourceImage)(i.find("img"), i);
                            o.length && l.append(o), r.length && l.append(r), e.attr("updated", "");
                        };
                        $(".featured-post-logo.fsPostElement").length &&
                            (FS.events.onElementMoreLoaded("Post", function (t) {
                                t.find("article").each(function () {
                                    e($(this));
                                });
                            }),
                                FS.events.onElementUpdated("Post", function (t) {
                                    t.find("article").each(function () {
                                        e($(this));
                                    }),
                                        t.attr("updated", "");
                                })),
                            $(".featured-post-logo.fsPostElement").each(function () {
                                var t = $(this);
                                t.find("article").each(function () {
                                    e($(this));
                                }),
                                    t.attr("updated", "");
                            });
                    },
                }),
                (t.default = ENHANCEMENTS);
        },
        function (e, t) {
            !(function (e, t) {
                function n(e, t, n) {
                    var i = e.children(),
                        a = !1;
                    e.empty();
                    for (var o = 0, r = i.length; o < r; o++) {
                        var l = i.eq(o);
                        if ((e.append(l), n && e.append(n), s(e, t))) {
                            l.remove(), (a = !0);
                            break;
                        }
                        n && n.detach();
                    }
                    return a;
                }
                function i(t, n, o, r, l) {
                    var d = !1;
                    return (
                        t
                            .contents()
                            .detach()
                            .each(function () {
                                var f = this,
                                    c = e(f);
                                if (void 0 === f) return !0;
                                if (c.is("script, .dotdotdot-keep")) t.append(c);
                                else {
                                    if (d) return !0;
                                    t.append(c),
                                        !l ||
                                        c.is(r.after) ||
                                        c.find(r.after).length ||
                                        t[t.is("a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style") ? "after" : "append"](l),
                                        s(o, r) && (d = 3 == f.nodeType ? a(c, n, o, r, l) : i(c, n, o, r, l)),
                                        d || (l && l.detach());
                                }
                            }),
                        n.addClass("is-truncated"),
                        d
                    );
                }
                function a(t, n, i, a, r) {
                    var f = t[0];
                    if (!f) return !1;
                    var u = d(f),
                        p = -1 !== u.indexOf(" ") ? " " : "　",
                        h = "letter" == a.wrap ? "" : p,
                        v = u.split(h),
                        g = -1,
                        m = -1,
                        b = 0,
                        w = v.length - 1;
                    for (a.fallbackToLetter && 0 == b && 0 == w && ((h = ""), (v = u.split(h)), (w = v.length - 1)); b <= w && (0 != b || 0 != w);) {
                        var C = Math.floor((b + w) / 2);
                        if (C == m) break;
                        (m = C),
                            l(f, v.slice(0, m + 1).join(h) + a.ellipsis),
                            i.children().each(function () {
                                e(this).toggle().toggle();
                            }),
                            s(i, a) ? ((w = m), a.fallbackToLetter && 0 == b && 0 == w && ((h = ""), (v = v[0].split(h)), (g = -1), (m = -1), (b = 0), (w = v.length - 1))) : ((g = m), (b = m));
                    }
                    if (-1 == g || (1 == v.length && 0 == v[0].length)) {
                        var y = t.parent();
                        t.detach();
                        var $ = r && r.closest(y).length ? r.length : 0;
                        if ((y.contents().length > $ ? (f = c(y.contents().eq(-1 - $), n)) : ((f = c(y, n, !0)), $ || y.detach()), f && ((u = o(d(f), a)), l(f, u), $ && r))) {
                            var x = r.parent();
                            e(f).parent().append(r), e.trim(x.html()) || x.remove();
                        }
                    } else (u = o(v.slice(0, g + 1).join(h), a)), l(f, u);
                    return !0;
                }
                function s(e, t) {
                    return e.innerHeight() > t.maxHeight;
                }
                function o(t, n) {
                    for (; e.inArray(t.slice(-1), n.lastCharacter.remove) > -1;) t = t.slice(0, -1);
                    return e.inArray(t.slice(-1), n.lastCharacter.noEllipsis) < 0 && (t += n.ellipsis), t;
                }
                function r(e) {
                    return { width: e.innerWidth(), height: e.innerHeight() };
                }
                function l(e, t) {
                    e.innerText ? (e.innerText = t) : e.nodeValue ? (e.nodeValue = t) : e.textContent && (e.textContent = t);
                }
                function d(e) {
                    return e.innerText ? e.innerText : e.nodeValue ? e.nodeValue : e.textContent ? e.textContent : "";
                }
                function f(e) {
                    do {
                        e = e.previousSibling;
                    } while (e && 1 !== e.nodeType && 3 !== e.nodeType);
                    return e;
                }
                function c(t, n, i) {
                    var a,
                        s = t && t[0];
                    if (s) {
                        if (!i) {
                            if (3 === s.nodeType) return s;
                            if (e.trim(t.text())) return c(t.contents().last(), n);
                        }
                        for (a = f(s); !a;) {
                            if (((t = t.parent()), t.is(n) || !t.length)) return !1;
                            a = f(t[0]);
                        }
                        if (a) return c(e(a), n);
                    }
                    return !1;
                }
                function u(t, n) {
                    return !!t && ("string" == typeof t ? ((t = e(t, n)), !!t.length && t) : !!t.jquery && t);
                }
                function p(e) {
                    for (var t = e.innerHeight(), n = ["paddingTop", "paddingBottom"], i = 0, a = n.length; i < a; i++) {
                        var s = parseInt(e.css(n[i]), 10);
                        isNaN(s) && (s = 0), (t -= s);
                    }
                    return t;
                }
                if (!e.fn.dotdotdot) {
                    (e.fn.dotdotdot = function (t) {
                        if (0 == this.length) return e.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this;
                        if (this.length > 1)
                            return this.each(function () {
                                e(this).dotdotdot(t);
                            });
                        var a = this,
                            o = a.contents();
                        a.data("dotdotdot") && a.trigger("destroy.dot"),
                            a.data("dotdotdot-style", a.attr("style") || ""),
                            a.css("word-wrap", "break-word"),
                            "nowrap" === a.css("white-space") && a.css("white-space", "normal"),
                            (a.bind_events = function () {
                                return (
                                    a
                                        .bind("update.dot", function (t, r) {
                                            switch ((a.removeClass("is-truncated"), t.preventDefault(), t.stopPropagation(), typeof l.height)) {
                                                case "number":
                                                    l.maxHeight = l.height;
                                                    break;
                                                case "function":
                                                    l.maxHeight = l.height.call(a[0]);
                                                    break;
                                                default:
                                                    l.maxHeight = p(a);
                                            }
                                            (l.maxHeight += l.tolerance),
                                                void 0 !== r && (("string" == typeof r || ("nodeType" in r && 1 === r.nodeType)) && (r = e("<div />").append(r).contents()), r instanceof e && (o = r)),
                                                (v = a.wrapInner('<div class="dotdotdot" />').children()),
                                                v.contents().detach().end().append(o.clone(!0)).find("br").replaceWith("  <br />  ").end().css({ height: "auto", width: "auto", border: "none", padding: 0, margin: 0 });
                                            var f = !1,
                                                c = !1;
                                            return (
                                                d.afterElement && ((f = d.afterElement.clone(!0)), f.show(), d.afterElement.detach()),
                                                s(v, l) && (c = "children" == l.wrap ? n(v, l, f) : i(v, a, v, l, f)),
                                                v.replaceWith(v.contents()),
                                                (v = null),
                                                e.isFunction(l.callback) && l.callback.call(a[0], c, o),
                                                (d.isTruncated = c),
                                                c
                                            );
                                        })
                                        .bind("isTruncated.dot", function (e, t) {
                                            return e.preventDefault(), e.stopPropagation(), "function" == typeof t && t.call(a[0], d.isTruncated), d.isTruncated;
                                        })
                                        .bind("originalContent.dot", function (e, t) {
                                            return e.preventDefault(), e.stopPropagation(), "function" == typeof t && t.call(a[0], o), o;
                                        })
                                        .bind("destroy.dot", function (e) {
                                            e.preventDefault(),
                                                e.stopPropagation(),
                                                a
                                                    .unwatch()
                                                    .unbind_events()
                                                    .contents()
                                                    .detach()
                                                    .end()
                                                    .append(o)
                                                    .attr("style", a.data("dotdotdot-style") || "")
                                                    .removeClass("is-truncated")
                                                    .data("dotdotdot", !1);
                                        }),
                                    a
                                );
                            }),
                            (a.unbind_events = function () {
                                return a.unbind(".dot"), a;
                            }),
                            (a.watch = function () {
                                if ((a.unwatch(), "window" == l.watch)) {
                                    var t = e(window),
                                        n = t.width(),
                                        i = t.height();
                                    t.bind("resize.dot" + d.dotId, function () {
                                        (n == t.width() && i == t.height() && l.windowResizeFix) ||
                                            ((n = t.width()),
                                                (i = t.height()),
                                                c && clearInterval(c),
                                                (c = setTimeout(function () {
                                                    a.trigger("update.dot");
                                                }, 100)));
                                    });
                                } else
                                    (f = r(a)),
                                        (c = setInterval(function () {
                                            if (a.is(":visible")) {
                                                var e = r(a);
                                                (f.width == e.width && f.height == e.height) || (a.trigger("update.dot"), (f = e));
                                            }
                                        }, 500));
                                return a;
                            }),
                            (a.unwatch = function () {
                                return e(window).unbind("resize.dot" + d.dotId), c && clearInterval(c), a;
                            });
                        var l = e.extend(!0, {}, e.fn.dotdotdot.defaults, t),
                            d = {},
                            f = {},
                            c = null,
                            v = null;
                        return (
                            l.lastCharacter.remove instanceof Array || (l.lastCharacter.remove = e.fn.dotdotdot.defaultArrays.lastCharacter.remove),
                            l.lastCharacter.noEllipsis instanceof Array || (l.lastCharacter.noEllipsis = e.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),
                            (d.afterElement = u(l.after, a)),
                            (d.isTruncated = !1),
                            (d.dotId = h++),
                            a.data("dotdotdot", !0).bind_events().trigger("update.dot"),
                            l.watch && a.watch(),
                            a
                        );
                    }),
                        (e.fn.dotdotdot.defaults = { ellipsis: "... ", wrap: "word", fallbackToLetter: !0, lastCharacter: {}, tolerance: 0, callback: null, after: null, height: null, watch: !1, windowResizeFix: !0 }),
                        (e.fn.dotdotdot.defaultArrays = { lastCharacter: { remove: [" ", "　", ",", ";", ".", "!", "?"], noEllipsis: [] } }),
                        (e.fn.dotdotdot.debug = function (e) { });
                    var h = 1,
                        v = e.fn.html;
                    e.fn.html = function (t) {
                        return void 0 != t && !e.isFunction(t) && this.data("dotdotdot") ? this.trigger("update", [t]) : v.apply(this, arguments);
                    };
                    var g = e.fn.text;
                    e.fn.text = function (t) {
                        return void 0 != t && !e.isFunction(t) && this.data("dotdotdot") ? ((t = e("<div />").text(t).html()), this.trigger("update", [t])) : g.apply(this, arguments);
                    };
                }
            })(jQuery),
                jQuery(document).ready(function (e) {
                    e(".dot-ellipsis").each(function () {
                        var t = e(this).hasClass("dot-resize-update"),
                            n = e(this).hasClass("dot-timer-update"),
                            i = 0,
                            a = e(this).attr("class").split(/\s+/);
                        e.each(a, function (e, t) {
                            var n = t.match(/^dot-height-(\d+)$/);
                            null !== n && (i = Number(n[1]));
                        });
                        var s = new Object();
                        n && (s.watch = !0), t && (s.watch = "window"), i > 0 && (s.height = i), e(this).dotdotdot(s);
                    });
                }),
                jQuery(window).on("load", function () {
                    jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot");
                });
        },
        function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }), (HOME = { init: function () { } }), (t.default = HOME);
        },
        function (e, t, n) {
            n(24);
        },
        function (e, t, n) {
            n(25), n(26);
        },
        function (e, t) { },
        function (e, t, n) {
            var i = n(0),
                a = $(".bpa-college-slider-3");
            ($.fn.college_slider_3 = function () {
                this.each(function () {
                    var e = $(this),
                        t = e.find("> .fsElementContent > .fsListItems");
                    e.find(".fsResource figcaption a").parents(".fsResource").addClass("linked-image"),
                        t.slick({
                            respondTo: "slider",
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            arrows: !0,
                            prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><span class="fsStyleSROnly">Previous</span></button>',
                            nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><span class="fsStyleSROnly">Next</span></button>',
                            dots: !1,
                            responsive: [
                                { breakpoint: 900, settings: { slidesToShow: 3 } },
                                { breakpoint: 600, settings: { slidesToShow: 2 } },
                                { breakpoint: 400, settings: { slidesToShow: 1 } },
                            ],
                        });
                });
            }),
                i.notComposeMode && a.length && a.college_slider_3();
        },
    ]);
