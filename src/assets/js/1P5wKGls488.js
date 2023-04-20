if (self.CavalryLogger) {
  CavalryLogger.start_js(['I8bGG']);
}

self.__DEV__ = self.__DEV__ || 0;
('use strict');

(function () {
  var a = Array.prototype.indexOf;
  Array.prototype.includes ||
    (Array.prototype.includes = function (d) {
      if (d !== undefined && Array.isArray(this) && !Number.isNaN(d))
        return a.apply(this, arguments) !== -1;
      var e = Object(this),
        f = e.length ? b(e.length) : 0;
      if (f === 0) return !1;
      var g = arguments.length > 1 ? c(arguments[1]) : 0,
        h = g < 0 ? Math.max(f + g, 0) : g,
        i = Number.isNaN(d);
      while (h < f) {
        var j = e[h];
        if (j === d || (i && Number.isNaN(j))) return !0;
        h++;
      }
      return !1;
    });
  function b(a) {
    return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER);
  }
  function c(a) {
    a = Number(a);
    return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a;
  }
  function d(a) {
    return a >= 0 ? 1 : -1;
  }
})();
var __p;
(function () {
  var a = {},
    b = function (a, b) {
      if (!a && !b) return null;
      var c = {};
      typeof a !== 'undefined' && (c.type = a);
      typeof b !== 'undefined' && (c.signature = b);
      return c;
    },
    c = function (a, c) {
      return b(
        a && /^[A-Z]/.test(a) ? a : undefined,
        c && ((c.params && c.params.length) || c.returns)
          ? 'function(' +
              (c.params
                ? c.params
                    .map(function (a) {
                      return /\?/.test(a) ? '?' + a.replace('?', '') : a;
                    })
                    .join(',')
                : '') +
              ')' +
              (c.returns ? ':' + c.returns : '')
          : undefined
      );
    },
    d = function (a, b, c) {
      return a;
    },
    e = function (a, b, d) {
      'sourcemeta' in __transform_includes && (a.__SMmeta = b);
      if ('typechecks' in __transform_includes) {
        b = c(b ? b.name : undefined, d);
        b && __w(a, b);
      }
      return a;
    },
    f = function (a, b, c) {
      return c.apply(a, b);
    },
    g = function (a, b, c, d) {
      d && d.params && __t.apply(a, d.params);
      c = c.apply(a, b);
      d && d.returns && __t([c, d.returns]);
      return c;
    },
    h = function (b, c, d, e, f) {
      if (f) {
        f.callId ||
          (f.callId = f.module + ':' + (f.line || 0) + ':' + (f.column || 0));
        e = f.callId;
        a[e] = (a[e] || 0) + 1;
      }
      return d.apply(b, c);
    };
  typeof __transform_includes === 'undefined'
    ? ((__annotator = d), (__bodyWrapper = f))
    : ((__annotator = e),
      'codeusage' in __transform_includes
        ? ((__annotator = d),
          (__bodyWrapper = h),
          (__bodyWrapper.getCodeUsage = function () {
            return a;
          }),
          (__bodyWrapper.clearCodeUsage = function () {
            a = {};
          }))
        : 'typechecks' in __transform_includes
        ? (__bodyWrapper = g)
        : (__bodyWrapper = f));
})();
(__t = function (a) {
  return a[0];
}),
  (__w = function (a) {
    return a;
  });

(function (a, b) {
  var c = 'keys',
    d = 'values',
    e = 'entries',
    f = (function () {
      var a = h(Array),
        f;
      a ||
        (f = (function () {
          function a(a, b) {
            (this.$1 = a), (this.$2 = b), (this.$3 = 0);
          }
          a.prototype.next = function () {
            if (this.$1 == null) return { value: b, done: !0 };
            var a = this.$1,
              f = this.$1.length,
              g = this.$3,
              h = this.$2;
            if (g >= f) {
              this.$1 = b;
              return { value: b, done: !0 };
            }
            this.$3 = g + 1;
            if (h === c) return { value: g, done: !1 };
            else if (h === d) return { value: a[g], done: !1 };
            else if (h === e) return { value: [g, a[g]], done: !1 };
          };
          a.prototype[
            typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
          ] = function () {
            return this;
          };
          return a;
        })());
      return {
        keys: a
          ? function (a) {
              return a.keys();
            }
          : function (a) {
              return new f(a, c);
            },
        values: a
          ? function (a) {
              return a.values();
            }
          : function (a) {
              return new f(a, d);
            },
        entries: a
          ? function (a) {
              return a.entries();
            }
          : function (a) {
              return new f(a, e);
            },
      };
    })(),
    g = (function () {
      var a = h(String),
        c;
      a ||
        (c = (function () {
          function a(a) {
            (this.$1 = a), (this.$2 = 0);
          }
          a.prototype.next = function () {
            if (this.$1 == null) return { value: b, done: !0 };
            var a = this.$2,
              c = this.$1,
              d = c.length;
            if (a >= d) {
              this.$1 = b;
              return { value: b, done: !0 };
            }
            var e = c.charCodeAt(a);
            if (e < 55296 || e > 56319 || a + 1 === d) e = c[a];
            else {
              d = c.charCodeAt(a + 1);
              d < 56320 || d > 57343 ? (e = c[a]) : (e = c[a] + c[a + 1]);
            }
            this.$2 = a + e.length;
            return { value: e, done: !1 };
          };
          a.prototype[
            typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
          ] = function () {
            return this;
          };
          return a;
        })());
      return {
        keys: function () {
          throw TypeError("Strings default iterator doesn't implement keys.");
        },
        values: a
          ? function (a) {
              return a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
            }
          : function (a) {
              return new c(a);
            },
        entries: function () {
          throw TypeError(
            "Strings default iterator doesn't implement entries."
          );
        },
      };
    })();
  function h(a) {
    return (
      typeof a.prototype[
        typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
      ] === 'function' &&
      typeof a.prototype.values === 'function' &&
      typeof a.prototype.keys === 'function' &&
      typeof a.prototype.entries === 'function'
    );
  }
  function i(a, b) {
    (this.$1 = a), (this.$2 = b), (this.$3 = Object.keys(a)), (this.$4 = 0);
  }
  i.prototype.next = function () {
    var a = this.$3.length,
      f = this.$4,
      g = this.$2,
      h = this.$3[f];
    if (f >= a) {
      this.$1 = b;
      return { value: b, done: !0 };
    }
    this.$4 = f + 1;
    if (g === c) return { value: h, done: !1 };
    else if (g === d) return { value: this.$1[h], done: !1 };
    else if (g === e) return { value: [h, this.$1[h]], done: !1 };
  };
  i.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] =
    function () {
      return this;
    };
  var j = {
    keys: function (a) {
      return new i(a, c);
    },
    values: function (a) {
      return new i(a, d);
    },
    entries: function (a) {
      return new i(a, e);
    },
  };
  function k(a, b) {
    if (typeof a === 'string') return g[b || d](a);
    else if (Array.isArray(a)) return f[b || d](a);
    else if (a[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'])
      return a[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
    else return j[b || e](a);
  }
  Object.assign(k, {
    KIND_KEYS: c,
    KIND_VALUES: d,
    KIND_ENTRIES: e,
    keys: function (a) {
      return k(a, c);
    },
    values: function (a) {
      return k(a, d);
    },
    entries: function (a) {
      return k(a, e);
    },
    generic: j.entries,
  });
  a.FB_enumerate = k;
})(typeof global === 'undefined' ? this : global);

typeof window !== 'undefined' &&
  window.JSON &&
  JSON.stringify(['\u2028\u2029']) === '["\u2028\u2029"]' &&
  (JSON.stringify = (function (a) {
    var b = /\u2028/g,
      c = /\u2029/g;
    return function (d, e, f) {
      d = a.call(this, d, e, f);
      d &&
        (-1 < d.indexOf('\u2028') && (d = d.replace(b, '\\u2028')),
        -1 < d.indexOf('\u2029') && (d = d.replace(c, '\\u2029')));
      return d;
    };
  })(JSON.stringify));

(function () {
  var a = Object.prototype.hasOwnProperty;
  Object.entries = function (b) {
    if (b == null) throw new TypeError('Object.entries called on non-object');
    var c = [];
    for (var d in b) a.call(b, d) && c.push([d, b[d]]);
    return c;
  };
  Object.values = function (b) {
    if (b == null) throw new TypeError('Object.values called on non-object');
    var c = [];
    for (var d in b) a.call(b, d) && c.push(b[d]);
    return c;
  };
})();

(function (a) {
  a.__m = function (a, b) {
    a.__SMmeta = b;
    return a;
  };
})(this);

String.prototype.contains ||
  (String.prototype.contains = String.prototype.includes);
String.prototype.padStart ||
  (String.prototype.padStart = function (a, b) {
    a = a >> 0;
    b = String(b || ' ');
    if (this.length > a) return String(this);
    else {
      a = a - this.length;
      a > b.length && (b += b.repeat(a / b.length));
      return b.slice(0, a) + String(this);
    }
  }),
  String.prototype.padEnd ||
    (String.prototype.padEnd = function (a, b) {
      a = a >> 0;
      b = String(b || ' ');
      if (this.length > a) return String(this);
      else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return String(this) + b.slice(0, a);
      }
    });
String.prototype.trimLeft ||
  (String.prototype.trimLeft = function () {
    return this.replace(/^\s+/, '');
  }),
  String.prototype.trimRight ||
    (String.prototype.trimRight = function () {
      return this.replace(/\s+$/, '');
    });

(function (a) {
  a = a.babelHelpers = {};
  var b = Object.prototype.hasOwnProperty;
  a.inherits = function (a, b) {
    Object.assign(a, b);
    a.prototype = Object.create(b && b.prototype);
    a.prototype.constructor = a;
    a.__superConstructor__ = b;
    return b;
  };
  a._extends = Object.assign;
  a['extends'] = a._extends;
  a.construct = function (a, b) {
    return new (Function.prototype.bind.apply(a, [null].concat(b)))();
  };
  a.objectWithoutProperties = function (a, c) {
    var d = {};
    for (var e in a) {
      if (!b.call(a, e) || c.indexOf(e) >= 0) continue;
      d[e] = a[e];
    }
    return d;
  };
  a.taggedTemplateLiteralLoose = function (a, b) {
    b || (b = a.slice(0));
    a.raw = b;
    return a;
  };
  a.bind = Function.prototype.bind;
})(typeof global === 'undefined' ? self : global);
(function (a) {
  if (a.require) return;
  var b = (a.Env || {}).gk_require_dic,
    c = null,
    d = [],
    e = b ? Object.create(null) : {},
    f = b ? Object.create(null) : {},
    g = 0,
    h = 0,
    i = 0,
    j = 1,
    k = 2,
    l = 4,
    m = 8,
    n = {},
    o = Object.prototype.hasOwnProperty,
    p = Object.prototype.toString;
  function q(a) {
    a = Array.prototype.slice.call(a);
    var b = {},
      c,
      d,
      f,
      g;
    while (a.length) {
      d = a.shift();
      if (b[d]) continue;
      b[d] = !0;
      f = e[d];
      if (!f || Q(f)) continue;
      if (f.dependencies)
        for (c = 0; c < f.dependencies.length; c++)
          (g = f.dependencies[c]), Q(g) || a.push(g.id);
    }
    for (d in b) o.call(b, d) && a.push(d);
    b = [];
    for (c = 0; c < a.length; c++) {
      d = a[c];
      var h = d;
      f = e[d];
      if (!f || !f.dependencies) h += ' is not defined';
      else if (Q(f)) h += ' is ready';
      else {
        d = [];
        for (var i = 0; i < f.dependencies.length; i++)
          (g = f.dependencies[i]), (!e[g] || !Q(e[g])) && d.push(g.id);
        h += ' is waiting for ' + d.join(', ');
      }
      b.push(h);
    }
    return b.join('\n');
  }
  function r(a) {
    (this.name = 'ModuleError'),
      (this.message = a),
      (this.stack = Error(a).stack),
      (this.framesToPop = 2);
  }
  r.prototype = Object.create(Error.prototype);
  r.prototype.constructor = r;
  var s = (a.Env || {}).profile_require_factories,
    t = a.performance || a.msPerformance || a.webkitPerformance || {},
    u;
  if (t.now && t.timing && t.timing.navigationStart) {
    var v = t.timing.navigationStart;
    u = function () {
      return t.now() + v;
    };
  } else
    u = function () {
      return Date.now();
    };
  var w = 0,
    x = 0;
  function y(a) {
    x++;
    var b = e[a];
    if (b && b.exports != null) {
      b.refcount-- === 1 && (e[a] = void 0);
      return b.exports;
    }
    return A(a);
  }
  function z(b) {
    var c = e[b];
    b = f[b];
    if (c.factoryLength === -1) {
      var d = s && a.ProfilingCounters,
        g;
      d && (g = d.startTiming('FACTORY_COMPILE_TIME'));
      c.factoryLength = c.factory.length;
      g != null && ((d = d.stopTiming(g)), (b.compileTime += d));
    }
    return c.factoryLength;
  }
  function A(b) {
    if (a.ErrorUtils && !a.ErrorUtils.inGuard())
      return a.ErrorUtils.applyWithGuard(A, null, [b]);
    var d = e[b];
    if (!d) {
      var g = 'Requiring unknown module "' + b + '"';
      throw new r(g);
    }
    var h;
    if (d.hasError)
      throw new r(
        'Requiring module "' +
          b +
          '" which threw an exception: ' +
          d.error.message
      );
    if (!Q(d))
      throw new r(
        'Requiring module "' + b + '" with unresolved dependencies: ' + q([b])
      );
    g = d.exports = {};
    var i = d.factory;
    if (p.call(i) === '[object Function]') {
      var j = d.dependencies,
        l = j.length;
      try {
        try {
          V(d);
        } catch (a) {
          B(a, b);
        }
        var o = [],
          t = l;
        d.special & m &&
          ((o = c.slice(0)),
          (o[c.length - 2] = d),
          (o[c.length - 1] = g),
          (t += o.length));
        if (d.special & k) {
          g = z(b);
          t = Math.min(l + o.length, g);
        }
        for (var g = 0; g < l; g++) {
          var v = j[g];
          o.length < t && o.push(y.call(null, v.id));
        }
        ++w;
        v = s && a.ProfilingCounters;
        var x;
        v &&
          (v.incrementCounter('FACTORY_COUNT', 1),
          (x = v.startTiming('FACTORY_EXEC_TIME')));
        try {
          t = i.apply(d.context || a, o);
        } catch (a) {
          B(a, b);
        } finally {
          if (s) {
            j = u();
            l = 0;
            x != null && (l = v.stopTiming(x));
            g = f[d.id];
            g.factoryTime = l;
            g.factoryEnd = j;
            if (i.__SMmeta)
              for (var C in i.__SMmeta)
                Object.prototype.hasOwnProperty.call(i.__SMmeta, C) &&
                  (g[C] = i.__SMmeta[C]);
          }
        }
      } catch (a) {
        d.hasError = !0;
        d.error = a;
        d.exports = null;
        throw a;
      }
      t && (d.exports = t);
      if (typeof d.exports === 'function') {
        o = d.exports;
        v = o.__superConstructor__;
        (!o.displayName || (v && v.displayName === o.displayName)) &&
          (o.displayName = (o.name || '(anonymous)') + ' [from ' + b + ']');
      }
      d.factoryFinished = !0;
    } else d.exports = i;
    l = '__isRequired__' + b;
    j = e[l];
    j && !Q(j) && H(l, n);
    d.refcount-- === 1 && (e[b] = void 0);
    return d.exports;
  }
  function B(a, b) {
    a instanceof Error || (a = new Error(a));
    if (e.ex && e.erx) {
      var c = y.call(null, 'ex'),
        d = y.call(null, 'erx');
      d = d(a.message);
      d[0].indexOf(' from module "%s"') < 0 &&
        ((d[0] += ' from module "%s"'), (d[d.length] = b));
      a.message = c.apply(null, d);
    }
    throw a;
  }
  function C() {
    var a = 0;
    for (var b in f)
      Object.prototype.hasOwnProperty.call(f, b) && (a += f[b].factoryTime);
    return a;
  }
  function D() {
    var a = 0;
    for (var b in f)
      Object.prototype.hasOwnProperty.call(f, b) && (a += f[b].compileTime);
    return a;
  }
  function E() {
    return w;
  }
  function F() {
    return x;
  }
  function G() {
    var a = {};
    for (var b in f)
      Object.prototype.hasOwnProperty.call(f, b) && (a[b] = f[b]);
    return a;
  }
  function H(a, b, c, g, h, i, j) {
    b === undefined
      ? ((b = []), (c = a), (a = M()))
      : c === undefined &&
        ((c = b),
        p.call(a) === '[object Array]'
          ? ((b = a), (a = M(b.join(','))))
          : (b = []));
    var k = { cancel: K.bind(this, a) },
      l = e[a];
    if (!b && !c && i) {
      I(a).refcount += i;
      return k;
    }
    f[a] = {
      id: a,
      dependencies: b,
      meta: j,
      category: g,
      defined: s ? u() : null,
      compileTime: null,
      factoryTime: null,
      factoryEnd: null,
    };
    j = b.map(I);
    l = e[a];
    if (l) {
      if (l.dependencies && !l.reload) return k;
      i && (l.refcount += i);
      l.factory = c;
      l.dependencies = j;
      l.context = h;
      l.special = g;
    } else (l = new J(a, i || 0, null, c, j, h, g)), (e[a] = l);
    U(l);
    if (d.length > 0) {
      b = d;
      d = [];
      while (b.length > 0) y.call(null, b.pop().id);
    }
    return k;
  }
  function I(a) {
    var b = e[a];
    if (b) return b;
    b = new J(a, 0);
    e[a] = b;
    return b;
  }
  function J(a, b, c, d, e, f, g) {
    (this.id = a),
      (this.refcount = b),
      (this.exports = c || null),
      (this.factory = d),
      (this.factoryLength = -1),
      (this.factoryFinished = !1),
      (this.dependencies = e),
      (this.depPosition = 0),
      (this.context = f),
      (this.special = g || 0),
      (this.hasError = !1),
      (this.error = null),
      (this.ranRecursiveSideEffects = !1),
      (this.sideEffectDependencyException = null),
      (this.nextDepWaitingHead = null),
      (this.nextDepWaitingNext = null),
      (this.tarjanGeneration = -1),
      (this.tarjanLow = 0),
      (this.tarjanIndex = 0),
      (this.tarjanOnStack = !1);
  }
  function K(a) {
    if (!e[a]) return;
    var b = e[a];
    e[a] = void 0;
    if (b.dependencies)
      for (var a = 0; a < b.dependencies.length; a++) {
        var c = b.dependencies[a];
        c.refcount-- === 1 && K(c.id);
      }
  }
  function L(a, b, c) {
    return H(
      '__requireLazy__' + (a.length > 0 ? a.join(',') + '__' : '') + g++,
      a,
      $()(b, 'requireLazy', { propagationType: 0 }),
      j,
      c,
      1
    );
  }
  function M(a) {
    return '__mod__' + (a ? a + '__' : '') + g++;
  }
  function N(a, b, c) {
    c.tarjanGeneration != h &&
      ((c.tarjanGeneration = h),
      (c.tarjanLow = c.tarjanIndex = i++),
      (c.tarjanOnStack = !0),
      b.push(c));
    if (c.dependencies != null)
      for (var d = c.depPosition; d < c.dependencies.length; d++) {
        var e = c.dependencies[d];
        e.tarjanGeneration != h
          ? (N(a, b, e), (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanLow)))
          : e.tarjanOnStack &&
            (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanIndex));
      }
    if (c.tarjanLow == c.tarjanIndex) {
      e = [];
      do {
        d = b.pop();
        d.tarjanOnStack = !1;
        e.push(d);
        if (c == b[0] && d != c && d.dependencies != null)
          for (var f = d.depPosition; f < d.dependencies.length; f++) {
            var g = d.dependencies[f];
            !Q(g) &&
              a.indexOf(g) == -1 &&
              b.indexOf(g) == -1 &&
              e.indexOf(g) == -1 &&
              a.push(g);
          }
      } while (d != c);
    }
  }
  function O(a) {
    h++, N(a.dependencies, [], a), a.depPosition++, U(a);
  }
  function P(a, b) {
    var c = b;
    while (!0) {
      if (c.dependencies && c.depPosition != c.dependencies.length)
        c = c.dependencies[c.depPosition];
      else break;
      if (c == a) {
        O(a);
        return;
      }
    }
    a.nextDepWaitingNext = b.nextDepWaitingHead;
    b.nextDepWaitingHead = a;
  }
  function Q(a) {
    return a.dependencies != null && a.depPosition >= a.dependencies.length;
  }
  function R(a) {
    a.depPosition++, U(a);
  }
  function S(a) {
    var b = a.nextDepWaitingHead;
    a.nextDepWaitingHead = null;
    while (b !== null) {
      a = b;
      b = a.nextDepWaitingNext;
      a.nextDepWaitingNext = null;
      var c = !e[a.id];
      c || R(a);
    }
  }
  function T(a) {
    return a.special & j;
  }
  function U(a) {
    while (a.depPosition < a.dependencies.length) {
      var b = a.dependencies[a.depPosition],
        c = Q(b);
      if (!c && a != b) {
        P(a, b);
        return;
      }
      a.depPosition++;
    }
    T(a) && d.push(a);
    a.nextDepWaitingHead !== null && S(a);
  }
  function V(a) {
    if (a.sideEffectDependencyException) throw a.sideEffectDependencyException;
    if (a.ranRecursiveSideEffects) return;
    a.ranRecursiveSideEffects = !0;
    var b = a.dependencies;
    if (b)
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        try {
          V(d);
        } catch (b) {
          a.sideEffectDependencyException = b;
          throw b;
        }
        if (d.special & l)
          try {
            y.call(null, d.id);
          } catch (b) {
            a.sideEffectDependencyException = b;
            throw b;
          }
      }
  }
  function W(a, b) {
    (e[a] = new J(a, 0, b)),
      (f[a] = {
        id: a,
        dependencies: [],
        category: 0,
        compileTime: null,
        factoryLengthAccessTime: null,
        factoryTime: null,
        factoryEnd: null,
      });
  }
  W('module', 0);
  W('exports', 0);
  W('define', H);
  W('global', a);
  W('require', y);
  W('requireDynamic', X);
  W('requireLazy', L);
  W('requireWeak', Y);
  W('ifRequired', Z);
  c = [
    y.call(null, 'global'),
    y.call(null, 'require'),
    y.call(null, 'requireDynamic'),
    y.call(null, 'requireLazy'),
    null,
    null,
  ];
  H.amd = {};
  a.define = H;
  a.require = y;
  a.requireDynamic = X;
  a.requireLazy = L;
  function X(a, b) {
    throw new ReferenceError('requireDynamic is not defined');
  }
  function Y(a, b) {
    Z.call(
      null,
      a,
      function (a) {
        b(a);
      },
      function () {
        H(
          '__requireWeak__' + a + '__' + g++,
          ['__isRequired__' + a],
          $()(function () {
            b(e[a].exports);
          }, 'requireWeak'),
          j,
          null,
          1
        );
      }
    );
  }
  function Z(a, b, c) {
    a = e[a];
    if (a && a.factoryFinished) {
      if (typeof b === 'function') return b(a.exports);
    } else if (typeof c === 'function') return c();
  }
  b = {
    getModules: function () {
      var a = {};
      for (var b in e)
        e[b] && Object.prototype.hasOwnProperty.call(e, b) && (a[b] = e[b]);
      return a;
    },
    modulesMap: e,
    debugUnresolvedDependencies: q,
  };
  function aa(a) {
    return a;
  }
  function $() {
    return (a.TimeSlice && a.TimeSlice.guard) || aa;
  }
  W('__getFactoryTime', C);
  W('__getCompileTime', D);
  W('__getTotalFactories', E);
  W('__getTotalRequireCalls', F);
  W('__getModuleTimeDetails', G);
  W('__debug', b);
  a.__d = function (a, b, c, d) {
    $()(
      function () {
        H(a, b, c, (d || k) | m, null, null, null);
      },
      'define ' + a,
      { root: !0 }
    )();
  };
})(this);

(function (a) {
  var b = a.performance;
  b &&
    b.setResourceTimingBufferSize &&
    (b.setResourceTimingBufferSize(1e5),
    (b.onresourcetimingbufferfull = function () {
      a.__isresourcetimingbufferfull = !0;
    }),
    (b.setResourceTimingBufferSize = function () {}));
})(this);
__d(
  'ExecutionEnvironment',
  [],
  function (a, b, c, d, e, f) {
    a = !!(
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
    );
    b = {
      canUseDOM: a,
      canUseWorkers: typeof Worker !== 'undefined',
      canUseEventListeners:
        a && !!(window.addEventListener || window.attachEvent),
      canUseViewport: a && !!window.screen,
      isInWorker: !a,
    };
    e.exports = b;
  },
  null
);
__d(
  'javascript_shared_TAAL_OpCode',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      PREVIOUS_FILE: 1,
      PREVIOUS_FRAME: 2,
      PREVIOUS_DIR: 3,
    });
  },
  null
);
__d(
  'TAALOpcodes',
  ['javascript_shared_TAAL_OpCode'],
  function (a, b, c, d, e, f) {
    a = {
      previousFile: function () {
        return b('javascript_shared_TAAL_OpCode').PREVIOUS_FILE;
      },
      previousFrame: function () {
        return b('javascript_shared_TAAL_OpCode').PREVIOUS_FRAME;
      },
      previousDirectory: function () {
        return b('javascript_shared_TAAL_OpCode').PREVIOUS_DIR;
      },
      getString: function (a) {
        return a && a.length ? ' TAAL[' + a.join(';') + ']' : '';
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'TAAL',
  ['TAALOpcodes'],
  function (a, b, c, d, e, f) {
    a = {
      blameToPreviousFile: function (a) {
        return this.applyOpcodes(a, [b('TAALOpcodes').previousFile()]);
      },
      blameToPreviousFrame: function (a) {
        return this.applyOpcodes(a, [b('TAALOpcodes').previousFrame()]);
      },
      blameToPreviousDirectory: function (a) {
        return this.applyOpcodes(a, [b('TAALOpcodes').previousDirectory()]);
      },
      applyOpcodes: function (a, c) {
        return a + b('TAALOpcodes').getString(c);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'eprintf',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      var e = c.map(function (a) {
          return String(a);
        }),
        f = a.split('%s').length - 1;
      if (f !== e.length)
        return g(
          'eprintf args number mismatch: %s',
          JSON.stringify([a].concat(e))
        );
      var h = 0;
      return a.replace(/%s/g, function () {
        return String(e[h++]);
      });
    }
    e.exports = g;
  },
  null
);
__d(
  'ex',
  ['eprintf'],
  function (a, b, c, d, e, f) {
    function g(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      var e = c.map(function (a) {
          return String(a);
        }),
        f = a.split('%s').length - 1;
      return f !== e.length
        ? g('ex args number mismatch: %s', JSON.stringify([a].concat(e)))
        : g._prefix + JSON.stringify([a].concat(e)) + g._suffix;
    }
    g._prefix = '<![EX[';
    g._suffix = ']]>';
    e.exports = g;
  },
  null
);
__d(
  'sprintf',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      var e = 0;
      return a.replace(/%s/g, function () {
        return String(c[e++]);
      });
    }
    e.exports = a;
  },
  null
);
__d(
  'invariant',
  ['TAAL', 'ex', 'sprintf'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ex');
    function a(a, c) {
      __p && __p();
      if (!a) {
        var d = c;
        for (
          var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), h = 2;
          h < e;
          h++
        )
          f[h - 2] = arguments[h];
        if (d === undefined) {
          d = 'Invariant: ';
          for (var i = 0; i < f.length; i++) d += '%s,';
        }
        d = b('TAAL').blameToPreviousFrame(d);
        var j = new Error(g.apply(undefined, [d].concat(f)));
        j.name = 'Invariant Violation';
        j.messageWithParams = [d].concat(f);
        throw j;
      }
    }
    e.exports = a;
  },
  null
);
__d(
  'getMarkupWrap',
  ['invariant', 'ExecutionEnvironment'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b('ExecutionEnvironment').canUseDOM
        ? document.createElement('div')
        : null,
      i = {};
    c = [1, '<select multiple="true">', '</select>'];
    d = [1, '<table>', '</table>'];
    f = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
    var j = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'],
      k = {
        '*': [1, '?<div>', '</div>'],
        area: [1, '<map>', '</map>'],
        col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
        legend: [1, '<fieldset>', '</fieldset>'],
        param: [1, '<object>', '</object>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        optgroup: c,
        option: c,
        caption: d,
        colgroup: d,
        tbody: d,
        tfoot: d,
        thead: d,
        td: f,
        th: f,
      };
    b = [
      'circle',
      'clipPath',
      'defs',
      'ellipse',
      'g',
      'image',
      'line',
      'linearGradient',
      'mask',
      'path',
      'pattern',
      'polygon',
      'polyline',
      'radialGradient',
      'rect',
      'stop',
      'text',
      'tspan',
    ];
    b.forEach(function (a) {
      (k[a] = j), (i[a] = !0);
    });
    function a(a) {
      a = a;
      !h && g(0, undefined);
      Object.prototype.hasOwnProperty.call(k, a) || (a = '*');
      Object.prototype.hasOwnProperty.call(i, a) ||
        (a === '*'
          ? (h.innerHTML = '<link />')
          : (h.innerHTML = '<' + a + '></' + a + '>'),
        (i[a] = !h.firstChild));
      return i[a] ? k[a] : null;
    }
    e.exports = a;
  },
  null
);
__d(
  'createNodesFromMarkup',
  ['invariant', 'ExecutionEnvironment', 'getMarkupWrap'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b('ExecutionEnvironment').canUseDOM
        ? document.createElement('div')
        : null,
      i = /^\s*<(\w+)/;
    function j(a) {
      a = a.match(i);
      return a && a[1].toLowerCase();
    }
    function a(a, c) {
      __p && __p();
      var d = h;
      !h && g(0, undefined);
      var e = j(a);
      e = e && b('getMarkupWrap')(e);
      if (e) {
        d.innerHTML = e[1] + a + e[2];
        e = e[0];
        while (e--) d = d.lastChild;
      } else d.innerHTML = a;
      e = d.getElementsByTagName('script');
      e.length && (c || g(0, undefined), Array.from(e).forEach(c));
      a = Array.from(d.childNodes);
      while (d.lastChild) d.removeChild(d.lastChild);
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  'emptyFunction',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      return function () {
        return a;
      };
    }
    b = function () {};
    b.thatReturns = a;
    b.thatReturnsFalse = a(!1);
    b.thatReturnsTrue = a(!0);
    b.thatReturnsNull = a(null);
    b.thatReturnsThis = function () {
      return this;
    };
    b.thatReturnsArgument = function (a) {
      return a;
    };
    e.exports = b;
  },
  null
);
__d(
  'evalGlobal',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      if (typeof a !== 'string')
        throw new TypeError(
          'JS sent to evalGlobal is not a string. Only strings are permitted.'
        );
      if (!a) return;
      var b = document.createElement('script');
      try {
        b.appendChild(document.createTextNode(a));
      } catch (c) {
        b.text = a;
      }
      a = document.getElementsByTagName('head')[0] || document.documentElement;
      a.appendChild(b);
      a.removeChild(b);
    }
    e.exports = a;
  },
  null
);
__d(
  'HTML',
  [
    'invariant',
    'Bootloader',
    'createNodesFromMarkup',
    'emptyFunction',
    'evalGlobal',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = /(<(\w+)[^>]*?)\/>/g,
      i = {
        abbr: !0,
        area: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
      };
    function j(a) {
      __p && __p();
      a && typeof a.__html === 'string' && (!1, (a = a.__html));
      if (!(this instanceof j)) return a instanceof j ? a : new j(a);
      if (a) {
        var c = typeof a;
        c === 'string' || g(0, undefined, c);
      }
      this._markup = a || '';
      this._defer = !1;
      this._nodes = null;
      this._inlineJS = b('emptyFunction');
      this._rootNode = null;
    }
    j.prototype.toString = function () {
      return this._markup;
    };
    j.prototype.getContent = function () {
      return this._markup;
    };
    j.prototype.getNodes = function () {
      this._fillCache();
      return this._nodes;
    };
    j.prototype.getRootNode = function () {
      __p && __p();
      this._rootNode && g(0, undefined);
      var a = this.getNodes();
      if (a.length === 1) this._rootNode = a[0];
      else {
        var b = document.createDocumentFragment();
        for (var c = 0; c < a.length; c++) b.appendChild(a[c]);
        this._rootNode = b;
      }
      return this._rootNode;
    };
    j.prototype.getAction = function () {
      this._fillCache();
      var a = function () {
        this._inlineJS();
      }.bind(this);
      return this._defer
        ? function () {
            setTimeout(a, 0);
          }
        : a;
    };
    j.prototype._fillCache = function () {
      __p && __p();
      if (this._nodes !== null) return;
      if (!this._markup) {
        this._nodes = [];
        return;
      }
      var a = this._markup.replace(h, function (a, b, c) {
          return i[c.toLowerCase()] ? a : b + '></' + c + '>';
        }),
        c = null;
      a = b('createNodesFromMarkup')(a, function (a) {
        (c = c || []),
          c.push(
            a.src
              ? b(
                  'Bootloader'
                ).requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(
                  b('Bootloader'),
                  a.src
                )
              : b('evalGlobal').bind(null, a.innerHTML)
          ),
          a.parentNode.removeChild(a);
      });
      c &&
        (this._inlineJS = function () {
          for (var a = 0; a < c.length; a++) c[a]();
        });
      this._nodes = a;
    };
    j.prototype.setDeferred = function (a) {
      this._defer = !!a;
      return this;
    };
    j.isHTML = function (a) {
      return !!a && (a instanceof j || a.__html !== undefined);
    };
    j.replaceJSONWrapper = function (a) {
      return a && a.__html !== undefined ? new j(a.__html) : a;
    };
    e.exports = j;
  },
  null
);
__d(
  'ArbiterToken',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a, b) {
      (this.$1 = a), (this.$2 = b);
    }
    a.prototype.unsubscribe = function () {
      for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
      this.$2.length = 0;
    };
    a.prototype.isForArbiterInstance = function (a) {
      this.$1 || g(0, undefined);
      return this.$1 === a;
    };
    e.exports = a;
  },
  null
);
__d(
  'Env',
  [],
  function (a, b, c, d, e, f) {
    b = { start: Date.now(), nocatch: !1, ajaxpipe_token: null };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    e.exports = b;
  },
  null
);
__d(
  'ManagedError',
  [],
  function (a, b, c, d, e, f) {
    var g;
    b = babelHelpers.inherits(a, Error);
    g = b && b.prototype;
    function a(a, b) {
      g.constructor.call(this, a !== null && a !== undefined ? a : ''),
        a !== null && a !== undefined
          ? (this.message = a)
          : (this.message = ''),
        (this.innerError = b);
    }
    e.exports = a;
  },
  null
);
__d(
  'LogviewForcedKeyError',
  ['ManagedError'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('ManagedError'));
    g = c && c.prototype;
    function a(a, b) {
      g.constructor.call(this, b, a);
    }
    a.prototype.getCause = function () {
      return this.innerError;
    };
    a.prototype.getForcedCategoryKey = function () {
      return this.message;
    };
    e.exports = a;
  },
  null
);
__d(
  'erx',
  ['ex'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      if (typeof a !== 'string') return a;
      var c = a.indexOf(b('ex')._prefix),
        d = a.lastIndexOf(b('ex')._suffix);
      if (c < 0 || d < 0) return [a];
      var e = c + b('ex')._prefix.length,
        f = d + b('ex')._suffix.length;
      if (e >= d) return ['erx slice failure: %s', a];
      c = a.substring(0, c);
      f = a.substring(f);
      a = a.substring(e, d);
      try {
        e = JSON.parse(a);
        e[0] = c + e[0] + f;
        return e;
      } catch (b) {
        return ['erx parse failure: %s because %s', a, b.message];
      }
    }
    e.exports = a;
  },
  null
);
__d(
  'removeFromArray',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      b = a.indexOf(b);
      b !== -1 && a.splice(b, 1);
    }
    e.exports = a;
  },
  null
);
__d(
  'ErrorUtils',
  [
    'Env',
    'LogviewForcedKeyError',
    'eprintf',
    'erx',
    'removeFromArray',
    'sprintf',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = '<anonymous guard>',
      h = '<generated guard>',
      i = typeof window === 'undefined' ? '<self.onerror>' : '<window.onerror>',
      j = '<global.react>',
      k = /^https?:\/\//i,
      l = /^Type Mismatch for/,
      m = /(.*)[@\s][^\s]+$/,
      n = /^at .*eval eval (at .*\:\d+\:\d+), .*$/,
      o = [],
      p,
      q = [],
      r = 50,
      s = [],
      t = !1,
      u = !1,
      v = !1,
      w = /\bnocatch\b/.test(location.search),
      x = ['Unknown script code', 'Function code', 'eval code'];
    b('Env').stack_trace_limit &&
      Error.stackTraceLimit != null &&
      (Error.stackTraceLimit = b('Env').stack_trace_limit);
    function y(a) {
      a = a.columnNumber || a.column;
      return a != null ? String(a) : '';
    }
    function z(a) {
      return (a[0] && a[0].column) || '';
    }
    function A(a) {
      for (var b = 0; b < x.length; b++) {
        var c = ' ' + x[b];
        if (a.endsWith(c)) return [a, a.substring(0, a.length - c.length)];
      }
      return null;
    }
    function B(a) {
      a = a.lineNumber || a.line;
      return a != null ? String(a) : '';
    }
    function C(a) {
      return (a[0] && a[0].line) || '';
    }
    function D(a) {
      a = a.fileName || a.sourceURL;
      return a != null ? String(a) : '';
    }
    function E(a) {
      return (a[0] && a[0].script) || '';
    }
    function F(a) {
      if (!a) return null;
      a = a.split('\n');
      a.splice(0, 1);
      return a.map(function (a) {
        return a.trim();
      });
    }
    function G(a) {
      __p && __p();
      var b = a.stackTrace || a.stack;
      if (b == null) return [];
      a = a.message;
      var c = b.replace(/^[\w \.\<\>:]+:\s/, '');
      a =
        a != null && c.startsWith(a)
          ? c.substr(a.length + 1)
          : c !== b
          ? c.replace(/^.*?\n/, '')
          : b;
      return a
        .split(/\n\n/)[0]
        .replace(/[\(\)]|\[.*?\]/g, '')
        .split('\n')
        .map(function (a) {
          __p && __p();
          a = a.trim();
          var b = a.match(n);
          b && (a = b[1]);
          var c, d;
          b = a.match(/:(\d+)(?::(\d+))?$/);
          b && ((c = b[1]), (d = b[2]), (a = a.slice(0, -b[0].length)));
          var e;
          b = A(a) || a.match(m);
          if (b) {
            a = a.substring(b[1].length + 1);
            b = b[1].match(/(?:at)?\s*(.*)(?:[^\s]+|$)/);
            e = b ? b[1] : '';
          }
          a.includes('charset=utf-8;base64,') && (a = '<inlined-file>');
          b = { column: d, identifier: e, line: c, script: a };
          p && p(b);
          a =
            '    at' +
            (b.identifier ? ' ' + b.identifier + ' (' : ' ') +
            b.script +
            (b.line ? ':' + b.line : '') +
            (b.column ? ':' + b.column : '') +
            (b.identifier ? ')' : '');
          return babelHelpers['extends']({}, b, { text: a });
        });
    }
    function H(a) {
      s.unshift(a), (t = !0);
    }
    function I() {
      s.shift(), (t = s.length !== 0);
    }
    var J = {
      ANONYMOUS_GUARD_TAG: g,
      GENERATED_GUARD_TAG: h,
      GLOBAL_ERROR_HANDLER_TAG: i,
      history: q,
      addListener: function (a, b) {
        b === void 0 && (b = !1),
          o.push(a),
          b ||
            q.forEach(function (b) {
              return a(b.error, b.loggingType);
            });
      },
      removeListener: function (a) {
        b('removeFromArray')(o, a);
      },
      setSourceResolver: function (a) {
        p = a;
      },
      applyWithGuard: function (c, d, e, f, h, i) {
        __p && __p();
        H(h || g);
        b('Env').nocatch && (w = !0);
        if (w) {
          try {
            h = c.apply(d, e || []);
          } finally {
            I();
          }
          return h;
        }
        try {
          return c.apply(d, e || []);
        } catch (g) {
          h = g;
          if (h == null)
            try {
              var j = d,
                k = function (a) {
                  __p && __p();
                  if (a == null) return '<unset>';
                  else if (typeof a === 'object' && a.toString)
                    return a.toString();
                  else if (typeof a === 'boolean' && a.toString)
                    return a.toString();
                  else if (typeof a === 'number' && a.toString)
                    return a.toString();
                  else if (typeof a === 'string') return a;
                  else if (typeof a === 'symbol' && a.toString)
                    return a.toString();
                  else if (typeof a === 'function' && a.toString)
                    return a.toString();
                  return '<unset>';
                };
              if (d != null)
                if (d == window) j = '[The window object]';
                else if (d == a) j = '[The global object]';
                else {
                  var l = d,
                    m = {};
                  Object.keys(l).map(function (a, b) {
                    b = l[a];
                    m[a] = k(b);
                  });
                  j = m;
                }
              d = (e || []).map(k);
              var n =
                  'applyWithGuard threw null or undefined:\nFunc: %s\nContext: %s\nArgs: %s',
                o = c.toString && c.toString().substr(0, 1024);
              j = JSON.stringify(j).substr(0, 1024);
              d = JSON.stringify(d).substr(0, 1024);
              var p = b('sprintf')(
                n,
                o ? o : 'this function does not support toString',
                j,
                d
              );
              h = new Error(p);
              h.messageWithParams = [
                n,
                o ? o : 'this function does not support toString',
                j,
                d,
              ];
            } catch (a) {
              p =
                'applyWithGuard threw null or undefined with unserializable data:\nFunc: %s\nMetaEx: %s';
              n = c.toString && c.toString().substr(0, 1024);
              o = b('sprintf')(
                p,
                n ? n : 'this function does not support toString',
                a.message
              );
              h = new Error(o);
              h.messageWithParams = [
                o,
                n ? n : 'this function does not support toString',
                a.message,
              ];
            }
          i && i.deferredSource && (h.deferredSource = i.deferredSource);
          j = J.normalizeError(h);
          f && f(j);
          j.extra || (j.extra = {});
          if (c)
            try {
              j.extra[c.toString().substring(0, 100)] = 'function';
            } catch (a) {}
          e && (j.extra[Array.from(e).toString().substring(0, 100)] = 'args');
          j.guard = s[0];
          j.guardList = s.slice();
          J.reportError(j, !1, 'GUARDED');
        } finally {
          I();
        }
      },
      guard: function (a, b, c) {
        b = b || a.name || h;
        function d() {
          return J.applyWithGuard(
            a,
            c || this,
            [].concat(Array.prototype.slice.call(arguments)),
            null,
            b
          );
        }
        a.__SMmeta && (d.__SMmeta = a.__SMmeta);
        return d;
      },
      inGuard: function () {
        return t;
      },
      normalizeError: function (a) {
        __p && __p();
        var c = a;
        a = a != null ? a : {};
        if (Object.prototype.hasOwnProperty.call(a, '_originalError')) return a;
        var d = G(a),
          e = !1;
        if (a.framesToPop) {
          var f = a.framesToPop,
            g;
          while (f > 0 && d.length > 0) (g = d.shift()), f--, (e = !0);
          l.test(a.message) &&
            a.framesToPop === 2 &&
            g &&
            k.test(g.script) &&
            (a.message +=
              ' at ' +
              g.script +
              (g.line ? ':' + g.line : '') +
              (g.column ? ':' + g.column : ''));
        }
        f = F(a.reactComponentStackForLogging);
        var h =
          a instanceof b('LogviewForcedKeyError')
            ? a.getForcedCategoryKey()
            : null;
        c = {
          _originalError: c,
          column: e ? z(d) : y(a) || z(d),
          deferredSource: a.deferredSource,
          extra: a.extra,
          fbloggerMetadata: a.fbloggerMetadata,
          forcedLogviewKey: h,
          guard: a.guard,
          guardList: a.guardList,
          line: e ? C(d) : B(a) || C(d),
          message: a.message,
          messageWithParams: a.messageWithParams,
          name: a.name,
          reactComponentStack: f,
          script: e ? E(d) : D(a) || E(d),
          serverHash: a.serverHash,
          snapshot: a.snapshot,
          stack: d
            .map(function (a) {
              return a.text;
            })
            .join('\n'),
          stackFrames: d,
          type: a.type,
        };
        typeof c.message === 'string'
          ? (c.messageWithParams = c.messageWithParams || b('erx')(c.message))
          : ((c.messageObject = c.message),
            (c.message = String(c.message) + ' (' + typeof c.message + ')'));
        c.messageWithParams &&
          (c.message = b('eprintf').apply(undefined, c.messageWithParams));
        typeof window !== 'undefined' &&
          window &&
          window.location &&
          (c.windowLocationURL = window.location.href);
        p && p(c);
        for (var i in c) c[i] == null && delete c[i];
        return c;
      },
      onerror: function (a, b, c, d, e) {
        (e = e || {}),
          (e.message = e.message || a),
          (e.script = e.script || b),
          (e.line = e.line || c),
          (e.column = e.column || d),
          (e.guard = i),
          (e.guardList = [i]),
          J.reportError(e, !0, 'FATAL');
      },
      reportError: function (b, c, d) {
        __p && __p();
        c === void 0 && (c = !1);
        d === void 0 && (d = 'DEPRECATED');
        if (u) {
          !1;
          return !1;
        }
        b.reactComponentStack && H(j);
        s.length > 0 &&
          ((b.guard = b.guard || s[0]), (b.guardList = s.slice()));
        b.reactComponentStack && I();
        b = J.normalizeError(b);
        if (!c) {
          c = a.console;
          var e = b._originalError;
          e = e != null ? '' + e.message : '';
          if ((!c[b.type] || b.type === 'error') && !v) {
            e = e.length > 80 ? e.slice(0, 77) + '...' : e;
            c.error(
              'ErrorUtils caught an error: "' +
                e +
                '". Subsequent errors won\'t be logged; see https://fburl.com/debugjs.'
            );
            v = !0;
          }
        }
        q.length > r && q.splice(r / 2, 1);
        q.push({ error: b, loggingType: d });
        u = !0;
        for (var c = 0; c < o.length; c++)
          try {
            o[c](b, d);
          } catch (a) {
            !1;
          }
        u = !1;
        return !0;
      },
    };
    a.onerror = J.onerror;
    e.exports = a.ErrorUtils = J;
    typeof __t === 'function' &&
      __t.setHandler &&
      __t.setHandler(J.reportError);
  },
  3
);
__d(
  'CallbackDependencyManager',
  ['ErrorUtils'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      (this.$1 = new Map()),
        (this.$2 = new Map()),
        (this.$3 = 1),
        (this.$4 = new Map());
    }
    a.prototype.$5 = function (a, b) {
      __p && __p();
      var c = 0,
        d = new Set();
      for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
      for (
        var b = d.keys(),
          e = Array.isArray(b),
          f = 0,
          b = e
            ? b
            : b[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        if (e) {
          if (f >= b.length) break;
          d = b[f++];
        } else {
          f = b.next();
          if (f.done) break;
          d = f.value;
        }
        d = d;
        if (this.$4.get(d)) continue;
        c++;
        var g = this.$1.get(d);
        g === undefined && ((g = new Map()), this.$1.set(d, g));
        g.set(a, (g.get(a) || 0) + 1);
      }
      return c;
    };
    a.prototype.$6 = function (a) {
      __p && __p();
      a = this.$1.get(a);
      if (!a) return;
      for (
        var c = a.entries(),
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        var g = f[0];
        f = f[1] - 1;
        a.set(g, f);
        f <= 0 && a['delete'](g);
        f = this.$2.get(g);
        if (f !== undefined) {
          f.$7--;
          if (f.$7 <= 0) {
            f = f.$8;
            this.$2['delete'](g);
            b('ErrorUtils').applyWithGuard(f);
          }
        }
      }
    };
    a.prototype.addDependenciesToExistingCallback = function (a, b) {
      var c = this.$2.get(a);
      if (!c) return null;
      b = this.$5(a, b);
      c.$7 += b;
      return a;
    };
    a.prototype.isPersistentDependencySatisfied = function (a) {
      return !!this.$4.get(a);
    };
    a.prototype.satisfyPersistentDependency = function (a) {
      this.$4.set(a, 1), this.$6(a);
    };
    a.prototype.satisfyNonPersistentDependency = function (a) {
      var b = this.$4.get(a) === 1;
      b || this.$4.set(a, 1);
      this.$6(a);
      b || this.$4['delete'](a);
    };
    a.prototype.registerCallback = function (a, c) {
      __p && __p();
      var d = this.$3;
      this.$3++;
      c = this.$5(d, c);
      if (c === 0) {
        b('ErrorUtils').applyWithGuard(a);
        return null;
      }
      this.$2.set(d, { $8: a, $7: c });
      return d;
    };
    a.prototype.unsatisfyPersistentDependency = function (a) {
      this.$4['delete'](a);
    };
    e.exports = a;
  },
  null
);
__d(
  'EventSubscription',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      this.subscriber = a;
    }
    a.prototype.remove = function () {
      this.subscriber &&
        (this.subscriber.removeSubscription(this), (this.subscriber = null));
    };
    e.exports = a;
  },
  null
);
__d(
  'EmitterSubscription',
  ['EventSubscription'],
  function (a, b, c, d, e, f) {
    var g;
    c = babelHelpers.inherits(a, b('EventSubscription'));
    g = c && c.prototype;
    function a(a, b, c) {
      g.constructor.call(this, a), (this.listener = b), (this.context = c);
    }
    e.exports = a;
  },
  null
);
__d(
  'EventSubscriptionVendor',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a() {
      this.$1 = {};
    }
    a.prototype.addSubscription = function (a, b) {
      b.subscriber === this || g(0, undefined);
      this.$1[a] || (this.$1[a] = []);
      var c = this.$1[a].length;
      this.$1[a].push(b);
      b.eventType = a;
      b.key = c;
      return b;
    };
    a.prototype.removeAllSubscriptions = function (a) {
      a === undefined ? (this.$1 = {}) : delete this.$1[a];
    };
    a.prototype.removeSubscription = function (a) {
      var b = a.eventType;
      a = a.key;
      b = this.$1[b];
      b && delete b[a];
    };
    a.prototype.getSubscriptionsForType = function (a) {
      return this.$1[a];
    };
    e.exports = a;
  },
  null
);
__d(
  'BaseEventEmitter',
  [
    'invariant',
    'EmitterSubscription',
    'ErrorUtils',
    'EventSubscriptionVendor',
    'emptyFunction',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a() {
      (this.$2 = new (b('EventSubscriptionVendor'))()), (this.$1 = null);
    }
    a.prototype.addListener = function (a, c, d) {
      return this.$2.addSubscription(
        a,
        new (b('EmitterSubscription'))(this.$2, c, d)
      );
    };
    a.prototype.once = function (a, b, c) {
      var d = this;
      return this.addListener(a, function () {
        d.removeCurrentListener(), b.apply(c, arguments);
      });
    };
    a.prototype.removeAllListeners = function (a) {
      this.$2.removeAllSubscriptions(a);
    };
    a.prototype.removeCurrentListener = function () {
      !this.$1 && g(0, undefined), this.$2.removeSubscription(this.$1);
    };
    a.prototype.listeners = function (a) {
      a = this.$2.getSubscriptionsForType(a);
      return a
        ? a.filter(b('emptyFunction').thatReturnsTrue).map(function (a) {
            return a.listener;
          })
        : [];
    };
    a.prototype.emit = function (a) {
      __p && __p();
      var b = this.$2.getSubscriptionsForType(a);
      if (b) {
        var c = Object.keys(b),
          d;
        for (var e = 0; e < c.length; e++) {
          var f = c[e],
            g = b[f];
          if (g) {
            this.$1 = g;
            if (d == null) {
              d = [g, a];
              for (
                var h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1;
                h < i;
                h++
              )
                d[h + 2] =
                  h + 1 < 1 || arguments.length <= h + 1
                    ? undefined
                    : arguments[h + 1];
            } else d[0] = g;
            this.__emitToSubscription.apply(this, d);
          }
        }
        this.$1 = null;
      }
    };
    a.prototype.__emitToSubscription = function (a, c) {
      for (
        var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2;
        f < d;
        f++
      )
        e[f - 2] = arguments[f];
      b('ErrorUtils').applyWithGuard(
        a.listener,
        a.context,
        e,
        null,
        'EventEmitter ' + c + ' event'
      );
    };
    e.exports = a;
  },
  null
);
__d(
  'EventEmitter',
  ['BaseEventEmitter'],
  function (a, b, c, d, e, f) {
    var g;
    g = babelHelpers.inherits(a, b('BaseEventEmitter'));
    g && g.prototype;
    function a() {
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'EventEmitterWithHolding',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b) {
      (this.$1 = a),
        (this.$2 = b),
        (this.$3 = null),
        (this.$4 = []),
        (this.$5 = 0);
    }
    a.prototype.addListener = function (a, b, c) {
      return this.$1.addListener(a, b, c);
    };
    a.prototype.once = function (a, b, c) {
      return this.$1.once(a, b, c);
    };
    a.prototype.addRetroactiveListener = function (a, b, c) {
      var d = this.$1.addListener(a, b, c),
        e = this.$4;
      e.push(!1);
      this.$5++;
      this.$2.emitToListener(a, b, c);
      this.$5--;
      e[e.length - 1] && d.remove();
      e.pop();
      return d;
    };
    a.prototype.removeAllListeners = function (a) {
      this.$1.removeAllListeners(a);
    };
    a.prototype.removeCurrentListener = function () {
      if (this.$5) {
        var a = this.$4;
        a[a.length - 1] = !0;
      } else this.$1.removeCurrentListener();
    };
    a.prototype.listeners = function (a) {
      return this.$1.listeners(a);
    };
    a.prototype.emit = function (a, b, c, d, e, f, g) {
      this.$1.emit(a, b, c, d, e, f, g);
    };
    a.prototype.emitAndHold = function (a, b, c, d, e, f, g) {
      (this.$3 = this.$2.holdEvent(a, b, c, d, e, f, g)),
        this.$1.emit(a, b, c, d, e, f, g),
        (this.$3 = null);
    };
    a.prototype.releaseCurrentEvent = function () {
      this.$3 !== null
        ? this.$2.releaseEvent(this.$3)
        : this.$5 && this.$2.releaseCurrentEvent();
    };
    a.prototype.releaseHeldEventType = function (a) {
      this.$2.releaseEventType(a);
    };
    e.exports = a;
  },
  null
);
__d(
  'EventHolder',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a() {
      (this.$1 = {}), (this.$2 = []);
    }
    a.prototype.holdEvent = function (a, b, c, d, e, f, g) {
      this.$1[a] = this.$1[a] || [];
      var h = this.$1[a];
      a = { eventType: a, index: h.length };
      h.push([b, c, d, e, f, g]);
      return a;
    };
    a.prototype.emitToListener = function (a, b, c) {
      var d = this.$1[a];
      if (!d) return;
      d.forEach(
        function (d, e) {
          if (!d) return;
          this.$2.push({ eventType: a, index: e });
          b.apply(c, d);
          this.$2.pop();
        }.bind(this)
      );
    };
    a.prototype.releaseCurrentEvent = function () {
      this.$2.length || g(0, undefined),
        this.releaseEvent(this.$2[this.$2.length - 1]);
    };
    a.prototype.releaseEvent = function (a) {
      delete this.$1[a.eventType][a.index];
    };
    a.prototype.releaseEventType = function (a) {
      this.$1[a] = [];
    };
    e.exports = a;
  },
  null
);
__d(
  'Arbiter',
  [
    'invariant',
    'ArbiterToken',
    'CallbackDependencyManager',
    'ErrorUtils',
    'EventEmitter',
    'EventEmitterWithHolding',
    'EventHolder',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    function i(a) {
      return Array.isArray(a) ? a : [a];
    }
    function j(a) {
      return a instanceof k || a === k ? a : k;
    }
    function k() {
      var a = new (b('EventEmitter'))();
      this.$3 = new l();
      this.$2 = new (b('EventEmitterWithHolding'))(a, this.$3);
      this.$1 = new (b('CallbackDependencyManager'))();
      this.$4 = [];
    }
    k.prototype.subscribe = function (a, c, d) {
      __p && __p();
      a = i(a);
      a.forEach(function (a) {
        (a && typeof a === 'string') || g(0, undefined, a);
      });
      typeof c === 'function' || g(0, undefined, c);
      d = d || 'all';
      d === 'new' || d === 'all' || g(0, undefined, d);
      a = a.map(function (a) {
        var b = this.$5.bind(this, c, a);
        b.__SMmeta = c.__SMmeta;
        if (d === 'new') return this.$2.addListener(a, b);
        this.$4.push({});
        a = this.$2.addRetroactiveListener(a, b);
        this.$4.pop();
        return a;
      }, this);
      return new (b('ArbiterToken'))(this, a);
    };
    k.prototype.$5 = function (a, c, d) {
      var e = this.$4[this.$4.length - 1];
      if (e[c] === !1) return;
      a = b('ErrorUtils').applyWithGuard(a, null, [c, d]);
      a === !1 && this.$2.releaseCurrentEvent();
      e[c] = a;
    };
    k.prototype.unsubscribeCurrentSubscription = function () {
      this.$2.removeCurrentListener();
    };
    k.prototype.releaseCurrentPersistentEvent = function () {
      this.$2.releaseCurrentEvent();
    };
    k.prototype.subscribeOnce = function (a, b, c) {
      a = this.subscribe(
        a,
        function (a, c) {
          this.unsubscribeCurrentSubscription();
          return b(a, c);
        }.bind(this),
        c
      );
      return a;
    };
    k.prototype.unsubscribe = function (a) {
      a.isForArbiterInstance(this) || g(0, undefined), a.unsubscribe();
    };
    k.prototype.inform = function (a, b, c) {
      __p && __p();
      var d = Array.isArray(a);
      a = i(a);
      c = c || 'event';
      var e = c === 'state' || c === 'persistent';
      this.$4.push({});
      for (var f = 0; f < a.length; f++) {
        var h = a[f];
        h || g(0, undefined, h);
        this.$3.setHoldingBehavior(h, c);
        this.$2.emitAndHold(h, b);
        this.$6(h, b, e);
      }
      h = this.$4.pop();
      return d ? h : h[a[0]];
    };
    k.prototype.query = function (a) {
      var b = this.$3.getHoldingBehavior(a);
      !b || b === 'state' || g(0, undefined, a);
      b = null;
      this.$3.emitToListener(a, function (a) {
        b = a;
      });
      return b;
    };
    k.prototype.registerCallback = function (a, b) {
      if (typeof a === 'function') return this.$1.registerCallback(a, b);
      else return this.$1.addDependenciesToExistingCallback(a, b);
    };
    k.prototype.$6 = function (a, b, c) {
      if (b === null) return;
      c
        ? this.$1.satisfyPersistentDependency(a)
        : this.$1.satisfyNonPersistentDependency(a);
    };
    k.subscribe = function (a, b, c) {
      return k.prototype.subscribe.apply(j(this), arguments);
    };
    k.unsubscribeCurrentSubscription = function () {
      return k.prototype.unsubscribeCurrentSubscription.apply(j(this));
    };
    k.releaseCurrentPersistentEvent = function () {
      return k.prototype.releaseCurrentPersistentEvent.apply(j(this));
    };
    k.subscribeOnce = function (a, b, c) {
      return k.prototype.subscribeOnce.apply(j(this), arguments);
    };
    k.unsubscribe = function (a) {
      return k.prototype.unsubscribe.apply(j(this), arguments);
    };
    k.inform = function (a, b, c) {
      return k.prototype.inform.apply(j(this), arguments);
    };
    k.query = function (a) {
      return k.prototype.query.apply(j(this), arguments);
    };
    k.registerCallback = function (a, b) {
      return k.prototype.registerCallback.apply(j(this), arguments);
    };
    k.$6 = function (a, b, c) {
      return k.prototype.$6.apply(j(this), arguments);
    };
    k.$5 = function (a, b, c) {
      return k.prototype.$5.apply(j(this), arguments);
    };
    k.BEHAVIOR_EVENT = 'event';
    k.BEHAVIOR_PERSISTENT = 'persistent';
    k.BEHAVIOR_STATE = 'state';
    k.SUBSCRIBE_ALL = 'all';
    k.SUBSCRIBE_NEW = 'new';
    a = babelHelpers.inherits(l, b('EventHolder'));
    h = a && a.prototype;
    function l() {
      h.constructor.call(this), (this.$ArbiterEventHolder1 = {});
    }
    l.prototype.setHoldingBehavior = function (a, b) {
      this.$ArbiterEventHolder1[a] = b;
    };
    l.prototype.getHoldingBehavior = function (a) {
      return this.$ArbiterEventHolder1[a];
    };
    l.prototype.holdEvent = function (a, b, c, d, e) {
      var f = this.$ArbiterEventHolder1[a];
      f !== 'persistent' && this.$ArbiterEventHolder2(a);
      return f !== 'event' ? h.holdEvent.call(this, a, b, c, d, e) : undefined;
    };
    l.prototype.$ArbiterEventHolder2 = function (a) {
      this.emitToListener(a, this.releaseCurrentEvent, this);
    };
    l.prototype.releaseEvent = function (a) {
      a && h.releaseEvent.call(this, a);
    };
    k.call(k);
    e.exports = k;
  },
  null
);
__d(
  'CSRFGuard',
  [],
  function (a, b, c, d, e, f) {
    a = 'for (;;);';
    var g = /^for ?\(;;\);/;
    b = {
      length: a.length,
      regex: g,
      exists: function (a) {
        return !!a.match(g);
      },
      clean: function (a) {
        var b = a.match(g);
        return b ? a.substr(b[0].length) : b;
      },
    };
    e.exports = b;
  },
  null
);
__d(
  'CircularBuffer',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      a > 0 || g(0, undefined),
        (this.$1 = a),
        (this.$2 = 0),
        (this.$3 = []),
        (this.$4 = []);
    }
    a.prototype.write = function (a) {
      this.$3.length < this.$1
        ? this.$3.push(a)
        : (this.$4.forEach(
            function (a) {
              return a(this.$3[this.$2]);
            }.bind(this)
          ),
          (this.$3[this.$2] = a),
          this.$2++,
          (this.$2 %= this.$1));
      return this;
    };
    a.prototype.onEvict = function (a) {
      this.$4.push(a);
      return this;
    };
    a.prototype.read = function () {
      return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2));
    };
    a.prototype.expand = function (a) {
      if (a > this.$1) {
        var b = this.read();
        this.$2 = 0;
        this.$3 = b;
        this.$1 = a;
      }
      return this;
    };
    a.prototype.dropFirst = function (a) {
      if (a <= this.$1) {
        var b = this.read();
        this.$2 = 0;
        b.splice(0, a);
        this.$3 = b;
      }
      return this;
    };
    a.prototype.clear = function () {
      this.$2 = 0;
      this.$3 = [];
      return this;
    };
    a.prototype.currentSize = function () {
      return this.$3.length;
    };
    e.exports = a;
  },
  null
);
__d(
  'ResourceTypes',
  [],
  function (a, b, c, d, e, f) {
    a = { JS: 'js', CSS: 'css', XHR: 'xhr' };
    e.exports = a;
  },
  null
);
__d(
  'TimingAnnotations',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a.prototype.addStringAnnotation = function (a, b) {
      return this;
    };
    a.prototype.addSetAnnotation = function (a, b) {
      return this;
    };
    a.prototype.addSetElement = function (a, b) {
      return this;
    };
    a.prototype.registerOnBeforeSend = function (a) {
      return this;
    };
    a.prototype.addVectorAnnotation = function (a, b) {
      return this;
    };
    a.prototype.addVectorElement = function (a, b) {
      return this;
    };
    function a() {}
    function b() {
      (this.$1 = null), (this.$2 = null), (this.$3 = null), (this.$4 = []);
    }
    b.prototype.addStringAnnotation = function (a, b) {
      this.$2 = this.$2 || new Map();
      this.$2.set(a, b);
      return this;
    };
    b.prototype.addSetAnnotation = function (a, b) {
      var c = this.$1 || new Map(),
        d = c.get(a) || new Set();
      b.forEach(function (a) {
        return d.add(a);
      });
      c.set(a, d);
      this.$1 = c;
      return this;
    };
    b.prototype.addSetElement = function (a, b) {
      var c = this.$1 || new Map(),
        d = c.get(a) || new Set();
      d.add(b);
      c.set(a, d);
      this.$1 = c;
      return this;
    };
    b.prototype.addVectorAnnotation = function (a, b) {
      this.$3 = this.$3 || new Map();
      this.$3.set(a, b);
      return this;
    };
    b.prototype.addVectorElement = function (a, b) {
      var c = (this.$3 = this.$3 || new Map()),
        d = this.$3.get(a) || [];
      d.push(b);
      c.set(a, d);
      return this;
    };
    b.prototype.registerOnBeforeSend = function (a) {
      this.$4.push(a);
      return this;
    };
    b.prototype.prepareToSend = function () {
      __p && __p();
      this.$4.forEach(
        function (a) {
          return a(this);
        }.bind(this)
      );
      this.$4 = [];
      var a = {};
      if (this.$1 != null)
        for (
          var b = this.$1,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          a[f] = Array.from(e.values());
        }
      f = {};
      if (this.$2 != null)
        for (
          var e = this.$2,
            d = Array.isArray(e),
            c = 0,
            e = d
              ? e
              : e[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (d) {
            if (c >= e.length) break;
            b = e[c++];
          } else {
            c = e.next();
            if (c.done) break;
            b = c.value;
          }
          b = b;
          var g = b[0];
          b = b[1];
          f[g] = b;
        }
      g = {};
      if (this.$3 != null)
        for (
          var b = this.$3,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var h = e[0];
          e = e[1];
          g[h] = e;
        }
      return { setProps: a, stringProps: f, vectorProps: g };
    };
    b.combine = function (a, b) {
      var c;
      a != null && b != null
        ? ((a.stringProps = babelHelpers['extends'](
            {},
            b.stringProps,
            a.stringProps
          )),
          (a.setProps = babelHelpers['extends']({}, b.setProps, a.setProps)),
          (c = a))
        : a != null
        ? (c = a)
        : b != null && (c = b);
      return c;
    };
    b.EmptyTimingAnnotations = a;
    b.EmptyTraceTimingAnnotations = a;
    b.TraceTimingAnnotations = b;
    e.exports = b;
  },
  null
);
__d(
  'flattenPHPQueryData',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      return h(a, '', {});
    }
    function h(a, b, c) {
      if (a === null || a === undefined) c[b] = undefined;
      else if (typeof a === 'object') {
        typeof a.appendChild !== 'function' || g(0, undefined);
        for (var d in a)
          d !== '$$typeof' &&
            Object.prototype.hasOwnProperty.call(a, d) &&
            a[d] !== undefined &&
            h(a[d], b ? b + '[' + d + ']' : d, c);
      } else c[b] = a;
      return c;
    }
    e.exports = a;
  },
  null
);
__d(
  'PHPQuerySerializer',
  ['invariant', 'flattenPHPQueryData'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      var c = [];
      a = b('flattenPHPQueryData')(a);
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          var e = h(d);
          a[d] === undefined ? c.push(e) : c.push(e + '=' + h(String(a[d])));
        }
      return c.join('&');
    }
    function h(a) {
      return encodeURIComponent(a).replace(/%5D/g, ']').replace(/%5B/g, '[');
    }
    var i = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
    function j(a) {
      return a === 'hasOwnProperty' || a === '__proto__' ? '\ud83d\udf56' : a;
    }
    function c(a) {
      __p && __p();
      if (!a) return {};
      var b = {};
      a = a.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
      a = a.split('&');
      var c = Object.prototype.hasOwnProperty;
      for (var d = 0, e = a.length; d < e; d++) {
        var f = a[d].match(i);
        if (!f) {
          var g = a[d].split('=');
          b[k(g[0])] = g[1] === undefined ? null : k(g[1]);
        } else {
          g = f[2].split(/\]\[|\[|\]/).slice(0, -1);
          var h = f[1];
          f = k(f[3] || '');
          g[0] = h;
          h = b;
          for (var l = 0; l < g.length - 1; l++) {
            var m = j(g[l]);
            if (m) {
              if (!c.call(h, m)) {
                var n = g[l + 1] && !g[l + 1].match(/^\d{1,3}$/) ? {} : [];
                h[m] = n;
                if (h[m] !== n) return b;
              }
              h = h[m];
            } else
              g[l + 1] && !g[l + 1].match(/^\d{1,3}$/)
                ? h.push({})
                : h.push([]),
                (h = h[h.length - 1]);
          }
          h instanceof Array && g[g.length - 1] === ''
            ? h.push(f)
            : (h[j(g[g.length - 1])] = f);
        }
      }
      return b;
    }
    function k(a) {
      try {
        return decodeURIComponent(a.replace(/\+/g, ' '));
      } catch (b) {
        return a;
      }
    }
    d = {
      serialize: a,
      encodeComponent: h,
      deserialize: c,
      decodeComponent: k,
    };
    e.exports = d;
  },
  null
);
__d(
  'ReloadPage',
  [],
  function (a, b, c, d, e, f) {
    b = {
      now: function (b) {
        a.window.location.reload(b);
      },
      delay: function (b) {
        a.setTimeout(this.now.bind(this), b);
      },
    };
    e.exports = b;
  },
  null
);
__d(
  'FBLoggerMetadata',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [];
    function a() {
      this.metadata = [].concat(g);
    }
    a.prototype.addMetadata = function (a, b, c) {
      this.metadata.push([a, b, c]);
      return this;
    };
    a.prototype.isEmpty = function () {
      return this.metadata.length === 0;
    };
    a.prototype.getAll = function () {
      __p && __p();
      var a = [],
        b = this.metadata.filter(function (b) {
          if (b == null) return !1;
          var c = b.filter(function (a) {
            return a && a.indexOf(':') > -1;
          });
          if (c.length > 0) {
            a.push(b);
            return !1;
          }
          return !0;
        });
      return { invalidMetadata: a, validMetadata: b };
    };
    a.addGlobalMetadata = function (a, b, c) {
      g.push([a, b, c]);
    };
    e.exports = a;
  },
  null
);
__d(
  'FBLogMessage',
  [
    'ErrorUtils',
    'FBLoggerMetadata',
    'TAAL',
    'TAALOpcodes',
    'erx',
    'ex',
    'sprintf',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = { mustfix: 'error', warn: 'warn', info: 'log' },
      h = b('ex'),
      i = function a(b) {
        return function (c) {
          b > 0 && (c(), a(b - 1)(c));
        };
      };
    function j(a) {
      (this.project = a),
        (this.metadata = new (b('FBLoggerMetadata'))()),
        (this.taalOpcodes = []);
    }
    j.prototype.$1 = function (a, c) {
      __p && __p();
      var d = 2;
      if (c === undefined) {
        var e = new j('fblogger');
        i(d)(function () {
          return e.blameToPreviousFrame();
        });
        e.mustfix(
          'You provided an undefined format string to FBLogger, dropping log line'
        );
        return;
      }
      var f;
      for (
        var k = arguments.length, l = new Array(k > 2 ? k - 2 : 0), m = 2;
        m < k;
        m++
      )
        l[m - 2] = arguments[m];
      if (this.error) {
        f = this.error;
        var n = c + ' from %s: %s';
        l.push(f.name);
        l.push(f.message ? b('sprintf').apply(null, b('erx')(f.message)) : '');
        f.message = h.apply(undefined, [n].concat(l));
      } else {
        i(d)(
          function () {
            return this.taalOpcodes.unshift(b('TAALOpcodes').previousFrame());
          }.bind(this)
        );
        if (this.taalOpcodes) {
          var o = b('TAAL').applyOpcodes(c, this.taalOpcodes);
          f = new Error(h.apply(undefined, [o].concat(l)));
        } else f = new Error(h.apply(undefined, [c].concat(l)));
      }
      if (this.error && f.name.startsWith('<level:')) {
        var p = new j('fblogger');
        i(d)(function () {
          return p.blameToPreviousFrame();
        });
        p.warn('Double logging detected');
      }
      var q = 'FBLogger' + (this.error ? ' caught ' + f.name : '');
      f.name = b('sprintf')('<level:%s> <name:%s> %s', a, this.project, q);
      f = b('ErrorUtils').normalizeError(f);
      if (!this.metadata.isEmpty()) {
        var r = this.metadata.getAll(),
          s = r.invalidMetadata,
          t = r.validMetadata;
        if (s.length > 0) {
          var u = new j('fblogger');
          i(d)(function () {
            return u.blameToPreviousFrame();
          });
          u.warn(
            'Metadata cannot contain colon %s',
            s
              .map(function (a) {
                return a.join(':');
              })
              .join(' ')
          );
        }
        f.fbloggerMetadata = t.map(function (a) {
          return a.join(':');
        });
      }
      var v = g[a];
      f.type = v;
      if (this.error && this.taalOpcodes && this.taalOpcodes.length) {
        var w = new j('fblogger');
        i(d)(function () {
          return w.blameToPreviousFrame();
        });
        w.warn('Blame helpers do not work with catching');
      }
      b('ErrorUtils').reportError(f, !1, 'FBLOGGER');
    };
    j.prototype.mustfix = function (a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      this.$1.apply(this, ['mustfix', a].concat(c));
    };
    j.prototype.warn = function (a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      this.$1.apply(this, ['warn', a].concat(c));
    };
    j.prototype.info = function (a) {};
    j.prototype.debug = function (a) {};
    j.prototype.catching = function (a) {
      !(a instanceof Error)
        ? new j('fblogger')
            .blameToPreviousFrame()
            .warn('Catching non-Error object is not supported')
        : (this.error = a);
      return this;
    };
    j.prototype.blameToPreviousFile = function () {
      this.taalOpcodes.push(b('TAALOpcodes').previousFile());
      return this;
    };
    j.prototype.blameToPreviousFrame = function () {
      this.taalOpcodes.push(b('TAALOpcodes').previousFrame());
      return this;
    };
    j.prototype.blameToPreviousDirectory = function () {
      this.taalOpcodes.push(b('TAALOpcodes').previousDirectory());
      return this;
    };
    j.prototype.addMetadata = function (a, b, c) {
      this.metadata.addMetadata(a, b, c);
      return this;
    };
    e.exports = j;
  },
  null
);
__d(
  'FBLogger',
  ['FBLoggerMetadata', 'FBLogMessage'],
  function (a, b, c, d, e, f) {
    a = function (a) {
      return new (b('FBLogMessage'))(a);
    };
    a.addGlobalMetadata = function (a, c, d) {
      b('FBLoggerMetadata').addGlobalMetadata(a, c, d);
    };
    e.exports = a;
  },
  null
);
__d(
  'URIRFC3986',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = new RegExp(
      '^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?'
    );
    a = {
      parse: function (a) {
        __p && __p();
        if (a.trim() === '') return null;
        a = a.match(g);
        if (a == null) return null;
        var b = {};
        b.uri = a[0] ? a[0] : null;
        b.scheme = a[1] ? a[1].substr(0, a[1].length - 1) : null;
        b.authority = a[2] ? a[2].substr(2) : null;
        b.userinfo = a[3] ? a[3].substr(0, a[3].length - 1) : null;
        b.host = a[2] ? a[4] : null;
        b.port = a[5]
          ? a[5].substr(1)
            ? parseInt(a[5].substr(1), 10)
            : null
          : null;
        b.path = a[6] ? a[6] : null;
        b.query = a[7] ? a[7].substr(1) : null;
        b.fragment = a[8] ? a[8].substr(1) : null;
        b.isGenericURI = b.authority === null && !!b.scheme;
        return b;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'createObjectFrom',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b) {
      if (b === undefined) return g(a, !0);
      var c = {};
      if (Array.isArray(b))
        for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
      else for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
      return c;
    }
    e.exports = g;
  },
  null
);
__d(
  'URISchemes',
  ['createObjectFrom'],
  function (a, b, c, d, e, f) {
    var g = b('createObjectFrom')([
      'blob',
      'cmms',
      'fb',
      'fba',
      'fbatwork',
      'fb-ama',
      'fb-workchat',
      'fb-workchat-secure',
      'fb-messenger',
      'fb-messenger-public',
      'fb-messenger-group-thread',
      'fb-page-messages',
      'fb-pma',
      'fbcf',
      'fbconnect',
      'fbinternal',
      'fbmobilehome',
      'fbrpc',
      'file',
      'ftp',
      'http',
      'https',
      'mailto',
      'ms-app',
      'intent',
      'itms',
      'itms-apps',
      'itms-services',
      'market',
      'svn+ssh',
      'fbstaging',
      'tel',
      'sms',
      'pebblejs',
      'sftp',
      'whatsapp',
      'moments',
      'flash',
      'fblite',
      'chrome-extension',
      'webcal',
      'fb124024574287414',
      'fb124024574287414rc',
      'fb124024574287414master',
      'fb1576585912599779',
      'fb929757330408142',
      'designpack',
      'fbpixelcloud',
      'fbapi20130214',
      'fb1196383223757595',
      'tbauth',
      'oculus',
      'oculus.store',
      'skype',
      'callto',
      'workchat',
      'fb236786383180508',
      'fb1775440806014337',
      'data',
    ]);
    a = {
      isAllowed: function (a) {
        return !a
          ? !0
          : Object.prototype.hasOwnProperty.call(g, a.toLowerCase());
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'setHostSubdomain',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      a = a.split('.');
      a.length < 3 ? a.unshift(b) : (a[0] = b);
      return a.join('.');
    }
    e.exports = a;
  },
  null
);
__d(
  'URIBase',
  [
    'invariant',
    'FBLogger',
    'URIRFC3986',
    'URISchemes',
    'ex',
    'setHostSubdomain',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = new RegExp(
        '[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]'
      ),
      i = new RegExp('^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)');
    function j(a, c, d, e) {
      __p && __p();
      if (!c) return !0;
      if (c instanceof l) {
        a.setProtocol(c.getProtocol());
        a.setDomain(c.getDomain());
        a.setPort(c.getPort());
        a.setPath(c.getPath());
        a.setQueryData(e.deserialize(e.serialize(c.getQueryData())));
        a.setFragment(c.getFragment());
        a.setIsGeneric(c.getIsGeneric());
        a.setForceFragmentSeparator(c.getForceFragmentSeparator());
        return !0;
      }
      c = c.toString().trim();
      var f = b('URIRFC3986').parse(c) || { fragment: null, scheme: null };
      if (!d && !b('URISchemes').isAllowed(f.scheme)) return !1;
      a.setProtocol(f.scheme || '');
      if (!d && h.test(f.host || '')) return !1;
      a.setDomain(f.host || '');
      a.setPort(f.port || '');
      a.setPath(f.path || '');
      if (d) a.setQueryData(e.deserialize(f.query || '') || {});
      else
        try {
          a.setQueryData(e.deserialize(f.query || '') || {});
        } catch (a) {
          return !1;
        }
      a.setFragment(f.fragment || '');
      f.fragment === '' && a.setForceFragmentSeparator(!0);
      a.setIsGeneric(f.isGenericURI || !1);
      if (f.userinfo !== null)
        if (d)
          throw new Error(
            b('ex')(
              'URI.parse: invalid URI (userinfo is not allowed in a URI): %s',
              a.toString()
            )
          );
        else return !1;
      if (!a.getDomain() && a.getPath().indexOf('\\') !== -1)
        if (d)
          throw new Error(
            b('ex')(
              'URI.parse: invalid URI (no domain but multiple back-slashes): %s',
              a.toString()
            )
          );
        else return !1;
      if (!a.getProtocol() && i.test(c))
        if (d)
          throw new Error(
            b('ex')(
              'URI.parse: invalid URI (unsafe protocol-relative URLs): %s',
              a.toString()
            )
          );
        else return !1;
      if (a.getDomain() && a.getPath() && !a.getPath().startsWith('/'))
        if (d)
          throw new Error(
            b('ex')(
              'URI.parse: invalid URI (domain and path where path lacks leading slash): %s',
              a.toString()
            )
          );
        else return !1;
      return !0;
    }
    var k = [];
    l.tryParse = function (a, b) {
      var c = new l(null, b);
      return j(c, a, !1, b) ? c : null;
    };
    l.isValid = function (a, b) {
      return !!l.tryParse(a, b);
    };
    function l(a, b) {
      b || g(0, undefined),
        (this.$9 = b),
        (this.$7 = ''),
        (this.$1 = ''),
        (this.$6 = ''),
        (this.$5 = ''),
        (this.$3 = ''),
        (this.$4 = !1),
        (this.$8 = {}),
        (this.$2 = !1),
        j(this, a, !0, b);
    }
    l.prototype.setProtocol = function (a) {
      b('URISchemes').isAllowed(a) ||
        (b('FBLogger')('uri').mustfix(
          'You attempted to set the protocol of a URI to `%s`. That protocol does not pass the `URISchemes.isAllowed` test.',
          a
        ),
        g(0, undefined, a));
      this.$7 = a;
      return this;
    };
    l.prototype.getProtocol = function () {
      return (this.$7 || '').toLowerCase();
    };
    l.prototype.setSecure = function (a) {
      return this.setProtocol(a ? 'https' : 'http');
    };
    l.prototype.isSecure = function () {
      return this.getProtocol() === 'https';
    };
    l.prototype.setDomain = function (a) {
      if (h.test(a))
        throw new Error(
          b('ex')(
            'URI.setDomain: unsafe domain specified: %s for url %s',
            a,
            this.toString()
          )
        );
      this.$1 = a;
      return this;
    };
    l.prototype.getDomain = function () {
      return this.$1;
    };
    l.prototype.setPort = function (a) {
      this.$6 = a;
      return this;
    };
    l.prototype.getPort = function () {
      return this.$6;
    };
    l.prototype.setPath = function (a) {
      this.$5 = a;
      return this;
    };
    l.prototype.getPath = function () {
      return this.$5;
    };
    l.prototype.addQueryData = function (a, b) {
      Object.prototype.toString.call(a) === '[object Object]'
        ? Object.assign(this.$8, a)
        : (this.$8[a] = b);
      return this;
    };
    l.prototype.setQueryData = function (a) {
      this.$8 = a;
      return this;
    };
    l.prototype.getQueryData = function () {
      return this.$8;
    };
    l.prototype.removeQueryData = function (a) {
      Array.isArray(a) || (a = [a]);
      for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
      return this;
    };
    l.prototype.setFragment = function (a) {
      this.$3 = a;
      this.setForceFragmentSeparator(!1);
      return this;
    };
    l.prototype.getFragment = function () {
      return this.$3;
    };
    l.prototype.setForceFragmentSeparator = function (a) {
      this.$2 = a;
      return this;
    };
    l.prototype.getForceFragmentSeparator = function () {
      return this.$2;
    };
    l.prototype.setIsGeneric = function (a) {
      this.$4 = a;
      return this;
    };
    l.prototype.getIsGeneric = function () {
      return this.$4;
    };
    l.prototype.isEmpty = function () {
      return !(
        this.getPath() ||
        this.getProtocol() ||
        this.getDomain() ||
        this.getPort() ||
        Object.keys(this.getQueryData()).length > 0 ||
        this.getFragment()
      );
    };
    l.prototype.toString = function () {
      var a = this;
      for (var b = 0; b < k.length; b++) a = k[b](a);
      return a.$10();
    };
    l.prototype.$10 = function () {
      __p && __p();
      var a = '',
        b = this.getProtocol();
      b && (a += b + ':' + (this.getIsGeneric() ? '' : '//'));
      b = this.getDomain();
      b && (a += b);
      b = this.getPort();
      b && (a += ':' + b);
      b = this.getPath();
      b ? (a += b) : a && (a += '/');
      b = this.$9.serialize(this.getQueryData());
      b && (a += '?' + b);
      b = this.getFragment();
      b ? (a += '#' + b) : this.getForceFragmentSeparator() && (a += '#');
      return a;
    };
    l.registerFilter = function (a) {
      k.push(a);
    };
    l.prototype.getOrigin = function () {
      var a = this.getPort();
      return this.getProtocol() + '://' + this.getDomain() + (a ? ':' + a : '');
    };
    l.prototype.getQualifiedURIBase = function () {
      return new l(this, this.$9).qualify();
    };
    l.prototype.qualify = function () {
      if (!this.getDomain()) {
        var a = new l(window.location.href, this.$9);
        this.setProtocol(a.getProtocol())
          .setDomain(a.getDomain())
          .setPort(a.getPort());
      }
      return this;
    };
    l.prototype.setSubdomain = function (a) {
      var c = this.qualify().getDomain();
      return this.setDomain(b('setHostSubdomain')(c, a));
    };
    l.prototype.getSubdomain = function () {
      if (!this.getDomain()) return '';
      var a = this.getDomain().split('.');
      if (a.length <= 2) return '';
      else return a[0];
    };
    e.exports = l;
  },
  null
);
__d(
  'areSameOrigin',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      if (a.isEmpty() || b.isEmpty()) return !1;
      if (a.getProtocol() && a.getProtocol() != b.getProtocol()) return !1;
      if (a.getDomain() && a.getDomain() != b.getDomain()) return !1;
      return a.getPort() && a.getPort().toString() !== b.getPort().toString()
        ? !1
        : !0;
    }
    e.exports = a;
  },
  null
);
__d(
  'ifRequired',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      var e;
      d &&
        d.call(null, [a], function (a) {
          e = a;
        });
      if (e && b) return b(e);
      else if (!e && c) return c();
    }
    e.exports = a;
  },
  null
);
__d(
  'isFacebookURI',
  [],
  function (a, b, c, d, e, f) {
    var g = null,
      h = ['http', 'https'];
    function a(a) {
      g || (g = new RegExp('(^|\\.)facebook\\.com$', 'i'));
      if (a.isEmpty() && a.toString() !== '#') return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !0
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    a.setRegex = function (a) {
      g = a;
    };
    e.exports = a;
  },
  null
);
__d(
  'memoize',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = a,
        c;
      return function () {
        arguments.length && g(0, undefined);
        b && ((c = b()), (b = null));
        return c;
      };
    }
    e.exports = a;
  },
  null
);
__d(
  'unqualifyURI',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      a.setProtocol(null).setDomain(null).setPort(null);
    }
    e.exports = a;
  },
  null
);
__d(
  'URI',
  [
    'PHPQuerySerializer',
    'ReloadPage',
    'URIBase',
    'areSameOrigin',
    'ifRequired',
    'isFacebookURI',
    'memoize',
    'unqualifyURI',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = b('memoize')(function () {
        return new j(window.location.href);
      });
    function i() {
      return b('ifRequired')('PageTransitions', function (a) {
        if (a.isInitialized()) return a;
      });
    }
    c = babelHelpers.inherits(j, b('URIBase'));
    g = c && c.prototype;
    function j(a) {
      g.constructor.call(this, a || '', b('PHPQuerySerializer'));
    }
    j.prototype.setPath = function (a) {
      this.path = a;
      return g.setPath.call(this, a);
    };
    j.prototype.getPath = function () {
      var a = g.getPath.call(this);
      return a ? a.replace(/^\/+/, '/') : a;
    };
    j.prototype.setProtocol = function (a) {
      this.protocol = a;
      return g.setProtocol.call(this, a);
    };
    j.prototype.setDomain = function (a) {
      this.domain = a;
      return g.setDomain.call(this, a);
    };
    j.prototype.setPort = function (a) {
      this.port = a;
      return g.setPort.call(this, a);
    };
    j.prototype.setFragment = function (a) {
      this.fragment = a;
      return g.setFragment.call(this, a);
    };
    j.prototype.stripTrailingSlash = function () {
      this.setPath(this.getPath().replace(/\/$/, ''));
      return this;
    };
    j.prototype.valueOf = function () {
      return this.toString();
    };
    j.prototype.isSubdomainOfDomain = function (a) {
      __p && __p();
      var b = this.getDomain();
      if (a === '' || b === '') return !1;
      if (b.endsWith(a)) {
        var c = b.length,
          d = a.length,
          e = c - d - 1;
        if (c === d || b[e] === '.') return j.isValidURI(a);
      }
      return !1;
    };
    j.prototype.getRegisteredDomain = function () {
      if (!this.getDomain()) return '';
      if (!b('isFacebookURI')(this)) return null;
      var a = this.getDomain().split('.'),
        c = a.indexOf('facebook');
      c === -1 && (c = a.indexOf('workplace'));
      return a.slice(c).join('.');
    };
    j.prototype.getUnqualifiedURI = function () {
      var a = new j(this);
      b('unqualifyURI')(a);
      return a;
    };
    j.prototype.getQualifiedURI = function () {
      return new j(this).qualify();
    };
    j.prototype.isSameOrigin = function (a) {
      a = a;
      !a ? (a = h()) : a instanceof j || (a = new j(a.toString()));
      return b('areSameOrigin')(this, a);
    };
    j.go = function (a, b, c) {
      j.goURIOnWindow(a, window, b, c);
    };
    j.goURIOnWindow = function (c, d, e, f) {
      c = new j(c);
      var g = c.toString();
      c = d ? d : window;
      b('ifRequired')('PageNavigationStageLogger', function (b) {
        e ? b.setNote('force') : a.PageTransitions || b.setNote('no_pagetrans'),
          b.setCookieForNavigation(g);
      });
      !e && a.PageTransitions
        ? a.PageTransitions.go(g, f)
        : window.location.href === g
        ? b('ReloadPage').now()
        : f
        ? c.location.replace(g)
        : (c.location.href = g);
    };
    j.prototype.go = function (a, b) {
      j.go(this, a, b);
    };
    j.tryParseURI = function (a) {
      a = b('URIBase').tryParse(a, b('PHPQuerySerializer'));
      return a ? new j(a) : null;
    };
    j.isValidURI = function (a) {
      return b('URIBase').isValid(a, b('PHPQuerySerializer'));
    };
    j.getRequestURI = function (a, b) {
      a = a === undefined || a;
      if (a) {
        a = i();
        if (a) return a.getCurrentURI(!!b).getQualifiedURI();
      }
      return new j(window.location.href);
    };
    j.getMostRecentURI = function () {
      var a = i();
      return a
        ? a.getMostRecentURI().getQualifiedURI()
        : new j(window.location.href);
    };
    j.getNextURI = function () {
      var a = i();
      return a ? a.getNextURI().getQualifiedURI() : new j(window.location.href);
    };
    j.encodeComponent = function (a) {
      return encodeURIComponent(a).replace(/%5D/g, ']').replace(/%5B/g, '[');
    };
    j.decodeComponent = function (a) {
      return decodeURIComponent(a.replace(/\+/g, ' '));
    };
    Object.assign(j, {
      expression:
        /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,
      arrayQueryExpression: /^(\w+)((?:\[\w*\])+)=?(.*)/,
    });
    e.exports = j;
  },
  null
);
__d(
  'performance',
  ['ExecutionEnvironment'],
  function (a, b, c, d, e, f) {
    var g;
    b('ExecutionEnvironment').canUseDOM &&
      (g =
        window.performance || window.msPerformance || window.webkitPerformance);
    e.exports = g || {};
  },
  null
);
__d(
  'performanceAbsoluteNow',
  ['performance'],
  function (a, b, c, d, e, f) {
    if (
      b('performance').now &&
      b('performance').timing &&
      b('performance').timing.navigationStart
    ) {
      var g = b('performance').timing.navigationStart;
      a = function () {
        return b('performance').now() + g;
      };
    } else
      a = function () {
        return Date.now();
      };
    e.exports = a;
  },
  null
);
__d(
  'ResourceTimingsStore',
  [
    'CircularBuffer',
    'ResourceTypes',
    'TimingAnnotations',
    'URI',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 1e3,
      h = new (b('TimingAnnotations').EmptyTimingAnnotations)(),
      i = {},
      j = {};
    Object.keys(b('ResourceTypes')).forEach(function (a) {
      a = b('ResourceTypes')[a];
      var c = new (b('CircularBuffer'))(g),
        d = new Map();
      c.onEvict(function (a) {
        return d['delete'](a);
      });
      i[a] = { idx: 1, entries: c };
      j[a] = d;
    });
    function k(a, c, d) {
      __p && __p();
      var e;
      switch (a) {
        case 'css':
        case 'js':
          var f = l.parseMakeHasteURL(c);
          f = f == null ? 'unknown_resource' : f[0];
          e = d + '_' + f;
          break;
        case 'xhr':
          f = new (b('URI'))(c).getQualifiedURI();
          c = f.getDomain() + f.getPath();
          e = d + '_' + c;
          break;
        default:
          a, (e = 'never here');
      }
      return e;
    }
    var l = {
      getUID: function (a, b) {
        var c = i[a],
          d = k(a, b, c.idx);
        c.entries.write(d);
        j[a].set(d, { uri: b, uid: d });
        c.idx++;
        return d;
      },
      updateURI: function (a, b, c) {
        a = j[a].get(b);
        a != null && (a.uri = c);
      },
      getMapFor: function (a) {
        return j[a];
      },
      parseMakeHasteURL: function (a) {
        a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
        if (!a) return null;
        a = a[1];
        var b = '',
          c = a.match(/\.(\w+)$/);
        c && (b = c[1]);
        return [a, b];
      },
      measureRequestSent: function (a, c) {
        a = j[a];
        a = a.get(c);
        if (a == null || a.requestSent != null) return;
        else a.requestSent = b('performanceAbsoluteNow')();
      },
      measureResponseReceived: function (a, c) {
        a = j[a];
        a = a.get(c);
        if (a == null || a.requestSent == null || a.responseReceived != null)
          return;
        else a.responseReceived = b('performanceAbsoluteNow')();
      },
      annotate: function (a, c) {
        __p && __p();
        a = j[a];
        a = a.get(c);
        if (!a) return h;
        else {
          c = a.annotations;
          if (c != null) return c;
          else {
            c = new (b('TimingAnnotations'))();
            a.annotations = c;
            return c;
          }
        }
      },
      getAnnotationsFor: function (a, b) {
        a = j[a];
        a = a.get(b);
        if (!a) return null;
        else {
          b = a.annotations;
          return b != null ? b.prepareToSend() : null;
        }
      },
    };
    e.exports = l;
  },
  null
);
__d(
  'ExecutionContextObservers',
  [],
  function (a, b, c, d, e, f) {
    a = {
      MUTATION_COUNTING: 0,
      PROFILING_COUNTERS: 1,
      REFERENCE_COUNTING: 2,
      HEARTBEAT: 3,
      CALL_STACK: 4,
      ASYNC_PROFILER: 5,
      TIMESLICE_EXECUTION_LOGGER: 6,
    };
    b = {
      MUTATION_COUNTING: 0,
      REFERENCE_COUNTING: 1,
      PROFILING_COUNTERS: 2,
      HEARTBEAT: 3,
      CALL_STACK: 4,
      ASYNC_PROFILER: 5,
      TIMESLICE_EXECUTION_LOGGER: 6,
    };
    c = { beforeIDs: a, afterIDs: b };
    e.exports = c;
  },
  null
);
__d(
  'uniqueID',
  [],
  function (a, b, c, d, e, f) {
    var g = 'js_',
      h = 36,
      i = 0;
    function a() {
      return g + (i++).toString(h);
    }
    e.exports = a;
  },
  null
);
__d(
  'CallStackExecutionObserver',
  ['ExecutionContextObservers', 'ifRequired', 'uniqueID'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null;
    function h(event, a) {
      __p && __p();
      if (a) {
        var b = a.id,
          c = a.name;
        a = a.interactions;
        var d = Error.stackTraceLimit;
        Error.stackTraceLimit = 1e3;
        var e = new Error().stack;
        Error.stackTraceLimit = d;
        a.forEach(function (a) {
          a.inform(event + ':' + c, { rawStackTrace: e }).addStringAnnotation(
            'id',
            b
          );
        });
      }
    }
    a = {
      onNewContextCreated: function (a, c, d) {
        __p && __p();
        a = b('ifRequired')('TimeSliceAutoclosedInteraction', function (a) {
          return a;
        });
        a = a ? a.getInteractionsActiveRightNow() : [];
        a = a.filter(function (a) {
          return a.isEnabledForMode('full');
        });
        if (d && d.isContinuation && a.length) {
          var e = b('uniqueID')();
          d = Error.stackTraceLimit;
          Error.stackTraceLimit = 1e3;
          var f = new Error().stack;
          Error.stackTraceLimit = d;
          a.forEach(function (a) {
            var b = a
              .inform('created_continuation:' + c, { rawStackTrace: f })
              .addStringAnnotation('id', e);
            g && b.addStringAnnotation('parentID', g);
            a.trace().addStringAnnotation('has_stack_trace', '1');
          });
          return { id: e, parentID: g, name: c, interactions: a };
        }
        return null;
      },
      onContextCanceled: function (a, b) {
        h('cancelling_continuation', b);
      },
      onBeforeContextStarted: function (a, b, c) {
        a = g;
        b && b.id && (g = b.id);
        return { executionParentID: a };
      },
      onAfterContextStarted: function (a, b, c, d) {
        h('executing_continuation', b);
        return c;
      },
      onAfterContextEnded: function (a, b, c, d) {
        c && (g = c.executionParentID), h('executing_continuation_end', b);
      },
      getBeforeID: function () {
        return b('ExecutionContextObservers').beforeIDs.CALL_STACK;
      },
      getAfterID: function () {
        return b('ExecutionContextObservers').afterIDs.CALL_STACK;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'IntervalTrackingBoundedBuffer',
  ['CircularBuffer', 'ErrorUtils'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 5e3;
    function a(a) {
      __p && __p();
      this.$6 = 0;
      if (a != null) {
        if (a <= 0)
          throw new Error('Size for a buffer must be greater than zero.');
      } else a = g;
      this.$4 = a;
      this.$1 = new (b('CircularBuffer'))(a);
      this.$1.onEvict(
        function () {
          return this.$6++;
        }.bind(this)
      );
      this.$2 = [];
      this.$3 = 1;
      this.$5 = 0;
    }
    a.prototype.open = function () {
      __p && __p();
      var a = this.$3++,
        b = !1,
        c,
        d = this.$5,
        e = {
          id: a,
          startIdx: d,
          hasOverflown: function () {
            return e.getOverflowSize() > 0;
          },
          getOverflowSize: function () {
            return c != null ? c : Math.max(this.$6 - d, 0);
          }.bind(this),
          close: function () {
            if (b) return [];
            else {
              b = !0;
              c = this.$6 - d;
              return this.$7(a);
            }
          }.bind(this),
        };
      this.$2.push(e);
      return e;
    };
    a.prototype.pushElement = function (a) {
      this.$2.length > 0 && (this.$1.write(a), this.$5++);
      return this;
    };
    a.prototype.isActive = function () {
      return this.$2.length > 0;
    };
    a.prototype.$8 = function (a) {
      return Math.max(a - this.$6, 0);
    };
    a.prototype.$7 = function (a) {
      __p && __p();
      var c, d, e, f;
      for (var g = 0; g < this.$2.length; g++) {
        var h = this.$2[g],
          i = h.startIdx;
        h = h.id;
        h === a ? ((e = g), (f = i)) : (d == null || i < d) && (d = i);
        (c == null || i < c) && (c = i);
      }
      if (e == null || c == null || f == null) {
        b('ErrorUtils').reportError(
          new Error('messed up state inside IntervalTrackingBoundedBuffer')
        );
        return [];
      }
      this.$2.splice(e, 1);
      h = this.$8(f);
      i = this.$1.read().slice(h);
      g = this.$8(d == null ? this.$5 : d) - this.$8(c);
      g > 0 && (this.$1.dropFirst(g), (this.$6 += g));
      return i;
    };
    e.exports = a;
  },
  null
);
__d(
  'WorkerUtils',
  [],
  function (a, b, c, d, e, f) {
    function b() {
      try {
        return 'WorkerGlobalScope' in a && a instanceof a.WorkerGlobalScope;
      } catch (a) {
        return !1;
      }
    }
    e.exports = { isWorkerContext: b };
  },
  null
);
__d(
  'getReusableTimeSliceContinuation',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b, c) {
      __p && __p();
      var d = !1,
        e = a.getGuardedContinuation(c),
        f = function (b) {
          e(function () {
            d || (e = a.getGuardedContinuation(c)), b();
          });
        };
      f.last = function (a) {
        var b = e;
        g();
        b(a);
      };
      f[b] = {
        cancel: function () {
          d || (a.cancel(e), g(), (d = !0));
        },
        tokens: [],
        invoked: !1,
      };
      function g() {
        (d = !0),
          (e = function (a) {
            a();
          });
      }
      return f;
    }
    e.exports = a;
  },
  null
);
__d(
  'nullthrows',
  [],
  function (a, b, c, d, e, f) {
    a = function (a, b) {
      b === void 0 && (b = 'Got unexpected null or undefined');
      if (a != null) return a;
      a = new Error(b);
      a.framesToPop = 1;
      throw a;
    };
    e.exports = a;
  },
  null
);
__d(
  'wrapFunction',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {};
    a = function (a, b, c) {
      return function () {
        var d = b in g ? g[b](a, c) : a;
        for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++)
          f[h] = arguments[h];
        return d.apply(this, f);
      };
    };
    a.setWrapper = function (a, b) {
      g[b] = a;
    };
    e.exports = a;
  },
  null
);
__d(
  'TimeSlice',
  [
    'invariant',
    'CallStackExecutionObserver',
    'CircularBuffer',
    'Env',
    'ErrorUtils',
    'FBLogger',
    'IntervalTrackingBoundedBuffer',
    'WorkerUtils',
    'getReusableTimeSliceContinuation',
    'nullthrows',
    'performanceAbsoluteNow',
    'wrapFunction',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = [],
      i = [],
      j = 'key' + Math.random(),
      k = 1,
      l = !1,
      m = 0,
      n = 1,
      o = 2,
      p = {},
      q = m,
      r = new (b('CircularBuffer'))(100),
      s = 0,
      t = 0;
    c = b('Env').timesliceBufferSize;
    c == null && (c = 5e3);
    var u = new (b('IntervalTrackingBoundedBuffer'))(c),
      v = 'stackTraceLimit' in Error,
      w = [],
      x = [],
      y = [];
    function z() {
      return A(w);
    }
    function A(a) {
      return a.length > 0 ? a[a.length - 1] : null;
    }
    function B(a, c) {
      var d = {};
      b('ErrorUtils').applyWithGuard(F, null, [a, c, d]);
      b('ErrorUtils').applyWithGuard(G, null, [a, c, d]);
      w.push(a);
      x.push(c);
      y.push(d);
    }
    function C(a, b, c) {
      h.forEach(function (d) {
        var e = d.onNewContextCreated(z(), b, c);
        a[d.getBeforeID()] = e;
      });
    }
    function D(a, b) {
      h.forEach(function (c) {
        c.onContextCanceled(a, b[c.getBeforeID()]);
      });
    }
    function E(a, b, c) {
      i.forEach(function (d) {
        d.onAfterContextEnded(
          a,
          b[d.getBeforeID()],
          c[d.getBeforeID()],
          a.meta
        );
      });
    }
    function F(a, b, c) {
      h.forEach(function (d) {
        var e = d.onBeforeContextStarted(a, b[d.getBeforeID()], a.meta);
        c[d.getBeforeID()] = e;
      });
    }
    function G(a, b, c) {
      h.forEach(function (d) {
        var e = d.onAfterContextStarted(
          a,
          b[d.getBeforeID()],
          c[d.getBeforeID()],
          a.meta
        );
        c[d.getBeforeID()] = e;
      });
    }
    function H() {
      __p && __p();
      var a = z(),
        c = A(x),
        d = A(y);
      if (a == null || c == null || d == null) {
        b('FBLogger')('TimeSlice').mustfix(
          'popped too many times off the timeslice stack'
        );
        l = !1;
        return;
      }
      b('ErrorUtils').applyWithGuard(E, null, [a, c, d]);
      l = !a.isRoot;
      w.pop();
      x.pop();
      y.pop();
    }
    var I = {
      PropagationType: { CONTINUATION: 0, EXECUTION: 1, ORPHAN: 2 },
      guard: function (a, c, d) {
        __p && __p();
        typeof a === 'function' || g(0, undefined);
        typeof c === 'string' || g(0, undefined);
        var e = J(d);
        if (a[j]) return a;
        e.root || I.checkCoverage();
        var f;
        l && (f = z());
        var h = {},
          i = 0,
          m = undefined,
          n = b('Env').deferred_stack_trace_rate || 0;
        n !== 0 &&
          Math.random() * n <= 1 &&
          b('Env').timeslice_heartbeat_config &&
          b('Env').timeslice_heartbeat_config.isArtilleryOn &&
          d &&
          d.registerCallStack &&
          (m = b('ErrorUtils').normalizeError(
            new Error('deferred execution source')
          ));
        var o = {
          cancel: function () {
            o.invoked || b('ErrorUtils').applyWithGuard(D, null, [c, h]);
          },
          tokens: [],
          invoked: !1,
        };
        n = function () {
          __p && __p();
          var d = b('performanceAbsoluteNow')(),
            g,
            j = k++,
            n = {
              contextID: j,
              name: c,
              isRoot: !l,
              executionNumber: i++,
              meta: e,
              absBeginTimeMs: d,
            };
          o.invoked ||
            ((o.invoked = !0),
            o.tokens.length &&
              (o.tokens.forEach(function (a) {
                delete p[a];
              }),
              (o.tokens = [])));
          B(n, h);
          if (f != null) {
            var q = !!e.isContinuation;
            f.isRoot
              ? ((n.indirectParentID = f.contextID), (n.isEdgeContinuation = q))
              : ((n.indirectParentID = f.indirectParentID),
                (n.isEdgeContinuation = !!(q && f.isEdgeContinuation)));
          }
          var r = b('WorkerUtils').isWorkerContext();
          l = !0;
          try {
            if (!n.isRoot || r) return a.apply(this, arguments);
            else {
              var s = 'TimeSlice' + (c ? ': ' + c : '');
              g = b('ErrorUtils').applyWithGuard(
                a,
                this,
                [].concat(Array.prototype.slice.call(arguments)),
                null,
                s,
                { deferredSource: m }
              );
              return g;
            }
          } finally {
            var v = z();
            if (v == null)
              b('FBLogger')('TimeSlice').mustfix(
                'timeslice stack misaligned, not logging the block'
              ),
                (l = !1);
            else {
              var w = v.isRoot,
                x = v.contextID,
                y = v.indirectParentID,
                A = v.isEdgeContinuation,
                C = b('performanceAbsoluteNow')();
              v.absEndTimeMs = C;
              if (w && d != null) {
                t += C - d;
                var D = babelHelpers['extends'](
                  {
                    begin: d,
                    end: C,
                    id: x,
                    indirectParentID: y,
                    representsExecution: !0,
                    isEdgeContinuation: f && A,
                    guard: c,
                  },
                  e,
                  a.__SMmeta
                );
                u.pushElement(D);
              }
              H();
            }
          }
        };
        n = n;
        n[j] = o;
        b('ErrorUtils').applyWithGuard(C, null, [h, c, e]);
        return n;
      },
      copyGuardForWrapper: function (a, b) {
        a && a[j] && (b[j] = a[j]);
        return b;
      },
      cancel: function (a) {
        a = a ? a[j] : null;
        a &&
          !a.invoked &&
          (a.cancel(),
          a.tokens.forEach(function (a) {
            delete p[a];
          }),
          (a.invoked = !0));
      },
      cancelWithToken: function (a) {
        p[a] && I.cancel(p[a]);
      },
      registerForCancelling: function (a, b) {
        a &&
          b[j] &&
          (p[a] || b[j].invoked || ((p[a] = b), b[j].tokens.push(a)));
      },
      inGuard: function () {
        return l;
      },
      checkCoverage: function () {
        var a;
        if (q !== o && !l) {
          v && ((a = Error.stackTraceLimit), (Error.stackTraceLimit = 50));
          var c = new Error('Missing TimeSlice coverage');
          v && (Error.stackTraceLimit = a);
          q === n && Math.random() < s
            ? b('FBLogger')('TimeSlice')
                .catching(c)
                .debug('Missing TimeSlice coverage')
            : q === m && b('nullthrows')(r).write(c);
        }
      },
      setLogging: function (a, c) {
        if (q !== m) return;
        s = c;
        a
          ? ((q = n),
            b('nullthrows')(r)
              .read()
              .forEach(function (a) {
                Math.random() < s &&
                  b('FBLogger')('TimeSlice')
                    .catching(a)
                    .warn('error from logging buffer');
              }))
          : (q = o);
        b('nullthrows')(r).clear();
        r = undefined;
      },
      getContext: function () {
        return z();
      },
      getTotalTime: function () {
        return t;
      },
      getGuardedContinuation: function (a) {
        return I.guard(
          function (a) {
            for (
              var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
              d < b;
              d++
            )
              c[d - 1] = arguments[d];
            return a.apply(this, c);
          },
          a,
          { propagationType: I.PropagationType.CONTINUATION }
        );
      },
      getReusableContinuation: function (a) {
        return b('getReusableTimeSliceContinuation')(I, j, a);
      },
      getPlaceholderReusableContinuation: function () {
        var a = function (a) {
          return a();
        };
        a.last = a;
        return a;
      },
      getGuardNameStack: function () {
        return w.map(function (a) {
          return a.name;
        });
      },
      registerExecutionContextObserver: function (a) {
        __p && __p();
        var b = !1;
        for (var c = 0; c < h.length; c++)
          if (h[c].getBeforeID() > a.getBeforeID()) {
            h.splice(c, 0, a);
            b = !0;
            break;
          }
        b || h.push(a);
        for (var c = 0; c < i.length; c++)
          if (i[c].getAfterID() > a.getAfterID()) {
            i.splice(c, 0, a);
            return;
          }
        i.push(a);
      },
      catchUpOnDemandExecutionContextObservers: function (a) {
        for (var b = 0; b < w.length; b++) {
          var c = w[b],
            d = x[b],
            e = y[b] || {};
          d = a.onBeforeContextStartedWhileEnabled(
            c,
            d[a.getBeforeID()],
            c.meta
          );
          e[a.getBeforeID()] = d;
          y[b] = e;
        }
      },
      getBuffer: function () {
        return u;
      },
    };
    function J(a) {
      __p && __p();
      var b = {};
      a &&
        a.propagateCounterAttribution !== undefined &&
        (b.propagateCounterAttribution = a.propagateCounterAttribution);
      a && a.root !== undefined && (b.root = a.root);
      switch (a && a.propagationType) {
        case I.PropagationType.CONTINUATION:
          b.isContinuation = !0;
          b.extendsExecution = !0;
          break;
        case I.PropagationType.ORPHAN:
          b.isContinuation = !1;
          b.extendsExecution = !1;
          break;
        case I.PropagationType.EXECUTION:
        default:
          (b.isContinuation = !1), (b.extendsExecution = !0);
      }
      return b;
    }
    b('Env').sample_continuation_stacktraces &&
      I.registerExecutionContextObserver(b('CallStackExecutionObserver'));
    b('wrapFunction').setWrapper(I.guard, 'entry');
    a.TimeSlice = I;
    e.exports = I;
  },
  3
);
__d(
  'TimerStorage',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      ANIMATION_FRAME: 'ANIMATION_FRAME',
      IDLE_CALLBACK: 'IDLE_CALLBACK',
      IMMEDIATE: 'IMMEDIATE',
      INTERVAL: 'INTERVAL',
      TIMEOUT: 'TIMEOUT',
    };
    var g = {};
    Object.keys(a).forEach(function (a) {
      return (g[a] = {});
    });
    b = babelHelpers['extends']({}, a, {
      set: function (a, b) {
        g[a][b] = !0;
      },
      unset: function (a, b) {
        delete g[a][b];
      },
      clearAll: function (a, b) {
        Object.keys(g[a]).forEach(b), (g[a] = {});
      },
      getStorages: function () {
        return {};
      },
    });
    e.exports = b;
  },
  null
);
__d(
  'clearInterval',
  ['TimerStorage', 'TimeSlice'],
  function (a, b, c, d, e, f) {
    var g = a.__fbNativeClearTimeout || a.clearTimeout;
    function c(a) {
      if (a != null) {
        b('TimerStorage').unset(b('TimerStorage').INTERVAL, a);
        var c = b('TimerStorage').TIMEOUT + String(a);
        b('TimeSlice').cancelWithToken(c);
      }
      g(a);
    }
    e.exports = c;
  },
  null
);
__d(
  'isEmpty',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      __p && __p();
      if (Array.isArray(a)) return a.length === 0;
      else if (typeof a === 'object') {
        if (a) {
          !h(a) || a.size === undefined || g(0, undefined);
          for (var b in a) return !1;
        }
        return !0;
      } else return !a;
    }
    function h(a) {
      return typeof Symbol === 'undefined'
        ? !1
        : a[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'];
    }
    e.exports = a;
  },
  null
);
__d(
  'setIntervalAcrossTransitions',
  ['TimeSlice'],
  function (a, b, c, d, e, f) {
    var g = a.__fbNativeSetInterval || a.setInterval;
    function c(c, d) {
      var e = b('TimeSlice').guard(c, 'setInterval');
      for (
        var f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), i = 2;
        i < f;
        i++
      )
        h[i - 2] = arguments[i];
      return Function.prototype.apply.call(g, a, [e, d].concat(h));
    }
    e.exports = c;
  },
  null
);
__d(
  'CSSLoader',
  [
    'CSSLoaderConfig',
    'ResourceTimingsStore',
    'TimeSlice',
    'clearInterval',
    'ifRequired',
    'isEmpty',
    'setIntervalAcrossTransitions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 20,
      h = b('CSSLoaderConfig').timeout,
      i = b('CSSLoaderConfig').loadEventSupported || !1,
      j,
      k = {},
      l = [],
      m,
      n = {};
    function o(a) {
      if (j) return;
      j = !0;
      var b = document.createElement('link');
      b.onload = function () {
        (i = !0), b.parentNode && b.parentNode.removeChild(b);
      };
      b.rel = 'stylesheet';
      b.href = 'data:text/css;base64,';
      a.appendChild(b);
    }
    function p() {
      __p && __p();
      var a,
        c = [],
        d = [];
      if (Date.now() >= m) {
        for (a in n) d.push(n[a].signal), c.push(n[a].error);
        n = {};
      } else
        for (a in n) {
          var e = n[a].signal,
            f = window.getComputedStyle ? getComputedStyle(e) : e.currentStyle;
          f &&
            parseInt(f.height, 10) > 1 &&
            (c.push(n[a].load), d.push(e), delete n[a]);
        }
      for (var f = 0; f < d.length; f++) d[f].parentNode.removeChild(d[f]);
      if (!b('isEmpty')(c)) {
        for (f = 0; f < c.length; f++) c[f]();
        m = Date.now() + h;
      }
      return b('isEmpty')(n);
    }
    function q(a, c, d, e) {
      var f = document.createElement('meta');
      f.id = 'bootloader_' + a.replace(/[^a-z0-9]/gi, '_');
      c.appendChild(f);
      c = !b('isEmpty')(n);
      m = Date.now() + h;
      n[a] = { signal: f, load: d, error: e };
      if (!c)
        var i = b('setIntervalAcrossTransitions')(function () {
          p() && b('clearInterval')(i);
        }, g);
    }
    a = {
      loadStyleSheet: function (a, c, d, e, f, g) {
        __p && __p();
        if (k[a])
          throw new Error(
            'CSS component ' + a + ' has already been requested.'
          );
        var h = b('ResourceTimingsStore').getUID('css', c);
        b('ifRequired')('TimeSliceAutoclosedInteraction', function (a) {
          return a.getInteractionsActiveRightNow().forEach(function (a) {
            return a
              .forResourceRequest(h)
              .addStringAnnotation('requested_in_continuation', 'true');
          });
        });
        b('ResourceTimingsStore')
          .annotate('css', h)
          .addStringAnnotation('name', a)
          .addStringAnnotation('source', c)
          .addStringAnnotation('caller', 'CSSLoader.loadStyleSheet');
        b('ifRequired')('TimeSliceInteraction', function (b) {
          b.informGlobally('CSSLoader.loadStyleSheet')
            .addStringAnnotation('source', c)
            .addStringAnnotation('name', a);
        });
        b('ResourceTimingsStore').measureRequestSent('css', h);
        var j = function () {
            b('ResourceTimingsStore').measureResponseReceived('css', h),
              f && f();
          },
          m = document;
        if ('createStyleSheet' in m) {
          var n;
          for (var p = 0; p < l.length; p++)
            if (l[p].imports.length < 31) {
              n = p;
              break;
            }
          if (n === undefined) {
            try {
              l.push(m.createStyleSheet());
            } catch (a) {
              g();
              return;
            }
            n = l.length - 1;
          }
          l[n].addImport(c);
          k[a] = { styleSheet: l[n], uri: c };
          q(a, d, j, g);
          return;
        }
        var r = m.createElement('link');
        r.rel = 'stylesheet';
        r.type = 'text/css';
        r.href = c;
        e && (r.crossOrigin = 'anonymous');
        k[a] = { link: r };
        p = b('TimeSlice').getGuardedContinuation('CSSLoader link.onresponse');
        i
          ? ((r.onload = p.bind(undefined, function () {
              (r.onload = r.onerror = null), j();
            })),
            (r.onerror = p.bind(undefined, function () {
              (r.onload = r.onerror = null), g();
            })))
          : (q(a, d, j, g), i === undefined && o(d));
        d.appendChild(r);
      },
      registerLoadedStyleSheet: function (a, b) {
        if (k[a]) return !1;
        k[a] = { link: b };
        return !0;
      },
      unloadStyleSheet: function (a) {
        __p && __p();
        var b = k[a];
        if (b == null) return;
        var c = b.link;
        if (c) (c.onload = c.onerror = null), c.parentNode.removeChild(c);
        else {
          c = b.styleSheet;
          for (var d = 0; d < c.imports.length; d++)
            if (c.imports[d].href == b.uri) {
              c.removeImport(d);
              break;
            }
        }
        delete n[a];
        delete k[a];
      },
      moduleName: function (a) {
        return b('CSSLoaderConfig').modulePrefix + a;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'BigPipeInstance',
  [],
  function (a, b, c, d, e, f) {
    var g = null;
    a = {
      Events: {
        init: 'BigPipe/init',
        tti: 'tti_bigpipe',
        displayed: 'all_pagelets_displayed',
        loaded: 'all_pagelets_loaded',
      },
      setCurrentInstance_DO_NOT_USE: function (a) {
        g = a;
      },
      getCurrentInstance: function () {
        return g;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  '$-core',
  ['TAAL', 'ex'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      return g(a, typeof a === 'string' ? document.getElementById(a) : a);
    }
    function c(a) {
      return g(a, typeof a === 'string' ? document.getElementById(a) : a);
    }
    function g(a, c) {
      if (!c)
        throw new Error(
          b('TAAL').blameToPreviousFile(
            b('ex')(
              'Tried to get element with id of "%s" but it is not present on the page',
              a
            )
          )
        );
      return c;
    }
    a.fromIDOrElement = c;
    e.exports = a;
  },
  null
);
__d(
  '$',
  ['$-core'],
  function (a, b, c, d, e, f) {
    e.exports = b('$-core');
  },
  null
);
__d(
  'CSSCore',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a, b) {
      var c = a;
      while (c.parentNode) c = c.parentNode;
      if (c instanceof Element) {
        c = c.querySelectorAll(b);
        return Array.prototype.indexOf.call(c, a) !== -1;
      }
      return !1;
    }
    var i = {
      addClass: function (a, b) {
        /\s/.test(b) && g(0, undefined, b);
        b &&
          (a.classList
            ? a.classList.add(b)
            : i.hasClass(a, b) || (a.className = a.className + ' ' + b));
        return a;
      },
      removeClass: function (a, b) {
        /\s/.test(b) && g(0, undefined, b);
        b &&
          (a.classList
            ? a.classList.remove(b)
            : i.hasClass(a, b) &&
              (a.className = a.className
                .replace(new RegExp('(^|\\s)' + b + '(?:\\s|$)', 'g'), '$1')
                .replace(/\s+/g, ' ')
                .replace(/^\s*|\s*$/g, '')));
        return a;
      },
      conditionClass: function (a, b, c) {
        return (c ? i.addClass : i.removeClass)(a, b);
      },
      hasClass: function (a, b) {
        /\s/.test(b) && g(0, undefined);
        return a.classList
          ? !!b && a.classList.contains(b)
          : (' ' + a.className + ' ').indexOf(' ' + b + ' ') > -1;
      },
      matchesSelector: function (a, b) {
        var c =
          a.matches ||
          a.webkitMatchesSelector ||
          a.mozMatchesSelector ||
          a.msMatchesSelector ||
          function (b) {
            return h(a, b);
          };
        return c.call(a, b);
      },
    };
    e.exports = i;
  },
  null
);
__d(
  'CSS',
  ['CSSCore', '$'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'hidden_elem',
      h = {
        setClass: function (a, c) {
          b('$').fromIDOrElement(a).className = c || '';
          return a;
        },
        hasClass: function (a, c) {
          return a instanceof Document || a instanceof Text
            ? !1
            : b('CSSCore').hasClass(b('$').fromIDOrElement(a), c);
        },
        matchesSelector: function (a, c) {
          return a instanceof Document || a instanceof Text
            ? !1
            : b('CSSCore').matchesSelector(b('$').fromIDOrElement(a), c);
        },
        addClass: function (a, c) {
          return b('CSSCore').addClass(b('$').fromIDOrElement(a), c);
        },
        removeClass: function (a, c) {
          return b('CSSCore').removeClass(b('$').fromIDOrElement(a), c);
        },
        conditionClass: function (a, c, d) {
          return b('CSSCore').conditionClass(b('$').fromIDOrElement(a), c, !!d);
        },
        toggleClass: function (a, b) {
          return h.conditionClass(a, b, !h.hasClass(a, b));
        },
        shown: function (a) {
          return !h.hasClass(a, g);
        },
        hide: function (a) {
          return h.addClass(a, g);
        },
        show: function (a) {
          return h.removeClass(a, g);
        },
        toggle: function (a) {
          return h.toggleClass(a, g);
        },
        conditionShow: function (a, b) {
          return h.conditionClass(a, g, !b);
        },
      };
    e.exports = h;
  },
  null
);
__d(
  'Parent',
  ['CSS'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      byTag: function (a, b) {
        b = b.toUpperCase();
        a = g.find(a, function (a) {
          return a.nodeName === b;
        });
        return a instanceof Element ? a : null;
      },
      byClass: function (a, c) {
        a = g.find(a, function (a) {
          return a instanceof Element && b('CSS').hasClass(a, c);
        });
        return a instanceof Element ? a : null;
      },
      bySelector: function (a, b) {
        __p && __p();
        a = a;
        if (typeof a.matches === 'function') {
          while (a && a !== document && !a.matches(b)) a = a.parentNode;
          return a instanceof Element ? a : null;
        } else if (typeof a.msMatchesSelector === 'function') {
          while (a && a !== document && !a.msMatchesSelector(b))
            a = a.parentNode;
          return a instanceof Element ? a : null;
        } else return g.bySelector_SLOW(a, b);
      },
      bySelector_SLOW: function (a, b) {
        __p && __p();
        a = a;
        var c = a;
        while (c.parentNode) c = c.parentNode;
        if (!(c instanceof Element) && !(c instanceof Document)) return null;
        c = c.querySelectorAll(b);
        while (a) {
          if (Array.prototype.indexOf.call(c, a) !== -1)
            return a instanceof Element ? a : null;
          a = a.parentNode;
        }
        return a instanceof Element ? a : null;
      },
      byAttribute: function (a, b) {
        a = g.find(a, function (a) {
          return a instanceof Element && !!a.getAttribute(b);
        });
        return a instanceof Element ? a : null;
      },
      find: function (a, b) {
        a = a;
        while (a) {
          if (b(a)) return a;
          a = a.parentNode;
        }
        return null;
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'ContextualComponent',
  ['Parent'],
  function (a, b, c, d, e, f) {
    __p && __p();
    g.forNode = function (a) {
      return g.$1.get(a) || null;
    };
    g.closestToNode = function (a) {
      a = b('Parent').find(a, function (a) {
        return !!g.forNode(a);
      });
      return a ? g.forNode(a) : null;
    };
    g.register = function (a) {
      return new g(a);
    };
    function g(a) {
      var b = a.element,
        c = a.isRoot;
      a = a.parent;
      this.$2 = c;
      this.$3 = b;
      this.$4 = a;
      this.$5 = new Set();
      this.$6 = [];
      this.$7 = [];
      this.$8();
    }
    g.prototype.onCleanup = function (a) {
      this.$6.push(a);
    };
    g.prototype.onUnmount = function (a) {
      this.$7.push(a);
    };
    g.prototype.cleanup = function () {
      this.$5.forEach(function (a) {
        return a.cleanup();
      }),
        this.$6.forEach(function (a) {
          return a();
        }),
        (this.$6 = []);
    };
    g.prototype.unmount = function () {
      this.cleanup();
      this.$5.forEach(function (a) {
        return a.unmount();
      });
      this.$7.forEach(function (a) {
        return a();
      });
      this.$7 = [];
      var a = this.$4;
      a && (g.$1['delete'](this.$3), a.$9(this));
    };
    g.prototype.reinitialize = function () {
      var a = this.$4;
      a && (a.$9(this), (this.$4 = undefined));
      g.$1['delete'](this.$3);
      this.$8();
    };
    g.prototype.$8 = function () {
      if (!this.$2 && !this.$4) {
        var a = g.closestToNode(this.$3);
        a && (this.$4 = a);
      }
      this.$4 && this.$4.$10(this);
      g.$1.set(this.$3, this);
    };
    g.prototype.$10 = function (a) {
      this.$5.add(a);
    };
    g.prototype.$9 = function (a) {
      this.$5['delete'](a);
    };
    g.$1 = new Map();
    e.exports = g;
  },
  null
);
__d(
  'PageEvents',
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      NATIVE_ONLOAD: 'onload/onload',
      BIGPIPE_ONLOAD: 'onload/onload_callback',
      AJAXPIPE_ONLOAD: 'ajaxpipe/onload_callback',
      NATIVE_DOMREADY: 'onload/dom_content_ready',
      BIGPIPE_DOMREADY: 'onload/domcontent_callback',
      AJAXPIPE_DOMREADY: 'ajaxpipe/domcontent_callback',
      NATIVE_ONBEFOREUNLOAD: 'onload/beforeunload',
      NATIVE_ONUNLOAD: 'onload/unload',
      AJAXPIPE_ONUNLOAD: 'onload/exit',
      AJAXPIPE_SEND: 'ajaxpipe/send',
      AJAXPIPE_FIRST_RESPONSE: 'ajaxpipe/first_response',
      AJAXPIPE_ONBEFORECLEARCANVAS: 'ajaxpipe/onbeforeclearcanvas',
    });
    e.exports = a;
  },
  null
);
__d(
  'createCancelableFunction',
  ['emptyFunction'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      var c = a;
      a = function () {
        for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++)
          b[d] = arguments[d];
        return c.apply(this, b);
      };
      a.cancel = function () {
        c = b('emptyFunction');
      };
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  'Run',
  [
    'Arbiter',
    'BigPipeInstance',
    'ContextualComponent',
    'ExecutionEnvironment',
    'PageEvents',
    'TimeSlice',
    'createCancelableFunction',
    'emptyFunction',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'onunloadhooks',
      h = 'onafterunloadhooks';
    function i(b, c) {
      var d = a.CavalryLogger;
      d = d && d.getInstance();
      if (!d) return;
      c ? d.setAbsTimeStamp && d.setAbsTimeStamp(b, c) : d.setTimeStamp(b);
    }
    function j() {
      return !window.loading_page_chrome;
    }
    function c(c) {
      var d = a.PageHooks;
      if (window.domready && d) {
        d.runHook(c, 'domreadyhooks:late');
        return { remove: b('emptyFunction') };
      } else return p('domreadyhooks', c);
    }
    function d(b) {
      var c = a.PageHooks;
      if (window.loaded && c) {
        var d = setTimeout(function () {
          c.runHook(b, 'onloadhooks:late');
        }, 0);
        return {
          remove: function () {
            return clearTimeout(d);
          },
        };
      } else return p('onloadhooks', b);
    }
    function f(a, b) {
      b === undefined && (b = j());
      return b ? p('onbeforeleavehooks', a) : p('onbeforeunloadhooks', a);
    }
    function k(a, c) {
      window.onunload ||
        (window.onunload = b('TimeSlice').guard(function () {
          b('Arbiter').inform(b('PageEvents').NATIVE_ONUNLOAD, !0, 'state');
        }, 'window.onunload'));
      return p(a, c);
    }
    function l(a) {
      return k(g, a);
    }
    function m(a) {
      return k(h, a);
    }
    function n(a) {
      return p('onleavehooks', a);
    }
    function o(a, c) {
      var d = b('createCancelableFunction')(c);
      c = function () {
        d(), d.cancel();
      };
      a = b('ContextualComponent').closestToNode(a);
      a && a.onCleanup(c);
      window.onleavehooks = (window.onleavehooks || []).concat(c);
      return {
        remove: function () {
          d.cancel();
        },
      };
    }
    function p(a, c) {
      c = b('createCancelableFunction')(c);
      window[a] = (window[a] || []).concat(c);
      return {
        remove: function () {
          c.cancel();
        },
      };
    }
    function q(a) {
      window[a] = [];
    }
    var r = b('TimeSlice').guard(function () {
      b('Arbiter').inform(b('PageEvents').NATIVE_DOMREADY, !0, 'state');
    }, 'DOMContentLoaded');
    a._domcontentready = r;
    function s() {
      __p && __p();
      var a = document,
        c = window;
      if (a.addEventListener) {
        var d = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
        if (d && d[1] < 525)
          var e = setInterval(function () {
            /loaded|complete/.test(a.readyState) && (r(), clearInterval(e));
          }, 10);
        else a.addEventListener('DOMContentLoaded', r, !0);
      } else {
        d = 'javascript:void(0)';
        c.location.protocol == 'https:' && (d = '//:');
        a.write(
          '<script onreadystatechange="if (this.readyState==\'complete\') {this.parentNode.removeChild(this);_domcontentready();}" defer="defer" src="' +
            d +
            '"></'
        );
        a.write('script>');
      }
      var f = c.onload;
      c.onload = b('TimeSlice').guard(function () {
        i('t_layout'),
          f && f(),
          b('Arbiter').inform(b('PageEvents').NATIVE_ONLOAD, !0, 'state');
      }, 'window.onload');
      c.onbeforeunload = b('TimeSlice').guard(function (a) {
        var c = {};
        b('Arbiter').inform(b('PageEvents').NATIVE_ONBEFOREUNLOAD, c, 'state');
        c.warn ||
          b('Arbiter').inform(b('PageEvents').AJAXPIPE_ONUNLOAD, {
            transition_type: 'normal',
          });
        if (c.warn !== undefined) {
          a.returnValue = c.warn;
          return c.warn;
        } else return;
      }, 'window.onbeforeunload');
    }
    function t() {
      var a = b('performanceAbsoluteNow')();
      window.console &&
        console.timeStamp &&
        console.timeStamp(
          'perf_trace {"name": "e2e", "parent": "PageEvents.BIGPIPE_ONLOAD"}'
        );
      i('t_onload', a);
      b('Arbiter').inform(b('PageEvents').BIGPIPE_ONLOAD, { ts: a }, 'state');
    }
    var u = b('Arbiter').registerCallback(
        function () {
          b('BigPipeInstance').getCurrentInstance()
            ? b('Arbiter').subscribeOnce(
                b('BigPipeInstance').Events.displayed,
                t
              )
            : t();
        },
        [b('PageEvents').NATIVE_ONLOAD]
      ),
      v = b('Arbiter').registerCallback(
        function () {
          i('t_domcontent');
          var a = { timeTriggered: Date.now() };
          b('Arbiter').inform(b('PageEvents').BIGPIPE_DOMREADY, a, 'state');
        },
        [b('PageEvents').NATIVE_DOMREADY]
      );
    b('ExecutionEnvironment').canUseDOM && s();
    s = {
      onLoad: c,
      onAfterLoad: d,
      onLeave: n,
      onBeforeUnload: f,
      onUnload: l,
      onAfterUnload: m,
      onCleanupOrLeave: o,
      __domContentCallback: v,
      __onloadCallback: u,
      __removeHook: q,
    };
    e.exports = s;
  },
  null
);
__d(
  'EventEmitterWithValidation',
  ['BaseEventEmitter'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('BaseEventEmitter'));
    g = c && c.prototype;
    function a(a) {
      g.constructor.call(this),
        (this.$EventEmitterWithValidation1 = Object.keys(a));
    }
    a.prototype.emit = function (a) {
      h(a, this.$EventEmitterWithValidation1);
      return g.emit.apply(this, arguments);
    };
    function h(a, b) {
      if (b.indexOf(a) === -1) throw new TypeError(i(a, b));
    }
    function i(a, b) {
      a = 'Unknown event type "' + a + '". ';
      a += 'Known event types: ' + b.join(', ') + '.';
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  'mixInEventEmitter',
  [
    'invariant',
    'EventEmitterWithHolding',
    'EventEmitterWithValidation',
    'EventHolder',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a, b) {
      b || g(0, undefined);
      var c = a.prototype || a;
      c.__eventEmitter && g(0, undefined);
      a = a.constructor;
      a && (a === Object || a === Function || g(0, undefined));
      c.__types = babelHelpers['extends']({}, c.__types, b);
      Object.assign(c, h);
    }
    var h = {
      emit: function (a, b, c, d, e, f, g) {
        return this.__getEventEmitter().emit(a, b, c, d, e, f, g);
      },
      emitAndHold: function (a, b, c, d, e, f, g) {
        return this.__getEventEmitter().emitAndHold(a, b, c, d, e, f, g);
      },
      addListener: function (a, b, c) {
        return this.__getEventEmitter().addListener(a, b, c);
      },
      once: function (a, b, c) {
        return this.__getEventEmitter().once(a, b, c);
      },
      addRetroactiveListener: function (a, b, c) {
        return this.__getEventEmitter().addRetroactiveListener(a, b, c);
      },
      listeners: function (a) {
        return this.__getEventEmitter().listeners(a);
      },
      removeAllListeners: function () {
        this.__getEventEmitter().removeAllListeners();
      },
      removeCurrentListener: function () {
        this.__getEventEmitter().removeCurrentListener();
      },
      releaseHeldEventType: function (a) {
        this.__getEventEmitter().releaseHeldEventType(a);
      },
      __getEventEmitter: function () {
        if (!this.__eventEmitter) {
          var a = new (b('EventEmitterWithValidation'))(this.__types),
            c = new (b('EventHolder'))();
          this.__eventEmitter = new (b('EventEmitterWithHolding'))(a, c);
        }
        return this.__eventEmitter;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'Visibility',
  ['TimeSlice', 'mixInEventEmitter'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    document.hidden !== undefined
      ? ((g = 'hidden'), (h = 'visibilitychange'))
      : document.mozHidden !== undefined
      ? ((g = 'mozHidden'), (h = 'mozvisibilitychange'))
      : document.msHidden !== undefined
      ? ((g = 'msHidden'), (h = 'msvisibilitychange'))
      : document.webkitHidden !== undefined &&
        ((g = 'webkitHidden'), (h = 'webkitvisibilitychange'));
    function i() {
      return g ? document[g] : !1;
    }
    function a() {
      return document.addEventListener && h !== undefined;
    }
    var j = {
      HIDDEN: 'hidden',
      VISIBLE: 'visible',
      isHidden: i,
      isSupported: a,
    };
    b('mixInEventEmitter')(j, { visible: !0, hidden: !0 });
    a() &&
      document.addEventListener(
        h,
        b('TimeSlice').guard(function (a) {
          j.emit(i() ? j.HIDDEN : j.VISIBLE, { changeTime: a.timeStamp });
        }, 'visibility change')
      );
    e.exports = j;
  },
  null
);
__d(
  'bx',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = {};
    function a(a) {
      var b = h[a];
      !b && g(0, undefined, a);
      return b;
    }
    a.add = function (a) {
      var b = !1;
      for (var c in a) c in h || (h[c] = a[c]);
    };
    a.getURL = function (a) {
      return a.uri;
    };
    e.exports = a;
  },
  null
);
__d(
  'performanceNow',
  ['performance'],
  function (a, b, c, d, e, f) {
    b('performance').now
      ? (a = function () {
          return b('performance').now();
        })
      : (a = function () {
          return Date.now();
        });
    e.exports = a;
  },
  null
);
__d(
  'nativeRequestAnimationFrame',
  [],
  function (a, b, c, d, e, f) {
    b =
      a.__fbNativeRequestAnimationFrame ||
      a.requestAnimationFrame ||
      a.webkitRequestAnimationFrame ||
      a.mozRequestAnimationFrame ||
      a.oRequestAnimationFrame ||
      a.msRequestAnimationFrame;
    e.exports = b;
  },
  null
);
__d(
  'requestAnimationFramePolyfill',
  ['nativeRequestAnimationFrame'],
  function (a, b, c, d, e, f) {
    var g = 0;
    c =
      b('nativeRequestAnimationFrame') ||
      function (b) {
        var c = Date.now(),
          d = Math.max(0, 16 - (c - g));
        g = c + d;
        return a.setTimeout(function () {
          b(Date.now());
        }, d);
      };
    e.exports = c;
  },
  null
);
__d(
  'IdleCallbackImplementation',
  ['performanceNow', 'requestAnimationFramePolyfill'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [],
      h = 0,
      i = 0,
      j = -1,
      k = !1,
      l = 1e3 / 60,
      m = 2;
    function n(a) {
      return a;
    }
    function o(a) {
      return a;
    }
    function c(b, c) {
      var d = i++;
      g[d] = b;
      q();
      if (c != null && c.timeout > 0) {
        var e = n(d);
        a.setTimeout(function () {
          return w(e);
        }, c.timeout);
      }
      return n(d);
    }
    function p(a) {
      a = o(a);
      g[a] = null;
    }
    function q() {
      k ||
        ((k = !0),
        b('requestAnimationFramePolyfill')(function (a) {
          (k = !1), s(b('performanceNow')() - a);
        }));
    }
    function r(a) {
      var b = l - m;
      if (a < b) return b - a;
      a = a % l;
      if (a > b || a < m) return 0;
      else return b - a;
    }
    function s(a) {
      __p && __p();
      var c = b('performanceNow')();
      if (c > j) {
        a = r(a);
        if (a > 0) {
          c = c + a;
          v(c);
          j = c;
        }
      }
      t() && q();
    }
    function t() {
      return h < g.length;
    }
    function u() {
      while (t()) {
        var a = g[h];
        h++;
        if (a) return a;
      }
      return null;
    }
    function v(a) {
      var c;
      while (b('performanceNow')() < a && (c = u())) c(new x(a));
    }
    function w(a) {
      var b = o(a);
      b = g[b];
      b && (p(a), b(new x(null)));
    }
    function x(a) {
      (this.didTimeout = a == null), (this.$1 = a);
    }
    x.prototype.timeRemaining = function () {
      var a = this.$1;
      if (a != null) {
        var c = b('performanceNow')();
        if (c < a) return a - c;
      }
      return 0;
    };
    e.exports = { requestIdleCallback: c, cancelIdleCallback: p };
  },
  null
);
__d(
  'cancelIdleCallback',
  ['IdleCallbackImplementation', 'TimerStorage', 'TimeSlice'],
  function (a, b, c, d, e, f) {
    var g = b('TimerStorage').IDLE_CALLBACK;
    function a(a) {
      b('TimerStorage').unset(g, a);
      var c = g + String(a);
      b('TimeSlice').cancelWithToken(c);
      b('IdleCallbackImplementation').cancelIdleCallback(a);
    }
    e.exports = a;
  },
  null
);
__d(
  'CurrentCommunity',
  ['CurrentCommunityInitialData'],
  function (a, b, c, d, e, f) {
    a = {
      getID: function () {
        return b('CurrentCommunityInitialData').COMMUNITY_ID || '0';
      },
      getName: function () {
        return b('CurrentCommunityInitialData').COMMUNITY_NAME || '';
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'DTSG',
  ['invariant', 'DTSGInitialData'],
  function (a, b, c, d, e, f, g) {
    var h = b('DTSGInitialData').token || null;
    a = {
      getToken: function () {
        return h;
      },
      setToken: function (a) {
        h = a;
      },
      refresh: function () {
        g(0, undefined);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'requireWeak',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      d && d.call(null, [a], b);
    }
    e.exports = a;
  },
  null
);
__d(
  'gkx',
  ['invariant', 'emptyFunction', 'requireWeak'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = {},
      i = {};
    function a(a) {
      var c = h[a];
      c != null || g(0, undefined, a);
      i[a] ||
        ((i[a] = !0),
        b('requireWeak')('Banzai', function (b) {
          return b.post('gk2_exposure', { identifier: a, hash: c.hash });
        }));
      return c.result;
    }
    a.add = function (a) {
      for (var b in a) b in h || (h[b] = a[b]);
    };
    c = b('emptyFunction');
    a.setPass = c;
    a.setFail = c;
    e.exports = a;
  },
  null
);
__d(
  'DTSGUtils',
  ['SprinkleConfig', 'gkx'],
  function (a, b, c, d, e, f) {
    a = {
      getNumericValue: function (a) {
        var c = '';
        for (var d = 0; d < a.length; d++) c += a.charCodeAt(d);
        return b('gkx')(
          'AT5ldt4WW1AcMnKPrcxNYc9r_yO4V_bpM0eC55af2029bJbyJC79AdXTtedQ03JuSR3UD1dHbSr2kZcKpKyFoVoe'
        )
          ? c
          : b('SprinkleConfig').version + c;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'DTSG_ASYNC',
  ['DTSGInitData'],
  function (a, b, c, d, e, f) {
    var g = b('DTSGInitData').async_get_token || null;
    a = {
      getToken: function () {
        return g;
      },
      setToken: function (a) {
        g = a;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'BitMap',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
    function a() {
      this.$1 = [];
    }
    a.prototype.set = function (a) {
      this.$1[a] = 1;
      return this;
    };
    a.prototype.toString = function () {
      var a = [];
      for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
      return a.length ? i(a.join('')) : '';
    };
    a.prototype.toCompressedString = function () {
      __p && __p();
      if (this.$1.length === 0) return '';
      var a = [],
        b = 1,
        c = this.$1[0] || 0,
        d = c.toString(2);
      for (var e = 1; e < this.$1.length; e++) {
        var f = this.$1[e] || 0;
        f === c ? b++ : (a.push(h(b)), (c = f), (b = 1));
      }
      b && a.push(h(b));
      return i(d + a.join(''));
    };
    function h(a) {
      a = a.toString(2);
      var b = '0'.repeat(a.length - 1);
      return b + a;
    }
    function i(a) {
      a = (a + '00000').match(/[01]{6}/g);
      var b = '';
      for (var c = 0; c < a.length; c++) b += g[parseInt(a[c], 2)];
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  'ge',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b, c) {
      if (typeof a !== 'string') return a;
      else if (!b) return document.getElementById(a);
      else return g(a, b, c);
    }
    function g(a, b, c) {
      __p && __p();
      var d;
      if (h(b) == a) return b;
      else if (b.getElementsByTagName) {
        c = b.getElementsByTagName(c || '*');
        for (d = 0; d < c.length; d++) if (h(c[d]) == a) return c[d];
      } else {
        c = b.childNodes;
        for (d = 0; d < c.length; d++) {
          b = g(a, c[d]);
          if (b) return b;
        }
      }
      return null;
    }
    function h(a) {
      return a.getAttribute ? a.getAttribute('id') : null;
    }
    e.exports = a;
  },
  null
);
__d(
  'replaceTransportMarkers',
  ['ErrorUtils', 'ge', 'memoize'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, c, e) {
      __p && __p();
      var f = e !== undefined ? c[e] : c,
        h;
      if (Array.isArray(f)) for (h = 0; h < f.length; h++) g(a, f, h);
      else if (f && typeof f === 'object')
        if (f.__m)
          f.__lazy
            ? (c[e] = b('memoize')(b.bind(null, f.__m)))
            : (c[e] = b.call(null, f.__m));
        else if (f.__deferredElement) {
          var i = [],
            j;
          d.call(null, [f.__deferredElement], function (a) {
            (j = a),
              i.length &&
                (i.forEach(
                  b('ErrorUtils').guard(function (b) {
                    b(a);
                  }, "JS::deferredElement callback: '" +
                    f.__deferredElement +
                    "'")
                ),
                (i.length = 0));
          });
          h = {
            then: function (a) {
              j ? a(j) : i.push(a);
            },
          };
          c[e] = h;
        } else if (f.__e) c[e] = b('ge')(f.__e);
        else if (f.__rel) c[e] = a.relativeTo;
        else if (f.__bigPipeContext) c[e] = a.bigPipeContext;
        else {
          for (var k in f) g(a, f, k);
          if (f.__map) c[e] = new Map(f.__map);
          else if (f.__set) c[e] = new Set(f.__set);
          else if (f.__imm) {
            h = f.__imm;
            a = h.module;
            var l = h.method;
            h = h.value;
            c[e] = a[l](h);
          }
        }
    }
    e.exports = g;
  },
  null
);
__d(
  'ServerJSDefine',
  ['BitMap', 'replaceTransportMarkers'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 2,
      h = new (b('BitMap'))(),
      i = {
        getLoadedModuleHash: function () {
          return h.toCompressedString();
        },
        handleDefine: function (a, c, d, e, f) {
          e >= 0 && h.set(e),
            define(
              a,
              c,
              function () {
                b('replaceTransportMarkers')({ relativeTo: f }, d);
                if (e === -42) throw new Error(a + ': ' + d.__throw8367__);
                return d;
              },
              g
            );
        },
        handleDefines: function (a, b) {
          a.forEach(function (a) {
            b && a.push(b), i.handleDefine.apply(null, a);
          });
        },
      };
    e.exports = i;
  },
  null
);
__d(
  'StaticSiteData',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      pkg_cohort_key: '__pc',
      be_key: '__be',
      spin_rev_key: '__spin_r',
      spin_time_key: '__spin_t',
      spin_branch_key: '__spin_b',
      spin_mhenv_key: '__spin_dev_mhenv',
    };
  },
  null
);
__d(
  'asyncParams',
  [],
  function (a, b, c, d, e, f) {
    var g = {};
    a = {
      add: function (a, b) {
        g[a] = b;
      },
      get: function () {
        return g;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'isSocialPlugin',
  ['CSSCore'],
  function (a, b, c, d, e, f) {
    function a() {
      return !!document.body && b('CSSCore').hasClass(document.body, 'plugin');
    }
    e.exports = a;
  },
  null
);
__d(
  'getAsyncParams',
  [
    'CurrentCommunity',
    'CurrentUserInitialData',
    'DTSG',
    'DTSG_ASYNC',
    'DTSGUtils',
    'ISB',
    'LSD',
    'ServerJSDefine',
    'SiteData',
    'SprinkleConfig',
    'StaticSiteData',
    'asyncParams',
    'isSocialPlugin',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 1;
    function a(a) {
      __p && __p();
      var c,
        d = babelHelpers['extends'](
          {},
          b('asyncParams').get(),
          ((c = {
            __user: b('CurrentUserInitialData').USER_ID,
            __a: 1,
            __dyn: b('ServerJSDefine').getLoadedModuleHash(),
            __req: (g++).toString(36),
          }),
          (c[b('StaticSiteData').be_key] = b('SiteData').be_mode),
          (c[b('StaticSiteData').pkg_cohort_key] = b('SiteData').pkg_cohort),
          (c.__rev = b('SiteData').client_revision),
          c)
        );
      window.location.search
        .slice(1)
        .split('&')
        .forEach(function (a) {
          a = a.split('=');
          var b = a[0];
          a = a[1];
          (b === 'locale' ||
            b === 'cxobfus' ||
            b === 'js_debug' ||
            b === 'binast' ||
            b.substr(0, 4) === 'tfc_' ||
            b.substr(0, 4) === 'tfi_' ||
            b.substr(0, 3) === 'mh_') &&
            (d[b] = a);
        });
      if (a == 'POST') {
        c = b('DTSG').getCachedToken
          ? b('DTSG').getCachedToken()
          : b('DTSG').getToken();
        c &&
          ((d.fb_dtsg = c),
          b('SprinkleConfig').param_name &&
            (d[b('SprinkleConfig').param_name] =
              b('DTSGUtils').getNumericValue(c)));
        b('LSD').token && (d.lsd = b('LSD').token);
      }
      if (a == 'GET') {
        c = b('DTSG_ASYNC').getCachedToken
          ? b('DTSG_ASYNC').getCachedToken()
          : b('DTSG_ASYNC').getToken();
        c && (d.fb_dtsg_ag = c);
      }
      b('ISB').token && (d.fb_isb = b('ISB').token);
      b('CurrentCommunity').getID() !== '0' &&
        (d.__cid = b('CurrentCommunity').getID());
      b('isSocialPlugin')() && (d.__sp = 1);
      b('SiteData').spin &&
        ((d[b('StaticSiteData').spin_rev_key] =
          b('SiteData')[b('StaticSiteData').spin_rev_key]),
        (d[b('StaticSiteData').spin_branch_key] =
          b('SiteData')[b('StaticSiteData').spin_branch_key]),
        (d[b('StaticSiteData').spin_time_key] =
          b('SiteData')[b('StaticSiteData').spin_time_key]),
        b('SiteData')[b('StaticSiteData').spin_mhenv_key] &&
          (d[b('StaticSiteData').spin_mhenv_key] =
            b('SiteData')[b('StaticSiteData').spin_mhenv_key]));
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  'getSameOriginTransport',
  ['ex'],
  function (a, b, c, d, e, f) {
    function c() {
      try {
        return a.XMLHttpRequest
          ? new a.XMLHttpRequest()
          : new ActiveXObject('MSXML2.XMLHTTP.3.0');
      } catch (a) {
        throw new Error(b('ex')('getSameOriginTransport: %s', a.message));
      }
    }
    e.exports = c;
  },
  null
);
__d(
  'ix',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = {};
    function a(a) {
      var b = h[a];
      !b && g(0, undefined, a);
      return b;
    }
    a.add = function (a) {
      var b = !1;
      for (var c in a) c in h || (h[c] = a[c]);
    };
    e.exports = a;
  },
  null
);
__d(
  'qex',
  ['invariant', 'requireWeak'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = {},
      i = {};
    function a(a, b) {
      throw new Error('qex should NEVER be called at runtime directly');
    }
    a._ = function (a) {
      var c = h[a];
      c != null || g(0, undefined, a);
      var d = c.r,
        e = c.l;
      e != null &&
        !i[a] &&
        ((i[a] = !0),
        b('requireWeak')('Banzai', function (a) {
          a.post('qex', { l: e }, { signal: !0 });
        }));
      return d;
    };
    a.add = function (a) {
      for (var b in a) b in h || (h[b] = a[b]);
    };
    e.exports = a;
  },
  null
);
__d(
  'requestIdleCallbackAcrossTransitions',
  ['IdleCallbackImplementation', 'TimerStorage', 'TimeSlice'],
  function (a, b, c, d, e, f) {
    var g =
        a.requestIdleCallback ||
        b('IdleCallbackImplementation').requestIdleCallback,
      h = b('TimerStorage').IDLE_CALLBACK;
    e.exports = function (c, d) {
      c = b('TimeSlice').guard(c, 'requestIdleCallback', {
        propagationType: b('TimeSlice').PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      d = g.call(a, c, d);
      var e = h + String(d);
      b('TimeSlice').registerForCancelling(e, c);
      return d;
    };
  },
  null
);
__d(
  'requestIdleCallback',
  ['TimerStorage', 'TimeSlice', 'requestIdleCallbackAcrossTransitions'],
  function (a, b, c, d, e, f) {
    e.exports = function (c, d) {
      var e;
      function f(a) {
        b('TimerStorage').unset(b('TimerStorage').IDLE_CALLBACK, e), c(a);
      }
      b('TimeSlice').copyGuardForWrapper(c, f);
      e = b('requestIdleCallbackAcrossTransitions').call(a, f, d);
      b('TimerStorage').set(b('TimerStorage').IDLE_CALLBACK, e);
      return e;
    };
  },
  null
);
__d(
  'setTimeoutAcrossTransitions',
  ['TimerStorage', 'TimeSlice'],
  function (a, b, c, d, e, f) {
    var g = a.__fbNativeSetTimeout || a.setTimeout,
      h = b('TimerStorage').TIMEOUT;
    function c(c, d) {
      var e = b('TimeSlice').guard(c, 'setTimeout', {
        propagationType: b('TimeSlice').PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      for (
        var f = arguments.length, i = new Array(f > 2 ? f - 2 : 0), j = 2;
        j < f;
        j++
      )
        i[j - 2] = arguments[j];
      var k = Function.prototype.apply.call(g, a, [e, d].concat(i)),
        l = h + k;
      b('TimeSlice').registerForCancelling(l, e);
      return k;
    }
    e.exports = c;
  },
  null
);
__d(
  'Bootloader',
  [
    'invariant',
    'ix',
    'Arbiter',
    'BootloaderConfig',
    'CallbackDependencyManager',
    'CSRFGuard',
    'CSSLoader',
    'ErrorUtils',
    'FBLogger',
    'ResourceTimingsStore',
    'ServerJS',
    'TimeSlice',
    'Visibility',
    'bx',
    'cancelIdleCallback',
    'ex',
    'getAsyncParams',
    'getSameOriginTransport',
    'gkx',
    'ifRequired',
    'performanceAbsoluteNow',
    'qex',
    'requestIdleCallback',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = function () {},
      j = [],
      k = [],
      l = {},
      m = {},
      n = {},
      o = {},
      p = {},
      q = null,
      r = {},
      s = {},
      t = {},
      u = {},
      v = {},
      w = [],
      x = {},
      y = {},
      z = {},
      A = {},
      B = !1,
      C = !1,
      D = new (b('CallbackDependencyManager'))(),
      aa = 0,
      ba = b('BootloaderConfig').preloader_num_preloads,
      E = b('BootloaderConfig').preloader_num_loads,
      F = {},
      G = {},
      H = [],
      I = [],
      J = {},
      K = null,
      L = b('BootloaderConfig').preloader_enabled,
      M = !1;
    L &&
      d(['Run'], function (a) {
        a.onLeave(function () {
          (H.length = 0),
            (I.length = 0),
            K && (b('cancelIdleCallback')(K), (K = null)),
            (L = !1);
        });
      });
    var N = b('BootloaderConfig').jsRetries || [],
      O = b('BootloaderConfig').jsRetryAbortNum,
      ca = b('BootloaderConfig').jsRetryAbortTime,
      P = N.length > 0,
      Q = Object.freeze({ BOOTLOAD: 'bootloader/bootload' });
    b('ErrorUtils').addListener(function (a) {
      a.loadingUrls = Object.keys(s);
    }, !0);
    function R(a) {
      var c = o[a];
      if (c) return c;
      throw new Error(b('ex')('Bootloader: %s is not in the component map', a));
    }
    function S() {
      q ||
        (q =
          document.head ||
          document.getElementsByTagName('head')[0] ||
          document.body);
      return q;
    }
    function T() {
      if (!P) return !1;
      var a = w.length;
      if (a < O) return !0;
      a = w[a - 1] - w[a - O];
      a < ca && (b('FBLogger')('bootloader').warn('JS retry abort'), (P = !1));
      return P;
    }
    function U(a, b, c, d, e) {
      var f = document.createElement('link');
      f.href = a;
      f.rel = 'preload';
      b !== 'async' || g(0, undefined);
      f.as = b === 'js' ? 'script' : 'style';
      e && (f.onload = e);
      c != null && r[c].crossOrigin && (f.crossOrigin = 'anonymous');
      m[c] = !0;
      d.appendChild(f);
    }
    function da(a, c, d, e) {
      __p && __p();
      var f = document.createElement('script');
      f.src = a;
      f.async = !0;
      c != null && r[c].crossOrigin && (f.crossOrigin = 'anonymous');
      var g = b('performanceAbsoluteNow')(),
        h = b('TimeSlice').getGuardedContinuation(
          'Bootloader script.onresponse'
        ),
        i = b('ResourceTimingsStore').getUID('js', a);
      b('ifRequired')('TimeSliceAutoclosedInteraction', function (a) {
        return a.getInteractionsActiveRightNow().forEach(function (a) {
          return a
            .forResourceRequest(i)
            .addStringAnnotation('requested_in_continuation', 'true');
        });
      });
      b('ResourceTimingsStore')
        .annotate('js', i)
        .addStringAnnotation('name', c != null ? c : '')
        .addStringAnnotation('source', a);
      b('ifRequired')('TimeSliceInteraction', function (b) {
        b.informGlobally('bootloader._loadJS')
          .addStringAnnotation('source', a)
          .addStringAnnotation('name', c != null ? c : '');
      });
      b('ResourceTimingsStore').measureRequestSent('js', i);
      f.onload = h.bind(undefined, function () {
        v[a] &&
          b('FBLogger')('bootloader').info(
            'JS retry success [%s] at %s | time: %s | retries: %s',
            c,
            a,
            b('performanceAbsoluteNow')() - g,
            v[a]
          ),
          b('ResourceTimingsStore').measureResponseReceived('js', i),
          d();
      });
      f.onreadystatechange = function () {
        ['loaded', 'complete'].includes(this.readyState) &&
          (b('ResourceTimingsStore').measureResponseReceived('js', i),
          h.bind(undefined, d)());
      }.bind(this);
      f.onerror = h.bind(undefined, function () {
        b('ResourceTimingsStore').measureResponseReceived('js', i),
          v[a] || (v[a] = 0),
          T() && v[a] < N.length
            ? (w.push(b('performanceAbsoluteNow')()),
              setTimeout(function () {
                if (!T()) return;
                var b = f.parentNode;
                b.removeChild(f);
                da(a, c, d, b);
              }, N[v[a]]),
              v[a]++)
            : ((u[a] = !0),
              b('FBLogger')('bootloader').warn(
                'JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s',
                c,
                a,
                b('performanceAbsoluteNow')() - g,
                v[a],
                Object.keys(s).length
              ),
              d());
      });
      !b('Visibility').isHidden() && b('BootloaderConfig').staggerJsDownloads
        ? ea(f)
        : e.appendChild(f);
      return f;
    }
    var V = !1,
      W = [],
      X = !1;
    function ea(a) {
      V ? (W.push(a), X || ((X = !0), fa())) : (S().appendChild(a), (V = !0));
    }
    function fa() {
      __p && __p();
      b('setTimeoutAcrossTransitions')(
        b('TimeSlice').guard(
          function () {
            __p && __p();
            var a = W.shift();
            S().appendChild(a);
            if (W.length === 0) (V = !1), (X = !1);
            else if (b('Visibility').isHidden()) {
              while (W.length) S().appendChild(W.shift());
              V = !1;
              X = !1;
            } else fa();
          },
          'Bootloader staggered download scheduler',
          { propagationType: b('TimeSlice').PropagationType.ORPHAN }
        ),
        0
      );
    }
    function ga(a, c, d, e) {
      __p && __p();
      var f = function () {
        return $.done([d], c);
      };
      s[c] = b('performanceAbsoluteNow')();
      if (a === 'js') da(c, d, f, e);
      else if (a === 'async') ha(c, f);
      else if (a === 'css') {
        if (d == null) {
          b('FBLogger')('bootloader').mustfix(
            'name must be defined when loading CSS resource'
          );
          return;
        }
        a = r[d].crossOrigin;
        b('CSSLoader').loadStyleSheet(d, c, e, !!a, f, function () {
          b('FBLogger')('bootloader').warn(
            'CSS timeout [%s] at %s | concurrency: %s',
            d,
            c,
            Object.keys(s).length
          ),
            (u[c] = !0),
            f();
        });
      }
    }
    function ha(a, c) {
      __p && __p();
      var d = b('getAsyncParams')('GET');
      for (var e in d) {
        var f = encodeURIComponent(e),
          g = encodeURIComponent(d[e]);
        a += '&' + f + '=' + g;
      }
      var h = b('getSameOriginTransport')();
      h.open('GET', a, !0);
      var i = b('TimeSlice').getGuardedContinuation(
        'Bootloader _requestHastePayload'
      );
      h.onreadystatechange = function () {
        h.readyState === 4 &&
          i(function () {
            var d =
              h.status === 200
                ? JSON.parse(b('CSRFGuard').clean(h.responseText))
                : {};
            d == null &&
              b('FBLogger')('bootloader').warn(
                'Invalid response from %s: %s',
                a,
                h.responseText.substr(0, 256)
              );
            var e = ia();
            e(d, c);
          });
      };
      h.send();
    }
    function ia() {
      __p && __p();
      return b('TimeSlice').guard(
        function (a, c) {
          __p && __p();
          var d = a.jsmods,
            e = a.resource_map,
            f = a.bootloadable,
            g = a.ixData,
            i = a.bxData,
            j = a.gkxData,
            k = a.qexData;
          a = a.allResources;
          e && $.setResourceMap(e);
          g && h.add(g);
          i && b('bx').add(i);
          j && b('gkx').add(j);
          k && b('qex').add(k);
          f && $.enableBootload(f);
          $.loadResources(a || [], function () {
            new (b('ServerJS'))().handle(d || {}), c();
          });
        },
        'Bootloader receiveEndpointData',
        { propagationType: b('TimeSlice').PropagationType.CONTINUATION }
      );
    }
    function ja(a) {
      if (!r[a]) {
        b('FBLogger')('bootloader').mustfix('Missing unloading resource %s', a);
        return;
      }
      r[a].type === 'css' &&
        (b('CSSLoader').unloadStyleSheet(a),
        delete l[a],
        D.unsatisfyPersistentDependency(a),
        x[a] && (x[a].cancel(), delete x[a]));
    }
    function Y(a, c, d, e) {
      __p && __p();
      var f = {},
        g = {},
        h = {},
        i = window.CavalryLogger && window.CavalryLogger.getInstance();
      a.forEach(function (a) {
        var c = r[a];
        if (!c) {
          b('FBLogger')('bootloader').mustfix(
            'Unable to resolve resource %s.',
            a
          );
          return;
        }
        c.nonblocking && !b('BootloaderConfig').assumeNotNonblocking
          ? (h[a] = !0)
          : (g[a] = !0);
        l[a] ||
          ((l[a] = !0),
          (c.permanent || b('BootloaderConfig').assumePermanent) && (n[a] = !0),
          (f[a] = c),
          i && i.measureResources({ name: a, type: c.type }, d));
      });
      a = c;
      if (e) {
        var j = b('performanceAbsoluteNow')();
        a = function () {
          var a = Math.round(b('performanceAbsoluteNow')() - j),
            d = Object.keys(g).length,
            i = Object.keys(f);
          i = {
            blocking_resources_downloaded: i.filter(function (a) {
              return a in g;
            }).length,
            blocking_resources_count: d,
            all_resources_downloaded: i.length,
            all_resources_count: d + Object.keys(h).length,
            err_count: Object.values(f).filter(function (a) {
              a = a.src;
              return a in u;
            }).length,
          };
          d = b('TimeSlice').getContext();
          i = babelHelpers['extends']({}, e, i, {
            timeslice_context: d && d.name,
            start_time: j,
            duration: a,
          });
          b('Arbiter').inform(Q.BOOTLOAD, i, 'persistent');
          c && c();
        };
      }
      a && D.registerCallback(a, Object.keys(g));
      var k = document.createDocumentFragment();
      Object.entries(f).forEach(function (a) {
        var b = a[0];
        a = a[1];
        var c = a.type;
        a = a.src;
        ga(c, a, b, k);
      });
      S().appendChild(k);
    }
    function ka() {
      return b('TimeSlice').guard(
        function (a, c, d, e) {
          if (c) {
            for (
              var f = arguments.length, g = new Array(f > 4 ? f - 4 : 0), h = 4;
              h < f;
              h++
            )
              g[h - 4] = arguments[h];
            c.apply(a, g);
          }
          e &&
            b('FBLogger')('bootloader').warn(
              'JS loading error [%s] at %s',
              d,
              a.src
            );
          $.done([d]);
        },
        'Bootloader _onScriptDone',
        { propagationType: b('TimeSlice').PropagationType.CONTINUATION }
      );
    }
    function la() {
      __p && __p();
      if (B) return;
      B = !0;
      Array.from(document.getElementsByTagName('link')).forEach(function (a) {
        var c;
        (c = a.getAttribute('data-bootloader-hash')) &&
          ((r[c] = { src: a.href, type: 'css' }),
          (a.getAttribute('data-permanent') ||
            b('BootloaderConfig').assumePermanent) &&
            ((r[c].permanent = 1), (n[c] = !0)),
          b('CSSLoader').registerLoadedStyleSheet(c, a) ||
            b('FBLogger')('bootloader').warn(
              'Duplicate CSS link loaded for [%s]: %s',
              c,
              a.href
            ),
          $.done([c]),
          (A[c] = !0));
      });
      Array.from(document.getElementsByTagName('script')).forEach(function (a) {
        __p && __p();
        var b;
        if ((b = a.getAttribute('data-bootloader-hash'))) {
          r[b] = { src: a.src, type: 'js' };
          if (a.getAttribute('async'))
            if (window._btldr && window._btldr[b]) $.done([b]);
            else {
              var c = ka();
              a.onload = c.bind(null, a, a.onload, b, !1);
              a.onerror = c.bind(null, a, a.onerror, b, !0);
              l[b] = !0;
            }
          else $.done([b]);
          A[b] = !0;
        }
      });
    }
    var Z = {
        _insertSorted: function (a) {
          __p && __p();
          if (I.length === 0) {
            I.push(a);
            return;
          }
          var b = 0,
            c = I.length - 1,
            d,
            e;
          while (b <= c) {
            d = Math.floor((b + c) / 2);
            e = I[d];
            if (e.priority < a.priority) b = d + 1;
            else if (e.priority > a.priority) c = d - 1;
            else {
              I.splice(d, 0, a);
              return;
            }
          }
          I.splice(b, 0, a);
        },
        enqueuePreloadJob: function (a, b) {
          b === void 0 && (b = 1),
            !(a in m) &&
              !(a in l) &&
              !(a in J) &&
              ((J[a] = !0),
              Z._insertSorted({ hash: a, priority: b }),
              Z.runPreloadQueue());
        },
        runPreloadQueue: function () {
          __p && __p();
          if ((b('BootloaderConfig').preloader_preload_after_dd && !M) || !L)
            return;
          var a = S(),
            c = function () {
              var b = I.pop(),
                c = r[b.hash];
              if (!c) return 'continue';
              !l[b.hash] &&
                !m[b.hash] &&
                ((F[b.hash] = !0),
                U(c.src, c.type, b.hash, a, function () {
                  L &&
                    (delete F[b.hash],
                    Z.runPreloadQueue(),
                    Z._enqueueScriptLoadingJob(b.hash, r[b.hash].type));
                }));
            };
          while (
            Z._isNetworkIdle() &&
            I.length > 0 &&
            Object.keys(F).length < ba
          ) {
            var d = c();
            if (d === 'continue') continue;
          }
        },
        _enqueueScriptLoadingJob: function (a, b) {
          if (b === 'css') return;
          l[a] || (H.push(a), Z._issueIdleCallback());
        },
        _runScriptLoadingQueue: function () {
          K = null;
          var a = function () {
            var a = H.shift();
            l[a] ||
              ((G[a] = !0),
              Y([a], function () {
                L && (delete G[a], Z._issueIdleCallback());
              }));
          };
          while (H.length > 0 && Object.keys(G).length < E) a();
        },
        _issueIdleCallback: function () {
          H.length > 0 &&
            Object.keys(G).length < E &&
            !K &&
            (K = b('requestIdleCallback')(Z._runScriptLoadingQueue));
        },
        _isNetworkIdle: function () {
          return Object.keys(s).length == 0;
        },
      },
      $ = {
        preloadModules: function (a) {
          __p && __p();
          if (!C) {
            var c = b('TimeSlice').getGuardedContinuation(
              'Deferred: Bootloader.preloadModules'
            );
            j.push([a, c]);
            return;
          }
          c = document.createDocumentFragment();
          for (
            var a = a,
              d = Array.isArray(a),
              e = 0,
              a = d
                ? a
                : a[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= a.length) break;
              f = a[e++];
            } else {
              e = a.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            f = R(f);
            for (
              var f = f.resources,
                g = Array.isArray(f),
                h = 0,
                f = g
                  ? f
                  : f[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var i;
              if (g) {
                if (h >= f.length) break;
                i = f[h++];
              } else {
                h = f.next();
                if (h.done) break;
                i = h.value;
              }
              i = i;
              var k = r[i];
              if (!k) {
                b('FBLogger')('bootloader').mustfix(
                  'Unable to resolve resource %s.',
                  i
                );
                continue;
              }
              if (m[i] || l[i]) continue;
              U(k.src, k.type, i, c);
            }
          }
          S().appendChild(c);
        },
        loadModules: function (a, c, e) {
          __p && __p();
          c === void 0 && (c = i);
          e === void 0 && (e = 'loadModules: unknown caller');
          var f = function () {
              return c.apply(undefined, arguments);
            },
            g = {
              remove: function () {
                c = i;
              },
            };
          if (!C) {
            var h = 'Deferred: Bootloader.loadModules';
            h = b('TimeSlice').getGuardedContinuation(h);
            k.push([a, f, e, h]);
            return g;
          }
          var j = b('performanceAbsoluteNow')();
          h = JSON.stringify([e, a]);
          var l = !1;
          h in z || ((l = !0), (z[h] = j));
          var m = [],
            n = [],
            o = [];
          h = !1;
          var q = 0;
          a.forEach(function (a) {
            var c = R(a);
            c.needsAsync &&
              (q++,
              a in p
                ? n.push(p[a])
                : b('ifRequired').call(null, a, null, function () {
                    o.push(a);
                  }));
            a in y || ((h = !0), (y[a] = j));
            c.rds && m.push.apply(m, c.rds);
            n.push.apply(n, c.resources);
          });
          if (o.length > 0) {
            var s = b('BootloaderConfig').payloadEndpointURI,
              t = 'async:' + aa++,
              u = encodeURIComponent(o.join(',')),
              v = s.indexOf('?') > -1 ? '&' : '?';
            r[t] = { src: '' + s + v + 'modules=' + u, type: 'async' };
            n.push(t);
            o.forEach(function (a) {
              p[a] = t;
            });
          }
          b('ifRequired')('TimeSliceInteraction', function (b) {
            b.informGlobally('Bootloader.loadResources')
              .addSetAnnotation('requested_hashes', n)
              .addStringAnnotation('bootloader_reference', e)
              .addSetAnnotation('requested_components', a);
          });
          s = null;
          l &&
            (s = {
              ref: e,
              components: a,
              has_new_component: h,
              first_identical_request: l,
              async_resources_count: q,
              async_resources_downloaded: o.length,
            });
          Y(
            n,
            d.bind(null, a, function () {
              f.apply(undefined, arguments), m.length && d.call(null, m, i);
            }),
            null,
            s
          );
          return g;
        },
        loadResources: function (a, b, c, d) {
          __p && __p();
          la();
          if (c) {
            var e = {};
            a.forEach(function (a) {
              e[a] = !0;
            });
            for (var f in l) f in n || f in e || f in A || ja(f);
            A = {};
          }
          Y(a, b, d);
        },
        requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function (
          a
        ) {
          ga('js', a, null, S());
        },
        done: function (a, c) {
          c != null &&
            ((t[c] = b('performanceAbsoluteNow')() - s[c]),
            delete s[c],
            Z.runPreloadQueue()),
            window.CavalryLogger && window.CavalryLogger.done_js(a),
            a.forEach(function (a) {
              a != null &&
                ((l[a] = !0),
                D.satisfyPersistentDependency(a),
                r[a] &&
                  r[a].type === 'css' &&
                  !x[a] &&
                  (x[a] = define(
                    b('CSSLoader').moduleName(a),
                    [],
                    'x',
                    2,
                    null,
                    1
                  )));
            });
        },
        enableBootload: function (a) {
          __p && __p();
          for (var b in a)
            if (!o[b]) {
              o[b] = a[b];
              if (L && a[b].priority && a[b].priority > 0)
                for (
                  var c = a[b].resources,
                    d = Array.isArray(c),
                    e = 0,
                    c = d
                      ? c
                      : c[
                          typeof Symbol === 'function'
                            ? Symbol.iterator
                            : '@@iterator'
                        ]();
                  ;

                ) {
                  var f;
                  if (d) {
                    if (e >= c.length) break;
                    f = c[e++];
                  } else {
                    e = c.next();
                    if (e.done) break;
                    f = e.value;
                  }
                  f = f;
                  Z.enqueuePreloadJob(f, 1);
                }
            }
          C ||
            (la(),
            (C = !0),
            k.forEach(function (a) {
              var b = a[0],
                c = a[1],
                d = a[2];
              a = a[3];
              a(function () {
                $.loadModules.apply($, [b, c, d]);
              });
            }),
            j.forEach(function (a) {
              var b = a[0];
              a = a[1];
              a(function () {
                $.preloadModules.apply($, [b]);
              });
            }),
            (j = []),
            (k = []));
        },
        setResourceMap: function (a) {
          for (var b in a) r[b] || (r[b] = a[b]);
        },
        getURLToHashMap: function () {
          var a = {};
          for (var b in r) a[r[b].src] = b;
          return a;
        },
        loadPredictedResources: function (a, b) {
          a.forEach(function (a) {
            A[a] = !0;
          }),
            Y(a, b);
        },
        loadPredictedResourceMap: function (a, b) {
          $.setResourceMap(a), $.loadPredictedResources(Object.keys(a), b);
        },
        getLoadingUrls: function () {
          var a = {},
            c = b('performanceAbsoluteNow')();
          for (var d in s) a[d] = c - s[d];
          return a;
        },
        getBootloadedComponents: function () {
          return y;
        },
        getLoadedUrlTimes: function () {
          return t;
        },
        getErrorUrls: function () {
          return Object.keys(u);
        },
        notifyDisplayDone: function () {
          M || ((M = !0), Z.runPreloadQueue());
        },
        __debug: {
          callbackManager: D,
          componentMap: o,
          requested: l,
          resources: r,
          retries: v,
          errors: u,
          loading: s,
          predictedResources: A,
          bootloaded: y,
          preloader: Z,
        },
        Events: Q,
      };
    e.exports = $;
  },
  null
);
__d(
  '__debug',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {};
  },
  null
);
__d(
  'ServerJS',
  [
    'ContextualComponent',
    'ErrorUtils',
    'LogviewForcedKeyError',
    'ServerJSDefine',
    'TimeSlice',
    'ex',
    'ge',
    'replaceTransportMarkers',
    '__debug',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 1,
      h = 2,
      i = 0;
    function a() {
      (this.$1 = {}), (this.$2 = null), (this.$3 = {}), (this.$4 = undefined);
    }
    a.prototype.handle = function (a, b) {
      __p && __p();
      this.$4 = b;
      if (a.__guard)
        throw new Error(
          'ServerJS.handle called on data that has already been handled'
        );
      a.__guard = !0;
      k(a.define || [], this.$5, this);
      k(a.markup || [], this.$6, this);
      k(a.elements || [], this.$7, this);
      this.$8(a.contexts || []);
      k(a.instances || [], this.$9, this);
      var c = k(a.pre_display_requires || [], this.$10, this);
      c = c.concat(k(a.require || [], this.$10, this));
      return {
        cancel: function () {
          for (var a = 0; a < c.length; a++) c[a] && c[a].cancel();
        },
      };
    };
    a.prototype.handlePartial = function (a, b) {
      (a.instances || []).forEach(m.bind(null, this.$1, 3));
      (a.markup || []).forEach(m.bind(null, this.$1, 2));
      (a.elements || []).forEach(m.bind(null, this.$1, 2));
      return this.handle(a, b);
    };
    a.prototype.setRelativeTo = function (a) {
      this.$2 = a;
      return this;
    };
    a.prototype.setServerFeatures = function () {
      return this;
    };
    a.prototype.cleanup = function () {
      __p && __p();
      var a = Object.keys(this.$1);
      d.call(
        null,
        a,
        b('TimeSlice').guard(n, 'SeverJS Cleanup requireLazy', {
          propagationType: b('TimeSlice').PropagationType.ORPHAN,
        })
      );
      this.$1 = {};
      function c(c) {
        var d = this.$3[c],
          a = d[0],
          f = d[1];
        d = d[2];
        delete this.$3[c];
        f = f
          ? 'JS::call("' + a + '", "' + f + '", ...)'
          : 'JS::requireModule("' + a + '")';
        a = b('__debug').debugUnresolvedDependencies([a, c]);
        c = b('ex')(
          '%s did not fire because it has missing dependencies.\n%s',
          f,
          a
        );
        throw j(
          new (b('LogviewForcedKeyError'))(
            c,
            'Missing dependencies: ' + f + ' | ' + a
          ),
          d
        );
      }
      for (var f in this.$3)
        b('ErrorUtils').applyWithGuard(
          c,
          this,
          [f],
          null,
          'ServerJS:cleanup id: ' + f
        );
    };
    a.prototype.$5 = function (a, c, d, e) {
      return b('ErrorUtils').applyWithGuard(
        b('ServerJSDefine').handleDefine,
        b('ServerJSDefine'),
        [a, c, d, e, this.$2],
        null,
        'JS::define'
      );
    };
    a.prototype.$10 = function (a, c, d, e) {
      return b('ErrorUtils').applyWithGuard(
        this.$11,
        this,
        [a, c, d, e],
        null,
        c ? 'JS::call' : 'JS::requireModule'
      );
    };
    a.prototype.$11 = function (a, c, d, f) {
      __p && __p();
      a = a.split('@');
      var k = a[0],
        l = a[1];
      typeof c === 'object' && ((d = c), (c = undefined));
      a = [k].concat(d || []);
      var m;
      c ? (m = '__call__' + k + '.' + c) : (m = '__requireModule__' + k);
      m += '__' + i++;
      this.$3[m] = [k, c, l];
      var n = this.$4 && this.$4.bigPipeContext,
        o = b('ErrorUtils').guard(
          function (a) {
            __p && __p();
            var a = b.call(null, k);
            delete this.$3[m];
            f &&
              b('replaceTransportMarkers')(
                { relativeTo: this.$2, bigPipeContext: n },
                f
              );
            if (c) {
              if (!a[c])
                throw j(
                  new TypeError(b('ex')('Module %s has no method "%s"', k, c)),
                  l
                );
              a[c].apply(a, f || []);
              o.__SMmeta = a[c].__SMmeta || {};
              o.__SMmeta.module = o.__SMmeta.module || k;
              o.__SMmeta.name = o.__SMmeta.name || c;
            }
          }.bind(this),
          c
            ? "JS::call('" + k + "', '" + c + "', ...)"
            : "JS::requireModule('" + k + "')"
        );
      return define(m, a, o, g | h, this, 1, this.$4);
    };
    a.prototype.$9 = function (a, c, d, e) {
      return b('ErrorUtils').applyWithGuard(
        this.$12,
        this,
        [a, c, d, e],
        null,
        'JS::instance'
      );
    };
    a.prototype.$12 = function (a, c, d, e) {
      __p && __p();
      var f = null;
      a = a.split('@');
      var g = a[0];
      a = a[1];
      if (c) {
        var i = this.$4 && this.$4.bigPipeContext;
        f = function () {
          var a = b.call(null, c[0]);
          b('replaceTransportMarkers')(
            { relativeTo: this.$2, bigPipeContext: i },
            d
          );
          var e = Object.create(a.prototype);
          a.apply(e, d);
          return e;
        }.bind(this);
      }
      define(g, c, f, h, null, e);
    };
    a.prototype.$6 = function (a, c, d) {
      return b('ErrorUtils').applyWithGuard(
        this.$13,
        this,
        [a, c, d],
        null,
        'JS::markup'
      );
    };
    a.prototype.$13 = function (a, b, c) {
      a = a.split('@');
      var d = a[0];
      a = a[1];
      define(
        d,
        ['HTML'],
        function (c) {
          try {
            return c.replaceJSONWrapper(b).getRootNode();
          } catch (b) {
            throw j(b, a);
          }
        },
        0,
        null,
        c
      );
    };
    a.prototype.$7 = function (a, c, d, e) {
      return b('ErrorUtils').applyWithGuard(
        this.$14,
        this,
        [a, c, d, e],
        null,
        'JS::element'
      );
    };
    a.prototype.$14 = function (a, c, d, e) {
      __p && __p();
      a = a.split('@');
      var f = a[0],
        h = a[1];
      if (c === null && d) {
        define(f, null, null, 0, null, d);
        return;
      }
      a = [];
      var i = 0;
      e && (a.push(e), (i = g), d++);
      define(
        f,
        a,
        function (a) {
          a = b('ge')(c, a);
          if (!a) {
            var d = '';
            throw j(
              new Error(b('ex')('Could not find element "%s"%s', c, d)),
              h
            );
          }
          return a;
        },
        i,
        null,
        d
      );
    };
    a.prototype.$8 = function (a) {
      b('ErrorUtils').applyWithGuard(
        this.$15,
        this,
        [a],
        null,
        'ContextualComponents'
      );
    };
    a.prototype.$15 = function (a) {
      __p && __p();
      var c = this.$4 && this.$4.bigPipeContext;
      a.map(
        function (a) {
          b('replaceTransportMarkers')(
            { relativeTo: this.$2, bigPipeContext: c },
            a
          );
          var d = a[0];
          return [a, l(d)];
        }.bind(this)
      )
        .sort(function (a, b) {
          return a[1] - b[1];
        })
        .forEach(function (a) {
          a = a[0];
          var c = a[0];
          a = a[1];
          b('ContextualComponent').register({ element: c, isRoot: a });
        });
    };
    function j(a, b) {
      a.serverHash = b;
      return a;
    }
    (function () {
      d(['HTML'], function (a) {});
    });
    function k(a, b, c) {
      return a.map(function (a) {
        return b.apply(c, a);
      });
    }
    function l(a) {
      var b = 0;
      while (a) (a = a.parentElement), b++;
      return b;
    }
    function m(b, c, a) {
      var d = a[0];
      d in b || (a[c] = (a[c] || 0) + 1);
      b[d] = !0;
    }
    function n() {
      return {};
    }
    e.exports = a;
  },
  null
);
__d(
  'ReactExperimentalProdProfiling',
  ['requireWeak'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null,
      h = !1,
      i = 0,
      j = {};
    a = {
      startProfiling: function () {
        var a = (i++).toString();
        g !== null
          ? (j[a] = g.addUserTimingListener())
          : (j[a] = function () {});
        var b = function () {
          j[a](), delete j[a];
        };
        return { stopProfiling: b };
      },
      onReactDomLoad: function (a) {
        __p && __p();
        if (g !== null) return;
        g = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        if (typeof g.addUserTimingListener !== 'function') {
          b('requireWeak')('warning', function (a) {
            a(
              h,
              'ReactExperimentalProdProfiling.onReactDomLoad() cannot find the necessary React internals.'
            ),
              (h = !0);
          });
          g = null;
          return;
        }
        Object.keys(j).map(function (a) {
          g && (j[a] = g.addUserTimingListener());
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'ArtilleryUserTimingProfiler',
  ['ArtilleryExperiments', 'Bootloader', 'ReactExperimentalProdProfiling'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = window.PerformanceObserver,
      h = window.PerformanceObserverEntryList,
      i = null,
      j,
      k = [],
      l = [];
    function m() {
      return j != null ? j.isActive() : l.length > 0;
    }
    n() &&
      b('Bootloader').loadModules(
        ['GeneratedArtilleryUserTimingSink'],
        function (a) {
          __p && __p();
          j = new a();
          j.setScalar('navStart', window.performance.timing.navigationStart);
          for (var a = 0; a < l.length; a++) {
            var b = l[a];
            b();
          }
          l.length = 0;
          k.forEach(function (a) {
            return o(a, null);
          });
          k.length = 0;
        },
        'ArtilleryUserTimingProfiler'
      );
    function n() {
      if (
        navigator &&
        navigator.userAgent.indexOf('Android') > -1 &&
        navigator.userAgent.indexOf('Chrome') > -1
      ) {
        var a = navigator.userAgent.match(/Chrome\/(\d*)/);
        if (a) {
          a = Number(a[1]);
          if (a < 60) return !1;
        }
      }
      return (
        b('ArtilleryExperiments').user_timing &&
        window &&
        window.performance &&
        window.performance.timing &&
        window.performance.timing.navigationStart &&
        g &&
        h
      );
    }
    function o(a, b) {
      j != null
        ? a.getEntries().forEach(function (a) {
            j.addEntry(a);
          })
        : k.push(a);
    }
    function p() {
      return { react: b('ReactExperimentalProdProfiling').startProfiling() };
    }
    function q(a) {
      a.react.stopProfiling();
    }
    var r = {
      close: function (a) {
        a === void 0 && !1;
        return null;
      },
    };
    function a() {
      __p && __p();
      if (!n()) return null;
      i === null && ((i = new g(o)), i.observe({ entryTypes: ['measure'] }));
      var a = !1,
        b;
      j == null
        ? ((b = r),
          l.push(function () {
            a || (b = j.open());
          }))
        : (b = j.open());
      var c = p();
      return {
        close: function (d) {
          d === void 0 && (d = !1);
          a = !0;
          q(c);
          d = b.close(d);
          !m() && i !== null && (i.disconnect(), (i = null));
          return d;
        },
      };
    }
    c = { startRecording: a };
    e.exports = c;
  },
  null
);
__d(
  'LogBuffer',
  ['CircularBuffer'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = a.__fbNativeSetTimeout || a.setTimeout,
      h = 5e3,
      i = {},
      j = {};
    c = {
      write: function (a, c) {
        var d = (i[a] = i[a] || new (b('CircularBuffer'))(h));
        d.write(c);
        j[a] &&
          j[a].forEach(function (a) {
            try {
              a(c);
            } catch (a) {}
          });
      },
      read: function (a) {
        if (!i[a]) return [];
        else return i[a].read();
      },
      tail: function (a, b) {
        __p && __p();
        if (typeof b !== 'function') return;
        j[a] = j[a] || [];
        j[a].push(b);
        if (i[a]) {
          a = i[a];
          a.read().forEach(function (a) {
            try {
              b(a);
            } catch (a) {}
          });
        }
      },
      expand: function (a, c) {
        var d = i[a];
        d ? d.expand(c) : (i[a] = new (b('CircularBuffer'))(c));
      },
      clear: function (a) {
        i[a] &&
          g(function () {
            i[a].clear();
          }, 0);
      },
    };
    e.exports = c;
  },
  null
);
__d(
  'OnDemandExecutionContextObserver',
  ['TimeSlice'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      (this.$5 = !1),
        (this.$4 = !1),
        (this.$1 = 0),
        (this.$2 = {}),
        (this.$3 = 0);
    }
    a.prototype.onNewContextCreatedWhileEnabled = function (a, b, c) {
      throw Error('unimplemented abstract method');
    };
    a.prototype.onNewContextCreatedWhileDisabled = function (a, b, c) {};
    a.prototype.onContextCanceled = function (a, b) {};
    a.prototype.onBeforeContextStartedWhileEnabled = function (a, b, c) {
      throw Error('unimplemented abstract method');
    };
    a.prototype.onBeforeContextStartedWhileDisabled = function (a, b, c) {};
    a.prototype.onAfterContextStartedWhileEnabled = function (a, b, c, d) {
      throw Error('unimplemented abstract method');
    };
    a.prototype.onAfterContextStartedWhileDisabled = function (a, b, c, d) {};
    a.prototype.onAfterContextEndedWhileEnabled = function (a, b, c, d) {
      throw Error('unimplemented abstract method');
    };
    a.prototype.onAfterContextEndedWhileDisabled = function (a, b, c, d) {};
    a.prototype.onNewContextCreated = function (a, b, c) {
      if (this.isEnabled())
        return this.onNewContextCreatedWhileEnabled(a, b, c);
      else {
        this.onNewContextCreatedWhileDisabled(a, b, c);
        return null;
      }
    };
    a.prototype.onBeforeContextStarted = function (a, b, c) {
      if (this.isEnabled())
        return this.onBeforeContextStartedWhileEnabled(a, b, c);
      else {
        this.onBeforeContextStartedWhileDisabled(a, b, c);
        return null;
      }
    };
    a.prototype.onAfterContextStarted = function (a, b, c, d) {
      c = c;
      if (this.isEnabled())
        return this.onAfterContextStartedWhileEnabled(a, b, c, d);
      else {
        this.onAfterContextStartedWhileDisabled(a, b, c, d);
        return null;
      }
    };
    a.prototype.onAfterContextEnded = function (a, b, c, d) {
      if (this.isEnabled()) {
        var e = c;
        this.onAfterContextEndedWhileEnabled(a, b, e, d);
      } else this.onAfterContextEndedWhileDisabled(a, b, c, d);
      this.$4 && !this.$5 && a.isRoot && (this.onDisable(), (this.$4 = !1));
    };
    a.prototype.onDisable = function () {};
    a.prototype.onEnable = function () {};
    a.prototype.getBeforeID = function () {
      throw Error('unimplemented abstract method');
    };
    a.prototype.getAfterID = function () {
      throw Error('unimplemented abstract method');
    };
    a.prototype.isEnabled = function () {
      return this.$4;
    };
    a.prototype.__getExpiryCallback = function () {
      var a = ++this.$1;
      this.$2[a] = !0;
      this.$3++;
      return function () {
        this.$2[a] &&
          (delete this.$2[a], this.$3--, this.$3 === 0 && (this.$5 = !1));
      }.bind(this);
    };
    a.prototype.expressInterest = function () {
      var a = this.__getExpiryCallback();
      this.isEnabled() ||
        (this.onEnable(),
        b('TimeSlice').catchUpOnDemandExecutionContextObservers(this));
      this.$4 = !0;
      this.$5 = !0;
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'Heartbeat',
  [
    'Env',
    'ExecutionContextObservers',
    'FBLogger',
    'LogBuffer',
    'OnDemandExecutionContextObserver',
    'TimeSlice',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    d = babelHelpers.inherits(c, b('OnDemandExecutionContextObserver'));
    g = d && d.prototype;
    function c() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = g.constructor).call.apply(a, [this].concat(d))),
        (this.$HeartbeatObserver1 = null),
        (this.$HeartbeatObserver2 = 33),
        (this.$HeartbeatObserver3 = 60),
        (this.$HeartbeatObserver4 = null),
        (this.$HeartbeatObserver5 = null),
        (this.$HeartbeatObserver6 = {}),
        (this.$HeartbeatObserver7 = null),
        (this.$HeartbeatObserver8 = []),
        (this.$HeartbeatObserver9 = 1),
        (this.$HeartbeatObserver10 = null),
        b
      );
    }
    c.prototype.onNewContextCreatedWhileEnabled = function (a, b, c) {
      return null;
    };
    c.prototype.onBeforeContextStartedWhileEnabled = function (a, b, c) {
      return null;
    };
    c.prototype.onAfterContextStartedWhileEnabled = function (a, b, c, d) {
      return null;
    };
    c.prototype.onAfterContextEndedWhileEnabled = function (a, b, c, d) {
      b = a.absBeginTimeMs;
      c = a.absEndTimeMs;
      d = a.name;
      a = a.isRoot;
      a &&
        b != null &&
        c != null &&
        (this.$HeartbeatObserver6[d]
          ? (this.$HeartbeatObserver11({ type: 'ignored_exec', timeMs: b }, !0),
            this.$HeartbeatObserver11({ type: 'ignored_exec', timeMs: c }, !1))
          : (this.$HeartbeatObserver11({ type: 'exec', timeMs: b }, !0),
            this.$HeartbeatObserver11({ type: 'exec', timeMs: c }, !1)));
    };
    c.prototype.__getExpiryCallback = function () {
      var a = g.__getExpiryCallback.call(this),
        c = b('performanceAbsoluteNow')();
      this.$HeartbeatObserver8.push([c, a]);
      return function () {
        a(), this.$HeartbeatObserver12();
      }.bind(this);
    };
    c.prototype.onEnable = function () {
      __p && __p();
      var c = b('Env').timeslice_heartbeat_config || {};
      this.$HeartbeatObserver2 = c.pollIntervalMs || this.$HeartbeatObserver2;
      this.$HeartbeatObserver3 =
        c.idleGapThresholdMs || this.$HeartbeatObserver3;
      this.$HeartbeatObserver6 =
        c.ignoredTimesliceNames || this.$HeartbeatObserver6;
      c = a.__fbNativeSetInterval || a.setInterval;
      this.$HeartbeatObserver5 = c(
        this.$HeartbeatObserver13.bind(this),
        this.$HeartbeatObserver2
      );
      c = b('performanceAbsoluteNow')();
      this.$HeartbeatObserver4 = { type: 'beat', timeMs: c };
      this.$HeartbeatObserver7 = c + this.$HeartbeatObserver2;
      this.$HeartbeatObserver10 = c;
    };
    c.prototype.onDisable = function () {
      this.$HeartbeatObserver5 && clearInterval(this.$HeartbeatObserver5),
        (this.$HeartbeatObserver5 = null);
    };
    c.prototype.getBeforeID = function () {
      return b('ExecutionContextObservers').beforeIDs.HEARTBEAT;
    };
    c.prototype.getAfterID = function () {
      return b('ExecutionContextObservers').afterIDs.HEARTBEAT;
    };
    c.prototype.$HeartbeatObserver14 = function (event) {
      return event.type == 'beat' || event.type == 'ignored_exec';
    };
    c.prototype.$HeartbeatObserver11 = function (a, c) {
      __p && __p();
      if (this.$HeartbeatObserver4 == null) {
        b('FBLogger')('FIXME').mustfix('lastEvent should never be null');
        this.$HeartbeatObserver4 = a;
        return;
      }
      var d = this.$HeartbeatObserver4.timeMs,
        e = a.timeMs;
      if (c) {
        c = this.$HeartbeatObserver7 + this.$HeartbeatObserver3;
        c = e > c;
        if (this.$HeartbeatObserver4.type === 'exec')
          a.type === 'exec'
            ? this.$HeartbeatObserver15(
                d,
                e,
                c ? 'likely_btwn_exec' : 'btwn_exec'
              )
            : this.$HeartbeatObserver14(a) &&
              this.$HeartbeatObserver15(
                d,
                e,
                c ? 'likely_post_exec' : 'post_exec'
              );
        else if (this.$HeartbeatObserver14(this.$HeartbeatObserver4))
          if (a.type === 'exec')
            this.$HeartbeatObserver15(d, e, c ? 'likely_pre_exec' : 'pre_exec');
          else if (this.$HeartbeatObserver14(a) && c) {
            c =
              a.type === 'beat' ? 'delayed_beat' : 'delayed_beat_btwn_ignored';
            this.$HeartbeatObserver15(d, e, c);
          }
      }
      this.$HeartbeatObserver4 = a;
    };
    c.prototype.$HeartbeatObserver15 = function (a, c, d) {
      a < c &&
        b('LogBuffer').write('time_slice_heartbeat', {
          begin: a,
          end: c,
          id: this.$HeartbeatObserver9++,
          parentID: null,
          guard: 'browser time: ' + d,
          representsExecution: !1,
        });
    };
    c.prototype.$HeartbeatObserver13 = function () {
      var a = b('performanceAbsoluteNow')();
      this.$HeartbeatObserver12(a);
      this.$HeartbeatObserver11({ type: 'beat', timeMs: a }, !0);
      this.$HeartbeatObserver7 = a + this.$HeartbeatObserver2;
    };
    c.prototype.$HeartbeatObserver12 = function (a) {
      __p && __p();
      a = a || b('performanceAbsoluteNow')();
      while (this.$HeartbeatObserver8.length > 0) {
        var c = this.$HeartbeatObserver8[0],
          d = c[0];
        c = c[1];
        if (a - d > i.MAX_SINGLE_INTEREST_TIME_MS)
          c(), this.$HeartbeatObserver8.shift();
        else break;
      }
      d = this.$HeartbeatObserver10;
      a - d > i.MAX_ENABLE_TO_DISABLE_TIME_MS && this.$HeartbeatObserver16();
    };
    c.prototype.$HeartbeatObserver16 = function () {
      __p && __p();
      for (
        var a = this.$HeartbeatObserver8,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        d[0];
        d = d[1];
        d();
      }
      this.$HeartbeatObserver8 = [];
    };
    var h = new c();
    b('TimeSlice').registerExecutionContextObserver(h);
    var i = {
      MAX_SINGLE_INTEREST_TIME_MS: 6e4,
      MAX_ENABLE_TO_DISABLE_TIME_MS: 4 * 6e4,
      get: function () {
        return h;
      },
      enableHeartbeat: function () {},
      disablePageHeartbeat: function () {},
    };
    e.exports = i;
  },
  3
);
__d(
  'ProfilingCountersStore',
  ['IntervalTrackingBoundedBuffer'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = new (b('IntervalTrackingBoundedBuffer'))(),
      h = {
        getInstance: function () {
          return g;
        },
        toMap: function (a) {
          var b = {};
          a.forEach(function (a) {
            return (b[a.getTimeSliceContextID()] = a);
          });
          return b;
        },
        getNestedTotals: function (a) {
          return h._accumulateOverNestedActiveCounters(
            a,
            function (a, b) {
              h._addOnto(b, a.getActiveCounters().getTotals());
              return b;
            },
            {}
          );
        },
        _accumulateOverNestedActiveCounters: function (a, b, c) {
          __p && __p();
          c = c;
          a.hasActiveCounters() && (c = b(a, c));
          if (a.processedNestedContexts != null)
            for (
              var a = a.processedNestedContexts,
                d = Array.isArray(a),
                e = 0,
                a = d
                  ? a
                  : a[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var f;
              if (d) {
                if (e >= a.length) break;
                f = a[e++];
              } else {
                e = a.next();
                if (e.done) break;
                f = e.value;
              }
              f = f;
              c = h._accumulateOverNestedActiveCounters(f, b, c);
            }
          return c;
        },
        _getMaximumAttribution: function (a, b) {
          __p && __p();
          if (a.length === 0) return null;
          for (
            var c = a,
              d = Array.isArray(c),
              e = 0,
              c = d
                ? c
                : c[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= c.length) break;
              f = c[e++];
            } else {
              e = c.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            if (b.propagatedAttributions && b.propagatedAttributions[f] != null)
              return f;
          }
          f = null;
          e = null;
          for (
            var d = a,
              c = Array.isArray(d),
              a = 0,
              d = c
                ? d
                : d[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var g;
            if (c) {
              if (a >= d.length) break;
              g = d[a++];
            } else {
              a = d.next();
              if (a.done) break;
              g = a.value;
            }
            g = g;
            if (b.newAttributions && b.newAttributions[g] != null) {
              var h = b.newAttributions[g].newCounterIdx;
              (e == null || h < e) && ((f = g), (e = h));
            }
          }
          return f;
        },
        getNestedTotalsByAttributions: function (a, b) {
          __p && __p();
          return h._accumulateOverNestedActiveCounters(
            a,
            function (a, c) {
              __p && __p();
              var d = h._getMaximumAttribution(b, a);
              if (d) {
                d = h._getAttributedAndUnattributedForThisContext(d, a);
                var e = d.attributed;
                d = d.unattributed;
                e != null && h._addOnto(c.attributed, e);
                d != null && h._addOnto(c.unattributed, d);
              } else
                h._addOnto(c.unattributed, a.getActiveCounters().getTotals());
              return c;
            },
            { attributed: {}, unattributed: {} }
          );
        },
        _getAttributedAndUnattributedForThisContext: function (a, b) {
          __p && __p();
          var c = b.getActiveCounters().getTotals();
          if (
            b.propagatedAttributions != null &&
            b.propagatedAttributions[a] != null
          )
            return { attributed: c, unattributed: null };
          else if (b.newAttributions != null && b.newAttributions[a] != null) {
            b = b.newAttributions[a].snapshotAtStart;
            if (b != null) {
              a = Object.entries(b);
              for (var d = 0; d < a.length; d++) {
                var e = a[d],
                  f = e[0];
                e = e[1];
                e = c[f] - e;
                e === 0 ? delete c[f] : (c[f] = e);
              }
              return { attributed: c, unattributed: b };
            } else return { attributed: c, unattributed: null };
          } else return { attributed: null, unattributed: c };
        },
        _addOnto: function (a, b) {
          b = Object.entries(b);
          for (var c = 0; c < b.length; c++) {
            var d = b[c],
              e = d[0];
            d = d[1];
            a[e] = (a[e] || 0) + d;
          }
        },
      };
    e.exports = h;
  },
  null
);
__d(
  'ProfilingCounters',
  [
    'ErrorUtils',
    'ExecutionContextObservers',
    'OnDemandExecutionContextObserver',
    'ProfilingCountersStore',
    'TimeSlice',
    'TimeSliceInteractionSV',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    b('performanceAbsoluteNow')();
    var h = {
        ALL: 'ALL',
        ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC:
          'ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC',
      },
      i = 100,
      j = [];
    g = babelHelpers.inherits(k, b('OnDemandExecutionContextObserver'));
    g && g.prototype;
    k.prototype.onNewContextCreatedWhileEnabled = function (a, b, c) {
      return l
        .currentContext()
        .getPropagatedContextForChild(!!(c && c.isContinuation));
    };
    k.prototype.onBeforeContextStartedWhileEnabled = function (a, b, c) {
      __p && __p();
      var d = c && c.propagateCounterAttribution,
        e = null;
      if (a.executionNumber > 0 && b) {
        var f = Object.entries(b);
        for (var g = 0; g < f.length; g++) {
          var i = f[g],
            j = i[0];
          i = i[1];
          var k = i.propagationType;
          k !== 'ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC' &&
            ((e = e || {}), (e[j] = i));
        }
      } else e = b;
      k = l.currentContext().getExecutionContext(!!(c && c.isContinuation), e);
      j = new l(!1, k, a.contextID);
      d != null && j.addAttribution(d, h.ALL);
      l.nestContext(j);
      return null;
    };
    k.prototype.onAfterContextStartedWhileEnabled = function (a, b, c, d) {
      return null;
    };
    k.prototype.onAfterContextEndedWhileEnabled = function (a, c, d, e) {
      c = l.unnestContext();
      a.isRoot && b('ProfilingCountersStore').getInstance().pushElement(c);
    };
    k.prototype.getBeforeID = function () {
      return b('ExecutionContextObservers').beforeIDs.PROFILING_COUNTERS;
    };
    k.prototype.getAfterID = function () {
      return b('ExecutionContextObservers').afterIDs.PROFILING_COUNTERS;
    };
    k.prototype.onDisable = function () {
      l.resetState();
    };
    function k() {
      g.apply(this, arguments);
    }
    l.getObserver = function () {
      l.$2 || (l.$2 = new k());
      return l.$2;
    };
    l.wrapInSingleContext = function (a) {
      var b = new l(!1, null, 0);
      a.forEach(function (a) {
        return b.$3(a, !1);
      });
      return b;
    };
    l.startTimingInContext = function (a, b) {
      if (!l.getObserver().isEnabled()) return null;
      for (var c = 0; c < j.length; c++) {
        var d = j[c];
        if (d.getTimeSliceContextID() === b)
          return d.getActiveCounters().startTiming(a);
      }
      return null;
    };
    l.stopTimingInContext = function (a, b) {
      __p && __p();
      if (!l.getObserver().isEnabled()) return;
      for (var c = 0; c < j.length; c++) {
        var d = j[c];
        if (d.getTimeSliceContextID() === b) {
          d.getActiveCounters().stopTiming(a);
          return;
        }
      }
      return;
    };
    l.startTiming = function (a) {
      return l.currentContext().getActiveCounters().startTiming(a);
    };
    l.stopTiming = function (a) {
      return l.currentContext().getActiveCounters().stopTiming(a);
    };
    l.incrementCounter = function (a, b) {
      l.currentContext().getActiveCounters().incrementCounter(a, b);
    };
    l.currentContext = function () {
      return j[j.length - 1];
    };
    function l(a, b, c) {
      (this.isGlobal = a),
        (this.propagatedAttributions = b),
        (this.newAttributions = null),
        (this.active = null),
        (this.processedNestedContexts = null),
        (this.newAttributionsCount = 0),
        (this.$1 = c);
    }
    l.prototype.addAttribution = function (a, b) {
      this.$4(a) ||
        (this.newAttributions == null && (this.newAttributions = {}),
        (this.newAttributions[a] = {
          newCounterIdx: this.newAttributionsCount,
          propagationType: b,
          snapshotAtStart: this.hasActiveCounters()
            ? this.getActiveCounters().getTotals()
            : null,
        }),
        this.newAttributionsCount++);
      return this;
    };
    l.prototype.$5 = function (a, b) {
      return b != null && b[a] != null;
    };
    l.prototype.$4 = function (a) {
      return (
        this.$5(a, this.propagatedAttributions) ||
        this.$5(a, this.newAttributions)
      );
    };
    l.$6 = function (a, b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d],
          f = e[0];
        e = e[1];
        var g = e.propagationType;
        (g === h.ALL || b) && (a[f] = e);
      }
    };
    l.prototype.getPropagatedContextForChild = function (a) {
      __p && __p();
      var b;
      if (this.newAttributions == null)
        if (this.propagatedAttributions == null || a)
          return this.propagatedAttributions;
        else {
          b = Object.entries(this.propagatedAttributions);
          var c = !0;
          for (var d = 0; d < b.length; d++) {
            var e = b[d];
            e[0];
            e = e[1];
            if (e.propagationType === h.ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC) {
              c = !1;
              break;
            }
          }
          if (c) return this.propagatedAttributions;
        }
      e = {};
      this.propagatedAttributions != null &&
        l.$6(e, a, b || Object.entries(this.propagatedAttributions));
      this.newAttributions != null &&
        l.$6(e, a, Object.entries(this.newAttributions));
      return e;
    };
    l.prototype.getExecutionContext = function (a, b) {
      var c = a ? this.getPropagatedContextForChild(a) || {} : {};
      b && l.$6(c, a, Object.entries(b));
      return c;
    };
    l.prototype.getActiveCounters = function () {
      this.active == null && (this.active = new m());
      return this.active;
    };
    l.prototype.$7 = function () {
      return this.isGlobal;
    };
    l.prototype.hasActiveCounters = function () {
      return this.active != null;
    };
    l.nestContext = function (a) {
      j.push(a);
    };
    l.unnestContext = function () {
      if (j.length === 1) throw new Error('popping off the global context');
      var a = j.pop();
      if (a.hasActiveCounters()) var b = a.getActiveCounters();
      (a.hasActiveCounters() || a.processedNestedContexts != null) &&
        l.currentContext().$3(a);
      return a;
    };
    l.prototype.$3 = function (a, b) {
      b === void 0 && (b = !0);
      if (this.$7()) return;
      else
        (b &&
          this.processedNestedContexts != null &&
          this.processedNestedContexts.length >= i) ||
          ((this.processedNestedContexts = this.processedNestedContexts || []),
          this.processedNestedContexts.push(a));
    };
    l.prototype.getTimeSliceContextID = function () {
      return this.$1;
    };
    l.resetState = function () {
      j = [new l(!0, null, 0)];
    };
    l.getHandle = function () {
      return n;
    };
    l.AttributionPropagation = h;
    function m() {
      (this.$1 = null), (this.$2 = null), (this.$3 = null), (this.$4 = null);
    }
    m.prototype.startTiming = function (a) {
      __p && __p();
      var c = m.$5++;
      a = { value: 0, counter: a, id: c, lastStartTime: 0 };
      var d = this.$1 || [];
      this.$2 = this.$2 || {};
      this.$2[c] = d.length;
      d.push(a);
      var e = b('performanceAbsoluteNow')();
      a.lastStartTime = e;
      if (d.length > 1) {
        a = d[d.length - 2];
        a.value += e - a.lastStartTime;
      }
      this.$1 = d;
      return c;
    };
    m.prototype.stopTiming = function (a) {
      __p && __p();
      var c = b('performanceAbsoluteNow')(),
        d = this.$2,
        e = this.$1;
      if (d == null || e == null) {
        b('ErrorUtils').reportError(
          new Error('token does not match the counter context')
        );
        return 0;
      }
      var f = d[a];
      delete d[a];
      if (f == null || e[f] == null) return 0;
      a = null;
      var g = 0;
      while (e.length - 1 > f) {
        var h = e.pop();
        g += h.value;
        delete d[h.id];
        a == null && h.lastStartTime != null && (a = h.lastStartTime);
      }
      h = e.pop();
      h.value += c - (a || h.lastStartTime);
      h.value += g;
      f = this.$4 || {};
      f[h.counter] = f[h.counter] || 0;
      f[h.counter] += h.value;
      e.length > 0 && (e[e.length - 1].lastStartTime = c);
      this.$1 = e;
      this.$4 = f;
      this.$2 = d;
      return h.value;
    };
    m.prototype.incrementCounter = function (a, b) {
      var c = this.$3 || {};
      c[a] = c[a] || 0;
      c[a] += b;
      this.$3 = c;
    };
    m.prototype.getTotals = function () {
      return babelHelpers['extends']({}, this.$4 || {}, this.$3 || {});
    };
    m.prototype.openCounterCount = function () {
      return this.$1 != null ? this.$1.length : 0;
    };
    m.$5 = 1;
    j.push(new l(!0, null, 0));
    b('TimeSlice').registerExecutionContextObserver(l.getObserver());
    var n = l.getObserver().expressInterest();
    a.ProfilingCounters = l;
    e.exports = l;
  },
  3
);
__d(
  'ArtilleryRequestDataCollector',
  [
    'ArtilleryUserTimingProfiler',
    'Env',
    'FBLogger',
    'Heartbeat',
    'ProfilingCounters',
    'ProfilingCountersStore',
    'TimeSlice',
    'requireWeak',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    b('requireWeak')('AsyncProfiler', function (a) {
      g = a;
    });
    function a(a) {
      a === void 0 && (a = !1),
        (this.$1 = null),
        (this.$2 = !1),
        (this.$3 = null),
        (this.$4 = null),
        (this.$5 = null),
        (this.$6 = null),
        (this.$7 = null),
        (this.$2 = a);
    }
    a.prototype.start = function () {
      this.$3 = b('ProfilingCountersStore').getInstance().open();
      this.$7 = b('ArtilleryUserTimingProfiler').startRecording();
      g != null && g.isSupported()
        ? (this.$5 = g.startRecording())
        : (this.$5 = null);
      var a = b('Env').timeslice_heartbeat_config || {},
        c = a.isHeartbeatEnabled;
      a = a.isArtilleryOn;
      c && (!this.$2 || a) && this.enablePageHeartbeat();
      this.$2
        ? (this.$4 = b('ProfilingCounters').getHandle())
        : (this.$4 = b('ProfilingCounters').getObserver().expressInterest());
      this.$6 = b('TimeSlice').getBuffer().open();
      return this;
    };
    a.prototype.enablePageHeartbeat = function () {
      this.$1 == null && (this.$1 = b('Heartbeat').get().expressInterest());
    };
    a.prototype.finish = function () {
      (!this.$3 || !this.$4 || !this.$6 || !this.$1) &&
        b('FBLogger')('artillery').warn(
          'Missing handles. PCData: %s, PCOnDemand: %s, TS: %s, heartbeat: %s',
          this.$3 == null,
          this.$4 == null,
          this.$6 == null,
          this.$1 == null
        );
      return this.$8();
    };
    a.prototype.disable = function () {
      var a = this.$5;
      a != null && g != null && (g.stopRecording(a), (this.$5 = null));
      this.$8();
    };
    a.prototype.$8 = function () {
      __p && __p();
      var a = this.$7 ? this.$7.close() : null;
      this.$7 = null;
      var b = this.$3 ? this.$3.close() : [];
      this.$3 = null;
      var c = this.$6 ? this.$6.close() : [];
      this.$6 = null;
      this.$4 && this.$4();
      this.$4 = null;
      this.$1 && this.$1();
      this.$1 = null;
      return {
        sampleRecorder: this.$5,
        profilingCountersData: b,
        userTimingProfilerData: a,
        timeSliceData: c,
      };
    };
    e.exports = a;
  },
  null
);
__d(
  'setInterval',
  ['TimerStorage', 'setIntervalAcrossTransitions'],
  function (a, b, c, d, e, f) {
    function a(a, c) {
      for (
        var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2;
        f < d;
        f++
      )
        e[f - 2] = arguments[f];
      var g = b('setIntervalAcrossTransitions').apply(
        undefined,
        [a, c].concat(e)
      );
      b('TimerStorage').set(b('TimerStorage').INTERVAL, g);
      return g;
    }
    e.exports = a;
  },
  null
);
__d(
  'ArtilleryOnUntilOffLogging',
  [
    'ArtilleryRequestDataCollector',
    'Env',
    'clearInterval',
    'performanceAbsoluteNow',
    'setInterval',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null,
      h = null;
    function i() {
      return (
        (window.CavalryLogger &&
          window.CavalryLogger.disableArtilleryOnUntilOffLogging) ||
        !!b('Env').disable_profiling
      );
    }
    var j = null,
      k = {
        disable: function () {
          j == null && (j = b('performanceAbsoluteNow')()),
            g && (b('clearInterval')(g), (g = null)),
            h && (h.disable(), (h = null));
        },
        finish: function () {
          g && (b('clearInterval')(g), (g = null));
          if (h) {
            var a = h.finish();
            h = null;
            return a;
          }
          return {
            sampleRecorder: null,
            profilingCountersData: [],
            userTimingProfilerData: null,
            timeSliceData: [],
          };
        },
        lastDisableTime: function () {
          return j;
        },
        onNewPageLoad: function (a) {
          a === void 0 && (a = !1),
            a || (k.disable(), (j = null)),
            (h = new (b('ArtilleryRequestDataCollector'))(a)),
            h.start();
        },
        enablePageHeartbeat: function () {
          h && h.enablePageHeartbeat();
        },
      };
    !i()
      ? (k.onNewPageLoad(!0),
        (g = b('setInterval')(function () {
          i() && k.disable();
        }, 250)))
      : (j = b('performanceAbsoluteNow')());
    e.exports = k;
  },
  3
);
__d(
  'DataStore',
  ['DataStoreConfig', 'isEmpty'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('DataStoreConfig').useExpando,
      h = {},
      i = 1;
    function j(a) {
      if (typeof a === 'string') return 'str_' + a;
      else return 'elem_' + (a.__FB_TOKEN || (a.__FB_TOKEN = [i++]))[0];
    }
    function k(a) {
      if (g && typeof a === 'object')
        return a.__FB_STORE || (a.__FB_STORE = {});
      a = j(a);
      return h[a] || (h[a] = {});
    }
    var l = {
      set: function (a, b, c) {
        if (!a)
          throw new TypeError(
            'DataStore.set: namespace is required, got ' + typeof a
          );
        var d = k(a);
        d[b] = c;
        return a;
      },
      get: function (a, b, c) {
        __p && __p();
        if (!a)
          throw new TypeError(
            'DataStore.get: namespace is required, got ' + typeof a
          );
        var d = k(a),
          e = d[b];
        if (typeof e === 'undefined' && a.getAttribute)
          if (a.hasAttribute && !a.hasAttribute('data-' + b)) e = undefined;
          else {
            a = a.getAttribute('data-' + b);
            e = null === a ? undefined : a;
          }
        c !== undefined && e === undefined && (e = d[b] = c);
        return e;
      },
      remove: function (a, c) {
        if (!a)
          throw new TypeError(
            'DataStore.remove: namespace is required, got ' + typeof a
          );
        var d = k(a),
          e = d[c];
        delete d[c];
        b('isEmpty')(d) && l.purge(a);
        return e;
      },
      purge: function (a) {
        g && typeof a === 'object' ? delete a.__FB_STORE : delete h[j(a)];
      },
      _storage: h,
    };
    e.exports = l;
  },
  null
);
__d(
  'BigPipePlugins',
  ['DataStore'],
  function (a, b, c, d, e, f) {
    __p && __p();
    g.runPluginOnPagelet = function (a) {
      g.getPluginList().forEach(function (b) {
        b(a);
      });
    };
    g.getPluginList = function () {
      return [g.$1];
    };
    g.$1 = function (a) {
      if (!a) return;
      a = a.querySelectorAll('div[data-fte]');
      for (var b = 0, c = a.length; b < c; b++)
        g.$2(a[b], 'data-ft', 'data-ft');
    };
    g.$2 = function (a, c, d) {
      var e = a.getAttribute(c);
      e && (b('DataStore').set(a, d, e), a.removeAttribute(c));
    };
    function g() {}
    e.exports = g;
  },
  null
);
__d(
  'JSCC',
  [],
  function $module_JSCC(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports
  ) {
    __p && __p();
    var factories = {};
    function createFactory(constructor) {
      var instance,
        constructed = !1;
      return function () {
        constructed || ((instance = constructor()), (constructed = !0));
        return instance;
      };
    }
    var JSCC = {
      get: function get(key) {
        if (!factories[key]) {
          !1;
          throw new Error('JSCC entry is missing');
        }
        return factories[key]();
      },
      init: function init(constructors) {
        for (var key in constructors)
          factories[key] = createFactory(constructors[key]);
        return function clearJSCC() {
          for (var key in constructors) delete factories[key];
        };
      },
      parse: function parse(jsccMapString) {
        return eval(jsccMapString);
      },
    };
    module.exports = JSCC;
  },
  null
);
__d(
  'PageletEventConstsJS',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      ARRIVE_START: 'prearrive',
      ARRIVE_END: 'arrive',
      CSS_START: 'css',
      CSS_END: 'css_load',
      DISPLAY_START: 'display_start',
      DISPLAY_END: 'display',
      JS_START: 'jsstart',
      JS_END: 'jsdone',
      ONLOAD_START: 'preonload',
      ONLOAD_END: 'onload',
      SETUP: 'setup',
    });
  },
  null
);
__d(
  'PageletSet',
  ['Arbiter'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {},
      h = {
        hasPagelet: function (a) {
          return Object.prototype.hasOwnProperty.call(g, a);
        },
        getPagelet: function (a) {
          return g[a];
        },
        getOrCreatePagelet: function (a) {
          if (!h.hasPagelet(a)) {
            var b = new j(a);
            g[a] = b;
          }
          return h.getPagelet(a);
        },
        getPageletIDs: function () {
          return Object.keys(g);
        },
        removePagelet: function (a) {
          if (h.hasPagelet(a)) {
            var b = h.getPagelet(a);
            delete g[a];
            b.destroy();
          }
        },
      };
    function i(a, b) {
      return a.contains ? a.contains(b) : !!(a.compareDocumentPosition(b) & 16);
    }
    function j(a) {
      (this.id = a),
        (this.$1 = null),
        (this.$2 = []),
        this.addDestructor(
          function () {
            b('Arbiter').inform('pagelet/destroy', {
              id: this.id,
              root: this.$1,
            });
          }.bind(this)
        );
    }
    j.prototype.getRoot = function () {
      return this.$1;
    };
    j.prototype.setRoot = function (a) {
      this.$1 = a;
    };
    j.prototype.$3 = function () {
      __p && __p();
      var a = [],
        b = this.$1;
      if (!b) return a;
      var c = h.getPageletIDs();
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        if (e === this.id) continue;
        e = g[e];
        var f = e.getRoot();
        f && i(b, f) && a.push(e);
      }
      return a;
    };
    j.prototype.addDestructor = function (a) {
      this.$2.push(a);
    };
    j.prototype.destroy = function () {
      __p && __p();
      var a = this.$3();
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        h.hasPagelet(c.id) && h.removePagelet(c.id);
      }
      for (var c = 0; c < this.$2.length; c++) {
        a = this.$2[c]();
        a && a();
      }
    };
    e.exports = h;
  },
  null
);
__d(
  'UserTimingUtils',
  ['performance'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g =
      typeof b('performance').mark === 'function' &&
      typeof b('performance').clearMarks === 'function' &&
      typeof b('performance').measure === 'function' &&
      typeof b('performance').clearMeasures === 'function';
    function a(a) {
      g && b('performance').mark(a);
    }
    function c(a, c) {
      if (g) {
        try {
          b('performance').measure(a, c);
        } catch (a) {
          !1;
        }
        b('performance').clearMarks(c);
        b('performance').clearMeasures(a);
      }
    }
    e.exports = { measureStart: a, measureEnd: c };
  },
  null
);
__d(
  '__getCompileTime',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {};
  },
  null
);
__d(
  '__getFactoryTime',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {};
  },
  null
);
__d(
  '__getTotalFactories',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {};
  },
  null
);
__d(
  'captureUsageSnapshot',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = function () {
      var a = window.__bodyWrapper;
      if (!a.getCodeUsage) return {};
      a = babelHelpers['extends']({}, a.getCodeUsage());
      var b = window.document.body.outerHTML,
        c = {};
      Array.from(document.styleSheets).forEach(function (a) {
        a.href && (c[a.href] = !0);
      });
      return { js_calls: a, document_html: b, stylesheets: c };
    };
    e.exports = a;
  },
  null
);
__d(
  'clearTimeout',
  ['TimerStorage', 'TimeSlice'],
  function (a, b, c, d, e, f) {
    var g = a.__fbNativeClearTimeout || a.clearTimeout,
      h = b('TimerStorage').TIMEOUT;
    function c(a) {
      if (a != null) {
        b('TimerStorage').unset(h, a);
        var c = h + String(a);
        b('TimeSlice').cancelWithToken(c);
      }
      g(a);
    }
    e.exports = c;
  },
  null
);
__d(
  'fastDeepCopy',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      return typeof a === 'object' && a !== null ? g(a) : a;
    }
    function g(a) {
      __p && __p();
      var b = typeof a.constructor === 'function' ? a.constructor() : {};
      if (Array.isArray(a))
        for (var c = 0; c < a.length; ++c) {
          var d = a[c];
          b[c] = typeof d === 'object' && d !== null ? g(d) : d;
        }
      else
        for (var e in a) {
          d = a[e];
          b[e] = typeof d === 'object' && d !== null ? g(d) : d;
        }
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  'requestAnimationFrameAcrossTransitions',
  [
    'Env',
    'ErrorUtils',
    'TimerStorage',
    'TimeSlice',
    'clearTimeout',
    'performanceNow',
    'requestAnimationFramePolyfill',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('TimerStorage').ANIMATION_FRAME,
      h = 100,
      i = null,
      j = null,
      k = b('Env').gk_require_dic ? Object.create(null) : {},
      l = b('Env').gk_require_dic ? Object.create(null) : {},
      m = {
        DEFAULT: 0,
        QUERY_THEN_MUTATE: 1,
        FORCE_CLIENT_REFLOW: 2,
        DISPLAY_DONE_LOGGING: 3,
        SIZE: 4,
      };
    function n(c) {
      __p && __p();
      l = k;
      k = b('Env').gk_require_dic ? Object.create(null) : {};
      i = null;
      j && (b('clearTimeout')(j), (j = null));
      for (var d = 0; d < m.SIZE; d++) {
        var e = function (e) {
          var f = l[e];
          if (d === m.FORCE_CLIENT_REFLOW) {
            b('Env').gk_raf_force_client_reflow &&
              window.document.body &&
              window.document.body.getClientRects();
            return 'break';
          }
          if (f.deleted || f.priority !== d) return 'continue';
          b('ErrorUtils').applyWithGuard(function () {
            f.call(a, c);
          });
        };
        _loop: for (var f in l) {
          var g = e(f);
          switch (g) {
            case 'break':
              break _loop;
            case 'continue':
              continue;
          }
        }
      }
      l = null;
    }
    function o(a, c) {
      __p && __p();
      c = (c && c.priority) || m.DEFAULT;
      i ||
        (i = b('requestAnimationFramePolyfill')(function (a) {
          (i = null), n(a);
        }));
      !j &&
        c > m.DEFAULT &&
        (j = b('setTimeoutAcrossTransitions')(
          b('TimeSlice').guard(
            function () {
              (j = null), n(b('performanceNow')());
            },
            'requestAnimationFrame priorityRAFCallback setTimeout',
            { propagationType: b('TimeSlice').PropagationType.ORPHAN }
          ),
          h
        ));
      a = b('TimeSlice').guard(a, 'requestAnimationFrame', {
        propagationType: b('TimeSlice').PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      a.priority = c;
      a.deleted &&
        b('ErrorUtils').applyWithGuard(function () {
          throw new Error('Scheduling a deleted callback');
        });
      c = b('requestAnimationFramePolyfill')(function () {});
      k[c] = a;
      return c;
    }
    function p(a) {
      a = b('TimeSlice').guard(a, 'requestAnimationFrame', {
        propagationType: b('TimeSlice').PropagationType.CONTINUATION,
      });
      var c = b('requestAnimationFramePolyfill')(a);
      b('TimeSlice').registerForCancelling(g + c, a);
      return c;
    }
    e.exports = function (a, c) {
      if (b('Env').gk_raf_flush) return o(a, c);
      else return p(a);
    };
    e.exports.Priorities = m;
    e.exports.cancelVirtualRAF = function (a) {
      if (b('Env').gk_raf_flush) {
        b('TimeSlice').cancel(k[a]);
        delete k[a];
        if (l) {
          a = l[a];
          a && (a.deleted = !0);
        }
      }
    };
  },
  null
);
__d(
  'requestAnimationFrame',
  ['TimerStorage', 'TimeSlice', 'requestAnimationFrameAcrossTransitions'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c) {
      var d;
      function e(c) {
        b('TimerStorage').unset(b('TimerStorage').ANIMATION_FRAME, d), a(c);
      }
      b('TimeSlice').copyGuardForWrapper(a, e);
      e.__originalCallback = a;
      d = b('requestAnimationFrameAcrossTransitions')(e, c);
      b('TimerStorage').set(b('TimerStorage').ANIMATION_FRAME, d);
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  'setTimeout',
  ['TimerStorage', 'TimeSlice', 'setTimeoutAcrossTransitions'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c) {
      __p && __p();
      var d,
        e = function () {
          b('TimerStorage').unset(b('TimerStorage').TIMEOUT, d);
          for (var c = arguments.length, e = new Array(c), f = 0; f < c; f++)
            e[f] = arguments[f];
          Function.prototype.apply.call(a, this, e);
        };
      b('TimeSlice').copyGuardForWrapper(a, e);
      for (
        var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), h = 2;
        h < f;
        h++
      )
        g[h - 2] = arguments[h];
      d = b('setTimeoutAcrossTransitions').apply(undefined, [e, c].concat(g));
      b('TimerStorage').set(b('TimerStorage').TIMEOUT, d);
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  'BigPipe',
  [
    'ix',
    'Arbiter',
    'BigPipeExperiments',
    'BigPipeInstance',
    'BigPipePlugins',
    'Bootloader',
    'Env',
    'ErrorUtils',
    'FBLogger',
    'JSCC',
    'PageEvents',
    'PageletEventConstsJS',
    'PageletSet',
    'Run',
    'ServerJS',
    'TimeSlice',
    'UserTimingUtils',
    '$',
    'bx',
    'captureUsageSnapshot',
    'clearTimeout',
    'fastDeepCopy',
    'ge',
    'gkx',
    'performanceAbsoluteNow',
    'qex',
    'requestAnimationFrame',
    'requestAnimationFrameAcrossTransitions',
    'setTimeout',
    '__getTotalFactories',
    '__getCompileTime',
    '__getFactoryTime',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h =
        document.documentMode ||
        +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1],
      i =
        console.timeStamp && window.location.search.indexOf('pagelet_ts=1') > 0;
    function j(a, c) {
      b('UserTimingUtils').measureStart(a + ' ' + c);
    }
    function k(a, c, d) {
      b('UserTimingUtils').measureEnd(
        '\u26cf ' + a + ' [' + c + '][phase ' + d + ']',
        a + ' ' + c
      );
    }
    function l(a, c) {
      if (a)
        for (var d = 0; d < a.length; d++)
          b('ErrorUtils').applyWithGuard(new Function(a[d]), c);
    }
    var m = 1;
    function n(a) {
      (this._onDisplayDone = function (a) {
        this.arbiter.registerCallback(a, ['display_done']);
      }.bind(this)),
        Object.assign(
          this,
          {
            arbiter: b('Arbiter'),
            rootNodeID: 'content',
            lid: null,
            isAjax: !1,
            domContentCallback: b('Run').__domContentCallback,
            onloadCallback: b('Run').__onloadCallback,
            domContentEvt: b('PageEvents').BIGPIPE_DOMREADY,
            onloadEvt: b('PageEvents').BIGPIPE_ONLOAD,
            forceFinish: !1,
            config: {},
            _currentPhase: 0,
            _lastPhaseOfLastResponse: -1,
            _lastPhaseBeforeLastResponse: -1,
            _livePagelets: {},
            _phases: {},
            _orderedPhases: [],
            _maxPhase: 0,
            _displayDoneFired: !1,
            _displayDone: !1,
            _awaitingLIDEventQueue: [],
          },
          a
        ),
        this.config || (this.config = {}),
        this.automatic
          ? (this._relevant_instance =
              b('BigPipeInstance').getCurrentInstance())
          : b('BigPipeInstance').setCurrentInstance_DO_NOT_USE(this),
        (this._serverJS = new (b('ServerJS'))()),
        this._informEventExternal(
          n.Events.init,
          { arbiter: this.arbiter },
          b('Arbiter')
        ),
        (this._displayDoneCallback = this.arbiter.registerCallback(
          function () {
            var a = b('captureUsageSnapshot')();
            this._informEventExternal(n.Events.displayed, {
              rid: this.rid,
              ajax: this.isAjax,
              usageSnapshot: a,
            });
          }.bind(this),
          ['display_done']
        )),
        this.arbiter.registerCallback(this.domContentCallback, [
          'pagelet_displayed_all',
        ]),
        this._beginPhase(0),
        this.arbiter.registerCallback(this.onloadCallback, [
          'bigpipe_e2e_reported',
        ]),
        (this._loadedCallback = this.arbiter.registerCallback(
          function () {
            this._informEventExternal(n.Events.loaded, {
              rid: this.rid,
              ajax: this.isAjax,
            }),
              this.arbiter.inform('bigpipe_e2e_reported', !0);
          }.bind(this),
          ['pagelet_displayed_all']
        )),
        this.arbiter.registerCallback(
          function () {
            return this._serverJS.cleanup();
          }.bind(this),
          [this.onloadEvt, 'bigpipe_e2e_reported']
        );
    }
    n.prototype._beginPhase = function (a) {
      var c = this._getOrCreatePhase(a);
      c.begun = !0;
      this._informEventExternal('phase_begin', { phase: a });
      this.arbiter.inform('phase_begin_' + a, !0, 'state');
      this._displayDone && !this.isAjax && b('Bootloader').notifyDisplayDone();
    };
    n.prototype._getOrCreatePhase = function (a) {
      __p && __p();
      if (this._phases[a]) return this._phases[a];
      var b = { pagelets: [], begun: !1, complete: !1 };
      this._phases[a] = b;
      var c = 0;
      while (c < this._orderedPhases.length) {
        if (a < this._orderedPhases[c]) break;
        c++;
      }
      this._orderedPhases.splice(c, 0, a);
      return b;
    };
    n.prototype._tryRenderingNextPhase = function () {
      __p && __p();
      var a = this._phases[this._currentPhase];
      if (a && a.begun && !a.complete) return;
      for (
        var a = this._orderedPhases,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        var e = this._phases[d];
        if (e.begun)
          if (e.complete) continue;
          else return;
        else {
          this._currentPhase = d;
          this._beginPhase(d);
          return;
        }
      }
    };
    n.prototype._displayPageletHandler = function (a) {
      this.displayCallback
        ? this.displayCallback(this._displayPagelet.bind(this, a))
        : this._displayPagelet(a);
    };
    n.prototype._displayPagelet = function (a) {
      __p && __p();
      j(a.id, 'display');
      a.displayStarted = !0;
      this._informPageletEvent(b('PageletEventConstsJS').DISPLAY_START, a);
      var c = this._getPagelet(a),
        d = [],
        e = {};
      for (var f in a.content) {
        var g = a.content[f];
        a.append && (f = this._getPageletRootID(a));
        var h = b('ge')(f);
        if (!h) {
          var i = 'Root element %s is missing for pagelet %s';
          !1;
          continue;
        }
        f === c.id && c.setRoot(h);
        if (g) {
          if (a.append) q(h, g, d);
          else if (g.nodeType) (h.innerHTML = ''), q(h, g, d);
          else {
            i = o(g);
            h.innerHTML = i;
            e[f] = i;
            d.push(h);
          }
          b('BigPipeExperiments').enable_bigpipe_plugins &&
            b('BigPipePlugins').runPluginOnPagelet(h);
        }
        g = h.getAttribute('data-referrer');
        g || h.setAttribute('data-referrer', f);
      }
      i = null;
      if (a.static_templates) {
        g = b('ge')('static_templates');
        !g ? !1 : ((i = o(a.static_templates)), q(g, i, d));
      }
      this._informPageletDisplayDetails(a.id, a.jsmods, e, i);
      a.displayed = !0;
      if (a.jsmods) {
        h = this._serverJS.handlePartial(a.jsmods, {
          pagelet: a.id,
          bigPipeContext: { onDisplayDone: this._onDisplayDone },
        });
        c.addDestructor(h.cancel.bind(h));
      }
      var l = [];
      d.forEach(function (a) {
        if (typeof a.getElementsByTagName === 'function') {
          a = a.getElementsByTagName('img');
          for (var b = 0; b < a.length; b++) l.push(a[b].src);
        }
      });
      l.length > 0 &&
        this._informEventExternal('images_displayed', {
          pagelet: a.id,
          timeslice: b('TimeSlice').getContext()
            ? b('TimeSlice').getContext().contextID
            : null,
          images: l,
        });
      b('gkx')(
        'AT5t2BrnO1vWmejrnnr508P2PeyF-IDhRvIGXsBTyEuiPclX38RSwCTPJH6AwY3ViplyCGmx2pzmKgoPw1yYVDBX'
      ) &&
        d.length &&
        this._informEventExternal('elements_displayed', d);
      this._informPageletEvent(b('PageletEventConstsJS').DISPLAY_END, a);
      k(a.id, 'display', a.phase);
      this.arbiter.inform(a.id + '_displayed', !0, 'state');
    };
    n.prototype._onPhaseDisplayEnd = function (a) {
      __p && __p();
      var c = this._getOrCreatePhase(a);
      c.complete = !0;
      if (a === this._ttiPhase) {
        c = b('Bootloader').__debug.predictedResources;
        var d = b('Bootloader').__debug.requested,
          e = 0;
        for (var f in d) e += !(f in c);
        d = { pre_tti_non_ef_resources: e };
        c = b('captureUsageSnapshot')();
        this.isAjax ||
          ((d.cjs_factory_count_tti = b('__getTotalFactories')()),
          (d.cjs_compile_time_tti = b('__getCompileTime')()),
          (d.cjs_factory_time_tti = b('__getFactoryTime')()));
        this._informEventExternal(n.Events.tti, {
          phase: this._ttiPhase,
          rid: this.rid,
          ajax: this.isAjax,
          metrics: d,
          usageSnapshot: c,
        });
        this.arbiter.inform('tti_pagelet_displayed', !0, 'state');
      }
      e = b('gkx')(
        'AT4kYIk7PhRqUACJJM8qs58t-WNCoM2ZYe35b1xv03xf3OtmC7RfXVIT9hWB6yTOgfA'
      );
      var g = !1;
      this._isRelevant() &&
        (a === this._lastPhaseBeforeLastResponse &&
          ((g = e),
          this._fireDisplayDone(
            function () {
              g && this._nextPhase();
            }.bind(this)
          )),
        a === this._lastPhaseOfLastResponse &&
          (this._displayDoneFired ||
            ((g = e), this._fireDisplayDone(function () {})),
          this.arbiter.inform('pagelet_displayed_all', !0, 'state')));
      !g && a !== this._lastPhaseOfLastResponse && this._nextPhase();
    };
    n.prototype._nextPhase = function () {
      this.config.flush_pagelets_asap
        ? h <= 8
          ? b('setTimeout')(this._tryRenderingNextPhase.bind(this), 20)
          : this._tryRenderingNextPhase()
        : (this._currentPhase++,
          h <= 8
            ? b('setTimeout')(
                this._beginPhase.bind(this, this._currentPhase),
                20
              )
            : this._beginPhase(this._currentPhase));
    };
    n.prototype._fireDisplayDone = function (a) {
      (this._displayDoneFired = !0),
        b('Env').gk_raf_flush
          ? b('requestAnimationFrame')(
              function () {
                this.arbiter.inform('display_done', !0),
                  (this._displayDone = !0),
                  a();
              }.bind(this),
              {
                priority: b('requestAnimationFrameAcrossTransitions').Priorities
                  .DISPLAY_DONE_LOGGING,
              }
            )
          : (this.arbiter.inform('display_done', !0),
            (this._displayDone = !0),
            a()),
        this.lid && k('display_done', this.lid, 'all');
    };
    n.prototype._downloadJsForPagelet = function (a) {
      __p && __p();
      this._informPageletEvent(b('PageletEventConstsJS').JS_START, a),
        b('Bootloader').loadResources(
          a.allResources || [],
          function () {
            this._informPageletEvent(b('PageletEventConstsJS').JS_END, a);
            a.requires = a.requires || [];
            (!this.isAjax || a.phase >= 1) && a.requires.push('uipage_onload');
            var c = function () {
                this._informPageletEvent(
                  b('PageletEventConstsJS').ONLOAD_START,
                  a
                ),
                  this._isRelevantPagelet(a) && l(a.onload),
                  this._informPageletEvent(
                    b('PageletEventConstsJS').ONLOAD_END,
                    a
                  ),
                  this.arbiter.inform('pagelet_onload', !0),
                  a.provides && this.arbiter.inform(a.provides, !0, 'state');
              }.bind(this),
              d = function () {
                this._isRelevantPagelet(a) && l(a.onafterload);
              }.bind(this);
            this.arbiter.registerCallback(c, a.requires);
            this.arbiter.registerCallback(d, [this.onloadEvt]);
          }.bind(this),
          !1,
          a.id
        );
    };
    n.prototype._getPagelet = function (a) {
      a = this._getPageletRootID(a);
      return b('PageletSet').getPagelet(a);
    };
    n.prototype._getPageletRootID = function (a) {
      return a.append || Object.keys(a.content)[0] || null;
    };
    n.prototype._isRelevant = function () {
      var a = b('BigPipeInstance').getCurrentInstance();
      return (
        this == a ||
        (this.automatic && this._relevant_instance == a) ||
        this.jsNonBlock ||
        this.forceFinish ||
        (a && a.allowIrrelevantRequests)
      );
    };
    n.prototype._isRelevantPagelet = function (a) {
      if (!this._isRelevant()) return !1;
      a = this._getPageletRootID(a);
      return !!this._livePagelets[a];
    };
    n.prototype._informEventExternal = function (a, c, d) {
      (c = c || {}),
        (d = d || this.arbiter),
        (c.ts = b('performanceAbsoluteNow')()),
        i &&
          console.timeStamp &&
          console.timeStamp(
            a +
              ' ' +
              (Object.prototype.hasOwnProperty.call(c, 'arbiter')
                ? JSON.stringify(
                    babelHelpers['extends']({}, c, { arbiter: null })
                  )
                : JSON.stringify(c))
          ),
        this.lid === null
          ? this._awaitingLIDEventQueue.push([d, a, c])
          : ((c.lid = this.lid), d.inform(a, c, 'persistent'));
    };
    n.prototype._informPageletEvent = function (a, b) {
      a = { event: a, id: b.id };
      b.phase && (a.phase = b.phase);
      b.categories && (a.categories = b.categories);
      b.allResources && (a.allResources = b.allResources);
      b.displayResources && (a.displayResources = b.displayResources);
      this._informEventExternal('pagelet_event', a);
    };
    n.prototype._informPageletDisplayDetails = function (a, c, d, e) {
      if (this.config.dispatch_pagelet_replayable_actions)
        try {
          this._informEventExternal('pagelet_performing_replayable_actions', {
            id: a,
            jsmods: b('fastDeepCopy')(c),
            contentMap: d,
            staticTemplates: e,
          });
        } catch (a) {
          b('FBLogger')('bigpipe_pagelet_replay')
            .catching(a)
            .warn('failed at _informPageletDisplayDetails'),
            this._informEventExternal(
              'pagelet_performing_replayable_actions_failed',
              {}
            );
        }
    };
    n.getCurrentInstance = function () {
      return b('BigPipeInstance').getCurrentInstance();
    };
    Object.assign(n.prototype, {
      beforePageletArrive: function (a) {
        b('TimeSlice').guard(
          function () {
            return this._informPageletEvent(
              b('PageletEventConstsJS').ARRIVE_START,
              { id: a }
            );
          }.bind(this),
          'beforePageletArrive ' + a,
          { root: !0 }
        )();
      },
      setPageID: function (a) {
        (this.lid = a),
          this._awaitingLIDEventQueue.forEach(function (b) {
            var c = b[0],
              d = b[1];
            b = b[2];
            b.lid = a;
            c.inform(d, b, 'persistent');
          }),
          (this._awaitingLIDEventQueue = []),
          this.lid && j('display_done', this.lid);
      },
      onPageletArrive: b('ErrorUtils').guard(function (a) {
        __p && __p();
        this._informPageletEvent(b('PageletEventConstsJS').ARRIVE_END, a);
        b('bx').add(a.bxData);
        b('gkx').add(a.gkxData);
        g.add(a.ixData);
        b('qex').add(a.qexData);
        b('Bootloader').setResourceMap(a.resource_map || {});
        a.bootloadable && b('Bootloader').enableBootload(a.bootloadable);
        a.content = a.content || {};
        var c = a.phase;
        if (a.all_phases)
          for (
            var d = a.all_phases,
              e = Array.isArray(d),
              f = 0,
              d = e
                ? d
                : d[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var h;
            if (e) {
              if (f >= d.length) break;
              h = d[f++];
            } else {
              f = d.next();
              if (f.done) break;
              h = f.value;
            }
            h = h;
            this._getOrCreatePhase(h);
          }
        h = this._getOrCreatePhase(c);
        h.pagelets.push(a.id);
        this._maxPhase = Math.max(c, this._maxPhase);
        a.last_in_phase &&
          this.arbiter.registerCallback(
            function () {
              return this._onPhaseDisplayEnd(c);
            }.bind(this),
            h.pagelets
              .map(function (a) {
                return a + '_displayed';
              })
              .concat(['phase_begin_' + c])
          );
        f = this._getPageletRootID(a);
        var i = b('PageletSet').getOrCreatePagelet(f);
        a.last_pagelet && (this._lastPhaseBeforeLastResponse = this._maxPhase);
        a.the_end && (this._lastPhaseOfLastResponse = c);
        a.tti_phase !== undefined && (this._ttiPhase = a.tti_phase);
        this._livePagelets[i.id] = !0;
        i.addDestructor(
          function () {
            delete this._livePagelets[i.id];
          }.bind(this)
        );
        if (a.jscc_map) {
          e = b('JSCC').parse(a.jscc_map);
          d = b('JSCC').init(e);
          i.addDestructor(d);
        }
        var j,
          k = [];
        h =
          !a.the_end ||
          this._displayDone ||
          !b('gkx')(
            'AT42vHZv2FMRQFxjYy8soPYLMZQ4FvEb3npoHjDNtK5L_ed7xyu66vqbi4snBVFxLSGN0ZKY0U-z6rBE6MS3Ht3lEToi6aqMBaQBAYDf8hAjMw'
          );
        if (a.jsmods && h) {
          f = a.jsmods.define;
          e = a.jsmods.instances;
          d = a.jsmods.markup;
          var l = a.jsmods.pre_display_requires;
          delete a.jsmods.define;
          delete a.jsmods.instances;
          delete a.jsmods.markup;
          delete a.jsmods.pre_display_requires;
          var n = 19e3;
          n = function () {
            if (a.displayStarted) {
              b('FBLogger')('BigPipe').warn(
                'registerToBlockDisplayUntilDone_DONOTUSE called after pagelet %s was displayed. This is a no-op.',
                a.id
              );
              return function () {};
            }
            var c,
              d,
              e = m + '_preDisplayEvent';
            m++;
            j ? this.arbiter.registerCallback(j, [e]) : k.push(e);
            return b('TimeSlice').guard(
              function () {
                (d = !0),
                  b('clearTimeout')(c),
                  this.arbiter.inform(e, !0, 'state');
              }.bind(this),
              'BigPipeDisplayBlockingEvent ' + e,
              { propagationType: b('TimeSlice').PropagationType.EXECUTION }
            );
          }.bind(this);
          this._informPageletDisplayDetails(
            a.id,
            { define: f, instances: e, markup: d, pre_display_requires: l },
            {}
          );
          this._serverJS.handlePartial(
            { define: f, instances: e, markup: d, pre_display_requires: l },
            {
              pagelet: a.id,
              bigPipeContext: {
                onDisplayDone: this._onDisplayDone,
                registerToBlockDisplayUntilDone_DONOTUSE: n,
              },
            }
          );
        }
        this._informPageletEvent(b('PageletEventConstsJS').SETUP, a);
        if (a.display_out_of_phase === 'asap')
          k = k.concat(['first_response_displayed', a.id + '_css_end']);
        else if (a.display_out_of_phase === 'after_tti') {
          var o = a.id + '_greedy_render';
          k = k.concat(['first_response_displayed', a.id + '_css_end', o]);
          var p = !1;
          f = function () {
            if (p) return;
            this.arbiter.inform(o, !0, 'state');
          }.bind(this);
          this.arbiter.registerCallback(f, ['tti_pagelet_displayed']);
          this.arbiter.registerCallback(f, ['phase_begin_' + c]);
        } else k = k.concat(['phase_begin_' + a.phase, a.id + '_css_end']);
        (a.display_dependency || []).forEach(function (a) {
          return k.push(a + '_displayed');
        });
        if (a.display_group) {
          e = document.body.getElementsByClassName('pagelet-group');
          for (var d = 0; d < e.length; d++) {
            l = e[d];
            if (l.id === a.id) break;
            l.getAttribute('data-display-group') === a.display_group &&
              k.push(l.id + '_displayed');
          }
        }
        j = this.arbiter.registerCallback(
          function () {
            this._displayPageletHandler(a);
          }.bind(this),
          k
        );
        var q = !1;
        n = function () {
          if (q) return;
          q = !0;
          this._informPageletEvent(b('PageletEventConstsJS').CSS_START, a);
          var c = a.displayResources || [];
          b('Bootloader').loadResources(
            c,
            function () {
              this._informPageletEvent(b('PageletEventConstsJS').CSS_END, a),
                this.arbiter.inform(a.id + '_css_end', !0, 'state');
            }.bind(this),
            !1,
            a.id
          );
        }.bind(this);
        this.config.flush_pagelets_asap && h
          ? n()
          : this.arbiter.registerCallback(n, ['phase_begin_' + c]);
        this.arbiter.registerCallback(this._loadedCallback, ['pagelet_onload']);
        f = [a.id + '_displayed'];
        this.jsNonBlock || f.push(this.domContentEvt);
        this.arbiter.registerCallback(
          this._downloadJsForPagelet.bind(this, a),
          f
        );
      }, 'BigPipe#onPageletArrive'),
    });
    n.Events = b('BigPipeInstance').Events;
    function o(a) {
      __p && __p();
      if (!a || typeof a === 'string') return a;
      if (a.container_id) {
        var c = b('$')(a.container_id);
        a = p(c) || '';
        c.parentNode.removeChild(c);
        return a;
      }
      a.nodeType && !1;
      return null;
    }
    function p(a) {
      __p && __p();
      if (!a.firstChild) {
        !1;
        return null;
      }
      if (a.firstChild.nodeType !== 8) {
        !1;
        return null;
      }
      a = a.firstChild.nodeValue;
      a = a.substring(1, a.length - 1);
      return a.replace(/\\([\s\S]|$)/g, '$1');
    }
    function q(a, b, c) {
      b = r(b);
      for (var d = 0; d < b.childNodes.length; d++) c.push(b.childNodes[d]);
      a.appendChild(b);
    }
    function r(a) {
      __p && __p();
      if (a.nodeType) return a;
      var b = document.createDocumentFragment();
      a = o(a);
      if (a) {
        var c = document.createElement('div');
        c.innerHTML = a;
        while (c.firstChild) b.appendChild(c.firstChild);
      }
      return b;
    }
    e.exports = n;
  },
  null
);
__d(
  'getActiveElement',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      a === void 0 && (a = document);
      if (typeof a === 'undefined') return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    e.exports = a;
  },
  null
);
__d(
  'FocusListener',
  ['Arbiter', 'CSS', 'Parent', 'getActiveElement'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      expandInput: function (a) {
        b('CSS').addClass(a, 'child_is_active'),
          b('CSS').addClass(a, 'child_is_focused'),
          b('CSS').addClass(a, 'child_was_focused'),
          b('Arbiter').inform('reflow');
      },
    };
    function h(a, c) {
      if (c.getAttribute('data-silentfocuslistener')) return;
      var d = b('Parent').byClass(c, 'focus_target');
      d &&
        ('focus' == a || 'focusin' == a
          ? g.expandInput(d)
          : (c.value === '' && b('CSS').removeClass(d, 'child_is_active'),
            b('CSS').removeClass(d, 'child_is_focused')));
    }
    c = b('getActiveElement')();
    c && h('focus', c);
    function a(event) {
      (event = event || window.event),
        h(event.type, event.target || event.srcElement);
    }
    d = document.documentElement;
    d.addEventListener
      ? (d.addEventListener('focus', a, !0), d.addEventListener('blur', a, !0))
      : (d.attachEvent('onfocusin', a), d.attachEvent('onfocusout', a));
    e.exports = g;
  },
  null
);
__d(
  'HardwareCSS',
  [],
  function (a, b, c, d, e, f) {
    function g() {
      if (window != null && window.document && document.body) {
        var a = document.body,
          b = a.getAttribute('class') || '';
        window.navigator &&
        window.navigator.hardwareConcurrency &&
        window.navigator.hardwareConcurrency >= 4
          ? a.setAttribute('class', b + ' cores-gte4')
          : a.setAttribute('class', b + ' cores-lt4');
      }
    }
    var h = {
      init: function () {
        g(), (h.init = function () {});
      },
    };
    e.exports = h;
  },
  null
);
__d(
  'InitialJSLoader',
  ['Arbiter', 'Bootloader', 'PageEvents', 'Run', 'ServerJS'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      INITIAL_JS_READY: 'BOOTLOAD/JSREADY',
      loadOnDOMContentReady: function (a, c) {
        b('Arbiter').subscribe(b('PageEvents').BIGPIPE_DOMREADY, function () {
          function d() {
            b('Bootloader').loadResources(a, function () {
              b('Arbiter').inform(g.INITIAL_JS_READY, !0, 'state');
            });
          }
          c ? setTimeout(d, c) : d();
        });
      },
      handleServerJS: function (a) {
        var c = new (b('ServerJS'))();
        c.handle(a);
        b('Run').onAfterLoad(c.cleanup.bind(c));
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'MutationObserver',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function b(a) {}
    b.prototype.observe = function (a, b) {};
    b.prototype.disconnect = function () {};
    b.prototype.takeRecords = function () {
      return null;
    };
    c = a.MutationObserver || a.WebKitMutationObserver || b;
    e.exports = c;
  },
  null
);
__d(
  'PageDOMMutationObserver',
  ['ExecutionEnvironment', 'MutationObserver'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = new (b('MutationObserver'))(function () {}),
      h = !1,
      i = {
        tryStart: function () {
          __p && __p();
          var a = typeof g.takeRecords === 'function';
          if (!b('ExecutionEnvironment').canUseDOM || !a) {
            i.tryStart = function () {};
            i.consumePendingDOMMutations = function () {
              return 0;
            };
            return;
          }
          if (!window.Env || !document.body) return;
          i.tryStart = function () {};
          if (!window.Env.dom_mutation_flag) return;
          h = !0;
          g.observe(document.body, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          });
        },
        consumePendingDOMMutations: function () {
          var a = g.takeRecords();
          return a != null ? a.length : 0;
        },
        isSupported: function () {
          return h;
        },
      };
    e.exports = i;
  },
  null
);
__d(
  'MutationCountingExecutionObserver',
  [
    'EventConfig',
    'ExecutionContextObservers',
    'PageDOMMutationObserver',
    'ProfilingCounters',
    'TimeSlice',
    'ifRequired',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [],
      h = !1;
    function i() {
      __p && __p();
      var a = b('PageDOMMutationObserver').consumePendingDOMMutations();
      if (a) {
        b('ProfilingCounters').incrementCounter('DOM_MUTATION', a);
        a = b('ifRequired')('TimeSliceAutoclosedInteraction', function (a) {
          return a;
        });
        if (a) {
          a = a.getInteractionsActiveRightNow();
          a.length &&
            a.forEach(function (a) {
              __p && __p();
              a.informPointWithOverride(
                'display_done_ts_executed_from_client',
                { isPointOfInterest: !0 }
              );
              if (!a.__mceoSeenThisRootGuardFrame) {
                a.__mceoSeenThisRootGuardFrame = !0;
                a.countUp();
                g.push(a);
                h ||
                  ((h = !0),
                  l.executeOnRootGuardEnded(function () {
                    j(), (h = !1);
                  }));
                var c = b('ifRequired')('Visibility', function (a) {
                  return a;
                });
                c &&
                  (c.isHidden()
                    ? a.trace().addStringAnnotation('hidden_during_dd', '1')
                    : a.trace().addStringAnnotation('hidden_during_dd', '0'));
              }
            });
        }
      }
    }
    function j() {
      __p && __p();
      if (g.length === 0) return;
      g.forEach(function (a) {
        a
          .informPointWithOverride('display_done', { isPointOfInterest: !0 })
          .addStringAnnotation('visual_role', 'global_signpost'),
          (a.__mceoSeenThisRootGuardFrame = !1);
      });
      if (b('EventConfig').disable_heuristic) {
        g.forEach(function (a) {
          return a.countDown();
        });
        g = [];
        return;
      }
      var a = g,
        c = b('ifRequired')(
          'requestAnimationFrameAcrossTransitions',
          function (a) {
            return a;
          }
        ),
        d = b('ifRequired')('setTimeoutAcrossTransitions', function (a) {
          return a;
        });
      if (!c || !d) return;
      c(function () {
        a.forEach(function (a) {
          a.informPointWithOverride('display_done_ts_raf', {
            isPointOfInterest: !0,
          });
        }),
          d(function () {
            a.forEach(function (a) {
              a.informPointWithOverride('display_done_ts_st', {
                isPointOfInterest: !0,
              }),
                a.countDown();
            });
          });
      });
      g = [];
    }
    var k = [];
    a.prototype.executeOnRootGuardEnded = function (a) {
      k.push(a);
    };
    a.prototype.onNewContextCreated = function (a, b, c) {
      return null;
    };
    a.prototype.onContextCanceled = function (a, b) {};
    a.prototype.onBeforeContextStarted = function (a, c, d) {
      b('PageDOMMutationObserver').tryStart();
      i();
      return null;
    };
    a.prototype.onAfterContextStarted = function (a, b, c, d) {
      return null;
    };
    a.prototype.onAfterContextEnded = function (a, b, c, d) {
      i();
      if (a && a.isRoot) while (k.length) k.pop()();
    };
    a.prototype.getBeforeID = function () {
      return b('ExecutionContextObservers').beforeIDs.MUTATION_COUNTING;
    };
    a.prototype.getAfterID = function () {
      return b('ExecutionContextObservers').afterIDs.MUTATION_COUNTING;
    };
    function a() {}
    var l = new a();
    b('TimeSlice').registerExecutionContextObserver(l);
    e.exports = l;
  },
  3
);
__d(
  'DOMEvent',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a) {
      (this.event = a || window.event),
        typeof this.event.srcElement !== 'unknown' || g(0, undefined),
        (this.target = this.event.target || this.event.srcElement);
    }
    h.prototype.preventDefault = function () {
      var a = this.event;
      a.preventDefault
        ? (a.preventDefault(),
          'defaultPrevented' in a || (a.defaultPrevented = !0))
        : (a.returnValue = !1);
      return this;
    };
    h.prototype.isDefaultPrevented = function () {
      var a = this.event;
      return 'defaultPrevented' in a
        ? a.defaultPrevented
        : a.returnValue === !1;
    };
    h.prototype.stopPropagation = function () {
      var a = this.event;
      a.stopPropagation ? a.stopPropagation() : (a.cancelBubble = !0);
      return this;
    };
    h.prototype.kill = function () {
      this.stopPropagation().preventDefault();
      return this;
    };
    h.killThenCall = function (a) {
      return function (b) {
        new h(b).kill();
        return a();
      };
    };
    e.exports = h;
  },
  null
);
__d(
  'dedupString',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b;
      return Object.keys(((b = {}), (b[a] = 0), b))[0];
    }
    e.exports = a;
  },
  null
);
__d(
  'DOMEventListener',
  ['invariant', 'dedupString', 'emptyFunction', 'wrapFunction'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = !1;
    try {
      a = Object.defineProperty({}, 'passive', {
        get: function () {
          h = !0;
        },
      });
      window.addEventListener('test', null, a);
    } catch (a) {}
    var i, j;
    window.addEventListener
      ? ((i = function (a, c, d, e) {
          e === void 0 && (e = !1),
            (d.wrapper = b('wrapFunction')(
              d,
              'entry',
              b('dedupString')('DOMEventListener.add ' + c)
            )),
            a.addEventListener(c, d.wrapper, h ? e : !1);
        }),
        (j = function (a, b, c, d) {
          d === void 0 && (d = !1),
            a.removeEventListener(b, c.wrapper, h ? d : !1);
        }))
      : window.attachEvent
      ? ((i = function (a, c, d) {
          (d.wrapper = b('wrapFunction')(
            d,
            'entry',
            'DOMEventListener.add ' + c
          )),
            a.attachEvent || g(0, undefined),
            a.attachEvent('on' + c, d.wrapper);
        }),
        (j = function (a, b, c) {
          a.detachEvent || g(0, undefined), a.detachEvent('on' + b, c.wrapper);
        }))
      : (j = i = b('emptyFunction'));
    c = {
      add: function (a, b, c, d) {
        d === void 0 && (d = !1);
        i(a, b, c, d);
        return {
          remove: function () {
            j(a, b, c, d);
          },
        };
      },
      remove: j,
    };
    e.exports = c;
  },
  null
);
__d(
  'isNode',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = a ? a.ownerDocument || a : document;
      b = b.defaultView || window;
      return !!(
        a &&
        (typeof b.Node === 'function'
          ? a instanceof b.Node
          : typeof a === 'object' &&
            typeof a.nodeType === 'number' &&
            typeof a.nodeName === 'string')
      );
    }
    e.exports = a;
  },
  null
);
__d(
  'isTextNode',
  ['isNode'],
  function (a, b, c, d, e, f) {
    function a(a) {
      return b('isNode')(a) && a.nodeType == 3;
    }
    e.exports = a;
  },
  null
);
__d(
  'containsNode',
  ['isTextNode'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, c) {
      __p && __p();
      if (!a || !c) return !1;
      else if (a === c) return !0;
      else if (b('isTextNode')(a)) return !1;
      else if (b('isTextNode')(c)) return g(a, c.parentNode);
      else if ('contains' in a) return a.contains(c);
      else if (a.compareDocumentPosition)
        return !!(a.compareDocumentPosition(c) & 16);
      else return !1;
    }
    e.exports = g;
  },
  null
);
__d(
  'createArrayFromMixed',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a) {
      __p && __p();
      var b = a.length;
      (!Array.isArray(a) &&
        (typeof a === 'object' || typeof a === 'function')) ||
        g(0, undefined);
      typeof b === 'number' || g(0, undefined);
      b === 0 || b - 1 in a || g(0, undefined);
      typeof a.callee !== 'function' || g(0, undefined);
      if (a.hasOwnProperty)
        try {
          return Array.prototype.slice.call(a);
        } catch (a) {}
      var c = Array(b);
      for (var d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    function i(a) {
      return (
        !!a &&
        (typeof a === 'object' || typeof a === 'function') &&
        'length' in a &&
        !('setInterval' in a) &&
        typeof a.nodeType !== 'number' &&
        (Array.isArray(a) || 'callee' in a || 'item' in a)
      );
    }
    function a(a) {
      if (!i(a)) return [a];
      else if (Array.isArray(a)) return a.slice();
      else return h(a);
    }
    e.exports = a;
  },
  null
);
__d(
  'isElementNode',
  ['isNode'],
  function (a, b, c, d, e, f) {
    function a(a) {
      return b('isNode')(a) && a.nodeType == 1;
    }
    e.exports = a;
  },
  null
);
__d(
  'DOMQuery',
  [
    'CSS',
    'FBLogger',
    'containsNode',
    'createArrayFromMixed',
    'createObjectFrom',
    'ge',
    'ifRequired',
    'isElementNode',
    'isNode',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = /^\.-?[_a-zA-Z]+[\w-]*$/;
    function h(a, b) {
      return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null;
    }
    var i = {
      find: function (a, b) {
        a = i.scry(a, b);
        return a[0];
      },
      findPushSafe: function (a, b, c) {
        b = i.scry(a, b);
        a = i.scry(a, c);
        b.length === 1 && a.length === 1 && b[0] === a[0]
          ? (c = b)
          : (c = b.concat(a));
        return c[0];
      },
      scry: function (a, c) {
        __p && __p();
        if (!a || !a.getElementsByTagName) return [];
        c = c.split(' ');
        var d = [a];
        for (var e = 0; e < c.length; e++) {
          if (d.length === 0) break;
          if (c[e] === '') continue;
          var f = c[e],
            i = c[e],
            j = [],
            k = !1;
          if (f.charAt(0) == '^')
            if (e === 0) (k = !0), (f = f.slice(1));
            else return [];
          f = f.replace(
            /\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g,
            ' $&'
          );
          f = f.split(' ');
          var l = f[0] || '*',
            m = l == '*',
            n = f[1] && f[1].charAt(0) == '#';
          if (n) {
            n = b('ge')(f[1].slice(1), a, l);
            if (n && (m || n.tagName.toLowerCase() == l))
              for (var o = 0; o < d.length; o++)
                if (k && b('containsNode')(n, d[o])) {
                  j = [n];
                  break;
                } else if (
                  document == d[o] ||
                  (b('containsNode')(d[o], n) && d[o] !== n)
                ) {
                  j = [n];
                  break;
                }
          } else {
            n = [];
            o = d.length;
            var p,
              q = !k && i.indexOf('[') < 0 && document.querySelectorAll;
            for (var r = 0; r < o; r++) {
              if (k) {
                p = [];
                var s = d[r].parentNode;
                while (b('isElementNode')(s))
                  (m || s.tagName.toLowerCase() == l) && p.push(s),
                    (s = s.parentNode);
              } else
                q
                  ? g.test(i)
                    ? (p = d[r].getElementsByClassName(i.substring(1)))
                    : (p = d[r].querySelectorAll(i))
                  : (p = d[r].getElementsByTagName(l));
              s = p.length;
              for (var t = 0; t < s; t++) n.push(p[t]);
            }
            if (!q)
              for (var p = 1; p < f.length; p++) {
                s = f[p];
                t = s.charAt(0) == '.';
                m = s.substring(1);
                for (r = 0; r < n.length; r++) {
                  o = n[r];
                  if (!o || o.nodeType !== 1) continue;
                  if (t) {
                    b('CSS').hasClass(o, m) || delete n[r];
                    continue;
                  } else {
                    i = s.slice(1, s.length - 1);
                    l = i.indexOf('=');
                    if (l < 0) {
                      if (!h(o, i)) {
                        delete n[r];
                        continue;
                      }
                    } else {
                      q = i.substr(0, l);
                      i = i.substr(l + 1);
                      i = i.slice(1, i.length - 1);
                      if (o.getAttribute(q) != i) {
                        delete n[r];
                        continue;
                      }
                    }
                  }
                }
              }
            for (r = 0; r < n.length; r++)
              if (n[r]) {
                j.push(n[r]);
                if (k) break;
              }
          }
          d = j;
        }
        return d;
      },
      getSelection: function () {
        var a = window.getSelection;
        if (a) return a() + '';
        else {
          a = document.selection;
          if (a) return a.createRange().text;
        }
        return null;
      },
      contains: function (a, c) {
        (typeof a === 'string' || typeof c === 'string') &&
          b('FBLogger')('dom_query').info(
            'Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead'
          );
        return b('containsNode')(b('ge')(a), b('ge')(c));
      },
      getRootElement: function () {
        var a = b('ifRequired')('Quickling', function (a) {
          return a.isActive() ? b('ge')('content') : null;
        });
        return a || document.body;
      },
      isNodeOfType: function (a, c) {
        c = b('createArrayFromMixed')(c).join('|').toUpperCase().split('|');
        c = b('createObjectFrom')(c);
        return b('isNode')(a) && a.nodeName in c;
      },
      isInputNode: function (a) {
        return (
          i.isNodeOfType(a, ['input', 'textarea']) ||
          a.contentEditable === 'true'
        );
      },
    };
    e.exports = i;
  },
  null
);
__d(
  'ArtilleryJSPointTypes',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      ASYNC_REQUEST_SENT: 1,
      ASYNC_RESPONSE_RECEIVED: 2,
      TRACE_STARTED: 3,
      TRACE_ENDED: 4,
    });
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/Xw9uo4x52zr/
 */
__d(
  'Alea',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g() {
      __p && __p();
      var a = 4022871197,
        b = function (b) {
          __p && __p();
          b = b.toString();
          for (var c = 0; c < b.length; c++) {
            a += b.charCodeAt(c);
            var d = 0.02519603282416938 * a;
            a = d >>> 0;
            d -= a;
            d *= a;
            a = d >>> 0;
            d -= a;
            a += d * 4294967296;
          }
          return (a >>> 0) * 23283064365386963e-26;
        };
      b.version = 'Mash 0.9';
      return b;
    }
    function a() {
      __p && __p();
      return (function (a) {
        __p && __p();
        var b = 0,
          c = 0,
          d = 0,
          e = 1;
        a.length === 0 && (a = [new Date()]);
        var f = new g();
        b = f(' ');
        c = f(' ');
        d = f(' ');
        for (var h = 0; h < a.length; h++)
          (b -= f(a[h])),
            b < 0 && (b += 1),
            (c -= f(a[h])),
            c < 0 && (c += 1),
            (d -= f(a[h])),
            d < 0 && (d += 1);
        f = null;
        h = function () {
          var a = 2091639 * b + e * 23283064365386963e-26;
          b = c;
          c = d;
          d = a - (e = a | 0);
          return d;
        };
        h.version = 'Alea 0.9';
        h.args = a;
        return h;
      })(Array.prototype.slice.call(arguments));
    }
    e.exports = a;
  },
  null
);
__d(
  'ArtilleryTraceIDUtils',
  ['Alea', 'FBLogger', 'ServerNonce'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      h = b('Alea')(b('ServerNonce').ServerNonce),
      i = function () {
        var a = 0,
          b = 0,
          c = '';
        for (var d = 10; d >= 0; d--)
          a < 6 && ((b = Math.floor(2147483648 * h())), (a = 32)),
            d === 0 && (b &= 7),
            (c = g.charAt(b & 63) + c),
            (b >>= 6),
            (a -= 6);
        return c;
      };
    a = {
      newTraceId: function () {
        var a;
        for (var c = 3; c > 0; c--) {
          a = i();
          if (a != this.getDummyId()) return a;
        }
        b('FBLogger')('FIXME').mustfix('failed to generate valid Fbtrace id');
        return this.getDummyId();
      },
      newObjectId: function () {
        return this.newTraceId();
      },
      getDummyId: function () {
        return 'AAAAAAAAAAA';
      },
      traceIdToBucket: function (a) {
        a = a.charAt(a.length - 1);
        return g.indexOf(a) % 32;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'ArtilleryAsyncRequestTracingAnnotator',
  [
    'FBLogger',
    'IntervalTrackingBoundedBuffer',
    'ResourceTimingsStore',
    'ResourceTypes',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [1e3],
      h = new (b('IntervalTrackingBoundedBuffer'))(),
      i = 'FB-ART-INFO',
      j = new Map();
    function k(a, b) {
      return b != null && b.artillery_join_data != null
        ? { uid: a, ids_for_timings: b.artillery_join_data }
        : null;
    }
    a = {
      startTracingWindow: function (a, b, c) {
        c === void 0 && (c = null);
        var d = h.open();
        c = c || g;
        j.set(a, { trace_id: a, interaction_name: b, tracing_levels: c });
        return {
          finishTracingWindow: function () {
            j['delete'](a);
            return d.close();
          },
        };
      },
      registerAsyncRequest: function (a, c) {
        if (j.size === 0) return function () {};
        else {
          var d = JSON.stringify(Array.from(j.values()));
          a.setRequestHeader(i, d);
          return function (a) {
            a = k(c, a);
            a != null
              ? h.pushElement(a)
              : (b('FBLogger')('ArtilleryAsyncRequestTracingAnnotator').debug(
                  'expected a payload back in the response from the server containing trace information, but nothing arrived.'
                ),
                b('ResourceTimingsStore')
                  .annotate(b('ResourceTypes').XHR, c)
                  .addStringAnnotation(
                    'join_error',
                    'join_data_expected_but_not_found'
                  ));
          };
        }
      },
      __active: function () {
        throw new Error('__active should only be available in __DEV__');
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'TimeSliceInteractionExtraSaver',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      EXAMPLE_COMPONENT_SAVER: 'example_component_saver',
      ADS_WAIT_TIME_SAVER: 'ads_wait_time_saver',
      ADS_FLUX_PROFILER_SAVER: 'ads_flux_profiler_saver',
      TIMESLICE_EXECUTION_SAVER: 'timeslice_execution_saver',
      INTERACTION_ASYNC_REQUEST_JOIN_DATA:
        'interaction_async_request_join_data',
      RESOURCES_SAVER: 'resources_saver',
      USER_TIMING_SAVER: 'user_timing_saver',
    });
  },
  null
);
__d(
  'InteractionAsyncRequestJoinDataSource',
  [
    'ArtilleryAsyncRequestTracingAnnotator',
    'FBLogger',
    'TimeSliceInteractionExtraSaver',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      registerInteraction: function (a) {
        __p && __p();
        a.countDown();
        var c = a.traceID,
          d = a.name;
        if (c == null) {
          b('FBLogger')('InteractionAsyncRequestJoinDataSource').mustfix(
            'got a null trace_id for interaction ' +
              d +
              '. Typically this indicates that only lite tracing was on, which this hook does not support'
          );
          return;
        }
        var e = b('ArtilleryAsyncRequestTracingAnnotator').startTracingWindow(
          c,
          d
        );
        a.registerOnBeforeFinish(function (a) {
          var c = e.finishTracingWindow();
          a.recordWithExtraSaver(
            b('TimeSliceInteractionExtraSaver')
              .INTERACTION_ASYNC_REQUEST_JOIN_DATA,
            'entries',
            c
          );
        });
        a.registerOnCleanup(function () {
          e.finishTracingWindow();
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'Random',
  ['Alea', 'ServerNonce'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 4294967296;
    a = b('ServerNonce').ServerNonce;
    var h = b('Alea')(a),
      i = {
        random: function () {
          if (window !== undefined && window.Uint32Array !== undefined) {
            var a = new window.Uint32Array(1),
              b = window.crypto || window.msCrypto;
            if (b && b.getRandomValues) {
              b.getRandomValues(a);
              return a[0] / g;
            }
          }
          return h();
        },
        uint32: function () {
          return Math.floor(this.random() * g);
        },
        coinflip: function (a) {
          if (a === 0) return !1;
          return a <= 1 ? !0 : i.random() * a <= 1;
        },
      };
    e.exports = i;
  },
  null
);
__d(
  'TimeSliceExecutionLogger',
  [
    'ExecutionContextObservers',
    'IntervalTrackingBoundedBuffer',
    'OnDemandExecutionContextObserver',
    'TimeSlice',
    'TimingAnnotations',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = 1e4,
      i = { BEGIN: 'b', END: 'e' },
      j = new (b('TimingAnnotations'))(),
      k;
    c = babelHelpers.inherits(a, b('OnDemandExecutionContextObserver'));
    g = c && c.prototype;
    function a() {
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = g.constructor).call.apply(a, [this].concat(e))),
        (this.$TimeSliceExecutionLogger1 = new (b(
          'IntervalTrackingBoundedBuffer'
        ))(h)),
        c
      );
    }
    a.prototype.onNewContextCreatedWhileEnabled = function (a, c, d) {
      if (a) return b('performanceAbsoluteNow')();
      else return null;
    };
    a.prototype.onBeforeContextStartedWhileEnabled = function (a, b, c) {
      c = { type: i.BEGIN, ts: a.absBeginTimeMs };
      b !== null && (c.creation = b);
      this.$TimeSliceExecutionLogger1.pushElement(c);
      a = k;
      k = null;
      return a;
    };
    a.prototype.onAfterContextStartedWhileEnabled = function (a, b, c, d) {
      return c;
    };
    a.prototype.onAfterContextEndedWhileEnabled = function (a, b, c, d) {
      b = a.absEndTimeMs;
      d = { type: i.END, ts: b, name: a.name, id: a.contextID };
      k && (d.annotations = k.prepareToSend());
      this.$TimeSliceExecutionLogger1.pushElement(d);
      k = c;
    };
    a.prototype.annotateCurrentExecution = function () {
      if (!this.isEnabled()) return j;
      k == null && (k = new (b('TimingAnnotations'))());
      return k;
    };
    a.prototype.getBeforeID = function () {
      return b('ExecutionContextObservers').beforeIDs
        .TIMESLICE_EXECUTION_LOGGER;
    };
    a.prototype.getAfterID = function () {
      return b('ExecutionContextObservers').afterIDs.TIMESLICE_EXECUTION_LOGGER;
    };
    a.prototype.getBuffer = function () {
      return this.$TimeSliceExecutionLogger1;
    };
    d = new a();
    b('TimeSlice').registerExecutionContextObserver(d);
    e.exports = d;
  },
  null
);
__d(
  'TimeSliceExecutionDataSource',
  [
    'TimeSliceExecutionLogger',
    'TimeSliceInteractionExtraSaver',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      registerInteraction: function (a) {
        a.countDown();
        var c = b('performanceAbsoluteNow')(),
          d = b('TimeSliceExecutionLogger').getBuffer().open(),
          e = b('TimeSliceExecutionLogger').expressInterest();
        a.registerOnBeforeFinish(function (a) {
          e();
          var f = d.close(),
            g = d.hasOverflown();
          a.recordWithExtraSaver(
            b('TimeSliceInteractionExtraSaver').TIMESLICE_EXECUTION_SAVER,
            'entries',
            { startTime: c, entries: f, hasOverflown: g }
          );
        });
        a.registerOnCleanup(function () {
          e(), d.close();
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'TimeSliceInteractionBootloadForPost',
  ['Bootloader'],
  function (a, b, c, d, e, f) {
    function a(a) {
      b('Bootloader').loadModules(
        [
          'Banzai',
          'BanzaiStream',
          'BanzaiODS',
          'ResourceTimingBootloaderHelper',
          'TimeSliceHelper',
          'SnappyCompressUtil',
          'PerfXSharedFields',
        ],
        a,
        'TimeSliceInteractionBootloadForPost'
      );
    }
    e.exports = a;
  },
  null
);
__d(
  'TimeSliceInteractionReliability',
  ['ifRequired'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'timeslice_interactions',
      h = !0,
      i = new Map();
    function j(a, b, c) {
      return b + ':' + c + ':' + a;
    }
    function a(a, c, d) {
      a = j(a, c, d);
      var f = b('ifRequired')('BanzaiODS', function (a) {
        return a;
      });
      if (!f) {
        c = i.get(a) || 0;
        i.set(a, c + 1);
      } else
        h &&
          (i.forEach(function (a, b) {
            return f.bumpEntityKey(g, b, a);
          }),
          (h = !1)),
          f.bumpEntityKey(g, a, 1);
    }
    e.exports = { bumpLifecycleCounter: a };
  },
  null
);
__d(
  'compactArray',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = [];
      for (var c = 0; c < a.length; ++c) {
        var d = a[c];
        d != null && b.push(d);
      }
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  'performanceNavigationStart',
  ['performance'],
  function (a, b, c, d, e, f) {
    __p && __p();
    if (b('performance').now)
      if (b('performance').timing && b('performance').timing.navigationStart)
        a = function () {
          return b('performance').timing.navigationStart;
        };
      else {
        if (typeof window._cstart === 'number')
          a = function () {
            return window._cstart;
          };
        else {
          var g = Date.now();
          a = function () {
            return g;
          };
        }
        a.isPolyfilled = !0;
      }
    else
      (a = function () {
        return 0;
      }),
        (a.isPolyfilled = !0);
    e.exports = a;
  },
  null
);
__d(
  'TimeSliceInteraction',
  [
    'invariant',
    'Arbiter',
    'ArtilleryComponentSaverOptions',
    'ArtilleryJSPointTypes',
    'ArtilleryTraceIDUtils',
    'Bootloader',
    'CircularBuffer',
    'ErrorUtils',
    'FBLogger',
    'Heartbeat',
    'InteractionAsyncRequestJoinDataSource',
    'ProfilingCounters',
    'ProfilingCountersStore',
    'Random',
    'ResourceTimingsStore',
    'ResourceTypes',
    'TimeSlice',
    'TimeSliceExecutionDataSource',
    'TimeSliceInteractionBootloadForPost',
    'TimeSliceInteractionExtraSaver',
    'TimeSliceInteractionReliability',
    'TimeSliceInteractionSV',
    'TimingAnnotations',
    'Visibility',
    'compactArray',
    'nullthrows',
    'performance',
    'performanceAbsoluteNow',
    'performanceNavigationStart',
    'requestIdleCallbackAcrossTransitions',
    'requireWeak',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    b('requireWeak')('AsyncProfiler', function (a) {
      h = a;
    });
    var i;
    b('requireWeak')('ArtilleryUserTimingProfiler', function (a) {
      i = a;
    });
    var j = { pointGroup: null, type: null, isPointOfInterest: null };
    d = 250;
    var k = new (b('CircularBuffer'))(d);
    new Map();
    f = 100;
    var l = new (b('CircularBuffer'))(f),
      m = new Map(),
      n = !1,
      o = null;
    b('Arbiter').subscribe('perf_nub_interaction_trace', function (a, b) {
      if (o) return;
      n = !0;
    });
    var p = new (b('TimingAnnotations').EmptyTimingAnnotations)(),
      q = new (b('TimingAnnotations').EmptyTraceTimingAnnotations)(),
      r = 'artillery_javascript_actions',
      s = 'artillery_javascript_lite_actions';
    function c(a) {
      var b = 'visibility_state_' + a,
        c = { isPointOfInterest: !0, pointGroup: 'visibility_state_changes' };
      return function () {
        return z.informGlobally(b, c);
      };
    }
    b('Visibility') &&
      b('Visibility').addListener &&
      (b('Visibility').addListener(b('Visibility').HIDDEN, c('hidden')),
      b('Visibility').addListener(b('Visibility').VISIBLE, c('visible')));
    function t(a) {
      if (b('Visibility')) {
        var c = b('Visibility').isHidden()
          ? b('Visibility').HIDDEN
          : b('Visibility').VISIBLE;
        a.inform('visibility_state_' + c, {
          pointGroup: 'visibility_state_changes',
        });
      }
    }
    function u(a) {
      return n && a === 'Event';
    }
    function v(a) {
      __p && __p();
      var c = b('TimeSliceInteractionSV').interaction_to_coinflip,
        d = b('TimeSliceInteractionSV').interaction_to_lite_coinflip,
        e;
      u(a)
        ? (e = 1)
        : (e = Object.prototype.hasOwnProperty.call(c, a)
            ? c[a]
            : b('TimeSliceInteractionSV').default_rate);
      c = Object.prototype.hasOwnProperty.call(d, a)
        ? d[a]
        : b('TimeSliceInteractionSV').lite_default_rate;
      d = new Set();
      b('Random').coinflip(c) && d.add('lite');
      b('Random').coinflip(e) && d.add('full');
      a = 0;
      d.has('full') ? (a = 1 / e) : e === 0 ? (a = 0) : (a = 1 - 1 / e);
      e = 0;
      d.has('lite') && (e = 1 / c);
      return { modes: d, probability: a, liteProbability: e };
    }
    function w() {
      return m.size !== 0;
    }
    function x(a) {
      return babelHelpers['extends']({}, a, {
        annotations: a.annotations.prepareToSend(),
      });
    }
    function y(a, c) {
      __p && __p();
      c = b('ProfilingCountersStore').getNestedTotalsByAttributions(c, a);
      a = c.attributed;
      c = c.unattributed;
      var d = {};
      a = Object.entries(a);
      for (var e = 0; e < a.length; e++) {
        var f = a[e],
          g = f[0];
        f = f[1];
        d['internal:' + g] = f;
      }
      g = Object.entries(c);
      for (var f = 0; f < g.length; f++) {
        a = g[f];
        e = a[0];
        c = a[1];
        d['external:' + e] = c;
      }
      return d;
    }
    z.create = function (a, b, c) {
      b === void 0 && (b = []);
      c === void 0 && (c = !1);
      a = new z(a, b, c);
      a.trace().addStringAnnotation('initiatorType', 'manually_ended');
      return a;
    };
    z.informGlobally = function (a, c) {
      if (!w()) return p;
      var d = b('performanceAbsoluteNow')(),
        e = new (b('TimingAnnotations'))(),
        f = babelHelpers['extends'](
          {
            ts: d,
            name: a,
            annotations: e,
            rawStackTrace: (c && c.rawStackTrace) || null,
            guardStack: b('TimeSlice').getGuardNameStack(),
          },
          j,
          c
        );
      e.addStringAnnotation('global_point', '1');
      m.forEach(function (a) {
        return a.push(f);
      });
      return e;
    };
    z.informOnPage = function (a, c) {
      var d = b('performanceAbsoluteNow')(),
        e = new (b('TimingAnnotations'))();
      d = babelHelpers['extends'](
        {
          ts: d,
          name: a,
          annotations: e,
          rawStackTrace: (c && c.rawStackTrace) || null,
          guardStack: [],
        },
        j,
        c
      );
      k.write(d);
      return e;
    };
    function z(a, c, d) {
      __p && __p();
      c === void 0 && (c = []);
      d === void 0 && (d = !1);
      this.$2 = null;
      this.$4 = !0;
      this.$5 = null;
      this.$6 = [];
      this.$7 = !1;
      this.$8 = null;
      this.$12 = [];
      this.$13 = [];
      this.$14 = [];
      this.$15 = [];
      this.$16 = new (b('TimingAnnotations').TraceTimingAnnotations)();
      this.$17 = new Map();
      this.$20 = null;
      this.$21 = 1;
      this.$24 = 1;
      this.$28 = !0;
      this.$29 = {};
      var e = v(a),
        f = e.modes,
        g = e.probability;
      e = e.liteProbability;
      this.$18 = f;
      this.$1 = a;
      this.$22 = g;
      this.$23 = e;
      this.$19 = d
        ? b('performanceNavigationStart')()
        : b('performanceAbsoluteNow')();
      this.$27 = new Map();
      this.$11 = new Set();
      g = this.inform('trace_started', {
        type: b('ArtilleryJSPointTypes').TRACE_STARTED,
        pointGroup: 'e2e',
        isPointOfInterest: !0,
        ts: this.$19,
      });
      b('performance') &&
        b('performance').now &&
        g.addStringAnnotation(
          'offset_from_start_of_req_ms',
          b('performance').now().toString()
        );
      t(this);
      m.set(this, []);
      if (this.isEnabledForMode('full')) {
        b('TimeSliceInteractionSV').enable_heartbeat &&
          (this.$5 = b('Heartbeat').get().expressInterest());
        h && h.enabled() && (this.$9 = h.startRecording());
        e = b('TimeSliceInteractionSV').user_timing_coinflip || 0;
        i && e && b('Random').coinflip(e) && (this.$10 = i.startRecording());
        this.$3 = b('ArtilleryTraceIDUtils').newTraceId();
      }
      f.has('full') &&
        l.write({ interaction: this, ts: b('performanceAbsoluteNow')() });
      if (f.size === 0) this.disable(!0);
      else {
        if (this.isEnabledForMode('full')) {
          b('TimeSliceInteractionSV').enable_heartbeat &&
            (this.$5 = b('Heartbeat').get().expressInterest());
          b('TimeSliceInteractionSV').force_async_request_tracing_on &&
            c.push(b('InteractionAsyncRequestJoinDataSource'));
          d = b('ProfilingCounters').getObserver().expressInterest();
          this.$14.push(d);
          u(a) && ((o = b('nullthrows')(this.$3)), (n = !1));
          this.$25 = b('ProfilingCountersStore').getInstance().open();
          this.$26 = b('TimeSlice').getBuffer().open();
          this.$14.push(
            function () {
              this.$26 && this.$26.close(), this.$25 && this.$25.close();
            }.bind(this)
          );
        }
        var j = {
          trace: function () {
            return this.trace();
          }.bind(this),
          countDown: function () {
            return this.countDown();
          }.bind(this),
          forceFinish: function () {
            return this.finish(!0);
          }.bind(this),
          registerOnBeforeFinish: function (a) {
            return this.registerOnBeforeFinish(a);
          }.bind(this),
          registerOnCleanup: function (a) {
            return this.registerOnCleanUp(a);
          }.bind(this),
          traceID: this.$3,
          name: a,
        };
        b('TimeSliceInteractionSV').also_record_new_timeslice_format &&
          c.push(b('TimeSliceExecutionDataSource'));
        var k = b('compactArray')(
          c.map(
            function (a) {
              this.$24++;
              return a.registerInteraction(j);
            }.bind(this)
          )
        );
        this.$14.push(function () {
          k.forEach(function (a) {
            return a.remove();
          });
        });
        this.$13.push(
          function () {
            this.trace().addStringAnnotation('wait_for_count', '' + this.$24);
          }.bind(this)
        );
      }
      for (
        var g = f,
          e = Array.isArray(g),
          d = 0,
          g = e
            ? g
            : g[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        if (e) {
          if (d >= g.length) break;
          c = g[d++];
        } else {
          d = g.next();
          if (d.done) break;
          c = d.value;
        }
        f = c;
        b('TimeSliceInteractionReliability').bumpLifecycleCounter(
          'starting',
          a,
          f
        );
      }
    }
    z.prototype.recordWithExtraSaver = function (a, b, c) {
      if (this.isEnabled()) {
        var d = this.$27.get(a) || {};
        b != null && c != null && (d[b] = c);
        this.$27.set(a, d);
      }
      return this;
    };
    z.prototype.countDown = function () {
      this.$24--,
        this.$24 === 0
          ? this.$20 && this.$20()
          : this.$24 < 0 &&
            b('FBLogger')('FIXME').mustfix('some hook counted down twice');
    };
    z.prototype.countUp = function () {
      this.$24 > 0
        ? ++this.$24
        : b('FBLogger')('FIXME').mustfix(
            'Attempting to countUp on finished interaction'
          );
    };
    z.prototype.inform = function (a, c) {
      var d = c != null && c.isPointOfInterest;
      if (
        !this.isEnabledForMode('full') &&
        !(this.isEnabledForMode('lite') && d)
      )
        return p;
      d = (c && c.ts) || b('performanceAbsoluteNow')();
      var e = new (b('TimingAnnotations'))(),
        f = this.isEnabledForMode('full')
          ? b('TimeSlice').getGuardNameStack()
          : [];
      this.$12.push(
        babelHelpers['extends'](
          {
            ts: d,
            name: a,
            annotations: e,
            rawStackTrace: (c && c.rawStackTrace) || null,
            guardStack: f,
          },
          j,
          c
        )
      );
      return e;
    };
    z.prototype.informPointWithOverride = function (a, c) {
      __p && __p();
      var d = b('performanceAbsoluteNow')(),
        e = c != null && c.isPointOfInterest;
      if (
        (!this.isEnabledForMode('full') &&
          !(this.isEnabledForMode('lite') && e)) ||
        !this.$29
      )
        return p;
      e = this.isEnabledForMode('full')
        ? b('TimeSlice').getGuardNameStack()
        : [];
      var f = this.$29[a];
      c && (c.rawStackTrace = c.rawStackTrace || null);
      if (f) (f.ts = d), (f.guardStack = e), Object.assign(f, c || {});
      else {
        f = new (b('TimingAnnotations'))();
        this.$29[a] = babelHelpers['extends'](
          {
            ts: d,
            name: a,
            annotations: f,
            rawStackTrace: (c && c.rawStackTrace) || null,
            guardStack: e,
          },
          j,
          c
        );
      }
      return this.$29[a].annotations;
    };
    z.prototype.invokeWithProfiling = function (c, d) {
      if (!this.isEnabledForMode('full')) return d();
      var e = this.inform('start_' + c);
      this.$6.push(e);
      e = b('ErrorUtils').applyWithGuard(d, a, null, null, c);
      this.inform('finished_' + c);
      this.$6.pop();
      return e;
    };
    z.prototype.getCurrentInvocation = function () {
      if (!this.isEnabledForMode('full')) return p;
      else if (this.$6.length < 1) return p;
      else return this.$6[this.$6.length - 1];
    };
    z.prototype.finish = function (a) {
      __p && __p();
      if (!this.$4) return;
      if (a && this.$20) {
        this.$20();
        return;
      }
      if (this.$7)
        b('FBLogger')('FIXME').mustfix('Trace was already marked as ended');
      else {
        t(this);
        this.$15.forEach(
          function (a) {
            return a(this);
          }.bind(this)
        );
        for (
          var c = this.$18,
            d = Array.isArray(c),
            e = 0,
            c = d
              ? c
              : c[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= c.length) break;
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          b('TimeSliceInteractionReliability').bumpLifecycleCounter(
            'finishing',
            this.$1,
            f
          );
        }
        this.inform('trace_ended', {
          type: b('ArtilleryJSPointTypes').TRACE_ENDED,
          pointGroup: 'e2e',
          isPointOfInterest: !0,
        });
        var i = this.isEnabledForMode('lite'),
          j = this.isEnabledForMode('full');
        j &&
          this.trace().addStringAnnotation(
            'weight',
            '' + 1 / (this.$21 * this.$22)
          );
        i &&
          this.trace().addStringAnnotation(
            'lite_weight',
            '' + 1 / (this.$21 * this.$23)
          );
        navigator &&
          navigator.connection &&
          (typeof navigator.connection.downlink === 'number' &&
            this.trace().addStringAnnotation(
              'browser_downlink_megabits',
              navigator.connection.downlink.toString()
            ),
          typeof navigator.connection.rtt === 'number' &&
            this.trace().addStringAnnotation(
              'browser_rtt_ms',
              navigator.connection.rtt.toString()
            ),
          typeof navigator.connection.effectiveType === 'string' &&
            this.trace().addStringAnnotation(
              'browser_effective_connection_type',
              navigator.connection.effectiveType
            ));
        var k = b('performanceAbsoluteNow')(),
          l = m.get(this);
        m['delete'](this);
        this.$5 && this.$5();
        var n = this.$25 != null ? this.$25.close() : [],
          p = this.$26 != null ? this.$26.close() : [],
          q = this.$26 != null ? this.$26.hasOverflown() : !1,
          r = this.$26 != null ? this.$26.getOverflowSize() : 0,
          s = this.$10 != null ? this.$10.close() : null;
        if (i || j) {
          var u = function (a) {
              i && this.$30(l),
                j &&
                  (s != null &&
                    this.recordWithExtraSaver(
                      b('TimeSliceInteractionExtraSaver').USER_TIMING_SAVER,
                      'data',
                      s
                    ),
                  this.$31(k, l, a, n, p, q, r)),
                o &&
                  o === this.$3 &&
                  (b('Arbiter').inform('time_slice_trace_posted', {
                    traceId: this.$3,
                  }),
                  (o = null)),
                this.$32();
            }.bind(this),
            v = u;
          if (this.$9 !== undefined) {
            h || g(0, undefined);
            var w = h.stopRecording(this.$9);
            v = function () {
              w['catch'](function (a) {
                setTimeout(function () {
                  throw a;
                }, 0);
              }).then(u);
            };
          }
          a
            ? v()
            : (this.$20 = function () {
                return b('requestIdleCallbackAcrossTransitions')(function () {
                  return v();
                });
              });
        }
        this.countDown();
        this.$7 = !0;
      }
    };
    z.prototype.registerOnBeforeSend = function (a) {
      this.$4 && this.$13.push(a);
      return this;
    };
    z.prototype.registerOnBeforeFinish = function (a) {
      this.$4 && this.$15.push(a);
      return this;
    };
    z.prototype.registerOnCleanUp = function (a) {
      this.$4 && this.$14.push(a);
      return this;
    };
    z.prototype.trace = function () {
      return !this.$4 ? q : this.$16;
    };
    z.prototype.getTraceID = function () {
      return this.$4 ? this.$3 : null;
    };
    z.prototype.setExtraSampleRate = function (a) {
      this.$21 = a;
      return this;
    };
    z.prototype.isEnabled = function () {
      return this.$4;
    };
    z.prototype.disable = function (a) {
      __p && __p();
      a === void 0 && (a = !1);
      m['delete'](this);
      this.$5 && this.$5();
      this.$9 !== undefined && (h || g(0, undefined), h.stopRecording(this.$9));
      if (!a && this.$4)
        for (
          var a = this.$18,
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          b('TimeSliceInteractionReliability').bumpLifecycleCounter(
            'disabled',
            this.$1,
            e
          );
        }
      this.$4 = !1;
      this.$32();
    };
    z.prototype.disableBanzaiStream = function () {
      this.$28 = !1;
    };
    z.getPageLoadPoints = function (a, b) {
      var c = [],
        d = k.read();
      for (var e = d.length - 1; e >= 0; e--) {
        var f = d[e];
        if (f.ts < a) return c;
        else f.ts < b && c.push(x(f));
      }
      return c;
    };
    z.getInteractionIDsBetween = function (a, b) {
      __p && __p();
      var c = [],
        d = l.read();
      for (var e = d.length - 1; e >= 0; e--) {
        var f = d[e],
          g = f.interaction;
        f = f.ts;
        g = g.getTraceID();
        if (f < a) return c;
        else f < b && g != null && c.push(g);
      }
      return c;
    };
    z.prototype.receiveAsyncResponse = function (a) {
      a != null && a.artillery_info && this.isEnabledForMode('full')
        ? this.$33(a.artillery_info.artillery_join_points)
        : this.disable();
      return this;
    };
    z.prototype.addArtilleryIDHeader = function (a) {
      this.$4 &&
        a.setRequestHeader(
          'X-ARTILLERY-REQ-METADATA',
          JSON.stringify({ trace_id: this.$3 })
        );
      return this;
    };
    z.prototype.forResourceRequest = function (a) {
      __p && __p();
      if (!this.isEnabledForMode('full')) return p;
      else {
        var c = this.$17.get(a);
        if (c) return c;
        else {
          c = new (b('TimingAnnotations'))();
          this.$17.set(a, c);
          return c;
        }
      }
    };
    z.prototype.addProfilingCounterAttribution = function (a) {
      this.$11.add(a);
      return this;
    };
    z.prototype.$33 = function (a) {
      if (!this.isEnabledForMode('full')) return this;
      this.$2 = a;
      return this;
    };
    z.prototype.$30 = function (a) {
      __p && __p();
      this.$13.forEach(function (a) {
        return a();
      });
      this.$13 = [];
      if (!this.isEnabled()) return;
      var c = [];
      a = this.$12.concat(Object.values(this.$29)).concat(a || []);
      a.forEach(function (a) {
        a.isPointOfInterest &&
          c.push({
            ts: a.ts,
            name: a.name,
            pointGroup: a.pointGroup,
            annotations: a.annotations.prepareToSend(),
          });
      });
      var d = {
        trace_id: this.$3,
        action_name: this.$1,
        trace_annotations: this.$16.prepareToSend(),
        points: c,
      };
      b('Bootloader').loadModules(
        ['Banzai', 'BanzaiODS', 'PerfXSharedFields'],
        function (a, c, e) {
          b('TimeSliceInteractionReliability').bumpLifecycleCounter(
            'posting',
            this.$1,
            'lite'
          ),
            a.post(s, e.addCommonValues(d), a.VITAL);
        }.bind(this),
        'TimeSliceInteraction'
      );
    };
    z.prototype.$31 = function (a, c, d, e, f, g, h) {
      __p && __p();
      this.$13.forEach(function (a) {
        return a();
      });
      this.$13 = [];
      if (!this.isEnabled()) return;
      c = c != null ? this.$12.concat(c) : this.$12;
      c.push.apply(c, Object.values(this.$29));
      var i = c.map(x),
        j = Array.from(this.$11.keys()),
        k = new Map(this.$27.entries());
      b('TimeSliceInteractionBootloadForPost')(
        function (c, l, m, n, o, p, q) {
          __p && __p();
          b('TimeSliceInteractionReliability').bumpLifecycleCounter(
            'posting',
            this.$1,
            'full'
          );
          m = o.getMetrics(
            this.$19,
            a,
            b('TimeSliceInteractionSV').maxBlockMergeDuration,
            b('TimeSliceInteractionSV').maxBlockMergeDistance,
            f,
            b('ProfilingCountersStore').toMap(e),
            {
              includeRefTreeIDs: !0,
              counterFunction: function (a) {
                return y(j, a);
              },
            }
          );
          this.$16.addStringAnnotation(
            'overflown_timeslice_buffer',
            g ? '1' : '0'
          );
          this.$16.addStringAnnotation(
            'overflown_timeslice_entry_count',
            '' + h
          );
          if (
            b('performance') &&
            b('performance').timing &&
            b('performance').timing.navigationStart
          ) {
            var s = f.length > 0 ? f[0].begin : null;
            n = n.getMetrics(
              s != null && s < this.$19 ? s : this.$19,
              !1,
              null,
              a,
              !0,
              !0
            );
            s = n.data;
            n = n.diagnostics;
            n &&
              (this.$16.addStringAnnotation(
                'number_of_valid_entries',
                n.numValidEntries.toString()
              ),
              this.$16.addStringAnnotation(
                'number_of_success_metrics',
                n.numSuccessfulMetrics.toString()
              ));
            Object.values(s).forEach(
              function (a) {
                return a.forEach(
                  function (a) {
                    var c = a.desc,
                      d = a.type,
                      e = this.$17.get(c);
                    e = e && e.prepareToSend();
                    if (
                      d === b('ResourceTypes').JS ||
                      d === b('ResourceTypes').CSS ||
                      d === b('ResourceTypes').XHR
                    ) {
                      d = b('ResourceTimingsStore').getAnnotationsFor(d, c);
                      e = b('TimingAnnotations').combine(e, d);
                    }
                    a.annotations = e;
                  }.bind(this)
                );
              }.bind(this)
            );
          } else s = {};
          var t = {};
          k.forEach(function (a, c) {
            __p && __p();
            var d = b('ArtilleryComponentSaverOptions').options[c];
            d = !!(d && d.shouldCompress);
            if (d) {
              d = p.compressStringToSnappy(JSON.stringify(a));
              if (d != null) {
                t[c] = { data: d, isCompressed: !0 };
                return;
              }
            }
            t[c] = { isCompressed: !1, data: a };
          });
          n = {
            trace_id: this.$3,
            join_points: this.$2,
            action_name: this.$1,
            points: i,
            traceAnnotations: this.$16.prepareToSend(),
            timeslices: o.formatMetricsForTransport(m),
            resource_timings: s,
            sampler_profile: d,
            extra_savers: t,
          };
          n = q.addCommonValues(n);
          b('TimeSliceInteractionSV').compression_enabled &&
            (n = this.$34(p, n));
          o = b('TimeSliceInteractionSV').banzai_stream_coinflip || 0;
          this.$28 &&
          b('TimeSliceInteractionSV').enable_banzai_stream &&
          b('Random').coinflip(o)
            ? l.post(r, n, { compress: !1 })
            : c.post(r, n, { compress: !1 });
        }.bind(this)
      );
    };
    z.prototype.$34 = function (a, b) {
      __p && __p();
      var c = ['points', 'timeslices', 'resource_timings', 'sampler_profile'],
        d = {};
      c.forEach(function (c) {
        var e = b[c];
        if (e == null) return;
        e = JSON.stringify(e);
        e = a.compressStringToSnappy(e);
        e !== null && ((d[c] = e), delete b[c]);
      });
      return babelHelpers['extends']({}, b, { miny: d });
    };
    z.prototype.$32 = function () {
      delete this.$12,
        (this.$13 = []),
        this.$14 &&
          (this.$14.forEach(function (a) {
            return a();
          }),
          (this.$14 = [])),
        (this.$15 = []),
        delete this.$29,
        delete this.$20,
        delete this.$27;
    };
    z.prototype.isEnabledForMode = function (a) {
      return this.$4 && !this.$7 && this.$18.has(a);
    };
    z.prototype.isDone = function () {
      return this.$7;
    };
    z.getAllActiveInteractions = function () {
      return m.keys();
    };
    e.exports = z;
  },
  null
);
__d(
  'TimeSliceReferenceCounting',
  [
    'ExecutionContextObservers',
    'OnDemandExecutionContextObserver',
    'ProfilingCounters',
    'TimeSlice',
    'requestIdleCallbackAcrossTransitions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = [],
      i = [];
    c = null;
    var j = null,
      k = 1,
      l = [];
    function m(a) {
      if (a == null || a.length === 0) return;
      a = a.filter(function (a) {
        return --a.openReferenceCount == 0;
      });
      a.length > 0 &&
        (l.push.apply(l, a),
        b('requestIdleCallbackAcrossTransitions')(
          b('TimeSlice').guard(n, 'invoking onAllChildrenFinished callbacks', {
            propagationType: b('TimeSlice').PropagationType.ORPHAN,
          })
        ));
    }
    function n() {
      while (l.length) l.pop().finish();
    }
    function o(a, b) {
      (this.$2 = o.$1++),
        (this.$3 = a),
        (this.$4 = []),
        (this.$5 = !1),
        (this.$6 = b),
        (this.openReferenceCount = 1),
        (this.timeslices = [a]);
    }
    o.prototype.isProfiling = function () {
      return this.$6;
    };
    o.prototype.addCallback = function (a) {
      !this.$5 ? this.$4.push(a) : a();
      return this;
    };
    o.prototype.finish = function () {
      this.$5 ||
        ((this.$5 = !0),
        this.$4.forEach(function (a) {
          return a();
        }),
        delete this.$4);
    };
    o.prototype.getContinuationExecutionCounterID = function () {
      return this.$2;
    };
    o.prototype.isInsideContinuationExecution = function () {
      return i.indexOf(this) !== -1;
    };
    o.prototype.getTimeSliceContextsThisCounted = function () {
      return this.timeslices;
    };
    o.prototype.getRootContextID = function () {
      return this.$3;
    };
    o.$1 = 1;
    function p(a, b) {
      a.forEach(function (a) {
        var c = a.getContinuationExecutionCounterID(),
          d = b.find(function (a) {
            return a.getContinuationExecutionCounterID() === c;
          });
        d || b.push(a);
      });
    }
    g = babelHelpers.inherits(a, b('OnDemandExecutionContextObserver'));
    g && g.prototype;
    a.prototype.onNewContextCreatedWhileEnabled = function (a, b, c) {
      var d;
      c.isContinuation &&
        ((d = i),
        d.forEach(function (a) {
          return a.openReferenceCount++;
        }));
      a = {
        hasBeenInvoked: !1,
        hasExecutionBeenCounted: !1,
        parentReferenceCounters: d,
        creationID: k++,
      };
      return a;
    };
    a.prototype.onContextCanceled = function (a, b) {
      a = b || {};
      a.hasBeenInvoked ||
        (m(a.parentReferenceCounters), (a.hasBeenInvoked = !0));
    };
    a.prototype.onBeforeContextStartedWhileEnabled = function (a, c, d) {
      __p && __p();
      var e = {
        callerProfilingCounterID: j,
        callerReferenceCounters: h,
        callerExecutionCounters: i.slice(),
      };
      c = c || { hasBeenInvoked: !1, creationID: -1 };
      c.hasBeenInvoked = !0;
      a.executionNumber > 0 ? (h = []) : (h = c.parentReferenceCounters || []);
      d.extendsExecution ? p(h, i) : (i = []);
      i.forEach(function (b) {
        return b.timeslices.push(a.contextID);
      });
      h.filter(function (a) {
        return a.isProfiling();
      }).length > 0 && a.executionNumber === 0
        ? (j = b('ProfilingCounters').startTimingInContext(
            'REF_COUNTED_TIMESLICE_TIME',
            a.contextID
          ))
        : (j = null);
      return e;
    };
    a.prototype.onDisable = function () {
      (j = null), (h = []), (i = []);
    };
    a.prototype.onAfterContextStartedWhileEnabled = function (a, b, c, d) {
      return c;
    };
    a.prototype.onAfterContextEndedWhileEnabled = function (a, c, d, e) {
      c = a.contextID;
      j != null &&
        (b('ProfilingCounters').stopTimingInContext(j, c), (j = null));
      m(h);
      h = d.callerReferenceCounters;
      i = d.callerExecutionCounters;
      j = d.callerProfilingCounterID;
    };
    a.prototype.getBeforeID = function () {
      return b('ExecutionContextObservers').beforeIDs.REFERENCE_COUNTING;
    };
    a.prototype.getAfterID = function () {
      return b('ExecutionContextObservers').afterIDs.REFERENCE_COUNTING;
    };
    function a() {
      g.apply(this, arguments);
    }
    var q = {
        onAllChildrenFinished: function (a, b) {
          b === void 0 && (b = !1);
          var c = q.getObserver().expressInterest();
          return q.onAllChildrenFinishedWithoutAutoTurningObserverOn(a, c, b);
        },
        onAllChildrenFinishedWithoutAutoTurningObserverOn: function (a, d, e) {
          __p && __p();
          var f = b('TimeSlice').getContext();
          if (f == null) {
            d();
            return null;
          }
          f = f.contextID;
          c = new o(f, e);
          c.addCallback(d);
          a && c.addCallback(a);
          h = h.slice();
          h.push(c);
          i = i.slice();
          i.push(c);
          j == null &&
            c.isProfiling() &&
            (j = b('ProfilingCounters').startTimingInContext(
              'REF_COUNTED_TIMESLICE_TIME',
              f
            ));
          return c;
        },
        getObserver: function () {
          return r;
        },
      },
      r = new a();
    b('TimeSlice').registerExecutionContextObserver(r);
    e.exports = q;
  },
  null
);
__d(
  'TimeSliceAutoclosedInteraction',
  [
    'ErrorUtils',
    'ProfilingCounters',
    'TimeSlice',
    'TimeSliceInteraction',
    'TimeSliceInteractionExtraSaver',
    'TimeSliceInteractionSV',
    'TimeSliceReferenceCounting',
    'clearTimeout',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = 70 * 1e3;
    c = babelHelpers.inherits(a, b('TimeSliceInteraction'));
    g = c && c.prototype;
    function a(a, c) {
      __p && __p();
      c === void 0 && (c = []);
      g.constructor.call(this, a, c);
      this.$TimeSliceAutoclosedInteraction1 = new Map();
      this.$TimeSliceAutoclosedInteraction2 = 0;
      this.$TimeSliceAutoclosedInteraction3 = !0;
      this.$TimeSliceAutoclosedInteraction4 = [];
      this.$TimeSliceAutoclosedInteraction5 = new Set();
      if (this.isEnabled()) {
        this.trace().addStringAnnotation('initiatorType', 'autoclosed');
        var d = b('setTimeoutAcrossTransitions')(
          b('TimeSlice').guard(
            function () {
              this.isDone() ||
                (this.trace().addStringAnnotation(
                  'terminated_by_timeout_ms',
                  h.toString()
                ),
                this.finish());
            }.bind(this),
            'timeout for action ' + a,
            { propagationType: b('TimeSlice').PropagationType.EXECUTION }
          ),
          h
        );
        this.registerOnBeforeSend(
          function () {
            this.trace()
              .addStringAnnotation(
                'ref_counting_trees',
                '' + this.$TimeSliceAutoclosedInteraction2
              )
              .addStringAnnotation(
                'ref_counters_pending_count',
                '' + this.$TimeSliceAutoclosedInteraction1.size
              ),
              b('clearTimeout')(d);
          }.bind(this)
        );
        c = b('TimeSliceReferenceCounting').onAllChildrenFinished(null, !0);
        if (c == null)
          this.disable(),
            b('ErrorUtils').reportError(
              new Error(
                'starting autoclosed interaction outside of a timeslice.'
              )
            );
        else {
          this.waitForReferenceCounter(c);
          this.trace().addStringAnnotation(
            'on_demand_reference_counting',
            b('TimeSliceInteractionSV').on_demand_reference_counting ? '1' : '0'
          );
          a = 'timeslice_interaction_' + this.getTraceID();
          this.isEnabledForMode('full') &&
            (b('ProfilingCounters')
              .currentContext()
              .addAttribution(
                a,
                b('ProfilingCounters').AttributionPropagation
                  .ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC
              ),
            this.addProfilingCounterAttribution(a));
        }
      }
    }
    a.getInteractionsActiveRightNow = function () {
      return Array.from(
        b('TimeSliceInteraction').getAllActiveInteractions()
      ).filter(function (a) {
        return (
          a.$TimeSliceAutoclosedInteraction3 &&
          a.hasActiveReferenceCountingHandle()
        );
      });
    };
    a.prototype.waitForReferenceCounter = function (a) {
      __p && __p();
      if (!this.isEnabled()) return this;
      var c = a.getContinuationExecutionCounterID();
      this.$TimeSliceAutoclosedInteraction1.set(c, a);
      this.$TimeSliceAutoclosedInteraction2++;
      a.addCallback(
        function () {
          b('TimeSliceInteractionSV').also_record_new_timeslice_format &&
            this.$TimeSliceAutoclosedInteraction1.has(c) &&
            a.getTimeSliceContextsThisCounted().forEach(
              function (a) {
                return this.$TimeSliceAutoclosedInteraction5.add(a);
              }.bind(this)
            ),
            this.$TimeSliceAutoclosedInteraction1['delete'](c) &&
              this.$TimeSliceAutoclosedInteraction1.size === 0 &&
              (this.$TimeSliceAutoclosedInteraction4.forEach(function (a) {
                return a();
              }),
              (this.$TimeSliceAutoclosedInteraction4 = []),
              this.isEnabled() &&
                !this.isDone() &&
                (b('TimeSliceInteractionSV').also_record_new_timeslice_format &&
                  this.recordWithExtraSaver(
                    b('TimeSliceInteractionExtraSaver')
                      .TIMESLICE_EXECUTION_SAVER,
                    'reference_counted_contexts',
                    Array.from(this.$TimeSliceAutoclosedInteraction5.values())
                  ),
                this.finish()));
        }.bind(this)
      );
      return this;
    };
    a.prototype.onReferenceCountedExecutionFinished = function (a) {
      this.$TimeSliceAutoclosedInteraction4.push(a);
    };
    a.prototype.hasActiveReferenceCountingHandle = function () {
      __p && __p();
      for (
        var a = this.$TimeSliceAutoclosedInteraction1.values(),
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        if (d.isInsideContinuationExecution()) return !0;
      }
      return !1;
    };
    e.exports = a;
  },
  null
);
__d(
  'Keys',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      BACKSPACE: 8,
      TAB: 9,
      RETURN: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAUSE_BREAK: 19,
      CAPS_LOCK: 20,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      INSERT: 45,
      DELETE: 46,
      ZERO: 48,
      ONE: 49,
      TWO: 50,
      THREE: 51,
      FOUR: 52,
      FIVE: 53,
      SIX: 54,
      SEVEN: 55,
      EIGHT: 56,
      NINE: 57,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      LEFT_WINDOW_KEY: 91,
      RIGHT_WINDOW_KEY: 92,
      SELECT_KEY: 93,
      NUMPAD_0: 96,
      NUMPAD_1: 97,
      NUMPAD_2: 98,
      NUMPAD_3: 99,
      NUMPAD_4: 100,
      NUMPAD_5: 101,
      NUMPAD_6: 102,
      NUMPAD_7: 103,
      NUMPAD_8: 104,
      NUMPAD_9: 105,
      MULTIPLY: 106,
      ADD: 107,
      SUBTRACT: 109,
      DECIMAL_POINT: 110,
      DIVIDE: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      NUM_LOCK: 144,
      SCROLL_LOCK: 145,
      SEMI_COLON: 186,
      EQUAL_SIGN: 187,
      COMMA: 188,
      DASH: 189,
      PERIOD: 190,
      FORWARD_SLASH: 191,
      GRAVE_ACCENT: 192,
      OPEN_BRACKET: 219,
      BACK_SLASH: 220,
      CLOSE_BRAKET: 221,
      SINGLE_QUOTE: 222,
    });
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/ZtTipMAcpq9/
 */
__d(
  'ImmediateImplementation',
  ['ImmediateImplementationExperiments'],
  function (a, b, c, d, e, f) {
    __p && __p();
    (function (c, d) {
      __p && __p();
      var e = 1,
        g = {},
        h = {},
        i = h,
        j = !1,
        k = c.document,
        l;
      function m(a) {
        var b = a[0];
        a = Array.prototype.slice.call(a, 1);
        g[e] = function () {
          b.apply(d, a);
        };
        i = i.next = { handle: e++ };
        return i.handle;
      }
      function n() {
        __p && __p();
        var a, b;
        while (!j && (a = h.next)) {
          h = a;
          if ((b = g[a.handle])) {
            j = !0;
            try {
              b(), (j = !1);
            } finally {
              o(a.handle), j && ((j = !1), h.next && l(n));
            }
          }
        }
      }
      function o(a) {
        delete g[a];
      }
      function p() {
        __p && __p();
        if (c.postMessage && !c.importScripts) {
          var a = !0,
            b = function b() {
              (a = !1),
                c.removeEventListener
                  ? c.removeEventListener('message', b, !1)
                  : c.detachEvent('onmessage', b);
            };
          if (c.addEventListener) c.addEventListener('message', b, !1);
          else if (c.attachEvent) c.attachEvent('onmessage', b);
          else return !1;
          c.postMessage('', '*');
          return a;
        }
      }
      function q() {
        var a = 'setImmediate$' + Math.random() + '$',
          b = function (event) {
            event.source === c &&
              typeof event.data === 'string' &&
              event.data.indexOf(a) === 0 &&
              n();
          };
        c.addEventListener
          ? c.addEventListener('message', b, !1)
          : c.attachEvent('onmessage', b);
        l = function () {
          var b = m(arguments);
          c.originalPostMessage
            ? c.originalPostMessage(a + b, '*')
            : c.postMessage(a + b, '*');
          return b;
        };
      }
      function r() {
        var a = new MessageChannel();
        a.port1.onmessage = n;
        l = function () {
          var b = m(arguments);
          a.port2.postMessage(b);
          return b;
        };
      }
      function s() {
        var a = k.documentElement;
        l = function () {
          var b = m(arguments),
            c = k.createElement('script');
          c.onreadystatechange = function () {
            (c.onreadystatechange = null), a.removeChild(c), (c = null), n();
          };
          a.appendChild(c);
          return b;
        };
      }
      function t() {
        l = function () {
          setTimeout(n, 0);
          return m(arguments);
        };
      }
      p()
        ? c.MessageChannel &&
          b('ImmediateImplementationExperiments').prefer_message_channel
          ? r()
          : q()
        : c.MessageChannel
        ? r()
        : k &&
          k.createElement &&
          'onreadystatechange' in k.createElement('script')
        ? s()
        : t();
      f.setImmediate = l;
      f.clearImmediate = o;
    })(Function('return this')());
  },
  null
);
__d(
  'clearImmediatePolyfill',
  ['ImmediateImplementation'],
  function (a, b, c, d, e, f) {
    e.exports = a.clearImmediate || b('ImmediateImplementation').clearImmediate;
  },
  null
);
__d(
  'clearImmediate',
  ['TimerStorage', 'TimeSlice', 'clearImmediatePolyfill'],
  function (a, b, c, d, e, f) {
    var g = b('TimerStorage').IMMEDIATE;
    function a(a) {
      if (a != null) {
        b('TimerStorage').unset(b('TimerStorage').IMMEDIATE, a);
        var c = g + String(a);
        b('TimeSlice').cancelWithToken(c);
      }
      b('clearImmediatePolyfill')(a);
    }
    e.exports = a;
  },
  null
);
__d(
  'setImmediatePolyfill',
  ['invariant', 'PromiseUsePolyfillSetImmediateGK', 'ImmediateImplementation'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = a.setImmediate;
    if (
      b('PromiseUsePolyfillSetImmediateGK')
        .www_always_use_polyfill_setimmediate ||
      !h
    ) {
      d = b('ImmediateImplementation');
      h = d.setImmediate;
    }
    function c(a) {
      typeof a === 'function' || g(0, undefined);
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      return h.apply(undefined, [a].concat(c));
    }
    e.exports = c;
  },
  null
);
__d(
  'setImmediateAcrossTransitions',
  ['TimerStorage', 'TimeSlice', 'setImmediatePolyfill'],
  function (a, b, c, d, e, f) {
    var g = b('TimerStorage').IMMEDIATE;
    function a(a) {
      var c = b('TimeSlice').guard(a, 'setImmediate', {
        propagationType: b('TimeSlice').PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      for (
        var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
        f < d;
        f++
      )
        e[f - 1] = arguments[f];
      var h = b('setImmediatePolyfill').apply(undefined, [c].concat(e)),
        i = g + String(h);
      b('TimeSlice').registerForCancelling(i, c);
      return h;
    }
    e.exports = a;
  },
  null
);
__d(
  'TimeSliceInteractionCancelHook',
  ['Keys', 'clearImmediate', 'requireWeak', 'setImmediateAcrossTransitions'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [];
    a = {
      registerInteraction: function (a) {
        var c = b('setImmediateAcrossTransitions')(function () {
            g.push(a);
          }),
          d = !1;
        return {
          remove: function () {
            if (d) return;
            d = !0;
            b('clearImmediate')(c);
            var e = g.indexOf(a);
            e !== -1 && g.splice(e, 1);
          },
        };
      },
    };
    b('requireWeak')('Event', function (a) {
      a.listen(document, 'click', function () {
        g.forEach(function (a) {
          a.trace().addStringAnnotation('clicked_during_interaction', '1');
        });
      }),
        a.listen(document, 'keydown', function (c) {
          a.getKeyCode(c) === b('Keys').ESC &&
            g.forEach(function (a) {
              a.trace().addStringAnnotation('escaped_during_interaction', '1');
            });
        });
    });
    e.exports = a;
  },
  null
);
__d(
  'CurrentEventMeta',
  [],
  function (a, b, c, d, e, f) {
    var g = null,
      h = {};
    a = {
      __setCurrentEventID: function (a) {
        g = a;
      },
      __informEventDataReady: function (a, b) {
        h[a] &&
          (h[a].forEach(function (a) {
            return a(b);
          }),
          delete h[a]);
      },
      hasCurrentEvent: function () {
        return !!g;
      },
      registerForCurrentEventData: function (a) {
        g && ((h[g] = h[g] || []), h[g].push(a));
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'TimeSliceInteractionEventHook',
  ['CurrentEventMeta'],
  function (a, b, c, d, e, f) {
    a = {
      registerInteraction: function (a) {
        b('CurrentEventMeta').hasCurrentEvent() &&
          (a.countUp(),
          b('CurrentEventMeta').registerForCurrentEventData(function (b) {
            Object.keys(b).forEach(function (c) {
              var d = '' + b[c];
              a.trace().addStringAnnotation(c, d);
            }),
              a.countDown();
          }));
        return null;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'TimeSliceInteractionLeaveHook',
  ['Run'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [];
    a = {
      registerInteraction: function (a) {
        g.push(a);
        return {
          remove: function () {
            var b = g.indexOf(a);
            b !== -1 && g.splice(b, 1);
          },
        };
      },
    };
    b('Run').onUnload(function () {
      g.forEach(function (a) {
        a
          .trace()
          .addStringAnnotation('ended_early_because_page_is_unloading', '1'),
          a.finish(!0);
      });
    });
    e.exports = a;
  },
  null
);
__d(
  'pageID',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Math.floor(2147483648 * Math.random()).toString(36);
  },
  null
);
__d(
  'NavigationMetricsCore',
  ['mixInEventEmitter', 'pageID'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
        NAVIGATION_DONE: 'NAVIGATION_DONE',
        EVENT_OCCURRED: 'EVENT_OCCURRED',
      },
      h = {
        tti: 'tti',
        e2e: 'e2e',
        all_pagelets_loaded: 'all_pagelets_loaded',
        all_pagelets_displayed: 'all_pagelets_displayed',
      },
      i = 0,
      j = {};
    function k() {
      (this.eventTimings = {
        tti: null,
        e2e: null,
        all_pagelets_loaded: null,
        all_pagelets_displayed: null,
      }),
        (this.lid = b('pageID') + ':' + i++),
        (this.extras = {});
    }
    k.prototype.getLID = function () {
      return this.lid;
    };
    k.prototype.setRequestStart = function (a) {
      this.start = a;
      return this;
    };
    k.prototype.setTTI = function (a) {
      this.eventTimings.tti = a;
      this.$1(h.tti, a);
      return this;
    };
    k.prototype.setE2E = function (a) {
      this.eventTimings.e2e = a;
      this.$1(h.e2e, a);
      return this;
    };
    k.prototype.setExtra = function (a, b) {
      this.extras[a] = b;
      return this;
    };
    k.prototype.setDisplayDone = function (a) {
      this.eventTimings.all_pagelets_displayed = a;
      this.setExtra('all_pagelets_displayed', a);
      this.$1(h.all_pagelets_displayed, a);
      return this;
    };
    k.prototype.setAllPageletsLoaded = function (a) {
      this.eventTimings.all_pagelets_loaded = a;
      this.setExtra('all_pagelets_loaded', a);
      this.$1(h.all_pagelets_loaded, a);
      return this;
    };
    k.prototype.setServerLID = function (a) {
      this.serverLID = a;
      return this;
    };
    k.prototype.$1 = function (event, a) {
      var b = {};
      j != null &&
        this.serverLID != null &&
        j[this.serverLID] != null &&
        (b = j[this.serverLID]);
      b = babelHelpers['extends']({}, b, { event: event, timestamp: a });
      l.emitAndHold(g.EVENT_OCCURRED, this.serverLID, b);
      return this;
    };
    k.prototype.doneNavigation = function () {
      var a = babelHelpers['extends'](
        { start: this.start, extras: this.extras },
        this.eventTimings
      );
      if (this.serverLID && j[this.serverLID]) {
        var b = this.serverLID;
        Object.assign(a, j[b]);
        delete j[b];
      }
      this.visualPerformance &&
        (a.visualPerfMetrics = this.visualPerformance.calculate(a.start));
      l.emitAndHold(g.NAVIGATION_DONE, this.lid, a);
    };
    var l = {
      Events: g,
      postPagelet: function (a, b, c) {},
      siteInit: function (a) {
        a(k);
      },
      setPage: function (a) {
        if (!a.serverLID) return;
        j[a.serverLID] = {
          page: a.page,
          pageType: a.page_type,
          pageURI: a.page_uri,
          serverLID: a.serverLID,
        };
      },
      getFullPageLoadLid: function () {
        throw new Error('getFullPageLoadLid is not implemented on this site');
      },
    };
    b('mixInEventEmitter')(l, g);
    e.exports = l;
  },
  null
);
__d(
  'requireCond',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      throw new Error('Cannot use raw untransformed requireCond.');
    }
    e.exports = a;
  },
  null
);
__d(
  'NavigationMetrics',
  [
    'Arbiter',
    'BigPipe',
    'NavigationMetricsCore',
    'PageEvents',
    'performance',
    'requireCond',
    'cr:661407',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('cr:661407').v,
      h = '0';
    b('NavigationMetricsCore').getFullPageLoadLid = function () {
      return h;
    };
    b('NavigationMetricsCore').siteInit(function (a) {
      __p && __p();
      var c = new a(),
        d = !0;
      b('Arbiter').subscribe(b('BigPipe').Events.init, function (e, f) {
        __p && __p();
        var i = d ? c : new a();
        d && (h = f.lid);
        d = !1;
        i.setServerLID(f.lid);
        e = f.arbiter;
        e.subscribe(b('BigPipe').Events.tti, function (a, b) {
          a = b.ts;
          i.setTTI(a);
        });
        e.subscribe(b('PageEvents').AJAXPIPE_SEND, function (a, b) {
          a = b.ts;
          i.setRequestStart(a);
        });
        e.subscribe(b('PageEvents').AJAXPIPE_ONLOAD, function (a, b) {
          a = b.ts;
          i.setE2E(a).doneNavigation();
        });
        e.subscribe(b('BigPipe').Events.displayed, function (a, b) {
          a = b.ts;
          i.setDisplayDone(a);
        });
        e.subscribe(b('BigPipe').Events.loaded, function (a, b) {
          a = b.ts;
          i.setAllPageletsLoaded(a);
        });
        g && (i.visualPerformance = new g(e));
      });
      b('Arbiter').subscribe(b('PageEvents').BIGPIPE_ONLOAD, function (a, e) {
        a = e.ts;
        d = !1;
        c.setRequestStart(
          b('performance').timing && b('performance').timing.navigationStart
        )
          .setE2E(a)
          .doneNavigation();
      });
    });
    e.exports = b('NavigationMetricsCore');
  },
  null
);
__d(
  'TimeSliceInteractionPageStatsHook',
  ['NavigationMetrics'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = [];
    b('NavigationMetrics').addRetroactiveListener(
      b('NavigationMetrics').Events.NAVIGATION_DONE,
      function (a, b) {
        if (b.pageType !== 'normal') return;
        g = {
          start: b.start,
          dd: b.all_pagelets_displayed,
          tti: b.tti,
          e2e: b.e2e,
        };
        for (var a = 0; a < h.length; a++) {
          b = h[a];
          i(b);
          b.countDown();
        }
        h = [];
      }
    );
    function i(a) {
      g
        ? (a.trace().addStringAnnotation('page_start', '' + g.start),
          a.trace().addStringAnnotation('page_tti', '' + g.tti),
          a.trace().addStringAnnotation('page_dd', '' + g.dd),
          a.trace().addStringAnnotation('page_e2e', '' + g.e2e))
        : (a.countUp(), h.push(a));
    }
    a = {
      registerInteraction: function (a) {
        i(a);
        return {
          remove: function () {
            var b = h.indexOf(a);
            b !== -1 && h.splice(b, 1);
          },
        };
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'TimeSliceInteractionResourcesDataSource',
  ['SiteData', 'TimeSliceInteractionExtraSaver'],
  function (a, b, c, d, e, f) {
    a = {
      registerInteraction: function (a) {
        a.countDown(),
          a.registerOnBeforeFinish(function (a) {
            a.recordWithExtraSaver(
              b('TimeSliceInteractionExtraSaver').RESOURCES_SAVER,
              'info',
              {
                client_revision: b('SiteData').client_revision,
                pkg_cohort: b('SiteData').pkg_cohort,
              }
            );
          });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'BrowserEventBasedInteraction',
  [
    'Bootloader',
    'FBLogger',
    'PageDOMMutationObserver',
    'TimeSliceAutoclosedInteraction',
    'TimeSliceInteractionCancelHook',
    'TimeSliceInteractionEventHook',
    'TimeSliceInteractionLeaveHook',
    'TimeSliceInteractionPageStatsHook',
    'TimeSliceInteractionResourcesDataSource',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = [
        b('TimeSliceInteractionCancelHook'),
        b('TimeSliceInteractionEventHook'),
        b('TimeSliceInteractionLeaveHook'),
        b('TimeSliceInteractionPageStatsHook'),
      ];
    a = babelHelpers.inherits(i, b('TimeSliceAutoclosedInteraction'));
    g = a && a.prototype;
    function i(a, c, d) {
      __p && __p();
      g.constructor.call(this, 'Event', [
        b('TimeSliceInteractionResourcesDataSource'),
      ]);
      this.$BrowserEventBasedInteraction2 = [];
      this.$BrowserEventBasedInteraction4 = null;
      this.$BrowserEventBasedInteraction5 = null;
      this.$BrowserEventBasedInteraction6 = null;
      this.$BrowserEventBasedInteraction7 = 0;
      this.$BrowserEventBasedInteraction8 = 0;
      this.$BrowserEventBasedInteraction1 = c;
      [].push.apply(this.$BrowserEventBasedInteraction2, a);
      this.setExtraSampleRate(d);
      var e = h.map(
        function (a) {
          a.registerInteraction(this);
        }.bind(this)
      );
      this.registerOnCleanUp(function () {
        e.forEach(function (a) {
          return a && a.remove();
        });
      });
      this.registerOnBeforeSend(
        function () {
          this.trace().addVectorAnnotation(
            'interaction_ids',
            this.$BrowserEventBasedInteraction2
          );
        }.bind(this)
      );
      this.trace().addStringAnnotation(
        'is_mutation_observer_supported',
        b('PageDOMMutationObserver').isSupported() ? '1' : '0'
      );
    }
    i.prototype.getEventType = function () {
      return this.$BrowserEventBasedInteraction1;
    };
    i.prototype.tagAsInteractionID = function (a) {
      this.$BrowserEventBasedInteraction2.push(a);
    };
    i.prototype.hasInteractionIDs = function (a) {
      __p && __p();
      for (
        var a = a,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        if (!this.$BrowserEventBasedInteraction2.includes(d)) return !1;
      }
      return !0;
    };
    i.prototype.addEagerExecution = function (a, b, c) {
      this.waitForReferenceCounter(a),
        this.addProfilingCounterAttribution(b),
        [].push.apply(this.$BrowserEventBasedInteraction2, c);
    };
    i.prototype.setManualStartAndEnd = function (a, b, c, d) {
      this.$BrowserEventBasedInteraction7++,
        this.$BrowserEventBasedInteraction8++,
        (this.$BrowserEventBasedInteraction3 = a),
        (this.$BrowserEventBasedInteraction4 = b),
        (this.$BrowserEventBasedInteraction5 = c),
        (this.$BrowserEventBasedInteraction6 = d),
        this.isEnabled()
          ? this.addManualInstrumentationData()
          : d || this.logManualInstrumentationData();
    };
    i.prototype.markManualStart = function (a, c) {
      this.$BrowserEventBasedInteraction7++,
        this.$BrowserEventBasedInteraction4 ||
          ((this.$BrowserEventBasedInteraction4 =
            c || b('performanceAbsoluteNow')()),
          (this.$BrowserEventBasedInteraction3 = a),
          this.isEnabled() &&
            (this.countUp(),
            this.registerOnBeforeFinish(
              function () {
                this.addManualInstrumentationData();
              }.bind(this)
            )));
    };
    i.prototype.markManualEnd = function (a) {
      if (!this.$BrowserEventBasedInteraction4) {
        b('FBLogger')('event_profiler').warn(
          'Attempting to mark end for interaction which never had start marked'
        );
        return;
      }
      this.$BrowserEventBasedInteraction8++;
      this.$BrowserEventBasedInteraction5 = a || b('performanceAbsoluteNow')();
      this.$BrowserEventBasedInteraction6 =
        this.hasActiveReferenceCountingHandle();
      !this.isEnabled() && !this.$BrowserEventBasedInteraction6
        ? this.logManualInstrumentationData()
        : this.isEnabled() &&
          this.$BrowserEventBasedInteraction8 === 1 &&
          this.countDown();
    };
    i.prototype.getManualInstrumentationData = function () {
      var a = {};
      this.$BrowserEventBasedInteraction4 &&
        this.$BrowserEventBasedInteraction3 &&
        ((a.manual_instrumentation_start =
          '' + this.$BrowserEventBasedInteraction4),
        (a.manual_instrumentation_marked_start_count =
          '' + this.$BrowserEventBasedInteraction7),
        (a.manual_instrumentation_start_reference_counted = '1'));
      this.$BrowserEventBasedInteraction5 &&
        ((a.manual_instrumentation_end =
          '' + this.$BrowserEventBasedInteraction5),
        (a.manual_instrumentation_marked_end_count =
          '' + this.$BrowserEventBasedInteraction8),
        (a.manual_instrumentation_end_reference_counted = this
          .$BrowserEventBasedInteraction6
          ? '1'
          : '0'));
      this.$BrowserEventBasedInteraction4 &&
        this.$BrowserEventBasedInteraction5 &&
        (a.manual_instrumentation_duration =
          '' +
          (this.$BrowserEventBasedInteraction5 -
            this.$BrowserEventBasedInteraction4));
      return a;
    };
    i.prototype.addManualInstrumentationData = function () {
      var a = this.getManualInstrumentationData();
      Object.keys(a).forEach(
        function (b) {
          this.trace().addStringAnnotation(b, a[b]);
        }.bind(this)
      );
      this.trace().addVectorAnnotation(
        'manual_instrumentation_interaction_ids',
        this.$BrowserEventBasedInteraction3 || []
      );
      a.manual_instrumentation_start &&
        this.inform('manual_instrumentation_start', {
          ts: parseFloat(a.manual_instrumentation_start),
        }).addStringAnnotation('visual_role', 'global_signpost');
      a.manual_instrumentation_end &&
        this.inform('manual_instrumentation_end', {
          ts: parseFloat(a.manual_instrumentation_end),
        }).addStringAnnotation('visual_role', 'global_signpost');
    };
    i.prototype.logManualInstrumentationData = function () {
      var a = this.$BrowserEventBasedInteraction3 || [],
        c = this.getManualInstrumentationData();
      c.lite_weight = '1';
      b('Bootloader').loadModules(
        ['TimeSliceInteractionsLiteTypedLogger', 'PerfXSharedFields'],
        function (b, d) {
          new b()
            .setActionName('Event')
            .setTraceAnnotations({
              stringProps: c,
              setProps: {},
              vectorProps: {
                manual_instrumentation_interaction_ids: a,
                interaction_ids: this.$BrowserEventBasedInteraction2,
              },
            })
            .updateData(d.getCommonData())
            .logVital();
        }.bind(this),
        'BrowserEventBasedInteraction'
      );
    };
    i.prototype.getActiveBrowserEventBasedInteractions = function () {
      return b('TimeSliceAutoclosedInteraction')
        .getInteractionsActiveRightNow()
        .filter(function (a) {
          return a instanceof i;
        });
    };
    e.exports = i;
  },
  null
);
__d(
  'EventProfilerAdsSessionProvider',
  ['AdsInterfacesSessionConfig'],
  function (a, b, c, d, e, f) {
    e.exports = { sessionID: b('AdsInterfacesSessionConfig').sessionID };
  },
  null
);
__d(
  'EventProfilerEagerExecution',
  [
    'EventConfig',
    'FBLogger',
    'ProfilingCounters',
    'TimeSliceReferenceCounting',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 0,
      h = {},
      i = 0,
      j = {};
    function k(a, c, d) {
      __p && __p();
      this.interaction = null;
      this.$2 = [];
      this.$3 = [];
      this.$4 = [];
      this.$5 = [];
      this.id = i++;
      this.$6 = a;
      for (var d = 0; d < a.length; d++)
        j[a[d]] &&
          b('FBLogger')('event_profiler')
            .blameToPreviousDirectory()
            .mustfix(
              'Declaring multiple eager executions for the same interaction not supported: %s',
              a[d]
            ),
          (j[a[d]] = this);
      d = 'eagerly_executed_tree_' + ++g;
      b('EventConfig').profile_eager_execution &&
        ((this.handle = b('TimeSliceReferenceCounting').onAllChildrenFinished(
          function () {
            this.finish();
          }.bind(this),
          c !== 0
        )),
        c &&
          b('ProfilingCounters')
            .currentContext()
            .addAttribution(
              d,
              b('ProfilingCounters').AttributionPropagation
                .ONLY_ON_CONTINUATIONS
            ));
      this.sampleWeight = c;
      this.$1 = d;
      h[this.id] = this;
    }
    k.prototype.hasInteractionIDs = function (a) {
      __p && __p();
      for (
        var a = a,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        if (!this.$6.includes(d)) return !1;
      }
      return !0;
    };
    k.prototype.__registerInteractionWePotentiallyEagerlyExecutedFor =
      function (a) {
        this.$2.push(a);
      };
    k.prototype.attributeToCurrentlyActiveInteraction = function () {
      __p && __p();
      var a = this,
        b = this.handle;
      if (!b) return;
      var c = function () {
        __p && __p();
        if (e) {
          if (f >= d.length) return 'break';
          g = d[f++];
        } else {
          f = d.next();
          if (f.done) return 'break';
          g = f.value;
        }
        var c = g;
        if (c.hasActiveReferenceCountingHandle()) {
          c.addEagerExecution(b, a.$1, a.$3.slice());
          a.interaction = c;
          a.$4.forEach(function (a) {
            return a(c);
          });
          a.$4 = [];
          return 'break';
        }
      };
      for (
        var d = this.$2,
          e = Array.isArray(d),
          f = 0,
          d = e
            ? d
            : d[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var g,
          h = c();
        if (h === 'break') break;
      }
    };
    k.prototype.tagAsInteractionID = function (a) {
      this.$3.push(a);
    };
    k.prototype.withInteraction = function (a) {
      !this.interaction ? this.$4.push(a) : a(this.interaction);
    };
    k.prototype.isActive = function () {
      return !!(this.handle && this.handle.isInsideContinuationExecution());
    };
    k.prototype.onFinish = function (a) {
      this.$5.push(a);
    };
    k.prototype.finish = function () {
      delete h[this.id],
        this.$5.forEach(function (a) {
          return a();
        }),
        (this.$5 = []);
    };
    a = {
      declareEagerExecution: function (a, b, c) {
        a = new k(a, c, b);
        var d = a.id;
        return function () {
          h[d] && h[d].attributeToCurrentlyActiveInteraction();
        };
      },
      getEagerExecution: function (a, b) {
        var c = a
          .map(function (a) {
            return j[a];
          })
          .filter(function (b) {
            return b && b.hasInteractionIDs(a);
          });
        b = c.filter(function (a, b) {
          return b === c.indexOf(a);
        });
        return b.length == 1 ? b[0] : null;
      },
      getActiveExecutions: function () {
        return Object.values(h).filter(function (a) {
          return a.handle && a.handle.isInsideContinuationExecution();
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'EventProfilerInteractionTracker',
  [
    'Bootloader',
    'BrowserEventBasedInteraction',
    'EventProfilerEagerExecution',
    'EventConfig',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [],
      h =
        b('EventConfig').profile_eager_execution &&
        b('EventConfig').manual_instrumentation;
    a = {
      createNewInteraction: function (a, c, d, e) {
        __p && __p();
        if (!a.length) return null;
        var f = (e && e.sampleWeight) || 0,
          i;
        (h || d || f) &&
          (i = new (b('BrowserEventBasedInteraction'))(a, c, 1 / (f || d)));
        if (i && e) {
          var j = e;
          j.__registerInteractionWePotentiallyEagerlyExecutedFor(i);
          i.registerOnBeforeSend(function () {
            i &&
              i !== j.interaction &&
              (d ? i.setExtraSampleRate(1 / d) : i.disable());
          });
        }
        if (i) {
          var k = i;
          g.push(i);
          i.onReferenceCountedExecutionFinished(function () {
            var a = g.indexOf(k);
            a !== -1 && g.splice(a, 1);
          });
        }
        f === 0 && d === 0 && i && i.disable();
        return d === 0 ? null : i;
      },
      markManualStart: function (a, c, d) {
        __p && __p();
        if (!h) return { markManualEnd: function () {} };
        var e = g.filter(function (b) {
            return b.hasInteractionIDs(a) && b.getEventType() === c;
          }),
          f = b('EventProfilerEagerExecution').getActiveExecutions();
        if (e.length === 1) return i(e[0], a, d);
        else if (f.length === 1) return l(f[0], a, d);
        else {
          e.forEach(function (a) {
            a.trace().addStringAnnotation(
              'has_manual_instrumentation_conflict',
              '1'
            );
          });
          return j(a, e.length + f.length, d);
        }
      },
    };
    function i(a, b, c) {
      a.markManualStart(b, c);
      return {
        markManualEnd: function (b) {
          a.markManualEnd(b);
        },
      };
    }
    function j(a, c, d) {
      var e = d || b('performanceAbsoluteNow')();
      return {
        markManualEnd: function (d) {
          d = d || b('performanceAbsoluteNow')();
          k(e, d, a, c);
        },
      };
    }
    function k(a, c, d, e) {
      var f = {
        manual_instrumentation_start: '' + a,
        manual_instrumentation_end: '' + c,
        manual_instrumentation_duration: '' + (c - a),
        manual_instrumentation_start_reference_counted: '0',
        manual_instrumentation_end_reference_counted: '0',
        lite_weight: '1',
      };
      e && (f.manual_instrumentation_conflicts = '' + e);
      b('Bootloader').loadModules(
        ['TimeSliceInteractionsLiteTypedLogger', 'PerfXSharedFields'],
        function (a, b) {
          new a()
            .setActionName('Event')
            .setTraceAnnotations({
              stringProps: f,
              setProps: {},
              vectorProps: { manual_instrumentation_interaction_ids: d },
            })
            .updateData(b.getCommonData())
            .logVital();
        },
        'EventProfilerInteractionTracker'
      );
    }
    function l(a, c, d) {
      __p && __p();
      var e = d || b('performanceAbsoluteNow')(),
        f,
        g,
        h,
        i = !1;
      function j() {
        f &&
          g !== undefined &&
          !i &&
          h !== undefined &&
          ((i = !0), g ? g.setManualStartAndEnd(c, e, f, h) : k(e, f, c));
      }
      var l;
      a.withInteraction(function (a) {
        (l = a),
          a.onReferenceCountedExecutionFinished(function () {
            a.hasInteractionIDs(c) ? (g = a) : (g = null), j();
          });
      });
      a.onFinish(function () {
        l || ((g = !1), j());
      });
      return {
        markManualEnd: function (c) {
          if (f) return;
          h = a.isActive() || (l && l.hasActiveReferenceCountingHandle()) || !1;
          f = c || b('performanceAbsoluteNow')();
          j();
        },
      };
    }
    e.exports = a;
  },
  null
);
__d(
  'EventProfilerSampler',
  ['EventConfig'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('EventConfig').interaction_boost,
      h = b('EventConfig').event_types,
      i = b('EventConfig').sampling || {},
      j = b('EventConfig').page_sampling_boost || 1,
      k = [];
    Object.keys(b('EventConfig').interaction_regexes).forEach(function (a) {
      k.push({
        id: a,
        regex: new RegExp(b('EventConfig').interaction_regexes[a]),
      });
    });
    a = 'click';
    c = 'mouseup';
    var l = [a, c],
      m = a;
    d = {
      canSample: function (a) {
        return !!i[a];
      },
      getEventSampleWeights: function (event, a) {
        event.__samplingWeights == undefined &&
          (event.__samplingWeights = {
            interaction: n(this.getInteractionWeight(event, a)),
            event: n(this.getEventWeight(event)),
          });
        return event.__samplingWeights;
      },
      getInteractionWeight: function (event, a) {
        __p && __p();
        var b = event.type in i ? i[event.type] : 1;
        if (!b || !a || !a.length) return 0;
        var c = 1;
        for (
          var a = a,
            d = Array.isArray(a),
            e = 0,
            a = d
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= a.length) break;
            f = a[e++];
          } else {
            e = a.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          if (g[f]) {
            c = g[f];
            break;
          }
        }
        return (b * i.__interactionDefault) / c;
      },
      getEventWeight: function (event) {
        var a = event.type in i ? i[event.type] : 1;
        a /= j;
        return a * i.__eventDefault;
      },
      getEventInteractionIDs: function (a, b) {
        __p && __p();
        if (l.indexOf(a) === -1) return [];
        var c = [];
        for (
          var b = b,
            d = Array.isArray(b),
            e = 0,
            b = d
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= b.length) break;
            f = b[e++];
          } else {
            e = b.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          for (var g = 0; g < k.length; g++) {
            var i = k[g];
            if (i.regex.test(f)) {
              var j = h[i.id];
              if (j) {
                if (j.indexOf(a) === -1) continue;
              } else if (a !== m) continue;
              c.push(i.id);
            }
          }
        }
        return c;
      },
    };
    function n(a) {
      if (a === 0) return 0;
      var b = i.__min || 1;
      a = Math.round(Math.max(b, a));
      return Math.random() * a < 1 ? a : 0;
    }
    e.exports = d;
  },
  null
);
__d(
  'SubscriptionList',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a, b) {
      (this.$1 = []), (this.$2 = a), (this.$3 = b);
    }
    a.prototype.add = function (a) {
      var b = { callback: a };
      this.$1.push(b);
      this.$2 && this.$1.length === 1 && this.$2();
      return {
        remove: function () {
          var a = this.$1.indexOf(b);
          a !== -1 || g(0, undefined);
          this.$1.splice(a, 1);
          this.$3 && this.$1.length === 0 && this.$3();
        }.bind(this),
      };
    };
    a.prototype.getCallbacks = function () {
      return this.$1.map(function (a) {
        return a.callback;
      });
    };
    a.prototype.fireCallbacks = function (a) {
      this.getCallbacks().forEach(function (b) {
        b(a);
      });
    };
    e.exports = a;
  },
  null
);
__d(
  'TimeSpentPageTransitionCause',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      PAGE_LOAD: 'load',
      PAGE_UNLOAD: 'unload',
      TRANSITION: 'transition',
      OPEN_OVERLAY_VIEW: 'open_overlay_view',
      REPLACE_OVERLAY_VIEW: 'replace_overlay_view',
      CLOSE_OVERLAY_VIEW: 'close_overlay_view',
    });
  },
  null
);
__d(
  'WebStorage',
  ['FBLogger', 'ex'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {},
      h = {};
    function i(a, b, c) {
      Object.prototype.hasOwnProperty.call(g, c) || (g[c] = b(c));
      return g[c];
    }
    function j(a) {
      try {
        return window[a];
      } catch (a) {
        b('FBLogger')('web_storage').warn(
          'Failed to get storage for read %s',
          a.message
        );
      }
      return null;
    }
    function k(a) {
      __p && __p();
      try {
        a = window[a];
        if (a) {
          var c = '__test__' + Date.now();
          a.setItem(c, '');
          a.removeItem(c);
        }
        return a;
      } catch (a) {
        b('FBLogger')('web_storage').warn(
          'Failed to get storage %s',
          a.message
        );
      }
      return null;
    }
    function l(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) b.push(a.key(c) || '');
      return b;
    }
    function a(a, c, d) {
      __p && __p();
      if (a == null) return new Error('storage cannot be null');
      var e = null;
      try {
        a.setItem(c, d);
      } catch (g) {
        var f = l(a).map(function (b) {
          var c = (a.getItem(b) || '').length;
          return b + '(' + c + ')';
        });
        e = new Error(
          b('ex')(
            '%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s',
            g.name ? g.name + ': ' : '',
            c,
            d.length,
            f.join()
          )
        );
        b('FBLogger')('web_storage').catching(e).mustfix('Error set item');
      }
      return e;
    }
    c = {
      getLocalStorage: function () {
        return i(g, k, 'localStorage');
      },
      getSessionStorage: function () {
        return i(g, k, 'sessionStorage');
      },
      getLocalStorageForRead: function () {
        return i(h, j, 'localStorage');
      },
      getSessionStorageForRead: function () {
        return i(h, j, 'sessionStorage');
      },
      setItemGuarded: a,
    };
    e.exports = c;
  },
  null
);
__d(
  'isInIframe',
  [],
  function (a, b, c, d, e, f) {
    var g = window != window.top;
    function a() {
      return g;
    }
    e.exports = a;
  },
  null
);
__d(
  'ScriptPath',
  [
    'ErrorUtils',
    'SubscriptionList',
    'TimeSlice',
    'TimeSpentPageTransitionCause',
    'WebStorage',
    'isInIframe',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'sp_pi',
      h = 1e3 * 30,
      i = null,
      j = null,
      k = new (b('SubscriptionList'))(),
      l = null,
      m = [],
      n = b('TimeSlice').guard(
        function (a, c) {
          k.getCallbacks().forEach(function (d) {
            b('ErrorUtils').applyWithGuard(function () {
              d({ source: i, dest: j, cause: a, extraData: c });
            });
          });
        },
        'ScriptPath Notifying callbacks',
        { propagationType: b('TimeSlice').PropagationType.ORPHAN }
      );
    function o() {
      return j ? j.scriptPath : undefined;
    }
    function p() {
      var a = b('WebStorage').getSessionStorage();
      if (!a || b('isInIframe')()) return;
      a.setItem(
        g,
        JSON.stringify({ pageInfo: j, clickPoint: l, time: Date.now() })
      );
    }
    function a() {
      var a = b('WebStorage').getSessionStorageForRead();
      if (!a) return;
      var c = a.getItem(g);
      if (c) {
        c = JSON.parse(c);
        c &&
          (c.time < Date.now() - h &&
            ((a = b('WebStorage').getSessionStorage()), a && a.removeItem(g)),
          (j = c.pageInfo),
          (l = c.clickPoint),
          j && (j.restored = !0));
      }
    }
    a();
    c = {
      set: function (a, b, c) {
        (i = j),
          (j = { scriptPath: a, categoryToken: b, extraData: c || {} }),
          (m = []),
          (window._script_path = a),
          n();
      },
      openOverlayView: function (a, c, d) {
        if (!a) return;
        var e = m.length;
        (e === 0 || m[e - 1] !== a) &&
          ((i = Object.assign({}, j)),
          j && (j.topViewEndpoint = a),
          d && d.replaceTopOverlay && e > 0
            ? ((m[e - 1] = a),
              n(b('TimeSpentPageTransitionCause').REPLACE_OVERLAY_VIEW, c))
            : (m.push(a),
              n(b('TimeSpentPageTransitionCause').OPEN_OVERLAY_VIEW, c)));
      },
      closeOverlayView: function (a, c) {
        a = m.lastIndexOf(a);
        if (a === -1) return;
        i = Object.assign({}, j);
        j &&
          (a > 0 ? (j.topViewEndpoint = m[a - 1]) : (j.topViewEndpoint = null));
        m = m.slice(0, a);
        n(b('TimeSpentPageTransitionCause').CLOSE_OVERLAY_VIEW, c);
      },
      setClickPointInfo: function (a) {
        (l = a), p();
      },
      getClickPointInfo: function () {
        return l;
      },
      getScriptPath: o,
      getCategoryToken: function () {
        return j ? j.categoryToken : undefined;
      },
      getEarlyFlushPage: function () {
        var a;
        return (a = j) == null
          ? void 0
          : (a = a.extraData) == null
          ? void 0
          : a.ef_page;
      },
      getTopViewEndpoint: function () {
        var a = m.length;
        return a > 0 ? m[a - 1] : o();
      },
      getPageInfo: function () {
        return j;
      },
      getSourcePageInfo: function () {
        return i;
      },
      subscribe: function (a) {
        return k.add(b('TimeSlice').guard(a, 'ScriptPath.subscribe'));
      },
      shutdown: function () {
        p();
      },
    };
    e.exports = c;
  },
  null
);
__d(
  'VersionRange',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = /\./,
      i = /\|\|/,
      j = /\s+\-\s+/,
      k = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
      l = /^(\d*)(.*)/;
    function m(a, b) {
      var c = a.split(i);
      if (c.length > 1)
        return c.some(function (a) {
          return D.contains(a, b);
        });
      else {
        a = c[0].trim();
        return n(a, b);
      }
    }
    function n(a, b) {
      a = a.split(j);
      (a.length > 0 && a.length <= 2) || g(0, undefined);
      if (a.length === 1) return o(a[0], b);
      else {
        var c = a[0];
        a = a[1];
        (x(c) && x(a)) || g(0, undefined);
        return o('>=' + c, b) && o('<=' + a, b);
      }
    }
    function o(a, b) {
      __p && __p();
      a = a.trim();
      if (a === '') return !0;
      b = b.split(h);
      a = v(a);
      var c = a.modifier;
      a = a.rangeComponents;
      switch (c) {
        case '<':
          return p(b, a);
        case '<=':
          return q(b, a);
        case '>=':
          return s(b, a);
        case '>':
          return t(b, a);
        case '~':
        case '~>':
          return u(b, a);
        default:
          return r(b, a);
      }
    }
    function p(a, b) {
      return C(a, b) === -1;
    }
    function q(a, b) {
      a = C(a, b);
      return a === -1 || a === 0;
    }
    function r(a, b) {
      return C(a, b) === 0;
    }
    function s(a, b) {
      a = C(a, b);
      return a === 1 || a === 0;
    }
    function t(a, b) {
      return C(a, b) === 1;
    }
    function u(a, b) {
      var c = b.slice();
      b = b.slice();
      b.length > 1 && b.pop();
      var d = b.length - 1,
        e = parseInt(b[d], 10);
      w(e) && (b[d] = e + 1 + '');
      return s(a, c) && p(a, b);
    }
    function v(a) {
      a = a.split(h);
      var b = a[0].match(k);
      b || g(0, undefined);
      return { modifier: b[1], rangeComponents: [b[2]].concat(a.slice(1)) };
    }
    function w(a) {
      return !isNaN(a) && isFinite(a);
    }
    function x(a) {
      return !v(a).modifier;
    }
    function y(a, b) {
      for (var c = a.length; c < b; c++) a[c] = '0';
    }
    function z(a, b) {
      __p && __p();
      a = a.slice();
      b = b.slice();
      y(a, b.length);
      for (var c = 0; c < b.length; c++) {
        var d = b[c].match(/^[x*]$/i);
        if (d) {
          b[c] = a[c] = '0';
          if (d[0] === '*' && c === b.length - 1)
            for (var d = c; d < a.length; d++) a[d] = '0';
        }
      }
      y(b, a.length);
      return [a, b];
    }
    function A(a, b) {
      var c = a.match(l)[1],
        d = b.match(l)[1];
      c = parseInt(c, 10);
      d = parseInt(d, 10);
      if (w(c) && w(d) && c !== d) return B(c, d);
      else return B(a, b);
    }
    function B(a, b) {
      typeof a === typeof b || g(0, undefined);
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    }
    function C(a, b) {
      a = z(a, b);
      b = a[0];
      a = a[1];
      for (var c = 0; c < a.length; c++) {
        var d = A(b[c], a[c]);
        if (d) return d;
      }
      return 0;
    }
    var D = {
      contains: function (a, b) {
        return m(a.trim(), b.trim());
      },
    };
    e.exports = D;
  },
  null
);
__d(
  'mapObject',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = Object.prototype.hasOwnProperty;
    function h(a, b, c) {
      if (!a) return null;
      var d = {};
      for (var e in a) {
        var f = e;
        g.call(a, f) && (d[f] = b.call(c, a[f], f, a));
      }
      return d;
    }
    function a(a, b, c) {
      return h(a, b, c);
    }
    function b(a, b, c) {
      return h(a, b, c);
    }
    h.untyped = a;
    h.shape = b;
    e.exports = h;
  },
  null
);
__d(
  'memoizeStringOnly',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = {};
      return function (c) {
        Object.prototype.hasOwnProperty.call(b, c) || (b[c] = a.call(this, c));
        return b[c];
      };
    }
    e.exports = a;
  },
  null
);
__d(
  'UserAgent',
  ['UserAgentData', 'VersionRange', 'mapObject', 'memoizeStringOnly'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, c, d, e) {
      __p && __p();
      if (a === d) return !0;
      if (!d.startsWith(a)) return !1;
      d = d.slice(a.length);
      if (c) {
        d = e ? e(d) : d;
        return b('VersionRange').contains(d, c);
      }
      return !1;
    }
    function h(a) {
      return b('UserAgentData').platformName === 'Windows'
        ? a.replace(/^\s*NT/, '')
        : a;
    }
    a = {
      isBrowser: function (a) {
        return g(
          b('UserAgentData').browserName,
          b('UserAgentData').browserFullVersion,
          a
        );
      },
      isBrowserArchitecture: function (a) {
        return g(b('UserAgentData').browserArchitecture, null, a);
      },
      isDevice: function (a) {
        return g(b('UserAgentData').deviceName, null, a);
      },
      isEngine: function (a) {
        return g(
          b('UserAgentData').engineName,
          b('UserAgentData').engineVersion,
          a
        );
      },
      isPlatform: function (a) {
        return g(
          b('UserAgentData').platformName,
          b('UserAgentData').platformFullVersion,
          a,
          h
        );
      },
      isPlatformArchitecture: function (a) {
        return g(b('UserAgentData').platformArchitecture, null, a);
      },
    };
    e.exports = b('mapObject')(a, b('memoizeStringOnly'));
  },
  null
);
__d(
  'cx',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error('cx: Unexpected class transformation.');
    }
    e.exports = a;
  },
  null
);
__d(
  'getParentClassesForEventProfiler',
  ['cx'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a) {
      __p && __p();
      if (!a || !(a instanceof HTMLElement)) return '';
      var b = a.id,
        c = a.nodeName,
        d = a.getAttribute('class');
      c = c ? c.replace(/^#/, '') : 'unknown';
      b = b ? '#' + b : '';
      d = d ? ' ' + d.replace(/\s+/g, ' ').trim() : '';
      if (a.getAttribute('rel') === 'theater') {
        a = '_342u';
        d = d.length ? d + ' ' + a : a;
      }
      return ':' + c + b + d;
    }
    function a(a) {
      var b = [];
      while (a && a instanceof HTMLElement) b.push(h(a)), (a = a.parentElement);
      b.reverse();
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  'EventProfiler',
  [
    'Arbiter',
    'Bootloader',
    'BrowserEventBasedInteraction',
    'CurrentEventMeta',
    'EventConfig',
    'EventProfilerAdsSessionProvider',
    'EventProfilerEagerExecution',
    'EventProfilerInteractionTracker',
    'EventProfilerSampler',
    'Parent',
    'ScriptPath',
    'TimeSlice',
    'TimeSliceAutoclosedInteraction',
    'UserAgent',
    'getParentClassesForEventProfiler',
    'performanceAbsoluteNow',
    'requestAnimationFrameAcrossTransitions',
    'setTimeoutAcrossTransitions',
    'uniqueID',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {},
      h = {},
      i = {},
      j = !0,
      k = new Set(['click', 'keydown', 'mousewheel', 'scroll']),
      l = null,
      m = null,
      n = function (a, b) {},
      o = null,
      p = null,
      q = !1;
    b('Arbiter').subscribe('perf_nub_interaction_trace', function (a, b) {
      q = !0;
    });
    var r = {
      __wrapEventListenHandler: function (a) {
        __p && __p();
        return b('EventConfig').disable_event_profiler
          ? a
          : function (c, event) {
              __p && __p();
              if (!b('EventProfilerSampler').canSample(c))
                return a.call(this, c, event);
              var d,
                e = { interaction: 0, event: 0 },
                f = b('performanceAbsoluteNow')();
              event.id = event.id || b('uniqueID')();
              var p = event.id;
              b('CurrentEventMeta').__setCurrentEventID(p);
              var r = i[p],
                v = null;
              if (h[p] === undefined && !r) {
                v = b('getParentClassesForEventProfiler')(event.target);
                var w = b('EventProfilerSampler').getEventInteractionIDs(c, v);
                d = b('EventProfilerEagerExecution').getEagerExecution(w, c);
                q && c === 'click'
                  ? (w.push('PerfNubTrace'),
                    (e = { interaction: 1, event: 1 }),
                    (q = !1))
                  : (e = b('EventProfilerSampler').getEventSampleWeights(
                      event,
                      w
                    ));
                l = b('EventProfilerInteractionTracker').createNewInteraction(
                  w,
                  c,
                  e.interaction,
                  d
                );
                w = a.call(this, c, event);
                i[p] = b('TimeSlice').getGuardedContinuation(
                  'Event Bubble Continuation'
                );
              } else
                (e = b('EventProfilerSampler').getEventSampleWeights(
                  event,
                  []
                )),
                  (w = r(
                    function () {
                      i[p] = b('TimeSlice').getGuardedContinuation(
                        'Event Bubble Continuation'
                      );
                      return a.call(this, c, event);
                    }.bind(this)
                  ));
              d = b('performanceAbsoluteNow')();
              if (h[p] === undefined) {
                v = v;
                r = t(event);
                r = r || f;
                var x = Math.max(f - r, 0),
                  y = u(event.target, 'data-referrer'),
                  z = null;
                b('UserAgent').isBrowser('Chrome') && (z = !!event.cancelable);
                var A =
                  z &&
                  (!!event.deliberateSync ||
                    b('UserAgent').isBrowser('Chrome < 51'));
                h[p] = {
                  event_name: c,
                  event_start_ms: Math.round(r),
                  main_thread_wait_ms: Math.round(x),
                  event_handlers_runtime_ms: 0,
                  script_path: b('ScriptPath').getScriptPath() || '<unknown>',
                  request_animation_frame_wait_ms: 0,
                  set_timeout_wait_ms: 0,
                };
                g[p] = {
                  event_target_raw: v,
                  weight: e.event,
                  cancelable: z,
                  deliberate_sync: A,
                  ad_account_id: m,
                  event_end_ms: 0,
                };
                r = b('EventProfilerAdsSessionProvider').sessionID;
                r && (g[p].ads_session_id = r);
                o != null && o(g[p]);
                k.has(c) &&
                  ((g[p].is_first_in_frame = j), (j = !1), n(c, event.target));
                if (l) {
                  x = l.trace();
                  x.addVectorAnnotation(
                    'event_target_stack',
                    v
                  ).addVectorAnnotation('pagelets', y);
                }
                var B = l;
                b('requestAnimationFrameAcrossTransitions')(function () {
                  __p && __p();
                  l = null;
                  var a = b('performanceAbsoluteNow')();
                  h[p].request_animation_frame_wait_ms = Math.round(
                    a - g[p].event_end_ms
                  );
                  delete g[p].event_end_ms;
                  b('setTimeoutAcrossTransitions')(function () {
                    __p && __p();
                    b('setTimeoutAcrossTransitions')(function () {
                      j = !0;
                    }, 50);
                    var c = b('performanceAbsoluteNow')();
                    h[p].set_timeout_wait_ms = Math.round(c - a);
                    s(p, f, c);
                    c = i[p];
                    c && (b('TimeSlice').cancel(c), delete i[p]);
                    B && B.inform('TTI', { isPointOfInterest: !0 });
                    delete h[p];
                    delete g[p];
                  }, 0);
                });
              }
              h[p].event_handlers_runtime_ms += d - f;
              g[p].event_end_ms = d;
              b('CurrentEventMeta').__setCurrentEventID(null);
              l &&
                l.informPointWithOverride('tti_ts', { isPointOfInterest: !0 });
              return w;
            };
      },
      tagCurrentActiveInteractionsAs: function (a) {
        r.getActiveInteractions().forEach(function (b) {
          b.tagAsInteractionID(a);
        }),
          b('EventProfilerEagerExecution')
            .getActiveExecutions()
            .forEach(function (b) {
              return b.tagAsInteractionID(a);
            });
      },
      informManualInteractionTimestamp: function (a, b, c) {},
      markManualStart: function (a, c, d) {
        return b('EventProfilerInteractionTracker').markManualStart(a, c, d);
      },
      getActiveInteractions: function () {
        return b('TimeSliceAutoclosedInteraction')
          .getInteractionsActiveRightNow()
          .filter(function (a) {
            return (
              a instanceof b('BrowserEventBasedInteraction') && a.isEnabled()
            );
          });
      },
      informPointOnActiveInteractions: function (a, b, c) {
        r.getActiveInteractions().map(function (d) {
          d = d.inform(a, b);
          c && d.addStringAnnotation('is_goal_point', '1');
        });
      },
      notifyRunningEagerInteraction: function (a, c) {
        var d = b('EventProfilerSampler').getEventSampleWeights({ type: c }, a);
        return b('EventProfilerEagerExecution').declareEagerExecution(
          a,
          c,
          d.interaction
        );
      },
      setCurrentAdAccountId: function (a) {
        m = a;
      },
      setAdsEventListener: function (a) {
        n = a;
      },
      setApplyAdsLoggingFields: function (a) {
        o = a;
      },
      setAdsLogInteraction: function (a) {
        p = a;
      },
    };
    function s(a, c, d) {
      c = h[a];
      c.event_handlers_runtime_ms = Math.round(c.event_handlers_runtime_ms);
      var e = Object.assign({}, h[a], g[a]);
      p != null && p(e);
      e.weight &&
        b('Bootloader').loadModules(
          ['WebSpeedInteractionsTypedLogger', 'PerfXSharedFields'],
          function (a, b) {
            b.addCommonValues(e), new a().updateData(e).log();
          },
          'EventProfiler'
        );
      b('CurrentEventMeta').__informEventDataReady(a, h[a]);
    }
    var t = (function () {
      function b(event) {
        return null;
      }
      if (
        !a.performance ||
        !a.performance.now ||
        !a.performance.timing ||
        !a.performance.timing.navigationStart
      )
        return b;
      var c = a.performance.timing.navigationStart,
        d =
          a.CustomEvent &&
          (typeof a.CustomEvent === 'function' ||
            a.CustomEvent.toString().indexOf('CustomEventConstructor') > -1);
      d = d
        ? new a.CustomEvent('test').timeStamp
        : a.document.createEvent('KeyboardEvent').timeStamp;
      return d && d <= a.performance.now()
        ? function (event) {
            return event.timeStamp + c;
          }
        : b;
    })();
    function u(a, c) {
      var d = [];
      while (a && a instanceof HTMLElement) {
        var e = a.getAttribute(c);
        e && d.push(e);
        a = b('Parent').byAttribute(a.parentNode, c);
      }
      return d.reverse();
    }
    e.exports = r;
  },
  null
);
__d(
  'Scroll',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b) {
      return !!b && (a === b.documentElement || a === b.body);
    }
    a = {
      getTop: function (a) {
        var b = a.ownerDocument;
        return g(a, b)
          ? b.body.scrollTop || b.documentElement.scrollTop
          : a.scrollTop;
      },
      setTop: function (a, b) {
        var c = a.ownerDocument;
        g(a, c)
          ? (c.body.scrollTop = c.documentElement.scrollTop = b)
          : (a.scrollTop = b);
      },
      getLeft: function (a) {
        var b = a.ownerDocument;
        return g(a, b)
          ? b.body.scrollLeft || b.documentElement.scrollLeft
          : a.scrollLeft;
      },
      setLeft: function (a, b) {
        var c = a.ownerDocument;
        g(a, c)
          ? (c.body.scrollLeft = c.documentElement.scrollLeft = b)
          : (a.scrollLeft = b);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'UserAgent_DEPRECATED',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = !1,
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
      u,
      v;
    function w() {
      __p && __p();
      if (g) return;
      g = !0;
      var a = navigator.userAgent,
        b =
          /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
            a
          ),
        c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
      s = /\b(iPhone|iP[ao]d)/.exec(a);
      t = /\b(iP[ao]d)/.exec(a);
      q = /Android/i.exec(a);
      u = /FBAN\/\w+;/i.exec(a);
      v = /Mobile/i.exec(a);
      r = !!/Win64/.exec(a);
      if (b) {
        h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
        h && document && document.documentMode && (h = document.documentMode);
        var d = /(?:Trident\/(\d+.\d+))/.exec(a);
        m = d ? parseFloat(d[1]) + 4 : h;
        i = b[2] ? parseFloat(b[2]) : NaN;
        j = b[3] ? parseFloat(b[3]) : NaN;
        k = b[4] ? parseFloat(b[4]) : NaN;
        k
          ? ((b = /(?:Chrome\/(\d+\.\d+))/.exec(a)),
            (l = b && b[1] ? parseFloat(b[1]) : NaN))
          : (l = NaN);
      } else h = i = j = l = k = NaN;
      if (c) {
        if (c[1]) {
          d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
          n = d ? parseFloat(d[1].replace('_', '.')) : !0;
        } else n = !1;
        o = !!c[2];
        p = !!c[3];
      } else n = o = p = !1;
    }
    var x = {
      ie: function () {
        return w() || h;
      },
      ieCompatibilityMode: function () {
        return w() || m > h;
      },
      ie64: function () {
        return x.ie() && r;
      },
      firefox: function () {
        return w() || i;
      },
      opera: function () {
        return w() || j;
      },
      webkit: function () {
        return w() || k;
      },
      safari: function () {
        return x.webkit();
      },
      chrome: function () {
        return w() || l;
      },
      windows: function () {
        return w() || o;
      },
      osx: function () {
        return w() || n;
      },
      linux: function () {
        return w() || p;
      },
      iphone: function () {
        return w() || s;
      },
      mobile: function () {
        return w() || s || t || q || v;
      },
      nativeApp: function () {
        return w() || u;
      },
      android: function () {
        return w() || q;
      },
      ipad: function () {
        return w() || t;
      },
    };
    e.exports = x;
  },
  null
);
__d(
  'clickRefAction',
  ['Arbiter'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(b, a, c, d, e) {
      var f = b + '/' + a;
      this.ue = f;
      this._ue_ts = b;
      this._ue_count = a;
      this._context = c;
      this._ns = null;
      this._node = d;
      this._type = e;
    }
    g.prototype.set_namespace = function (a) {
      this._ns = a;
      return this;
    };
    g.prototype.coalesce_namespace = function (a) {
      this._ns === null && (this._ns = a);
      return this;
    };
    g.prototype.add_event = function () {
      return this;
    };
    var h = 0,
      i = [],
      j = Date.now() + 6e4;
    function c(a, c, event, d, e) {
      __p && __p();
      var f = Date.now(),
        k = event && event.type;
      e = e || {};
      !c && event && (c = event.getTarget());
      var l = 50;
      if (c && d != 'FORCE')
        for (var m = i.length - 1; m >= 0 && f - i[m]._ue_ts < l; --m)
          if (i[m]._node == c && i[m]._type == k) return i[m];
      m = new g(f, h, a, c, k);
      i.push(m);
      while (i[0]._ue_ts + l < f || i.length > 10) i.shift();
      k = f < j ? 'persistent' : 'event';
      a == 'contextmenu'
        ? b('Arbiter').inform(
            'ClickRefAction/contextmenu',
            { cfa: m, node: c, mode: d, event: event, extra_data: e },
            k
          )
        : a == 'middleclick'
        ? b('Arbiter').inform(
            'ClickRefAction/middleclick',
            { cfa: m, node: c, mode: d, event: event, extra_data: e },
            k
          )
        : b('Arbiter').inform(
            'ClickRefAction/new',
            { cfa: m, node: c, mode: d, event: event, extra_data: e },
            k
          );
      h++;
      return m;
    }
    e.exports = a.clickRefAction = c;
  },
  null
);
__d(
  'event-form-bubbling',
  [],
  function (a, b, c, d, e, f) {
    (a.Event = a.Event || function () {}),
      (a.Event.__inlineSubmit = function (b, event) {
        var c = a.Event.__getHandler && a.Event.__getHandler(b, 'submit');
        return c && c !== b.onsubmit ? null : a.Event.__bubbleSubmit(b, event);
      }),
      (a.Event.__bubbleSubmit = function (b, event) {
        if (document.documentElement.attachEvent) {
          var c;
          while (c !== !1 && (b = b.parentNode))
            c = b.onsubmit
              ? b.onsubmit(event)
              : a.Event.__fire && a.Event.__fire(b, 'submit', event);
          return c;
        }
      });
  },
  3
);
__d(
  'getDocumentScrollElement',
  [],
  function (a, b, c, d, e, f) {
    var g =
      typeof navigator !== 'undefined' &&
      navigator.userAgent.indexOf('AppleWebKit') > -1;
    function a(a) {
      a = a || document;
      return a.scrollingElement
        ? a.scrollingElement
        : !g && a.compatMode === 'CSS1Compat'
        ? a.documentElement
        : a.body;
    }
    e.exports = a;
  },
  null
);
__d(
  'getObjectValues',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = [];
      for (var c in a) b.push(a[c]);
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  'Event',
  [
    'invariant',
    'event-form-bubbling',
    'Arbiter',
    'DataStore',
    'DOMEvent',
    'DOMEventListener',
    'DOMQuery',
    'ErrorUtils',
    'EventProfiler',
    'ExecutionEnvironment',
    'FBLogger',
    'Parent',
    'Scroll',
    'TAAL',
    'TimeSlice',
    'UserAgent',
    'UserAgent_DEPRECATED',
    '$',
    'clickRefAction',
    'dedupString',
    'getDocumentScrollElement',
    'getObjectValues',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    b('event-form-bubbling');
    var h = a.Event,
      i = 'Event.listeners';
    h.prototype || (h.prototype = {});
    function j(a) {
      (a.type === 'click' || a.type === 'mouseover' || a.type === 'keydown') &&
        b('Arbiter').inform('Event/stop', { event: a });
    }
    function k(a, b, c) {
      (this.target = a), (this.type = b), (this.data = c);
    }
    Object.assign(k.prototype, {
      getData: function () {
        this.data = this.data || {};
        return this.data;
      },
      stop: function () {
        return h.stop(this);
      },
      prevent: function () {
        return h.prevent(this);
      },
      isDefaultPrevented: function () {
        return h.isDefaultPrevented(this);
      },
      kill: function () {
        return h.kill(this);
      },
      getTarget: function () {
        return new (b('DOMEvent'))(this).target || null;
      },
    });
    function l(a) {
      if (a instanceof k) return a;
      a ||
        (!window.addEventListener && document.createEventObject
          ? (a = window.event ? document.createEventObject(window.event) : {})
          : (a = {}));
      if (!a._inherits_from_prototype)
        for (var b in h.prototype)
          try {
            a[b] = h.prototype[b];
          } catch (a) {}
      return a;
    }
    Object.assign(
      h.prototype,
      {
        _inherits_from_prototype: !0,
        getRelatedTarget: function () {
          var a =
            this.relatedTarget ||
            (this.fromElement === this.srcElement
              ? this.toElement
              : this.fromElement);
          return a && a.nodeType ? a : null;
        },
        getModifiers: function () {
          var a = {
            control: !!this.ctrlKey,
            shift: !!this.shiftKey,
            alt: !!this.altKey,
            meta: !!this.metaKey,
          };
          a.access = b('UserAgent_DEPRECATED').osx() ? a.control : a.alt;
          a.any = a.control || a.shift || a.alt || a.meta;
          return a;
        },
        isRightClick: function () {
          return this.which
            ? this.which === 3
            : this.button && this.button === 2;
        },
        isMiddleClick: function () {
          return this.which
            ? this.which === 2
            : this.button && this.button === 4;
        },
        isDefaultRequested: function () {
          return (
            this.getModifiers().any ||
            this.isMiddleClick() ||
            this.isRightClick()
          );
        },
      },
      k.prototype
    );
    Object.assign(h, {
      listen: function (a, c, d, e, f) {
        __p && __p();
        typeof d === 'function' &&
          (d = b('TimeSlice').guard(
            d,
            b('dedupString')('Event.js ' + c + ' handler')
          ));
        !f || typeof f === 'boolean'
          ? (f = { passive: !1 })
          : (f = { passive: f.passive || !1 });
        if (!b('ExecutionEnvironment').canUseDOM)
          return new t(a, d, k, c, e, l, f);
        typeof a === 'string' && (a = b('$')(a));
        typeof e === 'undefined' && (e = h.Priority.NORMAL);
        if (typeof c === 'object') {
          var g = {};
          for (var j in c) g[j] = h.listen(a, j, c[j], e, f);
          return g;
        }
        if (c.match(/^on/i))
          throw new TypeError(
            'Bad event name `' + c + "': use `click', not `onclick'."
          );
        if (!a) {
          g = new Error(
            b('TAAL').blameToPreviousFrame(
              'Cannot listen to an undefined element.'
            )
          );
          b('FBLogger')('event')
            .catching(g)
            .mustfix('Tried to listen to element of type %s', c);
          throw g;
        }
        if (a.nodeName == 'LABEL' && c == 'click') {
          g = a.getElementsByTagName('input');
          a = g.length == 1 ? g[0] : a;
        } else if (a === window && c === 'scroll') {
          g = b('getDocumentScrollElement')();
          g !== document.documentElement && g !== document.body && (a = g);
        }
        var k = b('DataStore').get(a, i, {});
        g = n[c];
        g && ((c = g.base), g.wrap && (d = g.wrap(d)));
        p(a, k, c, f);
        g = k[c];
        e in g || (g[e] = []);
        var l = g[e].length;
        d = new t(a, d, k, c, e, l, f);
        g[e][l] = d;
        g.numHandlers++;
        f.passive || (g.numNonPassiveHandlers++, o(a, k[c], c));
        return d;
      },
      stop: function (a) {
        var c = new (b('DOMEvent'))(a).stopPropagation();
        j(c.event);
        return a;
      },
      prevent: function (a) {
        new (b('DOMEvent'))(a).preventDefault();
        return a;
      },
      isDefaultPrevented: function (a) {
        return new (b('DOMEvent'))(a).isDefaultPrevented(a);
      },
      kill: function (a) {
        a = new (b('DOMEvent'))(a).kill();
        j(a.event);
        return !1;
      },
      getKeyCode: function (event) {
        __p && __p();
        event = new (b('DOMEvent'))(event).event;
        if (!event) return !1;
        switch (event.keyCode) {
          case 63232:
            return 38;
          case 63233:
            return 40;
          case 63234:
            return 37;
          case 63235:
            return 39;
          case 63272:
          case 63273:
          case 63275:
            return null;
          case 63276:
            return 33;
          case 63277:
            return 34;
        }
        if (event.shiftKey)
          switch (event.keyCode) {
            case 33:
            case 34:
            case 37:
            case 38:
            case 39:
            case 40:
              return null;
          }
        return event.keyCode;
      },
      getPriorities: function () {
        if (!m) {
          var a = b('getObjectValues')(h.Priority);
          a.sort(function (a, b) {
            return a - b;
          });
          m = a;
        }
        return m;
      },
      fire: function (a, b, c) {
        c = new k(a, b, c);
        var d;
        do {
          var e = h.__getHandler(a, b);
          e && (d = e(c));
          a = a.parentNode;
        } while (a && d !== !1 && !c.cancelBubble);
        return d !== !1;
      },
      __fire: function (a, b, event) {
        a = h.__getHandler(a, b);
        if (a) return a(l(event));
      },
      __getHandler: function (a, c) {
        var d = b('DataStore').get(a, i);
        return d && d[c] ? d[c].domHandler : a['on' + c];
      },
      getPosition: function (a) {
        a = new (b('DOMEvent'))(a).event;
        var c = b('getDocumentScrollElement')(),
          d = a.clientX + b('Scroll').getLeft(c);
        a = a.clientY + b('Scroll').getTop(c);
        return { x: d, y: a };
      },
    });
    var m = null;
    c = function (a) {
      return function (c) {
        if (!b('DOMQuery').contains(this, c.getRelatedTarget()))
          return a.call(this, c);
      };
    };
    var n;
    !window.navigator.msPointerEnabled
      ? (n = {
          mouseenter: { base: 'mouseover', wrap: c },
          mouseleave: { base: 'mouseout', wrap: c },
        })
      : (n = {
          mousedown: { base: 'MSPointerDown' },
          mousemove: { base: 'MSPointerMove' },
          mouseup: { base: 'MSPointerUp' },
          mouseover: { base: 'MSPointerOver' },
          mouseout: { base: 'MSPointerOut' },
          mouseenter: { base: 'MSPointerOver', wrap: c },
          mouseleave: { base: 'MSPointerOut', wrap: c },
        });
    if (b('UserAgent_DEPRECATED').firefox()) {
      d = function (a, event) {
        event = l(event);
        var b = event.getTarget();
        while (b) h.__fire(b, a, event), (b = b.parentNode);
      };
      document.documentElement.addEventListener(
        'focus',
        d.bind(null, 'focusin'),
        !0
      );
      document.documentElement.addEventListener(
        'blur',
        d.bind(null, 'focusout'),
        !0
      );
    }
    var o = function (a, c, d) {
        var e = c.numNonPassiveHandlers == 0;
        e != c.options.passive &&
          (c.domHandlerRemover.remove(),
          (c.options.passive = e),
          (c.domHandlerRemover = b('DOMEventListener').add(a, d, c.domHandler, {
            passive: e,
          })));
      },
      p = function (a, c, d, e) {
        __p && __p();
        if (d in c) return;
        var f = b('TimeSlice').guard(
          s.bind(a, d),
          b('dedupString')('Event listenHandler ' + d)
        );
        c[d] = {
          numHandlers: 0,
          numNonPassiveHandlers: 0,
          domHandlerRemover: b('DOMEventListener').add(a, d, f, e),
          domHandler: f,
          options: e,
        };
        c = 'on' + d;
        if (a[c]) {
          f =
            a === document.documentElement
              ? h.Priority._BUBBLE
              : h.Priority.TRADITIONAL;
          var g = a[c];
          a[c] = null;
          h.listen(a, d, g, f, e);
        }
        a.nodeName === 'FORM' &&
          d === 'submit' &&
          b('UserAgent').isBrowser('IE < 9') &&
          h.listen(a, d, h.__bubbleSubmit.bind(null, a), h.Priority._BUBBLE, e);
      };
    function q(a) {
      return !a.href.endsWith('#')
        ? !1
        : a.href === document.location.href ||
            a.href === document.location.href + '#';
    }
    function r(a, b) {
      return a.nodeName === 'INPUT' && a.type === b;
    }
    var s = b('EventProfiler').__wrapEventListenHandler(function (a, event) {
      __p && __p();
      event = l(event);
      if (!b('DataStore').get(this, i))
        throw new Error('Bad listenHandler context.');
      var c = b('DataStore').get(this, i)[a];
      if (!c) throw new Error('No registered handlers for `' + a + "'.");
      if (
        a == 'click' ||
        a == 'contextmenu' ||
        (a == 'mousedown' && event.which == 2)
      ) {
        var d = event.getTarget(),
          e = b('Parent').byTag(d, 'a');
        e instanceof HTMLAnchorElement &&
          e.href &&
          q(e) &&
          !r(d, 'file') &&
          !r(d, 'submit') &&
          event.prevent();
        a == 'click' && b('clickRefAction')('click', e, event);
        a == 'contextmenu' && b('clickRefAction')('contextmenu', e, event);
        a == 'mousedown' &&
          event.which == 2 &&
          b('clickRefAction')('middleclick', e, event);
      }
      d = h.getPriorities();
      for (var a = 0; a < d.length; a++) {
        e = d[a];
        if (e in c) {
          e = c[e];
          for (var f = 0; f < e.length; f++) {
            if (!e[f]) continue;
            var g = e[f].fire(this, event);
            if (g === !1) return event.kill();
            else event.cancelBubble && event.stop();
          }
        }
      }
      return event.returnValue;
    });
    h.Priority = { URGENT: -20, TRADITIONAL: -10, NORMAL: 0, _BUBBLE: 1e3 };
    function t(a, b, c, d, e, f, g) {
      (this._element = a),
        (this._handler = b),
        (this._handlers = c),
        (this._type = d),
        (this._priority = e),
        (this._id = f),
        (this._options = g);
    }
    Object.assign(t.prototype, {
      remove: function () {
        if (b('ExecutionEnvironment').canUseDOM) {
          this._handlers || g(0, undefined);
          var a = this._handlers[this._type];
          a.numHandlers <= 1
            ? (a.domHandlerRemover.remove(), delete this._handlers[this._type])
            : (delete a[this._priority][this._id],
              a.numHandlers--,
              this._options.passive ||
                (a.numNonPassiveHandlers--,
                o(this._element, this._handlers[this._type], this._type)));
          this._handlers = null;
        }
      },
      fire: function (a, event) {
        return b('ExecutionEnvironment').canUseDOM
          ? b('ErrorUtils').applyWithGuard(
              this._handler,
              a,
              [event],
              function (b) {
                (b.event_type = event.type),
                  (b.dom_element = a.name || a.id),
                  (b.category = 'eventhandler');
              }
            )
          : !0;
      },
    });
    a.$E = h.$E = l;
    e.exports = h;
  },
  null
);
__d(
  'Base64',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    function h(a) {
      a = (a.charCodeAt(0) << 16) | (a.charCodeAt(1) << 8) | a.charCodeAt(2);
      return String.fromCharCode(
        g.charCodeAt(a >>> 18),
        g.charCodeAt((a >>> 12) & 63),
        g.charCodeAt((a >>> 6) & 63),
        g.charCodeAt(a & 63)
      );
    }
    var i =
      '>___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !"#$%&\'()*+,-./0123';
    function j(a) {
      a =
        (i.charCodeAt(a.charCodeAt(0) - 43) << 18) |
        (i.charCodeAt(a.charCodeAt(1) - 43) << 12) |
        (i.charCodeAt(a.charCodeAt(2) - 43) << 6) |
        i.charCodeAt(a.charCodeAt(3) - 43);
      return String.fromCharCode(a >>> 16, (a >>> 8) & 255, a & 255);
    }
    var k = {
      encode: function (a) {
        a = unescape(encodeURI(a));
        var b = (a.length + 2) % 3;
        a = (a + '\0\0'.slice(b)).replace(/[\s\S]{3}/g, h);
        return a.slice(0, a.length + b - 2) + '=='.slice(b);
      },
      decode: function (a) {
        a = a.replace(/[^A-Za-z0-9+\/]/g, '');
        var b = (a.length + 3) & 3;
        a = (a + 'AAA'.slice(b)).replace(/..../g, j);
        a = a.slice(0, a.length + b - 3);
        try {
          return decodeURIComponent(escape(a));
        } catch (a) {
          throw new Error('Not valid UTF-8');
        }
      },
      encodeObject: function (a) {
        return k.encode(JSON.stringify(a));
      },
      decodeObject: function (a) {
        return JSON.parse(k.decode(a));
      },
      encodeNums: function (a) {
        return String.fromCharCode.apply(
          String,
          a.map(function (a) {
            return g.charCodeAt((a | -(a > 63)) & -(a > 0) & 63);
          })
        );
      },
    };
    e.exports = k;
  },
  null
);
__d(
  'CookieCore',
  [
    'CookieCoreConfig',
    'CookieCoreLoggingConfig',
    'FBLogger',
    'Random',
    'gkx',
    'performanceNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g =
        /^.*(\.(facebook|messenger|oculus|instagram|facebookcorewwwi|workplace)\..*)$/i,
      h = /_js_(.*)/,
      i = '',
      j = 0,
      k = 10 * 1e3;
    function l(a) {
      return window.self != window.top ? !1 : !0;
    }
    var m = {
      set: function (a, b) {
        if (!p(a)) return;
        m.setWithoutChecks(a, b, r(a), s(a), q(a));
      },
      setWithoutChecks: function (a, b, c, d, e) {
        __p && __p();
        var f = Date.now();
        if (c != null)
          if (c > f) c -= f;
          else if (c == 1) {
            m.clear(a, d);
            return;
          }
        document.cookie =
          a +
          '=' +
          encodeURIComponent(b) +
          '; ' +
          (c ? 'expires=' + new Date(f + c).toUTCString() + '; ' : '') +
          'path=' +
          d +
          '; domain=' +
          window.location.hostname.replace(g, '$1') +
          (e ? '; secure' : '');
        u();
      },
      setIfFirstPartyContext: function (a, b) {
        if (!l(a)) return;
        m.set(a, b);
      },
      setWithoutChecksIfFirstPartyContext: function (a, b, c, d, e) {
        if (!l(a)) return;
        m.setWithoutChecks(a, b, c, d, e);
      },
      clear: function (a, b) {
        b === void 0 && (b = '/'),
          (b = b || '/'),
          (document.cookie =
            a +
            '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=' +
            b +
            '; domain=' +
            window.location.hostname.replace(g, '$1')),
          u();
      },
      get: function (a) {
        if (!p(a)) return null;
        a = t().match('(?:^|;\\s*)' + a + '=(.*?)(?:;|$)');
        return a ? decodeURIComponent(a[1]) : a;
      },
    };
    function n(a) {
      return { insecure: a.i || !1, path: a.p || '/', ttlSeconds: a.t || 0 };
    }
    function o(a) {
      if (b('CookieCoreConfig')[a] !== undefined)
        return n(b('CookieCoreConfig')[a]);
      a = a.match(h);
      return a && a.length > 1 ? o(a[1]) : null;
    }
    function p(a) {
      return o(a) !== null;
    }
    function q(a) {
      a = o(a);
      return a == null ? !0 : !a.insecure;
    }
    function r(a) {
      a = o(a);
      return a == null ? null : a.ttlSeconds * 1e3;
    }
    function s(a) {
      a = o(a);
      return a == null ? '/' : a.path;
    }
    function t() {
      if (
        b('gkx')(
          'AT5tMpZqIKh0vdvJexCKKhPqDfMAWQPHLQnR8CgtajZUMLAZP8rj8YnSD9bEFc4BrmsaxTBmOCxn2mR6tM_ew1hH'
        )
      ) {
        j + k < Date.now() && v();
        return i;
      } else return w();
    }
    function u() {
      j = 0;
    }
    function v() {
      (i = w()), (j = Date.now());
    }
    function w() {
      if (b('CookieCoreLoggingConfig').sampleRate > 0) {
        var a = b('performanceNow')(),
          c = document.cookie;
        a = b('performanceNow')() - a;
        var d =
          a > b('CookieCoreLoggingConfig').maximumIgnorableStallMs &&
          b('Random').coinflip(1 / b('CookieCoreLoggingConfig').sampleRate);
        d &&
          b('FBLogger')('cookie_infra')
            .addMetadata('COOKIE_INFRA', 'WALL_TIME', String(a))
            .warn(
              'Cookie read exceeded %s milliseconds.',
              b('CookieCoreLoggingConfig').maximumIgnorableStallMs
            );
        return c;
      } else return document.cookie;
    }
    e.exports = m;
  },
  null
);
__d(
  'Cookie',
  ['Bootloader', 'CookieCore', 'Env'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      if (b('Env').no_cookies) return !1;
      if (b('Env').defer_cookies) {
        b('Bootloader').loadModules(
          ['BanzaiODS'],
          function (b) {
            b.bumpEntityKey('defer_cookies', 'set.' + a);
          },
          'Cookie'
        );
        return !1;
      }
      return !0;
    }
    function a(a, c) {
      if (!g(a)) return;
      b('CookieCore').set(a, c);
    }
    function c(a, c, d, e, f) {
      if (!g(a)) return;
      b('CookieCore').setWithoutChecks(a, c, d, e, f);
    }
    e.exports = babelHelpers['extends']({}, b('CookieCore'), {
      set: a,
      setWithoutChecks: c,
    });
  },
  null
);
__d(
  'PageNavigationStageLoggerKeys',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      LOAD_STAGE: 'a',
      REFERER_MODIFIED_CLICK: 'b',
      REFERER_SCRIPT_PATH: 'c',
      TARGET_URL_PATH: 'd',
      NOTES: 'e',
    });
  },
  null
);
__d(
  'PageNavigationStageLogger',
  [
    'Arbiter',
    'Base64',
    'BigPipe',
    'Cookie',
    'PageNavigationStageLoggerKeys',
    'Run',
    'ScriptPath',
    'URI',
    'emptyFunction',
    'setImmediateAcrossTransitions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null,
      h = null,
      i = 'first_byte';
    b('Run').onLoad(function () {
      i = 'onload';
    });
    b('Run').onAfterLoad(function () {
      (i = 'onafterload'), h && h.unsubscribe(), (h = null);
    });
    var j = !1,
      k = null,
      l = {
        init: function () {
          (l.init = b('emptyFunction')),
            (g = b('Arbiter').subscribe(
              b('BigPipe').Events.init,
              function (event, a) {
                g && g.unsubscribe(),
                  (g = null),
                  (i = b('BigPipe').Events.init),
                  (h = a.arbiter.subscribe(
                    Object.values(b('BigPipe').Events),
                    function (a) {
                      i = a;
                    }
                  ));
              }
            ));
        },
        updateCookie: function () {
          if (k == null) return;
          var a = b('Base64').encode(JSON.stringify(k));
          b('Cookie').set('pnl_data2', a);
        },
        setNote: function (a) {
          if (k == null) return;
          k[b('PageNavigationStageLoggerKeys').NOTES].push(a);
        },
        setCookieForNavigation: function (a, event) {
          if (!j) {
            var c;
            k =
              ((c = {}),
              (c[b('PageNavigationStageLoggerKeys').LOAD_STAGE] = i),
              (c[b('PageNavigationStageLoggerKeys').REFERER_SCRIPT_PATH] =
                b('ScriptPath').getScriptPath()),
              (c[b('PageNavigationStageLoggerKeys').REFERER_MODIFIED_CLICK] =
                event
                  ? event.getModifiers().any ||
                    (event.which && event.which !== 1)
                  : !1),
              (c[b('PageNavigationStageLoggerKeys').TARGET_URL_PATH] = new (b(
                'URI'
              ))(a).getPath()),
              (c[b('PageNavigationStageLoggerKeys').NOTES] = []),
              c);
            j = !0;
            b('setImmediateAcrossTransitions')(function () {
              (k = null), (j = !1);
            });
          }
          l.updateCookie();
        },
      };
    e.exports = l;
  },
  null
);
__d(
  'snowliftLoadingSpinner',
  ['cx', 'CSS'],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      b('CSS').addClass(a, '_1m42');
      return function () {
        b('CSS').removeClass(a, '_1m42');
      };
    }
    e.exports = a;
  },
  null
);
__d(
  'PhotoSnowliftLoader',
  [
    'Arbiter',
    'Bootloader',
    'EventProfiler',
    'PageEvents',
    'ifRequired',
    'snowliftLoadingSpinner',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, c, d) {
      __p && __p();
      if (a && Object.prototype.hasOwnProperty.call(a, 'sale_post_id')) {
        n.loadFrame(d);
        a.is_marketplace_post === '1'
          ? (b('EventProfiler').tagCurrentActiveInteractionsAs(
              'SnowliftForSalePost'
            ),
            b('Bootloader').loadModules(
              [
                'DOM',
                'MarketplacePermalinkRender',
                'MarketplaceSnowliftRoute',
                'Parent',
                'csx',
              ],
              function (d, e, f, g, h) {
                b('Arbiter').inform('GroupCommerceProductDetail.OPEN');
                h = g.bySelector(c, '._l52');
                if (!h) return;
                g = d.scry(h, '._2lc5')[0];
                if (!g) return;
                e.renderPermalinkModal(a.for_sale_item_id, g, new f());
              },
              'PhotoSnowliftLoader'
            ))
          : b('Bootloader').loadModules(
              ['GroupCommerceProductDetail.react', 'Parent', 'csx'],
              function (d, e, f) {
                f = e.bySelector(c, '._5pat');
                b('Arbiter').inform('GroupCommerceProductDetail.OPEN', {
                  for_sale_item_id: a.for_sale_item_id,
                  feedStoryRoot: f,
                });
                d.showDialog(a.sale_post_id, a, c);
              },
              'PhotoSnowliftLoader'
            );
        return !0;
      }
      return !1;
    }
    function h(a, c, d) {
      if (a && a.offer_bypass_snowlift === '1') {
        b('EventProfiler').tagCurrentActiveInteractionsAs('SnowliftOffer');
        n.loadFrame(d);
        b('Bootloader').loadModules(
          ['AsyncRequest'],
          function (a) {
            new a().setURI(c).send();
          },
          'PhotoSnowliftLoader'
        );
        return !0;
      }
      return !1;
    }
    function i(a, c, d) {
      if (a && a.offerx_bypass_snowlift === '1') {
        b('EventProfiler').tagCurrentActiveInteractionsAs('SnowliftOfferX');
        n.loadFrame(d);
        b('Bootloader').loadModules(
          ['AsyncRequest', 'XOfferController'],
          function (b, c) {
            c = c
              .getURIBuilder()
              .setFBID('offer_id', a.offerx_id)
              .setString('referrer', a.offerx_referrer)
              .setStringVector('__xts__', a.__xts__)
              .setString('__tn__', a.__tn__)
              .getURI();
            new b().setURI(c).send();
          },
          'PhotoSnowliftLoader'
        );
        return !0;
      }
      return !1;
    }
    function j(a, c, d) {
      if (a && a.sales_promo_bypass_snowlift === '1') {
        b('EventProfiler').tagCurrentActiveInteractionsAs('SnowliftSalesPromo');
        n.loadFrame(d);
        b('Bootloader').loadModules(
          ['AsyncRequest', 'XSalesPromoWWWDetailsDialogAsyncController'],
          function (b, c) {
            c = c
              .getURIBuilder()
              .setFBID('offer_id', a.sales_promo_id)
              .setString('referrer', a.sales_promo_referrer)
              .setStringVector('__xts__', a.__xts__)
              .setString('__tn__', a.__tn__)
              .getURI();
            new b().setURI(c).send();
          },
          'PhotoSnowliftLoader'
        );
        return !0;
      }
      return !1;
    }
    var k = function () {};
    b('Arbiter').subscribe('PhotoSnowlift.OPEN', function () {
      k();
    });
    b('Arbiter').subscribe('GroupCommerceProductDetail.OPEN', function () {
      k();
    });
    b('Arbiter').subscribe('SalesPromoDetails.OPEN', function () {
      k();
    });
    b('Arbiter').subscribe('OfferDetails.OPEN', function () {
      k();
    });
    var l = !1,
      m = '',
      n = {
        STAGE_NORMAL_MAX: { x: 960, y: 960 },
        SIDEBAR_SIZE_MAX: 360,
        STAGE_CHROME: { x: 82, y: 42 },
        load: function (a, c, d) {
          __p && __p();
          b('Bootloader').loadModules(
            ['URI'],
            function (e) {
              __p && __p();
              m = '';
              k();
              k = b('snowliftLoadingSpinner')(c);
              !0;
              var f = String(e.getMostRecentURI().getQueryData().viewas),
                g = new e(a).getQueryData();
              g = n.shouldUseSnowlift(g, a, c, f);
              if (g) {
                c.getAttribute('data-ploi') &&
                  ((g = new Image()), (g.src = new e(n.getImageURL(c))));
                this.loadWithSnowLift(a, c, f, d);
              }
            }.bind(this),
            'PhotoSnowliftLoader'
          );
        },
        loadWithSnowLift: function (a, c, d, e) {
          n.loadFrame(d),
            b('Bootloader').loadModules(
              [
                'Live',
                'PhotoTagApproval',
                'PhotoTagger',
                'PhotoTags',
                'TagTokenizer',
              ],
              function () {},
              'PhotoSnowliftLoader'
            ),
            b('Bootloader').loadModules(
              ['PhotoSnowlift'],
              function (b) {
                b.bootstrap(a, c);
              },
              e
            );
        },
        loadFrame: function (a) {
          if (l) return;
          l = !0;
          var c = a ? { viewas: a } : {};
          b('Bootloader').loadModules(
            ['AsyncRequest'],
            function (a) {
              new a('/ajax/photos/snowlift/init.php')
                .setAllowCrossPageTransition(!0)
                .setMethod('GET')
                .setReadOnly(!0)
                .setData(c)
                .send();
            },
            'PhotoSnowliftLoader'
          );
        },
        shouldUseSnowlift: function (a, b, c, d) {
          c = g(a, c, d);
          var e = h(a, b, d),
            f = i(a, b, d);
          a = j(a, b, d);
          return !c && !e && !a && !f;
        },
        getImageURL: function (a) {
          m === '' &&
            b('ifRequired')('URI', function (b) {
              var c = a.getAttribute('data-ploi'),
                d = a.getAttribute('data-plsi');
              b = new b(a.getAttribute('ajaxify'))
                .getQueryData()
                .size.split(',');
              d &&
              !n.shouldShowHiRes({
                hasSmallImage: !!d,
                dimensions: { x: b[0], y: b[1] },
              })
                ? (m = d)
                : c
                ? (m = c)
                : (m = '');
            });
          return m;
        },
        shouldShowHiRes: function (a) {
          __p && __p();
          b('ifRequired')('Vector', function (b) {
            __p && __p();
            if (!a.hasSmallImage) return !1;
            b = n.getStageSize(a.dimensions);
            if (b) {
              b = n.adjustStageSizeForPixelRatio(b);
              b = n.getImageSizeInStage(a.dimensions, b);
              if (b)
                return b.x > n.STAGE_NORMAL_MAX.x || b.y > n.STAGE_NORMAL_MAX.y;
            }
            return !1;
          });
          return !1;
        },
        getStageSize: function (a) {
          __p && __p();
          b('ifRequired')('Vector', function (b) {
            var c = b.getViewportDimensions(),
              d = new b(a.x, a.y),
              e;
            e = Math.min(d.x, c.x - n.SIDEBAR_SIZE_MAX - n.STAGE_CHROME.x);
            c = c.y - n.STAGE_CHROME.y;
            c = Math.min(d.y, c);
            if (e === 0 && c === 0) return new b(0, 0);
            var f = e / c;
            d = d.x / d.y;
            return f < d
              ? new b(e, Math.round(e / d))
              : new b(Math.round(c * d), c);
          });
        },
        adjustStageSizeForPixelRatio: function (a) {
          b('ifRequired')('Vector', function (b) {
            window.devicePixelRatio &&
              window.devicePixelRatio > 1 &&
              (a = new b(
                a.x * window.devicePixelRatio,
                a.y * window.devicePixelRatio
              ));
          });
          return a;
        },
        getImageSizeInStage: function (a, c) {
          b('ifRequired')('Vector', function (b) {
            var d = a.x,
              e = a.y;
            if (d >= c.x || e >= c.y) {
              var f = c.x / c.y,
                g = d / e;
              f < g
                ? ((d = c.x), (e = Math.round(d / g)))
                : f > g
                ? ((e = c.y), (d = Math.round(e * g)))
                : ((d = c.x), (e = c.y));
            }
            return new b(d, e);
          });
        },
        preload: function () {
          b('Arbiter').subscribe(b('PageEvents').BIGPIPE_ONLOAD, function () {
            ((document.body && document.body.classList.contains('home')) ||
              (document.body &&
                document.body.classList.contains('timelineLayout'))) &&
              b('ifRequired')(
                'requestIdleCallback',
                function (a) {
                  a(function () {
                    n.loadFrame();
                  });
                },
                function () {
                  n.loadFrame();
                }
              );
          });
        },
      };
    e.exports = n;
  },
  null
);
__d(
  'PrimerInlineHandlers',
  ['Bootloader', 'CSS', 'Parent', 'nullthrows', 'uniqueID'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {};
    function h(a, c) {
      var d = b('nullthrows')(a.id);
      d in g || (g[d] = 0);
      g[d] === 0 && b('CSS').addClass(a, 'bootloading');
      g[d] += c;
    }
    function i(a) {
      var c = b('nullthrows')(a.id);
      g[c]--;
      g[c] === 0 && b('CSS').removeClass(a, 'bootloading');
    }
    function j(a, event, b, c) {
      __p && __p();
      var d = c !== undefined ? b[c] : b,
        e;
      if (Array.isArray(d)) for (e = 0; e < d.length; e++) j(a, event, d, e);
      else if (d && typeof d === 'object')
        if (d.__elem) b[c] = a;
        else if (d.__event) b[c] = event;
        else for (var f in d) j(a, event, d, f);
    }
    function k(a, event, c) {
      var d = b('Parent').byClass(a, 'stat_elem') || a;
      d.id || d.setAttribute('id', b('uniqueID')());
      c = JSON.parse(a.getAttribute(c));
      h(d, c.length);
      c.forEach(function (c) {
        var f = c[0],
          g = c[1],
          h = c.slice(2);
        j(a, event, h);
        b('Bootloader').loadModules.call(
          b('Bootloader'),
          [f],
          function (a) {
            i(d), a[g].apply(a, h);
          },
          'Primer: addEventHandler'
        );
      });
    }
    a = {
      run: function (a, event, c) {
        a = b('Parent').byAttribute(a, c);
        if (!a) return null;
        do k(a, event, c);
        while ((a = b('Parent').byAttribute(a.parentNode, c)));
        return !1;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'ReactServerPrimer',
  ['FBLogger', 'Parent', 'requireWeak'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = new Map();
    function h(a) {
      __p && __p();
      while (a && a instanceof Node) {
        if (a instanceof HTMLElement && a.getAttribute('data-sr-before')) break;
        var c = a.previousSibling;
        c ? (a = c) : (a = a.parentNode);
      }
      if (a instanceof HTMLElement) return a;
      else {
        b('FBLogger')('ServerCallables').mustfix(
          'Failed to find wrapping data-sr-before mount'
        );
        return null;
      }
    }
    function i(a, c, d) {
      __p && __p();
      var e = h(c);
      if (!e) return null;
      var f = !1,
        i = g.get(e);
      i || ((i = []), g.set(e, i), (f = !0));
      i.push(function () {
        var b = new a.constructor(a.type, a),
          e = d === undefined ? c : d;
        e.dispatchEvent(b);
      });
      f &&
        b('requireWeak')('ReactServerRenderer', function (a) {
          a.dequeueHydrate(e);
        });
      return !1;
    }
    function a(a, c, d) {
      a = b('Parent').byAttribute(d, a);
      return !a ? null : i(c, a, d);
    }
    function c(a) {
      var b = g.get(a);
      b != null &&
        b.forEach(function (a) {
          a();
        });
      g['delete'](a);
    }
    e.exports = {
      findSRBeforeMountElem: h,
      handleEvent: a,
      queueEvent: i,
      notifyReactHydrateMount: c,
    };
  },
  null
);
__d(
  'firstClickTimestamp',
  ['DataStore'],
  function (a, b, c, d, e, f) {
    var g = 'first-click-timestamp';
    a = {
      setIfFirstClick: function (a, c) {
        var d = b('DataStore').get(a, g);
        d || b('DataStore').set(a, g, c.toString());
      },
      get: function (a) {
        a = b('DataStore').get(a, g);
        return Number(a);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'trackReferrer',
  ['Cookie', 'Parent'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g =
      /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
    function h(a) {
      return g.exec(a)[1] || '';
    }
    function a(a, c) {
      a = b('Parent').byAttribute(a, 'data-referrer');
      if (a) {
        c = h(c);
        if (!c) return;
        c = c + '|' + a.getAttribute('data-referrer');
        b('Cookie').set('x-src', c);
      }
    }
    e.exports = a;
  },
  null
);
__d(
  'Primer',
  [
    'invariant',
    'Bootloader',
    'CSS',
    'Event',
    'PageNavigationStageLogger',
    'Parent',
    'PhotoSnowliftLoader',
    'PrimerInlineHandlers',
    'ReactServerPrimer',
    'TimeSlice',
    'clickRefAction',
    'firstClickTimestamp',
    'ifRequired',
    'performanceNow',
    'trackReferrer',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = null,
      i = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;
    a = document.documentElement;
    a != null || g(0, undefined);
    function j(a, c, d) {
      __p && __p();
      b('firstClickTimestamp').setIfFirstClick(c, b('performanceNow')());
      var e = c.getAttribute('ajaxify'),
        f = c.href,
        h = e || f;
      h && b('clickRefAction')('a', c, a).coalesce_namespace('primer');
      if (e && f && !/#$/.test(f)) {
        e = a.which && a.which === 2;
        var j = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
        if (e || j) return;
      }
      e = b('PrimerInlineHandlers').run(d, a, 'data-onclick');
      b('trackReferrer')(c, h);
      var k = c.rel && c.rel.match(i);
      k = k && k[0];
      f && b('PageNavigationStageLogger').setCookieForNavigation(f, a);
      j = 'Primer: ' + k;
      switch (k) {
        case 'dialog':
        case 'dialog-post':
          b('Bootloader').loadModules(
            ['AsyncDialog'],
            function (a) {
              a.bootstrap(h, c, k);
            },
            j
          );
          break;
        case 'async':
        case 'async-post':
          b('Bootloader').loadModules(
            ['AsyncRequest'],
            function (a) {
              a.bootstrap(h, c);
            },
            j
          );
          break;
        case 'theater':
          b('PhotoSnowliftLoader').load(h, c, j);
          break;
        case 'toggle':
          d = c.parentNode;
          d != null || g(0, undefined);
          b('CSS').toggleClass(d, 'openToggler');
          b('Bootloader').loadModules(
            ['Toggler'],
            function (a) {
              if (c.parentNode == null) return;
              a.bootstrap(c);
            },
            j
          );
          break;
        default:
          b('ifRequired')(
            'PageTransitionsRegistrar',
            function (b) {
              b.__onClick(a);
            },
            function () {
              b('PageNavigationStageLogger').setNote('primer_no_pagetrans'),
                b('PageNavigationStageLogger').updateCookie();
            }
          );
          return e;
      }
      return !1;
    }
    b('Event').listen(
      document,
      'click',
      function (a) {
        a = a || window.event;
        if (a.button >= 2) return;
        h = a.target || a.srcElement;
        var c = b('Parent').byTag(h, 'A');
        c instanceof HTMLAnchorElement
          ? (c = j(a, c, h))
          : (c = b('PrimerInlineHandlers').run(h, a, 'data-onclick'));
        c == null &&
          (c = b('ReactServerPrimer').handleEvent('data-sr-onclick', a, h));
        return c;
      },
      b('Event').Priority._BUBBLE
    );
    b('Event').listen(
      document,
      'submit',
      function (a) {
        __p && __p();
        var c = a.getTarget(),
          d = c && c.getAttribute('rel');
        if (c && c.nodeName == 'FORM' && (d == 'async' || d === 'dialog')) {
          b('clickRefAction')('f', c, a).coalesce_namespace('primer');
          var e = h;
          switch (d) {
            case 'async':
              b('Bootloader').loadModules(
                ['FormSubmit'],
                function (a) {
                  a.send(c, e);
                },
                'Primer: async'
              );
              break;
            case 'dialog':
              b('Bootloader').loadModules(
                ['FormSubmit', 'AsyncDialog'],
                function (a, b) {
                  a = a.buildRequest(c, e);
                  a && b.send(a);
                },
                'Primer: form dialog'
              );
              break;
          }
          return !1;
        } else
          return b('ifRequired')('PageTransitionsRegistrar', function (b) {
            return b.__onSubmit(a, h);
          });
      },
      b('Event').Priority._BUBBLE
    );
    var k = null;
    c = function (a, c) {
      c = c || window.event;
      k = c.target || c.srcElement;
      var d = b('PrimerInlineHandlers').run(k, c, 'data-on' + a);
      l();
      a === 'mouseover' &&
        (m(),
        d == null &&
          k &&
          (d = b('ReactServerPrimer').handleEvent(
            'data-sr-onmouseover',
            c,
            k
          )));
    };
    d = function (a, b) {
      (b = b || window.event), (k = b.relatedTarget || b.toElement);
    };
    var l = function () {
        var a = k,
          c = b('Parent').byAttribute(k, 'data-hover');
        if (c) {
          switch (c.getAttribute('data-hover')) {
            case 'tooltip':
              b('Bootloader').loadModules(
                ['Tooltip'],
                function (b) {
                  k === a && b.process(c, k);
                },
                'Primer: tooltip'
              );
              break;
          }
          return;
        }
      },
      m = function () {
        var a = k,
          c = b('Parent').byAttribute(a, 'data-hovercard');
        c &&
          b('Bootloader').loadModules(
            ['Hovercard'],
            function (b) {
              k === a && b.processNode(c);
            },
            'Primer: hovercard'
          );
      };
    a.onmouseover = b('TimeSlice').guard(
      c.bind(null, 'mouseover'),
      'Primer mouseover'
    );
    a.onmouseout = b('TimeSlice').guard(
      d.bind(null, 'mouseout'),
      'Primer mouseout'
    );
    e = b('TimeSlice').guard(c.bind(null, 'focus'), 'Primer focus');
    a.addEventListener
      ? a.addEventListener('focus', e, !0)
      : a.attachEvent('onfocusin', e);
    f = b('TimeSlice').guard(c.bind(null, 'keypress'), 'Primer keypress');
    a.addEventListener && a.addEventListener('keypress', f, !0);
    b('PageNavigationStageLogger').init();
    b('PhotoSnowliftLoader').preload();
  },
  null
);
__d(
  'ChatConfig',
  ['invariant', 'ChatConfigInitialData'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = Object.assign({}, b('ChatConfigInitialData')),
      i = {
        get: function (a, b) {
          return a in h ? h[a] : b;
        },
        getBool: function (a) {
          return !!i.get(a, !1);
        },
        getNumber: function (a, b) {
          b === void 0 && (b = 0);
          if (a in h) {
            typeof h[a] === 'number' || g(0, undefined);
            return h[a];
          }
          return b;
        },
        set: function (a, b) {
          h[a] = b;
        },
        getDebugInfo: function () {
          return h;
        },
      };
    e.exports = i;
  },
  null
);
__d(
  'SidebarPrelude',
  ['Arbiter', 'ChatConfig', 'CSS', 'URI'],
  function (a, b, c, d, e, f) {
    var g = b('ChatConfig').get('sidebar.hide_buddylist_off_homepage'),
      h = 'buddylistOff',
      i = 'sidebarMode';
    a = {
      addSidebarMode: function (a) {
        var c = document.documentElement;
        c &&
          (g && !this.isOnHomepage()
            ? b('CSS').addClass(c, h)
            : b('CSS').removeClass(c, h),
          c.clientWidth > a &&
            (b('CSS').addClass(c, i),
            b('Arbiter').inform('sidebar/visibility', !0, 'state')));
      },
      addBuddylistMode: function () {
        var a = document.documentElement;
        a &&
          (g && !this.isOnHomepage()
            ? b('CSS').addClass(a, h)
            : b('CSS').removeClass(a, h));
      },
      isOnHomepage: function () {
        return new (b('URI'))(window.location.href).getPath() === '/';
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'SubmitOnEnterListener',
  ['Bootloader', 'CSS'],
  function (a, b, c, d, e, f) {
    __p && __p();
    document.documentElement.onkeydown = function (a) {
      __p && __p();
      a = a || window.event;
      var c = a.target || a.srcElement;
      a =
        a.keyCode == 13 &&
        !a.altKey &&
        !a.ctrlKey &&
        !a.metaKey &&
        !a.shiftKey &&
        b('CSS').hasClass(c, 'enter_submit');
      if (a) {
        b('Bootloader').loadModules(
          ['DOM', 'Input', 'trackReferrer', 'Form'],
          function (a, b, d, e) {
            if (!b.isEmpty(c)) {
              b = c.form;
              a =
                a.scry(b, '.enter_submit_target')[0] ||
                a.scry(b, '[type="submit"]')[0];
              if (a) {
                e = e.getAttribute(b, 'ajaxify') || e.getAttribute(b, 'action');
                e && d(b, e);
                a.click();
              }
            }
          },
          'SubmitOnEnterListener'
        );
        return !1;
      }
    };
  },
  null
);
__d(
  'SyntaxErrorMonitor',
  ['Cookie', 'ErrorUtils'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'js_ver',
      h = 864e5,
      i = 1262304e6,
      j = null;
    function k(a) {
      return a.name == 'SyntaxError' || /syntaxerror/i.test(a.message);
    }
    function l(a) {
      __p && __p();
      if (k(a)) {
        a = b('Cookie').get(g);
        var c = Math.floor((Date.now() - i) / h);
        if (!a || c - a >= j.bump_freq_day) {
          b('Cookie').set(g, c);
          a || (a = c);
          var d = encodeURIComponent(j.cdn_config);
          d =
            '/ajax/js_bump/?cdn_config=' +
            d +
            '&days=' +
            c +
            '&last_update=' +
            a;
          c = new Image();
          c.src = d;
        }
      }
    }
    a = {
      init: function (a) {
        (j = a), b('ErrorUtils').addListener(l);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'URLFragmentPrelude',
  ['URLFragmentPreludeConfig'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a =
      /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
    var g = /^[^\/\\#!\.\?\*\&\^=]+$/;
    window.location.href.replace(a, function (a, c, d, e) {
      __p && __p();
      var f;
      f = a = c + (d ? '?' + d : '');
      if (e) {
        var h = e.replace(/^(!|%21)/, '');
        h = h.charAt(0);
        if (
          h !== '/' &&
          h !== '\\' &&
          b('URLFragmentPreludeConfig').hashtagRedirect
        ) {
          h = e.match(g);
          h && !d && c == '/' && (f = '/hashtag/' + e);
        }
      }
      f != a && window.location.replace(f);
    });
  },
  null
);
__d(
  'VisibilityListener',
  ['Visibility', 'performanceNow'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = Date.now() - b('performanceNow')(),
      h = [],
      i = !1,
      j = 1e4;
    h.push({ key: g, value: b('Visibility').isHidden() });
    function k(a, b) {
      if (i || h.length > j) {
        i = !0;
        return;
      }
      h.push({ key: a + g, value: b });
    }
    b('Visibility').addListener(b('Visibility').VISIBLE, function (a) {
      k(a.changeTime, !1);
    });
    b('Visibility').addListener(b('Visibility').HIDDEN, function (a) {
      k(a.changeTime, !0);
    });
    var l = {
      getHiddenTimings: function (a, c) {
        __p && __p();
        if (i) return null;
        var d;
        for (var a = h.length - 1; a >= 0; a--)
          if (h[a].key <= c) {
            d = h.slice(0, a + 1);
            break;
          }
        if (d === undefined) return null;
        d[d.length - 1].value !== b('Visibility').isHidden() &&
          (d[d.length] = { key: c, value: b('Visibility').isHidden() });
        return d;
      },
      getHiddenTime: function (a, c) {
        __p && __p();
        var d = l.getHiddenTimings(a, c);
        if (!d) return null;
        if (d.length < 2) return b('Visibility').isHidden() ? c - a : 0;
        var e = d.length - 1;
        c = d[e].value ? c - d[e].key : 0;
        for (--e; e > 0; e--)
          if (d[e].key > a) d[e].value && (c += d[e + 1].key - d[e].key);
          else break;
        d[e].value && (c = d[e + 1].key - a);
        return c;
      },
      supported: function () {
        return !0;
      },
    };
    e.exports = l;
  },
  3
);
__d(
  'legacy:arbiter',
  ['Arbiter'],
  function (a, b, c, d, e, f) {
    a.Arbiter = b('Arbiter');
  },
  3
);
__d(
  'legacy:bootloader',
  ['Bootloader'],
  function (a, b, c, d, e, f) {
    a.Bootloader = b('Bootloader');
  },
  3
);
__d(
  'legacy:constructor-cache',
  ['JSCC'],
  function (a, b, c, d, e, f) {
    a.JSCC = b('JSCC');
  },
  3
);
__d(
  'legacy:css',
  ['CSS'],
  function (a, b, c, d, e, f) {
    a.CSS = b('CSS');
  },
  3
);
__d(
  'legacy:dom-core',
  ['$', 'ge'],
  function (a, b, c, d, e, f) {
    (a.$ = a.$ || b('$')), (a.ge = b('ge'));
  },
  3
);
__d(
  'legacy:emptyFunction',
  ['emptyFunction'],
  function (a, b, c, d, e, f) {
    a.emptyFunction = b('emptyFunction');
  },
  3
);
__d(
  'goURI',
  ['URI'],
  function (a, b, c, d, e, f) {
    e.exports = b('URI').go;
  },
  null
);
__d(
  'legacy:goURI',
  ['goURI'],
  function (a, b, c, d, e, f) {
    a.goURI = b('goURI');
  },
  3
);
__d(
  'legacy:onload',
  ['Run', 'PageEvents'],
  function (a, b, c, d, e, f) {
    (a.PageEvents = b('PageEvents')),
      (a.onloadRegister_DEPRECATED = b('Run').onLoad),
      (a.onloadRegister = function () {
        return b('Run').onLoad.apply(this, arguments);
      }),
      (a.onafterloadRegister_DEPRECATED = b('Run').onAfterLoad),
      (a.onafterloadRegister = function () {
        return b('Run').onAfterLoad.apply(this, arguments);
      }),
      (a.onleaveRegister = b('Run').onLeave),
      (a.onbeforeunloadRegister = b('Run').onBeforeUnload),
      (a.onunloadRegister = b('Run').onUnload);
  },
  3
);
__d(
  'legacy:parent',
  ['Parent'],
  function (a, b, c, d, e, f) {
    a.Parent = b('Parent');
  },
  3
);
__d(
  'lowerFacebookDomain',
  [],
  function (a, b, c, d, e, f) {
    b = window.location.hostname.match(
      /\.(facebook\.sg|facebookcorewwwi\.onion)$/
    );
    var g = b ? b[1] : 'facebook.com';
    a.setDomain = function (a) {
      g = a;
    };
    a.isValidDocumentDomain = function () {
      return document.domain == g ? !0 : !1;
    };
    function a() {
      document.domain = g;
    }
    e.exports = a;
  },
  null
);
__d(
  'lowerDomain',
  ['lowerFacebookDomain'],
  function (a, b, c, d, e, f) {
    document.domain.toLowerCase().match(/(^|\.)facebook\..*/) &&
      b('lowerFacebookDomain')();
  },
  null
);
__d(
  'markJSEnabled',
  [],
  function (a, b, c, d, e, f) {
    a = document.documentElement;
    a.className = a.className.replace('no_js', '');
  },
  null
);
__d(
  'wait_for_load',
  ['Run'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function c(a, c, d) {
      __p && __p();
      d = d.bind(a, c);
      if (window.domready) return d();
      switch ((c || event).type) {
        case 'load':
        case 'focus':
          b('Run').onAfterLoad(d);
          return;
        case 'click':
          var e = a.style,
            f = document.body.style;
          e.cursor = f.cursor = 'progress';
          b('Run').onAfterLoad(function () {
            (e.cursor = f.cursor = ''),
              a.tagName.toLowerCase() == 'a'
                ? !1 !== d() && a.href && (window.location.href = a.href)
                : a.click && a.click();
          });
          break;
      }
      return !1;
    }
    a.wait_for_load = c;
  },
  3
);
