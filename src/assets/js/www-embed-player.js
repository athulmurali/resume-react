(function () {
  var k,
    aa =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    ba;
  if ('function' == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
  else {
    var ca;
    a: {
      var ea = { qa: !0 },
        fa = {};
      try {
        fa.__proto__ = ea;
        ca = fa.qa;
        break a;
      } catch (a) {}
      ca = !1;
    }
    ba = ca
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
          return a;
        }
      : null;
  }
  var ha = ba;
  function n(a, b) {
    a.prototype = aa(b.prototype);
    a.prototype.constructor = a;
    if (ha) ha(a, b);
    else
      for (var c in b)
        if ('prototype' != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.A = b.prototype;
  }
  var ia =
      'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
          },
    ja =
      'undefined' != typeof window && window === this
        ? this
        : 'undefined' != typeof global && null != global
        ? global
        : this;
  function ka() {
    ka = function () {};
    ja.Symbol || (ja.Symbol = la);
  }
  var la = (function () {
    var a = 0;
    return function (b) {
      return 'jscomp_symbol_' + (b || '') + a++;
    };
  })();
  function ma() {
    ka();
    var a = ja.Symbol.iterator;
    a || (a = ja.Symbol.iterator = ja.Symbol('iterator'));
    'function' != typeof Array.prototype[a] &&
      ia(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return na(this);
        },
      });
    ma = function () {};
  }
  function na(a) {
    var b = 0;
    return oa(function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    });
  }
  function oa(a) {
    ma();
    a = { next: a };
    a[ja.Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function pa(a) {
    ma();
    var b = a[Symbol.iterator];
    return b ? b.call(a) : na(a);
  }
  function qa(a, b) {
    if (b) {
      for (var c = ja, d = a.split('.'), e = 0; e < d.length - 1; e++) {
        var f = d[e];
        f in c || (c[f] = {});
        c = c[f];
      }
      d = d[d.length - 1];
      e = c[d];
      f = b(e);
      f != e &&
        null != f &&
        ia(c, d, { configurable: !0, writable: !0, value: f });
    }
  }
  function p(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  var ra =
    'function' == typeof Object.assign
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) p(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  qa('Object.assign', function (a) {
    return a || ra;
  });
  qa('WeakMap', function (a) {
    function b(a) {
      this.b = (f += Math.random() + 1).toString();
      if (a) {
        ka();
        ma();
        a = pa(a);
        for (var b; !(b = a.next()).done; ) (b = b.value), this.set(b[0], b[1]);
      }
    }
    function c(a) {
      p(a, e) || ia(a, e, { value: {} });
    }
    function d(a) {
      var b = Object[a];
      b &&
        (Object[a] = function (a) {
          c(a);
          return b(a);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var b = Object.seal({}),
            c = Object.seal({}),
            d = new a([
              [b, 2],
              [c, 3],
            ]);
          if (2 != d.get(b) || 3 != d.get(c)) return !1;
          d['delete'](b);
          d.set(c, 4);
          return !d.has(b) && 4 == d.get(c);
        } catch (m) {
          return !1;
        }
      })()
    )
      return a;
    var e = '$jscomp_hidden_' + Math.random();
    d('freeze');
    d('preventExtensions');
    d('seal');
    var f = 0;
    b.prototype.set = function (a, b) {
      c(a);
      if (!p(a, e)) throw Error('WeakMap key fail: ' + a);
      a[e][this.b] = b;
      return this;
    };
    b.prototype.get = function (a) {
      return p(a, e) ? a[e][this.b] : void 0;
    };
    b.prototype.has = function (a) {
      return p(a, e) && p(a[e], this.b);
    };
    b.prototype['delete'] = function (a) {
      return p(a, e) && p(a[e], this.b) ? delete a[e][this.b] : !1;
    };
    return b;
  });
  qa('Map', function (a) {
    function b() {
      var a = {};
      return (a.previous = a.next = a.head = a);
    }
    function c(a, b) {
      var c = a.b;
      return oa(function () {
        if (c) {
          for (; c.head != a.b; ) c = c.previous;
          for (; c.next != c.head; )
            return (c = c.next), { done: !1, value: b(c) };
          c = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(a, b) {
      var c = b && typeof b;
      'object' == c || 'function' == c
        ? f.has(b)
          ? (c = f.get(b))
          : ((c = '' + ++g), f.set(b, c))
        : (c = 'p_' + b);
      var d = a.f[c];
      if (d && p(a.f, c))
        for (var e = 0; e < d.length; e++) {
          var h = d[e];
          if ((b !== b && h.key !== h.key) || b === h.key)
            return { id: c, list: d, index: e, o: h };
        }
      return { id: c, list: d, index: -1, o: void 0 };
    }
    function e(a) {
      this.f = {};
      this.b = b();
      this.size = 0;
      if (a) {
        a = pa(a);
        for (var c; !(c = a.next()).done; ) (c = c.value), this.set(c[0], c[1]);
      }
    }
    if (
      (function () {
        if (
          !a ||
          'function' != typeof a ||
          !a.prototype.entries ||
          'function' != typeof Object.seal
        )
          return !1;
        try {
          var b = Object.seal({ x: 4 }),
            c = new a(pa([[b, 's']]));
          if (
            's' != c.get(b) ||
            1 != c.size ||
            c.get({ x: 4 }) ||
            c.set({ x: 4 }, 't') != c ||
            2 != c.size
          )
            return !1;
          var d = c.entries(),
            e = d.next();
          if (e.done || e.value[0] != b || 's' != e.value[1]) return !1;
          e = d.next();
          return e.done ||
            4 != e.value[0].x ||
            't' != e.value[1] ||
            !d.next().done
            ? !1
            : !0;
        } catch (da) {
          return !1;
        }
      })()
    )
      return a;
    ka();
    ma();
    var f = new WeakMap();
    e.prototype.set = function (a, b) {
      a = 0 === a ? 0 : a;
      var c = d(this, a);
      c.list || (c.list = this.f[c.id] = []);
      c.o
        ? (c.o.value = b)
        : ((c.o = {
            next: this.b,
            previous: this.b.previous,
            head: this.b,
            key: a,
            value: b,
          }),
          c.list.push(c.o),
          (this.b.previous.next = c.o),
          (this.b.previous = c.o),
          this.size++);
      return this;
    };
    e.prototype['delete'] = function (a) {
      a = d(this, a);
      return a.o && a.list
        ? (a.list.splice(a.index, 1),
          a.list.length || delete this.f[a.id],
          (a.o.previous.next = a.o.next),
          (a.o.next.previous = a.o.previous),
          (a.o.head = null),
          this.size--,
          !0)
        : !1;
    };
    e.prototype.clear = function () {
      this.f = {};
      this.b = this.b.previous = b();
      this.size = 0;
    };
    e.prototype.has = function (a) {
      return !!d(this, a).o;
    };
    e.prototype.get = function (a) {
      return (a = d(this, a).o) && a.value;
    };
    e.prototype.entries = function () {
      return c(this, function (a) {
        return [a.key, a.value];
      });
    };
    e.prototype.keys = function () {
      return c(this, function (a) {
        return a.key;
      });
    };
    e.prototype.values = function () {
      return c(this, function (a) {
        return a.value;
      });
    };
    e.prototype.forEach = function (a, b) {
      for (var c = this.entries(), d; !(d = c.next()).done; )
        (d = d.value), a.call(b, d[1], d[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e;
  });
  qa('Set', function (a) {
    function b(a) {
      this.b = new Map();
      if (a) {
        a = pa(a);
        for (var b; !(b = a.next()).done; ) this.add(b.value);
      }
      this.size = this.b.size;
    }
    if (
      (function () {
        if (
          !a ||
          'function' != typeof a ||
          !a.prototype.entries ||
          'function' != typeof Object.seal
        )
          return !1;
        try {
          var b = Object.seal({ x: 4 }),
            d = new a(pa([b]));
          if (
            !d.has(b) ||
            1 != d.size ||
            d.add(b) != d ||
            1 != d.size ||
            d.add({ x: 4 }) != d ||
            2 != d.size
          )
            return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != b || f.value[1] != b) return !1;
          f = e.next();
          return f.done ||
            f.value[0] == b ||
            4 != f.value[0].x ||
            f.value[1] != f.value[0]
            ? !1
            : e.next().done;
        } catch (g) {
          return !1;
        }
      })()
    )
      return a;
    ka();
    ma();
    b.prototype.add = function (a) {
      a = 0 === a ? 0 : a;
      this.b.set(a, a);
      this.size = this.b.size;
      return this;
    };
    b.prototype['delete'] = function (a) {
      a = this.b['delete'](a);
      this.size = this.b.size;
      return a;
    };
    b.prototype.clear = function () {
      this.b.clear();
      this.size = 0;
    };
    b.prototype.has = function (a) {
      return this.b.has(a);
    };
    b.prototype.entries = function () {
      return this.b.entries();
    };
    b.prototype.values = function () {
      return this.b.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (a, b) {
      var c = this;
      this.b.forEach(function (d) {
        return a.call(b, d, d, c);
      });
    };
    return b;
  });
  qa('Object.is', function (a) {
    return a
      ? a
      : function (a, c) {
          return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c;
        };
  });
  qa('String.prototype.includes', function (a) {
    return a
      ? a
      : function (a, c) {
          if (null == this)
            throw new TypeError(
              "The 'this' value for String.prototype.includes must not be null or undefined"
            );
          if (a instanceof RegExp)
            throw new TypeError(
              'First argument to String.prototype.includes must not be a regular expression'
            );
          return -1 !== (this + '').indexOf(a, c || 0);
        };
  });
  (function () {
    function a() {
      function a() {}
      Reflect.construct(a, [], function () {});
      return new a() instanceof a;
    }
    if ('undefined' != typeof Reflect && Reflect.construct) {
      if (a()) return Reflect.construct;
      var b = Reflect.construct;
      return function (a, d, e) {
        a = b(a, d);
        e && Reflect.setPrototypeOf(a, e.prototype);
        return a;
      };
    }
    return function (a, b, e) {
      void 0 === e && (e = a);
      e = aa(e.prototype || Object.prototype);
      return Function.prototype.apply.call(a, e, b) || e;
    };
  })();
  var q = this;
  function r(a) {
    return void 0 !== a;
  }
  function t(a) {
    return 'string' == typeof a;
  }
  function u(a, b, c) {
    a = a.split('.');
    c = c || q;
    a[0] in c ||
      'undefined' == typeof c.execScript ||
      c.execScript('var ' + a[0]);
    for (var d; a.length && (d = a.shift()); )
      !a.length && r(b)
        ? (c[d] = b)
        : c[d] && c[d] !== Object.prototype[d]
        ? (c = c[d])
        : (c = c[d] = {});
  }
  var sa = /^[\w+/_-]+[=]{0,2}$/,
    ta = null;
  function w(a, b) {
    for (var c = a.split('.'), d = b || q, e = 0; e < c.length; e++)
      if (((d = d[c[e]]), null == d)) return null;
    return d;
  }
  function ua() {}
  function va(a) {
    a.da = void 0;
    a.getInstance = function () {
      return a.da ? a.da : (a.da = new a());
    };
  }
  function wa(a) {
    var b = typeof a;
    if ('object' == b)
      if (a) {
        if (a instanceof Array) return 'array';
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ('[object Window]' == c) return 'object';
        if (
          '[object Array]' == c ||
          ('number' == typeof a.length &&
            'undefined' != typeof a.splice &&
            'undefined' != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable('splice'))
        )
          return 'array';
        if (
          '[object Function]' == c ||
          ('undefined' != typeof a.call &&
            'undefined' != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable('call'))
        )
          return 'function';
      } else return 'null';
    else if ('function' == b && 'undefined' == typeof a.call) return 'object';
    return b;
  }
  function xa(a) {
    return 'array' == wa(a);
  }
  function ya(a) {
    var b = wa(a);
    return 'array' == b || ('object' == b && 'number' == typeof a.length);
  }
  function za(a) {
    return 'function' == wa(a);
  }
  function x(a) {
    var b = typeof a;
    return ('object' == b && null != a) || 'function' == b;
  }
  var Aa = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
    Ba = 0;
  function Ca(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function Da(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function y(a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf('native code')
      ? (y = Ca)
      : (y = Da);
    return y.apply(null, arguments);
  }
  function Ea(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = c.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b);
    };
  }
  var z =
    Date.now ||
    function () {
      return +new Date();
    };
  function Fa(a, b) {
    u(a, b, void 0);
  }
  function A(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.A = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.hb = function (a, c, f) {
      for (
        var d = Array(arguments.length - 2), e = 2;
        e < arguments.length;
        e++
      )
        d[e - 2] = arguments[e];
      return b.prototype[c].apply(a, d);
    };
  }
  var Ga = document,
    B = window;
  function C(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, C);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  A(C, Error);
  C.prototype.name = 'CustomError';
  var Ha = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if (t(a)) return t(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    D = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = t(a) ? a.split('') : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a);
        },
    Ja = Array.prototype.filter
      ? function (a, b) {
          return Array.prototype.filter.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length, d = [], e = 0, f = t(a) ? a.split('') : a, g = 0;
            g < c;
            g++
          )
            if (g in f) {
              var h = f[g];
              b.call(void 0, h, g, a) && (d[e++] = h);
            }
          return d;
        },
    Ka = Array.prototype.map
      ? function (a, b) {
          return Array.prototype.map.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length, d = Array(c), e = t(a) ? a.split('') : a, f = 0;
            f < c;
            f++
          )
            f in e && (d[f] = b.call(void 0, e[f], f, a));
          return d;
        },
    La = Array.prototype.reduce
      ? function (a, b, c) {
          return Array.prototype.reduce.call(a, b, c);
        }
      : function (a, b, c) {
          var d = c;
          D(a, function (c, f) {
            d = b.call(void 0, d, c, f, a);
          });
          return d;
        };
  function Ma(a, b) {
    a: {
      var c = a.length;
      for (var d = t(a) ? a.split('') : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
          c = e;
          break a;
        }
      c = -1;
    }
    return 0 > c ? null : t(a) ? a.charAt(c) : a[c];
  }
  function Na(a, b) {
    var c = Ha(a, b);
    0 <= c && Array.prototype.splice.call(a, c, 1);
  }
  function Oa(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function Pa(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (ya(d)) {
        var e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++) a[e + g] = d[g];
      } else a.push(d);
    }
  }
  var Qa = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
  function Ra(a) {
    if (!Sa.test(a)) return a;
    -1 != a.indexOf('&') && (a = a.replace(Ta, '&amp;'));
    -1 != a.indexOf('<') && (a = a.replace(Ua, '&lt;'));
    -1 != a.indexOf('>') && (a = a.replace(Va, '&gt;'));
    -1 != a.indexOf('"') && (a = a.replace(Wa, '&quot;'));
    -1 != a.indexOf("'") && (a = a.replace(Xa, '&#39;'));
    -1 != a.indexOf('\x00') && (a = a.replace(Ya, '&#0;'));
    return a;
  }
  var Ta = /&/g,
    Ua = /</g,
    Va = />/g,
    Wa = /"/g,
    Xa = /'/g,
    Ya = /\x00/g,
    Sa = /[\x00&<>"']/;
  function $a(a) {
    for (var b = 0, c = 0; c < a.length; ++c)
      b = (31 * b + a.charCodeAt(c)) >>> 0;
    return b;
  }
  var ab;
  a: {
    var bb = q.navigator;
    if (bb) {
      var cb = bb.userAgent;
      if (cb) {
        ab = cb;
        break a;
      }
    }
    ab = '';
  }
  function E(a) {
    return -1 != ab.indexOf(a);
  }
  function db(a, b) {
    for (var c in a) b.call(void 0, a[c], c, a);
  }
  function eb(a, b) {
    var c = ya(b),
      d = c ? b : arguments;
    for (c = c ? 0 : 1; c < d.length; c++) {
      if (null == a) return;
      a = a[d[c]];
    }
    return a;
  }
  function fb(a) {
    var b = gb,
      c;
    for (c in b) if (a.call(void 0, b[c], c, b)) return c;
  }
  function hb(a) {
    for (var b in a) return !1;
    return !0;
  }
  function ib(a, b) {
    if (null !== a && b in a)
      throw Error('The object already contains the key "' + b + '"');
    a[b] = !0;
  }
  function jb(a, b) {
    for (var c in a) if (!(c in b) || a[c] !== b[c]) return !1;
    for (c in b) if (!(c in a)) return !1;
    return !0;
  }
  function kb(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  }
  var lb =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    );
  function mb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < lb.length; f++)
        (c = lb[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function nb(a) {
    nb[' '](a);
    return a;
  }
  nb[' '] = ua;
  var ob = E('Opera'),
    pb = E('Trident') || E('MSIE'),
    qb = E('Edge'),
    rb =
      E('Gecko') &&
      !(-1 != ab.toLowerCase().indexOf('webkit') && !E('Edge')) &&
      !(E('Trident') || E('MSIE')) &&
      !E('Edge'),
    sb = -1 != ab.toLowerCase().indexOf('webkit') && !E('Edge');
  function tb() {
    var a = q.document;
    return a ? a.documentMode : void 0;
  }
  var ub;
  a: {
    var vb = '',
      wb = (function () {
        var a = ab;
        if (rb) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (qb) return /Edge\/([\d\.]+)/.exec(a);
        if (pb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (sb) return /WebKit\/(\S+)/.exec(a);
        if (ob) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    wb && (vb = wb ? wb[1] : '');
    if (pb) {
      var xb = tb();
      if (null != xb && xb > parseFloat(vb)) {
        ub = String(xb);
        break a;
      }
    }
    ub = vb;
  }
  var yb = ub,
    zb;
  var Ab = q.document;
  zb =
    Ab && pb
      ? tb() || ('CSS1Compat' == Ab.compatMode ? parseInt(yb, 10) : 5)
      : void 0;
  var Bb = null,
    Cb = null;
  function Db(a) {
    this.b = a || { cookie: '' };
  }
  k = Db.prototype;
  k.isEnabled = function () {
    return navigator.cookieEnabled;
  };
  k.set = function (a, b, c, d, e, f) {
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    r(c) || (c = -1);
    e = e ? ';domain=' + e : '';
    d = d ? ';path=' + d : '';
    f = f ? ';secure' : '';
    c =
      0 > c
        ? ''
        : 0 == c
        ? ';expires=' + new Date(1970, 1, 1).toUTCString()
        : ';expires=' + new Date(z() + 1e3 * c).toUTCString();
    this.b.cookie = a + '=' + b + e + d + c + f;
  };
  k.get = function (a, b) {
    for (
      var c = a + '=', d = (this.b.cookie || '').split(';'), e = 0, f;
      e < d.length;
      e++
    ) {
      f = Qa(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
      if (f == a) return '';
    }
    return b;
  };
  k.remove = function (a, b, c) {
    var d = r(this.get(a));
    this.set(a, '', 0, b, c);
    return d;
  };
  k.isEmpty = function () {
    return !this.b.cookie;
  };
  k.clear = function () {
    for (
      var a = (this.b.cookie || '').split(';'), b = [], c = [], d, e, f = 0;
      f < a.length;
      f++
    )
      (e = Qa(a[f])),
        (d = e.indexOf('=')),
        -1 == d
          ? (b.push(''), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a]);
  };
  var Eb = new Db('undefined' == typeof document ? null : document);
  Eb.f = 3950;
  function Fb(a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  var Gb = !pb || 9 <= Number(zb);
  function Hb() {
    this.b = '';
    this.f = Ib;
  }
  Hb.prototype.J = !0;
  Hb.prototype.I = function () {
    return this.b;
  };
  Hb.prototype.ca = !0;
  Hb.prototype.Z = function () {
    return 1;
  };
  function Jb(a) {
    return a instanceof Hb && a.constructor === Hb && a.f === Ib
      ? a.b
      : 'type_error:TrustedResourceUrl';
  }
  var Ib = {};
  function F() {
    this.b = '';
    this.f = Kb;
  }
  F.prototype.J = !0;
  F.prototype.I = function () {
    return this.b;
  };
  F.prototype.ca = !0;
  F.prototype.Z = function () {
    return 1;
  };
  function Lb(a) {
    return a instanceof F && a.constructor === F && a.f === Kb
      ? a.b
      : 'type_error:SafeUrl';
  }
  var Mb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Nb(a) {
    if (a instanceof F) return a;
    a = 'object' == typeof a && a.J ? a.I() : String(a);
    Mb.test(a) || (a = 'about:invalid#zClosurez');
    return Ob(a);
  }
  var Kb = {};
  function Ob(a) {
    var b = new F();
    b.b = a;
    return b;
  }
  Ob('about:blank');
  function Pb() {
    this.b = '';
    this.g = Qb;
    this.f = null;
  }
  Pb.prototype.ca = !0;
  Pb.prototype.Z = function () {
    return this.f;
  };
  Pb.prototype.J = !0;
  Pb.prototype.I = function () {
    return this.b;
  };
  var Qb = {};
  function Rb(a, b) {
    var c = new Pb();
    c.b = a;
    c.f = b;
    return c;
  }
  Rb('<!DOCTYPE html>', 0);
  Rb('', 0);
  Rb('<br>', 0);
  function Sb(a, b) {
    var c = b instanceof F ? b : Nb(b);
    a.href = Lb(c);
  }
  function Tb(a, b) {
    a.src = Jb(b);
    if (null === ta) {
      a: {
        var c = q.document;
        if (
          (c = c.querySelector && c.querySelector('script[nonce]')) &&
          (c = c.nonce || c.getAttribute('nonce')) &&
          sa.test(c)
        )
          break a;
        c = null;
      }
      ta = c || '';
    }
    (c = ta) && a.setAttribute('nonce', c);
  }
  function Ub(a, b) {
    this.x = r(a) ? a : 0;
    this.y = r(b) ? b : 0;
  }
  k = Ub.prototype;
  k.clone = function () {
    return new Ub(this.x, this.y);
  };
  k.equals = function (a) {
    return (
      a instanceof Ub &&
      (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    );
  };
  k.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  k.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  k.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  function Vb(a, b) {
    this.width = a;
    this.height = b;
  }
  k = Vb.prototype;
  k.clone = function () {
    return new Vb(this.width, this.height);
  };
  k.aspectRatio = function () {
    return this.width / this.height;
  };
  k.isEmpty = function () {
    return !(this.width * this.height);
  };
  k.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  k.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  k.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  function Wb(a) {
    var b = document;
    return t(a) ? b.getElementById(a) : a;
  }
  function Xb(a, b) {
    db(b, function (b, d) {
      b && 'object' == typeof b && b.J && (b = b.I());
      'style' == d
        ? (a.style.cssText = b)
        : 'class' == d
        ? (a.className = b)
        : 'for' == d
        ? (a.htmlFor = b)
        : Yb.hasOwnProperty(d)
        ? a.setAttribute(Yb[d], b)
        : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0)
        ? a.setAttribute(d, b)
        : (a[d] = b);
    });
  }
  var Yb = {
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    colspan: 'colSpan',
    frameborder: 'frameBorder',
    height: 'height',
    maxlength: 'maxLength',
    nonce: 'nonce',
    role: 'role',
    rowspan: 'rowSpan',
    type: 'type',
    usemap: 'useMap',
    valign: 'vAlign',
    width: 'width',
  };
  function Zb(a, b, c) {
    var d = arguments,
      e = document,
      f = String(d[0]),
      g = d[1];
    if (!Gb && g && (g.name || g.type)) {
      f = ['<', f];
      g.name && f.push(' name="', Ra(g.name), '"');
      if (g.type) {
        f.push(' type="', Ra(g.type), '"');
        var h = {};
        mb(h, g);
        delete h.type;
        g = h;
      }
      f.push('>');
      f = f.join('');
    }
    f = e.createElement(f);
    g &&
      (t(g)
        ? (f.className = g)
        : xa(g)
        ? (f.className = g.join(' '))
        : Xb(f, g));
    2 < d.length && $b(e, f, d);
    return f;
  }
  function $b(a, b, c) {
    function d(c) {
      c && b.appendChild(t(c) ? a.createTextNode(c) : c);
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      if (!ya(f) || (x(f) && 0 < f.nodeType)) d(f);
      else {
        a: {
          if (f && 'number' == typeof f.length) {
            if (x(f)) {
              var g = 'function' == typeof f.item || 'string' == typeof f.item;
              break a;
            }
            if (za(f)) {
              g = 'function' == typeof f.item;
              break a;
            }
          }
          g = !1;
        }
        D(g ? Oa(f) : f, d);
      }
    }
  }
  function ac(a, b) {
    for (var c = 0; a; ) {
      if (b(a)) return a;
      a = a.parentNode;
      c++;
    }
    return null;
  }
  function bc(a) {
    cc();
    var b = new Hb();
    b.b = a;
    return b;
  }
  var cc = ua;
  function dc() {
    var a = ec;
    try {
      var b;
      if ((b = !!a && null != a.location.href))
        a: {
          try {
            nb(a.foo);
            b = !0;
            break a;
          } catch (c) {}
          b = !1;
        }
      return b;
    } catch (c) {
      return !1;
    }
  }
  function fc(a) {
    var b = gc;
    if (b)
      for (var c in b)
        Object.prototype.hasOwnProperty.call(b, c) &&
          a.call(void 0, b[c], c, b);
  }
  function hc() {
    var a = [];
    fc(function (b) {
      a.push(b);
    });
    return a;
  }
  var gc = {
      Ua: 'allow-forms',
      Va: 'allow-modals',
      Wa: 'allow-orientation-lock',
      Xa: 'allow-pointer-lock',
      Ya: 'allow-popups',
      Za: 'allow-popups-to-escape-sandbox',
      ab: 'allow-presentation',
      bb: 'allow-same-origin',
      cb: 'allow-scripts',
      eb: 'allow-top-navigation',
      fb: 'allow-top-navigation-by-user-activation',
    },
    ic = Fb(function () {
      return hc();
    });
  function jc() {
    var a = document.createElement('IFRAME').sandbox,
      b = a && a.supports;
    if (!b) return {};
    var c = {};
    D(ic(), function (d) {
      b.call(a, d) && (c[d] = !0);
    });
    return c;
  }
  function kc(a) {
    'number' == typeof a && (a = Math.round(a) + 'px');
    return a;
  }
  var lc = !!window.google_async_iframe_id,
    ec = (lc && window.parent) || window;
  var mc =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function H(a) {
    return a.match(mc);
  }
  function nc(a) {
    return a ? decodeURI(a) : a;
  }
  function oc(a, b, c) {
    if (xa(b)) for (var d = 0; d < b.length; d++) oc(a, String(b[d]), c);
    else
      null != b &&
        c.push(a + ('' === b ? '' : '=' + encodeURIComponent(String(b))));
  }
  function pc(a) {
    var b = [],
      c;
    for (c in a) oc(c, a[c], b);
    return b.join('&');
  }
  function qc(a, b) {
    var c = pc(b);
    if (c) {
      var d = a.indexOf('#');
      0 > d && (d = a.length);
      var e = a.indexOf('?');
      if (0 > e || e > d) {
        e = d;
        var f = '';
      } else f = a.substring(e + 1, d);
      d = [a.substr(0, e), f, a.substr(d)];
      e = d[1];
      d[1] = c ? (e ? e + '&' + c : c) : e;
      c = d[0] + (d[1] ? '?' + d[1] : '') + d[2];
    } else c = a;
    return c;
  }
  var rc = null;
  function sc() {
    var a = q.performance;
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : z();
  }
  function tc() {
    var a = void 0 === a ? q : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  function uc(a, b, c) {
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = 0;
    this.uniqueId = this.label + '_' + this.type + '_' + Math.random();
    this.slotId = void 0;
  }
  var I = q.performance,
    vc = !!(I && I.mark && I.measure && I.clearMarks),
    wc = Fb(function () {
      var a;
      if ((a = vc)) {
        var b;
        if (null === rc) {
          rc = '';
          try {
            a = '';
            try {
              a = q.top.location.hash;
            } catch (c) {
              a = q.location.hash;
            }
            a && (rc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : '');
          } catch (c) {}
        }
        b = rc;
        a = !!b.indexOf && 0 <= b.indexOf('1337');
      }
      return a;
    });
  function xc() {
    var a = yc;
    this.events = [];
    this.f = a || q;
    var b = null;
    a &&
      ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
      (this.events = a.google_js_reporting_queue),
      (b = a.google_measure_js_timing));
    this.b = wc() || (null != b ? b : 1 > Math.random());
  }
  xc.prototype.disable = function () {
    this.b = !1;
    this.events != this.f.google_js_reporting_queue &&
      (wc() && D(this.events, zc), (this.events.length = 0));
  };
  function zc(a) {
    a &&
      I &&
      wc() &&
      (I.clearMarks('goog_' + a.uniqueId + '_start'),
      I.clearMarks('goog_' + a.uniqueId + '_end'));
  }
  xc.prototype.start = function (a, b) {
    if (!this.b) return null;
    var c = tc() || sc();
    c = new uc(a, b, c);
    var d = 'goog_' + c.uniqueId + '_start';
    I && wc() && I.mark(d);
    return c;
  };
  xc.prototype.end = function (a) {
    if (this.b && 'number' == typeof a.value) {
      var b = tc() || sc();
      a.duration = b - a.value;
      b = 'goog_' + a.uniqueId + '_end';
      I && wc() && I.mark(b);
      this.b && this.events.push(a);
    }
  };
  if (lc && !dc()) {
    var Ac = '.' + Ga.domain;
    try {
      for (; 2 < Ac.split('.').length && !dc(); )
        (Ga.domain = Ac = Ac.substr(Ac.indexOf('.') + 1)), (ec = window.parent);
    } catch (a) {}
    dc() || (ec = window);
  }
  var yc = ec,
    Bc = new xc();
  if ('complete' == yc.document.readyState)
    yc.google_measure_js_timing || Bc.disable();
  else if (Bc.b) {
    var Cc = function () {
        yc.google_measure_js_timing || Bc.disable();
      },
      Dc = yc;
    Dc.addEventListener && Dc.addEventListener('load', Cc, !1);
  }
  var Ec = new Date().getTime();
  function Fc(a) {
    if (!a) return '';
    a = a.split('#')[0].split('?')[0];
    a = a.toLowerCase();
    0 == a.indexOf('//') && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf('://') + 3),
      c = b.indexOf('/');
    -1 != c && (b = b.substring(0, c));
    a = a.substring(0, a.indexOf('://'));
    if (
      'http' !== a &&
      'https' !== a &&
      'chrome-extension' !== a &&
      'file' !== a &&
      'android-app' !== a &&
      'chrome-search' !== a &&
      'app' !== a
    )
      throw Error('Invalid URI scheme in origin: ' + a);
    c = '';
    var d = b.indexOf(':');
    if (-1 != d) {
      var e = b.substring(d + 1);
      b = b.substring(0, d);
      if (('http' === a && '80' !== e) || ('https' === a && '443' !== e))
        c = ':' + e;
    }
    return a + '://' + b + c;
  }
  function Gc() {
    function a() {
      e[0] = 1732584193;
      e[1] = 4023233417;
      e[2] = 2562383102;
      e[3] = 271733878;
      e[4] = 3285377520;
      v = m = 0;
    }
    function b(a) {
      for (var b = g, c = 0; 64 > c; c += 4)
        b[c / 4] = (a[c] << 24) | (a[c + 1] << 16) | (a[c + 2] << 8) | a[c + 3];
      for (c = 16; 80 > c; c++)
        (a = b[c - 3] ^ b[c - 8] ^ b[c - 14] ^ b[c - 16]),
          (b[c] = ((a << 1) | (a >>> 31)) & 4294967295);
      a = e[0];
      var d = e[1],
        f = e[2],
        h = e[3],
        l = e[4];
      for (c = 0; 80 > c; c++) {
        if (40 > c)
          if (20 > c) {
            var m = h ^ (d & (f ^ h));
            var v = 1518500249;
          } else (m = d ^ f ^ h), (v = 1859775393);
        else
          60 > c
            ? ((m = (d & f) | (h & (d | f))), (v = 2400959708))
            : ((m = d ^ f ^ h), (v = 3395469782));
        m =
          ((((a << 5) | (a >>> 27)) & 4294967295) + m + l + v + b[c]) &
          4294967295;
        l = h;
        h = f;
        f = ((d << 30) | (d >>> 2)) & 4294967295;
        d = a;
        a = m;
      }
      e[0] = (e[0] + a) & 4294967295;
      e[1] = (e[1] + d) & 4294967295;
      e[2] = (e[2] + f) & 4294967295;
      e[3] = (e[3] + h) & 4294967295;
      e[4] = (e[4] + l) & 4294967295;
    }
    function c(a, c) {
      if ('string' === typeof a) {
        a = unescape(encodeURIComponent(a));
        for (var d = [], e = 0, g = a.length; e < g; ++e)
          d.push(a.charCodeAt(e));
        a = d;
      }
      c || (c = a.length);
      d = 0;
      if (0 == m)
        for (; d + 64 < c; ) b(a.slice(d, d + 64)), (d += 64), (v += 64);
      for (; d < c; )
        if (((f[m++] = a[d++]), v++, 64 == m))
          for (m = 0, b(f); d + 64 < c; )
            b(a.slice(d, d + 64)), (d += 64), (v += 64);
    }
    function d() {
      var a = [],
        d = 8 * v;
      56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56));
      for (var g = 63; 56 <= g; g--) (f[g] = d & 255), (d >>>= 8);
      b(f);
      for (g = d = 0; 5 > g; g++)
        for (var l = 24; 0 <= l; l -= 8) a[d++] = (e[g] >> l) & 255;
      return a;
    }
    for (var e = [], f = [], g = [], h = [128], l = 1; 64 > l; ++l) h[l] = 0;
    var m, v;
    a();
    return {
      reset: a,
      update: c,
      digest: d,
      sa: function () {
        for (var a = d(), b = '', c = 0; c < a.length; c++)
          b +=
            '0123456789ABCDEF'.charAt(Math.floor(a[c] / 16)) +
            '0123456789ABCDEF'.charAt(a[c] % 16);
        return b;
      },
    };
  }
  function Hc(a, b, c) {
    var d = [],
      e = [];
    if (1 == (xa(c) ? 2 : 1))
      return (
        (e = [b, a]),
        D(d, function (a) {
          e.push(a);
        }),
        Ic(e.join(' '))
      );
    var f = [],
      g = [];
    D(c, function (a) {
      g.push(a.key);
      f.push(a.value);
    });
    c = Math.floor(new Date().getTime() / 1e3);
    e = 0 == f.length ? [c, b, a] : [f.join(':'), c, b, a];
    D(d, function (a) {
      e.push(a);
    });
    a = Ic(e.join(' '));
    a = [c, a];
    0 == g.length || a.push(g.join(''));
    return a.join('_');
  }
  function Ic(a) {
    var b = Gc();
    b.update(a);
    return b.sa().toLowerCase();
  }
  function Jc(a) {
    var b = Fc(String(q.location.href)),
      c = q.__OVERRIDE_SID;
    null == c && (c = new Db(document).get('SID'));
    if (
      c &&
      ((b = (c =
        0 == b.indexOf('https:') || 0 == b.indexOf('chrome-extension:'))
        ? q.__SAPISID
        : q.__APISID),
      null == b && (b = new Db(document).get(c ? 'SAPISID' : 'APISID')),
      b)
    ) {
      c = c ? 'SAPISIDHASH' : 'APISIDHASH';
      var d = String(q.location.href);
      return d && b && c ? [c, Hc(Fc(d), b, a || null)].join(' ') : null;
    }
    return null;
  }
  function Kc(a, b) {
    this.g = a;
    this.h = b;
    this.f = 0;
    this.b = null;
  }
  Kc.prototype.get = function () {
    if (0 < this.f) {
      this.f--;
      var a = this.b;
      this.b = a.next;
      a.next = null;
    } else a = this.g();
    return a;
  };
  function Lc(a, b) {
    a.h(b);
    100 > a.f && (a.f++, (b.next = a.b), (a.b = b));
  }
  function Mc(a) {
    q.setTimeout(function () {
      throw a;
    }, 0);
  }
  var Nc;
  function Oc() {
    var a = q.MessageChannel;
    'undefined' === typeof a &&
      'undefined' !== typeof window &&
      window.postMessage &&
      window.addEventListener &&
      !E('Presto') &&
      (a = function () {
        var a = document.createElement('IFRAME');
        a.style.display = 'none';
        a.src = '';
        document.documentElement.appendChild(a);
        var b = a.contentWindow;
        a = b.document;
        a.open();
        a.write('');
        a.close();
        var c = 'callImmediate' + Math.random(),
          d =
            'file:' == b.location.protocol
              ? '*'
              : b.location.protocol + '//' + b.location.host;
        a = y(function (a) {
          if (('*' == d || a.origin == d) && a.data == c)
            this.port1.onmessage();
        }, this);
        b.addEventListener('message', a, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            b.postMessage(c, d);
          },
        };
      });
    if ('undefined' !== typeof a && !E('Trident') && !E('MSIE')) {
      var b = new a(),
        c = {},
        d = c;
      b.port1.onmessage = function () {
        if (r(c.next)) {
          c = c.next;
          var a = c.ha;
          c.ha = null;
          a();
        }
      };
      return function (a) {
        d.next = { ha: a };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return 'undefined' !== typeof document &&
      'onreadystatechange' in document.createElement('SCRIPT')
      ? function (a) {
          var b = document.createElement('SCRIPT');
          b.onreadystatechange = function () {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null;
          };
          document.documentElement.appendChild(b);
        }
      : function (a) {
          q.setTimeout(a, 0);
        };
  }
  function Pc() {
    this.f = this.b = null;
  }
  var Rc = new Kc(
    function () {
      return new Qc();
    },
    function (a) {
      a.reset();
    }
  );
  Pc.prototype.add = function (a, b) {
    var c = Rc.get();
    c.set(a, b);
    this.f ? (this.f.next = c) : (this.b = c);
    this.f = c;
  };
  Pc.prototype.remove = function () {
    var a = null;
    this.b &&
      ((a = this.b),
      (this.b = this.b.next),
      this.b || (this.f = null),
      (a.next = null));
    return a;
  };
  function Qc() {
    this.next = this.scope = this.b = null;
  }
  Qc.prototype.set = function (a, b) {
    this.b = a;
    this.scope = b;
    this.next = null;
  };
  Qc.prototype.reset = function () {
    this.next = this.scope = this.b = null;
  };
  function Sc(a, b) {
    Tc || Uc();
    Vc || (Tc(), (Vc = !0));
    Wc.add(a, b);
  }
  var Tc;
  function Uc() {
    if (q.Promise && q.Promise.resolve) {
      var a = q.Promise.resolve(void 0);
      Tc = function () {
        a.then(Xc);
      };
    } else
      Tc = function () {
        var a = Xc;
        !za(q.setImmediate) ||
        (q.Window &&
          q.Window.prototype &&
          !E('Edge') &&
          q.Window.prototype.setImmediate == q.setImmediate)
          ? (Nc || (Nc = Oc()), Nc(a))
          : q.setImmediate(a);
      };
  }
  var Vc = !1,
    Wc = new Pc();
  function Xc() {
    for (var a; (a = Wc.remove()); ) {
      try {
        a.b.call(a.scope);
      } catch (b) {
        Mc(b);
      }
      Lc(Rc, a);
    }
    Vc = !1;
  }
  function Yc() {
    this.f = -1;
  }
  function Zc() {
    this.f = 64;
    this.b = [];
    this.j = [];
    this.u = [];
    this.h = [];
    this.h[0] = 128;
    for (var a = 1; a < this.f; ++a) this.h[a] = 0;
    this.i = this.g = 0;
    this.reset();
  }
  A(Zc, Yc);
  Zc.prototype.reset = function () {
    this.b[0] = 1732584193;
    this.b[1] = 4023233417;
    this.b[2] = 2562383102;
    this.b[3] = 271733878;
    this.b[4] = 3285377520;
    this.i = this.g = 0;
  };
  function $c(a, b, c) {
    c || (c = 0);
    var d = a.u;
    if (t(b))
      for (var e = 0; 16 > e; e++)
        (d[e] =
          (b.charCodeAt(c) << 24) |
          (b.charCodeAt(c + 1) << 16) |
          (b.charCodeAt(c + 2) << 8) |
          b.charCodeAt(c + 3)),
          (c += 4);
    else
      for (e = 0; 16 > e; e++)
        (d[e] = (b[c] << 24) | (b[c + 1] << 16) | (b[c + 2] << 8) | b[c + 3]),
          (c += 4);
    for (e = 16; 80 > e; e++) {
      var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
      d[e] = ((f << 1) | (f >>> 31)) & 4294967295;
    }
    b = a.b[0];
    c = a.b[1];
    var g = a.b[2],
      h = a.b[3],
      l = a.b[4];
    for (e = 0; 80 > e; e++) {
      if (40 > e)
        if (20 > e) {
          f = h ^ (c & (g ^ h));
          var m = 1518500249;
        } else (f = c ^ g ^ h), (m = 1859775393);
      else
        60 > e
          ? ((f = (c & g) | (h & (c | g))), (m = 2400959708))
          : ((f = c ^ g ^ h), (m = 3395469782));
      f = (((b << 5) | (b >>> 27)) + f + l + m + d[e]) & 4294967295;
      l = h;
      h = g;
      g = ((c << 30) | (c >>> 2)) & 4294967295;
      c = b;
      b = f;
    }
    a.b[0] = (a.b[0] + b) & 4294967295;
    a.b[1] = (a.b[1] + c) & 4294967295;
    a.b[2] = (a.b[2] + g) & 4294967295;
    a.b[3] = (a.b[3] + h) & 4294967295;
    a.b[4] = (a.b[4] + l) & 4294967295;
  }
  Zc.prototype.update = function (a, b) {
    if (null != a) {
      r(b) || (b = a.length);
      for (var c = b - this.f, d = 0, e = this.j, f = this.g; d < b; ) {
        if (0 == f) for (; d <= c; ) $c(this, a, d), (d += this.f);
        if (t(a))
          for (; d < b; ) {
            if (((e[f] = a.charCodeAt(d)), ++f, ++d, f == this.f)) {
              $c(this, e);
              f = 0;
              break;
            }
          }
        else
          for (; d < b; )
            if (((e[f] = a[d]), ++f, ++d, f == this.f)) {
              $c(this, e);
              f = 0;
              break;
            }
      }
      this.g = f;
      this.i += b;
    }
  };
  Zc.prototype.digest = function () {
    var a = [],
      b = 8 * this.i;
    56 > this.g
      ? this.update(this.h, 56 - this.g)
      : this.update(this.h, this.f - (this.g - 56));
    for (var c = this.f - 1; 56 <= c; c--) (this.j[c] = b & 255), (b /= 256);
    $c(this, this.j);
    for (c = b = 0; 5 > c; c++)
      for (var d = 24; 0 <= d; d -= 8) (a[b] = (this.b[c] >> d) & 255), ++b;
    return a;
  };
  function J() {
    this.f = this.f;
    this.u = this.u;
  }
  J.prototype.f = !1;
  J.prototype.dispose = function () {
    this.f || ((this.f = !0), this.l());
  };
  function ad(a, b) {
    a.f
      ? r(void 0)
        ? b.call(void 0)
        : b()
      : (a.u || (a.u = []), a.u.push(r(void 0) ? y(b, void 0) : b));
  }
  J.prototype.l = function () {
    if (this.u) for (; this.u.length; ) this.u.shift()();
  };
  function bd(a) {
    a && 'function' == typeof a.dispose && a.dispose();
  }
  function cd(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
      var d = arguments[b];
      ya(d) ? cd.apply(null, d) : bd(d);
    }
  }
  function dd(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return (t(a) && a.match(/\S+/g)) || [];
  }
  function ed(a, b) {
    if (a.classList) var c = a.classList.contains(b);
    else (c = dd(a)), (c = 0 <= Ha(c, b));
    return c;
  }
  function fd() {
    var a = document.body;
    a.classList
      ? a.classList.remove('inverted-hdpi')
      : ed(a, 'inverted-hdpi') &&
        (a.className = Ja(dd(a), function (a) {
          return 'inverted-hdpi' != a;
        }).join(' '));
  }
  var gd =
    'StopIteration' in q
      ? q.StopIteration
      : { message: 'StopIteration', stack: '' };
  function hd() {}
  hd.prototype.next = function () {
    throw gd;
  };
  hd.prototype.F = function () {
    return this;
  };
  function id(a) {
    if (a instanceof hd) return a;
    if ('function' == typeof a.F) return a.F(!1);
    if (ya(a)) {
      var b = 0,
        c = new hd();
      c.next = function () {
        for (;;) {
          if (b >= a.length) throw gd;
          if (b in a) return a[b++];
          b++;
        }
      };
      return c;
    }
    throw Error('Not implemented');
  }
  function jd(a, b) {
    if (ya(a))
      try {
        D(a, b, void 0);
      } catch (c) {
        if (c !== gd) throw c;
      }
    else {
      a = id(a);
      try {
        for (;;) b.call(void 0, a.next(), void 0, a);
      } catch (c) {
        if (c !== gd) throw c;
      }
    }
  }
  function kd(a) {
    if (ya(a)) return Oa(a);
    a = id(a);
    var b = [];
    jd(a, function (a) {
      b.push(a);
    });
    return b;
  }
  function ld(a, b) {
    this.g = {};
    this.b = [];
    this.h = this.f = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error('Uneven number of arguments');
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof ld)
        for (c = md(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  }
  function md(a) {
    nd(a);
    return a.b.concat();
  }
  k = ld.prototype;
  k.equals = function (a, b) {
    if (this === a) return !0;
    if (this.f != a.f) return !1;
    var c = b || od;
    nd(this);
    for (var d, e = 0; (d = this.b[e]); e++)
      if (!c(this.get(d), a.get(d))) return !1;
    return !0;
  };
  function od(a, b) {
    return a === b;
  }
  k.isEmpty = function () {
    return 0 == this.f;
  };
  k.clear = function () {
    this.g = {};
    this.h = this.f = this.b.length = 0;
  };
  k.remove = function (a) {
    return Object.prototype.hasOwnProperty.call(this.g, a)
      ? (delete this.g[a],
        this.f--,
        this.h++,
        this.b.length > 2 * this.f && nd(this),
        !0)
      : !1;
  };
  function nd(a) {
    if (a.f != a.b.length) {
      for (var b = 0, c = 0; b < a.b.length; ) {
        var d = a.b[b];
        Object.prototype.hasOwnProperty.call(a.g, d) && (a.b[c++] = d);
        b++;
      }
      a.b.length = c;
    }
    if (a.f != a.b.length) {
      var e = {};
      for (c = b = 0; b < a.b.length; )
        (d = a.b[b]),
          Object.prototype.hasOwnProperty.call(e, d) ||
            ((a.b[c++] = d), (e[d] = 1)),
          b++;
      a.b.length = c;
    }
  }
  k.get = function (a, b) {
    return Object.prototype.hasOwnProperty.call(this.g, a) ? this.g[a] : b;
  };
  k.set = function (a, b) {
    Object.prototype.hasOwnProperty.call(this.g, a) ||
      (this.f++, this.b.push(a), this.h++);
    this.g[a] = b;
  };
  k.forEach = function (a, b) {
    for (var c = md(this), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  k.clone = function () {
    return new ld(this);
  };
  k.F = function (a) {
    nd(this);
    var b = 0,
      c = this.h,
      d = this,
      e = new hd();
    e.next = function () {
      if (c != d.h)
        throw Error('The map has changed since the iterator was created');
      if (b >= d.b.length) throw gd;
      var e = d.b[b++];
      return a ? e : d.g[e];
    };
    return e;
  };
  function pd(a) {
    var b = [];
    qd(new rd(), a, b);
    return b.join('');
  }
  function rd() {}
  function qd(a, b, c) {
    if (null == b) c.push('null');
    else {
      if ('object' == typeof b) {
        if (xa(b)) {
          var d = b;
          b = d.length;
          c.push('[');
          for (var e = '', f = 0; f < b; f++)
            c.push(e), qd(a, d[f], c), (e = ',');
          c.push(']');
          return;
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean)
          b = b.valueOf();
        else {
          c.push('{');
          e = '';
          for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) &&
              ((f = b[d]),
              'function' != typeof f &&
                (c.push(e), sd(d, c), c.push(':'), qd(a, f, c), (e = ',')));
          c.push('}');
          return;
        }
      }
      switch (typeof b) {
        case 'string':
          sd(b, c);
          break;
        case 'number':
          c.push(isFinite(b) && !isNaN(b) ? String(b) : 'null');
          break;
        case 'boolean':
          c.push(String(b));
          break;
        case 'function':
          c.push('null');
          break;
        default:
          throw Error('Unknown type: ' + typeof b);
      }
    }
  }
  var td = {
      '"': '\\"',
      '\\': '\\\\',
      '/': '\\/',
      '\b': '\\b',
      '\f': '\\f',
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\x0B': '\\u000b',
    },
    ud = /\uffff/.test('\uffff')
      ? /[\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\"\x00-\x1f\x7f-\xff]/g;
  function sd(a, b) {
    b.push(
      '"',
      a.replace(ud, function (a) {
        var b = td[a];
        b ||
          ((b = '\\u' + (a.charCodeAt(0) | 65536).toString(16).substr(1)),
          (td[a] = b));
        return b;
      }),
      '"'
    );
  }
  function vd(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable = !0;
  }
  function wd(a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  }
  function K(a, b) {
    this.b = 0;
    this.u = void 0;
    this.h = this.f = this.g = null;
    this.i = this.j = !1;
    if (a != ua)
      try {
        var c = this;
        a.call(
          b,
          function (a) {
            xd(c, 2, a);
          },
          function (a) {
            xd(c, 3, a);
          }
        );
      } catch (d) {
        xd(this, 3, d);
      }
  }
  function yd() {
    this.next = this.context = this.onRejected = this.f = this.b = null;
    this.g = !1;
  }
  yd.prototype.reset = function () {
    this.context = this.onRejected = this.f = this.b = null;
    this.g = !1;
  };
  var zd = new Kc(
    function () {
      return new yd();
    },
    function (a) {
      a.reset();
    }
  );
  function Ad(a, b, c) {
    var d = zd.get();
    d.f = a;
    d.onRejected = b;
    d.context = c;
    return d;
  }
  function Bd(a) {
    return new K(function (b, c) {
      c(a);
    });
  }
  K.prototype.then = function (a, b, c) {
    return Cd(this, za(a) ? a : null, za(b) ? b : null, c);
  };
  vd(K);
  function Dd(a, b) {
    return Cd(a, null, b, void 0);
  }
  K.prototype.cancel = function (a) {
    0 == this.b &&
      Sc(function () {
        var b = new Ed(a);
        Fd(this, b);
      }, this);
  };
  function Fd(a, b) {
    if (0 == a.b)
      if (a.g) {
        var c = a.g;
        if (c.f) {
          for (
            var d = 0, e = null, f = null, g = c.f;
            g && (g.g || (d++, g.b == a && (e = g), !(e && 1 < d)));
            g = g.next
          )
            e || (f = g);
          e &&
            (0 == c.b && 1 == d
              ? Fd(c, b)
              : (f
                  ? ((d = f),
                    d.next == c.h && (c.h = d),
                    (d.next = d.next.next))
                  : Gd(c),
                Hd(c, e, 3, b)));
        }
        a.g = null;
      } else xd(a, 3, b);
  }
  function Id(a, b) {
    a.f || (2 != a.b && 3 != a.b) || Jd(a);
    a.h ? (a.h.next = b) : (a.f = b);
    a.h = b;
  }
  function Cd(a, b, c, d) {
    var e = Ad(null, null, null);
    e.b = new K(function (a, g) {
      e.f = b
        ? function (c) {
            try {
              var e = b.call(d, c);
              a(e);
            } catch (m) {
              g(m);
            }
          }
        : a;
      e.onRejected = c
        ? function (b) {
            try {
              var e = c.call(d, b);
              !r(e) && b instanceof Ed ? g(b) : a(e);
            } catch (m) {
              g(m);
            }
          }
        : g;
    });
    e.b.g = a;
    Id(a, e);
    return e.b;
  }
  K.prototype.w = function (a) {
    this.b = 0;
    xd(this, 2, a);
  };
  K.prototype.B = function (a) {
    this.b = 0;
    xd(this, 3, a);
  };
  function xd(a, b, c) {
    if (0 == a.b) {
      a === c &&
        ((b = 3), (c = new TypeError('Promise cannot resolve to itself')));
      a.b = 1;
      a: {
        var d = c,
          e = a.w,
          f = a.B;
        if (d instanceof K) {
          Id(d, Ad(e || ua, f || null, a));
          var g = !0;
        } else if (wd(d)) d.then(e, f, a), (g = !0);
        else {
          if (x(d))
            try {
              var h = d.then;
              if (za(h)) {
                Kd(d, h, e, f, a);
                g = !0;
                break a;
              }
            } catch (l) {
              f.call(a, l);
              g = !0;
              break a;
            }
          g = !1;
        }
      }
      g ||
        ((a.u = c),
        (a.b = b),
        (a.g = null),
        Jd(a),
        3 != b || c instanceof Ed || Ld(a, c));
    }
  }
  function Kd(a, b, c, d, e) {
    function f(a) {
      h || ((h = !0), d.call(e, a));
    }
    function g(a) {
      h || ((h = !0), c.call(e, a));
    }
    var h = !1;
    try {
      b.call(a, g, f);
    } catch (l) {
      f(l);
    }
  }
  function Jd(a) {
    a.j || ((a.j = !0), Sc(a.m, a));
  }
  function Gd(a) {
    var b = null;
    a.f && ((b = a.f), (a.f = b.next), (b.next = null));
    a.f || (a.h = null);
    return b;
  }
  K.prototype.m = function () {
    for (var a; (a = Gd(this)); ) Hd(this, a, this.b, this.u);
    this.j = !1;
  };
  function Hd(a, b, c, d) {
    if (3 == c && b.onRejected && !b.g) for (; a && a.i; a = a.g) a.i = !1;
    if (b.b) (b.b.g = null), Md(b, c, d);
    else
      try {
        b.g ? b.f.call(b.context) : Md(b, c, d);
      } catch (e) {
        Nd.call(null, e);
      }
    Lc(zd, b);
  }
  function Md(a, b, c) {
    2 == b
      ? a.f.call(a.context, c)
      : a.onRejected && a.onRejected.call(a.context, c);
  }
  function Ld(a, b) {
    a.i = !0;
    Sc(function () {
      a.i && Nd.call(null, b);
    });
  }
  var Nd = Mc;
  function Ed(a) {
    C.call(this, a);
  }
  A(Ed, C);
  Ed.prototype.name = 'cancel';
  function L(a) {
    J.call(this);
    this.j = 1;
    this.h = [];
    this.i = 0;
    this.b = [];
    this.g = {};
    this.m = !!a;
  }
  A(L, J);
  k = L.prototype;
  k.subscribe = function (a, b, c) {
    var d = this.g[a];
    d || (d = this.g[a] = []);
    var e = this.j;
    this.b[e] = a;
    this.b[e + 1] = b;
    this.b[e + 2] = c;
    this.j = e + 3;
    d.push(e);
    return e;
  };
  function Od(a, b, c, d) {
    if ((b = a.g[b])) {
      var e = a.b;
      (b = Ma(b, function (a) {
        return e[a + 1] == c && e[a + 2] == d;
      })) && a.L(b);
    }
  }
  k.L = function (a) {
    var b = this.b[a];
    if (b) {
      var c = this.g[b];
      0 != this.i
        ? (this.h.push(a), (this.b[a + 1] = ua))
        : (c && Na(c, a),
          delete this.b[a],
          delete this.b[a + 1],
          delete this.b[a + 2]);
    }
    return !!b;
  };
  k.K = function (a, b) {
    var c = this.g[a];
    if (c) {
      for (
        var d = Array(arguments.length - 1), e = 1, f = arguments.length;
        e < f;
        e++
      )
        d[e - 1] = arguments[e];
      if (this.m)
        for (e = 0; e < c.length; e++) {
          var g = c[e];
          Pd(this.b[g + 1], this.b[g + 2], d);
        }
      else {
        this.i++;
        try {
          for (e = 0, f = c.length; e < f; e++)
            (g = c[e]), this.b[g + 1].apply(this.b[g + 2], d);
        } finally {
          if ((this.i--, 0 < this.h.length && 0 == this.i))
            for (; (c = this.h.pop()); ) this.L(c);
        }
      }
      return 0 != e;
    }
    return !1;
  };
  function Pd(a, b, c) {
    Sc(function () {
      a.apply(b, c);
    });
  }
  k.clear = function (a) {
    if (a) {
      var b = this.g[a];
      b && (D(b, this.L, this), delete this.g[a]);
    } else (this.b.length = 0), (this.g = {});
  };
  k.l = function () {
    L.A.l.call(this);
    this.clear();
    this.h.length = 0;
  };
  function Qd(a) {
    this.b = a;
  }
  Qd.prototype.set = function (a, b) {
    r(b) ? this.b.set(a, pd(b)) : this.b.remove(a);
  };
  Qd.prototype.get = function (a) {
    try {
      var b = this.b.get(a);
    } catch (c) {
      return;
    }
    if (null !== b)
      try {
        return JSON.parse(b);
      } catch (c) {
        throw 'Storage: Invalid value was encountered';
      }
  };
  Qd.prototype.remove = function (a) {
    this.b.remove(a);
  };
  function Rd(a) {
    this.b = a;
  }
  A(Rd, Qd);
  function Sd(a) {
    this.data = a;
  }
  function Td(a) {
    return !r(a) || a instanceof Sd ? a : new Sd(a);
  }
  Rd.prototype.set = function (a, b) {
    Rd.A.set.call(this, a, Td(b));
  };
  Rd.prototype.f = function (a) {
    a = Rd.A.get.call(this, a);
    if (!r(a) || a instanceof Object) return a;
    throw 'Storage: Invalid value was encountered';
  };
  Rd.prototype.get = function (a) {
    if ((a = this.f(a))) {
      if (((a = a.data), !r(a))) throw 'Storage: Invalid value was encountered';
    } else a = void 0;
    return a;
  };
  function M(a) {
    this.b = a;
  }
  A(M, Rd);
  M.prototype.set = function (a, b, c) {
    if ((b = Td(b))) {
      if (c) {
        if (c < z()) {
          M.prototype.remove.call(this, a);
          return;
        }
        b.expiration = c;
      }
      b.creation = z();
    }
    M.A.set.call(this, a, b);
  };
  M.prototype.f = function (a) {
    var b = M.A.f.call(this, a);
    if (b) {
      var c = b.creation,
        d = b.expiration;
      if ((d && d < z()) || (c && c > z())) M.prototype.remove.call(this, a);
      else return b;
    }
  };
  function Ud(a) {
    this.b = a;
  }
  A(Ud, M);
  function Vd() {}
  function Wd() {}
  A(Wd, Vd);
  Wd.prototype.clear = function () {
    var a = kd(this.F(!0)),
      b = this;
    D(a, function (a) {
      b.remove(a);
    });
  };
  function Xd(a) {
    this.b = a;
  }
  A(Xd, Wd);
  k = Xd.prototype;
  k.isAvailable = function () {
    if (!this.b) return !1;
    try {
      return this.b.setItem('__sak', '1'), this.b.removeItem('__sak'), !0;
    } catch (a) {
      return !1;
    }
  };
  k.set = function (a, b) {
    try {
      this.b.setItem(a, b);
    } catch (c) {
      if (0 == this.b.length) throw 'Storage mechanism: Storage disabled';
      throw 'Storage mechanism: Quota exceeded';
    }
  };
  k.get = function (a) {
    a = this.b.getItem(a);
    if (!t(a) && null !== a)
      throw 'Storage mechanism: Invalid value was encountered';
    return a;
  };
  k.remove = function (a) {
    this.b.removeItem(a);
  };
  k.F = function (a) {
    var b = 0,
      c = this.b,
      d = new hd();
    d.next = function () {
      if (b >= c.length) throw gd;
      var d = c.key(b++);
      if (a) return d;
      d = c.getItem(d);
      if (!t(d)) throw 'Storage mechanism: Invalid value was encountered';
      return d;
    };
    return d;
  };
  k.clear = function () {
    this.b.clear();
  };
  k.key = function (a) {
    return this.b.key(a);
  };
  function Yd() {
    var a = null;
    try {
      a = window.localStorage || null;
    } catch (b) {}
    this.b = a;
  }
  A(Yd, Xd);
  function Zd() {
    var a = null;
    try {
      a = window.sessionStorage || null;
    } catch (b) {}
    this.b = a;
  }
  A(Zd, Xd);
  function $d(a, b) {
    this.f = a;
    this.b = null;
    if (pb && !(9 <= Number(zb))) {
      ae || (ae = new ld());
      this.b = ae.get(a);
      this.b ||
        (b
          ? (this.b = document.getElementById(b))
          : ((this.b = document.createElement('userdata')),
            this.b.addBehavior('#default#userData'),
            document.body.appendChild(this.b)),
        ae.set(a, this.b));
      try {
        this.b.load(this.f);
      } catch (c) {
        this.b = null;
      }
    }
  }
  A($d, Wd);
  var be = {
      '.': '.2E',
      '!': '.21',
      '~': '.7E',
      '*': '.2A',
      "'": '.27',
      '(': '.28',
      ')': '.29',
      '%': '.',
    },
    ae = null;
  function ce(a) {
    return (
      '_' +
      encodeURIComponent(a).replace(/[.!~*'()%]/g, function (a) {
        return be[a];
      })
    );
  }
  k = $d.prototype;
  k.isAvailable = function () {
    return !!this.b;
  };
  k.set = function (a, b) {
    this.b.setAttribute(ce(a), b);
    ee(this);
  };
  k.get = function (a) {
    a = this.b.getAttribute(ce(a));
    if (!t(a) && null !== a)
      throw 'Storage mechanism: Invalid value was encountered';
    return a;
  };
  k.remove = function (a) {
    this.b.removeAttribute(ce(a));
    ee(this);
  };
  k.F = function (a) {
    var b = 0,
      c = this.b.XMLDocument.documentElement.attributes,
      d = new hd();
    d.next = function () {
      if (b >= c.length) throw gd;
      var d = c[b++];
      if (a)
        return decodeURIComponent(d.nodeName.replace(/\./g, '%')).substr(1);
      d = d.nodeValue;
      if (!t(d)) throw 'Storage mechanism: Invalid value was encountered';
      return d;
    };
    return d;
  };
  k.clear = function () {
    for (
      var a = this.b.XMLDocument.documentElement, b = a.attributes.length;
      0 < b;
      b--
    )
      a.removeAttribute(a.attributes[b - 1].nodeName);
    ee(this);
  };
  function ee(a) {
    try {
      a.b.save(a.f);
    } catch (b) {
      throw 'Storage mechanism: Quota exceeded';
    }
  }
  function fe(a, b) {
    this.f = a;
    this.b = b + '::';
  }
  A(fe, Wd);
  fe.prototype.set = function (a, b) {
    this.f.set(this.b + a, b);
  };
  fe.prototype.get = function (a) {
    return this.f.get(this.b + a);
  };
  fe.prototype.remove = function (a) {
    this.f.remove(this.b + a);
  };
  fe.prototype.F = function (a) {
    var b = this.f.F(!0),
      c = this,
      d = new hd();
    d.next = function () {
      for (var d = b.next(); d.substr(0, c.b.length) != c.b; ) d = b.next();
      return a ? d.substr(c.b.length) : c.f.get(d);
    };
    return d;
  };
  function ge() {
    this.f = [];
    this.b = -1;
  }
  ge.prototype.set = function (a, b) {
    b = void 0 === b ? !0 : b;
    0 <= a &&
      52 > a &&
      0 === a % 1 &&
      this.f[a] != b &&
      ((this.f[a] = b), (this.b = -1));
  };
  ge.prototype.get = function (a) {
    return !!this.f[a];
  };
  function he(a) {
    -1 == a.b &&
      (a.b = La(
        a.f,
        function (a, c, d) {
          return c ? a + Math.pow(2, d) : a;
        },
        0
      ));
    return a.b;
  }
  function ie(a, b) {
    if (1 < b.length) a[b[0]] = b[1];
    else {
      var c = b[0],
        d;
      for (d in c) a[d] = c[d];
    }
  }
  var N =
    window.performance && window.performance.timing && window.performance.now
      ? function () {
          return (
            window.performance.timing.navigationStart + window.performance.now()
          );
        }
      : function () {
          return new Date().getTime();
        };
  var je =
    (window.yt && window.yt.config_) ||
    (window.ytcfg && window.ytcfg.data_) ||
    {};
  u('yt.config_', je, void 0);
  function O(a) {
    ie(je, arguments);
  }
  function P(a, b) {
    return a in je ? je[a] : b;
  }
  function Q(a) {
    return P(a, void 0);
  }
  function ke() {
    return P('PLAYER_CONFIG', {});
  }
  z();
  function le(a) {
    return a && window.yterr
      ? function () {
          try {
            return a.apply(this, arguments);
          } catch (b) {
            R(b);
          }
        }
      : a;
  }
  function R(a, b, c, d, e) {
    var f = w('yt.logging.errors.log');
    f
      ? f(a, b, c, d, e)
      : ((f = P('ERRORS', [])), f.push([a, b, c, d, e]), O('ERRORS', f));
  }
  function me(a) {
    R(a, 'WARNING', void 0, void 0, void 0);
  }
  var ne = r(XMLHttpRequest)
    ? function () {
        return new XMLHttpRequest();
      }
    : r(ActiveXObject)
    ? function () {
        return new ActiveXObject('Microsoft.XMLHTTP');
      }
    : null;
  function oe() {
    if (!ne) return null;
    var a = ne();
    return 'open' in a ? a : null;
  }
  function pe(a) {
    switch (a && 'status' in a ? a.status : -1) {
      case 200:
      case 201:
      case 202:
      case 203:
      case 204:
      case 205:
      case 206:
      case 304:
        return !0;
      default:
        return !1;
    }
  }
  function S(a, b) {
    za(a) && (a = le(a));
    return window.setTimeout(a, b);
  }
  function qe(a) {
    window.clearTimeout(a);
  }
  function re(a) {
    '?' == a.charAt(0) && (a = a.substr(1));
    a = a.split('&');
    for (var b = {}, c = 0, d = a.length; c < d; c++) {
      var e = a[c].split('=');
      if ((1 == e.length && e[0]) || 2 == e.length) {
        var f = decodeURIComponent((e[0] || '').replace(/\+/g, ' '));
        e = decodeURIComponent((e[1] || '').replace(/\+/g, ' '));
        f in b ? (xa(b[f]) ? Pa(b[f], e) : (b[f] = [b[f], e])) : (b[f] = e);
      }
    }
    return b;
  }
  var se = {
      'X-Goog-Visitor-Id': 'SANDBOXED_VISITOR_ID',
      'X-YouTube-Client-Name': 'INNERTUBE_CONTEXT_CLIENT_NAME',
      'X-YouTube-Client-Version': 'INNERTUBE_CONTEXT_CLIENT_VERSION',
      'X-Youtube-Identity-Token': 'ID_TOKEN',
      'X-YouTube-Page-CL': 'PAGE_CL',
      'X-YouTube-Page-Label': 'PAGE_BUILD_LABEL',
      'X-YouTube-Variants-Checksum': 'VARIANTS_CHECKSUM',
    },
    te = !1;
  function ue(a, b) {
    b = void 0 === b ? {} : b;
    if (!c) var c = window.location.href;
    var d = H(a)[1] || null,
      e = nc(H(a)[3] || null);
    d && e
      ? ((d = c),
        (c = H(a)),
        (d = H(d)),
        (c = c[3] == d[3] && c[1] == d[1] && c[4] == d[4]))
      : (c = e
          ? nc(H(c)[3] || null) == e &&
            (Number(H(c)[4] || null) || null) ==
              (Number(H(a)[4] || null) || null)
          : !0);
    for (var f in se) (d = P(se[f])) && (c || ve(a, f)) && (b[f] = d);
    if (c || ve(a, 'X-YouTube-Utc-Offset'))
      b['X-YouTube-Utc-Offset'] = -new Date().getTimezoneOffset();
    return b;
  }
  function ve(a, b) {
    var c = P('CORS_HEADER_WHITELIST') || {},
      d = nc(H(a)[3] || null);
    return d ? ((c = c[d]) ? 0 <= Ha(c, b) : !1) : !0;
  }
  function we(a, b) {
    if (window.fetch && 'XML' != b.format) {
      var c = { method: b.method || 'GET', credentials: 'same-origin' };
      b.headers && (c.headers = b.headers);
      a = xe(a, b);
      var d = ye(a, b);
      d && (c.body = d);
      b.withCredentials && (c.credentials = 'include');
      var e = !1,
        f;
      fetch(a, c).then(function (a) {
        if (!e) {
          e = !0;
          f && qe(f);
          var c = a.ok,
            d = function (d) {
              d = d || {};
              var e = b.context || q;
              c
                ? b.onSuccess && b.onSuccess.call(e, d, a)
                : b.onError && b.onError.call(e, d, a);
              b.fa && b.fa.call(e, d, a);
            };
          'JSON' == (b.format || 'JSON') &&
          (c || (400 <= a.status && 500 > a.status))
            ? a.json().then(d, function () {
                d(null);
              })
            : d(null);
        }
      });
      b.ja &&
        0 < b.timeout &&
        (f = S(function () {
          e || ((e = !0), qe(f), b.ja.call(b.context || q));
        }, b.timeout));
    } else ze(a, b);
  }
  function ze(a, b) {
    var c = b.format || 'JSON';
    a = xe(a, b);
    var d = ye(a, b),
      e = !1,
      f,
      g = Ae(
        a,
        function (a) {
          if (!e) {
            e = !0;
            f && qe(f);
            var d = pe(a),
              g = null,
              h = 400 <= a.status && 500 > a.status,
              da = 500 <= a.status && 600 > a.status;
            if (d || h || da) g = Be(c, a, b.jb);
            if (d)
              a: if (a && 204 == a.status) d = !0;
              else {
                switch (c) {
                  case 'XML':
                    d = 0 == parseInt(g && g.return_code, 10);
                    break a;
                  case 'RAW':
                    d = !0;
                    break a;
                }
                d = !!g;
              }
            g = g || {};
            h = b.context || q;
            d
              ? b.onSuccess && b.onSuccess.call(h, a, g)
              : b.onError && b.onError.call(h, a, g);
            b.fa && b.fa.call(h, a, g);
          }
        },
        b.method,
        d,
        b.headers,
        b.responseType,
        b.withCredentials
      );
    b.M &&
      0 < b.timeout &&
      (f = S(function () {
        e || ((e = !0), g.abort(), qe(f), b.M.call(b.context || q, g));
      }, b.timeout));
    return g;
  }
  function xe(a, b) {
    b.xa &&
      (a =
        document.location.protocol +
        '//' +
        document.location.hostname +
        (document.location.port ? ':' + document.location.port : '') +
        a);
    var c = P('XSRF_FIELD_NAME', void 0),
      d = b.Ta;
    if (d) {
      d[c] && delete d[c];
      d = d || {};
      var e = a.split('#', 2);
      c = e[0];
      e = 1 < e.length ? '#' + e[1] : '';
      var f = c.split('?', 2);
      c = f[0];
      f = re(f[1] || '');
      for (var g in d) f[g] = d[g];
      a = qc(c, f) + e;
    }
    return a;
  }
  function ye(a, b) {
    var c = P('XSRF_FIELD_NAME', void 0),
      d = P('XSRF_TOKEN', void 0),
      e = b.postBody || '',
      f = b.C,
      g = Q('XSRF_FIELD_NAME'),
      h;
    b.headers && (h = b.headers['Content-Type']);
    b.kb ||
      (nc(H(a)[3] || null) &&
        !b.withCredentials &&
        nc(H(a)[3] || null) != document.location.hostname) ||
      'POST' != b.method ||
      (h && 'application/x-www-form-urlencoded' != h) ||
      (b.C && b.C[g]) ||
      (f || (f = {}), (f[c] = d));
    f &&
      t(e) &&
      ((e = re(e)),
      mb(e, f),
      (e = b.ka && 'JSON' == b.ka ? JSON.stringify(e) : pc(e)));
    f = e || (f && !hb(f));
    !te &&
      f &&
      'POST' != b.method &&
      ((te = !0), R(Error('AJAX request with postData should use POST')));
    return e;
  }
  function Be(a, b, c) {
    var d = null;
    switch (a) {
      case 'JSON':
        a = b.responseText;
        b = b.getResponseHeader('Content-Type') || '';
        a && 0 <= b.indexOf('json') && (d = JSON.parse(a));
        break;
      case 'XML':
        if ((b = (b = b.responseXML) ? Ce(b) : null))
          (d = {}),
            D(b.getElementsByTagName('*'), function (a) {
              d[a.tagName] = De(a);
            });
    }
    c && Ee(d);
    return d;
  }
  function Ee(a) {
    if (x(a))
      for (var b in a) {
        var c;
        (c = 'html_content' == b) ||
          ((c = b.length - 5), (c = 0 <= c && b.indexOf('_html', c) == c));
        if (c) {
          c = b;
          var d = Rb(a[b], null);
          a[c] = d;
        } else Ee(a[b]);
      }
  }
  function Ce(a) {
    return a
      ? (a = ('responseXML' in a ? a.responseXML : a).getElementsByTagName(
          'root'
        )) && 0 < a.length
        ? a[0]
        : null
      : null;
  }
  function De(a) {
    var b = '';
    D(a.childNodes, function (a) {
      b += a.nodeValue;
    });
    return b;
  }
  function Fe(a, b) {
    b.method = 'POST';
    b.C || (b.C = {});
    ze(a, b);
  }
  function Ae(a, b, c, d, e, f, g) {
    function h() {
      4 == (l && 'readyState' in l ? l.readyState : 0) && b && le(b)(l);
    }
    c = void 0 === c ? 'GET' : c;
    d = void 0 === d ? '' : d;
    var l = oe();
    if (!l) return null;
    'onloadend' in l
      ? l.addEventListener('loadend', h, !1)
      : (l.onreadystatechange = h);
    l.open(c, a, !0);
    f && (l.responseType = f);
    g && (l.withCredentials = !0);
    c = 'POST' == c && (void 0 === window.FormData || !(d instanceof FormData));
    if ((e = ue(a, e)))
      for (var m in e)
        l.setRequestHeader(m, e[m]),
          'content-type' == m.toLowerCase() && (c = !1);
    c &&
      l.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    l.send(d);
    return l;
  }
  var Ge = {},
    He = 0;
  function Ie(a, b, c, d, e) {
    e = void 0 === e ? '' : e;
    a &&
      (c && ((c = ab), (c = !(c && 0 <= c.toLowerCase().indexOf('cobalt')))),
      c
        ? a &&
          (a instanceof F ||
            ((a = 'object' == typeof a && a.J ? a.I() : String(a)),
            Mb.test(a) || (a = 'about:invalid#zClosurez'),
            (a = Ob(a))),
          (b = Lb(a)),
          'about:invalid#zClosurez' === b
            ? (a = '')
            : (b instanceof Pb
                ? (a = b)
                : ((d = 'object' == typeof b),
                  (a = null),
                  d && b.ca && (a = b.Z()),
                  (b = Ra(d && b.J ? b.I() : String(b))),
                  (a = Rb(b, a))),
              (a = encodeURIComponent(
                String(
                  pd(
                    a instanceof Pb && a.constructor === Pb && a.g === Qb
                      ? a.b
                      : 'type_error:SafeHtml'
                  )
                )
              ))),
          /^[\s\xa0]*$/.test(a) ||
            ((a = Zb('IFRAME', {
              src: 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"',
              style: 'display:none',
            })),
            (9 == a.nodeType
              ? a
              : a.ownerDocument || a.document
            ).body.appendChild(a)))
        : e
        ? Ae(a, b, 'POST', e, d)
        : P('USE_NET_AJAX_FOR_PING_TRANSPORT', !1) || d
        ? Ae(a, b, 'GET', '', d)
        : Je(a, b));
  }
  function Je(a, b) {
    var c = new Image(),
      d = '' + He++;
    Ge[d] = c;
    c.onload = c.onerror = function () {
      b && Ge[d] && b();
      delete Ge[d];
    };
    c.src = a;
  }
  var Ke = {},
    Le = 0;
  function Me(a, b, c, d, e, f) {
    f = f || {};
    f.name = c || P('INNERTUBE_CONTEXT_CLIENT_NAME', 1);
    f.version = d || P('INNERTUBE_CONTEXT_CLIENT_VERSION', void 0);
    b = void 0 === b ? 'ERROR' : b;
    e = void 0 === e ? !1 : e;
    b = void 0 === b ? 'ERROR' : b;
    e = (window && window.yterr) || (void 0 === e ? !1 : e) || !1;
    if (a && e && !(5 <= Le)) {
      e = a.stacktrace;
      c = a.columnNumber;
      a.hasOwnProperty('params') &&
        (f.params = JSON.stringify(a.params).substr(0, 500));
      d = w('window.location.href');
      if (t(a))
        a = {
          message: a,
          name: 'Unknown error',
          lineNumber: 'Not available',
          fileName: d,
          stack: 'Not available',
        };
      else {
        var g = !1;
        try {
          var h = a.lineNumber || a.line || 'Not available';
        } catch (da) {
          (h = 'Not available'), (g = !0);
        }
        try {
          var l =
            a.fileName || a.filename || a.sourceURL || q.$googDebugFname || d;
        } catch (da) {
          (l = 'Not available'), (g = !0);
        }
        a =
          !g && a.lineNumber && a.fileName && a.stack && a.message && a.name
            ? a
            : {
                message: a.message || 'Not available',
                name: a.name || 'UnknownError',
                lineNumber: h,
                fileName: l,
                stack: a.stack || 'Not available',
              };
      }
      e = e || a.stack;
      h = a.lineNumber.toString();
      isNaN(h) || isNaN(c) || (h = h + ':' + c);
      if (
        !(
          Ke[a.message] ||
          0 <= e.indexOf('/YouTubeCenter.js') ||
          0 <= e.indexOf('/mytube.js')
        )
      ) {
        l = e;
        h = {
          Ta: {
            a: 'logerror',
            t: 'jserror',
            type: a.name,
            msg: a.message.substr(0, 1e3),
            line: h,
            level: b,
            'client.name': f.name,
          },
          C: { url: P('PAGE_NAME', window.location.href), file: a.fileName },
          method: 'POST',
        };
        f.version && (h['client.version'] = f.version);
        l && (h.C.stack = l);
        for (var m in f) h.C['client.' + m] = f[m];
        if ((m = P('LATEST_ECATCHER_SERVICE_TRACKING_PARAMS', void 0)))
          for (var v in m) h.C[v] = m[v];
        ze(P('ECATCHER_REPORT_HOST', '') + '/error_204', h);
        Ke[a.message] = !0;
        Le++;
      }
    }
  }
  var Ne =
    (window.yt && window.yt.msgs_) || (window.ytcfg && window.ytcfg.msgs) || {};
  u('yt.msgs_', Ne, void 0);
  function Oe(a) {
    ie(Ne, arguments);
  }
  function Pe(a) {
    a &&
      (a.dataset
        ? (a.dataset[Qe('loaded')] = 'true')
        : a.setAttribute('data-loaded', 'true'));
  }
  function Re(a, b) {
    return a
      ? a.dataset
        ? a.dataset[Qe(b)]
        : a.getAttribute('data-' + b)
      : null;
  }
  var Se = {};
  function Qe(a) {
    return (
      Se[a] ||
      (Se[a] = String(a).replace(/\-([a-z])/g, function (a, c) {
        return c.toUpperCase();
      }))
    );
  }
  var Te = w('ytPubsubPubsubInstance') || new L();
  L.prototype.subscribe = L.prototype.subscribe;
  L.prototype.unsubscribeByKey = L.prototype.L;
  L.prototype.publish = L.prototype.K;
  L.prototype.clear = L.prototype.clear;
  u('ytPubsubPubsubInstance', Te, void 0);
  var Ue = w('ytPubsubPubsubSubscribedKeys') || {};
  u('ytPubsubPubsubSubscribedKeys', Ue, void 0);
  var Ve = w('ytPubsubPubsubTopicToKeys') || {};
  u('ytPubsubPubsubTopicToKeys', Ve, void 0);
  var We = w('ytPubsubPubsubIsSynchronous') || {};
  u('ytPubsubPubsubIsSynchronous', We, void 0);
  function Xe(a, b) {
    var c = Ye();
    if (c) {
      var d = c.subscribe(
        a,
        function () {
          var c = arguments;
          var f = function () {
            Ue[d] && b.apply(window, c);
          };
          try {
            We[a] ? f() : S(f, 0);
          } catch (g) {
            R(g);
          }
        },
        void 0
      );
      Ue[d] = !0;
      Ve[a] || (Ve[a] = []);
      Ve[a].push(d);
      return d;
    }
    return 0;
  }
  function Ze(a) {
    var b = Ye();
    b &&
      ('number' == typeof a ? (a = [a]) : t(a) && (a = [parseInt(a, 10)]),
      D(a, function (a) {
        b.unsubscribeByKey(a);
        delete Ue[a];
      }));
  }
  function $e(a, b) {
    var c = Ye();
    c && c.publish.apply(c, arguments);
  }
  function af(a) {
    var b = Ye();
    if (b)
      if ((b.clear(a), a)) bf(a);
      else for (var c in Ve) bf(c);
  }
  function Ye() {
    return w('ytPubsubPubsubInstance');
  }
  function bf(a) {
    Ve[a] &&
      ((a = Ve[a]),
      D(a, function (a) {
        Ue[a] && delete Ue[a];
      }),
      (a.length = 0));
  }
  var cf = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/,
    df = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;
  function ef(a, b, c) {
    c = void 0 === c ? null : c;
    if (window.spf) {
      c = '';
      if (a) {
        var d = a.indexOf('jsbin/'),
          e = a.lastIndexOf('.js'),
          f = d + 6;
        -1 < d &&
          -1 < e &&
          e > f &&
          ((c = a.substring(f, e)),
          (c = c.replace(cf, '')),
          (c = c.replace(df, '')),
          (c = c.replace('debug-', '')),
          (c = c.replace('tracing-', '')));
      }
      spf.script.load(a, c, b);
    } else ff(a, b, c);
  }
  function ff(a, b, c) {
    c = void 0 === c ? null : c;
    var d = gf(a),
      e = document.getElementById(d),
      f = e && Re(e, 'loaded'),
      g = e && !f;
    f
      ? b && b()
      : (b &&
          ((f = Xe(d, b)), (b = '' + (b[Aa] || (b[Aa] = ++Ba))), (hf[b] = f)),
        g ||
          (e = jf(
            a,
            d,
            function () {
              Re(e, 'loaded') || (Pe(e), $e(d), S(Ea(af, d), 0));
            },
            c
          )));
  }
  function jf(a, b, c, d) {
    d = void 0 === d ? null : d;
    var e = document.createElement('SCRIPT');
    e.id = b;
    e.onload = function () {
      c && setTimeout(c, 0);
    };
    e.onreadystatechange = function () {
      switch (e.readyState) {
        case 'loaded':
        case 'complete':
          e.onload();
      }
    };
    d && e.setAttribute('nonce', d);
    Tb(e, bc(a));
    a = document.getElementsByTagName('head')[0] || document.body;
    a.insertBefore(e, a.firstChild);
    return e;
  }
  function kf(a) {
    a = gf(a);
    var b = document.getElementById(a);
    b && (af(a), b.parentNode.removeChild(b));
  }
  function lf(a, b) {
    if (a && b) {
      var c = '' + (b[Aa] || (b[Aa] = ++Ba));
      (c = hf[c]) && Ze(c);
    }
  }
  function gf(a) {
    var b = document.createElement('a');
    Sb(b, a);
    a = b.href.replace(/^[a-zA-Z]+:\/\//, '//');
    return 'js-' + $a(a);
  }
  var hf = {};
  function mf() {}
  function nf(a, b) {
    return of(a, 1, b);
  }
  function pf() {}
  n(pf, mf);
  function of(a, b, c) {
    isNaN(c) && (c = void 0);
    var d = w('yt.scheduler.instance.addJob');
    return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : S(a, c || 0);
  }
  function qf(a) {
    if (!isNaN(a)) {
      var b = w('yt.scheduler.instance.cancelJob');
      b ? b(a) : qe(a);
    }
  }
  pf.prototype.start = function () {
    var a = w('yt.scheduler.instance.start');
    a && a();
  };
  pf.prototype.pause = function () {
    var a = w('yt.scheduler.instance.pause');
    a && a();
  };
  va(pf);
  pf.getInstance();
  var rf = [],
    sf = !1;
  function tf() {
    if ('1' != eb(ke(), 'args', 'privembed')) {
      var a = function () {
        sf = !0;
        'google_ad_status' in window ? O('DCLKSTAT', 1) : O('DCLKSTAT', 2);
      };
      ef('//static.doubleclick.net/instream/ad_status.js', a);
      rf.push(
        nf(function () {
          sf ||
            'google_ad_status' in window ||
            (lf('//static.doubleclick.net/instream/ad_status.js', a),
            O('DCLKSTAT', 3));
        }, 5e3)
      );
    }
  }
  function uf() {
    return parseInt(P('DCLKSTAT', 0), 10);
  }
  function vf() {
    this.f = !1;
    this.b = null;
  }
  vf.prototype.initialize = function (a, b, c, d, e) {
    b
      ? ((this.f = !0),
        ef(
          b,
          function () {
            this.f = !1;
            window.botguard
              ? wf(this, c, d)
              : (kf(b),
                R(Error('Unable to load Botguard from ' + b), 'WARNING'));
          }.bind(this),
          e
        ))
      : a &&
        (eval(a),
        window.botguard
          ? wf(this, c, d)
          : R(Error('Unable to load Botguard from JS'), 'WARNING'));
  };
  function wf(a, b, c) {
    try {
      a.b = new window.botguard.bg(b);
    } catch (d) {
      me(d);
    }
    c && c(b);
  }
  vf.prototype.invoke = function () {
    return this.b ? this.b.invoke() : null;
  };
  vf.prototype.dispose = function () {
    this.b = null;
  };
  function T(a) {
    return P('EXPERIMENT_FLAGS', {})[a];
  }
  var xf = new vf(),
    yf = !1,
    zf = 0,
    Af = '';
  function Bf(a) {
    T('botguard_periodic_refresh')
      ? (zf = N())
      : T('botguard_always_refresh') && (Af = a);
  }
  function Cf(a) {
    if (a) {
      if (xf.f) return !1;
      if (T('botguard_periodic_refresh')) return 72e5 < N() - zf;
      if (T('botguard_always_refresh')) return Af != a;
    } else return !1;
    return !yf;
  }
  function Df() {
    return null !== xf.b;
  }
  function Ef() {
    return xf.invoke();
  }
  var Ff = 0;
  u(
    'ytDomDomGetNextId',
    w('ytDomDomGetNextId') ||
      function () {
        return ++Ff;
      },
    void 0
  );
  var Gf = {
    stopImmediatePropagation: 1,
    stopPropagation: 1,
    preventMouseEvent: 1,
    preventManipulation: 1,
    preventDefault: 1,
    layerX: 1,
    layerY: 1,
    screenX: 1,
    screenY: 1,
    scale: 1,
    rotation: 1,
    webkitMovementX: 1,
    webkitMovementY: 1,
  };
  function Hf(a) {
    this.type = '';
    this.state =
      this.source =
      this.data =
      this.currentTarget =
      this.relatedTarget =
      this.target =
        null;
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
    this.clientY = this.clientX = 0;
    this.changedTouches = this.touches = null;
    if ((a = a || window.event)) {
      this.event = a;
      for (var b in a) b in Gf || (this[b] = a[b]);
      (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
      this.target = b;
      if ((b = a.relatedTarget))
        try {
          b = b.nodeName ? b : null;
        } catch (c) {
          b = null;
        }
      else
        'mouseover' == this.type
          ? (b = a.fromElement)
          : 'mouseout' == this.type && (b = a.toElement);
      this.relatedTarget = b;
      this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
      this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
      this.keyCode = a.keyCode ? a.keyCode : a.which;
      this.charCode =
        a.charCode || ('keypress' == this.type ? this.keyCode : 0);
      this.altKey = a.altKey;
      this.ctrlKey = a.ctrlKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.b = a.pageX;
      this.f = a.pageY;
    }
  }
  function If(a) {
    if (document.body && document.documentElement) {
      var b = document.body.scrollTop + document.documentElement.scrollTop;
      a.b =
        a.clientX +
        (document.body.scrollLeft + document.documentElement.scrollLeft);
      a.f = a.clientY + b;
    }
  }
  Hf.prototype.preventDefault = function () {
    this.event &&
      ((this.event.returnValue = !1),
      this.event.preventDefault && this.event.preventDefault());
  };
  Hf.prototype.stopPropagation = function () {
    this.event &&
      ((this.event.cancelBubble = !0),
      this.event.stopPropagation && this.event.stopPropagation());
  };
  Hf.prototype.stopImmediatePropagation = function () {
    this.event &&
      ((this.event.cancelBubble = !0),
      this.event.stopImmediatePropagation &&
        this.event.stopImmediatePropagation());
  };
  var gb = w('ytEventsEventsListeners') || {};
  u('ytEventsEventsListeners', gb, void 0);
  var Jf = w('ytEventsEventsCounter') || { count: 0 };
  u('ytEventsEventsCounter', Jf, void 0);
  function Kf(a, b, c, d) {
    d = void 0 === d ? {} : d;
    a.addEventListener &&
      ('mouseenter' != b || 'onmouseenter' in document
        ? 'mouseleave' != b || 'onmouseenter' in document
          ? 'mousewheel' == b &&
            'MozBoxSizing' in document.documentElement.style &&
            (b = 'MozMousePixelScroll')
          : (b = 'mouseout')
        : (b = 'mouseover'));
    return fb(function (e) {
      var f = 'boolean' == typeof e[4] && e[4] == !!d,
        g = x(e[4]) && x(d) && jb(e[4], d);
      return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g);
    });
  }
  var Lf = Fb(function () {
    var a = !1;
    try {
      var b = Object.defineProperty({}, 'capture', {
        get: function () {
          a = !0;
        },
      });
      window.addEventListener('test', null, b);
    } catch (c) {}
    return a;
  });
  function U(a, b, c, d) {
    d = void 0 === d ? {} : d;
    if (!a || (!a.addEventListener && !a.attachEvent)) return '';
    var e = Kf(a, b, c, d);
    if (e) return e;
    e = ++Jf.count + '';
    var f = !(
      ('mouseenter' != b && 'mouseleave' != b) ||
      !a.addEventListener ||
      'onmouseenter' in document
    );
    var g = f
      ? function (d) {
          d = new Hf(d);
          if (
            !ac(d.relatedTarget, function (b) {
              return b == a;
            })
          )
            return (d.currentTarget = a), (d.type = b), c.call(a, d);
        }
      : function (b) {
          b = new Hf(b);
          b.currentTarget = a;
          return c.call(a, b);
        };
    g = le(g);
    a.addEventListener
      ? ('mouseenter' == b && f
          ? (b = 'mouseover')
          : 'mouseleave' == b && f
          ? (b = 'mouseout')
          : 'mousewheel' == b &&
            'MozBoxSizing' in document.documentElement.style &&
            (b = 'MozMousePixelScroll'),
        Lf() || 'boolean' == typeof d
          ? a.addEventListener(b, g, d)
          : a.addEventListener(b, g, !!d.capture))
      : a.attachEvent('on' + b, g);
    gb[e] = [a, b, c, g, d];
    return e;
  }
  function Mf(a) {
    a &&
      ('string' == typeof a && (a = [a]),
      D(a, function (a) {
        if (a in gb) {
          var b = gb[a],
            d = b[0],
            e = b[1],
            f = b[3];
          b = b[4];
          d.removeEventListener
            ? Lf() || 'boolean' == typeof b
              ? d.removeEventListener(e, f, b)
              : d.removeEventListener(e, f, !!b.capture)
            : d.detachEvent && d.detachEvent('on' + e, f);
          delete gb[a];
        }
      }));
  }
  function Nf(a) {
    this.w = a;
    this.b = null;
    this.i = 0;
    this.m = null;
    this.j = 0;
    this.g = [];
    for (a = 0; 4 > a; a++) this.g.push(0);
    this.h = 0;
    this.D = U(window, 'mousemove', y(this.G, this));
    a = y(this.B, this);
    za(a) && (a = le(a));
    this.H = window.setInterval(a, 25);
  }
  A(Nf, J);
  Nf.prototype.G = function (a) {
    r(a.b) || If(a);
    var b = a.b;
    r(a.f) || If(a);
    this.b = new Ub(b, a.f);
  };
  Nf.prototype.B = function () {
    if (this.b) {
      var a = N();
      if (0 != this.i) {
        var b = this.m,
          c = this.b,
          d = b.x - c.x;
        b = b.y - c.y;
        d = Math.sqrt(d * d + b * b) / (a - this.i);
        this.g[this.h] = 0.5 < Math.abs((d - this.j) / this.j) ? 1 : 0;
        for (c = b = 0; 4 > c; c++) b += this.g[c] || 0;
        3 <= b && this.w();
        this.j = d;
      }
      this.i = a;
      this.m = this.b;
      this.h = (this.h + 1) % 4;
    }
  };
  Nf.prototype.l = function () {
    window.clearInterval(this.H);
    Mf(this.D);
  };
  var Of = {};
  function Pf(a) {
    var b = void 0 === a ? {} : a;
    a = void 0 === b.ya ? !0 : b.ya;
    b = void 0 === b.Ia ? !1 : b.Ia;
    if (null == w('_lact', window)) {
      var c = parseInt(P('LACT'), 10);
      c = isFinite(c) ? z() - Math.max(c, 0) : -1;
      u('_lact', c, window);
      u('_fact', c, window);
      -1 == c && Qf();
      U(document, 'keydown', Qf);
      U(document, 'keyup', Qf);
      U(document, 'mousedown', Qf);
      U(document, 'mouseup', Qf);
      a &&
        (b
          ? U(
              window,
              'touchmove',
              function () {
                Rf('touchmove', 200);
              },
              { passive: !0 }
            )
          : (U(window, 'resize', function () {
              Rf('resize', 200);
            }),
            U(window, 'scroll', function () {
              Rf('scroll', 200);
            })));
      new Nf(function () {
        Rf('mouse', 100);
      });
      U(document, 'touchstart', Qf, { passive: !0 });
      U(document, 'touchend', Qf, { passive: !0 });
    }
  }
  function Rf(a, b) {
    Of[a] ||
      ((Of[a] = !0),
      nf(function () {
        Qf();
        Of[a] = !1;
      }, b));
  }
  function Qf() {
    null == w('_lact', window) && Pf();
    var a = z();
    u('_lact', a, window);
    -1 == w('_fact', window) && u('_fact', a, window);
    (a = w('ytglobal.ytUtilActivityCallback_')) && a();
  }
  function Sf() {
    var a = w('_lact', window);
    return null == a ? -1 : Math.max(z() - a, 0);
  }
  var Tf = Math.pow(2, 16) - 1,
    Uf = null,
    Vf = 0,
    Wf = { log_event: 'events', log_interaction: 'interactions' },
    Xf = Object.create(null);
  Xf.log_event = 'GENERIC_EVENT_LOGGING';
  Xf.log_interaction = 'INTERACTION_LOGGING';
  var Yf = new Set(['log_event']),
    Zf = {},
    $f = 0,
    V = w('ytLoggingTransportLogPayloadsQueue_') || {};
  u('ytLoggingTransportLogPayloadsQueue_', V, void 0);
  var ag = w('ytLoggingTransportTokensToCttTargetIds_') || {};
  u('ytLoggingTransportTokensToCttTargetIds_', ag, void 0);
  var bg = w('ytLoggingTransportDispatchedStats_') || {};
  u('ytLoggingTransportDispatchedStats_', bg, void 0);
  u(
    'ytytLoggingTransportCapturedTime_',
    w('ytLoggingTransportCapturedTime_') || {},
    void 0
  );
  function cg(a, b) {
    if (a.W) {
      var c = a.W;
      var d = {};
      c.videoId
        ? (d.videoId = c.videoId)
        : c.playlistId && (d.playlistId = c.playlistId);
      ag[a.W.token] = d;
      c = dg(a.endpoint, a.W.token);
    } else c = dg(a.endpoint);
    c.push(a.payload);
    Zf[a.endpoint] = new b();
    c.length >= (Number(T('web_logging_max_batch') || 0) || 20) ? eg() : fg();
  }
  function eg() {
    qe($f);
    if (!hb(V)) {
      for (var a in V) {
        var b = Zf[a];
        b && (gg(a, b), delete V[a]);
      }
      hb(V) || fg();
    }
  }
  function fg() {
    qe($f);
    $f = S(eg, P('LOGGING_BATCH_TIMEOUT', 1e4));
  }
  function dg(a, b) {
    b = void 0 === b ? '' : b;
    V[a] = V[a] || {};
    V[a][b] = V[a][b] || [];
    return V[a][b];
  }
  function gg(a, b) {
    var c = Wf[a],
      d = bg[a] || {};
    bg[a] = d;
    var e = Math.round(N());
    for (m in V[a]) {
      var f = b.b;
      f = {
        client: {
          hl: f.Ba,
          gl: f.Aa,
          clientName: f.za,
          clientVersion: f.innertubeContextClientVersion,
        },
      };
      var g = window.devicePixelRatio;
      g && 1 != g && (f.client.screenDensityFloat = String(g));
      P('DELEGATED_SESSION_ID') &&
        !T('pageid_as_header_web') &&
        (f.user = { onBehalfOfUser: P('DELEGATED_SESSION_ID') });
      f = { context: f };
      f[c] = dg(a, m);
      d.dispatchedEventCount = d.dispatchedEventCount || 0;
      d.dispatchedEventCount += f[c].length;
      if ((g = ag[m]))
        a: {
          var h = m;
          if (g.videoId) var l = 'VIDEO';
          else if (g.playlistId) l = 'PLAYLIST';
          else break a;
          f.credentialTransferTokenTargetId = g;
          f.context = f.context || {};
          f.context.user = f.context.user || {};
          f.context.user.credentialTransferTokens = [{ token: h, scope: l }];
        }
      delete ag[m];
      f.requestTimeMs = e;
      if ((g = Q('EVENT_ID')))
        (l = (P('BATCH_CLIENT_COUNTER', void 0) || 0) + 1),
          l > Tf && (l = 1),
          O('BATCH_CLIENT_COUNTER', l),
          (g = { serializedEventId: g, clientCounter: l }),
          (f.serializedClientEventId = g),
          Uf &&
            Vf &&
            T('log_gel_rtt_web') &&
            (f.previousBatchInfo = {
              serializedClientEventId: Uf,
              roundtripMs: Vf,
            }),
          (Uf = g),
          (Vf = 0);
      hg(b, a, f, { retry: Yf.has(a), onSuccess: ig.bind(this, N()) });
    }
    if (d.previousDispatchMs) {
      c = e - d.previousDispatchMs;
      var m = d.diffCount || 0;
      d.averageTimeBetweenDispatchesMs = m
        ? (d.averageTimeBetweenDispatchesMs * m + c) / (m + 1)
        : c;
      d.diffCount = m + 1;
    }
    d.previousDispatchMs = e;
  }
  function ig(a) {
    Vf = Math.round(N() - a);
  }
  function jg(a, b, c, d) {
    var e = kg,
      f = {};
    f.eventTimeMs = Math.round(c || N());
    f[a] = b;
    f.context = { lastActivityMs: String(c ? -1 : Sf()) };
    cg({ endpoint: 'log_event', payload: f, W: d }, e);
  }
  function lg(a, b) {
    var c = { 'X-Goog-Visitor-Id': P('VISITOR_DATA', '') };
    if (b && b.includes('www.youtube-nocookie.com')) return c;
    var d;
    a ? (d = 'Bearer ' + w('gapi.auth.getToken')().gb) : (d = Jc([]));
    d &&
      ((c.Authorization = d),
      (c['X-Goog-AuthUser'] = P('SESSION_INDEX', 0)),
      T('pageid_as_header_web') &&
        (c['X-Goog-PageId'] = P('DELEGATED_SESSION_ID')));
    return c;
  }
  function mg(a) {
    a = Object.assign({}, a);
    delete a.Authorization;
    var b = Jc();
    if (b) {
      var c = new Zc();
      c.update(P('INNERTUBE_API_KEY', void 0));
      c.update(b);
      b = c.digest();
      if (!Bb)
        for (Bb = {}, Cb = {}, c = 0; 65 > c; c++)
          (Bb[c] =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(
              c
            )),
            (Cb[c] =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.'.charAt(
                c
              ));
      c = Cb;
      for (var d = [], e = 0; e < b.length; e += 3) {
        var f = b[e],
          g = e + 1 < b.length,
          h = g ? b[e + 1] : 0,
          l = e + 2 < b.length,
          m = l ? b[e + 2] : 0,
          v = f >> 2;
        f = ((f & 3) << 4) | (h >> 4);
        h = ((h & 15) << 2) | (m >> 6);
        m &= 63;
        l || ((m = 64), g || (h = 64));
        d.push(c[v], c[f], c[h], c[m]);
      }
      a.hash = d.join('');
    }
    return a;
  }
  function ng(a, b, c, d) {
    Eb.set('' + a, b, c, '/', void 0 === d ? 'youtube.com' : d, !1);
  }
  function og() {
    var a = new Yd();
    (a = a.isAvailable() ? new fe(a, 'yt.innertube') : null) ||
      ((a = new $d('yt.innertube')), (a = a.isAvailable() ? a : null));
    this.b = a ? new M(a) : null;
    this.f = document.domain || window.location.hostname;
  }
  og.prototype.set = function (a, b, c, d) {
    c = c || 31104e3;
    this.remove(a);
    if (this.b)
      try {
        this.b.set(a, b, z() + 1e3 * c);
        return;
      } catch (f) {}
    var e = '';
    if (d)
      try {
        e = escape(pd(b));
      } catch (f) {
        return;
      }
    else e = escape(b);
    ng(a, e, c, this.f);
  };
  og.prototype.get = function (a, b) {
    var c = void 0,
      d = !this.b;
    if (!d)
      try {
        c = this.b.get(a);
      } catch (e) {
        d = !0;
      }
    if (d && (c = Eb.get('' + a, void 0)) && ((c = unescape(c)), b))
      try {
        c = JSON.parse(c);
      } catch (e) {
        this.remove(a), (c = void 0);
      }
    return c;
  };
  og.prototype.remove = function (a) {
    this.b && this.b.remove(a);
    var b = this.f;
    Eb.remove('' + a, '/', void 0 === b ? 'youtube.com' : b);
  };
  var pg = new og();
  function qg(a, b, c, d) {
    if (d) return null;
    d = pg.get('nextId', !0) || 1;
    var e = pg.get('requests', !0) || {};
    e[d] = {
      method: a,
      request: b,
      authState: mg(c),
      requestTime: Math.round(N()),
    };
    pg.set('nextId', d + 1, 86400, !0);
    pg.set('requests', e, 86400, !0);
    return d;
  }
  function rg(a) {
    var b = pg.get('requests', !0) || {};
    delete b[a];
    pg.set('requests', b, 86400, !0);
  }
  function sg(a) {
    var b = pg.get('requests', !0);
    if (b) {
      for (var c in b) {
        var d = b[c];
        if (!(6e4 > Math.round(N()) - d.requestTime)) {
          var e = d.authState,
            f = mg(lg(!1));
          jb(e, f) &&
            ((e = d.request),
            'requestTimeMs' in e && (e.requestTimeMs = Math.round(N())),
            hg(a, d.method, e, {}));
          delete b[c];
        }
      }
      pg.set('requests', b, 86400, !0);
    }
  }
  function kg(a) {
    var b = this;
    this.b = a || {
      innertubeApiKey: Q('INNERTUBE_API_KEY'),
      innertubeApiVersion: Q('INNERTUBE_API_VERSION'),
      za: P('INNERTUBE_CONTEXT_CLIENT_NAME', 'WEB'),
      innertubeContextClientVersion: Q('INNERTUBE_CONTEXT_CLIENT_VERSION'),
      Ba: Q('INNERTUBE_CONTEXT_HL'),
      Aa: Q('INNERTUBE_CONTEXT_GL'),
      Ca: Q('INNERTUBE_HOST_OVERRIDE') || '',
      Da: !!P('INNERTUBE_USE_THIRD_PARTY_AUTH', !1),
    };
    of(
      function () {
        sg(b);
      },
      0,
      5e3
    );
  }
  function hg(a, b, c, d) {
    !P('VISITOR_DATA') &&
      0.01 > Math.random() &&
      R(
        Error('Missing VISITOR_DATA when sending innertube request.'),
        'WARNING'
      );
    var e = {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        C: c,
        ka: 'JSON',
        M: function () {
          d.M();
        },
        ja: d.M,
        onSuccess: function (a, b) {
          if (d.onSuccess) d.onSuccess(b);
        },
        ia: function (a) {
          if (d.onSuccess) d.onSuccess(a);
        },
        onError: function (a, b) {
          if (d.onError) d.onError(b);
        },
        lb: function (a) {
          if (d.onError) d.onError(a);
        },
        timeout: d.timeout,
        withCredentials: !0,
      },
      f = '',
      g = a.b.Ca;
    g && (f = g);
    g = a.b.Da || !1;
    var h = lg(g, f);
    Object.assign(e.headers, h);
    e.headers.Authorization &&
      !f &&
      (e.headers['x-origin'] = window.location.origin);
    var l =
        '' +
        f +
        ('/youtubei/' + a.b.innertubeApiVersion + '/' + b) +
        '?alt=json&key=' +
        a.b.innertubeApiKey,
      m;
    if (
      d.retry &&
      T('retry_web_logging_batches') &&
      'www.youtube-nocookie.com' != f &&
      (m = qg(b, c, h, g))
    ) {
      var v = e.onSuccess,
        da = e.ia;
      e.onSuccess = function (a, b) {
        rg(m);
        v(a, b);
      };
      c.ia = function (a, b) {
        rg(m);
        da(a, b);
      };
    }
    try {
      T('use_fetch_for_op_xhr') ? we(l, e) : Fe(l, e);
    } catch (G) {
      if ('InvalidAccessError' == G)
        m && (rg(m), (m = 0)),
          R(Error('An extension is blocking network request.'), 'WARNING');
      else throw G;
    }
    m &&
      of(
        function () {
          sg(a);
        },
        0,
        5e3
      );
  }
  var tg = z().toString();
  function ug() {
    a: {
      if (window.crypto && window.crypto.getRandomValues)
        try {
          var a = Array(16),
            b = new Uint8Array(16);
          window.crypto.getRandomValues(b);
          for (var c = 0; c < a.length; c++) a[c] = b[c];
          var d = a;
          break a;
        } catch (e) {}
      d = Array(16);
      for (a = 0; 16 > a; a++) {
        b = z();
        for (c = 0; c < b % 23; c++) d[a] = Math.random();
        d[a] = Math.floor(256 * Math.random());
      }
      if (tg)
        for (a = 1, b = 0; b < tg.length; b++)
          (d[a % 16] = d[a % 16] ^ (d[(a - 1) % 16] / 4) ^ tg.charCodeAt(b)),
            a++;
    }
    a = [];
    for (b = 0; b < d.length; b++)
      a.push(
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(
          d[b] & 63
        )
      );
    return a.join('');
  }
  var vg = ug();
  function wg(a) {
    this.b = a;
  }
  function xg(a) {
    var b = {};
    void 0 !== a.b.trackingParams
      ? (b.trackingParams = a.b.trackingParams)
      : ((b.veType = a.b.veType),
        null != a.b.veCounter && (b.veCounter = a.b.veCounter),
        null != a.b.elementIndex && (b.elementIndex = a.b.elementIndex));
    void 0 !== a.b.dataElement && (b.dataElement = xg(a.b.dataElement));
    void 0 !== a.b.youtubeData && (b.youtubeData = a.b.youtubeData);
    return b;
  }
  var yg = 1;
  function zg(a) {
    a = void 0 === a ? 0 : a;
    return 0 == a ? 'client-screen-nonce' : 'client-screen-nonce.' + a;
  }
  function Ag(a) {
    a = void 0 === a ? 0 : a;
    return 0 == a ? 'ROOT_VE_TYPE' : 'ROOT_VE_TYPE.' + a;
  }
  function Bg(a) {
    return P(Ag(void 0 === a ? 0 : a), void 0);
  }
  u('yt.logging.screen.getRootVeType', Bg, void 0);
  function Cg() {
    var a = Bg(0),
      b;
    a ? (b = new wg({ veType: a, youtubeData: void 0 })) : (b = null);
    return b;
  }
  function Dg(a) {
    a = void 0 === a ? 0 : a;
    var b = P(zg(a));
    b || 0 != a || (b = P('EVENT_ID'));
    return b ? b : null;
  }
  u('yt.logging.screen.getCurrentCsn', Dg, void 0);
  function Eg(a, b, c) {
    c = void 0 === c ? 0 : c;
    O(zg(c), a);
    O(Ag(c), b);
    0 == c &&
      ((b = function () {
        setTimeout(function () {
          a &&
            jg('foregroundHeartbeatScreenAssociated', {
              clientDocumentNonce: vg,
              clientScreenNonce: a,
            });
        }, 0);
      }),
      'requestAnimationFrame' in window
        ? window.requestAnimationFrame(b)
        : b());
  }
  u('yt.logging.screen.setCurrentScreen', Eg, void 0);
  function Fg(a, b, c) {
    b = void 0 === b ? {} : b;
    c = void 0 === c ? !1 : c;
    var d = P('EVENT_ID');
    d && (b.ei || (b.ei = d));
    if (b) {
      d = a;
      var e = P('VALID_SESSION_TEMPDATA_DOMAINS', []),
        f = nc(H(window.location.href)[3] || null);
      f && e.push(f);
      f = nc(H(d)[3] || null);
      if (0 <= Ha(e, f) || (!f && 0 == d.lastIndexOf('/', 0)))
        if (
          (T('autoescape_tempdata_url') &&
            ((e = document.createElement('a')), Sb(e, d), (d = e.href)),
          d)
        ) {
          f = H(d);
          d = f[5];
          e = f[6];
          f = f[7];
          var g = '';
          d && (g += d);
          e && (g += '?' + e);
          f && (g += '#' + f);
          d = g;
          e = d.indexOf('#');
          if ((d = 0 > e ? d : d.substr(0, e))) {
            if (b.itct || b.ved) b.csn = b.csn || Dg();
            if (h) {
              var h = parseInt(h, 10);
              isFinite(h) &&
                0 < h &&
                ((d = 'ST-' + $a(d).toString(36)),
                (b = b ? pc(b) : ''),
                ng(d, b, h || 5));
            } else
              (h = 'ST-' + $a(d).toString(36)),
                (b = b ? pc(b) : ''),
                ng(h, b, 5);
          }
        }
    }
    if (c) return !1;
    if ((window.ytspf || {}).enabled) spf.navigate(a);
    else {
      var l = void 0 === l ? {} : l;
      var m = void 0 === m ? '' : m;
      var v = void 0 === v ? window : v;
      c = v.location;
      a = qc(a, l) + m;
      a = a instanceof F ? a : Nb(a);
      c.href = Lb(a);
    }
    return !0;
  }
  function Gg(a, b, c) {
    T('attach_child_on_gel_web')
      ? Hg(a, b, [c])
      : Ig({
          attachChild: {
            csn: a,
            parentVisualElement: xg(b),
            visualElements: [xg(c)],
          },
        });
  }
  function Hg(a, b, c) {
    T('attach_child_on_gel_web')
      ? ((a = {
          csn: a,
          parentVe: xg(b),
          childVes: Ka(c, function (a) {
            return xg(a);
          }),
        }),
        jg('visualElementAttached', a))
      : ((a = {
          csn: a,
          parentVisualElement: xg(b),
          visualElements: Ka(c, function (a) {
            return xg(a);
          }),
        }),
        Ig({ attachChild: a }));
  }
  function Ig(a) {
    var b = kg;
    a.eventTimeMs = Math.round(N());
    a.lactMs = Sf();
    cg({ endpoint: 'log_interaction', payload: a }, b);
  }
  function Jg(a) {
    a = a || {};
    this.url = a.url || '';
    this.args = a.args || kb(Kg);
    this.assets = a.assets || {};
    this.attrs = a.attrs || kb(Lg);
    this.fallback = a.fallback || null;
    this.fallbackMessage = a.fallbackMessage || null;
    this.html5 = !!a.html5;
    this.disable = a.disable || {};
    this.loaded = !!a.loaded;
    this.messages = a.messages || {};
  }
  var Kg = { enablejsapi: 1 },
    Lg = {};
  Jg.prototype.clone = function () {
    var a = new Jg(),
      b;
    for (b in this)
      if (this.hasOwnProperty(b)) {
        var c = this[b];
        a[b] = 'object' == wa(c) ? kb(c) : c;
      }
    return a;
  };
  function Mg() {
    J.call(this);
    this.b = [];
  }
  n(Mg, J);
  Mg.prototype.l = function () {
    for (; this.b.length; ) {
      var a = this.b.pop();
      a.target.removeEventListener(a.name, a.ib);
    }
    J.prototype.l.call(this);
  };
  var Ng = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;
  function Og(a) {
    a = a || '';
    if (window.spf) {
      var b = a.match(Ng);
      spf.style.load(a, b ? b[1] : '', void 0);
    } else Pg(a);
  }
  function Pg(a) {
    var b = Qg(a),
      c = document.getElementById(b),
      d = c && Re(c, 'loaded');
    d ||
      (c && !d) ||
      (c = Rg(a, b, function () {
        Re(c, 'loaded') || (Pe(c), $e(b), S(Ea(af, b), 0));
      }));
  }
  function Rg(a, b, c) {
    var d = document.createElement('link');
    d.id = b;
    d.onload = function () {
      c && setTimeout(c, 0);
    };
    a = bc(a);
    d.rel = 'stylesheet';
    d.href = Jb(a);
    (document.getElementsByTagName('head')[0] || document.body).appendChild(d);
    return d;
  }
  function Qg(a) {
    var b = document.createElement('A');
    a = Ob(a);
    Sb(b, a);
    b = b.href.replace(/^[a-zA-Z]+:\/\//, '//');
    return 'css-' + $a(b);
  }
  var Sg = w('ytLoggingLatencyUsageStats_') || {};
  u('ytLoggingLatencyUsageStats_', Sg, void 0);
  var Tg = 0;
  function Ug(a) {
    Sg[a] = Sg[a] || { count: 0 };
    var b = Sg[a];
    b.count++;
    b.time = N();
    Tg || (Tg = of(Vg, 0, 5e3));
    return 10 < b.count
      ? (11 == b.count &&
          Me(
            Error('CSI data exceeded logging limit with key: ' + a),
            0 == a.indexOf('info') ? 'WARNING' : 'ERROR'
          ),
        !0)
      : !1;
  }
  function Vg() {
    var a = N(),
      b;
    for (b in Sg) 6e4 < a - Sg[b].time && delete Sg[b];
    Tg = 0;
  }
  function Wg(a, b) {
    this.version = a;
    this.args = b;
  }
  function Xg(a) {
    this.topic = a;
  }
  Xg.prototype.toString = function () {
    return this.topic;
  };
  var Yg = w('ytPubsub2Pubsub2Instance') || new L();
  L.prototype.subscribe = L.prototype.subscribe;
  L.prototype.unsubscribeByKey = L.prototype.L;
  L.prototype.publish = L.prototype.K;
  L.prototype.clear = L.prototype.clear;
  u('ytPubsub2Pubsub2Instance', Yg, void 0);
  u(
    'ytPubsub2Pubsub2SubscribedKeys',
    w('ytPubsub2Pubsub2SubscribedKeys') || {},
    void 0
  );
  u(
    'ytPubsub2Pubsub2TopicToKeys',
    w('ytPubsub2Pubsub2TopicToKeys') || {},
    void 0
  );
  u('ytPubsub2Pubsub2IsAsync', w('ytPubsub2Pubsub2IsAsync') || {}, void 0);
  u('ytPubsub2Pubsub2SkipSubKey', null, void 0);
  function Zg(a, b) {
    var c = w('ytPubsub2Pubsub2Instance');
    c && c.publish.call(c, a.toString(), a, b);
  }
  var W =
    window.performance ||
    window.mozPerformance ||
    window.msPerformance ||
    window.webkitPerformance ||
    {};
  function $g() {
    var a = P('TIMING_TICK_EXPIRATION');
    a || ((a = {}), O('TIMING_TICK_EXPIRATION', a));
    return a;
  }
  function ah() {
    var a = $g(),
      b;
    for (b in a) qf(a[b]);
    O('TIMING_TICK_EXPIRATION', {});
  }
  function bh(a, b) {
    Wg.call(this, 1, arguments);
  }
  n(bh, Wg);
  function ch(a, b) {
    Wg.call(this, 1, arguments);
  }
  n(ch, Wg);
  var dh = new Xg('aft-recorded'),
    eh = new Xg('timing-sent');
  var fh = { vc: !0 },
    X = {},
    gh =
      ((X.ad_allowed = 'adTypesAllowed'),
      (X.yt_abt = 'adBreakType'),
      (X.ad_cpn = 'adClientPlaybackNonce'),
      (X.ad_docid = 'adVideoId'),
      (X.yt_ad_an = 'adNetworks'),
      (X.ad_at = 'adType'),
      (X.p = 'httpProtocol'),
      (X.t = 'transportProtocol'),
      (X.cpn = 'clientPlaybackNonce'),
      (X.csn = 'clientScreenNonce'),
      (X.docid = 'videoId'),
      (X.is_nav = 'isNavigation'),
      (X.yt_lt = 'loadType'),
      (X.yt_ad = 'isMonetized'),
      (X.nr = 'webInfo.navigationReason'),
      (X.ncnp = 'webInfo.nonPreloadedNodeCount'),
      (X.paused = 'playerInfo.isPausedOnLoad'),
      (X.fmt = 'playerInfo.itag'),
      (X.yt_pl = 'watchInfo.isPlaylist'),
      (X.yt_ad_pr = 'prerollAllowed'),
      (X.yt_red = 'isRedSubscriber'),
      (X.st = 'serverTimeMs'),
      (X.vph = 'viewportHeight'),
      (X.vpw = 'viewportWidth'),
      (X.yt_vis = 'isVisible'),
      X),
    hh =
      'ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts'.split(
        ' '
      ),
    ih =
      'isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist'.split(
        ' '
      ),
    jh = !1;
  function kh() {
    var a = (lh().info.yt_lt = 'hot_bg');
    mh().info_yt_lt = a;
    if (nh())
      if ('yt_lt' in gh) {
        var b = gh.yt_lt;
        0 <= Ha(ih, b) && (a = !!a);
        var c = a;
        if (nh()) {
          a = {};
          b = b.split('.');
          for (var d = a, e = 0; e < b.length - 1; e++)
            (d[b[e]] = d[b[e]] || {}), (d = d[b[e]]);
          d[b[b.length - 1]] = c;
          c = oh();
          b = Object.keys(a).join('');
          Ug('info_' + b + '_' + c) ||
            ((a.clientActionNonce = c),
            jg('latencyActionInfo', a, void 0, void 0));
        }
      } else
        0 <= Ha(hh, 'yt_lt') ||
          R(Error('Unknown label yt_lt logged with GEL CSI.'));
  }
  function ph() {
    var a = qh();
    if (a.aft) return a.aft;
    for (
      var b = P('TIMING_AFT_KEYS', ['ol']), c = b.length, d = 0;
      d < c;
      d++
    ) {
      var e = a[b[d]];
      if (e) return e;
    }
    return NaN;
  }
  var rh = y(
    W.clearResourceTimings ||
      W.webkitClearResourceTimings ||
      W.mozClearResourceTimings ||
      W.msClearResourceTimings ||
      W.oClearResourceTimings ||
      ua,
    W
  );
  function oh() {
    var a = lh().nonce;
    a || ((a = ug()), (lh().nonce = a));
    return a;
  }
  function qh() {
    return lh().tick;
  }
  function mh() {
    var a = lh();
    'gel' in a || (a.gel = {});
    return a.gel;
  }
  function lh() {
    return w('ytcsi.data_') || sh();
  }
  function sh() {
    var a = { tick: {}, info: {} };
    u('ytcsi.data_', a, void 0);
    return a;
  }
  function th(a, b) {
    u('yt.timing.' + (b || '') + 'pingSent_', a, void 0);
  }
  function uh() {
    var a = qh(),
      b = a.pbr,
      c = a.vc;
    a = a.pbs;
    return b && c && a && b < c && c < a && 1 == lh().info.yt_pvis;
  }
  function nh() {
    return !!T('csi_on_gel') || !!lh().useGel;
  }
  function vh() {
    ah();
    if (!nh()) {
      var a = qh(),
        b = lh().info,
        c = a._start;
      for (f in a)
        if (0 == f.lastIndexOf('_', 0) && xa(a[f])) {
          var d = f.slice(1);
          if (d in fh) {
            var e = Ka(a[f], function (a) {
              return Math.round(a - c);
            });
            b['all_' + d] = e.join();
          }
          delete a[f];
        }
      var f = !!b.ap;
      if ((d = w('ytglobal.timingReportbuilder_'))) {
        if ((a = d(a, b, void 0)))
          wh(a, f),
            sh(),
            rh(),
            th(!1, void 0),
            P('TIMING_ACTION') && O('PREVIOUS_ACTION', P('TIMING_ACTION')),
            O('TIMING_ACTION', '');
      } else {
        var g = P('CSI_SERVICE_NAME', 'youtube');
        d = { v: 2, s: g, action: P('TIMING_ACTION', void 0) };
        e = kh.srt;
        void 0 !== a.srt && delete b.srt;
        if (b.h5jse) {
          var h = window.location.protocol + w('ytplayer.config.assets.js');
          (h = W.getEntriesByName ? W.getEntriesByName(h)[0] : null)
            ? (b.h5jse = Math.round(b.h5jse - h.responseEnd))
            : delete b.h5jse;
        }
        a.aft = ph();
        uh() &&
          'youtube' == g &&
          (kh(),
          (g = a.vc),
          (h = a.pbs),
          delete a.aft,
          (b.aft = Math.round(h - g)));
        for (var l in b) '_' != l.charAt(0) && (d[l] = b[l]);
        a.ps = N();
        b = {};
        l = [];
        for (var m in a)
          '_' != m.charAt(0) &&
            ((g = Math.round(a[m] - c)), (b[m] = g), l.push(m + '.' + g));
        d.rt = l.join(',');
        (a = w('ytdebug.logTiming')) && a(d, b);
        wh(d, f, void 0);
        Zg(eh, new ch(b.aft + (e || 0), void 0));
      }
    }
  }
  function wh(a, b, c) {
    if (T('debug_csi_data')) {
      var d = w('yt.timing.csiData');
      d || ((d = []), u('yt.timing.csiData', d, void 0));
      d.push({ page: location.href, time: new Date(), args: a });
    }
    d = '';
    for (var e in a) d += '&' + e + '=' + a[e];
    a = '/csi_204?' + d.substring(1);
    if (window.navigator && window.navigator.sendBeacon && b) {
      var f = void 0 === f ? '' : f;
      try {
        (window.navigator &&
          window.navigator.sendBeacon &&
          window.navigator.sendBeacon(a, f)) ||
          Ie(a, void 0, void 0, void 0, f);
      } catch (g) {
        Ie(a, void 0, void 0, void 0, f);
      }
    } else Ie(a);
    th(!0, c);
  }
  function xh(a) {
    if ('_' != a[0]) {
      var b = a;
      W.mark &&
        (0 == b.lastIndexOf('mark_', 0) || (b = 'mark_' + b), W.mark(b));
    }
    b = qh();
    var c = N();
    b[a] && ((b['_' + a] = b['_' + a] || [b[a]]), b['_' + a].push(c));
    b[a] = c;
    b = $g();
    if ((c = b[a])) qf(c), (b[a] = 0);
    mh()['tick_' + a] = void 0;
    N();
    nh()
      ? ((b = oh()),
        '_start' == a
          ? Ug('baseline_' + b) ||
            jg(
              'latencyActionBaselined',
              { clientActionNonce: b },
              void 0,
              void 0
            )
          : Ug('tick_' + a + '_' + b) ||
            jg(
              'latencyActionTicked',
              { tickName: a, clientActionNonce: b },
              void 0,
              void 0
            ),
        (a = !0))
      : (a = !1);
    if ((a = !a)) a = !w('yt.timing.pingSent_');
    if (
      a &&
      ((b = Q('TIMING_ACTION')),
      (a = qh()),
      w('ytglobal.timingready_') && b && a._start && (b = ph()))
    ) {
      jh || (Zg(dh, new bh(Math.round(b - a._start), void 0)), (jh = !0));
      b = !0;
      c = P('TIMING_WAIT', []);
      if (c.length)
        for (var d = 0, e = c.length; d < e; ++d)
          if (!(c[d] in a)) {
            b = !1;
            break;
          }
      b && vh();
    }
  }
  function yh(a, b) {
    J.call(this);
    this.j = this.T = a;
    this.D = b;
    this.m = !1;
    this.api = {};
    this.P = this.B = null;
    this.G = new L();
    ad(this, Ea(bd, this.G));
    this.h = {};
    this.N = this.R = this.g = this.Y = this.b = null;
    this.H = !1;
    this.i = this.w = null;
    this.U = {};
    this.oa = ['onReady'];
    this.X = null;
    this.ga = NaN;
    this.O = {};
    zh(this);
    this.V('WATCH_LATER_VIDEO_ADDED', this.Fa.bind(this));
    this.V('WATCH_LATER_VIDEO_REMOVED', this.Ga.bind(this));
    this.V('onAdAnnounce', this.ra.bind(this));
    this.pa = new Mg(this);
    ad(this, Ea(bd, this.pa));
  }
  n(yh, J);
  k = yh.prototype;
  k.ea = function (a) {
    if (!this.f) {
      a instanceof Jg || (a = new Jg(a));
      this.Y = a;
      this.b = a.clone();
      this.g = this.b.attrs.id || this.g;
      'video-player' == this.g &&
        ((this.g = this.D), (this.b.attrs.id = this.D));
      this.j.id == this.g &&
        ((this.g += '-player'), (this.b.attrs.id = this.g));
      this.b.args.enablejsapi = '1';
      this.b.args.playerapiid = this.D;
      this.R ||
        (this.R = Ah(
          this,
          this.b.args.jsapicallback || 'onYouTubePlayerReady'
        ));
      this.b.args.jsapicallback = null;
      if ((a = this.b.attrs.width)) this.j.style.width = kc(Number(a) || a);
      if ((a = this.b.attrs.height)) this.j.style.height = kc(Number(a) || a);
      Bh(this);
      this.m && Ch(this);
    }
  };
  k.ua = function () {
    return this.Y;
  };
  function Ch(a) {
    a.b.loaded ||
      ((a.b.loaded = !0),
      '0' != a.b.args.autoplay
        ? a.api.loadVideoByPlayerVars(a.b.args)
        : a.api.cueVideoByPlayerVars(a.b.args));
  }
  function Dh(a) {
    var b = !0,
      c = Eh(a);
    c && a.b && ((a = a.b), (b = Re(c, 'version') == a.assets.js));
    return b && !!w('yt.player.Application.create');
  }
  function Bh(a) {
    if (!a.f && !a.H) {
      var b = Dh(a);
      if (b && 'html5' == (Eh(a) ? 'html5' : null))
        (a.N = 'html5'), a.m || Fh(a);
      else if ((Gh(a), (a.N = 'html5'), b && a.i)) a.T.appendChild(a.i), Fh(a);
      else {
        a.b.loaded = !0;
        var c = !1;
        a.w = function () {
          c = !0;
          var b = a.b.clone();
          w('yt.player.Application.create')(a.T, b);
          Fh(a);
        };
        a.H = !0;
        b
          ? a.w()
          : (ef(a.b.assets.js, a.w),
            Og(a.b.assets.css),
            Hh(a) && !c && u('yt.player.Application.create', null, void 0));
      }
    }
  }
  function Eh(a) {
    var b = Wb(a.g);
    !b && a.j && a.j.querySelector && (b = a.j.querySelector('#' + a.g));
    return b;
  }
  function Fh(a) {
    if (!a.f) {
      var b = Eh(a),
        c = !1;
      b && b.getApiInterface && b.getApiInterface() && (c = !0);
      c
        ? ((a.H = !1),
          (b.isNotServable && b.isNotServable(a.b.args.video_id)) || Ih(a))
        : (a.ga = S(function () {
            Fh(a);
          }, 50));
    }
  }
  function Ih(a) {
    zh(a);
    a.m = !0;
    var b = Eh(a);
    b.addEventListener && (a.B = Jh(a, b, 'addEventListener'));
    b.removeEventListener && (a.P = Jh(a, b, 'removeEventListener'));
    var c = b.getApiInterface();
    c = c.concat(b.getInternalApiInterface());
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      a.api[e] || (a.api[e] = Jh(a, b, e));
    }
    for (var f in a.h) a.B(f, a.h[f]);
    Ch(a);
    a.R && a.R(a.api);
    a.G.K('onReady', a.api);
  }
  function Jh(a, b, c) {
    var d = b[c];
    return function () {
      try {
        return (a.X = null), d.apply(b, arguments);
      } catch (e) {
        'sendAbandonmentPing' != c &&
          ((e.message += ' (' + c + ')'), (a.X = e), me(e));
      }
    };
  }
  function zh(a) {
    a.m = !1;
    if (a.P) for (var b in a.h) a.P(b, a.h[b]);
    for (var c in a.O) qe(parseInt(c, 10));
    a.O = {};
    a.B = null;
    a.P = null;
    for (var d in a.api) a.api[d] = null;
    a.api.addEventListener = a.V.bind(a);
    a.api.removeEventListener = a.Ka.bind(a);
    a.api.destroy = a.dispose.bind(a);
    a.api.getLastError = a.va.bind(a);
    a.api.getPlayerType = a.wa.bind(a);
    a.api.getCurrentVideoConfig = a.ua.bind(a);
    a.api.loadNewVideoConfig = a.ea.bind(a);
    a.api.isReady = a.Ea.bind(a);
  }
  k.Ea = function () {
    return this.m;
  };
  k.V = function (a, b) {
    var c = this,
      d = Ah(this, b);
    if (d) {
      if (!(0 <= Ha(this.oa, a) || this.h[a])) {
        var e = Kh(this, a);
        this.B && this.B(a, e);
      }
      this.G.subscribe(a, d);
      'onReady' == a &&
        this.m &&
        S(function () {
          d(c.api);
        }, 0);
    }
  };
  k.Ka = function (a, b) {
    if (!this.f) {
      var c = Ah(this, b);
      c && Od(this.G, a, c);
    }
  };
  function Ah(a, b) {
    var c = b;
    if ('string' == typeof b) {
      if (a.U[b]) return a.U[b];
      c = function () {
        var a = w(b);
        a && a.apply(q, arguments);
      };
      a.U[b] = c;
    }
    return c ? c : null;
  }
  function Kh(a, b) {
    var c = 'ytPlayer' + b + a.D;
    a.h[b] = c;
    q[c] = function (c) {
      var d = S(function () {
        if (!a.f) {
          a.G.K(b, c);
          var e = a.O,
            g = String(d);
          g in e && delete e[g];
        }
      }, 0);
      ib(a.O, String(d));
    };
    return c;
  }
  k.ra = function (a) {
    $e('a11y-announce', a);
  };
  k.Fa = function (a) {
    $e('WATCH_LATER_VIDEO_ADDED', a);
  };
  k.Ga = function (a) {
    $e('WATCH_LATER_VIDEO_REMOVED', a);
  };
  k.wa = function () {
    return this.N || (Eh(this) ? 'html5' : null);
  };
  k.va = function () {
    return this.X;
  };
  function Gh(a) {
    xh('dcp');
    a.cancel();
    zh(a);
    a.N = null;
    a.b && (a.b.loaded = !1);
    var b = Eh(a);
    b &&
      (Dh(a) || !Hh(a)
        ? (a.i = b)
        : (b && b.destroy && b.destroy(), (a.i = null)));
    for (a = a.T; (b = a.firstChild); ) a.removeChild(b);
  }
  k.cancel = function () {
    this.w && lf(this.b.assets.js, this.w);
    qe(this.ga);
    this.H = !1;
  };
  k.l = function () {
    Gh(this);
    if (this.i && this.b && this.i.destroy)
      try {
        this.i.destroy();
      } catch (b) {
        R(b);
      }
    this.U = null;
    for (var a in this.h) q[this.h[a]] = null;
    this.Y = this.b = this.api = null;
    delete this.T;
    delete this.j;
    J.prototype.l.call(this);
  };
  function Hh(a) {
    return a.b && a.b.args && a.b.args.fflags
      ? -1 != a.b.args.fflags.indexOf('player_destroy_old_version=true')
      : !1;
  }
  var Lh = {},
    Mh = 'player_uid_' + ((1e9 * Math.random()) >>> 0);
  function Nh(a) {
    var b = 'player';
    b = t(b) ? Wb(b) : b;
    var c = Mh + '_' + (b[Aa] || (b[Aa] = ++Ba)),
      d = Lh[c];
    if (d) return d.ea(a), d.api;
    d = new yh(b, c);
    Lh[c] = d;
    $e('player-added', d.api);
    ad(d, Ea(Oh, d));
    S(function () {
      d.ea(a);
    }, 0);
    return d.api;
  }
  function Oh(a) {
    delete Lh[a.D];
  }
  function Ph() {
    var a = Qh(),
      b = Rh();
    if ((!a && !b) || !window.JSON) return null;
    try {
      var c = a.get('yt-player-two-stage-token');
    } catch (d) {}
    if (!t(c))
      try {
        c = b.get('yt-player-two-stage-token');
      } catch (d) {}
    if (!t(c)) return null;
    try {
      c = JSON.parse(c, void 0);
    } catch (d) {}
    return c;
  }
  var Rh = Fb(function () {
      var a = new Yd();
      return a.isAvailable() ? new Ud(a) : null;
    }),
    Qh = Fb(function () {
      var a = new Zd();
      return a.isAvailable() ? new Ud(a) : null;
    });
  function Sh(a) {
    return (0 == a.search('cue') || 0 == a.search('load')) && 'loadModule' != a;
  }
  function Th(a, b, c) {
    t(a) && (a = { mediaContentUrl: a, startSeconds: b, suggestedQuality: c });
    b = /\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);
    a.videoId = b && b[2] ? b[2] : null;
    return Uh(a);
  }
  function Uh(a, b, c) {
    if (x(a)) {
      b =
        'endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token'.split(
          ' '
        );
      c = {};
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        a[e] && (c[e] = a[e]);
      }
      return c;
    }
    return { videoId: a, startSeconds: b, suggestedQuality: c };
  }
  function Vh(a, b, c, d) {
    if (x(a) && !xa(a)) {
      b = 'playlist list listType index startSeconds suggestedQuality'.split(
        ' '
      );
      c = {};
      for (d = 0; d < b.length; d++) {
        var e = b[d];
        a[e] && (c[e] = a[e]);
      }
      return c;
    }
    b = { index: b, startSeconds: c, suggestedQuality: d };
    t(a) && 16 == a.length ? (b.list = 'PL' + a) : (b.playlist = a);
    return b;
  }
  function Wh(a) {
    var b = a.video_id || a.videoId;
    if (t(b)) {
      var c = Ph() || {},
        d = Ph() || {};
      r(void 0) ? (d[b] = void 0) : delete d[b];
      var e = z() + 3e5,
        f = Rh();
      if (f && window.JSON) {
        t(d) || (d = JSON.stringify(d, void 0));
        try {
          f.set('yt-player-two-stage-token', d, e);
        } catch (g) {
          f.remove('yt-player-two-stage-token');
        }
      }
      (b = c[b]) && (a.two_stage_token = b);
    }
  }
  function Xh(a) {
    J.call(this);
    this.b = a;
    this.b.subscribe('command', this.la, this);
    this.g = {};
    this.i = !1;
  }
  A(Xh, J);
  k = Xh.prototype;
  k.start = function () {
    this.i || this.f || ((this.i = !0), Yh(this.b, 'RECEIVING'));
  };
  k.la = function (a, b, c) {
    if (this.i && !this.f) {
      var d = b || {};
      switch (a) {
        case 'addEventListener':
          t(d.event) &&
            ((a = d.event),
            a in this.g ||
              ((c = y(this.Ma, this, a)),
              (this.g[a] = c),
              this.addEventListener(a, c)));
          break;
        case 'removeEventListener':
          t(d.event) && Zh(this, d.event);
          break;
        default:
          this.h.isReady() &&
            this.h[a] &&
            ((b = $h(a, b || {})),
            (c = this.h.handleExternalCall(a, b, c || null)),
            (c = ai(a, c)) && this.i && !this.f && Yh(this.b, a, c));
      }
    }
  };
  k.Ma = function (a, b) {
    this.i && !this.f && Yh(this.b, a, this.aa(a, b));
  };
  k.aa = function (a, b) {
    if (null != b) return { value: b };
  };
  function Zh(a, b) {
    b in a.g && (a.removeEventListener(b, a.g[b]), delete a.g[b]);
  }
  k.l = function () {
    var a = this.b;
    a.f || Od(a.b, 'command', this.la, this);
    this.b = null;
    for (var b in this.g) Zh(this, b);
    Xh.A.l.call(this);
  };
  function bi(a, b) {
    Xh.call(this, b);
    this.h = a;
    this.start();
  }
  A(bi, Xh);
  bi.prototype.addEventListener = function (a, b) {
    this.h.addEventListener(a, b);
  };
  bi.prototype.removeEventListener = function (a, b) {
    this.h.removeEventListener(a, b);
  };
  function $h(a, b) {
    switch (a) {
      case 'loadVideoById':
        return (b = Uh(b)), Wh(b), [b];
      case 'cueVideoById':
        return (b = Uh(b)), Wh(b), [b];
      case 'loadVideoByPlayerVars':
        return Wh(b), [b];
      case 'cueVideoByPlayerVars':
        return Wh(b), [b];
      case 'loadPlaylist':
        return (b = Vh(b)), Wh(b), [b];
      case 'cuePlaylist':
        return (b = Vh(b)), Wh(b), [b];
      case 'seekTo':
        return [b.seconds, b.allowSeekAhead];
      case 'playVideoAt':
        return [b.index];
      case 'setVolume':
        return [b.volume];
      case 'setPlaybackQuality':
        return [b.suggestedQuality];
      case 'setPlaybackRate':
        return [b.suggestedRate];
      case 'setLoop':
        return [b.loopPlaylists];
      case 'setShuffle':
        return [b.shufflePlaylist];
      case 'getOptions':
        return [b.module];
      case 'getOption':
        return [b.module, b.option];
      case 'setOption':
        return [b.module, b.option, b.value];
      case 'handleGlobalKeyDown':
        return [b.keyCode, b.shiftKey];
    }
    return [];
  }
  function ai(a, b) {
    switch (a) {
      case 'isMuted':
        return { muted: b };
      case 'getVolume':
        return { volume: b };
      case 'getPlaybackRate':
        return { playbackRate: b };
      case 'getAvailablePlaybackRates':
        return { availablePlaybackRates: b };
      case 'getVideoLoadedFraction':
        return { videoLoadedFraction: b };
      case 'getPlayerState':
        return { playerState: b };
      case 'getCurrentTime':
        return { currentTime: b };
      case 'getPlaybackQuality':
        return { playbackQuality: b };
      case 'getAvailableQualityLevels':
        return { availableQualityLevels: b };
      case 'getDuration':
        return { duration: b };
      case 'getVideoUrl':
        return { videoUrl: b };
      case 'getVideoEmbedCode':
        return { videoEmbedCode: b };
      case 'getPlaylist':
        return { playlist: b };
      case 'getPlaylistIndex':
        return { playlistIndex: b };
      case 'getOptions':
        return { options: b };
      case 'getOption':
        return { option: b };
    }
  }
  bi.prototype.aa = function (a, b) {
    switch (a) {
      case 'onReady':
        return;
      case 'onStateChange':
        return { playerState: b };
      case 'onPlaybackQualityChange':
        return { playbackQuality: b };
      case 'onPlaybackRateChange':
        return { playbackRate: b };
      case 'onError':
        return { errorCode: b };
    }
    return bi.A.aa.call(this, a, b);
  };
  bi.prototype.l = function () {
    bi.A.l.call(this);
    delete this.h;
  };
  function ci(a, b, c, d) {
    J.call(this);
    this.g = b || null;
    this.w = '*';
    this.h = c || null;
    this.sessionId = null;
    this.channel = d || null;
    this.D = !!a;
    this.m = y(this.B, this);
    window.addEventListener('message', this.m);
  }
  n(ci, J);
  ci.prototype.B = function (a) {
    if (
      !(
        ('*' != this.h && a.origin != this.h) ||
        (this.g && a.source != this.g)
      ) &&
      t(a.data)
    ) {
      try {
        var b = JSON.parse(a.data);
      } catch (c) {
        return;
      }
      if (
        !(
          null == b ||
          (this.D &&
            ((this.sessionId && this.sessionId != b.id) ||
              (this.channel && this.channel != b.channel)))
        ) &&
        b
      )
        switch (b.event) {
          case 'listening':
            'null' != a.origin && (this.h = this.w = a.origin);
            this.g = a.source;
            this.sessionId = b.id;
            this.b && (this.b(), (this.b = null));
            break;
          case 'command':
            this.i &&
              (!this.j || 0 <= Ha(this.j, b.func)) &&
              this.i(b.func, b.args, a.origin);
        }
    }
  };
  ci.prototype.sendMessage = function (a, b) {
    var c = b || this.g;
    if (c) {
      this.sessionId && (a.id = this.sessionId);
      this.channel && (a.channel = this.channel);
      try {
        var d = pd(a);
        c.postMessage(d, this.w);
      } catch (e) {
        R(e, 'WARNING');
      }
    }
  };
  ci.prototype.l = function () {
    window.removeEventListener('message', this.m);
    J.prototype.l.call(this);
  };
  function di(a, b, c) {
    ci.call(
      this,
      a,
      b,
      c ||
        P('POST_MESSAGE_ORIGIN', void 0) ||
        window.document.location.protocol +
          '//' +
          window.document.location.hostname,
      'widget'
    );
    this.j = this.b = this.i = null;
  }
  n(di, ci);
  function ei() {
    var a = (this.f = new di(!!P('WIDGET_ID_ENFORCE'))),
      b = y(this.Ja, this);
    a.i = b;
    a.j = null;
    this.f.channel = 'widget';
    if ((a = P('WIDGET_ID'))) this.f.sessionId = a;
    this.h = [];
    this.j = !1;
    this.i = {};
  }
  k = ei.prototype;
  k.Ja = function (a, b, c) {
    'addEventListener' == a && b
      ? ((a = b[0]),
        this.i[a] ||
          'onReady' == a ||
          (this.addEventListener(a, fi(this, a)), (this.i[a] = !0)))
      : this.na(a, b, c);
  };
  k.na = function () {};
  function fi(a, b) {
    return y(function (a) {
      this.sendMessage(b, a);
    }, a);
  }
  k.addEventListener = function () {};
  k.ta = function () {
    this.j = !0;
    this.sendMessage('initialDelivery', this.ba());
    this.sendMessage('onReady');
    D(this.h, this.ma, this);
    this.h = [];
  };
  k.ba = function () {
    return null;
  };
  function gi(a, b) {
    a.sendMessage('infoDelivery', b);
  }
  k.ma = function (a) {
    this.j ? this.f.sendMessage(a) : this.h.push(a);
  };
  k.sendMessage = function (a, b) {
    this.ma({ event: a, info: void 0 == b ? null : b });
  };
  k.dispose = function () {
    this.f = null;
  };
  function hi(a) {
    ei.call(this);
    this.b = a;
    this.g = [];
    this.addEventListener('onReady', y(this.Ha, this));
    this.addEventListener('onVideoProgress', y(this.Qa, this));
    this.addEventListener('onVolumeChange', y(this.Ra, this));
    this.addEventListener('onApiChange', y(this.La, this));
    this.addEventListener('onPlaybackQualityChange', y(this.Na, this));
    this.addEventListener('onPlaybackRateChange', y(this.Oa, this));
    this.addEventListener('onStateChange', y(this.Pa, this));
    this.addEventListener('onWebglSettingsChanged', y(this.Sa, this));
  }
  A(hi, ei);
  k = hi.prototype;
  k.na = function (a, b, c) {
    if (this.b[a]) {
      b = b || [];
      if (0 < b.length && Sh(a)) {
        var d = b;
        if (x(d[0]) && !xa(d[0])) d = d[0];
        else {
          var e = {};
          switch (a) {
            case 'loadVideoById':
            case 'cueVideoById':
              e = Uh.apply(window, d);
              break;
            case 'loadVideoByUrl':
            case 'cueVideoByUrl':
              e = Th.apply(window, d);
              break;
            case 'loadPlaylist':
            case 'cuePlaylist':
              e = Vh.apply(window, d);
          }
          d = e;
        }
        Wh(d);
        b.length = 1;
        b[0] = d;
      }
      this.b.handleExternalCall(a, b, c);
      Sh(a) && gi(this, this.ba());
    }
  };
  k.Ha = function () {
    var a = y(this.ta, this);
    this.f.b = a;
  };
  k.addEventListener = function (a, b) {
    this.g.push({ eventType: a, listener: b });
    this.b.addEventListener(a, b);
  };
  k.ba = function () {
    if (!this.b) return null;
    var a = this.b.getApiInterface();
    Na(a, 'getVideoData');
    for (var b = { apiInterface: a }, c = 0, d = a.length; c < d; c++) {
      var e = a[c],
        f = e;
      if (0 == f.search('get') || 0 == f.search('is')) {
        f = e;
        var g = 0;
        0 == f.search('get') ? (g = 3) : 0 == f.search('is') && (g = 2);
        f = f.charAt(g).toLowerCase() + f.substr(g + 1);
        try {
          var h = this.b[e]();
          b[f] = h;
        } catch (l) {}
      }
    }
    b.videoData = this.b.getVideoData();
    b.currentTimeLastUpdated_ = z() / 1e3;
    return b;
  };
  k.Pa = function (a) {
    a = {
      playerState: a,
      currentTime: this.b.getCurrentTime(),
      duration: this.b.getDuration(),
      videoData: this.b.getVideoData(),
      videoStartBytes: 0,
      videoBytesTotal: this.b.getVideoBytesTotal(),
      videoLoadedFraction: this.b.getVideoLoadedFraction(),
      playbackQuality: this.b.getPlaybackQuality(),
      availableQualityLevels: this.b.getAvailableQualityLevels(),
      videoUrl: this.b.getVideoUrl(),
      playlist: this.b.getPlaylist(),
      playlistIndex: this.b.getPlaylistIndex(),
      currentTimeLastUpdated_: z() / 1e3,
      playbackRate: this.b.getPlaybackRate(),
      mediaReferenceTime: this.b.getMediaReferenceTime(),
    };
    this.b.getVideoContentRect &&
      (a.videoContentRect = this.b.getVideoContentRect());
    this.b.getProgressState && (a.progressState = this.b.getProgressState());
    this.b.getStoryboardFormat &&
      (a.storyboardFormat = this.b.getStoryboardFormat());
    gi(this, a);
  };
  k.Na = function (a) {
    gi(this, { playbackQuality: a });
  };
  k.Oa = function (a) {
    gi(this, { playbackRate: a });
  };
  k.La = function () {
    for (
      var a = this.b.getOptions(), b = { namespaces: a }, c = 0, d = a.length;
      c < d;
      c++
    ) {
      var e = a[c],
        f = this.b.getOptions(e);
      b[e] = { options: f };
      for (var g = 0, h = f.length; g < h; g++) {
        var l = f[g],
          m = this.b.getOption(e, l);
        b[e][l] = m;
      }
    }
    this.sendMessage('apiInfoDelivery', b);
  };
  k.Ra = function () {
    gi(this, { muted: this.b.isMuted(), volume: this.b.getVolume() });
  };
  k.Qa = function (a) {
    a = {
      currentTime: a,
      videoBytesLoaded: this.b.getVideoBytesLoaded(),
      videoLoadedFraction: this.b.getVideoLoadedFraction(),
      currentTimeLastUpdated_: z() / 1e3,
      playbackRate: this.b.getPlaybackRate(),
      mediaReferenceTime: this.b.getMediaReferenceTime(),
    };
    this.b.getProgressState && (a.progressState = this.b.getProgressState());
    gi(this, a);
  };
  k.Sa = function () {
    var a = { sphericalProperties: this.b.getSphericalProperties() };
    gi(this, a);
  };
  k.dispose = function () {
    hi.A.dispose.call(this);
    for (var a = 0; a < this.g.length; a++) {
      var b = this.g[a];
      this.b.removeEventListener(b.eventType, b.listener);
    }
    this.g = [];
  };
  function ii(a) {
    a = void 0 === a ? !1 : a;
    J.call(this);
    this.b = new L(a);
    ad(this, Ea(bd, this.b));
  }
  A(ii, J);
  ii.prototype.subscribe = function (a, b, c) {
    return this.f ? 0 : this.b.subscribe(a, b, c);
  };
  ii.prototype.i = function (a, b) {
    this.f || this.b.K.apply(this.b, arguments);
  };
  function ji(a, b, c) {
    ii.call(this);
    this.g = a;
    this.h = b;
    this.j = c;
  }
  A(ji, ii);
  function Yh(a, b, c) {
    if (!a.f) {
      var d = a.g;
      d.f ||
        a.h != d.b ||
        ((a = { id: a.j, command: b }),
        c && (a.data = c),
        d.b.postMessage(pd(a), d.h));
    }
  }
  ji.prototype.l = function () {
    this.h = this.g = null;
    ji.A.l.call(this);
  };
  function ki(a, b, c) {
    J.call(this);
    this.b = a;
    this.h = c;
    this.i = U(window, 'message', y(this.j, this));
    this.g = new ji(this, a, b);
    ad(this, Ea(bd, this.g));
  }
  A(ki, J);
  ki.prototype.j = function (a) {
    var b;
    if ((b = !this.f))
      if ((b = a.origin == this.h))
        a: {
          b = this.b;
          do {
            b: {
              var c = a.source;
              do {
                if (c == b) {
                  c = !0;
                  break b;
                }
                if (c == c.parent) break;
                c = c.parent;
              } while (null != c);
              c = !1;
            }
            if (c) {
              b = !0;
              break a;
            }
            b = b.opener;
          } while (null != b);
          b = !1;
        }
    if (b && ((b = a.data), t(b))) {
      try {
        b = JSON.parse(b);
      } catch (d) {
        return;
      }
      b.command &&
        ((c = this.g), c.f || c.i('command', b.command, b.data, a.origin));
    }
  };
  ki.prototype.l = function () {
    Mf(this.i);
    this.b = null;
    ki.A.l.call(this);
  };
  function li() {
    var a = kb(mi),
      b;
    return Dd(
      new K(function (c, d) {
        a.onSuccess = function (a) {
          pe(a)
            ? c(a)
            : d(
                new ni('Request failed, status=' + a.status, 'net.badstatus', a)
              );
        };
        a.onError = function (a) {
          d(new ni('Unknown request error', 'net.unknown', a));
        };
        a.M = function (a) {
          d(new ni('Request timed out', 'net.timeout', a));
        };
        b = ze('//googleads.g.doubleclick.net/pagead/id', a);
      }),
      function (a) {
        a instanceof Ed && b.abort();
        return Bd(a);
      }
    );
  }
  function ni(a, b) {
    C.call(this, a + ', errorCode=' + b);
    this.errorCode = b;
    this.name = 'PromiseAjaxError';
  }
  n(ni, C);
  function oi(a) {
    this.g = void 0 === a ? null : a;
    this.f = 0;
    this.b = null;
  }
  oi.prototype.then = function (a, b, c) {
    return this.g
      ? this.g.then(a, b, c)
      : 1 === this.f && a
      ? ((a = a.call(c, this.b)), wd(a) ? a : pi(a))
      : 2 === this.f && b
      ? ((a = b.call(c, this.b)), wd(a) ? a : qi(a))
      : this;
  };
  oi.prototype.getValue = function () {
    return this.b;
  };
  vd(oi);
  function qi(a) {
    var b = new oi();
    a = void 0 === a ? null : a;
    b.f = 2;
    b.b = void 0 === a ? null : a;
    return b;
  }
  function pi(a) {
    var b = new oi();
    a = void 0 === a ? null : a;
    b.f = 1;
    b.b = void 0 === a ? null : a;
    return b;
  }
  function ri(a) {
    C.call(this, a.message || a.description || a.name);
    this.isMissing = a instanceof si;
    this.isTimeout = a instanceof ni && 'net.timeout' == a.errorCode;
    this.isCanceled = a instanceof Ed;
  }
  n(ri, C);
  ri.prototype.name = 'BiscottiError';
  function si() {
    C.call(this, 'Biscotti ID is missing from server');
  }
  n(si, C);
  si.prototype.name = 'BiscottiMissingError';
  var mi = { format: 'RAW', method: 'GET', timeout: 5e3, withCredentials: !0 },
    ti = null;
  function ui() {
    if ('1' === eb(ke(), 'args', 'privembed'))
      return Bd(Error('Biscotti ID is not available in private embed mode'));
    ti ||
      (ti = Dd(li().then(vi), function (a) {
        return wi(2, a);
      }));
    return ti;
  }
  function vi(a) {
    a = a.responseText;
    if (0 != a.lastIndexOf(")]}'", 0)) throw new si();
    a = JSON.parse(a.substr(4));
    if (1 < (a.type || 1)) throw new si();
    a = a.id;
    xi(a);
    ti = pi(a);
    yi(18e5, 2);
    return a;
  }
  function wi(a, b) {
    var c = new ri(b);
    xi('');
    ti = qi(c);
    0 < a && yi(12e4, a - 1);
    throw c;
  }
  function yi(a, b) {
    S(function () {
      Dd(
        li().then(vi, function (a) {
          return wi(b, a);
        }),
        ua
      );
    }, a);
  }
  function xi(a) {
    u('yt.ads.biscotti.lastId_', a, void 0);
  }
  function zi() {
    try {
      var a = w('yt.ads.biscotti.getId_');
      return a ? a() : ui();
    } catch (b) {
      return Bd(b);
    }
  }
  function Ai(a) {
    if ('1' !== eb(ke(), 'args', 'privembed')) {
      a && (w('yt.ads.biscotti.getId_') || Fa('yt.ads.biscotti.getId_', ui));
      try {
        zi().then(
          function (a) {
            var b = {};
            b.dt = Ec;
            b.flash = '0';
            a: {
              try {
                var d = window.top.location.href;
              } catch (Za) {
                d = 2;
                break a;
              }
              d = null != d ? (d == window.document.location.href ? 0 : 1) : 2;
            }
            b = ((b.frm = d), b);
            b.u_tz = -new Date().getTimezoneOffset();
            var e = void 0 === e ? B : e;
            try {
              var f = e.history.length;
            } catch (Za) {
              f = 0;
            }
            b.u_his = f;
            b.u_java =
              !!B.navigator &&
              'unknown' !== typeof B.navigator.javaEnabled &&
              !!B.navigator.javaEnabled &&
              B.navigator.javaEnabled();
            B.screen &&
              ((b.u_h = B.screen.height),
              (b.u_w = B.screen.width),
              (b.u_ah = B.screen.availHeight),
              (b.u_aw = B.screen.availWidth),
              (b.u_cd = B.screen.colorDepth));
            B.navigator &&
              B.navigator.plugins &&
              (b.u_nplug = B.navigator.plugins.length);
            B.navigator &&
              B.navigator.mimeTypes &&
              (b.u_nmime = B.navigator.mimeTypes.length);
            b.ca_type = 'image';
            if (
              T('enable_server_side_search_pyv') ||
              T('enable_server_side_mweb_search_pyv')
            ) {
              f = window;
              try {
                var g = f.screenX;
                var h = f.screenY;
              } catch (Za) {}
              try {
                var l = f.outerWidth;
                var m = f.outerHeight;
              } catch (Za) {}
              try {
                var v = f.innerWidth;
                var da = f.innerHeight;
              } catch (Za) {}
              g = [
                f.screenLeft,
                f.screenTop,
                g,
                h,
                f.screen ? f.screen.availWidth : void 0,
                f.screen ? f.screen.availTop : void 0,
                l,
                m,
                v,
                da,
              ];
              h = window.top;
              try {
                var G = (h || window).document,
                  Y = 'CSS1Compat' == G.compatMode ? G.documentElement : G.body;
                var Ia = new Vb(Y.clientWidth, Y.clientHeight).round();
              } catch (Za) {
                Ia = new Vb(-12245933, -12245933);
              }
              G = {};
              Y = new ge();
              q.SVGElement && q.document.createElementNS && Y.set(0);
              h = jc();
              h['allow-top-navigation-by-user-activation'] && Y.set(1);
              h['allow-popups-to-escape-sandbox'] && Y.set(2);
              Y = he(Y);
              G.bc = Y;
              G.bih = Ia.height;
              G.biw = Ia.width;
              G.brdim = g.join();
              Ia =
                ((G.vis =
                  {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5,
                  }[
                    Ga.visibilityState ||
                      Ga.webkitVisibilityState ||
                      Ga.mozVisibilityState ||
                      ''
                  ] || 0),
                (G.wgl = !!B.WebGLRenderingContext),
                G);
              for (var de in Ia) b[de] = Ia[de];
            }
            b.bid = a;
            b.bsq = Bi++;
            Fe('//www.youtube.com/ad_data_204', {
              xa: !1,
              C: b,
              withCredentials: !0,
            });
          },
          function () {}
        ),
          S(Ai, 18e5);
      } catch (b) {
        R(b);
      }
    }
  }
  var Bi = 0;
  var Z = w('ytglobal.prefsUserPrefsPrefs_') || {};
  u('ytglobal.prefsUserPrefsPrefs_', Z, void 0);
  function Ci() {
    this.b = P('ALT_PREF_COOKIE_NAME', 'PREF');
    var a = Eb.get('' + this.b, void 0);
    if (a) {
      a = decodeURIComponent(a).split('&');
      for (var b = 0; b < a.length; b++) {
        var c = a[b].split('='),
          d = c[0];
        (c = c[1]) && (Z[d] = c.toString());
      }
    }
  }
  k = Ci.prototype;
  k.get = function (a, b) {
    Di(a);
    Ei(a);
    var c = void 0 !== Z[a] ? Z[a].toString() : null;
    return null != c ? c : b ? b : '';
  };
  k.set = function (a, b) {
    Di(a);
    Ei(a);
    if (null == b) throw Error('ExpectedNotNull');
    Z[a] = b.toString();
  };
  k.remove = function (a) {
    Di(a);
    Ei(a);
    delete Z[a];
  };
  k.save = function () {
    ng(this.b, this.dump(), 63072e3);
  };
  k.clear = function () {
    for (var a in Z) delete Z[a];
  };
  k.dump = function () {
    var a = [],
      b;
    for (b in Z) a.push(b + '=' + encodeURIComponent(String(Z[b])));
    return a.join('&');
  };
  function Ei(a) {
    if (/^f([1-9][0-9]*)$/.test(a)) throw Error('ExpectedRegexMatch: ' + a);
  }
  function Di(a) {
    if (!/^\w+$/.test(a)) throw Error('ExpectedRegexMismatch: ' + a);
  }
  function Fi(a) {
    a = void 0 !== Z[a] ? Z[a].toString() : null;
    return null != a && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : null;
  }
  va(Ci);
  var Gi = null,
    Hi = null,
    Ii = null,
    Ji = {};
  function Ki(a) {
    var b = a.id;
    a = a.ve_type;
    var c = yg++;
    a = new wg({
      veType: a,
      veCounter: c,
      elementIndex: void 0,
      dataElement: void 0,
      youtubeData: void 0,
    });
    Ji[b] = a;
    b = Dg();
    c = Cg();
    b && c && Gg(b, c, a);
  }
  function Li(a) {
    var b = a.csn;
    a = a.root_ve_type;
    if (b && a && (Eg(b, a), (a = Cg())))
      for (var c in Ji) {
        var d = Ji[c];
        d && Gg(b, a, d);
      }
  }
  function Mi(a) {
    Ji[a.id] = new wg({ trackingParams: a.tracking_params });
  }
  function Ni(a) {
    var b = Dg();
    a = Ji[a.id];
    b &&
      a &&
      jg('visualElementGestured', {
        csn: b,
        ve: xg(a),
        gestureType: 'INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK',
      });
  }
  function Oi(a) {
    a = a.ids;
    var b = Dg();
    if (b)
      for (var c = 0; c < a.length; c++) {
        var d = Ji[a[c]];
        d && jg('visualElementShown', { csn: b, ve: xg(d), eventType: 1 });
      }
  }
  function Pi() {
    var a = Gi;
    a && a.startInteractionLogging && a.startInteractionLogging();
  }
  u('yt.setConfig', O, void 0);
  u('yt.config.set', O, void 0);
  u('yt.setMsg', Oe, void 0);
  u('yt.msgs.set', Oe, void 0);
  u('yt.logging.errors.log', Me, void 0);
  u(
    'writeEmbed',
    function () {
      var a = P('PLAYER_CONFIG', void 0);
      Ai(!0);
      'gvn' == a.args.ps &&
        (document.body.style.backgroundColor = 'transparent');
      var b = document.referrer,
        c = P('POST_MESSAGE_ORIGIN');
      window != window.top && b && b != document.URL && (a.args.loaderUrl = b);
      P('LIGHTWEIGHT_AUTOPLAY') && (a.args.autoplay = '1');
      a.args.autoplay && Wh(a.args);
      Gi = a = Nh(a);
      a.addEventListener('onScreenChanged', Li);
      a.addEventListener('onLogClientVeCreated', Ki);
      a.addEventListener('onLogServerVeCreated', Mi);
      a.addEventListener('onLogVeClicked', Ni);
      a.addEventListener('onLogVesShown', Oi);
      a.addEventListener('onReady', Pi);
      b = P('POST_MESSAGE_ID', 'player');
      P('ENABLE_JS_API')
        ? (Ii = new hi(a))
        : P('ENABLE_POST_API') &&
          t(b) &&
          t(c) &&
          ((Hi = new ki(window.parent, b, c)), (Ii = new bi(a, Hi.g)));
      c = Q('BG_P');
      Cf(c) &&
        (P('BG_I') || P('BG_IU')) &&
        ((yf = !0),
        xf.initialize(P('BG_I', null), P('BG_IU', null), c, Bf, void 0));
      tf();
    },
    void 0
  );
  u(
    'yt.www.watch.ads.restrictioncookie.spr',
    function (a) {
      Ie(a + 'mac_204?action_fcts=1');
      return !0;
    },
    void 0
  );
  var Qi = le(function () {
      xh('ol');
      var a = Ci.getInstance(),
        b = !!((Fi('f' + (Math.floor(119 / 31) + 1)) || 0) & 67108864),
        c = 1 < window.devicePixelRatio;
      if (document.body && ed(document.body, 'exp-invert-logo'))
        if (c && !ed(document.body, 'inverted-hdpi')) {
          var d = document.body;
          d.classList
            ? d.classList.add('inverted-hdpi')
            : ed(d, 'inverted-hdpi') ||
              (d.className +=
                0 < d.className.length ? ' inverted-hdpi' : 'inverted-hdpi');
        } else !c && ed(document.body, 'inverted-hdpi') && fd();
      b != c &&
        ((b = 'f' + (Math.floor(119 / 31) + 1)),
        (d = Fi(b) || 0),
        (d = c ? d | 67108864 : d & -67108865),
        0 == d ? delete Z[b] : (Z[b] = d.toString(16).toString()),
        a.save());
    }),
    Ri = le(function () {
      var a = Gi;
      a && a.sendAbandonmentPing && a.sendAbandonmentPing();
      P('PL_ATT') && xf.dispose();
      a = 0;
      for (var b = rf.length; a < b; a++) qf(rf[a]);
      rf.length = 0;
      kf('//static.doubleclick.net/instream/ad_status.js');
      sf = !1;
      O('DCLKSTAT', 0);
      cd(Ii, Hi);
      if ((a = Gi))
        a.removeEventListener('onScreenChanged', Li),
          a.removeEventListener('onLogClientVeCreated', Ki),
          a.removeEventListener('onLogServerVeCreated', Mi),
          a.removeEventListener('onLogVeClicked', Ni),
          a.removeEventListener('onLogVesShown', Oi),
          a.removeEventListener('onReady', Pi),
          a.destroy();
      Ji = {};
    });
  window.addEventListener
    ? (window.addEventListener('load', Qi),
      window.addEventListener('unload', Ri))
    : window.attachEvent &&
      (window.attachEvent('onload', Qi), window.attachEvent('onunload', Ri));
  Fa(
    'yt.abuse.player.botguardInitialized',
    w('yt.abuse.player.botguardInitialized') || Df
  );
  Fa(
    'yt.abuse.player.invokeBotguard',
    w('yt.abuse.player.invokeBotguard') || Ef
  );
  Fa(
    'yt.abuse.dclkstatus.checkDclkStatus',
    w('yt.abuse.dclkstatus.checkDclkStatus') || uf
  );
  Fa('yt.player.exports.navigate', w('yt.player.exports.navigate') || Fg);
  Fa('yt.util.activity.init', w('yt.util.activity.init') || Pf);
  Fa(
    'yt.util.activity.getTimeSinceActive',
    w('yt.util.activity.getTimeSinceActive') || Sf
  );
  Fa('yt.util.activity.setTimestamp', w('yt.util.activity.setTimestamp') || Qf);
}).call(this);
