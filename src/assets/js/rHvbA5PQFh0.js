if (self.CavalryLogger) {
  CavalryLogger.start_js(['wCKOW']);
}

__d(
  'FBJSON',
  [],
  function (a, b, c, d, e, f) {
    e.exports = { parse: JSON.parse, stringify: JSON.stringify };
  },
  null
);
__d(
  'BanzaiConsts',
  [],
  function (a, b, c, d, e, f) {
    a = {
      SEND: 'Banzai:SEND',
      OK: 'Banzai:OK',
      ERROR: 'Banzai:ERROR',
      SHUTDOWN: 'Banzai:SHUTDOWN',
      VITAL_WAIT: 1e3,
      BASIC_WAIT: 6e4,
      EXPIRY: 30 * 6e4,
    };
    e.exports = a;
  },
  null
);
__d(
  'CurrentUser',
  ['Cookie', 'CurrentUserInitialData'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      getID: function () {
        return b('CurrentUserInitialData').USER_ID;
      },
      getAccountID: function () {
        return b('CurrentUserInitialData').ACCOUNT_ID;
      },
      getWorkUserID: function () {
        return b('CurrentUserInitialData').WORK_USER_ID;
      },
      getName: function () {
        return b('CurrentUserInitialData').NAME;
      },
      getShortName: function () {
        return b('CurrentUserInitialData').SHORT_NAME;
      },
      isLoggedIn: function () {
        return (
          b('CurrentUserInitialData').USER_ID &&
          b('CurrentUserInitialData').USER_ID !== '0'
        );
      },
      isLoggedInNow: function () {
        if (!g.isLoggedIn()) return !1;
        if (b('CurrentUserInitialData').IS_INTERN_SITE) return !0;
        if (b('CurrentUserInitialData').IS_WORK_USER) return !0;
        return b('CurrentUserInitialData').ORIGINAL_USER_ID
          ? b('CurrentUserInitialData').ORIGINAL_USER_ID ===
              b('Cookie').get('c_user')
          : b('CurrentUserInitialData').USER_ID === b('Cookie').get('c_user');
      },
      isEmployee: function () {
        return !!b('CurrentUserInitialData').IS_EMPLOYEE;
      },
      hasWorkUser: function () {
        return !!b('CurrentUserInitialData').HAS_WORK_USER;
      },
      isWorkUser: function () {
        return !!b('CurrentUserInitialData').IS_WORK_USER;
      },
      isGray: function () {
        return !!b('CurrentUserInitialData').IS_GRAY;
      },
      isUnderage: function () {
        return !!b('CurrentUserInitialData').IS_UNDERAGE;
      },
      isMessengerOnlyUser: function () {
        return !!b('CurrentUserInitialData').IS_MESSENGER_ONLY_USER;
      },
      isDeactivatedAllowedOnMessenger: function () {
        return !!b('CurrentUserInitialData')
          .IS_DEACTIVATED_ALLOWED_ON_MESSENGER;
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'QueryString',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      var b = [];
      Object.keys(a)
        .sort()
        .forEach(function (c) {
          var d = a[c];
          if (d === undefined) return;
          if (d === null) {
            b.push(c);
            return;
          }
          b.push(encodeURIComponent(c) + '=' + encodeURIComponent(d));
        });
      return b.join('&');
    }
    function b(a, b) {
      __p && __p();
      b === void 0 && (b = !1);
      var c = {};
      if (a === '') return c;
      a = a.split('&');
      for (var d = 0; d < a.length; d++) {
        var e = a[d].split('=', 2),
          f = decodeURIComponent(e[0]);
        if (b && Object.prototype.hasOwnProperty.call(c, f))
          throw new URIError('Duplicate key: ' + f);
        c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null;
      }
      return c;
    }
    function c(a, b) {
      return (
        a +
        (a.indexOf('?') !== -1 ? '&' : '?') +
        (typeof b === 'string' ? b : g.encode(b))
      );
    }
    var g = { encode: a, decode: b, appendToUrl: c };
    e.exports = g;
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/qZmK4zWM8-v/
 */
__d(
  'SnappyCompress',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    (function a(b, c, d) {
      __p && __p();
      function e(g, h) {
        __p && __p();
        if (!c[g]) {
          if (!b[g]) {
            var i = typeof requireSnappy == 'function' && requireSnappy;
            if (!h && i) return i(g, !0);
            if (f) return f(g, !0);
            h = new Error("Cannot find module '" + g + "'");
            throw ((h.code = 'MODULE_NOT_FOUND'), h);
          }
          i = c[g] = { exports: {} };
          b[g][0].call(
            i.exports,
            function (a) {
              var c = b[g][1][a];
              return e(c ? c : a);
            },
            i,
            i.exports,
            a,
            b,
            c,
            d
          );
        }
        return c[g].exports;
      }
      var f = typeof requireSnappy == 'function' && requireSnappy;
      for (var g = 0; g < d.length; g++) e(d[g]);
      return e;
    })(
      {
        1: [
          function (c, a, b) {
            a = window.SnappyJS || {};
            (a.uncompress = c('./index').uncompress),
              (a.compress = c('./index').compress),
              (window.SnappyJS = a);
          },
          { './index': 2 },
        ],
        2: [
          function (c, a, b) {
            __p && __p();
            function a() {
              return 'object' == typeof process &&
                'object' == typeof process.versions &&
                'undefined' != typeof process.versions.node
                ? !0
                : !1;
            }
            function d(a) {
              return a instanceof Uint8Array && (!k || !Buffer.isBuffer(a));
            }
            function g(a) {
              return a instanceof ArrayBuffer;
            }
            function h(a) {
              return k ? Buffer.isBuffer(a) : !1;
            }
            function i(a) {
              __p && __p();
              if (!d(a) && !g(a) && !h(a)) throw new TypeError(n);
              var b = !1,
                c = !1;
              d(a) ? (b = !0) : g(a) && ((c = !0), (a = new Uint8Array(a)));
              a = new l(a);
              var e = a.readUncompressedLength();
              if (-1 === e) throw new Error('Invalid Snappy bitstream');
              if (b) {
                if (((b = new Uint8Array(e)), !a.uncompressToBuffer(b)))
                  throw new Error('Invalid Snappy bitstream');
              } else if (c) {
                if (
                  ((b = new ArrayBuffer(e)),
                  (c = new Uint8Array(b)),
                  !a.uncompressToBuffer(c))
                )
                  throw new Error('Invalid Snappy bitstream');
              } else if (((b = new Buffer(e)), !a.uncompressToBuffer(b)))
                throw new Error('Invalid Snappy bitstream');
              return b;
            }
            function j(a) {
              if (!d(a) && !g(a) && !h(a)) throw new TypeError(n);
              var b = !1,
                c = !1;
              d(a) ? (b = !0) : g(a) && ((c = !0), (a = new Uint8Array(a)));
              var e;
              a = new m(a);
              var f = a.maxCompressedLength();
              return (
                b
                  ? ((b = new Uint8Array(f)), (e = a.compressToBuffer(b)))
                  : c
                  ? ((b = new ArrayBuffer(f)),
                    (c = new Uint8Array(b)),
                    (e = a.compressToBuffer(c)))
                  : ((b = new Buffer(f)), (e = a.compressToBuffer(b))),
                b.slice(0, e)
              );
            }
            var k = a(),
              l = c('./snappy_decompressor').SnappyDecompressor,
              m = c('./snappy_compressor').SnappyCompressor,
              n =
                'Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array';
            (b.uncompress = i), (b.compress = j);
          },
          { './snappy_compressor': 3, './snappy_decompressor': 4 },
        ],
        3: [
          function (c, a, b) {
            __p && __p();
            function d(a, b) {
              return (506832829 * a) >>> b;
            }
            function g(a, b) {
              return (
                a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24)
              );
            }
            function h(a, b, c) {
              return (
                a[b] === a[c] &&
                a[b + 1] === a[c + 1] &&
                a[b + 2] === a[c + 2] &&
                a[b + 3] === a[c + 3]
              );
            }
            function i(a, b, c, d, e) {
              var f;
              for (f = 0; e > f; f++) c[d + f] = a[b + f];
            }
            function j(a, b, c, d, e) {
              return (
                60 >= c
                  ? ((d[e] = (c - 1) << 2), (e += 1))
                  : 256 > c
                  ? ((d[e] = 240), (d[e + 1] = c - 1), (e += 2))
                  : ((d[e] = 244),
                    (d[e + 1] = (c - 1) & 255),
                    (d[e + 2] = (c - 1) >>> 8),
                    (e += 3)),
                i(a, b, d, e, c),
                e + c
              );
            }
            function k(a, b, c, d) {
              return 12 > d && 2048 > c
                ? ((a[b] = 1 + ((d - 4) << 2) + ((c >>> 8) << 5)),
                  (a[b + 1] = 255 & c),
                  b + 2)
                : ((a[b] = 2 + ((d - 1) << 2)),
                  (a[b + 1] = 255 & c),
                  (a[b + 2] = c >>> 8),
                  b + 3);
            }
            function l(a, b, c, d) {
              for (; d >= 68; ) (b = k(a, b, c, 64)), (d -= 64);
              return d > 64 && ((b = k(a, b, c, 60)), (d -= 60)), k(a, b, c, d);
            }
            function m(a, b, c, e, f) {
              __p && __p();
              for (var i = 1; c >= 1 << i && p >= i; ) i += 1;
              i -= 1;
              var k = 32 - i;
              'undefined' == typeof q[i] && (q[i] = new Uint16Array(1 << i));
              var m;
              i = q[i];
              for (m = 0; m < i.length; m++) i[m] = 0;
              var n, o, r, s, t;
              m = b + c;
              var u = b,
                v = b,
                w = !0,
                x = 15;
              if (c >= x)
                for (c = m - x, b += 1, x = d(g(a, b), k); w; ) {
                  (s = 32), (o = b);
                  do {
                    if (
                      ((b = o),
                      (n = x),
                      (t = s >>> 5),
                      (s += 1),
                      (o = b + t),
                      b > c)
                    ) {
                      w = !1;
                      break;
                    }
                    (x = d(g(a, o), k)), (r = u + i[n]), (i[n] = b - u);
                  } while (!h(a, b, r));
                  if (!w) break;
                  f = j(a, v, b - v, e, f);
                  do {
                    for (t = b, n = 4; m > b + n && a[b + n] === a[r + n]; )
                      n += 1;
                    if (
                      ((b += n),
                      (o = t - r),
                      (f = l(e, f, o, n)),
                      (v = b),
                      b >= c)
                    ) {
                      w = !1;
                      break;
                    }
                    (s = d(g(a, b - 1), k)),
                      (i[s] = b - 1 - u),
                      (t = d(g(a, b), k)),
                      (r = u + i[t]),
                      (i[t] = b - u);
                  } while (h(a, b, r));
                  if (!w) break;
                  (b += 1), (x = d(g(a, b), k));
                }
              return m > v && (f = j(a, v, m - v, e, f)), f;
            }
            function n(a, b, c) {
              do (b[c] = 127 & a), (a >>>= 7), a > 0 && (b[c] += 128), (c += 1);
              while (a > 0);
              return c;
            }
            function c(a) {
              this.array = a;
            }
            a = 16;
            var o = 1 << a,
              p = 14,
              q = new Array(p + 1);
            (c.prototype.maxCompressedLength = function () {
              var a = this.array.length;
              return 32 + a + Math.floor(a / 6);
            }),
              (c.prototype.compressToBuffer = function (a) {
                var b,
                  c = this.array,
                  d = c.length,
                  e = 0,
                  f = 0;
                for (f = n(d, a, f); d > e; )
                  (b = Math.min(d - e, o)), (f = m(c, e, b, a, f)), (e += b);
                return f;
              }),
              (b.SnappyCompressor = c);
          },
          {},
        ],
        4: [
          function (c, a, b) {
            __p && __p();
            function d(a, b, c, d, e) {
              var f;
              for (f = 0; e > f; f++) c[d + f] = a[b + f];
            }
            function g(a, b, c, d) {
              var e;
              for (e = 0; d > e; e++) a[b + e] = a[b - c + e];
            }
            function c(a) {
              (this.array = a), (this.pos = 0);
            }
            var h = [0, 255, 65535, 16777215, 4294967295];
            (c.prototype.readUncompressedLength = function () {
              for (
                var a, b, c = 0, d = 0;
                32 > d && this.pos < this.array.length;

              ) {
                if (
                  ((a = this.array[this.pos]),
                  (this.pos += 1),
                  (b = 127 & a),
                  (b << d) >>> d !== b)
                )
                  return -1;
                if (((c |= b << d), 128 > a)) return c;
                d += 7;
              }
              return -1;
            }),
              (c.prototype.uncompressToBuffer = function (a) {
                __p && __p();
                for (
                  var b,
                    c,
                    e,
                    f,
                    i = this.array,
                    j = i.length,
                    k = this.pos,
                    l = 0;
                  k < i.length;

                )
                  if (((b = i[k]), (k += 1), 0 === (3 & b))) {
                    if (((c = (b >>> 2) + 1), c > 60)) {
                      if (k + 3 >= j) return !1;
                      (e = c - 60),
                        (c =
                          i[k] +
                          (i[k + 1] << 8) +
                          (i[k + 2] << 16) +
                          (i[k + 3] << 24)),
                        (c = (c & h[e]) + 1),
                        (k += e);
                    }
                    if (k + c > j) return !1;
                    d(i, k, a, l, c), (k += c), (l += c);
                  } else {
                    switch (3 & b) {
                      case 1:
                        (c = ((b >>> 2) & 7) + 4),
                          (f = i[k] + ((b >>> 5) << 8)),
                          (k += 1);
                        break;
                      case 2:
                        if (k + 1 >= j) return !1;
                        (c = (b >>> 2) + 1),
                          (f = i[k] + (i[k + 1] << 8)),
                          (k += 2);
                        break;
                      case 3:
                        if (k + 3 >= j) return !1;
                        (c = (b >>> 2) + 1),
                          (f =
                            i[k] +
                            (i[k + 1] << 8) +
                            (i[k + 2] << 16) +
                            (i[k + 3] << 24)),
                          (k += 4);
                    }
                    if (0 === f || f > l) return !1;
                    g(a, l, f, c), (l += c);
                  }
                return !0;
              }),
              (b.SnappyDecompressor = c);
          },
          {},
        ],
      },
      {},
      [1]
    ),
      (e.exports = SnappyJS);
  },
  null
);
__d(
  'SnappyCompressUtil',
  ['SnappyCompress'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      compressUint8ArrayToSnappy: function (a) {
        __p && __p();
        if (a == null) return null;
        var c = null;
        try {
          c = b('SnappyCompress').compress(a);
        } catch (a) {
          return null;
        }
        a = '';
        for (var d = 0; d < c.length; d++) a += String.fromCharCode(c[d]);
        return window.btoa(a);
      },
      compressStringToSnappy: function (a) {
        __p && __p();
        if (window.Uint8Array === undefined || window.btoa === undefined)
          return null;
        var b = new window.Uint8Array(a.length);
        for (var c = 0; c < a.length; c++) {
          var d = a.charCodeAt(c);
          if (d > 127) return null;
          b[c] = d;
        }
        return g.compressUint8ArrayToSnappy(b);
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'getCrossOriginTransport',
  ['invariant', 'ex'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h() {
      try {
        var a = new XMLHttpRequest();
        !('withCredentials' in a) &&
          typeof XDomainRequest !== 'undefined' &&
          (a = new XDomainRequest());
        return a;
      } catch (a) {
        throw new Error(b('ex')('getCrossOriginTransport: %s', a.message));
      }
    }
    h.withCredentials = function () {
      var a = h();
      'withCredentials' in a || g(0, undefined);
      var b = a.open;
      a.open = function () {
        b.apply(this, arguments), (this.withCredentials = !0);
      };
      return a;
    };
    e.exports = h;
  },
  null
);
__d(
  'ZeroRewrites',
  [
    'URI',
    'ZeroRewriteRules',
    'getCrossOriginTransport',
    'getSameOriginTransport',
    'isFacebookURI',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      rewriteURI: function (a) {
        if (!b('isFacebookURI')(a) || g._isWhitelisted(a)) return a;
        var c = g._getRewrittenSubdomain(a);
        c !== null && c !== undefined && (a = a.setSubdomain(c));
        return a;
      },
      getTransportBuilderForURI: function (a) {
        return g._isRewritten(a)
          ? b('getCrossOriginTransport').withCredentials
          : b('getSameOriginTransport');
      },
      isRewriteSafe: function (a) {
        if (
          Object.keys(b('ZeroRewriteRules').rewrite_rules).length === 0 ||
          !b('isFacebookURI')(a)
        )
          return !1;
        var c = g._getCurrentURI().getDomain(),
          d = new (b('URI'))(a).qualify().getDomain();
        return c === d || g._isRewritten(a);
      },
      _isWhitelisted: function (a) {
        a = a.getPath();
        a.endsWith('/') || (a += '/');
        return (
          b('ZeroRewriteRules').whitelist &&
          b('ZeroRewriteRules').whitelist[a] == 1
        );
      },
      _getRewrittenSubdomain: function (a) {
        a = new (b('URI'))(a).qualify().getSubdomain();
        return b('ZeroRewriteRules').rewrite_rules[a];
      },
      _isRewritten: function (a) {
        a = new (b('URI'))(a).qualify();
        if (
          Object.keys(b('ZeroRewriteRules').rewrite_rules).length === 0 ||
          !b('isFacebookURI')(a) ||
          g._isWhitelisted(a)
        )
          return !1;
        var c = a.getSubdomain(),
          d = g._getCurrentURI(),
          e = g._getRewrittenSubdomain(d);
        return a.getDomain() !== d.getDomain() && c === e;
      },
      _getCurrentURI: function () {
        return new (b('URI'))('/').qualify();
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'BanzaiAdapter',
  [
    'Arbiter',
    'BanzaiConsts',
    'CurrentUser',
    'QueryString',
    'Run',
    'SiteData',
    'SnappyCompressUtil',
    'URI',
    'UserAgent',
    'ZeroRewrites',
    'getAsyncParams',
    'BanzaiConfig',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [],
      h = new (b('Arbiter'))(),
      i = '/ajax/bz',
      j = 'POST',
      k = {
        config: b('BanzaiConfig'),
        endpoint: i,
        useBeacon: !0,
        getUserID: function () {
          return b('CurrentUser').getID();
        },
        inform: function (a) {
          h.inform(a);
        },
        subscribe: function (a, b) {
          return h.subscribe(a, b);
        },
        cleanup: function () {
          var a = g;
          g = [];
          a.forEach(function (a) {
            a.readyState < 4 && a.abort();
          });
        },
        readyToSend: function () {
          return b('UserAgent').isBrowser('IE <= 8') || navigator.onLine;
        },
        send: function (a, c, d, e) {
          __p && __p();
          var f = b('ZeroRewrites').rewriteURI(new (b('URI'))(i)),
            h = b('ZeroRewrites').getTransportBuilderForURI(f)();
          h.open(j, f.toString(), !0);
          h.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
          );
          h.onreadystatechange = function () {
            if (h.readyState >= 4) {
              var a = g.indexOf(h);
              a >= 0 && g.splice(a, 1);
              try {
                a = h.status;
              } catch (b) {
                a = 0;
              }
              a == 200
                ? (c && c(), e || k.inform(b('BanzaiConsts').OK))
                : (d && d(a), e || k.inform(b('BanzaiConsts').ERROR));
            }
          };
          g.push(h);
          h.send(k.prepForTransit(a));
        },
        addRequestAuthData: function (a) {
          return a;
        },
        prepForTransit: function (a) {
          var c = b('getAsyncParams')(j);
          c.q = JSON.stringify(a);
          c.ts = Date.now();
          c.ph = b('SiteData').push_phase;
          return b('QueryString').encode(c);
        },
        prepWadForTransit: function (a) {
          if (a.snappy == null || a.snappy === !0) {
            var c = Date.now(),
              d = JSON.stringify(a.posts),
              e = b('SnappyCompressUtil').compressStringToSnappy(d);
            e != null && e.length < d.length
              ? ((a.posts = e), (a.snappy_ms = Date.now() - c))
              : delete a.snappy;
          }
        },
        setHooks: function (a) {},
        setUnloadHook: function (a) {
          b('BanzaiConfig').gks && b('BanzaiConfig').gks.beforeunload_hook
            ? b('Run').onBeforeUnload(a._unload)
            : b('Run').onAfterUnload(a._unload);
        },
        onUnload: function (a) {
          b('Run').onAfterUnload(a);
        },
        isOkToSendViaBeacon: function () {
          return !0;
        },
      };
    e.exports = k;
  },
  null
);
__d(
  'Banzai',
  ['BanzaiRefactored'],
  function (a, b, c, d, e, f) {
    e.exports = b('BanzaiRefactored').module;
  },
  null
);
__d(
  'BanzaiODS',
  ['invariant', 'Banzai'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a() {
      __p && __p();
      var a = {},
        c = {};
      function d(b, d, e, f) {
        __p && __p();
        e === undefined && (e = 1);
        f === undefined && (f = 1);
        if (b in c)
          if (c[b] <= 0) return;
          else e /= c[b];
        var g = a[b] || (a[b] = {}),
          h = g[d] || (g[d] = [0]);
        e = Number(e);
        f = Number(f);
        if (!isFinite(e) || !isFinite(f)) return;
        h[0] += e;
        arguments.length >= 4 && (h[1] || (h[1] = 0), (h[1] += f));
      }
      return {
        setEntitySample: function (a, b) {
          c[a] = Math.random() < b ? b : 0;
        },
        bumpEntityKey: function (a, b, c) {
          d(a, b, c);
        },
        bumpFraction: function (a, b, c, e) {
          d(a, b, c, e);
        },
        flush: function (c) {
          for (var d in a) b('Banzai').post('ods:' + d, a[d], c);
          a = {};
        },
      };
    }
    c = a();
    c.create = a;
    b('Banzai').subscribe(b('Banzai').SEND, c.flush.bind(c, null));
    e.exports = c;
  },
  null
);
__d(
  'Promise',
  [
    'invariant',
    'TimeSlice',
    'setImmediateAcrossTransitions',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h() {}
    var i = null,
      j = {};
    function k(a) {
      try {
        return a.then;
      } catch (a) {
        i = a;
        return j;
      }
    }
    function l(a, b) {
      try {
        return a(b);
      } catch (a) {
        i = a;
        return j;
      }
    }
    function m(a, b, c) {
      try {
        a(b, c);
      } catch (a) {
        i = a;
        return j;
      }
    }
    function n(a) {
      __p && __p();
      if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
      if (typeof a !== 'function') throw new TypeError('not a function');
      this._state = 0;
      this._value = null;
      this._deferreds = [];
      if (a === h) return;
      u(a, this);
    }
    n._noop = h;
    n.prototype.then = function (a, b) {
      if (this.constructor !== n) return o(this, a, b);
      var c = new n(h);
      p(this, new t(a, b, c));
      return c;
    };
    function o(a, b, c) {
      return new a.constructor(function (d, e) {
        var f = new n(h);
        f.then(d, e);
        p(a, new t(b, c, f));
      });
    }
    function p(a, c) {
      __p && __p();
      while (a._state === 3) a = a._value;
      if (a._state === 0) {
        a._deferreds.push(c);
        return;
      }
      b('setImmediateAcrossTransitions')(function () {
        var b = a._state === 1 ? c.onFulfilled : c.onRejected;
        if (b === null) {
          c.continuation(function () {});
          a._state === 1 ? q(c.promise, a._value) : r(c.promise, a._value);
          return;
        }
        b = l(c.continuation.bind(null, b), a._value);
        b === j ? r(c.promise, i) : q(c.promise, b);
      });
    }
    function q(a, b) {
      __p && __p();
      if (b === a)
        return r(a, new TypeError('A promise cannot be resolved with itself.'));
      if (b && (typeof b === 'object' || typeof b === 'function')) {
        var c = k(b);
        if (c === j) return r(a, i);
        if (c === a.then && b instanceof n) {
          a._state = 3;
          a._value = b;
          s(a);
          return;
        } else if (typeof c === 'function') {
          u(c.bind(b), a);
          return;
        }
      }
      a._state = 1;
      a._value = b;
      s(a);
    }
    function r(a, b) {
      (a._state = 2), (a._value = b), s(a);
    }
    function s(a) {
      for (var b = 0; b < a._deferreds.length; b++) p(a, a._deferreds[b]);
      a._deferreds = null;
    }
    function t(a, c, d) {
      (this.onFulfilled = typeof a === 'function' ? a : null),
        (this.onRejected = typeof c === 'function' ? c : null),
        (this.continuation =
          b('TimeSlice').getGuardedContinuation('Promise Handler')),
        (this.promise = d);
    }
    function u(a, b) {
      __p && __p();
      var c = !1;
      a = m(
        a,
        function (a) {
          if (c) return;
          c = !0;
          q(b, a);
        },
        function (a) {
          if (c) return;
          c = !0;
          r(b, a);
        }
      );
      !c && a === j && ((c = !0), r(b, i));
    }
    n.prototype.done = function (a, c) {
      var d = new Error('Promise.done'),
        e = arguments.length ? this.then.apply(this, arguments) : this;
      e.then(null, function (a) {
        b('setTimeoutAcrossTransitions')(function () {
          if (a instanceof Error) throw a;
          else {
            d.message = '' + a;
            throw d;
          }
        }, 0);
      });
    };
    var v = B(!0),
      w = B(!1),
      x = B(null),
      y = B(undefined),
      z = B(0),
      A = B('');
    function B(a) {
      var b = new n(n._noop);
      b._state = 1;
      b._value = a;
      return b;
    }
    n.resolve = function (a) {
      __p && __p();
      if (a instanceof n) return a;
      if (a === null) return x;
      if (a === undefined) return y;
      if (a === !0) return v;
      if (a === !1) return w;
      if (a === 0) return z;
      if (a === '') return A;
      if (typeof a === 'object' || typeof a === 'function')
        try {
          var b = a.then;
          if (typeof b === 'function') return new n(b.bind(a));
        } catch (a) {
          return new n(function (b, c) {
            c(a);
          });
        }
      return B(a);
    };
    n.all = function (a) {
      __p && __p();
      Array.isArray(a) ||
        (a = [
          new n(function () {
            throw new TypeError('Promise.all must be passed an iterable.');
          }),
        ]);
      var b = Array.prototype.slice.call(a);
      return new n(function (a, c) {
        __p && __p();
        if (b.length === 0) return a([]);
        var d = b.length;
        function e(f, g) {
          __p && __p();
          if (g && (typeof g === 'object' || typeof g === 'function'))
            if (g instanceof n && g.then === n.prototype.then) {
              while (g._state === 3) g = g._value;
              if (g._state === 1) return e(f, g._value);
              g._state === 2 && c(g._value);
              g.then(function (a) {
                e(f, a);
              }, c);
              return;
            } else {
              var h = g.then;
              if (typeof h === 'function') {
                h = new n(h.bind(g));
                h.then(function (a) {
                  e(f, a);
                }, c);
                return;
              }
            }
          b[f] = g;
          --d === 0 && a(b);
        }
        for (var f = 0; f < b.length; f++) e(f, b[f]);
      });
    };
    n.reject = function (a) {
      return new n(function (b, c) {
        c(a);
      });
    };
    n.race = function (a) {
      return new n(function (b, c) {
        a.forEach(function (a) {
          n.resolve(a).then(b, c);
        });
      });
    };
    n.prototype['catch'] = function (a) {
      return this.then(null, a);
    };
    n.prototype['finally'] = function (a) {
      return this.then(
        function (b) {
          return n.resolve(a()).then(function () {
            return b;
          });
        },
        function (b) {
          return n.resolve(a()).then(function () {
            throw b;
          });
        }
      );
    };
    e.exports = n;
  },
  null
);
__d(
  'Deferred',
  ['Promise'],
  function (a, b, c, d, e, f) {
    __p && __p();
    b('Promise').resolve();
    function a(a) {
      (a = a || b('Promise')),
        (this.$1 = !1),
        (this.$2 = new a(
          function (a, b) {
            (this.$3 = a), (this.$4 = b);
          }.bind(this)
        ));
    }
    a.prototype.getPromise = function () {
      return this.$2;
    };
    a.prototype.resolve = function (a) {
      (this.$1 = !0), this.$3(a);
    };
    a.prototype.reject = function (a) {
      (this.$1 = !0), this.$4(a);
    };
    a.prototype.isSettled = function () {
      return this.$1;
    };
    e.exports = a;
  },
  null
);
__d(
  'MaybeNativePromise',
  ['Promise'],
  function (a, b, c, d, e, f) {
    c = a.Promise || b('Promise');
    b('Promise').resolve();
    e.exports = c;
  },
  null
);
__d(
  'VideoAkamaiRequestHelper',
  ['URI'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      return a.toLowerCase().indexOf('akamai') !== -1;
    }
    function g(a) {
      var b = a.startByte;
      a = a.endByte;
      if (b != undefined && !(b === 0 && a == undefined)) {
        b = 'bytes=' + b + '-' + (a == undefined ? '' : a);
        return { Range: b };
      }
      return null;
    }
    function c(a) {
      var c = new (b('URI'))(a);
      c = c.getQueryData();
      var d = c.startByte;
      c = c.endByte;
      return g({ baseUrl: a, startByte: d, endByte: c });
    }
    e.exports = {
      isAkamai: a,
      getRequestHeaders: g,
      getRequestHeadersFromUrl: c,
    };
  },
  null
);
__d(
  'VideoPlayerShakaExperimentsConfig',
  ['VideoPlayerShakaExperimentsPayload'],
  function (a, b, c, d, e, f) {
    e.exports = b('VideoPlayerShakaExperimentsPayload').experiments;
  },
  null
);
__d(
  'VideoPlayerShakaParsedContextualConfig',
  ['EventEmitter', 'FBLogger', 'VideoPlayerShakaContextualConfig'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    function a() {
      g.constructor.call(this),
        (this.$VideoPlayerShakaParsedContextualConfig1 = null),
        (this.$VideoPlayerShakaParsedContextualConfig2 = {}),
        this.parseConfig();
    }
    a.prototype.getGlobalConfig = function () {
      return this.$VideoPlayerShakaParsedContextualConfig2;
    };
    a.prototype.getStaticConfig = function () {
      return b('VideoPlayerShakaContextualConfig').staticConfig;
    };
    a.prototype.getRawContextualConfig = function () {
      return this.$VideoPlayerShakaParsedContextualConfig1;
    };
    a.prototype.parseConfig = function () {
      this.$VideoPlayerShakaParsedContextualConfig3(),
        this.$VideoPlayerShakaParsedContextualConfig4(),
        this.emit('configChange');
    };
    a.prototype.$VideoPlayerShakaParsedContextualConfig3 = function () {
      if (!b('VideoPlayerShakaContextualConfig').rawContextualConfig) return;
      try {
        this.$VideoPlayerShakaParsedContextualConfig1 = JSON.parse(
          b('VideoPlayerShakaContextualConfig').rawContextualConfig
        );
      } catch (a) {
        b('FBLogger')('VideoPlayerShakaParsedContextualConfig').warn(
          'Failed to parse raw config'
        );
      }
    };
    a.prototype.$VideoPlayerShakaParsedContextualConfig4 = function () {
      (this.$VideoPlayerShakaParsedContextualConfig2 = Object.assign(
        {},
        b('VideoPlayerShakaContextualConfig').staticConfig
      )),
        this.$VideoPlayerShakaParsedContextualConfig1 &&
          this.$VideoPlayerShakaParsedContextualConfig1.defaults.forEach(
            function (a) {
              return (this.$VideoPlayerShakaParsedContextualConfig2[a.name] =
                a.value);
            }.bind(this)
          );
    };
    e.exports = new a();
  },
  null
);
__d(
  'VideoPlayerShakaGlobalConfig',
  [
    'VideoPlayerShakaExperimentsConfig',
    'VideoPlayerShakaParsedContextualConfig',
  ],
  function (a, b, c, d, e, f) {
    a = {
      getBool: function (a, c) {
        var d = b('VideoPlayerShakaParsedContextualConfig').getGlobalConfig();
        return d && d[a] !== undefined
          ? d[a] === 'true' || d[a] === !0
          : typeof b('VideoPlayerShakaExperimentsConfig')[a] === 'boolean'
          ? b('VideoPlayerShakaExperimentsConfig')[a]
          : c;
      },
      getNumber: function (a, c) {
        var d = b('VideoPlayerShakaParsedContextualConfig').getGlobalConfig();
        return d && d[a] !== undefined
          ? Number(d[a])
          : typeof b('VideoPlayerShakaExperimentsConfig')[a] === 'number'
          ? b('VideoPlayerShakaExperimentsConfig')[a]
          : c;
      },
      getString: function (a, c) {
        var d = b('VideoPlayerShakaParsedContextualConfig').getGlobalConfig();
        return d && d[a] !== undefined
          ? String(d[a])
          : typeof b('VideoPlayerShakaExperimentsConfig')[a] === 'string'
          ? b('VideoPlayerShakaExperimentsConfig')[a]
          : c;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerShakaError',
  ['VideoPlayerShakaGlobalConfig'],
  function (a, b, c, d, e, f) {
    a = {
      translateError: function (a, c, d) {
        var e = b('VideoPlayerShakaGlobalConfig').getBool(
          'fix_shaka_xhr_error_status',
          !0
        )
          ? a.errorRawTransportStatus
          : a.errorCode;
        a = {
          name: a.errorType,
          message: a.errorMsg,
          type: d,
          url: c,
          status: e,
        };
        return a;
      },
      createTimeoutError: function (a) {
        a = {
          name: 'timeout',
          message: 'timeout',
          type: 'net',
          url: a,
          status: 0,
        };
        return a;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'XHRHttpError',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'HTTP_CLIENT_ERROR',
      h = 'HTTP_PROXY_ERROR',
      i = 'HTTP_SERVER_ERROR',
      j = 'HTTP_TRANSPORT_ERROR',
      k = 'HTTP_UNKNOWN_ERROR';
    a = {
      HTTP_CLIENT_ERROR: g,
      HTTP_PROXY_ERROR: h,
      HTTP_SERVER_ERROR: i,
      HTTP_TRANSPORT_ERROR: j,
      HTTP_UNKNOWN_ERROR: k,
      getErrorCode: function (a, b) {
        __p && __p();
        if (b === 0) {
          a = a.getProtocol();
          return a === 'file' || a === 'ftp' ? null : j;
        } else if (b >= 100 && b < 200) return h;
        else if (b >= 200 && b < 300) return null;
        else if (b >= 400 && b < 500) return g;
        else if (b >= 500 && b < 600) return i;
        else if (b >= 12001 && b < 12156) return j;
        else return k;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'getAsyncHeaders',
  ['ZeroCategoryHeader', 'isFacebookURI'],
  function (a, b, c, d, e, f) {
    function a(a) {
      var c = {};
      b('isFacebookURI')(a) &&
        b('ZeroCategoryHeader').value &&
        (c[b('ZeroCategoryHeader').header] = b('ZeroCategoryHeader').value);
      return c;
    }
    e.exports = a;
  },
  null
);
__d(
  'xhrSimpleDataSerializer',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = [];
      for (var c in a)
        b.push(encodeURIComponent(c) + '=' + encodeURIComponent(a[c]));
      return b.join('&');
    }
    e.exports = a;
  },
  null
);
__d(
  'XHRRequest',
  [
    'invariant',
    'Env',
    'ErrorUtils',
    'ResourceTimingsStore',
    'ResourceTypes',
    'TimeSlice',
    'URI',
    'XHRHttpError',
    'ZeroRewrites',
    'getAsyncHeaders',
    'xhrSimpleDataSerializer',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = { loadedBytes: null, totalBytes: null };
    function a(a) {
      this.setURI(a),
        this.setResponseType(null),
        this.setMethod('POST'),
        this.setTransportBuilder(
          b('ZeroRewrites').getTransportBuilderForURI(this.getURI())
        ),
        this.setDataSerializer(b('xhrSimpleDataSerializer')),
        (this.$1 = b('ResourceTimingsStore').getUID(
          b('ResourceTypes').XHR,
          a != null ? a.toString() : ''
        ));
    }
    a.prototype.setURI = function (a) {
      this.$2 = b('ZeroRewrites').rewriteURI(new (b('URI'))(a));
      return this;
    };
    a.prototype.getURI = function () {
      return this.$2;
    };
    a.prototype.setResponseType = function (a) {
      this.$3 = a;
      return this;
    };
    a.prototype.setMethod = function (a) {
      this.$4 = a;
      return this;
    };
    a.prototype.getMethod = function () {
      return this.$4;
    };
    a.prototype.setData = function (a) {
      this.$5 = a;
      return this;
    };
    a.prototype.getData = function () {
      return this.$5;
    };
    a.prototype.setRawData = function (a) {
      this.$6 = a;
      return this;
    };
    a.prototype.setRequestHeader = function (a, b) {
      this.$7 || (this.$7 = {});
      this.$7[a] = b;
      return this;
    };
    a.prototype.setTimeout = function (a) {
      this.$8 = a;
      return this;
    };
    a.prototype.getTimeout = function () {
      return this.$8;
    };
    a.prototype.setResponseHandler = function (a) {
      this.$9 = a;
      return this;
    };
    a.prototype.getResponseHandler = function () {
      return this.$9;
    };
    a.prototype.setErrorHandler = function (a) {
      this.$10 = a;
      return this;
    };
    a.prototype.getErrorHandler = function () {
      return this.$10;
    };
    a.prototype.setNetworkFailureHandler = function (a) {
      this.$11 = a;
      return this;
    };
    a.prototype.getNetworkFailureHandler = function () {
      return this.$11;
    };
    a.prototype.setAbortHandler = function (a) {
      this.$12 = a;
      return this;
    };
    a.prototype.getAbortHandler = function () {
      return this.$12;
    };
    a.prototype.setTimeoutHandler = function (a) {
      this.$13 = a;
      return this;
    };
    a.prototype.getTimeoutHandler = function () {
      return this.$13;
    };
    a.prototype.setUploadProgressHandler = function (a) {
      this.$14 = a;
      return this;
    };
    a.prototype.setDownloadProgressHandler = function (a) {
      this.$15 = a;
      return this;
    };
    a.prototype.setTransportBuilder = function (a) {
      this.$16 = a;
      return this;
    };
    a.prototype.setDataSerializer = function (a) {
      this.$17 = a;
      return this;
    };
    a.prototype.send = function () {
      __p && __p();
      var a = this.$8,
        c = this.$16(),
        d = this.getURI(),
        e = new (b('URI'))(d).getQualifiedURI().toString(),
        f = this.$1;
      b('ResourceTimingsStore').updateURI(b('ResourceTypes').XHR, f, e);
      b('ResourceTimingsStore').measureRequestSent(b('ResourceTypes').XHR, f);
      this.$18 = c;
      this.$4 === 'POST' || !this.$6 || g(0, undefined, this.$6, d);
      b('Env').force_param && Object.assign(this.$5, b('Env').force_param);
      this.$4 === 'GET' || this.$6
        ? (d.addQueryData(this.$5), (e = this.$6))
        : (e = this.$17(this.$5));
      var h = b('TimeSlice').guard(
        function (a) {
          b('ResourceTimingsStore').measureResponseReceived(
            b('ResourceTypes').XHR,
            f
          );
          for (
            var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
            e < c;
            e++
          )
            d[e - 1] = arguments[e];
          a.apply(this, d);
        },
        'XHRRequest response received',
        { propagationType: b('TimeSlice').PropagationType.CONTINUATION }
      );
      c.onreadystatechange = this.$19(h);
      c.onerror = this.$20(h);
      c.upload && this.$14 && (c.upload.onprogress = this.$21.bind(this));
      this.$15 && (c.onprogress = this.$22.bind(this));
      a && (this.$23 = setTimeout(this.$24.bind(this), a));
      this.$25 !== null &&
        this.$25 !== undefined &&
        (c.withCredentials = this.$25);
      c.open(this.$4, d.toString(), !0);
      h = !1;
      if (this.$7)
        for (var i in this.$7)
          i.toLowerCase() === 'content-type' && (h = !0),
            c.setRequestHeader(i, this.$7[i]);
      this.$4 == 'POST' &&
        !this.$6 &&
        !h &&
        c.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      var j = b('getAsyncHeaders')(d);
      Object.keys(j).forEach(function (a) {
        c.setRequestHeader(a, j[a]);
      });
      this.$3 === 'arraybuffer' &&
        ('responseType' in c
          ? (c.responseType = 'arraybuffer')
          : 'overrideMimeType' in c
          ? c.overrideMimeType('text/plain; charset=x-user-defined')
          : 'setRequestHeader' in c &&
            c.setRequestHeader('Accept-Charset', 'x-user-defined'));
      this.$3 === 'blob' && (c.responseType = this.$3);
      c.send(e);
    };
    a.prototype.abort = function (a) {
      this.$26(),
        this.$12 &&
          b('ErrorUtils').applyWithGuard(
            this.$12,
            null,
            [a],
            null,
            'XHRRequest:_abortHandler'
          );
    };
    a.prototype.$26 = function () {
      var a = this.$18;
      a && ((a.onreadystatechange = null), a.abort());
      this.$27();
    };
    a.prototype.$24 = function () {
      this.$26(),
        this.$13 &&
          b('ErrorUtils').applyWithGuard(
            this.$13,
            null,
            null,
            null,
            'XHRRequest:_abortHandler'
          );
    };
    a.prototype.$28 = function (a) {
      if (this.$3)
        if ('response' in a) return a.response;
        else if (this.$3 === 'arraybuffer' && window.VBArray)
          return window.VBArray(a.responseBody).toArray();
      return a.responseText;
    };
    a.prototype.$20 = function (a) {
      var c = this.$18;
      return function () {
        var d = {
          errorCode: b('XHRHttpError').HTTP_TRANSPORT_ERROR,
          errorMsg: 'Network Failure.',
          errorType: 'Network',
          errorRawTransport: c.constructor && c.constructor.name,
          errorRawTransportStatus: 0,
        };
        this.$11
          ? b('ErrorUtils').applyWithGuard(
              a.bind(undefined, this.$11),
              null,
              [d],
              null,
              'XHRRequest:_networkFailureHandler'
            )
          : a(function () {});
      }.bind(this);
    };
    a.prototype.$19 = function (a) {
      __p && __p();
      var c = b('TimeSlice').guard(
        function (a) {
          for (
            var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
            d < b;
            d++
          )
            c[d - 1] = arguments[d];
          return a.apply(this, c);
        },
        'XHRRequest onreadystatechange',
        { propagationType: b('TimeSlice').PropagationType.EXECUTION }
      );
      return function () {
        __p && __p();
        var d = this.$18,
          e = d.readyState;
        if (e >= 2) {
          var f = e === 4,
            g = this.getURI();
          g = b('XHRHttpError').getErrorCode(g, d.status);
          var h = this.$9;
          if (g !== null) {
            if (f) {
              g = {
                errorCode: g,
                errorMsg: this.$28(d),
                errorRawTransport: d.constructor.name,
                errorRawTransportStatus: d.status,
                errorType: d.status ? 'HTTP ' + d.status : 'HTTP',
              };
              this.$10
                ? b('ErrorUtils').applyWithGuard(
                    a.bind(undefined, this.$10),
                    null,
                    [g],
                    null,
                    'XHRRequest:_errorHandler'
                  )
                : a(function () {});
            }
          } else if (h) {
            g = null;
            h.includeHeaders && (g = d.getAllResponseHeaders());
            if (f || (h.parseStreaming && e === 3)) {
              e = f ? a : c;
              b('ErrorUtils').applyWithGuard(
                e.bind(undefined, h),
                null,
                [this.$28(d), g, f],
                null,
                'XHRRequest:handler'
              );
            }
          } else f && a(function () {});
          f && this.$27();
        }
      }.bind(this);
    };
    a.prototype.$21 = function (a) {
      (h.loadedBytes = a.loaded),
        (h.totalBytes = a.total),
        this.$14 &&
          b('ErrorUtils').applyWithGuard(
            this.$14,
            null,
            [h],
            null,
            'XHRRequest:_uploadProgressHandler'
          );
    };
    a.prototype.$22 = function (a) {
      a = { loadedBytes: a.loaded, totalBytes: a.total };
      this.$15 &&
        b('ErrorUtils').applyWithGuard(
          this.$15,
          null,
          [a],
          null,
          'XHRRequest:_downloadProgressHandler'
        );
    };
    a.prototype.$27 = function () {
      clearTimeout(this.$23), delete this.$18;
    };
    e.exports = a;
  },
  null
);
__d(
  'regeneratorRuntime',
  ['Promise'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = Object.prototype.hasOwnProperty,
      h =
        (typeof Symbol === 'function' &&
          (typeof Symbol === 'function' ? Symbol.iterator : '@@iterator')) ||
        '@@iterator',
      i = e.exports;
    function j(a, b, c, d) {
      b = Object.create((b || q).prototype);
      d = new z(d || []);
      b._invoke = w(a, c, d);
      return b;
    }
    i.wrap = j;
    function k(a, b, c) {
      try {
        return { type: 'normal', arg: a.call(b, c) };
      } catch (a) {
        return { type: 'throw', arg: a };
      }
    }
    var l = 'suspendedStart',
      m = 'suspendedYield',
      n = 'executing',
      o = 'completed',
      p = {};
    function q() {}
    function r() {}
    function s() {}
    var t = (s.prototype = q.prototype);
    r.prototype = t.constructor = s;
    s.constructor = r;
    r.displayName = 'GeneratorFunction';
    function a(a) {
      ['next', 'throw', 'return'].forEach(function (b) {
        a[b] = function (a) {
          return this._invoke(b, a);
        };
      });
    }
    i.isGeneratorFunction = function (a) {
      a = typeof a === 'function' && a.constructor;
      return a
        ? a === r || (a.displayName || a.name) === 'GeneratorFunction'
        : !1;
    };
    i.mark = function (a) {
      Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : Object.assign(a, s);
      a.prototype = Object.create(t);
      return a;
    };
    i.awrap = function (a) {
      return new u(a);
    };
    function u(a) {
      this.arg = a;
    }
    function v(a) {
      __p && __p();
      function c(c, f) {
        var g = a[c](f);
        c = g.value;
        return c instanceof u
          ? b('Promise').resolve(c.arg).then(d, e)
          : b('Promise')
              .resolve(c)
              .then(function (a) {
                g.value = a;
                return g;
              });
      }
      typeof process === 'object' &&
        process.domain &&
        (c = process.domain.bind(c));
      var d = c.bind(a, 'next'),
        e = c.bind(a, 'throw');
      c.bind(a, 'return');
      var f;
      function g(a, d) {
        var e = f
          ? f.then(function () {
              return c(a, d);
            })
          : new (b('Promise'))(function (b) {
              b(c(a, d));
            });
        f = e['catch'](function (a) {});
        return e;
      }
      this._invoke = g;
    }
    a(v.prototype);
    i.async = function (a, b, c, d) {
      var e = new v(j(a, b, c, d));
      return i.isGeneratorFunction(b)
        ? e
        : e.next().then(function (a) {
            return a.done ? a.value : e.next();
          });
    };
    function w(a, b, c) {
      __p && __p();
      var d = l;
      return function (e, f) {
        __p && __p();
        if (d === n) throw new Error('Generator is already running');
        if (d === o) {
          if (e === 'throw') throw f;
          return B();
        }
        while (!0) {
          var g = c.delegate;
          if (g) {
            if (
              e === 'return' ||
              (e === 'throw' && g.iterator[e] === undefined)
            ) {
              c.delegate = null;
              var h = g.iterator['return'];
              if (h) {
                h = k(h, g.iterator, f);
                if (h.type === 'throw') {
                  e = 'throw';
                  f = h.arg;
                  continue;
                }
              }
              if (e === 'return') continue;
            }
            h = k(g.iterator[e], g.iterator, f);
            if (h.type === 'throw') {
              c.delegate = null;
              e = 'throw';
              f = h.arg;
              continue;
            }
            e = 'next';
            f = undefined;
            var i = h.arg;
            if (i.done) (c[g.resultName] = i.value), (c.next = g.nextLoc);
            else {
              d = m;
              return i;
            }
            c.delegate = null;
          }
          if (e === 'next') d === m ? (c.sent = f) : (c.sent = undefined);
          else if (e === 'throw') {
            if (d === l) {
              d = o;
              throw f;
            }
            c.dispatchException(f) && ((e = 'next'), (f = undefined));
          } else e === 'return' && c.abrupt('return', f);
          d = n;
          h = k(a, b, c);
          if (h.type === 'normal') {
            d = c.done ? o : m;
            var i = { value: h.arg, done: c.done };
            if (h.arg === p) c.delegate && e === 'next' && (f = undefined);
            else return i;
          } else h.type === 'throw' && ((d = o), (e = 'throw'), (f = h.arg));
        }
      };
    }
    a(t);
    t[h] = function () {
      return this;
    };
    t.toString = function () {
      return '[object Generator]';
    };
    function x(a) {
      var b = { tryLoc: a[0] };
      1 in a && (b.catchLoc = a[1]);
      2 in a && ((b.finallyLoc = a[2]), (b.afterLoc = a[3]));
      this.tryEntries.push(b);
    }
    function y(a) {
      var b = a.completion || {};
      b.type = 'normal';
      delete b.arg;
      a.completion = b;
    }
    function z(a) {
      (this.tryEntries = [{ tryLoc: 'root' }]),
        a.forEach(x, this),
        this.reset(!0);
    }
    i.keys = function (a) {
      __p && __p();
      var b = [];
      for (var c in a) b.push(c);
      b.reverse();
      return function c() {
        __p && __p();
        while (b.length) {
          var d = b.pop();
          if (d in a) {
            c.value = d;
            c.done = !1;
            return c;
          }
        }
        c.done = !0;
        return c;
      };
    };
    function A(a) {
      __p && __p();
      if (a) {
        var b = a[h];
        if (b) return b.call(a);
        if (typeof a.next === 'function') return a;
        if (!isNaN(a.length)) {
          var c = -1;
          b = function b() {
            while (++c < a.length)
              if (g.call(a, c)) {
                b.value = a[c];
                b.done = !1;
                return b;
              }
            b.value = undefined;
            b.done = !0;
            return b;
          };
          return (b.next = b);
        }
      }
      return { next: B };
    }
    i.values = A;
    function B() {
      return { value: undefined, done: !0 };
    }
    z.prototype = {
      constructor: z,
      reset: function (a) {
        this.prev = 0;
        this.next = 0;
        this.sent = undefined;
        this.done = !1;
        this.delegate = null;
        this.tryEntries.forEach(y);
        if (!a)
          for (var b in this)
            b.charAt(0) === 't' &&
              g.call(this, b) &&
              !isNaN(+b.slice(1)) &&
              (this[b] = undefined);
      },
      stop: function () {
        this.done = !0;
        var a = this.tryEntries[0];
        a = a.completion;
        if (a.type === 'throw') throw a.arg;
        return this.rval;
      },
      dispatchException: function (a) {
        __p && __p();
        if (this.done) throw a;
        var b = this;
        function c(c, d) {
          f.type = 'throw';
          f.arg = a;
          b.next = c;
          return !!d;
        }
        for (var d = this.tryEntries.length - 1; d >= 0; --d) {
          var e = this.tryEntries[d],
            f = e.completion;
          if (e.tryLoc === 'root') return c('end');
          if (e.tryLoc <= this.prev) {
            var h = g.call(e, 'catchLoc'),
              i = g.call(e, 'finallyLoc');
            if (h && i) {
              if (this.prev < e.catchLoc) return c(e.catchLoc, !0);
              else if (this.prev < e.finallyLoc) return c(e.finallyLoc);
            } else if (h) {
              if (this.prev < e.catchLoc) return c(e.catchLoc, !0);
            } else if (i) {
              if (this.prev < e.finallyLoc) return c(e.finallyLoc);
            } else throw new Error('try statement without catch or finally');
          }
        }
      },
      abrupt: function (a, b) {
        __p && __p();
        for (var c = this.tryEntries.length - 1; c >= 0; --c) {
          var d = this.tryEntries[c];
          if (
            d.tryLoc <= this.prev &&
            g.call(d, 'finallyLoc') &&
            this.prev < d.finallyLoc
          ) {
            var e = d;
            break;
          }
        }
        e &&
          (a === 'break' || a === 'continue') &&
          e.tryLoc <= b &&
          b <= e.finallyLoc &&
          (e = null);
        d = e ? e.completion : {};
        d.type = a;
        d.arg = b;
        e ? (this.next = e.finallyLoc) : this.complete(d);
        return p;
      },
      complete: function (a, b) {
        if (a.type === 'throw') throw a.arg;
        a.type === 'break' || a.type === 'continue'
          ? (this.next = a.arg)
          : a.type === 'return'
          ? ((this.rval = a.arg), (this.next = 'end'))
          : a.type === 'normal' && b && (this.next = b);
      },
      finish: function (a) {
        for (var b = this.tryEntries.length - 1; b >= 0; --b) {
          var c = this.tryEntries[b];
          if (c.finallyLoc === a) {
            this.complete(c.completion, c.afterLoc);
            y(c);
            return p;
          }
        }
      },
      catch: function (a) {
        __p && __p();
        for (var b = this.tryEntries.length - 1; b >= 0; --b) {
          var c = this.tryEntries[b];
          if (c.tryLoc === a) {
            var d = c.completion;
            if (d.type === 'throw') {
              var e = d.arg;
              y(c);
            }
            return e;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (a, b, c) {
        this.delegate = { iterator: A(a), resultName: b, nextLoc: c };
        return p;
      },
    };
  },
  null
);
__d(
  'VideoDashPrefetchCache',
  [
    'regeneratorRuntime',
    'Promise',
    'BanzaiODS',
    'Deferred',
    'MaybeNativePromise',
    'Run',
    'URI',
    'VideoAkamaiRequestHelper',
    'VideoPlayerPrefetchExperiments',
    'VideoPlayerShakaError',
    'VideoPlayerShakaGlobalConfig',
    'XHRRequest',
    'getCrossOriginTransport',
    'requireWeak',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null;
    b('requireWeak')('VideoPlayerShakaBandwidthEstimator', function (a) {
      return (g = a);
    });
    var h = null;
    b('requireWeak')('VideoStreamingTaskQueueProvider', function (a) {
      return (h = a);
    });
    function i(a) {
      return a.audio.length + a.video.length + a.manifest.length;
    }
    function j(a, c) {
      b('BanzaiODS').bumpEntityKey('www_video_playback', 'prefetch.' + a, c);
    }
    function k(a) {
      var b = 'aborted',
        c = { status: 0 },
        d = new Error('Prefetch request aborted.');
      return Object.assign(d, { type: b, url: a, xhr: c });
    }
    function l(a) {
      var c = a.getURI(),
        d = c.toString();
      if (b('VideoAkamaiRequestHelper').isAkamai(d)) {
        var e = b('VideoAkamaiRequestHelper').getRequestHeadersFromUrl(d);
        d = c.removeQueryData(['bytestart', 'byteend']);
        a.setURI(d);
        e &&
          Object.keys(e).forEach(function (b) {
            a.setRequestHeader(b, e[b]);
          });
      }
      return a;
    }
    var m = null,
      n = new Map();
    function o(a) {
      a = new (b('URI'))(a);
      a = a.getDomain();
      return (
        a.endsWith('fbcdn.net') &&
        !a.startsWith('interncache') &&
        !a.endsWith('ak.fbcdn.net')
      );
    }
    function p(a, c) {
      c === void 0 && (c = !1);
      return c && o(a)
        ? b('getCrossOriginTransport').withCredentials
        : b('getCrossOriginTransport');
    }
    function q(a) {
      return o(a.url);
    }
    function r(a, b, c) {
      return { response: a.slice(b.start + 0, b.end + 1), responseTime: c };
    }
    function s(a) {
      __p && __p();
      var c = new (b('URI'))(a);
      if (c.getDomain()) {
        c = c.removeQueryData(['oh']);
        c = c.removeQueryData('__gda__');
        var d = Object.keys(c.getQueryData());
        for (var e = 0; e < d.length; e++) {
          var f = d[e];
          f.startsWith('_nc') && (c = c.removeQueryData(f));
        }
        return c.toString();
      }
      return a;
    }
    function t() {
      (this.$2 = new Map()),
        (this.$9 = new Map()),
        (this.$1 = new Map()),
        (this.$3 = []),
        (this.$4 = []),
        (this.$5 = 0),
        (this.$6 = b('VideoPlayerPrefetchExperiments').maxPrefetchVideosNum),
        (this.$7 = b(
          'VideoPlayerPrefetchExperiments'
        ).consolidateFragmentedPrefetchRequest);
    }
    t.prototype.$10 = function (a, c) {
      __p && __p();
      c === void 0 && (c = !1);
      var d = a,
        e = new (b('XHRRequest'))(d)
          .setMethod('GET')
          .setResponseType('arraybuffer')
          .setTransportBuilder(p(d, c));
      l(e);
      var f = new (b('MaybeNativePromise'))(
        function (c, g) {
          e.setErrorHandler(
            function (a) {
              this.$11(e),
                g(b('VideoPlayerShakaError').translateError(a, d, 'preload'));
            }.bind(this)
          ),
            e.setResponseHandler(
              function (a) {
                (e.response = a), this.$11(e), c(e);
              }.bind(this)
            ),
            e.setAbortHandler(
              function () {
                if (b('VideoPlayerPrefetchExperiments').fixPrefetchCacheAbort) {
                  this.$11(e);
                  var c = k(a);
                  g(c);
                } else g(f, new Error('Request promise aborted'));
              }.bind(this)
            );
        }.bind(this)
      );
      this.$12(a, f);
      this.$3.push(e);
      this.$8 ? this.$8.push(e) : e.send();
      return f;
    };
    t.prototype.genPrefetchMpdNow = function (a) {
      __p && __p();
      return b('regeneratorRuntime').async(
        function (b) {
          while (1)
            switch ((b.prev = b.next)) {
              case 0:
                if (!this.has(a)) {
                  b.next = 2;
                  break;
                }
                return b.abrupt('return', null);
              case 2:
                return b.abrupt('return', this.$10(a));
              case 3:
              case 'end':
                return b.stop();
            }
        },
        null,
        this
      );
    };
    t.prototype.$13 = function (a, b, c) {
      __p && __p();
      b === void 0 && (b = !1);
      c === void 0 && (c = null);
      var d = [];
      for (var e = 0; e < a.length; e++) {
        var f = t.createQueryStringURL(a[e]);
        this.has(f) ||
          (d.push(
            this.$10(f, b).then(function (a) {
              j('received', 1);
              return a;
            })
          ),
          c != null && this.$2.set(f, c));
      }
      j('sent', d.length);
      return d;
    };
    t.prototype.$14 = function (a) {
      __p && __p();
      var c = t.getConsolidatedURL(a);
      if (c == null) return this.$13(a);
      var d = new (b('XHRRequest'))(c)
        .setMethod('GET')
        .setResponseType('arraybuffer')
        .setTransportBuilder(p(c));
      l(d);
      var e = Date.now(),
        f = [];
      for (var g = 0; g < a.length; g++) {
        var h = t.createQueryStringURL(a[g]),
          i = new (b('Deferred'))();
        this.has(h) || this.$12(h, i.getPromise());
        f.push(i);
      }
      d.setErrorHandler(
        function (e) {
          this.$11(d);
          for (var a = 0; a < f.length; a++)
            f[a].reject(
              b('VideoPlayerShakaError').translateError(e, c, 'preload')
            );
        }.bind(this)
      );
      d.setResponseHandler(
        function (c) {
          var g = Date.now() - e;
          for (var b = 0; b < a.length; b++) {
            var h = f[b],
              i = a[b];
            h.resolve(r(c, i, g));
          }
          this.$11(d);
        }.bind(this)
      );
      d.setAbortHandler(function () {
        for (var b = 0; b < a.length; b++) {
          var c = f[b];
          c.reject(new Error('Request aborted.'));
        }
      });
      this.$3.push(d);
      d.send();
      j('consolidated.sent', 1);
      j('sent', f.length);
      h = f.map(function (a) {
        return a.getPromise().then(function (a) {
          j('received', 1);
          return a;
        });
      });
      b('Promise')
        .all(h)
        .then(function () {
          return j('consolidated.received', 1);
        });
      return h;
    };
    t.prototype.$15 = function (a) {
      __p && __p();
      var c = a.useCredentials,
        d = a.connectionQualityLevel;
      this.$5++;
      var e = this.$7 && !c;
      b('VideoPlayerPrefetchExperiments').enableGlobalSchedulerForPrefetch &&
        (this.$8 = []);
      var f = e ? this.$14(a.video) : this.$13(a.video, c, d);
      e = e ? this.$14(a.audio) : this.$13(a.audio, c, d);
      d = this.$13(a.manifest, c);
      var g = f.concat(e, d);
      if (this.$8) {
        var i = this.$8 || [];
        this.$8 = null;
        var j = '' + a.videoID;
        c = {
          name: 'prefetch task, ' + j,
          run: function () {
            j && n['delete'](j);
            i.forEach(function (a) {
              return a.send();
            });
            return b('MaybeNativePromise')
              .all(g)
              .then(function () {})
              ['catch'](function () {});
          },
          cancel: function () {},
        };
        h
          ? (b('VideoPlayerPrefetchExperiments')
              .switchPrefetchTaskToHighPriWhenPlayed &&
              j &&
              n.set(j, c),
            h
              .getQueue('video')
              .enqueue(c, b('VideoPlayerPrefetchExperiments').prefetchPriority),
            this.$16())
          : (c.run(),
            b('MaybeNativePromise')
              .all(g)
              .then(
                function () {
                  return this.$16();
                }.bind(this)
              )
              ['catch'](
                function () {
                  return this.$16();
                }.bind(this)
              ));
      } else
        b('MaybeNativePromise')
          .all(g)
          .then(
            function () {
              return this.$16();
            }.bind(this)
          )
          ['catch'](
            function () {
              return this.$16();
            }.bind(this)
          );
    };
    t.prototype.$12 = function (a, c) {
      (a = s(a)),
        this.$1.values().next().done &&
          b('Run').onLeave(
            function () {
              for (var a = 0; a < this.$3.length; a++) this.$3[a].abort();
              this.$3 = [];
              this.$4 = [];
              this.$5 = 0;
              this.$1.clear();
            }.bind(this)
          ),
        this.$1.set(a, c);
    };
    t.prototype.$11 = function (a) {
      a = this.$3.indexOf(a);
      a > -1 && this.$3.splice(a, 1);
    };
    t.prototype.$16 = function () {
      this.$5--;
      var a = this.$4.shift();
      a && this.$15(a);
    };
    t.prototype.has = function (a) {
      a = s(a);
      return this.$1.has(a);
    };
    t.prototype.getConnectionQualityLevel = function (a) {
      return this.$2.get(a);
    };
    t.prototype.getAndDelete = function (a) {
      a = s(a);
      var b = this.$1.get(a);
      b ? j('cache.hit', 1) : j('cache.miss', 1);
      this.$1['delete'](a);
      j('retrieve', 1);
      return b;
    };
    t.prototype.$17 = function (a) {
      a = s(a);
      a = this.$1.get(a);
      return a;
    };
    t.prototype.queueRequestBatch = function (a) {
      this.$6 === 0 || this.$5 < this.$6
        ? this.$15(a)
        : (j('queued', i(a)), this.$4.push(a));
    };
    t.prototype.setCachedRepresentations = function (a, b) {
      this.$9.set(a, b);
    };
    t.prototype.getCachedRepresentations = function (a) {
      return this.$9.get(a);
    };
    t.getCachedRepresentations = function (a) {
      return t.getInstance().getCachedRepresentations(a);
    };
    t.getInstance = function () {
      m === null && (m = new t());
      return m;
    };
    t.createQueryStringURL = function (a) {
      var c = a.url,
        d = a.start;
      a = a.end;
      d !== null &&
        d !== undefined &&
        a !== null &&
        a !== undefined &&
        (c = new (b('URI'))(c).addQueryData({ bytestart: d, byteend: a }));
      return c.toString();
    };
    t.getConsolidatedURL = function (a) {
      __p && __p();
      var b = '',
        c = Infinity,
        d = 0;
      for (var e = 0; e < a.length; e++) {
        var f = a[e],
          g = f.url,
          h = f.start;
        f = f.end;
        if (g == null || h == null || f == null) return null;
        if (b === '') b = g;
        else if (b !== g) return null;
        c = Math.min(c, h);
        d = Math.max(d, f);
      }
      return t.createQueryStringURL({ url: b, start: c, end: d });
    };
    t.getPrefetchInfoFromRepresentation = function (a) {
      return a.segments.map(function (b) {
        return { url: a.url, start: b.start, end: b.end };
      });
    };
    t.getVideoRepresentationFromRepresentations = function (a, c) {
      __p && __p();
      var d = a.find(function (a) {
        return a.representation_id.endsWith('d');
      });
      !c && g && (c = g.getBandwidth());
      if (!c) return d;
      var e = b('VideoPlayerShakaGlobalConfig').getNumber(
        'client_prefetch_bandwidth_aggressiveness',
        1
      );
      for (var f = 0; f < a.length; f++) {
        var h = a[f],
          i = (d && d.bandwidth) || 0;
        if (i > h.bandwidth) continue;
        else c > h.bandwidth / e && (d = h);
      }
      return d;
    };
    t.loadVideoGivenAllRepresentations = function (a, b, c) {
      __p && __p();
      if (t.isAutoplayBandwidthRestrained()) return;
      var d = [],
        e = [];
      b.audio.length > 0 &&
        ((d = t.getPrefetchInfoFromRepresentation(b.audio[0])),
        d.length > 0 && e.push(b.audio[0].representation_id));
      var f = [];
      b = t.getVideoRepresentationFromRepresentations(b.video, c);
      b &&
        ((f = t.getPrefetchInfoFromRepresentation(b)),
        f.length > 0 && e.push(b.representation_id));
      c = t.getInstance();
      c.queueRequestBatch({
        audio: d,
        video: f,
        manifest: [],
        videoID: a,
        useCredentials: !1,
      });
      c.setCachedRepresentations(a, e);
    };
    t.isAutoplayBandwidthRestrained = function () {
      return !!g && g.isAutoplayBandwidthRestrained();
    };
    t.loadVideo = function (a, c, d) {
      c = !!c;
      if (t.isAutoplayBandwidthRestrained()) return;
      if (b('VideoPlayerPrefetchExperiments').disablePrefetchCache) return;
      var e = t.getInstance();
      a.manifest || (a.manifest = []);
      e.queueRequestBatch({
        manifest: a.manifest.filter(q),
        video: a.video.filter(q),
        audio: a.audio.filter(q),
        videoID: a.videoID,
        useCredentials: c,
        connectionQualityLevel: d,
      });
    };
    t.getCacheValue = function (a) {
      return t.getInstance().getAndDelete(a);
    };
    t.getConnectionQualityLevel = function (a) {
      return t.getInstance().getConnectionQualityLevel(a);
    };
    t.hasCacheValue = function (a) {
      return t.getInstance().has(a);
    };
    t.getPrefetchTaskByID = function (a) {
      a = n.get(a) || null;
      return a;
    };
    e.exports = t;
  },
  null
);
__d(
  'VideoDisplayTimePlayButton',
  ['CSS', 'DataStore', 'Event'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {},
      h = '_spinner';
    a = {
      getClicked: function (a) {
        return b('DataStore').get(a, 'clicked', !1);
      },
      register: function (a, c) {
        var d = a.id;
        g[d] = b('Event').listen(a, 'click', function () {
          c && (b('CSS').hide(a), b('CSS').show(c)),
            b('DataStore').set(a, 'clicked', !0);
        });
        c &&
          (g[d + h] = b('Event').listen(c, 'click', function () {
            c && b('CSS').hide(c),
              b('CSS').show(a),
              b('DataStore').set(a, 'clicked', !1);
          }));
      },
      unregister: function (a) {
        a = a.id;
        Object.prototype.hasOwnProperty.call(g, a) && g[a].remove();
        a = a + h;
        Object.prototype.hasOwnProperty.call(g, a) && g[a].remove();
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'VideosRenderingInstrumentation',
  ['DataStore', 'VideoPlayerHTML5Experiments', 'performanceAbsoluteNow'],
  function (a, b, c, d, e, f) {
    var g = {
      storeRenderTime: function (a) {
        var c = b('VideoPlayerHTML5Experiments')
          .useMonotonicallyIncreasingTimers
          ? b('performanceAbsoluteNow')()
          : Date.now();
        b('DataStore').set(a, 'videos_rendering_instrumentation', c);
        return c;
      },
      retrieveRenderTime: function (a) {
        var c = b('DataStore').get(a, 'videos_rendering_instrumentation', NaN);
        Number.isNaN(c) && (c = g.storeRenderTime(a));
        return c;
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'BanzaiStreamPayloads',
  [],
  function (a, b, c, d, e, f) {
    var g = {};
    a = {
      addPayload: function (a, b) {
        g[a] = b;
      },
      removePayload: function (a) {
        delete g[a];
      },
      unload: function (a) {
        Object.keys(g).forEach(function (b) {
          b = g[b];
          a(b.route, b.payload);
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'SetIdleTimeoutAcrossTransitions',
  [
    'NavigationMetrics',
    'cancelIdleCallback',
    'clearTimeout',
    'nullthrows',
    'requestIdleCallbackAcrossTransitions',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = !1,
      h = new Map();
    c = {
      start: function (a, c) {
        if (g) {
          var d = b('setTimeoutAcrossTransitions')(function () {
            var c = b('requestIdleCallbackAcrossTransitions')(function () {
              a(), h['delete'](c);
            });
            h.set(d, c);
          }, c);
          return d;
        } else return b('setTimeoutAcrossTransitions')(a, c);
      },
      clear: function (a) {
        b('clearTimeout')(a),
          h.has(a) &&
            (b('cancelIdleCallback')(b('nullthrows')(h.get(a))),
            h['delete'](a));
      },
    };
    b('NavigationMetrics').addRetroactiveListener(
      b('NavigationMetrics').Events.EVENT_OCCURRED,
      function (b, c) {
        c.event === 'all_pagelets_loaded' && (g = !!a.requestIdleCallback);
      }
    );
    e.exports = c;
  },
  null
);
__d(
  'WebStorageMutex',
  ['WebStorage', 'clearTimeout', 'pageID', 'setTimeoutAcrossTransitions'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null,
      h = !1,
      i = b('pageID');
    function j() {
      h || ((h = !0), (g = b('WebStorage').getLocalStorage()));
      return g;
    }
    function a(a) {
      this.name = a;
    }
    a.testSetPageID = function (a) {
      i = a;
    };
    a.prototype.$1 = function () {
      if (!j()) return i;
      var a = j().getItem('mutex_' + this.name);
      a = a ? a.split(':') : null;
      return a && a[1] >= Date.now() ? a[0] : null;
    };
    a.prototype.$2 = function (a) {
      if (!j()) return;
      a = Date.now() + (a || 1e4);
      b('WebStorage').setItemGuarded(j(), 'mutex_' + this.name, i + ':' + a);
    };
    a.prototype.hasLock = function () {
      return this.$1() == i;
    };
    a.prototype.lock = function (a, c, d) {
      this.$3 && b('clearTimeout')(this.$3),
        i == (this.$1() || i) && this.$2(d),
        (this.$3 = b('setTimeoutAcrossTransitions')(
          function () {
            this.$3 = null;
            var b = this.hasLock() ? a : c;
            b && b(this);
          }.bind(this),
          0
        ));
    };
    a.prototype.unlock = function () {
      this.$3 && b('clearTimeout')(this.$3),
        j() && this.hasLock() && j().removeItem('mutex_' + this.name);
    };
    e.exports = a;
  },
  null
);
__d(
  'onAfterDisplay',
  ['NavigationMetrics', 'TimeSlice', 'requestIdleCallback'],
  function (a, b, c, d, e, f) {
    var g = [],
      h = !1;
    function a(a) {
      a = b('TimeSlice').guard(a, 'onAfterDisplay invocation', {
        propagationType: b('TimeSlice').PropagationType.ORPHAN,
      });
      h ? b('requestIdleCallback')(a) : g.push(a);
    }
    b('NavigationMetrics').addRetroactiveListener(
      b('NavigationMetrics').Events.EVENT_OCCURRED,
      function (a, c) {
        ['all_pagelets_displayed', 'e2e'].indexOf(c.event) > -1 &&
          !h &&
          ((h = !0),
          g.forEach(function (a) {
            b('requestIdleCallback')(a);
          }));
      }
    );
    e.exports = a;
  },
  null
);
__d(
  'BanzaiOld',
  [
    'BanzaiAdapter',
    'BanzaiStreamPayloads',
    'CurrentUser',
    'ErrorUtils',
    'ExecutionEnvironment',
    'FBJSON',
    'FBLogger',
    'NavigationMetrics',
    'SetIdleTimeoutAcrossTransitions',
    'TimeSlice',
    'Visibility',
    'WebStorage',
    'emptyFunction',
    'isInIframe',
    'lowerFacebookDomain',
    'onAfterDisplay',
    'pageID',
    'performanceAbsoluteNow',
    'WebStorageMutex',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = { adapter: b('BanzaiAdapter') },
      h = g.adapter,
      i = b('isInIframe')(),
      j = 'bz:',
      k = 'ods:banzai',
      l = 'send_via_beacon_failure',
      m = 0,
      n = 1,
      o = 2,
      p,
      q,
      r = [],
      s = null,
      t = [];
    function u(a) {
      return (
        a[2] >= b('performanceAbsoluteNow')() - (h.config.EXPIRY || g.EXPIRY)
      );
    }
    function v(a, b) {
      (a.__meta.status = m),
        (a[3] = (a[3] || 0) + 1),
        !a.__meta.retry && b >= 400 && b < 600 && r.push(a);
    }
    function w(a, c, d, e) {
      a = [a, c, d, 0];
      a.__meta = {
        retry: e === !0,
        pageID: b('pageID'),
        userID: b('CurrentUser').getID(),
        status: m,
      };
      return a;
    }
    function x() {
      __p && __p();
      var a = [];
      t.forEach(function (c) {
        var d = c.cb();
        d.forEach(function (d) {
          var e = c.route;
          if (e) {
            e = w(e, d, b('performanceAbsoluteNow')());
            e.__meta.onSuccess = c.onSuccess;
            e.__meta.onFailure = c.onFailure;
            a.push(e);
          }
        });
      });
      t = [];
      var c = [],
        d = [];
      C(c, d, !0, a);
      if (c.length > 0) {
        c[0].send_method = 'beacon';
        c.map(h.prepWadForTransit);
        c = new Blob([h.addRequestAuthData(h.prepForTransit(c))], {
          type: 'application/x-www-form-urlencoded',
        });
        c = navigator.sendBeacon(g.adapter.endpoint, c);
        c
          ? d.forEach(function (b) {
              return a.__meta && b.__meta.onSuccess && b.__meta.onSuccess();
            })
          : d.forEach(function (b) {
              return a.__meta && b.__meta.onFailure && b.__meta.onFailure();
            });
      }
    }
    function y(a) {
      __p && __p();
      var c = b('performanceAbsoluteNow')() + a;
      if (!q || c < q) {
        q = c;
        b('SetIdleTimeoutAcrossTransitions').clear(p);
        c = function () {
          p = b('SetIdleTimeoutAcrossTransitions').start(z, a);
        };
        c();
        return !0;
      }
      return !1;
    }
    var z = b('TimeSlice').guard(
      function () {
        A(null, null);
      },
      'Banzai.send',
      { propagationType: b('TimeSlice').PropagationType.ORPHAN }
    );
    function A(a, b) {
      __p && __p();
      q = null;
      y(g.BASIC.delay);
      if (!h.readyToSend()) {
        b && b();
        return;
      }
      h.inform(g.SEND);
      var c = [],
        d = [];
      r = C(c, d, !0, r);
      if (c.length <= 0) {
        h.inform(g.OK);
        a && a();
        return;
      }
      c[0].trigger = s;
      s = null;
      c[0].send_method = 'ajax';
      c.map(h.prepWadForTransit);
      h.send(
        c,
        function () {
          d.forEach(function (a) {
            (a.__meta.status = o), a.__meta.callback && a.__meta.callback();
          }),
            a && a();
        },
        function (a) {
          d.forEach(function (b) {
            v(b, a);
          }),
            b && b();
        }
      );
    }
    function B() {
      __p && __p();
      if (!(navigator && navigator.sendBeacon && h.isOkToSendViaBeacon()))
        return !1;
      var a = [],
        c = [];
      r = C(a, c, !1, r);
      if (a.length <= 0) return !1;
      a[0].send_method = 'beacon';
      a.map(h.prepWadForTransit);
      a = new Blob([h.addRequestAuthData(h.prepForTransit(a))], {
        type: 'application/x-www-form-urlencoded',
      });
      a = navigator.sendBeacon(g.adapter.endpoint, a);
      if (!a) {
        c.forEach(function (a) {
          r.push(a);
        });
        r.push(
          w(k, ((a = {}), (a[l] = [1]), a), b('performanceAbsoluteNow')())
        );
        return !1;
      }
      return !0;
    }
    function C(a, b, c, d) {
      __p && __p();
      var e = {};
      return d.filter(function (d) {
        __p && __p();
        var f = d.__meta;
        if (f.status >= o || !u(d)) return !1;
        if (f.status >= n) return !0;
        var g = f.compress != null ? f.compress : !0,
          h = f.pageID + f.userID + (g ? 'compress' : ''),
          i = e[h];
        i ||
          ((i = { user: f.userID, page_id: f.pageID, posts: [], snappy: g }),
          (e[h] = i),
          a.push(i));
        f.status = n;
        i.posts.push(d);
        b.push(d);
        return c && f.retry;
      });
    }
    var D,
      E,
      F = !1;
    function G() {
      F || ((F = !0), (E = b('WebStorage').getLocalStorage()));
      return E;
    }
    function H() {
      __p && __p();
      D ||
        (!i
          ? (D = {
              store: function () {
                var a = G();
                if (!a || r.length <= 0) return;
                var c = r.map(function (a) {
                  return [a[0], a[1], a[2], a[3] || 0, a.__meta];
                });
                r = [];
                b('WebStorage').setItemGuarded(
                  a,
                  j + b('pageID') + '.' + b('performanceAbsoluteNow')(),
                  b('FBJSON').stringify(c)
                );
              },
              restore: function () {
                __p && __p();
                var a = G();
                if (!a) return;
                var c = b('WebStorageMutex');
                new c('banzai').lock(function (c) {
                  __p && __p();
                  var d = [];
                  for (var f = 0; f < a.length; f++) {
                    var g = a.key(f);
                    g.indexOf(j) === 0 && g.indexOf('bz:__') !== 0 && d.push(g);
                  }
                  d.forEach(function (c) {
                    __p && __p();
                    var d = a.getItem(c);
                    a.removeItem(c);
                    if (!d) return;
                    c = b('FBJSON').parse(d, e.id);
                    c.forEach(function (a) {
                      if (!a) return;
                      var c = (a.__meta = a.pop()),
                        d = u(a);
                      if (!d) return;
                      d = b('CurrentUser').getID();
                      (c.userID === d || d === '0') &&
                        ((c.status = m), r.push(a));
                    });
                  });
                  c.unlock();
                });
              },
            })
          : (D = { store: b('emptyFunction'), restore: b('emptyFunction') }));
    }
    g.SEND = 'Banzai:SEND';
    g.OK = 'Banzai:OK';
    g.ERROR = 'Banzai:ERROR';
    g.SHUTDOWN = 'Banzai:SHUTDOWN';
    g.VITAL_WAIT = 1e3;
    g.BASIC_WAIT = 6e4;
    g.EXPIRY = 30 * 6e4;
    g.VITAL = { delay: h.config.MIN_WAIT || g.VITAL_WAIT };
    g.BASIC = { delay: h.config.MAX_WAIT || g.BASIC_WAIT };
    g.isEnabled = function (a) {
      return h.config.gks && h.config.gks[a];
    };
    g.post = function (c, d, e) {
      __p && __p();
      c ||
        b('FBLogger')('banzai').mustfix(
          'Banzai.post called without specifying a route'
        );
      e = e || {};
      var f = e.retry;
      if (h.config.disabled) return;
      if (!b('ExecutionEnvironment').canUseDOM) return;
      var j = h.config.blacklist;
      if (
        j &&
        j.indexOf &&
        typeof j.indexOf === 'function' &&
        j.indexOf(c) != -1
      )
        return;
      if (i && b('lowerFacebookDomain').isValidDocumentDomain()) {
        var k;
        try {
          k = a.top.require('Banzai');
        } catch (a) {
          k = null;
        }
        if (k) {
          k.post.apply(k, arguments);
          return;
        }
      }
      var l = w(c, d, b('performanceAbsoluteNow')(), f);
      e.callback && (l.__meta.callback = e.callback);
      e.compress != null && (l.__meta.compress = e.compress);
      var m = e.delay;
      m == null && (m = g.BASIC_WAIT);
      if (e.signal) {
        l.__meta.status = n;
        var p = [
          {
            user: b('CurrentUser').getID(),
            page_id: b('pageID'),
            posts: [l],
            trigger: c,
          },
        ];
        h.send(
          p,
          function () {
            (l.__meta.status = o), l.__meta.callback && l.__meta.callback();
          },
          function (a) {
            v(l, a);
          },
          !0
        );
        if (!f) return;
      }
      r.push(l);
      (y(m) || !s) && (s = c);
    };
    g.registerToSendWithBeacon = function (a, c, d, e) {
      if (!(navigator && navigator.sendBeacon && h.isOkToSendViaBeacon()))
        return !1;
      if (!a) {
        b('FBLogger')('banzai').mustfix(
          'Banzai.registerToSendWithBeacon called without specifying a route'
        );
        return !1;
      }
      t.push({ cb: c, route: a, onSuccess: d, onFailure: e });
      return !0;
    };
    g.flush = function (a, c) {
      b('SetIdleTimeoutAcrossTransitions').clear(p), (p = 0), A(a, c);
    };
    g.subscribe = h.subscribe;
    g.canUseNavigatorBeacon = function () {
      return navigator && navigator.sendBeacon && h.isOkToSendViaBeacon();
    };
    g._schedule = y;
    g._store = function (a) {
      H(), b('ErrorUtils').applyWithGuard(D.store, D);
    };
    g._restore = function (a) {
      H(),
        b('ErrorUtils').applyWithGuard(D.restore, D),
        y(h.config.RESTORE_WAIT || g.VITAL_WAIT);
    };
    g._unload = function () {
      b('BanzaiStreamPayloads').unload(g.post),
        navigator && navigator.sendBeacon && h.isOkToSendViaBeacon() && x(),
        h.cleanup(),
        h.inform(g.SHUTDOWN),
        r.length > 0 &&
          (!h.useBeacon || !B()) &&
          (H(), b('ErrorUtils').applyWithGuard(D.store, D));
    };
    g._testState = function () {
      return { postBuffer: r, triggerRoute: s };
    };
    (g._initialize = function () {
      b('ExecutionEnvironment').canUseDOM &&
        (h.useBeacon && b('Visibility').isSupported()
          ? b('Visibility').addListener(b('Visibility').HIDDEN, function () {
              r.length > 0 &&
                (B() || (H(), b('ErrorUtils').applyWithGuard(D.store, D)));
            })
          : h.setHooks(g),
        h.setUnloadHook(g),
        b('NavigationMetrics').addListener(
          b('NavigationMetrics').Events.NAVIGATION_DONE,
          function (a, c) {
            if (c.pageType !== 'normal') return;
            g._restore();
            b('NavigationMetrics').removeCurrentListener();
          }
        ));
    })();
    e.exports = g;
  },
  null
);
