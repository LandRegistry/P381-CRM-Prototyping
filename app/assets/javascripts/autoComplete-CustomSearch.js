var a, b;
a = this, b = function() {
    "use strict";

    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function t(t, e) {
        var n, i = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), i.push.apply(i, n)), i
    }

    function c(i) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? t(Object(r), !0).forEach(function(e) {
                var t, n;
                t = i, e = r[n = e], n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return i
    }

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }

    function l(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return a(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0,
                    t = function() {};
                return {
                    s: t,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: t
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, o = !0,
            s = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return o = e.done, e
            },
            e: function(e) {
                s = !0, r = e
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s) throw r
                }
            }
        }
    }

    function u(e, t) {
        for (var n = document.getElementsByClassName(e.resultsList.className), i = 0; i < n.length; i++) t !== n[i] && t !== e.inputField && n[i].parentNode.removeChild(n[i]);
        e.inputField.removeAttribute("aria-activedescendant"), e.inputField.setAttribute("aria-expanded", !1)
    }

    function r(s, a, l) {
        var e, t, u = (e = s, (t = document.createElement(e.resultsList.element)).setAttribute("id", e.resultsList.idName), t.setAttribute("aria-label", e.name), t.setAttribute("class", e.resultsList.className), t.setAttribute("role", "listbox"), t.setAttribute("tabindex", "-1"), e.resultsList.container && e.resultsList.container(t), ("string" == typeof e.resultsList.destination ? document.querySelector(e.resultsList.destination) : e.resultsList.destination()).insertAdjacentElement(e.resultsList.position, t), t);
        s.inputField.setAttribute("aria-expanded", !0);
        for (var n = function(t) {
                var e, n, i, r, o = a.results[t],
                    r = (e = o, n = t, i = s, (r = document.createElement(i.resultItem.element)).setAttribute("id", "".concat(i.resultItem.className, "_").concat(n)), r.setAttribute("class", i.resultItem.className), r.setAttribute("role", "option"), r.innerHTML = e.match, i.resultItem.content && i.resultItem.content(e, r), r);
                r.addEventListener("click", function() {
                    var e = {
                        matches: l,
                        input: a.input,
                        query: a.query,
                        results: a.results,
                        selection: c(c({}, o), {}, {
                            index: t
                        })
                    };
                    s.onSelection && s.onSelection(e)
                }), u.appendChild(r)
            }, i = 0; i < a.results.length; i++) n(i);
        return u
    }

    function d(e, t, n) {
        e.dispatchEvent(new CustomEvent(n, {
            bubbles: !0,
            detail: t,
            cancelable: !0
        }))
    }

    function o(n, r) {
        function i(e, t, n, i) {
            e.preventDefault(), n ? o++ : o--, s(t), i.inputField.setAttribute("aria-activedescendant", t[o].id), d(e.srcElement, c(c({
                event: e
            }, r), {}, {
                selection: r.results[o]
            }), "navigation")
        }
        var o = -1,
            s = function(e) {
                if (!e) return !1;
                ! function(e) {
                    for (var t = 0; t < e.length; t++) e[t].removeAttribute("aria-selected"), e[t].classList.remove("autoComplete_selected")
                }(e), o >= e.length && (o = 0), o < 0 && (o = e.length - 1), e[o].setAttribute("aria-selected", "true"), e[o].classList.add("autoComplete_selected")
            },
            a = n.resultsList.navigation || function(e) {
                var t = document.getElementById(n.resultsList.idName);
                if (!t) return n.inputField.removeEventListener("keydown", a);
                t = t.getElementsByTagName(n.resultItem.element), 27 === e.keyCode ? (n.inputField.value = "", u(n)) : 40 === e.keyCode || 9 === e.keyCode ? i(e, t, !0, n) : 38 === e.keyCode || 9 === e.keyCode ? i(e, t, !1, n) : 13 === e.keyCode && (e.preventDefault(), -1 < o && t && t[o].click())
            };
        n.inputField.addEventListener("keydown", a)
    }

    function s(o, s) {
        for (var a = [], e = function(n) {
                function e(e) {
                    var t = (e ? i[e] : i).toString();
                    t && ((t = "function" == typeof o.searchEngine ? o.searchEngine(s, t) : function(e, t, n) {
                        var i = n.diacritics ? t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : t.toLowerCase();
                        if ("loose" === n.searchEngine) {
                            e = e.replace(/ /g, "");
                            for (var r = [], o = 0, s = 0; s < i.length; s++) {
                                var a = t[s];
                                o < e.length && i[s] === e[o] && (a = n.highlight ? '<span class="autoComplete_highlighted">'.concat(a, "</span>") : a, o++), r.push(a)
                            }
                            if (o === e.length) return r.join("")
                        } else if (i.includes(e)) return e = new RegExp("".concat(e), "i").exec(t), n.highlight ? t.replace(e, '<span class="autoComplete_highlighted">'.concat(e, "</span>")) : t
                    }(s, t, o)) && e ? a.push({
                        key: e,
                        index: n,
                        match: t,
                        value: i
                    }) : t && !e && a.push({
                        index: n,
                        match: t,
                        value: i
                    }))
                }
                var i = o.data.store[n];
                if (o.data.key) {
                    var t, r = l(o.data.key);
                    try {
                        for (r.s(); !(t = r.n()).done;) e(t.value)
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                } else e()
            }, t = 0; t < o.data.store.length; t++) e(t);
        return o.sort ? a.sort(o.sort) : a
    }
    var n, i, h;

    function T(e) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, T);
        var t = e.name,
            n = void 0 === t ? "Search" : t,
            i = e.selector,
            r = void 0 === i ? "#autoComplete" : i,
            o = e.observer,
            s = void 0 !== o && o,
            a = e.data,
            l = a.src,
            u = a.key,
            c = a.cache,
            d = void 0 !== c && c,
            h = a.store,
            f = a.results,
            p = e.query,
            v = e.trigger,
            m = (v = void 0 === v ? {} : v).event,
            b = void 0 === m ? ["input"] : m,
            y = v.condition,
            g = void 0 !== y && y,
            L = e.searchEngine,
            k = void 0 === L ? "strict" : L,
            A = e.diacritics,
            E = void 0 !== A && A,
            F = e.threshold,
            w = void 0 === F ? 1 : F,
            C = e.debounce,
            O = void 0 === C ? 0 : C,
            N = e.resultsList,
            j = (N = void 0 === N ? {} : N).render,
            x = void 0 === j || j,
            S = N.container,
            I = void 0 !== S && S,
            P = N.destination,
            t = N.position,
            i = void 0 === t ? "afterend" : t,
            o = N.element,
            c = void 0 === o ? "ul" : o,
            a = N.idName,
            m = void 0 === a ? "autoComplete_list" : a,
            v = N.className,
            y = void 0 === v ? "autoComplete_list" : v,
            L = N.navigation,
            A = void 0 !== L && L,
            F = e.sort,
            C = void 0 !== F && F,
            j = e.placeHolder,
            S = e.maxResults,
            t = void 0 === S ? 5 : S,
            o = e.resultItem,
            a = (o = void 0 === o ? {} : o).content,
            v = void 0 !== a && a,
            N = o.element,
            L = void 0 === N ? "li" : N,
            F = o.idName,
            S = void 0 === F ? "autoComplete_result" : F,
            a = o.className,
            N = void 0 === a ? "autoComplete_result" : a,
            F = e.noResults,
            o = e.highlight,
            a = void 0 !== o && o,
            o = e.feedback,
            e = e.onSelection;
        this.name = n, this.selector = r, this.observer = s, this.data = {
            src: l,
            key: u,
            cache: d,
            store: h,
            results: f
        }, this.query = p, this.trigger = {
            event: b,
            condition: g
        }, this.searchEngine = k, this.diacritics = E, this.threshold = w, this.debounce = O, this.resultsList = {
            render: x,
            container: I,
            destination: P || this.selector,
            position: i,
            element: c,
            idName: m,
            className: y,
            navigation: A
        }, this.sort = C, this.placeHolder = j, this.maxResults = t, this.resultItem = {
            content: v,
            element: L,
            idName: S,
            className: N
        }, this.noResults = F, this.highlight = a, this.feedback = o, this.onSelection = e, this.observer ? this.preInit() : this.init()
    }
    return n = T, (i = [{
        key: "start",
        value: function(e, t) {
            var n = this,
                i = this.data.results ? this.data.results(s(this, t)) : s(this, t),
                t = {
                    input: e,
                    query: t,
                    matches: i,
                    results: i.slice(0, this.maxResults)
                };
            if (d(this.inputField, t, "results"), !i.length) return this.noResults ? this.noResults(t, r) : null;
            if (!this.resultsList.render) return this.feedback(t);
            i.length && r(this, t, i);
            d(this.inputField, t, "rendered"), o(this, t), document.addEventListener("click", function(e) {
                return u(n, e.target)
            })
        }
    }, {
        key: "dataStore",
        value: function() {
            var i = this;
            return new Promise(function(t, n) {
                return i.data.cache && i.data.store ? t(null) : new Promise(function(e, t) {
                    return "function" == typeof i.data.src ? i.data.src().then(e, t) : e(i.data.src)
                }).then(function(e) {
                    try {
                        return i.data.store = e, d(i.inputField, i.data.store, "fetch"), t()
                    } catch (e) {
                        return n(e)
                    }
                }, n)
            })
        }
    }, {
        key: "compose",
        value: function() {
            var a = this;
            return new Promise(function(e, t) {
                var n, i, r, o;
                return o = a.inputField, n = (o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement ? o.value : o.innerHTML).toLowerCase(), r = n, o = a.query, i = o && o.manipulate ? o.manipulate(r) : r.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), o = i, ((r = a).trigger.condition ? r.trigger.condition(o) : o.length >= r.threshold && o.replace(/ /g, "").length) ? a.dataStore().then(function(e) {
                    try {
                        return u(a), a.start(n, i), s.call(a)
                    } catch (e) {
                        return t(e)
                    }
                }, t) : (u(a), s.call(a));

                function s() {
                    return e()
                }
            })
        }
    }, {
        key: "init",
        value: function() {
            var e, n, i, r, t = this;
            this.inputField = "string" == typeof this.selector ? document.querySelector(this.selector) : this.selector(), (e = this).inputField.setAttribute("type", "text"), e.inputField.setAttribute("role", "combobox"), e.inputField.setAttribute("aria-haspopup", !0), e.inputField.setAttribute("aria-expanded", !1), e.inputField.setAttribute("aria-controls", e.resultsList.idName), e.inputField.setAttribute("aria-autocomplete", "both"), this.placeHolder && this.inputField.setAttribute("placeholder", this.placeHolder), this.hook = (n = function() {
                t.compose()
            }, i = this.debounce, function() {
                var e = this,
                    t = arguments;
                clearTimeout(r), r = setTimeout(function() {
                    return n.apply(e, t)
                }, i)
            }), this.trigger.event.forEach(function(e) {
                t.inputField.removeEventListener(e, t.hook), t.inputField.addEventListener(e, t.hook)
            }), d(this.inputField, null, "init")
        }
    }, {
        key: "preInit",
        value: function() {
            var o = this,
                s = document;
            new MutationObserver(function(e, t) {
                var n, i = s.querySelector(o.selector),
                    r = l(e);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        n.value;
                        i && (t.disconnect(), d(i, null, "connect"), o.init())
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            }).observe(s, {
                childList: !0,
                subtree: !0
            })
        }
    }, {
        key: "unInit",
        value: function() {
            this.inputField.removeEventListener("input", this.hook), d(this.inputField, null, "unInit")
        }
    }]) && e(n.prototype, i), h && e(n, h), T
}, "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : (a = "undefined" != typeof globalThis ? globalThis : a || self).autoComplete = b();