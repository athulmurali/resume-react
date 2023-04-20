(function (g) {
  var window = this;
  var FCa = function (a, b) {
      return g.Tb(a, b);
    },
    i6 = function (a) {
      g.Om(a, 'zx', g.wb());
      return a;
    },
    j6 = function (a, b, c) {
      g.xa(c) || (c = [String(c)]);
      g.Rm(a.o, b, c);
    },
    GCa = function (a, b) {
      var c = [];
      g.Dk(
        b,
        function (a) {
          try {
            var b = g.oD.prototype.A.call(this, a, !0);
          } catch (f) {
            if ('Storage: Invalid value was encountered' == f) return;
            throw f;
          }
          g.u(b) ? g.nD(b) && c.push(a) : c.push(a);
        },
        a
      );
      return c;
    },
    HCa = function (a, b) {
      var c = GCa(a, b);
      (0, g.D)(
        c,
        function (a) {
          g.oD.prototype.remove.call(this, a);
        },
        a
      );
    },
    ICa = function (a) {
      if (a.Id) {
        if (a.Id.locationOverrideToken)
          return { locationOverrideToken: a.Id.locationOverrideToken };
        if (null != a.Id.latitudeE7 && null != a.Id.longitudeE7)
          return { latitudeE7: a.Id.latitudeE7, longitudeE7: a.Id.longitudeE7 };
      }
      return null;
    },
    JCa = function (a, b, c, d) {
      var e = new g.Fm(null, void 0);
      a && g.Gm(e, a);
      b && g.Hm(e, b);
      c && g.Im(e, c);
      d && g.Jm(e, d);
      return e;
    },
    KCa = function (a) {
      g.UF[a] &&
        ((a = g.UF[a]),
        (0, g.D)(a, function (a) {
          g.SF[a] && delete g.SF[a];
        }),
        (a.length = 0));
    },
    LCa = function (a) {
      var b = g.RF();
      if (b)
        if ((b.clear(a), a)) KCa(a);
        else for (var c in g.UF) KCa(c);
    },
    k6 = function (a) {
      this.app = this.name = this.id = '';
      this.type = 'REMOTE_CONTROL';
      this.obfuscatedGaiaId = this.avatar = this.username = '';
      this.B = !1;
      this.capabilities = new window.Set();
      this.experiments = new window.Set();
      this.theme = 'u';
      new g.zm();
      this.o = this.A = '';
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.app = a.app),
        (this.type = a.type || 'REMOTE_CONTROL'),
        (this.username = a.user || ''),
        (this.avatar = a.userAvatarUri || ''),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ''),
        (this.theme = a.theme || 'u'),
        MCa(this, a.capabilities || ''),
        NCa(this, a.experiments || ''),
        (this.A = a.remoteControllerUrl || ''),
        (this.o = a.localChannelEncryptionKey || ''));
    },
    MCa = function (a, b) {
      a.capabilities.clear();
      (0, g.Ud)(b.split(','), g.Da(FCa, OCa)).forEach(function (b) {
        a.capabilities.add(b);
      });
    },
    NCa = function (a, b) {
      a.experiments.clear();
      b.split(',').forEach(function (b) {
        a.experiments.add(b);
      });
    },
    l6 = function (a) {
      a = a || {};
      this.name = a.name || '';
      this.id = a.id || a.screenId || '';
      this.token = a.token || a.loungeToken || '';
      this.uuid = a.uuid || a.dialId || '';
    },
    m6 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    PCa = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
      };
    },
    QCa = function (a) {
      return new l6(a);
    },
    RCa = function (a) {
      return g.xa(a) ? (0, g.I)(a, QCa) : [];
    },
    n6 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            '..,token:' +
            (a.token ? '..' + a.token.slice(-6) : '-') +
            ',uuid:' +
            (a.uuid ? '..' + a.uuid.slice(-6) : '-') +
            '}'
        : 'null';
    },
    o6 = function (a) {
      return g.xa(a) ? '[' + (0, g.I)(a, n6).join(',') + ']' : 'null';
    },
    p6 = function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ('x' == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    SCa = function (a) {
      return (0, g.I)(a, function (a) {
        return { key: a.id, name: a.name };
      });
    },
    q6 = function (a, b) {
      return g.Ja(a, function (a) {
        return a || b ? (!a != !b ? !1 : a.id == b.id) : !0;
      });
    },
    r6 = function (a, b) {
      return g.Ja(a, function (a) {
        return m6(a, b);
      });
    },
    TCa = function () {
      var a = (0, g.SG)();
      a && HCa(a, a.o.de(!0));
    },
    s6 = function () {
      var a = g.VG('yt-remote-connected-devices') || [];
      g.eb(a);
      return a;
    },
    UCa = function (a) {
      if (g.Oa(a)) return [];
      var b = a[0].indexOf('#'),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return (0, g.I)(a, function (a, b) {
        return 0 == b ? a : a.substring(c.length);
      });
    },
    VCa = function (a) {
      g.UG('yt-remote-connected-devices', a, 86400);
    },
    u6 = function () {
      if (t6) return t6;
      var a = g.VG('yt-remote-device-id');
      a || ((a = p6()), g.UG('yt-remote-device-id', a, 31536e3));
      for (var b = s6(), c = 1, d = a; g.Na(b, d); ) c++, (d = a + '#' + c);
      return (t6 = d);
    },
    v6 = function () {
      var a = s6(),
        b = u6();
      g.Na(a, b);
      g.XG() && g.gb(a, b);
      a = UCa(a);
      if (g.Oa(a))
        try {
          g.CG('remote_sid');
        } catch (c) {}
      else
        try {
          g.BG('remote_sid', a.join(','), -1);
        } catch (c) {}
    },
    WCa = function () {
      return g.VG('yt-remote-session-browser-channel');
    },
    XCa = function () {
      return g.VG('yt-remote-local-screens') || [];
    },
    YCa = function () {
      g.UG('yt-remote-lounge-token-expiration', !0, 86400);
    },
    ZCa = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = (0, g.I)(XCa(), function (a) {
          return a.loungeToken;
        }),
        c = (0, g.I)(a, function (a) {
          return a.loungeToken;
        });
      (0, g.nm)(c, function (a) {
        return !g.Na(b, a);
      }) && YCa();
      g.UG('yt-remote-local-screens', a, 31536e3);
    },
    $Ca = function (a, b) {
      g.UG('yt-remote-session-browser-channel', a);
      g.UG('yt-remote-session-screen-id', b);
      var c = s6(),
        d = u6();
      g.Na(c, d) || c.push(d);
      VCa(c);
      v6();
    },
    w6 = function (a) {
      a ||
        (g.WG('yt-remote-session-screen-id'),
        g.WG('yt-remote-session-video-id'));
      v6();
      a = s6();
      g.Sa(a, u6());
      VCa(a);
    },
    aDa = function () {
      if (!x6) {
        var a = g.zD();
        a && (x6 = new g.iD(a));
      }
      return x6 ? !!x6.get('yt-remote-use-staging-server') : !1;
    },
    bDa = function () {
      var a = window.document.createElement('a');
      g.hd(a, 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js');
      a = a.href.replace(/^[a-zA-Z]+:\/\//, '//');
      return 'js-' + g.Ab(a);
    },
    cDa = function (a, b, c) {
      c = void 0 === c ? null : c;
      var d = g.Nd('SCRIPT');
      d.id = a;
      d.onload = function () {
        b && (0, window.setTimeout)(b, 0);
      };
      d.onreadystatechange = function () {
        switch (d.readyState) {
          case 'loaded':
          case 'complete':
            d.onload();
        }
      };
      c && d.setAttribute('nonce', c);
      g.jd(d, g.le('https://www.gstatic.com/cv/js/sender/v1/cast_sender.js'));
      a =
        window.document.getElementsByTagName('head')[0] || window.document.body;
      a.insertBefore(d, a.firstChild);
      return d;
    },
    dDa = function (a) {
      a = void 0 === a ? null : a;
      var b = bDa(),
        c = window.document.getElementById(b),
        d = c && g.bF(c, 'loaded');
      d ||
        (c && !d) ||
        (c = cDa(
          b,
          function () {
            g.bF(c, 'loaded') ||
              (g.aF(c, 'loaded', 'true'), g.YF(b), g.$D(g.Da(LCa, b), 0));
          },
          a
        ));
    },
    eDa = function () {
      var a = void 0 === a ? null : a;
      window.spf
        ? window.spf.script.load(
            'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js',
            '',
            void 0
          )
        : dDa(a);
    },
    y6 = function (a) {
      return (
        !!window.document.currentScript &&
        (-1 != window.document.currentScript.src.indexOf('?' + a) ||
          -1 != window.document.currentScript.src.indexOf('&' + a))
      );
    },
    fDa = function () {
      return 'function' == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    z6 = function (a) {
      a.length
        ? gDa(a.shift(), function () {
            z6(a);
          })
        : A6();
    },
    hDa = function (a) {
      return 'chrome-extension://' + a + B6;
    },
    gDa = function (a, b, c) {
      var d = window.document.createElement('script');
      d.onerror = b;
      c && (d.onload = c);
      d.src = a;
      (window.document.head || window.document.documentElement).appendChild(d);
    },
    C6 = function (a) {
      return 0 <= window.navigator.userAgent.indexOf(a);
    },
    A6 = function () {
      var a = fDa();
      a && a(!1, 'No cast extension found');
    },
    D6 = function () {
      if (iDa) {
        var a = 2,
          b = fDa(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        gDa(
          '//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js',
          A6,
          c
        );
      }
    },
    jDa = function () {
      var a =
        window.__gCrWeb &&
        window.__gCrWeb.message &&
        window.__gCrWeb.message.invokeOnHost;
      a && (D6(), a({ command: 'cast.sender.init' }));
    },
    kDa = function () {
      D6();
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      z6([
        '//www.gstatic.com/eureka/clank/' +
          (a ? (0, window.parseInt)(a[1], 10) : 0) +
          B6,
        '//www.gstatic.com/eureka/clank' + B6,
      ]);
    },
    E6 = function (a, b, c) {
      g.M.call(this);
      this.F = null != c ? (0, g.B)(a, c) : a;
      this.Bd = b;
      this.D = (0, g.B)(this.pL, this);
      this.o = !1;
      this.A = 0;
      this.B = this.Ea = null;
      this.C = [];
    },
    F6 = function () {},
    G6 = function (a, b, c, d) {
      this.o = a;
      this.B = b;
      this.G = c;
      this.F = d || 1;
      this.C = 45e3;
      this.Z = new g.Vm(this);
      this.A = new g.Ag();
      this.A.setInterval(250);
    },
    mDa = function (a, b, c) {
      a.tk = 1;
      a.Ph = i6(b.clone());
      a.yj = c;
      a.D = !0;
      lDa(a, null);
    },
    H6 = function (a, b, c, d, e) {
      a.tk = 1;
      a.Ph = i6(b.clone());
      a.yj = null;
      a.D = c;
      e && (a.rF = !1);
      lDa(a, d);
    },
    lDa = function (a, b) {
      a.ol = (0, g.H)();
      I6(a);
      a.ti = a.Ph.clone();
      j6(a.ti, 't', a.F);
      a.Tn = 0;
      a.Uc = a.o.Ws(a.o.Kn() ? b : null);
      0 < a.Pt && (a.Rq = new g.el((0, g.B)(a.HG, a, a.Uc), a.Pt));
      a.Z.W(a.Uc, 'readystatechange', a.FW);
      var c = a.Zi ? g.cc(a.Zi) : {};
      a.yj
        ? ((a.Lr = 'POST'),
          (c['Content-Type'] = 'application/x-www-form-urlencoded'),
          a.Uc.send(a.ti, a.Lr, a.yj, c))
        : ((a.Lr = 'GET'),
          a.rF && !g.Jd && (c.Connection = 'close'),
          a.Uc.send(a.ti, a.Lr, null, c));
      a.o.Hf(1);
    },
    pDa = function (a, b, c) {
      for (var d = !0; !a.Mi && a.Tn < c.length; ) {
        var e = nDa(a, c);
        if (e == J6) {
          4 == b && ((a.Qh = 4), K6(15), (d = !1));
          break;
        } else if (e == oDa) {
          a.Qh = 4;
          K6(16);
          d = !1;
          break;
        } else L6(a, e);
      }
      4 == b && 0 == c.length && ((a.Qh = 1), K6(17), (d = !1));
      a.Of = a.Of && d;
      d || (M6(a), N6(a));
    },
    nDa = function (a, b) {
      var c = a.Tn,
        d = b.indexOf('\n', c);
      if (-1 == d) return J6;
      c = Number(b.substring(c, d));
      if ((0, window.isNaN)(c)) return oDa;
      d += 1;
      if (d + c > b.length) return J6;
      var e = b.substr(d, c);
      a.Tn = d + c;
      return e;
    },
    rDa = function (a, b) {
      a.ol = (0, g.H)();
      I6(a);
      var c = b ? window.location.hostname : '';
      a.ti = a.Ph.clone();
      g.Om(a.ti, 'DOMAIN', c);
      g.Om(a.ti, 't', a.F);
      try {
        a.Pf = new window.ActiveXObject('htmlfile');
      } catch (n) {
        M6(a);
        a.Qh = 7;
        K6(22);
        N6(a);
        return;
      }
      var d = '<html><body>';
      if (b) {
        for (var e = '', f = 0; f < c.length; f++) {
          var k = c.charAt(f);
          if ('<' == k) e += '\\x3c';
          else if ('>' == k) e += '\\x3e';
          else {
            var l = k;
            if (l in O6) k = O6[l];
            else if (l in qDa) k = O6[l] = qDa[l];
            else {
              var m = l.charCodeAt(0);
              if (31 < m && 127 > m) k = l;
              else {
                if (256 > m) {
                  if (((k = '\\x'), 16 > m || 256 < m)) k += '0';
                } else (k = '\\u'), 4096 > m && (k += '0');
                k += m.toString(16).toUpperCase();
              }
              k = O6[l] = k;
            }
            e += k;
          }
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      c = g.kd(g.Ac('b/12014412'), d + '</body></html>');
      a.Pf.open();
      a.Pf.write(g.ad(c));
      a.Pf.close();
      a.Pf.parentWindow.m = (0, g.B)(a.NV, a);
      a.Pf.parentWindow.d = (0, g.B)(a.zE, a, !0);
      a.Pf.parentWindow.rpcClose = (0, g.B)(a.zE, a, !1);
      c = a.Pf.createElement('DIV');
      a.Pf.parentWindow.document.body.appendChild(c);
      d = g.Oc(a.ti.toString());
      d = g.qb(g.Lc(d));
      d = g.kd(g.Ac('b/12014412'), '<iframe src="' + d + '"></iframe>');
      g.gd(c, g.ad(d));
      a.o.Hf(1);
    },
    I6 = function (a) {
      a.wx = (0, g.H)() + a.C;
      sDa(a, a.C);
    },
    sDa = function (a, b) {
      if (null != a.Fl) throw Error('WatchDog timer not null');
      a.Fl = P6((0, g.B)(a.dW, a), b);
    },
    Q6 = function (a) {
      a.Fl && (g.x.clearTimeout(a.Fl), (a.Fl = null));
    },
    N6 = function (a) {
      a.o.DA() || a.Mi || a.o.Bq(a);
    },
    M6 = function (a) {
      Q6(a);
      g.lf(a.Rq);
      a.Rq = null;
      a.A.stop();
      g.an(a.Z);
      if (a.Uc) {
        var b = a.Uc;
        a.Uc = null;
        b.abort();
        b.dispose();
      }
      a.Pf && (a.Pf = null);
    },
    L6 = function (a, b) {
      try {
        a.o.rE(a, b), a.o.Hf(4);
      } catch (c) {}
    },
    uDa = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        tDa(a, b, function (e) {
          e
            ? c(!0)
            : g.x.setTimeout(function () {
                uDa(a, b, c, d, f);
              }, f);
        });
      }
    },
    tDa = function (a, b, c) {
      var d = new window.Image();
      d.onload = function () {
        try {
          R6(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          R6(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          R6(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          R6(d), c(!1);
        } catch (e) {}
      };
      g.x.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    R6 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    vDa = function (a) {
      this.o = a;
      this.A = new F6();
    },
    wDa = function (a) {
      var b = S6(a.o, a.Ol, '/mail/images/cleardot.gif');
      i6(b);
      uDa(b.toString(), 5e3, (0, g.B)(a.uK, a), 3, 2e3);
      a.Hf(1);
    },
    U6 = function (a) {
      var b = a.o.J;
      if (null != b)
        K6(5), b ? (K6(11), T6(a.o, a, !1)) : (K6(12), T6(a.o, a, !0));
      else if (
        ((a.Ge = new G6(a, void 0, void 0, void 0)),
        (a.Ge.Zi = a.Nt),
        (b = a.o),
        (b = S6(b, b.Kn() ? a.Dm : null, a.Ot)),
        K6(5),
        !g.Hd || g.sc(10))
      )
        j6(b, 'TYPE', 'xmlhttp'), H6(a.Ge, b, !1, a.Dm, !1);
      else {
        j6(b, 'TYPE', 'html');
        var c = a.Ge;
        a = !!a.Dm;
        c.tk = 3;
        c.Ph = i6(b.clone());
        rDa(c, a);
      }
    },
    V6 = function (a, b, c) {
      this.o = 1;
      this.A = [];
      this.C = [];
      this.D = new F6();
      this.H = a || null;
      this.J = null != b ? b : null;
      this.F = c || !1;
    },
    xDa = function (a, b) {
      this.o = a;
      this.map = b;
      this.context = null;
    },
    yDa = function (a) {
      g.nf.call(this, 'statevent', a);
    },
    zDa = function (a, b) {
      g.nf.call(this, 'timingevent', a);
      this.size = b;
    },
    ADa = function (a) {
      g.nf.call(this, 'serverreachability', a);
    },
    DDa = function (a) {
      BDa(a);
      if (3 == a.o) {
        var b = a.un++,
          c = a.jp.clone();
        g.Om(c, 'SID', a.B);
        g.Om(c, 'RID', b);
        g.Om(c, 'TYPE', 'terminate');
        W6(a, c);
        b = new G6(a, a.B, b, void 0);
        b.tk = 2;
        b.Ph = i6(c.clone());
        new window.Image().src = b.Ph;
        b.ol = (0, g.H)();
        I6(b);
      }
      CDa(a);
    },
    EDa = function (a) {
      a.QK(1, 0);
      a.jp = S6(a, null, a.Mt);
      X6(a);
    },
    BDa = function (a) {
      a.Ch && (a.Ch.abort(), (a.Ch = null));
      a.Ac && (a.Ac.cancel(), (a.Ac = null));
      a.Hg && (g.x.clearTimeout(a.Hg), (a.Hg = null));
      Y6(a);
      a.ie && (a.ie.cancel(), (a.ie = null));
      a.Hh && (g.x.clearTimeout(a.Hh), (a.Hh = null));
    },
    FDa = function (a, b) {
      if (0 == a.o)
        throw Error('Invalid operation: sending map when state is closed');
      a.A.push(new xDa(a.zR++, b));
      (2 != a.o && 3 != a.o) || X6(a);
    },
    X6 = function (a) {
      a.ie || a.Hh || ((a.Hh = P6((0, g.B)(a.xE, a), 0)), (a.hk = 0));
    },
    HDa = function (a, b) {
      if (1 == a.o) {
        if (!b) {
          a.un = Math.floor(1e5 * Math.random());
          var c = a.un++,
            d = new G6(a, '', c, void 0);
          d.Zi = null;
          var e = Z6(a),
            f = a.jp.clone();
          g.Om(f, 'RID', c);
          g.Om(f, 'CVER', '1');
          W6(a, f);
          mDa(d, f, e);
          a.ie = d;
          a.o = 2;
        }
      } else 3 == a.o && (b ? GDa(a, b) : 0 == a.A.length || a.ie || GDa(a));
    },
    GDa = function (a, b) {
      if (b)
        if (6 < a.Oi) {
          a.A = a.C.concat(a.A);
          a.C.length = 0;
          var c = a.un - 1;
          var d = Z6(a);
        } else (c = b.G), (d = b.yj);
      else (c = a.un++), (d = Z6(a));
      var e = a.jp.clone();
      g.Om(e, 'SID', a.B);
      g.Om(e, 'RID', c);
      g.Om(e, 'AID', a.Ik);
      W6(a, e);
      c = new G6(a, a.B, c, a.hk + 1);
      c.Zi = null;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.ie = c;
      mDa(c, e, d);
    },
    W6 = function (a, b) {
      if (a.Ad) {
        var c = a.Ad.kA();
        c &&
          g.Ib(c, function (a, c) {
            g.Om(b, c, a);
          });
      }
    },
    Z6 = function (a) {
      var b = Math.min(a.A.length, 1e3),
        c = ['count=' + b];
      if (6 < a.Oi && 0 < b) {
        var d = a.A[0].o;
        c.push('ofs=' + d);
      } else d = 0;
      for (var e = 0; e < b; e++) {
        var f = a.A[e].o,
          k = a.A[e].map;
        f = 6 >= a.Oi ? e : f - d;
        try {
          g.Ib(k, function (a, b) {
            c.push(
              'req' + f + '_' + b + '=' + (0, window.encodeURIComponent)(a)
            );
          });
        } catch (l) {
          c.push(
            'req' + f + '_type=' + (0, window.encodeURIComponent)('_badmap')
          );
        }
      }
      a.C = a.C.concat(a.A.splice(0, b));
      return c.join('&');
    },
    IDa = function (a) {
      a.Ac ||
        a.Hg ||
        ((a.G = 1), (a.Hg = P6((0, g.B)(a.wE, a), 0)), (a.Vj = 0));
    },
    $6 = function (a) {
      if (a.Ac || a.Hg || 3 <= a.Vj) return !1;
      a.G++;
      a.Hg = P6((0, g.B)(a.wE, a), JDa(a, a.Vj));
      a.Vj++;
      return !0;
    },
    T6 = function (a, b, c) {
      a.Jr = c;
      a.gg = b.Vg;
      a.F || EDa(a);
    },
    Y6 = function (a) {
      null != a.Pi && (g.x.clearTimeout(a.Pi), (a.Pi = null));
    },
    JDa = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    a7 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Ad && (c = null);
        var d = (0, g.B)(a.tX, a);
        c || ((c = new g.Fm('//www.google.com/images/cleardot.gif')), i6(c));
        tDa(c.toString(), 1e4, d);
      } else K6(2);
      KDa(a, b);
    },
    KDa = function (a, b) {
      a.o = 0;
      a.Ad && a.Ad.kz(b);
      CDa(a);
      BDa(a);
    },
    CDa = function (a) {
      a.o = 0;
      a.gg = -1;
      if (a.Ad)
        if (0 == a.C.length && 0 == a.A.length) a.Ad.Js();
        else {
          g.Wa(a.C);
          var b = g.Wa(a.A);
          a.C.length = 0;
          a.A.length = 0;
          a.Ad.Js(b);
        }
    },
    S6 = function (a, b, c) {
      var d = g.Pm(c);
      if ('' != d.A) b && g.Hm(d, b + '.' + d.A), g.Im(d, d.D);
      else {
        var e = window.location;
        d = JCa(e.protocol, b ? b + '.' + e.hostname : e.hostname, +e.port, c);
      }
      a.im &&
        g.Ib(a.im, function (a, b) {
          g.Om(d, b, a);
        });
      g.Om(d, 'VER', a.Oi);
      W6(a, d);
      return d;
    },
    P6 = function (a, b) {
      if (!g.za(a)) throw Error('Fn must not be null and must be a function');
      return g.x.setTimeout(function () {
        a();
      }, b);
    },
    K6 = function (a) {
      b7.dispatchEvent(new yDa(b7, a));
    },
    LDa = function () {},
    MDa = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    c7 = function (a, b) {
      g.M.call(this);
      this.o = new g.ku(this.EV, 0, this);
      g.N(this, this.o);
      this.Bd = 5e3;
      this.A = 0;
      if (g.za(a)) b && (a = (0, g.B)(a, b));
      else if (a && g.za(a.handleEvent)) a = (0, g.B)(a.handleEvent, a);
      else throw Error('Invalid listener argument');
      this.B = a;
    },
    d7 = function (a, b, c) {
      this.L = a;
      this.F = b;
      this.B = new g.hD();
      this.A = new c7(this.dY, this);
      this.o = this.ib = null;
      this.K = !1;
      this.D = null;
      this.J = '';
      this.H = this.C = 0;
      this.G = [];
      this.N = c || !1;
    },
    NDa = function (a) {
      return {
        firstTestResults: [''],
        secondTestResults: !a.o.Jr,
        sessionId: a.o.B,
        arrayId: a.o.Ik,
      };
    },
    ODa = function (a, b) {
      a.H = b || 0;
      a.A.stop();
      a.o && (3 == a.o.o && HDa(a.o), DDa(a.o));
      a.H = 0;
    },
    e7 = function (a) {
      return !!a.o && 3 == a.o.o;
    },
    PDa = function (a, b) {
      (a.F.loungeIdToken = b) || a.A.stop();
    },
    f7 = function (a) {
      this.port = this.domain = '';
      this.o = '/api/lounge';
      this.A = !0;
      a = a || window.document.location.href;
      var b = g.Pg(a) || '';
      b && (this.port = ':' + b);
      this.domain = g.Og(a) || '';
      a = g.Gb;
      0 <= a.search('MSIE') &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.zb(a, '10.0') && (this.A = !1));
    },
    g7 = function (a, b) {
      var c = a.o;
      if (g.u(void 0) ? 0 : a.A) c = 'https://' + a.domain + a.port + a.o;
      return g.Yg(c + b, {});
    },
    h7 = function (a, b, c, d, e) {
      a = {
        format: 'JSON',
        method: 'POST',
        context: a,
        timeout: 5e3,
        withCredentials: !1,
        onSuccess: g.Da(a.C, d, !0),
        onError: g.Da(a.B, e),
        Fd: g.Da(a.D, e),
      };
      c &&
        ((a.Pb = c),
        (a.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }));
      return g.qE(b, a);
    },
    TDa = function () {
      var a = QDa;
      RDa();
      i7.push(a);
      SDa(i7);
    },
    j7 = function (a, b) {
      RDa();
      var c = i7,
        d = UDa(a, String(b));
      g.Oa(c)
        ? VDa(d)
        : (SDa(c),
          (0, g.D)(c, function (a) {
            a(d);
          }));
    },
    RDa = function () {
      i7 ||
        ((i7 = g.y('yt.mdx.remote.debug.handlers_') || []),
        g.ua('yt.mdx.remote.debug.handlers_', i7, void 0));
    },
    VDa = function (a) {
      var b = (k7 + 1) % 50;
      k7 = b;
      l7[b] = a;
      m7 || (m7 = 49 == b);
    },
    SDa = function (a) {
      var b = l7;
      if (b[0]) {
        var c = k7,
          d = m7 ? c : -1;
        do {
          d = (d + 1) % 50;
          var e = b[d];
          (0, g.D)(a, function (a) {
            a(e);
          });
        } while (d != c);
        l7 = Array(50);
        k7 = -1;
        m7 = !1;
      }
    },
    UDa = function (a, b) {
      var c = ((0, g.H)() - WDa) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push('[', c + 's', '] ');
      d.push('[', 'yt.mdx.remote', '] ');
      d.push(a + ': ' + b, '\n');
      return d.join('');
    },
    n7 = function (a) {
      g.JF.call(this);
      this.G = a;
      this.o = [];
    },
    XDa = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c) {
        var d = c.name;
        c.id = b.id || c.id;
        c.name = b.name;
        c.token = b.token;
        c.uuid = b.uuid || c.uuid;
        return c.name != d;
      }
      a.o.push(b);
      return !0;
    },
    YDa = function (a, b) {
      var c = a.o.length != b.length;
      a.o = (0, g.Ud)(a.o, function (a) {
        return !!q6(b, a);
      });
      for (var d = 0, e = b.length; d < e; d++) c = XDa(a, b[d]) || c;
      return c;
    },
    ZDa = function (a, b) {
      var c = a.o.length;
      a.o = (0, g.Ud)(a.o, function (a) {
        return !(a || b ? (!a != !b ? 0 : a.id == b.id) : 1);
      });
      return a.o.length < c;
    },
    o7 = function (a, b, c, d) {
      g.JF.call(this);
      this.F = a;
      this.D = b;
      this.B = c;
      this.C = d;
      this.A = 0;
      this.o = null;
      this.Ea = window.NaN;
    },
    q7 = function (a) {
      n7.call(this, 'LocalScreenService');
      this.B = a;
      this.A = window.NaN;
      p7(this);
      this.info('Initializing with ' + o6(this.o));
    },
    $Da = function (a) {
      if (a.o.length) {
        var b = (0, g.I)(a.o, function (a) {
            return a.id;
          }),
          c = g7(a.B, '/pairing/get_lounge_token_batch');
        h7(
          a.B,
          c,
          { screen_ids: b.join(',') },
          (0, g.B)(a.CL, a),
          (0, g.B)(a.BL, a)
        );
      }
    },
    p7 = function (a) {
      var b = RCa(XCa());
      b = (0, g.Ud)(b, function (a) {
        return !a.uuid;
      });
      return YDa(a, b);
    },
    r7 = function (a, b) {
      ZCa((0, g.I)(a.o, PCa));
      b && YCa();
    },
    t7 = function (a, b) {
      g.JF.call(this);
      this.F = b;
      var c = g.VG('yt-remote-online-screen-ids') || '';
      c = c ? c.split(',') : [];
      for (var d = {}, e = this.F(), f = 0, k = e.length; f < k; ++f) {
        var l = e[f].id;
        d[l] = g.Na(c, l);
      }
      this.o = d;
      this.D = a;
      this.B = this.C = window.NaN;
      this.A = null;
      s7('Initialized with ' + g.Gg(this.o));
    },
    aEa = function (a, b, c) {
      var d = g7(a.D, '/pairing/get_screen_availability');
      h7(
        a.D,
        d,
        { lounge_token: b.token },
        (0, g.B)(function (a) {
          a = a.screens || [];
          for (var d = 0, e = a.length; d < e; ++d)
            if (a[d].loungeToken == b.token) {
              c('online' == a[d].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.B)(function () {
          c(!1);
        }, a)
      );
    },
    u7 = function (a, b) {
      a: if (g.Mb(b) != g.Mb(a.o)) var c = !1;
      else {
        c = g.Qb(b);
        for (var d = 0, e = c.length; d < e; ++d)
          if (!a.o[c[d]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        (s7('Updated online screens: ' + g.Gg(a.o)),
        (a.o = b),
        a.V('screenChange'));
      bEa(a);
    },
    v7 = function (a) {
      (0, window.isNaN)(a.B) || g.bE(a.B);
      a.B = g.$D((0, g.B)(a.Aw, a), 0 < a.C && a.C < (0, g.H)() ? 2e4 : 1e4);
    },
    s7 = function (a) {
      j7('OnlineScreenService', a);
    },
    cEa = function (a) {
      var b = {};
      (0, g.D)(a.F(), function (a) {
        a.token
          ? (b[a.token] = a.id)
          : this.hc('Requesting availability of screen w/o lounge token.');
      });
      return b;
    },
    bEa = function (a) {
      a = g.Qb(
        g.Jb(a.o, function (a) {
          return a;
        })
      );
      g.eb(a);
      a.length
        ? g.UG('yt-remote-online-screen-ids', a.join(','), 60)
        : g.WG('yt-remote-online-screen-ids');
    },
    w7 = function (a) {
      n7.call(this, 'ScreenService');
      this.F = a;
      this.A = this.B = null;
      this.C = [];
      this.D = {};
      dEa(this);
    },
    fEa = function (a, b, c, d, e, f) {
      a.info('getAutomaticScreenByIds ' + c + ' / ' + b);
      c || (c = a.D[b]);
      var k = a.Ae();
      if ((k = (c ? r6(k, c) : null) || r6(k, b))) {
        k.uuid = b;
        var l = x7(a, k);
        aEa(a.A, l, function (a) {
          e(a ? l : null);
        });
      } else
        c
          ? eEa(
              a,
              c,
              (0, g.B)(function (a) {
                var f = x7(
                  this,
                  new l6({
                    name: d,
                    screenId: c,
                    loungeToken: a,
                    dialId: b || '',
                  })
                );
                aEa(this.A, f, function (a) {
                  e(a ? f : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    gEa = function (a, b) {
      for (var c = 0, d = a.o.length; c < d; ++c)
        if (a.o[c].name == b) return a.o[c];
      return null;
    },
    eEa = function (a, b, c, d) {
      a.info('requestLoungeToken_ for ' + b);
      var e = {
        Pb: { screen_ids: b },
        method: 'POST',
        context: a,
        onSuccess: function (a, e) {
          var f = (e && e.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error('Missing lounge token in token response'));
        },
        onError: function () {
          d(Error('Request screen lounge token failed'));
        },
      };
      g.qE(g7(a.F, '/pairing/get_lounge_token_batch'), e);
    },
    hEa = function (a) {
      a.o = a.B.Ae();
      var b = a.D,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = 0;
      for (d = a.o.length; b < d; ++b) {
        var e = a.o[b];
        e.uuid = c[e.id] || '';
      }
      a.info('Updated manual screens: ' + o6(a.o));
    },
    dEa = function (a) {
      y7(a);
      a.B = new q7(a.F);
      a.B.subscribe('screenChange', (0, g.B)(a.RL, a));
      hEa(a);
      a.C = RCa(g.VG('yt-remote-automatic-screen-cache') || []);
      y7(a);
      a.info('Initializing automatic screens: ' + o6(a.C));
      a.A = new t7(a.F, (0, g.B)(a.Ae, a, !0));
      a.A.subscribe(
        'screenChange',
        (0, g.B)(function () {
          this.V('onlineScreenChange');
        }, a)
      );
    },
    x7 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = r6(a.C, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.C.push(b),
          g.UG('yt-remote-automatic-screen-cache', (0, g.I)(a.C, PCa)));
      y7(a);
      a.D[b.uuid] = b.id;
      g.UG('yt-remote-device-id-map', a.D, 31536e3);
      return b;
    },
    y7 = function (a) {
      a.D = g.VG('yt-remote-device-id-map') || {};
    },
    z7 = function (a, b, c) {
      g.JF.call(this);
      this.N = c;
      this.J = a;
      this.A = b;
      this.B = null;
    },
    A7 = function (a, b) {
      j7(a.N, b);
    },
    B7 = function (a, b) {
      z7.call(this, a, b, 'CastSession');
      this.o = null;
      this.C = 0;
      this.F = (0, g.B)(this.jY, this);
      this.D = (0, g.B)(this.pW, this);
      this.C = g.$D(
        (0, g.B)(function () {
          iEa(this, null);
        }, this),
        12e4
      );
    },
    jEa = function (a) {
      a.info('sendYoutubeMessage_: getMdxSessionStatus ' + g.Gg(void 0));
      var b = { type: 'getMdxSessionStatus' };
      a.o
        ? a.o.sendMessage(
            'urn:x-cast:com.google.youtube.mdx',
            b,
            g.z,
            (0, g.B)(function () {
              A7(this, 'Failed to send message: getMdxSessionStatus.');
            }, a)
          )
        : A7(a, 'Sending yt message without session: ' + g.Gg(b));
    },
    iEa = function (a, b) {
      g.bE(a.C);
      if (b) {
        if (
          (a.info('onConnectedScreenId_: Received screenId: ' + b),
          !a.B || a.B.id != b)
        ) {
          var c = (0, g.B)(a.Cq, a),
            d = (0, g.B)(a.Fe, a);
          a.tA(b, c, d, 5);
        }
      } else a.Fe(Error('Waiting for session status timed out.'));
    },
    C7 = function (a, b, c) {
      z7.call(this, a, b, 'DialSession');
      this.C = this.H = null;
      this.K = '';
      this.O = c;
      this.D = null;
      this.G = g.z;
      this.F = window.NaN;
      this.L = (0, g.B)(this.mY, this);
      this.o = g.z;
    },
    kEa = function (a) {
      a.o = a.J.OG(
        a.K,
        a.A.label,
        a.A.friendlyName,
        (0, g.B)(function (a) {
          this.o = g.z;
          this.Cq(a);
        }, a),
        (0, g.B)(function (a) {
          this.o = g.z;
          this.Fe(a);
        }, a)
      );
    },
    lEa = function (a) {
      var b = {};
      b.pairingCode = a.K;
      b.theme = a.O;
      if (a.D) {
        var c = a.D.currentTime || 0;
        b.v = a.D.videoId;
        b.t = c;
      }
      aDa() && (b.env_useStageMdx = 1);
      return g.Wg(b);
    },
    D7 = function (a, b) {
      z7.call(this, a, b, 'ManualSession');
      this.o = g.$D((0, g.B)(this.Kk, this, null), 150);
    },
    E7 = function (a, b, c, d) {
      g.JF.call(this);
      this.A = a;
      this.G = b || '233637DE';
      this.F = c || 'cl';
      this.H = d || !1;
      this.o = null;
      this.D = !1;
      this.B = [];
      this.C = (0, g.B)(this.QU, this);
    },
    mEa = function (a, b) {
      return b
        ? g.Ja(
            a.B,
            function (a) {
              return m6(b, a.label);
            },
            a
          )
        : null;
    },
    F7 = function (a) {
      j7('Controller', a);
    },
    QDa = function (a) {
      window.chrome &&
        window.chrome.cast &&
        window.chrome.cast.logMessage &&
        window.chrome.cast.logMessage(a);
    },
    G7 = function (a) {
      return a.D || !!a.B.length || !!a.o;
    },
    H7 = function (a, b, c) {
      b != a.o &&
        (g.lf(a.o),
        (a.o = b)
          ? (c
              ? a.V('yt-remote-cast2-receiver-resumed', b.A)
              : a.V('yt-remote-cast2-receiver-selected', b.A),
            b.subscribe('sessionScreen', (0, g.B)(a.uE, a, b)),
            b.B
              ? a.V('yt-remote-cast2-session-change', b.B)
              : c && a.o.Kk(null))
          : a.V('yt-remote-cast2-session-change', null));
    },
    nEa = function (a) {
      var b = a.A.NG(),
        c = a.o && a.o.A;
      a = (0, g.I)(
        b,
        function (a) {
          c && m6(a, c.label) && (c = null);
          var b = a.uuid ? a.uuid : a.id,
            d = mEa(this, a);
          d
            ? ((d.label = b), (d.friendlyName = a.name))
            : ((d = new window.chrome.cast.Receiver(b, a.name)),
              (d.receiverType = window.chrome.cast.ReceiverType.CUSTOM));
          return d;
        },
        a
      );
      c &&
        (c.receiverType != window.chrome.cast.ReceiverType.CUSTOM &&
          ((c = new window.chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = window.chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    tEa = function (a, b, c, d, e, f, k) {
      oEa()
        ? pEa(b, e, f, k) &&
          (J7(!0),
          window.chrome && window.chrome.cast && window.chrome.cast.isAvailable
            ? qEa(a, c)
            : ((window.__onGCastApiAvailable = function (b, d) {
                b
                  ? qEa(a, c)
                  : (K7('Failed to load cast API: ' + d),
                    L7(!1),
                    J7(!1),
                    g.WG('yt-remote-cast-available'),
                    g.WG('yt-remote-cast-receiver'),
                    rEa(),
                    c(!1));
              }),
              d
                ? eDa()
                : C6('CriOS')
                ? jDa()
                : C6('Android') &&
                  C6('Chrome/') &&
                  window.navigator.presentation
                ? kDa()
                : window.chrome && window.navigator.presentation && !C6('Edge')
                ? (D6(), z6(sEa.map(hDa)))
                : A6()))
        : I7('Cannot initialize because not running Chrome');
    },
    rEa = function () {
      I7('dispose');
      var a = M7();
      a && a.dispose();
      g.ua('yt.mdx.remote.cloudview.instance_', null, void 0);
      uEa(!1);
      g.WF(N7);
      N7.length = 0;
    },
    O7 = function () {
      return !!g.VG('yt-remote-cast-installed');
    },
    vEa = function () {
      var a = g.VG('yt-remote-cast-receiver');
      return a ? a.friendlyName : null;
    },
    wEa = function () {
      I7('clearCurrentReceiver');
      g.WG('yt-remote-cast-receiver');
    },
    xEa = function () {
      return O7()
        ? M7()
          ? M7().getCastSession()
          : (K7('getCastSelector: Cast is not initialized.'), null)
        : (K7('getCastSelector: Cast API is not installed!'), null);
    },
    Q7 = function () {
      O7()
        ? M7()
          ? P7()
            ? (I7('Requesting cast selector.'), M7().requestSession())
            : (I7('Wait for cast API to be ready to request the session.'),
              N7.push(g.VF('yt-remote-cast2-api-ready', Q7)))
          : K7('requestCastSelector: Cast is not initialized.')
        : K7('requestCastSelector: Cast API is not installed!');
    },
    R7 = function (a, b) {
      P7()
        ? M7().setConnectedScreenStatus(a, b)
        : K7('setConnectedScreenStatus called before ready.');
    },
    oEa = function () {
      var a = 0 <= g.Gb.search(/ (CrMo|Chrome|CriOS)\//);
      return g.lI || a;
    },
    yEa = function (a, b) {
      M7().init(a, b);
    },
    pEa = function (a, b, c, d) {
      var e = !1;
      M7() ||
        ((a = new E7(a, b, c, d)),
        a.subscribe('yt-remote-cast2-availability-change', function (a) {
          g.UG('yt-remote-cast-available', a);
          g.ZF('yt-remote-cast2-availability-change', a);
        }),
        a.subscribe('yt-remote-cast2-receiver-selected', function (a) {
          I7('onReceiverSelected: ' + a.friendlyName);
          g.UG('yt-remote-cast-receiver', a);
          g.ZF('yt-remote-cast2-receiver-selected', a);
        }),
        a.subscribe('yt-remote-cast2-receiver-resumed', function (a) {
          I7('onReceiverResumed: ' + a.friendlyName);
          g.UG('yt-remote-cast-receiver', a);
        }),
        a.subscribe('yt-remote-cast2-session-change', function (a) {
          I7('onSessionChange: ' + n6(a));
          a || g.WG('yt-remote-cast-receiver');
          g.ZF('yt-remote-cast2-session-change', a);
        }),
        g.ua('yt.mdx.remote.cloudview.instance_', a, void 0),
        (e = !0));
      I7('cloudview.createSingleton_: ' + e);
      return e;
    },
    M7 = function () {
      return g.y('yt.mdx.remote.cloudview.instance_');
    },
    qEa = function (a, b) {
      L7(!0);
      J7(!1);
      yEa(a, function (a) {
        a
          ? (uEa(!0), g.YF('yt-remote-cast2-api-ready'))
          : (K7('Failed to initialize cast API.'),
            L7(!1),
            g.WG('yt-remote-cast-available'),
            g.WG('yt-remote-cast-receiver'),
            rEa());
        b(a);
      });
    },
    I7 = function (a) {
      j7('cloudview', a);
    },
    K7 = function (a) {
      j7('cloudview', a);
    },
    L7 = function (a) {
      I7('setCastInstalled_ ' + a);
      g.UG('yt-remote-cast-installed', a);
    },
    P7 = function () {
      return !!g.y('yt.mdx.remote.cloudview.apiReady_');
    },
    uEa = function (a) {
      I7('setApiReady_ ' + a);
      g.ua('yt.mdx.remote.cloudview.apiReady_', a, void 0);
    },
    J7 = function (a) {
      g.ua('yt.mdx.remote.cloudview.initializing_', a, void 0);
    },
    S7 = function (a) {
      this.index = -1;
      this.videoId = this.listId = '';
      this.volume = this.o = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.G = this.H = 0;
      this.A = null;
      this.hasNext = this.kg = !1;
      this.K = this.J = this.B = this.D = 0;
      this.C = window.NaN;
      this.F = !1;
      this.reset(a);
    },
    T7 = function (a) {
      a.audioTrackId = null;
      a.A = null;
      a.o = -1;
      a.kg = !1;
      a.hasNext = !1;
      a.H = 0;
      a.G = (0, g.H)();
      a.D = 0;
      a.B = 0;
      a.J = 0;
      a.K = 0;
      a.C = window.NaN;
      a.F = !1;
    },
    U7 = function (a) {
      return a.rb() ? ((0, g.H)() - a.G) / 1e3 : 0;
    },
    V7 = function (a, b) {
      a.H = b;
      a.G = (0, g.H)();
    },
    W7 = function (a) {
      switch (a.o) {
        case 1:
        case 1081:
          return ((0, g.H)() - a.G) / 1e3 + a.H;
        case -1e3:
          return 0;
      }
      return a.H;
    },
    X7 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && T7(a);
    },
    Y7 = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.o;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.dc(a.A);
      b.hasPrevious = a.kg;
      b.hasNext = a.hasNext;
      b.playerTime = a.H;
      b.playerTimeAt = a.G;
      b.seekableStart = a.D;
      b.seekableEnd = a.B;
      b.duration = a.J;
      b.loadedTime = a.K;
      b.liveIngestionTime = a.C;
      return b;
    },
    $7 = function (a, b) {
      g.JF.call(this);
      this.o = 0;
      this.C = a;
      this.F = [];
      this.D = new g.xC();
      this.B = this.A = null;
      this.J = (0, g.B)(this.jS, this);
      this.G = (0, g.B)(this.xn, this);
      this.H = (0, g.B)(this.iS, this);
      this.K = (0, g.B)(this.vS, this);
      var c = 0;
      a
        ? ((c = a.getProxyState()),
          3 != c && (a.subscribe('proxyStateChange', this.Dx, this), zEa(this)))
        : (c = 3);
      0 != c &&
        (b
          ? this.Dx(c)
          : g.$D(
              (0, g.B)(function () {
                this.Dx(c);
              }, this),
              0
            ));
      var d = xEa();
      d && Z7(this, d);
      this.subscribe('yt-remote-cast2-session-change', this.K);
    },
    a8 = function (a) {
      return new S7(a.C.getPlayerContextData());
    },
    zEa = function (a) {
      (0, g.D)(
        'nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange'.split(
          ' '
        ),
        function (a) {
          this.F.push(this.C.subscribe(a, g.Da(this.LU, a), this));
        },
        a
      );
    },
    AEa = function (a) {
      (0, g.D)(
        a.F,
        function (a) {
          this.C.unsubscribeByKey(a);
        },
        a
      );
      a.F.length = 0;
    },
    b8 = function (a, b) {
      50 > a.D.Bc() && g.zC(a.D, b);
    },
    d8 = function (a, b, c) {
      var d = a8(a);
      V7(d, c);
      -1e3 != d.o && (d.o = b);
      c8(a, d);
    },
    e8 = function (a, b, c) {
      a.C.sendMessage(b, c);
    },
    c8 = function (a, b) {
      AEa(a);
      a.C.setPlayerContextData(Y7(b));
      zEa(a);
    },
    Z7 = function (a, b) {
      a.B &&
        (a.B.removeUpdateListener(a.J),
        a.B.removeMediaListener(a.G),
        a.xn(null));
      a.B = b;
      a.B &&
        (j7('CP', 'Setting cast session: ' + a.B.sessionId),
        a.B.addUpdateListener(a.J),
        a.B.addMediaListener(a.G),
        a.B.media.length && a.xn(a.B.media[0]));
    },
    BEa = function (a) {
      var b = a.A.media,
        c = a.A.customData;
      if (b && c) {
        var d = a8(a);
        b.contentId != d.videoId &&
          j7('CP', 'Cast changing video to: ' + b.contentId);
        d.videoId = b.contentId;
        d.o = c.playerState;
        V7(d, a.A.getEstimatedTime());
        c8(a, d);
      } else j7('CP', 'No cast media video. Ignoring state update.');
    },
    f8 = function (a, b, c) {
      return (0, g.B)(function (a) {
        this.hc(
          'Failed to ' + b + ' with cast v2 channel. Error code: ' + a.code
        );
        a.code != window.chrome.cast.ErrorCode.TIMEOUT &&
          (this.hc('Retrying ' + b + ' using MDx browser channel.'),
          e8(this, b, c));
      }, a);
    },
    g8 = function (a, b, c) {
      g.JF.call(this);
      this.D = window.NaN;
      this.O = !1;
      this.K = this.J = this.L = this.N = window.NaN;
      this.Y = [];
      this.C = this.G = this.B = this.jb = this.o = null;
      this.sa = a;
      this.Y.push(g.sF(window, 'beforeunload', (0, g.B)(this.tL, this)));
      this.A = [];
      this.jb = new S7();
      this.ca = b.id;
      this.o = CEa(this, c);
      this.o.subscribe('handlerOpened', this.nS, this);
      this.o.subscribe('handlerClosed', this.kS, this);
      this.o.subscribe('handlerError', this.lS, this);
      this.o.subscribe('handlerMessage', this.mS, this);
      PDa(this.o, b.token);
      this.subscribe(
        'remoteQueueChange',
        function () {
          var a = this.jb.videoId;
          g.XG() && g.UG('yt-remote-session-video-id', a);
        },
        this
      );
    },
    h8 = function (a) {
      j7('conn', a);
    },
    CEa = function (a, b) {
      return new d7(g7(a.sa, '/bc'), b);
    },
    i8 = function (a, b) {
      a.V('proxyStateChange', b);
    },
    DEa = function (a) {
      a.D = g.$D(
        (0, g.B)(function () {
          h8('Connecting timeout');
          this.F(1);
        }, a),
        2e4
      );
    },
    j8 = function (a) {
      g.bE(a.D);
      a.D = window.NaN;
    },
    k8 = function (a) {
      g.bE(a.N);
      a.N = window.NaN;
    },
    EEa = function (a) {
      l8(a);
      a.L = g.$D(
        (0, g.B)(function () {
          m8(this, 'getNowPlaying');
        }, a),
        2e4
      );
    },
    l8 = function (a) {
      g.bE(a.L);
      a.L = window.NaN;
    },
    GEa = function (a, b) {
      b && (j8(a), k8(a));
      b == (e7(a.o) && (0, window.isNaN)(a.D))
        ? b && (i8(a, 1), m8(a, 'getSubtitlesTrack'))
        : b
        ? (a.aa() && a.jb.reset(), i8(a, 1), m8(a, 'getNowPlaying'), FEa(a))
        : a.F(1);
    },
    HEa = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.jb.videoId &&
        (g.Wb(b.params) ? (a.jb.A = null) : (a.jb.A = b.params),
        a.V('remotePlayerChange'));
    },
    IEa = function (a, b) {
      var c = b.params.videoId || b.params.video_id,
        d = (0, window.parseInt)(b.params.currentIndex, 10);
      a.jb.listId = b.params.listId || a.jb.listId;
      X7(a.jb, c, d);
      a.V('remoteQueueChange');
    },
    KEa = function (a, b) {
      b.params = b.params || {};
      IEa(a, b);
      JEa(a, b);
      a.V('autoplayDismissed');
    },
    JEa = function (a, b) {
      var c = (0, window.parseInt)(
        b.params.currentTime || b.params.current_time,
        10
      );
      V7(a.jb, (0, window.isNaN)(c) ? 0 : c);
      c = (0, window.parseInt)(b.params.state, 10);
      c = (0, window.isNaN)(c) ? -1 : c;
      -1 == c && -1e3 == a.jb.o && (c = -1e3);
      a.jb.o = c;
      c = Number(b.params.loadedTime);
      a.jb.K = (0, window.isNaN)(c) ? 0 : c;
      c = Number(b.params.duration);
      a.jb.J = (0, window.isNaN)(c) ? 0 : c;
      c = a.jb;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.F = (0, window.isNaN)(d) ? !1 : !0;
      c = a.jb;
      d = Number(b.params.seekableStartTime);
      var e = Number(b.params.seekableEndTime);
      c.D = (0, window.isNaN)(d) ? 0 : d;
      c.B = (0, window.isNaN)(e) ? 0 : e;
      1 == a.jb.o ? EEa(a) : l8(a);
      a.V('remotePlayerChange');
    },
    LEa = function (a, b) {
      if (-1e3 != a.jb.o) {
        var c = 1085;
        switch ((0, window.parseInt)(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.jb.o = c;
        c = (0, window.parseInt)(b.params.currentTime, 10);
        V7(a.jb, (0, window.isNaN)(c) ? 0 : c);
        a.V('remotePlayerChange');
      }
    },
    MEa = function (a, b) {
      var c = 'true' == b.params.muted;
      a.jb.volume = (0, window.parseInt)(b.params.volume, 10);
      a.jb.muted = c;
      a.V('remotePlayerChange');
    },
    NEa = function (a, b) {
      a.G = b.params.videoId;
      a.V('nowAutoplaying', (0, window.parseInt)(b.params.timeout, 10));
    },
    OEa = function (a, b) {
      var c = 'true' == b.params.hasNext;
      a.jb.kg = 'true' == b.params.hasPrevious;
      a.jb.hasNext = c;
      a.V('previousNextChange');
    },
    FEa = function (a) {
      g.bE(a.K);
      a.K = g.$D((0, g.B)(a.F, a, 1), 864e5);
    },
    m8 = function (a, b, c) {
      c
        ? h8('Sending: action=' + b + ', params=' + g.Gg(c))
        : h8('Sending: action=' + b);
      a.o.sendMessage(b, c);
    },
    n8 = function (a) {
      n7.call(this, 'ScreenServiceProxy');
      this.hd = a;
      this.A = [];
      this.A.push(this.hd.$_s('screenChange', (0, g.B)(this.hY, this)));
      this.A.push(this.hd.$_s('onlineScreenChange', (0, g.B)(this.kU, this)));
    },
    TEa = function (a) {
      var b = { device: 'Desktop', app: 'youtube-desktop' };
      b = g.UD('MDX_CONFIG') || b;
      TCa();
      v6();
      o8 ||
        ((o8 = new f7(b ? b.loungeApiHost : void 0)),
        aDa() && (o8.o = '/api/loungedev'));
      p8 ||
        ((p8 = g.y('yt.mdx.remote.deferredProxies_') || []),
        g.ua('yt.mdx.remote.deferredProxies_', p8, void 0));
      PEa();
      var c = q8();
      if (!c) {
        var d = new w7(o8);
        g.ua('yt.mdx.remote.screenService_', d, void 0);
        c = q8();
        var e = !1,
          f = void 0,
          k = void 0,
          l = !1;
        b &&
          ((e = !!b.loadCastApiSetupScript),
          (f = b.appId),
          (k = b.theme),
          (l = !!b.disableDial));
        tEa(
          a,
          d,
          function (a) {
            a
              ? r8() && R7(r8(), 'YouTube TV')
              : d.subscribe('onlineScreenChange', function () {
                  g.ZF('yt-remote-receiver-availability-change');
                });
          },
          e,
          f,
          k,
          l
        );
      }
      b &&
        !g.y('yt.mdx.remote.initialized_') &&
        (g.ua('yt.mdx.remote.initialized_', !0, void 0),
        s8('Initializing: ' + g.Gg(b)),
        t8.push(
          g.VF('yt-remote-cast2-availability-change', function () {
            g.ZF('yt-remote-receiver-availability-change');
          })
        ),
        t8.push(
          g.VF('yt-remote-cast2-receiver-selected', function () {
            u8(null);
            g.ZF('yt-remote-auto-connect', 'cast-selector-receiver');
          })
        ),
        t8.push(
          g.VF('yt-remote-cast2-receiver-resumed', function () {
            g.ZF('yt-remote-receiver-resumed', 'cast-selector-receiver');
          })
        ),
        t8.push(g.VF('yt-remote-cast2-session-change', QEa)),
        t8.push(
          g.VF('yt-remote-connection-change', function (a) {
            a ? R7(r8(), 'YouTube TV') : v8() || (R7(null, null), wEa());
          })
        ),
        (a = w8()),
        b.isAuto && (a.id += '#dial'),
        g.PF('desktop_enable_autoplay') && (a.capabilities = ['atp']),
        (a.name = b.device),
        (a.app = b.app),
        (k = b.theme) && (a.theme = k),
        s8(' -- with channel params: ' + g.Gg(a)),
        REa(a),
        c.start(),
        r8() || SEa());
    },
    VEa = function () {
      var a = UEa();
      O7() &&
        g.VG('yt-remote-cast-available') &&
        a.push({ key: 'cast-selector-receiver', name: 'Cast...' });
      return a;
    },
    UEa = function () {
      var a = q8().hd.$_gos();
      var b = x8();
      b && y8() && (q6(a, b) || a.push(b));
      return SCa(a);
    },
    z8 = function () {
      var a = WEa();
      !a &&
        O7() &&
        vEa() &&
        (a = { key: 'cast-selector-receiver', name: vEa() });
      return a;
    },
    WEa = function () {
      var a = UEa(),
        b = x8();
      b || (b = v8());
      return g.Ja(a, function (a) {
        return b && m6(b, a.key) ? !0 : !1;
      });
    },
    x8 = function () {
      var a = r8();
      if (!a) return null;
      var b = q8().Ae();
      return r6(b, a);
    },
    QEa = function (a) {
      s8('remote.onCastSessionChange_: ' + n6(a));
      if (a) {
        var b = x8();
        b && b.id == a.id ? R7(b.id, 'YouTube TV') : (b && A8(), B8(a, 1));
      } else y8() && A8();
    },
    A8 = function () {
      P7() ? M7().stopSession() : K7('stopSession called before API ready.');
      var a = y8();
      a && (a.disconnect(1), C8(null));
    },
    D8 = function () {
      var a = y8();
      return !!a && 3 != a.getProxyState();
    },
    s8 = function (a) {
      j7('remote', a);
    },
    q8 = function () {
      if (!E8) {
        var a = g.y('yt.mdx.remote.screenService_');
        E8 = a ? new n8(a) : null;
      }
      return E8;
    },
    r8 = function () {
      return g.y('yt.mdx.remote.currentScreenId_');
    },
    XEa = function (a) {
      g.ua('yt.mdx.remote.currentScreenId_', a, void 0);
    },
    YEa = function () {
      return g.y('yt.mdx.remote.connectData_');
    },
    u8 = function (a) {
      g.ua('yt.mdx.remote.connectData_', a, void 0);
    },
    y8 = function () {
      return g.y('yt.mdx.remote.connection_');
    },
    C8 = function (a) {
      var b = y8();
      u8(null);
      a || XEa('');
      g.ua('yt.mdx.remote.connection_', a, void 0);
      p8 &&
        ((0, g.D)(p8, function (b) {
          b(a);
        }),
        (p8.length = 0));
      b && !a
        ? g.ZF('yt-remote-connection-change', !1)
        : !b && a && g.ZF('yt-remote-connection-change', !0);
    },
    v8 = function () {
      var a = g.XG();
      if (!a) return null;
      var b = q8().Ae();
      return r6(b, a);
    },
    B8 = function (a, b) {
      x8() && x8();
      XEa(a.id);
      var c = new g8(o8, a, w8());
      c.connect(b, YEa());
      c.subscribe('beforeDisconnect', function (a) {
        g.ZF('yt-remote-before-disconnect', a);
      });
      c.subscribe('beforeDispose', function () {
        y8() && C8(null);
      });
      C8(c);
    },
    SEa = function () {
      var a = v8();
      a
        ? (s8('Resume connection to: ' + n6(a)), B8(a, 0))
        : (w6(),
          wEa(),
          s8('Skipping connecting because no session screen found.'));
    },
    PEa = function () {
      var a = w8();
      if (g.Wb(a)) {
        a = u6();
        var b = g.VG('yt-remote-session-name') || '',
          c = g.VG('yt-remote-session-app') || '';
        a = { device: 'REMOTE_CONTROL', id: a, name: b, app: c, mdxVersion: 3 };
        g.ua('yt.mdx.remote.channelParams_', a, void 0);
      }
    },
    w8 = function () {
      return g.y('yt.mdx.remote.channelParams_') || {};
    },
    REa = function (a) {
      a
        ? (g.UG('yt-remote-session-app', a.app),
          g.UG('yt-remote-session-name', a.name))
        : (g.WG('yt-remote-session-app'), g.WG('yt-remote-session-name'));
      g.ua('yt.mdx.remote.channelParams_', a, void 0);
    },
    F8 = function (a, b, c) {
      g.M.call(this);
      this.G = a;
      this.T = b;
      this.A = new g.GF(this);
      g.N(this, this.A);
      this.A.R(b, 'onCaptionsTrackListChanged', this.CT);
      this.A.R(b, 'captionschanged', this.hS);
      this.A.R(b, 'captionssettingschanged', this.aG);
      this.A.R(b, 'videoplayerreset', this.Dq);
      this.A.R(b, 'mdxautoplaycancel', this.tK);
      this.O = this.A.R(b, 'onVolumeChange', this.bE);
      this.F = !1;
      this.o = c;
      c.subscribe('proxyStateChange', this.qE, this);
      c.subscribe('remotePlayerChange', this.An, this);
      c.subscribe('remoteQueueChange', this.Dq, this);
      c.subscribe('autoplayUpNext', this.MD, this);
      c.subscribe('previousNextChange', this.nE, this);
      c.subscribe('nowAutoplaying', this.eE, this);
      c.subscribe('autoplayDismissed', this.LD, this);
      this.suggestion = null;
      this.H = new g.FP(64);
      this.B = new g.ku(this.WF, 500, this);
      g.N(this, this.B);
      this.C = new g.ku(this.XF, 1e3, this);
      g.N(this, this.C);
      this.K = new E6(this.IX, 0, this);
      g.N(this, this.K);
      this.D = {};
      this.L = new g.ku(this.wG, 1e3, this);
      g.N(this, this.L);
      this.J = new g.el(this.lQ, 1e3, this);
      g.N(this, this.J);
      this.N = g.z;
      this.aG();
      this.Dq();
      this.An();
    },
    G8 = function (a, b) {
      var c = a.G,
        d = a.T.getVideoData().lengthSeconds;
      c.J = b || 0;
      c.o.V('progresssync', b, d);
    },
    ZEa = function (a) {
      G8(a, 0);
      a.B.stop();
      H8(a, new g.FP(64));
    },
    J8 = function (a, b) {
      if (I8(a) && !a.F) {
        var c = null;
        b && ((c = { style: a.T.rj() }), g.fc(c, b));
        a.o.LF(a.T.getVideoData(1).videoId, c);
        a.D = a8(a.o).A;
      }
    },
    K8 = function (a, b) {
      var c = a.T.sg();
      if (c) {
        var d = c.ye();
        var e = c.listId.toString();
      }
      var f = a.T.getVideoData(1);
      c = a.o;
      var k = f.videoId,
        l = d;
      d = f.playerParams;
      var m = f.Ck;
      f = ICa(f);
      var n = a8(c);
      l = l || 0;
      var q = { videoId: k, currentIndex: l };
      X7(n, k, l);
      g.u(b) && (V7(n, b), (q.currentTime = b));
      g.u(e) && (q.listId = e);
      null != d && (q.playerParams = d);
      null != m && (q.clickTrackingParams = m);
      null != f && (q.locationInfo = g.Gg(f));
      e8(c, 'setPlaylist', q);
      e || c8(c, n);
      H8(a, new g.FP(1));
    },
    $Ea = function (a, b) {
      if (b) {
        var c = a.T.Ec('captions', 'tracklist', { mB: 1 });
        c && c.length
          ? (a.T.Ud('captions', 'track', b), (a.F = !1))
          : (a.T.Sk('captions'), (a.F = !0));
      } else a.T.Ud('captions', 'track', {});
    },
    I8 = function (a) {
      return a8(a.o).videoId == a.T.getVideoData(1).videoId;
    },
    H8 = function (a, b) {
      a.C.stop();
      var c = a.H;
      if (!g.KP(c, b)) {
        var d = g.W(b, 2);
        d != g.W(a.H, 2) && g.eU(a.T, d);
        a.H = b;
        aFa(a.G, c, b);
      }
    },
    L8 = function (a) {
      g.V.call(this, {
        I: 'div',
        M: 'ytp-remote',
        P: [
          {
            I: 'div',
            M: 'ytp-remote-display-status',
            P: [
              { I: 'div', M: 'ytp-remote-display-status-icon', P: [g.pqa()] },
              {
                I: 'div',
                M: 'ytp-remote-display-status-text',
                da: '{{statustext}}',
              },
            ],
          },
        ],
      });
      this.B = new g.eV(this, 250);
      g.N(this, this.B);
      this.C = a;
      this.R(a, 'presentingplayerstatechange', this.D);
      bFa(this, g.aU(a));
    },
    bFa = function (a, b) {
      if (3 == a.C.Sa()) {
        var c = { RECEIVER_NAME: a.C.Ec('remote', 'currentReceiver').name };
        c = g.W(b, 128)
          ? g.GX('Error on $RECEIVER_NAME', c)
          : b.rb() || g.W(b, 4)
          ? g.GX('Playing on $RECEIVER_NAME', c)
          : g.GX('Connected to $RECEIVER_NAME', c);
        a.updateValue('statustext', c);
        a.B.show();
      } else a.B.hide();
    },
    M8 = function (a, b) {
      g.CY.call(this, 'Play on', 0, a, b);
      this.T = a;
      this.H = {};
      this.R(a, 'onMdxReceiversChange', this.K);
      this.R(a, 'presentingplayerstatechange', this.K);
      this.K();
    },
    N8 = function (a) {
      g.FU.call(this, a);
      this.B = { key: p6(), name: 'This computer' };
      this.D = null;
      this.F = [];
      this.K = this.A = null;
      this.H = [this.B];
      this.C = this.B;
      this.G = new g.FP(64);
      this.J = 0;
      if (!g.NM(g.X(this.o))) {
        a = this.o;
        var b = g.NH(a);
        b && (b = b.kn()) && ((b = new M8(a, b)), g.N(this, b));
        b = new L8(a);
        g.N(this, b);
        g.vU(a, b.element, 4);
      }
    },
    aFa = function (a, b, c) {
      a.G = c;
      a.o.V('presentingplayerstatechange', new g.PP(c, b));
    },
    O8 = function (a, b) {
      if (b.key != a.C.key)
        if (b.key == a.B.key) A8();
        else {
          a.C = b;
          var c = a.o.getPlaylistId();
          var d = a.o.getVideoData(1);
          var e = d.videoId;
          if (c || e) {
            var f = a.o.sg();
            if (f) {
              var k = [];
              for (var l = 0; l < f.getLength(); l++) k[l] = f.Yb(l).videoId;
            } else k = [e];
            f = a.o.getCurrentTime(1);
            c = {
              videoIds: k,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.Ck,
              index: Math.max(a.o.pC(), 0),
              currentTime: 0 == f ? void 0 : f,
            };
            (d = ICa(d)) && (c.locationInfo = d);
            d = c;
          } else d = null;
          s8('Connecting to: ' + g.Gg(b));
          'cast-selector-receiver' == b.key
            ? (u8(d || null),
              P7()
                ? M7().setLaunchParams(d || null)
                : K7('setLaunchParams called before ready.'))
            : !d && D8() && r8() == b.key
            ? g.ZF('yt-remote-connection-change', !0)
            : (A8(),
              u8(d || null),
              (d = q8().Ae()),
              (d = r6(d, b.key)) && B8(d, 1));
        }
    },
    qDa = {
      '\x00': '\\0',
      '\b': '\\b',
      '\f': '\\f',
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\x0B': '\\x0B',
      '"': '\\"',
      '\\': '\\\\',
      '<': '<',
    },
    O6 = { "'": "\\'" },
    cFa = {},
    OCa = { wZ: 'atp', d4: 'ska', t3: 'que', E2: 'mus', Y3: 'sus', G0: 'dsp' };
  k6.prototype.No = function () {
    var a = new k6({
      id: this.id,
      name: this.name,
      app: this.app,
      type: this.type,
      user: this.username,
      userAvatarUri: this.avatar,
      obfuscatedGaiaId: this.obfuscatedGaiaId,
      theme: this.theme,
      capabilities: Array.from(this.capabilities.values()).join(','),
      experiments: Array.from(this.experiments.values()).join(','),
    });
    a.B = this.B;
    a.A = this.A;
    a.o = this.o;
  };
  var x6,
    t6 = '',
    B6 = y6('loadGamesSDK') ? '/cast_game_sender.js' : '/cast_sender.js',
    iDa = y6('loadCastFramework') || y6('loadCastApplicationFramework'),
    sEa = [
      'pkedcjkdefgpdelpbcmbmeomcjbeemfm',
      'enhhojjnijigcajfphajepfemndkmdlo',
    ];
  g.C(E6, g.M);
  g.h = E6.prototype;
  g.h.oL = function (a) {
    this.C = arguments;
    this.o = !1;
    this.Ea
      ? (this.B = (0, g.H)() + this.Bd)
      : (this.Ea = g.Bg(this.D, this.Bd));
  };
  g.h.stop = function () {
    this.Ea && (g.Cg(this.Ea), (this.Ea = null));
    this.B = null;
    this.o = !1;
    this.C = [];
  };
  g.h.pause = function () {
    ++this.A;
  };
  g.h.resume = function () {
    this.A &&
      (--this.A,
      !this.A && this.o && ((this.o = !1), this.F.apply(null, this.C)));
  };
  g.h.X = function () {
    this.stop();
    E6.fa.X.call(this);
  };
  g.h.pL = function () {
    this.B
      ? ((this.Ea = g.Bg(this.D, this.B - (0, g.H)())), (this.B = null))
      : ((this.Ea = null),
        this.A ? (this.o = !0) : ((this.o = !1), this.F.apply(null, this.C)));
  };
  F6.prototype.stringify = function (a) {
    return g.x.JSON.stringify(a, void 0);
  };
  F6.prototype.parse = function (a) {
    return g.x.JSON.parse(a, void 0);
  };
  g.h = G6.prototype;
  g.h.Zi = null;
  g.h.Of = !1;
  g.h.Fl = null;
  g.h.wx = null;
  g.h.ol = null;
  g.h.tk = null;
  g.h.Ph = null;
  g.h.ti = null;
  g.h.yj = null;
  g.h.Uc = null;
  g.h.Tn = 0;
  g.h.Pf = null;
  g.h.Lr = null;
  g.h.Qh = null;
  g.h.Em = -1;
  g.h.rF = !0;
  g.h.Mi = !1;
  g.h.Pt = 0;
  g.h.Rq = null;
  var oDa = {},
    J6 = {};
  g.h = G6.prototype;
  g.h.setTimeout = function (a) {
    this.C = a;
  };
  g.h.FW = function (a) {
    a = a.target;
    var b = this.Rq;
    b && 3 == g.tx(a) ? b.Am() : this.HG(a);
  };
  g.h.HG = function (a) {
    try {
      if (a == this.Uc)
        a: {
          var b = g.tx(this.Uc),
            c = this.Uc.A,
            d = this.Uc.getStatus();
          if ((g.Hd && !g.sc(10)) || (g.Jd && !g.rc('420+'))) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.pf && !g.xx(this.Uc))) break a;
          this.Mi ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.o.Hf(3) : this.o.Hf(2));
          Q6(this);
          var e = this.Uc.getStatus();
          this.Em = e;
          var f = g.xx(this.Uc);
          (this.Of = 200 == e)
            ? (4 == b && M6(this),
              this.D
                ? (pDa(this, b, f),
                  g.pf &&
                    this.Of &&
                    3 == b &&
                    (this.Z.W(this.A, 'tick', this.AW), this.A.start()))
                : L6(this, f),
              this.Of &&
                !this.Mi &&
                (4 == b ? this.o.Bq(this) : ((this.Of = !1), I6(this))))
            : (400 == e && 0 < f.indexOf('Unknown SID')
                ? ((this.Qh = 3), K6(13))
                : ((this.Qh = 0), K6(14)),
              M6(this),
              N6(this));
        }
    } catch (k) {
      this.Uc && g.xx(this.Uc);
    } finally {
    }
  };
  g.h.AW = function () {
    var a = g.tx(this.Uc),
      b = g.xx(this.Uc);
    this.Tn < b.length &&
      (Q6(this), pDa(this, a, b), this.Of && 4 != a && I6(this));
  };
  g.h.NV = function (a) {
    P6((0, g.B)(this.MV, this, a), 0);
  };
  g.h.MV = function (a) {
    this.Mi || (Q6(this), L6(this, a), I6(this));
  };
  g.h.zE = function (a) {
    P6((0, g.B)(this.LV, this, a), 0);
  };
  g.h.LV = function (a) {
    this.Mi || (M6(this), (this.Of = a), this.o.Bq(this), this.o.Hf(4));
  };
  g.h.cancel = function () {
    this.Mi = !0;
    M6(this);
  };
  g.h.dW = function () {
    this.Fl = null;
    var a = (0, g.H)();
    0 <= a - this.wx
      ? (2 != this.tk && this.o.Hf(3),
        M6(this),
        (this.Qh = 2),
        K6(18),
        N6(this))
      : sDa(this, this.wx - a);
  };
  g.h = vDa.prototype;
  g.h.Nt = null;
  g.h.Ge = null;
  g.h.Sq = !1;
  g.h.EA = null;
  g.h.fp = null;
  g.h.Hu = null;
  g.h.Ot = null;
  g.h.Ze = null;
  g.h.Vg = -1;
  g.h.Dm = null;
  g.h.Ol = null;
  g.h.connect = function (a) {
    this.Ot = a;
    a = S6(this.o, null, this.Ot);
    K6(3);
    this.EA = (0, g.H)();
    var b = this.o.H;
    null != b
      ? ((this.Dm = b[0]),
        (this.Ol = b[1])
          ? ((this.Ze = 1), wDa(this))
          : ((this.Ze = 2), U6(this)))
      : (j6(a, 'MODE', 'init'),
        (this.Ge = new G6(this, void 0, void 0, void 0)),
        (this.Ge.Zi = this.Nt),
        H6(this.Ge, a, !1, null, !0),
        (this.Ze = 0));
  };
  g.h.uK = function (a) {
    if (a) (this.Ze = 2), U6(this);
    else {
      K6(4);
      var b = this.o;
      b.gg = b.Ch.Vg;
      a7(b, 9);
    }
    a && this.Hf(2);
  };
  g.h.Ws = function (a) {
    return this.o.Ws(a);
  };
  g.h.abort = function () {
    this.Ge && (this.Ge.cancel(), (this.Ge = null));
    this.Vg = -1;
  };
  g.h.DA = function () {
    return !1;
  };
  g.h.rE = function (a, b) {
    this.Vg = a.Em;
    if (0 == this.Ze)
      if (b) {
        try {
          var c = this.A.parse(b);
        } catch (d) {
          c = this.o;
          c.gg = this.Vg;
          a7(c, 2);
          return;
        }
        this.Dm = c[0];
        this.Ol = c[1];
      } else (c = this.o), (c.gg = this.Vg), a7(c, 2);
    else if (2 == this.Ze)
      if (this.Sq) K6(7), (this.Hu = (0, g.H)());
      else if ('11111' == b) {
        if (
          (K6(6),
          (this.Sq = !0),
          (this.fp = (0, g.H)()),
          (c = this.fp - this.EA),
          !g.Hd || g.sc(10) || 500 > c)
        )
          (this.Vg = 200), this.Ge.cancel(), K6(12), T6(this.o, this, !0);
      } else K6(8), (this.fp = this.Hu = (0, g.H)()), (this.Sq = !1);
  };
  g.h.Bq = function () {
    this.Vg = this.Ge.Em;
    if (this.Ge.Of)
      0 == this.Ze
        ? this.Ol
          ? ((this.Ze = 1), wDa(this))
          : ((this.Ze = 2), U6(this))
        : 2 == this.Ze &&
          ((!g.Hd || g.sc(10) ? !this.Sq : 200 > this.Hu - this.fp)
            ? (K6(11), T6(this.o, this, !1))
            : (K6(12), T6(this.o, this, !0)));
    else {
      0 == this.Ze ? K6(9) : 2 == this.Ze && K6(10);
      var a = this.o;
      a.gg = this.Vg;
      a7(a, 2);
    }
  };
  g.h.Kn = function () {
    return this.o.Kn();
  };
  g.h.isActive = function () {
    return this.o.isActive();
  };
  g.h.Hf = function (a) {
    this.o.Hf(a);
  };
  g.h = V6.prototype;
  g.h.im = null;
  g.h.ie = null;
  g.h.Ac = null;
  g.h.Mt = null;
  g.h.jp = null;
  g.h.az = null;
  g.h.yp = null;
  g.h.un = 0;
  g.h.zR = 0;
  g.h.Ad = null;
  g.h.Hh = null;
  g.h.Hg = null;
  g.h.Pi = null;
  g.h.Ch = null;
  g.h.Jr = null;
  g.h.Ik = -1;
  g.h.CB = -1;
  g.h.gg = -1;
  g.h.hk = 0;
  g.h.Vj = 0;
  g.h.Oi = 8;
  var b7 = new g.Of();
  g.C(yDa, g.nf);
  g.C(zDa, g.nf);
  g.C(ADa, g.nf);
  g.h = V6.prototype;
  g.h.connect = function (a, b, c, d, e) {
    K6(0);
    this.Mt = b;
    this.im = c || {};
    d && g.u(e) && ((this.im.OSID = d), (this.im.OAID = e));
    this.F ? (P6((0, g.B)(this.xz, this, a), 100), EDa(this)) : this.xz(a);
  };
  g.h.xz = function (a) {
    this.Ch = new vDa(this);
    this.Ch.Nt = null;
    this.Ch.A = this.D;
    this.Ch.connect(a);
  };
  g.h.DA = function () {
    return 0 == this.o;
  };
  g.h.xE = function (a) {
    this.Hh = null;
    HDa(this, a);
  };
  g.h.wE = function () {
    this.Hg = null;
    this.Ac = new G6(this, this.B, 'rpc', this.G);
    this.Ac.Zi = null;
    this.Ac.Pt = 0;
    var a = this.az.clone();
    g.Om(a, 'RID', 'rpc');
    g.Om(a, 'SID', this.B);
    g.Om(a, 'CI', this.Jr ? '0' : '1');
    g.Om(a, 'AID', this.Ik);
    W6(this, a);
    if (!g.Hd || g.sc(10))
      g.Om(a, 'TYPE', 'xmlhttp'), H6(this.Ac, a, !0, this.yp, !1);
    else {
      g.Om(a, 'TYPE', 'html');
      var b = this.Ac,
        c = !!this.yp;
      b.tk = 3;
      b.Ph = i6(a.clone());
      rDa(b, c);
    }
  };
  g.h.rE = function (a, b) {
    if (0 != this.o && (this.Ac == a || this.ie == a))
      if (((this.gg = a.Em), this.ie == a && 3 == this.o))
        if (7 < this.Oi) {
          try {
            var c = this.D.parse(b);
          } catch (f) {
            c = null;
          }
          if (g.xa(c) && 3 == c.length)
            if (0 == c[0])
              a: {
                if (!this.Hg) {
                  if (this.Ac)
                    if (this.Ac.ol + 3e3 < this.ie.ol)
                      Y6(this), this.Ac.cancel(), (this.Ac = null);
                    else break a;
                  $6(this);
                  K6(19);
                }
              }
            else
              (this.CB = c[1]),
                0 < this.CB - this.Ik &&
                  37500 > c[2] &&
                  this.Jr &&
                  0 == this.Vj &&
                  !this.Pi &&
                  (this.Pi = P6((0, g.B)(this.cS, this), 6e3));
          else a7(this, 11);
        } else b != cFa.z_.o && a7(this, 11);
      else if ((this.Ac == a && Y6(this), !g.F(b))) {
        c = this.D.parse(b);
        g.xa(c);
        for (var d = 0; d < c.length; d++) {
          var e = c[d];
          this.Ik = e[0];
          e = e[1];
          2 == this.o
            ? 'c' == e[0]
              ? ((this.B = e[1]),
                (this.yp = e[2]),
                (e = e[3]),
                null != e ? (this.Oi = e) : (this.Oi = 6),
                (this.o = 3),
                this.Ad && this.Ad.mz(),
                (this.az = S6(this, this.Kn() ? this.yp : null, this.Mt)),
                IDa(this))
              : 'stop' == e[0] && a7(this, 7)
            : 3 == this.o &&
              ('stop' == e[0]
                ? a7(this, 7)
                : 'noop' != e[0] && this.Ad && this.Ad.lz(e),
              (this.Vj = 0));
        }
      }
  };
  g.h.cS = function () {
    null != this.Pi &&
      ((this.Pi = null), this.Ac.cancel(), (this.Ac = null), $6(this), K6(20));
  };
  g.h.Bq = function (a) {
    if (this.Ac == a) {
      Y6(this);
      this.Ac = null;
      var b = 2;
    } else if (this.ie == a) (this.ie = null), (b = 1);
    else return;
    this.gg = a.Em;
    if (0 != this.o)
      if (a.Of)
        1 == b
          ? ((b = (0, g.H)() - a.ol),
            b7.dispatchEvent(new zDa(b7, a.yj ? a.yj.length : 0, b, this.hk)),
            X6(this),
            (this.C.length = 0))
          : IDa(this);
      else {
        var c = a.Qh,
          d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.gg))) {
          if ((d = 1 == b))
            this.ie || this.Hh || 1 == this.o || 2 <= this.hk
              ? (d = !1)
              : ((this.Hh = P6((0, g.B)(this.xE, this, a), JDa(this, this.hk))),
                this.hk++,
                (d = !0));
          d = !(d || (2 == b && $6(this)));
        }
        if (d)
          switch (c) {
            case 1:
              a7(this, 5);
              break;
            case 4:
              a7(this, 10);
              break;
            case 3:
              a7(this, 6);
              break;
            case 7:
              a7(this, 12);
              break;
            default:
              a7(this, 2);
          }
      }
  };
  g.h.QK = function (a) {
    if (!g.Na(arguments, this.o))
      throw Error('Unexpected channel state: ' + this.o);
  };
  g.h.tX = function (a) {
    a ? K6(2) : (K6(1), KDa(this, 8));
  };
  g.h.Ws = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.nx();
    a.H = !1;
    return a;
  };
  g.h.isActive = function () {
    return !!this.Ad && this.Ad.isActive(this);
  };
  g.h.Hf = function (a) {
    b7.dispatchEvent(new ADa(b7, a));
  };
  g.h.Kn = function () {
    return !(!g.Hd || g.sc(10));
  };
  g.h = LDa.prototype;
  g.h.mz = function () {};
  g.h.lz = function () {};
  g.h.kz = function () {};
  g.h.Js = function () {};
  g.h.kA = function () {
    return {};
  };
  g.h.isActive = function () {
    return !0;
  };
  g.C(c7, g.M);
  g.h = c7.prototype;
  g.h.EV = function () {
    this.Bd = Math.min(3e5, 2 * this.Bd);
    this.B();
    this.A && this.start();
  };
  g.h.start = function () {
    var a = this.Bd + 15e3 * Math.random();
    g.lu(this.o, a);
    this.A = (0, g.H)() + a;
  };
  g.h.stop = function () {
    this.o.stop();
    this.A = 0;
  };
  g.h.isActive = function () {
    return this.o.isActive();
  };
  g.h.reset = function () {
    this.o.stop();
    this.Bd = 5e3;
  };
  g.C(d7, LDa);
  g.h = d7.prototype;
  g.h.subscribe = function (a, b, c) {
    return this.B.subscribe(a, b, c);
  };
  g.h.unsubscribe = function (a, b, c) {
    return this.B.unsubscribe(a, b, c);
  };
  g.h.ae = function (a) {
    return this.B.ae(a);
  };
  g.h.V = function (a, b) {
    return this.B.V.apply(this.B, arguments);
  };
  g.h.dispose = function () {
    this.K ||
      ((this.K = !0), g.lf(this.B), ODa(this), g.lf(this.A), (this.A = null));
  };
  g.h.la = function () {
    return this.K;
  };
  g.h.connect = function (a, b, c) {
    if (!this.o || 2 != this.o.o) {
      this.J = '';
      this.A.stop();
      this.D = a || null;
      this.C = b || 0;
      a = this.L + '/test';
      b = this.L + '/bind';
      var d = new V6(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.N
        ),
        e = this.o;
      e && (e.Ad = null);
      d.Ad = this;
      this.o = d;
      e
        ? this.o.connect(a, b, this.F, e.B, e.Ik)
        : c
        ? this.o.connect(a, b, this.F, c.sessionId, c.arrayId)
        : this.o.connect(a, b, this.F);
    }
  };
  g.h.sendMessage = function (a, b) {
    var c = { _sc: a };
    b && g.fc(c, b);
    this.A.isActive() || 2 == (this.o ? this.o.o : 0)
      ? this.G.push(c)
      : e7(this) && FDa(this.o, c);
  };
  g.h.mz = function () {
    this.A.reset();
    this.D = null;
    this.C = 0;
    if (this.G.length) {
      var a = this.G;
      this.G = [];
      for (var b = 0, c = a.length; b < c; ++b) FDa(this.o, a[b]);
    }
    this.V('handlerOpened');
  };
  g.h.kz = function (a) {
    var b = 2 == a && 401 == this.o.gg;
    4 == a || b || this.A.start();
    this.V('handlerError', a);
  };
  g.h.Js = function (a) {
    if (!this.A.isActive()) this.V('handlerClosed');
    else if (a)
      for (var b = 0, c = a.length; b < c; ++b) {
        var d = a[b].map;
        d && this.G.push(d);
      }
  };
  g.h.kA = function () {
    var a = { v: 2 };
    this.J && (a.gsessionid = this.J);
    0 != this.C && (a.ui = '' + this.C);
    0 != this.H && (a.ui = '' + this.H);
    this.D && g.fc(a, this.D);
    return a;
  };
  g.h.lz = function (a) {
    'S' == a[0]
      ? (this.J = a[1])
      : 'gracefulReconnect' == a[0]
      ? (this.A.start(), DDa(this.o))
      : this.V('handlerMessage', new MDa(a[0], a[1]));
  };
  g.h.dY = function () {
    this.A.isActive();
    var a = this.o,
      b = 0;
    a.Ac && b++;
    a.ie && b++;
    0 != b || this.connect(this.D, this.C);
  };
  f7.prototype.C = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  f7.prototype.B = function (a, b) {
    a(Error('Request error: ' + b.status));
  };
  f7.prototype.D = function (a) {
    a(Error('request timed out'));
  };
  var WDa = (0, g.H)(),
    i7 = null,
    l7 = Array(50),
    k7 = -1,
    m7 = !1;
  g.C(n7, g.JF);
  n7.prototype.Ae = function () {
    return this.o;
  };
  n7.prototype.contains = function (a) {
    return !!q6(this.o, a);
  };
  n7.prototype.get = function (a) {
    return a ? r6(this.o, a) : null;
  };
  n7.prototype.info = function (a) {
    j7(this.G, a);
  };
  g.C(o7, g.JF);
  var dFa = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.h = o7.prototype;
  g.h.start = function () {
    !this.o && (0, window.isNaN)(this.Ea) && this.MG();
  };
  g.h.stop = function () {
    this.o && (this.o.abort(), (this.o = null));
    (0, window.isNaN)(this.Ea) || (g.bE(this.Ea), (this.Ea = window.NaN));
  };
  g.h.X = function () {
    this.stop();
    o7.fa.X.call(this);
  };
  g.h.MG = function () {
    this.Ea = window.NaN;
    this.o = g.qE(g7(this.F, '/pairing/get_screen'), {
      method: 'POST',
      Pb: { pairing_code: this.D },
      timeout: 5e3,
      onSuccess: (0, g.B)(this.fY, this),
      onError: (0, g.B)(this.eY, this),
      Fd: (0, g.B)(this.gY, this),
    });
  };
  g.h.fY = function (a, b) {
    this.o = null;
    var c = b.screen || {};
    c.dialId = this.B;
    c.name = this.C;
    this.V('pairingComplete', new l6(c));
  };
  g.h.eY = function (a) {
    this.o = null;
    a.status && 404 == a.status
      ? this.A >= dFa.length
        ? this.V('pairingFailed', Error('DIAL polling timed out'))
        : ((a = dFa[this.A]),
          (this.Ea = g.$D((0, g.B)(this.MG, this), a)),
          this.A++)
      : this.V('pairingFailed', Error('Server error ' + a.status));
  };
  g.h.gY = function () {
    this.o = null;
    this.V('pairingFailed', Error('Server not responding'));
  };
  g.C(q7, n7);
  g.h = q7.prototype;
  g.h.start = function () {
    p7(this) && this.V('screenChange');
    !g.VG('yt-remote-lounge-token-expiration') && $Da(this);
    g.bE(this.A);
    this.A = g.$D((0, g.B)(this.start, this), 1e4);
  };
  g.h.add = function (a, b) {
    p7(this);
    XDa(this, a);
    r7(this, !1);
    this.V('screenChange');
    b(a);
    a.token || $Da(this);
  };
  g.h.remove = function (a, b) {
    var c = p7(this);
    ZDa(this, a) && (r7(this, !1), (c = !0));
    b(a);
    c && this.V('screenChange');
  };
  g.h.Dr = function (a, b, c, d) {
    var e = p7(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), r7(this, !1), (e = !0)), c(a))
      : d(Error('no such local screen.'));
    e && this.V('screenChange');
  };
  g.h.X = function () {
    g.bE(this.A);
    q7.fa.X.call(this);
  };
  g.h.CL = function (a) {
    p7(this);
    var b = this.o.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    r7(this, !b);
    b && j7(this.G, 'Missed ' + b + ' lounge tokens.');
  };
  g.h.BL = function (a) {
    j7(this.G, 'Requesting lounge tokens failed: ' + a);
  };
  g.C(t7, g.JF);
  g.h = t7.prototype;
  g.h.start = function () {
    var a = (0, window.parseInt)(
      g.VG('yt-remote-fast-check-period') || '0',
      10
    );
    (this.C = (0, g.H)() - 144e5 < a ? 0 : a)
      ? v7(this)
      : ((this.C = (0, g.H)() + 3e5),
        g.UG('yt-remote-fast-check-period', this.C),
        this.Aw());
  };
  g.h.isEmpty = function () {
    return g.Wb(this.o);
  };
  g.h.update = function () {
    s7('Updating availability on schedule.');
    var a = this.F(),
      b = g.Jb(
        this.o,
        function (b, d) {
          return b && !!r6(a, d);
        },
        this
      );
    u7(this, b);
  };
  g.h.X = function () {
    g.bE(this.B);
    this.B = window.NaN;
    this.A && (this.A.abort(), (this.A = null));
    t7.fa.X.call(this);
  };
  g.h.Aw = function () {
    g.bE(this.B);
    this.B = window.NaN;
    this.A && this.A.abort();
    var a = cEa(this);
    if (g.Mb(a)) {
      var b = g7(this.D, '/pairing/get_screen_availability');
      this.A = h7(
        this.D,
        b,
        { lounge_token: g.Qb(a).join(',') },
        (0, g.B)(this.lV, this, a),
        (0, g.B)(this.kV, this)
      );
    } else u7(this, {}), v7(this);
  };
  g.h.lV = function (a, b) {
    this.A = null;
    var c = g.Qb(cEa(this));
    if (g.fb(c, g.Qb(a))) {
      c = b.screens || [];
      for (var d = {}, e = 0, f = c.length; e < f; ++e)
        d[a[c[e].loungeToken]] = 'online' == c[e].status;
      u7(this, d);
      v7(this);
    } else this.hc('Changing Screen set during request.'), this.Aw();
  };
  g.h.kV = function (a) {
    this.hc('Screen availability failed: ' + a);
    this.A = null;
    v7(this);
  };
  g.h.hc = function (a) {
    j7('OnlineScreenService', a);
  };
  g.C(w7, n7);
  g.h = w7.prototype;
  g.h.start = function () {
    this.B.start();
    this.A.start();
    this.o.length &&
      (this.V('screenChange'),
      this.A.isEmpty() || this.V('onlineScreenChange'));
  };
  g.h.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.h.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.A.update();
  };
  g.h.Dr = function (a, b, c, d) {
    this.B.contains(a)
      ? this.B.Dr(a, b, c, d)
      : ((a = 'Updating name of unknown screen: ' + a.name),
        j7(this.G, a),
        d(Error(a)));
  };
  g.h.Ae = function (a) {
    return a
      ? this.o
      : g.Va(
          this.o,
          (0, g.Ud)(
            this.C,
            function (a) {
              return !this.contains(a);
            },
            this
          )
        );
  };
  g.h.NG = function () {
    return (0, g.Ud)(
      this.Ae(!0),
      function (a) {
        return !!this.A.o[a.id];
      },
      this
    );
  };
  g.h.OG = function (a, b, c, d, e) {
    this.info('getDialScreenByPairingCode ' + a + ' / ' + b);
    var f = new o7(this.F, a, b, c);
    f.subscribe(
      'pairingComplete',
      (0, g.B)(function (a) {
        g.lf(f);
        d(x7(this, a));
      }, this)
    );
    f.subscribe('pairingFailed', function (a) {
      g.lf(f);
      e(a);
    });
    f.start();
    return (0, g.B)(f.stop, f);
  };
  g.h.iY = function (a, b, c, d) {
    g.qE(g7(this.F, '/pairing/get_screen'), {
      method: 'POST',
      Pb: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.B)(function (a, d) {
        var e = new l6(d.screen || {});
        if (!e.name || gEa(this, e.name)) {
          a: {
            var f = e.name;
            for (var m = 2, n = b(f, m); gEa(this, n); ) {
              m++;
              if (20 < m) break a;
              n = b(f, m);
            }
            f = n;
          }
          e.name = f;
        }
        c(x7(this, e));
      }, this),
      onError: (0, g.B)(function (a) {
        d(Error('pairing request failed: ' + a.status));
      }, this),
      Fd: (0, g.B)(function () {
        d(Error('pairing request timed out.'));
      }, this),
    });
  };
  g.h.X = function () {
    g.lf(this.B);
    g.lf(this.A);
    w7.fa.X.call(this);
  };
  g.h.RL = function () {
    hEa(this);
    this.V('screenChange');
    this.A.update();
  };
  w7.prototype.dispose = w7.prototype.dispose;
  g.C(z7, g.JF);
  g.h = z7.prototype;
  g.h.Cq = function (a) {
    this.B = a;
    this.V('sessionScreen', this.B);
  };
  g.h.Fe = function (a) {
    this.la() ||
      (a && A7(this, '' + a), (this.B = null), this.V('sessionScreen', null));
  };
  g.h.info = function (a) {
    j7(this.N, a);
  };
  g.h.QG = function () {
    return null;
  };
  g.h.Gw = function (a) {
    var b = this.A;
    a
      ? ((b.displayStatus = new window.chrome.cast.ReceiverDisplayStatus(
          a,
          []
        )),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    window.chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.B)(function () {
        this.info('Updated receiver status for ' + b.friendlyName + ': ' + a);
      }, this),
      (0, g.B)(function () {
        A7(this, 'Failed to update receiver status for: ' + b.friendlyName);
      }, this)
    );
  };
  g.h.X = function () {
    this.Gw('');
    z7.fa.X.call(this);
  };
  g.C(B7, z7);
  g.h = B7.prototype;
  g.h.Fw = function (a) {
    if (this.o) {
      if (this.o == a) return;
      A7(this, 'Overriding cast sesison with new session object');
      this.o.removeUpdateListener(this.F);
      this.o.removeMessageListener('urn:x-cast:com.google.youtube.mdx', this.D);
    }
    this.o = a;
    this.o.addUpdateListener(this.F);
    this.o.addMessageListener('urn:x-cast:com.google.youtube.mdx', this.D);
    jEa(this);
  };
  g.h.Kk = function (a) {
    this.info('launchWithParams no-op for Cast: ' + g.Gg(a));
  };
  g.h.stop = function () {
    this.o
      ? this.o.stop(
          (0, g.B)(function () {
            this.Fe();
          }, this),
          (0, g.B)(function () {
            this.Fe(Error('Failed to stop receiver app.'));
          }, this)
        )
      : this.Fe(Error('Stopping cast device witout session.'));
  };
  g.h.Gw = g.z;
  g.h.X = function () {
    this.info('disposeInternal');
    g.bE(this.C);
    this.C = 0;
    this.o &&
      (this.o.removeUpdateListener(this.F),
      this.o.removeMessageListener(
        'urn:x-cast:com.google.youtube.mdx',
        this.D
      ));
    this.o = null;
    B7.fa.X.call(this);
  };
  g.h.pW = function (a, b) {
    if (!this.la())
      if (b) {
        var c = g.hx(b);
        if (g.Aa(c)) {
          var d = '' + c.type;
          c = c.data || {};
          this.info('onYoutubeMessage_: ' + d + ' ' + g.Gg(c));
          switch (d) {
            case 'mdxSessionStatus':
              iEa(this, c.screenId);
              break;
            default:
              A7(this, 'Unknown youtube message: ' + d);
          }
        } else A7(this, 'Unable to parse message.');
      } else A7(this, 'No data in message.');
  };
  g.h.tA = function (a, b, c, d) {
    fEa(
      this.J,
      this.A.label,
      a,
      this.A.friendlyName,
      (0, g.B)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (A7(
              this,
              'Screen ' + a + ' appears to be offline. ' + d + ' retries left.'
            ),
            g.$D((0, g.B)(this.tA, this, a, b, c, d - 1), 300))
          : c(Error('Unable to fetch screen.'));
      }, this),
      c
    );
  };
  g.h.QG = function () {
    return this.o;
  };
  g.h.jY = function (a) {
    this.la() || a || (A7(this, 'Cast session died.'), this.Fe());
  };
  g.C(C7, z7);
  g.h = C7.prototype;
  g.h.Fw = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.L);
  };
  g.h.Kk = function (a) {
    this.D = a;
    this.G();
  };
  g.h.stop = function () {
    this.o();
    this.o = g.z;
    g.bE(this.F);
    this.C
      ? this.C.stop(
          (0, g.B)(this.Fe, this, null),
          (0, g.B)(this.Fe, this, 'Failed to stop DIAL device.')
        )
      : this.Fe();
  };
  g.h.X = function () {
    this.o();
    this.o = g.z;
    g.bE(this.F);
    this.C && this.C.removeUpdateListener(this.L);
    this.C = null;
    C7.fa.X.call(this);
  };
  g.h.mY = function (a) {
    this.la() ||
      a ||
      (A7(this, 'DIAL session died.'), this.o(), (this.o = g.z), this.Fe());
  };
  g.h.uu = function (a) {
    this.K = p6();
    if (this.D) {
      var b = new window.chrome.cast.DialLaunchResponse(!0, lEa(this));
      a(b);
      kEa(this);
    } else
      (this.G = (0, g.B)(function () {
        g.bE(this.F);
        this.G = g.z;
        this.F = window.NaN;
        var b = new window.chrome.cast.DialLaunchResponse(!0, lEa(this));
        a(b);
        kEa(this);
      }, this)),
        (this.F = g.$D(
          (0, g.B)(function () {
            this.G();
          }, this),
          100
        ));
  };
  g.h.fN = function (a, b, c) {
    fEa(
      this.J,
      this.H.receiver.label,
      a,
      this.A.friendlyName,
      (0, g.B)(function (a) {
        a && a.token
          ? (this.Cq(a), b(new window.chrome.cast.DialLaunchResponse(!1)))
          : this.uu(b, c);
      }, this),
      (0, g.B)(function (a) {
        A7(this, 'Failed to get DIAL screen: ' + a);
        this.uu(b, c);
      }, this)
    );
  };
  g.C(D7, z7);
  D7.prototype.stop = function () {
    this.Fe();
  };
  D7.prototype.Fw = g.z;
  D7.prototype.Kk = function () {
    g.bE(this.o);
    this.o = window.NaN;
    var a = r6(this.J.Ae(), this.A.label);
    a ? this.Cq(a) : this.Fe(Error('No such screen'));
  };
  D7.prototype.X = function () {
    g.bE(this.o);
    this.o = window.NaN;
    D7.fa.X.call(this);
  };
  g.C(E7, g.JF);
  g.h = E7.prototype;
  g.h.init = function (a, b) {
    window.chrome.cast.timeout.requestSession = 3e4;
    var c = new window.chrome.cast.SessionRequest(this.G);
    this.H || (c.dialRequest = new window.chrome.cast.DialRequest('YouTube'));
    var d = window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,
      e = a
        ? window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    c = new window.chrome.cast.ApiConfig(
      c,
      (0, g.B)(this.tE, this),
      (0, g.B)(this.UU, this),
      d,
      e
    );
    c.customDialLaunchCallback = (0, g.B)(this.MS, this);
    window.chrome.cast.initialize(
      c,
      (0, g.B)(function () {
        this.la() ||
          (window.chrome.cast.addReceiverActionListener(this.C),
          TDa(),
          this.A.subscribe('onlineScreenChange', (0, g.B)(this.PG, this)),
          (this.B = nEa(this)),
          window.chrome.cast.setCustomReceivers(
            this.B,
            g.z,
            (0, g.B)(function (a) {
              this.hc('Failed to set initial custom receivers: ' + g.Gg(a));
            }, this)
          ),
          this.V('yt-remote-cast2-availability-change', G7(this)),
          b(!0));
      }, this),
      (0, g.B)(function (a) {
        this.hc('Failed to initialize API: ' + g.Gg(a));
        b(!1);
      }, this)
    );
  };
  g.h.bX = function (a, b) {
    F7('Setting connected screen ID: ' + a + ' -> ' + b);
    if (this.o) {
      var c = this.o.B;
      if (!a || (c && c.id != a))
        F7('Unsetting old screen status: ' + this.o.A.friendlyName),
          H7(this, null);
    }
    if (a && b) {
      if (!this.o) {
        c = r6(this.A.Ae(), a);
        if (!c) {
          F7('setConnectedScreenStatus: Unknown screen.');
          return;
        }
        var d = mEa(this, c);
        d ||
          (F7('setConnectedScreenStatus: Connected receiver not custom...'),
          (d = new window.chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name)),
          (d.receiverType = window.chrome.cast.ReceiverType.CUSTOM),
          this.B.push(d),
          window.chrome.cast.setCustomReceivers(
            this.B,
            g.z,
            (0, g.B)(function (a) {
              this.hc('Failed to set initial custom receivers: ' + g.Gg(a));
            }, this)
          ));
        F7('setConnectedScreenStatus: new active receiver: ' + d.friendlyName);
        H7(this, new D7(this.A, d), !0);
      }
      this.o.Gw(b);
    } else F7('setConnectedScreenStatus: no screen.');
  };
  g.h.cX = function (a) {
    this.la()
      ? this.hc('Setting connection data on disposed cast v2')
      : this.o
      ? this.o.Kk(a)
      : this.hc('Setting connection data without a session');
  };
  g.h.lY = function () {
    this.la()
      ? this.hc('Stopping session on disposed cast v2')
      : this.o
      ? (this.o.stop(), H7(this, null))
      : F7('Stopping non-existing session');
  };
  g.h.requestSession = function () {
    window.chrome.cast.requestSession(
      (0, g.B)(this.tE, this),
      (0, g.B)(this.pV, this)
    );
  };
  g.h.X = function () {
    this.A.unsubscribe('onlineScreenChange', (0, g.B)(this.PG, this));
    window.chrome &&
      window.chrome.cast &&
      window.chrome.cast.removeReceiverActionListener(this.C);
    g.Sa(g.y('yt.mdx.remote.debug.handlers_') || [], QDa);
    g.lf(this.o);
    E7.fa.X.call(this);
  };
  g.h.hc = function (a) {
    j7('Controller', a);
  };
  g.h.uE = function (a, b) {
    this.o == a &&
      (b || H7(this, null), this.V('yt-remote-cast2-session-change', b));
  };
  g.h.QU = function (a, b) {
    if (!this.la())
      if (a)
        switch (
          ((a.friendlyName = window.chrome.cast.unescape(a.friendlyName)),
          F7(
            'onReceiverAction_ ' + a.label + ' / ' + a.friendlyName + '-- ' + b
          ),
          b)
        ) {
          case window.chrome.cast.ReceiverAction.CAST:
            if (this.o)
              if (this.o.A.label != a.label)
                F7(
                  'onReceiverAction_: Stopping active receiver: ' +
                    this.o.A.friendlyName
                ),
                  this.o.stop();
              else {
                F7('onReceiverAction_: Casting to active receiver.');
                this.o.B && this.V('yt-remote-cast2-session-change', this.o.B);
                break;
              }
            switch (a.receiverType) {
              case window.chrome.cast.ReceiverType.CUSTOM:
                H7(this, new D7(this.A, a));
                break;
              case window.chrome.cast.ReceiverType.DIAL:
                H7(this, new C7(this.A, a, this.F));
                break;
              case window.chrome.cast.ReceiverType.CAST:
                H7(this, new B7(this.A, a));
                break;
              default:
                this.hc('Unknown receiver type: ' + a.receiverType);
            }
            break;
          case window.chrome.cast.ReceiverAction.STOP:
            this.o && this.o.A.label == a.label
              ? this.o.stop()
              : this.hc('Stopping receiver w/o session: ' + a.friendlyName);
        }
      else this.hc('onReceiverAction_ called without receiver.');
  };
  g.h.MS = function (a) {
    if (this.la()) return window.Promise.reject(Error('disposed'));
    var b = a.receiver;
    b.receiverType != window.chrome.cast.ReceiverType.DIAL &&
      (this.hc('Not DIAL receiver: ' + b.friendlyName),
      (b.receiverType = window.chrome.cast.ReceiverType.DIAL));
    var c = this.o ? this.o.A : null;
    if (!c || c.label != b.label)
      return (
        this.hc(
          'Receiving DIAL launch request for non-clicked DIAL receiver: ' +
            b.friendlyName
        ),
        window.Promise.reject(Error('illegal DIAL launch'))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != window.chrome.cast.ReceiverType.DIAL
    ) {
      if (this.o.B)
        return (
          F7('Reselecting dial screen.'),
          this.V('yt-remote-cast2-session-change', this.o.B),
          window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1))
        );
      this.hc(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      H7(this, new C7(this.A, b, this.F));
    }
    b = this.o;
    b.H = a;
    return b.H.appState == window.chrome.cast.DialAppState.RUNNING
      ? new window.Promise(
          (0, g.B)(b.fN, b, (b.H.extraData || {}).screenId || null)
        )
      : new window.Promise((0, g.B)(b.uu, b));
  };
  g.h.tE = function (a) {
    if (!this.la()) {
      F7('New cast session ID: ' + a.sessionId);
      var b = a.receiver;
      if (b.receiverType != window.chrome.cast.ReceiverType.CUSTOM) {
        if (!this.o)
          if (b.receiverType == window.chrome.cast.ReceiverType.CAST)
            F7('Got resumed cast session before resumed mdx connection.'),
              (b.friendlyName = window.chrome.cast.unescape(b.friendlyName)),
              H7(this, new B7(this.A, b), !0);
          else {
            this.hc(
              'Got non-cast session without previous mdx receiver event, or mdx resume.'
            );
            return;
          }
        var c = this.o.A,
          d = r6(this.A.Ae(), c.label);
        d &&
          m6(d, b.label) &&
          c.receiverType != window.chrome.cast.ReceiverType.CAST &&
          b.receiverType == window.chrome.cast.ReceiverType.CAST &&
          (F7(
            'onSessionEstablished_: manual to cast session change ' +
              b.friendlyName
          ),
          g.lf(this.o),
          (this.o = new B7(this.A, b)),
          this.o.subscribe('sessionScreen', (0, g.B)(this.uE, this, this.o)),
          this.o.Kk(null));
        this.o.Fw(a);
      }
    }
  };
  g.h.kY = function () {
    return this.o ? this.o.QG() : null;
  };
  g.h.pV = function (a) {
    this.la() ||
      (this.hc('Failed to estabilish a session: ' + g.Gg(a)),
      a.code != window.chrome.cast.ErrorCode.CANCEL && H7(this, null));
  };
  g.h.UU = function (a) {
    F7('Receiver availability updated: ' + a);
    if (!this.la()) {
      var b = G7(this);
      this.D = a == window.chrome.cast.ReceiverAvailability.AVAILABLE;
      G7(this) != b && this.V('yt-remote-cast2-availability-change', G7(this));
    }
  };
  g.h.PG = function () {
    this.la() ||
      ((this.B = nEa(this)),
      F7('Updating custom receivers: ' + g.Gg(this.B)),
      window.chrome.cast.setCustomReceivers(
        this.B,
        g.z,
        (0, g.B)(function () {
          this.hc('Failed to set custom receivers.');
        }, this)
      ),
      this.V('yt-remote-cast2-availability-change', G7(this)));
  };
  E7.prototype.setLaunchParams = E7.prototype.cX;
  E7.prototype.setConnectedScreenStatus = E7.prototype.bX;
  E7.prototype.stopSession = E7.prototype.lY;
  E7.prototype.getCastSession = E7.prototype.kY;
  E7.prototype.requestSession = E7.prototype.requestSession;
  E7.prototype.init = E7.prototype.init;
  E7.prototype.dispose = E7.prototype.dispose;
  var N7 = [];
  g.h = S7.prototype;
  g.h.reset = function (a) {
    this.listId = '';
    this.index = -1;
    this.videoId = '';
    T7(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.o = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.A = a.trackData),
      (this.kg = a.hasPrevious),
      (this.hasNext = a.hasNext),
      (this.H = a.playerTime),
      (this.G = a.playerTimeAt),
      (this.D = a.seekableStart),
      (this.B = a.seekableEnd),
      (this.J = a.duration),
      (this.K = a.loadedTime),
      (this.C = a.liveIngestionTime),
      (this.F = !(0, window.isNaN)(this.C)));
  };
  g.h.rb = function () {
    return 1 == this.o;
  };
  g.h.isAdPlaying = function () {
    return 1081 == this.o;
  };
  g.h.getDuration = function () {
    return this.F ? this.J + U7(this) : this.J;
  };
  g.h.clone = function () {
    return new S7(Y7(this));
  };
  g.C($7, g.JF);
  g.h = $7.prototype;
  g.h.play = function () {
    1 == this.o
      ? (this.A ? this.A.play(null, g.z, f8(this, 'play')) : e8(this, 'play'),
        d8(this, 1, W7(a8(this))),
        this.V('remotePlayerChange'))
      : b8(this, this.play);
  };
  g.h.pause = function () {
    1 == this.o
      ? (this.A
          ? this.A.pause(null, g.z, f8(this, 'pause'))
          : e8(this, 'pause'),
        d8(this, 2, W7(a8(this))),
        this.V('remotePlayerChange'))
      : b8(this, this.pause);
  };
  g.h.LG = function (a) {
    if (1 == this.o) {
      if (this.A) {
        var b = a8(this),
          c = new window.chrome.cast.media.SeekRequest();
        c.currentTime = a;
        c.resumeState =
          b.rb() || 3 == b.o
            ? window.chrome.cast.media.ResumeState.PLAYBACK_START
            : window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
        this.A.seek(c, g.z, f8(this, 'seekTo', { newTime: a }));
      } else e8(this, 'seekTo', { newTime: a });
      d8(this, 3, a);
      this.V('remotePlayerChange');
    } else b8(this, g.Da(this.LG, a));
  };
  g.h.stop = function () {
    if (1 == this.o) {
      this.A
        ? this.A.stop(null, g.z, f8(this, 'stopVideo'))
        : e8(this, 'stopVideo');
      var a = a8(this);
      a.index = -1;
      a.videoId = '';
      T7(a);
      c8(this, a);
      this.V('remotePlayerChange');
    } else b8(this, this.stop);
  };
  g.h.setVolume = function (a, b) {
    if (1 == this.o) {
      var c = a8(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(
            d,
            (0, g.B)(function () {
              j7('CP', 'set receiver volume: ' + d);
            }, this),
            (0, g.B)(function () {
              this.hc('failed to set receiver volume.');
            }, this)
          );
        }
        c.muted != b &&
          this.B.setReceiverMuted(
            b,
            (0, g.B)(function () {
              j7('CP', 'set receiver muted: ' + b);
            }, this),
            (0, g.B)(function () {
              this.hc('failed to set receiver muted.');
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        e8(this, 'setVolume', e);
      }
      c.muted = b;
      c.volume = a;
      c8(this, c);
    } else b8(this, g.Da(this.setVolume, a, b));
  };
  g.h.LF = function (a, b) {
    if (1 == this.o) {
      var c = a8(this),
        d = { videoId: a };
      b &&
        ((c.A = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : '',
          languageName: b.languageName,
          format: b.format,
          kind: b.kind,
        }),
        (d.style = g.Gg(b.style)),
        g.fc(d, c.A));
      e8(this, 'setSubtitlesTrack', d);
      c8(this, c);
    } else b8(this, g.Da(this.LF, a, b));
  };
  g.h.Cx = function (a, b) {
    if (1 == this.o) {
      e8(this, 'setAudioTrack', { videoId: a, audioTrackId: b.Kb.id });
      var c = a8(this);
      c.audioTrackId = b.Kb.id;
      c8(this, c);
    } else b8(this, g.Da(this.Cx, a, b));
  };
  g.h.KG = function (a, b) {
    if (1 == this.o) {
      if (a && b) {
        var c = a8(this);
        X7(c, a, b);
        c8(this, c);
      }
      e8(this, 'previous');
    } else b8(this, g.Da(this.KG, a, b));
  };
  g.h.JG = function (a, b) {
    if (1 == this.o) {
      if (a && b) {
        var c = a8(this);
        X7(c, a, b);
        c8(this, c);
      }
      e8(this, 'next');
    } else b8(this, g.Da(this.JG, a, b));
  };
  g.h.Pz = function () {
    1 == this.o ? e8(this, 'dismissAutoplay') : b8(this, this.Pz);
  };
  g.h.dispose = function () {
    if (3 != this.o) {
      var a = this.o;
      this.o = 3;
      this.V('proxyStateChange', a, this.o);
    }
    $7.fa.dispose.call(this);
  };
  g.h.X = function () {
    AEa(this);
    this.C = null;
    this.D.clear();
    Z7(this, null);
    $7.fa.X.call(this);
  };
  g.h.Dx = function (a) {
    if ((a != this.o || 2 == a) && 3 != this.o && 0 != a) {
      var b = this.o;
      this.o = a;
      this.V('proxyStateChange', b, a);
      if (1 == a) for (; !this.D.isEmpty(); ) g.BC(this.D).apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.h.LU = function (a, b) {
    this.V(a, b);
  };
  g.h.jS = function (a) {
    if (!a) this.xn(null), Z7(this, null);
    else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = a8(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        j7('CP', 'Cast volume update: ' + a.level + (a.muted ? ' muted' : '')),
          (b.volume = c),
          (b.muted = !!a.muted),
          c8(this, b);
    }
  };
  g.h.xn = function (a) {
    j7('CP', 'Cast media: ' + !!a);
    this.A && this.A.removeUpdateListener(this.H);
    if ((this.A = a))
      this.A.addUpdateListener(this.H), BEa(this), this.V('remotePlayerChange');
  };
  g.h.iS = function (a) {
    a ? (BEa(this), this.V('remotePlayerChange')) : this.xn(null);
  };
  g.h.vS = function () {
    var a = xEa();
    a && Z7(this, a);
  };
  g.h.hc = function (a) {
    j7('CP', a);
  };
  g.C(g8, g.JF);
  g.h = g8.prototype;
  g.h.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.playerParams,
        f = b.clickTrackingParams,
        k = b.index,
        l = { videoId: d },
        m = b.currentTime,
        n = b.locationInfo;
      g.u(m) && (l.currentTime = 5 >= m ? 0 : m);
      e && (l.playerParams = e);
      n && (l.locationInfo = n);
      f && (l.clickTrackingParams = f);
      c && (l.listId = c);
      g.u(k) && (l.currentIndex = k);
      c && (this.jb.listId = c);
      this.jb.videoId = d;
      this.jb.index = k || 0;
      this.jb.state = 3;
      V7(this.jb, m);
      this.C = 'UNSUPPORTED';
      h8('Connecting with setPlaylist and params: ' + g.Gg(l));
      this.o.connect({ method: 'setPlaylist', params: g.Gg(l) }, a, WCa());
    } else h8('Connecting without params'), this.o.connect({}, a, WCa());
    DEa(this);
  };
  g.h.dispose = function () {
    this.la() || (this.V('beforeDispose'), i8(this, 3));
    g8.fa.dispose.call(this);
  };
  g.h.X = function () {
    j8(this);
    l8(this);
    k8(this);
    g.bE(this.J);
    this.J = window.NaN;
    g.bE(this.K);
    this.K = window.NaN;
    this.B = null;
    g.tF(this.Y);
    this.Y.length = 0;
    this.o.dispose();
    g8.fa.X.call(this);
    this.C = this.G = this.A = this.jb = this.o = null;
  };
  g.h.tL = function () {
    this.F(2);
  };
  g.h.nS = function () {
    h8('Channel opened');
    this.O &&
      ((this.O = !1),
      k8(this),
      (this.N = g.$D(
        (0, g.B)(function () {
          h8('Timing out waiting for a screen.');
          this.F(1);
        }, this),
        15e3
      )));
    $Ca(NDa(this.o), this.ca);
  };
  g.h.kS = function () {
    h8('Channel closed');
    (0, window.isNaN)(this.D) ? w6(!0) : w6();
    this.dispose();
  };
  g.h.lS = function (a) {
    w6();
    (0, window.isNaN)(this.H())
      ? (h8('Channel error: ' + a + ' without reconnection'), this.dispose())
      : ((this.O = !0),
        h8('Channel error: ' + a + ' with reconnection in ' + this.H() + ' ms'),
        i8(this, 2));
  };
  g.h.mS = function (a) {
    a.params
      ? h8('Received: action=' + a.action + ', params=' + g.Gg(a.params))
      : h8('Received: action=' + a.action + ' {}');
    switch (a.action) {
      case 'loungeStatus':
        a = g.hx(a.params.devices);
        this.A = (0, g.I)(a, function (a) {
          return new k6(a);
        });
        a = !!g.Ja(this.A, function (a) {
          return 'LOUNGE_SCREEN' == a.type;
        });
        GEa(this, a);
        break;
      case 'loungeScreenDisconnected':
        g.Ta(this.A, function (a) {
          return 'LOUNGE_SCREEN' == a.type;
        });
        GEa(this, !1);
        break;
      case 'remoteConnected':
        var b = new k6(g.hx(a.params.device));
        g.Ja(this.A, function (a) {
          return b ? a.id == b.id : !1;
        }) || g.Qa(this.A, b);
        break;
      case 'remoteDisconnected':
        b = new k6(g.hx(a.params.device));
        g.Ta(this.A, function (a) {
          return b ? a.id == b.id : !1;
        });
        break;
      case 'gracefulDisconnect':
        break;
      case 'playlistModified':
        IEa(this, a);
        break;
      case 'nowPlaying':
        KEa(this, a);
        break;
      case 'onStateChange':
        JEa(this, a);
        break;
      case 'onAdStateChange':
        LEa(this, a);
        break;
      case 'onVolumeChanged':
        MEa(this, a);
        break;
      case 'onSubtitlesTrackChanged':
        HEa(this, a);
        break;
      case 'nowAutoplaying':
        NEa(this, a);
        break;
      case 'autoplayDismissed':
        this.V('autoplayDismissed');
        break;
      case 'autoplayUpNext':
        this.G = a.params.videoId || null;
        this.V('autoplayUpNext', this.G);
        break;
      case 'onAutoplayModeChanged':
        this.C = a.params.autoplayMode;
        this.V('autoplayModeChange', this.C);
        'DISABLED' == this.C && this.V('autoplayDismissed');
        break;
      case 'onHasPreviousNextChanged':
        OEa(this, a);
        break;
      case 'requestAssistedSignIn':
        this.V('assistedSignInRequested', a.params.authCode);
        break;
      default:
        h8('Unrecognized action: ' + a.action);
    }
  };
  g.h.NW = function () {
    if (this.B) {
      var a = this.B;
      this.B = null;
      this.jb.videoId != a && m8(this, 'getNowPlaying');
    }
  };
  g8.prototype.subscribe = g8.prototype.subscribe;
  g8.prototype.unsubscribeByKey = g8.prototype.ae;
  g8.prototype.ka = function () {
    var a = 3;
    this.la() ||
      ((a = 0),
      (0, window.isNaN)(this.H())
        ? e7(this.o) && (0, window.isNaN)(this.D) && (a = 1)
        : (a = 2));
    return a;
  };
  g8.prototype.getProxyState = g8.prototype.ka;
  g8.prototype.F = function (a) {
    h8('Disconnecting with ' + a);
    j8(this);
    this.V('beforeDisconnect', a);
    1 == a && w6();
    ODa(this.o, a);
    this.dispose();
  };
  g8.prototype.disconnect = g8.prototype.F;
  g8.prototype.ia = function () {
    var a = this.jb;
    this.B && ((a = this.jb.clone()), X7(a, this.B, a.index));
    return Y7(a);
  };
  g8.prototype.getPlayerContextData = g8.prototype.ia;
  g8.prototype.pa = function (a) {
    var b = new S7(a);
    b.videoId &&
      b.videoId != this.jb.videoId &&
      ((this.B = b.videoId),
      g.bE(this.J),
      (this.J = g.$D((0, g.B)(this.NW, this), 5e3)));
    var c = [];
    (this.jb.listId == b.listId &&
      this.jb.videoId == b.videoId &&
      this.jb.index == b.index) ||
      c.push('remoteQueueChange');
    (this.jb.o == b.o &&
      this.jb.volume == b.volume &&
      this.jb.muted == b.muted &&
      W7(this.jb) == W7(b) &&
      g.Gg(this.jb.A) == g.Gg(b.A)) ||
      c.push('remotePlayerChange');
    this.jb.reset(a);
    (0, g.D)(
      c,
      function (a) {
        this.V(a);
      },
      this
    );
  };
  g8.prototype.setPlayerContextData = g8.prototype.pa;
  g8.prototype.aa = function () {
    var a = this.o.F.id,
      b = g.Ja(this.A, function (b) {
        return 'REMOTE_CONTROL' == b.type && b.id != a;
      });
    return b ? b.id : '';
  };
  g8.prototype.getOtherConnectedRemoteId = g8.prototype.aa;
  g8.prototype.H = function () {
    var a = this.o;
    return a.A.isActive() ? a.A.A - (0, g.H)() : window.NaN;
  };
  g8.prototype.getReconnectTimeout = g8.prototype.H;
  g8.prototype.ba = function () {
    return this.C || 'UNSUPPORTED';
  };
  g8.prototype.getAutoplayMode = g8.prototype.ba;
  g8.prototype.ga = function () {
    return this.G || '';
  };
  g8.prototype.getAutoplayVideoId = g8.prototype.ga;
  g8.prototype.xa = function () {
    if (!(0, window.isNaN)(this.H())) {
      var a = this.o.A;
      g.mu(a.o);
      a.start();
    }
  };
  g8.prototype.reconnect = g8.prototype.xa;
  g8.prototype.ma = function (a, b) {
    m8(this, a, b);
    FEa(this);
  };
  g8.prototype.sendMessage = g8.prototype.ma;
  g.C(n8, n7);
  g.h = n8.prototype;
  g.h.Ae = function (a) {
    return this.hd.$_gs(a);
  };
  g.h.contains = function (a) {
    return !!this.hd.$_c(a);
  };
  g.h.get = function (a) {
    return this.hd.$_g(a);
  };
  g.h.start = function () {
    this.hd.$_st();
  };
  g.h.add = function (a, b, c) {
    this.hd.$_a(a, b, c);
  };
  g.h.remove = function (a, b, c) {
    this.hd.$_r(a, b, c);
  };
  g.h.Dr = function (a, b, c, d) {
    this.hd.$_un(a, b, c, d);
  };
  g.h.X = function () {
    for (var a = 0, b = this.A.length; a < b; ++a) this.hd.$_ubk(this.A[a]);
    this.A.length = 0;
    this.hd = null;
    n8.fa.X.call(this);
  };
  g.h.hY = function () {
    this.V('screenChange');
  };
  g.h.kU = function () {
    this.V('onlineScreenChange');
  };
  w7.prototype.$_st = w7.prototype.start;
  w7.prototype.$_gspc = w7.prototype.iY;
  w7.prototype.$_gsppc = w7.prototype.OG;
  w7.prototype.$_c = w7.prototype.contains;
  w7.prototype.$_g = w7.prototype.get;
  w7.prototype.$_a = w7.prototype.add;
  w7.prototype.$_un = w7.prototype.Dr;
  w7.prototype.$_r = w7.prototype.remove;
  w7.prototype.$_gs = w7.prototype.Ae;
  w7.prototype.$_gos = w7.prototype.NG;
  w7.prototype.$_s = w7.prototype.subscribe;
  w7.prototype.$_ubk = w7.prototype.ae;
  var o8 = null,
    p8 = null,
    E8 = null,
    t8 = [];
  g.r(F8, g.M);
  g.h = F8.prototype;
  g.h.X = function () {
    g.M.prototype.X.call(this);
    this.B.stop();
    this.C.stop();
    this.K.stop();
    this.N();
    this.o.unsubscribe('proxyStateChange', this.qE, this);
    this.o.unsubscribe('remotePlayerChange', this.An, this);
    this.o.unsubscribe('remoteQueueChange', this.Dq, this);
    this.o.unsubscribe('autoplayUpNext', this.MD, this);
    this.o.unsubscribe('previousNextChange', this.nE, this);
    this.o.unsubscribe('nowAutoplaying', this.eE, this);
    this.o.unsubscribe('autoplayDismissed', this.LD, this);
    this.o = this.G = null;
  };
  g.h.JC = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    if (2 != this.o.o)
      if (I8(this)) {
        if (!a8(this.o).isAdPlaying() || 'control_seek' != a)
          switch (a) {
            case 'control_toggle_play_pause':
              a8(this.o).rb() ? this.o.pause() : this.o.play();
              break;
            case 'control_play':
              this.o.play();
              break;
            case 'control_pause':
              this.o.pause();
              break;
            case 'control_seek':
              this.J.Am(c[0], c[1]);
              break;
            case 'control_subtitles_set_track':
              J8(this, c[0]);
              break;
            case 'control_set_audio_track':
              (c = c[0]),
                I8(this) && this.o.Cx(this.T.getVideoData(1).videoId, c);
          }
      } else
        switch (a) {
          case 'control_toggle_play_pause':
          case 'control_play':
          case 'control_pause':
            c = this.T.getCurrentTime();
            K8(this, 0 == c ? void 0 : c);
            break;
          case 'control_seek':
            K8(this, c[0]);
            break;
          case 'control_subtitles_set_track':
            J8(this, c[0]);
            break;
          case 'control_set_audio_track':
            (c = c[0]),
              I8(this) && this.o.Cx(this.T.getVideoData(1).videoId, c);
        }
  };
  g.h.hS = function (a) {
    this.K.oL(a);
  };
  g.h.IX = function (a) {
    this.JC('control_subtitles_set_track', g.Wb(a) ? null : a);
  };
  g.h.aG = function () {
    var a = this.T.Ec('captions', 'track');
    g.Wb(a) || J8(this, a);
  };
  g.h.bE = function (a) {
    if (I8(this)) {
      this.o.unsubscribe('remotePlayerChange', this.An, this);
      var b = Math.round(a.volume);
      a = !!a.muted;
      var c = a8(this.o);
      if (b != c.volume || a != c.muted) this.o.setVolume(b, a), this.L.start();
      this.o.subscribe('remotePlayerChange', this.An, this);
    }
  };
  g.h.CT = function () {
    g.Wb(this.D) || $Ea(this, this.D);
    this.F = !1;
  };
  g.h.qE = function (a, b) {
    this.C.stop();
    2 == b && this.XF();
  };
  g.h.An = function () {
    if (I8(this)) {
      this.B.stop();
      var a = a8(this.o);
      switch (a.o) {
        case 1081:
        case 1:
          H8(this, new g.FP(8));
          this.WF();
          break;
        case 1085:
        case 3:
          H8(this, new g.FP(9));
          break;
        case 1083:
        case 0:
          H8(this, new g.FP(2));
          this.J.stop();
          G8(this, this.T.getVideoData().lengthSeconds);
          break;
        case 1084:
          H8(this, new g.FP(4));
          break;
        case 2:
          H8(this, new g.FP(4));
          G8(this, W7(a));
          break;
        case -1:
          H8(this, new g.FP(64));
          break;
        case -1e3:
          H8(
            this,
            new g.FP(128, {
              errorCode: 'mdx.remoteerror',
              message: 'This video is not available for remote playback.',
            })
          );
      }
      a = a8(this.o).A;
      var b = this.D;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.format == b.format &&
          a.kind == b.kind
        : 1) || ((this.D = a), $Ea(this, a));
      a = a8(this.o);
      -1 == a.volume ||
        (Math.round(this.T.getVolume()) == a.volume &&
          this.T.isMuted() == a.muted) ||
        this.L.isActive() ||
        this.wG();
    } else ZEa(this);
  };
  g.h.nE = function () {
    this.T.V('mdxpreviousnextchange');
  };
  g.h.Dq = function () {
    I8(this) || ZEa(this);
  };
  g.h.tK = function () {
    this.o.Pz();
  };
  g.h.MD = function (a) {
    a &&
      (a = g.qE('/watch_queue_ajax', {
        method: 'GET',
        ad: { action_get_watch_queue_item: 1, video_id: a },
        onSuccess: (0, g.B)(this.QV, this),
      })) &&
      (this.N = (0, g.B)(a.abort, a));
  };
  g.h.QV = function (a, b) {
    var c = new g.vO(g.X(this.T), {
      videoId: b.videoId,
      title: b.title,
      author: b.author,
      murlmq_webp: b.url,
    });
    this.suggestion = c;
    this.T.V('mdxautoplayupnext', c);
  };
  g.h.eE = function (a) {
    (0, window.isNaN)(a) || this.T.V('mdxnowautoplaying', a);
  };
  g.h.LD = function () {
    this.T.V('mdxautoplaycanceled');
  };
  g.h.lQ = function (a, b) {
    -1 == a8(this.o).o ? K8(this, a) : b && this.o.LG(a);
  };
  g.h.wG = function () {
    if (I8(this)) {
      var a = a8(this.o);
      this.A.Ga(this.O);
      a.muted ? this.T.mute() : this.T.tg();
      this.T.setVolume(a.volume);
      this.O = this.A.R(this.T, 'onVolumeChange', this.bE);
    }
  };
  g.h.WF = function () {
    this.B.stop();
    if (!this.o.la()) {
      var a = a8(this.o);
      a.rb() && H8(this, new g.FP(8));
      G8(this, W7(a));
      this.B.start();
    }
  };
  g.h.XF = function () {
    this.C.stop();
    this.B.stop();
    var a = this.o.C.getReconnectTimeout();
    2 == this.o.o && !(0, window.isNaN)(a) && this.C.start();
  };
  g.r(L8, g.V);
  L8.prototype.D = function (a) {
    bFa(this, a.state);
  };
  g.r(M8, g.CY);
  M8.prototype.K = function () {
    var a = this.T.Ec('remote', 'receivers');
    a && 1 < a.length && !this.T.Ec('remote', 'quickCast')
      ? ((this.H = g.ib(a, this.D, this)),
        g.DY(this, (0, g.I)(a, this.D)),
        (a = this.T.Ec('remote', 'currentReceiver')),
        this.Gf(this.D(a)),
        this.enable(!0))
      : this.enable(!1);
  };
  M8.prototype.D = function (a) {
    return a.key;
  };
  M8.prototype.Ff = function (a) {
    return 'cast-selector-receiver' == a ? 'Cast...' : this.H[a].name;
  };
  M8.prototype.Dd = function (a) {
    g.CY.prototype.Dd.call(this, a);
    this.T.Ud('remote', 'currentReceiver', this.H[a]);
    this.C.Ob();
  };
  g.r(N8, g.FU);
  g.h = N8.prototype;
  g.h.create = function () {
    TEa(g.zM(g.X(this.o)));
    this.F.push(g.VF('yt-remote-before-disconnect', this.dS, this));
    this.F.push(g.VF('yt-remote-connection-change', this.VU, this));
    this.F.push(g.VF('yt-remote-receiver-availability-change', this.oE, this));
    this.F.push(g.VF('yt-remote-auto-connect', this.TU, this));
    this.F.push(g.VF('yt-remote-receiver-resumed', this.SU, this));
    this.oE();
  };
  g.h.load = function () {
    this.o.jv();
    g.FU.prototype.load.call(this);
    this.D = new F8(this, this.o, this.A);
    var a = (a = YEa()) ? a.currentTime : 0;
    var b = D8() ? new $7(y8(), void 0) : null;
    0 == a && b && (a = W7(a8(b)));
    0 != a && ((this.J = a || 0), this.o.V('progresssync', a, void 0));
    aFa(this, this.G, this.G);
    g.N_(this.o.app, 6);
  };
  g.h.unload = function () {
    this.o.V('mdxautoplaycanceled');
    this.C = this.B;
    g.mf(this.D, this.A);
    this.A = this.D = null;
    g.FU.prototype.unload.call(this);
    g.N_(this.o.app, 5);
  };
  g.h.X = function () {
    g.WF(this.F);
    g.FU.prototype.X.call(this);
  };
  g.h.jn = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.loaded && this.D.JC.apply(this.D, [a].concat(g.oa(c)));
  };
  g.h.jL = function () {
    return this.loaded ? this.D.suggestion : null;
  };
  g.h.kg = function () {
    return this.A ? a8(this.A).kg : !1;
  };
  g.h.hasNext = function () {
    return this.A ? a8(this.A).hasNext : !1;
  };
  g.h.getCurrentTime = function () {
    return this.J;
  };
  g.h.ZP = function () {
    var a = a8(this.A),
      b = this.o.getVideoData();
    return {
      allowSeeking: this.o.kd(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.F ? a.C + U7(a) : a.C,
      isPeggedToLive: 1 >= (a.F ? a.B + U7(a) : a.B) - this.getCurrentTime(),
      loaded: a.K,
      seekableEnd: a.F ? a.B + U7(a) : a.B,
      seekableStart: 0 < a.D ? a.D + U7(a) : a.D,
    };
  };
  g.h.aQ = function () {
    this.A && this.A.JG();
  };
  g.h.bQ = function () {
    this.A && this.A.KG();
  };
  g.h.dS = function (a) {
    1 == a && (this.K = this.A ? a8(this.A) : null);
  };
  g.h.VU = function () {
    var a = D8() ? new $7(y8(), void 0) : null;
    if (a) {
      var b = this.C;
      this.loaded && this.unload();
      this.A = a;
      this.K = null;
      b.key != this.B.key && ((this.C = b), this.load());
    } else
      g.lf(this.A),
        (this.A = null),
        this.loaded &&
          (this.unload(),
          (a = this.K) &&
            a.videoId == this.o.getVideoData().videoId &&
            this.o.nC(a.videoId, W7(a)));
    this.o.V('videodatachange', 'newdata', this.o.getVideoData(), 3);
  };
  g.h.oE = function () {
    this.H = [this.B].concat(VEa());
    var a = z8() || this.B;
    O8(this, a);
    this.o.ya('onMdxReceiversChange');
  };
  g.h.TU = function () {
    var a = z8();
    O8(this, a);
  };
  g.h.SU = function () {
    this.C = z8();
  };
  g.h.YP = function (a, b) {
    switch (a) {
      case 'casting':
        return this.loaded;
      case 'receivers':
        return this.H;
      case 'currentReceiver':
        return (
          b && ('cast-selector-receiver' == b.key ? Q7() : O8(this, b)),
          this.loaded ? this.C : this.B
        );
      case 'quickCast':
        return 2 == this.H.length && 'cast-selector-receiver' == this.H[1].key
          ? (b && Q7(), !0)
          : !1;
    }
  };
  g.h.cQ = function () {
    e8(this.A, 'sendDebugCommand', { debugCommand: 'stats4nerds ' });
  };
  g.h.Mc = function () {
    return !1;
  };
  g.BX.remote = N8;
})(_yt_player);
